import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The goal of machine learning is not to fit the training data; it is to do well on **new** data. A model that is too simple misses the pattern (**underfitting**); one that is too flexible memorises the noise (**overfitting**). The bias–variance trade-off explains the tension, and regularisation and cross-validation are the main tools for managing it.',
  nutshell: [
    '**Bias**: error from wrong assumptions, such as fitting a straight line to a curve.',
    '**Variance**: error from being too sensitive to the particular training sample.',
    'Expected test error = bias² + variance + irreducible noise.',
    '**Regularisation** penalises complexity; **cross-validation** estimates test error honestly.',
    'More data reduces variance; it is often the best cure for overfitting.',
  ],
  sections: [
    {
      id: 'see-it',
      title: 'See it happen',
      blocks: [
        { t: 'ai-viz', viz: 'overfit' },
        {
          t: 'table',
          head: ['', 'Underfitting', 'Good fit', 'Overfitting'],
          rows: [
            ['Training error', 'High', 'Low', 'Very low'],
            ['Test error', 'High', 'Low', 'High'],
            ['Cause', 'Model too simple (high bias)', 'Right complexity', 'Model too flexible (high variance)'],
            ['Fixes', 'More features, a more flexible model, less regularisation', 'Ship it', 'More data, regularisation, a simpler model, early stopping, dropout'],
          ],
        },
      ],
    },
    {
      id: 'decomposition',
      title: 'The decomposition',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\mathbb{E}\Big[\big(y - \hat{f}(x)\big)^2\Big] = \underbrace{\big(\mathbb{E}[\hat{f}(x)] - f(x)\big)^2}_{\text{bias}^2} + \underbrace{\mathbb{E}\Big[\big(\hat{f}(x) - \mathbb{E}[\hat{f}(x)]\big)^2\Big]}_{\text{variance}} + \underbrace{\sigma^2}_{\text{noise}}`,
          where: [
            { sym: 'f(x)', def: 'The true underlying pattern; y = f(x) + noise' },
            { sym: '\\hat{f}(x)', def: 'The model learned from one random training set' },
            { sym: '\\mathbb{E}', def: 'Average over many possible training sets' },
            { sym: '\\sigma^2', def: 'Noise in the data that no model can remove' },
          ],
          syntax: [
            { sym: String.raw`\mathbb{E}[\,\cdot\,]`, say: String.raw`Read "the expected value of": imagine repeating the experiment (here, retraining on a fresh random training set) many times, compute the thing inside each time, and average.` },
            { sym: String.raw`\hat{f}`, say: String.raw`Read "f hat". A hat means "an estimate learned from data" rather than the true thing, so \(\hat{f}\) is the fitted model and \(f\) is reality.` },
            { sym: String.raw`\underbrace{\cdots}_{\text{bias}^2}`, say: String.raw`An underbrace is just a label: it names the group of symbols above it. It asks you to do nothing; it tells you that this chunk is the bias squared.` },
            { sym: String.raw`\big(\,\cdot\,\big)^2`, say: String.raw`Read "squared": measure a gap and square it so that over- and under-shooting both count as positive error.` },
          ],
          worked: {
            title: String.raw`Decomposing the error at one input x0`,
            steps: [
              String.raw`Suppose the truth at \(x_0\) is \(f(x_0) = 10\) and the noise standard deviation is 2, so \(\sigma^2 = 4\).`,
              String.raw`Train the model on 5 different random training sets. Its predictions at \(x_0\) are 8, 9, 11, 8, 9, so \(\mathbb{E}[\hat{f}(x_0)] = 45/5 = 9\).`,
              String.raw`Bias\(^2 = (9 - 10)^2 = 1\).`,
              String.raw`Variance \(=\) average of \((\hat{f} - 9)^2 = (1 + 0 + 4 + 1 + 0)/5 = 1.2\).`,
              String.raw`Total expected error \(= 1 + 1.2 + 4 = 6.2\).`,
              String.raw`Check directly: the average of \((10 - \hat{f})^2\) is \((4 + 1 + 1 + 4 + 1)/5 = 2.2\); adding the noise 4 gives 6.2, matching.`,
            ],
            answer: String.raw`Expected squared error is 6.2, of which 4 (noise) can never be removed; only the 1 (bias\(^2\)) and the 1.2 (variance) are within the modeller's reach.`,
          },
          caption: 'Imagine retraining on many different samples. Bias is how far the average model is from the truth; variance is how much individual models scatter around that average. The three terms add up, which is the key reading: you cannot shrink test error below σ² no matter how good the model is, and attacking bias and variance separately is possible because lowering one does not automatically lower the other, a more flexible model typically trades bias for variance, which is exactly the tension plotted below.',
        },
        {
          t: 'plot',
          title: 'The classic trade-off',
          x: [0, 10],
          y: [0, 1.2],
          xLabel: 'model complexity',
          yLabel: 'error',
          curves: [
            { f: (c: number) => 0.9 * Math.exp(-0.45 * c), label: 'bias²', color: '#3b6fd8' },
            { f: (c: number) => 0.012 * c * c, label: 'variance', color: '#e07b2a' },
            { f: (c: number) => 0.9 * Math.exp(-0.45 * c) + 0.012 * c * c + 0.08, label: 'total test error', color: '#7b4fc9' },
            { f: () => 0.08, label: 'noise σ²', color: '#999', dashed: true },
          ],
          vlines: [{ x: 4.2, label: 'sweet spot' }],
        },
        {
          t: 'cards',
          items: [
            { title: 'Darts with high bias', body: 'Throws cluster tightly but in the wrong place: consistently wrong.' },
            { title: 'Darts with high variance', body: 'Throws centre on the bullseye on average but scatter widely: right on average, wrong each time.' },
          ],
        },
      ],
    },
    {
      id: 'regularisation',
      title: 'Regularisation',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Ridge (L2): } \min_{\mathbf{w}}\ \sum_i (y_i - \mathbf{w}\cdot\mathbf{x}_i)^2 + \lambda\lVert\mathbf{w}\rVert_2^2 \qquad \text{Lasso (L1): } \min_{\mathbf{w}}\ \sum_i (y_i - \mathbf{w}\cdot\mathbf{x}_i)^2 + \lambda\lVert\mathbf{w}\rVert_1`,
          where: [{ sym: '\\lambda\\lVert\\mathbf{w}\\rVert', def: 'The penalty: λ times the size of the weight vector' }],
          syntax: [
            { sym: String.raw`\min_{\mathbf{w}}`, say: String.raw`Read "minimise over w": adjust the weights \(\mathbf{w}\) until the expression after it is as small as possible.` },
            { sym: String.raw`\mathbf{w}\cdot\mathbf{x}_i`, say: String.raw`Read "w dot x sub i": multiply matching entries of the weight vector and the i-th example, then add. This is the model's prediction for example i.` },
            { sym: String.raw`\lVert\mathbf{w}\rVert_2^2`, say: String.raw`Read "the L2 norm of w, squared": square every weight and add them up. Large weights are punished heavily.` },
            { sym: String.raw`\lVert\mathbf{w}\rVert_1`, say: String.raw`Read "the L1 norm of w": ignore signs and add the sizes of the weights, \(|w_1| + |w_2| + \dots\).` },
          ],
          worked: {
            title: String.raw`One weight, three data points`,
            steps: [
              String.raw`Data \((x, y)\): \((1, 2)\), \((2, 3)\), \((3, 5)\), one weight \(w\), no intercept. Then \(\sum x y = 2 + 6 + 15 = 23\) and \(\sum x^2 = 1 + 4 + 9 = 14\).`,
              String.raw`With \(\lambda = 0\) the best weight is \(w = 23/14 \approx 1.643\), and the squared error is about 0.214.`,
              String.raw`Ridge has the closed form \(w = 23/(14 + \lambda)\). For \(\lambda = 14\): \(w = 23/28 \approx 0.821\). For \(\lambda = 46\): \(w = 23/60 \approx 0.383\). The weight shrinks smoothly but never reaches zero.`,
              String.raw`Lasso (one weight) gives \(w = (23 - \lambda/2)/14\) while that is positive. For \(\lambda = 14\): \(w = 16/14 \approx 1.143\).`,
              String.raw`For \(\lambda = 46\): \(23 - 23 = 0\), so lasso sets \(w = 0\) exactly. Check the cost: at \(w = 0\) the fit term is \(4 + 9 + 25 = 38\) and the penalty is 0, total 38; any positive \(w\) costs more.`,
            ],
            answer: String.raw`Both penalties shrink the weight as \(\lambda\) grows, but at \(\lambda = 46\) ridge leaves \(w \approx 0.38\) while lasso drops it to exactly 0, which is why lasso performs feature selection.`,
          },
          caption: 'Both objectives are "fit the data well" plus "but keep the weights small"the model can only grow a weight large if doing so earns back more than λ worth of fit improvement. Adding a penalty on the size of the weights discourages wild, wiggly fits. λ sets the strength: 0 means none; very large forces all weights towards zero (underfitting).',
        },
        {
          t: 'metric',
          name: 'the regularisation strength (λ)',
          shows: 'How hard the model is punished for having large weights, on top of its ordinary job of fitting the training data well. It is a direct dial on model complexity: it does not change which features the model can use, only how freely it is allowed to lean on any one of them, which indirectly controls where the model sits on the bias-variance trade-off above.',
          eli5: 'Imagine grading an essay not just on how well it answers the question, but also docking marks for every overly elaborate, convoluted sentence used to do it. A small penalty barely changes the writing. A huge penalty forces painfully short, simple sentences, technically "safe", but unable to express anything nuanced. λ is exactly that penalty, applied to a model\'s weights instead of sentences.',
          higher: 'Weights are pushed more strongly towards zero, forcing a simpler model that relies less heavily on any single feature. This fights overfitting and reduces variance, but push it too far and the model becomes too simple to capture real patterns in the data at all (underfitting), in the extreme, very large λ forces every weight to zero, predicting the same output regardless of input.',
          lower: 'Weights are freer to grow to whatever size best fits the training data, with little penalty. At λ = 0 there is no regularisation at all, this gives the model maximum flexibility to fit the training data closely, but also maximum room to overfit to its noise if the model is complex relative to the amount of data available.',
          typical: 'There is no universal "good" λ, it depends entirely on how much data you have and how complex the model is, so λ is almost always chosen by cross-validation, searching across a wide range (like 0.01, 0.1, 1, 10, 100 in the code below) rather than guessed in advance.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Ridge (L2)', body: 'Shrinks all weights smoothly towards zero. Called *weight decay* in neural networks.' },
            { title: 'Lasso (L1)', body: 'Pushes some weights exactly to zero, so it also selects features.' },
          ],
        },
      ],
    },
    {
      id: 'cv',
      title: 'Cross-validation',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Split the training data into k folds', body: 'Typically k = 5 or 10 equal parts.' },
            { title: 'Train k times', body: 'Each time hold out one fold for validation and train on the other k − 1.' },
            { title: 'Average the k scores', body: 'This estimates test performance using every example for validation once, with less luck involved than a single split.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{CV}_{(k)} = \frac{1}{k}\sum_{j=1}^{k} \text{Error}_j`,
          where: [{ sym: '\\text{Error}_j', def: 'The validation error from the j-th fold, where fold j was held out and the rest used for training' }],
          syntax: [
            { sym: String.raw`\text{CV}_{(k)}`, say: String.raw`Read "the k-fold cross-validation score". The \((k)\) in the subscript just records how many folds were used.` },
            { sym: String.raw`\sum_{j=1}^{k}`, say: String.raw`Read "the sum from j equals 1 to k": add up the fold errors \(\text{Error}_1 + \text{Error}_2 + \dots + \text{Error}_k\).` },
            { sym: String.raw`\frac{1}{k}`, say: String.raw`Divide by the number of folds, which turns that sum into an average.` },
          ],
          worked: {
            title: String.raw`5-fold cross-validation of a house-price model`,
            steps: [
              String.raw`There are 500 examples and k = 5, so each fold holds 100. Train on 400, score on the held-out 100, five times.`,
              String.raw`Validation mean squared errors (in £k\(^2\)) for folds 1 to 5: 4.2, 3.8, 5.1, 4.5, 3.9.`,
              String.raw`Sum: \(4.2 + 3.8 + 5.1 + 4.5 + 3.9 = 21.5\).`,
              String.raw`Divide by k: \(21.5 / 5 = 4.3\).`,
            ],
            answer: String.raw`\(\text{CV}_{(5)} = 4.3\). The folds ranged from 3.8 to 5.1, so a single split could have given a figure 10 to 20% away from it; the average is steadier.`,
          },
          caption: 'Just a plain average of k separate error estimates, each from a model that never saw the fold it was scored on. Averaging matters because any single train/validation split is partly luck, a particular split might happen to be easy or hard, so this gives a steadier, less luck-dependent estimate of how the model will do on genuinely new data than one split alone would.',
        },
        {
          t: 'code',
          title: 'Choosing λ by 5-fold cross-validation',
          code: String.raw`from sklearn.linear_model import Ridge
from sklearn.model_selection import cross_val_score

for alpha in [0.01, 0.1, 1, 10, 100]:
    scores = cross_val_score(Ridge(alpha=alpha), X_train, y_train,
                             cv=5, scoring="neg_mean_squared_error")
    print(alpha, -scores.mean())`,
          caption: 'scikit-learn calls λ *alpha*. Pick the value with the lowest average validation error, then check it once on the test set.',
        },
        { t: 'callout', tone: 'fact', title: 'Double descent', text: 'Very large neural networks break the classic U-shape: as models grow past the point where they can fit the training data exactly, test error can fall again. This "double descent", described by Belkin and colleagues in 2019, helps explain why huge networks generalise better than the classic picture predicts.' },
      ],
    },
  ],
  sources: ['Hastie, T., Tibshirani, R., & Friedman, J. (2009). *The Elements of Statistical Learning* (2nd ed.). Springer.', 'Belkin, M., Hsu, D., Ma, S., & Mandal, S. (2019). Reconciling modern machine-learning practice and the classical bias–variance trade-off. *PNAS*, 116(32), 15849–15854.'],
  related: ['ai/foundations/evaluation', 'ai/algorithms/linear-regression', 'ai/neural/training'],
}

export default guide
