import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A set is simply a well-defined collection of things, with no regard for order or repeats. It sounds almost too simple to need its own notation, but set language turns up everywhere: in "a share is part of a larger set of ownership claims", in defining exactly which numbers a function accepts, and in the sample spaces of probability.',
  nutshell: [
    'A set is a collection of distinct objects, written in curly braces: \\(\\{2, 4, 6\\}\\).',
    '\\(\\in\\) means "is an element of"; \\(\\subseteq\\) means "is a subset of".',
    '\\(\\cup\\) ("union") combines sets with "or"; \\(\\cap\\) ("intersection") combines them with "and".',
    'The real-number systems nest inside each other: \\(\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}\\).',
  ],
  sections: [
    {
      id: 'basics',
      title: 'What a set is',
      blocks: [
        {
          t: 'math',
          tex: String.raw`A = \{2, 4, 6, 8\}`,
          caption: 'A set, named A, listed explicitly. Order doesn\'t matter and repeats collapse: {4, 2, 6, 8, 2} is the exact same set as A.',
        },
        {
          t: 'terms',
          items: [
            { term: '\\(a \\in A\\)', def: '"a is an element of A": a is one of the things in the set.' },
            { term: '\\(a \\notin A\\)', def: '"a is not an element of A".' },
            { term: '\\(|A|\\)', def: 'The cardinality (size) of A: how many elements it has. \\(|A| = 4\\) above.' },
            { term: '\\(\\emptyset\\) or \\(\\{\\}\\)', def: 'The empty set: contains nothing. \\(|\\emptyset| = 0\\).' },
          ],
        },
        {
          t: 'example',
          title: 'Reading set-builder notation',
          lines: [
            { label: 'Notation', text: '\\(\\{x \\mid x \\in \\mathbb{Z},\\ x > 0,\\ x < 10\\}\\)' },
            { label: 'Read aloud', text: '"the set of all x, such that x is an integer, x is greater than 0, and x is less than 10"' },
            { label: 'Equals', text: '\\(\\{1, 2, 3, 4, 5, 6, 7, 8, 9\\}\\): a rule that generates the same set as listing it out' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Reading the vertical bar', text: 'Inside set-builder notation, the vertical bar \\(\\mid\\) (sometimes a colon, \\(:\\)) is read as "such that". It separates "what kind of thing goes in" from "what rule it must satisfy".' },
      ],
    },
    {
      id: 'operations',
      title: 'Combining sets',
      blocks: [
        {
          t: 'math',
          tex: String.raw`A \cup B = \{x \mid x \in A \text{ or } x \in B\} \qquad A \cap B = \{x \mid x \in A \text{ and } x \in B\}`,
          caption: 'Union (everything in either set) and intersection (only what\'s in both).',
        },
        {
          t: 'example',
          title: 'Two sets',
          lines: [
            { label: 'Given', text: '\\(A = \\{1, 2, 3, 4\\}\\), \\(B = \\{3, 4, 5, 6\\}\\)' },
            { label: 'Union', text: '\\(A \\cup B = \\{1, 2, 3, 4, 5, 6\\}\\)' },
            { label: 'Intersection', text: '\\(A \\cap B = \\{3, 4\\}\\)' },
            { label: 'Difference', text: '\\(A \\setminus B = \\{1, 2\\}\\): everything in A that is not in B' },
          ],
        },
        {
          t: 'terms',
          items: [
            { term: '\\(B \\subseteq A\\)', def: '"B is a subset of A": every element of B is also in A. (Every set is a subset of itself.)' },
            { term: '\\(B \\subset A\\)', def: '"B is a proper subset of A": a subset, but not equal to A, A has at least one element B doesn\'t.' },
            { term: '\\(A^c\\) (or \\(A\'\\))', def: 'The complement of A: everything (within whatever larger "universe" set is under discussion) that is not in A.' },
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'A picture that stuck',
          text: 'John Venn popularised the overlapping-circles diagram in an 1880 paper, though versions existed earlier. The diagrams make ∪ and ∩ visually obvious: the union is everything the circles cover; the intersection is only where they overlap.',
        },
      ],
    },
    {
      id: 'numbers',
      title: 'The number systems',
      blocks: [
        {
          t: 'levels',
          caption: 'Each system contains the ones below it: every natural number is an integer, every integer is rational, every rational is real.',
          items: [
            { name: '\\(\\mathbb{R}\\): real numbers', body: 'Every point on the number line, including irrationals like π and √2 that cannot be written as a fraction.' },
            { name: '\\(\\mathbb{Q}\\): rational numbers', body: 'Anything writable as a fraction of integers, \\(p/q\\) with \\(q \\ne 0\\): includes 0.5, −3, and every terminating or repeating decimal.' },
            { name: '\\(\\mathbb{Z}\\): integers', body: 'Whole numbers, positive, negative, and zero: …, −2, −1, 0, 1, 2, …' },
            { name: '\\(\\mathbb{N}\\): natural numbers', body: 'The counting numbers: 0, 1, 2, 3, … (some textbooks start at 1 instead of 0, always check the convention in use).' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}`,
          caption: 'Read as a chain: every natural number is an integer is a rational is a real number, but not the reverse (π is real but not rational).',
        },
        {
          t: 'example',
          title: 'Which system does each number belong to?',
          lines: [
            { text: '**7**: natural, integer, rational, real' },
            { text: '**−3**: integer, rational, real (not natural)' },
            { text: '**0.75**: rational, real (not an integer, since it has a fractional part)' },
            { text: '**√2 ≈ 1.41421…**: real only, it can be proved irrational; see [the worked proofs page](@mathematics/proofs/worked-proofs)' },
          ],
        },
        { t: 'callout', tone: 'myth', title: 'Why ℚ for "rational"?', text: 'It looks like it should stand for "quotient"and in spirit it does, since a rational number is a quotient (ratio) of two integers, but the letter Q is specifically chosen to avoid clashing with R (real) and to echo "quotient field", the formal algebraic term.' },
      ],
    },
  ],
  sources: ['Halmos, P. R. (1960). *Naive Set Theory*. Van Nostrand.', 'Venn, J. (1880). On the diagrammatic and mechanical representation of propositions and reasonings. *Philosophical Magazine*, 10(59), 1–18.'],
  related: ['mathematics/notation/symbols', 'mathematics/notation/functions', 'mathematics/probability/probability-rules'],
}

export default guide
