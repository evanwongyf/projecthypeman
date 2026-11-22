import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Linear regression fits a straight line (or flat plane) through data to predict a number. It is two centuries old, still widely used, and the best place to see every idea in machine learning in miniature: a model, a loss, an exact solution, and gradient descent.',
  nutshell: [
    'Model: \\(\\hat{y} = w x + b\\), or with many features \\(\\hat{y} = \\mathbf{w}\\cdot\\mathbf{x} + b\\).',
    'Loss: **mean squared error**, the average squared vertical distance from the points to the line.',
    'Exact answer: the **normal equation** \\(\\mathbf{w} = (X^\\top X)^{-1}X^\\top\\mathbf{y}\\); or reach it by gradient descent.',
    '**R²** reports the share of variation explained.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'Watch a line learn',
      blocks: [{ t: 'ai-viz', viz: 'linreg' }],
    },
    {
      id: 'model',
      title: 'The model and the loss',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\hat{y}_i = w x_i + b \qquad L(w, b) = \frac{1}{n}\sum_{i=1}^{n}\big(y_i - (w x_i + b)\big)^2`,
          where: [
            { sym: '\\hat{y}_i', def: 'The line\'s prediction for input x_i' },
            { sym: 'w, b', def: 'The slope and intercept being learned' },
            { sym: 'L(w, b)', def: 'The loss: mean squared error over all n points, for a given w and b' },
          ],
          syntax: [
            { sym: String.raw`\hat{y}_i`, say: String.raw`Read "y hat sub i": the predicted value for example \(i\). A hat always marks a prediction or estimate; the subscript picks the example.` },
            { sym: String.raw`\sum_{i=1}^{n}`, say: String.raw`Read "the sum from i equals 1 to n": do what follows for \(i = 1, 2, \dots, n\) and add the results.` },
            { sym: String.raw`\frac{1}{n}\sum_{i=1}^{n}\big(\cdots\big)^2`, say: String.raw`Square each error, add the squares, divide by \(n\): the mean of the squared errors.` },
            { sym: String.raw`L(w, b)`, say: String.raw`Read "L of w and b": the loss is a function of the two numbers \(w\) and \(b\). Change either and the loss changes.` },
          ],
          worked: {
            title: String.raw`Scoring two lines`,
            steps: [
              String.raw`Hours revised \(x = 1, 2, 3, 4\) and marks out of 10 \(y = 2, 3, 5, 6\).`,
              String.raw`Guess \(w = 1\), \(b = 1\): predictions \(\hat{y} = 2, 3, 4, 5\), so the errors \(y - \hat{y}\) are \(0, 0, 1, 1\).`,
              String.raw`Loss: \(L(1, 1) = (0 + 0 + 1 + 1)/4 = 0.5\).`,
              String.raw`Try \(w = 1.4\), \(b = 0.5\): predictions \(1.9, 3.3, 4.7, 6.1\), errors \(0.1, -0.3, 0.3, -0.1\).`,
              String.raw`Loss: \(L(1.4, 0.5) = (0.01 + 0.09 + 0.09 + 0.01)/4 = 0.05\).`,
            ],
            answer: String.raw`The second line has ten times lower loss, so it fits the four points far better.`,
          },
          caption: 'Squaring makes every error positive, punishes large errors more (a miss twice as big costs four times as much), and gives a smooth bowl-shaped loss with a single minimum, which is exactly why it can be solved exactly (below) or reached by gradient descent, rather than searched for by trial and error.',
        },
        {
          t: 'metric',
          name: 'the loss, L (mean squared error)',
          shows: 'How far the line\'s predictions sit from the real values on average, in squared units, the single number that gradient descent (or the exact solution below) is trying to shrink to its smallest possible value.',
          eli5: 'Imagine measuring how far off a dart lands from the bullseye on every throw, squaring each distance (so wild misses hurt your score far more than near-misses), then averaging over all your throws. That average is the loss, a smaller number means your aim, on average, is better.',
          higher: 'The line is missing badly, and because errors are squared, a loss that is twice as large often means errors that are much less than twice as big in real terms, one or two outlier points can dominate the whole score. Worth checking for outliers, a mis-scaled feature, or a genuinely non-linear relationship before assuming the model itself is bad.',
          lower: 'Predictions are landing close to the true values. A loss of exactly 0 means the line passes through every single point, on real-world noisy data this is a red flag for overfitting (or too little data), not a triumph.',
          typical: 'The raw number only means something relative to the scale of y and to var(y), the variance of y itself: a model with loss near var(y) is barely better than always predicting the mean, while loss much smaller than var(y) shows real explanatory power, exactly what R² reports, as \\(R^2 = 1 - L/\\operatorname{var}(y)\\).',
        },
        {
          t: 'math',
          tex: String.raw`\frac{\partial L}{\partial w} = -\frac{2}{n}\sum_i x_i\,(y_i - \hat{y}_i) \qquad \frac{\partial L}{\partial b} = -\frac{2}{n}\sum_i (y_i - \hat{y}_i)`,
          where: [
            { sym: '\\partial L/\\partial w,\\ \\partial L/\\partial b', def: 'How fast the loss changes as w, or b, nudges up' },
            { sym: 'y_i - \\hat{y}_i', def: 'The residual: how far the current line misses point i, and in which direction' },
          ],
          syntax: [
            { sym: String.raw`\frac{\partial L}{\partial w}`, say: String.raw`Read "partial L partial w", "the partial derivative of L with respect to w": the slope of the loss when you nudge only \(w\) and hold \(b\) fixed. The curly \(\partial\) (rather than d) warns that \(L\) depends on more than one variable.` },
            { sym: String.raw`-\frac{2}{n}`, say: String.raw`The 2 comes from differentiating the square; the minus sign appears because the prediction \(\hat{y}_i\), not \(y_i\), is what grows with \(w\).` },
            { sym: String.raw`x_i\,(y_i - \hat{y}_i)`, say: String.raw`Multiply each residual by its input before averaging, so points with large \(x\) have more say over the slope \(w\).` },
          ],
          worked: {
            title: String.raw`One gradient descent step`,
            steps: [
              String.raw`Same data (\(x = 1, 2, 3, 4\); \(y = 2, 3, 5, 6\)), starting at \(w = 1\), \(b = 1\), learning rate 0.1. The residuals \(y - \hat{y}\) are \(0, 0, 1, 1\).`,
              String.raw`\(\partial L/\partial w = -\tfrac{2}{4}(1 \times 0 + 2 \times 0 + 3 \times 1 + 4 \times 1) = -0.5 \times 7 = -3.5\).`,
              String.raw`\(\partial L/\partial b = -\tfrac{2}{4}(0 + 0 + 1 + 1) = -1\).`,
              String.raw`Step downhill: \(w \leftarrow 1 - 0.1 \times (-3.5) = 1.35\) and \(b \leftarrow 1 - 0.1 \times (-1) = 1.1\).`,
              String.raw`New predictions \(2.45, 3.8, 5.15, 6.5\), errors \(-0.45, -0.8, -0.15, -0.5\), so \(L = (0.2025 + 0.64 + 0.0225 + 0.25)/4 = 0.279\).`,
            ],
            answer: String.raw`One step cut the loss from 0.5 to 0.279; both gradients were negative, so both \(w\) and \(b\) were pushed up.`,
          },
          caption: 'Each gradient is an average residual, weighted by the input for the w-gradient. Its sign tells gradient descent which way to push w and b to shrink the loss; its size tells it how big a push. Both gradients hit exactly zero only at the bottom of the bowl, the one (w, b) that the normal equation below finds directly, without stepping towards it.',
        },
        {
          t: 'math',
          tex: String.raw`w = \frac{\sum_i (x_i - \bar{x})(y_i - \bar{y})}{\sum_i (x_i - \bar{x})^2} = \frac{\operatorname{cov}(x, y)}{\operatorname{var}(x)} \qquad b = \bar{y} - w\bar{x}`,
          where: [
            { sym: '\\bar{x}, \\bar{y}', def: 'The mean of x and the mean of y' },
            { sym: '\\operatorname{cov}(x, y)', def: 'How much x and y move together: positive if they rise together, negative if one rises as the other falls' },
            { sym: '\\operatorname{var}(x)', def: 'How spread out x is on its own' },
          ],
          syntax: [
            { sym: String.raw`\bar{x}`, say: String.raw`Read "x bar": the mean of the \(x\) values.` },
            { sym: String.raw`(x_i - \bar{x})`, say: String.raw`How far example \(i\) sits above (positive) or below (negative) the average \(x\).` },
            { sym: String.raw`\operatorname{cov}(x, y)`, say: String.raw`Read "the covariance of x and y": the average product of the two deviations. Positive when they rise together.` },
            { sym: String.raw`\operatorname{var}(x)`, say: String.raw`Read "the variance of x": the average squared deviation, the same sum with \(x\) paired with itself.` },
          ],
          worked: {
            title: String.raw`Solving for the best line by hand`,
            steps: [
              String.raw`Data \(x = 1, 2, 3, 4\); \(y = 2, 3, 5, 6\). Means: \(\bar{x} = 2.5\), \(\bar{y} = 4\).`,
              String.raw`Deviations \(x - \bar{x}\): \(-1.5, -0.5, 0.5, 1.5\). Deviations \(y - \bar{y}\): \(-2, -1, 1, 2\).`,
              String.raw`Numerator: \(3 + 0.5 + 0.5 + 3 = 7\). Denominator: \(2.25 + 0.25 + 0.25 + 2.25 = 5\).`,
              String.raw`Slope: \(w = 7/5 = 1.4\). Intercept: \(b = 4 - 1.4 \times 2.5 = 0.5\).`,
            ],
            answer: String.raw`The best line is \(\hat{y} = 1.4x + 0.5\): each extra hour of revision adds about 1.4 marks (this is the line with loss 0.05 above).`,
          },
          caption: 'The slope is how strongly x and y move together, rescaled by how much x alone varies, a predictor that barely changes (small var(x)) produces a large, twitchy slope estimate, since even small co-movements get divided by almost nothing. Once w is fixed, b simply shifts the line so it passes exactly through the data\'s centre point (x̄, ȳ).',
        },
        {
          t: 'example',
          title: 'By hand: hours studied versus test score',
          lines: [
            { label: 'Data', text: '(1, 50), (2, 60), (3, 65), (4, 80)' },
            { label: 'Means', text: '\\(\\bar{x} = 2.5\\), \\(\\bar{y} = 63.75\\)' },
            { label: 'Products', text: '\\(\\sum(x-\\bar{x})(y-\\bar{y}) = (-1.5)(-13.75) + (-0.5)(-3.75) + (0.5)(1.25) + (1.5)(16.25) = 47.5\\)' },
            { label: 'Spread', text: '\\(\\sum(x - \\bar{x})^2 = 2.25 + 0.25 + 0.25 + 2.25 = 5\\)' },
            { label: 'Line', text: '\\(w = 47.5/5 = 9.5\\), \\(b = 63.75 - 9.5(2.5) = 40\\): score \\(\\approx 40 + 9.5 \\times\\) hours' },
          ],
        },
      ],
    },
    {
      id: 'matrix',
      title: 'Many features: the normal equation',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\hat{\mathbf{y}} = X\mathbf{w} \qquad L = \lVert\mathbf{y} - X\mathbf{w}\rVert^2 \qquad \nabla_{\mathbf{w}}L = -2X^\top(\mathbf{y} - X\mathbf{w}) = 0 \;\Rightarrow\; \mathbf{w} = (X^\top X)^{-1}X^\top\mathbf{y}`,
          where: [
            { sym: 'X', def: 'The n × (d+1) data matrix, with a column of 1s for the intercept' },
            { sym: '\\mathbf{w}', def: 'All d+1 weights, intercept included' },
            { sym: '\\hat{\\mathbf{y}}, L', def: 'The vector of predictions, and the total squared error they give' },
          ],
          syntax: [
            { sym: String.raw`X^\top`, say: String.raw`Read "X transpose": flip the matrix so rows become columns.` },
            { sym: String.raw`(\cdot)^{-1}`, say: String.raw`Read "inverse": the matrix that undoes another, playing the role of dividing.` },
            { sym: String.raw`\nabla_{\mathbf{w}}L`, say: String.raw`Read "nabla w of L" or "the gradient of L": the list of partial derivatives of \(L\) with respect to every weight.` },
            { sym: String.raw`\lVert\mathbf{y} - X\mathbf{w}\rVert^2`, say: String.raw`The squared length of the error vector: square each entry and add them.` },
          ],
          worked: {
            title: String.raw`The normal equation on the same data`,
            steps: [
              String.raw`\(X\) has a column of 1s and a column of hours: rows \((1, 1), (1, 2), (1, 3), (1, 4)\); \(\mathbf{y} = (2, 3, 5, 6)\).`,
              String.raw`\(X^\top X = \begin{pmatrix} 4 & 10 \\ 10 & 30 \end{pmatrix}\) and \(X^\top \mathbf{y} = (2 + 3 + 5 + 6,\ 2 + 6 + 15 + 24) = (16, 47)\).`,
              String.raw`Determinant: \(4 \times 30 - 10 \times 10 = 20\), so \((X^\top X)^{-1} = \tfrac{1}{20}\begin{pmatrix} 30 & -10 \\ -10 & 4 \end{pmatrix}\).`,
              String.raw`\(\mathbf{w} = \tfrac{1}{20}(30 \times 16 - 10 \times 47,\ -10 \times 16 + 4 \times 47) = \tfrac{1}{20}(10, 28) = (0.5, 1.4)\).`,
            ],
            answer: String.raw`The weights are intercept 0.5 and slope 1.4, matching the covariance formula, found in one calculation with no stepping.`,
          },
          caption: 'Exact and fast for a few thousand features. With millions of features or rows, inverting the matrix is too expensive, so gradient descent is used instead.',
        },
        {
          t: 'math',
          tex: String.raw`\mathbf{w}_{\text{ridge}} = (X^\top X + \lambda I)^{-1}X^\top\mathbf{y}`,
          where: [{ sym: '\\lambda', def: 'The regularisation strength: how hard to penalise large weights' }],
          syntax: [
            { sym: String.raw`\lambda I`, say: String.raw`Read "lambda times the identity matrix". The identity \(I\) has 1s on the diagonal and 0s elsewhere, so this adds \(\lambda\) to each diagonal entry of \(X^\top X\) and nothing else.` },
            { sym: String.raw`\mathbf{w}_{\text{ridge}}`, say: String.raw`Read "w ridge": the weights from ridge regression. The subscript is a name, not an index.` },
          ],
          worked: {
            title: String.raw`Ridge shrinks the weights`,
            steps: [
              String.raw`Same data as before: \(X^\top X = \begin{pmatrix} 4 & 10 \\ 10 & 30 \end{pmatrix}\), \(X^\top \mathbf{y} = (16, 47)\).`,
              String.raw`\(\lambda = 1\): \(X^\top X + I = \begin{pmatrix} 5 & 10 \\ 10 & 31 \end{pmatrix}\), determinant \(155 - 100 = 55\), so \(\mathbf{w} = \tfrac{1}{55}(31 \times 16 - 10 \times 47,\ -10 \times 16 + 5 \times 47) = \tfrac{1}{55}(26, 75) = (0.473, 1.364)\).`,
              String.raw`\(\lambda = 10\): \(\begin{pmatrix} 14 & 10 \\ 10 & 40 \end{pmatrix}\), determinant 460, \(\mathbf{w} = \tfrac{1}{460}(40 \times 16 - 10 \times 47,\ -160 + 14 \times 47) = \tfrac{1}{460}(170, 498) = (0.370, 1.083)\).`,
            ],
            answer: String.raw`The slope shrinks from 1.4 (\(\lambda = 0\)) to 1.364 to 1.083 as \(\lambda\) grows. As written, the formula also shrinks the intercept; in practice the intercept is usually left unpenalised.`,
          },
          caption: 'Adding λ to the diagonal pulls every weight a little towards zero, trading a bit of fit for a lot of stability. λ = 0 is plain linear regression; as λ grows, weights shrink further and the model leans more on "predict something safe and small" than on fitting the training data exactly, useful when features are correlated or there are more features than examples, where the plain normal equation above becomes unstable or even unsolvable.',
        },
        {
          t: 'code',
          title: 'Linear regression in scikit-learn',
          code: String.raw`from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

model = LinearRegression()
model.fit(X_train, y_train)

print(model.coef_, model.intercept_)   # the weights w and bias b
pred = model.predict(X_test)
print(r2_score(y_test, pred))`,
        },
      ],
    },
    {
      id: 'assumptions',
      title: 'When it works, and when it does not',
      blocks: [
        {
          t: 'list',
          items: [
            '**Linearity**: the true relationship is roughly a straight line. If not, add transformed features (x², log x) or use a non-linear model.',
            '**Outliers** pull the line strongly, because errors are squared. Consider MAE-based (robust) regression.',
            '**Correlated features** (multicollinearity) make individual weights unstable even when predictions are fine.',
            'A weight shows association, not causation: ice-cream sales predict drownings because both rise in summer.',
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Regression to the mean', text: 'The word "regression" comes from Francis Galton, who in the 1880s found that children of very tall parents tend to be tall but less extreme than their parents: their heights "regressed" towards the average. The least-squares method itself was published by Legendre in 1805 and Gauss in 1809, who used it to track the dwarf planet Ceres.' },
      ],
    },
  ],
  sources: ['James, G., Witten, D., Hastie, T., & Tibshirani, R. (2021). *An Introduction to Statistical Learning* (2nd ed.). Springer.', 'Galton, F. (1886). Regression towards mediocrity in hereditary stature. *Journal of the Anthropological Institute*, 15, 246–263.'],
  related: ['ai/foundations/gradient-descent', 'ai/algorithms/logistic-regression', 'ai/foundations/bias-variance'],
}

export default guide
