/** Shapes shared by the API and the browser. Mirrored in src/lib/types.ts. */

export type Entry = {
  id: string
  /** Each note/incident is its own entry, stamped with the date + time it was logged. */
  text: string
  createdAt: string
}

export const RELATIONSHIP_KINDS = ['friend', 'close_friend', 'conflict', 'romance', 'sibling', 'other'] as const
export type RelationshipKind = (typeof RELATIONSHIP_KINDS)[number]

/** A parent, guardian or other contact for a student. */
export type Guardian = {
  id: string
  name: string
  /** Mother, Father, Grandmother, Guardian — free text, since families vary. */
  relation?: string
  phone?: string
  email?: string
  note?: string
  createdAt: string
}

/**
 * A relationship with another person. The other person is a student in the
 * terminal where possible, so the record shows on both profiles; otherwise it
 * is a plain name, for someone outside the class.
 */
export type Relationship = {
  id: string
  kind: RelationshipKind
  otherStudentId?: string
  otherName?: string
  /** Notes, newest first. One is written when the relationship is created. */
  notes: Entry[]
  createdAt: string
}

/** A named arrangement of one class across a grid of seats. */
export type SeatingPlan = {
  id: string
  classId: string
  name: string
  rows: number
  cols: number
  /**
   * "row,col" -> studentId, zero-indexed. A missing key is an empty seat, so
   * an empty plan costs nothing and resizing never has to rewrite the grid.
   */
  seats: Record<string, string>
  createdAt: string
  updatedAt: string
}

export const SEATING_MIN = 1
export const SEATING_MAX = 12
export const SEATING_DEFAULT_ROWS = 7
export const SEATING_DEFAULT_COLS = 7

export type ClassRoom = {
  id: string
  name: string
  school: string
  subject: string
  createdAt: string
}

export type Student = {
  id: string
  /** Full name is the only mandatory field. */
  fullName: string
  preferredName?: string
  birthday?: string
  /** null = kept in the student pool, not attached to any class. */
  classId: string | null
  hasPhoto?: boolean
  /** Short tags, shown as chips on the profile. */
  ccas: string[]
  interests: string[]
  characteristics: string[]
  guardians: Guardian[]
  relationships: Relationship[]
  notes: Entry[]
  incidents: Entry[]
  createdAt: string
}

/** Stored state. 'overdue' is derived at read time from the due date, never stored. */
export type SubmissionState = 'assigned' | 'collected'

export type Homework = {
  id: string
  classId: string
  title: string
  description: string
  /** ISO date, YYYY-MM-DD. */
  dueDate: string
  createdAt: string
  /** studentId -> state. A student missing from the map is treated as 'assigned'. */
  submissions: Record<string, SubmissionState>
  /** studentId -> when it was marked collected. */
  collectedAt: Record<string, string>
}

/** Free-form on purpose: the design catalogue lives in the browser, and the
 *  client normalises whatever it reads back, so adding an axis needs no
 *  server change and an old blob never breaks a new build. */
export type Settings = {
  design?: Record<string, string>
  /** Set once the starting effect catalogue has been written, so a teacher
   *  who deletes an effect does not get it handed back on the next read. */
  behavioursSeeded?: boolean
}

export type BehaviourKind = 'positive' | 'negative'

/** An "effect" a teacher can apply: a named reason worth some points. */
export type Behaviour = {
  id: string
  name: string
  kind: BehaviourKind
  /** Always a positive magnitude. The sign comes from `kind`. */
  points: number
  note?: string
  createdAt: string
}

/** One application of an effect to one student. The ledger is append-only
 *  apart from deletion, so a total is always the sum of its entries. */
export type Award = {
  id: string
  studentId: string
  classId: string
  behaviourId: string
  /** Snapshotted, so editing or deleting an effect never rewrites history. */
  behaviourName: string
  kind: BehaviourKind
  /** Signed: positive adds, negative deducts. */
  points: number
  createdAt: string
}

export type TerminalData = {
  classes: ClassRoom[]
  students: Student[]
  homework: Homework[]
  behaviours: Behaviour[]
  awards: Award[]
  seatingPlans: SeatingPlan[]
  settings: Settings
}

export function emptyData(): TerminalData {
  return { classes: [], students: [], homework: [], behaviours: [], awards: [], seatingPlans: [], settings: {} }
}
