import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Naive Bayes classifies by asking "which class makes this evidence most likely?" using Bayes’ theorem. It makes a bold simplifying assumption, that features are independent given the class, which is almost never true, yet it works remarkably well, especially for text. Early spam filters were built on it.',
  nutshell: [
    'Pick the class \\(c\\) maximising \\(P(c)\\prod_i P(x_i \\mid c)\\).',
    'The "naive" part: treating features as independent once you know the class.',
    'Training is just counting, so it is extremely fast and works with little data.',
    '**Laplace smoothing** stops unseen words zeroing everything out; **logs** stop numbers underflowing.',
  ],
  sections: [
    {
      id: 'theory',
      title: 'From Bayes’ theorem to a classifier',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(c \mid x_1,\dots,x_n) = \frac{P(c)\,P(x_1,\dots,x_n \mid c)}{P(x_1,\dots,x_n)} \;\propto\; P(c)\prod_{i=1}^{n}P(x_i \mid c)`,
          where: [
            { sym: 'P(c)', def: 'The prior: how common the class is' },
            { sym: 'P(x_i \\mid c)', def: 'The likelihood of feature i in that class, counted from training data' },
          ],
          syntax: [
            { sym: String.raw`P(c \mid x_1,\dots,x_n)`, say: String.raw`Read "the probability of class c given x_1 up to x_n". The bar means "given"; the dots mean "and so on" through all \(n\) features.` },
            { sym: String.raw`\propto`, say: String.raw`Read "is proportional to": equal up to a constant factor. Comparing classes only needs the numerators, as that constant is shared.` },
            { sym: String.raw`\prod_{i=1}^{n}`, say: String.raw`Read "the product from i equals 1 to n": like \(\sum\), but multiply the terms instead of adding them.` },
          ],
          worked: {
            title: String.raw`Spam or ham?`,
            steps: [
              String.raw`An email contains the words "free" and "meeting". Priors: \(P(\text{spam}) = 0.4\), \(P(\text{ham}) = 0.6\).`,
              String.raw`Likelihoods: \(P(\text{free} \mid \text{spam}) = 0.5\), \(P(\text{free} \mid \text{ham}) = 0.05\), \(P(\text{meeting} \mid \text{spam}) = 0.05\), \(P(\text{meeting} \mid \text{ham}) = 0.3\).`,
              String.raw`Spam score: \(0.4 \times 0.5 \times 0.05 = 0.010\).`,
              String.raw`Ham score: \(0.6 \times 0.05 \times 0.3 = 0.009\).`,
              String.raw`Normalise: \(P(\text{spam} \mid \text{email}) = 0.010/(0.010 + 0.009) = 0.526\).`,
            ],
            answer: String.raw`The email is classified as spam, but narrowly (52.6%): "free" pushes towards spam and "meeting" pulls back towards ham.`,
          },
          caption: 'The denominator P(x_1,…,x_n) is the same number whichever class c you plug in, so it can be dropped entirely when comparing classes, only the numerator decides the winner. The product \\(\\prod_i P(x_i \\mid c)\\) is the naive independence assumption: it treats the evidence as n separate votes for each class rather than weighing how the features interact, which is wrong in detail but often fine for ranking classes.',
        },
        {
          t: 'math',
          tex: String.raw`\hat{c} = \arg\max_c\ \Big[\log P(c) + \sum_i \log P(x_i \mid c)\Big]`,
          where: [{ sym: '\\hat{c}', def: 'The predicted class: whichever c scores highest' }],
          syntax: [
            { sym: String.raw`\hat{c}`, say: String.raw`Read "c hat": the predicted class.` },
            { sym: String.raw`\arg\max_c`, say: String.raw`Read "arg max over c": the value of \(c\) that makes the bracket biggest. The answer is a class, not a score.` },
            { sym: String.raw`\log`, say: String.raw`The natural log. It turns products into sums, \(\log(ab) = \log a + \log b\), and is increasing, so the biggest product also has the biggest log.` },
          ],
          worked: {
            title: String.raw`The same email in log form`,
            steps: [
              String.raw`Spam: \(\ln 0.4 + \ln 0.5 + \ln 0.05 = -0.916 - 0.693 - 2.996 = -4.605\).`,
              String.raw`Ham: \(\ln 0.6 + \ln 0.05 + \ln 0.3 = -0.511 - 2.996 - 1.204 = -4.711\).`,
              String.raw`Compare: \(-4.605 > -4.711\), so the arg max is spam. (Check: \(e^{-4.605} = 0.010\), the spam product from before.)`,
            ],
            answer: String.raw`Spam wins again; the scores are negative, so the larger (less negative) one is the winner.`,
          },
          caption: 'In log form: multiplying hundreds of small probabilities would underflow to zero on a computer, while adding their logs is safe and gives the same ranking (logs are increasing, so the biggest product still has the biggest log-sum). Read the sum itself as a running score built from the prior plus one vote of evidence per feature; only the relative size of the scores across classes matters, not their absolute value.',
        },
      ],
    },
    {
      id: 'spam',
      title: 'Worked example: a spam filter',
      blocks: [
        {
          t: 'table',
          head: ['Word', 'P(word | spam)', 'P(word | not spam)'],
          rows: [
            ['"free"', '0.30', '0.02'],
            ['"win"', '0.20', '0.01'],
            ['"meeting"', '0.01', '0.10'],
          ],
          caption: 'Counted from training emails. Priors: 40% of emails are spam, 60% not.',
        },
        {
          t: 'example',
          title: 'An email says "free … win"',
          lines: [
            { label: 'Spam score', text: '\\(0.4 \\times 0.30 \\times 0.20 = 0.024\\)' },
            { label: 'Ham score', text: '\\(0.6 \\times 0.02 \\times 0.01 = 0.00012\\)' },
            { label: 'Normalise', text: '\\(P(\\text{spam} \\mid \\text{email}) = 0.024 / (0.024 + 0.00012) \\approx 99.5\\%\\)' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`P(w \mid c) = \frac{\operatorname{count}(w, c) + \alpha}{\sum_{w'}\operatorname{count}(w', c) + \alpha\,|V|}`,
          where: [
            { sym: '\\alpha', def: 'The smoothing amount, usually 1 (Laplace) ' },
            { sym: '|V|', def: 'The vocabulary size' },
          ],
          syntax: [
            { sym: String.raw`\operatorname{count}(w, c)`, say: String.raw`The number of times word \(w\) appears in the training documents of class \(c\).` },
            { sym: String.raw`\sum_{w'}`, say: String.raw`Read "sum over w prime": \(w'\) is a dummy word that runs through every word in the vocabulary, so the sum is the total word count in class \(c\).` },
            { sym: String.raw`|V|`, say: String.raw`Bars around a set mean its size: the number of distinct words in the vocabulary.` },
          ],
          worked: {
            title: String.raw`Smoothing a word never seen`,
            steps: [
              String.raw`The spam class contains 100 word tokens in total and the vocabulary has \(|V| = 50\) distinct words. Use \(\alpha = 1\).`,
              String.raw`"free" appears 20 times: without smoothing \(20/100 = 0.20\); with it \((20 + 1)/(100 + 1 \times 50) = 21/150 = 0.14\).`,
              String.raw`"invoice" appears 0 times: without smoothing \(0/100 = 0\), which vetoes the whole product; with it \((0 + 1)/150 = 0.0067\).`,
            ],
            answer: String.raw`Smoothing moves a little probability from common words to unseen ones, so a single new word can no longer force the score to exactly zero.`,
          },
          caption: 'Without smoothing, a word never seen in spam would give P = 0 and veto the whole product, however spammy the rest is.',
        },
        {
          t: 'code',
          code: String.raw`from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

emails = ["win free money now", "meeting at noon", "free prize win"]
labels = [1, 0, 1]   # 1 = spam

vec = CountVectorizer()
X = vec.fit_transform(emails)        # word counts
clf = MultinomialNB(alpha=1.0).fit(X, labels)
print(clf.predict(vec.transform(["free lunch meeting"])))`,
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Multinomial NB', body: 'Word counts: the classic for text.' },
            { title: 'Bernoulli NB', body: 'Word present or absent.' },
            { title: 'Gaussian NB', body: 'Continuous features, each assumed normal within a class.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'A plan for spam', text: 'Paul Graham’s 2002 essay "A Plan for Spam" popularised Bayesian spam filtering, reporting that his filter caught over 99.5% of spam with very few false positives. Within a few years most email clients used statistical filters.' },
      ],
    },
  ],
  sources: ['Graham, P. (2002). A plan for spam. *paulgraham.com*.', 'Manning, C. D., Raghavan, P., & Schütze, H. (2008). *Introduction to Information Retrieval*, ch. 13. Cambridge University Press.'],
  related: ['ai/foundations/maths', 'ai/algorithms/logistic-regression', 'ai/foundations/evaluation'],
}

export default guide
