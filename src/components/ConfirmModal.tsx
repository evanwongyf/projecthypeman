import { useState } from 'react'
import { Modal } from './Modal'

export function ConfirmModal({
  title,
  body,
  confirmLabel,
  onConfirm,
  onClose,
}: {
  title: string
  body: string
  confirmLabel: string
  onConfirm: () => Promise<void>
  onClose: () => void
}) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function go() {
    setBusy(true)
    setError(null)
    try {
      await onConfirm()
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not complete that.')
      setBusy(false)
    }
  }

  return (
    <Modal
      eyebrow="Confirm"
      title={title}
      onClose={onClose}
      footer={
        <>
          <button type="button" className="btn btn-ghost" onClick={onClose} disabled={busy}>
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-danger"
            style={{ borderColor: 'var(--overdue)', color: 'var(--overdue)' }}
            onClick={go}
            disabled={busy}
          >
            {busy ? 'Working…' : confirmLabel}
          </button>
        </>
      }
    >
      <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
        {body}
      </p>
      {error && (
        <p className="mt-3 font-mono text-xs" style={{ color: 'var(--overdue)' }}>
          {error}
        </p>
      )}
    </Modal>
  )
}
