import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A model can only be as good as its data. Most of the work in real machine-learning projects goes into collecting, cleaning and preparing data, and the most common serious mistakes, like testing on data the model has already seen, happen here.',
  nutshell: [
    'Data is a table: rows are **examples**, columns are **features**, plus a **label** column for supervised learning.',
    'Split into **training**, **validation** and **test** sets; never let the model or your choices see the test set until the end.',
    '**Scale** numeric features and **encode** categories as numbers.',
    'Beware **data leakage**: information in the features that would not be available at prediction time.',
  ],
  sections: [
    {
      id: 'table',
      title: 'Examples, features and labels',
      blocks: [
        {
          t: 'table',
          head: ['Bedrooms', 'Area (m²)', 'Age (yrs)', 'Area type', 'Price (label)'],
          rows: [
            ['3', '120', '15', 'suburb', '£320k'],
            ['2', '75', '40', 'city', '£410k'],
            ['4', '160', '3', 'rural', '£290k'],
          ],
          caption: 'Each row is an example x with label y. Together the features form a matrix X with n rows and d columns.',
        },
      ],
    },
    {
      id: 'splits',
      title: 'Train, validation and test',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'All data', tone: 'data' },
            { label: 'Training set (~70%)', sub: 'the model learns its parameters here', tone: 'process' },
            { label: 'Validation set (~15%)', sub: 'you choose settings and compare models here', tone: 'model' },
            { label: 'Test set (~15%)', sub: 'touched once, at the end, for an honest score', tone: 'output' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Why a separate test set?', text: 'Every time you check a score and adjust, you tune your choices to that data. If you do it on the test set, its score becomes optimistic. Keep it locked away until the very end.' },
        {
          t: 'code',
          title: 'Splitting with scikit-learn',
          code: String.raw`from sklearn.model_selection import train_test_split

X_train, X_temp, y_train, y_temp = train_test_split(
    X, y, test_size=0.3, random_state=42, stratify=y)
X_val, X_test, y_val, y_test = train_test_split(
    X_temp, y_temp, test_size=0.5, random_state=42, stratify=y_temp)`,
          caption: '*stratify* keeps the share of each class the same in every split; *random_state* makes the split repeatable.',
        },
      ],
    },
    {
      id: 'preprocessing',
      title: 'Preparing features',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Standardise: } z = \frac{x - \mu}{\sigma} \qquad \text{Min–max: } x' = \frac{x - x_{\min}}{x_{\max} - x_{\min}}`,
          where: [
            { sym: '\\mu, \\sigma', def: 'The feature\'s mean and standard deviation, measured on the training set' },
            { sym: 'z', def: 'The standardised value: how many standard deviations x sits from the mean (so z = 0 is average, z = 2 is unusually high)' },
            { sym: 'x_{\\min}, x_{\\max}', def: 'The smallest and largest value the feature takes in the training set' },
          ],
          syntax: [
            { sym: String.raw`\mu`, say: String.raw`Read "mu": the mean (average) of the feature.` },
            { sym: String.raw`\sigma`, say: String.raw`Read "sigma": the standard deviation, the typical distance of a value from the mean.` },
            { sym: String.raw`z = \frac{x - \mu}{\sigma}`, say: String.raw`Read "z equals x minus mu, all over sigma": subtract the mean, then divide by the spread, so the answer is in units of standard deviations.` },
            { sym: String.raw`x'`, say: String.raw`Read "x prime": a new, rescaled version of x. The prime is just part of the name, not a derivative here.` },
          ],
          worked: {
            title: String.raw`Scaling house areas`,
            steps: [
              String.raw`Training areas (m\(^2\)): 40, 80, 80, 80, 100, 100, 140, 180. Mean \(\mu = 800/8 = 100\).`,
              String.raw`Squared deviations: 3600, 400, 400, 400, 0, 0, 1600, 6400, total 12800. Variance \(= 12800/8 = 1600\), so \(\sigma = 40\) (population formula).`,
              String.raw`A new 160 m\(^2\) house: \(z = (160 - 100)/40 = 1.5\), so it is 1.5 standard deviations above average.`,
              String.raw`Min–max with \(x_{\min} = 40\), \(x_{\max} = 180\): \(x' = (160 - 40)/(180 - 40) = 120/140 \approx 0.857\).`,
              String.raw`Outlier effect: if one mansion of 1,000 m\(^2\) had been in the training set, \(x_{\max} = 1000\) and the same house would map to \(120/960 = 0.125\), squashed near 0.`,
            ],
            answer: String.raw`The 160 m\(^2\) house has \(z = 1.5\) and min–max value 0.857; the single outlier shows why min–max is more fragile than standardising.`,
          },
          caption: 'Standardising recentres a feature around 0 with a "typical" spread of 1, so a value\'s z score directly says how unusual it is, regardless of the feature\'s original units. Min–max instead squeezes every value into exactly [0, 1], which keeps the shape of the distribution but is more sensitive to outliers (one huge x_max compresses everything else towards 0). Features on very different scales (area in hundreds, bedrooms in units) slow gradient descent and distort distance-based methods like kNN. Compute μ and σ (or the min and max) on the training set only, then apply the same numbers to the others, recomputing them on new data would let information leak in.',
        },
        {
          t: 'table',
          head: ['Area type', 'is_city', 'is_suburb', 'is_rural'],
          rows: [
            ['city', '1', '0', '0'],
            ['suburb', '0', '1', '0'],
            ['rural', '0', '0', '1'],
          ],
          caption: 'One-hot encoding: a category becomes several 0/1 columns, so the model does not assume "rural = 3 > city = 1".',
        },
        {
          t: 'dodont',
          do: ['Fill missing values with the median (from training data) or add a "was missing" flag', 'Look at the data: plot distributions, check for impossible values', 'Fit all preprocessing on the training set only (a scikit-learn Pipeline does this for you)'],
          dont: ['Delete every row with any missing value without thinking', 'Scale using statistics from the whole dataset (that leaks test information)', 'Trust labels blindly: label errors are common even in famous datasets'],
        },
      ],
    },
    {
      id: 'leakage',
      title: 'Data leakage',
      blocks: [
        { t: 'p', text: 'Leakage is when the training data contains information that would not be available when the model is really used. The model looks brilliant in testing and fails in the world.' },
        {
          t: 'list',
          items: [
            'Predicting hospital readmission using a feature recorded *after* discharge.',
            'Random splits of time-series data, letting the model train on the future and test on the past. Split by time instead.',
            'The same patient’s scans appearing in both training and test sets.',
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The ruler and the tumours', text: 'Researchers testing a skin-cancer classifier noticed it was more likely to call a lesion malignant when a ruler appeared in the photo, because doctors tend to measure the lesions they are worried about. Models learn whatever pattern works, not the one you intended.' },
      ],
    },
  ],
  sources: ['Kaufman, S., Rosset, S., Perlich, C., & Stitelman, O. (2012). Leakage in data mining. *ACM TKDD*, 6(4).', 'Northcutt, C. G., Athalye, A., & Mueller, J. (2021). Pervasive label errors in test sets destabilize machine learning benchmarks. *NeurIPS Datasets and Benchmarks*.', 'Narla, A., Kuprel, B., Sarin, K., Novoa, R., & Ko, J. (2018). Automated classification of skin lesions: From pixels to practice. *Journal of Investigative Dermatology*, 138(10), 2108–2110.'],
  related: ['ai/foundations/bias-variance', 'ai/foundations/evaluation', 'ai/practice/workflow'],
}

export default guide
