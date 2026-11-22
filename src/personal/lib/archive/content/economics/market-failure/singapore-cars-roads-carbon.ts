import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Few countries use textbook economics as directly as Singapore. Space for roads is scarcer than almost anywhere, so since 1990 the number of cars has been capped and the right to own one auctioned. Since 1975 drivers have paid to enter the busiest roads at the busiest times, years before London or Stockholm tried it. Since 2019 large emitters have paid a tax on every tonne of greenhouse gas. This guide treats each as a worked case: the quota auction (a quantity instrument), road pricing (a Pigouvian price on congestion) and the carbon tax (a Pigouvian price on climate damage), with the diagrams, the arithmetic and the trade-offs.',
  nutshell: [
    'The **COE** fixes the number of vehicles (a **quantity** instrument) and lets an auction set the price; supply of permits is vertical, so demand alone moves the premium.',
    '**Electronic Road Pricing (ERP)** charges each driver roughly the delay they impose on others: a **Pigouvian toll** on congestion, tuned to keep traffic moving at target speeds.',
    'The **carbon tax** puts a price on each tonne of emissions from large facilities: **S$25 a tonne in 2024–25**, rising to **S$45 in 2026–27** and **S$50–80 by 2030**.',
    'Prices fix the cost and let quantity adjust; quotas fix the quantity and let the price adjust. Singapore uses **both**: a quota on car ownership and prices on car use.',
    'All three raise revenue that can **cushion households** without blunting the incentive.',
  ],
  sections: [
    {
      id: 'coe',
      title: 'The Certificate of Entitlement: auctioning the right to own a car',
      lead: 'A vertical supply curve, by design.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'What it is', tag: 'since 1990', body: 'Under the Vehicle Quota System, anyone registering a new vehicle needs a Certificate of Entitlement (COE), valid for 10 years. The Land Transport Authority (LTA) sets the number of COEs each quota period from the number of vehicles deregistered plus an allowed growth rate, which has been 0% for cars and motorcycles since February 2018.' },
            { title: 'Categories', tag: 'separate auctions', body: 'Category A: cars up to 1,600 cc and 97 kW (electric cars up to 110 kW). B: larger, more powerful cars. C: goods vehicles and buses. D: motorcycles. E: open, usable for any vehicle except motorcycles, so its price tends to track the dearest category.' },
            { title: 'How the auction works', tag: 'uniform price', body: 'Bidding opens twice a month online. Bidders may revise upwards while bidding is open. When it closes, the highest bids up to the quota win, and every winner pays the same price: the lowest successful bid, called the quota premium.' },
            { title: 'What it costs', tag: 'volatile', body: 'Premiums swing with demand and the quota. They fell below S$10,000 in the late 1990s and during periods of large quotas, and soared in 2023, when Category B passed S$150,000 in October. The COE is often worth more than the car.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{premium } P^* \text{ solves } D(P^*) = \bar{Q}, \qquad \text{revenue} = P^*\bar{Q}`,
          plain: 'The number of certificates is fixed at the quota, so the supply curve is a vertical line. The premium is whatever price makes the number of people willing to pay it equal to the quota. A rise in demand (higher incomes, more households) shows up entirely as a higher price; it cannot raise the number of cars.',
          syntax: [
            { sym: String.raw`\bar{Q}`, say: 'Read "Q bar": the fixed quota of certificates.' },
            { sym: String.raw`D(P^*)`, say: 'The number of bidders willing to pay at least P*.' },
          ],
          where: [{ sym: 'P*', def: 'The quota premium (lowest successful bid)' }],
          worked: {
            title: 'An illustrative round',
            steps: [
              String.raw`Suppose demand for Category A certificates in one round is \(P = 180 - 0.02Q\) (P in thousands of dollars).`,
              String.raw`Quota \(\bar{Q} = 4000\): premium \(P^* = 180 - 0.02 \times 4000 = 100\), i.e. S$100,000.`,
              String.raw`Revenue: \(4000 \times 100{,}000 = \$400\) million for the round.`,
              String.raw`Quota cut by 10% to 3,600: \(P^* = 180 - 72 = 108\), so the premium rises 8% to S$108,000 and revenue becomes $388.8 million.`,
              String.raw`Demand rises by 400 cars at every price (\(P = 188 - 0.02Q\)) with the quota unchanged: \(P^* = 108\) again.`,
            ],
            why: ['an assumed demand curve, for illustration', 'read the premium at the quota', 'premium times certificates', 'fewer certificates, higher price', 'with vertical supply, demand moves only the price'],
            answer: 'Small changes in the quota or in demand move the premium sharply, because nothing on the supply side can respond. That is why COE prices are so volatile.',
          },
        },
        {
          t: 'plot',
          title: 'The COE market: a fixed quota meets demand',
          x: [0, 8000],
          y: [0, 190],
          xLabel: 'certificates per round',
          yLabel: 'premium (S$ thousands)',
          curves: [
            { f: (q: number) => 180 - 0.02 * q, label: 'demand' },
            { f: (q: number) => 188 - 0.02 * q, label: 'demand after a rise', dashed: true },
          ],
          vlines: [
            { x: 4000, label: 'quota 4,000' },
            { x: 3600, label: 'cut to 3,600' },
          ],
          points: [
            { x: 4000, y: 100, label: 'S$100k' },
            { x: 3600, y: 108, label: 'S$108k' },
          ],
          caption: 'Illustrative curves, not LTA data. Bidders to the left of the quota line win; everyone to the right, who values a car at less than the premium, does not get one.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Why auction?', body: 'If the quota were handed out by lottery or queue, certificates would go to people who value them little while others who value them highly go without (unless resale were allowed). The auction allocates them to the highest bidders and turns the scarcity value into public revenue instead of private windfalls.' },
            { title: 'Uniform-price bidding', body: 'Because every winner pays the lowest winning bid, a bidder wanting one certificate does best bidding close to their true value: bidding higher risks paying more than it is worth, bidding lower risks losing a certificate worth having. See [auctions](@economics/information/auctions).' },
            { title: 'Ownership versus use', body: 'A quota limits how many cars exist, not how much they are driven. Once you own a car with a costly COE, the extra cost of each trip is low, which is why ownership controls are paired with road pricing.' },
            { title: 'Fairness debates', body: 'High premiums make car ownership a luxury, which critics call regressive. Supporters reply that most households rely on public transport, which the policy keeps uncongested, and that the revenue funds public services.' },
          ],
        },
      ],
    },
    {
      id: 'erp',
      title: 'Electronic Road Pricing: a Pigouvian toll on congestion',
      lead: 'Charging for the delay you cause.',
      blocks: [
        { t: 'p', text: 'Singapore introduced the **Area Licensing Scheme** in 1975, the world’s first urban congestion charge: drivers bought a paper licence to enter the central area in the morning peak. It was replaced in 1998 by **Electronic Road Pricing**, with gantries that deduct a charge each time a vehicle passes, varying by location and time of day. A satellite-based **ERP 2.0**, using new on-board units, has been rolled out since 2023 and can in principle charge by distance.' },
        {
          t: 'math',
          tex: String.raw`\text{private cost per trip } c(N) = 5 + 0.005N, \qquad \text{social cost of the marginal trip } \frac{d\,[N c(N)]}{dN} = 5 + 0.01N`,
          plain: 'Each driver counts their own travel time. But each extra car also slows every other car a little. Total travel cost is N × c(N); the marginal social cost of one more car is its own cost plus the extra delay it imposes on all N others. The gap between the two is the congestion externality, and the ideal toll is that gap at the optimal traffic level.',
          syntax: [
            { sym: String.raw`N`, say: 'Number of cars using the road in the hour.' },
            { sym: String.raw`\frac{d\,[N c(N)]}{dN}`, say: 'The derivative of total cost: c(N) + N c′(N), the driver’s own cost plus N times the extra delay per car.' },
          ],
          where: [
            { sym: 'c(N)', def: 'Cost per trip in time and fuel, rising with traffic' },
            { sym: '0.005N', def: 'The congestion part: each extra car adds 0.5 cents of delay to every trip' },
          ],
          worked: {
            title: 'An illustrative road at peak',
            steps: [
              String.raw`Drivers’ value of a trip (demand): \(30 - 0.005N\) dollars.`,
              String.raw`Without a charge, drivers enter while value exceeds their private cost: \(30 - 0.005N = 5 + 0.005N\), so \(N = 2500\), and each trip costs $17.50.`,
              String.raw`Optimum: \(30 - 0.005N = 5 + 0.01N\), so \(N = 25/0.015 \approx 1667\).`,
              String.raw`Ideal toll: the external cost at the optimum, \(0.005 \times 1667 \approx \$8.33\).`,
              String.raw`With the toll, private cost per trip is \(5 + 0.005 \times 1667 \approx 13.33\), plus the toll, 21.67, which equals the value of the marginal trip. Remaining drivers save over $4 of time each.`,
              String.raw`Deadweight loss without the toll: \(\tfrac12 \times 833 \times (5 + 0.01 \times 2500 - 17.5) = \tfrac12 \times 833 \times 12.5 \approx \$5208\) per peak hour.`,
            ],
            why: ['willingness to pay for a peak trip', 'unpriced roads fill until the marginal trip is worth just its private cost', 'marginal benefit equals marginal social cost', 'the Pigouvian rule', 'check: the toll is a transfer, the time saved is a real gain', 'the triangle between demand and marginal social cost'],
            answer: 'Pricing removes a third of the peak trips: those worth less than the delay they cause. The rest travel faster. The drivers priced off switch time, route or mode.',
          },
        },
        {
          t: 'plot',
          title: 'Congestion: private cost, social cost and the toll',
          x: [0, 4000],
          y: [0, 32],
          xLabel: 'cars per peak hour',
          yLabel: '$ per trip',
          curves: [
            { f: (n: number) => 30 - 0.005 * n, label: 'value of a trip (demand)' },
            { f: (n: number) => 5 + 0.005 * n, label: 'private cost per trip' },
            { f: (n: number) => 5 + 0.01 * n, label: 'marginal social cost', dashed: true },
          ],
          areas: [{ pts: [[1667, 21.67], [2500, 30], [2500, 17.5]], label: 'DWL', color: '#d9534f', at: [2230, 23] }],
          points: [
            { x: 2500, y: 17.5, label: 'unpriced: 2,500 cars' },
            { x: 1667, y: 21.67, label: 'optimum: 1,667 cars' },
          ],
          segments: [{ from: [1667, 13.33], to: [1667, 21.67], label: 'toll $8.33', color: '#2f9e6e' }],
          caption: 'Illustrative numbers. The toll closes the gap between what a trip costs the driver and what it costs everyone.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Measure speeds', body: 'LTA monitors average speeds on priced roads in each half-hour slot.' },
            { title: 'Compare with target bands', body: 'The targets have been about 45–65 km/h on expressways and 20–30 km/h on arterial roads.' },
            { title: 'Adjust the charge', body: 'Speeds below the band mean the road is congested, so the charge rises in that slot; speeds above it mean the charge falls or is removed. Changes are made in small steps, reviewed regularly.' },
            { title: 'Repeat', body: 'The charge homes in on the level that keeps traffic flowing: a practical way to approximate the Pigouvian toll without knowing anyone’s value of time.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The speed–flow curve', text: 'A lane of road carries the most cars per hour at moderate speeds, roughly 2,000 cars an hour around 60–80 km/h on an expressway. Push more cars in and speeds fall so far that the road carries fewer: congestion actually reduces the road’s capacity. Keeping speeds in the target band keeps roads near their maximum throughput, so pricing can increase the number of people moved, not just reduce it.' },
      ],
    },
    {
      id: 'carbon',
      title: 'The carbon tax',
      lead: 'Pricing the biggest externality.',
      blocks: [
        {
          t: 'table',
          head: ['Period', 'Tax per tonne of CO₂-equivalent', 'Notes'],
          rows: [
            ['2019–2023', 'S$5', 'Applied to facilities emitting at least 25,000 tonnes a year, around 50 facilities covering about 80% of national emissions'],
            ['2024–2025', 'S$25', 'Firms may use eligible international carbon credits to offset up to 5% of taxable emissions'],
            ['2026–2027', 'S$45', ''],
            ['By 2030', 'S$50–80', 'Planned range, towards net zero by 2050'],
          ],
          caption: 'Source: National Climate Change Secretariat and Ministry of Finance. Emissions-intensive, trade-exposed sectors receive transitional allowances on part of their emissions to limit "carbon leakage" (production moving abroad), tied to decarbonisation plans.',
        },
        {
          t: 'math',
          tex: String.raw`\text{abate tonne } j \iff MAC_j < \tau`,
          plain: 'A firm facing a carbon tax τ cuts a tonne of emissions whenever cutting it costs less than paying the tax on it. As the tax rises, more and more abatement options become worth taking. The firm does not need to be told how; it searches for the cheapest cuts itself.',
          syntax: [
            { sym: String.raw`\tau`, say: 'Read "tau": the tax per tonne.' },
            { sym: String.raw`MAC_j`, say: 'The cost of abating tonne j.' },
            { sym: String.raw`\iff`, say: 'Read "if and only if".' },
          ],
          worked: {
            title: 'A refinery deciding on an upgrade',
            steps: [
              String.raw`The refinery emits 1,000,000 tonnes a year. A heat-recovery upgrade would cut 200,000 tonnes at a cost of S$30 a tonne (S$6 million a year).`,
              String.raw`At S$25 a tonne: tax without the upgrade S$25 million. With it: \(800{,}000 \times 25 + 6\text{m} = 26\) million. Not worth it.`,
              String.raw`At S$45 a tonne: without, S$45 million. With: \(800{,}000 \times 45 + 6\text{m} = 42\) million. It saves S$3 million a year.`,
              String.raw`Saving per tonne: \(45 - 30 = 15\); \(15 \times 200{,}000 = 3\) million.`,
            ],
            why: ['the abatement option', 'abating costs more than the tax it avoids', 'now it costs less', 'the gain is the tax avoided minus the abatement cost'],
            answer: 'Raising the tax from S$25 to S$45 flips the decision and cuts 200,000 tonnes a year. Announcing the path years ahead lets firms plan long-lived investments around the higher future price.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Why a tax rather than a cap?', body: 'For a small, open economy with a few large emitters, a predictable price is simpler to run than a domestic permit market, and it gives firms a clear signal for investment. See [prices versus quantities](@economics/market-failure/externalities).' },
            { title: 'Carbon leakage', body: 'If a refinery simply moves to a country without a carbon price, global emissions do not fall. Transitional allowances for trade-exposed industries, and border adjustments elsewhere (the EU’s Carbon Border Adjustment Mechanism), are attempts to stop this.' },
            { title: 'Using the revenue', body: 'The government has said carbon tax revenue will support decarbonisation and help households and businesses with the transition, for example through utility rebates, so the price signal stays while the burden on households is softened.' },
            { title: 'Incidence', body: 'Firms pass much of the tax to customers through electricity and fuel prices. Because the poor spend more of their income on energy, the household offsets matter. See [tax incidence](@economics/welfare/taxes-and-incidence).' },
          ],
        },
      ],
    },
    {
      id: 'compare',
      title: 'Three instruments compared',
      lead: 'Price, quantity, and what each fixes.',
      blocks: [
        {
          t: 'table',
          head: ['', 'COE', 'ERP', 'Carbon tax'],
          rows: [
            ['Problem', 'Too many vehicles for the land available', 'Congestion at particular places and times', 'Greenhouse gas emissions'],
            ['Instrument type', 'Quantity (quota), price discovered by auction', 'Price (a toll), adjusted to hit a target speed', 'Price (a tax per tonne)'],
            ['What is certain', 'The number of vehicles', 'Traffic speeds, roughly, after adjustment', 'The cost of emitting'],
            ['What varies', 'The premium, sometimes sharply', 'The charge, slot by slot', 'The amount of emissions cut'],
            ['Targets', 'Ownership', 'Use, at the margin that matters', 'Emissions from large facilities'],
            ['Revenue', 'Large and volatile', 'Modest; the aim is behaviour', 'Growing as the rate rises'],
          ],
        },
        {
          t: 'diagram',
          title: 'Choosing an instrument',
          nodes: [
            { id: 'q', label: 'Is there a level of harm you must not exceed?', shape: 'diamond', col: 0, row: 1, tone: 'mustard' },
            { id: 'quota', label: 'Quantity instrument', sub: 'quota, cap and trade, COE', col: 2, row: 0, tone: 'teal' },
            { id: 'cost', label: 'Is the damage per unit roughly known and steady?', shape: 'diamond', col: 2, row: 2, tone: 'mustard' },
            { id: 'tax', label: 'Price instrument', sub: 'tax, toll, carbon price', col: 4, row: 1, tone: 'mint' },
            { id: 'adj', label: 'Price that adjusts to a target', sub: 'ERP speed bands', col: 4, row: 3, tone: 'lavender' },
          ],
          edges: [
            { from: 'q', to: 'quota', label: 'yes' },
            { from: 'q', to: 'cost', label: 'no' },
            { from: 'cost', to: 'tax', label: 'yes' },
            { from: 'cost', to: 'adj', label: 'no, but outcomes can be measured' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Numbers change', text: 'COE quotas and premiums, ERP rates and carbon tax settings are revised regularly. Check the LTA (lta.gov.sg), OneMotoring and the National Climate Change Secretariat (nccs.gov.sg) for current figures.' },
      ],
    },
  ],
  sources: [
    'Land Transport Authority. Vehicle Quota System and Certificate of Entitlement; Electronic Road Pricing. lta.gov.sg and onemotoring.lta.gov.sg.',
    'National Climate Change Secretariat. Carbon tax. nccs.gov.sg.',
    'Phang, S.-Y., and Toh, R. S. (2004). Road congestion pricing in Singapore: 1975 to 2003. *Transportation Journal*, 43(2), 16–25.',
    'Small, K. A., and Verhoef, E. T. (2007). *The Economics of Urban Transportation*. Routledge.',
    'Vickrey, W. S. (1963). Pricing in urban and suburban transport. *American Economic Review*, 53(2), 452–465.',
  ],
  related: ['economics/market-failure/externalities', 'economics/information/auctions', 'economics/welfare/taxes-and-incidence'],
}

export default guide
