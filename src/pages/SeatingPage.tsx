import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { api } from '../lib/api'
import { useData } from '../lib/data-context'
import { displayName, nameKey } from '../lib/format'
import { adjacentConflicts, conflictSeats, seatKey, unseated } from '../lib/seating'
import type { SeatingPlan } from '../lib/types'
import { Avatar } from '../components/Avatar'
import { ConfirmModal } from '../components/ConfirmModal'
import { Empty } from '../components/Empty'
import { Field } from '../components/Field'
import { IconEdit, IconPlus, IconTrash } from '../components/Icons'
import { Modal } from '../components/Modal'
import { MetaItem, PageHeader } from '../components/PageHeader'
import { SeatPicker } from '../components/seating/SeatPicker'

export function SeatingPage() {
  const { classId = '', planId } = useParams()
  const { data, loading, version, reload } = useData()
  const navigate = useNavigate()

  const [openSeat, setOpenSeat] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [creating, setCreating] = useState(false)
  const [renaming, setRenaming] = useState<SeatingPlan | null>(null)
  const [deleting, setDeleting] = useState<SeatingPlan | null>(null)

  const cls = data.classes.find((c) => c.id === classId)

  const plans = useMemo(
    () =>
      data.seatingPlans
        .filter((p) => p.classId === classId)
        .sort((a, b) => a.name.localeCompare(b.name)),
    [data.seatingPlans, classId]
  )

  const plan = plans.find((p) => p.id === planId) ?? null

  const roster = useMemo(
    () =>
      data.students
        .filter((s) => s.classId === classId)
        .sort((a, b) => nameKey(a.fullName).localeCompare(nameKey(b.fullName))),
    [data.students, classId]
  )

  // A bare /seating lands on a plan rather than an empty screen.
  useEffect(() => {
    if (!loading && !planId && plans.length > 0) {
      navigate(`/classes/${classId}/seating/${plans[0].id}`, { replace: true })
    }
  }, [loading, planId, plans, classId, navigate])

  const conflicts = useMemo(
    () => (plan ? adjacentConflicts(plan, data.students) : []),
    [plan, data.students]
  )
  const flagged = useMemo(() => conflictSeats(conflicts), [conflicts])
  const free = plan ? unseated(plan, roster) : roster

  if (loading) return <p className="label p-8">loading seating…</p>
  if (!cls) return <Navigate to="/classes" replace />

  async function act(fn: () => Promise<unknown>) {
    setBusy(true)
    setError(null)
    try {
      await fn()
      await reload()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save that.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <PageHeader
        back={{ to: `/classes/${cls.id}`, label: cls.name }}
        eyebrow={[cls.school, cls.subject].filter(Boolean).join(' · ') || 'seating'}
        title="Seating"
        meta={
          plan && (
            <>
              <MetaItem label="grid">
                <span className="mono">
                  {plan.rows} × {plan.cols}
                </span>
              </MetaItem>
              <MetaItem label="seated">
                <span className="mono">
                  {Object.keys(plan.seats).length}/{roster.length}
                </span>
              </MetaItem>
              {conflicts.length > 0 && (
                <span className="chip chip-overdue">
                  <span className="chip-dot" />
                  {conflicts.length} conflict {conflicts.length === 1 ? 'pair' : 'pairs'} adjacent
                </span>
              )}
            </>
          )
        }
        actions={
          <button type="button" className="btn btn-primary" onClick={() => setCreating(true)}>
            <IconPlus />
            New plan
          </button>
        }
      />

      {plans.length > 0 && (
        <div className="flex gap-1 overflow-x-auto border-b px-5 py-2 sm:px-8 hairline">
          {plans.map((p) => (
            <Link
              key={p.id}
              to={`/classes/${cls.id}/seating/${p.id}`}
              className="border px-3 py-1.5 font-mono text-[11px] font-medium tracking-[0.08em] uppercase whitespace-nowrap transition-colors"
              style={{
                background: p.id === plan?.id ? 'var(--panel-3)' : 'transparent',
                borderColor: p.id === plan?.id ? 'var(--line)' : 'transparent',
                color: p.id === plan?.id ? 'var(--ink)' : 'var(--ink-soft)',
                borderRadius: 'var(--radius-sm, 0)',
              }}
            >
              {p.name}
            </Link>
          ))}
        </div>
      )}

      {error && (
        <p
          className="border-b px-5 py-3 font-mono text-xs sm:px-8"
          style={{ borderColor: 'var(--overdue)', background: 'var(--overdue-dim)', color: 'var(--overdue)' }}
        >
          {error}
        </p>
      )}

      <div className="p-5 sm:p-8">
        {!plan ? (
          <Empty
            title="no seating plan yet"
            body={`Make a plan for ${cls.name}, a grid of seats you fill by tapping a cell. You can keep several and switch between them.`}
            action={
              <button type="button" className="btn btn-primary" onClick={() => setCreating(true)}>
                <IconPlus />
                Create a plan
              </button>
            }
          />
        ) : (
          <>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold tracking-tight">{plan.name}</h2>
                <button
                  type="button"
                  className="btn btn-ghost !px-2"
                  onClick={() => setRenaming(plan)}
                  aria-label="Rename or resize this plan"
                >
                  <IconEdit className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  className="btn btn-ghost btn-danger !px-2"
                  onClick={() => setDeleting(plan)}
                  aria-label="Delete this plan"
                >
                  <IconTrash className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="label">tap a seat to fill it</p>
            </div>

            {/* Seats stay desk-sized rather than stretching to the window, so
                a 7 x 7 room still reads as a room. Narrow screens scroll
                sideways instead of shrinking names into illegibility. */}
            <div className="overflow-x-auto pb-2">
              <div className="mx-auto w-fit">
                <p className="label mb-2 text-center">front of class</p>
                <div
                  className="mb-3 h-px w-full"
                  style={{ background: 'var(--line)' }}
                  aria-hidden="true"
                />
                <div
                  className="grid gap-2"
                  style={{ gridTemplateColumns: `repeat(${plan.cols}, minmax(74px, 104px))` }}
                >
                  {Array.from({ length: plan.rows }).flatMap((_, row) =>
                    Array.from({ length: plan.cols }).map((__, col) => {
                      const key = seatKey(row, col)
                      const student = roster.find((s) => s.id === plan.seats[key])
                      const clash = flagged.has(key)
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setOpenSeat(key)}
                          className="panel row-hover flex aspect-[4/3] flex-col items-center justify-center gap-1 p-1.5 text-center transition-colors"
                          style={
                            clash
                              ? { borderColor: 'var(--overdue)', background: 'var(--overdue-dim)' }
                              : student
                                ? undefined
                                : { borderStyle: 'dashed', background: 'transparent' }
                          }
                          aria-label={
                            student
                              ? `Row ${row + 1} column ${col + 1}: ${student.fullName}${clash ? ', seated next to a conflict' : ''}`
                              : `Row ${row + 1} column ${col + 1}: empty`
                          }
                        >
                          {student ? (
                            <>
                              <Avatar
                                studentId={student.id}
                                fullName={student.fullName}
                                hasPhoto={student.hasPhoto}
                                version={version}
                                size="sm"
                              />
                              <span className="w-full truncate text-[11px] leading-tight font-medium">
                                {displayName(student)}
                              </span>
                            </>
                          ) : (
                            <span className="mono text-[10px]" style={{ color: 'var(--ink-faint)' }}>
                              {row + 1}·{col + 1}
                            </span>
                          )}
                        </button>
                      )
                    })
                  )}
                </div>
              </div>
            </div>

            {conflicts.length > 0 && (
              <section className="panel mt-6 p-5" style={{ borderColor: 'var(--overdue)' }}>
                <p className="label" style={{ color: 'var(--overdue)' }}>
                  sitting next to a recorded conflict
                </p>
                <ul className="mt-2 space-y-1">
                  {conflicts.map((c) => (
                    <li key={c.seats.join('|')} className="text-sm">
                      {displayName(c.students[0])} <span style={{ color: 'var(--ink-faint)' }}>and</span>{' '}
                      {displayName(c.students[1])}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {free.length > 0 && (
              <section className="mt-6">
                <p className="label mb-2">
                  not seated, {free.length} of {roster.length}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {free.map((s) => (
                    <li key={s.id} className="chip chip-neutral">
                      {displayName(s)}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </>
        )}
      </div>

      {plan && openSeat && (
        <SeatPicker
          plan={plan}
          roster={roster}
          students={data.students}
          seat={openSeat}
          version={version}
          busy={busy}
          onPick={async (studentId) => {
            await act(() => api.setSeat(plan.id, openSeat, studentId))
            setOpenSeat(null)
          }}
          onClear={async () => {
            await act(() => api.setSeat(plan.id, openSeat, null))
            setOpenSeat(null)
          }}
          onClose={() => setOpenSeat(null)}
        />
      )}

      {creating && (
        <PlanForm
          classId={cls.id}
          onClose={() => setCreating(false)}
          onCreated={(id) => navigate(`/classes/${cls.id}/seating/${id}`)}
        />
      )}
      {renaming && <PlanForm classId={cls.id} plan={renaming} onClose={() => setRenaming(null)} />}
      {deleting && (
        <ConfirmModal
          title={`Delete "${deleting.name}"?`}
          body="The plan and its arrangement are removed. Students and everything else about the class are untouched."
          confirmLabel="Delete plan"
          onConfirm={async () => {
            await api.deleteSeatingPlan(deleting.id)
            await reload()
            navigate(`/classes/${cls.id}/seating`, { replace: true })
          }}
          onClose={() => setDeleting(null)}
        />
      )}
    </>
  )
}

function PlanForm({
  classId,
  plan,
  onClose,
  onCreated,
}: {
  classId: string
  plan?: SeatingPlan
  onClose: () => void
  onCreated?: (id: string) => void
}) {
  const { reload } = useData()
  const [name, setName] = useState(plan?.name ?? '')
  const [rows, setRows] = useState(plan?.rows ?? 7)
  const [cols, setCols] = useState(plan?.cols ?? 7)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const clamp = (n: number) => Math.max(1, Math.min(12, Math.round(n) || 1))

  // Shrinking drops anyone outside the new grid, so say so before it happens.
  const willDrop =
    plan
      ? Object.keys(plan.seats).filter((k) => {
          const [r, c] = k.split(',').map(Number)
          return r >= rows || c >= cols
        }).length
      : 0

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return setError('A name is required.')
    setBusy(true)
    setError(null)
    try {
      if (plan) {
        await api.updateSeatingPlan(plan.id, { name: name.trim(), rows, cols })
      } else {
        const created = await api.createSeatingPlan({ classId, name: name.trim(), rows, cols })
        onCreated?.(created.id)
      }
      await reload()
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save.')
      setBusy(false)
    }
  }

  return (
    <Modal
      eyebrow={plan ? 'Edit plan' : 'New seating plan'}
      title={plan ? plan.name : 'Create a seating plan'}
      onClose={onClose}
      footer={
        <>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" form="plan-form" className="btn btn-primary" disabled={busy}>
            {busy ? 'Saving…' : plan ? 'Save' : 'Create plan'}
          </button>
        </>
      }
    >
      <form id="plan-form" onSubmit={submit} className="space-y-4">
        <Field label="Name" required hint="e.g. Term 2, or Exam layout">
          <input className="field" value={name} onChange={(e) => setName(e.target.value)} autoFocus required />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Rows" required>
            <input
              className="field mono"
              type="number"
              min={1}
              max={12}
              value={rows}
              onChange={(e) => setRows(clamp(Number(e.target.value)))}
              required
            />
          </Field>
          <Field label="Columns" required>
            <input
              className="field mono"
              type="number"
              min={1}
              max={12}
              value={cols}
              onChange={(e) => setCols(clamp(Number(e.target.value)))}
              required
            />
          </Field>
        </div>

        {willDrop > 0 && (
          <p className="font-mono text-xs" style={{ color: 'var(--overdue)' }}>
            {willDrop} seated {willDrop === 1 ? 'student falls' : 'students fall'} outside a {rows} × {cols}{' '}
            grid and will be unseated.
          </p>
        )}

        {error && (
          <p className="font-mono text-xs" style={{ color: 'var(--overdue)' }}>
            {error}
          </p>
        )}
      </form>
    </Modal>
  )
}
