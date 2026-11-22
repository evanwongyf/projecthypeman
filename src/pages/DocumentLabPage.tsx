/**
 * The lab: the form on the left, the A4 page on the right.
 *
 * The preview is not a rendering of the document, it is the document. The same
 * display list that fills the pages on screen is what the PDF is drawn from,
 * so there is no moment where what you were looking at turns out not to be
 * what downloads.
 *
 * The draft saves itself. A version is a marker the teacher chooses to drop,
 * not a side effect of typing, which is what makes the history worth reading.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../lib/api'
import { useAuth } from '../lib/auth-context'
import { useData } from '../lib/data-context'
import { nameKey } from '../lib/format'
import { buildLayout, makeBuildContext, makePrefillContext, reapplyPrefill } from '../lib/documents/build'
import { loadMetrics, type Metrics } from '../lib/documents/fonts'
import { downloadPdf } from '../lib/documents/pdf'
import { templateById } from '../lib/documents/templates'
import { useStudentPhotos } from '../lib/documents/usePhotos'
import type { DocProject, DocValues } from '../lib/documents/types'
import { PageHeader } from '../components/PageHeader'
import { DocForm } from '../components/documents/DocForm'
import { DocPages } from '../components/documents/DocPages'
import { DocPrintPortal } from '../components/documents/DocPrintPortal'
import { DocSubject } from '../components/documents/DocSubject'
import { DocVersions } from '../components/documents/DocVersions'
import { IconDownload, IconEdit, IconPrint } from '../components/Icons'

type Panel = 'form' | 'subject' | 'versions'
type SaveState = 'saved' | 'saving' | 'dirty' | 'failed'

const AUTOSAVE_MS = 1000

// Stable empty values, so a document with nothing chosen still memoises.
const NO_VALUES: DocValues = {}
const NO_IDS: string[] = []

export function DocumentLabPage() {
  const { documentId } = useParams()
  const { data, version: dataVersion } = useData()
  const { user } = useAuth()

  const [project, setProject] = useState<DocProject | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [metrics, setMetrics] = useState<Metrics | null>(null)
  const [panel, setPanel] = useState<Panel>('form')
  const [saveState, setSaveState] = useState<SaveState>('saved')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [previewVersion, setPreviewVersion] = useState<number | null>(null)
  const [printToken, setPrintToken] = useState(0)
  const [renaming, setRenaming] = useState(false)
  const [nameDraft, setNameDraft] = useState('')
  const [zoom, setZoom] = useState(1)

  const teacher = useMemo(() => ({ name: user?.name ?? '', username: user?.username ?? '' }), [user])
  const template = project ? templateById(project.templateId) : null

  // ---- load ----

  useEffect(() => {
    let alive = true
    void loadMetrics().then((m) => alive && setMetrics(m))
    return () => {
      alive = false
    }
  }, [])

  useEffect(() => {
    let alive = true
    if (!documentId) return
    void (async () => {
      try {
        const found = await api.document(documentId)
        if (alive) setProject(found)
      } catch (err) {
        if (alive) setLoadError(err instanceof Error ? err.message : 'Could not open that document.')
      }
    })()
    return () => {
      alive = false
    }
  }, [documentId])

  // ---- autosave ----
  //
  // One timer, restarted on every change, so a burst of typing is one write.
  // The pending draft is held in a ref as well as in state: a save fired by the
  // timer must send what is on screen now, not what was there when it was set.

  const pending = useRef<{ values: DocValues; studentIds: string[]; classId: string | null; name: string } | null>(null)
  const timer = useRef<number | null>(null)

  const flush = useCallback(async () => {
    const body = pending.current
    if (!body || !documentId) return
    pending.current = null
    setSaveState('saving')
    try {
      const saved = await api.updateDocument(documentId, body)
      // Keep the local draft: the server echo can arrive after another keystroke.
      setProject((current) => (current ? { ...current, ...saved, values: current.values, studentIds: current.studentIds } : saved))
      setSaveState(pending.current ? 'dirty' : 'saved')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save.')
      setSaveState('failed')
    }
  }, [documentId])

  const queue = useCallback(
    (next: DocProject) => {
      pending.current = {
        values: next.values,
        studentIds: next.studentIds,
        classId: next.classId,
        name: next.name,
      }
      setSaveState('dirty')
      if (timer.current) window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => void flush(), AUTOSAVE_MS)
    },
    [flush]
  )

  // A document left mid-edit is saved rather than lost.
  useEffect(() => {
    const onHide = () => {
      if (pending.current) void flush()
    }
    window.addEventListener('beforeunload', onHide)
    document.addEventListener('visibilitychange', onHide)
    return () => {
      window.removeEventListener('beforeunload', onHide)
      document.removeEventListener('visibilitychange', onHide)
      if (timer.current) window.clearTimeout(timer.current)
      if (pending.current) void flush()
    }
  }, [flush])

  // ---- editing ----

  const update = useCallback(
    (change: (current: DocProject) => DocProject) => {
      setProject((current) => {
        if (!current) return current
        const next = change(current)
        queue(next)
        return next
      })
      setPreviewVersion(null)
    },
    [queue]
  )

  const setValue = useCallback(
    (id: string, value: string | string[] | string[][]) => {
      update((current) => ({ ...current, values: { ...current.values, [id]: value } }))
    },
    [update]
  )

  const setSubjects = useCallback(
    (classId: string | null, studentIds: string[]) => {
      if (!template) return
      update((current) => {
        const ordered = [...studentIds].sort((a, b) => {
          const sa = data.students.find((s) => s.id === a)
          const sb = data.students.find((s) => s.id === b)
          return nameKey(sa?.fullName ?? '').localeCompare(nameKey(sb?.fullName ?? ''))
        })
        const before = makePrefillContext({ data, studentIds: current.studentIds, classId: current.classId, teacher })
        const after = makePrefillContext({ data, studentIds: ordered, classId, teacher })
        return {
          ...current,
          classId,
          studentIds: ordered,
          // Anything the teacher typed stays; defaults follow the new subject.
          values: reapplyPrefill(template, before, after, current.values),
        }
      })
    },
    [data, teacher, template, update]
  )

  // ---- what is on the page ----

  // Memoised by identity, not by value: these feed the layout, so a fresh
  // array or object on every render would rebuild every page on every render.
  const shownVersion = useMemo(
    () => (previewVersion === null ? null : (project?.versions.find((v) => v.n === previewVersion) ?? null)),
    [previewVersion, project]
  )
  const shownValues = useMemo(() => shownVersion?.values ?? project?.values ?? NO_VALUES, [shownVersion, project])
  const shownStudents = useMemo(() => shownVersion?.studentIds ?? project?.studentIds ?? NO_IDS, [shownVersion, project])

  const prefillCtx = useMemo(
    () => makePrefillContext({ data, studentIds: shownStudents, classId: project?.classId ?? null, teacher }),
    [data, shownStudents, project?.classId, teacher]
  )

  const photos = useStudentPhotos(prefillCtx.students, dataVersion)

  const layout = useMemo(() => {
    if (!metrics || !template || !project) return null
    const ctx = makeBuildContext(prefillCtx, shownValues, photos)
    return buildLayout({ metrics, template, ctx, docName: project.name })
  }, [metrics, template, project, prefillCtx, shownValues, photos])

  // ---- actions ----

  async function saveVersion(label: string) {
    if (!project) return
    setBusy(true)
    setError(null)
    try {
      if (pending.current) await flush()
      const saved = await api.saveDocumentVersion(project.id, label)
      setProject(saved)
      setPreviewVersion(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save a version.')
    } finally {
      setBusy(false)
    }
  }

  async function restore(n: number) {
    if (!project) return
    setBusy(true)
    setError(null)
    try {
      if (pending.current) await flush()
      const saved = await api.restoreDocumentVersion(project.id, n)
      setProject(saved)
      setPreviewVersion(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not restore that version.')
    } finally {
      setBusy(false)
    }
  }

  async function download() {
    if (!layout || !project) return
    setBusy(true)
    setError(null)
    try {
      await downloadPdf(layout, { title: project.name, author: teacher.name })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not build the PDF.')
    } finally {
      setBusy(false)
    }
  }

  function commitName() {
    const next = nameDraft.trim()
    setRenaming(false)
    if (!next || !project || next === project.name) return
    update((current) => ({ ...current, name: next }))
  }

  // ---- render ----

  if (loadError) {
    return (
      <div className="min-w-0">
        <PageHeader eyebrow="Document Lab" title="Not found" back={{ to: '/documents', label: 'Documents' }} />
        <p className="p-5 text-sm sm:p-8" style={{ color: 'var(--ink-soft)' }}>
          {loadError}
        </p>
      </div>
    )
  }

  if (!project || !template) {
    return (
      <div className="min-w-0">
        <PageHeader eyebrow="Document Lab" title="Opening" back={{ to: '/documents', label: 'Documents' }} />
        <p className="label p-5 sm:p-8">
          {project && !templateById(project.templateId) ? 'This document uses a template that no longer exists.' : 'loading document...'}
        </p>
      </div>
    )
  }

  const pageCount = layout?.pages.length ?? 0

  return (
    <div className="min-w-0">
      <PageHeader
        eyebrow={template.name}
        title={project.name}
        back={{ to: '/documents', label: 'Documents' }}
        meta={
          <>
            <span style={{ color: 'var(--ink-soft)' }}>
              {pageCount} {pageCount === 1 ? 'page' : 'pages'}
            </span>
            <span style={{ color: 'var(--ink-soft)' }}>v{project.currentVersion}</span>
            <SaveBadge state={saveState} />
            {previewVersion !== null && (
              <button type="button" className="chip chip-assigned" onClick={() => setPreviewVersion(null)}>
                viewing v{previewVersion}, back to draft
              </button>
            )}
          </>
        }
        actions={
          <>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                setNameDraft(project.name)
                setRenaming(true)
              }}
            >
              <IconEdit className="h-3 w-3" />
              Rename
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => setPrintToken((t) => t + 1)} disabled={!layout}>
              <IconPrint className="h-3 w-3" />
              Print
            </button>
            <button type="button" className="btn btn-primary" onClick={() => void download()} disabled={!layout || busy}>
              <IconDownload className="h-3 w-3" />
              {busy ? 'Working' : 'Download PDF'}
            </button>
          </>
        }
      />

      {renaming && (
        <div className="border-b px-5 py-3 hairline sm:px-8">
          <div className="flex max-w-xl gap-2">
            <input
              className="field min-w-0 flex-1"
              value={nameDraft}
              autoFocus
              onChange={(e) => setNameDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') commitName()
                if (e.key === 'Escape') setRenaming(false)
              }}
              aria-label="Document name"
            />
            <button type="button" className="btn btn-primary" onClick={commitName}>
              Rename
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => setRenaming(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {error && (
        <p
          className="border-b px-5 py-3 font-mono text-xs sm:px-8"
          style={{ borderColor: 'var(--overdue)', background: 'var(--overdue-dim)', color: 'var(--overdue)' }}
        >
          {error}
        </p>
      )}

      <div className="flex min-w-0 flex-col lg:h-[calc(100vh-13rem)] lg:flex-row">
        {/* ---- left: the form ---- */}
        <div
          className="flex min-h-0 w-full shrink-0 flex-col border-b lg:w-[26rem] lg:border-r lg:border-b-0 hairline"
          style={{ background: 'var(--panel)' }}
        >
          <div className="flex shrink-0 gap-1 border-b p-3 hairline">
            {(
              [
                ['form', 'Fields'],
                ['subject', template.audience === 'none' ? 'Class' : 'Who'],
                ['versions', `History (${project.versions.length})`],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                className="toggle-option flex-1"
                aria-pressed={panel === id}
                data-active={panel === id}
                onClick={() => setPanel(id)}
                style={
                  panel === id
                    ? { background: 'var(--panel-3)', borderColor: 'var(--line)', color: 'var(--ink)' }
                    : undefined
                }
              >
                {label}
              </button>
            ))}
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto">
            {panel === 'form' && (
              <DocForm sections={template.sections} values={shownValues} ctx={prefillCtx} onChange={setValue} />
            )}
            {panel === 'subject' && (
              <div className="p-5 sm:p-6">
                <DocSubject
                  audience={template.audience}
                  classId={project.classId}
                  studentIds={project.studentIds}
                  onClassChange={(next) => setSubjects(next, [])}
                  onStudentsChange={(ids) => setSubjects(project.classId, ids)}
                />
              </div>
            )}
            {panel === 'versions' && (
              <DocVersions
                project={project}
                previewing={previewVersion}
                busy={busy}
                onPreview={setPreviewVersion}
                onRestore={(n) => void restore(n)}
                onSave={(label) => void saveVersion(label)}
              />
            )}
          </div>
        </div>

        {/* ---- right: the page ---- */}
        <div className="min-w-0 flex-1 overflow-y-auto" style={{ background: 'var(--panel-2)' }}>
          <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b px-5 py-2.5 hairline" style={{ background: 'var(--panel-2)' }}>
            <span className="label">
              A4 {previewVersion !== null ? `| version ${previewVersion}` : '| live'}
            </span>
            <div className="flex items-center gap-1.5">
              <button type="button" className="btn btn-ghost !px-2" onClick={() => setZoom((z) => Math.max(0.5, Math.round((z - 0.1) * 10) / 10))} aria-label="Zoom out">
                -
              </button>
              <span className="mono w-10 text-center text-[11px]" style={{ color: 'var(--ink-soft)' }}>
                {Math.round(zoom * 100)}%
              </span>
              <button type="button" className="btn btn-ghost !px-2" onClick={() => setZoom((z) => Math.min(2, Math.round((z + 0.1) * 10) / 10))} aria-label="Zoom in">
                +
              </button>
            </div>
          </div>
          <div className="p-5 sm:p-8">
            {layout ? (
              <div style={{ width: `${Math.round(zoom * 100)}%`, maxWidth: zoom <= 1 ? '100%' : 'none', margin: '0 auto' }}>
                <DocPages layout={layout} />
              </div>
            ) : (
              <p className="label">preparing the page...</p>
            )}
          </div>
        </div>
      </div>

      {layout && <DocPrintPortal layout={layout} token={printToken} title={project.name} />}
    </div>
  )
}

function SaveBadge({ state }: { state: SaveState }) {
  const map: Record<SaveState, { label: string; className: string }> = {
    saved: { label: 'saved', className: 'chip chip-collected' },
    saving: { label: 'saving', className: 'chip chip-assigned' },
    dirty: { label: 'unsaved', className: 'chip chip-assigned' },
    failed: { label: 'save failed', className: 'chip chip-overdue' },
  }
  const { label, className } = map[state]
  return <span className={className}>{label}</span>
}
