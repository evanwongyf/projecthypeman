import { useState } from 'react'
import { PlotChart } from '../finance/PlotChart'
import { Card, Pills, Slider, Stat, soft } from './shared'

const f2 = (n: number) => (Number.isFinite(n) ? n.toFixed(2) : '–')
const f4 = (n: number) => (Number.isFinite(n) ? n.toFixed(4) : '–')

// ── function explorer ──────────────────────────────────────────────────────

type Family = 'linear' | 'quadratic' | 'exponential' | 'log'

export function FunctionExplorer({ color }: { color: string }) {
  const [family, setFamily] = useState<Family>('linear')
  const [m, setM] = useState(1)
  const [b, setB] = useState(2)
  const [a, setA] = useState(1)
  const [c, setC] = useState(0)
  const [base, setBase] = useState(2)

  let f: (x: number) => number
  let eqn: string
  let points: { x: number; y: number; label: string }[] = []
  let vlines: { x: number; label?: string }[] = []
  let readout: [string, string][] = []

  if (family === 'linear') {
    f = (x) => m * x + b
    eqn = `y = ${f2(m)}x ${b >= 0 ? '+' : '−'} ${f2(Math.abs(b))}`
    const root = m !== 0 ? -b / m : NaN
    points = [{ x: 0, y: b, label: `y-intercept (0, ${f2(b)})` }]
    if (Number.isFinite(root)) points.push({ x: root, y: 0, label: `root (${f2(root)}, 0)` })
    readout = [['slope (m)', f2(m)], ['y-intercept (b)', f2(b)], ['root', Number.isFinite(root) ? f2(root) : 'none']]
  } else if (family === 'quadratic') {
    f = (x) => a * x * x + m * x + b
    eqn = `y = ${f2(a)}x² ${m >= 0 ? '+' : '−'} ${f2(Math.abs(m))}x ${b >= 0 ? '+' : '−'} ${f2(Math.abs(b))}`
    const vx = a !== 0 ? -m / (2 * a) : 0
    const vy = f(vx)
    const disc = m * m - 4 * a * b
    points = [{ x: vx, y: vy, label: `vertex (${f2(vx)}, ${f2(vy)})` }]
    if (disc > 0 && a !== 0) {
      const r1 = (-m + Math.sqrt(disc)) / (2 * a)
      const r2 = (-m - Math.sqrt(disc)) / (2 * a)
      points.push({ x: r1, y: 0, label: `root ${f2(r1)}` }, { x: r2, y: 0, label: `root ${f2(r2)}` })
    }
    readout = [
      ['vertex', `(${f2(vx)}, ${f2(vy)})`],
      ['discriminant b² − 4ac', f2(disc)],
      ['roots', disc > 0 ? '2 real' : disc === 0 ? '1 real (repeated)' : 'none real'],
      ['opens', a > 0 ? 'upward (a > 0)' : a < 0 ? 'downward (a < 0)' : 'neither (a = 0: not quadratic)'],
    ]
  } else if (family === 'exponential') {
    f = (x) => a * base ** x
    eqn = `y = ${f2(a)} · ${f2(base)}ˣ`
    points = [{ x: 0, y: a, label: `y-intercept (0, ${f2(a)})` }]
    readout = [
      ['y-intercept', f2(a)],
      ['base', f2(base)],
      ['behaviour', base > 1 ? 'growth: doubles/multiplies as x rises' : base > 0 && base < 1 ? 'decay: shrinks towards 0' : 'undefined for base ≤ 0'],
      ['horizontal asymptote', 'y = 0'],
    ]
  } else {
    f = (x) => (x > 0 ? a * (Math.log(x) / Math.log(base)) + c : NaN)
    eqn = `y = ${f2(a)} · log_${f2(base)}(x) ${c >= 0 ? '+' : '−'} ${f2(Math.abs(c))}`
    vlines = [{ x: 0, label: 'undefined for x ≤ 0' }]
    const root = base ** (-c / a)
    points = Number.isFinite(root) && root > 0 ? [{ x: root, y: 0, label: `root (${f2(root)}, 0)` }] : []
    readout = [
      ['domain', 'x > 0'],
      ['root', Number.isFinite(root) && root > 0 ? f2(root) : 'none'],
      ['vertical asymptote', 'x = 0'],
      ['behaviour', a > 0 ? 'rises slowly, without bound' : 'falls slowly, without bound'],
    ]
  }

  return (
    <Card title="Function explorer" color={color} note="Change the family and the sliders, and watch the equation, the shape and its key features (roots, vertex, asymptotes) update together.">
      <Pills label="Family" value={family} options={[['linear', 'Linear'], ['quadratic', 'Quadratic'], ['exponential', 'Exponential'], ['log', 'Logarithmic']]} onChange={setFamily} />
      <p className="rounded-[var(--radius)] px-3 py-2 text-center font-mono text-base font-bold" style={{ background: 'var(--paper-2)' }}>
        {eqn}
      </p>
      <PlotChart
        block={{
          t: 'plot',
          x: [-8, 8],
          y: [-8, 8],
          curves: [{ f, color }],
          points,
          vlines,
        }}
      />
      <div className="flex flex-wrap gap-3">
        {family === 'linear' && (
          <>
            <Slider label="slope (m)" value={m} min={-3} max={3} step={0.1} onChange={setM} />
            <Slider label="intercept (b)" value={b} min={-6} max={6} step={0.5} onChange={setB} />
          </>
        )}
        {family === 'quadratic' && (
          <>
            <Slider label="a (x²)" value={a} min={-2} max={2} step={0.1} onChange={setA} />
            <Slider label="b (x)" value={m} min={-6} max={6} step={0.5} onChange={setM} />
            <Slider label="c (constant)" value={b} min={-6} max={6} step={0.5} onChange={setB} />
          </>
        )}
        {family === 'exponential' && (
          <>
            <Slider label="a (start value)" value={a} min={0.2} max={4} step={0.1} onChange={setA} />
            <Slider label="base" value={base} min={0.3} max={3} step={0.1} onChange={setBase} />
          </>
        )}
        {family === 'log' && (
          <>
            <Slider label="a (scale)" value={a} min={-3} max={3} step={0.1} onChange={setA} />
            <Slider label="base" value={base} min={1.2} max={10} step={0.1} onChange={setBase} />
            <Slider label="c (shift)" value={c} min={-6} max={6} step={0.5} onChange={setC} />
          </>
        )}
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {readout.map(([k, v]) => (
          <Stat key={k} label={k} value={v} tone={color} />
        ))}
      </div>
    </Card>
  )
}

// ── limit explorer ─────────────────────────────────────────────────────────

const LIMIT_FNS: Record<string, { f: (x: number) => number; a: number; label: string; limit: number | null; note: string }> = {
  hole: { f: (x) => (x === 1 ? NaN : (x * x - 1) / (x - 1)), a: 1, label: '(x² − 1) / (x − 1)', limit: 2, note: 'Undefined exactly at x = 1 (0/0), but every value nearby is close to 2: a removable hole.' },
  sinc: { f: (x) => (x === 0 ? NaN : Math.sin(x) / x), a: 0, label: 'sin(x) / x', limit: 1, note: 'The famous limit behind the derivative of sin(x). Undefined at 0, but approaches 1 from both sides.' },
  blowup: { f: (x) => 1 / x, a: 0, label: '1 / x', limit: null, note: 'Shoots to +∞ from the right and −∞ from the left: the two one-sided limits disagree, so the limit does not exist.' },
  step: { f: (x) => (x < 0 ? -1 : 1), a: 0, label: 'step(x): −1 if x<0, else 1', limit: null, note: 'Jumps from −1 to 1 at x = 0. The left and right limits are different numbers, so the overall limit does not exist.' },
}

export function LimitExplorer({ color }: { color: string }) {
  const [key, setKey] = useState<keyof typeof LIMIT_FNS>('hole')
  const [h, setH] = useState(1)
  const { f, a, label, limit, note } = LIMIT_FNS[key]
  const left = f(a - h)
  const right = f(a + h)
  return (
    <Card title="Limit explorer: what happens as x approaches a?" color={color} note={note}>
      <Pills label="Function" value={key} options={[['hole', '(x²−1)/(x−1)'], ['sinc', 'sin(x)/x'], ['blowup', '1/x'], ['step', 'step(x)']]} onChange={(k) => { setKey(k); setH(1) }} />
      <PlotChart
        block={{
          t: 'plot',
          title: `f(x) = ${label}, approaching a = ${a}`,
          x: [a - 2.2, a + 2.2],
          y: [-4, 4],
          curves: [{ f, color }],
          vlines: [{ x: a - h, label: 'a − h' }, { x: a + h, label: 'a + h' }],
          points: limit !== null ? [{ x: a, y: limit, label: `limit = ${limit}` }] : [],
          shade: [{ from: a - h, to: a + h, color: 'var(--mint)' }],
        }}
      />
      <Slider label="distance from a (h)" value={h} min={0.02} max={1.5} step={0.02} onChange={setH} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label={`f(a − h) = f(${f2(a - h)})`} value={f4(left)} />
        <Stat label={`f(a + h) = f(${f2(a + h)})`} value={f4(right)} />
        <Stat label="left limit (h → 0⁻)" value={limit !== null ? f2(limit) : 'see graph'} tone={color} />
        <Stat label="right limit (h → 0⁺)" value={limit !== null ? f2(limit) : 'see graph'} tone={color} />
      </div>
      <p className="text-xs" style={soft}>Drag h towards 0 and watch f(a − h) and f(a + h) in the table above: do they converge to the same number?</p>
    </Card>
  )
}

// ── derivative explorer ────────────────────────────────────────────────────

const DERIV_FNS: Record<string, { f: (x: number) => number; fp: (x: number) => number; label: string }> = {
  square: { f: (x) => x * x, fp: (x) => 2 * x, label: 'x²' },
  cube: { f: (x) => x ** 3 / 4, fp: (x) => (3 * x * x) / 4, label: 'x³/4' },
  sin: { f: Math.sin, fp: Math.cos, label: 'sin(x)' },
  exp: { f: (x) => Math.exp(x) / 3, fp: (x) => Math.exp(x) / 3, label: 'eˣ/3' },
}

export function DerivativeExplorer({ color }: { color: string }) {
  const [key, setKey] = useState<keyof typeof DERIV_FNS>('square')
  const [a, setA] = useState(1)
  const [h, setH] = useState(1.5)
  const { f, fp, label } = DERIV_FNS[key]
  const secantSlope = (f(a + h) - f(a)) / h
  const trueSlope = fp(a)
  const secant = (x: number) => f(a) + secantSlope * (x - a)
  const tangent = (x: number) => f(a) + trueSlope * (x - a)
  return (
    <Card title="From secant to tangent: what a derivative is" color={color} note="The secant line (orange) joins (a, f(a)) and (a+h, f(a+h)). As h shrinks towards 0, the secant's slope converges to the tangent line's slope (purple, dashed): the derivative f′(a).">
      <Pills label="Function" value={key} options={[['square', 'x²'], ['cube', 'x³/4'], ['sin', 'sin(x)'], ['exp', 'eˣ/3']]} onChange={setKey} />
      <PlotChart
        block={{
          t: 'plot',
          title: `f(x) = ${label}`,
          x: [-4, 4],
          y: [-4, 4],
          curves: [
            { f, color },
            { f: secant, color: '#e07b2a', label: 'secant' },
            { f: tangent, color: '#7b4fc9', dashed: true, label: 'tangent' },
          ],
          points: [{ x: a, y: f(a), label: `a = ${f2(a)}` }, { x: a + h, y: f(a + h), label: `a+h = ${f2(a + h)}` }],
        }}
      />
      <div className="flex flex-wrap gap-3">
        <Slider label="point a" value={a} min={-3} max={3} step={0.1} onChange={setA} />
        <Slider label="secant distance (h)" value={h} min={0.05} max={2.5} step={0.05} onChange={setH} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="secant slope = Δy/Δx" value={f4(secantSlope)} />
        <Stat label="true slope f′(a)" value={f4(trueSlope)} tone={color} />
        <Stat label="difference" value={f4(Math.abs(secantSlope - trueSlope))} />
        <Stat label="h" value={f4(h)} />
      </div>
    </Card>
  )
}

// ── Riemann sums ───────────────────────────────────────────────────────────

const RSUM_FNS: Record<string, { f: (x: number) => number; label: string; a: number; b: number }> = {
  square: { f: (x) => x * x + 0.5, label: 'x² + 0.5', a: 0, b: 3 },
  sin: { f: (x) => 2 + Math.sin(x), label: '2 + sin(x)', a: 0, b: 6 },
  line: { f: (x) => 0.6 * x + 1, label: '0.6x + 1', a: 0, b: 5 },
}

function exactIntegral(f: (x: number) => number, a: number, b: number, n = 4000) {
  let s = 0
  const dx = (b - a) / n
  for (let i = 0; i < n; i++) s += f(a + (i + 0.5) * dx) * dx
  return s
}

export function RiemannSum({ color }: { color: string }) {
  const [key, setKey] = useState<keyof typeof RSUM_FNS>('square')
  const [n, setN] = useState(6)
  const [method, setMethod] = useState<'left' | 'right' | 'mid'>('left')
  const { f, label, a, b } = RSUM_FNS[key]
  const dx = (b - a) / n
  const sampleAt = (i: number) => (method === 'left' ? a + i * dx : method === 'right' ? a + (i + 1) * dx : a + (i + 0.5) * dx)
  const heights = Array.from({ length: n }, (_, i) => f(sampleAt(i)))
  const sum = heights.reduce((s, h) => s + h * dx, 0)
  const exact = exactIntegral(f, a, b)
  const W = 560
  const H = 300
  const M = { l: 40, r: 16, t: 16, b: 32 }
  const maxY = Math.max(...Array.from({ length: 60 }, (_, i) => f(a + ((b - a) * i) / 59)), 1) * 1.15
  const sx = (x: number) => M.l + ((x - a) / (b - a)) * (W - M.l - M.r)
  const sy = (y: number) => H - M.b - (Math.max(0, y) / maxY) * (H - M.t - M.b)
  let path = ''
  for (let k = 0; k <= 200; k++) {
    const xv = a + ((b - a) * k) / 200
    path += `${k ? 'L' : 'M'}${sx(xv).toFixed(1)},${sy(f(xv)).toFixed(1)}`
  }
  return (
    <Card title="Riemann sums: area as a limit of rectangles" color={color} note="Each rectangle's height is the function at one sample point in its slice; summing their areas approximates the area under the curve. As n grows and the rectangles narrow, the sum converges to the exact integral.">
      <Pills label="Function" value={key} options={[['square', 'x² + 0.5'], ['sin', '2 + sin(x)'], ['line', '0.6x + 1']]} onChange={(k) => { setKey(k); setN(6) }} />
      <Pills label="Sample point" value={method} options={[['left', 'Left endpoint'], ['mid', 'Midpoint'], ['right', 'Right endpoint']]} onChange={setMethod} />
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Riemann sum rectangles under a curve">
        {heights.map((h, i) => (
          <rect key={i} x={sx(a + i * dx)} y={sy(Math.max(0, h))} width={sx(a + (i + 1) * dx) - sx(a + i * dx)} height={sy(0) - sy(Math.max(0, h))} fill={color} opacity={0.35} stroke="var(--ink)" strokeWidth={1} />
        ))}
        <path d={path} fill="none" stroke="var(--ink)" strokeWidth={2.5} />
        <line x1={M.l} x2={W - M.r} y1={sy(0)} y2={sy(0)} stroke="var(--ink)" strokeWidth={1.3} />
        <line x1={M.l} x2={M.l} y1={M.t} y2={H - M.b} stroke="var(--ink)" strokeWidth={1.3} />
        <text x={(M.l + W - M.r) / 2} y={H - 6} fontSize={11} textAnchor="middle" fill="var(--ink-soft)">x, from {a} to {b}: f(x) = {label}</text>
      </svg>
      <Slider label="number of rectangles (n)" value={n} min={1} max={60} step={1} onChange={setN} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label={`${method} sum`} value={f4(sum)} tone={color} />
        <Stat label="exact integral" value={f4(exact)} />
        <Stat label="error" value={f4(Math.abs(sum - exact))} />
      </div>
    </Card>
  )
}
