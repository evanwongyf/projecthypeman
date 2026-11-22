import { rng } from '../finance/series'
import { gauss } from './data'

// Language-model, vision and reinforcement-learning helpers for the AI diagrams.

// ── softmax, temperature and nucleus (top-p) sampling ─────────────────────

export function softmax(logits: number[], T = 1) {
  const z = logits.map((l) => l / Math.max(T, 1e-6))
  const m = Math.max(...z)
  const e = z.map((v) => Math.exp(v - m))
  const s = e.reduce((a, b) => a + b, 0)
  return e.map((v) => v / s)
}

// Keeps the most likely tokens until their probabilities add up to p (and at most k),
// then renormalises. Returns probabilities with the dropped ones set to 0.
export function truncate(probs: number[], k: number, p: number) {
  const order = probs.map((q, i) => [q, i] as const).sort((a, b) => b[0] - a[0])
  const keep = new Set<number>()
  let cum = 0
  for (const [q, i] of order) {
    if (keep.size >= k || (cum >= p && keep.size > 0)) break
    keep.add(i)
    cum += q
  }
  const kept = probs.map((q, i) => (keep.has(i) ? q : 0))
  const s = kept.reduce((a, b) => a + b, 0)
  return kept.map((q) => q / s)
}

export function sampleIndex(probs: number[], u: number) {
  let cum = 0
  for (let i = 0; i < probs.length; i++) {
    cum += probs[i]
    if (u < cum) return i
  }
  return probs.length - 1
}

// ── byte-pair encoding, the tokeniser behind most language models ────────

// Starts from single characters (words marked with a leading "▁") and repeatedly
// merges the most frequent adjacent pair. Returns the tokens after `merges` steps.
export function bpe(text: string, merges: number) {
  const words = text.toLowerCase().split(/\s+/).filter(Boolean)
  let seqs = words.map((w) => ['▁', ...w])
  const history: { pair: string; count: number }[] = []
  for (let step = 0; step < merges; step++) {
    const counts = new Map<string, number>()
    for (const s of seqs) for (let i = 0; i < s.length - 1; i++) {
      const key = s[i] + '\u0000' + s[i + 1]
      counts.set(key, (counts.get(key) ?? 0) + 1)
    }
    let best = ''
    let bc = 1
    for (const [k, c] of counts) if (c > bc) {
      best = k
      bc = c
    }
    if (!best) break
    const [a, b] = best.split('\u0000')
    history.push({ pair: `${a} + ${b}`, count: bc })
    seqs = seqs.map((s) => {
      const out: string[] = []
      for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && s[i] === a && s[i + 1] === b) {
          out.push(a + b)
          i++
        } else out.push(s[i])
      }
      return out
    })
  }
  return { tokens: seqs.flat(), words: seqs, history }
}

// ── convolution ──────────────────────────────────────────────────────────

export function conv2d(img: number[][], k: number[][]) {
  const kh = k.length
  const kw = k[0].length
  const out: number[][] = []
  for (let i = 0; i + kh <= img.length; i++) {
    const row: number[] = []
    for (let j = 0; j + kw <= img[0].length; j++) {
      let s = 0
      for (let a = 0; a < kh; a++) for (let b = 0; b < kw; b++) s += img[i + a][j + b] * k[a][b]
      row.push(s)
    }
    out.push(row)
  }
  return out
}

// ── scaled dot-product attention ─────────────────────────────────────────

export function attention(Q: number[][], K: number[][]) {
  const d = K[0].length
  return Q.map((q) => softmax(K.map((k) => k.reduce((s, v, i) => s + v * q[i], 0) / Math.sqrt(d))))
}

// ── diffusion: the forward (noising) process ─────────────────────────────

// Linear β schedule from 1e-4 to 0.02 over T steps (as in Ho et al., 2020).
export function alphaBar(t: number, T = 1000) {
  let ab = 1
  for (let s = 1; s <= t; s++) ab *= 1 - (1e-4 + ((0.02 - 1e-4) * (s - 1)) / (T - 1))
  return ab
}

// x_t = √ᾱ·x₀ + √(1−ᾱ)·ε, with the same noise ε for every t so the picture fades smoothly.
export function noisy(x0: number[], t: number, seed = 9) {
  const r = rng(seed)
  const eps = x0.map(() => gauss(r))
  const ab = alphaBar(t)
  return x0.map((v, i) => Math.sqrt(ab) * v + Math.sqrt(1 - ab) * eps[i])
}

// ── Q-learning in a grid world ───────────────────────────────────────────

export type Grid = { w: number; h: number; start: [number, number]; goal: [number, number]; pits: [number, number][]; walls: [number, number][] }
export const MOVES: [number, number][] = [[0, -1], [1, 0], [0, 1], [-1, 0]] // up, right, down, left

export function gridStep(g: Grid, s: [number, number], a: number): { next: [number, number]; reward: number; done: boolean } {
  const nx = s[0] + MOVES[a][0]
  const ny = s[1] + MOVES[a][1]
  const blocked = nx < 0 || ny < 0 || nx >= g.w || ny >= g.h || g.walls.some(([x, y]) => x === nx && y === ny)
  const next: [number, number] = blocked ? s : [nx, ny]
  if (next[0] === g.goal[0] && next[1] === g.goal[1]) return { next, reward: 10, done: true }
  if (g.pits.some(([x, y]) => x === next[0] && y === next[1])) return { next, reward: -10, done: true }
  return { next, reward: -1, done: false }
}

// Runs one episode of ε-greedy Q-learning, updating Q in place. Returns the path.
export function qEpisode(g: Grid, Q: number[][][], opts: { alpha: number; gamma: number; eps: number }, r: () => number) {
  let s = g.start
  const path: [number, number][] = [s]
  for (let step = 0; step < 100; step++) {
    const q = Q[s[1]][s[0]]
    const a = r() < opts.eps ? Math.floor(r() * 4) : q.indexOf(Math.max(...q))
    const { next, reward, done } = gridStep(g, s, a)
    const target = reward + (done ? 0 : opts.gamma * Math.max(...Q[next[1]][next[0]]))
    q[a] += opts.alpha * (target - q[a])
    s = next
    path.push(s)
    if (done) break
  }
  return path
}
