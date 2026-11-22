import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Being stuck is a normal part of solving problems. Good problem solvers are not people who never get stuck; they have strategies for what to do next. George Pólya’s four steps, written for maths in 1945, work for problems of almost every kind.',
  nutshell: [
    'Pólya’s four steps: **understand the problem, devise a plan, carry out the plan, look back**.',
    'Most failures happen at step one: not really understanding what is being asked.',
    'Have a toolkit of **heuristics**: draw a picture, try a simpler case, work backwards, look for a pattern.',
    'Looking back, checking and reflecting, is how you get better at the next problem.',
  ],
  sections: [
    {
      id: 'polya',
      title: 'Pólya’s four steps',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Understand the problem', body: 'What is unknown? What is given? What are the conditions? Restate it in your own words. Draw a diagram. Introduce notation.' },
            { title: 'Devise a plan', body: 'Have you seen a similar problem? Can you use a related method? Try a heuristic from the toolkit below.' },
            { title: 'Carry out the plan', body: 'Work step by step, checking each step. If the plan fails, go back and try another.' },
            { title: 'Look back', body: 'Check the answer. Does it make sense? Can you solve it another way? What did you learn that could help next time?' },
          ],
        },
      ],
    },
    {
      id: 'heuristics',
      title: 'A toolkit for when you are stuck',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Draw it', body: 'A diagram, a table or a timeline often reveals structure.' },
            { title: 'Simpler case', body: 'Try smaller numbers or a special case first, then generalise.' },
            { title: 'Work backwards', body: 'Start from the goal and ask what the step before it must be.' },
            { title: 'Look for a pattern', body: 'Work out the first few cases and see what repeats.' },
            { title: 'Guess and check', body: 'Make an estimate, test it, and adjust.' },
            { title: 'Break it up', body: 'Split the problem into smaller sub-problems.' },
            { title: 'Change representation', body: 'Words to algebra, algebra to a graph, a graph to a story.' },
            { title: 'Consider extremes', body: 'What happens at zero, at infinity, at the boundaries?' },
            { title: 'Explain it aloud', body: 'Talking it through, even to a rubber duck, often reveals the gap.' },
          ],
        },
      ],
    },
    {
      id: 'example',
      title: 'An example',
      blocks: [
        {
          t: 'example',
          title: 'How many handshakes happen if 10 people each shake hands once with everyone else?',
          lines: [
            { label: 'Understand', text: 'Each pair shakes hands exactly once. We want the total number of handshakes.' },
            { label: 'Simpler case', text: '2 people: 1. 3 people: 3. 4 people: 6. 5 people: 10.' },
            { label: 'Pattern', text: '1, 3, 6, 10… each time we add one person, they shake hands with everyone already there: +2, +3, +4.' },
            { label: 'Plan', text: 'Each of the 10 people shakes 9 hands: 10 × 9 = 90, but that counts each handshake twice. So 90 ÷ 2 = 45.' },
            { label: 'Look back', text: 'Check with 4 people: 4 × 3 ÷ 2 = 6. ✓ General rule: n(n − 1) ÷ 2.' },
          ],
        },
      ],
    },
    {
      id: 'stuck',
      title: 'When you are really stuck',
      blocks: [
        {
          t: 'list',
          items: [
            '**Take a break.** Stepping away and coming back ("incubation") can help, especially after you have worked hard on the problem (Sio & Ormerod, 2009).',
            '**Question your assumptions.** Many puzzles are hard because we assume a constraint that is not there. In Duncker’s candle problem, people fail to see the box of tacks as a shelf ("functional fixedness").',
            '**Ask for a hint**, not the answer.',
            '**Study a worked example** of a similar problem, then try again. See [worked examples](@teaching/techniques/instruction/worked-examples).',
          ],
        },
      ],
    },
  ],
  sources: [
    'Pólya, G. (1945). *How to solve it*. Princeton University Press.',
    'Sio, U. N., & Ormerod, T. C. (2009). Does incubation enhance problem solving? A meta-analytic review. *Psychological Bulletin, 135*(1), 94–120.',
    'Duncker, K. (1945). On problem-solving. *Psychological Monographs, 58*(5).',
  ],
  related: ['thinking/creative', 'teaching/techniques/instruction/worked-examples', 'teaching/techniques/learning-strategies/interleaving'],
}

export default guide
