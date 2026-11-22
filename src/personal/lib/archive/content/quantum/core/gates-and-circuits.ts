import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Quantum gates are the instructions of a quantum computer. Each one is a unitary matrix, a reversible rotation of the state. A circuit diagram shows qubits as horizontal wires and gates as boxes applied left to right. The key to understanding why circuits do anything useful is interference, which the Hadamard gate shows best.',
  nutshell: [
    '**X** flips 0 ↔ 1; **Z** flips the sign of |1⟩; **Y** does both (with a factor i).',
    '**Hadamard (H)** makes equal superpositions: \\(|0\\rangle \\to |+\\rangle\\), \\(|1\\rangle \\to |-\\rangle\\), and applying it twice undoes it, that is interference.',
    '**Phase gates** S and T rotate the phase of |1⟩ by 90° and 45°.',
    '**CNOT** flips a target qubit only if the control is 1; with H it makes entanglement. H, T and CNOT together are **universal**.',
  ],
  sections: [
    {
      id: 'table',
      title: 'The standard gates',
      blocks: [
        { t: 'table', head: ['Gate', 'Matrix', 'Effect'], rows: [
          ['X (NOT)', '[[0, 1], [1, 0]]', '|0⟩ ↔ |1⟩; 180° turn about the x axis'],
          ['Y', '[[0, −i], [i, 0]]', 'Flip plus phase; 180° about y'],
          ['Z', '[[1, 0], [0, −1]]', '|1⟩ → −|1⟩; 180° about z'],
          ['H (Hadamard)', '(1/√2)[[1, 1], [1, −1]]', '|0⟩ → |+⟩, |1⟩ → |−⟩'],
          ['S', '[[1, 0], [0, i]]', '90° phase on |1⟩'],
          ['T', '[[1, 0], [0, e^{iπ/4}]]', '45° phase on |1⟩'],
          ['Rx(θ), Ry(θ), Rz(θ)', 'rotations by any angle', 'Continuous rotations of the Bloch sphere'],
          ['CNOT', '4 × 4', 'Flips the target if the control is |1⟩'],
          ['SWAP', '4 × 4', 'Exchanges two qubits'],
          ['Toffoli (CCNOT)', '8 × 8', 'Flips the target if both controls are |1⟩; makes classical logic reversible'],
        ] },
      ],
    },
    {
      id: 'interference',
      title: 'Hadamard and interference',
      blocks: [
        {
          t: 'math',
          tex: String.raw`H = \frac{1}{\sqrt2}\begin{pmatrix}1 & 1\\ 1 & -1\end{pmatrix}, \qquad H|0\rangle = \frac{|0\rangle + |1\rangle}{\sqrt2}, \qquad H|1\rangle = \frac{|0\rangle - |1\rangle}{\sqrt2}`,
          caption: 'The Hadamard gate and its action on the basis states.',
          plain: 'Hadamard takes a definite 0 and turns it into an even mix of 0 and 1, and does the same to a 1 but with a minus sign on the 1 part. The minus sign is invisible if you measure straight away (both give 50/50), but it matters enormously if you apply H again: the amplitudes then add or cancel, like waves.',
          where: [
            { sym: 'H', def: 'the Hadamard gate' },
            { sym: String.raw`\tfrac{1}{\sqrt2}`, def: 'scaling that keeps total probability equal to 1' },
          ],
          syntax: [
            { sym: String.raw`H|0\rangle`, say: '“H acting on ket 0”: multiply the matrix by the vector (1, 0)' },
            { sym: String.raw`\frac{|0\rangle + |1\rangle}{\sqrt2}`, say: 'the sum of the two kets, divided by √2' },
          ],
          worked: {
            title: 'H twice: the minus sign makes |1⟩ vanish',
            steps: [
              String.raw`Start in \(|0\rangle\). After one H: \(\tfrac1{\sqrt2}|0\rangle + \tfrac1{\sqrt2}|1\rangle\).`,
              String.raw`Apply H again to each part: \(\tfrac1{\sqrt2}H|0\rangle + \tfrac1{\sqrt2}H|1\rangle\).`,
              String.raw`\(= \tfrac1{\sqrt2}\cdot\tfrac{|0\rangle + |1\rangle}{\sqrt2} + \tfrac1{\sqrt2}\cdot\tfrac{|0\rangle - |1\rangle}{\sqrt2}\).`,
              String.raw`\(= \tfrac12|0\rangle + \tfrac12|1\rangle + \tfrac12|0\rangle - \tfrac12|1\rangle\).`,
              String.raw`Collect: \(|0\rangle\) has \(\tfrac12 + \tfrac12 = 1\); \(|1\rangle\) has \(\tfrac12 - \tfrac12 = 0\). Result: \(|0\rangle\).`,
            ],
            why: [
              'use the formula for H|0⟩',
              'gates are linear, so they act on each part of a superposition separately',
              'substitute the formulas for H|0⟩ and H|1⟩',
              'multiply out; 1/√2 × 1/√2 = 1/2',
              'the two paths to |0⟩ have the same sign and add (constructive interference); the two paths to |1⟩ have opposite signs and cancel (destructive interference)',
            ],
            answer: String.raw`\(HH|0\rangle = |0\rangle\) with certainty. A coin flipped “randomly” twice would still be 50/50; the quantum version returns to 0 because amplitudes, unlike probabilities, can cancel. Every quantum algorithm exploits this.`,
          },
        },
      ],
    },
    {
      id: 'cnot',
      title: 'Two-qubit gates: CNOT',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{CNOT}\,|c,t\rangle = |c,\ t \oplus c\rangle, \qquad \text{CNOT} = \begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&0&1\\0&0&1&0\end{pmatrix}`,
          caption: 'The controlled-NOT: the target bit t is flipped when the control c is 1. Columns are ordered |00⟩, |01⟩, |10⟩, |11⟩.',
          plain: 'CNOT looks at the first (control) qubit. If it is 0 nothing happens; if it is 1 the second (target) qubit is flipped. In matrix form it leaves the 00 and 01 amplitudes where they are and swaps the 10 and 11 amplitudes. On a superposed control it does both at once, which ties the two qubits together: that is how entanglement is made.',
          where: [
            { sym: 'c', def: 'the control bit' },
            { sym: 't', def: 'the target bit' },
            { sym: String.raw`\oplus`, def: 'exclusive OR (addition mod 2): 0⊕0 = 0, 0⊕1 = 1, 1⊕0 = 1, 1⊕1 = 0' },
          ],
          syntax: [
            { sym: String.raw`|c,t\rangle`, say: 'a two-qubit basis state with first bit c and second bit t' },
            { sym: String.raw`t \oplus c`, say: '“t XOR c”' },
          ],
          worked: {
            title: 'H then CNOT makes a Bell state',
            steps: [
              String.raw`Start: \(|00\rangle\). Apply H to the first qubit: \(\tfrac{1}{\sqrt2}(|00\rangle + |10\rangle)\).`,
              String.raw`CNOT on \(|00\rangle\): control 0, so it stays \(|00\rangle\).`,
              String.raw`CNOT on \(|10\rangle\): control 1, so target flips: \(|11\rangle\).`,
              String.raw`Result: \(\tfrac1{\sqrt2}(|00\rangle + |11\rangle)\).`,
              String.raw`Measure: 00 with probability \(\tfrac12\), 11 with probability \(\tfrac12\), never 01 or 10.`,
            ],
            why: [
              'H turns the first qubit into |+⟩ while the second stays 0; written out with the tensor product',
              'apply the CNOT rule to each part separately (linearity)',
              '1 ⊕ 0 = 1',
              'add the two transformed parts back together',
              'square the amplitudes; the qubits always agree even though each on its own is a random coin',
            ],
            answer: String.raw`\(\tfrac1{\sqrt2}(|00\rangle + |11\rangle)\), the Bell state \(|\Phi^+\rangle\). It cannot be written as (state of qubit 1) ⊗ (state of qubit 2): it is entangled.`,
          },
        },
        { t: 'callout', tone: 'fact', title: 'Universality', text: 'Any quantum computation can be approximated as closely as you like using only H, T and CNOT (the Solovay–Kitaev theorem says efficiently). Just as NAND gates suffice for classical logic, a handful of quantum gates suffice for everything.' },
      ],
    },
  ],
  sources: ['Nielsen & Chuang (2010), chapter 4.', 'Barenco, A. et al. (1995). Elementary gates for quantum computation. Physical Review A 52.'],
  related: ['quantum/core/entanglement', 'quantum/algorithms/deutsch-jozsa'],
}

export default guide
