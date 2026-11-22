import type { Guide } from '../../../guide'
import { EX } from '../../../../finance/examples'

const guide: Guide = {
  intro:
    'Three-candle patterns tell a short story: a strong move, a pause, and a reversal. Because they need more to happen, they are rarer than one- and two-candle patterns, and traders often treat them as stronger.',
  nutshell: [
    '**Morning star**: big red, small "star", big green closing past the middle of the first. A bullish reversal.',
    '**Evening star**: the mirror image at a top.',
    '**Three white soldiers** / **three black crows**: three strong candles in a row, each opening inside the last body.',
    '**Three inside up/down**: a harami confirmed by a third candle.',
    '**Abandoned baby**: a doji separated by gaps on both sides: rare and dramatic.',
  ],
  sections: [
    {
      id: 'stars',
      title: 'Morning and evening stars',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Morning star:}\quad \underbrace{C_1 \ll O_1}_{\text{long red}},\quad \underbrace{|C_2 - O_2| \text{ small},\ \max(O_2, C_2) < C_1}_{\text{star gaps below}},\quad \underbrace{C_3 > \tfrac{O_1 + C_1}{2}}_{\text{green closes past midpoint}}`,
          where: [
            { sym: String.raw`O_1, C_1`, def: 'Open and close of the first candle (the long decline)' },
            { sym: String.raw`O_2, C_2`, def: 'Open and close of the second candle (the small "star")' },
            { sym: 'C_3', def: 'Close of the third candle (the strong rally)' },
          ],
          caption: 'In stock markets, true gaps between bodies are less common than in the old rice market, so many traders relax the gap rule. The third candle’s close relative to the first candle’s midpoint is the part worth checking carefully: closing only a little past it is a much weaker reversal than closing near the first candle’s open, since it shows the rally only partly undid the original decline.',
          syntax: [
            { sym: String.raw`C_1 \ll O_1`, say: String.raw`Read "C one is much less than O one": the double arrow \(\ll\) means far smaller, so a long red body.` },
            { sym: String.raw`\underbrace{\cdots}`, say: String.raw`The brace under an expression with its label is a caption: it names the role of that part.` },
            { sym: String.raw`\tfrac{O_1 + C_1}{2}`, say: String.raw`Read "O one plus C one over two": the midpoint of the first body.` },
          ],
          worked: {
            title: String.raw`Checking a morning star`,
            steps: [
              String.raw`Given: candle 1 \(O_1 = 110\), \(C_1 = 100\); star \(O_2 = 98.5\), \(C_2 = 99\); candle 3 \(C_3 = 107\).`,
              String.raw`Long red: body \(= 10\), \(C_1 < O_1\).`,
              String.raw`Star: body \(|99 - 98.5| = 0.5\), small; \(\max(98.5, 99) = 99 < 100 = C_1\), so it gaps below.`,
              String.raw`Midpoint: \((110 + 100)/2 = 105\). \(C_3 = 107 > 105\), true.`,
              String.raw`Recovery: \((107 - 100)/10 = 0.70\), 70% of the first body.`,
            ],
            answer: String.raw`A valid morning star which retraced 70% of the decline, a strong reversal reading.`,
          },
        },
        {
          t: 'candles',
          rows: EX.morningStar,
          title: 'Morning star',
          boxes: [
            { from: 0, to: 3, label: 'Downtrend', color: 'var(--pink)' },
            { from: 4, to: 6, label: 'Morning star', color: 'var(--mint)' },
          ],
          points: [
            { i: 4, label: '1: long red', at: 'high' },
            { i: 5, label: '2: star', at: 'low' },
            { i: 6, label: '3: strong green', at: 'high' },
          ],
          lines: [{ y: 99.25, label: 'Midpoint of candle 1' }],
          caption: 'Like the morning star (Venus) appearing before sunrise: the darkest point, then light.',
        },
        {
          t: 'candles',
          rows: EX.eveningStar,
          title: 'Evening star',
          boxes: [
            { from: 0, to: 3, label: 'Uptrend', color: 'var(--mint)' },
            { from: 4, to: 6, label: 'Evening star', color: 'var(--pink)' },
          ],
          points: [
            { i: 4, label: '1', at: 'low' },
            { i: 5, label: '2: star gaps up', at: 'high' },
            { i: 6, label: '3', at: 'low' },
          ],
        },
        {
          t: 'candles',
          rows: EX.abandonedBaby,
          title: 'Abandoned baby (bullish)',
          boxes: [
            { from: 4, to: 4, lo: 95.8, hi: 97, label: 'Gap', color: 'var(--mustard)' },
            { from: 6, to: 6, lo: 95.8, hi: 96.2, label: 'Gap', color: 'var(--mustard)' },
          ],
          points: [{ i: 5, label: 'Doji, cut off by gaps', at: 'low' }],
          caption: 'The doji is "abandoned" between two gaps. Rare in stocks, more common in thinly traded markets.',
        },
      ],
    },
    {
      id: 'soldiers',
      title: 'Soldiers and crows',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Three white soldiers:}\quad C_k > O_k,\quad O_{k} \in (O_{k-1}, C_{k-1}),\quad C_k > C_{k-1}\quad (k = 2, 3)`,
          where: [
            { sym: String.raw`O_k, C_k`, def: 'Open and close of candle k' },
          ],
          caption: 'Each candle is long and bullish, opens inside the previous body and closes higher, near its high. The "opens inside the previous body" part is what makes it orderly, steady buying rather than a chaotic spike, each new candle takes a small breather within the last one’s range before pushing further, which is why the warning below (an "advance block") is specifically about that steadiness breaking down.',
          syntax: [
            { sym: String.raw`O_k \in (O_{k-1}, C_{k-1})`, say: String.raw`Read "O sub k is in the interval from O sub k minus one to C sub k minus one": the open lies strictly between the previous open and close, i.e. inside the previous body.` },
            { sym: String.raw`(k = 2, 3)`, say: String.raw`Read "for k equal to 2 and 3": apply the tests twice, comparing candle 2 with candle 1, then candle 3 with candle 2.` },
          ],
          worked: {
            title: String.raw`Checking three soldiers`,
            steps: [
              String.raw`Given (O, C): candle 1 (100, 104), candle 2 (102, 108), candle 3 (106, 112).`,
              String.raw`All bullish: \(104 > 100\), \(108 > 102\), \(112 > 106\).`,
              String.raw`k = 2: \(O_2 = 102\) is in \((100, 104)\), true; \(C_2 = 108 > 104\), true.`,
              String.raw`k = 3: \(O_3 = 106\) is in \((102, 108)\), true; \(C_3 = 112 > 108\), true.`,
            ],
            answer: String.raw`Three orderly advances (closes 104, 108, 112), a gain of 12 points with each candle opening inside the last.`,
          },
        },
        {
          t: 'candles',
          rows: EX.whiteSoldiers,
          title: 'Three white soldiers',
          boxes: [{ from: 0, to: 4, label: 'Decline', color: 'var(--pink)' }, { from: 5, to: 7, label: 'Soldiers march', color: 'var(--mint)' }],
          segments: [{ from: [5, 99.5], to: [7, 107.5], label: 'Higher closes', color: '#2f9e6e' }],
        },
        {
          t: 'candles',
          rows: EX.blackCrows,
          title: 'Three black crows',
          boxes: [{ from: 0, to: 4, label: 'Rally', color: 'var(--mint)' }, { from: 5, to: 7, label: 'Crows', color: 'var(--pink)' }],
          segments: [{ from: [5, 99.8], to: [7, 91.5], label: 'Lower closes', color: '#d9534f' }],
        },
        { t: 'callout', tone: 'warn', title: 'Too far, too fast', text: 'Three very long soldiers after a long rally can mean the move is overextended rather than starting. Nison calls a weakening version, where the third candle is small, an "advance block".' },
      ],
    },
    {
      id: 'inside',
      title: 'Three inside up',
      blocks: [
        {
          t: 'candles',
          rows: EX.threeInsideUp,
          title: 'Three inside up: a confirmed harami',
          boxes: [{ from: 4, to: 5, label: 'Harami', lo: 94.5, hi: 101.8, color: 'var(--lavender)' }],
          lines: [{ y: 101, label: 'First candle’s open' }],
          points: [{ i: 6, label: 'Closes above it: confirmed', at: 'high' }],
        },
      ],
    },
  ],
  sources: ['Nison, S. (1991). *Japanese Candlestick Charting Techniques*. New York Institute of Finance.', 'Bulkowski, T. N. (2008). *Encyclopedia of Candlestick Charts*. Wiley.'],
  related: ['finance/candlesticks/double', 'finance/candlesticks/continuation', 'finance/candlesticks/reliability'],
}

export default guide
