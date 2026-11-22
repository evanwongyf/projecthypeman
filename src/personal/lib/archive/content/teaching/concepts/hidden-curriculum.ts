import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every school teaches two curricula. One is written down: the syllabus, the schemes of work, the textbooks. The other is not written anywhere but every student learns it: how to behave, who has power, what counts as success, whose language and culture are valued, how much you should obey. Philip Jackson called this the hidden curriculum, and Elliot Eisner added a third: the null curriculum, what schools do not teach. This page explains all three, shows how they operate through routines, assessment and the structure of the school, and gives a way to audit what your own classroom is teaching without saying so.',
  nutshell: [
    'The **explicit curriculum** is what is written and taught; the **hidden (implicit) curriculum** is what is learned from the way school works; the **null curriculum** is what is left out.',
    '**Philip Jackson** (*Life in Classrooms*, 1968) described the “three Rs” of the hidden curriculum: **rules, routines and regulations**, that teach crowds, praise and power.',
    '**Eisner** (1979) argued that **what we do not teach** also teaches: it tells students that some knowledge, skills and viewpoints do not matter.',
    'Critical theorists (Bowles and Gintis, Bourdieu, Apple) argue that the hidden curriculum **reproduces social inequality**.',
    'Teachers can **make the hidden visible**: audit routines, examples, language, assessment and what is missing, and change what contradicts your stated values.',
  ],
  sections: [
    {
      id: 'three',
      title: 'Three curricula',
      blocks: [
        {
          t: 'table',
          head: ['Curriculum', 'What it is', 'Example'],
          rows: [
            ['Explicit', 'The official, written, intended content and aims', 'The Secondary 3 history syllabus'],
            ['Hidden (implicit)', 'The unwritten lessons of school life: values, norms, expectations', 'Learn to wait your turn, to please the teacher, to compete for ranks, to value the subjects that carry weight in exams'],
            ['Null', 'What is not taught: topics, skills, perspectives left out', 'No lessons on how to manage money, or whose voices are missing from the history textbook'],
          ],
        },
        
      ],
    },
    {
      id: 'how',
      title: 'How the hidden curriculum works',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Routines', title: 'Crowds, praise and power', body: 'Jackson saw that students learn to live in a crowd, to be judged and to submit to authority: patience, waiting, delay and denial.' },
            { tag: 'Assessment', title: 'What gets measured gets valued', body: 'If only exam subjects count, students learn that other subjects, and the skills not examined, matter less.' },
            { tag: 'Structure', title: 'Streams and rankings', body: 'Placement in a stream or a rank teaches students where they “stand”, and what to expect of themselves.' },
            { tag: 'Language', title: 'Whose language and culture', body: 'Which languages, accents and examples are normal tells students whose lives count.' },
            { tag: 'Space', title: 'Layout and rules', body: 'Rows facing the teacher teach one thing; circles teach another. Uniform and silence say something about conformity.' },
            { tag: 'Teachers', title: 'Teacher behaviour', body: 'How teachers treat students, whom they call on and how they speak about others, teach respect or contempt more than any lesson on respect.' },
          ],
        },
        {
          t: 'table',
          head: ['Theorist', 'Claim about the hidden curriculum'],
          rows: [
            ['Bowles and Gintis (1976)', 'The correspondence principle: schools mirror the hierarchy of the workplace, preparing different groups for different positions through obedience, punctuality and compliance'],
            ['Bourdieu (1977)', 'Schools reward the cultural capital (language, tastes, habits) of middle-class families, so appear neutral while advantaging some'],
            ['Apple (1979)', 'Curriculum is a selection of knowledge reflecting power, and conflicts and the voices of the less powerful are often absent'],
            ['Jackson (1968)', 'The unnoticed daily routines teach students how to cope with crowds, evaluation and authority'],
          ],
        },
      ],
    },
    {
      id: 'singapore',
      title: 'A look at Singapore',
      blocks: [
        { t: 'p', text: 'Every system has a hidden curriculum, and discussion of Singapore’s often points to messages carried by examination, ranking and streaming: that academic results are the key measure of worth, that efficiency and competition matter, and that the system rewards the early. Education officials have spoken of reducing this emphasis: removing mid-year exams at some levels, changing the PSLE scoring to wider bands, and moving to Full Subject-Based Banding so that early labels matter less. These are in part attempts to change the hidden curriculum, not only the written one.' },
        { t: 'callout', tone: 'note', title: 'The hidden curriculum is not all bad', text: 'Schools also teach punctuality, cooperation, perseverance, respect for others and the habit of working with people one did not choose. The aim is not to eliminate the hidden curriculum but to make it conscious and consistent with what you intend.' },
      ],
    },
    {
      id: 'audit',
      title: 'Auditing your classroom',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Whose names, faces, languages and stories appear in my examples and materials? Whose are missing?',
            'Whom do I call on, praise and correct, and are there patterns by gender, race, language or perceived ability?',
            'What do my routines teach: compliance, curiosity, fear of error, or a willingness to take risks?',
            'What do my assessments reward: understanding or recall, individual or cooperative work, speed or depth?',
            'What topics and skills do I never mention that students may need (the null curriculum)?',
            'How do I talk about mistakes, effort, ability and failure?',
            'What do students learn from how I handle conflict and misbehaviour?',
          ],
        },
        { t: 'links', items: [{ path: 'teaching/concepts/teacher-expectations', note: 'Expectations and the self-fulfilling prophecy' }, { path: 'teaching/concepts/streaming-and-tracking', note: 'Streaming and tracking' }, { path: 'teaching/philosophies/critical-pedagogy', note: 'Critical pedagogy' }] },
      ],
    },
  ],
  sources: [
    'Jackson, P. W. (1968). Life in Classrooms. Holt, Rinehart and Winston.',
    'Eisner, E. W. (1979). The Educational Imagination. Macmillan.',
    'Bowles, S., and Gintis, H. (1976). Schooling in Capitalist America. Basic Books.',
    'Bourdieu, P., and Passeron, J.-C. (1977). Reproduction in Education, Society and Culture. Sage.',
    'Apple, M. W. (1979). Ideology and Curriculum. Routledge.',
  ],
  related: ['teaching/concepts/curriculum-models', 'teaching/concepts/teacher-expectations', 'teaching/philosophies/critical-pedagogy'],
}

export default guide
