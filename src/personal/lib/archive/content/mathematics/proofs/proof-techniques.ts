import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A proof technique is a reusable strategy for establishing that a mathematical statement is true, forever, for every case it covers, not just "true in every example tried so far". There are four standard moves, and almost every proof in mathematics is built from one of them, or a combination.',
  nutshell: [
    '**Direct proof**: start from what is given, and reason forward, step by step, to the conclusion.',
    '**Proof by contradiction**: assume the opposite of what you want to prove, then show that assumption leads to something impossible.',
    '**Proof by induction**: prove a statement for a base case, then prove that each case implies the next, like an infinite chain of dominoes.',
    '**Disproof by counterexample**: to show a universal claim is false, exhibit just one case where it fails.',
  ],
  sections: [
    {
      id: 'direct',
      title: 'Direct proof',
      blocks: [
        { t: 'p', text: 'The most natural strategy: start from the given facts (and known, already-proven theorems), and reason forward, one valid step at a time, until you land on the conclusion. Most of the proofs already on this shelf, the quadratic formula, the factor theorem, Bayes\' theorem, are direct proofs.' },
        {
          t: 'proof',
          claim: 'If n is an even integer, then \\(n^2\\) is also even.',
          method: 'direct',
          given: ['n is even'],
          steps: [
            { statement: 'n is even, so \\(n = 2k\\) for some integer k', reason: 'The definition of "even"' },
            { statement: '\\(n^2 = (2k)^2 = 4k^2\\)', reason: 'Square both sides' },
            { statement: '\\(n^2 = 2(2k^2)\\)', reason: 'Factor out a 2' },
            { statement: '\\(2k^2\\) is an integer, so \\(n^2\\) is 2 times an integer: even', reason: 'This matches the definition of "even" exactly' },
          ],
        },
      ],
    },
    {
      id: 'contradiction',
      title: 'Proof by contradiction',
      blocks: [
        { t: 'p', text: 'Assume the statement you want to prove is FALSE, and show that this assumption, combined with things you already know to be true, leads to an impossible or self-contradictory conclusion. Since the assumption led somewhere impossible, the assumption itself must have been wrong, so the original statement must be true after all.' },
        {
          t: 'proof',
          claim: 'There is no largest even integer.',
          method: 'contradiction',
          steps: [
            { statement: 'Assume, for contradiction, that there IS a largest even integer, call it N', reason: 'The opposite of what we want to prove' },
            { statement: 'Since N is even, \\(N+2\\) is also even (an even number plus 2 stays even)', reason: 'Basic arithmetic fact' },
            { statement: '\\(N + 2 > N\\)', reason: 'Adding a positive number always increases a number' },
            { statement: 'So \\(N+2\\) is an even integer larger than N, contradicting that N was the largest', reason: 'Direct contradiction of our assumption' },
            { statement: 'The assumption must be false: no largest even integer exists', reason: 'Since assuming the opposite led to an impossibility' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'When to reach for contradiction', text: 'Contradiction shines whenever directly proving a statement is awkward, but its *opposite* leads somewhere clearly impossible, especially for "there is no largest X" or "there is no smallest X" claims, and for irrationality proofs, as in the famous √2 proof on the [worked proofs](@mathematics/proofs/worked-proofs) page.' },
      ],
    },
    {
      id: 'induction',
      title: 'Proof by induction',
      blocks: [
        { t: 'p', text: 'Used to prove a statement for every natural number at once, induction works like an infinite line of dominoes: show the first domino falls (the base case), then show that *any* falling domino knocks over the next one (the inductive step), and the whole infinite line falls, one after another, forever.' },
        {
          t: 'flow',
          title: 'The domino picture',
          nodes: [
            { label: 'Base case', sub: 'prove the statement for n = 1 (or 0)', tone: 'process' },
            { label: 'Inductive hypothesis', sub: 'assume it\'s true for some n = k', tone: 'human' },
            { label: 'Inductive step', sub: 'prove it must then be true for n = k + 1', tone: 'model' },
            { label: 'Conclusion: true for ALL n', tone: 'output' },
          ],
        },
        {
          t: 'proof',
          claim: 'For every positive integer n, \\(1+2+\\cdots+n = \\dfrac{n(n+1)}{2}\\).',
          method: 'induction',
          steps: [
            { statement: 'Base case (n=1): left side = 1; right side = \\(\\frac{1(2)}{2}=1\\). Equal, so the base case holds', reason: 'Direct check of the smallest case' },
            { statement: 'Inductive hypothesis: assume \\(1+2+\\cdots+k = \\dfrac{k(k+1)}{2}\\) is true for some particular k', reason: 'Assume one domino has already fallen, we don\'t yet know it\'s true in general' },
            { statement: 'Consider n = k+1: \\(1+2+\\cdots+k+(k+1) = \\dfrac{k(k+1)}{2} + (k+1)\\)', reason: 'Add the next term, (k+1), to both sides of the inductive hypothesis' },
            { statement: '\\(= \\dfrac{k(k+1) + 2(k+1)}{2} = \\dfrac{(k+1)(k+2)}{2}\\)', reason: 'Factor out (k+1) and simplify' },
            { statement: 'This is exactly the formula with n replaced by k+1', reason: 'Matches the claimed pattern for the next case' },
            { statement: 'So if it holds for k, it holds for k+1, and since it holds for n=1, it holds for every positive integer n', reason: 'The domino chain: base case plus "each domino knocks over the next" together give every domino falling' },
          ],
        },
      ],
    },
    {
      id: 'counterexample',
      title: 'Disproof by counterexample',
      blocks: [
        { t: 'p', text: 'To disprove a "for all" claim, you don\'t need an elaborate argument, you only need to find a single case where it fails. One counterexample is as decisive as a thousand would be.' },
        {
          t: 'proof',
          claim: 'The statement "every odd number is prime" is false.',
          method: 'counterexample',
          steps: [
            { statement: 'Consider n = 9', reason: 'Pick a candidate odd number to test' },
            { statement: '9 is odd (it is \\(2(4)+1\\))', reason: 'Confirm it satisfies the hypothesis' },
            { statement: '\\(9 = 3 \\times 3\\), so 9 has a factor other than 1 and itself', reason: 'By the definition of prime, this means 9 is NOT prime' },
            { statement: 'So 9 is an odd number that is not prime: a single counterexample', reason: 'This alone disproves the universal claim' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Counterexamples and the quantifier rules', text: 'This is exactly the ∀/∃ negation rule from [logic and quantifiers](@mathematics/proofs/logic-quantifiers): disproving \\(\\forall n,\\ P(n)\\) is the same task as proving \\(\\exists n,\\ \\neg P(n)\\), and an existence claim only ever needs one example.' },
      ],
    },
  ],
  sources: ['Velleman, D. J. (2006). *How to Prove It* (2nd ed.). Cambridge University Press.', 'Polya, G. (1945). *How to Solve It*. Princeton University Press.'],
  related: ['mathematics/proofs/logic-quantifiers', 'mathematics/proofs/worked-proofs', 'mathematics/proofs/reading-theorems'],
}

export default guide
