import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A quadratic function graphs as a parabola: a symmetric U-shape (or upside-down U) with one turning point, the vertex. Quadratics are the simplest curved shape, and completing the square, the same trick behind [the quadratic formula](@mathematics/algebra/equations-inequalities), reveals exactly where that vertex sits, straight from the equation.',
  nutshell: [
    'Standard form: \\(y = ax^2 + bx + c\\). The sign of a decides whether it opens upward (a > 0) or downward (a < 0).',
    'The **vertex** is the parabola\'s turning point: its minimum if a > 0, maximum if a < 0.',
    'Completing the square rewrites any quadratic as \\(y = a(x-h)^2 + k\\), with the vertex sitting right there at \\((h, k)\\).',
    'The **discriminant**, \\(b^2-4ac\\), tells you how many times the parabola crosses the x-axis, before you solve anything.',
  ],
  sections: [
    {
      id: 'shape',
      title: 'The shape of a parabola',
      blocks: [
        {
          t: 'plot',
          title: 'y = x² (upward) and y = −x² (downward)',
          x: [-4, 4],
          y: [-9, 9],
          curves: [
            { f: (x: number) => x * x, color: '#3b6fd8', label: 'y = x² (a = 1 > 0)' },
            { f: (x: number) => -x * x, color: '#e07b2a', label: 'y = −x² (a = −1 < 0)' },
          ],
          points: [{ x: 0, y: 0, label: 'both vertices at the origin' }],
        },
        { t: 'math-viz', viz: 'function-explorer' },
      ],
    },
    {
      id: 'vertex',
      title: 'Finding the vertex by completing the square',
      blocks: [
        {
          t: 'proof',
          claim: 'For \\(y = ax^2+bx+c\\), the vertex sits at \\(x = -\\dfrac{b}{2a}\\).',
          method: 'direct',
          steps: [
            { statement: '\\(y = a\\left(x^2 + \\dfrac{b}{a}x\\right) + c\\)', reason: 'Factor a out of the first two terms' },
            { statement: '\\(y = a\\left(x^2 + \\dfrac{b}{a}x + \\left(\\dfrac{b}{2a}\\right)^2\\right) + c - a\\left(\\dfrac{b}{2a}\\right)^2\\)', reason: 'Complete the square inside the brackets, subtracting the same amount (scaled by a) outside to keep the equation balanced' },
            { statement: '\\(y = a\\left(x + \\dfrac{b}{2a}\\right)^2 + \\left(c - \\dfrac{b^2}{4a}\\right)\\)', reason: 'The bracket is now a perfect square; simplify the constant' },
            { statement: 'This is vertex form, \\(y = a(x-h)^2+k\\), with \\(h = -\\dfrac{b}{2a}\\)', reason: 'Match terms: the squared bracket is zero (its minimum, if a > 0) exactly when \\(x = -b/2a\\)' },
          ],
          note: 'Vertex form shows directly why the vertex is a minimum (a>0) or maximum (a<0): a squared term is always ≥ 0, so y is smallest (or largest) exactly when the squared part is 0.',
        },
        {
          t: 'example',
          title: 'Vertex of \\(y = 2x^2 - 8x + 5\\)',
          lines: [
            { label: 'Formula', text: '\\(x = -\\dfrac{b}{2a} = -\\dfrac{-8}{2(2)} = 2\\)' },
            { label: 'y-coordinate', text: '\\(y = 2(2)^2 - 8(2) + 5 = 8 - 16 + 5 = -3\\)' },
            { label: 'Vertex', text: '\\((2, -3)\\): since a = 2 > 0, this is the minimum point' },
          ],
        },
      ],
    },
    {
      id: 'roots',
      title: 'How many times does it cross the x-axis?',
      blocks: [
        {
          t: 'plot',
          title: 'Same a and b, different c: the discriminant in action',
          x: [-5, 5],
          y: [-5, 10],
          curves: [
            { f: (x: number) => x * x - 2 * x - 3, color: '#2f9e6e', label: 'c = −3: two roots' },
            { f: (x: number) => x * x - 2 * x + 1, color: '#e07b2a', label: 'c = 1: one repeated root' },
            { f: (x: number) => x * x - 2 * x + 5, color: '#d9534f', label: 'c = 5: no real roots' },
          ],
          hlines: [{ y: 0 }],
          caption: 'Same shape, same vertex x-position (x=1, since a and b don\'t change), just shifted up or down, and the number of times it crosses y=0 changes from 2, to 1, to 0.',
        },
        {
          t: 'table',
          head: ['Discriminant \\(b^2-4ac\\)', 'Roots', 'Picture'],
          rows: [
            ['Positive', '2 distinct real roots', 'Crosses the x-axis twice'],
            ['Zero', '1 repeated real root', 'Just touches the x-axis at the vertex'],
            ['Negative', 'No real roots', 'Never touches the x-axis at all'],
          ],
          caption: 'See [the discriminant](@mathematics/algebra/equations-inequalities) for the full derivation from the quadratic formula.',
        },
      ],
    },
  ],
  sources: ['Stewart, J. (2015). *Calculus* (8th ed.). Cengage.'],
  related: ['mathematics/algebra/equations-inequalities', 'mathematics/functions/linear-functions', 'mathematics/functions/transformations'],
}

export default guide
