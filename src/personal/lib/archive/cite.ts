// A tiny markup for citation strings so one string can render as a skeleton
// (placeholders) or as a filled example, with each piece colour coded.
//
//   {key|Placeholder|Example}   a piece of the citation (author, year, title...)
//   *text*                      toggles italics
//   anything else               literal punctuation and words

export type FieldKey = 'au' | 'yr' | 'ti' | 'ct' | 'vo' | 'is' | 'pg' | 'pb' | 'ed' | 'id' | 'ot'

export const FIELD_META: Record<FieldKey, { label: string; color: string; hint: string }> = {
  au: { label: 'Author', color: '#2563eb', hint: 'Who wrote it' },
  yr: { label: 'Date', color: '#16a34a', hint: 'When it was published' },
  ti: { label: 'Title', color: '#ea580c', hint: 'Title of the work itself' },
  ct: { label: 'Container', color: '#9333ea', hint: 'Journal, book, or website it sits inside' },
  vo: { label: 'Volume', color: '#0891b2', hint: 'Volume number of the journal' },
  is: { label: 'Issue', color: '#db2777', hint: 'Issue number' },
  pg: { label: 'Pages', color: '#ca8a04', hint: 'Page range or page number' },
  pb: { label: 'Publisher', color: '#4f46e5', hint: 'Who published it' },
  ed: { label: 'Editor', color: '#0d9488', hint: 'Who edited the book' },
  id: { label: 'DOI or link', color: '#dc2626', hint: 'A permanent link to find it' },
  ot: { label: 'Extra detail', color: '#64748b', hint: 'Edition, report number, degree, and so on' },
}

export type CiteToken =
  | { kind: 'text'; text: string; italic: boolean }
  | { kind: 'field'; key: FieldKey; placeholder: string; example: string; italic: boolean }

const TOKEN = /\*|\{([a-z]{2})\|([^|}]*)\|([^}]*)\}/g

export function parseCite(src: string): CiteToken[] {
  const tokens: CiteToken[] = []
  let italic = false
  let last = 0
  for (const m of src.matchAll(TOKEN)) {
    const at = m.index ?? 0
    if (at > last) tokens.push({ kind: 'text', text: src.slice(last, at), italic })
    if (m[0] === '*') {
      italic = !italic
    } else {
      tokens.push({ kind: 'field', key: m[1] as FieldKey, placeholder: m[2] || m[3], example: m[3] || m[2], italic })
    }
    last = at + m[0].length
  }
  if (last < src.length) tokens.push({ kind: 'text', text: src.slice(last), italic })
  return tokens
}

// Plain text version of a filled example (used for the copy button).
export function citeToPlain(src: string): string {
  return parseCite(src)
    .map((t) => (t.kind === 'text' ? t.text : t.example))
    .join('')
}

// HTML version, so pasting into Word or Google Docs keeps the italics.
export function citeToHtml(src: string): string {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return parseCite(src)
    .map((t) => {
      const s = esc(t.kind === 'text' ? t.text : t.example)
      return t.italic ? `<i>${s}</i>` : s
    })
    .join('')
}
