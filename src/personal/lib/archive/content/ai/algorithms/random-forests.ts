import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A single deep decision tree is accurate on its training data but unstable: change a few examples and it changes completely. A **random forest** grows hundreds of deliberately different trees and lets them vote. Their individual errors largely cancel out, giving one of the most reliable, low-fuss algorithms in machine learning.',
  nutshell: [
    '**Bagging**: each tree is trained on a bootstrap sample (drawn with replacement).',
    '**Random features**: each split considers only a random subset of features, so trees differ more.',
    'Prediction: majority vote (classification) or average (regression).',
    'Averaging reduces variance without adding much bias; **out-of-bag** examples give a free validation score.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'Watch the vote',
      blocks: [{ t: 'ai-viz', viz: 'forest' }],
    },
    {
      id: 'how',
      title: 'How a forest is grown',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'Training data (n rows)', tone: 'data' },
            { label: 'Bootstrap sample', sub: 'draw n rows with replacement', tone: 'process' },
            { label: 'Grow a deep tree', sub: 'at each split, try only √d random features', tone: 'model' },
            { label: 'Repeat B times', sub: 'typically 100–1,000 trees', tone: 'process' },
            { label: 'Vote or average', tone: 'output' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\operatorname{Var}\Big(\frac{1}{B}\sum_{b=1}^{B} T_b\Big) = \rho\,\sigma^2 + \frac{1 - \rho}{B}\,\sigma^2`,
          where: [
            { sym: '\\sigma^2', def: 'The variance of a single tree’s prediction' },
            { sym: '\\rho', def: 'The correlation between trees' },
            { sym: 'B', def: 'The number of trees' },
          ],
          syntax: [
            { sym: String.raw`\operatorname{Var}(\cdot)`, say: String.raw`Read "the variance of": how much the quantity would wobble if you retrained on fresh data.` },
            { sym: String.raw`\frac{1}{B}\sum_{b=1}^{B} T_b`, say: String.raw`The average of the \(B\) trees' predictions: add \(T_1, T_2, \dots, T_B\) and divide by \(B\).` },
            { sym: String.raw`\rho`, say: String.raw`Read "rho": the correlation between trees, from 0 (independent) to 1 (identical).` },
            { sym: String.raw`\sigma^2`, say: String.raw`Read "sigma squared": the variance of one tree.` },
          ],
          worked: {
            title: String.raw`How much does averaging help?`,
            steps: [
              String.raw`Say one tree has variance \(\sigma^2 = 1\) and trees are correlated at \(\rho = 0.3\).`,
              String.raw`\(B = 1\): \(0.3 + 0.7/1 = 1.0\), no gain.`,
              String.raw`\(B = 10\): \(0.3 + 0.7/10 = 0.37\).`,
              String.raw`\(B = 100\): \(0.3 + 0.7/100 = 0.307\), and as \(B \to \infty\) it tends to \(0.3\).`,
              String.raw`With highly correlated trees, \(\rho = 0.8\) and \(B = 100\): \(0.8 + 0.2/100 = 0.802\).`,
            ],
            answer: String.raw`Going from one tree to many cuts the variance by about 70%, but never below \(\rho\sigma^2\); correlated trees (\(\rho = 0.8\)) barely benefit, which is why the forest randomises features.`,
          },
          caption: 'Adding trees shrinks the second term towards zero, but the first term stays. That is why forests also randomise features: to lower ρ, the correlation between trees.',
        },
        {
          t: 'metric',
          name: 'the number of trees (n_estimators)',
          shows: 'How many individual decision trees get averaged together into the forest\'s final vote. Because the formula above shows variance shrinking towards a floor (ρσ²) rather than towards zero as B grows, this setting has an unusually forgiving property among machine-learning hyperparameters: there is essentially no way to make a random forest worse by adding more trees, only a point of diminishing returns.',
          eli5: 'Asking 5 random strangers to guess the weight of an ox gives a decent average guess; asking 500 strangers gives an even steadier, more reliable average, but asking 5,000 instead of 500 barely improves things further, since you\'ve already averaged out almost all the individual randomness. More trees in a forest works the same way: each additional tree helps less than the one before it.',
          higher: 'A smoother, more stable average prediction, the "noise" from any individual tree\'s quirks gets cancelled out more thoroughly. Unlike most hyperparameters, more trees essentially never hurts accuracy (it can only help or plateau), but it does cost more time and memory to train and to predict with.',
          lower: 'Fewer trees to average over, training and prediction are faster and lighter, but the forest\'s predictions are noisier and more sensitive to which particular random trees happened to get built, since there are fewer of them to smooth out individual quirks.',
          typical: 'Accuracy typically improves quickly from 1 tree up to a few dozen, then levels off with diminishing returns; 100–500 trees is a common practical range, and since adding trees essentially never makes the forest less accurate, the main reason to stop is simply training time and memory, not any risk of making the model worse.',
        },
        {
          t: 'math',
          tex: String.raw`P(\text{a row is left out of a bootstrap sample}) = \Big(1 - \frac{1}{n}\Big)^n \xrightarrow{\,n\to\infty\,} \frac{1}{e} \approx 36.8\%`,
          where: [{ sym: 'n', def: 'The number of rows in the training data' }],
          syntax: [
            { sym: String.raw`\Big(1 - \frac{1}{n}\Big)^n`, say: String.raw`Each draw misses a given row with probability \(1 - 1/n\), and there are \(n\) independent draws, so raise to the power \(n\).` },
            { sym: String.raw`\xrightarrow{\,n\to\infty\,}`, say: String.raw`Read "tends to, as n goes to infinity": the value gets ever closer to the right-hand side.` },
            { sym: String.raw`\frac{1}{e}`, say: String.raw`\(e \approx 2.718\), so \(1/e \approx 0.368\).` },
          ],
          worked: {
            title: String.raw`The out-of-bag share for different n`,
            steps: [
              String.raw`\(n = 5\): \((1 - 1/5)^5 = 0.8^5 = 0.328\).`,
              String.raw`\(n = 10\): \(0.9^{10} = 0.349\).`,
              String.raw`\(n = 100\): \(0.99^{100} = 0.366\).`,
              String.raw`\(n = 1000\): \(0.999^{1000} = 0.3677\), already close to \(1/e = 0.3679\).`,
            ],
            answer: String.raw`With 1000 training rows each tree skips about 368 of them, and those rows act as a free validation set for that tree.`,
          },
          caption: 'Each tree never sees about a third of the rows, because sampling n rows with replacement from n rows leaves some out by chance, and this probability settles near 1/e regardless of how large n gets. Predicting each row using only the trees that did not see it gives the out-of-bag (OOB) error, a free stand-in for test accuracy, since every row gets evaluated by trees it never trained on, without setting aside a separate validation set at all.',
        },
      ],
    },
    {
      id: 'use',
      title: 'Using forests',
      blocks: [
        {
          t: 'code',
          code: String.raw`from sklearn.ensemble import RandomForestClassifier

forest = RandomForestClassifier(
    n_estimators=500,      # number of trees
    max_features="sqrt",   # features tried per split
    oob_score=True,
    n_jobs=-1,             # use every CPU core
    random_state=0,
)
forest.fit(X_train, y_train)
print(forest.oob_score_)               # out-of-bag accuracy
for name, imp in sorted(zip(X_train.columns, forest.feature_importances_),
                        key=lambda t: -t[1])[:5]:
    print(name, round(imp, 3))`,
        },
        {
          t: 'table',
          head: ['Strengths', 'Weaknesses'],
          rows: [
            ['Accurate with almost no tuning', 'Less interpretable than one tree'],
            ['Handles mixed features, needs no scaling', 'Large models; slower predictions than a linear model'],
            ['Resistant to overfitting as trees are added', 'Cannot extrapolate beyond the range of training targets'],
            ['Gives feature importances and OOB error for free', 'Impurity-based importances favour features with many distinct values; prefer permutation importance'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The wisdom of crowds', text: 'In 1906 Francis Galton found that the median of about 800 guesses of an ox’s weight at a country fair was within 1% of the true weight, better than most individual experts. Random forests apply the same principle: many independent, reasonably good guesses beat one.' },
      ],
    },
  ],
  sources: ['Breiman, L. (1996). Bagging predictors. *Machine Learning*, 24, 123–140.', 'Breiman, L. (2001). Random forests. *Machine Learning*, 45, 5–32.', 'Galton, F. (1907). Vox populi. *Nature*, 75, 450–451.'],
  related: ['ai/algorithms/decision-trees', 'ai/algorithms/boosting', 'ai/foundations/bias-variance'],
}

export default guide
