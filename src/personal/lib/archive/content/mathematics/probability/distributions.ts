import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A probability distribution is a complete description of every value a random variable can take, and how likely each one is. A handful of distributions turn up again and again in the real world, because they arise from a small number of common underlying situations, and one of them, the normal distribution, turns up so often it practically has its own gravity, pulling almost any sum of small random effects towards its bell shape.',
  nutshell: [
    'The **binomial** distribution counts successes in a fixed number of independent yes/no trials.',
    'The **Poisson** distribution counts random events in a fixed window of time or space, when events are rare and independent.',
    'The **normal (Gaussian)** distribution is the familiar symmetric bell curve, fully described by just its mean μ and standard deviation σ.',
    'The **central limit theorem** explains why: the sum (or average) of many independent random quantities tends towards a normal distribution, almost regardless of their individual shapes.',
  ],
  sections: [
    {
      id: 'binomial',
      title: 'The binomial distribution',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}`,
          where: [
            { sym: 'n', def: 'The number of independent trials' },
            { sym: 'p', def: 'The probability of success on each single trial' },
            { sym: 'k', def: 'The number of successes being asked about' },
            { sym: '\\binom{n}{k}', def: 'The number of ways to choose which k trials succeed, from [counting](@mathematics/probability/counting)' },
          ],
          caption: 'Models anything built from a fixed number of independent yes/no trials: coin flips, whether each of n customers buys, whether each of n emails is spam.',
        },
        {
          t: 'example',
          title: 'Exactly 3 heads in 5 fair coin flips',
          lines: [
            { label: 'Setup', text: '\\(n=5,\\ p=0.5,\\ k=3\\)' },
            { label: 'Ways to arrange', text: '\\(\\binom{5}{3} = 10\\)' },
            { label: 'Each arrangement\'s probability', text: '\\(p^3(1-p)^2 = 0.5^3 \\times 0.5^2 = 0.03125\\)' },
            { label: 'Total', text: '\\(10 \\times 0.03125 = 0.3125\\): a 31.25% chance' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`E[X] = np \qquad \operatorname{Var}(X) = np(1-p)`,
          caption: 'The mean and variance follow directly from linearity of expectation, applied to n independent 0/1 trials. For 5 coin flips: mean = 2.5 heads, variance = 1.25.',
        },
      ],
    },
    {
      id: 'poisson',
      title: 'The Poisson distribution',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}`,
          where: [{ sym: '\\lambda', def: 'The average rate of events in the window being studied' }],
          caption: 'Models rare, independent events over a fixed window: customer arrivals per hour, typos per page, server errors per minute. λ is both the mean and the variance of a Poisson distribution.',
        },
        {
          t: 'example',
          title: 'A call centre averaging 4 calls per minute',
          lines: [
            { label: 'Question', text: 'probability of exactly 6 calls in a given minute?' },
            { label: 'Setup', text: '\\(\\lambda=4,\\ k=6\\)' },
            { label: 'Compute', text: '\\(P(X=6) = \\dfrac{4^6 e^{-4}}{6!} = \\dfrac{4{,}096 \\times 0.0183}{720} \\approx 10.4\\%\\)' },
          ],
        },
      ],
    },
    {
      id: 'normal',
      title: 'The normal distribution',
      blocks: [
        {
          t: 'math',
          tex: String.raw`f(x) = \frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}}`,
          where: [
            { sym: '\\mu', def: 'The mean: the centre of the bell' },
            { sym: '\\sigma', def: 'The standard deviation: how wide the bell is' },
          ],
          caption: 'The famous bell curve. Fully described by just two numbers, μ and σ, everything about its shape follows from them.',
        },
        {
          t: 'plot',
          title: 'The 68-95-99.7 rule',
          x: [-4, 4],
          y: [0, 0.45],
          curves: [{ f: (x: number) => Math.exp(-(x * x) / 2) / Math.sqrt(2 * Math.PI) }],
          shade: [
            { from: -1, to: 1, label: '68%', color: 'var(--mint)' },
            { from: -2, to: -1, color: 'var(--mustard)' },
            { from: 1, to: 2, label: '95% within 2σ', color: 'var(--mustard)' },
          ],
          caption: 'About 68% of values fall within 1 standard deviation of the mean, 95% within 2, and 99.7% within 3, true for *any* normal distribution, whatever its particular μ and σ.',
        },
        {
          t: 'math',
          tex: String.raw`z = \frac{x-\mu}{\sigma}`,
          caption: 'The z-score: how many standard deviations x sits from the mean. Converting to z-scores lets a single standard normal table (μ=0, σ=1) answer questions about any normal distribution at all.',
        },
      ],
    },
    {
      id: 'clt',
      title: 'The central limit theorem',
      blocks: [
        {
          t: 'p',
          text: 'Here is the remarkable part: if you add up (or average) a large number of independent random quantities, whatever shape their individual distributions have, the result tends towards a normal distribution. Roll one die and the outcomes are flat (uniform); add up 10 dice and the sum is already closely bell-shaped.',
        },
        {
          t: 'flow',
          title: 'Why so many things end up normal',
          nodes: [
            { label: 'Many small, independent effects', sub: 'e.g. thousands of genes affecting height', tone: 'data' },
            { label: 'Add them up', tone: 'process' },
            { label: 'Central limit theorem', tone: 'model' },
            { label: 'Result: approximately normal', sub: 'regardless of each effect\'s own distribution', tone: 'output' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Where this shows up on this site', text: 'Stock returns are often modelled as approximately normal (imperfectly, real markets have "fatter tails" than a true normal, as noted in [Bollinger Bands](@finance/technical/volatility)) partly because a day\'s return reflects the sum of countless small, semi-independent trades and news events. Weight initialisation in [neural network training](@ai/neural/training) also draws from normal distributions, chosen specifically for their predictable, well-understood spread.' },
        { t: 'callout', tone: 'fact', title: 'Named for the wrong reason', text: 'The "normal" distribution\'s name (coined in the late 1800s) accidentally implies other distributions are somehow abnormal, they aren\'t. Carl Friedrich Gauss popularised it studying astronomical measurement errors in 1809, so it is also widely called the Gaussian distribution, a more neutral name.' },
      ],
    },
  ],
  sources: ['Gauss, C. F. (1809). *Theoria Motus Corporum Coelestium*.', 'Ross, S. M. (2019). *A First Course in Probability* (10th ed.). Pearson.'],
  related: ['mathematics/probability/random-variables', 'mathematics/probability/inference', 'finance/technical/volatility'],
}

export default guide
