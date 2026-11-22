import { useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'

/**
 * Small, dependency-free SVG charts for the Archive. Every chart ships with a
 * legend (for 2+ series), a hover tooltip, a table view and a written
 * interpretation. Series colours come from --series-1..3 (see index.css);
 * at most three series, each also told apart by marker shape.
 */

export type Point = { x: number; y: number; label?: string }
export type Series = { name: string; points: Point[] }

const W = 640
const PAD = { top: 16, right: 18, bottom: 44, left: 56 }
const SHAPES = ['circle', 'square', 'triangle'] as const

function niceTicks(min: number, max: number, count = 5) {
  if (min === max) return [min]
  const span = max - min
  const step0 = span / count
  const mag = Math.pow(10, Math.floor(Math.log10(step0)))
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => span / s <= count) ?? mag * 10
  const start = Math.ceil(min / step) * step
  const ticks: number[] = []
  for (let v = start; v <= max + 1e-9; v += step) ticks.push(Number(v.toFixed(10)))
  return ticks
}

function Marker({ shape, x, y, size = 4.5, color }: { shape: (typeof SHAPES)[number]; x: number; y: number; size?: number; color: string }) {
  const ring = { stroke: 'var(--panel)', strokeWidth: 2, paintOrder: 'stroke' as const }
  if (shape === 'square') return <rect x={x - size} y={y - size} width={size * 2} height={size * 2} rx={1.5} fill={color} {...ring} />
  if (shape === 'triangle')
    return <path d={`M${x} ${y - size * 1.2}L${x + size * 1.15} ${y + size * 0.85}L${x - size * 1.15} ${y + size * 0.85}Z`} fill={color} {...ring} />
  return <circle cx={x} cy={y} r={size} fill={color} {...ring} />
}

export function ChartFrame({
  title,
  subtitle,
  interpretation,
  source,
  legend,
  table,
  children,
}: {
  title: string
  subtitle?: string
  interpretation?: ReactNode
  source?: ReactNode
  legend?: string[]
  table: { head: string[]; rows: (string | number)[][] }
  children: ReactNode
}) {
  const [showTable, setShowTable] = useState(false)
  return (
    <figure className="viz panel m-0 p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <figcaption className="text-base font-semibold tracking-tight">{title}</figcaption>
          {subtitle && (
            <p className="mt-1 text-xs" style={{ color: 'var(--ink-faint)' }}>
              {subtitle}
            </p>
          )}
        </div>
        <button type="button" className="btn btn-ghost !py-1" onClick={() => setShowTable((v) => !v)}>
          {showTable ? 'Chart' : 'Table'}
        </button>
      </div>

      {legend && legend.length > 1 && (
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5" aria-label="Legend">
          {legend.map((name, i) => (
            <li key={name} className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--ink-soft)' }}>
              <svg width="12" height="12" aria-hidden="true">
                <Marker shape={SHAPES[i % 3]} x={6} y={6} size={4} color={`var(--series-${(i % 3) + 1})`} />
              </svg>
              {name}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3">
        {showTable ? (
          <div className="max-h-80 overflow-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr>
                  {table.head.map((h) => (
                    <th key={h} className="label sticky top-0 pb-2 font-medium" style={{ background: 'var(--panel)' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="mono">
                {table.rows.map((r, i) => (
                  <tr key={i} className="border-t hairline">
                    {r.map((c, j) => (
                      <td key={j} className="py-1.5 pr-3">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          children
        )}
      </div>

      {interpretation && (
        <div className="mt-4 border-t pt-3 text-sm leading-relaxed hairline" style={{ color: 'var(--ink-soft)' }}>
          <p className="label mb-1">how to read it</p>
          {interpretation}
        </div>
      )}
      {source && (
        <p className="mt-3 text-[11px]" style={{ color: 'var(--ink-faint)' }}>
          {source}
        </p>
      )}
    </figure>
  )
}

type Axes = {
  xLabel: string
  yLabel: string
  xFormat?: (v: number) => string
  yFormat?: (v: number) => string
  height?: number
  yMin?: number
  yMax?: number
  xMin?: number
  xMax?: number
}

function useScales(series: Series[], a: Axes) {
  return useMemo(() => {
    const H = a.height ?? 280
    const xs = series.flatMap((s) => s.points.map((p) => p.x))
    const ys = series.flatMap((s) => s.points.map((p) => p.y))
    const x0 = a.xMin ?? Math.min(...xs)
    const x1 = a.xMax ?? Math.max(...xs)
    let y0 = a.yMin ?? Math.min(...ys)
    let y1 = a.yMax ?? Math.max(...ys)
    if (a.yMin === undefined || a.yMax === undefined) {
      const padY = (y1 - y0) * 0.08 || 1
      if (a.yMin === undefined) y0 -= padY
      if (a.yMax === undefined) y1 += padY
    }
    const sx = (v: number) => PAD.left + ((v - x0) / (x1 - x0 || 1)) * (W - PAD.left - PAD.right)
    const sy = (v: number) => H - PAD.bottom - ((v - y0) / (y1 - y0 || 1)) * (H - PAD.top - PAD.bottom)
    return { H, x0, x1, y0, y1, sx, sy, xTicks: niceTicks(x0, x1), yTicks: niceTicks(y0, y1) }
  }, [series, a.height, a.xMin, a.xMax, a.yMin, a.yMax])
}

function AxesLayer({ s, a }: { s: ReturnType<typeof useScales>; a: Axes }) {
  const fx = a.xFormat ?? ((v: number) => String(v))
  const fy = a.yFormat ?? ((v: number) => String(v))
  return (
    <g fontFamily="var(--font-mono)" fontSize="10" fill="var(--ink-faint)">
      {s.yTicks.map((t) => (
        <g key={`y${t}`}>
          <line x1={PAD.left} x2={W - PAD.right} y1={s.sy(t)} y2={s.sy(t)} stroke="var(--viz-grid)" />
          <text x={PAD.left - 8} y={s.sy(t) + 3} textAnchor="end">
            {fy(t)}
          </text>
        </g>
      ))}
      {s.xTicks.map((t) => (
        <text key={`x${t}`} x={s.sx(t)} y={s.H - PAD.bottom + 16} textAnchor="middle">
          {fx(t)}
        </text>
      ))}
      <line x1={PAD.left} x2={W - PAD.right} y1={s.H - PAD.bottom} y2={s.H - PAD.bottom} stroke="var(--viz-axis)" />
      <text x={(PAD.left + W - PAD.right) / 2} y={s.H - 6} textAnchor="middle" fill="var(--ink-soft)">
        {a.xLabel}
      </text>
      <text transform={`translate(12 ${(PAD.top + s.H - PAD.bottom) / 2}) rotate(-90)`} textAnchor="middle" fill="var(--ink-soft)">
        {a.yLabel}
      </text>
    </g>
  )
}

/** Line chart with a crosshair and a tooltip listing every series at the nearest x. */
export function LineChart({ series, ...a }: { series: Series[] } & Axes) {
  const s = useScales(series, a)
  const ref = useRef<SVGSVGElement>(null)
  const [hx, setHx] = useState<number | null>(null)
  const fx = a.xFormat ?? ((v: number) => String(v))
  const fy = a.yFormat ?? ((v: number) => String(v))

  function onMove(e: React.PointerEvent) {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    const px = ((e.clientX - r.left) / r.width) * W
    const xv = s.x0 + ((px - PAD.left) / (W - PAD.left - PAD.right)) * (s.x1 - s.x0)
    const all = series[0].points.map((p) => p.x)
    const nearest = all.reduce((b, x) => (Math.abs(x - xv) < Math.abs(b - xv) ? x : b), all[0])
    setHx(nearest)
  }

  const tipLeft = hx === null ? 0 : (s.sx(hx) / W) * 100

  return (
    <div className="relative">
      <svg
        ref={ref}
        viewBox={`0 0 ${W} ${s.H}`}
        className="block w-full touch-none"
        role="img"
        aria-label={`${a.yLabel} against ${a.xLabel}`}
        onPointerMove={onMove}
        onPointerLeave={() => setHx(null)}
      >
        <AxesLayer s={s} a={a} />
        {series.map((ser, i) => (
          <polyline
            key={ser.name}
            fill="none"
            stroke={`var(--series-${(i % 3) + 1})`}
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
            points={ser.points.map((p) => `${s.sx(p.x)},${s.sy(p.y)}`).join(' ')}
          />
        ))}
        {hx !== null && (
          <g>
            <line x1={s.sx(hx)} x2={s.sx(hx)} y1={PAD.top} y2={s.H - PAD.bottom} stroke="var(--viz-axis)" />
            {series.map((ser, i) => {
              const p = ser.points.find((q) => q.x === hx)
              return p ? <Marker key={ser.name} shape={SHAPES[i % 3]} x={s.sx(p.x)} y={s.sy(p.y)} color={`var(--series-${(i % 3) + 1})`} /> : null
            })}
          </g>
        )}
      </svg>
      {hx !== null && (
        <div className="viz-tip" style={{ left: `${Math.min(Math.max(tipLeft, 12), 70)}%`, top: 4 }}>
          <div style={{ color: 'var(--ink-faint)' }}>
            {a.xLabel}: {fx(hx)}
          </div>
          {series.map((ser, i) => {
            const p = ser.points.find((q) => q.x === hx)
            return p ? (
              <div key={ser.name} className="flex items-center gap-1.5">
                <svg width="10" height="10" aria-hidden="true">
                  <Marker shape={SHAPES[i % 3]} x={5} y={5} size={3.5} color={`var(--series-${(i % 3) + 1})`} />
                </svg>
                {series.length > 1 ? `${ser.name}: ` : ''}
                {fy(p.y)}
              </div>
            ) : null
          })}
        </div>
      )}
    </div>
  )
}

/** Scatter with per-point hover. Up to three series, each with its own shape. */
export function ScatterChart({ series, ...a }: { series: Series[] } & Axes) {
  const s = useScales(series, a)
  const [hover, setHover] = useState<{ si: number; p: Point } | null>(null)
  const fx = a.xFormat ?? ((v: number) => String(v))
  const fy = a.yFormat ?? ((v: number) => String(v))

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${s.H}`} className="block w-full" role="img" aria-label={`${a.yLabel} against ${a.xLabel}`}>
        <AxesLayer s={s} a={a} />
        {series.map((ser, si) =>
          ser.points.map((p, pi) => (
            <g key={`${si}-${pi}`} onPointerEnter={() => setHover({ si, p })} onPointerLeave={() => setHover(null)}>
              <circle cx={s.sx(p.x)} cy={s.sy(p.y)} r={10} fill="transparent" />
              <Marker shape={SHAPES[si % 3]} x={s.sx(p.x)} y={s.sy(p.y)} color={`var(--series-${(si % 3) + 1})`} />
            </g>
          ))
        )}
      </svg>
      {hover && (
        <div
          className="viz-tip"
          style={{
            left: `${Math.min(Math.max((s.sx(hover.p.x) / W) * 100, 5), 62)}%`,
            top: `${Math.max((s.sy(hover.p.y) / s.H) * 100 - 22, 0)}%`,
          }}
        >
          <div className="font-semibold">{hover.p.label}</div>
          <div style={{ color: 'var(--ink-faint)' }}>{series[hover.si].name}</div>
          <div>
            {a.xLabel}: {fx(hover.p.x)}
          </div>
          <div>
            {a.yLabel}: {fy(hover.p.y)}
          </div>
        </div>
      )}
    </div>
  )
}

/** Horizontal bars, one series. Bars grow from zero (or from a signed baseline). */
export function BarChart({
  rows,
  format = (v: number) => String(v),
  unit,
}: {
  rows: { label: string; value: number; note?: string }[]
  format?: (v: number) => string
  unit?: string
}) {
  const [hover, setHover] = useState<number | null>(null)
  const min = Math.min(0, ...rows.map((r) => r.value))
  const max = Math.max(0, ...rows.map((r) => r.value))
  const span = max - min || 1
  const zero = ((0 - min) / span) * 100

  return (
    <ul className="space-y-1.5">
      {rows.map((r, i) => {
        const left = r.value >= 0 ? zero : zero - (Math.abs(r.value) / span) * 100
        const width = (Math.abs(r.value) / span) * 100
        return (
          <li
            key={r.label}
            className="grid grid-cols-[minmax(6rem,11rem)_1fr] items-center gap-3"
            onPointerEnter={() => setHover(i)}
            onPointerLeave={() => setHover(null)}
          >
            <span className="truncate text-xs" style={{ color: 'var(--ink-soft)' }} title={r.label}>
              {r.label}
            </span>
            {/* Right margin leaves room for the value label past the longest bar. */}
            <span className={`relative flex h-5 items-center mr-16 ${min < 0 ? 'ml-12' : ''}`}>
              <span className="absolute inset-y-0" style={{ left: `${zero}%`, width: 1, background: 'var(--viz-axis)' }} />
              <span
                className="absolute h-3.5"
                style={{
                  left: `${left}%`,
                  width: `${Math.max(width, 0.6)}%`,
                  background: 'var(--series-1)',
                  borderRadius: r.value >= 0 ? '0 4px 4px 0' : '4px 0 0 4px',
                  opacity: hover === null || hover === i ? 1 : 0.45,
                }}
              />
              <span
                className="mono absolute text-[10px] whitespace-nowrap"
                style={{
                  left: r.value >= 0 ? `calc(${left + width}% + 6px)` : undefined,
                  right: r.value < 0 ? `calc(${100 - left}% + 6px)` : undefined,
                  color: 'var(--ink)',
                }}
              >
                {format(r.value)}
                {unit === '%' ? '%' : unit ? ` ${unit}` : ''}
                {hover === i && r.note ? ` · ${r.note}` : ''}
              </span>
            </span>
          </li>
        )
      })}
    </ul>
  )
}
