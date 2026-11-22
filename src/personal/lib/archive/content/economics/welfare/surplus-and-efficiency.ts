import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Why do economists say a market "works"? Because the price that clears a competitive market also makes the total benefit from trading as large as possible. This guide builds that claim from individual buyers and sellers: willingness to pay, cost, and the surplus each side keeps from a trade. It then proves that the competitive equilibrium maximises total surplus, shows how every policy in the rest of this shelf can be measured as a change in surplus, and is honest about what the measure leaves out.',
  nutshell: [
    '**Willingness to pay** is the most a buyer would pay; **consumer surplus** is that minus the price actually paid.',
    '**Producer surplus** is the price received minus the seller’s cost (strictly, minus the minimum they would accept).',
    'On a diagram, consumer surplus is the area **under demand and above the price**; producer surplus is **above supply and below the price**.',
    'A competitive equilibrium **maximises total surplus**: every trade worth making is made, and none that is not.',
    'Surplus measures **efficiency, not fairness**: it counts a dollar the same whoever gets it.',
  ],
  sections: [
    {
      id: 'wtp',
      title: 'Willingness to pay and consumer surplus',
      lead: 'The value you keep.',
      blocks: [
        { t: 'p', text: 'Four collectors bid for a rare first-edition comic. Each has a **willingness to pay** (WTP), the most they would give for it before preferring to keep their money. Suppose the comic sells at $70. The buyer with WTP $100 is $30 better off than if there were no sale: that $30 is their **consumer surplus**. It is real value, enjoyed by the buyer, that never appears in any sales figure.' },
        {
          t: 'table',
          head: ['Buyer', 'Willingness to pay', 'Buys at a price of $70?', 'Consumer surplus at $70'],
          rows: [
            ['Ana', '$100', 'Yes', '$30'],
            ['Ben', '$80', 'Yes', '$10'],
            ['Chen', '$70', 'Indifferent', '$0'],
            ['Dev', '$50', 'No', ''],
          ],
          caption: 'Lining buyers up from the highest WTP to the lowest traces out a staircase: the demand curve. With many buyers the steps become a smooth line.',
        },
        {
          t: 'plot',
          title: 'Demand as a staircase of willingness to pay',
          x: [0, 4.5],
          y: [0, 110],
          xLabel: 'number of comics',
          yLabel: 'price',
          data: [{ pts: [[0, 100], [1, 100], [1, 80], [2, 80], [2, 70], [3, 70], [3, 50], [4, 50], [4, 0]], label: 'demand (WTP of each buyer)' }],
          areas: [
            { pts: [[0, 100], [1, 100], [1, 70], [0, 70]], label: '$30', color: '#3b6fd8' },
            { pts: [[1, 80], [2, 80], [2, 70], [1, 70]], label: '$10', color: '#3b6fd8' },
          ],
          hlines: [{ y: 70, label: 'price $70' }],
          caption: 'Consumer surplus is the area between each buyer’s WTP and the price: 30 + 10 = $40 in total.',
        },
        {
          t: 'math',
          tex: String.raw`CS = \int_0^{Q^*} \big(D(q) - P^*\big)\,dq \;=\; \tfrac12\,(a - P^*)\,Q^* \;\;\text{for linear demand } P = a - bQ`,
          plain: 'Add up, over every unit bought, the gap between what that unit was worth to its buyer (the height of the demand curve) and the price paid. With a straight demand curve, that area is a triangle: half of base times height.',
          syntax: [
            { sym: String.raw`\int_0^{Q^*} \ldots \, dq`, say: 'Read "the integral from 0 to Q star": add up the thin slices between 0 and Q*. It is the area under a curve.' },
            { sym: String.raw`D(q)`, say: 'The demand curve as a price: the WTP of the q-th buyer.' },
          ],
          where: [
            { sym: 'a', def: 'The choke price: the highest WTP of anyone' },
            { sym: 'P*, Q*', def: 'The market price and the quantity bought' },
          ],
          worked: {
            title: 'Bubble tea in a neighbourhood',
            steps: [
              String.raw`Demand: \(P = 10 - 0.01Q\) cups a day. Price $4.`,
              String.raw`Quantity: \(4 = 10 - 0.01Q\), so \(Q = 600\).`,
              String.raw`Consumer surplus: \(\tfrac12 \times 600 \times (10 - 4) = \$1{,}800\) a day.`,
              String.raw`If the price rises to $5: \(Q = 500\), \(CS = \tfrac12 \times 500 \times 5 = \$1{,}250\).`,
              String.raw`The loss is $550: $500 on cups still bought (500 × $1) plus $50 on the 100 cups no longer bought (a triangle, \(\tfrac12 \times 100 \times 1\)).`,
            ],
            why: ['the market', 'read the quantity from demand', 'the triangle', 'the same at a higher price', 'split the loss into a rectangle and a triangle'],
            answer: 'Buyers enjoy about $1,800 a day of value over what they pay. A $1 price rise costs them $550, a rectangle plus a small triangle, a shape you will see in every tax and tariff diagram.',
          },
        },
      ],
    },
    {
      id: 'producer',
      title: 'Cost and producer surplus',
      lead: 'The value sellers keep.',
      blocks: [
        { t: 'p', text: 'On the other side, each seller has a minimum price at which they would sell, normally their marginal cost. Lining sellers up from the cheapest to the dearest traces out the supply curve. A seller who would accept $40 but receives $70 keeps $30 of **producer surplus**. For a firm, producer surplus is revenue minus variable cost: it is profit before fixed costs.' },
        {
          t: 'plot',
          title: 'Consumer and producer surplus at equilibrium',
          x: [0, 100],
          y: [0, 100],
          xLabel: 'quantity',
          yLabel: 'price',
          curves: [
            { f: (q: number) => 100 - q, label: 'demand (marginal benefit)' },
            { f: (q: number) => 10 + q, label: 'supply (marginal cost)' },
          ],
          areas: [
            { pts: [[0, 100], [0, 55], [45, 55]], label: 'consumer surplus 1,012.5', color: '#3b6fd8', at: [14, 70] },
            { pts: [[0, 55], [0, 10], [45, 55]], label: 'producer surplus 1,012.5', color: '#e07b2a', at: [14, 40] },
          ],
          points: [{ x: 45, y: 55, label: 'E (45, 55)' }],
          caption: 'Total surplus is the whole triangle between demand and supply, up to the equilibrium: ½ × 45 × 90 = 2,025.',
        },
        {
          t: 'math',
          tex: String.raw`TS = CS + PS = \int_0^{Q}\big(D(q) - S(q)\big)\,dq`,
          plain: 'Total surplus adds the buyers’ and sellers’ gains. The price paid cancels out, since it is a cost to the buyer and income to the seller. What remains is the value of each unit to its buyer minus the cost of making it, summed over all units traded.',
          syntax: [{ sym: String.raw`D(q) - S(q)`, say: 'The gap between marginal benefit and marginal cost at unit q: the net value created by that unit.' }],
          worked: {
            steps: [
              String.raw`Demand \(P = 100 - Q\), supply \(P = 10 + Q\). Equilibrium: \(100 - Q = 10 + Q\), so \(Q = 45\), \(P = 55\).`,
              String.raw`\(CS = \tfrac12 \times 45 \times (100 - 55) = 1012.5\).`,
              String.raw`\(PS = \tfrac12 \times 45 \times (55 - 10) = 1012.5\).`,
              String.raw`\(TS = 2025\). Equivalently \(\int_0^{45} (90 - 2q)\,dq = 90(45) - 45^2 = 2025\).`,
            ],
            why: ['solve for the equilibrium', 'the buyers’ triangle', 'the sellers’ triangle', 'both routes agree'],
            answer: 'The market creates $2,025 of value. Who gets it depends on the slopes; how much there is depends on whether all the worthwhile trades happen.',
          },
        },
      ],
    },
    {
      id: 'efficiency',
      title: 'Why the competitive equilibrium is efficient',
      lead: 'The invisible hand, proved on a diagram.',
      blocks: [
        {
          t: 'proof',
          claim: 'The competitive equilibrium quantity Q* maximises total surplus.',
          given: ['Demand D(q) slopes down (marginal benefit falls); supply S(q) slopes up (marginal cost rises); they cross once at Q*.'],
          method: 'direct',
          steps: [
            { statement: String.raw`\(TS(Q) = \int_0^{Q} \big(D(q) - S(q)\big)\,dq\), so \(\dfrac{dTS}{dQ} = D(Q) - S(Q)\).`, reason: 'The fundamental theorem of calculus: the slope of an area is the height at its edge.' },
            { statement: String.raw`For \(Q < Q^*\), \(D(Q) > S(Q)\), so TS rises with Q.`, reason: 'Below equilibrium the next unit is worth more than it costs.' },
            { statement: String.raw`For \(Q > Q^*\), \(D(Q) < S(Q)\), so TS falls with Q.`, reason: 'Beyond equilibrium the next unit costs more than it is worth.' },
            { statement: String.raw`TS is therefore largest at \(Q^*\), where \(D = S\).`, reason: 'It rises up to Q* and falls after it.' },
          ],
          note: 'The equilibrium also allocates well: the goods go to the buyers with the highest WTP (everyone who values the good above the price buys it) and are made by the sellers with the lowest cost (everyone whose cost is below the price sells). This is the first fundamental theorem of welfare economics in miniature.',
        },
        {
          t: 'plot',
          title: 'Producing too little or too much both waste surplus',
          x: [0, 80],
          y: [0, 100],
          xLabel: 'quantity',
          yLabel: 'price',
          curves: [
            { f: (q: number) => 100 - q, label: 'marginal benefit' },
            { f: (q: number) => 10 + q, label: 'marginal cost' },
          ],
          areas: [
            { pts: [[30, 70], [30, 40], [45, 55]], label: 'lost by making 30', color: '#d9534f', at: [36, 55] },
            { pts: [[45, 55], [60, 70], [60, 40]], label: 'lost by making 60', color: '#7b4fc9', at: [54, 55] },
          ],
          vlines: [{ x: 45, label: 'Q* = 45' }],
          caption: 'At 30 units, trades worth 70 to buyers and costing 40 to make are missed. At 60 units, the last units cost up to 70 to make but are worth as little as 40. Each triangle is ½ × 15 × 30 = 225 of lost surplus.',
        },
        {
          t: 'terms',
          items: [
            { term: 'Pareto efficient', def: 'An allocation where nobody can be made better off without making someone else worse off. Named after Vilfredo Pareto.' },
            { term: 'Pareto improvement', def: 'A change that makes at least one person better off and nobody worse off. Rare in policy, where almost everything has losers.' },
            { term: 'Kaldor–Hicks efficiency', def: 'A change is an improvement if the winners gain more than the losers lose, so they could in principle compensate them. Total surplus analysis uses this test, whether or not compensation is actually paid.' },
            { term: 'Deadweight loss', def: 'The fall in total surplus compared with the efficient outcome: value that nobody gets.' },
          ],
        },
        { t: 'quote', text: 'It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.', by: 'Adam Smith, The Wealth of Nations (1776)' },
      ],
    },
    {
      id: 'limits',
      title: 'What surplus misses',
      lead: 'When the invisible hand slips.',
      blocks: [
        {
          t: 'mindmap',
          center: 'When the efficiency result fails',
          branches: [
            { label: 'Market power', tone: 'orange', items: ['monopoly prices above MC', 'see the firms shelf'] },
            { label: 'Externalities', tone: 'teal', items: ['costs on bystanders', 'pollution, congestion'] },
            { label: 'Public goods', tone: 'mint', items: ['free riding', 'defence, lighthouses'] },
            { label: 'Hidden information', tone: 'lavender', items: ['lemons', 'insurance'] },
            { label: 'Irrational choices', tone: 'pink', items: ['present bias', 'misperceived risks'] },
            { label: 'Distribution', tone: 'mustard', items: ['efficiency ignores who gains', 'a dollar to a billionaire = a dollar to the poor'] },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Efficient is not the same as fair',
          text: 'A market can be perfectly efficient and leave some people unable to afford food. Surplus counts willingness to pay, and willingness to pay depends on ability to pay. The second fundamental welfare theorem says any efficient allocation can be reached by redistributing wealth and then letting markets work, which is the economist’s case for using taxes and transfers rather than price controls to pursue fairness. See [inequality](@economics/growth/inequality) and [price controls](@economics/welfare/price-controls).',
        },
        { t: 'p', text: 'The rest of this shelf uses surplus as its yardstick. Each policy is drawn on a supply and demand diagram, and its effect is read off as areas: who gains, who loses, and how big the deadweight triangle is. The next guide applies it to [taxes](@economics/welfare/taxes-and-incidence).' },
      ],
    },
  ],
  sources: [
    'Mankiw, N. G. (2021). *Principles of Economics* (9th ed.), chapter 7. Cengage.',
    'Marshall, A. (1890). *Principles of Economics*. Macmillan.',
    'Arrow, K. J., and Debreu, G. (1954). Existence of an equilibrium for a competitive economy. *Econometrica*, 22(3), 265–290.',
    'Smith, A. (1776). *An Inquiry into the Nature and Causes of the Wealth of Nations*. W. Strahan and T. Cadell.',
  ],
  related: ['finance/economics/supply-demand', 'economics/welfare/taxes-and-incidence', 'economics/welfare/price-controls'],
}

export default guide
