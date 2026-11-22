import type { Guide } from '../../../guide'

const us60s: [number, number][] = [[6.7, 1.1], [5.5, 1.2], [5.7, 1.2], [5.2, 1.3], [4.5, 1.6], [3.8, 2.9], [3.8, 3.1], [3.6, 4.2], [3.5, 5.5]]
const us70s: [number, number][] = [[4.9, 5.7], [5.9, 4.4], [5.6, 3.2], [4.9, 6.2], [5.6, 11.0], [8.5, 9.1], [7.7, 5.8], [7.1, 6.5], [6.1, 7.6], [5.8, 11.3], [7.1, 13.5]]

const guide: Guide = {
  intro:
    'In 1958 the New Zealand economist A. W. Phillips plotted almost a century of British data and found a striking pattern: when unemployment was low, wages rose fast; when it was high, they rose slowly. Within a few years economists were treating the curve as a menu: pick a little more inflation, get a little less unemployment. Then, in the 1970s, both rose together and the menu fell apart. The story of what went wrong, and how central banks rebuilt policy around expectations, is one of the great episodes in economics. This guide derives the expectations-augmented Phillips curve, shows why trying to hold unemployment below its natural rate makes inflation accelerate, works through the cost of bringing inflation down, and explains why the curve flattened in the 2010s and then seemed to wake up in 2021–22.',
  nutshell: [
    'The original **Phillips curve**: lower unemployment goes with higher wage and price inflation.',
    '**Friedman and Phelps** (1967–68): the trade-off exists only for **unexpected** inflation. Once people expect inflation, the curve shifts up.',
    'There is a **natural rate (NAIRU)**; holding unemployment below it makes inflation **accelerate** year after year.',
    'Bringing inflation down has a **sacrifice ratio**: lost output per point of disinflation. Credible central banks pay less.',
    'With expectations **anchored** at an inflation target, the curve looks **flat**; large shocks can steepen it again.',
  ],
  sections: [
    {
      id: 'original',
      title: 'The original curve and the menu',
      lead: 'A trade-off that seemed stable.',
      blocks: [
        { t: 'p', text: 'Phillips’s 1958 paper showed a smooth downward-sloping relation between unemployment and money-wage growth in Britain from 1861 to 1913, and the post-war years fitted it well. In 1960 Paul Samuelson and Robert Solow found a similar pattern for US price inflation and suggested it offered policymakers a choice between combinations of inflation and unemployment. US data through the 1960s traced it almost perfectly.' },
        {
          t: 'plot',
          title: 'US unemployment and inflation, 1961–1969',
          x: [2, 10],
          y: [0, 14],
          xLabel: 'unemployment rate (%)',
          yLabel: 'CPI inflation (%)',
          data: [{ pts: us60s, label: '1961 → 1969', dots: true }],
          points: [
            { x: 6.7, y: 1.1, label: '1961' },
            { x: 3.5, y: 5.5, label: '1969' },
          ],
          caption: 'Annual averages from the US Bureau of Labor Statistics (rounded). As unemployment fell through the 1960s boom, inflation rose steadily: a textbook Phillips curve.',
        },
      ],
    },
    {
      id: 'expectations',
      title: 'Expectations and the natural rate',
      lead: 'Friedman and Phelps change the curve.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\pi_t = \pi^e_t - \beta\,(u_t - u^*) + \nu_t`,
          plain: 'Inflation equals what people expected, minus a term that depends on how far unemployment is from its natural rate, plus any supply shock. When unemployment is at its natural rate and there are no shocks, inflation equals expected inflation, whatever that is. Pushing unemployment below the natural rate raises inflation above expectations, but only until expectations catch up.',
          syntax: [
            { sym: String.raw`\pi_t`, say: 'Read "pi t": inflation in period t.' },
            { sym: String.raw`\pi^e_t`, say: 'Expected inflation, built into wage and price setting.' },
            { sym: String.raw`u^*`, say: 'The natural rate of unemployment (NAIRU).' },
            { sym: String.raw`\nu_t`, say: 'Read "nu": a supply shock such as an oil-price jump.' },
          ],
          where: [{ sym: 'β', def: 'How strongly inflation responds to the unemployment gap: the slope' }],
          worked: {
            title: 'Holding unemployment below the natural rate',
            steps: [
              String.raw`\(u^* = 5\%\), \(\beta = 0.5\), expectations formed from last year: \(\pi^e_t = \pi_{t-1}\). Inflation starts at 2%.`,
              String.raw`Policy holds unemployment at 3%: \(\pi_1 = 2 - 0.5(3 - 5) = 3\%\).`,
              String.raw`Next year people expect 3%: \(\pi_2 = 3 + 1 = 4\%\). Then 5%, 6%, 7%…`,
              String.raw`To stop inflation rising, unemployment must return to 5%, and inflation then stays wherever it has got to.`,
            ],
            why: ['the setting', 'a one-off gain', 'expectations catch up and the curve shifts up', 'the natural rate is the only stable point'],
            answer: 'Unemployment 2 points below the natural rate adds 1 point to inflation every year. There is no lasting trade-off, only a choice of inflation rate, which is why this is called the accelerationist Phillips curve.',
          },
        },
        {
          t: 'plot',
          title: 'Short-run Phillips curves shift up as expectations rise',
          x: [0, 10],
          y: [-2, 12],
          xLabel: 'unemployment rate (%)',
          yLabel: 'inflation (%)',
          curves: [
            { f: (u: number) => 2 - 0.5 * (u - 5), label: 'expected inflation 2%' },
            { f: (u: number) => 4 - 0.5 * (u - 5), label: 'expected 4%' },
            { f: (u: number) => 6 - 0.5 * (u - 5), label: 'expected 6%' },
          ],
          vlines: [{ x: 5, label: 'long-run curve at u* = 5%' }],
          points: [
            { x: 3, y: 3, label: 'year 1' },
            { x: 3, y: 5, label: 'year 3' },
            { x: 3, y: 7, label: 'year 5' },
          ],
          caption: 'Each year at 3% unemployment moves the economy to a higher short-run curve. In the long run, the Phillips curve is vertical at the natural rate.',
        },
        { t: 'quote', text: 'There is always a temporary trade-off between inflation and unemployment; there is no permanent trade-off.', by: 'Milton Friedman, presidential address to the American Economic Association (1968)' },
      ],
    },
    {
      id: 'seventies',
      title: 'The 1970s: the menu breaks down',
      lead: 'Stagflation, as predicted.',
      blocks: [
        {
          t: 'plot',
          title: 'US unemployment and inflation, 1961–1980',
          x: [2, 10],
          y: [0, 14],
          xLabel: 'unemployment rate (%)',
          yLabel: 'CPI inflation (%)',
          data: [
            { pts: us60s, label: '1961–69', dots: true },
            { pts: us70s, label: '1970–80', dots: true },
          ],
          points: [
            { x: 5.6, y: 11.0, label: '1974' },
            { x: 7.1, y: 13.5, label: '1980' },
          ],
          caption: 'Rounded annual averages (BLS). After 1969 the points leave the 1960s curve: rising expected inflation and the oil shocks of 1973–74 and 1979 pushed the curve up, so high unemployment and high inflation came together.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Rising expectations', body: 'After years of rising inflation, workers and firms built more of it into wages and prices, just as Friedman and Phelps had predicted before it happened.' },
            { title: 'Supply shocks', body: 'Oil prices quadrupled in 1973–74 and doubled again in 1979, the ν term in the equation, shifting the curve up directly.' },
            { title: 'Accommodating policy', body: 'Central banks kept interest rates low to protect jobs, which validated the higher inflation and kept expectations rising.' },
            { title: 'The rational expectations critique', body: 'Robert Lucas argued that if people form expectations using all available information, even short-run trade-offs vanish for predictable policy, and that relationships estimated under one policy break down under another (the Lucas critique).' },
          ],
        },
      ],
    },
    {
      id: 'disinflation',
      title: 'Bringing inflation down: the sacrifice ratio',
      lead: 'What disinflation costs.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{sacrifice ratio} = \frac{\text{cumulative output lost (\% of a year's GDP)}}{\text{fall in trend inflation (points)}}`,
          plain: 'To bring inflation down when expectations are high, unemployment must rise above its natural rate for a while, so inflation comes in below expectations and they adjust down. The total output lost per point of inflation removed is the sacrifice ratio. It is smaller when the central bank is credible, because expectations fall faster.',
          syntax: [{ sym: String.raw`\text{points}`, say: 'Percentage points of inflation.' }],
          worked: {
            title: 'Using the Phillips curve and Okun’s law',
            steps: [
              String.raw`Inflation is 10%; the target is 4%. With \(\beta = 0.5\) and adaptive expectations, each point of unemployment above \(u^*\) for a year cuts inflation by 0.5 points.`,
              String.raw`Removing 6 points of inflation needs \(6 / 0.5 = 12\) point-years of excess unemployment (say 4 points for 3 years).`,
              String.raw`By [Okun’s law](@economics/labour/unemployment), each point-year of unemployment costs about 2% of a year’s GDP: \(12 \times 2 = 24\%\).`,
              String.raw`Sacrifice ratio: \(24 / 6 = 4\).`,
            ],
            why: ['the target and the slope', 'how much slack it takes', 'convert unemployment into output', 'per point of disinflation'],
            answer: 'In this model, cutting inflation by 6 points costs about a quarter of a year’s GDP. Actual estimates for rich countries are often lower (around 1 to 3), partly because credible announcements lower expectations directly.',
          },
        },
        {
          t: 'steps',
          items: [
            { title: '1979: Volcker takes over', body: 'US inflation is above 11%. The new Federal Reserve chair tightens policy sharply; interest rates reach about 20% in 1981.' },
            { title: '1981–82: deep recession', body: 'Unemployment peaks near 11% in late 1982, the highest since the 1930s.' },
            { title: '1983: inflation falls', body: 'CPI inflation is down to about 3%. Expectations follow over the following years.' },
            { title: 'Lessons', body: 'Disinflation is costly but possible; credibility earned this way makes later inflation easier to control. Inflation targeting, adopted by New Zealand in 1990 and many others since, institutionalises it.' },
          ],
        },
      ],
    },
    {
      id: 'anchored',
      title: 'Anchored expectations and a flatter curve',
      lead: 'The 2010s and the 2020s.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\pi_t = \bar{\pi} - \beta\,(u_t - u^*) + \nu_t, \qquad \bar{\pi} \approx \text{the inflation target}`,
          plain: 'When people trust the central bank to deliver its target, expected inflation stays near the target regardless of last year’s inflation. Then a fall in unemployment no longer feeds into ever-rising expectations, and the curve looks flat: unemployment can fall a long way with little effect on inflation.',
          syntax: [{ sym: String.raw`\bar{\pi}`, say: 'Read "pi bar": the anchored level of expected inflation, near the target (often 2%).' }],
          worked: {
            steps: [
              String.raw`Estimated slopes in the 2010s were small, around \(\beta = 0.1\) to \(0.2\).`,
              String.raw`With \(\beta = 0.15\), cutting unemployment from 5% to 3.5% adds only \(0.15 \times 1.5 \approx 0.2\) points of inflation.`,
              String.raw`In 2021–22 a large supply shock (\(\nu\) of several points) plus very tight labour markets pushed inflation to its highest in four decades.`,
            ],
            why: ['the flat-curve evidence', 'low unemployment, barely any inflation', 'shocks and tightness together'],
            answer: 'A flat curve is good news for keeping inflation stable but makes inflation a poor signal of how much slack there is. Once inflation runs well above target for long enough, expectations can de-anchor, which is why central banks raised rates hard in 2022–23.',
          },
        },
        {
          t: 'table',
          head: ['Period', 'Picture', 'Why'],
          rows: [
            ['1960s', 'A clear downward slope', 'Stable low expected inflation; demand moved the economy along the curve'],
            ['1970s', 'Points scattered up and to the right', 'Rising expectations and oil shocks shifted the curve'],
            ['1980s', 'Inflation falls, unemployment spikes', 'Disinflation along a curve that was shifting down'],
            ['1990s–2010s', 'A nearly flat line around 2%', 'Inflation targeting anchored expectations'],
            ['2021–23', 'Inflation surges, then falls', 'Supply shocks, tight labour markets and fast rate rises'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'In Singapore',
          text: 'MAS targets inflation through the exchange rate rather than an interest rate, and watches core inflation (excluding accommodation and private transport, which are driven by property and COE prices). With imports a large share of consumption, imported inflation and the S$NEER matter more than in large economies, but the logic of expectations is the same. See [MAS and the S$NEER](@banking/theory/central-banking-singapore).',
        },
      ],
    },
  ],
  sources: [
    'Phillips, A. W. (1958). The relation between unemployment and the rate of change of money wage rates in the United Kingdom, 1861–1957. *Economica*, 25(100), 283–299.',
    'Samuelson, P. A., and Solow, R. M. (1960). Analytical aspects of anti-inflation policy. *American Economic Review*, 50(2), 177–194.',
    'Friedman, M. (1968). The role of monetary policy. *American Economic Review*, 58(1), 1–17.',
    'Phelps, E. S. (1967). Phillips curves, expectations of inflation and optimal unemployment over time. *Economica*, 34(135), 254–281.',
    'Ball, L. (1994). What determines the sacrifice ratio? In N. G. Mankiw (Ed.), *Monetary Policy*. University of Chicago Press.',
    'Hazell, J., Herreño, J., Nakamura, E., and Steinsson, J. (2022). The slope of the Phillips curve: Evidence from U.S. states. *Quarterly Journal of Economics*, 137(3), 1299–1344.',
    'US Bureau of Labor Statistics. Consumer Price Index; Current Population Survey. bls.gov.',
  ],
  related: ['economics/macro/ad-as', 'economics/labour/unemployment', 'finance/economics/central-banks', 'finance/economics/inflation-rates'],
}

export default guide
