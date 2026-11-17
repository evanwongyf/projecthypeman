import { useMemo, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { api } from '../lib/api'
import { useData } from '../lib/data-context'
import { age, displayName, dueRelative, formatDate, nameKey } from '../lib/format'
import { isOverdue, tally } from '../lib/status'
import { formatPoints, pointsTone, totalsByStudent } from '../lib/points'
import { useNow } from '../lib/useNow'
import { Avatar } from '../components/Avatar'
import { ClassFormModal } from '../components/ClassFormModal'
import { ConfirmModal } from '../components/ConfirmModal'
import { Empty } from '../components/Empty'
import { HomeworkFormModal } from '../components/HomeworkFormModal'
import { IconEdit, IconHomework, IconPlus, IconStar, IconTrash } from '../components/Icons'
import { MetaItem, PageHeader } from '../components/PageHeader'
import { StudentFormModal } from '../components/StudentFormModal'

export function ClassDetailPage() {
  const { classId = '' } = useParams()
  const { data, loading, version, reload } = useData()
  const navigate = useNavigate()

  const [editing, setEditing] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [addingStudent, setAddingStudent] = useState(false)
  const [addingHomework, setAddingHomework] = useState(false)

  const cls = data.classes.find((c) => c.id === classId)
  const now = useNow()

  const roster = useMemo(
    () =>
      data.students
        .filter((s) => s.classId === classId)
        .sort((a, b) => nameKey(a.fullName).localeCompare(nameKey(b.fullName))),
    [data.students, classId]
  )

  const totals = useMemo(() => totalsByStudent(data.awards), [data.awards])

  const homework = useMemo(
    () =>
      data.homework
        .filter((h) => h.classId === classId)
        .sort((a, b) => b.dueDate.localeCompare(a.dueDate) || b.createdAt.localeCompare(a.createdAt)),
    [data.homework, classId]
  )

  if (loading) return <p className="label p-8">loading class…</p>
  if (!cls) return <Navigate to="/classes" replace />

  const ids = roster.map((s) => s.id)

  return (
    <>
      <PageHeader
        back={{ to: '/classes', label: 'All classes' }}
        eyebrow={cls.school || 'no school set'}
        title={cls.name}
        meta={
          <>
            <MetaItem label="subject">{cls.subject || '—'}</MetaItem>
            <MetaItem label="roster">{roster.length}</MetaItem>
            <MetaItem label="homework">{homework.length}</MetaItem>
            <MetaItem label="points">
              <span
                className="mono font-semibold"
                style={{ color: pointsTone(roster.reduce((n, s) => n + (totals.get(s.id) ?? 0), 0)) }}
              >
                {formatPoints(roster.reduce((n, s) => n + (totals.get(s.id) ?? 0), 0))}
              </span>
            </MetaItem>
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
              Edit
            </button>
            <Link to={`/classes/${cls.id}/points`} className="btn">
              <IconStar />
              Points
            </Link>
            <button type="button" className="btn btn-primary" onClick={() => setAddingHomework(true)}>
              <IconHomework />
              Set homework
            </button>
          </>
        }
      />

      <div className="grid gap-8 p-5 sm:p-8 xl:grid-cols-[1fr_22rem]">
        {/* ---- homework ---- */}
        <section className="min-w-0">
          <div className="mb-3 flex items-baseline justify-between gap-4">
            <h2 className="label">homework</h2>
            <span className="mono text-xs" style={{ color: 'var(--ink-faint)' }}>
              {homework.length} set
            </span>
          </div>

          {homework.length === 0 ? (
            <Empty
              title="nothing set"
              body="Set homework with a title, a description and a due date. Everyone on the roster starts out assigned."
              action={
                <button type="button" className="btn btn-primary" onClick={() => setAddingHomework(true)}>
                  <IconPlus />
                  Set homework
                </button>
              }
            />
          ) : (
            <ul className="space-y-3">
              {homework.map((hw) => {
                const t = tally(hw, ids, now)
                const late = isOverdue(hw, now)
                const allIn = t.total > 0 && t.outstanding === 0
                const tone = allIn ? 'var(--collected)' : late ? 'var(--overdue)' : 'var(--assigned)'
                return (
                  <li key={hw.id}>
                    <Link to={`/homework/${hw.id}`} className="panel row-hover block p-5 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                        <div className="min-w-0">
                          <h3 className="font-semibold tracking-tight">{hw.title}</h3>
                          {hw.description && (
                            <p className="mt-1 line-clamp-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
                              {hw.description}
                            </p>
                          )}
                        </div>
                        <span
                          className={
                            allIn ? 'chip chip-collected' : late ? 'chip chip-overdue' : 'chip chip-assigned'
                          }
                        >
                          <span className="chip-dot" />
                          {allIn ? 'All in' : late ? `${t.outstanding} overdue` : `${t.outstanding} out`}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t pt-3 hairline">
                        <MetaItem label="due">
                          <span className="mono">{formatDate(hw.dueDate)}</span>
                        </MetaItem>
                        <span className="mono text-xs" style={{ color: tone }}>
                          {dueRelative(hw.dueDate, now)}
                        </span>
                        <span className="mono ml-auto text-xs" style={{ color: 'var(--ink-faint)' }}>
                          {t.collected}/{t.total} collected
                        </span>
                      </div>

                      {/* a hairline progress bar, the only chart in the app */}
                      <div className="mt-3 h-[3px] w-full" style={{ background: 'var(--panel-3)' }}>
                        <div
                          className="h-full"
                          style={{
                            width: t.total ? `${(t.collected / t.total) * 100}%` : '0%',
                            background: 'var(--collected)',
                          }}
                        />
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </section>

        {/* ---- roster ---- */}
        <section className="min-w-0">
          <div className="mb-3 flex items-baseline justify-between gap-4">
            <h2 className="label">roster</h2>
            <button type="button" className="btn btn-ghost !px-2" onClick={() => setAddingStudent(true)} aria-label="Add a student">
              <IconPlus />
            </button>
          </div>

          {roster.length === 0 ? (
            <div className="panel px-4 py-6">
              <p className="label">no students yet</p>
              <button type="button" className="btn mt-4 w-full" onClick={() => setAddingStudent(true)}>
                <IconPlus />
                Add a student
              </button>
            </div>
          ) : (
            <ul className="panel divide-y" style={{ borderColor: 'var(--line-soft)' }}>
              {roster.map((s) => {
                const years = age(s.birthday)
                return (
                  <li key={s.id} className="row-hover">
                    <Link to={`/students/${s.id}`} className="flex items-center gap-3 px-4 py-3">
                      <Avatar studentId={s.id} fullName={s.fullName} hasPhoto={s.hasPhoto} version={version} size="sm" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{displayName(s)}</p>
                        {(s.preferredName || years !== null) && (
                          <p className="mono truncate text-[10px]" style={{ color: 'var(--ink-faint)' }}>
                            {s.preferredName ? s.fullName : `${years} yrs`}
                          </p>
                        )}
                      </div>
                      <span
                        className="mono shrink-0 text-sm font-semibold"
                        style={{ color: pointsTone(totals.get(s.id) ?? 0) }}
                      >
                        {formatPoints(totals.get(s.id) ?? 0)}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </section>
      </div>

      {editing && <ClassFormModal cls={cls} onClose={() => setEditing(false)} />}
      {addingStudent && <StudentFormModal defaultClassId={cls.id} onClose={() => setAddingStudent(false)} />}
      {addingHomework && <HomeworkFormModal classId={cls.id} onClose={() => setAddingHomework(false)} />}
      {deleting && (
        <ConfirmModal
          title={`Delete ${cls.name}?`}
          body={`Its ${homework.length} ${homework.length === 1 ? 'homework' : 'homeworks'} will be deleted. The ${roster.length} ${roster.length === 1 ? 'student' : 'students'} on the roster are kept and move to the unassigned pool.`}
          confirmLabel="Delete class"
          onConfirm={async () => {
            await api.deleteClass(cls.id)
            await reload()
            navigate('/classes', { replace: true })
          }}
          onClose={() => setDeleting(false)}
        />
      )}
    </>
  )
}
