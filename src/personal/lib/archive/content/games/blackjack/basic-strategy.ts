import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Basic strategy is the single mathematically correct decision for every possible hand against every possible dealer upcard, assuming no information beyond your own cards and the dealer’s upcard. It is not a guess, a system, or a superstition, it is the output of exhaustively computing the expected value of every choice, and it is the biggest lever any blackjack player has.',
  nutshell: [
    'Basic strategy was worked out by **simulating or exactly computing every possible hand outcome**, first by hand in the 1950s and now instantly by computer, it is not a human intuition, it is arithmetic.',
    'Playing it perfectly brings the house edge down to roughly **0.5%**, depending on the exact table rules; playing "by feel" instead typically costs an extra **1–2%** of every bet, a huge difference over a session.',
    'The chart only depends on **your total and the dealer’s upcard**, nothing else (how the cards were dealt, a losing streak, "the table is cold") changes the correct play.',
    'The exact chart shifts slightly with the table’s rules (dealer hits/stands soft 17, number of decks, double-after-split, surrender), the version here assumes the most common online and Strip rule set.',
  ],
  sections: [
    {
      id: 'why-it-works',
      title: 'Why a fixed chart can be "correct"',
      blocks: [
        { t: 'p', text: 'Blackjack looks complicated because a hand can unfold many ways, but each individual decision point"I have this total, the dealer shows this upcard, should I hit?"has a single best answer in the long run, because the dealer’s future play is entirely fixed by the house rule (hit until 17). That turns "should I hit" into a pure probability question: across every way the rest of the shoe could be arranged, does hitting or standing make more money on average?' },
        {
          t: 'flow',
          title: 'How a basic strategy chart is built',
          nodes: [
            { label: 'Fix the house rules', sub: 'decks, S17/H17, DAS, surrender', tone: 'data' },
            { label: 'For one hand + one dealer upcard, simulate every action', sub: 'hit, stand, double, split', tone: 'process' },
            { label: 'Compute the expected value of each action', sub: 'exactly, by combinatorics, or by simulating millions of hands', tone: 'model' },
            { label: 'Keep whichever action has the highest EV', tone: 'process' },
            { label: 'Repeat for every hand/upcard combination', tone: 'output' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Worked out before computers existed', text: 'The first rigorous basic strategy was published in 1956 by Roger Baldwin, Wilbert Cantey, Herbert Maisel and James McDermott, four U.S. Army mathematicians who computed it largely by hand with desk calculators. Edward Thorp later refined it using early computers for his 1962 book *Beat the Dealer*, which also introduced card counting to the public. Modern computed charts differ from the 1956 version only in minor details.' },
      ],
    },
    {
      id: 'the-chart',
      title: 'The full chart',
      blocks: [
        { t: 'games-viz', viz: 'blackjack-strategy' },
        { t: 'p', text: 'Read it as: find your hand type (hard total, soft total, or pair) down the left, find the dealer’s upcard along the top, and the cell is your play. The colour groups make the pattern easier to memorise, notice how much of the chart is simply "stand on anything 17+" and "hit on anything 8 or less," leaving a relatively small set of genuinely close decisions in the middle.' },
      ],
    },
    {
      id: 'patterns',
      title: 'The patterns behind the chart',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Dealer’s "stiff" cards (2–6)', def: 'A dealer upcard of 2 through 6 means the dealer’s hidden total is more likely to force them into a hand that could bust on the next hit, basic strategy responds by standing earlier (on 12+) and doubling more aggressively, since the dealer is relatively likely to bust anyway.' },
            { term: 'Dealer’s strong cards (7–A)', def: 'A 7, 8, 9, 10 or ace upcard means the dealer is unlikely to bust, so the player needs a genuinely strong total to stand, basic strategy keeps hitting stiff hands (12–16) far more often against these upcards.' },
            { term: 'Always split aces and 8s', def: 'A pair of aces becomes two separate hands each starting with a strong soft total; a pair of 8s (a poor hard 16) becomes two hands starting from a much better 8 each. Both are correct against every dealer upcard.' },
            { term: 'Never split 10s', def: 'A hard 20 is already an excellent hand, splitting it to chase two hands starting from 10 each is a significant mistake, no matter how tempting it feels.' },
          ],
        },
        {
          t: 'card-hand',
          label: 'Always split: a pair of 8s (hard 16) against a dealer’s 10',
          cards: [{ rank: '8', suit: '♣' }, { rank: '8', suit: '♠' }],
          caption: 'A hard 16 is the worst hand in blackjack, but split into two hands starting from 8 each, both have real potential, even against a strong dealer upcard. This is correct against every dealer upcard without exception.',
        },
        { t: 'callout', tone: 'tip', title: 'The biggest beginner mistakes', text: 'The most common deviations from basic strategy, in order of how much they cost: standing on 16 against a dealer 7–A (should hit), not doubling 11 against most upcards, not splitting 8s against a strong dealer upcard, and taking insurance. Each one is a small, specific, memorisable fix.' },
      ],
    },
    {
      id: 'how-much-it-matters',
      title: 'How much basic strategy is actually worth',
      blocks: [
        {
          t: 'metric',
          name: 'the cost of playing "by feel" instead of basic strategy',
          shows: 'How much extra house edge a player gives up by deviating from the mathematically correct play, standing too early, not doubling or splitting when they should, or taking insurance out of instinct.',
          eli5: 'Basic strategy is like a cheat sheet that has already done all the maths for you. Ignoring it and playing on instinct is like refusing to use a calculator and guessing instead, you’ll be right some of the time, but wrong often enough that it adds up.',
          higher: 'A bigger gap between a player’s actual decisions and the chart, more "hunches," more standing on stiff hands out of fear, more skipped doubles, directly costs more money per hour played, regardless of how the cards happen to fall in any one session.',
          lower: 'Playing the chart exactly, every time, with no exceptions for "feel," minimises the house edge to whatever the table’s specific rules allow (commonly quoted around 0.5%), the lowest edge achievable without tracking the deck (see card counting).',
          typical: 'Casino industry studies have repeatedly found that the average blackjack player gives up an extra 1.5–2% of every bet compared to basic strategy, roughly tripling or quadrupling the house edge they actually face.',
        },
        { t: 'p', text: 'This is why blackjack has a reputation as "beatable" or at least close to fair compared with most casino games: a player who memorises one chart and applies it mechanically plays close to the mathematical minimum house edge, something no amount of skill can achieve at most other table games. See [probability and expected value](@games/blackjack/probability-and-ev) for exactly where that edge comes from.' },
      ],
    },
  ],
  sources: [
    'Baldwin, R., Cantey, W., Maisel, H., & McDermott, J. (1956). The optimum strategy in blackjack. *Journal of the American Statistical Association*, 51(275), 429–439.',
    'Thorp, E. O. (1966). *Beat the Dealer* (rev. ed.). Vintage Books.',
    'Wizard of Odds. *Blackjack Basic Strategy Calculator and Engine*. wizardofodds.com.',
  ],
  related: ['games/blackjack/probability-and-ev', 'games/blackjack/card-counting', 'games/blackjack/rules-and-variants'],
}

export default guide
