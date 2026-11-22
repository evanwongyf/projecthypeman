import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Where a few firms dominate a market, each firm’s best price or output depends on what the others do. This is the home turf of game theory: oligopoly. The classic models give sharp predictions. Firms that choose quantities (Cournot) earn more than under perfect competition but less than a monopoly would; firms that choose prices on identical products (Bertrand) can compete profits away entirely. Cartels tempt each member to cheat. This guide works through the models with numbers, then covers entry deterrence, network effects and the strategy of platforms.',
  nutshell: [
    '**Cournot** (quantity) competition: firms choose output; the equilibrium price lies between the competitive and the monopoly price.',
    '**Bertrand** (price) competition with identical products: price falls to cost, so two firms are enough for competition (the **Bertrand paradox**).',
    'A **cartel** earns monopoly profits but each member is tempted to **cheat**, a prisoner’s dilemma. Cartels survive only with **monitoring and credible punishment**.',
    '**Entry deterrence**: an incumbent may invest in capacity or reputation to make a threat of a price war credible.',
    '**Network effects** make markets tip towards one or two platforms, and shape pricing and competition strategy.',
  ],
  sections: [
    {
      id: 'cournot',
      title: 'Cournot competition: choosing quantities',
      blocks: [
        { t: 'p', text: 'Two firms produce an identical product. Each chooses a quantity, and the price adjusts so that the market clears. Each firm’s best output depends on its rival’s output: the more the rival makes, the lower the price, so the less you should make. The equilibrium is where each is doing its best given the other.' },
        {
          t: 'math',
          tex: 'q_i^{*} = \\frac{a - c}{3}, \\qquad P^{*} = \\frac{a + 2c}{3}, \\qquad \\pi_i^{*} = \\frac{(a-c)^2}{9}',
          caption: 'Symmetric Cournot equilibrium with two firms, linear demand P = a − Q and constant cost c per unit.',
          plain: 'Demand falls as total output rises. Each firm’s best reply is to produce half of what is left over after the rival’s output, once costs are accounted for. Setting both replies equal gives each firm one third of the largest possible market. The price ends up between the competitive price (equal to cost) and the monopoly price.',
          where: [
            { sym: 'q_i^{*}', def: 'each firm’s equilibrium output' },
            { sym: 'a', def: 'the price at which demand is zero (the intercept)' },
            { sym: 'c', def: 'cost to produce one unit' },
            { sym: 'P^{*}', def: 'the market price in equilibrium' },
            { sym: '\\pi_i^{*}', def: 'each firm’s profit in equilibrium' },
          ],
          syntax: [
            { sym: 'P = a - Q', say: '“price equals a minus total quantity”: a straight-line demand curve.' },
            { sym: '(a-c)^2', say: '“a minus c, squared”: multiply (a − c) by itself.' },
          ],
          worked: {
            title: 'With a = 100 and c = 10',
            steps: [
              'Each firm’s best reply: \\(q_i = \\dfrac{a - c - q_j}{2} = \\dfrac{90 - q_j}{2}\\).',
              'In equilibrium both produce the same: \\(q = \\dfrac{90 - q}{2}\\), so \\(3q = 90\\), so \\(q = 30\\).',
              'Total output \\(Q = 60\\), so price \\(P = 100 - 60 = 40\\).',
              'Each firm’s profit is \\((40 - 10) \\times 30 = 900\\).',
              'Compare. A monopolist would produce \\(Q = \\dfrac{a-c}{2} = 45\\), price \\(55\\), profit \\(45 \\times 45 = 2025\\). Perfect competition would give \\(Q = 90\\), price \\(10\\), profit zero.',
            ],
            answer: 'Duopoly output is 60, price 40, with profit 900 for each firm (1,800 in total). That is more than perfect competition (0) and less than monopoly (2,025). Consumers are better off than under monopoly and worse off than under competition.',
          },
        },
        { t: 'game-lab', viz: 'payoff', preset: 'pd' },
        { t: 'callout', tone: 'note', title: 'Why the lab shows a dilemma', text: 'Cournot duopoly is a prisoner’s dilemma: both would earn more by each restricting output to half the monopoly level (1,012.5 each), but each is tempted to produce more. The prisoner’s dilemma matrix above has the same structure.' },
      ],
    },
    {
      id: 'bertrand',
      title: 'Bertrand competition: choosing prices',
      blocks: [
        { t: 'p', text: 'If the firms sell identical goods and customers buy from the cheaper one, undercutting wins the whole market. Each firm then wants to undercut the other until price equals cost and profits are zero. Joseph Bertrand’s 1883 conclusion is called the Bertrand paradox: two firms are enough to produce the competitive outcome.' },
        {
          t: 'table',
          head: ['Real-world feature', 'Effect on the paradox'],
          rows: [
            ['Product differentiation (brands, location)', 'Customers do not switch for small price differences, so profits are positive'],
            ['Capacity limits', 'A firm cannot serve the whole market, so undercutting gains less (Edgeworth)'],
            ['Repeated interaction', 'Firms can sustain high prices by threatening price wars (tacit collusion)'],
            ['Switching costs and search costs', 'Customers do not shop around perfectly'],
          ],
        },
      ],
    },
    {
      id: 'cartel',
      title: 'Cartels and why they crack',
      blocks: [
        { t: 'p', text: 'Firms can do better by colluding: agreeing to restrict output and raise price. But each member can do even better by cheating. With the same example, if two firms each produce 22.5 (half of the monopoly output), the price is 55 and each earns 1,012.5. If one firm cheats and its rival keeps to 22.5, the cheater’s best output is 33.75, and its profit rises to about 1,139. The rival’s falls. Both are tempted, and the cartel unravels, unless it has a way to detect and punish cheating.' },
        {
          t: 'table',
          head: ['What helps a cartel', 'Why'],
          rows: [
            ['Few members', 'Easier to agree and monitor'],
            ['Transparent prices and quantities', 'Cheating is detected quickly'],
            ['Frequent interaction', 'The punishment for cheating (a price war) bites soon'],
            ['Stable demand and similar costs', 'Fewer excuses and disagreements'],
            ['High entry barriers', 'New firms cannot undercut the cartel'],
            ['Organised enforcement (OPEC quotas, trade associations)', 'A formal mechanism to monitor and sanction'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Collusion is illegal in most countries', text: 'Price fixing is a crime in many jurisdictions, with heavy fines. Competition authorities use leniency programmes that exploit the dilemma: the first cartel member to confess receives immunity. That makes each member afraid that another will confess first, a deliberate prisoner’s dilemma that destabilises cartels. This section is educational and describes how cartels fail, not how to run one.' },
      ],
    },
    {
      id: 'entry',
      title: 'Entry, deterrence and commitment',
      blocks: [
        { t: 'p', text: 'An incumbent firm can try to keep rivals out. As the sequential-games guide showed, a threat to fight a price war is not credible if fighting hurts the incumbent more than accommodating. The incumbent needs commitment: spare capacity that makes a price war cheap, long-term contracts, a reputation for fighting, or investments in cost-cutting that cannot be reversed.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Capacity', title: 'Build before they come', body: 'Excess capacity lets the incumbent flood the market quickly if an entrant arrives, which makes the threat believable.' },
            { tag: 'Reputation', title: 'Fight early entrants', body: 'Fighting one entrant may be costly, but it can deter many others (the “chain-store paradox” and its resolutions).' },
            { tag: 'Predatory pricing', title: 'Legal limits', body: 'Pricing below cost to drive out rivals can be illegal if it can be shown to be aimed at monopolising.' },
            { tag: 'Switching costs', title: 'Lock-in', body: 'Making it costly for customers to leave raises the barrier for entrants.' },
          ],
        },
      ],
    },
    {
      id: 'networks',
      title: 'Network effects and platforms',
      blocks: [
        { t: 'p', text: 'Some goods become more valuable the more people use them: a telephone, a marketplace, a social network, a payment system. These **network effects** make markets tip: if one platform gets ahead, users flock to it. Competition is then for the market, not just in the market. This is a coordination game on a large scale, like the choice of a standard.' },
        {
          t: 'table',
          head: ['Strategy', 'Idea', 'Example'],
          rows: [
            ['Subsidise one side', 'Charge one group little or nothing to attract them, and earn from the other side', 'Free social networks funded by advertisers; card payments funded by merchants'],
            ['Seed the network', 'Offer early users strong incentives or bring in a key group', 'Early discounts, partnerships'],
            ['Multi-homing', 'Users on several platforms reduce tipping and market power', 'Drivers who use more than one ride-hailing app'],
            ['Compatibility', 'Connecting networks (interoperability) reduces lock-in', 'Email, mobile number portability'],
            ['Switching cost', 'Making it hard to leave keeps users locked in', 'Contacts and history held by a platform'],
          ],
        },
        { t: 'links', items: [{ path: 'game-theory/classic-games/prisoners-dilemma', note: 'The dilemma behind cartels' }, { path: 'game-theory/dynamics/sequential-games', note: 'Entry deterrence as a game tree' }, { path: 'game-theory/information-and-design/auctions', note: 'Auctions and ad markets' }] },
      ],
    },
  ],
  sources: [
    'Cournot, A. A. (1838). Recherches sur les principes mathématiques de la théorie des richesses.',
    'Bertrand, J. (1883). Review of Cournot. Journal des Savants.',
    'Tirole, J. (1988). The Theory of Industrial Organization. MIT Press.',
    'Rochet, J.-C., and Tirole, J. (2003). Platform competition in two-sided markets. Journal of the European Economic Association.',
    'Shapiro, C., and Varian, H. R. (1999). Information Rules. Harvard Business School Press.',
  ],
  related: ['game-theory/classic-games/prisoners-dilemma', 'game-theory/dynamics/sequential-games', 'game-theory/applications/security-and-technology'],
}

export default guide
