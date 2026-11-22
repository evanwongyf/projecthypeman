import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every transaction on a public blockchain is recorded for all to see, which gives crypto investors a source of data that no stock market offers: how many addresses are active, how many coins moved today, how old the coins are, how much is on exchanges, and at what price each coin last changed hands. On-chain analysis turns this into indicators. The best known is the ratio of market value to realised value (MVRV), which compares the market price with the average price at which coins last moved, a rough estimate of holders’ cost basis. This guide describes the main on-chain metrics, works through MVRV with a live lab on a synthetic price path, shows how holder cohorts and exchange flows are read, and explains the limits: address clustering, exchange wallets, off-chain activity and the way thresholds drift over time.',
  nutshell: [
    '**Realised value** values each coin at the price when it last moved: it approximates the **aggregate cost basis** of holders.',
    '**MVRV = market cap ÷ realised cap**: above 1, the average holder is in profit; very high readings (above about 3 for Bitcoin historically) have marked euphoria; below 1, capitulation.',
    '**Exchange netflow** (coins moving onto minus off exchanges): large inflows suggest intent to sell; outflows suggest accumulation in self-custody.',
    '**HODL waves** show the share of supply by age: when old coins start moving, long-term holders are selling.',
    'Limits: **addresses are not people**, exchange wallets mix many users, and **off-chain** and **layer-2** activity is invisible; thresholds change as the market grows.',
  ],
  sections: [
    {
      id: 'mvrv',
      title: 'MVRV: market value against cost basis',
      lead: 'A live lab on a synthetic price path.',
      blocks: [
        { t: 'fin-lab', viz: 'mvrv' },
        {
          t: 'math',
          tex: String.raw`\text{MVRV}=\frac{\text{Market cap}}{\text{Realised cap}},\qquad \text{Realised cap}=\sum_{i}P_{i}^{\text{last moved}}\,q_i,\qquad Z=\frac{\text{MC}-\text{RC}}{\sigma(\text{MC})}`,
          caption: 'MVRV, the realised capitalisation as the sum of each coin batch valued at the price when it last moved, and the MVRV Z-score.',
          where: [{ sym: 'P_i^{\\text{last moved}}', def: 'the price when batch i of coins last moved on the chain' }, { sym: 'q_i', def: 'the quantity in batch i' }, { sym: '\\sigma(\\text{MC})', def: 'the standard deviation of the market cap over history' }],
          syntax: [{ sym: '\\sum_iP_i^{\\text{last moved}}q_i', say: 'each coin priced when it last changed hands. Effect: coins that have not moved for years keep their old valuation. Why: the cost basis of a coin that has not been sold is the price when it was acquired.' }],
          worked: {
            title: 'Market value 1,300 against realised value 450 (US$ billion)',
            steps: ['MVRV = 1,300/450 = 2.9.', 'The average holder has a paper profit of 189% on cost basis; a fall of 65% would take the price to the average cost.', 'In the lab’s synthetic path, readings above 3 occur near the top of a cycle and readings below 1 near the bottom.'],
            answer: 'The indicator is informative about where the market is in a cycle but not about timing: readings above 3 have lasted many months in strong rallies. Over time the extremes have become lower, as the coin supply is held by more long-term holders and institutions; do not apply old thresholds mechanically.',
          },
        },
      ],
    },
    {
      id: 'metrics',
      title: 'The main on-chain metrics',
      lead: 'What each measures and how it misleads.',
      blocks: [
        {
          t: 'table',
          head: ['Metric', 'What it measures', 'Reading', 'Caveat'],
          rows: [
            ['Active addresses', 'Addresses that sent or received coins in a day', 'Rising: more usage or speculation', 'One user can control many addresses; exchanges bundle users'],
            ['Transaction count and value', 'Number and total value of transfers', 'Rising: more activity', 'Includes internal exchange shuffling and mixing'],
            ['Hash rate and difficulty', 'The computing power securing a proof-of-work network', 'Rising: miners confident; security higher', 'Follows price with a lag; reflects energy prices and hardware'],
            ['Exchange netflow and balances', 'Coins entering minus leaving exchange wallets', 'Large inflow: possible selling; outflow: accumulation', 'Exchange wallets are estimated; internal transfers can look like flows'],
            ['SOPR (spent output profit ratio)', 'Price sold ÷ price paid for coins moved that day', 'Above 1: coins sold at a profit; below 1: at a loss', 'Short-term noise; best used as a trend'],
            ['HODL waves / coin age bands', 'Share of supply last moved in each age range', 'A fall in old coin share: long-term holders are selling', 'Lost coins distort the older bands'],
            ['Whale activity', 'Addresses holding very large balances', 'Accumulation or distribution by large holders', 'Whales may be exchanges, funds or custodians'],
            ['Stablecoin supply', 'Dollar-pegged tokens available to buy crypto', 'Rising: more buying power on the sidelines', 'Used for lending and payments as well as trading'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Data sources', tag: 'providers', body: 'Free block explorers, Glassnode, CryptoQuant, Coin Metrics and Dune dashboards compute the indicators; definitions and address labels differ, so numbers vary between providers.' },
            { title: 'Clustering', tag: 'heuristics', body: 'Analysts group addresses likely to belong to one owner (for example those that spend together). The method is heuristic and can be wrong.' },
            { title: 'Layer-2 and off-chain', tag: 'invisible activity', body: 'A growing share of activity happens on layer-2 networks or inside exchanges, which the base-chain data may not show.' },
            { title: 'Regime change', tag: 'thresholds drift', body: 'Spot ETFs, custody products and a maturing holder base change the distribution of coin ownership, so historical levels are not fixed targets.' },
          ],
        },
        { t: 'dodont', do: ['Use on-chain indicators as context alongside price, liquidity and macro conditions', 'Compare an indicator with its own history on the same data provider', 'Look for confirmation among several indicators'], dont: ['Trade on a single threshold', 'Ignore that address and flow labels are estimates', 'Assume past extremes will repeat at the same levels'] },
      ],
    },
  ],
  sources: [
    'Mahmudov, M. & Puell, D. (2018). *Realized Cap and MVRV*. Coin Metrics and Glassnode research.',
    'Shapiro, A. et al. and Glassnode Academy: SOPR, HODL waves and exchange flow definitions (glassnode.com).',
    'Coin Metrics. *State of the Network* and data documentation (coinmetrics.io).',
    'Meiklejohn, S. et al. (2013). A fistful of bitcoins: characterizing payments among men with no names. *ACM IMC*.',
  ],
  related: ['finance/crypto-investing/valuing-crypto-assets', 'finance/crypto-investing/tokenomics-and-supply', 'finance/crypto-investing/crypto-portfolio-and-risk'],
}

export default guide
