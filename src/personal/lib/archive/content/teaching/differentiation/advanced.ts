import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Learners who already know the material, or learn it very fast, also need to be taught. Without challenge they can become bored, disengaged or used to succeeding without effort, which leaves them unprepared when work finally gets hard.',
  nutshell: [
    'Find out what they already know, and do not make them relearn it (**curriculum compacting**).',
    'Stretch through **depth and complexity**, not just more work or faster worksheets.',
    '**Acceleration** (moving ahead a grade or subject) has strong evidence for suitable learners.',
    'Advanced learners still need explicit teaching, feedback and struggle.',
  ],
  sections: [
    {
      id: 'options',
      title: 'Main approaches',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Curriculum compacting', body: 'Pre-assess. If a learner has mastered content, skip the practice they do not need and use the time for enrichment or acceleration (Renzulli & Reis).' },
            { title: 'Enrichment', body: 'Broader or deeper work on the same topic: independent research, real problems, primary sources, competitions, mentors.' },
            { title: 'Depth and complexity', body: 'Ask for patterns, rules, ethics, multiple perspectives, change over time, links across subjects (Kaplan’s depth and complexity prompts).' },
            { title: 'Acceleration', body: 'Moving through content faster: subject acceleration, early entry, grade skipping. Large reviews find strong academic benefits and no general social harm for carefully chosen learners (Colangelo et al., 2004; Steenbergen-Hu et al., 2016).' },
            { title: 'Cluster grouping', body: 'Placing several advanced learners together in a class, with a teacher prepared to challenge them.' },
            { title: 'Open tasks', body: 'Tasks with a low floor and high ceiling: everyone can start, but there is no upper limit on sophistication.' },
          ],
        },
      ],
    },
    {
      id: 'prompts',
      title: 'Prompts for depth',
      blocks: [
        {
          t: 'table',
          head: ['Prompt', 'Example (the water cycle)'],
          rows: [
            ['Patterns', 'What patterns do you see in where rain falls around the world?'],
            ['Rules', 'What rules govern when water evaporates faster?'],
            ['Ethics', 'Who should control water in a river that crosses three countries?'],
            ['Multiple perspectives', 'How would a farmer, a city planner and an ecologist each see a drought?'],
            ['Change over time', 'How might the water cycle change as the climate warms?'],
            ['Across disciplines', 'How has the water cycle shaped where cities were built?'],
            ['Unanswered questions', 'What do scientists still not understand about clouds?'],
          ],
        },
      ],
    },
    {
      id: 'pitfalls',
      title: 'Pitfalls',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Pre-assess and let learners skip what they have mastered.',
            'Give work that requires genuine struggle and teach them how to handle it.',
            'Plan extension as carefully as the core lesson.',
            'Watch for advanced learners who are also disadvantaged, have special needs or are learning English; they are often missed.',
          ],
          dont: [
            'Give "more of the same" as extension.',
            'Use advanced learners as unpaid teaching assistants for the rest of the class.',
            'Assume they will be fine without teaching.',
            'Praise how easily they succeed (see [motivation](@teaching/theories/motivation)).',
          ],
        },
      ],
    },
  ],
  sources: [
    'Reis, S. M., & Renzulli, J. S. (1992). Using curriculum compacting to challenge the above-average. *Educational Leadership, 50*(2), 51–57.',
    'Colangelo, N., Assouline, S. G., & Gross, M. U. M. (2004). *A nation deceived: How schools hold back America’s brightest students*. University of Iowa.',
    'Steenbergen-Hu, S., Makel, M. C., & Olszewski-Kubilius, P. (2016). What one hundred years of research says about the effects of ability grouping and acceleration. *Review of Educational Research, 86*(4), 849–899.',
    'Kaplan, S. N. (2009). Layering differentiated curricula for the gifted and talented. In F. Karnes & S. Bean (Eds.), *Methods and materials for teaching the gifted*. Prufrock.',
  ],
  related: ['teaching/differentiation/tiered', 'teaching/differentiation/grouping', 'teaching/taxonomies/dok', 'teaching/special-education/needs/twice-exceptional'],
}

export default guide
