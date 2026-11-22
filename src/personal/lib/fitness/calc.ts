// Running and lifting arithmetic for the fitness tools. All plain functions.

// "25:30" or "1:52:10" to seconds; NaN if it does not parse.
export function parseTime(s: string): number {
  const parts = s.trim().split(':').map(Number)
  if (!parts.length || parts.some((n) => !Number.isFinite(n) || n < 0)) return NaN
  return parts.reduce((acc, n) => acc * 60 + n, 0)
}

export function fmtTime(sec: number): string {
  if (!Number.isFinite(sec) || sec < 0) return '–'
  const r = Math.round(sec)
  const h = Math.floor(r / 3600)
  const m = Math.floor((r % 3600) / 60)
  const ss = String(r % 60).padStart(2, '0')
  return h ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`
}

export const RACES = [
  { name: '1 mile', m: 1609.34 },
  { name: '5K', m: 5000 },
  { name: '10K', m: 10000 },
  { name: 'Half marathon', m: 21097.5 },
  { name: 'Marathon', m: 42195 },
]

// Riegel's formula: how a time over one distance scales to another.
export const riegel = (seconds: number, fromM: number, toM: number, k = 1.06) => seconds * (toM / fromM) ** k

// Jack Daniels and Jimmy Gilbert's equations: the oxygen cost of running at a speed, and the
// share of VO2max a runner can hold for a race of a given duration. Their ratio is VDOT.
const oxygenCost = (mPerMin: number) => -4.6 + 0.182258 * mPerMin + 0.000104 * mPerMin ** 2
const sustainable = (minutes: number) => 0.8 + 0.1894393 * Math.exp(-0.012778 * minutes) + 0.2989558 * Math.exp(-0.1932605 * minutes)

export function vdot(metres: number, seconds: number) {
  const minutes = seconds / 60
  return oxygenCost(metres / minutes) / sustainable(minutes)
}

// The speed (m/min) whose oxygen cost is `vo2`.
function speedFor(vo2: number) {
  const a = 0.000104
  const b = 0.182258
  const c = -(4.6 + vo2)
  return (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)
}

// Seconds per km at a share of VDOT.
export const paceAt = (v: number, share: number) => 60000 / speedFor(v * share)

// Training paces in the spirit of Daniels' zones; approximate shares of VDOT.
export function trainingPaces(v: number) {
  return [
    { zone: 'Easy (E)', what: 'Most of your running, long runs, recovery', from: paceAt(v, 0.74), to: paceAt(v, 0.62) },
    { zone: 'Marathon (M)', what: 'Steady, marathon-pace work', from: paceAt(v, 0.82), to: paceAt(v, 0.79) },
    { zone: 'Threshold (T)', what: 'Tempo runs and cruise intervals, "comfortably hard"', from: paceAt(v, 0.88), to: paceAt(v, 0.86) },
    { zone: 'Interval (I)', what: '3–5 minute repeats that raise VO2max', from: paceAt(v, 1.0), to: paceAt(v, 0.96) },
    { zone: 'Repetition (R)', what: 'Short, fast repeats for speed and economy', from: paceAt(v, 1.1), to: paceAt(v, 1.05) },
  ]
}

// Predicted race times for a VDOT, by searching for the time whose VDOT matches.
export function raceTimeFor(v: number, metres: number) {
  let lo = 60
  let hi = 60 * 60 * 10
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2
    if (vdot(metres, mid) > v) lo = mid
    else hi = mid
  }
  return (lo + hi) / 2
}

// Cooper's 12-minute run test: estimated VO2max (ml/kg/min) from the distance covered.
export const cooperVo2 = (metres: number) => (metres - 504.9) / 44.73

// Maximum heart rate estimated from age (Tanaka, 2001): closer than 220 − age for adults.
export const maxHr = (age: number) => 208 - 0.7 * age

export function hrZones(max: number, rest?: number) {
  const bands = [
    { zone: 'Zone 1', feel: 'Very easy: warm-up, recovery', lo: 0.5, hi: 0.6 },
    { zone: 'Zone 2', feel: 'Easy: aerobic base, chatty pace', lo: 0.6, hi: 0.7 },
    { zone: 'Zone 3', feel: 'Moderate: steady, harder to talk', lo: 0.7, hi: 0.8 },
    { zone: 'Zone 4', feel: 'Hard: threshold, a few words at a time', lo: 0.8, hi: 0.9 },
    { zone: 'Zone 5', feel: 'Very hard: intervals, cannot talk', lo: 0.9, hi: 1.0 },
  ]
  // With a resting heart rate, use the heart rate reserve (Karvonen).
  const at = (p: number) => Math.round(rest ? rest + p * (max - rest) : p * max)
  return bands.map((b) => ({ ...b, from: at(b.lo), to: at(b.hi) }))
}

// Estimated one-rep max from a set of `reps` at `weight`: the mean of Epley and Brzycki.
export function oneRepMax(weight: number, reps: number) {
  if (reps <= 1) return weight
  const epley = weight * (1 + reps / 30)
  const brzycki = reps < 37 ? (weight * 36) / (37 - reps) : epley
  return (epley + brzycki) / 2
}

// Roughly how many reps can be done at a share of 1RM (from the same formulas).
export const repsAt = (share: number) => Math.max(1, Math.round(30 * (1 / share - 1)))

// ── a running plan ──────────────────────────────────────────────────────────

export type Goal = '5k' | '10k' | 'half' | 'marathon'

export const GOALS: Record<Goal, { name: string; peakLong: number; taper: number; interval: string; pace: string }> = {
  '5k': { name: '5K', peakLong: 10, taper: 1, interval: '6 × 800 m at 5K pace, 2 min jog between', pace: '3 × 1 km at goal 5K pace, 2 min jog' },
  '10k': { name: '10K', peakLong: 15, taper: 1, interval: '5 × 1 km at 5K–10K pace, 2 min jog between', pace: '3 × 2 km at goal 10K pace, 2 min jog' },
  half: { name: 'Half marathon', peakLong: 20, taper: 2, interval: '4 × 1.6 km at 10K pace, 2–3 min jog between', pace: '2 × 5 km at goal half-marathon pace, 3 min jog' },
  marathon: { name: 'Marathon', peakLong: 32, taper: 3, interval: '3 × 2 km at half-marathon to 10K pace, 3 min jog', pace: 'Long run with the last 10–16 km at goal marathon pace' },
}

export type PlanWeek = { week: number; phase: string; long: number; easy: number; easyCount: number; quality: string; total: number; note?: string }

export function buildPlan(goal: Goal, weeks: number, runs: number, longNow: number): PlanWeek[] {
  const g = GOALS[goal]
  const taper = Math.min(g.taper, Math.max(1, Math.floor(weeks / 5)))
  const build = weeks - taper
  const peak = Math.max(longNow, Math.min(g.peakLong, longNow + build * 1.6))
  const out: PlanWeek[] = []
  let long = longNow
  // The longest normal (not cut-back) long run so far; it grows by at most 2 km a week.
  let lastFull = longNow - 2
  for (let w = 1; w <= weeks; w++) {
    const progress = (w - 1) / Math.max(1, build - 1)
    const cutback = w < build && w % 4 === 0
    let phase: string
    let quality: string
    let note: string | undefined
    if (w > build) {
      phase = 'Taper'
      const left = weeks - w
      long = Math.round(peak * (left === 0 ? 0.35 : 0.55 + 0.15 * (left - 1)))
      quality = left === 0 ? 'Race week: 2–3 short easy runs with 4 × 20 s strides. Race day!' : `Sharpening: 4–6 × 400 m at goal race pace, full recovery`
      note = left === 0 ? `${g.name} race at the end of the week` : 'Less running, same rhythm: freshness for race day'
    } else {
      long = Math.min(lastFull + 2, Math.round(longNow + (peak - longNow) * Math.min(1, progress * 1.1)))
      if (!cutback) lastFull = long
      if (cutback) {
        long = Math.round(long * 0.75)
        note = 'Easier week: let the training sink in'
      }
      if (progress < 0.3) {
        phase = 'Base'
        quality = w % 2 ? 'Easy run + 6 × 20 s strides' : 'Hills: 6–8 × 60 s uphill at a strong effort, jog down'
      } else if (progress < 0.75) {
        phase = 'Build'
        quality = w % 2 ? 'Tempo: 15–25 min at threshold ("comfortably hard")' : `Intervals: ${g.interval}`
        if (w % 3 === 0) quality = 'Fartlek: 30–40 min easy with 8–10 surges of 1–2 min'
      } else {
        phase = 'Race-specific'
        quality = w % 2 ? `Race pace: ${g.pace}` : `Intervals: ${g.interval}`
      }
      if (cutback) quality = 'Easy run + 6 × 20 s strides'
    }
    const easyCount = Math.max(0, runs - 2)
    const easy = Math.max(3, Math.round(long * 0.45))
    const qualityKm = Math.max(5, Math.round(long * 0.6))
    out.push({ week: w, phase, long: Math.max(2, long), easy, easyCount, quality, total: Math.max(2, long) + easy * easyCount + (runs >= 2 ? qualityKm : 0), note })
  }
  return out
}
