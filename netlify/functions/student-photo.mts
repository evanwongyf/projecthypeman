import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { deletePhoto, getPhoto, mutate, putPhoto } from './_shared/store.js'

const ALLOWED = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif'])
const MAX_BYTES = 5 * 1024 * 1024

export default async (req: Request, context: { params: { id: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id } = context.params
  const username = guard.session.username

  if (req.method === 'GET') {
    const photo = await getPhoto(username, id)
    if (!photo) return new Response('Not found', { status: 404 })
    // Node's Response accepts a Uint8Array body; its type surface here doesn't say so.
    return new Response(photo.bytes as unknown as string, {
      headers: { 'Content-Type': photo.contentType, 'Cache-Control': 'private, max-age=60' },
    })
  }

  if (req.method === 'DELETE') {
    const ok = await mutate(username, (data) => {
      const student = data.students.find((s) => s.id === id)
      if (!student) return false
      student.hasPhoto = false
      return true
    })
    if (!ok) return Response.json({ error: 'Student not found.' }, { status: 404 })
    await deletePhoto(username, id).catch(() => {})
    return Response.json({ ok: true })
  }

  const contentType = req.headers.get('content-type')?.split(';')[0]?.trim() ?? ''
  if (!ALLOWED.has(contentType)) {
    return Response.json({ error: 'Use a JPEG, PNG, WebP, GIF or AVIF image.' }, { status: 400 })
  }

  const bytes = new Uint8Array(await req.arrayBuffer())
  if (bytes.byteLength === 0) return Response.json({ error: 'The image was empty.' }, { status: 400 })
  if (bytes.byteLength > MAX_BYTES) return Response.json({ error: 'Images must be 5 MB or smaller.' }, { status: 413 })

  const exists = await mutate(username, (data) => {
    const student = data.students.find((s) => s.id === id)
    if (!student) return false
    student.hasPhoto = true
    return true
  })
  if (!exists) return Response.json({ error: 'Student not found.' }, { status: 404 })

  await putPhoto(username, id, bytes, contentType)
  return Response.json({ ok: true })
}

export const config: Config = { path: '/api/students/:id/photo', method: ['GET', 'PUT', 'DELETE'] }
