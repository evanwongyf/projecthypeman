import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { MODELS, type Provider } from './_shared/ai/pricing.js'
import { describeError, runTurn, type NeutralMessage } from './_shared/ai/providers.js'
import { COPILOT_TOOLS } from './_shared/ai/tools.js'
import { recordUsage } from './_shared/ai/usage.js'

/**
 * One copilot turn, streamed back as newline-delimited JSON:
 *   {"t":"text","d":"..."}            a slice of the reply as it is written
 *   {"t":"done", ...turn result}      the finished turn, tool calls and usage
 *   {"t":"error","message":"..."}     the turn failed
 *
 * The browser runs the tool loop: it executes the tool calls against its own
 * DuckDB and calls back with the results. Keeping one model call per request
 * keeps each request well inside the function time limit, and keeps the API
 * keys on the server.
 */

const KEY_ENV: Record<Provider, string> = { openai: 'OPENAI_API_KEY', anthropic: 'ANTHROPIC_API_KEY' }
const MAX_BODY = 4_000_000

export default async (req: Request) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const rawBody = await req.text()
  if (rawBody.length > MAX_BODY) {
    return Response.json({ error: 'This conversation is too long. Start a new chat.' }, { status: 413 })
  }

  let body: { model?: unknown; system?: unknown; messages?: unknown }
  try {
    body = JSON.parse(rawBody)
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const model = MODELS.find((m) => m.id === body.model)
  if (!model) return Response.json({ error: 'Unknown model.' }, { status: 400 })
  if (typeof body.system !== 'string' || !Array.isArray(body.messages) || body.messages.length === 0) {
    return Response.json({ error: 'A system prompt and messages are required.' }, { status: 400 })
  }

  const apiKey = process.env[KEY_ENV[model.provider]]
  if (!apiKey) {
    return Response.json(
      { error: `${KEY_ENV[model.provider]} is not set on the server, so ${model.label} is unavailable.` },
      { status: 400 }
    )
  }

  const username = guard.session.username
  const system = body.system
  const messages = body.messages as NeutralMessage[]
  const encoder = new TextEncoder()

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (obj: unknown) => controller.enqueue(encoder.encode(JSON.stringify(obj) + '\n'))
      try {
        const result = await runTurn({
          provider: model.provider,
          apiKey,
          model: model.id,
          system,
          messages,
          tools: COPILOT_TOOLS,
          onText: (d) => send({ t: 'text', d }),
          signal: req.signal,
        })
        let costUsd: number | null = null
        try {
          costUsd = await recordUsage(username, model.provider, apiKey, result.model, result.usage)
        } catch (err) {
          // Metering must never cost the user their answer.
          console.error('usage ledger write failed', err)
        }
        send({ t: 'done', ...result, costUsd })
      } catch (err) {
        send({ t: 'error', message: describeError(err) })
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: { 'Content-Type': 'application/x-ndjson; charset=utf-8', 'Cache-Control': 'no-store' },
  })
}

export const config: Config = { path: '/api/analytics/copilot', method: 'POST' }
