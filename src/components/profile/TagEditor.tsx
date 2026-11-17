import { useState } from 'react'
import { api } from '../../lib/api'
import { useData } from '../../lib/data-context'
import { IconClose, IconPlus } from '../Icons'

type Field = 'ccas' | 'interests' | 'characteristics'

/** Chips a teacher adds one at a time — CCAs, interests, characteristics. */
export function TagEditor({
  studentId,
  field,
  label,
  placeholder,
  values,
}: {
  studentId: string
  field: Field
  label: string
  placeholder: string
  values: string[]
}) {
  const { reload } = useData()
  const [draft, setDraft] = useState('')
  const [open, setOpen] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function save(next: string[]) {
    setBusy(true)
    setError(null)
    try {
      await api.updateStudent(studentId, { [field]: next })
      await reload()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save that.')
    } finally {
      setBusy(false)
    }
  }

  async function add(e: React.FormEvent) {
    e.preventDefault()
    const value = draft.trim()
    if (!value) return
    if (values.some((v) => v.toLowerCase() === value.toLowerCase())) {
      setDraft('')
      return
    }
    await save([...values, value])
    setDraft('')
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="label">{label}</span>
        <button
          type="button"
          className="btn btn-ghost !px-2 !py-1"
          onClick={() => setOpen((v) => !v)}
          aria-label={`Add ${label.toLowerCase()}`}
        >
          <IconPlus className="h-3.5 w-3.5" />
        </button>
      </div>

      {open && (
        <form onSubmit={add} className="mb-2 flex gap-2">
          <input
            className="field"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={placeholder}
            autoFocus
          />
          <button type="submit" className="btn btn-primary shrink-0" disabled={busy || !draft.trim()}>
            Add
          </button>
        </form>
      )}

      {values.length === 0 ? (
        <p className="text-xs" style={{ color: 'var(--ink-faint)' }}>
          None recorded.
        </p>
      ) : (
        <ul className="flex flex-wrap gap-1.5">
          {values.map((v) => (
            <li key={v}>
              <span className="chip chip-neutral">
                {v}
                <button
                  type="button"
                  onClick={() => save(values.filter((x) => x !== v))}
                  disabled={busy}
                  aria-label={`Remove ${v}`}
                  className="-mr-1 opacity-60 transition-opacity hover:opacity-100"
                >
                  <IconClose className="h-3 w-3" />
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}

      {error && (
        <p className="mt-2 font-mono text-xs" style={{ color: 'var(--overdue)' }}>
          {error}
        </p>
      )}
    </div>
  )
}
