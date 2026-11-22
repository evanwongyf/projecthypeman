import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Arthur Costa’s three levels of questioning compress Bloom’s six levels into three that are easy to teach to learners themselves: gathering, processing and applying. Many schools teach it with the image of a house, ground floor, first floor, second floor.',
  sections: [
    {
      id: 'levels',
      title: 'Three levels',
      blocks: [
        { t: 'levels', items: [
          { name: 'Level 1, Gathering', body: 'Input: recalling and defining information from the text or experience.', verbs: ['define', 'list', 'name', 'describe', 'identify', 'recite'] },
          { name: 'Level 2, Processing', body: 'Making sense: comparing, explaining, classifying, inferring.', verbs: ['compare', 'contrast', 'classify', 'explain why', 'infer', 'sequence'] },
          { name: 'Level 3, Applying', body: 'Output: evaluating, predicting, imagining and applying to new situations.', verbs: ['predict', 'judge', 'imagine', 'hypothesise', 'evaluate', 'what if'] },
        ] },
        { t: 'callout', tone: 'tip', title: 'Learner-generated questions', text: 'Ask learners to write one question at each level about a text and swap with a partner. It makes thinking levels visible and turns into excellent revision material.' },
      ],
    },
  ],
  sources: ['Costa, A. L. (2001). Developing Minds: A Resource Book for Teaching Thinking, 3rd ed. ASCD.'],
  related: ['teaching/techniques/questioning/questioning', 'teaching/taxonomies/blooms'],
}

export default guide
