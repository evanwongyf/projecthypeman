import type {
  Award,
  Behaviour,
  BehaviourKind,
  ClassRoom,
  Entry,
  Guardian,
  Homework,
  Relationship,
  RelationshipKind,
  SeatingPlan,
  Student,
  SubmissionState,
  TerminalData,
} from './types'

async function send<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init)
  if (!res.ok) {
    let message = `Request failed (${res.status})`
    try {
      const body = (await res.json()) as { error?: string }
      if (body.error) message = body.error
    } catch {
      /* keep the generic message */
    }
    throw new Error(message)
  }
  if (res.status === 204) return undefined as T
  return (await res.json()) as T
}

function json(method: string, body: unknown): RequestInit {
  return { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
}

export const api = {
  data: () => send<TerminalData>('/api/data'),

  createClass: (body: { name: string; school: string; subject: string }) =>
    send<ClassRoom>('/api/classes', json('POST', body)),
  updateClass: (id: string, body: Partial<Pick<ClassRoom, 'name' | 'school' | 'subject'>>) =>
    send<ClassRoom>(`/api/classes/${id}`, json('PATCH', body)),
  deleteClass: (id: string) => send<{ ok: true }>(`/api/classes/${id}`, { method: 'DELETE' }),

  createStudent: (body: { fullName: string; preferredName?: string; birthday?: string; classId: string | null }) =>
    send<Student>('/api/students', json('POST', body)),
  updateStudent: (
    id: string,
    body: Partial<{
      fullName: string
      preferredName: string
      birthday: string
      classId: string | null
      ccas: string[]
      interests: string[]
      characteristics: string[]
    }>
  ) => send<Student>(`/api/students/${id}`, json('PATCH', body)),
  deleteStudent: (id: string) => send<{ ok: true }>(`/api/students/${id}`, { method: 'DELETE' }),

  addEntry: (studentId: string, kind: 'notes' | 'incidents', text: string) =>
    send<Entry>(`/api/students/${studentId}/${kind}`, json('POST', { text })),
  updateEntry: (studentId: string, kind: 'notes' | 'incidents', entryId: string, text: string) =>
    send<{ ok: true }>(`/api/students/${studentId}/${kind}/${entryId}`, json('PATCH', { text })),
  deleteEntry: (studentId: string, kind: 'notes' | 'incidents', entryId: string) =>
    send<{ ok: true }>(`/api/students/${studentId}/${kind}/${entryId}`, { method: 'DELETE' }),

  uploadPhoto: (studentId: string, file: File) =>
    send<{ ok: true }>(`/api/students/${studentId}/photo`, {
      method: 'PUT',
      headers: { 'Content-Type': file.type },
      body: file,
    }),
  deletePhoto: (studentId: string) => send<{ ok: true }>(`/api/students/${studentId}/photo`, { method: 'DELETE' }),

  createHomework: (body: { classId: string; title: string; description: string; dueDate: string }) =>
    send<Homework>('/api/homework', json('POST', body)),
  updateHomework: (id: string, body: Partial<Pick<Homework, 'title' | 'description' | 'dueDate'>>) =>
    send<Homework>(`/api/homework/${id}`, json('PATCH', body)),
  deleteHomework: (id: string) => send<{ ok: true }>(`/api/homework/${id}`, { method: 'DELETE' }),
  setSubmission: (homeworkId: string, studentId: string, state: SubmissionState) =>
    send<{ ok: true }>(`/api/homework/${homeworkId}/status`, json('PATCH', { studentId, state })),

  addGuardian: (body: {
    studentId: string
    name: string
    relation?: string
    phone?: string
    email?: string
    note?: string
  }) => send<Guardian>('/api/guardians', json('POST', body)),
  updateGuardian: (id: string, body: Partial<Omit<Guardian, 'id' | 'createdAt'>>) =>
    send<Guardian>(`/api/guardians/${id}`, json('PATCH', body)),
  deleteGuardian: (id: string) => send<{ ok: true }>(`/api/guardians/${id}`, { method: 'DELETE' }),

  addRelationship: (body: {
    studentId: string
    kind: RelationshipKind
    otherStudentId?: string
    otherName?: string
    /** Required — a relationship starts with one note. */
    note: string
  }) => send<Relationship>('/api/relationships', json('POST', body)),
  updateRelationship: (id: string, body: { kind: RelationshipKind }) =>
    send<Relationship>(`/api/relationships/${id}`, json('PATCH', body)),
  deleteRelationship: (id: string) => send<{ ok: true }>(`/api/relationships/${id}`, { method: 'DELETE' }),
  addRelationshipNote: (id: string, text: string) =>
    send<Entry>(`/api/relationships/${id}/notes`, json('POST', { text })),
  deleteRelationshipNote: (id: string, noteId: string) =>
    send<{ ok: true }>(`/api/relationships/${id}/notes/${noteId}`, { method: 'DELETE' }),

  createSeatingPlan: (body: { classId: string; name: string; rows?: number; cols?: number }) =>
    send<SeatingPlan>('/api/seating-plans', json('POST', body)),
  updateSeatingPlan: (id: string, body: Partial<Pick<SeatingPlan, 'name' | 'rows' | 'cols'>>) =>
    send<SeatingPlan>(`/api/seating-plans/${id}`, json('PATCH', body)),
  deleteSeatingPlan: (id: string) => send<{ ok: true }>(`/api/seating-plans/${id}`, { method: 'DELETE' }),
  /** Seat, move, swap or (with null) clear. The server resolves the rest. */
  setSeat: (id: string, seat: string, studentId: string | null) =>
    send<{ ok: true }>(`/api/seating-plans/${id}/seat`, json('PATCH', { seat, studentId })),

  createBehaviour: (body: { name: string; kind: BehaviourKind; points: number; note?: string }) =>
    send<Behaviour>('/api/behaviours', json('POST', body)),
  updateBehaviour: (id: string, body: Partial<Pick<Behaviour, 'name' | 'points' | 'note'>>) =>
    send<Behaviour>(`/api/behaviours/${id}`, json('PATCH', body)),
  deleteBehaviour: (id: string) => send<{ ok: true }>(`/api/behaviours/${id}`, { method: 'DELETE' }),

  /** Activate an effect against one or more students in the same class. */
  activate: (body: { studentIds: string[]; behaviourId: string; points: number }) =>
    send<{ awards: Award[] }>('/api/awards', json('POST', body)),
  undoAward: (id: string) => send<{ ok: true }>(`/api/awards/${id}`, { method: 'DELETE' }),

  /** Whether this terminal still has no account, so sign-up would work. */
  signupOpen: () => send<{ open: boolean }>('/api/auth/signup'),
  signup: (body: { name: string; email: string; password: string }) =>
    send<{ ok: true }>('/api/auth/signup', json('POST', body)),

  login: (email: string, password: string) => send<{ ok: true }>('/api/auth/login', json('POST', { email, password })),
  logout: () => send<{ ok: true }>('/api/auth/logout', { method: 'POST' }),
}

/** Cache-busting photo URL — bumped whenever a student record changes. */
export function photoUrl(studentId: string, version: string | number = ''): string {
  return `/api/students/${studentId}/photo${version ? `?v=${version}` : ''}`
}
