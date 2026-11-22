import type { Guide } from '../../../guide'
import { CHART } from '../../../../finance/examples'

const guide: Guide = {
  intro:
    'A chart is a picture of the price over time, and the type of chart, the timeframe and the scale all change what you see. Getting these right is the first step in any technical analysis.',
  nutshell: [
    '**Line charts** join the closing prices; clean but they hide the range.',
    '**Bar (OHLC) charts** and **candlestick charts** show the open, high, low and close of every period.',
    'The **timeframe** (minutes to months) should match how long you plan to hold.',
    'On a **log scale**, equal percentage moves look the same size. Use it for long periods or large moves.',
  ],
  sections: [
    {
      id: 'types',
      title: 'Chart types',
      blocks: [
        {
          t: 'table',
          head: ['Chart', 'Shows', 'Best for'],
          rows: [
            ['Line', 'Closing prices joined by a line', 'Big picture, comparing markets'],
            ['Bar (OHLC)', 'A vertical bar from high to low, a tick left for the open and right for the close', 'Detail, in the Western tradition'],
            ['Candlestick', 'The same four prices, with a coloured body between open and close', 'Seeing each period’s battle at a glance'],
            ['Point and figure', 'Columns of X (rises) and O (falls), ignoring time', 'Filtering noise, finding breakouts'],
          ],
        },
        {
          t: 'candles',
          rows: CHART.range,
          title: 'Candlestick chart of a sideways market',
          boxes: [{ from: 0, to: 34, lo: 100, hi: 108.4, label: 'Trading range', color: 'var(--lavender)' }],
          caption: 'Every candle shows open, high, low and close. A line chart of the same data would show only the closes.',
        },
      ],
    },
    {
      id: 'scale',
      title: 'Linear and log scales',
      blocks: [
        {
          t: 'p',
          text: 'On a **linear** (arithmetic) scale, the distance from 10 to 20 equals the distance from 100 to 110. On a **logarithmic** scale, the vertical position is the logarithm of the price, so the distance from 10 to 20 (+100%) equals the distance from 100 to 200 (+100%).',
        },
        {
          t: 'math',
          tex: String.raw`y = \log(P) \quad\Rightarrow\quad \Delta y = \log P_2 - \log P_1 = \log\frac{P_2}{P_1}`,
          where: [
            { sym: 'P', def: 'The price plotted on the chart' },
            { sym: 'P_1, P_2', def: 'Two prices being compared (e.g. start and end of a move)' },
            { sym: String.raw`\Delta y`, def: 'The vertical distance between them on the chart' },
          ],
          caption: 'The vertical distance depends only on the ratio of the prices, that is, the percentage change, so a trendline drawn on a log chart stays valid even as the underlying price gets much bigger, which is exactly what breaks down on a linear chart over long periods (see the two plots below).',
          syntax: [
            { sym: String.raw`\log`, say: String.raw`Read "log of": the natural logarithm, which turns multiplying into adding. Doubling a price always adds the same amount, \(\log 2 \approx 0.693\), whatever the starting price.` },
            { sym: String.raw`\Delta y`, say: String.raw`Read "delta y": the change in \(y\). Do "end value minus start value".` },
            { sym: String.raw`\Rightarrow`, say: String.raw`Read "which implies": what follows is a consequence of what came before.` },
            { sym: String.raw`\frac{P_2}{P_1}`, say: String.raw`Read "P two over P one": divide the later price by the earlier one. A result of 2 means the price doubled.` },
          ],
          worked: {
            title: String.raw`Why equal ratios look equal on a log chart`,
            steps: [
              String.raw`Given three moves: \(100 \to 200\), \(200 \to 400\), and \(50 \to 100\). Each is a doubling.`,
              String.raw`On a linear chart the vertical distances are \(200-100 = 100\), \(400-200 = 200\) and \(100-50 = 50\): all different.`,
              String.raw`On a log chart, \(\Delta y = \log(200/100) = \log 2 \approx 0.693\).`,
              String.raw`The second move gives \(\log(400/200) = \log 2 \approx 0.693\), and the third \(\log(100/50) = \log 2 \approx 0.693\).`,
              String.raw`A 10% rise is \(\log(1.1) \approx 0.0953\) whether the price goes \(100 \to 110\) or \(1000 \to 1100\).`,
            ],
            answer: String.raw`All three doublings span the same vertical distance (0.693) on a log chart, because it measures the percentage change, not the dollar change.`,
          },
        },
        {
          t: 'plot',
          title: 'Steady 10% a year for 30 years, on a linear scale',
          x: [0, 30],
          y: [0, 1800],
          xLabel: 'Years',
          yLabel: 'Value (start = 100)',
          curves: [{ f: (t: number) => 100 * 1.1 ** t, label: 'Value' }],
          caption: 'On a linear scale, steady growth looks like nothing happens for 15 years and then a boom.',
        },
        {
          t: 'plot',
          title: 'The same growth, plotted as log₁₀(value)',
          x: [0, 30],
          y: [1.9, 3.4],
          xLabel: 'Years',
          yLabel: 'log₁₀(value)',
          curves: [{ f: (t: number) => Math.log10(100 * 1.1 ** t), label: 'log value', color: '#e07b2a' }],
          caption: 'On a log scale, constant percentage growth is a straight line. Trendlines over long periods should be drawn on log charts.',
        },
        { t: 'callout', tone: 'fact', title: 'Why log charts flatter old crashes', text: 'On a linear chart of the Dow since 1900, the 1929 crash (−89% from peak to trough by 1932) looks like a tiny ripple, while modern dips of 20% look enormous. A log chart puts them in proportion.' },
      ],
    },
    {
      id: 'timeframes',
      title: 'Timeframes',
      blocks: [
        {
          t: 'list',
          items: [
            'Match the chart to your horizon: day traders use minutes, swing traders hours and days, investors weeks and months.',
            'Look one timeframe up for context: a buy signal on the daily chart is stronger if the weekly trend is up.',
            'Shorter timeframes contain more noise relative to the move; signals there are less reliable and costs matter more.',
          ],
        },
      ],
    },
  ],
  sources: ['Murphy, J. J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.', 'Kirkpatrick, C. D., & Dahlquist, J. R. (2015). *Technical Analysis* (3rd ed.). FT Press.'],
  related: ['finance/candlesticks/anatomy', 'finance/technical/trends'],
}

export default guide
