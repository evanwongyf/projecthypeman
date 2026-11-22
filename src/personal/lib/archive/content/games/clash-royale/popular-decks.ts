import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'These eight decks are this project\'s own write-up of well-known deck shapes, built from real card names rather than copied from any specific published deck list. Each one is also loadable straight into the deck builder and battle sandbox under Relax → Clash Royale, so you can see the deck and then actually play a battle with it.',
  nutshell: [
    'Every deck below is **exactly 8 cards**, like a real deck, with no duplicates.',
    'Each has a clear **win condition** (the card the whole deck protects and sets up) and a short game plan for using it.',
    'They span the main archetypes: cycle (Hog Cycle), beatdown (Golem, Giant Double Prince), bait (Log Bait), siege (X-Bow), chip control (Miner Poison), and heavy air (Lava Loon, Royal Giant).',
    'Open the deck builder to load any of these presets directly, then try it in the battle sandbox.',
  ],
  sections: [
    {
      id: 'hog-cycle',
      title: 'Hog Cycle',
      lead: 'Fast cycle, the classic low-cost deck built around repeating one card.',
      blocks: [
        { t: 'cards', items: [{ title: 'The 8 cards', body: 'Hog Rider, Ice Spirit, Skeletons, The Log, Musketeer, Cannon, Fireball, Ice Golem' }] },
        { t: 'p', text: 'Hog Rider tanks nothing and needs none, it is fast and cheap enough to resend every time it trades. The rest of the deck is cheap support that keeps the average elixir cost low, so the deck always has Hog Rider available again within a few seconds.' },
        { t: 'steps', items: [
          { title: 'Defend cheaply', body: 'Cannon or Ice Golem absorbs or redirects an incoming push without spending much.' },
          { title: 'Send Hog Rider', body: 'The moment elixir allows, send Hog Rider down whichever lane is open, backed by Ice Spirit to clear small blockers in its path.' },
          { title: 'Hold your spells', body: 'Save The Log and Fireball for the opponent\'s counter-push rather than the tower, this deck wins on constant chip, not one big spell.' },
        ] },
      ],
    },
    {
      id: 'golem-beatdown',
      title: 'Golem Beatdown',
      lead: 'Heavy beatdown, one overwhelming push built around the biggest tank in the game.',
      blocks: [
        { t: 'cards', items: [{ title: 'The 8 cards', body: 'Golem, Night Witch, Baby Dragon, Mega Minion, Lightning, Elixir Collector, Tornado, Barbarian Barrel' }] },
        { t: 'p', text: 'Golem splits into two Golemites when it finally dies, so even "losing" the tank keeps dealing damage. The deck spends its early minutes banking elixir so it can afford to commit Golem plus two or three support cards all at once later.' },
        { t: 'steps', items: [
          { title: 'Bank elixir', body: 'Place Elixir Collector behind your towers early, and avoid unnecessary spending while it is up.' },
          { title: 'Commit the push', body: 'Once you have roughly 10 elixir banked for support, place Golem at the very back and stack Night Witch and Baby Dragon behind it as it walks.' },
          { title: 'Pull in defenders', body: 'Use Tornado to drag the opponent\'s defenders into the Golem\'s splash radius instead of letting them pick off the support from the side.' },
        ] },
      ],
    },
    {
      id: 'log-bait',
      title: 'Log Bait',
      lead: 'Spell bait, three swarm threats that share one weakness.',
      blocks: [
        { t: 'cards', items: [{ title: 'The 8 cards', body: 'Goblin Barrel, Princess, Dart Goblin, Knight, Skeleton Army, Rocket, The Log, Goblin Gang' }] },
        { t: 'p', text: 'Goblin Barrel, Skeleton Army and Goblin Gang are all cheap swarms that a single small spell (the opponent\'s own Log, Zap or Arrows) answers for very little elixir. The deck\'s whole plan is to make the opponent spend that one small spell, then land the threat it can no longer stop.' },
        { t: 'steps', items: [
          { title: 'Chip from range', body: 'Princess and Dart Goblin poke the tower from outside most units\' range, forcing a response.' },
          { title: 'Force the spell', body: 'Throw a cheap swarm (Goblin Gang) in a spot that threatens real damage, so the opponent is tempted to use their small spell on it.' },
          { title: 'Land the barrel', body: 'The instant their answer is on cooldown, throw Goblin Barrel directly on the tower, it has no other counter ready.' },
        ] },
      ],
    },
    {
      id: 'x-bow-siege',
      title: 'X-Bow Siege',
      lead: 'Siege, the tower takes damage without anything ever crossing the bridge.',
      blocks: [
        { t: 'cards', items: [{ title: 'The 8 cards', body: 'X-Bow, Tesla, Ice Spirit, Skeletons, The Log, Knight, Archers, Mighty Miner' }] },
        { t: 'p', text: 'X-Bow outranges the tower itself once it is placed far enough back, so it can fire on the tower from inside your own territory. The entire deck exists to keep X-Bow alive long enough to do its damage.' },
        { t: 'steps', items: [
          { title: 'Place it in range', body: 'Set X-Bow down near your own king tower, far enough forward that it is already in range of the enemy princess tower once it finishes building.' },
          { title: 'Protect it', body: 'Tesla and Knight answer ground rushes aimed at the X-Bow before they reach it.' },
          { title: 'Clear its blockers', body: 'The Log and Skeletons remove any swarm the opponent sends just to tank X-Bow\'s shots instead of the tower.' },
        ] },
      ],
    },
    {
      id: 'giant-double-prince',
      title: 'Giant Double Prince',
      lead: 'Bridge spam / beatdown, one tank, two chargers, hitting from two directions.',
      blocks: [
        { t: 'cards', items: [{ title: 'The 8 cards', body: 'Giant, Prince, Dark Prince, Musketeer, Zap, Minion Horde, Elixir Collector, Fireball' }] },
        { t: 'p', text: 'Prince and Dark Prince both charge for bonus damage, and having two of them means the opponent cannot commit their whole defence to one lane without exposing the other.' },
        { t: 'steps', items: [
          { title: 'Build the main push', body: 'Push one lane with Giant tanking for Musketeer, forcing the opponent to commit defenders there.' },
          { title: 'Open the other lane', body: 'Once their defence is spent, send Prince or Dark Prince down the other lane to charge freely into the tower.' },
          { title: 'Reset a stunned charge', body: 'If a defender stuns a charging Prince, Zap can clear the stun source so the charge resumes.' },
        ] },
      ],
    },
    {
      id: 'royal-giant-lightning',
      title: 'Royal Giant Lightning',
      lead: 'Building beatdown, a ranged tank backed by the biggest removal spell.',
      blocks: [
        { t: 'cards', items: [{ title: 'The 8 cards', body: 'Royal Giant, Lightning, Fisherman, Mega Minion, Firecracker, Ice Golem, The Log, Goblin Gang' }] },
        { t: 'p', text: 'Royal Giant attacks from range, so it can hit the tower without ever walking into melee range of most defenders, as long as the defensive building that would outrange it is dealt with.' },
        { t: 'steps', items: [
          { title: 'Soak the first hits', body: 'Ice Golem leads the push so the tower\'s first few hits land on it, not Royal Giant.' },
          { title: 'Place just out of range', body: 'Put Royal Giant where it can hit the tower but any enemy building cannot yet hit it.' },
          { title: 'Save Lightning for the stack', body: 'Use Lightning on their Inferno Tower or a three-card defensive pile, not for a little extra tower chip.' },
        ] },
      ],
    },
    {
      id: 'lava-loon',
      title: 'Lava Loon',
      lead: 'Air beatdown, a flying tank clearing the sky for an even bigger flying threat.',
      blocks: [
        { t: 'cards', items: [{ title: 'The 8 cards', body: 'Lava Hound, Balloon, Mega Minion, Tombstone, Arrows, Zap, Ice Spirit, Guards' }] },
        { t: 'p', text: 'Almost every anti-air unit targets Lava Hound first since it is the biggest threat on the field, which is exactly what lets the far more dangerous Balloon float past untouched behind it.' },
        { t: 'steps', items: [
          { title: 'Send the tank first', body: 'Deploy Lava Hound and let it cross the bridge alone before committing anything else.' },
          { title: 'Follow with the real threat', body: 'Send Balloon right behind it once Lava Hound has drawn the defenders\' attention.' },
          { title: 'Clear swarm counters', body: 'Arrows or Zap removes Minion Horde or Barbarians before they can shred Balloon, which dies to almost any big hit.' },
        ] },
      ],
    },
    {
      id: 'miner-poison-control',
      title: 'Miner Poison Control',
      lead: 'Chip control, small, constant damage with no single big commitment.',
      blocks: [
        { t: 'cards', items: [{ title: 'The 8 cards', body: 'Miner, Poison, Valkyrie, Bomber, Royal Ghost, Tornado, Zap, Knight' }] },
        { t: 'p', text: 'Miner tunnels underground and appears anywhere on the field, bypassing the bridge and any building entirely, a small, safe, repeatable source of tower damage that never risks the rest of the deck.' },
        { t: 'steps', items: [
          { title: 'Chip every cycle', body: 'Send Miner onto the tower as soon as it is available, it costs nothing to defend against in return.' },
          { title: 'Hold Poison for value', body: 'Save Poison for an Elixir Collector or a stacked push rather than spending it straight onto the tower.' },
          { title: 'Defend efficiently', body: 'Valkyrie and Knight answer most ground pushes cheaply, keeping this deck\'s elixir spend low and its chip lead growing.' },
        ] },
      ],
    },
    {
      id: 'try-it',
      title: 'Try one',
      blocks: [
        { t: 'callout', tone: 'tip', title: 'Load it and play', text: 'Open Relax → Clash Royale → Decks and tap any of these eight names to load the exact deck into the builder, then switch to Battle to see it played out against the sandbox AI.' },
        { t: 'links', items: [{ path: 'games/clash-royale/matchups-and-counters', note: 'Next: what to do when one of these comes at your tower' }] },
      ],
    },
  ],
  related: ['games/clash-royale/archetypes', 'games/clash-royale/matchups-and-counters'],
}

export default guide
