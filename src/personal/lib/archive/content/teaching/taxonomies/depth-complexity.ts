import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Sandra Kaplan and Bette Gould’s “depth and complexity” framework gives teachers eleven prompts, each with a simple icon, for taking any topic deeper rather than faster. It began in gifted education in California and is now used across mixed-ability classes because the prompts work at every level.',
  sections: [
    {
      id: 'prompts',
      title: 'The prompts',
      blocks: [
        { t: 'table', head: ['Prompt', 'Asks', 'Type'], rows: [
          ['Language of the discipline', 'What words do experts in this field use?', 'Depth'],
          ['Details', 'What are the important parts and attributes?', 'Depth'],
          ['Patterns', 'What repeats, what can be predicted?', 'Depth'],
          ['Trends', 'What is changing over time, and why?', 'Depth'],
          ['Unanswered questions', 'What is still unknown or unclear?', 'Depth'],
          ['Rules', 'What structures, laws or conventions apply?', 'Depth'],
          ['Ethics', 'What dilemmas or controversies arise?', 'Depth'],
          ['Big idea', 'What general principle does this illustrate?', 'Depth'],
          ['Over time', 'How did this look in the past, now, in the future?', 'Complexity'],
          ['Multiple perspectives', 'How do different people see it?', 'Complexity'],
          ['Across disciplines', 'How does this connect to other subjects?', 'Complexity'],
        ] },
        { t: 'callout', tone: 'tip', title: 'Using the icons', text: 'Put two prompt cards on the table and ask learners to write about the topic through each lens. For a learner who needs support, use one prompt with a sentence starter; for an advanced learner, combine prompts (“the ethics of a trend over time”).' },
      ],
    },
  ],
  sources: ['Kaplan, S. & Gould, B. (1995). Frames: Differentiating the Core Curriculum. Educator to Educator.', 'Kaplan, S. (2009). The grid: a model to construct differentiated curriculum for the gifted. In Renzulli et al., Systems and Models for Developing Programs for the Gifted and Talented.'],
  related: ['teaching/differentiation/advanced', 'teaching/taxonomies/williams-creativity'],
}

export default guide
