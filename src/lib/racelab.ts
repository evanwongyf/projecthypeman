/**
 * Race Lab: named projections built from segments of distance × pace.
 * Stored in this browser, like the run log.
 */

export type Segment = {
  id: string
  label: string
  distanceKm: number
  /** seconds per km */
  paceSec: number
}

export type Projection = {
  id: string
  name: string
  /** Optional goal finish time, seconds. */
  targetSec: number | null
  segments: Segment[]
  updatedAt: number
}

const KEY = 'hypeman.running.projections'

export function loadProjections(): Projection[] {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '[]')
    return Array.isArray(raw) ? (raw as Projection[]) : []
  } catch {
    return []
  }
}

export function saveProjections(list: Projection[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list))
  } catch {
    /* blocked storage */
  }
}

export type RaceDistance = { id: string; label: string; km: number }

export const RACE_DISTANCES: RaceDistance[] = [
  { id: 'mile', label: 'Mile', km: 1.609344 },
  { id: '3k', label: '3K', km: 3 },
  { id: '5k', label: '5K', km: 5 },
  { id: '10k', label: '10K', km: 10 },
  { id: '15k', label: '15K', km: 15 },
  { id: '10mi', label: '10 miles', km: 16.09344 },
  { id: 'half', label: 'Half marathon', km: 21.0975 },
  { id: '30k', label: '30K', km: 30 },
  { id: 'full', label: 'Marathon', km: 42.195 },
  { id: '50k', label: '50K', km: 50 },
  { id: '100k', label: '100K', km: 100 },
]

export const KM_PER_MILE = 1.609344

const DIST_KEY = 'hypeman.running.distances'

/** Your own saved race distances (a local 8K, a 2.4 km test, an odd trail race). */
export function loadCustomDistances(): RaceDistance[] {
  try {
    const raw = JSON.parse(localStorage.getItem(DIST_KEY) || '[]')
    return Array.isArray(raw) ? (raw as RaceDistance[]) : []
  } catch {
    return []
  }
}

export function saveCustomDistances(list: RaceDistance[]) {
  try {
    localStorage.setItem(DIST_KEY, JSON.stringify(list))
  } catch {
    /* blocked storage */
  }
}

export function newSegment(label: string, distanceKm: number, paceSec: number): Segment {
  return { id: crypto.randomUUID(), label, distanceKm, paceSec }
}

/**
 * Split a race into segments using a strategy. `delta` is seconds per km
 * between the first and last part (positive = negative split, i.e. faster finish).
 */
export function buildSplits(totalKm: number, goalPaceSec: number, strategy: 'even' | 'negative' | 'positive', parts = 4) {
  const delta = strategy === 'even' ? 0 : strategy === 'negative' ? 6 : -6
  const each = totalKm / parts
  return Array.from({ length: parts }, (_, i) => {
    // Linear ramp centred on the goal pace, so the average stays on goal.
    const offset = parts === 1 ? 0 : delta / 2 - (delta * i) / (parts - 1)
    // 4 decimals so official distances (21.0975, 42.195) survive the split.
    return newSegment(`Part ${i + 1}`, Math.round(each * 10000) / 10000, Math.round(goalPaceSec + offset))
  })
}

export function round2(n: number) {
  return Math.round(n * 100) / 100
}

export type ProjectionStats = {
  totalKm: number
  totalSec: number
  avgPaceSec: number
  fastest: Segment | null
  slowest: Segment | null
  /** Seconds versus target; negative = ahead. */
  gapSec: number | null
  /** Pace that would hit the target over the same distance. */
  targetPaceSec: number | null
  firstHalfSec: number
  secondHalfSec: number
  rows: { segment: Segment; timeSec: number; startKm: number; endKm: number; elapsedSec: number }[]
  kmSplits: { km: number; elapsedSec: number }[]
}

export function computeStats(p: Projection): ProjectionStats {
  const segs = p.segments.filter((s) => s.distanceKm > 0 && s.paceSec > 0)
  let km = 0
  let sec = 0
  const rows = segs.map((s) => {
    const t = s.distanceKm * s.paceSec
    const row = { segment: s, timeSec: t, startKm: km, endKm: km + s.distanceKm, elapsedSec: sec + t }
    km += s.distanceKm
    sec += t
    return row
  })

  // Time at a given distance, interpolated within its segment.
  const timeAt = (d: number) => {
    let acc = 0
    for (const r of rows) {
      if (d <= r.endKm) return acc + (d - r.startKm) * r.segment.paceSec
      acc = r.elapsedSec
    }
    return acc
  }

  const kmSplits: { km: number; elapsedSec: number }[] = []
  for (let i = 1; i <= Math.floor(km + 1e-9); i++) kmSplits.push({ km: i, elapsedSec: timeAt(i) })
  if (km % 1 > 0.001) kmSplits.push({ km: round2(km), elapsedSec: sec })

  const half = timeAt(km / 2)
  const sorted = [...segs].sort((a, b) => a.paceSec - b.paceSec)

  return {
    totalKm: km,
    totalSec: sec,
    avgPaceSec: km ? sec / km : 0,
    fastest: sorted[0] ?? null,
    slowest: sorted[sorted.length - 1] ?? null,
    gapSec: p.targetSec && km ? sec - p.targetSec : null,
    targetPaceSec: p.targetSec && km ? p.targetSec / km : null,
    firstHalfSec: half,
    secondHalfSec: sec - half,
    rows,
    kmSplits,
  }
}

/** m:ss → seconds per km. */
export function parsePace(input: string): number | null {
  const m = input.trim().match(/^(\d{1,2}):(\d{2})$/)
  if (!m) return null
  const s = Number(m[1]) * 60 + Number(m[2])
  return Number(m[2]) < 60 && s > 0 ? s : null
}

export function formatPaceSec(sec: number): string {
  if (!sec || !Number.isFinite(sec)) return '—'
  let m = Math.floor(sec / 60)
  let s = Math.round(sec - m * 60)
  if (s === 60) {
    m += 1
    s = 0
  }
  return `${m}:${String(s).padStart(2, '0')}`
}

export function formatClock(sec: number): string {
  const total = Math.round(sec)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  return h ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}` : `${m}:${String(s).padStart(2, '0')}`
}
