import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Qubits are fragile. Stray heat, vibration, electromagnetic noise and imperfect control slowly scramble their amplitudes and phases (decoherence), and every gate adds a little error. Because errors compound over thousands of gates, large algorithms are impossible without quantum error correction, which spreads one logical qubit across many physical ones and fixes errors faster than they build up.',
  nutshell: [
    '**T1** is how long a qubit holds energy (|1⟩ decays to |0⟩); **T2** is how long it holds phase. Superconducting qubits: roughly 100–500 µs; trapped ions: seconds or more.',
    'With per-gate fidelity F, a circuit of G gates succeeds with roughly \\(F^G\\).',
    'Error correction measures **syndromes** (parity checks) that reveal errors without revealing the data.',
    'Below a **threshold** error rate (about 1% for the surface code), adding more qubits makes logical errors exponentially rarer, as Google demonstrated in 2024.',
  ],
  sections: [
    {
      id: 'decay',
      title: 'Decoherence',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P_{1}(t) = e^{-t/T_1}, \qquad \text{coherence}(t) = e^{-t/T_2}`,
          caption: 'Exponential decay of the excited-state population and of phase coherence.',
          plain: 'A qubit prepared in |1⟩ does not stay there; after a time T1 only about 37% (1/e) of the chance of finding it in |1⟩ remains. Phase information fades similarly over T2. The useful number is how many gates fit inside these times: if a gate takes 50 ns and T2 is 100 µs, a few thousand gates can run before the phase is mostly lost.',
          where: [
            { sym: String.raw`P_1(t)`, def: 'probability the qubit is still in |1⟩ after time t' },
            { sym: String.raw`T_1`, def: 'energy relaxation time' },
            { sym: String.raw`T_2`, def: 'dephasing (coherence) time, always ≤ 2T1' },
            { sym: 'e', def: 'Euler’s number, about 2.718' },
          ],
          syntax: [
            { sym: String.raw`e^{-t/T_1}`, say: 'e to the power of minus t divided by T1; shrinks from 1 towards 0 as t grows' },
          ],
          worked: {
            title: 'How much survives a 20 µs circuit?',
            steps: [
              String.raw`\(T_1 = 200\ \mu s\), \(T_2 = 100\ \mu s\), circuit length \(t = 20\ \mu s\).`,
              String.raw`\(t/T_1 = 20/200 = 0.1\); \(e^{-0.1} \approx 0.905\).`,
              String.raw`\(t/T_2 = 20/100 = 0.2\); \(e^{-0.2} \approx 0.819\).`,
              String.raw`At 50 ns per gate: \(20\ \mu s / 50\ \text{ns} = 400\) gate steps.`,
            ],
            why: [
              'typical numbers for a good superconducting qubit',
              'divide the time by T1, then take e to the minus that',
              'phase decays faster because T2 is shorter',
              'convert both to the same units: 20,000 ns / 50 ns',
            ],
            answer: String.raw`About 90% of the energy and 82% of the phase coherence remain after 400 gate steps: fine for small demos, far too little for Shor’s algorithm, which needs billions of gates.`,
          },
        },
        {
          t: 'math',
          tex: String.raw`P_{\text{circuit}} \approx F^{\,G}`,
          caption: 'Rough success probability of a circuit of G gates, each with fidelity F (errors assumed independent).',
          plain: 'Each gate has a small chance of going wrong. For the whole circuit to be right, every gate must be right, so the chances multiply. Even 99.9% per gate collapses quickly once there are thousands of gates.',
          where: [
            { sym: 'F', def: 'fidelity per gate, e.g. 0.999 for 99.9%' },
            { sym: 'G', def: 'number of gates' },
          ],
          syntax: [{ sym: String.raw`F^{\,G}`, say: 'F multiplied by itself G times' }],
          worked: {
            title: '99.9% fidelity over 1,000 and 10,000 gates',
            steps: [
              String.raw`\(F = 0.999\), \(G = 1000\): \(0.999^{1000} = e^{1000\ln 0.999} \approx e^{-1.0005} \approx 0.37\).`,
              String.raw`\(G = 10{,}000\): \(e^{-10.005} \approx 0.000045\).`,
              String.raw`To reach 50% success at \(G = 10^6\) you need \(F^{10^6} = 0.5\), so \(1 - F \approx \ln2/10^6 \approx 7\times10^{-7}\).`,
            ],
            why: [
              'a big power is easiest via logarithms; ln 0.999 ≈ −0.0010005',
              'ten times as many gates puts ten times the exponent, shrinking the result enormously',
              'for small errors, F^G ≈ e^{−G(1−F)}; solve for the error per gate',
            ],
            answer: String.raw`Physical gates today reach about 99.5–99.9%, but useful algorithms need error rates near one in a million or better per logical operation, a gap only error correction can close.`,
          },
        },
      ],
    },
    {
      id: 'codes',
      title: 'Error-correcting codes',
      blocks: [
        {
          t: 'math',
          tex: String.raw`p_{\text{logical}} \approx 3p^2 - 2p^3 \quad (\text{3-qubit repetition code}), \qquad p_L \approx A\left(\frac{p}{p_{\text{th}}}\right)^{(d+1)/2} \ (\text{surface code})`,
          caption: 'Logical error rates: the simplest code, and the surface code of distance d.',
          plain: 'The three-qubit code stores |0⟩ as |000⟩ and |1⟩ as |111⟩ (with superpositions carried along). Parity checks find a single flipped qubit and fix it; it only fails if two or three flip, which is much rarer than one flipping when p is small. The surface code generalises this to a grid; its distance d is how many errors it takes to fool it. Below the threshold p_th, each increase of d by 2 divides the logical error rate by roughly p_th/p.',
          where: [
            { sym: 'p', def: 'physical error probability per qubit per round' },
            { sym: String.raw`p_{\text{th}}`, def: 'the threshold, about 1% for the surface code' },
            { sym: 'd', def: 'code distance (3, 5, 7 …); uses about 2d² physical qubits' },
            { sym: 'A', def: 'a constant around 0.1' },
          ],
          syntax: [
            { sym: String.raw`3p^2`, say: 'three ways for exactly two of three qubits to fail' },
            { sym: String.raw`(d+1)/2`, say: 'the number of errors needed to cause a logical failure' },
          ],
          worked: {
            title: 'How much do codes help?',
            steps: [
              String.raw`Repetition code with \(p = 0.01\): \(3(0.0001) - 2(0.000001) = 0.000298\).`,
              String.raw`Surface code, \(p = 0.001\), \(p_{\text{th}} = 0.01\), \(A = 0.1\): ratio \(p/p_{\text{th}} = 0.1\).`,
              String.raw`\(d = 3\): \(0.1 \times 0.1^{2} = 10^{-3}\). \(d = 7\): \(0.1\times0.1^4 = 10^{-5}\). \(d = 15\): \(0.1\times0.1^8 = 10^{-9}\).`,
              String.raw`Physical qubits for \(d = 15\): about \(2 \times 15^2 = 450\) per logical qubit.`,
            ],
            why: [
              'the code fails if two or three flip; it reduced 1% to 0.03%',
              'the further below threshold, the stronger the suppression',
              'each step of 2 in d multiplies the exponent by one more factor of 0.1',
              'data qubits plus the measurement qubits that check them',
            ],
            answer: String.raw`Ten times below threshold, about 450 physical qubits buy a logical qubit with a one-in-a-billion error rate. That overhead is why “a million physical qubits” is quoted for breaking RSA.`,
          },
        },
      ],
    },
  ],
  sources: ['Shor, P. W. (1995). Scheme for reducing decoherence in quantum computer memory. PRA 52.', 'Fowler, A. G. et al. (2012). Surface codes: towards practical large-scale quantum computation. PRA 86.', 'Google Quantum AI (2025). Quantum error correction below the surface code threshold. Nature 638.'],
  related: ['quantum/real-machines/hardware', 'quantum/real-machines/utility'],
}

export default guide
