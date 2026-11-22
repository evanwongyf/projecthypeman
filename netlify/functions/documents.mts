import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { newId, nowIso } from './_shared/store.js'
import {
  DOC_MAX_PROJECTS,
  cleanName,
  cleanStudentIds,
  cleanValues,
  getIndex,
  listProjects,
  pushVersion,
  saveProject,
  type DocProject,
} from './_shared/documents.js'

/** GET: every project, newest edit first. POST: start one from a template. */
export default async (req: Request) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response
  const username = guard.session.username

  if (req.method === 'GET') {
    return Response.json({ projects: await listProjects(username) })
  }

  const body = (await req.json().catch(() => ({}))) as {
    templateId?: unknown
    name?: unknown
    classId?: unknown
    studentIds?: unknown
    values?: unknown
  }

  const templateId = typeof body.templateId === 'string' ? body.templateId.trim() : ''
  if (!templateId) return Response.json({ error: 'A template is required.' }, { status: 400 })

  const students = cleanStudentIds(body.studentIds)
  if ('error' in students) return Response.json({ error: students.error }, { status: 400 })
  const cleaned = cleanValues(body.values)
  if ('error' in cleaned) return Response.json({ error: cleaned.error }, { status: 400 })

  const idx = await getIndex(username)
  if ((idx.projects ?? []).length >= DOC_MAX_PROJECTS) {
    return Response.json(
      { error: `You already have ${DOC_MAX_PROJECTS} documents. Delete one to start another.` },
      { status: 409 }
    )
  }

  const at = nowIso()
  const project: DocProject = {
    id: newId(),
    name: cleanName(body.name, 'Untitled document'),
    templateId,
    classId: typeof body.classId === 'string' && body.classId ? body.classId : null,
    studentIds: students.studentIds,
    values: cleaned.values,
    currentVersion: 0,
    versions: [],
    createdAt: at,
    updatedAt: at,
  }

  // Version 1 is the document as it was started, so there is always something
  // to go back to even if the next edit is a mistake.
  pushVersion(project, {
    createdAt: at,
    label: 'Started',
    source: 'created',
    values: project.values,
    studentIds: project.studentIds,
  })

  await saveProject(username, project)
  return Response.json(project, { status: 201 })
}

export const config: Config = { path: '/api/documents', method: ['GET', 'POST'] }
