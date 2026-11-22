import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When you read to learn, the goal is to understand and remember, not to reach the last page. Good reading notes come from a two-step approach: annotate while you read, then write notes in your own words after each section.',
  nutshell: [
    'Read a section first, then note it. Writing while reading every line leads to copying.',
    '**Annotate** sparingly: key terms, main claims, questions, connections.',
    'After each section, close the book and write the main points **from memory**, then check.',
    'Highlighting alone is one of the weakest study methods; use it only to mark what you will then process.',
  ],
  sections: [
    {
      id: 'annotate',
      title: 'Annotating',
      blocks: [
        {
          t: 'table',
          head: ['Mark', 'Use for'],
          rows: [
            ['Underline', 'The main claim or topic sentence of a paragraph'],
            ['Circle', 'Key terms to define'],
            ['? in margin', 'Something you do not understand'],
            ['! in margin', 'Something surprising or important'],
            ['Short margin note', 'The point of the paragraph in 3–5 words'],
            ['→ other page', 'A connection to another part of the text'],
          ],
          caption: 'Keep a consistent system. If everything is marked, nothing stands out.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'The highlighter trap',
          text: 'Dunlosky and colleagues (2013) rated highlighting "low utility": it feels productive but does little for learning on its own, and can even distract from making connections. Highlight less, and always do something with what you mark.',
        },
      ],
    },
    {
      id: 'notes',
      title: 'Writing notes from reading',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Preview', body: 'Look at the headings, summary and questions first to know what to look for (see [SQ3R](@teaching/techniques/learning-strategies/sq3r)).' },
            { title: 'Read a section', body: 'A few paragraphs or one heading’s worth. Annotate lightly.' },
            { title: 'Close the book', body: 'Write the main points in your own words, from memory.' },
            { title: 'Check and fix', body: 'Open the book and correct or add anything important you missed.' },
            { title: 'Record the source', body: 'Author, title, page numbers, so you can cite it later (see [references](@research/references)).' },
          ],
        },
        {
          t: 'p',
          text: 'Writing from memory makes each section a small act of [active recall](@memory/active-recall), and guarantees your notes are paraphrased, which protects you from accidental [plagiarism](@research/avoiding-plagiarism).',
        },
      ],
    },
  ],
  sources: [
    'Dunlosky, J., et al. (2013). Improving students’ learning with effective learning techniques. *Psychological Science in the Public Interest, 14*(1), 4–58.',
    'Adler, M. J., & Van Doren, C. (1972). *How to read a book* (rev. ed.). Simon & Schuster.',
  ],
  related: ['research/reading-papers', 'teaching/techniques/learning-strategies/sq3r', 'memory/active-recall'],
}

export default guide
