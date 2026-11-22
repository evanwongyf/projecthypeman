import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    "Texas hold'em is only one member of a large family of poker games. Most variants change one of three things, how many private cards you get, whether there are shared community cards at all, or how a winning hand is judged, and each change shifts the optimal strategy substantially.",
  nutshell: [
    '**Omaha** gives four hole cards instead of two, but forces you to use exactly two of them, a rule that sounds minor but changes almost everything about how hands are valued.',
    '**Omaha hi-lo** splits the pot between the best high hand and the best qualifying low hand, rewarding hands that can win both halves.',
    '**Seven-card stud** has no community cards at all, everything is dealt individually, with some cards face up and visible to everyone.',
    '**Razz** is stud played for the lowest hand instead of the highest, using ace-to-five low rules.',
    '**Short-deck (6+) hold’em** removes the 2s through 5s, which changes the probability of a flush enough that it is ranked above a full house.',
  ],
  sections: [
    {
      id: 'omaha',
      title: 'Omaha and Omaha hi-lo',
      blocks: [
        {
          t: 'table',
          head: ['Rule', "Texas hold'em", 'Omaha'],
          rows: [
            ['Hole cards dealt', '2', '4'],
            ['Hole cards you must use in your final hand', 'Any number, 0–2', 'Exactly 2, no more, no fewer'],
            ['Community cards used', 'Any number, 3–5', 'Exactly 3'],
          ],
          caption: 'The "exactly 2" rule is the single most important thing to understand about Omaha, a hand that looks powerful by Texas hold’em instincts (e.g. four cards to a flush) can be nearly worthless if it does not combine correctly with exactly three community cards.',
        },
        { t: 'p', text: 'Because every player has four hole cards instead of two, the number of possible starting-hand combinations is vastly larger, and made hands at showdown tend to be stronger on average, a hand that would be a clear winner in hold’em (top pair, for instance) is often beaten in Omaha, where straights, flushes and full houses appear far more frequently.' },
        { t: 'callout', tone: 'note', title: 'Omaha hi-lo (Omaha/8)', text: 'In this split-pot variant, the pot is divided between the best high hand and the best "qualifying" low hand (typically five unpaired cards, each 8 or lower, counted ace-to-five). If no hand qualifies for low, the best high hand takes the entire pot. The strongest starting hands contain cards that can make both a good high hand and a good low hand at once, a skill very different from either hold’em or straight Omaha.' },
      ],
    },
    {
      id: 'stud-and-razz',
      title: 'Seven-card stud and razz',
      blocks: [
        { t: 'p', text: 'Stud games have no community cards: every player is dealt their own mix of face-down ("hole") and face-up ("door" and later "up") cards over several betting rounds, so part of every opponent’s hand is visible to the whole table throughout the hand, reading those exposed cards is central to stud strategy in a way hold’em and Omaha never require.' },
        {
          t: 'steps',
          items: [
            { title: 'Seven-card stud deal order', body: '2 cards face down + 1 face up (third street), then four more individual cards, fourth, fifth and sixth street face up, seventh street face down, with a betting round after each, seven cards total, best 5 of the 7 at showdown.' },
            { title: 'Antes and the bring-in', body: 'Rather than blinds, every player posts a small forced ante before the deal; after the first face-up cards are dealt, the player showing the lowest card is forced to make the first bet (the "bring-in"), which replaces the hold’em concept of blinds entirely.' },
            { title: 'Razz: stud, but for the lowest hand', body: 'Razz uses the exact same deal as seven-card stud, but the lowest hand wins, using ace-to-five rules, where straights and flushes do not count against you and the ace is always low. The best possible hand is A-2-3-4-5, nicknamed "the wheel" or "the bicycle."' },
          ],
        },
      ],
    },
    {
      id: 'draw-and-shortdeck',
      title: 'Five-card draw and short-deck hold’em',
      blocks: [
        { t: 'p', text: 'Five-card draw is the simplest and oldest major variant: each player gets five private cards and no community cards at all, with a single betting round, then a chance to discard and redraw up to the same number of cards (within table rules), followed by a second and final betting round before showdown.' },
        { t: 'callout', tone: 'fact', title: 'Why short-deck hold’em ranks flushes above full houses', text: 'Short-deck (also called 6+) hold’em removes every 2, 3, 4 and 5 from the deck, leaving 36 cards. With fewer low cards around, full houses become easier to make relative to flushes than in a standard 52-card deck, enough that, by the exact same combinatorics used to rank standard poker hands, a flush is now rarer than a full house and is ranked higher. This is a direct, calculable consequence of removing cards, not an arbitrary house rule.' },
        {
          t: 'card-hand',
          label: 'In short-deck, this flush beats a full house',
          cards: [{ rank: '6', suit: '♠' }, { rank: '9', suit: '♠' }, { rank: 'J', suit: '♠' }, { rank: 'K', suit: '♠' }, { rank: 'A', suit: '♠' }],
          caption: 'The exact same five cards would rank below a full house in standard 52-card poker, only the removal of the four lowest ranks flips the ordering.',
        },
        {
          t: 'table',
          head: ['Variant', 'Private cards', 'Community cards', 'Hand goal'],
          rows: [
            ["Texas hold'em", '2', '5 (shared)', 'Best high hand'],
            ['Omaha / Omaha hi-lo', '4 (must use exactly 2)', '5 (shared)', 'Best high hand, or split high/low'],
            ['Seven-card stud', '3 down, 4 up over the hand (7 total)', 'None', 'Best high hand'],
            ['Razz', '3 down, 4 up over the hand (7 total)', 'None', 'Best low hand (ace-to-five)'],
            ['Five-card draw', '5, with one discard-and-redraw round', 'None', 'Best high hand'],
            ['Short-deck (6+) hold’em', '2', '5 (shared), from a 36-card deck', 'Best high hand (flush beats full house)'],
          ],
        },
      ],
    },
  ],
  sources: [
    'Sklansky, D. (2005). *Poker, Gaming & Life* (3rd ed.). Two Plus Two Publishing.',
    'Cloutier, T., & McEvoy, T. (2005). *Championship Omaha*. Lyle Stuart.',
    'Poker Tournament Directors Association. *Official Poker Rules*. pokertda.com.',
  ],
  related: ['games/poker/rules-and-hand-rankings', 'games/poker/pot-odds-and-outs', 'games/poker/variance-and-bankroll'],
}

export default guide
