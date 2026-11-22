import { useState } from 'react'
import { CopyButton } from '../CopyButton'

// Builds a learning objective at a chosen level of Bloom's revised taxonomy, with question
// stems and an assessment idea to match. Everything is local; nothing is saved.

const LEVELS = [
  {
    name: 'Remember',
    verbs: ['define', 'list', 'name', 'recall', 'identify', 'label', 'state'],
    stems: ['What is…?', 'Name the…', 'List the…'],
    assess: 'A short quiz, flashcards or labelling a diagram from memory.',
  },
  {
    name: 'Understand',
    verbs: ['explain', 'summarise', 'describe', 'classify', 'compare', 'interpret', 'give examples of'],
    stems: ['Explain in your own words why…', 'What is the main idea of…?', 'What is an example of…?'],
    assess: 'A short written or spoken explanation, or sorting examples into categories.',
  },
  {
    name: 'Apply',
    verbs: ['use', 'solve', 'calculate', 'demonstrate', 'carry out', 'apply'],
    stems: ['How would you use… to…?', 'Solve…', 'What would happen if…?'],
    assess: 'New problems or situations that need the method or idea.',
  },
  {
    name: 'Analyse',
    verbs: ['analyse', 'distinguish between', 'compare and contrast', 'break down', 'organise', 'examine'],
    stems: ['What are the parts of…?', 'How is… related to…?', 'What evidence supports…?'],
    assess: 'A comparison, a cause-and-effect map, or analysing an unfamiliar source or data set.',
  },
  {
    name: 'Evaluate',
    verbs: ['evaluate', 'justify', 'judge', 'critique', 'assess', 'argue for or against', 'rank'],
    stems: ['Which is better, and why?', 'Do you agree that…? Justify your view.', 'How well does… work?'],
    assess: 'A judgement with criteria and evidence, such as an argued essay or a ranked recommendation.',
  },
  {
    name: 'Create',
    verbs: ['design', 'create', 'plan', 'compose', 'construct', 'propose', 'invent'],
    stems: ['Design a… that…', 'How could you…?', 'Propose a solution to…'],
    assess: 'A product, plan or investigation, judged against success criteria.',
  },
]

export function ObjectiveBuilder({ color }: { color: string }) {
  const [level, setLevel] = useState(1)
  const [verb, setVerb] = useState(LEVELS[1].verbs[0])
  const [who, setWho] = useState('Learners')
  const [what, setWhat] = useState('')
  const [condition, setCondition] = useState('')
  const [degree, setDegree] = useState('')
  const lvl = LEVELS[level]

  function pickLevel(i: number) {
    setLevel(i)
    setVerb(LEVELS[i].verbs[0])
  }

  const content = what.trim() || 'the causes of the First World War'
  const parts = [`${who.trim() || 'Learners'} will be able to ${verb} ${content}`, condition.trim(), degree.trim()].filter(Boolean)
  const objective = `${parts.join(', ')}.`

  const tint = (pct: number) => `color-mix(in srgb, ${color} ${pct}%, var(--surface))`
  const input = 'input-field w-full text-sm'

  return (
    <div className="card-surface flex flex-col gap-4 rounded-[var(--radius)] p-4 sm:p-5">
      <div>
        <p className="eyebrow font-bold">try it</p>
        <p className="font-bold">Objective builder</p>
        <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
          Choose a level and a verb, describe the content, and get an objective with matching questions.
        </p>
      </div>

      <fieldset>
        <legend className="mb-1.5 text-xs font-bold uppercase" style={{ color: 'var(--ink-soft)' }}>
          1. Level
        </legend>
        <div className="flex flex-wrap gap-1.5">
          {LEVELS.map((l, i) => (
            <button
              key={l.name}
              type="button"
              onClick={() => pickLevel(i)}
              aria-pressed={i === level}
              className="rounded-full border px-3 py-1.5 text-sm font-bold pointer-coarse:min-h-11"
              style={{ borderColor: 'var(--line)', background: i === level ? tint(60) : 'var(--surface)' }}
            >
              {i + 1}. {l.name}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-1.5 text-xs font-bold uppercase" style={{ color: 'var(--ink-soft)' }}>
          2. Verb
        </legend>
        <div className="flex flex-wrap gap-1.5">
          {lvl.verbs.map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setVerb(v)}
              aria-pressed={v === verb}
              className="rounded-full border px-2.5 py-1 text-xs font-bold pointer-coarse:min-h-10"
              style={{ borderColor: 'var(--line)', background: v === verb ? tint(45) : 'var(--surface)' }}
            >
              {v}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-xs font-bold uppercase" style={{ color: 'var(--ink-soft)' }}>
          3. Who
          <input className={input} value={who} onChange={(e) => setWho(e.target.value)} placeholder="Learners" />
        </label>
        <label className="flex flex-col gap-1 text-xs font-bold uppercase" style={{ color: 'var(--ink-soft)' }}>
          4. What (content)
          <input className={input} value={what} onChange={(e) => setWhat(e.target.value)} placeholder="the causes of the First World War" />
        </label>
        <label className="flex flex-col gap-1 text-xs font-bold uppercase" style={{ color: 'var(--ink-soft)' }}>
          Condition (optional)
          <input className={input} value={condition} onChange={(e) => setCondition(e.target.value)} placeholder="using two primary sources" />
        </label>
        <label className="flex flex-col gap-1 text-xs font-bold uppercase" style={{ color: 'var(--ink-soft)' }}>
          Standard (optional)
          <input className={input} value={degree} onChange={(e) => setDegree(e.target.value)} placeholder="in a paragraph of at least five sentences" />
        </label>
      </div>

      <div className="rounded-[var(--radius)] border p-4" style={{ borderColor: 'var(--line)', background: tint(18) }} aria-live="polite">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <p className="eyebrow font-bold">your objective · {lvl.name.toLowerCase()}</p>
          <CopyButton src={objective} plain />
        </div>
        <p className="mt-1 text-base font-bold leading-relaxed">{objective}</p>
        <p className="mt-3 text-xs font-bold uppercase" style={{ color: 'var(--ink-soft)' }}>
          Questions to ask
        </p>
        <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm">
          {lvl.stems.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="mt-3 text-xs font-bold uppercase" style={{ color: 'var(--ink-soft)' }}>
          How to check it
        </p>
        <p className="mt-0.5 text-sm">{lvl.assess}</p>
      </div>
    </div>
  )
}
