import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Rules-based value and quality portfolios rank stocks on simple measures (cheapness, profitability, balance-sheet strength), buy the best-ranked and rebalance periodically. Combining value with quality avoids many “value traps”. Both have long histories, and both have suffered long droughts.',
  nutshell: [
    '**Value** measures: earnings yield, book-to-price, cash-flow yield, EV/EBIT.',
    '**Quality** measures: return on capital, gross profitability (Novy-Marx, 2013), low leverage, stable earnings.',
    'Combine measures with **z-scores** so different units can be added.',
    'Rebalance annually or semi-annually; hold 20–50 stocks for diversification.',
  ],
  sections: [
    {
      id: 'z',
      title: 'Composite z-scores',
      blocks: [
        {
          t: 'math',
          tex: String.raw`z_{i,m} = \frac{x_{i,m} - \bar x_m}{s_m}, \qquad \text{Score}_i = \frac{1}{M}\sum_{m=1}^{M} z_{i,m}`,
          caption: 'Standardise each measure m across stocks, then average the z-scores into one composite.',
          plain: 'An earnings yield of 8% and a return on capital of 25% cannot be added directly. Convert each measure to a z-score (how many standard deviations above the average stock), then average. Stocks with high composite scores are both cheap and good.',
          where: [
            { sym: String.raw`x_{i,m}`, def: 'stock i’s value on measure m' },
            { sym: String.raw`\bar x_m, s_m`, def: 'mean and standard deviation of measure m across the universe' },
            { sym: 'M', def: 'number of measures' },
          ],
          syntax: [
            { sym: String.raw`z_{i,m}`, say: '“z for stock i on measure m”' },
          ],
          worked: {
            title: 'Three stocks, two measures',
            steps: [
              'Universe averages: earnings yield 6% (SD 2%), return on capital 15% (SD 5%).',
              String.raw`Stock A: yield 9%, ROC 12%: \(z = (9-6)/2 = 1.5\) and \((12-15)/5 = -0.6\). Score \(0.45\).`,
              String.raw`Stock B: yield 7%, ROC 25%: \(z = 0.5\) and \(2.0\). Score \(1.25\).`,
              String.raw`Stock C: yield 10%, ROC 5%: \(z = 2.0\) and \(-2.0\). Score \(0\).`,
            ],
            why: [
              'cross-sectional statistics',
              'cheap but below-average quality',
              'reasonably priced and high quality',
              'very cheap, very poor: a possible value trap',
            ],
            answer: 'B ranks first, A second, C last. Pure value would have picked C, the cheapest; adding quality filters it out.',
          },
        },
      ],
    },
    {
      id: 'evidence',
      title: 'Evidence and droughts',
      blocks: [
        { t: 'p', text: 'Value (Fama and French, 1992) earned a premium for decades, then lagged growth for much of 2007–2020. Profitability and quality (Novy-Marx, 2013; Asness, Frazzini and Pedersen, 2019) have held up better recently and combine well with value, because cheap stocks tend to be lower quality. Any factor portfolio needs patience through years of underperformance.' },
      ],
    },
  ],
  sources: [
    'Fama, E. F., & French, K. R. (1992). The cross-section of expected stock returns. Journal of Finance, 47(2), 427–465.',
    'Novy-Marx, R. (2013). The other side of value: The gross profitability premium. Journal of Financial Economics, 108(1), 1–28.',
    'Asness, C. S., Frazzini, A., & Pedersen, L. H. (2019). Quality minus junk. Review of Accounting Studies, 24, 34–112.',
  ],
  related: ['finance/philosophies/factors', 'finance/frameworks/magic-formula', 'finance/fundamental/value-investing'],
}

export default guide
