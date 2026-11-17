export type Entry = {
  id: string
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

export type ClassRoom = {
  id: string
  name: string
  school: string
  subject: string
  createdAt: string
}

export type Student = {
  id: string
  fullName: string
  preferredName?: string
  birthday?: string
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

export type SubmissionState = 'assigned' | 'collected'

export type Homework = {
  id: string
  classId: string
  title: string
  description: string
  dueDate: string
  createdAt: string
  submissions: Record<string, SubmissionState>
  collectedAt: Record<string, string>
}

export type Settings = {
  design?: Record<string, string>
  behavioursSeeded?: boolean
}

export type BehaviourKind = 'positive' | 'negative'

/** An "effect": a named reason worth some points. */
export type Behaviour = {
  id: string
  name: string
  kind: BehaviourKind
  /** Always a magnitude. The sign comes from `kind`. */
  points: number
  note?: string
  createdAt: string
}

/** One application of an effect to one student. */
export type Award = {
  id: string
  studentId: string
  classId: string
  behaviourId: string
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
  settings: Settings
}

/** What the teacher actually sees: 'overdue' is derived, never stored. */
export type DisplayState = 'assigned' | 'overdue' | 'collected'
