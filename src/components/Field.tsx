import type { ReactNode } from 'react'

/** A mono micro-label above a control, the house form pattern. */
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
        {hint && <span className="normal-case tracking-normal" style={{ color: 'var(--ink-faint)' }}>{hint}</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  )
}

/**
 * The same look as Field, but for a group of controls rather than one input.
 * A <label> may only point at a single control, wrapping a button group in
 * one leaks the label text into every button's accessible name.
 */
export function FieldGroup({
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
    <fieldset className="min-w-0">
      <legend className="label flex items-baseline gap-1.5">
        {label}
        {required && <span style={{ color: 'var(--accent)' }}>*</span>}
        {hint && (
          <span className="normal-case tracking-normal" style={{ color: 'var(--ink-faint)' }}>
            {hint}
          </span>
        )}
      </legend>
      <div className="mt-1.5">{children}</div>
    </fieldset>
  )
}
