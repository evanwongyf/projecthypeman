import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Studying with others can be powerful: explaining to a friend, being quizzed and hearing different approaches all help learning. It can also turn into a social hour. A little structure keeps a study group useful.',
  nutshell: [
    'Groups work best for **quizzing each other**, **explaining**, and **comparing solutions**.',
    'Everyone should **prepare alone first**; groups are for testing and deepening, not first learning.',
    'Keep groups **small** (2–4) with a clear plan and time limit.',
    'Explaining to others is one of the best ways to learn yourself.',
  ],
  sections: [
    {
      id: 'activities',
      title: 'What to do together',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Quiz each other', body: 'Take turns asking questions from your notes or flashcards. The asker checks answers.' },
            { title: 'Teach a topic', body: 'Each person prepares one topic and teaches it to the group. See [the Feynman technique](@teaching/techniques/learning-strategies/feynman).' },
            { title: 'Compare solutions', body: 'Everyone solves the same problem alone, then compares methods and finds errors.' },
            { title: 'Explain the hard bits', body: 'Bring your "?" list; see if someone else can explain it.' },
            { title: 'Mark each other’s answers', body: 'Swap practice answers and mark with the mark scheme.' },
            { title: 'Predict the exam', body: 'Write likely questions for each other, then answer them.' },
          ],
        },
      ],
    },
    {
      id: 'structure',
      title: 'A 60-minute session',
      blocks: [
        {
          t: 'example',
          title: 'Study group plan',
          lines: [
            { label: '0–5', text: 'Agree the topic and goal for the session.' },
            { label: '5–20', text: 'Quick-fire quizzing on last session’s topic.' },
            { label: '20–45', text: 'Each person teaches a 5-minute mini-lesson on part of today’s topic; others ask questions.' },
            { label: '45–55', text: 'Everyone answers one exam question alone, then compare.' },
            { label: '55–60', text: 'Agree what everyone will prepare for next time.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Prepare before you meet.', 'Set a time limit and an agenda.', 'Put phones away.', 'Make sure everyone gets to explain, not just listen.'],
          dont: ['Use the group to learn material for the first time.', 'Let one person do all the explaining.', 'Just reread notes together.'],
        },
      ],
    },
  ],
  related: ['teaching/techniques/learning-strategies/feynman', 'memory/active-recall', 'teaching/techniques/active-learning/cooperative'],
}

export default guide
