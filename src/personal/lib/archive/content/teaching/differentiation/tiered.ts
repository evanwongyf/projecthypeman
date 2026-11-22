import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A tiered assignment gives learners different versions of a task that all aim at the **same key learning goal**, at different levels of challenge or support. Everyone works on the important idea; the route differs.',
  nutshell: [
    'Start with one clear learning goal that everyone must reach.',
    'Design the middle tier first, then adjust up and down.',
    'Tiers vary in complexity, abstraction, support or open-endedness, not in amount.',
    'Assign tiers by current readiness on this topic, and move learners between tiers often.',
  ],
  sections: [
    {
      id: 'how',
      title: 'Designing a tiered task',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Fix the learning goal', body: 'What must every learner understand or be able to do? *"Explain how the setting creates mood in the story."*' },
            { title: 'Pre-assess', body: 'Find out where learners are with this goal right now.' },
            { title: 'Design the middle tier', body: 'The task you would normally set, aimed at most of the class.' },
            { title: 'Adjust down', body: 'Add support without removing the key thinking: a model, sentence stems, a shorter text, a graphic organiser.' },
            { title: 'Adjust up', body: 'Add complexity, not quantity: more abstract, more open, fewer supports, an extra variable to consider.' },
            { title: 'Assess against the same goal', body: 'Use the same success criteria for all tiers.' },
          ],
        },
      ],
    },
    {
      id: 'dials',
      title: 'Dials you can turn',
      lead: 'Tomlinson’s "equaliser".',
      blocks: [
        {
          t: 'table',
          head: ['From…', 'To…'],
          rows: [
            ['Concrete', 'Abstract'],
            ['Simple', 'Complex'],
            ['Single step', 'Multiple steps'],
            ['Structured', 'Open'],
            ['More support', 'More independence'],
            ['Familiar context', 'Unfamiliar context'],
            ['Slower pace', 'Faster pace'],
          ],
          caption: 'Tomlinson compares these to the sliders on a sound equaliser: move one or two for each tier.',
        },
      ],
    },
    {
      id: 'example',
      title: 'An example',
      blocks: [
        {
          t: 'example',
          title: 'Goal: calculate the area of compound shapes',
          lines: [
            { label: 'Tier 1', text: 'Compound shapes made of two rectangles, with the split line already drawn and a worked example on the sheet.' },
            { label: 'Tier 2', text: 'Compound shapes made of two or three rectangles; learners decide where to split them.' },
            { label: 'Tier 3', text: 'Shapes that include triangles and missing lengths learners must work out first; then design your own shape with a given area.' },
            { label: 'All', text: 'Explain your method in words at the end, and check your answer a second way.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'More is not harder',
          text: 'Giving faster learners twenty questions instead of ten is not a tier; it is a punishment for finishing. Change the kind of thinking, not the quantity.',
        },
      ],
    },
  ],
  sources: [
    'Tomlinson, C. A. (2014). *The differentiated classroom* (2nd ed.). ASCD.',
    'Pierce, R. L., & Adams, C. M. (2004). Tiered lessons: One way to differentiate mathematics instruction. *Gifted Child Today, 27*(2), 58–65.',
  ],
  related: ['teaching/differentiation/foundations', 'teaching/differentiation/scaffolding', 'teaching/differentiation/in-practice'],
}

export default guide
