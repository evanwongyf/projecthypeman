import { useMemo, useState } from 'react'
import { BASE_SETUP, CIRCUIT_IDS, NOTES_BY_ID, analyse, setupForWing, trackWithSmoothing } from '../../../lib/f1/circuits'
import { dynamics } from '../../../lib/f1/circuitModel'
import type { Analysis } from '../../../lib/f1/circuits'
import { PlotChart } from '../../finance/PlotChart'
import { Card, Pills, Slider, Stat, soft } from '../shared'
import { INK, SOFT, TraceChart, f0, f1, f2, ramp } from './chartKit'
import { NativeSelect } from '../../../../components/NativeSelect'

const select = (label: string, value: string, set: (v: string) => void, options: [string, string][]) => (
  <label className="flex min-w-40 flex-1 flex-col gap-1 text-xs font-bold">
    {label}
    <NativeSelect value={value} onChange={(e) => set(e.target.value)} className="rounded-[var(--radius)] border px-2 py-1.5 text-sm" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
      {options.map(([v, l]) => (
        <option key={v} value={v}>{l}</option>
      ))}
    </NativeSelect>
  </label>
)

const circuitOptions: [string, string][] = CIRCUIT_IDS.map((id) => [id, NOTES_BY_ID[id].name])

// The speed a given radius allows: the same closed form the lap model uses.
export function cornerSpeed(r: number, mu: number, clA: number, mass = 800, rho = 1.2) {
  return dynamics({ ...BASE_SETUP, mu, clA, mass }, rho).limit(1 / r)
}

// ── why a wider line is a faster line ─────────────────────────────────────

export function LineDemo({ color }: { color: string }) {
  const [rc, setRc] = useState(60)
  const [angle, setAngle] = useState(90)
  const [width, setWidth] = useState(13)
  const [mu, setMu] = useState(2.1)
  const h = width / 2 - 1 // usable half-width: the car keeps a metre clear of each edge
  const ri = Math.max(2, rc - h)
  const ro = rc + h
  const phi = (angle / 2) * (Math.PI / 180)
  const cosP = Math.cos(phi)
  const sinP = Math.sin(phi)
  // The racing line is the circle that touches the inside edge at the apex and the outside
  // edge of the straights before and after the corner.
  const rLine = Math.min((ro - ri * cosP) / (1 - cosP), 4000)
  const setup = setupForWing(0.6)
  const v0 = cornerSpeed(rc, mu, setup.clA) * 3.6
  const v1 = cornerSpeed(rLine, mu, setup.clA) * 3.6

  // Everything is drawn with the apex pointing up and the centre of the corner at the origin.
  const leg = Math.max(60, Math.min(160, rc))
  const u1 = [-cosP, -sinP] as const
  const u2 = [cosP, -sinP] as const
  const vy = ro / cosP
  const cy = ri - rLine
  const tl = Math.sqrt(Math.max((vy - cy) ** 2 - rLine ** 2, 0))
  const p1 = [tl * u1[0], vy + tl * u1[1]] as const
  const p2 = [tl * u2[0], vy + tl * u2[1]] as const
  const arcPts = (r: number, ccx: number, ccy: number, from: number, to: number, n = 48) =>
    Array.from({ length: n + 1 }, (_, i) => [ccx + r * Math.cos(from + ((to - from) * i) / n), ccy + r * Math.sin(from + ((to - from) * i) / n)] as const)
  const edge = (r: number) => [
    [-r * sinP + leg * u1[0], r * cosP + leg * u1[1]] as const,
    ...arcPts(r, 0, 0, Math.PI / 2 + phi, Math.PI / 2 - phi),
    [r * sinP + leg * u2[0], r * cosP + leg * u2[1]] as const,
  ]
  const line = [
    [p1[0] + leg * u1[0], p1[1] + leg * u1[1]] as const,
    ...arcPts(rLine, 0, cy, Math.atan2(p1[1] - cy, p1[0]), Math.atan2(p2[1] - cy, p2[0]), 80),
    [p2[0] + leg * u2[0], p2[1] + leg * u2[1]] as const,
  ]
  const centreline = [
    [-rc * sinP + leg * u1[0], rc * cosP + leg * u1[1]] as const,
    ...arcPts(rc, 0, 0, Math.PI / 2 + phi, Math.PI / 2 - phi),
    [rc * sinP + leg * u2[0], rc * cosP + leg * u2[1]] as const,
  ]
  const all = [...edge(ro), ...edge(ri), ...line, [0, 0] as const]
  const x0 = Math.min(...all.map((q) => q[0]))
  const x1 = Math.max(...all.map((q) => q[0]))
  const y0 = Math.min(...all.map((q) => q[1]))
  const y1 = Math.max(...all.map((q) => q[1]))
  const W = 640
  const H = 400
  const pad = 36
  const sc = Math.min((W - 2 * pad) / (x1 - x0), (H - 2 * pad) / (y1 - y0))
  const px = (x: number) => pad + (x - x0) * sc + (W - 2 * pad - (x1 - x0) * sc) / 2
  const py = (y: number) => H - pad - (y - y0) * sc - (H - 2 * pad - (y1 - y0) * sc) / 2
  const d = (pts: readonly (readonly [number, number])[]) => pts.map((q, i) => `${i ? 'L' : 'M'}${px(q[0]).toFixed(1)} ${py(q[1]).toFixed(1)}`).join('')

  return (
    <Card title="Why a wider line is a faster line" color={color} note="An idealised corner: a circular arc of track flanked by straights. The orange line is the circle that touches the inside edge at the apex and the outside edge of the straights before and after the corner, always keeping a metre clear of the edges. Real racing lines blend more gradually, but the radius gain is the same idea. Move the sliders: the tighter and shorter the corner and the wider the track, the more the line helps.">
      <div className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label="A corner with the centreline and the wider racing line">
          <path d={d(edge(ro))} fill="none" stroke={INK} strokeWidth={1.6} />
          <path d={d(edge(ri))} fill="none" stroke={INK} strokeWidth={1.6} />
          <path d={d(centreline)} fill="none" stroke={SOFT} strokeWidth={1.4} strokeDasharray="6 4" />
          <path d={d(line)} fill="none" stroke="#e07b2a" strokeWidth={3.2} strokeLinejoin="round" />
          <circle cx={px(0)} cy={py(0)} r={3} fill={INK} />
          <text x={px(0) + 7} y={py(0) + 4} fontSize={11} fill={SOFT}>centre of the corner</text>
          <circle cx={px(0)} cy={py(ri)} r={5} fill="#e07b2a" stroke={INK} strokeWidth={1.5} />
          <text x={px(0)} y={py(ri) + 20} fontSize={11} fontWeight={700} textAnchor="middle" fill={INK}>apex</text>
          <text x={px(edge(ro)[0][0]) + 6} y={py(edge(ro)[0][1]) - 8} fontSize={11} fontWeight={700} fill={SOFT}>track edges, centreline (dashed)</text>
          <text x={px(line[line.length - 1][0]) - 4} y={py(line[line.length - 1][1]) - 10} fontSize={11} fontWeight={700} textAnchor="end" fill="#c0601a">racing line</text>
        </svg>
      </div>
      <div className="flex flex-wrap gap-3">
        <Slider label="centreline radius (m)" value={rc} min={20} max={300} step={5} onChange={setRc} />
        <Slider label="corner angle (°)" value={angle} min={30} max={180} step={5} onChange={setAngle} />
        <Slider label="track width (m)" value={width} min={8} max={20} step={1} onChange={setWidth} />
        <Slider label="tyre grip (μ)" value={mu} min={1.4} max={2.4} step={0.05} onChange={setMu} show={mu.toFixed(2)} />
      </div>
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
        <Stat label="centreline radius" value={`${f0(rc)} m`} />
        <Stat label="racing-line radius" value={rLine >= 4000 ? 'effectively straight' : `${f0(rLine)} m`} tone={color} />
        <Stat label="speed on the centreline" value={`${f0(v0)} km/h`} />
        <Stat label="speed on the racing line" value={`${f0(v1)} km/h (+${f0(v1 - v0)})`} tone="#2f9e6e" />
      </div>
      <p className="text-xs" style={soft}>Speeds use the lap model&apos;s own cornering formula at a medium wing level. Note how sensitive speed is to radius when downforce is working: a wider radius means less sideways force is needed at every speed, so the car can go faster, which makes more downforce, which allows still more speed.</p>
    </Card>
  )
}

// ── the cornering limit ───────────────────────────────────────────────────

export function CorneringLimit({ color }: { color: string }) {
  const [mu, setMu] = useState(2.1)
  const [wing, setWing] = useState(0.6)
  const [mass, setMass] = useState(800)
  const clA = setupForWing(wing).clA
  const k = 0.5 * 1.2 * clA
  const rStar = mass / (mu * k)
  const curves = [
    { f: (r: number) => cornerSpeed(r, mu, clA, mass) * 3.6, color, label: 'your car' },
    { f: (r: number) => cornerSpeed(r, mu, 0, mass) * 3.6, color: '#8a8478', dashed: true, label: 'no downforce at all' },
    { f: (r: number) => cornerSpeed(r, mu, setupForWing(0).clA, mass) * 3.6, color: '#3b6fd8', dashed: true, label: 'skinny wings' },
    { f: (r: number) => cornerSpeed(r, mu, setupForWing(1).clA, mass) * 3.6, color: '#7b4fc9', dashed: true, label: 'full wings' },
  ]
  return (
    <Card title="How fast can a corner be taken?" color={color} note="The curves show the fastest steady speed for a corner of each radius. With no downforce the speed grows slowly with radius (the square root). With downforce the curve bends upwards and, past a critical radius, the corner stops limiting the car at all: more speed brings more downforce, which brings more grip, which is always enough. The dashed lines show the other wing levels.">
      <PlotChart block={{ t: 'plot', x: [10, 300], y: [0, 390], xLabel: 'corner radius (m)', yLabel: 'cornering limit (km/h)', curves, vlines: [{ x: Math.min(500, rStar), label: 'flat-out radius' }], caption: undefined }} />
      <div className="flex flex-wrap gap-3">
        <Slider label="tyre grip (μ)" value={mu} min={1.4} max={2.4} step={0.05} onChange={setMu} show={mu.toFixed(2)} />
        <Slider label="wing level" value={wing} min={0} max={1} step={0.05} onChange={setWing} show={wing.toFixed(2)} />
        <Slider label="mass (kg)" value={mass} min={740} max={880} step={2} onChange={setMass} />
      </div>
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
        <Stat label="downforce coefficient C_L·A" value={`${f2(clA)} m²`} />
        <Stat label="flat-out radius R* = m / (μ·½ρC_L·A)" value={`${f0(rStar)} m`} tone={color} />
        <Stat label="50 m corner" value={`${f0(cornerSpeed(50, mu, clA, mass) * 3.6)} km/h`} />
        <Stat label="150 m corner" value={`${f0(cornerSpeed(150, mu, clA, mass) * 3.6)} km/h`} />
      </div>
    </Card>
  )
}

// ── curvature, and what smoothing does to it ──────────────────────────────

export function CurvatureLab({ color, initial = 'spa' }: { color: string; initial?: string }) {
  const [id, setId] = useState(initial)
  const [corner, setCorner] = useState(1)
  const [sigma, setSigma] = useState(6)
  const base = useMemo(() => analyse(id), [id])
  const track = useMemo(() => trackWithSmoothing(id, sigma), [id, sigma])
  const c = base.corners[Math.min(corner, base.corners.length) - 1]
  const lo = Math.max(0, Math.round((c.sApex - 110) / track.ds))
  const hi = Math.min(track.n - 1, Math.round((c.sApex + 110) / track.ds))
  const i = Math.round(c.sApex / track.ds)

  // The curvature over the stretch, signed, and the peak inside the corner itself.
  let kPeak = 0
  let turned = 0
  for (let j = Math.round(c.s0 / track.ds); j <= Math.round(c.s1 / track.ds); j++) {
    const k = track.kappa[j]
    if (Math.abs(k) > Math.abs(kPeak)) kPeak = k
    turned += k * track.ds
  }
  const peakR = 1 / Math.abs(kPeak || 1e-9)

  // Picture: the centreline over the window and the osculating circle at the apex.
  const W = 560
  const H = 360
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity
  for (let j = lo; j <= hi; j++) { x0 = Math.min(x0, track.x[j]); x1 = Math.max(x1, track.x[j]); y0 = Math.min(y0, track.y[j]); y1 = Math.max(y1, track.y[j]) }
  const nx = -Math.sin(Math.atan2(track.y[(i + 1) % track.n] - track.y[(i - 1 + track.n) % track.n], track.x[(i + 1) % track.n] - track.x[(i - 1 + track.n) % track.n]))
  const ny = Math.cos(Math.atan2(track.y[(i + 1) % track.n] - track.y[(i - 1 + track.n) % track.n], track.x[(i + 1) % track.n] - track.x[(i - 1 + track.n) % track.n]))
  const side = Math.sign(kPeak) || 1
  const ccx = track.x[i] + nx * side * peakR
  const ccy = track.y[i] + ny * side * peakR
  x0 = Math.min(x0, ccx - peakR); x1 = Math.max(x1, ccx + peakR); y0 = Math.min(y0, ccy - peakR); y1 = Math.max(y1, ccy + peakR)
  const pad = 24
  const sc = Math.min((W - 2 * pad) / (x1 - x0), (H - 2 * pad) / (y1 - y0))
  const X = (x: number) => pad + (x - x0) * sc + (W - 2 * pad - (x1 - x0) * sc) / 2
  const Y = (y: number) => H - pad - (y - y0) * sc - (H - 2 * pad - (y1 - y0) * sc) / 2
  let d = ''
  for (let j = lo; j <= hi; j++) d += `${j === lo ? 'M' : 'L'}${X(track.x[j]).toFixed(1)} ${Y(track.y[j]).toFixed(1)}`
  const kappa1000 = Float64Array.from(track.kappa, (k) => k * 1000)
  const fakeA = { ...base, track } as Analysis
  const kmax = Math.max(10, Math.ceil(Math.max(...Array.from(kappa1000.slice(lo, hi + 1)).map(Math.abs)) / 10) * 10)

  return (
    <Card title="Curvature: how sharp is this bend?" color={color} note="Pick any corner of any circuit. The circle is the 'osculating circle' that best fits the track at the apex, and its radius is one over the curvature. The graph shows the curvature along the stretch (positive for a left turn, negative for a right). Slide the smoothing: a little removes noise from the traced data and leaves the corner's total turning angle unchanged; too much blurs a tight bend into a gentle one and the radius grows.">
      <div className="flex flex-wrap gap-3">
        {select('Circuit', id, (v) => { setId(v); setCorner(1) }, circuitOptions)}
        {select('Corner', String(Math.min(corner, base.corners.length)), (v) => setCorner(Number(v)), base.corners.map((k) => [String(k.n), `Turn ${k.n}`]))}
        <Slider label="smoothing σ (m)" value={sigma} min={1} max={30} step={1} onChange={setSigma} />
      </div>
      <div className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label="The track near the apex with its best-fit circle">
          <circle cx={X(ccx)} cy={Y(ccy)} r={peakR * sc} fill="color-mix(in srgb, var(--orange) 12%, transparent)" stroke="#e07b2a" strokeWidth={1.6} strokeDasharray="5 4" />
          <line x1={X(ccx)} y1={Y(ccy)} x2={X(track.x[i])} y2={Y(track.y[i])} stroke="#e07b2a" strokeWidth={1.6} />
          <circle cx={X(ccx)} cy={Y(ccy)} r={3} fill="#e07b2a" />
          <path d={d} fill="none" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
          <circle cx={X(track.x[i])} cy={Y(track.y[i])} r={5} fill="var(--surface)" stroke={INK} strokeWidth={2} />
          <text x={(X(ccx) + X(track.x[i])) / 2 + 6} y={(Y(ccy) + Y(track.y[i])) / 2} fontSize={12} fontWeight={700} fill="#c0601a" paintOrder="stroke" stroke="var(--surface)" strokeWidth={3}>R = {f0(peakR)} m</text>
        </svg>
      </div>
      <TraceChart a={fakeA} cursor={null} onCursor={() => {}} title="Curvature κ along the stretch" unit="1/km" y={[-kmax, kmax]} zero markers={false} range={[track.s[lo], track.s[hi]]} series={[{ label: 'curvature', values: kappa1000, color: '#7b4fc9', fill: true }]} height={140} />
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
        <Stat label="peak curvature" value={`${f1(Math.abs(kPeak) * 1000)} /km`} />
        <Stat label="radius = 1 / curvature" value={`${f0(peakR)} m`} tone={color} />
        <Stat label="angle turned (area under κ)" value={`${f0(Math.abs((turned * 180) / Math.PI))}°`} />
        <Stat label="direction" value={kPeak > 0 ? 'left' : 'right'} />
      </div>
    </Card>
  )
}

// ── accelerate, brake, take the minimum ───────────────────────────────────

export function PassesLab({ color, initial = 'monza' }: { color: string; initial?: string }) {
  const [id, setId] = useState(initial)
  const [corner, setCorner] = useState(2)
  const [stage, setStage] = useState<'limit' | 'forward' | 'final'>('final')
  const a = useMemo(() => analyse(id), [id])
  const c = a.corners[Math.min(corner, a.corners.length) - 1]
  const range: [number, number] = [Math.max(0, c.sApex - 700), Math.min(a.track.length, c.sApex + 500)]
  const kmh = (arr: Float64Array) => Float64Array.from(arr, (v) => Math.min(v, 120) * 3.6)
  const limit = useMemo(() => kmh(a.sim.vLimit), [a])
  const forward = useMemo(() => kmh(a.sim.vForward), [a])
  const final = useMemo(() => kmh(a.sim.v), [a])
  const [cursor, setCursor] = useState<number | null>(null)
  const series = [
    { label: 'corner speed limit', values: limit, color: '#8a8478', dashed: true, width: 1.5 },
    ...(stage !== 'limit' ? [{ label: 'after the acceleration pass', values: forward, color: '#e07b2a', width: 1.8 }] : []),
    ...(stage === 'final' ? [{ label: 'after the braking pass: the lap', values: final, color: '#3b6fd8', width: 2.4 }] : []),
  ]
  return (
    <Card title="Accelerate, brake, take the minimum" color={color} note="The dotted line is the fastest speed each point of the track would allow if the car could change speed instantly (the cornering limit). Step 1 runs forward round the lap, letting the car accelerate only as hard as its engine and tyres allow: it cannot reach the limit straight away after a corner. Step 2 runs backward, letting the car brake only as hard as its tyres and brakes allow: it must start slowing early for a slow corner ahead. The final speed is the lower of the two at every point.">
      <div className="flex flex-wrap gap-3">
        {select('Circuit', id, (v) => { setId(v); setCorner(2) }, circuitOptions)}
        {select('Corner', String(Math.min(corner, a.corners.length)), (v) => setCorner(Number(v)), a.corners.map((k) => [String(k.n), `Turn ${k.n}`]))}
      </div>
      <Pills label="Step" value={stage} options={[['limit', '0 · cornering limit only'], ['forward', '1 · add acceleration'], ['final', '2 · add braking']]} onChange={setStage} />
      <TraceChart a={a} cursor={cursor} onCursor={setCursor} title="Speed" unit="km/h" y={[0, Math.ceil((a.sim.vMax * 3.6) / 50) * 50]} range={range} series={series} height={230} />
    </Card>
  )
}

// ── the g-g diagram ───────────────────────────────────────────────────────

export function GGDiagram({ id, color }: { id: string; color: string }) {
  const a = useMemo(() => analyse(id), [id])
  const W = 520
  const H = 440
  const M = 64
  const sx = (g: number) => W / 2 + (g / 7) * (W / 2 - M)
  const sy = (g: number) => H / 2 - (g / 7) * (H / 2 - M)
  const pts = useMemo(() => {
    const out: { x: number; y: number; c: string }[] = []
    for (let i = 0; i < a.track.n; i += 2) out.push({ x: sx(a.sim.aLat[i]), y: sy(a.sim.aLong[i]), c: ramp((a.sim.v[i] - a.sim.vMin) / (a.sim.vMax - a.sim.vMin)) })
    return out
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [a])
  return (
    <Card title="The g-g diagram: how much of the tyres is being used" color={color} note="Every dot is a point of the lap, placed by its sideways g (across) and its forward or backward g (up for accelerating, down for braking), coloured by speed. A driver on the limit keeps the dots out near the edge of a rounded shape: the tyres can give grip in any direction, but only so much in total, so braking and cornering must share it. The cloud is wider and taller at high speed because downforce adds grip.">
      <div className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-xl" role="img" aria-label="Lateral against longitudinal acceleration for every point of the lap">
          {[-6, -4, -2, 0, 2, 4, 6].map((g) => (
            <g key={g}>
              <line x1={sx(g)} x2={sx(g)} y1={M / 2} y2={H - M / 2} stroke="var(--line)" />
              <line x1={M / 2} x2={W - M / 2} y1={sy(g)} y2={sy(g)} stroke="var(--line)" />
              <text x={sx(g)} y={H - 14} fontSize={10} textAnchor="middle" fill={SOFT}>{g}</text>
              <text x={M / 2 + 2} y={sy(g) + 3} fontSize={10} textAnchor="end" fill={SOFT}>{g}</text>
            </g>
          ))}
          <line x1={sx(0)} x2={sx(0)} y1={M / 2} y2={H - M / 2} stroke={INK} />
          <line x1={M / 2} x2={W - M / 2} y1={sy(0)} y2={sy(0)} stroke={INK} />
          {[2, 4, 6].map((g) => (
            <circle key={g} cx={sx(0)} cy={sy(0)} r={(g / 7) * (W / 2 - M)} fill="none" stroke={SOFT} strokeDasharray="2 4" />
          ))}
          {pts.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={2.4} fill={p.c} opacity={0.75} />
          ))}
          <text x={W / 2} y={H - 2} fontSize={11} fontWeight={700} textAnchor="middle" fill={INK}>lateral g (left +, right −)</text>
          <text x={10} y={H / 2} fontSize={11} fontWeight={700} fill={INK} transform={`rotate(-90 10 ${H / 2})`} textAnchor="middle">accelerating + / braking −  (g)</text>
        </svg>
      </div>
    </Card>
  )
}
