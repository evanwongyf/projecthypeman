import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every proof is built from a small set of logical moves: statements that are true or false, ways to combine them, and ways to say "this holds for everything" or "something like this exists". Learn this vocabulary and the structure of any theorem, however intimidating its symbols, becomes visible underneath.',
  nutshell: [
    'A **statement** is a sentence that is definitely true or definitely false (never both, never neither).',
    '\\(P \\Rightarrow Q\\) ("P implies Q") does not claim P is true, only that *if* P is true, Q must be too.',
    'The **contrapositive** of \\(P\\Rightarrow Q\\) is \\(\\neg Q \\Rightarrow \\neg P\\), and is always logically equivalent to it, the **converse**, \\(Q\\Rightarrow P\\), generally is not.',
    '\\(\\forall\\) ("for all") and \\(\\exists\\) ("there exists") are quantifiers: they say how many things a statement applies to.',
  ],
  sections: [
    {
      id: 'statements',
      title: 'Statements and implications',
      blocks: [
        {
          t: 'table',
          head: ['Example sentence', 'A statement?', 'Why'],
          rows: [
            ['"7 is a prime number."', 'Yes', 'Definitely true'],
            ['"2 + 2 = 5."', 'Yes', 'Definitely false, still a statement, just a false one'],
            ['"x + 3 = 7."', 'Not yet', 'True or false depends on x, this is a predicate, not a statement, until x is fixed'],
            ['"What time is it?"', 'No', 'Questions have no truth value'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`P \Rightarrow Q`,
          caption: '"P implies Q", or "if P then Q". This is a claim about the *relationship* between P and Q, it says nothing about whether P itself is actually true. "If it is raining, the ground is wet" is a true implication even on a sunny day, when P (it is raining) is simply false and the whole statement is true automatically.',
        },
        {
          t: 'table',
          head: ['P', 'Q', '\\(P \\Rightarrow Q\\)'],
          rows: [
            ['True', 'True', 'True'],
            ['True', 'False', 'False, the only way an implication can be false'],
            ['False', 'True', 'True (vacuously)'],
            ['False', 'False', 'True (vacuously)'],
          ],
          caption: 'The truth table for implication. The surprising rows are the last two: a false hypothesis makes the whole implication automatically true, however unrelated Q is, this is why "if pigs can fly, then 1=1" is considered a true statement.',
        },
      ],
    },
    {
      id: 'converse-contra',
      title: 'Converse, inverse and contrapositive',
      blocks: [
        {
          t: 'table',
          head: ['Name', 'Form', 'Example (starting from "if it rains, the ground is wet")'],
          rows: [
            ['Original', '\\(P \\Rightarrow Q\\)', 'If it rains, the ground is wet.'],
            ['Converse', '\\(Q \\Rightarrow P\\)', 'If the ground is wet, it rained. (Not necessarily true, a sprinkler could explain it!)'],
            ['Inverse', '\\(\\neg P \\Rightarrow \\neg Q\\)', 'If it doesn\'t rain, the ground isn\'t wet. (Also not necessarily true, same reason)'],
            ['Contrapositive', '\\(\\neg Q \\Rightarrow \\neg P\\)', 'If the ground isn\'t wet, it didn\'t rain. (Always exactly as true as the original!)'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'The converse error', text: 'Assuming \\(Q \\Rightarrow P\\) just because \\(P \\Rightarrow Q\\) is true is one of the most common logical mistakes, in maths and in everyday reasoning ("all geniuses are eccentric, so this eccentric person must be a genius"false). Only the contrapositive is guaranteed to share the original\'s truth value.' },
        {
          t: 'proof',
          claim: 'The contrapositive, \\(\\neg Q \\Rightarrow \\neg P\\), is logically equivalent to the original, \\(P\\Rightarrow Q\\).',
          method: 'direct',
          steps: [
            { statement: 'If P is false, \\(P\\Rightarrow Q\\) is automatically true (vacuously), regardless of Q', reason: 'From the truth table above' },
            { statement: 'If P is false, \\(\\neg P\\) is true, so \\(\\neg Q \\Rightarrow \\neg P\\) is also automatically true (vacuously), regardless of Q', reason: 'The same vacuous-truth logic applied to the contrapositive' },
            { statement: 'If P is true: \\(P\\Rightarrow Q\\) is true exactly when Q is true (from the truth table)', reason: 'Reading off the first two rows of the table' },
            { statement: 'If P is true, \\(\\neg P\\) is false, so \\(\\neg Q \\Rightarrow \\neg P\\) is true exactly when \\(\\neg Q\\) is false, i.e. exactly when Q is true', reason: 'Applying the same truth-table logic to the contrapositive, using \\(\\neg P\\) false' },
            { statement: 'In every case, \\(P\\Rightarrow Q\\) and \\(\\neg Q\\Rightarrow\\neg P\\) have the same truth value', reason: 'Both cases above agree' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Why this matters for proofs', text: 'Sometimes proving \\(\\neg Q \\Rightarrow \\neg P\\) directly is far easier than proving \\(P \\Rightarrow Q\\) directly, and because they are logically equivalent, proving either one proves both. This is the whole idea behind [proof by contrapositive](@mathematics/proofs/proof-techniques).' },
      ],
    },
    {
      id: 'quantifiers',
      title: 'Quantifiers: ∀ and ∃',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: '\\(\\forall x,\\ P(x)\\)', def: '"For all x, P(x) is true"a universal claim. To disprove it, you only need ONE counterexample.' },
            { term: '\\(\\exists x,\\ P(x)\\)', def: '"There exists at least one x for which P(x) is true"an existence claim. To prove it, you only need to find ONE example.' },
            { term: '\\(\\neg(\\forall x, P(x)) \\equiv \\exists x, \\neg P(x)\\)', def: '"Not all x satisfy P" means exactly "some x fails P"negating a ∀ flips it to ∃ (and vice versa).' },
          ],
        },
        {
          t: 'example',
          title: 'Disproving a universal claim',
          lines: [
            { label: 'Claim', text: '\\(\\forall n \\in \\mathbb{N},\\ n^2 + n + 41\\) is prime' },
            { label: 'True for a while', text: 'n = 0, 1, 2, …, 39 all give primes, a famous near-miss formula' },
            { label: 'One counterexample is enough', text: 'at \\(n=40\\): \\(40^2+40+41 = 1681 = 41^2\\), not prime' },
            { label: 'Conclusion', text: 'the universal claim is false, disproved by a single failing case, however many cases worked before it' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'A trillion correct examples aren\'t a proof', text: 'The claim \\(\\forall n,\\ n^2+n+41\\) is prime held for 40 straight values of n, yet was always false in general. In mathematics, no number of confirming examples, a trillion, even, ever substitutes for a proof that holds for every case, because the very next untested case could be the counterexample.' },
      ],
    },
  ],
  sources: ['Velleman, D. J. (2006). *How to Prove It* (2nd ed.). Cambridge University Press.'],
  related: ['mathematics/proofs/proof-techniques', 'mathematics/notation/sets', 'mathematics/proofs/reading-theorems'],
}

export default guide
