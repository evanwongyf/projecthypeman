import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FORMATS } from '../../lib/archive/references/formats'
import type { FormatId } from '../../lib/archive/references/formats'
import { ChecklistStep, TemplatesStep } from './StepsThree'
import { BuildStep, CompareStep, InTextStep } from './StepsTwo'
import { PapersStep, StyleStep, WhyStep } from './StepsOne'
import { Step, StepRail, useActiveStep } from './Step'
import { StyleBar } from './StyleBar'
import { MarkRead } from './MarkRead'
import { noteGuideOpened } from '../../lib/archive/progress'

const STEPS = [
  { id: 'why', title: 'What a reference does', lead: 'Two parts that work as a pair.' },
  { id: 'style', title: 'Choose your style', lead: 'Use the one your teacher asked for.' },
  { id: 'papers', title: 'Meet the two papers', lead: 'The source you read and the essay you write.' },
  { id: 'in-text', title: 'Cite it in your paper', lead: 'Add a short mark after every borrowed idea.' },
  { id: 'entry', title: 'Build the reference', lead: 'Turn the source details into a list entry.' },
  { id: 'compare', title: 'Compare all styles', lead: 'The same source in six styles.' },
  { id: 'templates', title: 'Templates for every source', lead: 'Fill-in skeletons for eight kinds of source.' },
  { id: 'check', title: 'Final checklist', lead: 'Check it over before you hand it in.' },
]

const STORAGE_KEY = 'studytubby:citation-style'

function loadStyle(): FormatId {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && FORMATS.some((f) => f.id === saved)) return saved as FormatId
  } catch {
    // storage can be unavailable (private mode); fall back to the default
  }
  return 'apa'
}

export function ReferencesWalkthrough() {
  const [format, setFormatState] = useState<FormatId>(loadStyle)
  const active = useActiveStep(STEPS.map((s) => s.id))
  useEffect(() => noteGuideOpened('research/references'), [])

  function setFormat(id: FormatId) {
    setFormatState(id)
    try {
      localStorage.setItem(STORAGE_KEY, id)
    } catch {
      // not being able to remember the choice is fine
    }
  }

  const stepProps = (i: number) => ({
    n: i + 1,
    id: STEPS[i].id,
    title: STEPS[i].title,
    lead: STEPS[i].lead,
    next: STEPS[i + 1] ? { id: STEPS[i + 1].id, title: STEPS[i + 1].title } : undefined,
  })

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link to="/personal/archive/research" className="eyebrow font-bold">
          ← research
        </Link>
        <h1 className="mt-1 text-3xl sm:text-4xl" style={{ fontFamily: 'var(--font-hero)' }}>
          References
        </h1>
        <p className="mt-2 max-w-2xl text-sm sm:text-base" style={{ color: 'var(--ink-soft)' }}>
          How to credit the sources you use. We follow one example from the paper you read, to the sentence in your essay, to the reference at the end, then give you a fill-in template for every kind of source.
        </p>
        <p className="eyebrow mt-2 font-bold">about 12 minutes · 8 steps</p>
      </div>

      <StyleBar value={format} onChange={setFormat} />

      <div className="grid gap-8 lg:grid-cols-[13rem_minmax(0,1fr)]">
        <StepRail steps={STEPS} active={active} />

        <div className="flex min-w-0 flex-col gap-12">
          <Step {...stepProps(0)}>
            <WhyStep />
          </Step>
          <Step {...stepProps(1)}>
            <StyleStep value={format} onChange={setFormat} />
          </Step>
          <Step {...stepProps(2)}>
            <PapersStep />
          </Step>
          <Step {...stepProps(3)}>
            <InTextStep format={format} />
          </Step>
          <Step {...stepProps(4)}>
            <BuildStep format={format} />
          </Step>
          <Step {...stepProps(5)}>
            <CompareStep format={format} onPick={setFormat} />
          </Step>
          <Step {...stepProps(6)}>
            <TemplatesStep format={format} />
          </Step>
          <Step {...stepProps(7)}>
            <ChecklistStep />
          </Step>
          <MarkRead path="research/references" color="var(--orange)" />
        </div>
      </div>
    </div>
  )
}
