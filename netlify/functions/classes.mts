import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { mutate, newId, nowIso } from './_shared/store.js'
import type { ClassRoom } from './_shared/types.js'

export default async (req: Request) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const body = (await req.json()) as { name?: string; school?: string; subject?: string }
  const name = body.name?.trim()
  if (!name) return Response.json({ error: 'A class name is required.' }, { status: 400 })

  const cls: ClassRoom = {
    id: newId(),
    name,
    school: body.school?.trim() ?? '',
    subject: body.subject?.trim() ?? '',
    createdAt: nowIso(),
  }

  await mutate(guard.session.username, (data) => void data.classes.push(cls))
  return Response.json(cls, { status: 201 })
}

export const config: Config = { path: '/api/classes', method: 'POST' }
