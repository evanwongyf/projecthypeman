import type { ReactNode } from 'react'
import { Btn, Card, PALETTE, Pills, Slider, Stat, soft } from '../sports/shared'
import { NativeSelect } from '../../../components/NativeSelect'

export { Btn, Card, PALETTE, Pills, Slider, Stat, soft }

// A small seeded random number generator (mulberry32), so a simulation can be re-run with
// "same seed, different setting" and show only the effect of the setting.
export function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// A standard normal draw from a uniform generator (Box–Muller).
export function normal(rand: () => number) {
  const u = Math.max(rand(), 1e-12)
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rand())
}

export const mean = (xs: ArrayLike<number>) => {
  let s = 0
  for (let i = 0; i < xs.length; i++) s += xs[i]
  return s / xs.length
}
export const sd = (xs: ArrayLike<number>) => {
  const m = mean(xs)
  let s = 0
  for (let i = 0; i < xs.length; i++) s += (xs[i] - m) ** 2
  return Math.sqrt(s / Math.max(xs.length - 1, 1))
}
export const quantile = (sorted: ArrayLike<number>, q: number) => {
  const i = (sorted.length - 1) * q
  const lo = Math.floor(i)
  const hi = Math.ceil(i)
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (i - lo)
}

// The standard normal density and cumulative distribution.
export const phi = (x: number) => Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI)
export function Phi(x: number) {
  // Abramowitz–Stegun 7.1.26 via erf.
  const t = 1 / (1 + 0.3275911 * Math.abs(x / Math.SQRT2))
  const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-(x * x) / 2)
  return x >= 0 ? (1 + y) / 2 : (1 - y) / 2
}

export const fmt = (n: number, d = 2) => (Number.isFinite(n) ? n.toFixed(d) : '–')
export const money = (n: number) => (Number.isFinite(n) ? `${n < 0 ? '−' : ''}$${Math.abs(n).toLocaleString('en-US', { maximumFractionDigits: 0 })}` : '–')

// A histogram as bars: counts per equal-width bin between lo and hi, with optional marker
// lines (value, label).
export function Hist({ values, lo, hi, bins = 40, color = '#3b6fd8', marks = [], xLabel, height = 160 }: { values: ArrayLike<number>; lo: number; hi: number; bins?: number; color?: string; marks?: { at: number; label: string; color?: string }[]; xLabel?: string; height?: number }) {
  const counts = new Array(bins).fill(0)
  for (let i = 0; i < values.length; i++) {
    const b = Math.floor(((values[i] - lo) / (hi - lo)) * bins)
    if (b >= 0 && b < bins) counts[b]++
  }
  const top = Math.max(...counts, 1)
  const W = 640
  const M = { l: 34, r: 10, t: 14, b: 28 }
  const bw = (W - M.l - M.r) / bins
  const x = (v: number) => M.l + ((v - lo) / (hi - lo)) * (W - M.l - M.r)
  const ticks = 5
  return (
    <svg viewBox={`0 0 ${W} ${height}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Histogram">
      {counts.map((c, i) => (
        <rect key={i} x={M.l + i * bw + 0.5} y={M.t + (1 - c / top) * (height - M.t - M.b)} width={Math.max(bw - 1, 1)} height={(c / top) * (height - M.t - M.b)} fill={color} opacity={0.85} />
      ))}
      <line x1={M.l} x2={W - M.r} y1={height - M.b} y2={height - M.b} stroke="var(--ink)" />
      {Array.from({ length: ticks + 1 }, (_, i) => lo + ((hi - lo) * i) / ticks).map((t) => (
        <text key={t} x={x(t)} y={height - 12} fontSize={10.5} textAnchor="middle" fill="var(--ink-soft)">
          {Math.abs(t) >= 100 ? t.toFixed(0) : +t.toFixed(2)}
        </text>
      ))}
      {marks.map((m) => (
        <g key={m.label}>
          <line x1={x(m.at)} x2={x(m.at)} y1={M.t} y2={height - M.b} stroke={m.color ?? '#d9534f'} strokeWidth={2} strokeDasharray="5 3" />
          <text x={x(m.at) + 4} y={M.t + 10} fontSize={10.5} fontWeight={700} fill={m.color ?? '#d9534f'} paintOrder="stroke" stroke="var(--surface)" strokeWidth={3}>
            {m.label}
          </text>
        </g>
      ))}
      {xLabel && (
        <text x={W - M.r} y={height - 1} fontSize={10.5} textAnchor="end" fill="var(--ink-soft)">
          {xLabel}
        </text>
      )}
    </svg>
  )
}

export function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: [string, string][] }) {
  return (
    <label className="flex min-w-40 flex-1 flex-col gap-1 text-xs font-bold">
      {label}
      <NativeSelect value={value} onChange={(e) => onChange(e.target.value)} className="rounded-[var(--radius)] border px-2 py-1.5 text-sm" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        {options.map(([v, l]) => (
          <option key={v} value={v}>
            {l}
          </option>
        ))}
      </NativeSelect>
    </label>
  )
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs leading-relaxed" style={soft}>
      {children}
    </p>
  )
}
