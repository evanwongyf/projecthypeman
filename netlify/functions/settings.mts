import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate } from './_shared/store.js'

/**
 * Stores the signed-in teacher's design choices so they follow the account to
 * another device. Values are kept as opaque strings: the browser owns the
 * catalogue and normalises whatever it reads back.
 */
export default async (req: Request) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const body = (await req.json()) as { design?: Record<string, unknown> }
  if (!body.design || typeof body.design !== 'object') {
    return Response.json({ error: 'A design object is required.' }, { status: 400 })
  }

  // Keep only short string values, so a bad client can't bloat the blob.
  const design: Record<string, string> = {}
  for (const [key, value] of Object.entries(body.design)) {
    if (typeof value !== 'string' || value.length > 40) continue
    if (!/^[a-z0-9-]+$/i.test(key) || key.length > 40) continue
    design[key] = value
  }

  const saved = await mutate(guard.session.username, (data) => {
    data.settings = { ...data.settings, design }
    return data.settings
  })

  return Response.json(saved)
}

export const config: Config = { path: '/api/settings', method: 'PATCH' }
