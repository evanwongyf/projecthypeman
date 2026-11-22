import type { ReactNode } from 'react'
import { FIELD_META } from '../../lib/archive/cite'
import type { FieldKey } from '../../lib/archive/cite'
import { ESSAY, IN_TEXT, SOURCE_PAPER } from '../../lib/archive/references/example'
import type { FormatId } from '../../lib/archive/references/formats'
import { Cited } from './Cited'

export const QUOTE_COLOR = '#facc15'
export const PARA_COLOR = '#60a5fa'

const hl = (color: string) => ({ background: `color-mix(in srgb, ${color} 38%, transparent)`, boxShadow: `inset 0 -2px 0 ${color}` })

function Meta({ k, children }: { k: FieldKey; children: string }) {
  const c = FIELD_META[k].color
  return (
    <span className="rounded px-1 py-0.5" style={{ background: `color-mix(in srgb, ${c} 16%, transparent)`, boxShadow: `inset 0 -2px 0 ${c}` }} title={FIELD_META[k].label}>
      {children}
    </span>
  )
}

function Sheet({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <span className="eyebrow font-bold">{label}</span>
      <div
        className="flex flex-col gap-3 rounded-[var(--radius)] border p-4 sm:p-5"
        style={{ background: '#fffef9', borderColor: 'var(--line)', boxShadow: 'var(--shadow-card)', color: '#1c1410' }}
      >
        {children}
      </div>
    </div>
  )
}

// The paper the student read. The details you need for the reference are colour coded, and
// the two passages the student uses are highlighted with their page numbers.
export function SourcePaperCard() {
  const s = SOURCE_PAPER
  return (
    <Sheet label="the source paper you read">
      <p className="font-mono text-[11px] leading-relaxed font-bold uppercase" style={{ color: '#6b5f52' }}>
        <Meta k="ct">{s.journal}</Meta>, vol. <Meta k="vo">{s.volume}</Meta>, no. <Meta k="is">{s.issue}</Meta>, <Meta k="yr">{s.year}</Meta>, pp. <Meta k="pg">{s.pages}</Meta>
      </p>
      <h3 className="text-xl leading-tight sm:text-2xl" style={{ fontFamily: 'var(--font-hero)' }}>
        <Meta k="ti">{s.title}</Meta>
      </h3>
      <p className="text-sm font-bold">
        <Meta k="au">{s.authors}</Meta>
      </p>
      <p className="text-xs" style={{ color: '#6b5f52' }}>
        {s.abstract}
      </p>
      <div className="flex flex-col gap-2 border-t-2 pt-3 text-sm leading-relaxed" style={{ borderColor: '#e5dccb' }}>
        <p>
          <span className="mr-1.5 font-mono text-[10px] font-bold" style={{ color: '#6b5f52' }}>
            p. {s.quoted.page}
          </span>
          <span style={hl(QUOTE_COLOR)}>{s.quoted.text}</span>
        </p>
        <p className="text-xs" style={{ color: '#9a8f80' }}>
          ...
        </p>
        <p>
          <span className="mr-1.5 font-mono text-[10px] font-bold" style={{ color: '#6b5f52' }}>
            p. {s.paraphrased.page}
          </span>
          <span style={hl(PARA_COLOR)}>{s.paraphrased.text}</span>
        </p>
      </div>
      <p className="font-mono text-[11px] break-all" style={{ color: '#6b5f52' }}>
        DOI: <Meta k="id">{s.doi}</Meta>
      </p>
    </Sheet>
  )
}

// The student's essay. Without a `format` the citations are empty placeholders; with one,
// the real in-text citations are filled in.
export function EssayCard({ format, focus = null }: { format?: FormatId; focus?: FieldKey | null }) {
  const cite = format ? IN_TEXT[format] : null
  const isNote = format === 'chicago' // note numbers sit after the punctuation
  const placeholder = (
    <span className="rounded border border-dashed px-1.5 py-0.5 text-xs font-bold" style={{ borderColor: '#9a8f80', color: '#6b5f52' }}>
      citation goes here
    </span>
  )
  return (
    <Sheet label="your paper">
      <h3 className="text-xl leading-tight sm:text-2xl" style={{ fontFamily: 'var(--font-hero)' }}>
        {ESSAY.title}
      </h3>
      <p className="text-sm leading-loose">
        {ESSAY.intro} {ESSAY.quoteLead}
        <span style={hl(QUOTE_COLOR)}>{ESSAY.quoteText}</span>
        {isNote ? '."' : '" '}
        {cite ? <Cited src={cite.quote} focus={focus} /> : placeholder}
        {isNote ? ' ' : '. '}
        {ESSAY.paraphraseLead}
        <span style={hl(PARA_COLOR)}>{ESSAY.paraphraseText}</span>
        {isNote ? '.' : ' '}
        {cite ? <Cited src={cite.paraphrase} focus={focus} /> : placeholder}
        {isNote ? '' : '.'}
      </p>
    </Sheet>
  )
}

export function HighlightKey() {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold">
      <span className="flex items-center gap-2">
        <span className="h-3 w-6 rounded" style={hl(QUOTE_COLOR)} />
        Direct quote (exact words)
      </span>
      <span className="flex items-center gap-2">
        <span className="h-3 w-6 rounded" style={hl(PARA_COLOR)} />
        Paraphrase (your own words)
      </span>
    </div>
  )
}
