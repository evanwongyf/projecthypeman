import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A factory upstream pours waste into a river; the fishermen downstream lose their catch, but the factory’s costs, and so its prices, do not include their loss. A neighbour gets vaccinated and lowers your chance of catching the disease, but they do not get paid for that. These spillovers onto people outside a transaction are externalities, and they are the most important reason a competitive market can get the quantity wrong. This guide shows how to measure the damage on a diagram, derives the corrective (Pigouvian) tax and subsidy, explains Ronald Coase’s argument that bargaining can sometimes fix the problem without government, and compares taxes with tradable permits.',
  nutshell: [
    'An **externality** is a cost or benefit that falls on people who are not party to a trade.',
    'With a negative externality, **social cost = private cost + external cost**, and the market **overproduces**.',
    'A **Pigouvian tax** equal to the marginal external damage **at the optimum** makes the market choose the efficient quantity.',
    'Positive externalities (vaccines, research) are **underproduced** and call for a **subsidy**.',
    '**Coase**: with clear property rights and cheap bargaining, the parties reach the efficient outcome whoever holds the rights. **Tradable permits** cut pollution at least cost by equalising marginal abatement costs.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What counts as an externality',
      lead: 'Costs and benefits that miss the price.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Negative (a cost on others)', 'Positive (a benefit to others)'],
          rows: [
            ['From production', 'Factory pollution, noise from construction, overfishing that depletes a shared stock', 'Bees from an orchard pollinating a neighbour’s crops; research that other firms learn from'],
            ['From consumption', 'Second-hand smoke, driving at rush hour (congestion), loud music', 'Vaccination (herd immunity), education (a more productive, civic society), a well-kept garden'],
          ],
        },
        {
          t: 'terms',
          items: [
            { term: 'Marginal private cost (MPC)', def: 'What one more unit costs the producer: the ordinary supply curve.' },
            { term: 'Marginal external cost (MEC)', def: 'The harm one more unit does to everyone else. Also called marginal damage.' },
            { term: 'Marginal social cost (MSC)', def: 'MPC + MEC: the full cost of one more unit to society.' },
            { term: 'Marginal external benefit (MEB)', def: 'The benefit one more unit gives to people other than the buyer.' },
            { term: 'Internalising an externality', def: 'Changing incentives so the decision-maker bears (or receives) the external cost (or benefit), for example by a tax, a subsidy, a liability rule or a merger of the parties.' },
          ],
        },
        {
          t: 'flow',
          title: 'Why markets overproduce with a negative externality',
          nodes: [
            { label: 'Producer’s cost', sub: 'wages, materials, energy', tone: 'data' },
            { label: 'Market price', sub: 'reflects only private cost', tone: 'model' },
            { label: 'Too much bought', sub: 'price below the true cost', tone: 'process' },
            { label: 'Harm to bystanders', sub: 'not paid by anyone in the trade', tone: 'human' },
          ],
          caption: 'The price signal is missing the external cost, so buyers face a price that is too low and buy too much.',
        },
      ],
    },
    {
      id: 'negative',
      title: 'Negative externalities and the Pigouvian tax',
      lead: 'Overproduction, measured and fixed.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{market: } MB = MPC, \qquad \text{optimum: } MB = MSC = MPC + MEC, \qquad t^{Pigou} = MEC(Q^{opt})`,
          plain: 'The market produces until the value to buyers equals the producer’s cost. Society wants production only until the value to buyers covers the full cost, including the harm to others. A tax equal to the harm caused by the last unit at the optimum makes the producer’s cost equal the social cost, and the market does the rest.',
          syntax: [
            { sym: String.raw`MB`, say: 'Marginal benefit to buyers: the demand curve.' },
            { sym: String.raw`Q^{opt}`, say: 'The socially optimal quantity.' },
            { sym: String.raw`t^{Pigou}`, say: 'The Pigouvian tax, after the economist Arthur Pigou (1920).' },
          ],
          where: [
            { sym: 'MPC', def: 'Marginal private cost (supply)' },
            { sym: 'MEC', def: 'Marginal external cost' },
            { sym: 'MSC', def: 'Marginal social cost' },
          ],
          worked: {
            title: 'A constant harm of $20 per unit',
            steps: [
              String.raw`Demand \(MB = 100 - Q\); private cost \(MPC = 10 + Q\); each unit does $20 of harm.`,
              String.raw`Market: \(100 - Q = 10 + Q\), so \(Q_m = 45\), \(P = 55\).`,
              String.raw`Optimum: \(100 - Q = 30 + Q\), so \(Q^{opt} = 35\), \(P = 65\).`,
              String.raw`Deadweight loss of the market outcome: \(\tfrac12 \times (45 - 35) \times 20 = 100\).`,
              String.raw`A $20 tax shifts private cost to \(30 + Q\): the market now produces 35, and the tax raises \(20 \times 35 = \$700\).`,
            ],
            why: ['the three curves', 'the market ignores the harm', 'society counts it', 'the 10 extra units each cost society more than they are worth, on average by $10', 'internalise the externality'],
            answer: 'The market makes 10 units too many, wasting $100. A $20 tax fixes it exactly, and the revenue can be used to cut other, distorting taxes: the "double dividend" argument.',
          },
        },
        {
          t: 'plot',
          title: 'Market overproduction and the welfare loss',
          x: [0, 60],
          y: [0, 100],
          xLabel: 'quantity',
          yLabel: '$ per unit',
          curves: [
            { f: (q: number) => 100 - q, label: 'demand = marginal benefit' },
            { f: (q: number) => 10 + q, label: 'marginal private cost (supply)' },
            { f: (q: number) => 30 + q, label: 'marginal social cost', dashed: true },
          ],
          areas: [{ pts: [[35, 65], [45, 75], [45, 55]], label: 'DWL', color: '#d9534f', at: [42, 65] }],
          points: [
            { x: 45, y: 55, label: 'market (45, 55)' },
            { x: 35, y: 65, label: 'optimum (35, 65)' },
          ],
          segments: [{ from: [45, 55], to: [45, 75], label: 'MEC = 20', dashed: true }],
          caption: 'Each unit from 35 to 45 costs society more (MSC) than buyers value it (demand). The triangle between the two is the loss from overproduction.',
        },
        {
          t: 'math',
          tex: String.raw`MEC(Q) = 0.5Q \;\Rightarrow\; MSC = 10 + 1.5Q, \qquad 100 - Q = 10 + 1.5Q \;\Rightarrow\; Q^{opt} = 36, \quad t = MEC(36) = 18`,
          plain: 'When harm grows with output (each extra tonne of smog is worse than the last), the right tax is the marginal harm at the optimum, not at the current market output. Setting the tax at today’s marginal harm overshoots.',
          syntax: [{ sym: String.raw`MEC(36)`, say: 'The external cost of the 36th unit.' }],
          worked: {
            steps: [
              String.raw`Market output is still 45, where marginal damage is \(0.5 \times 45 = 22.5\).`,
              String.raw`Optimum: \(100 - Q = 10 + 1.5Q\), so \(2.5Q = 90\) and \(Q = 36\).`,
              String.raw`Marginal damage at 36: \(0.5 \times 36 = 18\).`,
              String.raw`With an $18 tax the market solves \(100 - Q = 28 + Q\): \(Q = 36\). Correct.`,
              String.raw`A $22.50 tax would give \(100 - Q = 32.5 + Q\): \(Q = 33.75\), too little.`,
            ],
            why: ['damage today', 'the true optimum', 'harm at the optimum', 'check', 'the mistake'],
            answer: 'Tax at the marginal damage at the target, $18, not at today’s marginal damage of $22.50.',
          },
        },
        { t: 'econ-viz', viz: 'externality' },
      ],
    },
    {
      id: 'positive',
      title: 'Positive externalities and subsidies',
      lead: 'When markets make too little.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`MSB = MPB + MEB, \qquad \text{optimum: } MSB = MC, \qquad s^{Pigou} = MEB(Q^{opt})`,
          plain: 'When a purchase benefits others too, buyers count only their own benefit and buy too little. A subsidy equal to the benefit to others raises private demand to the social level.',
          syntax: [
            { sym: String.raw`MPB, MSB`, say: 'Marginal private and social benefit.' },
            { sym: String.raw`s^{Pigou}`, say: 'The corrective subsidy.' },
          ],
          worked: {
            title: 'Flu jabs',
            steps: [
              String.raw`Private benefit \(MPB = 80 - Q\) (thousand jabs); cost \(MC = 20\); each jab protects others by $10.`,
              String.raw`Market: \(80 - Q = 20\), so \(Q_m = 60\) thousand.`,
              String.raw`Optimum: \(90 - Q = 20\), so \(Q^{opt} = 70\) thousand.`,
              String.raw`Loss from under-vaccination: \(\tfrac12 \times 10 \times 10 = \$50\) thousand.`,
              String.raw`A $10 subsidy per jab (or free jabs for high-risk groups) moves uptake to 70 thousand.`,
            ],
            why: ['benefit to the person jabbed, cost, benefit to others', 'private choice', 'social choice', 'the triangle of jabs worth more than they cost', 'internalise the benefit'],
            answer: 'People skip 10,000 jabs that would be worth more to society than they cost. A subsidy, or free provision, closes the gap.',
          },
        },
        {
          t: 'plot',
          title: 'Underproduction with a positive externality',
          x: [0, 90],
          y: [0, 95],
          xLabel: 'jabs (thousands)',
          yLabel: '$ per jab',
          curves: [
            { f: (q: number) => 80 - q, label: 'marginal private benefit' },
            { f: (q: number) => 90 - q, label: 'marginal social benefit', dashed: true },
            { f: () => 20, label: 'marginal cost' },
          ],
          areas: [{ pts: [[60, 20], [60, 30], [70, 20]], label: 'DWL', color: '#d9534f', at: [63, 24] }],
          points: [
            { x: 60, y: 20, label: 'market' },
            { x: 70, y: 20, label: 'optimum' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{herd immunity threshold} = 1 - \frac{1}{R_0}`,
          plain: 'Each infected person passes a disease to R₀ others in a population with no immunity. If a share p is immune, each case infects R₀(1 − p) others. The outbreak shrinks once that is below 1, so p must exceed 1 − 1/R₀. Beyond that point, each extra vaccination protects mostly other people: the positive externality in its purest form.',
          syntax: [{ sym: String.raw`R_0`, say: 'Read "R nought": the basic reproduction number.' }],
          worked: {
            steps: [
              String.raw`Seasonal flu: \(R_0 \approx 1.3\), threshold \(1 - 1/1.3 \approx 23\%\).`,
              String.raw`Measles: \(R_0 \approx 15\), threshold \(1 - 1/15 \approx 93\%\).`,
            ],
            why: ['a mildly infectious disease', 'one of the most infectious known'],
            answer: 'Measles needs about 93% immunity to stop spreading, which is why even small falls in childhood vaccination rates lead to outbreaks, and why many countries make vaccination free or required.',
          },
        },
      ],
    },
    {
      id: 'coase',
      title: 'The Coase theorem: bargaining instead of taxes',
      lead: 'Property rights and transaction costs.',
      blocks: [
        { t: 'p', text: 'Ronald Coase (1960) pointed out that an externality involves two parties, and it is reciprocal: the factory harms the laundry, but stopping the factory harms the factory. If property rights are clear and the two can bargain cheaply, they will reach the efficient outcome **whichever side holds the right**. The allocation of rights decides who pays whom, not what happens.' },
        {
          t: 'table',
          head: ['', 'Factory has the right to emit', 'Laundry has the right to clean air'],
          rows: [
            ['Smoke costs the laundry $300 a year; a filter costs $100', 'Laundry pays the factory between $100 and $300 to fit the filter', 'Factory fits the filter itself (cheaper than compensating $300)'],
            ['Outcome', 'Filter fitted', 'Filter fitted'],
            ['Smoke costs the laundry $300; a filter costs $500', 'Laundry will not pay $500 to save $300: no filter', 'Factory pays the laundry up to $500 (at least $300) to accept the smoke: no filter'],
            ['Outcome', 'No filter', 'No filter'],
          ],
          caption: 'In both cases the efficient choice (fit the filter only if it costs less than the damage) is made. Who holds the right changes only the direction of the payment.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'When Coase works', body: 'Few parties, clear rights, known damages, cheap negotiation: two neighbours and a tree, a factory and a single farm, a building and the one next door blocking its light.' },
            { title: 'When it fails', body: 'Many parties (millions of people breathing city air), unclear or unenforceable rights, uncertain damages, holdouts and free riders. Bargaining costs then swamp the gains, and taxes or regulation are needed.' },
            { title: 'Coase’s real point', body: 'He was not saying governments are unnecessary. He argued that the choice between bargaining, liability law, taxes and regulation should depend on which has the lowest transaction costs in each case.' },
            { title: 'Endowment effects', body: 'Experiments find people demand far more to give up a right than they would pay to get it, so in practice the initial allocation can affect outcomes. See [prospect theory](@economics/behavioural/prospect-theory).' },
          ],
        },
      ],
    },
    {
      id: 'permits',
      title: 'Prices or quantities: taxes and tradable permits',
      lead: 'Cutting pollution at least cost.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\min_{a_A + a_B = 40}\; C_A(a_A) + C_B(a_B) \;\Rightarrow\; MAC_A = MAC_B`,
          plain: 'To cut a given amount of pollution as cheaply as possible, make the cuts where they are cheapest first, until the cost of the last tonne cut is the same everywhere. A single carbon price, or a market in tradable permits, does exactly that: each firm abates until its marginal abatement cost equals the price.',
          syntax: [
            { sym: String.raw`\min_{a_A + a_B = 40}`, say: 'Read "minimise, subject to the two cuts adding up to 40".' },
            { sym: String.raw`MAC`, say: 'Marginal abatement cost: the cost of cutting one more tonne.' },
          ],
          where: [
            { sym: 'a_A, a_B', def: 'Tonnes of pollution cut by firm A and firm B' },
            { sym: 'C_A, C_B', def: 'Each firm’s total abatement cost' },
          ],
          worked: {
            title: 'Two firms must cut 40 tonnes in total',
            steps: [
              String.raw`Firm A’s marginal abatement cost is \(2a_A\); firm B’s is \(6a_B\) (B’s cuts are dearer). Total costs are \(a_A^2\) and \(3a_B^2\).`,
              String.raw`Uniform rule (20 each): cost \(20^2 + 3 \times 20^2 = 400 + 1200 = 1600\).`,
              String.raw`Efficient: \(2a_A = 6a_B\) and \(a_A + a_B = 40\), so \(a_A = 30\), \(a_B = 10\).`,
              String.raw`Cost: \(30^2 + 3 \times 10^2 = 900 + 300 = 1200\). Marginal cost in both firms: 60.`,
              String.raw`A tax of $60 a tonne, or 40 tonnes’ worth of tradable permits, produces this split automatically: B buys permits from A.`,
            ],
            why: ['different abatement technologies', 'equal cuts for both', 'equalise marginal costs', 'a quarter cheaper', 'the price does the coordinating'],
            answer: 'Letting the cheap abater do more cuts the bill from $1,600 to $1,200, a 25% saving for the same environmental result. Regulators do not need to know each firm’s costs; the price reveals them.',
          },
        },
        {
          t: 'table',
          head: ['', 'Carbon tax', 'Cap and trade'],
          rows: [
            ['Fixes', 'The price of emitting', 'The quantity emitted'],
            ['Uncertain', 'How much emissions fall', 'What the permit price will be'],
            ['Better when', 'Damage per tonne is roughly constant (climate: each tonne adds a little to a huge stock)', 'Damage jumps past a threshold (a local pollutant near a dangerous level)'],
            ['Revenue', 'Raised automatically', 'Only if permits are auctioned, not given away'],
            ['Examples', 'Singapore (from 2019), Sweden, Canada', 'EU Emissions Trading System (from 2005), California, China’s national scheme'],
          ],
          caption: 'Martin Weitzman (1974) showed that when costs are uncertain, a price instrument is better if marginal damage is flat and a quantity instrument is better if it is steep. Many economists favour carbon taxes on that ground.',
        },
        {
          t: 'metric',
          name: 'the social cost of carbon',
          shows: 'The present value of all future damage caused by emitting one more tonne of CO₂ today: lower crop yields, health effects, flooding, heat. It is the ideal Pigouvian carbon tax.',
          eli5: 'If burning a tank of petrol does $15 of harm to people spread over the next century, the fair charge for that tank is $15 on top of its price.',
          higher: 'Higher estimates come from lower discount rates (valuing future generations more), greater climate sensitivity, and counting more kinds of damage.',
          lower: 'Lower estimates come from higher discount rates and optimistic assumptions about adaptation.',
          typical: 'The US Environmental Protection Agency’s 2023 central estimate was about US$190 per tonne (in 2020 dollars, at a 2% discount rate). Most real carbon prices are far below this; Singapore’s is S$25 in 2024–25, rising to S$45 in 2026–27. See [Singapore’s carbon tax](@economics/market-failure/singapore-cars-roads-carbon).',
        },
      ],
    },
  ],
  sources: [
    'Pigou, A. C. (1920). *The Economics of Welfare*. Macmillan.',
    'Coase, R. H. (1960). The problem of social cost. *Journal of Law and Economics*, 3, 1–44.',
    'Weitzman, M. L. (1974). Prices vs. quantities. *Review of Economic Studies*, 41(4), 477–491.',
    'US Environmental Protection Agency (2023). *Report on the Social Cost of Greenhouse Gases*.',
    'Fine, P., Eames, K., and Heymann, D. L. (2011). "Herd immunity": A rough guide. *Clinical Infectious Diseases*, 52(7), 911–916.',
  ],
  related: ['economics/market-failure/public-goods-and-commons', 'economics/market-failure/singapore-cars-roads-carbon', 'economics/welfare/taxes-and-incidence'],
}

export default guide
