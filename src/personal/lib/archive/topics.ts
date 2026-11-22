import type { Guide } from './guide'
import { CRIMINOLOGY } from './trees/criminology'
import { EXAMS, HABITS, MEMORY, NOTE_TAKING, RESEARCH, THINKING, WRITING } from './trees/study'
import { AI } from './trees/ai'
import { ACCOUNTING } from './trees/accounting'
import { BANKING } from './trees/banking'
import { ECONOMICS } from './trees/economics'
import { CLOUD } from './trees/cloud'
import { CYBER } from './trees/cyber'
import { FINANCE } from './trees/finance'
import { FITNESS } from './trees/fitness'
import { FOOD_THERAPY } from './trees/food-therapy'
import { FORENSICS } from './trees/forensics'
import { GAMES } from './trees/games'
import { GAME_THEORY } from './trees/game-theory'
import { TAROT } from './trees/tarot'
import { ANTHROPOLOGY } from './trees/anthropology'
import { NETWORKING } from './trees/networking'
import { GRAMMAR } from './trees/grammar'
import { CHINESE_DIALECTS } from './trees/chinese-dialects'
import { FIRST_AID } from './trees/first-aid'
import { MATHEMATICS } from './trees/mathematics'
import { MEDICINE } from './trees/medicine'
import { MILITARY } from './trees/military'
import { MUSIC } from './trees/music'
import { SIGN_LANGUAGE } from './trees/sign'
import { SPORTS } from './trees/sports'
import { SURVIVAL } from './trees/survival'
import { TEACHING } from './trees/teaching'
import { WEATHER } from './trees/weather'
import { PARENTING } from './trees/parenting'
import { PERSONALITY } from './trees/personality'
import { QUANTUM } from './trees/quantum'
import { ASTROPHYSICS } from './trees/astrophysics'
import { FACILITATION } from './trees/facilitation'
import { AGENTIC_AI } from './trees/agentic-ai'
import { E_PEDAGOGY } from './trees/e-pedagogy'
import { ATTENTION } from './trees/attention'
import { GAMIFICATION } from './trees/gamification'

export type ArchiveNode = {
  slug: string
  title: string
  blurb: string
  // Shown on collection cards. Guides use their parent's.
  glyph?: string
  // Accent colour; children inherit it unless they set their own.
  color?: string
  // Reading time, for guides.
  minutes?: number
  // A heading that groups consecutive shelves on a collection page (for example Investing and
  // Trading on the finance shelf).
  group?: string
  // Extra words for search that are not in the title or blurb.
  tags?: string[]
  children?: ArchiveNode[]
  // A written guide, loaded when opened. Filled in from content/ (see below).
  guide?: () => Promise<Guide>
  // A hand-built walkthrough instead of a written guide.
  custom?: 'references'
}

// The archive is a shelf of guides on studying, teaching, sign language, fitness and finance, nested as deep as a topic
// needs. A guide opens when it has content; a collection opens when anything inside it
// does. Everything else is shown as coming soon so the shelf still makes sense.
export const ARCHIVE_TOPICS: ArchiveNode[] = [TEACHING, FACILITATION, E_PEDAGOGY, GAMIFICATION, RESEARCH, NOTE_TAKING, MEMORY, ATTENTION, WRITING, GRAMMAR, EXAMS, THINKING, HABITS, SIGN_LANGUAGE, CHINESE_DIALECTS, FITNESS, FIRST_AID, SPORTS, GAMES, MUSIC, GAME_THEORY, TAROT, MEDICINE, FOOD_THERAPY, PARENTING, PERSONALITY, MILITARY, SURVIVAL, ANTHROPOLOGY, CRIMINOLOGY, FORENSICS, MATHEMATICS, QUANTUM, ASTROPHYSICS, ECONOMICS, FINANCE, AI, AGENTIC_AI, CYBER, CLOUD, NETWORKING, BANKING, ACCOUNTING, WEATHER]

// A guide's text lives in content/<its archive path>.ts, one file per guide, so each is
// downloaded only when opened. A planned guide goes live as soon as its file exists.
const CONTENT = import.meta.glob<Guide>('./content/**/*.ts', { import: 'default' })

function attachContent(nodes: ArchiveNode[], path: string) {
  for (const n of nodes) {
    const here = `${path}/${n.slug}`
    const load = CONTENT[`./content${here}.ts`]
    if (load) n.guide = load
    if (n.children) attachContent(n.children, here)
  }
}
attachContent(ARCHIVE_TOPICS, '')

export function isGuide(node: ArchiveNode) {
  return !!node.guide || !!node.custom
}

export function isReady(node: ArchiveNode): boolean {
  return isGuide(node) || !!node.children?.some(isReady)
}

export function countGuides(node: ArchiveNode): number {
  if (isGuide(node)) return 1
  return (node.children ?? []).reduce((n, c) => n + countGuides(c), 0)
}

// Follows a list of slugs down the tree. Returns every node on the way, or undefined
// when a slug does not match.
export function resolvePath(slugs: string[]): ArchiveNode[] | undefined {
  const trail: ArchiveNode[] = []
  let level = ARCHIVE_TOPICS
  for (const slug of slugs) {
    const node = level.find((n) => n.slug === slug)
    if (!node) return undefined
    trail.push(node)
    level = node.children ?? []
  }
  return trail
}

export function archivePath(trail: ArchiveNode[]) {
  return trail.map((n) => n.slug).join('/')
}

export function archiveHref(trail: ArchiveNode[]) {
  return ['/personal/archive', ...trail.map((n) => n.slug)].join('/')
}

// How many of the guides under a node (at `path`) are in `read`.
export function countRead(node: ArchiveNode, path: string, read: Set<string>): number {
  if (isGuide(node)) return read.has(path) ? 1 : 0
  return (node.children ?? []).reduce((n, c) => n + countRead(c, `${path}/${c.slug}`, read), 0)
}

export function trailColor(trail: ArchiveNode[]) {
  for (let i = trail.length - 1; i >= 0; i--) if (trail[i].color) return trail[i].color!
  return 'var(--orange)'
}

export function trailGlyph(trail: ArchiveNode[]) {
  for (let i = trail.length - 1; i >= 0; i--) if (trail[i].glyph) return trail[i].glyph!
  return '§'
}

// Every guide that can be opened, with the path of nodes that leads to it.
export function readyGuides(): ArchiveNode[][] {
  const out: ArchiveNode[][] = []
  const walk = (nodes: ArchiveNode[], trail: ArchiveNode[]) => {
    for (const n of nodes) {
      const next = [...trail, n]
      if (isGuide(n)) out.push(next)
      else if (n.children) walk(n.children, next)
    }
  }
  walk(ARCHIVE_TOPICS, [])
  return out
}
