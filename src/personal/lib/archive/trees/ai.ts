import type { ArchiveNode } from '../topics'

// Artificial intelligence: the maths and ideas behind machine learning, the classic
// algorithms, neural networks, generative AI and the tools to build with, with live
// diagrams that train small models in the browser.

export const AI: ArchiveNode = {
  slug: 'ai',
  title: 'Artificial intelligence',
  blurb: 'Machine learning, neural networks and generative AI from the ground up: the maths, the algorithms, the code and the tools, with models you can train in the page.',
  glyph: '∇',
  color: 'color-mix(in srgb, var(--lavender) 55%, var(--teal))',
  tags: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'deep learning', 'data science', 'computer science'],
  children: [
    { slug: 'start-here', title: 'Start here', blurb: 'What is on this shelf, the big picture of AI, and a route from first principles to transformers.', minutes: 5, glyph: '★', tags: ['beginner', 'overview', 'roadmap'] },
    {
      slug: 'foundations',
      title: 'Foundations',
      blurb: 'What AI is, where it came from, the maths it runs on, and how machines learn from data and are judged.',
      glyph: '∑',
      tags: ['basics', 'theory'],
      children: [
        { slug: 'what-is-ai', title: 'What is AI?', blurb: 'Intelligence, agents, narrow and general AI, and how machine learning differs from ordinary programming.', minutes: 9, tags: ['definition', 'agi', 'narrow ai', 'symbolic ai', 'machine learning'] },
        { slug: 'history', title: 'A short history of AI', blurb: 'From Turing and Dartmouth through two AI winters to deep learning and ChatGPT.', minutes: 10, tags: ['turing', 'dartmouth', 'ai winter', 'alexnet', 'alphago', 'chatgpt', 'history'] },
        { slug: 'maths', title: 'The maths of machine learning', blurb: 'Vectors, matrices, derivatives, the chain rule and probability: just what you need, with examples.', minutes: 16, tags: ['linear algebra', 'calculus', 'probability', 'bayes', 'gradient', 'dot product', 'matrix'] },
        { slug: 'learning-types', title: 'Kinds of learning', blurb: 'Supervised, unsupervised, self-supervised and reinforcement learning, and regression versus classification.', minutes: 9, tags: ['supervised', 'unsupervised', 'reinforcement', 'self-supervised', 'classification', 'regression'] },
        { slug: 'data', title: 'Data and features', blurb: 'Features and labels, train/validation/test splits, scaling, encoding, missing values and leakage.', minutes: 12, tags: ['dataset', 'features', 'train test split', 'normalisation', 'one-hot encoding', 'data leakage'] },
        { slug: 'bias-variance', title: 'Overfitting and the bias–variance trade-off', blurb: 'Why models fail on new data, and the cures: more data, regularisation and cross-validation.', minutes: 13, tags: ['overfitting', 'underfitting', 'bias', 'variance', 'regularisation', 'cross-validation', 'ridge', 'lasso'] },
        { slug: 'evaluation', title: 'Measuring a model', blurb: 'Accuracy, precision, recall, F1, ROC and AUC, and errors for regression, with a live confusion matrix.', minutes: 13, tags: ['metrics', 'confusion matrix', 'precision', 'recall', 'f1', 'roc', 'auc', 'mse', 'mae'] },
        { slug: 'gradient-descent', title: 'Gradient descent and optimisers', blurb: 'How models learn: following the slope downhill, learning rates, SGD, momentum and Adam.', minutes: 14, tags: ['optimisation', 'learning rate', 'sgd', 'momentum', 'adam', 'loss function'] },
      ],
    },
    {
      slug: 'algorithms',
      title: 'Classic algorithms',
      blurb: 'The workhorses of machine learning: regression, nearest neighbours, Bayes, trees, forests, boosting, SVMs, clustering and PCA.',
      glyph: '⌥',
      tags: ['machine learning algorithms', 'scikit-learn'],
      children: [
        { slug: 'linear-regression', title: 'Linear regression', blurb: 'Fitting a line, least squares, the normal equation, R², and multiple regression.', minutes: 13, tags: ['regression', 'least squares', 'normal equation', 'r squared', 'mse'] },
        { slug: 'logistic-regression', title: 'Logistic regression', blurb: 'The sigmoid, log-odds, cross-entropy loss and the decision boundary.', minutes: 12, tags: ['classification', 'sigmoid', 'log loss', 'cross entropy', 'odds'] },
        { slug: 'knn', title: 'k-nearest neighbours', blurb: 'Classify by asking the neighbours: distance measures, choosing k, and the curse of dimensionality.', minutes: 9, tags: ['knn', 'distance', 'euclidean', 'lazy learning', 'curse of dimensionality'] },
        { slug: 'naive-bayes', title: 'Naive Bayes', blurb: 'Bayes’ theorem as a classifier, with a worked spam filter.', minutes: 10, tags: ['bayes theorem', 'spam filter', 'probability', 'text classification'] },
        { slug: 'decision-trees', title: 'Decision trees', blurb: 'Twenty questions for data: Gini impurity, entropy, information gain and pruning.', minutes: 13, tags: ['cart', 'gini', 'entropy', 'information gain', 'pruning', 'id3'] },
        { slug: 'random-forests', title: 'Random forests', blurb: 'Bagging and random features: why a crowd of noisy trees beats one clever one.', minutes: 11, tags: ['ensemble', 'bagging', 'bootstrap', 'feature importance', 'out of bag'] },
        { slug: 'boosting', title: 'Boosting', blurb: 'AdaBoost and gradient boosting: models that learn from the previous model’s mistakes. XGBoost, LightGBM, CatBoost.', minutes: 12, tags: ['adaboost', 'gradient boosting', 'xgboost', 'lightgbm', 'catboost', 'ensemble'] },
        { slug: 'svm', title: 'Support vector machines', blurb: 'The widest-margin boundary, hinge loss, soft margins and the kernel trick.', minutes: 12, tags: ['svm', 'margin', 'kernel trick', 'hinge loss', 'rbf'] },
        { slug: 'clustering', title: 'Clustering', blurb: 'k-means step by step, choosing k, hierarchical clustering and DBSCAN.', minutes: 12, tags: ['k-means', 'unsupervised', 'hierarchical', 'dbscan', 'elbow method', 'silhouette'] },
        { slug: 'pca', title: 'PCA and dimensionality reduction', blurb: 'Squeezing many features into a few: covariance, eigenvectors, explained variance, t-SNE and UMAP.', minutes: 12, tags: ['pca', 'eigenvector', 'covariance', 'dimensionality reduction', 't-sne', 'umap'] },
      ],
    },
    {
      slug: 'neural',
      title: 'Neural networks and deep learning',
      blurb: 'From a single artificial neuron to transformers: how networks compute, how they learn, and the architectures behind modern AI.',
      glyph: '◉',
      tags: ['deep learning', 'neural networks'],
      children: [
        { slug: 'perceptron', title: 'The perceptron', blurb: 'The first learning machine, its learning rule, and the XOR problem that stalled the field.', minutes: 10, tags: ['rosenblatt', 'neuron', 'xor', 'linear classifier'] },
        { slug: 'networks', title: 'How a neural network computes', blurb: 'Layers, weights, biases and activation functions, the forward pass in matrix form, and universal approximation.', minutes: 14, tags: ['mlp', 'activation function', 'relu', 'sigmoid', 'tanh', 'forward pass', 'layers'] },
        { slug: 'backprop', title: 'Backpropagation', blurb: 'The chain rule run backwards: how every weight learns its share of the blame.', minutes: 14, tags: ['backpropagation', 'chain rule', 'gradient', 'autograd', 'computational graph'] },
        { slug: 'training', title: 'Training deep networks', blurb: 'Initialisation, batches, learning-rate schedules, dropout, batch norm and the tricks that make deep nets train. Includes a live playground.', minutes: 14, tags: ['dropout', 'batch normalisation', 'initialisation', 'learning rate schedule', 'vanishing gradients', 'playground'] },
        { slug: 'cnn', title: 'Convolutional networks (CNNs)', blurb: 'Filters, feature maps, pooling and the architectures that taught computers to see.', minutes: 13, tags: ['cnn', 'convolution', 'pooling', 'computer vision', 'alexnet', 'resnet'] },
        { slug: 'rnn', title: 'Recurrent networks and LSTMs', blurb: 'Networks with memory for sequences, vanishing gradients and the LSTM’s gates.', minutes: 11, tags: ['rnn', 'lstm', 'gru', 'sequence', 'time series'] },
        { slug: 'transformers', title: 'Transformers and attention', blurb: 'Queries, keys and values, multi-head attention, positional encoding and the architecture behind GPT.', minutes: 16, tags: ['transformer', 'attention', 'self-attention', 'multi-head', 'positional encoding', 'gpt', 'bert'] },
        { slug: 'embeddings', title: 'Embeddings', blurb: 'Meaning as vectors: word2vec, cosine similarity, and embeddings for search and recommendations.', minutes: 10, tags: ['word2vec', 'embedding', 'cosine similarity', 'vector database', 'semantic search'] },
      ],
    },
    {
      slug: 'generative',
      title: 'Generative AI and agents',
      blurb: 'Large language models, prompting, image generation and reinforcement learning: how today’s headline systems work.',
      glyph: '✦',
      tags: ['generative ai', 'genai'],
      children: [
        { slug: 'llms', title: 'Large language models', blurb: 'Tokens, next-token prediction, pre-training, fine-tuning and RLHF, sampling and scaling laws.', minutes: 16, tags: ['llm', 'gpt', 'claude', 'tokenisation', 'pretraining', 'fine-tuning', 'rlhf', 'scaling laws', 'temperature'] },
        { slug: 'prompting', title: 'Prompting, RAG and agents', blurb: 'Getting good results from language models, retrieval-augmented generation, tool use and agents.', minutes: 12, tags: ['prompt engineering', 'few-shot', 'chain of thought', 'rag', 'agents', 'tool use'] },
        { slug: 'diffusion', title: 'Image generation: GANs, VAEs and diffusion', blurb: 'How models make pictures from noise, and how text steers them.', minutes: 13, tags: ['diffusion', 'stable diffusion', 'gan', 'vae', 'image generation', 'midjourney', 'dall-e'] },
        { slug: 'reinforcement', title: 'Reinforcement learning', blurb: 'Agents, rewards and the Bellman equation; Q-learning live in a maze; AlphaGo and beyond.', minutes: 14, tags: ['reinforcement learning', 'q-learning', 'bellman equation', 'mdp', 'alphago', 'policy gradient'] },
      ],
    },
    {
      slug: 'practice',
      title: 'AI in practice',
      blurb: 'The workflow of a real project, the Python tools, using AI assistants well, applications, and ethics.',
      glyph: '⚒',
      tags: ['practical', 'tools', 'projects'],
      children: [
        { slug: 'workflow', title: 'The machine-learning workflow', blurb: 'From problem to deployed model, step by step, with a complete scikit-learn example.', minutes: 12, tags: ['ml pipeline', 'project', 'deployment', 'mlops', 'scikit-learn'] },
        { slug: 'python-tools', title: 'Tools of the trade', blurb: 'Python, NumPy, pandas, Matplotlib, scikit-learn, PyTorch, TensorFlow, Jupyter, Hugging Face and more: what each is for.', minutes: 12, tags: ['python', 'numpy', 'pandas', 'scikit-learn', 'pytorch', 'tensorflow', 'jupyter', 'hugging face', 'colab', 'kaggle'] },
        { slug: 'pytorch', title: 'Your first neural network in PyTorch', blurb: 'Tensors, autograd, a model, a training loop and evaluation, line by line.', minutes: 13, tags: ['pytorch', 'code', 'training loop', 'tensors', 'autograd'] },
        { slug: 'ai-assistants', title: 'Using AI assistants well', blurb: 'Chatbots, coding assistants and image tools: what they are good and bad at, and how to use them for study and work.', minutes: 10, tags: ['chatgpt', 'claude', 'gemini', 'copilot', 'ai tools', 'hallucination', 'study'] },
        { slug: 'applications', title: 'Where AI is used', blurb: 'Vision, language, speech, recommendations, science, health and more, with real examples.', minutes: 10, tags: ['applications', 'computer vision', 'nlp', 'recommender systems', 'alphafold', 'self-driving'] },
        { slug: 'ethics', title: 'Ethics, bias and safety', blurb: 'Bias and fairness, privacy, explainability, misuse, alignment and how AI is being regulated.', minutes: 12, tags: ['ethics', 'bias', 'fairness', 'privacy', 'alignment', 'ai safety', 'regulation', 'eu ai act'] },
      ],
    },
  ],
}
