import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The Cornell method divides each page into three parts: notes, cues and a summary. It was designed by Walter Pauk at Cornell University in the 1950s, and its big advantage is that it builds reviewing and self-testing into the notes themselves.',
  nutshell: [
    'Page layout: a narrow **cue column** on the left, a wide **notes** area on the right, a **summary** strip at the bottom.',
    'During class: take notes on the right.',
    'Soon after: write questions or keywords in the cue column, and a short summary at the bottom.',
    'To revise: cover the notes, look at the cues, and answer from memory.',
  ],
  sections: [
    {
      id: 'layout',
      title: 'The page',
      blocks: [
        {
          t: 'table',
          head: ['Cues (about ⅓ of the width)', 'Notes (about ⅔ of the width)'],
          rows: [
            ['What does the mitochondrion do?', 'Mitochondria = site of aerobic respiration → releases energy (ATP) from glucose'],
            ['Why do muscle cells have many?', 'Cells that need lots of energy (muscle, sperm) have more mitochondria'],
            ['Word equation?', 'glucose + oxygen → carbon dioxide + water (+ energy)'],
            ['**Summary**', 'Mitochondria release energy from glucose through aerobic respiration, so cells with high energy needs have many of them.'],
          ],
          caption: 'Draw a vertical line about 6 cm from the left edge, and a horizontal line about 5 cm from the bottom.',
        },
      ],
    },
    {
      id: 'five-rs',
      title: 'The five Rs',
      lead: 'Pauk’s steps for using the page.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Record', body: 'During the lecture or reading, write meaningful notes in the right column. Use short phrases, abbreviations and structure.' },
            { title: 'Reduce', body: 'As soon as possible afterwards, pull out key ideas as questions or keywords in the cue column.' },
            { title: 'Recite', body: 'Cover the notes column. Using only the cues, say or write the answers in your own words. Check.' },
            { title: 'Reflect', body: 'Think about how the ideas connect to each other and to what you already know. Write a summary at the bottom.' },
            { title: 'Review', body: 'Spend a few minutes each week reciting from your cues, spacing reviews over time.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Questions beat keywords',
          text: 'Writing cues as questions ("Why do muscle cells need many mitochondria?") rather than keywords ("mitochondria") turns every page into a ready-made quiz. That gives you [active recall](@memory/active-recall) without extra work.',
        },
      ],
    },
    {
      id: 'tips',
      title: 'Tips',
      blocks: [
        {
          t: 'list',
          items: [
            'Put the date, topic and page number at the top.',
            'Leave gaps in the notes column to add details later.',
            'Do the "reduce" step within 24 hours, while you still remember the lecture.',
            'Digital notes work too: use a two-column table and a text box for the summary.',
            'Combine with [spaced repetition](@memory/spaced-repetition): turn your cue questions into flashcards.',
          ],
        },
      ],
    },
    {
      id: 'try',
      title: 'Try it',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Set up a page with the three sections.',
            'Take notes from your next lesson or a textbook section in the right column.',
            'Within a day, write at least five questions in the cue column.',
            'Write a two-sentence summary at the bottom.',
            'Cover the notes and answer your questions from memory.',
            'Repeat the self-test in three days.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Pauk, W., & Owens, R. J. Q. (2013). *How to study in college* (11th ed.). Wadsworth.',
  ],
  related: ['note-taking/situations/review', 'memory/active-recall', 'note-taking/methods/outline'],
}

export default guide
