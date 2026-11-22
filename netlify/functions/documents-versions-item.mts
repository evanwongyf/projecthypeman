import type { Config } from '@netlify/functions'
import { requireSession } from './_shared/auth.js'
import { nowIso } from './_shared/store.js'
import { getProject, isDocId, pushVersion, saveProject } from './_shared/documents.js'

/**
 * Restore an old version into the draft.
 *
 * Restoring appends: the old values come back as a new, higher-numbered
 * version, and nothing in the history is rewritten or thrown away. Going back
 * is itself an edit, and undoing it is just another restore.
 */
export default async (req: Request, context: { params: { id: string; n: string } }) => {
  const guard = await requireSession(req)
  if ('response' in guard) return guard.response

  const { id, n } = context.params
  if (!isDocId(id)) return Response.json({ error: 'Document not found.' }, { status: 404 })
  const username = guard.session.username

  const project = await getProject(username, id)
  if (!project) return Response.json({ error: 'Document not found.' }, { status: 404 })

  const wanted = Number(n)
  const source = project.versions.find((v) => v.n === wanted)
  if (!source) return Response.json({ error: 'That version is no longer kept.' }, { status: 404 })

  const at = nowIso()
  project.values = structuredClone(source.values)
  project.studentIds = [...source.studentIds]
  pushVersion(project, {
    createdAt: at,
    label: `Restored v${source.n}`,
    source: 'restored',
    values: project.values,
    studentIds: project.studentIds,
  })
  project.updatedAt = at
  await saveProject(username, project)
  return Response.json(project)
}

export const config: Config = { path: '/api/documents/:id/versions/:n/restore', method: 'POST' }
