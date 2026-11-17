import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate, newId, nowIso } from './_shared/store.js'
import type { Award } from './_shared/types.js'

/**
 * Activate an effect: writes one ledger entry per student, so a whole-class
 * award can be undone for a single child without unpicking the rest.
 */
export default async (req: Request) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const body = (await req.json()) as { studentIds?: string[]; behaviourId?: string; points?: number }

  const studentIds = Array.isArray(body.studentIds) ? [...new Set(body.studentIds.filter((s) => typeof s === 'string'))] : []
  if (studentIds.length === 0) return Response.json({ error: 'Pick at least one student.' }, { status: 400 })
  if (studentIds.length > 200) return Response.json({ error: 'Too many students at once.' }, { status: 400 })
  if (!body.behaviourId) return Response.json({ error: 'An effect is required.' }, { status: 400 })

  const magnitude = Math.round(Number(body.points))
  if (!Number.isFinite(magnitude) || magnitude < 1 || magnitude > 100) {
    return Response.json({ error: 'Points must be between 1 and 100.' }, { status: 400 })
  }

  const result = await mutate(guard.session.username, (data) => {
    const behaviour = data.behaviours.find((b) => b.id === body.behaviourId)
    if (!behaviour) return { error: 'nobehaviour' as const }

    const students = data.students.filter((s) => studentIds.includes(s.id))
    if (students.length !== studentIds.length) return { error: 'nostudent' as const }

    // Every student in one activation must share a class, since points belong
    // to a class board.
    const classId = students[0].classId
    if (!classId || students.some((s) => s.classId !== classId)) return { error: 'class' as const }

    const createdAt = nowIso()
    // The sign lives here and nowhere else: the catalogue only stores magnitude.
    const points = behaviour.kind === 'negative' ? -magnitude : magnitude

    const awards: Award[] = students.map((s) => ({
      id: newId(),
      studentId: s.id,
      classId,
      behaviourId: behaviour.id,
      behaviourName: behaviour.name,
      kind: behaviour.kind,
      points,
      createdAt,
    }))

    data.awards.push(...awards)
    return { awards }
  })

  if ('error' in result) {
    if (result.error === 'nobehaviour') return Response.json({ error: 'Effect not found.' }, { status: 404 })
    if (result.error === 'nostudent') return Response.json({ error: 'A student was not found.' }, { status: 404 })
    return Response.json({ error: 'Those students are not all in one class.' }, { status: 400 })
  }

  return Response.json({ awards: result.awards }, { status: 201 })
}

export const config: Config = { path: '/api/awards', method: 'POST' }
