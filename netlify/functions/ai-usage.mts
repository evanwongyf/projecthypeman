import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { MODELS, PRICES, type Provider } from './_shared/ai/pricing.js'
import { keyHint, keyId, readLedger } from './_shared/ai/usage.js'

/**
 * Usage per API key for the signed-in account: every key configured on the
 * server (even if unused yet), plus any older key that still has history.
 *
 * Provider APIs do not reveal a remaining credit balance to ordinary keys, so
 * this is metered here, from the token counts each call reports.
 */
const KEYS: { provider: Provider; env: string }[] = [
  { provider: 'openai', env: 'OPENAI_API_KEY' },
  { provider: 'anthropic', env: 'ANTHROPIC_API_KEY' },
]

export default async (req: Request) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const ledger = await readLedger(guard.session.username)
  const configured = KEYS.map(({ provider, env }) => {
    const key = process.env[env]
    return key ? { provider, env, keyId: keyId(key), keyHint: keyHint(key) } : { provider, env, keyId: null, keyHint: null }
  })

  return Response.json({ configured, ledger, prices: PRICES, models: MODELS })
}

export const config: Config = { path: '/api/ai/usage', method: 'GET' }
