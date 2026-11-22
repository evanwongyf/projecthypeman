import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In 1958 Frank Rosenblatt built the **perceptron**: a machine that learned to classify simple images by adjusting weights when it made mistakes. It was the first artificial neural network that learned, and its story, from hype to a crash over a single logic puzzle, shaped the field for decades.',
  nutshell: [
    'A perceptron computes a weighted sum and outputs 1 if it is positive, else 0.',
    'Learning rule: when wrong, add (or subtract) the input to the weights.',
    'On linearly separable data it is guaranteed to converge.',
    'It cannot learn **XOR**, which needs a curved or multi-part boundary; stacking layers solves this.',
  ],
  sections: [
    {
      id: 'neuron',
      title: 'An artificial neuron',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'Inputs x₁ … xₙ', sub: 'like signals from other neurons', tone: 'data' },
            { label: 'Weights w₁ … wₙ', sub: 'how much each input matters', tone: 'model' },
            { label: 'Sum z = w·x + b', tone: 'process' },
            { label: 'Step: 1 if z ≥ 0, else 0', tone: 'output' },
          ],
          caption: 'Loosely inspired by a biological neuron, which fires when its combined input passes a threshold. The bias b sets that threshold.',
        },
        {
          t: 'math',
          tex: String.raw`\hat{y} = \begin{cases} 1 & \text{if } \mathbf{w}\cdot\mathbf{x} + b \ge 0 \\ 0 & \text{otherwise} \end{cases} \qquad \mathbf{w} \leftarrow \mathbf{w} + \eta\,(y - \hat{y})\,\mathbf{x}, \quad b \leftarrow b + \eta\,(y - \hat{y})`,
          where: [
            { sym: 'y, \\hat{y}', def: 'The true label and the perceptron\'s prediction, both 0 or 1' },
            { sym: '\\eta', def: 'The learning rate: how large a correction to make per mistake' },
          ],
          syntax: [
            { sym: String.raw`\begin{cases} a & \text{if } x \\ b & \text{otherwise} \end{cases}`, say: 'Read "if ... then ..., otherwise ...": the big brace picks one value according to which condition holds.' },
            { sym: String.raw`\mathbf{w}\cdot\mathbf{x}`, say: 'Read "w dot x": multiply matching entries and add them up, giving one number.' },
            { sym: String.raw`\leftarrow`, say: 'Read "is replaced by": the left-hand side is overwritten with the right-hand side. It is an update, not an equation.' },
            { sym: String.raw`\eta\,(y - \hat{y})\,\mathbf{x}`, say: 'Read "eta times (y minus y hat) times x": the correction is the input vector, scaled by the learning rate and by the size and sign of the mistake (+1, 0 or -1).' },
          ],
          worked: {
            title: 'Three corrections, starting from zero',
            steps: [
              String.raw`Given: \(\mathbf{w} = (0, 0)\), \(b = 0\), \(\eta = 1\). We want AND.`,
              String.raw`Example \((0,0)\), \(y = 0\): \(z = 0 \ge 0\) so \(\hat{y} = 1\), wrong. \(y - \hat{y} = -1\): \(\mathbf{w}\) stays \((0, 0)\) (the input is zero) and \(b = 0 - 1 = -1\).`,
              String.raw`Example \((1,1)\), \(y = 1\): \(z = -1\) so \(\hat{y} = 0\), wrong. \(y - \hat{y} = +1\): \(\mathbf{w} = (0,0) + (1,1) = (1, 1)\) and \(b = -1 + 1 = 0\).`,
              String.raw`Example \((0,1)\), \(y = 0\): \(z = 0 + 1 + 0 = 1\) so \(\hat{y} = 1\), wrong. \(y - \hat{y} = -1\): \(\mathbf{w} = (1,1) - (0,1) = (1, 0)\) and \(b = 0 - 1 = -1\).`,
              String.raw`Check the current rule on \((1,0)\): \(z = 1 + 0 - 1 = 0\) gives \(\hat{y} = 1\) but \(y = 0\), so another correction is due.`,
            ],
            answer: String.raw`After three corrections \(\mathbf{w} = (1, 0)\) and \(b = -1\), still one example wrong; because AND is linearly separable the rule is guaranteed to keep correcting until none are.`,
          },
          caption: 'If the prediction is right, y − ŷ = 0 and nothing changes. If it says 0 but should say 1, the input is added to the weights, making the sum for that input larger next time; and vice versa. There is no gradient or loss function here, just this one rule reapplied example by example, this is what "learning" meant before gradient descent and backpropagation existed.',
        },
        { t: 'ai-viz', viz: 'perceptron' },
      ],
    },
    {
      id: 'logic',
      title: 'Logic gates, and the one it cannot do',
      blocks: [
        {
          t: 'table',
          head: ['x₁', 'x₂', 'AND', 'OR', 'XOR'],
          rows: [
            ['0', '0', '0', '0', '0'],
            ['0', '1', '0', '1', '1'],
            ['1', '0', '0', '1', '1'],
            ['1', '1', '1', '1', '0'],
          ],
        },
        {
          t: 'example',
          title: 'Perceptrons for AND and OR',
          lines: [
            { label: 'AND', text: '\\(w = (1, 1)\\), \\(b = -1.5\\): only (1,1) gives \\(z = 0.5 \\ge 0\\)' },
            { label: 'OR', text: '\\(w = (1, 1)\\), \\(b = -0.5\\): any 1 gives \\(z \\ge 0.5\\)' },
            { label: 'XOR', text: 'no single line puts (0,1) and (1,0) on one side and (0,0) and (1,1) on the other' },
          ],
        },
        {
          t: 'plot',
          title: 'XOR: no straight line separates the classes',
          x: [-0.5, 1.5],
          y: [-0.5, 1.5],
          xLabel: 'x₁',
          yLabel: 'x₂',
          data: [
            { pts: [[0, 0], [1, 1]], dots: true, color: '#3b6fd8', label: 'XOR = 0' },
            { pts: [[0, 1], [1, 0]], dots: true, color: '#e07b2a', label: 'XOR = 1' },
          ],
          curves: [{ f: (x: number) => 1.5 - x, dashed: true, label: 'NAND line: x₁ + x₂ = 1.5', color: '#999' }, { f: (x: number) => 0.5 - x, dashed: true, label: 'OR line: x₁ + x₂ = 0.5', color: '#999' }],
          caption: 'Two lines are needed: XOR = OR and NOT AND. A network with a hidden layer of two perceptrons (one for OR, one for NAND) and an AND on top computes it. That is the first multi-layer network.',
        },
        {
          t: 'math',
          tex: String.raw`\text{XOR}(x_1, x_2) = \text{AND}\big(\text{OR}(x_1, x_2),\ \text{NAND}(x_1, x_2)\big)`,
          syntax: [
            { sym: String.raw`\text{AND}\big(\text{OR}(x_1, x_2),\ \text{NAND}(x_1, x_2)\big)`, say: 'Evaluate from the inside out: first OR and NAND of the same two inputs, then feed those two answers into AND.' },
            { sym: String.raw`\text{NAND}`, say: 'Read "NOT AND": output 0 only when both inputs are 1, otherwise 1.' },
          ],
          worked: {
            title: 'All four inputs through the two-layer network',
            steps: [
              String.raw`Weights: OR has \(w = (1, 1)\), \(b = -0.5\); NAND has \(w = (-1, -1)\), \(b = 1.5\); AND has \(w = (1, 1)\), \(b = -1.5\). Each fires (outputs 1) when its sum is at least 0.`,
              String.raw`\((0,0)\): OR \(z = -0.5 \to 0\); NAND \(z = 1.5 \to 1\); AND \(z = 0 + 1 - 1.5 = -0.5 \to 0\).`,
              String.raw`\((0,1)\): OR \(z = 0.5 \to 1\); NAND \(z = 0.5 \to 1\); AND \(z = 1 + 1 - 1.5 = 0.5 \to 1\).`,
              String.raw`\((1,0)\): identical to \((0,1)\), so the output is 1.`,
              String.raw`\((1,1)\): OR \(z = 1.5 \to 1\); NAND \(z = -0.5 \to 0\); AND \(z = 1 + 0 - 1.5 = -0.5 \to 0\).`,
            ],
            answer: 'The outputs for (0,0), (0,1), (1,0), (1,1) are 0, 1, 1, 0: exactly XOR, from three perceptrons that individually could never compute it.',
          },
          caption: 'Each of AND, OR and NAND is just one perceptron with its own line, so this says XOR is computable by combining three single-layer perceptrons into two layers: a hidden layer (OR and NAND) feeding a final one (AND). No single straight line solves XOR, but a network of lines does.',
        },
      ],
    },
    {
      id: 'history',
      title: 'Hype and winter',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Mistakes} \le \left(\frac{R}{\gamma}\right)^2`,
          where: [
            { sym: 'R', def: 'The largest length of any input vector' },
            { sym: '\\gamma', def: 'The margin: how far the closest point is from the best separating line' },
          ],
          syntax: [
            { sym: String.raw`\le`, say: 'Read "is at most": the number of mistakes can be anything up to the bound, but never above it.' },
            { sym: String.raw`\left(\frac{R}{\gamma}\right)^2`, say: 'Read "R over gamma, all squared": divide R by the margin, then multiply the result by itself.' },
            { sym: String.raw`\text{Mistakes}`, say: 'The total number of weight corrections over the whole run, not per pass through the data.' },
          ],
          worked: {
            title: 'How the margin sets the bound',
            steps: [
              String.raw`Given: every input has length at most \(R = 5\), and the closest point to the best separating line is \(\gamma = 0.5\) away.`,
              String.raw`Bound: \((R/\gamma)^2 = (5/0.5)^2 = 10^2 = 100\) mistakes at most.`,
              String.raw`Squeeze the classes closer so \(\gamma = 0.25\): \((5/0.25)^2 = 20^2 = 400\), four times more.`,
              String.raw`Scale every input by 10 (so \(R = 50\) and \(\gamma = 5\)): \((50/5)^2 = 100\), unchanged; only the ratio matters.`,
            ],
            answer: 'With a generous margin the perceptron makes at most 100 mistakes; halving the margin can quadruple that, and the dimensions of the data and the number of examples do not appear at all.',
          },
          caption: 'Novikoff’s convergence theorem (1962): on separable data, the perceptron makes a bounded number of mistakes, then stops. On non-separable data it never settles.',
        },
        { t: 'callout', tone: 'fact', title: '"The embryo of an electronic computer"', text: 'In 1958 The New York Times reported the US Navy expected the perceptron to "be able to walk, talk, see, write, reproduce itself and be conscious of its existence". Rosenblatt’s Mark I Perceptron was hardware: a 20×20 grid of photocells wired through motor-driven potentiometers that adjusted the weights.' },
        { t: 'callout', tone: 'note', title: 'Minsky and Papert', text: 'Their 1969 book *Perceptrons* proved the limits of single-layer perceptrons (such as XOR). It was widely read as a verdict on neural networks in general, and research funding moved to symbolic AI for over a decade, until backpropagation made multi-layer networks trainable.' },
      ],
    },
  ],
  sources: ['Rosenblatt, F. (1958). The perceptron: A probabilistic model for information storage and organization in the brain. *Psychological Review*, 65(6), 386–408.', 'Minsky, M., & Papert, S. (1969). *Perceptrons*. MIT Press.', 'Novikoff, A. B. J. (1962). On convergence proofs for perceptrons. *Symposium on the Mathematical Theory of Automata*.'],
  related: ['ai/neural/networks', 'ai/algorithms/logistic-regression', 'ai/foundations/history'],
}

export default guide
