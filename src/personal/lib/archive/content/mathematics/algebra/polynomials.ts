import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A polynomial is a sum of terms built from a variable raised to whole-number powers: no fractions, no roots, no variable in a denominator. Factoring, writing a polynomial as a product instead of a sum, is the single most useful algebra skill for finding where a graph crosses the x-axis, and it is exactly how the examples in [quadratics](@mathematics/functions/quadratics) find their roots.',
  nutshell: [
    'A polynomial\'s **degree** is its highest power; it has at most that many roots.',
    'Expanding (multiplying out brackets) and factoring (writing as a product) are inverse operations, like multiplication and division.',
    'The **factor theorem**: \\((x-r)\\) is a factor of \\(p(x)\\) exactly when \\(p(r) = 0\\).',
    'The **remainder theorem**: dividing \\(p(x)\\) by \\((x-r)\\) leaves a remainder of exactly \\(p(r)\\).',
  ],
  sections: [
    {
      id: 'naming',
      title: 'Naming and expanding',
      blocks: [
        {
          t: 'table',
          head: ['Degree', 'Name', 'Example'],
          rows: [
            ['0', 'Constant', '\\(7\\)'],
            ['1', 'Linear', '\\(3x+2\\)'],
            ['2', 'Quadratic', '\\(x^2-5x+6\\)'],
            ['3', 'Cubic', '\\(2x^3-x+1\\)'],
          ],
          caption: 'The degree is the highest power of x appearing, with a nonzero coefficient.',
        },
        {
          t: 'math',
          tex: String.raw`(x+2)(x+3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6`,
          caption: 'Expanding with the distributive law (each term in the first bracket multiplies each term in the second, sometimes nicknamed "FOIL": First, Outer, Inner, Last).',
        },
      ],
    },
    {
      id: 'factoring',
      title: 'Factoring',
      blocks: [
        {
          t: 'p',
          text: 'Factoring a quadratic \\(x^2+bx+c\\) means finding two numbers that **multiply** to c and **add** to b.',
        },
        {
          t: 'example',
          title: 'Factoring \\(x^2 + 5x + 6\\)',
          lines: [
            { label: 'Need', text: 'two numbers that multiply to 6 and add to 5' },
            { label: 'Try', text: '2 and 3: \\(2 \\times 3 = 6\\) ✓, \\(2+3=5\\) ✓' },
            { label: 'Factored', text: '\\(x^2+5x+6 = (x+2)(x+3)\\)' },
            { label: 'Roots', text: 'set each bracket to 0: \\(x=-2\\) or \\(x=-3\\)' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`x^2 - y^2 = (x-y)(x+y)`,
          caption: 'The "difference of two squares": one of the most useful factoring patterns, worth recognising on sight. Check: \\((x-y)(x+y) = x^2+xy-xy-y^2 = x^2-y^2\\).',
        },
        {
          t: 'example',
          title: 'Spotting it',
          lines: [
            { label: '\\(x^2 - 9\\)', text: '\\(= x^2 - 3^2 = (x-3)(x+3)\\)' },
            { label: '\\(49 - 4x^2\\)', text: '\\(= 7^2 - (2x)^2 = (7-2x)(7+2x)\\)' },
          ],
        },
      ],
    },
    {
      id: 'theorems',
      title: 'The factor and remainder theorems',
      blocks: [
        {
          t: 'proof',
          claim: '\\((x-r)\\) is a factor of a polynomial \\(p(x)\\) if and only if \\(p(r)=0\\).',
          method: 'direct',
          given: ['Dividing p(x) by \\((x-r)\\) gives \\(p(x) = (x-r)q(x) + R\\) for some quotient \\(q(x)\\) and constant remainder R (since dividing by a degree-1 polynomial always leaves a degree-0, i.e. constant, remainder)'],
          steps: [
            { statement: 'Substitute \\(x=r\\) into \\(p(x) = (x-r)q(x) + R\\)', reason: 'Evaluate both sides at the specific value x = r' },
            { statement: '\\(p(r) = (r-r)q(r) + R = 0 \\cdot q(r) + R = R\\)', reason: 'The factor \\((r-r)\\) is exactly 0, which kills the first term' },
            { statement: 'So \\(p(r) = R\\): the remainder equals p(r)', reason: 'This is the remainder theorem, as a byproduct' },
            { statement: '\\((x-r)\\) divides p(x) exactly (remainder 0) \\(\\iff R = 0 \\iff p(r) = 0\\)', reason: 'Combine: a factor means zero remainder, and we just showed the remainder equals p(r)' },
          ],
        },
        {
          t: 'example',
          title: 'Using the factor theorem to factor a cubic',
          lines: [
            { label: 'Polynomial', text: '\\(p(x) = x^3 - 6x^2 + 11x - 6\\)' },
            { label: 'Try x = 1', text: '\\(p(1) = 1 - 6 + 11 - 6 = 0\\): so \\((x-1)\\) is a factor' },
            { label: 'Divide', text: '\\(p(x) = (x-1)(x^2-5x+6)\\)' },
            { label: 'Factor the rest', text: '\\(x^2-5x+6 = (x-2)(x-3)\\), so \\(p(x) = (x-1)(x-2)(x-3)\\)' },
            { label: 'Roots', text: '\\(x = 1,\\ 2,\\ 3\\): exactly 3 roots for a degree-3 polynomial' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A fast way to guess a root', text: 'For a polynomial with integer coefficients, any whole-number root must divide the constant term exactly (the rational root theorem). For \\(x^3-6x^2+11x-6\\), the constant is −6, so only ±1, ±2, ±3, ±6 are worth testing, far fewer guesses than trying every integer.' },
      ],
    },
  ],
  sources: ['Stewart, J. (2015). *Calculus* (8th ed.). Cengage.', 'al-Khwārizmī, M. (c. 820). *Al-Kitāb al-mukhtaṣar fī ḥisāb al-jabr wal-muqābala*.'],
  related: ['mathematics/functions/quadratics', 'mathematics/algebra/equations-inequalities', 'mathematics/proofs/proof-techniques'],
}

export default guide
