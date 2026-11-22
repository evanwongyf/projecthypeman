import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Cognitive biases are systematic patterns in how human thinking goes wrong. They are not signs of stupidity; they come from mental shortcuts that usually serve us well. Knowing them does not make you immune, but it helps you catch them at important moments.',
  nutshell: [
    'Daniel Kahneman describes fast, automatic **System 1** thinking and slow, effortful **System 2** thinking. Biases mostly come from System 1.',
    '**Confirmation bias**: we notice and favour evidence for what we already believe.',
    '**Planning fallacy**: we underestimate how long tasks will take. (Yes, including revision.)',
    'The best defence: slow down on important decisions, and deliberately consider the opposite.',
  ],
  sections: [
    {
      id: 'systems',
      title: 'Two systems',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'System 1: fast', body: 'Automatic, effortless, intuitive. Recognising a face, reading a simple word, reacting to a sudden noise. Usually right, occasionally badly wrong.' },
            { title: 'System 2: slow', body: 'Deliberate, effortful, logical. Solving 17 × 24, checking an argument. Accurate but lazy: it often accepts System 1’s answer without checking.' },
          ],
        },
        {
          t: 'example',
          title: 'Try it',
          lines: [
            { label: 'Puzzle', text: 'A bat and a ball cost £1.10 together. The bat costs £1.00 more than the ball. How much does the ball cost?' },
            { label: 'System 1', text: '10p. (Most people’s first thought.)' },
            { label: 'System 2', text: 'If the ball is 10p, the bat is £1.10, total £1.20. The ball is 5p, the bat £1.05.' },
          ],
        },
      ],
    },
    {
      id: 'common',
      title: 'Common biases',
      blocks: [
        {
          t: 'table',
          head: ['Bias', 'What happens', 'In studying'],
          rows: [
            ['Confirmation bias', 'Seeking and favouring evidence that fits what we already believe.', 'Only searching for sources that support your essay argument.'],
            ['Anchoring', 'Relying too much on the first number or idea we hear.', 'Your first estimate of how long a project takes shapes all later planning.'],
            ['Availability', 'Judging how likely something is by how easily examples come to mind.', 'Overestimating plane crash risk after news coverage.'],
            ['Planning fallacy', 'Underestimating time and effort, even when past tasks overran.', 'Leaving an essay until the last two days.'],
            ['Hindsight bias', '"I knew it all along", after the fact.', 'Thinking an exam question was obvious once you have seen the answer.'],
            ['Sunk cost', 'Continuing something because of what you have already invested.', 'Sticking with a failing study method because you spent hours on it.'],
            ['Overconfidence', 'Being more certain than accuracy justifies.', 'Feeling ready for an exam after rereading notes (see [metacognition](@teaching/techniques/learning-strategies/metacognition)).'],
            ['Framing', 'Reacting differently to the same information presented differently.', '"90% survival" feels better than "10% mortality".'],
            ['Survivorship bias', 'Focusing on successes that are visible and ignoring failures that are not.', '"That dropout became a billionaire, so university is pointless."'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'A note on Dunning–Kruger',
          text: 'Kruger and Dunning (1999) found that people who performed worst on tests tended to overestimate their scores the most. The popular version, "stupid people think they are geniuses", exaggerates it, and some of the effect may be a statistical artefact. The useful lesson stands: skill at a task and skill at judging your skill often go together.',
        },
      ],
    },
    {
      id: 'debiasing',
      title: 'Catching biases',
      blocks: [
        {
          t: 'checklist',
          items: [
            'For important decisions, slow down and write out your reasoning.',
            'Ask "what would change my mind?" and look for that evidence.',
            'Consider the opposite: argue the other side as well as you can.',
            'Use past data: how long did similar tasks actually take?',
            'Ask someone who disagrees for their view.',
            'Separate the decision from what you have already invested.',
          ],
        },
        {
          t: 'p',
          text: 'In a classic study, simply asking people to "consider the opposite" reduced biased reasoning more than asking them to be fair and unbiased (Lord, Lepper & Preston, 1984).',
        },
      ],
    },
  ],
  sources: [
    'Kahneman, D. (2011). *Thinking, fast and slow*. Farrar, Straus and Giroux.',
    'Tversky, A., & Kahneman, D. (1974). Judgment under uncertainty: Heuristics and biases. *Science, 185*(4157), 1124–1131.',
    'Buehler, R., Griffin, D., & Ross, M. (1994). Exploring the "planning fallacy". *Journal of Personality and Social Psychology, 67*(3), 366–381.',
    'Kruger, J., & Dunning, D. (1999). Unskilled and unaware of it. *Journal of Personality and Social Psychology, 77*(6), 1121–1134.',
    'Lord, C. G., Lepper, M. R., & Preston, E. (1984). Considering the opposite: A corrective strategy for social judgment. *Journal of Personality and Social Psychology, 47*(6), 1231–1243.',
  ],
  related: ['thinking/critical-thinking', 'thinking/fallacies', 'habits/time'],
}

export default guide
