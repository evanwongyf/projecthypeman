import { useMemo, useState } from 'react'
import { analyse, featureFor, gearAt } from '../../../lib/f1/circuits'
import type { Analysis, CornerStats } from '../../../lib/f1/circuits'
import { Btn, Card, Pills, Stat, soft } from '../shared'
import { Legend, SECTOR_COLORS, SPEED_CLASS, TraceChart, f0, f1, f2, km } from './chartKit'
import { LAYERS, LayerLegend, TrackMap, aspectOf } from './TrackMap'
import type { Layer, Rotation } from './TrackMap'

const mmss = (sec: number) => {
  const m = Math.floor(sec / 60)
  return `${m}:${(sec - m * 60).toFixed(3).padStart(6, '0')}`
}

// What the car is doing at one point of the lap.
function Readout({ a, i }: { a: Analysis; i: number | null }) {
  if (i === null)
    return (
      <p className="rounded-[var(--radius)] border border-dashed px-3 py-2 text-xs" style={{ borderColor: 'var(--line)', ...soft }}>
        Move the pointer along the map or any graph (or tap and drag on a phone) to read the car&apos;s speed, gear, pedals and g-force at that exact point of the lap.
      </p>
    )
  const { sim, track, sectors } = a
  const s = track.s[i]
  const sec = s < a.splits[0] ? 0 : s < a.splits[1] ? 1 : 2
  const k = Math.abs(track.kLine[i])
  return (
    <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4">
      <Stat label="distance" value={km(s)} />
      <Stat label="speed" value={`${f0(sim.v[i] * 3.6)} km/h`} tone="#3b6fd8" />
      <Stat label="gear (est.)" value={gearAt(sim.v[i])} />
      <Stat label="sector" value={`S${sectors[sec].n}`} tone={SECTOR_COLORS[sec]} />
      <Stat label="throttle" value={`${f0(sim.throttle[i] * 100)}%`} tone="#2f9e6e" />
      <Stat label="brake" value={`${f0(sim.brake[i] * 100)}%`} tone="#d9534f" />
      <Stat label="lateral g" value={f1(Math.abs(sim.aLat[i]))} />
      <Stat label={sim.aLong[i] < 0 ? 'braking g' : 'accel g'} value={f1(Math.abs(sim.aLong[i]))} />
      <Stat label="line radius" value={k < 1 / 1500 ? 'straight' : `${f0(1 / k)} m`} />
    </div>
  )
}

const shapeWord = (c: CornerStats) => (c.shape === 'corner' ? 'bend' : c.shape)

export function cornerName(a: Analysis, n: number) {
  const f = featureFor(a.id, n)
  return f && f.at[0] === f.at[1] ? f.name : null
}

function CornerCard({ a, c }: { a: Analysis; c: CornerStats }) {
  const f = featureFor(a.id, c.n)
  return (
    <div className="flex flex-col gap-2 rounded-[var(--radius)] border p-2.5" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
      <p className="text-sm font-bold">
        Turn {c.n} · {c.dir}-hand {shapeWord(c)} · <span style={{ color: SPEED_CLASS[c.speed].color }}>{SPEED_CLASS[c.speed].label.toLowerCase()}</span>
      </p>
      {f && (
        <p className="text-xs leading-relaxed">
          <strong>{f.name}.</strong> {f.note}
        </p>
      )}
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
        <Stat label="turns the car through" value={`${f0(c.angle)}°`} />
        <Stat label="centreline radius" value={`${f0(c.rMin)} m`} />
        <Stat label="racing-line radius" value={Number.isFinite(c.rLine) ? `${f0(c.rLine)} m` : '–'} />
        <Stat label="apex speed" value={`${f0(c.vApex)} km/h`} tone="#3b6fd8" />
        <Stat label="gear at apex (est.)" value={c.gear} />
        <Stat label="peak lateral g" value={f1(c.gLat)} />
        <Stat label="brakes from" value={c.brakeFrom ? `${f0(c.brakeFrom)} km/h` : 'no real braking'} tone="#d9534f" />
        <Stat label="braking distance" value={c.brakeFrom ? `${f0(c.brakeDist)} m` : '–'} />
        <Stat label="exit speed" value={`${f0(c.vExit)} km/h`} />
      </div>
    </div>
  )
}

// The headline numbers of a modelled lap.
function LapStats({ a }: { a: Analysis }) {
  const { sim, track } = a
  return (
    <div className="grid grid-cols-2 gap-1.5">
      <Stat label="modelled lap" value={mmss(sim.lapTime)} tone="#e07b2a" />
      <Stat label="top speed" value={`${f0(sim.vMax * 3.6)} km/h`} />
      <Stat label="average speed" value={`${f0(sim.vAvg * 3.6)} km/h`} />
      <Stat label="full throttle" value={`${f0(sim.fullThrottle * 100)}% of the lap`} />
      <Stat label="lap length" value={km(track.length)} />
      <Stat label="lowest speed" value={`${f0(sim.vMin * 3.6)} km/h`} />
      <Stat label="time braking" value={`${f1(sim.brakingTime)} s`} />
      <Stat label="air density" value={`${f2(sim.rho)} kg/m³`} />
    </div>
  )
}

// The interactive map: pick what colours the racing line, hover to read the car, tap a
// corner number for its numbers.
export function MapLab({ id, color }: { id: string; color: string }) {
  const a = useMemo(() => analyse(id), [id])
  const [layer, setLayer] = useState<Layer>('speed')
  const [cursor, setCursor] = useState<number | null>(null)
  const [sel, setSel] = useState<number | null>(null)
  const corner = a.corners.find((c) => c.n === sel)
  // A tall circuit is laid on its side by default so the map fills the width of the card.
  const [rot, setRot] = useState<Rotation>(aspectOf(a) > 1.15 ? 90 : 0)
  const tall = aspectOf(a, rot) > 0.95
  return (
    <Card
      title={`${a.notes.name}: racing line, sectors and corners`}
      color={color}
      note="The drawing is traced from public centreline data. The orange-to-colour line is the modelled racing line (the minimum-curvature path within the track width), coloured by what the simulated car is doing there. Numbers mark each corner at its apex; tap one for its numbers. North is up (unless the map is laid on its side, when it points left) and the arrows show the direction of travel."
    >
      <div className="flex flex-wrap items-center gap-2">
        <Pills label="What colours the line" value={layer} options={LAYERS} onChange={setLayer} />
        <Btn onClick={() => setRot(rot === 0 ? 90 : 0)}>{rot === 0 ? 'Lay on its side' : 'North up'}</Btn>
      </div>
      <div className={tall ? 'grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]' : 'flex flex-col gap-3'}>
        <div className="flex flex-col gap-2">
          <div className="overflow-x-auto rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
            <TrackMap a={a} layer={layer} cursor={cursor} onCursor={setCursor} selected={sel} onSelect={setSel} rotate={rot} className="mx-auto block h-auto max-h-[44rem] w-full min-w-[34rem] sm:min-w-0" />
          </div>
          <LayerLegend a={a} layer={layer} />
        </div>
        <div className={tall ? 'flex flex-col gap-2' : 'grid gap-3 lg:grid-cols-2'}>
          <div className="flex flex-col gap-2">
            <Readout a={a} i={cursor} />
            {corner ? <CornerCard a={a} c={corner} /> : <p className="text-xs" style={soft}>Tap a numbered corner on the map to see its radius, apex speed, braking point and g-force.</p>}
          </div>
          <LapStats a={a} />
        </div>
      </div>
    </Card>
  )
}

// The four telemetry-style traces, sharing one cursor.
export function TraceStack({ id, color, range, title }: { id: string; color: string; range?: [number, number]; title?: string }) {
  const a = useMemo(() => analyse(id), [id])
  const [cursor, setCursor] = useState<number | null>(null)
  const data = useMemo(() => {
    const { sim, track } = a
    const n = track.n
    const speed = new Float64Array(n)
    const thr = new Float64Array(n)
    const brk = new Float64Array(n)
    const gear = new Float64Array(n)
    const rad = new Float64Array(n)
    const lat = new Float64Array(n)
    const lon = new Float64Array(n)
    for (let i = 0; i < n; i++) {
      speed[i] = sim.v[i] * 3.6
      thr[i] = sim.throttle[i] * 100
      brk[i] = -sim.brake[i] * 100
      gear[i] = gearAt(sim.v[i])
      rad[i] = Math.min(1000, 1 / Math.max(Math.abs(track.kLine[i]), 1e-6))
      lat[i] = sim.aLat[i]
      lon[i] = sim.aLong[i]
    }
    return { speed, thr, brk, gear, rad, lat, lon }
  }, [a])
  const top = Math.ceil((a.sim.vMax * 3.6) / 50) * 50
  const common = { a, cursor, onCursor: setCursor, range }
  return (
    <Card
      title={title ?? `${a.notes.name}: what the car does around the lap`}
      color={color}
      note="Four traces of the simulated lap, all against distance from the start line, with the sectors tinted behind them and each corner numbered along the top. Hover or drag across any graph: the others follow, and the readout shows every value at that point."
    >
      <Readout a={a} i={cursor} />
      <TraceChart {...common} title="Speed" unit="km/h" y={[0, top]} series={[{ label: 'speed', values: data.speed, color: '#3b6fd8', fill: true }]} height={170} />
      <TraceChart {...common} title="Throttle (up) and brake (down)" unit="%" y={[-100, 100]} yTicks={[-100, -50, 0, 50, 100]} zero markers={false} series={[{ label: 'throttle', values: data.thr, color: '#2f9e6e', fill: true }, { label: 'brake', values: data.brk, color: '#d9534f', fill: true }]} />
      <TraceChart {...common} title="Gear (estimated)" y={[1, 8]} yTicks={[1, 2, 3, 4, 5, 6, 7, 8]} markers={false} series={[{ label: 'gear', values: data.gear, color: '#8a6d1e', stepped: true }]} height={120} />
      <TraceChart {...common} title="G-force: lateral (+ left) and longitudinal (+ accelerating)" unit="g" y={[-7, 7]} yTicks={[-6, -3, 0, 3, 6]} zero markers={false} series={[{ label: 'lateral', values: data.lat, color: '#7b4fc9' }, { label: 'longitudinal', values: data.lon, color: '#e07b2a' }]} />
      <TraceChart {...common} title="Radius of the racing line (log scale)" unit="m" y={[20, 1000]} logY yTicks={[20, 50, 100, 200, 500, 1000]} markers={false} series={[{ label: 'radius', values: data.rad, color: '#2f9e6e', fill: true }]} note="Low means tight: the dips are the corners and the flat tops at 1,000 m are the straights. This is the curvature that limits speed in the model, turned upside down." />
    </Card>
  )
}

// One sector, zoomed in: its map, its corners and its slice of the speed and pedal traces.
export function SectorLab({ id, sector, color }: { id: string; sector: 1 | 2 | 3; color: string }) {
  const a = useMemo(() => analyse(id), [id])
  const sec = a.sectors[sector - 1]
  const [cursor, setCursor] = useState<number | null>(null)
  const [sel, setSel] = useState<number | null>(null)
  const range: [number, number] = [sec.s0, sec.s1]
  const speed = useMemo(() => Float64Array.from(a.sim.v, (v) => v * 3.6), [a])
  const thr = useMemo(() => Float64Array.from(a.sim.throttle, (v) => v * 100), [a])
  const brk = useMemo(() => Float64Array.from(a.sim.brake, (v) => -v * 100), [a])
  const inside = a.corners.filter((c) => sec.corners.includes(c.n))
  const corner = inside.find((c) => c.n === sel)
  const common = { a, cursor, onCursor: setCursor, range }
  return (
    <Card title={`Sector ${sector} in detail`} color={SECTOR_COLORS[sector - 1] ?? color}>
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="overflow-x-auto rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
          <TrackMap a={a} layer="speed" cursor={cursor} onCursor={setCursor} selected={sel} onSelect={setSel} focus={range} className="block h-auto max-h-[28rem] w-full min-w-[28rem] sm:min-w-0" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-1.5">
            <Stat label="from – to" value={`${km(sec.s0)} – ${km(sec.s1)}`} />
            <Stat label="time" value={`${sec.time.toFixed(2)} s`} tone={SECTOR_COLORS[sector - 1]} />
            <Stat label="average speed" value={`${f0(sec.avgSpeed * 3.6)} km/h`} />
            <Stat label="corners" value={inside.length ? `${inside[0].n}–${inside[inside.length - 1].n}` : 'none'} />
          </div>
          {corner ? <CornerCard a={a} c={corner} /> : <p className="text-xs" style={soft}>Tap a corner number for its details.</p>}
          <Legend items={Object.values(SPEED_CLASS).map((c) => ({ color: c.color, label: c.label, sub: c.range }))} />
          <p className="text-xs" style={soft}>The line is coloured by speed, slow (dark) to fast (yellow); the rest of the lap is faded.</p>
        </div>
      </div>
      <TraceChart {...common} title="Speed through the sector" unit="km/h" y={[0, Math.ceil((a.sim.vMax * 3.6) / 50) * 50]} series={[{ label: 'speed', values: speed, color: '#3b6fd8', fill: true }]} height={160} />
      <TraceChart {...common} title="Pedals: throttle (up) and brake (down)" unit="%" y={[-100, 100]} yTicks={[-100, 0, 100]} zero series={[{ label: 'throttle', values: thr, color: '#2f9e6e', fill: true }, { label: 'brake', values: brk, color: '#d9534f', fill: true }]} height={110} />
    </Card>
  )
}
