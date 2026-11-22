import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every teacher has a philosophy of education, whether or not they could state it. It is the set of beliefs behind a hundred daily choices: whether to explain or let students discover, whether to correct or to wait, whether the curriculum is a body of knowledge to be handed on or a set of questions to be explored. This page sets out the questions that any philosophy of education must answer, maps the main traditions on two axes, and gives a comparison table of the major schools of thought that the rest of this shelf explores.',
  nutshell: [
    'A philosophy of education answers **what education is for**, **what should be taught**, **how**, and **who decides**.',
    'The main traditions differ on whether the **teacher** or the **learner** is at the centre, and whether the **content** is fixed or evolving.',
    '**Perennialism** and **essentialism** are teacher-centred and knowledge-centred; **progressivism**, **existentialism** and **free schools** are learner-centred; **critical pedagogy** is society-centred.',
    'No tradition is simply right: each captures a truth and has a blind spot. Good teachers **borrow thoughtfully** and know why.',
    'Philosophy matters because it shapes policy: debates about testing, discipline, curriculum and streaming are philosophical debates in disguise.',
  ],
  sections: [
    {
      id: 'questions',
      title: 'The questions every philosophy answers',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Aims', title: 'What is education for?', body: 'Knowledge for its own sake, preparing citizens, preparing workers, personal fulfilment, social change, moral character?' },
            { tag: 'Content', title: 'What should be taught?', body: 'A common core of great works and ideas, the essential skills, the learner’s interests, issues of justice, or whatever the community values?' },
            { tag: 'Method', title: 'How should it be taught?', body: 'Direct instruction, discovery, dialogue, projects, apprenticeship, memorisation, play?' },
            { tag: 'Authority', title: 'Who decides, and who is the teacher?', body: 'An expert transmitter, a guide, a co-learner, a facilitator? Do students have a say?' },
            { tag: 'Nature', title: 'What is a learner?', body: 'An empty vessel, a growing plant, a builder of understanding, a free agent, a member of a community?' },
            { tag: 'Knowledge', title: 'What is knowledge?', body: 'Fixed truths, provisional and constructed, or a tool for solving problems? This is the branch of philosophy called epistemology.' },
          ],
        },
      ],
    },
    {
      id: 'map',
      title: 'A map of the traditions',
      blocks: [
        {
          t: 'table',
          head: ['Tradition', 'Aim of education', 'Curriculum', 'Teacher', 'Key figures'],
          rows: [
            ['Perennialism', 'Develop the intellect through enduring ideas', 'Great Books, a common liberal curriculum', 'An authority and guide to the classics', 'Hutchins, Adler'],
            ['Essentialism', 'Hand on essential knowledge and skills', 'Core subjects and basics, a knowledge-rich curriculum', 'An expert who explains and corrects', 'Bagley, Hirsch'],
            ['Progressivism', 'Grow through experience; democratic citizenship', 'Experience, projects, problem-solving, learner interest', 'A guide who designs experiences', 'Dewey, Kilpatrick'],
            ['Social reconstructionism / critical pedagogy', 'Build a more just society', 'Social issues, dialogue about power', 'A co-investigator and change agent', 'Counts, Freire, hooks'],
            ['Existentialism and humanism', 'Authenticity, choice and meaning', 'Open: arts, humanities, personal inquiry', 'A person who helps students become themselves', 'Buber, Greene, Rogers'],
            ['Montessori, Waldorf, Reggio', 'Develop the whole child, in a prepared environment', 'Materials, arts, projects', 'An observer-guide', 'Montessori, Steiner, Malaguzzi'],
            ['Free and democratic schools', 'Freedom and self-direction', 'Chosen by the learner', 'An available resource', 'Neill, Sudbury'],
            ['Classical education', 'Wisdom and virtue through the trivium', 'Grammar, logic, rhetoric; the liberal arts', 'A master of a tradition', 'Quintilian, Sayers'],
            ['Confucian traditions', 'Moral cultivation and social harmony; mastery through effort', 'Classical texts; later, examination subjects', 'A moral exemplar', 'Confucius, Zhu Xi'],
            ['Ubuntu and Indigenous education', 'Personhood through relationship with community and place', 'Stories, practices, place-based knowledge', 'Elders and community', 'Many traditions'],
          ],
        },
      ],
    },
    {
      id: 'axes',
      title: 'Two axes: who is at the centre, and is the content fixed?',
      blocks: [
        {
          t: 'table',
          head: ['', 'Content fixed (the past matters most)', 'Content evolving (the present and future)'],
          rows: [
            ['Teacher-centred', 'Perennialism, classical, essentialism, Confucian traditions', 'Behaviourist training for changing skills'],
            ['Learner-centred', 'Montessori (with a fixed sequence of materials)', 'Progressivism, existentialism, free schools'],
            ['Society-centred', 'Some religious and civic traditions', 'Social reconstructionism, critical pedagogy'],
          ],
          caption: 'A simplification. Many real schools and many teachers blend several traditions.',
        },
        { t: 'callout', tone: 'note', title: 'Few teachers are purists', text: 'A teacher may be essentialist about reading (explicit phonics), progressive about projects, and Confucian about effort. What matters is that the blend is chosen for reasons and checked against evidence.' },
      ],
    },
    {
      id: 'policy',
      title: 'Why it matters: debates in disguise',
      blocks: [
        {
          t: 'table',
          head: ['Debate', 'Philosophies in tension'],
          rows: [
            ['Knowledge-rich versus skills-based curricula', 'Essentialism and perennialism versus progressivism'],
            ['Direct instruction versus inquiry', 'Essentialism versus progressivism and constructivism'],
            ['Strict behaviour policies versus restorative approaches', 'Essentialism and Confucian authority versus humanism and democratic schooling'],
            ['High-stakes exams and streaming', 'Meritocracy and Confucian effort culture versus progressive and equity critiques'],
            ['Decolonising the curriculum', 'Critical pedagogy and Indigenous education versus perennialism and essentialism'],
            ['Compulsory attendance and free schooling', 'State and parental authority versus free-school and unschooling ideas'],
          ],
        },
        { t: 'links', items: [{ path: 'teaching/philosophies/progressivism', note: 'Dewey and learning by doing' }, { path: 'teaching/philosophies/essentialism', note: 'Knowledge-rich curricula' }, { path: 'teaching/philosophies/writing-your-philosophy', note: 'State your own' }] },
      ],
    },
  ],
  sources: [
    'Ornstein, A. C., and Levine, D. U. (2008). Foundations of Education (10th ed.). Houghton Mifflin.',
    'Noddings, N. (2016). Philosophy of Education (4th ed.). Westview Press.',
    'Dewey, J. (1938). Experience and Education. Macmillan.',
  ],
  related: ['teaching/philosophies/perennialism', 'teaching/philosophies/progressivism', 'teaching/philosophies/writing-your-philosophy'],
}

export default guide
