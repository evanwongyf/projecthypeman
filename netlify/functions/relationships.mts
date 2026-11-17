import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate, newId, nowIso } from './_shared/store.js'
import { RELATIONSHIP_KINDS, type Relationship, type RelationshipKind } from './_shared/types.js'

export default async (req: Request) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const body = (await req.json()) as {
    studentId?: string
    kind?: string
    otherStudentId?: string
    otherName?: string
    note?: string
  }

  if (!body.studentId) return Response.json({ error: 'A student is required.' }, { status: 400 })
  if (!RELATIONSHIP_KINDS.includes(body.kind as RelationshipKind)) {
    return Response.json({ error: 'Pick a relationship type.' }, { status: 400 })
  }
  if (!body.otherStudentId && !body.otherName?.trim()) {
    return Response.json({ error: 'Say who the other person is.' }, { status: 400 })
  }
  if (body.otherStudentId && body.otherStudentId === body.studentId) {
    return Response.json({ error: 'Pick someone other than this student.' }, { status: 400 })
  }

  // One note is written as the relationship is created; more can follow.
  const note = body.note?.trim()
  if (!note) return Response.json({ error: 'Add a first note about this relationship.' }, { status: 400 })

  const relationship: Relationship = {
    id: newId(),
    kind: body.kind as RelationshipKind,
    otherStudentId: body.otherStudentId || undefined,
    otherName: body.otherStudentId ? undefined : body.otherName!.trim(),
    notes: [{ id: newId(), text: note, createdAt: nowIso() }],
    createdAt: nowIso(),
  }

  const result = await mutate(guard.session.username, (data) => {
    const student = data.students.find((s) => s.id === body.studentId)
    if (!student) return 'nostudent' as const
    if (relationship.otherStudentId && !data.students.some((s) => s.id === relationship.otherStudentId)) {
      return 'noother' as const
    }
    student.relationships.push(relationship)
    return 'ok' as const
  })

  if (result === 'nostudent') return Response.json({ error: 'Student not found.' }, { status: 404 })
  if (result === 'noother') return Response.json({ error: 'The other student was not found.' }, { status: 404 })
  return Response.json(relationship, { status: 201 })
}

export const config: Config = { path: '/api/relationships', method: 'POST' }
