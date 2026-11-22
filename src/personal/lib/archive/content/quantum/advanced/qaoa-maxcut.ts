import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The Quantum Approximate Optimisation Algorithm (QAOA; Farhi, Goldstone and Gutmann, 2014) is a variational algorithm for combinatorial optimisation. MaxCut, splitting a graph’s nodes into two groups to cut as many edges as possible, is its standard test problem. This guide works through QAOA on the smallest interesting graph: a triangle.',
  nutshell: [
    'Encode the problem as a **cost Hamiltonian** whose energy counts cut edges.',
    'Alternate **cost layers** e^(−iγC) and **mixer layers** e^(−iβΣX), p times.',
    'A classical optimiser tunes the angles γ and β to maximise the expected cut.',
    'For a triangle (maximum cut 2), one layer can reach an expected cut of about 2.0; random guessing averages 1.5.',
  ],
  sections: [
    {
      id: 'cost',
      title: 'The cost function',
      blocks: [
        {
          t: 'math',
          tex: String.raw`C = \sum_{(i,j)\in E} \frac{1 - Z_i Z_j}{2}`,
          caption: 'The MaxCut cost operator: each edge contributes 1 if its endpoints are on opposite sides.',
          plain: 'Give each node a qubit: 0 means one side of the cut, 1 the other. Z on a qubit is +1 for 0 and −1 for 1, so Z_i Z_j is +1 when two nodes are on the same side and −1 when they differ. (1 − Z_i Z_j)/2 is therefore 0 or 1: exactly whether that edge is cut. Adding over edges counts the cut.',
          where: [
            { sym: 'E', def: 'the set of edges' },
            { sym: String.raw`Z_i`, def: 'the Pauli Z on qubit i: +1 for |0⟩, −1 for |1⟩' },
          ],
          syntax: [
            { sym: String.raw`\sum_{(i,j)\in E}`, say: '“sum over every edge (i, j) in the graph”' },
          ],
          worked: {
            title: 'Triangle with nodes 0, 1, 2; bitstring 001',
            steps: [
              'Node 0 → bit 1; nodes 1 and 2 → bit 0 (reading 001 right to left as nodes 0, 1, 2).',
              'Edge (0,1): different sides → 1. Edge (0,2): different → 1. Edge (1,2): same → 0.',
              'Cut value = 2.',
              'Every bitstring except 000 and 111 cuts exactly 2 edges; 000 and 111 cut 0.',
            ],
            why: [
              'assign sides from the bits',
              'check each edge',
              'add',
              'in a triangle you can never cut all three edges',
            ],
            answer: 'Six of the eight bitstrings achieve the maximum cut of 2. A uniform random guess averages 6/8 × 2 = 1.5.',
          },
        },
      ],
    },
    {
      id: 'circuit',
      title: 'The QAOA circuit and its expected cut',
      blocks: [
        { t: 'flow', loop: 'classical optimiser updates γ and β', nodes: [
          { label: 'Hadamards', sub: 'uniform superposition', tone: 'data' },
          { label: 'Cost layer', sub: 'e^(−iγC): ZZ rotations on edges', tone: 'process' },
          { label: 'Mixer layer', sub: 'e^(−iβΣX): X rotations', tone: 'process' },
          { label: 'Measure', sub: 'estimate the average cut', tone: 'output' },
        ] },
        {
          t: 'math',
          tex: String.raw`\langle C_{uv}\rangle = \tfrac12 + \tfrac12\sin 4\beta\,\sin\gamma\cos\gamma - \tfrac14\sin^2 2\beta\,(1 - \cos 2\gamma)`,
          caption: 'Depth-1 QAOA: expected value of one triangle edge (each node has degree 2 and the edge lies in one triangle), from the general formula of Wang et al. (2018).',
          plain: 'For one layer, the expected contribution of each edge can be written in closed form in terms of the two angles. In a triangle all three edges are alike, so the expected total cut is three times this. The first term is the random-guess value; the angle terms add or subtract from it.',
          where: [
            { sym: String.raw`\gamma`, def: 'cost-layer angle' },
            { sym: String.raw`\beta`, def: 'mixer-layer angle' },
            { sym: String.raw`\langle C_{uv}\rangle`, def: 'expected value of edge (u, v)’s cut indicator' },
          ],
          syntax: [
            { sym: String.raw`\langle\cdot\rangle`, say: '“the expected value of”' },
            { sym: String.raw`\gamma, \beta`, say: '“gamma”, “beta”' },
          ],
          worked: {
            title: 'γ = π/4, β = π/8',
            steps: [
              String.raw`\(\sin 4\beta = \sin(\pi/2) = 1\); \(\sin\gamma\cos\gamma = (\tfrac{\sqrt2}{2})^2 = 0.5\).`,
              String.raw`\(\sin^2 2\beta = \sin^2(\pi/4) = 0.5\); \(1 - \cos 2\gamma = 1 - \cos(\pi/2) = 1\).`,
              String.raw`\(\langle C_{uv}\rangle = 0.5 + 0.5 \times 1 \times 0.5 - 0.25 \times 0.5 \times 1 = 0.5 + 0.25 - 0.125 = 0.625\).`,
              String.raw`Expected cut: \(3 \times 0.625 = 1.875\).`,
              'A state-vector simulation gives the same 1.875, with probability 0.9375 of measuring a maximum cut.',
            ],
            why: [
              'evaluate the first angle terms',
              'and the second',
              'combine',
              'three identical edges',
              'checked numerically',
            ],
            answer: 'Expected cut 1.875, against 1.5 for random guessing. Optimising the angles (around γ ≈ 0.61, β ≈ 0.31) pushes it to about 2.0, the true maximum.',
          },
        },
        { t: 'callout', tone: 'note', title: 'Status', text: 'On large graphs, no experiment has shown QAOA beating the best classical algorithms, and classical simulation of shallow QAOA is often possible. It remains an active research area and a useful benchmark for hardware.' },
      ],
    },
  ],
  sources: [
    'Farhi, E., Goldstone, J., & Gutmann, S. (2014). A quantum approximate optimization algorithm. arXiv:1411.4028.',
    'Wang, Z., Hadfield, S., Jiang, Z., & Rieffel, E. G. (2018). Quantum approximate optimization algorithm for MaxCut: A fermionic view. Physical Review A, 97, 022304.',
    'Harrigan, M. P. et al. (2021). Quantum approximate optimization of non-planar graph problems on a planar superconducting processor. Nature Physics, 17, 332–336.',
  ],
  related: ['quantum/algorithms/variational-and-simulation', 'quantum/real-machines/utility', 'game-theory/start-here'],
}

export default guide
