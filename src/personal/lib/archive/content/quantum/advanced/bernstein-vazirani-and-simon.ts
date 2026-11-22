import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Two short algorithms sit between Deutsch–Jozsa and Shor. Bernstein–Vazirani finds a hidden string with one query instead of n. Simon’s algorithm finds a hidden “period” exponentially faster than any classical method, and it directly inspired Peter Shor. Both use the same trick: Hadamards, a phase oracle, Hadamards again, and interference.',
  nutshell: [
    '**Bernstein–Vazirani**: f(x) = s · x (mod 2) for a secret n-bit string s. Classically n queries; quantumly **one**.',
    '**Simon**: f(x) = f(x ⊕ s) for a secret s ≠ 0. Classically about 2^(n/2) queries; quantumly about **n**, plus classical linear algebra.',
    'Both rely on the identity: the Hadamard transform turns phase patterns (−1)^(s·x) into the basis state |s⟩.',
  ],
  sections: [
    {
      id: 'bv',
      title: 'Bernstein–Vazirani',
      blocks: [
        {
          t: 'math',
          tex: String.raw`H^{\otimes n}\,\frac{1}{\sqrt{2^n}}\sum_{x}(-1)^{s\cdot x}|x\rangle = |s\rangle, \qquad s\cdot x = \bigoplus_{k} s_k x_k`,
          caption: 'After the phase oracle, a final layer of Hadamards turns the phase pattern into the secret string.',
          plain: 'Start with all qubits in |0⟩ and apply a Hadamard to each, making an equal superposition of every n-bit string. The oracle flips the sign of each string x whose dot product with the secret s is odd. That sign pattern is exactly what Hadamards would produce from |s⟩, so applying Hadamards again undoes it and leaves |s⟩. Measuring reads out all n bits of the secret at once.',
          where: [
            { sym: 's', def: 'the secret n-bit string' },
            { sym: 'x', def: 'an n-bit input string' },
            { sym: String.raw`s\cdot x`, def: 'bitwise dot product mod 2: count positions where both are 1, then take odd/even' },
            { sym: String.raw`H^{\otimes n}`, def: 'a Hadamard gate on each of the n qubits' },
          ],
          syntax: [
            { sym: String.raw`\bigoplus`, say: '“XOR sum”: add bits mod 2' },
            { sym: String.raw`(-1)^{s\cdot x}`, say: '+1 if the dot product is even, −1 if odd' },
            { sym: String.raw`\sum_x`, say: '“sum over all 2ⁿ strings x”' },
          ],
          worked: {
            title: 'n = 3, s = 101',
            steps: [
              String.raw`After the first Hadamards: each of the 8 strings has amplitude \(1/\sqrt8\).`,
              String.raw`Oracle signs: \(s\cdot x = x_1 \oplus x_3\). Strings 000, 010, 101, 111 keep +; strings 001, 011, 100, 110 get −.`,
              String.raw`Final Hadamards: the amplitude of \(|y\rangle\) is \(\tfrac18\sum_x (-1)^{(s\oplus y)\cdot x}\).`,
              String.raw`For \(y = s = 101\): \(s \oplus y = 000\), every term is +1, amplitude \(= 8/8 = 1\).`,
              String.raw`For any other y, \(s \oplus y \ne 000\), half the terms are +1 and half −1: amplitude 0.`,
            ],
            why: [
              'equal superposition over all inputs',
              'the dot product with 101 is the XOR of the first and last bits',
              'combining the two sign patterns gives this sum',
              'all terms agree, so they add up completely',
              'terms cancel perfectly by interference',
            ],
            answer: 'The measurement gives 101 with certainty after one oracle query. A classical algorithm needs three queries (f(100), f(010), f(001)) to read the three bits.',
          },
        },
      ],
    },
    {
      id: 'simon',
      title: 'Simon’s algorithm',
      blocks: [
        { t: 'steps', items: [
          { title: 'Prepare', body: 'Two registers of n qubits; Hadamards on the first.' },
          { title: 'Query', body: 'Compute f into the second register: Σₓ |x⟩|f(x)⟩.' },
          { title: 'Measure the second register', body: 'This collapses the first to (|x₀⟩ + |x₀ ⊕ s⟩)/√2 for some random x₀.' },
          { title: 'Hadamards and measure', body: 'The result y always satisfies y · s = 0 (mod 2).' },
          { title: 'Repeat and solve', body: 'About n − 1 independent y’s give a system of linear equations whose non-zero solution is s.' },
        ] },
        {
          t: 'math',
          tex: String.raw`y \cdot s = 0 \pmod 2 \quad \text{for every measured } y`,
          caption: 'Each run of Simon’s circuit gives a random y orthogonal (mod 2) to the secret s.',
          plain: 'Each run does not reveal s directly. Instead it gives a random string y that “agrees” with s in an even number of 1-positions. Collect enough independent such strings, and only one non-zero s fits them all.',
          where: [
            { sym: 'y', def: 'the measured n-bit string from one run' },
            { sym: 's', def: 'the hidden period' },
          ],
          syntax: [
            { sym: String.raw`\pmod 2`, say: '“modulo 2”: only odd or even matters' },
          ],
          worked: {
            title: 'n = 3, s = 110',
            steps: [
              String.raw`Strings with \(y\cdot s = y_1 \oplus y_2 = 0\): 000, 001, 110, 111.`,
              'Run 1 gives y = 001: equation \(s_3 = 0\).',
              'Run 2 gives y = 110: equation \(s_1 \oplus s_2 = 0\), so \(s_1 = s_2\).',
              String.raw`Non-zero solutions with \(s_3 = 0\) and \(s_1 = s_2\): only \(s = 110\).`,
            ],
            why: [
              'list the possible outcomes',
              'one equation per useful measurement',
              'a second, independent equation',
              'solve; s = 000 is excluded by definition',
            ],
            answer: 's = 110 from two useful runs (a 000 result gives no information and is simply repeated). Classically, finding s needs a collision f(x) = f(x′), which takes about 2^(n/2) queries by the birthday bound.',
          },
        },
      ],
    },
  ],
  sources: [
    'Bernstein, E., & Vazirani, U. (1997). Quantum complexity theory. SIAM Journal on Computing, 26(5), 1411–1473.',
    'Simon, D. R. (1997). On the power of quantum computation. SIAM Journal on Computing, 26(5), 1474–1483.',
    'Nielsen, M. A., & Chuang, I. L. (2010). Quantum Computation and Quantum Information. Cambridge University Press.',
  ],
  related: ['quantum/algorithms/deutsch-jozsa', 'quantum/algorithms/shor-and-qft', 'quantum/maths/dirac-and-tensors'],
}

export default guide
