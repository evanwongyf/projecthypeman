import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Several very different physical systems are competing to become the transistor of quantum computing. Each makes a qubit from a different two-level system and trades off speed, fidelity, connectivity and scalability. Headline “qubit counts” tell you little on their own; error rates, connectivity and logical qubits matter more.',
  sections: [
    {
      id: 'platforms',
      title: 'The main platforms',
      blocks: [
        { t: 'table', head: ['Platform', 'Qubit', 'Strengths', 'Weaknesses', 'Leading groups'], rows: [
          ['Superconducting circuits', 'Energy levels of a tiny circuit (transmon) at ~10 mK', 'Fast gates (~20–50 ns), mature chip fabrication', 'Short coherence, dilution fridges, wiring, mostly nearest-neighbour coupling', 'Google, IBM, Rigetti, AWS'],
          ['Trapped ions', 'Electron levels of a single ion held by electric fields', 'Best fidelities (>99.9% two-qubit), all-to-all connectivity, long coherence', 'Slow gates (µs–ms), scaling beyond ~100 ions per trap', 'Quantinuum, IonQ, Oxford Ionics'],
          ['Neutral atoms', 'Atoms held in laser “tweezers”, gates via Rydberg states', 'Thousands of atoms, reconfigurable arrays', 'Atom loss, slower cycles, newer technology', 'QuEra, Pasqal, Atom Computing'],
          ['Photonic', 'Photons in waveguides', 'Room temperature, natural for networking', 'Photons rarely interact; loss', 'PsiQuantum, Xanadu'],
          ['Spin qubits', 'Electron spins in silicon quantum dots', 'Tiny, compatible with chip factories', 'Uniformity, still small numbers', 'Intel, Diraq, Quantum Motion'],
          ['Topological (proposed)', 'Majorana modes', 'In theory protected from noise', 'Existence and control still contested', 'Microsoft'],
        ] },
      ],
    },
    {
      id: 'reading',
      title: 'Reading headlines',
      blocks: [
        { t: 'checklist', items: [
          'Ask for two-qubit gate fidelity and measurement fidelity, not just qubit count.',
          'Ask how qubits connect: nearest neighbours need extra SWAP gates.',
          'Prefer logical-qubit and error-correction results over raw physical-qubit records.',
          '“Quantum supremacy” or “advantage” demos (Google 2019, 2024) use tasks chosen to be hard classically, not useful applications; some were later matched by better classical algorithms.',
          'Check whether a “speed-up” compares against the best classical method, not a naive one.',
        ] },
      ],
    },
  ],
  sources: ['Arute, F. et al. (2019). Quantum supremacy using a programmable superconducting processor. Nature 574.', 'Bluvstein, D. et al. (2024). Logical quantum processor based on reconfigurable atom arrays. Nature 626.', 'Kjaergaard, M. et al. (2020). Superconducting qubits: current state of play. Annual Review of Condensed Matter Physics 11.'],
  related: ['quantum/real-machines/noise-and-error-correction', 'quantum/real-machines/utility'],
}

export default guide
