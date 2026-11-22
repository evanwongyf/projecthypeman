import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Notes that sit in a folder until the week before the exam are only half useful. The real value comes from studying them, and the best way to study notes is not to reread them but to turn them into questions and test yourself.',
  nutshell: [
    'Review within **24 hours** of taking notes, then spaced out over the following weeks.',
    'Turn every page into **questions**, then answer them from memory.',
    'Make flashcards from key facts and definitions.',
    'Reorganise notes into summaries, maps or charts to see the big picture.',
  ],
  sections: [
    {
      id: 'schedule',
      title: 'When to review',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Same day or next day', body: 'Tidy up, fill gaps, add questions. 10–15 minutes.' },
            { name: 'End of the week', body: 'Answer your questions from memory for the week’s notes.' },
            { name: 'Every few weeks', body: 'Quick self-test on older topics, mixed with new ones.' },
            { name: 'Before exams', body: 'Practice questions and past papers, using notes to check and fill gaps, not to reread.' },
          ],
          caption: 'An expanding schedule, following [spaced practice](@teaching/techniques/learning-strategies/spaced-practice).',
        },
      ],
    },
    {
      id: 'methods',
      title: 'Ways to study your notes',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Question and answer', body: 'Write questions in the margin; cover the notes and answer. The heart of the [Cornell method](@note-taking/methods/cornell).' },
            { title: 'Flashcards', body: 'Turn definitions, facts and key steps into cards. See [making good flashcards](@memory/flashcards).' },
            { title: 'Blurting', body: 'Look at a heading, then write everything you remember under it on a blank page. Check against your notes and fill gaps in another colour.' },
            { title: 'Condense', body: 'Reduce a week of notes to one page, then to an index card. Each reduction forces you to decide what matters.' },
            { title: 'Re-represent', body: 'Turn a list into a map, a text into a timeline, a set of notes into a comparison chart.' },
            { title: 'Teach it', body: 'Explain the page to someone else without looking. See [the Feynman technique](@teaching/techniques/learning-strategies/feynman).' },
          ],
        },
      ],
    },
  ],
  related: ['memory/active-recall', 'memory/flashcards', 'note-taking/methods/cornell', 'exams/revision-methods'],
}

export default guide
