import type { ReactNode } from 'react'

/** A mono micro-label above a control — the house form pattern. */
export function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string
  hint?: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <label className="block">
      <span className="label flex items-baseline gap-1.5">
        {label}
        {required && <span style={{ color: 'var(--accent)' }}>*</span>}
        {hint && <span className="normal-case tracking-normal" style={{ color: 'var(--ink-faint)' }}>— {hint}</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  )
}
