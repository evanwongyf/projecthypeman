import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Almost every deck you will see is built around one of a small number of game plans. Knowing which one you are playing, and which one you are facing, tells you what tempo to play at and what your opponent is trying to achieve, long before any specific card matters.',
  nutshell: [
    '**Cycle** decks are cheap and fast, aiming to replay a weak win condition more often than the opponent can afford to answer it.',
    '**Beatdown** decks spend early elixir banking an advantage, then commit one huge push behind a tank.',
    '**Siege** decks attack the tower directly from range, from behind their own defences, without ever crossing the river.',
    '**Bait** decks stack several cheap swarm threats that all die to the same spell, punishing an opponent who already used it.',
    '**Control** and **bridge spam** decks win through small, repeated chip damage or constant two-lane pressure rather than one big hit.',
  ],
  sections: [
    {
      id: 'map',
      title: 'The six archetypes',
      blocks: [
        {
          t: 'mindmap',
          center: 'Deck archetypes',
          branches: [
            { label: 'Cycle', tone: 'teal', items: ['Cheap average cost (~3.0)', 'Replays win condition often', 'Weak to being out-defended cheaply'] },
            { label: 'Beatdown', tone: 'orange', items: ['Banks elixir early', 'One huge stacked push', 'Weak early and to a fast counter-push'] },
            { label: 'Siege', tone: 'mustard', items: ['X-Bow or Mortar hits the tower directly', 'Never needs to cross the bridge', 'Weak if the siege building is rushed down'] },
            { label: 'Bait', tone: 'pink', items: ['Three+ swarm threats, one small-spell weakness', 'Punishes a used Log/Zap/Arrows', 'Weak to a deck with two small spells'] },
            { label: 'Control', tone: 'mint', items: ['Wins on chip damage over time', 'Strong, efficient defensive cards', 'Weak to being out-tempoed by a faster cycle'] },
            { label: 'Bridge spam', tone: 'lavender', items: ['Fast units straight over the bridge', 'Overloads both lanes at once', 'Weak to a single strong splash defender'] },
          ],
        },
      ],
    },
    {
      id: 'details',
      title: 'What each is actually doing',
      blocks: [
        {
          t: 'table',
          head: ['Archetype', 'Win condition examples', 'Game plan', 'Biggest weakness'],
          rows: [
            ['Cycle', 'Hog Rider, Miner, Royal Hogs', 'Spend only on cheap support, replay the win condition every cycle, chip constantly', 'Falls behind if forced into an expensive defensive trade'],
            ['Beatdown', 'Golem, Lava Hound, Giant', 'Bank elixir (often with an Elixir Collector), commit one tank plus several support cards at once', 'Vulnerable before the push is ready, and to a fast counter-push after it trades'],
            ['Siege', 'X-Bow, Mortar', 'Place the siege building in range of the tower from behind your own defences, protect it, let it fire', 'Must survive the rush to kill the building before it is placed or finishes'],
            ['Bait', 'Goblin Barrel, Graveyard', 'Stack three or four different swarm threats that share one counter, bait that counter out, then land the one it cannot stop', 'A deck carrying two small spells answers every threat without running dry'],
            ['Control', 'Miner, Royal Giant (chip variant)', 'Defend efficiently, chip the tower a little each exchange, avoid big commitments', 'A faster cycle deck can out-tempo it before the chip adds up'],
            ['Bridge spam', 'Battle Ram, Ram Rider, Royal Hogs', 'Throw fast units over the bridge the instant elixir allows, pressuring both lanes', 'One efficient splash-damage defender can answer most of the roster at once'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Decks mix archetypes', text: 'Few real decks are a pure example, a "beatdown" deck often carries a cheap cycle card for chip damage while the big push builds, and a "control" deck usually has one win condition it leans on when ahead. The labels describe the dominant plan, not a strict category.' },
      ],
    },
    {
      id: 'next',
      title: 'Next',
      blocks: [{ t: 'links', items: [{ path: 'games/clash-royale/popular-decks', note: 'Eight named decks, one from most of these archetypes' }] }],
    },
  ],
  sources: ['This project\'s own classification of widely recognised deck archetypes; general strategy-community knowledge, not reproduced from a single source.'],
  related: ['games/clash-royale/elixir-and-economy', 'games/clash-royale/popular-decks'],
}

export default guide
