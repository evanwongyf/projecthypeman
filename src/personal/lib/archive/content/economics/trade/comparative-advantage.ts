import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Why should a country that is better at making everything still trade with one that is worse at everything? David Ricardo’s answer in 1817, the principle of comparative advantage, is one of the least intuitive and most important ideas in economics. What matters is not who is best at a task but who gives up least to do it. This guide works through Ricardo’s own example of England and Portugal, draws the production possibility frontiers, shows exactly where the gains come from and which terms of trade share them out, extends the idea to factor endowments (Heckscher–Ohlin) and the gravity of distance, traces Singapore’s changing comparative advantage, and is frank about who loses from trade and what can be done for them.',
  nutshell: [
    '**Absolute advantage**: producing more per hour. **Comparative advantage**: producing at a **lower opportunity cost**.',
    'If opportunity costs differ, **both** countries gain by specialising in their comparative advantage and trading.',
    'Trade happens at **terms of trade between the two opportunity costs**; where in that band decides how the gains are split.',
    '**Heckscher–Ohlin**: countries export goods that use their abundant factors intensively. **Stolper–Samuelson**: the scarce factor loses.',
    'Trade raises total income but creates **losers**, concentrated in particular places and jobs. The gains are large enough to compensate them, but compensation is not automatic.',
  ],
  sections: [
    {
      id: 'ricardo',
      title: 'Ricardo’s England and Portugal',
      lead: 'Portugal is better at both. Trade anyway.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Hours to make 1 unit of cloth', 'Hours to make 1 unit of wine', 'Labour available'],
          rows: [
            ['England', '100', '120', '220 hours'],
            ['Portugal', '90', '80', '170 hours'],
          ],
          caption: 'Ricardo’s numbers (1817). Portugal needs fewer hours for both goods: it has an absolute advantage in each. Labour is set so that, without trade, each country makes one unit of each good.',
        },
        {
          t: 'math',
          tex: String.raw`\text{opportunity cost of cloth} = \frac{\text{hours per cloth}}{\text{hours per wine}}: \qquad \text{England } \frac{100}{120} \approx 0.83 \text{ wine}, \qquad \text{Portugal } \frac{90}{80} = 1.125 \text{ wine}`,
          plain: 'To make one more unit of cloth, a country must move workers off wine. The wine it gives up is the hours for cloth divided by the hours for wine. England gives up less wine per cloth than Portugal does, so England has the comparative advantage in cloth, and Portugal, by the same logic, in wine.',
          syntax: [{ sym: String.raw`\frac{100}{120}`, say: '100 hours of labour moved from wine to cloth would have made 100/120 of a unit of wine.' }],
          worked: {
            title: 'Specialise and trade',
            steps: [
              String.raw`Without trade, world output is 2 cloth and 2 wine.`,
              String.raw`England puts all 220 hours into cloth: \(220/100 = 2.2\) cloth. Portugal puts all 170 into wine: \(170/80 = 2.125\) wine.`,
              String.raw`World output is now 2.2 cloth and 2.125 wine: more of both, from the same labour.`,
              String.raw`Trade 1 cloth for 1 wine. England has 1.2 cloth and 1 wine (gaining 0.2 cloth); Portugal has 1 cloth and 1.125 wine (gaining 0.125 wine).`,
            ],
            why: ['the benchmark', 'each makes only its comparative-advantage good', 'specialisation creates the gain', 'any price between 0.83 and 1.125 wine per cloth leaves both better off'],
            answer: 'Both countries end up with more than they could make alone, even though Portugal is more productive at everything. The gain comes from each producing where its opportunity cost is lowest.',
          },
        },
        {
          t: 'plot',
          title: 'Production possibility frontiers and England’s gain from trade',
          x: [0, 2.8],
          y: [0, 2.6],
          xLabel: 'cloth',
          yLabel: 'wine',
          curves: [
            { f: (x: number) => (220 - 100 * x) / 120, to: 2.2, label: 'England PPF (slope −0.83)' },
            { f: (x: number) => (170 - 90 * x) / 80, to: 170 / 90, label: 'Portugal PPF (slope −1.125)' },
            { f: (x: number) => 2.2 - x, to: 2.2, label: 'England trades at 1 wine per cloth', dashed: true },
          ],
          points: [
            { x: 1, y: 1, label: 'autarky (1, 1)' },
            { x: 1.2, y: 1, label: 'England after trade (1.2, 1)' },
            { x: 2.2, y: 0, label: 'England specialises' },
          ],
          caption: 'Trade lets England consume on the dashed line, outside its own frontier. The flatter a country’s frontier, the cheaper cloth is for it in terms of wine.',
        },
        { t: 'econ-viz', viz: 'comparative-advantage' },
      ],
    },
    {
      id: 'why',
      title: 'Why the gains always exist when costs differ',
      lead: 'A short proof, and the terms of trade.',
      blocks: [
        {
          t: 'proof',
          claim: 'If two countries’ opportunity costs differ, specialising according to comparative advantage raises world output of at least one good without reducing the other.',
          given: [String.raw`Country A’s opportunity cost of good X is \(a\) units of Y; country B’s is \(b\), with \(a < b\).`],
          method: 'direct',
          steps: [
            { statement: String.raw`Let A make one more unit of X, giving up \(a\) units of Y.`, reason: 'Moving along A’s frontier.' },
            { statement: String.raw`Let B make one less unit of X, freeing resources that make \(b\) more units of Y.`, reason: 'Moving along B’s frontier the other way.' },
            { statement: String.raw`World X is unchanged; world Y rises by \(b - a > 0\).`, reason: 'The X changes cancel; the Y changes do not.' },
            { statement: 'Repeat until a country is fully specialised.', reason: 'Each step adds b − a units of Y.' },
          ],
          note: 'The argument needs only that the opportunity costs differ. It says nothing about which country is more productive in absolute terms, which is why rich and poor countries alike gain from trading with each other.',
        },
        {
          t: 'math',
          tex: String.raw`\underbrace{0.83}_{\text{England's cost}} \;<\; p \;<\; \underbrace{1.125}_{\text{Portugal's cost}} \quad (p = \text{wine per cloth})`,
          plain: 'England will sell cloth only if it gets more wine than it costs England to make (0.83). Portugal will buy cloth only if it pays less wine than it would cost Portugal (1.125). Any price in between works for both. A price near 1.125 gives most of the gains to England; near 0.83, to Portugal.',
          syntax: [{ sym: String.raw`p`, say: 'The terms of trade: how many units of wine one unit of cloth buys on world markets.' }],
          worked: {
            steps: [
              String.raw`At \(p = 1.1\): England sells 1 cloth for 1.1 wine, ending with 1.2 cloth and 1.1 wine; Portugal ends with 1 cloth and 1.025 wine.`,
              String.raw`At \(p = 0.85\): selling 1.2 cloth gets England only 1.02 wine, leaving it with 1 cloth and 1.02 wine, barely better than autarky. Portugal buys 1.2 cloth for 1.02 wine and keeps 1.105 wine: most of the gain goes to Portugal.`,
            ],
            why: ['near Portugal’s cost, England gains most', 'near England’s cost, Portugal gains most'],
            answer: 'The terms of trade divide the gains. A country whose export prices rise relative to import prices (improving terms of trade) captures more of them.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The surgeon and the typist', body: 'A surgeon who types faster than any assistant should still hire one: an hour of surgery is worth far more than the typing time saved. Comparative advantage applies to people as well as nations.' },
            { title: 'It is not about wages', body: 'A poor country with low productivity everywhere can still export: its low wages reflect low productivity, and its comparative advantage lies where its productivity gap is smallest.' },
            { title: 'It is not zero-sum', body: 'Exports are not "winning" and imports "losing". Imports are what a country gains from trade; exports are what it pays for them.' },
            { title: 'It changes over time', body: 'Comparative advantage is shaped by skills, capital, infrastructure and policy, so countries can build new ones, as Singapore has.' },
          ],
        },
      ],
    },
    {
      id: 'factors',
      title: 'Factor endowments, gravity and the data',
      lead: 'Beyond Ricardo.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Heckscher–Ohlin theorem', def: 'A country exports goods that use its relatively abundant factor intensively: labour-abundant countries export labour-intensive goods (garments), capital-abundant ones capital-intensive goods (machinery).' },
            { term: 'Stolper–Samuelson theorem', def: 'Opening to trade raises the real return to the abundant factor and lowers it for the scarce factor. In a rich, skill-abundant country, trade with labour-abundant countries tends to lower the wages of less-skilled workers.' },
            { term: 'Leontief paradox', def: 'Wassily Leontief found in 1953 that US exports were less capital-intensive than its imports, against the theorem’s prediction, which led to models with skills, technology and many factors.' },
            { term: 'Intra-industry trade', def: 'Countries exporting and importing the same kinds of goods (Germany and France trading cars), explained by product variety and economies of scale rather than comparative advantage (Krugman, 1979).' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`T_{ij} = G\,\frac{Y_i^{\,\alpha}\,Y_j^{\,\beta}}{D_{ij}^{\,\theta}}, \qquad \theta \approx 1`,
          plain: 'The gravity model of trade: trade between two countries rises with the size of their economies and falls with the distance between them, like Newton’s gravity. It is one of the most reliable empirical regularities in economics. A distance elasticity near 1 means doubling distance roughly halves trade.',
          syntax: [
            { sym: String.raw`T_{ij}`, say: 'Trade between countries i and j.' },
            { sym: String.raw`Y_i, Y_j`, say: 'Their GDPs.' },
            { sym: String.raw`D_{ij}^{\,\theta}`, say: 'Distance raised to the power theta, the distance elasticity.' },
          ],
          worked: {
            steps: [
              String.raw`Two pairs of countries with the same GDPs; one pair is 1,000 km apart, the other 4,000 km.`,
              String.raw`With \(\theta = 1\): \(T_{near}/T_{far} = 4000/1000 = 4\).`,
              String.raw`With \(\theta = 0.9\): \(4^{0.9} \approx 3.5\).`,
            ],
            why: ['hold size fixed', 'trade falls in proportion to distance', 'estimates are often slightly below 1'],
            answer: 'Neighbours trade far more than distant partners of the same size, which is why regional trade agreements and ports at the crossroads of shipping lanes matter so much.',
          },
        },
        {
          t: 'levels',
          items: [
            { name: 'Entrepôt (1819–1960s)', body: 'A free port at the meeting point of shipping lanes, re-exporting goods across the region: comparative advantage in location and trading services.' },
            { name: 'Labour-intensive manufacturing (1960s–70s)', body: 'Garments, electronics assembly and ship repair for multinationals, using abundant labour after independence.' },
            { name: 'Capital- and skill-intensive industry (1980s–90s)', body: 'Wafer fabrication, petrochemicals on Jurong Island, precision engineering, as wages and skills rose.' },
            { name: 'Knowledge and services (2000s–)', body: 'Finance, logistics, biomedical sciences, semiconductors and regional headquarters, built on skills, rule of law and connectivity.' },
          ],
          caption: 'Singapore’s comparative advantage has been rebuilt several times by investment in education, infrastructure and institutions.',
        },
      ],
    },
    {
      id: 'losers',
      title: 'Who loses, and what can be done',
      lead: 'Gains for the country, costs for some.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\Delta W_{country} = \sum_{\text{winners}} \Delta W_i + \sum_{\text{losers}} \Delta W_j > 0 \quad\text{but}\quad \Delta W_j < 0 \text{ for some } j`,
          plain: 'Opening to trade raises national income: the winners’ gains are larger than the losers’ losses. That is a statement about the total, not about each person. Workers in industries that face new import competition can lose their jobs and wages, and if they live in towns built around those industries, the losses can be long-lasting.',
          syntax: [{ sym: String.raw`\Delta W_i`, say: 'The change in welfare of person i.' }],
          worked: {
            steps: [
              String.raw`Cheaper imported shoes save 10 million consumers $20 a year each: $200 million.`,
              String.raw`10,000 shoe workers lose jobs paying $30,000 and find new jobs paying $24,000: a loss of $60 million a year.`,
              String.raw`Net gain: $140 million a year. The gain is spread thinly ($20 each); the loss is concentrated ($6,000 each).`,
            ],
            why: ['diffuse winners', 'concentrated losers', 'enough to compensate, with plenty left over'],
            answer: 'A transfer of $60 million to the displaced workers would leave everyone better off. The politics of trade is hard because the losers are few, visible and organised, and the winners many and barely aware of their gain.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The China shock', tag: 'Autor, Dorn and Hanson, 2013', body: 'US local labour markets more exposed to the rise of Chinese imports after 2000 saw larger falls in manufacturing employment, lower wages and higher use of disability and other benefits, effects that persisted for a decade or more. They estimated Chinese import competition explained about a quarter of the fall in US manufacturing jobs in 1990–2007.' },
            { title: 'Trade adjustment assistance', tag: 'compensation', body: 'Programmes that retrain and support displaced workers. In the US they have been small relative to the losses.' },
            { title: 'Retraining and mobility', tag: 'Singapore’s approach', body: 'SkillsFuture, Workforce Singapore’s career conversion programmes and wage support for hiring mid-career workers aim to move people from declining to growing industries rather than protect particular jobs.' },
            { title: 'Not protection', tag: 'why not tariffs?', body: 'Tariffs protect some jobs at a high cost per job, raise prices for everyone and invite retaliation. See [tariffs](@economics/trade/tariffs-and-trade-policy).' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Ricardo, D. (1817). *On the Principles of Political Economy and Taxation*, chapter 7. John Murray.',
    'Krugman, P. R., Obstfeld, M., and Melitz, M. J. (2022). *International Economics: Theory and Policy* (12th ed.). Pearson.',
    'Stolper, W. F., and Samuelson, P. A. (1941). Protection and real wages. *Review of Economic Studies*, 9(1), 58–73.',
    'Head, K., and Mayer, T. (2014). Gravity equations: Workhorse, toolkit, and cookbook. In *Handbook of International Economics*, vol. 4. Elsevier.',
    'Autor, D. H., Dorn, D., and Hanson, G. H. (2013). The China syndrome: Local labor market effects of import competition in the United States. *American Economic Review*, 103(6), 2121–2168.',
  ],
  related: ['economics/trade/tariffs-and-trade-policy', 'economics/trade/balance-of-payments-and-trilemma', 'economics/start-here'],
}

export default guide
