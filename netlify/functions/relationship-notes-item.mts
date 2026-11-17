import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate } from './_shared/store.js'

export default async (req: Request, context: { params: { id: string; noteId: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id, noteId } = context.params

  const result = await mutate(guard.session.username, (data) => {
    for (const s of data.students) {
      const rel = s.relationships.find((r) => r.id === id)
      if (!rel) continue
      const idx = rel.notes.findIndex((n) => n.id === noteId)
      if (idx === -1) return 'nonote' as const
      // A relationship is defined by its first note, so never leave it with none.
      if (rel.notes.length === 1) return 'last' as const
      rel.notes.splice(idx, 1)
      return 'ok' as const
    }
    return 'norel' as const
  })

  if (result === 'norel') return Response.json({ error: 'Relationship not found.' }, { status: 404 })
  if (result === 'nonote') return Response.json({ error: 'Note not found.' }, { status: 404 })
  if (result === 'last') {
    return Response.json(
      { error: 'That is the only note. Delete the relationship instead.' },
      { status: 400 }
    )
  }
  return Response.json({ ok: true })
}

export const config: Config = { path: '/api/relationships/:id/notes/:noteId', method: 'DELETE' }
