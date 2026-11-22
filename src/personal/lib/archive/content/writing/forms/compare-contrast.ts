import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A compare and contrast essay examines two or more things side by side to show how they are alike and different, and, crucially, what those similarities and differences reveal. Structure is everything: the reader must be able to follow the comparison.',
  nutshell: [
    '**Block** structure: all about A, then all about B. Simple but can become two separate essays.',
    '**Point-by-point** structure: each paragraph compares A and B on one feature. Usually stronger.',
    'Choose clear **criteria** for comparison before you start.',
    'Your thesis should say what the comparison shows, not just that there are similarities and differences.',
  ],
  sections: [
    {
      id: 'structures',
      title: 'Two structures',
      blocks: [
        {
          t: 'table',
          head: ['', 'Block', 'Point by point'],
          rows: [
            ['Layout', 'Intro → A (features 1, 2, 3) → B (features 1, 2, 3) → Conclusion', 'Intro → Feature 1 (A vs B) → Feature 2 (A vs B) → Feature 3 (A vs B) → Conclusion'],
            ['Strengths', 'Easy to plan; good for short pieces', 'Keeps the comparison in focus; easier to analyse'],
            ['Risks', 'Reads as two separate descriptions; comparison left to the end', 'Can feel repetitive if not varied'],
          ],
        },
        {
          t: 'example',
          title: 'Point-by-point plan: two poems about war',
          lines: [
            { label: 'Thesis', text: 'Both poems reject the glory of war, but Owen does it through graphic physical horror while Sassoon uses bitter irony.' },
            { label: '¶1', text: 'Attitude to war: both reject glory; how each does so.' },
            { label: '¶2', text: 'Imagery: Owen’s graphic physical detail vs Sassoon’s sparse, ironic scenes.' },
            { label: '¶3', text: 'Form and voice: first-hand witness vs detached narrator.' },
            { label: 'Conclusion', text: 'What the contrast reveals about different ways of protesting.' },
          ],
        },
      ],
    },
    {
      id: 'planning',
      title: 'Planning with a chart',
      blocks: [
        {
          t: 'p',
          text: 'Before writing, make a comparison [chart](@note-taking/methods/charting): rows for your criteria, columns for each item. Fill it in, then look for the most interesting similarities and differences. They become your paragraphs.',
        },
        {
          t: 'table',
          head: ['Phrases for similarity', 'Phrases for difference'],
          rows: [
            ['Similarly, … / Likewise, …', 'In contrast, … / Whereas…'],
            ['Both… and…', 'However, … / On the other hand, …'],
            ['In the same way, …', 'Unlike A, B…'],
            ['Neither… nor…', 'While A…, B…'],
          ],
        },
      ],
    },
  ],
  related: ['note-taking/methods/charting', 'writing/essentials/thesis', 'writing/essentials/paragraphs'],
}

export default guide
