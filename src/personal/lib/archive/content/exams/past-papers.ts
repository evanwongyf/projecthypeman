import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Past papers are the closest thing to the real exam. They show you the kinds of questions asked, the way marks are awarded and where your gaps are. The value comes from how you use them: attempting honestly, marking strictly and learning from every mistake.',
  nutshell: [
    'Use past papers throughout revision, not only at the end.',
    'Early on: do questions topic by topic with notes nearby. Later: full papers, timed, closed book.',
    'Mark with the **mark scheme**, strictly. Read **examiner reports** for common mistakes.',
    'Turn every lost mark into a flashcard, a note or a topic to revisit.',
  ],
  sections: [
    {
      id: 'stages',
      title: 'Three stages',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Topic questions (early)', body: 'After revising a topic, do past questions on just that topic. Open notes is fine at first, to learn what good answers look like.' },
            { name: 'Mixed questions (middle)', body: 'Closed book, untimed, mixed topics. Focus on doing it properly and on exam technique.' },
            { name: 'Full timed papers (late)', body: 'Real exam conditions: timed, silent, no notes. Build stamina and timing.' },
          ],
        },
      ],
    },
    {
      id: 'marking',
      title: 'Marking and learning',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Mark strictly', body: 'Use the official mark scheme. Only award a mark if your answer clearly matches. Be your own toughest examiner.' },
            { title: 'Study the mark scheme', body: 'Notice the key words and points that earn marks, and how marks are split between knowledge, application and evaluation.' },
            { title: 'Read the examiner report', body: 'Examiners describe what strong and weak answers did, and the most common mistakes.' },
            { title: 'Log your mistakes', body: 'For each lost mark: was it a knowledge gap, misreading the question, poor technique, or running out of time?' },
            { title: 'Act on it', body: 'Knowledge gaps → flashcards and revision. Technique → practise that question type. Timing → more timed practice.' },
            { title: 'Redo', body: 'A week later, redo the questions you got wrong.' },
          ],
        },
        {
          t: 'example',
          title: 'A mistake log',
          lines: [
            { label: 'Q3b (2/4)', text: 'Knowledge gap: forgot role of ribosomes → flashcard made.' },
            { label: 'Q5 (3/6)', text: 'Technique: described but did not evaluate → practise "evaluate" questions.' },
            { label: 'Q7 (0/8)', text: 'Timing: did not reach it → practise timed; move on sooner.' },
          ],
        },
      ],
    },
    {
      id: 'tips',
      title: 'Tips',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Save a few recent papers for full timed practice near the exam.',
            'Look for patterns in how questions are phrased.',
            'Practise the question types you find hardest.',
          ],
          dont: [
            'Look at the mark scheme before attempting a question.',
            'Mark generously ("they would probably accept that").',
            'Just note the score and move on without studying mistakes.',
            'Assume the exam will repeat past questions exactly.',
          ],
        },
      ],
    },
  ],
  related: ['exams/exam-technique', 'exams/after', 'writing/essentials/the-question'],
}

export default guide
