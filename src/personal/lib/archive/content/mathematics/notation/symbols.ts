import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A reference page, not a story: every symbol used across this archive, grouped by kind, each with what it means and a small example. Bookmark it. When a formula elsewhere stops you, the symbol you don\'t recognise is almost always here.',
  nutshell: [
    'Symbols are shorthand, invented one at a time over centuries, for ideas that would otherwise take a sentence to say.',
    'Greek letters are just extra "variable names": maths ran out of Latin letters, so it borrowed an alphabet.',
    'Subscripts (\\(x_1\\)) usually mean "which one in a list"; superscripts (\\(x^2\\)) usually mean "raised to a power"context tells you which.',
    'A hat (\\(\\hat{x}\\)) usually means "an estimate of x"; a bar (\\(\\bar{x}\\)) usually means "the average of x".',
  ],
  sections: [
    {
      id: 'arithmetic',
      title: 'Arithmetic and algebra',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: '\\(+,\\ -,\\ \\times\\ (\\text{or }\\cdot),\\ \\div\\ (\\text{or a fraction bar})\\)', def: 'The four basic operations. \\(\\cdot\\) and juxtaposition (writing letters side by side, like \\(ab\\)) both mean multiply.' },
            { term: '\\(x^n\\)', def: 'x to the power n: x multiplied by itself n times. \\(x^{-1} = 1/x\\); \\(x^{1/2} = \\sqrt{x}\\). See [exponents and roots](@mathematics/algebra/exponents-roots).' },
            { term: '\\(\\sqrt{x},\\ \\sqrt[n]{x}\\)', def: 'The square root (or nth root) of x: the number which, raised to that power, gives x back.' },
            { term: '\\(|x|\\)', def: 'Absolute value: the distance of x from 0, always non-negative. \\(|-5| = 5\\).' },
            { term: '\\(\\pm\\)', def: '"Plus or minus": shorthand for two answers at once, as in the quadratic formula.' },
            { term: '\\(\\approx\\)', def: '"Is approximately equal to": the values are close but not exactly equal, often because of rounding.' },
            { term: '\\(\\propto\\)', def: '"Is proportional to": \\(y \\propto x\\) means \\(y = kx\\) for some constant k.' },
            { term: '\\(\\equiv\\)', def: '"Is identically equal to" or "is defined as": true for every value, not just some, stronger than =.' },
            { term: '\\(\\ne,\\ <,\\ >,\\ \\le,\\ \\ge\\)', def: 'Not equal, less than, greater than, less-than-or-equal, greater-than-or-equal.' },
            { term: '\\(\\lfloor x \\rfloor,\\ \\lceil x \\rceil\\)', def: 'Floor (round down) and ceiling (round up) to the nearest integer.' },
            { term: '\\(n!\\)', def: 'n factorial: \\(n \\times (n-1) \\times \\cdots \\times 1\\). Counts arrangements; see [counting](@mathematics/probability/counting).' },
            { term: '\\(\\infty\\)', def: 'Infinity: not a number, but a concept for "without bound", used in limits and sums.' },
          ],
        },
      ],
    },
    {
      id: 'greek',
      title: 'Greek letters',
      blocks: [
        { t: 'p', text: 'Mathematicians ran out of Latin letters centuries ago and started borrowing the Greek alphabet. There is no universal rule for which Greek letter means what, it is convention, built up field by field, but a few uses are extremely common across this site:' },
        {
          t: 'terms',
          items: [
            { term: '\\(\\alpha,\\ \\beta\\)', def: 'Alpha, beta. In finance: a stock\'s excess return (α) and its sensitivity to the market (β), see [risk and return](@finance/foundations/risk-return). In statistics: significance level (α) and a regression\'s intercept/slope.' },
            { term: '\\(\\gamma\\)', def: 'Gamma. In an option\'s Greeks: how fast delta changes. In reinforcement learning: the discount factor on future rewards.' },
            { term: '\\(\\delta,\\ \\Delta\\)', def: 'Lowercase delta: a small change, or the distance tolerance in a limit\'s definition. Capital Delta: "the change in", as in \\(\\Delta y = y_2 - y_1\\); also an option\'s delta.' },
            { term: '\\(\\varepsilon\\ (\\text{or }\\epsilon)\\)', def: 'Epsilon: a tiny positive number, especially in the formal definition of a limit, or a small constant added to avoid dividing by zero.' },
            { term: '\\(\\theta\\)', def: 'Theta: commonly an angle, or (in machine learning) a stand-in for "all the model\'s parameters at once".' },
            { term: '\\(\\lambda\\)', def: 'Lambda: an eigenvalue, a regularisation strength, or a rate parameter (e.g. in the Poisson distribution).' },
            { term: '\\(\\mu\\)', def: 'Mu: the mean (average) of a distribution.' },
            { term: '\\(\\pi\\)', def: 'Pi: the ratio of a circle\'s circumference to its diameter (≈3.14159), or, unrelated, a policy in reinforcement learning, or a product (Π, capitalised).' },
            { term: '\\(\\rho\\)', def: 'Rho: correlation between two variables, or an option\'s sensitivity to interest rates.' },
            { term: '\\(\\sigma,\\ \\Sigma\\)', def: 'Lowercase sigma: standard deviation (how spread out values are). Capital Sigma: "sum of", see the sequences and series page.' },
            { term: '\\(\\phi\\ (\\text{or }\\varphi)\\)', def: 'Phi: the golden ratio (≈1.618), the normal distribution\'s density function, or a generic activation function in a neural network.' },
            { term: '\\(\\chi\\)', def: 'Chi, as in \\(\\chi^2\\) ("chi-squared"): a distribution used in certain statistical tests.' },
            { term: '\\(\\omega,\\ \\Omega\\)', def: 'Omega: angular frequency, or (capitalised) the entire sample space of possible outcomes in probability.' },
          ],
        },
      ],
    },
    {
      id: 'sets-logic',
      title: 'Sets and logic',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: '\\(\\in,\\ \\notin\\)', def: '"Is an element of" / "is not an element of" a set. \\(3 \\in \\mathbb{Z}\\): 3 is an integer.' },
            { term: '\\(\\subseteq,\\ \\subset\\)', def: '"Is a subset of" (possibly equal) / "is a proper subset of" (strictly smaller).' },
            { term: '\\(\\cup,\\ \\cap\\)', def: 'Union ("or": everything in either set) and intersection ("and": only what\'s in both).' },
            { term: '\\(\\emptyset\\)', def: 'The empty set: the set containing nothing.' },
            { term: '\\(\\mathbb{N},\\ \\mathbb{Z},\\ \\mathbb{Q},\\ \\mathbb{R}\\)', def: 'The natural numbers (0,1,2,…), integers (…,−1,0,1,…), rationals (fractions) and real numbers. See [sets](@mathematics/notation/sets).' },
            { term: '\\(\\forall\\)', def: '"For all" / "for every". \\(\\forall x \\in \\mathbb{R}, x^2 \\ge 0\\): every real number squared is non-negative.' },
            { term: '\\(\\exists\\)', def: '"There exists" at least one. \\(\\exists x: x^2 = 4\\): some x makes this true (here, x = 2 or −2).' },
            { term: '\\(\\neg,\\ \\land,\\ \\lor\\)', def: 'Logical not, and, or.' },
            { term: '\\(\\Rightarrow,\\ \\Leftrightarrow\\)', def: '"Implies" (if the first is true, the second must be) and "if and only if" (each implies the other). See [logic and quantifiers](@mathematics/proofs/logic-quantifiers).' },
            { term: '\\(\\therefore,\\ \\because\\)', def: '"Therefore" and "because": shorthand often used to link the steps of a proof.' },
            { term: '\\(\\blacksquare\\ (\\text{or QED})\\)', def: 'A small square (or the Latin "quod erat demonstrandum", "which was to be shown") marking the end of a proof.' },
          ],
        },
      ],
    },
    {
      id: 'functions-calc',
      title: 'Functions and calculus',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: '\\(f(x)\\)', def: '"f of x": the output of function f when given input x. See [function notation](@mathematics/notation/functions).' },
            { term: '\\(f: X \\to Y\\)', def: 'f is a function that takes inputs from set X and produces outputs in set Y.' },
            { term: '\\(f^{-1}(x)\\)', def: 'The inverse function: undoes what f does. Not the same as \\(1/f(x)\\).' },
            { term: '\\((f \\circ g)(x)\\)', def: 'Function composition: do g first, then feed the result into f. Read right to left.' },
            { term: '\\(\\lim_{x \\to a} f(x)\\)', def: 'The value f(x) approaches as x gets arbitrarily close to a. See [limits](@mathematics/calculus/limits).' },
            { term: '\\(f\'(x),\\ \\dfrac{dy}{dx}\\)', def: 'The derivative of f: its instantaneous rate of change, or slope. See [derivatives](@mathematics/calculus/derivatives-rules).' },
            { term: '\\(\\dfrac{\\partial f}{\\partial x}\\)', def: 'A partial derivative: the rate of change of f with respect to x alone, holding every other variable fixed. See [multivariable calculus](@mathematics/calculus/multivariable).' },
            { term: '\\(\\nabla f\\)', def: 'Nabla, "the gradient of f": the vector of all of f\'s partial derivatives, pointing in the direction of steepest increase.' },
            { term: '\\(\\int f(x)\\,dx\\)', def: 'The (indefinite) integral: an antiderivative of f. With limits, \\(\\int_a^b\\), it is the signed area under the curve from a to b. See [integrals](@mathematics/calculus/integrals).' },
            { term: '\\(e\\)', def: 'Euler\'s number, ≈2.71828: the base of natural growth and the natural logarithm. See [logarithms](@mathematics/algebra/logarithms).' },
            { term: '\\(\\ln(x),\\ \\log(x),\\ \\log_b(x)\\)', def: 'Natural log (base e), common log (usually base 10), and log base b: "what power of b gives x?"' },
          ],
        },
      ],
    },
    {
      id: 'sums-vectors',
      title: 'Sums, vectors and matrices',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: '\\(\\displaystyle\\sum_{i=1}^{n} x_i\\)', def: 'Sigma notation: add up \\(x_i\\) for every i from 1 to n. See [sequences and series](@mathematics/notation/sequences-series).' },
            { term: '\\(\\displaystyle\\prod_{i=1}^{n} x_i\\)', def: 'Pi notation: multiply \\(x_i\\) for every i from 1 to n.' },
            { term: '\\(\\mathbf{v},\\ \\vec{v}\\)', def: 'A vector: a bold or arrow-topped letter denoting a list of numbers with a size and a direction. See [vectors](@mathematics/linear-algebra/vectors).' },
            { term: '\\(\\lVert \\mathbf{v} \\rVert\\)', def: 'The magnitude (length) of vector v.' },
            { term: '\\(\\mathbf{a} \\cdot \\mathbf{b}\\)', def: 'The dot product of two vectors: a single number measuring how aligned they are.' },
            { term: '\\(A,\\ A^\\top,\\ A^{-1}\\)', def: 'A matrix (capital letter); its transpose (rows and columns swapped); its inverse (undoes A\'s transformation). See [matrices](@mathematics/linear-algebra/matrices).' },
            { term: '\\(\\det(A),\\ |A|\\)', def: 'The determinant of A: a single number measuring how much A scales area or volume (and whether it flips orientation).' },
            { term: '\\(I\\)', def: 'The identity matrix: the "do nothing" transformation, with 1s on the diagonal and 0s elsewhere.' },
          ],
        },
      ],
    },
    {
      id: 'stats',
      title: 'Probability and statistics',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: '\\(P(A)\\)', def: 'The probability of event A, a number from 0 (impossible) to 1 (certain). See [probability rules](@mathematics/probability/probability-rules).' },
            { term: '\\(P(A \\mid B)\\)', def: '"The probability of A given B": conditional probability, assuming B has already happened.' },
            { term: '\\(E[X]\\)', def: 'The expected value (mean) of random variable X: a probability-weighted average. See [random variables](@mathematics/probability/random-variables).' },
            { term: '\\(\\operatorname{Var}(X)\\)', def: 'The variance of X: the expected squared distance from the mean, measuring spread.' },
            { term: '\\(X \\sim N(\\mu, \\sigma^2)\\)', def: '"X is distributed as" a normal distribution with mean μ and variance σ². See [distributions](@mathematics/probability/distributions).' },
            { term: '\\(\\hat{p},\\ \\hat{y}\\)', def: 'A hat over a symbol usually means "an estimate of"\\(\\hat{p}\\) is an estimated probability, \\(\\hat{y}\\) a model\'s predicted output.' },
            { term: '\\(\\bar{x}\\)', def: 'A bar over a symbol usually means "the average of"\\(\\bar{x}\\) is the sample mean of x.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Reading subscripts and superscripts', text: 'A subscript (small text below the line, like \\(x_i\\)) almost always answers "which one?": the i-th item in a list. A superscript (small text above, like \\(x^2\\)) almost always means a power, unless it is in parentheses like \\(f^{(n)}\\), which usually means "the n-th derivative". Context, and the surrounding "where" legend on this site\'s formulas, always spells out which is meant.' },
      ],
    },
  ],
  sources: ['Cajori, F. (1928). *A History of Mathematical Notation*. Open Court.', 'Mazur, J. (2014). *Enlightening Symbols*. Princeton University Press.'],
  related: ['mathematics/notation/reading-math', 'mathematics/notation/sets', 'mathematics/notation/sequences-series'],
}

export default guide
