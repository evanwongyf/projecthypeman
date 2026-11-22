import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A player can have a genuine, provable long-run statistical edge and still lose money across a stretch of thousands of hands, poker results are noisy enough that skill and luck are hard to tell apart in any short sample. Bankroll management exists specifically to survive that noise long enough for skill to actually show up in the results.',
  nutshell: [
    'Poker winrate is usually measured in **big blinds per 100 hands (bb/100)**, because it stays comparable across different stake levels.',
    'The **standard deviation** of results is large relative to the winrate, commonly cited around 80–100 bb/100 for 6-max no-limit cash games, dwarfing a solid 5–10 bb/100 winrate.',
    'The **Kelly criterion** gives the mathematically growth-optimal fraction of a bankroll to risk on a positive-edge bet, betting more than Kelly increases the risk of ruin faster than it increases long-run growth.',
    'Standard **bankroll guidelines** (e.g. 20–40 buy-ins for cash games, considerably more for tournaments) exist to keep the probability of going broke acceptably low, even for a genuinely winning player.',
  ],
  sections: [
    {
      id: 'measuring-variance',
      title: 'How poker variance is actually measured',
      blocks: [
        { t: 'p', text: 'Because a $5/$10 game and a $1/$2 game produce very different dollar swings for the same relative skill edge, poker results are normalised into big blinds per 100 hands (bb/100), a winrate of 5 bb/100 at any stake means winning, on average, 5 big blinds every 100 hands played.' },
        {
          t: 'math',
          tex: String.raw`SD(\text{over } n \text{ hands}) = SD_{100} \times \sqrt{\frac{n}{100}}`,
          where: [
            { sym: 'SD_{100}', def: 'The standard deviation of results over a 100-hand sample (commonly cited around 80–100 bb for 6-max no-limit cash)' },
            { sym: 'n', def: 'The number of hands played' },
          ],
          caption: 'Standard deviation grows with the square root of the number of hands, while expected winnings grow linearly with the number of hands, which is exactly why variance dominates in the short run (a single session) but a real skill edge dominates in the long run (tens of thousands of hands or more).',
        },
        {
          t: 'metric',
          name: 'standard deviation (in poker results)',
          shows: 'How much a player’s actual results typically scatter around their true long-run average winrate, over a given number of hands.',
          eli5: 'Imagine flipping a slightly weighted coin that lands on "win" a bit more than half the time. Even though you know it is weighted to win overall, a run of 100 flips can easily show far more losses than wins just by chance, standard deviation is a number for exactly how wild those short-run swings tend to be.',
          higher: 'A game format with bigger average pot sizes relative to the blinds (deep-stacked no-limit hold’em, for instance) has higher variance than a shallower or more fixed-limit format, bigger swings are possible in both directions, even for a player with the same underlying skill edge.',
          lower: 'Lower-variance formats (limit poker, or shorter-stacked tournaments) swing less wildly session to session, making a real skill edge show up in the results faster, in terms of number of hands needed.',
          typical: '6-max no-limit hold’em cash games are commonly cited around 80–100 bb/100 standard deviation; full-ring (9-handed) tends to run somewhat lower, and tournament poker (where you can bust entirely) is considerably higher in relative terms.',
        },
      ],
    },
    {
      id: 'what-this-looks-like',
      title: 'What this looks like over a real stretch of play',
      blocks: [
        {
          t: 'plot',
          title: 'Expected growth vs. one illustrative possible session path (same winrate, same variance)',
          x: [0, 20000],
          y: [-400, 1200],
          xLabel: 'hands played',
          yLabel: 'cumulative result (big blinds)',
          curves: [
            { f: (n: number) => (5 * n) / 100, label: 'expected value at 5 bb/100', color: '#2f9e6e' },
            { f: (n: number) => (5 * n) / 100 + 350 * Math.sin(n / 2200) - 250 * Math.sin(n / 850) + 150 * Math.sin(n / 400), label: 'one illustrative possible path', color: '#d9534f', dashed: true },
          ],
          caption: 'The red line is not a real simulation, it is a single hand-drawn illustration of the kind of path a genuinely 5 bb/100 winning player can experience due to variance, including stretches of several thousand hands trending flat or downward despite a positive true winrate. This is precisely why a single losing month tells you very little about whether a player is actually winning or losing at the game.',
        },
        { t: 'callout', tone: 'warn', title: 'Downswings this size are normal, not a sign something is wrong', text: 'With a standard deviation around 90 bb/100, a losing stretch of several thousand hands is well within normal statistical variation even for a player with a genuine, solid long-run winrate. This is a major reason serious players track results over tens of thousands of hands, not single sessions, before drawing conclusions about their own skill.' },
      ],
    },
    {
      id: 'kelly-and-bankroll',
      title: 'The Kelly criterion and bankroll sizing',
      blocks: [
        {
          t: 'math',
          tex: String.raw`f^* = \frac{bp - q}{b}`,
          where: [
            { sym: 'f^*', def: 'The optimal fraction of your bankroll to risk on this bet' },
            { sym: 'p', def: 'Probability of winning the bet' },
            { sym: 'q', def: '1 − p, the probability of losing' },
            { sym: 'b', def: 'The net odds received on the bet (e.g. b=1 for an even-money bet)' },
          ],
          caption: 'The Kelly criterion (Kelly, 1956) gives the bet size that maximises a bankroll’s long-run exponential growth rate. Betting more than Kelly increases short-run risk of ruin faster than it increases long-run growth; betting less ("fractional Kelly," commonly a half or quarter of the full Kelly fraction) is a common, more conservative compromise many professional gamblers and poker players actually use in practice, trading a little growth for a meaningfully smoother ride.',
        },
        {
          t: 'table',
          head: ['Format', 'Common bankroll guideline', 'Why it differs'],
          rows: [
            ['No-limit cash games', '20–40 buy-ins at your stake', 'Variance per hand is high, but there is no risk of busting an entire tournament stack at once'],
            ['Multi-table tournaments', '50–100+ tournament buy-ins', 'Tournaments add elimination variance on top of hand variance, min-cashing or busting early happens far more often than making a final table, even for strong players, so many more attempts are needed to realise a true edge'],
            ['Sit-and-go / single-table tournaments', '30–50 buy-ins', 'Lower variance than multi-table tournaments (fewer players to outlast) but still higher than cash games, due to elimination risk'],
          ],
          caption: 'These are commonly cited rules of thumb from poker bankroll-management literature, not a precise Kelly calculation for every situation, real bankroll requirements depend on a player’s specific edge and risk tolerance, which the Kelly formula above can make precise for a given estimated edge and odds.',
        },
      ],
    },
  ],
  sources: [
    'Kelly, J. L. (1956). A new interpretation of information rate. *Bell System Technical Journal*, 35(4), 917–926.',
    'Chen, B., & Ankenman, J. (2006). *The Mathematics of Poker*. ConJelCo.',
    'Miller, E., Sklansky, D., & Malmuth, M. (2006). *Small Stakes Hold’em*. Two Plus Two Publishing.',
  ],
  related: ['games/poker/bluffing-and-game-theory', 'games/blackjack/card-counting', 'finance/foundations/risk-return'],
}

export default guide
