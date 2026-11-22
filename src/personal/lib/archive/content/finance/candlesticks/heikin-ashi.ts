import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Heikin-Ashi ("average bar" in Japanese) candles are not real prices: each one is built from the current real candle and the previous Heikin-Ashi candle. The result smooths out noise, so trends show up as long runs of same-coloured candles.',
  nutshell: [
    'The close is the average of the real open, high, low and close.',
    'The open is the midpoint of the previous Heikin-Ashi body, so each candle depends on all the ones before it.',
    'Strong uptrends show green candles with no lower shadows; strong downtrends, red candles with no upper shadows.',
    'Because they are averages, they lag, and their prices are not tradable prices.',
  ],
  sections: [
    {
      id: 'formulas',
      title: 'The formulas',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\begin{aligned}
C^{HA}_t &= \frac{O_t + H_t + L_t + C_t}{4} \\[4pt]
O^{HA}_t &= \frac{O^{HA}_{t-1} + C^{HA}_{t-1}}{2} \\[4pt]
H^{HA}_t &= \max\big(H_t,\ O^{HA}_t,\ C^{HA}_t\big) \\[4pt]
L^{HA}_t &= \min\big(L_t,\ O^{HA}_t,\ C^{HA}_t\big)
\end{aligned}`,
          where: [
            { sym: String.raw`O_t, H_t, L_t, C_t`, def: 'The real candle' },
            { sym: String.raw`O^{HA}_t, C^{HA}_t`, def: 'The Heikin-Ashi open and close' },
            { sym: String.raw`H^{HA}_t, L^{HA}_t`, def: 'The Heikin-Ashi high and low' },
          ],
          caption: 'The first Heikin-Ashi open is usually set to (O + C)/2 of the first real candle. Because each HA open blends in the previous HA candle, every HA candle carries a trace of all the candles before it, that memory is exactly what smooths the chart and makes a genuine trend show up as a long run of same-coloured, same-shaped candles, at the cost of reacting more slowly to an actual reversal.',
          syntax: [
            { sym: String.raw`C^{HA}_t`, say: String.raw`Read "C H-A at t": the superscript is a label meaning Heikin-Ashi, not a power. No superscript means the ordinary candle.` },
            { sym: String.raw`O^{HA}_{t-1}`, say: String.raw`Read "the Heikin-Ashi open one period earlier": the formula uses its own previous output, so compute the candles in order, oldest first.` },
            { sym: String.raw`\max\big(\cdot\big)`, say: String.raw`Read "the biggest of these three": the HA high is the largest of the real high and the HA open and close.` },
          ],
          worked: {
            title: String.raw`Two Heikin-Ashi candles`,
            steps: [
              String.raw`Given real (O, H, L, C): candle 1 (100, 103, 99, 102); candle 2 (102, 106, 101.5, 105).`,
              String.raw`Candle 1 close: \((100 + 103 + 99 + 102)/4 = 101\). Seed open: \((100 + 102)/2 = 101\). High: \(\max(103, 101, 101) = 103\). Low: \(\min(99, 101, 101) = 99\).`,
              String.raw`Candle 2 close: \((102 + 106 + 101.5 + 105)/4 = 103.625\).`,
              String.raw`Candle 2 open: \((101 + 101)/2 = 101\).`,
              String.raw`High: \(\max(106, 101, 103.625) = 106\). Low: \(\min(101.5, 101, 103.625) = 101\).`,
            ],
            answer: String.raw`HA candle 2 is (101, 106, 101, 103.625): open equals low, so no lower shadow, the signature of a clean uptrend.`,
          },
        },
        {
          t: 'example',
          title: 'One step',
          lines: [
            { label: 'Previous HA', text: 'open 100, close 102' },
            { label: 'Real candle', text: 'O = 102, H = 105, L = 101, C = 104' },
            { label: 'HA close', text: '\\((102 + 105 + 101 + 104)/4 = 103\\)' },
            { label: 'HA open', text: '\\((100 + 102)/2 = 101\\)' },
            { label: 'HA high/low', text: '\\(\\max(105, 101, 103) = 105,\\ \\min(101, 101, 103) = 101\\)' },
          ],
        },
      ],
    },
    {
      id: 'compare',
      title: 'Side by side',
      lead: 'The same random prices, drawn both ways. Notice the long single-colour runs on the right.',
      blocks: [{ t: 'fin-tool', tool: 'heikin-ashi' }],
    },
    {
      id: 'use',
      title: 'Using it',
      blocks: [
        {
          t: 'dodont',
          do: ['Use it to see the trend and stay with it.', 'Watch for small bodies with shadows on both sides: the trend may be pausing.', 'Use real prices for entries, stops and targets.'],
          dont: ['Read classic candlestick patterns on Heikin-Ashi charts; they do not apply.', 'Backtest with Heikin-Ashi prices as fills; they never traded.'],
        },
        { t: 'callout', tone: 'fact', title: 'An exponential average in disguise', text: 'The HA open is the average of the last HA open and close, so expanding it shows it is an exponential moving average of past HA closes with α = ½. That is why the candles change colour slowly.' },
      ],
    },
  ],
  sources: ['Valcu, D. (2004). Using the Heikin-Ashi technique. *Technical Analysis of Stocks & Commodities*, 22(2).'],
  related: ['finance/candlesticks/anatomy', 'finance/technical/moving-averages'],
}

export default guide
