import type { ArchiveNode } from '../topics'

// Game theory from first principles to the study of society: how rational (and not quite
// rational) agents choose when their payoffs depend on each other, and how rules, norms,
// trust and institutions arise as solutions to strategic problems. Written for a reader who
// has never met the subject; interactive labs let you try the ideas.

export const GAME_THEORY: ArchiveNode = {
  slug: 'game-theory',
  title: 'Game theory & social strategy',
  blurb: 'How people, firms and nations choose when each choice depends on the others: dominance, Nash equilibrium, dilemmas, trust and punishment, bargaining, auctions, evolution, and how rules, norms and mentalities emerge as solutions, with labs you can run.',
  glyph: '♟',
  color: 'color-mix(in srgb, var(--lavender) 50%, var(--teal))',
  tags: ['game theory', 'nash equilibrium', 'prisoners dilemma', 'strategy', 'cooperation', 'norms', 'society', 'bargaining', 'auction', 'evolution', 'behavioural economics', 'mechanism design'],
  children: [
    { slug: 'start-here', title: 'Start here', blurb: 'What game theory is, how the shelf builds from a single choice to whole societies, and the labs to try as you go.', minutes: 7, glyph: '★', tags: ['beginner', 'overview', 'roadmap'] },
    {
      slug: 'foundations',
      title: 'Foundations',
      group: 'Building blocks',
      blurb: 'Games, players, strategies and payoffs; dominance; Nash equilibrium; mixed strategies, with a payoff-matrix lab.',
      glyph: '▦',
      tags: ['payoff matrix', 'dominance', 'nash', 'mixed strategy', 'rationality'],
      children: [
        { slug: 'what-is-a-game', title: 'What counts as a game', blurb: 'Players, actions, payoffs, information and rules; rational choice, utility and what “rational” does and does not assume.', minutes: 11, tags: ['utility', 'rationality', 'payoff', 'common knowledge'] },
        { slug: 'dominance-and-the-matrix', title: 'The payoff matrix and dominance', blurb: 'Reading a payoff matrix, best replies, dominant and dominated strategies, and iterated elimination, with the payoff lab.', minutes: 12, tags: ['dominance', 'best response', 'matrix', 'elimination'] },
        { slug: 'nash-equilibrium', title: 'Nash equilibrium', blurb: 'The central idea: a profile of strategies where nobody gains by changing alone. How to find one, why it is not always best, and when there are many.', minutes: 13, tags: ['nash', 'equilibrium', 'best response', 'multiple equilibria'] },
        { slug: 'mixed-strategies', title: 'Mixed strategies: randomising on purpose', blurb: 'Why randomising can be optimal, the indifference principle, and how to compute a mixed equilibrium, with penalty kicks and poker as examples.', minutes: 12, tags: ['mixed strategy', 'randomise', 'indifference', 'penalty kicks', 'minimax'] },
      ],
    },
    {
      slug: 'classic-games',
      title: 'The classic games',
      blurb: 'The prisoner’s dilemma, stag hunt, chicken, battle of the sexes and zero-sum games: the handful of strategic problems that turn up everywhere.',
      glyph: '♜',
      tags: ['prisoners dilemma', 'stag hunt', 'chicken', 'battle of the sexes', 'zero-sum', 'coordination'],
      children: [
        { slug: 'prisoners-dilemma', title: 'The prisoner’s dilemma', blurb: 'Why individually rational choices can make everyone worse off, real examples from arms races to pollution, and what changes the outcome.', minutes: 12, tags: ['prisoners dilemma', 'defect', 'cooperate', 'social dilemma'] },
        { slug: 'coordination-and-focal-points', title: 'Coordination games and focal points', blurb: 'Stag hunt, battle of the sexes, driving on the left, and Schelling’s focal points: how people pick the same answer without talking.', minutes: 12, tags: ['coordination', 'stag hunt', 'focal point', 'schelling', 'convention'] },
        { slug: 'chicken-and-brinkmanship', title: 'Chicken, threats and brinkmanship', blurb: 'The game of who blinks first, commitment, credible and empty threats, the Cuban missile crisis and the strategy of tying your own hands.', minutes: 12, tags: ['chicken', 'brinkmanship', 'commitment', 'credible threat', 'deterrence'] },
        { slug: 'zero-sum-and-minimax', title: 'Zero-sum games and the minimax theorem', blurb: 'Pure conflict, saddle points, von Neumann’s minimax theorem, and why sports and poker are different from trade.', minutes: 11, tags: ['zero-sum', 'minimax', 'von neumann', 'saddle point'] },
      ],
    },
    {
      slug: 'dynamics',
      title: 'Time, repetition and evolution',
      group: 'Beyond one shot',
      blurb: 'Games played in sequence and games played again and again: backward induction, repeated play, reputations and evolutionary stability, with the tournament and evolution labs.',
      glyph: '⟳',
      tags: ['sequential', 'repeated game', 'backward induction', 'evolution', 'tit for tat', 'axelrod'],
      children: [
        { slug: 'sequential-games', title: 'Sequential games and backward induction', blurb: 'Game trees, subgame perfection, first-mover advantage, the ultimatum and centipede games, and why thinking backwards works (and sometimes fails).', minutes: 13, tags: ['game tree', 'backward induction', 'subgame perfect', 'ultimatum', 'centipede'] },
        { slug: 'repeated-games', title: 'Repeated games and the shadow of the future', blurb: 'Why cooperation can be an equilibrium when you meet again: grim trigger, tit for tat, discounting, the folk theorem and Axelrod’s tournaments, with the tournament lab.', minutes: 14, tags: ['repeated game', 'tit for tat', 'axelrod', 'folk theorem', 'discount factor', 'reputation'] },
        { slug: 'evolutionary-game-theory', title: 'Evolutionary game theory', blurb: 'Strategies without thinking: evolutionarily stable strategies, hawk and dove, replicator dynamics and the evolution of cooperation, with the evolution lab.', minutes: 13, tags: ['ess', 'hawk dove', 'replicator', 'maynard smith', 'evolution of cooperation'] },
      ],
    },
    {
      slug: 'information-and-design',
      title: 'Information, bargaining and design',
      blurb: 'What happens when players know different things; how to bargain, auction and match; and how to design the rules so self-interest produces good outcomes.',
      glyph: '⚖',
      tags: ['signalling', 'asymmetric information', 'auction', 'bargaining', 'mechanism design', 'matching', 'lemons'],
      children: [
        { slug: 'incomplete-information', title: 'Incomplete information, signalling and screening', blurb: 'Bayesian games, adverse selection (the market for lemons), costly signals, screening, cheap talk and reputation.', minutes: 14, tags: ['bayesian game', 'signalling', 'screening', 'lemons', 'adverse selection', 'moral hazard', 'cheap talk'] },
        { slug: 'bargaining', title: 'Bargaining and negotiation', blurb: 'Nash bargaining, Rubinstein’s alternating offers, outside options, patience and the practical lessons for negotiating well.', minutes: 12, tags: ['bargaining', 'negotiation', 'batna', 'rubinstein', 'nash bargaining'] },
        { slug: 'auctions', title: 'Auctions', blurb: 'English, Dutch, first-price and second-price auctions, the winner’s curse, bid shading, revenue equivalence and real auction design.', minutes: 13, tags: ['auction', 'vickrey', 'winners curse', 'bidding', 'revenue equivalence'] },
        { slug: 'mechanism-design-and-matching', title: 'Mechanism design and matching', blurb: 'Designing games to get honest answers: incentive compatibility, the revelation principle, Gale-Shapley matching and organ exchange.', minutes: 12, tags: ['mechanism design', 'matching', 'gale-shapley', 'incentive compatible', 'kidney exchange', 'school choice'] },
        { slug: 'voting-and-collective-choice', title: 'Voting, power and collective choice', blurb: 'Condorcet’s paradox, Arrow’s theorem, the median voter, strategic voting and who really has power in a committee.', minutes: 12, tags: ['voting', 'arrow', 'condorcet', 'median voter', 'shapley value', 'power index'] },
      ],
    },
    {
      slug: 'society',
      title: 'Society: rules, norms and mentality',
      group: 'Game theory and society',
      blurb: 'How whole societies solve the dilemmas of living together: commons and public goods, norms and conventions as equilibria, trust, reputation, punishment and institutions, and the mentalities that go with them.',
      glyph: '🏛',
      color: 'color-mix(in srgb, var(--pink) 40%, var(--mustard))',
      tags: ['society', 'norms', 'institutions', 'commons', 'trust', 'punishment', 'conventions', 'culture', 'ostrom'],
      children: [
        { slug: 'social-dilemmas-and-the-commons', title: 'Social dilemmas, public goods and the commons', blurb: 'The tragedy of the commons, public goods games, free riding, Olson’s logic of collective action and Ostrom’s principles for governing shared resources.', minutes: 14, tags: ['commons', 'public goods', 'free rider', 'ostrom', 'olson', 'collective action'] },
        { slug: 'norms-as-equilibria', title: 'Norms, conventions and rules as equilibria', blurb: 'Lewis on convention, Schelling on tipping, why rules persist when most people follow them, and how norms can lock in even bad outcomes. Includes the Schelling segregation model.', minutes: 14, tags: ['norms', 'convention', 'equilibrium', 'tipping', 'schelling', 'segregation', 'lock-in'] },
        { slug: 'trust-reputation-and-punishment', title: 'Trust, reputation and punishment', blurb: 'Direct and indirect reciprocity, gossip and reputation, costly punishment, strong reciprocity, and what cross-cultural experiments show about fairness.', minutes: 14, tags: ['trust', 'reputation', 'punishment', 'reciprocity', 'gossip', 'strong reciprocity', 'fairness'] },
        { slug: 'institutions-and-the-state', title: 'Institutions, law and the state', blurb: 'Hobbes, the social contract and the state as a solution to a dilemma, enforcement, third-party rules, corruption traps and why institutions differ.', minutes: 13, tags: ['institutions', 'hobbes', 'social contract', 'state', 'enforcement', 'corruption', 'rule of law'] },
        { slug: 'behavioural-game-theory', title: 'Real minds: behavioural game theory', blurb: 'What experiments show: fairness, reciprocity, bounded rationality, level-k thinking, framing, loss aversion, and the gap between the textbook player and a person.', minutes: 13, tags: ['behavioural', 'bounded rationality', 'level-k', 'fairness', 'prospect theory', 'experiments'] },
        { slug: 'strategic-mentality', title: 'A strategic mentality: practical habits', blurb: 'Turning the theory into habits: see the other side’s incentives, change the game, commit credibly, build reputation, and ethics. A practical toolkit with worked examples.', minutes: 13, tags: ['mentality', 'strategy', 'negotiation', 'commitment', 'incentives', 'ethics', 'practical'] },
      ],
    },
    {
      slug: 'applications',
      title: 'Applications',
      group: 'In the world',
      blurb: 'Game theory at work: markets and firms, politics and war, biology, technology and security, and a critique of its limits.',
      glyph: '🌐',
      tags: ['oligopoly', 'cournot', 'war', 'deterrence', 'biology', 'security', 'platforms', 'critique'],
      children: [
        { slug: 'markets-and-firms', title: 'Markets, competition and firms', blurb: 'Cournot and Bertrand competition, price wars, cartels and why they collapse, entry deterrence, network effects and platform strategy.', minutes: 13, tags: ['cournot', 'bertrand', 'oligopoly', 'cartel', 'entry', 'network effects'] },
        { slug: 'politics-war-and-deterrence', title: 'Politics, war and deterrence', blurb: 'Arms races, nuclear deterrence and the logic of mutual destruction, bargaining and war, the security dilemma and alliances.', minutes: 13, tags: ['deterrence', 'arms race', 'security dilemma', 'war', 'alliance', 'mad'] },
        { slug: 'security-and-technology', title: 'Security, technology and AI', blurb: 'Attacker and defender games, Stackelberg security games, spam and fraud, blockchains and incentives, multi-agent AI and adversarial learning.', minutes: 12, tags: ['security games', 'stackelberg', 'blockchain', 'ai', 'adversarial', 'mechanism'] },
        { slug: 'limits-and-critiques', title: 'Limits, critiques and how to use it well', blurb: 'What game theory cannot do: unrealistic assumptions, equilibrium selection, ethics, misuse, and how to hold the models lightly.', minutes: 10, tags: ['critique', 'limits', 'models', 'ethics', 'assumptions'] },
      ],
    },
  ],
}
