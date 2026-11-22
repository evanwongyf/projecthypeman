import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'ICAP sorts what learners are **visibly doing** during a lesson into four modes of engagement, Passive, Active, Constructive, Interactive, and predicts that learning improves as you move up. It is the most useful single lens for answering “are they actually engaged?”',
  nutshell: [
    'Chi & Wylie (2014): **Interactive > Constructive > Active > Passive**.',
    'Passive: receiving (listening, watching). Active: manipulating (underlining, copying, pausing a video). Constructive: generating something new (explaining, drawing a concept map, predicting). Interactive: co-constructing with a partner, each building on the other’s ideas.',
    'The modes are defined by **overt behaviour and its product**, so a teacher can see and plan for them.',
    'Higher modes work because they trigger deeper cognitive processes: storing → integrating → inferring → co-inferring.',
  ],
  sections: [
    {
      id: 'modes',
      title: 'The four modes',
      blocks: [
        { t: 'levels', caption: 'From least to most engaged', items: [
          { name: 'Passive', body: 'Paying attention and receiving information without doing anything else with it. Process: storing information in isolation.', verbs: ['listen', 'watch', 'read silently'] },
          { name: 'Active', body: 'Physically manipulating the material: highlighting, copying notes, rewinding, pointing. Process: activating and integrating with existing knowledge.', verbs: ['underline', 'copy', 'repeat', 'select'] },
          { name: 'Constructive', body: 'Producing outputs that go beyond the material: explaining in your own words, comparing, drawing a diagram, generating questions. Process: inferring new knowledge.', verbs: ['explain', 'predict', 'self-explain', 'map', 'question'] },
          { name: 'Interactive', body: 'Two or more learners co-construct: each contributes, builds on and challenges the other’s ideas. Process: co-inferring. Simply talking in turn is not interactive.', verbs: ['debate', 'build on', 'defend', 'co-explain'] },
        ] },
      ],
    },
    {
      id: 'same-task',
      title: 'One task in four modes',
      blocks: [
        { t: 'table', head: ['Mode', 'Reading a science text', 'Watching a video'], rows: [
          ['Passive', 'Read it through', 'Watch it'],
          ['Active', 'Highlight key sentences', 'Pause and copy the definitions'],
          ['Constructive', 'Write a summary in your own words and one question it raises', 'Predict what happens next before it is shown; draw the process'],
          ['Interactive', 'Pairs explain the text to each other and resolve a disagreement', 'Pairs compare predictions and agree a joint explanation'],
        ] },
        { t: 'callout', tone: 'note', title: 'For learners with special needs', text: 'Constructive and interactive modes can be reached without heavy writing: sorting picture cards into a sequence, building with blocks, choosing between two explanations, or explaining with an AAC device are all constructive. Interactive work needs structure, sentence stems, clear roles and short turns, for autistic learners and learners with language needs.' },
      ],
    },
    {
      id: 'evidence',
      title: 'Evidence and limits',
      blocks: [
        { t: 'p', text: 'Chi and Wylie reviewed dozens of lab and classroom studies showing the predicted ordering, and later classroom studies found teachers could raise the share of constructive and interactive activities after training. The hypothesis is a rule of thumb, not a law: a passive lecture by an excellent explainer can beat a poorly designed group task, and interaction without enough prior knowledge produces shared confusion. Use ICAP to check that lessons contain generative work, not to ban explanation.' },
      ],
    },
  ],
  sources: ['Chi, M. T. H. & Wylie, R. (2014). The ICAP framework: linking cognitive engagement to active learning outcomes. Educational Psychologist 49(4).', 'Chi, M. T. H. et al. (2018). Translating the ICAP theory into practice. Cognitive Science 42(6).'],
  related: ['teaching/techniques/active-learning/cooperative', 'teaching/taxonomies/compare'],
}

export default guide
