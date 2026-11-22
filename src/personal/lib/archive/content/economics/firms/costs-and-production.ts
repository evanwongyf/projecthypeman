import type { Guide } from '../../../guide'

// TC = 60 + 20q − 3q² + 0.25q³, the same firm as the cost-curves lab.
const F = 60
const mc = (q: number) => 20 - 6 * q + 0.75 * q * q
const avc = (q: number) => 20 - 3 * q + 0.25 * q * q
const atc = (q: number) => avc(q) + F / q

// Long-run average cost as the envelope of short-run curves.
const lrac = (q: number) => 6 + 300 / q + 0.02 * q
const lracSlope = (q: number) => -300 / (q * q) + 0.02
const srac = (q0: number) => (q: number) => lrac(q0) + lracSlope(q0) * (q - q0) + Math.max(0.0009, 600 / q0 ** 3) * (q - q0) ** 2

const guide: Guide = {
  intro:
    'Every price you pay sits on top of a cost someone else had to meet. To understand supply, how much firms offer at each price, you first need to understand cost: what is fixed and what varies, why the cost of one more unit eventually rises, and why big firms can sometimes make things more cheaply than small ones. This guide builds the cost curves from a single production table, derives the rule a competitive firm uses to choose its output, and explains when a loss-making firm should keep going and when it should close its doors.',
  nutshell: [
    'In the **short run** some inputs are fixed (the shop, the oven); in the **long run** everything can change.',
    '**Diminishing marginal returns**: adding workers to a fixed kitchen eventually adds less and less output, which makes **marginal cost rise**.',
    '**Marginal cost cuts average cost at its minimum**: a proof that takes three lines.',
    'A price-taking firm produces where **price = marginal cost**, and shuts down only if price falls **below average variable cost**.',
    '**Sunk costs** should not affect decisions; **economies of scale** make long-run average cost fall with size, up to the minimum efficient scale.',
  ],
  sections: [
    {
      id: 'production',
      title: 'Production and diminishing returns',
      lead: 'Where costs come from.',
      blocks: [
        { t: 'p', text: 'A bakery has one kitchen and one oven (fixed for now) and can hire as many bakers as it likes. The **total product** is the number of loaves a day; the **marginal product** of labour is the extra loaves the last baker adds. At first, extra bakers help each other specialise (one kneads, one shapes, one bakes) and output rises faster than headcount. Past a point they get in each other’s way at the single oven, and each new baker adds less. That is the **law of diminishing marginal returns**, and it is a statement about a fixed input, not about lazy workers.' },
        {
          t: 'table',
          head: ['Bakers', 'Loaves a day (total product)', 'Marginal product', 'Average product', 'Stage'],
          rows: [
            ['0', '0', '', '', ''],
            ['1', '10', '10', '10.0', 'increasing returns'],
            ['2', '25', '15', '12.5', 'increasing returns'],
            ['3', '45', '20', '15.0', 'increasing returns (peak MP)'],
            ['4', '60', '15', '15.0', 'diminishing returns begin'],
            ['5', '70', '10', '14.0', 'diminishing returns'],
            ['6', '75', '5', '12.5', 'diminishing returns'],
          ],
          caption: 'Marginal product rises, peaks at the third baker and then falls. Average product peaks where marginal product crosses it (between 3 and 4 bakers): the same "marginal pulls the average" logic as the cost curves below.',
        },
        {
          t: 'plot',
          title: 'Marginal and average product of bakers',
          x: [0, 6.5],
          y: [0, 22],
          xLabel: 'bakers',
          yLabel: 'loaves per baker',
          data: [
            { pts: [[1, 10], [2, 15], [3, 20], [4, 15], [5, 10], [6, 5]], label: 'marginal product', dots: true },
            { pts: [[1, 10], [2, 12.5], [3, 15], [4, 15], [5, 14], [6, 12.5]], label: 'average product', dots: true },
          ],
          caption: 'When the marginal baker adds more than the average, the average rises; when less, it falls. A student whose next test score is above their average pulls the average up: the same arithmetic.',
        },
        {
          t: 'math',
          tex: String.raw`MP_L = \frac{\Delta Q}{\Delta L}, \qquad MC = \frac{\Delta TC}{\Delta Q} = \frac{w\,\Delta L}{\Delta Q} = \frac{w}{MP_L}`,
          plain: 'Marginal cost is the wage divided by the marginal product. If the next baker costs $120 a day and adds 20 loaves, each extra loaf costs $6. If the next one adds only 5 loaves, each extra loaf costs $24. Diminishing returns in production are rising marginal cost seen from the other side.',
          syntax: [
            { sym: String.raw`MP_L`, say: 'Read "marginal product of labour".' },
            { sym: String.raw`\frac{\Delta Q}{\Delta L}`, say: 'Change in output divided by change in labour: extra loaves per extra baker.' },
            { sym: String.raw`w`, say: 'The wage of one more worker.' },
          ],
          where: [
            { sym: 'Q', def: 'Output' },
            { sym: 'L', def: 'Labour (workers or hours)' },
            { sym: 'TC', def: 'Total cost' },
            { sym: 'w', def: 'The wage per worker, the only variable cost here' },
          ],
          worked: {
            steps: [
              String.raw`A baker costs \(w = \$120\) a day.`,
              String.raw`The 3rd baker adds 20 loaves, so the marginal cost of those loaves is \(120 / 20 = \$6\).`,
              String.raw`The 5th adds 10: \(120 / 10 = \$12\).`,
              String.raw`The 6th adds 5: \(120 / 5 = \$24\).`,
            ],
            why: ['the price of the variable input', 'MC = w / MP at peak productivity', 'as MP halves, MC doubles', 'diminishing returns are rising marginal cost'],
            answer: 'Marginal cost falls to $6 then climbs to $24 a loaf: the U shape of the marginal cost curve comes straight from the hump in marginal product.',
          },
        },
      ],
    },
    {
      id: 'costs',
      title: 'The family of cost curves',
      lead: 'Fixed, variable, average and marginal.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Fixed cost (F)', def: 'Costs that do not change with output in the short run: rent, the lease on the oven, insurance. Paid even if you make nothing.' },
            { term: 'Variable cost (VC)', def: 'Costs that rise with output: ingredients, hourly wages, electricity for the oven.' },
            { term: 'Total cost (TC)', def: 'TC = F + VC.' },
            { term: 'Average variable cost (AVC)', def: 'VC ÷ q: variable cost per unit.' },
            { term: 'Average total cost (ATC)', def: 'TC ÷ q = AVC + F/q: all costs per unit. The F/q part (average fixed cost) shrinks as fixed costs are spread over more units.' },
            { term: 'Marginal cost (MC)', def: 'The extra cost of one more unit: ΔTC/Δq, or the slope of the total cost curve. Fixed cost does not affect it at all.' },
            { term: 'Sunk cost', def: 'A cost already paid that cannot be recovered whatever you do next. Rationally it should not affect any future decision.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`TC(q) = 60 + 20q - 3q^2 + 0.25q^3 \quad\Rightarrow\quad MC(q) = \frac{dTC}{dq} = 20 - 6q + 0.75q^2`,
          plain: 'A realistic cost function: 60 of fixed cost, and a variable part that first grows slowly (increasing returns) then quickly (diminishing returns). Marginal cost is the slope of total cost: how steeply it climbs at each output.',
          syntax: [
            { sym: String.raw`\frac{dTC}{dq}`, say: 'Read "d T C by d q": the derivative, the slope of total cost, the cost of a tiny extra bit of output.' },
            { sym: String.raw`q^3`, say: String.raw`q cubed. The derivative of \(q^n\) is \(nq^{n-1}\), so \(0.25q^3\) becomes \(0.75q^2\), \(-3q^2\) becomes \(-6q\), \(20q\) becomes 20, and the constant 60 vanishes.` },
          ],
          worked: {
            title: 'Every curve at q = 6',
            steps: [
              String.raw`Total cost: \(60 + 120 - 108 + 54 = 126\).`,
              String.raw`Variable cost: \(126 - 60 = 66\), so \(AVC = 66/6 = 11\).`,
              String.raw`Average total cost: \(126/6 = 21\).`,
              String.raw`Marginal cost: \(20 - 36 + 27 = 11\).`,
              String.raw`MC equals AVC here: \(q = 6\) is the bottom of the AVC curve.`,
            ],
            why: ['plug q = 6 into TC', 'remove the fixed part and divide by q', 'all costs per unit', 'the derivative at q = 6', 'see the proof below'],
            answer: String.raw`At 6 units, each unit costs 11 in variable cost and 21 in total, and the 6th unit itself costs 11. Because MC = AVC, $11 is the lowest possible variable cost per unit.`,
          },
          caption: 'The same cost function drives the lab at the end of this section.',
        },
        {
          t: 'table',
          head: ['q', 'TC', 'Extra cost of this unit', 'MC (slope)', 'AVC', 'ATC'],
          rows: [
            ['1', '77.25', '17.25', '14.75', '17.25', '77.25'],
            ['2', '90.00', '12.75', '11.00', '15.00', '45.00'],
            ['3', '99.75', '9.75', '8.75', '13.25', '33.25'],
            ['4', '108.00', '8.25', '8.00', '12.00', '27.00'],
            ['5', '116.25', '8.25', '8.75', '11.25', '23.25'],
            ['6', '126.00', '9.75', '11.00', '11.00', '21.00'],
            ['7', '138.75', '12.75', '14.75', '11.25', '19.82'],
            ['8', '156.00', '17.25', '20.00', '12.00', '19.50'],
            ['9', '179.25', '23.25', '26.75', '13.25', '19.92'],
            ['10', '210.00', '30.75', '35.00', '15.00', '21.00'],
          ],
          caption: 'The "extra cost of this unit" column is the discrete version of MC (TC at q minus TC at q − 1); the MC column is the exact slope at q. AVC bottoms out at q = 6 and ATC near q = 8, and in each case MC passes through the minimum.',
        },
        {
          t: 'plot',
          title: 'Marginal, average variable and average total cost',
          x: [0, 12],
          y: [0, 50],
          xLabel: 'output q',
          yLabel: '$ per unit',
          curves: [
            { f: mc, label: 'MC' },
            { f: avc, label: 'AVC', from: 0.2 },
            { f: atc, label: 'ATC', from: 1.3 },
          ],
          points: [
            { x: 6, y: 11, label: 'min AVC = 11' },
            { x: 7.92, y: 19.5, label: 'min ATC ≈ 19.50' },
          ],
          caption: 'MC is U-shaped and cuts both averages at their lowest points. The gap between ATC and AVC is average fixed cost, F/q, which shrinks as output grows.',
        },
        {
          t: 'proof',
          claim: 'Marginal cost crosses average cost at the minimum of average cost.',
          given: [String.raw`Total cost \(C(q)\), average cost \(AC(q) = C(q)/q\), marginal cost \(MC(q) = C'(q)\).`],
          method: 'direct',
          steps: [
            { statement: String.raw`\(\dfrac{d\,AC}{dq} = \dfrac{C'(q)\,q - C(q)}{q^2}\)`, reason: 'The quotient rule for the derivative of C(q)/q.' },
            { statement: String.raw`\(= \dfrac{1}{q}\left(C'(q) - \dfrac{C(q)}{q}\right) = \dfrac{MC - AC}{q}\)`, reason: 'Divide top and bottom by q and recognise MC and AC.' },
            { statement: String.raw`If \(MC < AC\), the slope is negative and AC is falling; if \(MC > AC\), AC is rising.`, reason: 'q is positive, so the sign depends only on MC − AC.' },
            { statement: String.raw`At the minimum of AC the slope is zero, so \(MC = AC\).`, reason: 'A smooth minimum has zero slope.' },
          ],
          note: 'The same argument works for AVC, since MC is also the slope of variable cost. It is why the MC curve always passes through the bottom of both U-shaped averages.',
        },
        { t: 'econ-viz', viz: 'cost-curves' },
      ],
    },
    {
      id: 'supply',
      title: 'The supply decision: P = MC and the shutdown rule',
      lead: 'How much to make, and whether to make anything.',
      blocks: [
        { t: 'p', text: 'A **price taker** is a firm too small to affect the market price, like a single durian stall or a wheat farm. It can sell as much as it likes at the going price P, so each extra unit adds exactly P to revenue: its **marginal revenue is the price**. It keeps producing while the next unit adds more to revenue than to cost, and stops where they are equal.' },
        {
          t: 'math',
          tex: String.raw`\pi(q) = Pq - TC(q) \quad\Rightarrow\quad \frac{d\pi}{dq} = P - MC(q) = 0 \quad\Rightarrow\quad P = MC(q)`,
          plain: 'Profit is revenue minus cost. Its slope is price minus marginal cost. When the slope is positive, producing more raises profit; when negative, producing less does. The peak is where the slope is zero: price equals marginal cost, on the rising part of the MC curve.',
          syntax: [
            { sym: String.raw`\pi`, say: 'Read "pi": profit. Economists use π for profit.' },
            { sym: String.raw`\frac{d\pi}{dq} = 0`, say: 'The profit curve is flat: the top of the hill.' },
          ],
          where: [
            { sym: 'P', def: 'The market price, taken as given' },
            { sym: 'TC(q)', def: 'Total cost of producing q' },
          ],
          worked: {
            title: 'The firm above at a price of $24',
            steps: [
              String.raw`Set \(24 = 20 - 6q + 0.75q^2\), so \(0.75q^2 - 6q - 4 = 0\).`,
              String.raw`Quadratic formula: \(q = \dfrac{6 + \sqrt{36 + 12}}{1.5} = \dfrac{6 + 6.93}{1.5} \approx 8.62\).`,
              String.raw`Revenue: \(24 \times 8.62 = 206.85\). Cost: \(TC(8.62) \approx 169.58\).`,
              String.raw`Profit: \(206.85 - 169.58 \approx \$37.27\).`,
              String.raw`Check: ATC at 8.62 is \(169.58 / 8.62 \approx 19.68\), below the price of 24, so profit must be positive.`,
            ],
            why: ['P = MC', 'take the larger root, on the rising part of MC', 'TC from the cost function', 'revenue minus cost', 'profit per unit is P − ATC'],
            answer: 'Make about 8.6 units and earn about $37 of profit.',
          },
        },
        {
          t: 'diagram',
          title: 'The short-run decision',
          nodes: [
            { id: 'p', label: 'Market price P', shape: 'pill', col: 0, row: 1, tone: 'ink' },
            { id: 'q1', label: 'P above min ATC?', shape: 'diamond', col: 1, row: 1, tone: 'mustard' },
            { id: 'prof', label: 'Produce where P = MC', sub: 'profit', col: 2, row: 0, tone: 'mint' },
            { id: 'q2', label: 'P above min AVC?', shape: 'diamond', col: 2, row: 2, tone: 'mustard' },
            { id: 'loss', label: 'Produce where P = MC', sub: 'loss smaller than F', col: 3, row: 1, tone: 'orange' },
            { id: 'shut', label: 'Shut down', sub: 'lose only F', col: 3, row: 3, tone: 'pink' },
          ],
          edges: [
            { from: 'p', to: 'q1' },
            { from: 'q1', to: 'prof', label: 'yes' },
            { from: 'q1', to: 'q2', label: 'no' },
            { from: 'q2', to: 'loss', label: 'yes' },
            { from: 'q2', to: 'shut', label: 'no' },
          ],
          caption: 'In the short run the fixed cost is paid whatever happens, so it does not belong in the decision. The firm asks only whether revenue covers its variable costs.',
        },
        {
          t: 'table',
          head: ['Price', 'Best output', 'Revenue', 'Total cost', 'Profit if producing', 'Profit if shut', 'Decision'],
          rows: [
            ['$24', '8.62', '$206.85', '$169.58', '+$37.27', '−$60', 'produce, profit'],
            ['$15', '7.06', '$105.83', '$139.57', '−$33.74', '−$60', 'produce: lose less than F'],
            ['$10', '5.63', '$56.33', '$122.15', '−$65.82', '−$60', 'shut down'],
          ],
          caption: 'At $15 the firm loses money either way but loses $26 less by producing, because revenue more than covers the variable cost and chips in towards the rent. At $10 the price is below the minimum AVC of $11, so every unit made loses money even before the rent.',
        },
        {
          t: 'metric',
          name: 'the shutdown price (minimum of AVC)',
          shows: 'The lowest price at which a firm will produce at all in the short run. Below it, revenue does not even cover the variable costs, so each unit produced deepens the loss.',
          eli5: 'A food truck that has already paid its parking permit for the month should still open on a slow day if the day’s sales pay for the food, fuel and helper. It should stay closed if they do not.',
          higher: 'A high shutdown price means variable costs are a large part of the business (ingredients, energy, hourly staff), so the firm closes quickly when prices fall: airlines grounding planes, refineries idling.',
          lower: 'A low shutdown price means most costs are fixed (a toll road, a software company, a mine already dug), so the firm keeps producing even at very low prices. This is why industries with high fixed costs can suffer long, brutal price wars.',
          typical: 'The short-run supply curve of a competitive firm is its MC curve above the shutdown price. In the long run every cost is variable, so the firm leaves the industry if price stays below minimum ATC.',
        },
        {
          t: 'callout',
          tone: 'myth',
          title: 'The sunk cost fallacy',
          text: 'Concorde kept flying for decades partly because Britain and France had spent so much developing it. A ticket you cannot refund should not make you sit through a bad film. Money already spent and unrecoverable is gone whatever you choose next; only future costs and benefits count. Firms are trained to ignore sunk costs and people are notoriously bad at it.',
        },
      ],
    },
    {
      id: 'long-run',
      title: 'The long run and economies of scale',
      lead: 'When the factory size can change too.',
      blocks: [
        { t: 'p', text: 'In the long run the bakery can build a bigger kitchen. Each kitchen size has its own short-run average cost curve; the **long-run average cost** (LRAC) curve traces the lowest cost of producing each output when the firm can choose the best kitchen for it. It is the lower envelope of all the short-run curves.' },
        {
          t: 'plot',
          title: 'Long-run average cost as an envelope',
          x: [10, 300],
          y: [8, 24],
          xLabel: 'output a day',
          yLabel: 'cost per unit',
          curves: [
            { f: srac(40), label: 'small kitchen', from: 15, to: 85, dashed: true },
            { f: srac(122), label: 'medium kitchen', from: 60, to: 200, dashed: true },
            { f: srac(230), label: 'large kitchen', from: 160, to: 300, dashed: true },
            { f: lrac, label: 'LRAC' },
          ],
          vlines: [{ x: 122, label: 'minimum efficient scale' }],
          caption: 'LRAC falls at first (economies of scale), bottoms out at the minimum efficient scale, and rises again for very large outputs (diseconomies of scale). Each short-run curve touches LRAC at one output and lies above it everywhere else.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Specialisation', tag: 'economy of scale', body: 'A large firm can split work into narrow tasks and hire specialists, as Adam Smith’s pin factory did: ten workers making 48,000 pins a day between them, against perhaps 20 each working alone.' },
            { title: 'Indivisible inputs', tag: 'economy of scale', body: 'A container crane, a chip fabrication plant or a data centre comes in big lumps. Spreading its cost over more output lowers cost per unit.' },
            { title: 'Geometry', tag: 'economy of scale', body: 'Doubling the dimensions of a tank or pipe multiplies its surface (material cost) by 4 but its volume (capacity) by 8. This is the "0.6 rule" in chemical engineering: cost rises with capacity to the power of about 0.6.' },
            { title: 'Bulk buying and finance', tag: 'economy of scale', body: 'Large firms negotiate lower prices from suppliers and borrow more cheaply.' },
            { title: 'Coordination costs', tag: 'diseconomy of scale', body: 'Beyond some size, layers of management, slow decisions and communication failures push cost per unit up again.' },
            { title: 'Minimum efficient scale', tag: 'MES', body: 'The smallest output at which LRAC is at its minimum. If MES is large compared with the whole market, only a few firms fit, so the industry tends towards oligopoly or monopoly.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{returns to scale: } F(\lambda K, \lambda L) \;\begin{cases} > \lambda F(K, L) & \text{increasing} \\ = \lambda F(K, L) & \text{constant} \\ < \lambda F(K, L) & \text{decreasing} \end{cases}`,
          plain: 'Double every input. If output more than doubles, the firm has increasing returns to scale and its average cost falls as it grows. If output exactly doubles, average cost is flat. If it less than doubles, average cost rises. This is different from diminishing returns, which is about adding one input while holding the others fixed.',
          syntax: [
            { sym: String.raw`F(K, L)`, say: 'The production function: output from capital K and labour L.' },
            { sym: String.raw`\lambda`, say: 'Read "lambda": the scaling factor, for example 2 to double everything.' },
          ],
          worked: {
            steps: [
              String.raw`Take \(Q = K^{0.6}L^{0.6}\) with \(K = L = 10\): \(Q = 10^{1.2} \approx 15.85\).`,
              String.raw`Double both: \(Q = 20^{1.2} \approx 36.41\).`,
              String.raw`Ratio: \(36.41 / 15.85 \approx 2.30\), more than 2.`,
              String.raw`In general \(F(\lambda K, \lambda L) = \lambda^{1.2}F(K, L)\): the exponents add to 1.2 > 1.`,
            ],
            why: ['the original scale', 'double both inputs', 'compare with doubling', 'the sum of the exponents decides'],
            answer: 'Doubling inputs multiplies output by 2.3, so this firm has increasing returns to scale and its long-run average cost falls as it grows.',
          },
        },
        { t: 'callout', tone: 'fact', title: 'Why small economies export', text: 'If the minimum efficient scale of a refinery or a chip plant is larger than Singapore’s entire domestic demand, a firm can reach low cost only by selling abroad. Scale economies are one reason small open economies specialise and trade so much; see [comparative advantage](@economics/trade/comparative-advantage).' },
        {
          t: 'dodont',
          do: ['Compare price with marginal cost to decide how much to make', 'Compare price with average variable cost to decide whether to produce at all in the short run', 'Compare price with average total cost to decide whether to stay in the industry', 'Ignore costs already paid that cannot be recovered'],
          dont: ['Confuse average cost with marginal cost: "it costs us $20 a unit" does not tell you what one more unit costs', 'Let a sunk cost keep a losing project alive', 'Confuse diminishing returns (one input added) with decreasing returns to scale (all inputs scaled)', 'Assume a loss-making firm should close at once: in the short run it may lose less by producing'],
        },
      ],
    },
  ],
  sources: [
    'Mankiw, N. G. (2021). *Principles of Economics* (9th ed.), chapters 13–14. Cengage.',
    'Varian, H. R. (2014). *Intermediate Microeconomics: A Modern Approach* (9th ed.), chapters 19–22. W. W. Norton.',
    'Smith, A. (1776). *An Inquiry into the Nature and Causes of the Wealth of Nations*, Book I, chapter 1. W. Strahan and T. Cadell.',
    'Arkes, H. R., and Blumer, C. (1985). The psychology of sunk cost. *Organizational Behavior and Human Decision Processes*, 35(1), 124–140.',
  ],
  related: ['economics/firms/competition-and-monopoly', 'accounting/management-accounting/costs-and-cvp', 'finance/economics/supply-demand'],
}

export default guide
