import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Tomlinson identifies the parts of a lesson a teacher can adjust: content (what learners learn and how they access it), process (how they make sense of it), product (how they show it), learning environment (the conditions) and affect (how learners feel). This guide goes through each in depth with concrete moves at different ages.',
  nutshell: [
    '**Content**: keep the core goal the same; vary access (texts, media, entry points) and depth.',
    '**Process**: vary the activities, scaffolds, grouping and time.',
    '**Product**: vary how learners demonstrate learning, with shared success criteria.',
    '**Environment and affect**: the room, routines and relationships that make different work feel normal and safe.',
  ],
  sections: [
    {
      id: 'content',
      title: 'Content',
      blocks: [
        { t: 'table', head: ['Move', 'Primary example', 'Secondary example'], rows: [
          ['Texts at different reading levels on the same topic', 'Three books about insects', 'Articles on climate policy at different complexity'],
          ['Audio and video access', 'Listen-along stories', 'Recorded explanations; text-to-speech'],
          ['Curriculum compacting', 'Skip practice of number bonds for those who show mastery', 'Pre-test out of a unit; do an extension project'],
          ['Concrete to abstract', 'Manipulatives for those who need them', 'Diagrams before symbolic algebra'],
          ['Key vocabulary first (pre-teaching)', 'Picture word wall', 'Glossary and word roots before reading'],
          ['Depth and complexity prompts', '“What patterns can you see?”', '“How would an economist and an ecologist disagree?”'],
        ] },
      ],
    },
    {
      id: 'process',
      title: 'Process',
      blocks: [
        { t: 'table', head: ['Move', 'What it looks like'], rows: [
          ['Tiered activities', 'Same goal, different levels of complexity or support'],
          ['Scaffolds on request', 'Hint cards, worked examples, sentence starters available to anyone'],
          ['Flexible grouping', 'Readiness, interest, mixed and random groups that change often'],
          ['Learning stations', 'Rotations with different tasks, one with the teacher'],
          ['Varied time', 'More time for core tasks; anchor activities for those who finish'],
          ['Interactive journals and graphic organisers', 'Different levels of structure'],
          ['Think-alouds and modelling', 'Teacher table for those who need a second explanation'],
        ] },
      ],
    },
    {
      id: 'product',
      title: 'Product',
      blocks: [
        { t: 'p', text: 'Products differ when the skill being assessed allows it. If the goal is “explain how a bill becomes law”, a written explanation, a comic strip, a podcast or a flowchart can all show it, judged by the same success criteria (accuracy, sequence, key terms). If the goal is “write a persuasive essay”, the product must be an essay, but support and topics can differ.' },
        { t: 'checklist', items: [
          'Shared success criteria for every product option',
          'Options of equal rigour, not “easy” and “hard” products',
          'A required core plus optional extensions',
          'Choice boards, RAFT tasks or menus to structure choice',
          'Time and skills taught for any new product format',
        ] },
      ],
    },
    {
      id: 'environment',
      title: 'Environment and affect',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Physical space', body: 'Quiet zone, collaboration tables, a teacher table, resources everyone can reach without asking.' },
          { title: 'Routines', body: 'How to get help when the teacher is busy (“ask three before me”), what to do when finished, how to move between groups.' },
          { title: 'Norms of fairness', body: 'Teach that fair means everyone gets what they need, not everyone gets the same. Many teachers use the “band-aid” lesson with younger children.' },
          { title: 'Affect', body: 'Tomlinson emphasises how learners feel: affirmed, challenged, supported, part of a team. Respectful tasks matter: everyone’s work should be equally interesting and important.' },
        ] },
      ],
    },
  ],
  sources: [
    'Tomlinson, C. A. (2014). The Differentiated Classroom (2nd ed.). ASCD.',
    'Tomlinson, C. A., & Imbeau, M. B. (2010). Leading and Managing a Differentiated Classroom. ASCD.',
    'Reis, S. M., Burns, D. E., & Renzulli, J. S. (1992). Curriculum Compacting. Creative Learning Press.',
  ],
  related: ['teaching/differentiation/strategy-bank', 'teaching/differentiation/choice', 'teaching/differentiation/tiered'],
}

export default guide
