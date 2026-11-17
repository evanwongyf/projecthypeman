import { useState } from 'react'
import { api } from '../../lib/api'
import { useData } from '../../lib/data-context'
import type { Guardian } from '../../lib/types'
import { Field } from '../Field'
import { IconEdit, IconPlus, IconTrash } from '../Icons'
import { Modal } from '../Modal'

/** Parent and guardian contacts for one student. */
export function Guardians({ studentId, guardians }: { studentId: string; guardians: Guardian[] }) {
  const { reload } = useData()
  const [adding, setAdding] = useState(false)
  const [editing, setEditing] = useState<Guardian | null>(null)
  const [removing, setRemoving] = useState<string | null>(null)

  async function remove(id: string) {
    setRemoving(id)
    try {
      await api.deleteGuardian(id)
      await reload()
    } finally {
      setRemoving(null)
    }
  }

  return (
    <section className="panel">
      <header className="flex items-center justify-between gap-3 border-b px-5 py-3 hairline">
        <div className="flex items-baseline gap-2.5">
          <h2 className="label">parents &amp; guardians</h2>
          <span className="mono text-xs" style={{ color: 'var(--ink-faint)' }}>
            {guardians.length}
          </span>
        </div>
        <button type="button" className="btn btn-ghost !px-2" onClick={() => setAdding(true)} aria-label="Add a contact">
          <IconPlus />
        </button>
      </header>

      {guardians.length === 0 ? (
        <p className="px-5 py-6 text-sm" style={{ color: 'var(--ink-faint)' }}>
          No contacts yet.
        </p>
      ) : (
        <ul className="divide-y" style={{ borderColor: 'var(--line-soft)' }}>
          {guardians.map((g) => (
            <li key={g.id} className="group px-5 py-3.5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-medium">
                    {g.name}
                    {g.relation && (
                      <span className="label ml-2 normal-case">{g.relation}</span>
                    )}
                  </p>
                  <div className="mono mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-[11px]" style={{ color: 'var(--ink-soft)' }}>
                    {g.phone && <a href={`tel:${g.phone}`} className="hover:underline">{g.phone}</a>}
                    {g.email && <a href={`mailto:${g.email}`} className="truncate hover:underline">{g.email}</a>}
                  </div>
                  {g.note && (
                    <p className="mt-1.5 text-xs" style={{ color: 'var(--ink-faint)' }}>
                      {g.note}
                    </p>
                  )}
                </div>
                <div className="flex shrink-0 gap-1 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
                  <button type="button" className="btn btn-ghost !px-2" onClick={() => setEditing(g)} aria-label={`Edit ${g.name}`}>
                    <IconEdit className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost btn-danger !px-2"
                    onClick={() => remove(g.id)}
                    disabled={removing === g.id}
                    aria-label={`Remove ${g.name}`}
                  >
                    <IconTrash className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {adding && <GuardianForm studentId={studentId} onClose={() => setAdding(false)} />}
      {editing && <GuardianForm studentId={studentId} guardian={editing} onClose={() => setEditing(null)} />}
    </section>
  )
}

function GuardianForm({
  studentId,
  guardian,
  onClose,
}: {
  studentId: string
  guardian?: Guardian
  onClose: () => void
}) {
  const { reload } = useData()
  const [name, setName] = useState(guardian?.name ?? '')
  const [relation, setRelation] = useState(guardian?.relation ?? '')
  const [phone, setPhone] = useState(guardian?.phone ?? '')
  const [email, setEmail] = useState(guardian?.email ?? '')
  const [note, setNote] = useState(guardian?.note ?? '')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return setError('A name is required.')
    setBusy(true)
    setError(null)
    try {
      const body = {
        name: name.trim(),
        relation: relation.trim(),
        phone: phone.trim(),
        email: email.trim(),
        note: note.trim(),
      }
      if (guardian) await api.updateGuardian(guardian.id, body)
      else await api.addGuardian({ studentId, ...body })
      await reload()
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save.')
      setBusy(false)
    }
  }

  return (
    <Modal
      eyebrow={guardian ? 'Edit contact' : 'New contact'}
      title={guardian ? guardian.name : 'Add a parent or guardian'}
      onClose={onClose}
      footer={
        <>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" form="guardian-form" className="btn btn-primary" disabled={busy}>
            {busy ? 'Saving…' : guardian ? 'Save' : 'Add contact'}
          </button>
        </>
      }
    >
      <form id="guardian-form" onSubmit={submit} className="space-y-4">
        <Field label="Name" required>
          <input className="field" value={name} onChange={(e) => setName(e.target.value)} autoFocus required />
        </Field>
        <Field label="Relationship to the student" hint="e.g. Mother, Grandfather, Guardian">
          <input className="field" value={relation} onChange={(e) => setRelation(e.target.value)} />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phone">
            <input className="field mono" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Field>
          <Field label="Email">
            <input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Field>
        </div>
        <Field label="Note" hint="optional">
          <input className="field" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Best reached after 6pm" />
        </Field>
        {error && (
          <p className="font-mono text-xs" style={{ color: 'var(--overdue)' }}>
            {error}
          </p>
        )}
      </form>
    </Modal>
  )
}
