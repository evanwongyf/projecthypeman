import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'By the night before, the real work is done. What you do now is about arriving rested, calm and ready, and avoiding small disasters like a forgotten calculator or a late bus.',
  nutshell: [
    'Light review only the night before. No new topics.',
    'Sleep matters more than one more hour of revision.',
    'Pack your bag the night before.',
    'Eat something, arrive early, and use the first minutes in the exam to plan.',
  ],
  sections: [
    {
      id: 'night',
      title: 'The night before',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Do a short, calm review: flashcards, a one-page summary, a quick blurt.',
            'Check the exam time, room and what you are allowed to bring.',
            'Pack your bag and lay out clothes.',
            'Wind down: something relaxing, away from screens, before bed.',
            'Go to bed at your usual time.',
          ],
          dont: [
            'Pull an all-nighter (see [sleep and memory](@memory/sleep-and-body)).',
            'Start a topic you have never studied.',
            'Spend the evening on group chats comparing how unprepared everyone is.',
          ],
        },
        {
          t: 'checklist',
          items: [
            'Exam time, date and room checked',
            'Candidate number or ID',
            'Two black pens, pencil, eraser, ruler',
            'Calculator with fresh batteries (if allowed)',
            'Other equipment: protractor, compass, highlighter',
            'Clear water bottle (if allowed)',
            'Watch (non-smart) if allowed',
            'Travel plan with extra time',
          ],
        },
      ],
    },
    {
      id: 'morning',
      title: 'The morning',
      blocks: [
        {
          t: 'list',
          items: [
            'Eat a breakfast you are used to; do not try something new.',
            'A short walk or light exercise can help with nerves and alertness.',
            'Glance over a summary sheet if it helps, but do not cram.',
            'Arrive early enough to find the room without rushing.',
            'Use the bathroom before you go in.',
          ],
        },
      ],
    },
    {
      id: 'first-minutes',
      title: 'The first minutes in the room',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Breathe', body: 'A few slow breaths. Nerves are normal; see [handling exam stress](@exams/anxiety).' },
            { title: 'Read the instructions', body: 'Number of questions, choices, time.' },
            { title: 'Plan your time', body: 'Minutes per mark; target times for each section. See [exam technique](@exams/exam-technique).' },
            { title: 'Brain dump if allowed', body: 'Jot key formulas or mnemonics on scrap paper as soon as writing is allowed.' },
            { title: 'Start with a confident question', body: 'Build momentum.' },
          ],
        },
      ],
    },
  ],
  related: ['exams/anxiety', 'exams/exam-technique', 'memory/sleep-and-body'],
}

export default guide
