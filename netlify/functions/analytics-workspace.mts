import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { readJsonAt, writeJsonAt } from './_shared/store.js'

/**
 * The analytics workspace: dashboards and their chart specs, one object per
 * account. The data itself never comes here; it stays in the browser.
 */
const MAX_BYTES = 1_000_000

const pathFor = (username: string) => ['analytics', username.toLowerCase(), 'workspace.json']

export default async (req: Request) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response
  const username = guard.session.username

  if (req.method === 'GET') {
    return Response.json(await readJsonAt(pathFor(username), () => ({ dashboards: [] })))
  }

  const raw = await req.text()
  if (raw.length > MAX_BYTES) return Response.json({ error: 'The workspace is too large to save.' }, { status: 413 })
  let body: { dashboards?: unknown }
  try {
    body = JSON.parse(raw)
  } catch {
    return Response.json({ error: 'Invalid workspace.' }, { status: 400 })
  }
  if (!Array.isArray(body.dashboards)) return Response.json({ error: 'Invalid workspace.' }, { status: 400 })

  const saved = { dashboards: body.dashboards, savedAt: new Date().toISOString() }
  await writeJsonAt(pathFor(username), saved)
  return Response.json(saved)
}

export const config: Config = { path: '/api/analytics/workspace', method: ['GET', 'PUT'] }
