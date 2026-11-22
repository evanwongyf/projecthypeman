import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'If a derivative breaks a curve down into its instantaneous slope, an integral builds it back up into an area. The two turn out to be exact opposites of each other, a genuinely surprising fact called the fundamental theorem of calculus, which turns "add up infinitely many infinitely thin slices" into "just undo a derivative".',
  nutshell: [
    'An integral \\(\\int_a^b f(x)\\,dx\\) is the signed area between a curve and the x-axis, from \\(x=a\\) to \\(x=b\\).',
    'It is built as the limit of a **Riemann sum**: approximate the area with thin rectangles, then let their width shrink to zero.',
    'An **antiderivative** F of f is any function with \\(F\'=f\\), integration is the reverse of differentiation.',
    'The **fundamental theorem of calculus** says the area under f from a to b equals \\(F(b)-F(a)\\): a stunning shortcut that avoids ever summing rectangles directly.',
  ],
  sections: [
    {
      id: 'area',
      title: 'Area as a limit of rectangles',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Area} \approx \sum_{i=1}^{n} f(x_i)\,\Delta x`,
          caption: 'A Riemann sum: slice the interval into n strips of width Δx, and add up n rectangles, each as tall as the function at some sample point in its strip.',
        },
        { t: 'math-viz', viz: 'riemann-sum' },
        {
          t: 'math',
          tex: String.raw`\int_a^b f(x)\,dx = \lim_{n\to\infty} \sum_{i=1}^{n} f(x_i)\,\Delta x`,
          caption: 'The definite integral: the exact area, found by letting the number of rectangles grow without bound (and their width shrink to 0), another limit, the second of calculus\'s two foundational ones.',
        },
        { t: 'callout', tone: 'tip', title: 'Reading the integral sign', text: 'The elongated S, ∫, literally stands for "sum"Leibniz\'s own shorthand for an infinite sum of infinitesimally thin slices, \\(f(x)\\,dx\\). dx marks "a tiny sliver of x", the infinitesimal width of each rectangle in the limit.' },
      ],
    },
    {
      id: 'antiderivative',
      title: 'The antiderivative',
      blocks: [
        {
          t: 'math',
          tex: String.raw`F'(x) = f(x) \quad\Longrightarrow\quad F \text{ is an antiderivative of } f`,
          caption: 'Integration undoes differentiation. Since a constant always differentiates to 0, every antiderivative comes with a "+C": if F works, so does F+5, F−100, or F plus any constant.',
        },
        {
          t: 'table',
          head: ['f(x)', 'Antiderivative \\(\\int f(x)\\,dx\\)'],
          rows: [
            ['\\(x^n\\ (n \\ne -1)\\)', '\\(\\dfrac{x^{n+1}}{n+1} + C\\)'],
            ['\\(1/x\\)', '\\(\\ln|x| + C\\)'],
            ['\\(e^x\\)', '\\(e^x + C\\)'],
            ['\\(\\cos(x)\\)', '\\(\\sin(x) + C\\)'],
            ['\\(\\sin(x)\\)', '\\(-\\cos(x) + C\\)'],
          ],
          caption: 'The power rule for integration simply runs the derivative\'s power rule in reverse: raise the power by 1, then divide by the new power.',
        },
      ],
    },
    {
      id: 'ftc',
      title: 'The fundamental theorem of calculus',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\int_a^b f(x)\,dx = F(b) - F(a) \qquad \text{where } F' = f`,
          caption: 'The single most important equation linking the two halves of calculus. Instead of summing an infinite number of infinitely thin rectangles directly, just find any antiderivative F, and subtract its values at the endpoints.',
        },
        {
          t: 'example',
          title: 'The area under \\(f(x)=x^2\\) from 0 to 3',
          lines: [
            { label: 'Antiderivative', text: '\\(F(x) = \\dfrac{x^3}{3}\\) (check: \\(F\'(x) = x^2\\) ✓)' },
            { label: 'Apply FTC', text: '\\(\\displaystyle\\int_0^3 x^2\\,dx = F(3)-F(0) = \\dfrac{27}{3} - 0 = 9\\)' },
            { label: 'Sanity check', text: 'using 1,000 thin Riemann rectangles numerically gives 8.9955…, converging towards the exact answer, 9, as the lab above shows for other functions' },
          ],
        },
        {
          t: 'p',
          text: 'This is precisely how the maths behind [evaluating a model](@ai/foundations/evaluation) computes AUC, the area under the ROC curve, and how [random variables](@mathematics/probability/random-variables) find the total probability under a continuous distribution: both are definite integrals.',
        },
        { t: 'callout', tone: 'fact', title: 'Two inventors, one bitter dispute', text: 'Isaac Newton developed calculus first (around 1665–67) but published late; Gottfried Leibniz developed it independently a decade later and published first (1684), including the ∫ and dx notation still used today. A long, nationalistic priority dispute between English and continental mathematicians followed for decades, now generally resolved as independent co-discovery.' },
      ],
    },
  ],
  sources: ['Leibniz, G. W. (1684). *Nova Methodus pro Maximis et Minimis*.', 'Newton, I. (1687). *Philosophiæ Naturalis Principia Mathematica*.', 'Stewart, J. (2015). *Calculus* (8th ed.). Cengage.'],
  related: ['mathematics/calculus/derivatives-rules', 'mathematics/probability/random-variables', 'ai/foundations/evaluation'],
}

export default guide
