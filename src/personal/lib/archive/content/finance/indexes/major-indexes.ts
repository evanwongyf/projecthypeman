import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A handful of indexes dominate news, benchmarks and index funds. Knowing how each is built tells you what a fund tracking it really holds, and why two “world” or “US” funds can behave differently.',
  nutshell: [
    '**US**: S&P 500 (large caps, float cap, committee), Dow Jones Industrial Average (30 stocks, price-weighted), Nasdaq-100 (largest non-financial Nasdaq stocks, modified cap), Russell 2000 (small caps).',
    '**Global**: MSCI World (developed markets), MSCI Emerging Markets, MSCI ACWI (both), FTSE All-World.',
    '**Asia**: Nikkei 225 (price-weighted), TOPIX, Hang Seng, CSI 300, Straits Times Index (STI).',
    'Cap-weighted indexes have become **concentrated**: in 2024–25 the ten largest S&P 500 stocks made up roughly a third or more of the index.',
  ],
  sections: [
    {
      id: 'table',
      title: 'The major indexes',
      blocks: [
        { t: 'table', head: ['Index', 'Members', 'Weighting', 'Notes'], rows: [
          ['S&P 500', 'About 500 large US companies', 'Free-float cap', 'Committee selection; profitability rule; the most-tracked index'],
          ['Dow Jones Industrial Average', '30 US blue chips', 'Price', 'Oldest major US index (1896); price weighting is a historical quirk'],
          ['Nasdaq-100', '100 largest non-financial Nasdaq-listed', 'Modified cap', 'Tech-heavy; caps to limit concentration'],
          ['Russell 2000', 'Small US companies (ranks ~1,001–3,000)', 'Float cap', 'Annual reconstitution (moving to semi-annual)'],
          ['MSCI World', 'About 1,400 large and mid caps in 23 developed markets', 'Float cap', 'About 70% US'],
          ['MSCI Emerging Markets', 'Large and mid caps in about 24 emerging markets', 'Float cap', 'China, India, Taiwan, Korea largest'],
          ['MSCI ACWI / FTSE All-World', 'Developed + emerging', 'Float cap', 'A “whole world” benchmark'],
          ['FTSE 100', '100 largest UK-listed', 'Float cap', 'Many global multinationals'],
          ['Nikkei 225', '225 Japanese stocks', 'Price (adjusted)', 'A few high-priced stocks have large influence'],
          ['TOPIX', 'Broad Japanese market', 'Float cap', 'Better measure of Japan than the Nikkei'],
          ['Hang Seng Index', 'Largest Hong Kong-listed', 'Float cap, capped weights', 'Many mainland Chinese companies'],
          ['CSI 300', '300 large Shanghai and Shenzhen A-shares', 'Float cap', 'Mainland China benchmark'],
          ['Straits Times Index (STI)', '30 largest SGX-listed', 'Float cap', 'Banks are a large share; calculated by FTSE Russell with SPH and SGX'],
        ], caption: 'Details change; check the provider’s current factsheet.' },
      ],
    },
    {
      id: 'concentration',
      title: 'Measuring concentration',
      blocks: [
        {
          t: 'math',
          tex: String.raw`N_{\text{eff}} = \frac{1}{\sum_i w_i^2}`,
          caption: 'The effective number of stocks: how many equally weighted stocks would give the same concentration.',
          plain: 'An index may hold 500 stocks, but if a few have very large weights, it behaves like a much smaller portfolio. Squaring the weights and adding them (the Herfindahl index) measures concentration; one over that is the effective number of stocks.',
          where: [
            { sym: String.raw`w_i`, def: 'weight of stock i (as a fraction)' },
            { sym: String.raw`N_{\text{eff}}`, def: 'effective number of stocks' },
          ],
          syntax: [
            { sym: String.raw`\sum_i w_i^2`, say: '“the sum of squared weights”' },
          ],
          worked: {
            title: 'A stylised 500-stock index',
            steps: [
              'Ten stocks at 3.5% each (35% total); the other 490 share 65% equally (about 0.133% each).',
              String.raw`Top ten: \(10 \times 0.035^2 = 10 \times 0.001225 = 0.01225\).`,
              String.raw`Others: \(490 \times 0.00133^2 = 490 \times 0.00000176 \approx 0.00086\).`,
              String.raw`\(N_{\text{eff}} = 1/(0.01225 + 0.00086) = 1/0.01311 \approx 76\).`,
            ],
            why: [
              'a stylised version of a concentrated index',
              'squared weights of the big ten',
              'squared weights of the rest',
              'invert the sum',
            ],
            answer: 'A 500-stock index with 35% in ten names behaves like roughly 76 equally weighted stocks. Diversification is lower than the headline count suggests.',
          },
        },
      ],
    },
  ],
  sources: [
    'S&P Dow Jones Indices; MSCI; FTSE Russell; Nikkei; Hang Seng Indexes; SGX: index factsheets and methodologies.',
    'Hirschman, A. O. (1964). The paternity of an index. American Economic Review, 54(5), 761.',
  ],
  related: ['finance/indexes/construction-maths', 'finance/investing-analysis/singapore-market-and-reits', 'finance/indexes/rebalancing-and-index-effects'],
}

export default guide
