import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Before you can say how *likely* something is, you often need to count how many ways it could happen, and counting carefully is its own skill. The one question that decides everything: does the order of the items matter? Get that right, and permutations and combinations become two sides of the same simple idea.',
  nutshell: [
    'The **factorial**, \\(n!\\), counts the ways to arrange n distinct items in a row: \\(n! = n\\times(n-1)\\times\\cdots\\times1\\).',
    'A **permutation** counts arrangements where order matters; a **combination** counts selections where it doesn\'t.',
    '\\(nPr = \\dfrac{n!}{(n-r)!}\\) (order matters); \\(nCr = \\dfrac{n!}{r!(n-r)!}\\) (order doesn\'t).',
    'The multiplication principle: if one choice has a ways and a second has b ways, together there are \\(a \\times b\\) ways.',
  ],
  sections: [
    {
      id: 'factorial',
      title: 'The factorial',
      blocks: [
        {
          t: 'math',
          tex: String.raw`n! = n \times (n-1) \times (n-2) \times \cdots \times 2 \times 1 \qquad 0! = 1`,
          caption: '"n factorial": the number of ways to put n distinct items in a row. 0! = 1 by convention, there is exactly one way to arrange zero items (do nothing).',
        },
        {
          t: 'example',
          title: 'Why n! counts arrangements',
          lines: [
            { label: 'Arranging 4 books on a shelf', text: '4 choices for the first slot, then only 3 remain for the second, then 2, then 1' },
            { label: 'Multiply', text: '\\(4 \\times 3 \\times 2 \\times 1 = 24 = 4!\\)' },
            { label: 'The logic', text: 'each choice shrinks the pool of what\'s left by exactly one, the multiplication principle, applied repeatedly' },
          ],
        },
      ],
    },
    {
      id: 'permutations',
      title: 'Permutations: when order matters',
      blocks: [
        {
          t: 'math',
          tex: String.raw`{}_nP_r = \frac{n!}{(n-r)!}`,
          caption: 'The number of ways to choose and *arrange* r items from a pool of n. Derivation: n choices for the first slot, (n−1) for the second, …, down to (n−r+1) for the r-th; multiplying these out and simplifying gives exactly n!/(n−r)!.',
        },
        {
          t: 'example',
          title: 'A race with 3 medals, 8 runners',
          lines: [
            { label: 'Question', text: 'how many ways can gold, silver and bronze be awarded among 8 runners?' },
            { label: 'Order matters', text: 'gold-then-silver is different from silver-then-gold for the same two runners' },
            { label: 'Compute', text: '\\({}_8P_3 = \\dfrac{8!}{5!} = 8\\times7\\times6 = 336\\)' },
          ],
        },
      ],
    },
    {
      id: 'combinations',
      title: 'Combinations: when order doesn\'t matter',
      blocks: [
        {
          t: 'math',
          tex: String.raw`{}_nC_r = \binom{n}{r} = \frac{n!}{r!\,(n-r)!}`,
          caption: 'The number of ways to *choose* (not arrange) r items from n. Derivation: start from \\({}_nP_r\\) (which counts arrangements), then divide by r! to collapse every group of r! arrangements of the same r items down to the single selection they represent.',
        },
        {
          t: 'example',
          title: 'A committee of 3 from 8 people',
          lines: [
            { label: 'Order doesn\'t matter', text: 'choosing Alice, Bob, Carol is the same committee regardless of the order you picked them in' },
            { label: 'Compute', text: '\\(\\dbinom{8}{3} = \\dfrac{8!}{3!\\,5!} = \\dfrac{336}{6} = 56\\)' },
            { label: 'Compare', text: 'far fewer than the 336 permutations, each committee of 3 was counted \\(3!=6\\) times in the permutation count, once per ordering' },
          ],
        },
        {
          t: 'table',
          head: ['Scenario', 'Permutation or combination?', 'Why'],
          rows: [
            ['A lottery\'s winning numbers', 'Combination', 'Drawing 7, 14, 22 is the same win as 22, 14, 7'],
            ['A PIN code', 'Permutation (with repeats allowed)', '1234 and 4321 are different codes'],
            ['Picking a starting 5 in basketball (no positions assigned)', 'Combination', 'The group of 5 matters, not who was picked first'],
            ['Assigning gold/silver/bronze', 'Permutation', 'Which medal each person gets matters'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A shortcut for recognising which to use', text: 'Ask: if I reorder the same items, do I get a *different* outcome? If yes, permutation. If the reordered group is considered *the same* outcome, combination. This single question resolves almost every ambiguous counting problem.' },
      ],
    },
  ],
  sources: ['Ross, S. M. (2019). *A First Course in Probability* (10th ed.). Pearson.'],
  related: ['mathematics/probability/probability-rules', 'mathematics/algebra/exponents-roots'],
}

export default guide
