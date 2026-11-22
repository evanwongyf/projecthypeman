import type { Guide } from '../../../guide'
import { TRADE } from '../../../../finance/tradeExamples'

const guide: Guide = {
  intro:
    'An entry rule says when to open a position. Every entry style is a bet about how price behaves next: that strength continues (breakouts), that a trend resumes after a dip (pullbacks), or that stretched prices snap back (mean reversion). This guide sets out each style, what it assumes, where it fails, and the trade-off every entry faces between being early and being sure.',
  nutshell: [
    '**Breakout** entries buy strength: price clears a level and you assume it carries on. They have low win rates and large winners, and many false breaks.',
    '**Pullback** entries buy a dip inside a trend: higher win rate, but you miss trends that never dip.',
    '**Mean-reversion** entries buy weakness in a range: frequent small wins, rare large losses when the range breaks.',
    'Entering earlier gives a better price and a tighter stop but less confirmation; entering later is the reverse. The entry also matters less than people think: **where the stop sits and what the exit does** usually decide the outcome.',
  ],
  sections: [
    {
      id: 'breakout',
      title: 'Breakout entries',
      lead: 'Buy when price proves it can go higher.',
      blocks: [
        { t: 'p', text: 'A breakout entry buys when price closes above a prior high or resistance level (or sells when it closes below support). The assumption is that supply at that level has been absorbed, so there is little overhead resistance left and the move can extend. The Donchian channel and the Turtle rules are the classic mechanical form: buy the 20-day or 55-day high.' },
        {
          t: 'candles',
          rows: TRADE.breakout,
          title: 'Breakout, then a retest',
          lines: [{ y: 105.5, label: 'Resistance ≈ 105.5' }],
          points: [{ i: 24, label: 'Breakout: close above 105.5', at: 'high' }, { i: 31, label: 'Retest of the old resistance', at: 'low' }],
          caption: 'Price tests 105 at least three times and fails, then clears it with a wide candle. Two ways to enter: at the breakout candle (early, risks a false break), or at the retest (later, better price, may never come).',
        },
        {
          t: 'table',
          head: ['Variant', 'Entry', 'Strength', 'Weakness'],
          rows: [
            ['Stop order above the level', 'A buy-stop just above resistance triggers automatically', 'Never misses a move; no hesitation', 'Fills on wicks that reverse (false breaks); gets slippage'],
            ['Close-above confirmation', 'Wait for a candle close above the level, enter next open', 'Filters many wick-only false breaks', 'Worse price; sometimes a large part of the move is gone'],
            ['Retest entry', 'Wait for a pullback to the broken level, buy a hold', 'Tight stop just under the level; good R', 'The pullback often does not happen'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'False breakouts are the cost of doing business', text: 'Most breakouts fail, by design: a breakout system accepts many small losses (stop just back inside the range) for occasional large trends. Judge it on expectancy across many trades, not on the last failure.' },
      ],
    },
    {
      id: 'pullback',
      title: 'Pullback entries',
      lead: 'Buy the dip in a trend.',
      blocks: [
        { t: 'p', text: 'A pullback entry waits for a temporary move against an established trend, then enters in the trend direction as it resumes. The pullback gives a lower price than chasing, and a logical stop just beyond its extreme. The usual tools for "where it should stop" are a moving average, a Fibonacci retracement, or a prior swing level, and none of them is magic: they simply give you a place to define risk.' },
        {
          t: 'candles',
          rows: TRADE.pullbacks,
          title: 'An uptrend with three pullbacks',
          lines: [{ y: 100, label: 'Prior swing high ≈ 100 (becomes support)' }],
          points: [
            { i: 9, label: 'Pullback 1', at: 'low' },
            { i: 19, label: 'Pullback 2: holds the old high', at: 'low' },
            { i: 29, label: 'Pullback 3', at: 'low' },
          ],
          caption: 'Each dip finds support near the previous high. A buyer waiting for the dip enters near 95, 100 and 106 instead of at 100, 106 and 112. The risk is the dip that keeps going: the trend has ended and the "pullback" is a reversal.',
        },
        { t: 'p', text: 'The fundamental weakness is **selection**: you need the trend to exist and also to pull back. In a strong trend with shallow dips you may wait forever and miss the move; in a weak one a deep dip is just the start of a decline.' },
      ],
    },
    {
      id: 'reversion',
      title: 'Mean-reversion entries',
      lead: 'Buy weakness, sell strength, inside a range.',
      blocks: [
        { t: 'p', text: 'Mean reversion assumes price oscillates around a stable level, so a move away from it is likely to reverse. The entry is at an extreme: a lower Bollinger Band, a low RSI, a z-score below −2, or the bottom of a range. The exit is the middle or the opposite edge.' },
        {
          t: 'candles',
          rows: TRADE.range,
          title: 'A range: buy the lows, sell the highs',
          lines: [{ y: 104.5, label: 'Range top ≈ 104.5' }, { y: 96, label: 'Range bottom ≈ 96' }, { y: 100, label: 'Mid ≈ 100' }],
          points: [
            { i: 9, label: 'Buy', at: 'low' },
            { i: 14, label: 'Sell', at: 'high' },
            { i: 19, label: 'Buy', at: 'low' },
            { i: 24, label: 'Sell', at: 'high' },
            { i: 29, label: 'Buy', at: 'low' },
          ],
          caption: 'Four wins of about 8 points each. The cost: the one time the range breaks down, a trader who keeps buying "cheaper" has a growing loss with no limit unless a stop exists.',
        },
        {
          t: 'math',
          tex: String.raw`z_t = \frac{P_t-\mu_t}{\sigma_t}`,
          caption: 'The z-score: how many standard deviations price is from its recent mean.',
          where: [
            { sym: 'P_t', def: 'the price now' },
            { sym: '\\mu_t,\\ \\sigma_t', def: 'the mean and standard deviation of price over a recent window (for example 20 bars)' },
          ],
          syntax: [
            { sym: 'P_t-\\mu_t', say: 'the distance of price from its mean, in price units. Effect: negative below the mean, positive above. Why: mean reversion is a statement about distance from a typical level.' },
            { sym: '\\sigma_t', say: 'the typical size of a move in the window. Dividing by it makes the measure comparable across assets and calm or wild periods. Effect: a 3-point deviation is huge in a quiet market and ordinary in a wild one.' },
          ],
          worked: {
            title: 'A z-score entry',
            steps: ['20-bar mean \\(\\mu = 100\\), standard deviation \\(\\sigma = 2\\), price \\(P = 95.6\\).', '\\(z = (95.6-100)/2 = -2.2\\).', 'Rule: buy when \\(z < -2\\), exit at \\(z = 0\\), stop at \\(z = -3.5\\).'],
            answer: 'A buy signal, with the target at the 100 mean (+4.4 points) and a stop at 93, which is 2.6 points away. If price keeps falling, the stop ends the idea.',
          },
        },
        { t: 'callout', tone: 'warn', title: 'The payoff shape', text: 'Mean reversion tends to have a **high win rate with a poor payoff ratio**: many small wins and occasional large losses. It looks safe until the one regime change. Position size and a hard stop matter more here than anywhere.' },
      ],
    },
    {
      id: 'timing',
      title: 'Early versus confirmed',
      lead: 'Every entry trades price for certainty.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Anticipate (early)', 'Confirm (late)'],
          rows: [
            ['Entry price', 'Better', 'Worse'],
            ['Stop distance', 'Tight, so more shares for the same risk', 'Wider'],
            ['Hit rate', 'Lower: more entries into moves that never come', 'Higher'],
            ['Typical cost', 'Many small stop-outs', 'A smaller share of each move'],
          ],
        },
        { t: 'p', text: 'Neither is correct in the abstract. Because filters throw away part of every move, they only help if the avoided losers cost more than the lost winners. That is a question to answer with data (see the testing guide), not with how the last few trades felt.' },
        { t: 'p', text: '**Before any entry, write down:**' },
        {
          t: 'checklist',
          items: [
            'What is the setup, in words a stranger could apply?',
            'Where is the stop, and is it set by the chart rather than by what I can afford?',
            'What is the position size that makes that stop 1R?',
            'What is the planned exit (target, trail, time)?',
            'What would make me skip it (no clean level, spread too wide, event risk)?',
          ],
        },
      ],
    },
  ],
  sources: [
    'Covel, M. (2009). *Trend Following*. FT Press.',
    'Faith, C. (2007). *Way of the Turtle*. McGraw-Hill.',
    'Brock, W., Lakonishok, J. & LeBaron, B. (1992). Simple technical trading rules and the stochastic properties of stock returns. *Journal of Finance*, 47(5).',
    'Connors, L. & Alvarez, C. (2009). *Short Term Trading Strategies That Work*. TradingMarkets.',
  ],
  related: ['finance/trading/exit-types', 'finance/trading/testing-entries-and-exits', 'finance/technical/trends', 'finance/technical/chart-patterns', 'finance/frameworks/turtles'],
}

export default guide
