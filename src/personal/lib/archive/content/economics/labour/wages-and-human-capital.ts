import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'For most people, their labour is the most valuable thing they will ever sell, and the wage is its price. Wages come from the same forces as any other price (demand from employers, supply from workers), but labour is unusual: demand for it is derived from demand for what it produces, its supply is a choice about how to spend your time, and its quality can be raised by investing in skills. This guide derives a firm’s demand for workers from their marginal product, works through the labour–leisure choice and why a higher wage can mean fewer hours, values a degree as an investment, and explains why some wage differences reflect the job rather than the worker.',
  nutshell: [
    'A competitive firm hires until the wage equals the **marginal revenue product** of labour: **MRP = MP × P**.',
    'Labour demand is **derived demand**: it depends on demand for the product, on substitutes for labour, and on labour’s share of costs.',
    'A wage rise has a **substitution effect** (leisure costs more, so work more) and an **income effect** (you are richer, so take more leisure); hours can even fall.',
    'Education is **human capital**: an investment with a cost now and a return over a career, typically **8–10% a year** per extra year of schooling.',
    '**Compensating differentials**: dangerous, dirty or inflexible jobs pay more, which lets economists estimate the **value of a statistical life**.',
  ],
  sections: [
    {
      id: 'demand',
      title: 'Labour demand and marginal revenue product',
      lead: 'How many workers to hire.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`MRP_L = MP_L \times MR \;\;\overset{\text{price taker}}{=}\;\; MP_L \times P, \qquad \text{hire until } MRP_L = w`,
          plain: 'One more worker adds some output (their marginal product), and that output adds revenue. If the firm sells at a given market price, the extra revenue is the marginal product times the price. The firm keeps hiring while each extra worker brings in more than their wage.',
          syntax: [
            { sym: String.raw`MRP_L`, say: 'Marginal revenue product of labour: the extra revenue from one more worker.' },
            { sym: String.raw`\overset{\text{price taker}}{=}`, say: 'Equal when the firm sells at a fixed market price, so marginal revenue is the price.' },
          ],
          where: [
            { sym: 'MP_L', def: 'Marginal product of labour' },
            { sym: 'P', def: 'The price of the product' },
            { sym: 'w', def: 'The wage' },
          ],
          worked: {
            title: 'The bakery from the costs guide',
            steps: [
              String.raw`Marginal products of bakers 1 to 6: 10, 15, 20, 15, 10, 5 loaves a day. A loaf sells for $8.`,
              String.raw`MRP: $80, $120, $160, $120, $80, $40 a day.`,
              String.raw`At a wage of $100 a day, the 4th baker brings $120 (hire) and the 5th $80 (do not). Hire 4.`,
              String.raw`If bread prices rise to $11, the 5th baker’s MRP becomes $110 > $100: hire 5.`,
              String.raw`If the wage rises to $125, the 4th baker ($120) is no longer worth it: hire 3.`,
            ],
            why: ['from the production table', 'marginal product times price', 'hire while MRP ≥ wage, on the falling part of MRP', 'demand for bread raises demand for bakers', 'a higher wage moves the firm up its labour demand curve'],
            answer: 'At $100 a day, hire 4 bakers. The falling part of the MRP schedule is the firm’s demand curve for labour: higher wages, fewer workers; higher product prices, more.',
          },
        },
        {
          t: 'plot',
          title: 'Marginal revenue product and the hiring decision',
          x: [0, 6.5],
          y: [0, 180],
          xLabel: 'bakers',
          yLabel: '$ a day',
          data: [{ pts: [[1, 80], [2, 120], [3, 160], [4, 120], [5, 80], [6, 40]], label: 'MRP at $8 a loaf', dots: true }],
          hlines: [{ y: 100, label: 'wage $100' }],
          points: [{ x: 4, y: 120, label: 'last baker worth hiring' }],
        },
        {
          t: 'list',
          ordered: true,
          items: [
            '**Demand for the product**: if buyers are very price-sensitive, a wage rise that raises prices cuts sales a lot, and with them jobs.',
            '**Substitutes for labour**: the easier it is to switch to machines (self-checkouts, robots) or other workers, the more elastic labour demand is.',
            '**Labour’s share of total cost**: a wage rise matters more when wages are most of the cost (cleaning, care) than when they are small (a refinery).',
            '**Supply of the substitutes**: if machines or other inputs are in limited supply, switching to them pushes their prices up and limits substitution.',
          ],
        },
        { t: 'p', text: 'These are **Marshall’s rules of derived demand** (Alfred Marshall, 1890, later formalised by Hicks). They explain why some workers have much more bargaining power than others: workers whose skills are hard to substitute, in industries where labour is a small share of cost, face very inelastic demand.' },
      ],
    },
    {
      id: 'supply',
      title: 'Labour supply: the labour–leisure choice',
      lead: 'Why a pay rise might mean fewer hours.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\max_{h}\; \ln C + \ln(T - h) \quad\text{s.t.}\quad C = wh + V \qquad\Rightarrow\qquad h^* = \frac{T}{2} - \frac{V}{2w}`,
          plain: 'A worker values consumption C and free time T − h, and chooses hours h. Each hour of work buys w more consumption. With this simple utility function, someone with no other income always works half their available time whatever the wage: the substitution and income effects exactly cancel. With non-labour income V (savings, transfers), higher wages raise hours, because a higher wage shrinks the relative importance of V.',
          syntax: [
            { sym: String.raw`\ln`, say: 'The natural logarithm: it builds in diminishing marginal utility, each extra dollar or hour adds less.' },
            { sym: String.raw`\text{s.t.}`, say: 'Read "subject to": the constraint the choice must satisfy.' },
            { sym: String.raw`T - h`, say: 'Hours of leisure: time available minus hours worked.' },
          ],
          where: [
            { sym: 'h', def: 'Hours worked per day' },
            { sym: 'T', def: 'Hours available for work or leisure (say 16 waking hours)' },
            { sym: 'w', def: 'Hourly wage' },
            { sym: 'V', def: 'Non-labour income per day' },
          ],
          worked: {
            steps: [
              String.raw`Substitute: maximise \(\ln(wh + V) + \ln(T - h)\). The derivative is \(\dfrac{w}{wh + V} - \dfrac{1}{T - h} = 0\).`,
              String.raw`So \(w(T - h) = wh + V\), giving \(h = T/2 - V/(2w)\).`,
              String.raw`With \(T = 16\) and \(V = 0\): \(h = 8\) hours at any wage.`,
              String.raw`With \(V = \$40\) a day: at \(w = \$10\), \(h = 8 - 2 = 6\); at \(w = \$20\), \(h = 8 - 1 = 7\).`,
            ],
            why: ['plug in the budget and differentiate', 'solve for hours', 'the two effects cancel', 'a wage rise now raises hours'],
            answer: 'Whether higher wages raise or cut hours depends on how strong the income effect is. Evidence suggests that for prime-age men hours barely respond to wages, while for second earners and older workers the response is larger.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Substitution effect', tag: 'work more', body: 'A higher wage makes each hour of leisure more expensive (you give up more pay), so you swap some leisure for work.' },
            { title: 'Income effect', tag: 'work less', body: 'A higher wage makes you richer at the same hours. If leisure is a normal good you want more of it, so you work less.' },
            { title: 'Backward-bending supply', tag: 'at high wages', body: 'At low wages the substitution effect usually dominates and hours rise with pay; at high wages the income effect can win, and hours fall. Average weekly hours in rich countries have fallen over the past century as wages have risen.' },
            { title: 'The participation margin', tag: 'work at all?', body: 'Much of the response to wages and taxes is about whether to work, not how many hours: whether a parent returns to work, when someone retires. This extensive margin tends to be more elastic than hours.' },
          ],
        },
        {
          t: 'plot',
          title: 'Hours worked against the wage (h = 8 − V/(2w), V = $40)',
          x: [2.5, 60],
          y: [0, 9],
          xLabel: 'hourly wage ($)',
          yLabel: 'hours a day',
          curves: [
            { f: (w: number) => Math.max(8 - 40 / (2 * w), 0), label: 'with $40 a day of other income' },
            { f: () => 8, label: 'no other income', dashed: true },
          ],
          caption: 'Below $2.50 an hour this worker would not work at all: other income is worth more than the wage. Above it, hours rise steeply, then level off towards 8.',
        },
      ],
    },
    {
      id: 'human-capital',
      title: 'Human capital: education as an investment',
      lead: 'Costs now, returns for decades.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`NPV = -\sum_{t=1}^{4} \frac{C}{(1 + r)^t} + \sum_{t=5}^{44} \frac{\Delta W}{(1 + r)^t}`,
          plain: 'A degree costs fees and the earnings you give up while studying, and pays back a higher wage for the rest of your career. Discounting both streams to today tells you whether it is worth it, and the discount rate at which the two balance is its internal rate of return.',
          syntax: [
            { sym: String.raw`\sum_{t=1}^{4}`, say: 'Add up over years 1 to 4, the years of study.' },
            { sym: String.raw`(1 + r)^t`, say: 'The discount factor: money in year t is worth less today. See [the time value of money](@finance/foundations/time-value).' },
          ],
          where: [
            { sym: 'C', def: 'Yearly cost of study: fees plus forgone earnings' },
            { sym: 'ΔW', def: 'The yearly earnings premium after graduating' },
            { sym: 'r', def: 'The discount rate' },
          ],
          worked: {
            title: 'Is a four-year degree worth it?',
            steps: [
              String.raw`Cost: $10,000 fees plus $30,000 of forgone earnings a year, so \(C = \$40{,}000\) for 4 years.`,
              String.raw`Benefit: $25,000 a year more for 40 working years, years 5 to 44.`,
              String.raw`At \(r = 5\%\): PV of costs \(= 40{,}000 \times 3.546 = \$141{,}840\).`,
              String.raw`PV of benefits \(= 25{,}000 \times 17.159 / 1.05^4 = 428{,}980 / 1.2155 = \$352{,}920\).`,
              String.raw`NPV \(\approx \$211{,}000\). The internal rate of return, where NPV is zero, is about 12.8% a year.`,
            ],
            why: ['the full cost includes earnings you give up', 'the graduate premium', 'an annuity factor for 4 years', 'a 40-year annuity, then discounted back 4 years', 'solve for the rate that makes NPV zero'],
            answer: 'At a 5% discount rate the degree is worth about $211,000 today. A return near 13% a year beats most financial investments, which is why education is called human capital.',
          },
        },
        {
          t: 'math',
          tex: String.raw`\ln w_i = \alpha + \rho\, S_i + \beta_1 X_i - \beta_2 X_i^2 + \varepsilon_i`,
          plain: 'Jacob Mincer’s earnings equation, the most estimated equation in labour economics. The log of a person’s wage rises by ρ for each extra year of schooling S, and rises with experience X at a slowing rate. Because it is in logs, ρ is (roughly) the percentage pay rise per extra year of schooling.',
          syntax: [
            { sym: String.raw`\ln w_i`, say: 'The natural log of person i’s wage. A change of 0.08 in ln w is about an 8% change in w.' },
            { sym: String.raw`\rho`, say: 'Read "rho": the return to a year of schooling.' },
            { sym: String.raw`X_i^2`, say: 'Experience squared, which makes the age–earnings profile curve and flatten.' },
          ],
          worked: {
            steps: [
              String.raw`Take \(\rho = 0.09\), \(\beta_1 = 0.04\), \(\beta_2 = 0.0007\).`,
              String.raw`Four more years of schooling: \(e^{4 \times 0.09} = e^{0.36} \approx 1.43\), so 43% higher pay.`,
              String.raw`Experience: earnings peak where \(\beta_1 - 2\beta_2 X = 0\), at \(X = 0.04/0.0014 \approx 29\) years.`,
            ],
            why: ['typical estimates', 'exponentiate to undo the log', 'the top of the experience curve'],
            answer: 'A worldwide review by Psacharopoulos and Patrinos (2018) puts the average private return to a year of schooling at about 9%. Some of that is signalling rather than skill (see [signalling](@economics/information/lemons-and-signalling)), but studies using natural experiments, such as changes in school-leaving ages, find returns of similar size.',
          },
        },
        {
          t: 'plot',
          title: 'Stylised age–earnings profiles',
          x: [18, 65],
          y: [0, 9000],
          xLabel: 'age',
          yLabel: 'monthly earnings ($)',
          curves: [
            { f: (a: number) => (a < 22 ? NaN : 3000 * Math.exp(0.04 * (a - 22) - 0.0007 * (a - 22) ** 2) * Math.exp(0.36)), label: 'degree (starts at 22)' },
            { f: (a: number) => 3000 * Math.exp(0.04 * (a - 18) - 0.0007 * (a - 18) ** 2), label: 'no degree (starts at 18)' },
          ],
          caption: 'Drawn from the Mincer equation above. The graduate gives up four years of earnings, starts higher and grows faster in absolute terms. The area between the curves after 22, minus the four lost years, is the return.',
        },
      ],
    },
    {
      id: 'differentials',
      title: 'Why wages differ',
      lead: 'The job, the worker, and the market.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`VSL = \frac{\Delta w}{\Delta p}`,
          plain: 'If workers demand extra pay to accept a higher risk of death on the job, the ratio of the pay premium to the extra risk tells you how much a group of people together value avoiding one statistical death. It is not the value of any named person’s life; it is the price people put on small changes in risk.',
          syntax: [
            { sym: String.raw`\Delta w`, say: 'The extra annual pay for the riskier job.' },
            { sym: String.raw`\Delta p`, say: 'The extra annual probability of death.' },
          ],
          worked: {
            steps: [
              String.raw`A riskier job pays $1,000 a year more and carries an extra 1 in 10,000 chance of death each year.`,
              String.raw`\(VSL = 1000 / 0.0001 = \$10{,}000{,}000\).`,
              String.raw`Interpretation: 10,000 such workers together accept $10 million a year to bear risks that will, on average, cost one life.`,
            ],
            why: ['a compensating differential', 'divide pay by risk', 'what the number means'],
            answer: 'A value of statistical life of about $10 million, close to the figures (around US$10–13 million) that US agencies use when deciding whether a safety regulation is worth its cost.',
          },
        },
        {
          t: 'table',
          head: ['Source of wage differences', 'Example', 'Explanation'],
          rows: [
            ['Compensating differentials', 'Offshore oil workers, night shifts, hazardous jobs', 'Unpleasant or risky jobs must pay more to attract workers'],
            ['Human capital', 'Doctors, engineers', 'Training raises productivity, and pay compensates for its cost'],
            ['Ability and effort', 'Top salespeople', 'Some people are more productive in the same job'],
            ['Superstar effects', 'Footballers, star authors', 'Technology lets the best reach a huge market, so small talent gaps make huge pay gaps (Rosen, 1981)'],
            ['Unions and bargaining power', 'Unionised sectors', 'Collective bargaining raises wages above what individuals could negotiate'],
            ['Monopsony', 'Single big employer in a town', 'Employers with wage-setting power pay below MRP. See [minimum wages](@economics/labour/minimum-wages)'],
            ['Discrimination', 'Gaps by sex or ethnicity for similar work', 'Taste-based (Becker) or statistical, judging individuals by group averages'],
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'The child penalty',
          text: 'Claudia Goldin, awarded the 2023 Nobel Prize, showed that most of today’s gender pay gap in rich countries arises within occupations and opens up around the birth of the first child, partly because many high-paying jobs reward long, inflexible hours. Kleven, Landais and Søgaard (2019) found that in Denmark women’s earnings fall about 20% below their trajectory after the first child and stay there, while men’s are unaffected.',
        },
        { t: 'callout', tone: 'note', title: 'Who pays CPF?', text: 'For most workers aged 55 and below, employers contribute 17% of wages to the Central Provident Fund and employees 20%. Labour economics suggests the legal split matters less than it seems: because labour supply is fairly inelastic, much of the employer’s share is likely passed on to workers through lower wages over time, as with any payroll tax. See [tax incidence](@economics/welfare/taxes-and-incidence).' },
      ],
    },
  ],
  sources: [
    'Becker, G. S. (1964). *Human Capital*. Columbia University Press for the NBER.',
    'Mincer, J. (1974). *Schooling, Experience, and Earnings*. NBER.',
    'Psacharopoulos, G., and Patrinos, H. A. (2018). Returns to investment in education: A decennial review of the global literature. *Education Economics*, 26(5), 445–458.',
    'Rosen, S. (1981). The economics of superstars. *American Economic Review*, 71(5), 845–858.',
    'Viscusi, W. K., and Aldy, J. E. (2003). The value of a statistical life: A critical review of market estimates throughout the world. *Journal of Risk and Uncertainty*, 27(1), 5–76.',
    'Kleven, H., Landais, C., and Søgaard, J. E. (2019). Children and gender inequality: Evidence from Denmark. *American Economic Journal: Applied Economics*, 11(4), 181–209.',
    'Goldin, C. (2014). A grand gender convergence: Its last chapter. *American Economic Review*, 104(4), 1091–1119.',
  ],
  related: ['economics/labour/minimum-wages', 'economics/labour/unemployment', 'economics/firms/costs-and-production'],
}

export default guide
