import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'This shelf explains how artificial intelligence actually works: not just what it can do, but the maths, the algorithms and the code underneath. Most pages include a live diagram that runs a real model in your browser, so you can change the settings and watch it learn.',
  nutshell: [
    'Modern AI is mostly **machine learning**: instead of writing rules, we show a program examples and let it find the rules itself.',
    'Learning means **minimising a loss**: a number that measures how wrong the model is, reduced step by step by **gradient descent**.',
    'Everything from a straight-line fit to ChatGPT follows that recipe: a model with adjustable numbers, data, a loss and an optimiser.',
    'Formulas are typeset and explained symbol by symbol; code is in Python, the language most AI work uses.',
  ],
  sections: [
    {
      id: 'big-picture',
      title: 'The big picture',
      blocks: [
        {
          t: 'flow',
          title: 'How almost every machine-learning system is built',
          nodes: [
            { label: 'Data', sub: 'examples, often with the right answers', tone: 'data' },
            { label: 'Model', sub: 'a function with adjustable parameters θ', tone: 'model' },
            { label: 'Prediction', sub: 'the model’s guess ŷ', tone: 'output' },
            { label: 'Loss', sub: 'how wrong: compare ŷ with y', tone: 'process' },
            { label: 'Update', sub: 'nudge θ to reduce the loss', tone: 'process' },
          ],
          loop: 'repeat thousands or millions of times',
        },
        {
          t: 'math',
          tex: String.raw`\theta^{*} = \arg\min_{\theta}\ \frac{1}{n}\sum_{i=1}^{n} \mathcal{L}\big(f_\theta(x_i),\, y_i\big)`,
          where: [
            { sym: '\\theta', def: 'The model’s parameters (weights)' },
            { sym: 'f_\\theta(x_i)', def: 'The model’s prediction for example i' },
            { sym: '\\mathcal{L}', def: 'The loss: how far the prediction is from the true answer y_i' },
          ],
          syntax: [
            { sym: String.raw`\theta^{*}`, say: String.raw`Read "theta star": the best parameters, the ones the search is looking for. The star always means "the optimal one".` },
            { sym: String.raw`\arg\min_{\theta}`, say: String.raw`Read "the argument that minimises, over theta": try every possible \(\theta\), and report the \(\theta\) that gives the smallest value, not the value itself.` },
            { sym: String.raw`\frac{1}{n}\sum_{i=1}^{n}`, say: String.raw`Read "one over n, times the sum from i equals 1 to n": work out the thing after it for example 1, 2, ... n, add the results, and divide by n. In other words, take the average.` },
            { sym: String.raw`f_\theta(x_i)`, say: String.raw`Read "f sub theta of x sub i": the model (a function f whose behaviour is set by \(\theta\)) applied to the i-th input. The subscript \(i\) just picks which example.` },
          ],
          worked: {
            title: String.raw`Choosing between three candidate models`,
            steps: [
              String.raw`Dataset of n = 3 points \((x, y)\): \((1, 2)\), \((2, 3)\), \((3, 7)\). Model: \(f_\theta(x) = \theta x\) (one parameter). Loss: squared error \(\mathcal{L} = (\hat{y} - y)^2\).`,
              String.raw`Try \(\theta = 1\): predictions 1, 2, 3, errors \(-1, -1, -4\), squared 1, 1, 16. Average loss \(= 18/3 = 6\).`,
              String.raw`Try \(\theta = 2\): predictions 2, 4, 6, errors \(0, 1, -1\), squared 0, 1, 1. Average loss \(= 2/3 \approx 0.667\).`,
              String.raw`Try \(\theta = 3\): predictions 3, 6, 9, errors \(1, 3, 2\), squared 1, 9, 4. Average loss \(= 14/3 \approx 4.667\).`,
              String.raw`The smallest of the three averages is 0.667, so among these candidates \(\arg\min = 2\).`,
            ],
            answer: String.raw`\(\theta^{*} = 2\) among the candidates tried. (Searching every real number gives \(29/14 \approx 2.07\), which is what gradient descent would find: training means searching for that value automatically.)`,
          },
          caption: 'Machine learning in one line: find the parameters that make the average loss over the training data as small as possible. The arg min says "don\'t just tell me how small the loss gets, tell me which θ achieves it"that θ is the trained model. Every page on this shelf is really just answering the same two questions for one particular method: what shape should f_θ take, and how do we search for the θ that minimises this?',
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Artificial intelligence', body: 'The broad goal: machines doing tasks that seem to need intelligence.', tag: 'widest' },
            { title: 'Machine learning', body: 'The main way we get there today: learning patterns from data.', tag: 'inside AI' },
            { title: 'Deep learning', body: 'Machine learning with many-layered neural networks; behind image recognition, speech and language models.', tag: 'inside ML' },
          ],
        },
      ],
    },
    {
      id: 'taste',
      title: 'A taste: train a network right now',
      blocks: [
        { t: 'p', text: 'Press **Train**. The network starts with random weights and slowly bends its decision boundary to separate the orange and blue points. Everything on this shelf builds up to understanding exactly what is happening here.' },
        { t: 'ai-viz', viz: 'playground' },
      ],
    },
    {
      id: 'paths',
      title: 'Suggested route',
      blocks: [
        { t: 'p', text: '**1. Foundations**: the ideas and maths everything else uses.' },
        {
          t: 'links',
          items: [
            { path: 'ai/foundations/what-is-ai' },
            { path: 'ai/foundations/maths', note: 'Vectors, derivatives and probability, only as much as you need.' },
            { path: 'ai/foundations/gradient-descent', note: 'The engine of learning. Read this one carefully.' },
            { path: 'ai/foundations/bias-variance' },
          ],
        },
        { t: 'p', text: '**2. Classic algorithms**: still the best tools for many tables of data.' },
        {
          t: 'links',
          items: [
            { path: 'ai/algorithms/linear-regression' },
            { path: 'ai/algorithms/decision-trees' },
            { path: 'ai/algorithms/random-forests' },
          ],
        },
        { t: 'p', text: '**3. Neural networks**: from one neuron to transformers.' },
        {
          t: 'links',
          items: [
            { path: 'ai/neural/networks' },
            { path: 'ai/neural/backprop' },
            { path: 'ai/neural/transformers' },
          ],
        },
        { t: 'p', text: '**4. Generative AI and practice**: how ChatGPT-style models work and how to build things yourself.' },
        {
          t: 'links',
          items: [
            { path: 'ai/generative/llms' },
            { path: 'ai/practice/workflow' },
            { path: 'ai/practice/pytorch' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'An old name', text: 'The term "artificial intelligence" was coined in 1955 by John McCarthy in the proposal for the 1956 Dartmouth summer workshop, which optimistically expected "a significant advance" in a single summer with ten researchers.' },
      ],
    },
  ],
  sources: ['Russell, S., & Norvig, P. (2021). *Artificial Intelligence: A Modern Approach* (4th ed.). Pearson.', 'Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*. MIT Press.'],
  related: ['ai/foundations/what-is-ai', 'ai/foundations/gradient-descent', 'ai/neural/networks'],
}

export default guide
