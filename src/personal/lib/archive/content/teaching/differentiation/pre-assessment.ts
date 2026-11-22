import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'You cannot differentiate for what you do not know. Pre-assessment finds out what learners already know, can do and misunderstand before a unit or lesson, so you can plan who needs what. It should be quick, low-stakes and never graded.',
  nutshell: [
    'Check **prerequisites**, **existing knowledge of the new content**, and **likely misconceptions**.',
    'Keep it short: 5–15 minutes is usually enough.',
    'Use results to decide what to **pre-teach**, what to **skip** for some, and how to **group**.',
    'Tell learners it is not a test; guessing "I don’t know" is useful information.',
  ],
  sections: [
    {
      id: 'methods',
      title: 'Methods',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Diagnostic quiz', body: 'Five to ten questions spanning prerequisites to end-of-unit goals, with distractors based on misconceptions.' },
            { title: 'Brain dump', body: '"Write everything you know about volcanoes in 5 minutes."' },
            { title: 'KWL chart', body: 'What I **K**now, what I **W**ant to know, (later) what I **L**earned. Surfaces knowledge and interests (Ogle, 1986).' },
            { title: 'Concept map', body: 'Learners map the key terms they know. Shows connections and gaps.' },
            { title: 'Hinge question', body: 'A single diagnostic question on the most important prerequisite. See [hinge questions](@teaching/techniques/questioning/hinge-questions).' },
            { title: 'Existing data', body: 'Last unit’s test, exit tickets, notes from last year’s teacher.' },
          ],
        },
      ],
    },
    {
      id: 'using',
      title: 'Using the results',
      blocks: [
        {
          t: 'table',
          head: ['If you find…', 'Then…'],
          rows: [
            ['Many learners are missing a prerequisite', 'Teach it to the whole class first.'],
            ['A few learners are missing a prerequisite', 'Pre-teach it to a small group before the unit.'],
            ['Some learners already know most of the unit', '[Compact the curriculum](@teaching/differentiation/advanced): skip what they know; plan extension.'],
            ['A common misconception', 'Plan to confront it directly early in the unit.'],
            ['Varied interests', 'Build in [choices](@teaching/differentiation/choice) that draw on them.'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Give the same pre-assessment again at the end of the unit. Learners can see their own progress, which is motivating, and you see what stuck.',
        },
      ],
    },
  ],
  sources: [
    'Ogle, D. M. (1986). K-W-L: A teaching model that develops active reading of expository text. *The Reading Teacher, 39*(6), 564–570.',
    'Tomlinson, C. A., & Moon, T. R. (2013). *Assessment and student success in a differentiated classroom*. ASCD.',
  ],
  related: ['teaching/differentiation/foundations', 'teaching/assessment/formative-summative', 'teaching/differentiation/grouping'],
}

export default guide
