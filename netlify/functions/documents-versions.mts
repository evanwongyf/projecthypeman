import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { nowIso } from './_shared/store.js'
import { DOC_LABEL_MAX, getProject, isDocId, pushVersion, saveProject } from './_shared/documents.js'

/** Snapshot the draft as a numbered version. */
export default async (req: Request, context: { params: { id: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id } = context.params
  if (!isDocId(id)) return Response.json({ error: 'Document not found.' }, { status: 404 })
  const username = guard.session.username

  const project = await getProject(username, id)
  if (!project) return Response.json({ error: 'Document not found.' }, { status: 404 })

  const body = (await req.json().catch(() => ({}))) as { label?: unknown }
  const label =
    (typeof body.label === 'string' ? body.label.replace(/\s+/g, ' ').trim().slice(0, DOC_LABEL_MAX) : '') || 'Saved'

  const at = nowIso()
  pushVersion(project, { createdAt: at, label, source: 'saved', values: project.values, studentIds: project.studentIds })
  project.updatedAt = at
  await saveProject(username, project)
  return Response.json(project, { status: 201 })
}

export const config: Config = { path: '/api/documents/:id/versions', method: 'POST' }
