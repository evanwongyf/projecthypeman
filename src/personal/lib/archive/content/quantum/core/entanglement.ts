import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Two qubits are entangled when their joint state cannot be split into a separate state for each. Measure one and you instantly know about the other, however far apart they are, not because a signal travels, but because the outcomes were never independent. Einstein called it “spooky action at a distance”; experiments since the 1970s (Nobel Prize 2022) confirm that nature really works this way.',
  nutshell: [
    'The four **Bell states**, such as \\(\\tfrac1{\\sqrt2}(|00\\rangle + |11\\rangle)\\), are maximally entangled.',
    'Entanglement gives **correlations stronger than any classical system can produce**, shown by the CHSH inequality: classical ≤ 2, quantum up to \\(2\\sqrt2 \\approx 2.83\\).',
    'It cannot send messages faster than light: each side alone sees random results.',
    'Uses: **teleportation** (moving a qubit state using one Bell pair and two classical bits), **superdense coding** (two bits in one qubit), quantum cryptography and error correction.',
  ],
  sections: [
    {
      id: 'product-test',
      title: 'How to tell if a state is entangled',
      blocks: [
        {
          t: 'math',
          tex: String.raw`a|00\rangle + b|01\rangle + c|10\rangle + d|11\rangle \text{ is a product state} \iff ad - bc = 0`,
          caption: 'A two-qubit pure state is unentangled (a product) exactly when this “determinant” is zero.',
          plain: 'If the two qubits are independent, the four amplitudes come from multiplying (p, q) for the first qubit with (r, s) for the second: a = pr, b = ps, c = qr, d = qs. Then a × d = pqrs and b × c = pqrs, so they are equal and ad − bc = 0. If ad − bc is anything other than zero, no such split exists, and the qubits are entangled. The bigger |ad − bc| (up to 1/2), the more entangled.',
          where: [
            { sym: 'a, b, c, d', def: 'the amplitudes of 00, 01, 10 and 11' },
          ],
          syntax: [
            { sym: String.raw`\iff`, say: '“if and only if”: each side implies the other' },
            { sym: 'ad − bc', say: 'a times d minus b times c (the determinant of the 2 × 2 grid of amplitudes)' },
          ],
          worked: {
            title: 'Testing a product state and a Bell state',
            steps: [
              String.raw`\(|+\rangle\otimes|0\rangle = \tfrac1{\sqrt2}|00\rangle + \tfrac1{\sqrt2}|10\rangle\): \(a = \tfrac1{\sqrt2}, b = 0, c = \tfrac1{\sqrt2}, d = 0\).`,
              String.raw`\(ad - bc = \tfrac1{\sqrt2}\cdot 0 - 0\cdot\tfrac1{\sqrt2} = 0\): product state.`,
              String.raw`Bell state \(\tfrac1{\sqrt2}(|00\rangle + |11\rangle)\): \(a = d = \tfrac1{\sqrt2}\), \(b = c = 0\).`,
              String.raw`\(ad - bc = \tfrac12 - 0 = \tfrac12\): entangled (maximally).`,
            ],
            why: [
              'read the four amplitudes in the order 00, 01, 10, 11',
              'zero means it splits into separate qubit states, as we built it',
              'only the 00 and 11 amplitudes are non-zero',
              'non-zero means no split exists; 1/2 is the largest possible value',
            ],
            answer: String.raw`\(|+\rangle|0\rangle\) is a product state; \(\tfrac1{\sqrt2}(|00\rangle + |11\rangle)\) is maximally entangled.`,
          },
        },
      ],
    },
    {
      id: 'chsh',
      title: 'Bell’s theorem: the CHSH game',
      blocks: [
        {
          t: 'math',
          tex: String.raw`S = E(a,b) + E(a,b') + E(a',b) - E(a',b'), \qquad |S|_{\text{classical}} \le 2, \qquad |S|_{\text{quantum}} \le 2\sqrt2`,
          caption: 'The CHSH combination of correlations between Alice’s settings (a, a′) and Bob’s (b, b′).',
          plain: 'Alice and Bob each get one particle and each pick one of two measurement settings at random, recording +1 or −1. E is the average of the product of their results for a pair of settings: +1 means always agree, −1 always disagree. Any explanation where the particles carry pre-set answers (“hidden variables”) and nothing travels faster than light keeps S between −2 and 2. Entangled qubits measured at well-chosen angles reach 2√2 ≈ 2.83, so no such explanation can be right.',
          where: [
            { sym: 'E(a, b)', def: 'the correlation: average of (Alice’s ±1) × (Bob’s ±1) when using settings a and b' },
            { sym: String.raw`a, a'`, def: 'Alice’s two measurement angles' },
            { sym: String.raw`b, b'`, def: 'Bob’s two measurement angles' },
          ],
          syntax: [
            { sym: String.raw`a'`, say: '“a prime”: a second, different setting, not a derivative' },
            { sym: String.raw`|S|`, say: 'the size of S, ignoring its sign' },
          ],
          worked: {
            title: 'The quantum value',
            steps: [
              String.raw`For the Bell state, quantum theory gives \(E = \cos(\text{angle between settings})\) (in the x–z plane).`,
              String.raw`Choose \(a = 0°, a' = 90°, b = 45°, b' = -45°\).`,
              String.raw`\(E(a,b) = \cos 45° = 0.707\); \(E(a,b') = \cos 45° = 0.707\); \(E(a',b) = \cos 45° = 0.707\).`,
              String.raw`\(E(a',b') = \cos 135° = -0.707\).`,
              String.raw`\(S = 0.707 + 0.707 + 0.707 - (-0.707) = 2.83\).`,
            ],
            why: [
              'this correlation law follows from the Born rule for the Bell state; aligned settings agree perfectly',
              'these angles are the ones that maximise S',
              'each of these pairs is 45° apart',
              '90° minus (−45°) is 135°, whose cosine is negative',
              'subtracting a negative adds; the total beats the classical limit of 2',
            ],
            answer: String.raw`\(S = 2\sqrt2 \approx 2.83 > 2\). Experiments (Aspect 1982; loophole-free tests 2015) measure about 2.4–2.8, ruling out local hidden variables.`,
          },
        },
      ],
    },
    {
      id: 'teleport',
      title: 'Teleportation and no-cloning',
      blocks: [
        { t: 'steps', items: [
          { title: 'Share a Bell pair', body: 'Alice and Bob each hold one qubit of \\(\\tfrac1{\\sqrt2}(|00\\rangle + |11\\rangle)\\).' },
          { title: 'Alice entangles her unknown qubit', body: 'She applies CNOT (unknown qubit as control, her Bell half as target), then H to the unknown qubit.' },
          { title: 'Alice measures both her qubits', body: 'She gets two random classical bits (00, 01, 10 or 11), destroying her copy of the state.' },
          { title: 'She phones Bob', body: 'The two bits travel at ordinary (light-speed or slower) speed.' },
          { title: 'Bob corrects', body: 'Depending on the bits he applies nothing, X, Z, or both. His qubit is now exactly the original state.' },
        ] },
        { t: 'callout', tone: 'note', title: 'No-cloning', text: 'No device can copy an unknown quantum state: a gate that maps |ψ⟩|0⟩ → |ψ⟩|ψ⟩ for every ψ would not be linear. Teleportation does not violate this because Alice’s original is destroyed. No-cloning is also why quantum key distribution can detect eavesdroppers.' },
      ],
    },
  ],
  sources: ['Bell, J. S. (1964). On the Einstein Podolsky Rosen paradox. Physics 1(3).', 'Clauser, J. F. et al. (1969). Proposed experiment to test local hidden-variable theories. Physical Review Letters 23.', 'Bennett, C. H. et al. (1993). Teleporting an unknown quantum state via dual classical and EPR channels. PRL 70.', 'Hensen, B. et al. (2015). Loophole-free Bell inequality violation. Nature 526.'],
  related: ['quantum/core/gates-and-circuits', 'quantum/real-machines/quantum-cryptography'],
}

export default guide
