import type { RelationshipKind, Student } from './types'

export const RELATIONSHIP_LABELS: Record<RelationshipKind, string> = {
  friend: 'Friend',
  close_friend: 'Close friend',
  conflict: 'Conflict',
  romance: 'Romance',
  sibling: 'Sibling',
  other: 'Other',
}

/** Conflict reads as a warning; the rest are neutral or warm. */
export const RELATIONSHIP_TONE: Record<RelationshipKind, string> = {
  friend: 'var(--collected)',
  close_friend: 'var(--collected)',
  conflict: 'var(--overdue)',
  romance: 'var(--accent)',
  sibling: 'var(--ink-soft)',
  other: 'var(--ink-soft)',
}

export const RELATIONSHIP_ORDER: RelationshipKind[] = [
  'friend',
  'close_friend',
  'conflict',
  'romance',
  'sibling',
  'other',
]

/**
 * A relationship is stored once, on whichever student it was added from. Both
 * profiles should show it, so the other side is derived rather than duplicated
 * — that way editing or deleting it can never leave a half-record behind.
 */
export type ResolvedRelationship = {
  id: string
  kind: RelationshipKind
  /** Who the relationship is with, from this student's point of view. */
  otherLabel: string
  otherStudentId?: string
  notes: { id: string; text: string; createdAt: string }[]
  createdAt: string
  /** True when it lives on another student's record, so this view is a mirror. */
  mirrored: boolean
  /** The student that actually owns the record. */
  ownerId: string
}

export function resolveRelationships(student: Student, students: Student[]): ResolvedRelationship[] {
  const nameOf = (id: string) => {
    const s = students.find((x) => x.id === id)
    return s ? s.preferredName?.trim() || s.fullName : 'Removed student'
  }

  const own: ResolvedRelationship[] = student.relationships.map((r) => ({
    id: r.id,
    kind: r.kind,
    otherLabel: r.otherStudentId ? nameOf(r.otherStudentId) : (r.otherName ?? 'Someone'),
    otherStudentId: r.otherStudentId,
    notes: r.notes,
    createdAt: r.createdAt,
    mirrored: false,
    ownerId: student.id,
  }))

  const mirrored: ResolvedRelationship[] = students
    .filter((s) => s.id !== student.id)
    .flatMap((s) =>
      s.relationships
        .filter((r) => r.otherStudentId === student.id)
        .map((r) => ({
          id: r.id,
          kind: r.kind,
          otherLabel: s.preferredName?.trim() || s.fullName,
          otherStudentId: s.id,
          notes: r.notes,
          createdAt: r.createdAt,
          mirrored: true,
          ownerId: s.id,
        }))
    )

  return [...own, ...mirrored].sort(
    (a, b) => RELATIONSHIP_ORDER.indexOf(a.kind) - RELATIONSHIP_ORDER.indexOf(b.kind) || a.otherLabel.localeCompare(b.otherLabel)
  )
}
