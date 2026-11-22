import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Should you pay a manager to try to beat the market, or buy the market cheaply? The arithmetic and the evidence both favour low-cost index funds for most investors, most of the time. But the details matter: survivorship bias, persistence, active share, and the markets where active management has a better case.',
  nutshell: [
    '**Sharpe’s arithmetic (1991)**: before costs, the average actively managed dollar must earn the market return; after costs, it must earn less.',
    '**SPIVA** scorecards: over 15–20 years, the large majority (around 85–90%) of US large-cap active funds underperformed the S&P 500.',
    '**Survivorship bias**: closed funds vanish from databases, flattering averages.',
    'Past winners rarely **persist**; **active share** measures how different a fund really is from its benchmark.',
  ],
  sections: [
    {
      id: 'arithmetic',
      title: 'Sharpe’s arithmetic',
      blocks: [
        {
          t: 'math',
          tex: String.raw`R_m = w_P R_P + w_A R_A, \quad R_P = R_m \;\Rightarrow\; R_A = R_m \;(\text{before costs})`,
          caption: 'The market is the sum of passive (P) and active (A) holdings, weighted by their shares w.',
          plain: 'Every share in the market is held by someone, either passively or actively. Passive investors hold the market and earn its return. So all active investors together must also earn the market return before costs. Since active investing costs more, the average active investor must earn less after costs. Some will beat the market, but only at others’ expense.',
          where: [
            { sym: String.raw`R_m`, def: 'market return' },
            { sym: String.raw`R_P, R_A`, def: 'average returns of passive and active investors' },
            { sym: String.raw`w_P, w_A`, def: 'shares of the market held by each (adding to 1)' },
          ],
          syntax: [
            { sym: String.raw`\Rightarrow`, say: '“implies”' },
          ],
          worked: {
            title: 'After costs',
            steps: [
              'Market return 8%. Passive cost 0.10%; average active cost 1.20% (fees plus trading).',
              String.raw`Passive net: \(8.0 - 0.1 = 7.9\%\).`,
              String.raw`Average active net: \(8.0 - 1.2 = 6.8\%\).`,
              'Gap: 1.1 points a year in favour of passive, on average.',
            ],
            why: [
              'the costs of each approach',
              'passive earns the market minus its small cost',
              'active as a group earns the market minus its larger cost',
              'the gap is just the cost difference',
            ],
            answer: 'The average active dollar must underperform the average passive dollar by the difference in costs. This is arithmetic, not a market theory.',
          },
        },
      ],
    },
    {
      id: 'survivorship',
      title: 'Survivorship bias',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\bar R_{\text{all}} = s\,\bar R_{\text{survivors}} + (1 - s)\,\bar R_{\text{closed}}`,
          caption: 'The true average of all funds versus the survivors’ average, where s is the share that survived.',
          plain: 'Poorly performing funds are often closed or merged and disappear from databases. Averaging only the survivors overstates how well funds did. The true average includes the closed funds.',
          where: [
            { sym: 's', def: 'share of funds that survived' },
            { sym: String.raw`\bar R`, def: 'average annual return' },
          ],
          syntax: [
            { sym: String.raw`\bar R`, say: '“R bar”: an average return' },
          ],
          worked: {
            title: '100 funds over 15 years',
            steps: [
              '70 survived with an average 7% a year; 30 closed with an average 3% while they existed.',
              String.raw`\(\bar R_{\text{all}} = 0.7 \times 7 + 0.3 \times 3 = 4.9 + 0.9 = 5.8\%\).`,
              'The survivors-only figure (7%) overstates by 1.2 points a year.',
            ],
            why: [
              'split into survivors and closed funds',
              'weight each group by its share',
              'compare',
            ],
            answer: 'SPIVA reports correct for this; in its US data, more than half of funds disappear over 15–20 years.',
          },
        },
      ],
    },
    {
      id: 'active-share',
      title: 'Active share and persistence',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Active share} = \tfrac12\sum_i |w_{i,\text{fund}} - w_{i,\text{bench}}|`,
          caption: 'Cremers and Petajisto’s (2009) measure of how different a fund’s holdings are from its benchmark.',
          plain: 'Compare the fund’s weight in every stock with the benchmark’s weight, add the absolute differences, and halve. 0% means an index fund; 100% means no overlap. Funds with low active share but high fees (“closet indexers”) charge active prices for near-index results.',
          where: [
            { sym: String.raw`w_{i}`, def: 'weight of stock i in the fund or benchmark' },
          ],
          syntax: [
            { sym: String.raw`\tfrac12\sum|\cdot|`, say: 'half the sum of absolute differences' },
          ],
          worked: {
            title: 'A three-stock benchmark',
            steps: [
              'Benchmark: A 50%, B 30%, C 20%. Fund: A 40%, B 20%, C 20%, D (not in benchmark) 20%.',
              String.raw`Differences: \(|40-50| = 10\), \(|20-30| = 10\), \(|20-20| = 0\), \(|20-0| = 20\). Sum 40.`,
              String.raw`Active share \(= 40/2 = 20\%\).`,
            ],
            why: [
              'list weights, including stocks only one side holds',
              'absolute differences',
              'halve',
            ],
            answer: 'Active share 20%: mostly index-like. If this fund charged 1.5% a year, most of the fee would pay for holdings an index fund provides for 0.1%.',
          },
        },
        { t: 'p', text: 'S&P’s persistence scorecards repeatedly find that top-quartile funds in one period are no more likely than chance to stay top-quartile in the next. Active management has a better record in some less efficient areas (some small-cap and emerging markets, some bond categories), though results vary by period.' },
      ],
    },
  ],
  sources: [
    'Sharpe, W. F. (1991). The arithmetic of active management. Financial Analysts Journal, 47(1), 7–9.',
    'S&P Dow Jones Indices. SPIVA U.S. Scorecard and Persistence Scorecard (semi-annual).',
    'Cremers, K. J. M., & Petajisto, A. (2009). How active is your fund manager? Review of Financial Studies, 22(9), 3329–3365.',
    'Carhart, M. M. (1997). On persistence in mutual fund performance. Journal of Finance, 52(1), 57–82.',
  ],
  related: ['finance/philosophies/passive', 'finance/mutual-funds/costs-and-share-classes', 'finance/foundations/efficient-markets'],
}

export default guide
