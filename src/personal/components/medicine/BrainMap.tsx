import { useState } from 'react'
import { FUNCS, OUTLINES, REGIONS } from '../../lib/medicine/brain'
import type { BrainView, Func } from '../../lib/medicine/brain'
import { Card, Pills, soft } from '../sports/shared'

const VIEWS: [BrainView, string][] = [
  ['lateral', 'Side (outside)'],
  ['medial', 'Middle (cut open)'],
  ['deep', 'Slice (ear to ear)'],
]
const HUES = [212, 28, 150, 285, 350, 52, 185, 310, 100, 240, 10]

export default function BrainMap({ color }: { color: string }) {
  const [view, setView] = useState<BrainView>('lateral')
  const [func, setFunc] = useState<Func | 'all'>('all')
  const [sel, setSel] = useState<string>('amygdala')
  const regions = REGIONS.filter((r) => r.view === view)
  const cur = REGIONS.find((r) => r.id === sel && r.view === view) ?? regions[0]
  const lit = (funcs: Func[]) => func === 'all' || funcs.includes(func)

  return (
    <Card title="Brain atlas: tap a region" color={color} note="A schematic. Real brains vary, regions overlap and nearly every function involves several areas working together. Dashed shapes lie deeper than the surface and are drawn as if you could see through to them.">
      <Pills<BrainView> value={view} options={VIEWS} onChange={(v) => { setView(v); setSel(REGIONS.find((r) => r.view === v)!.id) }} label="View" />
      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold uppercase tracking-wide" style={soft}>Highlight what is involved in…</span>
        <Pills<Func | 'all'> value={func} options={FUNCS} onChange={setFunc} label="Function" />
      </div>
      <div className="flex flex-wrap items-start gap-4">
        <svg viewBox="0 0 420 300" className="w-full" style={{ maxWidth: 440 }} role="group" aria-label={`Brain, ${VIEWS.find((v) => v[0] === view)![1]}`}>
          <path d={OUTLINES[view]} fill="var(--paper-2)" stroke="var(--ink)" strokeWidth={2.5} />
          <clipPath id={`bm-${view}`}>
            <path d={OUTLINES[view]} />
          </clipPath>
          <g>
            {regions.map((r) => {
              const idx = REGIONS.indexOf(r) % HUES.length
              const on = lit(r.funcs)
              const active = cur?.id === r.id
              return (
                <path
                  key={r.id}
                  d={r.path}
                  clipPath={r.outside ? undefined : `url(#bm-${view})`}
                  tabIndex={0}
                  role="button"
                  aria-label={r.name}
                  aria-pressed={active}
                  onClick={() => setSel(r.id)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSel(r.id) } }}
                  fill={`hsl(${HUES[idx]} 70% ${on ? 62 : 85}%)`}
                  fillOpacity={r.deep ? 0.78 : on ? 0.92 : 0.45}
                  stroke="var(--ink)"
                  strokeWidth={active ? 3 : 1.2}
                  strokeDasharray={r.deep ? '5 3' : undefined}
                  style={{ cursor: 'pointer', outlineOffset: 2 }}
                />
              )
            })}
          </g>
          <path d={OUTLINES[view]} fill="none" stroke="var(--ink)" strokeWidth={2.5} pointerEvents="none" />
          {cur && (
            <text x={Math.min(Math.max(cur.lx, 60), 360)} y={cur.ly} textAnchor="middle" fontSize={11} fontWeight={700} stroke="var(--paper)" strokeWidth={3} paintOrder="stroke" fill="var(--ink)" pointerEvents="none">
              {cur.name.length > 26 ? cur.name.slice(0, 24) + '…' : cur.name}
            </text>
          )}
        </svg>
        <div className="flex min-w-56 flex-1 flex-col gap-2">
          {cur && (
            <>
              <p className="font-bold">{cur.name}</p>
              <p className="text-sm leading-relaxed">{cur.summary}</p>
              <p className="text-sm leading-relaxed"><strong>Emotion: </strong>{cur.emotion}</p>
              <p className="text-sm leading-relaxed"><strong>Making sense: </strong>{cur.sense}</p>
              {cur.note && <p className="text-xs leading-relaxed" style={soft}>{cur.note}</p>}
            </>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5" aria-label="Regions in this view">
        {regions.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setSel(r.id)}
            className="rounded-full border px-2.5 py-1 text-xs font-bold pointer-coarse:min-h-10"
            style={{ borderColor: 'var(--line)', background: cur?.id === r.id ? 'var(--ink)' : 'var(--surface)', color: cur?.id === r.id ? 'var(--surface)' : 'var(--ink)', opacity: lit(r.funcs) ? 1 : 0.45 }}
          >
            {r.name}
          </button>
        ))}
      </div>
    </Card>
  )
}
