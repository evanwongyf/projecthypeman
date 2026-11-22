import type { Guide } from '../../../guide'
import { CHART } from '../../../../finance/examples'

const guide: Guide = {
  intro:
    'Chart patterns are shapes that price traces over weeks or months, such as a head between two shoulders, two matching peaks, or a narrowing triangle. Each comes with a story about buyers and sellers, a **confirmation** rule and a **measured-move** target. Every chart below is annotated with its key points, lines and zones.',
  nutshell: [
    '**Reversal patterns**: head and shoulders, double tops and bottoms. **Continuation patterns**: triangles, flags, cups and handles.',
    'A pattern is only complete when price **breaks the confirming line** (a neckline or a triangle side).',
    'The classic target is the **measured move**: the pattern’s height projected from the breakout point.',
    'Many breakouts fail. Targets are rough guides, not promises.',
  ],
  sections: [
    {
      id: 'hs',
      title: 'Head and shoulders',
      blocks: [
        {
          t: 'candles',
          rows: CHART.headShoulders,
          title: 'Head and shoulders top',
          height: 360,
          points: [
            { i: 4, label: 'Left shoulder', at: 'high' },
            { i: 14, label: 'Head', at: 'high' },
            { i: 24, label: 'Right shoulder', at: 'high' },
            { i: 29, label: 'Neckline breaks', at: 'low' },
          ],
          segments: [{ from: [9, 95], to: [33, 95.6], label: 'Neckline', color: '#d9534f' }],
          arrows: [
            { i: 14, from: 95.3, to: 108, label: 'Height h ≈ 12.7' },
            { i: 31, from: 95.5, to: 82.8, label: 'Target = neckline − h' },
          ],
          caption: 'The rally to the head fails to hold, the right shoulder is a weaker rally, and the break of the neckline (the line through the two troughs) completes the pattern.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Target} = N - (H - N) = 2N - H`,
          where: [
            { sym: 'H', def: 'Price at the top of the head' },
            { sym: 'N', def: 'Neckline price below the head (at the breakout, for a sloping neckline)' },
          ],
          caption: 'Here H ≈ 108 and N ≈ 95.3, so the target is about 2(95.3) − 108 = 82.6. Read it as a rough objective, not a promise: it simply projects the pattern’s own height downward from the breakout, on the logic that a failed rally of a given size tends to give back a similar size on the way down, but as the reliability section below shows, price often falls short of, or overshoots, the target.',
          syntax: [
            { sym: String.raw`N - (H - N) = 2N - H`, say: String.raw`Read "the neckline minus the height, where the height is the head minus the neckline". Work out the bracket first, subtract it from \(N\), and the result simplifies to twice the neckline minus the head.` },
            { sym: String.raw`\text{Target}`, say: String.raw`A label, not a variable: it is the price objective, read aloud as "target".` },
          ],
          worked: {
            title: String.raw`Head and shoulders target`,
            steps: [
              String.raw`Given: head \(H = 108\), neckline at the breakout \(N = 95.3\).`,
              String.raw`Height of the pattern: \(H - N = 108 - 95.3 = 12.7\).`,
              String.raw`Project it downward from the neckline: \(N - (H - N) = 95.3 - 12.7 = 82.6\).`,
              String.raw`Shortcut check: \(2N - H = 2(95.3) - 108 = 190.6 - 108 = 82.6\), the same.`,
              String.raw`As a percentage fall from the breakout: \(12.7 / 95.3 \approx 13.3\%\).`,
            ],
            answer: String.raw`Target \(= 82.6\): a drop of about 13.3% from the neckline, if the pattern plays out in full.`,
          },
        },
        {
          t: 'candles',
          rows: CHART.inverseHeadShoulders,
          title: 'Inverse head and shoulders (a bottom)',
          height: 360,
          points: [
            { i: 4, label: 'Left shoulder', at: 'low' },
            { i: 14, label: 'Head', at: 'low' },
            { i: 24, label: 'Right shoulder', at: 'low' },
          ],
          segments: [{ from: [9, 105], to: [33, 105.5], label: 'Neckline', color: '#2f9e6e' }],
          arrows: [{ i: 14, from: 105.2, to: 92, label: 'Height' }],
        },
      ],
    },
    {
      id: 'double',
      title: 'Double tops and bottoms',
      blocks: [
        {
          t: 'candles',
          rows: CHART.doubleTop,
          title: 'Double top',
          height: 340,
          points: [
            { i: 5, label: 'Top 1', at: 'high' },
            { i: 17, label: 'Top 2', at: 'high' },
          ],
          lines: [{ y: 95, label: 'Confirmation: the trough between the tops' }],
          boxes: [{ from: 5, to: 17, lo: 103, hi: 105, label: 'Resistance tested twice', color: 'var(--pink)' }],
          arrows: [{ i: 26, from: 95, to: 86, label: 'Height projected down' }],
        },
        {
          t: 'candles',
          rows: CHART.doubleBottom,
          title: 'Double bottom (a "W")',
          height: 340,
          points: [
            { i: 5, label: 'Bottom 1', at: 'low' },
            { i: 17, label: 'Bottom 2', at: 'low' },
          ],
          lines: [{ y: 105, label: 'Breakout level' }],
          boxes: [{ from: 5, to: 17, lo: 94.8, hi: 97, label: 'Support tested twice', color: 'var(--mint)' }],
          arrows: [{ i: 27, from: 105, to: 114, label: 'Target' }],
        },
      ],
    },
    {
      id: 'triangles',
      title: 'Triangles',
      blocks: [
        {
          t: 'candles',
          rows: CHART.ascendingTriangle,
          title: 'Ascending triangle: flat top, rising lows',
          height: 340,
          segments: [
            { from: [3, 104], to: [27, 104], label: 'Flat resistance', color: '#d9534f' },
            { from: [7, 94], to: [27, 100.8], label: 'Rising support', color: '#2f9e6e' },
          ],
          boxes: [{ from: 28, to: 31, label: 'Breakout', color: 'var(--mint)' }],
          caption: 'Buyers step in at higher and higher prices while sellers hold one level. Usually resolves upwards.',
        },
        {
          t: 'candles',
          rows: CHART.descendingTriangle,
          title: 'Descending triangle: flat bottom, falling highs',
          height: 340,
          segments: [
            { from: [3, 96], to: [27, 96], label: 'Flat support', color: '#2f9e6e' },
            { from: [7, 106], to: [27, 99.2], label: 'Falling resistance', color: '#d9534f' },
          ],
          boxes: [{ from: 28, to: 31, label: 'Breakdown', color: 'var(--pink)' }],
        },
        {
          t: 'candles',
          rows: CHART.symmetricalTriangle,
          title: 'Symmetrical triangle: converging lines',
          height: 340,
          segments: [
            { from: [3, 108], to: [27, 101.5], label: 'Lower highs', color: '#d9534f' },
            { from: [7, 95], to: [27, 100.4], label: 'Higher lows', color: '#2f9e6e' },
          ],
          boxes: [{ from: 3, to: 27, label: 'Coiling: volatility shrinks', color: 'var(--lavender)' }],
          caption: 'Neither side is winning; the break, either way, often comes about two-thirds of the way to the apex.',
        },
      ],
    },
    {
      id: 'flags',
      title: 'Flags and the cup and handle',
      blocks: [
        {
          t: 'candles',
          rows: CHART.bullFlag,
          title: 'Bull flag',
          height: 340,
          boxes: [
            { from: 0, to: 2, label: 'Flagpole', color: 'var(--mint)' },
            { from: 3, to: 17, lo: 100.2, hi: 105.5, label: 'Flag: orderly pullback', color: 'var(--lavender)' },
          ],
          segments: [
            { from: [2, 105], to: [14, 103], color: '#7b4fc9', dashed: true },
            { from: [5, 102.5], to: [17, 100.8], color: '#7b4fc9', dashed: true },
          ],
          arrows: [{ i: 1, from: 90, to: 105, label: 'Pole height' }],
          caption: 'A sharp rise (the pole), then a small, gently sloping pause (the flag). The measured move adds the pole’s height to the breakout point.',
        },
        {
          t: 'candles',
          rows: CHART.cupHandle,
          title: 'Cup and handle',
          height: 340,
          boxes: [
            { from: 0, to: 23, label: 'Cup: rounded base', color: 'var(--mint)' },
            { from: 24, to: 31, label: 'Handle', color: 'var(--lavender)' },
          ],
          lines: [{ y: 108, label: 'Rim: buy point on breakout' }],
          caption: 'Popularised by William O’Neil. The rounded bottom shows sellers gradually exhausted; the handle shakes out the last weak holders.',
        },
      ],
    },
    {
      id: 'reality',
      title: 'How reliable are they?',
      blocks: [
        {
          t: 'p',
          text: 'Thomas Bulkowski’s large studies of chart patterns found that many work better than chance in his samples, but with frequent failures, and targets reached only part of the time. Lo, Mamaysky and Wang (2000), using an automated pattern recogniser on US stocks, found that some patterns did shift the distribution of subsequent returns a little, but not enough to guarantee profits after costs. See [does technical analysis work?](@finance/technical/evidence).',
        },
        { t: 'callout', tone: 'fact', title: 'Patterns in pure noise', text: 'Generate a random walk on a computer and you will find heads and shoulders, double tops and triangles in it. That is the strongest argument for testing patterns rather than trusting how convincing they look.' },
      ],
    },
  ],
  sources: [
    'Bulkowski, T. N. (2021). *Encyclopedia of Chart Patterns* (3rd ed.). Wiley.',
    'Lo, A. W., Mamaysky, H., & Wang, J. (2000). Foundations of technical analysis. *The Journal of Finance*, 55(4), 1705–1765.',
    'O’Neil, W. J. (2009). *How to Make Money in Stocks* (4th ed.). McGraw-Hill.',
    'Edwards, R. D., & Magee, J. (1948). *Technical Analysis of Stock Trends*. Stock Trend Service.',
  ],
  related: ['finance/technical/trends', 'finance/technical/evidence', 'finance/candlesticks/reliability'],
}

export default guide
