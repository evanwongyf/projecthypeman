import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When prices seem too high (rents, food in a crisis, petrol) or too low (farm incomes, wages), governments are tempted to fix them by law. A ceiling caps how much can be charged; a floor sets a minimum. Both are popular, simple to announce and, almost always, more costly than they look: a ceiling creates shortages, queues and black markets, a floor creates unsold surpluses. This guide works both through the surplus diagram, adds the costs that the basic diagram leaves out (queuing, random allocation, falling quality), reviews the evidence on rent control, and sets out alternatives that help the same people at lower cost.',
  nutshell: [
    'A **ceiling** only binds **below** the market price; a **floor** only binds **above** it.',
    'Either way, the quantity traded falls to the **short side** of the market, creating a **deadweight loss**.',
    'A ceiling makes a **shortage**: someone must decide who gets the scarce units, by **queue, lottery, connections or black market**, which wastes more surplus.',
    'Supply is **more elastic in the long run**, so rent control’s shortage **grows** over time as landlords convert, sell or stop maintaining.',
    'To help buyers or sellers, **transfers** (vouchers, grants, cash) usually beat controlling the price.',
  ],
  sections: [
    {
      id: 'ceiling',
      title: 'Price ceilings',
      lead: 'Capping the price below the market.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P_{max} < P^*: \qquad Q_{traded} = Q_s(P_{max}) < Q^* < Q_d(P_{max}), \qquad \text{shortage} = Q_d - Q_s`,
          plain: 'At the capped price, buyers want more than before and sellers offer less. Only as many units are traded as sellers are willing to supply, so the market moves to the short side, and the gap is a shortage.',
          syntax: [
            { sym: String.raw`P_{max}`, say: 'The legal maximum price.' },
            { sym: String.raw`Q_s(P_{max})`, say: 'The quantity supplied at the capped price.' },
          ],
          where: [
            { sym: 'P*, Q*', def: 'The free-market price and quantity' },
            { sym: 'Q_d', def: 'Quantity demanded at the capped price' },
          ],
          worked: {
            title: 'A ceiling of $40',
            steps: [
              String.raw`Demand \(P = 100 - Q\), supply \(P = 10 + Q\): the free market clears at \(Q^* = 45\), \(P^* = 55\).`,
              String.raw`At $40, sellers offer \(Q_s = 40 - 10 = 30\); buyers want \(Q_d = 100 - 40 = 60\). Shortage: 30.`,
              String.raw`Producer surplus: \(\tfrac12 \times 30 \times (40 - 10) = 450\), down from 1,012.5.`,
              String.raw`Consumer surplus if the 30 units go to the buyers who value them most: \(30 \times (100 - 40) - \tfrac12 \times 30 \times 30 = 1350\), up from 1,012.5.`,
              String.raw`Total: \(1800\) against \(2025\). Deadweight loss: \(225 = \tfrac12 \times (45 - 30) \times (70 - 40)\).`,
            ],
            why: ['the benchmark', 'quantities on each side at the cap', 'the triangle above supply, below the cap', 'the area under demand above the cap, for the first 30 units', 'the triangle of lost trades'],
            answer: 'Buyers lucky enough to get a unit gain $337.50 in total, sellers lose $562.50, and $225 of trades disappear. That is the best case.',
          },
        },
        {
          t: 'plot',
          title: 'A binding price ceiling',
          x: [0, 90],
          y: [0, 100],
          xLabel: 'quantity',
          yLabel: 'price',
          curves: [
            { f: (q: number) => 100 - q, label: 'demand' },
            { f: (q: number) => 10 + q, label: 'supply' },
          ],
          hlines: [{ y: 40, label: 'ceiling $40' }],
          areas: [
            { pts: [[0, 100], [0, 70], [30, 70]], label: 'CS', color: '#3b6fd8', at: [9, 80] },
            { pts: [[0, 70], [30, 70], [30, 40], [0, 40]], label: 'transferred to buyers', color: '#7b4fc9' },
            { pts: [[0, 40], [30, 40], [0, 10]], label: 'PS', color: '#e07b2a', at: [9, 30] },
            { pts: [[30, 70], [30, 40], [45, 55]], label: 'DWL', color: '#d9534f', at: [36, 55] },
          ],
          segments: [{ from: [30, 40], to: [60, 40], label: 'shortage of 30', color: '#7b4fc9' }],
          points: [{ x: 45, y: 55, label: 'free market' }],
          caption: 'Buyers who get a unit gain the purple rectangle from sellers. The red triangle is lost. The 30 units of unmet demand at $40 are the shortage.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Queuing', tag: 'time as the price', body: 'When money cannot ration, time does. Buyers queue until the cost of their time eats up the surplus the ceiling gave them. Soviet shoppers reportedly spent hours a day in lines; petrol queues followed US price controls in 1973–74 and 1979.' },
            { title: 'Random allocation', tag: 'the wrong buyers', body: 'A lottery or first-come-first-served gives some units to people who value them barely above $40 while others who value them at $90 go without. If the 30 units go to random buyers among the 60 who want one, their average value is $70 rather than $85, wasting another $450.' },
            { title: 'Black markets', tag: 'the price leaks back', body: 'With only 30 units available, the 30th buyer would pay $70. Resellers buy at $40 and sell at up to $70, so the ceiling’s gain to buyers leaks to whoever can get the goods.' },
            { title: 'Falling quality', tag: 'the hidden price rise', body: 'If the price cannot rise, sellers cut the quality instead: landlords defer repairs, shops shrink portions, hidden fees appear. The controlled good becomes a different, worse good.' },
          ],
        },
        { t: 'econ-viz', viz: 'price-control' },
      ],
    },
    {
      id: 'rent',
      title: 'Rent control: the short run and the long run',
      lead: 'The most studied ceiling of all.',
      blocks: [
        { t: 'p', text: 'In the short run the stock of flats is fixed, so supply is steep and a rent cap mostly transfers money from landlords to sitting tenants with a modest shortage. Over years, landlords respond: they convert flats to owner-occupied homes or offices, stop building rental housing, or let buildings decay. Long-run supply is much more elastic, so the same cap produces a far larger shortage.' },
        {
          t: 'plot',
          title: 'The same rent cap, short run and long run',
          x: [0, 100],
          y: [0, 3000],
          xLabel: 'rental flats (thousands)',
          yLabel: 'monthly rent ($)',
          curves: [
            { f: (q: number) => 4000 - 40 * q, label: 'demand' },
            { f: (q: number) => -6000 + 160 * q, label: 'short-run supply (steep)', from: 37.5 },
            { f: (q: number) => -1000 + 60 * q, label: 'long-run supply (flatter)', from: 16.7 },
          ],
          hlines: [{ y: 1400, label: 'rent cap $1,400' }],
          points: [{ x: 50, y: 2000, label: 'free market' }],
          segments: [
            { from: [46.25, 1400], to: [65, 1400], label: 'short-run shortage', color: '#e07b2a' },
            { from: [40, 1300], to: [65, 1300], label: 'long-run shortage', color: '#d9534f' },
          ],
          caption: 'Both supply curves pass through the free-market point (50 thousand flats at $2,000). At a $1,400 cap demand is 65 thousand. In the short run 46,250 flats stay on the market (a shortage of about 19,000); in the long run only 40,000 do (a shortage of 25,000).',
        },
        {
          t: 'math',
          tex: String.raw`\text{shortage} = Q_d(P_{max}) - Q_s(P_{max}) \;=\; \big(|E_d| + E_s\big)\,\frac{P^* - P_{max}}{P^*}\,Q^* \quad\text{(approximately)}`,
          plain: 'The shortage is roughly the percentage by which the cap undercuts the market price, multiplied by the sum of the two elasticities and the market size. As supply becomes more elastic over time, the shortage grows even though the cap has not changed.',
          syntax: [{ sym: String.raw`\frac{P^* - P_{max}}{P^*}`, say: 'How far below the market price the cap is, as a fraction.' }],
          worked: {
            steps: [
              String.raw`The cap is 30% below the market rent: \((2000 - 1400)/2000 = 0.3\). Market size 50,000 flats.`,
              String.raw`Demand elasticity at the market point: \(|E_d| = \tfrac{1}{40} \times \tfrac{2000}{50} = 1.0\).`,
              String.raw`Short-run supply: \(E_s = \tfrac{1}{160} \times 40 = 0.25\). Shortage \(\approx 1.25 \times 0.3 \times 50{,}000 = 18{,}750\).`,
              String.raw`Long-run supply: \(E_s = \tfrac{1}{60} \times 40 \approx 0.67\). Shortage \(\approx 1.67 \times 0.3 \times 50{,}000 = 25{,}000\).`,
            ],
            why: ['the size of the cut', 'slope of Q in P times P/Q', 'the steep short-run curve', 'the flatter long-run curve'],
            answer: 'The shortage rises by a third as landlords adjust, matching the diagram. For a linear model the approximation is exact.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'San Francisco, 1994', tag: 'the best natural experiment', body: 'A 1994 ballot measure extended rent control to small multi-family buildings built before 1980, but not to those built after. Diamond, McQuade and Qian (2019) compared them: protected tenants were more likely to stay, but landlords of newly controlled buildings cut the rental housing they supplied by 15%, through conversions and redevelopment, raising rents in the rest of the city by about 5%.' },
            { title: 'Singapore’s Control of Rent Act', tag: '1947–2001', body: 'Post-war rent control froze the rents of pre-war buildings for decades. With rents far below market and no incentive to maintain, many shophouses decayed. The controls were phased out from 1988 and abolished by the Control of Rent (Abolition) Act of 2001, after which much of the old stock was restored.' },
            { title: 'Who benefits', tag: 'insiders and outsiders', body: 'Sitting tenants gain, especially long-stayers; newcomers, the young and people moving for work face a smaller, harder market. Control also discourages moving, so people stay in flats that no longer suit them.' },
            { title: 'Rent stabilisation', tag: 'softer versions', body: 'Many cities now cap annual rent increases (for example to inflation) rather than levels, and exempt new buildings. These soften but do not remove the supply response.' },
          ],
        },
        { t: 'quote', text: 'In many cases rent control appears to be the most efficient technique presently known to destroy a city, except for bombing.', by: 'Assar Lindbeck, The Political Economy of the New Left (1972)' },
      ],
    },
    {
      id: 'floor',
      title: 'Price floors',
      lead: 'Setting a minimum price.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P_{min} > P^*: \qquad Q_{traded} = Q_d(P_{min}) < Q^*, \qquad \text{surplus} = Q_s(P_{min}) - Q_d(P_{min})`,
          plain: 'Above the market price, sellers want to sell more than buyers will buy. Trade falls to what buyers take, and the rest goes unsold, unless the government buys it.',
          syntax: [{ sym: String.raw`P_{min}`, say: 'The legal minimum price.' }],
          worked: {
            title: 'A floor of $70, and a government that buys the surplus',
            steps: [
              String.raw`At $70, buyers take \(Q_d = 30\); sellers offer \(Q_s = 60\). Surplus: 30 units.`,
              String.raw`Without government purchases, deadweight loss is the same triangle as the $40 ceiling: \(\tfrac12 \times 15 \times 30 = 225\).`,
              String.raw`If the government buys the 30 unsold units at $70, it spends $2,100.`,
              String.raw`Producers now sell 60 units: \(PS = \tfrac12 \times 60 \times (70 - 10) = 1800\), up from 1,012.5.`,
              String.raw`But making units 46 to 60 cost between $56 and $70 each, and the government’s stock may be worth little. If it is destroyed, society loses most of the $2,100.`,
            ],
            why: ['quantities on each side', 'symmetric to the ceiling here', 'the cost of supporting the price', 'farmers gain', 'the full cost of the scheme'],
            answer: 'A supported floor transfers about $790 to producers at a cost of $2,100 to taxpayers, plus whatever the stockpile is worth. The European Union’s farm price supports in the 1980s produced the famous "butter mountains" and "wine lakes".',
          },
        },
        {
          t: 'plot',
          title: 'A binding price floor',
          x: [0, 90],
          y: [0, 100],
          xLabel: 'quantity',
          yLabel: 'price',
          curves: [
            { f: (q: number) => 100 - q, label: 'demand' },
            { f: (q: number) => 10 + q, label: 'supply' },
          ],
          hlines: [{ y: 70, label: 'floor $70' }],
          areas: [{ pts: [[30, 70], [30, 40], [45, 55]], label: 'DWL', color: '#d9534f', at: [36, 55] }],
          segments: [{ from: [30, 70], to: [60, 70], label: 'unsold surplus of 30', color: '#7b4fc9' }],
          points: [{ x: 45, y: 55, label: 'free market' }],
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Farm supports', body: 'Guaranteed minimum prices for crops, financed by public purchases or export subsidies. Expensive and largely replaced by direct income payments in the EU after the 1990s.' },
            { title: 'Minimum unit pricing', body: 'Scotland set a minimum price per unit of alcohol in 2018 (50p, raised to 65p in 2024). Here the floor targets an externality and health harm, and studies credit it with fewer alcohol-related deaths.' },
            { title: 'The minimum wage', body: 'A floor on the price of labour. Its effects depend on how competitive the labour market is, and the evidence is subtler than this diagram: see [minimum wages](@economics/labour/minimum-wages).' },
          ],
        },
      ],
    },
    {
      id: 'better',
      title: 'Helping people without controlling prices',
      lead: 'The same goal, cheaper.',
      blocks: [
        {
          t: 'table',
          head: ['Goal', 'Price control', 'Usually better'],
          rows: [
            ['Affordable housing', 'Rent control', 'Housing vouchers or grants to tenants; allowing more building; public housing'],
            ['Cheap food in a crisis', 'Price caps on staples', 'Cash or food vouchers to poor households, letting prices signal suppliers to bring more'],
            ['Higher farm incomes', 'Minimum crop prices', 'Direct income support that does not depend on how much is grown'],
            ['Protecting buyers from gouging after a disaster', 'Anti-gouging bans', 'Temporary transfers plus publicly organised supply; let prices draw in supply from elsewhere'],
          ],
          caption: 'Transfers give money (or a voucher) to the people you want to help and leave prices free to ration the good and call forth more supply. They cost taxpayers money openly, which is politically harder than a price control whose costs are hidden in shortages.',
        },
        { t: 'callout', tone: 'fact', title: 'Singapore’s approach to housing', text: 'Singapore does not cap rents or resale prices. Instead the Housing and Development Board builds most homes and sells new flats below market value, with grants tied to income and eligibility, while the resale market is free. Help goes through the price of new flats and grants to eligible buyers, rather than a legal cap on what owners may charge.' },
        {
          t: 'dodont',
          do: ['Check whether a control binds: a ceiling above the market price does nothing', 'Ask how the scarce units will be allocated and what that wastes', 'Expect bigger effects in the long run as supply adjusts', 'Compare with a direct transfer to the same people'],
          dont: ['Assume buyers gain from a ceiling: queuing and black markets can wipe out the gain', 'Forget that quality can fall when price cannot rise', 'Judge rent control only by its effect on sitting tenants'],
        },
      ],
    },
  ],
  sources: [
    'Diamond, R., McQuade, T., and Qian, F. (2019). The effects of rent control expansion on tenants, landlords, and inequality: Evidence from San Francisco. *American Economic Review*, 109(9), 3365–3394.',
    'Glaeser, E. L., and Luttmer, E. F. P. (2003). The misallocation of housing under rent control. *American Economic Review*, 93(4), 1027–1046.',
    'Lindbeck, A. (1972). *The Political Economy of the New Left*. Harper and Row.',
    'Mankiw, N. G. (2021). *Principles of Economics* (9th ed.), chapter 6. Cengage.',
  ],
  related: ['economics/welfare/surplus-and-efficiency', 'economics/welfare/taxes-and-incidence', 'economics/labour/minimum-wages'],
}

export default guide
