import type { Guide } from '../../../guide'
import { pathRows } from '../../../../finance/series'

const CROSS = pathRows([112, 104, 95, 92, 97, 106, 112, 118], 7, 21)

const guide: Guide = {
  intro:
    'A moving average smooths prices by averaging the last \\(n\\) periods, so the trend shows through the noise. It is the most widely used indicator in technical analysis, and the building block of many others (MACD, Bollinger Bands). The trade-off is always the same: smoother means slower.',
  nutshell: [
    'The **simple moving average (SMA)** weights the last \\(n\\) prices equally.',
    'The **exponential moving average (EMA)** weights recent prices more, with weights shrinking by a constant factor.',
    'Every moving average **lags**: an SMA’s average age is \\((n-1)/2\\) periods.',
    'Price above a rising average suggests an uptrend; **crossovers** of a fast and slow average signal changes.',
    'A **golden cross** is the 50-day SMA crossing above the 200-day; a **death cross** is the reverse.',
  ],
  sections: [
    {
      id: 'sma',
      title: 'Simple moving average',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\text{SMA}_t(n)`, say: String.raw`Read "the simple moving average at time t, with length n": the average of the last n prices ending at t.` },
            { sym: String.raw`\sum_{i=0}^{n-1} P_{t-i}`, say: String.raw`Read "the sum from i equals 0 to n minus 1 of P sub t minus i": start with today (i = 0), then one day back (i = 1), and so on, adding up n prices.` },
            { sym: String.raw`\frac{1}{n}`, say: String.raw`Read "one over n": divide the sum by the number of prices, which is what turns a sum into an average.` },
          ],
          worked: {
            title: String.raw`A 10-day simple moving average`,
            steps: [
              String.raw`Given the last 10 closes, oldest to newest: \(98,\ 97,\ 99,\ 101,\ 100,\ 102,\ 101,\ 103,\ 104,\ 106\), so \(n = 10\).`,
              String.raw`Add them: \(98 + 97 + 99 + 101 + 100 + 102 + 101 + 103 + 104 + 106 = 1011\).`,
              String.raw`Divide by \(n\): \(\text{SMA}_t(10) = 1011/10 = 101.1\).`,
              String.raw`The latest close is \(106\), above its average of \(101.1\).`,
            ],
            answer: String.raw`\(\text{SMA} = 101.1\): price is about 4.8% above its 10-day average, the usual sign of an uptrend.`,
          },
          tex: String.raw`\text{SMA}_t(n) = \frac{1}{n}\sum_{i=0}^{n-1} P_{t-i} = \frac{P_t + P_{t-1} + \cdots + P_{t-n+1}}{n}`,
          where: [
            { sym: 'P_t', def: 'Closing price at time t' },
            { sym: 'n', def: 'Number of periods (the "length", e.g. 20 days)' },
          ],
          caption: 'Read the line itself as a smoothed stand-in for "the trend": price sitting above a rising SMA is read as an uptrend, below a falling one as a downtrend, and price repeatedly bouncing off the line as the market treating it like dynamic support or resistance.',
        },
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\text{SMA}_{t-1}`, say: String.raw`Yesterday's average. The subscript t−1 means one step earlier than t.` },
            { sym: String.raw`P_{t-n}`, say: String.raw`Read "P sub t minus n": the price n days ago, i.e. the one that has just dropped out of the window.` },
          ],
          worked: {
            title: String.raw`Updating the 10-day SMA by one day`,
            steps: [
              String.raw`Given (continuing the block above): the previous 10 closes were \(96,\ 98,\ 97,\ 99,\ 101,\ 100,\ 102,\ 101,\ 103,\ 104\), so \(\text{SMA}_{t-1} = 1001/10 = 100.1\).`,
              String.raw`Today\'s close is \(P_t = 106\), and the price dropping out is \(P_{t-10} = 96\).`,
              String.raw`Substitute: \(\text{SMA}_t = 100.1 + (106 - 96)/10\).`,
              String.raw`Evaluate: \((106 - 96)/10 = 1.0\), so \(\text{SMA}_t = 101.1\).`,
            ],
            answer: String.raw`The same \(101.1\) as adding all ten again, but with one subtraction and one division instead of nine additions.`,
          },
          tex: String.raw`\text{SMA}_t = \text{SMA}_{t-1} + \frac{P_t - P_{t-n}}{n}`,
          caption: 'The rolling update: add the newest price, drop the oldest. This is how software computes it efficiently.',
        },
        {
          t: 'example',
          title: 'A 5-day SMA',
          lines: [
            { label: 'Closes', text: '20, 22, 21, 23, 24' },
            { label: 'SMA', text: '\\((20 + 22 + 21 + 23 + 24)/5 = 22\\)' },
            { label: 'Next day', text: 'close 26: \\(22 + (26 - 20)/5 = 23.2\\)' },
          ],
        },
        {
          t: 'metric',
          name: 'the moving-average length (n)',
          shows: 'How much of the recent past is blended into the line, which trades off noise against lag. This single setting, do you average 10 days, 50 days, or 200 days?, has more effect on what signals a moving average gives than any other choice a technical analyst makes.',
          eli5: 'Think of n like the size of a sieve. A small sieve (n = 5) lets through almost every bump and wiggle in the price, fast to react, but jumpy. A large sieve (n = 200) smooths everything into a gentle, slow-moving curve, calm, but slow to notice a real change in direction.',
          higher: 'A longer, smoother line that reacts slowly. A 200-day average barely moves day to day, filters out almost all short-term noise, and is used to read the big-picture trend, but it also lags price by a lot, so by the time it confirms a new trend, a large chunk of the move has often already happened (as the crossover chart above shows).',
          lower: 'A shorter, twitchier line that hugs price closely and reacts fast to new moves, useful for short-term trading, but it also reacts to noise that is not a real trend change, generating more false signals and "whipsaws" (quick reversals that trigger a buy then immediately a sell).',
          typical: '20-day is common for short-term trend reads, 50-day for the medium term, and 200-day for the long term; the 50/200 pair is specifically watched for the golden cross and death cross described below, precisely because that combination balances noise-filtering against acceptable lag for position investors.',
        },
      ],
    },
    {
      id: 'ema',
      title: 'Exponential moving average',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\alpha`, say: String.raw`Read "alpha": the smoothing factor, a number between 0 and 1.` },
            { sym: String.raw`\text{EMA}_{t-1}`, say: String.raw`Yesterday's EMA: the formula is recursive, meaning each answer feeds into the next day's calculation.` },
            { sym: String.raw`\alpha = \frac{2}{n+1}`, say: String.raw`Read "alpha equals two over n plus one": a rule that converts a familiar length n into the weight.` },
          ],
          worked: {
            title: String.raw`A 9-day EMA over two days`,
            steps: [
              String.raw`Given: \(n = 9\), so \(\alpha = 2/(9 + 1) = 0.2\) and \(1 - \alpha = 0.8\).`,
              String.raw`Yesterday\'s EMA is \(50.00\) and today\'s close is \(P_t = 52.50\).`,
              String.raw`Substitute: \(\text{EMA}_t = 0.2 \times 52.50 + 0.8 \times 50.00\).`,
              String.raw`Evaluate: \(10.50 + 40.00 = 50.50\).`,
              String.raw`Next day, close \(51.00\): \(0.2 \times 51.00 + 0.8 \times 50.50 = 10.20 + 40.40 = 50.60\).`,
            ],
            answer: String.raw`The EMA moves from \(50.00\) to \(50.50\) to \(50.60\): it follows price but only takes 20% of the gap each day.`,
          },
          tex: String.raw`\text{EMA}_t = \alpha P_t + (1-\alpha)\,\text{EMA}_{t-1},\qquad \alpha = \frac{2}{n+1}`,
          where: [
            { sym: String.raw`\alpha`, def: 'The smoothing factor: the weight on today’s price' },
            { sym: 'n', def: 'The EMA’s period (for n = 19, α = 0.1)' },
          ],
          caption: 'The first EMA value is usually seeded with the SMA of the first n prices.',
        },
        {
          t: 'p',
          text: '**Why "exponential"?** Substitute the formula into itself repeatedly and the weights appear:',
        },
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\cdots`, say: String.raw`Read "and so on": the pattern continues the same way.` },
            { sym: String.raw`(1-\alpha)^k`, say: String.raw`Read "one minus alpha, to the power k": multiply the factor by itself k times; each step back in time multiplies the weight by it.` },
            { sym: String.raw`\alpha\sum_{k=0}^{\infty}`, say: String.raw`Read "alpha times the sum from k equals 0 to infinity": add up as many past terms as exist, with the weights getting ever smaller.` },
          ],
          worked: {
            title: String.raw`Unrolling the EMA with α = 0.2`,
            steps: [
              String.raw`Given \(\alpha = 0.2\) and the last five closes, newest first: \(52,\ 51,\ 50,\ 49,\ 50\); the EMA before those five days was \(49\).`,
              String.raw`Weights \(\alpha(1-\alpha)^k\) for \(k = 0\ldots4\): \(0.2,\ 0.16,\ 0.128,\ 0.1024,\ 0.08192\), which sum to \(0.67232\).`,
              String.raw`Weighted prices: \(0.2(52) + 0.16(51) + 0.128(50) + 0.1024(49) + 0.08192(50) = 10.4 + 8.16 + 6.4 + 5.0176 + 4.096 = 34.0736\).`,
              String.raw`The remaining weight \(1 - 0.67232 = 0.8^5 = 0.32768\) sits on older history, represented by the earlier EMA: \(0.32768 \times 49 = 16.0563\).`,
              String.raw`Add: \(34.0736 + 16.0563 = 50.13\).`,
            ],
            answer: String.raw`\(\text{EMA} \approx 50.13\), the same as running the one-line recursion five times. The newest price carries weight \(0.2\) and the oldest of the five just \(0.08\).`,
          },
          tex: String.raw`\text{EMA}_t = \alpha P_t + \alpha(1-\alpha)P_{t-1} + \alpha(1-\alpha)^2 P_{t-2} + \cdots = \alpha\sum_{k=0}^{\infty}(1-\alpha)^k P_{t-k}`,
          caption: 'Each older price gets (1 − α) times the weight of the one after it. The weights add up to α · 1/(1 − (1 − α)) = 1, by the geometric series.',
        },
        {
          t: 'plot',
          title: 'Weight given to each past price (n = 10)',
          x: [0, 20],
          y: [0, 0.2],
          xLabel: 'How many periods ago (k)',
          yLabel: 'Weight',
          data: [
            { pts: Array.from({ length: 21 }, (_, k) => [k, (2 / 11) * (9 / 11) ** k] as [number, number]), label: 'EMA: α(1 − α)ᵏ', dots: true },
            { pts: Array.from({ length: 21 }, (_, k) => [k, k < 10 ? 0.1 : 0] as [number, number]), label: 'SMA: 1/n for 10 periods, then 0', dots: true, color: '#e07b2a' },
          ],
          caption: 'The SMA drops a price suddenly after n periods (which can make it jump); the EMA lets old prices fade away smoothly.',
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Same lag, different shape',
          text: 'The average age of the prices in an SMA is \\((n-1)/2\\). For an EMA it is \\((1-\\alpha)/\\alpha\\), and with \\(\\alpha = 2/(n+1)\\) that is also exactly \\((n-1)/2\\). That is where the 2/(n + 1) rule comes from: it gives an EMA the same average lag as an SMA of the same length.',
        },
      ],
    },
    {
      id: 'wma',
      title: 'Weighted moving average',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`nP_t + (n-1)P_{t-1} + \cdots + 1\cdot P_{t-n+1}`, say: String.raw`Multiply today's price by n, yesterday's by n−1, and so on down to 1 for the oldest, then add: newest gets the most weight.` },
            { sym: String.raw`n(n+1)/2`, say: String.raw`Read "n times n plus one, over two": the sum 1 + 2 + … + n, i.e. the total of all the weights, so dividing by it keeps the weights adding to 1.` },
          ],
          worked: {
            title: String.raw`A 5-day WMA against the SMA`,
            steps: [
              String.raw`Given the last 5 closes, oldest to newest: \(20,\ 22,\ 21,\ 23,\ 24\), \(n = 5\).`,
              String.raw`Weights: newest \(24\times5\), then \(23\times4\), \(21\times3\), \(22\times2\), \(20\times1\).`,
              String.raw`Numerator: \(120 + 92 + 63 + 44 + 20 = 339\).`,
              String.raw`Denominator: \(5 \times 6/2 = 15\).`,
              String.raw`Divide: \(\text{WMA} = 339/15 = 22.6\), compared with the SMA of \(22\).`,
            ],
            answer: String.raw`\(\text{WMA} = 22.6\) vs \(\text{SMA} = 22\): weighting recent prices more makes the line sit closer to the latest close of \(24\).`,
          },
          tex: String.raw`\text{WMA}_t(n) = \frac{n P_t + (n-1)P_{t-1} + \cdots + 1\cdot P_{t-n+1}}{n(n+1)/2}`,
          caption: 'Weights fall in a straight line; the denominator is 1 + 2 + … + n. It sits between the SMA and EMA in behaviour: more responsive to new prices than an SMA of the same length, but without the EMA’s infinitely fading tail of old prices.',
        },
      ],
    },
    {
      id: 'crosses',
      title: 'Crossovers: golden and death crosses',
      blocks: [
        {
          t: 'candles',
          rows: CROSS,
          sma: [5, 15],
          title: 'A fast (5) and slow (15) average through a decline and recovery',
          boxes: [
            { from: 0, to: 20, label: 'Fast below slow: downtrend', color: 'var(--pink)' },
            { from: 30, to: 48, label: 'Fast above slow: uptrend', color: 'var(--mint)' },
          ],
          caption: 'The crossover comes well after the bottom: that is the lag. Moving averages are trend-following, not bottom-picking.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Golden cross', body: 'The 50-day SMA crosses above the 200-day SMA. Widely reported as a long-term bullish signal.' },
            { title: 'Death cross', body: 'The 50-day crosses below the 200-day. Widely reported as bearish; by the time it happens, much of the fall has often already occurred.' },
            { title: 'Price and one average', body: 'A simpler rule: be invested when price is above its 200-day average, in cash when below. It tends to avoid the worst of long bear markets at the cost of whipsaws.' },
            { title: 'Whipsaws', body: 'In sideways markets, averages cross back and forth, producing many small losses. That is the price of following trends.' },
          ],
        },
        { t: 'fin-tool', tool: 'indicators', focus: 'ma' },
      ],
    },
  ],
  sources: [
    'Murphy, J. J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.',
    'Brock, W., Lakonishok, J., & LeBaron, B. (1992). Simple technical trading rules and the stochastic properties of stock returns. *The Journal of Finance*, 47(5), 1731–1764.',
    'Faber, M. T. (2007). A quantitative approach to tactical asset allocation. *The Journal of Wealth Management*, 9(4), 69–79.',
  ],
  related: ['finance/technical/momentum', 'finance/technical/volatility', 'finance/technical/evidence'],
}

export default guide
