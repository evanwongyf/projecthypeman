import { ITEM_MAX_MARKS, type HomeworkQuestion } from './types'

/** At most two decimal places, allowing for float noise. */
export function atMostTwoDp(n: number): boolean {
  return Math.abs(Math.round(n * 100) - n * 100) < 1e-6
}

export const round2 = (n: number) => Math.round(n * 100) / 100

/** Format a mark without trailing zeros: 2, 2.5, 2.75. */
export function fmtMark(n: number): string {
  return String(round2(n))
}

const NUMBER = /^(\d+(\.\d*)?|\.\d+)$/

/**
 * Read what a teacher typed into a score cell. Empty means "not marked yet".
 * Accepts decimals ("2.5", ".5"); rejects anything below 0, above the
 * question's full marks, or with more than two decimal places.
 */
export function parseScore(raw: string, max: number): { value: number | null; error?: string } {
  const s = raw.trim().replace(',', '.')
  if (s === '') return { value: null }
  if (s.startsWith('-') || s.startsWith('−')) return { value: null, error: 'Cannot be below 0' }
  if (!NUMBER.test(s)) return { value: null, error: 'Enter a number' }
  const n = Number(s)
  if (!Number.isFinite(n)) return { value: null, error: 'Enter a number' }
  if (!atMostTwoDp(n)) return { value: null, error: 'Use at most 2 decimal places' }
  if (n > max + 1e-9) return { value: null, error: `Cannot be more than ${fmtMark(max)}` }
  return { value: round2(n) }
}

/** Read a question's full marks in the set-up form. */
export function parseFullMarks(raw: string): { value: number | null; error?: string } {
  const s = raw.trim().replace(',', '.')
  if (s === '') return { value: null, error: 'Required' }
  if (s.startsWith('-') || s.startsWith('−')) return { value: null, error: 'Must be more than 0' }
  if (!NUMBER.test(s)) return { value: null, error: 'Enter a number' }
  const n = Number(s)
  if (n <= 0) return { value: null, error: 'Must be more than 0' }
  if (n > ITEM_MAX_MARKS) return { value: null, error: `At most ${ITEM_MAX_MARKS}` }
  if (!atMostTwoDp(n)) return { value: null, error: 'At most 2 decimal places' }
  return { value: round2(n) }
}

export type ScoreRow = { studentId: string; scores: (number | null)[] }

export type StudentResult = {
  studentId: string
  total: number
  /** Full marks of the questions marked so far. */
  outOf: number
  marked: number
  complete: boolean
  /** Of the questions marked so far. */
  percent: number
}

export function studentResult(row: ScoreRow, questions: HomeworkQuestion[]): StudentResult {
  let total = 0
  let outOf = 0
  let marked = 0
  row.scores.forEach((v, i) => {
    if (v === null || v === undefined || !questions[i]) return
    total += v
    outOf += questions[i].marks
    marked++
  })
  return {
    studentId: row.studentId,
    total: round2(total),
    outOf: round2(outOf),
    marked,
    complete: marked === questions.length,
    percent: outOf ? (total / outOf) * 100 : 0,
  }
}

export type QuestionStat = {
  index: number
  marks: number
  concept?: string
  /** Students with a mark for this question. */
  n: number
  mean: number
  /** Mean ÷ full marks, 0–1: the share of the marks the class earned. */
  facility: number
  fullShare: number
  zeroShare: number
  /** Upper 27% minus lower 27% (by total), ÷ full marks. Null with too few complete scripts. */
  discrimination: number | null
}

/** Ebel's bands for the discrimination index. */
export function discriminationBand(d: number | null): { label: string; tone: string } {
  if (d === null) return { label: 'not enough scripts', tone: 'var(--ink-faint)' }
  if (d < 0) return { label: 'negative: check the answer key', tone: 'var(--overdue)' }
  if (d < 0.2) return { label: 'poor', tone: 'var(--overdue)' }
  if (d < 0.3) return { label: 'fair', tone: 'var(--assigned)' }
  if (d < 0.4) return { label: 'good', tone: 'var(--collected)' }
  return { label: 'very good', tone: 'var(--collected)' }
}

export function facilityBand(f: number): { label: string; tone: string } {
  if (f < 0.3) return { label: 'hard', tone: 'var(--overdue)' }
  if (f <= 0.8) return { label: 'moderate', tone: 'var(--assigned)' }
  return { label: 'easy', tone: 'var(--collected)' }
}

/** The smallest number of complete scripts for a discrimination index. */
export const MIN_FOR_DISCRIMINATION = 6

export function questionStats(questions: HomeworkQuestion[], rows: ScoreRow[]): QuestionStat[] {
  const results = rows.map((r) => ({ row: r, res: studentResult(r, questions) }))
  const complete = results.filter((x) => x.res.complete).sort((a, b) => b.res.total - a.res.total)
  const k = Math.max(1, Math.round(complete.length * 0.27))
  const upper = complete.slice(0, k)
  const lower = complete.slice(-k)
  const enough = complete.length >= MIN_FOR_DISCRIMINATION

  return questions.map((q, i) => {
    const vals = rows.map((r) => r.scores[i]).filter((v): v is number => v !== null && v !== undefined)
    const n = vals.length
    const mean = n ? vals.reduce((a, b) => a + b, 0) / n : 0
    const avg = (grp: typeof upper) => grp.reduce((a, x) => a + (x.row.scores[i] ?? 0), 0) / grp.length
    return {
      index: i,
      marks: q.marks,
      concept: q.concept,
      n,
      mean,
      facility: n ? mean / q.marks : 0,
      fullShare: n ? vals.filter((v) => v >= q.marks - 1e-9).length / n : 0,
      zeroShare: n ? vals.filter((v) => v === 0).length / n : 0,
      discrimination: enough ? (avg(upper) - avg(lower)) / q.marks : null,
    }
  })
}

export type ConceptStat = { concept: string; questions: number[]; marks: number; earned: number; possible: number; percent: number }

/** Performance grouped by the concept each question tests. Unlabelled questions are left out. */
export function conceptStats(questions: HomeworkQuestion[], rows: ScoreRow[]): ConceptStat[] {
  const map = new Map<string, ConceptStat>()
  questions.forEach((q, i) => {
    const name = q.concept?.trim()
    if (!name) return
    const key = name.toLowerCase()
    const c = map.get(key) ?? { concept: name, questions: [], marks: 0, earned: 0, possible: 0, percent: 0 }
    c.questions.push(i)
    c.marks += q.marks
    for (const r of rows) {
      const v = r.scores[i]
      if (v === null || v === undefined) continue
      c.earned += v
      c.possible += q.marks
    }
    map.set(key, c)
  })
  return [...map.values()]
    .map((c) => ({ ...c, percent: c.possible ? (c.earned / c.possible) * 100 : 0 }))
    .sort((a, b) => a.percent - b.percent)
}

export function summary(values: number[]) {
  if (!values.length) return null
  const sorted = [...values].sort((a, b) => a - b)
  const mean = values.reduce((a, b) => a + b, 0) / values.length
  const mid = sorted.length / 2
  const median = sorted.length % 2 ? sorted[Math.floor(mid)] : (sorted[mid - 1] + sorted[mid]) / 2
  const sd = Math.sqrt(values.reduce((a, v) => a + (v - mean) ** 2, 0) / values.length)
  return { mean, median, min: sorted[0], max: sorted[sorted.length - 1], sd, n: values.length }
}
