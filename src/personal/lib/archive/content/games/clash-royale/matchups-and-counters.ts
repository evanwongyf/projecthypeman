import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'You rarely get to pick what the opponent sends. Knowing the cheap, reliable answer to each common threat, before it is bearing down on your tower, turns a panicked guess into a calm, elixir-efficient trade.',
  nutshell: [
    'Most threats have a **cheap, repeatable** answer rather than needing a big spell every time.',
    'Splash damage (an area-of-effect hit) is the single best answer to any card that comes in groups.',
    'A building that **redirects** a melee attacker (like a Hog Rider or Giant) buys far more time than its elixir cost suggests.',
    'Air threats need a dedicated anti-air answer, many ground-only defenders cannot touch them at all.',
  ],
  sections: [
    {
      id: 'flow',
      title: 'What is coming at my tower?',
      blocks: [
        {
          t: 'diagram',
          title: 'Quick triage for an incoming push',
          nodes: [
            { id: 'start', label: 'Something is approaching', col: 2, row: 1, shape: 'pill', tone: 'ink' },
            { id: 'air', label: 'Is it flying?', col: 2, row: 2, shape: 'diamond', tone: 'teal' },
            { id: 'group', label: 'Is it a group (3+) or a swarm?', col: 1, row: 3, shape: 'diamond', tone: 'mustard' },
            { id: 'single-tank', label: 'Is it one big, slow tank?', col: 3, row: 3, shape: 'diamond', tone: 'mustard' },
            { id: 'anti-air', label: 'Anti-air unit or splash', sub: 'Musketeer, Mega Minion, Minions, Archers', col: 1, row: 1, tone: 'mint' },
            { id: 'splash', label: 'Splash damage', sub: 'Valkyrie, Bowler, Wizard, a small spell', col: 1, row: 4, tone: 'mint' },
            { id: 'redirect', label: 'Redirect building', sub: 'Cannon, Tombstone, Tesla, Inferno Tower', col: 3, row: 4, tone: 'mint' },
            { id: 'mini-tank', label: 'Point damage mini-tank', sub: 'Mini P.E.K.K.A, Knight, Valkyrie', col: 3, row: 2, tone: 'mint' },
          ],
          edges: [
            { from: 'start', to: 'air' },
            { from: 'air', to: 'anti-air', label: 'yes' },
            { from: 'air', to: 'group', label: 'no, ground' },
            { from: 'air', to: 'single-tank', label: 'no, ground' },
            { from: 'group', to: 'splash', label: 'yes' },
            { from: 'single-tank', to: 'redirect', label: 'yes, building-targeting' },
            { from: 'single-tank', to: 'mini-tank', label: 'yes, tower-targeting' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Default answer', text: 'If nothing fits cleanly, a single splash-damage unit answers more threats than almost any other category, which is why Valkyrie, Wizard and Bowler appear in so many decks regardless of archetype.' },
      ],
    },
    {
      id: 'specific',
      title: 'Specific threats and their cheap answers',
      blocks: [
        {
          t: 'table',
          head: ['Threat', 'What makes it dangerous', 'Cheap answer', 'Why it works'],
          rows: [
            ['Hog Rider', 'Fast, targets buildings only, hard to outrun on foot', 'Cannon, Tombstone or Tesla', 'Redirects the Hog Rider onto the building, wasting its speed while it is chipped down'],
            ['Giant / Royal Giant push', 'A big tank soaking hits while support does the real damage', 'A mini-tank on the tank, splash on the support', 'Splits the push into two smaller, separately answerable problems'],
            ['Balloon', 'Huge single-target damage to a tower if it ever connects', 'Any anti-air unit, ideally one that reaches it before the bridge', 'Balloon has no answer to being killed before it is in range to drop its bomb'],
            ['Goblin Barrel', 'Drops directly on the tower, bypassing ground defence entirely', 'The Log, Zap, Arrows or a cheap ground swarm', 'A small spell one-shots all three Goblins for one elixir'],
            ['Miner / Graveyard chip', 'Bypasses buildings and the bridge entirely', 'A cheap unit placed directly on top of it, or a small spell for Graveyard\'s swarm', 'Removing it the instant it lands denies almost all of its value'],
            ['X-Bow / Mortar', 'Hits the tower from a safe distance once placed', 'A fast unit that reaches it before it finishes placing, or sustained pressure to force it down', 'The building cannot move or defend itself, reaching it in time denies the whole investment'],
            ['Three Musketeers split push', 'Forces you to defend two or three lanes worth of ranged damage', 'A big splash hit the instant they are deployed together', 'They start clustered for a moment before spreading, the only window to hit all three at once'],
          ],
        },
      ],
    },
    {
      id: 'principle',
      title: 'The underlying principle',
      blocks: [
        { t: 'p', text: 'Nearly every "hard counter" in this game comes down to one of three mismatches: a splash hit against a group, a redirect building against a single-target melee pusher, or a dedicated anti-air unit against something that flies. Once you can categorise an incoming threat this way, you do not need to memorise a counter list, you can work out a reasonable answer even for a card you have never seen.' },
        { t: 'links', items: [{ path: 'games/clash-royale/card-roles-glossary', note: 'Next: the role vocabulary used throughout this shelf' }] },
      ],
    },
  ],
  related: ['games/clash-royale/popular-decks', 'games/clash-royale/card-roles-glossary'],
}

export default guide
