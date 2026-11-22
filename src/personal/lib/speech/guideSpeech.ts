// Turns a written guide into passages for the read-aloud player: prose, lists, callouts and
// the parts of interactive blocks that are words rather than pictures.

import type { Block, Guide } from '../archive/guide'

/** Markdown, links and TeX removed, so the voice reads words rather than punctuation. */
function plain(text: string): string {
  return text
    .replace(/\\\((.*?)\\\)/g, ' $1 ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/[·•→]/g, ', ')
    .replace(/\s+/g, ' ')
    .trim()
}

function fromBlock(b: Block): string[] {
  switch (b.t) {
    case 'p':
      return [b.text]
    case 'list':
      return b.items
    case 'checklist':
      return b.items
    case 'callout':
      return [b.title ? `${b.title}. ${b.text}` : b.text]
    case 'quote':
      return [b.by ? `${b.text}, ${b.by}` : b.text]
    case 'cards':
      return b.items.map((x) => `${x.title}. ${x.body}`)
    case 'steps':
      return b.items.map((x, i) => `Step ${i + 1}. ${x.title}. ${x.body}`)
    case 'levels':
      return b.items.map((x) => `${x.name}. ${x.body}`)
    case 'cycle':
      return b.items.map((x) => `${x.name}. ${x.body}`)
    case 'terms':
      return b.items.map((x) => `${x.term}: ${x.def}`)
    case 'example':
      return [b.title, ...b.lines.map((l) => (l.label ? `${l.label}: ${l.text}` : l.text))]
    case 'dodont':
      return ['Do:', ...b.do, 'Do not:', ...b.dont]
    case 'metric':
      return [`${b.name}. ${b.shows}. In plain words: ${b.eli5}. Higher: ${b.higher}. Lower: ${b.lower}.`]
    case 'speak':
      return b.items.map((x) => `${x.rom}: ${x.en}`)
    default:
      return []
  }
}

/** Everything in a guide that is worth hearing, in reading order. */
export function guideSpeech(guide: Guide, title: string): string[] {
  const out = [title, guide.intro]
  if (guide.nutshell?.length) {
    out.push('In a nutshell.')
    out.push(...guide.nutshell)
  }
  for (const [i, s] of guide.sections.entries()) {
    out.push(`Part ${i + 1}. ${s.title}.`)
    if (s.lead) out.push(s.lead)
    for (const b of s.blocks) out.push(...fromBlock(b))
  }
  return out.map(plain).filter((x) => x.length > 1)
}

