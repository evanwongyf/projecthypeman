import { useState } from 'react'
import { Card, Grid, Pills, Slider, Stat, Vec, gridXY, soft } from './shared'

const f2 = (n: number) => (Number.isFinite(n) ? n.toFixed(2) : '–')

// ── vector operations ──────────────────────────────────────────────────────

export function VectorOps({ color }: { color: string }) {
  const [mode, setMode] = useState<'add' | 'scale' | 'dot'>('add')
  const [ax, setAx] = useState(2)
  const [ay, setAy] = useState(1)
  const [bx, setBx] = useState(1)
  const [by, setBy] = useState(2)
  const [k, setK] = useState(1.5)
  const s = gridXY(320, 4)
  const mag = (x: number, y: number) => Math.hypot(x, y)
  const dot = ax * bx + ay * by
  const angle = (Math.acos(Math.max(-1, Math.min(1, dot / (mag(ax, ay) * mag(bx, by) || 1)))) * 180) / Math.PI
  return (
    <Card title="Vector operations" color={color} note="A vector is an arrow: a size (magnitude) and a direction. Switch modes to see addition (tip-to-tail), scaling (stretching or flipping), and the dot product (how aligned two vectors are).">
      <Pills label="Operation" value={mode} options={[['add', 'Addition'], ['scale', 'Scalar multiply'], ['dot', 'Dot product']]} onChange={setMode} />
      <Grid label="Vector diagram">
        <Vec s={s} to={[ax, ay]} color="#3b6fd8" label="a" />
        {mode === 'add' && (
          <>
            <Vec s={s} from={[ax, ay]} to={[ax + bx, ay + by]} color="#e07b2a" />
            <Vec s={s} to={[bx, by]} color="#e07b2a" dashed label="b" />
            <Vec s={s} to={[ax + bx, ay + by]} color="#2f9e6e" label="a + b" />
          </>
        )}
        {mode === 'scale' && <Vec s={s} to={[k * ax, k * ay]} color="#7b4fc9" label={`${f2(k)}·a`} />}
        {mode === 'dot' && <Vec s={s} to={[bx, by]} color="#e07b2a" label="b" />}
      </Grid>
      <div className="flex flex-wrap gap-3">
        <Slider label="aₓ" value={ax} min={-4} max={4} step={0.25} onChange={setAx} />
        <Slider label="aᵧ" value={ay} min={-4} max={4} step={0.25} onChange={setAy} />
        {mode !== 'scale' && (
          <>
            <Slider label="bₓ" value={bx} min={-4} max={4} step={0.25} onChange={setBx} />
            <Slider label="bᵧ" value={by} min={-4} max={4} step={0.25} onChange={setBy} />
          </>
        )}
        {mode === 'scale' && <Slider label="scalar k" value={k} min={-2} max={2} step={0.1} onChange={setK} />}
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="a" value={`(${f2(ax)}, ${f2(ay)})`} />
        <Stat label="|a|" value={f2(mag(ax, ay))} />
        {mode === 'add' && (
          <>
            <Stat label="b" value={`(${f2(bx)}, ${f2(by)})`} />
            <Stat label="a + b" value={`(${f2(ax + bx)}, ${f2(ay + by)})`} tone={color} />
          </>
        )}
        {mode === 'scale' && (
          <>
            <Stat label="k" value={f2(k)} />
            <Stat label="k·a" value={`(${f2(k * ax)}, ${f2(k * ay)})`} tone={color} />
          </>
        )}
        {mode === 'dot' && (
          <>
            <Stat label="b" value={`(${f2(bx)}, ${f2(by)})`} />
            <Stat label="a · b" value={f2(dot)} tone={color} />
            <Stat label="angle between" value={`${f2(angle)}°`} />
          </>
        )}
      </div>
      {mode === 'dot' && <p className="text-xs" style={soft}>a · b = aₓbₓ + aᵧbᵧ = |a||b|cos(θ). Try making a and b perpendicular (90°): the dot product should land on 0.</p>}
    </Card>
  )
}

// ── matrix transform ───────────────────────────────────────────────────────

export function MatrixTransform({ color }: { color: string }) {
  const [p, setP] = useState(1)
  const [q, setQ] = useState(0)
  const [r, setR] = useState(0)
  const [u, setU] = useState(1)
  const s = gridXY(320, 4)
  const det = p * u - q * r
  const corners: [number, number][] = [[0, 0], [1, 0], [1, 1], [0, 1]]
  const transformed = corners.map(([x, y]) => [p * x + q * y, r * x + u * y] as [number, number])
  const path = (pts: [number, number][]) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${s(x)},${s(-y)}`).join(' ') + ' Z'
  const presets: [string, [number, number, number, number]][] = [
    ['identity', [1, 0, 0, 1]],
    ['scale ×2', [2, 0, 0, 2]],
    ['rotate 90°', [0, -1, 1, 0]],
    ['shear', [1, 0.8, 0, 1]],
    ['flip x', [-1, 0, 0, 1]],
    ['flatten', [1, 0, 0, 0]],
  ]
  return (
    <Card title="Matrix transform: what a matrix does to space" color={color} note="A 2×2 matrix moves every point in the plane at once. The pale square is the original unit square; the solid shape is where the matrix sends it. Its area is scaled by exactly |determinant|, and a negative determinant means the shape gets flipped (mirrored), not just stretched.">
      <div className="flex flex-wrap gap-1.5">
        {presets.map(([name, [pp, qq, rr, uu]]) => (
          <button
            key={name}
            type="button"
            onClick={() => { setP(pp); setQ(qq); setR(rr); setU(uu) }}
            className="rounded-full border px-3 py-1 text-xs font-bold pointer-coarse:min-h-10"
            style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}
          >
            {name}
          </button>
        ))}
      </div>
      <Grid label="Matrix transformation of the unit square">
        <path d={path(corners)} fill="var(--ink)" opacity={0.08} stroke="var(--ink)" strokeDasharray="4 3" />
        <path d={path(transformed)} fill={color} opacity={0.3} stroke={color} strokeWidth={2} />
        <Vec s={s} to={[p, r]} color="#3b6fd8" label="col 1" />
        <Vec s={s} to={[q, u]} color="#e07b2a" label="col 2" />
      </Grid>
      <div className="mx-auto flex items-center gap-2">
        <span aria-hidden className="self-stretch border-y-2 border-l-2 pl-0.5" style={{ borderColor: 'var(--line)' }} />
        <div className="grid max-w-[9rem] grid-cols-2 gap-1.5 font-mono text-sm">
          {([['p', p, setP], ['q', q, setQ], ['r', r, setR], ['u', u, setU]] as const).map(([lbl, val, set]) => (
            <label key={lbl} className="flex flex-col items-center gap-0.5 text-[10px] font-bold" style={soft}>
              {lbl}
              <input type="number" value={val} step={0.1} onChange={(e) => set(Number(e.target.value))} className="input-field w-full text-center" />
            </label>
          ))}
        </div>
        <span aria-hidden className="self-stretch border-y-2 border-r-2 pr-0.5" style={{ borderColor: 'var(--line)' }} />
      </div>
      <p className="text-center text-xs" style={soft}>
        x′ = p·x + q·y, &nbsp; y′ = r·x + u·y
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="determinant" value={f2(det)} tone={color} />
        <Stat label="area scale factor" value={`${f2(Math.abs(det))}×`} />
        <Stat label="orientation" value={det > 0 ? 'preserved' : det < 0 ? 'flipped' : 'collapsed (det = 0)'} />
      </div>
    </Card>
  )
}
