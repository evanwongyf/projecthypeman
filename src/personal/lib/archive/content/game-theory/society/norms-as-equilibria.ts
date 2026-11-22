import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Why do people queue, tip, drive on one side of the road, keep their promises, wear clothes to work, or stand an arm’s length apart in a lift? Mostly not because a law compels it, and not because each person has decided it is wise, but because everyone else does it. Game theory offers an idea that explains a great deal: a norm is a pattern of behaviour that is an equilibrium. If almost everyone follows it, it pays you to follow it too. This guide develops that idea, shows how norms can tip and lock in, and includes Thomas Schelling’s model, which shows how mild preferences can produce sharp divisions.',
  nutshell: [
    'A **convention** solves a **coordination** problem: everyone prefers to match what others do (driving on the left, which language to speak).',
    'A **social norm** is a **rule that people follow because they expect others to follow it and to disapprove if they do not** (Bicchieri).',
    'Norms are **equilibria**: when most follow them, deviating does not pay. That is why they are **stable** and why they can be **hard to change**.',
    'Norms can **tip**: a small shift can trigger a rapid change, in either direction. Schelling’s segregation model shows mild preferences leading to strong clustering.',
    'Norms can lock in **bad outcomes** (corruption, harmful customs) because nobody gains by changing alone. Change usually needs **coordinated** shifts.',
  ],
  sections: [
    {
      id: 'norm',
      title: 'What is a norm?',
      blocks: [
        {
          t: 'table',
          head: ['Kind', 'Why people follow it', 'Example'],
          rows: [
            ['Convention (coordination equilibrium)', 'Matching others is what you want; no one wants to deviate', 'Which side of the road, what a word means'],
            ['Social norm', 'You follow because you expect others to follow and to approve or disapprove', 'Queuing, tipping, giving up a seat'],
            ['Moral or personal norm', 'Internalised: you would feel guilty to break it', 'Honesty, not stealing even when unobserved'],
            ['Legal norm', 'Backed by formal sanction', 'Traffic laws, contracts'],
          ],
        },
        { t: 'p', text: 'Philosopher David Lewis (1969) analysed conventions as solutions to coordination games that become common knowledge and self-perpetuating. Cristina Bicchieri (2006) added that social norms involve two kinds of expectation: empirical (what others do) and normative (what others think I should do). A norm exists and is followed when people hold both and have a reason to conform.' },
      ],
    },
    {
      id: 'why-stable',
      title: 'Why norms are stable',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Self-enforcing', title: 'Deviation does not pay', body: 'If everyone queues, jumping the queue brings anger and perhaps ejection. The best reply to others’ compliance is compliance.' },
            { tag: 'Expectations', title: 'Beliefs are part of the equilibrium', body: 'Norms rest on shared expectations. People comply because they believe others will, and the belief is confirmed.' },
            { tag: 'Cheap sanctions', title: 'Disapproval is enough', body: 'Frowns, gossip, exclusion and reputation costs enforce norms without any formal power.' },
            { tag: 'Learning', title: 'Passed on', body: 'Children learn norms from parents, peers and institutions, so they persist across generations.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Test it yourself', text: 'Pick a norm you follow, such as standing in a queue. Ask: what would happen to me if I broke it? What do I expect of others? What would happen if only a few others followed it? The answers show why the norm is an equilibrium.' },
      ],
    },
    {
      id: 'tipping',
      title: 'Tipping points: Schelling’s segregation model',
      blocks: [
        { t: 'p', text: 'In 1971 Thomas Schelling published a simple model with a startling conclusion. Take a grid of households of two types with a few empty spaces. Each household is happy if at least some fraction of its neighbours are like itself, say one third. If not, it moves to an empty spot. Start with a random arrangement and let households move. The town ends up heavily segregated, even though nobody wanted that: each only wanted not to be a small minority.' },
        { t: 'game-lab', viz: 'schelling' },
        {
          t: 'steps',
          items: [
            { title: 'Start random', body: 'The average share of like neighbours is about one half, simply because there are two types.' },
            { title: 'Some are unhappy', body: 'With a tolerance of one third, a household is unhappy only if fewer than a third of its neighbours match, and some are, by chance.' },
            { title: 'They move', body: 'Moving unhappy households changes the neighbourhoods they leave and join, which makes other households unhappy.' },
            { title: 'Clusters grow', body: 'The process ratchets up, and the average share of like neighbours climbs to 70 or 80 per cent.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'What the model does and does not say',
          text: 'It shows that segregation can arise from mild preferences without anyone intending it, and that individual tolerance does not guarantee a mixed society. It does not show that real segregation is only due to preferences: housing policy, discrimination, prices and history also matter. Schelling’s point is about the gap between individual motives and collective patterns, a theme that recurs through the social sciences.',
        },
      ],
    },
    {
      id: 'lockin',
      title: 'When norms lock in bad outcomes',
      blocks: [
        { t: 'p', text: 'Because a norm is an equilibrium, it can persist even when almost everyone would prefer a different equilibrium. If everyone bribes officials, an honest person is penalised. If everyone expects a gift at weddings, a person who does not give is shunned. A change needs many people to move together, or a trigger that shifts expectations.' },
        {
          t: 'table',
          head: ['Persistent norm', 'Why it is stable', 'How change has happened'],
          rows: [
            ['Corruption (bribes for ordinary services)', 'If everyone pays, refusing costs you; if everyone is honest, paying would be risky. Both are equilibria', 'Credible enforcement, transparency and clean-ups that change expectations together; some cities and countries have moved from one to the other'],
            ['Harmful customs such as foot-binding in China', 'A family that did not bind its daughters’ feet risked their marriage prospects while others did', 'Gerry Mackie argued that change came through organised pledges by many families to abandon the practice together, which removed the penalty'],
            ['Overwork cultures', 'If everyone stays late, leaving early signals low commitment', 'Employers resetting expectations, regulation, leading by example'],
            ['Wasteful gift or wedding spending', 'Each family fears looking mean', 'Community agreements capping spending'],
          ],
          caption: 'Examples drawn from the literature on social norms. Explanations of historical cases are debated.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Make it public', title: 'Common knowledge', body: 'A norm changes when people know that others are also ready to change, and know that others know. Public pledges and shared events do this.' },
            { tag: 'Coordinate', title: 'Move together', body: 'Collective agreements, laws and organised campaigns allow a group to shift at once, so no one is the lone deviator.' },
            { tag: 'Leaders', title: 'Trusted first movers', body: 'Respected people can signal a new norm, and be a focal point.' },
            { tag: 'Tipping', title: 'A critical mass', body: 'Once enough people have moved, the new behaviour becomes the safe one, and change speeds up.' },
          ],
        },
        { t: 'links', items: [{ path: 'game-theory/classic-games/coordination-and-focal-points', note: 'Coordination and focal points' }, { path: 'anthropology/conventions-and-conformity/norms-taboos-and-etiquette', note: 'Norms across cultures' }, { path: 'anthropology/conventions-and-conformity/herd-behaviour', note: 'Cascades and tipping' }] },
      ],
    },
  ],
  sources: [
    'Lewis, D. (1969). Convention: A Philosophical Study. Harvard University Press.',
    'Schelling, T. C. (1971). Dynamic models of segregation. Journal of Mathematical Sociology.',
    'Bicchieri, C. (2006). The Grammar of Society: The Nature and Dynamics of Social Norms. Cambridge University Press.',
    'Young, H. P. (1998). Individual Strategy and Social Structure. Princeton University Press.',
    'Mackie, G. (1996). Ending footbinding and infibulation: a convention account. American Sociological Review.',
    'Persson, A., Rothstein, B., and Teorell, J. (2013). Why anticorruption reforms fail: systemic corruption as a collective action problem. Governance.',
  ],
  related: ['game-theory/classic-games/coordination-and-focal-points', 'game-theory/society/institutions-and-the-state', 'anthropology/conventions-and-conformity/norms-taboos-and-etiquette'],
}

export default guide
