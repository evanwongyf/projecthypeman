import { useState } from 'react'
import { Card, Pills, soft } from './shared'

type Field = { key: string; label: string; letter: string; options: [string, string][] }

const FIELDS: Field[] = [
  { key: 'size', label: 'Size', letter: 'S', options: [['1-2', '1–2 personnel'], ['fireteam', 'Fire team (3–4)'], ['section', 'Section (8–10)'], ['platoon', 'Platoon-sized (30+)']] },
  { key: 'activity', label: 'Activity', letter: 'A', options: [['moving', 'Moving towards us'], ['static', 'Static / observing'], ['digging', 'Digging in'], ['withdrawing', 'Withdrawing']] },
  { key: 'location', label: 'Location', letter: 'L', options: [['treeline', 'Treeline, grid 123456'], ['building', 'Building, grid 234567'], ['ridge', 'High ground / ridge, grid 345678']] },
  { key: 'unit', label: 'Unit / uniform', letter: 'U', options: [['unknown', 'Uniform/insignia not identified'], ['opfor', 'Matches known OPFOR uniform'], ['irregular', 'Irregular / mixed dress']] },
  { key: 'time', label: 'Time', letter: 'T', options: [['now', 'Observed now, time now'], ['5min', 'Observed 5 minutes ago'], ['15min', 'Observed 15 minutes ago']] },
  { key: 'equipment', label: 'Equipment', letter: 'E', options: [['smallarms', 'Small arms only'], ['crewserved', 'Crew-served weapon seen'], ['vehicle', 'Vehicle present'], ['unknown', 'Not clearly seen']] },
]

const LABELS: Record<string, Record<string, string>> = Object.fromEntries(FIELDS.map((f) => [f.key, Object.fromEntries(f.options)]))

export function SitrepBuilder({ color }: { color: string }) {
  const [vals, setVals] = useState<Record<string, string>>({ size: 'section', activity: 'moving', location: 'treeline', unit: 'unknown', time: 'now', equipment: 'smallarms' })

  const sentence = `${LABELS.size[vals.size]}, ${LABELS.activity[vals.activity]}, at ${LABELS.location[vals.location]}. ${LABELS.unit[vals.unit]}. ${LABELS.time[vals.time]}. ${LABELS.equipment[vals.equipment]}.`

  return (
    <Card title="Build a contact report: SALUTE" color={color} note="SALUTE is a widely used mnemonic for reporting what you've seen of the enemy, in a fixed order so nothing gets forgotten under pressure and anyone receiving it knows exactly where each piece of information will come. Pick an option for each letter and watch the report build below, then practise saying it out loud from memory.">
      <div className="flex flex-col gap-2.5">
        {FIELDS.map((f) => (
          <div key={f.key} className="flex flex-col gap-1">
            <p className="text-xs font-bold">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[11px]" style={{ background: color, color: 'var(--surface)' }}>
                {f.letter}
              </span>{' '}
              {f.label}
            </p>
            <Pills label={f.label} value={vals[f.key]} onChange={(v) => setVals((old) => ({ ...old, [f.key]: v }))} options={f.options} />
          </div>
        ))}
      </div>
      <div className="rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: `color-mix(in srgb, ${color} 14%, var(--surface))` }}>
        <p className="text-[11px] font-bold" style={soft}>
          your report
        </p>
        <p className="mt-1 font-mono text-sm leading-relaxed">{sentence}</p>
      </div>
    </Card>
  )
}
