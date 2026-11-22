import { useMemo, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { CATEGORIES, EQUIPMENT } from '../../lib/firstaid/equipment'
import type { EquipmentItem } from '../../lib/firstaid/equipment'
import { Card, Pills, soft } from '../sports/shared'
import { EquipmentIcon } from './EquipmentIcons'

type T = Extract<Block, { t: 'first-aid-kit' }>

export default function EquipmentBlock({ block, color }: { block: T; color: string }) {
  const [cat, setCat] = useState<string>(block.category ?? 'all')
  const [sel, setSel] = useState<EquipmentItem | null>(null)
  const list = useMemo(() => (cat === 'all' ? EQUIPMENT : EQUIPMENT.filter((e) => e.category === cat)), [cat])

  return (
    <Card
      title="A well-stocked first aid kit"
      color={color}
      note="Icons are original schematics, not photographs: no usable public-domain photo set of first aid equipment could be found. What matters for learning is what each item is for and how to use it, which is the same whatever it looks like on the shelf."
    >
      {!block.category && (
        <Pills<string>
          value={cat}
          options={[['all', 'All'], ...CATEGORIES.map((c) => [c, c] as [string, string])]}
          onChange={setCat}
          label="Category"
        />
      )}
      <div className="flex flex-wrap gap-5">
        <div className="flex min-w-64 flex-[2] flex-wrap gap-2.5">
          {list.map((e) => (
            <button
              key={e.id}
              type="button"
              onClick={() => setSel(sel?.id === e.id ? null : e)}
              aria-pressed={sel?.id === e.id}
              className="flex w-36 flex-col items-center gap-1 rounded-[var(--radius)] border p-2 text-center sm:w-40"
              style={{ borderColor: sel?.id === e.id ? 'var(--orange)' : 'var(--ink)', background: 'var(--surface)', outline: sel?.id === e.id ? '3px solid var(--orange)' : undefined, boxShadow: 'var(--shadow-card)' }}
            >
              <EquipmentIcon id={e.id} />
              <span className="text-xs font-bold leading-snug">{e.name}</span>
            </button>
          ))}
        </div>
        {sel && (
          <div className="min-w-64 flex-1 rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
            <div className="flex items-center gap-2">
              <EquipmentIcon id={sel.id} className="h-12 w-12" />
              <div>
                <p className="font-bold leading-tight">{sel.name}</p>
                <p className="text-xs" style={soft}>
                  {sel.category}
                </p>
              </div>
            </div>
            <dl className="mt-2 flex flex-col gap-2 text-sm leading-relaxed">
              <div>
                <dt className="font-bold">Used for</dt>
                <dd>{sel.use}</dd>
              </div>
              <div>
                <dt className="font-bold">How to use it</dt>
                <dd>{sel.howToUse}</dd>
              </div>
              {sel.note && (
                <div>
                  <dt className="font-bold">Good to know</dt>
                  <dd>{sel.note}</dd>
                </div>
              )}
            </dl>
          </div>
        )}
      </div>
    </Card>
  )
}
