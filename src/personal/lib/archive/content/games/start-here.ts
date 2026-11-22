import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Blackjack, poker and Mahjong are three of the deepest games people play for money, and all three reward the same underlying skill: knowing the probability of what happens next better than the person across the table. This shelf teaches the complete rules of each first, then the maths that turns a beginner into someone who plays close to optimally.',
  nutshell: [
    'Every game starts with its **full rule set and winning conditions**, nothing is assumed, down to exactly what beats what and when a hand ends.',
    '**Blackjack** has a single mathematically "solved" basic strategy chart; playing it exactly is the biggest lever any player has, bigger than any superstition or "feel" about the table.',
    '**Poker** is not solved the way blackjack is, it rewards decisions under uncertainty: pot odds, outs, and (at a deeper level) game-theory-optimal bluffing frequencies that cannot be exploited.',
    '**Mahjong** is a race to complete one of several precise tile patterns before anyone else, scored by how rare and skillful the pattern is, its maths is mostly combinatorics and probability, not betting theory.',
    'Every page links real diagrams you can interact with: a full basic strategy chart, a card-counting simulator, a poker odds calculator, a bluffing-frequency tool, and Mahjong tile and hand explorers.',
  ],
  sections: [
    {
      id: 'route',
      title: 'A route through the shelf',
      blocks: [
        { t: 'p', text: 'Each game is covered in the same order: rules and winning conditions first (so you can actually play), then the maths that explains correct strategy, in increasing depth. If you already know how to play, skip straight to the strategy and probability pages.' },
        {
          t: 'links',
          items: [
            { path: 'games/blackjack/rules-and-variants', note: 'Start here for blackjack: every rule, every variant, every way to win or lose' },
            { path: 'games/poker/rules-and-hand-rankings', note: "Start here for poker: Texas hold'em's rules and the full hand-ranking ladder" },
            { path: 'games/mahjong/rules-and-tiles', note: 'Start here for Mahjong: the 136-tile set and how a hand is played' },
            { path: 'games/tetris/basics', note: 'Start here for Tetris: the pieces, rotation and controls, then stacking, T-spins and strategy' },
          ],
        },
        {
          t: 'table',
          head: ['Game', 'What decides the winner', 'What the maths optimises'],
          rows: [
            ['Blackjack', 'Whoever is closest to 21 without going over, dealer vs each player individually', 'A fixed chart of hit/stand/double/split decisions that minimises the house edge to roughly 0.5%'],
            ['Poker', "Best hand at showdown, or everyone else folding first, it's as much about betting as card strength", 'Pot odds, outs and (at the highest level) unexploitable bluffing frequencies'],
            ['Mahjong', 'First to complete a valid 14-tile winning shape, scored by its rarity and difficulty', 'Tile efficiency (which tiles bring a hand closest to complete) and reading what opponents are collecting'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'This is a teaching shelf, not a betting guide', text: 'Figures on this shelf (house edges, odds, expected values) are for understanding the maths, not a guarantee of winning, blackjack and poker are played for real money in many places and carry real financial risk; Mahjong is traditionally played for small stakes or none at all. Nothing here is advice to gamble, and several pages explain exactly why the house or the variance usually wins in the long run regardless of skill.' },
      ],
    },
  ],
  sources: [],
  related: ['games/blackjack/rules-and-variants', 'games/poker/rules-and-hand-rankings', 'games/mahjong/rules-and-tiles'],
}

export default guide
