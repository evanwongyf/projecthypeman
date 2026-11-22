import type { Guide } from '../../../guide'
import { EX } from '../../../../finance/examples'

const guide: Guide = {
  intro:
    'Not every pattern signals a turn. Continuation patterns show a trend pausing to catch its breath before carrying on, and "windows" (gaps) mark where the market jumped and often act as support or resistance later.',
  nutshell: [
    '**Rising three methods**: a long green candle, three small pullback candles inside its range, then a long green candle to a new high.',
    '**Falling three methods**: the bearish mirror image.',
    'A **window** is a gap between one candle’s range and the next. Rising windows tend to act as support; falling windows as resistance.',
    'A **tasuki gap** pulls back into the window without closing it, and the trend resumes.',
  ],
  sections: [
    {
      id: 'methods',
      title: 'Rising and falling three methods',
      blocks: [
        {
          t: 'candles',
          rows: EX.risingThree,
          title: 'Rising three methods',
          boxes: [
            { from: 2, to: 2, label: 'Long green', color: 'var(--mint)' },
            { from: 3, to: 5, lo: 98.8, hi: 103.2, label: 'Three small pullback candles stay inside its range', color: 'var(--lavender)' },
            { from: 6, to: 6, label: 'New high', color: 'var(--mint)' },
          ],
          caption: 'The rest period never breaks the low of the first long candle. The final candle closes above its close: the trend resumes.',
        },
        {
          t: 'candles',
          rows: EX.fallingThree,
          title: 'Falling three methods',
          boxes: [
            { from: 2, to: 2, label: 'Long red', color: 'var(--pink)' },
            { from: 3, to: 5, lo: 96.8, hi: 104.4, label: 'Small counter-trend rally', color: 'var(--lavender)' },
            { from: 6, to: 6, label: 'New low', color: 'var(--pink)' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'San-po', text: 'These are the "three methods" (san-po) of Sakata’s five rules: the Japanese saying is that the market takes a rest, "like a soldier resting between battles".' },
      ],
    },
    {
      id: 'windows',
      title: 'Windows (gaps)',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Rising window:}\quad L_t > H_{t-1}\qquad\qquad \text{Falling window:}\quad H_t < L_{t-1}`,
          where: [
            { sym: String.raw`L_t, H_t`, def: 'Low and high of today’s candle' },
            { sym: String.raw`H_{t-1}, L_{t-1}`, def: 'High and low of the previous candle' },
          ],
          caption: 'The gap is the empty price range between the two candles, no trade printed inside it. Read the gap itself, not just its existence, as the signal: the wider the untouched range between the candles, the more decisive the move that created it, and the more significant a level it tends to mark later (as support in a rising window, resistance in a falling one).',
          syntax: [
            { sym: String.raw`L_t > H_{t-1}`, say: String.raw`Read "today's low is greater than yesterday's high": the whole of today's candle sits above the whole of yesterday's.` },
            { sym: String.raw`H_t < L_{t-1}`, say: String.raw`Read "today's high is less than yesterday's low": the whole of today sits below yesterday.` },
            { sym: String.raw`\qquad`, say: String.raw`Just spacing between the two separate tests.` },
          ],
          worked: {
            title: String.raw`Spotting a window`,
            steps: [
              String.raw`Rising: yesterday \(H_{t-1} = 101.2\), today \(L_t = 102.0\). Test: \(102.0 > 101.2\), true.`,
              String.raw`Gap size: \(102.0 - 101.2 = 0.8\).`,
              String.raw`Falling: yesterday \(L_{t-1} = 98.5\), today \(H_t = 97.6\). Test: \(97.6 < 98.5\), true.`,
              String.raw`Gap size: \(98.5 - 97.6 = 0.9\).`,
            ],
            answer: String.raw`Both are windows; the rising gap (101.2 to 102.0) is a support zone, the falling gap (97.6 to 98.5) is resistance.`,
          },
        },
        {
          t: 'candles',
          rows: EX.windowUp,
          title: 'A rising window acting as support',
          boxes: [{ from: 1, to: 2, lo: 99, hi: 100.2, label: 'Window', color: 'var(--mustard)' }],
          points: [{ i: 3, label: 'Pullback holds at the window', at: 'low' }],
          caption: 'Prices dipped back towards the gap but did not close it, and the rise resumed.',
        },
        {
          t: 'candles',
          rows: EX.tasukiUp,
          title: 'Upside tasuki gap',
          boxes: [{ from: 1, to: 2, lo: 100, hi: 100.8, label: 'Gap', color: 'var(--mustard)' }],
          points: [{ i: 3, label: 'Red candle closes into the gap, but does not close it', at: 'low' }],
        },
        { t: 'callout', tone: 'note', title: '"The window was closed"', text: 'When later prices trade back through the gap, the Japanese say the window has been closed: the signal it gave is cancelled.' },
      ],
    },
  ],
  sources: ['Nison, S. (1991). *Japanese Candlestick Charting Techniques*. New York Institute of Finance.'],
  related: ['finance/candlesticks/triple', 'finance/technical/trends'],
}

export default guide
