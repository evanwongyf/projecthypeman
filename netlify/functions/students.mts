import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate, newId, nowIso } from './_shared/store.js'
import type { Student } from './_shared/types.js'

export default async (req: Request) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const body = (await req.json()) as {
    fullName?: string
    preferredName?: string
    birthday?: string
    classId?: string | null
  }

  // Full name is the only mandatory field.
  const fullName = body.fullName?.trim()
  if (!fullName) return Response.json({ error: 'A full name is required.' }, { status: 400 })

  const student: Student = {
    id: newId(),
    fullName,
    preferredName: body.preferredName?.trim() || undefined,
    birthday: body.birthday?.trim() || undefined,
    classId: body.classId ?? null,
    ccas: [],
    interests: [],
    characteristics: [],
    guardians: [],
    relationships: [],
    notes: [],
    incidents: [],
    createdAt: nowIso(),
  }

  const ok = await mutate(guard.session.username, (data) => {
    if (student.classId && !data.classes.some((c) => c.id === student.classId)) return false
    data.students.push(student)
    return true
  })

  if (!ok) return Response.json({ error: 'Class not found.' }, { status: 404 })
  return Response.json(student, { status: 201 })
}

export const config: Config = { path: '/api/students', method: 'POST' }
