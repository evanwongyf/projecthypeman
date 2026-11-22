import type { Award, Behaviour } from './types'

/** Running total per student, from the ledger. A total is never stored. */
export function totalsByStudent(awards: Award[]): Map<string, number> {
  const map = new Map<string, number>()
  for (const a of awards) map.set(a.studentId, (map.get(a.studentId) ?? 0) + a.points)
  return map
}

export function totalFor(awards: Award[], studentId: string): number {
  let sum = 0
  for (const a of awards) if (a.studentId === studentId) sum += a.points
  return sum
}

/** Positive / negative split, for the small breakdown on a profile. */
export function tallyFor(awards: Award[], studentId: string) {
  let positive = 0
  let negative = 0
  let entries = 0
  for (const a of awards) {
    if (a.studentId !== studentId) continue
    entries += 1
    if (a.points >= 0) positive += a.points
    else negative += a.points
  }
  return { positive, negative, total: positive + negative, entries }
}

/** The signed value an effect would apply at this magnitude. */
export function signedPoints(kind: Behaviour['kind'], magnitude: number): number {
  return kind === 'negative' ? -Math.abs(magnitude) : Math.abs(magnitude)
}

/** "+3" / "-2" / "0"the sign is the point, so it is always shown. */
export function formatPoints(value: number): string {
  return value > 0 ? `+${value}` : String(value)
}

/** Colour token for a total or a delta. */
export function pointsTone(value: number): string {
  if (value > 0) return 'var(--collected)'
  if (value < 0) return 'var(--overdue)'
  return 'var(--ink-faint)'
}

export function sortBehaviours(behaviours: Behaviour[], kind: Behaviour['kind']): Behaviour[] {
  return behaviours.filter((b) => b.kind === kind).sort((a, b) => a.name.localeCompare(b.name))
}

/** Most recent first. */
export function recentAwards(awards: Award[], filter: (a: Award) => boolean, limit = 30): Award[] {
  return awards
    .filter(filter)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, limit)
}
