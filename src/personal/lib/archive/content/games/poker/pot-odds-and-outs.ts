import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Pot odds are the single most mechanical, learnable piece of poker skill: given what the pot is offering you, and how likely you are to win, is calling a profitable decision? Unlike reading an opponent, this part of the game reduces cleanly to arithmetic.',
  nutshell: [
    'An **out** is any card remaining in the deck that would improve your hand to (most likely) the best hand.',
    'The **"rule of 4 and 2"** is a fast mental shortcut: multiply your outs by 4 (with two cards left to come) or by 2 (with one card left) to estimate your percentage chance of hitting.',
    '**Pot odds** compare the cost of calling to the total pot, convert that ratio to a percentage, and if your win chance is higher than that percentage, calling is profitable on average.',
    '**Implied odds** extend this idea to future betting: a drawing hand can be worth calling even at technically bad pot odds if it is likely to win a lot more money on later streets when it hits.',
  ],
  sections: [
    {
      id: 'counting-outs',
      title: 'Counting outs',
      blocks: [
        { t: 'p', text: 'If you hold four cards to a flush after the flop, there are 9 remaining cards of your suit in the deck (13 per suit, minus the 4 you can see between your hand and the board), those 9 cards are your outs. Different draws have well-known, memorisable out counts.' },
        {
          t: 'table',
          head: ['Draw', 'Outs', 'Example'],
          rows: [
            ['Gutshot straight draw (one specific rank completes it)', '4', 'You hold 5-6, board shows 8-9-K: only a 7 completes your straight'],
            ['Open-ended straight draw (either end completes it)', '8', 'You hold 5-6, board shows 7-8-K: a 4 or a 9 completes your straight'],
            ['Flush draw', '9', 'Four cards of the same suit between your hand and the board'],
            ['Open-ended straight + flush draw combined', '15', 'The outs from each draw, with any overlap removed'],
            ['Overcards (either pairs the board)', '6', 'Two unpaired hole cards both higher than any board card, each with 3 outs to pair'],
          ],
        },
        {
          t: 'card-hand',
          label: 'A flush draw, 9 outs: your hand + the board',
          cards: [{ rank: '9', suit: '♣' }, { rank: 'K', suit: '♣' }, { rank: '2', suit: '♣' }, { rank: '7', suit: '♣' }, { rank: 'J', suit: '♦' }],
          caption: 'Four clubs between your two hole cards (9♣, K♣) and the three-card board (2♣, 7♣, J♦), any of the 9 remaining clubs completes the flush.',
        },
        { t: 'games-viz', viz: 'poker-odds' },
      ],
    },
    {
      id: 'rule-of-4-and-2',
      title: 'The rule of 4 and 2',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(\text{hit by the river, from the flop}) \approx \text{outs} \times 4 \qquad P(\text{hit on the next card}) \approx \text{outs} \times 2`,
          caption: 'A fast table-side approximation: with two cards still to come (after the flop), multiply outs by roughly 4; with one card to come (after the turn), multiply by roughly 2. It is most accurate for mid-sized out counts (around 8–12) and slightly overestimates for very large out counts, where the exact combinatorial calculation (used in the calculator above) is worth using instead.',
        },
        { t: 'p', text: 'The shortcut exists because working out the exact combinatorial probability at the table, accounting for exactly how many unseen cards remain and how many draws are left, is too slow to do in your head under time pressure. It trades a small amount of accuracy for speed, which is a reasonable trade in a game where decisions are timed.' },
      ],
    },
    {
      id: 'pot-odds',
      title: 'Converting pot odds to a breakeven percentage',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{breakeven equity} = \frac{\text{amount to call}}{\text{pot} + \text{amount to call}}`,
          where: [
            { sym: '\\text{pot}', def: 'The size of the pot before your call' },
            { sym: '\\text{amount to call}', def: 'What you must put in to continue' },
          ],
          caption: 'If a $100 pot has a $25 bet into it, you must call $25 to win a $125 pot (the $100 plus the $25 you are matching), your breakeven equity is 25/125 = 20%. If your actual win chance (from your outs) is above 20%, calling has positive expected value; if it is below, calling loses money on average even though it might still win this particular hand.',
        },
        { t: 'callout', tone: 'tip', title: 'A flush draw almost always has the right odds to call a reasonable bet', text: 'A flush draw after the flop has roughly 35% equity to complete by the river (9 outs × 4 ≈ 36%, close to the exact figure). That beats the breakeven percentage of almost any bet smaller than the pot itself, which is exactly why flush and open-ended straight draws are so commonly continued with, while weaker draws like a gutshot (≈16–17%) need a much smaller bet relative to the pot to justify a call on pot odds alone.' },
      ],
    },
    {
      id: 'implied-odds',
      title: 'Implied odds: looking beyond the current bet',
      blocks: [
        { t: 'p', text: 'Pure pot odds only look at the money already in the pot and the bet in front of you, but a draw that misses costs you only the current call, while a draw that hits can win much more money on later streets, if your opponent keeps betting into your now-strong hand. "Implied odds" is the idea that a draw can be worth calling even when the pot odds alone say no, because of the extra money expected to be won later if it connects.' },
        {
          t: 'terms',
          items: [
            { term: 'Implied odds', def: 'The additional money you expect to win on future betting rounds if your draw completes, added on top of the current pot when deciding whether a call is profitable.' },
            { term: 'Reverse implied odds', def: 'The opposite risk: completing your hand but still losing more money later because an opponent has an even better hand that also improved, common with low-end straights or weak flushes that can be "out-flushed" or "out-straighted."' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Implied odds are an estimate, not a guarantee', text: 'Relying heavily on implied odds requires an honest, skeptical estimate of how much more money you will actually win when you hit, against a cautious opponent who slows down the moment a scary card appears, the "extra" money implied odds promise may never materialise, which is a common way inexperienced players talk themselves into unprofitable calls.' },
      ],
    },
  ],
  sources: [
    'Sklansky, D., & Malmuth, M. (1999). *Hold’em Poker for Advanced Players* (21st century ed.). Two Plus Two Publishing.',
    'Snyder, A. (2006). *The Poker Tournament Formula*. Deep Six Books.',
    'Chen, B., & Ankenman, J. (2006). *The Mathematics of Poker*. ConJelCo.',
  ],
  related: ['games/poker/bluffing-and-game-theory', 'games/poker/rules-and-hand-rankings', 'mathematics/probability/counting'],
}

export default guide
