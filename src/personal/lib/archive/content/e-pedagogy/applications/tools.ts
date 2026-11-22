import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'There are thousands of educational tools, and new ones every week. The useful question is not “Which app is best?” but “What learning job do I need done, and which kind of tool does that job?” This guide maps tool types to learning purposes.',
  nutshell: [
    'A **learning management system** (LMS) such as Singapore’s **Student Learning Space** organises content, tasks, feedback and data.',
    'Choose tools by purpose: **explain**, **practise**, **discuss**, **create**, **simulate**, **assess**.',
    'Fewer tools used well beat many tools used shallowly.',
  ],
  sections: [
    {
      id: 'map',
      title: 'Tools by purpose',
      blocks: [
        { t: 'table', head: ['Purpose', 'Tool types', 'Examples', 'Use well by…'], rows: [
          ['Organise', 'LMS', 'SLS, Google Classroom, Canvas, Moodle', 'One consistent weekly structure'],
          ['Explain', 'Video, interactive slides, screencasts', 'Short teacher videos, annotated diagrams', 'Short segments with questions'],
          ['Practise', 'Quizzing, adaptive practice, flashcards', 'SLS quizzes, Quizlet, Anki, adaptive maths', 'Low stakes, immediate feedback, spaced'],
          ['Discuss', 'Forums, chat, video calls, padlets', 'SLS discussion boards, Padlet', 'Structured prompts and roles'],
          ['Create', 'Docs, slides, video, coding, design', 'Google Docs, Canva, Scratch', 'Clear success criteria'],
          ['Simulate', 'Simulations, virtual labs, VR', 'PhET, virtual labs, GeoGebra', 'Predict–observe–explain'],
          ['Assess', 'Forms, auto-marked tests, rubrics, portfolios', 'SLS assignments, rubric tools', 'Align with outcomes; use the data'],
          ['Respond live', 'Polls, live quizzes, mini whiteboards', 'Kahoot, Mentimeter, Pear Deck', 'Every learner answers; discuss wrong answers'],
        ] },
      ],
    },
    {
      id: 'choose',
      title: 'Choosing a tool',
      blocks: [
        { t: 'checklist', items: [
          'What will learners do with it, and is that the thinking I want?',
          'Does it remove a real constraint (time, equipment, feedback, reach)?',
          'Is it accessible (screen readers, captions, keyboard use) and does it work on phones?',
          'What data does it collect, and does it meet privacy rules (PDPA, school policy)?',
          'Can I learn it in under an hour, and can students learn it in five minutes?',
          'Will it still exist next year? Can I export my content?',
          'Is it free of ads and dark patterns?',
        ] },
        { t: 'callout', tone: 'tip', title: 'The two-tool rule', text: 'Many experienced online teachers settle on the platform plus one or two tools they know deeply. Every extra tool adds log-ins and interface load for learners.' },
      ],
    },
  ],
  sources: [
    'Ministry of Education Singapore. Student Learning Space (vle.learning.moe.edu.sg).',
    'Bates, A. W. (2022). Teaching in a Digital Age (3rd ed.). Tony Bates Associates (open textbook).',
  ],
  related: ['e-pedagogy/theory/foundations', 'e-pedagogy/applications/video-and-flipped', 'e-pedagogy/applications/online-assessment'],
}

export default guide
