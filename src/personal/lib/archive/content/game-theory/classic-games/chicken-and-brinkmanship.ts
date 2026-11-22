import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Two drivers race toward each other. The one who swerves is the “chicken”. If neither swerves, both die. Each wants the other to back down. This is the game of chicken, and it models standoffs, brinkmanship and escalation: nuclear crises, labour disputes, bargaining deadlines and bidding wars. Its key lesson is counterintuitive: in chicken, it can pay to limit your own options. Binding yourself to a course of action, convincingly, can force the other side to blink.',
  nutshell: [
    'In **chicken**, each player prefers to go straight if the other swerves, but a **collision is the worst** outcome for both.',
    'There are **two pure equilibria**, where one swerves and the other goes straight, and a **mixed equilibrium** where both sometimes crash.',
    'The winning strategy is **commitment**: visibly removing your ability to back down (throwing out the steering wheel).',
    'A threat is **credible** only if carrying it out is in your interest when the time comes. Empty threats are ignored.',
    '**Brinkmanship** is deliberately raising the risk of disaster to pressure the other side, a dangerous strategy since it can end in the crash.',
  ],
  sections: [
    {
      id: 'game',
      title: 'The game',
      blocks: [
        { t: 'game-lab', viz: 'payoff', preset: 'chicken' },
        {
          t: 'table',
          head: ['Outcome', 'Result'],
          rows: [
            ['Both swerve', 'Nobody wins or loses face: payoffs (0, 0)'],
            ['One swerves, the other goes straight', 'The one going straight wins (+1), the swerver loses face (−1)'],
            ['Both go straight', 'Crash: (−10, −10)'],
          ],
        },
        { t: 'p', text: 'Neither player has a dominant strategy. If you expect the other to swerve, you should go straight; if you expect them to go straight, you should swerve. The two pure equilibria are asymmetric, and each player prefers the one where they go straight. The mixed equilibrium has each swerving most of the time but sometimes crashing: in the lab, 90 per cent swerve, so a crash happens 1 time in 100.' },
        { t: 'callout', tone: 'note', title: 'Chicken versus the prisoner’s dilemma', text: 'In the dilemma, mutual defection is a comfortable equilibrium. In chicken, mutual “defection” (both going straight) is the worst outcome and is not an equilibrium. The risk is that it happens by accident or from miscalculation.' },
      ],
    },
    {
      id: 'commit',
      title: 'Commitment: winning by tying your own hands',
      blocks: [
        { t: 'p', text: 'Suppose one driver removes the steering wheel and shows the other. Now they cannot swerve. The other driver, seeing this, should swerve, since going straight means a certain crash. By destroying their own option, the first driver wins. This is commitment, a central idea of Thomas Schelling’s work on strategy.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Burn the bridge', title: 'Remove the exit', body: 'An army that burns its bridges cannot retreat. (The legend that Cortés burned his ships is probably embroidered, but the logic stands.)' },
            { tag: 'Automatic response', title: 'Delegate to a machine or a rule', body: 'A doomsday device, an automatic tripwire, or a negotiator with no authority to concede: the response cannot be called off.' },
            { tag: 'Reputation', title: 'Stake your name', body: 'Publicly staking your reputation on a position makes backing down costly.' },
            { tag: 'Contract', title: 'Binding agreements', body: 'A penalty clause or an irreversible purchase commits you to a course.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Commitment cuts both ways',
          text: 'If both sides commit, a crash is certain. Commitment works only if you commit first and the other side can see it. In practice, reckless or irrational-seeming leaders may gain bargaining power, at the risk of disaster. This is the “madman” theory, and the risk is why such strategies are dangerous.',
        },
      ],
    },
    {
      id: 'threats',
      title: 'Credible threats and empty ones',
      blocks: [
        { t: 'p', text: 'A threat is only useful if the other side believes it. And they will believe it only if it would be in your interest to carry it out when the moment comes. A parent who says “if you do that again, we will cancel the holiday”, but would never actually do so, issues an empty threat. Children learn quickly.' },
        {
          t: 'table',
          head: ['Threat', 'Credible?', 'Why'],
          rows: [
            ['A shop that says it will match any lower price', 'Yes, if it costs less than losing the sale', 'Carrying it out is in its interest'],
            ['A large state threatening nuclear retaliation for a small border dispute', 'Doubtful', 'The cost of carrying it out is greater than the stake'],
            ['A union threatening to strike when it has no savings', 'Weak', 'It cannot afford to carry it out for long'],
            ['An automatic penalty clause in a contract', 'Yes', 'It does not depend on a choice at the time'],
            ['A promise to punish a betrayal in a long-term relationship', 'Yes, if the relationship is valuable', 'The future gains give a reason to retaliate'],
          ],
        },
      ],
    },
    {
      id: 'cuba',
      title: 'Brinkmanship: the Cuban missile crisis',
      blocks: [
        { t: 'p', text: 'In October 1962 the United States found Soviet nuclear missiles in Cuba. President Kennedy chose a naval “quarantine” rather than an immediate strike or an invasion, a step that raised the pressure but left room for the Soviets to retreat. The crisis ended after a public Soviet withdrawal and, secretly, an American promise not to invade Cuba and to remove missiles from Turkey. Scholars still disagree about how close the world came to war, and about how much was strategy and how much luck and judgement.' },
        {
          t: 'list',
          items: [
            '**Escalation by degrees**: the quarantine let each side take a step without forcing the other into immediate war.',
            '**Face-saving exits**: a settlement allowed both sides to claim something.',
            '**Risk that things get out of control**: accidents, miscommunication and incidents at sea added to the danger beyond either leader’s intention. Schelling called this “the threat that leaves something to chance”.',
          ],
        },
        { t: 'links', items: [{ path: 'game-theory/applications/politics-war-and-deterrence', note: 'Deterrence and the logic of war' }, { path: 'game-theory/dynamics/sequential-games', note: 'Threats in sequential games' }] },
      ],
    },
  ],
  sources: [
    'Schelling, T. C. (1960). The Strategy of Conflict. Harvard University Press.',
    'Schelling, T. C. (1966). Arms and Influence. Yale University Press.',
    'Allison, G. T. (1971). Essence of Decision: Explaining the Cuban Missile Crisis. Little, Brown.',
    'Rapoport, A., and Chammah, A. M. (1966). The game of chicken. American Behavioral Scientist.',
  ],
  related: ['game-theory/classic-games/coordination-and-focal-points', 'game-theory/dynamics/sequential-games', 'game-theory/applications/politics-war-and-deterrence'],
}

export default guide
