import { useState } from 'react'
import { GOALS, GROUPS, NUTRIENTS } from '../../lib/food/nutrients'
import type { Goal, NutrientGroup } from '../../lib/food/nutrients'
import { Card, Pills, soft } from '../sports/shared'

export default function NutrientExplorer({ color }: { color: string }) {
  const [group, setGroup] = useState<NutrientGroup | 'all'>('all')
  const [goal, setGoal] = useState<Goal | 'all'>('all')
  const [sel, setSel] = useState('d')
  const list = NUTRIENTS.filter((n) => (group === 'all' || n.group === group) && (goal === 'all' || n.goals.includes(goal)))
  const cur = NUTRIENTS.find((n) => n.id === sel) ?? list[0]
  const rows: [string, string][] = cur
    ? [
        ['What it does', cur.does],
        ['Good sources', cur.foods],
        ...(cur.jp ? ([['In a Japanese diet', cur.jp]] as [string, string][]) : []),
        ['If you get too little', cur.low],
        ['Care', cur.caution],
      ]
    : []

  return (
    <Card title="Nutrient explorer: tap a vitamin or mineral" color={color} note="Adult reference intakes (RDA or adequate intake) from the US National Institutes of Health, for orientation. National tables differ slightly, and needs change with age, pregnancy, illness and medicines. This is education, not personal medical advice.">
      <Pills<NutrientGroup | 'all'> value={group} options={GROUPS} onChange={setGroup} label="Group" />
      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold uppercase tracking-wide" style={soft}>Show nutrients for…</span>
        <Pills<Goal | 'all'> value={goal} options={GOALS} onChange={setGoal} label="Goal" />
      </div>
      <div className="flex flex-wrap gap-1.5" role="group" aria-label="Nutrients">
        {list.length === 0 && <p className="text-sm" style={soft}>Nothing matches. Try another goal.</p>}
        {list.map((n) => (
          <button
            key={n.id}
            type="button"
            onClick={() => setSel(n.id)}
            aria-pressed={cur?.id === n.id}
            className="rounded-full border px-2.5 py-1 text-xs font-bold pointer-coarse:min-h-10"
            style={{ borderColor: 'var(--line)', background: cur?.id === n.id ? 'var(--ink)' : 'var(--surface)', color: cur?.id === n.id ? 'var(--surface)' : 'var(--ink)' }}
          >
            {n.name}
          </button>
        ))}
      </div>
      {cur && (
        <div className="flex flex-col gap-2 rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
          <p className="font-bold">
            {cur.name}
            {cur.also && <span className="font-normal" style={soft}> ({cur.also})</span>}
          </p>
          <div className="grid gap-2 sm:grid-cols-3">
            {[['Men (adult)', cur.men], ['Women (adult)', cur.women], ['Upper limit', cur.ul]].map(([k, v]) => (
              <div key={k} className="rounded-[var(--radius)] p-2" style={{ background: 'var(--paper-2)' }}>
                <p className="text-xs font-bold uppercase tracking-wide" style={soft}>{k}</p>
                <p className="text-sm font-bold">{v}</p>
              </div>
            ))}
          </div>
          {rows.map(([k, v]) => (
            <p key={k} className="text-sm leading-relaxed">
              <strong>{k}: </strong>
              {v}
            </p>
          ))}
        </div>
      )}
    </Card>
  )
}
