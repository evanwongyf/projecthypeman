import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate, nowIso } from './_shared/store.js'

/**
 * Seat, move, clear or swap one student.
 *
 * The server owns the invariant that a student occupies exactly one seat. The
 * browser only says "put this student here"; everything that implies — lifting
 * them out of their old seat, or swapping with whoever is already there — is
 * resolved in one write, so a dropped response can never leave a student
 * sitting in two places at once.
 */
export default async (req: Request, context: { params: { id: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id } = context.params
  const body = (await req.json()) as { seat?: string; studentId?: string | null }

  const seat = body.seat?.trim()
  if (!seat || !/^\d+,\d+$/.test(seat)) {
    return Response.json({ error: 'A seat is required.' }, { status: 400 })
  }

  const result = await mutate(guard.session.username, (data) => {
    const plan = data.seatingPlans.find((p) => p.id === id)
    if (!plan) return 'noplan' as const

    const [row, col] = seat.split(',').map(Number)
    if (row >= plan.rows || col >= plan.cols) return 'offgrid' as const

    // Clearing a seat.
    if (!body.studentId) {
      delete plan.seats[seat]
      plan.updatedAt = nowIso()
      return 'ok' as const
    }

    const student = data.students.find((s) => s.id === body.studentId)
    if (!student) return 'nostudent' as const
    if (student.classId !== plan.classId) return 'wrongclass' as const

    const occupant = plan.seats[seat]
    if (occupant === student.id) return 'ok' as const

    const previous = Object.keys(plan.seats).find((k) => plan.seats[k] === student.id)

    if (previous) delete plan.seats[previous]
    // If someone was already there and the newcomer came from another seat,
    // they trade places rather than one of them being silently unseated.
    if (occupant && previous) plan.seats[previous] = occupant

    plan.seats[seat] = student.id
    plan.updatedAt = nowIso()
    return 'ok' as const
  })

  if (result === 'noplan') return Response.json({ error: 'Seating plan not found.' }, { status: 404 })
  if (result === 'nostudent') return Response.json({ error: 'Student not found.' }, { status: 404 })
  if (result === 'offgrid') return Response.json({ error: 'That seat is outside the grid.' }, { status: 400 })
  if (result === 'wrongclass') {
    return Response.json({ error: 'That student is not in this class.' }, { status: 400 })
  }
  return Response.json({ ok: true })
}

export const config: Config = { path: '/api/seating-plans/:id/seat', method: 'PATCH' }
