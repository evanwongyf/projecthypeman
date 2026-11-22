import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Few questions in economics have been argued over as long, or with as much data, as what a minimum wage does. The simplest model gives a clear answer: a price floor on labour above the market wage reduces jobs. But that model assumes employers have no power over wages. If they do (a monopsony), a well-set minimum wage can raise both pay and employment. Which world we live in is an empirical question, and since the 1990s a stream of natural experiments has changed many economists’ minds. This guide derives both models, works the numbers, reviews the main studies and explains Singapore’s different approach, the Progressive Wage Model, which sets wage ladders by sector instead of one national floor.',
  nutshell: [
    'In a **competitive** labour market, a minimum wage above the market wage moves firms up their demand curve: **fewer jobs**, more applicants, **unemployment**.',
    'Under **monopsony**, the employer pays below the value of workers’ output because hiring one more means paying everyone more. A minimum wage in the right range raises **both pay and jobs**.',
    'Natural experiments (**Card and Krueger**, 1994, and many since) find small or no employment losses from moderate minimum wages.',
    'Effects depend on **how high** the floor is relative to the median wage (the **Kaitz index**).',
    'Singapore has **no national minimum wage**; it uses sector **Progressive Wage Models**, a **Local Qualifying Salary** and **Workfare** top-ups.',
  ],
  sections: [
    {
      id: 'competitive',
      title: 'The competitive model',
      lead: 'A price floor on labour.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{supply } w = 5 + 0.1L, \quad \text{demand (MRP) } w = 25 - 0.1L \;\Rightarrow\; L^* = 100,\; w^* = \$15`,
          plain: 'Workers offer more hours as the wage rises; firms hire more as the wage falls. Without a minimum, the market settles at 100 workers paid $15 an hour.',
          syntax: [{ sym: String.raw`L^*, w^*`, say: 'Market employment and wage.' }],
          where: [
            { sym: 'L', def: 'Workers (or hours) employed' },
            { sym: 'MRP', def: 'Marginal revenue product: what one more worker adds to revenue' },
          ],
          worked: {
            title: 'A minimum wage of $18',
            steps: [
              String.raw`Firms hire where MRP = 18: \(25 - 0.1L = 18\), so \(L = 70\). Employment falls by 30.`,
              String.raw`At $18, \(L_s = (18 - 5)/0.1 = 130\) people want jobs. Unemployment: \(130 - 70 = 60\).`,
              String.raw`Workers who keep their jobs gain \((18 - 15) \times 70 = \$210\) an hour in total.`,
              String.raw`Deadweight loss: \(\tfrac12 \times 30 \times (25 - 0.1 \times 70 - (5 + 0.1 \times 70)) = \tfrac12 \times 30 \times 6 = \$90\).`,
            ],
            why: ['firms move up their demand curve', 'more people are drawn into the market at the higher wage', 'a transfer from employers to workers', 'jobs worth more than workers’ reservation wages are lost'],
            answer: 'In the competitive model, a $3 rise above the market wage gives 70 workers $3 more an hour and costs 30 jobs. How many jobs are lost depends on how elastic labour demand is.',
          },
        },
        {
          t: 'plot',
          title: 'A minimum wage in a competitive market',
          x: [0, 200],
          y: [0, 30],
          xLabel: 'workers',
          yLabel: 'hourly wage ($)',
          curves: [
            { f: (l: number) => 5 + 0.1 * l, label: 'labour supply' },
            { f: (l: number) => 25 - 0.1 * l, label: 'labour demand (MRP)' },
          ],
          hlines: [{ y: 18, label: 'minimum wage $18' }],
          areas: [{ pts: [[70, 18], [70, 12], [100, 15]], label: 'DWL', color: '#d9534f', at: [80, 15] }],
          segments: [{ from: [70, 18], to: [130, 18], label: 'unemployment 60', color: '#7b4fc9' }],
          points: [{ x: 100, y: 15, label: 'market (100, $15)' }],
        },
      ],
    },
    {
      id: 'monopsony',
      title: 'Monopsony: when employers set wages',
      lead: 'One buyer of labour.',
      blocks: [
        { t: 'p', text: 'A **monopsony** is a market with one buyer, the mirror image of a monopoly. Classic examples are mining towns with one mine; today, economists think employers often have some wage-setting power even in big cities, because workers face costs of searching, commuting and switching, so a firm that pays slightly less does not lose all its staff. A firm with this power faces an upward-sloping labour supply curve: to hire one more worker it must raise the wage, and (unless it can pay people differently) raise it for everyone.' },
        {
          t: 'math',
          tex: String.raw`\text{wage bill} = w(L)\,L = 5L + 0.1L^2 \;\Rightarrow\; MFC = \frac{d(wL)}{dL} = 5 + 0.2L`,
          plain: 'The marginal factor cost (MFC) of one more worker is their wage plus the raise paid to everyone already employed. It rises twice as fast as the supply curve, just as a monopolist’s marginal revenue falls twice as fast as demand.',
          syntax: [{ sym: String.raw`MFC`, say: 'Marginal factor cost: the increase in the total wage bill from one more worker.' }],
          worked: {
            title: 'The monopsony outcome, then minimum wages',
            steps: [
              String.raw`The firm hires where \(MRP = MFC\): \(25 - 0.1L = 5 + 0.2L\), so \(L = 66.7\).`,
              String.raw`It pays the lowest wage that attracts 66.7 workers: \(w = 5 + 0.1 \times 66.7 = \$11.67\), well below their MRP of $18.33.`,
              String.raw`Minimum wage $15: the firm can now hire anyone up to the supply curve at $15, so MFC is flat at $15. It hires until \(MRP = 15\): \(L = 100\). Pay and jobs both rise.`,
              String.raw`Minimum wage $13: supply at $13 is \(L = 80\); MRP there is $17 > $13, so the firm hires all 80. Still more jobs than 66.7.`,
              String.raw`Minimum wage $20: the firm hires where \(MRP = 20\): \(L = 50\). Now jobs fall below 66.7.`,
            ],
            why: ['the monopsonist’s rule, like MR = MC', 'read the wage off the supply curve', 'the floor removes the reason to hold wages down', 'between the monopsony and competitive wages, employment follows supply', 'above the competitive wage, employment follows demand'],
            answer: 'Under monopsony, any minimum wage between $11.67 and about $18.33 (the MRP at the monopsony employment level) raises employment above 66.7, with the peak at the competitive wage of $15. Above $18.33 it costs jobs, as in the competitive model.',
          },
        },
        {
          t: 'plot',
          title: 'A monopsony labour market',
          x: [0, 200],
          y: [0, 30],
          xLabel: 'workers',
          yLabel: 'hourly wage ($)',
          curves: [
            { f: (l: number) => 5 + 0.1 * l, label: 'labour supply (average cost)' },
            { f: (l: number) => 5 + 0.2 * l, label: 'marginal factor cost', dashed: true, to: 125 },
            { f: (l: number) => 25 - 0.1 * l, label: 'MRP (demand)' },
          ],
          points: [
            { x: 66.7, y: 11.67, label: 'monopsony (66.7, $11.67)' },
            { x: 100, y: 15, label: 'competitive (100, $15)' },
          ],
          segments: [{ from: [66.7, 11.67], to: [66.7, 18.33], label: 'markdown', color: '#d9534f' }],
          caption: 'The gap between what the marginal worker produces ($18.33) and what they are paid ($11.67) is the monopsony markdown.',
        },
        { t: 'econ-viz', viz: 'monopsony' },
        {
          t: 'math',
          tex: String.raw`w = MRP \times \frac{\varepsilon}{1 + \varepsilon}`,
          plain: 'The more easily workers would leave for a small pay cut (a high elasticity of labour supply to the firm, ε), the closer the wage is to the value of their work. Researchers estimate this elasticity from how quits and hiring respond to a firm’s wage.',
          syntax: [{ sym: String.raw`\varepsilon`, say: 'Read "epsilon": the elasticity of labour supply facing one firm.' }],
          worked: {
            steps: [
              String.raw`If \(\varepsilon = 4\): \(w = MRP \times 4/5 = 0.8\,MRP\).`,
              String.raw`If \(\varepsilon = 20\): \(w \approx 0.95\,MRP\). If \(\varepsilon \to \infty\) (perfect competition), \(w = MRP\).`,
            ],
            why: ['a typical estimate', 'more competition for workers'],
            answer: 'Many studies find firm-level elasticities in single digits, implying wages 10–25% below workers’ marginal product: room for a minimum wage to raise pay without cutting jobs.',
          },
        },
      ],
    },
    {
      id: 'evidence',
      title: 'The evidence',
      lead: 'Natural experiments and their critics.',
      blocks: [
        { t: 'p', text: 'In April 1992 New Jersey raised its minimum wage from $4.25 to $5.05 an hour; neighbouring eastern Pennsylvania did not. David Card and Alan Krueger surveyed 410 fast-food restaurants on both sides of the border before and after. If the competitive model were right, New Jersey employment should have fallen relative to Pennsylvania’s. It did not; if anything it rose slightly. Card shared the 2021 Nobel Prize partly for this work.' },
        {
          t: 'math',
          tex: String.raw`\hat{\delta}_{DiD} = \big(\bar{Y}_{NJ,\,after} - \bar{Y}_{NJ,\,before}\big) - \big(\bar{Y}_{PA,\,after} - \bar{Y}_{PA,\,before}\big)`,
          plain: 'Difference in differences: take the change in the treated group and subtract the change in a comparison group over the same period. The comparison group’s change stands in for what would have happened to the treated group anyway (the economy, the season), so what remains is the effect of the policy.',
          syntax: [
            { sym: String.raw`\hat{\delta}_{DiD}`, say: 'Read "delta hat, D i D": the estimated effect.' },
            { sym: String.raw`\bar{Y}`, say: 'Average outcome, here full-time-equivalent employment per restaurant.' },
          ],
          worked: {
            steps: [
              String.raw`Average employment per store, New Jersey: 20.4 before, 21.0 after: change +0.6.`,
              String.raw`Pennsylvania: 23.3 before, 21.2 after: change −2.1.`,
              String.raw`Difference in differences: \(0.6 - (-2.1) = +2.7\) employees per store.`,
            ],
            why: ['the treated state', 'the comparison state, hit by the same regional slowdown', 'subtract'],
            answer: 'Card and Krueger estimated that the higher minimum wage was associated with about 2.7 more employees per store, the opposite of the competitive prediction (figures as published in 1994). The key assumption is that the two states would have trended alike without the policy.',
          },
        },
        {
          t: 'table',
          head: ['Study', 'Setting', 'Finding'],
          rows: [
            ['Card and Krueger (1994)', 'New Jersey vs Pennsylvania fast food, 1992', 'No fall in employment; a small rise'],
            ['Neumark and Wascher (2000)', 'Same states, payroll records', 'Found employment losses; disputed and re-analysed by Card and Krueger (2000), who found none with official data'],
            ['Dube, Lester and Reich (2010)', 'All US county pairs straddling state borders', 'No detectable job losses in restaurants; earnings rose'],
            ['Cengiz, Dube, Lindner and Zipperer (2019)', '138 US state increases, 1979–2016', 'Jobs just below the new minimum disappeared and as many reappeared at or just above it: no net loss for increases up to about 59% of the median wage'],
            ['Jardim et al. (2017)', 'Seattle’s rise to $13', 'Hours for low-wage workers fell, cutting their total pay; other studies of the same city disagree'],
            ['Dustmann et al. (2022)', 'Germany’s first national minimum wage, 2015', 'No job losses; workers moved to more productive, better-paying firms'],
          ],
        },
        {
          t: 'metric',
          name: 'the Kaitz index (minimum wage ÷ median wage)',
          shows: 'How high a minimum wage is relative to typical pay in the economy. The same dollar minimum is mild in a high-wage city and severe in a low-wage one.',
          eli5: 'A $15 floor bites hardly at all where most jobs already pay $30, and a great deal where most jobs pay $16.',
          higher: 'Above roughly 60% of the median, the floor affects a large share of jobs and the risk of job losses grows; firms may automate or cut hours.',
          lower: 'Below about 40%, the minimum binds for few workers and has small effects either way.',
          typical: 'Many rich countries set their minimum between about 40% and 60% of the full-time median; the UK targeted two-thirds of the median for its National Living Wage in 2024.',
        },
      ],
    },
    {
      id: 'singapore',
      title: 'Singapore’s approach: progressive wages instead of one floor',
      lead: 'Sector ladders, a salary floor for firms hiring foreign workers, and top-ups.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Entry level', body: 'A mandatory minimum basic wage for the sector’s lowest job, set by a tripartite committee of unions, employers and government.' },
            { name: 'Higher grades', body: 'Higher minimums for more skilled roles (for example general cleaner, multi-skilled cleaner, supervisor), each tied to training requirements.' },
            { name: 'Scheduled increases', body: 'Wage floors rise on a published multi-year schedule, giving firms time to raise productivity.' },
            { name: 'Enforcement', body: 'Compliance is tied to business licences (cleaning, security, landscape) or to firms’ ability to hire foreign workers.' },
          ],
          caption: 'The Progressive Wage Model (PWM) began with cleaning in 2012 and has spread to security, landscape, lift and escalator maintenance, retail, food services, waste management and more.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Why not one national minimum?', body: 'Policymakers argued that sector-specific floors, tied to skills, can be set higher where productivity allows and lower where it does not, avoiding the job losses a single high floor might cause in weak sectors.' },
            { title: 'Local Qualifying Salary', body: 'Firms that hire foreign workers must pay their local staff at least a Local Qualifying Salary, which raises the floor broadly without a statutory minimum wage.' },
            { title: 'Workfare Income Supplement', body: 'The government tops up the pay and CPF of lower-wage older workers, like an earned-income tax credit: it raises take-home pay without raising employers’ costs, so it carries no job-loss risk, but it is paid by taxpayers.' },
            { title: 'Progressive Wage Credit Scheme', body: 'Temporary co-funding of wage increases for lower-wage workers, to ease the cost to employers during the transition.' },
          ],
        },
        {
          t: 'table',
          head: ['', 'Minimum wage', 'Wage subsidy or tax credit'],
          rows: [
            ['Who pays', 'Employers (and partly customers through prices)', 'Taxpayers'],
            ['Employment effect', 'Ambiguous: negative in competitive markets, can be positive under monopsony', 'Raises work incentives; if anything, more employment'],
            ['Targeting', 'Helps low-wage workers, some of whom are in better-off households', 'Can be targeted by household income and age'],
            ['Risk', 'Job losses if set too high', 'Lets employers pay less if they capture part of the subsidy'],
          ],
          caption: 'Many economists favour combining a moderate minimum wage (to limit monopsony) with a targeted tax credit (to raise incomes without job-loss risk).',
        },
        { t: 'callout', tone: 'note', title: 'Numbers change', text: 'PWM wage levels, the Local Qualifying Salary and Workfare amounts are revised regularly. Check the Ministry of Manpower (mom.gov.sg) for current figures.' },
      ],
    },
  ],
  sources: [
    'Card, D., and Krueger, A. B. (1994). Minimum wages and employment: A case study of the fast-food industry in New Jersey and Pennsylvania. *American Economic Review*, 84(4), 772–793.',
    'Manning, A. (2003). *Monopsony in Motion*. Princeton University Press.',
    'Cengiz, D., Dube, A., Lindner, A., and Zipperer, B. (2019). The effect of minimum wages on low-wage jobs. *Quarterly Journal of Economics*, 134(3), 1405–1454.',
    'Dube, A., Lester, T. W., and Reich, M. (2010). Minimum wage effects across state borders. *Review of Economics and Statistics*, 92(4), 945–964.',
    'Dustmann, C., et al. (2022). Reallocation effects of the minimum wage. *Quarterly Journal of Economics*, 137(1), 267–328.',
    'Jardim, E., et al. (2017). Minimum wage increases, wages, and low-wage employment: Evidence from Seattle. NBER Working Paper 23532.',
    'Ministry of Manpower, Singapore. Progressive Wage Model; Local Qualifying Salary; Workfare. mom.gov.sg.',
  ],
  related: ['economics/labour/wages-and-human-capital', 'economics/welfare/price-controls', 'economics/labour/unemployment'],
}

export default guide
