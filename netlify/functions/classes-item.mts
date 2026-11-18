import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate } from './_shared/store.js'

export default async (req: Request, context: { params: { id: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id } = context.params
  const username = guard.session.username

  if (req.method === 'DELETE') {
    const ok = await mutate(username, (data) => {
      const idx = data.classes.findIndex((c) => c.id === id)
      if (idx === -1) return false
      data.classes.splice(idx, 1)
      // Deleting a class releases its students back into the unattached pool
      // and removes the homework that belonged to it.
      for (const s of data.students) if (s.classId === id) s.classId = null
      data.homework = data.homework.filter((h) => h.classId !== id)
      // Points belong to a class board, so they go with it.
      data.awards = data.awards.filter((a) => a.classId !== id)
      data.seatingPlans = data.seatingPlans.filter((p) => p.classId !== id)
      return true
    })
    if (!ok) return Response.json({ error: 'Class not found.' }, { status: 404 })
    return Response.json({ ok: true })
  }

  const body = (await req.json()) as { name?: string; school?: string; subject?: string }
  const updated = await mutate(username, (data) => {
    const cls = data.classes.find((c) => c.id === id)
    if (!cls) return null
    if (body.name !== undefined) {
      const name = body.name.trim()
      if (name) cls.name = name
    }
    if (body.school !== undefined) cls.school = body.school.trim()
    if (body.subject !== undefined) cls.subject = body.subject.trim()
    return cls
  })

  if (!updated) return Response.json({ error: 'Class not found.' }, { status: 404 })
  return Response.json(updated)
}

export const config: Config = { path: '/api/classes/:id', method: ['PATCH', 'DELETE'] }
