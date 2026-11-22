import { useState } from 'react'
import type { ReactNode } from 'react'
import type { FieldKey } from '../../lib/archive/cite'
import { parseCite } from '../../lib/archive/cite'
import { FORMATS, formatById } from '../../lib/archive/references/formats'
import type { FormatId } from '../../lib/archive/references/formats'
import { SOURCE_TYPES, sourceTypeById } from '../../lib/archive/references/sourceTypes'
import type { SourceTypeId } from '../../lib/archive/references/sourceTypes'
import { caveatFor, noteTemplateFor, templateFor } from '../../lib/archive/references/templates'
import { Cited, FieldLegend } from './Cited'
import { CopyButton } from './CopyButton'

function Block({ title, children, action }: { title: string; children: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <div className="flex min-h-10 items-center justify-between gap-2">
        <span className="eyebrow font-bold">{title}</span>
        {action}
      </div>
      <div
        className="rounded-[var(--radius)] border p-4 text-sm sm:text-base"
        style={{ background: '#fffef9', color: '#1c1410', borderColor: 'var(--line)', boxShadow: 'var(--shadow-card)' }}
      >
        {children}
      </div>
    </div>
  )
}

// Step 7
export function TemplatesStep({ format }: { format: FormatId }) {
  const [typeId, setTypeId] = useState<SourceTypeId>('journal')
  const [focus, setFocus] = useState<FieldKey | null>(null)
  const f = formatById(format)
  const type = sourceTypeById(typeId)
  const entry = templateFor(typeId, format)
  const note = noteTemplateFor(typeId)
  const caveat = caveatFor(typeId, format)

  const seen = new Set<FieldKey>()
  for (const t of parseCite(entry + (format === 'chicago' ? note : ''))) if (t.kind === 'field') seen.add(t.key)

  return (
    <>
      <p className="max-w-2xl text-sm sm:text-base">
        Pick the kind of source you used. You get the empty skeleton to fill in, then a finished example in <b>{f.name}</b>. Each colour is one piece of information.
      </p>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" role="radiogroup" aria-label="Source type">
        {SOURCE_TYPES.map((t) => {
          const active = t.id === typeId
          return (
            <button
              key={t.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setTypeId(t.id)}
              className="rounded-[var(--radius)] border px-3 py-2.5 text-left text-sm font-bold pointer-coarse:min-h-12"
              style={{
                borderColor: 'var(--line)',
                background: active ? 'var(--ink)' : 'var(--surface)',
                color: active ? '#fff' : 'var(--ink)',
                boxShadow: active ? '3px 3px 0 var(--mustard)' : 'none',
              }}
            >
              {t.label}
            </button>
          )
        })}
      </div>

      <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
        {type.blurb}
      </p>

      <FieldLegend fields={[...seen]} focus={focus} onFocus={setFocus} />

      <div className="grid gap-4 xl:grid-cols-2">
        <Block title={`skeleton, ${f.name}`}>
          <Cited src={entry} mode="skeleton" focus={focus} />
        </Block>
        <Block title="worked example" action={<CopyButton src={entry} label="Copy example" />}>
          <Cited src={entry} focus={focus} />
        </Block>
      </div>

      {format === 'chicago' && (
        <div className="grid gap-4 xl:grid-cols-2">
          <Block title="footnote skeleton">
            <Cited src={note} mode="skeleton" focus={focus} />
          </Block>
          <Block title="footnote example" action={<CopyButton src={note} label="Copy footnote" />}>
            <Cited src={note} focus={focus} />
          </Block>
        </div>
      )}

      {caveat && (
        <p className="rounded-[var(--radius)] border p-3.5 text-sm" style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, var(--mustard) 25%, var(--surface))' }}>
          <b>Good to know:</b> {caveat}
        </p>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="card-surface rounded-[var(--radius)] p-4">
          <p className="text-sm font-bold">Where to find the details</p>
          <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm" style={{ color: 'var(--ink-soft)' }}>
            {type.find.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="card-surface rounded-[var(--radius)] p-4">
          <p className="text-sm font-bold">Common mistakes</p>
          <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm" style={{ color: 'var(--ink-soft)' }}>
            {type.mistakes.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>

      <details className="rounded-[var(--radius)] border p-4" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <summary className="cursor-pointer text-sm font-bold pointer-coarse:py-2">See the {type.label.toLowerCase()} skeleton in all six styles</summary>
        <div className="mt-3 flex flex-col gap-3">
          {FORMATS.map((x) => (
            <div key={x.id} className="flex flex-col gap-1">
              <span className="text-xs font-bold">{x.name}</span>
              <p className="rounded-[var(--radius)] border p-3 text-sm" style={{ background: '#fffef9', color: '#1c1410', borderColor: 'var(--line)' }}>
                <Cited src={templateFor(typeId, x.id)} mode="skeleton" />
              </p>
            </div>
          ))}
        </div>
      </details>
    </>
  )
}

const CHECKS = [
  'Every in-text citation has a matching entry in my list.',
  'Every entry in my list is cited somewhere in my text.',
  'Quotes have quotation marks and a page number.',
  'I used one style from start to finish.',
  'The list is in the right order (alphabetical, or numbered as first cited).',
  'Titles, italics and punctuation match the examples for my style.',
  'Links and DOIs work and are complete.',
  'I checked my school guide for any local rules.',
]

const GUIDES = [
  { name: 'APA', url: 'https://apastyle.apa.org/style-grammar-guidelines/references/examples' },
  { name: 'MLA', url: 'https://style.mla.org/' },
  { name: 'Chicago', url: 'https://www.chicagomanualofstyle.org/tools_citationguide/citation-guide-1.html' },
  { name: 'Harvard (Cite Them Right)', url: 'https://www.citethemrightonline.com/' },
  { name: 'IEEE', url: 'https://ieeeauthorcenter.ieee.org/' },
  { name: 'Vancouver (Citing Medicine)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK7256/' },
]

// Step 8
export function ChecklistStep() {
  const [done, setDone] = useState<Record<number, boolean>>({})
  const count = Object.values(done).filter(Boolean).length

  return (
    <>
      <p className="max-w-2xl text-sm sm:text-base">Before you hand it in, tick these off.</p>
      <ul className="flex flex-col gap-2">
        {CHECKS.map((c, i) => (
          <li key={c}>
            <label
              className="flex cursor-pointer items-start gap-3 rounded-[var(--radius)] border p-3.5 pointer-coarse:min-h-14"
              style={{ borderColor: 'var(--line)', background: done[i] ? 'color-mix(in srgb, #22a559 14%, var(--surface))' : 'var(--surface)' }}
            >
              <input
                type="checkbox"
                checked={!!done[i]}
                onChange={(e) => setDone({ ...done, [i]: e.target.checked })}
                className="mt-0.5 h-5 w-5 shrink-0 accent-[#22a559]"
              />
              <span className="text-sm" style={{ textDecoration: done[i] ? 'line-through' : 'none', color: done[i] ? 'var(--ink-soft)' : 'var(--ink)' }}>
                {c}
              </span>
            </label>
          </li>
        ))}
      </ul>
      <p className="font-mono text-xs font-bold" style={{ color: 'var(--ink-soft)' }}>
        {count} of {CHECKS.length} done
      </p>
      <div className="card-surface rounded-[var(--radius)] p-4">
        <p className="text-sm font-bold">Official guides</p>
        <p className="mt-1 text-xs" style={{ color: 'var(--ink-soft)' }}>
          Styles get updated. When in doubt, the official guide wins over this page.
        </p>
        <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
          {GUIDES.map((g) => (
            <li key={g.name}>
              <a href={g.url} target="_blank" rel="noreferrer" className="text-sm font-bold underline underline-offset-2">
                {g.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
