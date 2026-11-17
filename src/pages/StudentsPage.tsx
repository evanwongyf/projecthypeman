import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../lib/data-context'
import { age, displayName, nameKey } from '../lib/format'
import { displayState } from '../lib/status'
import type { Student } from '../lib/types'
import { useNow } from '../lib/useNow'
import { Avatar } from '../components/Avatar'
import { ClassFormModal } from '../components/ClassFormModal'
import { Empty } from '../components/Empty'
import { IconClass, IconPlus } from '../components/Icons'
import { MetaItem, PageHeader } from '../components/PageHeader'
import { StudentFormModal } from '../components/StudentFormModal'

type Sort = 'name' | 'outstanding'

/**
 * Student management: every class as its own group, plus the pool of students
 * who aren't governed by any class.
 */
export function StudentsPage() {
  const { data, loading, version } = useData()
  const [addStudent, setAddStudent] = useState<{ classId: string | null } | null>(null)
  const [addClass, setAddClass] = useState(false)
  const [sort, setSort] = useState<Sort>('name')
  const [query, setQuery] = useState('')

  const now = useNow()

  /** Outstanding homework count per student, for the sort and the row meta. */
  const outstandingBy = useMemo(() => {
    const map = new Map<string, number>()
    for (const hw of data.homework) {
      for (const s of data.students) {
        if (s.classId !== hw.classId) continue
        if (displayState(hw, s.id, now) !== 'collected') map.set(s.id, (map.get(s.id) ?? 0) + 1)
      }
    }
    return map
  }, [data.homework, data.students, now])

  const sortStudents = (list: Student[]) =>
    [...list].sort((a, b) =>
      sort === 'name'
        ? nameKey(a.fullName).localeCompare(nameKey(b.fullName))
        : (outstandingBy.get(b.id) ?? 0) - (outstandingBy.get(a.id) ?? 0) ||
          nameKey(a.fullName).localeCompare(nameKey(b.fullName))
    )

  const matches = (s: Student) => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return s.fullName.toLowerCase().includes(q) || (s.preferredName ?? '').toLowerCase().includes(q)
  }

  const classes = useMemo(() => [...data.classes].sort((a, b) => a.name.localeCompare(b.name)), [data.classes])
  const unattached = sortStudents(data.students.filter((s) => s.classId === null).filter(matches))

  const groups = classes.map((cls) => ({
    cls,
    students: sortStudents(data.students.filter((s) => s.classId === cls.id).filter(matches)),
  }))

  const hasAnything = data.students.length > 0 || data.classes.length > 0

  return (
    <>
      <PageHeader
        eyebrow="Student management"
        title="Students"
        meta={
          !loading && (
            <>
              <MetaItem label="on roll">{data.students.length}</MetaItem>
              <MetaItem label="classes">{data.classes.length}</MetaItem>
              <MetaItem label="unassigned">{data.students.filter((s) => s.classId === null).length}</MetaItem>
            </>
          )
        }
        actions={
          <>
            <button type="button" className="btn" onClick={() => setAddClass(true)}>
              <IconClass />
              New class
            </button>
            <button type="button" className="btn btn-primary" onClick={() => setAddStudent({ classId: null })}>
              <IconPlus />
              Add student
            </button>
          </>
        }
      />

      <div className="p-5 sm:p-8">
        {loading ? (
          <p className="label">loading roster…</p>
        ) : !hasAnything ? (
          <Empty
            title="empty terminal"
            body="Create a class to group students by school and subject, or add a student on their own — they'll sit in the unassigned pool until you place them."
            action={
              <button type="button" className="btn btn-primary" onClick={() => setAddClass(true)}>
                <IconClass />
                Create the first class
              </button>
            }
          />
        ) : (
          <>
            {/* controls */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end">
              <div className="min-w-48 flex-1">
                <span className="label">search</span>
                <input
                  className="field mt-1.5"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Name or preferred name"
                />
              </div>
              <div>
                <span className="label">sort by</span>
                <select className="field mt-1.5" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
                  <option value="name">Name</option>
                  <option value="outstanding">Outstanding homework</option>
                </select>
              </div>
            </div>

            <div className="space-y-8">
              {groups.map(({ cls, students }) => (
                <section key={cls.id}>
                  <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <Link to={`/classes/${cls.id}`} className="text-base font-semibold tracking-tight hover:underline">
                        {cls.name}
                      </Link>
                      <span className="label">
                        {[cls.school, cls.subject].filter(Boolean).join(' · ') || 'no school or subject set'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="mono text-xs" style={{ color: 'var(--ink-faint)' }}>
                        {students.length} {students.length === 1 ? 'student' : 'students'}
                      </span>
                      <button
                        type="button"
                        className="btn btn-ghost !px-2"
                        onClick={() => setAddStudent({ classId: cls.id })}
                        aria-label={`Add a student to ${cls.name}`}
                      >
                        <IconPlus />
                      </button>
                    </div>
                  </div>
                  <StudentList students={students} outstandingBy={outstandingBy} version={version} />
                </section>
              ))}

              <section>
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="text-base font-semibold tracking-tight">Unassigned</h2>
                    <span className="label">not governed by a class</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="mono text-xs" style={{ color: 'var(--ink-faint)' }}>
                      {unattached.length} {unattached.length === 1 ? 'student' : 'students'}
                    </span>
                    <button
                      type="button"
                      className="btn btn-ghost !px-2"
                      onClick={() => setAddStudent({ classId: null })}
                      aria-label="Add an unassigned student"
                    >
                      <IconPlus />
                    </button>
                  </div>
                </div>
                <StudentList students={unattached} outstandingBy={outstandingBy} version={version} />
              </section>
            </div>
          </>
        )}
      </div>

      {addStudent && (
        <StudentFormModal defaultClassId={addStudent.classId} onClose={() => setAddStudent(null)} />
      )}
      {addClass && <ClassFormModal onClose={() => setAddClass(false)} />}
    </>
  )
}

function StudentList({
  students,
  outstandingBy,
  version,
}: {
  students: Student[]
  outstandingBy: Map<string, number>
  version: number
}) {
  if (students.length === 0) {
    return (
      <div className="panel px-4 py-6">
        <p className="label">no students here</p>
      </div>
    )
  }

  return (
    <ul className="panel divide-y" style={{ borderColor: 'var(--line)' }}>
      {students.map((s) => {
        const outstanding = outstandingBy.get(s.id) ?? 0
        const years = age(s.birthday)
        return (
          <li key={s.id} className="row-hover divide-line" style={{ borderColor: 'var(--line-soft)' }}>
            <Link to={`/students/${s.id}`} className="flex items-center gap-4 px-4 py-3">
              <Avatar studentId={s.id} fullName={s.fullName} hasPhoto={s.hasPhoto} version={version} />
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{displayName(s)}</p>
                {(s.preferredName || years !== null) && (
                  <p className="label mt-0.5 truncate normal-case tracking-normal" style={{ color: 'var(--ink-faint)' }}>
                    {s.preferredName ? s.fullName : `${years} years old`}
                  </p>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-3">
                {s.incidents.length > 0 && (
                  <span className="mono text-[10px]" style={{ color: 'var(--ink-faint)' }}>
                    {s.incidents.length} inc
                  </span>
                )}
                {outstanding > 0 ? (
                  <span className="chip chip-assigned">
                    <span className="chip-dot" />
                    {outstanding} out
                  </span>
                ) : (
                  <span className="mono text-[10px]" style={{ color: 'var(--ink-faint)' }}>
                    clear
                  </span>
                )}
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
