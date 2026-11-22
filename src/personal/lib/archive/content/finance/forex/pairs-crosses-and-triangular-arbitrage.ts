import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Currency pairs fall into three families. The majors pair the dollar with the other large currencies; the crosses pair two non-dollar currencies, such as the euro and the yen; and the exotics pair a major currency with the currency of a smaller or emerging economy, such as the Singapore dollar or the Turkish lira. Because most trading goes through the dollar, a cross rate is derived from two dollar rates, and the quoted cross should equal the product of those rates. When it does not, a loop through three currencies would earn a risk-free profit: triangular arbitrage. In practice the gaps close in milliseconds. This guide explains the families, how to compute a cross rate from bids and asks (and why the cross spread is wider than the sum of the parts), how to invert a quote, and demonstrates triangular arbitrage and its costs with a live lab.',
  nutshell: [
    '**Majors**: EUR/USD, USD/JPY, GBP/USD, USD/CHF, USD/CAD, AUD/USD, NZD/USD; **crosses**: EUR/GBP, EUR/JPY, GBP/JPY; **exotics**: USD/SGD, USD/ZAR, USD/TRY and others.',
    'A cross rate is a **product or quotient** of two dollar rates: EUR/JPY = EUR/USD × USD/JPY.',
    'A quote is **inverted** by taking the reciprocal and swapping bid and ask: USD/SGD bid 1.3400 corresponds to SGD/USD ask 0.74627.',
    '**Triangular arbitrage** profits when the quoted cross differs from the implied cross by more than the cost of three trades.',
    'In the example the gap is **0.215%** (about €2,150 per €1 million) before costs; the three spreads cost about €300 at 0.01% each, so a gap this wide would be taken within moments.',
  ],
  sections: [
    {
      id: 'families',
      title: 'Majors, crosses and exotics',
      lead: 'Three families of pairs.',
      blocks: [
        {
          t: 'table',
          head: ['Family', 'Pairs', 'Liquidity', 'Typical spread', 'Notes'],
          rows: [
            ['Majors', 'EUR/USD, USD/JPY, GBP/USD, USD/CHF, USD/CAD, AUD/USD, NZD/USD', 'Highest', 'under 1 pip in normal conditions', 'Dollar on one side; the benchmark pairs'],
            ['Minor crosses', 'EUR/GBP, EUR/JPY, GBP/JPY, EUR/CHF, AUD/JPY', 'High', '1 to 3 pips', 'Priced through the dollar legs; popular in carry trades'],
            ['Exotics', 'USD/SGD, USD/ZAR, USD/TRY, USD/MXN, USD/THB, USD/CNH', 'Lower', 'several to tens of pips', 'Wider spreads, bigger swings, policy and political risk'],
            ['Non-deliverable pairs', 'USD/KRW, USD/INR, USD/IDR (offshore)', 'Specialist', 'varies', 'Settled in dollars because the currency is restricted onshore'],
          ],
          caption: 'Typical spreads are indicative; they depend on the broker, the time of day and market conditions.',
        },
        {
          t: 'math',
          tex: String.raw`S_{\text{EUR/JPY}}=S_{\text{EUR/USD}}\times S_{\text{USD/JPY}},\qquad S_{\text{B/A}}=\frac{1}{S_{\text{A/B}}},\qquad \text{Bid}_{\text{inv}}=\frac{1}{\text{Ask}},\quad\text{Ask}_{\text{inv}}=\frac{1}{\text{Bid}}`,
          caption: 'The cross-rate identity, the inverse of a quote, and how bid and ask swap on inversion.',
          where: [{ sym: 'S_{\\text{A/B}}', def: 'the price of one unit of A in units of B' }],
          syntax: [{ sym: '1/\\text{Ask}', say: 'the bid of the inverted pair. Effect: the dealer’s margin stays on the dealer’s side after inversion. Why: buying B with A at the dealer’s ask is selling A for B at the inverse of that price.' }],
          worked: {
            title: 'EUR/USD 1.0850 and USD/JPY 150.00',
            steps: ['Implied EUR/JPY = 1.0850 × 150.00 = 162.75.', 'The inverse of USD/SGD 1.3400 / 1.3402 (bid / ask) is SGD/USD = 1/1.3402 / 1/1.3400 = 0.74616 / 0.74627.', 'A cross priced through two legs has a spread of about the sum of the two: if each leg is 1 pip wide, the cross is about 2 pips (scaled by the price level).'],
            answer: 'Cross rates are not independent: they inherit the dollar rates. A trader who buys EUR/JPY is, in effect, long EUR/USD and long USD/JPY. Understanding the legs shows hidden exposures: a portfolio long EUR/JPY and long USD/JPY has twice the yen exposure.',
          },
        },
      ],
    },
    {
      id: 'arb',
      title: 'Triangular arbitrage',
      lead: 'A loop through three currencies.',
      blocks: [
        { t: 'fin-lab', viz: 'cross-rates' },
        {
          t: 'steps',
          items: [
            { title: 'Compute the implied cross', body: 'Multiply the two dollar rates: here 1.0850 × 150.00 = 162.75.' },
            { title: 'Compare with the quoted cross', body: 'If EUR/JPY is quoted at 163.10, the market values the euro 0.215% higher in yen than the dollar legs imply.' },
            { title: 'Find the loop', body: 'Sell euros for yen at 163.10, buy dollars with the yen at 150.00 and buy euros with the dollars at 1.0850: you end with more euros than you started with.' },
            { title: 'Subtract the costs', body: 'Each leg crosses a spread; a gap of 0.215% against costs of about 0.03% leaves a profit, but only if all three trades can be done at the quoted prices at the same moment.' },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Why it vanishes', tag: 'speed', body: 'High-frequency dealers watch these relationships and trade them within microseconds; the quoted prices adjust so that gaps larger than the costs do not last.' },
            { title: 'What remains', tag: 'tiny gaps', body: 'Gaps of a fraction of a pip may appear and disappear: they pay for those with the fastest connections and cheapest costs, not for retail traders.' },
            { title: 'Practical use', tag: 'checking quotes', body: 'The identity is useful to check that a broker’s cross quote is consistent and to understand hidden exposures.' },
            { title: 'Other arbitrage', tag: 'cross-currency basis', body: 'A more persistent gap arises between forward prices and interest rates: the cross-currency basis, which reflects demand for dollars (see the interest-rate-parity guide).' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'A quick check for yourself', text: 'Pick three currencies at a currency-converter site: convert 1,000 euros to dollars, then to yen, then back to euros. You will end with slightly fewer euros than you started with: the difference is the total of the spreads and fees, which is the real "arbitrage" ordinary customers face.' },
      ],
    },
  ],
  sources: [
    'Bank for International Settlements. Triennial Central Bank Survey: currency pairs (bis.org).',
    'Aiba, Y., Hatano, N., Takayasu, H., Marumo, K. & Shimizu, T. (2002). Triangular arbitrage as an interaction among foreign exchange rates. *Physica A*, 310, 467–479.',
    'Fenn, D. J. et al. (2009). The Mirage of triangular arbitrage in the spot foreign exchange market. *International Journal of Theoretical and Applied Finance*, 12(8), 1105–1123.',
    'Hull, J. C. (2022). *Options, Futures, and Other Derivatives*. Pearson (cross rates and forwards).',
  ],
  related: ['finance/forex/interest-rate-parity-and-carry', 'finance/assets/forex/basics', 'finance/forex/how-the-fx-market-works'],
}

export default guide
