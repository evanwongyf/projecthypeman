import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Many lines can separate two classes. A **support vector machine** chooses the one with the widest gap, or margin, to the nearest points on either side, reasoning that a wide margin is more robust to new data. With the **kernel trick**, it can also draw curved boundaries without ever computing the curved features explicitly.',
  nutshell: [
    'Maximise the margin \\(2/\\lVert\\mathbf{w}\\rVert\\) between the classes.',
    'Only the points closest to the boundary, the **support vectors**, determine it.',
    'The **soft margin** with penalty C allows some violations for noisy data.',
    '**Kernels** (polynomial, RBF) compute similarities in a richer feature space, giving non-linear boundaries.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'The widest street',
      blocks: [{ t: 'ai-viz', viz: 'svm' }],
    },
    {
      id: 'maths',
      title: 'The optimisation problem',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\min_{\mathbf{w}, b}\ \tfrac{1}{2}\lVert\mathbf{w}\rVert^2 \quad \text{subject to}\quad y_i(\mathbf{w}\cdot\mathbf{x}_i + b) \ge 1\ \ \text{for all } i`,
          where: [
            { sym: '\\mathbf{w}, b', def: 'The boundary\'s direction and offset: w·x + b = 0 is the dividing line itself' },
            { sym: 'y_i', def: 'The true label of point i, either +1 or −1' },
            { sym: '\\mathbf{x}_i', def: 'The feature values of point i' },
          ],
          syntax: [
            { sym: String.raw`\min_{\mathbf{w}, b}`, say: String.raw`Read "minimise over w and b": find the values of \(\mathbf{w}\) and \(b\) that make what follows as small as possible.` },
            { sym: String.raw`\tfrac{1}{2}\lVert\mathbf{w}\rVert^2`, say: String.raw`Half the squared length of \(\mathbf{w}\): \(\tfrac12(w_1^2 + w_2^2 + \dots)\). The half only tidies later derivatives.` },
            { sym: String.raw`\text{subject to}`, say: String.raw`Read "subject to": the rule that follows must hold while you minimise.` },
            { sym: String.raw`y_i(\mathbf{w}\cdot\mathbf{x}_i + b) \ge 1`, say: String.raw`Because \(y_i = \pm 1\), this product is positive exactly when point \(i\) is on its correct side, and at least 1 when it also clears the margin. It must hold for every \(i\).` },
          ],
          worked: {
            title: String.raw`A tiny hard-margin SVM`,
            steps: [
              String.raw`Take \(\mathbf{w} = (0.5, 0.5)\), \(b = -2\), and points \((1, 1)\) with \(y = -1\), \((3, 3)\) with \(y = +1\), \((4, 4)\) with \(y = +1\).`,
              String.raw`\((1, 1)\): \(\mathbf{w}\cdot\mathbf{x} + b = 0.5 + 0.5 - 2 = -1\), so \(y(\cdot) = (-1)(-1) = 1 \ge 1\), exactly on the margin.`,
              String.raw`\((3, 3)\): \(1.5 + 1.5 - 2 = 1\), so \(y(\cdot) = 1\), also on the margin. \((4, 4)\): \(4 - 2 = 2 \ge 1\), safely outside.`,
              String.raw`Objective: \(\tfrac12\lVert\mathbf{w}\rVert^2 = \tfrac12(0.25 + 0.25) = 0.25\). Margin width: \(2/\lVert\mathbf{w}\rVert = 2/0.707 = 2.83\).`,
              String.raw`Check: the distance between \((1, 1)\) and \((3, 3)\) is \(\sqrt{4 + 4} = 2.83\).`,
            ],
            answer: String.raw`The two touching points are the support vectors; no smaller \(\mathbf{w}\) satisfies both constraints, so this is the widest street (2.83 across).`,
          },
          caption: 'Hard margin, labels y = ±1. The margins are the lines w·x + b = ±1, which are 2/‖w‖ apart, so a small ‖w‖ means a wide street. Minimising ‖w‖² while forcing every point to clear the margin is just a roundabout way of asking for the widest possible street with no points inside it, the constraint does the "classify correctly" work, the objective does the "and as confidently as possible" work.',
        },
        {
          t: 'math',
          tex: String.raw`\min_{\mathbf{w}, b}\ \tfrac{1}{2}\lVert\mathbf{w}\rVert^2 + C\sum_{i}\max\big(0,\ 1 - y_i(\mathbf{w}\cdot\mathbf{x}_i + b)\big)`,
          where: [{ sym: 'C', def: 'The penalty per unit of margin violation (see the metric below)' }],
          syntax: [
            { sym: String.raw`\max\big(0,\ \cdots\big)`, say: String.raw`Read "the larger of 0 and ...": if the expression is negative, replace it with 0. This is the hinge: no penalty for being safely on the right side.` },
            { sym: String.raw`C\sum_{i}`, say: String.raw`Read "C times the sum over all points": add up every point's violation, then scale by the penalty \(C\).` },
          ],
          worked: {
            title: String.raw`Counting margin violations`,
            steps: [
              String.raw`Use \(\mathbf{w} = (0.5, 0.5)\), \(b = -2\) with four points: \((1, 1)\) \(y = -1\); \((4, 4)\) \(y = +1\); \((2.2, 2.2)\) \(y = +1\); \((1.6, 1.6)\) \(y = +1\).`,
              String.raw`\((1, 1)\): \(y f = 1\), hinge \(= \max(0, 0) = 0\). \((4, 4)\): \(y f = 2\), hinge \(= \max(0, -1) = 0\).`,
              String.raw`\((2.2, 2.2)\): \(f = 0.2\), hinge \(= 1 - 0.2 = 0.8\) (inside the margin). \((1.6, 1.6)\): \(f = -0.4\), hinge \(= 1.4\) (wrong side).`,
              String.raw`Sum of hinges \(= 2.2\). With \(C = 1\): objective \(= 0.25 + 2.2 = 2.45\). With \(C = 0.1\): \(0.25 + 0.22 = 0.47\).`,
            ],
            answer: String.raw`Two points violate the margin, costing 2.2 in total; a big \(C\) makes that bill dominate and forces a narrower margin, while a small \(C\) tolerates it.`,
          },
          caption: 'Soft margin: the hinge loss term is zero for points safely outside the margin and grows linearly for points inside it or on the wrong side, so comfortably-correct points cost nothing at all, and only the borderline or wrong ones add to the sum. Large C punishes violations hard (narrow margin, risk of overfitting); small C tolerates them (wide margin).',
        },
        {
          t: 'metric',
          name: 'the regularisation penalty (C)',
          shows: 'How harshly the SVM punishes a training point for landing on the wrong side of the margin, the dial that trades off a wide, forgiving margin against a narrow one that insists on classifying every training point correctly. It directly controls the tension between fitting the training data closely and staying simple enough to generalise.',
          eli5: 'Imagine drawing a fence to separate sheep from goats in a field where a couple of animals have wandered to the wrong side. A low C says "don\'t worry about those two stragglers, just draw the fence where it makes the most sense overall" (a wide, sensible margin). A high C says "that fence MUST have every single sheep on one side, no matter how wiggly it has to get" (a narrow, contorted margin chasing outliers).',
          higher: 'The model insists on classifying training points correctly, even the awkward or noisy ones, this narrows the margin and can fit the training data very closely, but risks overfitting to noise or mislabeled points, producing a boundary that looks great on training data and worse on new data.',
          lower: 'The model tolerates some training points landing inside the margin or even on the wrong side, in exchange for a wider, smoother margin, generally more robust to noisy or overlapping data, but if set too low it can also underfit, allowing the margin to ignore a genuinely important distinction in the data.',
          typical: 'C = 1 is a common default; in practice C is chosen by cross-validation alongside the kernel\'s own settings (like γ for an RBF kernel), typically searching over values like 0.01, 0.1, 1, 10, 100 on a logarithmic scale since the "right" value can vary by orders of magnitude between datasets.',
        },
        {
          t: 'plot',
          title: 'Hinge loss versus logistic loss',
          x: [-2, 3],
          y: [0, 3],
          xLabel: 'margin y·(w·x + b)',
          yLabel: 'loss',
          curves: [{ f: (m: number) => Math.max(0, 1 - m), label: 'hinge (SVM)' }, { f: (m: number) => Math.log2(1 + Math.exp(-m)), label: 'logistic (base 2)', dashed: true, color: '#e07b2a' }],
          vlines: [{ x: 1, label: 'margin' }],
          caption: 'Hinge loss is exactly zero once a point is beyond the margin, which is why only the support vectors matter.',
        },
      ],
    },
    {
      id: 'kernels',
      title: 'The kernel trick',
      blocks: [
        {
          t: 'plot',
          title: 'Not separable on a line; separable after adding x²',
          x: [-3, 3],
          y: [-0.5, 9],
          xLabel: 'x',
          yLabel: 'x²',
          data: [
            { pts: [[-0.8, 0.64], [-0.3, 0.09], [0.2, 0.04], [0.6, 0.36], [0.9, 0.81]], dots: true, color: '#3b6fd8', label: 'class A (middle)' },
            { pts: [[-2.6, 6.76], [-2.1, 4.41], [-1.7, 2.89], [1.8, 3.24], [2.3, 5.29], [2.8, 7.84]], dots: true, color: '#e07b2a', label: 'class B (outside)' },
          ],
          hlines: [{ y: 1.8, label: 'a straight line now separates them' }],
          caption: 'On the x-axis alone, class B surrounds class A and no single threshold works. Mapping x → (x, x²) lifts the outer points up, and a flat line separates them.',
        },
        {
          t: 'math',
          tex: String.raw`f(\mathbf{x}) = \sum_{i \in SV}\alpha_i y_i\,K(\mathbf{x}_i, \mathbf{x}) + b \qquad K_{\text{RBF}}(\mathbf{a}, \mathbf{b}) = e^{-\gamma\lVert\mathbf{a} - \mathbf{b}\rVert^2} \qquad K_{\text{poly}}(\mathbf{a}, \mathbf{b}) = (\mathbf{a}\cdot\mathbf{b} + c)^d`,
          where: [
            { sym: 'SV', def: 'The support vectors: only the training points that sit on or inside the margin get a nonzero α_i, so every other point drops out of the sum entirely' },
            { sym: '\\alpha_i', def: 'How much weight point i carries in the final boundary' },
            { sym: '\\gamma', def: 'How quickly RBF similarity fades with distance' },
          ],
          syntax: [
            { sym: String.raw`\sum_{i \in SV}`, say: String.raw`Read "the sum over i in SV": add terms only for the support vectors, the training points with a non-zero \(\alpha_i\).` },
            { sym: String.raw`K(\mathbf{x}_i, \mathbf{x})`, say: String.raw`Read "K of x_i and x": the kernel, a similarity score between a support vector and the new point.` },
            { sym: String.raw`e^{-\gamma\lVert\mathbf{a} - \mathbf{b}\rVert^2}`, say: String.raw`Squared distance times \(-\gamma\), then exponentiated: 1 for identical points, shrinking towards 0 as they move apart.` },
            { sym: String.raw`(\mathbf{a}\cdot\mathbf{b} + c)^d`, say: String.raw`Dot product plus a constant, raised to the power \(d\): the polynomial kernel.` },
          ],
          worked: {
            title: String.raw`Scoring a new point with an RBF kernel`,
            steps: [
              String.raw`Two support vectors: \(\mathbf{x}_1 = (1, 2)\) with \(y = +1\), \(\mathbf{x}_2 = (3, 0)\) with \(y = -1\), both with \(\alpha = 1\). Take \(b = 0.1\), \(\gamma = 0.5\) and the new point \(\mathbf{x} = (2, 3)\).`,
              String.raw`\(\lVert\mathbf{x}_1 - \mathbf{x}\rVert^2 = 1 + 1 = 2\), so \(K_1 = e^{-0.5 \times 2} = e^{-1} = 0.368\).`,
              String.raw`\(\lVert\mathbf{x}_2 - \mathbf{x}\rVert^2 = 1 + 9 = 10\), so \(K_2 = e^{-5} = 0.0067\).`,
              String.raw`\(f(\mathbf{x}) = 1 \times (+1) \times 0.368 + 1 \times (-1) \times 0.0067 + 0.1 = 0.461\).`,
              String.raw`Poly kernel for comparison, \(\mathbf{a} = (1, 2)\), \(\mathbf{b} = (2, 4)\), \(c = 1\), \(d = 2\): \((10 + 1)^2 = 121\).`,
            ],
            answer: String.raw`\(f > 0\), so the point is classed +1: it is much closer to the +1 support vector, whose kernel value (0.368) swamps the other (0.0067).`,
          },
          caption: 'The SVM only ever needs dot products between examples, so we can replace them with a kernel K that equals a dot product in a bigger (even infinite) feature space, without computing that space. The RBF kernel scores similarity by distance and decays to zero as points get further apart; a large γ makes that decay sharp, so the boundary curves tightly around individual points (prone to overfitting), while a small γ makes similarity fade slowly, giving a smoother, more global boundary.',
        },
        {
          t: 'code',
          code: String.raw`from sklearn.svm import SVC
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

svm = make_pipeline(StandardScaler(), SVC(kernel="rbf", C=10, gamma="scale"))
svm.fit(X_train, y_train)
print(svm.score(X_test, y_test))`,
          caption: 'Always scale features for SVMs: the margin and the RBF kernel both depend on distances.',
        },
        { t: 'callout', tone: 'fact', title: 'From Moscow to Bell Labs', text: 'Vladimir Vapnik and Alexey Chervonenkis developed the theory behind SVMs in the Soviet Union in the 1960s–70s. After moving to AT&T Bell Labs, Vapnik and colleagues introduced the kernel trick for SVMs (1992) and the soft margin (Cortes and Vapnik, 1995). SVMs were the leading method for many tasks until deep learning’s rise.' },
      ],
    },
  ],
  sources: ['Cortes, C., & Vapnik, V. (1995). Support-vector networks. *Machine Learning*, 20, 273–297.', 'Boser, B. E., Guyon, I. M., & Vapnik, V. N. (1992). A training algorithm for optimal margin classifiers. *COLT*.', 'Schölkopf, B., & Smola, A. J. (2002). *Learning with Kernels*. MIT Press.'],
  related: ['ai/algorithms/logistic-regression', 'ai/neural/perceptron', 'ai/foundations/maths'],
}

export default guide
