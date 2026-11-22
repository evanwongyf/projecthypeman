import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Before any equations, you need the vocabulary. A game, in the technical sense, has players who choose actions, the actions lead to outcomes, and each player has preferences over the outcomes. That is enough to describe a surprising range of life: two shops pricing, two countries arming, two drivers on a narrow road. This guide defines the pieces carefully, explains what “rational” means (and does not), and shows the main ways of writing a game down.',
  nutshell: [
    'A game has **players**, **strategies** (complete plans of action), **payoffs** (how much each outcome is worth to each player) and **information** (who knows what, and when).',
    '**Payoffs** capture preferences, not just money. They can include fairness, reputation, kindness or effort.',
    '“**Rational**” means choosing the option you expect to serve your goals best. It does not mean selfish or all-knowing.',
    'Games can be **simultaneous** (choose without seeing the other’s choice) or **sequential**, **one-shot** or **repeated**, **zero-sum** or **mixed-motive**, with **complete** or **incomplete** information.',
    'Two ways to draw a game: the **normal form** (a payoff matrix) and the **extensive form** (a game tree).',
  ],
  sections: [
    {
      id: 'parts',
      title: 'The parts of a game',
      blocks: [
        {
          t: 'table',
          head: ['Part', 'What it is', 'Example: two shops choosing prices'],
          rows: [
            ['Players', 'The decision makers', 'Shop A and Shop B'],
            ['Actions or strategies', 'What each can do. A strategy is a complete plan, saying what to do in every situation that could arise', 'Charge a high price or a low price'],
            ['Payoffs', 'Numbers showing how good each outcome is for each player', 'Profit: both high gives 10 each; both low gives 4 each; one undercutting gives 14 and 2'],
            ['Information', 'What each player knows when choosing, including about the others', 'Neither sees the other’s price until both have set them'],
            ['Timing', 'Who moves when, and how often', 'Both choose once, at the same time'],
            ['Rules', 'What is allowed, and what happens as a result', 'Customers buy from the cheaper shop'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Strategy versus action', text: 'In a one-move game they are the same thing. In a game with several moves, a strategy is a full plan: “open with cooperation, and if the other defects, defect next time”. This matters because threats and promises are parts of strategies.' },
      ],
    },
    {
      id: 'payoffs',
      title: 'Payoffs and utility',
      blocks: [
        { t: 'p', text: 'A payoff is a number that represents how much a player values an outcome. Economists call it **utility**. It is a way of recording preferences, so it can include anything people care about: money, time, status, kindness to others, a clear conscience. Only the order of the numbers (and, with risk, how much bigger one is than another) matters. Doubling every payoff in a game does not change what rational players do.' },
        {
          t: 'math',
          tex: 'EU(a) = \\sum_{s} p(s)\\, u(a,s)',
          caption: 'Expected utility of an action a when the outcome depends on an uncertain state s.',
          plain: 'When you do not know exactly what will happen, you weigh each possible result by how likely it is. Add the weighted values up and you get one number for each action. A rational player picks the action with the highest number.',
          where: [
            { sym: 'a', def: 'an action you could take' },
            { sym: 's', def: 'a possible state of the world (for example, what the other player does)' },
            { sym: 'p(s)', def: 'the probability you give to state s' },
            { sym: 'u(a,s)', def: 'the payoff you get from action a if state s occurs' },
          ],
          syntax: [
            { sym: 'EU(a)', say: '“the expected utility of a”. A name for the number we are computing for action a.' },
            { sym: '\\sum_{s}', say: '“the sum over all s”. Add up one term for every possible state s.' },
            { sym: 'p(s)\\,u(a,s)', say: '“p of s times u of a and s”. Multiply a state’s probability by its payoff.' },
          ],
          worked: {
            title: 'Bring an umbrella?',
            steps: [
              'There are two states: rain with probability \\(0.3\\), and dry with probability \\(0.7\\).',
              'If you take an umbrella, you are slightly inconvenienced either way: payoff \\(8\\) if rain, \\(6\\) if dry.',
              'If you leave it, payoff is \\(0\\) if rain and \\(10\\) if dry.',
              '\\(EU(\\text{take}) = 0.3 \\times 8 + 0.7 \\times 6 = 2.4 + 4.2 = 6.6\\).',
              '\\(EU(\\text{leave}) = 0.3 \\times 0 + 0.7 \\times 10 = 0 + 7 = 7.0\\).',
            ],
            answer: 'Leaving the umbrella has the higher expected utility (7.0 against 6.6), so it is the rational choice with these numbers. If the chance of rain rose to 0.5, taking it would win (7.0 against 5.0).',
          },
        },
      ],
    },
    {
      id: 'rationality',
      title: 'What “rational” does and does not mean',
      blocks: [
        {
          t: 'dodont',
          do: ['Read it as “consistent and goal-directed”: you choose what you think serves your preferences best.', 'Remember preferences can be generous, moral or odd.', 'Keep in mind that rationality is about the choice given beliefs, not about the beliefs being right.'],
          dont: ['Read it as selfishness, coldness or greed.', 'Assume players are geniuses or never make mistakes.', 'Assume the model’s payoffs are the real ones. Getting the payoffs right is half the work.'],
        },
        {
          t: 'table',
          head: ['Level of assumption', 'Meaning', 'Used for'],
          rows: [
            ['Rationality', 'Each player chooses their best option given their beliefs', 'Basic prediction'],
            ['Common knowledge of rationality', 'Everyone is rational, knows everyone is, knows that everyone knows, and so on', 'Iterated elimination and backward induction'],
            ['Bounded rationality', 'Players have limited attention, memory and computing ability', 'Behavioural models, rules of thumb'],
          ],
        },
      ],
    },
    {
      id: 'forms',
      title: 'Kinds of game',
      blocks: [
        {
          t: 'table',
          head: ['Dimension', 'Option one', 'Option two'],
          rows: [
            ['Timing', 'Simultaneous: choices made without seeing the others (rock-paper-scissors)', 'Sequential: players move in turn, seeing earlier moves (chess)'],
            ['Repetition', 'One-shot: played once', 'Repeated: the same game played many times'],
            ['Interests', 'Zero-sum: one gains exactly what the other loses', 'Mixed-motive (non-zero-sum): there is both conflict and common interest'],
            ['Information', 'Complete: everyone knows everyone’s payoffs', 'Incomplete: some hidden information (like private values at an auction)'],
            ['Cooperation', 'Non-cooperative: no binding agreements', 'Cooperative: players can make binding agreements and form coalitions'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Normal form', title: 'The payoff matrix', body: 'A table listing each player’s strategies and the payoffs for every combination. Best for simultaneous games with two players. You will use it throughout this shelf.' },
            { tag: 'Extensive form', title: 'The game tree', body: 'A branching diagram showing who moves when, what they know and what follows. Best for sequential games and for seeing threats and promises.' },
          ],
        },
        { t: 'links', items: [{ path: 'game-theory/foundations/dominance-and-the-matrix', note: 'Next: the payoff matrix and dominance' }, { path: 'game-theory/dynamics/sequential-games', note: 'Game trees, later' }] },
      ],
    },
  ],
  sources: [
    'von Neumann, J., and Morgenstern, O. (1944). Theory of Games and Economic Behavior.',
    'Osborne, M. J. (2004). An Introduction to Game Theory. Oxford University Press (chapters 1 and 2).',
    'Gintis, H. (2009). The Bounds of Reason: Game Theory and the Unification of the Behavioral Sciences. Princeton University Press.',
  ],
  related: ['game-theory/start-here', 'game-theory/foundations/dominance-and-the-matrix', 'game-theory/foundations/nash-equilibrium'],
}

export default guide
