import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A Zettelkasten ("slip box" in German) is a collection of small notes, each holding one idea in your own words, linked to one another. Over time the links build a web of your own thinking that you can draw on for essays, projects and research.',
  nutshell: [
    'Made famous by sociologist Niklas Luhmann, who wrote around 70 books using a box of about 90,000 index cards.',
    '**One idea per note**, written in your own words, as a complete thought.',
    '**Link** each new note to related notes, and say why they are related.',
    'Works on paper or in apps that support links between notes.',
  ],
  sections: [
    {
      id: 'kinds',
      title: 'Three kinds of note',
      lead: 'As described by Sönke Ahrens.',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Fleeting notes', body: 'Quick jottings of ideas as they come. Temporary; process or delete within a day or two.' },
            { title: 'Literature notes', body: 'Brief notes on what you read, in your own words, with the source. One set per source.' },
            { title: 'Permanent notes', body: 'Your own ideas, one per note, written so they make sense on their own years later, and linked to other permanent notes. These form the Zettelkasten.' },
          ],
        },
      ],
    },
    {
      id: 'how',
      title: 'Building one',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Capture', body: 'While reading or listening, jot fleeting and literature notes.' },
            { title: 'Process', body: 'Daily or weekly, turn the best ideas into permanent notes: one idea, your own words, full sentences.' },
            { title: 'Give it an address', body: 'A short title or ID so you can link to it.' },
            { title: 'Link it', body: 'Find related notes and link them, adding a sentence on how they connect: supports, contradicts, is an example of.' },
            { title: 'Add entry points', body: 'Keep a few index notes that list the key notes on a topic.' },
            { title: 'Use it', body: 'When writing, start from a cluster of linked notes instead of a blank page.' },
          ],
        },
        {
          t: 'example',
          title: 'A permanent note',
          lines: [
            { label: 'Title', text: 'Rereading feels effective because it is fluent, not because it works' },
            { label: 'Note', text: 'Rereading makes material feel familiar, and we mistake familiarity for knowing. Self-testing feels harder but produces much better long-term retention. So the feeling of learning is a poor guide to actual learning.' },
            { label: 'Links', text: '→ Retrieval practice beats rereading (evidence for this) · → Illusions of competence (general principle) · → Why students choose weak strategies (consequence)' },
            { label: 'Source', text: 'Bjork, Dunlosky & Kornell (2013); Roediger & Karpicke (2006)' },
          ],
        },
      ],
    },
    {
      id: 'why',
      title: 'Why it helps',
      blocks: [
        {
          t: 'p',
          text: 'There is little direct research on the Zettelkasten as a system, but it builds in processes that are well supported: rephrasing in your own words (generation), connecting new ideas to old ones ([elaboration](@teaching/techniques/learning-strategies/elaboration)) and revisiting ideas when you link them (spaced retrieval). The main risk is spending more time organising notes than thinking or studying.',
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'For exam courses, a simpler system (Cornell notes plus flashcards) is usually enough. A Zettelkasten shines for long projects, research and subjects where you keep building ideas over years.',
        },
      ],
    },
  ],
  sources: [
    'Ahrens, S. (2017). *How to take smart notes*. CreateSpace.',
    'Luhmann, N. (1981). Kommunikation mit Zettelkästen: Ein Erfahrungsbericht. In H. Baier, H. M. Kepplinger, & K. Reumann (Eds.), *Öffentliche Meinung und sozialer Wandel* (pp. 222–228). Westdeutscher Verlag.',
  ],
  related: ['note-taking/situations/reading', 'research/literature-review', 'teaching/techniques/learning-strategies/elaboration'],
}

export default guide
