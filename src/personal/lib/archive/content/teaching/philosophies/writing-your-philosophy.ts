import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A philosophy of teaching statement is a short, honest account of what you believe about teaching and learning and how those beliefs show up in your classroom. Schools ask for one in applications and interviews, but its real value is private: writing it forces you to find out what you actually think, and to notice the gaps between belief and practice. This page gives you a set of questions to think through, a structure for the statement, a worked example, and tests to check that your philosophy is a working tool rather than a collection of fine words.',
  nutshell: [
    'A good statement is **specific, personal and evidence-backed**: it says what you do, why, and how you know it works.',
    'Start from **questions**, not slogans: why do you teach, what do you want students to be able to do, how do people learn, what is your role?',
    '**Show, do not tell**: replace “I believe in student-centred learning” with an example of a lesson.',
    'Test it: does your **practice match** your beliefs? Where do they conflict, and what will you do?',
    'Keep it **short** (one page), **alive** (revise it each year) and **humble** (say what you are still working out).',
  ],
  sections: [
    {
      id: 'questions',
      title: 'Questions to think through',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Why did I become a teacher, and what do I want my students to remember in ten years?',
            'What is school for? Knowledge, citizenship, careers, character, well-being, or all of them?',
            'How do people learn? What do I believe about memory, practice, motivation and understanding?',
            'What is my role: expert, coach, guide, facilitator, role model?',
            'What are my students like, and how do I know? What do they bring from home and community?',
            'How do I want my classroom to feel? What are its rules and why?',
            'How do I know whether my students are learning? What counts as evidence?',
            'What do I do about students who struggle, and those who are far ahead?',
            'How do I handle conflict and misbehaviour?',
            'Which of the philosophies on this shelf do I lean towards, and where do I borrow from others?',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Write fast, then edit', text: 'Spend ten minutes answering each question in plain sentences without worrying about style. Circle the sentences that surprised you or that you feel strongly about. Those are the raw material.' },
      ],
    },
    {
      id: 'structure',
      title: 'A structure for the statement',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Open with a conviction and a moment', body: 'A short, true story or image that shows what you care about. Avoid a dictionary definition of teaching.' },
            { title: 'State two or three core beliefs', body: 'Each in a sentence: about learning, about relationships, about what matters.' },
            { title: 'Show each belief in practice', body: 'A concrete example of what you do in the classroom, with a number, a name or a lesson.' },
            { title: 'Say how you know it works', body: 'Evidence: student work, feedback, results, research.' },
            { title: 'Name a tension or a limit', body: 'Where your beliefs pull against each other or your situation, and how you handle it.' },
            { title: 'Look forward', body: 'What you want to learn or improve next.' },
          ],
        },
      ],
    },
    {
      id: 'example',
      title: 'A short example',
      blocks: [
        {
          t: 'example',
          title: 'An invented example: a secondary mathematics teacher',
          lines: [
            { label: 'Opening', text: 'In my first year, a Secondary 2 student told me, “I am just bad at maths.” I want no student to leave my class believing that.' },
            { label: 'Belief 1', text: 'Most students can master the material if they get clear teaching, practice and feedback. I explain explicitly, with worked examples, then fade support (see the work on cognitive load).' },
            { label: 'In practice', text: 'Each lesson starts with five retrieval questions on last week’s work, so that earlier learning stays alive. My students’ end-of-year retention test scores rose by about eight points after I began this.' },
            { label: 'Belief 2', text: 'Students work harder for a teacher who knows them. I learn names in the first week, greet each at the door, and phone home about something good within a fortnight.' },
            { label: 'Belief 3', text: 'Mistakes are the raw material of learning. I ask students to show their wrong answers and we work out why.' },
            { label: 'A tension', text: 'I value exploration, but the syllabus and exams limit time. I protect one lesson a fortnight for an open problem, and use exam questions to make sure the basics are secure.' },
            { label: 'Next', text: 'I want to get better at stretching my strongest students, and I am visiting a colleague who does this well.' },
          ],
        },
      ],
    },
    {
      id: 'test',
      title: 'Testing it against practice',
      blocks: [
        {
          t: 'table',
          head: ['If you say…', 'Check by asking…'],
          rows: [
            ['“I believe in student-centred learning”', 'What proportion of lesson time are students talking and doing? What choices do they actually make?'],
            ['“I have high expectations for all”', 'Do I ask the same quality of questions of every student? Whom do I call on?'],
            ['“I value the whole child”', 'What do I know about my students’ lives? How do I respond to well-being issues?'],
            ['“I assess for learning”', 'How do I find out in the lesson whether they understood? What do I do with the answer?'],
            ['“I run a respectful classroom”', 'How do I speak when I am annoyed? How do I repair after a conflict?'],
          ],
        },
        {
          t: 'dodont',
          do: ['Be specific and give examples.', 'Use your own voice; avoid jargon.', 'Say what you are still learning.', 'Ask a colleague or a student to say if it matches what they see.'],
          dont: ['Do not list buzzwords (“lifelong learners”, “21st-century skills”) without meaning.', 'Do not copy someone else’s statement.', 'Do not claim you do everything.', 'Do not write it once and forget it.'],
        },
        { t: 'links', items: [{ path: 'teaching/philosophies/overview', note: 'A map of the traditions' }, { path: 'teaching/guides/growth/reflection', note: 'Reflective practice' }, { path: 'teaching/guides/growth/coaching', note: 'Observation and coaching' }] },
      ],
    },
  ],
  sources: [
    'Schönwetter, D. J., Sokal, L., Friesen, M., and Taylor, K. L. (2002). Teaching philosophies reconsidered. International Journal for Academic Development.',
    'Brookfield, S. D. (2017). Becoming a Critically Reflective Teacher (2nd ed.). Jossey-Bass.',
    'Noddings, N. (2016). Philosophy of Education (4th ed.). Westview Press.',
  ],
  related: ['teaching/philosophies/overview', 'teaching/guides/growth/reflection'],
}

export default guide
