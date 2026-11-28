import Anthropic from '@anthropic-ai/sdk'
import OpenAI from 'openai'
import type { Provider, TokenUsage } from './pricing.js'

/**
 * One provider-neutral conversation format. The browser keeps the history in
 * this shape; each adapter converts it to its own wire format per turn.
 *
 * Assistant turns carry `raw`: the provider's own content, sent back byte for
 * byte. That keeps reasoning items and thinking blocks valid across a tool
 * loop, and means a conversation is tied to the provider that started it.
 */
export type ToolCall = { id: string; name: string; input: unknown }

export type NeutralMessage =
  | { role: 'user'; text: string }
  | { role: 'assistant'; text: string; toolCalls: ToolCall[]; raw: unknown }
  | { role: 'tool'; results: { id: string; name: string; output: string; isError?: boolean }[] }

export type ToolDef = { name: string; description: string; parameters: Record<string, unknown> }

export type StopReason = 'end' | 'tool_use' | 'max_tokens' | 'refusal' | 'other'

export type TurnResult = {
  text: string
  toolCalls: ToolCall[]
  raw: unknown
  stopReason: StopReason
  /** The model that actually answered (a declined Claude turn may fall back). */
  model: string
  usage: TokenUsage
}

export type TurnOptions = {
  provider: Provider
  apiKey: string
  model: string
  system: string
  messages: NeutralMessage[]
  tools: ToolDef[]
  onText: (delta: string) => void
  signal?: AbortSignal
}

export function runTurn(opts: TurnOptions): Promise<TurnResult> {
  return opts.provider === 'openai' ? runOpenAI(opts) : runAnthropic(opts)
}

// ---------------------------------------------------------------- OpenAI

function toOpenAIInput(messages: NeutralMessage[]): OpenAI.Responses.ResponseInputItem[] {
  const out: OpenAI.Responses.ResponseInputItem[] = []
  for (const m of messages) {
    if (m.role === 'user') out.push({ role: 'user', content: m.text })
    else if (m.role === 'assistant') out.push(...((m.raw as OpenAI.Responses.ResponseInputItem[]) ?? []))
    else
      for (const r of m.results) out.push({ type: 'function_call_output', call_id: r.id, output: r.output })
  }
  return out
}

async function runOpenAI(o: TurnOptions): Promise<TurnResult> {
  const client = new OpenAI({ apiKey: o.apiKey })
  const stream = client.responses.stream(
    {
      model: o.model,
      instructions: o.system,
      input: toOpenAIInput(o.messages),
      tools: o.tools.map((t) => ({
        type: 'function' as const,
        name: t.name,
        description: t.description,
        parameters: t.parameters,
        strict: false,
      })),
      // Stateless: reasoning comes back encrypted and is replayed from `raw`.
      store: false,
      include: ['reasoning.encrypted_content'],
      reasoning: { effort: 'medium' },
      max_output_tokens: 32000,
    },
    { signal: o.signal }
  )
  stream.on('response.output_text.delta', (e) => o.onText(e.delta))
  const res = await stream.finalResponse()

  const toolCalls: ToolCall[] = []
  for (const item of res.output) {
    if (item.type !== 'function_call') continue
    let input: unknown = {}
    try {
      input = JSON.parse(item.arguments || '{}')
    } catch {
      input = { __invalid_json: item.arguments }
    }
    toolCalls.push({ id: item.call_id, name: item.name, input })
  }

  const cached = res.usage?.input_tokens_details?.cached_tokens ?? 0
  const incomplete = res.status === 'incomplete' && res.incomplete_details?.reason === 'max_output_tokens'
  // The SDK's stream helper decorates items with parsed copies (parsed_arguments,
  // parsed) that the API rejects as input, so replay only the wire fields.
  const raw = JSON.parse(JSON.stringify(res.output, (k, v) => (k === 'parsed_arguments' || k === 'parsed' ? undefined : v)))

  return {
    text: res.output_text ?? '',
    toolCalls,
    raw,
    stopReason: incomplete ? 'max_tokens' : toolCalls.length ? 'tool_use' : res.status === 'completed' ? 'end' : 'other',
    model: res.model ?? o.model,
    usage: {
      inputTokens: Math.max(0, (res.usage?.input_tokens ?? 0) - cached),
      outputTokens: res.usage?.output_tokens ?? 0,
      cachedInputTokens: cached,
      cacheWriteTokens: 0,
    },
  }
}

// ---------------------------------------------------------------- Anthropic

function toAnthropicMessages(messages: NeutralMessage[]): Anthropic.Beta.BetaMessageParam[] {
  const out: Anthropic.Beta.BetaMessageParam[] = []
  for (const m of messages) {
    if (m.role === 'user') out.push({ role: 'user', content: m.text })
    else if (m.role === 'assistant')
      out.push({ role: 'assistant', content: m.raw as Anthropic.Beta.BetaContentBlockParam[] })
    else
      out.push({
        role: 'user',
        content: m.results.map((r) => ({
          type: 'tool_result' as const,
          tool_use_id: r.id,
          content: r.output,
          is_error: r.isError ?? false,
        })),
      })
  }
  return out
}

async function runAnthropic(o: TurnOptions): Promise<TurnResult> {
  const client = new Anthropic({ apiKey: o.apiKey })
  const stream = client.beta.messages.stream(
    {
      model: o.model,
      max_tokens: 64000,
      // The system prompt is frozen for the whole conversation, so it caches.
      system: [{ type: 'text', text: o.system, cache_control: { type: 'ephemeral' } }],
      // And the growing history caches turn to turn.
      cache_control: { type: 'ephemeral' },
      messages: toAnthropicMessages(o.messages),
      tools: o.tools.map((t) => ({
        name: t.name,
        description: t.description,
        input_schema: t.parameters as Anthropic.Beta.BetaTool.InputSchema,
        eager_input_streaming: true,
      })),
      output_config: { effort: 'medium' },
      // A declined turn re-runs on a fallback model inside the same call.
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
    },
    { signal: o.signal }
  )
  stream.on('text', (delta) => o.onText(delta))
  const msg = await stream.finalMessage()

  const toolCalls: ToolCall[] = []
  let text = ''
  for (const block of msg.content) {
    if (block.type === 'text') text += block.text
    else if (block.type === 'tool_use') toolCalls.push({ id: block.id, name: block.name, input: block.input })
  }

  const stop: StopReason =
    msg.stop_reason === 'tool_use'
      ? 'tool_use'
      : msg.stop_reason === 'end_turn'
        ? 'end'
        : msg.stop_reason === 'max_tokens'
          ? 'max_tokens'
          : msg.stop_reason === 'refusal'
            ? 'refusal'
            : 'other'

  return {
    text,
    toolCalls,
    raw: msg.content,
    stopReason: stop,
    model: msg.model,
    usage: {
      inputTokens: msg.usage.input_tokens,
      outputTokens: msg.usage.output_tokens,
      cachedInputTokens: msg.usage.cache_read_input_tokens ?? 0,
      cacheWriteTokens: msg.usage.cache_creation_input_tokens ?? 0,
    },
  }
}

/** A readable message from either SDK's typed errors. */
export function describeError(err: unknown): string {
  if (err instanceof Anthropic.APIError || err instanceof OpenAI.APIError) {
    const status = err.status ? `${err.status}: ` : ''
    return `${status}${err.message}`
  }
  if (err instanceof Error) return err.message
  return 'The AI request failed.'
}
