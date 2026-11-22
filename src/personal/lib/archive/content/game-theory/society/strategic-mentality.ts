import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Game theory is most useful when it becomes a habit of mind. A strategic mentality does not mean scheming or distrust. It means seeing a situation as a set of people with goals, options and information, and asking what each of them will do and how you can shape that. This guide turns the theory in this shelf into practical habits, with worked examples from negotiation, work, family and community life, and sets out the ethical limits. It also asks what kind of mentality societies themselves develop (high-trust or low-trust) and why.',
  nutshell: [
    '**Put yourself in the other side’s shoes**: what do they want, know, fear and expect? Predict their reply to your move.',
    '**Look forward, reason back**: plan from the end of the interaction to the present.',
    '**Change the game** rather than only playing it: alter payoffs, information, order of moves, who is involved, or whether it is repeated.',
    '**Commit credibly** to what you will do, and **only** to what you will really do. A reputation for keeping your word is valuable.',
    '**Seek positive-sum moves**: ask where the pie can grow before fighting over its division.',
    '**Stay ethical**: manipulation, deception and exploiting others’ weakness damage reputation and trust, which are the foundation of long-run success.',
  ],
  sections: [
    {
      id: 'habits',
      title: 'Seven habits',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. Identify the players and what they want', body: 'List everyone whose choices affect the outcome, including those off stage. Write down their goals honestly: their incentives, not your assumption of their character.' },
            { title: '2. Map the choices and the order', body: 'Who moves first? What can each do? Is it once or repeated? Draw a rough tree if it helps.' },
            { title: '3. Think through their reply', body: 'For each option you have, ask what the other side will do, and what you will do in return. Reason from the end of the game back.' },
            { title: '4. Check for dominant moves', body: 'Is there an option that is best whatever the others do? Is there one nobody should choose? Eliminate those.' },
            { title: '5. Ask whether you can change the game', body: 'Can you commit, add a rule, build a reputation, involve a third party, or create a repeated relationship?' },
            { title: '6. Look for joint gains', body: 'Are there trades where each side gives what it values less? What makes the pie bigger?' },
            { title: '7. Consider information', body: 'What do they know that you do not? What are you signalling? What can you learn cheaply?' },
          ],
        },
      ],
    },
    {
      id: 'examples',
      title: 'Worked examples',
      blocks: [
        {
          t: 'example',
          title: 'Splitting chores in a shared house',
          lines: [
            { label: 'The dilemma', text: 'Each housemate would rather someone else did the washing up. If nobody does, the house is a mess and everyone loses. It is a many-person dilemma.' },
            { label: 'Change the game', text: 'Make the pattern repeated and visible: a rota. Visibility enables reputation; repetition enables reciprocity.' },
            { label: 'Add graduated consequences', text: 'Agree a light sanction in advance (cover the next turn), following Ostrom’s principle of graduated penalties.' },
            { label: 'Result', text: 'Cooperation becomes the stable choice, because defection is seen and answered, and no one is the sucker.' },
          ],
        },
        {
          t: 'example',
          title: 'Negotiating a salary',
          lines: [
            { label: 'Your BATNA', text: 'Before talking, line up another offer or a clear alternative. It is the single biggest source of bargaining power.' },
            { label: 'Their view', text: 'What does the employer lose if you leave? How much flexibility do they have? What would make the offer easier for them to approve (title, review date, other benefits)?' },
            { label: 'Expand the pie', text: 'If salary is capped, ask about training, flexible hours or a six-month review. These can cost them little and be worth much to you.' },
            { label: 'Credibility', text: 'Do not announce a walk-away point you will not use. Keep your word.' },
          ],
        },
        {
          t: 'example',
          title: 'A team that suffers free riding',
          lines: [
            { label: 'Observe', text: 'The problem is a public goods dilemma. People slack when effort is invisible and rewards are shared.' },
            { label: 'Fix incentives', text: 'Make individual contributions visible, set clear roles, and reward both team and individual outcomes.' },
            { label: 'Use norms', text: 'Agree team rules together. People follow rules they helped make, and peer pressure is the cheapest enforcement.' },
            { label: 'Keep it small', text: 'Smaller teams reduce free riding.' },
          ],
        },
      ],
    },
    {
      id: 'society-mind',
      title: 'Societies and their mentalities: high trust and low trust',
      blocks: [
        { t: 'p', text: 'A society’s typical mentality, how much people trust strangers, follow rules and cooperate, can be understood as an equilibrium. Where institutions are reliable and cheating is punished, trust pays and people trust. Where institutions are weak, cheating is common and trust is risky, so people reasonably rely on family and close friends. Francis Fukuyama and Robert Putnam wrote of high- and low-trust societies and of “social capital”; Edward Banfield described “amoral familism” in southern Italy, where people trusted only their relatives. Such patterns have deep historical roots, but they change when institutions and expectations change.' },
        {
          t: 'table',
          head: ['', 'High-trust equilibrium', 'Low-trust equilibrium'],
          rows: [
            ['Expectation', 'Most people are honest and will cooperate', 'Most people will exploit you if they can'],
            ['Behaviour', 'Open cooperation, lending without collateral, following rules', 'Guardedness, reliance on kin, bribery, avoiding public goods'],
            ['Cost of doing business', 'Low: fewer lawyers, guards and checks', 'High: contracts, monitoring, personal connections needed'],
            ['Stability', 'Self-reinforcing: trusting pays', 'Self-reinforcing: distrust is safe'],
            ['How to shift', 'Credible enforcement, transparency, repeated positive experience, shared leadership by example', 'The same, but requires coordination and patience'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Mentality is not destiny',
          text: 'It is tempting to treat “high-trust” or “low-trust” as a national character. The game-theoretic view is more hopeful and more careful: the same people behave differently under different incentives, and societies have moved between equilibria. Be wary of stereotypes, and look at the institutions and expectations that sustain behaviour.',
        },
      ],
    },
    {
      id: 'ethics',
      title: 'Ethics and limits',
      blocks: [
        {
          t: 'dodont',
          do: ['Use strategic thinking to understand others and find mutual gains.', 'Build a reputation for reliability: it is the most valuable strategic asset.', 'Be open about what you will do when you can, so that cooperation can rest on understanding.', 'Respect the interests of people who cannot protect themselves.'],
          dont: ['Treat every interaction as a contest or assume others are enemies.', 'Mislead people in ways you would not accept yourself.', 'Make threats you would not carry out, or commitments you do not intend to keep.', 'Mistake what is profitable for what is right.'],
        },
        { t: 'callout', tone: 'tip', title: 'A test', text: 'Ask: would I be comfortable if the other side could see exactly what I am doing and why? If not, the approach may be manipulation, and it will probably cost you trust later.' },
        { t: 'links', items: [{ path: 'game-theory/applications/limits-and-critiques', note: 'Limits of the theory' }, { path: 'game-theory/information-and-design/bargaining', note: 'Negotiation in depth' }, { path: 'game-theory/society/trust-reputation-and-punishment', note: 'Trust and reputation' }] },
      ],
    },
  ],
  sources: [
    'Dixit, A., and Nalebuff, B. (1991). Thinking Strategically. W. W. Norton.',
    'Brandenburger, A. M., and Nalebuff, B. J. (1996). Co-opetition. Doubleday.',
    'Fisher, R., Ury, W., and Patton, B. (2011). Getting to Yes. Penguin.',
    'Fukuyama, F. (1995). Trust: The Social Virtues and the Creation of Prosperity. Free Press.',
    'Putnam, R. D. (1993). Making Democracy Work. Princeton University Press.',
    'Banfield, E. C. (1958). The Moral Basis of a Backward Society. Free Press.',
  ],
  related: ['game-theory/society/norms-as-equilibria', 'game-theory/information-and-design/bargaining', 'game-theory/applications/limits-and-critiques'],
}

export default guide
