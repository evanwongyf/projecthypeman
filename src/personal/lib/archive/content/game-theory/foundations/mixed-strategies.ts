import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In rock-paper-scissors, any predictable pattern gets exploited. The only stable way to play is to randomise. The same logic governs penalty kicks, serves in tennis, bluffs in poker and the timing of tax audits. A mixed strategy is a deliberate randomisation, and the surprising rule that finds it is the indifference principle: choose your odds so the other player cannot gain by favouring either of their options. This guide explains the idea, computes a mixed equilibrium step by step, and shows it at work in sport and cards.',
  nutshell: [
    'A **mixed strategy** chooses among actions with set probabilities. Randomising prevents others from predicting and exploiting you.',
    'In a mixed equilibrium, each player mixes so that the **other** player is **indifferent** between their options. The odds depend on the opponent’s payoffs, not your own.',
    'Matching pennies is the simplest case: the unique equilibrium is 50:50.',
    'Evidence from professional **penalty kicks** and **tennis serves** shows that top players mix close to equilibrium.',
    'You do not need to randomise consciously in everyday life, but you do need to be **unpredictable where predictability is costly**.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why randomise',
      blocks: [
        { t: 'game-lab', viz: 'payoff', preset: 'pennies' },
        { t: 'p', text: 'In matching pennies, one player wants the coins to match and the other wants them to differ. If you always choose Heads, your opponent learns it and chooses accordingly. Any pattern can be learned. The one policy that cannot be exploited is a fair coin flip. The lab reports this as the mixed equilibrium: each plays Heads half the time.' },
        { t: 'callout', tone: 'note', title: 'Randomising is not being erratic', text: 'A mixed strategy is a precise probability. It is chosen so that the opponent has no better reply. The randomness is the strategy.' },
      ],
    },
    {
      id: 'indiff',
      title: 'The indifference principle',
      blocks: [
        { t: 'p', text: 'Here is the surprising part. If you are going to mix between two actions, you must be willing to take either one, so they must pay you the same, given what the opponent does. Your odds are therefore chosen to make the opponent indifferent, so that they are willing to mix too. Everyone is indifferent among the actions they use, and nobody can improve.' },
        {
          t: 'math',
          tex: 'p^{*} = \\frac{b_{22} - b_{21}}{\\,b_{11} - b_{21} - b_{12} + b_{22}\\,}',
          caption: 'Probability with which the Row player plays the first row so that Column is indifferent between its two columns.',
          plain: 'Row picks the top row with probability p. Column’s expected payoff for Left is p times one number plus (1 minus p) times another. For Right it is the same with different numbers. Set the two equal and solve for p. The result is the formula above.',
          where: [
            { sym: 'p^{*}', def: 'the equilibrium probability that Row plays the top row' },
            { sym: 'b_{ij}', def: 'Column’s payoff when Row plays row i and Column plays column j' },
          ],
          syntax: [
            { sym: 'p^{*}', say: '“p star”: the special value of p that makes Column indifferent.' },
            { sym: 'b_{21}', say: '“b two one”: the payoff to Column in row 2, column 1.' },
            { sym: '\\frac{\\ }{\\ }', say: 'A fraction: top divided by bottom.' },
          ],
          worked: {
            title: 'The game of chicken',
            steps: [
              'Row and Column each choose Swerve or Straight. Column’s payoffs \\(b\\): (Swerve, Swerve) \\(= 0\\); (Swerve, Straight) \\(= 1\\); (Straight, Swerve) \\(= -1\\); (Straight, Straight) \\(= -10\\). Row chooses Swerve with probability \\(p\\).',
              'Column’s expected payoff for Swerve: \\(p \\times 0 + (1-p) \\times (-1) = -(1-p)\\).',
              'Column’s expected payoff for Straight: \\(p \\times 1 + (1-p) \\times (-10) = p - 10(1-p)\\).',
              'Set equal: \\(-(1-p) = p - 10(1-p)\\), so \\(9(1-p) = p\\), so \\(9 = 10p\\).',
            ],
            answer: 'p = 0.9. Row swerves 90 per cent of the time. By symmetry so does Column. Both then crash with probability 0.1 × 0.1 = 1 per cent. Try the chicken preset in the lab to see the same numbers.',
          },
        },
        {
          t: 'steps',
          items: [
            { title: 'Name the probabilities', body: 'Let the row player play the top row with probability p, and the column player the left column with probability q.' },
            { title: 'Make Column indifferent', body: 'Set Column’s expected payoffs for Left and Right equal. This pins down p.' },
            { title: 'Make Row indifferent', body: 'Set Row’s expected payoffs for Up and Down equal. This pins down q.' },
            { title: 'Check', body: 'Both p and q must lie strictly between 0 and 1. If not, the equilibrium is in pure strategies.' },
          ],
        },
      ],
    },
    {
      id: 'sport',
      title: 'Mixing in the real world',
      blocks: [
        {
          t: 'table',
          head: ['Setting', 'What is being mixed', 'What studies found'],
          rows: [
            ['Soccer penalty kicks', 'Kick left or right; goalkeeper dives left or right', 'Palacios-Huerta (2003) found that professional kickers and goalkeepers mixed close to equilibrium: scoring rates were nearly equal for left and right'],
            ['Tennis serves', 'Serve to the forehand or backhand side', 'Walker and Wooders (2001) found top players’ win rates were roughly equal across directions, though they switched too often to look random'],
            ['Poker', 'Bluff or bet for value', 'Strong players balance bluffs and value bets in proportion; see the poker guide'],
            ['Tax audits and security patrols', 'Who is audited or where guards go', 'Randomisation makes it impossible to evade by predicting'],
            ['Sports tactics (run or pass)', 'Offensive play type', 'Evidence is mixed; some studies find play-calling is too predictable'],
          ],
          caption: 'Summaries of published studies. Findings are debated, and some researchers find deviations from perfect mixing.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'A life lesson',
          text: 'You do not need to flip coins. But when a pattern of yours is observed by an adversary who can adapt, whether a competitor, a pickpocket or a negotiator, predictability is a cost. Vary what is cheap to vary.',
        },
        { t: 'links', items: [{ path: 'games/poker/bluffing-and-game-theory', note: 'Bluffing frequencies in poker' }, { path: 'game-theory/classic-games/zero-sum-and-minimax', note: 'Zero-sum games and minimax' }] },
      ],
    },
  ],
  sources: [
    'Palacios-Huerta, I. (2003). Professionals play minimax. Review of Economic Studies.',
    'Walker, M., and Wooders, J. (2001). Minimax play at Wimbledon. American Economic Review.',
    'von Neumann, J. (1928). Zur Theorie der Gesellschaftsspiele. Mathematische Annalen.',
    'Dixit, A., Skeath, S., and Reiley, D. (2015). Games of Strategy (chapter 7).',
  ],
  related: ['game-theory/foundations/nash-equilibrium', 'game-theory/classic-games/zero-sum-and-minimax', 'games/poker/bluffing-and-game-theory'],
}

export default guide
