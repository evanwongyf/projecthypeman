import { useState } from 'react'
import { api } from '../lib/api'
import { useData } from '../lib/data-context'
import { formatStamp } from '../lib/format'
import type { Entry } from '../lib/types'
import { IconCheck, IconPlus, IconTrash } from './Icons'

/**
 * Notes and incidents share this log: one entry per note, each stamped with the
 * date and time it was logged.
 */
export function EntryLog({
  studentId,
  kind,
  entries,
  title,
  placeholder,
  tone,
}: {
  studentId: string
  kind: 'notes' | 'incidents'
  entries: Entry[]
  title: string
  placeholder: string
  tone?: string
}) {
  const { reload } = useData()
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [removing, setRemoving] = useState<string | null>(null)

  async function add(e: React.FormEvent) {
    e.preventDefault()
    if (!text.trim()) return
    setBusy(true)
    setError(null)
    try {
      await api.addEntry(studentId, kind, text.trim())
      await reload()
      setText('')
      setOpen(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save that.')
    } finally {
      setBusy(false)
    }
  }

  async function remove(entryId: string) {
    setRemoving(entryId)
    try {
      await api.deleteEntry(studentId, kind, entryId)
      await reload()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not delete that.')
    } finally {
      setRemoving(null)
    }
  }

  return (
    <section className="panel">
      <header className="flex items-center justify-between gap-3 border-b px-5 py-4 hairline">
        <div className="flex items-baseline gap-2.5">
          <h2 className="label" style={tone ? { color: tone } : undefined}>
            {title}
          </h2>
          <span className="mono text-xs" style={{ color: 'var(--ink-faint)' }}>
            {entries.length}
          </span>
        </div>
        <button type="button" className="btn btn-ghost !px-2" onClick={() => setOpen((v) => !v)} aria-label={`Add ${title}`}>
          <IconPlus />
        </button>
      </header>

      {open && (
        <form onSubmit={add} className="border-b p-5 hairline">
          <textarea
            className="field"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder}
            rows={3}
            autoFocus
          />
          <div className="mt-3 flex items-center justify-end gap-2">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                setOpen(false)
                setText('')
              }}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={busy || !text.trim()}>
              <IconCheck />
              {busy ? 'Logging…' : 'Log entry'}
            </button>
          </div>
        </form>
      )}

      {error && (
        <p className="border-b px-5 py-3 font-mono text-xs hairline" style={{ color: 'var(--overdue)' }}>
          {error}
        </p>
      )}

      {entries.length === 0 ? (
        <p className="px-5 py-6 text-sm" style={{ color: 'var(--ink-faint)' }}>
          Nothing logged yet.
        </p>
      ) : (
        <ul className="divide-y" style={{ borderColor: 'var(--line-soft)' }}>
          {entries.map((entry) => (
            <li key={entry.id} className="group flex items-start gap-3 px-5 py-4">
              {/* The timestamp is the spine of the log. */}
              <span
                className="mono w-[11ch] shrink-0 pt-0.5 text-[10px] leading-relaxed"
                style={{ color: 'var(--ink-faint)' }}
              >
                {formatStamp(entry.createdAt)}
              </span>
              <p className="min-w-0 flex-1 text-sm leading-relaxed whitespace-pre-wrap">{entry.text}</p>
              <button
                type="button"
                className="btn btn-ghost btn-danger shrink-0 !px-2 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
                onClick={() => remove(entry.id)}
                disabled={removing === entry.id}
                aria-label="Delete entry"
              >
                <IconTrash className="h-3.5 w-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
