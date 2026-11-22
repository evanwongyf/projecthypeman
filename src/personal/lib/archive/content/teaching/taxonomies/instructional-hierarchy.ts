import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The instructional hierarchy describes four stages every learner passes through with a new skill: getting it right, getting it fast, using it elsewhere, and adapting it. It is one of the most practical taxonomies in special education, because it tells you **what kind of teaching** a learner needs right now, and why a learner who “knows” something may still fail to use it.',
  nutshell: [
    'Haring and Eaton (1978): **acquisition → fluency → generalisation → adaptation**.',
    'Each stage needs a different kind of teaching: modelling and feedback, then timed practice, then varied contexts, then problem solving.',
    'Many learners with special needs stall at fluency or generalisation: they can do it slowly, with this teacher, on this worksheet, and nowhere else.',
    'Diagnose the stage from two numbers: **accuracy** and **rate** (correct responses per minute).',
  ],
  sections: [
    {
      id: 'levels',
      title: 'The four stages',
      blocks: [
        {
          t: 'levels',
          caption: 'Haring & Eaton’s instructional hierarchy',
          items: [
            { name: 'Acquisition', body: 'The learner is learning to perform the skill correctly. Accuracy is low or inconsistent. Teaching: demonstrate, model, prompt, give immediate corrective feedback, use errorless learning where errors are costly.', verbs: ['model', 'prompt', 'correct immediately', 'reinforce each correct response'] },
            { name: 'Fluency', body: 'Accurate but slow and effortful. Teaching: lots of brief, timed practice; charting rate; delayed feedback; reinforcement for speed and accuracy together. Fluency frees working memory for harder thinking.', verbs: ['drill', 'time', 'chart', 'beat your score'] },
            { name: 'Generalisation', body: 'Fluent here, but not with other people, materials or settings. Teaching: practise across many examples, people and places; teach the rule, not just the instance; plan for it rather than hoping.', verbs: ['vary materials', 'change settings', 'mix with other skills', 'common stimuli'] },
            { name: 'Adaptation', body: 'Can the learner change the skill to meet a new demand? Teaching: problem solving, simulations, open tasks, asking “how could you use this when…?”', verbs: ['solve', 'modify', 'invent', 'transfer'] },
          ],
        },
      ],
    },
    {
      id: 'diagnose',
      title: 'Diagnosing the stage',
      blocks: [
        { t: 'table', head: ['Accuracy', 'Speed', 'Elsewhere?', 'Stage', 'What to do next'], rows: [
          ['Below about 90%', 'Any', '-', 'Acquisition', 'Model, prompt, correct every error immediately; small steps'],
          ['90%+', 'Slow', '-', 'Fluency', 'Short timed drills, self-charting, precision teaching'],
          ['90%+', 'Fluent', 'No', 'Generalisation', 'New materials, new adults, real settings, mixed practice'],
          ['90%+', 'Fluent', 'Yes', 'Adaptation', 'Novel problems that need the skill to be changed'],
        ] },
        { t: 'math', tex: '\\text{rate} = \\frac{\\text{correct responses}}{\\text{minutes}}', caption: 'Rate per minute: the measure precision teaching charts daily', plain: 'A learner reading 20 sight words correctly in one minute today and 35 next week has made fluency progress even if accuracy was 100% both times.' },
      ],
    },
    {
      id: 'example',
      title: 'Worked example: number bonds to 10',
      blocks: [
        { t: 'example', title: 'One skill, four stages', lines: [
          { label: 'Acquisition', text: 'With counters, the teacher models 7 + 3, the pupil copies, errors are corrected straight away.' },
          { label: 'Fluency', text: 'One-minute flashcard sprints each day; the pupil colours a bar chart of correct answers and tries to beat yesterday.' },
          { label: 'Generalisation', text: 'Bonds appear in money (7p + 3p), on a number line, in word problems, with the teaching assistant and at home.' },
          { label: 'Adaptation', text: '“You have 10 stickers to share between two friends so one gets 4 more than the other. How?”' },
        ] },
        { t: 'callout', tone: 'tip', title: 'Why this matters for special needs', text: 'Autistic learners and learners with intellectual disability often need generalisation to be **taught explicitly**. Learners with ADHD or dyslexia may be accurate but slow, and need fluency work rather than more explanation.' },
      ],
    },
  ],
  sources: ['Haring, N. G. & Eaton, M. D. (1978). Systematic instructional procedures: an instructional hierarchy. In Haring et al., The Fourth R: Research in the Classroom.', 'Daly, E. J., Lentz, F. E. & Boyer, J. (1996). The instructional hierarchy: a conceptual model for understanding the effective components of reading interventions. School Psychology Quarterly 11(4).'],
  related: ['teaching/taxonomies/compare', 'teaching/special-education/strategies/executive-function'],
}

export default guide
