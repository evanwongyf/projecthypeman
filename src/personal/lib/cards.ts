import type { CardType, Flashcard } from './types'
import { snapToWords } from './wordSnap'

export const CARD_TYPES: { id: CardType; label: string; glyph: string; blurb: string }[] = [
  { id: 'basic', label: 'Basic', glyph: 'Q→A', blurb: 'Question on the front, answer on the back' },
  { id: 'reversible', label: 'Two-way', glyph: '⇄', blurb: 'Asked in both directions' },
  { id: 'definition', label: 'Definition', glyph: 'Aa', blurb: 'A term, its meaning and an example' },
  { id: 'blackout', label: 'Blackout', glyph: '▮▮', blurb: 'Hide key words inside a sentence' },
  { id: 'mcq', label: 'Multiple choice', glyph: 'ABC', blurb: 'Pick the right option (or options)' },
  { id: 'truefalse', label: 'True / False', glyph: 'T/F', blurb: 'Judge a statement' },
  { id: 'typed', label: 'Type it', glyph: '[_]', blurb: 'Type the answer from memory' },
  { id: 'image', label: 'Image', glyph: '▣', blurb: 'A picture on the front, the back or both' },
]

export function cardType(card: { type?: CardType }): CardType {
  return card.type ?? 'basic'
}

export function cardTypeMeta(type: CardType) {
  return CARD_TYPES.find((t) => t.id === type) ?? CARD_TYPES[0]
}

// ── blackout ───────────────────────────────────────────────────────────────
// Hidden text is written {bo}like this{/bo}. {bo}like this{bo} and {bo:like this}
// are accepted too, so it's forgiving to type by hand.

const BLACKOUT_RE = /\{bo\}([\s\S]+?)\{\/?bo\}|\{bo:([^}]+)\}/gi

export type BlackoutPart = { text: string; hidden: boolean }

export function parseBlackout(text: string): BlackoutPart[] {
  const parts: BlackoutPart[] = []
  let last = 0
  for (const m of text.matchAll(BLACKOUT_RE)) {
    const at = m.index ?? 0
    if (at > last) parts.push({ text: text.slice(last, at), hidden: false })
    parts.push({ text: m[1] ?? m[2], hidden: true })
    last = at + m[0].length
  }
  if (last < text.length) parts.push({ text: text.slice(last), hidden: false })
  return parts
}

export function countBlackouts(text: string): number {
  return parseBlackout(text).filter((p) => p.hidden).length
}

// The sentence with the markup removed (what a normal reader would see).
export function stripBlackout(text: string): string {
  return parseBlackout(text)
    .map((p) => p.text)
    .join('')
}

// Black out the selected text (expanded to whole words). If the selection is already
// inside a blackout, that blackout is removed instead, so the button works as a toggle.
export function toggleBlackoutSelection(
  text: string,
  selStart: number,
  selEnd: number,
): { text: string; selStart: number; selEnd: number } | null {
  const matches = [...text.matchAll(BLACKOUT_RE)].map((m) => ({
    start: m.index ?? 0,
    end: (m.index ?? 0) + m[0].length,
    inner: m[1] ?? m[2],
  }))

  const inside = matches.find((m) => selStart >= m.start && selEnd <= m.end)
  if (inside) {
    const next = text.slice(0, inside.start) + inside.inner + text.slice(inside.end)
    return { text: next, selStart: inside.start, selEnd: inside.start + inside.inner.length }
  }

  const { start, end } = snapToWords(text, selStart, selEnd)
  if (end <= start) return null

  // Selection swallowing existing blackouts: unwrap them so we don't nest markers.
  const covered = matches.filter((m) => m.start >= start && m.end <= end)
  const partial = matches.some((m) => (m.start < start && m.end > start) || (m.start < end && m.end > end))
  if (partial) return null

  let inner = text.slice(start, end)
  for (const m of [...covered].reverse()) {
    inner = inner.slice(0, m.start - start) + m.inner + inner.slice(m.end - start)
  }
  const next = text.slice(0, start) + '{bo}' + inner + '{/bo}' + text.slice(end)
  return { text: next, selStart: start, selEnd: start + 4 + inner.length + 5 }
}

// "Pick words" mode: the text as tappable word tokens.
export type PickToken = { text: string; isWord: boolean; hidden: boolean }
const WORD_SPLIT = /([\p{L}\p{N}_'’-]+)/u

export function toPickTokens(text: string): PickToken[] {
  const tokens: PickToken[] = []
  for (const part of parseBlackout(text)) {
    for (const piece of part.text.split(WORD_SPLIT)) {
      if (!piece) continue
      tokens.push({ text: piece, isWord: WORD_SPLIT.test(piece), hidden: part.hidden })
    }
  }
  return tokens
}

// Neighbouring hidden words (with only whitespace between them) become one blank.
export function fromPickTokens(tokens: PickToken[]): string {
  const hiddenWord = (i: number) => !!tokens[i]?.isWord && tokens[i].hidden
  const hidden = tokens.map((t, i) =>
    t.isWord ? t.hidden : /^\s+$/.test(t.text) && hiddenWord(i - 1) && hiddenWord(i + 1),
  )
  let out = ''
  let i = 0
  while (i < tokens.length) {
    if (!hidden[i]) {
      out += tokens[i].text
      i++
      continue
    }
    let run = ''
    while (i < tokens.length && hidden[i]) run += tokens[i++].text
    out += `{bo}${run}{/bo}`
  }
  return out
}

// ── typed answers ──────────────────────────────────────────────────────────

function normalizeAnswer(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
}

// Case, accents, punctuation and extra spaces don't count as mistakes.
export function isTypedCorrect(input: string, card: Pick<Flashcard, 'back' | 'alternates'>): boolean {
  const typed = normalizeAnswer(input)
  if (!typed) return false
  return [card.back, ...(card.alternates ?? [])].some((a) => normalizeAnswer(a) === typed)
}

// ── misc ───────────────────────────────────────────────────────────────────

export function shuffle<T>(items: T[]): T[] {
  const a = [...items]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const UPLOADABLE = new Set(['image/png', 'image/jpeg', 'image/webp', 'image/gif'])
const MAX_EDGE = 1600

// Phone photos are huge; scale them down before uploading so it's fast on mobile data.
// GIFs are left alone (re-encoding would drop the animation).
export async function prepareImage(file: File): Promise<{ blob: Blob; mimeType: string }> {
  if (!UPLOADABLE.has(file.type)) throw new Error('Please choose a PNG, JPEG, WebP or GIF image.')
  if (file.type === 'image/gif') return { blob: file, mimeType: file.type }

  const bitmap = await createImageBitmap(file)
  const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height))
  if (scale === 1 && file.size < 1_500_000) {
    bitmap.close()
    return { blob: file, mimeType: file.type }
  }

  const canvas = document.createElement('canvas')
  canvas.width = Math.round(bitmap.width * scale)
  canvas.height = Math.round(bitmap.height * scale)
  canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
  bitmap.close()

  // PNGs stay PNG (transparency); everything else becomes JPEG.
  const mimeType = file.type === 'image/png' ? 'image/png' : 'image/jpeg'
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, mimeType, 0.85))
  if (!blob) throw new Error("Couldn't process that image.")
  return { blob, mimeType }
}
