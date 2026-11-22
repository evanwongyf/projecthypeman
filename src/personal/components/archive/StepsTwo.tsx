import { useMemo, useState } from 'react'
import { FIELD_META, parseCite } from '../../lib/archive/cite'
import type { FieldKey } from '../../lib/archive/cite'
import { CHICAGO_NOTES, IN_TEXT, SOURCE_PAPER } from '../../lib/archive/references/example'
import { FORMATS, formatById } from '../../lib/archive/references/formats'
import type { FormatId } from '../../lib/archive/references/formats'
import { noteTemplateFor, templateFor } from '../../lib/archive/references/templates'
import { Cited, FieldLegend } from './Cited'
import { CopyButton } from './CopyButton'
import { EssayCard, HighlightKey } from './PaperMocks'

function fieldsIn(...srcs: string[]): FieldKey[] {
  const seen = new Set<FieldKey>()
  for (const s of srcs) for (const t of parseCite(s)) if (t.kind === 'field') seen.add(t.key)
  return [...seen]
}

// Step 4
export function InTextStep({ format }: { format: FormatId }) {
  const f = formatById(format)
  const cite = IN_TEXT[format]
  const [focus, setFocus] = useState<FieldKey | null>(null)
  const fields = fieldsIn(cite.quote, cite.paraphrase)

  return (
    <>
      <p className="max-w-2xl text-sm sm:text-base">
        In <b>{f.name}</b>, the mark inside your text is: <b>{f.inTextRule.toLowerCase()}</b>. Here is the same essay with the citations filled in.
      </p>
      <HighlightKey />
      <EssayCard format={format} focus={focus} />
      {format === 'chicago' && (
        <div className="rounded-[var(--radius)] border p-4" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
          <p className="eyebrow mb-2 font-bold">footnotes at the bottom of the page</p>
          <ol className="flex flex-col gap-2 text-sm">
            {CHICAGO_NOTES.map((n, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-mono font-bold">{i + 1}.</span>
                <Cited src={n} focus={focus} />
              </li>
            ))}
          </ol>
          <p className="mt-2 text-xs" style={{ color: 'var(--ink-soft)' }}>
            The first note gives the full source. Later notes for the same source use a short form.
          </p>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-bold" style={{ color: 'var(--ink-soft)' }}>
          Tap a piece to see where it comes from.
        </p>
        <FieldLegend fields={fields} focus={focus} onFocus={setFocus} />
      </div>
      <p className="rounded-[var(--radius)] border p-3.5 text-sm" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
        {cite.note}
      </p>
    </>
  )
}

const SOURCE_VALUES: { key: FieldKey; value: string }[] = [
  { key: 'au', value: SOURCE_PAPER.authors },
  { key: 'yr', value: SOURCE_PAPER.year },
  { key: 'ti', value: SOURCE_PAPER.title },
  { key: 'ct', value: SOURCE_PAPER.journal },
  { key: 'vo', value: SOURCE_PAPER.volume },
  { key: 'is', value: SOURCE_PAPER.issue },
  { key: 'pg', value: SOURCE_PAPER.pages },
  { key: 'id', value: SOURCE_PAPER.doi },
]

// Step 5
export function BuildStep({ format }: { format: FormatId }) {
  const f = formatById(format)
  const [focus, setFocus] = useState<FieldKey | null>(null)
  const entry = templateFor('journal', format)
  const note = noteTemplateFor('journal')
  const fields = useMemo(() => fieldsIn(entry), [entry])

  return (
    <>
      <p className="max-w-2xl text-sm sm:text-base">
        Now the entry for your list. Every piece comes straight from the source paper. Tap a piece on the left to see exactly where it lands in the {f.name} entry on the right.
      </p>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div className="flex flex-col gap-2">
          <span className="eyebrow font-bold">pieces from the source</span>
          {SOURCE_VALUES.filter((r) => fields.includes(r.key)).map((r) => {
            const meta = FIELD_META[r.key]
            const active = focus === r.key
            return (
              <button
                key={r.key}
                type="button"
                onClick={() => setFocus(active ? null : r.key)}
                aria-pressed={active}
                className="flex items-start gap-3 rounded-[var(--radius)] border p-3 text-left pointer-coarse:min-h-14"
                style={{
                  borderColor: 'var(--line)',
                  background: active ? `color-mix(in srgb, ${meta.color} 24%, var(--surface))` : 'var(--surface)',
                  boxShadow: active ? `3px 3px 0 ${meta.color}` : 'none',
                }}
              >
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full" style={{ background: meta.color }} />
                <span className="min-w-0">
                  <span className="block text-xs font-bold">
                    {meta.label} <span style={{ color: 'var(--ink-soft)' }}>· {meta.hint}</span>
                  </span>
                  <span className="block text-sm break-words">{r.value}</span>
                </span>
              </button>
            )
          })}
        </div>

        <div className="flex min-w-0 flex-col gap-3">
          <span className="eyebrow font-bold">an entry in your {f.listTitle}</span>
          <div
            className="rounded-[var(--radius)] border p-4 text-sm sm:text-base"
            style={{ background: '#fffef9', color: '#1c1410', borderColor: 'var(--line)', boxShadow: 'var(--shadow-card)' }}
          >
            <Cited src={entry} focus={focus} />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <CopyButton src={entry} label="Copy entry" />
            <span className="text-xs" style={{ color: 'var(--ink-soft)' }}>
              Keeps the italics when you paste into Word or Docs.
            </span>
          </div>
          {format === 'chicago' && (
            <div className="flex flex-col gap-2">
              <span className="eyebrow font-bold">and the first footnote</span>
              <div className="rounded-[var(--radius)] border p-4 text-sm" style={{ background: '#fffef9', color: '#1c1410', borderColor: 'var(--line)' }}>
                <Cited src={note} focus={focus} />
              </div>
            </div>
          )}
          <ul className="list-disc space-y-1 pl-5 text-sm" style={{ color: 'var(--ink-soft)' }}>
            <li>{f.tip}</li>
            <li>
              Order in the list: {f.listOrder.toLowerCase()}. Give the list the heading <b>{f.listTitle}</b>.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

// Step 6
export function CompareStep({ format, onPick }: { format: FormatId; onPick: (id: FormatId) => void }) {
  return (
    <>
      <p className="max-w-2xl text-sm sm:text-base">
        The same source, written in all six styles. The facts never change. Only the order, punctuation and italics do.
      </p>
      <div className="grid gap-4 xl:grid-cols-2">
        {FORMATS.map((f) => {
          const cite = IN_TEXT[f.id]
          const active = f.id === format
          return (
            <div
              key={f.id}
              className="flex min-w-0 flex-col gap-3 rounded-[var(--radius)] border p-4"
              style={{
                borderColor: 'var(--line)',
                background: 'var(--surface)',
                boxShadow: active ? '4px 4px 0 var(--mustard)' : 'none',
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-lg font-bold">{f.name}</span>
                {active ? (
                  <span className="eyebrow font-bold">your style</span>
                ) : (
                  <button type="button" onClick={() => onPick(f.id)} className="btn btn-ghost px-3 py-1.5 text-xs pointer-coarse:min-h-10">
                    Use this style
                  </button>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <span className="eyebrow font-bold">in the text</span>
                <p className="text-sm">
                  <Cited src={cite.quote} /> <span style={{ color: 'var(--ink-soft)' }}>quote</span>
                </p>
                <p className="text-sm">
                  <Cited src={cite.paraphrase} /> <span style={{ color: 'var(--ink-soft)' }}>paraphrase</span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="eyebrow font-bold">in the {f.listTitle.toLowerCase()}</span>
                <p className="text-sm">
                  <Cited src={templateFor('journal', f.id)} />
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
