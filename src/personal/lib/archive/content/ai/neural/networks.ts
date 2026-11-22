import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A neural network is layers of simple units, each computing a weighted sum of its inputs followed by a non-linear **activation function**. Chained together, these simple steps can represent astonishingly complex functions: recognising faces, translating languages, playing Go.',
  nutshell: [
    'Each layer computes \\(\\mathbf{a} = \\phi(W\\mathbf{x} + \\mathbf{b})\\): a matrix multiplication, a shift, and a non-linearity.',
    'Without non-linear activations, any stack of layers collapses into a single linear layer.',
    'Common activations: **ReLU** (hidden layers), **sigmoid** (binary output), **softmax** (multi-class output).',
    'The **universal approximation theorem**: one hidden layer with enough units can approximate any continuous function.',
  ],
  sections: [
    {
      id: 'forward',
      title: 'A forward pass',
      blocks: [
        { t: 'ai-viz', viz: 'network' },
        {
          t: 'math',
          tex: String.raw`\mathbf{h} = \phi\big(W^{[1]}\mathbf{x} + \mathbf{b}^{[1]}\big) \qquad \hat{y} = \sigma\big(W^{[2]}\mathbf{h} + b^{[2]}\big)`,
          where: [
            { sym: 'W^{[1]}', def: 'Hidden-layer weights: one row per hidden neuron (4 × 2 above)' },
            { sym: '\\phi', def: 'The hidden activation, applied to each entry (tanh above)' },
            { sym: '\\sigma', def: 'The sigmoid on the output, giving a probability' },
          ],
          syntax: [
            { sym: String.raw`[1],\ [2]`, say: String.raw`Square-bracket superscripts count layers, not powers: \(W^{[1]}\) is "W for layer one".` },
            { sym: String.raw`W^{[1]}\mathbf{x}`, say: 'Matrix times vector: each row of W is dotted with x, giving one number per hidden neuron.' },
            { sym: String.raw`\phi\big(\cdot\big)`, say: 'Read "phi of": apply the activation to each entry of the vector inside, one at a time.' },
            { sym: String.raw`\hat{y}`, say: String.raw`Read "y hat": the hat marks a prediction, as opposed to the true label y. Bold letters such as \(\mathbf{h}\) are vectors.` },
          ],
          worked: {
            title: 'A 2-2-1 network with tanh hidden units',
            steps: [
              String.raw`Given: \(\mathbf{x} = (1, 0.5)\), \(W^{[1]} = \begin{pmatrix} 1 & -1 \\ 0.5 & 0.5 \end{pmatrix}\), \(\mathbf{b}^{[1]} = (0, 0.5)\), \(W^{[2]} = (1.5, -1)\), \(b^{[2]} = 0.2\).`,
              String.raw`Hidden pre-activations: \(z_1 = 1(1) - 1(0.5) + 0 = 0.5\) and \(z_2 = 0.5(1) + 0.5(0.5) + 0.5 = 1.25\).`,
              String.raw`Bend with tanh: \(\mathbf{h} = (\tanh 0.5,\ \tanh 1.25) = (0.4621,\ 0.8483)\).`,
              String.raw`Output pre-activation: \(1.5(0.4621) - 1(0.8483) + 0.2 = 0.6932 - 0.8483 + 0.2 = 0.0449\).`,
              String.raw`Squash with the sigmoid: \(\hat{y} = \sigma(0.0449) = 0.5112\).`,
            ],
            answer: String.raw`The network outputs \(\hat{y} \approx 0.51\), barely more than a coin flip: with these untrained weights it has no real opinion yet.`,
          },
          caption: 'Read it as a pipeline, left to right: multiply by weights, add a bias, then bend the result through a non-linearity, twice, once per layer. Without φ in the middle, stacking the two lines would collapse into one plain weighted sum (shown below), so φ is what lets the second layer build on genuinely new shapes rather than just a rescaled version of the input.',
        },
        {
          t: 'example',
          title: 'A tiny network by hand (ReLU hidden layer)',
          lines: [
            { label: 'Input', text: '\\(\\mathbf{x} = (1, 2)\\)' },
            { label: 'Hidden', text: '\\(W^{[1]} = \\begin{pmatrix} 1 & -1 \\\\ 0.5 & 1 \\end{pmatrix}\\), \\(\\mathbf{b} = (0, -1)\\): \\(\\mathbf{z} = (1 - 2,\\ 0.5 + 2 - 1) = (-1, 1.5)\\)' },
            { label: 'ReLU', text: '\\(\\mathbf{h} = (\\max(0, -1), \\max(0, 1.5)) = (0, 1.5)\\)' },
            { label: 'Output', text: '\\(W^{[2]} = (2, 1)\\), \\(b = -1\\): \\(z = 0 + 1.5 - 1 = 0.5\\), \\(\\hat{y} = \\sigma(0.5) = 0.62\\)' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{Parameters} = \sum_{\ell}\big(n_{\ell-1}\,n_\ell + n_\ell\big) \qquad \text{e.g. } 784 \to 128 \to 10:\ (784\cdot128 + 128) + (128\cdot10 + 10) = 101{,}770`,
          syntax: [
            { sym: String.raw`\sum_{\ell}`, say: 'Read "the sum over layers ell": work out the bracket for each layer in turn and add them.' },
            { sym: String.raw`n_{\ell-1}\,n_\ell`, say: String.raw`\(n_\ell\) is the number of neurons in layer \(\ell\), so this is inputs times outputs of that layer: the size of its weight matrix.` },
            { sym: String.raw`784 \to 128 \to 10`, say: 'Read "784 to 128 to 10": a network whose layers have those numbers of neurons, in order.' },
          ],
          worked: {
            title: 'A 784 → 256 → 128 → 10 network',
            steps: [
              String.raw`Given: layer sizes \(n_0 = 784\), \(n_1 = 256\), \(n_2 = 128\), \(n_3 = 10\).`,
              String.raw`Layer 1: \(784 \times 256 + 256 = 200{,}704 + 256 = 200{,}960\).`,
              String.raw`Layer 2: \(256 \times 128 + 128 = 32{,}768 + 128 = 32{,}896\).`,
              String.raw`Layer 3: \(128 \times 10 + 10 = 1{,}290\).`,
              String.raw`Total: \(200{,}960 + 32{,}896 + 1{,}290 = 235{,}146\).`,
            ],
            answer: 'About 235 thousand parameters, 85% of them in the first layer, because each of the 784 pixels connects to every one of its 256 neurons.',
          },
          caption: 'Each layer has a weight for every input–output pair plus a bias per output. The 784 inputs are the pixels of a 28 × 28 image.',
        },
      ],
    },
    {
      id: 'activations',
      title: 'Activation functions',
      blocks: [
        {
          t: 'plot',
          title: 'Common activations',
          x: [-4, 4],
          y: [-1.5, 3],
          curves: [
            { f: (z: number) => Math.max(0, z), label: 'ReLU', color: '#d9534f' },
            { f: (z: number) => 1 / (1 + Math.exp(-z)), label: 'sigmoid', color: '#3b6fd8' },
            { f: (z: number) => Math.tanh(z), label: 'tanh', color: '#2f9e6e' },
            { f: (z: number) => (z * (1 + Math.tanh(Math.sqrt(2 / Math.PI) * (z + 0.044715 * z ** 3)))) / 2, label: 'GELU', color: '#7b4fc9', dashed: true },
          ],
        },
        {
          t: 'table',
          head: ['Function', 'Formula', 'Used for', 'Notes'],
          rows: [
            ['ReLU', '\\(\\max(0, z)\\)', 'Hidden layers (default)', 'Cheap; gradient 1 for z > 0 so it does not vanish; units can "die" at 0'],
            ['Leaky ReLU', '\\(\\max(0.01z, z)\\)', 'Hidden layers', 'Small slope for z < 0 keeps units alive'],
            ['GELU', '\\(z\\,\\Phi(z)\\)', 'Transformers (BERT, GPT)', 'A smooth ReLU'],
            ['Sigmoid', '\\(1/(1 + e^{-z})\\)', 'Binary outputs, gates', 'Saturates: gradient near 0 for large |z|'],
            ['tanh', '\\((e^z - e^{-z})/(e^z + e^{-z})\\)', 'RNNs, older hidden layers', 'Zero-centred, also saturates'],
            ['Softmax', '\\(e^{z_k}/\\sum_j e^{z_j}\\)', 'Multi-class outputs', 'Turns scores into probabilities'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`W_2(W_1\mathbf{x} + \mathbf{b}_1) + \mathbf{b}_2 = (W_2W_1)\mathbf{x} + (W_2\mathbf{b}_1 + \mathbf{b}_2) = W'\mathbf{x} + \mathbf{b}'`,
          syntax: [
            { sym: 'W_2W_1', say: String.raw`Matrices written side by side are multiplied, and the product acts right to left: \(W_1\) is applied first, then \(W_2\).` },
            { sym: String.raw`W',\ \mathbf{b}'`, say: 'The primes just name the new, combined matrix and vector; they are not derivatives here.' },
          ],
          worked: {
            title: 'Two layers fold into one',
            steps: [
              String.raw`Given: \(W_1 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}\), \(\mathbf{b}_1 = (1, 0)\), \(W_2 = \begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}\), \(\mathbf{b}_2 = (0, 1)\), \(\mathbf{x} = (1, 1)\).`,
              String.raw`Layer by layer: \(W_1\mathbf{x} + \mathbf{b}_1 = (1 + 2 + 1,\ 0 + 1 + 0) = (4, 1)\). Then \(W_2(4, 1) + \mathbf{b}_2 = (8,\ 4 + 1) + (0, 1) = (8, 6)\).`,
              String.raw`Combined weights: \(W' = W_2W_1 = \begin{pmatrix} 2 & 4 \\ 1 & 3 \end{pmatrix}\).`,
              String.raw`Combined bias: \(\mathbf{b}' = W_2\mathbf{b}_1 + \mathbf{b}_2 = (2, 1) + (0, 1) = (2, 2)\).`,
              String.raw`One layer: \(W'\mathbf{x} + \mathbf{b}' = (2 + 4,\ 1 + 3) + (2, 2) = (8, 6)\).`,
            ],
            answer: String.raw`Both routes give \((8, 6)\): without a non-linearity between them, the two layers are exactly one layer with weights \(W'\) and bias \(\mathbf{b}'\).`,
          },
          caption: 'Why non-linearity is essential: two linear layers in a row are just one linear layer. Depth only adds power when there is a bend between layers.',
        },
      ],
    },
    {
      id: 'universal',
      title: 'Why networks are so powerful',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\forall \varepsilon > 0\ \ \exists N, \{v_i, \mathbf{w}_i, b_i\}:\ \ \Big|\, f(\mathbf{x}) - \sum_{i=1}^{N} v_i\,\phi(\mathbf{w}_i\cdot\mathbf{x} + b_i) \Big| < \varepsilon \ \ \text{for all } \mathbf{x} \text{ in a bounded region}`,
          where: [
            { sym: '\\varepsilon', def: 'However small a gap you demand between the network and the true function f' },
            { sym: 'N', def: 'The number of hidden units needed to get within that gap' },
          ],
          syntax: [
            { sym: String.raw`\forall \varepsilon > 0`, say: 'Read "for all epsilon greater than zero": whatever tolerance you pick, however tiny.' },
            { sym: String.raw`\exists N`, say: 'Read "there exists N": at least one choice of N (and of the weights that follow it) can be found.' },
            { sym: String.raw`\sum_{i=1}^{N} v_i\,\phi(\mathbf{w}_i\cdot\mathbf{x} + b_i)`, say: 'Read "the sum over N hidden units, each one: dot x with its weight vector, add its bias, bend with phi, scale by its output weight v i".' },
            { sym: String.raw`|\cdot| < \varepsilon`, say: 'Bars mean absolute value: the size of the gap, ignoring its sign. The whole line says that gap stays below epsilon everywhere in the region.' },
          ],
          worked: {
            title: 'Building |x| from two ReLU units',
            steps: [
              String.raw`Target: \(f(x) = |x|\). Take \(N = 2\) hidden units with \(\phi = \text{ReLU}\), \(w_1 = 1\), \(w_2 = -1\), \(b_1 = b_2 = 0\), \(v_1 = v_2 = 1\).`,
              String.raw`The network computes \(\text{ReLU}(x) + \text{ReLU}(-x)\).`,
              String.raw`At \(x = 2\): \(\max(0, 2) + \max(0, -2) = 2 + 0 = 2\), and \(|2| = 2\).`,
              String.raw`At \(x = -3\): \(\max(0, -3) + \max(0, 3) = 0 + 3 = 3\), and \(|-3| = 3\).`,
              String.raw`At \(x = 0\): \(0 + 0 = 0\). The gap is 0 everywhere, below every \(\varepsilon\).`,
              String.raw`A smooth curve such as \(x^2\) has no exact two-unit formula: each extra ReLU adds a bend, so the number of units \(N\) needed grows as \(\varepsilon\) shrinks.`,
            ],
            answer: String.raw`Two units suffice for \(|x|\) with zero error, which shows the idea: a sum of bent lines can match a target, and a harder target (or smaller \(\varepsilon\)) just needs a larger \(N\).`,
          },
          caption: 'The universal approximation theorem (Cybenko 1989; Hornik 1991): read the "for all ε > 0, there exists N" structure as a guarantee, not a recipe, however precisely you insist on matching f, some network width N is enough to do it, but the theorem is silent on how large N needs to be or how to find the right weights by training. One hidden layer with enough units can approximate any continuous function as closely as you like; deep networks usually need far fewer units than wide shallow ones to reach the same accuracy.',
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Early layers', body: 'Detect simple patterns: edges in images, letter combinations in text.' },
            { title: 'Middle layers', body: 'Combine them: textures and parts, words and phrases.' },
            { title: 'Late layers', body: 'Abstract concepts: faces, objects, meaning and intent.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Not much like a brain', text: 'A human brain has about 86 billion neurons and perhaps 100 trillion synapses, running on roughly 20 watts. Artificial neurons are a drastic simplification: real neurons communicate with timed spikes, have complex branching dendrites, and are shaped by chemistry that networks ignore.' },
      ],
    },
  ],
  sources: ['Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*, ch. 6. MIT Press.', 'Cybenko, G. (1989). Approximation by superpositions of a sigmoidal function. *Mathematics of Control, Signals and Systems*, 2, 303–314.', 'Hornik, K. (1991). Approximation capabilities of multilayer feedforward networks. *Neural Networks*, 4(2), 251–257.', 'Nielsen, M. (2015). *Neural Networks and Deep Learning*. Determination Press (free online).'],
  related: ['ai/neural/backprop', 'ai/neural/training', 'ai/neural/perceptron'],
}

export default guide
