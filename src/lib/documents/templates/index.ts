/**
 * The template catalogue.
 *
 * Templates are code, and a project only stores the id, so a template can be
 * improved after documents have been written from it. That makes the ids part
 * of the data format: renaming one orphans every document that used it, so
 * they are fixed once and left alone, whatever the display name becomes.
 */
import type { DocCategory, DocTemplate } from '../types'
import { academicTemplates } from './academic'
import { adminTemplates } from './admin'
import { behaviourTemplates } from './behaviour'
import { classroomTemplates } from './classroom'
import { communicationTemplates } from './communication'

export const DOC_TEMPLATES: DocTemplate[] = [
  ...behaviourTemplates,
  ...communicationTemplates,
  ...academicTemplates,
  ...classroomTemplates,
  ...adminTemplates,
]

export const DOC_CATEGORIES: DocCategory[] = ['Behaviour', 'Communication', 'Academic', 'Classroom', 'Admin']

const BY_ID = new Map(DOC_TEMPLATES.map((t) => [t.id, t]))

// A duplicate id would mean two templates quietly sharing one set of saved
// documents. Cheap to check, and it only ever fires in development.
if (import.meta.env?.DEV && BY_ID.size !== DOC_TEMPLATES.length) {
  const seen = new Set<string>()
  const clashes = DOC_TEMPLATES.map((t) => t.id).filter((id) => (seen.has(id) ? true : (seen.add(id), false)))
  throw new Error(`Duplicate document template ids: ${[...new Set(clashes)].join(', ')}`)
}

export function templateById(id: string): DocTemplate | null {
  return BY_ID.get(id) ?? null
}

export function templatesByCategory(category: DocCategory): DocTemplate[] {
  return DOC_TEMPLATES.filter((t) => t.category === category)
}

/** Name, summary and category, for the search box in the gallery. */
export function searchTemplates(query: string): DocTemplate[] {
  const q = query.trim().toLowerCase()
  if (!q) return DOC_TEMPLATES
  return DOC_TEMPLATES.filter((t) =>
    [t.name, t.summary, t.category].some((field) => field.toLowerCase().includes(q))
  )
}

export const AUDIENCE_LABEL: Record<DocTemplate['audience'], string> = {
  one: 'One student',
  many: 'One or more students',
  none: 'Class or no student',
}
