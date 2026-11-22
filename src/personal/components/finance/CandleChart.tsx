import type { Candle } from '../../lib/finance/series'

// A candlestick chart in SVG: candles, optional overlay lines and bands, highlighted candles,
// labelled price levels, and an optional lower panel for oscillators.

export const UP = '#2f9e6e'
export const DOWN = '#d9534f'

export type Overlay = { values: number[]; color: string; label: string; dashed?: boolean }
export type Panel = { lines: Overlay[]; bars?: number[]; min?: number; max?: number; guides?: number[]; label: string }

// Annotations for teaching diagrams. Indexes are candle positions; prices are in chart units.
export type Annotations = {
  // A shaded region over a run of candles, optionally limited to a price band.
  boxes?: { from: number; to: number; label?: string; lo?: number; hi?: number; color?: string }[]
  // A labelled marker on a candle, above its high or below its low.
  points?: { i: number; label: string; at?: 'high' | 'low' }[]
  // Straight lines between two (candle, price) points: trendlines, necklines, channels.
  segments?: { from: [number, number]; to: [number, number]; label?: string; color?: string; dashed?: boolean }[]
  // A double-headed measuring arrow, for heights and targets.
  arrows?: { i: number; from: number; to: number; label?: string }[]
}

type Props = Annotations & {
  candles: Candle[]
  overlays?: Overlay[]
  band?: { upper: number[]; lower: number[]; color: string }
  mark?: number[]
  markLabels?: Record<number, string>
  lines?: { y: number; label: string; at?: number }[]
  panel?: Panel
  height?: number
  label: string
}

const W = 800
const PAD = { l: 8, r: 58, t: 10, b: 8 }

const fmt = (n: number) => (Math.abs(n) >= 1000 ? n.toFixed(0) : Math.abs(n) >= 10 ? n.toFixed(1) : n.toFixed(2))

export function CandleChart({ candles, overlays = [], band, mark = [], markLabels = {}, lines = [], panel, height = 300, label, boxes = [], points = [], segments = [], arrows = [] }: Props) {
  const n = candles.length
  const panelH = panel ? 110 : 0
  // Room for labels on markers above highs and below lows.
  const top = PAD.t + (points.some((p) => p.at !== 'low') || boxes.some((b) => b.label) ? 30 : 0)
  const bottom = PAD.b + (points.some((p) => p.at === 'low') ? 30 : 0)
  const priceH = height - top - bottom - (panel ? panelH + 14 : 0)
  const vals = [
    ...candles.flatMap((c) => [c.h, c.l]),
    ...overlays.flatMap((o) => o.values.filter(Number.isFinite)),
    ...(band ? [...band.upper, ...band.lower].filter(Number.isFinite) : []),
    ...lines.map((l) => l.y),
    ...boxes.flatMap((b) => [b.lo, b.hi]).filter((v): v is number => v !== undefined),
    ...segments.flatMap((sg) => [sg.from[1], sg.to[1]]),
    ...arrows.flatMap((a) => [a.from, a.to]),
  ]
  let lo = Math.min(...vals)
  let hi = Math.max(...vals)
  const padY = (hi - lo) * 0.06 || 1
  lo -= padY
  hi += padY
  const step = (W - PAD.l - PAD.r) / Math.max(1, n)
  const x = (i: number) => PAD.l + step * (i + 0.5)
  const y = (v: number) => top + ((hi - v) / (hi - lo)) * priceH
  const bw = Math.max(1.5, Math.min(22, step * 0.62))
  const path = (vs: number[], yf: (v: number) => number) => {
    let d = ''
    vs.forEach((v, i) => {
      if (!Number.isFinite(v)) return
      d += `${d && Number.isFinite(vs[i - 1]) ? 'L' : 'M'}${x(i).toFixed(1)},${yf(v).toFixed(1)}`
    })
    return d
  }

  // Price axis ticks.
  const ticks: number[] = []
  const raw = (hi - lo) / 4
  const mag = 10 ** Math.floor(Math.log10(raw))
  const tick = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((t) => t >= raw) ?? raw
  for (let t = Math.ceil(lo / tick) * tick; t <= hi; t += tick) ticks.push(t)

  // Lower panel scale.
  let py = (v: number) => v
  let pTop = 0
  if (panel) {
    pTop = top + priceH + 14
    const pv = [...panel.lines.flatMap((l) => l.values), ...(panel.bars ?? [])].filter(Number.isFinite)
    const pmin = panel.min ?? Math.min(...pv, 0)
    const pmax = panel.max ?? Math.max(...pv, 0)
    py = (v: number) => pTop + ((pmax - v) / (pmax - pmin || 1)) * panelH
  }

  return (
    <svg viewBox={`0 0 ${W} ${height}`} role="img" aria-label={label} className="block h-auto w-full" style={{ background: 'var(--surface)' }}>
      {ticks.map((t) => (
        <g key={t}>
          <line x1={PAD.l} x2={W - PAD.r} y1={y(t)} y2={y(t)} stroke="var(--line)" strokeWidth={1} />
          <text x={W - PAD.r + 6} y={y(t) + 4} fontSize={11} fill="var(--ink-soft)">
            {fmt(t)}
          </text>
        </g>
      ))}
      {boxes.map((b, k) => {
        const bTop = b.hi !== undefined ? y(b.hi) : top
        const bBottom = b.lo !== undefined ? y(b.lo) : top + priceH
        const left = x(b.from) - step / 2
        const col = b.color ?? 'var(--lavender)'
        return (
          <g key={`box${k}`}>
            <rect x={left} y={bTop} width={x(b.to) - x(b.from) + step} height={bBottom - bTop} fill={col} opacity={0.22} stroke={col} strokeWidth={1.5} strokeDasharray="5 3" rx={4} />
            {b.label && (
              <text x={left + 4} y={bTop + 13} fontSize={11.5} fontWeight={700} fill="var(--ink)" paintOrder="stroke" stroke="var(--surface)" strokeWidth={3.5} strokeLinejoin="round">
                {b.label}
              </text>
            )}
          </g>
        )
      })}
      {mark.map((i) => (
        <rect key={i} x={x(i) - step / 2} y={top} width={step} height={priceH} fill="var(--mustard)" opacity={0.28} />
      ))}
      {band && (
        <polygon
          points={(() => {
            const idx = band.upper.map((_, i) => i).filter((i) => Number.isFinite(band.upper[i]) && Number.isFinite(band.lower[i]))
            return [...idx.map((i) => `${x(i)},${y(band.upper[i])}`), ...[...idx].reverse().map((i) => `${x(i)},${y(band.lower[i])}`)].join(' ')
          })()}
          fill={band.color}
          opacity={0.1}
        />
      )}
      {band && (
        <>
          <path d={path(band.upper, y)} fill="none" stroke={band.color} strokeWidth={1.3} opacity={0.9} />
          <path d={path(band.lower, y)} fill="none" stroke={band.color} strokeWidth={1.3} opacity={0.9} />
        </>
      )}
      {lines.map((l) => (
        <g key={l.label + l.y}>
          <line x1={PAD.l} x2={W - PAD.r} y1={y(l.y)} y2={y(l.y)} stroke="var(--ink)" strokeWidth={1.4} strokeDasharray="6 4" />
          <text x={l.at === undefined ? PAD.l + 4 : x(l.at)} y={y(l.y) - 5} fontSize={12} fontWeight={700} fill="var(--ink)" paintOrder="stroke" stroke="var(--surface)" strokeWidth={3.5} strokeLinejoin="round">
            {l.label}
          </text>
        </g>
      ))}
      {candles.map((c, i) => {
        const up = c.c >= c.o
        const bodyTop = y(Math.max(c.o, c.c))
        const bodyBot = y(Math.min(c.o, c.c))
        const col = up ? UP : DOWN
        return (
          <g key={i}>
            <line x1={x(i)} x2={x(i)} y1={y(c.h)} y2={y(c.l)} stroke={col} strokeWidth={Math.max(1, bw / 7)} />
            <rect x={x(i) - bw / 2} y={bodyTop} width={bw} height={Math.max(1, bodyBot - bodyTop)} fill={up ? 'var(--surface)' : col} stroke={col} strokeWidth={Math.max(1, bw / 9)} />
          </g>
        )
      })}
      {overlays.map((o) => (
        <path key={o.label} d={path(o.values, y)} fill="none" stroke={o.color} strokeWidth={2} strokeDasharray={o.dashed ? '5 4' : undefined} />
      ))}
      {segments.map((sg, k) => (
        <g key={`seg${k}`}>
          <line x1={x(sg.from[0])} y1={y(sg.from[1])} x2={x(sg.to[0])} y2={y(sg.to[1])} stroke={sg.color ?? 'var(--ink)'} strokeWidth={2} strokeDasharray={sg.dashed ? '6 4' : undefined} />
          {sg.label && (
            <text x={x(sg.to[0]) - 2} y={y(sg.to[1]) - 6} fontSize={11.5} fontWeight={700} textAnchor="end" fill={sg.color ?? 'var(--ink)'} paintOrder="stroke" stroke="var(--surface)" strokeWidth={3.5} strokeLinejoin="round">
              {sg.label}
            </text>
          )}
        </g>
      ))}
      {arrows.map((a, k) => {
        const y1 = y(a.from)
        const y2 = y(a.to)
        const dir = y2 > y1 ? 1 : -1
        return (
          <g key={`arr${k}`} stroke="var(--ink)" strokeWidth={1.8} fill="var(--ink)">
            <line x1={x(a.i)} x2={x(a.i)} y1={y1} y2={y2} strokeDasharray="4 3" />
            <path d={`M${x(a.i)},${y2} l-5,${-6 * dir} l10,0 z`} stroke="none" />
            <path d={`M${x(a.i)},${y1} l-5,${6 * dir} l10,0 z`} stroke="none" />
            {a.label && (
              <text x={x(a.i) + 7} y={(y1 + y2) / 2 + 4} fontSize={11.5} fontWeight={700} paintOrder="stroke" stroke="var(--surface)" strokeWidth={3.5} strokeLinejoin="round">
                {a.label}
              </text>
            )}
          </g>
        )
      })}
      {points.map((pt, k) => {
        const c = candles[pt.i]
        if (!c) return null
        const below = pt.at === 'low'
        const py0 = below ? y(c.l) + 6 : y(c.h) - 6
        return (
          <g key={`pt${k}`}>
            <path d={below ? `M${x(pt.i)},${py0} l-5,9 l10,0 z` : `M${x(pt.i)},${py0} l-5,-9 l10,0 z`} fill="var(--ink)" />
            <text x={x(pt.i)} y={below ? py0 + 22 : py0 - 13} fontSize={11.5} fontWeight={700} textAnchor="middle" fill="var(--ink)" paintOrder="stroke" stroke="var(--surface)" strokeWidth={3.5} strokeLinejoin="round">
              {pt.label}
            </text>
          </g>
        )
      })}
      {Object.entries(markLabels).map(([i, t]) => (
        <text key={i} x={x(Number(i))} y={Math.max(12, y(candles[Number(i)].h) - 8)} fontSize={11} fontWeight={700} textAnchor="middle" fill="var(--ink)" paintOrder="stroke" stroke="var(--surface)" strokeWidth={3.5} strokeLinejoin="round">
          {t}
        </text>
      ))}
      {panel && (
        <g>
          <rect x={PAD.l} y={pTop} width={W - PAD.l - PAD.r} height={panelH} fill="var(--paper-2)" />
          {(panel.guides ?? []).map((g) => (
            <g key={g}>
              <line x1={PAD.l} x2={W - PAD.r} y1={py(g)} y2={py(g)} stroke="var(--ink-soft)" strokeDasharray="3 3" strokeWidth={1} />
              <text x={W - PAD.r + 6} y={py(g) + 4} fontSize={11} fill="var(--ink-soft)">
                {g}
              </text>
            </g>
          ))}
          {panel.bars?.map((b, i) =>
            Number.isFinite(b) ? <rect key={i} x={x(i) - bw / 2} width={bw} y={Math.min(py(b), py(0))} height={Math.abs(py(b) - py(0))} fill={b >= 0 ? UP : DOWN} opacity={0.6} /> : null,
          )}
          {panel.lines.map((o) => (
            <path key={o.label} d={path(o.values, py)} fill="none" stroke={o.color} strokeWidth={1.8} strokeDasharray={o.dashed ? '5 4' : undefined} />
          ))}
          <text x={PAD.l + 6} y={pTop + 14} fontSize={11} fontWeight={700} fill="var(--ink)" paintOrder="stroke" stroke="var(--surface)" strokeWidth={3.5} strokeLinejoin="round">
            {panel.label}
          </text>
        </g>
      )}
    </svg>
  )
}
