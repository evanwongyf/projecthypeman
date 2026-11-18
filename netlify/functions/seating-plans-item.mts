import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate, nowIso } from './_shared/store.js'
import { SEATING_MAX, SEATING_MIN } from './_shared/types.js'

export default async (req: Request, context: { params: { id: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id } = context.params

  if (req.method === 'DELETE') {
    const ok = await mutate(guard.session.username, (data) => {
      const idx = data.seatingPlans.findIndex((p) => p.id === id)
      if (idx === -1) return false
      data.seatingPlans.splice(idx, 1)
      return true
    })
    if (!ok) return Response.json({ error: 'Seating plan not found.' }, { status: 404 })
    return Response.json({ ok: true })
  }

  const body = (await req.json()) as { name?: string; rows?: number; cols?: number }

  const result = await mutate(guard.session.username, (data) => {
    const plan = data.seatingPlans.find((p) => p.id === id)
    if (!plan) return { error: 'notfound' as const }

    if (body.name !== undefined) {
      const name = body.name.trim()
      if (!name) return { error: 'name' as const }
      plan.name = name
    }

    for (const key of ['rows', 'cols'] as const) {
      const raw = body[key]
      if (raw === undefined) continue
      const n = Math.round(Number(raw))
      if (!Number.isFinite(n) || n < SEATING_MIN || n > SEATING_MAX) return { error: 'size' as const }
      plan[key] = n
    }

    // Shrinking the grid would otherwise strand students in seats that no
    // longer exist, where they are neither visible nor available to seat again.
    for (const seat of Object.keys(plan.seats)) {
      const [r, c] = seat.split(',').map(Number)
      if (r >= plan.rows || c >= plan.cols) delete plan.seats[seat]
    }

    plan.updatedAt = nowIso()
    return { plan }
  })

  if ('error' in result) {
    if (result.error === 'notfound') return Response.json({ error: 'Seating plan not found.' }, { status: 404 })
    if (result.error === 'name') return Response.json({ error: 'A name is required.' }, { status: 400 })
    return Response.json(
      { error: `Rows and columns must be between ${SEATING_MIN} and ${SEATING_MAX}.` },
      { status: 400 }
    )
  }
  return Response.json(result.plan)
}

export const config: Config = { path: '/api/seating-plans/:id', method: ['PATCH', 'DELETE'] }
