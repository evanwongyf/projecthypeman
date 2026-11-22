import { useEffect, useMemo, useState } from 'react'
import { CopyButton } from '../CopyButton'

// Spreads revision sessions for each topic across the days before an exam, with weaker
// topics revisited more often and the gaps between visits growing. The inputs are kept in
// this device's storage so the plan is still there next visit.

type Confidence = 'weak' | 'okay' | 'strong'
type Topic = { name: string; confidence: Confidence }

const VISITS: Record<Confidence, number[]> = {
  // Where each visit falls, as a share of the time until the exam: early first look, then
  // expanding gaps, finishing close to the exam.
  weak: [0, 0.25, 0.5, 0.75, 0.92],
  okay: [0.05, 0.4, 0.75, 0.94],
  strong: [0.15, 0.6, 0.95],
}
const NEXT: Record<Confidence, Confidence> = { weak: 'okay', okay: 'strong', strong: 'weak' }
const TONE: Record<Confidence, string> = { weak: 'var(--orange)', okay: 'var(--mustard)', strong: 'var(--mint)' }

const DAY = 86_400_000
const dayKey = (d: Date) => d.toISOString().slice(0, 10)

function plan(topics: Topic[], examDate: string, perDay: number) {
  const exam = new Date(`${examDate}T00:00:00`)
  const today = new Date(new Date().toDateString())
  const days = Math.min(90, Math.round((exam.getTime() - today.getTime()) / DAY))
  if (!topics.length || days < 2) return []
  // Study days are tomorrow up to the day before the exam.
  const span = days - 1
  const slots: string[][] = Array.from({ length: span }, () => [])
  topics.forEach((t, i) => {
    const stagger = topics.length > 1 ? (i / topics.length) * 0.12 : 0
    for (const f of VISITS[t.confidence]) {
      const ideal = Math.min(span - 1, Math.round(Math.min(1, f + stagger) * (span - 1)))
      // Nearest day with room, looking forward first so visits never bunch up early.
      let placed = false
      for (let d = 0; d < span && !placed; d++) {
        for (const day of [ideal + d, ideal - d]) {
          if (day >= 0 && day < span && slots[day].length < perDay && !slots[day].includes(t.name)) {
            slots[day].push(t.name)
            placed = true
            break
          }
        }
      }
    }
  })
  // Step by calendar day, not by 24 hours, so dates stay right across clock changes.
  const dateOf = (i: number) => {
    const d = new Date(today)
    d.setDate(d.getDate() + i + 1)
    return d
  }
  return slots.map((items, i) => ({ date: dateOf(i), items })).filter((d) => d.items.length)
}

const STORAGE_KEY = 'studytubby:revision-planner'
type Saved = { examDate: string; perDay: number; topics: Topic[] }

function loadSaved(): Saved {
  const fallback: Saved = {
    examDate: dayKey(new Date(Date.now() + 28 * DAY)),
    perDay: 3,
    topics: [
      { name: 'Cells', confidence: 'weak' },
      { name: 'Photosynthesis', confidence: 'okay' },
      { name: 'Ecosystems', confidence: 'strong' },
    ],
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return fallback
    const saved = JSON.parse(raw) as Partial<Saved>
    return {
      examDate: typeof saved.examDate === 'string' ? saved.examDate : fallback.examDate,
      perDay: typeof saved.perDay === 'number' ? saved.perDay : fallback.perDay,
      topics: Array.isArray(saved.topics) ? saved.topics.filter((t) => t && typeof t.name === 'string' && t.confidence in VISITS) : fallback.topics,
    }
  } catch {
    return fallback
  }
}

export function RevisionPlanner({ color }: { color: string }) {
  const [initial] = useState(loadSaved)
  const [examDate, setExamDate] = useState(initial.examDate)
  const [perDay, setPerDay] = useState(initial.perDay)
  const [draft, setDraft] = useState('')
  const [topics, setTopics] = useState<Topic[]>(initial.topics)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ examDate, perDay, topics }))
    } catch {
      // storage unavailable; the plan still works for this visit
    }
  }, [examDate, perDay, topics])

  const schedule = useMemo(() => plan(topics, examDate, perDay), [topics, examDate, perDay])
  const text = schedule
    .map((d) => `${d.date.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' })}: ${d.items.join(', ')}`)
    .join('\n')

  function add() {
    const names = draft
      .split(/[\n,]/)
      .map((s) => s.trim())
      .filter((s) => s && !topics.some((t) => t.name.toLowerCase() === s.toLowerCase()))
    if (names.length) setTopics((t) => [...t, ...names.map((name) => ({ name, confidence: 'okay' as const }))])
    setDraft('')
  }

  const label = 'flex flex-col gap-1 text-xs font-bold uppercase'
  const soft = { color: 'var(--ink-soft)' }

  return (
    <div className="card-surface flex flex-col gap-4 rounded-[var(--radius)] p-4 sm:p-5">
      <div>
        <p className="eyebrow font-bold">try it</p>
        <p className="font-bold">Revision planner</p>
        <p className="text-sm" style={soft}>
          Add your topics and tap each one to rate your confidence. Weak topics come back more often, with growing gaps between visits.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className={label} style={soft}>
          Exam date
          <input type="date" className="input-field w-full text-sm" value={examDate} onChange={(e) => setExamDate(e.target.value)} />
        </label>
        <label className={label} style={soft}>
          Topics per day
          <input type="number" min={1} max={8} className="input-field w-full text-sm" value={perDay} onChange={(e) => setPerDay(Math.max(1, Math.min(8, +e.target.value || 1)))} />
        </label>
      </div>

      <div>
        <p className="mb-1.5 text-xs font-bold uppercase" style={soft}>
          Topics · tap to change confidence
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {topics.map((t) => (
            <li key={t.name} className="flex items-center overflow-hidden rounded-full border" style={{ borderColor: 'var(--line)' }}>
              <button
                type="button"
                onClick={() => setTopics((all) => all.map((x) => (x.name === t.name ? { ...x, confidence: NEXT[x.confidence] } : x)))}
                className="px-3 py-1.5 text-sm font-bold pointer-coarse:min-h-11"
                style={{ background: `color-mix(in srgb, ${TONE[t.confidence]} 45%, var(--surface))` }}
                aria-label={`${t.name}, ${t.confidence}. Change confidence`}
              >
                {t.name} · <span className="font-normal">{t.confidence}</span>
              </button>
              <button
                type="button"
                onClick={() => setTopics((all) => all.filter((x) => x.name !== t.name))}
                className="border-l-2 px-2.5 py-1.5 text-sm font-bold pointer-coarse:min-h-11"
                style={{ borderColor: 'var(--line)' }}
                aria-label={`Remove ${t.name}`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
        <form
          className="mt-2 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            add()
          }}
        >
          <input className="input-field min-w-0 flex-1 text-sm" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Add topics, separated by commas" />
          <button type="submit" className="btn btn-ghost px-4 py-2 text-sm pointer-coarse:min-h-11">
            Add
          </button>
        </form>
      </div>

      <div className="rounded-[var(--radius)] border p-4" style={{ borderColor: 'var(--line)', background: `color-mix(in srgb, ${color} 14%, var(--surface))` }}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="eyebrow font-bold">your plan · {schedule.length} study days</p>
          {schedule.length > 0 && <CopyButton src={text} plain label="Copy plan" />}
        </div>
        {schedule.length === 0 ? (
          <p className="mt-2 text-sm" style={soft}>
            {topics.length ? 'Pick an exam date at least two days away.' : 'Add a topic to get started.'}
          </p>
        ) : (
          <ol className="mt-2 flex max-h-80 flex-col gap-1 overflow-y-auto pr-1 text-sm">
            {schedule.map((d) => (
              <li key={d.date.toISOString()} className="flex flex-wrap gap-x-3 gap-y-1 border-b py-1.5 last:border-b-0" style={{ borderColor: 'var(--line)' }}>
                <span className="w-24 shrink-0 font-mono text-xs font-bold" style={{ paddingTop: 2 }}>
                  {d.date.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' })}
                </span>
                <span className="min-w-0 flex-1">{d.items.join(' · ')}</span>
              </li>
            ))}
          </ol>
        )}
        <p className="mt-3 text-xs" style={soft}>
          In each session, test yourself first (blurt, flashcards or past questions), then check. Keep the day before the exam light.
        </p>
      </div>
    </div>
  )
}
