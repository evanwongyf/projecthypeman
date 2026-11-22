import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Real machine-learning projects are mostly not about algorithms. They are about framing the problem, getting and cleaning data, setting up honest evaluation, and keeping a model working once it is used. Here is the workflow end to end, with a complete example you can run.',
  nutshell: [
    'Start with the problem and a **baseline**, not the fanciest model.',
    'Most time goes into **data**: collecting, cleaning, labelling, understanding.',
    'Use **pipelines** so preprocessing is learned only from training data.',
    'After deployment, **monitor**: the world changes and models decay (data drift).',
  ],
  sections: [
    {
      id: 'lifecycle',
      title: 'The lifecycle',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: '1. Frame the problem', sub: 'what decision? what metric? is ML needed?', tone: 'human' },
            { label: '2. Get data', sub: 'collect, label, check quality', tone: 'data' },
            { label: '3. Explore', sub: 'plots, summaries, leakage checks', tone: 'data' },
            { label: '4. Baseline', sub: 'simple rule or linear model', tone: 'model' },
            { label: '5. Improve', sub: 'features, models, tuning (on validation)', tone: 'model' },
            { label: '6. Evaluate once on test', tone: 'output' },
            { label: '7. Deploy & monitor', sub: 'drift, errors, fairness', tone: 'process' },
          ],
          loop: 'monitoring often sends you back to step 2',
        },
        {
          t: 'checklist',
          items: [
            'Can you state the prediction target and how it will be used in one sentence?',
            'Would a simple rule do nearly as well?',
            'Is the metric aligned with real costs (e.g. missed fraud vs false alarms)?',
            'Will the features be available, in the same form, when predicting for real?',
            'Is the test set representative of future data (and split by time if relevant)?',
            'Have you checked performance for different groups of people?',
          ],
        },
      ],
    },
    {
      id: 'example',
      title: 'A complete example',
      blocks: [
        {
          t: 'code',
          title: 'Predicting breast-cancer diagnosis with scikit-learn',
          code: String.raw`from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

X, y = load_breast_cancer(return_X_y=True, as_frame=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=0)

# 1. Baseline: scaled logistic regression
baseline = Pipeline([("scale", StandardScaler()),
                     ("clf", LogisticRegression(max_iter=1000))])
baseline.fit(X_train, y_train)
print("baseline accuracy:", baseline.score(X_test, y_test))

# 2. Try a random forest, tuning with 5-fold cross-validation
grid = GridSearchCV(RandomForestClassifier(random_state=0),
                    {"n_estimators": [200, 500], "max_depth": [None, 5]},
                    cv=5, scoring="f1")
grid.fit(X_train, y_train)
print(grid.best_params_)

# 3. Final check on the untouched test set
print(classification_report(y_test, grid.predict(X_test)))`,
          caption: 'The pipeline fits the scaler inside each training fold, avoiding leakage. In this dataset, the simple baseline is already very strong, which is common.',
        },
      ],
    },
    {
      id: 'deploy',
      title: 'After deployment',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Data drift', body: 'The inputs change: new customer types, a new camera, a pandemic. Compare live feature distributions with training.' },
            { title: 'Concept drift', body: 'The relationship itself changes: what counts as spam evolves. Track accuracy on fresh labelled samples.' },
            { title: 'Feedback loops', body: 'A model’s predictions can change the data it later learns from, such as predictive policing sending officers where arrests were predicted.' },
            { title: 'MLOps', body: 'Version data and models, automate retraining and testing, and keep a way to roll back.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Hidden technical debt', text: 'A well-known 2015 Google paper pointed out that in real ML systems the model code is a small fraction of the total; most is data collection, verification, feature extraction, serving and monitoring infrastructure around it.' },
      ],
    },
  ],
  sources: ['Sculley, D., et al. (2015). Hidden technical debt in machine learning systems. *NeurIPS*.', 'Géron, A. (2022). *Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow* (3rd ed.). O’Reilly.', 'Huyen, C. (2022). *Designing Machine Learning Systems*. O’Reilly.'],
  related: ['ai/foundations/data', 'ai/practice/python-tools', 'ai/practice/ethics'],
}

export default guide
