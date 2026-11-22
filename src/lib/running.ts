/**
 * Running mode's data. Kept in this browser for now, there is no server
 * endpoint for runs yet. Everything goes through load/save so moving it to an
 * API later is a change in one file.
 */

export type RunType = 'easy' | 'tempo' | 'long' | 'intervals' | 'race'

export type Run = {
  id: string
  /** yyyy-mm-dd */
  date: string
  distanceKm: number
  durationSec: number
  type: RunType
  note: string
  createdAt: number
}

export const RUN_TYPES: { value: RunType; label: string }[] = [
  { value: 'easy', label: 'Easy' },
  { value: 'tempo', label: 'Tempo' },
  { value: 'long', label: 'Long run' },
  { value: 'intervals', label: 'Intervals' },
  { value: 'race', label: 'Race' },
]

const KEY = 'hypeman.running.runs'

export function loadRuns(): Run[] {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '[]')
    return Array.isArray(raw) ? (raw as Run[]) : []
  } catch {
    return []
  }
}

export function saveRuns(runs: Run[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(runs))
  } catch {
    /* blocked storage */
  }
}

/** "45:30", "1:02:10" or plain minutes ("45") → seconds. Null when unreadable. */
export function parseDuration(input: string): number | null {
  const parts = input.trim().split(':').map((p) => p.trim())
  if (parts.some((p) => p === '' || !/^\d+$/.test(p))) return null
  const n = parts.map(Number)
  let sec: number
  if (n.length === 1) sec = n[0] * 60
  else if (n.length === 2) sec = n[0] * 60 + n[1]
  else if (n.length === 3) sec = n[0] * 3600 + n[1] * 60 + n[2]
  else return null
  return sec > 0 ? sec : null
}

export function formatDuration(sec: number): string {
  const h = Math.floor(sec / 3600)
  const m = Math.floor((sec % 3600) / 60)
  const s = Math.round(sec % 60)
  const mm = String(m).padStart(h ? 2 : 1, '0')
  const ss = String(s).padStart(2, '0')
  return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`
}

/** Minutes per km as m:ss. */
export function formatPace(durationSec: number, km: number): string {
  if (!km) return '-'
  const per = durationSec / km
  const m = Math.floor(per / 60)
  const s = Math.round(per % 60)
  return s === 60 ? `${m + 1}:00` : `${m}:${String(s).padStart(2, '0')}`
}

export function todayIso(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

/** Monday of the week containing `iso`, as yyyy-mm-dd. */
export function weekStart(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  const offset = (date.getDay() + 6) % 7
  date.setDate(date.getDate() - offset)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}
