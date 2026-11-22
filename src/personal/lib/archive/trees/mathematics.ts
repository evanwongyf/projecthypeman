import type { ArchiveNode } from '../topics'

// Mathematics: how to read mathematical notation and use it with confidence, building
// from the symbols and syntax up through algebra, graphs, calculus, linear algebra,
// probability and the skills of proof, with interactive diagrams throughout. Written to
// cover the ground used by the finance and AI shelves: logarithms, limits, derivatives,
// sigma notation, vectors, matrices and more.

export const MATHEMATICS: ArchiveNode = {
  slug: 'mathematics',
  title: 'Mathematics',
  blurb: 'How to read mathematical notation and use it with confidence: symbols, algebra, graphs, calculus, linear algebra, probability, and how to write and interpret a proof.',
  glyph: 'π',
  color: 'color-mix(in srgb, var(--teal) 50%, var(--lavender))',
  tags: ['mathematics', 'maths', 'math', 'notation', 'algebra', 'calculus', 'proof', 'theorem'],
  children: [
    { slug: 'start-here', title: 'Start here', blurb: 'What is on this shelf, why notation trips people up, and a route from reading symbols to writing proofs.', minutes: 5, glyph: '★', tags: ['beginner', 'overview', 'roadmap'] },
    {
      slug: 'notation',
      title: 'Reading mathematical notation',
      blurb: 'The alphabet of maths: expressions and equations, the full symbol glossary, sets, function notation, and sigma/pi notation for sums and products.',
      glyph: '§',
      tags: ['notation', 'symbols', 'syntax', 'literacy'],
      children: [
        { slug: 'reading-math', title: 'The language of mathematics', blurb: 'Expressions versus equations, order of operations, and how to read a formula left to right without panicking.', minutes: 10, tags: ['pemdas', 'order of operations', 'expression', 'equation', 'variable'] },
        { slug: 'symbols', title: 'The symbol glossary', blurb: 'A reference table of every symbol used across this archive: Greek letters, Σ, ∫, ∇, ∈, ≈, →, and more, each with what it means and an example.', minutes: 14, tags: ['greek letters', 'sigma', 'glossary', 'reference', 'symbols'] },
        { slug: 'sets', title: 'Sets and set notation', blurb: 'What a set is, set-builder notation, the number systems ℕ ℤ ℚ ℝ, and the symbols ∈, ⊆, ∪, ∩.', minutes: 10, tags: ['set theory', 'set builder', 'real numbers', 'subset', 'union', 'intersection'] },
        { slug: 'functions', title: 'Function notation', blurb: 'What f(x) really means, domain and range, composition, inverses, and reading f: X → Y.', minutes: 11, tags: ['function', 'domain', 'range', 'composition', 'inverse function', 'mapping'] },
        { slug: 'sequences-series', title: 'Sequences, series, and Σ notation', blurb: 'Arithmetic and geometric sequences, summation (Σ) and product (Π) notation, and where they show up in compounding and loss functions.', minutes: 12, tags: ['sigma notation', 'summation', 'arithmetic sequence', 'geometric series', 'product notation'] },
      ],
    },
    {
      slug: 'algebra',
      title: 'Algebra',
      blurb: 'Exponents, logarithms, solving equations and inequalities, and working with polynomials: the toolkit behind most formulas on this site.',
      glyph: 'x',
      tags: ['algebra', 'equations'],
      children: [
        { slug: 'exponents-roots', title: 'Exponents and roots', blurb: 'The laws of exponents, negative and fractional powers, and why they work, derived from first principles.', minutes: 11, tags: ['exponent rules', 'powers', 'roots', 'radicals', 'fractional exponents'] },
        { slug: 'logarithms', title: 'Logarithms', blurb: 'What a logarithm asks, the log laws derived from exponent rules, natural log and e, and change of base.', minutes: 13, tags: ['logarithm', 'natural log', 'euler\'s number', 'log laws', 'change of base'] },
        { slug: 'equations-inequalities', title: 'Solving equations and inequalities', blurb: 'Balancing equations, the quadratic formula derived by completing the square, and the one rule that makes inequalities tricky.', minutes: 12, tags: ['quadratic formula', 'completing the square', 'inequalities', 'solving equations'] },
        { slug: 'polynomials', title: 'Polynomials and factoring', blurb: 'Naming polynomials, expanding and factoring, and the remainder and factor theorems.', minutes: 10, tags: ['polynomial', 'factoring', 'factor theorem', 'remainder theorem', 'roots'] },
      ],
    },
    {
      slug: 'functions',
      title: 'Functions and graphs',
      blurb: 'Reading a graph as a picture of a function: lines, parabolas, exponentials and logarithms, and how transformations shift and stretch them.',
      glyph: 'ƒ',
      tags: ['functions', 'graphs', 'coordinate geometry'],
      children: [
        { slug: 'linear-functions', title: 'Linear functions and lines', blurb: 'Slope, intercepts, slope-intercept and point-slope form, and parallel versus perpendicular lines.', minutes: 10, tags: ['slope', 'linear equation', 'y-intercept', 'point-slope form'] },
        { slug: 'quadratics', title: 'Quadratics and parabolas', blurb: 'The shape of ax² + bx + c, the vertex, the discriminant, and completing the square to find them.', minutes: 11, tags: ['quadratic function', 'parabola', 'vertex', 'discriminant'] },
        { slug: 'exponential-log-graphs', title: 'Exponential and logarithmic graphs', blurb: 'Why exponentials explode and logs crawl, asymptotes, and how the two graphs mirror each other.', minutes: 10, tags: ['exponential graph', 'logarithmic graph', 'asymptote', 'inverse functions'] },
        { slug: 'transformations', title: 'Transformations of graphs', blurb: 'Shifting, stretching, and reflecting any graph, and reading a new equation straight off a transformed shape.', minutes: 9, tags: ['graph transformation', 'translation', 'reflection', 'stretch'] },
      ],
    },
    {
      slug: 'calculus',
      title: 'Calculus',
      blurb: 'Limits, derivatives and integrals, built from the ground up with diagrams, leading to the chain rule and the gradient vector that power machine learning.',
      glyph: '∫',
      tags: ['calculus', 'derivatives', 'integrals', 'limits'],
      children: [
        { slug: 'limits', title: 'Limits and continuity', blurb: 'What "approaches" means, one-sided limits, when a limit fails to exist, and the formal epsilon-delta definition.', minutes: 13, tags: ['limit', 'epsilon-delta', 'continuity', 'one-sided limit'] },
        { slug: 'derivatives-rules', title: 'Derivatives: the rules', blurb: 'The power, product, quotient and chain rules, derived and drilled with worked examples.', minutes: 13, tags: ['derivative rules', 'power rule', 'product rule', 'quotient rule'] },
        { slug: 'derivatives-meaning', title: 'What a derivative means', blurb: 'The derivative as a slope and as a rate of change, with the secant-to-tangent diagram and real-world readings.', minutes: 11, tags: ['derivative', 'rate of change', 'tangent line', 'instantaneous rate'] },
        { slug: 'chain-rule', title: 'The chain rule, in depth', blurb: 'Composing functions, the chain rule proved and drilled, and why it is the engine behind backpropagation.', minutes: 11, tags: ['chain rule', 'composite function', 'backpropagation'] },
        { slug: 'integrals', title: 'Integrals: area and antiderivatives', blurb: 'Riemann sums, the antiderivative, and the fundamental theorem of calculus that ties them together.', minutes: 13, tags: ['integral', 'antiderivative', 'riemann sum', 'fundamental theorem of calculus'] },
        { slug: 'multivariable', title: 'Multivariable calculus: partial derivatives and the gradient', blurb: 'Derivatives with more than one variable, partial derivatives, and the gradient vector that gradient descent climbs down.', minutes: 12, tags: ['partial derivative', 'gradient vector', 'multivariable calculus'] },
      ],
    },
    {
      slug: 'linear-algebra',
      title: 'Linear algebra',
      blurb: 'Vectors, matrices and the equations behind them, built up with interactive diagrams, ending with eigenvalues and eigenvectors.',
      glyph: '▦',
      tags: ['linear algebra', 'vectors', 'matrices'],
      children: [
        { slug: 'vectors', title: 'Vectors', blurb: 'What a vector is, addition, scalar multiplication, magnitude, and the dot product.', minutes: 11, tags: ['vector', 'dot product', 'magnitude', 'scalar multiplication'] },
        { slug: 'matrices', title: 'Matrices and matrix multiplication', blurb: 'Matrices as tables of numbers and as transformations of space, and how to multiply them by hand.', minutes: 13, tags: ['matrix', 'matrix multiplication', 'linear transformation', 'determinant'] },
        { slug: 'systems-of-equations', title: 'Systems of linear equations', blurb: 'Solving several equations at once, Gaussian elimination, and when a system has no solution or infinitely many.', minutes: 11, tags: ['system of equations', 'gaussian elimination', 'row reduction'] },
        { slug: 'eigenvalues', title: 'Eigenvalues and eigenvectors', blurb: 'The directions a matrix does not rotate, how to find them by hand, and why PCA depends on them.', minutes: 12, tags: ['eigenvalue', 'eigenvector', 'characteristic equation', 'pca'] },
      ],
    },
    {
      slug: 'probability',
      title: 'Probability and statistics',
      blurb: 'Counting outcomes, the rules of probability, random variables and the distributions they follow, and how to read a confidence interval or a p-value.',
      glyph: '%',
      tags: ['probability', 'statistics'],
      children: [
        { slug: 'counting', title: 'Counting: permutations and combinations', blurb: 'The factorial, when order matters and when it does not, and the formulas for nPr and nCr.', minutes: 10, tags: ['permutation', 'combination', 'factorial', 'counting principle'] },
        { slug: 'probability-rules', title: 'The rules of probability', blurb: 'Sample spaces, the addition and multiplication rules, independence, and Bayes\' theorem derived.', minutes: 12, tags: ['probability rules', 'bayes theorem', 'independence', 'conditional probability'] },
        { slug: 'random-variables', title: 'Random variables, expectation and variance', blurb: 'Turning outcomes into numbers, expected value as a weighted average, and variance as a measure of spread.', minutes: 11, tags: ['random variable', 'expected value', 'variance', 'standard deviation'] },
        { slug: 'distributions', title: 'Common distributions', blurb: 'The binomial, Poisson and normal distributions, where each comes from, and why so many things end up bell-shaped.', minutes: 12, tags: ['binomial distribution', 'normal distribution', 'poisson distribution', 'central limit theorem'] },
        { slug: 'inference', title: 'Statistical inference', blurb: 'Sampling distributions, confidence intervals, and what a p-value actually says (and the ways it gets misread).', minutes: 13, tags: ['confidence interval', 'p-value', 'hypothesis testing', 'sampling distribution'] },
      ],
    },
    {
      slug: 'proofs',
      title: 'Logic and proof',
      blurb: 'The skills behind every theorem: formal logic, the standard proof techniques, the vocabulary of proof-speak, and a gallery of classic proofs worked through.',
      glyph: '∴',
      tags: ['proof', 'logic', 'theorem'],
      children: [
        { slug: 'logic-quantifiers', title: 'Mathematical logic and quantifiers', blurb: 'Statements, implications, converse and contrapositive, and the quantifiers ∀ and ∃.', minutes: 12, tags: ['logic', 'implication', 'quantifier', 'converse', 'contrapositive'] },
        { slug: 'proof-techniques', title: 'Proof techniques', blurb: 'Direct proof, proof by contradiction, proof by induction, and disproof by counterexample, each with a worked example.', minutes: 14, tags: ['proof by induction', 'proof by contradiction', 'direct proof', 'counterexample'] },
        { slug: 'reading-theorems', title: 'Reading theorems: the vocabulary of proof', blurb: 'Axiom, lemma, theorem, corollary, QED, "iff", and "WLOG": what mathematicians mean when they write a proof.', minutes: 9, tags: ['theorem', 'lemma', 'corollary', 'qed', 'iff', 'wlog'] },
        { slug: 'worked-proofs', title: 'A gallery of classic proofs', blurb: 'Five famous proofs, worked through step by step: the irrationality of √2, infinitely many primes, the sum of the first n integers, AM–GM, and the Pythagorean theorem.', minutes: 15, tags: ['pythagorean theorem', 'irrational numbers', 'infinitude of primes', 'am-gm inequality'] },
      ],
    },
  ],
}
