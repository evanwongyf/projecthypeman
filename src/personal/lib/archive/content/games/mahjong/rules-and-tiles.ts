import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Mahjong is a four-player tile game: each turn you draw one tile and discard one, racing to assemble a complete 14-tile hand before anyone else. This page covers the Japanese riichi ruleset, the most widely standardised version played internationally, the tiles and winning shapes are shared across nearly every regional variant, even where scoring details differ.',
  nutshell: [
    'The full set is **136 tiles**: three suits of 1–9 (four copies each), plus four wind tiles and three dragon tiles (four copies each).',
    'Each of the **4 players starts with 13 tiles**; a complete, winning hand is always **14 tiles**, 4 sets plus 1 pair, or one of two rarer special shapes.',
    'Each turn is simple: **draw a tile, then discard one**, unless the tile you drew completes your hand, in which case you can declare a win instead.',
    'Players can **call** a tile another player just discarded to form a meld early, chi (sequence), pon (triplet) or kan (quad), speeding up their hand at the cost of exposing it.',
    'You can win by **drawing your own winning tile (tsumo)** or by **completing your hand off someone else’s discard (ron)**, but only if your hand contains at least one valid yaku (covered on the next page).',
  ],
  sections: [
    {
      id: 'the-tiles',
      title: 'The 136-tile set',
      blocks: [
        { t: 'games-viz', viz: 'mahjong-tiles' },
        {
          t: 'table',
          head: ['Tile group', 'Count', 'Notes'],
          rows: [
            ['Characters (man/wan), 1–9', '9 ranks × 4 copies = 36', 'One of the three "number" suits'],
            ['Dots (pin/circles), 1–9', '9 ranks × 4 copies = 36', 'One of the three "number" suits'],
            ['Bamboo (sou), 1–9', '9 ranks × 4 copies = 36', 'One of the three "number" suits'],
            ['Winds: East, South, West, North', '4 types × 4 copies = 16', 'Honor tiles, cannot form sequences, only pairs or triplets/quads'],
            ['Dragons: Red (chun), Green (hatsu), White (haku)', '3 types × 4 copies = 12', 'Honor tiles, same restriction as winds'],
          ],
          caption: '36 + 36 + 36 + 16 + 12 = 136 tiles. Many rule sets also include a few bonus "red five" tiles (a 5 in each suit replaced by a special red-coloured copy) worth an automatic extra point when held, without changing the 136-tile count.',
        },
        { t: 'callout', tone: 'note', title: 'Terminals and honors', text: 'The 1 and 9 of each suit are called "terminals"; winds and dragons are called "honors." Several yaku (covered next) specifically reward or require hands built heavily around terminals and honors, since they are structurally harder to use in sequences.' },
      ],
    },
    {
      id: 'the-deal',
      title: 'Dealing and seating',
      blocks: [
        { t: 'p', text: 'Four players sit at the compass points East, South, West and North. The East seat is the dealer for that hand and deals 13 tiles to everyone, then takes a 14th tile for themselves to start, meaning the dealer always begins a turn ahead of everyone else, and also faces a scoring bonus (and a penalty) tied to that seat, covered on the scoring page.' },
        {
          t: 'flow',
          title: 'One player’s turn',
          nodes: [
            { label: 'Draw one tile from the wall', tone: 'process' },
            { label: 'Hand is now 14 tiles, check for a win', sub: 'if complete with a valid yaku, declare tsumo instead of discarding', tone: 'process' },
            { label: 'Discard one tile face up', tone: 'output' },
            { label: 'Other players may call the discard', sub: 'chi, pon, kan or ron, see below', tone: 'human' },
            { label: 'Turn passes to the next player', sub: 'normally the player to the right, unless a call changed the order', tone: 'process' },
          ],
          loop: 'repeated until someone wins or the wall runs out',
        },
      ],
    },
    {
      id: 'calling',
      title: 'Calling another player’s discard',
      blocks: [
        {
          t: 'table',
          head: ['Call', 'What it forms', 'Who can call it'],
          rows: [
            ['Chi', 'A sequence (3 tiles in a row, same suit) using the discard plus 2 from your hand', 'Only the player seated immediately after the discarder, and only on their own turn'],
            ['Pon', 'A triplet (3 identical tiles) using the discard plus 2 matching tiles from your hand', 'Any player, interrupting normal turn order'],
            ['Kan (open)', 'A quad (4 identical tiles) using the discard plus 3 matching tiles from your hand', 'Any player; draws a replacement tile from a separate dead wall and reveals a new bonus indicator tile'],
            ['Kan (closed)', 'A quad formed entirely from your own hand, declared on your own turn', 'Only the hand’s owner, from their own 4 matching tiles'],
            ['Ron', 'Declaring a win using someone else’s discard as your final, 14th tile', 'Any player whose hand is complete (with a valid yaku) using that exact tile'],
          ],
          caption: 'Calling a meld (chi, pon or kan) exposes it face up for everyone to see, and skips the normal turn order straight to the caller, who must then discard, this speeds up a hand but reveals information and often costs access to yaku that require a fully concealed hand.',
        },
        { t: 'callout', tone: 'tip', title: 'Priority when multiple players want the same discard', text: 'If more than one player could call the same discard, ron always wins out over pon/kan, which in turn wins out over chi, and a chi call is only legal for the very next player in turn order, while pon, kan and ron can come from anyone at the table, since winning or forming a triplet are considered higher priority than merely speeding up a sequence.' },
      ],
    },
    {
      id: 'winning-and-ending',
      title: 'What counts as a win, and how a hand ends',
      blocks: [
        { t: 'p', text: 'A winning hand is 14 tiles that form 4 complete sets (each a sequence or a triplet/quad) plus exactly one pair, or one of two special shapes, seven pairs or thirteen orphans, covered in full on the [winning hands and yaku](@games/mahjong/winning-hands-and-yaku) page. Being one tile away from a complete hand is called tenpai ("ready"); a hand further than one tile away is noten.' },
        {
          t: 'table',
          head: ['How a hand ends', 'What happens'],
          rows: [
            ['Tsumo: you draw the tile that completes your hand', 'You win; every other player pays you (amounts depend on scoring, covered next)'],
            ['Ron: someone else discards the tile that completes your hand', 'You win off that one player’s discard'],
            ['Exhaustive draw: the wall runs out with no winner', 'No one wins the hand directly; players in tenpai receive a small payment from players who were noten, then a new hand is dealt'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'A hand needs at least one yaku to win', text: 'Simply arranging 14 tiles into 4 sets and a pair is not enough on its own, the completed hand must also contain at least one valid yaku (a specific, named pattern), or the win is not legal ("yakuless," and often penalised if mistakenly declared). This single rule is what turns Mahjong from pure tile-matching into a game with real strategic depth, since players aim their hand toward a specific yaku from early on rather than just toward "any" complete shape.' },
      ],
    },
    {
      id: 'gameplay',
      title: 'Watch a full hand play out',
      blocks: [
        { t: 'p', text: 'All of the rules above in one worked example: step through an illustrative hand from the deal to a winning tsumo, with each discard and decision explained as it happens.' },
        { t: 'games-viz', viz: 'mahjong-gameplay' },
      ],
    },
  ],
  sources: [
    'Japan Mahjong Organization (recognised riichi rule reference). *Official Riichi Rules*.',
    'Fritz, D., & Silberstang, E. (2010). *The Complete Idiot’s Guide to Mahjong*. Alpha Books.',
    'Riichi.wiki community reference (riichi mahjong rules compendium).',
  ],
  related: ['games/mahjong/winning-hands-and-yaku', 'games/mahjong/scoring', 'games/mahjong/strategy-and-probability'],
}

export default guide
