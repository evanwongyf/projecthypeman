import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'How good is a model? It depends what mistakes cost. A cancer screen that misses tumours is worse than one that raises false alarms; a spam filter is the other way round. Choosing the right metric is part of defining the problem.',
  nutshell: [
    'The **confusion matrix** counts true and false positives and negatives.',
    '**Precision**: of the alarms raised, how many were real? **Recall**: of the real cases, how many were caught?',
    '**Accuracy** misleads when classes are imbalanced.',
    '**ROC curves** and **AUC** judge a model across every threshold.',
    'For regression: **MSE**, **RMSE**, **MAE** and **R²**.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'Play with a threshold',
      blocks: [{ t: 'ai-viz', viz: 'threshold' }],
    },
    {
      id: 'classification',
      title: 'Classification metrics',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN} \qquad \text{Precision} = \frac{TP}{TP + FP} \qquad \text{Recall} = \frac{TP}{TP + FN}`,
          where: [
            { sym: 'TP, TN', def: 'True positives and true negatives: predictions the model got right' },
            { sym: 'FP, FN', def: 'False positives and false negatives: predictions the model got wrong, split by which way it erred' },
          ],
          syntax: [
            { sym: String.raw`TP,\ TN,\ FP,\ FN`, say: String.raw`Read "true positive, true negative, false positive, false negative": counts of examples in each cell of the confusion matrix. First word: was the model right (true) or wrong (false)? Second word: what did it predict?` },
            { sym: String.raw`\frac{TP}{TP + FP}`, say: String.raw`Read "TP over TP plus FP": out of everything predicted positive (the bottom), what share was truly positive (the top).` },
            { sym: String.raw`\frac{TP}{TP + FN}`, say: String.raw`Read "TP over TP plus FN": out of everything that was truly positive (the bottom), what share did the model find.` },
          ],
          worked: {
            title: String.raw`A spam filter on 200 emails`,
            steps: [
              String.raw`Counts: \(TP = 40\) spam caught, \(FP = 10\) real emails wrongly flagged, \(FN = 20\) spam missed, \(TN = 130\) real emails passed. Total 200.`,
              String.raw`Accuracy \(= (40 + 130)/200 = 170/200 = 0.85\).`,
              String.raw`Precision \(= 40/(40 + 10) = 40/50 = 0.80\).`,
              String.raw`Recall \(= 40/(40 + 20) = 40/60 \approx 0.667\).`,
            ],
            answer: String.raw`85% accuracy, but only two-thirds of the spam is caught (recall 0.667); when the filter does flag something it is right 80% of the time (precision 0.80).`,
          },
          caption: 'Accuracy is every correct prediction (right side of the denominator) over every prediction made. It reads as intuitive, but the denominator hides the class balance: with 990 negatives and 10 positives, a model that predicts "negative" every single time still scores 99% while catching precisely zero of the positives, which is exactly why precision and recall below look only at the positive class specifically.',
        },
        {
          t: 'metric',
          name: 'precision',
          shows: 'Of everything the model flagged as positive, what fraction actually were positive, a measure of how much you can trust a "positive" prediction. It answers the question "when this model raises an alarm, how often is it a real one?", and it says nothing about how many real positives the model might have missed entirely.',
          eli5: 'If a fire alarm goes off 10 times this year and only 2 of those were real fires, its precision is 20%, most of its alarms were false alarms, and you\'d quickly learn to ignore it, which is exactly the real-world danger of a low-precision system.',
          higher: 'When the model flags something as positive, it is usually right, few false alarms. High precision matters most when acting on a false positive is costly or annoying: a spam filter with low precision would bury real emails in the spam folder, frustrating users even if it catches most actual spam.',
          lower: 'Many of the model\'s positive flags are actually wrong (false positives), it cries wolf often. This matters less in situations where investigating a false alarm is cheap, but can be seriously costly where each flagged case triggers an expensive action (an unnecessary medical procedure, a blocked legitimate transaction).',
          typical: 'There is no universal "good" precision, it depends entirely on the cost of a false positive for the specific task, and precision always trades off against recall (below): pushing one up by moving the threshold typically pushes the other down, which is why they\'re almost always reported together, as in the table and example below.',
        },
        {
          t: 'metric',
          name: 'recall (sensitivity, true positive rate)',
          shows: 'Of everything that actually was positive, what fraction the model successfully caught, a measure of how thorough the model is. It answers the question "of all the real cases out there, how many did the model actually find?", and it says nothing about how many false alarms it raised along the way.',
          eli5: 'If there were 10 real fires this year and the fire alarm caught 8 of them (missing 2), its recall is 80%, it caught most real emergencies, even if (separately) some of its alarms might have been false ones. Recall only cares about not missing the real thing, not about how many false alarms came with it.',
          higher: 'The model catches most of the real positive cases, few are missed (few false negatives). High recall matters most when missing a real case is dangerous or costly: a cancer screen, a fraud detector, or airport security, where letting a real case slip through unnoticed is far worse than a false alarm that gets double-checked and dismissed.',
          lower: 'The model misses many real positive cases, it has a lot of false negatives. This is acceptable in low-stakes settings, but dangerous wherever a missed case has serious consequences, which is why medical and safety-critical systems are usually tuned to favour recall over precision, accepting more false alarms in exchange for catching more real cases.',
          typical: 'As with precision, there is no universal target, the right balance depends on the relative cost of a miss (false negative) versus a false alarm (false positive) for the specific application, summarised in the table below and visualised in the threshold lab above.',
        },
        {
          t: 'math',
          tex: String.raw`F_1 = \frac{2\cdot\text{Precision}\cdot\text{Recall}}{\text{Precision} + \text{Recall}} \qquad \text{FPR} = \frac{FP}{FP + TN} \qquad \text{Specificity} = 1 - \text{FPR}`,
          syntax: [
            { sym: String.raw`F_1`, say: String.raw`Read "F one" or "the F1 score". The 1 is a weight setting (precision and recall count equally); it is not an exponent.` },
            { sym: String.raw`\text{Precision}\cdot\text{Recall}`, say: String.raw`The dot is plain multiplication. Multiplying means that if either number is near 0, the product, and so F1, collapses.` },
            { sym: String.raw`1 - \text{FPR}`, say: String.raw`Read "one minus the false positive rate": the share of true negatives that were correctly left alone.` },
          ],
          worked: {
            title: String.raw`F1 and specificity for the spam filter`,
            steps: [
              String.raw`From the spam example: \(TP = 40\), \(FP = 10\), \(FN = 20\), \(TN = 130\); precision \(= 0.8\), recall \(= 2/3\).`,
              String.raw`\(F_1 = \dfrac{2 \times 0.8 \times 0.6667}{0.8 + 0.6667} = \dfrac{1.0667}{1.4667} \approx 0.727\). The plain average would be 0.733, a touch higher.`,
              String.raw`\(\text{FPR} = 10/(10 + 130) = 10/140 \approx 0.071\).`,
              String.raw`\(\text{Specificity} = 1 - 0.0714 = 0.929\) (equivalently \(130/140\)).`,
            ],
            answer: String.raw`F1 \(\approx 0.727\); the filter wrongly flags about 7% of real emails and correctly passes about 93% of them.`,
          },
          caption: 'F1 is the harmonic mean of precision and recall, not the plain average, the harmonic mean is dragged down hard by whichever of the two is small, so F1 is only high when both precision and recall are reasonably high; a model with precision 0.9 but recall 0.1 gets an F1 of just 0.18, not 0.5. The false positive rate (FPR) is recall\'s mirror image on the negative class: of everything that was actually negative, what fraction got wrongly flagged, and specificity is simply "1 minus that", how good the model is at correctly leaving true negatives alone.',
        },
        {
          t: 'example',
          title: 'Fraud detection',
          lines: [
            { label: 'Data', text: '1,000 transactions, 10 fraudulent' },
            { label: 'Lazy model', text: 'predicts "not fraud" every time: accuracy \\(990/1000 = 99\\%\\), recall \\(0/10 = 0\\%\\). Useless.' },
            { label: 'Real model', text: 'flags 25, of which 8 are fraud: precision \\(8/25 = 32\\%\\), recall \\(8/10 = 80\\%\\), \\(F_1 = 2(0.32)(0.8)/1.12 = 0.457\\)' },
          ],
        },
        {
          t: 'table',
          head: ['Situation', 'Favour', 'Why'],
          rows: [
            ['Cancer screening', 'Recall', 'A missed case is far worse than a follow-up test'],
            ['Spam filter', 'Precision', 'Losing a real email is worse than seeing some spam'],
            ['Search results', 'Precision at the top', 'People only look at the first few results'],
            ['Balanced, equal costs', 'Accuracy or F1', 'Errors cost roughly the same'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{AUC} = P\big(\text{score}(\text{random positive}) > \text{score}(\text{random negative})\big)`,
          syntax: [
            { sym: String.raw`P(\cdot)`, say: String.raw`Read "the probability that": the chance, over random choices, that the statement inside is true.` },
            { sym: String.raw`\text{score}(\text{random positive}) > \text{score}(\text{random negative})`, say: String.raw`Read "the model scores a randomly chosen positive higher than a randomly chosen negative": pick one of each at random and ask whether the model ranked them correctly.` },
          ],
          worked: {
            title: String.raw`Counting ranked pairs`,
            steps: [
              String.raw`Three real positives get scores 0.9, 0.7, 0.4. Three real negatives get scores 0.8, 0.3, 0.2.`,
              String.raw`That makes \(3 \times 3 = 9\) positive/negative pairs. Count those where the positive scores higher.`,
              String.raw`Positive 0.9 beats all three negatives: 3. Positive 0.7 beats 0.3 and 0.2 but loses to 0.8: 2. Positive 0.4 beats 0.3 and 0.2 but loses to 0.8: 2.`,
              String.raw`\(\text{AUC} = (3 + 2 + 2)/9 = 7/9 \approx 0.778\).`,
            ],
            answer: String.raw`AUC \(\approx 0.78\): about 78% of the time the model ranks a random real positive above a random real negative (1.0 would be perfect, 0.5 coin-flipping).`,
          },
          caption: 'AUC = 1 is perfect ranking, 0.5 is coin-flipping. It ignores the threshold, which makes it good for comparing models but not for choosing an operating point.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Log loss} = -\frac{1}{n}\sum_{i=1}^{n}\big[y_i\log\hat{p}_i + (1 - y_i)\log(1 - \hat{p}_i)\big]`,
          where: [
            { sym: 'y_i', def: 'The true label, 0 or 1' },
            { sym: '\\hat{p}_i', def: 'The model\'s predicted probability that example i is class 1' },
          ],
          syntax: [
            { sym: String.raw`\log`, say: String.raw`Read "log" (natural logarithm, base e, as everywhere in machine learning). \(\log 1 = 0\), and it becomes a large negative number as its input approaches 0.` },
            { sym: String.raw`y_i\log\hat{p}_i + (1 - y_i)\log(1 - \hat{p}_i)`, say: String.raw`Read as a switch: when \(y_i = 1\) only the first term survives, and when \(y_i = 0\) only the second. Either way you take the log of the probability given to the correct answer.` },
            { sym: String.raw`-\frac{1}{n}\sum`, say: String.raw`Read "minus the average of": add up the terms for all n examples, divide by n, and flip the sign so the loss is positive.` },
            { sym: String.raw`\hat{p}_i`, say: String.raw`Read "p hat sub i": the model's predicted probability for example i.` },
          ],
          worked: {
            title: String.raw`Four predictions, one confidently wrong`,
            steps: [
              String.raw`\(y = 1\), \(\hat{p} = 0.9\): the correct-class probability is 0.9, loss \(= -\ln 0.9 = 0.105\).`,
              String.raw`\(y = 0\), \(\hat{p} = 0.2\): correct-class probability \(1 - 0.2 = 0.8\), loss \(= -\ln 0.8 = 0.223\).`,
              String.raw`\(y = 1\), \(\hat{p} = 0.6\): loss \(= -\ln 0.6 = 0.511\).`,
              String.raw`\(y = 0\), \(\hat{p} = 0.99\): correct-class probability 0.01, loss \(= -\ln 0.01 = 4.605\).`,
              String.raw`Average: \((0.105 + 0.223 + 0.511 + 4.605)/4 = 5.444/4 \approx 1.361\). Without the last example it would be \(0.839/3 \approx 0.280\).`,
            ],
            answer: String.raw`Log loss \(\approx 1.36\). One confident mistake contributes about 85% of the total, which is exactly how this metric punishes overconfidence.`,
          },
          caption: 'Unlike accuracy or F1, which only look at the final yes/no decision, log loss judges the probabilities themselves, it rewards a model for being not just correct but *appropriately confident*, and punishes confident mistakes heavily: predicting 0.99 for something that does not happen costs −log(0.01) ≈ 4.6, far more than a cautious, wrong 0.6 would. A lower log loss means the model\'s stated confidence is more trustworthy, which is why it is the metric actually minimised during training, even when accuracy is what gets reported afterwards.',
        },
      ],
    },
    {
      id: 'regression',
      title: 'Regression metrics',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{MSE} = \frac{1}{n}\sum_i (y_i - \hat{y}_i)^2 \qquad \text{RMSE} = \sqrt{\text{MSE}} \qquad \text{MAE} = \frac{1}{n}\sum_i |y_i - \hat{y}_i|`,
          where: [{ sym: 'y_i - \\hat{y}_i', def: 'The residual: how far prediction i missed the true value, and in which direction' }],
          syntax: [
            { sym: String.raw`\sum_i`, say: String.raw`Read "the sum over i": add up the term for every example, with no need to spell out the range.` },
            { sym: String.raw`|y_i - \hat{y}_i|`, say: String.raw`Read "the absolute value of y minus y hat": the size of the miss with its sign thrown away, so \(|-20| = 20\).` },
            { sym: String.raw`\sqrt{\text{MSE}}`, say: String.raw`Read "the square root of MSE": undo the squaring so the answer is back in the units of y.` },
          ],
          worked: {
            title: String.raw`Predicting five house prices (£k)`,
            steps: [
              String.raw`True prices \(y\): 250, 310, 180, 420, 290. Predictions \(\hat{y}\): 240, 330, 200, 380, 295.`,
              String.raw`Errors \(y - \hat{y}\): \(10, -20, -20, 40, -5\).`,
              String.raw`MSE: squares are 100, 400, 400, 1600, 25, total 2525, so MSE \(= 2525/5 = 505\) (in £k\(^2\)).`,
              String.raw`RMSE \(= \sqrt{505} \approx 22.5\) (£k).`,
              String.raw`MAE \(= (10 + 20 + 20 + 40 + 5)/5 = 95/5 = 19\) (£k).`,
            ],
            answer: String.raw`The model is typically off by about £19k (MAE) or £22.5k (RMSE); RMSE is the larger of the two because the single £40k miss is squared.`,
          },
          caption: 'MSE squares every error before averaging, so it is in squared units of y (hard to interpret directly) and lets one big miss dominate the score. RMSE takes the square root back, returning to the original units of y"the model is typically off by about RMSE" is a reasonable way to read it, though it still weighs large errors more than small ones. MAE averages the plain absolute errors instead, so every unit of error counts equally: it is more robust to a handful of outliers, and reads directly as "the average size of a mistake".',
        },
        {
          t: 'math',
          tex: String.raw`R^2 = 1 - \frac{\sum_i (y_i - \hat{y}_i)^2}{\sum_i (y_i - \bar{y})^2}`,
          where: [
            { sym: '\\bar{y}', def: 'The mean of the true values, the baseline "always guess the average" prediction' },
            { sym: '\\sum_i (y_i - \\hat{y}_i)^2', def: 'The model\'s total squared error (same numerator as MSE, unaveraged)' },
          ],
          syntax: [
            { sym: String.raw`R^2`, say: String.raw`Read "R squared". The 2 is part of the name (it is the square of a correlation in simple regression), not something to compute.` },
            { sym: String.raw`\bar{y}`, say: String.raw`Read "y bar": the mean of the y values. A bar over a letter means average.` },
            { sym: String.raw`\frac{\sum_i (y_i - \hat{y}_i)^2}{\sum_i (y_i - \bar{y})^2}`, say: String.raw`Read "model error over baseline error": the top is how far off the model is, the bottom is how far off you would be by always guessing the mean.` },
          ],
          worked: {
            title: String.raw`R-squared for the five house prices`,
            steps: [
              String.raw`Using the same data: \(y\) = 250, 310, 180, 420, 290 and errors \(10, -20, -20, 40, -5\).`,
              String.raw`Model error: \(\sum (y_i - \hat{y}_i)^2 = 100 + 400 + 400 + 1600 + 25 = 2525\).`,
              String.raw`Mean: \(\bar{y} = 1450/5 = 290\). Deviations: \(-40, 20, -110, 130, 0\); squared: 1600, 400, 12100, 16900, 0; total 31000.`,
              String.raw`\(R^2 = 1 - 2525/31000 = 1 - 0.0815 = 0.9185\).`,
            ],
            answer: String.raw`\(R^2 \approx 0.92\): the model explains about 92% of the variation in house prices that guessing the average (£290k) would leave unexplained.`,
          },
          caption: 'The fraction being subtracted is the model\'s error divided by the error of the dumbest possible baseline (always predicting ȳ). R² is the share of the variance explained: 1 is perfect, 0 means the model does no better than that baseline, and it can go negative on test data when the model does *worse* than just guessing the average every time, a real risk if it overfit the training set.',
        },
        {
          t: 'example',
          title: 'Three predictions',
          lines: [
            { label: 'Truth / guess', text: '(3, 2.5), (5, 5.5), (8, 6)' },
            { label: 'Errors', text: '0.5, −0.5, 2' },
            { label: 'MAE', text: '\\((0.5 + 0.5 + 2)/3 = 1.0\\)' },
            { label: 'RMSE', text: '\\(\\sqrt{(0.25 + 0.25 + 4)/3} = \\sqrt{1.5} \\approx 1.22\\): squaring makes the one big miss count more' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Goodhart’s law', text: '"When a measure becomes a target, it ceases to be a good measure." Models optimised hard against one benchmark often learn its quirks rather than the skill it was meant to measure, which is why researchers keep building new test sets.' },
      ],
    },
  ],
  sources: ['Fawcett, T. (2006). An introduction to ROC analysis. *Pattern Recognition Letters*, 27(8), 861–874.', 'Saito, T., & Rehmsmeier, M. (2015). The precision-recall plot is more informative than the ROC plot when evaluating binary classifiers on imbalanced datasets. *PLoS ONE*, 10(3).'],
  related: ['ai/foundations/bias-variance', 'ai/algorithms/logistic-regression', 'ai/practice/ethics'],
}

export default guide
