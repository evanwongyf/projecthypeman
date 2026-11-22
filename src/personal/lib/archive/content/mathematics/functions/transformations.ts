import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Once you know one graph, a parabola, a sine wave, an exponential, you already know an entire family of related graphs, because shifting, stretching and flipping a function follows the same four rules no matter which function you start with. Learn the rules once, and you can read any transformed equation on sight.',
  nutshell: [
    'Adding/subtracting outside the function (\\(f(x)+k\\)) shifts it **vertically**; inside (\\(f(x+h)\\)) shifts it **horizontally**, and in the opposite direction to the sign.',
    'Multiplying outside the function stretches it **vertically**; multiplying inside stretches (or squashes) it **horizontally**, inversely.',
    'A negative sign outside flips the graph **vertically** (upside down); a negative sign inside flips it **horizontally** (mirror-image).',
    'These four moves combine, and apply to every function, lines, parabolas, exponentials, trig curves.',
  ],
  sections: [
    {
      id: 'shifts',
      title: 'Shifting: up, down, left, right',
      blocks: [
        {
          t: 'plot',
          title: 'f(x) = x², shifted',
          x: [-5, 6],
          y: [-2, 10],
          curves: [
            { f: (x: number) => x * x, color: '#999', dashed: true, label: 'f(x) = x²' },
            { f: (x: number) => x * x + 3, color: '#3b6fd8', label: 'f(x) + 3: up 3' },
            { f: (x: number) => (x - 2) * (x - 2), color: '#e07b2a', label: 'f(x − 2): right 2' },
          ],
        },
        {
          t: 'table',
          head: ['Change', 'Effect', 'Why it feels backwards'],
          rows: [
            ['\\(f(x) + k\\)', 'Shifts up by k (down if k < 0)', 'Matches intuition: add to the output, graph rises'],
            ['\\(f(x - h)\\)', 'Shifts right by h (left if h < 0)', 'Counter-intuitive: to get the old value of y, you now need a bigger x, so the whole graph moves right'],
          ],
          caption: 'The horizontal shift is the one everyone gets backwards at first. \\(f(x-2)\\) shifts right, not left, because reaching any particular output now requires x to be 2 bigger than before.',
        },
        {
          t: 'example',
          title: 'Checking the direction',
          lines: [
            { text: 'f(x) = x² has \\(f(0) = 0\\). For \\(g(x) = f(x-2) = (x-2)^2\\), that same output of 0 now happens at \\(x=2\\) (since \\(g(2) = (2-2)^2 = 0\\)), the key point moved from x=0 to x=2: two units to the **right**, matching the "−2" by moving opposite to its sign.' },
          ],
        },
      ],
    },
    {
      id: 'stretch-flip',
      title: 'Stretching and flipping',
      blocks: [
        {
          t: 'plot',
          title: 'f(x) = x², stretched and flipped',
          x: [-4, 4],
          y: [-9, 9],
          curves: [
            { f: (x: number) => x * x, color: '#999', dashed: true, label: 'f(x) = x²' },
            { f: (x: number) => 3 * x * x, color: '#3b6fd8', label: '3·f(x): taller (vertical stretch)' },
            { f: (x: number) => -1 * x * x, color: '#e07b2a', label: '−f(x): flipped upside down' },
          ],
        },
        {
          t: 'table',
          head: ['Change', 'Effect'],
          rows: [
            ['\\(a \\cdot f(x),\\ a>1\\)', 'Vertical stretch: graph gets taller (steeper)'],
            ['\\(a \\cdot f(x),\\ 0<a<1\\)', 'Vertical compression: graph gets flatter'],
            ['\\(f(bx),\\ b>1\\)', 'Horizontal compression: graph gets squeezed towards the y-axis'],
            ['\\(f(bx),\\ 0<b<1\\)', 'Horizontal stretch: graph spreads out'],
            ['\\(-f(x)\\)', 'Vertical flip: upside down (reflected over the x-axis)'],
            ['\\(f(-x)\\)', 'Horizontal flip: mirror image (reflected over the y-axis)'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`g(x) = a \cdot f\big(b(x - h)\big) + k`,
          where: [
            { sym: 'a', def: 'Vertical stretch (and flip, if negative)' },
            { sym: 'b', def: 'Horizontal stretch, inversely: larger b squeezes the graph' },
            { sym: 'h', def: 'Horizontal shift' },
            { sym: 'k', def: 'Vertical shift' },
          ],
          caption: 'The general transformed function. Every one of this shelf\'s transformed curves, Bollinger Bands shifting a moving average up and down by 2σ, a shifted normal distribution, is this template with specific numbers plugged in.',
        },
        { t: 'math-viz', viz: 'function-explorer' },
        { t: 'callout', tone: 'tip', title: 'Reading order matters', text: 'Inside the function (b and h) are applied to x *before* f acts on it; outside (a and k) are applied to the output *after*. When several transformations stack, work from the inside out to track what happens to x, then apply the outside changes to the result.' },
      ],
    },
  ],
  sources: ['Stewart, J. (2015). *Calculus* (8th ed.). Cengage.'],
  related: ['mathematics/functions/quadratics', 'mathematics/functions/linear-functions', 'finance/technical/volatility'],
}

export default guide
