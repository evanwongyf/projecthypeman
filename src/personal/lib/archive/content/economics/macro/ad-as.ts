import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Microeconomics studies one market; macroeconomics asks what happens to all of them at once. Why does an entire economy sometimes produce less than it could, with factories idle and workers unemployed? Why do prices in general sometimes rise fast? The aggregate demand and aggregate supply (AD–AS) model is the workhorse answer. It treats the whole economy’s output as one quantity and the price level as one price, and separates shocks to spending from shocks to costs. This guide builds both curves, explains why supply behaves differently in the short and long run, works through demand shocks, supply shocks and stagflation, and simulates how an economy returns to potential on its own, and why policymakers often do not wait.',
  nutshell: [
    '**Aggregate demand** (AD) is total spending, **C + I + G + (X − M)**, at each price level. It slopes down and shifts with confidence, interest rates, budgets and exports.',
    '**Short-run aggregate supply** (SRAS) slopes up because wages and some prices are **sticky**; **long-run supply** (LRAS) is vertical at **potential output**.',
    'A **demand shock** moves output and prices in the **same** direction; a **supply shock** moves them in **opposite** directions.',
    'An adverse supply shock brings **stagflation**: falling output and rising prices, a dilemma for policy.',
    'Left alone, wages and expectations adjust and output returns to potential, but slowly; **monetary and fiscal policy** try to speed it up.',
  ],
  sections: [
    {
      id: 'ad',
      title: 'Aggregate demand',
      lead: 'Total spending at each price level.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`Y = C + I + G + (X - M)`,
          plain: 'Total output is bought by four groups: households (consumption C), firms (investment I in machines and buildings), the government (G) and foreigners (exports X), minus the part of all that spending that goes on imports (M). This is the expenditure method of measuring GDP; see [GDP and the business cycle](@finance/economics/gdp-cycle).',
          syntax: [{ sym: String.raw`X - M`, say: 'Net exports: exports minus imports.' }],
          where: [
            { sym: 'C', def: 'Household consumption' },
            { sym: 'I', def: 'Business investment and new housing' },
            { sym: 'G', def: 'Government purchases of goods and services (not transfers like pensions)' },
            { sym: 'X − M', def: 'Net exports' },
          ],
          worked: {
            title: 'A stylised small open economy (S$ billion)',
            steps: [
              String.raw`Consumption 200, investment 120, government 60, exports 900, imports 780.`,
              String.raw`\(Y = 200 + 120 + 60 + (900 - 780) = 500\).`,
              String.raw`Exports are 180% of GDP and imports 156%: possible because much of what is exported was first imported and processed.`,
            ],
            why: ['illustrative figures with a Singapore-like structure', 'add the components', 'gross trade can exceed GDP; net exports are what count'],
            answer: 'GDP is 500. For a very open economy, a 10% fall in exports (90) is a huge shock relative to GDP, even if imports fall too.',
          },
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Wealth effect', tag: 'why AD slopes down', body: 'A lower price level raises the real value of money and savings, so households feel richer and spend more.' },
            { title: 'Interest-rate effect', tag: 'why AD slopes down', body: 'Lower prices mean people need less money for transactions, so they lend more, pushing interest rates down and encouraging borrowing and investment.' },
            { title: 'Exchange-rate effect', tag: 'why AD slopes down', body: 'Lower domestic prices make exports cheaper abroad and imports dearer at home, raising net exports.' },
          ],
        },
        {
          t: 'table',
          head: ['AD shifts right when…', 'AD shifts left when…'],
          rows: [
            ['Consumers and firms grow confident', 'Confidence collapses (2008, early 2020)'],
            ['Interest rates are cut, or the currency weakens', 'Interest rates rise, or the currency strengthens'],
            ['Government spending rises or taxes fall', 'Austerity: spending cuts or tax rises'],
            ['Trading partners boom, raising exports', 'Trading partners slow down'],
            ['Asset prices (homes, shares) rise', 'Asset prices fall'],
          ],
        },
      ],
    },
    {
      id: 'as',
      title: 'Aggregate supply: short run and long run',
      lead: 'Sticky wages and potential output.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{SRAS: } \; Y = Y^* + \alpha\,(P - P^e), \qquad \text{LRAS: } \; Y = Y^*`,
          plain: 'In the short run, wages and many prices are set in advance based on the price level people expect (Pᵉ). If prices turn out higher than expected, firms’ selling prices rise faster than their costs, so they produce more; if lower, less. In the long run expectations catch up, so output returns to potential Y*, set by labour, capital and technology, whatever the price level.',
          syntax: [
            { sym: String.raw`Y^*`, say: 'Potential output: what the economy produces at full employment (the natural rate of unemployment).' },
            { sym: String.raw`P^e`, say: 'The expected price level, built into wage contracts.' },
            { sym: String.raw`\alpha`, say: 'How strongly output responds to a price surprise.' },
          ],
          worked: {
            steps: [
              String.raw`Workers sign contracts expecting \(P^e = 100\). Potential output \(Y^* = 100\), \(\alpha = 1\).`,
              String.raw`Prices come in at 104: \(Y = 100 + 1 \times 4 = 104\). Firms’ prices beat their wage costs, so they hire and produce more.`,
              String.raw`Next round, contracts build in \(P^e = 104\). At \(P = 104\), \(Y = 100\) again.`,
            ],
            why: ['the starting expectations', 'a surprise raises output', 'once expected, the same price level no longer does'],
            answer: 'Only unexpected price changes move output. This is why long-run supply is vertical, and why a central bank cannot permanently raise output by creating inflation.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Why wages are sticky', body: 'Contracts are set for a year or more; firms avoid cutting pay because it hurts morale; minimum wages and norms resist cuts. Wages rarely fall in money terms even in recessions.' },
            { title: 'Why prices are sticky', body: 'Changing prices has costs (menus, catalogues, annoying customers), and firms in imperfect competition can tolerate a small gap between their price and the ideal one for a while.' },
            { title: 'What shifts SRAS', body: 'Energy and commodity prices, expected inflation, wage settlements, productivity shocks, supply-chain disruptions, the exchange rate (import costs).' },
            { title: 'What shifts LRAS', body: 'More workers, more capital, better technology, better institutions: the subject of [growth](@economics/growth/solow-model).' },
          ],
        },
      ],
    },
    {
      id: 'shocks',
      title: 'Demand shocks, supply shocks and stagflation',
      lead: 'Two kinds of trouble.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{AD: } P = 200 - Y + s_{AD}, \qquad \text{SRAS: } P = Y + s_{AS} \quad\Rightarrow\quad Y = \frac{200 + s_{AD} - s_{AS}}{2}, \;\; P = Y + s_{AS}`,
          plain: 'A simple linear version of the model, with potential output and the starting price level both at 100. A demand shock s_AD moves the AD curve up or down; a supply (cost) shock s_AS moves the SRAS curve. Solving the two lines gives output and the price level.',
          syntax: [
            { sym: String.raw`s_{AD}`, say: 'A demand shock: positive is a boom in spending, negative a slump.' },
            { sym: String.raw`s_{AS}`, say: 'A cost shock: positive raises costs (an oil spike), negative lowers them (a productivity gain).' },
          ],
          worked: {
            title: 'Three shocks',
            steps: [
              String.raw`Demand slump, \(s_{AD} = -20\): \(Y = 180/2 = 90\), \(P = 90\). Output 10% below potential, prices down: recession and disinflation.`,
              String.raw`Oil shock, \(s_{AS} = +20\): \(Y = 180/2 = 90\), \(P = 110\). Output down 10% and prices up 10%: stagflation.`,
              String.raw`Policy responds to the oil shock with a stimulus of \(s_{AD} = +20\): \(Y = 100\), \(P = 120\). Output restored, but prices rise 20%.`,
              String.raw`Or policy tightens, \(s_{AD} = -20\), to hold prices: \(Y = 80\), \(P = 100\). Prices steady, output 20% below potential.`,
            ],
            why: ['spending falls', 'costs rise', 'accommodate the shock', 'fight the inflation'],
            answer: 'A demand shock gives policy an easy target: offset it and both output and prices return to normal. A supply shock forces a choice between protecting output and protecting prices.',
          },
        },
        {
          t: 'plot',
          title: 'A negative demand shock',
          x: [60, 140],
          y: [60, 140],
          xLabel: 'real output Y',
          yLabel: 'price level P',
          curves: [
            { f: (y: number) => 200 - y, label: 'AD before', dashed: true },
            { f: (y: number) => 180 - y, label: 'AD after the slump' },
            { f: (y: number) => y, label: 'SRAS' },
            { f: (y: number) => y - 20, label: 'SRAS after wages adjust', dashed: true },
          ],
          vlines: [{ x: 100, label: 'LRAS' }],
          segments: [{ from: [120, 80], to: [110, 70], arrow: true, label: 'AD falls' }],
          points: [
            { x: 100, y: 100, label: 'start' },
            { x: 90, y: 90, label: 'short run' },
            { x: 100, y: 80, label: 'long run' },
          ],
          caption: 'The slump cuts output to 90. Over time, lower prices feed into lower wage expectations, SRAS shifts down, and output returns to potential at a lower price level.',
        },
        {
          t: 'plot',
          title: 'An adverse supply shock (stagflation)',
          x: [60, 140],
          y: [60, 140],
          xLabel: 'real output Y',
          yLabel: 'price level P',
          curves: [
            { f: (y: number) => 200 - y, label: 'AD' },
            { f: (y: number) => y, label: 'SRAS before', dashed: true },
            { f: (y: number) => y + 20, label: 'SRAS after the oil shock' },
          ],
          vlines: [{ x: 100, label: 'LRAS' }],
          points: [
            { x: 100, y: 100, label: 'start' },
            { x: 90, y: 110, label: 'stagflation' },
          ],
        },
        { t: 'econ-viz', viz: 'ad-as' },
      ],
    },
    {
      id: 'adjust',
      title: 'Self-correction, and why policy does not wait',
      lead: 'Expectations catching up, step by step.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P_t = P^e_t + (Y_t - 100), \quad P^e_t = P_{t-1}, \quad P_t = 180 - Y_t \;\;\Rightarrow\;\; Y_t - 100 = \tfrac12\,(Y_{t-1} - 100) \text{ once the shock has hit}`,
          plain: 'Suppose people expect this year’s prices to equal last year’s. After a demand slump, prices fall below what contracts assumed, so next year’s contracts build in lower prices, the SRAS curve shifts down, and output recovers part of the way. In this example the output gap halves every period.',
          syntax: [
            { sym: String.raw`P^e_t = P_{t-1}`, say: 'Adaptive expectations: people expect last period’s price level.' },
            { sym: String.raw`t`, say: 'The time period.' },
          ],
          worked: {
            steps: [
              String.raw`Period 1: \(P^e = 100\): \(100 + Y - 100 = 180 - Y\), so \(Y = 90\), \(P = 90\).`,
              String.raw`Period 2: \(P^e = 90\): \(90 + Y - 100 = 180 - Y\), so \(Y = 95\), \(P = 85\).`,
              String.raw`Period 3: \(P^e = 85\): \(Y = 97.5\), \(P = 82.5\).`,
              String.raw`Period 4: \(Y = 98.75\), \(P = 81.25\). The gap keeps halving towards \(Y = 100\), \(P = 80\).`,
            ],
            why: ['the shock hits', 'contracts catch up partly', 'and again', 'convergence'],
            answer: 'The economy heals itself, but in this example it takes three periods to close seven-eighths of the gap. If a period is a year, that is three years of lost output and high unemployment.',
          },
        },
        {
          t: 'plot',
          title: 'Recovery without policy: output and the price level',
          x: [0, 8],
          y: [75, 102],
          xLabel: 'period',
          yLabel: 'index',
          data: [
            { pts: [[0, 100], [1, 90], [2, 95], [3, 97.5], [4, 98.75], [5, 99.38], [6, 99.69], [7, 99.84], [8, 99.92]], label: 'output', dots: true },
            { pts: [[0, 100], [1, 90], [2, 85], [3, 82.5], [4, 81.25], [5, 80.63], [6, 80.31], [7, 80.16], [8, 80.08]], label: 'price level', dots: true, dashed: true },
          ],
        },
        {
          t: 'flow',
          title: 'How a demand-side policy response works',
          nodes: [
            { label: 'Shock', sub: 'exports collapse, confidence falls', tone: 'human' },
            { label: 'Policy eases', sub: 'lower rates or a weaker currency; fiscal support', tone: 'model' },
            { label: 'Spending recovers', sub: 'C, I and NX rise', tone: 'process' },
            { label: 'AD shifts back', sub: 'output closer to potential', tone: 'output' },
          ],
          caption: 'Monetary policy acts through interest rates (or, in Singapore, the exchange rate: see [MAS](@banking/theory/central-banking-singapore)); fiscal policy through spending and taxes, amplified by [the multiplier](@economics/macro/multiplier).',
        },
        {
          t: 'table',
          head: ['Episode', 'Main shock', 'What happened'],
          rows: [
            ['1973–74 and 1979 oil shocks', 'Supply: oil prices quadrupled, then doubled', 'Stagflation across rich economies; high inflation and recession together'],
            ['2008–09 global financial crisis', 'Demand: banking collapse, falling wealth, credit crunch', 'Deep recession with falling inflation; massive monetary and fiscal stimulus'],
            ['2020 COVID-19', 'Both: lockdowns cut supply and spending at once', 'Record falls in output; wage subsidies such as Singapore’s Jobs Support Scheme'],
            ['2021–23 inflation', 'Both: reopening demand plus energy and supply-chain shocks', 'Highest inflation in decades; central banks raised rates fast, and MAS tightened the S$NEER'],
          ],
        },
      ],
    },
  ],
  sources: [
    'Blanchard, O. (2021). *Macroeconomics* (8th ed.), chapters 7–9. Pearson.',
    'Mankiw, N. G. (2022). *Macroeconomics* (11th ed.), chapters 10–14. Worth.',
    'Lucas, R. E. (1972). Expectations and the neutrality of money. *Journal of Economic Theory*, 4(2), 103–124.',
    'Blinder, A. S., and Rudd, J. B. (2013). The supply-shock explanation of the Great Stagflation revisited. In M. Bordo and A. Orphanides (Eds.), *The Great Inflation*. University of Chicago Press.',
  ],
  related: ['economics/macro/multiplier', 'economics/macro/phillips-curve', 'finance/economics/gdp-cycle', 'banking/theory/central-banking-singapore'],
}

export default guide
