import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'When a test comes back, it is tempting to look at the grade and move on. But a returned test is some of the most useful feedback you will ever get about how you study. A few minutes of reflection can change your results next time.',
  nutshell: [
    'Look past the grade: **why** did you lose each mark?',
    'Sort mistakes into knowledge gaps, misreading, technique and time.',
    'Compare how you **prepared** with how you **performed**.',
    'Decide one or two specific changes for next time.',
  ],
  sections: [
    {
      id: 'wrapper',
      title: 'An exam wrapper',
      lead: 'A short reflection sheet (Lovett, 2013).',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'How did you prepare?', body: 'How many hours? Which methods: rereading, flashcards, past papers? When did you start?' },
            { title: 'Where did you lose marks?', body: 'Go through every lost mark and label it.' },
            { title: 'What does the pattern show?', body: 'Mostly knowledge gaps? Misreading questions? Running out of time?' },
            { title: 'What will you do differently?', body: 'One or two specific, realistic changes.' },
          ],
        },
        {
          t: 'table',
          head: ['Type of mistake', 'Example', 'Next time'],
          rows: [
            ['Knowledge gap', 'Did not know the formula for momentum', 'Flashcards on key formulas; start revision earlier'],
            ['Misread question', 'Answered "describe" when it said "explain"', 'Underline command words'],
            ['Technique', 'Did not show working, lost method marks', 'Practise setting out working'],
            ['Careless error', 'Copied a number wrongly', 'Leave 5 minutes to check'],
            ['Time', 'Did not finish the last question', 'Timed practice; move on from stuck questions'],
          ],
        },
      ],
    },
    {
      id: 'mindset',
      title: 'Treating results as information',
      blocks: [
        {
          t: 'p',
          text: 'A disappointing result is information about your preparation, not a verdict on your ability. If you studied mostly by rereading, the fix is to change methods ([revision methods that work](@exams/revision-methods)), not to conclude you are "bad at" the subject. See [motivation](@teaching/theories/motivation) on how explanations for failure affect effort.',
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Redo the questions you got wrong a week later, without looking at the answers. If you can do them now, the learning stuck.',
        },
      ],
    },
  ],
  sources: [
    'Lovett, M. C. (2013). Make exams worth more than the grade: Using exam wrappers to promote metacognition. In M. Kaplan et al. (Eds.), *Using reflection and metacognition to improve student learning* (pp. 18–52). Stylus.',
  ],
  related: ['exams/past-papers', 'teaching/techniques/learning-strategies/metacognition', 'exams/revision-methods'],
}

export default guide
