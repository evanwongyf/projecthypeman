import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Online assessment can do two very different jobs. Formative assessment (quizzes, feedback, practice) is where digital tools shine: they make frequent, low-stakes retrieval and instant feedback cheap. Summative assessment (grades, certificates) online raises hard questions about integrity, especially now that AI can produce essays and solve problems.',
  nutshell: [
    'Use digital quizzes for **frequent low-stakes retrieval with feedback**: the testing effect is one of the strongest findings in learning science.',
    'Good feedback says **where you are, where you are going, and how to close the gap** (Hattie and Timperley, 2007).',
    'For integrity, **redesign the task** (process evidence, oral checks, personal and local contexts) rather than relying on surveillance or AI detectors.',
  ],
  sections: [
    {
      id: 'formative',
      title: 'Formative: practice and feedback',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Retrieval quizzes', body: 'Short quizzes at the start of lessons on earlier material. Auto-marked, unlimited attempts, questions shuffled.' },
          { title: 'Hinge questions online', body: 'One multiple-choice question whose wrong answers reveal specific misconceptions; the live results decide what to do next.' },
          { title: 'Feedback at scale', body: 'Comment banks, audio feedback, rubrics with linked resources, and AI-drafted feedback that the teacher checks.' },
          { title: 'Peer review', body: 'Structured rubrics and exemplars; learners improve by assessing others’ work.' },
        ] },
        { t: 'levels', caption: 'Hattie and Timperley’s four levels of feedback, from least to most powerful for learning.', items: [
          { name: 'Self', body: '“Well done!” Praise about the person: least useful for learning.' },
          { name: 'Task', body: '“Question 3 is wrong.” Correctness.' },
          { name: 'Process', body: '“You divided before multiplying; check the order of operations.” Strategy.' },
          { name: 'Self-regulation', body: '“How could you check your answer before submitting?” Building independent monitoring.' },
        ] },
      ],
    },
    {
      id: 'integrity',
      title: 'Summative: integrity in an AI age',
      blocks: [
        { t: 'table', head: ['Approach', 'Strength', 'Weakness'], rows: [
          ['Remote proctoring', 'Deters some cheating', 'Privacy, bias, anxiety; can be beaten'],
          ['AI-text detectors', 'Easy to run', 'Unreliable; false accusations; biased against non-native writers'],
          ['Process evidence', 'Drafts, version history, plans and reflections show the work', 'More marking time'],
          ['Oral defence / viva', 'Five minutes of questions reveals understanding', 'Time; anxiety for some'],
          ['Authentic, personal tasks', 'Local data, personal experience, recent events; hard to outsource', 'Design effort'],
          ['In-class supervised tasks', 'Secure', 'Less time for teaching'],
          ['Assess AI use openly', 'Students show how they used AI and evaluate its output', 'Needs clear criteria'],
        ] },
        { t: 'callout', tone: 'tip', title: 'A two-lane approach', text: 'Many universities (for example Sydney’s “two-lane” model) separate secure assessments, done under supervision, from open assessments where AI use is allowed and taught. Each lane has a clear purpose.' },
      ],
    },
  ],
  sources: [
    'Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning. Psychological Science, 17(3), 249–255.',
    'Hattie, J., & Timperley, H. (2007). The power of feedback. Review of Educational Research, 77(1), 81–112.',
    'Black, P., & Wiliam, D. (1998). Inside the Black Box. King’s College London.',
    'Liu, D., & Bridgeman, A. (2023). What to do about assessments if we can’t out-design or out-run AI? University of Sydney.',
  ],
  related: ['teaching/techniques/questioning/hinge-questions', 'e-pedagogy/applications/ai-in-education', 'teaching/techniques/learning-strategies/retrieval-practice'],
}

export default guide
