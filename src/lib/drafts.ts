/**
 * Unsaved form drafts, per tab, kept in localStorage so they survive a reload.
 *
 * Tabs stay mounted while you switch between them, so in one visit React keeps
 * everything. This covers the gap after a reload or a later visit: whatever
 * was typed into a field on the tab's page is written back into the same
 * field when the page appears again. Saving (a form submit or the page's
 * primary button) clears the draft, as does closing the tab.
 */
type FieldValue = string | boolean
type Draft = { path: string; at: number; fields: Record<string, FieldValue> }
type Store = Record<string, Draft>

const KEY = 'hypeman.drafts.v1'
const MAX_AGE = 14 * 86_400_000

function read(): Store {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) ?? '{}') as Store
    const now = Date.now()
    for (const [id, d] of Object.entries(raw)) if (!d || now - d.at > MAX_AGE) delete raw[id]
    return raw
  } catch {
    return {}
  }
}

function write(store: Store) {
  try {
    localStorage.setItem(KEY, JSON.stringify(store))
  } catch {
    /* full or blocked: drafts are a convenience */
  }
}

export function getDraft(tabId: string, path: string): Record<string, FieldValue> | null {
  const d = read()[tabId]
  return d && d.path === path && Object.keys(d.fields).length ? d.fields : null
}

/** Unsaved changes on the page the tab is showing now. */
export function hasDraft(tabId: string, path: string): boolean {
  const d = read()[tabId]
  return !!d && d.path === path && Object.keys(d.fields).length > 0
}

export function setDraftField(tabId: string, path: string, key: string, value: FieldValue | null) {
  const store = read()
  const d = store[tabId] && store[tabId].path === path ? store[tabId] : { path, at: Date.now(), fields: {} }
  if (value === null || value === '' || value === false) delete d.fields[key]
  else d.fields[key] = value
  d.at = Date.now()
  if (Object.keys(d.fields).length) store[tabId] = d
  else delete store[tabId]
  write(store)
}

export function clearDraftFields(tabId: string, keys: string[]) {
  const store = read()
  const d = store[tabId]
  if (!d) return
  for (const k of keys) delete d.fields[k]
  if (Object.keys(d.fields).length) store[tabId] = d
  else delete store[tabId]
  write(store)
}

export function clearTabDrafts(tabId: string) {
  const store = read()
  if (!(tabId in store)) return
  delete store[tabId]
  write(store)
}

// ---- DOM helpers ----

export type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement

const SKIP_TYPES = new Set(['password', 'file', 'hidden', 'submit', 'button', 'reset', 'image'])

export function isDraftable(el: EventTarget | null): el is Field {
  if (el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement) return !el.closest('[data-no-draft]')
  if (el instanceof HTMLInputElement) return !SKIP_TYPES.has(el.type) && !el.closest('[data-no-draft]')
  return false
}

function describe(el: Field): string {
  const type = el instanceof HTMLInputElement ? el.type : el.tagName.toLowerCase()
  return [type, el.name, el.id, el.getAttribute('aria-label'), el.getAttribute('placeholder')].map((s) => s ?? '').join('|')
}

/** A stable key for a field: what it is, plus its position among look-alikes. */
export function fieldKey(el: Field, root: HTMLElement): string {
  const d = describe(el)
  let n = 0
  for (const other of root.querySelectorAll<Field>('input, textarea, select')) {
    if (other === el) break
    if (isDraftable(other) && describe(other) === d) n++
  }
  return `${d}#${n}`
}

export function valueOf(el: Field): FieldValue {
  if (el instanceof HTMLInputElement && (el.type === 'checkbox' || el.type === 'radio')) return el.checked
  return el.value
}

/** Set a field the way typing would, so React's controlled state picks it up. */
export function applyValue(el: Field, value: FieldValue) {
  if (el instanceof HTMLInputElement && (el.type === 'checkbox' || el.type === 'radio')) {
    if (el.checked !== value) el.click()
    return
  }
  const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : el instanceof HTMLSelectElement ? HTMLSelectElement.prototype : HTMLInputElement.prototype
  Object.getOwnPropertyDescriptor(proto, 'value')?.set?.call(el, String(value))
  el.dispatchEvent(new Event('input', { bubbles: true }))
  el.dispatchEvent(new Event('change', { bubbles: true }))
}
