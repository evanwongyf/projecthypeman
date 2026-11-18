import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate, newId, nowIso } from './_shared/store.js'
import {
  SEATING_DEFAULT_COLS,
  SEATING_DEFAULT_ROWS,
  SEATING_MAX,
  SEATING_MIN,
  type SeatingPlan,
} from './_shared/types.js'

function clampSize(value: unknown, fallback: number): number {
  const n = Math.round(Number(value))
  if (!Number.isFinite(n)) return fallback
  return Math.max(SEATING_MIN, Math.min(SEATING_MAX, n))
}

export default async (req: Request) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const body = (await req.json()) as { classId?: string; name?: string; rows?: number; cols?: number }

  const classId = body.classId?.trim()
  const name = body.name?.trim()
  if (!classId) return Response.json({ error: 'A class is required.' }, { status: 400 })
  if (!name) return Response.json({ error: 'A name is required.' }, { status: 400 })

  const plan: SeatingPlan = {
    id: newId(),
    classId,
    name,
    rows: clampSize(body.rows, SEATING_DEFAULT_ROWS),
    cols: clampSize(body.cols, SEATING_DEFAULT_COLS),
    seats: {},
    createdAt: nowIso(),
    updatedAt: nowIso(),
  }

  const ok = await mutate(guard.session.username, (data) => {
    if (!data.classes.some((c) => c.id === classId)) return false
    data.seatingPlans.push(plan)
    return true
  })

  if (!ok) return Response.json({ error: 'Class not found.' }, { status: 404 })
  return Response.json(plan, { status: 201 })
}

export const config: Config = { path: '/api/seating-plans', method: 'POST' }
