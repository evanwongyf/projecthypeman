import type { ArchiveNode } from '../topics'

// Quantum computing from zero: the maths it needs (complex numbers, vectors, matrices, Dirac
// notation), qubits and measurement, gates and circuits, entanglement, the main algorithms,
// noise and error correction, the hardware, quantum cryptography, and an honest account of
// what quantum computers are and are not useful for. Every formula comes with a plain story,
// its symbols spelled out, and a worked example whose every step gives its reason.

export const QUANTUM: ArchiveNode = {
  slug: 'quantum',
  title: 'Quantum computing',
  blurb: 'Qubits, superposition, gates, entanglement, Grover and Shor, error correction and hardware, built up from the maths with step-by-step worked examples, and a clear-eyed look at what quantum computers are actually good for.',
  glyph: '⟨ψ|',
  color: 'color-mix(in srgb, var(--sky) 60%, var(--lavender))',
  tags: ['quantum', 'qubit', 'superposition', 'entanglement', 'quantum gates', 'grover', 'shor', 'quantum computing', 'dirac notation', 'linear algebra'],
  children: [
    { slug: 'start-here', title: 'Start here: what a quantum computer is (and is not)', glyph: '★', blurb: 'The big idea in plain words, the three ingredients (superposition, interference, entanglement), myths, and a route through the shelf.', minutes: 12, tags: ['overview', 'myths', 'roadmap'] },
    {
      slug: 'maths',
      title: 'The maths you need',
      glyph: '∑',
      group: 'Foundations',
      blurb: 'Complex numbers, vectors and matrices, Dirac (bra-ket) notation and tensor products, each from scratch with worked examples.',
      children: [
        { slug: 'complex-numbers', title: 'Complex numbers and phases', blurb: 'i, the complex plane, magnitude, conjugates, Euler’s formula and why phase is the secret ingredient of quantum computing.', minutes: 16, tags: ['complex numbers', 'imaginary', 'euler', 'phase', 'modulus', 'conjugate'] },
        { slug: 'vectors-and-matrices', title: 'Vectors, matrices and linear algebra', blurb: 'Column vectors, matrix-vector multiplication, inner products, unitary matrices and eigenvalues, the language of every quantum gate.', minutes: 18, tags: ['vectors', 'matrices', 'linear algebra', 'unitary', 'inner product', 'eigenvalues'] },
        { slug: 'dirac-and-tensors', title: 'Dirac notation and tensor products', blurb: 'Kets, bras, brackets and how two qubits combine into four amplitudes (and n qubits into 2ⁿ).', minutes: 15, tags: ['dirac', 'bra-ket', 'ket', 'tensor product', 'kronecker'] },
      ],
    },
    {
      slug: 'core',
      title: 'Qubits, gates and entanglement',
      glyph: '◎',
      group: 'Foundations',
      blurb: 'The core of the subject: what a qubit is, how measurement works, the gates that change qubits, circuits, and entanglement.',
      children: [
        { slug: 'qubits-and-measurement', title: 'Qubits, superposition and measurement', blurb: 'The qubit state, amplitudes, the Born rule, the Bloch sphere and what measurement really does.', minutes: 16, tags: ['qubit', 'superposition', 'born rule', 'bloch sphere', 'measurement', 'amplitude'] },
        { slug: 'gates-and-circuits', title: 'Quantum gates and circuits', blurb: 'X, Y, Z, Hadamard, phase and rotation gates, CNOT, reading circuit diagrams, interference and universal gate sets.', minutes: 18, tags: ['gates', 'hadamard', 'pauli', 'cnot', 'circuit', 'interference', 'universal'] },
        { slug: 'entanglement', title: 'Entanglement, Bell states and teleportation', blurb: 'Bell states, why entangled qubits cannot be described separately, Bell’s inequality, no-cloning, teleportation and superdense coding.', minutes: 18, tags: ['entanglement', 'bell state', 'chsh', 'no-cloning', 'teleportation', 'superdense coding'] },
      ],
    },
    {
      slug: 'algorithms',
      title: 'Algorithms',
      glyph: '⚙',
      group: 'Algorithms and applications',
      blurb: 'How quantum algorithms win: Deutsch–Jozsa, Grover’s search, the quantum Fourier transform and Shor’s factoring, phase estimation and variational methods.',
      children: [
        { slug: 'deutsch-jozsa', title: 'Deutsch–Jozsa: the first quantum speed-up', blurb: 'Phase kickback and interference answer a question in one query that classically needs many.', minutes: 13, tags: ['deutsch', 'oracle', 'phase kickback', 'query complexity'] },
        { slug: 'grover', title: 'Grover’s search', blurb: 'Amplitude amplification as a rotation, the √N speed-up, how many iterations to run, and what the speed-up really buys.', minutes: 16, tags: ['grover', 'search', 'amplitude amplification', 'quadratic speedup'] },
        { slug: 'shor-and-qft', title: 'The quantum Fourier transform and Shor’s algorithm', blurb: 'Factoring as period finding, modular arithmetic, the QFT, and how many qubits it would take to break RSA.', minutes: 20, tags: ['shor', 'qft', 'factoring', 'rsa', 'period finding', 'modular arithmetic'] },
        { slug: 'variational-and-simulation', title: 'Simulation, phase estimation and variational algorithms', blurb: 'Feynman’s original idea, Hamiltonians and energies, phase estimation, VQE and QAOA.', minutes: 15, tags: ['simulation', 'hamiltonian', 'phase estimation', 'vqe', 'qaoa', 'chemistry'] },
      ],
    },
    {
      slug: 'advanced',
      title: 'Deeper algorithms and tools',
      glyph: '∮',
      group: 'Algorithms and applications',
      blurb: 'More algorithms and the tools of the trade: Bernstein–Vazirani and Simon, phase estimation in depth, amplitude estimation, QAOA, density matrices and noise channels, the surface code, and programming with Qiskit.',
      children: [
        { slug: 'bernstein-vazirani-and-simon', title: 'Bernstein–Vazirani and Simon’s algorithm', blurb: 'Learning a hidden string in one query, and Simon’s exponential separation that inspired Shor, with every step worked.', minutes: 15, tags: ['bernstein vazirani', 'simon', 'hidden string', 'oracle', 'xor'] },
        { slug: 'phase-estimation', title: 'Quantum phase estimation in depth', blurb: 'Eigenvalues and phases, controlled powers, the inverse QFT, precision and success probability, with a two-qubit worked example.', minutes: 16, tags: ['phase estimation', 'qpe', 'eigenvalue', 'inverse qft', 'precision'] },
        { slug: 'amplitude-estimation', title: 'Amplitude estimation and quantum Monte Carlo', blurb: 'From Grover to estimating probabilities with a quadratic speed-up, and why it matters for finance and option pricing.', minutes: 14, tags: ['amplitude estimation', 'monte carlo', 'quadratic speedup', 'option pricing', 'finance'] },
        { slug: 'qaoa-maxcut', title: 'QAOA and MaxCut, step by step', blurb: 'Encoding a graph problem as a Hamiltonian, the QAOA circuit, expected cut values and the optimisation loop, worked on a triangle.', minutes: 15, tags: ['qaoa', 'maxcut', 'ising', 'hamiltonian', 'optimisation', 'variational'] },
        { slug: 'density-matrices-and-noise', title: 'Density matrices, mixed states and noise channels', blurb: 'Pure versus mixed states, the density matrix, partial trace, fidelity and the bit-flip, phase-flip and depolarising channels.', minutes: 16, tags: ['density matrix', 'mixed state', 'partial trace', 'fidelity', 'depolarising', 'decoherence'] },
        { slug: 'surface-code', title: 'The surface code and logical qubits', blurb: 'Stabilisers, syndromes, code distance, the threshold theorem and the overhead maths of fault-tolerant computing.', minutes: 15, tags: ['surface code', 'stabiliser', 'syndrome', 'code distance', 'threshold', 'logical qubit'] },
        { slug: 'programming', title: 'Programming quantum computers', blurb: 'Qiskit and Cirq basics, building and simulating circuits, shots and histograms, transpiling to hardware, with annotated code.', minutes: 14, tags: ['qiskit', 'cirq', 'programming', 'simulator', 'shots', 'transpile'] },
      ],
    },
    {
      slug: 'real-machines',
      title: 'Real machines',
      glyph: '❄',
      group: 'Algorithms and applications',
      blurb: 'Noise, decoherence and error correction, the competing hardware platforms, quantum cryptography, and where the field really stands.',
      children: [
        { slug: 'noise-and-error-correction', title: 'Noise, decoherence and error correction', blurb: 'T1 and T2, gate fidelity and how errors compound, the three-qubit code, the surface code, thresholds and logical qubits.', minutes: 17, tags: ['noise', 'decoherence', 't1', 't2', 'fidelity', 'error correction', 'surface code', 'logical qubit'] },
        { slug: 'hardware', title: 'Hardware: superconducting, ions, atoms and photons', blurb: 'How each platform makes a qubit, their strengths and weaknesses, and how to read the headline numbers.', minutes: 14, tags: ['hardware', 'superconducting', 'trapped ion', 'neutral atom', 'photonic', 'transmon'] },
        { slug: 'quantum-cryptography', title: 'Quantum threats and quantum cryptography', blurb: 'What Shor means for RSA and elliptic curves, post-quantum cryptography, “harvest now, decrypt later”, and BB84 quantum key distribution.', minutes: 14, tags: ['cryptography', 'post-quantum', 'pqc', 'bb84', 'qkd', 'rsa'] },
        { slug: 'utility', title: 'What quantum computers are good for', blurb: 'Where real advantage is expected (chemistry, materials, cryptanalysis), where it is doubtful (most optimisation and machine learning), and how to judge headlines.', minutes: 13, tags: ['utility', 'quantum advantage', 'applications', 'hype', 'roadmap'] },
      ],
    },
  ],
}
