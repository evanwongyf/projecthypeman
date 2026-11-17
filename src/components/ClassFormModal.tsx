import { useState } from 'react'
import { api } from '../lib/api'
import { useData } from '../lib/data-context'
import type { ClassRoom } from '../lib/types'
import { Field } from './Field'
import { Modal } from './Modal'

export function ClassFormModal({ cls, onClose }: { cls?: ClassRoom; onClose: () => void }) {
  const { reload } = useData()
  const [name, setName] = useState(cls?.name ?? '')
  const [school, setSchool] = useState(cls?.school ?? '')
  const [subject, setSubject] = useState(cls?.subject ?? '')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) {
      setError('A class name is required.')
      return
    }
    setBusy(true)
    setError(null)
    try {
      const body = { name: name.trim(), school: school.trim(), subject: subject.trim() }
      if (cls) await api.updateClass(cls.id, body)
      else await api.createClass(body)
      await reload()
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save.')
      setBusy(false)
    }
  }

  return (
    <Modal
      eyebrow={cls ? 'Edit class' : 'New class'}
      title={cls ? cls.name : 'Create a class'}
      onClose={onClose}
      footer={
        <>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" form="class-form" className="btn btn-primary" disabled={busy}>
            {busy ? 'Saving…' : cls ? 'Save' : 'Create class'}
          </button>
        </>
      }
    >
      <form id="class-form" onSubmit={submit} className="space-y-4">
        <Field label="Class name" required>
          <input
            className="field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. P5 Resilience"
            autoFocus
            required
          />
        </Field>
        <Field label="School">
          <input
            className="field"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="e.g. Maris Stella High"
          />
        </Field>
        <Field label="Subject">
          <input
            className="field"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g. Mathematics"
          />
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
