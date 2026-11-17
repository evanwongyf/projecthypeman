import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate } from './_shared/store.js'
import { RELATIONSHIP_KINDS, type RelationshipKind } from './_shared/types.js'

export default async (req: Request, context: { params: { id: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id } = context.params

  if (req.method === 'DELETE') {
    const ok = await mutate(guard.session.username, (data) => {
      for (const s of data.students) {
        const idx = s.relationships.findIndex((r) => r.id === id)
        if (idx >= 0) {
          s.relationships.splice(idx, 1)
          return true
        }
      }
      return false
    })
    if (!ok) return Response.json({ error: 'Relationship not found.' }, { status: 404 })
    return Response.json({ ok: true })
  }

  const body = (await req.json()) as { kind?: string }
  if (body.kind !== undefined && !RELATIONSHIP_KINDS.includes(body.kind as RelationshipKind)) {
    return Response.json({ error: 'Pick a relationship type.' }, { status: 400 })
  }

  const result = await mutate(guard.session.username, (data) => {
    for (const s of data.students) {
      const rel = s.relationships.find((r) => r.id === id)
      if (!rel) continue
      if (body.kind !== undefined) rel.kind = body.kind as RelationshipKind
      return rel
    }
    return null
  })

  if (!result) return Response.json({ error: 'Relationship not found.' }, { status: 404 })
  return Response.json(result)
}

export const config: Config = { path: '/api/relationships/:id', method: ['PATCH', 'DELETE'] }
