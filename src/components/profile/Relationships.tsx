import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../lib/api'
import { useData } from '../../lib/data-context'
import { displayName, formatStamp, nameKey } from '../../lib/format'
import {
  RELATIONSHIP_LABELS,
  RELATIONSHIP_ORDER,
  RELATIONSHIP_TONE,
  resolveRelationships,
  type ResolvedRelationship,
} from '../../lib/relationships'
import type { RelationshipKind, Student } from '../../lib/types'
import { Field, FieldGroup } from '../Field'
import { IconPlus, IconTrash } from '../Icons'
import { Modal } from '../Modal'

export function Relationships({ student }: { student: Student }) {
  const { data, reload } = useData()
  const [adding, setAdding] = useState(false)
  const [busy, setBusy] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const list = useMemo(() => resolveRelationships(student, data.students), [student, data.students])

  async function remove(id: string) {
    setBusy(id)
    setError(null)
    try {
      await api.deleteRelationship(id)
      await reload()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not remove that.')
    } finally {
      setBusy(null)
    }
  }

  return (
    <section className="panel">
      <header className="flex items-center justify-between gap-3 border-b px-5 py-3 hairline">
        <div className="flex items-baseline gap-2.5">
          <h2 className="label">relationships</h2>
          <span className="mono text-xs" style={{ color: 'var(--ink-faint)' }}>
            {list.length}
          </span>
        </div>
        <button type="button" className="btn btn-ghost !px-2" onClick={() => setAdding(true)} aria-label="Add a relationship">
          <IconPlus />
        </button>
      </header>

      {error && (
        <p className="border-b px-5 py-3 font-mono text-xs hairline" style={{ color: 'var(--overdue)' }}>
          {error}
        </p>
      )}

      {list.length === 0 ? (
        <p className="px-5 py-6 text-sm" style={{ color: 'var(--ink-faint)' }}>
          Nothing recorded yet.
        </p>
      ) : (
        <ul className="divide-y" style={{ borderColor: 'var(--line-soft)' }}>
          {list.map((r) => (
            <RelationshipRow key={r.id} rel={r} onRemove={() => remove(r.id)} busy={busy === r.id} />
          ))}
        </ul>
      )}

      {adding && <RelationshipForm student={student} onClose={() => setAdding(false)} />}
    </section>
  )
}

function RelationshipRow({
  rel,
  onRemove,
  busy,
}: {
  rel: ResolvedRelationship
  onRemove: () => void
  busy: boolean
}) {
  const { reload } = useData()
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [saving, setSaving] = useState(false)
  const tone = RELATIONSHIP_TONE[rel.kind]

  async function addNote(e: React.FormEvent) {
    e.preventDefault()
    if (!draft.trim()) return
    setSaving(true)
    try {
      await api.addRelationshipNote(rel.id, draft.trim())
      await reload()
      setDraft('')
    } finally {
      setSaving(false)
    }
  }

  return (
    <li className="group px-5 py-3.5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="chip"
              style={{
                color: tone,
                borderColor: `color-mix(in srgb, ${tone} 45%, transparent)`,
                background: `color-mix(in srgb, ${tone} 14%, var(--bg))`,
              }}
            >
              <span className="chip-dot" />
              {RELATIONSHIP_LABELS[rel.kind]}
            </span>
            {rel.otherStudentId ? (
              <Link to={`/students/${rel.otherStudentId}`} className="font-medium hover:underline">
                {rel.otherLabel}
              </Link>
            ) : (
              <span className="font-medium">{rel.otherLabel}</span>
            )}
            {/* Said plainly, so it is obvious where the record actually lives. */}
            {rel.mirrored && <span className="label">recorded on their profile</span>}
          </div>
          <button
            type="button"
            className="label mt-1.5 hover:text-[var(--ink)]"
            onClick={() => setOpen((v) => !v)}
          >
            {rel.notes.length} {rel.notes.length === 1 ? 'note' : 'notes'} {open ? '▲' : '▼'}
          </button>
        </div>

        <button
          type="button"
          className="btn btn-ghost btn-danger shrink-0 !px-2 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
          onClick={onRemove}
          disabled={busy}
          aria-label={`Remove relationship with ${rel.otherLabel}`}
        >
          <IconTrash className="h-3.5 w-3.5" />
        </button>
      </div>

      {open && (
        <div className="mt-3 border-t pt-3 hairline">
          <ul className="space-y-2.5">
            {rel.notes.map((n) => (
              <li key={n.id} className="flex items-start gap-3">
                <span className="mono w-[11ch] shrink-0 pt-0.5 text-[10px]" style={{ color: 'var(--ink-faint)' }}>
                  {formatStamp(n.createdAt)}
                </span>
                <p className="min-w-0 flex-1 text-sm leading-relaxed whitespace-pre-wrap">{n.text}</p>
              </li>
            ))}
          </ul>
          <form onSubmit={addNote} className="mt-3 flex gap-2">
            <input
              className="field"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Add a note…"
            />
            <button type="submit" className="btn shrink-0" disabled={saving || !draft.trim()}>
              {saving ? '…' : 'Log'}
            </button>
          </form>
        </div>
      )}
    </li>
  )
}

function RelationshipForm({ student, onClose }: { student: Student; onClose: () => void }) {
  const { data, reload } = useData()
  const [kind, setKind] = useState<RelationshipKind>('friend')
  const [otherStudentId, setOtherStudentId] = useState('')
  const [otherName, setOtherName] = useState('')
  const [note, setNote] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const candidates = useMemo(
    () =>
      data.students
        .filter((s) => s.id !== student.id)
        .sort((a, b) => nameKey(a.fullName).localeCompare(nameKey(b.fullName))),
    [data.students, student.id]
  )

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!otherStudentId && !otherName.trim()) return setError('Say who the other person is.')
    if (!note.trim()) return setError('Add a first note about this relationship.')

    setBusy(true)
    setError(null)
    try {
      await api.addRelationship({
        studentId: student.id,
        kind,
        otherStudentId: otherStudentId || undefined,
        otherName: otherStudentId ? undefined : otherName.trim(),
        note: note.trim(),
      })
      await reload()
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save.')
      setBusy(false)
    }
  }

  return (
    <Modal
      eyebrow={`Relationship · ${displayName(student)}`}
      title="Add a relationship"
      onClose={onClose}
      footer={
        <>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" form="relationship-form" className="btn btn-primary" disabled={busy}>
            {busy ? 'Saving…' : 'Add relationship'}
          </button>
        </>
      }
    >
      <form id="relationship-form" onSubmit={submit} className="space-y-4">
        <FieldGroup label="Type" required>
          <div className="grid grid-cols-3 gap-2">
            {RELATIONSHIP_ORDER.map((k) => (
              <button
                key={k}
                type="button"
                className="pick !py-2 text-center"
                aria-pressed={kind === k}
                onClick={() => setKind(k)}
                style={kind === k ? { borderColor: RELATIONSHIP_TONE[k], color: RELATIONSHIP_TONE[k] } : undefined}
              >
                <span className="block text-xs leading-snug font-medium">{RELATIONSHIP_LABELS[k]}</span>
              </button>
            ))}
          </div>
        </FieldGroup>

        <Field label="The other person" required hint="a student here, or type a name">
          <select
            className="field"
            value={otherStudentId}
            onChange={(e) => {
              setOtherStudentId(e.target.value)
              if (e.target.value) setOtherName('')
            }}
          >
            <option value="">— someone not in the terminal —</option>
            {candidates.map((s) => (
              <option key={s.id} value={s.id}>
                {s.fullName}
              </option>
            ))}
          </select>
        </Field>

        {!otherStudentId && (
          <Field label="Their name" required>
            <input
              className="field"
              value={otherName}
              onChange={(e) => setOtherName(e.target.value)}
              placeholder="e.g. a sibling in another school"
            />
          </Field>
        )}

        <Field label="First note" required hint="what happened, or what you noticed">
          <textarea
            className="field"
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Fell out over seating on 12 Nov; separated for group work since."
          />
        </Field>

        <p className="text-xs" style={{ color: 'var(--ink-faint)' }}>
          A relationship starts with one note, and you can add more to it afterwards. Linking a
          student here makes it show on both profiles.
        </p>

        {error && (
          <p className="font-mono text-xs" style={{ color: 'var(--overdue)' }}>
            {error}
          </p>
        )}
      </form>
    </Modal>
  )
}
