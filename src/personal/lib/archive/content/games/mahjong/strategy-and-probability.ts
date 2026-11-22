import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Good Mahjong play comes down to two skills working together: getting your own hand to a complete shape as efficiently as possible, and reading what everyone else’s discards reveal about their hands so you don’t hand them a win. Both skills reduce to counting tiles.',
  nutshell: [
    '**Shanten** counts how many tile exchanges your hand still needs to reach tenpai (ready); a lower shanten number is always closer to winning.',
    '**Ukeire** counts how many different tiles would actually improve your hand right now, comparing the ukeire of two possible discards is how strong players decide between them, not instinct.',
    'The probability of drawing a specific needed tile depends on how many copies are still **"live"** (unseen, not in your hand or visible discards), a wait on 4 live copies is roughly four times as likely per draw as a wait on 1 live copy.',
    '**Furiten** is a rule every player needs to track: if you have ever discarded a tile that would complete your own hand, you cannot ron on that wait at all until your next draw, a genuine trap for an inattentive player.',
    '**Defense** mostly means reading discards: a tile already discarded by an opponent is provably safe against them specifically (they can never ron on their own discarded tile, by the furiten rule).',
  ],
  sections: [
    {
      id: 'shanten-and-ukeire',
      title: 'Shanten and ukeire: measuring how close a hand is',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Shanten', def: 'The minimum number of tile exchanges needed to reach tenpai (one tile from winning). A complete hand is shanten −1; tenpai is shanten 0; a hand needing one more useful tile before even being tenpai is shanten 1, and so on.' },
            { term: 'Ukeire (受け入れ)', def: 'The number of tiles (counting every remaining live copy) that would reduce your current shanten if drawn. A wider ukeire means more ways to improve on your very next draw, a direct, countable measure of how "live" a hand is.' },
          ],
        },
        { t: 'p', text: 'When deciding which tile to discard, strong players do not just ask "does this tile help my hand"they compare the ukeire of the hand that results from each possible discard, and keep whichever discard leaves the most total live tiles that would improve the hand. This is a mechanical, countable comparison, not a feeling, even though skilled players learn to estimate it quickly at the table without stopping to count exhaustively every time.' },
        { t: 'callout', tone: 'tip', title: 'Why keeping more options open usually beats committing early', text: 'A hand built from flexible shapes (middle tiles like 4s, 5s and 6s, which can start a sequence in three different ways) tends to have much higher ukeire early on than a hand already committed to specific pairs or edge waits, which is why experienced players often discard terminals and honors early even when a specific hand shape has not yet been decided.' },
      ],
    },
    {
      id: 'drawing-probability',
      title: 'The probability of drawing a tile you need',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(\text{draw it on your next turn}) \approx \frac{\text{live copies}}{\text{unseen tiles}}`,
          caption: 'A rough per-draw estimate"unseen tiles" means every tile not in your own hand and not visible in anyone’s discards or melds, which shrinks steadily over the course of a hand as more tiles are revealed.',
        },
        {
          t: 'table',
          head: ['Live copies of your winning tile', 'Approx. chance per single draw (70 unseen tiles, typical mid-hand)', 'Why it matters'],
          rows: [
            ['4 (none visible anywhere)', '≈5.7%', 'The strongest possible wait, a fresh, undiscarded tile type'],
            ['3 (one copy visible)', '≈4.3%', 'Still a solid wait'],
            ['2 (two copies visible or in your own hand)', '≈2.9%', 'A noticeably weaker wait, worth considering changing shape if possible'],
            ['1 (three copies already visible)', '≈1.4%', 'A very weak wait, sometimes called being "dead" or close to it, often worth folding the hand defensively instead'],
          ],
          caption: 'These are rough single-draw estimates for illustration; the exact probability of winning by a given turn depends on the hypergeometric distribution over the number of draws remaining, and shrinks further as the live wall (not the dead wall reserved for kan replacements) runs down over the course of the hand.',
        },
      ],
    },
    {
      id: 'furiten',
      title: 'Furiten: the rule that punishes missing your own wait',
      blocks: [
        { t: 'p', text: 'If any tile that would complete your hand has ever appeared among your own discards, even by accident, even from many turns ago, you are in furiten, and cannot ron on that wait at all, on anyone’s discard, until your very next draw (at which point you could still tsumo normally). This applies to the entire wait, not just the specific tile you discarded: if you are waiting on either a 4 or a 7 to complete a hand and you discarded a 4 earlier, you cannot ron on a 7 either, since the wait as a whole is tainted.' },
        { t: 'callout', tone: 'warn', title: 'Why this matters even if you play carefully', text: 'Furiten commonly happens by accident: a player discards a tile early (before they know what their final wait will be), then later ends up tenpai on a wait that happens to include that exact tile. Careful players track their own discard pile specifically to avoid this, since being in furiten without realising it means silently missing winning opportunities all game.' },
      ],
    },
    {
      id: 'defense',
      title: 'Reading discards for defence',
      blocks: [
        {
          t: 'checklist',
          items: [
            'A tile already discarded by a specific opponent is provably safe against them (genbutsu), the furiten rule means they can never ron on their own prior discard',
            'A tile discarded by any player after an opponent declared riichi is also safe against that opponent from then on, for the same furiten reason, their wait was locked in at the moment of the riichi declaration',
            'Suji (a tile two away from a previously-discarded tile of the same suit, e.g. a 4 discarded makes a 7 "suji-safe"-ish) reduces, but does not eliminate, the chance a two-sided wait includes that tile, it is a heuristic, not a guarantee',
            'When an opponent has declared riichi or clearly has a fast, dangerous-looking hand, folding (discarding only tiles you believe are safe, even at the cost of your own hand’s progress) is a legitimate, commonly correct strategic choice, not a failure',
          ],
        },
        { t: 'p', text: 'The tension between pushing your own hand toward a win and folding defensively to avoid dealing into someone else’s is the central ongoing decision in every hand of Mahjong, and it is why experienced players watch every discard at the table, not only their own.' },
      ],
    },
  ],
  sources: [
    'Japan Mahjong Organization. *Official Riichi Rules*.',
    'Riichi.wiki community reference (shanten, ukeire and furiten compendium).',
    'Shimizu, A. (various). *Riichi Mahjong Strategy Guides*.',
  ],
  related: ['games/mahjong/winning-hands-and-yaku', 'games/mahjong/scoring', 'mathematics/probability/counting'],
}

export default guide
