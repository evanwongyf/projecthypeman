import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'This shelf, the card browser and the deck builder all describe cards by role rather than just by name. These are the role labels used throughout, what each means, and a few real cards from the 120-card reference that illustrate it.',
  nutshell: [
    'A **win condition** is the card a deck is built to protect and land, everything else in the deck supports it.',
    '**Tank** and **mini-tank** soak hits so something behind them (or they themselves) can do the real work.',
    '**Swarm** cards trade a group of cheap, fragile bodies for total damage, strong until one splash hit answers all of them at once.',
    'Buildings split into **defensive** (sit and shoot at anything in range) and **spawner** (periodically produce small units).',
  ],
  sections: [
    {
      id: 'glossary',
      title: 'Role glossary',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Win condition', def: 'The card a deck is actually trying to land on the tower, Hog Rider, Giant, X-Bow, Balloon, Miner and Graveyard are all examples. Nearly every other card in such a deck exists to protect or set up this one.' },
            { term: 'Tank', def: 'A high-hitpoint unit built to absorb damage at the front of a push so cheaper support cards survive behind it. Golem and P.E.K.K.A are classic tanks.' },
            { term: 'Mini-tank', def: 'A smaller, cheaper version of a tank, enough hitpoints to survive a few hits and do solid damage, without the elixir cost of a full tank. Knight and Valkyrie are typical mini-tanks.' },
            { term: 'Swarm', def: 'Several cheap, fragile units deployed together, relying on total numbers rather than any single unit\'s toughness. Skeletons and Goblin Gang are swarms, and the reason splash damage is so valuable on defence.' },
            { term: 'Support', def: 'A card whose job is to help another card succeed rather than win on its own, ranged damage, healing, or a buff. Musketeer and Night Witch are support cards.' },
            { term: 'Hero / champion', def: 'A small set of especially powerful units with an extra ability, usually a stronger evolved form of an existing role. Archer Queen and Golden Knight sit in this category.' },
            { term: 'Spell (utility / small / big / buff)', def: 'Instant-effect cards rather than units. Small spells (The Log, Zap) clear swarms cheaply; big spells (Fireball, Lightning, Rocket) punish stacked pushes or finish towers; buff spells (Rage, Freeze, Tornado, Clone) change how existing units behave rather than dealing damage themselves.' },
            { term: 'Defensive building', def: 'A stationary structure that attacks anything in range, Cannon, Tesla, Inferno Tower. Its main value is redirecting a tower-targeting melee unit onto itself.' },
            { term: 'Spawner building', def: 'A stationary structure that periodically produces small units of its own, Barbarian Hut, Goblin Hut, Furnace, Tombstone, trading one placement for a steady trickle of defenders or attackers.' },
          ],
        },
      ],
    },
    {
      id: 'examples',
      title: 'Roles by rarity: a quick cross-section',
      blocks: [
        {
          t: 'table',
          head: ['Role', 'Common example', 'Rare/Epic example', 'Legendary/Champion example'],
          rows: [
            ['Win condition', 'Hog Rider (rare)', 'Royal Giant (common) / Balloon (epic)', 'Miner (legendary)'],
            ['Tank', 'Giant (rare)', 'Golem (epic)', 'Lava Hound (legendary)'],
            ['Mini-tank', 'Knight (common)', 'Valkyrie (rare)', 'Mighty Miner (champion)'],
            ['Swarm', 'Skeletons (common)', 'Goblin Gang (common)', 'Skeleton Army (epic)'],
            ['Support', 'Archers (common)', 'Musketeer (rare)', 'Night Witch (legendary)'],
            ['Small spell', 'Zap (common)', 'The Log (legendary)', 'Royal Delivery (common)'],
            ['Big spell', 'Fireball (rare)', 'Poison (epic)', 'Lightning (epic) / Rocket (rare)'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Open the card browser', text: 'Relax → Clash Royale → Cards lets you filter by exactly these rarities and roles, search by name, and see every card\'s full stat line and tip.' },
      ],
    },
  ],
  related: ['games/clash-royale/matchups-and-counters', 'games/clash-royale/start-here'],
}

export default guide
