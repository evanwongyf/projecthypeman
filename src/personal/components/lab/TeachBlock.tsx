import { useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { PlotChart } from '../finance/PlotChart'
import { Card, Phi, Pills, Slider, Stat, fmt, phi, soft } from './kit'

type TeachBlockType = Extract<Block, { t: 'teach-viz' }>

export default function TeachBlock({ block, color }: { block: TeachBlockType; color: string }) {
  switch (block.viz) {
    case 'motivation-audit':
      return <MotivationAudit color={color} />
    case 'flow-map':
      return <FlowMap color={color} />
    case 'arousal-curve':
      return <ArousalCurve color={color} />
    case 'effect-size':
      return <EffectSize color={color} />
  }
}

// ── a self-determination audit ─────────────────────────────────────────────

const AUDIT: { need: 'Autonomy' | 'Competence' | 'Relatedness'; q: string }[] = [
  { need: 'Autonomy', q: 'Learners get real choices about what, how or in what order they work.' },
  { need: 'Autonomy', q: 'I give a reason why each task matters, in terms learners care about.' },
  { need: 'Autonomy', q: 'When a task is dull I acknowledge that, rather than pretending it is fun.' },
  { need: 'Autonomy', q: 'My instructions invite ("try", "you could") more often than they command ("must", "should").' },
  { need: 'Competence', q: 'Tasks sit just above what learners can already do, with support to get there.' },
  { need: 'Competence', q: 'Feedback says what to do next, not only how well it went.' },
  { need: 'Competence', q: 'Learners can see their own progress over time (a record, not a mark).' },
  { need: 'Competence', q: 'Success criteria are clear, so effort can lead to success.' },
  { need: 'Relatedness', q: 'I know something about each learner outside the subject.' },
  { need: 'Relatedness', q: 'Learners often work with and help each other.' },
  { need: 'Relatedness', q: 'Mistakes are treated as normal and useful, in public.' },
  { need: 'Relatedness', q: 'Someone would notice and follow up if a learner went quiet or stopped coming.' },
]

const FIXES: Record<string, string> = {
  Autonomy: 'Offer two or three routes to the same goal, give the reason for the task, and swap "you must" for "you could". Reeve and Jang found that offering rationale and choice, and acknowledging negative feelings, are the behaviours that learners experience as supportive.',
  Competence: 'Check difficulty with a quick pre-assessment, give next-step feedback, and make progress visible. Structure is not the opposite of autonomy: clear expectations and guidance help competence.',
  Relatedness: 'Learn names and interests, use pair and group work with real interdependence, and respond to mistakes with curiosity. Belonging is built from small, repeated signs that you care.',
}

function MotivationAudit({ color }: { color: string }) {
  const [score, setScore] = useState<number[]>(AUDIT.map(() => 3))
  const needs = ['Autonomy', 'Competence', 'Relatedness'] as const
  const avg = (n: string) => {
    const idx = AUDIT.map((a, i) => (a.need === n ? i : -1)).filter((i) => i >= 0)
    return idx.reduce((s, i) => s + score[i], 0) / idx.length
  }
  const lowest = [...needs].sort((a, b) => avg(a) - avg(b))[0]
  return (
    <Card title="A motivation audit for a class or a course" color={color} note="Rate each statement for a class you teach (or a course you are taking) from 1 (not at all true) to 5 (very true). The three scores map onto self-determination theory's three needs. This is a reflection tool, not a validated scale: use it to decide where to start, not to grade yourself.">
      <div className="flex flex-col gap-2">
        {AUDIT.map((a, i) => (
          <div key={a.q} className="flex flex-col gap-1 rounded-[var(--radius)] border px-2.5 py-2" style={{ borderColor: 'var(--line)' }}>
            <p className="text-sm"><span className="eyebrow mr-1.5 font-bold" style={soft}>{a.need}</span>{a.q}</p>
            <Pills label={a.q} value={String(score[i])} options={[['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5']]} onChange={(v) => setScore(score.map((s, k) => (k === i ? Number(v) : s)))} />
          </div>
        ))}
      </div>
      <div className="grid gap-2 sm:grid-cols-3">
        {needs.map((n) => (
          <Stat key={n} label={n.toLowerCase()} value={`${fmt(avg(n), 1)} / 5`} tone={n === lowest ? '#d9534f' : color} />
        ))}
      </div>
      <p className="text-sm"><strong>Start with {lowest.toLowerCase()}.</strong> {FIXES[lowest]}</p>
    </Card>
  )
}

// ── Csikszentmihalyi's flow map ────────────────────────────────────────────

const ZONES = [
  { name: 'Control', from: -22.5, text: 'Skill is above the challenge: comfortable, in command. Raise the challenge a little to move toward flow.' },
  { name: 'Flow', from: 22.5, text: 'Challenge and skill both high and in balance: absorbed, clear goals, immediate feedback. This is the target.' },
  { name: 'Arousal', from: 67.5, text: 'Challenge is above skill: stimulating but stretching. Good with support; build skill to reach flow.' },
  { name: 'Anxiety', from: 112.5, text: 'Challenge far above skill: stressful, and learning shuts down. Break the task down and add scaffolding.' },
  { name: 'Worry', from: 157.5, text: 'Skill below average and challenge average or a bit above: unease. Rebuild confidence with a winnable task.' },
  { name: 'Apathy', from: 202.5, text: 'Low challenge and low skill: nothing at stake and little ability. Needs a reason to care and a way in.' },
  { name: 'Boredom', from: 247.5, text: 'Challenge far below skill: nothing to stretch the learner. Add depth, choice or an extension.' },
  { name: 'Relaxation', from: 292.5, text: 'High skill and low challenge: easy and pleasant, good for recovery but not for growth.' },
]

function zoneOf(skill: number, challenge: number) {
  const ang = ((Math.atan2(challenge - 5, skill - 5) * 180) / Math.PI + 360) % 360
  return ZONES[Math.floor(((ang + 22.5) % 360) / 45)]
}

function FlowMap({ color }: { color: string }) {
  const [skill, setSkill] = useState(6)
  const [challenge, setChallenge] = useState(6)
  const W = 420
  const P = 34
  const x = (v: number) => P + ((v - 1) / 9) * (W - 2 * P)
  const y = (v: number) => W - P - ((v - 1) / 9) * (W - 2 * P)
  const zone = zoneOf(skill, challenge)
  const labelPos: Record<string, [number, number]> = { Control: [8.2, 5], Flow: [8, 8], Arousal: [5, 8.8], Anxiety: [2.4, 8.5], Worry: [2.2, 5], Apathy: [2.4, 2], Boredom: [5, 1.5], Relaxation: [8, 2] }
  const flow = Math.abs(skill - challenge) <= 1.5 && skill >= 5.5
  return (
    <Card title="The flow map: challenge against skill" color={color} note="Mihaly Csikszentmihalyi's eight-region version of the flow model (1997). The axes are relative to the learner's own average: 5 is their typical challenge or skill. Flow needs both to be above average and roughly matched, so the same task is boring to a stronger learner and anxious to a weaker one. It is a model for thinking about task design, not a measuring instrument.">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,26rem)_1fr]">
        <svg viewBox={`0 0 ${W} ${W}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Challenge against skill with eight regions">
          {ZONES.map((z, i) => {
            const a0 = ((z.from - 0) * Math.PI) / 180
            const a1 = (((z.from + 45)) * Math.PI) / 180
            const c = [x(5), y(5)]
            const r = W
            const pts = [`${c[0]},${c[1]}`, `${c[0] + r * Math.cos(a0)},${c[1] - r * Math.sin(a0)}`, `${c[0] + r * Math.cos((a0 + a1) / 2)},${c[1] - r * Math.sin((a0 + a1) / 2)}`, `${c[0] + r * Math.cos(a1)},${c[1] - r * Math.sin(a1)}`].join(' ')
            return <polygon key={z.name} points={pts} fill={z.name === 'Flow' ? color : ['#e0a82a', '#d9534f', '#8a6d1e', '#7b4fc9', '#3b6fd8', '#2f9e6e', '#e07b2a', '#2f9e6e'][i]} opacity={z.name === zone.name ? 0.5 : z.name === 'Flow' ? 0.3 : 0.12} clipPath="url(#flowclip)" />
          })}
          <defs>
            <clipPath id="flowclip"><rect x={P} y={P} width={W - 2 * P} height={W - 2 * P} /></clipPath>
          </defs>
          <rect x={P} y={P} width={W - 2 * P} height={W - 2 * P} fill="none" stroke="var(--ink)" strokeWidth={1.5} />
          {Object.entries(labelPos).map(([n, [lx, ly]]) => (
            <text key={n} x={x(lx)} y={y(ly)} fontSize={12} fontWeight={n === zone.name ? 800 : 600} textAnchor="middle" fill="var(--ink)" opacity={n === zone.name ? 1 : 0.65}>{n}</text>
          ))}
          <line x1={x(1)} y1={y(1)} x2={x(10)} y2={y(10)} stroke="var(--ink)" strokeDasharray="4 4" opacity={0.5} />
          <circle cx={x(skill)} cy={y(challenge)} r={9} fill="var(--ink)" stroke="var(--surface)" strokeWidth={2.5} />
          <text x={W / 2} y={W - 8} fontSize={12} fontWeight={700} textAnchor="middle" fill="var(--ink)">skill (low to high)</text>
          <text x={12} y={W / 2} fontSize={12} fontWeight={700} textAnchor="middle" fill="var(--ink)" transform={`rotate(-90 12 ${W / 2})`}>challenge (low to high)</text>
        </svg>
        <div className="flex flex-col gap-3">
          <Slider label="learner's skill for this task" value={skill} min={1} max={10} step={0.5} onChange={setSkill} />
          <Slider label="challenge of the task" value={challenge} min={1} max={10} step={0.5} onChange={setChallenge} />
          <Stat label="region" value={zone.name} tone={zone.name === 'Flow' ? color : undefined} />
          <p className="text-sm leading-relaxed">{zone.text}</p>
          {flow && zone.name !== 'Flow' && <p className="text-xs" style={soft}>Skill and challenge are matched, but check that both are above this learner&apos;s average: balanced-and-easy is relaxation, not flow.</p>}
        </div>
      </div>
    </Card>
  )
}

// ── Yerkes–Dodson ──────────────────────────────────────────────────────────

function ArousalCurve({ color }: { color: string }) {
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium')
  const peak = { easy: 0.7, medium: 0.5, hard: 0.3 }[difficulty]
  const width = { easy: 0.3, medium: 0.25, hard: 0.2 }[difficulty]
  const f = (a: number) => Math.exp(-((a - peak) ** 2) / (2 * width * width))
  const curves = (['easy', 'medium', 'hard'] as const).map((d, i) => {
    const pk = { easy: 0.7, medium: 0.5, hard: 0.3 }[d]
    const w = { easy: 0.3, medium: 0.25, hard: 0.2 }[d]
    return { f: (a: number) => Math.exp(-((a - pk) ** 2) / (2 * w * w)), color: ['#2f9e6e', '#e07b2a', '#7b4fc9'][i], dashed: d !== difficulty, label: d }
  })
  return (
    <Card title="The Yerkes–Dodson curve: arousal and performance" color={color} note="A conceptual picture, not measured data. Yerkes and Dodson (1908) trained mice with electric shocks of different strength; the 'law' that moderate arousal is best, and that harder tasks need less of it, was generalised to people later. The evidence for it in humans is mixed, so use it as a rough heuristic about test anxiety and task difficulty, not as a rule.">
      <Pills label="Task difficulty" value={difficulty} options={[['easy', 'Easy or well-practised'], ['medium', 'Moderate'], ['hard', 'Hard or new']]} onChange={setDifficulty} />
      <PlotChart block={{ t: 'plot', x: [0, 1], y: [0, 1.1], xLabel: 'arousal (calm to very stressed)', yLabel: 'performance (relative)', curves, points: [{ x: peak, y: f(peak), label: 'best arousal for this task' }] }} />
      <p className="text-sm" style={soft}>For a hard, new task the best performance comes at lower arousal; for an easy, well-learned one a little more pressure helps. This is one reason a calm, low-stakes start helps new learning, and why high-stakes exams punish unfamiliar material most.</p>
    </Card>
  )
}

// ── what an effect size means ──────────────────────────────────────────────

function EffectSize({ color }: { color: string }) {
  const [d, setD] = useState(0.4)
  const ctrl = (x: number) => phi(x)
  const treat = (x: number) => phi(x - d)
  const u3 = Phi(d)
  const cl = Phi(d / Math.SQRT2)
  const overlap = 2 * Phi(-d / 2)
  const r = d / Math.sqrt(d * d + 4)
  return (
    <Card title="What an effect size means" color={color} note="Cohen's d is the difference between two group means in units of the standard deviation. Slide it and see two bell curves pull apart. Conventional labels (0.2 small, 0.5 medium, 0.8 large) are rough: in education, 0.4 is a common benchmark for 'worth having', and in a field where most studies find about 0.1, an effect of 0.3 is large.">
      <PlotChart block={{ t: 'plot', x: [-4, 5], y: [0, 0.5], xLabel: 'score, in standard deviations from the control mean', yLabel: 'density', curves: [{ f: ctrl, color: '#8a8478', label: 'control group' }, { f: treat, color, label: 'treatment group' }], vlines: [{ x: 0, label: 'control mean' }, { x: d, label: 'treatment mean' }] }} />
      <Slider label="effect size d" value={d} min={-1} max={1.5} step={0.05} onChange={setD} show={d.toFixed(2)} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="average treated learner beats" value={`${fmt(u3 * 100, 0)}% of controls`} tone={color} />
        <Stat label="chance a random treated learner outscores a random control" value={`${fmt(cl * 100, 0)}%`} />
        <Stat label="overlap of the two groups" value={`${fmt(overlap * 100, 0)}%`} />
        <Stat label="equivalent correlation r" value={fmt(r, 2)} />
      </div>
    </Card>
  )
}
