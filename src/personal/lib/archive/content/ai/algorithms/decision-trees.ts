import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A decision tree is a flowchart of yes/no questions learned from data: "Is income above £30k? If yes, is the loan term under 5 years?…" Each leaf gives a prediction. Trees are easy to read, handle mixed data with little preparation, and are the building block of random forests and gradient boosting, some of the strongest methods for tabular data.',
  nutshell: [
    'At each node, choose the question (feature and threshold) that makes the resulting groups **purest**.',
    'Purity is measured by **Gini impurity** or **entropy**; the improvement is the **information gain**.',
    'Grown greedily from the top, one split at a time (the CART algorithm).',
    'Deep trees overfit; limit depth or leaf size, or **prune**.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'Grow a tree',
      blocks: [{ t: 'ai-viz', viz: 'tree' }],
    },
    {
      id: 'impurity',
      title: 'Measuring impurity',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Gini}(S) = 1 - \sum_{k} p_k^2 \qquad H(S) = -\sum_{k} p_k\log_2 p_k`,
          where: [{ sym: 'p_k', def: 'The share of examples in node S that belong to class k' }],
          syntax: [
            { sym: String.raw`\text{Gini}(S)`, say: String.raw`Read "Gini of S": the impurity score of the set \(S\) of examples sitting in one node.` },
            { sym: String.raw`\sum_{k} p_k^2`, say: String.raw`Read "the sum over k of p sub k squared": for each class \(k\), square its share, then add the squares up.` },
            { sym: String.raw`H(S)`, say: String.raw`Read "H of S": the entropy of the node, measured in bits.` },
            { sym: String.raw`\log_2`, say: String.raw`Read "log base 2": the power of 2 that gives the number, so \(\log_2 0.5 = -1\). Logs of shares below 1 are negative, so the leading minus sign makes each term positive.` },
          ],
          worked: {
            title: String.raw`Impurity of a 6-and-4 node`,
            steps: [
              String.raw`A node holds 10 loans: 6 repaid and 4 defaulted, so \(p_{\text{repaid}} = 0.6\) and \(p_{\text{default}} = 0.4\).`,
              String.raw`Gini: \(1 - (0.6^2 + 0.4^2) = 1 - (0.36 + 0.16) = 0.48\).`,
              String.raw`Entropy: \(\log_2 0.6 = -0.737\) and \(\log_2 0.4 = -1.322\), so \(H = -(0.6 \times (-0.737) + 0.4 \times (-1.322)) = 0.442 + 0.529 = 0.971\) bits.`,
              String.raw`For comparison, a pure node (10 repaid, 0 defaulted) has Gini \(1 - 1^2 = 0\) and entropy 0 (by convention \(0 \log 0 = 0\)); a 5-and-5 node has Gini 0.5 and entropy 1 bit.`,
            ],
            answer: String.raw`The 6-and-4 node scores 0.48 (maximum 0.5) and 0.971 bits (maximum 1): quite mixed, so a good split has plenty of impurity to remove.`,
          },
          caption: 'Both are 0 for a pure node and largest for an even mix (Gini 0.5, entropy 1 bit for two classes).',
        },
        {
          t: 'plot',
          title: 'Impurity of a two-class node',
          x: [0, 1],
          y: [0, 1.05],
          xLabel: 'share of class 1, p',
          curves: [
            { f: (p: number) => 2 * p * (1 - p), label: 'Gini = 2p(1 − p)' },
            { f: (p: number) => (p <= 0 || p >= 1 ? 0 : -p * Math.log2(p) - (1 - p) * Math.log2(1 - p)), label: 'entropy (bits)', color: '#e07b2a' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{Gain} = I(\text{parent}) - \frac{n_L}{n}I(\text{left}) - \frac{n_R}{n}I(\text{right})`,
          where: [
            { sym: 'I(\\cdot)', def: 'Impurity of a node (Gini or entropy)' },
            { sym: 'n_L, n_R, n', def: 'Number of examples sent left, sent right, and in the parent node' },
          ],
          syntax: [
            { sym: String.raw`I(\text{parent})`, say: String.raw`Read "impurity of the parent": the Gini or entropy of the node before splitting. The bracketed word names which node.` },
            { sym: String.raw`I(\cdot)`, say: String.raw`The dot is a placeholder: "impurity of whatever node goes here".` },
            { sym: String.raw`\frac{n_L}{n}`, say: String.raw`Read "n sub L over n": the fraction of the parent's examples that went left, a number between 0 and 1 used as a weight.` },
          ],
          worked: {
            title: String.raw`Gain from one split`,
            steps: [
              String.raw`The parent holds 10 loans (6 repaid, 4 defaulted): Gini \(= 0.48\), entropy \(= 0.971\).`,
              String.raw`The split "income above £30k" sends 4 loans left, all repaid (pure, \(I = 0\)), and 6 loans right: 2 repaid and 4 defaulted.`,
              String.raw`Right child: \(p = (1/3, 2/3)\), Gini \(= 1 - (1/9 + 4/9) = 0.444\).`,
              String.raw`Weighted impurity after the split: \(\tfrac{4}{10} \times 0 + \tfrac{6}{10} \times 0.444 = 0.267\).`,
              String.raw`Gain \(= 0.48 - 0.267 = 0.213\). With entropy the right child has \(H = 0.918\), so gain \(= 0.971 - 0.6 \times 0.918 = 0.420\).`,
            ],
            answer: String.raw`The split removes about 44% of the Gini impurity (0.213 of 0.48), mainly because it carved out a pure group of 4.`,
          },
          caption: 'Weight each child\'s impurity by how many examples it actually received, so a split that isolates a handful of outliers into a pure-but-tiny node does not look better than it is. Try every feature and every threshold; keep the split with the biggest drop. Gain is always ≥ 0, a split can never make the weighted impurity worse, so it stops only when no split helps at all (or another stopping rule kicks in first).',
        },
        {
          t: 'example',
          title: 'Should we play tennis? 10 days, 6 yes and 4 no',
          lines: [
            { label: 'Parent', text: 'Gini \\(= 1 - 0.6^2 - 0.4^2 = 0.48\\); entropy \\(= 0.971\\) bits' },
            { label: 'Split', text: '"Is it overcast?" Yes: 4 days, all play (pure). No: 6 days, 2 play, 4 do not' },
            { label: 'Children', text: 'Gini: left 0, right \\(1 - (1/3)^2 - (2/3)^2 = 0.444\\); entropy: left 0, right 0.918' },
            { label: 'Gain', text: 'Gini: \\(0.48 - 0.6(0.444) = 0.213\\); information gain \\(0.971 - 0.6(0.918) = 0.420\\) bits' },
          ],
        },
      ],
    },
    {
      id: 'algorithm',
      title: 'Growing and pruning',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'Start with all data at the root', tone: 'data' },
            { label: 'Find the best split', sub: 'every feature × every threshold', tone: 'process' },
            { label: 'Split into two children', tone: 'model' },
            { label: 'Stop?', sub: 'pure, too small, or max depth', tone: 'human' },
            { label: 'Leaf predicts majority class (or mean value)', tone: 'output' },
          ],
          loop: 'otherwise recurse on each child',
        },
        {
          t: 'math',
          tex: String.raw`R_\alpha(T) = R(T) + \alpha\,|\text{leaves}(T)|`,
          where: [
            { sym: 'R(T)', def: 'The tree\'s training error (misclassification rate, or MSE for regression)' },
            { sym: '|\\text{leaves}(T)|', def: 'The number of leaves, a stand-in for how complex the tree is' },
            { sym: '\\alpha', def: 'The price charged per extra leaf' },
          ],
          syntax: [
            { sym: String.raw`R_\alpha(T)`, say: String.raw`Read "R alpha of T": the penalised cost of tree \(T\) when each leaf costs \(\alpha\). The subscript \(\alpha\) is a setting that changes the answer, like a price.` },
            { sym: String.raw`|\text{leaves}(T)|`, say: String.raw`Bars around a set mean "how many items it contains": here, the number of leaves.` },
            { sym: String.raw`R(T) + \alpha\,|\text{leaves}(T)|`, say: String.raw`Total cost = error + price per leaf × number of leaves. A tree wins only if it has the lower total.` },
          ],
          worked: {
            title: String.raw`To prune or not to prune`,
            steps: [
              String.raw`Full tree \(T_0\): 7 leaves, training error \(R = 0.04\). Pruned subtree \(T_1\): 3 leaves, training error \(R = 0.07\).`,
              String.raw`Try \(\alpha = 0.005\): \(R_\alpha(T_0) = 0.04 + 0.005 \times 7 = 0.075\) and \(R_\alpha(T_1) = 0.07 + 0.005 \times 3 = 0.085\). The big tree is cheaper, so keep it.`,
              String.raw`Try \(\alpha = 0.01\): \(R_\alpha(T_0) = 0.04 + 0.07 = 0.11\) and \(R_\alpha(T_1) = 0.07 + 0.03 = 0.10\). The small tree is cheaper, so prune.`,
              String.raw`The tipping point is where the two costs are equal: \(\alpha = (0.07 - 0.04)/(7 - 3) = 0.0075\).`,
            ],
            answer: String.raw`Any leaf price above 0.0075 makes the 4 extra leaves not worth the 3 percentage points of training error they save.`,
          },
          caption: 'Cost-complexity pruning: grow a big tree, then cut back branches when the error saved is not worth the extra leaves, a branch only survives if removing it would raise R(T) by more than α per leaf it costs to keep. α = 0 keeps the full tree (no penalty for size); a larger α prunes more aggressively, trading a bit of training accuracy for a smaller, less overfit tree. α is chosen by cross-validation, picking whichever value gives the best accuracy on held-out data.',
        },
        {
          t: 'metric',
          name: 'maximum depth (max_depth)',
          shows: 'How many yes/no questions the tree is allowed to ask in a row before it must make a prediction, the main dial controlling how complex (and how overfit) a decision tree can become. Depth 1 can only ask one question total (a "decision stump"); depth 10 can ask up to 10 questions in sequence, dividing the data into up to 1,024 tiny regions.',
          eli5: 'Imagine playing 20 Questions to guess an animal. With a depth limit of 2, you can only ask "Does it have fur?" then "Is it bigger than a dog?" before guessing, broad, somewhat accurate guesses. With no depth limit, you could ask 50 questions and narrow it down to the exact individual animal you\'re thinking of, perfectly accurate for that one animal, but useless for guessing any other animal in the world.',
          higher: 'The tree can ask more questions and carve the data into smaller, more specific regions, training accuracy keeps rising (and can reach 100%), but the tree increasingly memorises quirks and noise specific to the training data rather than learning the general pattern, so test accuracy often starts falling even as training accuracy keeps climbing, the classic overfitting signature visible in the lab above.',
          lower: 'The tree is forced to make broader, simpler generalisations with fewer questions, it may miss genuinely useful distinctions in the data (underfitting) if set too low, but it is far less likely to be fooled by noise, and a shallow tree\'s decisions remain easy for a human to read and explain.',
          typical: 'Depths of 3–6 are common for interpretable trees meant to be read by a person; much deeper trees (10+) are more often used as building blocks inside random forests or boosting, where the overfitting of individual deep trees gets cancelled out by combining many of them (see [random forests](@ai/algorithms/random-forests)) rather than avoided directly.',
        },
        {
          t: 'code',
          code: String.raw`from sklearn.tree import DecisionTreeClassifier, export_text

tree = DecisionTreeClassifier(max_depth=3, min_samples_leaf=5)
tree.fit(X_train, y_train)
print(export_text(tree, feature_names=list(X_train.columns)))
print(tree.feature_importances_)`,
        },
        {
          t: 'dodont',
          do: ['Use trees when you need to explain decisions', 'Limit depth or leaf size', 'Use them inside forests or boosting for accuracy'],
          dont: ['Expect smooth or diagonal boundaries: trees cut along one feature at a time, in steps', 'Trust a single deep tree: small changes in data can change it completely (high variance)'],
        },
        { t: 'callout', tone: 'fact', title: 'Twenty questions', text: 'The CART algorithm (Classification and Regression Trees) was published by Breiman, Friedman, Olshen and Stone in 1984; Quinlan’s ID3 (1986) and C4.5 used entropy. Leo Breiman went on to invent bagging and random forests.' },
      ],
    },
  ],
  sources: ['Breiman, L., Friedman, J., Olshen, R., & Stone, C. (1984). *Classification and Regression Trees*. Wadsworth.', 'Quinlan, J. R. (1986). Induction of decision trees. *Machine Learning*, 1, 81–106.'],
  related: ['ai/algorithms/random-forests', 'ai/algorithms/boosting', 'ai/foundations/bias-variance'],
}

export default guide
