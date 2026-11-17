import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate } from './_shared/store.js'

/** Undo a single ledger entry. */
export default async (req: Request, context: { params: { id: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id } = context.params
  const ok = await mutate(guard.session.username, (data) => {
    const idx = data.awards.findIndex((a) => a.id === id)
    if (idx === -1) return false
    data.awards.splice(idx, 1)
    return true
  })

  if (!ok) return Response.json({ error: 'Entry not found.' }, { status: 404 })
  return Response.json({ ok: true })
}

export const config: Config = { path: '/api/awards/:id', method: 'DELETE' }
