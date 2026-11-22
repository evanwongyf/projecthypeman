import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Clash Royale is a real-time card battle: two players each bring an 8-card deck, spend a resource called elixir to deploy troops, spells and buildings onto a split arena, and try to knock down the other side\'s towers before the clock runs out. This shelf covers the ideas that explain almost every decision in a match, what elixir really costs you, the handful of deck shapes nearly every deck fits into, popular decks and how to run them, and what to do when a specific threat is coming at your tower.',
  nutshell: [
    'Elixir, not cards, is the real currency. Every placement is a **trade**: did you spend less elixir than the damage or value you got back?',
    'Almost every deck is one of a few **archetypes**, cycle, beatdown, siege, bait, control or bridge spam, each with a different win condition and tempo.',
    'A **win condition** card (Hog Rider, Giant, X-Bow, Balloon, Miner, Graveyard...) is the card a deck is actually built around; everything else supports it or buys it time.',
    'Towers (two princess towers and a king per side) do the actual damage counting. The king tower stays dormant until it takes damage itself.',
    'This site\'s card browser, deck builder and real-time battle sandbox live in the Relax area, under Clash Royale, this archive shelf is the strategy write-up that explains what you see there.',
  ],
  sections: [
    {
      id: 'map',
      title: 'What is on this shelf',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Economy', title: 'Elixir and trading', body: 'Why every card placement is a trade, what "positive" and "negative" trades mean, and how double elixir time changes the whole game.' },
            { tag: 'Shapes', title: 'Deck archetypes', body: 'The six deck shapes almost everything fits into, as a mindmap, with the trade-off each one is making.' },
            { tag: 'Decks', title: 'Popular decks', body: 'Eight well-known decks, their 8 cards, their win condition, and the game plan for playing each one.' },
            { tag: 'Defence', title: 'Matchups and counters', body: 'A flowchart for the common things that come at your tower, and what answers them cheaply.' },
            { tag: 'Reference', title: 'Card roles glossary', body: 'What "tank", "mini-tank", "support", "win condition" and the other role labels used throughout this shelf actually mean.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Where the interactive tools live',
          text: 'Open **Relax → Clash Royale** on this site for the full 120-card browser with every card\'s elixir cost, rarity and role, an 8-card deck builder with elixir-average and saved decks, and a real-time battle sandbox where you deploy cards and watch them fight. Card names, elixir costs and rarities there are real published facts; the combat numbers, icon art and battle engine are this project\'s own approximations built to show how a card plays, not a copy of the original game.',
        },
      ],
    },
    {
      id: 'towers',
      title: 'The basic win condition',
      blocks: [
        { t: 'p', text: 'Each side has three towers: a **king tower** at the back, and two **princess towers** guarding the two lanes (bridges) that cross the river. A match is won by whichever side has destroyed more towers when time runs out, or instantly if a king tower falls. The king tower does not attack until it has taken damage itself, one reason a glancing hit on the king can wake up a second line of defence you were not expecting.' },
        { t: 'list', items: [
          'Destroying a **princess tower** removes one of the opponent\'s two defenders on that side of the field, opening that lane for easier pushes afterward.',
          'Destroying the **king tower** (after both princess towers, or a stray hit that finishes it) ends the match immediately.',
          'If no tower falls, whoever has destroyed more towers (or dealt more tower damage in **sudden death**, called overtime) at the final whistle wins; a tie is a draw.',
        ] },
      ],
    },
    {
      id: 'next',
      title: 'Where to go next',
      blocks: [
        { t: 'links', items: [
          { path: 'games/clash-royale/elixir-and-economy', note: 'Start with the economy: it explains most decisions in a match' },
          { path: 'games/clash-royale/archetypes', note: 'Then the deck shapes, so popular decks make sense' },
          { path: 'games/clash-royale/popular-decks', note: 'Eight decks and how to play them' },
          { path: 'games/clash-royale/matchups-and-counters', note: 'What to do when something specific is coming at you' },
          { path: 'games/clash-royale/card-roles-glossary', note: 'A glossary of the role words used throughout' },
        ] },
      ],
    },
  ],
  sources: [
    'Supercell. Clash Royale (2016), the game this reference is inspired by; rules and tower behaviour described here are general knowledge about how the game plays.',
    'This project\'s own card data: names, elixir costs and rarities cross-checked against a community-maintained card list; all combat numbers, icon art, deck write-ups and the battle sandbox are original approximations, not official data.',
  ],
  related: ['games/start-here'],
}

export default guide
