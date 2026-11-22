import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In 1994 Peter Shor showed that a quantum computer could factor large numbers efficiently. That matters because the RSA encryption protecting much of the internet relies on factoring being impossibly slow. Shor’s insight was that factoring reduces to finding the period of a repeating sequence, and the quantum Fourier transform finds periods superbly.',
  nutshell: [
    'Pick a random a. The sequence \\(a^x \\bmod N\\) repeats with some period r.',
    'If r is even, \\(\\gcd(a^{r/2} \\pm 1, N)\\) usually reveals a factor of N.',
    'Classically, finding r is as hard as factoring. The **QFT** finds it with about \\((\\log N)^2\\) to \\((\\log N)^3\\) gates.',
    'Breaking 2048-bit RSA is estimated to need around a million noisy physical qubits running for about a week (Gidney 2025), far beyond today’s machines.',
  ],
  sections: [
    {
      id: 'modular',
      title: 'Modular arithmetic and the period',
      blocks: [
        {
          t: 'math',
          tex: String.raw`f(x) = a^x \bmod N, \qquad f(x + r) = f(x)`,
          caption: 'Powers of a, wrapped around N like a clock, repeat with period r.',
          plain: '“mod N” means “the remainder after dividing by N”, like reading the hour on an N-hour clock. Keep multiplying by a and taking remainders and the values eventually cycle. The length of the cycle is the period r. Shor’s algorithm needs this period, because from it you can split N into factors with simple arithmetic.',
          where: [
            { sym: 'N', def: 'the number to factor' },
            { sym: 'a', def: 'a random number between 2 and N − 1 sharing no factor with N' },
            { sym: 'r', def: 'the period: the smallest r > 0 with aʳ mod N = 1' },
          ],
          syntax: [
            { sym: String.raw`\bmod N`, say: '“modulo N”: take the remainder after dividing by N' },
            { sym: String.raw`a^x`, say: 'a multiplied by itself x times' },
          ],
          worked: {
            title: 'N = 15, a = 7',
            steps: [
              String.raw`\(7^1 = 7\); \(7 \bmod 15 = 7\).`,
              String.raw`\(7^2 = 49\); \(49 \bmod 15 = 4\).`,
              String.raw`\(7^3\): instead of 343, do \(4 \times 7 = 28\); \(28 \bmod 15 = 13\).`,
              String.raw`\(7^4\): \(13 \times 7 = 91\); \(91 \bmod 15 = 1\).`,
              String.raw`\(7^5\): \(1 \times 7 = 7\), the cycle 7, 4, 13, 1 repeats, so \(r = 4\).`,
            ],
            why: [
              '7 is less than 15, so its remainder is itself',
              '49 = 3 × 15 + 4',
              'you only need the previous remainder times 7, which keeps numbers small',
              '91 = 6 × 15 + 1; reaching 1 means the next power restarts the cycle',
              'the sequence has returned to its first value after 4 steps',
            ],
            answer: String.raw`The period of \(7^x \bmod 15\) is \(r = 4\).`,
          },
        },
        {
          t: 'math',
          tex: String.raw`p = \gcd\!\left(a^{r/2} - 1,\ N\right), \qquad q = \gcd\!\left(a^{r/2} + 1,\ N\right)`,
          caption: 'From the period to the factors.',
          plain: 'Because aʳ − 1 is a multiple of N, and aʳ − 1 = (a^{r/2} − 1)(a^{r/2} + 1), the two brackets share N’s factors between them. The greatest common divisor (gcd), found quickly with Euclid’s ancient algorithm, pulls each factor out. This last step is completely classical; the quantum computer is only needed to find r.',
          where: [
            { sym: String.raw`\gcd(u, v)`, def: 'greatest common divisor: the largest number dividing both u and v' },
            { sym: 'p, q', def: 'the factors found' },
          ],
          syntax: [
            { sym: String.raw`\gcd`, say: '“greatest common divisor”' },
            { sym: String.raw`a^{r/2}`, say: 'a raised to half the period' },
          ],
          worked: {
            title: 'Factoring 15 with r = 4',
            steps: [
              String.raw`\(r/2 = 2\), \(a^{r/2} = 7^2 = 49\).`,
              String.raw`\(\gcd(49 - 1, 15) = \gcd(48, 15)\). Euclid: \(48 = 3\times15 + 3\); \(\gcd(15, 3) = 3\).`,
              String.raw`\(\gcd(49 + 1, 15) = \gcd(50, 15)\): \(50 = 3\times15 + 5\); \(\gcd(15, 5) = 5\).`,
              String.raw`Check: \(3 \times 5 = 15\).`,
            ],
            why: [
              'r is even, which the method needs',
              'Euclid’s algorithm replaces the larger number by its remainder until one divides the other',
              'the same procedure on the other bracket',
              'the two numbers found multiply back to N',
            ],
            answer: String.raw`\(15 = 3 \times 5\). Real quantum demonstrations factored 15 (2001) and 21 (2012), with heavy shortcuts; large-number factoring awaits error-corrected hardware.`,
          },
        },
      ],
    },
    {
      id: 'qft',
      title: 'The quantum Fourier transform',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{QFT}\,|x\rangle = \frac{1}{\sqrt M}\sum_{k=0}^{M-1} e^{2\pi i\,xk/M}\,|k\rangle`,
          caption: 'The QFT on M = 2ⁿ basis states: each input spreads over all outputs with phases that turn at a rate set by x.',
          plain: 'The QFT is the quantum version of the discrete Fourier transform, the tool that finds the frequencies hidden in a signal. After the modular-exponentiation step, the register holds a comb of states spaced r apart. The QFT turns “spaced r apart” into “peaks at multiples of M/r”: the phases line up and add for those outputs and cancel elsewhere. Measuring gives a multiple of M/r, from which r follows using continued fractions.',
          where: [
            { sym: 'M', def: 'number of basis states, 2ⁿ for n qubits' },
            { sym: 'x, k', def: 'input and output labels, 0 to M − 1' },
            { sym: String.raw`e^{2\pi i xk/M}`, def: 'a phase: an arrow turned by the fraction xk/M of a full circle' },
          ],
          syntax: [
            { sym: String.raw`2\pi`, say: 'one full turn, in radians' },
            { sym: String.raw`\frac{1}{\sqrt M}`, say: 'keeps the total probability at 1' },
          ],
          worked: {
            title: 'A comb with period 4 in M = 16 states',
            steps: [
              String.raw`Suppose the register holds equal amplitudes on \(x = 1, 5, 9, 13\) (spacing \(r = 4\)).`,
              String.raw`Output k = 4: phases \(e^{2\pi i\cdot x\cdot4/16} = e^{\pi i x/2}\): for \(x = 1, 5, 9, 13\) each equals \(i\). They all agree, so they add.`,
              String.raw`Output k = 1: phases turn by \(2\pi\cdot4/16 = 90°\) from one comb tooth to the next: \(i, -1, -i, 1\) times a constant. They cancel.`,
              String.raw`Only \(k = 0, 4, 8, 12\) survive: multiples of \(M/r = 16/4 = 4\).`,
              String.raw`Measuring gives e.g. 12; \(12/16 = 3/4\), whose denominator suggests \(r = 4\).`,
            ],
            why: [
              'this is what the register looks like after measuring the function’s output',
              'the step between teeth is 4, and 4 × 4/16 is a whole turn, so all the arrows point the same way',
              'a quarter-turn step makes four arrows pointing in four directions, which sum to zero',
              'constructive interference happens only at multiples of M/r',
              'k/M ≈ j/r; reducing the fraction (continued fractions in general) recovers r',
            ],
            answer: String.raw`The QFT converts a hidden period into sharp peaks. Its circuit needs only about \(n^2/2\) gates for n qubits, versus about \(n2^n\) operations for the classical fast Fourier transform on the same vector.`,
          },
        },
      ],
    },
  ],
  sources: ['Shor, P. W. (1994). Algorithms for quantum computation: discrete logarithms and factoring. Proceedings of FOCS.', 'Gidney, C. & Ekerå, M. (2021). How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits. Quantum 5.', 'Gidney, C. (2025). How to factor 2048 bit RSA integers with less than a million noisy qubits. arXiv:2505.15917.', 'Vandersypen, L. M. K. et al. (2001). Experimental realization of Shor’s quantum factoring algorithm using NMR. Nature 414.'],
  related: ['quantum/real-machines/quantum-cryptography', 'quantum/algorithms/variational-and-simulation'],
}

export default guide
