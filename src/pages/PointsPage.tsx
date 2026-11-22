import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { api } from '../lib/api'
import { useData } from '../lib/data-context'
import { displayName, formatStamp, nameKey } from '../lib/format'
import { formatPoints, pointsTone, recentAwards, totalsByStudent } from '../lib/points'
import type { Behaviour, Student } from '../lib/types'
import { Avatar } from '../components/Avatar'
import { Empty } from '../components/Empty'
import { IconStar, IconUndoArrow } from '../components/Icons'
import { MetaItem, PageHeader } from '../components/PageHeader'
import { ActivateModal } from '../components/points/ActivateModal'
import { EffectPicker } from '../components/points/EffectPicker'
import { Select } from '../components/Select'

type Sort = 'name' | 'points'

/** The class points board: tap a student to award, or award the whole class. */
export function PointsPage() {
  const { classId = '' } = useParams()
  const { data, loading, version, reload } = useData()

  const [sort, setSort] = useState<Sort>('name')
  /** Students the picker is aimed at, empty means nothing in flight. */
  const [target, setTarget] = useState<Student[] | null>(null)
  const [picked, setPicked] = useState<Behaviour | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const [undoing, setUndoing] = useState<string | null>(null)

  const cls = data.classes.find((c) => c.id === classId)
  const totals = useMemo(() => totalsByStudent(data.awards), [data.awards])

  const roster = useMemo(
    () =>
      data.students
        .filter((s) => s.classId === classId)
        .sort((a, b) =>
          sort === 'name'
            ? nameKey(a.fullName).localeCompare(nameKey(b.fullName))
            : (totals.get(b.id) ?? 0) - (totals.get(a.id) ?? 0) ||
              nameKey(a.fullName).localeCompare(nameKey(b.fullName))
        ),
    [data.students, classId, sort, totals]
  )

  const log = useMemo(() => recentAwards(data.awards, (a) => a.classId === classId, 40), [data.awards, classId])

  if (loading) return <p className="label p-8">loading board…</p>
  if (!cls) return <Navigate to="/classes" replace />

  const classTotal = roster.reduce((sum, s) => sum + (totals.get(s.id) ?? 0), 0)

  function show(message: string) {
    setToast(message)
    window.setTimeout(() => setToast((t) => (t === message ? null : t)), 4000)
  }

  async function undo(id: string) {
    setUndoing(id)
    try {
      await api.undoAward(id)
      await reload()
    } finally {
      setUndoing(null)
    }
  }

  return (
    <>
      <PageHeader
        back={{ to: `/classes/${cls.id}`, label: cls.name }}
        eyebrow={[cls.school, cls.subject].filter(Boolean).join(' · ') || 'points'}
        title="Points"
        meta={
          <>
            <MetaItem label="class total">
              <span className="mono font-semibold" style={{ color: pointsTone(classTotal) }}>
                {formatPoints(classTotal)}
              </span>
            </MetaItem>
            <MetaItem label="roster">{roster.length}</MetaItem>
            <MetaItem label="entries">{data.awards.filter((a) => a.classId === classId).length}</MetaItem>
          </>
        }
        actions={
          roster.length > 0 && (
            <button type="button" className="btn btn-primary" onClick={() => setTarget(roster)}>
              <IconStar />
              Whole class
            </button>
          )
        }
      />

      {toast && (
        <div
          className="border-b px-5 py-3 font-mono text-xs sm:px-8"
          style={{ borderColor: 'var(--line)', background: 'var(--panel-2)', color: 'var(--ink-soft)' }}
          role="status"
        >
          Activated, {toast}
        </div>
      )}

      <div className="grid gap-8 p-5 sm:p-8 xl:grid-cols-[1fr_20rem]">
        <section className="min-w-0">
          {roster.length === 0 ? (
            <Empty
              title="no students yet"
              body="Add students to this class and their point cards appear here."
              action={
                <Link to={`/classes/${cls.id}`} className="btn btn-primary">
                  Back to the class
                </Link>
              }
            />
          ) : (
            <>
              {/* Kept left, beside the hint, so it reads as part of the board
                  rather than as a heading for the ledger column next to it. */}
              <div className="mb-4 flex flex-wrap items-end gap-x-5 gap-y-3">
                <div>
                  <span className="label block">sort by</span>
                  <Select
                    className="mt-1.5"
                    ariaLabel="Sort by"
                    value={sort}
                    onChange={(v) => setSort(v as Sort)}
                    options={[
                      { value: 'name', label: 'Name' },
                      { value: 'points', label: 'Points' },
                    ]}
                  />
                </div>
                <p className="label pb-2.5">tap a student to award</p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {roster.map((s) => {
                  const total = totals.get(s.id) ?? 0
                  return (
                    <button
                      key={s.id}
                      type="button"
                      className="panel row-hover flex flex-col items-center gap-2 p-4 text-center transition-colors"
                      onClick={() => setTarget([s])}
                    >
                      <Avatar
                        studentId={s.id}
                        fullName={s.fullName}
                        hasPhoto={s.hasPhoto}
                        version={version}
                        size="lg2"
                      />
                      <span className="w-full truncate text-sm font-medium">{displayName(s)}</span>
                      <span className="mono text-xl font-bold" style={{ color: pointsTone(total) }}>
                        {formatPoints(total)}
                      </span>
                    </button>
                  )
                })}
              </div>
            </>
          )}
        </section>

        {/* The ledger, so a mis-tap is one click from undone. */}
        <aside className="min-w-0">
          <div className="mb-3 flex items-baseline justify-between gap-3">
            <h2 className="label">recent</h2>
            <span className="mono text-xs" style={{ color: 'var(--ink-faint)' }}>
              {log.length}
            </span>
          </div>
          {log.length === 0 ? (
            <div className="panel px-4 py-6">
              <p className="label">nothing awarded yet</p>
            </div>
          ) : (
            <ul className="panel divide-y" style={{ borderColor: 'var(--line-soft)' }}>
              {log.map((a) => {
                const student = data.students.find((s) => s.id === a.studentId)
                return (
                  <li key={a.id} className="group flex items-center gap-3 px-4 py-2.5">
                    <span
                      className="mono w-[3.5ch] shrink-0 text-sm font-semibold"
                      style={{ color: pointsTone(a.points) }}
                    >
                      {formatPoints(a.points)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm">{a.behaviourName}</span>
                      <span className="mono block truncate text-[10px]" style={{ color: 'var(--ink-faint)' }}>
                        {student ? displayName(student) : 'removed'} · {formatStamp(a.createdAt)}
                      </span>
                    </span>
                    <button
                      type="button"
                      className="btn btn-ghost btn-danger shrink-0 !px-2 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
                      onClick={() => undo(a.id)}
                      disabled={undoing === a.id}
                      aria-label={`Undo ${a.behaviourName} for ${student ? displayName(student) : 'student'}`}
                    >
                      <IconUndoArrow className="h-3.5 w-3.5" />
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </aside>
      </div>

      {/* Step one: pick the effect. */}
      {target && !picked && (
        <EffectPicker
          title={target.length === 1 ? displayName(target[0]) : `${target.length} students`}
          subtitle={target.length === 1 ? 'Choose an effect' : `${cls.name} · choose an effect`}
          onPick={setPicked}
          onClose={() => setTarget(null)}
        />
      )}

      {/* Step two: set the points and confirm. */}
      {target && picked && (
        <ActivateModal
          behaviour={picked}
          students={target}
          onDone={show}
          onClose={() => {
            setPicked(null)
            setTarget(null)
          }}
        />
      )}
    </>
  )
}
