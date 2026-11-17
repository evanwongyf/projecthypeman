import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate, nowIso } from './_shared/store.js'
import type { SubmissionState } from './_shared/types.js'

/**
 * Flip one student's submission between assigned and collected.
 * 'overdue' is never stored — the UI derives it from the due date.
 */
export default async (req: Request, context: { params: { id: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id } = context.params
  const body = (await req.json()) as { studentId?: string; state?: SubmissionState }

  const studentId = body.studentId?.trim()
  const state = body.state
  if (!studentId) return Response.json({ error: 'A student is required.' }, { status: 400 })
  if (state !== 'assigned' && state !== 'collected') {
    return Response.json({ error: 'State must be assigned or collected.' }, { status: 400 })
  }

  const result = await mutate(guard.session.username, (data) => {
    const hw = data.homework.find((h) => h.id === id)
    if (!hw) return 'nohomework' as const
    const student = data.students.find((s) => s.id === studentId)
    if (!student || student.classId !== hw.classId) return 'nostudent' as const

    hw.submissions[studentId] = state
    if (state === 'collected') hw.collectedAt[studentId] = nowIso()
    else delete hw.collectedAt[studentId]
    return 'ok' as const
  })

  if (result === 'nohomework') return Response.json({ error: 'Homework not found.' }, { status: 404 })
  if (result === 'nostudent') return Response.json({ error: 'That student is not in this class.' }, { status: 404 })
  return Response.json({ ok: true })
}

export const config: Config = { path: '/api/homework/:id/status', method: 'PATCH' }
