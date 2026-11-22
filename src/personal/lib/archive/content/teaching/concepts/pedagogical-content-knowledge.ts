import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Why is it that someone who knows a subject brilliantly can be a poor teacher of it, while an experienced teacher with the same degree can make a hard idea suddenly clear? Lee Shulman gave the answer a name in 1986: pedagogical content knowledge, or PCK. It is the knowledge that is specific to teaching a particular topic: the best examples, the commonest misconceptions, the explanation that works for this idea and this kind of learner. This page explains what PCK is, how it differs from content and general pedagogy, what the evidence says and how teachers can build it.',
  nutshell: [
    'Shulman argued that teaching expertise is not **subject knowledge plus teaching technique**, but a **distinct blend**: knowing how a subject is **best taught** and **where learners go wrong**.',
    'PCK includes **powerful representations** (analogies, examples, demonstrations), **what makes a topic easy or hard**, and **common preconceptions**.',
    'The **COACTIV study** in Germany found that teachers’ **PCK** predicted students’ progress in mathematics **more strongly than content knowledge alone**.',
    '**TPACK** (Mishra and Koehler, 2006) adds technology as a third domain.',
    'PCK is built through **teaching the topic repeatedly**, **studying student work and misconceptions**, **lesson study** and **talking with colleagues** in the same subject.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What PCK is',
      blocks: [
        { t: 'p', text: 'Shulman noticed that research on teaching had two blind spots: studies of teaching ignored the content, and studies of content ignored teaching. He proposed a framework of seven categories of the knowledge base for teaching, and singled out one: the special amalgam of content and pedagogy that is uniquely the province of teachers, their own special form of professional understanding.' },
        {
          t: 'table',
          head: ['Knowledge category (Shulman, 1987)', 'What it is'],
          rows: [
            ['Content knowledge', 'The subject itself: facts, concepts, methods and structure'],
            ['General pedagogical knowledge', 'Principles of classroom management, planning, assessment and learning that apply across subjects'],
            ['Curriculum knowledge', 'The programmes, materials and standards for a subject and level'],
            ['Pedagogical content knowledge', 'How to teach this particular content to these learners'],
            ['Knowledge of learners', 'Their characteristics, backgrounds, development and cognition'],
            ['Knowledge of educational contexts', 'Classrooms, schools, communities and cultures'],
            ['Knowledge of educational ends', 'Purposes, values and philosophical foundations'],
          ],
        },
      ],
    },
    {
      id: 'parts',
      title: 'What is inside PCK',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Representations', title: 'The best way to show it', body: 'Analogies, models, metaphors, diagrams, demonstrations and worked examples that make a particular idea clear. For fractions, a number line, a pizza, a bar model.' },
            { tag: 'Difficulty', title: 'What makes it hard', body: 'Which parts of a topic are easy, which are troublesome, and why. A teacher knows that signs, not arithmetic, are where students fail in algebra.' },
            { tag: 'Preconceptions', title: 'What learners already think', body: 'Everyday ideas and common misconceptions (“heavier things fall faster”, “summer is when the earth is closer to the sun”) and how to confront them.' },
            { tag: 'Sequence', title: 'What to teach first', body: 'Which ideas are prerequisites, and the order in which the topic builds.' },
            { tag: 'Assessment', title: 'How to tell if they understand', body: 'The questions that reveal understanding, and the wrong answers that reveal particular misconceptions.' },
            { tag: 'Curriculum', title: 'How the topic fits', body: 'How it connects to the rest of the subject and what comes later.' },
          ],
        },
        {
          t: 'example',
          title: 'PCK for the topic “seasons”',
          lines: [
            { label: 'Common misconception', text: 'Many students, and adults, think summer happens when the Earth is closest to the Sun. In fact the Earth is closest in January, in the northern winter.' },
            { label: 'A teacher with PCK', text: 'Knows the misconception, asks first: “Why do you think it is hotter in summer?”, then uses a lamp and a tilted globe to show that tilt changes the angle and the day length.' },
            { label: 'A teacher without', text: 'States the right answer (“the tilt of the Earth’s axis”) and moves on; the misconception survives.' },
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence says',
      blocks: [
        { t: 'p', text: 'The COACTIV study (Baumert and colleagues, 2010) tested over 180 secondary mathematics teachers in Germany and their students. It found that teachers’ PCK, measured by tasks such as explaining multiple ways to solve a problem or identifying the misconception behind a wrong answer, predicted their students’ progress, and that it mattered more than content knowledge alone, though the two were linked. Strong content knowledge was necessary, but not enough.' },
        {
          t: 'callout',
          tone: 'note',
          title: 'Interpret with care',
          text: 'PCK is hard to measure, and definitions differ. Studies in other subjects and countries are fewer and the findings more mixed. The practical message, though, is consistent: depth of subject knowledge, plus knowledge of how learners think about the topic, is the basis of good explanation and good questioning.',
        },
        {
          t: 'table',
          head: ['Framework', 'Adds', 'Question it asks'],
          rows: [
            ['PCK (Shulman, 1986)', 'The fusion of content and pedagogy', 'How do I best teach this topic to these students?'],
            ['TPACK (Mishra and Koehler, 2006)', 'Technology as a third domain, with its overlaps', 'How can technology serve this content and this pedagogy?'],
            ['Mathematical knowledge for teaching (Ball and colleagues, 2008)', 'Specialised content knowledge: the mathematics teachers use that others do not, such as judging unusual student methods', 'Can I make sense of this student’s odd solution?'],
          ],
        },
      ],
    },
    {
      id: 'build',
      title: 'Building PCK',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Teach the topic more than once', body: 'PCK grows with repeated teaching of the same topic and reflection on what happened.' },
            { title: 'Collect misconceptions', body: 'Keep a list of wrong answers, and ask students to explain their reasoning. Diagnostic questions help.' },
            { title: 'Study student work', body: 'Look at samples in a group and ask what each error shows about thinking.' },
            { title: 'Try lesson study', body: 'Plan one lesson with colleagues, teach it with others observing the students, then revise (see the Japanese lesson study model).' },
            { title: 'Talk to subject colleagues', body: 'Ask: “How do you teach this?” Collect the best explanations and examples.' },
            { title: 'Keep learning the subject', body: 'You cannot explain what you do not understand deeply. Read beyond the syllabus.' },
          ],
        },
        { t: 'links', items: [{ path: 'teaching/techniques/questioning/hinge-questions', note: 'Hinge questions that reveal misconceptions' }, { path: 'teaching/guides/growth/coaching', note: 'Observation and coaching' }, { path: 'teaching/techniques/instruction/explaining', note: 'Explaining well' }] },
      ],
    },
  ],
  sources: [
    'Shulman, L. S. (1986). Those who understand: knowledge growth in teaching. Educational Researcher.',
    'Shulman, L. S. (1987). Knowledge and teaching: foundations of the new reform. Harvard Educational Review.',
    'Baumert, J., et al. (2010). Teachers’ mathematical knowledge, cognitive activation in the classroom, and student progress. American Educational Research Journal.',
    'Mishra, P., and Koehler, M. J. (2006). Technological pedagogical content knowledge. Teachers College Record.',
    'Ball, D. L., Thames, M. H., and Phelps, G. (2008). Content knowledge for teaching: what makes it special? Journal of Teacher Education.',
  ],
  related: ['teaching/concepts/technology-frameworks', 'teaching/techniques/instruction/explaining', 'teaching/guides/growth/coaching'],
}

export default guide
