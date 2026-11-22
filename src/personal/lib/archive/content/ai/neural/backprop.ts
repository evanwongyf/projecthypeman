import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A network may have billions of weights. To train it by gradient descent we need the derivative of the loss with respect to every one of them, efficiently. **Backpropagation** does this by applying the chain rule from the output backwards, reusing each intermediate result, so computing all the gradients costs about as much as one extra forward pass.',
  nutshell: [
    'Forward pass: compute and store every intermediate value.',
    'Backward pass: start from \\(\\partial L/\\partial L = 1\\) and multiply by local derivatives, layer by layer.',
    'Each operation only needs to know its own local derivative: addition passes gradients through; multiplication swaps its inputs.',
    'Frameworks like PyTorch do this automatically (**autograd**).',
  ],
  sections: [
    {
      id: 'lab',
      title: 'Step through it',
      blocks: [
        { t: 'p', text: 'One neuron with a sigmoid and a squared loss, drawn as a **computational graph**: each box is one simple operation. Click **Next** to run the forward pass, then the backward pass.' },
        { t: 'ai-viz', viz: 'backprop' },
      ],
    },
    {
      id: 'chain',
      title: 'The chain rule, written out',
      blocks: [
        {
          t: 'math',
          tex: String.raw`u = wx,\quad z = u + b,\quad a = \sigma(z),\quad L = (a - y)^2`,
          where: [
            { sym: 'u, z, a', def: 'Intermediate values: the weighted input, the biased sum, and the activation' },
            { sym: 'y, L', def: 'The true target, and the squared error between prediction a and y' },
          ],
          syntax: [
            { sym: 'u = wx', say: 'Two letters side by side mean multiply: read "u equals w times x". Each equation is one box in the graph, evaluated top to bottom.' },
            { sym: String.raw`\sigma(z)`, say: String.raw`Read "sigma of z": feed z into the sigmoid \(\sigma(z) = 1/(1 + e^{-z})\), which squashes any number into the range 0 to 1.` },
            { sym: '(a - y)^2', say: 'Read "a minus y, all squared": subtract the target from the prediction, then multiply the result by itself, so errors in either direction count as positive.' },
          ],
          worked: {
            title: 'One neuron, forward pass',
            steps: [
              String.raw`Given: input \(x = 2\), weight \(w = 0.3\), bias \(b = -0.1\), target \(y = 1\).`,
              String.raw`Weighted input: \(u = wx = 0.3 \times 2 = 0.6\).`,
              String.raw`Add the bias: \(z = u + b = 0.6 - 0.1 = 0.5\).`,
              String.raw`Activate: \(a = \sigma(0.5) = 1/(1 + e^{-0.5}) = 0.6225\).`,
              String.raw`Loss: \(L = (a - y)^2 = (0.6225 - 1)^2 = (-0.3775)^2 = 0.1425\).`,
            ],
            answer: String.raw`The neuron predicts \(0.6225\) when the target is \(1\), a squared error of \(L \approx 0.1425\): these are the stored values every backward step below reuses.`,
          },
          caption: 'The forward computation in the lab, one step at a time: each letter is one box in the computational graph, and each equation is one tiny, easy-to-differentiate operation. Backprop never has to differentiate the whole network at once, only each of these small steps, chained together.',
        },
        {
          t: 'math',
          tex: String.raw`\frac{\partial L}{\partial w} = \underbrace{\frac{\partial L}{\partial a}}_{2(a - y)}\cdot\underbrace{\frac{\partial a}{\partial z}}_{a(1 - a)}\cdot\underbrace{\frac{\partial z}{\partial u}}_{1}\cdot\underbrace{\frac{\partial u}{\partial w}}_{x}`,
          syntax: [
            { sym: String.raw`\frac{\partial L}{\partial w}`, say: String.raw`Read "the partial derivative of L with respect to w": how much L changes per tiny nudge of w while everything else is held fixed. The curly \(\partial\) (rather than a plain d) warns there are several variables in play.` },
            { sym: String.raw`\cdot`, say: 'Read "times". The whole right-hand side says: multiply the local slopes of every box on the path from w to L.' },
            { sym: String.raw`\underbrace{\cdots}_{\text{label}}`, say: 'The brace is only a label showing the value of each factor; it commands no operation.' },
          ],
          worked: {
            title: 'The same neuron, backward pass',
            steps: [
              String.raw`Reuse the forward values: \(x = 2\), \(a = 0.6225\), \(y = 1\).`,
              String.raw`Loss slope: \(\partial L/\partial a = 2(a - y) = 2(0.6225 - 1) = -0.7551\).`,
              String.raw`Sigmoid slope: \(\partial a/\partial z = a(1 - a) = 0.6225 \times 0.3775 = 0.2350\).`,
              String.raw`Addition passes the gradient through, so \(\partial z/\partial u = 1\); and \(\partial u/\partial w = x = 2\).`,
              String.raw`Multiply: \(\partial L/\partial w = -0.7551 \times 0.2350 \times 1 \times 2 = -0.3549\). (The bias skips the last factor: \(\partial L/\partial b = -0.7551 \times 0.2350 = -0.1774\).)`,
              String.raw`Step with learning rate 0.5: \(w \leftarrow 0.3 - 0.5(-0.3549) = 0.4774\) and \(b \leftarrow -0.1 - 0.5(-0.1774) = -0.0113\).`,
            ],
            answer: 'The negative gradient says "increase w": after the update the prediction rises from 0.6225 to 0.7199 and the loss falls from 0.1425 to 0.0785.',
          },
          caption: 'Read this right to left, in the order backprop actually computes it: start at the loss, find its local derivative with respect to a, multiply by a\'s local derivative with respect to z, and so on backwards through every box, until you reach w. Each factor is a tiny, local calculation (no box needs to know anything about the others), yet the product gives the one number that tells w exactly how to change to reduce the overall loss, the chain rule turning a long graph into one multiplication.',
        },
        {
          t: 'example',
          title: 'With the lab’s starting numbers',
          lines: [
            { label: 'Forward', text: '\\(x = 1.5, w = 0.8, b = -0.5\\): \\(u = 1.2\\), \\(z = 0.7\\), \\(a = \\sigma(0.7) = 0.668\\), \\(L = (0.668 - 1)^2 = 0.110\\)' },
            { label: 'Backward', text: '\\(\\partial L/\\partial a = 2(-0.332) = -0.664\\); \\(\\partial L/\\partial z = -0.664 \\times 0.668 \\times 0.332 = -0.147\\)' },
            { label: 'Parameters', text: '\\(\\partial L/\\partial b = -0.147\\); \\(\\partial L/\\partial w = -0.147 \\times 1.5 = -0.221\\)' },
            { label: 'Update (η = 1)', text: '\\(w \\leftarrow 0.8 + 0.221 = 1.021\\), \\(b \\leftarrow -0.5 + 0.147 = -0.353\\); both negative gradients mean "increase to reduce the loss"' },
          ],
        },
      ],
    },
    {
      id: 'layers',
      title: 'Backprop for a whole layer',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\begin{aligned}
\boldsymbol{\delta}^{[L]} &= \nabla_{\mathbf{a}^{[L]}}\mathcal{L} \odot \phi'\big(\mathbf{z}^{[L]}\big) \\
\boldsymbol{\delta}^{[\ell]} &= \big(W^{[\ell+1]\top}\boldsymbol{\delta}^{[\ell+1]}\big) \odot \phi'\big(\mathbf{z}^{[\ell]}\big) \\
\frac{\partial \mathcal{L}}{\partial W^{[\ell]}} &= \boldsymbol{\delta}^{[\ell]}\,\mathbf{a}^{[\ell-1]\top} \\
\frac{\partial \mathcal{L}}{\partial \mathbf{b}^{[\ell]}} &= \boldsymbol{\delta}^{[\ell]}
\end{aligned}`,
          where: [
            { sym: '\\boldsymbol{\\delta}^{[\\ell]}', def: 'The "error signal" at layer ℓ: ∂L/∂z for each neuron' },
            { sym: '\\odot', def: 'Element-wise multiplication' },
            { sym: 'W^{\\top}', def: 'The transposed weights: the error flows back along the same connections' },
          ],
          syntax: [
            { sym: String.raw`[\ell]`, say: String.raw`Square-bracket superscripts name the layer, not a power: \(W^{[2]}\) means "the weights of layer 2".` },
            { sym: String.raw`\nabla_{\mathbf{a}}\mathcal{L}`, say: 'Read "nabla (or grad) of L with respect to a": the vector holding the slope of the loss in each component of a.' },
            { sym: String.raw`\phi'`, say: 'Read "phi prime": the derivative (slope) of the activation function, evaluated at each entry of z.' },
            { sym: String.raw`\odot`, say: 'Read "Hadamard product": multiply two same-length vectors entry by entry. It is not a dot product and gives a vector back.' },
            { sym: String.raw`\boldsymbol{\delta}\,\mathbf{a}^{\top}`, say: String.raw`A column times a row (an outer product): it builds a whole matrix whose entry in row \(j\), column \(k\) is \(\delta_j \times a_k\), one gradient per weight.` },
          ],
          worked: {
            title: 'One layer, by hand',
            steps: [
              String.raw`Given: output \(a^{[L]} = 0.8\) from a sigmoid, target \(y = 1\), squared loss, output weights \(W^{[L]} = (2, -1)\); hidden pre-activations \(\mathbf{z}^{[\ell]} = (0.5, -1)\) with a ReLU; previous activations \(\mathbf{a}^{[\ell-1]} = (1, 3)\).`,
              String.raw`Line 1, output error: \(\nabla L = 2(0.8 - 1) = -0.4\) and \(\sigma'(z) = 0.8 \times 0.2 = 0.16\), so \(\delta^{[L]} = -0.4 \times 0.16 = -0.064\).`,
              String.raw`Line 2, send it back along the weights: \(W^{[L]\top}\delta^{[L]} = (2, -1) \times (-0.064) = (-0.128,\ 0.064)\).`,
              String.raw`The ReLU slope is 1 where \(z > 0\) and 0 elsewhere, so \(\phi'(\mathbf{z}^{[\ell]}) = (1, 0)\). Entry by entry: \(\boldsymbol{\delta}^{[\ell]} = (-0.128, 0.064) \odot (1, 0) = (-0.128,\ 0)\).`,
              String.raw`Line 3, weight gradient (outer product with \((1, 3)\)): first row \((-0.128 \times 1,\ -0.128 \times 3) = (-0.128,\ -0.384)\), second row \((0, 0)\).`,
              String.raw`Line 4, bias gradient: just \(\boldsymbol{\delta}^{[\ell]} = (-0.128,\ 0)\).`,
            ],
            answer: 'Neuron 2 was switched off by its ReLU, so none of its weights receive any gradient this step; neuron 1 takes all the blame, with a push three times larger on the weight attached to the bigger input (3 versus 1).',
          },
          caption: 'The four equations of backpropagation (in Nielsen’s formulation), read top to bottom: line 1 finds the error at the output layer; line 2 passes that error back one layer at a time (the "back" in backpropagation); lines 3 and 4 convert each layer\'s error signal into the actual gradients used to update its weights and biases. With a sigmoid output and cross-entropy loss, the output error simplifies to δ = ŷ − y.',
        },
        {
          t: 'flow',
          nodes: [
            { label: 'Forward pass', sub: 'store z and a for every layer', tone: 'process' },
            { label: 'Loss', tone: 'output' },
            { label: 'Output error δ', tone: 'model' },
            { label: 'Propagate δ backwards', sub: 'Wᵀδ ⊙ φ′(z)', tone: 'model' },
            { label: 'Gradients for every W and b', tone: 'process' },
            { label: 'Optimiser step', tone: 'human' },
          ],
        },
      ],
    },
    {
      id: 'autograd',
      title: 'Autograd: let the computer do it',
      blocks: [
        {
          t: 'code',
          title: 'PyTorch computes the same gradients',
          code: String.raw`import torch

x, y = torch.tensor(1.5), torch.tensor(1.0)
w = torch.tensor(0.8, requires_grad=True)
b = torch.tensor(-0.5, requires_grad=True)

a = torch.sigmoid(w * x + b)
loss = (a - y) ** 2
loss.backward()            # backpropagation

print(w.grad, b.grad)      # tensor(-0.2207) tensor(-0.1471)`,
        },
        {
          t: 'code',
          title: 'A tiny autograd engine in pure Python',
          code: String.raw`import math

class Value:
    def __init__(self, data, parents=()):
        self.data, self.grad = data, 0.0
        self.parents, self._backward = parents, lambda: None

    def __add__(self, other):
        out = Value(self.data + other.data, (self, other))
        def _backward():                 # addition passes the gradient through
            self.grad += out.grad
            other.grad += out.grad
        out._backward = _backward
        return out

    def __mul__(self, other):
        out = Value(self.data * other.data, (self, other))
        def _backward():                 # multiplication swaps its inputs
            self.grad += other.data * out.grad
            other.grad += self.data * out.grad
        out._backward = _backward
        return out

    def sigmoid(self):
        s = 1 / (1 + math.exp(-self.data))
        out = Value(s, (self,))
        def _backward():
            self.grad += s * (1 - s) * out.grad
        out._backward = _backward
        return out

    def backward(self):
        order, seen = [], set()
        def visit(v):                    # topological order
            if v not in seen:
                seen.add(v)
                for p in v.parents:
                    visit(p)
                order.append(v)
        visit(self)
        self.grad = 1.0
        for v in reversed(order):
            v._backward()`,
          caption: 'In the spirit of Andrej Karpathy’s *micrograd*: every operation records its inputs and a rule for its local derivative; *backward* walks the graph in reverse applying them.',
        },
        { t: 'callout', tone: 'fact', title: 'Invented more than once', text: 'Reverse-mode automatic differentiation was described by Seppo Linnainmaa in his 1970 master’s thesis, and Paul Werbos proposed using it to train neural networks in 1974. It became famous with the 1986 Nature paper by Rumelhart, Hinton and Williams, which showed hidden layers learning useful internal representations.' },
      ],
    },
  ],
  sources: ['Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). Learning representations by back-propagating errors. *Nature*, 323, 533–536.', 'Nielsen, M. (2015). *Neural Networks and Deep Learning*, ch. 2. Determination Press.', 'Karpathy, A. (2020). micrograd. *github.com/karpathy/micrograd*.', 'Baydin, A. G., et al. (2018). Automatic differentiation in machine learning: A survey. *JMLR*, 18, 1–43.'],
  related: ['ai/foundations/maths', 'ai/foundations/gradient-descent', 'ai/neural/training'],
}

export default guide
