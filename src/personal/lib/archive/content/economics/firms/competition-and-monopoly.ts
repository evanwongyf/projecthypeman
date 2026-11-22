import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'At one extreme, thousands of small firms sell an identical product and none can change the price: perfect competition. At the other, one firm is the whole market and sets the price itself: monopoly. Real markets sit in between, but the two extremes are worth understanding exactly, because they show what competition does for buyers and what is lost without it. This guide derives the competitive long-run equilibrium, the monopolist’s marginal revenue and markup, measures the deadweight loss of monopoly, and explains why some industries are natural monopolies that have to be regulated rather than broken up.',
  nutshell: [
    'A competitive firm is a **price taker**: P = MR. With free entry, long-run price is driven to the **minimum of average cost** and economic profit to **zero**.',
    'A monopolist faces the whole downward-sloping demand curve, so **marginal revenue is below price**: to sell one more unit it must cut the price on all of them.',
    'A monopolist produces where **MR = MC**, charges more and sells less than a competitive market, creating a **deadweight loss**.',
    'The markup rule: **(P − MC)/P = 1/|E|**. The less elastic demand is, the bigger the markup.',
    'When one firm can supply the market more cheaply than two (**natural monopoly**), the fix is regulation, not break-up.',
  ],
  sections: [
    {
      id: 'competition',
      title: 'Perfect competition',
      lead: 'Many firms, one price, no power.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Many buyers and sellers, each too small to affect the price',
            'An identical (homogeneous) product: a kilo of rice is a kilo of rice',
            'Free entry and exit in the long run',
            'Everyone knows the prices and the product (perfect information)',
          ],
        },
        { t: 'p', text: 'These assumptions are strong, and few markets meet all of them; wholesale agricultural commodities, foreign exchange and some online marketplaces come close. The model matters less as a description than as a benchmark: it shows the outcome that market power moves away from.' },
        {
          t: 'terms',
          items: [
            { term: 'Accounting profit', def: 'Revenue minus explicit costs (wages, rent, materials).' },
            { term: 'Economic profit', def: 'Revenue minus all costs, including the opportunity cost of the owner’s time and capital. Zero economic profit means the owner earns exactly what they could earn elsewhere: a perfectly normal return, not a failure.' },
            { term: 'Normal profit', def: 'The accounting profit that just covers those opportunity costs, so economic profit is zero.' },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Demand rises', body: 'The market price rises above minimum average cost, and existing firms make economic profits.' },
            { title: 'Profits attract entry', body: 'New firms enter because the industry pays better than their alternatives. Market supply shifts right.' },
            { title: 'Price falls', body: 'Extra supply pushes the price down. Entry continues while profit remains.' },
            { title: 'Back to zero profit', body: 'Entry stops when price equals minimum ATC. Each firm produces at the bottom of its average cost curve: the cheapest possible way to make the product.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{long run: } \; P = MC = \min ATC, \qquad \pi = (P - ATC)\,q = 0`,
          plain: 'In the long run competition forces three things to be equal: the price, the cost of one more unit, and the lowest average cost possible. Buyers pay exactly what it costs to make the product in the cheapest way, and nobody earns more than a normal return.',
          syntax: [
            { sym: String.raw`\min ATC`, say: 'Read "the minimum of average total cost": the bottom of the U.' },
            { sym: String.raw`\pi = (P - ATC)\,q`, say: 'Profit is profit per unit times units sold.' },
          ],
          worked: {
            title: 'How many firms fit?',
            steps: [
              String.raw`Each firm has the cost curve from the [costs guide](@economics/firms/costs-and-production): minimum ATC is 19.50 at \(q \approx 7.92\).`,
              String.raw`Market demand is \(Q_d = 1000 - 20P\).`,
              String.raw`Long-run price is 19.50, so market quantity is \(1000 - 20(19.5) = 610\).`,
              String.raw`Each firm makes 7.92, so the industry holds \(610 / 7.92 \approx 77\) firms.`,
            ],
            why: ['the bottom of each firm’s ATC', 'the market side', 'demand at the long-run price', 'divide the market by the firm size'],
            answer: 'About 77 firms, each at minimum ATC, each earning zero economic profit. If demand doubled, the price would return to 19.50 and the number of firms would roughly double.',
          },
        },
      ],
    },
    {
      id: 'monopoly',
      title: 'Monopoly: one seller and marginal revenue',
      lead: 'Why selling more means charging less.',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Legal barriers', tag: 'barrier to entry', body: 'Patents (20 years on a drug), copyrights, licences and exclusive franchises.' },
            { title: 'Control of a key input', tag: 'barrier to entry', body: 'De Beers once controlled most of the world’s rough diamond supply.' },
            { title: 'Economies of scale', tag: 'barrier to entry', body: 'If one firm’s average cost keeps falling across the whole market, a newcomer cannot match its cost (natural monopoly).' },
            { title: 'Network effects', tag: 'barrier to entry', body: 'A messaging app, card network or marketplace is worth more the more people use it, so the leader tends to stay the leader.' },
            { title: 'Switching costs', tag: 'barrier to entry', body: 'Learning new software, moving data or breaking a contract makes customers reluctant to change supplier.' },
            { title: 'Strategic behaviour', tag: 'barrier to entry', body: 'Threatening price wars, locking up distributors or buying start-ups before they grow.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`P = a - bQ \;\Rightarrow\; TR = PQ = aQ - bQ^2 \;\Rightarrow\; MR = \frac{dTR}{dQ} = a - 2bQ`,
          plain: 'With a straight-line demand curve, marginal revenue is also a straight line with the same starting point but twice as steep. To sell one more unit the monopolist must lower the price, and the lower price applies to every unit it was already selling, so the revenue from the extra unit is less than its price.',
          syntax: [
            { sym: String.raw`TR`, say: 'Total revenue: price times quantity.' },
            { sym: String.raw`MR = \frac{dTR}{dQ}`, say: 'Marginal revenue: the slope of total revenue, the extra revenue from one more unit.' },
          ],
          where: [
            { sym: 'a', def: 'The price at which nobody buys (the demand curve’s intercept)' },
            { sym: 'b', def: 'How much the price must fall to sell one more unit' },
          ],
          worked: {
            title: 'Why MR is below price',
            steps: [
              String.raw`Demand \(P = 100 - Q\). At \(Q = 30\), \(P = 70\) and revenue is \(2100\).`,
              String.raw`To sell 31, the price falls to 69: revenue is \(31 \times 69 = 2139\).`,
              String.raw`The extra unit brought in 69, but the 30 existing units each lost $1: \(69 - 30 = 39\).`,
              String.raw`Formula: \(MR = 100 - 2(30) = 40\), which matches the discrete answer of 39 to within rounding.`,
            ],
            why: ['the starting point', 'one more unit sold at a lower price', 'the gain on the new unit minus the loss on the old ones', 'the exact slope at Q = 30'],
            answer: 'Selling the 31st unit adds only about $39–40 to revenue even though it sells for $69. That gap is the root of monopoly’s inefficiency.',
          },
        },
        {
          t: 'math',
          tex: String.raw`MR = MC: \quad 100 - 2Q = 20 \;\Rightarrow\; Q_m = 40,\; P_m = 60 \qquad\text{vs}\qquad P = MC: \; Q_c = 80,\; P_c = 20`,
          plain: 'The monopolist keeps expanding while the next unit adds more to revenue than to cost, and stops where MR = MC. It then charges the highest price buyers will pay for that quantity, read off the demand curve. A competitive industry with the same costs would produce until price equals marginal cost.',
          syntax: [
            { sym: String.raw`Q_m, P_m`, say: 'The monopoly quantity and price.' },
            { sym: String.raw`Q_c, P_c`, say: 'The competitive quantity and price.' },
          ],
          worked: {
            title: 'Welfare under monopoly and competition',
            steps: [
              String.raw`Monopoly profit: \((60 - 20) \times 40 = 1600\).`,
              String.raw`Consumer surplus under monopoly: \(\tfrac12 \times 40 \times (100 - 60) = 800\).`,
              String.raw`Under competition, consumer surplus is \(\tfrac12 \times 80 \times 80 = 3200\) and profit is 0.`,
              String.raw`Total surplus: monopoly \(1600 + 800 = 2400\); competition 3200.`,
              String.raw`Deadweight loss: \(3200 - 2400 = 800 = \tfrac12 \times (80 - 40) \times (60 - 20)\).`,
            ],
            why: ['price minus cost, times units', 'the triangle under demand above the price', 'the competitive benchmark', 'add both sides', 'the triangle between demand and MC from 40 to 80'],
            answer: 'Monopoly transfers 1,600 from buyers to the firm and destroys another 800: the 40 units that buyers value above their cost of $20 but that are never made.',
          },
        },
        {
          t: 'plot',
          title: 'Monopoly: price, profit and deadweight loss',
          x: [0, 105],
          y: [0, 105],
          xLabel: 'quantity',
          yLabel: 'price',
          curves: [
            { f: (q: number) => 100 - q, label: 'demand' },
            { f: (q: number) => 100 - 2 * q, label: 'marginal revenue', to: 50 },
            { f: () => 20, label: 'MC = 20' },
          ],
          areas: [
            { pts: [[0, 100], [0, 60], [40, 60]], label: 'CS', color: '#3b6fd8' },
            { pts: [[0, 60], [40, 60], [40, 20], [0, 20]], label: 'monopoly profit', color: '#2f9e6e' },
            { pts: [[40, 60], [40, 20], [80, 20]], label: 'DWL', color: '#d9534f', at: [52, 33] },
          ],
          segments: [
            { from: [40, 0], to: [40, 60], dashed: true },
            { from: [80, 0], to: [80, 20], dashed: true },
          ],
          points: [
            { x: 40, y: 60, label: 'monopoly (40, 60)' },
            { x: 80, y: 20, label: 'competition (80, 20)' },
          ],
          caption: 'The monopolist picks the quantity where MR crosses MC (40), then charges what demand allows (60). The green rectangle was consumer surplus under competition and is now profit; the red triangle is lost to everyone.',
        },
      ],
    },
    {
      id: 'markup',
      title: 'The markup rule and the Lerner index',
      lead: 'How much power, measured.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`MR = P\left(1 - \frac{1}{|E|}\right) \quad\Rightarrow\quad MR = MC \;\Rightarrow\; \frac{P - MC}{P} = \frac{1}{|E|}`,
          plain: 'Marginal revenue depends on how sensitive buyers are. If demand is very elastic, cutting the price wins many customers and MR is close to the price. If demand is inelastic, cutting the price wins few and MR is far below it. Setting MR = MC gives a neat rule: the markup, as a share of the price, is one over the elasticity.',
          syntax: [
            { sym: String.raw`|E|`, say: 'The size of the price elasticity of demand, ignoring its minus sign.' },
            { sym: String.raw`\frac{P - MC}{P}`, say: 'The Lerner index: the share of the price that is markup over marginal cost.' },
          ],
          where: [
            { sym: 'E', def: 'Price elasticity of demand at the chosen point: % change in quantity ÷ % change in price' },
            { sym: 'MC', def: 'Marginal cost' },
          ],
          worked: {
            title: 'Deriving MR in terms of elasticity',
            steps: [
              String.raw`\(TR = P(Q)\,Q\), so \(MR = P + Q\,\dfrac{dP}{dQ}\) by the product rule.`,
              String.raw`Factor out P: \(MR = P\left(1 + \dfrac{Q}{P}\dfrac{dP}{dQ}\right)\).`,
              String.raw`Elasticity is \(E = \dfrac{dQ}{dP}\dfrac{P}{Q}\), so \(\dfrac{Q}{P}\dfrac{dP}{dQ} = \dfrac{1}{E}\), and E is negative, so \(MR = P(1 - 1/|E|)\).`,
              String.raw`Set \(MR = MC\): \(P - P/|E| = MC\), so \((P - MC)/P = 1/|E|\).`,
              String.raw`Example: \(|E| = 3\) and \(MC = \$10\): \(P(1 - \tfrac13) = 10\), so \(P = \$15\), a markup of a third of the price.`,
            ],
            why: ['revenue is price times quantity, and price depends on quantity', 'algebra', 'the definition of elasticity', 'the profit-maximising condition', 'put in numbers'],
            answer: 'A firm facing demand elasticity of 3 charges 1.5 times marginal cost. With elasticity 2 it charges 2 times; as elasticity rises towards infinity (perfect competition) the markup vanishes.',
          },
        },
        {
          t: 'table',
          head: ['|E| at the chosen price', 'Markup as share of price', 'Price as a multiple of MC'],
          rows: [
            ['1.25', '80%', '5.0×'],
            ['1.5', '67%', '3.0×'],
            ['2', '50%', '2.0×'],
            ['3', '33%', '1.5×'],
            ['5', '20%', '1.25×'],
            ['10', '10%', '1.11×'],
            ['∞ (perfect competition)', '0%', '1.0×'],
          ],
          caption: 'A profit-maximising monopolist never sets a price where demand is inelastic (|E| below 1): there, raising the price would raise revenue and cut costs at the same time.',
        },
        {
          t: 'metric',
          name: 'the Lerner index, (P − MC)/P',
          shows: 'How far a firm’s price sits above its marginal cost, as a share of the price. It runs from 0 (perfect competition, no market power) towards 1 (huge power).',
          eli5: 'If a cinema sells popcorn that costs it 50 cents for $8, almost the whole price is markup: the Lerner index is (8 − 0.5)/8 ≈ 0.94. The cinema can do that because once you are inside, there is nowhere else to buy popcorn.',
          higher: 'Buyers have few alternatives or care little about price: patented drugs, airport food, software that a whole industry depends on. A high index can also reflect high fixed costs that must be recovered (a drug’s research), so it is not proof of abuse on its own.',
          lower: 'Many close substitutes keep the price near marginal cost: petrol stations on the same road, commodity suppliers, generic drugs after a patent expires.',
          typical: 'Economists De Loecker, Eeckhout and Unger (2020) estimated that average markups of US listed firms rose from about 21% above marginal cost in 1980 to about 61% by 2016, a much-debated sign of rising market power.',
        },
      ],
    },
    {
      id: 'natural',
      title: 'Natural monopoly and regulation',
      lead: 'When one firm is cheapest.',
      blocks: [
        { t: 'p', text: 'Some industries have huge fixed costs and small marginal costs: a water network, the electricity grid, a railway line. Two water pipes down every street would double the fixed cost for no benefit. When average cost keeps falling across the whole range of market demand, one firm can supply the market more cheaply than any two, and that is a **natural monopoly**. Breaking it up raises costs, so governments regulate it instead.' },
        {
          t: 'plot',
          title: 'A natural monopoly and three ways to price it',
          x: [0, 260],
          y: [0, 52],
          xLabel: 'quantity',
          yLabel: 'price',
          curves: [
            { f: (q: number) => 50 - 0.2 * q, label: 'demand' },
            { f: (q: number) => 50 - 0.4 * q, label: 'MR', to: 125 },
            { f: (q: number) => 10 + 400 / q, label: 'average cost', from: 9 },
            { f: () => 10, label: 'marginal cost = 10' },
          ],
          points: [
            { x: 100, y: 30, label: 'unregulated (100, 30)' },
            { x: 189.4, y: 12.1, label: 'AC pricing (189, 12.11)' },
            { x: 200, y: 10, label: 'MC pricing (200, 10)' },
          ],
          caption: 'Average cost falls everywhere because the fixed cost of 400 is spread over more units. Marginal cost pricing is efficient but makes a loss; average cost pricing breaks even and gets close.',
        },
        {
          t: 'math',
          tex: String.raw`AC(Q) = 10 + \frac{400}{Q}, \quad P = 50 - 0.2Q: \qquad 50 - 0.2Q = 10 + \frac{400}{Q} \;\Rightarrow\; Q^2 - 200Q + 2000 = 0`,
          plain: 'Average cost pricing sets the price where demand crosses the average cost curve, so revenue exactly covers costs, including the fixed cost. Solving needs the quadratic formula.',
          syntax: [{ sym: String.raw`\frac{400}{Q}`, say: 'Average fixed cost: the 400 of fixed cost shared over Q units.' }],
          worked: {
            steps: [
              String.raw`Unregulated: \(MR = 50 - 0.4Q = 10\), so \(Q = 100\), \(P = 30\). \(AC(100) = 14\), so profit is \((30 - 14) \times 100 = 1600\).`,
              String.raw`Marginal-cost pricing: \(P = 10\), so \(Q = 200\). \(AC(200) = 12\), so the firm loses \((12 - 10) \times 200 = 400\), which a subsidy must cover.`,
              String.raw`Average-cost pricing: multiply through by Q: \(50Q - 0.2Q^2 = 10Q + 400\), so \(0.2Q^2 - 40Q + 400 = 0\), or \(Q^2 - 200Q + 2000 = 0\).`,
              String.raw`\(Q = \dfrac{200 + \sqrt{40000 - 8000}}{2} = \dfrac{200 + 178.9}{2} \approx 189.4\), and \(P = 50 - 0.2(189.4) \approx 12.11\).`,
              String.raw`Check: \(AC(189.4) = 10 + 400/189.4 \approx 12.11\). Price equals average cost, so profit is zero.`,
            ],
            why: ['the monopoly rule', 'the efficient rule, P = MC', 'set demand equal to average cost', 'take the larger root, where demand cuts AC from above', 'zero profit confirmed'],
            answer: 'Regulating the price down from $30 to $12.11 raises output from 100 to 189, almost to the efficient 200, without needing a subsidy.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Marginal-cost pricing plus subsidy', body: 'Efficient output, but taxpayers cover the fixed cost and the firm has little reason to keep costs down.' },
            { title: 'Average-cost (rate-of-return) regulation', body: 'Prices cover costs plus a fair return. Simple, but a firm guaranteed to recover its costs has weak incentives to cut them, and may overbuild capital (the Averch–Johnson effect).' },
            { title: 'Price caps (RPI − X)', body: 'Prices may rise by inflation minus an efficiency factor X for several years. If the firm cuts costs faster, it keeps the gain until the next review. Used for UK utilities since the 1980s.' },
            { title: 'Public ownership', body: 'The state runs the network directly. Singapore’s PUB owns the water system; the electricity grid is owned by SP Group, under the state investor Temasek, and its charges are regulated by the Energy Market Authority.' },
          ],
        },
      ],
    },
    {
      id: 'spectrum',
      title: 'The spectrum of market structures',
      lead: 'From many sellers to one.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Perfect competition', 'Monopolistic competition', 'Oligopoly', 'Monopoly'],
          rows: [
            ['Number of firms', 'Very many', 'Many', 'A few', 'One'],
            ['Product', 'Identical', 'Differentiated', 'Identical or differentiated', 'Unique'],
            ['Entry', 'Free', 'Free', 'Hard', 'Blocked'],
            ['Control over price', 'None', 'Some', 'Considerable, interdependent', 'Large'],
            ['Long-run profit', 'Zero', 'Zero', 'Can be positive', 'Can be positive'],
            ['Price vs MC', 'P = MC', 'P > MC', 'P > MC', 'P > MC'],
            ['Examples', 'Wholesale grain, forex', 'Cafés, hair salons, hawker stalls', 'Telcos, airlines, banks', 'Water network, a patented drug'],
          ],
        },
        { t: 'p', text: 'In **monopolistic competition** every café sells a slightly different product, so each faces a gently sloping demand curve and charges above marginal cost. But entry is free, so new cafés open until profits are gone. In the long run each café’s demand curve just touches its average cost curve on the falling part: zero profit, but each café works below the output that minimises its cost. That **excess capacity** (half-empty cafés) is the price of variety.' },
        { t: 'econ-viz', viz: 'cournot' },
        { t: 'p', text: 'Set the lab to one firm to see the monopoly of this guide (price 60 when MC is 20), then add firms. The [oligopoly guide](@economics/firms/oligopoly-and-pricing) explains the model behind the in-between cases.' },
      ],
    },
  ],
  sources: [
    'Varian, H. R. (2014). *Intermediate Microeconomics* (9th ed.), chapters 23–25. W. W. Norton.',
    'Lerner, A. P. (1934). The concept of monopoly and the measurement of monopoly power. *Review of Economic Studies*, 1(3), 157–175.',
    'De Loecker, J., Eeckhout, J., and Unger, G. (2020). The rise of market power and the macroeconomic implications. *Quarterly Journal of Economics*, 135(2), 561–644.',
    'Averch, H., and Johnson, L. L. (1962). Behavior of the firm under regulatory constraint. *American Economic Review*, 52(5), 1052–1069.',
  ],
  related: ['economics/firms/costs-and-production', 'economics/firms/oligopoly-and-pricing', 'economics/welfare/surplus-and-efficiency'],
}

export default guide
