import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Robert and Elizabeth Bjork noticed a paradox: conditions that make learning feel slow and difficult often produce better long-term memory, while conditions that make it feel smooth produce rapid forgetting. They called the helpful kind “desirable difficulties”. Spacing, retrieval, interleaving and variation are all examples.',
  nutshell: [
    'Every memory has **storage strength** (how well learned) and **retrieval strength** (how accessible right now). They can differ.',
    'Practice that keeps retrieval strength high (massed, blocked) makes performance look good but builds storage slowly.',
    '**Interleaving** problem types: Rohrer and Taylor (2007) found 63% versus 20% on a delayed test compared with blocked practice.',
    'Difficulties are desirable only if the learner **can still succeed** with effort.',
  ],
  sections: [
    {
      id: 'strengths',
      title: 'Storage and retrieval strength',
      blocks: [
        { t: 'table', head: ['', 'Low retrieval strength', 'High retrieval strength'], rows: [
          ['**High storage strength**', 'A well-learned fact you cannot recall this minute (your old phone number)', 'Your own name'],
          ['**Low storage strength**', 'Something you barely learned and have forgotten', 'A phone number you just read: easy now, gone tomorrow'],
        ] },
        { t: 'p', text: 'The key claim of the Bjorks’ “new theory of disuse” is that the gain in storage strength from a study event is **larger when retrieval strength is low**. Recalling something that is nearly forgotten, with effort, builds more lasting memory than recalling something that is fresh. That is why spacing and testing work.' },
      ],
    },
    {
      id: 'interleaving',
      title: 'Interleaving',
      blocks: [
        { t: 'bars', title: 'Interleaved versus blocked maths practice (Rohrer and Taylor, 2007)', unit: '%', decimals: 0, max: 100, items: [
          { label: 'Blocked: practice performance', value: 89, group: 'During practice' },
          { label: 'Interleaved: practice performance', value: 60 },
          { label: 'Blocked: test one week later', value: 20, group: 'One week later' },
          { label: 'Interleaved: test one week later', value: 63 },
        ], caption: 'Students learned to find volumes of four solids. Blocked practice looked better during practice and was much worse a week later.' },
        { t: 'p', text: 'Blocked practice (AAAA BBBB CCCC) lets learners repeat the same method without choosing it. Interleaved practice (ABCBCACAB) forces them to work out which method each problem needs, the skill that exams and real life demand.' },
      ],
    },
    {
      id: 'list',
      title: 'Difficulties that help, and ones that do not',
      blocks: [
        { t: 'dodont', do: [
          'Spacing study over days',
          'Testing instead of rereading',
          'Interleaving related problem types',
          'Varying practice conditions (different contexts, formats, examples)',
          'Generating answers before being shown',
        ], dont: [
          'Making material confusing or badly explained',
          'Tasks far beyond the learner’s current ability',
          'Distractions and noise',
          'Unreadable fonts (the “disfluency” benefit has not replicated reliably)',
        ] },
        { t: 'callout', tone: 'warn', title: 'Why learners avoid them', text: 'Learners judge their learning by how fluent it feels. Desirable difficulties feel worse during study, so learners (and teachers) rate them as less effective even when tests show they work better. Show students the data.' },
      ],
    },
  ],
  sources: [
    'Bjork, R. A. (1994). Memory and metamemory considerations in the training of human beings. In Metacognition: Knowing about Knowing. MIT Press.',
    'Bjork, R. A., & Bjork, E. L. (1992). A new theory of disuse and an old theory of stimulus fluctuation. In From Learning Processes to Cognitive Processes. Erlbaum.',
    'Rohrer, D., & Taylor, K. (2007). The shuffling of mathematics problems improves learning. Instructional Science, 35, 481–498.',
    'Kornell, N., & Bjork, R. A. (2008). Learning concepts and categories: Is spacing the “enemy of induction”? Psychological Science, 19(6), 585–592.',
  ],
  related: ['teaching/techniques/learning-strategies/interleaving', 'attention/retention/retrieval-practice', 'attention/retention/spacing'],
}

export default guide
