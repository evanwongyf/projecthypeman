import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Despite its name, logistic regression is a **classifier**. It computes a weighted sum like linear regression, then squashes it through the S-shaped **sigmoid** to get a probability between 0 and 1. It is fast, interpretable, and the single neuron that neural networks are built from.',
  nutshell: [
    '\\(P(y = 1 \\mid \\mathbf{x}) = \\sigma(\\mathbf{w}\\cdot\\mathbf{x} + b)\\) with \\(\\sigma(z) = 1/(1 + e^{-z})\\).',
    'The weighted sum is the **log-odds**; each weight says how a feature shifts the odds.',
    'Trained by minimising **cross-entropy** (log loss), which has no closed form, so gradient descent is used.',
    'The **decision boundary** \\(\\mathbf{w}\\cdot\\mathbf{x} + b = 0\\) is a straight line (or plane).',
  ],
  sections: [
    {
      id: 'sigmoid',
      title: 'The sigmoid',
      blocks: [
        {
          t: 'plot',
          title: 'σ(z) turns any number into a probability',
          x: [-8, 8],
          y: [0, 1],
          xLabel: 'z = w·x + b',
          yLabel: 'σ(z)',
          curves: [{ f: (z: number) => 1 / (1 + Math.exp(-z)), label: 'σ(z)' }, { f: (z: number) => (1 / (1 + Math.exp(-z))) * (1 - 1 / (1 + Math.exp(-z))), label: 'σ′(z) = σ(1 − σ)', dashed: true, color: '#e07b2a' }],
          hlines: [{ y: 0.5, label: 'threshold 0.5' }],
          points: [{ x: 0, y: 0.5, label: 'z = 0' }],
        },
        {
          t: 'math',
          tex: String.raw`\sigma(z) = \frac{1}{1 + e^{-z}} \qquad \sigma'(z) = \sigma(z)\big(1 - \sigma(z)\big) \qquad \log\frac{p}{1 - p} = \mathbf{w}\cdot\mathbf{x} + b`,
          where: [
            { sym: 'z', def: 'The weighted sum w·x + b, a plain, unbounded number, positive or negative' },
            { sym: '\\sigma(z)', def: 'That number squashed into a probability between 0 and 1' },
            { sym: 'p', def: 'Shorthand for σ(z), the predicted probability' },
          ],
          syntax: [
            { sym: String.raw`\sigma(z)`, say: String.raw`Read "sigma of z", the sigmoid or logistic function. Here \(\sigma\) is the name of a squashing function, not a standard deviation.` },
            { sym: String.raw`e^{-z}`, say: String.raw`\(e \approx 2.718\), and \(e^{-z} = 1/e^{z}\). For large positive \(z\) this is near 0, so \(\sigma(z)\) is near 1; for very negative \(z\) it is huge, so \(\sigma(z)\) is near 0.` },
            { sym: String.raw`\sigma'(z)`, say: String.raw`Read "sigma prime of z": the derivative (slope) of \(\sigma\). The formula says slope = \(p(1-p)\), which is steepest (0.25) at \(z = 0\) and flat in the tails.` },
            { sym: String.raw`\log\frac{p}{1 - p}`, say: String.raw`The fraction \(p/(1-p)\) is the odds; its log is the "log-odds" (logit). Here \(\log\) is the natural log.` },
            { sym: String.raw`\mathbf{w}\cdot\mathbf{x}`, say: String.raw`Dot product: multiply matching entries and add them up, \(w_1 x_1 + w_2 x_2 + \dots\).` },
          ],
          worked: {
            title: String.raw`From hours revised to a pass probability`,
            steps: [
              String.raw`One feature, \(x\) = hours revised, with \(w = 1.2\) and \(b = -4\), so \(z = 1.2x - 4\).`,
              String.raw`\(x = 3.5\): \(z = 0.2\), \(\sigma = 1/(1 + e^{-0.2}) = 1/(1 + 0.8187) = 0.550\). Slope there: \(0.550 \times 0.450 = 0.2475\).`,
              String.raw`\(x = 5\): \(z = 2\), \(\sigma = 1/(1 + 0.1353) = 0.881\). \(x = 1\): \(z = -2.8\), \(\sigma = 0.057\).`,
              String.raw`Check the log-odds at \(x = 5\): odds \(= 0.881/0.119 = 7.39 = e^{2}\), so \(\log\) odds \(= 2 = z\).`,
              String.raw`Each extra hour adds 1.2 to the log-odds, multiplying the odds by \(e^{1.2} = 3.32\).`,
            ],
            answer: String.raw`Revising 3.5 hours gives a 55% chance of passing, 5 hours gives 88% and 1 hour gives 6%, and every hour roughly triples the odds.`,
          },
          caption: 'σ(z) is an S-curve: very negative z gives a probability near 0, very positive z gives near 1, and z = 0 gives exactly 0.5, so the model only has to get the *sign and size* of z right, and the sigmoid handles turning that into a sensible probability. The last formula says the model is linear in the log-odds: a weight of 0.7 means each extra unit of that feature multiplies the odds (not the probability) by e^0.7 ≈ 2.',
        },
        {
          t: 'metric',
          name: 'the predicted probability, p̂',
          shows: 'How confident the model is that this example belongs to the positive class, the weighted sum z run through the sigmoid so it always lands between 0 and 1, however extreme z gets.',
          eli5: 'It\'s a weather forecaster\'s "70% chance of rain", but for a class label: p̂ = 0.7 means the model thinks there\'s a 70% chance this example is a "yes", based on everything it learned from similar examples during training.',
          higher: 'The further above 0.5, the more confident the model is in the positive class, p̂ = 0.99 says "I would be very surprised if this were a no". Pushing p̂ close to 1 requires z to be strongly positive, which needs the weighted evidence to point firmly one way; it also means a wrong guess here costs a lot under cross-entropy loss.',
          lower: 'The further below 0.5, the more confident the model is in the negative class. p̂ near 0 says "almost certainly not"again cheap to be right about, expensive to be wrong about.',
          typical: 'p̂ near 0.5 means z is near 0: the model is sitting right on the fence, which is exactly where the decision boundary lives and where a small change in the input can flip the predicted label. A threshold (usually 0.5, but tunable) turns p̂ into a hard yes/no; a well-calibrated model should be right about 70% of the time among all the cases it scores around p̂ = 0.7.',
        },
      ],
    },
    {
      id: 'loss',
      title: 'Cross-entropy and its gradient',
      blocks: [
        {
          t: 'math',
          tex: String.raw`L = -\frac{1}{n}\sum_{i=1}^{n}\Big[y_i\log\hat{p}_i + (1 - y_i)\log(1 - \hat{p}_i)\Big]`,
          where: [
            { sym: 'y_i', def: 'The true label for example i, 0 or 1' },
            { sym: '\\hat{p}_i', def: 'The model\'s predicted probability that example i is class 1' },
            { sym: 'n', def: 'The number of training examples' },
          ],
          syntax: [
            { sym: String.raw`\sum_{i=1}^{n}`, say: String.raw`Read "the sum from i equals 1 to n": add up the term inside for every training example.` },
            { sym: String.raw`-\frac{1}{n}`, say: String.raw`The leading minus sign flips the negative logs of probabilities into positive losses; \(\tfrac{1}{n}\) turns the total into an average.` },
            { sym: String.raw`y_i\log\hat{p}_i + (1 - y_i)\log(1 - \hat{p}_i)`, say: String.raw`Because \(y_i\) is 0 or 1, it acts as a switch: for \(y_i = 1\) only the first product survives, for \(y_i = 0\) only the second. Here \(\log\) is the natural log.` },
          ],
          worked: {
            title: String.raw`Cross-entropy on three examples`,
            steps: [
              String.raw`Three examples with true labels and predicted probabilities: \((y = 1, \hat{p} = 0.9)\), \((y = 0, \hat{p} = 0.2)\), \((y = 1, \hat{p} = 0.3)\).`,
              String.raw`Example 1: only \(-\ln 0.9 = 0.105\) survives.`,
              String.raw`Example 2 (\(y = 0\)): only \(-\ln(1 - 0.2) = -\ln 0.8 = 0.223\) survives.`,
              String.raw`Example 3: \(-\ln 0.3 = 1.204\).`,
              String.raw`\(L = (0.105 + 0.223 + 1.204)/3 = 0.511\).`,
            ],
            answer: String.raw`The loss is 0.511 and most of it comes from example 3, which was wrong; had that prediction been a confident \(\hat{p} = 0.01\), its term would be \(-\ln 0.01 = 4.605\) and \(L\) would jump to 1.645.`,
          },
          caption: 'This is the negative log-likelihood: maximising the probability the model gives to the true labels. Only one of the two bracketed terms ever survives per example, because the other is multiplied by zero, if y = 1, only −log p̂ counts, which is 0 when p̂ = 1 and explodes towards infinity as p̂ → 0. That steep blow-up near the wrong extreme is the point: it punishes a confident, wrong prediction far more harshly than an unconfident one.',
        },
        {
          t: 'plot',
          title: 'The loss for one example whose true label is 1',
          x: [0.01, 1],
          y: [0, 4.6],
          xLabel: 'predicted probability p̂',
          yLabel: 'loss −log p̂',
          curves: [{ f: (p: number) => -Math.log(p), label: '−log p̂' }],
        },
        {
          t: 'math',
          tex: String.raw`\frac{\partial L}{\partial \mathbf{w}} = \frac{1}{n}\sum_i (\hat{p}_i - y_i)\,\mathbf{x}_i \qquad \frac{\partial L}{\partial b} = \frac{1}{n}\sum_i (\hat{p}_i - y_i)`,
          where: [{ sym: '\\hat{p}_i - y_i', def: 'The error on example i: how far the predicted probability was from the true 0/1 label' }],
          syntax: [
            { sym: String.raw`\frac{\partial L}{\partial \mathbf{w}}`, say: String.raw`Read "the partial derivative of L with respect to w": how the loss changes as the weights nudge up. Bold \(\mathbf{w}\) is a vector, so the result is a vector with one slope per weight.` },
            { sym: String.raw`(\hat{p}_i - y_i)\,\mathbf{x}_i`, say: String.raw`A single number (the error) multiplies the whole input vector, so each weight is pushed in proportion to its own feature.` },
          ],
          worked: {
            title: String.raw`One logistic gradient step`,
            steps: [
              String.raw`Use one feature \(x = 2, 1, 3\), labels \(y = 1, 0, 1\) and predictions \(\hat{p} = 0.9, 0.2, 0.3\). The errors \(\hat{p} - y\) are \(-0.1, 0.2, -0.7\).`,
              String.raw`\(\partial L/\partial w = \tfrac{1}{3}(2 \times (-0.1) + 1 \times 0.2 + 3 \times (-0.7)) = \tfrac{1}{3}(-0.2 + 0.2 - 2.1) = -0.7\).`,
              String.raw`\(\partial L/\partial b = \tfrac{1}{3}(-0.1 + 0.2 - 0.7) = -0.2\).`,
              String.raw`With learning rate 0.5: \(w \leftarrow w - 0.5 \times (-0.7) = w + 0.35\) and \(b \leftarrow b + 0.1\).`,
            ],
            answer: String.raw`Both gradients are negative, so gradient descent raises \(w\) and \(b\); the push comes mostly from example 3, which was wrong and has the largest input.`,
          },
          caption: 'A neat result: the sigmoid’s derivative cancels with the log, leaving just "prediction minus truth" times the input. Read it directly: if the model is confident and correct, the error is near zero and that example barely moves the weights; the bigger and more confidently wrong a prediction is, the harder gradient descent pulls the weights towards fixing it. The same simplification makes sigmoid-plus-cross-entropy the standard output layer for networks.',
        },
        {
          t: 'example',
          title: 'Will a student pass?',
          lines: [
            { label: 'Model', text: '\\(z = -4 + 1.5\\,(\\text{hours})\\)' },
            { label: '2 hours', text: '\\(z = -1\\), \\(p = \\sigma(-1) = 0.27\\)' },
            { label: '4 hours', text: '\\(z = 2\\), \\(p = \\sigma(2) = 0.88\\)' },
            { label: 'Boundary', text: '\\(z = 0\\) at \\(4/1.5 \\approx 2.7\\) hours; each hour multiplies the odds by \\(e^{1.5} \\approx 4.5\\)' },
          ],
        },
      ],
    },
    {
      id: 'multiclass',
      title: 'More than two classes: softmax',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(y = k \mid \mathbf{x}) = \operatorname{softmax}(\mathbf{z})_k = \frac{e^{z_k}}{\sum_{j=1}^{K} e^{z_j}} \qquad z_k = \mathbf{w}_k\cdot\mathbf{x} + b_k`,
          where: [
            { sym: 'z_k', def: 'Class k\'s raw score, its own weighted sum, before any squashing' },
            { sym: 'K', def: 'The number of classes' },
          ],
          syntax: [
            { sym: String.raw`P(y = k \mid \mathbf{x})`, say: String.raw`Read "the probability that y equals k, given x". The vertical bar means "given".` },
            { sym: String.raw`\operatorname{softmax}(\mathbf{z})_k`, say: String.raw`Read "softmax of z, entry k": apply softmax to the whole score vector and take the \(k\)-th number of the output.` },
            { sym: String.raw`\sum_{j=1}^{K}e^{z_j}`, say: String.raw`Add \(e^{z_j}\) over every class from 1 to \(K\), including class \(k\) itself. This denominator is the same for every class, which is what makes the outputs sum to 1.` },
          ],
          worked: {
            title: String.raw`Softmax over three classes`,
            steps: [
              String.raw`A model scores a photo: \(z = (2.0,\ 1.0,\ 0.1)\) for cat, dog and bird.`,
              String.raw`Exponentiate: \(e^{2.0} = 7.389\), \(e^{1.0} = 2.718\), \(e^{0.1} = 1.105\).`,
              String.raw`Sum: \(7.389 + 2.718 + 1.105 = 11.213\).`,
              String.raw`Divide: cat \(7.389/11.213 = 0.659\), dog \(0.242\), bird \(0.099\) (adding to 1).`,
            ],
            answer: String.raw`The model says 66% cat, 24% dog, 10% bird; the biggest score gets the biggest share but the others keep some.`,
          },
          caption: 'One score per class, exponentiated so every term is positive, then normalised to sum to 1. Raising any one z_k grows its exponential fastest, which both increases its own probability and squeezes down everyone else\'s share, but because e^z is never exactly zero, no class is ever fully ruled out, softmax always leaves a little probability on the table for the others. The same softmax turns a language model\'s raw scores over the vocabulary into next-word probabilities.',
        },
        {
          t: 'code',
          code: String.raw`from sklearn.linear_model import LogisticRegression

clf = LogisticRegression(C=1.0)        # C = 1/λ, inverse regularisation
clf.fit(X_train, y_train)
print(clf.predict_proba(X_test[:3]))   # class probabilities
print(clf.score(X_test, y_test))       # accuracy`,
        },
        { t: 'callout', tone: 'fact', title: 'Population growth', text: 'The logistic curve was introduced by the Belgian mathematician Pierre-François Verhulst in the 1830s–40s to model population growth that levels off as resources run out. It was over a century before statisticians adopted it for classifying outcomes.' },
      ],
    },
  ],
  sources: ['Hosmer, D. W., Lemeshow, S., & Sturdivant, R. X. (2013). *Applied Logistic Regression* (3rd ed.). Wiley.', 'Cramer, J. S. (2002). The origins of logistic regression. *Tinbergen Institute Discussion Paper*.'],
  related: ['ai/algorithms/linear-regression', 'ai/neural/perceptron', 'ai/foundations/evaluation'],
}

export default guide
