import type { Candle } from './series'

// Candlestick anatomy and patterns, with the rules written as numbers so they can be tested.
// Thresholds follow common textbook descriptions (Nison; Bulkowski); other sources vary them
// a little.

export function anatomy(c: Candle) {
  const range = c.h - c.l
  const body = Math.abs(c.c - c.o)
  const upper = c.h - Math.max(c.o, c.c)
  const lower = Math.min(c.o, c.c) - c.l
  return { range, body, upper, lower, bull: c.c > c.o, bodyShare: range ? body / range : 0, upperShare: range ? upper / range : 0, lowerShare: range ? lower / range : 0 }
}

export type Single = 'Dragonfly doji' | 'Gravestone doji' | 'Long-legged doji' | 'Doji' | 'Marubozu' | 'Hammer shape' | 'Inverted hammer shape' | 'Spinning top' | 'Long candle' | 'Ordinary candle'

// What a single candle looks like, ignoring where it appears.
export function classify(c: Candle): Single {
  const a = anatomy(c)
  if (a.range === 0) return 'Doji'
  if (a.bodyShare <= 0.1) {
    if (a.upperShare <= 0.1 && a.lowerShare >= 0.6) return 'Dragonfly doji'
    if (a.lowerShare <= 0.1 && a.upperShare >= 0.6) return 'Gravestone doji'
    if (a.upperShare >= 0.3 && a.lowerShare >= 0.3) return 'Long-legged doji'
    return 'Doji'
  }
  if (a.upperShare <= 0.05 && a.lowerShare <= 0.05) return 'Marubozu'
  if (a.lower >= 2 * a.body && a.upperShare <= 0.12) return 'Hammer shape'
  if (a.upper >= 2 * a.body && a.lowerShare <= 0.12) return 'Inverted hammer shape'
  if (a.bodyShare <= 0.35 && a.upper > a.body && a.lower > a.body) return 'Spinning top'
  if (a.bodyShare >= 0.7) return 'Long candle'
  return 'Ordinary candle'
}

// What a hammer- or star-shaped candle is called depends on the trend before it.
export function nameInContext(shape: Single, trend: 'up' | 'down' | 'none') {
  if (shape === 'Hammer shape') return trend === 'down' ? 'Hammer (bullish reversal)' : trend === 'up' ? 'Hanging man (bearish warning)' : 'Hammer shape (needs a trend)'
  if (shape === 'Inverted hammer shape') return trend === 'down' ? 'Inverted hammer (bullish reversal)' : trend === 'up' ? 'Shooting star (bearish reversal)' : 'Inverted hammer shape (needs a trend)'
  return shape
}

export type PatternName =
  | 'Hammer'
  | 'Hanging man'
  | 'Shooting star'
  | 'Inverted hammer'
  | 'Bullish engulfing'
  | 'Bearish engulfing'
  | 'Bullish harami'
  | 'Bearish harami'
  | 'Piercing line'
  | 'Dark cloud cover'
  | 'Morning star'
  | 'Evening star'
  | 'Three white soldiers'
  | 'Three black crows'
  | 'Doji'

export const BULLISH: PatternName[] = ['Hammer', 'Inverted hammer', 'Bullish engulfing', 'Bullish harami', 'Piercing line', 'Morning star', 'Three white soldiers']

// The trend going into bar i: compares the close before it with the close up to 6 bars
// earlier.
export function trendBefore(cs: Candle[], i: number): 'up' | 'down' | 'none' {
  if (i < 4) return 'none'
  const from = cs[Math.max(0, i - 6)].c
  const change = (cs[i - 1].c - from) / from
  return change > 0.015 ? 'up' : change < -0.015 ? 'down' : 'none'
}

// Every pattern that completes on bar i.
export function patternsAt(cs: Candle[], i: number, avgBody: number): PatternName[] {
  const out: PatternName[] = []
  const t = trendBefore(cs, i)
  const c = cs[i]
  const p = cs[i - 1]
  const pp = cs[i - 2]
  const a = anatomy(c)
  const shape = classify(c)
  const long = (x: Candle) => anatomy(x).body >= avgBody * 1.1
  const small = (x: Candle) => anatomy(x).body <= avgBody * 0.5
  const mid = (x: Candle) => (x.o + x.c) / 2

  if (shape === 'Hammer shape' && t === 'down') out.push('Hammer')
  if (shape === 'Hammer shape' && t === 'up') out.push('Hanging man')
  if (shape === 'Inverted hammer shape' && t === 'up') out.push('Shooting star')
  if (shape === 'Inverted hammer shape' && t === 'down') out.push('Inverted hammer')
  if (a.bodyShare <= 0.1 && t !== 'none') out.push('Doji')
  if (p) {
    const pa = anatomy(p)
    const pb = !pa.bull && pa.body > 0
    const ps = pa.bull && pa.body > 0
    if (t === 'down' && pb && a.bull && c.o <= p.c && c.c >= p.o && a.body > pa.body) out.push('Bullish engulfing')
    if (t === 'up' && ps && !a.bull && c.o >= p.c && c.c <= p.o && a.body > pa.body) out.push('Bearish engulfing')
    if (t === 'down' && pb && long(p) && Math.max(c.o, c.c) < p.o && Math.min(c.o, c.c) > p.c && a.body < pa.body * 0.6) out.push('Bullish harami')
    if (t === 'up' && ps && long(p) && Math.max(c.o, c.c) < p.c && Math.min(c.o, c.c) > p.o && a.body < pa.body * 0.6) out.push('Bearish harami')
    if (t === 'down' && pb && long(p) && a.bull && c.o < p.c && c.c > mid(p) && c.c < p.o) out.push('Piercing line')
    if (t === 'up' && ps && long(p) && !a.bull && c.o > p.c && c.c < mid(p) && c.c > p.o) out.push('Dark cloud cover')
  }
  if (p && pp) {
    const t3 = trendBefore(cs, i - 2)
    const ppa = anatomy(pp)
    if (t3 === 'down' && !ppa.bull && long(pp) && small(p) && Math.max(p.o, p.c) < pp.c && a.bull && c.c > mid(pp)) out.push('Morning star')
    if (t3 === 'up' && ppa.bull && long(pp) && small(p) && Math.min(p.o, p.c) > pp.c && !a.bull && c.c < mid(pp)) out.push('Evening star')
    const three = [pp, p, c]
    const soldiers = three.every((x) => x.c > x.o && long(x) && anatomy(x).upperShare < 0.25) && p.c > pp.c && c.c > p.c && p.o > pp.o && p.o < pp.c && c.o > p.o && c.o < p.c
    const crows = three.every((x) => x.c < x.o && long(x) && anatomy(x).lowerShare < 0.25) && p.c < pp.c && c.c < p.c && p.o < pp.o && p.o > pp.c && c.o < p.o && c.o > p.c
    if (soldiers && t3 === 'down') out.push('Three white soldiers')
    if (crows && t3 === 'up') out.push('Three black crows')
  }
  return out
}

export function scan(cs: Candle[]) {
  const avgBody = cs.reduce((s, c) => s + Math.abs(c.c - c.o), 0) / Math.max(1, cs.length)
  const hits: { i: number; name: PatternName }[] = []
  for (let i = 1; i < cs.length; i++) for (const name of patternsAt(cs, i, avgBody)) hits.push({ i, name })
  return hits
}

// How price behaved after each pattern: the share of times the close `ahead` bars later was
// higher, and the average move, alongside the same numbers for every bar.
export function forwardStats(cs: Candle[], ahead = 5) {
  const hits = scan(cs).filter((h) => h.i + ahead < cs.length)
  const ret = (i: number) => cs[i + ahead].c / cs[i].c - 1
  const all = cs.slice(0, cs.length - ahead).map((_, i) => ret(i))
  const base = { n: all.length, up: all.filter((r) => r > 0).length / all.length, avg: all.reduce((s, r) => s + r, 0) / all.length }
  const by = new Map<PatternName, number[]>()
  for (const h of hits) by.set(h.name, [...(by.get(h.name) ?? []), ret(h.i)])
  const rows = [...by.entries()].map(([name, rs]) => ({ name, n: rs.length, up: rs.filter((r) => r > 0).length / rs.length, avg: rs.reduce((s, r) => s + r, 0) / rs.length, bullish: BULLISH.includes(name) }))
  return { base, rows: rows.sort((a, b) => b.n - a.n) }
}
