import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'A survey looks simple: write some questions, send them out. But small choices in wording, answer options and who you ask can completely change the results. A few principles help you collect data you can trust.',
  nutshell: [
    'Start from your **research question**; every survey question should help answer it.',
    'Write **clear, neutral, single-idea** questions.',
    'Give **balanced** answer options, including "don’t know" or "other" where sensible.',
    'Think about **who** answers: a biased sample gives biased results.',
    '**Pilot** the survey with a few people before sending it out.',
  ],
  sections: [
    {
      id: 'wording',
      title: 'Writing questions',
      blocks: [
        {
          t: 'table',
          head: ['Problem', 'Bad question', 'Better'],
          rows: [
            ['Leading', 'Don’t you agree that homework is stressful?', 'How stressful do you find homework? (Not at all … Extremely)'],
            ['Double-barrelled', 'How satisfied are you with the food and the prices in the canteen?', 'Two questions: one about food, one about prices.'],
            ['Vague', 'Do you exercise regularly?', 'On how many days in the last week did you exercise for at least 30 minutes?'],
            ['Jargon', 'How do you rate your metacognitive strategies?', 'How often do you check your own understanding while studying?'],
            ['Loaded', 'Should the school stop wasting money on sports?', 'How should the school split its budget between sports and other activities?'],
            ['Unbalanced options', 'Good / Very good / Excellent', 'Very poor / Poor / Neutral / Good / Very good'],
          ],
        },
      ],
    },
    {
      id: 'types',
      title: 'Question types',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Closed', def: 'Fixed options (yes/no, multiple choice). Easy to analyse; may miss nuance.' },
            { term: 'Likert scale', def: 'Agreement or frequency on a 5- or 7-point scale. Include a clear midpoint and label each point.' },
            { term: 'Ranking', def: 'Order options by preference. Keep lists short.' },
            { term: 'Open', def: 'Free text. Rich but slow to analyse; use sparingly.' },
          ],
        },
      ],
    },
    {
      id: 'sampling',
      title: 'Who you ask',
      blocks: [
        {
          t: 'p',
          text: 'If you only survey your friends, or only people who choose to respond, your results describe them, not everyone. Random sampling is ideal; when that is impossible, describe who responded and be careful about generalising (see [reading numbers](@thinking/numbers)).',
        },
        {
          t: 'checklist',
          items: [
            'Every question links to my research question.',
            'Questions are clear, neutral and ask one thing each.',
            'Answer options are balanced and cover all reasonable answers.',
            'The survey is short enough to finish in a few minutes.',
            'I explain the purpose, and that answers are anonymous if they are.',
            'I have piloted it with 3–5 people and fixed confusing questions.',
            'I know how I will analyse each question.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Ethics',
          text: 'Get permission where required (for school projects, check with your teacher), do not collect personal data you do not need, and keep responses secure.',
        },
      ],
    },
  ],
  sources: [
    'Fowler, F. J. (2014). *Survey research methods* (5th ed.). Sage.',
    'Dillman, D. A., Smyth, J. D., & Christian, L. M. (2014). *Internet, phone, mail, and mixed-mode surveys: The tailored design method* (4th ed.). Wiley.',
  ],
  related: ['research/research-question', 'thinking/numbers', 'thinking/scientific-thinking'],
}

export default guide
