import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'A **primary source** is first-hand evidence: created at the time, or by someone directly involved. A **secondary source** interprets or analyses primary sources. What counts as each depends on your subject and your question.',
  nutshell: [
    '**Primary**: original evidence, such as letters, data, speeches, artworks, original research papers.',
    '**Secondary**: analysis of that evidence, such as textbooks, review articles, biographies, documentaries.',
    '**Tertiary**: summaries of secondary sources, such as encyclopedias.',
    'Good work usually uses both: primary sources as evidence, secondary sources for context and interpretation.',
  ],
  sections: [
    {
      id: 'by-subject',
      title: 'Examples by subject',
      blocks: [
        {
          t: 'table',
          head: ['Subject', 'Primary sources', 'Secondary sources'],
          rows: [
            ['History', 'Diaries, letters, government records, photographs, newspapers from the time', 'History books, documentaries, articles by historians'],
            ['Science', 'Original research articles reporting new experiments or data', 'Review articles, textbooks, science journalism'],
            ['Literature', 'The novel, poem or play itself', 'Literary criticism, study guides'],
            ['Social sciences', 'Survey data, interview transcripts, census records', 'Analyses and books interpreting the data'],
            ['Art', 'The artwork itself; the artist’s notes', 'Art history books, exhibition reviews'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'It depends on the question',
          text: 'A 1960s newspaper article about the Second World War is a secondary source about the war, but a primary source if your question is how the war was remembered in the 1960s.',
        },
      ],
    },
    {
      id: 'using',
      title: 'Using them well',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Primary sources', body: 'Show you have gone to the evidence yourself. Read them critically: who made this, when, why, and for whom? See [judging a source](@research/evaluating-sources).' },
            { title: 'Secondary sources', body: 'Give background, expert interpretation and the state of debate. Use them to understand context and to find primary sources.' },
            { title: 'Tertiary sources', body: 'Encyclopedias and reference books are great starting points and for checking facts. Usually do not rely on them as main evidence.' },
          ],
        },
      ],
    },
  ],
  related: ['research/evaluating-sources', 'research/finding-sources', 'teaching/subjects/history'],
}

export default guide
