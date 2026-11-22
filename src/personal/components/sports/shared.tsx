import type { ReactNode } from 'react'

// Shared pieces for the sports-science diagrams, matching the look used across the
// archive's other interactive labs.

export const soft = { color: 'var(--ink-soft)' }
export const PALETTE = ['#3b6fd8', '#e07b2a', '#2f9e6e', '#7b4fc9', '#d9534f', '#8a6d1e']

export function Card({ title, children, color, note }: { title: string; children: ReactNode; color?: string; note?: ReactNode }) {
  return (
    <div className="card-surface flex max-w-4xl flex-col gap-3 rounded-[var(--radius)] p-3 sm:p-4" style={color ? { borderLeft: `6px solid ${color}` } : undefined}>
      <p className="font-bold">{title}</p>
      {children}
      {note && (
        <p className="text-xs leading-relaxed" style={soft}>
          {note}
        </p>
      )}
    </div>
  )
}

export function Btn({ children, onClick, active, disabled }: { children: ReactNode; onClick: () => void; active?: boolean; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-full border px-3 py-1 text-xs font-bold disabled:opacity-40 pointer-coarse:min-h-10"
      style={{ borderColor: 'var(--line)', background: active ? 'var(--ink)' : 'var(--surface)', color: active ? 'var(--surface)' : 'var(--ink)' }}
    >
      {children}
    </button>
  )
}

export function Pills<T extends string>({ value, options, onChange, label }: { value: T; options: [T, string][]; onChange: (v: T) => void; label: string }) {
  return (
    <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label={label}>
      {options.map(([v, l]) => (
        <button
          key={v}
          type="button"
          role="radio"
          aria-checked={value === v}
          onClick={() => onChange(v)}
          className="rounded-full border px-3 py-1 text-xs font-bold pointer-coarse:min-h-10"
          style={{ borderColor: 'var(--line)', background: value === v ? 'var(--ink)' : 'var(--surface)', color: value === v ? 'var(--surface)' : 'var(--ink)' }}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export function Slider({ label, value, min, max, step, onChange, show }: { label: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void; show?: string }) {
  return (
    <label className="flex min-w-40 flex-1 flex-col gap-1 text-xs font-bold">
      <span className="flex justify-between gap-2">
        <span>{label}</span>
        <span className="font-mono">{show ?? value}</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </label>
  )
}

export function Stat({ label, value, tone }: { label: string; value: ReactNode; tone?: string }) {
  return (
    <div className="rounded-[var(--radius)] border px-2.5 py-1.5" style={{ borderColor: 'var(--line)', background: tone ? `color-mix(in srgb, ${tone} 22%, var(--surface))` : 'var(--paper-2)' }}>
      <p className="text-[11px] font-bold" style={soft}>
        {label}
      </p>
      <p className="font-mono text-sm font-bold">{value}</p>
    </div>
  )
}
