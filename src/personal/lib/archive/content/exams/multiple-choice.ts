import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Multiple-choice questions test knowledge, but also careful reading. A consistent strategy helps you avoid traps, make good guesses when you must, and use your time well.',
  nutshell: [
    'Read the question and **try to answer before looking at the options**.',
    'Read **every** option before choosing; the first plausible one may not be the best.',
    'Eliminate clearly wrong options, then choose between what is left.',
    'Changing your answer after careful thought more often helps than hurts.',
    'Unless wrong answers lose marks, never leave one blank.',
  ],
  sections: [
    {
      id: 'strategy',
      title: 'A strategy for each question',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Read the stem carefully', body: 'Watch for words like NOT, EXCEPT, BEST, MOST LIKELY, and qualifiers like always, never, usually.' },
            { title: 'Predict the answer', body: 'Cover the options and think of the answer yourself. This avoids being swayed by plausible distractors.' },
            { title: 'Read every option', body: 'Look for the one that matches your prediction, and check the others to be sure.' },
            { title: 'Eliminate', body: 'Cross out options you know are wrong. Each one removed improves your odds.' },
            { title: 'Choose and mark', body: 'Choose, and mark questions you are unsure about to revisit if time allows.' },
          ],
        },
      ],
    },
    {
      id: 'changing',
      title: 'Should you change your answer?',
      blocks: [
        {
          t: 'callout',
          tone: 'myth',
          title: 'Myth: always stick with your first instinct',
          text: 'Many learners believe their first answer is usually right. Research on answer changes has consistently found the opposite: when people change answers, they more often change from wrong to right. Kruger, Wirtz and Miller (2005) called the belief the "first instinct fallacy". We remember the painful times we changed a right answer to a wrong one more than the times we fixed a mistake.',
        },
        {
          t: 'p',
          text: 'Change your answer when you have a **reason**: you reread the question, remembered something, or spotted a clue elsewhere in the paper. Do not change it just because of vague anxiety.',
        },
      ],
    },
    {
      id: 'guessing',
      title: 'Smart guessing',
      blocks: [
        {
          t: 'list',
          items: [
            'Check the rules: if there is no penalty for wrong answers, always answer.',
            'Eliminate what you can first. Guessing from two options beats guessing from four.',
            'Be wary of absolutes ("always", "never") in options; real-world statements often have exceptions.',
            'If two options are opposites, one of them is often correct.',
            'Other questions in the paper may contain clues.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          text: 'Tricks like "the longest answer is usually right" work only on badly written tests. Good exams avoid those patterns, so knowledge beats tricks.',
        },
      ],
    },
  ],
  sources: [
    'Kruger, J., Wirtz, D., & Miller, D. T. (2005). Counterfactual thinking and the first instinct fallacy. *Journal of Personality and Social Psychology, 88*(5), 725–735.',
  ],
  related: ['exams/exam-technique', 'teaching/assessment/test-design'],
}

export default guide
