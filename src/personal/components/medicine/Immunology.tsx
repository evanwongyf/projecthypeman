import { useState } from 'react'
import { PlotChart } from '../finance/PlotChart'
import { Btn, Card, Pills, soft } from './shared'

// ── innate vs adaptive timeline ──────────────────────────────────────────

type Step = { title: string; time: string; narration: string; tone: string }

const STEPS: Step[] = [
  { title: '1. A pathogen breaches a barrier', time: 't = 0', narration: 'Skin, mucus and stomach acid are the body’s first line of defence, stopping almost everything before it even counts as an infection. Once a pathogen gets past them, through a cut, or inhaled deep into the lungs, the immune system proper switches on.', tone: '#8a6d1e' },
  { title: '2. Innate immunity responds', time: 'minutes to hours', narration: 'Fast but non-specific: neutrophils and macrophages (types of white blood cell) physically engulf and digest the invader (phagocytosis). Damaged cells release chemical alarms that trigger inflammation, redness, heat, swelling, which widens blood vessels and draws more immune cells to the site.', tone: '#d9534f' },
  { title: '3. Dendritic cells raise the alarm further', time: 'hours', narration: 'Dendritic cells capture fragments of the pathogen (antigens) and carry them to the nearest lymph node, presenting the fragment on their surface like a wanted poster, this is the bridge between the fast, generic innate response and the slower, highly specific adaptive response.', tone: '#e07b2a' },
  { title: '4. T cells and B cells are activated', time: '1–several days', narration: 'In the lymph node, the specific T cell and B cell that happen to recognise this exact antigen are activated and multiply rapidly (clonal expansion). Helper T cells coordinate the response; killer T cells destroy infected cells directly; B cells begin producing antibodies tailored to this one pathogen.', tone: '#3b6fd8' },
  { title: '5. Antibodies neutralise the pathogen', time: 'several days to 1–2 weeks', narration: 'Antibodies (Y-shaped proteins, covered in detail next) flood the bloodstream, each one shaped to grab onto this specific pathogen, blocking it from infecting cells, tagging it for destruction, and clumping pathogens together so phagocytes can clear them faster.', tone: '#2f9e6e' },
  { title: '6. Memory cells remain', time: 'months to a lifetime', narration: 'After the infection clears, a small population of memory B cells and T cells persists, specific to this exact pathogen. They don’t do much day to day, but if the same pathogen ever returns, they let the adaptive response skip straight to full strength in hours instead of days.', tone: '#7b4fc9' },
]

export function ImmuneResponse({ color }: { color: string }) {
  const [i, setI] = useState(0)
  const s = STEPS[i]
  const last = i === STEPS.length - 1

  return (
    <Card title="Innate vs. adaptive: one infection, start to finish" color={color} note="The innate system is fast but generic, it treats every threat roughly the same way. The adaptive system is slow to start but exactly targeted, and it remembers. Nearly every infection you survive uses both, in this order.">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-bold">{s.title}</p>
        <div className="flex gap-1.5">
          <Btn onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0}>
            ← prev
          </Btn>
          <Btn onClick={() => setI((n) => Math.min(STEPS.length - 1, n + 1))} disabled={last}>
            next →
          </Btn>
        </div>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full" style={{ background: 'var(--paper-2)' }}>
        <div className="h-full rounded-full transition-all" style={{ width: `${((i + 1) / STEPS.length) * 100}%`, background: s.tone }} />
      </div>
      <p className="text-xs font-bold" style={soft}>
        {s.time}
      </p>
      <p className="text-sm leading-relaxed">{s.narration}</p>

      {last && (
        <>
          <PlotChart
            block={{
              t: 'plot',
              title: 'Antibody levels: first exposure vs. a second exposure later',
              x: [0, 28],
              y: [0, 100],
              xLabel: 'days since exposure',
              yLabel: 'antibody level (illustrative)',
              curves: [
                { f: (d: number) => (d < 4 ? 0 : Math.min(35, (d - 4) * 6)), label: 'primary response (first exposure)', color: '#e07b2a' },
                { f: (d: number) => (d < 18 ? 0 : Math.min(100, (d - 18) * 25)), label: 'secondary response (memory cells, later exposure)', color: '#2f9e6e' },
              ],
            }}
          />
          <p className="text-xs leading-relaxed" style={soft}>
            The first time the body meets a pathogen, antibody levels rise slowly and peak modestly, it takes days to find and expand the right B cells from scratch. The second time (thanks to memory cells already standing by), the response is faster, larger and arrives before symptoms can take hold, the entire basis of how vaccines work, covered on the next page.
          </p>
        </>
      )}
    </Card>
  )
}

// ── antibody structure and binding ───────────────────────────────────────

type Ig = 'igg' | 'igm' | 'iga' | 'ige'

const IG_INFO: Record<Ig, { name: string; units: number; note: string }> = {
  igg: { name: 'IgG', units: 1, note: 'The most abundant antibody in blood (about 75% of total), a single Y-shaped unit. It’s the only antibody class that crosses the placenta, giving a newborn temporary, borrowed immunity from its mother.' },
  igm: { name: 'IgM', units: 5, note: 'The first antibody made in a new infection, assembled from five Y-units joined in a star shape, the extra arms make it very effective at clumping pathogens together even before the response has fully specialised.' },
  iga: { name: 'IgA', units: 2, note: 'Found in mucus, saliva, tears and breast milk as a pair of linked Y-units, the immune system’s presence on every surface exposed to the outside world.' },
  ige: { name: 'IgE', units: 1, note: 'Normally present in tiny amounts, built to fight parasites, but also the antibody class behind allergic reactions, triggering mast cells to release histamine when it binds an allergen.' },
}

export function AntibodyBinding({ color }: { color: string }) {
  const [ig, setIg] = useState<Ig>('igg')
  const info = IG_INFO[ig]
  const n = info.units

  return (
    <Card title="Antibody structure and binding" color={color} note="Every antibody is built from the same Y-shaped unit, two 'arms' that grab onto a specific antigen shape, and a 'stem' that signals other immune cells to come finish the job. What changes between classes is how many Y-units are joined together, and where in the body they're found.">
      <Pills label="antibody class" value={ig} onChange={setIg} options={[['igg', 'IgG'], ['igm', 'IgM'], ['iga', 'IgA'], ['ige', 'IgE']]} />
      <svg viewBox="0 0 300 180" className="mx-auto block h-auto w-full max-w-sm" role="img" aria-label="Antibody diagram">
        {Array.from({ length: n }).map((_, i) => {
          const angle = n === 1 ? 0 : (i / n) * Math.PI * 2
          const cx = n === 1 ? 110 : 150 + Math.cos(angle) * 38
          const cy = n === 1 ? 90 : 90 + Math.sin(angle) * 38
          const rot = n === 1 ? 0 : (angle * 180) / Math.PI + 90
          return (
            <g key={i} transform={`translate(${cx} ${cy}) rotate(${rot}) scale(${n === 1 ? 1.3 : 0.62})`}>
              <line x1={0} y1={0} x2={0} y2={28} stroke={color} strokeWidth={4} strokeLinecap="round" />
              <line x1={0} y1={0} x2={-22} y2={-24} stroke={color} strokeWidth={4} strokeLinecap="round" />
              <line x1={0} y1={0} x2={22} y2={-24} stroke={color} strokeWidth={4} strokeLinecap="round" />
              <circle cx={-22} cy={-24} r={5} fill="#d9534f" />
              <circle cx={22} cy={-24} r={5} fill="#d9534f" />
            </g>
          )
        })}
        {n === 1 && (
          <g style={{ animation: 'med-bind 2.4s ease-in-out infinite' }}>
            <circle cx={220} cy={66} r={16} fill="color-mix(in srgb, #d9534f 35%, var(--surface))" stroke="#d9534f" strokeWidth={2} />
            <text x={220} y={70} textAnchor="middle" fontSize={9} fontWeight={700}>antigen</text>
          </g>
        )}
        <text x={150} y="170" textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--ink)">
          {info.name}: {n} Y-{n === 1 ? 'unit' : 'units joined'}
        </text>
      </svg>
      <style>{`@keyframes med-bind { 0%, 100% { transform: translateX(0) } 50% { transform: translateX(-10px) } }`}</style>
      <p className="text-xs leading-relaxed" style={soft}>
        {info.note}
      </p>
    </Card>
  )
}
