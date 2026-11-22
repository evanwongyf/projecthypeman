import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Physicists write quantum states with Paul Dirac’s bra-ket notation. It is just a compact way of writing vectors: |0⟩ and |1⟩ are the two basis columns, ⟨ψ| is the conjugate row, and ⟨φ|ψ⟩ is their inner product. To combine qubits you take a tensor product, which is why the number of amplitudes doubles with every qubit you add.',
  nutshell: [
    '\\(|0\\rangle = \\begin{pmatrix}1\\\\0\\end{pmatrix}\\), \\(|1\\rangle = \\begin{pmatrix}0\\\\1\\end{pmatrix}\\); any qubit is \\(\\alpha|0\\rangle + \\beta|1\\rangle\\).',
    'A **ket** \\(|\\psi\\rangle\\) is a column; a **bra** \\(\\langle\\psi|\\) is the conjugated row; a **bracket** \\(\\langle\\phi|\\psi\\rangle\\) is a number.',
    'The **tensor product** \\(\\otimes\\) multiplies every amplitude of one qubit by every amplitude of the other: 2 × 2 = 4 amplitudes for two qubits.',
    '\\(|01\\rangle\\) is shorthand for \\(|0\\rangle\\otimes|1\\rangle\\): first qubit 0, second qubit 1.',
  ],
  sections: [
    {
      id: 'braket',
      title: 'Kets, bras and brackets',
      blocks: [
        {
          t: 'math',
          tex: String.raw`|\psi\rangle = \alpha|0\rangle + \beta|1\rangle = \begin{pmatrix}\alpha\\ \beta\end{pmatrix}, \qquad \langle\phi|\psi\rangle = \bar\gamma\alpha + \bar\delta\beta`,
          caption: 'A qubit state in Dirac notation and as a vector, and the bracket (inner product) with another state |φ⟩ = γ|0⟩ + δ|1⟩.',
          plain: 'A ket is a labelled column of amplitudes. Writing α|0⟩ + β|1⟩ says “amplitude α on the 0 column plus amplitude β on the 1 column”, which stacks into the vector (α, β). To compare with another state φ, flip φ into a row and conjugate it (that is the bra ⟨φ|), then multiply row by column. The squared size of that number is the probability that a state ψ, when tested, “looks like” φ.',
          where: [
            { sym: String.raw`|\psi\rangle`, def: 'a ket: the state ψ (psi) as a column vector' },
            { sym: String.raw`\alpha,\ \beta`, def: 'alpha and beta: complex amplitudes of 0 and 1, with |α|² + |β|² = 1' },
            { sym: String.raw`\langle\phi|`, def: 'a bra: the state φ (phi) as a conjugated row' },
            { sym: String.raw`\gamma,\ \delta`, def: 'gamma and delta: the amplitudes of φ' },
          ],
          syntax: [
            { sym: String.raw`|\;\rangle`, say: 'a ket, read “ket psi”; it is a column vector' },
            { sym: String.raw`\langle\;|`, say: 'a bra, read “bra phi”; it is a row vector' },
            { sym: String.raw`\langle\phi|\psi\rangle`, say: '“bracket phi psi”, a single (complex) number' },
          ],
          worked: {
            title: 'The chance that |+⟩ is found to be |0⟩',
            steps: [
              String.raw`\(|+\rangle = \tfrac{1}{\sqrt2}|0\rangle + \tfrac{1}{\sqrt2}|1\rangle\), so \(\alpha = \beta = \tfrac1{\sqrt2} \approx 0.707\).`,
              String.raw`Check normalisation: \(|\alpha|^2 + |\beta|^2 = \tfrac12 + \tfrac12 = 1\).`,
              String.raw`\(|0\rangle\) has \(\gamma = 1, \delta = 0\), so \(\langle 0|+\rangle = 1\cdot\tfrac1{\sqrt2} + 0\cdot\tfrac1{\sqrt2} = \tfrac1{\sqrt2}\).`,
              String.raw`Probability: \(|\langle0|+\rangle|^2 = \left(\tfrac1{\sqrt2}\right)^2 = \tfrac12\).`,
            ],
            why: [
              'read the amplitudes off the ket; 1/√2 is chosen so the squares add to 1',
              'a valid state must have probabilities totalling 1',
              'conjugating 1 and 0 changes nothing; multiply pairwise and add',
              'the squared size of the bracket is the probability (the Born rule)',
            ],
            answer: String.raw`50%: a qubit in \(|+\rangle\) reads 0 half the time, like a fair coin, until the next gate makes its phase matter.`,
          },
        },
      ],
    },
    {
      id: 'tensor',
      title: 'Tensor products: combining qubits',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\begin{pmatrix}a\\ b\end{pmatrix}\otimes\begin{pmatrix}c\\ d\end{pmatrix} = \begin{pmatrix}ac\\ ad\\ bc\\ bd\end{pmatrix} \;\leftrightarrow\; ac|00\rangle + ad|01\rangle + bc|10\rangle + bd|11\rangle`,
          caption: 'The tensor product of two one-qubit states gives the four amplitudes of the two-qubit state.',
          plain: 'Two qubits together can be 00, 01, 10 or 11, so they need four amplitudes. When the qubits are independent, each combined amplitude is just the product of the separate amplitudes: the chance of “first is 0 and second is 1” is the first’s 0-amplitude times the second’s 1-amplitude. Stack the four products in the order 00, 01, 10, 11. Each added qubit doubles the list again, so n qubits need 2ⁿ numbers, which is why classical computers struggle to simulate even 50 qubits.',
          where: [
            { sym: 'a, b', def: 'amplitudes of the first qubit (for 0 and 1)' },
            { sym: 'c, d', def: 'amplitudes of the second qubit' },
            { sym: String.raw`|01\rangle`, def: 'the basis state with the first qubit 0 and the second 1' },
          ],
          syntax: [
            { sym: String.raw`\otimes`, say: '“tensor”: combine two systems into one by multiplying every entry of one with every entry of the other' },
            { sym: String.raw`\leftrightarrow`, say: 'the two sides are the same thing written two ways' },
          ],
          worked: {
            title: 'Two qubits: |+⟩ ⊗ |0⟩, and a count of amplitudes',
            steps: [
              String.raw`\(|+\rangle = \tfrac1{\sqrt2}(1, 1)\), so \(a = b = \tfrac1{\sqrt2}\). \(|0\rangle = (1, 0)\), so \(c = 1, d = 0\).`,
              String.raw`\(ac = \tfrac1{\sqrt2}\), \(ad = 0\), \(bc = \tfrac1{\sqrt2}\), \(bd = 0\).`,
              String.raw`State: \(\tfrac1{\sqrt2}|00\rangle + \tfrac1{\sqrt2}|10\rangle\).`,
              String.raw`Probabilities: 00 and 10 each \(\tfrac12\); 01 and 11 never.`,
              String.raw`Amplitudes needed: 1 qubit 2, 2 qubits 4, 10 qubits \(2^{10} = 1024\), 50 qubits \(2^{50} \approx 1.1 \times 10^{15}\).`,
            ],
            why: [
              'write each qubit’s amplitudes in order (0 first, then 1)',
              'multiply every amplitude of the first qubit by every amplitude of the second',
              'drop the zero terms and label each surviving amplitude with its bit string',
              'square each amplitude: (1/√2)² = 1/2',
              'each extra qubit doubles the count; at 16 bytes per complex number, 50 qubits need about 18 petabytes of memory to store exactly',
            ],
            answer: String.raw`\(|+\rangle\otimes|0\rangle = \tfrac1{\sqrt2}(|00\rangle + |10\rangle)\). States you can build like this are called product states; states you cannot build like this are entangled.`,
          },
        },
      ],
    },
  ],
  sources: ['Dirac, P. A. M. (1939). A new notation for quantum mechanics. Mathematical Proceedings of the Cambridge Philosophical Society 35(3).', 'Nielsen & Chuang (2010), section 2.1.7.'],
  related: ['quantum/core/qubits-and-measurement', 'quantum/core/entanglement'],
}

export default guide
