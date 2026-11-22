import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Each candle summarises one period (a minute, a day, a week) with four prices: the **open**, **high**, **low** and **close**. The thick **body** spans the open and close; the thin **shadows** (or wicks) reach to the high and low. The shape tells you who won the period and how hard the fight was.',
  nutshell: [
    'A hollow or green candle closed **above** its open (buyers won); a filled or red candle closed **below** it (sellers won).',
    'The body measures the conviction of the move; the shadows show prices that were tried and rejected.',
    'Candle patterns are mostly rules about the **sizes of body and shadows relative to the range**.',
    'A candle means little on its own: where it appears (after a trend, at support) matters most.',
  ],
  sections: [
    {
      id: 'parts',
      title: 'The parts of a candle',
      blocks: [
        {
          t: 'candles',
          rows: [
            [100, 101.5, 99, 101],
            [101, 108.5, 98, 106.5],
            [106.5, 107, 99.5, 100.5],
            [100.5, 102, 99.6, 101.6],
          ],
          title: 'A bullish and a bearish candle',
          points: [
            { i: 1, label: 'High 108.5', at: 'high' },
            { i: 1, label: 'Low 98', at: 'low' },
            { i: 2, label: 'Open 106.5 → close 100.5', at: 'low' },
          ],
          boxes: [
            { from: 1, to: 1, lo: 101, hi: 106.5, label: 'Body', color: 'var(--mint)' },
            { from: 1, to: 1, lo: 106.5, hi: 108.5, label: 'Upper shadow', color: 'var(--mustard)' },
            { from: 1, to: 1, lo: 98, hi: 101, label: 'Lower shadow', color: 'var(--mustard)' },
          ],
          caption: 'Candle 2 (hollow, green outline) opened at 101 and closed at 106.5. Candle 3 (filled red) opened at 106.5 and closed at 100.5.',
        },
        {
          t: 'math',
          tex: String.raw`\begin{aligned}
\text{range} &= H - L \\
\text{body} &= |C - O| \\
\text{upper shadow} &= H - \max(O, C) \\
\text{lower shadow} &= \min(O, C) - L
\end{aligned}`,
          where: [
            { sym: 'O, H, L, C', def: 'Open, high, low and close of the period' },
            { sym: String.raw`\max, \min`, def: 'The larger and smaller of the open and close: the top and bottom of the body' },
          ],
          caption: 'Notice that range = body + upper shadow + lower shadow, always.',
          syntax: [
            { sym: String.raw`|C - O|`, say: String.raw`Read "the absolute value of C minus O": the size of the gap between close and open, ignoring which is higher.` },
            { sym: String.raw`\max(O, C)`, say: String.raw`Read "the max of O and C": pick the larger. \(\min\) picks the smaller.` },
            { sym: String.raw`\&=`, say: String.raw`Just alignment of the equals signs in a list; read each line as "x equals y".` },
          ],
          worked: {
            title: String.raw`Measuring one candle`,
            steps: [
              String.raw`Given \(O = 102\), \(H = 109\), \(L = 99\), \(C = 105\).`,
              String.raw`Range: \(H - L = 109 - 99 = 10\). Body: \(|105 - 102| = 3\).`,
              String.raw`Upper shadow: \(109 - \max(102, 105) = 109 - 105 = 4\).`,
              String.raw`Lower shadow: \(\min(102, 105) - 99 = 102 - 99 = 3\).`,
              String.raw`Check: \(3 + 4 + 3 = 10\), the range.`,
            ],
            answer: String.raw`A bullish candle with a 3-point body and a longish upper shadow: buyers pushed to 109 but gave back 4 points by the close.`,
          },
        },
        {
          t: 'example',
          title: 'Measuring candle 2',
          lines: [
            { label: 'Range', text: '\\(H - L = 108.5 - 98 = 10.5\\)' },
            { label: 'Body', text: '\\(|106.5 - 101| = 5.5\\), which is \\(5.5 / 10.5 \\approx 52\\%\\) of the range' },
            { label: 'Upper', text: '\\(108.5 - \\max(101, 106.5) = 2\\) (19%)' },
            { label: 'Lower', text: '\\(\\min(101, 106.5) - 98 = 3\\) (29%)' },
            { label: 'Check', text: '\\(5.5 + 2 + 3 = 10.5\\) ✓' },
          ],
        },
        {
          t: 'metric',
          name: 'body share (body ÷ range)',
          shows: 'What fraction of the whole session\'s price action ended up "kept" as a net move, rather than being fought back. It is the single number behind why some candles look decisive and others look indecisive, a quantitative version of "who won the battle between buyers and sellers today".',
          eli5: 'Imagine a tug-of-war that lasts all day. If one team drags the rope 90% of the way to their side and holds it there until the final whistle, that\'s a big body, a clear, decisive win. If the rope gets dragged back and forth all day but ends up almost exactly where it started, that\'s a tiny body, a draw, even though plenty of effort (range) was spent.',
          higher: 'Open and close were far apart relative to the day\'s full high-low range, one side (buyers or sellers) controlled almost the entire session with little pushback. A body share above roughly 70–80%, like a marubozu, signals strong conviction in whichever direction the candle closed.',
          lower: 'Open and close were close together relative to the range, the session saw real back-and-forth fighting, but neither side held control by the close. A tiny body share (a doji is close to 0%) signals indecision, and after a strong trend is often an early warning that the trend is losing conviction, especially when it shows up alongside other reversal clues.',
          typical: 'There is no fixed universal cutoff, but many traders informally treat body share above about 70% as a "strong" candle and below about 10% as a "doji-like" one, always read in the context of where the candle appears in the trend, see [single-candle patterns](@finance/candlesticks/single).',
        },
      ],
    },
    {
      id: 'read',
      title: 'Reading the battle',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Long body', body: 'One side controlled the whole session. A long green body after a decline shows strong buying.' },
            { title: 'Small body', body: 'Open and close were close together: indecision, or a balance between buyers and sellers.' },
            { title: 'Long lower shadow', body: 'Sellers pushed price down, but buyers drove it back up: rejection of lower prices.' },
            { title: 'Long upper shadow', body: 'Buyers pushed price up, but sellers knocked it back: rejection of higher prices.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Colours vary',
          text: 'Western charts usually show rising candles green or hollow and falling candles red or filled. In mainland China, Japan and Taiwan the convention is often reversed: red for up, green for down, so check the legend.',
        },
      ],
    },
    {
      id: 'explore',
      title: 'Explore it yourself',
      lead: 'Drag the open, high, low and close and watch the measurements and the candle’s name update. Change the trend before it to see how the same shape gets different names.',
      blocks: [{ t: 'fin-tool', tool: 'anatomy' }],
    },
    {
      id: 'timeframes',
      title: 'Same market, different candles',
      blocks: [
        {
          t: 'p',
          text: 'Candles can cover any period. Five one-minute candles combine into one five-minute candle: its open is the first open, its close the last close, its high the highest high and its low the lowest low. A "hammer" on a daily chart might be a sharp sell-off and recovery when you look at the hourly chart.',
        },
        {
          t: 'math',
          tex: String.raw`O = O_1,\quad H = \max_{k} H_k,\quad L = \min_k L_k,\quad C = C_n`,
          where: [
            { sym: 'O_1', def: 'Open of the first small candle' },
            { sym: 'C_n', def: 'Close of the last (n-th) small candle' },
            { sym: 'H_k, L_k', def: 'High and low of each small candle k' },
          ],
          caption: 'Combining n smaller candles into one larger one. Only the open and close "survive" from a single candle (the first and last); the high and low are whichever extreme was touched at any point across the whole group, which is why a quiet-looking combined candle can hide a sharp, brief spike on a lower timeframe.',
          syntax: [
            { sym: String.raw`O_1`, say: String.raw`Read "O sub one": the open of the first small candle. \(C_n\) is the close of the last (the n-th).` },
            { sym: String.raw`\max_{k} H_k`, say: String.raw`Read "the maximum over k of H sub k": look at every small candle's high and take the biggest. \(\min_k L_k\) takes the smallest low.` },
          ],
          worked: {
            title: String.raw`Three 1-hour candles into one 3-hour candle`,
            steps: [
              String.raw`Given (O, H, L, C): candle 1 (100, 102, 99, 101), candle 2 (101, 106, 100.5, 105), candle 3 (105, 105.5, 103, 104).`,
              String.raw`Open: first candle's open, \(O = O_1 = 100\).`,
              String.raw`High: \(\max(102, 106, 105.5) = 106\). Low: \(\min(99, 100.5, 103) = 99\).`,
              String.raw`Close: last candle's close, \(C = C_3 = 104\).`,
            ],
            answer: String.raw`The 3-hour candle is (100, 106, 99, 104): a modest-looking bullish candle which hides the push to 106 in the middle hour.`,
          },
        },
        { t: 'callout', tone: 'fact', title: 'Candles hide the path', text: 'Two days can have the same candle but very different journeys: one rose all day, the other fell first and then rallied. Candles summarise; they do not record the order of events within the period.' },
      ],
    },
  ],
  sources: ['Nison, S. (1991). *Japanese Candlestick Charting Techniques*. New York Institute of Finance.', 'Morris, G. L. (2006). *Candlestick Charting Explained* (3rd ed.). McGraw-Hill.'],
  related: ['finance/candlesticks/single', 'finance/technical/charts'],
}

export default guide
