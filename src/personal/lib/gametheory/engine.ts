// Small, dependency-free engines behind the game theory labs.

export function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// ---------- two by two games ----------
export type Game2 = { name: string; rows: [string, string]; cols: [string, string]; a: [[number, number], [number, number]]; b: [[number, number], [number, number]]; note: string }

export const GAMES: Record<string, Game2> = {
  pd: { name: 'Prisoner’s dilemma', rows: ['Cooperate', 'Defect'], cols: ['Cooperate', 'Defect'], a: [[3, 0], [5, 1]], b: [[3, 5], [0, 1]], note: 'Defecting is best whatever the other does, yet both do worse than if both cooperated.' },
  stag: { name: 'Stag hunt', rows: ['Stag', 'Hare'], cols: ['Stag', 'Hare'], a: [[4, 0], [3, 3]], b: [[4, 3], [0, 3]], note: 'Two equilibria: a risky, better one (both stag) and a safe, worse one (both hare). Trust decides.' },
  chicken: { name: 'Chicken (hawk and dove)', rows: ['Swerve', 'Straight'], cols: ['Swerve', 'Straight'], a: [[0, -1], [1, -10]], b: [[0, 1], [-1, -10]], note: 'Each wants to be the one who does not back down, but a crash is the worst outcome for both.' },
  bos: { name: 'Battle of the sexes', rows: ['Opera', 'Football'], cols: ['Opera', 'Football'], a: [[2, 0], [0, 1]], b: [[1, 0], [0, 2]], note: 'Both want to be together, but disagree on where. Two equilibria; a convention or a coin flip picks one.' },
  pennies: { name: 'Matching pennies', rows: ['Heads', 'Tails'], cols: ['Heads', 'Tails'], a: [[1, -1], [-1, 1]], b: [[-1, 1], [1, -1]], note: 'Pure conflict. No pure equilibrium: the only stable play is to randomise 50:50.' },
  custom: { name: 'Your own game', rows: ['Up', 'Down'], cols: ['Left', 'Right'], a: [[2, 0], [3, 1]], b: [[2, 3], [0, 1]], note: 'Edit the numbers. Row player’s payoff is first in each cell, column player’s is second.' },
}

export type Analysis = {
  br: { row: boolean[][]; col: boolean[][] }
  nash: [number, number][]
  domRow: number | null
  domCol: number | null
  mixed: { p: number; q: number } | null
  best: [number, number]
}

export function analyse(g: Game2): Analysis {
  const { a, b } = g
  const row = [[false, false], [false, false]]
  const col = [[false, false], [false, false]]
  for (let j = 0; j < 2; j++) {
    const m = Math.max(a[0][j], a[1][j])
    for (let i = 0; i < 2; i++) row[i][j] = a[i][j] === m
  }
  for (let i = 0; i < 2; i++) {
    const m = Math.max(b[i][0], b[i][1])
    for (let j = 0; j < 2; j++) col[i][j] = b[i][j] === m
  }
  const nash: [number, number][] = []
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) if (row[i][j] && col[i][j]) nash.push([i, j])
  const dom = (u: number[][], me: number) => {
    const o = 1 - me
    return u[me][0] > u[o][0] && u[me][1] > u[o][1] ? me : null
  }
  const domRow = dom(a, 0) ?? dom(a, 1)
  const bt = [[b[0][0], b[1][0]], [b[0][1], b[1][1]]]
  const domCol = dom(bt, 0) ?? dom(bt, 1)
  // mixed: row plays top with p so that column is indifferent; column plays left with q so that row is indifferent
  const dp = b[0][0] - b[1][0] - b[0][1] + b[1][1]
  const dq = a[0][0] - a[0][1] - a[1][0] + a[1][1]
  let mixed: Analysis['mixed'] = null
  if (dp !== 0 && dq !== 0) {
    const p = (b[1][1] - b[1][0]) / dp
    const q = (a[1][1] - a[0][1]) / dq
    if (p > 0 && p < 1 && q > 0 && q < 1) mixed = { p, q }
  }
  let best: [number, number] = [0, 0]
  let bs = -Infinity
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) if (a[i][j] + b[i][j] > bs) { bs = a[i][j] + b[i][j]; best = [i, j] }
  return { br: { row, col }, nash, domRow, domCol, mixed, best }
}

// ---------- repeated prisoner's dilemma ----------
export type Move = 'C' | 'D'
export type Strategy = { id: string; name: string; blurb: string; move: (my: Move[], their: Move[], r: () => number) => Move }
export const STRATEGIES: Strategy[] = [
  { id: 'allc', name: 'Always cooperate', blurb: 'Never defects.', move: () => 'C' },
  { id: 'alld', name: 'Always defect', blurb: 'Never cooperates.', move: () => 'D' },
  { id: 'tft', name: 'Tit for tat', blurb: 'Cooperates first, then copies the other’s last move.', move: (_m, t) => (t.length ? t[t.length - 1] : 'C') },
  { id: 'gtft', name: 'Generous tit for tat', blurb: 'Like tit for tat, but forgives a defection 1 time in 10.', move: (_m, t, r) => (t.length && t[t.length - 1] === 'D' ? (r() < 0.1 ? 'C' : 'D') : 'C') },
  { id: 'tf2t', name: 'Tit for two tats', blurb: 'Defects only after two defections in a row.', move: (_m, t) => (t.length >= 2 && t[t.length - 1] === 'D' && t[t.length - 2] === 'D' ? 'D' : 'C') },
  { id: 'stft', name: 'Suspicious tit for tat', blurb: 'Defects first, then copies.', move: (_m, t) => (t.length ? t[t.length - 1] : 'D') },
  { id: 'grim', name: 'Grim trigger', blurb: 'Cooperates until betrayed once, then defects forever.', move: (_m, t) => (t.includes('D') ? 'D' : 'C') },
  { id: 'pavlov', name: 'Win-stay, lose-shift', blurb: 'Repeats its move if it did well last round, switches if not.', move: (m, t) => { if (!m.length) return 'C'; const lm = m[m.length - 1]; const lt = t[t.length - 1]; const good = lt === 'C'; return good ? lm : lm === 'C' ? 'D' : 'C' } },
  { id: 'random', name: 'Random', blurb: 'Flips a fair coin.', move: (_m, _t, r) => (r() < 0.5 ? 'C' : 'D') },
]

export const PAY = { T: 5, R: 3, P: 1, S: 0 }
const pay = (a: Move, b: Move) => (a === 'C' ? (b === 'C' ? PAY.R : PAY.S) : b === 'C' ? PAY.T : PAY.P)

export function play(s1: Strategy, s2: Strategy, rounds: number, noise: number, seed: number) {
  const r = rng(seed)
  const h1: Move[] = []
  const h2: Move[] = []
  let u1 = 0
  let u2 = 0
  for (let i = 0; i < rounds; i++) {
    let m1 = s1.move(h1, h2, r)
    let m2 = s2.move(h2, h1, r)
    if (r() < noise) m1 = m1 === 'C' ? 'D' : 'C'
    if (r() < noise) m2 = m2 === 'C' ? 'D' : 'C'
    u1 += pay(m1, m2)
    u2 += pay(m2, m1)
    h1.push(m1)
    h2.push(m2)
  }
  return { u1, u2, h1, h2 }
}

export function tournament(ids: string[], rounds: number, noise: number, reps: number) {
  const ss = ids.map((id) => STRATEGIES.find((s) => s.id === id)!)
  const n = ss.length
  const m = ss.map(() => Array(n).fill(0) as number[])
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    let tot = 0
    for (let k = 0; k < reps; k++) tot += play(ss[i], ss[j], rounds, noise, 1000 * i + 37 * j + k + 1).u1
    m[i][j] = tot / reps / rounds
  }
  const avg = ss.map((_, i) => m[i].reduce((a, b) => a + b, 0) / n)
  return { ss, m, avg }
}

// ---------- replicator dynamics for a symmetric 2x2 game ----------
export function replicator(a: number, b: number, c: number, d: number, x0: number, steps: number, dt = 0.05) {
  const out = [x0]
  let x = x0
  for (let i = 0; i < steps; i++) {
    const fh = x * a + (1 - x) * b
    const fd = x * c + (1 - x) * d
    x += dt * x * (1 - x) * (fh - fd)
    x = Math.min(1, Math.max(0, x))
    out.push(x)
  }
  return out
}

// ---------- Schelling segregation ----------
export type Grid = number[] // 0 empty, 1 and 2 groups
export function schellingInit(n: number, empty: number, seed: number): Grid {
  const r = rng(seed)
  return Array.from({ length: n * n }, () => (r() < empty ? 0 : r() < 0.5 ? 1 : 2))
}
function neighbours(n: number, i: number) {
  const x = i % n
  const y = Math.floor(i / n)
  const out: number[] = []
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
    if (!dx && !dy) continue
    const nx = x + dx
    const ny = y + dy
    if (nx >= 0 && ny >= 0 && nx < n && ny < n) out.push(ny * n + nx)
  }
  return out
}
export function similar(g: Grid, n: number, i: number, group = g[i]) {
  let same = 0
  let tot = 0
  for (const k of neighbours(n, i)) if (g[k]) { tot++; if (g[k] === group) same++ }
  return tot ? same / tot : 1
}
export function schellingStep(g: Grid, n: number, tol: number, r: () => number): { grid: Grid; moved: number } {
  const next = [...g]
  const unhappy: number[] = []
  for (let i = 0; i < g.length; i++) if (g[i] && similar(g, n, i) < tol) unhappy.push(i)
  const empties: number[] = []
  for (let i = 0; i < g.length; i++) if (!g[i]) empties.push(i)
  for (let k = unhappy.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [unhappy[k], unhappy[j]] = [unhappy[j], unhappy[k]] }
  let moved = 0
  for (const i of unhappy) {
    if (!empties.length) break
    const pick = Math.floor(r() * empties.length)
    const dest = empties[pick]
    next[dest] = next[i]
    next[i] = 0
    empties[pick] = i
    moved++
  }
  return { grid: next, moved }
}
export function segregation(g: Grid, n: number) {
  let s = 0
  let c = 0
  for (let i = 0; i < g.length; i++) if (g[i]) { s += similar(g, n, i); c++ }
  return c ? s / c : 0
}

// ---------- information cascade (Bikhchandani, Hirshleifer and Welch) ----------
export function cascade(nAgents: number, p: number, seed: number) {
  const r = rng(seed)
  const truth = 1 // true state is A (+1)
  let d = 0
  const choices: number[] = []
  const signals: number[] = []
  let start = -1
  for (let i = 0; i < nAgents; i++) {
    const s = r() < p ? truth : -truth
    signals.push(s)
    if (Math.abs(d) >= 2) {
      choices.push(Math.sign(d))
      if (start < 0) start = i
    } else {
      choices.push(s)
      d += s
    }
  }
  return { choices, signals, start, final: Math.sign(d) }
}
