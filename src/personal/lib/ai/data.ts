import { rng } from '../finance/series'

// Small seeded datasets for the machine-learning diagrams. Classification points live
// in the square [-1, 1]², with a class label of 0 or 1.

export type Pt = { x: number; y: number; c: number }
export type Dataset = 'blobs' | 'moons' | 'circles' | 'xor' | 'spiral'

export function gauss(r: () => number) {
  const u = Math.max(1e-9, r())
  const v = r()
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
}

const clamp = (v: number) => Math.max(-0.98, Math.min(0.98, v))

export function makeData(kind: Dataset, n = 120, seed = 7, noise = 1): Pt[] {
  const r = rng(seed)
  const out: Pt[] = []
  for (let i = 0; i < n; i++) {
    const c = i % 2
    let x = 0
    let y = 0
    if (kind === 'blobs') {
      x = (c ? 0.38 : -0.38) + gauss(r) * 0.2 * noise
      y = (c ? 0.3 : -0.3) + gauss(r) * 0.2 * noise
    } else if (kind === 'moons') {
      const t = r() * Math.PI
      x = c ? 1 - Math.cos(t) : Math.cos(t)
      y = c ? 0.5 - Math.sin(t) : Math.sin(t)
      x = (x - 0.5) * 0.62 + gauss(r) * 0.06 * noise
      y = (y - 0.25) * 0.62 + gauss(r) * 0.06 * noise
    } else if (kind === 'circles') {
      const t = r() * 2 * Math.PI
      const rad = (c ? 0.3 : 0.75) + gauss(r) * 0.06 * noise
      x = rad * Math.cos(t)
      y = rad * Math.sin(t)
    } else if (kind === 'xor') {
      x = (r() * 2 - 1) * 0.9
      y = (r() * 2 - 1) * 0.9
      if (Math.abs(x) < 0.06) x += Math.sign(x || 1) * 0.08
      if (Math.abs(y) < 0.06) y += Math.sign(y || 1) * 0.08
      out.push({ x, y, c: x * y > 0 ? 1 : 0 })
      continue
    } else {
      const t = (i / n) * 2.6 * Math.PI + 0.4
      const rad = (t / (2.9 * Math.PI)) * 0.9
      const a = t + (c ? Math.PI : 0)
      x = rad * Math.cos(a) + gauss(r) * 0.03 * noise
      y = rad * Math.sin(a) + gauss(r) * 0.03 * noise
    }
    out.push({ x: clamp(x), y: clamp(y), c })
  }
  return out
}

// Unlabelled points in k loose groups, for clustering.
export function makeClusters(k: number, n = 150, seed = 3): Pt[] {
  const r = rng(seed)
  const centres = Array.from({ length: k }, (_, j) => {
    const a = (j / k) * 2 * Math.PI + 0.5
    return [Math.cos(a) * 0.55, Math.sin(a) * 0.55]
  })
  return Array.from({ length: n }, (_, i) => {
    const [cx, cy] = centres[i % k]
    return { x: clamp(cx + gauss(r) * 0.17), y: clamp(cy + gauss(r) * 0.17), c: i % k }
  })
}

// Noisy points around a line, for regression: x in [0, 10].
export function makeLine(n = 24, seed = 5, slope = 0.8, intercept = 1.5, sd = 1.1): { x: number; y: number }[] {
  const r = rng(seed)
  return Array.from({ length: n }, () => {
    const x = r() * 10
    return { x, y: intercept + slope * x + gauss(r) * sd }
  })
}

// Points from a smooth curve plus noise, for showing over- and underfitting: x in [-1, 1].
export function makeCurve(n: number, seed: number, sd = 0.18) {
  const r = rng(seed)
  const f = (x: number) => Math.sin(2.6 * x) * 0.8 + 0.2 * x
  return { f, pts: Array.from({ length: n }, () => {
    const x = r() * 2 - 1
    return { x, y: f(x) + gauss(r) * sd }
  }) }
}
