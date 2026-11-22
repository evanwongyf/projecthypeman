import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every derivative on this archive, a loss function\'s gradient, a Black-Scholes Greek, a moving average\'s slope, is built from a handful of rules, applied piece by piece. This page derives the power, product and quotient rules from the limit definition, so differentiating becomes mechanical: spot the pattern, apply the rule.',
  nutshell: [
    'The derivative is defined as a limit: \\(f\'(x) = \\lim_{h\\to0} \\dfrac{f(x+h)-f(x)}{h}\\). See [what a derivative means](@mathematics/calculus/derivatives-meaning) for the picture behind it.',
    '**Power rule**: \\(\\dfrac{d}{dx}x^n = nx^{n-1}\\), bring the power down, subtract one from it.',
    '**Product rule**: \\((fg)\' = f\'g + fg\'\\), differentiate each factor in turn, holding the other fixed.',
    '**Quotient rule**: \\(\\left(\\dfrac{f}{g}\\right)\' = \\dfrac{f\'g - fg\'}{g^2}\\).',
    'The **chain rule**, for compositions like \\(f(g(x))\\), gets its own in-depth page: see [the chain rule](@mathematics/calculus/chain-rule).',
  ],
  sections: [
    {
      id: 'power',
      title: 'The power rule',
      blocks: [
        {
          t: 'proof',
          claim: '\\(\\dfrac{d}{dx}x^n = nx^{n-1}\\), for positive integer n.',
          method: 'direct',
          given: ['The limit definition: \\(f\'(x) = \\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}\\)', 'The binomial expansion: \\((x+h)^n = x^n + nx^{n-1}h + \\binom{n}{2}x^{n-2}h^2 + \\cdots + h^n\\)'],
          steps: [
            { statement: '\\(f(x) = x^n\\)', reason: 'The function being differentiated' },
            { statement: '\\(f\'(x) = \\lim_{h\\to0}\\dfrac{(x+h)^n - x^n}{h}\\)', reason: 'Substitute into the limit definition' },
            { statement: '\\(= \\lim_{h\\to0}\\dfrac{\\big(x^n + nx^{n-1}h + \\binom{n}{2}x^{n-2}h^2 + \\cdots\\big) - x^n}{h}\\)', reason: 'Expand \\((x+h)^n\\) with the binomial theorem' },
            { statement: '\\(= \\lim_{h\\to0}\\dfrac{nx^{n-1}h + \\binom{n}{2}x^{n-2}h^2 + \\cdots}{h}\\)', reason: 'The \\(x^n\\) terms cancel' },
            { statement: '\\(= \\lim_{h\\to0}\\Big(nx^{n-1} + \\binom{n}{2}x^{n-2}h + \\cdots\\Big)\\)', reason: 'Divide every remaining term by h, every term had at least one factor of h' },
            { statement: '\\(= nx^{n-1}\\)', reason: 'Every term still carrying an h vanishes as \\(h\\to0\\), leaving only the first term' },
          ],
        },
        {
          t: 'table',
          head: ['Function', 'Derivative', 'Check'],
          rows: [
            ['\\(x^3\\)', '\\(3x^2\\)', 'n=3 → bring down the 3, reduce the power to 2'],
            ['\\(x\\) (i.e. \\(x^1\\))', '\\(1\\)', 'the slope of y=x is 1, everywhere'],
            ['\\(1\\) (i.e. \\(x^0\\))', '\\(0\\)', 'a constant never changes, so its slope is 0'],
            ['\\(1/x\\) (i.e. \\(x^{-1}\\))', '\\(-x^{-2} = -1/x^2\\)', 'the power rule works for negative exponents too'],
            ['\\(\\sqrt{x}\\) (i.e. \\(x^{1/2}\\))', '\\(\\tfrac12 x^{-1/2} = \\dfrac{1}{2\\sqrt{x}}\\)', 'and for fractional exponents'],
          ],
          caption: 'The power rule, proved above only for whole-number n, in fact holds for any real exponent n.',
        },
      ],
    },
    {
      id: 'product-quotient',
      title: 'Product and quotient rules',
      blocks: [
        {
          t: 'math',
          tex: String.raw`(fg)' = f'g + fg'`,
          caption: 'The product rule. A common mistake is assuming \\((fg)\' = f\'g\'\\), it is not; each factor gets differentiated in its own term, while the other stays put.',
        },
        {
          t: 'example',
          title: 'Differentiating \\(y = x^2 \\sin(x)\\)',
          lines: [
            { label: 'Split', text: '\\(f = x^2\\), \\(g = \\sin(x)\\), so \\(f\'=2x\\), \\(g\'=\\cos(x)\\)' },
            { label: 'Apply', text: '\\(y\' = f\'g + fg\' = 2x\\sin(x) + x^2\\cos(x)\\)' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}`,
          caption: 'The quotient rule. Mnemonic many students use: "low d-high minus high d-low, over low-low"g (low) times derivative of f (high), minus f times derivative of g, all over g squared.',
        },
        {
          t: 'example',
          title: 'Differentiating \\(y = \\dfrac{x}{x+1}\\)',
          lines: [
            { label: 'Split', text: '\\(f=x,\\ g=x+1\\), so \\(f\'=1,\\ g\'=1\\)' },
            { label: 'Apply', text: '\\(y\' = \\dfrac{(1)(x+1) - (x)(1)}{(x+1)^2} = \\dfrac{x+1-x}{(x+1)^2} = \\dfrac{1}{(x+1)^2}\\)' },
          ],
        },
      ],
    },
    {
      id: 'common',
      title: 'A table of common derivatives',
      blocks: [
        {
          t: 'table',
          head: ['f(x)', 'f′(x)'],
          rows: [
            ['\\(c\\) (constant)', '\\(0\\)'],
            ['\\(x^n\\)', '\\(nx^{n-1}\\)'],
            ['\\(e^x\\)', '\\(e^x\\)'],
            ['\\(\\ln(x)\\)', '\\(1/x\\)'],
            ['\\(\\sin(x)\\)', '\\(\\cos(x)\\)'],
            ['\\(\\cos(x)\\)', '\\(-\\sin(x)\\)'],
          ],
          caption: 'Worth memorising, since they appear as building blocks inside almost every more complicated derivative.',
        },
        { t: 'math-viz', viz: 'derivative-explorer' },
      ],
    },
  ],
  sources: ['Stewart, J. (2015). *Calculus* (8th ed.). Cengage.'],
  related: ['mathematics/calculus/derivatives-meaning', 'mathematics/calculus/chain-rule', 'mathematics/calculus/integrals'],
}

export default guide
