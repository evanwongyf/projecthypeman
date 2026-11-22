/**
 * Version history.
 *
 * Versions are append-only: saving adds one, and restoring an old one adds
 * another rather than rewinding. That means the list is a record of what was
 * actually sent out, which is the thing you want when a document has gone home
 * and someone asks what it said at the time.
 */
import { useState } from 'react'
import { formatStamp } from '../../lib/format'
import { IconUndoArrow } from '../Icons'
import type { DocProject, DocVersion } from '../../lib/documents/types'

const SOURCE_LABEL: Record<DocVersion['source'], string> = {
  created: 'Started',
  saved: 'Saved',
  restored: 'Restored',
}

export function DocVersions({
  project,
  previewing,
  busy,
  onPreview,
  onRestore,
  onSave,
}: {
  project: DocProject
  previewing: number | null
  busy: boolean
  onPreview: (n: number | null) => void
  onRestore: (n: number) => void
  onSave: (label: string) => void
}) {
  const [label, setLabel] = useState('')
  const versions = [...project.versions].sort((a, b) => b.n - a.n)

  return (
    <div className="flex min-h-0 flex-col">
      <div className="border-b p-5 hairline sm:p-6">
        <p className="label">Save a version</p>
        <div className="mt-2 flex gap-2">
          <input
            className="field min-w-0 flex-1"
            value={label}
            placeholder="What changed (optional)"
            onChange={(e) => setLabel(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                onSave(label)
                setLabel('')
              }
            }}
          />
          <button
            type="button"
            className="btn btn-primary"
            disabled={busy}
            onClick={() => {
              onSave(label)
              setLabel('')
            }}
          >
            Save
          </button>
        </div>
        <p className="mt-2 text-xs" style={{ color: 'var(--ink-faint)' }}>
          The draft saves itself as you type. A version is a marker you can come back to.
        </p>
      </div>

      <ol className="min-h-0 flex-1 overflow-y-auto">
        {versions.map((version) => {
          const isCurrent = version.n === project.currentVersion
          const isPreview = previewing === version.n
          return (
            <li key={version.n} className="border-b px-5 py-3 hairline sm:px-6">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="flex items-baseline gap-2">
                    <span className="mono text-xs font-semibold" style={{ color: 'var(--accent)' }}>
                      v{version.n}
                    </span>
                    <span className="truncate text-sm">{version.label || SOURCE_LABEL[version.source]}</span>
                  </p>
                  <p className="label mt-1">
                    {SOURCE_LABEL[version.source]} {formatStamp(version.createdAt)}
                    {version.studentIds.length > 0 && ` | ${version.studentIds.length} student${version.studentIds.length === 1 ? '' : 's'}`}
                  </p>
                </div>
                {isCurrent && !isPreview && <span className="chip chip-collected shrink-0">current</span>}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => onPreview(isPreview ? null : version.n)}
                  aria-pressed={isPreview}
                >
                  {isPreview ? 'Back to the draft' : 'Preview'}
                </button>
                {!isCurrent && (
                  <button type="button" className="btn btn-ghost" disabled={busy} onClick={() => onRestore(version.n)}>
                    <IconUndoArrow className="h-3 w-3" />
                    Restore
                  </button>
                )}
              </div>
            </li>
          )
        })}
        {versions.length === 0 && (
          <li className="p-5 text-sm sm:p-6" style={{ color: 'var(--ink-faint)' }}>
            No versions yet.
          </li>
        )}
      </ol>
    </div>
  )
}
