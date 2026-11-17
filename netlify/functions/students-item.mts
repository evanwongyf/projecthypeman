import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { deletePhoto, mutate } from './_shared/store.js'

export default async (req: Request, context: { params: { id: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id } = context.params
  const username = guard.session.username

  if (req.method === 'DELETE') {
    const removed = await mutate(username, (data) => {
      const idx = data.students.findIndex((s) => s.id === id)
      if (idx === -1) return null
      const [student] = data.students.splice(idx, 1)
      // Drop the student from every homework's submission map.
      for (const hw of data.homework) {
        delete hw.submissions[id]
        delete hw.collectedAt[id]
      }
      return student
    })
    if (!removed) return Response.json({ error: 'Student not found.' }, { status: 404 })
    if (removed.hasPhoto) await deletePhoto(username, id).catch(() => {})
    return Response.json({ ok: true })
  }

  const body = (await req.json()) as {
    fullName?: string
    preferredName?: string
    birthday?: string
    classId?: string | null
  }

  const result = await mutate(username, (data) => {
    const student = data.students.find((s) => s.id === id)
    if (!student) return { error: 'notfound' as const }

    if (body.fullName !== undefined) {
      const fullName = body.fullName.trim()
      if (!fullName) return { error: 'name' as const }
      student.fullName = fullName
    }
    if (body.preferredName !== undefined) student.preferredName = body.preferredName.trim() || undefined
    if (body.birthday !== undefined) student.birthday = body.birthday.trim() || undefined
    if (body.classId !== undefined) {
      if (body.classId !== null && !data.classes.some((c) => c.id === body.classId)) return { error: 'class' as const }
      // Moving class clears the student from the old class's homework.
      if (body.classId !== student.classId) {
        for (const hw of data.homework) {
          if (hw.classId === student.classId) {
            delete hw.submissions[id]
            delete hw.collectedAt[id]
          }
        }
      }
      student.classId = body.classId
    }
    return { student }
  })

  if ('error' in result) {
    if (result.error === 'notfound') return Response.json({ error: 'Student not found.' }, { status: 404 })
    if (result.error === 'class') return Response.json({ error: 'Class not found.' }, { status: 404 })
    return Response.json({ error: 'A full name is required.' }, { status: 400 })
  }
  return Response.json(result.student)
}

export const config: Config = { path: '/api/students/:id', method: ['PATCH', 'DELETE'] }
