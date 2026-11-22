import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { cleanScores } from './_shared/items.js'
import { mutate } from './_shared/store.js'

/** Save one student's question-by-question marks. Nulls are unmarked questions. */
export default async (req: Request, context: { params: { id: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response
  const { id } = context.params

  const body = (await req.json()) as { studentId?: string; scores?: unknown }
  const studentId = body.studentId?.trim()
  if (!studentId) return Response.json({ error: 'A student is required.' }, { status: 400 })

  const result = await mutate(guard.session.username, (data) => {
    const hw = data.homework.find((h) => h.id === id)
    if (!hw) return { status: 404, error: 'Homework not found.' }
    if (!hw.questions?.length) return { status: 409, error: 'Set up the questions before entering marks.' }
    const student = data.students.find((s) => s.id === studentId)
    if (!student || student.classId !== hw.classId) return { status: 404, error: 'That student is not in this class.' }

    const cleaned = cleanScores(body.scores, hw.questions)
    if ('error' in cleaned) return { status: 400, error: cleaned.error }

    hw.scores ??= {}
    if (cleaned.scores.every((v) => v === null)) delete hw.scores[studentId]
    else hw.scores[studentId] = cleaned.scores
    return { status: 200 }
  })

  if (result.status !== 200) return Response.json({ error: result.error }, { status: result.status })
  return Response.json({ ok: true })
}

export const config: Config = { path: '/api/homework/:id/scores', method: 'PATCH' }
