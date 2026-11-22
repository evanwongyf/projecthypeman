// Made-up price data for the charts and tools: a seeded random walk, so the same seed
// always draws the same chart. Prices follow geometric Brownian motion with a drift that
// changes now and then, which gives trends and ranges that look like a real market but
// carry no information about the future.

export type Candle = { o: number; h: number; l: number; c: number; v: number }

// A small, fast seeded random number generator (mulberry32).
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

// A standard normal number (Box–Muller).
function normal(r: () => number) {
  const u = Math.max(1e-12, r())
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * r())
}

export function randomCandles(n: number, seed = 7, start = 100, vol = 0.018): Candle[] {
  const r = rng(seed)
  const out: Candle[] = []
  let price = start
  let drift = 0
  for (let i = 0; i < n; i++) {
    // Every so often the market changes its mind about direction.
    if (i % 40 === 0) drift = (r() - 0.5) * 0.004
    const o = price * (1 + normal(r) * vol * 0.25)
    const c = o * Math.exp(drift - (vol * vol) / 2 + vol * normal(r))
    const h = Math.max(o, c) * (1 + Math.abs(normal(r)) * vol * 0.45)
    const l = Math.min(o, c) * (1 - Math.abs(normal(r)) * vol * 0.45)
    const v = Math.round(1e6 * (0.6 + r() * 0.8) * (1 + Math.abs(c - o) / o / vol))
    out.push({ o, h, l, c, v })
    price = c
  }
  return out
}

// Turns [open, high, low, close] lists (as written in guides) into candles.
export const fromRows = (rows: number[][]): Candle[] => rows.map(([o, h, l, c, v = 0]) => ({ o, h, l, c, v }))

// [open, high, low, close] rows that travel through the given turning points, `perLeg`
// candles per leg, with a little deterministic noise: for drawing chart patterns.
export function pathRows(points: number[], perLeg = 5, seed = 1): number[][] {
  const r = rng(seed)
  const rows: number[][] = []
  let prev = points[0]
  for (let k = 1; k < points.length; k++) {
    const a = points[k - 1]
    const b = points[k]
    for (let j = 1; j <= perLeg; j++) {
      const c = a + ((b - a) * j) / perLeg + (r() - 0.5) * Math.abs(b - a) * 0.08
      const o = prev + (r() - 0.5) * 0.4
      const spread = 0.35 + r() * 0.6
      rows.push([o, Math.max(o, c) + spread * r(), Math.min(o, c) - spread * r(), c].map((v) => Math.round(v * 100) / 100))
      prev = c
    }
  }
  return rows
}
