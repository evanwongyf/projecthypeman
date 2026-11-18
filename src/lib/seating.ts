import type { SeatingPlan, Student } from './types'
import { resolveRelationships } from './relationships'

export function seatKey(row: number, col: number): string {
  return `${row},${col}`
}

export function parseSeat(key: string): [number, number] {
  const [r, c] = key.split(',').map(Number)
  return [r, c]
}

/** studentId -> seat key, for the one seat they occupy. */
export function seatOf(plan: SeatingPlan): Map<string, string> {
  const map = new Map<string, string>()
  for (const [seat, studentId] of Object.entries(plan.seats)) map.set(studentId, seat)
  return map
}

/** Students in the class who are not yet placed on this plan. */
export function unseated(plan: SeatingPlan, roster: Student[]): Student[] {
  const placed = new Set(Object.values(plan.seats))
  return roster.filter((s) => !placed.has(s.id))
}

/** The eight surrounding seats, clipped to the grid. */
export function neighbours(plan: SeatingPlan, row: number, col: number): string[] {
  const out: string[] = []
  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      if (r === row && c === col) continue
      if (r < 0 || c < 0 || r >= plan.rows || c >= plan.cols) continue
      out.push(seatKey(r, c))
    }
  }
  return out
}

export type ConflictPair = {
  seats: [string, string]
  students: [Student, Student]
}

/**
 * Pairs recorded as a conflict who have ended up sitting next to each other.
 *
 * This is the point of keeping relationships at all: the seating plan is where
 * that knowledge is worth something, and a teacher should not have to remember
 * it while dragging names around.
 */
export function adjacentConflicts(plan: SeatingPlan, students: Student[]): ConflictPair[] {
  const byId = new Map(students.map((s) => [s.id, s]))

  // Every student id that each student is in conflict with, both directions.
  const conflicts = new Map<string, Set<string>>()
  for (const student of students) {
    const others = resolveRelationships(student, students)
      .filter((r) => r.kind === 'conflict' && r.otherStudentId)
      .map((r) => r.otherStudentId!)
    if (others.length) conflicts.set(student.id, new Set(others))
  }

  const seen = new Set<string>()
  const pairs: ConflictPair[] = []

  for (const [seat, studentId] of Object.entries(plan.seats)) {
    const theirConflicts = conflicts.get(studentId)
    if (!theirConflicts) continue
    const [row, col] = parseSeat(seat)

    for (const other of neighbours(plan, row, col)) {
      const otherId = plan.seats[other]
      if (!otherId || !theirConflicts.has(otherId)) continue

      const fingerprint = [studentId, otherId].sort().join('|')
      if (seen.has(fingerprint)) continue
      seen.add(fingerprint)

      const a = byId.get(studentId)
      const b = byId.get(otherId)
      if (a && b) pairs.push({ seats: [seat, other], students: [a, b] })
    }
  }

  return pairs
}

/** Seats involved in at least one adjacent conflict. */
export function conflictSeats(pairs: ConflictPair[]): Set<string> {
  const out = new Set<string>()
  for (const p of pairs) {
    out.add(p.seats[0])
    out.add(p.seats[1])
  }
  return out
}

/**
 * Who this student would end up sitting next to that they are in conflict with,
 * if placed at this seat. Lets the picker warn while the choice is being made,
 * rather than only flagging it afterwards.
 */
export function conflictsIfSeated(
  plan: SeatingPlan,
  students: Student[],
  seat: string,
  studentId: string
): Student[] {
  const student = students.find((s) => s.id === studentId)
  if (!student) return []

  const theirs = new Set(
    resolveRelationships(student, students)
      .filter((r) => r.kind === 'conflict' && r.otherStudentId)
      .map((r) => r.otherStudentId!)
  )
  if (theirs.size === 0) return []

  const [row, col] = parseSeat(seat)
  const out: Student[] = []

  for (const key of neighbours(plan, row, col)) {
    const occupant = plan.seats[key]
    // Ignore the seat they are leaving — they will not be next to themselves.
    if (!occupant || occupant === studentId) continue
    if (theirs.has(occupant)) {
      const other = students.find((s) => s.id === occupant)
      if (other) out.push(other)
    }
  }

  return out
}
