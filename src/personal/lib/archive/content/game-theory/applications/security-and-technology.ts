import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Security is an adversarial game: defenders must protect many things, attackers need find only one weakness, and each side adapts to the other. Game theory has become a practical tool here. It guides where to place patrols, how to price and design systems so that honest behaviour pays, how spam and fraud evolve, why blockchains need incentives as well as cryptography, and how multi-agent artificial intelligence learns to compete and cooperate. This guide surveys those uses at a conceptual level.',
  nutshell: [
    '**Security games** model a defender who commits to a (randomised) allocation of limited resources and an attacker who observes it and picks a target: a **Stackelberg game**.',
    'Randomised patrols and inspections, computed by game theory, have been used at airports and ports.',
    'Spam, fraud and malware are **arms races**: attackers adapt to defences, which changes the payoffs for both.',
    '**Blockchains** rely on **incentives** (rewards and penalties) so that honest participation is the best reply. “Selfish mining” shows the limits.',
    '**AI**: generative adversarial networks are zero-sum games, and poker and game-playing systems compute approximate equilibria by self-play.',
  ],
  sections: [
    {
      id: 'stack',
      title: 'Security games: commit, then the attacker responds',
      blocks: [
        { t: 'p', text: 'A defender has a few guards and many targets. An attacker can watch and learn the pattern. If the defender patrols the most valuable target every time, the attacker goes elsewhere. If the defender is predictable, the attacker exploits it. The solution: commit to a randomised pattern that covers valuable targets more often but not always, chosen so that the attacker’s best reply still leaves the defender as well off as possible. In a Stackelberg game the leader (defender) moves first and the follower (attacker) best-responds.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Randomise', title: 'Unpredictable, not erratic', body: 'The mix is computed from the value of each target and the cost of an attack, so more valuable targets get more attention, but none get zero.' },
            { tag: 'Commit', title: 'Announce the policy', body: 'The attacker can learn the policy over time, so the defence must be robust to being observed. Commitment helps the defender.' },
            { tag: 'Applications', title: 'In use', body: 'Systems based on these ideas have been used to schedule patrols at Los Angeles International Airport (ARMOR), the US Coast Guard in ports (PROTECT) and federal air marshals, work associated with Milind Tambe’s research group.' },
            { tag: 'Caveat', title: 'Models are simplified', body: 'Real attackers are not perfectly rational and values are uncertain, so the approach is combined with human judgement.' },
          ],
        },
      ],
    },
    {
      id: 'cyber',
      title: 'Cybersecurity as a game',
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'Game-theoretic reading'],
          rows: [
            ['Patching vulnerabilities', 'Defenders face a cost to patch now; attackers move fast after disclosure. Timing and disclosure rules change the payoffs'],
            ['Security investment', 'Each firm’s security spills over to others (externalities); if a weak link is enough, everyone under-invests, a public goods problem'],
            ['Spam and phishing', 'The attacker’s cost per message is tiny, so even very low response rates pay. Defences work by raising the cost or cutting the payoff'],
            ['Bug bounties', 'Pay finders for reporting, so reporting beats selling or ignoring; the price must compete with the black market'],
            ['Deception (honeypots)', 'Defenders plant traps; attackers must consider whether a target is real: a signalling game'],
            ['Insurance', 'Moral hazard if insured firms take less care; underwriters use screening'],
          ],
        },
        { t: 'links', items: [{ path: 'cybersecurity/maths-and-reasoning/attacker-economics', note: 'Attacker economics and game theory' }, { path: 'cybersecurity/start-here', note: 'The cybersecurity shelf' }] },
      ],
    },
    {
      id: 'chain',
      title: 'Blockchains and incentive design',
      blocks: [
        { t: 'p', text: 'A public blockchain has no central authority. Participants are anonymous and may be selfish. It works only if following the protocol is each participant’s best strategy: mechanism design with cryptography. Miners or validators receive rewards for adding valid blocks, and (in proof-of-stake systems) lose deposits for cheating.' },
        {
          t: 'table',
          head: ['Mechanism', 'Incentive', 'Weakness studied'],
          rows: [
            ['Block rewards and fees', 'Honest block-building earns rewards', 'Selfish mining: Eyal and Sirer (2014) showed a large miner could gain by withholding blocks, so honesty is not always the best reply'],
            ['Stake and slashing', 'Validators lose deposits if they sign conflicting blocks', 'Requires that penalties exceed gains and that cheating is provable'],
            ['Fees and congestion', 'A bidding game for limited block space', 'Auction design affects user costs'],
            ['Governance', 'Token holders vote on rules', 'Voting power concentration; low participation (a public goods problem)'],
          ],
          caption: 'Described conceptually; this is an educational summary, not investment advice.',
        },
      ],
    },
    {
      id: 'ai',
      title: 'Multi-agent AI and learning in games',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'GANs', title: 'A zero-sum game', body: 'In a generative adversarial network (Goodfellow and colleagues, 2014), a generator tries to fool a discriminator, which tries to tell fakes from real data. Training is a minimax game, and its difficulty reflects how hard such games are to solve.' },
            { tag: 'Self-play', title: 'Learning by playing itself', body: 'Programs for chess, Go and poker improve by playing against copies of themselves, converging towards equilibrium play in zero-sum games.' },
            { tag: 'Poker AI', title: 'Counterfactual regret', body: 'Libratus (2017) and Pluribus (2019) beat professional poker players by computing approximate equilibrium strategies with counterfactual regret minimisation, handling hidden information and bluffing.' },
            { tag: 'Cooperation', title: 'Multi-agent cooperation', body: 'Research asks how artificial agents can learn to cooperate in mixed-motive games (social dilemmas), and how to align their incentives with human ones.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The AI alignment link', text: 'Incentive design matters for AI too: a system that optimises a poorly specified reward will exploit loopholes, just as an agent in a badly designed mechanism will. Mechanism design and AI safety share a theme: you get what the rules reward, not what you hoped.' },
        { t: 'links', items: [{ path: 'game-theory/information-and-design/mechanism-design-and-matching', note: 'Mechanism design' }, { path: 'game-theory/foundations/mixed-strategies', note: 'Randomisation' }, { path: 'ai/start-here', note: 'The AI shelf' }] },
      ],
    },
  ],
  sources: [
    'Tambe, M. (2011). Security and Game Theory: Algorithms, Deployed Systems, Lessons Learned. Cambridge University Press.',
    'Eyal, I., and Sirer, E. G. (2014). Majority is not enough: Bitcoin mining is vulnerable. Financial Cryptography.',
    'Goodfellow, I., et al. (2014). Generative adversarial nets. Advances in Neural Information Processing Systems.',
    'Brown, N., and Sandholm, T. (2018). Superhuman AI for heads-up no-limit poker: Libratus beats top professionals. Science.',
    'Anderson, R. (2020). Security Engineering, 3rd edition. Wiley (economics of security).',
  ],
  related: ['cybersecurity/maths-and-reasoning/attacker-economics', 'game-theory/information-and-design/mechanism-design-and-matching', 'ai/start-here'],
}

export default guide
