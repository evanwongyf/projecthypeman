import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Blackjack feels like a fair fight because the player can see most of the same information the dealer has, but the house keeps a small, precise mathematical edge built directly into the order of play. Understanding exactly where that edge comes from is what makes the rest of the maths on this shelf, basic strategy, card counting, make sense.',
  nutshell: [
    'The house edge exists almost entirely because of **one structural rule**: the player acts (and can bust) before the dealer ever has to.',
    'A natural two-card blackjack happens about **4.8% of the time**, roughly 1 hand in 21, which is why its 3:2 payout matters so much to the overall odds.',
    'Dealer **bust probability depends heavily on the upcard**: a dealer showing 4, 5 or 6 busts over 40% of the time; a dealer showing a 10 or ace busts barely 1 time in 5.',
    'Small rule changes (deck count, soft-17 rule, blackjack payout) each move the house edge by **tenths of a percentage point**, rules experts quote a single casino’s edge accurate to two decimal places.',
  ],
  sections: [
    {
      id: 'the-structural-edge',
      title: "Where the house's edge actually comes from",
      blocks: [
        { t: 'p', text: 'If both the player and the dealer busted equally often and simply compared totals the rest of the time, blackjack would be close to a coin flip (slightly worse for the player only because of the blackjack-beats-21 rule). The actual source of the house edge is sequencing: the player must finish acting, and can bust and lose immediately, before the dealer plays their hand at all. If the player busts, the dealer collects the bet without needing to play a single card, even in cases where the dealer’s hand would also have busted.' },
        {
          t: 'math',
          tex: String.raw`\Delta \approx P_{\text{player bust}} \times P_{\text{dealer bust}}`,
          where: [
            { sym: '\\Delta', def: 'The "bust-first" disadvantage, the share of the house edge that comes purely from acting first' },
            { sym: 'P_{\\text{player bust}}', def: 'Probability the player busts' },
            { sym: 'P_{\\text{dealer bust}}', def: 'Probability the dealer, on the same cards, would also have busted' },
          ],
          caption: 'This term alone accounts for most of the house’s roughly 8% structural edge before any player skill is applied, basic strategy claws almost all of it back by minimising unnecessary hits on hands likely to bust, and by using doubling and splitting to extract extra value from strong hands, which the dealer can never do.',
        },
        { t: 'callout', tone: 'tip', title: 'Why doubling and splitting matter so much', text: 'The dealer has no choice to double a strong hand or split a promising pair, their play is entirely fixed. Every time a player correctly doubles an 11 or splits a pair of 8s, they are extracting value that the dealer structurally cannot access, which is a meaningful part of how basic strategy closes most of the structural gap.' },
      ],
    },
    {
      id: 'dealer-bust',
      title: 'Dealer bust probability by upcard',
      blocks: [
        {
          t: 'plot',
          title: 'Approximate probability the dealer busts, by upcard (illustrative, multi-deck, S17)',
          x: [1.5, 11.5],
          y: [0, 50],
          xLabel: 'dealer upcard (11 = ace)',
          yLabel: 'probability dealer busts (%)',
          data: [
            { pts: [[2, 0], [2, 35.3]], label: '2' },
            { pts: [[3, 0], [3, 37.2]], label: '3' },
            { pts: [[4, 0], [4, 40.1]], label: '4' },
            { pts: [[5, 0], [5, 42.3]], label: '5' },
            { pts: [[6, 0], [6, 42.1]], label: '6' },
            { pts: [[7, 0], [7, 25.9]], label: '7' },
            { pts: [[8, 0], [8, 23.9]], label: '8' },
            { pts: [[9, 0], [9, 23.3]], label: '9' },
            { pts: [[10, 0], [10, 21.4]], label: '10/J/Q/K' },
            { pts: [[11, 0], [11, 11.5]], label: 'A' },
          ],
          caption: 'Upcards 4, 5 and 6 bust over 40% of the time, these are the dealer’s weakest cards, which is exactly why basic strategy tells a player to stand on much lower totals against them (even a hard 12) rather than risk busting their own hand first.',
        },
        { t: 'p', text: 'This single chart explains most of the shape of the basic strategy chart on the [basic strategy](@games/blackjack/basic-strategy) page: against a weak dealer upcard (2–6), the correct play leans toward standing and letting the dealer’s high bust rate do the work; against a strong upcard (7–A), the correct play leans toward hitting more, since standing on a mediocre total is unlikely to beat a dealer who rarely busts.' },
      ],
    },
    {
      id: 'blackjack-combinatorics',
      title: 'The combinatorics of a natural blackjack',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(\text{blackjack}) = 2 \times \frac{4}{52} \times \frac{16}{51} \approx 4.83\%`,
          where: [
            { sym: '4/52', def: 'Probability the first card is an ace (4 aces in 52 cards)' },
            { sym: '16/51', def: 'Probability the second card is a 10-value card (16 of them: four each of 10, J, Q, K) out of the 51 remaining' },
            { sym: '2 \\times', def: 'The ace and the ten-value card could come in either order' },
          ],
          caption: 'About 1 hand in 21 is a natural blackjack. Because it pays 3:2 instead of the usual 1:1, this single outcome is worth a disproportionate share of a player’s expected winnings, which is exactly why a 6:5 payout (instead of 3:2) does so much damage to the overall odds despite sounding like a small change.',
        },
      ],
    },
    {
      id: 'expected-value',
      title: 'Expected value and the house edge',
      blocks: [
        {
          t: 'math',
          tex: String.raw`EV = \sum_i P(\text{outcome}_i) \times \text{payout}_i`,
          caption: 'The expected value of a bet is the probability-weighted average of every possible payout (a win pays +1 unit, a loss pays −1 unit, a blackjack pays +1.5 units, a push pays 0). The house edge is simply −EV expressed as a percentage of the original bet: a 0.5% house edge means the casino keeps 50 cents, on average, for every $100 wagered, not every $100 lost in a single session, which is a very different (and far noisier) number.',
        },
        {
          t: 'table',
          head: ['Rule change (from a 6-deck, S17, DAS, no-surrender baseline)', 'Approximate effect on house edge'],
          rows: [
            ['Dealer hits soft 17 instead of standing (H17)', '+0.22 percentage points (worse for the player)'],
            ['Blackjack pays 6:5 instead of 3:2', '+1.39 percentage points (substantially worse)'],
            ['Single deck instead of 6 decks (other rules equal)', '−0.48 percentage points (better for the player)'],
            ['Late surrender offered', '−0.08 percentage points (better)'],
            ['Double after split (DAS) not allowed', '+0.14 percentage points (worse)'],
            ['Dealer peeks for blackjack before play continues (no-hole-card variants omit this)', '−0.01 to −0.11 percentage points depending on the comparison, generally minor'],
          ],
          caption: 'Figures are commonly cited approximations from blackjack probability engines and vary slightly by source and by which other rules are held fixed, but the direction and rough size of each effect is well established and is exactly why serious players check the felt’s printed rules before sitting down, not just the minimum bet.',
        },
      ],
    },
  ],
  sources: [
    'Griffin, P. A. (1999). *The Theory of Blackjack* (6th ed.). Huntington Press.',
    'Thorp, E. O. (1966). *Beat the Dealer* (rev. ed.). Vintage Books.',
    'Wizard of Odds. *Blackjack House Edge Calculator*. wizardofodds.com.',
  ],
  related: ['games/blackjack/basic-strategy', 'games/blackjack/card-counting', 'mathematics/probability/probability-rules'],
}

export default guide
