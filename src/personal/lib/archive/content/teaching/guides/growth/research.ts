import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Education is full of claims about "what works". Some are well supported, some are overstated and some are myths. Knowing a little about how research is done helps you tell them apart and decide what is worth trying in your own classroom.',
  nutshell: [
    'Ask **how strong** the evidence is, not just whether there is some.',
    'Randomised controlled trials and meta-analyses give the strongest evidence of cause and effect, but they have limits.',
    '**Effect sizes** are useful but easy to misuse. Compare them with care.',
    'The best question is often "what works, for whom, under what conditions?"',
  ],
  sections: [
    {
      id: 'types',
      title: 'Kinds of evidence',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'What it shows', 'Limits'],
          rows: [
            ['Anecdote and testimony', '"It worked in my class."', 'Could be chance, enthusiasm, or other changes. No comparison.'],
            ['Correlational studies', 'Two things go together (schools that do X have higher results).', 'Cannot show that X caused the results.'],
            ['Quasi-experiments', 'A group doing X is compared with a group that is not, without random assignment.', 'Groups may differ in other ways.'],
            ['Randomised controlled trials (RCTs)', 'Learners or schools are randomly assigned to X or not. Differences can be attributed to X.', 'Expensive; may test one version in one context; results can shrink when scaled up.'],
            ['Systematic reviews and meta-analyses', 'Combine many studies to estimate an overall effect.', 'Only as good as the studies included; can mix very different interventions.'],
          ],
        },
      ],
    },
    {
      id: 'effect-sizes',
      title: 'Understanding effect sizes',
      blocks: [
        {
          t: 'p',
          text: 'An **effect size** (often Cohen’s *d*) expresses how big a difference is, in standard deviations. An effect size of 0.5 means the average learner in the intervention group scored half a standard deviation above the average learner in the comparison group, moving from the 50th to roughly the 69th percentile.',
        },
        {
          t: 'p',
          text: 'John Hattie’s *Visible Learning* (2009) ranked hundreds of influences by average effect size and suggested 0.4 as a "hinge point". This was hugely influential, and also heavily criticised. Effect sizes are affected by the age of learners, the kind of test used (researcher-designed tests give bigger effects than standardised ones), how long the study ran and how narrow the outcome was. Comparing them across studies can mislead (Simpson, 2017).',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Realistic benchmarks',
          text: 'Matthew Kraft (2020) looked at effects from large, well-designed school studies with standardised tests and suggested that effects under 0.05 are small, 0.05 to 0.20 medium, and above 0.20 large. By that standard, many interventions that sound modest are actually impressive.',
        },
        {
          t: 'p',
          text: 'The Education Endowment Foundation’s Teaching and Learning Toolkit translates effect sizes into "months of additional progress" and rates the strength of the evidence and the cost for each approach. It is a good starting point for comparing broad strategies.',
        },
      ],
    },
    {
      id: 'reading',
      title: 'Reading a study critically',
      blocks: [
        {
          t: 'checklist',
          items: [
            'What exactly was done? Could I describe the intervention to a colleague?',
            'Who were the learners, and are they like mine?',
            'What was it compared with? "Better than nothing" is a low bar.',
            'How was learning measured? A test designed by the researchers? A standardised test? Surveys of enjoyment?',
            'How big was the study, and how long did it last?',
            'Has it been replicated independently?',
            'Who funded it? Does anyone profit if it works?',
            'Do the headlines match what the study actually found?',
          ],
        },
      ],
    },
    {
      id: 'using',
      title: 'Using research in your classroom',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Start from a problem', body: 'What is not working for your learners? Research is most useful when it answers a real question.' },
            { title: 'Look for converging evidence', body: 'Principles supported by several kinds of evidence, such as [retrieval practice](@teaching/techniques/learning-strategies/retrieval-practice), are safer bets than single striking studies.' },
            { title: 'Understand the mechanism', body: 'Why does it work? Knowing the "active ingredient" helps you adapt it without losing what makes it effective.' },
            { title: 'Try it and gather evidence', body: 'Implement it carefully and look at your learners’ work to see whether it helped.' },
            { title: 'Watch for lethal mutations', body: 'Ideas often get distorted as they spread: "retrieval practice" becoming graded tests, or "growth mindset" becoming posters. Go back to the source.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Hattie, J. (2009). *Visible learning: A synthesis of over 800 meta-analyses relating to achievement*. Routledge.',
    'Simpson, A. (2017). The misdirection of public policy: Comparing and combining standardised effect sizes. *Journal of Education Policy, 32*(4), 450–466.',
    'Kraft, M. A. (2020). Interpreting effect sizes of education interventions. *Educational Researcher, 49*(4), 241–253.',
    'Education Endowment Foundation. *Teaching and Learning Toolkit*. educationendowmentfoundation.org.uk',
    'Willingham, D. T. (2012). *When can you trust the experts? How to tell good science from bad in education*. Jossey-Bass.',
  ],
  related: ['teaching/theories/myths', 'teaching/guides/growth/reflection'],
}

export default guide
