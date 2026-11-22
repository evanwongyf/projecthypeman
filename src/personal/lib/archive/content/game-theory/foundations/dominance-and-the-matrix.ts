import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The payoff matrix is the workhorse of game theory: a table with one player’s options down the side, the other’s across the top, and the payoffs for each combination in the cells. Two ideas let you solve many games on sight. A best reply is the option that does best against a particular choice by the other. A dominant strategy is one that is best whatever the other does. This guide teaches you to read a matrix and to solve simple games by elimination, with a lab to practise.',
  nutshell: [
    'In a matrix, the **row player’s** payoff is listed first in each cell and the **column player’s** second.',
    'A player’s **best reply** to a given choice by the other is the option that gives them the highest payoff against it.',
    'A strategy is **dominant** if it beats the alternatives whatever the other does; **dominated** if some other strategy always does at least as well.',
    'A rational player never plays a **strictly dominated** strategy. Removing such strategies, repeatedly, can solve a game (**iterated elimination**).',
    'If both players have a dominant strategy, the outcome is clear: this is the case in the **prisoner’s dilemma**.',
  ],
  sections: [
    {
      id: 'read',
      title: 'Reading a matrix',
      blocks: [
        { t: 'p', text: 'Try the lab. Each cell shows (row payoff, column payoff). A blue underline marks the row player’s best reply in that column; a pink underline marks the column player’s best reply in that row. A cell with both underlines is a Nash equilibrium, which the next guide explains. Start on the prisoner’s dilemma.' },
        { t: 'game-lab', viz: 'payoff', preset: 'pd' },
        {
          t: 'steps',
          items: [
            { title: 'Fix the other player’s choice', body: 'Imagine the column player picks the first column. Look down that column only.' },
            { title: 'Find your best reply', body: 'As the row player, compare your payoffs (the first numbers) in that column and pick the biggest.' },
            { title: 'Repeat for every choice', body: 'Do the same for each column. The set of your best replies is your “reaction” to everything the other might do.' },
            { title: 'Do the same for the other player', body: 'Fix a row, look along it, and find the column player’s best reply using the second numbers.' },
          ],
        },
      ],
    },
    {
      id: 'dominance',
      title: 'Dominance',
      blocks: [
        {
          t: 'table',
          head: ['Term', 'Meaning', 'Example'],
          rows: [
            ['Strictly dominant strategy', 'Better than every alternative, whatever the other player does', 'Defect in the prisoner’s dilemma'],
            ['Weakly dominant strategy', 'At least as good in every case and better in some', 'Bidding your true value in a second-price auction'],
            ['Strictly dominated strategy', 'Some other strategy is always better; a rational player never uses it', 'Cooperate in the one-shot prisoner’s dilemma'],
          ],
        },
        {
          t: 'example',
          title: 'Solving by iterated elimination',
          lines: [
            { label: 'The game', text: 'Row chooses Up, Middle or Down; Column chooses Left or Right. Row payoffs: Up gives 3 or 1, Middle gives 2 or 4, Down gives 1 or 0 (Left, Right). Column payoffs: Up gives 2 or 3, Middle gives 1 or 2, Down gives 3 or 1.' },
            { label: 'Step 1', text: 'Down gives Row 1 and 0 where Up gives 3 and 1. Down is always worse than Up, so it is strictly dominated. Delete Down.' },
            { label: 'Step 2', text: 'With Up and Middle left, Column compares Left (2 against 1) and Right (3 against 2). Right is better in both rows, so Left is dominated. Delete Left.' },
            { label: 'Step 3', text: 'Only Right remains. Row compares Up (1) and Middle (4) in that column, so Middle is better.' },
            { label: 'Result', text: 'Row plays Middle, Column plays Right. Payoffs (4, 2). No guesswork was needed, only the idea that no one plays a dominated strategy.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Why elimination can fail', text: 'Many games have no dominated strategies, so elimination does nothing. And it assumes common knowledge that everyone is rational and will eliminate. Experiments show people often do not go through more than a couple of steps. The next guide gives a more general solution concept.' },
      ],
    },
    {
      id: 'try',
      title: 'Try it yourself',
      blocks: [
        { t: 'game-lab', viz: 'payoff', preset: 'custom' },
        {
          t: 'checklist',
          items: [
            'Choose “Your own game” and set the payoffs so that Row has a dominant strategy but Column does not.',
            'Now make both players have dominant strategies, and check that the outcome lands in one cell.',
            'Make a game where the dominant-strategy outcome is worse for both players than another cell: you have built a prisoner’s dilemma.',
            'Make a game with no dominant strategies for either player. Which equilibria remain?',
          ],
        },
        { t: 'links', items: [{ path: 'game-theory/foundations/nash-equilibrium', note: 'Next: Nash equilibrium' }, { path: 'game-theory/classic-games/prisoners-dilemma', note: 'The dilemma in depth' }] },
      ],
    },
  ],
  sources: [
    'Osborne, M. J. (2004). An Introduction to Game Theory (chapter 2).',
    'Dixit, A., Skeath, S., and Reiley, D. (2015). Games of Strategy, 4th edition. W. W. Norton (chapters 3 and 4).',
    'Luce, R. D., and Raiffa, H. (1957). Games and Decisions. Wiley.',
  ],
  related: ['game-theory/foundations/what-is-a-game', 'game-theory/foundations/nash-equilibrium', 'game-theory/classic-games/prisoners-dilemma'],
}

export default guide
