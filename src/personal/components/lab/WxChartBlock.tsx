import { useEffect, useMemo, useRef, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { Btn, Card, Pills, Slider, Stat, rng, soft } from './kit'

type WxChart = Extract<Block, { t: 'wx-chart' }>

export default function WxChartBlock({ block, color }: { block: WxChart; color: string }) {
  switch (block.viz) {
    case 'radar':
      return <Radar color={color} />
    case 'zr-relation':
      return <ZrRelation color={color} />
    case 'satellite':
      return <Satellite color={color} />
    case 'wind-barb':
      return <WindBarbLab color={color} />
    case 'wind-rose':
      return <WindRose color={color} />
    case 'isobar-map':
      return <IsobarMap color={color} />
    case 'front-symbols':
      return <FrontSymbols color={color} />
    case 'skew-t':
      return <SkewT color={color} />
    case 'meteogram':
      return <Meteogram color={color} />
    case 'ensemble':
      return <Ensemble color={color} />
    case 'idf':
      return <Idf color={color} />
    case 'oktas':
      return <Oktas color={color} />
    case 'hovmoller':
      return <Hovmoller color={color} />
  }
}

// ---------------------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------------------

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))

// Radar reflectivity colour table: light blues and greens for light rain, yellow and orange for
// moderate to heavy, red and magenta for intense (the convention used by many national services;
// each agency has its own exact table).
const DBZ_STEPS: [number, string][] = [
  [5, '#8fd8ff'],
  [10, '#5bb8ff'],
  [15, '#2f8bff'],
  [20, '#35d65a'],
  [25, '#1fb140'],
  [30, '#0d8a2c'],
  [35, '#ffee33'],
  [40, '#ffbf1f'],
  [45, '#ff8a1c'],
  [50, '#f2332a'],
  [55, '#b3101c'],
  [60, '#ff2fd0'],
  [65, '#ffffff'],
]
const dbzColour = (d: number): string | null => {
  let c: string | null = null
  for (const [t, col] of DBZ_STEPS) if (d >= t) c = col
  return c
}
const hex = (c: string): [number, number, number] => [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)]

const ZR: Record<string, { a: number; b: number; label: string }> = {
  mp: { a: 200, b: 1.6, label: 'Marshall–Palmer (stratiform, mid-latitude)' },
  nexrad: { a: 300, b: 1.4, label: 'NEXRAD default (convective)' },
  tropical: { a: 250, b: 1.2, label: 'Tropical convective' },
}
const rainRate = (dbz: number, rel: string) => {
  const { a, b } = ZR[rel]
  return Math.pow(Math.pow(10, dbz / 10) / a, 1 / b)
}

function Legend({ items }: { items: [string, string][] }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px]" style={soft}>
      {items.map(([c, t]) => (
        <span key={t} className="inline-flex items-center gap-1">
          <span className="inline-block h-3 w-4 rounded-sm" style={{ background: c, border: '1px solid rgba(0,0,0,.3)' }} />
          {t}
        </span>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------------------
// Radar
// ---------------------------------------------------------------------------------------

type Blob = { x: number; y: number; peak: number; sx: number; sy: number; rot: number; tpeak: number; life: number }

function scene(kind: string): Blob[] {
  const r = rng(kind.length * 977 + kind.charCodeAt(0) * 31)
  const out: Blob[] = []
  if (kind === 'afternoon') {
    for (let i = 0; i < 12; i++) out.push({ x: 15 + r() * 70, y: 15 + r() * 70, peak: 44 + r() * 14, sx: 2.5 + r() * 3.5, sy: 2.5 + r() * 3.5, rot: r() * 3, tpeak: -5 + r() * 90, life: 35 + r() * 35 })
  } else if (kind === 'squall') {
    for (let i = 0; i < 16; i++) out.push({ x: 8 + i * 0.5 + r() * 4, y: -5 + i * 7.2, peak: 48 + r() * 10, sx: 2.6, sy: 6, rot: 0.1, tpeak: 50, life: 160 })
    out.push({ x: -8, y: 50, peak: 32, sx: 12, sy: 52, rot: 0.1, tpeak: 50, life: 200 })
  } else if (kind === 'monsoon') {
    for (let i = 0; i < 14; i++) out.push({ x: r() * 100, y: r() * 100, peak: 24 + r() * 8, sx: 14 + r() * 10, sy: 10 + r() * 12, rot: r() * 3, tpeak: 60, life: 260 })
    for (let i = 0; i < 6; i++) out.push({ x: 15 + r() * 70, y: 15 + r() * 70, peak: 38 + r() * 6, sx: 3 + r() * 2, sy: 3 + r() * 2, rot: 0, tpeak: 20 + r() * 80, life: 70 })
  } else {
    // supercell: a main core, a forward flank and a hook on the south-west side
    out.push({ x: 40, y: 52, peak: 62, sx: 6, sy: 5, rot: 0.5, tpeak: 55, life: 240 })
    out.push({ x: 48, y: 60, peak: 42, sx: 12, sy: 6, rot: 0.6, tpeak: 55, life: 240 })
    for (let i = 0; i < 6; i++) {
      const a = 2.2 + i * 0.5
      out.push({ x: 35 + 4 * Math.cos(a), y: 46 + 4 * Math.sin(a), peak: 56 - i * 3, sx: 1.8, sy: 1.8, rot: 0, tpeak: 55, life: 240 })
    }
  }
  return out
}

function radarField(kind: string, t: number, vx: number, vy: number, blobs: Blob[], N = 100): Float32Array {
  const f = new Float32Array(N * N).fill(-99)
  for (const b of blobs) {
    const a = Math.exp(-Math.pow((t - b.tpeak) / (b.life * 0.5), 2))
    const pk = 8 + (b.peak - 8) * a
    if (pk < 6) continue
    const cx = b.x + vx * t
    const cy = b.y + vy * t
    const ext = Math.max(b.sx, b.sy) * 3.2
    const x0 = Math.max(0, Math.floor(cx - ext))
    const x1 = Math.min(N - 1, Math.ceil(cx + ext))
    const y0 = Math.max(0, Math.floor(cy - ext))
    const y1 = Math.min(N - 1, Math.ceil(cy + ext))
    const cr = Math.cos(b.rot)
    const sr = Math.sin(b.rot)
    for (let j = y0; j <= y1; j++)
      for (let i = x0; i <= x1; i++) {
        const dx = i - cx
        const dy = j - cy
        const u = dx * cr + dy * sr
        const w = -dx * sr + dy * cr
        const r2 = (u / b.sx) ** 2 + (w / b.sy) ** 2
        const v = pk - 13 * r2 + (((i * 7 + j * 13 + (kind.length << 2)) % 5) - 2) * 0.6
        const idx = j * N + i
        if (v > f[idx]) f[idx] = v
      }
  }
  return f
}

function Radar({ color }: { color: string }) {
  const [kind, setKind] = useState('afternoon')
  const [t, setT] = useState(30)
  const [speed, setSpeed] = useState(25)
  const [rel, setRel] = useState('tropical')
  const [pick, setPick] = useState<[number, number]>([50, 50])
  const ref = useRef<HTMLCanvasElement>(null)
  const N = 100
  const blobs = useMemo(() => scene(kind), [kind])
  // Storm motion: towards the east for the monsoon and squall cases, north-east otherwise.
  const dir = kind === 'squall' ? 0 : kind === 'supercell' ? 0.6 : 0.35
  const vx = (speed / 60) * Math.cos(dir)
  const vy = -(speed / 60) * Math.sin(dir)
  const field = useMemo(() => radarField(kind, t, vx, vy, blobs, N), [kind, t, vx, vy, blobs])
  useEffect(() => {
    const cv = ref.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    if (!ctx) return
    const img = ctx.createImageData(N, N)
    for (let k = 0; k < N * N; k++) {
      const c = dbzColour(field[k])
      const o = k * 4
      if (c) {
        const [r, g, b] = hex(c)
        img.data[o] = r
        img.data[o + 1] = g
        img.data[o + 2] = b
        img.data[o + 3] = 235
      } else {
        img.data[o] = 28
        img.data[o + 1] = 34
        img.data[o + 2] = 44
        img.data[o + 3] = 255
      }
    }
    ctx.putImageData(img, 0, 0)
  }, [field])
  const [px, py] = pick
  const dbz = field[clamp(Math.round(py), 0, N - 1) * N + clamp(Math.round(px), 0, N - 1)]
  const series = useMemo(() => {
    const out: number[] = []
    for (let m = 0; m <= 120; m += 5) {
      const f = radarField(kind, m, vx, vy, blobs, N)
      const d = f[clamp(Math.round(py), 0, N - 1) * N + clamp(Math.round(px), 0, N - 1)]
      out.push(d > 5 ? rainRate(d, rel) : 0)
    }
    return out
  }, [kind, vx, vy, blobs, px, py, rel])
  const total = series.reduce((s, v) => s + v * (5 / 60), 0)
  const peak = Math.max(0, ...field)
  const heavy = Array.from(field).filter((v) => v >= 40).length
  const maxR = Math.max(...series, 1)
  return (
    <Card title="Weather radar: reflectivity, rain rate and storm motion" color={color} note="A synthetic radar picture (not real data): the colours show reflectivity in dBZ, the power returned by raindrops. Greens and blues mean light rain, yellow and orange moderate to heavy, red and magenta intense convective cores. Move the slider to advance time and watch cells grow, move and die, then click the image to read the reflectivity, the rain rate under the chosen Z–R relation and the rain that would fall at that point over the next two hours. The square is about 100 km across, one pixel is 1 km.">
      <div className="flex flex-wrap gap-2">
        <Pills label="scene" value={kind} onChange={setKind} options={[['afternoon', 'Afternoon storms'], ['squall', 'Squall line'], ['monsoon', 'Monsoon rain'], ['supercell', 'Supercell hook']]} />
      </div>
      <div className="flex flex-wrap gap-3">
        <Slider label="time (minutes)" value={t} min={0} max={120} step={1} onChange={setT} show={`${t} min`} />
        <Slider label="storm motion (km/h)" value={speed} min={0} max={60} step={5} onChange={setSpeed} />
      </div>
      <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <canvas ref={ref} width={N} height={N} className="block aspect-square w-full" style={{ imageRendering: 'auto' }} />
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" style={{ cursor: 'crosshair' }} onClick={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          setPick([((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 100])
        }}>
          {[25, 50].map((rad) => (
            <circle key={rad} cx={50} cy={50} r={rad} fill="none" stroke="rgba(255,255,255,.35)" strokeWidth={0.3} strokeDasharray="1 1" />
          ))}
          <line x1={50} x2={50} y1={0} y2={100} stroke="rgba(255,255,255,.2)" strokeWidth={0.2} />
          <line x1={0} x2={100} y1={50} y2={50} stroke="rgba(255,255,255,.2)" strokeWidth={0.2} />
          <text x={51} y={4} fontSize={3.5} fill="#fff">N</text>
          <circle cx={50} cy={50} r={0.9} fill="#fff" />
          <circle cx={px} cy={py} r={2} fill="none" stroke="#fff" strokeWidth={0.5} />
        </svg>
      </div>
      <Legend items={DBZ_STEPS.filter((_, i) => i % 1 === 0).map(([d, c]) => [c, `${d}`] as [string, string])} />
      <Pills label="Z–R relation" value={rel} onChange={setRel} options={[['mp', 'Marshall–Palmer'], ['nexrad', 'NEXRAD'], ['tropical', 'Tropical']]} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="reflectivity at the marker" value={dbz > 5 ? `${dbz.toFixed(0)} dBZ` : 'no echo'} tone={color} />
        <Stat label={`rain rate (${ZR[rel].a}·R^${ZR[rel].b})`} value={dbz > 5 ? `${rainRate(dbz, rel).toFixed(1)} mm/h` : '0'} />
        <Stat label="rain at the marker over 2 h" value={`${total.toFixed(1)} mm`} />
        <Stat label="peak · cells ≥ 40 dBZ" value={`${peak.toFixed(0)} dBZ · ${heavy} km²`} />
      </div>
      <svg viewBox="0 0 440 90" className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Rain rate at the marker over two hours">
        {series.map((v, i) => (
          <rect key={i} x={10 + i * 17} y={75 - (v / maxR) * 58} width={14} height={(v / maxR) * 58} fill={color} opacity={0.85} />
        ))}
        <line x1={8} x2={432} y1={75} y2={75} stroke="var(--ink)" />
        <text x={10} y={86} fontSize={9} fill="var(--ink-soft)">0 min</text>
        <text x={400} y={86} fontSize={9} fill="var(--ink-soft)">120 min</text>
        <text x={10} y={12} fontSize={9} fill="var(--ink-soft)">rain rate at the marker (peak {maxR.toFixed(0)} mm/h)</text>
      </svg>
    </Card>
  )
}

function ZrRelation({ color }: { color: string }) {
  const [dbz, setDbz] = useState(40)
  const W = 640
  const H = 220
  const M = { l: 42, r: 12, t: 12, b: 30 }
  const X = (d: number) => M.l + ((d - 5) / 60) * (W - M.l - M.r)
  const ymax = 300
  const Y = (r: number) => H - M.b - (Math.log10(Math.max(r, 0.1) / 0.1) / Math.log10(ymax / 0.1)) * (H - M.t - M.b)
  const lines = Object.entries(ZR).map(([k, v], i) => {
    const pts = Array.from({ length: 61 }, (_, d) => [5 + d, rainRate(5 + d, k)] as [number, number])
    return { k, v, pts, c: ['#1f77b4', '#e07b00', '#2ca02c'][i] }
  })
  return (
    <Card title="Z–R relations: the same echo, different rain rates" color={color} note="Radar measures reflectivity Z (mm⁶/m³, quoted in dBZ = 10 log₁₀ Z) and converts it to a rain rate R with an empirical power law Z = a·R^b. The coefficients depend on the drop-size distribution, so they differ for stratiform rain, convective rain and the tropics: at 50 dBZ the three relations differ by a factor of three. The vertical axis is logarithmic.">
      <Slider label="reflectivity (dBZ)" value={dbz} min={10} max={65} step={1} onChange={setDbz} />
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Rain rate against reflectivity">
        {[0.1, 1, 10, 100].map((v) => (
          <g key={v}>
            <line x1={M.l} x2={W - M.r} y1={Y(v)} y2={Y(v)} stroke="var(--ink-soft)" opacity={0.25} />
            <text x={M.l - 4} y={Y(v) + 3} fontSize={10} textAnchor="end" fill="var(--ink-soft)">{v}</text>
          </g>
        ))}
        {[10, 20, 30, 40, 50, 60].map((d) => (
          <text key={d} x={X(d)} y={H - 12} fontSize={10} textAnchor="middle" fill="var(--ink-soft)">{d}</text>
        ))}
        {lines.map((l) => (
          <path key={l.k} d={l.pts.map(([d, r], i) => `${i ? 'L' : 'M'}${X(d).toFixed(1)} ${Y(r).toFixed(1)}`).join(' ')} fill="none" stroke={l.c} strokeWidth={2.2} />
        ))}
        <line x1={X(dbz)} x2={X(dbz)} y1={M.t} y2={H - M.b} stroke="var(--ink)" strokeDasharray="3 3" />
        <text x={M.l + 4} y={M.t + 10} fontSize={10} fill="var(--ink-soft)">rain rate (mm/h, log scale) against dBZ</text>
      </svg>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {lines.map((l) => (
          <Stat key={l.k} label={l.v.label} value={`${rainRate(dbz, l.k).toFixed(dbz > 40 ? 0 : 1)} mm/h`} tone={l.c} />
        ))}
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Satellite
// ---------------------------------------------------------------------------------------

function satBlobs(strength: number) {
  const r = rng(4242)
  const out: { x: number; y: number; s: number; depth: number }[] = []
  for (let i = 0; i < 22; i++) out.push({ x: 8 + r() * 84, y: 8 + r() * 84, s: 3 + r() * 7, depth: r() })
  return out.map((b) => ({ ...b, depth: clamp(b.depth * strength, 0, 1) }))
}

function Satellite({ color }: { color: string }) {
  const [chan, setChan] = useState<'vis' | 'ir' | 'ir-col' | 'wv'>('ir-col')
  const [strength, setStrength] = useState(0.8)
  const [pick, setPick] = useState<[number, number]>([50, 50])
  const ref = useRef<HTMLCanvasElement>(null)
  const N = 120
  const blobs = useMemo(() => satBlobs(strength), [strength])
  const field = useMemo(() => {
    const tb = new Float32Array(N * N)
    const thick = new Float32Array(N * N)
    const wv = new Float32Array(N * N)
    for (let j = 0; j < N; j++)
      for (let i = 0; i < N; i++) {
        const x = (i / N) * 100
        const y = (j / N) * 100
        let t = 27
        let th = 0
        let w = -30
        for (const b of blobs) {
          const dx = x - b.x
          const dy = y - b.y
          const g = Math.exp(-(dx * dx + dy * dy) / (2 * b.s * b.s))
          // anvil: smeared downwind (to the east) at a warmer level
          const ax = x - (b.x + b.s * 1.4)
          const an = Math.exp(-(ax * ax) / (2 * (b.s * 2.2) ** 2) - (dy * dy) / (2 * (b.s * 0.9) ** 2))
          const top = 27 - g * (27 + 20 + 62 * b.depth) // cloud top temperature of the core
          const anvilT = -25 - 30 * b.depth
          t = Math.min(t, top, 27 - an * (27 - anvilT) * b.depth)
          th = Math.max(th, g * (0.45 + b.depth), an * 0.5 * b.depth)
          w = Math.max(w, -28 + g * 18 * (0.4 + b.depth) + an * 8)
        }
        const k = j * N + i
        tb[k] = t
        thick[k] = th
        wv[k] = w
      }
    return { tb, thick, wv }
  }, [blobs])
  useEffect(() => {
    const cv = ref.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    if (!ctx) return
    const img = ctx.createImageData(N, N)
    for (let k = 0; k < N * N; k++) {
      let rgb: [number, number, number]
      const tb = field.tb[k]
      if (chan === 'vis') {
        const v = clamp(30 + field.thick[k] * 260, 0, 255)
        rgb = [v, v, v]
      } else if (chan === 'ir') {
        const v = clamp(((30 - tb) / 100) * 255, 0, 255)
        rgb = [v, v, v]
      } else if (chan === 'wv') {
        const w = field.wv[k]
        const v = clamp(((w + 30) / 40) * 255, 0, 255)
        rgb = [v * 0.7, v * 0.85, v]
      } else {
        // enhanced infrared: warm surfaces dark, then cold cloud tops in a colour table
        const g = clamp(((30 - tb) / 60) * 150, 0, 150)
        if (tb > -30) rgb = [g, g, g]
        else if (tb > -40) rgb = [70, 140, 255]
        else if (tb > -50) rgb = [40, 200, 90]
        else if (tb > -60) rgb = [255, 235, 60]
        else if (tb > -70) rgb = [255, 140, 30]
        else if (tb > -80) rgb = [235, 40, 40]
        else rgb = [255, 255, 255]
      }
      const o = k * 4
      img.data[o] = rgb[0]
      img.data[o + 1] = rgb[1]
      img.data[o + 2] = rgb[2]
      img.data[o + 3] = 255
    }
    ctx.putImageData(img, 0, 0)
  }, [chan, field])
  const k = clamp(Math.round((pick[1] / 100) * N), 0, N - 1) * N + clamp(Math.round((pick[0] / 100) * N), 0, N - 1)
  const tb = field.tb[k]
  const height = clamp((27 - tb) / 6.2, 0, 17)
  return (
    <Card title="Satellite imagery: visible, infrared and colour-enhanced" color={color} note="A synthetic scene of tropical convection (not real data). The visible channel shows reflected sunlight, so thick cloud is bright and only works by day. The infrared channel shows brightness temperature: cold means high cloud tops, so the tallest thunderstorms are white. The enhanced infrared table colours the coldest tops: blue near −30 to −40 °C, green, yellow, orange and red for cloud tops colder than −60 °C, which in the tropics means tops above about 12 km and the heaviest rain. The water-vapour channel shows moisture in the upper troposphere. Click the image to read the cloud-top temperature and its estimated height.">
      <Pills label="channel" value={chan} onChange={setChan} options={[['vis', 'Visible'], ['ir', 'Infrared (grey)'], ['ir-col', 'Enhanced infrared'], ['wv', 'Water vapour']]} />
      <Slider label="convective intensity" value={strength} min={0.2} max={1} step={0.05} onChange={setStrength} show={strength.toFixed(2)} />
      <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <canvas ref={ref} width={N} height={N} className="block aspect-square w-full" />
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" style={{ cursor: 'crosshair' }} onClick={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          setPick([((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 100])
        }}>
          <circle cx={pick[0]} cy={pick[1]} r={2} fill="none" stroke="#fff" strokeWidth={0.6} />
        </svg>
      </div>
      <Legend items={[['#808080', 'warm: sea or low cloud'], ['#468cff', '−30 to −40 °C'], ['#28c85a', '−40 to −50'], ['#ffeb3c', '−50 to −60'], ['#ff8c1e', '−60 to −70'], ['#eb2828', '−70 to −80'], ['#ffffff', 'colder than −80']]} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="brightness temperature at the marker" value={`${tb.toFixed(0)} °C`} tone={color} />
        <Stat label="estimated cloud-top height (6.2 °C/km from a 27 °C surface)" value={`${height.toFixed(1)} km`} />
        <Stat label="what it suggests" value={tb < -60 ? 'deep convection' : tb < -35 ? 'thick high cloud' : tb < 5 ? 'mid-level cloud' : 'low cloud or clear'} />
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Wind barbs and the wind rose
// ---------------------------------------------------------------------------------------

// Draw a wind barb at (0,0) pointing from the station to the direction the wind comes from.
function barb(speedKt: number, fromDeg: number, len = 26) {
  const th = (fromDeg * Math.PI) / 180
  const dx = Math.sin(th)
  const dy = -Math.cos(th)
  const nx = -dy // perpendicular on the clockwise side (northern hemisphere convention)
  const ny = dx
  const s = Math.round(speedKt / 5) * 5
  const parts: string[] = []
  const tipX = dx * len
  const tipY = dy * len
  if (s < 5) return { d: '', circle: true }
  parts.push(`M0 0 L${tipX.toFixed(1)} ${tipY.toFixed(1)}`)
  let pos = len
  let rest = s
  const step = 4
  const flagW = 4
  const flags: string[] = []
  while (rest >= 50) {
    const x1 = dx * pos
    const y1 = dy * pos
    const x2 = dx * (pos - flagW)
    const y2 = dy * (pos - flagW)
    flags.push(`M${x1} ${y1} L${x1 + nx * 9} ${y1 + ny * 9} L${x2} ${y2} Z`)
    pos -= flagW + 1
    rest -= 50
  }
  while (rest >= 10) {
    const x = dx * pos
    const y = dy * pos
    parts.push(`M${x} ${y} L${x + nx * 9 - dx * 3} ${y + ny * 9 - dy * 3}`)
    pos -= step
    rest -= 10
  }
  if (rest >= 5) {
    if (pos === len) pos -= step
    const x = dx * pos
    const y = dy * pos
    parts.push(`M${x} ${y} L${x + nx * 4.5 - dx * 1.5} ${y + ny * 4.5 - dy * 1.5}`)
  }
  return { d: parts.join(' '), flags: flags.join(' '), circle: false }
}

function Barb({ speed, dir, x, y, len = 26, stroke = 'var(--ink)' }: { speed: number; dir: number; x: number; y: number; len?: number; stroke?: string }) {
  const b = barb(speed, dir, len)
  return (
    <g transform={`translate(${x} ${y})`}>
      {b.circle ? (
        <circle r={4} fill="none" stroke={stroke} strokeWidth={1.4} />
      ) : (
        <>
          <path d={b.d} stroke={stroke} strokeWidth={1.6} fill="none" strokeLinecap="round" />
          {b.flags && <path d={b.flags} fill={stroke} stroke={stroke} strokeWidth={1} />}
          <circle r={2} fill={stroke} />
        </>
      )}
    </g>
  )
}

const COMPASS16 = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
const compassName = (d: number) => COMPASS16[Math.round((((d % 360) + 360) % 360) / 22.5) % 16]

function WindBarbLab({ color }: { color: string }) {
  const [speed, setSpeed] = useState(25)
  const [dir, setDir] = useState(250)
  const [vary, setVary] = useState(40)
  const kt = speed
  const ms = kt * 0.5144
  const kmh = kt * 1.852
  const bft = ms < 0.3 ? 0 : ms < 1.6 ? 1 : ms < 3.4 ? 2 : ms < 5.5 ? 3 : ms < 8 ? 4 : ms < 10.8 ? 5 : ms < 13.9 ? 6 : ms < 17.2 ? 7 : ms < 20.8 ? 8 : ms < 24.5 ? 9 : ms < 28.5 ? 10 : ms < 32.7 ? 11 : 12
  const arc = (a0: number, a1: number, r: number) => {
    const p = (a: number) => [100 + r * Math.sin((a * Math.PI) / 180), 100 - r * Math.cos((a * Math.PI) / 180)]
    const [x0, y0] = p(a0)
    const [x1, y1] = p(a1)
    return `M${x0} ${y0} A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1} ${y1}`
  }
  const barbLen = 46
  return (
    <Card title="Wind barbs and the direction arc" color={color} note="Wind direction is always the direction the wind blows from: a westerly (270°) comes from the west. On a chart the barb’s shaft points toward that direction and the feathers mark the speed: each half feather is 5 knots, each full feather 10 and each flag (pennant) 50, so the barb shown is the sum. A circle means calm. The shaded arc is the variability range, as in an aviation report ‘250V310’ (direction varying between 250° and 310°).">
      <div className="flex flex-wrap gap-3">
        <Slider label="speed (knots)" value={speed} min={0} max={120} step={5} onChange={setSpeed} />
        <Slider label="direction the wind blows from (°)" value={dir} min={0} max={359} step={5} onChange={setDir} show={`${dir}° (${compassName(dir)})`} />
        <Slider label="variability (± degrees)" value={vary} min={0} max={90} step={5} onChange={setVary} />
      </div>
      <svg viewBox="0 0 200 200" className="mx-auto block h-auto w-full max-w-xs rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Compass with a wind barb">
        <circle cx={100} cy={100} r={84} fill="none" stroke="var(--ink-soft)" opacity={0.4} />
        {Array.from({ length: 16 }, (_, i) => (
          <g key={i}>
            <line x1={100 + 84 * Math.sin((i * 22.5 * Math.PI) / 180)} y1={100 - 84 * Math.cos((i * 22.5 * Math.PI) / 180)} x2={100 + (i % 4 ? 78 : 72) * Math.sin((i * 22.5 * Math.PI) / 180)} y2={100 - (i % 4 ? 78 : 72) * Math.cos((i * 22.5 * Math.PI) / 180)} stroke="var(--ink-soft)" />
            {i % 2 === 0 && (
              <text x={100 + 94 * Math.sin((i * 22.5 * Math.PI) / 180)} y={100 - 94 * Math.cos((i * 22.5 * Math.PI) / 180) + 3} fontSize={8} textAnchor="middle" fill="var(--ink-soft)">{COMPASS16[i]}</text>
            )}
          </g>
        ))}
        {vary > 0 && <path d={arc(dir - vary, dir + vary, 66)} fill="none" stroke={color} strokeWidth={9} opacity={0.35} />}
        <Barb speed={speed} dir={dir} x={100} y={100} len={barbLen} />
      </svg>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="reads as" value={`${String(dir).padStart(3, '0')}° at ${kt} kt`} tone={color} />
        <Stat label="in other units" value={`${ms.toFixed(1)} m/s · ${kmh.toFixed(0)} km/h`} />
        <Stat label="Beaufort force" value={`${bft}`} />
        <Stat label="variable report" value={vary > 0 ? `${String((dir - vary + 360) % 360).padStart(3, '0')}V${String((dir + vary) % 360).padStart(3, '0')}` : 'steady'} />
      </div>
    </Card>
  )
}

// Wind rose: 16 sectors with frequencies split by speed class. Stylised seasonal patterns for Singapore.
function roseData(kind: string): { f: number[][]; calm: number; note: string } {
  const center: Record<string, [number, number, number]> = {
    ne: [30, 40, 0.75],
    sw: [195, 45, 0.65],
    inter: [150, 85, 0.35],
    year: [20, 120, 0.3],
  }
  const [mu, sd, wet] = center[kind]
  const raw = Array.from({ length: 16 }, (_, i) => {
    const d = Math.min(Math.abs(i * 22.5 - mu), 360 - Math.abs(i * 22.5 - mu))
    return Math.exp(-(d * d) / (2 * sd * sd)) + (kind === 'inter' ? 0.15 : 0.04)
  })
  const sum = raw.reduce((s, v) => s + v, 0)
  const calm = kind === 'inter' ? 14 : kind === 'year' ? 9 : 5
  const f = raw.map((v) => {
    const tot = (v / sum) * (100 - calm)
    // split into speed classes: 0-5, 5-10, 10-15, 15+ kt
    const w = [0.34 - wet * 0.1, 0.4, 0.2 + wet * 0.05, 0.06 + wet * 0.05]
    return w.map((x) => tot * x)
  })
  const note =
    kind === 'ne'
      ? 'Northeast monsoon (about December to March): steady northerly to north-easterly winds, strongest in surges, bringing the wettest spells.'
      : kind === 'sw'
        ? 'Southwest monsoon (about June to September): south to south-westerly winds, often lighter, with Sumatra squalls in the early morning.'
        : kind === 'inter'
          ? 'Inter-monsoon months (April–May, October–November): light and variable winds with sea breezes, and afternoon thunderstorms.'
          : 'A broad pattern across the year, dominated by the two monsoons and the sea breeze.'
  return { f, calm, note }
}

function WindRose({ color }: { color: string }) {
  const [kind, setKind] = useState('ne')
  const d = useMemo(() => roseData(kind), [kind])
  const maxTotal = Math.max(...d.f.map((s) => s.reduce((a, b) => a + b, 0)))
  const R = 78
  const shades = ['#bcd7ff', '#7fb1ff', '#3b82f6', '#1d3f8f']
  const wedge = (i: number, r0: number, r1: number) => {
    const a0 = ((i * 22.5 - 9) * Math.PI) / 180
    const a1 = ((i * 22.5 + 9) * Math.PI) / 180
    const P = (r: number, a: number) => `${(100 + r * Math.sin(a)).toFixed(1)} ${(100 - r * Math.cos(a)).toFixed(1)}`
    return `M${P(r0, a0)} L${P(r1, a0)} A${r1} ${r1} 0 0 1 ${P(r1, a1)} L${P(r0, a1)} A${r0} ${r0} 0 0 0 ${P(r0, a0)} Z`
  }
  const sel = d.f.map((s) => s.reduce((a, b) => a + b, 0))
  const prev = COMPASS16[sel.indexOf(Math.max(...sel))]
  return (
    <Card title="Wind rose: where the wind comes from, and how strongly" color={color} note="A wind rose plots how often the wind blows from each of 16 directions (the petal points to where the wind comes from), stacked by speed class. These roses are stylised: they reproduce the seasonal pattern of Singapore’s monsoons and inter-monsoon, not measured frequencies. Calms are shown as a percentage in the centre.">
      <Pills label="season" value={kind} onChange={setKind} options={[['ne', 'NE monsoon'], ['sw', 'SW monsoon'], ['inter', 'Inter-monsoon'], ['year', 'Whole year']]} />
      <svg viewBox="0 0 200 200" className="mx-auto block h-auto w-full max-w-sm rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Wind rose">
        {[0.25, 0.5, 0.75, 1].map((f) => (
          <circle key={f} cx={100} cy={100} r={R * f} fill="none" stroke="var(--ink-soft)" opacity={0.25} />
        ))}
        {d.f.map((s, i) => {
          let r0 = 8
          return s.map((v, k) => {
            const r1 = r0 + (v / maxTotal) * (R - 8)
            const p = wedge(i, r0, r1)
            r0 = r1
            return <path key={`${i}-${k}`} d={p} fill={shades[k]} stroke="var(--surface)" strokeWidth={0.4} />
          })
        })}
        {COMPASS16.filter((_, i) => i % 2 === 0).map((c, k) => (
          <text key={c} x={100 + 92 * Math.sin((k * 45 * Math.PI) / 180)} y={100 - 92 * Math.cos((k * 45 * Math.PI) / 180) + 3} fontSize={9} textAnchor="middle" fill="var(--ink-soft)" fontWeight={700}>{c}</text>
        ))}
        <text x={100} y={103} fontSize={8} textAnchor="middle" fill="var(--ink-soft)">{d.calm}% calm</text>
      </svg>
      <Legend items={[[shades[0], '0–5 kt'], [shades[1], '5–10 kt'], [shades[2], '10–15 kt'], [shades[3], 'over 15 kt']]} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="most frequent direction" value={prev} tone={color} />
        <Stat label="calm" value={`${d.calm}%`} />
        <Stat label="share from the top sector" value={`${Math.max(...sel).toFixed(1)}%`} />
      </div>
      <p className="text-xs leading-relaxed" style={soft}>
        {d.note}
      </p>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Isobars, geostrophic wind and fronts
// ---------------------------------------------------------------------------------------

const GW = 80
const GH = 56
const CELL_KM = 50

function pressureField(preset: string, hc: number, lc: number): Float32Array {
  const f = new Float32Array(GW * GH)
  const systems =
    preset === 'depression'
      ? [{ x: 46, y: 26, a: lc - 1013, s: 13 }, { x: 8, y: 14, a: hc - 1013, s: 14 }, { x: 76, y: 46, a: (hc - 1013) * 0.8, s: 14 }]
      : [{ x: 22, y: 28, a: hc - 1013, s: 12 }, { x: 58, y: 28, a: lc - 1013, s: 12 }]
  for (let j = 0; j < GH; j++)
    for (let i = 0; i < GW; i++) {
      let p = 1013
      for (const s of systems) p += s.a * Math.exp(-((i - s.x) ** 2 + (j - s.y) ** 2) / (2 * s.s * s.s))
      f[j * GW + i] = p
    }
  return f
}

// Marching squares: line segments of the level in the grid.
function contourSegs(f: Float32Array, level: number): [number, number, number, number][] {
  const segs: [number, number, number, number][] = []
  const at = (i: number, j: number) => f[j * GW + i]
  const lerp = (a: number, b: number) => (level - a) / (b - a)
  for (let j = 0; j < GH - 1; j++)
    for (let i = 0; i < GW - 1; i++) {
      const v = [at(i, j), at(i + 1, j), at(i + 1, j + 1), at(i, j + 1)]
      const code = (v[0] > level ? 1 : 0) | (v[1] > level ? 2 : 0) | (v[2] > level ? 4 : 0) | (v[3] > level ? 8 : 0)
      if (code === 0 || code === 15) continue
      const T: [number, number] = [i + lerp(v[0], v[1]), j]
      const R: [number, number] = [i + 1, j + lerp(v[1], v[2])]
      const B: [number, number] = [i + lerp(v[3], v[2]), j + 1]
      const L: [number, number] = [i, j + lerp(v[0], v[3])]
      const push = (a: [number, number], b: [number, number]) => segs.push([a[0], a[1], b[0], b[1]])
      switch (code) {
        case 1: case 14: push(L, T); break
        case 2: case 13: push(T, R); break
        case 3: case 12: push(L, R); break
        case 4: case 11: push(R, B); break
        case 5: push(L, T); push(R, B); break
        case 6: case 9: push(T, B); break
        case 7: case 8: push(L, B); break
        case 10: push(T, R); push(L, B); break
      }
    }
  return segs
}

function IsobarMap({ color }: { color: string }) {
  const [preset, setPreset] = useState<'highlow' | 'depression'>('depression')
  const [hc, setHc] = useState(1028)
  const [lc, setLc] = useState(976)
  const [lat, setLat] = useState(45)
  const [fric, setFric] = useState(15)
  const [south, setSouth] = useState(false)
  const [showFronts, setShowFronts] = useState(true)
  const field = useMemo(() => pressureField(preset, hc, lc), [preset, hc, lc])
  const levels = useMemo(() => {
    const lo = Math.ceil(Math.min(...field) / 4) * 4
    const hi = Math.floor(Math.max(...field) / 4) * 4
    const out: number[] = []
    for (let l = lo; l <= hi; l += 4) out.push(l)
    return out
  }, [field])
  const paths = useMemo(() => levels.map((l) => ({ l, segs: contourSegs(field, l) })), [levels, field])
  const f = (2 * 7.292e-5 * Math.sin((lat * Math.PI) / 180)) * (south ? -1 : 1)
  const sx = 640 / GW
  const sy = 448 / GH
  // winds on a coarse grid
  const winds = useMemo(() => {
    const out: { x: number; y: number; kt: number; from: number; p: number }[] = []
    for (let j = 4; j < GH - 2; j += 8)
      for (let i = 4; i < GW - 2; i += 8) {
        const dpdx = ((field[j * GW + i + 1] - field[j * GW + i - 1]) * 100) / (2 * CELL_KM * 1000)
        const dpdj = ((field[(j + 1) * GW + i] - field[(j - 1) * GW + i]) * 100) / (2 * CELL_KM * 1000)
        const dpdy = -dpdj // north is up the screen
        let u = -dpdy / (1.2 * f)
        let v = dpdx / (1.2 * f)
        // friction: reduce speed and turn the wind across the isobars towards low pressure
        const ang = ((fric * Math.PI) / 180) * (south ? -1 : 1)
        const sp = fric > 0 ? 0.75 : 1
        const ur = (u * Math.cos(ang) - v * Math.sin(ang)) * sp
        const vr = (u * Math.sin(ang) + v * Math.cos(ang)) * sp
        u = ur
        v = vr
        const speed = Math.hypot(u, v) * 1.944
        const from = (Math.atan2(-u, -v) * 180) / Math.PI
        out.push({ x: i * sx, y: j * sy, kt: speed, from: (from + 360) % 360, p: field[j * GW + i] })
      }
    return out
  }, [field, f, fric, south, sx, sy])
  const gmax = Math.max(...winds.map((w) => w.kt))
  const lowP = Math.min(...field)
  const highP = Math.max(...field)
  const warm: [number, number][] = [[46, 26], [54, 26.5], [62, 29], [70, 34], [76, 41]]
  const cold: [number, number][] = [[46, 26], [42, 33], [36, 40], [30, 48], [26, 54]]
  return (
    <Card title="Isobars, geostrophic wind and fronts" color={color} note="Isobars join points of equal sea-level pressure; where they are close together the pressure gradient is strong and so is the wind. Away from the equator, and above the friction layer, the wind blows nearly along the isobars (the geostrophic wind) with low pressure on its left in the northern hemisphere and on its right in the southern. Friction slows the wind near the ground and turns it across the isobars towards low pressure. This is a synthetic chart on a 4,000 km grid (isobars every 4 hPa). Near the equator, including Singapore at 1°N, the Coriolis force is almost zero and the geostrophic balance fails, so winds there cannot be read from isobars in this way.">
      <div className="flex flex-wrap gap-2">
        <Pills label="chart" value={preset} onChange={setPreset} options={[['depression', 'Frontal depression'], ['highlow', 'High and low']]} />
        <Pills label="hemisphere" value={south ? 's' : 'n'} onChange={(v) => setSouth(v === 's')} options={[['n', 'Northern'], ['s', 'Southern']]} />
        {preset === 'depression' && <Btn active={showFronts} onClick={() => setShowFronts((v) => !v)}>Fronts and rain</Btn>}
      </div>
      <div className="flex flex-wrap gap-3">
        <Slider label="low-pressure centre (hPa)" value={lc} min={940} max={1008} step={2} onChange={setLc} />
        <Slider label="high-pressure centre (hPa)" value={hc} min={1016} max={1048} step={2} onChange={setHc} />
        <Slider label="latitude (°)" value={lat} min={10} max={70} step={5} onChange={setLat} />
        <Slider label="friction: turning across the isobars (°)" value={fric} min={0} max={35} step={5} onChange={setFric} />
      </div>
      <svg viewBox="0 0 640 448" className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: '#e9f1f7' }} role="img" aria-label="Synthetic surface pressure chart">
        {preset === 'depression' && showFronts && (
          <g>
            <path d={frontPoly(warm, sx, sy)} fill="none" stroke="#35d65a" strokeWidth={46} opacity={0.35} strokeLinecap="round" transform="translate(24 8)" />
            <path d={frontPoly(warm, sx, sy)} fill="none" stroke="#1fb140" strokeWidth={20} opacity={0.4} strokeLinecap="round" transform="translate(12 4)" />
            <path d={frontPoly(cold, sx, sy)} fill="none" stroke="#35d65a" strokeWidth={30} opacity={0.4} strokeLinecap="round" />
            <path d={frontPoly(cold, sx, sy)} fill="none" stroke="#ffee33" strokeWidth={10} opacity={0.55} strokeLinecap="round" />
          </g>
        )}
        {paths.map(({ l, segs }) => (
          <g key={l}>
            <path d={segs.map(([a, b, c, d]) => `M${(a * sx).toFixed(1)} ${(b * sy).toFixed(1)}L${(c * sx).toFixed(1)} ${(d * sy).toFixed(1)}`).join('')} stroke={l === 1012 ? '#1a1a1a' : '#4a5a6a'} strokeWidth={l % 20 === 0 ? 1.6 : 1} fill="none" />
            {segs.length > 0 && (() => {
              const m = segs.reduce((best, s) => (Math.abs(s[0] - 40) + Math.abs(s[1] - 52) < Math.abs(best[0] - 40) + Math.abs(best[1] - 52) ? s : best), segs[0])
              return <text x={m[0] * sx} y={m[1] * sy} fontSize={9} fill="#1a1a1a" textAnchor="middle" style={{ paintOrder: 'stroke', stroke: '#e9f1f7', strokeWidth: 3 }}>{l}</text>
            })()}
          </g>
        ))}
        {preset === 'depression' && showFronts && (
          <g>
            <FrontLine kind="warm" pts={warm.map(([x, y]) => [x * sx, y * sy])} />
            <FrontLine kind="cold" pts={cold.map(([x, y]) => [x * sx, y * sy])} />
          </g>
        )}
        {winds.map((w, i) => (
          <Barb key={i} speed={w.kt} dir={w.from} x={w.x} y={w.y} len={22} stroke="#143d73" />
        ))}
        <text x={preset === 'depression' ? 46 * sx : 58 * sx} y={(preset === 'depression' ? 26 : 28) * sy} fontSize={26} fontWeight={800} fill="#c0392b" textAnchor="middle" dominantBaseline="middle" opacity={0.85}>L</text>
        <text x={preset === 'depression' ? 8 * sx : 22 * sx} y={(preset === 'depression' ? 14 : 28) * sy} fontSize={26} fontWeight={800} fill="#2f6fdb" textAnchor="middle" dominantBaseline="middle" opacity={0.85}>H</text>
        {preset === 'depression' && (
          <text x={76 * sx} y={46 * sy} fontSize={26} fontWeight={800} fill="#2f6fdb" textAnchor="middle" dominantBaseline="middle" opacity={0.85}>H</text>
        )}
      </svg>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="lowest and highest pressure" value={`${lowP.toFixed(0)} · ${highP.toFixed(0)} hPa`} tone={color} />
        <Stat label="Coriolis parameter f" value={`${(f * 1e4).toFixed(2)} × 10⁻⁴ s⁻¹`} />
        <Stat label="strongest wind on the chart" value={`${gmax.toFixed(0)} kt`} />
        <Stat label="circulation round the low" value={south ? 'clockwise' : 'anticlockwise'} />
      </div>
    </Card>
  )
}

function frontPoly(pts: [number, number][], sx: number, sy: number) {
  return pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x * sx} ${y * sy}`).join(' ')
}

// A front drawn as a smooth line with symbols on one side. kind: cold, warm, occluded, stationary.
function FrontLine({ kind, pts }: { kind: 'cold' | 'warm' | 'occluded' | 'stationary'; pts: [number, number][] }) {
  // Resample the polyline every 30 px.
  const samples: { x: number; y: number; tx: number; ty: number }[] = []
  let acc = 14
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i]
    const [x1, y1] = pts[i + 1]
    const len = Math.hypot(x1 - x0, y1 - y0)
    const tx = (x1 - x0) / len
    const ty = (y1 - y0) / len
    let d = acc
    while (d < len) {
      samples.push({ x: x0 + tx * d, y: y0 + ty * d, tx, ty })
      d += 30
    }
    acc = d - len
  }
  const line = kind === 'cold' ? '#1f5fd1' : kind === 'warm' ? '#d62828' : kind === 'occluded' ? '#7a2fa8' : '#1f5fd1'
  const tri = (s: (typeof samples)[number], side: 1 | -1, fill: string) => {
    const nx = -s.ty * side
    const ny = s.tx * side
    const a = [s.x - s.tx * 6, s.y - s.ty * 6]
    const b = [s.x + s.tx * 6, s.y + s.ty * 6]
    const c = [s.x + nx * 11, s.y + ny * 11]
    return <polygon key={`t${s.x}${s.y}`} points={`${a.join(',')} ${b.join(',')} ${c.join(',')}`} fill={fill} />
  }
  const semi = (s: (typeof samples)[number], side: 1 | -1, fill: string) => {
    const nx = -s.ty * side
    const ny = s.tx * side
    const a = [s.x - s.tx * 6, s.y - s.ty * 6]
    const b = [s.x + s.tx * 6, s.y + s.ty * 6]
    return <path key={`s${s.x}${s.y}`} d={`M${a.join(' ')} A6 6 0 0 ${side === 1 ? 0 : 1} ${b.join(' ')} Z`} fill={fill} transform={`translate(${nx * 0.01} ${ny * 0.01})`} />
  }
  return (
    <g>
      <path d={pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ')} fill="none" stroke={line} strokeWidth={2.2} />
      {samples.map((s, i) => {
        if (kind === 'cold') return tri(s, 1, '#1f5fd1')
        if (kind === 'warm') return semi(s, 1, '#d62828')
        if (kind === 'occluded') return i % 2 ? semi(s, 1, '#7a2fa8') : tri(s, 1, '#7a2fa8')
        return i % 2 ? semi(s, -1, '#d62828') : tri(s, 1, '#1f5fd1')
      })}
    </g>
  )
}

function FrontSymbols({ color }: { color: string }) {
  const rows: { kind: 'cold' | 'warm' | 'occluded' | 'stationary'; label: string; body: string }[] = [
    { kind: 'cold', label: 'Cold front', body: 'Cold air advances and undercuts warmer air: a steep slope, a narrow band of heavy showers and thunderstorms, then a drop in temperature and a veer of the wind. Triangles point the way the front moves.' },
    { kind: 'warm', label: 'Warm front', body: 'Warm air rises over retreating cold air along a gentle slope: widespread layered cloud and steady rain ahead of the front, then a rise in temperature. Semicircles point the way it moves.' },
    { kind: 'occluded', label: 'Occluded front', body: 'The cold front has caught up with the warm front and lifted the warm air off the ground. Both symbols appear on the same side, pointing the way the front moves.' },
    { kind: 'stationary', label: 'Stationary front', body: 'A boundary between air masses that is not moving: triangles on one side and semicircles on the other, pointing opposite ways. It can bring days of cloud and rain along the boundary.' },
  ]
  return (
    <Card title="Front symbols on a weather chart" color={color} note="Fronts are drawn as a line with symbols on the side towards which the front is moving. Blue for cold fronts, red for warm fronts and purple for occluded fronts are the usual colours, but the shapes carry the meaning on a black-and-white chart. Singapore, close to the equator, has no fronts of this kind: its rain comes from convection, the monsoon and the convergence of winds, but the symbols appear on every chart of the mid-latitudes that sets the monsoon surges in motion.">
      <svg viewBox="0 0 640 320" className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: '#e9f1f7' }} role="img" aria-label="The four front symbols">
        {rows.map((r, i) => (
          <g key={r.kind}>
            <FrontLine kind={r.kind} pts={[[40, 50 + i * 72], [180, 40 + i * 72], [320, 58 + i * 72], [460, 44 + i * 72], [560, 52 + i * 72]]} />
            <text x={600} y={56 + i * 72} fontSize={11} fontWeight={700} fill="#1a1a1a" textAnchor="end">{r.label}</text>
          </g>
        ))}
      </svg>
      <div className="grid gap-2 sm:grid-cols-2">
        {rows.map((r) => (
          <div key={r.kind} className="rounded-[var(--radius)] border p-2 text-xs" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
            <p className="font-bold">{r.label}</p>
            <p style={soft}>{r.body}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Skew-T style thermodynamic diagram
// ---------------------------------------------------------------------------------------

const Rd = 287
const CP = 1004
const LV = 2.5e6
const EPS = 0.622
const es = (T: number) => 6.112 * Math.exp((17.67 * T) / (T + 243.5))
const rsat = (T: number, p: number) => (EPS * es(T)) / (p - es(T))

type Prof = [number, number, number][]
function makeProfile(sfc: number, td: number, shift: number, inv = 0, dd = 0): Prof {
  return [
    [1010, sfc, td], [950, sfc - 3.5, td - 1.5 - dd], [900, sfc - 6.5, td - 3.2 - dd], [850, sfc - 9.5 + inv, td - 5 - dd * 2], [800, sfc - 12.5 + inv, td - 8 - dd * 3],
    [700, sfc - 19 + shift + inv / 2, td - 19 - dd * 3], [600, sfc - 27 + shift, td - 28], [500, sfc - 36.5 + shift, td - 38], [400, sfc - 48 + shift, td - 51],
    [300, sfc - 64 + shift, td - 66], [250, sfc - 74 + shift, td - 76], [200, sfc - 86 + shift, td - 88], [150, sfc - 99, td - 100], [100, sfc - 111, td - 112],
  ]
}
const PRESETS: Record<string, { label: string; prof: Prof; blurb: string }> = {
  sg: { label: 'Singapore afternoon', prof: makeProfile(31, 24.5, 3), blurb: 'Hot, humid surface air under a moist, conditionally unstable column: the textbook set-up for afternoon thunderstorms.' },
  monsoon: { label: 'Monsoon surge', prof: makeProfile(27.5, 25, 16), blurb: 'Near-saturated and close to a moist adiabat: little instability, widespread rain without strong updrafts.' },
  dry: { label: 'Hot dry spell', prof: makeProfile(34, 18, 0, 5, 3), blurb: 'Warm and dry with a warm layer (an inversion) near 850 hPa: stable, so no deep convection and haze accumulates.' },
  severe: { label: 'Severe storm day', prof: makeProfile(32, 22, -5), blurb: 'Steep mid-level lapse rates over warm moist air: very large instability, as ahead of mid-latitude severe thunderstorms.' },
}

function envAt(prof: Prof, p: number): [number, number] | null {
  for (let i = 0; i < prof.length - 1; i++) {
    const [p1, t1, d1] = prof[i]
    const [p2, t2, d2] = prof[i + 1]
    if (p1 >= p && p >= p2) {
      const f = (Math.log(p) - Math.log(p1)) / (Math.log(p2) - Math.log(p1))
      return [t1 + f * (t2 - t1), d1 + f * (d2 - d1)]
    }
  }
  return null
}

function parcelPath(t0: number, td0: number, p0 = 1010) {
  const w0 = rsat(td0, p0)
  const path: [number, number][] = [[p0, t0]]
  let p = p0
  let lcl: [number, number] | null = null
  while (p > 100) {
    p -= 2
    const t = (t0 + 273.15) * Math.pow(p / p0, 0.2857) - 273.15
    if (rsat(t, p) <= w0) {
      lcl = [p, t]
      break
    }
    path.push([p, t])
  }
  if (!lcl) return { path, lcl: null as null | [number, number] }
  let T = lcl[1] + 273.15
  p = lcl[0]
  path.push([p, T - 273.15])
  while (p > 100) {
    const pn = p - 2
    const rs = rsat(T - 273.15, p)
    const d = (Rd * T + LV * rs) / (CP + (LV * LV * rs * EPS) / (Rd * T * T))
    T += d * (Math.log(pn) - Math.log(p))
    p = pn
    path.push([p, T - 273.15])
  }
  return { path, lcl }
}

function SkewT({ color }: { color: string }) {
  const [pk, setPk] = useState<keyof typeof PRESETS>('sg')
  const base = PRESETS[pk]
  const [dT, setDT] = useState(0)
  const t0 = base.prof[0][1] + dT
  const td0 = base.prof[0][2]
  const res = useMemo(() => {
    const { path, lcl } = parcelPath(t0, td0)
    let cape = 0
    let cin = 0
    let lfc: number | null = null
    let el: number | null = null
    const shade: { p: number; tp: number; te: number }[] = []
    for (let i = 0; i < path.length - 1; i++) {
      const [p1, T1] = path[i]
      const [p2, T2] = path[i + 1]
      const pm = (p1 + p2) / 2
      const e = envAt(base.prof, pm)
      if (!e || !lcl) continue
      const Tm = (T1 + T2) / 2
      const d = Rd * (Tm - e[0]) * (Math.log(p1) - Math.log(p2))
      shade.push({ p: pm, tp: Tm, te: e[0] })
      if (Tm > e[0]) {
        cape += d
        if (lfc === null) lfc = pm
        el = pm
      } else if (lfc === null && pm < lcl[0]) cin += d
    }
    return { path, lcl, cape, cin, lfc, el, shade }
  }, [t0, td0, base])
  const W = 520
  const H = 420
  const M = { l: 36, r: 14, t: 12, b: 28 }
  const pTop = 100
  const pBot = 1050
  const Yp = (p: number) => M.t + ((Math.log(p) - Math.log(pTop)) / (Math.log(pBot) - Math.log(pTop))) * (H - M.t - M.b)
  const skew = 38
  const X = (T: number, p: number) => M.l + ((T + 40 + skew * Math.log(pBot / p) / Math.log(pBot / pTop) * 1.0 - 0) / 100) * (W - M.l - M.r)
  const poly = (pts: [number, number][]) => pts.map(([p, T], i) => `${i ? 'L' : 'M'}${X(T, p).toFixed(1)} ${Yp(p).toFixed(1)}`).join(' ')
  const envT: [number, number][] = base.prof.map(([p, T]) => [p, T])
  const envD: [number, number][] = base.prof.map(([p, , D]) => [p, D])
  const levels = [1000, 850, 700, 500, 300, 200, 100]
  const heightKm = (p: number) => (44.33 * (1 - Math.pow(p / 1013.25, 0.1903)))
  return (
    <Card title="A thermodynamic diagram: will a rising parcel of air keep rising?" color={color} note="The vertical axis is pressure on a logarithmic scale (height increases upward), and temperature lines are skewed to the right so that the red temperature and green dew-point curves of the sounding stay on the page. The dashed curve is a surface parcel lifted dry-adiabatically until it saturates (the lifting condensation level, LCL) and then along a moist adiabat. Where the parcel is warmer than the surroundings it keeps accelerating upward: the shaded area is CAPE, the energy available for convection. Where it is cooler below that level, the area is CIN, the barrier that heating or lifting must overcome. This is a simplified calculation (no virtual-temperature correction) on synthetic soundings.">
      <Pills label="sounding" value={pk} onChange={(v) => { setPk(v); setDT(0) }} options={Object.entries(PRESETS).map(([k, v]) => [k, v.label] as [keyof typeof PRESETS, string])} />
      <Slider label="surface heating of the parcel (°C added)" value={dT} min={-4} max={8} step={0.5} onChange={setDT} show={`${dT >= 0 ? '+' : ''}${dT} °C`} />
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Skew-T log-p diagram">
        {levels.map((p) => (
          <g key={p}>
            <line x1={M.l} x2={W - M.r} y1={Yp(p)} y2={Yp(p)} stroke="var(--ink-soft)" opacity={0.3} />
            <text x={M.l - 4} y={Yp(p) + 3} fontSize={10} textAnchor="end" fill="var(--ink-soft)">{p}</text>
            <text x={W - M.r - 2} y={Yp(p) - 3} fontSize={9} textAnchor="end" fill="var(--ink-soft)">{heightKm(p).toFixed(1)} km</text>
          </g>
        ))}
        {[-80, -60, -40, -20, 0, 20, 40].map((T) => (
          <g key={T}>
            <line x1={X(T, pBot)} y1={Yp(pBot)} x2={X(T, pTop)} y2={Yp(pTop)} stroke="var(--ink-soft)" opacity={0.18} />
            {X(T, pBot) > M.l && X(T, pBot) < W - M.r && (
              <text x={X(T, pBot)} y={H - 12} fontSize={10} textAnchor="middle" fill="var(--ink-soft)">{T}°C</text>
            )}
          </g>
        ))}
        {res.shade.length > 1 && (
          <path d={`${res.shade.filter((s) => s.tp > s.te).map((s) => `M${X(s.te, s.p)} ${Yp(s.p)} L${X(s.tp, s.p)} ${Yp(s.p)}`).join(' ')}`} stroke="#ff7a59" strokeWidth={3} opacity={0.45} fill="none" />
        )}
        {res.shade.length > 1 && (
          <path d={`${res.shade.filter((s) => s.tp < s.te && res.lfc !== null && s.p > res.lfc).map((s) => `M${X(s.tp, s.p)} ${Yp(s.p)} L${X(s.te, s.p)} ${Yp(s.p)}`).join(' ')}`} stroke="#5aa9ff" strokeWidth={3} opacity={0.5} fill="none" />
        )}
        <path d={poly(envT)} fill="none" stroke="#d62828" strokeWidth={2.4} />
        <path d={poly(envD)} fill="none" stroke="#1f9d3a" strokeWidth={2.4} />
        <path d={poly(res.path)} fill="none" stroke="var(--ink)" strokeWidth={1.8} strokeDasharray="5 3" />
        {res.lcl && <circle cx={X(res.lcl[1], res.lcl[0])} cy={Yp(res.lcl[0])} r={4} fill="#fff" stroke="var(--ink)" />}
        <text x={M.l + 6} y={M.t + 12} fontSize={10} fill="var(--ink-soft)">red: temperature · green: dew point · dashed: parcel · orange: CAPE · blue: CIN</text>
      </svg>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="CAPE" value={`${res.cape.toFixed(0)} J/kg`} tone={color} />
        <Stat label="CIN" value={`${res.cin.toFixed(0)} J/kg`} />
        <Stat label="LCL (cloud base)" value={res.lcl ? `${res.lcl[0].toFixed(0)} hPa · ${(heightKm(res.lcl[0]) * 1000).toFixed(0)} m` : '–'} />
        <Stat label="equilibrium level (cloud top)" value={res.el ? `${res.el.toFixed(0)} hPa · ${heightKm(res.el).toFixed(1)} km` : 'no convection'} />
      </div>
      <p className="text-xs leading-relaxed" style={soft}>
        {base.blurb} CAPE above about 1,000 J/kg supports strong thunderstorms; above 2,500 J/kg is very large. The maximum updraft speed is about √(2·CAPE): {Math.sqrt(2 * Math.max(res.cape, 0)).toFixed(0)} m/s for this sounding.
      </p>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Meteogram
// ---------------------------------------------------------------------------------------

type Mg = { t: number[]; td: number[]; rain: number[]; wspd: number[]; wdir: number[] }
function meteogram(kind: string): Mg {
  const hrs = Array.from({ length: 25 }, (_, i) => i)
  const bell = (h: number, c: number, w: number) => Math.exp(-((h - c) ** 2) / (2 * w * w))
  if (kind === 'afternoon') {
    return {
      t: hrs.map((h) => 25.5 + 6 * bell(h, 13.5, 3.2) - 3.5 * bell(h, 16.2, 1)),
      td: hrs.map((h) => 24.2 - 0.4 * bell(h, 12, 3) + 0.6 * bell(h, 16, 1)),
      rain: hrs.map((h) => 38 * bell(h, 16, 0.8)),
      wspd: hrs.map((h) => 4 + 3 * bell(h, 13, 2) + 14 * bell(h, 16, 0.5)),
      wdir: hrs.map((h) => (h < 11 ? 200 : h < 15 ? 160 : h < 18 ? 120 : 200)),
    }
  }
  if (kind === 'surge') {
    return {
      t: hrs.map((h) => 25.3 + 1.6 * bell(h, 14, 4)),
      td: hrs.map(() => 24),
      rain: hrs.map((h) => 7 * bell(h, 7, 3) + 4 * bell(h, 17, 3) + 2 * bell(h, 11, 1.5)),
      wspd: hrs.map((h) => 15 + 4 * bell(h, 8, 4)),
      wdir: hrs.map(() => 40),
    }
  }
  return {
    t: hrs.map((h) => 25.5 + 5.5 * bell(h, 14, 3.5) - 2.5 * bell(h, 5, 0.9)),
    td: hrs.map((h) => 24 - 1.3 * bell(h, 14, 3.5)),
    rain: hrs.map((h) => 24 * bell(h, 5, 0.9)),
    wspd: hrs.map((h) => 5 + 16 * bell(h, 4.6, 0.7) + 3 * bell(h, 13, 2)),
    wdir: hrs.map((h) => (h < 7 ? 240 : 170)),
  }
}

function Meteogram({ color }: { color: string }) {
  const [kind, setKind] = useState('afternoon')
  const m = useMemo(() => meteogram(kind), [kind])
  const W = 640
  const x = (h: number) => 40 + (h / 24) * 580
  const cum: number[] = []
  m.rain.reduce((s, v, i) => {
    cum[i] = s + v
    return s + v
  }, 0)
  const total = m.rain.reduce((s, v) => s + v, 0)
  const tmin = 23
  const tmax = 35
  const yT = (v: number) => 20 + ((tmax - v) / (tmax - tmin)) * 110
  const yR = (v: number) => 288 - (v / 40) * 100
  return (
    <Card title="A meteogram: a day of weather at one place" color={color} note="A meteogram plots forecast or observed weather against time at a single location: temperature and dew point (top), rain rate as bars with the running total (middle), and wind as barbs along the bottom, in knots. These three synthetic days (not real observations) show the signature patterns of Singapore: the afternoon thunderstorm with a cool-down, the monsoon surge with steady moderate rain and a strong north-easterly, and the pre-dawn Sumatra squall.">
      <Pills label="day" value={kind} onChange={setKind} options={[['afternoon', 'Afternoon thunderstorm'], ['surge', 'Monsoon surge'], ['sumatra', 'Sumatra squall']]} />
      <svg viewBox={`0 0 ${W} 380`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Meteogram">
        {[0, 3, 6, 9, 12, 15, 18, 21, 24].map((h) => (
          <g key={h}>
            <line x1={x(h)} x2={x(h)} y1={16} y2={330} stroke="var(--ink-soft)" opacity={0.18} />
            <text x={x(h)} y={348} fontSize={10} textAnchor="middle" fill="var(--ink-soft)">{String(h).padStart(2, '0')}:00</text>
          </g>
        ))}
        {[24, 28, 32].map((v) => (
          <g key={v}>
            <line x1={40} x2={620} y1={yT(v)} y2={yT(v)} stroke="var(--ink-soft)" opacity={0.15} />
            <text x={36} y={yT(v) + 3} fontSize={10} textAnchor="end" fill="var(--ink-soft)">{v}°</text>
          </g>
        ))}
        <path d={m.t.map((v, h) => `${h ? 'L' : 'M'}${x(h)} ${yT(v)}`).join(' ')} fill="none" stroke="#d62828" strokeWidth={2.4} />
        <path d={m.td.map((v, h) => `${h ? 'L' : 'M'}${x(h)} ${yT(v)}`).join(' ')} fill="none" stroke="#1f9d3a" strokeWidth={2} />
        <text x={46} y={30} fontSize={10} fill="#d62828">temperature</text>
        <text x={120} y={30} fontSize={10} fill="#1f9d3a">dew point</text>
        {m.rain.map((v, h) => (
          <rect key={h} x={x(h) - 10} y={yR(v)} width={20} height={Math.max(0, 288 - yR(v))} fill={v > 20 ? '#e63b2e' : v > 8 ? '#ffb020' : v > 2 ? '#35d65a' : '#8fd8ff'} />
        ))}
        <line x1={40} x2={620} y1={288} y2={288} stroke="var(--ink)" />
        {[10, 20, 30, 40].map((v) => (
          <g key={v}>
            <line x1={40} x2={620} y1={yR(v)} y2={yR(v)} stroke="var(--ink-soft)" opacity={0.15} />
            <text x={36} y={yR(v) + 3} fontSize={10} textAnchor="end" fill="var(--ink-soft)">{v}</text>
          </g>
        ))}
        <path d={cum.map((v, h) => `${h ? 'L' : 'M'}${x(h)} ${288 - (v / Math.max(total, 1)) * 100}`).join(' ')} fill="none" stroke="var(--ink)" strokeWidth={1.6} strokeDasharray="4 3" />
        <text x={46} y={170} fontSize={10} fill="var(--ink-soft)">rain rate (mm/h): blue drizzle, green light, yellow moderate, red heavy; dashed line: running total (to {total.toFixed(0)} mm)</text>
        {m.wspd.map((v, h) => (h % 2 === 0 ? <Barb key={h} speed={v} dir={m.wdir[h]} x={x(h)} y={316} len={14} /> : null))}
        <text x={44} y={374} fontSize={10} fill="var(--ink-soft)">wind barbs (knots)</text>
      </svg>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="maximum temperature" value={`${Math.max(...m.t).toFixed(1)} °C`} tone={color} />
        <Stat label="peak rain rate" value={`${Math.max(...m.rain).toFixed(0)} mm/h`} />
        <Stat label="24-hour rain" value={`${total.toFixed(0)} mm`} />
        <Stat label="strongest wind" value={`${Math.max(...m.wspd).toFixed(0)} kt`} />
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Ensemble forecasts (the Lorenz system as a toy atmosphere)
// ---------------------------------------------------------------------------------------

function lorenz(x0: number, y0: number, z0: number, steps: number, dt = 0.01): number[] {
  let x = x0
  let y = y0
  let z = z0
  const out: number[] = []
  const f = (x: number, y: number, z: number): [number, number, number] => [10 * (y - x), x * (28 - z) - y, x * y - (8 / 3) * z]
  for (let i = 0; i <= steps; i++) {
    if (i % 10 === 0) out.push(x)
    const k1 = f(x, y, z)
    const k2 = f(x + (dt / 2) * k1[0], y + (dt / 2) * k1[1], z + (dt / 2) * k1[2])
    const k3 = f(x + (dt / 2) * k2[0], y + (dt / 2) * k2[1], z + (dt / 2) * k2[2])
    const k4 = f(x + dt * k3[0], y + dt * k3[1], z + dt * k3[2])
    x += (dt / 6) * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0])
    y += (dt / 6) * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])
    z += (dt / 6) * (k1[2] + 2 * k2[2] + 2 * k3[2] + k4[2])
  }
  return out
}

function Ensemble({ color }: { color: string }) {
  const [spread, setSpread] = useState(0.02)
  const [lead, setLead] = useState(12)
  const [members, setMembers] = useState(20)
  const runs = useMemo(() => {
    const r = rng(11)
    const base = lorenz(1, 1, 1, 2500)
    const ens = Array.from({ length: members }, () => lorenz(1 + (r() - 0.5) * 2 * spread, 1 + (r() - 0.5) * 2 * spread, 1 + (r() - 0.5) * 2 * spread, 2500))
    return { base, ens }
  }, [spread, members])
  const W = 640
  const H = 240
  const M = { l: 36, r: 12, t: 10, b: 26 }
  const n = runs.base.length
  const X = (i: number) => M.l + (i / (n - 1)) * (W - M.l - M.r)
  const Y = (v: number) => M.t + ((22 - v) / 44) * (H - M.t - M.b)
  const at = Math.min(n - 1, Math.round((lead / 25) * (n - 1)))
  const vals = runs.ens.map((e) => e[at])
  const mean = vals.reduce((s, v) => s + v, 0) / vals.length
  const sd = Math.sqrt(vals.reduce((s, v) => s + (v - mean) ** 2, 0) / vals.length)
  const pPos = vals.filter((v) => v > 0).length / vals.length
  return (
    <Card title="Ensemble forecasts: spaghetti plots and why forecasts diverge" color={color} note="A toy model of the atmosphere (the Lorenz 1963 equations, the founding example of chaos) shows why forecasters run ensembles. Each thin line is one forecast from a slightly different starting state; the thick line is the run from the ‘best’ analysis. At first the members agree, then they fan out: after a certain lead time the forecast is no better than the climate average. The spread of the ensemble is a measure of confidence, and the share of members above a threshold is a probability, as in ‘70% chance of rain’. Time here is in model units (about 1 unit per 1–2 days of real weather would be a loose analogy, not a calibrated one).">
      <div className="flex flex-wrap gap-3">
        <Slider label="initial uncertainty (±)" value={spread} min={0.001} max={0.3} step={0.001} onChange={setSpread} show={spread.toFixed(3)} />
        <Slider label="lead time (model units)" value={lead} min={0} max={25} step={0.5} onChange={setLead} />
        <Slider label="ensemble members" value={members} min={5} max={50} step={5} onChange={setMembers} />
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Spaghetti plot of ensemble members">
        <line x1={M.l} x2={W - M.r} y1={Y(0)} y2={Y(0)} stroke="var(--ink-soft)" opacity={0.4} strokeDasharray="3 3" />
        {runs.ens.map((e, k) => (
          <path key={k} d={e.map((v, i) => `${i ? 'L' : 'M'}${X(i).toFixed(1)} ${Y(v).toFixed(1)}`).join(' ')} fill="none" stroke={color} strokeWidth={1} opacity={0.4} />
        ))}
        <path d={runs.base.map((v, i) => `${i ? 'L' : 'M'}${X(i).toFixed(1)} ${Y(v).toFixed(1)}`).join(' ')} fill="none" stroke="var(--ink)" strokeWidth={2} />
        <line x1={X(at)} x2={X(at)} y1={M.t} y2={H - M.b} stroke="#d62828" strokeDasharray="4 3" />
        {[0, 5, 10, 15, 20, 25].map((t) => (
          <text key={t} x={X((t / 25) * (n - 1))} y={H - 8} fontSize={10} textAnchor="middle" fill="var(--ink-soft)">{t}</text>
        ))}
        <text x={M.l + 4} y={M.t + 10} fontSize={10} fill="var(--ink-soft)">a model variable against lead time</text>
      </svg>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="ensemble mean at the marked time" value={mean.toFixed(1)} tone={color} />
        <Stat label="spread (standard deviation)" value={sd.toFixed(1)} />
        <Stat label="members above zero" value={`${(pPos * 100).toFixed(0)}%`} />
        <Stat label="confidence" value={sd < 2 ? 'high' : sd < 6 ? 'moderate' : 'low: use probabilities'} />
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Intensity–duration–frequency curves
// ---------------------------------------------------------------------------------------

const idf = (tMin: number, retYears: number) => (1140 * (1 + 0.24 * Math.log(retYears))) / Math.pow(tMin + 10, 0.75)

function Idf({ color }: { color: string }) {
  const [dur, setDur] = useState(60)
  const [ret, setRet] = useState(10)
  const W = 640
  const H = 240
  const M = { l: 44, r: 12, t: 12, b: 30 }
  const X = (t: number) => M.l + ((Math.log10(t) - Math.log10(5)) / (Math.log10(1440) - Math.log10(5))) * (W - M.l - M.r)
  const Y = (i: number) => H - M.b - ((Math.log10(i) - Math.log10(2)) / (Math.log10(300) - Math.log10(2))) * (H - M.t - M.b)
  const rets = [2, 10, 50, 100]
  const cols = ['#4fa3ff', '#1fb140', '#e0a800', '#d62828']
  const depth = (idf(dur, ret) * dur) / 60
  return (
    <Card title="Intensity–duration–frequency curves: how heavy is a heavy rain?" color={color} note="Drainage designers do not ask how much rain will fall, but how much could fall in a given time with a given chance. An IDF curve gives the rain intensity (mm per hour) that is exceeded on average once in T years, for each duration: short bursts are far more intense than long spells. The 100-year line is not a rain that comes once a century; it is a 1% chance in any year. These curves are an illustration of the shape for a tropical city, not the official design values (see PUB’s Code of Practice on Surface Water Drainage for those). Both axes are logarithmic.">
      <div className="flex flex-wrap gap-3">
        <Slider label="duration (minutes)" value={dur} min={5} max={1440} step={5} onChange={setDur} show={dur >= 120 ? `${(dur / 60).toFixed(1)} h` : `${dur} min`} />
        <Slider label="return period (years)" value={ret} min={2} max={100} step={1} onChange={setRet} />
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="IDF curves">
        {[5, 15, 30, 60, 180, 360, 720, 1440].map((t) => (
          <g key={t}>
            <line x1={X(t)} x2={X(t)} y1={M.t} y2={H - M.b} stroke="var(--ink-soft)" opacity={0.18} />
            <text x={X(t)} y={H - 12} fontSize={10} textAnchor="middle" fill="var(--ink-soft)">{t >= 60 ? `${t / 60}h` : `${t}m`}</text>
          </g>
        ))}
        {[5, 10, 30, 100, 300].map((i) => (
          <g key={i}>
            <line x1={M.l} x2={W - M.r} y1={Y(i)} y2={Y(i)} stroke="var(--ink-soft)" opacity={0.18} />
            <text x={M.l - 4} y={Y(i) + 3} fontSize={10} textAnchor="end" fill="var(--ink-soft)">{i}</text>
          </g>
        ))}
        {rets.map((rp, k) => (
          <g key={rp}>
            <path d={Array.from({ length: 60 }, (_, i) => 5 * Math.pow(1440 / 5, i / 59)).map((t, i) => `${i ? 'L' : 'M'}${X(t).toFixed(1)} ${Y(idf(t, rp)).toFixed(1)}`).join(' ')} fill="none" stroke={cols[k]} strokeWidth={2} />
            <text x={W - M.r - 4} y={Y(idf(1440, rp)) - 4} fontSize={10} textAnchor="end" fill={cols[k]}>{rp}-yr</text>
          </g>
        ))}
        <circle cx={X(dur)} cy={Y(idf(dur, ret))} r={5} fill="#fff" stroke="var(--ink)" strokeWidth={2} />
        <text x={M.l + 4} y={M.t + 10} fontSize={10} fill="var(--ink-soft)">intensity (mm/h)</text>
      </svg>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="intensity" value={`${idf(dur, ret).toFixed(0)} mm/h`} tone={color} />
        <Stat label="rain depth in that time" value={`${depth.toFixed(0)} mm`} />
        <Stat label="chance in any one year" value={`${(100 / ret).toFixed(0)}%`} />
        <Stat label="chance in 30 years" value={`${((1 - Math.pow(1 - 1 / ret, 30)) * 100).toFixed(0)}%`} />
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Cloud cover in oktas
// ---------------------------------------------------------------------------------------

function Oktas({ color }: { color: string }) {
  const [o, setO] = useState(3)
  const code = o === 0 ? 'SKC / CLR (clear)' : o <= 2 ? 'FEW' : o <= 4 ? 'SCT (scattered)' : o <= 7 ? 'BKN (broken)' : 'OVC (overcast)'
  const wedge = (k: number) => {
    const a0 = ((k * 45 - 90) * Math.PI) / 180
    const a1 = (((k + 1) * 45 - 90) * Math.PI) / 180
    return `M50 50 L${50 + 42 * Math.cos(a0)} ${50 + 42 * Math.sin(a0)} A42 42 0 0 1 ${50 + 42 * Math.cos(a1)} ${50 + 42 * Math.sin(a1)} Z`
  }
  return (
    <Card title="Cloud cover in oktas (eighths of the sky)" color={color} note="Observers estimate how many eighths (oktas) of the sky are covered by cloud, from 0 (clear) to 8 (completely overcast), and station models fill a circle in the same proportion. Aviation reports (METAR) group the same amounts into FEW (1–2 oktas), SCT scattered (3–4), BKN broken (5–7) and OVC overcast (8), followed by the height of the base in hundreds of feet, for example BKN018 (broken at 1,800 ft). Cloud cover of 9 means the sky is obscured by fog or heavy precipitation.">
      <Slider label="cloud cover (oktas)" value={o} min={0} max={8} step={1} onChange={setO} />
      <div className="flex flex-wrap items-center gap-4">
        <svg viewBox="0 0 100 100" className="h-32 w-32" role="img" aria-label={`${o} oktas of cloud`}>
          <circle cx={50} cy={50} r={42} fill="var(--surface)" stroke="var(--ink)" strokeWidth={3} />
          {Array.from({ length: o }, (_, k) => (
            <path key={k} d={wedge(k)} fill="#566a80" />
          ))}
          <circle cx={50} cy={50} r={42} fill="none" stroke="var(--ink)" strokeWidth={3} />
        </svg>
        <div className="grid min-w-52 flex-1 grid-cols-2 gap-2">
          <Stat label="oktas" value={`${o}/8`} tone={color} />
          <Stat label="METAR group" value={code} />
          <Stat label="percent of sky" value={`${((o / 8) * 100).toFixed(0)}%`} />
          <Stat label="sky description" value={o === 0 ? 'sunny' : o <= 2 ? 'mostly sunny' : o <= 4 ? 'partly cloudy' : o <= 7 ? 'mostly cloudy' : 'cloudy'} />
        </div>
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Hovmöller diagram
// ---------------------------------------------------------------------------------------

function Hovmoller({ color }: { color: string }) {
  const [speed, setSpeed] = useState(5)
  const [wave, setWave] = useState(2)
  const [noise, setNoise] = useState(0.4)
  const ref = useRef<HTMLCanvasElement>(null)
  const NX = 180
  const NT = 120
  useEffect(() => {
    const cv = ref.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    if (!ctx) return
    const img = ctx.createImageData(NX, NT)
    const r = rng(5)
    const noiseField = Array.from({ length: NX * NT }, () => r() - 0.5)
    // phase speed in degrees of longitude per day: c (m/s) * 86400 / 111 km per degree at the equator
    const degPerDay = (speed * 86400) / 111000
    for (let t = 0; t < NT; t++)
      for (let i = 0; i < NX; i++) {
        const lon = (i / NX) * 360
        const phase = (((lon - degPerDay * (t / 1)) * wave) * Math.PI) / 180
        const v = Math.cos(phase) * Math.exp(-Math.pow((lon - 180) / 150, 2) * 0.3) + noise * noiseField[t * NX + i] * 2
        const u = clamp((v + 1.5) / 3, 0, 1)
        // brown (dry) to white to green (wet)
        const rr = u < 0.5 ? 140 + u * 2 * 115 : 255 - (u - 0.5) * 2 * 215
        const gg = u < 0.5 ? 90 + u * 2 * 165 : 255 - (u - 0.5) * 2 * 40
        const bb = u < 0.5 ? 40 + u * 2 * 215 : 255 - (u - 0.5) * 2 * 160
        const o = (t * NX + i) * 4
        img.data[o] = rr
        img.data[o + 1] = gg
        img.data[o + 2] = bb
        img.data[o + 3] = 255
      }
    ctx.putImageData(img, 0, 0)
  }, [speed, wave, noise])
  const degPerDay = (speed * 86400) / 111000
  const period = degPerDay > 0 ? 360 / wave / degPerDay : Infinity
  return (
    <Card title="A Hovmöller diagram: how weather features travel" color={color} note="A Hovmöller diagram puts longitude on the horizontal axis and time running downwards, averaged over a band of latitudes: a feature that moves east appears as a slanted stripe, and the slope is its speed. It is the standard way to show the Madden–Julian Oscillation, a slow eastward-moving band of enhanced rainfall (green here) that crosses the tropics in 30 to 60 days and modulates rain in Singapore, and equatorial waves. Here a synthetic wave pattern of chosen phase speed and wavenumber crosses 360° of longitude with random noise; the real MJO moves at about 5 m/s.">
      <div className="flex flex-wrap gap-3">
        <Slider label="eastward phase speed (m/s)" value={speed} min={-8} max={20} step={1} onChange={setSpeed} />
        <Slider label="wavenumber (waves around the globe)" value={wave} min={1} max={5} step={1} onChange={setWave} />
        <Slider label="noise" value={noise} min={0} max={1} step={0.1} onChange={setNoise} show={noise.toFixed(1)} />
      </div>
      <div className="relative mx-auto w-full overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <canvas ref={ref} width={NX} height={NT} className="block h-56 w-full" />
        <span className="absolute left-1 top-1 rounded bg-white/70 px-1 text-[10px] font-bold">time ↓ (120 days)</span>
        <span className="absolute bottom-1 right-1 rounded bg-white/70 px-1 text-[10px] font-bold">longitude → (0° to 360°)</span>
      </div>
      <Legend items={[['#8c5a28', 'dry or suppressed'], ['#ffffff', 'neutral'], ['#28a548', 'wet or enhanced']]} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="speed in degrees of longitude a day" value={`${degPerDay.toFixed(1)}°/day`} tone={color} />
        <Stat label="time for a wet phase to repeat at one place" value={Number.isFinite(period) && period > 0 ? `${period.toFixed(0)} days` : '–'} />
        <Stat label="direction" value={speed > 0 ? 'eastward' : speed < 0 ? 'westward' : 'stationary'} />
      </div>
    </Card>
  )
}

