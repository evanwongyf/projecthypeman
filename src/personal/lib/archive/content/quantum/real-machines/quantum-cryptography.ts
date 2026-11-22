import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Quantum computing both threatens cryptography and offers new kinds of it. Shor’s algorithm would break the public-key systems (RSA, Diffie–Hellman, elliptic curves) that secure web traffic, messaging and software updates. The main defence is not quantum at all: post-quantum cryptography, new classical algorithms built on problems believed hard even for quantum computers. Quantum key distribution offers a physics-based alternative for special links.',
  nutshell: [
    '**Broken by Shor**: RSA, Diffie–Hellman, ECDH, ECDSA. **Weakened by Grover**: symmetric ciphers and hashes (AES-128 → ~64-bit security), fixed by doubling key sizes (AES-256).',
    '**Harvest now, decrypt later**: data recorded today could be read once a large quantum computer exists, so long-lived secrets need protection now.',
    'NIST standardised **ML-KEM** (Kyber) for key exchange and **ML-DSA** (Dilithium) and **SLH-DSA** (SPHINCS+) for signatures in 2024; browsers already use hybrid ML-KEM key exchange.',
    '**BB84** quantum key distribution reveals eavesdroppers through measurement disturbance.',
  ],
  sections: [
    {
      id: 'grover-keys',
      title: 'How Grover affects key lengths',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{quantum work} \approx \sqrt{2^{k}} = 2^{k/2}`,
          caption: 'Brute-forcing a k-bit symmetric key with Grover’s algorithm.',
          plain: 'A classical brute-force attack tries keys one by one, up to 2ᵏ of them. Grover finds the key in about the square root of that, which halves the exponent. So a 128-bit key offers about 64-bit security against a quantum attacker, and a 256-bit key about 128-bit, which is still far beyond reach. In practice Grover parallelises badly and each step is slow, so the real threat is smaller still.',
          where: [{ sym: 'k', def: 'key length in bits' }],
          syntax: [{ sym: String.raw`\sqrt{2^k} = 2^{k/2}`, say: 'a square root halves an exponent' }],
          worked: {
            title: 'AES-128 versus AES-256',
            steps: [
              String.raw`AES-128: classical \(2^{128} \approx 3.4\times10^{38}\) trials; Grover \(2^{64} \approx 1.8\times10^{19}\) iterations.`,
              String.raw`At an optimistic \(10^6\) Grover iterations per second on one machine: \(1.8\times10^{19}/10^6 = 1.8\times10^{13}\) s \(\approx 580{,}000\) years.`,
              String.raw`AES-256: \(2^{128}\) Grover iterations, astronomically beyond any machine.`,
            ],
            why: [
              'halve the exponent to get the Grover cost',
              'divide work by speed, then divide by about 3.15 × 10⁷ seconds per year',
              'doubling the key length restores the full classical safety margin',
            ],
            answer: String.raw`Symmetric cryptography survives with longer keys; it is public-key cryptography that must be replaced.`,
          },
        },
      ],
    },
    {
      id: 'bb84',
      title: 'BB84 quantum key distribution',
      blocks: [
        { t: 'steps', items: [
          { title: 'Alice sends', body: 'For each bit she randomly chooses a basis: Z (|0⟩, |1⟩) or X (|+⟩, |−⟩), and sends a photon in that state.' },
          { title: 'Bob measures', body: 'He randomly picks Z or X for each photon.' },
          { title: 'They compare bases (not bits)', body: 'Over a public channel; they keep only bits where the bases matched (about half).' },
          { title: 'They check for spies', body: 'They reveal a sample of kept bits. An eavesdropper who measures in the wrong basis half the time introduces about 25% errors in that sample.' },
          { title: 'Distil the key', body: 'Error correction and privacy amplification turn the rest into a shared secret key.' },
        ] },
        {
          t: 'math',
          tex: String.raw`\text{QBER}_{\text{Eve}} = P(\text{wrong basis}) \times P(\text{error}\mid\text{wrong basis}) = \tfrac12 \times \tfrac12 = 25\%`,
          caption: 'Error rate an intercept-and-resend eavesdropper causes in the kept bits.',
          plain: 'Eve does not know which basis Alice used. Half the time she guesses wrong, which disturbs the photon; then Bob, measuring in Alice’s basis, has a 50% chance of getting the wrong bit. Multiplying the two halves gives a 25% error rate that Alice and Bob can easily spot. Real channels have a few per cent of natural errors, so a QBER above about 11% means abort.',
          where: [{ sym: 'QBER', def: 'quantum bit error rate: fraction of kept bits that disagree' }],
          syntax: [{ sym: String.raw`P(A\mid B)`, say: 'probability of A given that B happened' }],
          worked: {
            title: 'Spotting Eve with a 200-bit sample',
            steps: [
              String.raw`Expected errors with Eve: \(0.25 \times 200 = 50\).`,
              String.raw`Without Eve, with 2% natural noise: \(0.02 \times 200 = 4\).`,
              String.raw`Observed: 47 errors (23.5%).`,
            ],
            why: [
              'apply the 25% rate to the sample size',
              'what an honest but imperfect channel would show',
              'far above the noise level and close to the eavesdropping prediction',
            ],
            answer: 'Abort and discard the key. QKD guarantees detection, not delivery: an attacker can always block the channel.',
          },
        },
      ],
    },
  ],
  sources: ['Bennett, C. H. & Brassard, G. (1984). Quantum cryptography: public key distribution and coin tossing.', 'NIST (2024). FIPS 203, 204 and 205: post-quantum cryptography standards.', 'Mosca, M. (2018). Cybersecurity in an era with quantum computers: will we be ready? IEEE Security & Privacy 16(5).'],
  related: ['quantum/algorithms/shor-and-qft', 'cybersecurity'],
}

export default guide
