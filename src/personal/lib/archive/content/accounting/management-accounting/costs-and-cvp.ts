import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'How many units must a business sell before it makes a profit? How much would profit change if sales rose 10%? How risky is its cost structure? Cost–volume–profit analysis answers these questions by splitting costs into those that move with activity and those that do not. A firm with mostly fixed costs, such as an airline or a software company, has high operating leverage: profit is very sensitive to volume. One with mostly variable costs, such as a trading company, is steadier. This guide covers cost behaviour, contribution margin, break-even, margin of safety, target profit and operating leverage, with a live CVP lab.',
  nutshell: [
    '**Variable costs** change with volume; **fixed costs** do not (within a relevant range); **mixed costs** have both parts.',
    '**Contribution margin** = price − variable cost per unit: what each unit contributes to covering fixed costs and then to profit.',
    '**Break-even units** = fixed costs ÷ contribution per unit; **target profit units** = (fixed costs + target) ÷ contribution.',
    '**Margin of safety** = (actual − break-even) ÷ actual: how far sales can fall before a loss.',
    '**Degree of operating leverage** = contribution ÷ profit: the percentage change in profit for a 1% change in sales.',
  ],
  sections: [
    {
      id: 'behaviour',
      title: 'Cost behaviour',
      lead: 'What moves, and what stays put.',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'Behaviour', 'Examples'],
          rows: [
            ['Variable', 'Total rises in proportion to activity; per unit it is constant', 'Direct materials, sales commission, packaging, card fees'],
            ['Fixed', 'Total is constant over a range; per unit it falls as volume rises', 'Rent, salaries of permanent staff, insurance, depreciation'],
            ['Mixed (semi-variable)', 'A fixed element plus a variable element', 'Utilities with a standing charge, a phone plan with usage charges'],
            ['Step', 'Fixed until capacity is reached, then jumps', 'Supervisors, extra machines, another shift'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'The relevant range', text: 'Fixed costs are fixed only within a range of activity. If volume doubles, a second shop or factory may be needed and fixed costs step up. Break-even analysis therefore applies within a stated range of volumes and a stated time period.' },
      ],
    },
    {
      id: 'cvp',
      title: 'Break-even and margin of safety',
      lead: 'The core formulae.',
      blocks: [
        {
          t: 'math',
          plain: 'Each unit you sell brings in a price and uses up some variable cost; the difference (the contribution) goes first toward covering fixed costs and after that becomes profit. The break-even point is the number of units at which the contributions exactly cover the fixed costs. These formulas turn that story into numbers you can reason with.',
          tex: String.raw`\text{CM}=p-v,\qquad Q_{BE}=\frac{F}{p-v},\qquad Q_{T}=\frac{F+\pi}{p-v},\qquad \text{MoS}=\frac{Q-Q_{BE}}{Q}`,
          caption: 'Contribution, break-even volume, volume for a target profit, and the margin of safety.',
          where: [{ sym: 'p,\\ v', def: 'selling price and variable cost per unit' }, { sym: 'F', def: 'total fixed costs for the period' }, { sym: '\\pi', def: 'target profit' }, { sym: 'Q', def: 'expected or actual volume' }],
          syntax: [{ sym: 'F/(p-v)', say: 'Fixed costs divided by contribution per unit gives the number of units to break even. Example: \\(30{,}000\\div(25-10)=2{,}000\\) bags. A higher price or a lower variable cost raises the contribution in the denominator and cuts the break-even sharply: at a price of S$24 the contribution is S$14, so break-even rises to \\(30{,}000\\div14\\approx2{,}143\\) bags. Higher fixed costs raise the numerator and push the break-even up in proportion.' }, { sym: '\\text{CM}=p-v', say: 'Contribution margin per unit is the price minus the variable cost: \\(25-10=\\text{S\\$}15\\). Every extra unit sold adds this much toward fixed costs, then profit.' }, { sym: 'Q_T=\\frac{F+\\pi}{p-v}', say: 'To make a target profit \\(\\pi\\), the contributions must cover the fixed costs and the target: \\((30{,}000+21{,}000)\\div15=3{,}400\\) bags. A bigger target needs more units.' }, { sym: '\\text{MoS}=\\frac{Q-Q_{BE}}{Q}', say: 'The margin of safety is the share of current sales above break-even: \\((3{,}000-2{,}000)\\div3{,}000=33\\%\\). It says how far sales can fall before a loss. A larger margin means a safer business.' }],
          worked: {
            title: 'A coffee roaster',
            steps: ['Price S$25 per bag; variable cost S$10; fixed costs S$30,000 a period. Contribution = S$15.', 'Break-even = 30,000/15 = 2,000 bags (S$50,000 of sales). Sales of 3,000 bags give profit = 3,000 × 15 − 30,000 = S$15,000.', 'Margin of safety = (3,000 − 2,000)/3,000 = 33%. Target profit S$21,000 needs (30,000 + 21,000)/15 = 3,400 bags.'],
            answer: 'The firm can lose a third of its sales before it makes a loss. A S$1 cut in price (contribution falls to S$14) raises break-even to 2,143 bags: small price changes move the break-even a lot.',
          },
        },
        { t: 'acct-viz', viz: 'cvp' },
      ],
    },
    {
      id: 'dol',
      title: 'Operating leverage and risk',
      lead: 'Fixed costs magnify swings.',
      blocks: [
        {
          t: 'math',
          plain: 'Operating leverage describes how a business with high fixed costs magnifies changes in sales into larger changes in profit. Near break-even, a small rise in sales makes a big jump in profit percentage, and a small fall can wipe profit out.',
          tex: String.raw`\text{DOL}=\frac{\text{Contribution}}{\text{Profit}}=\frac{Q(p-v)}{Q(p-v)-F},\qquad \frac{\Delta\pi}{\pi}\approx\text{DOL}\times\frac{\Delta Q}{Q}`,
          caption: 'The degree of operating leverage.',
          where: [{ sym: '\\text{DOL}', def: 'degree of operating leverage at the current volume' }],
          syntax: [{ sym: '\\text{DOL}\\times\\tfrac{\\Delta Q}{Q}', say: 'Multiply the percentage change in sales by the degree of operating leverage to get the approximate percentage change in profit. Example: DOL \\(=45{,}000\\div15{,}000=3\\), so a 10% rise in sales gives about \\(3\\times10\\%=30\\%\\) more profit (actual: S$15,000 to S$19,500). A larger DOL, which happens when fixed costs are high or sales are close to break-even, makes profit swing more for the same change in sales, in both directions.' }, { sym: '\\text{DOL}=\\frac{\\text{Contribution}}{\\text{Profit}}', say: 'Total contribution divided by profit: \\(45{,}000\\div15{,}000=3.0\\). Because profit equals contribution minus fixed costs, DOL is large when profit is a small slice of contribution (high fixed costs) and shrinks as sales climb well above break-even.' }],
          worked: {
            title: 'The roaster at 3,000 bags',
            steps: ['Contribution = 3,000 × 15 = S$45,000; profit = S$15,000; DOL = 3.0.', 'If sales rise 10%, profit rises about 30%: 3,300 × 15 − 30,000 = S$19,500 (+30%).', 'If sales fall 10%, profit falls 30% to S$10,500.'],
            answer: 'Operating leverage works in both directions. A firm with high fixed costs gains from growth and suffers badly in downturns, which is why airlines and hotels are volatile, and why many shift to variable costs (outsourcing, commissions) when uncertain.',
          },
        },
        {
          t: 'dodont',
          do: ['State the assumptions: constant price and unit variable cost, one product or fixed mix, production equals sales', 'Run sensitivity cases on price, volume and cost', 'Use contribution per scarce resource (such as machine hours) when capacity is limited'],
          dont: ['Treat the break-even as a forecast', 'Forget that the sales mix changes the weighted contribution', 'Ignore taxes and the cost of capital when judging a project'],
        },
      ],
    },
  ],
  sources: [
    'Drury, C. *Management and Cost Accounting*. Cengage.',
    'Horngren, C. T., Datar, S. M. & Rajan, M. V. *Cost Accounting: A Managerial Emphasis*. Pearson.',
    'Garrison, R. H., Noreen, E. W. & Brewer, P. C. *Managerial Accounting*. McGraw-Hill.',
    'Chartered Institute of Management Accountants (cimaglobal.com): management accounting resources.',
  ],
  related: ['accounting/management-accounting/costing-and-pricing', 'accounting/management-accounting/budgets-and-variances', 'finance/start-here'],
}

export default guide
