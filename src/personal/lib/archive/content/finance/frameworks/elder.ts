import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Dr Alexander Elder, a psychiatrist turned trader, designed the **triple screen** in 1986 to solve a basic conflict: trend-following indicators and oscillators often disagree. His answer is to use them on different timeframes, each as a filter, and to pair the system with strict money-management rules.',
  nutshell: [
    '**Screen 1**: the long-term trend, on a timeframe five times longer than your trading one (e.g. weekly for daily trading).',
    '**Screen 2**: an oscillator on the trading timeframe to find pullbacks against that trend.',
    '**Screen 3**: an entry technique, such as a buy stop above the previous high.',
    'Money management: the **2% rule** (risk per trade) and the **6% rule** (monthly loss limit).',
  ],
  sections: [
    {
      id: 'screens',
      title: 'The three screens',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Screen 1: the tide', body: 'On the weekly chart, use the slope of the MACD histogram or a 13-week EMA. Only trade in that direction.' },
            { title: 'Screen 2: the wave', body: 'On the daily chart, wait for an oscillator (force index, stochastic) to move against the weekly trend: a dip in an uptrend.' },
            { title: 'Screen 3: the ripple', body: 'Place a buy stop just above the previous day’s high, so you enter only if the market resumes upward.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{Force index}_t = (C_t - C_{t-1}) \times V_t,\qquad \text{signal} = \text{EMA}_2(\text{Force index})`,
          where: [
            { sym: 'C_t, C_{t-1}', def: 'Today’s and yesterday’s closing price' },
            { sym: 'V_t', def: 'Today’s volume' },
          ],
          syntax: [
            { sym: 'C_t - C_{t-1}', say: String.raw`Read "C t minus C t minus 1". Today’s close less yesterday’s close: the sign gives direction, the size gives the strength of the move.` },
            { sym: String.raw`\text{EMA}_2`, say: 'Read "the two-day exponential moving average". An average that gives recent days more weight, with a smoothing weight of 2/3 on the newest value and 1/3 on the previous average.' },
          ],
          worked: {
            title: 'Three days of a stock',
            steps: [
              String.raw`Day 1: close rises 51.80 to 52.40 on volume of 2,000,000. Force \(= 0.60 \times 2{,}000{,}000 = +1{,}200{,}000\).`,
              String.raw`Day 2: close falls by 0.30 on volume of 1,500,000. Force \(= -0.30 \times 1{,}500{,}000 = -450{,}000\).`,
              String.raw`Day 3: close rises by 0.50 on volume of 1,800,000. Force \(= +900{,}000\).`,
              String.raw`Smooth, seeding the average with day 1 (1,200,000). Day 2: \(\tfrac{2}{3}(-450{,}000) + \tfrac{1}{3}(1{,}200{,}000) = 100{,}000\).`,
              String.raw`Day 3: \(\tfrac{2}{3}(900{,}000) + \tfrac{1}{3}(100{,}000) \approx 633{,}333\).`,
            ],
            answer: 'The smoothed force index slipped to 100,000 after the down day, then recovered to about 633,000, showing buying pressure resuming.',
          },
          caption: 'Elder’s force index combines three things a price chart alone hides: direction (up or down), the size of the move, and how much volume backed it. A big positive number means a large up move happened on heavy volume, real conviction, not a drift on thin trading. A dip below zero in a weekly uptrend is a buying opportunity, because it marks a pullback: selling pressure, but against the larger trend, not a reversal of it.',
        },
        {
          t: 'metric',
          name: 'the force index',
          shows: 'how much conviction was behind a single period’s price move, by multiplying the size of the change by the volume that traded. A price move on heavy volume moves the force index far from zero; the same move on thin volume barely registers, even though the chart looks identical either way.',
          eli5: 'A punch only does damage if there is weight behind it. Price change is the direction of the punch; volume is the weight. The force index is the punch landing, it tells you whether a move actually hurt, not just which way the arm swung.',
          higher: 'A large positive reading means buyers pushed price up on heavy volume, real buying pressure, not drift. In Elder’s system this matters most as confirmation on screen 3: a strong positive force index on the breakout day supports taking the trade.',
          lower: 'A large negative reading means sellers hit the market hard on heavy volume. In an established uptrend, a short, sharp dip into negative territory (screen 2) is exactly the pullback Elder wants to buy, as long as the weekly trend (screen 1) is still up.',
          typical: 'The raw number has no fixed scale since it depends on the stock’s own price and volume, so it is read relative to its own recent history (or smoothed with a short EMA) rather than against a universal threshold like RSI’s 70/30.',
        },
      ],
    },
    {
      id: 'money',
      title: 'The 2% and 6% rules',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Risk per trade} \le 2\%\ \text{of equity},\qquad \text{Stop trading for the month if losses} \ge 6\%`,
          syntax: [
            { sym: String.raw`\le 2\%`, say: 'Read "at most 2 percent". A ceiling: you may risk less, never more.' },
            { sym: String.raw`\ge 6\%`, say: 'Read "6 percent or more". Once month-to-date losses reach this level, the rule tells you to stop.' },
          ],
          worked: {
            title: 'A 50,000 account',
            steps: [
              String.raw`Maximum risk per trade: \(2\% \times 50{,}000 = 1{,}000\).`,
              String.raw`Buy at 40.00 with a stop at 38.50: risk per share \(= 1.50\). Shares: \(1{,}000/1.50 = 666.7\), rounded down to 666 (risk \(666 \times 1.50 = 999\)).`,
              String.raw`Monthly limit: \(6\% \times 50{,}000 = 3{,}000\).`,
              String.raw`Three full-size losses of about 1,000 each reach the limit: trading stops until next month.`,
              String.raw`Six straight losers at 2% would cost \(1 - 0.98^6 \approx 11.4\%\) of equity.`,
            ],
            answer: 'Position size is capped at 666 shares, three full losses hit the 3,000 monthly limit, and even six consecutive stops cost only 11.4% of the account.',
          },
          caption: 'The 2% rule protects against a single disaster: even six losing trades in a row only costs about 12% of equity, not a career-ending drawdown. The 6% rule is the circuit breaker, if losses reach that in a month, Elder’s advice is to stop trading entirely until the next month, on the theory that a losing streak this size usually means something is wrong with the trader’s judgement, not just bad luck, and more trades will only compound the damage.',
        },
        { t: 'fin-tool', tool: 'position' },
        { t: 'callout', tone: 'fact', title: 'From psychiatry to trading', text: 'Elder argued that trading success is mostly psychological, and his book *Trading for a Living* (1993) devotes as much space to the trader’s mind as to indicators. He compared undisciplined trading to gambling addiction.' },
      ],
    },
  ],
  sources: ['Elder, A. (1993). *Trading for a Living*. Wiley.', 'Elder, A. (2014). *The New Trading for a Living*. Wiley.'],
  related: ['finance/technical/momentum', 'finance/technical/risk-management', 'finance/frameworks/trading-plan'],
}

export default guide
