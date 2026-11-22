import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A state vector describes a qubit we know everything about. Real qubits are noisy and entangled with their surroundings, so we often have only probabilities over possible states. The density matrix describes both cases with one object, and lets us model noise as “channels” that act on it.',
  nutshell: [
    '**Density matrix**: ρ = Σᵢ pᵢ |ψᵢ⟩⟨ψᵢ|. Pure states have Tr ρ² = 1; mixed states have Tr ρ² < 1.',
    'Off-diagonal entries (**coherences**) carry the quantum superposition; noise shrinks them.',
    '**Partial trace** gives the state of part of a system; a qubit in a Bell pair alone looks maximally mixed.',
    'Common noise channels: **bit flip**, **phase flip** (dephasing), **depolarising**, **amplitude damping**.',
  ],
  sections: [
    {
      id: 'rho',
      title: 'Pure and mixed states',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\rho = \sum_i p_i\,|\psi_i\rangle\langle\psi_i|, \qquad \operatorname{Tr}\rho = 1, \qquad \text{purity } \gamma = \operatorname{Tr}(\rho^2)`,
          caption: 'The density matrix as a probability-weighted mixture of pure states, and its purity.',
          plain: 'Each pure state |ψ⟩ gives a matrix |ψ⟩⟨ψ| (the column vector times its conjugate row). If the qubit is in state ψᵢ with probability pᵢ, weight and add those matrices. The diagonal entries are the measurement probabilities in the 0/1 basis; the off-diagonal entries show how much genuine superposition there is. Purity is 1 for pure states and 1/2 for a completely random qubit.',
          where: [
            { sym: String.raw`\rho`, def: 'the density matrix' },
            { sym: String.raw`p_i`, def: 'probability of pure state ψᵢ' },
            { sym: String.raw`\operatorname{Tr}`, def: 'trace: sum of diagonal entries' },
          ],
          syntax: [
            { sym: String.raw`|\psi\rangle\langle\psi|`, say: '“ket psi bra psi”: an outer product, giving a matrix' },
            { sym: String.raw`\rho`, say: '“rho”' },
          ],
          worked: {
            title: '|+⟩ versus a 50/50 mixture of |0⟩ and |1⟩',
            steps: [
              String.raw`\(|+\rangle = \tfrac{1}{\sqrt2}(1, 1)^T\): \(\rho_+ = \tfrac12\begin{pmatrix}1&1\\1&1\end{pmatrix}\).`,
              String.raw`Mixture: \(\rho_m = \tfrac12|0\rangle\langle0| + \tfrac12|1\rangle\langle1| = \tfrac12\begin{pmatrix}1&0\\0&1\end{pmatrix}\).`,
              String.raw`Purity of \(\rho_+\): \(\rho_+^2 = \rho_+\), so \(\operatorname{Tr}\rho_+^2 = 1\).`,
              String.raw`Purity of \(\rho_m\): \(\rho_m^2 = \tfrac14 I\), trace \(= 0.5\).`,
            ],
            why: [
              'the outer product of |+⟩ with itself',
              'weight and add the two pure states',
              'a pure state squared is itself',
              'the fully mixed state has the minimum purity for a qubit',
            ],
            answer: 'Both give 50/50 results in the 0/1 basis, but |+⟩ has coherences (the 1/2 off-diagonals) and purity 1, while the mixture has none and purity 1/2. Measuring in the +/− basis tells them apart.',
          },
        },
      ],
    },
    {
      id: 'channels',
      title: 'Noise channels',
      blocks: [
        { t: 'table', head: ['Channel', 'Effect on ρ', 'Physical cause'], rows: [
          ['Bit flip (prob. p)', 'ρ → (1 − p)ρ + p XρX', 'Spurious X errors'],
          ['Phase flip / dephasing', 'ρ → (1 − p)ρ + p ZρZ; off-diagonals × (1 − 2p)', 'Fluctuating fields (T2 processes)'],
          ['Depolarising', 'ρ → (1 − p)ρ + p I/2', 'A generic model of random errors'],
          ['Amplitude damping', '|1⟩ decays towards |0⟩', 'Energy loss (T1)'],
        ] },
        {
          t: 'math',
          tex: String.raw`F = \langle\psi|\rho|\psi\rangle, \qquad \mathcal{E}_{\text{dep}}(\rho) = (1-p)\rho + p\,\frac{I}{2}`,
          caption: 'Fidelity of a noisy state ρ with the intended pure state ψ, and the depolarising channel.',
          plain: 'Fidelity measures how close the noisy state is to the one you wanted: 1 means identical. The depolarising channel replaces the state, with probability p, by a completely random one.',
          where: [
            { sym: 'F', def: 'fidelity (0 to 1)' },
            { sym: 'p', def: 'depolarising probability' },
            { sym: 'I/2', def: 'the maximally mixed qubit state' },
          ],
          syntax: [
            { sym: String.raw`\langle\psi|\rho|\psi\rangle`, say: '“psi, rho, psi”: the expected overlap' },
            { sym: String.raw`\mathcal{E}`, say: 'a channel (a noise process)' },
          ],
          worked: {
            title: '|+⟩ through a 20% depolarising channel',
            steps: [
              String.raw`\(\rho = 0.8\,|+\rangle\langle+| + 0.2 \times I/2\).`,
              String.raw`\(\langle+|\,|+\rangle\langle+|\,|+\rangle = 1\); \(\langle+|\,I/2\,|+\rangle = 1/2\).`,
              String.raw`\(F = 0.8 \times 1 + 0.2 \times 0.5 = 0.9\).`,
              String.raw`After ten such gates (assuming independent errors): the coherent part shrinks as \(0.8^{10} \approx 0.107\); \(F \approx 0.107 + 0.893 \times 0.5 \approx 0.55\).`,
            ],
            why: [
              'apply the channel',
              'overlap of each part with the target',
              'weight and add',
              'repeated depolarising leaves (1 − p)ⁿ of the original state; the rest is random',
            ],
            answer: 'One noisy gate gives fidelity 0.90; ten give about 0.55, close to the 0.5 of a random guess. This is why deep circuits need error correction.',
          },
        },
      ],
    },
    {
      id: 'partial',
      title: 'Partial trace: half of a Bell pair',
      blocks: [
        { t: 'p', text: 'For the Bell state (|00⟩ + |11⟩)/√2, the density matrix of qubit A alone is found by “tracing out” qubit B: summing over B’s basis states. The result is ρ_A = I/2, the maximally mixed state. A single qubit of a maximally entangled pair carries no information on its own: all its information is in its correlations with the partner. The more entangled two qubits are, the more mixed each looks alone, which is how entanglement is quantified (entanglement entropy).' },
      ],
    },
  ],
  sources: [
    'Nielsen, M. A., & Chuang, I. L. (2010). Quantum Computation and Quantum Information, chapters 2 and 8. Cambridge University Press.',
    'Preskill, J. (1998). Lecture Notes for Physics 229: Quantum Information and Computation, chapter 3. Caltech.',
  ],
  related: ['quantum/real-machines/noise-and-error-correction', 'quantum/core/entanglement', 'quantum/advanced/surface-code'],
}

export default guide
