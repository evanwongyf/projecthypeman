import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A stock market index is a number that summarises the prices of a defined basket of securities. When the news says “the market rose 1%”, it means an index did. Indexes serve as benchmarks for judging fund managers, as the basis for index funds and ETFs worth tens of trillions of dollars, and as the underlying for futures and options.',
  nutshell: [
    'An index is defined by a **methodology**: which securities are eligible, how they are weighted, and how and when it is rebalanced.',
    '**Index providers** (S&P Dow Jones Indices, MSCI, FTSE Russell, Nasdaq, STOXX) design and calculate indexes and license them.',
    'Indexes are **not investable directly**; funds track them, with small differences called tracking difference and tracking error.',
    'The choice of index shapes what a passive investor actually owns: countries, sectors, company sizes and concentration.',
  ],
  sections: [
    {
      id: 'uses',
      title: 'What indexes are used for',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Measuring the market', body: 'A quick summary of how a market or sector moved.' },
          { title: 'Benchmarks', body: 'Active funds are judged against an index that matches their investment universe.' },
          { title: 'Index funds and ETFs', body: 'Funds hold the index constituents (or a sample) to match its return at low cost.' },
          { title: 'Derivatives', body: 'Futures and options on indexes (e.g. S&P 500 futures, STI futures) for hedging and trading.' },
          { title: 'Research', body: 'Factor and asset-pricing research uses index returns as the “market”.' },
          { title: 'Policy and economics', body: 'Indexes feed into sentiment, central bank analysis and pension decisions.' },
        ] },
      ],
    },
    {
      id: 'rules',
      title: 'What defines an index',
      blocks: [
        { t: 'table', head: ['Rule', 'Questions it answers', 'Example'], rows: [
          ['Universe', 'Which exchanges, countries, asset types?', 'Companies listed in the US'],
          ['Eligibility', 'Minimum size, liquidity, free float, profitability?', 'S&P 500 requires positive earnings (sum of last four quarters and latest quarter)'],
          ['Selection', 'How many constituents; by rule or committee?', 'Nikkei 225: 225 stocks chosen by Nikkei; S&P 500: committee'],
          ['Weighting', 'Price, market cap, free float, equal, factor?', 'Most major indexes: free-float market cap'],
          ['Caps', 'Limits on any one stock or sector?', 'Hang Seng: individual weights capped'],
          ['Rebalancing', 'How often weights and members are reviewed?', 'Quarterly reviews are common'],
          ['Return type', 'Price, total (dividends reinvested), net (after withholding tax)?', 'MSCI publishes all three'],
        ] },
      ],
    },
  ],
  sources: [
    'S&P Dow Jones Indices. S&P U.S. Indices Methodology.',
    'MSCI. Global Investable Market Indexes Methodology.',
    'Bogle, J. C. (2017). The Little Book of Common Sense Investing (10th anniversary ed.). Wiley.',
  ],
  related: ['finance/indexes/construction-maths', 'finance/philosophies/passive', 'finance/assets/funds'],
}

export default guide
