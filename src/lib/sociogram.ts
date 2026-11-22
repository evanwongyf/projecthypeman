import { adjacentConflicts } from './seating'
import type { Entry, RelationshipKind, SeatingPlan, Student } from './types'

/** One recorded relationship between two students in the same class. */
export type Tie = {
  id: string
  kind: RelationshipKind
  /** The student whose record holds it. */
  a: string
  b: string
  notes: Entry[]
  createdAt: string
}

export const POSITIVE: RelationshipKind[] = ['friend', 'close_friend']

export const pairKey = (a: string, b: string) => (a < b ? `${a}|${b}` : `${b}|${a}`)

/** Ties where both people are on this roster. Ties to anyone else are counted separately. */
export function classTies(roster: Student[]): { ties: Tie[]; outside: number } {
  const inClass = new Set(roster.map((s) => s.id))
  const ties: Tie[] = []
  let outside = 0
  for (const s of roster) {
    for (const r of s.relationships) {
      if (r.otherStudentId && inClass.has(r.otherStudentId)) {
        ties.push({ id: r.id, kind: r.kind, a: s.id, b: r.otherStudentId, notes: r.notes, createdAt: r.createdAt })
      } else outside++
    }
  }
  return { ties, outside }
}

/** Unique partners per student for the given kinds. */
export function partners(ties: Tie[], kinds: RelationshipKind[]): Map<string, Set<string>> {
  const out = new Map<string, Set<string>>()
  const add = (x: string, y: string) => {
    if (!out.has(x)) out.set(x, new Set())
    out.get(x)!.add(y)
  }
  for (const t of ties) {
    if (!kinds.includes(t.kind)) continue
    add(t.a, t.b)
    add(t.b, t.a)
  }
  return out
}

/**
 * A deterministic force-directed layout. Friendships pull students together
 * (close friendships harder), conflicts push them apart, and a gentle pull to
 * the centre keeps students with no ties on the page. The same data always
 * gives the same picture, so the map does not jump about between visits.
 */
export function layout(ids: string[], ties: Tie[], W: number, H: number): Map<string, { x: number; y: number }> {
  const n = ids.length
  const pos = new Map<string, { x: number; y: number }>()
  if (!n) return pos
  const cx = W / 2
  const cy = H / 2
  ids.forEach((id, i) => {
    const ang = (2 * Math.PI * i) / n
    pos.set(id, { x: cx + Math.cos(ang) * W * 0.32, y: cy + Math.sin(ang) * H * 0.34 })
  })
  if (n === 1) return new Map([[ids[0], { x: cx, y: cy }]])

  // Lay out in free space first, then fit the result to the frame, so nobody
  // ends up pinned against an edge.
  const k = Math.sqrt((W * H) / n) * 0.5
  const weight: Partial<Record<RelationshipKind, number>> = { close_friend: 1.7, friend: 1, romance: 1.2, sibling: 0.7, other: 0.35 }
  let temp = k

  for (let it = 0; it < 500; it++) {
    const disp = new Map(ids.map((id) => [id, { x: 0, y: 0 }]))
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const p = pos.get(ids[i])!
        const q = pos.get(ids[j])!
        let dx = p.x - q.x
        let dy = p.y - q.y
        let d = Math.hypot(dx, dy)
        if (d < 0.01) {
          dx = 0.01 * (i - j)
          dy = 0.01
          d = 0.014
        }
        const f = (k * k) / d
        disp.get(ids[i])!.x += (dx / d) * f
        disp.get(ids[i])!.y += (dy / d) * f
        disp.get(ids[j])!.x -= (dx / d) * f
        disp.get(ids[j])!.y -= (dy / d) * f
      }
    }
    for (const t of ties) {
      const p = pos.get(t.a)
      const q = pos.get(t.b)
      if (!p || !q) continue
      const dx = p.x - q.x
      const dy = p.y - q.y
      const d = Math.max(Math.hypot(dx, dy), 0.01)
      let f: number
      if (t.kind === 'conflict') f = d < k * 2 ? -(k * 2 - d) : 0
      else f = ((d * d) / k) * (weight[t.kind] ?? 0.5)
      disp.get(t.a)!.x -= (dx / d) * f
      disp.get(t.a)!.y -= (dy / d) * f
      disp.get(t.b)!.x += (dx / d) * f
      disp.get(t.b)!.y += (dy / d) * f
    }
    for (const id of ids) {
      const p = pos.get(id)!
      const dv = disp.get(id)!
      // Gravity keeps unconnected students and separate groups from drifting off.
      const gx = cx - p.x
      const gy = cy - p.y
      const gd = Math.max(Math.hypot(gx, gy), 0.01)
      dv.x += (gx / gd) * gd * gd * 0.012
      dv.y += (gy / gd) * gd * gd * 0.012
      const len = Math.max(Math.hypot(dv.x, dv.y), 0.01)
      const step = Math.min(len, temp)
      p.x += (dv.x / len) * step
      p.y += (dv.y / len) * step
    }
    temp = Math.max(0.5, temp * 0.988)
  }

  // Fit to the frame with margins for the name labels.
  const xs = ids.map((id) => pos.get(id)!.x)
  const ys = ids.map((id) => pos.get(id)!.y)
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)]
  const mx = 70
  const my = 50
  let sx = (W - 2 * mx) / Math.max(x1 - x0, 1)
  let sy = (H - 2 * my) / Math.max(y1 - y0, 1)
  // Keep the shape roughly true: neither axis stretched more than 1.5 times the other.
  sx = Math.min(sx, sy * 1.5)
  sy = Math.min(sy, sx * 1.5)
  const ox = (W - (x1 - x0) * sx) / 2
  const oy = (H - (y1 - y0) * sy) / 2
  for (const id of ids) {
    const p = pos.get(id)!
    pos.set(id, { x: ox + (p.x - x0) * sx, y: oy + (p.y - y0) * sy - 6 })
  }
  return pos
}

export type Insights = {
  isolated: string[]
  mostConnected: { id: string; count: number }[]
  conflictPairs: [string, string][]
  conflictHeavy: { id: string; count: number }[]
  groups: string[][]
  /** Two students in conflict who share a friend: the friend is caught between them. */
  caughtBetween: { friend: string; pair: [string, string] }[]
  seating: { plan: SeatingPlan; pairs: [string, string][] }[]
}

export function insights(roster: Student[], ties: Tie[], plans: SeatingPlan[], allStudents: Student[]): Insights {
  const ids = roster.map((s) => s.id)
  const pos = partners(ties, POSITIVE)
  const con = partners(ties, ['conflict'])

  const isolated = ids.filter((id) => !pos.get(id)?.size)
  const mostConnected = ids
    .map((id) => ({ id, count: pos.get(id)?.size ?? 0 }))
    .filter((x) => x.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)

  const seen = new Set<string>()
  const conflictPairs: [string, string][] = []
  for (const t of ties) {
    if (t.kind !== 'conflict') continue
    const key = pairKey(t.a, t.b)
    if (seen.has(key)) continue
    seen.add(key)
    conflictPairs.push([t.a, t.b])
  }
  const conflictHeavy = ids
    .map((id) => ({ id, count: con.get(id)?.size ?? 0 }))
    .filter((x) => x.count >= 2)
    .sort((a, b) => b.count - a.count)

  // Friendship groups: connected parts of the friendship network.
  const groups: string[][] = []
  const visited = new Set<string>()
  for (const id of ids) {
    if (visited.has(id) || !pos.get(id)?.size) continue
    const stack = [id]
    const group: string[] = []
    visited.add(id)
    while (stack.length) {
      const cur = stack.pop()!
      group.push(cur)
      for (const nb of pos.get(cur) ?? []) {
        if (!visited.has(nb)) {
          visited.add(nb)
          stack.push(nb)
        }
      }
    }
    groups.push(group)
  }
  groups.sort((a, b) => b.length - a.length)

  const caughtBetween: Insights['caughtBetween'] = []
  for (const [x, y] of conflictPairs) {
    for (const f of pos.get(x) ?? []) if (pos.get(y)?.has(f)) caughtBetween.push({ friend: f, pair: [x, y] })
  }

  const seating = plans
    .map((plan) => ({ plan, pairs: adjacentConflicts(plan, allStudents).map((p) => [p.students[0].id, p.students[1].id] as [string, string]) }))
    .filter((x) => x.pairs.length)

  return { isolated, mostConnected, conflictPairs, conflictHeavy, groups, caughtBetween, seating }
}

/** Line style for each kind, so a tie is told apart by pattern as well as colour. */
export const TIE_STYLE: Record<RelationshipKind, { width: number; dash?: string }> = {
  close_friend: { width: 4.5 },
  friend: { width: 2.2 },
  conflict: { width: 2.6, dash: '7 4' },
  romance: { width: 2.2, dash: '2 4' },
  sibling: { width: 2, dash: '10 3 2 3' },
  other: { width: 1.5, dash: '1 4' },
}
