import type { Guide } from '../../../guide'
import { EX } from '../../../../finance/examples'

const DOWN_BOX = { from: 0, to: 4, label: 'Downtrend', color: 'var(--pink)' }
const UP_BOX = { from: 0, to: 4, label: 'Uptrend', color: 'var(--mint)' }

const guide: Guide = {
  intro:
    'Two-candle patterns compare the second candle with the first: does it swallow it, sit inside it, or push deep into it? Here are the classic pairs with exact rules, annotated charts and the reasoning behind each.',
  nutshell: [
    '**Engulfing**: the second body completely covers the first, in the opposite colour. One of the most watched reversal signals.',
    '**Harami**: a small body inside the previous large one; momentum is fading.',
    '**Piercing line** and **dark cloud cover**: the second candle reverses more than half of the first.',
    '**Tweezers**: two candles with the same high (a top) or the same low (a bottom).',
  ],
  sections: [
    {
      id: 'engulfing',
      title: 'Engulfing patterns',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Bullish engulfing:}\quad C_1 < O_1,\quad C_2 > O_2,\quad O_2 \le C_1,\quad C_2 \ge O_1`,
          where: [
            { sym: String.raw`O_1, C_1`, def: 'Open and close of the first (bearish) candle' },
            { sym: String.raw`O_2, C_2`, def: 'Open and close of the second (bullish) candle' },
          ],
          caption: 'The second body spans the whole first body. Some traders also require the second candle to engulf the first candle’s shadows (a stronger version).',
          syntax: [
            { sym: String.raw`C_1 < O_1`, say: String.raw`Read "C one is less than O one": the first candle closed below its open, so it is bearish.` },
            { sym: String.raw`O_2 \le C_1`, say: String.raw`Read "O two is less than or equal to C one": the second candle opens at or below the first close. \(\ge\) reads "greater than or equal".` },
            { sym: String.raw`,`, say: String.raw`The commas mean "and": every condition must hold at once.` },
          ],
          worked: {
            title: String.raw`Testing a bullish engulfing`,
            steps: [
              String.raw`Given: candle 1 \(O_1 = 104\), \(C_1 = 101.5\); candle 2 \(O_2 = 101\), \(C_2 = 105\).`,
              String.raw`\(C_1 < O_1\): \(101.5 < 104\), true. \(C_2 > O_2\): \(105 > 101\), true.`,
              String.raw`\(O_2 \le C_1\): \(101 \le 101.5\), true. \(C_2 \ge O_1\): \(105 \ge 104\), true.`,
              String.raw`Body sizes: first \(|101.5 - 104| = 2.5\), second \(|105 - 101| = 4\), so the second is 1.6 times larger.`,
            ],
            answer: String.raw`All four tests pass: a bullish engulfing, with buyers overwhelming the previous session.`,
          },
        },
        {
          t: 'candles',
          rows: EX.bullishEngulfing,
          title: 'Bullish engulfing at the end of a decline',
          boxes: [DOWN_BOX, { from: 4, to: 5, label: 'Engulfing', color: 'var(--mint)' }],
          points: [
            { i: 4, label: 'Small red', at: 'low' },
            { i: 5, label: 'Big green swallows it', at: 'high' },
          ],
          caption: 'The bulls opened below the previous close and finished above the previous open: a complete change of control in one session.',
        },
        {
          t: 'candles',
          rows: EX.bearishEngulfing,
          title: 'Bearish engulfing at the top of a rise',
          boxes: [UP_BOX, { from: 4, to: 5, label: 'Engulfing', color: 'var(--pink)' }],
          points: [{ i: 5, label: 'Bearish engulfing', at: 'high' }],
        },
      ],
    },
    {
      id: 'harami',
      title: 'Harami: the inside candle',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Bullish harami:}\quad C_1 < O_1,\quad \max(O_2, C_2) < O_1,\quad \min(O_2, C_2) > C_1,\quad |C_2 - O_2| < 0.6\,|C_1 - O_1|`,
          where: [
            { sym: String.raw`O_1, C_1`, def: 'Open and close of the first (large, bearish) candle' },
            { sym: String.raw`O_2, C_2`, def: 'Open and close of the second (small) candle' },
          ],
          caption: 'The second body sits entirely inside the first. The colour of the second candle matters less than its size: what matters is that a session of heavy selling was followed by a session where neither side could make any further headway, read as selling pressure suddenly running out rather than reversing outright (contrast with the sharper, more decisive engulfing pattern above).',
          syntax: [
            { sym: String.raw`|C_2 - O_2| < 0.6\,|C_1 - O_1|`, say: String.raw`Read "the second body is smaller than 0.6 times the first body": compute each body size with the absolute value, then compare.` },
            { sym: String.raw`\max(O_2, C_2) < O_1`, say: String.raw`Read "the top of the second body is below the first open": together with the \(\min\) test, this fences the baby inside the mother.` },
          ],
          worked: {
            title: String.raw`Testing a bullish harami`,
            steps: [
              String.raw`Given: \(O_1 = 108\), \(C_1 = 100\); \(O_2 = 102\), \(C_2 = 105\).`,
              String.raw`\(C_1 < O_1\): \(100 < 108\), true.`,
              String.raw`\(\max(O_2, C_2) = 105 < 108\), true; \(\min(O_2, C_2) = 102 > 100\), true.`,
              String.raw`First body \(= 8\), so the limit is \(0.6 \times 8 = 4.8\); second body \(= |105 - 102| = 3\), and \(3 < 4.8\), true.`,
            ],
            answer: String.raw`All tests pass: a 3-point baby sits inside an 8-point mother, so the selling has stalled.`,
          },
        },
        {
          t: 'candles',
          rows: EX.bullishHarami,
          title: 'Bullish harami',
          boxes: [{ from: 0, to: 3, label: 'Downtrend', color: 'var(--pink)' }, { from: 4, to: 5, label: 'Mother and baby', lo: 94, hi: 101.5, color: 'var(--lavender)' }],
          points: [{ i: 5, label: 'Baby inside', at: 'high' }],
          caption: 'After a big red candle, a small body inside it says the selling pressure has suddenly dried up.',
        },
        {
          t: 'candles',
          rows: EX.bearishHarami,
          title: 'Bearish harami',
          boxes: [{ from: 0, to: 3, label: 'Uptrend', color: 'var(--mint)' }, { from: 4, to: 5, label: 'Harami', lo: 96.5, hi: 103.5, color: 'var(--lavender)' }],
          points: [{ i: 5, label: 'Inside', at: 'high' }],
        },
        { t: 'callout', tone: 'fact', title: 'Pregnant candles', text: 'Harami means "pregnant" in Japanese: the large first candle is the mother, the small one inside it the baby. A harami whose second candle is a doji is called a harami cross.' },
      ],
    },
    {
      id: 'piercing',
      title: 'Piercing line and dark cloud cover',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Piercing line:}\quad C_1 < O_1,\quad O_2 < C_1,\quad \frac{O_1 + C_1}{2} < C_2 < O_1`,
          where: [
            { sym: String.raw`O_1, C_1`, def: 'Open and close of the first (bearish) candle' },
            { sym: String.raw`O_2, C_2`, def: 'Open and close of the second (bullish) candle' },
          ],
          caption: 'The second candle opens below the first close but rallies past the midpoint of the first body. The midpoint is the key level to watch: closing anywhere above the first candle’s close but below its midpoint is a weaker signal (a "doji in the gap" rather than a full piercing line), so the depth of the close into the body is what separates a strong reversal reading from a weak one.',
          syntax: [
            { sym: String.raw`\frac{O_1 + C_1}{2}`, say: String.raw`Read "O one plus C one, over two": the average of two numbers, the midpoint of the first body.` },
            { sym: String.raw`\text{between}`, say: String.raw`Read "C two is between the midpoint and O one": one chain stating two tests at once.` },
          ],
          worked: {
            title: String.raw`Testing a piercing line`,
            steps: [
              String.raw`Given: \(O_1 = 106\), \(C_1 = 100\); \(O_2 = 98\), \(C_2 = 104.5\).`,
              String.raw`Midpoint: \((106 + 100)/2 = 103\).`,
              String.raw`\(O_2 < C_1\): \(98 < 100\), true (it gaps down).`,
              String.raw`\(103 < C_2 < 106\): \(103 < 104.5 < 106\), true.`,
              String.raw`Depth: \((104.5 - 100)/6 = 0.75\), so 75% of the first body was recovered.`,
            ],
            answer: String.raw`A valid piercing line which recovered 75% of the red body, a stronger reading than one closing only just above the midpoint.`,
          },
        },
        {
          t: 'candles',
          rows: EX.piercing,
          title: 'Piercing line',
          boxes: [{ from: 0, to: 3, label: 'Downtrend', color: 'var(--pink)' }],
          lines: [{ y: 98.25, label: 'Midpoint of candle 5 body: 98.25' }],
          points: [{ i: 5, label: 'Closes above midpoint', at: 'high' }],
        },
        {
          t: 'candles',
          rows: EX.darkCloud,
          title: 'Dark cloud cover',
          boxes: [{ from: 0, to: 3, label: 'Uptrend', color: 'var(--mint)' }],
          lines: [{ y: 100, label: 'Midpoint: 100' }],
          points: [{ i: 5, label: 'Opens high, closes below midpoint', at: 'high' }],
          caption: 'A gap up that fails and closes deep into the previous white body: a cloud over the rally.',
        },
      ],
    },
    {
      id: 'tweezers',
      title: 'Tweezers',
      blocks: [
        {
          t: 'candles',
          rows: EX.tweezerBottom,
          title: 'Tweezer bottom',
          boxes: [{ from: 0, to: 3, label: 'Downtrend', color: 'var(--pink)' }],
          lines: [{ y: 95, label: 'Same low twice: 95' }],
          points: [{ i: 5, label: 'Tweezer bottom', at: 'low' }],
        },
        {
          t: 'candles',
          rows: EX.tweezerTop,
          title: 'Tweezer top',
          boxes: [{ from: 0, to: 3, label: 'Uptrend', color: 'var(--mint)' }],
          lines: [{ y: 105, label: 'Same high twice: 105' }],
          points: [{ i: 5, label: 'Tweezer top', at: 'high' }],
          caption: 'Two attempts at the same price both failed: the market has found a level it will not pass, for now.',
        },
      ],
    },
  ],
  sources: ['Nison, S. (1991). *Japanese Candlestick Charting Techniques*. New York Institute of Finance.', 'Bulkowski, T. N. (2008). *Encyclopedia of Candlestick Charts*. Wiley.'],
  related: ['finance/candlesticks/single', 'finance/candlesticks/triple', 'finance/candlesticks/reliability'],
}

export default guide
