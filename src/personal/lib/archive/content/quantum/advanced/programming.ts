import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'You can write and run quantum programs today, free, on a laptop simulator or on real cloud hardware. The most popular toolkit is IBM’s open-source Qiskit (Python); Google’s Cirq and others work similarly. This guide shows the basic workflow with annotated code and explains the statistics of reading results.',
  nutshell: [
    'Workflow: **build a circuit → simulate or transpile for hardware → run many shots → read the histogram**.',
    'A single run gives one bitstring; probabilities come from **repeating** (shots).',
    'With N shots the uncertainty in an estimated probability p is about **√(p(1 − p)/N)**.',
    '**Transpiling** maps your circuit onto the hardware’s native gates and connectivity, usually adding gates (and noise).',
  ],
  sections: [
    {
      id: 'bell',
      title: 'A Bell state in Qiskit',
      blocks: [
        { t: 'code', lang: 'python', title: 'bell.py', code: `# pip install qiskit qiskit-aer
from qiskit import QuantumCircuit, transpile
from qiskit_aer import AerSimulator

qc = QuantumCircuit(2, 2)   # 2 qubits, 2 classical bits
qc.h(0)                     # Hadamard: qubit 0 into (|0> + |1>)/sqrt(2)
qc.cx(0, 1)                 # CNOT: entangle, giving (|00> + |11>)/sqrt(2)
qc.measure([0, 1], [0, 1])  # measure both qubits

print(qc.draw())            # text diagram of the circuit

sim = AerSimulator()
job = sim.run(transpile(qc, sim), shots=1000)
counts = job.result().get_counts()
print(counts)               # e.g. {'00': 507, '11': 493}` },
        { t: 'p', text: 'Only 00 and 11 appear, roughly equally: the two qubits are perfectly correlated. On real hardware you would also see a few 01 and 10 results from noise.' },
      ],
    },
    {
      id: 'shots',
      title: 'How many shots?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`SE(\hat p) = \sqrt{\frac{p(1-p)}{N}}`,
          caption: 'Standard error of a probability estimated from N shots.',
          plain: 'Each shot is like a coin toss. The fraction of shots giving an outcome estimates its probability, with an uncertainty that shrinks like one over the square root of the number of shots.',
          where: [
            { sym: 'p', def: 'the true probability of the outcome' },
            { sym: 'N', def: 'number of shots' },
            { sym: String.raw`\hat p`, def: 'the estimate (count ÷ N)' },
          ],
          syntax: [
            { sym: String.raw`\hat p`, say: '“p hat”' },
          ],
          worked: {
            title: 'Estimating P(00) ≈ 0.5',
            steps: [
              String.raw`\(N = 1{,}000\): \(SE = \sqrt{0.25/1{,}000} = \sqrt{0.00025} \approx 0.0158\).`,
              String.raw`Observed 507/1,000 = 0.507: within \(0.5 \pm 2 \times 0.0158 = [0.468, 0.532]\), consistent with 0.5.`,
              String.raw`For \(SE = 0.005\): \(N = 0.25/0.005^2 = 10{,}000\) shots.`,
            ],
            why: [
              'plug in',
              'check the result against the expected value',
              'invert to plan the number of shots',
            ],
            answer: '1,000 shots give about ±3 percentage points (two standard errors); 10,000 shots give about ±1.',
          },
        },
      ],
    },
    {
      id: 'hardware',
      title: 'Running on hardware',
      blocks: [
        { t: 'steps', items: [
          { title: 'Choose a backend', body: 'Cloud providers (IBM Quantum, Amazon Braket, Azure Quantum) list devices with their qubit counts, connectivity and error rates.' },
          { title: 'Transpile', body: 'The transpiler rewrites gates into the device’s native set and inserts SWAPs where qubits are not directly connected. Check the depth and two-qubit gate count afterwards.' },
          { title: 'Mitigate errors', body: 'Readout-error mitigation and techniques like zero-noise extrapolation reduce (but do not remove) noise effects.' },
          { title: 'Compare with simulation', body: 'Run the same circuit on a noiseless simulator to see how much noise changed the result.' },
        ] },
        { t: 'code', lang: 'python', title: 'Grover search on 2 qubits (marking |11>)', code: `from qiskit import QuantumCircuit
qc = QuantumCircuit(2, 2)
qc.h([0, 1])            # uniform superposition
qc.cz(0, 1)             # oracle: flip the sign of |11>
qc.h([0, 1]); qc.x([0, 1]); qc.cz(0, 1); qc.x([0, 1]); qc.h([0, 1])  # diffusion
qc.measure([0, 1], [0, 1])
# One Grover iteration finds |11> with probability 1 for N = 4.` },
      ],
    },
  ],
  sources: [
    'Qiskit documentation (docs.quantum.ibm.com).',
    'Cirq documentation (quantumai.google/cirq).',
    'Hidary, J. D. (2021). Quantum Computing: An Applied Approach (2nd ed.). Springer.',
  ],
  related: ['quantum/core/gates-and-circuits', 'quantum/algorithms/grover', 'ai/practice/python-tools'],
}

export default guide
