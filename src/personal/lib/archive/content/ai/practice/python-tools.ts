import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Almost all machine-learning work happens in **Python**, thanks to a rich ecosystem of free libraries. Here is what each major tool is for, how they fit together, and the few lines you need to get started with each. Everything listed is free and open source unless noted.',
  nutshell: [
    '**NumPy** for arrays, **pandas** for tables, **Matplotlib**/**seaborn** for plots.',
    '**scikit-learn** for classic machine learning; **PyTorch** (or TensorFlow/Keras, JAX) for deep learning.',
    '**Jupyter** notebooks and **Google Colab** for interactive work; Colab offers free GPUs.',
    '**Hugging Face** hosts hundreds of thousands of pre-trained models and datasets.',
  ],
  sections: [
    {
      id: 'stack',
      title: 'The stack',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'Python', sub: 'the language', tone: 'human' },
            { label: 'NumPy', sub: 'fast arrays and maths', tone: 'process' },
            { label: 'pandas', sub: 'tables: load, clean, group', tone: 'data' },
            { label: 'scikit-learn / PyTorch', sub: 'models', tone: 'model' },
            { label: 'Matplotlib', sub: 'see the results', tone: 'output' },
          ],
        },
        {
          t: 'table',
          head: ['Tool', 'What it is for', 'Start here'],
          rows: [
            ['NumPy', 'N-dimensional arrays, linear algebra, random numbers; the base of everything else', 'np.array, @ for matrix multiply'],
            ['pandas', 'Spreadsheet-like DataFrames: reading CSVs, cleaning, grouping, joining', 'pd.read_csv, df.describe()'],
            ['Matplotlib / seaborn', 'Plots: histograms, scatter plots, learning curves', 'plt.plot, sns.histplot'],
            ['scikit-learn', 'Classic ML with one consistent API: fit, predict, score', 'model.fit(X, y)'],
            ['PyTorch', 'Deep learning with tensors, autograd and GPU support; dominant in research', 'torch.nn, loss.backward()'],
            ['TensorFlow / Keras', 'Deep learning; Keras offers a simple high-level API (Keras 3 also runs on PyTorch and JAX)', 'keras.Sequential'],
            ['JAX', 'NumPy-like arrays with automatic differentiation and compilation; popular for large-scale research', 'jax.grad'],
            ['XGBoost / LightGBM', 'Fast gradient-boosted trees for tabular data', 'XGBClassifier'],
            ['Hugging Face', 'Pre-trained transformers, datasets and a model hub', 'pipeline("sentiment-analysis")'],
            ['Jupyter / Colab', 'Notebooks mixing code, output and notes; Colab runs in the browser with free GPUs (with limits)', 'colab.research.google.com'],
            ['Kaggle', 'Datasets, competitions and free notebooks to learn from', 'kaggle.com/learn'],
          ],
        },
      ],
    },
    {
      id: 'snippets',
      title: 'Ten-second tours',
      blocks: [
        {
          t: 'code',
          title: 'Setting up',
          lang: 'bash',
          code: String.raw`python -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install numpy pandas matplotlib scikit-learn torch transformers jupyter`,
        },
        {
          t: 'code',
          title: 'pandas: load and explore',
          code: String.raw`import pandas as pd

df = pd.read_csv("students.csv")
print(df.head())                  # first rows
print(df.describe())              # summary statistics
print(df.isna().sum())            # missing values per column
print(df.groupby("year")["score"].mean())`,
        },
        {
          t: 'code',
          title: 'Matplotlib: look before you model',
          code: String.raw`import matplotlib.pyplot as plt

plt.scatter(df["hours"], df["score"], alpha=0.6)
plt.xlabel("hours studied")
plt.ylabel("score")
plt.show()`,
        },
        {
          t: 'code',
          title: 'Hugging Face: a pre-trained model in three lines',
          code: String.raw`from transformers import pipeline

classify = pipeline("sentiment-analysis")
print(classify("This revision guide is surprisingly good!"))
# [{'label': 'POSITIVE', 'score': 0.99...}]`,
        },
        { t: 'callout', tone: 'tip', title: 'Where to learn next', text: 'Free, high-quality courses: fast.ai’s *Practical Deep Learning for Coders*, Andrew Ng’s *Machine Learning Specialization* (Coursera, free to audit), Andrej Karpathy’s *Neural Networks: Zero to Hero* videos, and Kaggle Learn’s short courses.' },
        { t: 'callout', tone: 'fact', title: 'Why Python?', text: 'Python is not fast itself, but its numerical libraries hand the heavy work to optimised C, C++, Fortran and GPU code. Python is the friendly glue, which is why a few lines of it can train a model on billions of numbers.' },
      ],
    },
  ],
  sources: ['Harris, C. R., et al. (2020). Array programming with NumPy. *Nature*, 585, 357–362.', 'Pedregosa, F., et al. (2011). Scikit-learn: Machine learning in Python. *JMLR*, 12, 2825–2830.', 'Paszke, A., et al. (2019). PyTorch: An imperative style, high-performance deep learning library. *NeurIPS*.', 'Wolf, T., et al. (2020). Transformers: State-of-the-art natural language processing. *EMNLP: System Demonstrations*.'],
  related: ['ai/practice/pytorch', 'ai/practice/workflow', 'ai/foundations/data'],
}

export default guide
