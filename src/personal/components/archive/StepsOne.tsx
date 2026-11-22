import { FORMATS } from '../../lib/archive/references/formats'
import type { FormatId } from '../../lib/archive/references/formats'
import { EssayCard, HighlightKey, SourcePaperCard } from './PaperMocks'

function Box({ title, body, tone }: { title: string; body: string; tone: string }) {
  return (
    <div className="flex-1 rounded-[var(--radius)] border p-3.5" style={{ borderColor: 'var(--line)', background: `color-mix(in srgb, ${tone} 22%, var(--surface))` }}>
      <p className="text-sm font-bold">{title}</p>
      <p className="mt-1 text-xs" style={{ color: 'var(--ink-soft)' }}>
        {body}
      </p>
    </div>
  )
}

const Arrow = () => (
  <span aria-hidden className="flex shrink-0 items-center justify-center text-xl font-bold md:px-1">
    <span className="md:hidden">↓</span>
    <span className="hidden md:inline">→</span>
  </span>
)

// Step 1
export function WhyStep() {
  return (
    <>
      <p className="max-w-2xl text-sm sm:text-base">
        A reference has <b>two parts that work as a pair</b>. One sits inside your writing and points to the other, which sits at the end and tells the reader exactly where the source is.
      </p>
      <div className="flex flex-col gap-2 md:flex-row md:items-stretch">
        <Box title="1. In-text citation" body="A short mark right after the idea you borrowed, like (Okafor & Lindqvist, 2021)." tone="var(--mustard)" />
        <Arrow />
        <Box title="2. Reference list entry" body="The full details at the end of your paper, so anyone can find the source." tone="var(--teal)" />
        <Arrow />
        <Box title="The source" body="The paper, book or page you actually read." tone="var(--orange)" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="card-surface rounded-[var(--radius)] p-4">
          <p className="text-sm font-bold">Why bother?</p>
          <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm" style={{ color: 'var(--ink-soft)' }}>
            <li>It gives credit to the person whose idea it was.</li>
            <li>It lets your reader check your evidence.</li>
            <li>It protects you from accidental plagiarism.</li>
          </ul>
        </div>
        <div className="card-surface rounded-[var(--radius)] p-4">
          <p className="text-sm font-bold">Three rules that never change</p>
          <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm" style={{ color: 'var(--ink-soft)' }}>
            <li>Every in-text citation needs a matching entry in the list.</li>
            <li>Every entry in the list needs to be cited in the text.</li>
            <li>Use one style all the way through.</li>
          </ul>
        </div>
      </div>
    </>
  )
}

// Step 2
export function StyleStep({ value, onChange }: { value: FormatId; onChange: (id: FormatId) => void }) {
  return (
    <>
      <p className="max-w-2xl text-sm sm:text-base">
        Your teacher or school usually decides the style. If you are not told, ask. Tap a style below, or use the bar at the top, and every step on this page switches to it.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {FORMATS.map((f) => {
          const active = f.id === value
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onChange(f.id)}
              aria-pressed={active}
              className="flex flex-col gap-1.5 rounded-[var(--radius)] border p-4 text-left transition-transform"
              style={{
                borderColor: 'var(--line)',
                background: active ? 'var(--surface)' : 'var(--paper-2)',
                boxShadow: active ? '4px 4px 0 var(--mustard)' : 'none',
                transform: active ? 'translate(-1px, -1px)' : 'none',
              }}
            >
              <span className="flex items-baseline justify-between gap-2">
                <span className="text-lg font-bold">{f.name}</span>
                <span className="text-[11px] font-bold" style={{ color: 'var(--ink-soft)' }}>
                  {f.edition}
                </span>
              </span>
              <span className="text-xs" style={{ color: 'var(--ink-soft)' }}>
                {f.usedIn}
              </span>
              <span className="mt-1 text-xs">
                <b>In the text:</b> {f.inTextRule}
              </span>
              <span className="text-xs">
                <b>End list:</b> {f.listTitle}, {f.listOrder.toLowerCase()}
              </span>
            </button>
          )
        })}
      </div>
    </>
  )
}

// Step 3
export function PapersStep() {
  return (
    <>
      <p className="max-w-2xl text-sm sm:text-base">
        Here is a made-up example we will follow through the rest of the page. On the left is the paper you read. On the right is the essay you are writing. The two highlighted sentences are the ideas you borrow.
      </p>
      <HighlightKey />
      <div className="grid gap-5 lg:grid-cols-2">
        <SourcePaperCard />
        <EssayCard />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-[var(--radius)] border p-4" style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, #facc15 22%, var(--surface))' }}>
          <p className="text-sm font-bold">Direct quote</p>
          <p className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
            You copy the exact words. Put them in quotation marks and add the <b>page number</b>. Use this when the wording itself matters.
          </p>
        </div>
        <div className="rounded-[var(--radius)] border p-4" style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, #60a5fa 22%, var(--surface))' }}>
          <p className="text-sm font-bold">Paraphrase</p>
          <p className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
            You say the same idea in your own words and sentence shape. No quotation marks, but you <b>still cite it</b>. Most of your paper should be paraphrase.
          </p>
        </div>
      </div>
      <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
        Notice the colours on the source paper too. The author, title, journal, year, volume, issue, pages and DOI are the pieces you will need in step 5.
      </p>
    </>
  )
}
