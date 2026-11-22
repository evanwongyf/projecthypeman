import type { Guide } from '../../../guide'
import { pathRows } from '../../../../finance/series'

const BREAKOUT = pathRows([100, 104, 99, 103.5, 100, 104.2, 112, 109, 118, 106], 4, 41)

const guide: Guide = {
  intro:
    'In 1983, commodities trader Richard Dennis bet his partner William Eckhardt that trading could be taught. He recruited about twenty people from newspaper ads, trained them for two weeks, and gave them real money to trade by a complete set of mechanical rules. Many of the "Turtles" made fortunes. The rules were later published in full, and here they are.',
  nutshell: [
    '**N** is volatility: a 20-day average of the true range.',
    'A **unit** is sized so that a 1N move equals 1% of the account.',
    'Entries: **20-day** breakouts (System 1) or **55-day** breakouts (System 2).',
    'Stops at **2N**; add a unit every **½N** in your favour, up to 4 units.',
    'Exits: a **10-day** low (System 1) or **20-day** low (System 2) against the position.',
  ],
  sections: [
    {
      id: 'n',
      title: 'Volatility (N) and position size',
      blocks: [
        {
          t: 'math',
          tex: String.raw`N_t = \frac{19\,N_{t-1} + TR_t}{20},\qquad TR = \max(H - L,\ |H - C_{t-1}|,\ |L - C_{t-1}|)`,
          where: [
            { sym: 'H, L', def: 'Today’s high and low' },
            { sym: 'C_{t-1}', def: 'Yesterday’s close' },
            { sym: 'TR', def: 'True range: the largest of three measures of the day’s price travel, so gaps are captured too' },
          ],
          syntax: [
            { sym: String.raw`N_t = \frac{19\,N_{t-1} + TR_t}{20}`, say: 'Read "N today equals 19 times yesterday’s N plus today’s true range, all divided by 20". Each day, 95% of the old N is kept and 5% of the new true range is added.' },
            { sym: String.raw`\max(a,\ b,\ c)`, say: 'Read "the largest of a, b and c". Evaluate all three and keep the biggest.' },
            { sym: String.raw`|H - C_{t-1}|`, say: 'Read "the absolute value of H minus yesterday’s close". The bars drop the sign, so a gap up and a gap down both count as positive distance.' },
          ],
          worked: {
            title: 'A gap-up day in crude oil',
            steps: [
              'Given: yesterday’s close 71.00; yesterday’s N = 1.50; today’s high 74.00 and low 72.60.',
              String.raw`Three candidates: \(H - L = 1.40\); \(|H - C_{t-1}| = 3.00\); \(|L - C_{t-1}| = 1.60\).`,
              String.raw`True range: \(TR = \max(1.40,\ 3.00,\ 1.60) = 3.00\). The gap is captured.`,
              String.raw`Update: \(N_t = (19 \times 1.50 + 3.00)/20 = 31.5/20 = 1.575\).`,
            ],
            answer: 'The gap lifts true range to 3.00, yet smoothing moves N only from 1.50 to 1.575, so one wild day does not whip the position sizing.',
          },
          caption: 'N is a 20-day exponential average of the true range: a smoothed ATR, in the same price units as the market itself (dollars per barrel, points per contract). It is not a signal to trade on, it is the Turtles’ volatility ruler, used only to size positions, so that a wild market and a calm one each contribute roughly the same dollar risk per unit.',
        },
        {
          t: 'metric',
          name: 'N (the Turtles’ volatility unit)',
          shows: 'how much a market typically moves in a day, in its own price units, smoothed to avoid reacting to a single wild day. Everything else in the system, unit size, stop distance, how far price must move before adding another unit, is measured in multiples of N, not in fixed dollar or percentage terms.',
          eli5: 'N is like asking "how choppy is the sea today?" before deciding how big a boat to take out. A rough sea (high N) means you take a smaller boat (fewer contracts) for the same acceptable risk of capsizing; a calm sea (low N) means you can take a bigger one.',
          higher: 'A rising N means the market has become more volatile, the same dollar move now represents a smaller fraction of a typical day’s range. The system responds automatically by sizing new units smaller, so a single day’s swing still only risks about 1% of the account, same as in a calm market.',
          lower: 'A falling N means the market has calmed down, a given dollar move is now a bigger deal relative to recent ranges. Units get sized larger to keep risk per unit at roughly 1% of account equity, which also means a return to volatility can suddenly make those larger positions hurt more, until N catches up.',
          typical: 'N is always read relative to the price level of the instrument, never against a universal scale, a $1.50 N on $70 crude oil (about 2% of price) and a 2-point N on a $25 stock (about 8% of price) can represent very different relative volatility despite looking similar in isolation.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Unit} = \frac{0.01 \times \text{Account}}{N \times \text{dollars per point}}`,
          where: [
            { sym: 'Account', def: 'Total account equity' },
            { sym: 'N', def: 'The current volatility measure from above, in price units' },
            { sym: 'dollars per point', def: 'The value of a one-point move in one contract' },
          ],
          syntax: [
            { sym: String.raw`0.01 \times \text{Account}`, say: 'Read "one percent of the account". This is the dollar amount a unit may lose if the market moves one N against you.' },
            { sym: String.raw`N \times \text{dollars per point}`, say: 'Read "N times dollars per point". It converts N, in price points, into the dollar swing of one contract. Divide by it to turn dollars of risk into a number of contracts.' },
          ],
          worked: {
            title: 'Gold futures, account 250,000',
            steps: [
              'Given: N = 12 dollars an ounce; one contract is 100 ounces, so one point (1 dollar) is worth 100 dollars per contract.',
              String.raw`Dollar volatility per contract: \(12 \times 100 = 1{,}200\).`,
              String.raw`Risk budget: \(0.01 \times 250{,}000 = 2{,}500\).`,
              String.raw`Unit: \(2{,}500/1{,}200 \approx 2.08\), rounded down to 2 contracts.`,
              String.raw`Check: a 2N stop (24 dollars) loses \(2 \times 24 \times 100 = 4{,}800\), which is \(1.92\%\) of the account.`,
            ],
            answer: 'Trade 2 contracts: each 1N move costs 2,400 (about 1%), and a 2N stop costs about 1.9% of the account.',
          },
          caption: 'This is the whole point of N: it rearranges "risk 1% of the account" into a number of contracts, so that however volatile the market currently is, a single unit still risks about the same 1% if it moves against you by one N. A choppier market (bigger N) automatically produces a smaller unit; a calmer one produces a bigger unit, for the same intended risk.',
        },
        {
          t: 'example',
          title: 'Crude oil, account $1,000,000',
          lines: [
            { label: 'N', text: '$1.50 a barrel; one contract = 1,000 barrels, so $1 = $1,000 per contract' },
            { label: 'Dollar volatility', text: '\\(1.50 \\times 1{,}000 = \\$1{,}500\\) per contract' },
            { label: 'Unit', text: '\\(10{,}000 / 1{,}500 = 6.67\\), so 6 contracts' },
            { label: 'Stop', text: '2N = $3.00 below entry: a loss of about 2% of the account' },
          ],
        },
      ],
    },
    {
      id: 'rules',
      title: 'Entries, adds, stops and exits',
      blocks: [
        {
          t: 'candles',
          rows: BREAKOUT,
          title: 'A 20-day breakout, with pyramiding',
          height: 340,
          lines: [{ y: 104.7, label: '20-day high: entry' }, { y: 108.1, label: '10-day low: exit' }],
          boxes: [
            { from: 0, to: 19, label: 'Range builds', color: 'var(--lavender)' },
            { from: 20, to: 31, label: 'Units added every ½N', color: 'var(--mint)' },
            { from: 32, to: 35, label: '10-day low hit: exit', color: 'var(--pink)' },
          ],
        },
        {
          t: 'table',
          head: ['Rule', 'System 1 (short-term)', 'System 2 (long-term)'],
          rows: [
            ['Entry', 'Price exceeds the 20-day high (or low, for shorts)', 'Price exceeds the 55-day high (or low)'],
            ['Filter', 'Skip if the last 20-day breakout would have been a winner', 'None: take every signal'],
            ['Initial stop', '2N from entry', '2N from entry'],
            ['Adding', 'One unit every ½N of favourable movement, up to 4; raise all stops to 2N below the latest entry', 'Same'],
            ['Exit', '10-day low (for longs)', '20-day low (for longs)'],
          ],
        },
        {
          t: 'table',
          head: ['Portfolio limit', 'Maximum units'],
          rows: [
            ['Single market', '4'],
            ['Closely correlated markets', '6'],
            ['Loosely correlated markets', '10'],
            ['One direction (all longs or all shorts)', '12'],
          ],
        },
        { t: 'fin-tool', tool: 'indicators', focus: 'donchian' },
        { t: 'callout', tone: 'fact', title: 'The rules were not the secret', text: 'Curtis Faith, one of the most successful Turtles, wrote that many people who later had the rules failed to follow them. The edge was in the discipline to take every signal through long losing streaks, which the Turtles found psychologically brutal.' },
      ],
    },
  ],
  sources: ['Faith, C. M. (2007). *Way of the Turtle*. McGraw-Hill.', 'Covel, M. W. (2007). *The Complete TurtleTrader*. HarperCollins.', 'Original Turtle Trading Rules (2003), published online by former Turtles.'],
  related: ['finance/philosophies/trend-following', 'finance/technical/volatility', 'finance/technical/risk-management'],
}

export default guide
