import type { Guide } from '../../../guide'
import { TRADE } from '../../../../finance/tradeExamples'

const guide: Guide = {
  intro:
    'The exit decides how much of an idea you keep. A stop caps the loss, a target banks a gain, a trail follows a trend, and a time stop frees capital from trades that go nowhere. This guide covers each exit, how to set it without guessing, and the one trade-off underneath all of them: tight exits cut losses but also cut winners.',
  nutshell: [
    'Set the **stop** where the trade idea is proven wrong (below a swing low, or a multiple of **ATR** away), then size the position so that distance equals 1R.',
    'A **fixed target** gives a known payoff but caps the best trades; a **trailing stop** lets winners run but gives back some profit.',
    'A **chandelier stop** is the highest high minus a multiple of ATR: it adapts to volatility instead of using a fixed percentage.',
    'A **time stop** closes trades that have not worked within a set number of bars; **partial exits** bank some profit and trade a smaller position.',
  ],
  sections: [
    {
      id: 'stops',
      title: 'Where to put the stop',
      lead: 'The stop belongs to the idea, not to your wallet.',
      blocks: [
        { t: 'p', text: 'A stop should sit at the price where the reason for the trade no longer holds: just beyond the swing low that a pullback entry relied on, just back inside the range for a breakout. Choosing a distance because it matches the loss you can afford puts the stop in a random place that the market will find. Size the position to the stop, not the stop to the position.' },
        {
          t: 'table',
          head: ['Stop type', 'Rule', 'Good for', 'Weakness'],
          rows: [
            ['Percent', 'Exit if price falls x% from entry', 'Simple', 'Ignores volatility: too tight in a wild market, loose in a calm one'],
            ['Structural', 'Just beyond the swing low / level the setup relies on', 'Pullbacks and breakouts', 'Distance varies, so size varies'],
            ['ATR-based', 'Entry − k × ATR (often k = 2 to 3)', 'Adapts to the market’s noise', 'Needs a choice of k'],
            ['Volatility trail (chandelier)', 'Highest high − k × ATR, ratcheting up only', 'Trends', 'Gives back k × ATR from the peak'],
            ['Time', 'Exit after N bars without progress', 'Freeing capital', 'May exit just before the move'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{Stop}_{\text{long}} = P_{\text{entry}} - k\cdot \text{ATR}_n,\qquad \text{Size} = \frac{f\cdot E}{k\cdot \text{ATR}_n}`,
          caption: 'An ATR stop and the position size that makes the distance to it equal the amount you risk.',
          where: [
            { sym: 'k', def: 'a multiple of ATR, for example 2' },
            { sym: '\\text{ATR}_n', def: 'average true range over n bars: the typical daily range' },
            { sym: 'f,\\ E', def: 'fraction of equity risked per trade (e.g. 1%) and the account equity' },
          ],
          syntax: [
            { sym: 'k\\cdot\\text{ATR}_n', say: 'a stop distance measured in units of normal movement. Effect: increasing k widens the stop and cuts premature stop-outs but raises the cost of each one. Why: a distance smaller than ordinary noise will usually be hit by chance.' },
            { sym: 'f\\cdot E', say: 'the cash amount at risk, e.g. 1% of $50,000 = $500. Effect: fixes the loss on a stop-out regardless of the stock. Why: size is derived, not chosen.' },
            { sym: '\\dfrac{f E}{k\\,\\text{ATR}}', say: 'cash risked divided by the risk per share gives the number of shares. Effect: volatile stocks get smaller positions, so each trade carries the same risk.' },
          ],
          worked: {
            title: 'ATR sizing',
            steps: ['Equity \\(E = \\$50{,}000\\), risk \\(f = 1\\%\\), so $500 is at risk.', 'Entry 120, ATR(14) = 3, k = 2: stop = 120 − 6 = 114.', 'Size = \\(500/6 = 83\\) shares.'],
            answer: 'Buy 83 shares (about $9,960) with a stop at 114. A stop-out loses about $500 (more if the price gaps).',
          },
        },
      ],
    },
    {
      id: 'targets',
      title: 'Targets and the trade-off with trails',
      lead: 'Bank it, or let it run.',
      blocks: [
        { t: 'p', text: 'A **fixed target** sets the profit in advance, often as a multiple of the risk (2R or 3R), or at the next resistance. It raises the win rate and lowers the average winner. A **trailing stop** has no target: the stop follows price, and the position is closed when price reverses by the trail distance. It wins less often but its best winners are uncapped.' },
        {
          t: 'candles',
          rows: TRADE.trend,
          title: 'A trend with a chandelier trail',
          lines: [{ y: 100, label: 'Entry 100' }, { y: 93, label: 'Initial stop' }, { y: 123, label: '+3R target (R = 7.7)' }],
          points: [{ i: 35, label: 'Peak ≈ 133', at: 'high' }, { i: 38, label: 'Trail hit ≈ 122', at: 'low' }],
          segments: [
            { from: [0, 93], to: [10, 100], label: 'Stop ratchets up', dashed: true },
            { from: [10, 99], to: [34, 122], dashed: true },
          ],
          caption: 'A 3R target would have sold near 123 and missed the extra 10 points; the trail exits near 122 after the peak at 133 and keeps about 22 points. In a trendless market the target wins and the trail loses.',
        },
      ],
    },
    {
      id: 'partial',
      title: 'Time stops, breakeven and partial exits',
      lead: 'Managing the middle of a trade.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Time stop', tag: 'capital', body: 'If a breakout has not moved within, say, 5 to 10 bars, the idea is stale: exit and use the capital elsewhere. Backtests of mean-reversion strategies often find that trades not working by day N rarely recover.' },
            { title: 'Moving to breakeven', tag: 'psychology', body: 'Raising the stop to entry after a gain feels safe, but it puts the stop inside normal noise, so many winners are stopped out for zero. It lowers the risk of loss and the expectancy at the same time.' },
            { title: 'Partial exit', tag: 'variance', body: 'Selling half at 1R and trailing the rest smooths the equity curve and keeps part of a big winner. It does not add edge by itself: the expected value is a weighted mix of the two exits.' },
            { title: 'Exit on signal', tag: 'reversal', body: 'Close when the entry condition reverses (a moving-average cross, a close below the 20-day low). Simple, and consistent with an entry rule that is symmetric.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`E[R] = w\,R_1 + (1-w)\,R_2`,
          caption: 'Expected result of a split exit: a fraction w closed at one target and the rest at another.',
          where: [{ sym: 'w', def: 'the fraction of the position closed at the first exit' }, { sym: 'R_1,\\ R_2', def: 'the average result (in R) of the first and second parts' }],
          syntax: [{ sym: 'w R_1 + (1-w) R_2', say: 'a weighted average. Effect: moving w toward the early target lowers variance and the average win together. Why: the split is a mix, not a free lunch.' }],
          worked: {
            title: 'Half at 1R, half trailed',
            steps: ['w = 0.5, first half exits at 1R; the trailed half averages 2.4R when it wins and 0R when stopped at breakeven.', 'If the trailed half wins 40% of the time: \\(R_2 = 0.4(2.4) + 0.6(0) = 0.96\\).', '\\(E[R] = 0.5(1) + 0.5(0.96) = 0.98R\\) on the winners’ side.'],
            answer: 'The mix is worth 0.98R per trade before losses on stop-outs, with a much smoother result than holding everything.',
          },
        },
        { t: 'callout', tone: 'tip', title: 'No exit is best', text: 'Which exit is better depends on the entry and the market. Test the exit separately from the entry (see the testing guide), because an entry that looks bad may just be paired with the wrong exit.' },
      ],
    },
  ],
  sources: [
    'Wilder, J. W. (1978). *New Concepts in Technical Trading Systems*. Trend Research.',
    'Kaufman, P. (2013). *Trading Systems and Methods* (5th ed.). Wiley.',
    'Tharp, V. K. (2006). *Trade Your Way to Financial Freedom* (2nd ed.). McGraw-Hill.',
    'Le Beau, C. (1999). *Computer Analysis of the Futures Market* (chandelier exit). McGraw-Hill.',
  ],
  related: ['finance/trading/how-orders-work', 'finance/trading/risk-reward-and-expectancy', 'finance/trading/sizing-and-ruin', 'finance/technical/volatility', 'finance/technical/risk-management'],
}

export default guide
