import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'This page walks through one real lesson, a Year 8 science lesson on how the heart works, and shows where and how it can be differentiated, from planning to the last five minutes.',
  nutshell: [
    'One learning goal for everyone. Different supports, routes and extensions.',
    'Pre-assessment decides who needs what.',
    'Most differentiation is built into the lesson design; some happens live in response to checks.',
    'The class never splits into fixed "levels"; learners move between supports during the lesson.',
  ],
  sections: [
    {
      id: 'context',
      title: 'The class and the goal',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Goal', def: 'Explain how blood flows through the heart and why the heart has two sides.' },
            { term: 'Class', def: '28 learners. Pre-assessment (last lesson’s exit ticket) shows: 6 still confuse arteries and veins; 18 have the basics; 4 already know the route of blood in detail. Two learners are new to English; one learner has dyslexia; one has ADHD.' },
            { term: 'Time', def: '60 minutes.' },
          ],
        },
      ],
    },
    {
      id: 'plan',
      title: 'The lesson, step by step',
      blocks: [
        {
          t: 'table',
          head: ['Phase', 'For everyone', 'Differentiation'],
          rows: [
            ['Retrieval starter (8 min)', 'Five questions: two on last lesson (vessels), three on earlier topics.', 'Question 5 is a stretch question. Word bank with pictures available on tables for anyone.'],
            ['Explain and model (12 min)', 'Teacher draws the heart live, adding blood flow step by step, explaining aloud.', 'Key vocabulary pre-taught to the two language learners at the start with a labelled diagram. Diagram and key terms stay on the board.'],
            ['Hinge question (3 min)', 'Multiple choice: "Blood leaving the right ventricle goes to…"', 'Results decide who goes to the teacher table next.'],
            ['Guided practice (15 min)', 'Learners label a heart diagram and number the steps of blood flow.', '**Support**: diagram with labels to cut and stick, first step completed. **Core**: blank diagram. **Stretch**: explain why the left ventricle wall is thicker. Teacher table: reteach for anyone who got the hinge wrong.'],
            ['Independent task (15 min)', 'Explain in writing why the heart has two sides.', 'Sentence stems ("Blood goes to the lungs to… This is why…") on request. Option to record a spoken explanation (supports the learner with dyslexia). Stretch: compare with a fish heart, which has one circuit.'],
            ['Exit ticket (5 min)', 'Two questions on the goal.', 'Same questions for all, so everyone is assessed against the same goal.'],
          ],
        },
      ],
    },
    {
      id: 'individuals',
      title: 'Planning for individuals',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Learners new to English', body: 'Pre-taught vocabulary with pictures; a bilingual glossary; a partner who explains the task; diagrams wherever possible. See [supporting language learners](@teaching/differentiation/language-learners).' },
            { title: 'Learner with dyslexia', body: 'Instructions read aloud and on the board; key terms in a visual word bank; option to give the explanation orally. See [dyslexia](@teaching/special-education/needs/dyslexia).' },
            { title: 'Learner with ADHD', body: 'Task broken into numbered steps with a tick box for each; seat with a clear view and few distractions; a job during the lesson (handing out diagrams). See [ADHD](@teaching/special-education/needs/adhd).' },
            { title: 'Advanced learners', body: 'Skip the basic labelling once shown they know it; go to the fish heart comparison and "why is the left wall thicker?". See [stretching advanced learners](@teaching/differentiation/advanced).' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Supports on the side',
          text: 'Put scaffolds in a tray or on the board for anyone to use, rather than handing them to "the low group". Learners pick up support when they need it and put it down when they do not.',
        },
      ],
    },
    {
      id: 'after',
      title: 'After the lesson',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Sort the exit tickets', body: 'Got it / nearly / not yet.' },
            { title: 'Plan tomorrow’s starter', body: 'Include the most common error from the exit tickets.' },
            { title: 'Regroup', body: 'Tomorrow’s teacher-table group comes from today’s evidence, not from yesterday’s group.' },
          ],
        },
      ],
    },
  ],
  related: ['teaching/differentiation/foundations', 'teaching/differentiation/tiered', 'teaching/differentiation/scaffolding', 'teaching/guides/planning/lesson-plan'],
}

export default guide
