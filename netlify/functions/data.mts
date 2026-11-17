import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate, newId, nowIso, readData } from './_shared/store.js'
import { DEFAULT_BEHAVIOURS } from './_shared/behaviours.js'

/** One bootstrap read: everything the terminal needs to render. */
export default async (req: Request) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const username = guard.session.username
  const data = await readData(username)

  // Hand a new account a starting catalogue of effects, exactly once. The flag
  // means deleting them all leaves them deleted.
  if (!data.settings.behavioursSeeded) {
    return Response.json(
      await mutate(username, (d) => {
        if (d.settings.behavioursSeeded) return d
        d.behaviours = DEFAULT_BEHAVIOURS.map((b) => ({ ...b, id: newId(), createdAt: nowIso() }))
        d.settings = { ...d.settings, behavioursSeeded: true }
        return d
      })
    )
  }

  return Response.json(data)
}

export const config: Config = { path: '/api/data' }
