/**
 * Facilitation labs.
 *
 * Six tools for the facilitation shelf, all of them arithmetic a facilitator
 * does badly in their head: how a session's minutes actually divide, which
 * option wins under which voting rule, how much airtime a person gets in a
 * room of a given size, what a station rotation costs in total time, what a
 * pre/post measurement does and does not show, and which task a programme is
 * actually waiting on.
 */
import { useMemo, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { Card, Phi, Select, Slider, Stat, soft } from './kit'
import { AGENDAS, NETWORKS, PHASES, ROTATIONS, VOTE_PROFILES } from '../../lib/facilitation/data'
import type { AgendaBlock, Network, Phase, Task, VoteProfile } from '../../lib/facilitation/data'

type FacilBlockType = Extract<Block, { t: 'facil-lab' }>

const LINE = 'var(--line)'
const GOOD = '#2f9e6e'
const WARN = '#d9534f'
const PHASE_TONE: Record<Phase, string> = { open: '#3b6fd8', explore: '#e07b2a', converge: '#2f9e6e', close: '#7b4fc9' }

export default function FacilBlock({ block, color }: { block: FacilBlockType; color: string }) {
  switch (block.viz) {
    case 'agenda':
      return <AgendaLab color={color} />
    case 'voting':
      return <VotingLab color={color} />
    case 'airtime':
      return <AirtimeLab color={color} />
    case 'rotation':
      return <RotationLab color={color} />
    case 'gain':
      return <GainLab color={color} />
    case 'critical-path':
      return <CriticalPathLab color={color} />
  }
}

// ── agenda designer ────────────────────────────────────────────────────────

/**
 * Rescale a template to a new length. Largest-remainder rounding, so the
 * minutes still add up to the session exactly rather than drifting by three
 * minutes per block the way they do on a whiteboard.
 */
function rescale(blocks: AgendaBlock[], total: number) {
  const base = blocks.reduce((n, b) => n + b.minutes, 0)
  const raw = blocks.map((b) => (b.minutes / base) * total)
  const floored = raw.map((x) => Math.max(1, Math.floor(x)))
  let left = total - floored.reduce((a, b) => a + b, 0)
  const order = raw
    .map((x, i) => ({ i, frac: x - Math.floor(x) }))
    .sort((a, b) => b.frac - a.frac)
  const out = [...floored]
  let k = 0
  while (left > 0 && order.length) {
    out[order[k % order.length].i] += 1
    left--
    k++
  }
  while (left < 0) {
    // Too long after flooring to a minimum of one minute: take from the longest block.
    const longest = out.indexOf(Math.max(...out))
    out[longest] -= 1
    left++
  }
  return blocks.map((b, i) => ({ ...b, minutes: out[i] }))
}

const hhmm = (mins: number) => {
  const m = ((mins % 1440) + 1440) % 1440
  return `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(Math.round(m % 60)).padStart(2, '0')}`
}

function AgendaLab({ color }: { color: string }) {
  const [id, setId] = useState(AGENDAS[0].id)
  const t = AGENDAS.find((a) => a.id === id)!
  const [total, setTotal] = useState(t.minutes)
  const [start, setStart] = useState(9 * 60)
  const [people, setPeople] = useState(t.people)

  const blocks = useMemo(() => rescale(t.blocks, total), [t, total])
  const byPhase = PHASES.map((p) => ({
    ...p,
    minutes: blocks.filter((b) => b.phase === p.key).reduce((n, b) => n + b.minutes, 0),
  }))
  const shares = byPhase.map((p) => ({ ...p, share: p.minutes / total }))

  // Checks a facilitator should run before the session, done arithmetically.
  const roundMinutes = blocks.filter((b) => /round|check-in|check-out/i.test(b.name)).reduce((n, b) => n + b.minutes, 0)
  const perPersonRound = roundMinutes > 0 ? (roundMinutes * 60) / people : 0
  const longestUnbroken = (() => {
    let run = 0
    let worst = 0
    for (const b of blocks) {
      if (/break/i.test(b.name)) run = 0
      else {
        run += b.minutes
        worst = Math.max(worst, run)
      }
    }
    return worst
  })()
  const warnings: string[] = []
  for (const p of shares) {
    if (p.share < PHASES.find((x) => x.key === p.key)!.share[0] - 0.02) warnings.push(`${p.name} is ${Math.round(p.share * 100)}% of the session, below the ${Math.round(PHASES.find((x) => x.key === p.key)!.share[0] * 100)}% these templates assume. The usual casualty is ${p.key === 'close' ? 'actions with owners, which is how a session becomes a conversation' : p.key === 'converge' ? 'the decision, which then happens by email afterwards' : 'hearing every voice early, which costs you buy-in later'}.`)
  }
  if (longestUnbroken > 90) warnings.push(`${longestUnbroken} minutes without a break. Past about 90 minutes you are paying for seats, not attention.`)
  if (perPersonRound > 0 && perPersonRound < 20) warnings.push(`Rounds give each person ${perPersonRound.toFixed(0)} seconds. Under about 20 seconds a round reads as a formality; either cut the round or cut the group into pairs first.`)

  // Clock times, accumulated without mutating anything after render.
  const timed = blocks.reduce<(AgendaBlock & { at: number; until: number })[]>((acc, b) => {
    const at = acc.length ? acc[acc.length - 1].until : start
    acc.push({ ...b, at, until: at + b.minutes })
    return acc
  }, [])
  const endsAt = timed.length ? timed[timed.length - 1].until : start

  return (
    <Card
      title="Agenda designer"
      color={color}
      note="Session design is mostly division. Rescale a template and the arithmetic shows what you have actually cut: the phase shares, the longest unbroken stretch, and how many seconds a round gives each person. Phase bands are the proportions these templates assume, not a law."
    >
      <div className="flex flex-wrap gap-3">
        <Select
          label="Template"
          value={id}
          onChange={(v) => {
            const next = AGENDAS.find((a) => a.id === v)!
            setId(v)
            setTotal(next.minutes)
            setPeople(next.people)
          }}
          options={AGENDAS.map((a) => [a.id, `${a.name} (${a.minutes} min)`])}
        />
        <Slider label="Session length" min={30} max={240} step={5} value={total} show={`${total} min`} onChange={setTotal} />
        <Slider label="People" min={4} max={60} step={1} value={people} show={String(people)} onChange={setPeople} />
        <Slider label="Start" min={7 * 60} max={20 * 60} step={15} value={start} show={hhmm(start)} onChange={setStart} />
      </div>

      <p className="text-xs leading-relaxed" style={soft}>
        <strong>Purpose:</strong> {t.purpose} <strong>Decision rule:</strong> {t.rule}
      </p>

      <div className="flex h-7 w-full overflow-hidden rounded-full border" style={{ borderColor: LINE }}>
        {byPhase.map((p) => (
          <div key={p.key} className="flex items-center justify-center text-[10px] font-bold" style={{ width: `${(p.minutes / total) * 100}%`, background: PHASE_TONE[p.key], color: 'white' }}>
            {p.minutes >= total * 0.08 ? `${p.name} ${Math.round((p.minutes / total) * 100)}%` : ''}
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr style={soft}>
              <th className="pb-1 text-xs font-bold uppercase">Time</th>
              <th className="pb-1 text-xs font-bold uppercase">Min</th>
              <th className="pb-1 text-xs font-bold uppercase">Block</th>
              <th className="pb-1 text-xs font-bold uppercase">Method</th>
            </tr>
          </thead>
          <tbody>
            {timed.map((b, i) => (
              <tr key={`${b.name}-${i}`} className="border-t align-top" style={{ borderColor: LINE }}>
                <td className="py-1.5 font-mono text-xs whitespace-nowrap" style={soft}>
                  {hhmm(b.at)}–{hhmm(b.until)}
                </td>
                <td className="py-1.5 font-mono text-xs font-bold" style={{ color: PHASE_TONE[b.phase] }}>
                  {b.minutes}
                </td>
                <td className="py-1.5">
                  <span className="font-bold">{b.name}</span>
                  {b.note && (
                    <span className="block text-xs leading-relaxed" style={soft}>
                      {b.note}
                    </span>
                  )}
                </td>
                <td className="py-1.5 text-xs" style={soft}>
                  {b.method ?? '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-2">
        <Stat label="Ends at" value={hhmm(endsAt)} />
        <Stat label="Longest unbroken" value={`${longestUnbroken} min`} tone={longestUnbroken > 90 ? WARN : undefined} />
        <Stat label="Blocks" value={blocks.length} />
        {perPersonRound > 0 && <Stat label="Round, per person" value={`${perPersonRound.toFixed(0)} s`} tone={perPersonRound < 20 ? WARN : GOOD} />}
      </div>

      {warnings.length > 0 ? (
        <ul className="ml-4 list-disc text-xs leading-relaxed" style={{ color: WARN }}>
          {warnings.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      ) : (
        <p className="text-xs font-bold" style={{ color: GOOD }}>
          Phase shares are within the bands these templates assume, there is a break inside every 90 minutes, and rounds give each person a usable amount of time.
        </p>
      )}
    </Card>
  )
}

// ── voting rules ───────────────────────────────────────────────────────────

type Tally = { option: string; value: number }

function plurality(p: VoteProfile): Tally[] {
  return p.options.map((o, i) => ({ option: o, value: p.blocs.filter((b) => b.ranking[0] === i).reduce((n, b) => n + b.count, 0) }))
}

function borda(p: VoteProfile): Tally[] {
  const m = p.options.length
  const score = new Array(m).fill(0)
  for (const b of p.blocs) b.ranking.forEach((opt, pos) => (score[opt] += (m - 1 - pos) * b.count))
  return p.options.map((o, i) => ({ option: o, value: score[i] }))
}

/** How many voters prefer i to j. */
function pairwise(p: VoteProfile) {
  const m = p.options.length
  const w: number[][] = Array.from({ length: m }, () => new Array(m).fill(0))
  for (const b of p.blocs) {
    for (let a = 0; a < m; a++) {
      for (let c = 0; c < m; c++) {
        if (a === c) continue
        if (b.ranking.indexOf(a) < b.ranking.indexOf(c)) w[a][c] += b.count
      }
    }
  }
  return w
}

function approval(p: VoteProfile, k: number): Tally[] {
  const score = new Array(p.options.length).fill(0)
  for (const b of p.blocs) b.ranking.slice(0, k).forEach((opt) => (score[opt] += b.count))
  return p.options.map((o, i) => ({ option: o, value: score[i] }))
}

const winnerOf = (t: Tally[]) => t.reduce((best, x) => (x.value > best.value ? x : best), t[0])

function VotingLab({ color }: { color: string }) {
  const [id, setId] = useState(VOTE_PROFILES[0].id)
  const p = VOTE_PROFILES.find((x) => x.id === id)!
  const m = p.options.length
  const [k, setK] = useState(Math.max(1, Math.round(m / 3)))
  const voters = p.blocs.reduce((n, b) => n + b.count, 0)

  const plu = plurality(p)
  const bor = borda(p)
  const app = approval(p, Math.min(k, m - 1))
  const w = pairwise(p)

  // Two-round runoff between the top two first-preference finishers.
  const runoff = (() => {
    const sorted = [...plu].sort((a, b) => b.value - a.value)
    const a = p.options.indexOf(sorted[0].option)
    const b = p.options.indexOf(sorted[1].option)
    return { a: p.options[a], b: p.options[b], av: w[a][b], bv: w[b][a], winner: w[a][b] >= w[b][a] ? p.options[a] : p.options[b] }
  })()

  const condorcet = (() => {
    for (let i = 0; i < m; i++) {
      let beatsAll = true
      for (let j = 0; j < m; j++) if (i !== j && w[i][j] <= w[j][i]) beatsAll = false
      if (beatsAll) return p.options[i]
    }
    return null
  })()

  const results: [string, string, string][] = [
    ['Plurality (one mark each)', winnerOf(plu).option, plu.map((x) => `${x.option.split(' ')[0]} ${x.value}`).join(' · ')],
    ['Two-round runoff', runoff.winner, `${runoff.a} ${runoff.av} v ${runoff.b} ${runoff.bv}`],
    ['Borda count', winnerOf(bor).option, bor.map((x) => `${x.option.split(' ')[0]} ${x.value}`).join(' · ')],
    [`Approval / dot voting (top ${Math.min(k, m - 1)})`, winnerOf(app).option, app.map((x) => `${x.option.split(' ')[0]} ${x.value}`).join(' · ')],
    ['Condorcet (beats all pairwise)', condorcet ?? 'no winner: there is a cycle', condorcet ? 'beats every other option head to head' : 'majority preference is circular'],
  ]
  const distinct = new Set(results.map((r) => r[1])).size

  return (
    <Card
      title="Voting rules on one set of preferences"
      color={color}
      note="The same room, the same opinions, five rules, and often three different winners. This is Arrow's theorem in a church hall: there is no rule that is fair on every count, so the facilitator's job is to choose one on purpose, say so before the vote, and be able to explain why."
    >
      <div className="flex flex-wrap gap-3">
        <Select label="Preference profile" value={id} onChange={(v) => setId(v)} options={VOTE_PROFILES.map((x) => [x.id, x.name])} />
        <Slider label="Dots / approvals each" min={1} max={Math.max(1, m - 1)} step={1} value={Math.min(k, m - 1)} show={String(Math.min(k, m - 1))} onChange={setK} />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr style={soft}>
              <th className="pb-1 text-xs font-bold uppercase">Bloc</th>
              <th className="pb-1 text-xs font-bold uppercase">Voters</th>
              <th className="pb-1 text-xs font-bold uppercase">Ranking, best first</th>
            </tr>
          </thead>
          <tbody>
            {p.blocs.map((b, i) => (
              <tr key={i} className="border-t" style={{ borderColor: LINE }}>
                <td className="py-1.5 font-bold">{b.who ?? `Bloc ${i + 1}`}</td>
                <td className="py-1.5 font-mono text-xs">{b.count}</td>
                <td className="py-1.5 text-xs" style={soft}>
                  {b.ranking.map((o) => p.options[o]).join(' › ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-2">
        {results.map(([rule, winner, detail]) => (
          <div key={rule} className="flex flex-wrap items-baseline justify-between gap-2 rounded-[var(--radius)] border p-2.5" style={{ borderColor: LINE }}>
            <span className="text-xs font-bold uppercase tracking-wide" style={soft}>
              {rule}
            </span>
            <span className="text-sm font-bold" style={{ color }}>
              {winner}
            </span>
            <span className="w-full font-mono text-[11px]" style={soft}>
              {detail}
            </span>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={soft}>
          Pairwise: row beats column, out of {voters}
        </p>
        <table className="text-left text-xs">
          <thead>
            <tr style={soft}>
              <th className="pr-2" />
              {p.options.map((o) => (
                <th key={o} className="px-2 pb-1 font-bold">
                  {o.split(' ')[0]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {p.options.map((o, i) => (
              <tr key={o} className="border-t" style={{ borderColor: LINE }}>
                <th className="py-1 pr-2 text-left font-bold">{o.split(' ')[0]}</th>
                {p.options.map((_, j) => (
                  <td key={j} className="px-2 py-1 font-mono" style={i === j ? soft : { fontWeight: w[i][j] > w[j][i] ? 700 : 400, color: w[i][j] > w[j][i] ? GOOD : 'var(--ink-soft)' }}>
                    {i === j ? '—' : w[i][j]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-2">
        <Stat label="Voters" value={voters} />
        <Stat label="Options" value={m} />
        <Stat label="Different winners" value={distinct} tone={distinct > 1 ? WARN : GOOD} />
      </div>
      <p className="rounded-[var(--radius)] border p-3 text-xs leading-relaxed" style={{ borderColor: LINE, background: 'var(--paper-2)' }}>
        {p.note}
      </p>
    </Card>
  )
}

// ── airtime and group size ─────────────────────────────────────────────────

function AirtimeLab({ color }: { color: string }) {
  const [n, setN] = useState(16)
  const [minutes, setMinutes] = useState(60)
  const [facShare, setFacShare] = useState(25)
  const [turn, setTurn] = useState(45)
  const [k, setK] = useState(3)
  const [report, setReport] = useState(2)

  const participantMinutes = minutes * (1 - facShare / 100)
  const plenaryPerPerson = participantMinutes / n
  const turns = (participantMinutes * 60) / turn
  // A toy model: turns allocated at random, independently, to one of n people.
  const pSilent = Math.pow(1 - 1 / n, turns)
  const expectedSilent = n * pSilent

  const groups = Math.ceil(n / k)
  const reportTotal = groups * report
  const breakoutTime = Math.max(participantMinutes - reportTotal, 0)
  const breakoutPerPerson = breakoutTime / k
  const multiplier = plenaryPerPerson > 0 ? breakoutPerPerson / plenaryPerPerson : 0

  return (
    <Card
      title="Airtime and group size"
      color={color}
      note="The first number every facilitator should compute and almost nobody does. Airtime per person is session length divided by people, and it is brutal: a 60-minute meeting of 16 gives each person under three minutes even if the facilitator says nothing. The silence model is a deliberately simple one — turns handed out at random — and real rooms are worse, because attention is not random."
    >
      <div className="flex flex-wrap gap-3">
        <Slider label="People" min={3} max={60} step={1} value={n} show={String(n)} onChange={setN} />
        <Slider label="Session" min={15} max={180} step={5} value={minutes} show={`${minutes} min`} onChange={setMinutes} />
        <Slider label="Facilitator talks" min={0} max={60} step={5} value={facShare} show={`${facShare}%`} onChange={setFacShare} />
        <Slider label="Average turn" min={10} max={180} step={5} value={turn} show={`${turn} s`} onChange={setTurn} />
      </div>

      <div className="flex flex-wrap gap-2">
        <Stat label="Airtime each, plenary" value={`${plenaryPerPerson.toFixed(1)} min`} tone={plenaryPerPerson < 2 ? WARN : GOOD} />
        <Stat label="Turns available" value={turns.toFixed(0)} />
        <Stat label="Chance a given person never speaks" value={`${(pSilent * 100).toFixed(0)}%`} tone={pSilent > 0.2 ? WARN : undefined} />
        <Stat label="Expected silent people" value={expectedSilent.toFixed(1)} tone={expectedSilent >= 1 ? WARN : GOOD} />
      </div>

      <p className="text-xs font-bold uppercase tracking-wide" style={soft}>
        Break it into small groups instead
      </p>
      <div className="flex flex-wrap gap-3">
        <Slider label="Group size" min={2} max={8} step={1} value={k} show={String(k)} onChange={setK} />
        <Slider label="Report-back per group" min={0} max={6} step={1} value={report} show={`${report} min`} onChange={setReport} />
      </div>
      <div className="flex flex-wrap gap-2">
        <Stat label="Groups" value={groups} />
        <Stat label="Report-backs cost" value={`${reportTotal} min`} tone={reportTotal > participantMinutes * 0.4 ? WARN : undefined} />
        <Stat label="Airtime each, in groups" value={`${breakoutPerPerson.toFixed(1)} min`} tone={GOOD} />
        <Stat label="Airtime multiplier" value={`×${multiplier.toFixed(1)}`} tone={color} />
      </div>

      <svg viewBox="0 0 640 120" className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: LINE, background: 'var(--surface)' }} role="img" aria-label="Airtime per person, plenary against small groups">
        {([
          ['Plenary', plenaryPerPerson, '#3b6fd8', 24],
          [`Groups of ${k}`, breakoutPerPerson, '#2f9e6e', 70],
        ] as const).map(([label, v, tone, y]) => {
          const scale = Math.max(plenaryPerPerson, breakoutPerPerson, 1)
          return (
            <g key={label}>
              <text x={10} y={y - 6} fontSize={11} fontWeight={700} fill="var(--ink-soft)">
                {label}
              </text>
              <rect x={10} y={y} width={Math.max((v / scale) * 560, 2)} height={24} rx={4} fill={tone} opacity={0.85} />
              <text x={Math.max((v / scale) * 560, 2) + 18} y={y + 17} fontSize={12} fontWeight={700} fill="var(--ink)">
                {v.toFixed(1)} min each
              </text>
            </g>
          )
        })}
      </svg>

      <p className="text-xs leading-relaxed" style={soft}>
        The report-back is the hidden cost: {groups} groups at {report} minutes each eats {reportTotal} of your {participantMinutes.toFixed(0)} participant minutes. Past about four groups, harvest to a shared surface instead of round-robin reporting, or sample two groups and ask the rest only for what nobody has said.
      </p>
    </Card>
  )
}

// ── station rotations ──────────────────────────────────────────────────────

function RotationLab({ color }: { color: string }) {
  const [id, setId] = useState(ROTATIONS[0].id)
  const base = ROTATIONS.find((r) => r.id === id)!
  const [stations, setStations] = useState(base.stations)
  const [rounds, setRounds] = useState(base.rounds)
  const [roundMin, setRoundMin] = useState(base.roundMinutes)
  const [move, setMove] = useState(base.moveMinutes)
  const [people, setPeople] = useState(base.people)

  const total = rounds * roundMin + Math.max(rounds - 1, 0) * move
  const perStation = people / stations
  const coverage = Math.min(rounds / stations, 1)
  const groupSize = Math.ceil(perStation)
  // With good mixing, each round introduces up to groupSize - 1 new people.
  const metUpperBound = Math.min(rounds * (groupSize - 1), people - 1)
  const stationMinutes = rounds * roundMin
  const movementCost = Math.max(rounds - 1, 0) * move
  const fullCoverage = rounds >= stations

  return (
    <Card
      title="Station rotation planner"
      color={color}
      note="World Café, gallery walks, carousels and speed consulting are all the same arithmetic: rounds times round length, plus the movement nobody budgets for. The two numbers that decide whether the design works are coverage (what fraction of stations each person sees) and how many distinct people they end up talking to."
    >
      <div className="flex flex-wrap gap-3">
        <Select
          label="Preset"
          value={id}
          onChange={(v) => {
            const r = ROTATIONS.find((x) => x.id === v)!
            setId(v)
            setStations(r.stations)
            setRounds(r.rounds)
            setRoundMin(r.roundMinutes)
            setMove(r.moveMinutes)
            setPeople(r.people)
          }}
          options={ROTATIONS.map((r) => [r.id, r.name])}
        />
        <Slider label="People" min={6} max={120} step={1} value={people} show={String(people)} onChange={setPeople} />
        <Slider label="Stations" min={2} max={16} step={1} value={stations} show={String(stations)} onChange={setStations} />
        <Slider label="Rounds" min={1} max={16} step={1} value={rounds} show={String(rounds)} onChange={setRounds} />
        <Slider label="Round length" min={3} max={25} step={1} value={roundMin} show={`${roundMin} min`} onChange={setRoundMin} />
        <Slider label="Movement between rounds" min={0} max={6} step={1} value={move} show={`${move} min`} onChange={setMove} />
      </div>

      <div className="flex flex-wrap gap-2">
        <Stat label="Total time" value={`${total} min`} tone={total > 120 ? WARN : undefined} />
        <Stat label="At stations" value={`${stationMinutes} min`} />
        <Stat label="Lost to movement" value={`${movementCost} min`} tone={movementCost > stationMinutes * 0.2 ? WARN : undefined} />
        <Stat label="People per station" value={perStation.toFixed(1)} tone={perStation > 6 ? WARN : GOOD} />
        <Stat label="Coverage" value={`${Math.round(coverage * 100)}%`} tone={fullCoverage ? GOOD : undefined} />
        <Stat label="Distinct others met, at most" value={metUpperBound} />
      </div>

      <div className="flex flex-col gap-1">
        {Array.from({ length: rounds }, (_, r) => (
          <div key={r} className="flex items-center gap-2">
            <span className="w-16 shrink-0 text-xs font-bold" style={soft}>
              Round {r + 1}
            </span>
            <span className="h-5 rounded" style={{ width: `${(roundMin / (roundMin + move)) * 70}%`, background: color, opacity: 0.85 }} />
            {move > 0 && r < rounds - 1 && <span className="h-5 rounded" style={{ width: `${(move / (roundMin + move)) * 70}%`, background: 'var(--paper-2)', border: `1px solid ${LINE}` }} />}
            <span className="font-mono text-[11px]" style={soft}>
              {roundMin}′{move > 0 && r < rounds - 1 ? ` +${move}′ move` : ''}
            </span>
          </div>
        ))}
      </div>

      <p className="text-xs leading-relaxed" style={soft}>
        {fullCoverage
          ? `Everyone sees every station: ${rounds} rounds for ${stations} stations. The price is ${total} minutes before any harvest or debrief, and the debrief is where the learning actually happens — budget at least a fifth of the total for it.`
          : `Each person sees ${rounds} of ${stations} stations (${Math.round(coverage * 100)}%). That is the café design, and it works only if you harvest centrally afterwards: nobody in the room has the whole picture, so the facilitator has to build it in front of them.`}
      </p>
      <p className="rounded-[var(--radius)] border p-3 text-xs leading-relaxed" style={{ borderColor: LINE, background: 'var(--paper-2)' }}>
        {base.note}
      </p>
    </Card>
  )
}

// ── pre/post measurement ──────────────────────────────────────────────────

function GainLab({ color }: { color: string }) {
  const [pre, setPre] = useState(3.1)
  const [post, setPost] = useState(3.9)
  const [sd, setSd] = useState(0.9)
  const [n, setN] = useState(28)
  const [r, setR] = useState(0.6)
  const [max, setMax] = useState(5)

  const diff = post - pre
  const d = diff / sd
  const dfCorr = 1 - 3 / (4 * (n - 1) - 1)
  const g = d * dfCorr
  const sdDiff = sd * Math.sqrt(2 * (1 - r))
  const dz = diff / sdDiff
  const seDz = Math.sqrt(1 / n + (dz * dz) / (2 * n))
  const lo = dz - 1.96 * seDz
  const hi = dz + 1.96 * seDz
  const t = dz * Math.sqrt(n)
  const p = 2 * (1 - Phi(Math.abs(t)))
  const normalisedGain = max > pre ? diff / (max - pre) : 0
  const ceiling = pre / max

  return (
    <Card
      title="Pre/post measurement"
      color={color}
      note="A programme evaluation is arithmetic plus three caveats. The arithmetic is here; the caveats are response-shift bias (people re-interpret the scale as they learn), ceiling effects, and the fact that a pre/post design without a comparison group cannot separate your programme from everything else that happened that week."
    >
      <div className="flex flex-wrap gap-3">
        <Slider label="Pre mean" min={1} max={max} step={0.1} value={pre} show={pre.toFixed(1)} onChange={setPre} />
        <Slider label="Post mean" min={1} max={max} step={0.1} value={post} show={post.toFixed(1)} onChange={setPost} />
        <Slider label="SD" min={0.2} max={2} step={0.05} value={sd} show={sd.toFixed(2)} onChange={setSd} />
        <Slider label="Participants" min={6} max={200} step={1} value={n} show={String(n)} onChange={setN} />
        <Slider label="Pre–post correlation" min={0} max={0.95} step={0.05} value={r} show={r.toFixed(2)} onChange={setR} />
        <Slider label="Scale maximum" min={4} max={10} step={1} value={max} show={String(max)} onChange={setMax} />
      </div>

      <div className="flex flex-wrap gap-2">
        <Stat label="Raw change" value={diff.toFixed(2)} />
        <Stat label="Cohen's d" value={d.toFixed(2)} tone={Math.abs(d) >= 0.5 ? GOOD : undefined} />
        <Stat label="Hedges' g" value={g.toFixed(2)} />
        <Stat label="d (paired, dz)" value={dz.toFixed(2)} />
        <Stat label="95% CI on dz" value={`${lo.toFixed(2)} to ${hi.toFixed(2)}`} tone={lo > 0 ? GOOD : WARN} />
        <Stat label="p (two-tailed)" value={p < 0.001 ? '<0.001' : p.toFixed(3)} />
        <Stat label="Normalised gain" value={`${(normalisedGain * 100).toFixed(0)}%`} />
        <Stat label="Pre as share of scale" value={`${(ceiling * 100).toFixed(0)}%`} tone={ceiling > 0.8 ? WARN : undefined} />
      </div>

      <svg viewBox="0 0 640 110" className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: LINE, background: 'var(--surface)' }} role="img" aria-label="Pre and post means on the scale">
        {([
          ['Pre', pre, '#3b6fd8', 26],
          ['Post', post, '#2f9e6e', 68],
        ] as const).map(([label, v, tone, y]) => (
          <g key={label}>
            <text x={10} y={y + 16} fontSize={12} fontWeight={700} fill="var(--ink-soft)">
              {label}
            </text>
            <rect x={48} y={y} width={560} height={22} rx={4} fill="var(--paper-2)" />
            <rect x={48} y={y} width={Math.max(((v - 1) / (max - 1)) * 560, 2)} height={22} rx={4} fill={tone} opacity={0.85} />
            <text x={Math.max(((v - 1) / (max - 1)) * 560, 2) + 54} y={y + 16} fontSize={12} fontWeight={700} fill="var(--ink)">
              {v.toFixed(1)}
            </text>
          </g>
        ))}
      </svg>

      <ul className="ml-4 list-disc text-xs leading-relaxed" style={soft}>
        <li>
          <strong>Ceiling:</strong> the pre mean sits at {(ceiling * 100).toFixed(0)}% of the scale, so the most the group can move is {(max - pre).toFixed(1)} points.{ceiling > 0.8 ? ' Above about 80% a flat result means your instrument has run out of room, not that nothing happened.' : ''}
        </li>
        <li>
          <strong>Response shift:</strong> participants who learn what the construct means often rate their *before* lower afterwards. A retrospective pre-test — asking at the end about both then and now — usually shows a larger gain than a true pre-test, and the honest reporting is to give both.
        </li>
        <li>
          <strong>No comparison group:</strong> dz of {dz.toFixed(2)} is the change in this group, not the effect of your programme. Without a comparison, maturation, the weather and the term’s other events are all inside your number.
        </li>
        <li>
          <strong>Normalised gain</strong> of {(normalisedGain * 100).toFixed(0)}% is the share of the available headroom closed, which is the fairer figure when groups start at different places.
        </li>
      </ul>
    </Card>
  )
}

// ── critical path ──────────────────────────────────────────────────────────

type Computed = Task & { es: number; ef: number; ls: number; lf: number; float: number; crit: boolean; te: number; variance: number }

function cpm(tasks: Task[], overrides: Record<string, number>): { rows: Computed[]; duration: number; path: string[] } {
  const dur = (t: Task) => overrides[t.id] ?? t.days
  // Topological order: repeatedly take tasks whose predecessors are all placed.
  const order: Task[] = []
  const placed = new Set<string>()
  while (order.length < tasks.length) {
    const next = tasks.find((t) => !placed.has(t.id) && t.pre.every((p) => placed.has(p)))
    if (!next) break
    order.push(next)
    placed.add(next.id)
  }
  const es: Record<string, number> = {}
  const ef: Record<string, number> = {}
  for (const t of order) {
    es[t.id] = t.pre.length ? Math.max(...t.pre.map((p) => ef[p] ?? 0)) : 0
    ef[t.id] = es[t.id] + dur(t)
  }
  const duration = Math.max(...Object.values(ef), 0)
  const ls: Record<string, number> = {}
  const lf: Record<string, number> = {}
  for (const t of [...order].reverse()) {
    const successors = tasks.filter((s) => s.pre.includes(t.id))
    lf[t.id] = successors.length ? Math.min(...successors.map((s) => ls[s.id])) : duration
    ls[t.id] = lf[t.id] - dur(t)
  }
  const rows: Computed[] = order.map((t) => {
    const o = t.opt ?? dur(t) * 0.7
    const pe = t.pess ?? dur(t) * 1.6
    const te = (o + 4 * dur(t) + pe) / 6
    return {
      ...t,
      days: dur(t),
      es: es[t.id],
      ef: ef[t.id],
      ls: ls[t.id],
      lf: lf[t.id],
      float: ls[t.id] - es[t.id],
      crit: ls[t.id] - es[t.id] <= 0.0001,
      te,
      variance: ((pe - o) / 6) ** 2,
    }
  })
  const path = rows.filter((r) => r.crit).map((r) => r.id)
  return { rows, duration, path }
}

function CriticalPathLab({ color }: { color: string }) {
  const [id, setId] = useState(NETWORKS[0].id)
  const net: Network = NETWORKS.find((n) => n.id === id)!
  const [taskId, setTaskId] = useState(net.tasks[0].id)
  const [delta, setDelta] = useState(0)
  const [target, setTarget] = useState(0)

  const overrides = useMemo(() => {
    const t = net.tasks.find((x) => x.id === taskId)
    return t ? { [taskId]: Math.max(1, t.days + delta) } : {}
  }, [net, taskId, delta])

  const baseline = useMemo(() => cpm(net.tasks, {}), [net])
  const now = useMemo(() => cpm(net.tasks, overrides), [net, overrides])
  const pathChanged = baseline.path.join() !== now.path.join()

  const critRows = now.rows.filter((r) => r.crit)
  const pertDuration = critRows.reduce((n, r) => n + r.te, 0)
  const pertVar = critRows.reduce((n, r) => n + r.variance, 0)
  const pertSd = Math.sqrt(pertVar)
  const deadline = target || Math.ceil(pertDuration)
  const z = pertSd > 0 ? (deadline - pertDuration) / pertSd : 0
  const pOnTime = Phi(z)
  const maxEf = Math.max(...now.rows.map((r) => r.ef), 1)

  return (
    <Card
      title="Critical path and PERT"
      color={color}
      note="The critical path is the longest chain of dependent tasks, and it is the only chain where a day lost is a day lost overall. Everything else has float. Change one duration and watch whether the path moves: when it does, the thing you were worrying about last week has stopped being the thing that matters."
    >
      <div className="flex flex-wrap gap-3">
        <Select
          label="Programme"
          value={id}
          onChange={(v) => {
            const nx = NETWORKS.find((x) => x.id === v)!
            setId(v)
            setTaskId(nx.tasks[0].id)
            setDelta(0)
            setTarget(0)
          }}
          options={NETWORKS.map((n) => [n.id, n.name])}
        />
        <Select label="Change a task" value={taskId} onChange={(v) => setTaskId(v)} options={net.tasks.map((t) => [t.id, `${t.id}. ${t.name}`])} />
        <Slider label="Days added or saved" min={-10} max={30} step={1} value={delta} show={delta > 0 ? `+${delta}` : String(delta)} onChange={setDelta} />
      </div>

      <div className="flex flex-wrap gap-2">
        <Stat label="Duration" value={`${now.duration} days`} tone={now.duration > baseline.duration ? WARN : now.duration < baseline.duration ? GOOD : undefined} />
        <Stat label="Baseline" value={`${baseline.duration} days`} />
        <Stat label="Critical path" value={now.path.join(' → ')} tone={color} />
        <Stat label="Tasks with float" value={now.rows.filter((r) => !r.crit).length} />
      </div>

      {pathChanged && (
        <p className="text-xs font-bold" style={{ color: WARN }}>
          The critical path moved: it was {baseline.path.join(' → ')} and is now {now.path.join(' → ')}. This is the single most useful thing a schedule tells you, and it is invisible on a wall planner.
        </p>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr style={soft}>
              <th className="pb-1 text-xs font-bold uppercase">Task</th>
              <th className="pb-1 text-xs font-bold uppercase">Pre</th>
              <th className="pb-1 text-xs font-bold uppercase">Days</th>
              <th className="pb-1 text-xs font-bold uppercase">ES</th>
              <th className="pb-1 text-xs font-bold uppercase">EF</th>
              <th className="pb-1 text-xs font-bold uppercase">LS</th>
              <th className="pb-1 text-xs font-bold uppercase">LF</th>
              <th className="pb-1 text-xs font-bold uppercase">Float</th>
            </tr>
          </thead>
          <tbody>
            {now.rows.map((r) => (
              <tr key={r.id} className="border-t" style={{ borderColor: LINE, background: r.crit ? `color-mix(in srgb, ${color} 10%, transparent)` : undefined }}>
                <td className="py-1.5">
                  <span className="font-bold">{r.id}. </span>
                  {r.name}
                </td>
                <td className="py-1.5 font-mono text-xs" style={soft}>
                  {r.pre.join(',') || '—'}
                </td>
                <td className="py-1.5 font-mono text-xs font-bold">{r.days}</td>
                <td className="py-1.5 font-mono text-xs">{r.es}</td>
                <td className="py-1.5 font-mono text-xs">{r.ef}</td>
                <td className="py-1.5 font-mono text-xs">{r.ls}</td>
                <td className="py-1.5 font-mono text-xs">{r.lf}</td>
                <td className="py-1.5 font-mono text-xs font-bold" style={{ color: r.crit ? WARN : GOOD }}>
                  {r.float}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-1">
        {now.rows.map((r) => (
          <div key={r.id} className="flex items-center gap-2">
            <span className="w-6 shrink-0 font-mono text-xs font-bold">{r.id}</span>
            <div className="relative h-5 flex-1 rounded" style={{ background: 'var(--paper-2)' }}>
              <div
                className="absolute h-5 rounded"
                style={{ left: `${(r.es / maxEf) * 100}%`, width: `${Math.max((r.days / maxEf) * 100, 1)}%`, background: r.crit ? WARN : color, opacity: r.crit ? 0.9 : 0.6 }}
              />
              {r.float > 0 && (
                <div
                  className="absolute h-5 rounded border border-dashed"
                  style={{ left: `${(r.ef / maxEf) * 100}%`, width: `${Math.max((r.float / maxEf) * 100, 0.5)}%`, borderColor: GOOD }}
                />
              )}
            </div>
            <span className="w-14 shrink-0 font-mono text-[11px]" style={soft}>
              {r.es}–{r.ef}
            </span>
          </div>
        ))}
      </div>
      <p className="text-[11px]" style={soft}>
        Solid bars are the work, dashed outlines are float. A task with float can slip by that many days before it becomes your problem.
      </p>

      <p className="text-xs font-bold uppercase tracking-wide" style={soft}>
        PERT: three-point estimates on the critical path
      </p>
      <div className="flex flex-wrap gap-3">
        <Slider label="Deadline" min={Math.ceil(pertDuration * 0.6)} max={Math.ceil(pertDuration * 1.6)} step={1} value={deadline} show={`${deadline} days`} onChange={setTarget} />
      </div>
      <div className="flex flex-wrap gap-2">
        <Stat label="Expected duration" value={`${pertDuration.toFixed(1)} days`} />
        <Stat label="Standard deviation" value={`${pertSd.toFixed(1)} days`} />
        <Stat label={`Chance of finishing by day ${deadline}`} value={`${(pOnTime * 100).toFixed(0)}%`} tone={pOnTime > 0.8 ? GOOD : pOnTime < 0.5 ? WARN : undefined} />
        <Stat label="80% confident date" value={`${Math.ceil(pertDuration + 0.84 * pertSd)} days`} />
      </div>
      <p className="text-xs leading-relaxed" style={soft}>
        Expected duration uses the PERT weighting (optimistic + 4 × likely + pessimistic) ÷ 6 on each critical task, and the normal approximation assumes the critical tasks are independent. Both assumptions flatter you: real delays correlate, because the same missing person holds up three tasks at once.
      </p>
      <p className="rounded-[var(--radius)] border p-3 text-xs leading-relaxed" style={{ borderColor: LINE, background: 'var(--paper-2)' }}>
        {net.note}
      </p>
    </Card>
  )
}
