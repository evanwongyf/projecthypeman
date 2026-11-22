import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Barrett’s taxonomy is a ladder of reading comprehension questions. It helps teachers ask more than “what happened?” and is easy to adapt for learners with language or reading difficulties because each level can be asked with pictures, choices or sentence starters.',
  sections: [
    {
      id: 'levels',
      title: 'Five levels of comprehension',
      blocks: [
        { t: 'levels', items: [
          { name: 'Literal recognition and recall', body: 'Facts stated in the text: who, what, where, when.', verbs: ['find', 'name', 'list', 'point to'] },
          { name: 'Reorganisation', body: 'Classifying, outlining and summarising information from the text.', verbs: ['sort', 'sequence', 'summarise', 'group'] },
          { name: 'Inferential comprehension', body: 'Reading between the lines: motives, causes, predictions, unstated details.', verbs: ['infer', 'predict', 'why do you think', 'what would happen if'] },
          { name: 'Evaluation', body: 'Judging the text: fact or opinion, reality or fantasy, adequacy, worth.', verbs: ['judge', 'was it right', 'is it believable', 'fact or opinion'] },
          { name: 'Appreciation', body: 'Emotional and aesthetic response: identifying with characters, reacting to language and style.', verbs: ['how did you feel', 'which words', 'would you have'] },
        ] },
      ],
    },
    {
      id: 'example',
      title: 'Questions on “The Three Little Pigs”',
      blocks: [
        { t: 'example', title: 'One story, five levels', lines: [
          { label: 'Literal', text: 'What was the first house made of?' },
          { label: 'Reorganisation', text: 'Put the three houses in order from weakest to strongest.' },
          { label: 'Inferential', text: 'Why do you think the third pig chose bricks?' },
          { label: 'Evaluation', text: 'Was the wolf’s plan a good one? Could this story really happen?' },
          { label: 'Appreciation', text: 'How would you feel if you were the first pig? Which line is your favourite?' },
        ] },
        { t: 'callout', tone: 'tip', title: 'Adapting for learners with special needs', text: 'Inference is often hardest for autistic learners and learners with developmental language disorder. Teach it explicitly: “The text says… I know… so I think…”, use picture choice for answers, and pre-teach emotion words for appreciation questions.' },
      ],
    },
  ],
  sources: ['Barrett, T. C. (1968). Taxonomy of cognitive and affective dimensions of reading comprehension. In Clymer, T., What is reading? NSSE Yearbook.'],
  related: ['teaching/subjects/reading', 'teaching/taxonomies/compare'],
}

export default guide
