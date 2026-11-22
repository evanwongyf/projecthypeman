import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Statistical inference is the machinery for reasoning backwards: from a sample of data (which you actually measured) to a claim about the whole population (which you didn\'t). Confidence intervals and p-values are its two workhorse tools, and both are more often misread than almost anything else in statistics, this page aims to get the reading right.',
  nutshell: [
    'A **sampling distribution** describes how a statistic (like a sample mean) would vary if you repeated the sampling many times.',
    'A **confidence interval** is a range built to contain the true population value a certain percentage of the time, across repeated sampling, not a 95% chance the true value is in *this specific* interval.',
    'A **p-value** is the probability of seeing data this extreme (or more) if the null hypothesis were true, not the probability the null hypothesis is true.',
    'Statistical significance is not the same as real-world importance: a tiny, meaningless effect can still be "significant" with enough data.',
  ],
  sections: [
    {
      id: 'sampling',
      title: 'The sampling distribution',
      blocks: [
        {
          t: 'math',
          tex: String.raw`SE(\bar{x}) = \frac{\sigma}{\sqrt{n}}`,
          where: [
            { sym: '\\sigma', def: 'The standard deviation of individual values in the population' },
            { sym: 'n', def: 'The sample size' },
          ],
          caption: 'The standard error: how much a *sample mean* would typically vary, if you kept drawing fresh samples of size n. It shrinks as n grows, larger samples give more reliable estimates, but only by the square root of n, so quadrupling your sample only halves the error.',
        },
        {
          t: 'p',
          text: 'This exact formula appears in [candlestick pattern reliability](@finance/candlesticks/reliability), to explain why a "70% success rate" observed in only 25 cases is barely distinguishable from pure chance.',
        },
      ],
    },
    {
      id: 'ci',
      title: 'Confidence intervals',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\bar{x} \pm z^{*} \cdot \frac{\sigma}{\sqrt{n}}`,
          caption: 'A confidence interval for a population mean. \\(z^{*}\\) is chosen from the normal distribution for the desired confidence level (1.96 for 95%, from the 68-95-99.7 rule on [distributions](@mathematics/probability/distributions)).',
        },
        {
          t: 'example',
          title: 'A 95% confidence interval',
          lines: [
            { label: 'Sample', text: 'n=100 customers, average spend \\(\\bar{x}=\\$52\\), sample σ=\\$15' },
            { label: 'Standard error', text: '\\(15/\\sqrt{100} = 1.5\\)' },
            { label: 'Interval', text: '\\(52 \\pm 1.96(1.5) = 52 \\pm 2.94\\), i.e. roughly \\([\\$49.06, \\$54.94]\\)' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'What "95% confident" actually means', text: 'It does NOT mean "there is a 95% chance the true mean is in this specific interval"once calculated, the true mean either is or isn\'t in that fixed range; there is no probability left to talk about. It means: if you repeated this entire sampling-and-interval procedure many times, about 95% of the intervals you built would contain the true value. The 95% describes the *procedure\'s* reliability, not this one result.' },
      ],
    },
    {
      id: 'pvalue',
      title: 'p-values and hypothesis testing',
      blocks: [
        {
          t: 'flow',
          title: 'The logic of a hypothesis test',
          nodes: [
            { label: 'Null hypothesis (H₀)', sub: '"no real effect"the sceptical default', tone: 'human' },
            { label: 'Collect data', tone: 'data' },
            { label: 'Compute p-value', sub: 'P(data this extreme | H₀ true)', tone: 'process' },
            { label: 'p small?', sub: 'conventionally < 0.05', tone: 'model' },
            { label: 'Reject H₀ ("significant")', tone: 'output' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`p\text{-value} = P(\text{data this extreme or more} \mid H_0 \text{ is true})`,
          caption: 'A conditional probability (see [Bayes\' theorem](@mathematics/probability/probability-rules)), crucially, it is the probability of the data given the hypothesis, not the probability of the hypothesis given the data. Those two are very different numbers, and confusing them is the single most common statistical error in published research.',
        },
        {
          t: 'example',
          title: 'A clear (if slightly informal) reading',
          lines: [
            { label: 'Claim', text: 'a coin is fair (H₀: p = 0.5)' },
            { label: 'Data', text: '70 heads out of 100 flips' },
            { label: 'p-value ≈ 0.0002', text: 'if the coin really were fair, seeing 70+ heads in 100 flips would happen only about 2 times in 10,000' },
            { label: 'Conclusion', text: 'such a small p-value makes "the coin is fair" hard to believe, reject H₀ in favour of "the coin is biased"' },
          ],
        },
        {
          t: 'table',
          head: ['Common misreading', 'What a p-value of 0.03 actually says'],
          rows: [
            ['"There\'s a 3% chance the null hypothesis is true"', 'There\'s a 3% chance of seeing data this extreme, IF the null hypothesis were true, a completely different conditional'],
            ['"There\'s a 97% chance my theory is correct"', 'Says nothing about the alternative theory\'s probability at all'],
            ['"The effect is large and important"', 'Says nothing about size, with enough data, even a tiny, meaningless effect can be "significant"'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The multiple-testing trap', text: 'Run 20 independent tests at the 5% significance level, each on pure noise with no real effect, and the chance at least one comes back "significant" by pure luck is \\(1-0.95^{20} \\approx 64\\%\\), covered in depth in [candlestick pattern reliability](@finance/candlesticks/reliability). Always ask how many tests were tried before the one that "worked" was reported.' },
      ],
    },
  ],
  sources: ['Wasserstein, R. L., & Lazar, N. A. (2016). The ASA statement on p-values. *The American Statistician*, 70(2), 129–133.', 'Ross, S. M. (2019). *A First Course in Probability* (10th ed.). Pearson.'],
  related: ['finance/candlesticks/reliability', 'mathematics/probability/distributions', 'ai/foundations/evaluation'],
}

export default guide
