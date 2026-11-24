/**
 * Debate labs.
 *
 * Seven tools for the debate shelf. They exist because the things that decide
 * rounds are structural rather than verbal: which part of an argument is
 * missing, which axis of weighing is actually deciding the clash, what a judge
 * sees on the flow when a point goes unanswered, and how much time a format
 * gives you to do any of it.
 */
import { useEffect, useMemo, useRef, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { Btn, Card, Pills, Select, Slider, Stat, soft } from './kit'
import {
  ARG_MAPS,
  ARGUMENTS,
  BAYES_CASES,
  FALLACIES,
  FALLACY_FAMILIES,
  FLOW,
  FORMATS,
  MOTION_BANK,
  MOTION_TYPES,
  WEIGH_AXES,
  WEIGH_PRESETS,
} from '../../lib/debate/data'
import type { ArgMap, Fallacy, MapNode } from '../../lib/debate/data'

type DebateBlockType = Extract<Block, { t: 'debate-lab' }>

const LINE = 'var(--line)'
const PROP = '#2f9e6e'
const OPP = '#d9534f'

export default function DebateBlock({ block, color }: { block: DebateBlockType; color: string }) {
  switch (block.viz) {
    case 'argument':
      return <ArgumentLab color={color} />
    case 'weighing':
      return <WeighingLab color={color} />
    case 'formats':
      return <FormatsLab color={color} />
    case 'flow':
      return <FlowLab color={color} />
    case 'timer':
      return <TimerLab color={color} />
    case 'fallacy':
      return <FallacyLab color={color} />
    case 'motion':
      return <MotionLab color={color} />
    case 'bayes':
      return <BayesLab color={color} />
    case 'coverage':
      return <CoverageLab color={color} />
    case 'map':
      return <MapLab color={color} />
  }
}

// ── the argument builder ───────────────────────────────────────────────────

type Part = 'claim' | 'mechanism' | 'evidence' | 'impact' | 'weighing'

const PART_NAMES: [Part, string][] = [
  ['claim', 'Claim'],
  ['mechanism', 'Mechanism'],
  ['evidence', 'Evidence'],
  ['impact', 'Impact'],
  ['weighing', 'Weighing'],
]

function ArgumentLab({ color }: { color: string }) {
  const [id, setId] = useState(ARGUMENTS[0].id)
  const [on, setOn] = useState<Record<Part, boolean>>({ claim: true, mechanism: true, evidence: true, impact: true, weighing: true })
  const arg = ARGUMENTS.find((a) => a.id === id)!
  const missing = PART_NAMES.filter(([p]) => !on[p]).map(([p]) => p)

  return (
    <Card
      title="The argument builder"
      color={color}
      note="Switch a part off and read what the judge writes. Most lost arguments are not wrong, they are incomplete: a claim with no mechanism is an assertion, a mechanism with no impact is a lecture, and an impact with no weighing leaves the decision to the judge."
    >
      <Select label="Argument" value={id} onChange={setId} options={ARGUMENTS.map((a) => [a.id, `${a.side}: ${a.label}`])} />
      <p className="text-xs" style={soft}>
        <strong>Motion:</strong> {arg.motion}
      </p>

      <div className="flex flex-wrap gap-1.5" role="group" aria-label="Parts of the argument">
        {PART_NAMES.map(([p, name]) => (
          <Btn key={p} active={on[p]} onClick={() => setOn((s) => ({ ...s, [p]: !s[p] }))}>
            {on[p] ? name : `${name} off`}
          </Btn>
        ))}
      </div>

      <div className="flex flex-col gap-2 rounded-[var(--radius)] border p-3" style={{ borderColor: LINE, background: 'var(--paper-2)' }}>
        {on.claim ? (
          <p className="text-sm font-bold">{arg.claim}</p>
        ) : (
          <p className="text-sm italic" style={soft}>
            [no claim: the judge does not know what you want them to believe]
          </p>
        )}
        {on.mechanism && (
          <ol className="ml-4 list-decimal text-sm leading-relaxed">
            {arg.mechanism.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ol>
        )}
        {on.evidence && (
          <p className="text-sm leading-relaxed">
            <span className="text-[11px] font-bold uppercase tracking-wide" style={soft}>
              Evidence{' '}
            </span>
            {arg.evidence}
          </p>
        )}
        {on.impact && (
          <p className="text-sm leading-relaxed">
            <span className="text-[11px] font-bold uppercase tracking-wide" style={soft}>
              So what{' '}
            </span>
            {arg.impact}
          </p>
        )}
        {on.weighing && (
          <p className="text-sm leading-relaxed" style={{ color }}>
            <span className="text-[11px] font-bold uppercase tracking-wide">Against them </span>
            {arg.weighing}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <Stat label="Parts present" value={`${5 - missing.length} / 5`} tone={missing.length === 0 ? PROP : missing.length > 2 ? OPP : undefined} />
        <Stat label="Status" value={missing.length === 0 ? 'Complete' : missing.includes('claim') ? 'No claim' : missing.includes('mechanism') ? 'Assertion' : 'Incomplete'} />
      </div>

      {missing.length > 0 && (
        <div className="rounded-[var(--radius)] border p-3" style={{ borderColor: LINE }}>
          <p className="text-[11px] font-bold uppercase tracking-wide" style={soft}>
            On the ballot
          </p>
          <ul className="mt-1 ml-4 list-disc text-sm leading-relaxed">
            {missing.map((p) => (
              <li key={p}>{arg.judge[p]}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  )
}

// ── weighing ───────────────────────────────────────────────────────────────

type Side = { label: string; magnitude: number; probability: number; scope: number; time: number; reversible: number }

/**
 * An illustrative score, not a formula any judge uses: magnitude scaled by how
 * likely the chain is to run, how many people it reaches and how soon, then
 * raised for a harm that cannot be undone. It is here to make the trade-offs
 * visible and to show which axis is carrying the decision.
 */
function weigh(s: Side) {
  const base = s.magnitude * (s.probability / 10) * (s.scope / 10) * (0.4 + (0.6 * s.time) / 10)
  return base * (1 + (10 - s.reversible) / 10)
}

function WeighingLab({ color }: { color: string }) {
  const [presetId, setPresetId] = useState(WEIGH_PRESETS[0].id)
  const preset = WEIGH_PRESETS.find((p) => p.id === presetId)!
  return (
    <WeighingPanel
      // Remounting on the preset resets both columns to that debate's starting
      // values without an effect.
      key={presetId}
      preset={preset}
      presetId={presetId}
      setPresetId={setPresetId}
      color={color}
    />
  )
}

function WeighingPanel({
  preset,
  presetId,
  setPresetId,
  color,
}: {
  preset: (typeof WEIGH_PRESETS)[number]
  presetId: string
  setPresetId: (v: string) => void
  color: string
}) {
  const [prop, setProp] = useState<Side>(preset.prop)
  const [opp, setOpp] = useState<Side>(preset.opp)

  const pv = weigh(prop)
  const ov = weigh(opp)
  const top = Math.max(pv, ov, 1)
  const lead = pv >= ov ? 'Proposition' : 'Opposition'
  const ratio = Math.max(pv, ov) / Math.max(Math.min(pv, ov), 0.01)

  // Which single axis is doing most of the work: the one whose gap, held
  // against an otherwise equal pair, moves the comparison furthest.
  const decisive = useMemo(() => {
    let best = WEIGH_AXES[0]
    let bestGap = -1
    for (const a of WEIGH_AXES) {
      const flipped = weigh({ ...prop, [a.key]: opp[a.key] } as Side)
      const gap = Math.abs(flipped - pv)
      if (gap > bestGap) {
        bestGap = gap
        best = a
      }
    }
    return best
  }, [prop, opp, pv])

  return (
    <Card
      title="The weighing machine"
      color={color}
      note="Judges do not add impacts, they compare them. The number here is illustrative only; what is real is the shape of the comparison, and that whoever names the deciding axis out loud usually wins the clash."
    >
      <Select label="Debate" value={presetId} onChange={setPresetId} options={WEIGH_PRESETS.map((p) => [p.id, p.name])} />

      <div className="grid gap-3 sm:grid-cols-2">
        {([
          ['Proposition harm avoided', prop, setProp, PROP],
          ['Opposition harm caused', opp, setOpp, OPP],
        ] as const).map(([title, side, set, tone]) => (
          <div key={title} className="flex flex-col gap-2 rounded-[var(--radius)] border p-3" style={{ borderColor: LINE }}>
            <p className="text-xs font-bold uppercase tracking-wide" style={{ color: tone }}>
              {title}
            </p>
            <p className="text-sm font-bold">{side.label}</p>
            {WEIGH_AXES.map((a) => (
              <Slider
                key={a.key}
                label={a.name}
                min={1}
                max={10}
                step={1}
                value={side[a.key]}
                show={String(side[a.key])}
                onChange={(v) => set({ ...side, [a.key]: v })}
              />
            ))}
          </div>
        ))}
      </div>

      <svg viewBox="0 0 640 110" className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: LINE, background: 'var(--surface)' }} role="img" aria-label="Weighed impacts">
        {([
          [prop, pv, PROP, 18],
          [opp, ov, OPP, 62],
        ] as const).map(([side, v, tone, y]) => (
          <g key={side.label}>
            <rect x={10} y={y} width={Math.max((v / top) * 560, 2)} height={28} rx={4} fill={tone} opacity={0.85} />
            <text x={14} y={y + 19} fontSize={12} fontWeight={700} fill="var(--surface)" paintOrder="stroke">
              {v.toFixed(1)}
            </text>
            <text x={Math.max((v / top) * 560, 2) + 18} y={y + 19} fontSize={11.5} fill="var(--ink-soft)">
              {side.label.length > 46 ? `${side.label.slice(0, 45)}…` : side.label}
            </text>
          </g>
        ))}
      </svg>

      <div className="flex flex-wrap gap-2">
        <Stat label="Ahead" value={lead} tone={lead === 'Proposition' ? PROP : OPP} />
        <Stat label="By a factor of" value={ratio.toFixed(2)} />
        <Stat label="Deciding axis" value={decisive.name} />
      </div>
      <p className="text-xs leading-relaxed" style={soft}>
        <strong>{decisive.name}:</strong> {decisive.ask} Equalise it and the comparison moves further than it does on any other axis — so that is the sentence to say in the summary.
      </p>
      <p className="rounded-[var(--radius)] border p-3 text-xs leading-relaxed" style={{ borderColor: LINE, background: 'var(--paper-2)' }}>
        {preset.note}
      </p>
    </Card>
  )
}

// ── formats ────────────────────────────────────────────────────────────────

function FormatsLab({ color }: { color: string }) {
  const [mode, setMode] = useState<'one' | 'all'>('one')
  const [id, setId] = useState(FORMATS[0].id)
  const f = FORMATS.find((x) => x.id === id)!
  const total = f.speeches.reduce((n, s) => n + s.minutes, 0)
  const longest = Math.max(...f.speeches.map((s) => s.minutes))

  return (
    <Card
      title="Formats side by side"
      color={color}
      note="The format is not trivia: it decides how many minutes you get to answer a point, whether anyone can interrupt you, and whether the last speech may add anything new. Times are the published rules of the major circuits; local leagues vary, so check the invitation."
    >
      <Pills label="View" value={mode} options={[['one', 'One format'], ['all', 'Compare all']]} onChange={setMode} />

      {mode === 'one' ? (
        <>
          <Select label="Format" value={id} onChange={setId} options={FORMATS.map((x) => [x.id, `${x.name} (${x.short})`])} />
          <div className="flex flex-wrap gap-2">
            <Stat label="Teams" value={f.teams} />
            <Stat label="Speakers each" value={f.perTeam} />
            <Stat label="Speeches" value={f.speeches.length} />
            <Stat label="Speaking time" value={`${total} min`} />
          </div>
          <p className="text-xs" style={soft}>
            <strong>Prep:</strong> {f.prep}
          </p>

          <div className="flex flex-col gap-1">
            {f.speeches.map((s, i) => (
              <div key={`${s.name}-${i}`} className="flex items-center gap-2">
                <span className="w-7 shrink-0 text-right font-mono text-[11px]" style={soft}>
                  {s.minutes}′
                </span>
                <span
                  className="h-6 shrink-0 rounded"
                  style={{ width: `${(s.minutes / longest) * 38}%`, background: s.side === 'prop' ? PROP : OPP, opacity: s.noNewMatter ? 0.55 : 0.9 }}
                />
                <span className="min-w-0 text-xs">
                  <strong>{s.name}</strong>
                  <span style={soft}>
                    {' '}
                    — {s.role}
                    {s.questions === 'cx' ? ' Cross-examination follows.' : ''}
                    {s.noNewMatter ? ' No new matter.' : ''}
                  </span>
                </span>
              </div>
            ))}
          </div>
          <p className="text-[11px]" style={soft}>
            Green is the side arguing for the motion, red against; faded bars are speeches that may not introduce new arguments.
          </p>

          <dl className="grid gap-2 text-xs sm:grid-cols-2">
            {([
              ['Where it is used', f.where],
              ['How the win is decided', f.judging],
              ['Rewards', f.rewards],
              ['Punishes', f.punishes],
            ] as const).map(([k, v]) => (
              <div key={k} className="rounded-[var(--radius)] border p-2.5" style={{ borderColor: LINE }}>
                <dt className="font-bold" style={{ color }}>
                  {k}
                </dt>
                <dd className="mt-0.5 leading-relaxed" style={soft}>
                  {v}
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-xs leading-relaxed" style={soft}>
            {f.note}
          </p>
        </>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr style={soft}>
                <th className="pb-1 text-xs font-bold uppercase">Format</th>
                <th className="pb-1 text-xs font-bold uppercase">Teams</th>
                <th className="pb-1 text-xs font-bold uppercase">Per team</th>
                <th className="pb-1 text-xs font-bold uppercase">Main speech</th>
                <th className="pb-1 text-xs font-bold uppercase">Total</th>
                <th className="pb-1 text-xs font-bold uppercase">Questions</th>
              </tr>
            </thead>
            <tbody>
              {FORMATS.map((x) => {
                const main = Math.max(...x.speeches.map((s) => s.minutes))
                const q = x.speeches.some((s) => s.questions === 'cx') ? 'Cross-examination' : x.speeches.some((s) => s.questions === 'poi') ? 'Points of information' : 'None'
                return (
                  <tr key={x.id} className="border-t" style={{ borderColor: LINE }}>
                    <td className="py-1.5 font-bold">{x.short}</td>
                    <td className="py-1.5">{x.teams}</td>
                    <td className="py-1.5">{x.perTeam}</td>
                    <td className="py-1.5">{main} min</td>
                    <td className="py-1.5">{x.speeches.reduce((n, s) => n + s.minutes, 0)} min</td>
                    <td className="py-1.5 text-xs" style={soft}>
                      {q}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  )
}

// ── the flow sheet ─────────────────────────────────────────────────────────

const MOVE_LABEL: Record<string, string> = {
  claim: 'Claim made',
  rebut: 'Rebutted',
  rebuild: 'Rebuilt',
  extend: 'Extended',
  weigh: 'Weighed',
  drop: 'Dropped',
}

function FlowLab({ color }: { color: string }) {
  const [track, setTrack] = useState(0)
  const [step, setStep] = useState(FLOW[0].moves.length)
  const t = FLOW[track]
  const shown = t.moves.slice(0, step)
  const last = shown[shown.length - 1]

  return (
    <Card
      title="The flow sheet"
      color={color}
      note="A judge keeps one column per speech and one row per argument. The verdict on a row is not whether the argument is true, it is what happened to it: answered, rebuilt, weighed, or dropped. Step through and watch an argument survive, or quietly die."
    >
      <Select
        label="Argument"
        value={String(track)}
        onChange={(v) => {
          const i = Number(v)
          setTrack(i)
          setStep(FLOW[i].moves.length)
        }}
        options={FLOW.map((x, i) => [String(i), x.argument])}
      />
      <div className="flex flex-wrap items-center gap-1.5">
        <Btn onClick={() => setStep(1)} disabled={step <= 1}>
          Start
        </Btn>
        <Btn onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step <= 1}>
          Back
        </Btn>
        <Btn onClick={() => setStep((s) => Math.min(t.moves.length, s + 1))} disabled={step >= t.moves.length}>
          Next speech
        </Btn>
        <Btn onClick={() => setStep(t.moves.length)} disabled={step >= t.moves.length}>
          End of debate
        </Btn>
        <span className="font-mono text-xs" style={soft}>
          {step} / {t.moves.length}
        </span>
      </div>

      <div className="overflow-x-auto">
        <div className="flex min-w-max gap-2">
          {t.moves.map((m, i) => {
            const live = i < step
            const tone = m.side === 'prop' ? PROP : OPP
            return (
              <div
                key={`${m.speech}-${i}`}
                className="flex w-52 flex-col gap-1.5 rounded-[var(--radius)] border p-2.5"
                style={{ borderColor: live ? tone : LINE, opacity: live ? 1 : 0.35, background: live ? 'var(--surface)' : 'transparent' }}
              >
                <p className="text-[11px] font-bold uppercase tracking-wide" style={{ color: tone }}>
                  {m.speech}
                </p>
                <p className="text-[11px] font-bold" style={m.move === 'drop' ? { color: OPP } : undefined}>
                  {MOVE_LABEL[m.move]}
                </p>
                <p className="text-xs leading-relaxed">{m.text}</p>
                {live && (
                  <p className="border-t pt-1.5 text-[11px] italic leading-relaxed" style={{ borderColor: LINE, ...soft }}>
                    {m.note}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {last && (
        <p className="rounded-[var(--radius)] border p-3 text-xs leading-relaxed" style={{ borderColor: LINE, background: 'var(--paper-2)' }}>
          <strong style={{ color }}>Where the row stands: </strong>
          {last.move === 'drop'
            ? 'nobody answered the last version of this argument, so it goes to the side that spoke it last. Silence is a concession.'
            : last.move === 'weigh'
              ? 'both sides still have something here, and the comparison decides it. That is the sentence the summary speech needs.'
              : 'the argument is live and contested; the next speech on this row sets who owns it.'}
        </p>
      )}
    </Card>
  )
}

// ── the speech timer ───────────────────────────────────────────────────────

function beep(freq: number, ms = 200) {
  try {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const ctx = (beep as unknown as { ctx?: AudioContext }).ctx ?? new Ctx()
    ;(beep as unknown as { ctx?: AudioContext }).ctx = ctx
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    o.frequency.value = freq
    g.gain.setValueAtTime(0.2, ctx.currentTime)
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + ms / 1000)
    o.connect(g).connect(ctx.destination)
    o.start()
    o.stop(ctx.currentTime + ms / 1000)
  } catch {
    // no audio permitted; the timer still works visually
  }
}

const clock = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`

function TimerLab({ color }: { color: string }) {
  const [fid, setFid] = useState(FORMATS[0].id)
  const [idx, setIdx] = useState(0)
  const f = FORMATS.find((x) => x.id === fid)!
  const i = Math.min(idx, f.speeches.length - 1)
  return (
    <SpeechTimer
      // Changing format or speech remounts the clock, which resets it to that
      // speech's length rather than carrying a stale countdown.
      key={`${fid}-${i}`}
      format={f}
      index={i}
      setFid={(v) => {
        setFid(v)
        setIdx(0)
      }}
      setIdx={setIdx}
      color={color}
    />
  )
}

function SpeechTimer({
  format: f,
  index: idx,
  setFid,
  setIdx,
  color,
}: {
  format: (typeof FORMATS)[number]
  index: number
  setFid: (v: string) => void
  setIdx: (n: number) => void
  color: string
}) {
  const speech = f.speeches[idx]
  const total = speech.minutes * 60
  const [left, setLeft] = useState(total)
  const [running, setRunning] = useState(false)
  const [sound, setSound] = useState(true)
  const end = useRef(0)
  const prev = useRef(total)

  useEffect(() => {
    if (!running) return
    const id = window.setInterval(() => {
      const next = Math.max(0, (end.current - performance.now()) / 1000)
      if (sound) {
        // The conventional signals: one knock at the first and last protected
        // minute, two at time, continuous when over.
        const crossed = (mark: number) => prev.current > mark && next <= mark
        if (crossed(total - 60)) beep(660, 150)
        if (crossed(60)) beep(660, 150)
        if (crossed(0)) {
          beep(440, 400)
          window.setTimeout(() => beep(440, 400), 500)
        }
      }
      prev.current = next
      setLeft(next)
      if (next <= 0) setRunning(false)
    }, 100)
    return () => window.clearInterval(id)
  }, [running, sound, total])

  const elapsed = total - left
  const poiOpen = speech.questions === 'poi' && elapsed >= 60 && left > 60
  const phase = left <= 0 ? 'Time' : elapsed < 60 ? 'Protected opening' : left <= 60 ? 'Protected close' : 'Open floor'

  return (
    <Card
      title="Speech timer"
      color={color}
      note="Every format protects the first and last minute of a speech from interruption. Knowing where you are in that minute is the difference between taking a point that helps you and taking one that eats your conclusion."
    >
      <div className="flex flex-wrap gap-3">
        <Select label="Format" value={f.id} onChange={setFid} options={FORMATS.map((x) => [x.id, x.short])} />
        <Select label="Speech" value={String(idx)} onChange={(v) => setIdx(Number(v))} options={f.speeches.map((s, i) => [String(i), `${s.name} (${s.minutes}′)`])} />
      </div>

      <div className="rounded-[var(--radius)] border p-4 text-center" style={{ borderColor: LINE, background: left <= 0 ? `color-mix(in srgb, ${OPP} 18%, var(--surface))` : poiOpen ? `color-mix(in srgb, ${color} 12%, var(--surface))` : 'var(--paper-2)' }}>
        <p className="font-mono text-5xl font-bold tabular-nums">{clock(left)}</p>
        <p className="mt-1 text-xs font-bold uppercase tracking-wide" style={soft}>
          {phase}
          {speech.questions === 'poi' ? (poiOpen ? ' — points may be offered' : ' — no points') : speech.questions === 'cx' ? ' — cross-examination follows' : ''}
        </p>
      </div>

      <div className="h-3 overflow-hidden rounded-full border" style={{ borderColor: LINE, background: 'var(--surface)' }}>
        <div className="h-full" style={{ width: `${(elapsed / total) * 100}%`, background: left <= 60 ? OPP : color }} />
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        <Btn
          active={running}
          onClick={() => {
            if (running) {
              setRunning(false)
              return
            }
            if (left <= 0) {
              setLeft(total)
              prev.current = total
              end.current = performance.now() + total * 1000
            } else {
              prev.current = left
              end.current = performance.now() + left * 1000
            }
            setRunning(true)
          }}
        >
          {running ? 'Pause' : left < total && left > 0 ? 'Resume' : 'Start'}
        </Btn>
        <Btn
          onClick={() => {
            setRunning(false)
            setLeft(total)
            prev.current = total
          }}
        >
          Reset
        </Btn>
        <Btn active={sound} onClick={() => setSound((s) => !s)}>
          {sound ? 'Sound on' : 'Sound off'}
        </Btn>
      </div>

      <p className="text-xs leading-relaxed" style={soft}>
        <strong>{speech.name}:</strong> {speech.role}
        {speech.noNewMatter ? ' No new matter in this speech.' : ''}
      </p>
    </Card>
  )
}

// ── fallacies ──────────────────────────────────────────────────────────────

/** A deterministic shuffle, so the quiz order is stable for a given question. */
function pickOptions(correct: Fallacy, seed: number) {
  const others = FALLACIES.filter((f) => f.id !== correct.id)
  const out: Fallacy[] = []
  let i = seed
  while (out.length < 3) {
    const f = others[(i * 7 + 3) % others.length]
    if (!out.includes(f)) out.push(f)
    i++
  }
  const all = [...out, correct]
  // Rotate rather than randomise, so re-rendering does not move the buttons.
  const cut = seed % all.length
  return [...all.slice(cut), ...all.slice(0, cut)]
}

function FallacyLab({ color }: { color: string }) {
  const [mode, setMode] = useState<'quiz' | 'browse'>('quiz')
  const [family, setFamily] = useState<'all' | Fallacy['family']>('all')
  const [qi, setQi] = useState(0)
  const [chosen, setChosen] = useState<string | null>(null)
  const [score, setScore] = useState({ right: 0, asked: 0 })

  const target = FALLACIES[qi % FALLACIES.length]
  const options = useMemo(() => pickOptions(target, qi), [target, qi])
  const list = family === 'all' ? FALLACIES : FALLACIES.filter((f) => f.family === family)

  return (
    <Card
      title="Fallacy spotter"
      color={color}
      note="Naming a fallacy wins nothing on its own; judges mark the answer, not the label. Each entry here carries the sentence you actually say in the round, which is always a request for the missing step rather than a word in Latin."
    >
      <Pills label="Mode" value={mode} options={[['quiz', 'Quiz'], ['browse', 'Reference']]} onChange={setMode} />

      {mode === 'quiz' ? (
        <>
          <p className="rounded-[var(--radius)] border p-3 text-sm leading-relaxed" style={{ borderColor: LINE, background: 'var(--paper-2)' }}>
            {target.example}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {options.map((o) => (
              <Btn
                key={o.id}
                active={chosen === o.id}
                disabled={chosen !== null}
                onClick={() => {
                  setChosen(o.id)
                  setScore((s) => ({ right: s.right + (o.id === target.id ? 1 : 0), asked: s.asked + 1 }))
                }}
              >
                {o.name}
              </Btn>
            ))}
          </div>
          {chosen && (
            <div className="flex flex-col gap-1.5 rounded-[var(--radius)] border p-3" style={{ borderColor: chosen === target.id ? PROP : OPP }}>
              <p className="text-sm font-bold" style={{ color: chosen === target.id ? PROP : OPP }}>
                {chosen === target.id ? 'Right' : 'Not quite'} — {target.name}
              </p>
              <p className="text-xs leading-relaxed" style={soft}>
                {target.gist}
              </p>
              <p className="text-sm leading-relaxed">
                <strong style={{ color }}>What you say: </strong>
                {target.answer}
              </p>
            </div>
          )}
          <div className="flex flex-wrap items-center gap-2">
            <Btn
              onClick={() => {
                setQi((i) => i + 1)
                setChosen(null)
              }}
            >
              Next
            </Btn>
            <Stat label="Score" value={`${score.right} / ${score.asked}`} />
          </div>
        </>
      ) : (
        <>
          <Pills label="Family" value={family} options={[['all', 'All'], ...FALLACY_FAMILIES]} onChange={setFamily} />
          <div className="grid gap-2">
            {list.map((f) => (
              <div key={f.id} className="rounded-[var(--radius)] border p-3" style={{ borderColor: LINE }}>
                <p className="text-sm font-bold" style={{ color }}>
                  {f.name}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed" style={soft}>
                  {f.gist}
                </p>
                <p className="mt-1 text-xs italic leading-relaxed">{f.example}</p>
                <p className="mt-1 text-xs leading-relaxed">
                  <strong>Answer: </strong>
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </Card>
  )
}

// ── motions ────────────────────────────────────────────────────────────────

function MotionLab({ color }: { color: string }) {
  const [mode, setMode] = useState<'type' | 'bank'>('type')
  const [tid, setTid] = useState(MOTION_TYPES[0].id)
  const [bi, setBi] = useState(0)
  const [side, setSide] = useState<'prop' | 'opp'>('prop')
  const type = MOTION_TYPES.find((t) => t.id === tid)!
  const m = MOTION_BANK[bi]
  const mType = MOTION_TYPES.find((t) => t.id === m.type)!

  return (
    <Card
      title="Motion analyser"
      color={color}
      note="Prep time is spent badly when it starts with arguments. It starts with the motion: what kind of claim it makes, what each side therefore has to prove, and where the clash will be whether you choose it or not."
    >
      <Pills label="Mode" value={mode} options={[['type', 'By motion type'], ['bank', 'Worked motions']]} onChange={setMode} />

      {mode === 'type' ? (
        <>
          <Select label="Motion type" value={tid} onChange={setTid} options={MOTION_TYPES.map((t) => [t.id, t.name])} />
          <p className="font-mono text-xs" style={soft}>
            {type.marker}
          </p>
          <p className="text-sm leading-relaxed">{type.gist}</p>
          <p className="rounded-[var(--radius)] border p-2.5 text-sm italic" style={{ borderColor: LINE, background: 'var(--paper-2)' }}>
            {type.example}
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-[var(--radius)] border p-3" style={{ borderColor: PROP }}>
              <p className="text-[11px] font-bold uppercase tracking-wide" style={{ color: PROP }}>
                Proposition must show
              </p>
              <p className="mt-1 text-xs leading-relaxed">{type.propBurden}</p>
            </div>
            <div className="rounded-[var(--radius)] border p-3" style={{ borderColor: OPP }}>
              <p className="text-[11px] font-bold uppercase tracking-wide" style={{ color: OPP }}>
                Opposition must show
              </p>
              <p className="mt-1 text-xs leading-relaxed">{type.oppBurden}</p>
            </div>
          </div>
          <p className="text-xs leading-relaxed" style={soft}>
            <strong style={{ color }}>Where the clash lands: </strong>
            {type.clash}
          </p>
          <p className="text-xs leading-relaxed" style={soft}>
            <strong style={{ color: OPP }}>Common trap: </strong>
            {type.trap}
          </p>
        </>
      ) : (
        <>
          <Select label="Motion" value={String(bi)} onChange={(v) => setBi(Number(v))} options={MOTION_BANK.map((x, i) => [String(i), x.motion])} />
          <div className="flex flex-wrap gap-2">
            <Stat label="Type" value={mType.name} />
            <Stat label="Marker" value={mType.marker} />
          </div>
          <p className="rounded-[var(--radius)] border p-3 text-xs leading-relaxed" style={{ borderColor: LINE, background: 'var(--paper-2)' }}>
            <strong style={{ color }}>First thing to notice: </strong>
            {m.read}
          </p>
          <Pills label="Side" value={side} options={[['prop', 'Proposition'], ['opp', 'Opposition']]} onChange={setSide} />
          <ol className="ml-4 list-decimal text-sm leading-relaxed">
            {(side === 'prop' ? m.propSketch : m.oppSketch).map((s) => (
              <li key={s} className="mt-1">
                {s}
              </li>
            ))}
          </ol>
          <p className="text-xs leading-relaxed" style={soft}>
            Three lines of case, not three arguments: each still needs a mechanism, an impact and a comparison before it is worth a speech.
          </p>
        </>
      )}
    </Card>
  )
}

// ── probability ────────────────────────────────────────────────────────────

const pct = (x: number) => (x >= 0.1 ? `${(x * 100).toFixed(1)}%` : x >= 0.001 ? `${(x * 100).toFixed(2)}%` : `${(x * 100).toExponential(1)}%`)

function BayesLab({ color }: { color: string }) {
  const [id, setId] = useState(BAYES_CASES[0].id)
  const c = BAYES_CASES.find((x) => x.id === id)!
  const [prior, setPrior] = useState(c.prior)
  const [on, setOn] = useState<boolean[]>(c.evidence.map((_, i) => i === 0))

  // Switching case resets the sliders through a remount from the parent key below.
  const steps = useMemo(() => {
    let odds = prior / (1 - prior)
    const out: { label: string; lr: number; odds: number; p: number; used: boolean; note: string }[] = []
    c.evidence.forEach((e, i) => {
      const lr = e.lrTrue / e.lrFalse
      if (on[i]) odds *= lr
      out.push({ label: e.label, lr, odds, p: odds / (1 + odds), used: on[i], note: e.note })
    })
    return out
  }, [c, prior, on])

  const post = steps.length ? steps[steps.length - 1].p : prior
  const factor = (post / (1 - post)) / (prior / (1 - prior))

  return (
    <Card
      title="Updating on evidence"
      color={color}
      note="Judges are not Bayesians and you should never say the word in a round. The arithmetic still matters, because it tells you which of your three pieces of evidence is worth speaking about: a likelihood ratio near 1 moves nothing, however impressive the source. Everything here is odds multiplied by a ratio."
    >
      <div className="flex flex-wrap gap-3">
        <Select
          label="Claim"
          value={id}
          onChange={(v) => {
            const nx = BAYES_CASES.find((x) => x.id === v)!
            setId(v)
            setPrior(nx.prior)
            setOn(nx.evidence.map((_, i) => i === 0))
          }}
          options={BAYES_CASES.map((x) => [x.id, x.name])}
        />
        <Slider label="Prior" min={0.001} max={0.9} step={0.001} value={prior} show={pct(prior)} onChange={setPrior} />
      </div>
      <p className="text-sm font-bold">{c.claim}</p>

      <div className="grid gap-2">
        {steps.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setOn((old) => old.map((v, j) => (j === i ? !v : v)))}
            className="rounded-[var(--radius)] border p-3 text-left"
            style={{ borderColor: s.used ? color : LINE, background: s.used ? `color-mix(in srgb, ${color} 8%, transparent)` : 'transparent' }}
          >
            <span className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-sm font-bold">{s.label}</span>
              <span className="font-mono text-xs" style={{ color: s.lr > 1.5 ? PROP : s.lr < 0.7 ? OPP : 'var(--ink-soft)' }}>
                LR {s.lr.toFixed(2)} {s.lr > 1 ? '→ supports' : '→ undercuts'}
              </span>
            </span>
            <span className="mt-1 block text-xs leading-relaxed" style={soft}>
              {s.note}
            </span>
            <span className="mt-1 block font-mono text-[11px]" style={soft}>
              {s.used ? `after this: ${pct(s.p)}` : 'not counted — tap to include'}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <Stat label="Prior" value={pct(prior)} />
        <Stat label="Posterior" value={pct(post)} tone={post > prior ? PROP : OPP} />
        <Stat label="Odds moved by" value={`×${factor.toFixed(1)}`} />
      </div>

      <svg viewBox="0 0 640 86" className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: LINE, background: 'var(--surface)' }} role="img" aria-label="Prior and posterior probability">
        {([
          ['Prior', prior, '#3b6fd8', 16],
          ['Posterior', post, PROP, 50],
        ] as const).map(([label, v, tone, y]) => (
          <g key={label}>
            <text x={10} y={y + 14} fontSize={11} fontWeight={700} fill="var(--ink-soft)">
              {label}
            </text>
            <rect x={78} y={y} width={530} height={20} rx={4} fill="var(--paper-2)" />
            <rect x={78} y={y} width={Math.max(v * 530, 2)} height={20} rx={4} fill={tone} opacity={0.9} />
            <text x={Math.max(v * 530, 2) + 84} y={y + 15} fontSize={11.5} fontWeight={700} fill="var(--ink)">
              {pct(v)}
            </text>
          </g>
        ))}
      </svg>

      <p className="text-xs leading-relaxed" style={soft}>
        The sentence this becomes in a round: &ldquo;their strongest number is the one that would look the same whether or not their claim is true, and ours is the one that would not.&rdquo; That is a likelihood ratio argument delivered in English.
      </p>
      <p className="rounded-[var(--radius)] border p-3 text-xs leading-relaxed" style={{ borderColor: LINE, background: 'var(--paper-2)' }}>
        {c.note}
      </p>
    </Card>
  )
}

// ── coverage arithmetic ────────────────────────────────────────────────────

const COVERAGE_PRESETS: { id: string; name: string; minutes: number; args: number; note: string }[] = [
  { id: '1ar', name: 'Policy 1AR: 5 minutes against 13', minutes: 5, args: 22, note: 'The hardest speech in debate. At 22 arguments on the flow, answering each one separately gives you under 14 seconds apiece, which is not an answer, it is an acknowledgement.' },
  { id: 'whip', name: 'BP whip: 7 minutes on 49 minutes of material', minutes: 7, args: 16, note: 'A whip who tries to cover all sixteen has given a transcript. Grouping into three clashes is what makes the speech possible at all.' },
  { id: 'ff', name: 'PF final focus: 2 minutes', minutes: 2, args: 8, note: 'Two minutes forces collapse. The arithmetic says you can win two issues properly or lose eight slowly.' },
  { id: 'second', name: 'WSDC second speaker: 8 minutes', minutes: 8, args: 10, note: 'Comfortable until you remember that only about 40% of the speech is rebuttal; the rest is rebuilding and your own material.' },
]

function CoverageLab({ color }: { color: string }) {
  const [id, setId] = useState(COVERAGE_PRESETS[0].id)
  const preset = COVERAGE_PRESETS.find((p) => p.id === id)!
  const [minutes, setMinutes] = useState(preset.minutes)
  const [args, setArgs] = useState(preset.args)
  const [wpm, setWpm] = useState(170)
  const [group, setGroup] = useState(3)
  const [depth, setDepth] = useState(35)
  const [rebuttalShare, setRebuttalShare] = useState(70)

  const rebuttalSeconds = minutes * 60 * (rebuttalShare / 100)
  const words = Math.round((rebuttalSeconds / 60) * wpm)
  // Each answer takes `depth` seconds and disposes of `group` arguments at once.
  const answers = Math.floor(rebuttalSeconds / depth)
  const covered = Math.min(answers * group, args)
  const coverage = covered / args
  const dropped = args - covered
  const wordsPerAnswer = Math.round((depth / 60) * wpm)

  // The trade-off curve: coverage as a function of how long you spend per answer.
  const curve = useMemo(() => {
    const pts: [number, number][] = []
    for (let sec = 10; sec <= 120; sec += 2) {
      const a = Math.floor(rebuttalSeconds / sec)
      pts.push([sec, Math.min((a * group) / args, 1)])
    }
    return pts
  }, [rebuttalSeconds, group, args])

  const W = 640
  const H = 160
  const x = (sec: number) => 40 + ((sec - 10) / 110) * (W - 60)
  const y = (c: number) => H - 28 - c * (H - 50)

  return (
    <Card
      title="Coverage arithmetic"
      color={color}
      note="Every rebuttal speech is a division problem: seconds available, divided by seconds per answer, multiplied by how many arguments each answer disposes of. Grouping is the only term you control freely, which is why it is worth more than speaking faster."
    >
      <div className="flex flex-wrap gap-3">
        <Select
          label="Speech"
          value={id}
          onChange={(v) => {
            const nx = COVERAGE_PRESETS.find((p) => p.id === v)!
            setId(v)
            setMinutes(nx.minutes)
            setArgs(nx.args)
          }}
          options={COVERAGE_PRESETS.map((p) => [p.id, p.name])}
        />
        <Slider label="Speech length" min={1} max={10} step={0.5} value={minutes} show={`${minutes} min`} onChange={setMinutes} />
        <Slider label="Arguments on the flow" min={3} max={40} step={1} value={args} show={String(args)} onChange={setArgs} />
        <Slider label="Share spent on rebuttal" min={20} max={100} step={5} value={rebuttalShare} show={`${rebuttalShare}%`} onChange={setRebuttalShare} />
        <Slider label="Words per minute" min={110} max={320} step={10} value={wpm} show={String(wpm)} onChange={setWpm} />
        <Slider label="Seconds per answer" min={10} max={120} step={5} value={depth} show={`${depth} s`} onChange={setDepth} />
        <Slider label="Arguments per answer (grouping)" min={1} max={6} step={1} value={group} show={`×${group}`} onChange={setGroup} />
      </div>

      <div className="flex flex-wrap gap-2">
        <Stat label="Rebuttal time" value={`${Math.round(rebuttalSeconds)} s`} />
        <Stat label="Words available" value={words} />
        <Stat label="Answers you can give" value={answers} />
        <Stat label="Arguments covered" value={`${covered} / ${args}`} tone={coverage >= 0.9 ? PROP : coverage < 0.6 ? OPP : undefined} />
        <Stat label="Coverage" value={`${Math.round(coverage * 100)}%`} tone={coverage >= 0.9 ? PROP : coverage < 0.6 ? OPP : undefined} />
        <Stat label="Dropped" value={dropped} tone={dropped > 0 ? OPP : PROP} />
        <Stat label="Words per answer" value={wordsPerAnswer} tone={wordsPerAnswer < 60 ? OPP : undefined} />
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: LINE, background: 'var(--surface)' }} role="img" aria-label="Coverage against seconds per answer">
        <line x1={40} y1={H - 28} x2={W - 20} y2={H - 28} stroke="var(--ink)" />
        <line x1={40} y1={16} x2={40} y2={H - 28} stroke="var(--ink)" />
        {[0, 0.25, 0.5, 0.75, 1].map((c) => (
          <g key={c}>
            <line x1={40} y1={y(c)} x2={W - 20} y2={y(c)} stroke={LINE} strokeDasharray="3 4" />
            <text x={36} y={y(c) + 4} fontSize={10} textAnchor="end" fill="var(--ink-soft)">
              {Math.round(c * 100)}%
            </text>
          </g>
        ))}
        <path d={curve.map((p, i) => `${i ? 'L' : 'M'}${x(p[0])},${y(p[1])}`).join(' ')} fill="none" stroke={color} strokeWidth={2.2} />
        <circle cx={x(Math.min(Math.max(depth, 10), 120))} cy={y(coverage)} r={5} fill={OPP} />
        <text x={x(Math.min(Math.max(depth, 10), 120)) + 8} y={y(coverage) - 6} fontSize={11} fontWeight={700} fill={OPP}>
          you
        </text>
        {[20, 40, 60, 80, 100, 120].map((s) => (
          <text key={s} x={x(s)} y={H - 12} fontSize={10} textAnchor="middle" fill="var(--ink-soft)">
            {s}s
          </text>
        ))}
        <text x={W - 20} y={H - 1} fontSize={10} textAnchor="end" fill="var(--ink-soft)">
          seconds spent per answer
        </text>
      </svg>

      <p className="text-xs leading-relaxed" style={soft}>
        Read the curve as the trade you are actually making. Moving right buys depth and spends coverage; the only way to move the whole curve up is to raise grouping, which costs nothing but preparation. Note what raising words per minute does: it adds words per answer but not answers, so speed buys depth, not coverage — which is the opposite of what most debaters think they are buying.
      </p>
      <p className="rounded-[var(--radius)] border p-3 text-xs leading-relaxed" style={{ borderColor: LINE, background: 'var(--paper-2)' }}>
        {preset.note}
      </p>
    </Card>
  )
}

// ── argument maps ──────────────────────────────────────────────────────────

/** Resolve which nodes survive once `killed` premises are struck. */
function propagate(map: ArgMap, killed: Set<string>) {
  const byId = new Map(map.nodes.map((n) => [n.id, n]))
  const alive = new Map<string, boolean>()
  const strength = new Map<string, number>()
  const resolve = (n: MapNode): boolean => {
    const cached = alive.get(n.id)
    if (cached !== undefined) return cached
    if (killed.has(n.id)) {
      alive.set(n.id, false)
      strength.set(n.id, 0)
      return false
    }
    if (!n.needs || n.needs.length === 0) {
      alive.set(n.id, true)
      strength.set(n.id, 1)
      return true
    }
    const kids = n.needs.map((id) => byId.get(id)!).filter(Boolean)
    const states = kids.map((k) => resolve(k))
    const live = states.filter(Boolean).length
    const ok = n.mode === 'convergent' ? live > 0 : live === kids.length
    alive.set(n.id, ok)
    strength.set(n.id, ok ? live / kids.length : 0)
    return ok
  }
  for (const n of map.nodes) resolve(n)
  return { alive, strength }
}

function MapLab({ color }: { color: string }) {
  const [id, setId] = useState(ARG_MAPS[0].id)
  const map = ARG_MAPS.find((m) => m.id === id)!
  const [killed, setKilled] = useState<Set<string>>(new Set())
  const [selected, setSelected] = useState<string | null>(null)

  const { alive, strength } = useMemo(() => propagate(map, killed), [map, killed])
  const conclusion = map.nodes.find((n) => n.kind === 'conclusion')!
  const holds = alive.get(conclusion.id) ?? true
  const sel = selected ? map.nodes.find((n) => n.id === selected) : null

  const COLS = Math.max(...map.nodes.map((n) => n.col)) + 1
  const ROWS = Math.max(...map.nodes.map((n) => n.row)) + 1
  const CW = 168
  const CH = 62
  const W = COLS * CW + 20
  const H = ROWS * CH + 20
  const nx = (n: MapNode) => n.col * CW + 10
  const ny = (n: MapNode) => n.row * CH + 10

  return (
    <Card
      title="Argument map: what one answer kills"
      color={color}
      note="Tap a box to answer it and watch the consequences propagate. A linked joint (every input required) dies if any input dies, which is why one answer at a linked node is worth four at the leaves. A convergent joint survives on one surviving input, which is why killing one of three examples achieves almost nothing."
    >
      <div className="flex flex-wrap gap-3">
        <Select
          label="Argument"
          value={id}
          onChange={(v) => {
            setId(v)
            setKilled(new Set())
            setSelected(null)
          }}
          options={ARG_MAPS.map((m) => [m.id, `${m.side}: ${m.name}`])}
        />
        <Btn onClick={() => setKilled(new Set())} disabled={killed.size === 0}>
          Reset
        </Btn>
      </div>
      <p className="text-xs" style={soft}>
        <strong>Motion:</strong> {map.motion}
      </p>

      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ maxWidth: '100%', height: 'auto' }} role="img" aria-label="Argument map">
          {map.nodes.flatMap((n) =>
            (n.needs ?? []).map((pid) => {
              const p = map.nodes.find((x) => x.id === pid)
              if (!p) return null
              const live = (alive.get(p.id) ?? true) && (alive.get(n.id) ?? true)
              return (
                <line
                  key={`${pid}-${n.id}`}
                  x1={nx(p) + 150}
                  y1={ny(p) + 22}
                  x2={nx(n)}
                  y2={ny(n) + 22}
                  stroke={live ? color : LINE}
                  strokeWidth={live ? 1.8 : 1}
                  strokeDasharray={n.mode === 'convergent' ? '5 4' : undefined}
                  opacity={live ? 0.9 : 0.4}
                />
              )
            })
          )}
          {map.nodes.map((n) => {
            const live = alive.get(n.id) ?? true
            const struck = killed.has(n.id)
            return (
              <g
                key={n.id}
                onClick={() => {
                  setSelected(n.id)
                  setKilled((old) => {
                    const next = new Set(old)
                    if (next.has(n.id)) next.delete(n.id)
                    else next.add(n.id)
                    return next
                  })
                }}
                style={{ cursor: 'pointer' }}
              >
                <rect
                  x={nx(n)}
                  y={ny(n)}
                  width={150}
                  height={44}
                  rx={n.kind === 'conclusion' ? 22 : 6}
                  fill={live ? (n.kind === 'conclusion' ? `color-mix(in srgb, ${color} 22%, var(--surface))` : 'var(--surface)') : 'var(--paper-2)'}
                  stroke={struck ? OPP : live ? color : LINE}
                  strokeWidth={struck ? 2 : 1.2}
                  opacity={live ? 1 : 0.55}
                />
                <foreignObject x={nx(n) + 5} y={ny(n) + 3} width={140} height={40}>
                  <div
                    style={{
                      font: '600 10.5px/1.25 system-ui, sans-serif',
                      color: live ? 'var(--ink)' : 'var(--ink-soft)',
                      textDecoration: struck ? 'line-through' : 'none',
                    }}
                  >
                    {n.text}
                  </div>
                </foreignObject>
                {n.mode && (
                  <text x={nx(n) + 150} y={ny(n) - 2} fontSize={8.5} textAnchor="end" fill="var(--ink-soft)">
                    {n.mode}
                  </text>
                )}
              </g>
            )
          })}
        </svg>
      </div>

      <div className="flex flex-wrap gap-2">
        <Stat label="Answered" value={killed.size} />
        <Stat label="Conclusion" value={holds ? 'still stands' : 'falls'} tone={holds ? PROP : OPP} />
        <Stat label="Support remaining" value={`${Math.round((strength.get(conclusion.id) ?? 1) * 100)}%`} />
        <Stat label="Nodes down" value={map.nodes.filter((n) => !(alive.get(n.id) ?? true)).length} />
      </div>

      {sel && (
        <div className="rounded-[var(--radius)] border p-3" style={{ borderColor: LINE }}>
          <p className="text-sm font-bold">{sel.text}</p>
          <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wide" style={soft}>
            {sel.kind}
            {sel.mode ? ` · ${sel.mode} joint` : ''}
            {killed.has(sel.id) ? ' · answered' : ''}
          </p>
          <p className="mt-1 text-xs leading-relaxed">
            {sel.attack ? (
              <>
                <strong style={{ color: OPP }}>What you say: </strong>
                {sel.attack}
              </>
            ) : (
              <span style={soft}>No standard attack listed for this node — which usually means it is the uncontroversial part, and spending time on it is how rebuttal time disappears.</span>
            )}
          </p>
        </div>
      )}

      <p className="rounded-[var(--radius)] border p-3 text-xs leading-relaxed" style={{ borderColor: LINE, background: 'var(--paper-2)' }}>
        {map.note}
      </p>
    </Card>
  )
}
