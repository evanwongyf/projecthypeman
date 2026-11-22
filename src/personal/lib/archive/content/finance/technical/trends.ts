import type { Guide } from '../../../guide'
import { CHART } from '../../../../finance/examples'

const guide: Guide = {
  intro:
    '**Support** is a price level where buying has been strong enough to stop a fall; **resistance** is where selling has stopped a rise. Trendlines and channels extend the same idea to sloping markets. These are the simplest and most widely used tools in technical analysis.',
  nutshell: [
    'Support and resistance form where many traders remember a price: old highs and lows, round numbers, big volume.',
    'The more times a level holds, and the more volume there, the more significant it is.',
    '**Role reversal**: once broken, resistance often becomes support, and vice versa.',
    'An uptrend line joins rising lows; a downtrend line joins falling highs. A parallel line makes a **channel**.',
    'Breakouts are more convincing on a close beyond the level, with rising volume.',
  ],
  sections: [
    {
      id: 'sr',
      title: 'Support and resistance',
      blocks: [
        {
          t: 'candles',
          rows: CHART.range,
          title: 'A range bounded by support and resistance',
          lines: [
            { y: 108.2, label: 'Resistance ≈ 108' },
            { y: 100.2, label: 'Support ≈ 100' },
          ],
          points: [
            { i: 4, label: 'Rejected', at: 'high' },
            { i: 14, label: 'Rejected', at: 'high' },
            { i: 24, label: 'Rejected', at: 'high' },
            { i: 9, label: 'Held', at: 'low' },
            { i: 19, label: 'Held', at: 'low' },
            { i: 29, label: 'Held', at: 'low' },
          ],
          caption: 'Three touches at each level. Range traders buy near support and sell near resistance, with stops just beyond.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Why levels work (when they do)', body: 'Buyers who missed the last bounce wait to buy at the same price; sellers who bought at the top wait to "get out at break-even". Memory creates orders at the same levels.' },
            { title: 'Round numbers', body: 'Prices like 100, 50 or 1,000 attract orders simply because people like round numbers.' },
            { title: 'Zones, not lines', body: 'Treat levels as zones of a few percent, not exact prices.' },
          ],
        },
      ],
    },
    {
      id: 'reversal',
      title: 'Role reversal',
      blocks: [
        {
          t: 'candles',
          rows: CHART.roleReversal,
          title: 'Resistance becomes support',
          lines: [{ y: 104.2, label: 'Old resistance → new support' }],
          boxes: [
            { from: 0, to: 15, label: 'Resistance at 104', color: 'var(--pink)' },
            { from: 16, to: 24, label: 'Breakout', color: 'var(--mint)' },
            { from: 25, to: 30, label: 'Retest holds', color: 'var(--mustard)' },
          ],
          caption: 'Traders who sold at 104 regret it after the breakout and buy when price returns there; the old ceiling becomes a floor.',
        },
      ],
    },
    {
      id: 'trendlines',
      title: 'Trendlines and channels',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(t) = P(t_1) + m\,(t - t_1),\qquad m = \frac{P(t_2) - P(t_1)}{t_2 - t_1}`,
          where: [
            { sym: String.raw`t_1, t_2`, def: 'Two swing lows (for an uptrend line)' },
            { sym: 'm', def: 'Slope: price change per period' },
          ],
          caption: 'A trendline through two points, extended to project where support should be in future. On long charts, draw it on a log scale so the slope is a percentage rate. The sign of m tells you the trend’s direction (positive slope under rising lows, negative under falling highs); how closely price keeps returning to the line, rather than its exact angle, is what tells you how much other traders are watching it.',
          syntax: [
            { sym: String.raw`P(t)`, say: String.raw`Read "P of t": the price at time \(t\). The brackets mean "as a function of", not multiplication.` },
            { sym: String.raw`t_1, t_2`, say: String.raw`Read "t one" and "t two": the first and second chosen points. The subscripts are labels.` },
            { sym: String.raw`\frac{P(t_2) - P(t_1)}{t_2 - t_1}`, say: String.raw`Read "rise over run": price change divided by time elapsed between the two points.` },
          ],
          worked: {
            title: String.raw`Projecting an uptrend line`,
            steps: [
              String.raw`Given swing lows: \(P(3) = 100\) and \(P(8) = 104\), so \(t_1 = 3\), \(t_2 = 8\).`,
              String.raw`Slope: \(m = (104 - 100)/(8 - 3) = 4/5 = 0.8\) per period.`,
              String.raw`Line: \(P(t) = 100 + 0.8(t - 3)\).`,
              String.raw`At \(t = 15\): \(P(15) = 100 + 0.8 \times 12 = 100 + 9.6 = 109.6\).`,
            ],
            answer: String.raw`The line projects support at 109.6 by period 15; a close well below it would break the trend.`,
          },
        },
        {
          t: 'candles',
          rows: CHART.channel,
          title: 'A rising channel',
          segments: [
            { from: [3, 100], to: [27, 115], label: 'Channel top', color: '#d9534f', dashed: true },
            { from: [7, 95], to: [27, 107.5], label: 'Trendline (support)', color: '#2f9e6e' },
          ],
          points: [
            { i: 7, label: '1', at: 'low' },
            { i: 15, label: '2', at: 'low' },
            { i: 23, label: '3 (confirms)', at: 'low' },
          ],
          caption: 'Two points draw a line; a third touch confirms it. The upper line runs parallel through the highs.',
        },
        {
          t: 'dodont',
          do: ['Draw trendlines through clear swing points.', 'Wait for a close beyond the line to call a break.', 'Expect lines to be re-drawn as markets evolve.'],
          dont: ['Force a line through every wiggle.', 'Use very steep trendlines; they break quickly.'],
        },
      ],
    },
    {
      id: 'breakouts',
      title: 'Breakouts and false breakouts',
      blocks: [
        {
          t: 'p',
          text: 'A breakout through resistance on high volume suggests new buyers have overwhelmed the sellers. Many breakouts fail, though: price pokes through and falls back (a **false breakout** or "bull trap"). Common filters are a close beyond the level, a percentage filter (for example 1–3%), or waiting for a retest.',
        },
        { t: 'callout', tone: 'fact', title: 'Stop hunting', text: 'Because so many traders put stop-loss orders just beyond obvious levels, prices often spike briefly through them, triggering the stops, before reversing. Experienced traders place stops a little further away, or at less obvious points.' },
      ],
    },
  ],
  sources: ['Murphy, J. J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.', 'Osler, C. L. (2000). Support for resistance: Technical analysis and intraday exchange rates. *Federal Reserve Bank of New York Economic Policy Review*, 6(2), 53–68.'],
  related: ['finance/technical/chart-patterns', 'finance/technical/moving-averages', 'finance/candlesticks/continuation'],
}

export default guide
