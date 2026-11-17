import type { Config } from '@netlify/functions'
import { getSession } from './_shared/auth.js'
import { configError } from './_shared/config.js'

export default async (req: Request) => {
  const bad = configError()
  if (bad) return bad

  const session = await getSession(req)
  if (!session) return Response.json({ error: 'Unauthorized' }, { status: 401 })
  return Response.json({
    user: { username: session.username, email: session.email, name: session.name, role: session.role },
  })
}

export const config: Config = { path: '/api/session' }
