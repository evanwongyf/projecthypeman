import { useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { makeData } from '../../lib/ai/data'
import type { Dataset } from '../../lib/ai/data'
import { MLP, accuracy, sigmoid } from '../../lib/ai/models'
import type { Act } from '../../lib/ai/models'
import { conv2d, softmax } from '../../lib/ai/seq'
import { Btn, C0, C1, Card, Field, Legend, Pills, Points, Regions, Slider, Stat, soft, useTicker } from './shared'

const f3 = (n: number) => (Number.isFinite(n) ? n.toFixed(3) : '–')
const pct = (n: number) => `${(n * 100).toFixed(1)}%`

// ── a forward pass through a small network ─────────────────────────────────

const XOR_NET = (() => {
  const net = new MLP([2, 4, 1], 'tanh', 5)
  const d = makeData('xor', 160, 3)
  for (let e = 0; e < 500; e++) net.train(d, 0.05)
  return net
})()

export function NetworkLab({ color }: { color: string }) {
  const [x1, setX1] = useState(0.6)
  const [x2, setX2] = useState(-0.5)
  const [stage, setStage] = useState(3)
  const [on, setOn] = useState(false)
  const [pick, setPick] = useState<[number, number]>([1, 0])
  useTicker(on, 700, () => setStage((s) => (s >= 3 ? (setOn(false), s) : s + 1)))
  const acts = XOR_NET.forward([x1, x2])
  const sizes = XOR_NET.sizes
  const W = 480
  const H = 260
  const lx = (l: number) => 60 + (l * (W - 120)) / (sizes.length - 1)
  const ly = (l: number, j: number) => H / 2 + (j - (sizes[l] - 1) / 2) * 56
  const names = [['x₁', 'x₂'], ['h₁', 'h₂', 'h₃', 'h₄'], ['ŷ']]
  const shade = (a: number, l: number) => (l === sizes.length - 1 ? (a >= 0.5 ? C1 : C0) : a >= 0 ? C1 : C0)
  const strength = (a: number, l: number) => (l === sizes.length - 1 ? Math.abs(a - 0.5) * 2 : Math.min(1, Math.abs(a)))
  const [pl, pj] = pick
  const z = pl > 0 ? XOR_NET.W[pl - 1][pj].reduce((s, w, i) => s + w * acts[pl - 1][i], XOR_NET.B[pl - 1][pj]) : acts[0][pj]
  return (
    <Card title="Inside a neural network: one forward pass" color={color} note="This 2–4–1 network was trained on the XOR pattern (orange when x₁ and x₂ have the same sign). Edge colour is the weight's sign (orange +, blue −) and thickness its size. Tap a neuron to see its sum and activation. Press play to watch the signal flow layer by layer.">
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Neural network diagram">
        {XOR_NET.W.map((L, l) =>
          L.map((row, j) =>
            row.map((w, i) => {
              const live = stage > l
              return (
                <g key={`${l}-${j}-${i}`}>
                  <line x1={lx(l)} y1={ly(l, i)} x2={lx(l + 1)} y2={ly(l + 1, j)} stroke={w >= 0 ? C1 : C0} strokeWidth={0.6 + Math.min(5, Math.abs(w) * 1.6)} strokeOpacity={live ? 0.75 : 0.18} />
                  {on && stage === l + 1 && (
                    <circle r={4} fill="var(--ink)">
                      <animateMotion dur="0.65s" repeatCount="1" fill="freeze" path={`M${lx(l)},${ly(l, i)} L${lx(l + 1)},${ly(l + 1, j)}`} />
                    </circle>
                  )}
                </g>
              )
            }),
          ),
        )}
        {sizes.map((n, l) =>
          Array.from({ length: n }, (_, j) => {
            const a = acts[l][j]
            const shown = stage >= l
            return (
              <g key={`n${l}-${j}`} onClick={() => setPick([l, j])} style={{ cursor: 'pointer' }}>
                <circle cx={lx(l)} cy={ly(l, j)} r={21} fill="var(--surface)" stroke="var(--ink)" strokeWidth={pl === l && pj === j ? 4 : 2} />
                <circle cx={lx(l)} cy={ly(l, j)} r={19} fill={shade(a, l)} opacity={shown ? 0.15 + strength(a, l) * 0.7 : 0} />
                <text x={lx(l)} y={ly(l, j) - 3} textAnchor="middle" fontSize={12} fontWeight={700}>{names[l][j]}</text>
                <text x={lx(l)} y={ly(l, j) + 11} textAnchor="middle" fontSize={10} fontFamily="monospace">{shown ? a.toFixed(2) : '?'}</text>
              </g>
            )
          }),
        )}
        {['input layer', 'hidden layer (tanh)', 'output (sigmoid)'].map((t, l) => (
          <text key={t} x={lx(l)} y={H - 8} textAnchor="middle" fontSize={11} fill="var(--ink-soft)">{t}</text>
        ))}
      </svg>
      <div className="flex flex-wrap gap-3">
        <Slider label="Input x₁" value={x1} min={-1} max={1} step={0.05} onChange={setX1} />
        <Slider label="Input x₂" value={x2} min={-1} max={1} step={0.05} onChange={setX2} />
      </div>
      <div className="flex flex-wrap gap-2">
        <Btn onClick={() => { setStage(0); setOn(true) }} active={on}>▶ Animate forward pass</Btn>
      </div>
      <div className="rounded-[var(--radius)] px-3 py-2 font-mono text-xs leading-relaxed sm:text-sm" style={{ background: 'var(--paper-2)' }}>
        {pl === 0 ? (
          <p>{names[0][pj]} is an input: its value is simply {f3(acts[0][pj])}.</p>
        ) : (
          <>
            <p className="break-words">
              z = {XOR_NET.W[pl - 1][pj].map((w, i) => `(${w.toFixed(2)})(${acts[pl - 1][i].toFixed(2)})`).join(' + ')} + ({XOR_NET.B[pl - 1][pj].toFixed(2)}) = {f3(z)}
            </p>
            <p>
              {names[pl][pj]} = {pl === sizes.length - 1 ? 'σ' : 'tanh'}(z) = {f3(acts[pl][pj])}
              {pl === sizes.length - 1 && ` → predict ${acts[pl][pj] >= 0.5 ? 'orange' : 'blue'}`}
            </p>
          </>
        )}
      </div>
    </Card>
  )
}

// ── a neural network playground ──────────────────────────────────────────

const ARCHS: [string, number[]][] = [
  ['none', []],
  ['4', [4]],
  ['8', [8]],
  ['8-8', [8, 8]],
  ['16-16', [16, 16]],
]

export function Playground({ color }: { color: string }) {
  const [data, setData] = useState<Dataset>('circles')
  const [arch, setArch] = useState('8-8')
  const [act, setAct] = useState<Act>('tanh')
  const [lr, setLr] = useState(0.03)
  const [on, setOn] = useState(false)
  const [, setTick] = useState(0)
  const train = useMemo(() => makeData(data, 160, 7), [data])
  const test = useMemo(() => makeData(data, 200, 77), [data])
  const make = (a = arch, f = act) => new MLP([2, ...(ARCHS.find((x) => x[0] === a)?.[1] ?? []), 1], f, 11)
  const net = useRef<MLP>(make())
  const hist = useRef<number[]>([])
  const epochs = hist.current.length
  const reset = (d = data, a = arch, f = act) => {
    setOn(false)
    setData(d)
    setArch(a)
    setAct(f)
    net.current = make(a, f)
    hist.current = []
    setTick((t) => t + 1)
  }
  useTicker(on, 50, () => {
    let loss = 0
    for (let k = 0; k < 4; k++) loss = net.current.train(train, lr)
    hist.current.push(loss)
    if (hist.current.length >= 1500) setOn(false)
    setTick((t) => t + 1)
  })
  const prob = (x: number, y: number) => net.current.predict(x, y)
  const hidden = net.current.sizes.length > 2 ? net.current.sizes[1] : 0
  const lossMax = Math.max(0.8, ...hist.current.slice(0, 5))
  const W = 300
  const H = 90
  return (
    <Card title="Neural network playground: train one live" color={color} note="Every 50 ms the network takes four Adam steps on the training points. With no hidden layer it is just logistic regression and can only draw a straight line; hidden layers let it bend the boundary. The small squares show what each first-layer neuron responds to: each is a soft straight-line split, and later layers combine them.">
      <div className="flex flex-col gap-2">
        <Pills label="Dataset" value={data} options={[['blobs', 'Blobs'], ['moons', 'Moons'], ['circles', 'Circles'], ['xor', 'XOR'], ['spiral', 'Spiral']]} onChange={(d) => reset(d)} />
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span>Hidden layers:</span>
          <Pills label="Hidden layers" value={arch} options={ARCHS.map(([k]) => [k, k] as [string, string])} onChange={(a) => reset(data, a)} />
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span>Activation:</span>
          <Pills label="Activation" value={act} options={[['tanh', 'tanh'], ['relu', 'ReLU'], ['sigmoid', 'sigmoid']]} onChange={(f) => reset(data, arch, f)} />
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <Field label="Decision boundary being learned">
          <Regions prob={prob} res={34} />
          <Points pts={train} r={3.4} />
        </Field>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            <Btn onClick={() => setOn(!on)} active={on}>{on ? '❚❚ Pause' : '▶ Train'}</Btn>
            <Btn onClick={() => reset()}>↺ Reset weights</Btn>
          </div>
          <Slider label="Learning rate" value={lr} min={0.003} max={0.1} step={0.001} onChange={setLr} />
          <div className="grid grid-cols-3 gap-2">
            <Stat label="epochs" value={epochs * 4} />
            <Stat label="train acc." value={pct(accuracy(train, prob))} tone={color} />
            <Stat label="test acc." value={pct(accuracy(test, prob))} />
          </div>
          <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Loss curve">
            <text x={6} y={14} fontSize={11} fontWeight={700}>loss (cross-entropy): {f3(hist.current[epochs - 1] ?? NaN)}</text>
            <polyline
              fill="none"
              stroke="#7b4fc9"
              strokeWidth={2}
              points={hist.current.map((l, i) => `${(i / Math.max(60, epochs - 1)) * (W - 8) + 4},${H - 6 - (Math.min(l, lossMax) / lossMax) * (H - 26)}`).join(' ')}
            />
          </svg>
          {hidden > 0 && (
            <div>
              <p className="text-xs font-bold">First hidden layer neurons</p>
              <div className="mt-1 grid grid-cols-4 gap-1.5 sm:grid-cols-8">
                {Array.from({ length: Math.min(8, hidden) }, (_, j) => (
                  <Field key={j} label={`Neuron ${j + 1}`} size="max-w-full">
                    <Regions res={12} prob={(x, y) => {
                      const a = net.current.forward([x, y])[1][j]
                      return act === 'tanh' ? (a + 1) / 2 : act === 'sigmoid' ? a : Math.min(1, 0.5 + a / 2)
                    }} />
                  </Field>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

// ── backpropagation through a computational graph ────────────────────────

type GNode = { id: string; label: string; x: number; y: number }
const GN: GNode[] = [
  { id: 'x', label: 'x', x: 50, y: 50 },
  { id: 'w', label: 'w', x: 50, y: 140 },
  { id: 'b', label: 'b', x: 160, y: 210 },
  { id: 'u', label: 'u = w·x', x: 160, y: 95 },
  { id: 'z', label: 'z = u + b', x: 270, y: 150 },
  { id: 'a', label: 'a = σ(z)', x: 380, y: 150 },
  { id: 'L', label: 'L = (a − y)²', x: 490, y: 150 },
]
const GE: [string, string][] = [['x', 'u'], ['w', 'u'], ['u', 'z'], ['b', 'z'], ['z', 'a'], ['a', 'L']]

export function BackpropLab({ color }: { color: string }) {
  const [p, setP] = useState({ w: 0.8, b: -0.5 })
  const [step, setStep] = useState(0)
  const x = 1.5
  const y = 1
  const eta = 1
  const u = p.w * x
  const zz = u + p.b
  const a = sigmoid(zz)
  const L = (a - y) ** 2
  const dA = 2 * (a - y)
  const dZ = dA * a * (1 - a)
  const dU = dZ
  const dB = dZ
  const dW = dU * x
  const dX = dU * p.w
  const fwd: Record<string, number> = { x, w: p.w, b: p.b, u, z: zz, a, L }
  const bwd: Record<string, number> = { L: 1, a: dA, z: dZ, u: dU, b: dB, w: dW, x: dX }
  const notes = [
    'Start: we know the inputs x = 1.5, the target y = 1, and the current parameters w and b.',
    'Forward: u = w·x.',
    'Forward: z = u + b.',
    'Forward: a = σ(z), the neuron’s output.',
    'Forward: the loss L = (a − y)². Now go backwards.',
    'Backward: ∂L/∂L = 1, then ∂L/∂a = 2(a − y).',
    'Backward: ∂L/∂z = ∂L/∂a · σ′(z), with σ′(z) = a(1 − a).',
    'Backward: an addition passes the gradient through unchanged, so ∂L/∂u = ∂L/∂b = ∂L/∂z.',
    'Backward: a multiplication swaps its inputs: ∂L/∂w = ∂L/∂u · x and ∂L/∂x = ∂L/∂u · w. Every gradient is now known.',
  ]
  const fwdShown = (id: string) => {
    if (['x', 'w', 'b'].includes(id)) return true
    return step >= ['u', 'z', 'a', 'L'].indexOf(id) + 1
  }
  const bwdShown = (id: string) => {
    if (step < 5) return false
    const at = { L: 5, a: 5, z: 6, u: 7, b: 7, w: 8, x: 8 }[id] ?? 99
    return step >= at
  }
  const W = 560
  const H = 250
  return (
    <Card title="Backpropagation, one node at a time" color={color} note="Backpropagation is the chain rule applied from the loss back to every parameter. Each node only needs its local derivative and the gradient arriving from above. Black numbers are forward values; red numbers are gradients ∂L/∂(node).">
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Computational graph">
        <defs>
          <marker id="bp-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--ink)" />
          </marker>
        </defs>
        {GE.map(([s, t]) => {
          const A = GN.find((n) => n.id === s)!
          const B = GN.find((n) => n.id === t)!
          return <line key={s + t} x1={A.x + 36} y1={A.y} x2={B.x - 40} y2={B.y} stroke="var(--ink)" strokeWidth={1.6} markerEnd="url(#bp-arr)" />
        })}
        {GN.map((n) => (
          <g key={n.id}>
            <rect x={n.x - 40} y={n.y - 26} width={80} height={52} rx={8} fill={`color-mix(in srgb, ${color} 14%, var(--surface))`} stroke="var(--ink)" strokeWidth={2} />
            <text x={n.x} y={n.y - 10} textAnchor="middle" fontSize={10.5} fontWeight={700}>{n.label}</text>
            <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize={12} fontFamily="monospace">{fwdShown(n.id) ? fwd[n.id].toFixed(3) : '?'}</text>
            <text x={n.x} y={n.y + 19} textAnchor="middle" fontSize={11} fontFamily="monospace" fill="#d9534f" fontWeight={700}>{bwdShown(n.id) ? `∇ ${bwd[n.id].toFixed(3)}` : ''}</text>
          </g>
        ))}
        <text x={490} y={205} textAnchor="middle" fontSize={11} fill="var(--ink-soft)">target y = 1</text>
      </svg>
      <p className="min-h-10 rounded-[var(--radius)] px-3 py-2 text-sm font-bold" style={{ background: 'var(--paper-2)' }}>{notes[step]}</p>
      <div className="flex flex-wrap gap-2">
        <Btn onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>← Back</Btn>
        <Btn onClick={() => setStep((s) => Math.min(notes.length - 1, s + 1))} disabled={step === notes.length - 1}>Next →</Btn>
        <Btn onClick={() => { setP({ w: p.w - eta * dW, b: p.b - eta * dB }); setStep(4) }} disabled={step < notes.length - 1}>Apply update (η = 1) and redo</Btn>
        <Btn onClick={() => { setP({ w: 0.8, b: -0.5 }); setStep(0) }}>↺ Reset</Btn>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="loss L" value={step >= 4 ? f3(L) : '?'} tone={color} />
        <Stat label="∂L/∂w" value={step >= 8 ? f3(dW) : '?'} />
        <Stat label="new w = w − η·∂L/∂w" value={step >= 8 ? f3(p.w - eta * dW) : '?'} />
        <Stat label="new b = b − η·∂L/∂b" value={step >= 8 ? f3(p.b - eta * dB) : '?'} />
      </div>
    </Card>
  )
}

// ── convolution ──────────────────────────────────────────────────────────

const IMG = [
  '00000000',
  '00111100',
  '00111100',
  '00111100',
  '00111100',
  '00000000',
  '00000000',
  '00000000',
].map((r) => [...r].map(Number))

const KERNELS: Record<string, { k: number[][]; label: string; note: string }> = {
  vertical: { k: [[1, 0, -1], [1, 0, -1], [1, 0, -1]], label: 'Vertical edges', note: 'Positive where brightness falls from left to right, negative where it rises: it lights up the left and right edges of the square.' },
  horizontal: { k: [[1, 1, 1], [0, 0, 0], [-1, -1, -1]], label: 'Horizontal edges', note: 'The same idea turned 90°: it finds the top and bottom edges.' },
  blur: { k: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].map((r) => r.map((v) => v / 9)), label: 'Blur (average)', note: 'Every output is the average of a 3×3 neighbourhood, which smooths the image.' },
  sharpen: { k: [[0, -1, 0], [-1, 5, -1], [0, -1, 0]], label: 'Sharpen', note: 'Boosts each pixel relative to its neighbours, exaggerating edges.' },
}

export function ConvLab({ color }: { color: string }) {
  const [kname, setK] = useState('vertical')
  const [pos, setPos] = useState(35)
  const [on, setOn] = useState(false)
  const { k, note } = KERNELS[kname]
  const out = conv2d(IMG, k)
  const n = out.length
  useTicker(on, 280, () => setPos((p) => (p >= n * n - 1 ? (setOn(false), p) : p + 1)))
  const oi = Math.floor(pos / n)
  const oj = pos % n
  const cell = 30
  const grid = (m: number[][], highlight: (i: number, j: number) => boolean, val: (v: number, i: number, j: number) => ReactNode, fill: (v: number, i: number, j: number) => string, onPick?: (i: number, j: number) => void) => (
    <svg viewBox={`0 0 ${m[0].length * cell + 4} ${m.length * cell + 4}`} className="block h-auto w-full rounded-[var(--radius)]" role="img" aria-label="Grid">
      {m.map((row, i) =>
        row.map((v, j) => (
          <g key={`${i}-${j}`} onClick={() => onPick?.(i, j)} style={onPick ? { cursor: 'pointer' } : undefined}>
            <rect x={2 + j * cell} y={2 + i * cell} width={cell} height={cell} fill={fill(v, i, j)} stroke="var(--ink)" strokeOpacity={0.3} />
            <text x={2 + j * cell + cell / 2} y={2 + i * cell + cell / 2 + 4} textAnchor="middle" fontSize={10} fontFamily="monospace">{val(v, i, j)}</text>
            {highlight(i, j) && <rect x={2 + j * cell} y={2 + i * cell} width={cell} height={cell} fill="none" stroke={color} strokeWidth={3} />}
          </g>
        )),
      )}
    </svg>
  )
  const maxAbs = Math.max(...out.flat().map(Math.abs), 1e-6)
  const diverge = (v: number) => `color-mix(in srgb, ${v >= 0 ? C1 : C0} ${Math.round((Math.abs(v) / maxAbs) * 70)}%, var(--surface))`
  const terms = k.flatMap((r, a) => r.map((kv, b) => [IMG[oi + a][oj + b], kv] as const))
  return (
    <Card title="Convolution: sliding a filter over an image" color={color} note="A convolutional layer slides a small grid of weights (the kernel) across the image. At each position it multiplies the overlapping numbers and adds them up, giving one pixel of the output feature map. In a CNN the kernel values are learned, not chosen by hand.">
      <Pills label="Kernel" value={kname} options={Object.entries(KERNELS).map(([key, v]) => [key, v.label] as [string, string])} onChange={setK} />
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
        <div>
          <p className="mb-1 text-xs font-bold">Input image (8×8)</p>
          {grid(IMG, (i, j) => i >= oi && i < oi + 3 && j >= oj && j < oj + 3, (v) => v, (v, i, j) => (i >= oi && i < oi + 3 && j >= oj && j < oj + 3 ? `color-mix(in srgb, ${color} 40%, ${v ? '#333' : '#fff'})` : v ? '#333' : '#fff'))}
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-1 text-xs font-bold">Kernel</p>
          <div className="w-20 sm:w-24">{grid(k, () => false, (v) => (Number.isInteger(v) ? v : v.toFixed(2)), (v) => diverge(v * maxAbs / 5))}</div>
        </div>
        <div>
          <p className="mb-1 text-xs font-bold">Feature map (6×6)</p>
          {grid(out, (i, j) => i === oi && j === oj, (v, i, j) => (i * n + j <= pos ? (Number.isInteger(v) ? v : v.toFixed(1)) : ''), (v, i, j) => (i * n + j <= pos ? diverge(v) : 'var(--paper-2)'), (i, j) => setPos(i * n + j))}
        </div>
      </div>
      <p className="rounded-[var(--radius)] px-3 py-2 font-mono text-xs leading-relaxed break-words" style={{ background: 'var(--paper-2)' }}>
        output[{oi}][{oj}] = {terms.map(([iv, kv]) => `${iv}·${Number.isInteger(kv) ? kv : kv.toFixed(2)}`).join(' + ')} = <b>{Number.isInteger(out[oi][oj]) ? out[oi][oj] : out[oi][oj].toFixed(2)}</b>
      </p>
      <div className="flex flex-wrap gap-2">
        <Btn onClick={() => { if (pos >= n * n - 1) setPos(0); setOn(!on) }} active={on}>{on ? '❚❚ Pause' : '▶ Slide'}</Btn>
        <Btn onClick={() => setPos((p) => Math.min(n * n - 1, p + 1))}>Step</Btn>
        <Btn onClick={() => { setOn(false); setPos(0) }}>↺ Start over</Btn>
      </div>
      <p className="text-xs" style={soft}>{note} Output size: (8 − 3)/1 + 1 = 6 in each direction.</p>
    </Card>
  )
}

// ── attention ────────────────────────────────────────────────────────────

const SENT = ['The', 'animal', "didn't", 'cross', 'the', 'street', 'because', 'it', 'was', 'too', 'tired']

function attnLogits(ending: 'tired' | 'wide') {
  const n = SENT.length
  const L: number[][] = Array.from({ length: n }, (_, q) => Array.from({ length: n }, (_, k) => (k === q ? 1.2 : k === q - 1 ? 0.9 : 0)))
  const link = (q: number, k: number, v: number) => (L[q][k] = v)
  link(1, 0, 2)
  link(5, 4, 2.2)
  link(3, 1, 1.8)
  link(3, 5, 2)
  link(2, 3, 1.6)
  link(6, 3, 1.2)
  link(8, 7, 2)
  link(9, 10, 1)
  if (ending === 'tired') {
    link(7, 1, 3.4)
    link(7, 5, 1.2)
    link(10, 1, 2.2)
    link(10, 7, 2)
  } else {
    link(7, 5, 3.4)
    link(7, 1, 1.2)
    link(10, 5, 2.2)
    link(10, 7, 2)
  }
  return L
}

export function AttentionLab({ color }: { color: string }) {
  const [ending, setEnding] = useState<'tired' | 'wide'>('tired')
  const [q, setQ] = useState(7)
  const [causal, setCausal] = useState(false)
  const [temp, setTemp] = useState(1)
  const words = [...SENT.slice(0, 10), ending]
  const logits = attnLogits(ending)
  const weights = logits.map((row, i) => softmax(row.map((v, j) => (causal && j > i ? -Infinity : v)), temp))
  const row = weights[q]
  return (
    <Card title="Attention: which words does each word look at?" color={color} note="In a transformer every token builds a query and compares it with every other token's key; a softmax turns the scores into weights that add to 1. Here 'it' attends mostly to 'animal' when the sentence ends in 'tired', and to 'street' when it ends in 'wide'. The weights are illustrative, in the spirit of what trained models learn.">
      <div className="flex flex-wrap gap-2">
        <Pills label="Ending" value={ending} options={[['tired', '…too tired'], ['wide', '…too wide']]} onChange={setEnding} />
        <Btn onClick={() => setCausal(!causal)} active={causal}>Causal mask (GPT-style)</Btn>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {words.map((w, j) => (
          <button
            key={j}
            type="button"
            onClick={() => setQ(j)}
            className="rounded-[var(--radius)] border px-2 py-1 text-sm font-bold pointer-coarse:min-h-10"
            style={{ borderColor: 'var(--line)', background: j === q ? 'var(--ink)' : `color-mix(in srgb, ${color} ${Math.round(row[j] * 100)}%, var(--surface))`, color: j === q ? 'var(--surface)' : 'var(--ink)' }}
          >
            {w}
            <span className="ml-1 font-mono text-[10px] font-normal">{j === q ? 'query' : `${Math.round(row[j] * 100)}%`}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        {words.map((w, j) => (
          <div key={j} className="grid grid-cols-[5.5rem_1fr_3rem] items-center gap-2 text-xs">
            <span className="truncate font-bold">{w}</span>
            <div className="h-3 overflow-hidden rounded-full" style={{ background: 'var(--paper-2)' }}>
              <div className="h-full rounded-full" style={{ width: `${row[j] * 100}%`, background: color }} />
            </div>
            <span className="text-right font-mono">{(row[j] * 100).toFixed(1)}%</span>
          </div>
        ))}
      </div>
      <Slider label="Softmax temperature (sharper ← → flatter)" value={temp} min={0.3} max={3} step={0.1} onChange={setTemp} />
      <div>
        <p className="mb-1 text-xs font-bold">The whole attention matrix (rows: query word, columns: key word)</p>
        <div className="grid max-w-lg gap-px" style={{ gridTemplateColumns: `4.5rem repeat(${words.length}, minmax(0, 1fr))` }}>
          <span />
          {words.map((w, j) => (
            <span key={j} className="truncate text-center text-[9px] font-bold" title={w}>{w.slice(0, 4)}</span>
          ))}
          {weights.map((r, i) => (
            <div key={i} className="contents">
              <button type="button" onClick={() => setQ(i)} className="truncate text-left text-[10px] font-bold">{words[i]}</button>
              {r.map((v, j) => (
                <span key={j} className="aspect-square" style={{ background: `color-mix(in srgb, ${color} ${Math.round(Math.sqrt(v) * 100)}%, var(--surface))`, outline: i === q ? '1px solid var(--ink)' : undefined }} title={`${words[i]} → ${words[j]}: ${(v * 100).toFixed(1)}%`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

// ── word embeddings ──────────────────────────────────────────────────────

const EMB: Record<string, [number, number]> = {
  king: [-0.42, 0.62], queen: [0.38, 0.6], man: [-0.48, -0.08], woman: [0.32, -0.1], prince: [-0.52, 0.36], princess: [0.28, 0.34], boy: [-0.6, -0.3], girl: [0.2, -0.32],
  dog: [-0.78, -0.62], puppy: [-0.88, -0.86], cat: [-0.42, -0.6], kitten: [-0.52, -0.84],
  apple: [0.66, -0.66], banana: [0.84, -0.56], cherry: [0.74, -0.84],
}

export function EmbeddingLab({ color }: { color: string }) {
  const [slots, setSlots] = useState<string[]>(['king', 'man', 'woman'])
  const [next, setNext] = useState(0)
  const [A, B, Cw] = slots
  const v: [number, number] = [EMB[A][0] - EMB[B][0] + EMB[Cw][0], EMB[A][1] - EMB[B][1] + EMB[Cw][1]]
  const ranked = Object.entries(EMB)
    .filter(([w]) => !slots.includes(w))
    .map(([w, e]) => [w, Math.hypot(e[0] - v[0], e[1] - v[1])] as const)
    .sort((a, b) => a[1] - b[1])
  const answer = ranked[0][0]
  const cos = (a: [number, number], b: [number, number]) => (a[0] * b[0] + a[1] * b[1]) / (Math.hypot(...a) * Math.hypot(...b))
  const toX = (x: number) => ((x + 1.05) / 2.1) * 320
  const toY = (y: number) => ((1.05 - y) / 2.1) * 320
  const pick = (w: string) => {
    setSlots((s) => s.map((x, i) => (i === next ? w : x)))
    setNext((n) => (n + 1) % 3)
  }
  return (
    <Card title="Word embeddings: meaning as geometry" color={color} note="Embeddings place words as vectors so that related words sit close together and consistent relationships become consistent directions. Tap three words to fill A − B + C. These 2D positions are hand-made for illustration; real embeddings have hundreds of dimensions learned from text.">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <svg viewBox="0 0 320 320" className="block h-auto w-full max-w-[22rem] rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Word embedding map">
          <defs>
            <marker id="em-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill={color} />
            </marker>
          </defs>
          <line x1={toX(EMB[B][0])} y1={toY(EMB[B][1])} x2={toX(EMB[A][0])} y2={toY(EMB[A][1])} stroke={color} strokeWidth={2.5} markerEnd="url(#em-arr)" />
          <line x1={toX(EMB[Cw][0])} y1={toY(EMB[Cw][1])} x2={toX(v[0])} y2={toY(v[1])} stroke={color} strokeWidth={2.5} strokeDasharray="6 4" markerEnd="url(#em-arr)" />
          {Object.entries(EMB).map(([w, [x, y]]) => (
            <g key={w} onClick={() => pick(w)} style={{ cursor: 'pointer' }}>
              <circle cx={toX(x)} cy={toY(y)} r={w === answer ? 8 : 5} fill={slots.includes(w) ? 'var(--ink)' : w === answer ? C1 : C0} stroke="var(--ink)" />
              <text x={toX(x) + 8} y={toY(y) + 4} fontSize={11.5} fontWeight={700} paintOrder="stroke" stroke="var(--surface)" strokeWidth={3}>{w}</text>
            </g>
          ))}
          <circle cx={toX(v[0])} cy={toY(v[1])} r={4} fill="none" stroke="var(--ink)" strokeWidth={2} />
        </svg>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-1.5 text-sm font-bold">
            {(['A', 'B', 'C'] as const).map((s, i) => (
              <span key={s} className="flex items-center gap-1.5">
                {i === 1 && '−'}
                {i === 2 && '+'}
                <button type="button" onClick={() => setNext(i)} className="rounded-[var(--radius)] border px-2 py-1" style={{ borderColor: 'var(--line)', background: next === i ? `color-mix(in srgb, ${color} 35%, var(--surface))` : 'var(--surface)' }}>
                  {slots[i]}
                </button>
              </span>
            ))}
            <span>≈</span>
            <span className="rounded-[var(--radius)] border px-2 py-1" style={{ borderColor: 'var(--line)', background: C1, color: '#1c1410' }}>{answer}</span>
          </div>
          <p className="text-xs" style={soft}>Highlighted slot fills next. Try puppy − dog + cat, or princess − girl + boy.</p>
          <Legend items={[['var(--ink)', 'your words'], [C1, 'nearest answer']]} />
          <Stat label={`cosine similarity(${A}, ${Cw})`} value={cos(EMB[A], EMB[Cw]).toFixed(3)} tone={color} />
          <Stat label={`distance from A − B + C to ${answer}`} value={ranked[0][1].toFixed(3)} />
        </div>
      </div>
    </Card>
  )
}
