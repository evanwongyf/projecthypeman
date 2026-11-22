/**
 * Turning a project into pages.
 *
 * The context a template builds from is assembled here: the values typed into
 * the form, the students it is about, and the terminal's own records behind
 * them. Templates read records through these helpers rather than reaching into
 * the data themselves, so a report about a student knows their class, contacts,
 * points and homework without anyone retyping them.
 */
import { displayName, formatDate, formatStamp, nameKey, todayIso } from '../format'
import { totalFor, tallyFor } from '../points'
import { displayState } from '../status'
import { RELATIONSHIP_LABELS, resolveRelationships } from '../relationships'
import type { Homework, Student, TerminalData } from '../types'
import { layoutDocument, type DocLayout } from './layout'
import type { Metrics } from './fonts'
import type { BuildContext, DocField, DocTemplate, DocValues, PrefillContext } from './types'

export type PhotoMap = Record<string, { src: string; ratio: number }>

export function makePrefillContext(args: {
  data: TerminalData
  studentIds: string[]
  classId: string | null
  teacher: { name: string; username: string }
  now?: number
}): PrefillContext {
  const now = args.now ?? Date.now()
  const byId = new Map(args.data.students.map((s) => [s.id, s]))
  const students = args.studentIds.map((id) => byId.get(id)).filter((s): s is Student => !!s)
  const student = students[0] ?? null
  // The class comes from the project where one was chosen, and otherwise from
  // the subject of the document, which is what a one-student report wants.
  const classId = args.classId ?? student?.classId ?? null
  const classRoom = args.data.classes.find((c) => c.id === classId) ?? null
  return { data: args.data, student, students, classRoom, today: todayIso(now), now, teacher: args.teacher }
}

export function makeBuildContext(base: PrefillContext, values: DocValues, photos: PhotoMap): BuildContext {
  const read = (id: string) => values[id]
  return {
    ...base,
    v: (id) => {
      const value = read(id)
      if (typeof value === 'string') return value.trim()
      if (Array.isArray(value)) return value.filter((x) => typeof x === 'string').join(', ')
      return ''
    },
    list: (id) => {
      const value = read(id)
      if (Array.isArray(value)) return (value as unknown[]).filter((x): x is string => typeof x === 'string' && !!x.trim())
      if (typeof value === 'string' && value.trim()) return [value.trim()]
      return []
    },
    rows: (id) => {
      const value = read(id)
      if (!Array.isArray(value)) return []
      return (value as unknown[])
        .filter((row): row is string[] => Array.isArray(row))
        .map((row) => row.map((cell) => (typeof cell === 'string' ? cell : '')))
        // A row where every cell is blank is a row the teacher never filled in.
        .filter((row) => row.some((cell) => cell.trim()))
    },
    photo: (studentId) => photos[studentId] ?? null,
  }
}

/** The defaults for one template, resolved against the current records. */
export function prefillValues(template: DocTemplate, ctx: PrefillContext): DocValues {
  const out: DocValues = {}
  for (const section of template.sections) {
    for (const field of section.fields) {
      if (!field.prefill) continue
      try {
        out[field.id] = field.prefill(ctx)
      } catch {
        // A default that cannot be worked out is simply not a default.
      }
    }
  }
  return out
}

/**
 * Re-apply defaults after the student selection changes, without touching
 * anything the teacher has typed. A field they have written in is theirs; a
 * field still holding its old default follows the new student.
 */
export function reapplyPrefill(template: DocTemplate, before: PrefillContext, after: PrefillContext, values: DocValues): DocValues {
  const old = prefillValues(template, before)
  const next = prefillValues(template, after)
  const out = { ...values }
  for (const [id, value] of Object.entries(next)) {
    const current = out[id]
    const untouched = current === undefined || JSON.stringify(current) === JSON.stringify(old[id] ?? '')
    if (untouched) out[id] = value
  }
  return out
}

export function fieldById(template: DocTemplate, id: string): DocField | null {
  for (const section of template.sections) {
    const found = section.fields.find((f) => f.id === id)
    if (found) return found
  }
  return null
}

export function buildLayout(args: {
  metrics: Metrics
  template: DocTemplate
  ctx: BuildContext
  docName: string
}): DocLayout {
  const blocks = args.template.build(args.ctx)
  const school = args.ctx.classRoom?.school?.trim() || ''
  return layoutDocument(args.metrics, blocks, {
    family: args.template.font,
    runningTitle: args.docName || args.template.name,
    footerLeft: [school, args.ctx.teacher.name].filter(Boolean).join('  |  '),
  })
}

// ---------------------------------------------------------------- record helpers
//
// Shared by templates, so "the student's homework record" means the same thing
// in every document that reports it.

export const fullName = (s: Student | null) => s?.fullName ?? ''
export const shownName = (s: Student | null) => (s ? displayName(s) : '')

export function classLabel(ctx: PrefillContext): string {
  return ctx.classRoom ? ctx.classRoom.name : 'Unassigned'
}

export function subjectLabel(ctx: PrefillContext): string {
  return ctx.classRoom?.subject?.trim() || ''
}

export function guardianRows(student: Student | null): string[][] {
  if (!student) return []
  return student.guardians.map((g) => [g.name, g.relation ?? '', g.phone ?? '', g.email ?? ''])
}

export function primaryGuardian(student: Student | null): string {
  const g = student?.guardians[0]
  if (!g) return ''
  return g.relation ? `${g.name} (${g.relation})` : g.name
}

/** Every homework set for the document's class, due soonest first. */
export function classHomework(ctx: PrefillContext): Homework[] {
  if (!ctx.classRoom) return []
  return ctx.data.homework
    .filter((hw) => hw.classId === ctx.classRoom!.id)
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
}

/** Homework for the student's class, due soonest first. */
export function homeworkFor(ctx: PrefillContext, student: Student | null): Homework[] {
  if (!student?.classId) return []
  return ctx.data.homework
    .filter((hw) => hw.classId === student.classId)
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
}

export function homeworkRows(ctx: PrefillContext, student: Student | null): string[][] {
  if (!student) return []
  return homeworkFor(ctx, student).map((hw) => {
    const state = displayState(hw, student.id, ctx.now)
    const collected = hw.collectedAt?.[student.id]
    return [
      hw.title,
      formatDate(hw.dueDate),
      state === 'collected' ? 'Collected' : state === 'overdue' ? 'Overdue' : 'Assigned',
      collected ? formatStamp(collected) : '',
    ]
  })
}

export function homeworkSummary(ctx: PrefillContext, student: Student | null) {
  const list = homeworkFor(ctx, student)
  let collected = 0
  let overdue = 0
  for (const hw of list) {
    const state = displayState(hw, student!.id, ctx.now)
    if (state === 'collected') collected += 1
    else if (state === 'overdue') overdue += 1
  }
  return { total: list.length, collected, overdue, outstanding: list.length - collected }
}

export function pointsSummary(ctx: PrefillContext, student: Student | null) {
  if (!student) return { total: 0, positive: 0, negative: 0, entries: 0 }
  const tally = tallyFor(ctx.data.awards, student.id)
  return { ...tally, total: totalFor(ctx.data.awards, student.id) }
}

/** Awards for the student, most recent first. */
export function awardRows(ctx: PrefillContext, student: Student | null, limit = 12): string[][] {
  if (!student) return []
  return ctx.data.awards
    .filter((a) => a.studentId === student.id)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, limit)
    .map((a) => [formatStamp(a.createdAt), a.behaviourName, a.points > 0 ? `+${a.points}` : String(a.points)])
}

export function entryRows(entries: { text: string; createdAt: string }[], limit = 10): string[][] {
  return [...entries]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, limit)
    .map((e) => [formatStamp(e.createdAt), e.text])
}

export function relationshipRows(ctx: PrefillContext, student: Student | null): string[][] {
  if (!student) return []
  return resolveRelationships(student, ctx.data.students).map((r) => [r.otherLabel, RELATIONSHIP_LABELS[r.kind], String(r.notes.length)])
}

/** The roster of the document's class, surname first. */
export function rosterOf(ctx: PrefillContext): Student[] {
  if (!ctx.classRoom) return []
  return ctx.data.students
    .filter((s) => s.classId === ctx.classRoom!.id)
    .sort((a, b) => nameKey(a.fullName).localeCompare(nameKey(b.fullName)))
}

/** The students a document is about: the chosen ones, else the whole class. */
export function subjects(ctx: PrefillContext): Student[] {
  return ctx.students.length > 0 ? ctx.students : rosterOf(ctx)
}

export const dateOr = (iso: string, fallback = '') => (iso ? formatDate(iso) : fallback)
