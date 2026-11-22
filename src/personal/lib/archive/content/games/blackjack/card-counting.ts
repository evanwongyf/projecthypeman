import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Card counting does not mean memorising every card that has been played, it means tracking one running number that estimates how favourable the remaining deck is, and betting more when it is. It is entirely legal (it uses only information visible to everyone at the table), which is why casinos respond with countermeasures rather than the police.',
  nutshell: [
    'The most common beginner system, **Hi-Lo**, assigns every card a value of +1, 0 or −1 and keeps a single running total as cards are dealt.',
    'A deck rich in **tens and aces** favours the player (more blackjacks, better doubling); a deck rich in low cards favours the dealer, the running count estimates which is currently true.',
    'The **running count must be converted to a "true count"** (divided by decks remaining) to mean the same thing throughout the shoe, since the same running count means very different things with 5 decks left versus half a deck left.',
    'Counting shifts the player’s edge by roughly **0.5% per true count point** above 1, turning a small house edge into a small player edge only when the count is high, which is why counters bet a spread rather than a flat amount.',
    'Casinos cannot arrest a counter, but they can and do **bar card counters** from play, which is the main real-world check on the technique.',
  ],
  sections: [
    {
      id: 'why-counting-works',
      title: 'Why tracking the deck works at all',
      blocks: [
        { t: 'p', text: 'Basic strategy assumes a freshly shuffled, full deck for every hand. In reality, a shoe is dealt down over many hands before reshuffling, and the cards already played are gone from what remains. If an unusually large share of low cards (2–6) has already come out, the remaining shoe is richer in tens and aces than a fresh deck, and that measurably changes the odds, in several ways at once.' },
        {
          t: 'cards',
          items: [
            { title: 'More player blackjacks', body: 'A ten-rich deck means a higher chance of being dealt a natural blackjack, which pays 3:2, a disproportionately large win only the player collects (the dealer’s blackjack only pushes against the player’s, it never pays the dealer extra).' },
            { title: 'Doubling down gets stronger', body: 'An 11 is much more likely to double into a strong 21 when the deck is ten-rich, and the player chooses when to double, the dealer never gets that choice.' },
            { title: 'The dealer busts more often', body: 'A low-card-depleted shoe means the dealer, forced to hit stiff totals by the fixed house rule, is statistically more likely to draw a ten and bust.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'None of this requires memorising individual cards', text: 'A counter never tries to remember which specific cards have appeared, only a single running tally that summarises the deck’s overall composition. This is what makes it learnable by an ordinary player with practice, rather than requiring a trained memory.' },
      ],
    },
    {
      id: 'hi-lo',
      title: 'The Hi-Lo system, step by step',
      blocks: [
        {
          t: 'table',
          head: ['Cards', 'Hi-Lo value', 'Why'],
          rows: [
            ['2, 3, 4, 5, 6', '+1', 'Low cards leaving the deck make the remainder relatively richer in tens and aces, good for the player, so the count rises'],
            ['7, 8, 9', '0', 'Neutral cards; they barely shift the ten-to-low-card ratio'],
            ['10, J, Q, K, A', '−1', 'High cards leaving the deck make the remainder relatively poorer in tens and aces, bad for the player, so the count falls'],
          ],
          caption: 'Every card dealt anywhere at the table, to any player or the dealer, is counted, not just a player’s own cards. The running count simply adds up every card’s value as it is exposed.',
        },
        { t: 'games-viz', viz: 'blackjack-count' },
        { t: 'p', text: 'Try dealing through a shoe above (or use auto-deal to watch it happen automatically). Notice how the running count drifts up and down as cards are revealed, and how the true count, the number that actually matters for betting, only becomes extreme occasionally, which is why disciplined counters bet small for most of the shoe and only raise their bet when the count genuinely favours them.' },
      ],
    },
    {
      id: 'true-count-and-betting',
      title: 'True count and bet spreading',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{true count} = \frac{\text{running count}}{\text{decks remaining}}`,
          caption: 'A running count of +6 means very different things with 6 decks left (true count +1, barely significant) versus 1 deck left (true count +6, a huge advantage). Dividing by decks remaining converts the raw running count into a consistent measure of the deck’s richness, which is why every serious counting system uses a true count, not the raw running count, to decide bet size and strategy deviations.',
        },
        {
          t: 'metric',
          name: 'the true count',
          shows: 'How favourable the remaining, undealt portion of the shoe currently is to the player, on a scale where 0 is a neutral (average) deck.',
          eli5: 'Imagine a jar of marbles, some bad for you and some good, and you are told how many of each have already been pulled out. The true count is a quick way of asking: "of what’s left in the jar, is it currently better or worse than average for me?"',
          higher: 'A higher true count means the remaining shoe is unusually rich in tens and aces, better blackjack odds, stronger doubles, a dealer more likely to bust. Skilled counters raise their bet size as the true count rises.',
          lower: 'A true count at or below 0 means the remaining shoe is average or low-card-heavy, the house’s normal edge applies or is even larger, and a counter bets the table minimum (or sits out) until the count improves.',
          typical: 'Across a full shoe, the true count spends most of its time within about ±2 of zero; genuinely large counts (+4 or beyond) are relatively rare, which is why a counter’s overall edge over many hours, even playing perfectly, tends to be modest, commonly estimated around 0.5–1.5% depending on the system, rules and bet spread used.',
        },
        {
          t: 'table',
          head: ['True count', 'Illustrative bet (in betting units)'],
          rows: [
            ['1 or below', '1 unit (table minimum)'],
            ['2', '2 units'],
            ['3', '4 units'],
            ['4', '6 units'],
            ['5 or more', '8+ units'],
          ],
          caption: 'A "bet spread" like this is how a counter converts a small statistical edge into actual profit: betting small through most of the shoe (when the count is neutral or negative) and significantly more only when the true count says the odds have turned in the player’s favour.',
        },
      ],
    },
    {
      id: 'reality-check',
      title: 'What counting is actually worth, and why casinos respond',
      blocks: [
        { t: 'callout', tone: 'fact', title: 'Legal, but unwelcome', text: 'Counting cards uses only publicly visible information and involves no cheating, marked cards, or devices, courts in most jurisdictions have confirmed it is legal. Casinos are nonetheless private businesses that can refuse service to anyone they identify as counting, and commonly do, which is the main real-world limit on the technique rather than any law against it.' },
        {
          t: 'checklist',
          items: [
            'Casinos shuffle before the shoe is fully dealt (limiting "penetration," typically to 60–80% of the shoe) specifically to reduce how extreme the true count can get',
            'Continuous shuffling machines, which reshuffle after every hand, eliminate card counting entirely by never letting a meaningful fraction of the shoe deplete',
            'Casinos watch for the betting pattern a count produces, small bets through most of a shoe, suddenly large bets when the count rises, which is a more visible tell than the mental counting itself',
            'More decks in play (6–8 deck shoes are now standard in many casinos, versus the single/double decks common in Thorp’s era) dilute the effect of any one card and reduce how far the true count can swing',
          ],
        },
        { t: 'p', text: 'Counting is real, mathematically sound, and historically documented to work (several professional teams, most famously the MIT Blackjack Team in the 1990s, won large sums this way), but it is a slow-grinding edge of roughly half a percent to low single digits, achieved only with real discipline, bankroll management, and tolerance for being asked to leave. It is not a shortcut to guaranteed winning on any single visit to a casino; see [variance and bankroll management](@games/poker/variance-and-bankroll) for why even a genuine statistical edge can still lose money over any short stretch of play.' },
      ],
    },
  ],
  sources: [
    'Thorp, E. O. (1966). *Beat the Dealer* (rev. ed.). Vintage Books.',
    'Schlesinger, D. (2018). *Blackjack Attack: Playing the Pros’ Way* (4th ed.). RGE Publishing.',
    'Mezrich, B. (2002). *Bringing Down the House: The Inside Story of Six M.I.T. Students Who Took Vegas for Millions*. Free Press.',
  ],
  related: ['games/blackjack/basic-strategy', 'games/blackjack/probability-and-ev', 'games/poker/variance-and-bankroll'],
}

export default guide
