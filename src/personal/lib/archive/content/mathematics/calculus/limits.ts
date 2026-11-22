import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A limit asks: as x sneaks up on some value a, what number does f(x) sneak up on? It sounds almost philosophical, but it is the one idea that makes calculus possible, derivatives and integrals are both built, brick by brick, out of limits. The payoff is a precise way to talk about "approaching" and "instantaneous", without ever needing to divide by zero.',
  nutshell: [
    '\\(\\lim_{x\\to a} f(x) = L\\) means f(x) gets arbitrarily close to L as x gets arbitrarily close to a (but is not necessarily equal to a).',
    'A limit can exist even where the function itself is undefined, the classic case is a "hole" in the graph.',
    'For a limit to exist, the **left-hand** and **right-hand** limits must agree.',
    'A function is **continuous** at a point exactly when the limit there equals the function\'s actual value there.',
  ],
  sections: [
    {
      id: 'idea',
      title: 'The core idea',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\lim_{x \to a} f(x) = L`,
          caption: '"The limit of f(x), as x approaches a, equals L." It is a statement about the journey towards a, not necessarily about the destination itself.',
        },
        { t: 'math-viz', viz: 'limit-explorer' },
        {
          t: 'example',
          title: 'A removable hole: \\(f(x) = \\dfrac{x^2-1}{x-1}\\) at x = 1',
          lines: [
            { label: 'Problem', text: 'plugging in x=1 directly gives \\(\\frac{0}{0}\\): undefined' },
            { label: 'Factor first', text: '\\(\\dfrac{(x-1)(x+1)}{x-1} = x+1\\), valid for every \\(x \\ne 1\\)' },
            { label: 'Take the limit', text: 'as \\(x \\to 1\\), \\(x+1 \\to 2\\), so \\(\\lim_{x\\to1} f(x) = 2\\)' },
            { label: 'Reconcile', text: 'f(1) itself is undefined (a hole in the graph), but the limit still exists and equals 2, the limit only cares about values *near* 1, never *at* 1' },
          ],
        },
      ],
    },
    {
      id: 'one-sided',
      title: 'One-sided limits and when a limit fails',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\lim_{x \to a^{-}} f(x) \qquad \lim_{x \to a^{+}} f(x)`,
          caption: 'The left-hand limit (approaching from below, smaller x) and the right-hand limit (from above). The full two-sided limit exists only if both agree.',
        },
        {
          t: 'example',
          title: 'A step function: no overall limit at 0',
          lines: [
            { label: 'Function', text: '\\(f(x) = -1\\) for \\(x<0\\), and \\(f(x)=1\\) for \\(x \\ge 0\\)' },
            { label: 'Left-hand limit', text: '\\(\\lim_{x\\to0^-} f(x) = -1\\)' },
            { label: 'Right-hand limit', text: '\\(\\lim_{x\\to0^+} f(x) = 1\\)' },
            { label: 'Verdict', text: 'different numbers, so \\(\\lim_{x\\to0} f(x)\\) **does not exist**, even though both one-sided limits exist individually' },
          ],
        },
        {
          t: 'table',
          head: ['Case', 'Example', 'Limit exists?'],
          rows: [
            ['Removable hole', '\\((x^2-1)/(x-1)\\) at \\(x=1\\)', 'Yes: 2'],
            ['Jump discontinuity', 'Step function at \\(x=0\\)', 'No: sides disagree'],
            ['Vertical asymptote', '\\(1/x\\) at \\(x=0\\)', 'No: shoots to ±∞'],
            ['Smooth, continuous point', '\\(x^2\\) at any x', 'Yes, and equals f(x) exactly'],
          ],
        },
      ],
    },
    {
      id: 'formal',
      title: 'The formal epsilon-delta definition',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\forall \varepsilon > 0,\ \exists\, \delta > 0 \text{ such that } 0 < |x-a| < \delta \implies |f(x)-L| < \varepsilon`,
          caption: 'Read it as a challenge-and-response game. Someone names an error tolerance ε, however tiny. You must find a distance δ around a, small enough that staying within δ of a (but not exactly at a) guarantees f(x) lands within ε of L. If you can always do this, whatever ε they pick, the limit is L.',
        },
        {
          t: 'example',
          title: 'Checking \\(\\lim_{x\\to3} 2x = 6\\) with ε = 0.1',
          lines: [
            { label: 'Need', text: '\\(|2x - 6| < 0.1\\) whenever \\(0 < |x-3| < \\delta\\)' },
            { label: 'Simplify', text: '\\(|2x-6| = 2|x-3|\\), so we need \\(2|x-3| < 0.1\\), i.e. \\(|x-3| < 0.05\\)' },
            { label: 'Choose', text: '\\(\\delta = 0.05\\) works: staying within 0.05 of x=3 keeps f(x) within 0.1 of 6' },
            { label: 'General rule', text: 'for this function, \\(\\delta = \\varepsilon/2\\) always works, for any ε, which is exactly what it means for the limit to truly be 6' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Centuries to make it rigorous', text: 'Newton and Leibniz invented calculus in the 1660s–70s using intuitive "infinitesimals" that worked brilliantly but could not be made logically airtight. It took until the 1820s–60s, with Cauchy and then Weierstrass, for the epsilon-delta definition to put limits, and all of calculus built on them, on fully rigorous footing.' },
      ],
    },
    {
      id: 'continuity',
      title: 'Continuity',
      blocks: [
        {
          t: 'math',
          tex: String.raw`f \text{ is continuous at } a \iff \lim_{x\to a} f(x) = f(a)`,
          caption: 'Three things must all hold: the limit must exist, f(a) must be defined, and they must be equal. Informally: you can draw the graph through that point without lifting your pen.',
        },
        { t: 'callout', tone: 'tip', title: 'Why continuity matters for derivatives', text: 'A function must be continuous at a point to even have a chance of being differentiable there (having a well-defined slope), a jump or a hole breaks the tangent line before it can be drawn. See [what a derivative means](@mathematics/calculus/derivatives-meaning).' },
      ],
    },
  ],
  sources: ['Cauchy, A.-L. (1821). *Cours d\'Analyse*.', 'Stewart, J. (2015). *Calculus* (8th ed.). Cengage.'],
  related: ['mathematics/calculus/derivatives-meaning', 'mathematics/functions/exponential-log-graphs', 'mathematics/algebra/logarithms'],
}

export default guide
