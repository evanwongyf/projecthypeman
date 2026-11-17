import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate, newId, nowIso } from './_shared/store.js'
import type { Guardian } from './_shared/types.js'

/** Kept off /api/students/:id/... so it cannot collide with the notes and
 *  incidents route, which takes the entry kind as a path parameter. */
export default async (req: Request) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const body = (await req.json()) as {
    studentId?: string
    name?: string
    relation?: string
    phone?: string
    email?: string
    note?: string
  }

  const name = body.name?.trim()
  if (!body.studentId) return Response.json({ error: 'A student is required.' }, { status: 400 })
  if (!name) return Response.json({ error: 'A name is required.' }, { status: 400 })

  const contact: Guardian = {
    id: newId(),
    name,
    relation: body.relation?.trim() || undefined,
    phone: body.phone?.trim() || undefined,
    email: body.email?.trim() || undefined,
    note: body.note?.trim() || undefined,
    createdAt: nowIso(),
  }

  const ok = await mutate(guard.session.username, (data) => {
    const student = data.students.find((s) => s.id === body.studentId)
    if (!student) return false
    student.guardians.push(contact)
    return true
  })

  if (!ok) return Response.json({ error: 'Student not found.' }, { status: 404 })
  return Response.json(contact, { status: 201 })
}

export const config: Config = { path: '/api/guardians', method: 'POST' }
