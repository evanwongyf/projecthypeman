import type { Candle } from './series'

// Technical indicators, written to match their textbook definitions. Each returns one value
// per candle, with NaN until there is enough history.

export type Series = number[]

export function sma(xs: Series, n: number): Series {
  const out: Series = []
  let sum = 0
  xs.forEach((x, i) => {
    sum += x
    if (i >= n) sum -= xs[i - n]
    out.push(i >= n - 1 ? sum / n : NaN)
  })
  return out
}

// Exponential moving average with α = 2 / (n + 1), seeded with the simple average of the
// first n values.
export function ema(xs: Series, n: number): Series {
  const a = 2 / (n + 1)
  const out: Series = []
  let prev = NaN
  xs.forEach((x, i) => {
    if (Number.isNaN(x)) return out.push(NaN)
    if (Number.isNaN(prev)) {
      const start = xs.findIndex((v) => !Number.isNaN(v))
      if (i - start + 1 < n) return out.push(NaN)
      prev = xs.slice(start, i + 1).reduce((s, v) => s + v, 0) / n
      return out.push(prev)
    }
    prev = a * x + (1 - a) * prev
    out.push(prev)
  })
  return out
}

// Population standard deviation over the last n values.
export function stdev(xs: Series, n: number): Series {
  const m = sma(xs, n)
  return xs.map((_, i) => {
    if (i < n - 1) return NaN
    let s = 0
    for (let j = i - n + 1; j <= i; j++) s += (xs[j] - m[i]) ** 2
    return Math.sqrt(s / n)
  })
}

export function bollinger(xs: Series, n = 20, k = 2) {
  const mid = sma(xs, n)
  const sd = stdev(xs, n)
  return { mid, upper: mid.map((m, i) => m + k * sd[i]), lower: mid.map((m, i) => m - k * sd[i]), sd }
}

// Wilder's RSI: average gains and losses smoothed with α = 1/n.
export function rsi(xs: Series, n = 14) {
  const out: Series = []
  const avgGain: Series = []
  const avgLoss: Series = []
  let g = 0
  let l = 0
  xs.forEach((x, i) => {
    if (i === 0) {
      out.push(NaN)
      avgGain.push(NaN)
      avgLoss.push(NaN)
      return
    }
    const d = x - xs[i - 1]
    const gain = Math.max(0, d)
    const loss = Math.max(0, -d)
    if (i <= n) {
      g += gain / n
      l += loss / n
      if (i < n) {
        out.push(NaN)
        avgGain.push(NaN)
        avgLoss.push(NaN)
        return
      }
    } else {
      g = (g * (n - 1) + gain) / n
      l = (l * (n - 1) + loss) / n
    }
    avgGain.push(g)
    avgLoss.push(l)
    out.push(l === 0 ? 100 : 100 - 100 / (1 + g / l))
  })
  return { rsi: out, avgGain, avgLoss }
}

export function macd(xs: Series, fast = 12, slow = 26, signal = 9) {
  const f = ema(xs, fast)
  const s = ema(xs, slow)
  const line = f.map((v, i) => v - s[i])
  const sig = ema(line, signal)
  return { line, signal: sig, hist: line.map((v, i) => v - sig[i]), fast: f, slow: s }
}

export function trueRange(cs: Candle[]): Series {
  return cs.map((c, i) => (i === 0 ? c.h - c.l : Math.max(c.h - c.l, Math.abs(c.h - cs[i - 1].c), Math.abs(c.l - cs[i - 1].c))))
}

// Average true range with Wilder's smoothing.
export function atr(cs: Candle[], n = 14): Series {
  const tr = trueRange(cs)
  const out: Series = []
  let prev = NaN
  tr.forEach((t, i) => {
    if (i < n - 1) return out.push(NaN)
    if (i === n - 1) prev = tr.slice(0, n).reduce((s, v) => s + v, 0) / n
    else prev = (prev * (n - 1) + t) / n
    out.push(prev)
  })
  return out
}

// Stochastic oscillator %K over n bars, %D its 3-bar average.
export function stochastic(cs: Candle[], n = 14, d = 3) {
  const k = cs.map((c, i) => {
    if (i < n - 1) return NaN
    const w = cs.slice(i - n + 1, i + 1)
    const hi = Math.max(...w.map((x) => x.h))
    const lo = Math.min(...w.map((x) => x.l))
    return hi === lo ? 50 : (100 * (c.c - lo)) / (hi - lo)
  })
  return { k, d: sma(k.map((v) => (Number.isNaN(v) ? 0 : v)), d).map((v, i) => (i < n + d - 2 ? NaN : v)) }
}

// On-balance volume: add the day's volume when the close rises, subtract it when it falls.
export function obv(cs: Candle[]): Series {
  let total = 0
  return cs.map((c, i) => {
    if (i > 0) total += c.c > cs[i - 1].c ? c.v : c.c < cs[i - 1].c ? -c.v : 0
    return total
  })
}

// Volume-weighted average price over the whole series, using the typical price (H+L+C)/3.
export function vwap(cs: Candle[]): Series {
  let pv = 0
  let vol = 0
  return cs.map((c) => {
    pv += ((c.h + c.l + c.c) / 3) * c.v
    vol += c.v
    return pv / vol
  })
}

// Heikin-Ashi candles, each built from the real candle and the previous Heikin-Ashi one.
export function heikinAshi(cs: Candle[]): Candle[] {
  const out: Candle[] = []
  cs.forEach((c, i) => {
    const hc = (c.o + c.h + c.l + c.c) / 4
    const ho = i === 0 ? (c.o + c.c) / 2 : (out[i - 1].o + out[i - 1].c) / 2
    out.push({ o: ho, c: hc, h: Math.max(c.h, ho, hc), l: Math.min(c.l, ho, hc), v: c.v })
  })
  return out
}

// ── more indicators ────────────────────────────────────────────────────────

const highest = (cs: Candle[], i: number, n: number) => Math.max(...cs.slice(Math.max(0, i - n + 1), i + 1).map((c) => c.h))
const lowest = (cs: Candle[], i: number, n: number) => Math.min(...cs.slice(Math.max(0, i - n + 1), i + 1).map((c) => c.l))

// Donchian channel: the highest high and lowest low of the last n periods.
export function donchian(cs: Candle[], n = 20) {
  const upper = cs.map((_, i) => (i < n - 1 ? NaN : highest(cs, i, n)))
  const lower = cs.map((_, i) => (i < n - 1 ? NaN : lowest(cs, i, n)))
  return { upper, lower, mid: upper.map((u, i) => (u + lower[i]) / 2) }
}

// Keltner channel: an EMA of the close plus and minus a multiple of ATR.
export function keltner(cs: Candle[], n = 20, m = 2, atrN = 10) {
  const mid = ema(cs.map((c) => c.c), n)
  const a = atr(cs, atrN)
  return { mid, upper: mid.map((v, i) => v + m * a[i]), lower: mid.map((v, i) => v - m * a[i]) }
}

// Williams %R: where the close sits in the n-period range, from 0 (top) to −100 (bottom).
export const williamsR = (cs: Candle[], n = 14) =>
  cs.map((c, i) => {
    if (i < n - 1) return NaN
    const hi = highest(cs, i, n)
    const lo = lowest(cs, i, n)
    return hi === lo ? -50 : (-100 * (hi - c.c)) / (hi - lo)
  })

// Commodity channel index: distance of the typical price from its average, in units of
// mean absolute deviation, scaled by 1/0.015.
export function cci(cs: Candle[], n = 20) {
  const tp = cs.map((c) => (c.h + c.l + c.c) / 3)
  const m = sma(tp, n)
  return tp.map((v, i) => {
    if (i < n - 1) return NaN
    let md = 0
    for (let j = i - n + 1; j <= i; j++) md += Math.abs(tp[j] - m[i])
    md /= n
    return md === 0 ? 0 : (v - m[i]) / (0.015 * md)
  })
}

// Wilder's directional movement system: +DI, −DI and ADX.
export function adx(cs: Candle[], n = 14) {
  const tr = trueRange(cs)
  const plusDM = cs.map((c, i) => {
    if (i === 0) return 0
    const up = c.h - cs[i - 1].h
    const down = cs[i - 1].l - c.l
    return up > down && up > 0 ? up : 0
  })
  const minusDM = cs.map((c, i) => {
    if (i === 0) return 0
    const up = c.h - cs[i - 1].h
    const down = cs[i - 1].l - c.l
    return down > up && down > 0 ? down : 0
  })
  const wilder = (xs: number[]) => {
    const out: number[] = []
    let s = NaN
    xs.forEach((x, i) => {
      if (i < n) return out.push(NaN)
      if (i === n) s = xs.slice(1, n + 1).reduce((a, b) => a + b, 0)
      else s = s - s / n + x
      out.push(s)
    })
    return out
  }
  const trN = wilder(tr)
  const pN = wilder(plusDM)
  const mN = wilder(minusDM)
  const plusDI = pN.map((v, i) => (100 * v) / trN[i])
  const minusDI = mN.map((v, i) => (100 * v) / trN[i])
  const dx = plusDI.map((p, i) => (100 * Math.abs(p - minusDI[i])) / (p + minusDI[i]))
  const out: number[] = []
  let prev = NaN
  dx.forEach((d, i) => {
    if (i < 2 * n - 1) return out.push(NaN)
    if (i === 2 * n - 1) prev = dx.slice(n, 2 * n).reduce((a, b) => a + b, 0) / n
    else prev = (prev * (n - 1) + d) / n
    out.push(prev)
  })
  return { plusDI, minusDI, adx: out }
}

// Ichimoku Kinko Hyo. The spans are returned already shifted forward 26 periods, so the
// value at i is the one drawn at i (computed from data 26 periods earlier).
export function ichimoku(cs: Candle[], a = 9, b = 26, c = 52) {
  const mid = (i: number, n: number) => (i < n - 1 ? NaN : (highest(cs, i, n) + lowest(cs, i, n)) / 2)
  const tenkan = cs.map((_, i) => mid(i, a))
  const kijun = cs.map((_, i) => mid(i, b))
  const spanA = cs.map((_, i) => (i < b ? NaN : (tenkan[i - b] + kijun[i - b]) / 2))
  const spanB = cs.map((_, i) => (i < b ? NaN : mid(i - b, c)))
  return { tenkan, kijun, spanA, spanB }
}

// Wilder's parabolic stop-and-reverse.
export function parabolicSar(cs: Candle[], step = 0.02, max = 0.2) {
  const out: number[] = [NaN]
  if (cs.length < 2) return out
  let up = cs[1].c >= cs[0].c
  let sar = up ? cs[0].l : cs[0].h
  let ep = up ? cs[1].h : cs[1].l
  let af = step
  for (let i = 1; i < cs.length; i++) {
    sar = sar + af * (ep - sar)
    if (up) {
      sar = Math.min(sar, cs[i - 1].l, cs[Math.max(0, i - 2)].l)
      if (cs[i].l < sar) {
        up = false
        sar = ep
        ep = cs[i].l
        af = step
      } else if (cs[i].h > ep) {
        ep = cs[i].h
        af = Math.min(max, af + step)
      }
    } else {
      sar = Math.max(sar, cs[i - 1].h, cs[Math.max(0, i - 2)].h)
      if (cs[i].h > sar) {
        up = true
        sar = ep
        ep = cs[i].h
        af = step
      } else if (cs[i].l < ep) {
        ep = cs[i].l
        af = Math.min(max, af + step)
      }
    }
    out.push(sar)
  }
  return out
}

// Money flow index: an RSI that weights each day's typical price by its volume.
export function mfi(cs: Candle[], n = 14) {
  const tp = cs.map((c) => (c.h + c.l + c.c) / 3)
  return cs.map((_, i) => {
    if (i < n) return NaN
    let pos = 0
    let neg = 0
    for (let j = i - n + 1; j <= i; j++) {
      const flow = tp[j] * cs[j].v
      if (tp[j] > tp[j - 1]) pos += flow
      else if (tp[j] < tp[j - 1]) neg += flow
    }
    return neg === 0 ? 100 : 100 - 100 / (1 + pos / neg)
  })
}

// Classic floor-trader pivot points from the previous period's high, low and close.
export function pivots(h: number, l: number, c: number) {
  const p = (h + l + c) / 3
  return { p, r1: 2 * p - l, s1: 2 * p - h, r2: p + (h - l), s2: p - (h - l), r3: h + 2 * (p - l), s3: l - 2 * (h - p) }
}
