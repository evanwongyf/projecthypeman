import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Exponential and logarithmic graphs are mirror images of each other, because the functions are inverses: one undoes the other. Once you can picture one shape, you can picture both, and recognising them on sight, the explosive climb of growth, the levelling-off of a log, is one of the most transferable graph-reading skills in finance and science.',
  nutshell: [
    'An exponential, \\(y = ab^x\\), grows (b > 1) or decays (0 < b < 1) by a constant **factor** per step, not a constant amount.',
    'Every exponential has a horizontal asymptote at \\(y=0\\): it gets arbitrarily close to zero but never actually reaches it.',
    'A logarithm, \\(y = \\log_b(x)\\), is an exponential reflected across the line \\(y=x\\): swap the roles of x and y.',
    'Logs have a vertical asymptote at \\(x=0\\) and climb (or fall) without bound, but very slowly.',
  ],
  sections: [
    {
      id: 'exp-shape',
      title: 'The shape of exponential growth and decay',
      blocks: [
        {
          t: 'plot',
          title: 'Growth (b > 1) versus decay (0 < b < 1)',
          x: [-4, 4],
          y: [-1, 10],
          curves: [
            { f: (x: number) => 2 ** x, color: '#3b6fd8', label: 'y = 2ˣ (growth)' },
            { f: (x: number) => 0.5 ** x, color: '#e07b2a', label: 'y = 0.5ˣ (decay)' },
          ],
          hlines: [{ y: 0, label: 'asymptote y = 0' }],
          points: [{ x: 0, y: 1, label: 'both pass through (0, 1)' }],
          caption: 'Every exponential \\(y=b^x\\) passes through (0, 1), since anything to the power 0 is 1. Growth climbs ever faster to the right; decay falls towards (but never reaches) zero.',
        },
        { t: 'math-viz', viz: 'function-explorer' },
        {
          t: 'example',
          title: 'Growth versus a straight line, far enough out',
          lines: [
            { text: 'At x=5, \\(y=2x\\) (linear) gives 10, while \\(y=2^x\\) (exponential) gives 32, already more than 3 times bigger. At x=10: linear gives 20, exponential gives 1,024. No matter how large the linear slope, an exponential eventually overtakes it, the core idea behind why compound growth dwarfs simple growth over the long run, as in [compound interest](@finance/foundations/time-value).' },
          ],
        },
      ],
    },
    {
      id: 'log-shape',
      title: 'The mirror-image logarithm',
      blocks: [
        {
          t: 'plot',
          title: 'y = 2ˣ and its inverse, y = log₂(x), reflected in y = x',
          x: [-4, 8],
          y: [-4, 8],
          curves: [
            { f: (x: number) => 2 ** x, color: '#3b6fd8', label: 'y = 2ˣ' },
            { f: (x: number) => Math.log2(x), color: '#e07b2a', label: 'y = log₂(x)', from: 0.05 },
            { f: (x: number) => x, color: '#999', dashed: true, label: 'y = x (mirror line)' },
          ],
          vlines: [{ x: 0, label: 'log\'s asymptote x = 0' }],
          caption: 'Reflecting a graph across the diagonal y = x is exactly what "taking the inverse" does visually, every point (a, b) on one curve becomes (b, a) on the other.',
        },
        {
          t: 'table',
          head: ['Feature', 'Exponential \\(y=b^x\\)', 'Logarithm \\(y=\\log_b(x)\\)'],
          rows: [
            ['Domain', 'all real numbers', '\\(x > 0\\)'],
            ['Range', '\\(y > 0\\)', 'all real numbers'],
            ['Asymptote', 'horizontal, y = 0', 'vertical, x = 0'],
            ['Passes through', '(0, 1)', '(1, 0)'],
            ['Growth (b>1): shape', 'climbs faster and faster', 'climbs, but slower and slower'],
          ],
          caption: 'Every row swaps: because the functions are inverses, domain and range trade places, and the asymptote direction rotates from horizontal to vertical.',
        },
        { t: 'callout', tone: 'tip', title: 'Reading an asymptote', text: 'An asymptote is a line a graph gets arbitrarily close to but never touches or crosses. \\(2^x\\) gets closer and closer to 0 as x becomes very negative, but \\(2^x\\) is always strictly positive, it never actually equals 0. This is a limit statement, formalised on the [limits](@mathematics/calculus/limits) page.' },
      ],
    },
  ],
  sources: ['Stewart, J. (2015). *Calculus* (8th ed.). Cengage.'],
  related: ['mathematics/algebra/logarithms', 'mathematics/calculus/limits', 'finance/foundations/time-value'],
}

export default guide
