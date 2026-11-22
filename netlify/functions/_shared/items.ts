import { ITEM_CONCEPT_MAX, ITEM_MAX_MARKS, ITEM_MAX_QUESTIONS, type HomeworkQuestion } from './types.js'

/** True when n has at most two decimal places (allowing for float noise). */
export function atMostTwoDp(n: number): boolean {
  return Math.abs(Math.round(n * 100) - n * 100) < 1e-6
}

export const round2 = (n: number) => Math.round(n * 100) / 100

/** Validate a question list, returning a clean copy or an error message. */
export function cleanQuestions(input: unknown): { questions: HomeworkQuestion[] } | { error: string } {
  if (!Array.isArray(input) || input.length === 0) return { error: 'Add at least one question.' }
  if (input.length > ITEM_MAX_QUESTIONS) return { error: `At most ${ITEM_MAX_QUESTIONS} questions.` }
  const out: HomeworkQuestion[] = []
  for (let i = 0; i < input.length; i++) {
    const q = input[i] as { marks?: unknown; concept?: unknown }
    const marks = typeof q?.marks === 'number' ? q.marks : NaN
    if (!Number.isFinite(marks) || marks <= 0) return { error: `Question ${i + 1}: full marks must be more than 0.` }
    if (marks > ITEM_MAX_MARKS) return { error: `Question ${i + 1}: full marks can be at most ${ITEM_MAX_MARKS}.` }
    if (!atMostTwoDp(marks)) return { error: `Question ${i + 1}: use at most 2 decimal places.` }
    const concept = typeof q.concept === 'string' ? q.concept.trim().slice(0, ITEM_CONCEPT_MAX) : ''
    out.push(concept ? { marks: round2(marks), concept } : { marks: round2(marks) })
  }
  return { questions: out }
}

/** Validate one student's scores against the questions. */
export function cleanScores(input: unknown, questions: HomeworkQuestion[]): { scores: (number | null)[] } | { error: string } {
  if (!Array.isArray(input) || input.length !== questions.length) {
    return { error: `Send exactly ${questions.length} scores, one per question.` }
  }
  const out: (number | null)[] = []
  for (let i = 0; i < questions.length; i++) {
    const v = input[i]
    if (v === null || v === undefined) {
      out.push(null)
      continue
    }
    if (typeof v !== 'number' || !Number.isFinite(v)) return { error: `Question ${i + 1}: enter a number.` }
    if (v < 0) return { error: `Question ${i + 1}: a score cannot be below 0.` }
    if (v > questions[i].marks + 1e-9) return { error: `Question ${i + 1}: a score cannot be more than ${questions[i].marks}.` }
    if (!atMostTwoDp(v)) return { error: `Question ${i + 1}: use at most 2 decimal places.` }
    out.push(round2(v))
  }
  return { scores: out }
}
