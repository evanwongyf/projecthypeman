import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most games have no dominant strategies, so something stronger is needed. John Nash’s answer (1950) is an equilibrium: a combination of choices such that no player can do better by changing their own choice while everyone else keeps theirs. It is the most used idea in the whole subject. This guide explains it in plain language, shows how to find equilibria in a matrix, and makes three points that people often miss: an equilibrium need not be good, there can be several, and it is a statement about stability, not about what people ought to do.',
  nutshell: [
    'A **Nash equilibrium** is a set of strategies, one for each player, where each strategy is a **best reply** to the others. Nobody gains by switching alone.',
    'To find pure equilibria in a matrix: mark each player’s best replies; a cell with **both marks** is an equilibrium.',
    'An equilibrium can be **bad for everyone** (prisoner’s dilemma). It may also be **one of several** (stag hunt, battle of the sexes), which raises the question of how people choose.',
    'Every finite game has at least one Nash equilibrium, possibly in **mixed strategies**.',
    'Equilibrium is a **consistency** idea: if everyone expects it, everyone is content to play it. It says nothing about how people got there.',
  ],
  sections: [
    {
      id: 'idea',
      title: 'The idea',
      blocks: [
        { t: 'p', text: 'Imagine each player writes their strategy on a card. The cards are an equilibrium if, were you to peek at everyone else’s cards, you would not want to change yours. That is the whole definition. If the cards are not an equilibrium, at least one player would regret their card once they saw the others, which suggests the situation is unstable.' },
        {
          t: 'math',
          tex: 'u_i(s_i^{*}, s_{-i}^{*}) \\ge u_i(s_i, s_{-i}^{*}) \\quad \\text{for every player } i \\text{ and every strategy } s_i',
          caption: 'The condition for a profile s* to be a Nash equilibrium.',
          plain: 'Take a set of choices, one per player. Pick any one player. Hold everyone else’s choice fixed. If that player cannot get a higher payoff by switching to some other choice, they are content. If every player is content in this sense, the set of choices is a Nash equilibrium.',
          where: [
            { sym: 'i', def: 'a player' },
            { sym: 's_i^{*}', def: 'the strategy player i uses in the candidate equilibrium' },
            { sym: 's_{-i}^{*}', def: 'the strategies of everyone except i in the candidate equilibrium' },
            { sym: 'u_i', def: 'player i’s payoff' },
          ],
          syntax: [
            { sym: 's_{-i}', say: '“s minus i”: the choices of all players other than i.' },
            { sym: '\\ge', say: '“is greater than or equal to”. The equilibrium strategy does at least as well as any alternative.' },
            { sym: '\\text{for every}', say: 'The inequality must hold for all players and for all their possible alternative strategies, not just some.' },
          ],
          worked: {
            title: 'Checking a prisoner’s dilemma cell',
            steps: [
              'Payoffs (row, column): both cooperate \\((3,3)\\); row cooperates and column defects \\((0,5)\\); row defects and column cooperates \\((5,0)\\); both defect \\((1,1)\\).',
              'Test (Defect, Defect). Row gets \\(1\\). If Row switched to Cooperate while Column defects, Row would get \\(0\\), which is less. So Row will not switch.',
              'By symmetry, Column also gets \\(1\\) and would get \\(0\\) by switching. So neither wants to switch.',
              'Test (Cooperate, Cooperate). Row gets \\(3\\). If Row switched to Defect while Column cooperates, Row would get \\(5\\), more than 3. So Row would switch.',
            ],
            answer: '(Defect, Defect) is the only Nash equilibrium. (Cooperate, Cooperate) is not, even though it is better for both: each would be tempted to deviate.',
          },
        },
      ],
    },
    {
      id: 'find',
      title: 'Finding equilibria',
      blocks: [
        { t: 'game-lab', viz: 'payoff', preset: 'stag' },
        {
          t: 'steps',
          items: [
            { title: 'Mark the row player’s best replies', body: 'In each column, underline the largest row payoff.' },
            { title: 'Mark the column player’s best replies', body: 'In each row, underline the largest column payoff.' },
            { title: 'Look for cells with both marks', body: 'Each is a pure-strategy Nash equilibrium. There may be none, one, or several.' },
            { title: 'If none, look for a mixed equilibrium', body: 'The next guide shows how to randomise so each player is indifferent.' },
          ],
        },
        {
          t: 'table',
          head: ['Game', 'Pure equilibria', 'Comment'],
          rows: [
            ['Prisoner’s dilemma', 'One: (Defect, Defect)', 'Unique, and worse than the cooperative cell'],
            ['Stag hunt', 'Two: (Stag, Stag) and (Hare, Hare)', 'One is better for both; the other is safer'],
            ['Battle of the sexes', 'Two: (Opera, Opera) and (Football, Football)', 'Each player prefers a different one'],
            ['Chicken', 'Two: (Swerve, Straight) and (Straight, Swerve)', 'Each prefers to be the one who goes straight'],
            ['Matching pennies', 'None in pure strategies', 'Only a 50:50 mix is stable'],
          ],
        },
      ],
    },
    {
      id: 'warnings',
      title: 'Three warnings',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Not best', title: 'Equilibria can be bad', body: 'Nash equilibrium means no one wants to move alone. It does not mean the result is efficient. Arms races, overfishing and traffic jams are equilibria that nobody likes.' },
            { tag: 'Many', title: 'There can be several', body: 'When there are many equilibria, theory alone cannot say which will occur. Culture, history, communication and “focal points” fill the gap. See coordination games.' },
            { tag: 'Stability', title: 'It is a test, not a recipe', body: 'Equilibrium tells you which outcomes are self-consistent. It does not tell you how players reach them, or what they would do if they started elsewhere.' },
            { tag: 'Reality', title: 'Real people differ', body: 'In experiments, behaviour is often close to equilibrium after practice, and often far from it at first. Treat equilibrium as a benchmark.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Nash’s theorem', text: 'In 1950 Nash proved that every game with a finite number of players and strategies has at least one equilibrium, if mixed strategies are allowed. This guarantees that the idea is never empty. He shared the 1994 Nobel Memorial Prize in Economics with John Harsanyi and Reinhard Selten.' },
        { t: 'links', items: [{ path: 'game-theory/foundations/mixed-strategies', note: 'Next: randomising' }, { path: 'game-theory/classic-games/coordination-and-focal-points', note: 'When there are several equilibria' }] },
      ],
    },
  ],
  sources: [
    'Nash, J. F. (1950). Equilibrium points in n-person games. Proceedings of the National Academy of Sciences.',
    'Nash, J. F. (1951). Non-cooperative games. Annals of Mathematics.',
    'Osborne, M. J. (2004). An Introduction to Game Theory (chapter 2).',
    'Nasar, S. (1998). A Beautiful Mind. Simon and Schuster (biography; read critically as popular history).',
  ],
  related: ['game-theory/foundations/dominance-and-the-matrix', 'game-theory/foundations/mixed-strategies', 'game-theory/classic-games/coordination-and-focal-points'],
}

export default guide
