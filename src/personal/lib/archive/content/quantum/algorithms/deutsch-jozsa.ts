import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The Deutsch–Jozsa algorithm (1992) was the first to show a quantum computer answering a question with exponentially fewer queries than any deterministic classical method. The problem is artificial, but the tricks it uses, putting every input into superposition, phase kickback and interference with Hadamards, reappear in almost every later algorithm.',
  nutshell: [
    'You get a black-box function f on n-bit inputs, promised to be either **constant** (same output for every input) or **balanced** (0 for exactly half the inputs).',
    'Classically you may need \\(2^{n-1} + 1\\) queries to be sure. Quantumly, **one** query suffices.',
    '**Phase kickback** writes f(x) into the sign of an amplitude: \\(|x\\rangle \\to (-1)^{f(x)}|x\\rangle\\).',
    'Final Hadamards make the amplitudes interfere: all-zeros comes out with certainty if f is constant and never if f is balanced.',
  ],
  sections: [
    {
      id: 'kickback',
      title: 'Phase kickback',
      blocks: [
        {
          t: 'math',
          tex: String.raw`U_f\,|x\rangle|-\rangle = (-1)^{f(x)}\,|x\rangle|-\rangle`,
          caption: 'Feeding the oracle a target qubit in |−⟩ turns the answer f(x) into a sign on |x⟩.',
          plain: 'The oracle normally XORs f(x) into a target bit. If the target is in the |−⟩ state (|0⟩ − |1⟩ over √2), flipping it just swaps the two terms, which is the same as multiplying by −1. So when f(x) = 1 the whole state picks up a minus sign, and when f(x) = 0 nothing changes. The answer has been “kicked back” into the phase of the input register, where interference can use it.',
          where: [
            { sym: String.raw`U_f`, def: 'the oracle: |x⟩|y⟩ → |x⟩|y ⊕ f(x)⟩' },
            { sym: 'f(x)', def: 'the hidden function’s output, 0 or 1' },
            { sym: String.raw`|-\rangle`, def: '(|0⟩ − |1⟩)/√2' },
          ],
          syntax: [
            { sym: String.raw`(-1)^{f(x)}`, say: '−1 raised to f(x): equals +1 when f(x) = 0 and −1 when f(x) = 1' },
            { sym: String.raw`U_f`, say: 'U with subscript f: the unitary that computes f' },
          ],
          worked: {
            title: 'Kickback with f(x) = 1',
            steps: [
              String.raw`Target \(|-\rangle = \tfrac1{\sqrt2}(|0\rangle - |1\rangle)\).`,
              String.raw`Oracle adds \(f(x) = 1\): \(|0\rangle \to |1\rangle\) and \(|1\rangle \to |0\rangle\).`,
              String.raw`Target becomes \(\tfrac1{\sqrt2}(|1\rangle - |0\rangle) = -\tfrac1{\sqrt2}(|0\rangle - |1\rangle) = -|-\rangle\).`,
              String.raw`With \(f(x) = 0\) the target is unchanged: \(+|-\rangle\).`,
            ],
            why: [
              'this special target state is prepared with X then H',
              'XOR-ing with 1 flips each basis state',
              'swapping the two terms of a difference is the same as negating it; the −1 can be moved to the front and belongs to the whole state',
              'XOR with 0 changes nothing',
            ],
            answer: String.raw`The sign is \((-1)^{f(x)}\): the function’s value now lives in a phase, invisible to direct measurement but powerful under interference.`,
          },
        },
      ],
    },
    {
      id: 'algorithm',
      title: 'The algorithm',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{amplitude of } |0\cdots0\rangle = \frac{1}{2^n}\sum_{x=0}^{2^n-1}(-1)^{f(x)}`,
          caption: 'After H on every qubit, one oracle query and H again, the amplitude of the all-zeros output.',
          plain: 'The first Hadamards give every input an equal amplitude. The oracle gives each input a + or − sign depending on f. The final Hadamards add up all the signed amplitudes into the all-zeros output. If f is constant, all signs agree and they add to ±1: you always see all zeros. If f is balanced, half are + and half are −, so they cancel to exactly 0: you never see all zeros.',
          where: [
            { sym: 'n', def: 'number of input qubits' },
            { sym: String.raw`2^n`, def: 'number of possible inputs' },
            { sym: String.raw`\sum_{x}`, def: 'add up over every input x' },
          ],
          syntax: [
            { sym: String.raw`\sum_{x=0}^{2^n-1}`, say: 'sum over x from 0 to 2ⁿ − 1, i.e. every n-bit input' },
            { sym: String.raw`|0\cdots0\rangle`, say: 'all qubits reading 0; the dots mean “and so on”' },
          ],
          worked: {
            title: 'n = 2: constant versus balanced',
            steps: [
              String.raw`Inputs: 00, 01, 10, 11, so \(2^n = 4\) and the prefactor is \(\tfrac14\).`,
              String.raw`Constant \(f = 0\): signs \(+1, +1, +1, +1\). Sum \(= 4\). Amplitude \(= \tfrac44 = 1\).`,
              String.raw`Constant \(f = 1\): signs all \(-1\). Amplitude \(= -1\); probability \(|-1|^2 = 1\).`,
              String.raw`Balanced \(f\) = (0, 1, 1, 0): signs \(+1, -1, -1, +1\). Sum \(= 0\). Amplitude 0.`,
              String.raw`Classical worst case: check \(2^{n-1} + 1 = 3\) inputs before you can be sure.`,
            ],
            why: [
              'two qubits give four inputs',
              'every (−1)^0 is +1, and they all add',
              'a global minus sign does not change the probability',
              'two pluses and two minuses cancel exactly',
              'after seeing two equal outputs you still cannot rule out balanced; a third input settles it',
            ],
            answer: String.raw`Measure: all zeros means constant, anything else means balanced, after one query. For n = 50 a deterministic classical check could need over \(5 \times 10^{14}\) queries (though a randomised one is right with high probability after a few).`,
          },
        },
      ],
    },
  ],
  sources: ['Deutsch, D. & Jozsa, R. (1992). Rapid solution of problems by quantum computation. Proceedings of the Royal Society A 439.', 'Nielsen & Chuang (2010), section 1.4.4.'],
  related: ['quantum/algorithms/grover', 'quantum/core/gates-and-circuits'],
}

export default guide
