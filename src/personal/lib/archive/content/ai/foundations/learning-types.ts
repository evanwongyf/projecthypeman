import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Machine-learning problems differ by what the computer is given to learn from. With answers, it is **supervised**; without, **unsupervised**; with rewards for actions, **reinforcement** learning. Modern language models add a fourth: **self-supervised** learning, where the data provides its own answers.',
  nutshell: [
    '**Supervised**: learn from labelled examples (input → correct output).',
    '**Unsupervised**: find structure in unlabelled data (groups, simpler descriptions).',
    '**Self-supervised**: hide part of the data and predict it, e.g. the next word.',
    '**Reinforcement**: learn by trial and error from rewards.',
    'Supervised tasks are **regression** (predict a number) or **classification** (predict a category).',
  ],
  sections: [
    {
      id: 'four',
      title: 'The four kinds',
      blocks: [
        {
          t: 'table',
          head: ['Kind', 'Learns from', 'Example tasks', 'Typical algorithms'],
          rows: [
            ['Supervised', 'Inputs paired with correct answers', 'Spam detection, house prices, diagnosing scans', 'Linear/logistic regression, trees, forests, neural networks'],
            ['Unsupervised', 'Inputs only', 'Customer segments, anomaly detection, compression', 'k-means, hierarchical clustering, PCA, autoencoders'],
            ['Self-supervised', 'Inputs, with part hidden as the target', 'Predicting the next word, filling in masked words or image patches', 'Transformers (GPT, BERT), contrastive learning'],
            ['Reinforcement', 'Rewards from acting in an environment', 'Games, robot control, tuning chatbots with feedback', 'Q-learning, policy gradients, PPO'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{Supervised: } \mathcal{D} = \{(x_i, y_i)\}_{i=1}^{n} \qquad \text{Unsupervised: } \mathcal{D} = \{x_i\}_{i=1}^{n} \qquad \text{RL: maximise } \mathbb{E}\Big[\textstyle\sum_t \gamma^t r_t\Big]`,
          where: [
            { sym: '\\mathcal{D}', def: 'The dataset the algorithm gets to learn from' },
            { sym: 'r_t', def: 'The reward received at time step t' },
            { sym: '\\gamma', def: 'The discount factor (0 to 1): how much a reward later in time is worth today' },
          ],
          syntax: [
            { sym: String.raw`\mathcal{D} = \{(x_i, y_i)\}_{i=1}^{n}`, say: String.raw`Read "D is the set of pairs x sub i, y sub i, for i from 1 to n". Curly braces mean a set (a collection), and each round-bracket pair is one input with its answer.` },
            { sym: String.raw`\gamma^t`, say: String.raw`Read "gamma to the power t": multiply by \(\gamma\) once for every step into the future. The t is an exponent here, not an index.` },
            { sym: String.raw`\mathbb{E}\Big[\textstyle\sum_t \gamma^t r_t\Big]`, say: String.raw`Read "the expected value of the discounted sum of rewards": add up \(\gamma^t r_t\) over all time steps, then average over the randomness in the environment.` },
          ],
          worked: {
            title: String.raw`A tiny dataset and a discounted return`,
            steps: [
              String.raw`Supervised: \(\mathcal{D} = \{(1,2), (2,4), (3,6)\}\), \(n = 3\), each input paired with its answer.`,
              String.raw`Unsupervised: \(\mathcal{D} = \{1, 2, 3\}\), the same inputs with no answers.`,
              String.raw`RL: an agent receives rewards \(r_0 = 1\), \(r_1 = 0\), \(r_2 = 10\) at times \(t = 0, 1, 2\).`,
              String.raw`With \(\gamma = 0.9\): \(1 + 0.9(0) + 0.81(10) = 9.1\).`,
              String.raw`With \(\gamma = 0.5\): \(1 + 0.5(0) + 0.25(10) = 3.5\).`,
            ],
            answer: String.raw`A patient agent (\(\gamma = 0.9\)) values this sequence at 9.1 because it keeps most of the late reward of 10; a short-sighted one (\(\gamma = 0.5\)) values it at only 3.5.`,
          },
          caption: 'The difference between the first two is just whether y_i is there: supervised learning has an answer key to check against, unsupervised does not, which is why unsupervised methods can only be judged by looking at structure (like the silhouette score) rather than by "right or wrong". The RL expression says maximise total reward, but discounted: γ close to 1 makes the agent patient, weighing distant future rewards almost as much as immediate ones, while γ close to 0 makes it short-sighted, chasing whatever pays off right now.',
        },
      ],
    },
    {
      id: 'regression-classification',
      title: 'Regression and classification',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Regression: predict a number', body: 'Price, temperature, time to failure. Loss: usually mean squared error. Output: any real number.', tag: 'continuous' },
            { title: 'Classification: predict a category', body: 'Spam or not, which digit, which disease. Loss: usually cross-entropy. Output: a probability for each class.', tag: 'discrete' },
          ],
        },
        { t: 'ai-viz', viz: 'knn' },
        { t: 'p', text: 'Above is a classifier: every point of the plane is assigned to a class, giving a **decision boundary**. A regression model instead draws a curve through the data, as in [linear regression](@ai/algorithms/linear-regression).' },
      ],
    },
    {
      id: 'self-supervised',
      title: 'Self-supervised learning: the trick behind language models',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'Raw text', sub: '"The cat sat on the mat"', tone: 'data' },
            { label: 'Hide the next word', sub: 'input: "The cat sat on the"', tone: 'process' },
            { label: 'Model predicts', sub: '"mat" 61%, "floor" 12%…', tone: 'model' },
            { label: 'Compare with truth', sub: 'loss = −log P("mat")', tone: 'output' },
          ],
          caption: 'No human labelling is needed: every sentence on the internet provides training examples for free. This is how models can learn from trillions of words.',
        },
        { t: 'callout', tone: 'fact', title: 'LeCun’s cake', text: 'Yann LeCun has compared machine learning to a cake: self-supervised learning is the bulk of the cake, supervised learning the icing, and reinforcement learning the cherry on top, reflecting how much information each provides per example.' },
      ],
    },
  ],
  sources: ['Bishop, C. M. (2006). *Pattern Recognition and Machine Learning*. Springer.', 'Sutton, R. S., & Barto, A. G. (2018). *Reinforcement Learning: An Introduction* (2nd ed.). MIT Press.'],
  related: ['ai/foundations/data', 'ai/algorithms/clustering', 'ai/generative/reinforcement'],
}

export default guide
