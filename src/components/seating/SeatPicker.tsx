import { useMemo, useState } from 'react'
import { displayName, nameKey } from '../../lib/format'
import { conflictsIfSeated, parseSeat, seatOf } from '../../lib/seating'
import type { SeatingPlan, Student } from '../../lib/types'
import { Avatar } from '../Avatar'
import { IconClose, IconTrash } from '../Icons'

type Common = {
  plan: SeatingPlan
  /** Everyone, so a conflict with a student outside this class still resolves. */
  students: Student[]
  seat: string
  version: number
  busy: boolean
  onPick: (studentId: string) => void
}

/**
 * The panel that emerges when a seat is clicked: who is there now, and who
 * could be. It slides in from the right on a wide screen and up from the
 * bottom on a phone, where the grid already takes the full width.
 */
export function SeatPicker({
  plan,
  roster,
  students,
  seat,
  version,
  busy,
  onPick,
  onClear,
  onClose,
}: Common & {
  roster: Student[]
  onClear: () => void
  onClose: () => void
}) {
  const [query, setQuery] = useState('')
  const [row, col] = parseSeat(seat)
  const placed = useMemo(() => seatOf(plan), [plan])

  const occupantId = plan.seats[seat]
  const occupant = roster.find((s) => s.id === occupantId)

  const matches = (s: Student) => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return s.fullName.toLowerCase().includes(q) || (s.preferredName ?? '').toLowerCase().includes(q)
  }

  const sorted = [...roster].sort((a, b) => nameKey(a.fullName).localeCompare(nameKey(b.fullName)))
  const free = sorted.filter((s) => !placed.has(s.id)).filter(matches)
  const elsewhere = sorted.filter((s) => placed.has(s.id) && s.id !== occupantId).filter(matches)

  const common: Common = { plan, students, seat, version, busy, onPick }

  return (
    <>
      {/* Click-away, and a scrim so the grid recedes while choosing. */}
      <div
        className="fixed inset-0 z-40"
        style={{ background: 'rgba(5,4,4,0.5)' }}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className="panel fixed z-50 flex flex-col inset-x-0 bottom-0 max-h-[75vh] sm:inset-y-0 sm:right-0 sm:left-auto sm:bottom-auto sm:max-h-none sm:w-80"
        style={{ borderRadius: 0 }}
        role="dialog"
        aria-label={`Seat at row ${row + 1}, column ${col + 1}`}
      >
        <header className="flex items-start justify-between gap-3 border-b p-5 hairline">
          <div>
            <p className="label">seat</p>
            <h2 className="mono mt-1 text-lg font-semibold tracking-tight">
              Row {row + 1} · Col {col + 1}
            </h2>
          </div>
          <button type="button" className="btn btn-ghost -mt-1 -mr-1 !px-2" onClick={onClose} aria-label="Close">
            <IconClose />
          </button>
        </header>

        {occupant && (
          <div
            className="flex items-center gap-3 border-b p-4 hairline"
            style={{ background: 'var(--panel-2)' }}
          >
            <Avatar
              studentId={occupant.id}
              fullName={occupant.fullName}
              hasPhoto={occupant.hasPhoto}
              version={version}
              size="sm"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{displayName(occupant)}</p>
              <p className="label mt-0.5">sitting here</p>
            </div>
            <button
              type="button"
              className="btn btn-ghost btn-danger shrink-0 !px-2"
              onClick={onClear}
              disabled={busy}
              aria-label={`Clear ${occupant.fullName} from this seat`}
            >
              <IconTrash className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        <div className="border-b p-4 hairline">
          <input
            className="field"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the class"
            autoFocus
          />
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <Group
            {...common}
            title={occupant ? 'replace with' : 'not seated yet'}
            list={free}
            empty={roster.length === 0 ? 'No students in this class.' : 'Everyone is seated.'}
          />
          <Group
            {...common}
            title="seated elsewhere"
            note="picking one swaps the two seats"
            list={elsewhere}
            empty="Nobody else is placed."
            placed={placed}
          />
        </div>
      </aside>
    </>
  )
}

function Group({
  title,
  note,
  list,
  empty,
  placed,
  plan,
  students,
  seat,
  version,
  busy,
  onPick,
}: Common & {
  title: string
  note?: string
  list: Student[]
  empty: string
  placed?: Map<string, string>
}) {
  return (
    <section>
      <div className="flex items-baseline gap-2 px-4 pt-4 pb-2">
        <h3 className="label">{title}</h3>
        {note && (
          <span className="text-[10px]" style={{ color: 'var(--ink-faint)' }}>
            {note}
          </span>
        )}
      </div>

      {list.length === 0 ? (
        <p className="px-4 pb-3 text-xs" style={{ color: 'var(--ink-faint)' }}>
          {empty}
        </p>
      ) : (
        <ul className="divide-y" style={{ borderColor: 'var(--line-soft)' }}>
          {list.map((s) => {
            const clashes = conflictsIfSeated(plan, students, seat, s.id)
            const current = placed?.get(s.id)
            return (
              <li key={s.id}>
                <button
                  type="button"
                  className="row-hover flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors"
                  onClick={() => onPick(s.id)}
                  disabled={busy}
                >
                  <Avatar
                    studentId={s.id}
                    fullName={s.fullName}
                    hasPhoto={s.hasPhoto}
                    version={version}
                    size="sm"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">{displayName(s)}</span>
                    {/* Warn while the choice is being made, not after it lands. */}
                    {clashes.length > 0 ? (
                      <span
                        className="mono mt-0.5 block truncate text-[10px]"
                        style={{ color: 'var(--overdue)' }}
                      >
                        conflict with {clashes.map((c) => displayName(c)).join(', ')}
                      </span>
                    ) : current ? (
                      <span className="mono mt-0.5 block text-[10px]" style={{ color: 'var(--ink-faint)' }}>
                        row {Number(current.split(',')[0]) + 1} · col {Number(current.split(',')[1]) + 1}
                      </span>
                    ) : null}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}
