import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Five short, famous proofs, chosen to show the techniques from this section in action on results worth knowing in their own right: two irrationality and infinity arguments by contradiction, an elegant pairing trick, an inequality used throughout finance, and the single most famous theorem in mathematics.',
  nutshell: [
    '\\(\\sqrt{2}\\) is irrational, proved by contradiction, assuming it IS a fraction and deriving an impossibility.',
    'There are infinitely many primes, Euclid\'s 2,300-year-old proof, also by contradiction.',
    '\\(1+2+\\cdots+100 = 5{,}050\\), the trick a young Gauss reportedly found in seconds, by pairing numbers.',
    'The AM–GM inequality, \\(\\frac{a+b}{2} \\ge \\sqrt{ab}\\), and the Pythagorean theorem, \\(a^2+b^2=c^2\\).',
  ],
  sections: [
    {
      id: 'sqrt2',
      title: 'The irrationality of √2',
      blocks: [
        {
          t: 'proof',
          claim: '\\(\\sqrt{2}\\) is irrational (cannot be written as a fraction of integers).',
          method: 'contradiction',
          steps: [
            { statement: 'Assume, for contradiction, that \\(\\sqrt2\\) IS rational', reason: 'The opposite of what we want to prove' },
            { statement: 'Then \\(\\sqrt2 = p/q\\) for some integers p, q with no common factor (fully reduced)', reason: 'The definition of a rational number, always reducible to lowest terms' },
            { statement: '\\(2 = p^2/q^2\\), so \\(p^2 = 2q^2\\)', reason: 'Square both sides and rearrange' },
            { statement: '\\(p^2\\) is even (it is 2 times an integer)', reason: 'Directly from \\(p^2=2q^2\\)' },
            { statement: 'So p itself must be even', reason: 'If p were odd, \\(p^2\\) would be odd too (see the [direct proof](@mathematics/proofs/proof-techniques) that an even number squared is even, odd numbers squared stay odd by the same logic)' },
            { statement: 'Write \\(p = 2k\\). Then \\(p^2 = 4k^2 = 2q^2\\), so \\(q^2 = 2k^2\\)', reason: 'Substitute p = 2k and simplify' },
            { statement: 'So \\(q^2\\) is even, meaning q is also even', reason: 'Same even-squared logic, applied to q' },
            { statement: 'But then both p and q are even, contradicting that p/q had no common factor', reason: 'p and q sharing a factor of 2 contradicts our starting assumption' },
            { statement: 'The assumption must be false: \\(\\sqrt2\\) is irrational', reason: 'Since assuming rationality led to an impossibility' },
          ],
          note: 'One of the oldest proofs in mathematics, traditionally attributed to the Pythagoreans around the 5th century BC, and, legend has it, deeply unwelcome to a school that believed all of nature was built from whole-number ratios.',
        },
      ],
    },
    {
      id: 'primes',
      title: 'There are infinitely many primes',
      blocks: [
        {
          t: 'proof',
          claim: 'There are infinitely many prime numbers.',
          method: 'contradiction',
          steps: [
            { statement: 'Assume, for contradiction, that there are only finitely many primes: \\(p_1, p_2, \\ldots, p_n\\)', reason: 'The opposite of what we want to prove, a complete, finite list' },
            { statement: 'Let \\(N = (p_1 \\times p_2 \\times \\cdots \\times p_n) + 1\\)', reason: 'Multiply every prime in the list together, then add 1' },
            { statement: 'N is either prime itself, or has a prime factor', reason: 'Every integer greater than 1 has at least one prime factor (it is either prime, or breaks down into primes)' },
            { statement: 'That prime factor cannot be any of \\(p_1,\\ldots,p_n\\)', reason: 'Dividing N by any \\(p_i\\) on the list leaves a remainder of exactly 1, by construction, so no listed prime divides N evenly' },
            { statement: 'So N has a prime factor NOT in the original list', reason: 'Directly from the previous step' },
            { statement: 'This contradicts the list being complete', reason: 'We assumed every prime was already in the list' },
            { statement: 'The assumption must be false: there are infinitely many primes', reason: 'No finite list can ever be complete' },
          ],
          note: 'Euclid\'s proof, from Book IX of the *Elements* (c. 300 BC). It doesn\'t directly claim N is prime, only that it must have SOME prime factor outside the original list, which is all the argument needs.',
        },
      ],
    },
    {
      id: 'gauss',
      title: 'Gauss\'s trick: summing 1 to 100',
      blocks: [
        {
          t: 'proof',
          claim: '\\(1+2+3+\\cdots+100 = 5{,}050\\)',
          method: 'direct',
          steps: [
            { statement: 'Write the sum forwards and backwards, aligned: \\(S = 1+2+\\cdots+100\\) and \\(S = 100+99+\\cdots+1\\)', reason: 'The same sum, written in reverse order' },
            { statement: 'Add the two versions, pairing matching positions: \\(2S = (1+100)+(2+99)+\\cdots+(100+1)\\)', reason: 'Add corresponding terms vertically' },
            { statement: 'Every one of the 100 pairs sums to exactly 101', reason: 'Each pair is (k) + (101−k) = 101, for every k from 1 to 100' },
            { statement: '\\(2S = 100 \\times 101 = 10{,}100\\)', reason: 'There are 100 pairs, each worth 101' },
            { statement: '\\(S = 5{,}050\\)', reason: 'Divide both sides by 2' },
          ],
          note: 'This is exactly where [the arithmetic series formula](@mathematics/notation/sequences-series), \\(S_n = \\tfrac{n}{2}(a_1+a_n)\\), comes from, reportedly discovered on the spot by a young Carl Friedrich Gauss around 1787, when a teacher assigned summing 1 to 100 expecting it to take the class a long while.',
        },
      ],
    },
    {
      id: 'amgm',
      title: 'The AM–GM inequality',
      blocks: [
        {
          t: 'proof',
          claim: 'For any two non-negative numbers a and b, \\(\\dfrac{a+b}{2} \\ge \\sqrt{ab}\\) (the arithmetic mean is never less than the geometric mean).',
          method: 'direct',
          given: ['\\((\\sqrt{a}-\\sqrt{b})^2 \\ge 0\\) for any real numbers (a square is never negative)'],
          steps: [
            { statement: '\\((\\sqrt{a}-\\sqrt{b})^2 \\ge 0\\)', reason: 'Any real number squared is non-negative' },
            { statement: '\\(a - 2\\sqrt{a}\\sqrt{b} + b \\ge 0\\)', reason: 'Expand the square' },
            { statement: '\\(a + b \\ge 2\\sqrt{ab}\\)', reason: 'Add \\(2\\sqrt{ab}\\) to both sides, and simplify \\(\\sqrt{a}\\sqrt{b}=\\sqrt{ab}\\)' },
            { statement: '\\(\\dfrac{a+b}{2} \\ge \\sqrt{ab}\\)', reason: 'Divide both sides by 2' },
          ],
          note: 'Equality holds exactly when \\(a=b\\) (the only way to make the starting square equal 0). This inequality underlies why diversification helps in [portfolio theory](@finance/foundations/risk-return): a mix is never worse, on average, than the extremes.',
        },
        {
          t: 'example',
          title: 'Checking it numerically',
          lines: [
            { label: '\\(a=4,\\ b=9\\)', text: 'arithmetic mean \\(=(4+9)/2=6.5\\); geometric mean \\(=\\sqrt{36}=6\\); indeed \\(6.5 \\ge 6\\)' },
            { label: '\\(a=b=5\\)', text: 'arithmetic mean = 5; geometric mean \\(=\\sqrt{25}=5\\): equal, as predicted when \\(a=b\\)' },
          ],
        },
      ],
    },
    {
      id: 'pythagoras',
      title: 'The Pythagorean theorem',
      blocks: [
        {
          t: 'proof',
          claim: 'For a right triangle with legs a and b and hypotenuse c, \\(a^2+b^2=c^2\\).',
          method: 'direct',
          given: ['Four identical copies of a right triangle with legs a, b and hypotenuse c, arranged inside a large square of side \\((a+b)\\), forming a smaller tilted square of side c in the middle'],
          steps: [
            { statement: 'The large square has side \\((a+b)\\), so its total area is \\((a+b)^2\\)', reason: 'Area of a square = side²' },
            { statement: 'The large square\'s area also equals the 4 triangles plus the inner tilted square: \\(4\\left(\\tfrac12 ab\\right) + c^2\\)', reason: 'Each right-triangle has area \\(\\tfrac12 \\times\\) base \\(\\times\\) height \\(= \\tfrac12 ab\\); the inner square has side c, so area \\(c^2\\)' },
            { statement: '\\((a+b)^2 = 2ab + c^2\\)', reason: 'Simplify \\(4 \\times \\tfrac12 ab = 2ab\\)' },
            { statement: '\\(a^2 + 2ab + b^2 = 2ab + c^2\\)', reason: 'Expand the left side, \\((a+b)^2 = a^2+2ab+b^2\\)' },
            { statement: '\\(a^2 + b^2 = c^2\\)', reason: 'Subtract 2ab from both sides' },
          ],
          note: 'One of hundreds of known proofs, this rearrangement version requires only that the same large square\'s area can be computed two different ways, which must give the same answer either way.',
        },
        {
          t: 'cards',
          items: [
            { title: 'The construction, pictured in words', body: 'A big square of side (a+b). Along each edge, mark a point splitting it into a length-a piece and a length-b piece, then connect these points around the square, this traces a smaller, tilted square of side c inside, and cuts off 4 identical right triangles (legs a and b) in the corners.' },
            { title: 'Try it with a right triangle: 3, 4, 5', body: '\\(3^2+4^2 = 9+16 = 25 = 5^2\\) ✓, the most famous whole-number example, used to square corners on construction sites for millennia before it had a name.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Known long before Pythagoras', text: 'Babylonian clay tablets dating to roughly 1800 BC (over a thousand years before Pythagoras) already list triples of numbers satisfying \\(a^2+b^2=c^2\\), suggesting the relationship was known and used practically well before anyone proved it in the general, abstract form attributed to the Pythagorean school around the 6th century BC.' },
      ],
    },
  ],
  sources: ['Euclid. (c. 300 BC). *Elements*, Book IX, Proposition 20.', 'Heath, T. L. (1908). *The Thirteen Books of Euclid\'s Elements* (trans.). Cambridge University Press.', 'Maor, E. (2007). *The Pythagorean Theorem: A 4,000-Year History*. Princeton University Press.'],
  related: ['mathematics/proofs/proof-techniques', 'mathematics/notation/sequences-series', 'finance/foundations/risk-return'],
}

export default guide
