import { useState } from 'react'
import { Btn, Card, Stat } from './shared'

// ── fire and movement (bounding overwatch) ───────────────────────────────

type Bound = { title: string; aX: number; bX: number; covering: 'A' | 'B' | 'both'; narration: string }

const ENEMY_X = 360
const START_A = 20
const START_B = 20

const BOUNDS: Bound[] = [
  { title: '1. Contact', aX: START_A, bX: START_B, covering: 'both', narration: 'The buddy pair spots or receives fire from the enemy position and immediately takes the nearest cover, going prone and identifying where the fire is coming from before doing anything else.' },
  { title: '2. A covers, B moves', aX: START_A, bX: 95, covering: 'A', narration: 'A stays put and puts fire on the enemy position to keep their heads down. B picks a route to the next cover, then rushes, a short burst of 3 to 5 seconds, no more: long enough to move, short enough that an enemy can’t track, aim and fire before B is down again.' },
  { title: '3. B covers, A moves', aX: 150, bX: 95, covering: 'B', narration: 'As soon as B is down in the new position, B takes over covering fire. A gets up and rushes past or level with B to the next bound, the two never move at the same time, so the enemy always has someone shooting back at them.' },
  { title: '4. A covers, B moves', aX: 150, bX: 210, covering: 'A', narration: 'The pattern repeats: whoever just arrived covers; whoever was covering now moves. Each bound closes the distance while the enemy is kept suppressed the entire time.' },
  { title: '5. B covers, A moves', aX: 270, bX: 210, covering: 'B', narration: 'One more bound brings the pair into effective grenade or assault range of the position.' },
  { title: '6. Assault', aX: 300, bX: 300, covering: 'both', narration: 'At close range, both move together in the final assault, putting maximum fire into the position as they close the last few metres, the point where fire and movement becomes a direct assault.' },
]

export function BoundingOverwatch({ color }: { color: string }) {
  const [i, setI] = useState(0)
  const b = BOUNDS[i]
  const last = i === BOUNDS.length - 1

  return (
    <Card
      title="Fire and movement: bounding overwatch"
      color={color}
      note="This is the core infantry movement principle under fire, never move without someone covering you, never cover for longer than it takes your buddy to reach the next position. Everything else (section attacks, platoon attacks) is this same idea scaled up."
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-bold">{b.title}</p>
        <div className="flex gap-1.5">
          <Btn onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0}>
            ← prev
          </Btn>
          <Btn onClick={() => setI((n) => Math.min(BOUNDS.length - 1, n + 1))} disabled={last}>
            next →
          </Btn>
        </div>
      </div>
      <svg viewBox="0 0 400 150" className="w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, var(--mint) 10%, var(--surface))' }} role="img" aria-label="Bounding overwatch diagram">
        <line x1={10} y1={80} x2={390} y2={80} stroke="var(--ink)" strokeWidth={1} opacity={0.15} />
        <line x1={10} y1={115} x2={390} y2={115} stroke="var(--ink)" strokeWidth={1} opacity={0.15} />
        <g transform={`translate(${ENEMY_X} 97)`}>
          <rect x={-14} y={-14} width={28} height={28} fill="color-mix(in srgb, #d9534f 30%, var(--surface))" stroke="#d9534f" strokeWidth={2} rx={4} />
          <text x={0} y={5} textAnchor="middle" fontSize={14} fontWeight={700} fill="#d9534f">E</text>
          <text x={0} y={32} textAnchor="middle" fontSize={9} fontWeight={700} fill="var(--ink-soft)">enemy</text>
        </g>
        {(b.covering === 'A' || b.covering === 'both') && (
          <line x1={b.aX} y1={80} x2={ENEMY_X - 10} y2={90} stroke="#e07b2a" strokeWidth={1.5} strokeDasharray="4 3" opacity={0.8} style={{ transition: 'all 0.5s' }} />
        )}
        {(b.covering === 'B' || b.covering === 'both') && (
          <line x1={b.bX} y1={115} x2={ENEMY_X - 10} y2={104} stroke="#3b6fd8" strokeWidth={1.5} strokeDasharray="4 3" opacity={0.8} style={{ transition: 'all 0.5s' }} />
        )}
        <g transform={`translate(${b.aX} 80)`} style={{ transition: 'transform 0.5s' }}>
          <circle r={11} fill="color-mix(in srgb, #e07b2a 35%, var(--surface))" stroke="#e07b2a" strokeWidth={2.5} />
          <text y={4} textAnchor="middle" fontSize={11} fontWeight={700}>A</text>
          <text y={-18} textAnchor="middle" fontSize={9} fontWeight={700} fill="var(--ink-soft)">{b.covering === 'A' || b.covering === 'both' ? 'covering' : 'moving'}</text>
        </g>
        <g transform={`translate(${b.bX} 115)`} style={{ transition: 'transform 0.5s' }}>
          <circle r={11} fill="color-mix(in srgb, #3b6fd8 35%, var(--surface))" stroke="#3b6fd8" strokeWidth={2.5} />
          <text y={4} textAnchor="middle" fontSize={11} fontWeight={700}>B</text>
          <text y={28} textAnchor="middle" fontSize={9} fontWeight={700} fill="var(--ink-soft)">{b.covering === 'B' || b.covering === 'both' ? 'covering' : 'moving'}</text>
        </g>
      </svg>
      <p className="text-sm leading-relaxed">{b.narration}</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="rush length" value="3–5 sec" tone={color} />
        <Stat label="rule of thumb" value={'"I’m up, he sees me, I’m down"'} />
        <Stat label="bound" value={`${i + 1} / ${BOUNDS.length}`} />
      </div>
    </Card>
  )
}

// ── individual movement technique: going to prone ────────────────────────

type Pose = { title: string; narration: string }

const POSES: Pose[] = [
  { title: '1. Alert, standing/moving', narration: 'Weapon ready, moving tactically, scanning the arcs, not fixated on the ground in front of your feet.' },
  { title: '2. Contact, drop to a crouch', narration: 'The instant you hear or see effective fire, the first movement is down, not sideways or back, any delay standing upright is time spent as the easiest target on the field.' },
  { title: '3. Break the fall with the firing-side knee and hand', narration: 'One knee and the opposite hand take the weight first, keeping the weapon roughly pointed downrange the entire way down rather than swinging it wide.' },
  { title: '4. Roll/extend into prone, weapon forward', narration: 'The body extends flat and the weapon comes up into the shoulder, elbows down and spread for a stable firing platform, the whole sequence from standing to aimed prone should take about one to two seconds with practice.' },
  { title: '5. Return fire, then assess', narration: 'Only once stable and oriented does the section start putting aimed fire down, reacting fast but firing accurately matters more than firing first.' },
]

export function ImtSequence({ color }: { color: string }) {
  const [i, setI] = useState(0)
  const p = POSES[i]
  const last = i === POSES.length - 1
  const kneeBend = [0, 25, 55, 85, 85][i]
  const bodyAngle = [0, 15, 55, 88, 88][i]

  return (
    <Card title="Individual movement technique: reacting to effective fire" color={color} note="The fastest way down is a straight line, not a dive sideways, this sequence (a simplified, generic version of standard infantry drill) gets a soldier from standing to a stable firing position in roughly one to two seconds.">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-bold">{p.title}</p>
        <div className="flex gap-1.5">
          <Btn onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0}>
            ← prev
          </Btn>
          <Btn onClick={() => setI((n) => Math.min(POSES.length - 1, n + 1))} disabled={last}>
            next →
          </Btn>
        </div>
      </div>
      <svg viewBox="0 0 200 140" className="mx-auto block h-auto w-full max-w-xs rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, var(--mint) 10%, var(--surface))' }} role="img" aria-label="Prone sequence diagram">
        <line x1={10} y1={120} x2={190} y2={120} stroke="var(--ink)" strokeWidth={2} opacity={0.3} />
        <g transform={`translate(100 120) rotate(-${bodyAngle})`} style={{ transition: 'transform 0.5s ease-out' }}>
          <line x1={0} y1={0} x2={0} y2={-50} stroke={color} strokeWidth={6} strokeLinecap="round" />
          <circle cx={0} cy={-58} r={9} fill={color} />
          <line x1={0} y1={-35} x2={-20 - kneeBend * 0.15} y2={-10} stroke={color} strokeWidth={5} strokeLinecap="round" />
          <line x1={0} y1={-10} x2={28} y2={-16} stroke="var(--ink)" strokeWidth={4} strokeLinecap="round" />
        </g>
      </svg>
      <p className="text-sm leading-relaxed">{p.narration}</p>
      <Stat label="target time, standing to aimed prone" value="≈1–2 sec" tone={color} />
    </Card>
  )
}
