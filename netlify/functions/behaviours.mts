import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate, newId, nowIso } from './_shared/store.js'
import type { Behaviour } from './_shared/types.js'

export default async (req: Request) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const body = (await req.json()) as { name?: string; kind?: string; points?: number; note?: string }
  const name = body.name?.trim()
  if (!name) return Response.json({ error: 'A name is required.' }, { status: 400 })
  if (body.kind !== 'positive' && body.kind !== 'negative') {
    return Response.json({ error: 'Kind must be positive or negative.' }, { status: 400 })
  }

  const points = Math.round(Number(body.points ?? 1))
  if (!Number.isFinite(points) || points < 1 || points > 100) {
    return Response.json({ error: 'Points must be between 1 and 100.' }, { status: 400 })
  }

  const behaviour: Behaviour = {
    id: newId(),
    name,
    kind: body.kind,
    points,
    note: body.note?.trim() || undefined,
    createdAt: nowIso(),
  }

  await mutate(guard.session.username, (data) => void data.behaviours.push(behaviour))
  return Response.json(behaviour, { status: 201 })
}

export const config: Config = { path: '/api/behaviours', method: 'POST' }
