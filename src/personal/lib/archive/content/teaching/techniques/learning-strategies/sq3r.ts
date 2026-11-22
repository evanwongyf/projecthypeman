import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'SQ3R is a five-step method for studying a textbook chapter: **Survey, Question, Read, Recite, Review**. It turns passive reading into active study by giving you questions to hunt for and making you recall answers.',
  nutshell: [
    'Francis Robinson described SQ3R in 1946 for university students.',
    'Survey the chapter, turn headings into questions, read to answer them, recite the answers from memory, then review.',
    'Its strongest parts are the ones that involve **retrieval**: reciting and reviewing.',
    'It takes longer than reading, and it is worth it for dense material you need to learn.',
  ],
  sections: [
    {
      id: 'steps',
      title: 'The five steps',
      lead: 'Before, during and after reading.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Survey (2–5 minutes)', body: 'Skim the chapter without reading closely: title, introduction, headings, bold words, pictures and captions, summary, end-of-chapter questions. Get the map before the journey.' },
            { title: 'Question', body: 'Turn each heading into a question. "The causes of the Great Depression" becomes "What caused the Great Depression?". Write the questions down.' },
            { title: 'Read', body: 'Read one section at a time, actively looking for the answer to its question. Slow down for difficult parts and study diagrams.' },
            { title: 'Recite', body: 'After each section, look away and answer the question from memory, aloud or in brief notes in your own words. If you cannot, re-read that section.' },
            { title: 'Review', body: 'At the end, go through all your questions and answer them again from memory. Review again over the following days.' },
          ],
        },
      ],
    },
    {
      id: 'example',
      title: 'An example',
      blocks: [
        {
          t: 'example',
          title: 'A section on "Types of rock"',
          lines: [
            { label: 'Survey', text: 'Three headings: igneous, sedimentary, metamorphic. A diagram of the rock cycle. A summary box.' },
            { label: 'Question', text: 'How does each type of rock form? How can I tell them apart? How do they change from one to another?' },
            { label: 'Read', text: 'Read the igneous section looking for how it forms and how to recognise it.' },
            { label: 'Recite', text: 'Cover the page: "Igneous rock forms when magma or lava cools. Fast cooling gives small crystals, like basalt; slow cooling gives big crystals, like granite."' },
            { label: 'Review', text: 'At the end, redraw the rock cycle from memory and answer all three questions. Again tomorrow and next week.' },
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence says',
      blocks: [
        {
          t: 'p',
          text: 'Studies of SQ3R as a whole give mixed results, partly because it takes time and training to do properly. Its components have stronger support: previewing structure helps comprehension, questions focus attention, and reciting and reviewing are forms of [retrieval practice](@teaching/techniques/learning-strategies/retrieval-practice), one of the best-supported strategies. Spreading the review over days adds the benefit of [spaced practice](@teaching/techniques/learning-strategies/spaced-practice).',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Short on time?',
          text: 'Keep the recite and review steps. They do most of the work. A quick survey plus self-testing after each section gets you most of the benefit.',
        },
      ],
    },
  ],
  sources: [
    'Robinson, F. P. (1946). *Effective study*. Harper & Brothers.',
    'Huber, J. A. (2004). A closer look at SQ3R. *Reading Improvement, 41*(2), 108–112.',
  ],
  related: ['teaching/techniques/learning-strategies/retrieval-practice', 'teaching/techniques/learning-strategies/elaboration'],
}

export default guide
