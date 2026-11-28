/**
 * List prices in US dollars per million tokens.
 *
 * Anthropic rates are Anthropic's first-party API prices (Nov 2026). OpenAI
 * rates are the published GPT-6.2 list prices (Nov 2026, prompts up to 272K
 * tokens). Check both providers' pricing pages before treating the dashboard
 * as a bill: it is an estimate of what calls made through Hypeman cost.
 */
export type Price = {
  input: number
  output: number
  /** Reading cached prompt tokens. */
  cacheRead: number
  /** Writing the prompt cache (Anthropic only; OpenAI caches for free). */
  cacheWrite: number
}

export const PRICES: Record<string, Price> = {
  // Anthropic
  'claude-opus-5-5': { input: 4, output: 20, cacheRead: 0.2, cacheWrite: 5 },
  'claude-sonnet-5-5': { input: 2, output: 10, cacheRead: 0.1, cacheWrite: 2.5 },
  'claude-fable-5-2': { input: 8, output: 40, cacheRead: 0.2, cacheWrite: 10 },
  'claude-haiku-5-5': { input: 0.1, output: 0.5, cacheRead: 0.01, cacheWrite: 0.125 },
  // Fallback targets the Claude API may route to on a declined request.
  'claude-opus-5': { input: 5, output: 25, cacheRead: 0.5, cacheWrite: 6.25 },
  'claude-opus-4-8': { input: 5, output: 25, cacheRead: 0.5, cacheWrite: 6.25 },
  'claude-sonnet-5': { input: 2, output: 10, cacheRead: 0.2, cacheWrite: 2.5 },
  // OpenAI
  'gpt-6.2-astra': { input: 8, output: 40, cacheRead: 0.4, cacheWrite: 0 },
  'gpt-6.2-sol': { input: 2, output: 10, cacheRead: 0.1, cacheWrite: 0 },
}

export type Provider = 'openai' | 'anthropic'

/** The models the copilot offers. The first per provider is the default. */
export const MODELS: { id: string; provider: Provider; label: string; hint: string }[] = [
  { id: 'gpt-6.2-astra', provider: 'openai', label: 'GPT-6.2 Astra', hint: 'OpenAI flagship' },
  { id: 'gpt-6.2-sol', provider: 'openai', label: 'GPT-6.2 Sol', hint: 'Faster, a quarter of the price' },
  { id: 'claude-opus-5-5', provider: 'anthropic', label: 'Claude Opus 5.5', hint: 'Anthropic default' },
  { id: 'claude-sonnet-5-5', provider: 'anthropic', label: 'Claude Sonnet 5.5', hint: 'Faster, half the price' },
  { id: 'claude-fable-5-2', provider: 'anthropic', label: 'Claude Fable 5.2', hint: 'Most capable, slowest' },
]

export type TokenUsage = {
  /** Prompt tokens billed at the full input rate. */
  inputTokens: number
  outputTokens: number
  cachedInputTokens: number
  cacheWriteTokens: number
}

/** Dollar cost of one call, or null when the model has no known price. */
export function costOf(model: string, u: TokenUsage): number | null {
  const p = PRICES[model]
  if (!p) return null
  return (
    (u.inputTokens * p.input +
      u.outputTokens * p.output +
      u.cachedInputTokens * p.cacheRead +
      u.cacheWriteTokens * p.cacheWrite) /
    1_000_000
  )
}
