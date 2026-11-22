import type { Guide } from '../../../guide'
import { TRADE } from '../../../../finance/tradeExamples'

const guide: Guide = {
  intro:
    'Before an entry or exit rule means anything, there is the question of how an order becomes a fill. A chart shows one price, but a market has two: what buyers will pay and what sellers will accept. This guide covers the order book, the main order types and where each fails, and the costs (spread, slippage, gaps) that separate a backtest from an account statement.',
  nutshell: [
    'A market has a **bid** (best price a buyer will pay) and an **ask** (best price a seller will accept). The gap is the **spread**, and a market order pays it.',
    'A **market order** fills now at whatever prices are available, so a large order **walks the book** and gets a worse average price. A **limit order** fixes the price but may never fill.',
    'A **stop order** becomes a market order when a trigger price trades, so in a gap it fills at the gap price, not the stop price.',
    'Costs are real and are best measured in **R**, the fraction of the amount risked: a cost of 0.1% on a trade risking 1% is a tenth of a unit of risk before any edge.',
  ],
  sections: [
    {
      id: 'book',
      title: 'The order book',
      lead: 'Two queues facing each other.',
      blocks: [
        { t: 'p', text: 'Most exchanges match orders using a **limit order book**: a list of resting buy orders (bids) and sell orders (asks) at each price, with the highest bid and lowest ask at the top. A trade happens when an incoming order meets a resting one. Orders at the same price are usually filled in the order they arrived (price-time priority).' },
        {
          t: 'table',
          head: ['Side', 'Price', 'Shares available'],
          rows: [
            ['Ask', '100.08', '1,800'],
            ['Ask', '100.06', '900'],
            ['Ask', '100.04', '600'],
            ['Ask (best ask)', '100.02', '400'],
            ['**Spread = 0.04**', '**mid = 100.00**', ''],
            ['Bid (best bid)', '99.98', '500'],
            ['Bid', '99.96', '700'],
            ['Bid', '99.94', '1,200'],
            ['Bid', '99.92', '2,000'],
          ],
          caption: 'A snapshot of a quiet stock. The quoted "price" is usually the last trade, or the mid-point; you cannot trade at the mid-point.',
        },
        { t: 'p', text: 'A **market buy** of 1,500 shares takes the asks from the bottom up until the order is filled. The average price paid is the share-weighted mean of the prices it consumed.' },
        {
          t: 'math',
          tex: String.raw`\bar{p} = \frac{\sum_i p_i\,q_i}{\sum_i q_i}, \qquad \text{slippage} = \frac{\bar{p}-p_{\text{mid}}}{p_{\text{mid}}}`,
          caption: 'The average fill price of an order that consumes several price levels, and its slippage against the mid-price.',
          where: [
            { sym: 'p_i,\\ q_i', def: 'the price and the quantity taken at the i-th level of the book' },
            { sym: 'p_{\\text{mid}}', def: 'the mid-price, the average of best bid and best ask, before the order' },
          ],
          syntax: [
            { sym: '\\sum_i p_i q_i', say: '"the sum of price times quantity": the total cash paid across every level. Effect: levels with more shares count for more. Why: the average price per share is total cash divided by total shares.' },
            { sym: '\\sum_i q_i', say: 'the total number of shares in the order. Dividing by it turns total cost into a per-share price.' },
            { sym: '\\dfrac{\\bar{p}-p_{\\text{mid}}}{p_{\\text{mid}}}', say: 'slippage as a fraction of the mid-price. Effect: positive when buying means you paid more than the mid. Why: measuring against the mid captures both the half-spread and the price impact of eating several levels.' },
          ],
          worked: {
            title: 'Buying 1,500 shares at market',
            steps: [
              '400 shares at 100.02 → $40,008. Next, 600 at 100.04 → $60,024. Then 500 of the 900 at 100.06 → $50,030.',
              'Total cost: \\(40{,}008 + 60{,}024 + 50{,}030 = \\$150{,}062\\) for 1,500 shares.',
              'Average price \\(\\bar p = 150{,}062/1{,}500 = 100.0413\\).',
              'Slippage against the mid of 100.00: \\(0.0413/100 = 0.041\\%\\), or about 4.1 basis points.',
            ],
            answer: 'The order paid 4.1 basis points over the mid-price, more than the 2 basis points of half-spread, because it walked up three levels.',
          },
        },
      ],
    },
    {
      id: 'types',
      title: 'The main order types',
      lead: 'What each one promises, and how it fails.',
      blocks: [
        {
          t: 'table',
          head: ['Order', 'What it does', 'Certain of…', 'Risk'],
          rows: [
            ['Market', 'Buy or sell now at the best available prices', 'Filling', 'Price: slippage in thin or fast markets'],
            ['Limit', 'Buy at this price or lower (sell at this price or higher), resting in the book', 'Price', 'Not filling; or filling only when the price is moving against you ("adverse selection")'],
            ['Stop (stop-loss)', 'Becomes a **market** order when the trigger price trades', 'Being triggered', 'Fills beyond the trigger in a gap or a fast market'],
            ['Stop-limit', 'Becomes a **limit** order when triggered', 'A price limit', 'May not fill at all, leaving you unprotected'],
            ['Trailing stop', 'A stop that follows the price at a fixed distance and never moves backwards', 'Locking in gains as they grow', 'Normal volatility can trigger it'],
            ['OCO / bracket', 'A pair (or trio) of linked orders: when one fills, the others cancel', 'A defined plan (stop and target) is in place', 'Platform and order-handling differences'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Time in force', tag: 'how long it lives', body: '**Day**: cancelled at the close. **GTC** (good till cancelled): stays until filled or cancelled, often with a limit of 30 to 90 days. **IOC** (immediate or cancel): fill what you can now, cancel the rest. **FOK** (fill or kill): fill all now or none.' },
            { title: 'The trade-off in one line', tag: 'price vs certainty', body: 'Every order trades **certainty of execution** against **control of price**. A market order buys certainty and gives up price; a limit order buys price and gives up certainty. There is no order that guarantees both.' },
          ],
        },
      ],
    },
    {
      id: 'gaps',
      title: 'Stops and gaps',
      lead: 'The price you set is not the price you get.',
      blocks: [
        { t: 'p', text: 'A stop is a conditional order, not a guarantee. Markets close overnight and prices can **gap**: open far from the previous close, after earnings or news, skipping every price in between. A stop at 98 in the chart below is triggered at the open, but the market order fills at the opening price of about 93.' },
        {
          t: 'candles',
          rows: TRADE.gap,
          title: 'A stop that is gapped through',
          lines: [{ y: 98, label: 'Stop at 98' }, { y: 100, label: 'Entry at 100' }],
          points: [{ i: 10, label: 'Gap open ≈ 93: stop fills here', at: 'low' }],
          caption: 'Planned loss: 2 points, which is 1R. Actual loss: about 7 points, which is 3.5R. Gap risk is why position size should assume the stop may not hold.',
        },
        {
          t: 'math',
          tex: String.raw`R_{\text{realised}} = \frac{P_{\text{exit}}-P_{\text{entry}}}{P_{\text{entry}}-P_{\text{stop}}}`,
          caption: 'The result of a long trade in units of the amount originally risked (R).',
          where: [
            { sym: 'P_{\\text{entry}},\\ P_{\\text{exit}},\\ P_{\\text{stop}}', def: 'the entry price, the price actually obtained on exit, and the planned stop price' },
          ],
          syntax: [
            { sym: 'P_{\\text{entry}}-P_{\\text{stop}}', say: 'the planned risk per share: the distance from entry to stop. Effect: it defines "1R". Why: position size is chosen so that this distance times the number of shares equals the amount you are willing to lose.' },
            { sym: 'P_{\\text{exit}}-P_{\\text{entry}}', say: 'the profit or loss per share actually realised. Effect: if the exit fills far below the stop, this is much more negative than −1R. Why: the stop price is a trigger, not a fill.' },
          ],
          worked: {
            title: 'The gap example',
            steps: ['Entry 100, stop 98, so the planned risk is 2 per share (1R).', 'The stop is triggered at the open and filled at 93.', '\\(R = (93-100)/(100-98) = -3.5\\).'],
            answer: 'A planned loss of 1R became 3.5R. If the position risked 1% of the account, the account lost 3.5%.',
          },
        },
      ],
    },
    {
      id: 'costs',
      title: 'Costs, measured in R',
      lead: 'Why a small cost can be a big deal.',
      blocks: [
        { t: 'p', text: 'Costs include the **spread** (you buy at the ask and sell at the bid), **slippage**, **commissions and fees**, and for some products **financing**. A strategy with a small edge per trade can be erased by them, and the way to see this is to express the cost in R, the same unit as the result.' },
        {
          t: 'math',
          tex: String.raw`\text{cost in } R = \frac{c}{|P_{\text{entry}}-P_{\text{stop}}|/P_{\text{entry}}}`,
          caption: 'Round-trip cost as a share of the price, divided by the stop distance as a share of the price.',
          where: [{ sym: 'c', def: 'round-trip cost as a fraction of the price (spread, slippage and fees, both ways)' }],
          syntax: [
            { sym: 'c', say: 'the total cost to enter and exit, as a fraction of the price. Effect: it is paid on every trade, win or lose. Why: it is subtracted from the outcome whichever way the price moves.' },
            { sym: '|P_{\\text{entry}}-P_{\\text{stop}}|/P_{\\text{entry}}', say: 'the stop distance as a fraction of the price: how much price movement 1R represents. Effect: a tight stop makes 1R small, so the same cost is a bigger fraction of it. Why: R is defined by the stop distance.' },
          ],
          worked: {
            title: 'Tight and wide stops',
            steps: ['Round-trip cost c = 0.10% of price.', 'A stop 0.5% away: cost = 0.10/0.5 = **0.20R** per trade.', 'A stop 3% away: cost = 0.10/3 = **0.033R** per trade.'],
            answer: 'With a tight stop, costs eat 0.2R before any edge: a strategy needs an expectancy well above that. Short-term, tight-stop trading is therefore most sensitive to spreads and slippage.',
          },
        },
        { t: 'callout', tone: 'tip', title: 'A backtest rule', text: 'Always include costs, and use **pessimistic** fills: buy at the ask and sell at the bid, never at the mid or the close. If a strategy only works with free, perfect execution, it does not work.' },
      ],
    },
  ],
  sources: [
    'Harris, L. (2003). *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press.',
    'Johnson, B. (2010). *Algorithmic Trading and DMA*. 4Myeloma Press.',
    'Tharp, V. K. (2006). *Trade Your Way to Financial Freedom* (2nd ed.). McGraw-Hill.',
  ],
  related: ['finance/trading/entry-types', 'finance/trading/exit-types', 'finance/quant/execution-and-microstructure', 'finance/foundations/markets', 'finance/technical/risk-management'],
}

export default guide
