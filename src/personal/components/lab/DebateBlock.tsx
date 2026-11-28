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
  ARGUMENTS,
  FALLACIES,
  FALLACY_FAMILIES,
  FLOW,
  FORMATS,
  MOTION_BANK,
  MOTION_TYPES,
  WEIGH_AXES,
  WEIGH_PRESETS,
} from '../../lib/debate/data'
import type { Fallacy } from '../../lib/debate/data'

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
