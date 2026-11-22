import { useEffect, useMemo, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Field } from '../components/Field'
import { Select } from '../components/Select'
import { ConfirmModal } from '../components/ConfirmModal'
import { parseDuration } from '../lib/running'
import {
  RACE_DISTANCES,
  buildSplits,
  computeStats,
  formatClock,
  formatPaceSec,
  loadProjections,
  newSegment,
  parsePace,
  round2,
  saveProjections,
  type Projection,
  type Segment,
} from '../lib/racelab'

function blankProjection(): Projection {
  return {
    id: crypto.randomUUID(),
    name: 'Untitled projection',
    targetSec: null,
    segments: [newSegment('Start', 2, 330), newSegment('Middle', 6, 320), newSegment('Finish', 2, 305)],
    updatedAt: Date.now(),
  }
}

export function RaceLabPage() {
  const [list, setList] = useState<Projection[]>(() => {
    const saved = loadProjections()
    return saved.length ? saved : [blankProjection()]
  })
  const [activeId, setActiveId] = useState(() => list[0].id)
  const [deleting, setDeleting] = useState<Projection | null>(null)

  useEffect(() => saveProjections(list), [list])

  const active = list.find((p) => p.id === activeId) ?? list[0]

  function patch(change: Partial<Projection>) {
    setList((all) => all.map((p) => (p.id === active.id ? { ...p, ...change, updatedAt: Date.now() } : p)))
  }

  function setSegments(fn: (segs: Segment[]) => Segment[]) {
    patch({ segments: fn(active.segments) })
  }

  function create() {
    const p = blankProjection()
    setList((all) => [p, ...all])
    setActiveId(p.id)
  }

  function duplicate() {
    const p: Projection = {
      ...active,
      id: crypto.randomUUID(),
      name: `${active.name} (copy)`,
      segments: active.segments.map((s) => ({ ...s, id: crypto.randomUUID() })),
      updatedAt: Date.now(),
    }
    setList((all) => [p, ...all])
    setActiveId(p.id)
  }

  const sortedList = useMemo(() => [...list].sort((a, b) => b.updatedAt - a.updatedAt), [list])

  return (
    <>
      <PageHeader
        eyebrow="Running"
        title="Race Lab"
        actions={
          <>
            <button type="button" className="btn" onClick={duplicate}>
              Duplicate
            </button>
            <button type="button" className="btn btn-primary" onClick={create}>
              New projection
            </button>
          </>
        }
      />

      <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[15rem_1fr]">
        {/* ---- saved projections ---- */}
        <aside className="min-w-0">
          <p className="label mb-2">projections</p>
          <ul className="panel divide-y" style={{ borderColor: 'var(--line-soft)' }}>
            {sortedList.map((p) => {
              const st = computeStats(p)
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    className="row-hover block w-full px-4 py-3 text-left"
                    style={{ background: p.id === active.id ? 'var(--accent-dim)' : undefined }}
                    onClick={() => setActiveId(p.id)}
                  >
                    <span className="block truncate text-sm font-medium">{p.name}</span>
                    <span className="mono mt-1 block text-[11px]" style={{ color: 'var(--ink-faint)' }}>
                      {round2(st.totalKm)} km · {formatClock(st.totalSec)}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </aside>

        <div className="min-w-0 space-y-8">
          {/* ---- name & goal ---- */}
          <section className="grid gap-4 sm:grid-cols-[1fr_12rem]">
            <Field label="Projection name">
              <input className="field" value={active.name} onChange={(e) => patch({ name: e.target.value })} />
            </Field>
            <Field label="Goal time" hint="h:mm:ss">
              <TimeInput value={active.targetSec} onChange={(targetSec) => patch({ targetSec })} />
            </Field>
          </section>

          <QuickBuild key={active.id} onBuild={(segments) => patch({ segments })} />

          <Stats projection={active} />

          {/* ---- segments ---- */}
          <section>
            <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
              <h2 className="label">segments</h2>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  const last = active.segments[active.segments.length - 1]
                  setSegments((s) => [...s, newSegment(`Segment ${s.length + 1}`, 1, last?.paceSec ?? 330)])
                }}
              >
                Add segment
              </button>
            </div>

            <ul className="space-y-2">
              {computeRows(active).map(({ seg, time, elapsed, endKm }, i) => (
                <li key={seg.id} className="panel grid gap-3 p-3 sm:grid-cols-[1.4fr_0.8fr_0.8fr_0.9fr_0.9fr_auto] sm:items-end">
                  <Field label={`#${i + 1} label`}>
                    <input
                      className="field"
                      value={seg.label}
                      onChange={(e) => setSegments((s) => s.map((x) => (x.id === seg.id ? { ...x, label: e.target.value } : x)))}
                    />
                  </Field>
                  <Field label="Distance" hint="km">
                    <NumberInput
                      value={seg.distanceKm}
                      onChange={(distanceKm) => setSegments((s) => s.map((x) => (x.id === seg.id ? { ...x, distanceKm } : x)))}
                    />
                  </Field>
                  <Field label="Pace" hint="/km">
                    <PaceInput
                      value={seg.paceSec}
                      onChange={(paceSec) => setSegments((s) => s.map((x) => (x.id === seg.id ? { ...x, paceSec } : x)))}
                    />
                  </Field>
                  <Readout label="segment time" value={formatClock(time)} />
                  <Readout label={`at ${round2(endKm)} km`} value={formatClock(elapsed)} />
                  <div className="flex gap-1">
                    <button
                      type="button"
                      className="btn btn-ghost !px-2"
                      aria-label="Move up"
                      disabled={i === 0}
                      onClick={() => setSegments((s) => move(s, i, -1))}
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      className="btn btn-ghost !px-2"
                      aria-label="Move down"
                      disabled={i === active.segments.length - 1}
                      onClick={() => setSegments((s) => move(s, i, 1))}
                    >
                      ↓
                    </button>
                    <button
                      type="button"
                      className="btn btn-ghost btn-danger !px-2"
                      aria-label="Remove segment"
                      onClick={() => setSegments((s) => s.filter((x) => x.id !== seg.id))}
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <PaceProfile projection={active} />
          <KmSplits projection={active} />

          <div className="border-t pt-6 hairline">
            <button type="button" className="btn btn-danger" onClick={() => setDeleting(active)}>
              Delete projection
            </button>
            <p className="mt-3 text-xs" style={{ color: 'var(--ink-faint)' }}>
              Projections are saved in this browser for now.
            </p>
          </div>
        </div>
      </div>

      {deleting && (
        <ConfirmModal
          title={`Delete “${deleting.name}”?`}
          body="This projection and its segments are removed."
          confirmLabel="Delete projection"
          onConfirm={async () => {
            const rest = list.filter((p) => p.id !== deleting.id)
            const next = rest.length ? rest : [blankProjection()]
            setList(next)
            setActiveId(next[0].id)
          }}
          onClose={() => setDeleting(null)}
        />
      )}
    </>
  )
}

function computeRows(p: Projection) {
  let km = 0
  let elapsed = 0
  return p.segments.map((seg) => {
    const time = seg.distanceKm > 0 && seg.paceSec > 0 ? seg.distanceKm * seg.paceSec : 0
    km += seg.distanceKm > 0 ? seg.distanceKm : 0
    elapsed += time
    return { seg, time, elapsed, endKm: km }
  })
}

function move<T>(arr: T[], i: number, dir: -1 | 1): T[] {
  const j = i + dir
  if (j < 0 || j >= arr.length) return arr
  const next = [...arr]
  ;[next[i], next[j]] = [next[j], next[i]]
  return next
}

// ---------- quick build ----------

function QuickBuild({ onBuild }: { onBuild: (segs: Segment[]) => void }) {
  const [distance, setDistance] = useState('10k')
  const [pace, setPace] = useState(330)
  const [strategy, setStrategy] = useState<'even' | 'negative' | 'positive'>('negative')
  const [parts, setParts] = useState('4')

  const km = RACE_DISTANCES.find((d) => d.id === distance)?.km ?? 10

  return (
    <section className="panel p-4">
      <h2 className="text-sm font-semibold tracking-tight">Quick build</h2>
      <p className="mt-1 text-xs" style={{ color: 'var(--ink-faint)' }}>
        Fill the segments from a race distance, a goal pace and a pacing strategy. You can tweak each segment after.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-4 sm:items-end">
        <Field label="Race">
          <Select value={distance} onChange={setDistance} options={RACE_DISTANCES.map((d) => ({ value: d.id, label: d.label }))} />
        </Field>
        <Field label="Goal pace" hint="/km">
          <PaceInput value={pace} onChange={setPace} />
        </Field>
        <Field label="Strategy">
          <Select
            value={strategy}
            onChange={(v) => setStrategy(v as typeof strategy)}
            options={[
              { value: 'even', label: 'Even split' },
              { value: 'negative', label: 'Negative split' },
              { value: 'positive', label: 'Positive split' },
            ]}
          />
        </Field>
        <Field label="Segments">
          <Select value={parts} onChange={setParts} options={['1', '2', '3', '4', '5', '6', '8', '10'].map((n) => ({ value: n, label: n }))} />
        </Field>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button type="button" className="btn btn-primary" onClick={() => onBuild(buildSplits(km, pace, strategy, Number(parts)))}>
          Fill segments
        </button>
        <span className="label">≈ {formatClock(km * pace)} at even pace</span>
      </div>
    </section>
  )
}

// ---------- stats ----------

function Stats({ projection }: { projection: Projection }) {
  const st = computeStats(projection)
  const gap = st.gapSec
  return (
    <section>
      <h2 className="label mb-3">projection</h2>
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
        <StatCard label="finish time" value={formatClock(st.totalSec)} big />
        <StatCard label="distance" value={`${round2(st.totalKm)} km`} />
        <StatCard label="average pace" value={`${formatPaceSec(st.avgPaceSec)} /km`} />
        <StatCard
          label="vs goal"
          value={gap === null ? '—' : `${gap > 0 ? '+' : gap < 0 ? '−' : ''}${formatClock(Math.abs(gap))}`}
          tone={gap === null ? undefined : gap > 0 ? 'var(--overdue)' : 'var(--collected)'}
          sub={gap === null ? 'set a goal time' : gap > 0 ? 'behind goal' : 'on or ahead of goal'}
        />
        <StatCard label="goal pace" value={st.targetPaceSec ? `${formatPaceSec(st.targetPaceSec)} /km` : '—'} sub="to hit goal evenly" />
        <StatCard
          label="halves"
          value={`${formatClock(st.firstHalfSec)} / ${formatClock(st.secondHalfSec)}`}
          sub={
            st.totalSec
              ? st.secondHalfSec < st.firstHalfSec - 0.5
                ? 'negative split'
                : st.secondHalfSec > st.firstHalfSec + 0.5
                  ? 'positive split'
                  : 'even split'
              : undefined
          }
        />
      </dl>
      {st.fastest && st.slowest && (
        <dl className="mt-3 grid grid-cols-2 gap-3">
          <StatCard label="fastest segment" value={`${formatPaceSec(st.fastest.paceSec)} /km`} sub={st.fastest.label} />
          <StatCard label="slowest segment" value={`${formatPaceSec(st.slowest.paceSec)} /km`} sub={st.slowest.label} />
        </dl>
      )}
    </section>
  )
}

function StatCard({ label, value, sub, tone, big }: { label: string; value: string; sub?: string; tone?: string; big?: boolean }) {
  return (
    <div className="panel min-w-0 p-4">
      <dt className="label">{label}</dt>
      <dd className={`mono mt-1 truncate font-semibold ${big ? 'text-2xl' : 'text-lg'}`} style={{ color: tone ?? (big ? 'var(--accent)' : 'var(--ink)') }}>
        {value}
      </dd>
      {sub && (
        <dd className="mt-1 truncate text-xs" style={{ color: 'var(--ink-faint)' }}>
          {sub}
        </dd>
      )}
    </div>
  )
}

function Readout({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="label">{label}</p>
      <p className="mono mt-1.5 py-2 text-sm font-semibold">{value}</p>
    </div>
  )
}

// ---------- pace profile ----------

function PaceProfile({ projection }: { projection: Projection }) {
  const st = computeStats(projection)
  if (!st.rows.length) return null
  const paces = st.rows.map((r) => r.segment.paceSec)
  const min = Math.min(...paces)
  const max = Math.max(...paces)
  const span = Math.max(max - min, 10)

  return (
    <section>
      <h2 className="label mb-3">pace profile</h2>
      <div className="panel p-4">
        <div className="flex h-36 items-end gap-[2px]">
          {st.rows.map((r) => {
            // Faster pace = taller bar. Keep a floor so the slowest still shows.
            const h = 30 + (70 * (max - r.segment.paceSec)) / span
            return (
              <div
                key={r.segment.id}
                className="flex h-full min-w-0 flex-col justify-end"
                style={{ flexGrow: r.segment.distanceKm, flexBasis: 0 }}
                title={`${r.segment.label}: ${formatPaceSec(r.segment.paceSec)} /km for ${r.segment.distanceKm} km`}
              >
                <span className="mono mb-1 truncate text-center text-[10px]" style={{ color: 'var(--ink-soft)' }}>
                  {formatPaceSec(r.segment.paceSec)}
                </span>
                <div style={{ height: `${h}%`, background: 'var(--accent)', opacity: 0.35 + (0.65 * h) / 100, borderRadius: 'var(--radius-sm, 0) var(--radius-sm, 0) 0 0' }} />
              </div>
            )
          })}
        </div>
        <div className="mt-2 flex gap-[2px]">
          {st.rows.map((r) => (
            <span
              key={r.segment.id}
              className="label min-w-0 truncate text-center"
              style={{ flexGrow: r.segment.distanceKm, flexBasis: 0 }}
            >
              {r.segment.label}
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs" style={{ color: 'var(--ink-faint)' }}>
          Bar width is distance; height is speed — taller is faster.
        </p>
      </div>
    </section>
  )
}

function KmSplits({ projection }: { projection: Projection }) {
  const st = computeStats(projection)
  if (!st.kmSplits.length) return null
  return (
    <section>
      <h2 className="label mb-3">kilometre splits</h2>
      <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6">
        {st.kmSplits.map((k, i) => {
          const prev = i ? st.kmSplits[i - 1] : { km: 0, elapsedSec: 0 }
          const lap = k.elapsedSec - prev.elapsedSec
          const lapKm = k.km - prev.km
          return (
            <li key={k.km} className="panel p-3">
              <p className="label">km {k.km}</p>
              <p className="mono mt-1 text-sm font-semibold">{formatClock(k.elapsedSec)}</p>
              <p className="mono mt-0.5 text-[11px]" style={{ color: 'var(--ink-faint)' }}>
                lap {formatPaceSec(lap / lapKm)}
              </p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

// ---------- inputs ----------

/** Text input for m:ss that only commits valid values. */
function PaceInput({ value, onChange }: { value: number; onChange: (sec: number) => void }) {
  const [text, setText] = useState(formatPaceSec(value))
  const [focused, setFocused] = useState(false)
  const shown = focused ? text : formatPaceSec(value)
  const invalid = focused && parsePace(text) === null
  return (
    <input
      className="field mono"
      inputMode="numeric"
      placeholder="5:30"
      value={shown}
      aria-invalid={invalid}
      style={invalid ? { borderColor: 'var(--overdue)' } : undefined}
      onFocus={() => {
        setText(formatPaceSec(value))
        setFocused(true)
      }}
      onBlur={() => setFocused(false)}
      onChange={(e) => {
        setText(e.target.value)
        const p = parsePace(e.target.value)
        if (p) onChange(p)
      }}
    />
  )
}

function NumberInput({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const [text, setText] = useState(String(value))
  const [focused, setFocused] = useState(false)
  return (
    <input
      className="field mono"
      inputMode="decimal"
      value={focused ? text : String(value)}
      onFocus={() => {
        setText(String(value))
        setFocused(true)
      }}
      onBlur={() => setFocused(false)}
      onChange={(e) => {
        setText(e.target.value)
        const n = Number(e.target.value)
        if (e.target.value.trim() !== '' && Number.isFinite(n) && n >= 0) onChange(n)
      }}
    />
  )
}

function TimeInput({ value, onChange }: { value: number | null; onChange: (sec: number | null) => void }) {
  const [text, setText] = useState(value ? formatClock(value) : '')
  const [focused, setFocused] = useState(false)
  return (
    <input
      className="field mono"
      placeholder="e.g. 52:30"
      value={focused ? text : value ? formatClock(value) : ''}
      onFocus={() => {
        setText(value ? formatClock(value) : '')
        setFocused(true)
      }}
      onBlur={() => setFocused(false)}
      onChange={(e) => {
        setText(e.target.value)
        if (e.target.value.trim() === '') return onChange(null)
        const s = parseDuration(e.target.value)
        if (s) onChange(s)
      }}
    />
  )
}
