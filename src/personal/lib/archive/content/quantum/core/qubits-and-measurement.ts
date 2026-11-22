import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A qubit is any physical system with two distinguishable states, the spin of an electron, two energy levels of an ion, the direction of a current in a superconducting loop, that we label |0⟩ and |1⟩. Unlike a bit, it can be in a superposition of both. When you measure it you always get an ordinary 0 or 1, at random, with probabilities set by its amplitudes.',
  nutshell: [
    'A qubit state is \\(\\alpha|0\\rangle + \\beta|1\\rangle\\) with complex amplitudes and \\(|\\alpha|^2 + |\\beta|^2 = 1\\).',
    '**Born rule**: measurement gives 0 with probability \\(|\\alpha|^2\\) and 1 with probability \\(|\\beta|^2\\).',
    'After measurement the qubit **becomes** the state you saw; the superposition is gone.',
    'Every qubit state is a point on the **Bloch sphere**, set by two angles.',
  ],
  sections: [
    {
      id: 'born',
      title: 'The Born rule',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(0) = |\alpha|^2, \qquad P(1) = |\beta|^2, \qquad |\alpha|^2 + |\beta|^2 = 1`,
          caption: 'Measurement probabilities of a qubit α|0⟩ + β|1⟩.',
          plain: 'Each amplitude is like an arrow; the length of the arrow, squared, is the chance of seeing that outcome. Because something must happen, the chances add up to 1. The arrows’ directions (phases) do not affect this measurement directly, but they decide how amplitudes add together when gates act before measurement.',
          where: [
            { sym: 'P(0)', def: 'the probability of reading 0' },
            { sym: String.raw`\alpha,\ \beta`, def: 'the amplitudes of |0⟩ and |1⟩' },
          ],
          syntax: [
            { sym: 'P( )', say: '“the probability of”' },
            { sym: String.raw`|\alpha|^2`, say: 'the size of α, squared; for a complex α = a + bi this is a² + b²' },
          ],
          worked: {
            title: 'A biased qubit, measured 1,000 times',
            steps: [
              String.raw`State: \(\tfrac{1}{2}|0\rangle + \tfrac{\sqrt3}{2}i\,|1\rangle\). So \(\alpha = 0.5\) and \(\beta = 0.866i\).`,
              String.raw`\(P(0) = 0.5^2 = 0.25\).`,
              String.raw`\(P(1) = |0.866i|^2 = 0^2 + 0.866^2 = 0.75\).`,
              String.raw`Check: \(0.25 + 0.75 = 1\).`,
              String.raw`Prepare and measure 1,000 fresh copies: expect about \(0.25 \times 1000 = 250\) zeros and 750 ones.`,
            ],
            why: [
              'read the amplitudes off the state; β is purely imaginary (a = 0, b = 0.866)',
              'square the size of α',
              'the i only gives β a direction; its size is still 0.866, and the square is 0.75',
              'the total must be 1, which confirms the state is valid',
              'one measurement gives a single random bit; only repeating on fresh copies reveals the probabilities',
            ],
            answer: String.raw`25% zeros and 75% ones. A single run tells you almost nothing; quantum programs are run hundreds or thousands of times (“shots”) to estimate probabilities.`,
          },
        },
        { t: 'callout', tone: 'note', title: 'Measurement is destructive', text: 'If you measured 1, the qubit is now |1⟩, and measuring again gives 1 every time. You cannot recover α and β from one qubit. This is also why you cannot copy an unknown qubit (the no-cloning theorem).' },
      ],
    },
    {
      id: 'bloch',
      title: 'The Bloch sphere',
      blocks: [
        {
          t: 'math',
          tex: String.raw`|\psi\rangle = \cos\frac{\theta}{2}\,|0\rangle + e^{i\varphi}\sin\frac{\theta}{2}\,|1\rangle`,
          caption: 'Any one-qubit state (up to an unobservable global phase) as a point on a sphere: θ from the north pole, φ around the equator.',
          plain: 'Picture a globe. The north pole is |0⟩ and the south pole is |1⟩. The angle θ says how far down from the north pole the state sits: the further down, the more likely a measurement gives 1. The angle φ says where around the globe it sits, which is the relative phase between the two amplitudes. Points on the equator are 50/50 superpositions that differ only in phase, like |+⟩ (φ = 0) and |−⟩ (φ = π). One-qubit gates are rotations of this globe.',
          where: [
            { sym: String.raw`\theta`, def: 'theta: polar angle from the north pole, 0 to π (180°)' },
            { sym: String.raw`\varphi`, def: 'phi: azimuthal angle around the vertical axis, 0 to 2π' },
            { sym: String.raw`e^{i\varphi}`, def: 'the relative phase of the |1⟩ amplitude' },
          ],
          syntax: [
            { sym: String.raw`\cos\frac{\theta}{2}`, say: 'cosine of half of θ; the halves come from mapping a sphere onto two amplitudes' },
            { sym: String.raw`\varphi`, say: 'the Greek letter phi' },
          ],
          worked: {
            title: 'Where |+⟩, |−⟩ and |i⟩ sit, and a tilted state',
            steps: [
              String.raw`\(\theta = \pi/2\) (90°), \(\varphi = 0\): \(\cos 45° = \sin 45° = 0.707\), \(e^{0} = 1\), giving \(0.707|0\rangle + 0.707|1\rangle = |+\rangle\).`,
              String.raw`\(\theta = \pi/2\), \(\varphi = \pi\): \(e^{i\pi} = -1\), giving \(0.707|0\rangle - 0.707|1\rangle = |-\rangle\).`,
              String.raw`\(\theta = \pi/2\), \(\varphi = \pi/2\): \(e^{i\pi/2} = i\), giving \(0.707|0\rangle + 0.707i|1\rangle\), called \(|i\rangle\).`,
              String.raw`\(\theta = 60°\): \(\cos 30° = 0.866\), \(\sin 30° = 0.5\); \(P(0) = 0.75\), \(P(1) = 0.25\) for any φ.`,
            ],
            why: [
              'the equator is halfway down; half of 90° is 45°, and cos and sin of 45° are equal',
              'going half way round the equator flips the sign of the |1⟩ amplitude',
              'a quarter of the way round multiplies the |1⟩ amplitude by i',
              'probabilities depend only on θ (the latitude); φ only matters for later interference',
            ],
            answer: String.raw`Latitude sets the measurement odds; longitude is the phase. \(|+\rangle\), \(|-\rangle\), \(|i\rangle\) all give 50/50 in a Z measurement yet are different states, distinguishable by first rotating the sphere.`,
          },
        },
      ],
    },
  ],
  sources: ['Born, M. (1926). Zur Quantenmechanik der Stoßvorgänge. Zeitschrift für Physik 37.', 'Nielsen & Chuang (2010), sections 1.2 and 2.2.'],
  related: ['quantum/core/gates-and-circuits', 'quantum/maths/dirac-and-tensors'],
}

export default guide
