import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate, newId, nowIso } from './_shared/store.js'
import type { Entry } from './_shared/types.js'

/** Add a note to an existing relationship. Newest first, each stamped. */
export default async (req: Request, context: { params: { id: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id } = context.params
  const body = (await req.json()) as { text?: string }
  const text = body.text?.trim()
  if (!text) return Response.json({ error: 'Write something first.' }, { status: 400 })

  const entry: Entry = { id: newId(), text, createdAt: nowIso() }

  const ok = await mutate(guard.session.username, (data) => {
    for (const s of data.students) {
      const rel = s.relationships.find((r) => r.id === id)
      if (!rel) continue
      rel.notes.unshift(entry)
      return true
    }
    return false
  })

  if (!ok) return Response.json({ error: 'Relationship not found.' }, { status: 404 })
  return Response.json(entry, { status: 201 })
}

export const config: Config = { path: '/api/relationships/:id/notes', method: 'POST' }
