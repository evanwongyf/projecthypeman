import { useEffect, useMemo, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../lib/api'
import { useData } from '../../lib/data-context'
import { displayName } from '../../lib/format'
import {
  MIN_FOR_DISCRIMINATION,
  conceptStats,
  discriminationBand,
  facilityBand,
  fmtMark,
  parseFullMarks,
  parseScore,
  questionStats,
  round2,
  studentResult,
  summary,
  type ScoreRow,
} from '../../lib/items'
import { ITEM_CONCEPT_MAX, ITEM_MAX_QUESTIONS, type Homework, type Student } from '../../lib/types'
import { BarChart } from '../charts/Charts'
import { ConfirmModal } from '../ConfirmModal'
import { Field } from '../Field'
import { IconCheck, IconEdit, IconTrash } from '../Icons'

/**
 * Question-by-question marking for one piece of homework: set up the paper,
 * key in each student's marks, and read the item analysis.
 */
export function ItemAnalysis({ hw, roster }: { hw: Homework; roster: Student[] }) {
  const [editing, setEditing] = useState(false)
  const [removing, setRemoving] = useState(false)
  const { reload } = useData()

  if (!hw.questions?.length || editing) {
    return <ItemSetup hw={hw} onDone={() => setEditing(false)} onCancel={hw.questions?.length ? () => setEditing(false) : undefined} />
  }

  const questions = hw.questions
  const total = round2(questions.reduce((a, q) => a + q.marks, 0))

  return (
    <div className="space-y-8">
      <div className="panel flex flex-wrap items-center justify-between gap-3 p-4">
        <div>
          <p className="label">paper</p>
          <p className="mt-1 text-sm">
            <span className="mono font-semibold">{questions.length}</span> question{questions.length === 1 ? '' : 's'} ·{' '}
            <span className="mono font-semibold">{fmtMark(total)}</span> marks
            {questions.some((q) => q.concept) && (
              <span style={{ color: 'var(--ink-soft)' }}> · {new Set(questions.filter((q) => q.concept).map((q) => q.concept!.toLowerCase())).size} concepts</span>
            )}
          </p>
        </div>
        <div className="flex gap-2">
          <button type="button" className="btn btn-ghost" onClick={() => setRemoving(true)}>
            <IconTrash />
            Remove
          </button>
          <button type="button" className="btn" onClick={() => setEditing(true)}>
            <IconEdit />
            Edit questions
          </button>
        </div>
      </div>

      <MarkingGrid hw={hw} roster={roster} />
      <Report hw={hw} roster={roster} />

      {removing && (
        <ConfirmModal
          title="Remove item analysis?"
          body="The question set-up and every mark keyed in for this homework are deleted. Collection status is untouched."
          confirmLabel="Remove"
          onConfirm={async () => {
            await api.clearHomeworkQuestions(hw.id)
            await reload()
          }}
          onClose={() => setRemoving(false)}
        />
      )}
    </div>
  )
}

// ── set-up ───────────────────────────────────────────────────────────────────

type DraftQ = { marks: string; concept: string }

function ItemSetup({ hw, onDone, onCancel }: { hw: Homework; onDone: () => void; onCancel?: () => void }) {
  const { reload } = useData()
  const [rows, setRows] = useState<DraftQ[]>(() =>
    hw.questions?.length ? hw.questions.map((q) => ({ marks: fmtMark(q.marks), concept: q.concept ?? '' })) : [],
  )
  const [count, setCount] = useState(String(hw.questions?.length ?? ''))
  const [allMarks, setAllMarks] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [confirmReset, setConfirmReset] = useState(false)
  const [touched, setTouched] = useState(false)

  const n = Number(count)
  const countError =
    count.trim() === '' ? null : !Number.isInteger(n) || n < 1 ? 'Enter a whole number from 1' : n > ITEM_MAX_QUESTIONS ? `At most ${ITEM_MAX_QUESTIONS}` : null

  function applyCount(raw: string) {
    setCount(raw)
    const k = Number(raw)
    if (!Number.isInteger(k) || k < 1 || k > ITEM_MAX_QUESTIONS) return
    setRows((prev) => (k <= prev.length ? prev.slice(0, k) : [...prev, ...Array.from({ length: k - prev.length }, () => ({ marks: allMarks || '', concept: '' }))]))
  }

  const parsed = rows.map((r) => parseFullMarks(r.marks))
  const valid = rows.length > 0 && parsed.every((p) => !p.error)
  const total = round2(parsed.reduce((a, p) => a + (p.value ?? 0), 0))
  const concepts = [...new Set(rows.map((r) => r.concept.trim()).filter(Boolean))]

  const marked = Object.values(hw.scores ?? {}).filter((r) => r.some((v) => v !== null)).length
  const old = hw.questions ?? []
  const shapeChanged = old.length !== rows.length || old.some((q, i) => parsed[i]?.value !== q.marks)

  async function save(reset: boolean) {
    setBusy(true)
    setError(null)
    try {
      await api.setHomeworkQuestions(
        hw.id,
        rows.map((r, i) => ({ marks: parsed[i].value!, concept: r.concept.trim() || undefined })),
        reset,
      )
      await reload()
      onDone()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save.')
      setBusy(false)
    }
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    setTouched(true)
    if (!valid) return setError('Fix the highlighted full marks first.')
    if (marked > 0 && shapeChanged) return setConfirmReset(true)
    void save(false)
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="panel space-y-4 p-5">
        <div>
          <p className="label">set up item analysis</p>
          <p className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
            Say how many questions there are, the full marks for each and, if you like, the concept each one tests. Then mark scripts question by question and the analysis builds itself.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Number of questions" required hint={`1 to ${ITEM_MAX_QUESTIONS}`}>
            <input
              className="field mono"
              inputMode="numeric"
              value={count}
              onChange={(e) => applyCount(e.target.value)}
              placeholder="e.g. 8"
              aria-invalid={!!countError}
              style={countError ? { borderColor: 'var(--overdue)' } : undefined}
            />
            {countError && <p className="mt-1 font-mono text-[11px]" style={{ color: 'var(--overdue)' }}>{countError}</p>}
          </Field>
          <Field label="Same full marks for every question" hint="optional">
            <div className="flex gap-2">
              <input className="field mono" inputMode="decimal" value={allMarks} onChange={(e) => setAllMarks(e.target.value)} placeholder="e.g. 2" />
              <button
                type="button"
                className="btn shrink-0"
                disabled={!rows.length || !!parseFullMarks(allMarks).error}
                onClick={() => setRows((prev) => prev.map((r) => ({ ...r, marks: allMarks.trim() })))}
              >
                Apply
              </button>
            </div>
          </Field>
        </div>
      </div>

      {rows.length > 0 && (
        <div className="panel overflow-hidden">
          <div className="grid grid-cols-[3rem_7rem_1fr] gap-3 border-b px-4 py-2" style={{ borderColor: 'var(--line)' }}>
            <span className="label">no.</span>
            <span className="label">full marks</span>
            <span className="label">concept tested (optional)</span>
          </div>
          <ul className="divide-y" style={{ borderColor: 'var(--line-soft)' }}>
            {rows.map((r, i) => {
              const err = (touched || r.marks !== '') && parsed[i].error
              return (
                <li key={i} className="grid grid-cols-[3rem_7rem_1fr] items-start gap-3 px-4 py-2">
                  <span className="mono pt-2 text-sm font-semibold">Q{i + 1}</span>
                  <div>
                    <input
                      className="field mono !py-1.5"
                      inputMode="decimal"
                      aria-label={`Question ${i + 1} full marks`}
                      value={r.marks}
                      onChange={(e) => setRows((prev) => prev.map((x, j) => (j === i ? { ...x, marks: e.target.value } : x)))}
                      aria-invalid={!!err}
                      style={err ? { borderColor: 'var(--overdue)' } : undefined}
                    />
                    {err && <p className="mt-1 font-mono text-[10px]" style={{ color: 'var(--overdue)' }}>{err}</p>}
                  </div>
                  <input
                    className="field !py-1.5"
                    list="concept-suggestions"
                    maxLength={ITEM_CONCEPT_MAX}
                    aria-label={`Question ${i + 1} concept`}
                    value={r.concept}
                    onChange={(e) => setRows((prev) => prev.map((x, j) => (j === i ? { ...x, concept: e.target.value } : x)))}
                    placeholder="e.g. fractions: equivalent fractions"
                  />
                </li>
              )
            })}
          </ul>
          <datalist id="concept-suggestions">
            {concepts.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t px-4 py-3" style={{ borderColor: 'var(--line)' }}>
            <span className="text-sm">
              Total <span className="mono font-semibold">{fmtMark(total)}</span> marks
            </span>
            <div className="flex gap-2">
              {onCancel && (
                <button type="button" className="btn btn-ghost" onClick={onCancel}>
                  Cancel
                </button>
              )}
              <button type="submit" className="btn btn-primary" disabled={busy || !rows.length}>
                <IconCheck />
                {busy ? 'Saving…' : hw.questions?.length ? 'Save questions' : 'Initialise'}
              </button>
            </div>
          </div>
        </div>
      )}

      {error && <p className="font-mono text-xs" style={{ color: 'var(--overdue)' }}>{error}</p>}

      {confirmReset && (
        <ConfirmModal
          title="Clear the marks already entered?"
          body={`${marked} student${marked === 1 ? ' has' : 's have'} marks keyed in. Changing the number of questions or their full marks clears every mark for this homework. Changing only the concepts keeps them.`}
          confirmLabel="Clear marks and save"
          onConfirm={() => save(true)}
          onClose={() => setConfirmReset(false)}
        />
      )}
    </form>
  )
}

// ── marking grid ─────────────────────────────────────────────────────────────

type RowStatus = { state: 'idle' | 'saving' | 'saved' | 'error'; message?: string }

const toDraft = (scores: (number | null)[] | undefined, n: number) =>
  Array.from({ length: n }, (_, i) => (scores?.[i] === null || scores?.[i] === undefined ? '' : fmtMark(scores[i]!)))

function MarkingGrid({ hw, roster }: { hw: Homework; roster: Student[] }) {
  const { reload } = useData()
  const questions = hw.questions!
  const total = round2(questions.reduce((a, q) => a + q.marks, 0))
  const [drafts, setDrafts] = useState<Record<string, string[]>>({})
  const [status, setStatus] = useState<Record<string, RowStatus>>({})
  const table = useRef<HTMLTableElement>(null)

  // Saved values for each student; a draft exists only while a row is being edited.
  const saved = (id: string) => toDraft(hw.scores?.[id], questions.length)
  const valueOf = (id: string) => drafts[id] ?? saved(id)
  // Compare by value, so ".5" and "0.5" count as the same mark.
  const norm = (row: string[]) =>
    row
      .map((raw, i) => {
        const p = parseScore(raw, questions[i]?.marks ?? 0)
        return p.error ? `!${raw}` : p.value === null ? '' : fmtMark(p.value)
      })
      .join('|')
  const same = (row: string[], id: string) => norm(row) === norm(saved(id))

  // Drop drafts that now match what the server has.
  useEffect(() => {
    setDrafts((prev) => {
      const next: Record<string, string[]> = {}
      for (const [id, d] of Object.entries(prev)) if (!same(d, id)) next[id] = d
      return next
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hw.scores, questions.length])

  function edit(id: string, q: number, raw: string) {
    setDrafts((prev) => {
      const row = [...(prev[id] ?? saved(id))]
      row[q] = raw
      return { ...prev, [id]: row }
    })
    setStatus((s) => ({ ...s, [id]: { state: 'idle' } }))
  }

  async function saveRow(id: string, row = drafts[id]) {
    if (!row || same(row, id)) return
    const parsed = row.map((raw, i) => parseScore(raw, questions[i].marks))
    const bad = parsed.findIndex((p) => p.error)
    if (bad !== -1) {
      setStatus((s) => ({ ...s, [id]: { state: 'error', message: `Q${bad + 1}: ${parsed[bad].error}. Not saved.` } }))
      return
    }
    setStatus((s) => ({ ...s, [id]: { state: 'saving' } }))
    try {
      await api.setHomeworkScores(hw.id, id, parsed.map((p) => p.value))
      await reload()
      setStatus((s) => ({ ...s, [id]: { state: 'saved' } }))
    } catch (err) {
      setStatus((s) => ({ ...s, [id]: { state: 'error', message: err instanceof Error ? err.message : 'Could not save.' } }))
    }
  }

  function focusCell(r: number, q: number) {
    const el = table.current?.querySelector<HTMLInputElement>(`input[data-cell="${r}-${q}"]`)
    if (el) {
      el.focus()
      el.select()
    }
  }

  function onKey(e: KeyboardEvent<HTMLInputElement>, r: number, q: number) {
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
      e.preventDefault()
      focusCell(e.shiftKey ? r - 1 : r + 1, q)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      focusCell(r - 1, q)
    }
  }

  const markedCount = roster.filter((s) => hw.scores?.[s.id]?.some((v) => v !== null)).length

  return (
    <section>
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="label">marks by question</h2>
        <span className="mono text-xs" style={{ color: 'var(--ink-faint)' }}>
          {markedCount}/{roster.length} marked · saves when you leave a row · Enter moves down
        </span>
      </div>
      {roster.length === 0 ? (
        <div className="panel px-4 py-8 text-center">
          <p className="label">no students in this class</p>
        </div>
      ) : (
        <div className="panel overflow-x-auto">
          <table ref={table} className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--line)' }}>
                <th className="label sticky left-0 z-10 px-3 py-2 text-left" style={{ background: 'var(--panel)' }}>
                  student
                </th>
                {questions.map((q, i) => (
                  <th key={i} className="px-1 py-2 text-center align-bottom" title={q.concept || undefined}>
                    <span className="mono block text-xs font-semibold">Q{i + 1}</span>
                    <span className="mono block text-[10px]" style={{ color: 'var(--ink-faint)' }}>
                      /{fmtMark(q.marks)}
                    </span>
                  </th>
                ))}
                <th className="label px-3 py-2 text-right">total /{fmtMark(total)}</th>
                <th className="px-2 py-2" />
              </tr>
            </thead>
            <tbody>
              {roster.map((s, r) => {
                const row = valueOf(s.id)
                const parsed = row.map((raw, i) => parseScore(raw, questions[i].marks))
                const res = studentResult({ studentId: s.id, scores: parsed.map((p) => p.value) }, questions)
                const st = status[s.id]
                const dirty = !!drafts[s.id] && !same(drafts[s.id], s.id)
                const firstErr = parsed.find((p) => p.error)?.error
                return (
                  <tr
                    key={s.id}
                    className="border-b align-top"
                    style={{ borderColor: 'var(--line-soft)' }}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) void saveRow(s.id)
                    }}
                  >
                    <td className="sticky left-0 z-10 px-3 py-2" style={{ background: 'var(--panel)' }}>
                      <Link to={`/students/${s.id}`} className="block max-w-[11rem] truncate font-medium hover:underline">
                        {displayName(s)}
                      </Link>
                      <span
                        className="mono block text-[10px]"
                        style={{ color: st?.state === 'error' || firstErr ? 'var(--overdue)' : 'var(--ink-faint)' }}
                      >
                        {st?.state === 'error'
                          ? st.message
                          : firstErr
                            ? firstErr
                            : st?.state === 'saving'
                              ? 'saving…'
                              : dirty
                                ? 'unsaved'
                                : st?.state === 'saved'
                                  ? 'saved'
                                  : res.marked === 0
                                    ? 'not marked'
                                    : res.complete
                                      ? 'marked'
                                      : `${res.marked}/${questions.length} questions`}
                      </span>
                    </td>
                    {questions.map((q, i) => {
                      const err = parsed[i].error
                      return (
                        <td key={i} className="px-1 py-1.5">
                          <input
                            data-cell={`${r}-${i}`}
                            className="field mono !w-[3.6rem] !px-1.5 !py-1 text-center"
                            inputMode="decimal"
                            autoComplete="off"
                            aria-label={`${displayName(s)}, question ${i + 1}, out of ${fmtMark(q.marks)}`}
                            aria-invalid={!!err}
                            title={err ?? `out of ${fmtMark(q.marks)}`}
                            value={row[i]}
                            onChange={(e) => edit(s.id, i, e.target.value)}
                            onKeyDown={(e) => onKey(e, r, i)}
                            onFocus={(e) => e.currentTarget.select()}
                            style={err ? { borderColor: 'var(--overdue)', color: 'var(--overdue)' } : undefined}
                          />
                        </td>
                      )
                    })}
                    <td className="mono px-3 py-2 text-right whitespace-nowrap">
                      {res.marked ? (
                        <>
                          <span className="font-semibold">{fmtMark(res.total)}</span>
                          <span className="block text-[10px]" style={{ color: 'var(--ink-faint)' }}>
                            {res.complete ? `${Math.round((res.total / total) * 100)}%` : `of ${fmtMark(res.outOf)} so far`}
                          </span>
                        </>
                      ) : (
                        <span style={{ color: 'var(--ink-faint)' }}>-</span>
                      )}
                    </td>
                    <td className="px-2 py-1.5">
                      <button
                        type="button"
                        className="btn btn-ghost !px-2 !py-1 text-xs whitespace-nowrap"
                        title="Give full marks for every question not yet marked"
                        onClick={() => {
                          const next = row.map((raw, i) => (raw.trim() === '' ? fmtMark(questions[i].marks) : raw))
                          setDrafts((prev) => ({ ...prev, [s.id]: next }))
                          void saveRow(s.id, next)
                        }}
                      >
                        Fill full
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

// ── report ───────────────────────────────────────────────────────────────────

const pct = (x: number, d = 0) => `${(x * 100).toFixed(d)}%`

function Report({ hw, roster }: { hw: Homework; roster: Student[] }) {
  const questions = hw.questions!
  const total = round2(questions.reduce((a, q) => a + q.marks, 0))
  const rows: ScoreRow[] = useMemo(
    () => roster.filter((s) => hw.scores?.[s.id]?.some((v) => v !== null)).map((s) => ({ studentId: s.id, scores: hw.scores![s.id] })),
    [roster, hw.scores],
  )
  const qs = useMemo(() => questionStats(questions, rows), [questions, rows])
  const concepts = useMemo(() => conceptStats(questions, rows), [questions, rows])
  const results = rows.map((r) => studentResult(r, questions))
  const complete = results.filter((r) => r.complete)
  const sum = summary(complete.map((r) => (r.total / total) * 100))
  const byId = new Map(roster.map((s) => [s.id, s]))

  if (!rows.length) {
    return (
      <section className="panel px-4 py-8 text-center">
        <p className="label">item analysis</p>
        <p className="mt-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
          Key in marks above and the analysis appears here: how hard each question was, how well it separated stronger from weaker scripts, and which concepts need reteaching.
        </p>
      </section>
    )
  }

  const hardest = [...qs].filter((q) => q.n).sort((a, b) => a.facility - b.facility).slice(0, 3)
  const flagged = qs.filter((q) => q.discrimination !== null && q.discrimination < 0.2)
  const bins = Array.from({ length: 10 }, (_, i) => ({
    label: i === 9 ? '90–100%' : `${i * 10}–${i * 10 + 9}%`,
    value: complete.filter((r) => Math.min(Math.floor(((r.total / total) * 100) / 10), 9) === i).length,
  }))
  const support = [...complete].sort((a, b) => a.total - b.total).slice(0, Math.min(5, Math.ceil(complete.length * 0.2)))

  return (
    <section className="space-y-6">
      <h2 className="label">item analysis</h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="scripts marked" value={`${complete.length}${rows.length > complete.length ? ` + ${rows.length - complete.length} partial` : ''}`} />
        <Stat label="class mean" value={sum ? `${sum.mean.toFixed(1)}%` : '-'} sub={sum ? `${fmtMark(round2((sum.mean / 100) * total))} / ${fmtMark(total)}` : undefined} />
        <Stat label="median" value={sum ? `${sum.median.toFixed(1)}%` : '-'} sub={sum ? `spread (sd) ${sum.sd.toFixed(1)} pts` : undefined} />
        <Stat label="range" value={sum ? `${sum.min.toFixed(0)}–${sum.max.toFixed(0)}%` : '-'} />
      </div>

      <div className="panel overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b text-left" style={{ borderColor: 'var(--line)' }}>
              <th className="label px-3 py-2">question</th>
              <th className="label px-3 py-2">concept</th>
              <th className="label px-3 py-2 text-right">mean</th>
              <th className="label min-w-[10rem] px-3 py-2">facility</th>
              <th className="label px-3 py-2 text-right">full marks</th>
              <th className="label px-3 py-2 text-right">zero</th>
              <th className="label px-3 py-2">discrimination</th>
            </tr>
          </thead>
          <tbody>
            {qs.map((q) => {
              const f = facilityBand(q.facility)
              const d = discriminationBand(q.discrimination)
              return (
                <tr key={q.index} className="border-b" style={{ borderColor: 'var(--line-soft)' }}>
                  <td className="mono px-3 py-2 font-semibold">
                    Q{q.index + 1} <span className="font-normal" style={{ color: 'var(--ink-faint)' }}>/{fmtMark(q.marks)}</span>
                  </td>
                  <td className="max-w-[14rem] truncate px-3 py-2" style={{ color: 'var(--ink-soft)' }} title={q.concept}>
                    {q.concept || '-'}
                  </td>
                  <td className="mono px-3 py-2 text-right">{q.n ? fmtMark(round2(q.mean)) : '-'}</td>
                  <td className="px-3 py-2">
                    {q.n ? (
                      <div className="flex items-center gap-2">
                        <span className="relative h-2 w-20 shrink-0 overflow-hidden rounded-full" style={{ background: 'var(--line-soft)' }}>
                          <span className="absolute inset-y-0 left-0" style={{ width: pct(q.facility), background: f.tone }} />
                        </span>
                        <span className="mono text-xs">{q.facility.toFixed(2)}</span>
                        <span className="text-[11px]" style={{ color: f.tone }}>
                          {f.label}
                        </span>
                      </div>
                    ) : (
                      <span style={{ color: 'var(--ink-faint)' }}>no marks yet</span>
                    )}
                  </td>
                  <td className="mono px-3 py-2 text-right">{q.n ? pct(q.fullShare) : '-'}</td>
                  <td className="mono px-3 py-2 text-right">{q.n ? pct(q.zeroShare) : '-'}</td>
                  <td className="px-3 py-2">
                    <span className="mono text-xs">{q.discrimination === null ? '-' : q.discrimination.toFixed(2)}</span>{' '}
                    <span className="text-[11px]" style={{ color: d.tone }}>
                      {d.label}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <p className="px-3 py-2 text-[11px]" style={{ color: 'var(--ink-faint)' }}>
          Facility is the share of the marks the class earned (0 = nobody scored, 1 = everyone full marks). Discrimination compares the top and bottom 27% of complete scripts: how much
          better the stronger students did on this question, as a share of its marks. It needs at least {MIN_FOR_DISCRIMINATION} complete scripts.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="panel space-y-3 p-4">
          <p className="label">what stands out</p>
          <ul className="space-y-2 text-sm">
            {hardest.length > 0 && (
              <li>
                <b>Hardest:</b>{' '}
                {hardest.map((q) => `Q${q.index + 1} (${pct(q.facility)}${q.concept ? `, ${q.concept}` : ''})`).join('; ')}.
              </li>
            )}
            {concepts.length > 0 && (
              <li>
                <b>Weakest concept:</b> {concepts[0].concept}, {concepts[0].percent.toFixed(0)}% of marks earned across Q
                {concepts[0].questions.map((i) => i + 1).join(', Q')}.
              </li>
            )}
            {flagged.length > 0 && (
              <li>
                <b>Check these questions:</b> {flagged.map((q) => `Q${q.index + 1}`).join(', ')} barely separate stronger and weaker scripts
                {flagged.some((q) => (q.discrimination ?? 0) < 0) ? ' (a negative value often means the answer key or marking needs a second look)' : ''}.
              </li>
            )}
            {qs.filter((q) => q.n && q.facility > 0.95).length > 0 && (
              <li>
                <b>Almost everyone got:</b>{' '}
                {qs
                  .filter((q) => q.n && q.facility > 0.95)
                  .map((q) => `Q${q.index + 1}`)
                  .join(', ')}
                . Little to reteach here.
              </li>
            )}
            {support.length > 0 && (
              <li>
                <b>May need support:</b>{' '}
                {support.map((r) => `${byId.get(r.studentId) ? displayName(byId.get(r.studentId)!) : 'Removed student'} (${Math.round((r.total / total) * 100)}%)`).join(', ')}.
              </li>
            )}
            {complete.length < MIN_FOR_DISCRIMINATION && (
              <li style={{ color: 'var(--ink-soft)' }}>Mark at least {MIN_FOR_DISCRIMINATION} complete scripts to see discrimination.</li>
            )}
          </ul>
        </div>

        <div className="panel space-y-3 p-4">
          <p className="label">score distribution (complete scripts)</p>
          {complete.length ? (
            <div className="viz">
              <BarChart rows={bins} format={(v) => `${v} student${v === 1 ? '' : 's'}`} />
            </div>
          ) : (
            <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
              No complete scripts yet.
            </p>
          )}
        </div>
      </div>

      {concepts.length > 0 && (
        <div className="panel space-y-3 p-4">
          <p className="label">by concept, weakest first</p>
          <div className="viz">
            <BarChart rows={concepts.map((c) => ({ label: c.concept, value: Math.round(c.percent * 10) / 10, note: `Q${c.questions.map((i) => i + 1).join(', Q')}` }))} unit="%" />
          </div>
          <p className="text-[11px]" style={{ color: 'var(--ink-faint)' }}>
            Share of available marks earned on the questions tagged with each concept. Hover a bar to see its questions. Untagged questions are not counted here.
          </p>
        </div>
      )}
    </section>
  )
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="panel p-4">
      <p className="label">{label}</p>
      <p className="mono mt-1.5 text-xl font-semibold">{value}</p>
      {sub && (
        <p className="mono mt-0.5 text-[10px]" style={{ color: 'var(--ink-faint)' }}>
          {sub}
        </p>
      )}
    </div>
  )
}
