import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'k-nearest neighbours (kNN) might be the simplest learning algorithm there is: to classify something new, find the k most similar examples you have already seen and take a vote. There is no training at all, only remembering.',
  nutshell: [
    'Store the training data. To predict, find the k closest points and take a majority vote (or average, for regression).',
    'It is a **lazy** learner: training is instant, prediction is slow on big datasets.',
    'Small k overfits; large k underfits. Choose k by cross-validation.',
    'Distances only make sense if features are **scaled**; in high dimensions, distances lose meaning (the **curse of dimensionality**).',
  ],
  sections: [
    {
      id: 'lab',
      title: 'Try it',
      blocks: [{ t: 'ai-viz', viz: 'knn' }],
    },
    {
      id: 'distance',
      title: 'Measuring closeness',
      blocks: [
        {
          t: 'math',
          tex: String.raw`d_{\text{Euclid}}(\mathbf{a}, \mathbf{b}) = \sqrt{\sum_{i}(a_i - b_i)^2} \qquad d_{\text{Manhattan}} = \sum_i |a_i - b_i| \qquad d_{\text{Minkowski}} = \Big(\sum_i |a_i - b_i|^p\Big)^{1/p}`,
          where: [
            { sym: '\\mathbf{a}, \\mathbf{b}', def: 'Two points, each a list of feature values' },
            { sym: 'a_i - b_i', def: 'The gap between the two points on feature i alone' },
            { sym: 'p', def: 'The Minkowski exponent: p = 2 gives Euclidean, p = 1 gives Manhattan' },
          ],
          syntax: [
            { sym: String.raw`a_i`, say: String.raw`Read "a sub i": the \(i\)-th feature of point \(\mathbf{a}\). The subscript picks one feature from the list.` },
            { sym: String.raw`\sqrt{\sum_{i}(a_i - b_i)^2}`, say: String.raw`Work from the inside out: subtract per feature, square each gap, add them up across all features, then take the square root.` },
            { sym: String.raw`|a_i - b_i|`, say: String.raw`Vertical bars mean absolute value: drop any minus sign, so only the size of the gap counts.` },
            { sym: String.raw`(\cdots)^{1/p}`, say: String.raw`Read "to the power one over p", the \(p\)-th root: \(p = 2\) is the square root, \(p = 3\) the cube root.` },
          ],
          worked: {
            title: String.raw`Three distances between the same two points`,
            steps: [
              String.raw`Take \(\mathbf{a} = (1, 2, 3)\) and \(\mathbf{b} = (4, 6, 3)\). The feature gaps \(a_i - b_i\) are \(-3, -4, 0\).`,
              String.raw`Euclidean: \(\sqrt{9 + 16 + 0} = \sqrt{25} = 5\).`,
              String.raw`Manhattan: \(3 + 4 + 0 = 7\).`,
              String.raw`Minkowski with \(p = 3\): \((3^3 + 4^3 + 0^3)^{1/3} = (27 + 64)^{1/3} = 91^{1/3} = 4.50\).`,
            ],
            answer: String.raw`The distance shrinks from 7 to 5 to 4.50 as p grows, heading towards the largest single gap, 4: higher p lets the biggest feature gap dominate.`,
          },
          caption: 'Euclidean is straight-line distance, "as the crow flies"one large gap on a single feature can dominate the whole distance, because it gets squared. Manhattan is distance along a city grid, moving one feature at a time, it adds up gaps directly, so it is less swayed by any one large gap and more robust when features are on very different scales. Minkowski generalises both; raising p makes the largest single-feature gap matter more and more relative to the rest.',
        },
        {
          t: 'example',
          title: 'Classifying a fruit',
          lines: [
            { label: 'New fruit', text: 'weight 150 g, sweetness 7 (both scaled to 0–1: 0.5, 0.7)' },
            { label: 'Neighbours', text: 'apple (0.48, 0.65): distance 0.054; apple (0.55, 0.75): 0.071; orange (0.6, 0.6): 0.141' },
            { label: 'k = 3 vote', text: '2 apples, 1 orange → apple' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\hat{y}(\mathbf{x}) = \operatorname{mode}\{y_i : i \in N_k(\mathbf{x})\} \qquad \hat{y}_{\text{reg}}(\mathbf{x}) = \frac{1}{k}\sum_{i \in N_k(\mathbf{x})} y_i`,
          where: [{ sym: 'N_k(\\mathbf{x})', def: 'The indices of the k training points closest to x' }],
          syntax: [
            { sym: String.raw`\hat{y}`, say: String.raw`Read "y hat": a prediction, as opposed to \(y\), the true value.` },
            { sym: String.raw`\{y_i : i \in N_k(\mathbf{x})\}`, say: String.raw`Read "the set of y_i such that i is in N_k of x". The colon means "such that" and \(\in\) means "is in", so: collect the labels of the \(k\) nearest neighbours.` },
            { sym: String.raw`\operatorname{mode}`, say: String.raw`The most frequent value in a list.` },
            { sym: String.raw`\frac{1}{k}\sum_{i \in N_k(\mathbf{x})} y_i`, say: String.raw`Add up the neighbours' values and divide by \(k\): the plain average.` },
          ],
          worked: {
            title: String.raw`Predicting for one house with k = 3`,
            steps: [
              String.raw`The three nearest sold houses are 1 km, 2 km and 4 km away, with prices £300k, £330k and £420k. Their labels for "sold within a month" are yes, yes, no.`,
              String.raw`Classification: the mode of {yes, yes, no} is yes.`,
              String.raw`Regression, plain average: \((300 + 330 + 420)/3 = 350\).`,
              String.raw`Weighted by \(1/d\): the weights are \(1, 0.5, 0.25\), total \(1.75\). Prediction \(= (300 \times 1 + 330 \times 0.5 + 420 \times 0.25)/1.75 = 570/1.75 = 325.7\).`,
            ],
            answer: String.raw`The query is predicted to sell quickly at about £350k, or £326k when closer houses count for more, since the nearest house is also the cheapest.`,
          },
          caption: 'For classification, every one of the k neighbours casts one equal vote and the most common label wins (a tie is usually broken by picking the closest of the tied classes). For regression, there is no "vote"the prediction is simply the plain average of the k neighbours\' values, so it can never predict outside the range of y seen in the training data. Weighted versions give closer neighbours more say, e.g. weight 1/d, which softens the effect of the k-th neighbour suddenly being included or excluded.',
        },
        {
          t: 'metric',
          name: 'k (the number of neighbours)',
          shows: 'How many nearby training examples get a vote when classifying a new point, the one dial that controls everything about how a kNN model behaves, trading off sensitivity to local detail against resistance to noise. It plays exactly the role that model complexity plays elsewhere: small k is a flexible, "memorising" model; large k is a smooth, generalising one.',
          eli5: 'Asking just your 1 closest neighbour for restaurant advice might get you a great tip, or might get you the opinion of the one weird neighbour who loves pineapple on everything. Asking your 50 closest neighbours averages out the quirky opinions, giving a more reliable (but less personalised) answer. k is simply how many neighbours you poll before deciding.',
          higher: 'A smoother, more stable decision boundary that averages over more neighbours, less sensitive to noise or outliers in any single training point, but also less able to capture fine, local detail in the data (underfitting if k gets too large; at the extreme, k = n always predicts the overall majority class, ignoring the new point\'s location entirely).',
          lower: 'A jagged, highly flexible decision boundary that reacts to every individual point, captures fine local structure well, but is also easily thrown off by noisy or mislabeled training examples (overfitting). At the extreme, k = 1 has 100% training accuracy by definition (each point is its own nearest neighbour), which is a red flag, not a strength.',
          typical: 'Odd values of k (3, 5, 7…) are common for two-class problems, to avoid tied votes; the right k is usually chosen by cross-validation, trying several values and picking whichever gives the best accuracy on held-out data, since the best choice depends entirely on how noisy the particular dataset is.',
        },
      ],
    },
    {
      id: 'curse',
      title: 'The curse of dimensionality',
      blocks: [
        { t: 'p', text: 'In many dimensions, everything is far from everything else, and the nearest and farthest neighbours end up at similar distances. Neighbours stop being meaningfully "near".' },
        {
          t: 'math',
          tex: String.raw`\text{To capture a fraction } r \text{ of data in a unit cube in } d \text{ dimensions, the edge must be } r^{1/d}`,
          where: [
            { sym: 'r', def: 'The fraction of all the data you want inside a small neighbourhood, e.g. 0.1 for 10%' },
            { sym: 'd', def: 'The number of features (dimensions)' },
          ],
          syntax: [
            { sym: String.raw`r^{1/d}`, say: String.raw`Read "r to the power one over d": the \(d\)-th root of \(r\). In 2D it is the square root, in 3D the cube root. For a fraction \(r\) below 1, the root is larger than \(r\) itself.` },
            { sym: String.raw`\text{unit cube}`, say: String.raw`A box whose side is 1 in every dimension, so the full range of every feature is 0 to 1.` },
          ],
          worked: {
            title: String.raw`How big must the neighbourhood be?`,
            steps: [
              String.raw`We want a small cube that holds \(r = 0.1\) (10%) of uniformly spread data. Its edge is \(0.1^{1/d}\).`,
              String.raw`\(d = 1\): edge \(= 0.1\), so 10% of the range. \(d = 2\): edge \(= \sqrt{0.1} = 0.316\) (check: \(0.316^2 = 0.1\)).`,
              String.raw`\(d = 10\): edge \(= 0.1^{0.1} = 0.794\).`,
              String.raw`\(d = 100\): edge \(= 0.1^{0.01} = 0.977\).`,
            ],
            answer: String.raw`With 100 features the "neighbourhood" must span 98% of every feature's range to catch just 10% of the points, so nothing is really local any more.`,
          },
          caption: 'To include 10% of the data around a point in 10 dimensions, you need a cube with sides 0.1^(1/10) ≈ 0.79: 79% of each feature’s range. As d climbs, r^(1/d) rushes towards 1 for any fixed r, meaning the "neighbourhood" has to swallow almost the entire range of every feature just to find that same 10% of points. "Local" is no longer local, and kNN\'s core assumption, that nearby points are similar, quietly stops holding.',
        },
        {
          t: 'plot',
          title: 'Edge length needed to enclose 10% of the data',
          x: [1, 20],
          y: [0, 1],
          xLabel: 'number of dimensions d',
          yLabel: 'edge length',
          curves: [{ f: (d: number) => 0.1 ** (1 / d), label: '0.1^(1/d)' }],
        },
        { t: 'callout', tone: 'tip', title: 'Making kNN fast', text: 'Comparing a query with every stored point is slow for millions of points. Data structures like k-d trees and ball trees, and approximate methods like HNSW graphs, find neighbours far faster. The same tricks power vector databases for AI search.' },
        { t: 'callout', tone: 'fact', title: 'A 1951 report', text: 'The nearest-neighbour rule was first described by Evelyn Fix and Joseph Hodges in a 1951 US Air Force technical report. In 1967 Cover and Hart proved that with enough data, the 1-nearest-neighbour error is at most twice the best possible error.' },
      ],
    },
  ],
  sources: ['Fix, E., & Hodges, J. L. (1951). *Discriminatory analysis: Nonparametric discrimination*. USAF School of Aviation Medicine.', 'Cover, T., & Hart, P. (1967). Nearest neighbor pattern classification. *IEEE Transactions on Information Theory*, 13(1), 21–27.'],
  related: ['ai/foundations/data', 'ai/neural/embeddings', 'ai/algorithms/clustering'],
}

export default guide
