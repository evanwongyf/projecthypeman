/**
 * Who the document is about.
 *
 * The class comes first, because most documents are about someone in one. A
 * template that wants a single student gets radio behaviour, one that takes
 * several gets checkboxes, and one that is about the class gets neither: the
 * picker shows the roster so it is clear what will be printed.
 */
import { useMemo, useState } from 'react'
import { useData } from '../../lib/data-context'
import { displayName, nameKey } from '../../lib/format'
import { NativeSelect } from '../NativeSelect'
import { Avatar } from '../Avatar'
import { IconCheck } from '../Icons'
import type { DocAudience } from '../../lib/documents/types'

export function DocSubject({
  audience,
  classId,
  studentIds,
  onClassChange,
  onStudentsChange,
}: {
  audience: DocAudience
  classId: string | null
  studentIds: string[]
  onClassChange: (classId: string | null) => void
  onStudentsChange: (ids: string[]) => void
}) {
  const { data, version } = useData()
  const [query, setQuery] = useState('')

  const classes = useMemo(() => [...data.classes].sort((a, b) => a.name.localeCompare(b.name)), [data.classes])

  // Students of the chosen class, or everyone when no class is chosen, so a
  // document about an unassigned student is still reachable.
  const pool = useMemo(() => {
    const list = classId ? data.students.filter((s) => s.classId === classId) : data.students
    return [...list].sort((a, b) => nameKey(a.fullName).localeCompare(nameKey(b.fullName)))
  }, [data.students, classId])

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return pool
    return pool.filter((s) => `${s.fullName} ${s.preferredName ?? ''}`.toLowerCase().includes(q))
  }, [pool, query])

  const selected = new Set(studentIds)

  const toggle = (id: string) => {
    if (audience === 'one') {
      onStudentsChange(selected.has(id) ? [] : [id])
      return
    }
    onStudentsChange(selected.has(id) ? studentIds.filter((x) => x !== id) : [...studentIds, id])
  }

  return (
    <div className="grid gap-4">
      <label className="block">
        <span className="label">Class</span>
        <div className="mt-1.5">
          <NativeSelect
            className="w-full"
            value={classId ?? ''}
            onChange={(e) => onClassChange(e.target.value || null)}
            aria-label="Class"
          >
            <option value="">No class</option>
            {classes.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
                {c.subject ? ` (${c.subject})` : ''}
              </option>
            ))}
          </NativeSelect>
        </div>
      </label>

      {audience === 'none' ? (
        <div>
          <p className="label">Roster</p>
          <p className="mt-1.5 text-sm" style={{ color: 'var(--ink-soft)' }}>
            {classId
              ? `${pool.length} ${pool.length === 1 ? 'student' : 'students'}. This document is written for the class, so the roster fills it.`
              : 'Choose a class and its roster fills this document.'}
          </p>
        </div>
      ) : (
        <div className="min-w-0">
          <div className="flex items-baseline justify-between gap-3">
            <span className="label">{audience === 'one' ? 'Student' : 'Students'}</span>
            <span className="mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>
              {audience === 'one' ? (studentIds.length ? '1 chosen' : 'none chosen') : `${studentIds.length} chosen`}
            </span>
          </div>
          <input
            className="field mt-1.5 w-full"
            value={query}
            placeholder="Search the roster"
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search students"
          />
          {audience === 'many' && studentIds.length > 0 && (
            <button type="button" className="btn btn-ghost mt-2" onClick={() => onStudentsChange([])}>
              Clear all
            </button>
          )}
          <ul className="mt-2 max-h-72 overflow-y-auto">
            {shown.map((student) => {
              const on = selected.has(student.id)
              return (
                <li key={student.id}>
                  <button
                    type="button"
                    className="pick w-full"
                    aria-pressed={on}
                    onClick={() => toggle(student.id)}
                  >
                    <Avatar
                      studentId={student.id}
                      fullName={student.fullName}
                      hasPhoto={student.hasPhoto}
                      version={version}
                      size="sm"
                    />
                    <span className="min-w-0 flex-1 text-left">
                      <span className="block truncate text-sm">{displayName(student)}</span>
                      {student.preferredName?.trim() && (
                        <span className="block truncate text-[11px]" style={{ color: 'var(--ink-faint)' }}>
                          {student.fullName}
                        </span>
                      )}
                    </span>
                    {on && <IconCheck className="h-3.5 w-3.5 shrink-0" />}
                  </button>
                </li>
              )
            })}
            {shown.length === 0 && (
              <li className="py-3 text-sm" style={{ color: 'var(--ink-faint)' }}>
                {pool.length === 0 ? 'No students here yet.' : 'Nobody matches that.'}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
