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
      const idx = data.homework.findIndex((h) => h.id === id)
      if (idx === -1) return false
      data.homework.splice(idx, 1)
      return true
    })
    if (!ok) return Response.json({ error: 'Homework not found.' }, { status: 404 })
    return Response.json({ ok: true })
  }

  const body = (await req.json()) as { title?: string; description?: string; dueDate?: string }

  const result = await mutate(username, (data) => {
    const hw = data.homework.find((h) => h.id === id)
    if (!hw) return { error: 'notfound' as const }

    if (body.title !== undefined) {
      const title = body.title.trim()
      if (!title) return { error: 'title' as const }
      hw.title = title
    }
    if (body.description !== undefined) hw.description = body.description.trim()
    if (body.dueDate !== undefined) {
      const dueDate = body.dueDate.trim()
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dueDate)) return { error: 'date' as const }
      hw.dueDate = dueDate
    }
    return { hw }
  })

  if ('error' in result) {
    if (result.error === 'notfound') return Response.json({ error: 'Homework not found.' }, { status: 404 })
    if (result.error === 'title') return Response.json({ error: 'A title is required.' }, { status: 400 })
    return Response.json({ error: 'Use a valid due date.' }, { status: 400 })
  }
  return Response.json(result.hw)
}

export const config: Config = { path: '/api/homework/:id', method: ['PATCH', 'DELETE'] }
