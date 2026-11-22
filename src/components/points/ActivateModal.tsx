import { useState } from 'react'
import { api } from '../../lib/api'
import { useData } from '../../lib/data-context'
import { displayName } from '../../lib/format'
import { formatPoints, pointsTone, signedPoints, totalFor } from '../../lib/points'
import type { Behaviour, Student } from '../../lib/types'
import { IconCheck, IconMinus, IconPlus } from '../Icons'
import { Modal } from '../Modal'

const QUICK = [1, 2, 3, 5, 10]

/**
 * Step two, the intermediate modal. It states the effect that was chosen, lets
 * the magnitude be dialled up or down, and shows the resulting total before
 * anything is written. Nothing is saved until Activate.
 */
export function ActivateModal({
  behaviour,
  students,
  onClose,
  onDone,
}: {
  behaviour: Behaviour
  students: Student[]
  onClose: () => void
  onDone: (summary: string) => void
}) {
  const { data, reload } = useData()
  const [magnitude, setMagnitude] = useState(behaviour.points)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const positive = behaviour.kind === 'positive'
  const delta = signedPoints(behaviour.kind, magnitude)
  const tone = positive ? 'var(--collected)' : 'var(--overdue)'
  const single = students.length === 1 ? students[0] : null

  function clamp(n: number) {
    return Math.max(1, Math.min(100, Math.round(n)))
  }

  async function activate() {
    setBusy(true)
    setError(null)
    try {
      await api.activate({
        studentIds: students.map((s) => s.id),
        behaviourId: behaviour.id,
        points: magnitude,
      })
      await reload()
      onDone(
        `${behaviour.name} ${formatPoints(delta)} · ${
          single ? displayName(single) : `${students.length} students`
        }`
      )
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not activate that.')
      setBusy(false)
    }
  }

  return (
    <Modal
      eyebrow={positive ? 'Reward' : 'Penalty'}
      title={behaviour.name}
      onClose={onClose}
      footer={
        <>
          <button type="button" className="btn btn-ghost" onClick={onClose} disabled={busy}>
            Cancel
          </button>
          <button
            type="button"
            className="btn"
            onClick={activate}
            disabled={busy}
            style={{ background: tone, borderColor: tone, color: 'var(--bg)', fontWeight: 600 }}
          >
            <IconCheck />
            {busy ? 'Activating…' : 'Activate'}
          </button>
        </>
      }
    >
      {/* What is about to happen, stated plainly. */}
      <div
        className="mb-5 px-4 py-4 text-center"
        style={{
          background: positive ? 'var(--collected-dim)' : 'var(--overdue-dim)',
          border: 'var(--border-w) solid ' + tone,
          borderRadius: 'var(--radius-sm, 0)',
        }}
      >
        <p className="label" style={{ color: tone }}>
          {behaviour.note ?? (positive ? 'reward' : 'penalty')}
        </p>
        <p className="mono mt-1 text-4xl font-bold" style={{ color: tone }}>
          {formatPoints(delta)}
        </p>
        <p className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
          {single ? displayName(single) : `${students.length} students, each`}
        </p>
      </div>

      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="label">Points to {positive ? 'add' : 'deduct'}</span>
        <span className="mono text-xs" style={{ color: 'var(--ink-faint)' }}>
          default {behaviour.points}
        </span>
      </div>

      <div className="flex items-stretch gap-2">
        <button
          type="button"
          className="btn !px-3"
          onClick={() => setMagnitude((m) => clamp(m - 1))}
          disabled={magnitude <= 1}
          aria-label="One fewer point"
        >
          <IconMinus />
        </button>
        <input
          type="number"
          className="field mono !w-auto flex-1 text-center text-lg font-semibold"
          value={magnitude}
          min={1}
          max={100}
          onChange={(e) => setMagnitude(clamp(Number(e.target.value) || 1))}
          aria-label="Number of points"
        />
        <button
          type="button"
          className="btn !px-3"
          onClick={() => setMagnitude((m) => clamp(m + 1))}
          disabled={magnitude >= 100}
          aria-label="One more point"
        >
          <IconPlus />
        </button>
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {QUICK.map((n) => (
          <button
            key={n}
            type="button"
            className="btn !px-2.5 !py-1"
            aria-pressed={magnitude === n}
            onClick={() => setMagnitude(n)}
            style={magnitude === n ? { borderColor: tone, color: tone } : undefined}
          >
            {positive ? '+' : '−'}
            {n}
          </button>
        ))}
      </div>

      {/* The effect on the running total, before committing to it. */}
      <div className="mt-5 border-t pt-4 hairline">
        <p className="label mb-2">Result</p>
        {single ? (
          <BeforeAfter before={totalFor(data.awards, single.id)} delta={delta} name={displayName(single)} />
        ) : (
          <ul className="space-y-1.5">
            {students.slice(0, 6).map((s) => (
              <BeforeAfter
                key={s.id}
                before={totalFor(data.awards, s.id)}
                delta={delta}
                name={displayName(s)}
              />
            ))}
            {students.length > 6 && (
              <li className="label pt-1">and {students.length - 6} more</li>
            )}
          </ul>
        )}
      </div>

      {error && (
        <p className="mt-3 font-mono text-xs" style={{ color: 'var(--overdue)' }}>
          {error}
        </p>
      )}
    </Modal>
  )
}

function BeforeAfter({ before, delta, name }: { before: number; delta: number; name: string }) {
  const after = before + delta
  return (
    <li className="flex items-baseline justify-between gap-3 text-sm" style={{ listStyle: 'none' }}>
      <span className="min-w-0 truncate">{name}</span>
      <span className="mono shrink-0">
        <span style={{ color: 'var(--ink-faint)' }}>{before}</span>
        <span style={{ color: 'var(--ink-faint)' }}> → </span>
        <span className="font-semibold" style={{ color: pointsTone(after) }}>
          {after}
        </span>
      </span>
    </li>
  )
}
