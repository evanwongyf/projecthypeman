import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most functions worth differentiating are not simple, they are one function tucked inside another, like \\(\\sin(x^2)\\) or a neural network\'s output. The chain rule is the tool for exactly this: it differentiates a composition by multiplying together the derivative of each layer. It is, without exaggeration, the single mathematical idea that makes training modern neural networks possible.',
  nutshell: [
    'For a composition \\(f(g(x))\\), the chain rule says \\(\\dfrac{d}{dx}f(g(x)) = f\'(g(x)) \\cdot g\'(x)\\): the outer derivative, times the inner derivative.',
    'In Leibniz notation it looks like cancelling fractions: \\(\\dfrac{dy}{dx} = \\dfrac{dy}{du}\\cdot\\dfrac{du}{dx}\\) (though it is a theorem, not literal cancellation).',
    'Chains of three or more functions just multiply three or more derivatives together.',
    'Backpropagation, the algorithm that trains neural networks, is the chain rule applied layer by layer, backwards from the loss.',
  ],
  sections: [
    {
      id: 'statement',
      title: 'The rule, and why it makes sense',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{d}{dx}\,f\big(g(x)\big) = f'\big(g(x)\big) \cdot g'(x)`,
          where: [
            { sym: 'g(x)', def: 'The inner function, applied first' },
            { sym: 'f', def: 'The outer function, applied to g\'s output' },
            { sym: 'f\'(g(x))', def: 'The outer derivative, evaluated at the inner function\'s *output*, not at x' },
          ],
        },
        {
          t: 'p',
          text: '**Why it multiplies.** Imagine three gears meshed together: if gear A spins 3 times for every spin of gear B, and gear B spins 4 times for every spin of gear C, then gear A spins \\(3 \\times 4 = 12\\) times for every spin of C, the rates of change multiply through the chain. A derivative is exactly a rate of change (see [what a derivative means](@mathematics/calculus/derivatives-meaning)), so composing functions composes their rates by multiplying.',
        },
        {
          t: 'math',
          tex: String.raw`\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}`,
          caption: 'The same rule in Leibniz notation, with \\(u=g(x)\\) and \\(y=f(u)\\). It looks exactly like cancelling the du\'s in a fraction, a happy coincidence of notation that makes the rule easy to remember, even though derivatives are limits, not literal fractions.',
        },
      ],
    },
    {
      id: 'worked',
      title: 'Worked examples',
      blocks: [
        {
          t: 'example',
          title: 'Differentiating \\(y = \\sin(x^2)\\)',
          lines: [
            { label: 'Identify layers', text: 'outer \\(f(u)=\\sin(u)\\), inner \\(g(x) = u = x^2\\)' },
            { label: 'Outer derivative', text: '\\(f\'(u) = \\cos(u)\\)' },
            { label: 'Inner derivative', text: '\\(g\'(x) = 2x\\)' },
            { label: 'Combine', text: '\\(\\dfrac{dy}{dx} = \\cos(x^2) \\cdot 2x = 2x\\cos(x^2)\\)' },
          ],
        },
        {
          t: 'example',
          title: 'Differentiating \\(y = e^{3x+1}\\)',
          lines: [
            { label: 'Identify layers', text: 'outer \\(f(u) = e^u\\), inner \\(u = 3x+1\\)' },
            { label: 'Outer derivative', text: '\\(f\'(u) = e^u\\) (e raised to a power is its own derivative)' },
            { label: 'Inner derivative', text: '\\(u\' = 3\\)' },
            { label: 'Combine', text: '\\(\\dfrac{dy}{dx} = e^{3x+1} \\cdot 3 = 3e^{3x+1}\\)' },
          ],
        },
        {
          t: 'example',
          title: 'Three layers deep: \\(y = \\ln\\big(\\sin(x^2)\\big)\\)',
          lines: [
            { label: 'Layers', text: 'outer \\(\\ln(u)\\), middle \\(\\sin(v)\\), inner \\(v = x^2\\)' },
            { label: 'Each derivative', text: '\\(\\dfrac{1}{u},\\quad \\cos(v),\\quad 2x\\)' },
            { label: 'Multiply all three', text: '\\(\\dfrac{dy}{dx} = \\dfrac{1}{\\sin(x^2)} \\cdot \\cos(x^2) \\cdot 2x = \\dfrac{2x\\cos(x^2)}{\\sin(x^2)}\\)' },
          ],
        },
      ],
    },
    {
      id: 'backprop',
      title: 'Why this trains neural networks',
      blocks: [
        {
          t: 'flow',
          title: 'A 3-layer network is a 3-deep composition',
          nodes: [
            { label: 'Input x', tone: 'data' },
            { label: 'Layer 1: h₁ = f₁(x)', tone: 'model' },
            { label: 'Layer 2: h₂ = f₂(h₁)', tone: 'model' },
            { label: 'Loss: L = f₃(h₂)', tone: 'output' },
          ],
          caption: 'This is literally \\(L = f_3(f_2(f_1(x)))\\): the exact composition structure the chain rule was built for.',
        },
        {
          t: 'math',
          tex: String.raw`\frac{\partial L}{\partial \mathbf{w}^{[1]}} = \frac{\partial L}{\partial h_2}\cdot\frac{\partial h_2}{\partial h_1}\cdot\frac{\partial h_1}{\partial \mathbf{w}^{[1]}}`,
          caption: 'To find how the loss depends on a weight buried in layer 1, chain together the local derivative at every layer in between. See [backpropagation](@ai/neural/backprop) for this worked through a full numerical example.',
        },
        { t: 'callout', tone: 'fact', title: 'Rediscovered, not discovered once', text: 'The chain rule traces back to Leibniz\'s notes in the 1670s–90s, though he never stated it in full generality. Its use for training neural networks (as "backpropagation") was independently found by several researchers from the 1960s onward, and became famous after a 1986 paper by Rumelhart, Hinton and Williams showed it could train useful hidden layers, see [the history of AI](@ai/foundations/history).' },
      ],
    },
  ],
  sources: ['Leibniz, G. W. (1676). Unpublished notes.', 'Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). Learning representations by back-propagating errors. *Nature*, 323, 533–536.', 'Stewart, J. (2015). *Calculus* (8th ed.). Cengage.'],
  related: ['mathematics/calculus/derivatives-rules', 'ai/neural/backprop', 'mathematics/calculus/multivariable'],
}

export default guide
