import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Good maths teaching builds understanding and fluency together. Learners need to know why methods work and to be able to use them quickly and accurately. Representations, careful sequencing and attention to misconceptions do much of the work.',
  nutshell: [
    '**Conceptual understanding** and **procedural fluency** support each other; teach both.',
    'Move between **concrete, pictorial and abstract** representations, and link them explicitly.',
    'Plan for the **misconceptions** learners are likely to have.',
    'Use **worked examples**, **interleaved practice** and **retrieval** to make learning stick.',
  ],
  sections: [
    {
      id: 'understanding',
      title: 'Understanding and fluency',
      blocks: [
        {
          t: 'p',
          text: 'Research suggests conceptual and procedural knowledge develop in a two-way relationship: understanding helps learners choose and adapt procedures, and practising procedures deepens understanding (Rittle-Johnson, Schneider & Star, 2015). The old argument of "understanding versus drill" is a false choice.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Fluency', body: 'Quick recall of number facts and efficient methods, so working memory is free for problem solving.' },
            { title: 'Understanding', body: 'Knowing why a method works, how ideas connect, and when to use which approach.' },
            { title: 'Reasoning', body: 'Explaining, justifying, and generalising: "Will this always work? How do you know?"' },
            { title: 'Problem solving', body: 'Applying knowledge to unfamiliar situations. See [solving problems](@thinking/problem-solving).' },
          ],
        },
      ],
    },
    {
      id: 'representations',
      title: 'Representations',
      blocks: [
        {
          t: 'p',
          text: 'Manipulatives and diagrams make abstract ideas concrete, but only when learners see how the representation connects to the symbols. The Education Endowment Foundation recommends manipulatives and representations as temporary supports, linked explicitly to the maths.',
        },
        {
          t: 'table',
          head: ['Idea', 'Concrete', 'Pictorial', 'Abstract'],
          rows: [
            ['Place value', 'Base-10 blocks', 'Place value chart with dots', '347 = 300 + 40 + 7'],
            ['Fractions', 'Fraction strips', 'Bar model divided into equal parts', '¾'],
            ['Multiplication', 'Arrays of counters', 'Drawn arrays or area model', '4 × 6 = 24'],
            ['Equations', 'Balance scales', 'Bar model with unknown', '2x + 3 = 11'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Bar models',
          text: 'Bar models, widely used in Singapore maths, represent quantities as rectangles. They help learners see the structure of word problems before choosing an operation.',
        },
      ],
    },
    {
      id: 'misconceptions',
      title: 'Common misconceptions',
      blocks: [
        {
          t: 'table',
          head: ['Misconception', 'Where it comes from', 'Counter-example'],
          rows: [
            ['Multiplying always makes bigger', 'True for whole numbers', '6 × 0.5 = 3'],
            ['A longer decimal is bigger', 'Whole number thinking', '0.5 > 0.123'],
            ['The equals sign means "the answer is"', 'Sums always written as 3 + 4 = ?', '7 = 3 + 4; 3 + 4 = 5 + 2'],
            ['A bigger denominator means a bigger fraction', 'Bigger numbers are bigger', '⅓ > ⅕'],
            ['You can’t take a bigger number from a smaller one', 'Early subtraction rules', '3 − 5 = −2'],
          ],
        },
        {
          t: 'p',
          text: 'Use [hinge questions](@teaching/techniques/questioning/hinge-questions) with distractors built from these misconceptions, and show counter-examples that create productive surprise.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice that sticks',
      blocks: [
        {
          t: 'list',
          items: [
            'Start new procedures with [worked examples](@teaching/techniques/instruction/worked-examples) and fade them.',
            'Use **variation**: change one thing at a time across examples so learners notice what matters (Marton’s variation theory).',
            'Mix problem types in practice ([interleaving](@teaching/techniques/learning-strategies/interleaving)) so learners learn to choose methods.',
            'Revisit earlier topics regularly with low-stakes retrieval.',
            'Use **number talks**: short daily discussions of mental strategies for a calculation.',
            'Watch for **maths anxiety**: avoid heavy time pressure for struggling learners and normalise mistakes.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Rittle-Johnson, B., Schneider, M., & Star, J. R. (2015). Not a one-way street: Bidirectional relations between procedural and conceptual knowledge of mathematics. *Educational Psychology Review, 27*(4), 587–597.',
    'Education Endowment Foundation. (2017). *Improving mathematics in key stages two and three: Guidance report*.',
    'Rohrer, D., Dedrick, R. F., & Stershic, S. (2015). Interleaved practice improves mathematics learning. *Journal of Educational Psychology, 107*(3), 900–908.',
    'Parrish, S. (2014). *Number talks* (updated ed.). Math Solutions.',
  ],
  related: ['teaching/special-education/needs/dyscalculia', 'teaching/techniques/instruction/worked-examples', 'thinking/problem-solving'],
}

export default guide
