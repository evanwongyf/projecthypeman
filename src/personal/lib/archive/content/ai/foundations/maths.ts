import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Machine learning rests on three branches of maths: **linear algebra** (to handle many numbers at once), **calculus** (to know which way to adjust them) and **probability** (to reason about uncertainty). You need less than you might fear; here is the core, with worked examples.',
  nutshell: [
    'A data point is a **vector**; a dataset or a layer of weights is a **matrix**.',
    'The **dot product** measures how aligned two vectors are, and is the basic operation inside every neuron.',
    'A **derivative** is a slope; the **gradient** collects the slopes for every parameter and points uphill.',
    'The **chain rule** lets slopes pass through layers, which is all backpropagation is.',
    '**Bayes’ theorem** updates beliefs with evidence.',
  ],
  sections: [
    {
      id: 'vectors',
      title: 'Vectors and the dot product',
      blocks: [
        { t: 'p', text: 'A vector is an ordered list of numbers. A house might be \\(\\mathbf{x} = (3, 120, 15)\\): 3 bedrooms, 120 m², 15 years old. Each number is a **feature**, and the vector is a point in a 3-dimensional space.' },
        {
          t: 'math',
          tex: String.raw`\mathbf{w}\cdot\mathbf{x} = \sum_{i=1}^{n} w_i x_i = w_1x_1 + w_2x_2 + \dots + w_nx_n \qquad \mathbf{w}\cdot\mathbf{x} = \lVert\mathbf{w}\rVert\,\lVert\mathbf{x}\rVert\cos\theta`,
          where: [
            { sym: '\\mathbf{w}, \\mathbf{x}', def: 'Two vectors of the same length n, e.g. weights and inputs' },
            { sym: '\\theta', def: 'The angle between the two vectors' },
          ],
          syntax: [
            { sym: String.raw`\mathbf{w}\cdot\mathbf{x}`, say: String.raw`Read "w dot x". Bold letters are vectors (lists of numbers); the dot asks you to multiply matching entries and add them up, giving a single number.` },
            { sym: String.raw`w_i x_i`, say: String.raw`Read "w sub i times x sub i": the i-th entry of \(\mathbf{w}\) times the i-th entry of \(\mathbf{x}\). No symbol between them means multiply.` },
            { sym: String.raw`\lVert\mathbf{w}\rVert`, say: String.raw`Read "the norm of w": the length of the vector, \(\sqrt{w_1^2 + w_2^2 + \dots}\).` },
            { sym: String.raw`\cos\theta`, say: String.raw`Read "cosine of theta": 1 when the vectors point the same way, 0 at right angles, \(-1\) when opposite.` },
          ],
          worked: {
            title: String.raw`Dot product of two 3-element vectors`,
            steps: [
              String.raw`Let \(\mathbf{w} = (2, -1, 0.5)\) and \(\mathbf{x} = (4, 3, 2)\).`,
              String.raw`Algebraic form: \(2(4) + (-1)(3) + 0.5(2) = 8 - 3 + 1 = 6\).`,
              String.raw`Lengths: \(\lVert\mathbf{w}\rVert = \sqrt{4 + 1 + 0.25} = \sqrt{5.25} \approx 2.291\) and \(\lVert\mathbf{x}\rVert = \sqrt{16 + 9 + 4} = \sqrt{29} \approx 5.385\).`,
              String.raw`Rearrange the second form: \(\cos\theta = 6/(2.291 \times 5.385) = 6/12.339 \approx 0.486\).`,
              String.raw`So \(\theta = \arccos(0.486) \approx 60.9^\circ\).`,
            ],
            answer: String.raw`The dot product is 6 and the vectors are about \(61^\circ\) apart: positive, so they point broadly the same way, but far from perfectly aligned.`,
          },
          caption: 'Algebraically, multiply matching entries and add. Geometrically, it is large and positive when the vectors point the same way, zero when at right angles, and negative when opposed, so a dot product is really measuring *alignment*, not just size. That is the second formula\'s point: the result is the vectors\' lengths times how aligned they are (cos θ), which is exactly why a neuron can be read as asking "how much does this input look like the pattern I\'m tuned to detect?"',
        },
        {
          t: 'example',
          title: 'A neuron is a dot product',
          lines: [
            { label: 'Inputs', text: '\\(\\mathbf{x} = (2, 1, 3)\\)' },
            { label: 'Weights', text: '\\(\\mathbf{w} = (0.5, -1, 2)\\), bias \\(b = 0.5\\)' },
            { label: 'Sum', text: '\\(z = 0.5(2) + (-1)(1) + 2(3) + 0.5 = 1 - 1 + 6 + 0.5 = 6.5\\)' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\lVert\mathbf{x}\rVert_2 = \sqrt{\textstyle\sum_i x_i^2} \qquad \lVert\mathbf{x}\rVert_1 = \textstyle\sum_i |x_i| \qquad \cos(\mathbf{a},\mathbf{b}) = \frac{\mathbf{a}\cdot\mathbf{b}}{\lVert\mathbf{a}\rVert\,\lVert\mathbf{b}\rVert}`,
          where: [{ sym: '\\mathbf{a}, \\mathbf{b}', def: 'Any two vectors being compared' }],
          syntax: [
            { sym: String.raw`\lVert\mathbf{x}\rVert_2`, say: String.raw`Read "the L2 norm of x" (or "two-norm"): the subscript says which kind of length. Square each entry, add, take the square root.` },
            { sym: String.raw`\lVert\mathbf{x}\rVert_1`, say: String.raw`Read "the L1 norm of x": drop the signs and add the entries.` },
            { sym: String.raw`\sqrt{\textstyle\sum_i x_i^2}`, say: String.raw`Read "the square root of the sum of x sub i squared": the \(\sum\) covers everything beneath the root, and the root is applied last.` },
            { sym: String.raw`\cos(\mathbf{a},\mathbf{b})`, say: String.raw`Read "the cosine similarity of a and b": a number between \(-1\) and 1 saying how closely the directions agree.` },
          ],
          worked: {
            title: String.raw`Norms and cosine similarity`,
            steps: [
              String.raw`Let \(\mathbf{a} = (1, 2, 2)\) and \(\mathbf{b} = (2, 0, 1)\).`,
              String.raw`\(\lVert\mathbf{a}\rVert_2 = \sqrt{1 + 4 + 4} = 3\); \(\lVert\mathbf{a}\rVert_1 = 1 + 2 + 2 = 5\).`,
              String.raw`\(\lVert\mathbf{b}\rVert_2 = \sqrt{4 + 0 + 1} = \sqrt{5} \approx 2.236\).`,
              String.raw`\(\mathbf{a}\cdot\mathbf{b} = 2 + 0 + 2 = 4\), so \(\cos(\mathbf{a},\mathbf{b}) = 4/(3 \times 2.236) \approx 0.596\).`,
              String.raw`Double \(\mathbf{a}\) to \((2, 4, 4)\): the dot product with \(\mathbf{a}\) is \(2 + 8 + 8 = 18\) and the lengths are 3 and 6, so cosine \(= 18/18 = 1\).`,
            ],
            answer: String.raw`\(\mathbf{a}\) and \(\mathbf{b}\) have cosine similarity about 0.60 (moderately aligned), while \(\mathbf{a}\) and \(2\mathbf{a}\) score exactly 1: cosine ignores length and compares direction only.`,
          },
          caption: 'Lengths (norms) and cosine similarity. The L2 norm is ordinary straight-line distance from the origin; the L1 norm adds absolute values instead of squaring, which weighs every unit of distance equally rather than punishing one big coordinate more than several small ones, that difference is what makes L1 regularisation push weights to exactly zero while L2 just shrinks them. Cosine similarity divides the dot product by both lengths, stripping out size entirely: it always lands between −1 (opposite directions) and 1 (same direction), with 0 meaning unrelated, which is why it is the standard way to compare embeddings regardless of how "long" each one happens to be.',
        },
      ],
    },
    {
      id: 'matrices',
      title: 'Matrices: many dot products at once',
      blocks: [
        {
          t: 'math',
          tex: String.raw`W\mathbf{x} = \begin{pmatrix} 1 & 2 \\ 0 & -1 \\ 3 & 1 \end{pmatrix}\begin{pmatrix} 4 \\ 5 \end{pmatrix} = \begin{pmatrix} 1\cdot4 + 2\cdot5 \\ 0\cdot4 - 1\cdot5 \\ 3\cdot4 + 1\cdot5 \end{pmatrix} = \begin{pmatrix} 14 \\ -5 \\ 17 \end{pmatrix}`,
          syntax: [
            { sym: String.raw`W\mathbf{x}`, say: String.raw`Read "W times x": a capital letter is a matrix, a bold lowercase letter is a vector. Dot each row of \(W\) with \(\mathbf{x}\).` },
            { sym: String.raw`3 \times 2`, say: String.raw`Read "three by two": 3 rows, 2 columns. Rows always come first.` },
          ],
          worked: {
            title: String.raw`Three neurons reading two inputs`,
            steps: [
              String.raw`Inputs \(\mathbf{x} = (4, 5)\), for example 4 hours revised and 5 past papers done. Three neurons with weight rows \((1, 2)\), \((0, -1)\), \((3, 1)\) and biases \(\mathbf{b} = (1, 0, -2)\).`,
              String.raw`Row 1: \(1\cdot4 + 2\cdot5 = 14\). Row 2: \(0\cdot4 + (-1)\cdot5 = -5\). Row 3: \(3\cdot4 + 1\cdot5 = 17\).`,
              String.raw`Add the biases: \(14 + 1 = 15\), \(-5 + 0 = -5\), \(17 - 2 = 15\).`,
              String.raw`Apply ReLU (replace negatives by 0): \((15, -5, 15) \to (15, 0, 15)\).`,
            ],
            answer: String.raw`\(W\mathbf{x} + \mathbf{b} = (15, -5, 15)\), and after ReLU the layer outputs \((15, 0, 15)\): the second neuron stays silent for this input.`,
          },
          caption: 'Each row of W is one neuron’s weights; multiplying by the input vector gives every neuron’s sum at once. A 3×2 matrix maps 2 inputs to 3 outputs.',
        },
        {
          t: 'math',
          tex: String.raw`(AB)_{ij} = \sum_k A_{ik}B_{kj} \qquad (m\times n)(n\times p) \to (m\times p) \qquad (A^{\top})_{ij} = A_{ji}`,
          where: [{ sym: '(AB)_{ij}', def: 'The entry in row i, column j of the product: row i of A dotted with column j of B' }],
          syntax: [
            { sym: String.raw`(AB)_{ij}`, say: String.raw`Read "the i j entry of A B": row i, column j of the product matrix. Subscripts are always row first, then column.` },
            { sym: String.raw`\sum_k A_{ik}B_{kj}`, say: String.raw`Read "the sum over k of A i k times B k j": run along row i of A and down column j of B together, multiplying pairs and adding.` },
            { sym: String.raw`(m\times n)(n\times p) \to (m\times p)`, say: String.raw`Read "m by n times n by p gives m by p": the two middle numbers must match and then cancel, leaving the outer ones.` },
            { sym: String.raw`A^{\top}`, say: String.raw`Read "A transpose": swap rows and columns, so \((A^{\top})_{ij} = A_{ji}\).` },
          ],
          worked: {
            title: String.raw`Multiplying two 2×2 matrices`,
            steps: [
              String.raw`Let \(A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\) and \(B = \begin{pmatrix} 0 & 1 \\ 5 & 2 \end{pmatrix}\). Shapes \((2\times2)(2\times2) \to (2\times2)\).`,
              String.raw`\((AB)_{11}\) = row 1 of A dot column 1 of B \(= 1\cdot0 + 2\cdot5 = 10\).`,
              String.raw`\((AB)_{12} = 1\cdot1 + 2\cdot2 = 5\).`,
              String.raw`\((AB)_{21} = 3\cdot0 + 4\cdot5 = 20\) and \((AB)_{22} = 3\cdot1 + 4\cdot2 = 11\).`,
              String.raw`Transpose: \(A^{\top} = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}\), since \((A^{\top})_{12} = A_{21} = 3\).`,
            ],
            answer: String.raw`\(AB = \begin{pmatrix} 10 & 5 \\ 20 & 11 \end{pmatrix}\); each of its four entries was one dot product.`,
          },
          caption: 'Each entry of the product is just a dot product in disguise: row i of A against column j of B. That is why the inner sizes must match (A\'s columns = B\'s rows), without that, there is nothing of equal length to dot together. Stacking a batch of inputs as rows of a matrix X lets a GPU process them all in one multiplication: that is why GPUs matter. The transpose simply flips rows and columns, turning row i into column i.',
        },
        {
          t: 'code',
          title: 'NumPy does the same',
          code: String.raw`import numpy as np

W = np.array([[1, 2], [0, -1], [3, 1]])
x = np.array([4, 5])
print(W @ x)          # [14 -5 17]

a = np.array([1.0, 2.0, 2.0])
print(np.linalg.norm(a))   # 3.0
print(a @ a)                # 9.0, the dot product`,
        },
      ],
    },
    {
      id: 'calculus',
      title: 'Derivatives, gradients and the chain rule',
      blocks: [
        {
          t: 'plot',
          title: 'The derivative is the slope of the tangent',
          x: [-1, 3],
          y: [-1, 5],
          xLabel: 'x',
          yLabel: 'f(x) = x²',
          curves: [{ f: (x: number) => x * x, label: 'f(x) = x²' }, { f: (x: number) => 3 * x - 2.25, label: 'tangent at x = 1.5, slope 3', dashed: true, color: '#d9534f' }],
          points: [{ x: 1.5, y: 2.25, label: 'slope f′(1.5) = 3' }],
        },
        {
          t: 'math',
          tex: String.raw`f'(x) = \lim_{h\to 0}\frac{f(x+h) - f(x)}{h} \qquad \frac{d}{dx}x^n = nx^{n-1} \qquad \frac{d}{dx}e^x = e^x \qquad \frac{d}{dx}\ln x = \frac{1}{x}`,
          where: [{ sym: 'h', def: 'A tiny step away from x, shrinking towards zero' }],
          syntax: [
            { sym: String.raw`f'(x)`, say: String.raw`Read "f prime of x": the derivative of f, which is itself a function giving the slope at every x.` },
            { sym: String.raw`\lim_{h\to 0}`, say: String.raw`Read "the limit as h goes to zero": see what the expression settles towards as h gets smaller and smaller (without ever being zero).` },
            { sym: String.raw`\frac{d}{dx}`, say: String.raw`Read "d by dx of": an instruction meaning "take the derivative with respect to x of whatever follows".` },
            { sym: String.raw`x^{n-1}`, say: String.raw`Read "x to the n minus 1": the exponent is the whole expression \(n - 1\). The rule says bring the power down in front, then lower it by one.` },
          ],
          worked: {
            title: String.raw`The slope of x² at x = 1.5`,
            steps: [
              String.raw`Take \(f(x) = x^2\) and \(x = 1.5\), so \(f(1.5) = 2.25\).`,
              String.raw`\(h = 0.1\): \((1.6^2 - 2.25)/0.1 = 0.31/0.1 = 3.1\).`,
              String.raw`\(h = 0.01\): \((1.51^2 - 2.25)/0.01 = 0.0301/0.01 = 3.01\).`,
              String.raw`\(h = 0.001\): \(0.003001/0.001 = 3.001\). The values are closing in on 3.`,
              String.raw`Power rule check: \(\frac{d}{dx}x^2 = 2x^{1}\), and at \(x = 1.5\) that is \(3\). Another: \(\frac{d}{dx}x^3 = 3x^2 = 12\) at \(x = 2\).`,
            ],
            answer: String.raw`The slope of \(x^2\) at 1.5 is exactly 3: the limit and the shortcut rule agree.`,
          },
          caption: 'The first formula is the definition: nudge x by a vanishingly small amount h and see how much f(x) moved, which is exactly "rise over run" for a straight line zoomed in close enough to look straight. f′(x) is a rate, not a value, it says how fast f is changing right at x, which is why it is positive where f is rising, negative where f is falling, and zero at a peak or valley. The three rules that follow are shortcuts for computing that rate without ever having to take the limit by hand; notice e^x is its own derivative, which is precisely why it shows up throughout probability and growth models.',
        },
        {
          t: 'math',
          tex: String.raw`\nabla L(\mathbf{w}) = \left(\frac{\partial L}{\partial w_1},\ \frac{\partial L}{\partial w_2},\ \dots,\ \frac{\partial L}{\partial w_n}\right)`,
          syntax: [
            { sym: String.raw`\nabla L`, say: String.raw`Read "nabla L" or "grad L" (nabla is the upside-down triangle): the gradient of L, a vector with one slope per parameter.` },
            { sym: String.raw`\frac{\partial L}{\partial w_1}`, say: String.raw`Read "partial L partial w one": the slope of L as you wiggle only \(w_1\), freezing every other weight. The curly \(\partial\) (rather than \(d\)) warns that other variables exist.` },
            { sym: String.raw`L(\mathbf{w})`, say: String.raw`Read "L of w": the loss is a function of the whole vector of weights.` },
          ],
          worked: {
            title: String.raw`Gradient of a squared error with two weights`,
            steps: [
              String.raw`One example: \(\mathbf{x} = (2, 1)\), target \(y = 5\). Loss \(L = (w_1x_1 + w_2x_2 - y)^2\). Current weights \(\mathbf{w} = (1, 1)\).`,
              String.raw`Prediction \(= 1(2) + 1(1) = 3\), error \(= 3 - 5 = -2\), so \(L = 4\).`,
              String.raw`Chain rule on the square: \(\partial L/\partial w_1 = 2(\text{error})\,x_1 = 2(-2)(2) = -8\) and \(\partial L/\partial w_2 = 2(-2)(1) = -4\).`,
              String.raw`So \(\nabla L = (-8, -4)\). Step against it with step size 0.1: \(\mathbf{w} \leftarrow (1, 1) - 0.1(-8, -4) = (1.8, 1.4)\).`,
              String.raw`New prediction \(= 1.8(2) + 1.4(1) = 5.0\), so the new loss is 0.`,
            ],
            answer: String.raw`\(\nabla L = (-8, -4)\): both slopes are negative, so raising either weight lowers the loss. One step took the loss from 4 to 0.`,
          },
          caption: 'With many parameters, a partial derivative is the slope along one of them with the others held still. The gradient vector points in the direction of steepest increase, so we step the opposite way to reduce the loss.',
        },
        {
          t: 'example',
          title: 'A gradient by hand',
          lines: [
            { label: 'Function', text: '\\(L(w_1, w_2) = w_1^2 + 3w_1w_2\\)' },
            { label: 'Partials', text: '\\(\\partial L/\\partial w_1 = 2w_1 + 3w_2\\), \\(\\partial L/\\partial w_2 = 3w_1\\)' },
            { label: 'At (1, 2)', text: '\\(\\nabla L = (2 + 6,\\ 3) = (8, 3)\\): increasing \\(w_1\\) raises the loss fastest' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\frac{dL}{dx} = \frac{dL}{dy}\cdot\frac{dy}{dx} \qquad \text{e.g. } L = (3x+1)^2:\ \ \frac{dL}{dx} = 2(3x+1)\cdot 3`,
          where: [{ sym: 'y', def: 'An intermediate quantity that sits between x and L, e.g. y = 3x + 1 in the worked example' }],
          syntax: [
            { sym: String.raw`\frac{dL}{dx}`, say: String.raw`Read "d L by d x": how fast L changes per unit change in x. It is a single symbol for a rate, not a fraction you can cancel casually.` },
            { sym: String.raw`\frac{dL}{dy}\cdot\frac{dy}{dx}`, say: String.raw`Read "dL by dy times dy by dx": multiply the slope of each link in the chain, working from the output back to the input.` },
          ],
          worked: {
            title: String.raw`Differentiating (3x + 1)² at x = 2`,
            steps: [
              String.raw`Split into two links: \(y = 3x + 1\) and \(L = y^2\). At \(x = 2\): \(y = 7\) and \(L = 49\).`,
              String.raw`Outer link: \(dL/dy = 2y = 14\).`,
              String.raw`Inner link: \(dy/dx = 3\).`,
              String.raw`Multiply: \(dL/dx = 14 \times 3 = 42\), matching the formula \(2(3x+1)\cdot3 = 2(7)(3) = 42\).`,
              String.raw`Numerical check: at \(x = 2.001\), \(y = 7.003\) and \(L = 49.042009\). The change is \(0.042009\) over a step of \(0.001\), about 42.0.`,
            ],
            answer: String.raw`\(dL/dx = 42\): nudging x up by a tiny amount raises L about 42 times as much.`,
          },
          caption: 'The chain rule: the slope through a chain of functions is the product of the slopes along the way, not their sum, so a tiny slope anywhere in the chain (near zero) can shrink the whole product towards zero, no matter how steep the other links are. A neural network is a long chain of functions, one per layer, so this rule is exactly how an error measured at the output gets turned into an adjustment for a weight buried many layers back.',
        },
      ],
    },
    {
      id: 'probability',
      title: 'Probability and Bayes',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(A \mid B) = \frac{P(B \mid A)\,P(A)}{P(B)} \qquad \mathbb{E}[X] = \sum_x x\,P(x) \qquad \operatorname{Var}(X) = \mathbb{E}\big[(X - \mathbb{E}[X])^2\big]`,
          where: [
            { sym: 'P(A)', def: 'The prior: how likely A is before seeing any evidence' },
            { sym: 'P(B \\mid A)', def: 'The likelihood: how likely the evidence B is, if A is true' },
            { sym: '\\mathbb{E}[X]', def: 'The expected value: the long-run average of X if you sampled it forever' },
          ],
          syntax: [
            { sym: String.raw`P(A \mid B)`, say: String.raw`Read "the probability of A given B": the vertical bar means "given" or "supposing we know". Only look at the cases where B happened.` },
            { sym: String.raw`\sum_x x\,P(x)`, say: String.raw`Read "the sum over x of x times P of x": for each possible value, multiply it by its probability, then add.` },
            { sym: String.raw`\mathbb{E}[X]`, say: String.raw`Read "the expected value of X": the probability-weighted average of X.` },
            { sym: String.raw`\operatorname{Var}(X)`, say: String.raw`Read "the variance of X": the expected squared distance from the mean.` },
          ],
          worked: {
            title: String.raw`Bayes, an expectation and a variance`,
            steps: [
              String.raw`Spam filter: 30% of email is spam, so \(P(\text{spam}) = 0.3\). The word "free" appears in 60% of spam and 5% of real email: \(P(\text{free} \mid \text{spam}) = 0.6\), \(P(\text{free} \mid \text{ham}) = 0.05\).`,
              String.raw`\(P(\text{free}) = 0.6(0.3) + 0.05(0.7) = 0.18 + 0.035 = 0.215\).`,
              String.raw`\(P(\text{spam} \mid \text{free}) = 0.18/0.215 \approx 0.837\).`,
              String.raw`Expectation: an exam score X is 50, 60 or 70 with probabilities 0.2, 0.5, 0.3. \(\mathbb{E}[X] = 50(0.2) + 60(0.5) + 70(0.3) = 10 + 30 + 21 = 61\).`,
              String.raw`Variance: deviations \(-11, -1, 9\); \(\operatorname{Var} = 121(0.2) + 1(0.5) + 81(0.3) = 24.2 + 0.5 + 24.3 = 49\), so the standard deviation is 7.`,
            ],
            answer: String.raw`Seeing "free" lifts the chance of spam from 30% to about 84%; the exam score averages 61 and typically strays about 7 marks from that.`,
          },
          caption: 'Bayes’ theorem turns "how likely is the evidence if the hypothesis is true" (usually easy to know) into "how likely is the hypothesis given the evidence" (usually what you actually want to know), dividing by P(B) is what keeps the result a genuine probability. E[X] is just a weighted average: every possible value weighted by how often it occurs, so rare extreme values barely move it unless their probability is large too. Var(X) measures how far X typically strays from that average, squared so it is always positive and so far strays count more, a small variance means X is reliably close to E[X] every time you sample it; a large one means wild swings are normal.',
        },
        {
          t: 'example',
          title: 'The rare-disease surprise',
          lines: [
            { label: 'Facts', text: '1% of people have the disease; the test catches 99% of cases and wrongly flags 5% of healthy people' },
            { label: 'Evidence', text: '\\(P(+) = 0.99(0.01) + 0.05(0.99) = 0.0594\\)' },
            { label: 'Answer', text: '\\(P(\\text{ill} \\mid +) = 0.0099 / 0.0594 \\approx 16.7\\%\\): most positive tests are false alarms, because healthy people are so common' },
          ],
        },
        {
          t: 'plot',
          title: 'The normal (Gaussian) distribution',
          x: [-4, 4],
          y: [0, 0.45],
          curves: [{ f: (x: number) => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI), label: 'μ = 0, σ = 1' }, { f: (x: number) => Math.exp(-((x - 1) ** 2) / (2 * 2.25)) / Math.sqrt(2 * Math.PI * 2.25), label: 'μ = 1, σ = 1.5', dashed: true }],
          shade: [{ from: -1, to: 1, label: '68% within 1σ' }],
          caption: 'Noise, measurement error and weight initialisation are often modelled as normal.',
        },
        {
          t: 'math',
          tex: String.raw`\mathcal{N}(x \mid \mu, \sigma^2) = \frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}}`,
          where: [
            { sym: '\\mu', def: 'The mean: where the bell curve is centred' },
            { sym: '\\sigma', def: 'The standard deviation: how wide the bell curve is' },
          ],
          syntax: [
            { sym: String.raw`\mathcal{N}(x \mid \mu, \sigma^2)`, say: String.raw`Read "normal distribution of x with mean mu and variance sigma squared". The bar means "given these parameters". The whole thing is the height of the curve at x.` },
            { sym: String.raw`e^{-\frac{(x-\mu)^2}{2\sigma^2}}`, say: String.raw`Read "e to the minus (x minus mu) squared over two sigma squared": everything after the \(e^{\ }\) is the exponent. The bigger the squared distance from \(\mu\), the more negative it gets, and the smaller the result.` },
            { sym: String.raw`\sigma\sqrt{2\pi}`, say: String.raw`Read "sigma times the square root of two pi": a constant that makes the area under the curve equal 1.` },
          ],
          worked: {
            title: String.raw`Heights of a normal curve with μ = 0, σ = 1`,
            steps: [
              String.raw`With \(\mu = 0\) and \(\sigma = 1\) the constant is \(1/\sqrt{2\pi} \approx 0.3989\).`,
              String.raw`At \(x = 0\): exponent \(= 0\), \(e^{0} = 1\), height \(= 0.3989\) (the peak).`,
              String.raw`At \(x = 1\): exponent \(= -1/2\), \(e^{-0.5} = 0.6065\), height \(= 0.3989 \times 0.6065 \approx 0.2420\).`,
              String.raw`At \(x = 2\): exponent \(= -2\), \(e^{-2} = 0.1353\), height \(\approx 0.0540\).`,
              String.raw`Widen to \(\sigma = 1.5\) (\(\mu = 0\)): the peak becomes \(0.3989/1.5 \approx 0.266\), lower and flatter.`,
            ],
            answer: String.raw`The curve peaks at 0.399 and falls to 0.242 one standard deviation out and 0.054 two out; a wider \(\sigma\) lowers the peak in proportion.`,
          },
          caption: 'This is the formula behind the bell curve plotted above. The exponent is a squared, scaled distance from the mean, so the curve peaks at x = μ and falls away symmetrically on both sides; a larger σ divides that distance down more, so the curve widens and flattens, while a smaller σ makes it tall and narrow. The 1/(σ√2π) in front just rescales the height so the total area under the curve is exactly 1, as any probability distribution must have.',
        },
        { t: 'callout', tone: 'tip', title: 'Why logs appear everywhere', text: 'Probabilities of many independent events multiply, and products of tiny numbers underflow on computers. Taking logs turns products into sums: \\(\\log\\prod p_i = \\sum \\log p_i\\). That is why losses are written as log-likelihoods.' },
        { t: 'callout', tone: 'fact', title: 'Reverend Bayes', text: 'Thomas Bayes, an 18th-century English minister, never published his theorem. His friend Richard Price found it in his papers and presented it to the Royal Society in 1763, two years after Bayes died.' },
      ],
    },
  ],
  sources: ['Deisenroth, M. P., Faisal, A. A., & Ong, C. S. (2020). *Mathematics for Machine Learning*. Cambridge University Press.', 'Strang, G. (2019). *Linear Algebra and Learning from Data*. Wellesley-Cambridge Press.'],
  related: ['ai/foundations/gradient-descent', 'ai/neural/backprop', 'ai/algorithms/naive-bayes'],
}

export default guide
