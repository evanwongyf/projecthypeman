import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CIRCUIT_IDS, allSummaries, analyse, mmss, shortName, trackFor } from '../../../lib/f1/circuits'
import type { Summary } from '../../../lib/f1/circuits'
import { Card, Pills, soft } from '../shared'
import { INK, SOFT, f0, f1, niceTicks } from './chartKit'
import { MAP_H, MAP_W, TrackMap } from './TrackMap'
import { NativeSelect } from '../../../../components/NativeSelect'

export const KIND_COLOR: Record<Summary['kind'], string> = { street: '#d9534f', hybrid: '#e0a82a', permanent: '#3b6fd8' }
const KIND_LABEL: Record<Summary['kind'], string> = { street: 'Street', hybrid: 'Part street, part purpose-built', permanent: 'Purpose-built' }

const href = (id: string) => `/personal/archive/sports/f1/atlas/${id}`

type Metric = { key: string; label: string; unit: string; pick: (s: Summary) => number; fmt: (n: number) => string; blurb: string }

export const METRICS: Metric[] = [
  { key: 'length', label: 'Lap length', unit: 'km', pick: (s) => s.length / 1000, fmt: (n) => n.toFixed(3), blurb: 'The traced lap length. The race is run to about 305 km (260 km at Monaco), so a longer lap means fewer laps.' },
  { key: 'lap', label: 'Modelled lap time', unit: 's', pick: (s) => s.lapTime, fmt: (n) => mmss(n), blurb: 'The simulated time of one lap with a typical qualifying set-up for that track.' },
  { key: 'avg', label: 'Average speed', unit: 'km/h', pick: (s) => s.vAvg, fmt: f0, blurb: 'Lap length divided by modelled lap time: the single best summary of how fast a track is.' },
  { key: 'top', label: 'Top speed', unit: 'km/h', pick: (s) => s.vMax, fmt: f0, blurb: 'The highest speed reached on the straights, set by power against drag at that track’s wing level and air density.' },
  { key: 'low', label: 'Lowest speed', unit: 'km/h', pick: (s) => s.vMin, fmt: f0, blurb: 'The apex speed of the slowest corner, set by its radius and the available grip.' },
  { key: 'full', label: 'Full throttle', unit: '% of lap', pick: (s) => s.fullThrottle, fmt: f0, blurb: 'The share of the lap the engine is fully used. Higher means more straight-line, power-hungry; lower means more traction-limited.' },
  { key: 'brake', label: 'Time braking', unit: '% of lap time', pick: (s) => s.brakingTime, fmt: f1, blurb: 'The share of the lap, by time, spent on the brakes.' },
  { key: 'lat', label: 'Peak lateral g', unit: 'g', pick: (s) => s.peakLat, fmt: f1, blurb: 'The hardest sustained cornering force of the lap, set by downforce and the speed of the fastest corners.' },
  { key: 'long', label: 'Longest full-throttle run', unit: 'm', pick: (s) => s.longest, fmt: f0, blurb: 'The longest unbroken stretch at full throttle: where the tow, the engine and the drag matter most.' },
  { key: 'turns', label: 'Corners', unit: 'turns', pick: (s) => s.turns, fmt: f0, blurb: 'The official number of turns on the lap.' },
  { key: 'alt', label: 'Altitude', unit: 'm', pick: (s) => s.altitude, fmt: f0, blurb: 'Height above sea level: thinner air means less downforce, less drag and less cooling.' },
]

const short = (_name: string, id: string) => shortName(id)

function KindLegend() {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
      {(Object.keys(KIND_COLOR) as Summary['kind'][]).map((k) => (
        <li key={k} className="inline-flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-sm border" style={{ background: KIND_COLOR[k], borderColor: 'var(--line)' }} />
          {KIND_LABEL[k]}
        </li>
      ))}
    </ul>
  )
}

// All circuits ranked on one measure.
export function RankBars({ color }: { color: string }) {
  const [key, setKey] = useState('avg')
  const m = METRICS.find((x) => x.key === key)!
  const rows = useMemo(() => [...allSummaries()].sort((p, q) => m.pick(q) - m.pick(p)), [m])
  const hi = Math.max(...rows.map(m.pick))
  return (
    <Card title="Every circuit, ranked" color={color} note={m.blurb}>
      <Pills label="Measure" value={key} options={METRICS.map((x) => [x.key, x.label])} onChange={setKey} />
      <div className="flex flex-col gap-1">
        {rows.map((r, i) => (
          <Link key={r.id} to={href(r.id)} className="grid grid-cols-[1.2rem_8.5rem_1fr_4.8rem] items-center gap-2 text-xs hover:underline sm:grid-cols-[1.4rem_11rem_1fr_5.5rem]">
            <span className="text-right font-mono" style={{ color: SOFT }}>{i + 1}</span>
            <span className="truncate font-bold">{short(r.name, r.id)}</span>
            <span className="h-3.5 rounded-sm" style={{ background: 'var(--paper-2)' }}>
              <span className="block h-full rounded-sm" style={{ width: `${(m.pick(r) / hi) * 100}%`, background: KIND_COLOR[r.kind] }} />
            </span>
            <span className="text-right font-mono">{m.fmt(m.pick(r))}</span>
          </Link>
        ))}
      </div>
      <p className="text-xs" style={soft}>Unit: {m.unit}. Tap a circuit to open its guide.</p>
      <KindLegend />
    </Card>
  )
}

// Any measure against any other: the clusters are the families of circuit.
export function Scatter({ color }: { color: string }) {
  const [xk, setXk] = useState('brake')
  const [yk, setYk] = useState('full')
  const X = METRICS.find((m) => m.key === xk)!
  const Y = METRICS.find((m) => m.key === yk)!
  const rows = useMemo(() => allSummaries(), [])
  const xs = rows.map(X.pick)
  const ys = rows.map(Y.pick)
  const pad = (lo: number, hi: number) => [lo - (hi - lo) * 0.08, hi + (hi - lo) * 0.08] as const
  const [x0, x1] = pad(Math.min(...xs), Math.max(...xs))
  const [y0, y1] = pad(Math.min(...ys), Math.max(...ys))
  const W = 800
  const H = 460
  const M = { l: 56, r: 16, t: 12, b: 40 }
  const sx = (v: number) => M.l + ((v - x0) / (x1 - x0)) * (W - M.l - M.r)
  const sy = (v: number) => M.t + ((y1 - v) / (y1 - y0)) * (H - M.t - M.b)
  const select = (v: string, set: (s: string) => void, label: string) => (
    <label className="flex flex-col gap-1 text-xs font-bold">
      {label}
      <NativeSelect value={v} onChange={(e) => set(e.target.value)} className="rounded-[var(--radius)] border px-2 py-1.5 text-sm" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        {METRICS.map((m) => (
          <option key={m.key} value={m.key}>{m.label} ({m.unit})</option>
        ))}
      </NativeSelect>
    </label>
  )
  return (
    <Card title="One measure against another" color={color} note="Each dot is a circuit. Pick any two measures. The default pair, time spent braking against time at full throttle, separates the stop-and-go circuits from the flowing, high-speed ones, and the street circuits tend to cluster apart from the purpose-built ones.">
      <div className="flex flex-wrap gap-3">
        {select(xk, setXk, 'Across')}
        {select(yk, setYk, 'Up')}
      </div>
      <div className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label={`${Y.label} against ${X.label} for every circuit`}>
          {niceTicks(y0, y1, 5).map((t) => (
            <g key={`y${t}`}>
              <line x1={M.l} x2={W - M.r} y1={sy(t)} y2={sy(t)} stroke="var(--line)" />
              <text x={M.l - 6} y={sy(t) + 4} fontSize={11} textAnchor="end" fill={SOFT}>{Number.isInteger(t) ? t : t.toFixed(1)}</text>
            </g>
          ))}
          {niceTicks(x0, x1, 7).map((t) => (
            <g key={`x${t}`}>
              <line x1={sx(t)} x2={sx(t)} y1={M.t} y2={H - M.b} stroke="var(--line)" />
              <text x={sx(t)} y={H - M.b + 15} fontSize={11} textAnchor="middle" fill={SOFT}>{Number.isInteger(t) ? t : t.toFixed(1)}</text>
            </g>
          ))}
          <text x={(M.l + W - M.r) / 2} y={H - 6} fontSize={12} fontWeight={700} textAnchor="middle" fill={INK}>{X.label} ({X.unit})</text>
          <text transform={`translate(14 ${(M.t + H - M.b) / 2}) rotate(-90)`} fontSize={12} fontWeight={700} textAnchor="middle" fill={INK}>{Y.label} ({Y.unit})</text>
          {rows.map((r) => (
            <g key={r.id}>
              <circle cx={sx(X.pick(r))} cy={sy(Y.pick(r))} r={6} fill={KIND_COLOR[r.kind]} stroke={INK} strokeWidth={1.2} />
              <text x={sx(X.pick(r)) + 8} y={sy(Y.pick(r)) + 3.5} fontSize={10} fill={INK} paintOrder="stroke" stroke="var(--surface)" strokeWidth={3}>{short(r.name, r.id)}</text>
            </g>
          ))}
        </svg>
      </div>
      <KindLegend />
    </Card>
  )
}

// Every track drawn at the same scale, so the sizes can be compared directly.
export function TrackGrid({ color }: { color: string }) {
  const items = useMemo(() => CIRCUIT_IDS.map((id) => analyse(id)), [])
  const scale = useMemo(() => {
    let sc = Infinity
    const pad = 6
    for (const a of items) {
      const t = a.track
      let x0 = Infinity
      let x1 = -Infinity
      let y0 = Infinity
      let y1 = -Infinity
      for (let i = 0; i < t.n; i++) {
        x0 = Math.min(x0, t.lx[i])
        x1 = Math.max(x1, t.lx[i])
        y0 = Math.min(y0, t.ly[i])
        y1 = Math.max(y1, t.ly[i])
      }
      sc = Math.min(sc, (MAP_W - 2 * pad) / (x1 - x0), (MAP_H - 2 * pad) / (y1 - y0))
    }
    return sc
  }, [items])
  return (
    <Card title="Every circuit at the same scale" color={color} note="All 24 tracks drawn with the same metres-per-pixel, in calendar order, coloured by modelled speed (dark slow, yellow fast). Spa and Jeddah are enormous next to Monaco; Baku and Las Vegas are long mostly because of their straights. Tap one to open its guide.">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((a) => (
          <Link key={a.id} to={href(a.id)} className="flex flex-col overflow-hidden rounded-[var(--radius)] border hover:shadow-md" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
            <TrackMap a={a} layer="speed" cursor={null} bare scale={scale} className="block h-auto w-full" />
            <span className="border-t px-2 py-1 text-[11px] leading-tight font-bold" style={{ borderColor: 'var(--line)' }}>
              {short(a.notes.name, a.id)}
              <span className="block font-normal" style={soft}>{(trackFor(a.id).length / 1000).toFixed(2)} km</span>
            </span>
          </Link>
        ))}
      </div>
    </Card>
  )
}

type Col = { key: string; label: string; get: (s: Summary) => string | number; fmt?: (n: number) => string }

// A sortable table of every number.
export function AtlasTable({ color }: { color: string }) {
  const [sort, setSort] = useState<{ key: string; dir: 1 | -1 }>({ key: 'cal', dir: 1 })
  const cols: Col[] = [
    { key: 'cal', label: '#', get: (s) => CIRCUIT_IDS.indexOf(s.id) + 1 },
    { key: 'name', label: 'Circuit', get: (s) => short(s.name, s.id) },
    { key: 'length', label: 'Length (km)', get: (s) => s.length / 1000, fmt: (n) => n.toFixed(2) },
    { key: 'turns', label: 'Turns', get: (s) => s.turns },
    { key: 'lap', label: 'Modelled lap', get: (s) => s.lapTime, fmt: mmss },
    { key: 'avg', label: 'Average (km/h)', get: (s) => s.vAvg, fmt: f0 },
    { key: 'top', label: 'Top (km/h)', get: (s) => s.vMax, fmt: f0 },
    { key: 'low', label: 'Slowest (km/h)', get: (s) => s.vMin, fmt: f0 },
    { key: 'full', label: 'Full throttle %', get: (s) => s.fullThrottle, fmt: f0 },
    { key: 'brake', label: 'Braking % of time', get: (s) => s.brakingTime, fmt: f0 },
    { key: 'lat', label: 'Peak g', get: (s) => s.peakLat, fmt: f1 },
    { key: 'alt', label: 'Altitude (m)', get: (s) => s.altitude, fmt: f0 },
  ]
  const col = cols.find((c) => c.key === sort.key)!
  const rows = useMemo(() => [...allSummaries()].sort((p, q) => (col.get(p) > col.get(q) ? 1 : -1) * sort.dir), [col, sort.dir])
  return (
    <Card title="The numbers" color={color} note="Click a heading to sort. Lap time, speeds and throttle share come from the lap model, so compare them with each other rather than against any one real lap.">
      <div className="overflow-x-auto rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <table className="w-full min-w-[52rem] border-collapse text-xs">
          <thead>
            <tr style={{ background: 'var(--paper-2)' }}>
              {cols.map((c) => (
                <th key={c.key} className="px-2 py-1.5 text-left font-bold whitespace-nowrap">
                  <button type="button" onClick={() => setSort({ key: c.key, dir: sort.key === c.key ? (sort.dir === 1 ? -1 : 1) : c.key === 'name' || c.key === 'cal' ? 1 : -1 })} className="font-bold">
                    {c.label}
                    {sort.key === c.key ? (sort.dir === 1 ? ' ▲' : ' ▼') : ''}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t" style={{ borderColor: 'var(--line)' }}>
                {cols.map((c) => {
                  const v = c.get(r)
                  return (
                    <td key={c.key} className="px-2 py-1 whitespace-nowrap">
                      {c.key === 'name' ? (
                        <Link to={href(r.id)} className="font-bold underline">
                          <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full align-middle" style={{ background: KIND_COLOR[r.kind] }} />
                          {v}
                        </Link>
                      ) : c.fmt ? (
                        c.fmt(v as number)
                      ) : (
                        v
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <KindLegend />
    </Card>
  )
}
