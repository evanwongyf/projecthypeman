import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A function is a rule that assigns exactly one output to every allowed input: a vending machine, not a slot machine. Once you read \\(f(x)\\) as "the machine f, fed the input x", every formula built from functions, gradient descent\'s \\(f_\\theta(x)\\), a neural network\'s layers, the compound interest formula, becomes a sentence about machines and their outputs.',
  nutshell: [
    '\\(f(x)\\) means "the output of function f, given input x"it is a value, not multiplication.',
    'The **domain** is every input allowed in; the **range** is every output that can come out.',
    '**Composition**, \\((f \\circ g)(x) = f(g(x))\\), feeds one function\'s output into another, and is read right to left.',
    'An **inverse function**, \\(f^{-1}\\), undoes f exactly: \\(f^{-1}(f(x)) = x\\).',
  ],
  sections: [
    {
      id: 'machine',
      title: 'The vending-machine picture',
      blocks: [
        {
          t: 'flow',
          title: 'f(x) = x² + 1',
          nodes: [
            { label: 'Input x', sub: 'e.g. x = 3', tone: 'data' },
            { label: 'Machine f', sub: 'square it, then add 1', tone: 'model' },
            { label: 'Output f(x)', sub: 'f(3) = 3² + 1 = 10', tone: 'output' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`f(x) = x^2 + 1 \qquad f(3) = 3^2 + 1 = 10 \qquad f(-2) = (-2)^2 + 1 = 5`,
          caption: 'f is the name of the machine; x is a placeholder for whatever is fed in. f(3) is a specific number, 10, not "f times 3".',
        },
        { t: 'callout', tone: 'warn', title: 'f(x) is not multiplication', text: 'The single most common misreading: \\(f(x)\\) does not mean "f times x". f is a function\'s name (often a single letter chosen for what it represents: f for "function", g for "the next one", P for "probability", C for "cost"), and (x) tells you which input you\'re feeding it.' },
      ],
    },
    {
      id: 'domain-range',
      title: 'Domain and range',
      blocks: [
        {
          t: 'math',
          tex: String.raw`f: X \to Y`,
          caption: '"f is a function from X to Y": X is the domain (every allowed input), Y is the codomain (the kind of thing outputs live in). The range is the subset of Y that f actually produces.',
        },
        {
          t: 'table',
          head: ['Function', 'Domain (allowed inputs)', 'Range (possible outputs)'],
          rows: [
            ['\\(f(x) = x^2\\)', 'all real numbers', '\\(y \\ge 0\\): squaring never gives a negative'],
            ['\\(f(x) = 1/x\\)', 'all reals except \\(x = 0\\)', 'all reals except \\(y = 0\\)'],
            ['\\(f(x) = \\sqrt{x}\\)', '\\(x \\ge 0\\): can\'t take a real square root of a negative', '\\(y \\ge 0\\)'],
            ['\\(f(x) = \\ln(x)\\)', '\\(x > 0\\)', 'all real numbers'],
          ],
          caption: 'Finding the domain is usually a search for trouble: division by zero, a negative under a square root, zero or a negative inside a log.',
        },
        {
          t: 'example',
          title: 'Why insurance has a domain',
          lines: [
            { text: 'A function pricing car insurance by driver age, "cost(age)", has a domain of realistic human ages, say 16 to 100. cost(−5) or cost(300) are not just wrong answers, they are **outside the domain**, meaningless questions the function was never built to answer.' },
          ],
        },
      ],
    },
    {
      id: 'composition',
      title: 'Composition and inverses',
      blocks: [
        {
          t: 'math',
          tex: String.raw`(f \circ g)(x) = f(g(x))`,
          caption: 'Composition: feed x into g first, then feed g\'s output into f. Read the small circle as "after": "f after g".',
        },
        {
          t: 'example',
          title: 'Composing two functions',
          lines: [
            { label: 'Given', text: '\\(f(x) = x^2\\), \\(g(x) = x + 3\\)' },
            { label: '(f ∘ g)(2)', text: 'first \\(g(2) = 5\\), then \\(f(5) = 25\\)' },
            { label: '(g ∘ f)(2)', text: 'first \\(f(2) = 4\\), then \\(g(4) = 7\\)' },
            { label: 'Lesson', text: 'order matters: \\(f \\circ g \\ne g \\circ f\\) in general' },
          ],
        },
        {
          t: 'flow',
          title: 'A neural network is a composition of functions',
          nodes: [
            { label: 'Input x', tone: 'data' },
            { label: 'Layer 1: f₁(x)', tone: 'model' },
            { label: 'Layer 2: f₂(f₁(x))', tone: 'model' },
            { label: 'Output: f₃(f₂(f₁(x)))', tone: 'output' },
          ],
          caption: 'This is exactly why the chain rule, which differentiates compositions, is the engine behind training a network: see [the chain rule](@mathematics/calculus/chain-rule).',
        },
        {
          t: 'math',
          tex: String.raw`f^{-1}(f(x)) = x \qquad f(f^{-1}(y)) = y`,
          caption: 'An inverse function perfectly undoes f. Crucially, \\(f^{-1}(x) \\ne \\dfrac{1}{f(x)}\\), the −1 here is a label ("the inverse of"), not an exponent.',
        },
        {
          t: 'example',
          title: 'Logarithm as the inverse of exponentiation',
          lines: [
            { label: 'Function', text: '\\(f(x) = 2^x\\)' },
            { label: 'Inverse', text: '\\(f^{-1}(x) = \\log_2(x)\\)' },
            { label: 'Check', text: '\\(f(3) = 8\\), then \\(f^{-1}(8) = \\log_2(8) = 3\\) ✓: back where we started' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Only some functions have an inverse', text: 'A function only has a true inverse if it is one-to-one: no two different inputs ever give the same output. \\(f(x)=x^2\\) fails this (f(2) = f(−2) = 4), which is why \\(\\sqrt{x}\\), its "inverse", only ever returns the non-negative root, a choice, not a law of nature.' },
      ],
    },
  ],
  sources: ['Dirichlet, P. G. L. (1837). On the representation of entirely arbitrary functions. *Repertorium der Physik*.', 'Stewart, J. (2015). *Calculus* (8th ed.). Cengage.'],
  related: ['mathematics/notation/symbols', 'mathematics/functions/transformations', 'mathematics/calculus/chain-rule'],
}

export default guide
