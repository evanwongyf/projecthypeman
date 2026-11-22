import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Formulas are not a different language from English, they are a very compressed one. This shelf teaches you to read that compression: what each symbol means, why it was chosen, and how to unpack a dense line of maths into the plain idea underneath. It builds from reading notation, through algebra, graphs and calculus, up to the logic and proof techniques behind every theorem.',
  nutshell: [
    'Most "I can\'t do maths" moments are really "I can\'t read this notation" moments. Fix the reading, and the ideas are often simple.',
    'This shelf is built to cover every symbol and technique used elsewhere in the archive: Σ and compounding, ∇ and gradient descent, logs and pH or decibels, limits and derivatives behind machine learning.',
    'Every page has worked examples with real numbers, and many have an interactive diagram you can drag and explore.',
    'The last section teaches proof itself: how to read "QED", write an induction, and tell a theorem from a lemma.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why notation feels hard',
      blocks: [
        { t: 'p', text: 'Mathematical notation is a set of abbreviations, invented over centuries, to say precisely in a few symbols what would take a paragraph in words. The abbreviation is the whole point, it lets you see the structure of an idea at a glance, once you know the shorthand. Nobody is born knowing it; everybody who uses it fluently learned it symbol by symbol, the same way you learned that "e.g." means "for example".' },
        {
          t: 'example',
          title: 'The same idea, three ways',
          lines: [
            { label: 'Plain English', text: 'Add up the first 100 whole numbers.' },
            { label: 'Compressed', text: '\\(\\displaystyle\\sum_{k=1}^{100} k\\)' },
            { label: 'Answer', text: '\\(\\dfrac{100 \\times 101}{2} = 5{,}050\\), proved on the [worked proofs](@mathematics/proofs/worked-proofs) page' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Read right to left when stuck', text: 'If a formula is confusing, find the single symbol you don\'t recognise, look it up (the [symbol glossary](@mathematics/notation/symbols) covers every one used on this site), substitute real numbers for every letter, and compute it by hand once. Fluency comes from doing this a few times, not from staring at the abstract version.' },
      ],
    },
    {
      id: 'tie-in',
      title: 'Where this shows up elsewhere',
      blocks: [
        {
          t: 'table',
          head: ['Symbol or idea', 'Taught here', 'Used in'],
          rows: [
            ['Σ (summation)', '[Sequences, series and Σ notation](@mathematics/notation/sequences-series)', 'Compound interest, DCF, cross-entropy loss'],
            ['log, ln, e', '[Logarithms](@mathematics/algebra/logarithms)', 'pH, decibels, the Richter scale, RSI, log returns'],
            ['lim', '[Limits and continuity](@mathematics/calculus/limits)', 'The derivative, continuous compounding (e itself)'],
            ['d/dx, ∂/∂x, ∇', '[Derivatives](@mathematics/calculus/derivatives-rules), [the gradient](@mathematics/calculus/multivariable)', 'Gradient descent, the Black-Scholes Greeks'],
            ['∫', '[Integrals](@mathematics/calculus/integrals)', 'Area under a probability curve, AUC'],
            ['vectors, matrices, eigenvectors', '[Linear algebra](@mathematics/linear-algebra/vectors)', 'Embeddings, attention, PCA'],
            ['P(A), E[X], Var(X)', '[Probability](@mathematics/probability/probability-rules)', 'Bayes\' theorem, the normal distribution, Sharpe ratio'],
            ['QED, induction, contradiction', '[Logic and proof](@mathematics/proofs/proof-techniques)', 'Every theorem cited across the archive'],
          ],
          caption: 'A sample of the ties between this shelf and the finance and AI shelves: learn the symbol here, recognise it everywhere else.',
        },
      ],
    },
    {
      id: 'paths',
      title: 'Suggested route',
      blocks: [
        { t: 'p', text: '**1. Learn to read.** Start with notation: the language itself, the symbol glossary, sets and functions.' },
        {
          t: 'links',
          items: [
            { path: 'mathematics/notation/reading-math' },
            { path: 'mathematics/notation/symbols', note: 'Bookmark this one: it is a reference for the whole site.' },
            { path: 'mathematics/notation/functions' },
          ],
        },
        { t: 'p', text: '**2. Build the toolkit.** Algebra and graphs: the skills behind every formula.' },
        {
          t: 'links',
          items: [
            { path: 'mathematics/algebra/logarithms' },
            { path: 'mathematics/functions/quadratics' },
          ],
        },
        { t: 'p', text: '**3. Go further.** Calculus and linear algebra: the maths behind machine learning and finance.' },
        {
          t: 'links',
          items: [
            { path: 'mathematics/calculus/limits' },
            { path: 'mathematics/calculus/derivatives-meaning' },
            { path: 'mathematics/linear-algebra/vectors' },
          ],
        },
        { t: 'p', text: '**4. Learn to prove.** How mathematicians establish that something is true, forever.' },
        {
          t: 'links',
          items: [
            { path: 'mathematics/proofs/proof-techniques' },
            { path: 'mathematics/proofs/worked-proofs' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'A very old habit', text: 'The equals sign (=) was invented by the Welsh mathematician Robert Recorde in 1557, who wrote that he chose two parallel lines "because no two things can be more equal". Before that, mathematicians wrote equations out in words, in whichever language they spoke.' },
      ],
    },
  ],
  sources: ['Mazur, J. (2014). *Enlightening Symbols: A Short History of Mathematical Notation*. Princeton University Press.', 'Polya, G. (1945). *How to Solve It*. Princeton University Press.'],
  related: ['mathematics/notation/reading-math', 'mathematics/notation/symbols', 'mathematics/proofs/proof-techniques'],
}

export default guide
