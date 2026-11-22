import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Error correction is the route from today’s noisy machines to reliable quantum computing. The surface code is the leading scheme: qubits on a 2-D grid, simple local checks, and a high error threshold. This guide builds up from the three-qubit repetition code to the threshold theorem and the overhead arithmetic.',
  nutshell: [
    'Error correction measures **stabilisers** (parity checks) that reveal errors without revealing the data.',
    'The **code distance d** is the smallest number of physical errors that causes an undetected logical error.',
    'Below a **threshold** physical error rate (about 1% for the surface code), logical errors fall exponentially as d grows.',
    'A distance-d surface code uses about **2d² physical qubits** per logical qubit; in 2024 Google showed logical errors falling as d rose from 3 to 5 to 7.',
  ],
  sections: [
    {
      id: 'repetition',
      title: 'The three-qubit repetition code',
      blocks: [
        { t: 'table', head: ['Syndrome (Z₁Z₂, Z₂Z₃)', 'Most likely error', 'Fix'], rows: [
          ['(+1, +1)', 'None', '-'],
          ['(−1, +1)', 'Bit flip on qubit 1', 'X on qubit 1'],
          ['(−1, −1)', 'Bit flip on qubit 2', 'X on qubit 2'],
          ['(+1, −1)', 'Bit flip on qubit 3', 'X on qubit 3'],
        ], caption: 'Encode |0⟩ → |000⟩ and |1⟩ → |111⟩. The parity checks Z₁Z₂ and Z₂Z₃ locate a single flip without measuring the encoded value.' },
        {
          t: 'math',
          tex: String.raw`p_L = 3p^2(1-p) + p^3 = 3p^2 - 2p^3`,
          caption: 'Logical error rate of the repetition code with independent bit flips of probability p.',
          plain: 'Majority voting fails only if two or three of the three qubits flip. Add the probabilities of exactly two flips (three ways) and all three flips. For small p, this is about 3p², much smaller than p.',
          where: [
            { sym: 'p', def: 'physical error probability per qubit' },
            { sym: String.raw`p_L`, def: 'logical error probability' },
          ],
          syntax: [
            { sym: String.raw`3p^2(1-p)`, say: 'three ways to choose which two qubits flip, times the chance' },
          ],
          worked: {
            title: 'p = 0.01',
            steps: [
              String.raw`\(3p^2 = 3 \times 0.0001 = 0.0003\).`,
              String.raw`\(2p^3 = 2 \times 0.000001 = 0.000002\).`,
              String.raw`\(p_L = 0.0003 - 0.000002 = 0.000298\).`,
            ],
            why: [
              'the two-flip term dominates',
              'a tiny correction',
              'subtract',
            ],
            answer: 'Logical error rate about 0.03%, over 30 times better than a bare qubit. But this code only handles bit flips; the surface code handles both bit and phase flips.',
          },
        },
      ],
    },
    {
      id: 'threshold',
      title: 'The threshold and scaling',
      blocks: [
        {
          t: 'math',
          tex: String.raw`p_L \approx A\left(\frac{p}{p_{\text{th}}}\right)^{\lfloor (d+1)/2 \rfloor}`,
          caption: 'The approximate logical error rate per round of a distance-d surface code.',
          plain: 'If the physical error rate p is below the threshold p_th, the ratio p/p_th is less than 1, and raising it to a higher power makes it much smaller. Each step up in distance (by 2) multiplies the logical error by about p/p_th again: exponential suppression. Above threshold, adding qubits makes things worse.',
          where: [
            { sym: 'p', def: 'physical error rate per operation' },
            { sym: String.raw`p_{\text{th}}`, def: 'threshold, about 0.01 for the surface code' },
            { sym: 'd', def: 'code distance (odd)' },
            { sym: 'A', def: 'a constant around 0.1' },
          ],
          syntax: [
            { sym: String.raw`\lfloor x \rfloor`, say: '“floor”: round down' },
          ],
          worked: {
            title: 'p = 0.001 (ten times below threshold)',
            steps: [
              String.raw`\(p/p_{\text{th}} = 0.1\), \(A = 0.1\).`,
              String.raw`\(d = 11\): exponent \(\lfloor 12/2 \rfloor = 6\). \(p_L = 0.1 \times 0.1^6 = 10^{-7}\).`,
              String.raw`For \(p_L = 10^{-12}\): need \(0.1^{k} = 10^{-11}\), \(k = 11\), so \(d = 21\).`,
              String.raw`Physical qubits for d = 21: about \(2d^2 - 1 = 2 \times 441 - 1 = 881\).`,
            ],
            why: [
              'how far below threshold the hardware is',
              'distance 11 gives exponent 6',
              'solve for the distance needed by a long algorithm',
              'data qubits plus measurement qubits',
            ],
            answer: 'About 880 physical qubits per logical qubit for error rates near 10⁻¹². A machine with 1,000 logical qubits would need close to a million physical qubits, which is why resource estimates for Shor’s algorithm run to the millions.',
          },
        },
        { t: 'callout', tone: 'fact', title: 'Below threshold (2024)', text: 'Google Quantum AI reported in 2024 (published in Nature, 2025) a surface-code memory on its Willow processor where the logical error rate fell by a factor of about 2.1 each time the distance increased by 2 (from 3 to 5 to 7): the first clear demonstration of exponential suppression below threshold.' },
      ],
    },
  ],
  sources: [
    'Fowler, A. G., Mariantoni, M., Martinis, J. M., & Cleland, A. N. (2012). Surface codes: Towards practical large-scale quantum computation. Physical Review A, 86, 032324.',
    'Google Quantum AI and Collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920–926.',
    'Gidney, C., & Ekerå, M. (2021). How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits. Quantum, 5, 433.',
  ],
  related: ['quantum/real-machines/noise-and-error-correction', 'quantum/advanced/density-matrices-and-noise', 'quantum/real-machines/hardware'],
}

export default guide
