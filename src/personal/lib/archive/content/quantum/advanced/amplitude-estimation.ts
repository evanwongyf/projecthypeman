import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Monte Carlo methods estimate averages by random sampling: the price of an option, the risk of a portfolio, the probability of an event. Their error falls like one over the square root of the number of samples. Quantum amplitude estimation (Brassard, Høyer, Mosca and Tapp, 2002) combines Grover’s rotation with phase estimation to make error fall like one over the number of queries: a quadratic speed-up that has drawn interest from banks.',
  nutshell: [
    'Encode the quantity as a probability a = sin²θ of a “good” outcome.',
    'The Grover operator rotates the state by 2θ; phase estimation measures θ, and hence a.',
    'Error ≈ **π/M** with M oracle calls, versus about **σ/√M** for classical Monte Carlo.',
    'Useful advantage needs fault-tolerant hardware; resource estimates for option pricing (Chakrabarti et al., 2021) need thousands of logical qubits.',
  ],
  sections: [
    {
      id: 'idea',
      title: 'From a probability to a phase',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\mathcal{A}|0\rangle = \sqrt{1-a}\,|\psi_0\rangle|0\rangle + \sqrt{a}\,|\psi_1\rangle|1\rangle, \qquad a = \sin^2\theta`,
          caption: 'An algorithm A that prepares a “good” outcome (last qubit 1) with probability a.',
          plain: 'Build a circuit whose last qubit comes out 1 with probability a, the quantity you want (for example, the discounted payoff of an option, scaled to between 0 and 1). Write a as sin²θ. The Grover operator built from this circuit acts like a rotation by angle 2θ, so its eigenvalues are e^(±2iθ). Phase estimation can read θ off those eigenvalues.',
          where: [
            { sym: String.raw`\mathcal{A}`, def: 'the state-preparation circuit' },
            { sym: 'a', def: 'the probability to estimate' },
            { sym: String.raw`\theta`, def: 'the angle with sin²θ = a' },
          ],
          syntax: [
            { sym: String.raw`\sin^2\theta`, say: '“sine squared theta”' },
          ],
          worked: {
            title: 'a = 0.25',
            steps: [
              String.raw`\(\sin^2\theta = 0.25 \Rightarrow \sin\theta = 0.5 \Rightarrow \theta = \pi/6\).`,
              String.raw`Grover eigenphases: \(e^{\pm 2i\theta} = e^{\pm i\pi/3}\).`,
              String.raw`As a fraction of a full turn: \(\varphi = 2\theta/(2\pi) = 1/6\) (or \(5/6\)).`,
              String.raw`Phase estimation gives \(\varphi\); then \(a = \sin^2(\pi\varphi)\) = \(\sin^2(\pi/6) = 0.25\).`,
            ],
            why: [
              'convert the probability to an angle',
              'the rotation angle doubles it',
              'express as the phase QPE measures',
              'invert to recover a',
            ],
            answer: 'Estimating a = 0.25 becomes estimating the phase 1/6, which QPE does with precision that improves linearly in the number of Grover applications.',
          },
        },
      ],
    },
    {
      id: 'speedup',
      title: 'The quadratic speed-up',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\varepsilon_{\text{classical}} \approx \frac{\sigma}{\sqrt{M}}, \qquad \varepsilon_{\text{quantum}} \approx \frac{\pi}{M}`,
          caption: 'Error after M samples (classical) or M oracle calls (quantum).',
          plain: 'Classical Monte Carlo needs four times as many samples to halve its error. Amplitude estimation needs only twice as many calls. For high precision, that is a huge difference.',
          where: [
            { sym: String.raw`\varepsilon`, def: 'estimation error' },
            { sym: String.raw`\sigma`, def: 'standard deviation of a single sample' },
            { sym: 'M', def: 'number of samples or oracle calls' },
          ],
          syntax: [
            { sym: String.raw`\varepsilon`, say: '“epsilon”: error' },
          ],
          worked: {
            title: 'Target error 0.001 for a probability near 0.5',
            steps: [
              String.raw`Classical: \(\sigma = \sqrt{0.5 \times 0.5} = 0.5\). \(M = (\sigma/\varepsilon)^2 = (0.5/0.001)^2 = 250{,}000\).`,
              String.raw`Quantum: \(M \approx \pi/\varepsilon = 3.14/0.001 \approx 3{,}142\).`,
              String.raw`Ratio: \(250{,}000/3{,}142 \approx 80\).`,
            ],
            why: [
              'invert the classical error formula',
              'invert the quantum one',
              'compare',
            ],
            answer: 'About 80 times fewer queries at this precision, and the gap widens as precision tightens. But each quantum query is a long, error-corrected circuit, so real speed-ups depend on hardware clock speeds and overheads.',
          },
        },
      ],
    },
  ],
  sources: [
    'Brassard, G., Høyer, P., Mosca, M., & Tapp, A. (2002). Quantum amplitude amplification and estimation. Contemporary Mathematics, 305, 53–74.',
    'Stamatopoulos, N. et al. (2020). Option pricing using quantum computers. Quantum, 4, 291.',
    'Chakrabarti, S. et al. (2021). A threshold for quantum advantage in derivative pricing. Quantum, 5, 463.',
  ],
  related: ['quantum/algorithms/grover', 'quantum/advanced/phase-estimation', 'finance/quant/derivatives-numerics'],
}

export default guide
