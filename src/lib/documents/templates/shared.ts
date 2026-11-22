/**
 * The pieces every template is built from.
 *
 * Field factories keep the form declarations short, and the masthead helper
 * keeps all thirty documents looking like they came from the same office: the
 * school above the title, a rule under it, then the facts of the document in
 * labelled pairs. Prefills read the terminal's records, so the fields that the
 * app already knows the answer to arrive filled in.
 */
import { formatDate } from '../../format'
import type { Block, DocField, DocSection, PrefillContext } from '../types'
import { classLabel, fullName, primaryGuardian, shownName, subjectLabel } from '../build'

// ---- field factories ----

type Extra = Partial<Omit<DocField, 'id' | 'label' | 'kind'>>

export const text = (id: string, label: string, extra: Extra = {}): DocField => ({ id, label, kind: 'text', ...extra })
export const area = (id: string, label: string, extra: Extra = {}): DocField => ({
  id,
  label,
  kind: 'textarea',
  rows: 4,
  ...extra,
})
export const date = (id: string, label: string, extra: Extra = {}): DocField => ({ id, label, kind: 'date', ...extra })
export const num = (id: string, label: string, extra: Extra = {}): DocField => ({ id, label, kind: 'number', ...extra })
export const pick = (id: string, label: string, options: string[], extra: Extra = {}): DocField => ({
  id,
  label,
  kind: 'select',
  options,
  ...extra,
})
export const chips = (id: string, label: string, extra: Extra = {}): DocField => ({ id, label, kind: 'chips', ...extra })
export const check = (id: string, label: string, extra: Extra = {}): DocField => ({ id, label, kind: 'check', ...extra })
export const table = (id: string, label: string, columns: string[], extra: Extra = {}): DocField => ({
  id,
  label,
  kind: 'table',
  columns,
  startRows: 3,
  ...extra,
})

export const section = (title: string, fields: DocField[], hint?: string): DocSection => ({ title, fields, hint })

// ---- prefills ----

export const pStudent = (ctx: PrefillContext) => fullName(ctx.student)
export const pKnownAs = (ctx: PrefillContext) => shownName(ctx.student)
export const pClass = (ctx: PrefillContext) => (ctx.classRoom ? classLabel(ctx) : '')
export const pSchool = (ctx: PrefillContext) => ctx.classRoom?.school?.trim() ?? ''
export const pSubject = (ctx: PrefillContext) => subjectLabel(ctx)
export const pToday = (ctx: PrefillContext) => ctx.today
export const pTeacher = (ctx: PrefillContext) => ctx.teacher.name
export const pGuardian = (ctx: PrefillContext) => primaryGuardian(ctx.student)
export const pGuardianPhone = (ctx: PrefillContext) => ctx.student?.guardians[0]?.phone ?? ''
export const pGuardianEmail = (ctx: PrefillContext) => ctx.student?.guardians[0]?.email ?? ''

/** The identity fields almost every student-facing document opens with. */
export const studentIdentity = (): DocField[] => [
  text('student', 'Student', { prefill: pStudent, required: true }),
  text('className', 'Class', { prefill: pClass }),
  text('school', 'School', { prefill: pSchool }),
]

export const authorFields = (): DocField[] => [
  text('teacher', 'Prepared by', { prefill: pTeacher }),
  text('role', 'Role', { placeholder: 'Form Teacher' }),
  date('docDate', 'Date', { prefill: pToday }),
]

// ---- blocks ----

export type MetaPair = { label: string; value: string }

/** Only pairs with something in them, so the masthead never prints "-". */
export const metaOf = (...pairs: (MetaPair | false | null | undefined)[]): MetaPair[] =>
  pairs.filter((p): p is MetaPair => !!p && !!p.value.trim())

export function masthead(args: {
  school: string
  title: string
  subtitle?: string
  meta?: MetaPair[]
}): Block {
  return {
    k: 'masthead',
    school: args.school,
    title: args.title,
    subtitle: args.subtitle,
    meta: args.meta ?? [],
  }
}

/** The standard close: who signed, and space for them to do it. */
export function signatures(slots: { name: string; role: string }[]): Block {
  return { k: 'signatures', slots }
}

export const heading = (text: string, level: 1 | 2 = 1): Block => ({ k: 'heading', text, level })
export const para = (text: string, face: 'r' | 'b' | 'i' = 'r'): Block => ({ k: 'para', text, face })
export const note = (text: string, tone: 'plain' | 'strong' = 'plain'): Block => ({ k: 'notice', text, tone })
export const gap = (h = 8): Block => ({ k: 'space', h })

/** A prose section: heading, then what was written, or ruled lines to write on. */
export function field(label: string, value: string, minLines = 3): Block {
  return { k: 'prose', label, text: value, minLines }
}

/** Drop the blocks that would be empty, so a half-filled form is still tidy. */
export function compact(blocks: (Block | null | false | undefined)[]): Block[] {
  return blocks.filter((b): b is Block => !!b)
}

export const dateText = (iso: string) => (iso ? formatDate(iso) : '')

/** "Yes" / "No" from a checkbox value. */
export const yesNo = (value: string) => (value ? 'Yes' : 'No')
