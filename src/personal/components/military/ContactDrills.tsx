import { useState } from 'react'
import { Btn, Card, Pills, soft } from './shared'

// ── contact drill: react to effective enemy fire ─────────────────────────

type Step = { title: string; narration: string }

const BASE_STEPS: Step[] = [
  { title: '1. Take cover', narration: 'Everyone who can see or hear the fire goes to ground immediately (see the individual movement technique) and identifies where it’s coming from.' },
  { title: '2. Return fire', narration: 'The section puts immediate, aimed fire down on the enemy position, the goal is suppression: making the enemy keep their heads down, not necessarily hitting anyone yet.' },
  { title: '3. Commander assesses', narration: 'The section/team commander quickly reads the situation: roughly how many enemy, what weapons, has the section achieved fire superiority (are we out-shooting them), and is there a covered route to flank or close the distance.' },
]

const OUTCOMES: Record<'superiority' | 'pinned' | 'outnumbered', Step[]> = {
  superiority: [
    { title: '4. Fire and movement forward', narration: 'With fire superiority achieved, part of the section keeps up suppressing fire while the rest bounds forward (see fire and movement) to close the distance and assault the position.' },
    { title: '5. Assault and consolidate', narration: 'Once close enough, the section assaults through the position, then immediately reorganises on the far side, checking ammunition, accounting for everyone, and re-establishing all-round defence before moving on.' },
  ],
  pinned: [
    { title: '4. Call for support', narration: 'If the section can’t win the firefight alone, the commander calls up for support, indirect fire, a flanking element from another section, or simply reports the contact up the chain so higher command knows what’s happening.' },
    { title: '5. Hold and wait', narration: 'The section holds its position, keeps suppressing fire going to prevent the enemy from manoeuvring, and waits for the supporting element or further orders, moving forward alone into an unresolved firefight is how units take unnecessary casualties.' },
  ],
  outnumbered: [
    { title: '4. Break contact', narration: 'If badly outnumbered or outgunned, the commander may instead order a break-contact: one element covers while the rest fall back to a pre-agreed rally point, using exactly the fire-and-movement principle, just moving away from the enemy instead of toward it.' },
    { title: '5. Regroup and report', narration: 'At the rally point, the section accounts for everyone, checks for casualties, and reports the contact, breaking contact is a legitimate, often correct tactical choice, not a failure.' },
  ],
}

export function ContactDrillChoice({ color }: { color: string }) {
  const [i, setI] = useState(0)
  const [outcome, setOutcome] = useState<'superiority' | 'pinned' | 'outnumbered'>('superiority')
  const steps = i < BASE_STEPS.length ? BASE_STEPS : OUTCOMES[outcome]
  const localIdx = i < BASE_STEPS.length ? i : i - BASE_STEPS.length
  const step = steps[localIdx]
  const atDecision = i === BASE_STEPS.length - 1
  const total = BASE_STEPS.length + 2
  const last = i === total - 1

  return (
    <Card title="Contact drill: react to effective enemy fire" color={color} note="A generic, simplified walkthrough of the standard infantry response to being fired on, real unit SOPs add detail specific to the terrain, weapons and mission, so always follow your actual instructors and current orders over this conceptual summary.">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-bold">{step.title}</p>
        <div className="flex gap-1.5">
          <Btn onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0}>
            ← prev
          </Btn>
          <Btn onClick={() => setI((n) => Math.min(total - 1, n + 1))} disabled={last}>
            next →
          </Btn>
        </div>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full" style={{ background: 'var(--paper-2)' }}>
        <div className="h-full rounded-full transition-all" style={{ width: `${((i + 1) / total) * 100}%`, background: color }} />
      </div>
      <p className="text-sm leading-relaxed">{step.narration}</p>
      {atDecision && (
        <div className="flex flex-col gap-2 rounded-[var(--radius)] border p-2.5" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
          <p className="text-xs font-bold">What does the commander decide?</p>
          <Pills
            label="outcome"
            value={outcome}
            onChange={setOutcome}
            options={[
              ['superiority', 'We have fire superiority'],
              ['pinned', 'Firefight is even, need support'],
              ['outnumbered', 'Badly outnumbered'],
            ]}
          />
        </div>
      )}
      <p className="text-xs" style={soft}>
        Step {i + 1} of {total}
      </p>
    </Card>
  )
}

// ── defensive position overrun ────────────────────────────────────────────

type OverrunStep = { title: string; narration: string; enemyDist: number }

const OVERRUN_STEPS: OverrunStep[] = [
  { title: '1. Enemy sighted at range', narration: 'The defending section sees the enemy approaching well outside the position, and holds fire, opening up too early gives away exactly where the defence is before the enemy is close enough for it to matter.', enemyDist: 100 },
  { title: '2. Engage at effective range', narration: 'As the enemy crosses into effective range, the section opens fire from covered, mutually supporting positions, each position covering its neighbours’ blind spots, not just facing directly outward.', enemyDist: 60 },
  { title: '3. Enemy closes to final protective fire line', narration: 'If the enemy keeps advancing, they cross a pre-planned final protective fire (FPF) line, the last barrier of fire (often including pre-registered support weapons or indirect fire) meant to break an assault before it reaches the position.', enemyDist: 25 },
  { title: '4. Position is overrun', narration: 'If the enemy still gets through, simply more numerous, or attacking from an unexpected direction, individual soldiers fight through at close quarters rather than freezing, then fall back toward a pre-designated rally point rather than scattering randomly.', enemyDist: 5 },
  { title: '5. Regroup at the rally point', narration: 'Survivors move individually or in pairs to the rally point, a location agreed before contact ever started. The commander accounts for everyone, assesses casualties and ammunition, and reports the situation up the chain before deciding the next move.', enemyDist: -20 },
]

export function OverrunResponse({ color }: { color: string }) {
  const [i, setI] = useState(0)
  const s = OVERRUN_STEPS[i]
  const last = i === OVERRUN_STEPS.length - 1
  const x = 180 - (s.enemyDist / 100) * 150

  return (
    <Card title="If a defensive position is overrun" color={color} note="A conceptual overview of why defence in depth and a rally point matter, not a tactical manual, actual defensive planning, FPF coordination and withdrawal routes are set by your commander for the specific ground and situation.">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-bold">{s.title}</p>
        <div className="flex gap-1.5">
          <Btn onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0}>
            ← prev
          </Btn>
          <Btn onClick={() => setI((n) => Math.min(OVERRUN_STEPS.length - 1, n + 1))} disabled={last}>
            next →
          </Btn>
        </div>
      </div>
      <svg viewBox="0 0 220 110" className="w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, var(--mint) 10%, var(--surface))' }} role="img" aria-label="Overrun diagram">
        <rect x={10} y={55} width={14} height={14} fill="color-mix(in srgb, #2f9e6e 35%, var(--surface))" stroke="#2f9e6e" strokeWidth={2} />
        <text x={17} y={80} textAnchor="middle" fontSize={7} fontWeight={700}>pos</text>
        <circle cx={10} cy={95} r={5} fill="color-mix(in srgb, #7b4fc9 35%, var(--surface))" stroke="#7b4fc9" strokeWidth={1.5} />
        <text x={10} y={107} textAnchor="middle" fontSize={6} fontWeight={700}>RP</text>
        <line x1={55} y1={10} x2={55} y2={100} stroke="#d9534f" strokeWidth={1.5} strokeDasharray="3 3" opacity={0.7} />
        <text x={55} y={8} textAnchor="middle" fontSize={6} fontWeight={700} fill="#d9534f">FPF line</text>
        <g transform={`translate(${Math.max(10, x)} 30)`} style={{ transition: 'transform 0.5s' }}>
          <circle r={8} fill="color-mix(in srgb, #e07b2a 35%, var(--surface))" stroke="#e07b2a" strokeWidth={2} />
          <text y={3} textAnchor="middle" fontSize={8} fontWeight={700}>E</text>
        </g>
      </svg>
      <p className="text-sm leading-relaxed">{s.narration}</p>
    </Card>
  )
}
