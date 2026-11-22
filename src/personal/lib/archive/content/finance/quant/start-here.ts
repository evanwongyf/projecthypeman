import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Quantitative finance applies probability, statistics and numerical methods to markets. Quants build the models that price derivatives, measure and limit risk, construct portfolios, trade systematically and test whether any of it works. This page is a map of the shelf: what the toolkit is, the few ideas everything else rests on, and a route through the guides.',
  nutshell: [
    'Three jobs: **price** (what is this contract worth?), **risk** (what can I lose?) and **trade** (is there an edge, and how do I capture it?).',
    'The shared foundation is the **return distribution**: markets are noisy, returns are close to unpredictable, and tails are fatter than a bell curve.',
    'Most models are useful **approximations**. The skill is knowing what each assumes and where it breaks.',
    'The recurring danger is **overfitting**: with enough tries, noise looks like skill.',
    'Everything here is education, using synthetic data in the labs. It is not investment advice.',
  ],
  sections: [
    {
      id: 'toolkit',
      title: 'The toolkit',
      lead: 'Five kinds of mathematics.',
      blocks: [
        {
          t: 'table',
          head: ['Area', 'Used for', 'Where on this shelf'],
          rows: [
            ['Probability and distributions', 'Describing returns, tails, risk', '[Returns and fat tails](@finance/quant/returns-and-distributions)'],
            ['Stochastic processes', 'Models of prices through time, simulation', '[Random walks and GBM](@finance/quant/random-walks-and-gbm)'],
            ['Statistics and regression', 'Estimating edge, beta, alpha, significance', '[Factor models](@finance/quant/factor-models)'],
            ['Optimisation and linear algebra', 'Portfolio construction', '[Portfolio theory](@finance/quant/portfolio-theory)'],
            ['Numerical methods', 'Pricing derivatives without closed forms', '[Pricing numerics](@finance/quant/derivatives-numerics)'],
            ['Time series', 'Mean reversion, pairs, forecasting', '[Time series](@finance/quant/mean-reversion-and-time-series)'],
          ],
        },
        {
          t: 'flow',
          title: 'The quant workflow',
          nodes: [
            { label: 'Idea', sub: 'a hypothesis with an economic reason' },
            { label: 'Data', sub: 'clean, point-in-time, survivorship-free' },
            { label: 'Model', sub: 'simple, with few parameters' },
            { label: 'Test', sub: 'out of sample, with costs' },
            { label: 'Size and trade', sub: 'risk limits, execution' },
            { label: 'Monitor', sub: 'is the edge still there?' },
          ],
          loop: 'Edges decay: back to ideas',
        },
      ],
    },
    {
      id: 'ideas',
      title: 'Five ideas to carry through',
      lead: 'Everything else is built on these.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Risk and return trade off', tag: 'no free lunch', body: 'Expected return above the risk-free rate is compensation for bearing risk that cannot be diversified away. Claimed returns without risk are a warning sign.' },
            { title: 'Time scales with √t', tag: 'diffusion', body: 'If daily returns are independent, volatility over t days is \\(\\sigma\\sqrt{t}\\), not \\(\\sigma t\\). It is why annualising multiplies daily volatility by about 15.9 (√252).' },
            { title: 'Diversification is free, but partial', tag: 'covariance', body: 'Combining assets with correlation below 1 reduces risk without reducing expected return. The correlations that matter most are the ones in a crash, which are higher than average.' },
            { title: 'Estimation error is real', tag: 'statistics', body: 'Means of returns are estimated badly (the standard error is large relative to the mean), so strategies built on estimated means are fragile.' },
            { title: 'Most good-looking backtests are noise', tag: 'multiple testing', body: 'The best of 100 random strategies has an impressive Sharpe ratio. Count your trials.' },
            { title: 'Costs and capacity', tag: 'reality', body: 'Trading moves prices. An edge that disappears at realistic size or realistic spreads was never an edge.' },
          ],
        },
        { t: 'math', tex: String.raw`\sigma_{T} = \sigma_{1}\sqrt{T}`, caption: 'The square-root-of-time rule for volatility of independent returns.', where: [{ sym: '\\sigma_1', def: 'volatility over one period (one day)' }, { sym: 'T', def: 'number of periods' }], syntax: [{ sym: '\\sqrt{T}', say: 'variances of independent returns add, so variance grows linearly with T and standard deviation as its square root. Effect: risk over a year is about 16 times the daily risk, not 252 times.' }], worked: { title: 'Annualising', steps: ['Daily volatility 1.2%.', '\\(1.2\\% \\times \\sqrt{252} = 1.2 \\times 15.87 = 19.0\\%\\).'], answer: 'A 1.2% daily move corresponds to about 19% annualised volatility.' } },
      ],
    },
    {
      id: 'route',
      title: 'A route through the shelf',
      lead: 'In order.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Distributions and the random walk', body: 'Start with [returns and fat tails](@finance/quant/returns-and-distributions) and [random walks and GBM](@finance/quant/random-walks-and-gbm).' },
            { title: 'Risk and portfolios', body: '[Risk measures](@finance/quant/risk-measures), then [portfolio theory](@finance/quant/portfolio-theory) and [factor models](@finance/quant/factor-models).' },
            { title: 'Trading models', body: '[Time series](@finance/quant/mean-reversion-and-time-series) and [execution](@finance/quant/execution-and-microstructure).' },
            { title: 'Derivatives', body: '[Pricing numerics](@finance/quant/derivatives-numerics), after the Black–Scholes guide in the derivatives section.' },
            { title: 'Honest testing', body: '[Backtesting and overfitting](@finance/quant/backtesting-and-overfitting), and the [entries and exits](@finance/trading/how-orders-work) shelf for practical trading.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Prerequisites', text: 'Basic algebra and an idea of mean and standard deviation are enough. Every formula is explained symbol by symbol, with a worked example, and the labs let you change the numbers.' },
      ],
    },
  ],
  sources: [
    'Hull, J. C. (2022). *Options, Futures, and Other Derivatives* (11th ed.). Pearson.',
    'Shreve, S. E. (2004). *Stochastic Calculus for Finance I and II*. Springer.',
    'Cont, R. (2001). Empirical properties of asset returns: stylized facts and statistical issues. *Quantitative Finance*, 1(2).',
    'López de Prado, M. (2018). *Advances in Financial Machine Learning*. Wiley.',
  ],
  related: ['finance/quant/returns-and-distributions', 'finance/foundations/risk-return', 'finance/philosophies/quant'],
}

export default guide
