import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Before any rule, a derivative is one simple picture: the slope of the line that just grazes a curve at a single point, without crossing it. Everything else, the formulas, the notation, every application from physics to machine learning, is built on making that one picture precise.',
  nutshell: [
    'A derivative is the slope of the **tangent line** to a curve at a point: how steeply it is rising or falling right there.',
    'It is built by starting with a **secant line** (through two nearby points) and shrinking the gap between them to zero.',
    '\\(f\'(a) = \\lim_{h\\to0} \\dfrac{f(a+h)-f(a)}{h}\\): the secant\'s slope formula, with the gap h shrunk by a limit.',
    'Outside geometry, a derivative is a **rate of change**: speed from distance, marginal cost from total cost, the gradient that gradient descent follows downhill.',
  ],
  sections: [
    {
      id: 'secant-tangent',
      title: 'From secant to tangent',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{secant slope} = \frac{f(a+h) - f(a)}{h}`,
          caption: 'The slope of the straight line through two points on the curve: \\((a, f(a))\\) and \\((a+h, f(a+h))\\). This is just "rise over run" from [linear functions](@mathematics/functions/linear-functions), applied to two points on a curve instead of a line.',
        },
        { t: 'math-viz', viz: 'derivative-explorer' },
        {
          t: 'math',
          tex: String.raw`f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}`,
          caption: 'The derivative at a: take the secant slope, and let the gap h shrink to 0. As the second point slides towards the first, the secant line pivots until it just grazes the curve, becoming the tangent.',
        },
        {
          t: 'example',
          title: 'By hand: the slope of \\(f(x)=x^2\\) at \\(x=3\\)',
          lines: [
            { label: 'Secant, h=1', text: '\\(\\dfrac{f(4)-f(3)}{1} = \\dfrac{16-9}{1} = 7\\)' },
            { label: 'Secant, h=0.1', text: '\\(\\dfrac{f(3.1)-f(3)}{0.1} = \\dfrac{9.61-9}{0.1} = 6.1\\)' },
            { label: 'Secant, h=0.01', text: '\\(\\dfrac{f(3.01)-f(3)}{0.01} = \\dfrac{9.0601-9}{0.01} = 6.01\\)' },
            { label: 'The pattern', text: 'converging to 6, matching the power rule\'s answer, \\(f\'(x)=2x\\), so \\(f\'(3)=6\\)' },
          ],
        },
      ],
    },
    {
      id: 'rate',
      title: 'A derivative as a rate of change',
      blocks: [
        {
          t: 'table',
          head: ['If f(x) is…', 'Then f′(x) is…', 'Example'],
          rows: [
            ['Distance travelled at time x', 'Speed', 'A car\'s position at 50m is growing by 20 m/s: that 20 is the derivative'],
            ['Total cost of making x units', 'Marginal cost: the cost of one more unit', 'The derivative tells a firm whether producing one more item is worth it'],
            ['A neural network\'s loss, as a function of one weight', 'How that weight should change to reduce the loss', 'See [gradient descent](@ai/foundations/gradient-descent): the whole engine of training a model'],
            ['An option\'s price, as a function of the stock price', 'Delta: how much the option price moves per $1 of stock movement', 'See [the option Greeks](@finance/assets/options/greeks)'],
          ],
          caption: 'Whatever the context, "the derivative of f" always answers the same question: if I nudge the input a tiny bit, how much (and in which direction) does the output move, per unit of nudge?',
        },
        {
          t: 'plot',
          title: 'A curve and its derivative, side by side',
          x: [-3, 3],
          y: [-4, 9],
          curves: [
            { f: (x: number) => x * x, color: '#3b6fd8', label: 'f(x) = x²' },
            { f: (x: number) => 2 * x, color: '#e07b2a', label: "f'(x) = 2x" },
          ],
          hlines: [{ y: 0 }],
          caption: 'Where f is falling (x < 0), f′ is negative. Where f is flat (x = 0, the vertex), f′ is exactly 0. Where f is rising (x > 0), f′ is positive, and f′ grows the steeper f\'s own slope gets.',
        },
      ],
    },
    {
      id: 'second',
      title: 'Second derivatives: curvature',
      blocks: [
        {
          t: 'math',
          tex: String.raw`f''(x) = \frac{d}{dx}\big[f'(x)\big]`,
          caption: 'The derivative of the derivative: how the slope itself is changing. If f′ measures speed, f″ measures acceleration.',
        },
        {
          t: 'table',
          head: ['\\(f\'\'(x)\\) sign', 'Meaning', 'Shape'],
          rows: [
            ['Positive', 'The slope is increasing: curving upward', 'Concave up, like a smile (e.g. x²)'],
            ['Negative', 'The slope is decreasing: curving downward', 'Concave down, like a frown'],
            ['Zero (and changing sign)', 'An inflection point: curvature flips', 'The curve switches from smiling to frowning, or back'],
          ],
          caption: 'In finance, a bond\'s price-yield curve bending (positive convexity) is literally a positive second derivative, see [bonds](@finance/assets/bonds).',
        },
      ],
    },
  ],
  sources: ['Newton, I. (1687). *Philosophiæ Naturalis Principia Mathematica*.', 'Stewart, J. (2015). *Calculus* (8th ed.). Cengage.'],
  related: ['mathematics/calculus/limits', 'mathematics/calculus/derivatives-rules', 'ai/foundations/gradient-descent'],
}

export default guide
