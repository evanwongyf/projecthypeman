import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Probability turns uncertainty into arithmetic. A handful of rules, how to combine "or", how to combine "and", and how to update a belief once new evidence arrives, cover almost everything you will ever need, from a coin flip to a medical test to [a spam filter](@ai/algorithms/naive-bayes).',
  nutshell: [
    '\\(P(A)\\) is always between 0 (impossible) and 1 (certain).',
    '"Or" uses the **addition rule**: \\(P(A \\cup B) = P(A)+P(B)-P(A \\cap B)\\).',
    '"And" uses the **multiplication rule**: \\(P(A \\cap B) = P(A)\\,P(B\\mid A)\\), simplifying to \\(P(A)P(B)\\) only when A and B are independent.',
    '**Bayes\' theorem** reverses a conditional probability: turns \\(P(\\text{evidence}\\mid\\text{hypothesis})\\) into \\(P(\\text{hypothesis}\\mid\\text{evidence})\\).',
  ],
  sections: [
    {
      id: 'basics',
      title: 'The basic rules',
      blocks: [
        {
          t: 'math',
          tex: String.raw`0 \le P(A) \le 1 \qquad P(A^c) = 1 - P(A)`,
          caption: 'Every probability is between 0 and 1. The complement rule: the chance something does NOT happen is 1 minus the chance it does, useful whenever "at least one" is easier to compute via "none".',
        },
        {
          t: 'math',
          tex: String.raw`P(A \cup B) = P(A) + P(B) - P(A \cap B)`,
          caption: 'The addition rule ("or"). Subtracting the overlap avoids double-counting outcomes that satisfy both A and B, the probability version of inclusion-exclusion from [sets](@mathematics/notation/sets).',
        },
        {
          t: 'example',
          title: 'Drawing a card: red or a king',
          lines: [
            { label: 'P(red)', text: '26/52 = 0.5' },
            { label: 'P(king)', text: '4/52 ≈ 0.077' },
            { label: 'P(red and king)', text: '2/52 ≈ 0.038 (the king of hearts and king of diamonds)' },
            { label: 'P(red or king)', text: '\\(0.5 + 0.077 - 0.038 = 0.538\\)' },
          ],
        },
      ],
    },
    {
      id: 'conditional',
      title: 'Conditional probability and independence',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(A \mid B) = \frac{P(A \cap B)}{P(B)}`,
          caption: '"The probability of A, given B": restrict attention to the world where B is already known to be true, and ask how likely A is within that smaller world.',
        },
        {
          t: 'math',
          tex: String.raw`P(A \cap B) = P(A)\,P(B\mid A)`,
          caption: 'The multiplication rule ("and"): rearranging the definition above. It is the general version; when A and B are independent (knowing one tells you nothing about the other), \\(P(B\\mid A) = P(B)\\), simplifying to \\(P(A \\cap B) = P(A)P(B)\\).',
        },
        {
          t: 'example',
          title: 'Dependent events: drawing two cards without replacement',
          lines: [
            { label: 'P(first is a king)', text: '4/52' },
            { label: 'P(second is a king | first was a king)', text: '3/51 (one king and one card gone)' },
            { label: 'P(both kings)', text: '\\(\\dfrac{4}{52}\\times\\dfrac{3}{51} = \\dfrac{12}{2652} \\approx 0.0045\\)' },
          ],
        },
      ],
    },
    {
      id: 'bayes',
      title: 'Bayes\' theorem, derived',
      blocks: [
        {
          t: 'proof',
          claim: '\\(P(A\\mid B) = \\dfrac{P(B\\mid A)\\,P(A)}{P(B)}\\)',
          method: 'direct',
          steps: [
            { statement: '\\(P(A\\cap B) = P(A)\\,P(B\\mid A)\\)', reason: 'The multiplication rule, applied in this order (A first)' },
            { statement: '\\(P(A\\cap B) = P(B)\\,P(A\\mid B)\\)', reason: 'The multiplication rule, applied the other way round (B first), the same intersection, so these are equal' },
            { statement: '\\(P(B)\\,P(A\\mid B) = P(A)\\,P(B\\mid A)\\)', reason: 'Both expressions equal \\(P(A\\cap B)\\), so set them equal to each other' },
            { statement: '\\(P(A\\mid B) = \\dfrac{P(B\\mid A)\\,P(A)}{P(B)}\\)', reason: 'Divide both sides by P(B)' },
          ],
          note: 'This single rearrangement is what lets you flip "how likely is the evidence, if the hypothesis is true" into "how likely is the hypothesis, given the evidence"used throughout [naive Bayes](@ai/algorithms/naive-bayes).',
        },
        {
          t: 'example',
          title: 'The classic medical-test surprise',
          lines: [
            { label: 'Facts', text: 'a disease affects 1% of people; a test is 99% accurate for the ill and 95% accurate for the healthy (5% false-positive rate)' },
            { label: 'P(ill)', text: '0.01' },
            { label: 'P(positive | ill)', text: '0.99' },
            { label: 'P(positive)', text: '\\(0.99(0.01) + 0.05(0.99) = 0.0594\\): sum over both ways to test positive' },
            { label: 'Bayes', text: '\\(P(\\text{ill}\\mid\\text{positive}) = \\dfrac{0.99 \\times 0.01}{0.0594} \\approx 16.7\\%\\)' },
            { label: 'The surprise', text: 'even with a "99% accurate" test, most positive results are false alarms, because the disease is so rare that healthy false-positives (5% of the huge healthy group) outnumber true positives (99% of the tiny ill group)' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Published after his death', text: 'Thomas Bayes, an 18th-century English minister and mathematician, never published the theorem that now bears his name. His friend Richard Price found an essay containing it among Bayes\' papers after he died, and presented it to the Royal Society in 1763, two years posthumously.' },
      ],
    },
  ],
  sources: ['Bayes, T., & Price, R. (1763). An essay towards solving a problem in the doctrine of chances. *Philosophical Transactions of the Royal Society*, 53, 370–418.', 'Ross, S. M. (2019). *A First Course in Probability* (10th ed.). Pearson.'],
  related: ['mathematics/probability/random-variables', 'ai/algorithms/naive-bayes', 'mathematics/notation/sets'],
}

export default guide
