import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Indexes are not static. Companies are added and removed, weights are capped and floats updated, usually at scheduled quarterly reviews. Because trillions of dollars track indexes, these changes move prices, create costs for index funds and opportunities for traders.',
  nutshell: [
    '**Reconstitution** changes members; **rebalancing** adjusts weights.',
    'The **index inclusion effect**: stocks added to the S&P 500 historically jumped several per cent around the announcement (Shleifer, 1986); the effect has shrunk in recent decades (Patel and Welch, 2017).',
    'Index funds trade at the close on the effective date to minimise tracking error, and may pay for predictability.',
    '**Turnover** is low for cap-weighted indexes (prices move weights automatically) and higher for equal-weight and factor indexes.',
  ],
  sections: [
    {
      id: 'turnover',
      title: 'Turnover and its cost',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Turnover} = \tfrac12\sum_i |w_i^{\text{new}} - w_i^{\text{old}}|, \qquad \text{Cost} \approx \text{Turnover} \times c`,
          caption: 'One-way turnover at a rebalance, and the approximate trading cost with cost c per unit traded.',
          plain: 'Add up how much each weight must change, ignoring signs, and halve it (because every sale funds a purchase). That is the share of the portfolio that must be traded. Multiply by the cost of trading (spread plus impact) to get the drag on returns.',
          where: [
            { sym: String.raw`w_i^{\text{old}}, w_i^{\text{new}}`, def: 'weights before and after the rebalance' },
            { sym: 'c', def: 'round-trip trading cost as a fraction of the amount traded' },
          ],
          syntax: [
            { sym: '|x|', say: '“the absolute value of x”' },
          ],
          worked: {
            title: 'Rebalancing an equal-weight three-stock index',
            steps: [
              String.raw`After a quarter, weights drifted to 38%, 30%, 32%; target 33.3% each.`,
              String.raw`Changes: \(|33.3 - 38| = 4.7\), \(|33.3 - 30| = 3.3\), \(|33.3 - 32| = 1.3\); sum 9.3.`,
              String.raw`Turnover \(= 9.3/2 = 4.65\%\) of the portfolio.`,
              String.raw`At \(c = 0.2\%\): cost \(= 0.0465 \times 0.002 = 0.0093\%\) per rebalance, about 0.04% a year with four rebalances.`,
            ],
            why: [
              'current versus target weights',
              'absolute changes',
              'halve: buys equal sells',
              'multiply by cost per unit traded',
            ],
            answer: 'Small for this example; for an equal-weight 500-stock index with annual turnover around 20–30% and higher small-cap costs, drag is a meaningful fraction of a per cent.',
          },
        },
      ],
    },
    {
      id: 'effects',
      title: 'Index effects',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Inclusion effect', body: 'Announcement of addition to a major index has been followed by price rises as index funds must buy. Front-running traders and better anticipation have reduced the effect.' },
          { title: 'Deletion effect', body: 'Removed stocks often fall as funds sell, and sometimes rebound afterwards.' },
          { title: 'Russell reconstitution', body: 'The annual Russell rebalance in June is one of the highest-volume trading days in US markets.' },
          { title: 'Concentration feedback', body: 'Passive flows buy in proportion to market cap, which some argue reinforces the largest companies; evidence on the size of this effect is debated.' },
        ] },
      ],
    },
  ],
  sources: [
    'Shleifer, A. (1986). Do demand curves for stocks slope down? Journal of Finance, 41(3), 579–590.',
    'Patel, N., & Welch, I. (2017). Extended stock returns in response to S&P 500 index changes. Review of Asset Pricing Studies, 7(2), 172–208.',
    'Petajisto, A. (2011). The index premium and its hidden cost for index funds. Journal of Empirical Finance, 18(2), 271–288.',
  ],
  related: ['finance/indexes/construction-maths', 'finance/indexes/smart-beta', 'finance/strategy-library/event-and-seasonal'],
}

export default guide
