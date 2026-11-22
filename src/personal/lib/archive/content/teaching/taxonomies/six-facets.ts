import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Wiggins and McTighe argue that “understanding” is not one thing. In Understanding by Design they describe six facets, six different ways a learner can show they truly understand, which double as a menu of assessment tasks.',
  nutshell: [
    'The six facets: **explain, interpret, apply, have perspective, empathise, have self-knowledge**.',
    'They are not a ladder: a rich task may draw on several.',
    'Each facet suggests performance tasks that cannot be passed by recall alone.',
  ],
  sections: [
    {
      id: 'facets',
      title: 'The six facets',
      blocks: [
        { t: 'table', head: ['Facet', 'The learner can…', 'Task idea (photosynthesis)'], rows: [
          ['Explanation', 'give a justified account of why and how', 'Explain why a plant in a sealed jar survives in sunlight but not in the dark'],
          ['Interpretation', 'tell meaningful stories, translate, find significance', 'Interpret a graph of oxygen output against light intensity'],
          ['Application', 'use knowledge in new, real situations', 'Design the lighting plan for a school greenhouse'],
          ['Perspective', 'see from different points of view; critique', 'Compare how a farmer, an ecologist and a climate scientist would value rainforests'],
          ['Empathy', 'get inside another’s feelings and world view', 'Write as a scientist in 1779 whose results contradict the accepted theory'],
          ['Self-knowledge', 'know the limits of one’s own understanding', 'Reflect: which part of this topic did I misunderstand at first, and why?'],
        ] },
        { t: 'callout', tone: 'tip', title: 'Pairing with backward design', text: 'Write the desired understanding first, then choose two or three facets to assess it, then plan the lessons. See [backward design](@teaching/guides/planning/backward-design).' },
      ],
    },
  ],
  sources: ['Wiggins, G. & McTighe, J. (2005). Understanding by Design, expanded 2nd ed. ASCD.'],
  related: ['teaching/guides/planning/backward-design', 'teaching/taxonomies/compare'],
}

export default guide
