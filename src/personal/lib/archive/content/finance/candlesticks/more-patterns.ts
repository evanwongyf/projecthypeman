import type { Guide } from '../../../guide'
import { DOWN, UP } from '../../../../finance/examples'

const guide: Guide = {
  intro:
    'Beyond the classic reversal patterns are dozens of rarer ones. Here are eight worth knowing, each with its rule written precisely, an annotated chart, and the story it tells.',
  nutshell: [
    '**Belt hold**: a long candle that opens at its extreme, against the trend.',
    '**Kicker**: a sharp gap in the opposite direction, one of the strongest signals.',
    '**Three line strike**: three candles one way, wiped out by one long candle the other way.',
    '**Upside gap two crows**: a failed gap in an uptrend.',
    '**Stick sandwich**, **matching low** and **separating lines**: equal prices that show support or continuation.',
    '**Hikkake**: a false breakout of an inside bar, a Western pattern.',
  ],
  sections: [
    {
      id: 'belt',
      title: 'Belt hold',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Bullish belt hold:}\quad O = L,\quad C \gg O\ (\text{long body}),\quad O < C_{t-1}\ \text{(opens with a gap down)}`,
          where: [
            { sym: 'O, L, C', def: 'Open, low and close of the candle' },
            { sym: String.raw`C_{t-1}`, def: 'Close of the previous candle' },
          ],
          caption: 'Called yorikiri in Japanese, after a sumo move of pushing the opponent out of the ring. The tell is that the open is also the low: there was no dip at all before buyers took full control, which is a more aggressive signal than a hammer, where sellers at least got to push price down first before being overrun.',
          syntax: [
            { sym: String.raw`O = L`, say: String.raw`Read "the open equals the low": the candle never traded below where it started.` },
            { sym: String.raw`C \gg O`, say: String.raw`Read "C is much greater than O": the double arrow \(\gg\) means far bigger, so the body is long.` },
            { sym: String.raw`O < C_{t-1}`, say: String.raw`Read "the open is below the previous close": the candle gapped down at the open.` },
          ],
          worked: {
            title: String.raw`Checking a bullish belt hold`,
            steps: [
              String.raw`Given previous close \(C_{t-1} = 95.0\); candle \(O = 93.8\), \(H = 98.6\), \(L = 93.8\), \(C = 98.0\).`,
              String.raw`\(O = L\): \(93.8 = 93.8\), true.`,
              String.raw`\(O < C_{t-1}\): \(93.8 < 95.0\), true (a 1.2 gap down).`,
              String.raw`Body \(= 98.0 - 93.8 = 4.2\), range \(= 98.6 - 93.8 = 4.8\); body/range \(= 0.875\), so the body is a long 87.5% of the range.`,
            ],
            answer: String.raw`A bullish belt hold: sellers never got a dip before buyers took charge and closed near the high.`,
          },
        },
        {
          t: 'candles',
          rows: [...DOWN, [94, 99.5, 94, 99.2], [99.3, 101.5, 98.8, 101]],
          title: 'Bullish belt hold',
          boxes: [{ from: 0, to: 4, label: 'Downtrend', color: 'var(--pink)' }],
          points: [{ i: 5, label: 'Opens at its low, closes near its high', at: 'low' }],
        },
      ],
    },
    {
      id: 'kicker',
      title: 'Kicker',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Bullish kicker:}\quad C_1 < O_1,\quad O_2 > O_1,\quad C_2 > O_2\ \text{(long)}`,
          where: [
            { sym: String.raw`O_1, C_1`, def: 'Open and close of the first (bearish) candle' },
            { sym: String.raw`O_2, C_2`, def: 'Open and close of the second (bullish) candle' },
          ],
          caption: 'The second candle opens above the first candle’s open, a gap in the opposite direction, usually on news. Bulkowski ranks it among the most reliable candle patterns in his tests, the key distinction from a plain gap is that the whole first candle’s range is skipped over entirely, which marks a genuine, sudden change in what the market believes, not just a strong push in the same mood.',
          syntax: [
            { sym: String.raw`O_2 > O_1`, say: String.raw`Read "O two is greater than O one": the second candle opens above where the first one opened, so it leaps clear of the first candle.` },
            { sym: String.raw`\text{(long)}`, say: String.raw`A note, not a number: the body \(C_2 - O_2\) should be large compared with recent candles.` },
          ],
          worked: {
            title: String.raw`Checking a bullish kicker`,
            steps: [
              String.raw`Given: first candle \(O_1 = 100\), \(C_1 = 97.5\); second \(O_2 = 102\), \(C_2 = 105.5\).`,
              String.raw`\(C_1 < O_1\): \(97.5 < 100\), true (bearish).`,
              String.raw`\(O_2 > O_1\): \(102 > 100\), true, a gap of \(102 - 100 = 2\) above the first open.`,
              String.raw`Second body: \(105.5 - 102 = 3.5\), longer than the first body \(100 - 97.5 = 2.5\).`,
            ],
            answer: String.raw`A bullish kicker: the market opened above the previous open, abruptly reversing the first session's mood.`,
          },
        },
        {
          t: 'candles',
          rows: [...DOWN.slice(0, 4), [99, 99.5, 96, 96.5], [100, 104, 99.8, 103.6], [103.6, 106, 103, 105.5]],
          title: 'Bullish kicker',
          boxes: [{ from: 4, to: 5, label: 'Kick', color: 'var(--mint)' }],
          lines: [{ y: 99, label: 'First candle’s open' }],
        },
      ],
    },
    {
      id: 'strike',
      title: 'Three line strike',
      blocks: [
        {
          t: 'candles',
          rows: [[93, 95.2, 92.8, 95], [95, 98, 94.8, 97.8], [97.5, 100.8, 97.3, 100.5], [100.2, 103.6, 100, 103.3], [103.8, 104, 94.5, 94.8], [94.8, 96, 93, 93.5]],
          title: 'Three line strike: three rising candles, then one long falling candle',
          boxes: [
            { from: 1, to: 3, label: 'Three rising candles', color: 'var(--mint)' },
            { from: 4, to: 4, label: 'Strike', color: 'var(--pink)' },
          ],
          caption: 'A long candle that opens above the third candle’s close and closes below the first candle’s open, erasing the whole move. Its meaning is debated: some read it as continuation, others (including Bulkowski’s statistics) as reversal.',
        },
      ],
    },
    {
      id: 'crows',
      title: 'Upside gap two crows',
      blocks: [
        {
          t: 'candles',
          rows: [...UP.slice(0, 4), [97, 103, 96.8, 102.8], [104.5, 105, 103.8, 104], [104.8, 105.2, 103.2, 103.4], [103, 103.3, 100, 100.4]],
          title: 'Upside gap two crows',
          boxes: [{ from: 4, to: 4, lo: 103, hi: 103.8, label: 'Gap', color: 'var(--mustard)' }],
          points: [
            { i: 5, label: 'Crow 1', at: 'high' },
            { i: 6, label: 'Crow 2 engulfs crow 1', at: 'high' },
          ],
          caption: 'The market gaps up but cannot hold: two black candles appear, the second engulfing the first and closing into the gap, but not below the first long white close.',
        },
      ],
    },
    {
      id: 'equal',
      title: 'Equal-price patterns',
      blocks: [
        {
          t: 'candles',
          rows: [...DOWN.slice(0, 3), [100, 100.3, 96.8, 97], [97.5, 100.5, 97.3, 100.2], [100.6, 100.8, 96.6, 97], [97.2, 100.8, 96.9, 100.5]],
          title: 'Stick sandwich',
          lines: [{ y: 97, label: 'Two black candles close at the same price: support' }],
          points: [{ i: 4, label: 'White in the middle', at: 'high' }],
        },
        {
          t: 'candles',
          rows: [...DOWN.slice(0, 3), [101, 101.3, 97.6, 98], [99.5, 99.8, 97.7, 98], [98.2, 101.5, 97.9, 101.2]],
          title: 'Matching low',
          lines: [{ y: 98, label: 'Two black closes at the same low' }],
        },
        {
          t: 'candles',
          rows: [...UP.slice(0, 4), [103, 103.2, 100, 100.4], [103, 106, 102.9, 105.8], [105.8, 108, 105.4, 107.6]],
          title: 'Bullish separating lines',
          lines: [{ y: 103, label: 'Both open at the same price' }],
          points: [{ i: 5, label: 'Trend resumes', at: 'high' }],
        },
      ],
    },
    {
      id: 'hikkake',
      title: 'Hikkake',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Inside bar', body: 'A candle whose high and low sit inside the previous candle’s range.' },
            { title: 'False breakout', body: 'The next candle breaks below the inside bar’s low (luring sellers in).' },
            { title: 'Reversal', body: 'Within a few candles, price closes above the inside bar’s high: the trap is sprung and the bullish hikkake is confirmed.' },
          ],
        },
        {
          t: 'candles',
          rows: [[98, 101, 97, 100.5], [96, 104, 95, 102], [99, 102, 97, 100], [100, 100.5, 96, 96.5], [97, 103, 96.8, 102.8], [102.8, 105, 102.4, 104.6]],
          title: 'Bullish hikkake',
          boxes: [{ from: 2, to: 2, lo: 97, hi: 102, label: 'Inside bar', color: 'var(--lavender)' }],
          points: [
            { i: 3, label: 'False break down', at: 'low' },
            { i: 4, label: 'Closes above inside high', at: 'high' },
          ],
          caption: 'Named by Dan Chesler around 2003 from a Japanese word meaning "to trick" or "ensnare".',
        },
      ],
    },
  ],
  sources: ['Nison, S. (1994). *Beyond Candlesticks*. Wiley.', 'Bulkowski, T. N. (2008). *Encyclopedia of Candlestick Charts*. Wiley.', 'Chesler, D. (2004). Trading false moves with the hikkake pattern. *Technical Analysis of Stocks & Commodities*, 22(4).'],
  related: ['finance/candlesticks/triple', 'finance/candlesticks/reliability'],
}

export default guide
