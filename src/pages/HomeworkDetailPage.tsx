import { useMemo, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { api } from '../lib/api'
import { useData } from '../lib/data-context'
import { displayName, dueRelative, formatDate, formatStamp, nameKey } from '../lib/format'
import { STATE_CHIP, STATE_LABEL, STATE_WEIGHT, displayState, isOverdue, tally } from '../lib/status'
import type { DisplayState } from '../lib/types'
import { useNow } from '../lib/useNow'
import { Avatar } from '../components/Avatar'
import { ConfirmModal } from '../components/ConfirmModal'
import { HomeworkFormModal } from '../components/HomeworkFormModal'
import { IconCheck, IconEdit, IconTrash, IconUndo } from '../components/Icons'
import { MetaItem, PageHeader } from '../components/PageHeader'

type Sort = 'name' | 'completion'

export function HomeworkDetailPage() {
  const { homeworkId = '' } = useParams()
  const { data, loading, version, reload } = useData()
  const navigate = useNavigate()

  const [sort, setSort] = useState<Sort>('completion')
  const [editing, setEditing] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [pending, setPending] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const hw = data.homework.find((h) => h.id === homeworkId)
  const now = useNow()

  const rows = useMemo(() => {
    if (!hw) return []
    return data.students
      .filter((s) => s.classId === hw.classId)
      .map((s) => ({ student: s, state: displayState(hw, s.id, now) }))
      .sort((a, b) =>
        sort === 'name'
          ? nameKey(a.student.fullName).localeCompare(nameKey(b.student.fullName))
          : // Completion: overdue, then assigned, then collected — outstanding work first.
            STATE_WEIGHT[a.state] - STATE_WEIGHT[b.state] ||
            nameKey(a.student.fullName).localeCompare(nameKey(b.student.fullName))
      )
  }, [hw, data.students, sort, now])

  if (loading) return <p className="label p-8">loading homework…</p>
  if (!hw) return <Navigate to="/homework" replace />

  const cls = data.classes.find((c) => c.id === hw.classId)
  const t = tally(hw, rows.map((r) => r.student.id), now)
  const late = isOverdue(hw, now)

  async function toggle(studentId: string, state: DisplayState) {
    setPending(studentId)
    setError(null)
    try {
      await api.setSubmission(hw!.id, studentId, state === 'collected' ? 'assigned' : 'collected')
      await reload()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not update that.')
    } finally {
      setPending(null)
    }
  }

  const counts: Record<DisplayState, number> = {
    collected: t.collected,
    overdue: t.overdue,
    assigned: t.total - t.collected - t.overdue,
  }

  return (
    <>
      <PageHeader
        back={{ to: cls ? `/classes/${cls.id}` : '/homework', label: cls ? cls.name : 'All homework' }}
        eyebrow={[cls?.name, cls?.subject].filter(Boolean).join(' · ') || 'homework'}
        title={hw.title}
        meta={
          <>
            <MetaItem label="due">
              <span className="mono">{formatDate(hw.dueDate)}</span>
            </MetaItem>
            <span
              className="mono text-xs"
              style={{ color: late && t.outstanding > 0 ? 'var(--overdue)' : 'var(--ink-soft)' }}
            >
              {dueRelative(hw.dueDate, now)}
            </span>
            <MetaItem label="collected">
              <span className="mono">
                {t.collected}/{t.total}
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
          </>
        }
      />

      <div className="p-5 sm:p-8">
        {hw.description && (
          <div className="panel mb-6 p-5">
            <p className="label mb-2">description</p>
            <p className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--ink-soft)' }}>
              {hw.description}
            </p>
          </div>
        )}

        {/* state counters */}
        <div className="mb-6 grid grid-cols-3 gap-3">
          {(['assigned', 'overdue', 'collected'] as DisplayState[]).map((state) => (
            <div key={state} className="panel p-4">
              <p className="label">{STATE_LABEL[state]}</p>
              <p
                className="mono mt-1.5 text-2xl font-semibold"
                style={{
                  color:
                    counts[state] === 0
                      ? 'var(--ink-faint)'
                      : state === 'collected'
                        ? 'var(--collected)'
                        : state === 'overdue'
                          ? 'var(--overdue)'
                          : 'var(--assigned)',
                }}
              >
                {counts[state]}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-3 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="label">students</h2>
          <div>
            <span className="label">sort by</span>
            <select className="field mt-1.5" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
              <option value="completion">Completion</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        {error && (
          <p className="mb-3 font-mono text-xs" style={{ color: 'var(--overdue)' }}>
            {error}
          </p>
        )}

        {rows.length === 0 ? (
          <div className="panel px-4 py-8 text-center">
            <p className="label">no students in this class</p>
          </div>
        ) : (
          <ul className="panel divide-y" style={{ borderColor: 'var(--line-soft)' }}>
            {rows.map(({ student, state }) => {
              const collectedStamp = hw.collectedAt[student.id]
              const busy = pending === student.id
              return (
                <li key={student.id} className="row-hover flex items-center gap-4 px-4 py-3">
                  <Avatar
                    studentId={student.id}
                    fullName={student.fullName}
                    hasPhoto={student.hasPhoto}
                    version={version}
                  />
                  <div className="min-w-0 flex-1">
                    <Link to={`/students/${student.id}`} className="block truncate font-medium hover:underline">
                      {displayName(student)}
                    </Link>
                    {/* Only say something the name hasn't already said. */}
                    {(state === 'collected' && collectedStamp) || student.preferredName ? (
                      <p className="mono mt-0.5 truncate text-[10px]" style={{ color: 'var(--ink-faint)' }}>
                        {state === 'collected' && collectedStamp
                          ? `collected ${formatStamp(collectedStamp)}`
                          : student.fullName}
                      </p>
                    ) : null}
                  </div>

                  <span className={`${STATE_CHIP[state]} shrink-0`}>
                    <span className="chip-dot" />
                    {STATE_LABEL[state]}
                  </span>

                  <button
                    type="button"
                    className={`btn shrink-0 ${state === 'collected' ? '' : 'btn-collect'}`}
                    onClick={() => toggle(student.id, state)}
                    disabled={busy}
                    aria-label={state === 'collected' ? `Mark ${student.fullName} not collected` : `Mark ${student.fullName} collected`}
                  >
                    {state === 'collected' ? <IconUndo /> : <IconCheck />}
                    <span className="hidden sm:inline">{busy ? '…' : state === 'collected' ? 'Undo' : 'Collect'}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      {editing && <HomeworkFormModal classId={hw.classId} homework={hw} onClose={() => setEditing(false)} />}
      {deleting && (
        <ConfirmModal
          title={`Delete "${hw.title}"?`}
          body="The homework and every collected mark on it are removed. The students themselves are untouched."
          confirmLabel="Delete homework"
          onConfirm={async () => {
            await api.deleteHomework(hw.id)
            await reload()
            navigate(cls ? `/classes/${cls.id}` : '/homework', { replace: true })
          }}
          onClose={() => setDeleting(false)}
        />
      )}
    </>
  )
}
