import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Blackjack (also called twenty-one) is a card game played against the dealer, not against other players at the table, everyone is trying to beat the same dealer hand independently. The rules are short enough to learn in a few minutes, which is part of why it remains the most-played table game in most casinos.',
  nutshell: [
    'The goal is a hand **closer to 21 than the dealer’s, without going over 21**, going over ("busting") is an automatic loss, even if the dealer later busts too.',
    'Number cards count at face value, **J/Q/K count as 10**, and an **ace counts as 1 or 11**, whichever helps the hand more.',
    'A two-card **21 is a "blackjack"** (a natural) and normally pays 3:2, a far better payout than winning any other way.',
    'Players can **hit, stand, double down, split pairs**, and sometimes **surrender** or take **insurance**, each has an exact rule for when it is allowed.',
    'The dealer has no choices to make: a fixed rule (hit until 17, or until "soft 17" depending on the table) decides everything, which is what makes the game mathematically analysable at all.',
  ],
  sections: [
    {
      id: 'objective-and-values',
      title: 'The objective and card values',
      blocks: [
        { t: 'p', text: 'Each player is dealt a hand and plays it against the dealer’s hand only, you are never competing against the other players’ cards, only your own hand versus the dealer’s. You can win, lose, or push (tie) independently of what happens at the rest of the table.' },
        {
          t: 'table',
          head: ['Card', 'Value'],
          rows: [
            ['2 – 10', 'Face value (a 7 is worth 7)'],
            ['Jack, Queen, King', '10'],
            ['Ace', '11, or 1 if counting it as 11 would bust the hand'],
          ],
          caption: 'A hand containing an ace counted as 11 is called "soft" (e.g. soft 17 = A+6, which cannot bust on the next card since the ace can drop to 1). A hand with no ace, or an ace forced to count as 1, is "hard."',
        },
        { t: 'callout', tone: 'tip', title: 'Why "soft" hands matter', text: 'A soft hand is safe to hit because it can never bust on the next card, if the new card would push the total over 21, the ace simply counts as 1 instead. Soft 17 (A,6) hit by a 10 becomes 17, not 27. This is exactly why soft hands are played differently from hard hands in basic strategy.' },
      ],
    },
    {
      id: 'deal-and-blackjack',
      title: 'The deal, and winning with a natural blackjack',
      blocks: [
        { t: 'p', text: 'After bets are placed, the dealer deals two cards to each player and two to themselves. Player cards are normally dealt face up; the dealer’s cards are one face up (the "upcard") and one face down (the "hole card") in the most common American-style rules, though some tables deal no hole card at all (see variants below).' },
        {
          t: 'card-hand',
          label: 'A natural blackjack: ace + any 10-value card',
          cards: [{ rank: 'A', suit: '♠' }, { rank: 'K', suit: '♥' }],
          caption: 'This exact pair, an ace and a king, is one of 16 possible two-card combinations that make a blackjack (an ace with any 10, J, Q or K, in any suit).',
        },
        {
          t: 'steps',
          items: [
            { title: 'A two-card 21 is a blackjack', body: 'An ace plus any 10-value card (10, J, Q or K) dealt as your first two cards is a "natural" blackjack, the best possible hand, and it is settled immediately rather than waiting for the rest of the round.' },
            { title: 'Blackjack normally pays 3:2', body: 'A $10 bet that is a blackjack wins $15 (plus your original $10 back), unless the dealer also has blackjack, in which case it is a push (tie, bet returned). A growing number of tables pay only 6:5 instead; this is a materially worse deal, covered below.' },
            { title: 'Blackjack beats a non-blackjack 21', body: 'If you draw to 21 over several cards (e.g. 7+7+7) and the dealer also ends on 21 by drawing cards, your hand loses to a natural blackjack but ties a dealer’s drawn-to 21, a two-card 21 always outranks a multi-card 21.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: '6:5 blackjack is a real trap', text: 'Many modern casino floors (especially for single- and double-deck games) now offer only 6:5 instead of 3:2 for a natural blackjack. On a $10 bet that is $12 instead of $15, a difference that alone adds roughly 1.4 percentage points to the house edge, often more than doubling it. Checking the payout printed on the table felt before sitting down is one of the single highest-value things a player can do.' },
      ],
    },
    {
      id: 'player-actions',
      title: "The player's actions",
      blocks: [
        {
          t: 'table',
          head: ['Action', 'What happens', 'When it is allowed'],
          rows: [
            ['Hit', 'Take one more card, added to your total', 'Any time your hand is not already 21 or busted'],
            ['Stand', 'Take no more cards; your total is locked in for comparison against the dealer', 'Any time'],
            ['Double down', 'Double your bet, then receive exactly one more card and must stand', 'Usually only on your first two cards; many tables restrict it to certain totals (e.g. 9–11) or allow it after splitting ("double after split", DAS)'],
            ['Split', 'If your first two cards share a rank, separate them into two hands, each with a bet equal to the original', 'Only on a starting pair; re-splitting a new pair is often allowed up to 3 or 4 hands, with aces usually restricted to one card each and no further splitting or doubling'],
            ['Surrender', 'Forfeit the hand immediately and recover half your bet', 'Only where offered, and usually only before taking any other action ("late surrender", after confirming the dealer does not already have blackjack)'],
            ['Insurance', 'A side bet, up to half your original bet, that pays 2:1 if the dealer’s hole card gives them a blackjack', 'Only offered when the dealer’s upcard is an ace'],
          ],
        },
        { t: 'callout', tone: 'myth', title: 'Insurance is a side bet, not protection', text: 'Despite the name, insurance does not protect your hand, it is a separate bet on whether the dealer has blackjack. Because a 10-value card is less than one-third of the remaining deck in a fresh multi-deck shoe, insurance is a losing bet on average for a basic-strategy player (it only becomes worthwhile when a card counter knows the deck is unusually rich in tens), which is why basic strategy says to always decline it.' },
      ],
    },
    {
      id: 'dealer-and-outcomes',
      title: "The dealer's fixed rule, and every winning condition",
      blocks: [
        { t: 'p', text: 'The dealer never chooses, house rules fix their play completely, printed on the table: "dealer must hit 16 and stand on all 17s" is the most common wording, meaning the dealer hits any total of 16 or below and stands on any hard 17 or higher.' },
        {
          t: 'table',
          head: ['Rule variant', 'What it means'],
          rows: [
            ['Dealer stands on soft 17 (S17)', 'A dealer hand of A,6 (soft 17) stands, the more common rule, and better for the player'],
            ['Dealer hits soft 17 (H17)', 'The dealer draws again on A,6, chasing a better total, worse for the player, raising the house edge by roughly 0.2 percentage points'],
          ],
        },
        {
          t: 'table',
          head: ['Situation', 'Result'],
          rows: [
            ['Your hand goes over 21', 'You bust and lose immediately, even if the dealer later also busts, your loss already happened'],
            ['Dealer busts (goes over 21) and you did not', 'You win, paid 1:1 (even money) unless your hand was a blackjack, which pays 3:2 (or 6:5, see above)'],
            ['Both stand, your total is higher', 'You win 1:1'],
            ['Both stand, dealer’s total is higher', 'You lose'],
            ['Both stand, totals are equal', 'Push, your bet is returned, no money changes hands'],
            ['Your first two cards are a blackjack and the dealer’s are not', 'You win immediately, paid 3:2 (or the table’s posted rate)'],
            ['Both you and the dealer have a two-card blackjack', 'Push'],
          ],
        },
      ],
    },
    {
      id: 'variants',
      title: 'Major variants',
      blocks: [
        {
          t: 'table',
          head: ['Variant', 'Key differences'],
          rows: [
            ['Vegas Strip / American', 'Dealer takes a hole card; the most common rule set, usually S17, DAS, 4–8 decks'],
            ['European no-hole-card', 'The dealer does not draw a second card until after all players act, meaning you can lose a doubled or split bet to a dealer blackjack you could not have seen coming, a real cost compared to the American version'],
            ['Atlantic City', 'Hole-card dealing, but typically allows late surrender and re-splitting aces, generally favourable rules'],
            ['Spanish 21', 'Played with Spanish decks that remove all four 10s (leaving 48 cards per deck), compensated with player-favourable bonus rules: player blackjack always wins (even against a dealer blackjack, in many versions), bonus payouts for 5+ card 21s, and the ability to double down after hitting'],
            ['Double Exposure', 'Both dealer cards are dealt face up, a huge player advantage, balanced out by paying even money (not 3:2) on blackjack, and the dealer winning all ties except a tied blackjack'],
            ['Free Bet Blackjack', 'Certain doubles and splits are offered "free" (no extra wager), balanced by the dealer pushing (instead of losing to) a player who doesn’t bust when the dealer draws to 22'],
            ['Pontoon (UK)', 'No dealer upcard is shown at all; different terminology ("Pontoon" instead of blackjack, "Twist" instead of hit, "Stick" instead of stand) with its own payout and bust rules'],
          ],
          caption: 'Rule differences this small can each shift the house edge by tenths of a percentage point, which is exactly why the probability page on this shelf treats the house edge as a function of the specific rules in force, not a single fixed number.',
        },
        { t: 'p', text: 'Whatever the variant, the underlying skill, playing each hand according to a fixed, mathematically derived chart rather than instinct, carries over almost unchanged. See [basic strategy](@games/blackjack/basic-strategy) for the chart itself.' },
      ],
    },
  ],
  sources: [
    'Griffin, P. A. (1999). *The Theory of Blackjack* (6th ed.). Huntington Press.',
    'Schlesinger, D. (2018). *Blackjack Attack: Playing the Pros’ Way* (4th ed.). RGE Publishing.',
    'Wizard of Odds. *Blackjack Rules and Variants*. wizardofodds.com.',
  ],
  related: ['games/blackjack/basic-strategy', 'games/blackjack/probability-and-ev', 'games/blackjack/card-counting'],
}

export default guide
