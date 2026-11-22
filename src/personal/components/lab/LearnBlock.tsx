import { useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { PlotChart } from '../finance/PlotChart'
import { Card, Pills, Slider, Stat, fmt, soft } from './kit'

// Labs for the attention-and-retention, e-pedagogy and agentic-AI shelves. Each is a small,
// clearly labelled model for exploring an idea, not a measurement of any real learner or agent.

type LearnBlockType = Extract<Block, { t: 'learn-lab' }>

export default function LearnBlock({ block, color }: { block: LearnBlockType; color: string }) {
  switch (block.viz) {
    case 'forgetting-curve':
      return <ForgettingCurve color={color} />
    case 'attention-lesson':
      return <AttentionLesson color={color} />
    case 'agent-reliability':
      return <AgentReliability color={color} />
    case 'multimedia-audit':
      return <MultimediaAudit color={color} />
  }
}

// ── spacing and the forgetting curve ───────────────────────────────────────

type Schedule = 'none' | 'massed' | 'equal' | 'expanding'

const REVIEWS: Record<Schedule, number[]> = {
  none: [],
  massed: [0.1, 0.2, 0.3, 0.4],
  equal: [7, 14, 21, 28],
  expanding: [2, 6, 14, 28],
}

// Retention R = exp(-t / S). Each review resets the clock and multiplies stability S by a
// gain that is larger when more had been forgotten (the spacing effect): gain = 1 + g(1 - R).
function retentionSeries(s0: number, gain: number, reviews: number[], days: number) {
  const pts: [number, number][] = []
  let s = s0
  let last = 0
  const queue = [...reviews]
  for (let i = 0; i <= days * 10; i++) {
    const t = i / 10
    while (queue.length && t >= queue[0]) {
      const r = Math.exp(-(queue[0] - last) / s)
      s = s * (1 + gain * (1 - r))
      last = queue.shift()!
    }
    pts.push([t, Math.exp(-(t - last) / s)])
  }
  return pts
}

function ForgettingCurve({ color }: { color: string }) {
  const [schedule, setSchedule] = useState<Schedule>('expanding')
  const [s0, setS0] = useState(2)
  const [gain, setGain] = useState(3)
  const days = 60
  const series = (Object.keys(REVIEWS) as Schedule[]).map((k) => ({ k, pts: retentionSeries(s0, gain, REVIEWS[k], days) }))
  const cur = series.find((x) => x.k === schedule)!.pts
  const at = (d: number) => cur[Math.round(d * 10)][1]
  const avg = cur.reduce((a, p) => a + p[1], 0) / cur.length
  const tones: Record<Schedule, string> = { none: '#8a8478', massed: '#d9534f', equal: '#3b6fd8', expanding: color }
  return (
    <Card title="Spacing and the forgetting curve" color={color} note="An illustrative model, not data from a real learner. Memory strength decays as R = e^(−t/S); each review resets the curve and raises the stability S by more when more had been forgotten, a simple way to capture the spacing effect found in hundreds of studies. Cramming (four reviews in the first hours) leaves stability low; the same four reviews spread out leave it much higher.">
      <Pills label="Review schedule (four reviews, or none)" value={schedule} options={[['none', 'No review'], ['massed', 'Cram on day 0'], ['equal', 'Every 7 days'], ['expanding', 'Days 2, 6, 14, 28']]} onChange={setSchedule} />
      <PlotChart block={{ t: 'plot', x: [0, days], y: [0, 1.05], xLabel: 'days after first learning', yLabel: 'chance of recall', data: series.map((s) => ({ pts: s.pts, color: tones[s.k], dashed: s.k !== schedule, label: s.k === 'none' ? 'no review' : s.k })), vlines: REVIEWS[schedule].filter((d) => d >= 1).map((d) => ({ x: d })) }} />
      <div className="grid gap-2 sm:grid-cols-2">
        <Slider label="initial stability S₀ (days)" value={s0} min={0.5} max={6} step={0.5} onChange={setS0} show={fmt(s0, 1)} />
        <Slider label="spacing gain g" value={gain} min={0.5} max={5} step={0.5} onChange={setGain} show={fmt(gain, 1)} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Stat label="recall on day 30" value={`${fmt(at(30) * 100, 0)}%`} tone={color} />
        <Stat label="recall on day 60" value={`${fmt(at(60) * 100, 0)}%`} />
        <Stat label="average over 60 days" value={`${fmt(avg * 100, 0)}%`} />
      </div>
      <p className="text-sm" style={soft}>Try the cram schedule: recall is perfect for a day, then collapses almost as fast as with no review. Both spaced schedules end on day 28 and both beat cramming by a huge margin; expanding gaps do slightly better here. In real studies the difference between expanding and equal spacing is small and sometimes favours equal spacing (Karpicke and Roediger, 2007): the big win is spacing at all.</p>
    </Card>
  )
}

// ── attention across a lesson ──────────────────────────────────────────────

function AttentionLesson({ color }: { color: string }) {
  const [length, setLength] = useState(60)
  const [segment, setSegment] = useState(15)
  const [boost, setBoost] = useState(0.7)
  const tau = 18
  const base = 0.35
  const attention = (seg: number, bst: number) => {
    const pts: [number, number][] = []
    let level = 0.95
    let since = 0
    let start = level
    for (let i = 0; i <= length * 4; i++) {
      const t = i / 4
      if (seg < length && since >= seg) {
        start = level + bst * (0.95 - level)
        since = 0
      }
      level = base + (start - base) * Math.exp(-since / tau)
      pts.push([t, level])
      since += 0.25
    }
    return pts
  }
  const withBreaks = attention(segment, boost)
  const lecture = attention(9999, 0)
  const mean = (p: [number, number][]) => p.reduce((a, q) => a + q[1], 0) / p.length
  return (
    <Card title="Attention across a lesson" color={color} note="An illustrative model of the vigilance decrement: attention to a passive talk decays towards a lower baseline, and a short active task (a question, a pair discussion, a quiz) restores part of it. Real attention fluctuates minute by minute and differs between learners; the popular claim of a fixed ‘10-minute attention span’ is not supported by the evidence (Wilson and Korn, 2007; Bradbury, 2016). What is well supported is that interspersed retrieval and activity improve attention and learning.">
      <PlotChart block={{ t: 'plot', x: [0, length], y: [0, 1], xLabel: 'minutes into the lesson', yLabel: 'attention (relative)', data: [{ pts: lecture, color: '#8a8478', dashed: true, label: 'unbroken talk' }, { pts: withBreaks, color, label: 'with active breaks' }] }} />
      <div className="grid gap-2 sm:grid-cols-3">
        <Slider label="lesson length (minutes)" value={length} min={20} max={120} step={5} onChange={setLength} />
        <Slider label="minutes between active breaks" value={segment} min={5} max={40} step={1} onChange={setSegment} />
        <Slider label="how much a break restores" value={boost} min={0} max={1} step={0.05} onChange={setBoost} show={`${fmt(boost * 100, 0)}%`} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Stat label="average attention, with breaks" value={`${fmt(mean(withBreaks) * 100, 0)}%`} tone={color} />
        <Stat label="average attention, unbroken" value={`${fmt(mean(lecture) * 100, 0)}%`} />
      </div>
    </Card>
  )
}

// ── agent reliability ──────────────────────────────────────────────────────

function AgentReliability({ color }: { color: string }) {
  const [p, setP] = useState(0.95)
  const [k, setK] = useState(1)
  const [d, setD] = useState(0.8)
  const [n, setN] = useState(20)
  // One attempt succeeds with p; a failure is noticed with probability d and retried, up to k
  // attempts in all; an unnoticed failure ruins the step.
  const step = (pp: number, kk: number, dd: number) => {
    let s = 0
    for (let j = 0; j < kk; j++) s += pp * ((1 - pp) * dd) ** j
    return s
  }
  const ps = step(p, k, d)
  const curve = (x: number) => ps ** x
  const base = (x: number) => p ** x
  return (
    <Card title="Reliability over many steps" color={color} note="A task succeeds only if every step does. With per-step success p, n steps give pⁿ. Retries help only for failures the agent (or a test) notices: an unnoticed failure carries on silently. The model assumes steps are independent, which real agents both break (one error causes the next) and beat (they notice and repair earlier mistakes).">
      <PlotChart block={{ t: 'plot', x: [1, 100], y: [0, 1], xLabel: 'number of steps', yLabel: 'chance the whole task succeeds', curves: [{ f: base, color: '#8a8478', dashed: true, label: 'no retries' }, { f: curve, color, label: 'with retries' }], vlines: [{ x: n, label: `${n} steps` }] }} />
      <div className="grid gap-2 sm:grid-cols-2">
        <Slider label="per-step success p" value={p} min={0.7} max={0.999} step={0.001} onChange={setP} show={`${fmt(p * 100, 1)}%`} />
        <Slider label="attempts allowed per step k" value={k} min={1} max={5} step={1} onChange={setK} />
        <Slider label="share of failures noticed" value={d} min={0} max={1} step={0.05} onChange={setD} show={`${fmt(d * 100, 0)}%`} />
        <Slider label="steps in the task n" value={n} min={1} max={100} step={1} onChange={setN} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Stat label="per-step success with retries" value={`${fmt(ps * 100, 2)}%`} />
        <Stat label={`task success (${n} steps)`} value={`${fmt(curve(n) * 100, 1)}%`} tone={color} />
        <Stat label="without retries" value={`${fmt(base(n) * 100, 1)}%`} />
      </div>
    </Card>
  )
}

// ── multimedia design audit ────────────────────────────────────────────────

const MAYER: { name: string; q: string; fix: string }[] = [
  { name: 'Coherence', q: 'No decorative pictures, background music or interesting-but-irrelevant stories.', fix: 'Cut anything that does not serve the learning goal.' },
  { name: 'Signalling', q: 'Headings, arrows or highlights show what matters and how ideas connect.', fix: 'Add cues: bold the key term, arrow the key part, outline the structure.' },
  { name: 'Redundancy', q: 'Narrated animations do not also show the same words as on-screen text.', fix: 'Use narration with pictures, not narration, pictures and identical captions (unless learners need captions for access).' },
  { name: 'Spatial contiguity', q: 'Labels sit on or next to the parts of the picture they describe.', fix: 'Move labels into the diagram instead of a legend.' },
  { name: 'Temporal contiguity', q: 'Narration plays at the same time as the matching animation.', fix: 'Synchronise words and pictures.' },
  { name: 'Segmenting', q: 'Long explanations are split into learner-paced chunks.', fix: 'Add a “continue” button between steps.' },
  { name: 'Pre-training', q: 'Key terms and parts are introduced before the main explanation.', fix: 'Start with a short glossary or labelled parts.' },
  { name: 'Modality', q: 'Explanations of complex graphics are spoken rather than printed.', fix: 'Narrate the diagram instead of placing paragraphs beside it.' },
  { name: 'Multimedia', q: 'Words are combined with relevant pictures, not words alone.', fix: 'Add a diagram, chart or photo that shows the idea.' },
  { name: 'Personalisation', q: 'The tone is conversational (“you”, “let’s”) rather than formal.', fix: 'Rewrite in second person, friendly style.' },
  { name: 'Voice', q: 'Narration uses a natural human voice.', fix: 'Record a person, or use a high-quality natural voice.' },
  { name: 'Embodiment', q: 'An on-screen instructor (if any) gestures and looks at the content.', fix: 'Have the presenter point at what they are explaining.' },
]

function MultimediaAudit({ color }: { color: string }) {
  const [on, setOn] = useState<boolean[]>(() => MAYER.map(() => false))
  const score = on.filter(Boolean).length
  const todo = MAYER.filter((_, i) => !on[i]).slice(0, 3)
  return (
    <Card title="Audit a slide deck or video against Mayer’s principles" color={color} note="Richard Mayer’s twelve principles of multimedia learning, each supported by multiple experiments (mostly short lessons, with novice learners, testing transfer). Effects are largest for beginners; experts can benefit less or even be hindered (the expertise-reversal effect). Tick what your material already does.">
      <div className="grid gap-2 sm:grid-cols-2">
        {MAYER.map((m, i) => (
          <label key={m.name} className="flex cursor-pointer items-start gap-2 rounded-[var(--radius)] border p-2 text-sm" style={{ borderColor: on[i] ? color : 'var(--line)', background: 'var(--surface)' }}>
            <input type="checkbox" className="mt-1" checked={on[i]} onChange={() => setOn((o) => o.map((v, j) => (j === i ? !v : v)))} />
            <span><b>{m.name}.</b> {m.q}</span>
          </label>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Stat label="principles met" value={`${score} of ${MAYER.length}`} tone={color} />
        <Stat label="rating" value={score >= 10 ? 'Strong' : score >= 7 ? 'Good, with gaps' : score >= 4 ? 'Needs work' : 'Start here'} />
      </div>
      {todo.length > 0 && (
        <div className="text-sm">
          <p className="font-bold">Next fixes</p>
          <ul className="list-disc pl-5">
            {todo.map((t) => <li key={t.name}><b>{t.name}:</b> {t.fix}</li>)}
          </ul>
        </div>
      )}
    </Card>
  )
}
