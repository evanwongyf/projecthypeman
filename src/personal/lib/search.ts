import type { Artifact, Deck, FileItem, Flashcard, Folder, Module, StudyPath, StudySession } from './types'
import { archiveHref, readyGuides } from './archive/topics'
import { cardType, cardTypeMeta, stripBlackout } from './cards'
import { formatShortDate } from './dates'
import { classifyFile } from './fileTypes'

export type SearchKind = 'page' | 'path' | 'module' | 'deck' | 'card' | 'file' | 'folder' | 'note' | 'annotation' | 'guide'

export const KIND_META: Record<SearchKind, { label: string; glyph: string; color: string }> = {
  page: { label: 'page', glyph: '↗', color: 'var(--paper-2)' },
  path: { label: 'path', glyph: '🧭', color: 'var(--orange)' },
  module: { label: 'module', glyph: '📚', color: 'var(--teal)' },
  deck: { label: 'deck', glyph: '🗂️', color: 'var(--mustard)' },
  card: { label: 'card', glyph: '🃏', color: 'var(--mustard)' },
  file: { label: 'file', glyph: '📄', color: 'var(--paper-2)' },
  folder: { label: 'folder', glyph: '📁', color: 'var(--paper-2)' },
  note: { label: 'note', glyph: '📝', color: 'var(--mint)' },
  annotation: { label: 'annotation', glyph: '🖍️', color: 'var(--lavender)' },
  guide: { label: 'guide', glyph: '📖', color: 'var(--orange)' },
}

const FILE_GLYPH = { image: '🖼️', video: '🎞️', pdf: '📄', text: '📝', other: '📦' }

export type SearchItem = {
  // unique across kinds ("card:abc"); also what the AI refers to items by
  key: string
  kind: SearchKind
  title: string
  subtitle?: string
  body?: string
  glyph?: string
  to: string
}

// An item plus its lowercased, accent-free text, so keystrokes don't re-normalise everything.
export type SearchEntry = { item: SearchItem; n: { title: string; subtitle: string; body: string } }

export type SearchHit = { entry: SearchEntry; score: number; snippet?: string }

export type SearchSource = {
  paths: StudyPath[]
  modules: Module[]
  decks: Deck[]
  cards: Flashcard[]
  sessions: StudySession[]
  files: FileItem[]
  folders: Folder[]
  artifacts: Artifact[]
}

export function norm(text: string): string {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export function tokenize(query: string): string[] {
  return norm(query).split(/\s+/).filter(Boolean).slice(0, 6)
}

const PAGES: { title: string; to: string; hint: string }[] = [
  { title: 'Overview', to: '/dashboard', hint: 'home dashboard streak heatmap' },
  { title: 'Study Log', to: '/dashboard/study', hint: 'sessions timer minutes history' },
  { title: 'Decks', to: '/dashboard/decks', hint: 'flashcards review cards' },
  { title: 'Study Paths', to: '/dashboard/paths', hint: 'courses modules interests' },
  { title: 'Archive', to: '/personal/archive', hint: 'guides how to study skills teaching techniques' },
  { title: 'Settings', to: '/dashboard/settings', hint: 'account profile banner' },
  { title: 'Design', to: '/dashboard/settings/design', hint: 'theme colours colors appearance' },
]

export function pathTitle(path: StudyPath): string {
  const name = path.category === 'academic' ? path.courseName : path.interestName
  return name?.trim() || 'Untitled path'
}

function trimText(text: string, max: number): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  return clean.length > max ? `${clean.slice(0, max - 1)}…` : clean
}

function cardBody(card: Flashcard): string {
  const parts = [card.back, card.example, card.explanation, ...(card.alternates ?? []), ...(card.options ?? []).map((o) => o.text)]
  if (card.type === 'truefalse') parts.push(card.answer ? 'true' : 'false')
  return parts.filter(Boolean).join(' · ')
}

export function buildSearchIndex(src: SearchSource): SearchEntry[] {
  const items: SearchItem[] = []
  const moduleById = new Map(src.modules.map((m) => [m.id, m]))
  const deckById = new Map(src.decks.map((d) => [d.id, d]))
  const fileById = new Map(src.files.map((f) => [f.id, f]))
  const moduleLink = (moduleId: string) => {
    const mod = moduleById.get(moduleId)
    return mod ? `/dashboard/paths/${mod.pathId}/modules/${mod.id}` : null
  }

  for (const p of PAGES) items.push({ key: `page:${p.to}`, kind: 'page', title: p.title, body: p.hint, to: p.to })

  for (const p of src.paths) {
    const detail = p.category === 'academic' ? [p.level, p.school].filter(Boolean).join(' · ') : p.interestCategory
    items.push({ key: `path:${p.id}`, kind: 'path', title: pathTitle(p), subtitle: detail || undefined, to: `/dashboard/paths/${p.id}` })
  }

  for (const m of src.modules) {
    const subtitle = [m.code, m.semester].filter(Boolean).join(' · ')
    items.push({ key: `module:${m.id}`, kind: 'module', title: m.name, subtitle, body: m.description, to: moduleLink(m.id)! })
  }

  for (const d of src.decks) {
    const mod = d.moduleId ? moduleById.get(d.moduleId) : undefined
    items.push({ key: `deck:${d.id}`, kind: 'deck', title: d.name, subtitle: mod?.name, to: `/dashboard/decks/${d.id}` })
  }

  for (const c of src.cards) {
    const deck = deckById.get(c.deckId)
    if (!deck) continue
    const type = cardType(c)
    const front = type === 'blackout' ? stripBlackout(c.front) : c.front
    items.push({
      key: `card:${c.id}`,
      kind: 'card',
      title: trimText(front || cardTypeMeta(type).label, 90),
      subtitle: `${deck.name} · ${cardTypeMeta(type).label}`,
      body: cardBody(c),
      to: `/dashboard/decks/${c.deckId}?card=${c.id}`,
    })
  }

  for (const f of src.files) {
    const link = moduleLink(f.moduleId)
    if (!link) continue
    items.push({
      key: `file:${f.id}`,
      kind: 'file',
      title: f.name,
      subtitle: moduleById.get(f.moduleId)?.name,
      glyph: FILE_GLYPH[classifyFile(f.mimeType)],
      to: `${link}?file=${f.id}`,
    })
  }

  for (const f of src.folders) {
    const link = moduleLink(f.moduleId)
    if (!link) continue
    items.push({ key: `folder:${f.id}`, kind: 'folder', title: f.name, subtitle: moduleById.get(f.moduleId)?.name, to: `${link}?folder=${f.id}` })
  }

  for (const a of src.artifacts) {
    const file = fileById.get(a.fileId)
    const link = file ? moduleLink(file.moduleId) : null
    if (!file || !link) continue
    items.push({
      key: `annotation:${a.id}`,
      kind: 'annotation',
      title: a.name,
      subtitle: `on ${file.name}`,
      body: [a.quote, a.body].filter(Boolean).join(' · '),
      to: `${link}?file=${file.id}`,
    })
  }

  for (const s of src.sessions) {
    if (!s.note?.trim()) continue
    const mod = moduleById.get(s.moduleId)
    items.push({
      key: `note:${s.id}`,
      kind: 'note',
      title: trimText(s.note, 90),
      subtitle: `${mod?.name ?? 'Study session'} · ${formatShortDate(s.date)} · ${s.minutes} min`,
      body: s.note,
      to: '/dashboard/study',
    })
  }

  for (const trail of readyGuides()) {
    const g = trail[trail.length - 1]
    const to = archiveHref(trail)
    const subtitle = trail.slice(0, -1).map((n) => n.title).join(' › ')
    items.push({ key: `guide:${to.slice('/personal/archive/'.length)}`, kind: 'guide', title: g.title, subtitle, body: [g.blurb, ...(g.tags ?? [])].join(' · '), to })
  }

  return items.map((item) => ({
    item,
    n: { title: norm(item.title), subtitle: norm(item.subtitle ?? ''), body: norm(item.body ?? '') },
  }))
}

// ── scoring ────────────────────────────────────────────────────────────────

const KIND_BONUS: Record<SearchKind, number> = {
  page: 6,
  path: 5,
  module: 5,
  deck: 4,
  guide: 3,
  folder: 2,
  file: 2,
  card: 1,
  annotation: 1,
  note: 0,
}

// Keep one kind (usually cards) from crowding out everything else.
const MAX_PER_KIND = 6
const MAX_RESULTS = 24

// True when `needle`'s letters appear in order within a stretch of `haystack` barely longer
// than the needle itself, which forgives a dropped letter ("mitocondria") without matching noise.
function isCompactSubsequence(needle: string, haystack: string): boolean {
  const maxSpan = needle.length + 2
  for (let start = haystack.indexOf(needle[0]); start >= 0; start = haystack.indexOf(needle[0], start + 1)) {
    let i = 1
    let at = start
    while (i < needle.length && at < haystack.length - 1 && at - start < maxSpan) {
      at++
      if (haystack[at] === needle[i]) i++
    }
    if (i === needle.length && at - start + 1 <= maxSpan) return true
  }
  return false
}

function scoreToken(entry: SearchEntry, token: string): number {
  const { title, subtitle, body } = entry.n
  if (title === token) return 120
  if (title.startsWith(token)) return 90
  if (title.includes(` ${token}`)) return 70
  if (title.includes(token)) return 50
  if (subtitle.includes(token)) return 25
  if (body.includes(token)) return 12
  if (token.length >= 4 && isCompactSubsequence(token, title)) return 8
  return 0
}

// A short excerpt of the body around the first match, for hits the title alone doesn't explain.
function snippetFor(body: string, tokens: string[]): string | undefined {
  const flat = body.replace(/\s+/g, ' ')
  const lower = norm(flat)
  const at = tokens.map((t) => lower.indexOf(t)).filter((i) => i >= 0)
  if (at.length === 0) return undefined
  const start = Math.max(0, Math.min(...at) - 24)
  return `${start > 0 ? '…' : ''}${flat.slice(start, start + 110)}${start + 110 < flat.length ? '…' : ''}`
}

export function search(index: SearchEntry[], tokens: string[]): SearchHit[] {
  if (tokens.length === 0) return []
  const phrase = tokens.join(' ')
  const hits: SearchHit[] = []

  for (const entry of index) {
    let score = 0
    let matched = true
    for (const token of tokens) {
      const s = scoreToken(entry, token)
      if (!s) {
        matched = false
        break
      }
      score += s
    }
    if (!matched) continue
    if (tokens.length > 1 && entry.n.title.includes(phrase)) score += 40
    score += KIND_BONUS[entry.item.kind] - entry.n.title.length / 100
    const inTitle = tokens.every((t) => entry.n.title.includes(t))
    hits.push({ entry, score, snippet: !inTitle && entry.item.body ? snippetFor(entry.item.body, tokens) : undefined })
  }

  hits.sort((a, b) => b.score - a.score)

  const perKind = new Map<SearchKind, number>()
  const out: SearchHit[] = []
  for (const hit of hits) {
    const count = perKind.get(hit.entry.item.kind) ?? 0
    if (count >= MAX_PER_KIND) continue
    perKind.set(hit.entry.item.kind, count + 1)
    out.push(hit)
    if (out.length >= MAX_RESULTS) break
  }
  return out
}

// What to show before anything is typed.
export function quickHits(index: SearchEntry[]): SearchHit[] {
  return index.filter((e) => e.item.kind === 'page').map((entry) => ({ entry, score: 0 }))
}

// ── highlighting ───────────────────────────────────────────────────────────

export type TextPart = { text: string; match: boolean }

export function splitByTokens(text: string, tokens: string[]): TextPart[] {
  if (tokens.length === 0) return [{ text, match: false }]
  const lower = norm(text)
  const marked = new Array<boolean>(text.length).fill(false)
  for (const token of tokens) {
    let from = 0
    for (;;) {
      const at = lower.indexOf(token, from)
      if (at < 0) break
      for (let i = at; i < Math.min(at + token.length, marked.length); i++) marked[i] = true
      from = at + token.length
    }
  }
  const parts: TextPart[] = []
  for (let i = 0; i < text.length; i++) {
    const last = parts[parts.length - 1]
    if (last && last.match === marked[i]) last.text += text[i]
    else parts.push({ text: text[i], match: marked[i] })
  }
  return parts
}

// ── AI assist ──────────────────────────────────────────────────────────────

const STOPWORDS = new Set(
  'a an and are as at be by can do does for from how i in is it me my of on or she so that the their there this to was we what when where which who why with you your about tell explain define'.split(' '),
)

// Looser than search(): any keyword counts, so a question in plain English still finds its notes.
export function retrieve(index: SearchEntry[], query: string, limit = 24): SearchEntry[] {
  const all = tokenize(query)
  const words = all.filter((t) => !STOPWORDS.has(t))
  const stems = (words.length > 0 ? words : all).map((t) => (t.length >= 6 ? t.slice(0, -2) : t))
  const scored: { entry: SearchEntry; score: number }[] = []

  for (const entry of index) {
    if (entry.item.kind === 'page') continue
    let score = 0
    for (const stem of stems) {
      if (entry.n.title.includes(stem)) score += 3
      if (entry.n.subtitle.includes(stem)) score += 1
      if (entry.n.body.includes(stem)) score += 2
    }
    if (score > 0) scored.push({ entry, score })
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.entry)
}

export type AskPayload = { query: string; items: { id: string; kind: SearchKind; title: string; text: string }[] }

export function buildAskPayload(query: string, entries: SearchEntry[]): AskPayload {
  return {
    query,
    items: entries.map(({ item }) => ({
      id: item.key,
      kind: item.kind,
      title: item.title,
      text: trimText([item.subtitle, item.body].filter(Boolean).join(''), 600),
    })),
  }
}
