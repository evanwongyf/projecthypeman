import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Grover’s algorithm (1996) finds a marked item among N possibilities using about √N checks instead of about N/2. It works by repeatedly flipping the sign of the right answer and then reflecting all amplitudes about their average, which pumps amplitude into the right answer a little more each round. The speed-up is quadratic, not exponential, but it applies to a huge range of search problems.',
  nutshell: [
    'Start with every item in equal superposition: amplitude \\(1/\\sqrt N\\) each.',
    '**Oracle**: flip the sign of the marked item. **Diffusion**: reflect every amplitude about the mean.',
    'Each round rotates the state by an angle \\(2\\theta\\) towards the answer, where \\(\\sin\\theta = 1/\\sqrt N\\).',
    'Run about \\(\\frac{\\pi}{4}\\sqrt N\\) rounds. Too many rounds overshoots and the success rate falls again.',
  ],
  sections: [
    {
      id: 'mean',
      title: 'Inversion about the mean',
      blocks: [
        {
          t: 'math',
          tex: String.raw`a_x \;\to\; 2\bar a - a_x, \qquad \bar a = \frac{1}{N}\sum_x a_x`,
          caption: 'The diffusion step: each amplitude is reflected about the average amplitude.',
          plain: 'Work out the average of all the amplitudes. Every amplitude then jumps to the same distance on the other side of that average. After the oracle has made the marked amplitude negative, the average sits just below the others; the unmarked amplitudes barely move, but the negative one is far below the average, so it flips to far above it. The answer’s amplitude grows each round.',
          where: [
            { sym: String.raw`a_x`, def: 'the amplitude of item x' },
            { sym: String.raw`\bar a`, def: 'the average (mean) amplitude' },
            { sym: 'N', def: 'number of items' },
          ],
          syntax: [
            { sym: String.raw`\to`, say: '“becomes”' },
            { sym: String.raw`\bar a`, say: '“a bar”, the mean' },
          ],
          worked: {
            title: 'One round with N = 4 finds the answer exactly',
            steps: [
              String.raw`Start: all four amplitudes \(\tfrac12\) (since \(1/\sqrt4 = \tfrac12\)). Marked item: the third.`,
              String.raw`Oracle: amplitudes become \(\tfrac12, \tfrac12, -\tfrac12, \tfrac12\).`,
              String.raw`Mean: \(\bar a = \tfrac14(\tfrac12 + \tfrac12 - \tfrac12 + \tfrac12) = \tfrac14\).`,
              String.raw`Unmarked: \(2\cdot\tfrac14 - \tfrac12 = 0\). Marked: \(2\cdot\tfrac14 - (-\tfrac12) = 1\).`,
              String.raw`New amplitudes: \(0, 0, 1, 0\).`,
            ],
            why: [
              'equal superposition from Hadamards on two qubits',
              'the oracle flips only the marked amplitude’s sign',
              'add the four and divide by four',
              'apply the reflection formula to each kind of amplitude',
              'all the probability has moved to the marked item',
            ],
            answer: String.raw`One Grover iteration finds 1 item in 4 with certainty; a classical search needs 2.25 checks on average.`,
          },
        },
      ],
    },
    {
      id: 'iterations',
      title: 'How many rounds?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P_{\text{success}}(k) = \sin^2\!\big((2k+1)\theta\big), \qquad \sin\theta = \frac{1}{\sqrt N}, \qquad k_{\text{best}} \approx \frac{\pi}{4}\sqrt N`,
          caption: 'Probability of finding the marked item after k Grover iterations.',
          plain: 'Grover’s state lives in a flat plane spanned by “the answer” and “everything else”. It starts tilted a tiny angle θ towards the answer and each iteration rotates it a further 2θ. The success chance is the sine of the total angle, squared. You want the total angle to reach about 90°, which takes about (π/4)√N rounds. Going past 90° rotates away again.',
          where: [
            { sym: 'k', def: 'number of iterations' },
            { sym: String.raw`\theta`, def: 'initial angle towards the answer' },
            { sym: 'N', def: 'size of the search space' },
          ],
          syntax: [
            { sym: String.raw`\sin^2(\cdot)`, say: 'the sine of the angle, then squared' },
            { sym: String.raw`\approx`, say: '“approximately equal to”' },
          ],
          worked: {
            title: 'Searching a million items',
            steps: [
              String.raw`\(N = 10^6\), so \(\sqrt N = 1000\) and \(\sin\theta = 0.001\), giving \(\theta \approx 0.001\) radians.`,
              String.raw`\(k_{\text{best}} \approx \tfrac{\pi}{4}\times1000 \approx 785\) iterations.`,
              String.raw`Check: \((2\cdot785 + 1)\times0.001 = 1.571\) radians \(\approx 90°\); \(\sin^2(90°) = 1\).`,
              String.raw`Too many: \(k = 1570\) gives \((3141)\times0.001 \approx 3.14\) rad = 180°, \(\sin^2 \approx 0\).`,
              String.raw`Classical average: \(N/2 = 500{,}000\) checks.`,
            ],
            why: [
              'for small angles sin θ ≈ θ',
              'apply the rule of thumb',
              'the total angle reaches a right angle, where the sine is 1',
              'doubling the iterations rotates past the answer back to the start',
              'an unstructured classical search looks at half the items on average',
            ],
            answer: String.raw`About 785 quantum queries versus 500,000 classical. Note each quantum query is far slower and error-prone today, so the quadratic speed-up only pays off for very large, well-structured problems on future error-corrected machines.`,
          },
        },
      ],
    },
  ],
  sources: ['Grover, L. K. (1996). A fast quantum mechanical algorithm for database search. Proceedings of STOC.', 'Bennett, C. H. et al. (1997). Strengths and weaknesses of quantum computing. SIAM Journal on Computing 26(5). (proves √N is optimal)', 'Babbush, R. et al. (2021). Focus beyond quadratic speedups for error-corrected quantum advantage. PRX Quantum 2.'],
  related: ['quantum/algorithms/deutsch-jozsa', 'quantum/algorithms/shor-and-qft'],
}

export default guide
