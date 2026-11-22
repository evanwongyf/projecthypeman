import { useMemo, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Field } from '../components/Field'
import { Select } from '../components/Select'
import { ConfirmModal } from '../components/ConfirmModal'
import {
  RUN_TYPES,
  formatDuration,
  formatPace,
  loadRuns,
  parseDuration,
  saveRuns,
  todayIso,
  weekStart,
  type Run,
  type RunType,
} from '../lib/running'

export function RunningPage() {
  const [runs, setRuns] = useState<Run[]>(() => loadRuns())
  const [deleting, setDeleting] = useState<Run | null>(null)

  function update(next: Run[]) {
    setRuns(next)
    saveRuns(next)
  }

  const sorted = useMemo(
    () => [...runs].sort((a, b) => b.date.localeCompare(a.date) || b.createdAt - a.createdAt),
    [runs]
  )

  const stats = useMemo(() => {
    const thisWeek = weekStart(todayIso())
    const week = runs.filter((r) => weekStart(r.date) === thisWeek)
    const totalKm = runs.reduce((s, r) => s + r.distanceKm, 0)
    const totalSec = runs.reduce((s, r) => s + r.durationSec, 0)
    return {
      weekKm: week.reduce((s, r) => s + r.distanceKm, 0),
      weekRuns: week.length,
      totalKm,
      avgPace: formatPace(totalSec, totalKm),
      longest: runs.reduce((m, r) => Math.max(m, r.distanceKm), 0),
    }
  }, [runs])

  return (
    <>
      <PageHeader eyebrow="Running" title="Running log" />

      <div className="grid gap-8 p-5 sm:p-8 xl:grid-cols-[1fr_22rem]">
        <div className="min-w-0 space-y-8">
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="this week" value={`${stats.weekKm.toFixed(1)} km`} sub={`${stats.weekRuns} ${stats.weekRuns === 1 ? 'run' : 'runs'}`} />
            <Stat label="all time" value={`${stats.totalKm.toFixed(1)} km`} sub={`${runs.length} ${runs.length === 1 ? 'run' : 'runs'}`} />
            <Stat label="avg pace" value={stats.avgPace} sub="min / km" />
            <Stat label="longest" value={`${stats.longest.toFixed(1)} km`} sub="single run" />
          </dl>

          <section>
            <h2 className="label mb-3">runs</h2>
            {sorted.length === 0 ? (
              <div className="panel px-4 py-10 text-center">
                <p className="label">no runs logged yet</p>
                <p className="mt-2 text-sm" style={{ color: 'var(--ink-faint)' }}>
                  Log your first one with the form.
                </p>
              </div>
            ) : (
              <ul className="panel divide-y" style={{ borderColor: 'var(--line-soft)' }}>
                {sorted.map((r) => (
                  <li key={r.id} className="row-hover flex flex-wrap items-start gap-x-6 gap-y-2 px-5 py-3">
                    <div className="min-w-[7rem]">
                      <p className="label">{RUN_TYPES.find((t) => t.value === r.type)?.label}</p>
                      <p className="mono mt-1 text-sm">{formatDate(r.date)}</p>
                    </div>
                    <Cell label="distance" value={`${r.distanceKm.toFixed(2)} km`} />
                    <Cell label="time" value={formatDuration(r.durationSec)} />
                    <Cell label="pace" value={`${formatPace(r.durationSec, r.distanceKm)} /km`} />
                    {r.note && (
                      <div className="min-w-0 basis-full sm:basis-auto sm:flex-1">
                        <p className="label">note</p>
                        <p className="mt-1 truncate text-sm" style={{ color: 'var(--ink-soft)' }}>
                          {r.note}
                        </p>
                      </div>
                    )}
                    <button type="button" className="btn btn-ghost btn-danger ml-auto" onClick={() => setDeleting(r)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        <aside className="min-w-0">
          <div className="xl:sticky xl:top-8">
            <RunForm onAdd={(run) => update([...runs, run])} />
            <p className="mt-3 text-xs" style={{ color: 'var(--ink-faint)' }}>
              Runs are saved in this browser for now.
            </p>
          </div>
        </aside>
      </div>

      {deleting && (
        <ConfirmModal
          title="Delete this run?"
          body={`${deleting.distanceKm.toFixed(2)} km on ${formatDate(deleting.date)} is removed from your log.`}
          confirmLabel="Delete run"
          onConfirm={async () => {
            update(runs.filter((r) => r.id !== deleting.id))
          }}
          onClose={() => setDeleting(null)}
        />
      )}
    </>
  )
}

function RunForm({ onAdd }: { onAdd: (run: Run) => void }) {
  const [date, setDate] = useState(todayIso())
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const [type, setType] = useState<RunType>('easy')
  const [note, setNote] = useState('')
  const [error, setError] = useState<string | null>(null)

  const km = Number(distance)
  const sec = parseDuration(duration)
  const pace = km > 0 && sec ? formatPace(sec, km) : null

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!date) return setError('Pick a date.')
    if (!(km > 0)) return setError('Distance must be more than 0 km.')
    if (!sec) return setError('Time should look like 45:30 or 1:02:10.')
    onAdd({
      id: crypto.randomUUID(),
      date,
      distanceKm: Math.round(km * 100) / 100,
      durationSec: sec,
      type,
      note: note.trim(),
      createdAt: Date.now(),
    })
    setDistance('')
    setDuration('')
    setNote('')
    setError(null)
  }

  return (
    <form className="panel space-y-4 p-5" onSubmit={submit}>
      <h2 className="text-base font-semibold tracking-tight">Log a run</h2>
      <Field label="Date" required>
        <input type="date" className="field" value={date} onChange={(e) => setDate(e.target.value)} />
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Distance" required hint="km">
          <input
            className="field"
            inputMode="decimal"
            placeholder="5.0"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </Field>
        <Field label="Time" required hint="mm:ss">
          <input className="field" placeholder="28:45" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </Field>
      </div>
      <Field label="Type">
        <Select value={type} onChange={(v) => setType(v as RunType)} options={RUN_TYPES} />
      </Field>
      <Field label="Note" hint="optional">
        <input className="field" placeholder="Felt strong on the hills" value={note} onChange={(e) => setNote(e.target.value)} />
      </Field>

      <div>
        <p className="label">pace</p>
        <p className="mono mt-1 text-lg font-semibold">{pace ? `${pace} /km` : '—'}</p>
      </div>

      {error && (
        <p className="font-mono text-xs" style={{ color: 'var(--overdue)' }}>
          {error}
        </p>
      )}
      <button type="submit" className="btn btn-primary w-full">
        Add run
      </button>
    </form>
  )
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="panel p-4">
      <dt className="label">{label}</dt>
      <dd className="mono mt-1 text-xl font-semibold">{value}</dd>
      <dd className="label mt-1 normal-case tracking-normal">{sub}</dd>
    </div>
  )
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="label">{label}</p>
      <p className="mono mt-1 text-sm">{value}</p>
    </div>
  )
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })
}
