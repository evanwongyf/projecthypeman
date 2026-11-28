/**
 * Document Lab shapes.
 *
 * A template is code: a set of form sections and a build() that turns the
 * filled-in values into blocks. A project is data: the template's id, the
 * students it is about, the values typed in, and its version history. Nothing
 * about a template's layout is ever stored, so improving a template improves
 * every document already written from it.
 */
import type { ClassRoom, Student, TerminalData } from '../types'
import type { Family } from './fonts'

// ---- stored project (mirrors netlify/functions/_shared/documents.ts) ----

export type DocFieldValue = string | string[] | string[][]
export type DocValues = Record<string, DocFieldValue>
export type DocVersionSource = 'created' | 'saved' | 'restored'

export type DocVersion = {
  n: number
  createdAt: string
  label: string
  source: DocVersionSource
  values: DocValues
  studentIds: string[]
}

export type DocProject = {
  id: string
  name: string
  templateId: string
  classId: string | null
  studentIds: string[]
  values: DocValues
  currentVersion: number
  versions: DocVersion[]
  createdAt: string
  updatedAt: string
}

export type DocSummary = {
  id: string
  name: string
  templateId: string
  classId: string | null
  studentIds: string[]
  currentVersion: number
  versionCount: number
  createdAt: string
  updatedAt: string
}

export const DOC_MAX_VERSIONS = 40
export const DOC_NAME_MAX = 120
export const DOC_LABEL_MAX = 80

// ---- form fields (the left-hand panel) ----

export type DocFieldKind =
  | 'text'
  | 'textarea'
  | 'date'
  | 'number'
  | 'select'
  | 'chips'
  | 'check'
  | 'table'

export type DocField = {
  id: string
  label: string
  kind: DocFieldKind
  hint?: string
  placeholder?: string
  /** Marked on the form. Nothing is blocked: a half-filled draft still renders. */
  required?: boolean
  /** For select. The first option is the empty one unless `required`. */
  options?: string[]
  /**
   * Options worked out from the records, for a field that chooses one of the
   * terminal's own things (a paper, a seating plan). The stored value is the
   * option's `value`, so a renamed homework does not break a saved document.
   */
  dynamicOptions?: (ctx: PrefillContext) => { value: string; label: string }[]
  /** For textarea: rows of the input box. */
  rows?: number
  /** For table: the column headings, which are also the stored cell order. */
  columns?: string[]
  /** For table: how many empty rows a new document starts with. */
  startRows?: number
  /**
   * A default, applied when a document is created and when a student is picked.
   * Resolved against the terminal's own records, so a report about a student
   * arrives already knowing their name, class and contacts.
   */
  prefill?: (ctx: PrefillContext) => string | string[] | string[][]
}

export type DocSection = {
  title: string
  hint?: string
  fields: DocField[]
}

export type PrefillContext = {
  data: TerminalData
  /** The first selected student, which is the subject of a one-student document. */
  student: Student | null
  students: Student[]
  classRoom: ClassRoom | null
  today: string
  now: number
  /** The signed-in teacher. */
  teacher: { name: string; username: string }
}

// ---- blocks (what a template builds) ----

export type Align = 'l' | 'c' | 'r'

export type Block =
  /** The masthead: school, document title, and a line of meta pairs. */
  | { k: 'masthead'; school: string; title: string; subtitle?: string; meta?: { label: string; value: string }[] }
  | { k: 'heading'; text: string; level?: 1 | 2 }
  | { k: 'para'; text: string; face?: 'r' | 'b' | 'i'; size?: number; align?: Align }
  /** Label/value pairs in a boxed grid, for facts that are known. */
  | { k: 'kv'; rows: { label: string; value: string }[]; cols?: 1 | 2 }
  /** Label and body text, ruled underneath when the body is empty. */
  | { k: 'prose'; label?: string; text: string; minLines?: number }
  | { k: 'table'; head?: string[]; rows: string[][]; widths?: number[]; align?: Align[]; zebra?: boolean }
  | { k: 'checklist'; items: { text: string; checked?: boolean }[]; cols?: 1 | 2 }
  /** A matrix: one row per item, one tick box per point on the scale. */
  | { k: 'rating'; scale: string[]; rows: { text: string; value?: string }[] }
  | { k: 'bullets'; items: string[]; ordered?: boolean }
  | { k: 'lines'; n: number; label?: string }
  | { k: 'notice'; text: string; tone?: 'plain' | 'strong' }
  | { k: 'stats'; items: { label: string; value: string }[] }
  | { k: 'signatures'; slots: { name: string; role: string }[] }
  /** `ratio` is width / height, so the box never stretches the picture. */
  | { k: 'photo'; src: string; w?: number; ratio?: number; caption?: string }
  | { k: 'divider' }
  | { k: 'space'; h: number }
  /** Start the next block on a fresh page. Used between per-student copies. */
  | { k: 'pagebreak' }

// ---- templates ----

export type DocCategory = 'Behaviour' | 'Communication' | 'Academic' | 'Classroom' | 'Admin'

/** How many students the document is about. */
export type DocAudience = 'one' | 'many' | 'none'

export type BuildContext = PrefillContext & {
  /** Every value, already trimmed; missing keys read as ''. */
  v: (id: string) => string
  /** A list value (chips), or the rows of a table. */
  list: (id: string) => string[]
  rows: (id: string) => string[][]
  /** A student's photo, once loaded: a data URL plus its width / height. */
  photo: (studentId: string) => { src: string; ratio: number } | null
}

export type DocTemplate = {
  id: string
  name: string
  category: DocCategory
  summary: string
  audience: DocAudience
  font: Family
  /** Section headings for the form on the left. */
  sections: DocSection[]
  /** Values -> blocks. Called on every keystroke, so it stays pure and cheap. */
  build: (ctx: BuildContext) => Block[]
}
