import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Funds are built for different jobs: growth, income, stability, a target date, or exposure to one sector or theme. Matching the fund type to the job, and understanding its risks, matters more than picking the “best” fund within a type.',
  nutshell: [
    '**Equity funds** for long-term growth; **bond funds** for income and stability; **money market funds** for cash.',
    '**Balanced** and **multi-asset** funds mix them; **target-date** funds shift from stocks to bonds as a date approaches.',
    '**Index funds** track a benchmark at low cost; **active funds** try to beat one.',
    '**Sector and thematic** funds are concentrated and often launched after a theme has already risen.',
  ],
  sections: [
    {
      id: 'table',
      title: 'Fund types',
      blocks: [
        { t: 'table', head: ['Type', 'Holds', 'Typical role', 'Main risks'], rows: [
          ['Global equity', 'Shares worldwide', 'Long-term growth', 'Market falls of 30–50%'],
          ['Regional or country equity', 'Shares in one region', 'Targeted exposure', 'Concentration, currency'],
          ['Sector / thematic', 'One industry or theme (AI, clean energy)', 'Satellite bet', 'Concentration, hype cycles'],
          ['Government bond', 'Sovereign bonds', 'Stability, diversification', 'Interest-rate risk'],
          ['Corporate / high-yield bond', 'Company bonds', 'Income', 'Credit and default risk'],
          ['Money market', 'Very short-term deposits and bills', 'Cash parking', 'Low returns, small credit risk'],
          ['Balanced / multi-asset', 'Stocks and bonds', 'One-fund portfolio', 'Mix may not suit you'],
          ['Target-date', 'Glide path from stocks to bonds', 'Retirement saving', 'Glide path assumptions'],
          ['Income / dividend', 'High-yield assets', 'Regular payouts', 'Payouts from capital; yield traps'],
          ['Index', 'A benchmark’s constituents', 'Low-cost core', 'Tracks the market down as well as up'],
        ] },
        { t: 'callout', tone: 'warn', title: 'Distribution versus return', text: 'Some income funds pay a fixed distribution (say 6% a year) even when the fund earns less, partly returning your own capital. Check the total return, not just the payout.' },
      ],
    },
  ],
  sources: [
    'Morningstar. Global Category Classifications.',
    'Monetary Authority of Singapore. MoneySense: unit trusts.',
  ],
  related: ['finance/mutual-funds/how-they-work', 'finance/mutual-funds/choosing-funds', 'finance/assets/bonds'],
}

export default guide
