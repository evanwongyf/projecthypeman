import type { Guide } from '../../../guide'

const mb1 = (q: number) => Math.max(30 - q, 0)
const mb2 = (q: number) => Math.max(20 - q, 0)
const mb3 = (q: number) => Math.max(10 - q, 0)

const guide: Guide = {
  intro:
    'Some goods break the basic logic of markets. Once a country is defended, everyone in it is defended; once a fireworks show lights the sky, everyone can watch. No one can be shut out, and one person enjoying it does not leave less for others. Other resources, like fish in the open sea, can be used up but not easily fenced off. This guide sorts goods by two properties (rivalry and excludability), derives how much of a public good is efficient, shows why voluntary contributions fall short (the free-rider problem) and why shared resources get overused (the tragedy of the commons), and reviews the solutions, from taxes to Elinor Ostrom’s evidence that communities often manage commons well on their own.',
  nutshell: [
    'Goods differ by **rivalry** (does my use reduce yours?) and **excludability** (can non-payers be kept out?).',
    '**Public goods** are non-rival and non-excludable: defence, clean air, basic research, a lighthouse’s beam.',
    'The efficient amount satisfies the **Samuelson condition**: the **sum** of everyone’s marginal benefits equals marginal cost.',
    'Because no one can be excluded, people **free ride**, and voluntary provision falls short.',
    '**Common-pool resources** are rival but non-excludable, so open access leads to overuse (**tragedy of the commons**). Fixes: quotas, tradable rights, taxes, or community rules (**Ostrom**).',
  ],
  sections: [
    {
      id: 'types',
      title: 'Four kinds of good',
      lead: 'Rivalry and excludability.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Excludable', 'Non-excludable'],
          rows: [
            ['Rival', 'Private goods: a bowl of laksa, a T-shirt, a car', 'Common-pool resources: fish in the sea, groundwater, a free road at rush hour'],
            ['Non-rival', 'Club goods: a streaming service, a toll road off-peak, a gym, a patent', 'Public goods: national defence, flood barriers, fireworks, basic research, herd immunity'],
          ],
          caption: 'Most real goods sit near, not exactly in, a box. A road is non-rival when empty and rival when jammed. Technology moves goods between boxes: encrypted TV signals made broadcasting excludable; electronic road pricing made roads excludable.',
        },
        {
          t: 'terms',
          items: [
            { term: 'Rivalry', def: 'One person’s use reduces what is available to others. The marginal cost of serving one more user is positive.' },
            { term: 'Excludability', def: 'It is feasible to prevent people who have not paid from using the good.' },
            { term: 'Free rider', def: 'Someone who benefits from a good without paying for it, because they cannot be excluded.' },
            { term: 'Common-pool resource', def: 'A rival, hard-to-exclude resource that can be depleted by overuse.' },
          ],
        },
      ],
    },
    {
      id: 'samuelson',
      title: 'How much of a public good? The Samuelson condition',
      lead: 'Add marginal benefits vertically.',
      blocks: [
        { t: 'p', text: 'For a private good, each person buys their own quantity, so market demand adds quantities across people (horizontal summation). A public good is consumed jointly: every street light lights the street for everyone at once. So the value of one more light is the **sum** of what it is worth to each resident: the curves are added vertically.' },
        {
          t: 'math',
          tex: String.raw`\sum_{i=1}^{n} MB_i(G) = MC(G)`,
          plain: 'Provide one more unit of the public good as long as its total value to everyone together is at least its cost. Paul Samuelson stated this in 1954.',
          syntax: [
            { sym: String.raw`G`, say: 'The quantity of the public good.' },
            { sym: String.raw`\sum_{i=1}^{n} MB_i(G)`, say: 'Add up every person’s marginal benefit at G.' },
          ],
          where: [
            { sym: 'MB_i', def: 'Person i’s marginal benefit from one more unit' },
            { sym: 'MC', def: 'The marginal cost of one more unit' },
          ],
          worked: {
            title: 'Street lights for three households',
            steps: [
              String.raw`Marginal benefits: \(30 - G\), \(20 - G\) and \(10 - G\) dollars a year per light (never below zero). Each light costs $30 a year.`,
              String.raw`For \(G \le 10\), the sum is \(60 - 3G\). Set \(60 - 3G = 30\): \(G = 10\).`,
              String.raw`At \(G = 10\) the third household values the 10th light at $0, so check the next segment: for \(10 < G \le 20\), the sum is \(50 - 2G < 30\). So \(G^* = 10\).`,
              String.raw`Alone, even the keenest household values its first light at \(30 - 1 = \$29\), less than the $30 it costs, and the others value it at less. Acting alone, nobody buys any.`,
            ],
            why: ['individual valuations', 'vertical sum equals cost', 'check the kink where a curve hits zero', 'private provision falls far short'],
            answer: 'Ten lights are efficient: together the three households value the first light at $57 and the tenth at $30, its cost. Left to individual purchase, none get bought.',
          },
        },
        {
          t: 'plot',
          title: 'Vertical summation of marginal benefits',
          x: [0, 32],
          y: [0, 65],
          xLabel: 'street lights',
          yLabel: '$ per light per year',
          curves: [
            { f: mb1, label: 'household 1' },
            { f: mb2, label: 'household 2' },
            { f: mb3, label: 'household 3' },
            { f: (g: number) => mb1(g) + mb2(g) + mb3(g), label: 'sum: social marginal benefit' },
            { f: () => 30, label: 'marginal cost', dashed: true },
          ],
          points: [{ x: 10, y: 30, label: 'G* = 10' }],
          caption: 'The social curve kinks wherever one household’s benefit reaches zero. The efficient quantity is where it crosses marginal cost.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Lindahl prices: } \tau_i = MB_i(G^*), \qquad \sum_i \tau_i = MC`,
          plain: 'One theoretical fix charges each person a personal price equal to their marginal benefit at the efficient level. Everyone would then agree on G*. The catch: people have every reason to understate their benefit to pay less, so the true values are hard to discover.',
          syntax: [{ sym: String.raw`\tau_i`, say: 'Read "tau i": person i’s share of the cost per unit.' }],
          worked: {
            steps: [
              String.raw`At \(G^* = 10\): \(MB_1 = 20\), \(MB_2 = 10\), \(MB_3 = 0\).`,
              String.raw`Lindahl prices: $20, $10 and $0 per light, adding to $30.`,
            ],
            why: ['each household’s value of the last light', 'cost shares that sum to the cost'],
            answer: 'Household 1 pays two-thirds, household 2 one-third, household 3 nothing, and all three want exactly 10 lights. If household 1 claimed to care less, it would pay less: the incentive to lie is the free-rider problem in another form.',
          },
        },
      ],
    },
    {
      id: 'free-riding',
      title: 'Free riding and the public goods game',
      lead: 'Why voluntary contributions fall short, and what keeps them up.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\pi_i = (E - c_i) + \frac{m}{n}\sum_{j=1}^{n} c_j, \qquad \frac{\partial \pi_i}{\partial c_i} = -1 + \frac{m}{n} < 0 \;\text{ when } m < n`,
          plain: 'In the public goods game, each of n players gets an endowment E and chooses how much to put into a common pot. The pot is multiplied by m and shared equally. Each dollar you contribute returns only m/n dollars to you but m/n to every other player. If m is less than n, contributing loses you money, so the selfish best move is to give nothing, even though everyone giving everything would make all better off.',
          syntax: [
            { sym: String.raw`m/n`, say: 'The marginal per-capita return: what you personally get back for each dollar you put in.' },
            { sym: String.raw`\sum_j c_j`, say: 'Total contributions by everyone.' },
          ],
          where: [
            { sym: 'E', def: 'Each player’s endowment' },
            { sym: 'c_i', def: 'Player i’s contribution' },
            { sym: 'm', def: 'The multiplier on the pot (1 < m < n)' },
            { sym: 'n', def: 'Number of players' },
          ],
          worked: {
            title: 'Four players, $20 each, pot × 1.6',
            steps: [
              String.raw`Each $1 contributed returns \(1.6/4 = \$0.40\) to the contributor.`,
              String.raw`Everyone contributes $20: pot \(80 \times 1.6 = 128\), each gets $32.`,
              String.raw`Everyone contributes 0: each keeps $20.`,
              String.raw`Three contribute $20, one free rides: pot \(60 \times 1.6 = 96\), each share $24. Contributors end with $24, the free rider with \(20 + 24 = \$44\).`,
            ],
            why: ['the private return per dollar', 'full cooperation', 'the Nash equilibrium', 'the temptation'],
            answer: 'Full cooperation pays $32 each, but each player does better by free riding ($44), so the equilibrium is $20 each. It is a many-player prisoner’s dilemma.',
          },
        },
        { t: 'game-lab', viz: 'payoff', preset: 'pd' },
        {
          t: 'bars',
          title: 'What people actually do in public goods experiments (typical pattern)',
          unit: '% of endowment contributed',
          items: [
            { label: 'Round 1, no punishment', value: 50, group: 'Standard game' },
            { label: 'Round 10, no punishment', value: 10 },
            { label: 'Round 1, peer punishment allowed', value: 60, group: 'With punishment' },
            { label: 'Round 10, peer punishment allowed', value: 85 },
          ],
          min: 0,
          max: 100,
          caption: 'Stylised from the experimental literature (Ledyard 1995; Fehr and Gächter 2000). People start by giving about half, far more than the selfish prediction, then contributions decay as cooperators see others free ride. When players can pay to punish free riders, contributions rise instead. Many people are conditional cooperators: they give if others do.',
        },
      ],
    },
    {
      id: 'commons',
      title: 'The tragedy of the commons',
      lead: 'Open access dissipates the prize.',
      blocks: [
        { t: 'p', text: 'Garrett Hardin (1968) imagined a pasture open to all herders. Each extra cow gives its owner the full gain but spreads the cost of overgrazing across everyone, so each herder keeps adding cows until the pasture is ruined. Fisheries are the modern example: each boat that joins catches fish but also leaves fewer fish, and lower catch rates, for every other boat.' },
        {
          t: 'math',
          tex: String.raw`\text{catch } H(N) = 100N - N^2, \quad \text{cost per boat } 20: \qquad \underbrace{\frac{H}{N} = 20}_{\text{open access}} \quad\text{vs}\quad \underbrace{H'(N) = 20}_{\text{optimum}}`,
          plain: 'Under open access, boats keep entering while the average catch per boat covers a boat’s cost: entry stops only when profit is zero. The efficient fleet stops where the marginal boat’s extra catch, after accounting for what it takes from others, just covers its cost.',
          syntax: [
            { sym: String.raw`H(N)`, say: 'Total catch (worth $1 a tonne) from N boats. It rises, then falls, as the stock is depleted.' },
            { sym: String.raw`H/N`, say: 'Average catch per boat.' },
            { sym: String.raw`H'(N)`, say: 'Marginal catch: the extra total catch from one more boat.' },
          ],
          worked: {
            steps: [
              String.raw`Average catch per boat: \(100 - N\). Open access: \(100 - N = 20\), so \(N = 80\). Total catch 1,600, total cost 1,600, profit 0.`,
              String.raw`Marginal catch: \(H'(N) = 100 - 2N\). Optimum: \(100 - 2N = 20\), so \(N = 40\). Catch 2,400, cost 800, profit (resource rent) 1,600.`,
              String.raw`At 80 boats, the marginal boat adds \(100 - 160 = -60\): it reduces the total catch.`,
            ],
            why: ['entry until average revenue equals cost', 'marginal catch equals cost', 'the overfishing signal'],
            answer: 'Open access doubles the fleet, cuts the total catch by a third and wipes out a resource rent of $1,600 a year. Half the boats would catch more fish at a quarter of the total cost of the larger fleet.',
          },
        },
        {
          t: 'plot',
          title: 'A fishery under open access and under management',
          x: [0, 100],
          y: [0, 2700],
          xLabel: 'boats N',
          yLabel: '$ a year',
          curves: [
            { f: (n: number) => 100 * n - n * n, label: 'total catch (revenue)' },
            { f: (n: number) => 20 * n, label: 'total cost', dashed: true },
          ],
          points: [
            { x: 40, y: 2400, label: 'optimum: 40 boats' },
            { x: 80, y: 1600, label: 'open access: 80 boats' },
          ],
          segments: [{ from: [40, 800], to: [40, 2400], label: 'rent 1,600', color: '#2f9e6e' }],
          caption: 'The vertical gap between revenue and cost is the rent the fishery can earn. Open access piles in boats until the gap closes.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Grand Banks cod', tag: 'collapse, 1992', body: 'The Newfoundland cod stock collapsed after decades of overfishing, and Canada imposed a moratorium in 1992 that put tens of thousands out of work. The stock has still not fully recovered.' },
            { title: 'Individual transferable quotas', tag: 'Iceland, New Zealand', body: 'Set a total allowable catch and divide it into tradable shares. Owners gain from a healthy stock, the race to fish ends, and the fleet shrinks to its efficient size by trading. Studies associate catch shares with far lower collapse rates.' },
            { title: 'Congestion', tag: 'roads as a commons', body: 'An unpriced road at rush hour is a commons: each driver slows everyone else but pays only for their own time. Singapore prices it: see [ERP](@economics/market-failure/singapore-cars-roads-carbon).' },
            { title: 'The global atmosphere', tag: 'the biggest commons', body: 'Each country gains fully from cheap fossil energy but bears only its share of global warming, which is why climate agreements are so hard to make stick.' },
          ],
        },
      ],
    },
    {
      id: 'solutions',
      title: 'Solutions, including Ostrom’s',
      lead: 'Governments, markets and communities.',
      blocks: [
        {
          t: 'mindmap',
          center: 'Providing public goods and managing commons',
          branches: [
            { label: 'Government provision', tone: 'teal', items: ['taxes pay for defence, roads, research', 'compulsion overcomes free riding'] },
            { label: 'Make it excludable', tone: 'orange', items: ['tolls, subscriptions', 'turns a public good into a club good'] },
            { label: 'Property rights', tone: 'mustard', items: ['tradable fishing quotas', 'water rights'] },
            { label: 'Prices', tone: 'lavender', items: ['congestion charges', 'resource taxes'] },
            { label: 'Assurance contracts', tone: 'pink', items: ['crowdfunding: pay only if the target is met'] },
            { label: 'Community rules', tone: 'mint', items: ['Ostrom: monitoring, graduated sanctions', 'local knowledge'] },
          ],
        },
        {
          t: 'list',
          ordered: true,
          items: [
            '**Clear boundaries**: who may use the resource, and what the resource is, are well defined.',
            '**Rules fit local conditions**: limits on time, place and technology match the resource.',
            '**Those affected help make the rules.**',
            '**Monitoring** by users themselves or by people accountable to them.',
            '**Graduated sanctions**: small penalties for first offences, rising for repeat ones.',
            '**Cheap conflict resolution**: quick, local ways to settle disputes.',
            '**Outside authorities recognise** the community’s right to organise.',
            '**Nested layers** of organisation for large systems.',
          ],
        },
        { t: 'p', text: 'Elinor Ostrom, who shared the 2009 Nobel Prize in economics, studied Swiss alpine meadows, Japanese forests, Spanish irrigation systems and Maine lobster fisheries that had been managed sustainably for generations without either privatisation or central control. The eight design principles above are what the long-lived ones shared. Her work showed that the tragedy of the commons is a risk, not a law.' },
        { t: 'callout', tone: 'fact', title: 'The lighthouse', text: 'Textbooks long used the lighthouse as the classic public good no market would supply. Ronald Coase (1974) found that many British lighthouses were built and run privately, paid for by dues collected from ships at port. Excluding non-payers from the light was impossible, but excluding them from the harbour was not. Clever institutions can sometimes tie a public good to a private one.' },
      ],
    },
  ],
  sources: [
    'Samuelson, P. A. (1954). The pure theory of public expenditure. *Review of Economics and Statistics*, 36(4), 387–389.',
    'Hardin, G. (1968). The tragedy of the commons. *Science*, 162(3859), 1243–1248.',
    'Ostrom, E. (1990). *Governing the Commons: The Evolution of Institutions for Collective Action*. Cambridge University Press.',
    'Fehr, E., and Gächter, S. (2000). Cooperation and punishment in public goods experiments. *American Economic Review*, 90(4), 980–994.',
    'Ledyard, J. O. (1995). Public goods: A survey of experimental research. In J. Kagel and A. Roth (Eds.), *Handbook of Experimental Economics*. Princeton University Press.',
    'Coase, R. H. (1974). The lighthouse in economics. *Journal of Law and Economics*, 17(2), 357–376.',
    'Costello, C., Gaines, S. D., and Lynham, J. (2008). Can catch shares prevent fisheries collapse? *Science*, 321(5896), 1678–1681.',
  ],
  related: ['economics/market-failure/externalities', 'game-theory/society/social-dilemmas-and-the-commons', 'economics/market-failure/singapore-cars-roads-carbon'],
}

export default guide
