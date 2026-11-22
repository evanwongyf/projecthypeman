import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Perennialism holds that education should cultivate the mind through the enduring ideas of human thought, and that human nature is the same in every age, so the education best suited to a person is the same for everyone. It is the philosophy of the Great Books and the seminar table, associated with Robert Maynard Hutchins and Mortimer Adler. It sounds old-fashioned and in many ways it is, but its central questions, about whether a good education should be common to all and whether it should aim at wisdom or at employability, are as alive as ever.',
  nutshell: [
    'Human nature is **constant**, so education should focus on the **timeless** ideas, not on passing fashions or immediate usefulness.',
    'The curriculum is **common**: the **Great Books** of the Western (and, for modern advocates, wider) tradition, studied by all, taught through **Socratic seminars**.',
    'The aim is **intellectual development** and **wisdom**: training the mind, not training for a job.',
    'Adler’s **Paideia Proposal** (1982) argued for the same quality of education for every child, with three modes of teaching: didactic instruction, coaching and seminar.',
    '**Critics** say it privileges a narrow canon, undervalues vocational education and ignores learners’ experience; **supporters** say it offers every child what only the privileged used to receive.',
  ],
  sections: [
    {
      id: 'core',
      title: 'The central beliefs',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Human nature', title: 'It does not change', body: 'People in every age have the same capacity to reason and the same need to understand. So the best education is the same for all.' },
            { tag: 'Truth', title: 'Universal and enduring', body: 'Some truths and some works of thought matter in every age. The test of a text is that it has lasted and still speaks.' },
            { tag: 'Aim', title: 'The development of the intellect', body: 'Education is about training the mind to think and to judge, and cultivating the virtues that come with understanding.' },
            { tag: 'Method', title: 'Discussion of great works', body: 'Students read the classics directly, not summaries, and discuss them in a seminar led by a teacher who asks questions.' },
            { tag: 'Teacher', title: 'A learned guide', body: 'The teacher has read the works deeply and guides discussion with questions; authority comes from learning, not from technique.' },
            { tag: 'Against', title: 'Vocational and fashionable education', body: 'Job training changes with the economy; the education of the mind does not. Schools should not chase trends.' },
          ],
        },
      ],
    },
    {
      id: 'figures',
      title: 'Hutchins, Adler and the Great Books',
      blocks: [
        { t: 'p', text: 'Robert Maynard Hutchins, president of the University of Chicago from 1929, argued that higher education had drifted into specialisation and vocationalism, and introduced a core curriculum of the great works. With Mortimer Adler he promoted the Great Books of the Western World (published 1952) as a basis for liberal education. Adler’s *Paideia Proposal* (1982) extended the idea to schools, arguing that democracy requires the same good education for every child, with no tracking into an academic and a vocational stream.' },
        {
          t: 'table',
          head: ['Paideia mode of teaching', 'What it develops', 'How'],
          rows: [
            ['Didactic instruction', 'Knowledge', 'Lectures, textbooks, responses'],
            ['Coaching and supervised practice', 'Skills', 'Practice with feedback'],
            ['Socratic seminar', 'Understanding and judgement', 'Discussion of great works and ideas, led by questions'],
          ],
          caption: 'Adler’s three columns of instruction. All three, he argued, are needed.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'What it looks like in a classroom',
      blocks: [
        {
          t: 'example',
          title: 'A Socratic seminar',
          lines: [
            { label: 'Preparation', text: 'Everyone reads a short text closely beforehand, for example a passage from Plato’s Republic or Mencius, and writes a question.' },
            { label: 'Opening question', text: '“What does the author mean when he says that justice is the advantage of the stronger?”' },
            { label: 'Discussion', text: 'Students answer each other, not the teacher, citing the text. The teacher asks: “What in the text makes you say so?” and “Does someone see it differently?”' },
            { label: 'Closing', text: 'Each student writes a sentence: “I changed my mind about… because…”' },
          ],
        },
        { t: 'links', items: [{ path: 'teaching/techniques/questioning/socratic', note: 'Socratic questioning in detail' }, { path: 'teaching/philosophies/classical-education', note: 'Classical education and the trivium' }] },
      ],
    },
    {
      id: 'critique',
      title: 'For and against',
      blocks: [
        {
          t: 'table',
          head: ['In its favour', 'Against it'],
          rows: [
            ['A common, rich curriculum for everyone is a form of equal opportunity', 'Whose canon? The “great” works are mostly by a narrow group of authors'],
            ['Teaches students to read hard texts and reason carefully', 'Can neglect science, technology and practical skills'],
            ['Resists short-term fashion and the narrowing of school to job training', 'Treats human nature as fixed and ignores culture and experience'],
            ['Respects young people’s capacity for serious thought', 'Seminars demand strong readers and well-prepared teachers'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'What survives', text: 'Few schools are purely perennialist today, but its influences are everywhere: the common-core argument behind knowledge-rich curricula, the seminar in universities and schools, and the idea that every pupil deserves access to the best that has been thought and said.' },
      ],
    },
  ],
  sources: [
    'Hutchins, R. M. (1936). The Higher Learning in America. Yale University Press.',
    'Adler, M. J. (1982). The Paideia Proposal: An Educational Manifesto. Macmillan.',
    'Hutchins, R. M., and Adler, M. J. (eds.) (1952). Great Books of the Western World. Encyclopaedia Britannica.',
  ],
  related: ['teaching/philosophies/overview', 'teaching/philosophies/classical-education', 'teaching/philosophies/essentialism'],
}

export default guide
