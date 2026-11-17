import type { ClassRoom, Entry, Homework, Student, SubmissionState, TerminalData } from './types'

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
    body: Partial<{ fullName: string; preferredName: string; birthday: string; classId: string | null }>
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

  login: (username: string, password: string) => send<{ ok: true }>('/api/auth/login', json('POST', { username, password })),
  logout: () => send<{ ok: true }>('/api/auth/logout', { method: 'POST' }),
}

/** Cache-busting photo URL — bumped whenever a student record changes. */
export function photoUrl(studentId: string, version: string | number = ''): string {
  return `/api/students/${studentId}/photo${version ? `?v=${version}` : ''}`
}
