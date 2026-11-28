import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { nowIso } from './_shared/store.js'
import {
  cleanName,
  cleanStudentIds,
  cleanValues,
  deleteProject,
  getProject,
  isDocId,
  saveProject,
} from './_shared/documents.js'

/** GET one project with its history, PATCH the draft, DELETE the lot. */
export default async (req: Request, context: { params: { id: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id } = context.params
  if (!isDocId(id)) return Response.json({ error: 'Document not found.' }, { status: 404 })
  const username = guard.session.username

  if (req.method === 'DELETE') {
    await deleteProject(username, id)
    return Response.json({ ok: true })
  }

  const project = await getProject(username, id)
  if (!project) return Response.json({ error: 'Document not found.' }, { status: 404 })

  if (req.method === 'GET') return Response.json(project)

  const body = (await req.json().catch(() => ({}))) as {
    name?: unknown
    classId?: unknown
    studentIds?: unknown
    values?: unknown
  }

  if (body.name !== undefined) project.name = cleanName(body.name, project.name)
  if (body.classId !== undefined) {
    project.classId = typeof body.classId === 'string' && body.classId ? body.classId : null
  }
  if (body.studentIds !== undefined) {
    const students = cleanStudentIds(body.studentIds)
    if ('error' in students) return Response.json({ error: students.error }, { status: 400 })
    project.studentIds = students.studentIds
  }
  if (body.values !== undefined) {
    const cleaned = cleanValues(body.values)
    if ('error' in cleaned) return Response.json({ error: cleaned.error }, { status: 400 })
    project.values = cleaned.values
  }

  project.updatedAt = nowIso()
  await saveProject(username, project)
  return Response.json(project)
}

export const config: Config = { path: '/api/documents/:id', method: ['GET', 'PATCH', 'DELETE'] }
