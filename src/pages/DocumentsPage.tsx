/**
 * The Document Lab's front page: what has been written, and what can be.
 *
 * Starting a document is two decisions (which template, who it is about) and
 * the second one is optional, because a blank report you fill in later is a
 * perfectly normal way to start.
 */
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/api'
import { useData } from '../lib/data-context'
import { useAuth } from '../lib/auth-context'
import { formatStamp, nameKey } from '../lib/format'
import { makePrefillContext, prefillValues } from '../lib/documents/build'
import { AUDIENCE_LABEL, DOC_CATEGORIES, searchTemplates, templateById } from '../lib/documents/templates'
import type { DocCategory, DocSummary, DocTemplate } from '../lib/documents/types'
import { PageHeader } from '../components/PageHeader'
import { Modal } from '../components/Modal'
import { ConfirmModal } from '../components/ConfirmModal'
import { Empty } from '../components/Empty'
import { DocSubject } from '../components/documents/DocSubject'
import { IconDocument, IconPlus, IconTrash } from '../components/Icons'

export function DocumentsPage() {
  const navigate = useNavigate()
  const { data } = useData()
  const { user } = useAuth()

  const [projects, setProjects] = useState<DocSummary[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [picking, setPicking] = useState(false)
  const [chosen, setChosen] = useState<DocTemplate | null>(null)
  const [deleting, setDeleting] = useState<DocSummary | null>(null)

  const load = useCallback(async () => {
    try {
      const res = await api.documents()
      setProjects(res.projects)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load your documents.')
      setProjects([])
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  const classById = useMemo(() => new Map(data.classes.map((c) => [c.id, c])), [data.classes])
  const studentById = useMemo(() => new Map(data.students.map((s) => [s.id, s])), [data.students])

  async function remove(summary: DocSummary) {
    await api.deleteDocument(summary.id)
    await load()
  }

  return (
    <div className="min-w-0">
      <PageHeader
        eyebrow="Document Lab"
        title="Documents"
        meta={
          <span style={{ color: 'var(--ink-soft)' }}>
            {projects === null ? 'Loading' : `${projects.length} saved`}
            {' | '}
            {searchTemplates('').length} templates
          </span>
        }
        actions={
          <button type="button" className="btn btn-primary" onClick={() => setPicking(true)}>
            <IconPlus className="h-3 w-3" />
            New document
          </button>
        }
      />

      {error && (
        <p
          className="border-b px-5 py-3 font-mono text-xs sm:px-8"
          style={{ borderColor: 'var(--overdue)', background: 'var(--overdue-dim)', color: 'var(--overdue)' }}
        >
          {error}
        </p>
      )}

      <div className="p-5 sm:p-8">
        {projects === null ? (
          <p className="label">loading documents...</p>
        ) : projects.length === 0 ? (
          <Empty
            title="Nothing written yet"
            body="Pick a template, choose who it is about, and fill it in with the page on the right."
            action={
              <button type="button" className="btn btn-primary" onClick={() => setPicking(true)}>
                <IconPlus className="h-3 w-3" />
                New document
              </button>
            }
          />
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((summary) => {
              const template = templateById(summary.templateId)
              const classRoom = summary.classId ? classById.get(summary.classId) : null
              const names = summary.studentIds
                .map((id) => studentById.get(id)?.fullName)
                .filter((n): n is string => !!n)
              return (
                <li key={summary.id} className="panel flex flex-col gap-3 p-4">
                  <button
                    type="button"
                    className="min-w-0 text-left"
                    onClick={() => navigate(`/documents/${summary.id}`)}
                  >
                    <p className="label">{template?.name ?? 'Unknown template'}</p>
                    <p className="mt-1 truncate font-semibold">{summary.name}</p>
                    <p className="mt-1.5 truncate text-xs" style={{ color: 'var(--ink-soft)' }}>
                      {names.length > 0
                        ? names.slice(0, 3).join(', ') + (names.length > 3 ? ` and ${names.length - 3} more` : '')
                        : (classRoom?.name ?? 'No student chosen')}
                    </p>
                  </button>
                  <div className="mt-auto flex items-end justify-between gap-3">
                    <p className="label">
                      v{summary.currentVersion} | {formatStamp(summary.updatedAt)}
                    </p>
                    <button
                      type="button"
                      className="btn btn-ghost btn-danger !px-2"
                      onClick={() => setDeleting(summary)}
                      aria-label={`Delete ${summary.name}`}
                    >
                      <IconTrash className="h-3 w-3" />
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      {picking && !chosen && (
        <TemplateGallery
          onClose={() => setPicking(false)}
          onPick={(template) => setChosen(template)}
        />
      )}

      {chosen && (
        <StartDocument
          template={chosen}
          onClose={() => {
            setChosen(null)
            setPicking(false)
          }}
          onStarted={(id) => navigate(`/documents/${id}`)}
          teacher={{ name: user?.name ?? '', username: user?.username ?? '' }}
        />
      )}

      {deleting && (
        <ConfirmModal
          title="Delete this document?"
          body={`"${deleting.name}" and its ${deleting.versionCount} saved ${deleting.versionCount === 1 ? 'version' : 'versions'} go with it. This cannot be undone.`}
          confirmLabel="Delete"
          onClose={() => setDeleting(null)}
          onConfirm={() => remove(deleting)}
        />
      )}
    </div>
  )
}

function TemplateGallery({ onClose, onPick }: { onClose: () => void; onPick: (t: DocTemplate) => void }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<DocCategory | 'All'>('All')

  const results = useMemo(() => {
    const found = searchTemplates(query)
    return category === 'All' ? found : found.filter((t) => t.category === category)
  }, [query, category])

  return (
    <Modal title="Choose a template" onClose={onClose} wide>
      <div className="grid gap-4">
        <input
          className="field w-full"
          value={query}
          autoFocus
          placeholder="Search by name or use"
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search templates"
        />
        <div className="flex flex-wrap gap-1.5">
          {(['All', ...DOC_CATEGORIES] as const).map((item) => (
            <button
              key={item}
              type="button"
              className="chip"
              data-active={category === item}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              style={
                category === item
                  ? { borderColor: 'var(--accent)', color: 'var(--accent)' }
                  : undefined
              }
            >
              {item}
            </button>
          ))}
        </div>
        <ul className="grid max-h-[60vh] gap-2 overflow-y-auto sm:grid-cols-2">
          {results.map((template) => (
            <li key={template.id}>
              <button type="button" className="panel w-full p-4 text-left row-hover" onClick={() => onPick(template)}>
                <p className="label">{template.category}</p>
                <p className="mt-1 font-semibold">{template.name}</p>
                <p className="mt-1.5 text-xs" style={{ color: 'var(--ink-soft)' }}>
                  {template.summary}
                </p>
                <p className="label mt-2">{AUDIENCE_LABEL[template.audience]}</p>
              </button>
            </li>
          ))}
          {results.length === 0 && (
            <li className="p-4 text-sm" style={{ color: 'var(--ink-faint)' }}>
              No template matches that.
            </li>
          )}
        </ul>
      </div>
    </Modal>
  )
}

function StartDocument({
  template,
  teacher,
  onClose,
  onStarted,
}: {
  template: DocTemplate
  teacher: { name: string; username: string }
  onClose: () => void
  onStarted: (id: string) => void
}) {
  const { data } = useData()
  const [classId, setClassId] = useState<string | null>(null)
  const [studentIds, setStudentIds] = useState<string[]>([])
  const [name, setName] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // The default name follows the subject of the document until it is typed in.
  const suggested = useMemo(() => {
    const first = studentIds.map((id) => data.students.find((s) => s.id === id)).filter(Boolean)[0]
    const classRoom = classId ? data.classes.find((c) => c.id === classId) : null
    const who = first?.fullName ?? classRoom?.name ?? ''
    return who ? `${template.name} - ${who}` : template.name
  }, [studentIds, classId, data.students, data.classes, template.name])

  const ordered = useMemo(
    () =>
      [...studentIds].sort((a, b) => {
        const sa = data.students.find((s) => s.id === a)
        const sb = data.students.find((s) => s.id === b)
        return nameKey(sa?.fullName ?? '').localeCompare(nameKey(sb?.fullName ?? ''))
      }),
    [studentIds, data.students]
  )

  async function start() {
    setBusy(true)
    setError(null)
    try {
      const ctx = makePrefillContext({ data, studentIds: ordered, classId, teacher })
      const project = await api.createDocument({
        templateId: template.id,
        name: name.trim() || suggested,
        classId,
        studentIds: ordered,
        values: prefillValues(template, ctx),
      })
      onStarted(project.id)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not start that document.')
      setBusy(false)
    }
  }

  return (
    <Modal title={template.name} onClose={onClose}>
      <div className="grid gap-5">
        <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
          {template.summary}
        </p>

        <DocSubject
          audience={template.audience}
          classId={classId}
          studentIds={ordered}
          onClassChange={(next) => {
            setClassId(next)
            // Students of the old class are no longer in the pool.
            setStudentIds([])
          }}
          onStudentsChange={setStudentIds}
        />

        <label className="block">
          <span className="label">Name this document</span>
          <input
            className="field mt-1.5 w-full"
            value={name}
            placeholder={suggested}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        {error && (
          <p className="font-mono text-xs" style={{ color: 'var(--overdue)' }}>
            {error}
          </p>
        )}

        <div className="flex flex-wrap justify-end gap-2">
          <button type="button" className="btn btn-ghost" onClick={onClose} disabled={busy}>
            Cancel
          </button>
          <button type="button" className="btn btn-primary" onClick={() => void start()} disabled={busy}>
            <IconDocument className="h-3 w-3" />
            {busy ? 'Starting' : 'Start writing'}
          </button>
        </div>
      </div>
    </Modal>
  )
}
