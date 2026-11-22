import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Dual coding means combining words with visuals, such as diagrams, timelines, maps and graphic organisers, so that an idea is stored in two forms. Two routes into memory are better than one, and a good visual can show structure that words struggle to.',
  nutshell: [
    'Allan Paivio proposed that the mind handles verbal and visual information in partly separate systems.',
    'Words plus relevant pictures are usually remembered better than words alone.',
    'The visual must **explain**, not decorate. Irrelevant pictures can hurt learning.',
    'Talk over a diagram rather than filling it with text, so eyes and ears share the work.',
  ],
  sections: [
    {
      id: 'theory',
      title: 'Two codes',
      lead: 'Paivio and Mayer.',
      blocks: [
        {
          t: 'p',
          text: 'Allan Paivio’s **dual coding theory** (1971, 1986) proposed that we have one system for language and another for images. Concrete words like "apple" can be stored in both; abstract words like "justice" mostly in one. Information coded both ways has two paths back into memory.',
        },
        {
          t: 'p',
          text: 'Richard Mayer built on this in his research on **multimedia learning**. Across many experiments, people learned more deeply from words and pictures together than from words alone: the **multimedia principle**. His other principles overlap with [cognitive load theory](@teaching/theories/cognitive-load): place words near the picture they describe, cut extraneous material, and prefer narration to on-screen text for complex animations.',
        },
      ],
    },
    {
      id: 'formats',
      title: 'Visual formats',
      lead: 'Match the visual to the structure of the idea.',
      blocks: [
        {
          t: 'table',
          head: ['Structure of the idea', 'Visual', 'Example'],
          rows: [
            ['A sequence in time', 'Timeline', 'Events leading to a revolution'],
            ['A process or cycle', 'Flow chart or cycle diagram', 'The water cycle; a feedback loop'],
            ['Parts of a whole', 'Labelled diagram', 'Parts of a flower; an engine'],
            ['Comparing two or more things', 'Venn diagram or comparison table', 'Plant vs animal cells'],
            ['Hierarchy or categories', 'Tree diagram', 'Classification of living things'],
            ['Cause and effect', 'Fishbone or chain diagram', 'Causes of a war'],
            ['Connections between many ideas', 'Concept map', 'Key terms in an ecosystem'],
            ['Quantities and trends', 'Graph or chart', 'Population change over time'],
          ],
        },
      ],
    },
    {
      id: 'using',
      title: 'Using it to study',
      lead: 'For learners.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Find the visuals in your materials', body: 'Study the diagrams in your textbook alongside the text; explain to yourself how they match.' },
            { title: 'Draw your own', body: 'Turn a page of notes into a diagram, timeline or map. Deciding how to draw it forces you to understand the structure.' },
            { title: 'Explain your drawing', body: 'Describe the diagram aloud or in writing. Words and picture should say the same thing.' },
            { title: 'Redraw from memory', body: 'Cover it and draw it again. This combines dual coding with [retrieval practice](@teaching/techniques/learning-strategies/retrieval-practice).' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'You do not need to be good at art. Simple boxes, arrows, stick figures and icons work. The thinking is in the structure, not the drawing.',
        },
      ],
    },
    {
      id: 'teaching',
      title: 'Using it to teach',
      lead: 'For teachers.',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Draw diagrams live, step by step, while explaining.',
            'Put labels on the diagram, next to the parts they name.',
            'Use one consistent visual for a recurring idea across a unit.',
            'Give learners partly completed graphic organisers to fill in.',
          ],
          dont: [
            'Add clip art or stock photos that do not explain anything.',
            'Put paragraphs of text on a slide and read them aloud (the redundancy effect).',
            'Show a complex animation with no pauses or narration.',
            'Label learners as "visual learners"; visuals help nearly everyone. See [learning myths](@teaching/theories/myths).',
          ],
        },
      ],
    },
  ],
  sources: [
    'Paivio, A. (1986). *Mental representations: A dual coding approach*. Oxford University Press.',
    'Mayer, R. E. (2009). *Multimedia learning* (2nd ed.). Cambridge University Press.',
    'Clark, J. M., & Paivio, A. (1991). Dual coding theory and education. *Educational Psychology Review, 3*(3), 149–210.',
    'Caviglioli, O. (2019). *Dual coding with teachers*. John Catt.',
  ],
  related: ['teaching/theories/cognitive-load', 'teaching/techniques/learning-strategies/concrete-examples', 'teaching/techniques/instruction/explaining'],
}

export default guide
