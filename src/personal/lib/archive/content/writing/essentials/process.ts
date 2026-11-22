import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Good writing rarely comes out right the first time. Experienced writers separate the job into stages: planning, drafting, revising and editing. Trying to do them all at once, writing perfect sentences while still working out what you think, is a recipe for writer’s block.',
  nutshell: [
    '**Plan**: understand the task, gather ideas, decide your argument and structure.',
    '**Draft**: get it down without stopping to polish.',
    '**Revise**: improve the argument, structure and evidence.',
    '**Edit**: fix sentences, grammar, spelling and references.',
    'Leave time between drafting and revising; fresh eyes see more.',
  ],
  sections: [
    {
      id: 'stages',
      title: 'The four stages',
      blocks: [
        {
          t: 'cycle',
          items: [
            { name: 'Plan', body: 'Unpack the question ([understanding the question](@writing/essentials/the-question)). Brainstorm, research, and decide your main argument ([thesis](@writing/essentials/thesis)). Outline the paragraphs.' },
            { name: 'Draft', body: 'Write the whole thing, fast and rough. Leave notes like [CHECK DATE] rather than stopping. Start with the easiest section if the introduction feels hard.' },
            { name: 'Revise', body: 'Big changes: Does the argument answer the question? Does every paragraph support it? Is anything missing, repeated or in the wrong order? See [revising and proofreading](@writing/style/editing).' },
            { name: 'Edit', body: 'Small changes: clarity, word choice, grammar, punctuation, spelling, formatting, references.' },
          ],
          caption: 'Writing is recursive: revising often sends you back to planning. Flower and Hayes (1981) showed skilled writers move back and forth between stages.',
        },
      ],
    },
    {
      id: 'time',
      title: 'Planning your time',
      blocks: [
        {
          t: 'table',
          head: ['Stage', 'Share of time', 'For a 2,000-word essay over two weeks'],
          rows: [
            ['Understanding the task and research', '30–40%', 'Days 1–5'],
            ['Planning and outlining', '10–15%', 'Day 6'],
            ['Drafting', '20–25%', 'Days 7–9'],
            ['Break', '-', 'Day 10: leave it alone'],
            ['Revising', '15–20%', 'Days 11–12'],
            ['Editing and references', '10%', 'Day 13'],
            ['Buffer', '-', 'Day 14'],
          ],
        },
      ],
    },
    {
      id: 'block',
      title: 'Getting unstuck',
      blocks: [
        {
          t: 'list',
          items: [
            '**Talk it out**: explain your argument to a friend or a voice recorder, then write down what you said.',
            '**Freewrite**: write non-stop for ten minutes without editing. Some of it will be usable.',
            '**Start in the middle**: write the paragraph you are most confident about first.',
            '**Lower the bar**: tell yourself it is a rough draft that no one will see.',
            '**Use the outline**: write one paragraph per bullet point.',
            '**Set a timer**: 25 minutes of drafting (see [Pomodoro](@habits/pomodoro)).',
          ],
        },
      ],
    },
  ],
  sources: [
    'Flower, L., & Hayes, J. R. (1981). A cognitive process theory of writing. *College Composition and Communication, 32*(4), 365–387.',
    'Elbow, P. (1998). *Writing with power* (2nd ed.). Oxford University Press.',
  ],
  related: ['writing/essentials/the-question', 'writing/essentials/thesis', 'writing/style/editing'],
}

export default guide
