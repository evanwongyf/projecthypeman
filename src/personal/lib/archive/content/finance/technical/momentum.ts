import type { Guide } from '../../../guide'

// A made-up rally whose momentum fades: price peaks rise while the RSI peaks fall.
const price = (t: number) => 85 + 0.6 * t + 7 * Math.sin(t / 3.2)
const osc = (t: number) => 45 + 18 * Math.sin(t / 3.2) - 0.35 * t
const PEAK_A = 1.6 * Math.PI
const PEAK_B = 1.6 * Math.PI * 5

const guide: Guide = {
  intro:
    'Momentum oscillators measure the **speed** of price changes rather than their direction alone. They move within a band (often 0 to 100), so traders use them to spot overbought and oversold conditions and divergences between price and momentum. Here are the three most popular, built from scratch.',
  nutshell: [
    '**RSI** (Wilder, 1978) compares average gains with average losses over 14 periods; above 70 is "overbought", below 30 "oversold".',
    '**Stochastic** (Lane) shows where the close sits within the recent high–low range.',
    '**MACD** (Appel) is the gap between a 12- and 26-period EMA, with a 9-period signal line.',
    'A **divergence** (price makes a new high but the oscillator does not) warns that momentum is fading.',
    'In strong trends, oscillators can stay "overbought" for a long time; overbought is not a sell signal on its own.',
  ],
  sections: [
    {
      id: 'rsi',
      title: 'RSI: the relative strength index',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\max(a,\ 0)`, say: String.raw`Read "the larger of a and zero": negative numbers become 0, so each formula keeps only one direction of movement.` },
            { sym: String.raw`P_t - P_{t-1}`, say: String.raw`Today's price minus yesterday's: the one-day change.` },
            { sym: String.raw`G_t, L_t`, say: String.raw`G is the gain and L the loss on day t. Both are positive; a day cannot have both.` },
          ],
          worked: {
            title: String.raw`Splitting three days into gains and losses`,
            steps: [
              String.raw`Given closes: \(120.00,\ 121.50,\ 120.75,\ 120.75\).`,
              String.raw`Day 1: \(121.50 - 120.00 = +1.50\), so \(G = \max(1.50, 0) = 1.50\) and \(L = \max(-1.50, 0) = 0\).`,
              String.raw`Day 2: \(120.75 - 121.50 = -0.75\), so \(G = 0\) and \(L = \max(0.75, 0) = 0.75\).`,
              String.raw`Day 3: no change, so \(G = 0\) and \(L = 0\).`,
            ],
            answer: String.raw`Gains \(1.50,\ 0,\ 0\) and losses \(0,\ 0.75,\ 0\): up-moves and down-moves are tracked in separate columns, ready to be averaged.`,
          },
          tex: String.raw`G_t = \max(P_t - P_{t-1},\,0),\qquad L_t = \max(P_{t-1} - P_t,\,0)`,
          caption: 'Split each day’s change into a gain or a loss (both positive numbers).',
        },
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\overline{G}_t`, say: String.raw`Read "G bar sub t": the smoothed average gain as of day t. The bar means average.` },
            { sym: String.raw`(n-1)\,\overline{G}_{t-1} + G_t`, say: String.raw`Read "n minus 1 times yesterday's average gain, plus today's gain": 13 parts of old average to one part of today (for n = 14).` },
          ],
          worked: {
            title: String.raw`One day of Wilder smoothing (n = 14)`,
            steps: [
              String.raw`Given: yesterday\'s \(\overline{G}_{t-1} = 0.60\), \(\overline{L}_{t-1} = 0.40\); today the price rose, so \(G_t = 1.50\) and \(L_t = 0\).`,
              String.raw`Average gain: \(\overline{G}_t = (13 \times 0.60 + 1.50)/14 = (7.80 + 1.50)/14 = 9.30/14 = 0.6643\).`,
              String.raw`Average loss: \(\overline{L}_t = (13 \times 0.40 + 0)/14 = 5.20/14 = 0.3714\).`,
            ],
            answer: String.raw`One strong up-day lifts the average gain from \(0.60\) to \(0.664\) and lets the average loss decay from \(0.40\) to \(0.371\).`,
          },
          tex: String.raw`\overline{G}_t = \frac{(n-1)\,\overline{G}_{t-1} + G_t}{n},\qquad \overline{L}_t = \frac{(n-1)\,\overline{L}_{t-1} + L_t}{n}`,
          caption: 'Wilder’s smoothing (the first averages are simple averages of the first n gains and losses). It is an EMA with α = 1/n, equivalent to a standard EMA of length 2n − 1.',
        },
        {
          t: 'math',
          syntax: [
            { sym: String.raw`RS`, say: String.raw`Read "R S", relative strength: just a ratio of two averages, nothing more.` },
            { sym: String.raw`100 - \frac{100}{1 + RS}`, say: String.raw`Read "100 minus 100 over one plus RS": a rescaling that squeezes any ratio into the range 0 to 100.` },
          ],
          worked: {
            title: String.raw`RSI from the smoothed averages`,
            steps: [
              String.raw`Given (from the block above): \(\overline{G}_t = 0.6643\), \(\overline{L}_t = 0.3714\).`,
              String.raw`Relative strength: \(RS = 0.6643/0.3714 = 1.788\).`,
              String.raw`Substitute: \(RSI = 100 - 100/(1 + 1.788) = 100 - 100/2.788\).`,
              String.raw`Evaluate: \(100/2.788 = 35.86\), so \(RSI = 64.14\).`,
              String.raw`Check with the second form: \(100 \times 0.6643/(0.6643 + 0.3714) = 100 \times 0.6414 = 64.14\).`,
            ],
            answer: String.raw`\(RSI \approx 64\): bullish momentum (about 64% of recent movement was upward) but not yet overbought.`,
          },
          tex: String.raw`RS = \frac{\overline{G}_t}{\overline{L}_t},\qquad RSI = 100 - \frac{100}{1 + RS} = 100\cdot\frac{\overline{G}_t}{\overline{G}_t + \overline{L}_t}`,
          where: [
            { sym: 'RS', def: 'Relative strength: average gain divided by average loss' },
            { sym: 'n', def: 'Usually 14 periods' },
          ],
          caption: 'The second form shows what RSI really is: the share of recent movement that was upward, scaled to 0–100.',
        },
        {
          t: 'example',
          title: 'Computing the first 14-day RSI',
          lines: [
            { label: 'Closes', text: '44.34, 44.09, 44.15, 43.61, 44.33, 44.83, 45.10, 45.42, 45.84, 46.08, 45.89, 46.03, 45.61, 46.28, 46.28' },
            { label: 'Changes', text: '−0.25, +0.06, −0.54, +0.72, +0.50, +0.27, +0.32, +0.42, +0.24, −0.19, +0.14, −0.42, +0.67, 0.00' },
            { label: 'Gains', text: 'sum 3.34, so \\(\\overline{G} = 3.34/14 = 0.2386\\)' },
            { label: 'Losses', text: 'sum 1.40, so \\(\\overline{L} = 1.40/14 = 0.1000\\)' },
            { label: 'RS', text: '\\(0.2386 / 0.1000 = 2.386\\)' },
            { label: 'RSI', text: '\\(100 - 100/(1 + 2.386) = 70.46\\): just into "overbought" territory' },
          ],
        },
        {
          t: 'plot',
          title: 'How RS maps to RSI',
          x: [0, 6],
          y: [0, 100],
          xLabel: 'RS = average gain ÷ average loss',
          yLabel: 'RSI',
          curves: [{ f: (rs: number) => 100 - 100 / (1 + rs), label: 'RSI = 100 − 100/(1 + RS)' }],
          hlines: [
            { y: 70, label: 'Overbought 70' },
            { y: 30, label: 'Oversold 30' },
          ],
          points: [
            { x: 1, y: 50, label: 'Gains = losses: 50' },
            { x: 2.333, y: 70, label: 'Gains 2.33× losses: 70' },
          ],
          caption: 'RSI 70 means average gains are 2.33 times average losses; RSI 30 means they are 0.43 times.',
        },
        {
          t: 'metric',
          name: 'the relative strength index (RSI)',
          shows: 'How dominant buying has been versus selling over the last 14 periods, scaled to a 0–100 ruler. It measures the *speed and size* of recent price changes, not price itself, a stock can keep climbing even as RSI falls, if each new high is being made with less force than the last (a **divergence**, covered below).',
          eli5: 'Imagine a tug-of-war between buyers and sellers over the last 14 days. RSI tells you who has been winning and by how much, on a scale from 0 (sellers crushed it) to 100 (buyers crushed it), with 50 meaning it was roughly an even fight.',
          higher: 'Buying pressure has dominated recently, gains have been larger and more frequent than losses. Above 70 is conventionally called "overbought": the move may be getting stretched and due a pause or pullback, but in a genuinely strong uptrend RSI can stay above 70 for a long time, so high RSI alone is not a sell signal.',
          lower: 'Selling pressure has dominated recently. Below 30 is conventionally called "oversold": the decline may be getting stretched and due a bounce, but in a genuinely strong downtrend RSI can stay below 30 for a long time too"oversold" does not mean "must go up now".',
          typical: 'RSI oscillates between roughly 40–90 in uptrends and 10–60 in downtrends in practice, not evenly across 0–100, which is itself a useful tactic: in an uptrend, RSI dipping to 40–50 (not all the way to 30) often marks a buyable pullback, and the reverse in downtrends.',
        },
        { t: 'fin-tool', tool: 'indicators', focus: 'rsi' },
        { t: 'callout', tone: 'fact', title: 'One book, many indicators', text: 'J. Welles Wilder Jr., a mechanical engineer turned real-estate developer, introduced RSI, the average true range (ATR), the average directional index (ADX) and the Parabolic SAR all in one 1978 book, *New Concepts in Technical Trading Systems*, calculated by hand, before personal computers.' },
      ],
    },
    {
      id: 'stochastic',
      title: 'The stochastic oscillator',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\%K,\ \%D`, say: String.raw`Read "percent K" and "percent D". The backslash just prints the % sign; K is the fast line and D the slow line.` },
            { sym: String.raw`C_t - L_n`, say: String.raw`Today's close minus the lowest low of the last n periods: how far above the bottom of the range the close is.` },
            { sym: String.raw`\text{SMA}_3(\%K)`, say: String.raw`Read "the three-period simple moving average of percent K": average the last three %K values.` },
          ],
          worked: {
            title: String.raw`Stochastic over a 14-day range of 140 to 152`,
            steps: [
              String.raw`Given: \(L_{14} = 140\), \(H_{14} = 152\) (range \(12\)). Closes over three days: \(147.0,\ 148.5,\ 149.6\).`,
              String.raw`Day 1: \(\%K = 100 \times (147.0 - 140)/12 = 100 \times 7/12 = 58.3\).`,
              String.raw`Day 2: \(100 \times 8.5/12 = 70.8\). Day 3: \(100 \times 9.6/12 = 80.0\).`,
              String.raw`Signal line: \(\%D = (58.3 + 70.8 + 80.0)/3 = 69.7\).`,
            ],
            answer: String.raw`\(\%K = 80\) while \(\%D = 69.7\): the close is at the top of its range and %K is rising above its signal line, which is momentum at its strongest (and just at the overbought threshold).`,
          },
          tex: String.raw`\%K = 100\times\frac{C_t - L_n}{H_n - L_n},\qquad \%D = \text{SMA}_3(\%K)`,
          where: [
            { sym: 'L_n, H_n', def: 'Lowest low and highest high of the last n periods (usually 14)' },
            { sym: String.raw`\%D`, def: 'A 3-period average of %K, used as a signal line' },
          ],
          caption: 'The idea: in uptrends, closes tend to be near the top of the recent range; in downtrends, near the bottom. Readings above 80 are "overbought", below 20 "oversold".',
        },
        {
          t: 'metric',
          name: 'the stochastic oscillator (%K)',
          shows: 'Where today\'s closing price sits within the recent trading range, as a percentage, 100% means it closed right at the top of the last 14 periods\' range, 0% means right at the bottom. It captures a subtly different idea from RSI: not the balance of gains versus losses, but where the close landed relative to the extremes recently seen.',
          eli5: 'If a stock traded between $90 and $100 over the last two weeks and closed today at $98, %K is 80%, it closed near the top of its recent "playing field". If it closed at $91, %K is only 10%, near the bottom of the field.',
          higher: 'The close is near the top of its recent range, buyers have been pushing price towards (or keeping it at) recent highs. Above 80 is "overbought": fine and expected in a strong uptrend, but worth watching for a stall if it starts diverging from price (price making new highs while %K fails to).',
          lower: 'The close is near the bottom of its recent range, sellers have been dominant. Below 20 is "oversold": can persist through a sustained downtrend, so by itself it is not a buy signal, more a flag that the decline has reached an extreme relative to its own recent history.',
          typical: 'Because it reacts faster to each new close than RSI does, %K is noisier, it whips between extremes more often, which is why the slower %D signal line (a 3-period average of %K) is usually watched for confirmation, and why stochastic crossovers are typically combined with a clear trend read rather than used alone.',
        },
        { t: 'fin-tool', tool: 'indicators', focus: 'stochastic' },
      ],
    },
    {
      id: 'macd',
      title: 'MACD',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\text{EMA}_{12}(P)_t`, say: String.raw`Read "the 12-period EMA of P at time t": the exponential average of the price series with n = 12.` },
            { sym: String.raw`\text{EMA}_9(\text{MACD})_t`, say: String.raw`An average of an average: this EMA is taken over the MACD values themselves, not over price.` },
          ],
          worked: {
            title: String.raw`One day of MACD`,
            steps: [
              String.raw`Given: \(\text{EMA}_{12} = 185.40\), \(\text{EMA}_{26} = 183.10\), and yesterday\'s signal line \(1.90\).`,
              String.raw`MACD: \(185.40 - 183.10 = 2.30\).`,
              String.raw`The 9-period EMA has \(\alpha = 2/(9+1) = 0.2\), so \(\text{Signal} = 0.2 \times 2.30 + 0.8 \times 1.90 = 0.46 + 1.52 = 1.98\).`,
              String.raw`Histogram: \(2.30 - 1.98 = 0.32\).`,
            ],
            answer: String.raw`MACD \(2.30\) is above its signal \(1.98\), so the histogram is \(+0.32\): short-term momentum is positive and rising.`,
          },
          tex: String.raw`\begin{aligned}
\text{MACD}_t &= \text{EMA}_{12}(P)_t - \text{EMA}_{26}(P)_t \\
\text{Signal}_t &= \text{EMA}_9(\text{MACD})_t \\
\text{Histogram}_t &= \text{MACD}_t - \text{Signal}_t
\end{aligned}`,
          caption: 'MACD = moving average convergence/divergence. Positive MACD: the short-term average is above the long-term one (upward momentum).',
        },
        {
          t: 'metric',
          name: 'MACD (and the histogram)',
          shows: 'Whether short-term momentum is pulling away from (or back towards) longer-term momentum, the gap between a fast 12-period average and a slower 26-period average. Unlike RSI or stochastic, MACD has no fixed 0–100 scale; it is measured in the same price units as the stock, and what matters is its direction, its sign, and how it compares to its own signal line.',
          eli5: 'Picture two joggers on a track, a fast one and a slow one, both representing the stock\'s average recent price. MACD is simply the gap between them. When the fast jogger is pulling ahead, MACD is positive and rising, the stock\'s short-term trend is accelerating above its longer-term trend. When the fast jogger falls behind, MACD turns negative.',
          higher: 'A larger positive MACD (or a histogram growing further above zero) means short-term price momentum is pulling further above long-term momentum, the uptrend is accelerating, not just continuing. This is read as bullish, strongest right as the histogram is expanding, and often starting to fade as the histogram shrinks back towards zero even while MACD is still positive.',
          lower: 'A larger negative MACD means short-term momentum is falling further below long-term momentum, the downtrend is accelerating. Read as bearish, with the same caveat: a shrinking (less negative) histogram, even while MACD stays negative, can be an early sign the selling is losing steam before the MACD line itself turns up.',
          typical: 'There is no universal "good" or "bad" level since it scales with the stock\'s own price, what traders watch instead are the signal-line cross (MACD crossing its 9-period EMA), the zero-line cross (the 12 and 26 EMAs crossing each other), and divergences from price, all described below.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Signal-line cross', body: 'MACD crossing above its signal line (histogram turning positive) is read as bullish; crossing below as bearish.' },
            { title: 'Zero-line cross', body: 'MACD crossing zero is the same as the 12 and 26 EMAs crossing.' },
            { title: 'Divergence', body: 'Price makes a higher high but MACD makes a lower high: momentum is weakening.' },
          ],
        },
        { t: 'fin-tool', tool: 'indicators', focus: 'macd' },
        { t: 'callout', tone: 'fact', title: 'Three inventors', text: 'Gerald Appel created MACD in the late 1970s; Thomas Aspray added the histogram in 1986, to see the signal-line crossovers coming sooner.' },
      ],
    },
    {
      id: 'divergence',
      title: 'Divergences',
      blocks: [
        {
          t: 'plot',
          title: 'Bearish divergence: higher price high, lower momentum high',
          x: [0, 40],
          y: [0, 120],
          xLabel: 'Time',
          yLabel: 'Price (top) and RSI (bottom)',
          curves: [
            { f: price, label: 'Price' },
            { f: osc, label: 'RSI (scaled)', color: '#7b4fc9' },
          ],
          points: [
            { x: PEAK_A, y: price(PEAK_A), label: 'Price high A' },
            { x: PEAK_B, y: price(PEAK_B), label: 'Higher high B' },
            { x: PEAK_A, y: osc(PEAK_A), label: 'RSI high A' },
            { x: PEAK_B, y: osc(PEAK_B), label: 'Lower RSI high B' },
          ],
          caption: 'Price rose to a new high, but with less force behind it. Divergences can last a long time before price turns, so they are a warning, not a timing signal.',
        },
      ],
    },
  ],
  sources: [
    'Wilder, J. W., Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research.',
    'Lane, G. C. (1984). Lane’s stochastics. *Technical Analysis of Stocks & Commodities*, 2(3), 87–90.',
    'Appel, G. (2005). *Technical Analysis: Power Tools for Active Investors*. FT Prentice Hall.',
  ],
  related: ['finance/technical/moving-averages', 'finance/technical/volatility', 'finance/technical/evidence'],
}

export default guide
