import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate, newId, nowIso } from './_shared/store.js'
import type { Entry } from './_shared/types.js'

/** POST a new note or incident. Each one is its own entry, stamped with date + time. */
export default async (req: Request, context: { params: { id: string; kind: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id, kind } = context.params
  if (kind !== 'notes' && kind !== 'incidents') {
    return Response.json({ error: 'Unknown entry type.' }, { status: 404 })
  }

  const body = (await req.json()) as { text?: string }
  const text = body.text?.trim()
  if (!text) return Response.json({ error: 'Write something first.' }, { status: 400 })

  const entry: Entry = { id: newId(), text, createdAt: nowIso() }

  const ok = await mutate(guard.session.username, (data) => {
    const student = data.students.find((s) => s.id === id)
    if (!student) return false
    // Newest first.
    student[kind].unshift(entry)
    return true
  })

  if (!ok) return Response.json({ error: 'Student not found.' }, { status: 404 })
  return Response.json(entry, { status: 201 })
}

export const config: Config = { path: '/api/students/:id/:kind', method: 'POST' }
