import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'The first and last few minutes of a lesson are valuable. A good starter settles the class and gets them retrieving what they need; a good plenary checks what they learned today. Here is a bank of quick activities that do real work.',
  nutshell: [
    'Starters: settle the room and **retrieve** prior learning or prerequisites.',
    'Plenaries: **check** today’s learning, so you can plan tomorrow.',
    'Every learner should respond, not just volunteers.',
    'Avoid "What did you learn today?"; ask them to show it.',
  ],
  sections: [
    {
      id: 'starters',
      title: 'Starters',
      lead: 'Five to ten minutes, ready on the board as learners arrive.',
      blocks: [
        {
          t: 'cards',
          items: [
            { tag: '1', title: 'Retrieval grid', body: 'A grid of questions from last lesson, last week and last term; harder questions score more points.' },
            { tag: '2', title: 'Brain dump', body: '"Write everything you remember about the digestive system." Two minutes, then compare with a partner.' },
            { tag: '3', title: 'Odd one out', body: 'Four terms; which is the odd one out and why? Several answers can be right if justified.' },
            { tag: '4', title: 'True or false?', body: 'Five statements, some with common misconceptions. Learners correct the false ones.' },
            { tag: '5', title: 'Fix the mistake', body: 'A worked answer with a deliberate error. Find and correct it.' },
            { tag: '6', title: 'Connections', body: 'Four key terms from last lesson: write one sentence linking them all.' },
            { tag: '7', title: 'Quick draw', body: 'Sketch and label a diagram from memory (the heart, a food web, a circuit).' },
            { tag: '8', title: 'What’s the question?', body: 'Here is the answer: "photosynthesis". Write three different questions it could answer.' },
            { tag: '9', title: 'Prerequisite check', body: 'Two quick questions on the knowledge today’s lesson needs.' },
            { tag: '10', title: 'Picture prompt', body: 'An image linked to today’s topic: what do you notice? What do you wonder?' },
          ],
        },
      ],
    },
    {
      id: 'plenaries',
      title: 'Plenaries',
      lead: 'Three to five minutes that show you what was learned.',
      blocks: [
        {
          t: 'cards',
          items: [
            { tag: '11', title: 'Exit ticket', body: 'Two or three questions on the key idea, on a slip of paper. Sort into got it / nearly / not yet.' },
            { tag: '12', title: 'Hinge question', body: 'One diagnostic multiple-choice question, all respond at once. See [hinge questions](@teaching/techniques/questioning/hinge-questions).' },
            { tag: '13', title: '3-2-1', body: 'Three things learned, two questions, one connection to something else.' },
            { tag: '14', title: 'Explain it to a younger learner', body: 'Two sentences a ten-year-old would understand. See [the Feynman technique](@teaching/techniques/learning-strategies/feynman).' },
            { tag: '15', title: 'Headline', body: 'Write a newspaper headline that captures today’s key idea.' },
            { tag: '16', title: 'Mini whiteboard check', body: 'One problem like today’s. Everyone shows their answer.' },
            { tag: '17', title: 'Muddiest point', body: '"What was the most confusing part of today?" Use answers to plan the next starter.' },
            { tag: '18', title: 'Rank it', body: 'Rank today’s causes, factors or methods by importance, and justify the top one.' },
            { tag: '19', title: 'Before and after', body: 'Return to a question from the start of the lesson. How would you answer it now?' },
            { tag: '20', title: 'Link back', body: 'How does today’s idea connect to the one from last week?' },
          ],
        },
      ],
    },
    {
      id: 'tips',
      title: 'Tips',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Make starters routine, so learners begin as soon as they arrive.',
            'Include older content in starters for spacing.',
            'Use plenary results to plan the next lesson.',
            'Keep them short; they are the start and end, not the main event.',
          ],
          dont: [
            'Ask "Does everyone understand?" as your plenary.',
            'Use starters that are fun but unrelated to learning (word searches).',
            'Skip the plenary because time ran out; plan it in, and cut from the middle instead.',
          ],
        },
      ],
    },
  ],
  related: ['teaching/techniques/learning-strategies/retrieval-practice', 'teaching/techniques/questioning/checking-understanding', 'teaching/guides/planning/lesson-plan'],
}

export default guide
