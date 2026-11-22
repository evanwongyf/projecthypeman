import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Elixir regenerates on its own, one point every couple of seconds up to a cap of 10, and every card you place spends some of it. That makes elixir the real currency of a match, cards are just how you spend it. Thinking in terms of "what did this trade cost, and what did it buy" explains almost every good or bad decision you will see in a game.',
  nutshell: [
    'Elixir regenerates automatically up to a max of **10**; it is the one resource both players share the same rate of, so every second either player wastes is a second they fell behind.',
    'A trade is **positive** when you spend less elixir than the value you destroy or the damage you push through; **negative** the other way round.',
    'Overspending elixir on offence (going "all in") leaves you with nothing to defend the counter-push, the single most common way a close match is lost.',
    '**Double elixir time** (the match\'s second half) doubles the regeneration rate, which is why big, expensive pushes only become common once it starts.',
    'An **elixir advantage** (banking more than the opponent, e.g. from a defensive trade or an Elixir Collector) buys the next big push, not necessarily the current one.',
  ],
  sections: [
    {
      id: 'trading',
      title: 'Positive and negative trades',
      blocks: [
        { t: 'p', text: 'Every time a card is placed and does something, attacks a troop, takes a hit, chips a tower, elixir has changed hands in both directions. A **trade** compares what you spent against what you got.' },
        {
          t: 'table',
          head: ['Example', 'Your spend', 'What you got', 'Verdict'],
          rows: [
            ['A 1-elixir Ice Spirit stops a 4-elixir Hog Rider\'s first hit and buys time for your tower to finish it', '1', 'Most of a 4-elixir unit\'s push neutralised', 'Strongly positive'],
            ['A 4-elixir Fireball used only to finish a tower that was already about to fall from troop damage', '4', 'A few hundred extra tower damage you did not need', 'Negative, overkill'],
            ['A 3-elixir spell that wipes a 7-elixir stacked push (three cheap swarm units bunched together)', '3', 'A 7-elixir push fully answered', 'Strongly positive'],
            ['Chip damage from a 4-elixir Hog Rider that reaches the tower uncontested because the opponent had no elixir left', '4', 'Several hundred tower damage for free', 'Positive, opponent had no answer available'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The question to ask every placement', text: 'Not "can I play this card here", but "what does this trade cost me, and does it leave me able to answer whatever comes next".' },
      ],
    },
    {
      id: 'overcommit',
      title: 'Overcommitting: the most common way to lose',
      blocks: [
        { t: 'p', text: 'Pushing with everything you have feels strong in the moment, but it spends your whole elixir bank on offence. If the push does not finish a tower, the opponent now has a free counter-push into a board with nothing on it to defend, often enough to lose two towers in the time it took to win none.' },
        { t: 'list', items: [
          'Keep a **small reserve** (often 2-4 elixir worth of cheap defence) behind any push, rather than spending to zero.',
          'A push that trades elixir-neutral against the tower (spending as much as the damage is worth) is fine; a push that goes negative and leaves you exposed is the dangerous one.',
          'Watch the opponent\'s elixir, not just your own, a visibly low opponent is the moment to commit, because they cannot punish a mistake.',
        ] },
      ],
    },
    {
      id: 'double-elixir',
      title: 'Double elixir time',
      blocks: [
        { t: 'p', text: 'Partway through the match, elixir regeneration doubles. Pushes that were too expensive to repeat in single elixir, stacking a Golem with three or four support cards, say, suddenly cycle back around twice as fast. Matches usually swing hardest here: whoever adapts their tempo up first tends to take the lead.' },
        {
          t: 'diagram',
          title: 'How the clock changes the game',
          nodes: [
            { id: 'single', label: 'Single elixir', sub: 'Slow regen, small, careful trades', col: 1, row: 1, tone: 'teal' },
            { id: 'cycle', label: 'Cycle decks shine', sub: 'Cheap cards come around fast relative to the clock', col: 1, row: 2, tone: 'mint' },
            { id: 'double', label: 'Double elixir starts', sub: 'Regeneration doubles for the rest of the match', col: 2, row: 1.5, shape: 'diamond', tone: 'mustard' },
            { id: 'beatdown', label: 'Beatdown decks come online', sub: 'Expensive stacked pushes can now repeat', col: 3, row: 1, tone: 'orange' },
            { id: 'overtime', label: 'Sudden death if still tied', sub: 'First tower damage of any kind decides it', col: 3, row: 2, tone: 'pink' },
          ],
          edges: [
            { from: 'single', to: 'cycle' },
            { from: 'cycle', to: 'double' },
            { from: 'double', to: 'beatdown', label: 'elixir flows twice as fast' },
            { from: 'beatdown', to: 'overtime', label: 'if no tower has fallen' },
          ],
        },
      ],
    },
    {
      id: 'banking',
      title: 'Banking an elixir advantage',
      blocks: [
        { t: 'p', text: 'When a defensive trade goes strongly in your favour, you stopped an 8-elixir push with a 3-elixir answer, you are not just even, you are **5 elixir ahead**. That advantage rarely wins the current exchange; it buys the next big push, because you reach the elixir needed for your win condition and support sooner than the opponent reaches theirs.' },
        { t: 'callout', tone: 'note', title: 'The Elixir Collector', text: 'An Elixir Collector spends 6 elixir to generate extra elixir over time, directly banking an advantage rather than winning a trade, the core idea behind beatdown decks that need to stack several cards behind one big push.' },
        { t: 'links', items: [{ path: 'games/clash-royale/archetypes', note: 'Next: the deck shapes that are built around this economy' }] },
      ],
    },
  ],
  sources: ['This project\'s own write-up of elixir mechanics widely described in Clash Royale strategy communities; general game knowledge, not reproduced from any single source.'],
  related: ['games/clash-royale/start-here', 'games/clash-royale/archetypes'],
}

export default guide
