import { useMemo, useState } from 'react'
import type { MouseEvent, ReactNode } from 'react'
import type { Block } from '../../lib/archive/guide'
import { Btn, Card, Pills, Slider, Stat, normal, rng, soft } from './kit'

type PitchBlock = Extract<Block, { t: 'pitch' }>
type FtblBlock = Extract<Block, { t: 'ftbl-viz' }>

export default function FootballBlock({ block, color }: { block: PitchBlock | FtblBlock; color: string }) {
  if (block.t === 'pitch') return <PitchDiagram block={block} />
  switch (block.viz) {
    case 'xg-lab':
      return <XgLab color={color} />
    case 'formation-lab':
      return <FormationLab color={color} />
    case 'shot-map':
      return <MatchView color={color} mode="map" />
    case 'xg-timeline':
      return <MatchView color={color} mode="timeline" />
    case 'passing-network':
      return <PassingNetwork color={color} />
    case 'pressing-lab':
      return <PressingLab color={color} />
    case 'offside-lab':
      return <OffsideLab color={color} />
    case 'pitch-control':
      return <PitchControl color={color} />
    case 'xt-lab':
      return <XtLab color={color} />
  }
}

// ---------------------------------------------------------------------------------------
// Pitch drawing. Real-world metres: 105 long, 68 wide, attacking goal on the right.
// ---------------------------------------------------------------------------------------

const BLUE = '#2f6fdb'
const RED = '#d9483f'
const GOLD = '#e8b400'
const teamFill = (t?: string) => (t === 'b' ? RED : t === 'gk' ? GOLD : t === 'ball' ? '#ffffff' : BLUE)
const px = (x: number) => x * 1.05
const py = (y: number) => y * 0.68

type View = 'full' | 'attack' | 'defence'
const VIEWBOX: Record<View, [number, number, number, number]> = { full: [-3, -3, 111, 74], attack: [48, -3, 60, 74], defence: [-3, -3, 60, 74] }

function PitchSvg({ view = 'full', children, onClick, label }: { view?: View; children?: ReactNode; onClick?: (x: number, y: number) => void; label: string }) {
  const vb = VIEWBOX[view]
  const handle = (e: MouseEvent<SVGSVGElement>) => {
    if (!onClick) return
    const r = e.currentTarget.getBoundingClientRect()
    onClick(vb[0] + ((e.clientX - r.left) / r.width) * vb[2], vb[1] + ((e.clientY - r.top) / r.height) * vb[3])
  }
  const line = { stroke: 'rgba(255,255,255,.85)', strokeWidth: 0.35, fill: 'none' }
  return (
    <svg viewBox={vb.join(' ')} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: '#3f8f52', cursor: onClick ? 'crosshair' : undefined }} role="img" aria-label={label} onClick={handle}>
      <defs>
        {(['pass', 'run', 'press', 'shot', 'dribble', 'cross'] as const).map((k) => (
          <marker key={k} id={`ah-${k}`} viewBox="0 0 6 6" refX="5" refY="3" markerWidth="3.2" markerHeight="3.2" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill={ARROW[k].c} />
          </marker>
        ))}
      </defs>
      {Array.from({ length: 10 }, (_, i) => (
        <rect key={i} x={i * 10.5} y={0} width={10.5} height={68} fill={i % 2 ? 'rgba(255,255,255,.045)' : 'rgba(0,0,0,.03)'} />
      ))}
      <rect x={0} y={0} width={105} height={68} {...line} />
      <line x1={52.5} x2={52.5} y1={0} y2={68} {...line} />
      <circle cx={52.5} cy={34} r={9.15} {...line} />
      <circle cx={52.5} cy={34} r={0.5} fill="rgba(255,255,255,.85)" />
      {/* left (own) end */}
      <rect x={0} y={13.84} width={16.5} height={40.32} {...line} />
      <rect x={0} y={24.84} width={5.5} height={18.32} {...line} />
      <circle cx={11} cy={34} r={0.5} fill="rgba(255,255,255,.85)" />
      <path d="M16.5 26.69 A9.15 9.15 0 0 1 16.5 41.31" {...line} />
      <rect x={-2} y={30.34} width={2} height={7.32} stroke="rgba(255,255,255,.9)" strokeWidth={0.3} fill="rgba(255,255,255,.12)" />
      {/* right (attacking) end */}
      <rect x={88.5} y={13.84} width={16.5} height={40.32} {...line} />
      <rect x={99.5} y={24.84} width={5.5} height={18.32} {...line} />
      <circle cx={94} cy={34} r={0.5} fill="rgba(255,255,255,.85)" />
      <path d="M88.5 26.69 A9.15 9.15 0 0 0 88.5 41.31" {...line} />
      <rect x={105} y={30.34} width={2} height={7.32} stroke="rgba(255,255,255,.9)" strokeWidth={0.3} fill="rgba(255,255,255,.12)" />
      {children}
    </svg>
  )
}

const ARROW: Record<string, { c: string; w: number; dash?: string }> = {
  pass: { c: '#ffffff', w: 0.55 },
  run: { c: '#ffe066', w: 0.5, dash: '1.2 0.9' },
  press: { c: '#ff9f9a', w: 0.55, dash: '0.8 0.8' },
  shot: { c: '#ffb347', w: 0.9 },
  dribble: { c: '#b6f2ff', w: 0.5, dash: '0.3 0.8' },
  cross: { c: '#ffffff', w: 0.5 },
}

function Arrow({ from, to, kind = 'pass', label }: { from: [number, number]; to: [number, number]; kind?: keyof typeof ARROW; label?: string }) {
  const a = ARROW[kind]
  const [x1, y1, x2, y2] = [px(from[0]), py(from[1]), px(to[0]), py(to[1])]
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy) || 1
  // Shorten the line a little so the arrow tip stops at the target rather than inside the marker.
  const ex = x2 - (dx / len) * 1.6
  const ey = y2 - (dy / len) * 1.6
  const d = kind === 'cross' ? `M${x1} ${y1} Q${mx - (dy / len) * len * 0.25} ${my + (dx / len) * len * 0.25} ${ex} ${ey}` : `M${x1} ${y1} L${ex} ${ey}`
  return (
    <g>
      <path d={d} stroke={a.c} strokeWidth={a.w} strokeDasharray={a.dash} fill="none" strokeLinecap="round" markerEnd={`url(#ah-${kind})`} />
      {label && (
        <text x={mx} y={my - 1.2} fontSize={1.9} fill="#fff" textAnchor="middle" fontWeight={700} style={{ paintOrder: 'stroke', stroke: 'rgba(0,0,0,.55)', strokeWidth: 0.5 }}>
          {label}
        </text>
      )}
    </g>
  )
}

function Player({ x, y, label, team }: { x: number; y: number; label?: string; team?: string }) {
  if (team === 'ball') return <circle cx={px(x)} cy={py(y)} r={1} fill="#fff" stroke="#222" strokeWidth={0.3} />
  return (
    <g>
      <circle cx={px(x)} cy={py(y)} r={2} fill={teamFill(team)} stroke="#fff" strokeWidth={0.4} />
      {label && (
        <text x={px(x)} y={py(y) + 0.65} fontSize={1.7} textAnchor="middle" fill="#fff" fontWeight={800}>
          {label}
        </text>
      )}
    </g>
  )
}

const ZONE_TONE: Record<string, string> = { a: BLUE, b: RED, hot: '#ff8a3d', cool: '#4cc9f0', neutral: '#ffffff' }

function PitchDiagram({ block }: { block: PitchBlock }) {
  return (
    <figure className="flex max-w-3xl flex-col gap-1.5">
      {block.title && <p className="text-sm font-bold">{block.title}</p>}
      <PitchSvg view={block.view ?? 'full'} label={block.title ?? 'Football pitch diagram'}>
        {(block.zones ?? []).map((z, i) => (
          <g key={i}>
            <rect x={px(z.x)} y={py(z.y)} width={px(z.w)} height={py(z.h)} fill={ZONE_TONE[z.tone ?? 'neutral']} opacity={0.28} stroke="#fff" strokeWidth={0.25} strokeDasharray="1 0.8" />
            {z.label && (
              <text x={px(z.x + z.w / 2)} y={py(z.y + z.h / 2) + 0.7} fontSize={1.9} textAnchor="middle" fill="#fff" fontWeight={700} style={{ paintOrder: 'stroke', stroke: 'rgba(0,0,0,.5)', strokeWidth: 0.5 }}>
                {z.label}
              </text>
            )}
          </g>
        ))}
        {(block.marks ?? []).map((m, i) => (
          <g key={i}>
            <circle cx={px(m.x)} cy={py(m.y)} r={m.r ?? 4} fill="none" stroke="#fff" strokeWidth={0.4} strokeDasharray="1 0.7" />
            {m.label && (
              <text x={px(m.x)} y={py(m.y) - (m.r ?? 4) - 0.8} fontSize={1.8} textAnchor="middle" fill="#fff" fontWeight={700} style={{ paintOrder: 'stroke', stroke: 'rgba(0,0,0,.5)', strokeWidth: 0.5 }}>
                {m.label}
              </text>
            )}
          </g>
        ))}
        {(block.arrows ?? []).map((a, i) => (
          <Arrow key={i} from={a.from} to={a.to} kind={a.kind} label={a.label} />
        ))}
        {(block.players ?? []).map((p, i) => (
          <Player key={i} x={p.x} y={p.y} label={p.label} team={p.team} />
        ))}
      </PitchSvg>
      <Legend arrows={block.arrows} />
      {block.caption && (
        <figcaption className="text-xs leading-relaxed" style={soft}>
          {block.caption}
        </figcaption>
      )}
    </figure>
  )
}

function Legend({ arrows }: { arrows?: PitchBlock['arrows'] }) {
  const kinds = Array.from(new Set((arrows ?? []).map((a) => a.kind ?? 'pass')))
  if (!kinds.length) return null
  const names: Record<string, string> = { pass: 'pass', run: 'run off the ball', press: 'pressing run', shot: 'shot', dribble: 'dribble', cross: 'cross / lofted ball' }
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px]" style={soft}>
      {kinds.map((k) => (
        <span key={k} className="inline-flex items-center gap-1">
          <svg width="22" height="8" aria-hidden>
            <line x1="1" x2="21" y1="4" y2="4" stroke={ARROW[k].c === '#ffffff' ? '#777' : ARROW[k].c} strokeWidth="2" strokeDasharray={ARROW[k].dash ? '3 2.5' : undefined} />
          </svg>
          {names[k]}
        </span>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------------------
// The expected-goals model used by the labs. A logistic fit to typical published values:
// it uses the shot distance and the angle the goal subtends. Illustrative, not a provider's.
// ---------------------------------------------------------------------------------------

function xgAt(xm: number, ym: number): number {
  const dx = Math.max(105 - xm, 0.6)
  const ly = ym - 34
  const d = Math.max(Math.hypot(dx, ly), 1)
  const th = Math.abs(Math.atan2(3.66 - ly, dx) - Math.atan2(-3.66 - ly, dx))
  const z = -7.6212 + 4.1179 * th - 0.1862 * d + 2.4487 * Math.log(d)
  return 1 / (1 + Math.exp(-z))
}
const odds = (p: number) => p / (1 - p)
const fromOdds = (o: number) => o / (1 + o)

function XgLab({ color }: { color: string }) {
  const [pos, setPos] = useState<[number, number]>([94, 34])
  const [body, setBody] = useState<'foot' | 'head'>('foot')
  const [situation, setSituation] = useState<'open' | 'counter' | 'penalty'>('open')
  const [blockers, setBlockers] = useState(1)
  const [xm, ym] = [pos[0], pos[1]]
  const dx = Math.max(105 - xm, 0.6)
  const ly = ym - 34
  const d = Math.hypot(dx, ly)
  const th = Math.abs(Math.atan2(3.66 - ly, dx) - Math.atan2(-3.66 - ly, dx))
  let p = xgAt(xm, ym)
  let o = odds(p)
  if (body === 'head') o *= 0.5
  if (situation === 'counter') o *= 1.5
  o *= Math.pow(0.78, blockers)
  p = fromOdds(o)
  if (situation === 'penalty') p = 0.76
  return (
    <Card title="Expected goals: click the pitch to move the shooter" color={color} note="This model uses only the distance to goal and the angle the goal subtends, then adjusts the odds for a header, a counter-attack and the number of defenders in the way. It is an illustrative fit to typical published values, not any data provider's model. Real models add the position of the goalkeeper and defenders, the kind of assist and more.">
      <PitchSvg view="attack" label="Half pitch for the expected goals lab" onClick={(x, y) => setPos([Math.min(Math.max(x, 52.5), 104.5), Math.min(Math.max(y, 2), 66)])}>
        <polygon points={`${pos[0]},${pos[1]} 105,30.34 105,37.66`} fill="rgba(255,224,102,.35)" stroke="#ffe066" strokeWidth={0.25} />
        <circle cx={pos[0]} cy={pos[1]} r={1.5} fill={BLUE} stroke="#fff" strokeWidth={0.4} />
        <text x={pos[0]} y={pos[1] - 2.6} fontSize={2.4} fill="#fff" textAnchor="middle" fontWeight={800} style={{ paintOrder: 'stroke', stroke: 'rgba(0,0,0,.6)', strokeWidth: 0.6 }}>
          xG {p.toFixed(2)}
        </text>
      </PitchSvg>
      <div className="flex flex-wrap gap-3">
        <Pills label="body part" value={body} onChange={setBody} options={[['foot', 'Foot'], ['head', 'Header']]} />
        <Pills label="situation" value={situation} onChange={setSituation} options={[['open', 'Open play'], ['counter', 'Fast break'], ['penalty', 'Penalty']]} />
      </div>
      <Slider label="defenders between the ball and the goal" value={blockers} min={0} max={4} step={1} onChange={setBlockers} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="distance to goal centre" value={`${d.toFixed(1)} m`} />
        <Stat label="angle the goal subtends" value={`${((th * 180) / Math.PI).toFixed(0)}°`} />
        <Stat label="expected goals (xG)" value={p.toFixed(3)} tone={color} />
        <Stat label="goals expected from 20 such shots" value={(p * 20).toFixed(1)} />
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Formations
// ---------------------------------------------------------------------------------------

type Pt = { x: number; y: number }
const ROWS: Record<number, number[]> = { 1: [50], 2: [36, 64], 3: [24, 50, 76], 4: [14, 38, 62, 86], 5: [10, 30, 50, 70, 90] }

function shape(lines: number[], tweaks?: { wingBacks?: boolean }): Pt[] {
  const out: Pt[] = [{ x: 6, y: 50 }]
  lines.forEach((n, i) => {
    const x = lines.length === 1 ? 40 : 22 + (i * 48) / (lines.length - 1)
    ROWS[n].forEach((y, j) => {
      const wb = tweaks?.wingBacks && n === 5 && (j === 0 || j === 4)
      out.push({ x: x + (wb ? 8 : 0), y })
    })
  })
  return out
}

const FORMATIONS: Record<string, { lines: number[]; wb?: boolean; era: string; note: string; strength: string; weakness: string }> = {
  '4-4-2': { lines: [4, 4, 2], era: 'English staple, Sacchi’s Milan, Ferguson’s United, Atlético', note: 'Two banks of four and two strikers: simple, balanced and easy to drill.', strength: 'Compact and balanced; two strikers occupy both centre-backs; width on both flanks.', weakness: 'Outnumbered in central midfield by a three; the strikers can be isolated from the midfield.' },
  '4-3-3': { lines: [4, 3, 3], era: 'Brazil 1958 onwards, Cruyff’s Ajax and Barcelona, Klopp’s Liverpool, Guardiola', note: 'A midfield triangle behind a front three: the base of positional play and of pressing sides alike.', strength: 'Triangles across the pitch; a front three that pins the back line and presses.', weakness: 'Space behind advanced full-backs; the lone holder is a target; wide forwards must track back.' },
  '4-2-3-1': { lines: [4, 2, 3, 1], era: 'Dominant from the 2000s: Bayern, Spain, Mourinho’s sides, Germany 2014', note: 'A double pivot protects the back four; a number 10 links to a lone striker.', strength: 'Defensive security with a creative link between midfield and attack.', weakness: 'The lone striker can be starved; the pivot is stretched if the wide players do not defend.' },
  '3-5-2': { lines: [3, 5, 2], wb: true, era: 'Conte’s Juventus and Chelsea, Italy, Inter under Inzaghi', note: 'Three centre-backs, wing-backs for width, a packed midfield and two strikers.', strength: 'Numbers in the middle and at the back; wing-backs provide width and overload.', weakness: 'Wing-backs must cover enormous distances; space on the flanks when they are out of position.' },
  '3-4-3': { lines: [3, 4, 3], era: 'Conte’s Chelsea 2016-17, Ajax in the 1990s variants', note: 'Three at the back, a flat four across the middle and three forwards.', strength: 'Presses with five forward players; wide overloads with wing-backs and wide forwards.', weakness: 'Only two central midfielders; counters into wide channels behind wing-backs.' },
  '5-3-2': { lines: [5, 3, 2], wb: false, era: 'Defensive and counter-attacking sides, Greece 2004, many underdogs', note: 'Five at the back with a compact midfield three and two outlets up front.', strength: 'Very hard to break through the middle; strong against crosses.', weakness: 'Passive; gives the opposition the ball and the territory.' },
  '4-1-4-1': { lines: [4, 1, 4, 1], era: 'Spanish and English sides in the 2000s and 2010s', note: 'A single holding midfielder shielding the defence behind a flat four.', strength: 'Shields the centre-backs; two compact banks when defending.', weakness: 'The holder is exposed if the line in front is bypassed; the striker is isolated.' },
  '4-3-1-2': { lines: [4, 3, 1, 2], era: 'Ancelotti’s Milan, Italy 1990s-2000s', note: 'A diamond midfield with a playmaker behind two strikers.', strength: 'Central dominance; the playmaker and two strikers combine in the middle.', weakness: 'No natural width; full-backs must provide all the width.' },
  '3-4-2-1': { lines: [3, 4, 2, 1], era: 'Alonso’s Leverkusen, Gasperini-style variants, Conte at times', note: 'Three centre-backs, two wide players, two "10s" in the half-spaces and a striker.', strength: 'Overloads the half-spaces; compact when defending in a 5-4-1.', weakness: 'Needs athletic wing-backs; the lone striker needs support.' },
  '4-4-1-1': { lines: [4, 4, 1, 1], era: 'Ranieri’s Leicester, many counter-attacking sides', note: 'Two compact banks with a second striker dropping behind a lone forward.', strength: 'Compact; the second striker links counters.', weakness: 'Outnumbered in midfield against a three; can be pushed back.' },
  '4-2-4': { lines: [4, 2, 4], era: 'Brazil 1958 and the 1960s', note: 'Four forwards and a two-man midfield: the attacking offshoot of the WM.', strength: 'Overwhelming attack when the team has the ball.', weakness: 'The two midfielders are overrun; modern sides rarely use it.' },
  '2-3-5': { lines: [2, 3, 5], era: 'The "pyramid", the dominant shape in the early twentieth century', note: 'Two backs, three half-backs and five forwards: the origin of modern formations.', strength: 'Attacking numbers and width.', weakness: 'Very vulnerable to a through ball between the two backs; replaced after the offside change of 1925.' },
}

function FormationLab({ color }: { color: string }) {
  const keys = Object.keys(FORMATIONS)
  const [f, setF] = useState('4-3-3')
  const [opp, setOpp] = useState<string>('none')
  const info = FORMATIONS[f]
  const mine = shape(info.lines, { wingBacks: info.wb })
  const theirs = opp === 'none' ? [] : shape(FORMATIONS[opp].lines, { wingBacks: FORMATIONS[opp].wb }).map((p) => ({ x: 100 - p.x, y: 100 - p.y }))
  return (
    <Card title="Formation lab: shapes and matchups" color={color} note="Formations are a starting structure, not a description of play: players rotate and positions shift with and without the ball. Shapes here are drawn at their base positions, attacking left to right. Choose an opponent to see which lines face each other and where the numerical advantages lie.">
      <div className="flex flex-wrap gap-1.5">
        {keys.map((k) => (
          <Btn key={k} active={k === f} onClick={() => setF(k)}>
            {k}
          </Btn>
        ))}
      </div>
      <Pills label="opponent" value={opp} onChange={setOpp} options={[['none', 'No opponent'], ['4-4-2', 'v 4-4-2'], ['4-3-3', 'v 4-3-3'], ['3-5-2', 'v 3-5-2'], ['4-2-3-1', 'v 4-2-3-1']]} />
      <PitchSvg label={`Formation ${f}`}>
        {mine.map((p, i) => (
          <Player key={'a' + i} x={p.x} y={p.y} team={i === 0 ? 'gk' : 'a'} label={i === 0 ? '1' : String(i + 1)} />
        ))}
        {theirs.map((p, i) => (
          <Player key={'b' + i} x={p.x} y={p.y} team={i === 0 ? 'gk' : 'b'} />
        ))}
      </PitchSvg>
      <div className="grid gap-2 text-sm sm:grid-cols-2">
        <div className="rounded-[var(--radius)] border p-2" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
          <p className="font-bold">{f}</p>
          <p className="text-xs" style={soft}>
            {info.note}
          </p>
          <p className="mt-1 text-xs">
            <b>Associated with:</b> {info.era}
          </p>
        </div>
        <div className="rounded-[var(--radius)] border p-2 text-xs" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
          <p>
            <b>Strengths:</b> {info.strength}
          </p>
          <p className="mt-1">
            <b>Weaknesses:</b> {info.weakness}
          </p>
        </div>
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// A synthetic match: shots with xG for both teams, shown as a map and as a timeline.
// ---------------------------------------------------------------------------------------

type Shot = { team: 'a' | 'b'; minute: number; x: number; y: number; xg: number; goal: boolean }

function genMatch(seed: number): Shot[] {
  const r = rng(seed * 7919 + 13)
  const out: Shot[] = []
  for (const team of ['a', 'b'] as const) {
    const n = team === 'a' ? 12 + Math.floor(r() * 8) : 6 + Math.floor(r() * 7)
    for (let i = 0; i < n; i++) {
      const dx = 4 + Math.exp(2.25 + 0.55 * normal(r))
      const ly = Math.max(-24, Math.min(24, 8 * normal(r)))
      const xm = 105 - Math.min(dx, 40)
      const ym = 34 + ly
      const xg = xgAt(xm, ym)
      out.push({ team, minute: 1 + Math.floor(r() * 90), x: team === 'a' ? xm : 105 - xm, y: team === 'a' ? ym : 68 - ym, xg, goal: r() < xg })
    }
  }
  return out.sort((a, b) => a.minute - b.minute)
}

// The distribution of the number of goals from independent shots (a Poisson-binomial).
function goalDist(xgs: number[]): number[] {
  let dist = [1]
  for (const p of xgs) {
    const next = new Array(dist.length + 1).fill(0)
    dist.forEach((q, k) => {
      next[k] += q * (1 - p)
      next[k + 1] += q * p
    })
    dist = next
  }
  return dist
}

function MatchView({ color, mode }: { color: string; mode: 'map' | 'timeline' }) {
  const [seed, setSeed] = useState(3)
  const [show, setShow] = useState<'both' | 'a' | 'b'>('both')
  const shots = useMemo(() => genMatch(seed), [seed])
  const a = shots.filter((s) => s.team === 'a')
  const b = shots.filter((s) => s.team === 'b')
  const sum = (xs: Shot[]) => xs.reduce((t, s) => t + s.xg, 0)
  const goals = (xs: Shot[]) => xs.filter((s) => s.goal).length
  const da = goalDist(a.map((s) => s.xg))
  const db = goalDist(b.map((s) => s.xg))
  let pw = 0
  let pd = 0
  let pl = 0
  da.forEach((qa, i) => db.forEach((qb, j) => (i > j ? (pw += qa * qb) : i === j ? (pd += qa * qb) : (pl += qa * qb))))
  return (
    <Card title={mode === 'map' ? 'A shot map: every shot sized by its xG' : 'The xG timeline and what xG says about the result'} color={color} note="This is a randomly generated match, not a real one: each shot is drawn at a plausible place and scores with probability equal to its xG. Press ‘new match’ a few times: the same chances produce different scores, which is why one game’s xG is a better description of how the teams played than the scoreline. Blue attacks to the right, red to the left.">
      <div className="flex flex-wrap gap-2">
        <Btn onClick={() => setSeed((s) => s + 1)}>New match</Btn>
        {mode === 'map' && <Pills label="team" value={show} onChange={setShow} options={[['both', 'Both teams'], ['a', 'Blue'], ['b', 'Red']]} />}
      </div>
      {mode === 'map' ? (
        <PitchSvg label="Shot map">
          {shots
            .filter((s) => show === 'both' || s.team === show)
            .map((s, i) => (
              <circle key={i} cx={px(s.x)} cy={py(s.y)} r={0.9 + 3.2 * Math.sqrt(s.xg)} fill={s.goal ? (s.team === 'a' ? BLUE : RED) : 'none'} stroke={s.team === 'a' ? '#a8c8ff' : '#ffb4ad'} strokeWidth={0.5} opacity={0.9} />
            ))}
        </PitchSvg>
      ) : (
        <Timeline shots={shots} />
      )}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="blue: shots · xG · goals" value={`${a.length} · ${sum(a).toFixed(2)} · ${goals(a)}`} tone={BLUE} />
        <Stat label="red: shots · xG · goals" value={`${b.length} · ${sum(b).toFixed(2)} · ${goals(b)}`} tone={RED} />
        <Stat label="actual score" value={`${goals(a)} – ${goals(b)}`} />
        <Stat label="xG-implied: blue win · draw · red win" value={`${(pw * 100).toFixed(0)}% · ${(pd * 100).toFixed(0)}% · ${(pl * 100).toFixed(0)}%`} tone={color} />
      </div>
    </Card>
  )
}

function Timeline({ shots }: { shots: Shot[] }) {
  const W = 640
  const H = 200
  const M = { l: 36, r: 12, t: 12, b: 26 }
  const run = (team: 'a' | 'b') => {
    let c = 0
    const pts: [number, number][] = [[0, 0]]
    shots.filter((s) => s.team === team).forEach((s) => {
      pts.push([s.minute, c])
      c += s.xg
      pts.push([s.minute, c])
    })
    pts.push([90, c])
    return pts
  }
  const A = run('a')
  const B = run('b')
  const top = Math.max(A[A.length - 1][1], B[B.length - 1][1], 1) * 1.1
  const X = (m: number) => M.l + (m / 90) * (W - M.l - M.r)
  const Y = (v: number) => H - M.b - (v / top) * (H - M.t - M.b)
  const path = (p: [number, number][]) => p.map(([m, v], i) => `${i ? 'L' : 'M'}${X(m).toFixed(1)} ${Y(v).toFixed(1)}`).join(' ')
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Cumulative xG by minute">
      {[0, 15, 30, 45, 60, 75, 90].map((m) => (
        <g key={m}>
          <line x1={X(m)} x2={X(m)} y1={M.t} y2={H - M.b} stroke="var(--ink-soft)" opacity={0.2} />
          <text x={X(m)} y={H - 9} fontSize={10.5} textAnchor="middle" fill="var(--ink-soft)">
            {m}'
          </text>
        </g>
      ))}
      <path d={path(A)} fill="none" stroke={BLUE} strokeWidth={2.5} />
      <path d={path(B)} fill="none" stroke={RED} strokeWidth={2.5} />
      {shots.filter((s) => s.goal).map((s, i) => {
        const line = s.team === 'a' ? A : B
        const pt = line.find((p) => p[0] === s.minute) ?? line[0]
        return <circle key={i} cx={X(s.minute)} cy={Y(pt[1] + s.xg)} r={5} fill={s.team === 'a' ? BLUE : RED} stroke="var(--ink)" />
      })}
      <text x={M.l} y={M.t + 4} fontSize={10.5} fill="var(--ink-soft)">
        cumulative xG (dots = goals)
      </text>
    </svg>
  )
}

// ---------------------------------------------------------------------------------------
// Passing network from a style
// ---------------------------------------------------------------------------------------

function PassingNetwork({ color }: { color: string }) {
  const [reach, setReach] = useState(14)
  const [forward, setForward] = useState(0.4)
  const [wide, setWide] = useState(0.2)
  const base = useMemo(() => shape([4, 3, 3]), [])
  const nodes = base.map((p) => ({ x: p.x, y: p.y }))
  const edges = useMemo(() => {
    const out: { i: number; j: number; w: number; len: number; fwd: number }[] = []
    nodes.forEach((a, i) =>
      nodes.forEach((b, j) => {
        if (i === j) return
        const dxm = (b.x - a.x) * 1.05
        const dym = (b.y - a.y) * 0.68
        const len = Math.hypot(dxm, dym)
        if (len < 4) return
        const fwdShare = dxm / len
        let w = Math.exp(-len / reach) * (1 + forward * Math.max(0, fwdShare) * 3)
        w *= 1 + wide * (Math.abs(a.y - 50) > 30 || Math.abs(b.y - 50) > 30 ? 1 : 0)
        out.push({ i, j, w, len, fwd: dxm })
      }),
    )
    return out
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reach, forward, wide])
  const total = edges.reduce((t, e) => t + e.w, 0)
  const avgLen = edges.reduce((t, e) => t + e.w * e.len, 0) / total
  const fwdShare = edges.filter((e) => e.fwd > 2).reduce((t, e) => t + e.w, 0) / total
  const touches = nodes.map((_, k) => edges.filter((e) => e.j === k).reduce((t, e) => t + e.w, 0) / total)
  const maxW = Math.max(...edges.map((e) => e.w))
  const set = (r: number, f: number, w: number) => {
    setReach(r)
    setForward(f)
    setWide(w)
  }
  return (
    <Card title="Passing network: how a style changes the shape of the passing" color={color} note="Lines are pass links between average positions of a 4-3-3 (attacking to the right); thicker means more passes, and node size shows touches. The model gives each pair of players a weight that falls with distance (the ‘reach’), rises for forward passes and for wide positions. It illustrates how styles differ, it does not reproduce any particular team.">
      <div className="flex flex-wrap gap-1.5">
        <Btn onClick={() => set(9, 0.15, 0.05)}>Positional play (short, patient)</Btn>
        <Btn onClick={() => set(18, 1.2, 0.1)}>Vertical (forward, quick)</Btn>
        <Btn onClick={() => set(30, 1.6, 0.0)}>Direct (long balls)</Btn>
        <Btn onClick={() => set(14, 0.5, 1.2)}>Wing play</Btn>
      </div>
      <div className="flex flex-wrap gap-3">
        <Slider label="reach: how far the typical pass travels (m)" value={reach} min={6} max={35} step={1} onChange={setReach} />
        <Slider label="forward bias" value={forward} min={0} max={2} step={0.1} onChange={setForward} show={forward.toFixed(1)} />
        <Slider label="wide bias" value={wide} min={0} max={2} step={0.1} onChange={setWide} show={wide.toFixed(1)} />
      </div>
      <PitchSvg label="Passing network">
        {edges
          .filter((e) => e.w > maxW * 0.18)
          .map((e, k) => (
            <line key={k} x1={px(nodes[e.i].x)} y1={py(nodes[e.i].y)} x2={px(nodes[e.j].x)} y2={py(nodes[e.j].y)} stroke="#fff" strokeOpacity={0.15 + 0.5 * (e.w / maxW)} strokeWidth={0.25 + 1.6 * (e.w / maxW)} />
          ))}
        {nodes.map((p, k) => (
          <g key={k}>
            <circle cx={px(p.x)} cy={py(p.y)} r={1.4 + 18 * touches[k]} fill={k === 0 ? GOLD : BLUE} stroke="#fff" strokeWidth={0.4} opacity={0.92} />
            <text x={px(p.x)} y={py(p.y) + 0.65} fontSize={1.7} textAnchor="middle" fill="#fff" fontWeight={800}>
              {k + 1}
            </text>
          </g>
        ))}
      </PitchSvg>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="average pass length" value={`${avgLen.toFixed(1)} m`} tone={color} />
        <Stat label="share of passes that go forward" value={`${(fwdShare * 100).toFixed(0)}%`} />
        <Stat label="most-involved player" value={`#${touches.indexOf(Math.max(...touches)) + 1}`} />
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Pressing: PPDA
// ---------------------------------------------------------------------------------------

function PressingLab({ color }: { color: string }) {
  const [line, setLine] = useState(60)
  const [passes, setPasses] = useState(120)
  const [actions, setActions] = useState(14)
  const ppda = passes / Math.max(actions, 1)
  const label = ppda < 8 ? 'intense, high press' : ppda < 12 ? 'moderate press' : ppda < 16 ? 'passive, mid-block' : 'very passive, low block'
  return (
    <Card title="Pressing intensity: PPDA" color={color} note="PPDA means passes allowed per defensive action: the opponent’s passes in the zone you press, divided by your tackles, interceptions, challenges and fouls there. Lower is more intense. The thresholds on the label are rough guides: the best pressing sides in major leagues have averaged around 8 to 9, and passive ones above 12. Real PPDA uses a fixed zone (the opponent’s first 60% of the pitch); here you can move the line to see what a higher or lower press covers.">
      <Slider label="how far up the pitch the press begins (% of pitch length)" value={line} min={20} max={80} step={1} onChange={setLine} show={`${line}%`} />
      <Slider label="opponent’s passes in that zone (per match)" value={passes} min={30} max={300} step={5} onChange={setPasses} />
      <Slider label="our defensive actions in that zone" value={actions} min={2} max={50} step={1} onChange={setActions} />
      <PitchSvg label="Pressing zone">
        <rect x={px(line)} y={0} width={105 - px(line)} height={68} fill="rgba(76,201,240,.25)" />
        <line x1={px(line)} x2={px(line)} y1={0} y2={68} stroke="#4cc9f0" strokeWidth={0.5} strokeDasharray="1 0.8" />
        <text x={px(line) + 2} y={5} fontSize={2.2} fill="#fff" fontWeight={800}>
          zone where we press
        </text>
        <text x={4} y={34} fontSize={2.2} fill="#fff" fontWeight={700} opacity={0.9}>
          our half
        </text>
      </PitchSvg>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="PPDA" value={ppda.toFixed(1)} tone={color} />
        <Stat label="style" value={label} />
        <Stat label="opponent passes per minute in the zone" value={(passes / 90).toFixed(1)} />
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Offside
// ---------------------------------------------------------------------------------------

function OffsideLab({ color }: { color: string }) {
  const [att, setAtt] = useState(80)
  const [def, setDef] = useState(78)
  const [ball, setBall] = useState(60)
  const offsideLine = Math.max(def, ball)
  const inOwnHalf = att <= 50
  const off = !inOwnHalf && att > offsideLine
  return (
    <Card title="Offside: where is the line?" color={color} note="A player is in an offside position if any part of the head, body or feet that can legally score is nearer to the opponents’ goal line than both the ball and the second-last opponent (the goalkeeper usually counts as one) at the moment the ball is played. Being level is onside. You are only penalised if you then become involved in play, and it is never an offence in your own half, from a goal kick, throw-in or corner.">
      <div className="flex flex-wrap gap-3">
        <Slider label="attacker’s position (% of the pitch from own goal line)" value={att} min={30} max={104} step={1} onChange={setAtt} show={`${att}%`} />
        <Slider label="second-last defender" value={def} min={50} max={100} step={1} onChange={setDef} show={`${def}%`} />
        <Slider label="ball when the pass is played" value={ball} min={20} max={100} step={1} onChange={setBall} show={`${ball}%`} />
      </div>
      <PitchSvg label="Offside lab">
        <line x1={px(offsideLine)} x2={px(offsideLine)} y1={0} y2={68} stroke="#ffe066" strokeWidth={0.5} strokeDasharray="1.2 0.8" />
        <Player x={98.5} y={50} team="gk" label="GK" />
        <Player x={def} y={30} team="b" label="D" />
        <Player x={def - 6} y={62} team="b" />
        <Player x={att} y={45} team="a" label="A" />
        <Player x={ball} y={66} team="ball" />
        <Arrow from={[ball, 66]} to={[att, 47]} kind="pass" />
        <text x={px(offsideLine) + 1} y={4} fontSize={2.2} fill="#ffe066" fontWeight={800}>
          offside line
        </text>
      </PitchSvg>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="verdict (if involved in play)" value={inOwnHalf ? 'onside: own half' : off ? 'OFFSIDE' : 'onside'} tone={off ? '#d9483f' : color} />
        <Stat label="line set by" value={ball > def ? 'the ball' : 'the second-last defender'} />
        <Stat label="margin" value={`${(att - offsideLine).toFixed(0)}% of pitch length`} />
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Pitch control: which team can reach each point first.
// ---------------------------------------------------------------------------------------

function PitchControl({ color }: { color: string }) {
  const [lineA, setLineA] = useState(0)
  const [lineB, setLineB] = useState(0)
  const [spread, setSpread] = useState(0)
  const a = useMemo(() => shape([4, 3, 3]).map((p, i) => ({ x: Math.min(95, Math.max(4, p.x + (i === 0 ? 0 : lineA))), y: 50 + (p.y - 50) * (1 + spread / 100) })), [lineA, spread])
  const b = useMemo(() => shape([4, 4, 2]).map((p, i) => ({ x: 100 - Math.min(95, Math.max(4, p.x + (i === 0 ? 0 : lineB))), y: 100 - (50 + (p.y - 50) * (1 + spread / 100)) })), [lineB, spread])
  const cells = useMemo(() => {
    const out: { x: number; y: number; v: number }[] = []
    let tot = 0
    let mine = 0
    for (let i = 0; i < 35; i++) {
      for (let j = 0; j < 23; j++) {
        const x = (i + 0.5) * 3
        const y = (j + 0.5) * 2.96
        const near = (ps: { x: number; y: number }[]) => Math.min(...ps.map((p) => Math.hypot(p.x * 1.05 - x, p.y * 0.68 - y)))
        const da = near(a)
        const db = near(b)
        const v = (db - da) / (da + db + 1)
        tot++
        if (v > 0) mine++
        out.push({ x, y, v })
      }
    }
    return { cells: out, share: mine / tot }
  }, [a, b])
  return (
    <Card title="Pitch control: who can reach each space first?" color={color} note="A simplified model: each point belongs to the team whose nearest player is closer (equal speeds, no reaction time). Real pitch-control models use the players’ velocities and the time each needs to arrive. Push a team’s line up or down and watch the territory shift: a high line controls more of the pitch but leaves more behind it.">
      <div className="flex flex-wrap gap-3">
        <Slider label="blue team’s line (m up/down)" value={lineA} min={-20} max={20} step={1} onChange={setLineA} />
        <Slider label="red team’s line (m up/down)" value={lineB} min={-20} max={20} step={1} onChange={setLineB} />
        <Slider label="team width (% of default)" value={spread} min={-30} max={30} step={5} onChange={setSpread} show={`${spread >= 0 ? '+' : ''}${spread}%`} />
      </div>
      <PitchSvg label="Pitch control map">
        {cells.cells.map((c, i) => (
          <rect key={i} x={c.x - 1.5} y={c.y - 1.48} width={3} height={2.96} fill={c.v > 0 ? BLUE : RED} opacity={0.12 + Math.min(0.55, Math.abs(c.v) * 1.6)} />
        ))}
        {a.map((p, i) => (
          <Player key={'a' + i} x={p.x} y={p.y} team={i === 0 ? 'gk' : 'a'} />
        ))}
        {b.map((p, i) => (
          <Player key={'b' + i} x={p.x} y={p.y} team={i === 0 ? 'gk' : 'b'} />
        ))}
      </PitchSvg>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="blue controls" value={`${(cells.share * 100).toFixed(0)}% of the pitch`} tone={BLUE} />
        <Stat label="red controls" value={`${((1 - cells.share) * 100).toFixed(0)}% of the pitch`} tone={RED} />
        <Stat label="formations" value="4-3-3 v 4-4-2" />
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Expected threat: value of moving the ball
// ---------------------------------------------------------------------------------------

const xt = (xm: number, ym: number) => 0.006 + 0.55 * xgAt(Math.max(xm, 30), ym) * Math.min(1, Math.max(0, (xm - 40) / 35)) + 0.012 * Math.pow(xm / 105, 3)

function XtLab({ color }: { color: string }) {
  const [start, setStart] = useState<[number, number]>([40, 34])
  const [end, setEnd] = useState<[number, number]>([75, 20])
  const [phase, setPhase] = useState<'start' | 'end'>('start')
  const cells = useMemo(() => {
    const out: { x: number; y: number; v: number }[] = []
    for (let i = 0; i < 21; i++) for (let j = 0; j < 14; j++) out.push({ x: (i + 0.5) * 5, y: (j + 0.5) * (68 / 14), v: xt((i + 0.5) * 5, (j + 0.5) * (68 / 14)) })
    return out
  }, [])
  const maxV = Math.max(...cells.map((c) => c.v))
  const gain = xt(end[0], end[1]) - xt(start[0], start[1])
  return (
    <Card title="Expected threat: how much does a pass add?" color={color} note="Expected threat (xT) gives every location a value: the chance that possession from there leads to a goal soon. A pass is worth the difference between the value where it ends and where it started. This grid is an illustrative construction from the xG model, not the published xT surface. Click the pitch to set the pass’s start, then its end.">
      <div className="flex gap-2">
        <Btn active={phase === 'start'} onClick={() => setPhase('start')}>
          Set start
        </Btn>
        <Btn active={phase === 'end'} onClick={() => setPhase('end')}>
          Set end
        </Btn>
      </div>
      <PitchSvg label="Expected threat grid" onClick={(x, y) => (phase === 'start' ? setStart([Math.min(105, Math.max(0, x)), Math.min(68, Math.max(0, y))]) : setEnd([Math.min(105, Math.max(0, x)), Math.min(68, Math.max(0, y))]))}>
        {cells.map((c, i) => (
          <rect key={i} x={c.x - 2.5} y={c.y - 2.43} width={5} height={4.86} fill="#ff8a3d" opacity={Math.pow(c.v / maxV, 0.6) * 0.8} />
        ))}
        <Player x={start[0] / 1.05} y={start[1] / 0.68} team="a" label="S" />
        <Player x={end[0] / 1.05} y={end[1] / 0.68} team="a" label="E" />
        <Arrow from={[start[0] / 1.05, start[1] / 0.68]} to={[end[0] / 1.05, end[1] / 0.68]} kind="pass" />
      </PitchSvg>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="threat at the start" value={xt(start[0], start[1]).toFixed(3)} />
        <Stat label="threat at the end" value={xt(end[0], end[1]).toFixed(3)} />
        <Stat label="threat added by the pass" value={`${gain >= 0 ? '+' : ''}${gain.toFixed(3)}`} tone={gain >= 0 ? color : '#d9483f'} />
      </div>
    </Card>
  )
}
