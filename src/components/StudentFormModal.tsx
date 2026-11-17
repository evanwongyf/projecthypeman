import { useState } from 'react'
import { api } from '../lib/api'
import { useData } from '../lib/data-context'
import type { Student } from '../lib/types'
import { Field } from './Field'
import { Modal } from './Modal'

export function StudentFormModal({
  student,
  defaultClassId,
  onClose,
}: {
  /** Omit to create. */
  student?: Student
  defaultClassId?: string | null
  onClose: () => void
}) {
  const { data, reload } = useData()
  const classes = [...data.classes].sort((a, b) => a.name.localeCompare(b.name))

  const [fullName, setFullName] = useState(student?.fullName ?? '')
  const [preferredName, setPreferredName] = useState(student?.preferredName ?? '')
  const [birthday, setBirthday] = useState(student?.birthday ?? '')
  const [classId, setClassId] = useState<string>(student ? (student.classId ?? '') : (defaultClassId ?? ''))
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!fullName.trim()) {
      setError('A full name is required.')
      return
    }
    setBusy(true)
    setError(null)
    try {
      const body = {
        fullName: fullName.trim(),
        preferredName: preferredName.trim(),
        birthday: birthday.trim(),
        classId: classId || null,
      }
      if (student) await api.updateStudent(student.id, body)
      else await api.createStudent(body)
      await reload()
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save.')
      setBusy(false)
    }
  }

  return (
    <Modal
      eyebrow={student ? 'Edit student' : 'New student'}
      title={student ? student.fullName : 'Add a student'}
      onClose={onClose}
      footer={
        <>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" form="student-form" className="btn btn-primary" disabled={busy}>
            {busy ? 'Saving…' : student ? 'Save' : 'Add student'}
          </button>
        </>
      }
    >
      <form id="student-form" onSubmit={submit} className="space-y-4">
        <Field label="Full name" required>
          <input
            className="field"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoFocus
            required
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Preferred name" hint="optional">
            <input className="field" value={preferredName} onChange={(e) => setPreferredName(e.target.value)} />
          </Field>
          <Field label="Birthday" hint="optional">
            <input className="field mono" type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
          </Field>
        </div>

        <Field label="Class" hint="leave unassigned to keep them in the pool">
          <select className="field" value={classId} onChange={(e) => setClassId(e.target.value)}>
            <option value="">— no class —</option>
            {classes.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
                {c.subject ? ` · ${c.subject}` : ''}
              </option>
            ))}
          </select>
        </Field>

        {error && (
          <p className="font-mono text-xs" style={{ color: 'var(--overdue)' }}>
            {error}
          </p>
        )}
        <p className="text-xs" style={{ color: 'var(--ink-faint)' }}>
          A photo, notes and incidents are added from the student's profile.
        </p>
      </form>
    </Modal>
  )
}
