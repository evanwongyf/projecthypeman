import { createHash } from 'node:crypto'
import { readJsonAt, writeJsonAt } from '../store.js'
import { costOf, type Provider, type TokenUsage } from './pricing.js'

/**
 * A metered ledger of every AI call made through Hypeman, per account and per
 * API key. Keys are identified by a hash, never stored, so a rotated key gets
 * a fresh row while the old one keeps its history.
 */
export type ModelUsage = {
  requests: number
  inputTokens: number
  outputTokens: number
  cachedInputTokens: number
  cacheWriteTokens: number
  /** Sum over calls whose model has a known price. */
  costUsd: number
  /** Calls to a model with no price on file, so the cost is a floor. */
  unpricedRequests: number
}

export type KeyUsage = {
  provider: Provider
  /** "sk-proj…F1Sg": enough to recognise the key, useless to anyone else. */
  keyHint: string
  firstUsedAt: string
  lastUsedAt: string
  models: Record<string, ModelUsage>
  /** YYYY-MM-DD (UTC) -> spend that day. */
  days: Record<string, { requests: number; costUsd: number }>
}

export type UsageLedger = { keys: Record<string, KeyUsage> }

const ledgerPath = (username: string) => ['ai-usage', `${username.toLowerCase()}.json`]

export function keyId(apiKey: string): string {
  return createHash('sha256').update(apiKey).digest('hex').slice(0, 16)
}

export function keyHint(apiKey: string): string {
  return `${apiKey.slice(0, 7)}…${apiKey.slice(-4)}`
}

export async function readLedger(username: string): Promise<UsageLedger> {
  const ledger = await readJsonAt<UsageLedger>(ledgerPath(username), () => ({ keys: {} }))
  ledger.keys ??= {}
  return ledger
}

/** Add one call to the ledger and return what it cost. */
export async function recordUsage(
  username: string,
  provider: Provider,
  apiKey: string,
  model: string,
  usage: TokenUsage
): Promise<number | null> {
  const cost = costOf(model, usage)
  const now = new Date().toISOString()
  const day = now.slice(0, 10)

  const ledger = await readLedger(username)
  const id = keyId(apiKey)
  const row = (ledger.keys[id] ??= {
    provider,
    keyHint: keyHint(apiKey),
    firstUsedAt: now,
    lastUsedAt: now,
    models: {},
    days: {},
  })
  row.lastUsedAt = now

  const m = (row.models[model] ??= {
    requests: 0,
    inputTokens: 0,
    outputTokens: 0,
    cachedInputTokens: 0,
    cacheWriteTokens: 0,
    costUsd: 0,
    unpricedRequests: 0,
  })
  m.requests += 1
  m.inputTokens += usage.inputTokens
  m.outputTokens += usage.outputTokens
  m.cachedInputTokens += usage.cachedInputTokens
  m.cacheWriteTokens += usage.cacheWriteTokens
  if (cost === null) m.unpricedRequests += 1
  else m.costUsd += cost

  const d = (row.days[day] ??= { requests: 0, costUsd: 0 })
  d.requests += 1
  d.costUsd += cost ?? 0

  await writeJsonAt(ledgerPath(username), ledger)
  return cost
}
