import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Quantum phase estimation (QPE) is the engine inside Shor’s algorithm, quantum chemistry energy calculations and many other algorithms. Given a unitary operation U and one of its eigenstates, it estimates the eigenvalue’s phase to many binary digits. This guide builds it step by step.',
  nutshell: [
    'If U|u⟩ = e^(2πiφ)|u⟩, QPE estimates φ (a number between 0 and 1) to t bits using t “counting” qubits.',
    'Controlled-U^(2^j) gates **kick back** phases onto the counting qubits; an **inverse QFT** turns those phases into a binary number.',
    'If φ has an exact t-bit expansion, QPE returns it with certainty; otherwise the closest t-bit value appears with probability at least 4/π² ≈ 0.405.',
    'Extra counting qubits raise the success probability.',
  ],
  sections: [
    {
      id: 'circuit',
      title: 'The circuit',
      blocks: [
        { t: 'flow', nodes: [
          { label: 'Counting qubits |0⟩^t', sub: 'Hadamards', tone: 'data' },
          { label: 'Controlled U^(2^j)', sub: 'phase kickback', tone: 'process' },
          { label: 'Inverse QFT', sub: 'phases → binary', tone: 'model' },
          { label: 'Measure', sub: 'read t bits of φ', tone: 'output' },
        ] },
        {
          t: 'math',
          tex: String.raw`\frac{1}{\sqrt{2^t}}\sum_{k=0}^{2^t-1} e^{2\pi i \varphi k}|k\rangle \;\xrightarrow{\ \mathrm{QFT}^{-1}\ }\; |\,2^t\varphi\,\rangle \ \ (\text{when } 2^t\varphi \text{ is an integer})`,
          caption: 'The counting register after the controlled operations, and what the inverse QFT does to it.',
          plain: 'After the controlled powers of U, the counting qubits hold every number k from 0 to 2ᵗ − 1, each with a phase that turns at a rate set by φ. This is exactly the Fourier transform of the single number 2ᵗφ. Undoing the Fourier transform therefore leaves that number, which you read out in binary.',
          where: [
            { sym: String.raw`\varphi`, def: 'the phase to estimate, 0 ≤ φ < 1' },
            { sym: 't', def: 'number of counting qubits' },
            { sym: 'k', def: 'the value held by the counting register' },
          ],
          syntax: [
            { sym: String.raw`\varphi`, say: '“phi”' },
            { sym: String.raw`e^{2\pi i \varphi k}`, say: 'a phase of φk full turns' },
            { sym: String.raw`\xrightarrow{\mathrm{QFT}^{-1}}`, say: '“becomes, after the inverse quantum Fourier transform”' },
          ],
          worked: {
            title: 'The T gate on |1⟩, with t = 3',
            steps: [
              String.raw`\(T|1\rangle = e^{i\pi/4}|1\rangle\). Write \(e^{i\pi/4} = e^{2\pi i \varphi}\): \(\varphi = 1/8\).`,
              String.raw`\(2^t\varphi = 8 \times 1/8 = 1\), an integer.`,
              String.raw`So the inverse QFT returns \(|1\rangle = |001\rangle\) with certainty.`,
              String.raw`Read \(\varphi = 0.001_2 = 1/8\).`,
            ],
            why: [
              'match the eigenvalue to the standard form',
              'check whether φ fits exactly in three bits',
              'exact phases give a definite result',
              'the bits are the binary fraction of φ',
            ],
            answer: 'QPE measures 001, giving φ = 1/8 exactly.',
          },
        },
      ],
    },
    {
      id: 'inexact',
      title: 'When the phase is not exact',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(b) = \left|\frac{\sin(\pi 2^t \delta)}{2^t \sin(\pi\delta)}\right|^2, \qquad \delta = \varphi - \frac{b}{2^t}`,
          caption: 'The probability of measuring the t-bit value b, where δ is the gap between φ and b/2ᵗ.',
          plain: 'If φ falls between two t-bit values, the outcome is spread over several values, peaked at the closest ones. The formula gives the probability of each outcome; the closer b/2ᵗ is to φ, the higher its probability.',
          where: [
            { sym: 'b', def: 'a possible measured integer' },
            { sym: String.raw`\delta`, def: 'the gap between the true phase and b/2ᵗ' },
          ],
          syntax: [
            { sym: String.raw`|\cdot|^2`, say: '“magnitude squared”: amplitude to probability' },
            { sym: String.raw`\delta`, say: '“delta”' },
          ],
          worked: {
            title: 'φ = 0.3 with t = 3',
            steps: [
              String.raw`\(2^t\varphi = 2.4\). Closest integer \(b = 2\) (0.25); \(\delta = 0.3 - 0.25 = 0.05\).`,
              String.raw`Numerator: \(\sin(\pi \times 8 \times 0.05) = \sin(0.4\pi) = 0.951\); squared 0.905.`,
              String.raw`Denominator: \(8\sin(0.05\pi) = 8 \times 0.156 = 1.251\); squared 1.566.`,
              String.raw`\(P(2) = 0.905/1.566 \approx 0.58\).`,
            ],
            why: [
              'find the nearest three-bit value and the gap',
              'the numerator term',
              'the denominator term',
              'divide',
            ],
            answer: 'The best three-bit estimate (φ ≈ 0.25) appears 58% of the time; the next-best (0.375) most of the rest. More counting qubits sharpen the estimate.',
          },
        },
        {
          t: 'math',
          tex: String.raw`t = n + \left\lceil \log_2\!\Big(2 + \frac{1}{2\varepsilon}\Big) \right\rceil`,
          caption: 'Counting qubits needed for n accurate bits of φ with success probability at least 1 − ε (Nielsen and Chuang).',
          plain: 'To be confident of n correct binary digits, add a few extra qubits. The number of extras depends only on how small you want the failure chance ε to be.',
          where: [
            { sym: 'n', def: 'bits of φ wanted' },
            { sym: String.raw`\varepsilon`, def: 'allowed failure probability' },
          ],
          syntax: [
            { sym: String.raw`\lceil\;\rceil`, say: '“round up”' },
            { sym: String.raw`\log_2`, say: '“log base 2”' },
          ],
          worked: {
            title: '4 accurate bits, 90% success',
            steps: [
              String.raw`\(\varepsilon = 0.1\): \(1/(2\varepsilon) = 5\).`,
              String.raw`\(\log_2(2 + 5) = \log_2 7 \approx 2.81\); round up to 3.`,
              String.raw`\(t = 4 + 3 = 7\).`,
            ],
            why: [
              'the failure allowance',
              'how many extra qubits that needs',
              'add to the accuracy wanted',
            ],
            answer: 'Seven counting qubits give 4 correct bits of φ with at least 90% probability.',
          },
        },
      ],
    },
  ],
  sources: [
    'Kitaev, A. Y. (1995). Quantum measurements and the Abelian stabilizer problem. arXiv:quant-ph/9511026.',
    'Nielsen, M. A., & Chuang, I. L. (2010). Quantum Computation and Quantum Information, §5.2. Cambridge University Press.',
  ],
  related: ['quantum/algorithms/shor-and-qft', 'quantum/algorithms/variational-and-simulation', 'quantum/advanced/amplitude-estimation'],
}

export default guide
