import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A strategy’s paper profit is not what it keeps. Trading consumes liquidity, and the price moves against the trader as the order gets larger. Market microstructure studies how prices form in the limit order book, and execution research asks how to trade a large order at the lowest total cost. This guide covers the spread, the square-root impact law, and the trade-off between trading fast and trading slowly.',
  nutshell: [
    'The **quoted spread** is only part of the cost. For larger orders, **market impact** dominates and grows roughly with the **square root** of order size.',
    '**Impact law:** \\(\\text{cost} \\approx Y\\,\\sigma\\sqrt{Q/V}\\), with order size \\(Q\\), daily volume \\(V\\) and volatility \\(\\sigma\\); \\(Y\\) is about 1 for many markets.',
    'Slicing an order lowers impact but exposes you to price risk while you wait: the **Almgren–Chriss** trade-off.',
    '**Implementation shortfall** is the benchmark that counts all costs from the decision price.',
  ],
  sections: [
    {
      id: 'spread',
      title: 'Why there is a spread',
      lead: 'Three costs that market makers charge for.',
      blocks: [
        { t: 'p', text: 'Market makers quote a bid and an ask. The distance between them pays for three things: the cost of holding inventory, the cost of processing orders, and **adverse selection**: some of the people who trade with them know more than they do. The adverse selection part is a permanent price effect: the price moves toward the informed trader’s view after the trade.' },
        {
          t: 'math',
          tex: String.raw`\text{half-spread}=\frac{P_{\text{ask}}-P_{\text{bid}}}{2\,P_{\text{mid}}},\qquad \text{realised spread}=\text{half-spread}-\text{(price move after the trade)}`,
          caption: 'The quoted half-spread, and the realised spread that the market maker actually keeps.',
          where: [{ sym: 'P_{\\text{mid}}', def: 'the mid-price' }],
          syntax: [
            { sym: '(P_{\\text{ask}}-P_{\\text{bid}})/2P_{\\text{mid}}', say: 'the cost, as a fraction of price, of crossing the spread one way. Effect: a round trip costs twice this. Why: you buy at the ask and sell at the bid.' },
            { sym: '\\text{price move after the trade}', say: 'if the price keeps moving in the direction of your trade, the dealer was picked off and keeps less than the quoted spread. Effect: the realised spread can be near zero or negative against informed flow.' },
          ],
          worked: {
            title: 'A tight stock',
            steps: ['Bid 99.98, ask 100.02, mid 100.00.', 'Half-spread = 0.02/100 = 0.02% = 2 basis points; round trip 4 bps.', 'If the mid moves up 1 bp on average after customer buys, the dealer keeps 1 bp of the 2.'],
            answer: 'A trader who turns over a portfolio ten times a year at 4 bps per round trip pays 0.4% a year to the spread, before impact and fees.',
          },
        },
      ],
    },
    {
      id: 'impact',
      title: 'The square-root impact law',
      lead: 'Big orders move the price.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{\Delta P}{P}\approx Y\,\sigma_{d}\sqrt{\frac{Q}{V}}`,
          caption: 'The empirical square-root law for the average price impact of a metaorder.',
          where: [{ sym: 'Q', def: 'the number of shares traded in the order' }, { sym: 'V', def: 'average daily volume in shares' }, { sym: '\\sigma_d', def: 'daily volatility' }, { sym: 'Y', def: 'a constant of order 1 (about 0.5 to 1.5 depending on the market)' }],
          syntax: [
            { sym: 'Q/V', say: 'the order as a fraction of daily volume (participation). Effect: bigger relative to the market means more impact. Why: you consume more of the available liquidity.' },
            { sym: '\\sqrt{\\cdot}', say: 'impact is concave: doubling the order raises impact by 41%, not 100%. Effect: large trades are cheaper per share than small ones, but still costly in total. It has been found in equities, futures, options and bitcoin.' },
            { sym: '\\sigma_d', say: 'volatile stocks are harder to trade: the same participation moves the price more. Effect: the cost scales with the volatility.' },
          ],
          worked: {
            title: 'Buying 5% of a day’s volume',
            steps: ['σ_d = 2%, Q/V = 0.05, Y = 1.', 'Impact ≈ 0.02 × √0.05 = 0.02 × 0.2236 = 0.447%.', 'On a $10 million order, that is about $44,700, on top of the spread.', 'At 20% of volume: 0.02 × 0.447 = 0.89%, doubling impact for four times the size.'],
            answer: 'The cost of trading 5% of daily volume is about 45 basis points. A strategy with a gross edge of 30 bps per trade cannot be run at this size.',
          },
        },
        { t: 'quant-viz', viz: 'impact' },
      ],
    },
    {
      id: 'tradeoff',
      title: 'Fast or slow: the execution trade-off',
      lead: 'Impact against risk.',
      blocks: [
        { t: 'p', text: 'Trading a large order slowly reduces impact (you take liquidity gradually), but the price can move against you while you wait. Almgren and Chriss (2000) formalised this: minimise expected cost plus a penalty on its variance. A risk-neutral trader slices evenly over time (TWAP); a risk-averse one trades faster, front-loading the order.' },
        {
          t: 'table',
          head: ['Algorithm', 'What it does', 'Benchmark'],
          rows: [
            ['TWAP', 'Equal slices through time', 'Time-weighted average price'],
            ['VWAP', 'Slices in proportion to expected volume through the day', 'Volume-weighted average price'],
            ['POV / participation', 'Trade a fixed share (e.g. 10%) of the market’s volume', 'Arrival or VWAP'],
            ['Implementation shortfall', 'Front-loaded, balances impact against price risk', 'The price when the decision was made'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{IS}=\frac{\sum_i q_i\,(P_i - P_{\text{decision}})}{\sum_i q_i\,P_{\text{decision}}}`,
          caption: 'Implementation shortfall for a buy order executed in fills of q_i at price P_i.',
          where: [{ sym: 'P_{\\text{decision}}', def: 'the price at the time the decision to trade was made' }],
          syntax: [{ sym: 'P_i - P_{\\text{decision}}', say: 'how much worse than the decision price each fill was. Effect: includes the spread, impact and drift while waiting. Why: it measures what the strategy designer would have got on paper versus what was received. Unfilled shares should be counted at the final price, or the measure rewards not trading.' }],
          worked: {
            title: 'A buy of 10,000 shares',
            steps: ['Decision price 50.00. Fills: 4,000 at 50.04, 4,000 at 50.10, 2,000 at 50.20.', 'Average fill = (200,160 + 200,400 + 100,400)/10,000 = 50.096.', 'IS = (50.096 − 50)/50 = 0.19% = 19 bps.'],
            answer: 'The order cost 19 basis points relative to the decision price: $960 on a $500,000 trade.',
          },
        },
      ],
    },
  ],
  sources: [
    'Almgren, R. & Chriss, N. (2000). Optimal execution of portfolio transactions. *Journal of Risk*, 3(2).',
    'Bouchaud, J.-P., Bonart, J., Donier, J. & Gould, M. (2018). *Trades, Quotes and Prices*. Cambridge University Press.',
    'Tóth, B. et al. (2011). Anomalous price impact and the critical nature of liquidity in financial markets. *Physical Review X*, 1.',
    'Harris, L. (2003). *Trading and Exchanges*. Oxford University Press.',
  ],
  related: ['finance/trading/how-orders-work', 'finance/quant/backtesting-and-overfitting', 'finance/foundations/markets'],
}

export default guide
