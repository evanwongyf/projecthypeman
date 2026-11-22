import type { ReactNode } from 'react'
import type { Analysis } from '../../../lib/f1/circuits'

// Small drawing helpers shared by the circuit atlas diagrams.

export const INK = 'var(--ink)'
export const SOFT = 'var(--ink-soft)'
export const GRID = 'var(--line)'

// One colour per sector, and per corner class.
export const SECTOR_COLORS = ['#3b6fd8', '#e07b2a', '#7b4fc9']
export const SPEED_CLASS: Record<string, { label: string; color: string; range: string }> = {
  slow: { label: 'Slow', color: '#d9534f', range: 'under 110 km/h' },
  medium: { label: 'Medium', color: '#e0a82a', range: '110–170 km/h' },
  fast: { label: 'Fast', color: '#2f9e6e', range: '170–260 km/h' },
  flat: { label: 'Flat out', color: '#3b6fd8', range: 'over 260 km/h' },
}

// A perceptually even ramp from low to high, readable on light and dark backgrounds.
const RAMP = ['#440154', '#3b528b', '#21908d', '#5dc863', '#fde725']
export function ramp(t: number): string {
  const x = Math.max(0, Math.min(1, t)) * (RAMP.length - 1)
  const i = Math.min(RAMP.length - 2, Math.floor(x))
  const f = x - i
  const a = RAMP[i]
  const b = RAMP[i + 1]
  const ch = (c: string, k: number) => parseInt(c.slice(1 + k * 2, 3 + k * 2), 16)
  const mix = (k: number) => Math.round(ch(a, k) + (ch(b, k) - ch(a, k)) * f)
  return `rgb(${mix(0)},${mix(1)},${mix(2)})`
}

export const RAMP_GRADIENT = `linear-gradient(90deg, ${RAMP.join(', ')})`

// Round numbers for an axis.
export function niceTicks(lo: number, hi: number, count = 5): number[] {
  const raw = (hi - lo) / count || 1
  const mag = 10 ** Math.floor(Math.log10(raw))
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((t) => t >= raw) ?? raw
  const out: number[] = []
  for (let t = Math.ceil(lo / step) * step; t <= hi + 1e-9; t += step) out.push(Math.round(t * 1e6) / 1e6)
  return out
}

export const km = (m: number) => `${(m / 1000).toFixed(m % 1000 === 0 ? 0 : 2)} km`
export const f0 = (n: number) => n.toFixed(0)
export const f1 = (n: number) => n.toFixed(1)
export const f2 = (n: number) => n.toFixed(2)

export type Series = {
  label: string
  values: ArrayLike<number>
  color: string
  fill?: boolean
  dashed?: boolean
  width?: number
  // Draw as steps, for gears and other whole numbers.
  stepped?: boolean
}

const W = 800
const M = { l: 46, r: 12, t: 8, b: 22 }

// A line chart over distance round the lap, with the lap's sectors shaded behind it, its
// corners numbered along the top and a cursor that other charts and the map can share.
export function TraceChart({
  a,
  title,
  series,
  y,
  unit,
  height = 150,
  cursor,
  onCursor,
  zero,
  logY,
  range,
  yTicks,
  markers = true,
  note,
}: {
  a: Analysis
  title: string
  series: Series[]
  y: [number, number]
  unit?: string
  height?: number
  cursor: number | null
  onCursor: (i: number | null) => void
  // Draw a line at zero (for throttle/brake and g).
  zero?: boolean
  logY?: boolean
  // Only draw this stretch of the lap, as [start, end] metres.
  range?: [number, number]
  yTicks?: number[]
  markers?: boolean
  note?: ReactNode
}) {
  const { track, corners, sectors } = a
  const [d0, d1] = range ?? [0, track.length]
  const i0 = Math.max(0, Math.floor(d0 / track.ds))
  const i1 = Math.min(track.n - 1, Math.ceil(d1 / track.ds))
  const sx = (d: number) => M.l + ((d - d0) / (d1 - d0)) * (W - M.l - M.r)
  const ty = (v: number) => (logY ? Math.log10(Math.max(v, y[0])) : v)
  const [ly0, ly1] = [ty(y[0]), ty(y[1])]
  const sy = (v: number) => M.t + ((ly1 - ty(Math.min(Math.max(v, y[0]), y[1]))) / (ly1 - ly0)) * (height - M.t - M.b)
  const ticks = yTicks ?? niceTicks(y[0], y[1], 4)
  const xTicks = niceTicks(d0, d1, 8)
  const inRange = corners.filter((c) => c.sApex >= d0 && c.sApex <= d1)

  const pathOf = (s: Series) => {
    let d = ''
    for (let i = i0; i <= i1; i++) {
      const px = sx(track.s[i])
      const py = sy(s.values[i])
      if (s.stepped && i > i0) d += `L${px.toFixed(1)} ${sy(s.values[i - 1]).toFixed(1)}`
      d += `${i === i0 ? 'M' : 'L'}${px.toFixed(1)} ${py.toFixed(1)}`
    }
    return d
  }

  const move = (e: React.PointerEvent<SVGSVGElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const vx = ((e.clientX - r.left) / r.width) * W
    const d = d0 + ((vx - M.l) / (W - M.l - M.r)) * (d1 - d0)
    if (d < d0 || d > d1) return onCursor(null)
    onCursor(Math.max(0, Math.min(track.n - 1, Math.round(d / track.ds))))
  }

  const base = height - M.b
  return (
    <figure className="flex flex-col gap-1">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-3 px-1 text-xs font-bold">
        <span>
          {title} {unit && <span style={{ color: SOFT }}>({unit})</span>}
        </span>
        <span className="flex flex-wrap gap-x-3" style={{ color: SOFT }}>
          {series.length > 1 &&
            series.map((s) => (
              <span key={s.label} className="inline-flex items-center gap-1">
                <span className="inline-block h-0.5 w-4" style={{ background: s.color, borderTop: s.dashed ? `2px dashed ${s.color}` : undefined, height: s.dashed ? 0 : 3 }} />
                {s.label}
              </span>
            ))}
        </span>
      </figcaption>
      <div className="overflow-x-auto rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
      <svg viewBox={`0 0 ${W} ${height}`} className="block h-auto w-full min-w-[38rem] select-none sm:min-w-0" style={{ touchAction: 'pan-x pan-y' }} onPointerMove={move} onPointerLeave={() => onCursor(null)} role="img" aria-label={`${title} around the lap`}>
        {range === undefined &&
          sectors.map((s, k) => (
            <rect key={s.n} x={sx(s.s0)} y={M.t} width={sx(s.s1) - sx(s.s0)} height={base - M.t} fill={SECTOR_COLORS[k]} opacity={0.07} />
          ))}
        {ticks.map((t) => (
          <g key={t}>
            <line x1={M.l} x2={W - M.r} y1={sy(t)} y2={sy(t)} stroke={GRID} />
            <text x={M.l - 5} y={sy(t) + 3.5} fontSize={10} textAnchor="end" fill={SOFT}>
              {t}
            </text>
          </g>
        ))}
        {xTicks.map((t) => (
          <g key={t}>
            <line x1={sx(t)} x2={sx(t)} y1={base} y2={base + 4} stroke={SOFT} />
            <text x={sx(t)} y={height - 6} fontSize={10} textAnchor="middle" fill={SOFT}>
              {t / 1000}
            </text>
          </g>
        ))}
        <text x={W - M.r} y={height - 6} fontSize={9.5} textAnchor="end" fill={SOFT}>
          km
        </text>
        {zero && <line x1={M.l} x2={W - M.r} y1={sy(0)} y2={sy(0)} stroke={SOFT} strokeDasharray="3 3" />}
        {series.map((s) => (
          <g key={s.label}>
            {s.fill && <path d={`${pathOf(s)}L${sx(track.s[i1])} ${sy(0 > y[0] ? 0 : y[0])}L${sx(track.s[i0])} ${sy(0 > y[0] ? 0 : y[0])}Z`} fill={s.color} opacity={0.18} />}
            <path d={pathOf(s)} fill="none" stroke={s.color} strokeWidth={s.width ?? 1.8} strokeDasharray={s.dashed ? '5 4' : undefined} strokeLinejoin="round" />
          </g>
        ))}
        {markers &&
          inRange.map((c) => (
            <g key={c.n} opacity={0.9}>
              <line x1={sx(c.sApex)} x2={sx(c.sApex)} y1={M.t + 11} y2={base} stroke={SOFT} strokeWidth={0.6} strokeDasharray="1.5 3" />
              <circle cx={sx(c.sApex)} cy={M.t + 7} r={6.5} fill="var(--surface)" stroke={INK} strokeWidth={1} />
              <text x={sx(c.sApex)} y={M.t + 10.5} fontSize={8.5} fontWeight={700} textAnchor="middle" fill={INK}>
                {c.n}
              </text>
            </g>
          ))}
        {cursor !== null && cursor >= i0 && cursor <= i1 && (
          <g>
            <line x1={sx(track.s[cursor])} x2={sx(track.s[cursor])} y1={M.t} y2={base} stroke={INK} strokeWidth={1} />
            {series.map((s) => (
              <circle key={s.label} cx={sx(track.s[cursor])} cy={sy(s.values[cursor])} r={3.5} fill={s.color} stroke="var(--surface)" strokeWidth={1.2} />
            ))}
          </g>
        )}
      </svg>
      </div>
      {note && (
        <p className="px-1 text-xs leading-relaxed" style={{ color: SOFT }}>
          {note}
        </p>
      )}
    </figure>
  )
}

export function Legend({ items }: { items: { color: string; label: string; sub?: string }[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
      {items.map((i) => (
        <li key={i.label} className="inline-flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-sm border" style={{ background: i.color, borderColor: 'var(--line)' }} />
          <span className="font-bold">{i.label}</span>
          {i.sub && <span style={{ color: SOFT }}>{i.sub}</span>}
        </li>
      ))}
    </ul>
  )
}
