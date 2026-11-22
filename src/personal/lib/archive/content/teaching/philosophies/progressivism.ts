import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Progressivism begins from the learner: education should grow out of real experience, develop the whole child, and prepare young people for life in a democracy by letting them practise it. Its best-known voice is John Dewey, and it is often blamed for classroom chaos that Dewey himself would have rejected. This page sets out what progressivism actually claims, the key ideas (experience, the project method, the democratic classroom), the evidence, and why so many caricatures of it are wrong.',
  nutshell: [
    'Dewey argued that education is **a continuing reconstruction of experience**: we learn by doing and reflecting, and the school should be a **community in miniature**.',
    'The curriculum grows from **children’s interests and real problems**, guided by a teacher who knows where the learning could go.',
    'Dewey rejected both the **traditional** (fixed content, passive pupils) and the **“anything goes”** (no direction) extremes in *Experience and Education* (1938).',
    'Kilpatrick’s **project method** and later **inquiry** and **project-based learning** descend from this tradition.',
    'Evidence is **mixed**: well-guided inquiry and projects can help; unguided discovery generally does not, especially for novices.',
  ],
  sections: [
    {
      id: 'dewey',
      title: 'John Dewey’s ideas',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Experience', title: 'Learning is from experience, not any experience', body: 'Experiences must be educative: they must lead to growth and connect to later experience. Some are mis-educative and close off growth.' },
            { tag: 'Interest', title: 'Start from the learner', body: 'Begin with what the child knows and cares about, and lead out towards the organised knowledge of the disciplines.' },
            { tag: 'Democracy', title: 'The school as a community', body: 'A school that practises shared decision-making and cooperation prepares children for democratic life better than one that demands obedience.' },
            { tag: 'Reflection', title: 'Think after you act', body: 'Learning needs reflection. Doing without thinking is activity, not education. Dewey’s “how we think” sets out a cycle of problem, hypothesis, testing and reflection.' },
            { tag: 'Teacher', title: 'A guide with a plan', body: 'The teacher is not passive: she selects and arranges experiences, and knows the subject and the child.' },
            { tag: 'Continuity', title: 'Content and child are linked', body: 'The child and the curriculum are two ends of a process; the teacher’s task is to connect them.' },
          ],
        },
        { t: 'quote', text: 'The belief that all genuine education comes about through experience does not mean that all experiences are genuinely or equally educative.', by: 'John Dewey, Experience and Education (1938)' },
      ],
    },
    {
      id: 'method',
      title: 'The project method and its descendants',
      blocks: [
        { t: 'p', text: 'William Heard Kilpatrick, a student of Dewey, popularised the project method in 1918: students plan and carry out a purposeful activity, such as building a model, running a shop or investigating a local river, and learn the subject matter in the process. The line runs from there through the activity movement, the open classroom of the 1960s and 70s, to inquiry-based and project-based learning today.' },
        {
          t: 'steps',
          items: [
            { title: 'Purpose', body: 'The students choose or agree a worthwhile aim that they care about.' },
            { title: 'Planning', body: 'They plan the work, decide what they need to learn and who will do what.' },
            { title: 'Execution', body: 'They carry out the project, with guidance, using subject knowledge as it is needed.' },
            { title: 'Judging', body: 'They evaluate the product and the process against the aim.' },
          ],
        },
        { t: 'links', items: [{ path: 'teaching/techniques/active-learning/project-based', note: 'Project-based learning' }, { path: 'teaching/techniques/active-learning/inquiry', note: 'Inquiry-based learning' }, { path: 'teaching/theories/experiential', note: 'Experiential learning' }] },
      ],
    },
    {
      id: 'myth',
      title: 'What progressivism is not',
      blocks: [
        {
          t: 'table',
          head: ['Common claim', 'What Dewey actually argued'],
          rows: [
            ['Children should do what they like', 'Freedom is guided: interests are a starting point, not the destination'],
            ['There is no curriculum or no knowledge to learn', 'The curriculum organises knowledge; the teacher leads the learner into it'],
            ['The teacher does nothing', 'The teacher’s task is harder: planning experiences and guiding them'],
            ['It is anti-discipline', 'He wrote that the progressive school needs more planning and organisation than the traditional one'],
          ],
          caption: 'Dewey wrote Experience and Education partly to criticise followers who he thought had misapplied his ideas.',
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence says',
      blocks: [
        { t: 'p', text: 'The evidence is mixed and depends on what is meant. Where “progressive” means minimal guidance, especially for novices, studies tend to find it less effective than explicit instruction. Where it means well-structured inquiry or projects with strong teacher guidance and clear learning goals, results can be good, particularly for motivation, application and the transfer of knowledge. The research suggests that the guidance, not the label, makes the difference.' },
        {
          t: 'table',
          head: ['Approach', 'Findings in brief'],
          rows: [
            ['Minimally guided discovery', 'Novices often do worse than with explicit instruction (Kirschner, Sweller and Clark, 2006)'],
            ['Guided inquiry and problem-based learning with support', 'Often as effective, and better for application and motivation (Hmelo-Silver and colleagues, 2007)'],
            ['Project-based learning', 'Moderately positive in some reviews, with quality of implementation crucial'],
            ['Democratic school governance', 'Associated with better climate and engagement, with limited evidence on achievement'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Take the best of it', text: 'Start from what students know, give them purposeful problems, teach the prerequisite knowledge explicitly, and reflect afterwards. This combines Dewey’s purposes with the cognitive science of how novices learn.' },
      ],
    },
  ],
  sources: [
    'Dewey, J. (1938). Experience and Education. Macmillan.',
    'Dewey, J. (1916). Democracy and Education. Macmillan.',
    'Kilpatrick, W. H. (1918). The project method. Teachers College Record.',
    'Kirschner, P. A., Sweller, J., and Clark, R. E. (2006). Why minimal guidance during instruction does not work. Educational Psychologist.',
    'Hmelo-Silver, C. E., Duncan, R. G., and Chinn, C. A. (2007). Scaffolding and achievement in problem-based and inquiry learning. Educational Psychologist.',
  ],
  related: ['teaching/philosophies/overview', 'teaching/philosophies/essentialism', 'teaching/theories/experiential'],
}

export default guide
