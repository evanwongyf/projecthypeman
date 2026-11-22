import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When players move in turn, seeing what came before, the right way to think is backwards. Start at the end of the game, work out what the last mover would do, and then ask what the player before them should do given that. This is backward induction. It reveals why the order of moves matters, why threats that you would not carry out are worthless, and why a rational person might accept almost nothing in the ultimatum game, while real people refuse. This guide covers game trees, subgame perfect equilibrium and the classic examples.',
  nutshell: [
    'A **game tree** shows who moves when, what they can do and the payoffs at the end of each path.',
    '**Backward induction** solves the game from the last decision to the first, assuming each player will do what is best for them at each point.',
    'An equilibrium that depends on **non-credible threats** is not sensible. **Subgame perfect equilibrium** removes them.',
    'Moving **first** can be an advantage (commitment) or a disadvantage (giving information away).',
    'In experiments, people often depart from backward induction in the **ultimatum** and **centipede** games, showing the role of fairness and limited foresight.',
  ],
  sections: [
    {
      id: 'tree',
      title: 'Game trees and backward induction',
      blocks: [
        { t: 'p', text: 'Picture a game as a tree. The first player chooses a branch. The second player, seeing that choice, chooses a branch from there. At the leaves are the payoffs. To solve it, begin at the nodes just before the leaves. At each, the player who moves picks the option with the highest payoff for them. Replace that node with the resulting payoff, and repeat one step earlier. When you reach the root, you know what the first player should do.' },
        {
          t: 'example',
          title: 'Entry deterrence',
          lines: [
            { label: 'The game', text: 'A new firm (Entrant) decides whether to enter a market. If it stays out, it earns 0 and the Incumbent earns 10. If it enters, the Incumbent decides whether to Fight (a price war) or Accommodate (share the market).' },
            { label: 'Payoffs', text: 'Fight: Entrant −2, Incumbent 2. Accommodate: Entrant 4, Incumbent 5.' },
            { label: 'Backward step', text: 'If the Entrant enters, the Incumbent compares Fight (2) with Accommodate (5) and chooses Accommodate.' },
            { label: 'Forward step', text: 'Knowing that, the Entrant compares staying out (0) with entering (4), and enters.' },
            { label: 'Result', text: 'Entrant enters; Incumbent accommodates (4, 5). The Incumbent’s threat to fight is not credible, since it would hurt the Incumbent itself once entry has happened.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'How an Incumbent can make the threat credible',
          text: 'If the Incumbent could commit in advance, for example by building excess capacity that makes fighting cheap, or by a reputation for fighting every entrant, the threat becomes believable and entry is deterred. Commitment changes the payoffs in the last step.',
        },
      ],
    },
    {
      id: 'spe',
      title: 'Subgame perfection',
      blocks: [
        { t: 'p', text: 'In the entry game, “Entrant stays out, Incumbent would fight if entered” is a Nash equilibrium: the Entrant stays out because it expects a fight, and the Incumbent never has to fight. But it relies on a threat the Incumbent would not carry out. Reinhard Selten proposed **subgame perfect equilibrium**: the strategies must form an equilibrium in every part of the game (every subgame), including parts never reached. That rules out empty threats.' },
        {
          t: 'table',
          head: ['Solution concept', 'Entry game result', 'Comment'],
          rows: [
            ['Nash equilibrium (staying out, Incumbent threatens to fight)', 'Entrant stays out', 'Sustained by a non-credible threat'],
            ['Subgame perfect equilibrium', 'Entrant enters, Incumbent accommodates', 'Each player acts in their interest at every point'],
          ],
        },
      ],
    },
    {
      id: 'ultimatum',
      title: 'The ultimatum game',
      blocks: [
        { t: 'p', text: 'A Proposer is given 100 and proposes a split with a Responder. If the Responder accepts, both get their shares. If not, both get nothing. Backward induction says: a Responder prefers any positive amount to zero, so the Proposer should offer the smallest possible amount, say 1, and keep 99. Real people do not behave like that.' },
        {
          t: 'table',
          head: ['Finding', 'Typical result'],
          rows: [
            ['What Proposers offer', 'Most offer 40 to 50 per cent of the pot'],
            ['What Responders do', 'Offers below about 20 per cent are rejected about half of the time, even though refusing means they get nothing'],
            ['Cross-cultural variation', 'In a study of 15 small-scale societies (Henrich and colleagues, 2001), average offers ranged from about 26 per cent (Machiguenga, Peru) to 58 per cent (Lamalera whale hunters, Indonesia), reflecting local norms of cooperation and exchange'],
            ['Stakes', 'Raising the stakes (even to months of wages) reduces rejections of low offers only somewhat'],
            ['Brain activity', 'Unfair offers activate regions linked with disgust and conflict, such as the anterior insula'],
          ],
          caption: 'Summaries of published experiments; results vary by sample and setup.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Is that irrational?',
          text: 'Not necessarily. Rejecting an unfair offer is costly punishment, and a willingness to punish is a reputation-protecting commitment, rational once payoffs include fairness. Proposers who anticipate rejection offer more. It shows that the payoffs in a model must include what people actually care about.',
        },
      ],
    },
    {
      id: 'centipede',
      title: 'The centipede game and the limits of backward induction',
      blocks: [
        { t: 'p', text: 'Two players alternate. At each turn, the mover can Take the pot or Pass, which grows it. Passing is good for both if the other also passes; but if the other takes the pot at the next step, the passer ends up with less than they would have got by taking now. Backward induction says Take at the very first move, since at the last step the mover will take, so the one before should take, and so on. Players actually pass many times.' },
        {
          t: 'list',
          items: [
            'In experiments by McKelvey and Palfrey (1992), very few games ended at the first node; many passed several times.',
            'Explanations: some players are altruistic or trusting; players doubt that the other is fully rational; and noise makes passing less costly than the model suggests.',
            'Chess grandmasters playing the centipede game take earlier, closer to the theory (Palacios-Huerta and Volij, 2009), suggesting that familiarity with backward reasoning matters.',
          ],
        },
      ],
    },
    {
      id: 'order',
      title: 'Does moving first help?',
      blocks: [
        {
          t: 'table',
          head: ['Game type', 'First mover', 'Why'],
          rows: [
            ['Commitment games (chicken, entry deterrence)', 'Advantage', 'Moving first lets you commit and shape the other’s reply'],
            ['Bargaining with a take-it-or-leave-it offer', 'Advantage', 'The proposer sets the terms'],
            ['Rock-paper-scissors, guessing games', 'Disadvantage', 'The second mover can respond to what you did'],
            ['Cournot competition', 'Slight advantage (Stackelberg)', 'The leader can choose a large output that the follower must accommodate'],
            ['Auctions with sequential bids', 'Disadvantage', 'Later bidders see more information'],
          ],
        },
        { t: 'links', items: [{ path: 'game-theory/classic-games/chicken-and-brinkmanship', note: 'Credible threats and commitment' }, { path: 'game-theory/information-and-design/bargaining', note: 'Bargaining as a sequential game' }, { path: 'game-theory/society/behavioural-game-theory', note: 'What experiments show' }] },
      ],
    },
  ],
  sources: [
    'Selten, R. (1965). Spieltheoretische Behandlung eines Oligopolmodells mit Nachfrageträgheit. Zeitschrift für die gesamte Staatswissenschaft.',
    'Güth, W., Schmittberger, R., and Schwarze, B. (1982). An experimental analysis of ultimatum bargaining. Journal of Economic Behavior and Organization.',
    'Henrich, J., et al. (2001). In search of homo economicus: behavioral experiments in 15 small-scale societies. American Economic Review.',
    'McKelvey, R. D., and Palfrey, T. R. (1992). An experimental study of the centipede game. Econometrica.',
    'Palacios-Huerta, I., and Volij, O. (2009). Field centipedes. American Economic Review.',
  ],
  related: ['game-theory/classic-games/chicken-and-brinkmanship', 'game-theory/information-and-design/bargaining', 'game-theory/society/behavioural-game-theory'],
}

export default guide
