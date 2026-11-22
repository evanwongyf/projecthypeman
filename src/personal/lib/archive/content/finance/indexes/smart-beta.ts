import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    '“Smart beta” or “factor” indexes use rules other than market cap to choose or weight stocks: equal weight, low volatility, value, momentum, quality, dividends, or company fundamentals like sales and book value. They aim to capture documented return premiums at index-fund costs. They can help, but they bring higher fees, more turnover, and long periods of underperformance.',
  nutshell: [
    'Common approaches: **equal weight**, **minimum or low volatility**, **value**, **momentum**, **quality**, **dividend**, **fundamental weighting** (Arnott, Hsu and Moore, 2005), **multi-factor**.',
    'Inverse-volatility weighting gives less weight to more volatile stocks.',
    'Back-tested results usually look better than live results; factor premiums vary over time and can disappear for a decade.',
  ],
  sections: [
    {
      id: 'types',
      title: 'Types of smart-beta index',
      blocks: [
        { t: 'table', head: ['Type', 'Rule', 'Intended premium', 'Watch for'], rows: [
          ['Equal weight', '1/n per stock', 'Size and rebalancing', 'Turnover; small-cap tilt'],
          ['Low / minimum volatility', 'Lowest-volatility stocks or an optimised minimum-variance portfolio', 'Low-volatility anomaly', 'Sector concentration (utilities, staples); rate sensitivity'],
          ['Value', 'Cheap on price-to-book, earnings, sales', 'Value premium', 'Long droughts (e.g. 2010s)'],
          ['Momentum', 'Recent winners', 'Momentum premium', 'Crashes in sharp reversals; high turnover'],
          ['Quality', 'High profitability, low leverage, stable earnings', 'Quality premium', 'Definitions differ by provider'],
          ['Dividend', 'High or growing dividends', 'Income; value tilt', 'Yield traps; concentration'],
          ['Fundamental', 'Weight by sales, cash flow, book, dividends', 'Breaks link with price (value tilt)', 'Behaves like value'],
          ['Multi-factor', 'Combine several factors', 'Diversified premiums', 'Complexity; cost'],
        ] },
      ],
    },
    {
      id: 'inv-vol',
      title: 'Inverse-volatility weighting',
      blocks: [
        {
          t: 'math',
          tex: String.raw`w_i = \frac{1/\sigma_i}{\sum_j 1/\sigma_j}`,
          caption: 'Each stock’s weight is proportional to one over its volatility.',
          plain: 'Calmer stocks get bigger weights and wild ones smaller, so each contributes a more similar amount of risk (exactly equal if correlations are all the same). Take the reciprocal of each volatility, then divide by the total so weights add to 1.',
          where: [
            { sym: String.raw`\sigma_i`, def: 'volatility of stock i' },
            { sym: String.raw`w_i`, def: 'weight' },
          ],
          syntax: [
            { sym: String.raw`1/\sigma_i`, say: '“one over sigma i”' },
          ],
          worked: {
            title: 'A utility (15% vol), a bank (25%), a tech stock (40%)',
            steps: [
              String.raw`Reciprocals: \(1/0.15 = 6.67\), \(1/0.25 = 4.00\), \(1/0.40 = 2.50\). Sum 13.17.`,
              String.raw`Weights: \(6.67/13.17 = 50.6\%\), \(4.00/13.17 = 30.4\%\), \(2.50/13.17 = 19.0\%\).`,
              String.raw`Check risk shares (ignoring correlation): \(0.506 \times 15 = 7.6\), \(0.304 \times 25 = 7.6\), \(0.19 \times 40 = 7.6\).`,
            ],
            why: [
              'reciprocal volatilities',
              'normalise to sum to 100%',
              'each weight × volatility is the same',
            ],
            answer: 'Half the money goes to the utility. Note the side effect: a sector tilt towards defensive industries.',
          },
        },
      ],
    },
  ],
  sources: [
    'Arnott, R. D., Hsu, J., & Moore, P. (2005). Fundamental indexation. Financial Analysts Journal, 61(2), 83–99.',
    'Ang, A. (2014). Asset Management: A Systematic Approach to Factor Investing. Oxford University Press.',
    'Baker, M., Bradley, B., & Wurgler, J. (2011). Benchmarks as limits to arbitrage: Understanding the low-volatility anomaly. Financial Analysts Journal, 67(1), 40–54.',
  ],
  related: ['finance/philosophies/factors', 'finance/strategy-library/low-volatility-and-dividend', 'finance/quant/volatility-targeting-and-risk-parity'],
}

export default guide
