import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The 2001 revision of Bloom’s taxonomy added a second axis: not just *how* learners think, but *what kind of knowledge* they are thinking with. Crossing the two gives a grid that pinpoints any objective.',
  nutshell: [
    'Four kinds of knowledge: **factual, conceptual, procedural and metacognitive**.',
    'Every objective has a verb (the cognitive process) and a noun (the knowledge). The grid places both.',
    'Units that live in one corner of the grid, usually "remember factual", are easy to spot and fix.',
  ],
  sections: [
    {
      id: 'types',
      title: 'Four kinds of knowledge',
      lead: 'From isolated facts to knowing about your own thinking.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Factual', body: 'The basic elements: **terminology** and **specific details**. "The capital of Kenya is Nairobi." "H₂O is water."' },
            { name: 'Conceptual', body: 'How elements fit together: **classifications and categories**, **principles and generalisations**, **theories, models and structures**. "Why mammals are grouped together." "Supply and demand."' },
            { name: 'Procedural', body: 'How to do something: **subject-specific skills and algorithms**, **techniques and methods**, and **knowing when to use which procedure**. "How to solve a quadratic." "How to run a fair test."' },
            { name: 'Metacognitive', body: 'Knowledge about thinking itself: **strategic knowledge**, **knowledge about tasks** (including when and why strategies work), and **self-knowledge** of your own strengths and weaknesses. "I understand better if I explain it aloud."' },
          ],
          caption: 'Roughly from concrete (bottom) to abstract (top), though the authors did not treat this as a strict hierarchy.',
        },
      ],
    },
    {
      id: 'grid',
      title: 'The taxonomy table',
      lead: 'Twenty-four cells for placing objectives.',
      blocks: [
        {
          t: 'p',
          text: 'Put the six cognitive processes across the top and the four knowledge types down the side. Every objective lands in a cell. Take the objective "Learners will be able to **explain** the **causes of inflation**". The verb "explain" is *Understand*, and "causes of inflation" is *conceptual* knowledge.',
        },
        {
          t: 'table',
          head: ['', 'Remember', 'Understand', 'Apply', 'Analyse', 'Evaluate', 'Create'],
          rows: [
            ['Factual', 'List the parts of a cell', 'Summarise the features of a plant cell', 'Label a new micrograph', 'Sort features into plant-only and animal-only', 'Check a diagram for labelling errors', 'Produce a labelled model of a cell'],
            ['Conceptual', 'Recall the definition of osmosis', 'Explain why cells need a membrane', 'Predict what happens to a cell in salt water', 'Compare diffusion and active transport', 'Judge which model of the membrane fits the evidence', 'Propose an experiment to test membrane permeability'],
            ['Procedural', 'Recall the steps for preparing a slide', 'Explain why a stain is used', 'Prepare and view a slide', 'Work out why a slide is blurry', 'Judge which method gives the clearest view', 'Design a new protocol for a tricky specimen'],
            ['Metacognitive', 'Name a strategy for remembering cell parts', 'Explain why that strategy helps you', 'Use a self-test to check your recall', 'Work out which topics you are weakest on', 'Evaluate how well your revision plan worked', 'Create a personal plan for the next topic'],
          ],
          caption: 'Examples from a biology unit on cells. Most units spend most of their time in the top-left corner.',
        },
      ],
    },
    {
      id: 'using',
      title: 'Using the grid',
      lead: 'Three practical moves.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Map your objectives', body: 'Place each unit objective in a cell. Clusters and gaps become obvious straight away.' },
            { title: 'Map your assessment', body: 'Place each test question in a cell too. If objectives sit in "analyse conceptual" but questions sit in "remember factual", the test is not measuring your goals.' },
            { title: 'Teach metacognitive knowledge explicitly', body: 'The bottom row is often empty. Add short moments where learners plan, monitor and evaluate their own learning. See [metacognition](@teaching/techniques/learning-strategies/metacognition).' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Conceptual knowledge is what lets learners transfer. Facts and procedures learned without the concepts that connect them tend to stay stuck in the context where they were learned.',
        },
      ],
    },
  ],
  sources: [
    'Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). *A taxonomy for learning, teaching, and assessing*. Longman.',
    'Krathwohl, D. R. (2002). A revision of Bloom’s taxonomy: An overview. *Theory Into Practice, 41*(4), 212–218.',
  ],
  related: ['teaching/taxonomies/blooms', 'teaching/techniques/learning-strategies/metacognition', 'teaching/assessment/alignment'],
}

export default guide
