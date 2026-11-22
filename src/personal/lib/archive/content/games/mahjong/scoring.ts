import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Mahjong scoring looks intimidating at first because it runs through two separate numbers, han and fu, before producing a final point value, and then splits that value differently depending on exactly how you won. Underneath, it is a fixed, mechanical formula; the complexity is all in the lookup, not in any judgement call.',
  nutshell: [
    '**Han** measures how valuable your hand’s yaku are; **fu** measures structural details of how the hand was built, both feed into one formula for the final score.',
    'The formula is **base points = fu × 2^(2 + han)**, small increases in han cause the score to roughly double repeatedly, which is why chasing one more han is often worth far more than it sounds.',
    'Very high-value hands are capped into named tiers, **mangan, haneman, baiman, sanbaiman** and **yakuman**, each with fixed point totals, so the formula stops mattering once a hand is big enough.',
    'Who pays, and how much, depends on **ron vs. tsumo** and whether the **winner (or loser) is the dealer**, the dealer both pays and receives double compared with everyone else.',
  ],
  sections: [
    {
      id: 'han-and-fu',
      title: 'Han and fu, separately',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Han (翿)', def: 'A count of "value points" from every yaku your hand qualifies for, plus bonus han from dora (see below). More han means a more valuable hand, riichi alone is 1 han, a yakuman is treated as 13.' },
            { term: 'Fu (符)', def: 'A count of structural "fu points" built from a base value plus bonuses for how the hand’s sets and wait were formed, triplets are worth more fu than sequences, closed triplets more than open ones, and terminal/honor triplets more than simple ones.' },
            { term: 'Dora', def: 'Bonus tiles (not a yaku themselves, but each one in your hand adds 1 han) determined by a face-up indicator tile revealed at the start of the hand, a dora can turn an otherwise modest hand into a large one, but cannot, on its own, satisfy the "needs at least one yaku" rule.' },
          ],
        },
        {
          t: 'table',
          head: ['Fu source', 'Fu value'],
          rows: [
            ['Base (every hand starts here)', '20'],
            ['Winning by a closed ron (not tsumo, not an open hand)', '+10'],
            ['Triplet of simple tiles (2–8), open', '+2'],
            ['Triplet of simple tiles (2–8), closed', '+4'],
            ['Triplet of a terminal or honor tile, open', '+4'],
            ['Triplet of a terminal or honor tile, closed', '+8'],
            ['Quad (kan), simple/terminal/honor, open/closed', '+8 to +32 depending on type'],
            ['A wait that is not two-sided (an edge, closed, or pair wait)', '+2'],
            ['A pair of dragons, your seat wind, or the round wind', '+2'],
            ['Winning by self-draw (tsumo), unless the hand is pinfu', '+2'],
          ],
          caption: 'The total is rounded up to the nearest 10 fu. A pinfu hand (all sequences, a two-sided wait, a non-scoring pair) that wins by tsumo is a special fixed case worth exactly 20 fu, since none of the usual bonuses apply.',
        },
      ],
    },
    {
      id: 'the-formula',
      title: 'From han and fu to a final score',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{base points} = fu \times 2^{(2 + han)}`,
          caption: 'Each extra han roughly doubles the score, going from 2 han to 3 han at the same fu doubles the base points, which is why experienced players often choose a slightly slower hand that secures one more han over a faster, cheaper win.',
        },
        {
          t: 'table',
          head: ['Han (at typical fu)', 'Named tier', 'Base points (capped)'],
          rows: [
            ['1–4 han (under the mangan threshold)', 'Regular scoring', 'Computed directly from the formula above'],
            ['3 han at 70+ fu, 4 han at 40+ fu, or exactly 5 han', 'Mangan', '2000'],
            ['6–7 han', 'Haneman', '3000'],
            ['8–10 han', 'Baiman', '4000'],
            ['11–12 han', 'Sanbaiman', '6000'],
            ['13+ han, or any yakuman', 'Yakuman', '8000'],
          ],
          caption: 'Past a certain point, fu stops mattering at all, a 6-han hand is a haneman at 3000 base points whether it carries 30 fu or 110 fu, which removes the need to calculate fu precisely for very large hands.',
        },
      ],
    },
    {
      id: 'who-pays',
      title: 'Who pays, and how much',
      blocks: [
        {
          t: 'table',
          head: ['Win type', 'Who pays', 'How much'],
          rows: [
            ['Ron (any winner)', 'Only the player who discarded the winning tile', 'Base points × 4 if the winner is not the dealer, × 6 if the winner is the dealer (rounded up to the nearest 100)'],
            ['Tsumo, winner is not the dealer', 'All three other players', 'The dealer pays base × 2; each non-dealer pays base × 1 (both rounded up to the nearest 100)'],
            ['Tsumo, winner is the dealer', 'All three other players equally', 'Each pays base × 2 (rounded up to the nearest 100)'],
          ],
          caption: 'A mangan (base 2000) ron against a non-dealer therefore pays exactly 8000 (2000×4); the same mangan won by the dealer pays 12000 (2000×6), the dealer’s bonus and penalty are symmetric, which is why winning as dealer is especially valuable, and why dealing into someone else’s win as dealer is especially costly.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Honba (repeat counters)', body: 'Each consecutive hand the same player stays dealer (by winning or by a draw) adds one honba counter, adding a flat 300 points to a ron payment (or 100 per paying player on a tsumo), a visible marker of how long the current dealer has held the seat.' },
            { title: 'Riichi sticks', body: 'Declaring riichi costs 1000 points, placed on the table as a stick. If you do not win that hand, the stick stays on the table and rolls over to whoever wins the next hand, meaning the riichi declarer’s 1000 points are genuinely at risk, not just symbolically staked.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Japan Mahjong Organization. *Official Riichi Rules, Scoring Tables*.',
    'Fritz, D., & Silberstang, E. (2010). *The Complete Idiot’s Guide to Mahjong*. Alpha Books.',
    'Riichi.wiki community reference (fu and scoring compendium).',
  ],
  related: ['games/mahjong/winning-hands-and-yaku', 'games/mahjong/rules-and-tiles', 'games/mahjong/strategy-and-probability'],
}

export default guide
