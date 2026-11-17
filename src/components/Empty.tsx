import type { ReactNode } from 'react'

export function Empty({ title, body, action }: { title: string; body: string; action?: ReactNode }) {
  return (
    <div className="grid-field panel flex flex-col items-center justify-center gap-3 px-6 py-14 text-center">
      <p className="label">{title}</p>
      <p className="max-w-sm text-sm" style={{ color: 'var(--ink-soft)' }}>
        {body}
      </p>
      {action && <div className="mt-1">{action}</div>}
    </div>
  )
}
