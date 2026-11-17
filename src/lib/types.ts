export type Entry = {
  id: string
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
  fullName: string
  preferredName?: string
  birthday?: string
  classId: string | null
  hasPhoto?: boolean
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

export type TerminalData = {
  classes: ClassRoom[]
  students: Student[]
  homework: Homework[]
}

/** What the teacher actually sees: 'overdue' is derived, never stored. */
export type DisplayState = 'assigned' | 'overdue' | 'collected'
