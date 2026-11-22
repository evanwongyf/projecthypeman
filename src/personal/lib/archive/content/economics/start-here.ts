import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Economics is the study of how people, firms and governments choose when they cannot have everything they want. That single fact, scarcity, explains why prices exist, why taxes cost more than they raise, why some countries are rich, why traffic jams form and why you buy the gym membership but skip the gym. This shelf builds the subject from the ground up: each guide states a model in plain words, writes it as maths, derives the result one step at a time, works real numbers through it and draws it, then asks how well it fits the evidence. The supply and demand basics, inflation, GDP and central banking already live on the [finance shelf](@finance/economics/supply-demand); start there if the idea of a demand curve is new.',
  nutshell: [
    '**Scarcity** forces choice, and every choice has an **opportunity cost**: the value of the best thing you gave up.',
    '**Microeconomics** studies single markets, firms and households; **macroeconomics** studies the whole economy: output, unemployment, inflation and debt.',
    'People respond to **incentives**, and decisions are made **at the margin**: is one more unit worth its extra cost?',
    'Markets usually allocate well, but **fail** with externalities, public goods, hidden information and market power, which is where policy earns its place.',
    'Models are **simplifications on purpose**. A good one is simple enough to solve and right about the thing it was built to explain.',
  ],
  sections: [
    {
      id: 'ideas',
      title: 'Six ideas that run through everything',
      lead: 'The grammar of economic reasoning.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Opportunity cost', tag: 'what you give up', body: 'The cost of an hour studying is not zero just because no money changed hands: it is the best other use of that hour. A university degree costs its fees plus the wages you did not earn while studying, which is usually the bigger number.' },
            { title: 'Thinking at the margin', tag: 'one more unit', body: 'Rational choices compare the extra benefit of one more unit with its extra cost. You keep going while marginal benefit exceeds marginal cost and stop where they are equal. Almost every optimum in this shelf is a version of MB = MC.' },
            { title: 'Incentives', tag: 'people respond', body: 'Change the reward or the penalty and behaviour changes, often in ways the rule-maker did not intend. A tax on windows in 18th-century England produced bricked-up windows, not revenue.' },
            { title: 'Gains from trade', tag: 'specialise and swap', body: 'Voluntary exchange makes both sides better off, or they would not agree to it. Specialising in what you do at the lowest opportunity cost and trading for the rest raises total output, between people and between countries.' },
            { title: 'Equilibrium', tag: 'where forces balance', body: 'A state where nobody wants to change what they are doing given what everyone else does. Markets, wage bargains, traffic routes and price wars all settle into equilibria, and most economic analysis asks how the equilibrium moves when something changes.' },
            { title: 'Efficiency and equity', tag: 'size and shares', body: 'Efficiency is about the size of the pie: are any gains being wasted? Equity is about how it is shared. Policies often trade one for the other, and economics can measure the trade-off even when it cannot tell you which side to pick.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{choose } q \text{ so that } \; MB(q) = MC(q)`,
          plain: 'Keep doing something while the extra benefit of the next unit is bigger than its extra cost. The best amount is where the two are equal, because one more unit would cost more than it is worth and one fewer would give up a unit that was worth more than it cost.',
          syntax: [
            { sym: String.raw`MB(q)`, say: 'Read "marginal benefit at q": the extra benefit from the q-th unit.' },
            { sym: String.raw`MC(q)`, say: 'Read "marginal cost at q": the extra cost of the q-th unit.' },
          ],
          where: [
            { sym: 'q', def: 'How much of the activity: units produced, hours studied, cars on a road' },
            { sym: 'MB', def: 'Marginal benefit, usually falling as q rises (the fifth slice of pizza is worth less than the first)' },
            { sym: 'MC', def: 'Marginal cost, usually rising as q rises (the tenth hour of study is more tiring than the first)' },
          ],
          worked: {
            title: 'How many hours to revise',
            steps: [
              String.raw`Each hour of revision adds marks, but fewer each time: \(MB = 12 - 2h\) marks per hour, where \(h\) is the hour.`,
              String.raw`Each hour costs something you value at 4 marks' worth (sleep, friends, other subjects): \(MC = 4\).`,
              String.raw`Set them equal: \(12 - 2h = 4\), so \(h = 4\).`,
              String.raw`Check hour 5: it adds \(12 - 10 = 2\) marks but costs 4, so it is not worth it. Hour 3 adds 6 and costs 4, so it is.`,
            ],
            why: ['the benefit of extra effort shrinks', 'opportunity cost, not money', 'the margin condition', 'test either side of the answer'],
            answer: 'Four hours. The rule is not "revise as much as possible" but "stop when the next hour is worth less than what it costs you".',
          },
          caption: 'The marginal principle. Firms (MR = MC), consumers (price = marginal value), polluters (marginal damage = marginal abatement cost) and governments all use it.',
        },
      ],
    },
    {
      id: 'toolkit',
      title: 'The toolkit: models, diagrams and maths',
      lead: 'How the guides are built.',
      blocks: [
        {
          t: 'flow',
          title: 'How an economic model is used',
          nodes: [
            { label: 'A question', sub: 'what does a sugar tax do?', tone: 'human' },
            { label: 'Assumptions', sub: 'who chooses, what they want, what they know', tone: 'data' },
            { label: 'The model', sub: 'curves, equations, a diagram', tone: 'model' },
            { label: 'A prediction', sub: 'prices up 6%, sales down 10%', tone: 'output' },
            { label: 'The evidence', sub: 'data, experiments, natural experiments', tone: 'process' },
          ],
          loop: 'If the evidence disagrees, change the assumptions, not the facts',
        },
        {
          t: 'table',
          head: ['Tool', 'What it shows', 'Where you meet it'],
          rows: [
            ['Supply and demand diagram', 'Price and quantity where two curves cross; areas show welfare', 'Taxes, price controls, externalities, tariffs'],
            ['Cost curves', 'How cost per unit changes with output', 'Firms, competition, monopoly'],
            ['Payoff matrix', 'Each player’s reward for each combination of choices', 'Oligopoly, trade wars, public goods'],
            ['Production possibility frontier', 'The most of two goods an economy can make', 'Opportunity cost, trade, growth'],
            ['AD–AS diagram', 'Total output and the price level', 'Recessions, inflation, stagflation'],
            ['Difference equation', 'How a quantity evolves year by year', 'Public debt, capital accumulation'],
            ['Lorenz curve', 'How unequally income is shared', 'Inequality and redistribution'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Reading the maths',
          text: 'Every formula has a plain-words version, a guide to reading the symbols aloud, and a worked example with the reason for each step. The algebra never goes beyond solving two straight lines, the slope of a curve (a derivative, explained where it appears) and adding up a geometric series. The labs let you move the assumptions and watch the result change.',
        },
        {
          t: 'mindmap',
          center: 'Economics',
          branches: [
            { label: 'Markets and firms', tone: 'orange', items: ['costs', 'competition and monopoly', 'oligopoly'] },
            { label: 'Welfare and policy', tone: 'mustard', items: ['surplus', 'tax incidence', 'price controls'] },
            { label: 'Market failure', tone: 'teal', items: ['externalities', 'public goods', 'COE, ERP, carbon'] },
            { label: 'Information', tone: 'lavender', items: ['lemons', 'moral hazard', 'auctions'] },
            { label: 'Labour', tone: 'pink', items: ['wages', 'minimum wages', 'unemployment'] },
            { label: 'Macroeconomics', tone: 'mint', items: ['AD–AS', 'multiplier', 'Phillips curve', 'public debt'] },
            { label: 'World economy', tone: 'teal', items: ['trade', 'balance of payments', 'growth', 'inequality'] },
            { label: 'Behaviour', tone: 'orange', items: ['prospect theory', 'present bias', 'nudges'] },
          ],
        },
      ],
    },
    {
      id: 'ppf',
      title: 'A first model: the production possibility frontier',
      lead: 'Scarcity, choice and opportunity cost in one picture.',
      blocks: [
        { t: 'p', text: 'Imagine an economy with a fixed amount of labour and machines that can make only two things, food and computers. The **production possibility frontier** (PPF) shows every combination it can make using everything fully. Points inside are wasteful (unemployment, idle factories); points outside are impossible today. Moving along the frontier means taking resources from one good to make more of the other, and the slope of the frontier is the opportunity cost.' },
        {
          t: 'plot',
          title: 'A bowed-out production possibility frontier',
          x: [0, 110],
          y: [0, 110],
          xLabel: 'computers',
          yLabel: 'food',
          curves: [
            { f: (x: number) => 100 * Math.sqrt(Math.max(1 - (x / 100) ** 2, 0)), to: 100, label: 'PPF today' },
            { f: (x: number) => 108 * Math.sqrt(Math.max(1 - (x / 108) ** 2, 0)), to: 108, label: 'PPF after growth', dashed: true },
          ],
          points: [
            { x: 60, y: 80, label: 'A: efficient' },
            { x: 40, y: 50, label: 'B: inside (waste)' },
            { x: 90, y: 80, label: 'C: impossible today' },
          ],
          caption: 'The frontier bows outwards because resources are not equally good at everything: the first computers are made by the workers best suited to it and cost little food, the last ones by farmers pulled off fields and cost a lot. Growth (more workers, capital or better technology) pushes the whole frontier out.',
        },
        {
          t: 'math',
          tex: String.raw`\text{opportunity cost of one more computer} = -\frac{\Delta \text{food}}{\Delta \text{computers}} = \text{the slope of the PPF (in size)}`,
          plain: 'The frontier tells you how much food you must give up to get one more computer. Where the curve is flat, computers are cheap in food; where it is steep, they are expensive.',
          syntax: [
            { sym: String.raw`\Delta`, say: 'Read "delta" or "change in".' },
            { sym: String.raw`-\frac{\Delta \text{food}}{\Delta \text{computers}}`, say: 'Food falls as computers rise, so the ratio is negative; the minus sign makes the cost a positive number.' },
          ],
          worked: {
            steps: [
              String.raw`On the frontier \(F = 100\sqrt{1 - (C/100)^2}\). At \(C = 60\), \(F = 100\sqrt{1 - 0.36} = 80\).`,
              String.raw`At \(C = 70\), \(F = 100\sqrt{1 - 0.49} \approx 71.4\).`,
              String.raw`Ten more computers cost \(80 - 71.4 = 8.6\) food, about 0.86 food each.`,
              String.raw`From \(C = 90\) (\(F \approx 43.6\)) to \(C = 100\) (\(F = 0\)), ten computers cost 43.6 food, 4.4 each.`,
            ],
            why: ['plug into the frontier', 'the next point along', 'the food given up per computer', 'the same step near the end of the curve'],
            answer: 'The opportunity cost of computers rises fivefold as the economy specialises: increasing opportunity cost is what bows the frontier out.',
          },
        },
      ],
    },
    {
      id: 'route',
      title: 'A route through the shelf',
      lead: 'Micro first, then macro, then the world.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Firms and competition', body: '[Costs and production](@economics/firms/costs-and-production), [competition and monopoly](@economics/firms/competition-and-monopoly) and [oligopoly and pricing](@economics/firms/oligopoly-and-pricing).' },
            { title: 'Welfare and policy', body: '[Surplus and efficiency](@economics/welfare/surplus-and-efficiency), [taxes and incidence](@economics/welfare/taxes-and-incidence) and [price controls](@economics/welfare/price-controls).' },
            { title: 'When markets fail', body: '[Externalities](@economics/market-failure/externalities), [public goods and the commons](@economics/market-failure/public-goods-and-commons) and [Singapore’s COE, ERP and carbon tax](@economics/market-failure/singapore-cars-roads-carbon). Then information: [lemons and signalling](@economics/information/lemons-and-signalling), [moral hazard](@economics/information/moral-hazard-and-agency) and [auctions](@economics/information/auctions).' },
            { title: 'Work and wages', body: '[Wages and human capital](@economics/labour/wages-and-human-capital), [minimum wages](@economics/labour/minimum-wages) and [unemployment](@economics/labour/unemployment).' },
            { title: 'The whole economy', body: '[AD–AS](@economics/macro/ad-as), [the multiplier](@economics/macro/multiplier), [the Phillips curve](@economics/macro/phillips-curve), then [budgets](@economics/fiscal/budgets-and-stabilisers), [debt dynamics](@economics/fiscal/debt-dynamics) and [Singapore’s fiscal model](@economics/fiscal/singapore-fiscal-model).' },
            { title: 'The world economy', body: '[Comparative advantage](@economics/trade/comparative-advantage), [tariffs](@economics/trade/tariffs-and-trade-policy), [the balance of payments](@economics/trade/balance-of-payments-and-trilemma), [the Solow model](@economics/growth/solow-model), [institutions](@economics/growth/institutions-and-development) and [inequality](@economics/growth/inequality).' },
            { title: 'How people really choose', body: '[Prospect theory](@economics/behavioural/prospect-theory), [present bias](@economics/behavioural/present-bias) and [fairness and nudges](@economics/behavioural/fairness-and-nudges).' },
          ],
        },
        { t: 'p', text: 'Related shelves: the strategic side of oligopoly, auctions and public goods is on [game theory](@game-theory/start-here); money, banks and the central bank on [banking](@banking/start-here); and inflation, interest rates and the business cycle on the [finance shelf](@finance/economics/inflation-rates).' },
        { t: 'callout', tone: 'note', title: 'Numbers change', text: 'Singapore policy settings (tax rates, COE results, wage thresholds, carbon prices) are given as of the time of writing and are revised often. Check the government source named in each guide before relying on a figure.' },
      ],
    },
  ],
  sources: [
    'Mankiw, N. G. (2021). *Principles of Economics* (9th ed.). Cengage.',
    'CORE Econ (2017). *The Economy*. Oxford University Press. Free online at core-econ.org.',
    'Robbins, L. (1932). *An Essay on the Nature and Significance of Economic Science*. Macmillan.',
  ],
  related: ['finance/economics/supply-demand', 'game-theory/start-here', 'banking/start-here'],
}

export default guide
