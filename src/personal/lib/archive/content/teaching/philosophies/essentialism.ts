import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Essentialism says that there is a core of knowledge and skills that every young person should learn, that learning is hard work that needs discipline and a knowledgeable teacher, and that the school’s job is to hand on the essentials of a culture. It was named by William Bagley in the 1930s in response to progressive education, and it has returned in recent decades as the knowledge-rich curriculum movement, led by E. D. Hirsch’s Core Knowledge and influenced by cognitive science. This page sets out the essentialist case, the evidence people cite for it and the criticisms.',
  nutshell: [
    'There is a **core of knowledge and skills** (reading, writing, mathematics, science, history, the arts) that all students should learn.',
    'The teacher is an **expert** who explains, models and corrects; the curriculum is **organised and sequenced**; discipline and effort matter.',
    'E. D. Hirsch’s **cultural literacy** argues that **background knowledge** is the key to reading comprehension and to equity.',
    'Cognitive science supports parts of it: **working memory is limited**, **prior knowledge** drives learning, and novices benefit from **explicit instruction**.',
    'Critics worry about **coverage over understanding**, a narrow selection of knowledge and neglect of creativity and student voice.',
  ],
  sections: [
    {
      id: 'beliefs',
      title: 'The essentialist position',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Content', title: 'A shared core', body: 'The basics (reading, writing, number) and the core subjects that carry a culture’s accumulated knowledge.' },
            { tag: 'Teacher', title: 'Expert and authority', body: 'The teacher knows the subject and how to teach it, and directs the learning.' },
            { tag: 'Learning', title: 'Disciplined effort', body: 'Learning the basics is hard and sometimes dull. Effort, practice and attention are part of the process.' },
            { tag: 'Order', title: 'Sequence and structure', body: 'Knowledge builds on knowledge. A well-sequenced curriculum teaches the prerequisites first.' },
            { tag: 'Standards', title: 'High expectations', body: 'Testing and assessment check that the essentials have been learned, and everyone is held to the same standard.' },
            { tag: 'Against', title: 'Child-centred excess', body: 'Letting children follow interests, without a structured curriculum, risks leaving the least advantaged without the knowledge they need.' },
          ],
        },
      ],
    },
    {
      id: 'hirsch',
      title: 'Hirsch, cultural literacy and Core Knowledge',
      blocks: [
        { t: 'p', text: 'E. D. Hirsch’s *Cultural Literacy* (1987) argued that reading comprehension depends on background knowledge: the words on the page do not carry all the meaning, and a reader who lacks the shared knowledge a writer assumes will struggle however good their “skills”. He proposed that schools teach a common body of knowledge, and founded the Core Knowledge Foundation, whose curriculum sequences content from kindergarten. His argument has an equity edge: children from knowledge-rich homes pick up this background at home, so a school that does not teach it widens the gap.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Evidence', title: 'The baseball study', body: 'Recht and Leslie (1988) found that students who knew a lot about baseball but were weak readers understood a passage about a baseball game better than strong readers who knew little about baseball. Knowledge beat general reading skill.' },
            { tag: 'Evidence', title: 'Working memory', body: 'Novices have limited working memory. Knowledge in long-term memory makes new information easier to process, so more knowledge makes learning easier.' },
            { tag: 'Evidence', title: 'Explicit instruction', body: 'Reviews of teaching methods find that explicit, well-structured teaching works well for novices learning new material.' },
            { tag: 'Caution', title: 'Evidence is mixed in places', body: 'Large-scale evidence for specific knowledge-rich curricula is thinner than for the underlying cognitive principles.' },
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'In practice',
      blocks: [
        {
          t: 'list',
          items: [
            'A sequenced curriculum that specifies what knowledge is taught and when, so that pupils meet ideas with the background they need.',
            'Explicit teaching: explaining, modelling, checking understanding, guided and then independent practice.',
            'Regular retrieval practice, quizzing and spaced review so knowledge is retained.',
            'Clear behaviour expectations and a calm, orderly school.',
            'Assessments that check the knowledge, not just general skills.',
          ],
        },
        { t: 'links', items: [{ path: 'teaching/techniques/instruction/rosenshine', note: 'Rosenshine’s principles' }, { path: 'teaching/theories/cognitive-load', note: 'Cognitive load theory' }, { path: 'teaching/case-studies/michaela-and-no-excuses', note: 'Michaela and “no excuses” schools' }] },
      ],
    },
    {
      id: 'critique',
      title: 'Criticisms and responses',
      blocks: [
        {
          t: 'table',
          head: ['Criticism', 'Response'],
          rows: [
            ['Whose knowledge? The core reflects a dominant culture', 'Advocates reply that a shared core can and should be broadened, and that excluding disadvantaged students from it is itself unjust'],
            ['It encourages coverage and rote memorisation without understanding', 'Advocates argue that understanding is built on knowledge, and that retrieval and application are part of the model'],
            ['It neglects creativity and skills', 'Advocates argue that creativity and critical thinking depend on knowledge and cannot be taught in the abstract'],
            ['It does not motivate students', 'Advocates say mastery and success motivate; critics reply that engagement requires meaning and choice'],
            ['It treats students as passive', 'Advocates point to the active practice and questioning in good explicit teaching'],
          ],
        },
      ],
    },
  ],
  sources: [
    'Bagley, W. C. (1938). An essentialist’s platform for the advancement of American education. Educational Administration and Supervision.',
    'Hirsch, E. D. (1987). Cultural Literacy: What Every American Needs to Know. Houghton Mifflin.',
    'Recht, D. R., and Leslie, L. (1988). Effect of prior knowledge on good and poor readers’ memory of text. Journal of Educational Psychology.',
    'Kirschner, P. A., Sweller, J., and Clark, R. E. (2006). Why minimal guidance during instruction does not work. Educational Psychologist.',
  ],
  related: ['teaching/philosophies/overview', 'teaching/philosophies/progressivism', 'teaching/case-studies/michaela-and-no-excuses'],
}

export default guide
