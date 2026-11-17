import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { readData } from './_shared/store.js'

/** One bootstrap read: everything the terminal needs to render. */
export default async (req: Request) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  return Response.json(await readData(guard.session.username))
}

export const config: Config = { path: '/api/data' }
