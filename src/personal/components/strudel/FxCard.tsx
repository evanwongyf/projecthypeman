import { Rich } from '../archive/GuideBlocks'

type Block = { t: 'fx-card'; sig: string; aliases?: string; simple: string; technical: string; higher: string; lower: string; typical: string }

const label = 'text-[11px] font-bold uppercase tracking-wide'

export default function FxCard({ block, color }: { block: Block; color: string }) {
  return (
    <figure className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b-2 px-4 py-2.5" style={{ borderColor: 'var(--line)', background: `color-mix(in srgb, ${color} 22%, var(--surface))` }}>
        <code className="font-mono text-sm font-bold">{block.sig}</code>
        {block.aliases && (
          <span className="text-xs" style={{ color: 'var(--ink-soft)' }}>
            also written {block.aliases}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3 px-4 py-3.5">
        <div className="rounded-[var(--radius)] border border-dashed px-3 py-2.5" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
          <p className={label} style={{ color: 'var(--ink-soft)' }}>
            In plain words
          </p>
          <p className="mt-0.5 text-sm leading-relaxed">
            <Rich text={block.simple} />
          </p>
        </div>
        <div>
          <p className={label} style={{ color: 'var(--ink-soft)' }}>
            How it works
          </p>
          <p className="mt-0.5 text-sm leading-relaxed">
            <Rich text={block.technical} />
          </p>
        </div>
        <div className="grid gap-2.5 sm:grid-cols-2">
          <div className="rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, var(--mint) 16%, var(--surface))' }}>
            <p className="text-xs font-bold">↑ Turn it up</p>
            <p className="mt-1 text-sm leading-relaxed">
              <Rich text={block.higher} />
            </p>
          </div>
          <div className="rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, var(--orange) 16%, var(--surface))' }}>
            <p className="text-xs font-bold">↓ Turn it down</p>
            <p className="mt-1 text-sm leading-relaxed">
              <Rich text={block.lower} />
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed">
          <span className={`${label} mr-1.5`} style={{ color: 'var(--ink-soft)' }}>
            Typical values
          </span>
          <Rich text={block.typical} />
        </p>
      </div>
    </figure>
  )
}
