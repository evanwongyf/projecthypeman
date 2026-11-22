// Characters that belong to a word. Punctuation like . , ; ( ) is excluded so a
// highlight of "word." snaps to "word", while apostrophes/hyphens stay inside
// words ("don't", "well-known").
const WORD_CHAR = /[\p{L}\p{N}_'’-]/u

export function isWordChar(ch: string | undefined): boolean {
  return ch !== undefined && ch !== '' && WORD_CHAR.test(ch)
}

// Expands [start, end) in `text` outward to whole-word boundaries, after
// trimming any whitespace/punctuation the drag picked up at the edges.
export function snapToWords(text: string, start: number, end: number): { start: number; end: number } {
  while (start < end && !isWordChar(text[start])) start++
  while (end > start && !isWordChar(text[end - 1])) end--
  while (start > 0 && isWordChar(text[start - 1])) start--
  while (end < text.length && isWordChar(text[end])) end++
  return { start, end }
}
