import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A tariff is a tax on imports, and it is the oldest tool of trade policy. Tariffs protect domestic producers from foreign competition, raise revenue and give governments a bargaining chip, but they also raise prices for consumers and firms that use imported inputs, and they invite retaliation. This guide measures every gain and loss of a tariff on the standard diagram, compares tariffs with quotas, explains the one case where a tariff can benefit the country imposing it, shows why tariff wars are a prisoner’s dilemma, reviews the 2018–19 US–China evidence on who actually paid, and sets out the case for and against protection, with Singapore, one of the world’s most open economies, as a counterpoint.',
  nutshell: [
    'In a small country a tariff raises the domestic price by the **full tariff**: producers gain, the government collects revenue, consumers lose more than both combined.',
    'The net loss is two **deadweight triangles**: inefficient domestic production and purchases that no longer happen.',
    'A **quota** has the same price effect, but the gain from the price gap goes to whoever holds the **import licences**.',
    'A **large** country can push world prices down and gain at foreigners’ expense (the **optimal tariff**), but retaliation turns this into a **prisoner’s dilemma**.',
    'Studies of the **2018–19 US tariffs** found they were passed almost **entirely to US buyers**, at a high cost per job protected.',
  ],
  sections: [
    {
      id: 'small',
      title: 'A tariff in a small open economy',
      lead: 'Four areas tell the whole story.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P_{dom} = P_w + t, \qquad \text{imports} = Q_d(P_w + t) - Q_s(P_w + t)`,
          plain: 'A small country takes the world price as given. With free trade, domestic buyers pay the world price and imports fill the gap between what they want and what local firms make. A tariff raises the domestic price to the world price plus the tariff: domestic production rises, consumption falls, and imports shrink from both ends.',
          syntax: [
            { sym: String.raw`P_w`, say: 'The world price.' },
            { sym: String.raw`t`, say: 'The tariff per unit.' },
          ],
          worked: {
            title: 'A $10 tariff when the world price is $30',
            steps: [
              String.raw`Domestic demand \(P = 100 - Q\), domestic supply \(P = 10 + Q\).`,
              String.raw`Free trade at $30: buyers want 70, local firms make 20, imports 50.`,
              String.raw`With the tariff, the price is $40: buyers want 60, firms make 30, imports 30.`,
              String.raw`Consumers lose \((40 - 30) \times \tfrac{70 + 60}{2} = 650\).`,
              String.raw`Producers gain (area a) \(10 \times \tfrac{20 + 30}{2} = 250\). Revenue (area c) \(10 \times 30 = 300\).`,
              String.raw`Net loss \(650 - 250 - 300 = 100\): triangle b \(= \tfrac12 \times 10 \times 10 = 50\) plus triangle d \(= 50\).`,
            ],
            why: ['the domestic market', 'imports fill the gap', 'the price rises by the full tariff', 'the trapezoid under demand between the two prices', 'transfers to producers and to the government', 'the two deadweight triangles'],
            answer: 'The tariff transfers $250 to producers and $300 to the government, and destroys $100: $50 on making 10 units at home that cost more than imports (b), and $50 on 10 units consumers no longer buy (d).',
          },
        },
        {
          t: 'plot',
          title: 'The welfare effects of a tariff',
          x: [0, 90],
          y: [0, 100],
          xLabel: 'quantity',
          yLabel: 'price',
          curves: [
            { f: (q: number) => 100 - q, label: 'domestic demand' },
            { f: (q: number) => 10 + q, label: 'domestic supply' },
          ],
          hlines: [
            { y: 30, label: 'world price $30' },
            { y: 40, label: 'with tariff $40' },
          ],
          areas: [
            { pts: [[0, 30], [20, 30], [30, 40], [0, 40]], label: 'a', color: '#e07b2a' },
            { pts: [[20, 30], [30, 30], [30, 40]], label: 'b', color: '#d9534f', at: [27, 33] },
            { pts: [[30, 30], [60, 30], [60, 40], [30, 40]], label: 'c (revenue)', color: '#2f9e6e' },
            { pts: [[60, 40], [60, 30], [70, 30]], label: 'd', color: '#d9534f', at: [63, 33] },
          ],
          segments: [
            { from: [20, 5], to: [70, 5], label: 'imports under free trade (50)', color: '#7b4fc9' },
            { from: [30, 15], to: [60, 15], label: 'imports with tariff (30)', color: '#7b4fc9' },
          ],
          caption: 'Consumers lose a + b + c + d. Producers gain a, the government gains c. Triangles b and d are lost to everyone.',
        },
        { t: 'econ-viz', viz: 'tariff' },
      ],
    },
    {
      id: 'quota',
      title: 'Quotas and voluntary export restraints',
      lead: 'Same price, different winner.',
      blocks: [
        { t: 'p', text: 'An import quota limits the quantity imported. Set at 30 units in the example above, it raises the domestic price to $40, exactly like the $10 tariff. The difference is area c: instead of tariff revenue for the government, it becomes **quota rent** for whoever holds the import licences, who buy at $30 abroad and sell at $40 at home. If licences go to foreign exporters, the country loses area c as well.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Voluntary export restraints', tag: 'Japan, 1981', body: 'Under US pressure, Japan agreed to limit car exports to the US. Prices of Japanese cars rose, and Japanese makers earned the quota rents. Estimates put the cost to US consumers in the billions of dollars a year, and the restraint pushed Japanese firms upmarket into luxury models.' },
            { title: 'Quotas lock in protection', tag: 'no price signal', body: 'With a tariff, a rise in domestic demand is met by more imports at the same price. With a quota it raises the domestic price instead, so protection grows automatically.' },
            { title: 'Tariff-rate quotas', tag: 'a hybrid', body: 'A low tariff on imports up to a quota and a high one above it, common in agriculture.' },
            { title: 'Non-tariff barriers', tag: 'hidden protection', body: 'Product standards, licensing rules, customs delays and local-content rules can protect as effectively as tariffs while being harder to measure and challenge.' },
          ],
        },
      ],
    },
    {
      id: 'large',
      title: 'Large countries, the optimal tariff and trade wars',
      lead: 'Winning at others’ expense, until they reply.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`t^{opt} = \frac{1}{\varepsilon^{*}}`,
          plain: 'A country big enough to affect world prices can use a tariff to push down the price foreign exporters receive. Part of the tariff is then paid by foreigners, which can more than offset the deadweight loss. The optimal tariff is the inverse of the elasticity of foreign export supply: the less foreign suppliers can redirect their goods elsewhere, the more of the tariff they absorb.',
          syntax: [{ sym: String.raw`\varepsilon^{*}`, say: 'The elasticity of the rest of the world’s export supply to this country.' }],
          worked: {
            steps: [
              String.raw`If foreign export supply has elasticity 4, \(t^{opt} = 1/4 = 25\%\).`,
              String.raw`If it has elasticity 20 (suppliers can easily sell elsewhere), \(t^{opt} = 5\%\).`,
              String.raw`For a small country, \(\varepsilon^* \to \infty\), so \(t^{opt} = 0\): free trade is best.`,
            ],
            why: ['a big buyer of inelastically supplied goods', 'elastic foreign supply', 'the small-country case'],
            answer: 'The optimal-tariff argument applies only to large buyers, and only if trading partners do not retaliate.',
          },
        },
        {
          t: 'table',
          head: ['', 'Country B: free trade', 'Country B: tariff'],
          rows: [
            ['Country A: free trade', '10, 10', '7, 12'],
            ['Country A: tariff', '12, 7', '8, 8'],
          ],
          caption: 'Illustrative national welfare (A, B). Each country gains by imposing a tariff whatever the other does, so both do, and both end worse off than under free trade: a prisoner’s dilemma. Trade agreements (GATT, then the WTO) are mechanisms for both sides to commit to cooperation.',
        },
        { t: 'game-lab', viz: 'payoff', preset: 'pd' },
        {
          t: 'steps',
          items: [
            { title: '1930: Smoot–Hawley', body: 'The US raised tariffs on over 20,000 goods. Trading partners retaliated. World trade fell by about two-thirds in value between 1929 and 1934, mostly because of the Depression itself, but the tariff war deepened it.' },
            { title: '1947: GATT', body: 'Twenty-three countries agreed to cut tariffs and to treat all members equally (most-favoured-nation treatment). Successive rounds cut average industrial tariffs in rich countries from over 20% to under 5%.' },
            { title: '1995: the WTO', body: 'The World Trade Organization added services, intellectual property and a binding dispute-settlement system.' },
            { title: '2018–19: US–China tariffs', body: 'The US imposed tariffs on steel, aluminium, washing machines and hundreds of billions of dollars of Chinese goods; China retaliated, especially against US farm exports.' },
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'Who paid for the 2018–19 tariffs?',
      lead: 'Measuring pass-through.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{pass-through} = \frac{\Delta \ln P^{\,\text{importer, incl. tariff}}}{\Delta \ln(1 + t)}`,
          plain: 'If a 25% tariff raises the price US importers pay (including the tariff) by 25%, pass-through is complete: foreign exporters did not cut their prices at all, and Americans paid the whole tariff. If exporters had cut their pre-tariff prices, pass-through would be less than 100%.',
          syntax: [{ sym: String.raw`\Delta \ln`, say: 'The change in the natural log: approximately the percentage change.' }],
          worked: {
            steps: [
              String.raw`Before: a Chinese good sells to a US importer for $100.`,
              String.raw`A 25% tariff. If the exporter keeps its price at $100, the importer pays $125: pass-through 100%.`,
              String.raw`If the exporter cuts to $90, the importer pays $112.50: pass-through about 50%, and China bears half the tariff.`,
            ],
            why: ['the starting price', 'complete pass-through', 'partial pass-through'],
            answer: 'Amiti, Redding and Weinstein (2019) and Fajgelbaum and co-authors (2020) found near-complete pass-through of the 2018 tariffs to US import prices: US buyers, not Chinese exporters, paid them.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Washing machines', tag: 'cost per job', body: 'Flaaen, Hortaçsu and Tintelnot (2020) found the 2018 tariffs raised the price of washers by about 12%, and of dryers (not tariffed, but bought with washers) by a similar amount. They estimated about 1,800 jobs were created, at a cost to consumers of roughly US$815,000 per job per year.' },
            { title: 'Steel and downstream firms', tag: 'inputs', body: 'Tariffs on steel protect steelmakers but raise costs for car makers, machinery producers and builders, which employ far more workers. Studies found net manufacturing employment did not rise.' },
            { title: 'Retaliation on farmers', tag: 'targeted', body: 'China’s retaliatory tariffs hit US soybeans and pork, and the US government paid farmers tens of billions of dollars in compensation.' },
            { title: 'Trade diversion', tag: 'where trade went', body: 'Imports shifted from China to Vietnam, Mexico and others, so the US trade deficit overall changed little.' },
          ],
        },
      ],
    },
    {
      id: 'arguments',
      title: 'The case for protection, assessed',
      lead: 'Some arguments are better than others.',
      blocks: [
        {
          t: 'table',
          head: ['Argument', 'The claim', 'Assessment'],
          rows: [
            ['Infant industry', 'New industries need temporary protection to reach scale and learn', 'Valid in principle; in practice protection is hard to remove and governments are poor at picking winners. Subsidising learning directly is usually better.'],
            ['National security', 'Depend on no rival for defence, food or chips', 'Valid for genuinely strategic goods, but easily stretched to cover almost anything.'],
            ['Strategic trade policy', 'Support a national champion in an industry with few firms and big profits (Airbus vs Boeing)', 'Can work in theory but invites retaliation and wastes money if the bet fails.'],
            ['Anti-dumping', 'Stop foreign firms selling below cost', 'Sometimes justified; often used as disguised protection.'],
            ['Jobs', 'Imports destroy jobs', 'They shift jobs between industries; overall employment is set by macroeconomic conditions. Protecting a job usually costs far more than the job pays.'],
            ['The trade deficit', 'Tariffs reduce the deficit', 'The deficit reflects saving and investment, not tariffs. See [the balance of payments](@economics/trade/balance-of-payments-and-trilemma).'],
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Singapore: almost no tariffs',
          text: 'Singapore levies customs duties only on intoxicating liquors (it also charges excise duties on tobacco, motor vehicles and petroleum, which apply to local and imported goods alike), so more than 99% of imports enter tariff-free. It has a large network of free trade agreements, including the CPTPP and RCEP. For a small economy whose trade is several times its GDP, openness is the comparative-advantage strategy.',
        },
      ],
    },
  ],
  sources: [
    'Krugman, P. R., Obstfeld, M., and Melitz, M. J. (2022). *International Economics: Theory and Policy* (12th ed.), chapters 9–12. Pearson.',
    'Amiti, M., Redding, S. J., and Weinstein, D. E. (2019). The impact of the 2018 tariffs on prices and welfare. *Journal of Economic Perspectives*, 33(4), 187–210.',
    'Fajgelbaum, P. D., Goldberg, P. K., Kennedy, P. J., and Khandelwal, A. K. (2020). The return to protectionism. *Quarterly Journal of Economics*, 135(1), 1–55.',
    'Flaaen, A., Hortaçsu, A., and Tintelnot, F. (2020). The production relocation and price effects of US trade policy: The case of washing machines. *American Economic Review*, 110(7), 2103–2127.',
    'Irwin, D. A. (2017). *Clashing over Commerce: A History of US Trade Policy*. University of Chicago Press.',
    'Singapore Customs. Duties and dutiable goods. customs.gov.sg.',
  ],
  related: ['economics/trade/comparative-advantage', 'economics/welfare/taxes-and-incidence', 'game-theory/classic-games/prisoners-dilemma'],
}

export default guide
