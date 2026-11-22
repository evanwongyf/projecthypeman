import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Almost every model in finance starts with a model of returns. The convenient one, a normal distribution, is a good first approximation and a bad guide to extremes: real returns have fat tails, a little negative skew and volatility that clusters. This guide defines simple and log returns, the moments that describe a distribution, and shows what the normal assumption gets wrong and why that matters for risk.',
  nutshell: [
    '**Simple return** \\(R = P_1/P_0 - 1\\); **log return** \\(r = \\ln(P_1/P_0)\\). Log returns add across time; simple returns add across assets.',
    'Daily stock returns have **excess kurtosis** well above 0 (fat tails) and are mildly **negatively skewed**.',
    '**Volatility clusters**: large moves follow large moves, so risk is not constant.',
    'A normal model that matches the mean and standard deviation badly understates the frequency of 4- and 5-sigma days.',
  ],
  sections: [
    {
      id: 'returns',
      title: 'Simple and log returns',
      lead: 'Two ways to measure change.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`R_t = \frac{P_t}{P_{t-1}}-1,\qquad r_t=\ln\frac{P_t}{P_{t-1}} = \ln(1+R_t),\qquad \sum_{t=1}^{T} r_t = \ln\frac{P_T}{P_0}`,
          caption: 'Simple return, log return and the additivity of log returns.',
          where: [{ sym: 'P_t', def: 'the price (including dividends) at time t' }],
          syntax: [
            { sym: 'R_t', say: 'the percentage change over one period. Effect: easy to read, but compounding means multi-period returns multiply: \\((1+R_1)(1+R_2)-1\\).' },
            { sym: '\\ln(P_t/P_{t-1})', say: 'the continuously compounded return. Effect: for small moves it is almost the same as R; for large ones it is smaller. Why: the log turns the product of growth factors into a sum.' },
            { sym: '\\sum r_t', say: 'adding log returns gives the total log return over the period. Effect: lets us use sums and the central limit theorem on multi-period returns.' },
          ],
          worked: {
            title: 'A +50% day then a −50% day',
            steps: ['Simple returns: +50% and −50%. Average: 0%.', 'Growth: \\(1.5 \\times 0.5 = 0.75\\), a 25% loss.', 'Log returns: \\(\\ln 1.5 = +0.405\\), \\(\\ln 0.5 = -0.693\\). Sum: \\(-0.288\\), and \\(e^{-0.288}=0.75\\).'],
            answer: 'Averaging simple returns overstates growth. Log returns add exactly: this volatility drag is the −σ²/2 term in the next guide.',
          },
        },
      ],
    },
    {
      id: 'moments',
      title: 'Mean, variance, skew and kurtosis',
      lead: 'Four numbers that describe a distribution.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\mu = E[r],\quad \sigma^2 = E\big[(r-\mu)^2\big],\quad \text{Skew} = E\!\left[\Big(\tfrac{r-\mu}{\sigma}\Big)^{3}\right],\quad \text{Kurt} = E\!\left[\Big(\tfrac{r-\mu}{\sigma}\Big)^{4}\right]`,
          caption: 'The first four standardised moments. A normal distribution has skewness 0 and kurtosis 3 (excess kurtosis 0).',
          where: [{ sym: 'E[\\cdot]', def: 'the expected (average) value' }],
          syntax: [
            { sym: '\\mu', say: 'the average return: where the distribution is centred. Estimated badly: its standard error is \\(\\sigma/\\sqrt{n}\\), so with daily data it takes decades to pin down.' },
            { sym: '\\sigma^2', say: 'the average squared deviation: the spread. Squaring makes deviations positive and punishes large ones.' },
            { sym: '\\big((r-\\mu)/\\sigma\\big)^3', say: 'cubing keeps the sign, so left-tail days (negative) pull skewness negative. Effect: a distribution with big crashes and small gains has negative skew.' },
            { sym: '\\big((r-\\mu)/\\sigma\\big)^4', say: 'the fourth power is dominated by extreme days. Effect: large kurtosis means the variance comes mainly from rare large moves. Why: a 5-sigma day contributes \\(5^4=625\\) to the average.' },
          ],
          worked: {
            title: 'How unlikely is a −5σ day?',
            steps: ['Under a normal distribution, \\(P(Z<-5) \\approx 2.9\\times 10^{-7}\\), about once in 3.5 million days (14,000 years).', 'The S&P 500 index has had several days beyond −5σ in 100 years: for example −20.5% on 19 October 1987 was around −20σ using the then-volatility.'],
            answer: 'The normal model puts the 1987 crash at odds far smaller than the age of the universe. Fat tails are not a rounding error.',
          },
        },
        { t: 'quant-viz', viz: 'returns-dist' },
        { t: 'p', text: 'The lab compares a normal with a Student-t distribution of the same standard deviation. The t has the same centre and spread but far more mass in the tails, which is much closer to how daily returns behave (a t with 3 to 5 degrees of freedom fits equities reasonably).' },
      ],
    },
    {
      id: 'clustering',
      title: 'Volatility clustering',
      lead: 'Risk is not constant.',
      blocks: [
        { t: 'p', text: 'Returns themselves are almost uncorrelated, but their **sizes** are not: \\(|r_t|\\) and \\(r_t^2\\) are positively autocorrelated for many days. Calm periods and turbulent periods come in runs. This is the reason risk models use a current estimate of volatility (for example an exponentially weighted one) instead of a long average.' },
        {
          t: 'math',
          tex: String.raw`\sigma_t^2 = \lambda\,\sigma_{t-1}^2 + (1-\lambda)\,r_{t-1}^2`,
          caption: 'The exponentially weighted (RiskMetrics) volatility update.',
          where: [{ sym: '\\lambda', def: 'the decay factor, 0.94 for daily data in the original RiskMetrics system' }],
          syntax: [
            { sym: '\\lambda\\,\\sigma_{t-1}^2', say: 'keep most of yesterday’s variance estimate. Effect: a high λ makes the estimate smooth and slow. Why: volatility persists.' },
            { sym: '(1-\\lambda)\\,r_{t-1}^2', say: 'add a little of yesterday’s squared return. Effect: a big move raises the estimate straight away; the effect then fades by a factor λ each day.' },
          ],
          worked: {
            title: 'A shock day',
            steps: ['Yesterday’s estimate: \\(\\sigma = 1\\%\\), so \\(\\sigma^2 = 1\\). Today a −4% return arrives.', '\\(\\sigma^2_{\\text{new}} = 0.94(1) + 0.06(16) = 0.94 + 0.96 = 1.90\\).', '\\(\\sigma_{\\text{new}} = 1.38\\%\\).'],
            answer: 'One −4σ day lifts the volatility estimate from 1.0% to 1.38%. The effect decays by 6% per day.',
          },
        },
      ],
    },
  ],
  sources: [
    'Cont, R. (2001). Empirical properties of asset returns: stylized facts and statistical issues. *Quantitative Finance*, 1(2), 223–236.',
    'Mandelbrot, B. (1963). The variation of certain speculative prices. *Journal of Business*, 36(4).',
    'J.P. Morgan/Reuters (1996). *RiskMetrics Technical Document* (4th ed.).',
    'Taleb, N. N. (2007). *The Black Swan*. Random House.',
  ],
  related: ['finance/quant/random-walks-and-gbm', 'finance/quant/risk-measures', 'finance/foundations/risk-return', 'finance/foundations/efficient-markets'],
}

export default guide
