import { useRef, useState } from 'react'
import { api, photoUrl } from '../lib/api'
import { useData } from '../lib/data-context'
import { initials } from '../lib/format'
import { IconCamera, IconTrash } from './Icons'

export function PhotoPicker({
  studentId,
  fullName,
  hasPhoto,
  version,
}: {
  studentId: string
  fullName: string
  hasPhoto?: boolean
  version: number
}) {
  const { reload } = useData()
  const input = useRef<HTMLInputElement>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [failed, setFailed] = useState(false)

  async function upload(file: File) {
    setBusy(true)
    setError(null)
    try {
      await api.uploadPhoto(studentId, file)
      setFailed(false)
      await reload()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not upload that image.')
    } finally {
      setBusy(false)
      if (input.current) input.current.value = ''
    }
  }

  async function remove() {
    setBusy(true)
    setError(null)
    try {
      await api.deletePhoto(studentId)
      await reload()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not remove that image.')
    } finally {
      setBusy(false)
    }
  }

  const showPhoto = hasPhoto && !failed

  return (
    <div className="flex flex-col items-start gap-3">
      <div
        className="h-28 w-28 shrink-0 overflow-hidden border flex items-center justify-center font-mono text-2xl font-semibold tracking-widest"
        style={{ borderColor: 'var(--line)', background: 'var(--panel-2)', color: 'var(--ink-faint)' }}
      >
        {showPhoto ? (
          <img
            src={photoUrl(studentId, version)}
            alt={`${fullName}'s photo`}
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          initials(fullName)
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button type="button" className="btn" onClick={() => input.current?.click()} disabled={busy}>
          <IconCamera />
          {busy ? 'Working…' : showPhoto ? 'Replace' : 'Add photo'}
        </button>
        {showPhoto && (
          <button type="button" className="btn btn-ghost btn-danger !px-2" onClick={remove} disabled={busy} aria-label="Remove photo">
            <IconTrash />
          </button>
        )}
      </div>

      <input
        ref={input}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) void upload(file)
        }}
      />

      {error && (
        <p className="font-mono text-xs" style={{ color: 'var(--overdue)' }}>
          {error}
        </p>
      )}
    </div>
  )
}
