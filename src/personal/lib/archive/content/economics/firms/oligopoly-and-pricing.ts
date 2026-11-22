import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most of what you buy comes from industries with a handful of big firms: telcos, airlines, banks, supermarkets, ride-hailing. In such an oligopoly each firm’s best move depends on what its rivals do, so the analysis needs game theory as well as cost curves. This guide works through the two classic models (Cournot, where firms choose quantities, and Bertrand, where they choose prices), shows why cartels are profitable but unstable, derives the conditions under which collusion survives, explains how firms charge different people different prices, and sets out how competition authorities, including Singapore’s, measure and police market power.',
  nutshell: [
    'In an oligopoly firms are **interdependent**: each must anticipate its rivals. The outcome is a **Nash equilibrium**, where no firm wants to change its choice given the others’.',
    '**Cournot** (quantity) competition gives prices between monopoly and competition, falling towards marginal cost as firms are added.',
    '**Bertrand** (price) competition with identical products drives price to marginal cost with only **two** firms: the Bertrand paradox.',
    'A **cartel** is a prisoner’s dilemma: each member gains by cheating. Collusion survives only if firms value the future enough.',
    '**Price discrimination** charges more to buyers with less elastic demand. Authorities measure concentration with the **HHI** and police cartels, abuse of dominance and mergers.',
  ],
  sections: [
    {
      id: 'concentration',
      title: 'Measuring concentration',
      lead: 'How few is few?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`HHI = \sum_{i=1}^{n} s_i^2, \qquad CR_4 = s_1 + s_2 + s_3 + s_4`,
          plain: 'The Herfindahl–Hirschman Index squares each firm’s market share (in percent) and adds them up. Squaring gives big firms far more weight. A monopoly scores 100² = 10,000; a hundred firms with 1% each score 100. The four-firm concentration ratio simply adds the top four shares.',
          syntax: [
            { sym: String.raw`\sum_{i=1}^{n}`, say: 'Read "the sum from i equals 1 to n": add the term up for every firm.' },
            { sym: String.raw`s_i`, say: 'Firm i’s market share, in percent.' },
          ],
          where: [
            { sym: 's_i', def: 'Market share of firm i, as a percentage' },
            { sym: 'n', def: 'Number of firms in the market' },
          ],
          worked: {
            title: 'A merger in a four-firm market',
            steps: [
              String.raw`Shares are 40, 30, 20 and 10.`,
              String.raw`\(HHI = 40^2 + 30^2 + 20^2 + 10^2 = 1600 + 900 + 400 + 100 = 3000\).`,
              String.raw`The firms with 20 and 10 merge into one with 30: \(HHI = 1600 + 900 + 900 = 3400\).`,
              String.raw`Change: \(\Delta HHI = 2 \times 20 \times 10 = 400\), because \((a + b)^2 - a^2 - b^2 = 2ab\).`,
            ],
            why: ['the starting market', 'square and add', 'the merged firm’s share squared replaces the two separate squares', 'a shortcut for any merger'],
            answer: 'The market goes from 3,000 to 3,400. Under the 2023 US Merger Guidelines a market above 1,800 is highly concentrated and an increase above 100 there is presumed to harm competition, so this merger would face a challenge.',
          },
        },
        {
          t: 'table',
          head: ['Market structure (equal shares)', 'HHI', 'Reading'],
          rows: [
            ['1 firm', '10,000', 'Monopoly'],
            ['2 firms', '5,000', 'Duopoly'],
            ['4 firms', '2,500', 'Highly concentrated'],
            ['6 firms', '1,667', 'Moderately concentrated'],
            ['10 firms', '1,000', 'Unconcentrated'],
            ['100 firms', '100', 'Highly competitive'],
          ],
          caption: 'With n equal firms the HHI is 10,000/n, so it can be read as an "equivalent number of firms". Singapore’s competition authority, the CCCS, uses market shares directly: it is generally concerned when a merged firm would hold 40% or more, or 20–40% in a market where the top three hold 70% or more.',
        },
      ],
    },
    {
      id: 'cournot',
      title: 'Cournot: competing on quantity',
      lead: 'Each firm picks its output, expecting the rival’s.',
      blocks: [
        { t: 'p', text: 'Augustin Cournot (1838) imagined two springs selling identical mineral water. Each owner decides how much to bring to market; the price then falls to whatever clears the market. Each owner chooses their quantity to maximise profit, taking the other’s quantity as given. The equilibrium is where both choices are best responses to each other.' },
        {
          t: 'math',
          tex: String.raw`\pi_1 = \big(100 - q_1 - q_2 - 20\big)\,q_1 \;\Rightarrow\; \frac{\partial \pi_1}{\partial q_1} = 80 - 2q_1 - q_2 = 0 \;\Rightarrow\; q_1 = \frac{80 - q_2}{2}`,
          plain: 'Firm 1’s profit is the price, which depends on both firms’ output, minus its cost of 20, times its own output. Its best output falls as the rival produces more: if firm 2 floods the market, firm 1 should hold back. That relationship is firm 1’s best-response (reaction) function.',
          syntax: [
            { sym: String.raw`\frac{\partial \pi_1}{\partial q_1}`, say: 'Read "the partial derivative of pi 1 with respect to q 1": how firm 1’s profit changes with its own output, holding firm 2’s fixed.' },
            { sym: String.raw`q_1 = \frac{80 - q_2}{2}`, say: 'Firm 1’s best response to any q₂.' },
          ],
          where: [
            { sym: 'q_1, q_2', def: 'Output of each firm' },
            { sym: '100 − q₁ − q₂', def: 'The market price from demand P = 100 − Q' },
            { sym: '20', def: 'Each firm’s marginal cost' },
          ],
          worked: {
            title: 'The Cournot equilibrium',
            steps: [
              String.raw`By symmetry firm 2’s best response is \(q_2 = (80 - q_1)/2\).`,
              String.raw`In equilibrium \(q_1 = q_2 = q\), so \(q = (80 - q)/2\), giving \(3q = 80\) and \(q \approx 26.67\).`,
              String.raw`Market output \(Q = 53.33\), price \(P = 100 - 53.33 = 46.67\).`,
              String.raw`Each firm’s profit: \((46.67 - 20) \times 26.67 \approx 711\); total about 1,422.`,
              String.raw`Compare monopoly (Q = 40, P = 60, profit 1,600) and competition (Q = 80, P = 20, profit 0).`,
            ],
            why: ['the same problem from the other side', 'solve the two best responses together', 'demand gives the price', 'price minus cost, times output', 'the two benchmarks'],
            answer: 'Two quantity-setting firms land between monopoly and competition: price 46.67, output two-thirds of the competitive level.',
          },
        },
        {
          t: 'plot',
          title: 'Best-response functions and the Cournot equilibrium',
          x: [0, 85],
          y: [0, 85],
          xLabel: 'firm 1 output q₁',
          yLabel: 'firm 2 output q₂',
          curves: [
            { f: (q1: number) => (80 - q1) / 2, label: 'firm 2’s best response', to: 80 },
            { f: (q1: number) => 80 - 2 * q1, label: 'firm 1’s best response', to: 40 },
            { f: (q1: number) => 40 - q1, label: 'joint monopoly output (q₁ + q₂ = 40)', dashed: true, to: 40 },
          ],
          points: [
            { x: 26.67, y: 26.67, label: 'Cournot–Nash (26.7, 26.7)' },
            { x: 20, y: 20, label: 'cartel (20, 20)' },
          ],
          caption: 'Where the best responses cross, neither firm wants to change. The cartel point, splitting the monopoly output, gives both more profit, but each firm’s best response to 20 is 30, not 20: the temptation to cheat.',
        },
        {
          t: 'math',
          tex: String.raw`n \text{ firms: } \quad q_i = \frac{a - c}{(n + 1)b}, \qquad P = \frac{a + nc}{n + 1} \;\xrightarrow{\;n \to \infty\;}\; c`,
          plain: 'With n identical firms the Cournot price is a weighted average of the choke price a and marginal cost c, with weight n on cost. One firm gives the monopoly price; as firms are added the price slides towards marginal cost.',
          syntax: [{ sym: String.raw`\xrightarrow{\;n \to \infty\;}`, say: 'Read "tends to, as n goes to infinity".' }],
          worked: {
            steps: [
              String.raw`\(a = 100, b = 1, c = 20\).`,
              String.raw`\(n = 1\): \(P = 120/2 = 60\). \(n = 2\): \(P = 140/3 \approx 46.67\).`,
              String.raw`\(n = 4\): \(P = 180/5 = 36\). \(n = 9\): \(P = 280/10 = 28\).`,
              String.raw`Markup over cost \(P - c = (a - c)/(n + 1)\): 40, 26.7, 16, 8.`,
            ],
            why: ['the demand and cost', 'monopoly and duopoly', 'more firms', 'the markup shrinks like 1/(n + 1)'],
            answer: 'Each extra competitor cuts the markup, fast at first and then slowly: going from 1 to 2 firms removes a third of the markup; going from 9 to 10 removes less than a tenth.',
          },
        },
        { t: 'econ-viz', viz: 'cournot' },
      ],
    },
    {
      id: 'bertrand',
      title: 'Bertrand: competing on price',
      lead: 'Two firms can be enough.',
      blocks: [
        { t: 'p', text: 'Joseph Bertrand (1883) objected that firms choose prices, not quantities. If two firms sell identical products and buyers go to the cheaper one, each can steal the whole market by undercutting the other by a cent. Any price above marginal cost invites undercutting, so the only equilibrium is **price = marginal cost**: the competitive outcome with only two firms. This is the **Bertrand paradox**, because it contradicts what we see in duopolies.' },
        {
          t: 'cycle',
          items: [
            { name: 'Firm A prices at $50', body: 'Above its cost of $20, it earns a profit.' },
            { name: 'Firm B undercuts to $49.99', body: 'It wins every customer.' },
            { name: 'Firm A undercuts to $49.98', body: 'And takes them back.' },
            { name: 'Repeat until $20', body: 'At cost neither can gain by undercutting further, and raising price loses everyone.' },
          ],
          caption: 'The undercutting spiral. It stops only at marginal cost.',
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Capacity limits', body: 'If a firm cannot serve the whole market, undercutting gains less. Kreps and Scheinkman (1983) showed that firms which first choose capacity and then compete on price end up at the Cournot outcome.' },
            { title: 'Differentiation', body: 'If products differ (location, brand, service), a slightly higher price loses only some customers, so prices stay above cost. This is why firms spend heavily on making products feel different.' },
            { title: 'Repeated interaction', body: 'Firms that meet every day can sustain higher prices by threatening to retaliate against undercutting, which is the next section.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Price-matching guarantees', text: '"We will match any lower price" sounds like fierce competition but can do the opposite. If every rival matches at once, undercutting wins no customers, so nobody bothers to cut prices. Economists treat widespread price-matching as a possible way to soften Bertrand competition.' },
      ],
    },
    {
      id: 'collusion',
      title: 'Cartels and the economics of collusion',
      lead: 'Profitable together, tempted apart.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Firm 2 keeps to 20', 'Firm 2 cheats (produces 30)'],
          rows: [
            ['Firm 1 keeps to 20', '800, 800', '600, 900'],
            ['Firm 1 cheats (produces 30)', '900, 600', '711, 711 (Cournot)'],
          ],
          caption: 'Profits (firm 1, firm 2) with demand P = 100 − Q and cost 20. If both keep to the cartel quota of 20, price is 60. If one cheats with 30, price falls to 50: the cheat earns 30 × 30 = 900 and the loyal firm 20 × 30 = 600. Cheating is the better move whatever the rival does, so both cheat and end at the Cournot outcome: a prisoner’s dilemma.',
        },
        { t: 'game-lab', viz: 'payoff', preset: 'pd' },
        {
          t: 'math',
          tex: String.raw`\underbrace{\frac{800}{1 - \delta}}_{\text{collude forever}} \;\ge\; \underbrace{900}_{\text{cheat once}} + \underbrace{\frac{\delta \cdot 711}{1 - \delta}}_{\text{then punished forever}} \quad\Longleftrightarrow\quad \delta \ge \frac{900 - 800}{900 - 711} \approx 0.53`,
          plain: 'If the game is played every period, a cartel can threaten: "cheat once and we will all produce the Cournot amount for ever". Colluding pays 800 every period. Cheating pays 900 once, then 711 every period after. Collusion survives if firms care enough about the future (the discount factor δ, how much a dollar next period is worth today) that the stream of lost profits outweighs the one-off gain.',
          syntax: [
            { sym: String.raw`\delta`, say: 'Read "delta": the discount factor, between 0 and 1. A δ of 0.9 means next period’s dollar is worth 90 cents today.' },
            { sym: String.raw`\frac{800}{1 - \delta}`, say: 'The sum 800 + 800δ + 800δ² + …, a geometric series.' },
            { sym: String.raw`\Longleftrightarrow`, say: 'Read "if and only if".' },
          ],
          worked: {
            steps: [
              String.raw`Multiply both sides by \(1 - \delta\): \(800 \ge 900(1 - \delta) + 711\delta\).`,
              String.raw`Expand: \(800 \ge 900 - 189\delta\).`,
              String.raw`Rearrange: \(189\delta \ge 100\), so \(\delta \ge 0.529\).`,
              String.raw`A firm with a 10% cost of capital and yearly interaction has \(\delta = 1/1.1 \approx 0.91\), comfortably above 0.53.`,
            ],
            why: ['clear the fractions', 'collect terms in δ', 'solve', 'what δ looks like in practice'],
            answer: 'Collusion is self-enforcing when firms are patient, interact often and can spot cheating quickly. That is why cartels form in markets with few firms, stable demand and transparent prices, and why competition law treats information-sharing between rivals with suspicion.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'OPEC', tag: 'a public cartel', body: 'Oil producers set national quotas. Members routinely exceed them when prices are high, the cartel’s classic weakness, and the arrival of US shale oil weakened its grip after 2014.' },
            { title: 'The lysine cartel', tag: '1990s', body: 'Archer Daniels Midland and Asian rivals fixed the price of an animal-feed additive, caught when an executive wore an FBI wire. Fines exceeded US$100 million and executives went to prison.' },
            { title: 'Fresh chicken in Singapore', tag: 'CCCS, 2018', body: 'Singapore’s competition authority fined 13 fresh chicken distributors about S$27 million for agreeing not to compete for each other’s customers and coordinating price increases.' },
            { title: 'Leniency programmes', tag: 'breaking cartels', body: 'The first member to confess gets immunity from fines. This turns the cartel into a race to defect, a deliberate use of the prisoner’s dilemma against colluders, and uncovers most cartels that are caught.' },
          ],
        },
      ],
    },
    {
      id: 'discrimination',
      title: 'Price discrimination',
      lead: 'Different prices for the same thing.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Third degree: by group', body: 'Different prices to identifiable groups with different elasticities: student and senior discounts, cheaper tickets for locals, lower drug prices in poorer countries.' },
            { name: 'Second degree: by menu', body: 'Everyone faces the same menu and sorts themselves: bulk discounts, first and economy class, "pro" and "basic" software versions, off-peak fares.' },
            { name: 'First degree: by person', body: 'Each buyer pays their maximum willingness to pay. Rare in pure form (a car dealer haggling comes close), but personalised online pricing moves in this direction.' },
          ],
          caption: 'From least to most information about each buyer. Three conditions are needed for any of them: market power, a way to tell buyers apart (or get them to reveal themselves), and no easy resale between groups.',
        },
        {
          t: 'math',
          tex: String.raw`MR_A = MR_S = MC \quad\Rightarrow\quad \frac{P_A - MC}{P_A} = \frac{1}{|E_A|}, \;\; \frac{P_S - MC}{P_S} = \frac{1}{|E_S|}`,
          plain: 'A firm selling in two separate markets sets marginal revenue equal to marginal cost in each. Applying the markup rule market by market, the group with less elastic demand pays the higher price.',
          syntax: [{ sym: String.raw`MR_A, MR_S`, say: 'Marginal revenue from adults and from students.' }],
          worked: {
            title: 'A cinema with adults and students',
            steps: [
              String.raw`Adults: \(P = 100 - Q\). Students: \(P = 60 - Q\). Marginal cost 10.`,
              String.raw`Adults: \(100 - 2Q = 10\), so \(Q = 45\), \(P = 55\). Students: \(60 - 2Q = 10\), so \(Q = 25\), \(P = 35\).`,
              String.raw`Profit: \(45 \times 45 + 25 \times 25 = 2025 + 625 = 2650\).`,
              String.raw`One price for all: combined demand \(Q = 160 - 2P\), so \(P = 80 - Q/2\) and \(MR = 80 - Q = 10\): \(Q = 70\), \(P = 45\), profit \(35 \times 70 = 2450\).`,
              String.raw`Elasticities at the discriminating prices: adults \(55/45 \approx 1.22\), students \(35/25 = 1.4\).`,
            ],
            why: ['two demand curves', 'MR = MC in each market', 'price minus cost, times tickets', 'the single-price benchmark, with both groups buying at 45', 'the more elastic group gets the lower price'],
            answer: 'Discrimination raises profit from $2,450 to $2,650. Total tickets stay at 70, but adults pay $10 more and students $10 less. With straight-line demands and both groups served, total output does not change, so total welfare actually falls slightly: the same tickets go to buyers who value them less.',
          },
        },
        {
          t: 'plot',
          title: 'Two markets, two prices',
          x: [0, 105],
          y: [0, 105],
          xLabel: 'tickets',
          yLabel: 'price',
          curves: [
            { f: (q: number) => 100 - q, label: 'adult demand' },
            { f: (q: number) => 60 - q, label: 'student demand', to: 60 },
            { f: () => 10, label: 'MC = 10' },
          ],
          points: [
            { x: 45, y: 55, label: 'adults: 45 at $55' },
            { x: 25, y: 35, label: 'students: 25 at $35' },
          ],
          hlines: [{ y: 45, label: 'single price $45' }],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Is price discrimination bad?',
          text: 'Not necessarily. When a single price would leave a group out entirely, discrimination can raise output and welfare: drug companies selling cheaply in poor countries, airlines filling seats with discount fares, software given to students. Perfect (first-degree) discrimination is even fully efficient, since every unit worth more than its cost is sold, but all the surplus goes to the seller. The welfare verdict turns on whether output rises.',
        },
      ],
    },
    {
      id: 'policy',
      title: 'Competition policy, in Singapore and elsewhere',
      lead: 'What the law forbids.',
      blocks: [
        {
          t: 'table',
          head: ['Prohibition', 'Singapore Competition Act 2004', 'What it targets', 'Example'],
          rows: [
            ['Anti-competitive agreements', 'Section 34', 'Price fixing, bid rigging, market sharing, output limits', 'Fresh chicken distributors (2018)'],
            ['Abuse of a dominant position', 'Section 47', 'Predatory pricing, exclusive dealing that shuts out rivals, refusing to supply', 'Investigations into exclusivity clauses'],
            ['Mergers that substantially lessen competition', 'Section 54', 'Acquisitions that remove a close rival or create dominance', 'Grab’s purchase of Uber’s Southeast Asian business (2018)'],
          ],
          caption: 'In 2018 the CCCS found that Grab’s acquisition of Uber’s regional business had substantially lessened competition in ride-hailing, fined the two firms about S$13 million in total, and imposed measures such as removing exclusivity arrangements with drivers and taxi fleets.',
        },
        {
          t: 'diagram',
          title: 'How a merger is assessed',
          nodes: [
            { id: 'm', label: 'Proposed merger', shape: 'pill', col: 0, row: 1, tone: 'ink' },
            { id: 'mkt', label: 'Define the market', sub: 'which products and areas compete?', col: 1, row: 1, tone: 'lavender' },
            { id: 'sh', label: 'Shares and HHI above thresholds?', shape: 'diamond', col: 2, row: 1, tone: 'mustard' },
            { id: 'ok', label: 'Cleared', shape: 'pill', col: 3, row: 0, tone: 'mint' },
            { id: 'deep', label: 'Detailed review', sub: 'closeness of rivals, entry, buyer power, efficiencies', col: 3, row: 2, tone: 'orange' },
            { id: 'rem', label: 'Block or remedies', sub: 'sell off parts, behavioural commitments', col: 4, row: 2, tone: 'pink' },
          ],
          edges: [
            { from: 'm', to: 'mkt' },
            { from: 'mkt', to: 'sh' },
            { from: 'sh', to: 'ok', label: 'no' },
            { from: 'sh', to: 'deep', label: 'yes' },
            { from: 'deep', to: 'rem', label: 'harm found' },
            { from: 'deep', to: 'ok', label: 'no harm', dashed: true },
          ],
        },
        {
          t: 'dodont',
          do: ['Define the market by what customers would switch to if the price rose 5–10% (the hypothetical monopolist test)', 'Weigh possible cost savings from a merger against lost competition', 'Look at how easily new firms could enter'],
          dont: ['Equate a high market share with abuse: being big from being better is legal', 'Assume two firms always means high prices: Bertrand competition can be fierce', 'Forget that markups can reflect high fixed costs that must be recovered'],
        },
      ],
    },
  ],
  sources: [
    'Cournot, A. (1838). *Recherches sur les principes mathématiques de la théorie des richesses*. Hachette.',
    'Bertrand, J. (1883). Review of Walras and Cournot. *Journal des Savants*, 67, 499–508.',
    'Kreps, D. M., and Scheinkman, J. A. (1983). Quantity precommitment and Bertrand competition yield Cournot outcomes. *Bell Journal of Economics*, 14(2), 326–337.',
    'Tirole, J. (1988). *The Theory of Industrial Organization*. MIT Press.',
    'US Department of Justice and Federal Trade Commission (2023). *Merger Guidelines*.',
    'Competition and Consumer Commission of Singapore (2018). Infringement decisions on fresh chicken distributors and on the Grab–Uber transaction. cccs.gov.sg.',
  ],
  related: ['economics/firms/competition-and-monopoly', 'game-theory/classic-games/prisoners-dilemma', 'economics/information/auctions'],
}

export default guide
