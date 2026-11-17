/** Shapes shared by the API and the browser. Mirrored in src/lib/types.ts. */

export type Entry = {
  id: string
  /** Each note/incident is its own entry, stamped with the date + time it was logged. */
  text: string
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
  /** Full name is the only mandatory field. */
  fullName: string
  preferredName?: string
  birthday?: string
  /** null = kept in the student pool, not attached to any class. */
  classId: string | null
  hasPhoto?: boolean
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

export type TerminalData = {
  classes: ClassRoom[]
  students: Student[]
  homework: Homework[]
}

export function emptyData(): TerminalData {
  return { classes: [], students: [], homework: [] }
}
