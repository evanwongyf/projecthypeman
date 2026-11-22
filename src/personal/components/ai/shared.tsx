import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import type { Pt } from '../../lib/ai/data'

// Shared pieces for the AI diagrams: a card, buttons, sliders, and a square 2D field
// (the region [-1, 1]²) with shaded decision regions and data points.

export const C0 = '#3b6fd8'
export const C1 = '#e07b2a'
export const PALETTE = ['#3b6fd8', '#e07b2a', '#2f9e6e', '#7b4fc9', '#d9534f', '#8a6d1e']
export const soft = { color: 'var(--ink-soft)' }
export const S = 320
export const sx = (v: number) => ((v + 1) / 2) * S
export const sy = (v: number) => ((1 - v) / 2) * S
export const fx = (px: number) => (px / S) * 2 - 1
export const fy = (py: number) => 1 - (py / S) * 2

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

export function Pills<T extends string | number>({ value, options, onChange, label }: { value: T; options: [T, string][]; onChange: (v: T) => void; label: string }) {
  return (
    <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label={label}>
      {options.map(([v, l]) => (
        <button
          key={String(v)}
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

// Calls `fn` every `ms` while `on` is true.
export function useTicker(on: boolean, ms: number, fn: () => void) {
  const ref = useRef(fn)
  useEffect(() => {
    ref.current = fn
  })
  useEffect(() => {
    if (!on) return
    const id = window.setInterval(() => ref.current(), ms)
    return () => window.clearInterval(id)
  }, [on, ms])
}

// Probability 0 → blue, 1 → orange, faded near 0.5.
export function probFill(p: number) {
  const col = p >= 0.5 ? C1 : C0
  const strength = Math.min(1, Math.abs(p - 0.5) * 2)
  return { fill: col, opacity: 0.08 + strength * 0.32 }
}

export function Regions({ prob, res = 36 }: { prob: (x: number, y: number) => number; res?: number }) {
  const cell = S / res
  const out: ReactNode[] = []
  for (let i = 0; i < res; i++)
    for (let j = 0; j < res; j++) {
      const x = fx((i + 0.5) * cell)
      const y = fy((j + 0.5) * cell)
      const { fill, opacity } = probFill(prob(x, y))
      out.push(<rect key={i * res + j} x={i * cell} y={j * cell} width={cell + 0.4} height={cell + 0.4} fill={fill} opacity={opacity} />)
    }
  return <g>{out}</g>
}

export function Points({ pts, r = 4.2, colors = [C0, C1], dim }: { pts: Pt[]; r?: number; colors?: string[]; dim?: (p: Pt, i: number) => boolean }) {
  return (
    <g>
      {pts.map((p, i) => (
        <circle key={i} cx={sx(p.x)} cy={sy(p.y)} r={r} fill={colors[p.c % colors.length]} stroke="var(--ink)" strokeWidth={1} opacity={dim?.(p, i) ? 0.25 : 1} />
      ))}
    </g>
  )
}

export function Field({ children, onClick, label, size = 'max-w-[22rem]' }: { children: ReactNode; onClick?: (x: number, y: number) => void; label: string; size?: string }) {
  return (
    <svg
      viewBox={`0 0 ${S} ${S}`}
      className={`block h-auto w-full ${size} rounded-[var(--radius)] border ${onClick ? 'cursor-crosshair' : ''}`}
      style={{ borderColor: 'var(--line)', background: 'var(--surface)', touchAction: onClick ? 'manipulation' : undefined }}
      role="img"
      aria-label={label}
      onClick={
        onClick &&
        ((e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          onClick(fx(((e.clientX - rect.left) / rect.width) * S), fy(((e.clientY - rect.top) / rect.height) * S))
        })
      }
    >
      <line x1={S / 2} x2={S / 2} y1={0} y2={S} stroke="var(--ink)" strokeOpacity={0.12} />
      <line x1={0} x2={S} y1={S / 2} y2={S / 2} stroke="var(--ink)" strokeOpacity={0.12} />
      {children}
    </svg>
  )
}

// Draws the line w1·x + w2·y + b = 0 across the field.
export function Boundary({ w1, w2, b, color = 'var(--ink)', dashed, offset = 0 }: { w1: number; w2: number; b: number; color?: string; dashed?: boolean; offset?: number }) {
  const c = b - offset
  let p1: [number, number]
  let p2: [number, number]
  if (Math.abs(w2) > Math.abs(w1)) {
    p1 = [-1.2, (-c - w1 * -1.2) / w2]
    p2 = [1.2, (-c - w1 * 1.2) / w2]
  } else {
    if (Math.abs(w1) < 1e-9) return null
    p1 = [(-c - w2 * -1.2) / w1, -1.2]
    p2 = [(-c - w2 * 1.2) / w1, 1.2]
  }
  return <line x1={sx(p1[0])} y1={sy(p1[1])} x2={sx(p2[0])} y2={sy(p2[1])} stroke={color} strokeWidth={2.2} strokeDasharray={dashed ? '6 4' : undefined} />
}

export function Legend({ items }: { items: [string, string][] }) {
  return (
    <div className="flex flex-wrap gap-3 text-xs font-bold">
      {items.map(([c, l]) => (
        <span key={l} className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-full border" style={{ background: c, borderColor: 'var(--line)' }} /> {l}
        </span>
      ))}
    </div>
  )
}
