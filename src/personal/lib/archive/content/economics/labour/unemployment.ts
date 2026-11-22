import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Unemployment is the economic statistic that touches people most directly: behind each percentage point are many thousands of people looking for work and not finding it. But not all unemployment is the same. Some is the normal churn of people between jobs, some reflects a mismatch between the skills people have and the jobs on offer, and some is the result of a recession, when spending collapses and firms stop hiring. This guide explains how unemployment is measured, the kinds and their causes, the arithmetic of flows into and out of work that sets the unemployment rate, the link between unemployment and output (Okun’s law), and the Beveridge curve, which shows whether a labour market’s problem is too few jobs or the wrong match.',
  nutshell: [
    'The **unemployment rate** is the unemployed (without work, available and looking) as a share of the **labour force**, not of the whole population.',
    '**Frictional** (between jobs), **structural** (skills or location mismatch) and **cyclical** (recession) unemployment have different causes and cures.',
    'The steady-state rate is **u = s / (s + f)**: separations against the job-finding rate. Recessions mostly lower **f**.',
    '**Okun’s law**: each point of unemployment above its natural rate goes with output roughly **2% below potential**.',
    'The **Beveridge curve** plots vacancies against unemployment: moving along it is the cycle; **shifting out** means worse matching.',
  ],
  sections: [
    {
      id: 'measure',
      title: 'Measuring unemployment',
      lead: 'Who counts as unemployed.',
      blocks: [
        {
          t: 'diagram',
          title: 'Dividing the working-age population',
          nodes: [
            { id: 'pop', label: 'Working-age population', sub: '15 and over', shape: 'pill', col: 1, row: 0, tone: 'ink' },
            { id: 'lf', label: 'Labour force', sub: 'working or looking', col: 0, row: 1, tone: 'teal' },
            { id: 'nilf', label: 'Outside the labour force', sub: 'students, retirees, carers, discouraged', col: 2, row: 1, tone: 'lavender' },
            { id: 'e', label: 'Employed', sub: 'at least one hour of paid work', col: 0, row: 2, tone: 'mint' },
            { id: 'u', label: 'Unemployed', sub: 'no work, available, actively looking', col: 1, row: 2, tone: 'pink' },
          ],
          edges: [
            { from: 'pop', to: 'lf' },
            { from: 'pop', to: 'nilf' },
            { from: 'lf', to: 'e' },
            { from: 'lf', to: 'u' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`u = \frac{U}{E + U}, \qquad \text{participation} = \frac{E + U}{\text{working-age population}}, \qquad \text{employment rate} = \frac{E}{\text{population}}`,
          plain: 'The unemployment rate divides the unemployed by the labour force. Someone who gives up looking leaves the labour force altogether, so the unemployment rate can fall in a weak economy for a bad reason. That is why the participation and employment rates are read alongside it.',
          syntax: [
            { sym: 'U, E', say: 'The number unemployed and the number employed.' },
          ],
          worked: {
            steps: [
              String.raw`Working-age population 1,000: 640 employed, 20 unemployed, 340 outside the labour force.`,
              String.raw`Labour force \(= 660\); unemployment rate \(= 20/660 \approx 3.0\%\); participation \(= 66\%\).`,
              String.raw`Ten of the unemployed give up looking: \(u = 10/650 \approx 1.5\%\), participation \(= 65\%\).`,
            ],
            why: ['the categories', 'divide by the labour force', 'discouraged workers drop out of both top and bottom'],
            answer: 'The headline rate halves although nobody found a job. Broader measures (counting discouraged and involuntary part-time workers) catch this.',
          },
        },
        { t: 'callout', tone: 'note', title: 'Singapore’s figures', text: 'The Ministry of Manpower publishes overall, resident and citizen unemployment rates each quarter. Singapore’s overall rate has typically been around 2–3%, low by international standards, helped by a flexible labour market and the role of foreign workers, whose permits are tied to jobs, in absorbing swings in demand.' },
      ],
    },
    {
      id: 'types',
      title: 'Kinds of unemployment',
      lead: 'Different causes, different cures.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Frictional', tag: 'searching', body: 'People between jobs or new to the labour market, searching for a good match. Some is healthy: a better match raises productivity. Cures: faster information (job boards, matching platforms).' },
            { title: 'Structural', tag: 'mismatch', body: 'Jobs exist, but not for the skills or places of the unemployed: manufacturing workers when factories move abroad, or jobs in a different city. It can last years. Cures: retraining, mobility support.' },
            { title: 'Cyclical', tag: 'not enough demand', body: 'In a recession, spending falls, firms stop hiring and lay people off. Unemployment rises across almost every sector at once. Cures: monetary and fiscal policy. See [AD–AS](@economics/macro/ad-as).' },
            { title: 'Seasonal', tag: 'predictable', body: 'Jobs that come and go with the seasons: tourism, harvests, festive retail. Statistics are usually seasonally adjusted to remove it.' },
          ],
        },
        {
          t: 'terms',
          items: [
            { term: 'Natural rate of unemployment', def: 'The rate when the economy is at potential output: frictional plus structural unemployment, with no cyclical part. It is not fixed and is estimated, not observed.' },
            { term: 'NAIRU', def: 'The non-accelerating-inflation rate of unemployment: the rate below which inflation tends to rise. Often treated as the natural rate. See [the Phillips curve](@economics/macro/phillips-curve).' },
            { term: 'Hysteresis', def: 'When a long spell of high unemployment raises the natural rate itself, as the long-term unemployed lose skills, contacts and confidence.' },
            { term: 'Long-term unemployment', def: 'Unemployment lasting six months or more (some definitions use a year). Job-finding chances fall the longer a spell lasts.' },
          ],
        },
      ],
    },
    {
      id: 'flows',
      title: 'Flows: the arithmetic behind the rate',
      lead: 'A bathtub with the tap and the drain open.',
      blocks: [
        { t: 'p', text: 'The labour market churns: every month some workers lose or leave their jobs (separations) and some unemployed people find work. The unemployment rate is like the water level in a bath with the tap and drain both open: it is steady when inflow equals outflow.' },
        {
          t: 'math',
          tex: String.raw`s\,E = f\,U \;\;\Rightarrow\;\; s(L - U) = fU \;\;\Rightarrow\;\; u^* = \frac{U}{L} = \frac{s}{s + f}`,
          plain: 'In a steady state, the number of workers losing jobs each month (a share s of the employed) equals the number of unemployed finding them (a share f of the unemployed). Solving gives the unemployment rate in terms of just two flow rates. The average unemployment spell lasts 1/f months.',
          syntax: [
            { sym: String.raw`s`, say: 'The separation rate: the share of employed people who become unemployed each month.' },
            { sym: String.raw`f`, say: 'The job-finding rate: the share of unemployed people who find work each month.' },
            { sym: String.raw`u^*`, say: 'The steady-state unemployment rate.' },
          ],
          where: [{ sym: 'L', def: 'The labour force, E + U' }],
          worked: {
            steps: [
              String.raw`Normal times: \(s = 1\%\) a month, \(f = 30\%\) a month. \(u^* = 0.01/0.31 \approx 3.2\%\). Average spell \(1/0.3 \approx 3.3\) months.`,
              String.raw`Recession: firms hire less, so \(f\) falls to 20%; separations rise to 1.2%. \(u^* = 0.012/0.212 \approx 5.7\%\). Average spell 5 months.`,
              String.raw`Most of the rise comes from slower job finding: with \(s\) unchanged at 1%, \(f = 20\%\) alone gives \(0.01/0.21 \approx 4.8\%\).`,
            ],
            why: ['plug in typical monthly rates', 'both flows worsen', 'separate the two causes'],
            answer: 'Unemployment rises in recessions mainly because job finding slows, not only because of layoffs, a finding Robert Shimer (2012) documented for the US.',
          },
        },
        {
          t: 'plot',
          title: 'Steady-state unemployment against the job-finding rate',
          x: [0.05, 0.6],
          y: [0, 18],
          xLabel: 'monthly job-finding rate f',
          yLabel: 'unemployment rate (%)',
          curves: [
            { f: (f: number) => (100 * 0.01) / (0.01 + f), label: 's = 1% a month' },
            { f: (f: number) => (100 * 0.02) / (0.02 + f), label: 's = 2% a month', dashed: true },
          ],
          points: [
            { x: 0.3, y: 3.2, label: 'normal times 3.2%' },
            { x: 0.2, y: 4.8, label: 'slower hiring 4.8%' },
          ],
          caption: 'When job finding is slow, small further falls cause large rises in unemployment: the curve is steep on the left.',
        },
      ],
    },
    {
      id: 'okun',
      title: 'Okun’s law: unemployment and output',
      lead: 'The cost of idle workers in lost output.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{Y - Y^*}{Y^*} \approx -\beta\,(u - u^*), \qquad \beta \approx 2`,
          plain: 'Arthur Okun noticed in 1962 that when unemployment is above its natural rate, output is below potential by a multiple of that gap. The multiple is larger than 1 because in a downturn hours, participation and productivity fall too, not just the number of people employed.',
          syntax: [
            { sym: String.raw`\frac{Y - Y^*}{Y^*}`, say: 'The output gap: actual output’s percentage distance from potential output.' },
            { sym: String.raw`u - u^*`, say: 'The unemployment gap: actual minus natural rate.' },
            { sym: String.raw`\beta`, say: 'Read "beta": the Okun coefficient, around 2 in modern US data (Okun originally estimated about 3).' },
          ],
          worked: {
            steps: [
              String.raw`Natural rate 4%, actual 7%: unemployment gap 3 points.`,
              String.raw`Output gap \(\approx -2 \times 3 = -6\%\).`,
              String.raw`For an economy with potential output of $1 trillion, that is about $60 billion of goods and services not produced in a year.`,
            ],
            why: ['the gap', 'apply the rule of thumb', 'in money'],
            answer: 'Three extra points of unemployment cost about 6% of output, a reminder that recessions waste resources on a large scale, not only for those who lose jobs.',
          },
        },
      ],
    },
    {
      id: 'beveridge',
      title: 'The Beveridge curve',
      lead: 'Vacancies against unemployment.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`M = A\,U^{0.5}V^{0.5}, \qquad f = \frac{M}{U} = A\,\theta^{0.5}, \quad \theta = \frac{V}{U} \qquad\Rightarrow\qquad u = \frac{s}{s + A\sqrt{V/U}}`,
          plain: 'Hires come from matching unemployed workers with vacant jobs. A matching function says how many matches a month a given number of jobseekers and vacancies produce. The job-finding rate rises with labour-market tightness, θ = V/U. Combining this with the flow equation gives a downward-sloping relation between vacancies and unemployment: the Beveridge curve. A lower matching efficiency A, from skills mismatch or poor information, shifts the whole curve outwards.',
          syntax: [
            { sym: String.raw`M`, say: 'Matches (hires) per month.' },
            { sym: String.raw`A`, say: 'Matching efficiency.' },
            { sym: String.raw`\theta = V/U`, say: 'Read "theta": labour-market tightness, vacancies per jobseeker.' },
          ],
          worked: {
            steps: [
              String.raw`Take \(A = 0.3\), \(s = 1\%\). If there is one vacancy per jobseeker (\(\theta = 1\)): \(f = 0.3\), \(u = 0.01/0.31 \approx 3.2\%\).`,
              String.raw`Tight market, \(\theta = 2\): \(f = 0.3\sqrt{2} \approx 0.42\), \(u \approx 2.3\%\).`,
              String.raw`Slack market, \(\theta = 0.25\): \(f = 0.15\), \(u \approx 6.3\%\).`,
              String.raw`Matching gets worse, \(A = 0.2\), at \(\theta = 1\): \(f = 0.2\), \(u \approx 4.8\%\): more unemployment at the same tightness.`,
            ],
            why: ['balanced market', 'many vacancies per jobseeker', 'few vacancies', 'an outward shift'],
            answer: 'Moving along the curve (more vacancies, less unemployment) is the business cycle. A curve that shifts outwards, with more unemployment and more vacancies at the same time, signals a matching problem.',
          },
        },
        {
          t: 'plot',
          title: 'Beveridge curves (vacancy rate against unemployment rate)',
          x: [1, 10],
          y: [0, 8],
          xLabel: 'unemployment rate (%)',
          yLabel: 'vacancy rate (%)',
          curves: [
            { f: (u: number) => 9 / u, label: 'good matching' },
            { f: (u: number) => 16 / u, label: 'worse matching (shifted out)', dashed: true },
          ],
          points: [
            { x: 2.5, y: 3.6, label: 'boom' },
            { x: 6, y: 1.5, label: 'recession' },
            { x: 4, y: 4, label: 'mismatch: both high' },
          ],
          caption: 'Stylised curves. In 2021–22 many economies saw vacancies soar with unemployment still elevated, an outward shift as workers and jobs were reshuffled after the pandemic; in Singapore, job vacancies exceeded the number of unemployed by more than two to one in 2022.',
        },
        {
          t: 'table',
          head: ['Type', 'Policy response', 'Singapore examples'],
          rows: [
            ['Frictional', 'Better job information and matching', 'MyCareersFuture job portal; career coaching'],
            ['Structural', 'Retraining, wage support for hiring mid-career workers, mobility', 'SkillsFuture credits and courses; Workforce Singapore career conversion programmes'],
            ['Cyclical', 'Interest rates (or the exchange rate), fiscal stimulus, job retention subsidies', 'The Jobs Support Scheme paid part of wages during COVID-19 to prevent layoffs'],
            ['Income loss', 'Unemployment insurance, balanced against search incentives', 'SkillsFuture Jobseeker Support, introduced in 2025, gives involuntarily unemployed workers temporary support tied to job search and training'],
          ],
        },
      ],
    },
  ],
  sources: [
    'Okun, A. M. (1962). Potential GNP: Its measurement and significance. *Proceedings of the Business and Economic Statistics Section*, American Statistical Association.',
    'Shimer, R. (2012). Reassessing the ins and outs of unemployment. *Review of Economic Dynamics*, 15(2), 127–148.',
    'Petrongolo, B., and Pissarides, C. A. (2001). Looking into the black box: A survey of the matching function. *Journal of Economic Literature*, 39(2), 390–431.',
    'Blanchard, O. J., and Summers, L. H. (1986). Hysteresis and the European unemployment problem. *NBER Macroeconomics Annual*, 1, 15–78.',
    'Ministry of Manpower, Singapore. Labour Force in Singapore; Job Vacancies. stats.mom.gov.sg.',
  ],
  related: ['economics/macro/phillips-curve', 'economics/macro/ad-as', 'economics/labour/wages-and-human-capital'],
}

export default guide
