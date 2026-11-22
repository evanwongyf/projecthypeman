import type { Guide } from '../../../guide'

const gap = (t: number) => 3 * Math.sin((2 * Math.PI * t) / 8)

const guide: Guide = {
  intro:
    'A government budget is the largest set of spending and taxing decisions in an economy, often a third or more of GDP in rich countries. It provides public goods and transfers, and it moves with the business cycle: in a recession tax revenue falls and benefit payments rise, so the deficit widens even if nobody changes a single law. This guide explains the vocabulary (primary and overall balances, cyclical and structural deficits), measures how much of a deficit is due to the cycle, shows how automatic stabilisers cushion shocks by shrinking the multiplier, weighs discretionary stimulus against its lags, and examines the argument that government borrowing does not matter at all because households save to pay future taxes.',
  nutshell: [
    'The **primary balance** is revenue minus spending **excluding interest**; the **overall balance** includes interest.',
    'Part of any deficit is **cyclical** (from the business cycle) and part **structural** (what would remain at potential output).',
    '**Automatic stabilisers** (taxes that rise with income, benefits that rise with unemployment) cushion shocks without any decision, by lowering the multiplier.',
    '**Discretionary** policy suffers **lags**: recognising a recession, agreeing a response and spending the money all take time.',
    '**Ricardian equivalence**: if households fully anticipate future taxes, a debt-financed tax cut changes nothing. In practice it holds only partly.',
  ],
  sections: [
    {
      id: 'vocab',
      title: 'Reading a budget',
      lead: 'Balances, deficits and debt.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Revenue', def: 'Taxes (income, corporate, consumption such as GST, property), fees, and in some countries investment returns.' },
            { term: 'Spending', def: 'Purchases of goods and services (G), transfers (pensions, benefits, grants), and interest on debt.' },
            { term: 'Primary balance', def: 'Revenue minus all spending except interest. It shows whether current policies pay their way.' },
            { term: 'Overall (headline) balance', def: 'Primary balance minus interest payments. A negative overall balance is a deficit, adding to debt.' },
            { term: 'Debt', def: 'The stock of past deficits not yet repaid. Debt is a stock; the deficit is the flow that adds to it.' },
            { term: 'Structural balance', def: 'The balance the budget would show if output were at potential: the overall balance with the cycle removed.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{overall balance} = \underbrace{(T - G - TR)}_{\text{primary balance}} - iD, \qquad D_{t+1} = D_t - \text{overall balance}_t`,
          plain: 'The primary balance is taxes minus purchases and transfers. Subtract interest on the existing debt to get the overall balance. A deficit adds to the debt, a surplus pays it down.',
          syntax: [
            { sym: String.raw`TR`, say: 'Transfers: pensions, benefits, grants.' },
            { sym: String.raw`iD`, say: 'Interest: the interest rate times the debt.' },
          ],
          worked: {
            steps: [
              String.raw`In % of GDP: revenue 40, purchases and transfers 42, debt 60 at an average interest rate of 5%.`,
              String.raw`Primary balance: \(40 - 42 = -2\%\) (a primary deficit).`,
              String.raw`Interest: \(0.05 \times 60 = 3\%\). Overall balance: \(-2 - 3 = -5\%\).`,
              String.raw`Debt next year (before growth): \(60 + 5 = 65\%\) of this year’s GDP.`,
            ],
            why: ['the numbers', 'before interest', 'interest makes the deficit larger', 'the flow adds to the stock'],
            answer: 'A deficit of 5% of GDP, of which 3 points is interest on past borrowing. How fast the debt ratio grows also depends on GDP growth: see [debt dynamics](@economics/fiscal/debt-dynamics).',
          },
        },
      ],
    },
    {
      id: 'cycle',
      title: 'Cyclical and structural deficits',
      lead: 'How much is the recession’s fault?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`B^{structural} = B^{actual} - \varepsilon \cdot \text{output gap}, \qquad \varepsilon \approx 0.5`,
          plain: 'When output is below potential, taxes are lower and benefits higher than normal. The budget semi-elasticity ε says how many points of GDP the balance worsens for each point of output gap. Removing that cyclical part leaves the structural balance, which is what policy decisions control.',
          syntax: [
            { sym: String.raw`\varepsilon`, say: 'Read "epsilon": the budget semi-elasticity, about 0.5 for many OECD countries (larger where the state is bigger).' },
            { sym: String.raw`\text{output gap}`, say: 'Actual output minus potential, as % of potential. Negative in a recession.' },
          ],
          where: [{ sym: 'B', def: 'Budget balance as % of GDP; negative is a deficit' }],
          worked: {
            steps: [
              String.raw`In a recession the actual deficit is 5% of GDP and output is 4% below potential.`,
              String.raw`Cyclical part: \(0.5 \times (-4) = -2\%\).`,
              String.raw`Structural balance: \(-5 - (-2) = -3\%\).`,
              String.raw`When the economy recovers, about 2 points of the deficit disappears on its own; 3 points needs policy action.`,
            ],
            why: ['the observed numbers', 'the recession’s contribution', 'what is left at potential', 'the policy implication'],
            answer: 'Only the structural deficit is a lasting problem. Cutting spending in a recession to close a cyclical deficit deepens the recession for a deficit that would have shrunk anyway.',
          },
        },
        {
          t: 'plot',
          title: 'Actual and structural balance over a business cycle (illustrative)',
          x: [0, 16],
          y: [-6, 4],
          xLabel: 'years',
          yLabel: '% of GDP',
          curves: [
            { f: (t: number) => gap(t), label: 'output gap', dashed: true },
            { f: (t: number) => -1.5 + 0.5 * gap(t), label: 'actual budget balance' },
            { f: () => -1.5, label: 'structural balance' },
          ],
          caption: 'The actual balance swings with the cycle around an unchanged structural deficit of 1.5% of GDP: deficits widen in downturns and narrow in booms without any change in policy.',
        },
      ],
    },
    {
      id: 'stabilisers',
      title: 'Automatic stabilisers',
      lead: 'Shock absorbers built into the system.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`k(t) = \frac{1}{1 - c(1 - t)}: \qquad k(0) = \frac{1}{1 - 0.8} = 5, \qquad k(0.25) = \frac{1}{1 - 0.6} = 2.5`,
          plain: 'When income falls, taxes that depend on income fall too, so disposable income falls by less, and so does spending. Each round of the multiplier is damped. The same shock to investment or exports moves output by less when the tax rate is higher.',
          syntax: [{ sym: String.raw`k(t)`, say: 'The multiplier as a function of the tax rate.' }],
          worked: {
            steps: [
              String.raw`Investment falls by $10 billion. With no income tax, output falls by \(10 \times 5 = 50\).`,
              String.raw`With a 25% income tax: output falls by \(10 \times 2.5 = 25\).`,
              String.raw`Tax revenue falls by \(0.25 \times 25 = 6.25\): the deficit widens automatically, and that is what cushions households.`,
            ],
            why: ['a private-sector shock', 'taxes absorb part of each round', 'the cyclical deficit is the cushion'],
            answer: 'Automatic stabilisers halve the fall in output here, at the cost of a wider deficit during the downturn. Unemployment benefits work the same way from the spending side.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Progressive income tax', body: 'As incomes fall, people drop into lower brackets and pay a smaller share of income in tax.' },
            { title: 'Corporate tax', body: 'Falls sharply in recessions as profits collapse.' },
            { title: 'Unemployment benefits', body: 'Payments rise automatically as people lose jobs. Countries with generous benefits have strong stabilisers; Singapore’s are modest, which is one reason it relies more on discretionary packages in crises.' },
            { title: 'Consumption taxes', body: 'GST revenue falls with spending, a milder stabiliser because consumption moves less than income.' },
          ],
        },
      ],
    },
    {
      id: 'discretionary',
      title: 'Discretionary policy and its lags',
      lead: 'Timing is hard.',
      blocks: [
        {
          t: 'flow',
          title: 'The lags of discretionary fiscal policy',
          nodes: [
            { label: 'Shock hits', sub: 'month 0', tone: 'human' },
            { label: 'Recognition lag', sub: 'data arrive with a delay; recessions are dated months later', tone: 'data' },
            { label: 'Decision lag', sub: 'proposals, debate, legislation', tone: 'model' },
            { label: 'Implementation lag', sub: 'projects take time to start; money takes time to spend', tone: 'process' },
            { label: 'Effect', sub: 'possibly after the recovery has begun', tone: 'output' },
          ],
          caption: 'Monetary policy decides faster but acts with its own lags; automatic stabilisers have no decision lag at all.',
        },
        {
          t: 'dodont',
          do: ['Act quickly with measures that can be switched off: timely, targeted, temporary', 'Prefer transfers to households likely to spend them (lower-income, credit-constrained)', 'Use job-retention subsidies to keep worker–firm matches in a short, sharp shock', 'Build reserves or fiscal space in good times'],
          dont: ['Start long infrastructure projects as recession stimulus: they arrive late', 'Tighten fiscal policy in a slump to hit a headline deficit target', 'Make "temporary" measures permanent by default'],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Singapore’s COVID-19 budgets',
          text: 'In 2020 Singapore announced several budgets worth together about S$100 billion, roughly a fifth of GDP, including the Jobs Support Scheme, which paid a share of local workers’ wages to keep them employed. With the President’s approval, the government drew on past reserves to fund part of it, an unusual step under its constitutional framework. See [Singapore’s fiscal model](@economics/fiscal/singapore-fiscal-model).',
        },
      ],
    },
    {
      id: 'ricardo',
      title: 'Ricardian equivalence',
      lead: 'Does it matter how spending is financed?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\underbrace{\Delta T_1}_{\text{cut today}} = -100, \qquad \underbrace{\Delta T_2}_{\text{tax tomorrow}} = 100(1 + r) \quad\Rightarrow\quad \Delta\text{PV of taxes} = -100 + \frac{100(1 + r)}{1 + r} = 0`,
          plain: 'Suppose the government cuts taxes by $100 today and borrows to pay for it. Next period it must raise taxes by $100 plus interest to repay. The present value of the household’s taxes is unchanged, so a forward-looking household saves the whole tax cut to pay the future tax, and spending does not change. Robert Barro (1974) revived this idea of David Ricardo’s.',
          syntax: [{ sym: String.raw`\Delta\text{PV}`, say: 'The change in the present value of the household’s lifetime tax bill.' }],
          worked: {
            steps: [
              String.raw`Tax cut of $100 today; interest rate 5%; repayment next year of $105.`,
              String.raw`Present value of the repayment: \(105 / 1.05 = 100\).`,
              String.raw`Lifetime tax bill unchanged, so a household that plans perfectly buys a $100 bond and consumes nothing extra.`,
            ],
            why: ['the policy', 'discount the future tax', 'the Ricardian response'],
            answer: 'Under Ricardian equivalence the tax multiplier is zero. Government purchases still matter (they use real resources), but the timing of taxes does not.',
          },
        },
        {
          t: 'table',
          head: ['Assumption', 'Why it fails in practice', 'Effect'],
          rows: [
            ['Households can borrow and save freely', 'Many are credit-constrained and spend extra cash immediately', 'Tax cuts raise spending'],
            ['Households look far ahead', 'Many are myopic or do not track public finances', 'Tax cuts raise spending'],
            ['The future tax falls on the same people', 'It may fall on future generations', 'Today’s households feel richer'],
            ['Taxes are lump sum', 'Real taxes distort behaviour', 'Timing matters for efficiency'],
          ],
          caption: 'Evidence from tax rebates (for example the US rebates of 2001 and 2008) finds households spent a substantial share, roughly 20–40% within a few months, more among those with little cash. Equivalence holds partly, not fully.',
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'EU fiscal rules', body: 'Deficits below 3% of GDP and debt below 60%, set in the Maastricht Treaty (1992), with escape clauses for severe downturns, reformed in 2024.' },
            { title: 'Debt brakes', body: 'Germany’s constitution limits the federal structural deficit to 0.35% of GDP, with exceptions for emergencies.' },
            { title: 'Singapore’s rule', body: 'The government must balance its budget over each term of government and may not spend past reserves without the President’s agreement.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Barro, R. J. (1974). Are government bonds net wealth? *Journal of Political Economy*, 82(6), 1095–1117.',
    'Price, R., Dang, T.-T., and Botev, J. (2015). Adjusting fiscal balances for the business cycle: New tax and expenditure elasticity estimates for OECD countries. OECD Economics Department Working Paper 1275.',
    'Parker, J. A., Souleles, N. S., Johnson, D. S., and McClelland, R. (2013). Consumer spending and the economic stimulus payments of 2008. *American Economic Review*, 103(6), 2530–2553.',
    'Ministry of Finance, Singapore. Budget 2020 statements. mof.gov.sg.',
  ],
  related: ['economics/fiscal/debt-dynamics', 'economics/fiscal/singapore-fiscal-model', 'economics/macro/multiplier'],
}

export default guide
