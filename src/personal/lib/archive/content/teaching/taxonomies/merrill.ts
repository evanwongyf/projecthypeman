import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'David Merrill’s Component Display Theory crosses two dimensions, the type of content and the level of performance, and his later First Principles of Instruction distil decades of instructional design into five principles. Together they are a practical checklist for designing any lesson or training.',
  sections: [
    {
      id: 'cdt',
      title: 'Component Display Theory',
      blocks: [
        { t: 'table', head: ['Content ↓ / Performance →', 'Remember', 'Use', 'Find (create)'], rows: [
          ['Fact', 'Recall a date', '-', '-'],
          ['Concept', 'State the definition of a mammal', 'Classify new animals as mammal or not', 'Invent a new classification'],
          ['Procedure', 'List the steps of long division', 'Do a long division', 'Devise a shortcut method'],
          ['Principle', 'State Ohm’s law', 'Predict the current in a circuit', 'Discover a relationship from data'],
        ] },
      ],
    },
    {
      id: 'first',
      title: 'First Principles of Instruction',
      blocks: [
        { t: 'steps', items: [
          { title: 'Problem-centred', body: 'Learning is promoted when learners work on real-world problems, in a progression from simple to complex.' },
          { title: 'Activation', body: 'When existing knowledge is activated as a foundation.' },
          { title: 'Demonstration', body: 'When new knowledge is shown, not just told, with examples and non-examples.' },
          { title: 'Application', body: 'When learners apply it, with feedback and gradually less coaching.' },
          { title: 'Integration', body: 'When learners integrate it into their lives: reflect on it, defend it, create with it.' },
        ] },
      ],
    },
  ],
  sources: ['Merrill, M. D. (1983). Component display theory. In Reigeluth (ed.), Instructional-Design Theories and Models.', 'Merrill, M. D. (2002). First principles of instruction. Educational Technology Research and Development 50(3).'],
  related: ['teaching/motivation/instructional-design-frameworks', 'teaching/taxonomies/compare'],
}

export default guide
