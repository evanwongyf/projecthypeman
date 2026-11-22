import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Quantum computing attracts enormous investment and enormous hype. The honest picture: a few applications have strong theoretical reasons to expect large speed-ups, many popular claims have none, and almost all useful applications need error-corrected machines that are still being built. This guide sorts the claims.',
  sections: [
    {
      id: 'scorecard',
      title: 'Applications scorecard',
      blocks: [
        { t: 'table', head: ['Application', 'Expected speed-up', 'Evidence', 'Needs error correction?'], rows: [
          ['Quantum chemistry and materials (catalysts, batteries, nitrogen fixation, high-temperature superconductors)', 'Potentially exponential for strongly correlated systems', 'Strong theory; resource estimates exist (e.g. FeMoco)', 'Yes'],
          ['Breaking RSA and elliptic curves', 'Exponential (Shor)', 'Proven algorithm', 'Yes, ~10⁶ physical qubits'],
          ['Simulating physics (lattice models, dynamics)', 'Exponential', 'Strong; early demos already interesting to physicists', 'Partly'],
          ['Unstructured search', 'Quadratic (Grover)', 'Proven optimal, but large overheads may cancel it', 'Yes'],
          ['Optimisation (logistics, finance)', 'Unclear; often none', 'Mostly heuristic; classical methods keep catching up', 'Probably'],
          ['Machine learning', 'Unclear', 'Several claimed exponential speed-ups were “dequantised” by classical algorithms (Tang 2019)', 'Probably'],
          ['Certified randomness, sensing, networking', 'Different kind of advantage', 'Demonstrated', 'Not always'],
        ] },
      ],
    },
    {
      id: 'judge',
      title: 'How to judge a claim',
      blocks: [
        { t: 'dodont', do: [
          'Ask what problem was solved and whether anyone needed the answer.',
          'Ask whether the comparison used the best classical algorithm and hardware.',
          'Look for error-corrected or logical-qubit results.',
          'Check resource estimates: qubits, error rates and run time for the useful version.',
        ], dont: [
          'Treat qubit counts as performance.',
          'Believe “quantum AI” or “quantum optimisation” speed-ups without benchmarks.',
          'Assume a speed-up for one problem transfers to others.',
          'Ignore the cost of loading classical data into a quantum state.',
        ] },
        { t: 'p', text: 'For students: the field needs physicists, computer scientists, engineers and mathematicians. Linear algebra, probability and programming (Python with Qiskit, Cirq or PennyLane) are the best preparation, and real devices are freely available in the cloud for small experiments.' },
      ],
    },
  ],
  sources: ['Hoefler, T., Häner, T. & Troyer, M. (2023). Disentangling hype from practicality: on realistically achieving quantum advantage. Communications of the ACM 66(5).', 'Tang, E. (2019). A quantum-inspired classical algorithm for recommendation systems. Proceedings of STOC.', 'Reiher, M. et al. (2017). Elucidating reaction mechanisms on quantum computers. PNAS 114(29).'],
  related: ['quantum/start-here', 'quantum/algorithms/variational-and-simulation'],
}

export default guide
