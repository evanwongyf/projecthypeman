import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The most promising use of quantum computers is the one Richard Feynman proposed in 1981: simulating quantum systems such as molecules, catalysts, batteries and superconductors. The central quantity is energy, described by a Hamiltonian. This guide covers how energies are estimated (phase estimation on future machines, variational methods on today’s) and why classical computers find these problems so hard.',
  nutshell: [
    'A molecule’s electrons need amplitudes for every arrangement; the number grows exponentially with size.',
    '**Phase estimation** reads an energy E from the phase \\(e^{-iEt}\\) a state picks up over time.',
    '**VQE** (variational quantum eigensolver): a quantum circuit prepares a trial state, measures its energy, and a classical optimiser tweaks the circuit to lower it.',
    'Honest status: no variational algorithm has yet beaten the best classical methods on a useful problem; error-corrected phase estimation is the likelier route to chemistry advantage.',
  ],
  sections: [
    {
      id: 'expectation',
      title: 'Measuring an energy',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\langle H\rangle = \langle\psi|H|\psi\rangle = \sum_j c_j\,\langle\psi|P_j|\psi\rangle`,
          caption: 'The average energy of a state ψ, written as a weighted sum of easy-to-measure Pauli terms P_j.',
          plain: 'You cannot measure a molecule’s energy in one go on a quantum computer. Instead the Hamiltonian is split into many simple pieces (products of X, Y and Z on a few qubits), each with a known weight c. Each piece is measured many times to get its average, and the weighted averages are added. VQE repeats this for each trial circuit and keeps the circuit that gives the lowest total, because nature’s ground state has the lowest energy (the variational principle).',
          where: [
            { sym: 'H', def: 'the Hamiltonian (energy operator); not the Hadamard gate here' },
            { sym: String.raw`|\psi\rangle`, def: 'the trial state prepared by the circuit' },
            { sym: String.raw`c_j`, def: 'the weight of term j, computed classically from the molecule' },
            { sym: String.raw`P_j`, def: 'a Pauli string such as Z⊗Z or X⊗I' },
          ],
          syntax: [
            { sym: String.raw`\langle H\rangle`, say: 'the expectation value (average) of H' },
            { sym: String.raw`\langle\psi|H|\psi\rangle`, say: 'sandwich H between the state’s bra and ket: the average of H in that state' },
          ],
          worked: {
            title: 'A two-term toy Hamiltonian',
            steps: [
              String.raw`\(H = 0.5\,Z_1Z_2 - 0.3\,X_1X_2\). Prepare the Bell state \(\tfrac1{\sqrt2}(|00\rangle + |11\rangle)\).`,
              String.raw`Measure \(Z_1Z_2\) 1,000 times: outcomes 00 and 11 both give \(+1\) (the product of the two \(\pm1\) results), so the average is \(+1\).`,
              String.raw`Measure \(X_1X_2\) (apply H to both qubits, then read): this Bell state gives \(+1\) every time, average \(+1\).`,
              String.raw`\(\langle H\rangle = 0.5\times1 - 0.3\times1 = 0.2\).`,
              String.raw`Try \(\tfrac1{\sqrt2}(|01\rangle - |10\rangle)\): \(\langle Z_1Z_2\rangle = -1\), \(\langle X_1X_2\rangle = -1\), so \(\langle H\rangle = -0.5 + 0.3 = -0.2\). Lower, so better.`,
            ],
            why: [
              'write the Hamiltonian as weighted Pauli terms and pick a trial state',
              'Z reads +1 for 0 and −1 for 1; when the qubits always agree, the product is always +1',
              'H on both qubits turns an X measurement into an ordinary Z read-out; this Bell state is also an X-eigenstate with value +1',
              'combine each average with its weight',
              'the variational principle says lower energy is closer to the true ground state, so the optimiser prefers this state',
            ],
            answer: String.raw`The second state has energy −0.2 versus +0.2. A real VQE does this with thousands of terms and millions of shots, which is its main practical bottleneck.`,
          },
        },
      ],
    },
    {
      id: 'phase-estimation',
      title: 'Phase estimation',
      blocks: [
        {
          t: 'math',
          tex: String.raw`U|u\rangle = e^{2\pi i\varphi}|u\rangle \;\Rightarrow\; \text{measure } \tilde\varphi \approx \varphi \text{ to } n \text{ bits with } 2^n - 1 \text{ uses of } U`,
          caption: 'Quantum phase estimation reads the eigenvalue phase φ of a unitary U.',
          plain: 'If a state is an eigenvector of a gate, the gate only multiplies it by a phase, an arrow turned by a fraction φ of a full circle. Phase estimation uses a register of n “counting” qubits that control 1, 2, 4, 8 … applications of U, so the phase is recorded at doubling speeds, and then an inverse QFT turns those phases into the binary digits of φ. For chemistry, U is “let the molecule evolve for time t”, and φ gives the energy.',
          where: [
            { sym: 'U', def: 'a unitary, e.g. time evolution of the molecule' },
            { sym: String.raw`|u\rangle`, def: 'an eigenstate of U' },
            { sym: String.raw`\varphi`, def: 'the phase, a number between 0 and 1 (a fraction of a turn)' },
            { sym: 'n', def: 'number of counting qubits = binary digits of precision' },
          ],
          syntax: [
            { sym: String.raw`\Rightarrow`, say: '“implies” or “so we can”' },
            { sym: String.raw`\tilde\varphi`, say: '“phi tilde”: the estimate of φ' },
          ],
          worked: {
            title: 'Reading φ = 0.625 with 3 counting qubits',
            steps: [
              String.raw`\(0.625 = \tfrac58 = 0.101_2\) in binary (½ + 0 + ⅛).`,
              String.raw`Counting qubits control \(U^1, U^2, U^4\): their phases are \(\varphi, 2\varphi, 4\varphi\) = 0.625, 1.25, 2.5 turns.`,
              String.raw`Dropping whole turns: 0.625, 0.25, 0.5 turns.`,
              String.raw`The inverse QFT maps these to the bit string 101, read out with certainty because φ has exactly 3 binary digits.`,
              String.raw`Uses of U: \(1 + 2 + 4 = 7 = 2^3 - 1\).`,
            ],
            why: [
              'three bits after the binary point can represent eighths exactly',
              'controlled-U applied k times multiplies the phase by k',
              'full turns change nothing, so only the fractional part matters',
              'the inverse QFT is designed to turn this pattern of phases into the binary digits',
              'each extra bit of precision doubles the number of U applications, so precision is expensive',
            ],
            answer: String.raw`The register reads 101, giving \(\tilde\varphi = 0.625\) exactly; if φ had more digits, the result would be the nearest 3-bit value with high probability.`,
          },
        },
      ],
    },
  ],
  sources: ['Feynman, R. P. (1982). Simulating physics with computers.', 'Peruzzo, A. et al. (2014). A variational eigenvalue solver on a photonic quantum processor. Nature Communications 5.', 'Kitaev, A. Y. (1995). Quantum measurements and the Abelian stabilizer problem. arXiv:quant-ph/9511026.', 'Lee, S. et al. (2023). Evaluating the evidence for exponential quantum advantage in ground-state quantum chemistry. Nature Communications 14.'],
  related: ['quantum/real-machines/utility', 'quantum/algorithms/shor-and-qft'],
}

export default guide
