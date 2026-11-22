import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Social reconstructionism and critical pedagogy start from a different question: not “what should children know?” but “what kind of society are we making, and whose interests does the school serve?” They treat education as never neutral and as a tool that can either reproduce inequality or help people understand and change it. This page covers George Counts’ challenge to teachers, Paulo Freire’s banking model and problem-posing education, bell hooks’ engaged pedagogy, how the ideas appear in classrooms, and the strongest criticisms.',
  nutshell: [
    '**George Counts** (1932) asked teachers to “dare to build a new social order”, arguing that schools could not avoid taking a stand on society.',
    '**Paulo Freire’s** *Pedagogy of the Oppressed* contrasts the **banking model** (teachers deposit knowledge into passive students) with **problem-posing education** (dialogue about real problems).',
    '**Conscientisation** is coming to see and act on the social conditions that shape your life: reading the world, not just the word.',
    '**bell hooks** (1994) called for **engaged pedagogy**: a classroom that is a community, where teachers risk themselves and honour students’ voices.',
    'Critics argue it can become **ideological**, lacks strong evidence and may leave students without the knowledge they need to change anything.',
  ],
  sections: [
    {
      id: 'counts',
      title: 'Counts and social reconstructionism',
      blocks: [
        { t: 'p', text: 'In 1932, in the depths of the Great Depression, George S. Counts gave a speech and published *Dare the School Build a New Social Order?*. He argued that the school is always shaped by interests and values, so teachers cannot claim neutrality: they should use education to help build a more democratic and egalitarian society. His position, called social reconstructionism, set the stage for later critical approaches. It was controversial then and remains so.' },
      ],
    },
    {
      id: 'freire',
      title: 'Freire: banking and problem-posing education',
      blocks: [
        { t: 'p', text: 'Paulo Freire, a Brazilian educator who ran adult literacy campaigns among the rural poor, wrote *Pedagogy of the Oppressed* (1968, in English 1970). His central distinction is between two models of education.' },
        {
          t: 'table',
          head: ['', 'Banking education', 'Problem-posing education'],
          rows: [
            ['Teacher', 'Narrates, deposits information, knows', 'Learns with students, poses problems, dialogues'],
            ['Students', 'Receive, memorise, repeat; passive', 'Co-investigators who think critically'],
            ['Knowledge', 'A fixed gift from those who know to those who do not', 'Made through dialogue about the world'],
            ['Result', 'Adapts people to the world as it is; fosters passivity', 'Awakens critical awareness; the capacity to change the world'],
          ],
          caption: 'Freire’s contrast. Banking is not the same as direct instruction: his target was education that treats students as empty and the world as fixed.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Idea', title: 'Dialogue', body: 'Teacher and students learn from one another. Dialogue is founded on love, humility and faith in people.' },
            { tag: 'Idea', title: 'Conscientisation', body: 'Coming to understand how social structures shape your life, and to act on them (praxis: reflection and action together).' },
            { tag: 'Practice', title: 'Generative words', body: 'In his literacy work, Freire used words drawn from the learners’ own lives (such as “favela” or “brick”) to teach reading and to start discussion about their situation.' },
            { tag: 'Practice', title: 'Reading the world', body: '“Reading the word” and “reading the world” go together: literacy is about making meaning of one’s situation, not only decoding.' },
          ],
        },
      ],
    },
    {
      id: 'hooks',
      title: 'bell hooks and engaged pedagogy',
      blocks: [
        { t: 'p', text: 'In *Teaching to Transgress* (1994), bell hooks drew on Freire and on her own experience as a Black woman educated in segregated and integrated schools. She argued for engaged pedagogy: a classroom as a community where excitement and difficulty are shared, where students’ experiences count as knowledge, and where teachers are also vulnerable and committed to their own growth. Education, she said, should be “the practice of freedom”.' },
        { t: 'callout', tone: 'note', title: 'Critical pedagogy beyond Freire', text: 'Henry Giroux, Peter McLaren, Ira Shor and others extended the tradition in North America, linking schooling to power, race, class and gender. Related work in Singapore and Southeast Asia has explored how national curricula shape identity, and the place of dialogue in culturally respectful classrooms.' },
      ],
    },
    {
      id: 'practice',
      title: 'In the classroom',
      blocks: [
        {
          t: 'list',
          items: [
            'Begin with a real problem the students care about, such as litter on the school field, the cost of transport, or how a news story treats a community.',
            'Use dialogue: open questions, small groups, students’ experiences as evidence.',
            'Ask whose voice is missing from a text, a textbook or a decision.',
            'Connect learning to action, such as a letter, a survey, a campaign, a service project.',
            'Be open about your own position and invite disagreement, so that dialogue does not become indoctrination.',
          ],
        },
        {
          t: 'example',
          title: 'A problem-posing lesson on food waste in the canteen',
          lines: [
            { label: 'Starting point', text: 'Students photograph what is thrown away at lunch and bring the images.' },
            { label: 'Questions', text: '“What do we see? Why does it happen? Who is affected? What causes it? What could we do?”' },
            { label: 'Investigation', text: 'They measure the waste for a week, interview the canteen staff and read about the cost.' },
            { label: 'Action', text: 'They propose a smaller-portion option to the school council, and track the effect.' },
            { label: 'Reflection', text: '“What did we learn about how decisions are made?”' },
          ],
        },
      ],
    },
    {
      id: 'critique',
      title: 'Criticisms',
      blocks: [
        {
          t: 'table',
          head: ['Criticism', 'Reply'],
          rows: [
            ['It can slide into indoctrination, replacing one orthodoxy with another', 'The best of the tradition insists on genuine dialogue and on students’ questioning the teacher too'],
            ['It has little empirical evidence of improved learning', 'It is a philosophy of aims as much as a method; some action-research studies are positive'],
            ['It can undervalue knowledge and skills, leaving disadvantaged students without what they need', 'Critics of this critique say literacy is the base of its own practice'],
            ['It rejects teacher authority, which pupils need', 'Freire distinguished authority from authoritarianism and insisted teachers have a directive role'],
            ['It can be hard to apply in exam-driven systems', 'Teachers use pieces of it within the curriculum, such as dialogue and real-world problems'],
          ],
        },
      ],
    },
  ],
  sources: [
    'Counts, G. S. (1932). Dare the School Build a New Social Order? John Day.',
    'Freire, P. (1970). Pedagogy of the Oppressed. Continuum.',
    'hooks, b. (1994). Teaching to Transgress: Education as the Practice of Freedom. Routledge.',
    'Giroux, H. A. (2011). On Critical Pedagogy. Continuum.',
  ],
  related: ['teaching/philosophies/overview', 'teaching/philosophies/progressivism', 'teaching/philosophies/existentialism-and-humanism'],
}

export default guide
