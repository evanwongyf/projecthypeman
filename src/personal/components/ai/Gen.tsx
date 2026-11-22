import { useMemo, useRef, useState } from 'react'
import { PlotChart } from '../finance/PlotChart'
import { rng } from '../../lib/finance/series'
import { alphaBar, bpe, noisy, qEpisode, sampleIndex, softmax, truncate } from '../../lib/ai/seq'
import type { Grid } from '../../lib/ai/seq'
import { Btn, C0, C1, Card, PALETTE, Slider, Stat, soft, useTicker } from './shared'

// ── byte-pair encoding ─────────────────────────────────────────────────────

const TOKEN_COLORS = ['#cfe3ff', '#ffe0c2', '#d5f2e3', '#e6dcff', '#ffd6d6', '#f3e8c4']

export function BpeLab({ color }: { color: string }) {
  const [text, setText] = useState('low lower lowest newer newest wider widest slower slowest')
  const [merges, setMerges] = useState(8)
  const out = useMemo(() => bpe(text, merges), [text, merges])
  const chars = text.replace(/\s+/g, '').length
  const vocab = [...new Set(out.tokens)]
  return (
    <Card title="Tokenisation with byte-pair encoding" color={color} note="Language models read tokens, not letters or whole words. BPE starts from single characters and repeatedly merges the most frequent neighbouring pair into a new token. Common pieces like 'est' and 'er' become tokens, so even unseen words split into familiar parts. ▁ marks the start of a word.">
      <textarea className="input-field min-h-16 text-sm" value={text} onChange={(e) => setText(e.target.value)} aria-label="Text to tokenise" />
      <Slider label="Merges learned" value={merges} min={0} max={30} step={1} onChange={setMerges} />
      <div className="flex flex-wrap gap-x-3 gap-y-2">
        {out.words.map((w, i) => (
          <span key={i} className="flex">
            {w.map((t, j) => (
              <span key={j} className="border-y-2 border-l-2 px-1 py-0.5 font-mono text-sm last:border-r-2" style={{ borderColor: 'var(--line)', background: TOKEN_COLORS[vocab.indexOf(t) % TOKEN_COLORS.length] }}>
                {t}
              </span>
            ))}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Stat label="characters" value={chars} />
        <Stat label="tokens" value={out.tokens.length} tone={color} />
        <Stat label="chars per token" value={(chars / out.tokens.length).toFixed(2)} />
      </div>
      {out.history.length > 0 && (
        <ol className="flex flex-wrap gap-1.5 text-xs">
          {out.history.map((h, i) => (
            <li key={i} className="rounded-full border px-2 py-0.5 font-mono" style={{ borderColor: 'var(--line)' }}>
              {i + 1}. {h.pair} <span style={soft}>×{h.count}</span>
            </li>
          ))}
        </ol>
      )}
    </Card>
  )
}

// ── next-token sampling ──────────────────────────────────────────────────

const CANDIDATES: [string, number][] = [
  ['mat', 3.2], ['floor', 2.4], ['sofa', 2.1], ['chair', 1.6], ['roof', 1.4], ['table', 1.1], ['windowsill', 1.0], ['keyboard', 0.6], ['moon', -0.5], ['banana', -1.5],
]

export function SamplingLab({ color }: { color: string }) {
  const [T, setT] = useState(1)
  const [k, setK] = useState(10)
  const [p, setP] = useState(1)
  const [draws, setDraws] = useState<string[]>([])
  const r = useRef(rng(42))
  const base = softmax(CANDIDATES.map((c) => c[1]), 1)
  const tempered = softmax(CANDIDATES.map((c) => c[1]), T)
  const final = truncate(tempered, k, p)
  const draw = (n: number) => {
    const out: string[] = []
    for (let i = 0; i < n; i++) out.push(CANDIDATES[sampleIndex(final, r.current())][0])
    setDraws((d) => [...out, ...d].slice(0, 24))
  }
  return (
    <Card title="Choosing the next token: temperature, top-k and top-p" color={color} note="The model outputs a score (logit) for every token; softmax turns them into probabilities. Temperature divides the logits before the softmax: below 1 sharpens the distribution (safer, more repetitive), above 1 flattens it (more varied, more nonsense). Top-k keeps the k likeliest tokens; top-p keeps the smallest set whose probabilities add to p.">
      <p className="rounded-[var(--radius)] px-3 py-2 font-mono text-sm" style={{ background: 'var(--paper-2)' }}>The cat sat on the ___</p>
      <div className="flex flex-col gap-1">
        {CANDIDATES.map(([w], i) => (
          <div key={w} className="grid grid-cols-[5.5rem_1fr_3.2rem] items-center gap-2 text-xs">
            <span className="truncate font-bold">{w}</span>
            <div className="relative h-3.5 overflow-hidden rounded-full" style={{ background: 'var(--paper-2)' }}>
              <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${base[i] * 100}%`, background: 'var(--ink)', opacity: 0.15 }} />
              <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${final[i] * 100}%`, background: final[i] ? color : 'transparent' }} />
            </div>
            <span className="text-right font-mono">{final[i] ? `${(final[i] * 100).toFixed(1)}%` : 'cut'}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <Slider label="Temperature T" value={T} min={0.1} max={2.5} step={0.05} onChange={setT} />
        <Slider label="Top-k" value={k} min={1} max={10} step={1} onChange={setK} />
        <Slider label="Top-p" value={p} min={0.1} max={1} step={0.05} onChange={setP} />
      </div>
      <div className="flex flex-wrap gap-2">
        <Btn onClick={() => draw(1)}>Sample once</Btn>
        <Btn onClick={() => draw(12)}>Sample 12</Btn>
        <Btn onClick={() => setDraws([])}>Clear</Btn>
      </div>
      {draws.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {draws.map((d, i) => (
            <span key={i} className="rounded-full border px-2 py-0.5 text-xs font-bold" style={{ borderColor: 'var(--line)', background: `color-mix(in srgb, ${PALETTE[CANDIDATES.findIndex((c) => c[0] === d) % PALETTE.length]} 25%, var(--surface))` }}>
              {d}
            </span>
          ))}
        </div>
      )}
      <p className="text-xs" style={soft}>Faint bars: the raw probabilities at T = 1. Coloured bars: after your settings. As T → 0, sampling becomes greedy: always "mat".</p>
    </Card>
  )
}

// ── diffusion ────────────────────────────────────────────────────────────

const SMILE = [
  '................',
  '.....######.....',
  '...##......##...',
  '..#..........#..',
  '.#............#.',
  '.#...##..##...#.',
  '#....##..##....#',
  '#..............#',
  '#..............#',
  '#..#........#..#',
  '.#..#......#..#.',
  '.#...######...#.',
  '..#..........#..',
  '...##......##...',
  '.....######.....',
  '................',
].flatMap((r) => [...r].map((ch) => (ch === '#' ? 1 : -1)))

export function DiffusionLab({ color }: { color: string }) {
  const [t, setT] = useState(0)
  const [dir, setDir] = useState<0 | 1 | -1>(0)
  useTicker(dir !== 0, 60, () =>
    setT((v) => {
      const n = v + dir * 20
      if (n >= 1000 || n <= 0) setDir(0)
      return Math.max(0, Math.min(1000, n))
    }),
  )
  const x = noisy(SMILE, t)
  const ab = alphaBar(t)
  const cell = 14
  return (
    <Card title="Diffusion: destroying an image with noise, step by step" color={color} note="The forward process adds a little Gaussian noise at each of 1,000 steps until only noise remains. A diffusion model is trained to predict the noise in a noisy image, so it can run the process backwards: start from pure noise and remove a little at a time. The reverse button here cheats by using the original picture, to show the path a perfect denoiser would follow.">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,16rem)_1fr] sm:items-start">
        <svg viewBox={`0 0 ${16 * cell} ${16 * cell}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }} role="img" aria-label={`Image at diffusion step ${t}`}>
          {x.map((v, i) => {
            const g = Math.round(Math.max(0, Math.min(1, (v + 1) / 2)) * 255)
            return <rect key={i} x={(i % 16) * cell} y={Math.floor(i / 16) * cell} width={cell} height={cell} fill={`rgb(${255 - g},${255 - g},${255 - g})`} />
          })}
        </svg>
        <div className="flex flex-col gap-2">
          <Slider label="Diffusion step t" value={t} min={0} max={1000} step={10} onChange={(v) => { setDir(0); setT(v) }} />
          <div className="flex flex-wrap gap-2">
            <Btn onClick={() => { if (t >= 1000) setT(0); setDir(1) }} active={dir === 1}>▶ Add noise</Btn>
            <Btn onClick={() => { if (t <= 0) setT(1000); setDir(-1) }} active={dir === -1}>◀ Denoise</Btn>
            <Btn onClick={() => setDir(0)}>❚❚</Btn>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Stat label="signal √ᾱₜ" value={Math.sqrt(ab).toFixed(3)} tone={C0} />
            <Stat label="noise √(1 − ᾱₜ)" value={Math.sqrt(1 - ab).toFixed(3)} tone={C1} />
          </div>
          <PlotChart
            block={{
              t: 'plot',
              x: [0, 1000],
              y: [0, 1],
              xLabel: 'step t',
              curves: [{ f: (s) => Math.sqrt(alphaBar(Math.round(s))), color: C0, label: 'signal' }, { f: (s) => Math.sqrt(1 - alphaBar(Math.round(s))), color: C1, label: 'noise' }],
              vlines: [{ x: t }],
            }}
          />
        </div>
      </div>
    </Card>
  )
}

// ── Q-learning ───────────────────────────────────────────────────────────

const WORLD: Grid = { w: 6, h: 5, start: [0, 4], goal: [5, 0], pits: [[2, 1], [3, 3], [5, 2]], walls: [[1, 1], [1, 2], [3, 1], [4, 3]] }
const ARROWS = ['↑', '→', '↓', '←']

export function QLearningLab({ color }: { color: string }) {
  const fresh = () => Array.from({ length: WORLD.h }, () => Array.from({ length: WORLD.w }, () => [0, 0, 0, 0]))
  const Q = useRef(fresh())
  const r = useRef(rng(5))
  const [episodes, setEpisodes] = useState(0)
  const [path, setPath] = useState<[number, number][]>([WORLD.start])
  const [eps, setEps] = useState(0.2)
  const [gamma, setGamma] = useState(0.9)
  const [on, setOn] = useState(false)
  const run = (n: number) => {
    let p: [number, number][] = []
    for (let i = 0; i < n; i++) p = qEpisode(WORLD, Q.current, { alpha: 0.5, gamma, eps }, r.current)
    setPath(p)
    setEpisodes((e) => e + n)
  }
  useTicker(on, 250, () => run(1))
  const isWall = (x: number, y: number) => WORLD.walls.some(([a, b]) => a === x && b === y)
  const isPit = (x: number, y: number) => WORLD.pits.some(([a, b]) => a === x && b === y)
  const maxQ = Math.max(1, ...Q.current.flat().map((q) => Math.abs(Math.max(...q))))
  const cell = 64
  const last = path[path.length - 1]
  const reached = last[0] === WORLD.goal[0] && last[1] === WORLD.goal[1]
  return (
    <Card title="Q-learning: an agent learns a maze by trial and error" color={color} note="The agent (●) starts bottom-left. Each move costs −1, the goal (★) gives +10 and a pit (✕) gives −10. After every move it nudges its estimate Q(s, a) towards reward + γ·(best Q of the next square). Arrows show the best action it currently believes in; green squares are valuable. With exploration ε it sometimes tries a random move.">
      <svg viewBox={`0 0 ${WORLD.w * cell} ${WORLD.h * cell}`} className="block h-auto w-full max-w-md rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Grid world">
        {Array.from({ length: WORLD.h }, (_, y) =>
          Array.from({ length: WORLD.w }, (_, x) => {
            const q = Q.current[y][x]
            const best = Math.max(...q)
            const special = isWall(x, y) || isPit(x, y) || (x === WORLD.goal[0] && y === WORLD.goal[1])
            const touched = q.some((v) => v !== 0)
            return (
              <g key={`${x}-${y}`}>
                <rect x={x * cell} y={y * cell} width={cell} height={cell} stroke="var(--ink)" strokeOpacity={0.3} fill={isWall(x, y) ? '#444' : isPit(x, y) ? '#f3c2c2' : special ? '#d5f2e3' : touched ? `color-mix(in srgb, ${best >= 0 ? '#2f9e6e' : '#d9534f'} ${Math.round((Math.abs(best) / maxQ) * 55)}%, var(--surface))` : 'var(--surface)'} />
                {isPit(x, y) && <text x={x * cell + cell / 2} y={y * cell + cell / 2 + 8} textAnchor="middle" fontSize={24} fill="#d9534f">✕</text>}
                {x === WORLD.goal[0] && y === WORLD.goal[1] && <text x={x * cell + cell / 2} y={y * cell + cell / 2 + 9} textAnchor="middle" fontSize={26}>★</text>}
                {!special && touched && (
                  <>
                    <text x={x * cell + cell / 2} y={y * cell + cell / 2 + 2} textAnchor="middle" fontSize={22} fontWeight={700}>{ARROWS[q.indexOf(best)]}</text>
                    <text x={x * cell + cell / 2} y={y * cell + cell - 6} textAnchor="middle" fontSize={10} fontFamily="monospace">{best.toFixed(1)}</text>
                  </>
                )}
              </g>
            )
          }),
        )}
        <polyline points={path.map(([x, y]) => `${x * cell + cell / 2},${y * cell + cell / 2}`).join(' ')} fill="none" stroke={color} strokeWidth={4} strokeOpacity={0.7} strokeLinejoin="round" />
        <circle cx={WORLD.start[0] * cell + cell / 2} cy={WORLD.start[1] * cell + cell / 2} r={10} fill="var(--ink)" />
      </svg>
      <div className="flex flex-wrap gap-2">
        <Btn onClick={() => setOn(!on)} active={on}>{on ? '❚❚ Pause' : '▶ Train'}</Btn>
        <Btn onClick={() => run(1)}>1 episode</Btn>
        <Btn onClick={() => run(50)}>50 episodes</Btn>
        <Btn onClick={() => { setOn(false); Q.current = fresh(); r.current = rng(5); setEpisodes(0); setPath([WORLD.start]) }}>↺ Forget everything</Btn>
      </div>
      <div className="flex flex-wrap gap-3">
        <Slider label="Exploration ε" value={eps} min={0} max={0.6} step={0.05} onChange={setEps} />
        <Slider label="Discount γ" value={gamma} min={0.5} max={0.99} step={0.01} onChange={setGamma} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Stat label="episodes" value={episodes} />
        <Stat label="last episode moves" value={path.length - 1} tone={color} />
        <Stat label="last outcome" value={path.length < 2 ? '–' : reached ? 'goal ★' : 'pit or timeout'} />
      </div>
      <p className="text-xs" style={soft}>The shortest safe route takes 9 moves.</p>
    </Card>
  )
}
