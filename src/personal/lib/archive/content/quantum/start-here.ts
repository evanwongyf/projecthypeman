import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'A quantum computer is not a faster ordinary computer. It is a different kind of machine that stores information in qubits, which follow the rules of quantum mechanics. For a small set of problems, simulating molecules and materials, factoring large numbers, some kinds of search, those rules allow algorithms that no ordinary computer can match. For most everyday tasks, they offer nothing. This shelf builds the subject from scratch, maths included, so you can see exactly where the power comes from.',
  nutshell: [
    'A **bit** is 0 or 1. A **qubit** has two **amplitudes**, one for 0 and one for 1. These are numbers that can be negative or even complex, and their squares give probabilities.',
    'The power comes from three ingredients together: **superposition** (many amplitudes at once), **interference** (amplitudes adding up or cancelling) and **entanglement** (qubits whose states can only be described jointly).',
    '**Measurement** gives an ordinary bit and destroys the superposition. A quantum algorithm is a choreography that makes wrong answers cancel and right answers reinforce before you look.',
    'Today’s machines have hundreds to a few thousand noisy physical qubits. Breaking real encryption or simulating big molecules needs **error-corrected logical qubits**, which are only now being demonstrated in small numbers.',
  ],
  sections: [
    {
      id: 'idea',
      title: 'The idea in one picture',
      blocks: [
        { t: 'p', text: 'Imagine a maze with a million paths and one exit. A classical computer tries paths one at a time (or a few thousand in parallel). A common myth says a quantum computer “tries all paths at once”. It does hold an amplitude for every path, but **measuring gives you just one random path**, which is useless on its own. The real trick is to arrange the computation so that the amplitudes of wrong paths **cancel each other out** (like waves meeting crest to trough) while the right path’s amplitude **builds up**. Then a measurement probably shows the right answer. Only some problems have the structure that allows this choreography, which is why quantum computers help with some problems and not others.' },
        { t: 'cards', cols: 3, items: [
          { title: 'Superposition', body: 'A qubit’s state is a combination of 0 and 1, with an amplitude for each. n qubits have 2ⁿ amplitudes: 300 qubits have more amplitudes than there are atoms in the observable universe.' },
          { title: 'Interference', body: 'Amplitudes can be negative, so they can cancel when they combine. This is the engine of every quantum algorithm.' },
          { title: 'Entanglement', body: 'Qubits can share a state that cannot be split into separate states for each qubit. It lets 2ⁿ amplitudes be correlated in ways that classical bits cannot imitate efficiently.' },
        ] },
      ],
    },
    {
      id: 'myths',
      title: 'Myths and facts',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { tag: 'Myth', title: '“It tries every answer in parallel”', body: 'It holds amplitudes for every answer, but you only ever read out one. Speed-ups come from interference, not from reading all answers.' },
          { tag: 'Myth', title: '“It will replace laptops”', body: 'Quantum computers will be specialised co-processors, reached through the cloud, for a narrow set of tasks.' },
          { tag: 'Myth', title: '“It speeds up everything exponentially”', body: 'Exponential speed-ups are known for only a few problems (simulation, factoring). Search gets a square-root speed-up. Many problems get none.' },
          { tag: 'Fact', title: 'It threatens today’s public-key encryption', body: 'A large error-corrected machine running Shor’s algorithm would break RSA and elliptic-curve cryptography. That is why governments are already moving to post-quantum cryptography.' },
          { tag: 'Fact', title: 'Simulation is the most natural use', body: 'Richard Feynman’s 1981 insight: nature is quantum, so simulating molecules and materials is natural for a quantum machine.' },
          { tag: 'Fact', title: 'Error correction is the hard part', body: 'Qubits are fragile. Thousands of physical qubits may be needed per reliable logical qubit, depending on the error rate.' },
        ] },
      ],
    },
    {
      id: 'route',
      title: 'A route through the shelf',
      blocks: [
        { t: 'links', items: [
          { path: 'quantum/maths/complex-numbers', note: 'Start here if “i” or “phase” is unfamiliar' },
          { path: 'quantum/maths/vectors-and-matrices', note: 'Gates are matrices; states are vectors' },
          { path: 'quantum/maths/dirac-and-tensors', note: 'The notation every textbook uses' },
          { path: 'quantum/core/qubits-and-measurement' },
          { path: 'quantum/core/gates-and-circuits' },
          { path: 'quantum/core/entanglement' },
          { path: 'quantum/algorithms/grover' },
          { path: 'quantum/algorithms/shor-and-qft' },
          { path: 'quantum/real-machines/utility', note: 'The honest summary' },
        ] },
      ],
    },
  ],
  sources: [
    'Nielsen, M. A. & Chuang, I. L. (2010). Quantum Computation and Quantum Information (10th anniversary ed.). Cambridge University Press.',
    'Aaronson, S. (2013). Quantum Computing Since Democritus. Cambridge University Press.',
    'Feynman, R. P. (1982). Simulating physics with computers. International Journal of Theoretical Physics 21.',
    'Preskill, J. (2018). Quantum computing in the NISQ era and beyond. Quantum 2, 79.',
  ],
}

export default guide
