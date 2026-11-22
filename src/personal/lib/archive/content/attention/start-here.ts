import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Learning has two gates. First, information must be noticed and held in mind: that is attention. Then it must be stored and kept retrievable: that is retention. Most study problems come from one gate or the other: “I read it but nothing went in” is attention; “I knew it last week” is retention. This shelf covers both, with the evidence and the maths.',
  nutshell: [
    'Attention is **limited and selective**: working memory holds only about four chunks at once.',
    'Mind wandering takes up a large share of waking time (about 47% in one large sampling study), and it rises during passive learning.',
    'Without review, memories fade quickly along the **forgetting curve**.',
    'The two best-evidenced fixes are **retrieval practice** and **spacing**; **sleep** consolidates what was learned.',
  ],
  sections: [
    {
      id: 'pipeline',
      title: 'From the world to long-term memory',
      blocks: [
        { t: 'flow', nodes: [
          { label: 'Sensory input', sub: 'most is ignored', tone: 'data' },
          { label: 'Attention', sub: 'selects what gets in', tone: 'process' },
          { label: 'Working memory', sub: 'about 4 chunks, seconds', tone: 'model' },
          { label: 'Encoding', sub: 'meaning, links, images', tone: 'model' },
          { label: 'Long-term memory', sub: 'consolidated in sleep', tone: 'output' },
          { label: 'Retrieval', sub: 'recall strengthens it', tone: 'human' },
        ], loop: 'each successful retrieval makes the memory more durable' },
      ],
    },
    {
      id: 'five',
      title: 'Five findings worth knowing',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: '1. Attention is a bottleneck', body: 'You cannot study well while texting; switching costs time and accuracy.' },
          { title: '2. Passive input invites wandering', body: 'Questions, tasks and retrieval breaks pull attention back.' },
          { title: '3. Recall beats rereading', body: 'Testing yourself produces much better long-term retention than reading again, though it feels harder.' },
          { title: '4. Spread it out', body: 'The same study time spread over days beats one long session, often by a wide margin.' },
          { title: '5. Sleep is part of studying', body: 'Sleep after learning stabilises memories; sleep loss before learning reduces how much gets in.' },
        ] },
      ],
    },
    {
      id: 'map',
      title: 'Routes',
      blocks: [
        { t: 'table', head: ['If you…', 'Read'], rows: [
          ['Can’t concentrate', '[Focusing on your own](@attention/attention/focus-for-learners), [Multitasking](@e-pedagogy/brain/multitasking-and-notifications)'],
          ['Teach and lose the class after 15 minutes', '[Sustaining attention in class](@attention/attention/sustaining-attention-in-class), [Attention span myths](@attention/attention/attention-span-myths)'],
          ['Forget what you studied', '[Forgetting curve](@attention/retention/forgetting-curve), [Spacing](@attention/retention/spacing), [Retrieval practice](@attention/retention/retrieval-practice)'],
          ['Use flashcard apps', '[Spaced-repetition algorithms](@attention/practice/spaced-repetition-algorithms), [Planning reviews](@attention/practice/planning-reviews)'],
          ['Like the maths', '[Measuring attention](@attention/attention/measuring-attention), [Forgetting curve](@attention/retention/forgetting-curve), [Algorithms](@attention/practice/spaced-repetition-algorithms)'],
        ] },
        { t: 'callout', tone: 'note', title: 'Related shelves', text: 'The [Memory](@memory/how-memory-works) shelf has practical techniques (flashcards, memory palaces); the [Neuroscience](@medicine/start-here) shelf covers the brain regions involved.' },
      ],
    },
  ],
  sources: [
    'Killingsworth, M. A., & Gilbert, D. T. (2010). A wandering mind is an unhappy mind. Science, 330(6006), 932.',
    'Dunlosky, J. et al. (2013). Improving students’ learning with effective learning techniques. Psychological Science in the Public Interest, 14(1), 4–58.',
  ],
  related: ['memory/how-memory-works', 'teaching/techniques/learning-strategies/retrieval-practice', 'e-pedagogy/brain/multitasking-and-notifications'],
}

export default guide
