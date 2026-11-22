import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Gross domestic product (GDP) measures everything an economy produces. It does not grow in a straight line: economies expand and contract in a **business cycle** of booms and recessions. Markets look ahead, so investors watch the indicators that tend to move before the economy does.',
  nutshell: [
    '**GDP = C + I + G + (X − M)**: consumption, investment, government spending and net exports.',
    '**Real** GDP removes inflation; **nominal** GDP does not.',
    'The cycle runs: expansion → peak → contraction (recession) → trough → recovery.',
    'Stock markets usually turn **before** the economy; an **inverted yield curve** has preceded most US recessions since the 1960s.',
  ],
  sections: [
    {
      id: 'gdp',
      title: 'Measuring the economy',
      blocks: [
        {
          t: 'math',
          tex: String.raw`Y = C + I + G + (X - M)`,
          syntax: [
            { sym: String.raw`Y`, say: String.raw`Total output (GDP). By accounting identity, total spending equals total output.` },
            { sym: String.raw`(X - M)`, say: String.raw`Read "exports minus imports". Work out the bracket first; the answer is negative when a country imports more than it exports.` },
          ],
          worked: {
            steps: [
              String.raw`Given (stylised US-scale, trillions of dollars): \(C = 17.3\), \(I = 4.4\), \(G = 4.0\), \(X = 2.1\), \(M = 3.2\).`,
              String.raw`Net exports: \(X - M = 2.1 - 3.2 = -1.1\).`,
              String.raw`Add the spending: \(17.3 + 4.4 + 4.0 = 25.7\).`,
              String.raw`Include net exports: \(Y = 25.7 + (-1.1) = 24.6\).`,
            ],
            answer: String.raw`GDP is $24.6 trillion; the trade deficit subtracts $1.1 trillion, because imports are spending on foreign, not domestic, output.`,
          },
          where: [
            { sym: 'C', def: 'Household consumption' },
            { sym: 'I', def: 'Business investment (machines, buildings, inventories)' },
            { sym: 'G', def: 'Government purchases' },
            { sym: 'X − M', def: 'Exports minus imports (net exports)' },
          ],
          caption: 'The expenditure approach: add up every dollar spent on final goods and services in the economy. A rising Y means the economy produced and sold more; two straight quarters of falling Y is the rule-of-thumb trigger for calling a recession (see below). But GDP only counts market transactions, so it is a measure of output, not of welfare, it says nothing about who the output went to or what was lost along the way (see the Kuznets callout).',
        },
        {
          t: 'math',
          tex: String.raw`\text{Real GDP growth} \approx \text{Nominal GDP growth} - \text{Inflation}`,
          syntax: [
            { sym: String.raw`\approx`, say: String.raw`Read "is approximately": the exact relation divides rather than subtracts, but for small rates subtraction is close.` },
          ],
          worked: {
            steps: [
              String.raw`Given: nominal GDP grew 6.2% and inflation was 3.4%.`,
              String.raw`Approximation: \(6.2\% - 3.4\% = 2.8\%\).`,
              String.raw`Exact: \(\frac{1.062}{1.034} - 1 \approx 0.02708\), i.e. 2.71%.`,
            ],
            answer: String.raw`Real output grew about 2.7% (the subtraction shortcut gives 2.8%); the other 3.4% was just higher prices.`,
          },
          where: [
            { sym: 'Nominal GDP growth', def: 'The rise in the dollar value of output, part of which is just higher prices' },
            { sym: 'Inflation', def: 'The share of that rise that is pure price increase, not more stuff produced' },
          ],
          caption: 'Strip out inflation and what is left is the actual increase in goods and services produced. Headlines often quote nominal growth because it is the bigger, more exciting number, always check which one you are reading. If nominal growth is 5% and inflation is 3%, the economy is really only producing about 2% more; at 5% nominal growth and 6% inflation, real output actually shrank even though the nominal number looks positive.',
        },
        { t: 'callout', tone: 'fact', title: 'Its inventor’s warning', text: 'Simon Kuznets, who developed national income accounts for the US Congress in 1934, warned that "the welfare of a nation can scarcely be inferred from a measurement of national income". GDP counts a car crash’s repairs as output and ignores unpaid work.' },
      ],
    },
    {
      id: 'cycle',
      title: 'The business cycle',
      blocks: [
        {
          t: 'plot',
          title: 'The business cycle around a growing trend',
          x: [0, 20],
          y: [80, 160],
          xLabel: 'Years',
          yLabel: 'Real GDP',
          curves: [
            { f: (t: number) => 100 + 2.5 * t, label: 'Long-run trend', dashed: true },
            { f: (t: number) => 100 + 2.5 * t + 8 * Math.sin((t * 2 * Math.PI) / 8), label: 'Actual output' },
          ],
          shade: [
            { from: 0, to: 2, label: 'Expansion', color: 'var(--mint)' },
            { from: 2, to: 6, label: 'Contraction', color: 'var(--pink)' },
            { from: 6, to: 10, label: 'Recovery', color: 'var(--mint)' },
            { from: 10, to: 14, label: 'Contraction', color: 'var(--pink)' },
          ],
          caption: 'Real cycles are irregular in length and depth; this is a stylised picture.',
        },
        {
          t: 'table',
          head: ['Phase', 'Economy', 'Typical market behaviour'],
          rows: [
            ['Early expansion', 'Growth picks up, rates low', 'Stocks often strong, cyclical sectors lead'],
            ['Late expansion', 'Tight labour market, inflation rising', 'Central banks raise rates; leadership narrows'],
            ['Contraction', 'Output and jobs fall', 'Stocks fall, usually before the recession is declared; bonds rally'],
            ['Trough', 'Bottoming out', 'Stocks often turn up while the news is still bad'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'What is a recession?', text: 'A popular rule of thumb is two consecutive quarters of falling real GDP. In the US, the official dates are set by a committee of the National Bureau of Economic Research, which looks at a broader set of data.' },
      ],
    },
    {
      id: 'yield-curve',
      title: 'The yield curve',
      blocks: [
        {
          t: 'plot',
          title: 'Normal and inverted yield curves',
          x: [0, 30],
          y: [0, 6],
          xLabel: 'Years to maturity',
          yLabel: 'Yield (%)',
          data: [
            { pts: [[0.25, 2], [2, 2.8], [5, 3.4], [10, 3.9], [30, 4.4]], label: 'Normal: long rates above short', dots: true },
            { pts: [[0.25, 5.3], [2, 4.9], [5, 4.4], [10, 4.2], [30, 4.3]], label: 'Inverted: short rates above long', dots: true },
          ],
          caption: 'Normally, lenders demand more for tying money up longer. When short rates rise above long rates, markets expect the central bank to cut rates later, often because they expect a slowdown.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Term spread} = y_{10\text{-year}} - y_{3\text{-month}}`,
          syntax: [
            { sym: String.raw`y_{10\text{-year}}`, say: String.raw`Read "y sub ten-year": the yield on the 10-year government bond. The subscript labels the maturity.` },
            { sym: String.raw`-`, say: String.raw`A plain subtraction, but order matters: long yield first, short yield second. A negative answer means the curve is inverted.` },
          ],
          worked: {
            steps: [
              String.raw`Given: the 10-year yield is 4.2% and the 3-month yield is 5.3%.`,
              String.raw`Term spread = \(4.2 - 5.3 = -1.1\) percentage points.`,
              String.raw`Compare a normal curve: 10-year 4.5%, 3-month 3.0% gives \(4.5 - 3.0 = +1.5\).`,
            ],
            answer: String.raw`A spread of -1.1 points is an inverted curve, the classic recession warning; +1.5 is a normal, healthy curve.`,
          },
          caption: 'A negative spread preceded each US recession since the late 1960s, with a lag of roughly 6 to 24 months, and only a few false signals. It is a warning, not a timer.',
        },
        {
          t: 'metric',
          name: 'the term spread (10-year minus 3-month yield)',
          shows: 'Whether the bond market expects the economy to be stronger or weaker in the future than it is now. Long-term yields largely reflect where investors expect short-term rates to average over the decade ahead, so a shrinking or negative spread is the bond market quietly betting that the central bank will be cutting rates, usually because a slowdown is coming.',
          eli5: 'Normally, a bank pays you more interest to lock your money away for 10 years than for 3 months, because you are giving up more flexibility. If the bank ever offered you *less* for locking it away longer, you would suspect they expect rates (and the economy) to get worse soon, that is exactly what an inverted yield curve is signalling about the whole economy.',
          higher: 'A steep, positive spread (long rates well above short rates) usually reflects a healthy, growing economy where the central bank is not expected to need to cut rates soon, sometimes also a sign of expected inflation ahead.',
          lower: 'A shrinking spread, and especially a negative one ("inverted curve"), has historically been one of the most reliable recession warnings in the US, preceding every recession since the late 1960s. It is a warning with a long and variable lag (6 to 24 months), not a precise countdown, and it has given a small number of false signals too.',
          typical: 'A "normal" spread is often around 1–2 percentage points; spreads below zero are rare and newsworthy, the 2019 and 2022–23 inversions were widely covered financial news precisely because of this track record.',
        },
      ],
    },
  ],
  sources: [
    'Kuznets, S. (1934). *National Income, 1929–1932*. US Senate Document 124.',
    'Estrella, A., & Mishkin, F. S. (1998). Predicting U.S. recessions: Financial variables as leading indicators. *Review of Economics and Statistics*, 80(1), 45–61.',
    'Mankiw, N. G. (2021). *Principles of Economics* (9th ed.). Cengage.',
  ],
  related: ['finance/economics/central-banks', 'finance/economics/inflation-rates'],
}

export default guide
