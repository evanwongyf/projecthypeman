import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Existentialism puts the individual at the centre: each person must make choices, take responsibility for them and create meaning in a world that gives none ready-made. In education that means helping young people to become authentic: to know themselves, choose their own path and live with the consequences. Humanistic education, drawing on Carl Rogers and Abraham Maslow, sits close by, with a focus on the whole person, feelings and self-actualisation. This page covers the ideas, the key voices (Buber, Greene, Rogers) and what they mean for a modern classroom.',
  nutshell: [
    'Existentialists say **existence precedes essence**: we are not born with a fixed purpose, we **choose** who we become.',
    'Education should **awaken choice, responsibility and authenticity**, not hand over fixed answers.',
    '**Martin Buber’s** *I–Thou* describes a teacher-student relationship of **mutual respect**, not use.',
    '**Maxine Greene** argued for the **arts and imagination** as ways of seeing things otherwise and waking learners from passivity.',
    '**Carl Rogers** argued that significant learning is **self-initiated** and flourishes in a climate of **empathy, genuineness and unconditional positive regard**.',
  ],
  sections: [
    {
      id: 'ideas',
      title: 'The central ideas',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Freedom', title: 'Choice and responsibility', body: 'We are free, and cannot escape choosing. Education should help students make choices knowingly and own them.' },
            { tag: 'Authenticity', title: 'Becoming oneself', body: 'To live authentically is to refuse mere conformity and to act on one’s own values.' },
            { tag: 'Meaning', title: 'Making sense of life', body: 'Meaning is made, not given. Literature, history, art and philosophy are tools for meaning-making.' },
            { tag: 'Subjectivity', title: 'Each learner is unique', body: 'Learning is a personal act that cannot be reduced to general laws about learners.' },
            { tag: 'Anxiety', title: 'The risk of freedom', body: 'Choice brings anxiety. Education should not remove it, but help learners live with it.' },
            { tag: 'Teacher', title: 'A person, not a technician', body: 'The teacher’s presence, honesty and example matter more than technique.' },
          ],
        },
      ],
    },
    {
      id: 'voices',
      title: 'Buber, Greene and Rogers',
      blocks: [
        {
          t: 'table',
          head: ['Thinker', 'Idea', 'For the classroom'],
          rows: [
            ['Martin Buber (1878–1965)', 'I–Thou versus I–It: a relationship of full encounter versus one of using the other as an object', 'Treat students as persons, not as outputs; real dialogue; the teacher is changed by the encounter too'],
            ['Maxine Greene (1917–2014)', 'Education as the release of imagination and “wide-awakeness”; the arts open possibility', 'Use literature, art and drama to unsettle the taken for granted; invite students to see their world differently'],
            ['Carl Rogers (1902–1987)', 'Person-centred learning: significant learning is self-initiated, and teachers who are genuine, empathic and accepting facilitate it', 'Give choice, listen, avoid threat, share responsibility, and trust the learner'],
            ['Abraham Maslow (1908–1970)', 'A hierarchy of needs, with self-actualisation at the top', 'Safety and belonging come first; then growth'],
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
            'Offer real choices about topics, methods and products, and ask students to justify them.',
            'Use open-ended questions with no single right answer: “What would you do?”',
            'Include the arts, drama, literature and philosophy for children as ways of exploring meaning.',
            'Build a climate of respect and psychological safety, where mistakes are safe.',
            'Make time for reflection: journals, conferences, portfolios.',
            'Share your own thinking honestly, including doubt.',
          ],
        },
        {
          t: 'dodont',
          do: ['Offer choice within a clear structure.', 'Treat students as people with views worth hearing.', 'Link choices to consequences, so students learn responsibility.', 'Check that everyone has the knowledge to choose well.'],
          dont: ['Do not equate freedom with no guidance.', 'Do not leave students with only choices they cannot handle.', 'Do not ignore the basics: choice without knowledge is empty.', 'Do not treat feelings as the only thing that counts.'],
        },
      ],
    },
    {
      id: 'critique',
      title: 'Strengths and limits',
      blocks: [
        {
          t: 'table',
          head: ['Strengths', 'Limits'],
          rows: [
            ['Takes students seriously as persons; builds motivation and responsibility', 'Little strong evidence on achievement; it is a stance more than a method'],
            ['Counters over-measurement and standardisation', 'Hard to combine with a fixed national curriculum and exams'],
            ['Gives a language for well-being, voice and meaning', 'Can neglect the knowledge and discipline that freedom needs'],
            ['Influences counselling and pastoral care', 'Can underplay structure, which many children need'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Where it shows up', text: 'Its fingerprints are on person-centred counselling, student voice, philosophy for children, portfolio assessment and the emphasis on well-being. Check the [motivation](@teaching/theories/motivation) and [humanism](@teaching/theories/humanism) pages for related evidence.' },
      ],
    },
  ],
  sources: [
    'Buber, M. (1923/1958). I and Thou. T. and T. Clark.',
    'Greene, M. (1995). Releasing the Imagination: Essays on Education, the Arts, and Social Change. Jossey-Bass.',
    'Rogers, C. R. (1969). Freedom to Learn. Merrill.',
    'Sartre, J.-P. (1946). Existentialism Is a Humanism.',
  ],
  related: ['teaching/philosophies/overview', 'teaching/theories/humanism', 'teaching/philosophies/free-and-democratic-schools'],
}

export default guide
