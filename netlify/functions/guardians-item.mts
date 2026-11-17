import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate } from './_shared/store.js'

export default async (req: Request, context: { params: { id: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id } = context.params

  if (req.method === 'DELETE') {
    const ok = await mutate(guard.session.username, (data) => {
      for (const s of data.students) {
        const idx = s.guardians.findIndex((g) => g.id === id)
        if (idx >= 0) {
          s.guardians.splice(idx, 1)
          return true
        }
      }
      return false
    })
    if (!ok) return Response.json({ error: 'Contact not found.' }, { status: 404 })
    return Response.json({ ok: true })
  }

  const body = (await req.json()) as {
    name?: string
    relation?: string
    phone?: string
    email?: string
    note?: string
  }

  const result = await mutate(guard.session.username, (data) => {
    for (const s of data.students) {
      const contact = s.guardians.find((g) => g.id === id)
      if (!contact) continue
      if (body.name !== undefined) {
        const name = body.name.trim()
        if (!name) return 'name' as const
        contact.name = name
      }
      if (body.relation !== undefined) contact.relation = body.relation.trim() || undefined
      if (body.phone !== undefined) contact.phone = body.phone.trim() || undefined
      if (body.email !== undefined) contact.email = body.email.trim() || undefined
      if (body.note !== undefined) contact.note = body.note.trim() || undefined
      return contact
    }
    return 'notfound' as const
  })

  if (result === 'notfound') return Response.json({ error: 'Contact not found.' }, { status: 404 })
  if (result === 'name') return Response.json({ error: 'A name is required.' }, { status: 400 })
  return Response.json(result)
}

export const config: Config = { path: '/api/guardians/:id', method: ['PATCH', 'DELETE'] }
