import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An exponent is repeated multiplication, written small and to the upper right. Every law of exponents can be re-derived on the spot just by expanding a couple of cases by hand, which means you never really have to memorise them, only understand where they come from.',
  nutshell: [
    '\\(x^n\\) means x multiplied by itself n times: \\(x^n = x \\times x \\times \\cdots \\times x\\) (n copies).',
    'The laws (\\(x^a x^b = x^{a+b}\\), etc.) all fall out of counting how many copies of x you have.',
    '\\(x^0 = 1\\), \\(x^{-n} = 1/x^n\\), and \\(x^{1/n} = \\sqrt[n]{x}\\) are definitions chosen specifically to keep the laws consistent, not separate rules to memorise.',
    'A root undoes a power: \\(\\sqrt[n]{x} = x^{1/n}\\) is the same idea written two ways.',
  ],
  sections: [
    {
      id: 'laws',
      title: 'The laws of exponents, derived',
      blocks: [
        {
          t: 'math',
          tex: String.raw`x^a \cdot x^b = x^{a+b}`,
          caption: 'Derived by counting: \\(x^3 \\cdot x^2 = (x\\cdot x\\cdot x)(x \\cdot x) = x^5\\), three copies of x times two copies of x is five copies of x.',
        },
        {
          t: 'math',
          tex: String.raw`\frac{x^a}{x^b} = x^{a-b}`,
          caption: 'Also counting: \\(\\dfrac{x^5}{x^2} = \\dfrac{x\\cdot x\\cdot x\\cdot x\\cdot x}{x\\cdot x}\\): two of the five x\'s on top cancel two on the bottom, leaving \\(x^3\\).',
        },
        {
          t: 'math',
          tex: String.raw`(x^a)^b = x^{ab}`,
          caption: '"A power of a power": \\((x^2)^3 = x^2 \\cdot x^2 \\cdot x^2 = x^{2+2+2} = x^6\\), three groups of two copies is six copies.',
        },
        {
          t: 'table',
          head: ['Law', 'In symbols', 'Worked example'],
          rows: [
            ['Product of powers', '\\(x^a x^b = x^{a+b}\\)', '\\(2^3 \\cdot 2^2 = 8 \\times 4 = 32 = 2^5\\)'],
            ['Quotient of powers', '\\(x^a / x^b = x^{a-b}\\)', '\\(5^6 / 5^4 = 5^2 = 25\\)'],
            ['Power of a power', '\\((x^a)^b = x^{ab}\\)', '\\((3^2)^3 = 9^3 = 729 = 3^6\\)'],
            ['Power of a product', '\\((xy)^a = x^a y^a\\)', '\\((2\\cdot3)^2 = 6^2 = 36 = 4 \\times 9\\)'],
          ],
        },
      ],
    },
    {
      id: 'zero-negative',
      title: 'Zero, negative and fractional exponents',
      blocks: [
        {
          t: 'math',
          tex: String.raw`x^0 = \frac{x^n}{x^n} = x^{n-n} = 1 \qquad (x \ne 0)`,
          caption: 'Why anything to the power 0 is 1: apply the quotient law to \\(x^n/x^n\\), which obviously equals 1, and also equals \\(x^{n-n} = x^0\\). The definition is chosen specifically so the laws stay consistent.',
        },
        {
          t: 'math',
          tex: String.raw`x^{-n} = \frac{x^0}{x^n} = x^{0-n} = \frac{1}{x^n}`,
          caption: 'Why a negative exponent means "reciprocal": the same consistency argument, one step further.',
        },
        {
          t: 'example',
          title: 'Negative exponents in practice',
          lines: [
            { label: '\\(2^{-3}\\)', text: '\\(= \\dfrac{1}{2^3} = \\dfrac{1}{8} = 0.125\\)' },
            { label: 'Present value', text: '\\((1+r)^{-n}\\), from [time value of money](@finance/foundations/time-value), is exactly this: a negative power means "divide, don\'t multiply"discounting instead of compounding' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\big(x^{1/n}\big)^n = x^{(1/n)\cdot n} = x^1 = x \qquad\Longrightarrow\qquad x^{1/n} = \sqrt[n]{x}`,
          caption: 'Why a fractional exponent means a root: whatever \\(x^{1/n}\\) is, raising it to the n-th power must give back x (by the power-of-a-power law), which is exactly the definition of the n-th root.',
        },
        {
          t: 'math',
          tex: String.raw`x^{m/n} = \big(x^{1/n}\big)^m = \sqrt[n]{x^{\,m}} = \big(\sqrt[n]{x}\big)^{m}`,
          caption: 'A general fractional exponent: the denominator is the root, the numerator is the power, in either order, since powers and roots commute here.',
        },
        {
          t: 'example',
          title: '\\(8^{2/3}\\), two ways',
          lines: [
            { label: 'Root first', text: '\\(\\sqrt[3]{8} = 2\\), then \\(2^2 = 4\\)' },
            { label: 'Power first', text: '\\(8^2 = 64\\), then \\(\\sqrt[3]{64} = 4\\)' },
            { label: 'Same answer', text: 'root-first is almost always easier arithmetic, since the numbers stay smaller' },
          ],
        },
      ],
    },
    {
      id: 'roots',
      title: 'Roots',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\sqrt[n]{x} = y \iff y^n = x`,
          caption: 'The n-th root of x is the number which, raised to the n-th power, gives x back. A plain \\(\\sqrt{x}\\) means the square root, \\(n=2\\).',
        },
        {
          t: 'math',
          tex: String.raw`\sqrt{xy} = \sqrt{x}\sqrt{y} \qquad \sqrt{\frac{x}{y}} = \frac{\sqrt{x}}{\sqrt{y}}`,
          caption: 'Roots distribute over multiplication and division, but, importantly, not over addition: \\(\\sqrt{x+y} \\ne \\sqrt{x} + \\sqrt{y}\\) in general (try x = y = 1: \\(\\sqrt{2} \\approx 1.41\\), but \\(\\sqrt{1}+\\sqrt{1}=2\\)).',
        },
        { t: 'fin-tool', tool: 'compound' },
        { t: 'callout', tone: 'fact', title: 'The radical sign\'s odd shape', text: 'The square-root symbol √ is thought to come from a stylised lowercase "r", for the Latin *radix* ("root"), first appearing in print in Christoff Rudolff\'s 1525 algebra textbook. The horizontal bar (the "vinculum") was added later, to group everything under the root the way parentheses do.' },
      ],
    },
  ],
  sources: ['Rudolff, C. (1525). *Coss*.', 'Stewart, J. (2015). *Calculus* (8th ed.). Cengage.'],
  related: ['mathematics/algebra/logarithms', 'finance/foundations/time-value', 'mathematics/notation/reading-math'],
}

export default guide
