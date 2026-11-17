import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate } from './_shared/store.js'

export default async (req: Request, context: { params: { id: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id } = context.params

  if (req.method === 'DELETE') {
    const ok = await mutate(guard.session.username, (data) => {
      const idx = data.behaviours.findIndex((b) => b.id === id)
      if (idx === -1) return false
      data.behaviours.splice(idx, 1)
      // Awards keep their snapshotted name and points, so totals and history
      // survive the effect being retired.
      return true
    })
    if (!ok) return Response.json({ error: 'Effect not found.' }, { status: 404 })
    return Response.json({ ok: true })
  }

  const body = (await req.json()) as { name?: string; points?: number; note?: string }

  const result = await mutate(guard.session.username, (data) => {
    const behaviour = data.behaviours.find((b) => b.id === id)
    if (!behaviour) return { error: 'notfound' as const }

    if (body.name !== undefined) {
      const name = body.name.trim()
      if (!name) return { error: 'name' as const }
      behaviour.name = name
    }
    if (body.points !== undefined) {
      const points = Math.round(Number(body.points))
      if (!Number.isFinite(points) || points < 1 || points > 100) return { error: 'points' as const }
      behaviour.points = points
    }
    if (body.note !== undefined) behaviour.note = body.note.trim() || undefined
    return { behaviour }
  })

  if ('error' in result) {
    if (result.error === 'notfound') return Response.json({ error: 'Effect not found.' }, { status: 404 })
    if (result.error === 'name') return Response.json({ error: 'A name is required.' }, { status: 400 })
    return Response.json({ error: 'Points must be between 1 and 100.' }, { status: 400 })
  }
  return Response.json(result.behaviour)
}

export const config: Config = { path: '/api/behaviours/:id', method: ['PATCH', 'DELETE'] }
