import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate } from './_shared/store.js'

export default async (req: Request, context: { params: { id: string; kind: string; entryId: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id, kind, entryId } = context.params
  if (kind !== 'notes' && kind !== 'incidents') {
    return Response.json({ error: 'Unknown entry type.' }, { status: 404 })
  }

  const body = req.method === 'PATCH' ? ((await req.json()) as { text?: string }) : null

  const result = await mutate(guard.session.username, (data) => {
    const student = data.students.find((s) => s.id === id)
    if (!student) return 'nostudent' as const

    const list = student[kind]
    const idx = list.findIndex((e) => e.id === entryId)
    if (idx === -1) return 'noentry' as const

    if (req.method === 'DELETE') {
      list.splice(idx, 1)
      return 'ok' as const
    }

    const text = body?.text?.trim()
    if (!text) return 'empty' as const
    list[idx].text = text
    return 'ok' as const
  })

  if (result === 'nostudent') return Response.json({ error: 'Student not found.' }, { status: 404 })
  if (result === 'noentry') return Response.json({ error: 'Entry not found.' }, { status: 404 })
  if (result === 'empty') return Response.json({ error: 'Write something first.' }, { status: 400 })
  return Response.json({ ok: true })
}

export const config: Config = { path: '/api/students/:id/:kind/:entryId', method: ['PATCH', 'DELETE'] }
