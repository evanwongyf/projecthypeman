import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Constructive alignment, described by John Biggs, means that what you want learners to learn, what they do in lessons, and how they are assessed all point the same way. When they do not, learners learn what the assessment rewards, not what you intended.',
  nutshell: [
    'Three parts must match: **intended learning outcomes**, **teaching and learning activities**, and **assessment tasks**.',
    'Learners will study for the assessment. If it only rewards recall, they will memorise, however much you talk about understanding.',
    'Check alignment with a simple table: each outcome, the activity that builds it, and the assessment that checks it.',
  ],
  sections: [
    {
      id: 'idea',
      title: 'The idea',
      blocks: [
        {
          t: 'p',
          text: 'Biggs (1996) combined two ideas. "Constructive" comes from [constructivism](@teaching/theories/constructivism): learners build meaning through what they do. "Alignment" means the teacher sets up the environment so that the activities and assessments all require the thinking named in the outcomes. If the outcome is "explain", learners should practise explaining, and the assessment should ask them to explain.',
        },
        {
          t: 'cycle',
          items: [
            { name: 'Intended learning outcomes', body: 'What learners should be able to do, with a verb at the right level. See [objectives](@teaching/assessment/objectives).' },
            { name: 'Teaching and learning activities', body: 'Activities that require learners to practise exactly that kind of thinking.' },
            { name: 'Assessment tasks', body: 'Tasks that require learners to show exactly that kind of thinking, judged against clear criteria.' },
          ],
          caption: 'Each part is checked against the others. Results from assessment feed back into refining the outcomes and activities.',
        },
      ],
    },
    {
      id: 'example',
      title: 'Misaligned and aligned',
      blocks: [
        {
          t: 'table',
          head: ['', 'Misaligned', 'Aligned'],
          rows: [
            ['Outcome', 'Evaluate the reliability of historical sources.', 'Evaluate the reliability of historical sources.'],
            ['Activities', 'Teacher lectures on key events; learners take notes.', 'Learners practise judging sources using provenance, content and purpose, with feedback.'],
            ['Assessment', 'Multiple-choice test on dates and names.', 'Given two unseen sources, judge which is more reliable for a question, and justify.'],
            ['What learners learn', 'Dates and names.', 'How to evaluate sources.'],
          ],
        },
      ],
    },
    {
      id: 'checking',
      title: 'Checking your own unit',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'List your outcomes', body: 'Three to six outcomes, each with a clear verb.' },
            { title: 'Tag each with its level', body: 'Use [Bloom’s](@teaching/taxonomies/blooms) or [SOLO](@teaching/taxonomies/solo).' },
            { title: 'Map activities', body: 'For each outcome, which activities require that thinking? Any outcome with no matching activity?' },
            { title: 'Map assessment', body: 'For each outcome, which assessment task or question checks it? Any outcome not assessed? Any assessment of things not in the outcomes?' },
            { title: 'Fix gaps', body: 'Add or change activities and assessment until each outcome is taught and checked at its intended level.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Biggs, J. (1996). Enhancing teaching through constructive alignment. *Higher Education, 32*(3), 347–364.',
    'Biggs, J., & Tang, C. (2011). *Teaching for quality learning at university* (4th ed.). Open University Press.',
  ],
  related: ['teaching/assessment/objectives', 'teaching/taxonomies/solo', 'teaching/guides/planning/backward-design'],
}

export default guide
