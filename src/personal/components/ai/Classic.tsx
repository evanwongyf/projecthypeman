import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { PlotChart } from '../finance/PlotChart'
import { gauss, makeClusters, makeCurve, makeData, makeLine } from '../../lib/ai/data'
import type { Dataset } from '../../lib/ai/data'
import { rng } from '../../lib/finance/series'
import {
  accuracy, assign, buildForest, buildTree, confusion, forestProb, inertia, leastSquares, leaves, linregStep, mse, nearest, pca2,
  perceptronUpdate, perceptronWrong, polyfit, projectedVariance, r2, rocCurve, trainSvm, treeProb, update,
} from '../../lib/ai/models'
import type { Line, Logit, TreeNode, XY } from '../../lib/ai/models'
import { Boundary, Btn, C0, C1, Card, Field, Legend, PALETTE, Pills, Points, Regions, Slider, Stat, S, soft, sx, sy, useTicker } from './shared'

const f3 = (n: number) => (Number.isFinite(n) ? n.toFixed(3) : '–')
const pct = (n: number) => `${(n * 100).toFixed(1)}%`

const DATASETS: [Dataset, string][] = [
  ['blobs', 'Blobs'],
  ['moons', 'Moons'],
  ['circles', 'Circles'],
  ['xor', 'XOR'],
  ['spiral', 'Spiral'],
]

// ── 1D gradient descent ────────────────────────────────────────────────────

const LOSSES = {
  bowl: { f: (w: number) => (w - 1) ** 2, label: 'Smooth bowl: L(w) = (w − 1)²', y: [0, 16] as [number, number] },
  bumpy: { f: (w: number) => 0.25 * (w - 1) ** 2 + Math.sin(2.2 * w) + 1.2, label: 'Bumpy: several local minima', y: [0, 6] as [number, number] },
}

export function GradientDescentLab({ color }: { color: string }) {
  const [kind, setKind] = useState<keyof typeof LOSSES>('bowl')
  const [lr, setLr] = useState(0.1)
  const [start, setStart] = useState(-2.5)
  const [trail, setTrail] = useState<number[]>([-2.5])
  const [on, setOn] = useState(false)
  const L = LOSSES[kind]
  const grad = (w: number) => (L.f(w + 1e-4) - L.f(w - 1e-4)) / 2e-4
  const w = trail[trail.length - 1]
  const step = () => setTrail((t) => {
    const cur = t[t.length - 1]
    const next = cur - lr * grad(cur)
    if (!Number.isFinite(next) || Math.abs(next) > 50 || t.length > 80) {
      setOn(false)
      return t
    }
    return [...t, next]
  })
  useTicker(on, 350, step)
  const reset = (s = start, k = kind) => {
    setOn(false)
    setTrail([s])
    setKind(k)
  }
  const shown = trail.filter((v) => v > -3.2 && v < 5.2)
  return (
    <Card title="Gradient descent, step by step" color={color} note="Each step moves w downhill by the learning rate times the slope. Too small and it crawls; too large (try 1.0 on the bowl) and it overshoots back and forth or flies off. On the bumpy curve, where you start decides which valley you end in.">
      <Pills label="Loss" value={kind} options={[['bowl', 'Smooth bowl'], ['bumpy', 'Bumpy (non-convex)']]} onChange={(k) => reset(start, k)} />
      <PlotChart
        block={{
          t: 'plot',
          title: L.label,
          x: [-3, 5],
          y: L.y,
          xLabel: 'weight w',
          yLabel: 'loss L(w)',
          curves: [{ f: L.f, color: '#7b4fc9' }],
          data: [{ pts: shown.map((v) => [v, L.f(v)] as [number, number]), color: '#d9534f', dots: true }],
          points: [{ x: Math.max(-3, Math.min(5, w)), y: Math.min(L.y[1], L.f(w)), label: `step ${trail.length - 1}` }],
        }}
      />
      <div className="flex flex-wrap gap-3">
        <Slider label="Learning rate η" value={lr} min={0.01} max={1.1} step={0.01} onChange={setLr} />
        <Slider label="Starting weight" value={start} min={-3} max={5} step={0.1} onChange={(s) => { setStart(s); reset(s) }} />
      </div>
      <div className="flex flex-wrap gap-2">
        <Btn onClick={() => setOn(!on)} active={on}>{on ? '❚❚ Pause' : '▶ Play'}</Btn>
        <Btn onClick={step}>Step</Btn>
        <Btn onClick={() => reset()}>↺ Reset</Btn>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="w" value={f3(w)} />
        <Stat label="L(w)" value={f3(L.f(w))} />
        <Stat label="slope L′(w)" value={f3(grad(w))} />
        <Stat label="next w = w − η·L′(w)" value={f3(w - lr * grad(w))} tone={color} />
      </div>
    </Card>
  )
}

// ── optimisers on a long, narrow valley ───────────────────────────────────

const OA = 0.02
const OB = 2
const ofn = (x: number, y: number) => 0.5 * (OA * x * x + OB * y * y)
const ogr = (x: number, y: number): [number, number] => [OA * x, OB * y]

function optimise(kind: 'sgd' | 'momentum' | 'adam', lr: number, steps = 60): [number, number][] {
  let x = -2.8
  let y = 0.6
  let vx = 0
  let vy = 0
  let mx = 0
  let my = 0
  let sx2 = 0
  let sy2 = 0
  const out: [number, number][] = [[x, y]]
  for (let t = 1; t <= steps; t++) {
    const [gx, gy] = ogr(x, y)
    if (kind === 'sgd') {
      x -= lr * gx
      y -= lr * gy
    } else if (kind === 'momentum') {
      vx = 0.9 * vx + gx
      vy = 0.9 * vy + gy
      x -= lr * 0.3 * vx
      y -= lr * 0.3 * vy
    } else {
      mx = 0.9 * mx + 0.1 * gx
      my = 0.9 * my + 0.1 * gy
      sx2 = 0.999 * sx2 + 0.001 * gx * gx
      sy2 = 0.999 * sy2 + 0.001 * gy * gy
      const mhx = mx / (1 - 0.9 ** t)
      const mhy = my / (1 - 0.9 ** t)
      x -= (lr * 0.12 * mhx) / (Math.sqrt(sx2 / (1 - 0.999 ** t)) + 1e-8)
      y -= (lr * 0.12 * mhy) / (Math.sqrt(sy2 / (1 - 0.999 ** t)) + 1e-8)
    }
    out.push([Math.max(-9, Math.min(9, x)), Math.max(-9, Math.min(9, y))])
  }
  return out
}

export function OptimizerLab({ color }: { color: string }) {
  const [lr, setLr] = useState(0.95)
  const [n, setN] = useState(0)
  const [on, setOn] = useState(false)
  useTicker(on, 120, () => setN((k) => (k >= 60 ? (setOn(false), k) : k + 1)))
  const W = 480
  const H = 260
  const px = (x: number) => ((x + 3.2) / 6.4) * W
  const py = (y: number) => H / 2 - (y / 0.8) * (H / 2)
  const paths = { sgd: optimise('sgd', lr), momentum: optimise('momentum', lr), adam: optimise('adam', lr) }
  const cols = { sgd: '#d9534f', momentum: '#2f9e6e', adam: '#7b4fc9' }
  return (
    <Card title="Optimisers racing down a narrow valley" color={color} note="The loss is steep across the valley and shallow along it. Plain gradient descent zigzags across; momentum builds up speed along the valley floor; Adam rescales each direction by its recent gradient size, so it heads more directly to the minimum (the cross).">
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Contour plot with three optimiser paths">
        {[0.0004, 0.0025, 0.01, 0.0225, 0.09, 0.2, 0.36, 0.56].map((c) => (
          <ellipse key={c} cx={px(0)} cy={py(0)} rx={(Math.sqrt((2 * c) / OA) / 6.4) * W} ry={(Math.sqrt((2 * c) / OB) / 0.8) * (H / 2)} fill="none" stroke="var(--ink)" strokeOpacity={0.18} />
        ))}
        <text x={px(0)} y={py(0) + 5} textAnchor="middle" fontSize={16} fontWeight={700}>×</text>
        {(Object.keys(paths) as (keyof typeof paths)[]).map((k) => (
          <g key={k}>
            <polyline points={paths[k].slice(0, n + 1).map(([x, y]) => `${px(x)},${py(y)}`).join(' ')} fill="none" stroke={cols[k]} strokeWidth={2} />
            {(() => {
              const [x, y] = paths[k][Math.min(n, 60)]
              return <circle cx={px(x)} cy={py(y)} r={5} fill={cols[k]} stroke="var(--ink)" />
            })()}
          </g>
        ))}
      </svg>
      <Legend items={[[cols.sgd, 'Gradient descent'], [cols.momentum, 'Momentum (β = 0.9)'], [cols.adam, 'Adam']]} />
      <div className="flex flex-wrap items-end gap-3">
        <Slider label="Learning rate (relative)" value={lr} min={0.2} max={1.05} step={0.05} onChange={(v) => { setLr(v); setN(0) }} />
        <div className="flex gap-2">
          <Btn onClick={() => { if (n >= 60) setN(0); setOn(!on) }} active={on}>{on ? '❚❚ Pause' : '▶ Race'}</Btn>
          <Btn onClick={() => { setOn(false); setN(0) }}>↺ Reset</Btn>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {(Object.keys(paths) as (keyof typeof paths)[]).map((k) => {
          const [x, y] = paths[k][Math.min(n, 60)]
          return <Stat key={k} label={`${k} loss`} value={ofn(x, y).toFixed(4)} tone={cols[k]} />
        })}
      </div>
    </Card>
  )
}

// ── linear regression ─────────────────────────────────────────────────────

export function LinRegLab({ color }: { color: string }) {
  const [pts, setPts] = useState(() => makeLine())
  const [m, setM] = useState<Line>({ w: 0, b: 0 })
  const [steps, setSteps] = useState(0)
  const [on, setOn] = useState(false)
  const [resid, setResid] = useState(true)
  const lr = 0.012
  useTicker(on, 60, () => {
    setM((cur) => {
      let next = cur
      for (let i = 0; i < 5; i++) next = linregStep(pts, next, lr)
      return next
    })
    setSteps((s) => s + 5)
  })
  const best = leastSquares(pts)
  const W = 480
  const H = 300
  const px = (x: number) => 30 + (x / 10) * (W - 40)
  const py = (y: number) => H - 24 - (y / 13) * (H - 34)
  const yAt = (x: number) => m.w * x + m.b
  return (
    <Card title="Fitting a line by gradient descent" color={color} note="Tap the chart to add a point. Red lines are the residuals (errors); the model is trying to make the average of their squares as small as possible. The dashed line is the exact answer from the normal equation.">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block h-auto w-full cursor-crosshair rounded-[var(--radius)] border"
        style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}
        role="img"
        aria-label="Scatter plot with a fitted line"
        onClick={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          const X = (((e.clientX - r.left) / r.width) * W - 30) / (W - 40) * 10
          const Y = (H - 24 - ((e.clientY - r.top) / r.height) * H) / (H - 34) * 13
          if (X >= 0 && X <= 10) setPts((p) => [...p, { x: X, y: Y }])
        }}
      >
        <line x1={30} x2={W - 10} y1={H - 24} y2={H - 24} stroke="var(--ink)" />
        <line x1={30} x2={30} y1={8} y2={H - 24} stroke="var(--ink)" />
        {[0, 2, 4, 6, 8, 10].map((t) => (
          <text key={t} x={px(t)} y={H - 8} fontSize={11} textAnchor="middle" fill="var(--ink-soft)">{t}</text>
        ))}
        <line x1={px(0)} x2={px(10)} y1={py(best.b)} y2={py(best.w * 10 + best.b)} stroke="var(--ink)" strokeDasharray="6 4" strokeOpacity={0.5} />
        {resid && pts.map((p, i) => <line key={i} x1={px(p.x)} x2={px(p.x)} y1={py(p.y)} y2={py(yAt(p.x))} stroke="#d9534f" strokeWidth={1.5} />)}
        <line x1={px(0)} x2={px(10)} y1={py(yAt(0))} y2={py(yAt(10))} stroke={C0} strokeWidth={3} />
        {pts.map((p, i) => <circle key={i} cx={px(p.x)} cy={py(p.y)} r={4.5} fill={C1} stroke="var(--ink)" />)}
      </svg>
      <div className="flex flex-wrap gap-2">
        <Btn onClick={() => setOn(!on)} active={on}>{on ? '❚❚ Pause' : '▶ Train'}</Btn>
        <Btn onClick={() => { setOn(false); setM(best) }}>Jump to exact fit</Btn>
        <Btn onClick={() => { setOn(false); setM({ w: 0, b: 0 }); setSteps(0) }}>↺ Reset line</Btn>
        <Btn onClick={() => { setOn(false); setPts(makeLine(24, Math.floor(Math.random() * 1000))); setM({ w: 0, b: 0 }); setSteps(0) }}>New data</Btn>
        <Btn onClick={() => setResid(!resid)} active={resid}>Residuals</Btn>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="slope w" value={f3(m.w)} />
        <Stat label="intercept b" value={f3(m.b)} />
        <Stat label="MSE" value={f3(mse(pts, m))} tone={color} />
        <Stat label={`R² (after ${steps} steps)`} value={f3(r2(pts, m))} />
      </div>
    </Card>
  )
}

// ── overfitting and underfitting ──────────────────────────────────────────

const TRAIN = makeCurve(14, 3)
const TEST = makeCurve(60, 8)

export function OverfitLab({ color }: { color: string }) {
  const [deg, setDeg] = useState(3)
  const [logL, setLogL] = useState(-8)
  const lambda = logL <= -8 ? 0 : 10 ** logL
  const fit = polyfit(TRAIN.pts, deg, lambda)
  const err = (pts: XY[], f: (x: number) => number) => pts.reduce((s, p) => s + (f(p.x) - p.y) ** 2, 0) / pts.length
  const curve = useMemo(() => Array.from({ length: 12 }, (_, i) => {
    const g = polyfit(TRAIN.pts, i + 1, lambda)
    return [i + 1, err(TRAIN.pts, g), err(TEST.pts, g)] as const
  }), [lambda])
  const tr = err(TRAIN.pts, fit)
  const te = err(TEST.pts, fit)
  const verdict = deg <= 1 ? 'Underfitting: too simple to follow the curve (high bias).' : te > tr * 3 && te > 0.08 ? 'Overfitting: it threads every training point but misses new ones (high variance).' : 'A good balance: low error on data it has not seen.'
  return (
    <Card title="Underfitting, overfitting and regularisation" color={color} note="Training points are orange, new test points are blue. Raise the polynomial degree: training error always falls, but test error falls then rises. Regularisation (λ) penalises large coefficients and tames a high-degree fit.">
      <div className="grid gap-3 lg:grid-cols-2">
        <PlotChart
          block={{
            t: 'plot',
            title: `Degree ${deg} polynomial`,
            x: [-1, 1],
            y: [-1.6, 1.6],
            curves: [{ f: TRAIN.f, color: '#8a6d1e', dashed: true, label: 'true pattern' }, { f: fit, color: '#7b4fc9', label: 'model' }],
            data: [{ pts: TEST.pts.map((p) => [p.x, p.y] as [number, number]), color: C0, dots: true }, { pts: TRAIN.pts.map((p) => [p.x, p.y] as [number, number]), color: C1, dots: true }],
          }}
        />
        <PlotChart
          block={{
            t: 'plot',
            title: 'Error against model complexity',
            x: [1, 12],
            y: [0, 0.25],
            xLabel: 'polynomial degree',
            yLabel: 'mean squared error',
            data: [{ pts: curve.map(([d, a]) => [d, Math.min(a, 0.26)] as [number, number]), color: C1, label: 'training error', dots: true }, { pts: curve.map(([d, , b]) => [d, Math.min(b, 0.26)] as [number, number]), color: C0, label: 'test error', dots: true }],
            vlines: [{ x: deg, label: 'you' }],
          }}
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <Slider label="Polynomial degree" value={deg} min={1} max={12} step={1} onChange={setDeg} />
        <Slider label="Regularisation λ" value={logL} min={-8} max={0} step={0.5} onChange={setLogL} show={lambda ? lambda.toExponential(0) : 'off'} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="training MSE" value={f3(tr)} tone={C1} />
        <Stat label="test MSE" value={f3(te)} tone={C0} />
        <div className="col-span-2 rounded-[var(--radius)] border px-2.5 py-1.5 text-sm font-bold sm:col-span-1" style={{ borderColor: 'var(--line)' }}>{verdict}</div>
      </div>
    </Card>
  )
}

// ── perceptron ────────────────────────────────────────────────────────────

const PERC = makeData('blobs', 40, 21, 0.55)

export function PerceptronLab({ color }: { color: string }) {
  const [m, setM] = useState<Logit>({ w1: -0.4, w2: 0.9, b: 0.3 })
  const [i, setI] = useState(0)
  const [last, setLast] = useState<number | null>(null)
  const [updates, setUpdates] = useState(0)
  const [on, setOn] = useState(false)
  const wrong = PERC.filter((p) => perceptronWrong(m, p)).length
  const step = () => {
    for (let k = 0; k < PERC.length; k++) {
      const j = (i + k) % PERC.length
      if (perceptronWrong(m, PERC[j])) {
        setM(perceptronUpdate(m, PERC[j]))
        setLast(j)
        setI(j + 1)
        setUpdates((u) => u + 1)
        return
      }
    }
    setOn(false)
    setLast(null)
  }
  useTicker(on, 500, step)
  return (
    <Card title="The perceptron learning rule" color={color} note="Each step finds the next misclassified point (ringed) and nudges the line towards classifying it correctly: w ← w + η·t·x. On separable data this is guaranteed to stop with zero mistakes (the perceptron convergence theorem).">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <Field label="Perceptron decision line">
          <Regions prob={(x, y) => (m.w1 * x + m.w2 * y + m.b >= 0 ? 0.85 : 0.15)} res={24} />
          <Boundary {...m} />
          <Points pts={PERC} />
          {last !== null && <circle cx={sx(PERC[last].x)} cy={sy(PERC[last].y)} r={10} fill="none" stroke="var(--ink)" strokeWidth={2.5} />}
        </Field>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            <Btn onClick={() => setOn(!on)} active={on}>{on ? '❚❚ Pause' : '▶ Learn'}</Btn>
            <Btn onClick={step}>One update</Btn>
            <Btn onClick={() => { setOn(false); setM({ w1: -0.4, w2: 0.9, b: 0.3 }); setUpdates(0); setLast(null); setI(0) }}>↺ Reset</Btn>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Stat label="w₁" value={f3(m.w1)} />
            <Stat label="w₂" value={f3(m.w2)} />
            <Stat label="b" value={f3(m.b)} />
            <Stat label="updates" value={updates} />
            <Stat label="misclassified" value={wrong} tone={wrong ? '#d9534f' : '#2f9e6e'} />
          </div>
          {wrong === 0 && <p className="text-sm font-bold">Converged: every point is on the correct side.</p>}
        </div>
      </div>
    </Card>
  )
}

// ── k-nearest neighbours ──────────────────────────────────────────────────

const KNN = makeData('moons', 90, 12, 2.2)

export function KnnLab({ color }: { color: string }) {
  const [k, setK] = useState(5)
  const [q, setQ] = useState({ x: 0.1, y: 0.15 })
  const [regions, setRegions] = useState(true)
  const nn = nearest(KNN, q.x, q.y, k)
  const ones = nn.filter((n) => n.p.c === 1).length
  const prob = (x: number, y: number) => nearest(KNN, x, y, k).filter((n) => n.p.c === 1).length / k
  return (
    <Card title="k-nearest neighbours: tap to classify a point" color={color} note="The new point (the star) takes the majority class of its k closest neighbours. Small k gives jagged, noisy boundaries (overfitting); large k smooths them out but can blur real detail (underfitting).">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <Field label="kNN classification" onClick={(x, y) => setQ({ x, y })}>
          {regions && <Regions prob={prob} res={30} />}
          {nn.map((n, i) => <line key={i} x1={sx(q.x)} y1={sy(q.y)} x2={sx(n.p.x)} y2={sy(n.p.y)} stroke="var(--ink)" strokeOpacity={0.6} />)}
          <circle cx={sx(q.x)} cy={sy(q.y)} r={sx(nn[nn.length - 1].d) - sx(0)} fill="none" stroke="var(--ink)" strokeDasharray="4 4" />
          <Points pts={KNN} />
          <text x={sx(q.x)} y={sy(q.y) + 7} textAnchor="middle" fontSize={22} fill={ones * 2 > k ? C1 : C0} stroke="var(--ink)" strokeWidth={1}>★</text>
        </Field>
        <div className="flex flex-1 flex-col gap-2">
          <Slider label="k (neighbours)" value={k} min={1} max={31} step={2} onChange={setK} />
          <div className="grid grid-cols-2 gap-2">
            <Stat label="orange votes" value={ones} tone={C1} />
            <Stat label="blue votes" value={k - ones} tone={C0} />
          </div>
          <p className="text-sm font-bold">Prediction: {ones * 2 > k ? 'orange' : 'blue'} ({pct(Math.max(ones, k - ones) / k)} of neighbours)</p>
          <Btn onClick={() => setRegions(!regions)} active={regions}>Show regions</Btn>
          <p className="text-xs" style={soft}>Training accuracy: {pct(accuracy(KNN, prob))}. With k = 1 it is always 100%: each point is its own nearest neighbour.</p>
        </div>
      </div>
    </Card>
  )
}

// ── k-means ───────────────────────────────────────────────────────────────

const KM = makeClusters(4, 160, 6)

export function KMeansLab({ color }: { color: string }) {
  const [k, setK] = useState(4)
  const [seed, setSeed] = useState(1)
  const init = (kk: number, s: number) => {
    const r = rng(s * 97 + kk)
    return Array.from({ length: kk }, () => ({ x: r() * 1.6 - 0.8, y: r() * 1.6 - 0.8 }))
  }
  const [cents, setCents] = useState(() => init(4, 1))
  const [labels, setLabels] = useState<number[] | null>(null)
  const [phase, setPhase] = useState<'assign' | 'update'>('assign')
  const [iter, setIter] = useState(0)
  const [on, setOn] = useState(false)
  const step = () => {
    if (phase === 'assign') {
      const l = assign(KM, cents)
      if (labels && l.every((v, i) => v === labels[i]) && iter > 0) setOn(false)
      setLabels(l)
      setPhase('update')
    } else if (labels) {
      setCents(update(KM, labels, cents))
      setPhase('assign')
      setIter((n) => n + 1)
    }
  }
  useTicker(on, 600, step)
  const restart = (kk = k, s = seed + 1) => {
    setOn(false)
    setK(kk)
    setSeed(s)
    setCents(init(kk, s))
    setLabels(null)
    setPhase('assign')
    setIter(0)
  }
  const regionLab = (x: number, y: number) => assign([{ x, y }], cents)[0]
  const res = 24
  const cell = S / res
  return (
    <Card title="k-means clustering, one move at a time" color={color} note="Two steps repeat: assign every point to its nearest centre (×), then move each centre to the mean of its points. The total squared distance (inertia) never goes up, so it always settles, though not always on the best answer: try a few restarts.">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <Field label="k-means clusters">
          {Array.from({ length: res * res }, (_, n) => {
            const i = Math.floor(n / res)
            const j = n % res
            return <rect key={n} x={i * cell} y={j * cell} width={cell + 0.4} height={cell + 0.4} fill={PALETTE[regionLab(((i + 0.5) * cell / S) * 2 - 1, 1 - ((j + 0.5) * cell / S) * 2)]} opacity={0.12} />
          })}
          {KM.map((p, i) => <circle key={i} cx={sx(p.x)} cy={sy(p.y)} r={3.8} fill={labels ? PALETTE[labels[i]] : '#999'} stroke="var(--ink)" strokeWidth={0.8} />)}
          {cents.map((c, j) => (
            <g key={j}>
              <circle cx={sx(c.x)} cy={sy(c.y)} r={11} fill={PALETTE[j]} stroke="var(--ink)" strokeWidth={2.5} />
              <text x={sx(c.x)} y={sy(c.y) + 5} textAnchor="middle" fontSize={14} fontWeight={800} fill="#fff">×</text>
            </g>
          ))}
        </Field>
        <div className="flex flex-1 flex-col gap-2">
          <Slider label="k (clusters)" value={k} min={2} max={6} step={1} onChange={(v) => restart(v, seed)} />
          <div className="flex flex-wrap gap-2">
            <Btn onClick={() => setOn(!on)} active={on}>{on ? '❚❚ Pause' : '▶ Run'}</Btn>
            <Btn onClick={step}>{phase === 'assign' ? 'Step: assign' : 'Step: move centres'}</Btn>
            <Btn onClick={() => restart()}>↺ New random start</Btn>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Stat label="iteration" value={iter} />
            <Stat label="inertia" value={labels ? inertia(KM, labels, cents).toFixed(2) : '–'} tone={color} />
          </div>
          <p className="text-xs" style={soft}>The data were drawn from 4 groups. Compare the inertia for k = 2 to 6: it always falls as k rises, so look for the "elbow" where it stops falling fast.</p>
        </div>
      </div>
    </Card>
  )
}

// ── decision trees ────────────────────────────────────────────────────────

function TreeDiagram({ root }: { root: TreeNode }) {
  const W = 520
  const levels = Math.min(4, maxDepth(root) + 1)
  const H = levels * 62 + 10
  const nodes: ReactNode[] = []
  const walk = (n: TreeNode, x0: number, x1: number, d: number, px?: number, py?: number) => {
    if (d >= levels) return
    const cx = (x0 + x1) / 2
    const cy = 30 + d * 62
    if (px !== undefined && py !== undefined) nodes.push(<line key={`l${cx}-${cy}`} x1={px} y1={py + 14} x2={cx} y2={cy - 14} stroke="var(--ink)" strokeOpacity={0.5} />)
    const label = n.split && d < levels - 1 ? `${n.split.f === 0 ? 'x' : 'y'} ≤ ${n.split.t.toFixed(2)}` : n.p >= 0.5 ? 'orange' : 'blue'
    const w = Math.min(x1 - x0 - 4, 110)
    nodes.push(
      <g key={`n${cx}-${cy}`}>
        <rect x={cx - w / 2} y={cy - 14} width={w} height={28} rx={6} fill={n.split && d < levels - 1 ? 'var(--surface)' : n.p >= 0.5 ? C1 : C0} fillOpacity={n.split && d < levels - 1 ? 1 : 0.35} stroke="var(--ink)" strokeWidth={1.5} />
        <text x={cx} y={cy - 1} textAnchor="middle" fontSize={w < 70 ? 9 : 11} fontWeight={700}>{label}</text>
        <text x={cx} y={cy + 10} textAnchor="middle" fontSize={w < 70 ? 7.5 : 9} fill="var(--ink-soft)">n={n.n} G={n.gini.toFixed(2)}</text>
      </g>,
    )
    if (n.split) {
      walk(n.split.left, x0, cx, d + 1, cx, cy)
      walk(n.split.right, cx, x1, d + 1, cx, cy)
    }
  }
  walk(root, 0, W, 0)
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Decision tree diagram">
      {nodes}
    </svg>
  )
}

function maxDepth(n: TreeNode): number {
  return n.split ? 1 + Math.max(maxDepth(n.split.left), maxDepth(n.split.right)) : 0
}

export function TreeLab({ color }: { color: string }) {
  const [data, setData] = useState<Dataset>('moons')
  const [depth, setDepth] = useState(3)
  const train = useMemo(() => makeData(data, 120, 7, 1.8), [data])
  const test = useMemo(() => makeData(data, 200, 99, 1.8), [data])
  const tree = useMemo(() => buildTree(train, depth), [train, depth])
  const prob = (x: number, y: number) => treeProb(tree, x, y)
  return (
    <Card title="A decision tree carving up the plane" color={color} note="Each split is a yes/no question on one feature, chosen to make the groups as pure as possible (lowest Gini impurity G). Deeper trees fit the training data ever more closely; watch the test accuracy to see when extra depth stops helping. The diagram shows the top four levels.">
      <Pills label="Dataset" value={data} options={DATASETS} onChange={setData} />
      <div className="grid gap-3 lg:grid-cols-[minmax(0,22rem)_1fr]">
        <Field label="Decision tree regions">
          {leaves(tree).map((l, i) => {
            const [x0, x1, y0, y1] = l.box
            return <rect key={i} x={sx(x0)} y={sy(y1)} width={sx(x1) - sx(x0)} height={sy(y0) - sy(y1)} fill={l.p >= 0.5 ? C1 : C0} opacity={0.12 + Math.abs(l.p - 0.5) * 0.4} stroke="var(--ink)" strokeOpacity={0.35} />
          })}
          <Points pts={train} r={3.6} />
        </Field>
        <TreeDiagram root={tree} />
      </div>
      <Slider label="Maximum depth" value={depth} min={1} max={10} step={1} onChange={setDepth} />
      <div className="grid grid-cols-3 gap-2">
        <Stat label="leaves" value={leaves(tree).length} />
        <Stat label="training accuracy" value={pct(accuracy(train, prob))} tone={C1} />
        <Stat label="test accuracy" value={pct(accuracy(test, prob))} tone={C0} />
      </div>
    </Card>
  )
}

// ── random forests ────────────────────────────────────────────────────────

export function ForestLab({ color }: { color: string }) {
  const [n, setN] = useState(25)
  const [data, setData] = useState<Dataset>('moons')
  const train = useMemo(() => makeData(data, 140, 7, 2.2), [data])
  const test = useMemo(() => makeData(data, 300, 99, 2.2), [data])
  const forest = useMemo(() => buildForest(train, 50, 8, 4), [train])
  const used = forest.slice(0, n)
  const single = buildTree(train, 8)
  const fp = (x: number, y: number) => forestProb(used, x, y)
  return (
    <Card title="A random forest: many trees vote" color={color} note="Each tree is trained on a bootstrap sample (drawn with replacement) and picks a random feature at each split, so the trees make different mistakes. Averaging their votes cancels much of the noise. Compare one deep tree with the forest on unseen test data.">
      <Pills label="Dataset" value={data} options={DATASETS} onChange={setData} />
      <div className="grid grid-cols-3 gap-2">
        {forest.slice(0, 3).map((t, i) => (
          <div key={i} className="flex flex-col gap-1">
            <p className="text-xs font-bold">Tree {i + 1}</p>
            <Field label={`Tree ${i + 1}`} size="max-w-full">
              <Regions prob={(x, y) => treeProb(t, x, y)} res={22} />
              <Points pts={train} r={2.6} />
            </Field>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-bold">Forest of {n} trees (shading = share of votes)</p>
          <Field label="Random forest vote">
            <Regions prob={fp} res={32} />
            <Points pts={train} r={3.4} />
          </Field>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Slider label="Number of trees" value={n} min={1} max={50} step={1} onChange={setN} />
          <Stat label="one deep tree: test accuracy" value={pct(accuracy(test, (x, y) => treeProb(single, x, y)))} />
          <Stat label="forest: test accuracy" value={pct(accuracy(test, fp))} tone={color} />
        </div>
      </div>
    </Card>
  )
}

// ── support vector machine ────────────────────────────────────────────────

const SVMD = makeData('blobs', 50, 31, 0.75)

export function SvmLab({ color }: { color: string }) {
  const [logC, setLogC] = useState(1)
  const C = 10 ** logC
  const m = useMemo(() => trainSvm(SVMD, C, 6000), [C])
  const norm = Math.hypot(m.w1, m.w2)
  const sv = SVMD.map((p) => (p.c ? 1 : -1) * (m.w1 * p.x + m.w2 * p.y + m.b) <= 1.02)
  return (
    <Card title="Support vector machine: the widest street" color={color} note="The SVM picks the boundary with the widest margin (the street between the dashed lines). Only the ringed points on or inside the margin, the support vectors, decide where it goes. A small C allows some points inside the street for a wider, more robust margin; a large C insists on separating everything.">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <Field label="SVM margin">
          <Regions prob={(x, y) => (m.w1 * x + m.w2 * y + m.b >= 0 ? 0.8 : 0.2)} res={24} />
          <Boundary {...m} />
          <Boundary {...m} offset={1} dashed />
          <Boundary {...m} offset={-1} dashed />
          <Points pts={SVMD} />
          {SVMD.map((p, i) => sv[i] && <circle key={i} cx={sx(p.x)} cy={sy(p.y)} r={9} fill="none" stroke="var(--ink)" strokeWidth={2} />)}
        </Field>
        <div className="flex flex-1 flex-col gap-2">
          <Slider label="C (penalty for margin violations)" value={logC} min={-1} max={3} step={0.25} onChange={setLogC} show={C >= 10 ? C.toFixed(0) : C.toFixed(2)} />
          <div className="grid grid-cols-2 gap-2">
            <Stat label="margin width 2/‖w‖" value={(2 / norm).toFixed(3)} tone={color} />
            <Stat label="support vectors" value={sv.filter(Boolean).length} />
            <Stat label="accuracy" value={pct(accuracy(SVMD, (x, y) => (m.w1 * x + m.w2 * y + m.b >= 0 ? 1 : 0)))} />
          </div>
        </div>
      </div>
    </Card>
  )
}

// ── principal component analysis ──────────────────────────────────────────

const PCAD: XY[] = (() => {
  const r = rng(17)
  return Array.from({ length: 70 }, () => {
    const a = gauss(r) * 0.42
    const b = gauss(r) * 0.12
    const t = 0.6
    return { x: a * Math.cos(t) - b * Math.sin(t), y: a * Math.sin(t) + b * Math.cos(t) }
  })
})()

export function PcaLab({ color }: { color: string }) {
  const [deg, setDeg] = useState(120)
  const pc = pca2(PCAD)
  const a = (deg * Math.PI) / 180
  const v = projectedVariance(PCAD, a)
  const ux = Math.cos(a)
  const uy = Math.sin(a)
  const best = ((pc.angle * 180) / Math.PI + 180) % 180
  return (
    <Card title="PCA: find the direction of most variance" color={color} note="Turn the line. Each point is projected (dropped at right angles) onto it, and the spread of those shadows is the variance captured. PCA finds the direction where that spread is largest: the first principal component, an eigenvector of the covariance matrix.">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <Field label="PCA projection">
          <line x1={sx(-1.4 * ux)} y1={sy(-1.4 * uy)} x2={sx(1.4 * ux)} y2={sy(1.4 * uy)} stroke={color} strokeWidth={3} />
          {PCAD.map((p, i) => {
            const t = p.x * ux + p.y * uy
            return (
              <g key={i}>
                <line x1={sx(p.x)} y1={sy(p.y)} x2={sx(t * ux)} y2={sy(t * uy)} stroke="var(--ink)" strokeOpacity={0.25} />
                <circle cx={sx(t * ux)} cy={sy(t * uy)} r={2.6} fill="#d9534f" />
                <circle cx={sx(p.x)} cy={sy(p.y)} r={3.6} fill={C0} stroke="var(--ink)" strokeWidth={0.8} />
              </g>
            )
          })}
        </Field>
        <div className="flex flex-1 flex-col gap-2">
          <Slider label="Direction" value={deg} min={0} max={179} step={1} onChange={setDeg} show={`${deg}°`} />
          <Btn onClick={() => setDeg(Math.round(best))}>Snap to first principal component</Btn>
          <Stat label="variance captured" value={`${v.toFixed(4)} (${pct(v / (pc.l1 + pc.l2))} of total)`} tone={color} />
          <div className="h-3 overflow-hidden rounded-full border" style={{ borderColor: 'var(--line)' }}>
            <div className="h-full" style={{ width: pct(v / (pc.l1 + pc.l2)), background: color }} />
          </div>
          <p className="text-xs" style={soft}>
            Eigenvalues: λ₁ = {pc.l1.toFixed(4)}, λ₂ = {pc.l2.toFixed(4)}. PC1 explains {pct(pc.l1 / (pc.l1 + pc.l2))} of the variance, so these 2D points could be squeezed to 1D losing little.
          </p>
        </div>
      </div>
    </Card>
  )
}

// ── classification threshold, confusion matrix and ROC ───────────────────

const SCORES = (() => {
  const r = rng(23)
  const out: { s: number; c: number }[] = []
  for (let i = 0; i < 200; i++) out.push({ s: Math.min(0.99, Math.max(0.01, 0.35 + gauss(r) * 0.14)), c: 0 })
  for (let i = 0; i < 200; i++) out.push({ s: Math.min(0.99, Math.max(0.01, 0.66 + gauss(r) * 0.14)), c: 1 })
  return out
})()

export function ThresholdLab({ color }: { color: string }) {
  const [t, setT] = useState(0.5)
  const m = confusion(SCORES, t)
  const roc = useMemo(() => rocCurve(SCORES), [])
  const bins = 20
  const hist = Array.from({ length: bins }, (_, b) => [0, 1].map((c) => SCORES.filter((x) => x.c === c && Math.min(bins - 1, Math.floor(x.s * bins)) === b).length))
  const maxH = Math.max(...hist.flat())
  const W = 480
  const H = 170
  const cell = (label: string, n: number, good: boolean) => (
    <div className="rounded-[var(--radius)] border p-2 text-center" style={{ borderColor: 'var(--line)', background: `color-mix(in srgb, ${good ? '#2f9e6e' : '#d9534f'} ${12 + (n / 200) * 40}%, var(--surface))` }}>
      <p className="text-[11px] font-bold">{label}</p>
      <p className="font-mono text-lg font-bold">{n}</p>
    </div>
  )
  return (
    <Card title="Thresholds, the confusion matrix and the ROC curve" color={color} note="A model outputs a score; you choose the cut-off. Moving the threshold trades false alarms against misses. The ROC curve traces every possible threshold; the area under it (AUC) summarises how well the scores separate the classes, whatever threshold you pick.">
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Score histograms for each class">
        {hist.map(([n0, n1], b) => (
          <g key={b}>
            <rect x={10 + (b * (W - 20)) / bins} y={H - 20 - (n0 / maxH) * (H - 34)} width={(W - 20) / bins - 2} height={(n0 / maxH) * (H - 34)} fill={C0} opacity={0.55} />
            <rect x={10 + (b * (W - 20)) / bins} y={H - 20 - (n1 / maxH) * (H - 34)} width={(W - 20) / bins - 2} height={(n1 / maxH) * (H - 34)} fill={C1} opacity={0.55} />
          </g>
        ))}
        <line x1={10 + t * (W - 20)} x2={10 + t * (W - 20)} y1={6} y2={H - 20} stroke="var(--ink)" strokeWidth={2.5} />
        <text x={10 + t * (W - 20) + (t > 0.55 ? -5 : 5)} y={18} fontSize={12} fontWeight={700} textAnchor={t > 0.55 ? 'end' : 'start'}>{t > 0.55 ? `predict positive ← threshold ${t.toFixed(2)}` : `threshold ${t.toFixed(2)} → predict positive`}</text>
        <text x={10} y={H - 5} fontSize={11} fill="var(--ink-soft)">score 0</text>
        <text x={W - 10} y={H - 5} fontSize={11} textAnchor="end" fill="var(--ink-soft)">score 1</text>
      </svg>
      <Legend items={[[C0, 'Actually negative (healthy)'], [C1, 'Actually positive (ill)']]} />
      <Slider label="Threshold" value={t} min={0.02} max={0.98} step={0.01} onChange={setT} />
      <div className="grid gap-3 lg:grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-[auto_1fr_1fr] items-center gap-1.5 text-xs font-bold">
            <span />
            <span className="text-center">Predicted +</span>
            <span className="text-center">Predicted −</span>
            <span>Actual +</span>
            {cell('True positive', m.tp, true)}
            {cell('False negative', m.fn, false)}
            <span>Actual −</span>
            {cell('False positive', m.fp, false)}
            {cell('True negative', m.tn, true)}
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <Stat label="accuracy" value={pct(m.accuracy)} />
            <Stat label="precision" value={pct(m.precision)} tone={color} />
            <Stat label="recall (TPR)" value={pct(m.recall)} tone={color} />
            <Stat label="false positive rate" value={pct(m.fpr)} />
            <Stat label="F1 score" value={m.f1.toFixed(3)} />
            <Stat label="AUC" value={roc.auc.toFixed(3)} />
          </div>
        </div>
        <PlotChart
          block={{
            t: 'plot',
            title: 'ROC curve',
            x: [0, 1],
            y: [0, 1],
            xLabel: 'false positive rate',
            yLabel: 'true positive rate',
            curves: [{ f: (x) => x, dashed: true, color: '#999', label: 'random guessing' }],
            data: [{ pts: roc.pts, color: '#7b4fc9' }],
            points: [{ x: m.fpr, y: m.recall, label: 'you' }],
          }}
        />
      </div>
    </Card>
  )
}
