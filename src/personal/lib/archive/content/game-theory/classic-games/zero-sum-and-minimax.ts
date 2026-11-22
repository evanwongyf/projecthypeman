import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The first game-theory result was about pure conflict. In a zero-sum game, whatever one player wins the other loses: chess, a penalty shootout, a poker hand between two players. John von Neumann proved in 1928 that such games have a well-defined value, and that each player can guarantee at least that value by playing a careful, possibly randomised, strategy: the minimax theorem. This guide explains the idea and why zero-sum thinking is a poor guide to trade and cooperation, where both sides can gain.',
  nutshell: [
    'In a **zero-sum game** the payoffs add to zero (or a constant): one player’s gain is exactly the other’s loss.',
    'The **minimax** principle: choose the strategy that **maximises your worst-case payoff**. In a zero-sum game, both players doing this reach an equilibrium.',
    '**Von Neumann’s theorem**: every finite two-player zero-sum game has a **value** and optimal (possibly mixed) strategies.',
    'A **saddle point** is a cell that is the smallest in its row and largest in its column: a pure-strategy solution.',
    '**Most of life is not zero-sum.** Trade, cooperation and learning create value. Treating them as zero-sum is a common and costly error.',
  ],
  sections: [
    {
      id: 'idea',
      title: 'Pure conflict',
      blocks: [
        { t: 'p', text: 'In a zero-sum game there is nothing to cooperate on. Every gain for you is a loss for the other. That makes strategy simple to state: assume the opponent is out to hurt you as much as possible, and pick the option that leaves you best off against that. If you protect yourself against the worst case, there is nothing the opponent can do to take more.' },
        {
          t: 'table',
          head: ['Game', 'Zero-sum?', 'Why'],
          rows: [
            ['Chess, Go, tennis', 'Yes', 'One player wins, the other loses'],
            ['Two-player poker', 'Yes (ignoring the house rake)', 'Chips move from one player to the other'],
            ['Penalty kick', 'Yes', 'A goal for the kicker is a loss for the keeper'],
            ['International trade', 'No', 'Both countries can gain from exchange'],
            ['A negotiation over a joint project', 'No', 'There is common interest in making the pie bigger'],
            ['War', 'Rarely', 'Both sides usually lose from destruction; “winning” may not pay'],
          ],
        },
      ],
    },
    {
      id: 'minimax',
      title: 'The minimax idea',
      blocks: [
        {
          t: 'math',
          tex: 'v = \\max_{s_1} \\min_{s_2} u_1(s_1, s_2) = \\min_{s_2} \\max_{s_1} u_1(s_1, s_2)',
          caption: 'Von Neumann’s minimax theorem for a two-player zero-sum game, allowing mixed strategies.',
          plain: 'Player 1 asks: for each of my strategies, what is the worst the opponent can do to me? Then picks the strategy whose worst case is best. Player 2 does the mirror. The surprising fact is that these two numbers are the same. That shared number is the value of the game.',
          where: [
            { sym: 'v', def: 'the value of the game: what Player 1 can guarantee and Player 2 can hold them to' },
            { sym: 'u_1', def: 'Player 1’s payoff (Player 2’s is its negative)' },
            { sym: 's_1, s_2', def: 'the strategies of Players 1 and 2' },
          ],
          syntax: [
            { sym: '\\max_{s_1}', say: '“the maximum over s one”: pick the s₁ that makes the thing after it as big as possible.' },
            { sym: '\\min_{s_2}', say: '“the minimum over s two”: the opponent picks the s₂ that makes it as small as possible.' },
            { sym: '\\max\\min = \\min\\max', say: 'It does not matter who commits first, if mixed strategies are allowed. That is the theorem.' },
          ],
          worked: {
            title: 'A saddle point',
            steps: [
              'Row chooses a row, Column chooses a column. Row’s payoffs: row A is \\(3, 5\\); row B is \\(2, 1\\) (columns L, R).',
              'Row’s worst case in A is \\(\\min(3,5)=3\\); in B it is \\(\\min(2,1)=1\\). The best worst case is \\(\\max(3,1)=3\\), by playing A.',
              'Column wants to minimise Row’s payoff. Column’s worst case in L is \\(\\max(3,2)=3\\); in R it is \\(\\max(5,1)=5\\). The best is \\(\\min(3,5)=3\\), by playing L.',
              'Both numbers are 3, and the cell (A, L) is the smallest in its row and largest in its column: a saddle point.',
            ],
            answer: 'The value of the game is 3. Row plays A, Column plays L, in pure strategies, and neither can do better. If the numbers did not match, the solution would need mixed strategies.',
          },
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Why it matters',
          text: 'Minimax gives a guarantee that does not depend on guessing what the opponent will do. This idea underlies chess engines (alpha-beta search), and the poker programs that now beat professionals compute approximately minimax strategies for huge games.',
        },
      ],
    },
    {
      id: 'mixed',
      title: 'When there is no saddle point',
      blocks: [
        { t: 'p', text: 'Rock-paper-scissors has no saddle point: whatever you pick, a counter exists. The only guarantee comes from randomising equally among the three, which yields a value of zero. Matching pennies is the 2×2 version. In general you can find the optimal mix with the indifference method from the mixed-strategies guide.' },
        { t: 'game-lab', viz: 'payoff', preset: 'pennies' },
        {
          t: 'dodont',
          do: ['Use minimax when facing a genuine adversary and you want a guarantee.', 'Randomise where predictability is costly.', 'Check whether the situation is really zero-sum before using this logic.'],
          dont: ['Treat negotiation or trade as zero-sum.', 'Assume the opponent will play optimally; if they are weak, exploiting them can earn more than minimax.', 'Forget that “winning” may cost more than the prize.'],
        },
      ],
    },
    {
      id: 'zerosum-fallacy',
      title: 'The zero-sum fallacy',
      blocks: [
        { t: 'p', text: 'A common mistake is to see all interactions as zero-sum: if you gain, I lose. In trade, a farmer who exchanges grain for tools gains, and so does the toolmaker. In learning, my knowing something does not stop you from knowing it. Innovation, trust and cooperation create value. Game theory’s main practical lesson is to ask whether there is something to gain together, and to see competition and cooperation as often present at once.' },
        { t: 'callout', tone: 'tip', title: 'Co-opetition', text: 'Brandenburger and Nalebuff’s term for strategic situations that combine both: firms compete for customers while cooperating on standards, or suppliers and buyers share the gains from a better product. Ask “where can we expand the pie?” before “how do we split it?”' },
        { t: 'links', items: [{ path: 'game-theory/foundations/mixed-strategies', note: 'The indifference method' }, { path: 'game-theory/information-and-design/bargaining', note: 'Splitting a pie that can grow' }, { path: 'games/poker/bluffing-and-game-theory', note: 'Minimax in poker' }] },
      ],
    },
  ],
  sources: [
    'von Neumann, J. (1928). Zur Theorie der Gesellschaftsspiele. Mathematische Annalen.',
    'von Neumann, J., and Morgenstern, O. (1944). Theory of Games and Economic Behavior.',
    'Brandenburger, A. M., and Nalebuff, B. J. (1996). Co-opetition. Doubleday.',
    'Brown, N., and Sandholm, T. (2019). Superhuman AI for multiplayer poker. Science.',
  ],
  related: ['game-theory/foundations/mixed-strategies', 'game-theory/information-and-design/bargaining', 'games/poker/bluffing-and-game-theory'],
}

export default guide
