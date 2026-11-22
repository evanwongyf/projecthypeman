export function toDateKey(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function todayKey(): string {
  return toDateKey(new Date())
}

export function addDays(key: string, delta: number): string {
  const [y, m, d] = key.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  date.setDate(date.getDate() + delta)
  return toDateKey(date)
}

export function lastNDays(n: number, endKey: string = todayKey()): string[] {
  const out: string[] = []
  for (let i = n - 1; i >= 0; i--) {
    out.push(addDays(endKey, -i))
  }
  return out
}

export function mondayOf(key: string): string {
  const [y, m, d] = key.split('-').map(Number)
  const dow = new Date(y, m - 1, d).getDay()
  const diff = dow === 0 ? -6 : 1 - dow
  return addDays(key, diff)
}

export function currentStreak(dateKeys: Set<string>, endKey: string = todayKey()): number {
  let cursor = endKey
  if (!dateKeys.has(cursor)) {
    cursor = addDays(cursor, -1)
    if (!dateKeys.has(cursor)) return 0
  }
  let streak = 0
  while (dateKeys.has(cursor)) {
    streak++
    cursor = addDays(cursor, -1)
  }
  return streak
}

export function formatShortDate(key: string): string {
  const [y, m, d] = key.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })
}

export function formatMinutes(total: number): string {
  const h = Math.floor(total / 60)
  const m = total % 60
  if (h === 0) return `${m}m`
  if (m === 0) return `${h}h`
  return `${h}h ${m}m`
}
