import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate, newId, nowIso } from './_shared/store.js'
import type { Homework } from './_shared/types.js'

export default async (req: Request) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const body = (await req.json()) as { classId?: string; title?: string; description?: string; dueDate?: string }

  const classId = body.classId?.trim()
  const title = body.title?.trim()
  const dueDate = body.dueDate?.trim()

  if (!classId) return Response.json({ error: 'A class is required.' }, { status: 400 })
  if (!title) return Response.json({ error: 'A title is required.' }, { status: 400 })
  if (!dueDate || !/^\d{4}-\d{2}-\d{2}$/.test(dueDate)) {
    return Response.json({ error: 'A due date is required.' }, { status: 400 })
  }

  const hw: Homework = {
    id: newId(),
    classId,
    title,
    description: body.description?.trim() ?? '',
    dueDate,
    createdAt: nowIso(),
    submissions: {},
    collectedAt: {},
  }

  const ok = await mutate(guard.session.username, (data) => {
    if (!data.classes.some((c) => c.id === classId)) return false
    // Everyone in the class starts out assigned.
    for (const s of data.students) if (s.classId === classId) hw.submissions[s.id] = 'assigned'
    data.homework.push(hw)
    return true
  })

  if (!ok) return Response.json({ error: 'Class not found.' }, { status: 404 })
  return Response.json(hw, { status: 201 })
}

export const config: Config = { path: '/api/homework', method: 'POST' }
