import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Governments need revenue to pay for defence, courts, schools, roads and transfers, and taxes are the main source. But taxes are not only about money: they change prices, incentives and who ends up better or worse off. A good tax system raises enough revenue, treats people fairly, interferes little with efficient decisions, is simple to comply with and is hard to avoid. These aims conflict, and every system is a compromise. This guide sets out the purposes and types of tax, progressive and flat structures, the difference between marginal and average rates, who really bears a tax (incidence), the Laffer curve and Adam Smith’s canons, with Singapore’s approach as an example.',
  nutshell: [
    'Taxes **raise revenue**, **redistribute**, **correct externalities** (carbon, tobacco) and **steer behaviour**.',
    '**Direct taxes** fall on income, profit or wealth; **indirect taxes** fall on spending (GST, excise duties).',
    'A tax is **progressive** if the average rate rises with income, **proportional** (flat) if constant, **regressive** if it falls.',
    'The **marginal rate** applies to the next dollar; the **average rate** is total tax divided by income: marginal is higher in a progressive system.',
    'The **legal** payer is not always the **economic** payer: **incidence** depends on the relative elasticities of supply and demand.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why tax, and what kinds',
      lead: 'Purposes and bases.',
      blocks: [
        {
          t: 'table',
          head: ['Base', 'Examples', 'Features'],
          rows: [
            ['Income', 'Personal income tax, corporate tax', 'Direct; can be progressive; sensitive to work and investment incentives'],
            ['Consumption', 'GST/VAT, excise duties, sales taxes', 'Indirect; broad base; stable revenue; regressive unless offset'],
            ['Wealth and property', 'Property tax, stamp duty, inheritance tax', 'Hard to avoid for immovable assets; valuation problems'],
            ['Payroll and social', 'Social contributions', 'Linked to benefits; Singapore uses mandatory savings (CPF) rather than a payroll tax'],
            ['Trade and corrective', 'Customs duties, carbon taxes, vehicle quotas', 'Change relative prices to protect industries or reduce harm'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Adam Smith’s canons', tag: '1776', body: 'Equity (according to ability to pay), certainty (not arbitrary), convenience (collected when and how the taxpayer finds easiest) and economy (cheap to collect).' },
            { title: 'Modern criteria', tag: 'what economists add', body: 'Efficiency (low deadweight loss), simplicity, adequacy of revenue, stability, administrability and transparency.' },
            { title: 'Horizontal equity', tag: 'fairness', body: 'People in similar circumstances pay similar tax.' },
            { title: 'Vertical equity', tag: 'fairness', body: 'People with greater ability to pay contribute more; progressive structures are one way to do this.' },
          ],
        },
      ],
    },
    {
      id: 'rates',
      title: 'Marginal and average rates',
      lead: 'The most misunderstood idea in tax.',
      blocks: [
        {
          t: 'math',
          plain: 'A progressive tax charges a higher rate on each additional slice of income, but the higher rate only applies to the slice, not to all of your income. The marginal rate is the rate on your next dollar; the average rate is your total tax divided by your total income, and it is always lower than the marginal rate.',
          tex: String.raw`T(y)=\sum_k r_k\,\max\!\big(0,\min(y,b_{k+1})-b_k\big),\qquad \text{ATR}=\frac{T(y)}{y},\qquad \text{MTR}=T'(y)=r_k\ \text{for}\ b_k<y\le b_{k+1}`,
          caption: 'A progressive schedule with bands: each rate applies only to income inside its band.',
          where: [{ sym: 'b_k', def: 'the lower bound of band k' }, { sym: 'r_k', def: 'the rate on income in band k' }, { sym: 'y', def: 'taxable income' }],
          syntax: [{ sym: '\\min(y,b_{k+1})-b_k', say: '\\(\\min(y,b_{k+1})-b_k\\) is the amount of income that falls inside band \\(k\\). With bands of 0 to 20,000 and 20,000 up, an income of 30,000 has \\(\\min(30{,}000,\\infty)-20{,}000=10{,}000\\) in the upper band. Multiply by that band\'s rate (10%) to get the tax on the slice: S$1,000. Moving up a band raises the rate only on the extra income, so earning more can never reduce take-home pay.' }, { sym: '\\text{ATR}=\\frac{T(y)}{y}', say: 'Average tax rate is total tax divided by total income: \\(1{,}000\\div30{,}000=3.3\\%\\); at 100,000 it is \\(8{,}000\\div100{,}000=8\\%\\). It rises toward the top marginal rate but never reaches it.' }, { sym: '\\text{MTR}=T\'(y)=r_k', say: 'The marginal tax rate is the rate on the next dollar, which is the rate of the band the income falls in (10% in both examples). The prime mark means "the rate of change of the tax with income". Earning another S$1,000 at the top band costs \\(0.10\\times1{,}000=\\text{S\\$}100\\) in tax, leaving S$900.' }],
          worked: {
            title: 'Two bands: 0% to S$20,000 and 10% above',
            steps: ['Income S$30,000: tax = 0.10 × 10,000 = S$1,000; average rate = 3.3%; marginal rate 10%.', 'Income S$100,000: tax = 0.10 × 80,000 = S$8,000; average rate = 8%; marginal rate 10%.', 'Earning another S$1,000 at the top band costs S$100 of tax: net gain S$900.'],
            answer: 'Moving into a higher band never makes you worse off: the higher rate applies only to the income above the threshold. The average rate rises slowly toward the top marginal rate but never reaches it.',
          },
        },
        { t: 'acct-viz', viz: 'income-tax' },
      ],
    },
    {
      id: 'incidence',
      title: 'Incidence and the Laffer curve',
      lead: 'Who pays, and how much revenue.',
      blocks: [
        {
          t: 'math',
          plain: 'A tax is legally paid by one side of a market but economically shared by both. How it is shared depends on who finds it harder to adjust: the side that cannot easily switch to something else carries more of the burden.',
          tex: String.raw`\text{Consumer share of tax}=\frac{\varepsilon_S}{\varepsilon_S+|\varepsilon_D|},\qquad \text{Producer share}=\frac{|\varepsilon_D|}{\varepsilon_S+|\varepsilon_D|}`,
          caption: 'A small per-unit tax is shared in proportion to how little each side can adjust.',
          where: [{ sym: '\\varepsilon_S', def: 'price elasticity of supply' }, { sym: '\\varepsilon_D', def: 'price elasticity of demand (negative)' }],
          syntax: [{ sym: '\\varepsilon_S/(\\varepsilon_S+|\\varepsilon_D|)', say: 'Compare the supply elasticity \\(\\varepsilon_S\\) with the size of the demand elasticity \\(|\\varepsilon_D|\\): the consumer\'s share is \\(\\varepsilon_S\\) divided by their sum. With supply elasticity 1.0 and demand elasticity \\(-0.25\\): \\(1.0\\div(1.0+0.25)=80\\%\\) borne by consumers. If demand were very elastic (\\(|\\varepsilon_D|=4\\)) consumers would bear only \\(1.0\\div5=20\\%\\). The vertical bars mean absolute value, which removes the minus sign of demand elasticity. The less able a group is to switch, the larger its share.' }, { sym: '\\text{Producer share}=\\frac{|\\varepsilon_D|}{\\varepsilon_S+|\\varepsilon_D|}', say: 'The producer\'s share is the other part: \\(0.25\\div1.25=20\\%\\). The two shares always add to 100%. For a S$1 tax, consumers pay about 80 cents more at the till and producers keep about 20 cents less.' }],
          worked: {
            title: 'A tax on a product with inelastic demand',
            steps: ['Supply elasticity 1.0; demand elasticity −0.25.', 'Consumer share = 1.0/(1.0 + 0.25) = 80%; producers bear 20%.', 'For a S$1 tax, the market price rises about 80 cents.'],
            answer: 'Who writes the cheque is not who bears the burden. This matters for GST on necessities, taxes on employers’ payroll (workers may bear them through lower wages) and corporate tax (shareholders, workers and customers share it).',
          },
        },
        {
          t: 'plot',
          title: 'A stylised Laffer curve',
          x: [0, 100],
          y: [0, 30],
          xLabel: 'tax rate (%)',
          yLabel: 'revenue (illustrative)',
          curves: [{ f: (x: number) => (x * (100 - x) * 30) / 2500, color: '#4a7dff', label: 'revenue' }],
          vlines: [{ x: 50, label: 'revenue-maximising rate (in this toy model)' }],
          caption: 'Revenue is zero at a 0% rate and also at 100% (nobody works for nothing), so somewhere in between it peaks. Where the peak lies is an empirical question and depends on the tax base, the elasticity of taxable income and how easy avoidance is; the curve is a thought experiment, not a measurement.',
        },
        { t: 'callout', tone: 'note', title: 'Singapore’s approach', text: 'Singapore relies on a low-rate, broad-base mix: a moderate progressive personal income tax with generous reliefs, a 17% headline corporate rate with exemptions, a 9% GST offset by transfers for lower-income households, property taxes, and no capital gains tax or estate duty. The aim is to keep the system competitive and simple while using spending and transfers to redistribute.' },
      ],
    },
  ],
  sources: [
    'Smith, A. (1776). *An Inquiry into the Nature and Causes of the Wealth of Nations*, Book V (the canons of taxation).',
    'Mirrlees, J. et al. (2011). *Tax by Design: The Mirrlees Review*. Oxford University Press / Institute for Fiscal Studies.',
    'Rosen, H. S. & Gayer, T. *Public Finance*. McGraw-Hill.',
    'Ministry of Finance Singapore: Budget documents and Revenue; IRAS (iras.gov.sg).',
    'Laffer, A. B. (2004). The Laffer curve: past, present, and future. Heritage Foundation Backgrounder.',
  ],
  related: ['accounting/taxation/singapore-personal-income-tax', 'accounting/taxation/gst-and-indirect-taxes', 'finance/economics/supply-demand'],
}

export default guide
