import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every fund publishes a monthly factsheet and, in Singapore, a prospectus and a Product Highlights Sheet. They contain almost everything you need to judge the fund, if you know where to look. This guide walks through an illustrative factsheet line by line.',
  nutshell: [
    'Read the **objective and benchmark** first: they tell you what the fund is trying to do and against what.',
    'Check **costs** (expense ratio, sales charge, platform fees) and **share class** details.',
    'Look at **holdings and exposures** (top 10, sectors, countries, currency) to see what you would really own.',
    'Judge **performance against the benchmark over 5–10 years**, with risk numbers, not last year alone.',
  ],
  sections: [
    {
      id: 'walkthrough',
      title: 'An illustrative factsheet',
      blocks: [
        { t: 'table', head: ['Line', 'Example', 'What to ask'], rows: [
          ['Objective', '“Long-term capital growth by investing in global equities”', 'Does it match my goal and horizon?'],
          ['Benchmark', 'MSCI World Net Total Return', 'Is it a fair, total-return benchmark?'],
          ['Fund size', 'S$850m', 'Very small funds may close; very large active funds may struggle to be nimble'],
          ['Inception', '2008', 'Long enough to judge over a cycle?'],
          ['Share class', 'SGD, accumulating, unhedged', 'Right currency and income policy?'],
          ['Expense ratio', '1.65% a year', 'Compare with index alternatives (often 0.1–0.3%)'],
          ['Sales charge', 'Up to 5%', 'Can I buy without it on a platform?'],
          ['Top 10 holdings', '38% of the fund', 'Concentrated or diversified? Overlap with what I already own?'],
          ['Sector / country weights', 'Technology 28%, US 66%', 'Hidden concentration?'],
          ['Performance (annualised 5y)', 'Fund 9.1%, benchmark 10.2%', 'Behind by about its fees'],
          ['Volatility, Sharpe, tracking error', '15.8%, 0.45, 3.9%', 'Higher risk than the benchmark?'],
          ['Risk rating', '6 on a 1–7 scale', 'Can I tolerate a 40% fall?'],
        ] },
        { t: 'callout', tone: 'tip', title: 'Read the Product Highlights Sheet', text: 'In Singapore, the Product Highlights Sheet summarises the fund’s key risks, fees and how to exit in plain language. It is required for retail funds and is often more useful than the long prospectus.' },
      ],
    },
  ],
  sources: [
    'Monetary Authority of Singapore. Guidelines on the Product Highlights Sheet.',
    'Morningstar. How to read a fund factsheet.',
  ],
  related: ['finance/mutual-funds/performance-measurement', 'finance/mutual-funds/choosing-funds', 'finance/mutual-funds/costs-and-share-classes'],
}

export default guide
