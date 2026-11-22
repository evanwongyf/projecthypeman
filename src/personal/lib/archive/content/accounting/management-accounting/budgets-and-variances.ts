import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A budget is a plan expressed in numbers; a variance is the difference between the plan and what happened. Used well, they direct attention: a manager does not need to examine every line, only the ones that have moved. The skill is in explaining variances correctly, separating those caused by volume (we sold more) from those caused by price or efficiency (we paid more or sold for less). Budgets also support decisions, and decisions depend on relevant costs: those that differ between the options. Investment decisions add the time value of money, through net present value and payback. This guide covers the master budget, flexing, variance analysis with a worked example, relevant-cost decisions and capital budgeting.',
  nutshell: [
    'A **master budget** links sales, production, purchases, cash and the budgeted statements; a **flexed budget** restates costs for the **actual volume**.',
    '**Sales volume variance** = flexed − static budget profit; **price, cost and efficiency variances** compare actual with the flexed budget.',
    'Variances are **favourable (F)** or **adverse (A)**; they flag where to **investigate**, not who to blame.',
    '**Relevant costs** are future, incremental and avoidable; **sunk costs** and unavoidable allocations are ignored.',
    '**NPV** discounts future cash flows at the required return; accept projects with NPV > 0; **payback** ignores cash flows after recovery and the time value of money.',
  ],
  sections: [
    {
      id: 'budget',
      title: 'Budgets and flexing',
      lead: 'Compare like with like.',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'Sales budget', sub: 'Units and prices', tone: 'process' },
            { label: 'Production and purchases', sub: 'Stock policy, capacity', tone: 'process' },
            { label: 'Expense budgets', sub: 'Labour, overhead, marketing', tone: 'process' },
            { label: 'Cash budget', sub: 'Timing of receipts and payments', tone: 'data' },
            { label: 'Budgeted statements', sub: 'Income statement and balance sheet', tone: 'output' },
          ],
          loop: 'Actual results are compared and plans revised',
        },
        { t: 'p', text: 'A static budget is fixed for a planned volume. If actual volume differs, comparing actual costs with the static budget confuses volume with efficiency. The remedy is a flexed budget: the same prices and unit costs applied to the actual volume.' },
        {
          t: 'math',
          plain: 'A budget was drawn up for one level of sales, but the real year turned out differently. To understand why profit missed the plan, you split the gap into two parts: how much is explained simply by selling more or fewer units, and how much is because prices, costs or efficiency differed from what was planned. The first step is done by "flexing" the budget to the real volume.',
          tex: String.raw`\underbrace{\pi_{\text{static}}\to\pi_{\text{flexed}}}_{\text{volume}},\qquad \underbrace{\pi_{\text{flexed}}\to\pi_{\text{actual}}}_{\text{price, cost, efficiency}}`,
          caption: 'Splitting the difference between budget and actual profit.',
          where: [{ sym: '\\pi_{\\text{static}}', def: 'profit in the original budget' }, { sym: '\\pi_{\\text{flexed}}', def: 'budgeted rates applied to actual volume' }, { sym: '\\pi_{\\text{actual}}', def: 'reported profit' }],
          syntax: [{ sym: '\\pi_{\\text{static}}\\to\\pi_{\\text{flexed}}', say: 'The arrow from static profit to flexed profit is the effect of volume alone: re-run the budget at the actual number of units but with the planned prices and costs. Example: planned 10,000 units at a S$8 contribution gives \\(10{,}000\\times8-50{,}000=\\text{S\\$}30{,}000\\); at the actual 11,000 units it is \\(11{,}000\\times8-50{,}000=\\text{S\\$}38{,}000\\). The difference, +S$8,000, is the sales volume variance. Selling more at a positive contribution always raises profit; selling fewer lowers it.' }, { sym: '\\pi_{\\text{flexed}}\\to\\pi_{\\text{actual}}', say: 'The second arrow is everything else: how actual profit differs once volume is held the same. Flexed profit S$38,000 to actual S$26,100 is \\(-\\text{S\\$}11{,}900\\), made up of price \\(-5{,}500\\), variable cost \\(-4{,}400\\) and fixed cost \\(-2{,}000\\). Each part is (actual minus budgeted rate) times actual volume, so a worse price or cost per unit makes a negative (adverse) variance.' }],
          worked: {
            title: 'Budget 10,000 units at S$20, actual 11,000',
            steps: ['Budget: variable cost S$12, fixed S$50,000; static profit = 10,000 × 8 − 50,000 = S$30,000. Flexed to 11,000 units: 88,000 − 50,000 = S$38,000 (volume variance +S$8,000 F).', 'Actual: price S$19.50, variable cost S$12.40, fixed S$52,000: profit = 214,500 − 136,400 − 52,000 = S$26,100.', 'Price variance = (19.50 − 20) × 11,000 = −S$5,500 A; variable-cost variance = (12 − 12.40) × 11,000 = −S$4,400 A; fixed-cost variance −S$2,000 A.'],
            answer: 'Total variance −S$3,900 (A) = +8,000 − 5,500 − 4,400 − 2,000. Sales volume was good news; discounting and cost creep wiped it out and more. That story is invisible if one compares only actual with static.',
          },
        },
      ],
    },
    {
      id: 'decide',
      title: 'Relevant costs and decisions',
      lead: 'Only differences matter.',
      blocks: [
        {
          t: 'dodont',
          do: ['Include future cash flows that differ between the alternatives', 'Include opportunity costs, such as the contribution given up by using scarce capacity', 'Ignore sunk costs, committed costs and allocated overhead that would not change'],
          dont: ['Include past spending that cannot be recovered', 'Use a full-cost figure for a special order when spare capacity exists', 'Overlook non-financial effects such as quality, reliability and the customer relationship'],
        },
        {
          t: 'example',
          title: 'Make or buy a component',
          lines: [
            { label: 'Full cost to make', text: 'S$24 per unit = variable S$14 + avoidable fixed S$4 + allocated fixed overhead S$6 that continues either way.' },
            { label: 'Quote to buy', text: 'S$19 per unit.' },
            { label: 'Relevant cost to make', text: 'S$14 + S$4 = S$18; the S$6 is unavoidable and therefore irrelevant.' },
            { label: 'Decision', text: 'Make: S$18 < S$19. Comparing S$24 with S$19 would wrongly suggest buying.' },
          ],
        },
      ],
    },
    {
      id: 'npv',
      title: 'Investment appraisal',
      lead: 'Money now is worth more than money later.',
      blocks: [
        {
          t: 'math',
          plain: 'Money received later is worth less than money today, because today\'s money can be invested. Net present value shrinks each future cash flow back to today\'s money at the required return, adds them up and subtracts the cost of starting. If the result is positive, the project earns more than the return you demanded.',
          tex: String.raw`\text{NPV}=-I+\sum_{t=1}^{n}\frac{CF_t}{(1+r)^t},\qquad \text{Payback}=\text{years until cumulative }CF=I`,
          caption: 'Net present value discounts each cash flow at the required return r.',
          where: [{ sym: 'I', def: 'initial investment' }, { sym: 'CF_t', def: 'net cash flow in year t' }, { sym: 'r', def: 'required return (cost of capital)' }],
          syntax: [{ sym: '(1+r)^t', say: 'Dividing by \\((1+r)^t\\) converts a cash flow \\(t\\) years away into today\'s money. At \\(r=10\\%\\), year 1\'s 35,000 is worth \\(35{,}000\\div1.10=31{,}818\\), and year 4\'s is \\(35{,}000\\div1.10^4=23{,}905\\). Raise the required return \\(r\\), or look further into the future, and the divisor grows and the present value shrinks. This is why distant cash flows count for less than near ones.' }, { sym: '\\sum_{t=1}^{n}', say: 'Add up the present value of the cash flow in every year from year 1 to year \\(n\\): \\(31{,}818+28{,}926+26{,}296+23{,}905=110{,}945\\). Then subtract the starting investment \\(I=100{,}000\\) to get \\(\\text{NPV}=+10{,}945\\). Adding another year of positive cash flow always raises NPV.' }, { sym: '\\text{Payback}', say: 'Payback is the time taken for cumulative cash flows to repay the investment: \\(100{,}000\\div35{,}000=2.86\\) years. It is simple but ignores both the time value of money and everything after the payback date, so a project can pay back fast and still destroy value.' }],
          worked: {
            title: 'S$100,000 for S$35,000 a year for four years',
            steps: ['At 10%: PV of the inflows = 35,000 × 3.1699 = S$110,945; NPV = +S$10,945.', 'Payback = 100,000/35,000 = 2.86 years, ignoring the time value of money.', 'IRR (the rate at which NPV is zero) is about 15.0%.'],
            answer: 'Accept at 10%: the project earns more than the required return. At a 16% required return, NPV turns negative and the project should be rejected.',
          },
        },
        { t: 'callout', tone: 'tip', title: 'NPV and the finance shelf', text: 'The same discounting underlies bond pricing, share valuation and project appraisal. For the mathematics of discounting and the cost of capital, see the finance shelf.' },
      ],
    },
  ],
  sources: [
    'Drury, C. *Management and Cost Accounting*. Cengage.',
    'Horngren, C. T., Datar, S. M. & Rajan, M. V. *Cost Accounting: A Managerial Emphasis*. Pearson.',
    'Brealey, R. A., Myers, S. C. & Allen, F. *Principles of Corporate Finance*. McGraw-Hill (NPV and capital budgeting).',
    'Chartered Institute of Management Accountants: variance analysis and relevant costing study material.',
  ],
  related: ['accounting/management-accounting/costs-and-cvp', 'accounting/management-accounting/costing-and-pricing', 'finance/start-here'],
}

export default guide
