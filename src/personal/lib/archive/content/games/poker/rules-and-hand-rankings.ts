import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    "Texas hold'em is the poker variant behind most televised poker and the game almost everyone means by just \"poker\" today. Its rules are simple to state, two private cards, five shared cards, best five-card hand wins, but the betting that surrounds them is where almost all of the skill lives.",
  nutshell: [
    'Each player gets **two private "hole" cards**; five shared **"community" cards** are dealt face up in the middle across four betting rounds.',
    'The best hand uses **any 5 of the 7 available cards** (2 hole + 5 community), you can even play the board if the community cards alone beat anything you could make with your hole cards.',
    'Betting happens **four times per hand**: before the flop, after the flop (3 cards), after the turn (1 more card), and after the river (1 final card).',
    'A hand ends either at **showdown** (best 5-card hand wins the pot) or earlier if **everyone else folds**, in which case the last remaining player wins without ever showing their cards.',
    'Hand rankings go from **high card** (weakest) to **royal flush** (strongest), ten categories, each with an exact, calculable probability.',
  ],
  sections: [
    {
      id: 'setup-and-blinds',
      title: 'Setup, the button and blinds',
      blocks: [
        { t: 'p', text: 'A dealer button (a marker, not necessarily an actual dealer) rotates one seat clockwise after every hand, determining betting order. The two players immediately to the button’s left post forced bets before any cards are seen, called blinds, which seed the pot so there is always something worth fighting for.' },
        {
          t: 'table',
          head: ['Position', 'What they post', 'Why'],
          rows: [
            ['Small blind', 'A forced bet, typically half the big blind', 'Ensures there is money in the pot before anyone sees their cards'],
            ['Big blind', 'A forced bet, typically double the small blind', 'Sets the minimum bet size for the first round'],
            ['Everyone else', 'Nothing yet', 'They only put money in if they choose to call, bet or raise'],
          ],
          caption: 'The blinds rotate with the button every hand, so over time every player pays their fair share of forced bets.',
        },
      ],
    },
    {
      id: 'the-four-rounds',
      title: 'The four betting rounds',
      blocks: [
        {
          t: 'flow',
          title: "A hand of Texas hold'em, start to finish",
          nodes: [
            { label: 'Pre-flop', sub: 'everyone gets 2 private hole cards, then a round of betting starting left of the big blind', tone: 'process' },
            { label: 'The flop', sub: '3 community cards dealt face up at once, then another betting round', tone: 'process' },
            { label: 'The turn', sub: 'a 4th community card, then another betting round', tone: 'process' },
            { label: 'The river', sub: 'the 5th and final community card, then a final betting round', tone: 'process' },
            { label: 'Showdown (or everyone else folds)', sub: 'remaining players reveal; best 5-card hand from the 7 available wins', tone: 'output' },
          ],
        },
        {
          t: 'table',
          head: ['Action', 'What it means', 'When it is available'],
          rows: [
            ['Fold', 'Give up the hand and any claim to the pot', 'Any time it is your turn and there is a bet to face'],
            ['Check', 'Pass the action without betting', 'Only if no one has bet yet in that round'],
            ['Call', 'Match the current bet exactly', 'Any time facing a bet'],
            ['Bet', 'Put the first chips in for that round', 'Only if no one has bet yet in that round'],
            ['Raise', 'Increase the size of the current bet', 'Any time facing a bet, subject to a minimum raise size'],
            ['All-in', 'Bet every remaining chip', 'Any time; if it is less than a full call or raise, special side-pot rules apply (below)'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Side pots, when stacks are unequal', text: 'If a player goes all-in for less than another player wants to bet, a side pot is created: the all-in player can only win the main pot (built from bets up to their stack size), while the remaining players keep betting into a separate side pot that the all-in player has no claim to. This is what allows a short stack to never risk more than they have, while bigger stacks keep playing for more.' },
      ],
    },
    {
      id: 'hand-rankings',
      title: 'The hand rankings',
      blocks: [
        { t: 'games-viz', viz: 'poker-hand-ranks' },
        { t: 'p', text: 'At showdown, every remaining player forms the best possible 5-card hand from their 2 hole cards plus the 5 community cards, 7 cards total, choose any 5. It is entirely possible for a player’s best hand to simply be the 5 community cards themselves ("playing the board"), which ties with anyone else who did not improve on it with their hole cards.' },
        {
          t: 'dodont',
          do: ['Compare hands category by category first (a flush always beats a straight, no matter the specific cards)', 'Within the same category, compare by the highest relevant card(s), e.g. two pairs of kings beats two pairs of queens', 'Remember a straight can run A-2-3-4-5 ("the wheel", ace counts low) or 10-J-Q-K-A (ace counts high), but never wrap around (like Q-K-A-2-3)'],
          dont: ['Assume suits break ties, standard poker has no suit ranking; identical hands of different suits simply split the pot', 'Forget that "the board plays"if the 5 community cards alone are better than anything you can make, every player still in the hand shares that hand'],
        },
        {
          t: 'card-hand',
          label: '"The wheel": A-2-3-4-5, the one time an ace counts low',
          cards: [{ rank: 'A', suit: '♠' }, { rank: '2', suit: '♥' }, { rank: '3', suit: '♦' }, { rank: '4', suit: '♣' }, { rank: '5', suit: '♠' }],
          caption: 'The weakest possible straight, ranked below 2-3-4-5-6, but still a straight. Compare it with the strongest straight below.',
        },
        {
          t: 'card-hand',
          label: '"Broadway": 10-J-Q-K-A, the highest possible straight',
          cards: [{ rank: '10', suit: '♥' }, { rank: 'J', suit: '♦' }, { rank: 'Q', suit: '♣' }, { rank: 'K', suit: '♠' }, { rank: 'A', suit: '♥' }],
        },
      ],
    },
  ],
  sources: [
    'Sklansky, D., & Malmuth, M. (1999). *Hold’em Poker for Advanced Players* (21st century ed.). Two Plus Two Publishing.',
    'Harrington, D., & Robertie, B. (2004). *Harrington on Hold’em*, Vol. 1. Two Plus Two Publishing.',
    'Poker Tournament Directors Association. *Official Poker Rules*. pokertda.com.',
  ],
  related: ['games/poker/variants', 'games/poker/pot-odds-and-outs', 'games/poker/bluffing-and-game-theory'],
}

export default guide
