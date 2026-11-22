import { useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { Card, Pills, soft } from '../sports/shared'
import { FoodPhoto } from './Photo'

type RecipeT = Extract<Block, { t: 'recipe' }>

const FRACS: [number, string][] = [[0.25, '¼'], [1 / 3, '⅓'], [0.5, '½'], [2 / 3, '⅔'], [0.75, '¾']]

function fmt(q: number): string {
  if (q <= 0) return ''
  const whole = Math.floor(q + 1e-9)
  const rest = q - whole
  if (rest < 0.08) return String(whole || 1)
  const f = FRACS.find(([v]) => Math.abs(v - rest) < 0.08)
  if (f) return `${whole ? whole : ''}${f[1]}`
  if (rest > 0.92) return String(whole + 1)
  return q < 10 ? String(Math.round(q * 10) / 10) : String(Math.round(q))
}

export default function RecipeCard({ block, color }: { block: RecipeT; color: string }) {
  const [mult, setMult] = useState<'1' | '2' | '3'>('1')
  const [done, setDone] = useState<Record<number, boolean>>({})
  const m = Number(mult)
  return (
    <Card title={block.name + (block.jp ? `  ·  ${block.jp}` : '')} color={color} note={block.note}>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm" style={soft}>
        <span><strong>Serves</strong> {block.serves * m}</span>
        <span><strong>Time</strong> {block.time}</span>
        {block.cost && <span><strong>Cost</strong> {block.cost}</span>}
        {block.tags.map((t) => (
          <span key={t} className="rounded-full border px-2 py-0.5 text-xs font-bold" style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}>{t}</span>
        ))}
      </div>
      <FoodPhoto id={block.photo} className="max-w-md" ratio="16 / 10" />
      {block.equipment && block.equipment.length > 0 && (
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={soft}>Equipment</p>
          <ul className="flex flex-wrap gap-1.5">
            {block.equipment.map((e) => (
              <li key={e} className="rounded-[var(--radius)] px-2 py-0.5 text-xs" style={{ background: 'var(--paper-2)' }}>{e}</li>
            ))}
          </ul>
        </div>
      )}
      <Pills<'1' | '2' | '3'> value={mult} options={[['1', `×1 (${block.serves})`], ['2', `×2 (${block.serves * 2})`], ['3', `×3 (${block.serves * 3})`]]} onChange={setMult} label="Servings" />
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={soft}>Ingredients (tick as you go)</p>
          <ul className="flex flex-col gap-1">
            {block.ingredients.map((g, i) => (
              <li key={i}>
                <label className="flex cursor-pointer items-start gap-2 text-sm leading-snug">
                  <input type="checkbox" className="mt-1" checked={!!done[i]} onChange={() => setDone({ ...done, [i]: !done[i] })} />
                  <span style={done[i] ? { textDecoration: 'line-through', opacity: 0.6 } : undefined}>
                    {g.qty !== undefined && <strong>{fmt(g.qty * m)} </strong>}
                    {g.unit ? `${g.unit} ` : ''}
                    {g.item}
                    {g.note && <span style={soft}> ({g.note})</span>}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={soft}>Method</p>
          <ol className="flex list-decimal flex-col gap-1.5 pl-5 text-sm leading-relaxed">
            {block.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </div>
      </div>
      {block.swaps && block.swaps.length > 0 && (
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={soft}>Swaps</p>
          <ul className="flex list-disc flex-col gap-1 pl-5 text-sm leading-relaxed">
            {block.swaps.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      )}
      <p className="text-sm leading-relaxed"><strong>Why it is on this shelf: </strong>{block.why}</p>
    </Card>
  )
}
