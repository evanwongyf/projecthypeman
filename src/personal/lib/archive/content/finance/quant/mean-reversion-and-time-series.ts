import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Prices wander, but some combinations of prices (a spread between two related stocks, a basis, an interest-rate differential) are pulled back toward a level. Mean-reversion strategies profit from that pull. This guide covers stationarity, autocorrelation, the AR(1) and Ornstein–Uhlenbeck models, half-life, cointegration and a z-score pairs trade, and the ways these fail.',
  nutshell: [
    'A **stationary** series has constant mean and variance; prices usually are not, but a spread between cointegrated prices can be.',
    '**AR(1):** \\(x_t=c+\\phi\\,x_{t-1}+\\varepsilon_t\\). If \\(|\\phi|<1\\) the series reverts; the speed is the **half-life** \\(\\ln 2/(-\\ln\\phi)\\).',
    '**Cointegration** means a linear combination of non-stationary prices is stationary. Correlation does not imply it.',
    'A pairs trade enters when the spread’s **z-score** passes about ±2 and exits near 0, with a stop for the case that the relationship has broken.',
  ],
  sections: [
    {
      id: 'ar1',
      title: 'AR(1) and the half-life',
      lead: 'The simplest model of mean reversion.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`x_t=\mu+\phi\,(x_{t-1}-\mu)+\varepsilon_t,\qquad t_{1/2}=\frac{\ln 2}{-\ln\phi},\qquad \sigma_x^2=\frac{\sigma_\varepsilon^2}{1-\phi^2}`,
          caption: 'A mean-reverting AR(1) process, its half-life and its long-run variance.',
          where: [{ sym: '\\mu', def: 'the long-run mean' }, { sym: '\\phi', def: 'the persistence, between 0 and 1 for mean reversion' }, { sym: '\\varepsilon_t', def: 'a shock with variance σ_ε²' }],
          syntax: [
            { sym: '\\phi\\,(x_{t-1}-\\mu)', say: 'the pull-back: a fraction φ of yesterday’s deviation survives. Effect: φ near 1 gives slow reversion; φ = 0 gives instant. Why: each step removes 1−φ of the gap.' },
            { sym: '\\ln 2/(-\\ln\\phi)', say: 'the time for a deviation to halve: φ^t = 1/2. Effect: a long half-life means a slow, capital-hungry trade.' },
            { sym: '1-\\phi^2', say: 'the denominator of the long-run variance: as φ → 1 the variance explodes, and the series becomes a random walk.' },
          ],
          worked: {
            title: 'A daily spread with φ = 0.95',
            steps: ['Half-life: \\(\\ln 2/(-\\ln 0.95)=0.693/0.0513=13.5\\) days.', 'A 4-point deviation is expected to be 2 points after 13.5 days and 1 point after 27.', 'With φ = 0.99 the half-life is 69 days.'],
            answer: 'The spread takes about 13.5 days to close half the gap. If a trade will need to be held for many half-lives, financing, risk and the chance of structural change all rise.',
          },
        },
        { t: 'quant-viz', viz: 'ou' },
        { t: 'p', text: 'The Ornstein–Uhlenbeck process \\(dX=\\theta(\\mu-X)\\,dt+\\sigma\\,dW\\) is the continuous-time version, with \\(\\phi=e^{-\\theta\\,\\Delta t}\\) and half-life \\(\\ln 2/\\theta\\). It is used for spreads, interest rates (Vasicek) and volatility.' },
      ],
    },
    {
      id: 'coint',
      title: 'Cointegration and testing',
      lead: 'Two random walks that do not drift apart.',
      blocks: [
        { t: 'p', text: 'Two prices can each wander without limit while a combination stays bounded: \\(S_t = A_t - \\beta B_t\\) is stationary. The usual check is the Engle–Granger procedure: regress A on B to get \\(\\beta\\), then test the residual spread for a unit root with an Augmented Dickey–Fuller (ADF) test. A significant (negative) ADF statistic rejects the unit root and suggests mean reversion.' },
        {
          t: 'table',
          head: ['Concept', 'Means', 'Does not mean'],
          rows: [
            ['Correlation', 'Returns tend to move together', 'The price gap stays bounded. Two trending series are highly correlated and can drift apart indefinitely'],
            ['Cointegration', 'A combination of prices is stationary', 'That it will stay stationary; relationships change'],
            ['Stationary', 'Constant mean and variance', 'Predictable returns on its own'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`z_t=\frac{S_t-\bar S}{s_S},\qquad \text{enter if } |z_t|>2,\ \ \text{exit at } z_t\approx 0,\ \ \text{stop if } |z_t|>4`,
          caption: 'A z-score pairs trading rule on the spread S.',
          where: [{ sym: 'S_t', def: 'the spread \\(A_t-\\beta B_t\\)' }, { sym: '\\bar S,\\ s_S', def: 'its mean and standard deviation over a lookback window' }],
          syntax: [
            { sym: 'z_t', say: 'how stretched the spread is, in standard deviations. Effect: converts the spread to a comparable scale. Why: the same rule can run across many pairs.' },
            { sym: '|z_t|>4', say: 'the stop. Effect: a spread this wide may not be a bargain at all; the relationship may have broken (a merger, a bankruptcy, a regulation). Why: reverting is a hypothesis, not a law.' },
          ],
          worked: {
            title: 'Entering a pair',
            steps: ['Spread mean 0, standard deviation 1.5. Today S = +3.3, so \\(z = 2.2\\).', 'Rule: short the spread (sell A, buy β units of B).', 'Target: z = 0 (S = 0), a gain of 3.3 per unit; stop: S = +6 (loss of 2.7).'],
            answer: 'Reward 3.3 against 2.7 at risk, with a probability of success that depends on whether the relationship still holds. If the half-life is 10 days, expect to hold for around two weeks.',
          },
        },
        { t: 'callout', tone: 'warn', title: 'Why pairs trades blow up', text: 'Selecting the pair after seeing it revert is look-ahead bias; reversion fails when the relationship changes; and the trade is short volatility in disguise (many small wins, few large losses). In 2007 and 2008 widespread statistical-arbitrage unwinds caused sudden losses in many funds at once.' },
      ],
    },
  ],
  sources: [
    'Engle, R. F. & Granger, C. W. J. (1987). Co-integration and error correction. *Econometrica*, 55(2).',
    'Gatev, E., Goetzmann, W. N. & Rouwenhorst, K. G. (2006). Pairs trading: performance of a relative-value arbitrage rule. *Review of Financial Studies*, 19(3).',
    'Chan, E. P. (2013). *Algorithmic Trading: Winning Strategies and Their Rationale*. Wiley.',
    'Hamilton, J. D. (1994). *Time Series Analysis*. Princeton University Press.',
  ],
  related: ['finance/philosophies/quant', 'finance/quant/backtesting-and-overfitting', 'finance/quant/returns-and-distributions', 'finance/trading/entry-types'],
}

export default guide
