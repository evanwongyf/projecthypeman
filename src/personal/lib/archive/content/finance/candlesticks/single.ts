import type { Guide } from '../../../guide'
import { EX } from '../../../../finance/examples'

const DOWN_BOX = { from: 0, to: 4, label: 'Downtrend', color: 'var(--pink)' }
const UP_BOX = { from: 0, to: 4, label: 'Uptrend', color: 'var(--mint)' }

const guide: Guide = {
  intro:
    'Single-candle patterns are about the balance between body and shadows. Many come in pairs with the **same shape but opposite meaning**, depending on whether they appear after a rise or a fall. Each one below has a precise rule, an annotated example and the story it tells.',
  nutshell: [
    'A **doji** (tiny body) shows indecision; after a strong trend it can warn of a turn.',
    '**Hammer** and **hanging man** look identical: long lower shadow, small body at the top. After a fall it is a hammer (bullish); after a rise, a hanging man (bearish).',
    '**Inverted hammer** and **shooting star** are the upside-down pair: long upper shadow.',
    'A **marubozu** has no shadows: one side was in control from open to close.',
    'Always wait for **confirmation**: the next candle should move in the expected direction.',
  ],
  sections: [
    {
      id: 'rules',
      title: 'The rules in numbers',
      blocks: [
        {
          t: 'p',
          text: 'Write the body, upper shadow and lower shadow as shares of the range: \\(b = \\text{body}/\\text{range}\\), \\(u = \\text{upper}/\\text{range}\\), \\(\\ell = \\text{lower}/\\text{range}\\), so \\(b + u + \\ell = 1\\). Sources differ slightly, but common definitions are:',
        },
        {
          t: 'table',
          head: ['Pattern', 'Rule', 'Context'],
          rows: [
            ['Doji', '\\(b \\le 0.1\\)', 'Matters most after a trend'],
            ['Dragonfly doji', '\\(b \\le 0.1,\\ u \\le 0.1,\\ \\ell \\ge 0.6\\)', 'Bullish after a decline'],
            ['Gravestone doji', '\\(b \\le 0.1,\\ \\ell \\le 0.1,\\ u \\ge 0.6\\)', 'Bearish after a rise'],
            ['Long-legged doji', '\\(b \\le 0.1,\\ u \\ge 0.3,\\ \\ell \\ge 0.3\\)', 'Strong indecision'],
            ['Hammer / hanging man', '\\(\\text{lower} \\ge 2\\times\\text{body},\\ u \\le 0.1\\)', 'Hammer after a fall; hanging man after a rise'],
            ['Inverted hammer / shooting star', '\\(\\text{upper} \\ge 2\\times\\text{body},\\ \\ell \\le 0.1\\)', 'Inverted hammer after a fall; shooting star after a rise'],
            ['Marubozu', '\\(u \\le 0.05,\\ \\ell \\le 0.05\\)', 'Strong continuation (or start of a move)'],
            ['Spinning top', '\\(b \\le 0.35\\), both shadows longer than the body', 'Indecision'],
          ],
          caption: 'These are the rules used by the anatomy explorer and the pattern lab on this shelf.',
        },
      ],
    },
    {
      id: 'doji',
      title: 'Doji: open equals close',
      blocks: [
        {
          t: 'candles',
          rows: EX.doji,
          title: 'A doji after an uptrend',
          boxes: [UP_BOX],
          points: [
            { i: 5, label: 'Doji: open ≈ close', at: 'high' },
            { i: 6, label: 'Confirmation: lower close', at: 'low' },
          ],
          caption: 'After five strong up candles, buyers and sellers fought to a draw. The next candle closing lower confirms the momentum has stalled.',
        },
        {
          t: 'candles',
          rows: EX.dragonfly,
          title: 'Dragonfly doji at the end of a decline',
          boxes: [DOWN_BOX],
          points: [{ i: 5, label: 'Dragonfly', at: 'low' }],
          caption: 'Sellers drove the price far down during the session, but buyers pushed it all the way back to the open: a strong rejection of lower prices.',
        },
        {
          t: 'candles',
          rows: EX.gravestone,
          title: 'Gravestone doji at the top of a rise',
          boxes: [UP_BOX],
          points: [{ i: 5, label: 'Gravestone', at: 'high' }],
          caption: 'The opposite: buyers pushed up, sellers sent it all the way back down to the open.',
        },
        { t: 'callout', tone: 'fact', title: 'Where the name comes from', text: 'Doji (同時) means "same time": the open and close at the same price. Nison quotes a Japanese saying that a doji at the top of a market is "a warning when it appears after a long white candle".' },
      ],
    },
    {
      id: 'hammer',
      title: 'Hammer and hanging man',
      blocks: [
        {
          t: 'candles',
          rows: EX.hammer,
          title: 'Hammer: bullish reversal',
          boxes: [DOWN_BOX, { from: 6, to: 7, label: 'Confirmed', color: 'var(--mint)' }],
          points: [{ i: 5, label: 'Hammer', at: 'low' }],
          caption: 'Lower shadow 5.7 against a body of 1.6 (over 3×), almost no upper shadow. The market "hammered out a bottom".',
        },
        {
          t: 'candles',
          rows: EX.hangingMan,
          title: 'Hanging man: same shape, bearish warning',
          boxes: [UP_BOX, { from: 6, to: 7, label: 'Confirmed', color: 'var(--pink)' }],
          points: [{ i: 5, label: 'Hanging man', at: 'high' }],
          caption: 'The long lower shadow shows that sellers could push the price down sharply during the day: a sign that the uptrend is losing its grip.',
        },
        {
          t: 'p',
          text: '**Why the same shape can mean opposite things**: after a decline, a long lower shadow shows buyers stepping in and rejecting low prices. After a rise, the same long lower shadow shows that sellers have appeared and can push the price down. The candle records a fight; the trend tells you whose territory it happened in.',
        },
      ],
    },
    {
      id: 'stars',
      title: 'Inverted hammer and shooting star',
      blocks: [
        {
          t: 'candles',
          rows: EX.shootingStar,
          title: 'Shooting star after an uptrend',
          boxes: [UP_BOX, { from: 6, to: 7, label: 'Follow-through', color: 'var(--pink)' }],
          points: [{ i: 5, label: 'Shooting star', at: 'high' }],
          caption: 'Upper shadow 6.6 against a body of 1.4: the rally to 110 was completely rejected.',
        },
        {
          t: 'candles',
          rows: EX.invertedHammer,
          title: 'Inverted hammer after a downtrend',
          boxes: [DOWN_BOX, { from: 6, to: 7, label: 'Confirmed', color: 'var(--mint)' }],
          points: [{ i: 5, label: 'Inverted hammer', at: 'low' }],
          caption: 'Buyers tested higher prices for the first time in days. It needs a strong next candle to confirm.',
        },
      ],
    },
    {
      id: 'others',
      title: 'Marubozu, spinning top and long-legged doji',
      blocks: [
        {
          t: 'candles',
          rows: EX.marubozu,
          title: 'Bullish marubozu',
          points: [{ i: 2, label: 'No shadows: open = low, close = high', at: 'high' }],
          caption: 'Buyers controlled every moment of the session.',
        },
        {
          t: 'candles',
          rows: EX.spinningTop,
          title: 'Spinning top',
          points: [{ i: 2, label: 'Small body, two long shadows', at: 'high' }],
          caption: 'Both sides tried and failed: a pause, often seen before a change of direction.',
        },
        {
          t: 'candles',
          rows: EX.longLegged,
          title: 'Long-legged doji',
          points: [{ i: 2, label: 'Long-legged doji', at: 'high' }],
        },
      ],
    },
    {
      id: 'try',
      title: 'Try the shapes',
      blocks: [
        { t: 'fin-tool', tool: 'anatomy' },
        {
          t: 'dodont',
          do: ['Read the candle in the context of the trend and nearby support or resistance.', 'Wait for the next candle to confirm.', 'Give more weight to patterns with higher volume and at key levels.'],
          dont: ['Trade a hammer in the middle of a sideways range.', 'Treat a single candle as a guarantee.', 'Forget that the timeframe changes the picture.'],
        },
      ],
    },
  ],
  sources: [
    'Nison, S. (1991). *Japanese Candlestick Charting Techniques*. New York Institute of Finance.',
    'Bulkowski, T. N. (2008). *Encyclopedia of Candlestick Charts*. Wiley.',
    'Morris, G. L. (2006). *Candlestick Charting Explained* (3rd ed.). McGraw-Hill.',
  ],
  related: ['finance/candlesticks/double', 'finance/candlesticks/reliability', 'finance/technical/trends'],
}

export default guide
