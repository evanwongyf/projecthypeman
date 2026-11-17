import { useState } from 'react'
import { api } from '../lib/api'
import { useData } from '../lib/data-context'
import { todayIso } from '../lib/format'
import type { Homework } from '../lib/types'
import { Field } from './Field'
import { Modal } from './Modal'

export function HomeworkFormModal({
  classId,
  homework,
  onClose,
}: {
  classId: string
  /** Omit to create. */
  homework?: Homework
  onClose: () => void
}) {
  const { data, reload } = useData()
  const { classes, students } = data
  const cls = classes.find((c) => c.id === classId)
  const rosterSize = students.filter((s) => s.classId === classId).length

  const [title, setTitle] = useState(homework?.title ?? '')
  const [description, setDescription] = useState(homework?.description ?? '')
  const [dueDate, setDueDate] = useState(homework?.dueDate ?? todayIso())
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim()) return setError('A title is required.')
    if (!dueDate) return setError('A due date is required.')

    setBusy(true)
    setError(null)
    try {
      const body = { title: title.trim(), description: description.trim(), dueDate }
      if (homework) await api.updateHomework(homework.id, body)
      else await api.createHomework({ classId, ...body })
      await reload()
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save.')
      setBusy(false)
    }
  }

  return (
    <Modal
      wide
      eyebrow={homework ? 'Edit homework' : `New homework · ${cls?.name ?? 'class'}`}
      title={homework ? homework.title : 'Set homework'}
      onClose={onClose}
      footer={
        <>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" form="homework-form" className="btn btn-primary" disabled={busy}>
            {busy ? 'Saving…' : homework ? 'Save' : 'Assign'}
          </button>
        </>
      }
    >
      <form id="homework-form" onSubmit={submit} className="space-y-4">
        <Field label="Title" required>
          <input
            className="field"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Workbook 3B, pages 44–47"
            autoFocus
            required
          />
        </Field>

        <Field label="Description">
          <textarea
            className="field"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What to do, what to bring, anything to watch for."
            rows={4}
          />
        </Field>

        <Field label="Due date" required>
          <input
            className="field mono"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </Field>

        {error && (
          <p className="font-mono text-xs" style={{ color: 'var(--overdue)' }}>
            {error}
          </p>
        )}

        {!homework && (
          <p className="text-xs" style={{ color: 'var(--ink-faint)' }}>
            {rosterSize === 0
              ? 'No students in this class yet — add some and they will show up on this homework.'
              : `All ${rosterSize} ${rosterSize === 1 ? 'student' : 'students'} in ${cls?.name} start out assigned.`}
          </p>
        )}
      </form>
    </Modal>
  )
}
