import type { Guide } from '../../../guide'
import { makeCurve } from '../../../../ai/data'
import { boostStumps } from '../../../../ai/models'

const DATA = makeCurve(40, 12, 0.12)
const F1 = boostStumps(DATA.pts, 1, 0.3)
const F10 = boostStumps(DATA.pts, 10, 0.3)
const F100 = boostStumps(DATA.pts, 100, 0.3)

const guide: Guide = {
  intro:
    'Random forests build independent trees in parallel and average them. **Boosting** builds trees one after another, each focusing on the mistakes of the ones before. Built from weak learners like tiny trees, boosted models are often the most accurate choice for tables of data, and libraries like XGBoost have won a large share of data-science competitions.',
  nutshell: [
    '**AdaBoost**: reweight the examples so misclassified ones count more, then train the next weak learner.',
    '**Gradient boosting**: fit each new tree to the residuals (more generally, the negative gradient of the loss).',
    'A small **learning rate** with many trees generalises better than a large one with few.',
    'Fast, regularised implementations: **XGBoost**, **LightGBM**, **CatBoost**.',
  ],
  sections: [
    {
      id: 'gradient',
      title: 'Gradient boosting: learning from residuals',
      blocks: [
        {
          t: 'math',
          tex: String.raw`F_0(x) = \bar{y}, \qquad r_i^{(m)} = y_i - F_{m-1}(x_i), \qquad h_m = \text{tree fitted to } \{(x_i, r_i^{(m)})\}, \qquad F_m(x) = F_{m-1}(x) + \nu\,h_m(x)`,
          where: [
            { sym: 'r_i^{(m)}', def: 'The residual: what the model so far still gets wrong' },
            { sym: 'h_m', def: 'A small tree (here a "stump" with one split)' },
            { sym: '\\nu', def: 'The learning rate or shrinkage, e.g. 0.1' },
          ],
          syntax: [
            { sym: String.raw`F_m(x)`, say: String.raw`Read "F sub m of x": the whole model after m rounds. The subscript is a round number, not a power; \(F_0\) is the starting model before any tree exists.` },
            { sym: String.raw`\bar{y}`, say: String.raw`Read "y bar": the mean of the y values. Add them all up and divide by how many there are.` },
            { sym: String.raw`r_i^{(m)}`, say: String.raw`Read "r sub i, round m": the residual of example \(i\) in round \(m\). The bracketed raised \((m)\) is a label for the round, not an exponent.` },
            { sym: String.raw`\{(x_i, r_i^{(m)})\}`, say: String.raw`Read "the set of pairs x_i and r_i": the training data handed to tree \(m\), with the residuals as the targets instead of the original y values.` },
            { sym: String.raw`F_m(x) = F_{m-1}(x) + \nu\,h_m(x)`, say: String.raw`An update rule: "the new model equals the old model plus nu times the new tree". Do it once per round, \(m = 1, 2, 3, \dots\), so the model is a running total.` },
          ],
          worked: {
            title: String.raw`Boosting four house prices (ν = 0.5)`,
            steps: [
              String.raw`Given prices in £ thousands, smallest house to largest: \(y = 180, 220, 280, 320\). Learning rate \(\nu = 0.5\); each tree is a stump that splits the two smaller houses from the two larger.`,
              String.raw`Start: \(F_0 = \bar{y} = (180 + 220 + 280 + 320)/4 = 250\). Residuals \(r = y - F_0 = -70, -30, 30, 70\), so the mean squared error is \((4900 + 900 + 900 + 4900)/4 = 2900\).`,
              String.raw`Round 1: the stump predicts the average residual on each side: \((-70 - 30)/2 = -50\) on the left and \((30 + 70)/2 = +50\) on the right. Shrink by \(\nu\): \(F_1 = 250 + 0.5 \times (-50) = 225\) for the left pair and \(250 + 0.5 \times 50 = 275\) for the right pair.`,
              String.raw`New residuals: \(-45, -5, 5, 45\). Mean squared error: \((2025 + 25 + 25 + 2025)/4 = 1025\).`,
              String.raw`Round 2: the stump now predicts \(-25\) and \(+25\), so \(F_2 = 225 - 12.5 = 212.5\) and \(275 + 12.5 = 287.5\). Residuals: \(-32.5, 7.5, -7.5, 32.5\), mean squared error \(556.25\).`,
            ],
            answer: String.raw`The error fell from 2900 to 1025 to 556.25 in two rounds: each shrunk step removes only part of what is left, which is why boosting needs many small rounds.`,
          },
          caption: 'For squared error the residual is exactly the negative gradient of the loss with respect to the prediction, which is why it is called gradient boosting: gradient descent in the space of functions. Read it left to right as a running total: start from a flat guess, then keep adding small, shrunk corrections, each one aimed squarely at whatever the running total still gets wrong.',
        },
        {
          t: 'metric',
          name: 'the learning rate (shrinkage), ν',
          shows: 'How much of each new tree\'s correction actually gets added to the running prediction. A tree might confidently predict a residual of 50, but with ν = 0.3 only 15 of that gets added, the rest is deliberately left on the table for later rounds to chip away at.',
          eli5: 'Like steering a car with small, frequent corrections instead of one big yank of the wheel. Each correction alone barely changes direction, but a long sequence of small, well-aimed ones ends up tracing a smooth, accurate path, and overshoots far less than a few large jerks would.',
          higher: 'Each round moves the prediction further, so fewer rounds are needed to fit the training data, but large steps are more likely to overfit, chasing individual noisy points rather than the general trend, since there is less opportunity for later rounds to correct an early overreaction.',
          lower: 'Each round moves the prediction only a little, so more rounds (more trees) are needed to reach the same fit, slower to train, but the model generalises better because no single tree\'s mistake can swing the final prediction far on its own.',
          typical: 'Common values are 0.01–0.3, almost always paired with many more trees and early stopping on a validation set: shrink the steps, then simply take more of them until validation performance stops improving.',
        },
        {
          t: 'plot',
          title: 'Boosting decision stumps (learning rate 0.3)',
          x: [-1, 1],
          y: [-1.4, 1.4],
          curves: [
            { f: F1, label: 'after 1 round', color: '#999', dashed: true },
            { f: F10, label: 'after 10 rounds', color: '#e07b2a' },
            { f: F100, label: 'after 100 rounds', color: '#7b4fc9' },
          ],
          data: [{ pts: DATA.pts.map((p) => [p.x, p.y] as [number, number]), dots: true, color: '#3b6fd8', label: 'data' }],
          caption: 'Each stump can only make one step. Added up, a hundred of them trace the curve. Too many rounds would start to chase the noise, so the number of rounds is tuned with early stopping on validation data.',
        },
        {
          t: 'example',
          title: 'One house, three rounds (ν = 0.5)',
          lines: [
            { label: 'Truth', text: 'price 300; start with the average price, 240' },
            { label: 'Round 1', text: 'residual 60; tree predicts 50; new prediction \\(240 + 0.5 \\times 50 = 265\\)' },
            { label: 'Round 2', text: 'residual 35; tree predicts 30; \\(265 + 15 = 280\\)' },
            { label: 'Round 3', text: 'residual 20; tree predicts 22; \\(280 + 11 = 291\\): creeping up on the truth' },
          ],
        },
      ],
    },
    {
      id: 'adaboost',
      title: 'AdaBoost',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\begin{aligned}
\varepsilon_t &= \sum_i w_i\,[\,h_t(x_i) \ne y_i\,] && \text{weighted error} \\
\alpha_t &= \tfrac{1}{2}\ln\frac{1 - \varepsilon_t}{\varepsilon_t} && \text{this learner’s say} \\
w_i &\leftarrow w_i\,e^{-\alpha_t y_i h_t(x_i)}, \text{ then normalise} && \text{boost the mistakes} \\
H(x) &= \operatorname{sign}\Big(\sum_t \alpha_t h_t(x)\Big) && \text{final weighted vote}
\end{aligned}`,
          where: [
            { sym: '\\varepsilon_t', def: 'The weighted error rate of weak learner t on the current weights' },
            { sym: '\\alpha_t', def: 'How much say that learner gets in the final vote' },
            { sym: 'w_i', def: 'The current weight (importance) of training example i' },
            { sym: 'y_i, h_t(x_i)', def: 'The true label and this learner\'s prediction for example i, both +1 or −1' },
            { sym: 'H(x)', def: 'The final prediction: a weighted vote of every weak learner so far' },
          ],
          syntax: [
            { sym: String.raw`\varepsilon_t`, say: String.raw`Read "epsilon sub t": the weighted error of the learner trained in round \(t\). The subscript is the round number.` },
            { sym: String.raw`[\,h_t(x_i) \ne y_i\,]`, say: String.raw`Square brackets here are an indicator: the value is 1 if the statement inside is true (learner \(t\) gets example \(i\) wrong) and 0 if false. So the sum adds up the weights of only the mistakes.` },
            { sym: String.raw`\ln`, say: String.raw`Read "natural log": the inverse of \(e^x\). \(\ln 1 = 0\), which is why a coin-flip learner (\(\varepsilon = 0.5\), ratio 1) gets \(\alpha = 0\).` },
            { sym: String.raw`w_i \leftarrow w_i\,e^{-\alpha_t y_i h_t(x_i)}`, say: String.raw`Read "w_i is replaced by w_i times e to the minus alpha y h". The arrow is an assignment, not an equation. Because \(y\) and \(h\) are \(\pm 1\), the product \(y h\) is +1 when right and −1 when wrong, so the weight shrinks when right and grows when wrong.` },
            { sym: String.raw`\operatorname{sign}(\cdot)`, say: String.raw`Gives +1 for a positive number and −1 for a negative one: it turns the weighted vote total into a class.` },
          ],
          worked: {
            title: String.raw`One AdaBoost round on five examples`,
            steps: [
              String.raw`Start with five examples, each with weight \(w_i = 0.2\). Learner \(h_1\) gets only example 3 wrong.`,
              String.raw`Weighted error: \(\varepsilon_1 = 0.2\) (the weight of the single mistake).`,
              String.raw`Its say: \(\alpha_1 = \tfrac{1}{2}\ln\frac{1 - 0.2}{0.2} = \tfrac{1}{2}\ln 4 = 0.693\).`,
              String.raw`Reweight: the mistake becomes \(0.2 \times e^{0.693} = 0.2 \times 2 = 0.4\); each correct example becomes \(0.2 \times e^{-0.693} = 0.2 \times 0.5 = 0.1\). The total is \(0.4 + 4 \times 0.1 = 0.8\).`,
              String.raw`Normalise by dividing by 0.8: example 3 now has weight \(0.5\) and each other example \(0.125\) (together exactly 1).`,
              String.raw`Final vote on some input: suppose later learners have \(\alpha_2 = 0.424\) (error 0.3) and \(\alpha_3 = 0.549\) (error 0.25), and the three predict \(+1, -1, -1\). The total is \(0.693 - 0.424 - 0.549 = -0.280\), so \(H(x) = \operatorname{sign}(-0.280) = -1\).`,
            ],
            answer: String.raw`One mistake went from 20% to 50% of the total weight, forcing the next learner to focus on it, and two weaker learners together outvoted the single strongest one.`,
          },
          caption: 'Labels y and predictions h are ±1. A learner with error 0.3 gets α = ½ ln(0.7/0.3) ≈ 0.42; a coin-flip learner (error 0.5) gets 0, and an error above 0.5 gets a *negative* vote, it is confidently wrong more often than right, so AdaBoost simply inverts it. Misclassified examples have their weights multiplied by e^α (growing), correct ones shrink after normalising, so the next learner is trained on a reweighted dataset that concentrates on exactly the points the ensemble so far gets wrong.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'In practice',
      blocks: [
        {
          t: 'code',
          title: 'XGBoost with early stopping',
          code: String.raw`import xgboost as xgb

model = xgb.XGBClassifier(
    n_estimators=2000,
    learning_rate=0.05,
    max_depth=5,
    subsample=0.8,          # rows per tree
    colsample_bytree=0.8,   # features per tree
    early_stopping_rounds=50,
)
model.fit(X_train, y_train, eval_set=[(X_val, y_val)], verbose=False)
print(model.best_iteration)`,
        },
        {
          t: 'table',
          head: ['', 'Random forest', 'Gradient boosting'],
          rows: [
            ['Trees built', 'Independently, in parallel', 'One after another'],
            ['Each tree', 'Deep, low bias, high variance', 'Shallow, high bias'],
            ['Mainly reduces', 'Variance', 'Bias (and variance, with shrinkage)'],
            ['Tuning', 'Little needed', 'More sensitive: learning rate, depth, rounds'],
            ['Accuracy on tables', 'Very good', 'Often the best'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Winning competitions', text: 'XGBoost, released by Tianqi Chen in 2014, was used by 17 of the 29 winning solutions in Kaggle competitions in 2015, according to its authors’ paper. On tabular data, boosted trees still often beat deep learning.' },
      ],
    },
  ],
  sources: ['Freund, Y., & Schapire, R. E. (1997). A decision-theoretic generalization of on-line learning and an application to boosting. *Journal of Computer and System Sciences*, 55(1), 119–139.', 'Friedman, J. H. (2001). Greedy function approximation: A gradient boosting machine. *Annals of Statistics*, 29(5), 1189–1232.', 'Chen, T., & Guestrin, C. (2016). XGBoost: A scalable tree boosting system. *KDD*.', 'Grinsztajn, L., Oyallon, E., & Varoquaux, G. (2022). Why do tree-based models still outperform deep learning on tabular data? *NeurIPS*.'],
  related: ['ai/algorithms/random-forests', 'ai/algorithms/decision-trees', 'ai/foundations/gradient-descent'],
}

export default guide
