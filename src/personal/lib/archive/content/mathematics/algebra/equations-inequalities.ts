import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Solving an equation is a sequence of legal moves, each keeping both sides equal, until the unknown is alone on one side. Inequalities use almost the same moves, with one famous exception that trips everyone up at least once. This page derives the quadratic formula from scratch, by completing the square, so it is never just a formula to memorise.',
  nutshell: [
    'Solve by doing the same thing to both sides, undoing operations in reverse order, until the variable is alone.',
    '**Completing the square** turns any quadratic into a perfect square plus a constant, and derives the quadratic formula.',
    'Inequalities work like equations, with one rule: multiplying or dividing by a negative number **flips the inequality sign**.',
    'A quadratic\'s solutions can be 2, 1, or 0 real numbers, decided by the **discriminant**, \\(b^2-4ac\\).',
  ],
  sections: [
    {
      id: 'linear',
      title: 'Solving linear equations',
      blocks: [
        {
          t: 'example',
          title: 'Undoing operations in reverse order',
          lines: [
            { label: 'Equation', text: '\\(2(x+3) - 5 = 11\\)' },
            { label: 'Add 5 to both sides', text: '\\(2(x+3) = 16\\)' },
            { label: 'Divide both sides by 2', text: '\\(x+3 = 8\\)' },
            { label: 'Subtract 3 from both sides', text: '\\(x = 5\\)' },
            { label: 'Check', text: '\\(2(5+3) - 5 = 2(8) - 5 = 16 - 5 = 11\\) ✓' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Work from the outside in', text: 'To isolate x, undo whatever was done to it last, first, like unwrapping a parcel in reverse order. If x was multiplied by 2, had 3 added, then was put in brackets and had 5 subtracted outside: undo the subtracting-5 first, then the outer multiply-by-2, then the inner add-3.' },
      ],
    },
    {
      id: 'quadratic',
      title: 'The quadratic formula, derived',
      blocks: [
        {
          t: 'proof',
          claim: 'For \\(ax^2+bx+c=0\\) with \\(a\\neq 0\\), \\(x = \\dfrac{-b \\pm \\sqrt{b^2-4ac}}{2a}\\).',
          method: 'direct',
          steps: [
            { statement: '\\(ax^2+bx+c=0\\)', reason: 'Starting equation' },
            { statement: '\\(x^2 + \\dfrac{b}{a}x + \\dfrac{c}{a} = 0\\)', reason: 'Divide every term by a, so the leading coefficient becomes 1' },
            { statement: '\\(x^2 + \\dfrac{b}{a}x = -\\dfrac{c}{a}\\)', reason: 'Move the constant term to the right' },
            { statement: '\\(x^2 + \\dfrac{b}{a}x + \\left(\\dfrac{b}{2a}\\right)^2 = -\\dfrac{c}{a} + \\left(\\dfrac{b}{2a}\\right)^2\\)', reason: 'Add \\((b/2a)^2\\) to both sides: "completing the square"chosen because it makes the left side a perfect square' },
            { statement: '\\(\\left(x + \\dfrac{b}{2a}\\right)^2 = \\dfrac{b^2}{4a^2} - \\dfrac{c}{a}\\)', reason: 'The left side factors; the right side is simplified' },
            { statement: '\\(\\left(x + \\dfrac{b}{2a}\\right)^2 = \\dfrac{b^2-4ac}{4a^2}\\)', reason: 'Combine the right side over a common denominator \\(4a^2\\)' },
            { statement: '\\(x + \\dfrac{b}{2a} = \\pm\\dfrac{\\sqrt{b^2-4ac}}{2a}\\)', reason: 'Take the square root of both sides, remembering both the positive and negative root' },
            { statement: '\\(x = \\dfrac{-b \\pm \\sqrt{b^2-4ac}}{2a}\\)', reason: 'Subtract \\(b/2a\\) from both sides' },
          ],
          note: 'Every step is one of the legal moves from the previous section, applied to letters instead of numbers, which is exactly why the result works for every quadratic at once.',
        },
        {
          t: 'example',
          title: 'Using the formula: \\(2x^2 + 5x - 3 = 0\\)',
          lines: [
            { label: 'Identify', text: '\\(a=2,\\ b=5,\\ c=-3\\)' },
            { label: 'Discriminant', text: '\\(b^2-4ac = 25 - 4(2)(-3) = 25+24 = 49\\)' },
            { label: 'Roots', text: '\\(x = \\dfrac{-5 \\pm \\sqrt{49}}{4} = \\dfrac{-5\\pm7}{4}\\): \\(x = \\tfrac{1}{2}\\) or \\(x=-3\\)' },
          ],
        },
        {
          t: 'metric',
          name: 'the discriminant (\\(b^2-4ac\\))',
          shows: 'What is under the square root in the quadratic formula, and because a square root of a negative number is not a real number, its sign alone tells you how many real solutions the equation has, before you do any further work.',
          eli5: 'It is a quick "will this even work?" check, done before you commit to the full calculation, like checking you have enough ingredients before starting to bake, rather than discovering halfway through.',
          higher: 'A positive discriminant means two distinct real roots, the parabola crosses the x-axis at two separate points, as in the example above.',
          lower: 'A negative discriminant means no real roots at all, the square root of a negative number is not a real number, so the parabola never touches the x-axis; it stays entirely above or entirely below it. A discriminant of exactly 0 is the boundary case: one repeated root, where the parabola just touches the axis at its vertex.',
          typical: 'See [quadratics and parabolas](@mathematics/functions/quadratics) for how this connects directly to the picture: the discriminant\'s sign is simply whether the vertex sits above, on, or below the x-axis (for an upward-opening parabola).',
        },
      ],
    },
    {
      id: 'inequalities',
      title: 'Inequalities: the one rule that flips',
      blocks: [
        {
          t: 'example',
          title: 'Solving like an equation',
          lines: [
            { label: 'Inequality', text: '\\(3x + 2 < 14\\)' },
            { label: 'Subtract 2', text: '\\(3x < 12\\)' },
            { label: 'Divide by 3 (positive, so sign stays)', text: '\\(x < 4\\)' },
          ],
        },
        {
          t: 'example',
          title: 'Where it flips',
          lines: [
            { label: 'Inequality', text: '\\(-2x < 10\\)' },
            { label: 'Divide by −2', text: 'dividing by a negative flips the direction: \\(x > -5\\)' },
            { label: 'Why', text: 'test it: \\(x=0\\) satisfies both \\(-2(0)=0 < 10\\) and \\(0 > -5\\); but \\(x=-8\\) satisfies \\(-2(-8)=16\\), which is NOT < 10, and indeed \\(-8\\) is not \\(> -5\\) either, the flip keeps the solution set correct' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Why multiplying by a negative flips the sign', text: 'Think of the number line: 2 < 5. Multiply both sides by −1: you get −2 and −5. But −2 is to the *right* of −5 on the number line, so now −2 > −5. Multiplying by a negative number mirrors the whole number line, swapping left and right, so "less than" must become "greater than" to stay true.' },
        {
          t: 'table',
          head: ['Operation', 'Does the inequality sign flip?'],
          rows: [
            ['Add or subtract any number', 'No'],
            ['Multiply or divide by a positive number', 'No'],
            ['Multiply or divide by a negative number', 'Yes'],
            ['Take the reciprocal of both sides (same sign)', 'Yes, e.g. \\(2 < 5 \\Rightarrow \\tfrac12 > \\tfrac15\\)'],
          ],
        },
      ],
    },
  ],
  sources: ['Stewart, J. (2015). *Calculus* (8th ed.). Cengage.', 'al-Khwārizmī, M. (c. 820). *Al-Kitāb al-mukhtaṣar fī ḥisāb al-jabr wal-muqābala*.'],
  related: ['mathematics/functions/quadratics', 'mathematics/notation/reading-math', 'mathematics/algebra/polynomials'],
}

export default guide
