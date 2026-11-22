import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    '“Lazy” portfolios are fixed mixes of a few broad funds, rebalanced occasionally. They need little time, are cheap, and avoid most behavioural mistakes. Their performance comes from asset allocation and discipline rather than prediction.',
  nutshell: [
    '**60/40**: 60% global stocks, 40% bonds: the classic balanced portfolio.',
    '**Three-fund**: home-market stocks, world stocks, bonds (Bogleheads).',
    '**Permanent portfolio** (Harry Browne): 25% each stocks, long bonds, gold, cash.',
    '**All Weather** (Bridgewater-inspired): risk-balanced across growth and inflation regimes, heavy in bonds.',
    'Rebalance on a **calendar** (annually) or with **bands** (when a weight drifts more than, say, 5 points).',
  ],
  sections: [
    {
      id: 'table',
      title: 'Portfolios compared',
      blocks: [
        { t: 'table', head: ['Portfolio', 'Mix', 'Strength', 'Weakness'], rows: [
          ['60/40', '60 stocks, 40 bonds', 'Simple, long record', 'Stocks dominate risk; bad in 2022 when both fell'],
          ['Three-fund', 'Home stocks, world stocks, bonds', 'Cheap, diversified', 'Home bias choice'],
          ['Permanent', '25 stocks, 25 long bonds, 25 gold, 25 cash', 'Smooth, small drawdowns', 'Lower long-run returns'],
          ['All Weather–style', '~30 stocks, ~55 bonds, ~15 gold and commodities', 'Balanced across regimes', 'Rate-sensitive; complex'],
          ['Target-date', 'Glide path', 'Automatic', 'One size fits all'],
        ] },
      ],
    },
    {
      id: 'drift',
      title: 'Drift and rebalancing',
      blocks: [
        {
          t: 'math',
          tex: String.raw`w_{s,1} = \frac{w_{s,0}(1 + R_s)}{w_{s,0}(1 + R_s) + w_{b,0}(1 + R_b)}`,
          caption: 'The stock weight after one period, before rebalancing.',
          plain: 'After stocks and bonds earn different returns, the mix drifts: the winner’s share grows. Rebalancing sells some of the winner and buys the loser to restore the target, keeping risk where you planned it.',
          where: [
            { sym: String.raw`w_{s,0}, w_{b,0}`, def: 'starting weights of stocks and bonds' },
            { sym: String.raw`R_s, R_b`, def: 'returns of stocks and bonds over the period' },
          ],
          syntax: [
            { sym: String.raw`w_{s,1}`, say: 'stock weight after one period' },
          ],
          worked: {
            title: 'A 60/40 portfolio after a strong year for stocks',
            steps: [
              String.raw`Stocks +20%, bonds +2%: values \(60 \times 1.2 = 72\), \(40 \times 1.02 = 40.8\).`,
              String.raw`\(w_s = 72/112.8 = 63.8\%\).`,
              'With a 5-point band (55–65%), no trade yet.',
              String.raw`Another +20% year for stocks, +2% bonds: \(86.4\) and \(41.6\); \(w_s = 86.4/128.0 = 67.5\%\): outside the band, rebalance to 60%.`,
            ],
            why: [
              'grow each part',
              'new stock weight',
              'inside the band: leave it',
              'two years of drift breach the band',
            ],
            answer: 'Bands trade less often than calendar rebalancing while keeping risk controlled. After rebalancing, sell about $9.6 of stocks per $128 of portfolio to return to 60%.',
          },
        },
      ],
    },
  ],
  sources: [
    'Browne, H. (1987). Why the Best-Laid Investment Plans Usually Go Wrong. William Morrow.',
    'Bogleheads. Three-fund portfolio (bogleheads.org wiki).',
    'Vanguard (2022). Rational rebalancing: An analytical approach to multiasset portfolio rebalancing.',
  ],
  related: ['finance/philosophies/allocation', 'finance/investing-process/dca-lump-sum-and-rebalancing', 'finance/mutual-funds/choosing-funds'],
}

export default guide
