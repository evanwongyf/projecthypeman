import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The biggest practical obstacle to differentiation is management: how can one teacher run several activities at once without chaos, and without working every evening? The answer is routines that make learners independent, a few reusable structures, and honest planning arithmetic.',
  nutshell: [
    'Teach the **routines** before the content: getting help, moving, finishing early.',
    '**Anchor activities** keep everyone productive when the teacher is busy.',
    'The **teacher table** is the engine: small-group instruction where it is needed most.',
    'Plan **rotation times** with simple arithmetic, and keep the number of versions small.',
  ],
  sections: [
    {
      id: 'routines',
      title: 'Routines to teach first',
      blocks: [
        { t: 'checklist', items: [
          'How to get help when the teacher is with a group (help card on desk, ask three peers, hint envelope)',
          'What to do when you finish (the anchor activity list)',
          'How to move between groups and stations (signal, time, route)',
          'Noise levels for each kind of work (a visible 0–3 scale)',
          'Where materials are and how to return them',
          'How to record progress (a tracker or playlist)',
        ] },
        { t: 'callout', tone: 'tip', title: 'Practise like a fire drill', text: 'Rehearse routines with simple content in the first weeks. Time the transitions, praise improvement, and re-teach when routines slip. A class that moves to stations in 30 seconds gains hours over a term.' },
      ],
    },
    {
      id: 'rotation',
      title: 'Rotation timing',
      blocks: [
        {
          t: 'math',
          tex: String.raw`t = \frac{T - T_{\text{open}} - T_{\text{close}} - (k-1)\,s}{k}`,
          caption: 'Time per station when k groups rotate through k stations, one of which is the teacher table.',
          plain: 'Take the lesson length, subtract the time for the opening and closing, subtract the time lost moving between stations (one switch fewer than the number of stations), and share what is left equally between the stations. This tells you whether a rotation is realistic or whether to use fewer stations or two lessons.',
          where: [
            { sym: 't', def: 'minutes at each station' },
            { sym: 'T', def: 'lesson length' },
            { sym: String.raw`T_{\text{open}}, T_{\text{close}}`, def: 'minutes for the whole-class start and end' },
            { sym: 'k', def: 'number of stations (and groups)' },
            { sym: 's', def: 'minutes per transition' },
          ],
          syntax: [
            { sym: '(k − 1)', say: 'k stations need k − 1 moves' },
          ],
          worked: {
            title: 'A 60-minute maths lesson with four stations',
            steps: [
              String.raw`\(T = 60\), \(T_{\text{open}} = 8\), \(T_{\text{close}} = 5\), \(k = 4\), \(s = 2\).`,
              String.raw`Transitions: \((4-1) \times 2 = 6\) minutes.`,
              String.raw`Available: \(60 - 8 - 5 - 6 = 41\) minutes.`,
              String.raw`\(t = 41/4 = 10.25\) minutes per station.`,
              String.raw`With three stations instead: \(t = (60 - 13 - 4)/3 = 43/3 \approx 14.3\) minutes.`,
            ],
            why: [
              'set the lesson parts',
              'four stations need three moves',
              'what is left for station work',
              'shared equally',
              'fewer stations give each group more teacher time and fewer transitions',
            ],
            answer: 'About 10 minutes per station with four, or 14 with three. Ten minutes at the teacher table is enough for a focused reteach; if not, run the rotation over two lessons.',
          },
        },
      ],
    },
    {
      id: 'workload',
      title: 'Keeping the workload sustainable',
      blocks: [
        { t: 'dodont', do: [
          'Differentiate one lesson a week well before trying every lesson',
          'Use two tiers, not five',
          'Reuse structures (the same choice-board template each unit)',
          'Share tiered resources with colleagues in a department bank',
          'Use universal scaffolds that any learner can pick up',
          'Let exit tickets plan tomorrow’s groups in five minutes',
        ], dont: [
          'Write an individual worksheet for every learner',
          'Mark three different products with three rubrics every night',
          'Change groups so often that nobody knows where to go',
        ] },
        { t: 'example', title: 'A five-minute planning routine using exit tickets', lines: [
          { label: '1', text: 'Sort tickets into three piles: got it, partly, not yet (2 minutes).' },
          { label: '2', text: '“Not yet” pile = tomorrow’s teacher-table group.' },
          { label: '3', text: '“Got it” pile = extension task from the bank.' },
          { label: '4', text: '“Partly” pile = practice with hint cards.' },
          { label: '5', text: 'Write the groups on the board for tomorrow (1 minute).' },
        ] },
      ],
    },
  ],
  sources: [
    'Tomlinson, C. A., & Imbeau, M. B. (2010). Leading and Managing a Differentiated Classroom. ASCD.',
    'Lemov, D. (2021). Teach Like a Champion 3.0. Jossey-Bass.',
  ],
  related: ['teaching/differentiation/grouping', 'teaching/differentiation/strategy-bank', 'teaching/differentiation/optimal-and-non-optimal'],
}

export default guide
