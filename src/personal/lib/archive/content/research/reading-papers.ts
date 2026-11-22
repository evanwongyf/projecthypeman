import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Research papers are not written to be read from start to finish like a story. Experienced readers skim strategically, deciding quickly whether a paper is useful before investing time in the details. The three-pass method is a simple way to do the same.',
  nutshell: [
    'Most papers follow **IMRaD**: Introduction, Methods, Results, and Discussion.',
    '**Pass 1** (5–10 min): title, abstract, headings, conclusions. Is it relevant?',
    '**Pass 2** (up to an hour): read properly, look at figures, skip the heavy details.',
    '**Pass 3**: only for papers central to your work. Understand it well enough to critique it.',
  ],
  sections: [
    {
      id: 'structure',
      title: 'How papers are organised',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Abstract', def: 'A 150–300 word summary of the whole paper. Read it first, always.' },
            { term: 'Introduction', def: 'The background, what is already known, the gap, and the question or hypothesis.' },
            { term: 'Methods', def: 'Exactly what was done: participants, materials, procedures, analysis. Where you judge how trustworthy the results are.' },
            { term: 'Results', def: 'What was found, often in tables and figures, usually without interpretation.' },
            { term: 'Discussion', def: 'What the results mean, how they fit with other work, limitations and future directions.' },
            { term: 'Conclusion', def: 'The main takeaways. Sometimes part of the discussion.' },
          ],
        },
        {
          t: 'p',
          text: 'Humanities papers often do not follow IMRaD. Look for the thesis in the introduction and read topic sentences and the conclusion to map the argument.',
        },
      ],
    },
    {
      id: 'passes',
      title: 'The three-pass method',
      lead: 'Adapted from S. Keshav (2007).',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'First pass: the bird’s-eye view (5–10 min)', body: 'Read the title, abstract and introduction. Read the section headings. Glance at the figures. Read the conclusion. Skim the references for ones you know. Decide: is this relevant, and what kind of paper is it?' },
            { title: 'Second pass: the content (up to 1 hour)', body: 'Read carefully but skip dense proofs and statistical detail. Study the figures and tables: what are the axes, and what do they show? Note key points, and unread references worth following up.' },
            { title: 'Third pass: the deep read (hours)', body: 'For papers central to your work. Reconstruct the argument; question every assumption; think about how you would have done it. You should be able to explain its strengths and weaknesses.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Many papers need only the first pass. Reading hundreds of abstracts to find the ten papers worth a second pass is normal, and efficient.',
        },
      ],
    },
    {
      id: 'questions',
      title: 'Questions to ask as you read',
      blocks: [
        {
          t: 'list',
          items: [
            'What question is this paper trying to answer?',
            'What did they actually do, and with whom?',
            'What did they find? What is the main number or result?',
            'How big is the effect, and how sure are they? (See [reading numbers](@thinking/numbers).)',
            'What are the limitations, according to the authors and according to you?',
            'How does this fit with other things I have read?',
            'How will I use this in my own work?',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Write a summary straight away',
          text: 'After reading, write three to five sentences in your own words: the question, the method, the main finding, and a limitation. This is also the start of a [literature review](@research/literature-review) and protects you from accidental [plagiarism](@research/avoiding-plagiarism).',
        },
      ],
    },
  ],
  sources: [
    'Keshav, S. (2007). How to read a paper. *ACM SIGCOMM Computer Communication Review, 37*(3), 83–84.',
    'Greenhalgh, T. (2019). *How to read a paper: The basics of evidence-based medicine and healthcare* (6th ed.). Wiley-Blackwell.',
  ],
  related: ['research/evaluating-sources', 'research/literature-review', 'note-taking/situations/reading'],
}

export default guide
