import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Mathematical writing has its own small vocabulary, used precisely and consistently across centuries and languages. None of these words are hard once named, the goal of this page is simply to make sure none of them can surprise you again.',
  nutshell: [
    'An **axiom** is assumed without proof; a **theorem** is proved from axioms and earlier theorems; a **lemma** is a smaller stepping-stone theorem; a **corollary** follows quickly from a theorem already proved.',
    '\\(\\blacksquare\\) or "QED" marks the end of a proof"quod erat demonstrandum", Latin for "which was to be shown".',
    '"**iff**" means "if and only if": both directions of an implication hold at once.',
    '"**WLOG**" ("without loss of generality") flags a simplifying assumption that doesn\'t actually narrow the proof\'s scope.',
  ],
  sections: [
    {
      id: 'hierarchy',
      title: 'The hierarchy of mathematical statements',
      blocks: [
        {
          t: 'levels',
          caption: 'Each level is built on the ones below it.',
          items: [
            { name: 'Theorem', body: 'A significant, proven result, the main attraction. "Pythagoras\' theorem", "the fundamental theorem of calculus".' },
            { name: 'Proposition', body: 'A proven result, usually considered a bit less important or less central than a "theorem"the line between the two is more about convention than any hard rule.' },
            { name: 'Lemma', body: 'A smaller result, proved mainly as a stepping stone towards a bigger theorem, like a sub-goal on the way to the main one.' },
            { name: 'Corollary', body: 'A result that follows quickly and easily once a theorem is already established, often just a few lines of extra reasoning.' },
            { name: 'Axiom (or postulate)', body: 'A starting assumption, accepted without proof, that everything else is built from, the ground floor, with nothing beneath it.' },
          ],
        },
        {
          t: 'example',
          title: 'Seeing the hierarchy in action',
          lines: [
            { label: 'Axiom', text: '(from geometry) "Through any two points, exactly one straight line can be drawn."' },
            { label: 'Lemma', text: 'A small fact proved along the way, used only to help prove the next, bigger result.' },
            { label: 'Theorem', text: 'Pythagoras\' theorem: \\(a^2+b^2=c^2\\) for a right triangle, proved on the [worked proofs](@mathematics/proofs/worked-proofs) page.' },
            { label: 'Corollary', text: '"So the diagonal of a unit square is \\(\\sqrt2\\)"follows from Pythagoras in one line, with nothing new to prove from scratch.' },
          ],
        },
      ],
    },
    {
      id: 'vocab',
      title: 'Common phrases, decoded',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'QED (or \\(\\blacksquare\\))', def: '"Quod erat demonstrandum"Latin for "which was to be shown/demonstrated". Marks the very end of a proof, like a full stop that says "and that\'s exactly what we set out to prove".' },
            { term: 'iff', def: '"If and only if": shorthand for \\(P \\Leftrightarrow Q\\), P implies Q, AND Q implies P. Both directions must be proved separately (unless one step is reversible).' },
            { term: 'WLOG', def: '"Without loss of generality": signals a simplifying assumption that doesn\'t actually restrict the proof, e.g. "WLOG, assume \\(a \\le b\\)" in a proof about two numbers, since the argument would be identical (just with the labels swapped) if instead \\(b < a\\).' },
            { term: '∃!', def: '"There exists exactly one"a stronger claim than plain ∃, asserting both existence AND uniqueness.' },
            { term: 'Suppose / Let', def: 'Introduces an assumption or a new piece of notation for the rest of the argument"Let n be an even integer" fixes what n means for everything that follows.' },
            { term: 'Trivially / Clearly / It is easy to see that', def: 'Flags a step the author considers obvious enough to skip, a famous source of frustration, since "trivial" is relative to the reader\'s own background.' },
            { term: 'Converse / Contrapositive', def: 'See [logic and quantifiers](@mathematics/proofs/logic-quantifiers) for the precise, and very different, meanings of each.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Where "iff" came from', text: 'The word "iff" was popularised by the mathematician Paul Halmos in the mid-20th century as a space-saving shorthand for "if and only if", and he is often credited (possibly apocryphally) with inventing the small tombstone symbol \\(\\blacksquare\\) to mark the end of a proof, as a typographic alternative to writing out "QED".' },
      ],
    },
    {
      id: 'reading',
      title: 'How to actually read a theorem',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Read the statement alone first', body: 'Before looking at the proof, make sure you understand exactly what is being claimed, what are the given conditions ("if…"), and what is being concluded ("then…")?' },
            { title: 'Try a concrete example', body: 'Pick specific numbers or a specific case and check the theorem holds for it. This builds intuition for *why* it might be true before reading the formal reasoning.' },
            { title: 'Identify the proof\'s strategy', body: 'Is it direct, contradiction, induction? Knowing the shape of the argument (see [proof techniques](@mathematics/proofs/proof-techniques)) makes each individual step easier to follow.' },
            { title: 'Check each step follows from the last', body: 'A rigorous proof should let you verify each line using only earlier lines and already-known facts, nothing should require taking it on faith.' },
            { title: 'Ask what would break without each hypothesis', body: 'Try removing a given condition and see if you can find a counterexample, this usually reveals exactly why that condition was needed in the first place.' },
          ],
        },
      ],
    },
  ],
  sources: ['Halmos, P. R. (1985). *I Want to Be a Mathematician*. Springer.', 'Velleman, D. J. (2006). *How to Prove It* (2nd ed.). Cambridge University Press.'],
  related: ['mathematics/proofs/proof-techniques', 'mathematics/proofs/worked-proofs', 'mathematics/proofs/logic-quantifiers'],
}

export default guide
