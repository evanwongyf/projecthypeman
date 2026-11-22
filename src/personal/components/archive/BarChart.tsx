import type { Block } from '../../lib/archive/guide'

type BarsBlock = Extract<Block, { t: 'bars' }>

// A horizontal bar chart that doubles as a forest plot: each row has a value, and an
// optional interval is drawn as a whisker through it.
export function BarChart({ block, color }: { block: BarsBlock; color: string }) {
  const { items, unit = '', zero, refs = [], decimals = 2 } = block
  const all = items.flatMap((i) => [i.value, i.lo ?? i.value, i.hi ?? i.value, ...(zero ? [0] : [])])
  const lo0 = block.min ?? Math.min(0, ...all)
  const hi0 = block.max ?? Math.max(...all, ...refs.map((r) => r.at))
  const pad = (hi0 - lo0) * 0.04
  const lo = block.min ?? lo0 - (lo0 < 0 ? pad : 0)
  const hi = block.max ?? hi0 + pad
  const pct = (v: number) => `${(((v - lo) / (hi - lo)) * 100).toFixed(2)}%`
  const fmt = (n: number) => `${n.toFixed(decimals)}${unit}`
  const origin = zero || lo < 0 ? 0 : lo
  const rows: { key: string; header?: string; item?: BarsBlock['items'][number] }[] = []
  for (const it of items) {
    if (it.group) rows.push({ key: `g-${it.group}-${rows.length}`, header: it.group })
    rows.push({ key: it.label + rows.length, item: it })
  }
  return (
    <figure className="flex max-w-3xl flex-col gap-1.5">
      <div className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        {block.title && <p className="px-3 pt-2 text-sm font-bold">{block.title}</p>}
        <div className="flex flex-col gap-1 px-3 py-2.5">
          {rows.map((r) =>
            r.header ? (
              <p key={r.key} className="eyebrow mt-1.5 font-bold" style={{ color: 'var(--ink-soft)' }}>
                {r.header}
              </p>
            ) : (
              <div key={r.key} className="grid grid-cols-[minmax(6rem,11rem)_1fr_4.2rem] items-center gap-2 text-xs sm:grid-cols-[13rem_1fr_5rem]">
                <span className="font-bold leading-tight">
                  {r.item!.label}
                  {r.item!.note && <span className="block font-normal" style={{ color: 'var(--ink-soft)' }}>{r.item!.note}</span>}
                </span>
                <span className="relative h-5 rounded-sm" style={{ background: 'var(--paper-2)' }}>
                  {refs.map((f) => (
                    <span key={f.label} className="absolute top-0 bottom-0 w-px" style={{ left: pct(f.at), background: 'var(--ink-soft)', opacity: 0.5 }} />
                  ))}
                  {(zero || lo < 0) && <span className="absolute top-0 bottom-0 w-0.5" style={{ left: pct(0), background: 'var(--ink)' }} />}
                  <span
                    className="absolute top-0.5 bottom-0.5 rounded-sm"
                    style={{
                      left: pct(Math.min(origin, r.item!.value)),
                      width: `${(Math.abs(r.item!.value - origin) / (hi - lo)) * 100}%`,
                      background: r.item!.color ?? (r.item!.value < 0 ? '#d9534f' : color),
                    }}
                  />
                  {r.item!.lo !== undefined && r.item!.hi !== undefined && (
                    <>
                      <span className="absolute top-1/2 h-0.5 -translate-y-1/2" style={{ left: pct(r.item!.lo), width: `${((r.item!.hi - r.item!.lo) / (hi - lo)) * 100}%`, background: 'var(--ink)' }} />
                      <span className="absolute top-1 bottom-1 w-0.5" style={{ left: pct(r.item!.lo), background: 'var(--ink)' }} />
                      <span className="absolute top-1 bottom-1 w-0.5" style={{ left: pct(r.item!.hi), background: 'var(--ink)' }} />
                    </>
                  )}
                </span>
                <span className="text-right font-mono font-bold">{fmt(r.item!.value)}</span>
              </div>
            ),
          )}
          {refs.length > 0 && (
            <div className="grid grid-cols-[minmax(6rem,11rem)_1fr_4.2rem] gap-2 sm:grid-cols-[13rem_1fr_5rem]">
              <span />
              <span className="relative h-4">
                {refs.map((f) => (
                  <span key={f.label} className="absolute -translate-x-1/2 text-[10px] whitespace-nowrap" style={{ left: pct(f.at), color: 'var(--ink-soft)' }}>
                    {f.label}
                  </span>
                ))}
              </span>
              <span />
            </div>
          )}
        </div>
      </div>
      {block.caption && (
        <figcaption className="text-xs" style={{ color: 'var(--ink-soft)' }}>
          {block.caption}
        </figcaption>
      )}
    </figure>
  )
}
