import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Game theory is the study of choices that depend on other people’s choices. Most of life is like that: whether to cooperate with a colleague, how much to bid at an auction, whether to follow a rule others ignore, how hard to bargain. The theory was born in economics and mathematics, grew through biology and political science, and now touches almost every part of social life. This shelf builds it from nothing, and then uses it to explain how whole societies develop rules, norms and mentalities.',
  nutshell: [
    'A **game** is any situation where your best choice depends on what others choose. “Game” does not mean fun or trivial.',
    'The core tools are the **payoff matrix**, **dominance** and **Nash equilibrium**: a set of choices where nobody gains by changing alone.',
    'Equilibrium is not the same as **best**. In a **dilemma** everyone’s sensible choice leaves everyone worse off.',
    '**Repetition, reputation, punishment and institutions** can turn dilemmas into cooperation, which is how societies work at all.',
    'Real people are not the textbook player. **Behavioural game theory** shows how fairness, trust and bounded thinking change the picture.',
  ],
  sections: [
    {
      id: 'route',
      title: 'How the shelf builds',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Foundations', body: 'What a game is, the payoff matrix, dominance, Nash equilibrium and mixed strategies. Start here if you have never met the subject.' },
            { title: 'The classic games', body: 'The prisoner’s dilemma, coordination games, chicken and zero-sum games: the handful of strategic problems that turn up everywhere.' },
            { title: 'Time, repetition and evolution', body: 'Sequential moves and backward induction, repeated games and the shadow of the future, and strategies that evolve rather than being chosen.' },
            { title: 'Information, bargaining and design', body: 'Hidden information and signalling, negotiation, auctions, voting and how to design rules that produce honest behaviour.' },
            { title: 'Society: rules, norms and mentality', body: 'Commons and public goods, norms as equilibria, trust and punishment, institutions and the state, behavioural game theory and a practical strategic mentality.' },
            { title: 'Applications and limits', body: 'Markets, politics and war, security and technology, and where game theory is weak.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'game-theory/foundations/what-is-a-game', note: 'Start here: the vocabulary' },
            { path: 'game-theory/foundations/dominance-and-the-matrix', note: 'The payoff matrix lab' },
            { path: 'game-theory/classic-games/prisoners-dilemma', note: 'The most famous game' },
            { path: 'game-theory/dynamics/repeated-games', note: 'The tournament lab' },
            { path: 'game-theory/society/norms-as-equilibria', note: 'How rules and conventions arise' },
            { path: 'game-theory/society/strategic-mentality', note: 'Practical habits' },
          ],
        },
      ],
    },
    {
      id: 'labs',
      title: 'The labs',
      blocks: [
        {
          t: 'table',
          head: ['Lab', 'What it lets you do', 'Where'],
          rows: [
            ['Payoff matrix', 'Pick or edit a 2×2 game and see best replies, dominant strategies, Nash equilibria and mixed equilibria', 'Dominance and the matrix; Nash equilibrium; Mixed strategies'],
            ['Tournament', 'Pit strategies such as tit for tat and grim trigger against each other, with or without noise', 'Repeated games'],
            ['Evolution', 'Watch strategies grow and shrink in a population (hawk and dove, dilemma, stag hunt)', 'Evolutionary game theory'],
            ['Schelling model', 'See how mild preferences produce strong segregation, a model of tipping and norms', 'Norms as equilibria'],
          ],
        },
        { t: 'game-lab', viz: 'payoff', preset: 'pd' },
      ],
    },
    {
      id: 'mind',
      title: 'Habits of mind',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: '1', title: 'Look from the other side', body: 'Ask what the other player wants, knows and will do if you do X. Most strategic mistakes are failures to do this.' },
            { tag: '2', title: 'Separate the model from the world', body: 'A model is a map. Use it to sharpen thinking, and check its assumptions against reality.' },
            { tag: '3', title: 'Incentives explain more than intentions', body: 'People respond to what the rules reward. If you want different behaviour, change the rules.' },
            { tag: '4', title: 'Good outcomes need good structure', body: 'Cooperation is rarely a matter of virtue alone. It is held up by repetition, reputation, enforcement and shared expectations.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'About “rational”', text: 'In game theory a rational player simply has consistent preferences and chooses the best option for them given what they expect. It does not mean selfish, cold, or smart in any wider sense. A player can care deeply about others and still be rational.' },
      ],
    },
  ],
  sources: [
    'von Neumann, J., and Morgenstern, O. (1944). Theory of Games and Economic Behavior. Princeton University Press.',
    'Dixit, A., and Nalebuff, B. (1991). Thinking Strategically. W. W. Norton.',
    'Osborne, M. J. (2004). An Introduction to Game Theory. Oxford University Press.',
    'Binmore, K. (2007). Game Theory: A Very Short Introduction. Oxford University Press.',
  ],
  related: ['game-theory/foundations/what-is-a-game', 'game-theory/classic-games/prisoners-dilemma', 'game-theory/society/norms-as-equilibria'],
}

export default guide
