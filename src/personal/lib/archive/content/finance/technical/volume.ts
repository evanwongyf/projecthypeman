import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Volume, the number of shares or contracts traded, shows how much conviction lies behind a price move. A breakout on heavy volume tells a different story from the same breakout on light volume. Two volume tools stand out: **on-balance volume** and the **volume-weighted average price**.',
  nutshell: [
    'Volume should expand in the direction of the trend (Dow’s fifth tenet).',
    'High volume at a breakout suggests real participation; low volume suggests it may fail.',
    '**OBV** adds the day’s volume on up days and subtracts it on down days, building a running total.',
    '**VWAP** is the average price weighted by volume: the benchmark big institutions measure their trades against.',
  ],
  sections: [
    {
      id: 'reading',
      title: 'Reading volume',
      blocks: [
        {
          t: 'table',
          head: ['Price', 'Volume', 'Typical reading'],
          rows: [
            ['Rising', 'Rising', 'Healthy uptrend: buyers are committed'],
            ['Rising', 'Falling', 'Rally losing participation; be wary'],
            ['Falling', 'Rising', 'Strong selling pressure'],
            ['Falling', 'Falling', 'Selling drying up; decline may be ending'],
            ['Huge spike after a long move', 'Very high', 'Possible exhaustion or capitulation'],
          ],
        },
      ],
    },
    {
      id: 'obv',
      title: 'On-balance volume',
      blocks: [
        {
          t: 'math',
          tex: String.raw`OBV_t = OBV_{t-1} + \begin{cases} +V_t & \text{if } C_t > C_{t-1} \\ 0 & \text{if } C_t = C_{t-1} \\ -V_t & \text{if } C_t < C_{t-1} \end{cases}`,
          where: [{ sym: 'V_t', def: 'Volume traded in period t' }],
          caption: 'The level of OBV does not matter; its direction does. Rising OBV with a flat price suggests quiet accumulation.',
          syntax: [
            { sym: String.raw`OBV_t`, say: String.raw`Read "OBV at time t": the subscript is the period. \(OBV_{t-1}\) is "OBV one period earlier" (yesterday).` },
            { sym: String.raw`\begin{cases} a & \text{if } x \\ b & \text{otherwise} \end{cases}`, say: String.raw`Read as "it depends": check each condition from the top and use the first line which is true.` },
            { sym: String.raw`C_t > C_{t-1}`, say: String.raw`Read "C t greater than C t minus 1": today's close is higher than yesterday's close.` },
          ],
          worked: {
            title: String.raw`Five days of OBV`,
            steps: [
              String.raw`Given closes 50.0, 50.4, 50.2, 50.2, 50.9 and volumes (thousands) 1200, 800, 1000, 700, 1500. Start \(OBV_1 = 0\).`,
              String.raw`Day 2: close up (50.4 > 50.0), add 800: \(OBV_2 = 0 + 800 = 800\).`,
              String.raw`Day 3: close down (50.2 < 50.4), subtract 1000: \(OBV_3 = 800 - 1000 = -200\).`,
              String.raw`Day 4: close unchanged, add 0: \(OBV_4 = -200\).`,
              String.raw`Day 5: close up, add 1500: \(OBV_5 = -200 + 1500 = 1300\).`,
            ],
            answer: String.raw`OBV ends at +1,300 thousand shares: the biggest volume came on an up day, so buyers had the upper hand.`,
          },
        },
        {
          t: 'metric',
          name: 'on-balance volume (OBV)',
          shows: 'A running tally of "volume voting" with price each day, all of a day\'s volume is added when price closes up, subtracted when it closes down. The absolute level of OBV is meaningless (it depends entirely on where you started counting); what matters is whether the line is trending up, trending down, or diverging from price itself.',
          eli5: 'Imagine keeping a running scoreboard where every day you add all of that day\'s "votes" (shares traded) to the Yes column if the stock went up, or the No column if it went down, and track Yes minus No over time. The actual number on the scoreboard means nothing, what matters is whether the scoreboard is climbing (growing conviction from buyers) or falling (growing conviction from sellers).',
          higher: 'OBV rising means more volume has been flowing through up days than down days recently, heavier trading is happening on the days price rises, a sign of genuine buying conviction behind the move. Rising OBV while price is flat or only gently rising is read as quiet accumulation, buyers building positions before the price fully reflects it.',
          lower: 'OBV falling means heavier volume is showing up on down days, distribution, or selling pressure, even if the price itself has not fallen much yet. A falling OBV while price keeps rising is a classic bearish divergence: fewer people are participating in each new high, a warning the rally may be running out of real support.',
          typical: 'Read OBV\'s slope and its relationship to price trend, never its absolute level; a sustained trend in OBV in the same direction as price confirms the move, while OBV moving opposite to price (a divergence) is the signal traders watch most closely.',
        },
        { t: 'fin-tool', tool: 'indicators', focus: 'obv' },
        { t: 'callout', tone: 'fact', title: 'Granville’s theory', text: 'Joseph Granville popularised OBV in 1963, arguing that "volume precedes price". He became famous for market calls in the 1970s and 80s, and for some spectacularly wrong ones afterwards.' },
      ],
    },
    {
      id: 'vwap',
      title: 'VWAP',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{VWAP} = \frac{\sum_{i} \tilde P_i\, V_i}{\sum_i V_i},\qquad \tilde P_i = \frac{H_i + L_i + C_i}{3}`,
          where: [{ sym: String.raw`\tilde P_i`, def: 'The typical price of period i' }],
          caption: 'Usually reset each day and calculated on intraday bars. An institution buying below the day’s VWAP got a better-than-average price.',
          syntax: [
            { sym: String.raw`\sum_{i}`, say: String.raw`Read "the sum over i": work out what follows for every bar \(i\) and add the results.` },
            { sym: String.raw`\tilde P_i`, say: String.raw`Read "P tilde i": the tilde marks a derived price, here the typical price for bar \(i\), not a raw quote.` },
            { sym: String.raw`\frac{\sum \tilde P_i V_i}{\sum V_i}`, say: String.raw`A volume-weighted average: the top is total money traded, the bottom is total shares. Divide.` },
          ],
          worked: {
            title: String.raw`VWAP over three bars`,
            steps: [
              String.raw`Given three bars with (H, L, C) of (10.5, 9.9, 10.2), (11.0, 10.2, 10.9), (11.2, 10.7, 11.1) and volumes 2000, 5000, 3000.`,
              String.raw`Typical prices: \(\tilde P_1 = 30.6/3 = 10.20\), \(\tilde P_2 = 32.1/3 = 10.70\), \(\tilde P_3 = 33.0/3 = 11.00\).`,
              String.raw`Numerator: \(10.20 \times 2000 + 10.70 \times 5000 + 11.00 \times 3000 = 20{,}400 + 53{,}500 + 33{,}000 = 106{,}900\).`,
              String.raw`Denominator: \(2000 + 5000 + 3000 = 10{,}000\).`,
              String.raw`\(\text{VWAP} = 106{,}900 / 10{,}000 = 10.69\).`,
            ],
            answer: String.raw`VWAP is 10.69; a buyer filling below that did better than the volume-weighted average.`,
          },
        },
        {
          t: 'example',
          title: 'Three trades',
          lines: [
            { label: 'Trades', text: '100 shares at $10, 300 at $11, 100 at $12' },
            { label: 'Simple average', text: '\\((10 + 11 + 12)/3 = 11.00\\)' },
            { label: 'VWAP', text: '\\((100\\cdot10 + 300\\cdot11 + 100\\cdot12)/500 = 5500/500 = 11.00\\)' },
            { label: 'Change one', text: 'if 300 shares traded at $12 instead: \\((1000 + 1100 + 3600)/500 = 11.40\\)' },
          ],
        },
        {
          t: 'metric',
          name: 'price relative to VWAP',
          shows: 'Whether the current price is above or below the average price the day\'s trading volume actually changed hands at, the benchmark for whether a trade today got a better or worse price than the "typical" trade of the session. Because it is weighted by volume, a VWAP is harder for a single large trade to distort than a simple price average.',
          eli5: 'If a food market sold 100 apples at $1, then 300 more at $1.10 as it got busier, a simple average of the two prices is $1.05, but the volume-weighted average is closer to $1.08, because so much more was sold at the higher price. VWAP is the "real" typical price people actually paid, not just the midpoint of the quoted prices.',
          higher: 'Price trading above VWAP means buyers currently active are paying more than the volume-weighted average for the session, often read as a sign the day\'s buying is in control. Institutional traders buying above VWAP are, on average, paying worse prices than the typical trade that day.',
          lower: 'Price trading below VWAP means current trades are happening cheaper than the session\'s volume-weighted average, often read as sellers in control, or an opportunity for buyers to get a below-average price. Large institutional orders are frequently programmed to try to buy below VWAP and sell above it, to beat the average trader\'s outcome for the day.',
          typical: 'VWAP usually resets at the start of each trading session and is most meaningful intraday; it is less a "good or bad level" metric and more a reference line, many large institutions are formally measured on whether their executions beat or lagged VWAP for the day.',
        },
      ],
    },
  ],
  sources: ['Granville, J. E. (1963). *Granville’s New Key to Stock Market Profits*. Prentice-Hall.', 'Berkowitz, S. A., Logue, D. E., & Noser, E. A. (1988). The total cost of transactions on the NYSE. *The Journal of Finance*, 43(1), 97–112.'],
  related: ['finance/technical/chart-patterns', 'finance/technical/what-is-ta'],
}

export default guide
