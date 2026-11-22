import { rng } from '../finance/series'
import { gauss } from './data'
import type { Pt } from './data'

// Small, readable implementations of classic machine-learning models, used by the
// archive's interactive diagrams. Everything works on 2D points so it can be drawn.

export const sigmoid = (z: number) => 1 / (1 + Math.exp(-z))

// ── linear and logistic regression ─────────────────────────────────────────

export type Line = { w: number; b: number }

export function mse(pts: { x: number; y: number }[], m: Line) {
  return pts.reduce((s, p) => s + (m.w * p.x + m.b - p.y) ** 2, 0) / pts.length
}

// One step of batch gradient descent on mean squared error.
export function linregStep(pts: { x: number; y: number }[], m: Line, lr: number): Line {
  let gw = 0
  let gb = 0
  for (const p of pts) {
    const e = m.w * p.x + m.b - p.y
    gw += (2 / pts.length) * e * p.x
    gb += (2 / pts.length) * e
  }
  return { w: m.w - lr * gw, b: m.b - lr * gb }
}

// The exact least-squares line (the normal equation for one feature).
export function leastSquares(pts: { x: number; y: number }[]): Line {
  const n = pts.length
  const mx = pts.reduce((s, p) => s + p.x, 0) / n
  const my = pts.reduce((s, p) => s + p.y, 0) / n
  let sxy = 0
  let sxx = 0
  for (const p of pts) {
    sxy += (p.x - mx) * (p.y - my)
    sxx += (p.x - mx) ** 2
  }
  const w = sxy / sxx
  return { w, b: my - w * mx }
}

export function r2(pts: { x: number; y: number }[], m: Line) {
  const my = pts.reduce((s, p) => s + p.y, 0) / pts.length
  const tot = pts.reduce((s, p) => s + (p.y - my) ** 2, 0)
  return 1 - (mse(pts, m) * pts.length) / tot
}

export type Logit = { w1: number; w2: number; b: number }

export function logitProb(m: Logit, x: number, y: number) {
  return sigmoid(m.w1 * x + m.w2 * y + m.b)
}

export function logitStep(pts: Pt[], m: Logit, lr: number): Logit {
  let g1 = 0
  let g2 = 0
  let gb = 0
  for (const p of pts) {
    const e = logitProb(m, p.x, p.y) - p.c
    g1 += e * p.x
    g2 += e * p.y
    gb += e
  }
  const n = pts.length
  return { w1: m.w1 - (lr * g1) / n, w2: m.w2 - (lr * g2) / n, b: m.b - (lr * gb) / n }
}

export function logLoss(pts: Pt[], prob: (p: Pt) => number) {
  return -pts.reduce((s, p) => {
    const q = Math.min(1 - 1e-9, Math.max(1e-9, prob(p)))
    return s + (p.c ? Math.log(q) : Math.log(1 - q))
  }, 0) / pts.length
}

export function accuracy(pts: Pt[], prob: (x: number, y: number) => number) {
  return pts.filter((p) => (prob(p.x, p.y) >= 0.5 ? 1 : 0) === p.c).length / pts.length
}

// ── perceptron ─────────────────────────────────────────────────────────────

// Rosenblatt's rule: for a misclassified point, w ← w + η·t·x with t = ±1.
export function perceptronUpdate(m: Logit, p: Pt, lr = 0.2): Logit {
  const t = p.c ? 1 : -1
  return { w1: m.w1 + lr * t * p.x, w2: m.w2 + lr * t * p.y, b: m.b + lr * t }
}

export function perceptronWrong(m: Logit, p: Pt) {
  const s = m.w1 * p.x + m.w2 * p.y + m.b
  return (s >= 0 ? 1 : 0) !== p.c
}

// ── k-nearest neighbours ──────────────────────────────────────────────────

export function nearest(pts: Pt[], x: number, y: number, k: number) {
  return pts
    .map((p) => ({ p, d: Math.hypot(p.x - x, p.y - y) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, k)
}

export function knnProb(pts: Pt[], x: number, y: number, k: number) {
  const nn = nearest(pts, x, y, k)
  return nn.filter((n) => n.p.c === 1).length / nn.length
}

// ── k-means ────────────────────────────────────────────────────────────────

export type XY = { x: number; y: number }

export function assign(pts: XY[], cents: XY[]) {
  return pts.map((p) => {
    let best = 0
    let bd = Infinity
    cents.forEach((c, j) => {
      const d = (p.x - c.x) ** 2 + (p.y - c.y) ** 2
      if (d < bd) {
        bd = d
        best = j
      }
    })
    return best
  })
}

export function update(pts: XY[], labels: number[], cents: XY[]): XY[] {
  return cents.map((c, j) => {
    const mine = pts.filter((_, i) => labels[i] === j)
    if (!mine.length) return c
    return { x: mine.reduce((s, p) => s + p.x, 0) / mine.length, y: mine.reduce((s, p) => s + p.y, 0) / mine.length }
  })
}

export function inertia(pts: XY[], labels: number[], cents: XY[]) {
  return pts.reduce((s, p, i) => s + (p.x - cents[labels[i]].x) ** 2 + (p.y - cents[labels[i]].y) ** 2, 0)
}

// ── decision trees and random forests (CART, Gini impurity) ──────────────

export type TreeNode = {
  n: number
  p: number // share of class 1
  gini: number
  depth: number
  split?: { f: 0 | 1; t: number; left: TreeNode; right: TreeNode; gain: number }
  box: [number, number, number, number] // x0, x1, y0, y1 of the region
}

export const giniOf = (p: number) => 1 - p * p - (1 - p) * (1 - p)

export function buildTree(pts: Pt[], maxDepth: number, opts: { minLeaf?: number; randomFeature?: () => number } = {}, depth = 0, box: [number, number, number, number] = [-1, 1, -1, 1]): TreeNode {
  const n = pts.length
  const p = n ? pts.filter((q) => q.c === 1).length / n : 0
  const node: TreeNode = { n, p, gini: giniOf(p), depth, box }
  const minLeaf = opts.minLeaf ?? 1
  if (depth >= maxDepth || node.gini === 0 || n < 2 * minLeaf) return node
  const feats: (0 | 1)[] = opts.randomFeature ? [opts.randomFeature() < 0.5 ? 0 : 1] : [0, 1]
  let best: { f: 0 | 1; t: number; gain: number } | null = null
  for (const f of feats) {
    const key = (q: Pt) => (f === 0 ? q.x : q.y)
    const sorted = [...pts].sort((a, b) => key(a) - key(b))
    let leftOnes = 0
    const ones = pts.filter((q) => q.c === 1).length
    for (let i = 0; i < n - 1; i++) {
      leftOnes += sorted[i].c
      if (key(sorted[i]) === key(sorted[i + 1])) continue
      const nl = i + 1
      const nr = n - nl
      if (nl < minLeaf || nr < minLeaf) continue
      const g = (nl / n) * giniOf(leftOnes / nl) + (nr / n) * giniOf((ones - leftOnes) / nr)
      const gain = node.gini - g
      if (!best || gain > best.gain + 1e-12) best = { f, t: (key(sorted[i]) + key(sorted[i + 1])) / 2, gain }
    }
  }
  if (!best || best.gain <= 1e-9) return node
  const { f, t } = best
  const L = pts.filter((q) => (f === 0 ? q.x : q.y) <= t)
  const R = pts.filter((q) => (f === 0 ? q.x : q.y) > t)
  const [x0, x1, y0, y1] = box
  const lb: [number, number, number, number] = f === 0 ? [x0, t, y0, y1] : [x0, x1, y0, t]
  const rb: [number, number, number, number] = f === 0 ? [t, x1, y0, y1] : [x0, x1, t, y1]
  node.split = { f, t, gain: best.gain, left: buildTree(L, maxDepth, opts, depth + 1, lb), right: buildTree(R, maxDepth, opts, depth + 1, rb) }
  return node
}

export function treeProb(node: TreeNode, x: number, y: number): number {
  let cur = node
  while (cur.split) cur = (cur.split.f === 0 ? x : y) <= cur.split.t ? cur.split.left : cur.split.right
  return cur.p
}

export function leaves(node: TreeNode): TreeNode[] {
  return node.split ? [...leaves(node.split.left), ...leaves(node.split.right)] : [node]
}

export function buildForest(pts: Pt[], trees: number, maxDepth: number, seed = 1) {
  const r = rng(seed)
  return Array.from({ length: trees }, () => {
    const sample = pts.map(() => pts[Math.floor(r() * pts.length)])
    return buildTree(sample, maxDepth, { randomFeature: r })
  })
}

export const forestProb = (forest: TreeNode[], x: number, y: number) => forest.reduce((s, t) => s + (treeProb(t, x, y) >= 0.5 ? 1 : 0), 0) / forest.length

// ── support vector machine (Pegasos sub-gradient descent on the hinge loss) ─

export function trainSvm(pts: Pt[], C: number, iters = 4000, seed = 2): Logit {
  const r = rng(seed)
  const lambda = 1 / (C * pts.length)
  let w1 = 0
  let w2 = 0
  let b = 0
  for (let t = 1; t <= iters; t++) {
    const p = pts[Math.floor(r() * pts.length)]
    const yv = p.c ? 1 : -1
    const eta = 1 / (lambda * t)
    const margin = yv * (w1 * p.x + w2 * p.y + b)
    w1 *= 1 - eta * lambda
    w2 *= 1 - eta * lambda
    if (margin < 1) {
      w1 += eta * yv * p.x
      w2 += eta * yv * p.y
      b += eta * yv * 0.05
    }
  }
  return { w1, w2, b }
}

// ── principal component analysis in 2D ───────────────────────────────────

export function pca2(pts: XY[]) {
  const n = pts.length
  const mx = pts.reduce((s, p) => s + p.x, 0) / n
  const my = pts.reduce((s, p) => s + p.y, 0) / n
  let a = 0
  let b = 0
  let d = 0
  for (const p of pts) {
    a += (p.x - mx) ** 2
    b += (p.x - mx) * (p.y - my)
    d += (p.y - my) ** 2
  }
  a /= n - 1
  b /= n - 1
  d /= n - 1
  // Eigenvalues of the 2×2 covariance matrix [[a, b], [b, d]].
  const tr = a + d
  const det = a * d - b * b
  const disc = Math.sqrt(Math.max(0, (tr * tr) / 4 - det))
  const l1 = tr / 2 + disc
  const l2 = tr / 2 - disc
  const angle = Math.atan2(l1 - a, b || 1e-12)
  return { mean: { x: mx, y: my }, cov: [a, b, d], l1, l2, angle }
}

// The variance of the points projected onto a direction at `angle` radians.
export function projectedVariance(pts: XY[], angle: number) {
  const ux = Math.cos(angle)
  const uy = Math.sin(angle)
  const proj = pts.map((p) => p.x * ux + p.y * uy)
  const m = proj.reduce((s, v) => s + v, 0) / proj.length
  return proj.reduce((s, v) => s + (v - m) ** 2, 0) / (proj.length - 1)
}

// ── polynomial least squares, for over- and underfitting ──────────────────

function solve(A: number[][], bv: number[]) {
  const n = bv.length
  const M = A.map((row, i) => [...row, bv[i]])
  for (let c = 0; c < n; c++) {
    let piv = c
    for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[piv][c])) piv = r
    ;[M[c], M[piv]] = [M[piv], M[c]]
    const d = M[c][c] || 1e-12
    for (let r = 0; r < n; r++) {
      if (r === c) continue
      const f = M[r][c] / d
      for (let k = c; k <= n; k++) M[r][k] -= f * M[c][k]
    }
  }
  return M.map((row, i) => row[n] / (row[i] || 1e-12))
}

// Fits y ≈ Σ βₖ xᵏ by minimising squared error plus λ·Σβₖ² (ridge; λ = 0 for plain).
export function polyfit(pts: XY[], degree: number, lambda = 0) {
  const k = degree + 1
  const A = Array.from({ length: k }, () => Array(k).fill(0))
  const bv = Array(k).fill(0)
  for (const p of pts) {
    const pw = Array.from({ length: k }, (_, i) => p.x ** i)
    for (let i = 0; i < k; i++) {
      bv[i] += pw[i] * p.y
      for (let j = 0; j < k; j++) A[i][j] += pw[i] * pw[j]
    }
  }
  for (let i = 1; i < k; i++) A[i][i] += lambda
  const beta = solve(A, bv)
  return (x: number) => beta.reduce((s, c, i) => s + c * x ** i, 0)
}

// ── a tiny multilayer perceptron, trained with Adam on binary cross-entropy ─

export type Act = 'tanh' | 'relu' | 'sigmoid'
const actF = { tanh: Math.tanh, relu: (z: number) => Math.max(0, z), sigmoid }
const actD = { tanh: (a: number) => 1 - a * a, relu: (a: number) => (a > 0 ? 1 : 0), sigmoid: (a: number) => a * (1 - a) }

export class MLP {
  sizes: number[]
  act: Act
  W: number[][][] // W[l][j][i]: weight from neuron i in layer l to neuron j in layer l+1
  B: number[][]
  private m: number[]
  private v: number[]
  private t = 0

  constructor(sizes: number[], act: Act = 'tanh', seed = 1) {
    const r = rng(seed)
    this.sizes = sizes
    this.act = act
    this.W = []
    this.B = []
    for (let l = 0; l < sizes.length - 1; l++) {
      // Xavier/He-style initial scale keeps signals from exploding or vanishing.
      const scale = Math.sqrt((act === 'relu' ? 2 : 1) / sizes[l])
      this.W.push(Array.from({ length: sizes[l + 1] }, () => Array.from({ length: sizes[l] }, () => gauss(r) * scale)))
      this.B.push(Array(sizes[l + 1]).fill(act === 'relu' ? 0.01 : 0))
    }
    const count = this.params().length
    this.m = Array(count).fill(0)
    this.v = Array(count).fill(0)
  }

  private params() {
    const out: number[] = []
    this.W.forEach((L, l) => {
      L.forEach((row) => out.push(...row))
      out.push(...this.B[l])
    })
    return out
  }

  private setParams(p: number[]) {
    let k = 0
    this.W.forEach((L, l) => {
      L.forEach((row) => row.forEach((_, i) => (row[i] = p[k++])))
      this.B[l] = this.B[l].map(() => p[k++])
    })
  }

  // Activations of every layer; the last layer is a single sigmoid output.
  forward(x: number[]): number[][] {
    const acts = [x]
    for (let l = 0; l < this.W.length; l++) {
      const prev = acts[l]
      const last = l === this.W.length - 1
      acts.push(this.W[l].map((row, j) => {
        const z = row.reduce((s, w, i) => s + w * prev[i], this.B[l][j])
        return last ? sigmoid(z) : actF[this.act](z)
      }))
    }
    return acts
  }

  predict(x: number, y: number) {
    const a = this.forward([x, y])
    return a[a.length - 1][0]
  }

  // One Adam step on a batch; returns the batch's mean loss.
  train(batch: Pt[], lr = 0.03) {
    const gW = this.W.map((L) => L.map((row) => row.map(() => 0)))
    const gB = this.B.map((b) => b.map(() => 0))
    let loss = 0
    for (const p of batch) {
      const acts = this.forward([p.x, p.y])
      const out = acts[acts.length - 1][0]
      loss -= p.c ? Math.log(Math.max(out, 1e-9)) : Math.log(Math.max(1 - out, 1e-9))
      // With a sigmoid output and cross-entropy loss, the output error is simply ŷ − y.
      let delta = [out - p.c]
      for (let l = this.W.length - 1; l >= 0; l--) {
        const prev = acts[l]
        delta.forEach((d, j) => {
          gB[l][j] += d
          prev.forEach((a, i) => (gW[l][j][i] += d * a))
        })
        if (l > 0) delta = prev.map((a, i) => this.W[l].reduce((s, row, j) => s + row[i] * delta[j], 0) * actD[this.act](a))
      }
    }
    const grads: number[] = []
    gW.forEach((L, l) => {
      L.forEach((row) => grads.push(...row.map((g) => g / batch.length)))
      grads.push(...gB[l].map((g) => g / batch.length))
    })
    this.t++
    const b1 = 0.9
    const b2 = 0.999
    const p = this.params().map((w, k) => {
      this.m[k] = b1 * this.m[k] + (1 - b1) * grads[k]
      this.v[k] = b2 * this.v[k] + (1 - b2) * grads[k] ** 2
      const mh = this.m[k] / (1 - b1 ** this.t)
      const vh = this.v[k] / (1 - b2 ** this.t)
      return w - (lr * mh) / (Math.sqrt(vh) + 1e-8)
    })
    this.setParams(p)
    return loss / batch.length
  }
}

// ── evaluation: confusion matrix at a threshold ──────────────────────────

export function confusion(scores: { s: number; c: number }[], threshold: number) {
  let tp = 0
  let fp = 0
  let tn = 0
  let fn = 0
  for (const { s, c } of scores) {
    const yhat = s >= threshold
    if (yhat && c) tp++
    else if (yhat) fp++
    else if (c) fn++
    else tn++
  }
  const precision = tp + fp ? tp / (tp + fp) : 1
  const recall = tp + fn ? tp / (tp + fn) : 0
  const fpr = fp + tn ? fp / (fp + tn) : 0
  const f1 = precision + recall ? (2 * precision * recall) / (precision + recall) : 0
  return { tp, fp, tn, fn, precision, recall, fpr, f1, accuracy: (tp + tn) / scores.length }
}

export function rocCurve(scores: { s: number; c: number }[]) {
  const ts = [Infinity, ...[...new Set(scores.map((x) => x.s))].sort((a, b) => b - a), -Infinity]
  const pts = ts.map((t) => {
    const m = confusion(scores, t)
    return [m.fpr, m.recall] as [number, number]
  })
  let auc = 0
  for (let i = 1; i < pts.length; i++) auc += (pts[i][0] - pts[i - 1][0]) * (pts[i][1] + pts[i - 1][1]) / 2
  return { pts, auc }
}

// ── gradient boosting with decision stumps (one split each), for regression ─

// Each round fits a stump to the current residuals and adds a shrunken copy of it.
export function boostStumps(pts: XY[], rounds: number, lr = 0.3) {
  const base = pts.reduce((s, p) => s + p.y, 0) / pts.length
  const stumps: { t: number; left: number; right: number }[] = []
  const predict = (x: number) => stumps.reduce((s, st) => s + lr * (x <= st.t ? st.left : st.right), base)
  const xs = [...new Set(pts.map((p) => p.x))].sort((a, b) => a - b)
  for (let r = 0; r < rounds; r++) {
    const res = pts.map((p) => ({ x: p.x, r: p.y - predict(p.x) }))
    let best = { t: 0, left: 0, right: 0, sse: Infinity }
    for (let i = 0; i < xs.length - 1; i++) {
      const t = (xs[i] + xs[i + 1]) / 2
      const L = res.filter((q) => q.x <= t)
      const R = res.filter((q) => q.x > t)
      const ml = L.reduce((s, q) => s + q.r, 0) / L.length
      const mr = R.reduce((s, q) => s + q.r, 0) / R.length
      const sse = L.reduce((s, q) => s + (q.r - ml) ** 2, 0) + R.reduce((s, q) => s + (q.r - mr) ** 2, 0)
      if (sse < best.sse) best = { t, left: ml, right: mr, sse }
    }
    stumps.push(best)
  }
  return predict
}
