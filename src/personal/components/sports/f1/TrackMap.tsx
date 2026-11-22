import { useMemo } from 'react'
import type { PointerEvent } from 'react'
import { indexAt, trackWidth } from '../../../lib/f1/circuits'
import type { Analysis } from '../../../lib/f1/circuits'
import { INK, RAMP_GRADIENT, SECTOR_COLORS, SOFT, SPEED_CLASS, f0, ramp } from './chartKit'

export type Layer = 'speed' | 'sectors' | 'throttle' | 'corners' | 'g' | 'plain'

export const MAP_W = 800
export const MAP_H = 560

// A quarter turn counter-clockwise: north then points left. Used to lay a tall circuit on its side.
export type Rotation = 0 | 90
const turn = (x: number, y: number, rot: Rotation): [number, number] => (rot === 90 ? [-y, x] : [x, y])

// Height over width of the circuit as drawn.
export function aspectOf(a: Analysis, rot: Rotation = 0): number {
  const { lx, ly } = a.track
  let x0 = Infinity
  let x1 = -Infinity
  let y0 = Infinity
  let y1 = -Infinity
  for (let i = 0; i < lx.length; i++) {
    const [x, y] = turn(lx[i], ly[i], rot)
    x0 = Math.min(x0, x)
    x1 = Math.max(x1, x)
    y0 = Math.min(y0, y)
    y1 = Math.max(y1, y)
  }
  return (y1 - y0) / (x1 - x0)
}

export const LAYERS: [Layer, string][] = [
  ['speed', 'Speed'],
  ['throttle', 'Throttle and brake'],
  ['corners', 'Corner speed class'],
  ['g', 'Lateral g'],
  ['sectors', 'Sectors'],
  ['plain', 'Racing line'],
]

const W = 800

// The colour of one stretch of the racing line under a layer.
export function layerColor(a: Analysis, layer: Layer, i: number): string {
  const { sim, track, corners } = a
  switch (layer) {
    case 'speed':
      return ramp((sim.v[i] - sim.vMin) / (sim.vMax - sim.vMin))
    case 'g':
      return ramp(Math.abs(sim.aLat[i]) / 6.5)
    case 'throttle':
      return sim.brake[i] > 0 ? '#d9534f' : sim.throttle[i] >= 0.97 ? '#2f9e6e' : '#e0a82a'
    case 'sectors': {
      const s = track.s[i]
      return SECTOR_COLORS[s < a.splits[0] ? 0 : s < a.splits[1] ? 1 : 2]
    }
    case 'corners': {
      const s = track.s[i]
      const c = corners.find((k) => (k.s0 <= k.s1 ? s >= k.s0 && s <= k.s1 : s >= k.s0 || s <= k.s1))
      return c ? SPEED_CLASS[c.speed].color : '#9a9488'
    }
    default:
      return '#e07b2a'
  }
}

export function LayerLegend({ a, layer }: { a: Analysis; layer: Layer }) {
  const { sim } = a
  const bar = (lo: string, hi: string) => (
    <div className="flex items-center gap-2 text-xs">
      <span className="font-mono">{lo}</span>
      <span className="h-3 w-40 rounded-sm border" style={{ background: RAMP_GRADIENT, borderColor: 'var(--line)' }} />
      <span className="font-mono">{hi}</span>
    </div>
  )
  const chips = (items: { color: string; label: string; sub?: string }[]) => (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
      {items.map((i) => (
        <li key={i.label} className="inline-flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-5 rounded-full" style={{ background: i.color }} />
          <span className="font-bold">{i.label}</span>
          {i.sub && <span style={{ color: SOFT }}>{i.sub}</span>}
        </li>
      ))}
    </ul>
  )
  switch (layer) {
    case 'speed':
      return bar(`${f0(sim.vMin * 3.6)} km/h`, `${f0(sim.vMax * 3.6)} km/h`)
    case 'g':
      return bar('0 g', '6.5 g')
    case 'throttle':
      return chips([
        { color: '#2f9e6e', label: 'Full throttle' },
        { color: '#e0a82a', label: 'Partial throttle or coasting' },
        { color: '#d9534f', label: 'Braking' },
      ])
    case 'sectors':
      return chips(a.sectors.map((s, k) => ({ color: SECTOR_COLORS[k], label: `Sector ${s.n}`, sub: `${s.time.toFixed(1)} s` })))
    case 'corners':
      return chips([...Object.values(SPEED_CLASS).map((c) => ({ color: c.color, label: c.label, sub: c.range })), { color: '#9a9488', label: 'Straights and kinks' }])
    default:
      return chips([{ color: '#e07b2a', label: 'Racing line', sub: 'the path that minimises curvature within the track width' }])
  }
}

type Props = {
  a: Analysis
  layer: Layer
  cursor: number | null
  onCursor?: (i: number | null) => void
  selected?: number | null
  onSelect?: (n: number | null) => void
  // Zoom to this stretch of the lap (metres from the line) and fade the rest.
  focus?: [number, number]
  className?: string
  // For small multiples: just the line, no markers.
  bare?: boolean
  // Draw at this many viewBox units per metre instead of fitting the track to the frame,
  // so several circuits can be compared at the same scale.
  scale?: number
  // Lay the circuit on its side (north then points left).
  rotate?: Rotation
}

export function TrackMap({ a, layer, cursor, onCursor, selected, onSelect, focus, className, bare, scale, rotate = 0 }: Props) {
  const { track: base, corners } = a
  // The track with every coordinate turned to the chosen orientation.
  const track = useMemo(() => {
    if (rotate === 0) return base
    const x = new Float64Array(base.n)
    const y = new Float64Array(base.n)
    const lx = new Float64Array(base.n)
    const ly = new Float64Array(base.n)
    for (let i = 0; i < base.n; i++) {
      ;[x[i], y[i]] = turn(base.x[i], base.y[i], rotate)
      ;[lx[i], ly[i]] = turn(base.lx[i], base.ly[i], rotate)
    }
    return { ...base, x, y, lx, ly }
  }, [base, rotate])
  const geo = useMemo(() => {
    const idx: number[] = []
    for (let i = 0; i < track.n; i++) {
      if (!focus || (focus[0] <= focus[1] ? track.s[i] >= focus[0] && track.s[i] <= focus[1] : track.s[i] >= focus[0] || track.s[i] <= focus[1])) idx.push(i)
    }
    let x0 = Infinity
    let x1 = -Infinity
    let y0 = Infinity
    let y1 = -Infinity
    for (const i of idx) {
      x0 = Math.min(x0, track.x[i], track.lx[i])
      x1 = Math.max(x1, track.x[i], track.lx[i])
      y0 = Math.min(y0, track.y[i], track.ly[i])
      y1 = Math.max(y1, track.y[i], track.ly[i])
    }
    const pad = bare ? 6 : focus ? 64 : 44
    // The frame follows the track's own proportions, so a tall circuit is not drawn small in a wide box.
    const H = scale ? MAP_H : Math.max(300, Math.min(780, Math.round((W - 2 * pad) * ((y1 - y0) / Math.max(x1 - x0, 1)) + 2 * pad)))
    const sc = scale ?? Math.min((W - 2 * pad) / Math.max(x1 - x0, 1), (H - 2 * pad) / Math.max(y1 - y0, 1))
    const ox = pad + (W - 2 * pad - (x1 - x0) * sc) / 2
    const oy = pad + (H - 2 * pad - (y1 - y0) * sc) / 2
    const X = (x: number) => ox + (x - x0) * sc
    const Y = (y: number) => H - oy - (y - y0) * sc
    return { X, Y, sc, H }
  }, [track, focus, bare, scale])
  const { X, Y, sc, H } = geo

  const ribbon = useMemo(() => {
    let d = ''
    for (let i = 0; i < track.n; i++) d += `${i ? 'L' : 'M'}${X(track.x[i]).toFixed(1)} ${Y(track.y[i]).toFixed(1)}`
    return `${d}Z`
  }, [track, X, Y])

  // The racing line cut into short coloured pieces.
  const pieces = useMemo(() => {
    const out: { d: string; color: string; dim: boolean }[] = []
    const step = 3
    for (let i = 0; i < track.n; i += step) {
      let d = ''
      for (let k = 0; k <= step; k++) {
        const j = (i + k) % track.n
        d += `${k ? 'L' : 'M'}${X(track.lx[j]).toFixed(1)} ${Y(track.ly[j]).toFixed(1)}`
      }
      const mid = (i + 1) % track.n
      const s = track.s[mid]
      const dim = !!focus && !(focus[0] <= focus[1] ? s >= focus[0] && s <= focus[1] : s >= focus[0] || s <= focus[1])
      out.push({ d, color: layerColor(a, layer, mid), dim })
    }
    return out
  }, [a, layer, track, X, Y, focus])

  // Corner markers, pushed to the outside of each bend and nudged apart where they crowd.
  const labels = useMemo(() => {
    if (bare) return []
    const raw = corners.map((c) => {
      const i = indexAt(track, c.sApex)
      const h = Math.atan2(track.y[(i + 1) % track.n] - track.y[(i - 1 + track.n) % track.n], track.x[(i + 1) % track.n] - track.x[(i - 1 + track.n) % track.n])
      const side = c.dir === 'left' ? -1 : 1
      const ax = X(track.lx[i])
      const ay = Y(track.ly[i])
      const dx = Math.sin(h) * side
      const dy = Math.cos(h) * side
      return { n: c.n, ax, ay, x: ax + dx * 24, y: ay + dy * 24, dx, dy, s: c.sApex }
    })
    for (let pass = 0; pass < 40; pass++) {
      for (let p = 0; p < raw.length; p++) {
        for (let q = p + 1; q < raw.length; q++) {
          const ddx = raw[q].x - raw[p].x
          const ddy = raw[q].y - raw[p].y
          const dist = Math.hypot(ddx, ddy) || 0.01
          if (dist < 19) {
            const push = (19 - dist) / 2
            raw[p].x -= (ddx / dist) * push
            raw[p].y -= (ddy / dist) * push
            raw[q].x += (ddx / dist) * push
            raw[q].y += (ddy / dist) * push
          }
        }
      }
    }
    return raw
  }, [bare, corners, track, X, Y])

  const nearest = (e: PointerEvent<SVGSVGElement>) => {
    if (!onCursor) return
    const svg = e.currentTarget
    const m = svg.getScreenCTM()
    if (!m) return
    const pt = svg.createSVGPoint()
    pt.x = e.clientX
    pt.y = e.clientY
    const p = pt.matrixTransform(m.inverse())
    let best = -1
    let bd = Infinity
    for (let i = 0; i < track.n; i += 2) {
      const d = (X(track.lx[i]) - p.x) ** 2 + (Y(track.ly[i]) - p.y) ** 2
      if (d < bd) {
        bd = d
        best = i
      }
    }
    onCursor(bd < 40 * 40 ? best : null)
  }

  const flag = (s: number, label: string, color: string) => {
    const i = indexAt(track, s)
    const j = (i + 3) % track.n
    const h = Math.atan2(Y(track.ly[j]) - Y(track.ly[i]), X(track.lx[j]) - X(track.lx[i]))
    const half = (trackWidth(a.id) * sc) / 2 + 5
    const cx = X(track.x[i])
    const cy = Y(track.y[i])
    const nx = -Math.sin(h)
    const ny = Math.cos(h)
    return (
      <g key={label}>
        <line x1={cx - nx * half} y1={cy - ny * half} x2={cx + nx * half} y2={cy + ny * half} stroke={color} strokeWidth={label === 'S/F' ? 4 : 2.5} strokeDasharray={label === 'S/F' ? '3 3' : undefined} />
        <text x={cx + nx * (half + 9)} y={cy + ny * (half + 9) + 3} fontSize={10} fontWeight={700} textAnchor="middle" fill={color} paintOrder="stroke" stroke="var(--surface)" strokeWidth={3}>
          {label}
        </text>
      </g>
    )
  }

  const arrows: number[] = []
  for (let s = 400; s < track.length; s += 900) arrows.push(indexAt(track, s))

  const lw = Math.max(bare ? 4 : 2.5, trackWidth(a.id) * sc)
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className ?? 'block h-auto w-full'}
      role="img"
      aria-label={`Map of ${a.notes.name}, with the racing line coloured by ${layer}`}
      onPointerMove={nearest}
      onPointerLeave={() => onCursor?.(null)}
      onClick={() => onSelect?.(null)}
      style={{ touchAction: 'pan-x pan-y' }}
    >
      <path d={ribbon} fill="none" stroke="color-mix(in srgb, var(--ink) 45%, transparent)" strokeWidth={lw + 2.5} strokeLinejoin="round" opacity={focus ? 0.5 : 1} />
      <path d={ribbon} fill="none" stroke="color-mix(in srgb, var(--ink) 11%, var(--surface))" strokeWidth={lw} strokeLinejoin="round" />
      {pieces.map((p, i) => (
        <path key={i} d={p.d} fill="none" stroke={p.color} strokeWidth={bare ? 3 : 3} strokeLinecap="butt" opacity={p.dim ? 0.16 : 1} />
      ))}
      {!bare && (
        <>
          {arrows.map((i) => {
            const j = (i + 3) % track.n
            const x = X(track.lx[i])
            const y = Y(track.ly[i])
            const ang = (Math.atan2(Y(track.ly[j]) - y, X(track.lx[j]) - x) * 180) / Math.PI
            return <path key={i} d="M-4 -3.5L4 0L-4 3.5Z" transform={`translate(${x} ${y}) rotate(${ang})`} fill="var(--surface)" stroke={INK} strokeWidth={0.8} opacity={0.9} />
          })}
          {layer === 'sectors' && (
            <>
              {flag(a.splits[0], 'S1|S2', INK)}
              {flag(a.splits[1], 'S2|S3', INK)}
            </>
          )}
          {flag(0, 'S/F', INK)}
          {labels.map((l) => {
            const on = selected === l.n
            return (
              <g key={l.n} onClick={(e) => { e.stopPropagation(); onSelect?.(on ? null : l.n) }} style={{ cursor: onSelect ? 'pointer' : undefined }}>
                <line x1={l.ax} y1={l.ay} x2={l.x} y2={l.y} stroke={INK} strokeWidth={0.8} />
                <circle cx={l.ax} cy={l.ay} r={2.4} fill={INK} />
                <circle cx={l.x} cy={l.y} r={on ? 11 : 9} fill={on ? 'var(--orange)' : 'var(--surface)'} stroke={INK} strokeWidth={on ? 2.2 : 1.3} />
                <text x={l.x} y={l.y + 3.6} fontSize={l.n > 9 ? 9.5 : 10.5} fontWeight={700} textAnchor="middle" fill={on ? 'var(--orange-ink)' : INK}>
                  {l.n}
                </text>
                <circle cx={l.x} cy={l.y} r={15} fill="transparent" />
              </g>
            )
          })}
          {cursor !== null && (
            <g>
              <circle cx={X(track.lx[cursor])} cy={Y(track.ly[cursor])} r={7} fill="none" stroke={INK} strokeWidth={2} />
              <circle cx={X(track.lx[cursor])} cy={Y(track.ly[cursor])} r={3} fill={INK} />
            </g>
          )}
          <g transform={`translate(${W - 24 - 500 * sc} ${H - 18})`}>
            <line x1={0} x2={500 * sc} y1={0} y2={0} stroke={INK} strokeWidth={2} />
            <line x1={0} x2={0} y1={-4} y2={4} stroke={INK} strokeWidth={2} />
            <line x1={500 * sc} x2={500 * sc} y1={-4} y2={4} stroke={INK} strokeWidth={2} />
            <text x={(500 * sc) / 2} y={-6} fontSize={10} fontWeight={700} textAnchor="middle" fill={INK}>
              500 m
            </text>
          </g>
          <text x={20} y={H - 14} fontSize={10} fill={SOFT}>
            {rotate === 90 ? '← north' : 'north is up'}
          </text>
        </>
      )}
    </svg>
  )
}
