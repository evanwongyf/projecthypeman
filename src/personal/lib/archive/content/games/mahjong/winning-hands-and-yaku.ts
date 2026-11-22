import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A yaku is a named, specific pattern, and a winning hand must contain at least one. This single requirement is what gives Mahjong real strategic depth: rather than grabbing any 14 tiles that happen to fit together, strong players aim their hand toward a specific, recognisable yaku from the very first few turns.',
  nutshell: [
    'The **standard winning shape** is 4 sets (sequence or triplet/quad) plus 1 pair, 14 tiles total, but it must also contain a valid yaku to legally win.',
    '**Seven pairs (chiitoitsu)** and **thirteen orphans (kokushi musou)** are two special shapes that break the 4-sets-plus-pair rule entirely, and are themselves yaku.',
    'Common yaku are worth **1–2 han** each (riichi, tanyao, pinfu, yakuhai); rarer ones are worth more, and **yakuman** hands (like kokushi or four concealed triplets) are worth the maximum score outright.',
    'Keeping a hand **fully concealed** (never calling chi/pon/open kan) unlocks extra yaku, riichi and menzen tsumo specifically require it, which is the core trade-off between speed (calling tiles) and value (staying closed).',
  ],
  sections: [
    {
      id: 'the-two-shapes',
      title: 'The two ways to form a complete hand',
      blocks: [
        { t: 'games-viz', viz: 'mahjong-hand' },
        { t: 'p', text: 'Switch between the three example hands above: the standard 4-sets-plus-pair shape, seven pairs, and the rare thirteen orphans. Notice each is a completely different way of filling the same 14 tile slots, and each one is itself tied to specific yaku, seven pairs and thirteen orphans are not just alternate shapes, they are yaku in their own right, worth 2 han and a full yakuman respectively.' },
      ],
    },
    {
      id: 'common-yaku',
      title: 'The common yaku',
      blocks: [
        {
          t: 'table',
          head: ['Yaku', 'Requirement', 'Value (closed hand)'],
          rows: [
            ['Riichi', 'A fully concealed hand, declared "ready" (tenpai) by staking 1000 points; the hand is then locked and cannot be changed', '1 han'],
            ['Menzen tsumo', 'Winning by self-draw with a fully concealed hand (no calls at all)', '1 han'],
            ['Pinfu', 'All sequences, a pair that isn’t a dragon/your seat wind/the round wind, and a two-sided wait on the final tile', '1 han'],
            ['Tanyao', 'No terminals (1s or 9s) and no honor tiles anywhere in the hand', '1 han'],
            ['Yakuhai', 'A triplet of dragons, or a triplet of your own seat wind, or a triplet of the current round wind', '1 han per qualifying triplet'],
            ['Iipeiko', 'Two identical sequences in the same suit (e.g. two separate 2-3-4 of dots)', '1 han (closed hand only)'],
            ['Sanshoku doujun', 'The same sequence appears in all three suits (e.g. 4-5-6 of characters, dots and bamboo)', '2 han closed, 1 han open'],
            ['Ittsu (pure straight)', 'The sequences 1-2-3, 4-5-6 and 7-8-9 all in one suit', '2 han closed, 1 han open'],
            ['Toitoi', 'All four sets are triplets or quads (no sequences at all)', '2 han'],
            ['Honitsu', 'Only one suit plus any honor tiles, nothing from the other two suits', '3 han closed, 2 han open'],
            ['Chinitsu', 'Only one suit, no honor tiles at all', '6 han closed, 5 han open'],
          ],
          caption: 'Han values differ between a fully concealed hand and one with open (called) melds, several yaku are worth more closed, and a few (riichi, menzen tsumo, iipeiko) require a closed hand entirely. This is the central tension in hand-building: calling tiles speeds up completion but can cost real value.',
        },
        {
          t: 'tile-hand',
          label: 'Iipeiko: two identical sequences, 2-3-4 dots, twice',
          tiles: [{ glyph: '🀚', label: '2p' }, { glyph: '🀛', label: '3p' }, { glyph: '🀜', label: '4p' }, { glyph: '🀚', label: '2p' }, { glyph: '🀛', label: '3p' }, { glyph: '🀜', label: '4p' }],
        },
        {
          t: 'tile-hand',
          label: 'Sanshoku doujun: the same sequence (4-5-6) in all three suits',
          tiles: [{ glyph: '🀊', label: '4m' }, { glyph: '🀋', label: '5m' }, { glyph: '🀌', label: '6m' }, { glyph: '🀜', label: '4p' }, { glyph: '🀝', label: '5p' }, { glyph: '🀞', label: '6p' }, { glyph: '🀓', label: '4s' }, { glyph: '🀔', label: '5s' }, { glyph: '🀕', label: '6s' }],
        },
      ],
    },
    {
      id: 'yakuman',
      title: 'Yakuman: the rarest, highest-value hands',
      blocks: [
        { t: 'p', text: 'A yakuman ("hand of hands") scores the maximum value outright regardless of han counting, treated roughly as 13 han for scoring purposes, a tier above every ordinary yaku. They are rare enough that many players go years between seeing one at the table.' },
        {
          t: 'cards',
          items: [
            { title: 'Kokushi musou (thirteen orphans)', body: 'One of every terminal and honor tile (13 distinct types), plus a duplicate of any one of them. Covered in detail in the hand explorer above.' },
            { title: 'Suuankou (four concealed triplets)', body: 'Four triplets, all formed without ever calling a tile (won by self-draw or by the final pair tile only), plus a pair, an extremely strong, fully closed hand.' },
            { title: 'Daisangen (big three dragons)', body: 'A triplet (or quad) of all three dragon tiles, red, green and white, within the same hand.' },
            { title: 'Chinroutou (all terminals)', body: 'Every tile in the hand is a terminal (a 1 or a 9 of any suit), no honors, no 2 through 8 tiles at all.' },
            { title: 'Tsuuiisou (all honors)', body: 'Every tile is an honor tile (a wind or a dragon), no number tiles from any suit at all.' },
          ],
          cols: 2,
        },
        { t: 'callout', tone: 'fact', title: 'How rare is a yakuman, really?', text: 'Precise odds depend heavily on playing style (some players actively chase kokushi or chinitsu when their opening hand suggests it), but commonly cited estimates put a given player’s chance of a yakuman at well under 1% per session of casual play, rare enough that completing one is often remembered and talked about long after the game ends.' },
      ],
    },
  ],
  sources: [
    'Japan Mahjong Organization. *Official Riichi Rules, Yaku List*.',
    'Fritz, D., & Silberstang, E. (2010). *The Complete Idiot’s Guide to Mahjong*. Alpha Books.',
    'Riichi.wiki community reference (riichi mahjong yaku and scoring compendium).',
  ],
  related: ['games/mahjong/rules-and-tiles', 'games/mahjong/scoring', 'games/mahjong/strategy-and-probability'],
}

export default guide
