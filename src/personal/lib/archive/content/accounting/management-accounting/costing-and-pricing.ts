import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'What does a product cost? The answer depends on how shared overhead is divided among products, and the choice can change which products look profitable. A factory that spreads all overhead by machine hours may subsidise complex, low-volume products at the expense of simple, high-volume ones. Activity-based costing traces overhead to the activities that cause it. Pricing then adds the question of what customers will pay and what a rival charges. This guide explains absorption costing, activity-based costing with a worked example, cost-plus pricing and margin versus markup, and when full cost is the wrong number to use.',
  nutshell: [
    '**Direct costs** trace to a product; **overheads** are shared and must be **allocated** with a rate, usually per direct labour or machine hour.',
    '**Absorption costing** includes fixed overhead in product cost; **marginal (variable) costing** does not, so profit differs when stock changes.',
    '**Activity-based costing (ABC)** assigns overhead to **activities** (setups, inspections, orders) and then to products by their use of each activity.',
    '**Cost-plus pricing**: price = cost × (1 + markup); **margin** = markup ÷ (1 + markup) of the price.',
    'For decisions, **full cost can mislead**: use incremental (relevant) costs and revenues.',
  ],
  sections: [
    {
      id: 'absorb',
      title: 'Absorption and marginal costing',
      lead: 'Is fixed overhead part of product cost?',
      blocks: [
        {
          t: 'table',
          head: ['', 'Absorption (full) costing', 'Marginal (variable) costing'],
          rows: [
            ['Product cost includes', 'Direct materials, direct labour, variable and fixed production overhead', 'Direct materials, direct labour, variable overhead only'],
            ['Fixed production overhead', 'Absorbed into units; stored in stock until sold', 'Expensed in the period'],
            ['Profit when stock rises', 'Higher (some fixed cost sits in closing stock)', 'Lower'],
            ['Used for', 'External reporting (required by IAS 2)', 'Internal decisions and CVP analysis'],
          ],
        },
        { t: 'p', text: 'Because absorption costing defers fixed overhead in stock, a manager rewarded on profit can raise this year’s profit by producing more than is sold. The difference between the two methods in a period equals the change in stock units multiplied by fixed overhead per unit.' },
        {
          t: 'math',
          plain: 'Factories have shared costs, like rent and power, that cannot be traced to one product. A common solution is to set a rate in advance, for example so many dollars per machine hour, and charge it to each product as the hours are used. At year-end the rate is compared with what was really spent.',
          tex: String.raw`\text{OAR}=\frac{\text{Budgeted overhead}}{\text{Budgeted activity}},\qquad \text{Over/under-absorption}=\text{Absorbed}-\text{Actual overhead}`,
          caption: 'The overhead absorption rate is set in advance; differences are written off at year-end.',
          where: [{ sym: '\\text{OAR}', def: 'overhead absorption rate, for example per machine hour' }],
          syntax: [{ sym: '\\text{Absorbed}-\\text{Actual}', say: 'Absorbed overhead is the rate times the hours actually used; actual overhead is what was really spent. Example: absorbed \\(=6\\times21{,}000=\\text{S\\$}126{,}000\\) against actual S$124,000, so \\(126{,}000-124{,}000=+\\text{S\\$}2{,}000\\): over-absorbed, meaning products were charged more than the true cost. A positive result lowers cost of sales at year-end; a negative result (under-absorption) raises it. It happens because the rate was a forecast made before the year began.' }, { sym: '\\text{OAR}=\\frac{\\text{Budgeted overhead}}{\\text{Budgeted activity}}', say: 'The overhead absorption rate is the budgeted overhead divided by the budgeted activity. Example: \\(120{,}000\\div20{,}000=\\text{S\\$}6\\) per machine hour. A larger overhead budget raises the rate; more planned hours spread the same cost thinner and lower it.' }],
          worked: {
            title: 'A plant-wide rate',
            steps: ['Budgeted overhead S$120,000; budgeted machine hours 20,000, so OAR = S$6 per hour.', 'Actual hours 21,000 and actual overhead S$124,000: absorbed = 126,000.', 'Over-absorbed by S$2,000, reducing cost of sales at year-end.'],
            answer: 'The rate smooths costing through the year, but the rate itself is only as good as the forecast.',
          },
        },
      ],
    },
    {
      id: 'abc',
      title: 'Activity-based costing',
      lead: 'Costs follow activities, not volume.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'List the activities', body: 'Machine running, setups, inspection, ordering, handling.' },
            { title: 'Pool the costs', body: 'Assign overhead to the activity that causes it.' },
            { title: 'Choose cost drivers', body: 'A measure that explains each pool: machine hours, number of setups, orders.' },
            { title: 'Compute rates', body: 'Pool cost divided by total driver quantity.' },
            { title: 'Assign to products', body: 'Rate × the product’s use of each driver.' },
          ],
        },
        {
          t: 'example',
          title: 'Two products, S$120,000 of overhead',
          lines: [
            { label: 'Pools', text: 'Machine-related S$60,000 (20,000 machine hours: S$3 per hour); setup-related S$60,000 (120 setups: S$500 per setup).' },
            { label: 'Product X', text: 'High volume, simple: 9,000 units, 18,000 machine hours, 20 setups.' },
            { label: 'Product Y', text: 'Low volume, complex: 1,000 units, 2,000 machine hours, 100 setups.' },
            { label: 'Traditional', text: 'Plant-wide S$6 per machine hour gives X S$108,000 (S$12 a unit) and Y S$12,000 (S$12 a unit).' },
            { label: 'ABC', text: 'X: 18,000 × 3 + 20 × 500 = S$64,000 (S$7.11 a unit). Y: 2,000 × 3 + 100 × 500 = S$56,000 (S$56 a unit).' },
          ],
        },
        { t: 'p', text: 'Under the traditional method both products look as if they cost S$12 of overhead per unit; ABC shows that the complex product costs nearly eight times as much because it consumes most setups. The firm may have been under-pricing Y and over-pricing X, which invites competitors to take the simple, high-volume business.' },
      ],
    },
    {
      id: 'price',
      title: 'Pricing',
      lead: 'Cost sets a floor, the market sets the price.',
      blocks: [
        {
          t: 'math',
          plain: 'Cost-plus pricing adds a percentage on top of cost. People often mix up markup (a percentage of cost) with margin (a percentage of the selling price), and they are different numbers. A 25% markup gives only a 20% margin, so a manager who wants a 25% margin must add more than 25% to cost.',
          tex: String.raw`P=C(1+m),\qquad \text{margin}=\frac{P-C}{P}=\frac{m}{1+m}`,
          caption: 'Cost-plus price from a markup m on cost, and the equivalent margin on price.',
          where: [{ sym: 'C', def: 'unit cost' }, { sym: 'm', def: 'markup on cost' }, { sym: 'P', def: 'price' }],
          syntax: [{ sym: 'm/(1+m)', say: 'Margin is profit divided by price, \\(\\tfrac{P-C}{P}\\), and it equals \\(\\tfrac{m}{1+m}\\) when expressed through the markup \\(m\\). Example: markup 25% gives \\(0.25\\div1.25=20\\%\\). For a markup of 100% the margin is only 50%, and the margin can never reach 100% however large the markup. Because the margin\'s base (price) is bigger than the markup\'s base (cost), margin is always the smaller percentage.' }, { sym: 'P=C(1+m)', say: 'The price is the cost multiplied by one plus the markup. Cost S$40 with a 25% markup: \\(40\\times1.25=\\text{S\\$}50\\), a profit of S$10. Raise the markup and the price rises in proportion. To reach a 25% margin instead, solve \\(P=C\\div(1-\\text{margin})=40\\div0.75=\\text{S\\$}53.33\\), a 33% markup.' }],
          worked: {
            title: 'Unit cost of S$40',
            steps: ['Markup 25%: price = 40 × 1.25 = S$50, profit S$10, margin = 10/50 = 20%.', 'To earn a 25% margin the price must be 40/(1 − 0.25) = S$53.33, a 33% markup.'],
            answer: 'A manager who wants a 25% margin but applies a 25% markup earns only 20% on sales. State which one you mean.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Cost-plus', tag: 'simple', body: 'Easy to use and defend, but ignores demand and competitors and depends on an overhead allocation that may be arbitrary.' },
            { title: 'Target costing', tag: 'market first', body: 'Start from the price customers will pay, subtract the required margin, and design the product to hit the resulting target cost.' },
            { title: 'Marginal pricing', tag: 'special orders', body: 'With spare capacity, an order priced above incremental cost adds profit even if below full cost; take care not to undermine the main market.' },
            { title: 'Transfer pricing', tag: 'inside groups', body: 'The price one division charges another affects divisional profit and, across borders, tax (see international tax).' },
          ],
        },
      ],
    },
  ],
  sources: [
    'IASB. IAS 2 Inventories (absorption costing for external reporting) (ifrs.org).',
    'Kaplan, R. S. & Cooper, R. (1998). *Cost and Effect: Using Integrated Cost Systems to Drive Profitability and Performance*. Harvard Business School Press.',
    'Horngren, C. T., Datar, S. M. & Rajan, M. V. *Cost Accounting: A Managerial Emphasis*. Pearson.',
    'Drury, C. *Management and Cost Accounting*. Cengage.',
  ],
  related: ['accounting/management-accounting/costs-and-cvp', 'accounting/management-accounting/budgets-and-variances', 'accounting/taxation/international-and-planning'],
}

export default guide
