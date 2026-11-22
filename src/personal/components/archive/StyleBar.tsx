import { FORMATS } from '../../lib/archive/references/formats'
import type { FormatId } from '../../lib/archive/references/formats'

// The one control that drives the whole walkthrough. Sticks to the top of the screen so
// you can switch style at any step, on a phone or a laptop.
export function StyleBar({ value, onChange }: { value: FormatId; onChange: (id: FormatId) => void }) {
  return (
    <div
      className="sticky top-0 z-20 -mx-4 border-b-2 px-4 py-2.5 sm:-mx-6 sm:px-6"
      style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <span className="eyebrow shrink-0 font-bold">style</span>
        <div className="-mx-1 flex min-w-0 flex-1 gap-1.5 overflow-x-auto px-1 py-1" role="radiogroup" aria-label="Citation style">
          {FORMATS.map((f) => {
            const active = f.id === value
            return (
              <button
                key={f.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => onChange(f.id)}
                className="shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-bold pointer-coarse:min-h-10"
                style={{
                  borderColor: 'var(--line)',
                  background: active ? 'var(--ink)' : 'var(--surface)',
                  color: active ? '#fff' : 'var(--ink)',
                  boxShadow: active ? '2px 2px 0 var(--mustard)' : 'none',
                }}
              >
                {f.name}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
