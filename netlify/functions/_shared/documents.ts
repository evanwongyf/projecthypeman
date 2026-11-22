/**
 * Document Lab storage and validation.
 *
 * A project is one filled-in document: which template, which students, the
 * values typed into the form, and every version saved along the way. Templates
 * themselves are code, not data, so a project only ever stores its template's
 * id and the values keyed by field id. An unknown field id is kept rather than
 * dropped, so editing a template never silently discards what a teacher typed.
 *
 * Shapes are mirrored in src/lib/documents/types.ts.
 */
import { deleteKey, readJsonAt, writeJsonAt } from './store.js'

/** text/date/select/number -> string, chips/multi -> string[], table -> rows of cells. */
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
  /** The live draft, autosaved as the teacher types. */
  values: DocValues
  /** The version the draft was taken from. */
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

// ---- limits, shared with the browser ----

export const DOC_MAX_PROJECTS = 200
export const DOC_MAX_VERSIONS = 40
export const DOC_NAME_MAX = 120
export const DOC_LABEL_MAX = 80
export const DOC_VALUE_MAX = 6000
export const DOC_KEY_MAX = 80
export const DOC_MAX_FIELDS = 240
export const DOC_MAX_ROWS = 60
export const DOC_MAX_COLS = 12
export const DOC_MAX_STUDENTS = 400

const ID_RE = /^[0-9a-f-]{36}$/
export const isDocId = (s: string | undefined): s is string => !!s && ID_RE.test(s)

const user = (name: string) => name.toLowerCase()
const indexKey = (name: string) => ['documents', `${user(name)}.json`]
const projectKey = (name: string, id: string) => ['documents-proj', user(name), `${id}.json`]

// ---- validation ----

const str = (v: unknown) => (typeof v === 'string' ? v : '')

export function cleanName(input: unknown, fallback: string): string {
  const name = str(input).replace(/\s+/g, ' ').trim().slice(0, DOC_NAME_MAX)
  return name || fallback
}

/**
 * A clean copy of the form values, or an error naming the field at fault.
 * Everything is clamped rather than rejected where clamping cannot lose
 * meaning, so a long paste shortens instead of failing the whole save.
 */
export function cleanValues(input: unknown): { values: DocValues } | { error: string } {
  if (input === undefined || input === null) return { values: {} }
  if (typeof input !== 'object' || Array.isArray(input)) return { error: 'Values must be an object.' }

  const entries = Object.entries(input as Record<string, unknown>)
  if (entries.length > DOC_MAX_FIELDS) return { error: `A document can hold at most ${DOC_MAX_FIELDS} fields.` }

  const out: DocValues = {}
  for (const [rawKey, raw] of entries) {
    const key = rawKey.slice(0, DOC_KEY_MAX)
    if (!key) continue

    if (typeof raw === 'string') {
      out[key] = raw.slice(0, DOC_VALUE_MAX)
      continue
    }
    if (Array.isArray(raw)) {
      if (raw.length > DOC_MAX_ROWS) return { error: `"${key}" has more than ${DOC_MAX_ROWS} rows.` }
      // A table (rows of cells) or a list of strings. Mixed arrays are rejected
      // rather than coerced, since a half-table renders as nonsense.
      if (raw.every((cell) => typeof cell === 'string')) {
        out[key] = (raw as string[]).map((s) => s.slice(0, DOC_VALUE_MAX))
        continue
      }
      if (raw.every((row) => Array.isArray(row))) {
        const rows: string[][] = []
        for (const row of raw as unknown[][]) {
          if (row.length > DOC_MAX_COLS) return { error: `"${key}" has a row wider than ${DOC_MAX_COLS} columns.` }
          rows.push(row.map((cell) => str(cell).slice(0, DOC_VALUE_MAX)))
        }
        out[key] = rows
        continue
      }
      return { error: `"${key}" mixes text and rows.` }
    }
    if (typeof raw === 'number' && Number.isFinite(raw)) {
      out[key] = String(raw)
      continue
    }
    if (typeof raw === 'boolean') {
      out[key] = raw ? 'yes' : ''
      continue
    }
    // undefined / null / objects: treat as cleared.
    out[key] = ''
  }
  return { values: out }
}

export function cleanStudentIds(input: unknown): { studentIds: string[] } | { error: string } {
  if (input === undefined || input === null) return { studentIds: [] }
  if (!Array.isArray(input)) return { error: 'Students must be a list.' }
  if (input.length > DOC_MAX_STUDENTS) return { error: `At most ${DOC_MAX_STUDENTS} students.` }
  // Deduplicated, order kept: the order is the order they appear in the document.
  const seen = new Set<string>()
  const out: string[] = []
  for (const v of input) {
    const id = str(v)
    if (!id || seen.has(id)) continue
    seen.add(id)
    out.push(id)
  }
  return { studentIds: out }
}

// ---- store ----

type Index = { projects: DocSummary[] }
const emptyIndex = (): Index => ({ projects: [] })

export const getIndex = (name: string) => readJsonAt<Index>(indexKey(name), emptyIndex)
const saveIndex = (name: string, idx: Index) => writeJsonAt(indexKey(name), idx)

export const getProject = (name: string, id: string) =>
  readJsonAt<DocProject | null>(projectKey(name, id), () => null)

export function summarize(p: DocProject): DocSummary {
  return {
    id: p.id,
    name: p.name,
    templateId: p.templateId,
    classId: p.classId,
    studentIds: p.studentIds,
    currentVersion: p.currentVersion,
    versionCount: p.versions.length,
    createdAt: p.createdAt,
    updatedAt: p.updatedAt,
  }
}

/** Write the project, then bring its row in the index back into step. */
export async function saveProject(name: string, p: DocProject): Promise<void> {
  await writeJsonAt(projectKey(name, p.id), p)
  const idx = await getIndex(name)
  idx.projects ??= []
  const row = summarize(p)
  const i = idx.projects.findIndex((x) => x.id === p.id)
  if (i >= 0) idx.projects[i] = row
  else idx.projects.push(row)
  await saveIndex(name, idx)
}

export async function deleteProject(name: string, id: string): Promise<void> {
  await deleteKey(projectKey(name, id))
  const idx = await getIndex(name)
  idx.projects = (idx.projects ?? []).filter((x) => x.id !== id)
  await saveIndex(name, idx)
}

export async function listProjects(name: string): Promise<DocSummary[]> {
  const idx = await getIndex(name)
  return [...(idx.projects ?? [])].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
}

/**
 * Append a version, newest last.
 *
 * Beyond the cap the oldest version is dropped, except version 1: that one is
 * the document as it was first written, which is the one version worth keeping
 * whatever else goes. Numbers are never reused, so a version number always
 * means the same snapshot.
 */
export function pushVersion(p: DocProject, version: Omit<DocVersion, 'n'>): DocVersion {
  const n = p.versions.reduce((max, v) => Math.max(max, v.n), 0) + 1
  const full: DocVersion = { n, ...version }
  p.versions.push(full)
  while (p.versions.length > DOC_MAX_VERSIONS) {
    const dropAt = p.versions.findIndex((v) => v.n !== 1)
    if (dropAt === -1) break
    p.versions.splice(dropAt, 1)
  }
  p.currentVersion = n
  return full
}
