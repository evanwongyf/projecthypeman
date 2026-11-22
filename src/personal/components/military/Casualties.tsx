import { useState } from 'react'
import { Card, Pills, Stat, soft } from './shared'

type Category = 'minimal' | 'delayed' | 'immediate' | 'expectant'

const CATEGORY_INFO: Record<Category, { name: string; color: string; code: string; note: string }> = {
  minimal: { name: 'Minimal (walking wounded)', color: '#2f9e6e', code: 'T3 / green', note: 'Can wait for treatment, keep mobile casualties moving to a collection point themselves, freeing responders for people who can’t move on their own.' },
  delayed: { name: 'Delayed', color: '#e07b2a', code: 'T2 / yellow', note: 'Serious but currently stable, treatment can be delayed somewhat without an immediate, high risk to life, but still needs evacuation.' },
  immediate: { name: 'Immediate', color: '#d9534f', code: 'T1 / red', note: 'Life-threatening but survivable with prompt treatment, the highest priority for both first aid and evacuation.' },
  expectant: { name: 'Expectant', color: '#4a4a52', code: 'T4 / black', note: 'Injuries incompatible with survival given the resources available, a genuinely difficult category, used only when treating this casualty first would cost other savable lives. Reassess if more resources become available.' },
}

export function CasualtyTriage({ color }: { color: string }) {
  const [canWalk, setCanWalk] = useState<'yes' | 'no'>('no')
  const [breathing, setBreathing] = useState<'yes' | 'no'>('yes')
  const [fastBreathing, setFastBreathing] = useState<'yes' | 'no'>('no')
  const [radialPulse, setRadialPulse] = useState<'yes' | 'no'>('yes')

  let category: Category
  if (canWalk === 'yes') category = 'minimal'
  else if (breathing === 'no') category = 'expectant'
  else if (fastBreathing === 'yes' || radialPulse === 'no') category = 'immediate'
  else category = 'delayed'

  const info = CATEGORY_INFO[category]

  return (
    <Card
      title="Casualty triage (a simplified START-style method)"
      color={color}
      note="START (Simple Triage and Rapid Treatment) is a widely taught, publicly documented method for quickly sorting multiple casualties when help is limited, used in both civilian mass-casualty response and military first aid. Actual combat first aid follows your unit's current training and the judgement of qualified medics on the ground; this tool is for understanding the logic, not for real triage decisions."
    >
      <Pills label="can the casualty walk?" value={canWalk} onChange={setCanWalk} options={[['yes', 'Can walk'], ['no', 'Cannot walk']]} />
      {canWalk === 'no' && <Pills label="is the casualty breathing?" value={breathing} onChange={setBreathing} options={[['yes', 'Breathing'], ['no', 'Not breathing']]} />}
      {canWalk === 'no' && breathing === 'yes' && <Pills label="breathing rate" value={fastBreathing} onChange={setFastBreathing} options={[['no', 'Normal (under ~30/min)'], ['yes', 'Fast (over ~30/min)']]} />}
      {canWalk === 'no' && breathing === 'yes' && fastBreathing === 'no' && <Pills label="radial (wrist) pulse" value={radialPulse} onChange={setRadialPulse} options={[['yes', 'Present'], ['no', 'Absent / weak']]} />}

      <div className="rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: `color-mix(in srgb, ${info.color} 20%, var(--surface))` }}>
        <p className="text-xs font-bold" style={soft}>
          {info.code}
        </p>
        <p className="text-lg font-bold">{info.name}</p>
        <p className="mt-1 text-xs leading-relaxed">{info.note}</p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {(Object.keys(CATEGORY_INFO) as Category[]).map((c) => (
          <Stat key={c} label={CATEGORY_INFO[c].code} value={CATEGORY_INFO[c].name.split(' (')[0]} tone={c === category ? CATEGORY_INFO[c].color : undefined} />
        ))}
      </div>
    </Card>
  )
}
