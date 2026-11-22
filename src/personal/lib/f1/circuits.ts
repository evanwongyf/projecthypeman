import { CIRCUIT_GEO } from './circuitGeo'
import { CIRCUIT_NOTES, NOTES_BY_ID, shortName } from './circuitNotes'
import type { CircuitNotes, Feature } from './circuitNotes'
import { BASE_SETUP, buildTrack, cornerStats, sectorSplits, setupForWing, simulate, straights } from './circuitModel'
import type { Corner, CornerStats, Setup, Sim, Straight, Track, Vec } from './circuitModel'

export type { Corner, CornerStats, Setup, Sim, Straight, Track, CircuitNotes, Feature }
export { BASE_SETUP, setupForWing, simulate, NOTES_BY_ID, CIRCUIT_NOTES, shortName }
export { mmss, gearAt } from './circuitModel'

// The circuits in the atlas, in 2026 calendar order.
export const CIRCUIT_IDS = CIRCUIT_NOTES.map((n) => n.id)

const trackCache = new Map<string, Track>()

export function trackFor(id: string): Track {
  let t = trackCache.get(id)
  if (!t) {
    const g = CIRCUIT_GEO[id]
    const pts = g.pts.split(' ').map((p) => p.split(',').map(Number) as Vec)
    t = buildTrack(id, pts, g.length, g.altitude, { offset: g.offset, alpha: g.alpha.split(' ').map(Number) })
    trackCache.set(id, t)
  }
  return t
}

// A track rebuilt with a different amount of curvature smoothing, for the curvature lab.
export function trackWithSmoothing(id: string, sigma: number): Track {
  const g = CIRCUIT_GEO[id]
  const pts = g.pts.split(' ').map((p) => p.split(',').map(Number) as Vec)
  return buildTrack(id, pts, g.length, g.altitude, { offset: g.offset, alpha: g.alpha.split(' ').map(Number), sigma })
}

const cornerCache = new Map<string, Corner[]>()

// The numbered turns of a circuit, in order from the start line.
export function cornersFor(id: string): Corner[] {
  let c = cornerCache.get(id)
  if (!c) {
    c = CIRCUIT_GEO[id].corners.split(' ').map((row, i) => {
      const [s0, sApex, s1, dir, angle, rMin] = row.split(':')
      return { n: i + 1, s0: +s0, sApex: +sApex, s1: +s1, dir: dir === 'L' ? 'left' : 'right', angle: +angle, rMin: +rMin }
    })
    cornerCache.set(id, c)
  }
  return c
}

export const trackWidth = (id: string) => CIRCUIT_GEO[id].width
export const officialTurns = (id: string) => CIRCUIT_GEO[id].turns

export const defaultSetup = (id: string): Setup => setupForWing(NOTES_BY_ID[id].wing)

export type Sector = { n: 1 | 2 | 3; s0: number; s1: number; time: number; corners: number[]; avgSpeed: number }

export type Analysis = {
  id: string
  notes: CircuitNotes
  track: Track
  setup: Setup
  sim: Sim
  corners: CornerStats[]
  straights: Straight[]
  sectors: Sector[]
  splits: [number, number]
}

// The time and distance the lap model takes to reach distance s from the line.
export const indexAt = (t: Track, s: number) => ((Math.round(s / t.ds) % t.n) + t.n) % t.n

const analysisCache = new Map<string, Analysis>()

export function analyse(id: string, setup?: Setup): Analysis {
  const key = setup ? null : id
  const hit = key ? analysisCache.get(key) : undefined
  if (hit) return hit
  const track = trackFor(id)
  const use = setup ?? defaultSetup(id)
  const sim = simulate(track, use)
  const corners = cornerStats(sim, cornersFor(id))
  const splits = sectorSplits(sim)
  const bounds = [0, splits[0], splits[1], track.length]
  const sectors: Sector[] = [1, 2, 3].map((n, k) => {
    const i0 = indexAt(track, bounds[k])
    const i1 = k === 2 ? track.n : indexAt(track, bounds[k + 1])
    const tEnd = i1 >= track.n ? sim.lapTime : sim.t[i1]
    const time = tEnd - sim.t[i0]
    return {
      n: n as 1 | 2 | 3,
      s0: bounds[k],
      s1: bounds[k + 1],
      time,
      corners: corners.filter((c) => c.sApex >= bounds[k] && c.sApex < bounds[k + 1]).map((c) => c.n),
      avgSpeed: (bounds[k + 1] - bounds[k]) / time,
    }
  })
  const out = { id, notes: NOTES_BY_ID[id], track, setup: use, sim, corners, straights: straights(sim), sectors, splits }
  if (key) analysisCache.set(key, out)
  return out
}

// A one-row summary of a lap for the atlas comparisons.
export type Summary = {
  id: string
  name: string
  place: string
  kind: CircuitNotes['kind']
  length: number
  turns: number
  altitude: number
  wing: number
  lapTime: number
  vMax: number // km/h
  vMin: number
  vAvg: number
  fullThrottle: number // percent
  braking: number // percent of distance
  brakingTime: number // percent of lap time
  peakLat: number // g
  peakBrake: number // g
  longest: number // m, the longest full-throttle run
}

const summaryCache = new Map<string, Summary>()

export function summary(id: string): Summary {
  let s = summaryCache.get(id)
  if (!s) {
    const a = analyse(id)
    const { sim } = a
    let peakLat = 0
    let peakBrake = 0
    for (let i = 0; i < sim.v.length; i++) {
      peakLat = Math.max(peakLat, Math.abs(sim.aLat[i]))
      if (sim.brake[i] > 0) peakBrake = Math.max(peakBrake, -sim.aLong[i])
    }
    s = {
      id,
      name: a.notes.name,
      place: a.notes.place,
      kind: a.notes.kind,
      length: a.track.length,
      turns: officialTurns(id),
      altitude: a.track.altitude,
      wing: a.notes.wing,
      lapTime: sim.lapTime,
      vMax: sim.vMax * 3.6,
      vMin: sim.vMin * 3.6,
      vAvg: sim.vAvg * 3.6,
      fullThrottle: sim.fullThrottle * 100,
      braking: sim.braking * 100,
      brakingTime: (sim.brakingTime / sim.lapTime) * 100,
      peakLat,
      peakBrake,
      longest: a.straights.reduce((m, s) => Math.max(m, s.length), 0),
    }
    summaryCache.set(id, s)
  }
  return s
}

export const allSummaries = () => CIRCUIT_IDS.map(summary)

// 1 for the highest value of a metric among the circuits, N for the lowest.
export function rankOf(id: string, pick: (s: Summary) => number): number {
  const mine = pick(summary(id))
  return allSummaries().filter((s) => pick(s) > mine).length + 1
}

export const ordinal = (n: number) => {
  const v = n % 100
  if (v >= 11 && v <= 13) return `${n}th`
  return `${n}${['th', 'st', 'nd', 'rd'][n % 10 > 3 ? 0 : n % 10]}`
}

// The named stretch a corner belongs to, if any.
export const featureFor = (id: string, n: number): Feature | undefined => NOTES_BY_ID[id].features?.find((f) => n >= f.at[0] && n <= f.at[1])

// How much one percent more of each ingredient changes the lap, in seconds (negative is faster).
export type Sensitivity = { key: string; label: string; dt: number }

export function sensitivities(id: string): Sensitivity[] {
  const a = analyse(id)
  const base = a.sim.lapTime
  const b = a.setup
  const run = (s: Setup) => simulate(a.track, s).lapTime - base
  return [
    { key: 'mu', label: 'Tyre grip +1%', dt: run({ ...b, mu: b.mu * 1.01 }) },
    { key: 'clA', label: 'Downforce +1% (same drag)', dt: run({ ...b, clA: b.clA * 1.01 }) },
    { key: 'cdA', label: 'Drag +1% (same downforce)', dt: run({ ...b, cdA: b.cdA * 1.01 }) },
    { key: 'power', label: 'Power +1%', dt: run({ ...b, power: b.power * 1.01 }) },
    { key: 'mass', label: 'Mass +1%', dt: run({ ...b, mass: b.mass * 1.01 }) },
    { key: 'brakeG', label: 'Braking +1%', dt: run({ ...b, brakeG: b.brakeG * 1.01 }) },
  ]
}

export const SENS_LABELS: Record<string, string> = {
  mu: 'Grip',
  clA: 'Downforce',
  cdA: 'Drag',
  power: 'Power',
  mass: 'Mass',
  brakeG: 'Braking',
}
