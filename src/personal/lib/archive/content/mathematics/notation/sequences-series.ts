import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A sequence is an ordered list of numbers; a series is what you get when you add a sequence up. Σ (capital sigma) and Π (capital pi) are the shorthand for "add up" and "multiply together"once they stop looking exotic, formulas like compound interest, cross-entropy loss and the normal distribution\'s density all become readable.',
  nutshell: [
    'A **sequence** is an ordered list, \\(a_1, a_2, a_3, \\dots\\); a **series** is their sum.',
    '\\(\\displaystyle\\sum_{i=1}^{n} a_i\\) means "add up \\(a_i\\) for every i from 1 to n". \\(\\displaystyle\\prod_{i=1}^{n} a_i\\) means "multiply them all together".',
    'An **arithmetic** sequence adds a constant each step; a **geometric** sequence multiplies by a constant each step.',
    'A geometric series has a closed-form sum, the same formula behind annuities, perpetuities and the Gordon growth model.',
  ],
  sections: [
    {
      id: 'sigma',
      title: 'Sigma notation',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\sum_{i=1}^{n} a_i = a_1 + a_2 + a_3 + \cdots + a_n`,
          where: [
            { sym: 'i', def: 'The index of summation: a counter that takes each whole-number value in turn' },
            { sym: '1 \\text{ and } n', def: 'The values the index starts and ends at (below and above the Σ)' },
            { sym: 'a_i', def: 'The expression being summed, written in terms of i' },
          ],
          caption: 'Read it like a loop in code: "for i from 1 to n, add a_i to a running total."',
        },
        {
          t: 'example',
          title: 'Unpacking three sums',
          lines: [
            { label: '\\(\\sum_{i=1}^{5} i\\)', text: '\\(1+2+3+4+5 = 15\\)' },
            { label: '\\(\\sum_{i=1}^{4} i^2\\)', text: '\\(1^2+2^2+3^2+4^2 = 1+4+9+16 = 30\\)' },
            { label: '\\(\\sum_{i=1}^{3} 2i\\)', text: '\\(2(1)+2(2)+2(3) = 2+4+6 = 12\\)' },
          ],
        },
        {
          t: 'code',
          title: 'Sigma notation is a for-loop',
          code: String.raw`total = 0
for i in range(1, n + 1):     # i = 1, 2, ..., n
    total += a(i)
# total now equals sum_{i=1}^{n} a(i)`,
        },
        { t: 'p', text: 'This is exactly the Σ used throughout the finance shelf: the present-value formula \\(\\sum_t \\dfrac{CF_t}{(1+r)^t}\\) is "add up each year\'s discounted cash flow", and the AI shelf\'s cross-entropy loss \\(-\\frac{1}{n}\\sum_i \\log P(y_i)\\) is "average the surprise over every example".' },
        {
          t: 'math',
          tex: String.raw`\prod_{i=1}^{n} a_i = a_1 \times a_2 \times \cdots \times a_n`,
          caption: 'Π (pi notation) is the multiplying twin of Σ: used for things like "the total supply after n halvings" or a likelihood built from independent probabilities multiplied together.',
        },
      ],
    },
    {
      id: 'arithmetic',
      title: 'Arithmetic sequences and series',
      blocks: [
        {
          t: 'math',
          tex: String.raw`a_n = a_1 + (n-1)d`,
          where: [
            { sym: 'a_1', def: 'The first term' },
            { sym: 'd', def: 'The common difference: how much is added each step' },
          ],
          caption: 'An arithmetic sequence adds the same amount, d, every step: 3, 7, 11, 15, … has \\(a_1=3,\\ d=4\\).',
        },
        {
          t: 'math',
          tex: String.raw`S_n = \sum_{i=1}^{n} a_i = \frac{n}{2}\big(a_1 + a_n\big) = \frac{n}{2}\big(2a_1 + (n-1)d\big)`,
          caption: 'The sum of the first n terms: n times the average of the first and last term. Proved by pairing the first and last, second and second-last, and so on, see the [worked proof of the n=100 case](@mathematics/proofs/worked-proofs).',
        },
        {
          t: 'example',
          title: 'Summing 3, 7, 11, …, up to the 10th term',
          lines: [
            { label: '10th term', text: '\\(a_{10} = 3 + (10-1)4 = 39\\)' },
            { label: 'Sum', text: '\\(S_{10} = \\dfrac{10}{2}(3 + 39) = 5 \\times 42 = 210\\)' },
          ],
        },
      ],
    },
    {
      id: 'geometric',
      title: 'Geometric sequences and series',
      blocks: [
        {
          t: 'math',
          tex: String.raw`a_n = a_1 \, r^{\,n-1}`,
          where: [{ sym: 'r', def: 'The common ratio: what each term is multiplied by to get the next' }],
          caption: 'A geometric sequence multiplies by the same ratio, r, every step: 2, 6, 18, 54, … has \\(a_1=2,\\ r=3\\). Compounding is a geometric sequence: \\(PV, PV(1+r), PV(1+r)^2, \\dots\\)',
        },
        {
          t: 'math',
          tex: String.raw`S_n = \sum_{i=1}^{n} a_1 r^{\,i-1} = a_1 \cdot \frac{1 - r^n}{1-r} \qquad (r \ne 1)`,
          caption: 'The finite geometric sum. This exact formula, with different letters, is the annuity formula in [the time value of money](@finance/foundations/time-value).',
        },
        {
          t: 'math',
          tex: String.raw`S_\infty = \sum_{i=1}^{\infty} a_1 r^{\,i-1} = \frac{a_1}{1-r} \qquad \text{only if } |r| < 1`,
          caption: 'An infinite geometric series converges to a finite number only when |r| < 1, because then \\(r^n \\to 0\\) as \\(n \\to \\infty\\) (a limit, see [limits and continuity](@mathematics/calculus/limits)). This is exactly the trick behind deriving the [Gordon growth model](@finance/fundamental/dividend-models): \\(P_0 = D_1/(r-g)\\).',
        },
        {
          t: 'example',
          title: 'Bitcoin\'s total supply, derived',
          lines: [
            { text: 'From [crypto](@finance/assets/crypto): block rewards halve every 210,000 blocks, so total supply is a geometric series with \\(a_1 = 210{,}000 \\times 50\\) and \\(r = \\tfrac12\\): \\(S_\\infty = \\dfrac{210{,}000 \\times 50}{1 - \\tfrac12} = 21{,}000{,}000\\).' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Zeno\'s paradox, solved', text: 'The ancient philosopher Zeno argued that to walk anywhere, you must first cross half the distance, then half of what\'s left, forever, so motion is "impossible". The resolution is exactly this formula: \\(\\tfrac12 + \\tfrac14 + \\tfrac18 + \\cdots = \\dfrac{1/2}{1 - 1/2} = 1\\). Infinitely many steps can still sum to a finite distance.' },
      ],
    },
  ],
  sources: ['Stewart, J. (2015). *Calculus* (8th ed.). Cengage.', 'Mazur, J. (2014). *Enlightening Symbols*. Princeton University Press.'],
  related: ['finance/foundations/time-value', 'mathematics/calculus/limits', 'mathematics/proofs/worked-proofs'],
}

export default guide
