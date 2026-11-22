import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The charting method puts notes in a table. Each row is one thing you are studying; each column is a feature you want to compare. It is the fastest way to see similarities and differences, and it makes an excellent revision sheet.',
  nutshell: [
    'Rows for items (countries, theories, characters, diseases); columns for features (causes, dates, symptoms).',
    'Perfect when material covers several things with the same categories.',
    'Set up the columns before the lesson if you know the categories.',
    'Cover a column and test yourself on it.',
  ],
  sections: [
    {
      id: 'example',
      title: 'An example',
      blocks: [
        {
          t: 'table',
          head: ['Theory', 'Key figure', 'How learning happens', 'Classroom idea'],
          rows: [
            ['Behaviourism', 'Skinner', 'Behaviour shaped by consequences', 'Specific praise, routines'],
            ['Cognitivism', 'Atkinson & Shiffrin', 'Information processed and stored in memory', 'Small steps, retrieval'],
            ['Constructivism', 'Piaget', 'Learners build understanding from experience', 'Probe prior ideas'],
            ['Social constructivism', 'Vygotsky', 'Learning through talk and help (ZPD)', 'Scaffolding, pair talk'],
          ],
          caption: 'A chart comparing [learning theories](@teaching/theories).',
        },
      ],
    },
    {
      id: 'how',
      title: 'How to use it',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Identify the items', body: 'What are the things being compared?' },
            { title: 'Choose the columns', body: 'What features does each have? Look at headings, or the questions an exam would ask.' },
            { title: 'Fill as you go', body: 'Keep cells short: phrases, not sentences.' },
            { title: 'Look for patterns', body: 'Read down each column. What is similar? What stands out?' },
            { title: 'Self-test', body: 'Cover a column and recall each cell; or cover a row and describe the item fully.' },
          ],
        },
      ],
    },
  ],
  related: ['note-taking/methods/outline', 'writing/forms/compare-contrast', 'note-taking/methods/cornell'],
}

export default guide
