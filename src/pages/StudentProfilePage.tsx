import { useMemo, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { api } from '../lib/api'
import { useData } from '../lib/data-context'
import { age, displayName, dueRelative, formatDate, formatStamp } from '../lib/format'
import { STATE_CHIP, STATE_LABEL, STATE_WEIGHT, displayState } from '../lib/status'
import { formatPoints, pointsTone, recentAwards, tallyFor } from '../lib/points'
import { useNow } from '../lib/useNow'
import { ConfirmModal } from '../components/ConfirmModal'
import { EntryLog } from '../components/EntryLog'
import { IconEdit, IconTrash } from '../components/Icons'
import { PageHeader } from '../components/PageHeader'
import { PhotoPicker } from '../components/PhotoPicker'
import { StudentFormModal } from '../components/StudentFormModal'

type Sort = 'due' | 'completion'

export function StudentProfilePage() {
  const { studentId = '' } = useParams()
  const { data, loading, version, reload } = useData()
  const navigate = useNavigate()

  const [editing, setEditing] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [sort, setSort] = useState<Sort>('completion')

  const student = data.students.find((s) => s.id === studentId)
  const now = useNow()

  const points = useMemo(() => tallyFor(data.awards, studentId), [data.awards, studentId])
  const ledger = useMemo(
    () => recentAwards(data.awards, (a) => a.studentId === studentId, 25),
    [data.awards, studentId]
  )

  const submissions = useMemo(() => {
    if (!student || student.classId === null) return []
    return data.homework
      .filter((hw) => hw.classId === student.classId)
      .map((hw) => ({ hw, state: displayState(hw, student.id, now) }))
      .sort((a, b) =>
        sort === 'due'
          ? b.hw.dueDate.localeCompare(a.hw.dueDate)
          : STATE_WEIGHT[a.state] - STATE_WEIGHT[b.state] || b.hw.dueDate.localeCompare(a.hw.dueDate)
      )
  }, [student, data.homework, sort, now])

  if (loading) return <p className="label p-8">loading profile…</p>
  if (!student) return <Navigate to="/students" replace />

  const cls = student.classId ? data.classes.find((c) => c.id === student.classId) : undefined
  const years = age(student.birthday, now)
  const outstanding = submissions.filter((s) => s.state !== 'collected').length

  return (
    <>
      <PageHeader
        back={cls ? { to: `/classes/${cls.id}`, label: cls.name } : { to: '/students', label: 'All students' }}
        eyebrow={cls ? [cls.name, cls.school, cls.subject].filter(Boolean).join(' · ') : 'unassigned — no class'}
        title={displayName(student)}
        meta={
          <>
            {student.preferredName && (
              <span className="inline-flex items-baseline gap-2">
                <span className="label">full name</span>
                <span style={{ color: 'var(--ink-soft)' }}>{student.fullName}</span>
              </span>
            )}
            <span className="inline-flex items-baseline gap-2">
              <span className="label">birthday</span>
              <span className="mono" style={{ color: 'var(--ink-soft)' }}>
                {student.birthday ? `${formatDate(student.birthday)}${years !== null ? ` · ${years} yrs` : ''}` : '—'}
              </span>
            </span>
          </>
        }
        actions={
          <>
            <button type="button" className="btn btn-ghost" onClick={() => setDeleting(true)}>
              <IconTrash />
              Delete
            </button>
            <button type="button" className="btn" onClick={() => setEditing(true)}>
              <IconEdit />
              Edit details
            </button>
          </>
        }
      />

      <div className="grid gap-6 p-5 sm:p-8 xl:grid-cols-[20rem_1fr]">
        {/* ---- identity column ---- */}
        <div className="space-y-6">
          <section className="panel p-5">
            <p className="label mb-4">photo</p>
            <PhotoPicker
              studentId={student.id}
              fullName={student.fullName}
              hasPhoto={student.hasPhoto}
              version={version}
            />
          </section>

          <section className="panel divide-y" style={{ borderColor: 'var(--line-soft)' }}>
            <Row label="class">
              {cls ? (
                <Link to={`/classes/${cls.id}`} className="hover:underline">
                  {cls.name}
                </Link>
              ) : (
                <span style={{ color: 'var(--ink-faint)' }}>unassigned</span>
              )}
            </Row>
            <Row label="school">{cls?.school || '—'}</Row>
            <Row label="subject">{cls?.subject || '—'}</Row>
            <Row label="points">
              <span className="mono font-semibold" style={{ color: pointsTone(points.total) }}>
                {formatPoints(points.total)}
              </span>
            </Row>
            <Row label="outstanding">
              <span className="mono" style={{ color: outstanding ? 'var(--assigned)' : 'var(--ink-faint)' }}>
                {outstanding}
              </span>
            </Row>
            <Row label="notes">
              <span className="mono">{student.notes.length}</span>
            </Row>
            <Row label="incidents">
              <span className="mono" style={{ color: student.incidents.length ? 'var(--overdue)' : 'var(--ink-faint)' }}>
                {student.incidents.length}
              </span>
            </Row>
            <Row label="added">
              <span className="mono text-xs">{formatStamp(student.createdAt)}</span>
            </Row>
          </section>
        </div>

        {/* ---- record column ---- */}
        <div className="min-w-0 space-y-6">
          {/* homework submission status */}
          <section className="panel">
            <header className="flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3 hairline">
              <div className="flex items-baseline gap-2.5">
                <h2 className="label">homework submissions</h2>
                <span className="mono text-xs" style={{ color: 'var(--ink-faint)' }}>
                  {submissions.length}
                </span>
              </div>
              {submissions.length > 1 && (
                <select className="field !w-auto" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
                  <option value="completion">Sort: completion</option>
                  <option value="due">Sort: due date</option>
                </select>
              )}
            </header>

            {student.classId === null ? (
              <p className="px-5 py-6 text-sm" style={{ color: 'var(--ink-faint)' }}>
                Homework belongs to a class. Assign {displayName(student)} to one to track submissions.
              </p>
            ) : submissions.length === 0 ? (
              <p className="px-5 py-6 text-sm" style={{ color: 'var(--ink-faint)' }}>
                No homework set for {cls?.name} yet.
              </p>
            ) : (
              <ul className="divide-y" style={{ borderColor: 'var(--line-soft)' }}>
                {submissions.map(({ hw, state }) => (
                  <li key={hw.id} className="row-hover">
                    <Link to={`/homework/${hw.id}`} className="flex flex-wrap items-center gap-x-4 gap-y-2 px-5 py-3.5">
                      <div className="min-w-40 flex-1">
                        <p className="font-medium">{hw.title}</p>
                        <p className="mono mt-0.5 text-[10px]" style={{ color: 'var(--ink-faint)' }}>
                          due {formatDate(hw.dueDate)} · {dueRelative(hw.dueDate, now)}
                          {state === 'collected' && hw.collectedAt[student.id]
                            ? ` · in ${formatStamp(hw.collectedAt[student.id])}`
                            : ''}
                        </p>
                      </div>
                      <span className={`${STATE_CHIP[state]} shrink-0`}>
                        <span className="chip-dot" />
                        {STATE_LABEL[state]}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="panel">
            <header className="flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3 hairline">
              <div className="flex items-baseline gap-2.5">
                <h2 className="label">points</h2>
                <span className="mono text-sm font-semibold" style={{ color: pointsTone(points.total) }}>
                  {formatPoints(points.total)}
                </span>
              </div>
              {cls && (
                <Link to={`/classes/${cls.id}/points`} className="btn btn-ghost">
                  Open board
                </Link>
              )}
            </header>

            {points.entries === 0 ? (
              <p className="px-5 py-6 text-sm" style={{ color: 'var(--ink-faint)' }}>
                {cls ? 'No points awarded yet.' : 'Points belong to a class board.'}
              </p>
            ) : (
              <>
                <div className="grid grid-cols-3 divide-x border-b hairline" style={{ borderColor: 'var(--line-soft)' }}>
                  {(
                    [
                      ['earned', points.positive, 'var(--collected)'],
                      ['deducted', points.negative, 'var(--overdue)'],
                      ['entries', points.entries, 'var(--ink-soft)'],
                    ] as const
                  ).map(([label, value, tone]) => (
                    <div key={label} className="px-5 py-3">
                      <p className="label">{label}</p>
                      <p className="mono mt-1 text-lg font-semibold" style={{ color: tone }}>
                        {label === 'entries' ? value : formatPoints(value)}
                      </p>
                    </div>
                  ))}
                </div>
                <ul className="divide-y" style={{ borderColor: 'var(--line-soft)' }}>
                  {ledger.map((a) => (
                    <li key={a.id} className="flex items-center gap-3 px-5 py-2.5">
                      <span
                        className="mono w-[3.5ch] shrink-0 text-sm font-semibold"
                        style={{ color: pointsTone(a.points) }}
                      >
                        {formatPoints(a.points)}
                      </span>
                      <span className="min-w-0 flex-1 truncate text-sm">{a.behaviourName}</span>
                      <span className="mono shrink-0 text-[10px]" style={{ color: 'var(--ink-faint)' }}>
                        {formatStamp(a.createdAt)}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>

          <EntryLog
            studentId={student.id}
            kind="notes"
            entries={student.notes}
            title="notes"
            placeholder="Anything worth remembering — a strength, a struggle, a conversation with a parent."
          />

          <EntryLog
            studentId={student.id}
            kind="incidents"
            entries={student.incidents}
            title="incidents"
            placeholder="What happened, when, who was involved, what was done about it."
            tone="var(--overdue)"
          />
        </div>
      </div>

      {editing && <StudentFormModal student={student} onClose={() => setEditing(false)} />}
      {deleting && (
        <ConfirmModal
          title={`Delete ${student.fullName}?`}
          body={`Their photo, ${student.notes.length} ${student.notes.length === 1 ? 'note' : 'notes'} and ${student.incidents.length} ${student.incidents.length === 1 ? 'incident' : 'incidents'} are removed, along with their marks on every homework. This cannot be undone.`}
          confirmLabel="Delete student"
          onConfirm={async () => {
            await api.deleteStudent(student.id)
            await reload()
            navigate(cls ? `/classes/${cls.id}` : '/students', { replace: true })
          }}
          onClose={() => setDeleting(false)}
        />
      )}
    </>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 px-5 py-3">
      <span className="label">{label}</span>
      <span className="min-w-0 truncate text-right text-sm">{children}</span>
    </div>
  )
}
