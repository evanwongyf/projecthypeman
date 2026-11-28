import { useMemo, useRef, useState } from 'react'
import { recommendCharts, type Suggestion } from '../../lib/analytics/recommend'
import type { ColumnRole, TableProfile } from '../../lib/analytics/types'
import { IconDatabase, IconPlus, IconTrash, IconUpload } from '../Icons'

const ROLE_TONE: Record<ColumnRole, string> = {
  time: 'var(--assigned)',
  measure: 'var(--collected)',
  category: 'var(--accent)',
  geo: 'var(--accent)',
  boolean: 'var(--ink-soft)',
  id: 'var(--ink-faint)',
  text: 'var(--ink-faint)',
}

export function DataPanel({
  profiles,
  busy,
  error,
  onDismissError,
  onFiles,
  onRemove,
  onAddSuggestion,
}: {
  profiles: TableProfile[]
  busy: string | null
  error: string | null
  onDismissError: () => void
  onFiles: (files: File[]) => void
  onRemove: (table: string) => void
  onAddSuggestion: (s: Suggestion) => void
}) {
  const input = useRef<HTMLInputElement>(null)
  const [drag, setDrag] = useState(false)
  const [open, setOpen] = useState<string | null>(null)
  const selected = profiles.find((p) => p.table === open) ?? profiles[0]
  const suggestions = useMemo(() => (selected ? recommendCharts(selected).slice(0, 6) : []), [selected])

  return (
    <div className="flex min-h-0 flex-col gap-4">
      <div
        className="panel flex cursor-pointer flex-col items-center gap-2 px-4 py-5 text-center"
        style={drag ? { borderColor: 'var(--accent)', background: 'var(--accent-dim)' } : undefined}
        onClick={() => input.current?.click()}
        onDragOver={(e) => {
          e.preventDefault()
          setDrag(true)
        }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDrag(false)
          onFiles([...e.dataTransfer.files])
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && input.current?.click()}
      >
        <IconUpload className="h-5 w-5" />
        <p className="text-sm font-medium">Drop data files or click to upload</p>
        <p className="label">CSV · TSV · Parquet · JSON · Excel</p>
        <p className="text-[11px]" style={{ color: 'var(--ink-faint)' }}>
          Files stay in this browser. Only a profile reaches the AI.
        </p>
        <input
          ref={input}
          type="file"
          multiple
          hidden
          accept=".csv,.tsv,.txt,.parquet,.json,.jsonl,.ndjson,.xlsx"
          onChange={(e) => {
            onFiles([...(e.target.files ?? [])])
            e.target.value = ''
          }}
        />
      </div>

      {busy && <p className="label">{busy}</p>}
      {error && (
        <div className="panel px-3 py-2.5 font-mono text-xs" style={{ borderColor: 'var(--overdue)', color: 'var(--overdue)' }}>
          {error}
          <button type="button" className="label ml-2 underline" onClick={onDismissError}>
            dismiss
          </button>
        </div>
      )}

      {profiles.length > 0 && (
        <section>
          <p className="label mb-2">Tables</p>
          <ul className="panel divide-y" style={{ borderColor: 'var(--line)' }}>
            {profiles.map((p) => (
              <li key={p.table} className="flex items-center gap-2 px-3 py-2" style={{ borderColor: 'var(--line-soft)' }}>
                <button
                  type="button"
                  className="flex min-w-0 flex-1 items-center gap-2 text-left"
                  onClick={() => setOpen(p.table)}
                  aria-pressed={selected?.table === p.table}
                >
                  <IconDatabase className="h-3.5 w-3.5 shrink-0" />
                  <span className="min-w-0">
                    <span className="block truncate font-mono text-xs font-medium" style={{ color: selected?.table === p.table ? 'var(--accent)' : undefined }}>
                      {p.table}
                    </span>
                    <span className="label">
                      {p.rowCount.toLocaleString('en-US')} rows · {p.columns.length} cols
                    </span>
                  </span>
                </button>
                <button type="button" className="btn btn-ghost btn-danger !px-1.5 !py-1" onClick={() => onRemove(p.table)} title={`Remove ${p.table}`}>
                  <IconTrash className="h-3.5 w-3.5" />
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {selected && (
        <section>
          <p className="label mb-2">Columns in {selected.table}</p>
          <ul className="panel max-h-72 divide-y overflow-y-auto" style={{ borderColor: 'var(--line)' }}>
            {selected.columns.map((c) => (
              <li key={c.name} className="px-3 py-2" style={{ borderColor: 'var(--line-soft)' }} title={c.topValues?.map((t) => `${t.value} (${t.count})`).join(', ')}>
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate font-mono text-xs">{c.name}</span>
                  <span className="label shrink-0" style={{ color: ROLE_TONE[c.role] }}>
                    {c.role}
                    {c.pii ? ' · private' : ''}
                  </span>
                </div>
                <p className="mt-0.5 truncate text-[11px]" style={{ color: 'var(--ink-faint)' }}>
                  {c.type.toLowerCase()} · {c.distinct.toLocaleString('en-US')} distinct
                  {c.nullPct > 0 ? ` · ${c.nullPct}% null` : ''}
                  {!c.pii && c.min !== undefined && (c.role === 'measure' || c.role === 'time') ?` · ${c.min.slice(0, 16)} to ${(c.max ?? '').slice(0, 16)}` : ''}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {suggestions.length > 0 && (
        <section>
          <p className="label mb-2">Suggested charts</p>
          <ul className="space-y-2">
            {suggestions.map((s) => (
              <li key={s.title} className="panel flex items-start gap-2 px-3 py-2.5">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium">{s.title}</p>
                  <p className="mt-0.5 text-[11px] leading-snug" style={{ color: 'var(--ink-faint)' }}>
                    <span className="label mr-1">{s.type}</span>
                    {s.reason}
                  </p>
                </div>
                <button type="button" className="btn !px-2 !py-1" onClick={() => onAddSuggestion(s)} title="Add to dashboard">
                  <IconPlus className="h-3.5 w-3.5" />
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
