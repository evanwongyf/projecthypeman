import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When an agent searches its memory or a document store, it usually compares vectors: each passage and the query are turned into lists of numbers (embeddings) by a model, and passages whose vectors point in a similar direction to the query are retrieved. This guide covers the maths of similarity and of measuring whether retrieval found the right things.',
  nutshell: [
    '**Cosine similarity** measures the angle between two vectors: 1 means the same direction, 0 unrelated, −1 opposite.',
    'Retrieval returns the **top-k** most similar passages.',
    '**Precision@k** (share of retrieved items that are relevant) and **recall@k** (share of relevant items that were retrieved) measure quality.',
    '**Reciprocal rank fusion** merges rankings from different search methods (for example keyword and vector).',
  ],
  sections: [
    {
      id: 'cosine',
      title: 'Cosine similarity',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\cos\theta = \frac{\mathbf{a}\cdot\mathbf{b}}{\lVert\mathbf{a}\rVert\,\lVert\mathbf{b}\rVert} = \frac{\sum_i a_i b_i}{\sqrt{\sum_i a_i^2}\,\sqrt{\sum_i b_i^2}}`,
          caption: 'The cosine of the angle between vectors a and b.',
          plain: 'Multiply the two vectors entry by entry and add (the dot product). This is large when both are big in the same places. Then divide by the two lengths so that only the direction counts, not the size. The result is between −1 and 1.',
          where: [
            { sym: String.raw`\mathbf{a}, \mathbf{b}`, def: 'two embedding vectors (lists of numbers of the same length)' },
            { sym: String.raw`a_i, b_i`, def: 'their i-th entries' },
            { sym: String.raw`\theta`, def: 'the angle between them' },
          ],
          syntax: [
            { sym: String.raw`\mathbf{a}\cdot\mathbf{b}`, say: '“a dot b”: the dot product' },
            { sym: String.raw`\lVert\mathbf{a}\rVert`, say: '“the norm (length) of a”: square root of the sum of squares' },
            { sym: String.raw`\theta`, say: '“theta”' },
          ],
          worked: {
            title: 'Three-dimensional toy embeddings',
            steps: [
              'Query q = (1, 2, 0). Passage A = (2, 3, 1). Passage B = (0, 1, 3).',
              String.raw`\(q \cdot A = 1\cdot2 + 2\cdot3 + 0\cdot1 = 8\); \(\lVert q\rVert = \sqrt{1+4+0} = \sqrt5 \approx 2.236\); \(\lVert A\rVert = \sqrt{4+9+1} = \sqrt{14} \approx 3.742\).`,
              String.raw`\(\cos(q, A) = 8 / (2.236 \times 3.742) = 8 / 8.367 \approx 0.956\).`,
              String.raw`\(q \cdot B = 0 + 2 + 0 = 2\); \(\lVert B\rVert = \sqrt{0+1+9} = \sqrt{10} \approx 3.162\). \(\cos(q, B) = 2/(2.236 \times 3.162) = 2/7.071 \approx 0.283\).`,
            ],
            why: [
              'real embeddings have hundreds or thousands of entries; three keeps the arithmetic visible',
              'dot product and the two lengths',
              'divide to get the cosine',
              'the same for B',
            ],
            answer: 'A (0.956) is far closer to the query than B (0.283), so A is retrieved first.',
          },
        },
      ],
    },
    {
      id: 'metrics',
      title: 'Precision and recall at k',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{P@}k = \frac{|R_k \cap G|}{k}, \qquad \text{R@}k = \frac{|R_k \cap G|}{|G|}`,
          caption: 'Precision and recall of the top-k retrieved set Rₖ against the set G of truly relevant passages.',
          plain: 'Precision asks: of the k things I retrieved, how many were useful? Recall asks: of all the useful things that exist, how many did I find? For an agent, recall often matters more: a missing fact cannot be reasoned about, while an irrelevant one can be ignored (up to the context budget).',
          where: [
            { sym: String.raw`R_k`, def: 'the set of the top k retrieved passages' },
            { sym: 'G', def: 'the set of relevant (“gold”) passages' },
            { sym: String.raw`|X|`, def: 'the number of items in set X' },
          ],
          syntax: [
            { sym: String.raw`\cap`, say: '“intersect”: items in both sets' },
            { sym: String.raw`|\cdot|`, say: '“the size of”' },
          ],
          worked: {
            title: 'Five retrieved, four relevant exist',
            steps: [
              'G has 4 relevant passages. The top 5 retrieved contain 3 of them.',
              String.raw`\(\text{P@}5 = 3/5 = 0.6\).`,
              String.raw`\(\text{R@}5 = 3/4 = 0.75\).`,
            ],
            why: [
              'count the overlap',
              'three of five retrieved were useful',
              'three of four useful passages were found',
            ],
            answer: 'Precision 0.6, recall 0.75. Raising k to 10 might find the fourth passage (recall 1.0) at the cost of more irrelevant text in the context.',
          },
        },
        {
          t: 'math',
          tex: String.raw`\text{RRF}(d) = \sum_{m} \frac{1}{\kappa + \text{rank}_m(d)}`,
          caption: 'Reciprocal rank fusion (Cormack et al., 2009), usually with κ = 60.',
          plain: 'Hybrid search runs several retrievers (say keyword search and vector search) and needs one combined ranking. RRF gives each document points from each ranking: the higher it is ranked, the more points, with κ softening the gap between first and second place. Add the points and sort.',
          where: [
            { sym: 'd', def: 'a document' },
            { sym: 'm', def: 'each retrieval method' },
            { sym: String.raw`\text{rank}_m(d)`, def: 'the position of d in method m’s list (1 = top)' },
            { sym: String.raw`\kappa`, def: 'a smoothing constant, commonly 60' },
          ],
          syntax: [
            { sym: String.raw`\kappa`, say: '“kappa”' },
          ],
          worked: {
            title: 'Two documents, two rankers',
            steps: [
              'Document X: rank 1 in keyword search, rank 5 in vector search. Document Y: rank 3 in both.',
              String.raw`X: \(1/61 + 1/65 = 0.01639 + 0.01538 = 0.03178\).`,
              String.raw`Y: \(1/63 + 1/63 = 0.03175\).`,
            ],
            why: [
              'collect each document’s ranks',
              'add the reciprocal-rank points for X',
              'and for Y',
            ],
            answer: 'X edges ahead (0.03178 against 0.03175). RRF rewards documents that do well everywhere and is robust because it ignores the raw scores, which are not comparable across methods.',
          },
        },
      ],
    },
  ],
  sources: [
    'Manning, C. D., Raghavan, P., & Schütze, H. (2008). Introduction to Information Retrieval. Cambridge University Press.',
    'Cormack, G. V., Clarke, C. L. A., & Büttcher, S. (2009). Reciprocal rank fusion outperforms Condorcet and individual rank learning methods. SIGIR.',
    'Karpukhin, V. et al. (2020). Dense passage retrieval for open-domain question answering. EMNLP.',
  ],
  related: ['agentic-ai/theory/memory-and-context', 'ai/neural/embeddings', 'mathematics/start-here'],
}

export default guide
