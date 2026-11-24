import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Many group arguments are really arguments about how the decision will be made. Agreeing the decision rule before the discussion, and having quick ways to test agreement, saves hours and protects relationships. This guide covers decision rules, agreement scales and the simple maths of voting.',
  nutshell: [
    'Agree **who decides and how** before discussing options.',
    'Test agreement with a **scale** (gradients of agreement, fist-to-five), not a yes/no.',
    '**Consent** (“no reasoned objection”) is faster than full consensus and still protects minorities.',
    '**Dot voting** works best with the N/3 rule; **Borda counts** reward broadly acceptable options.',
  ],
  sections: [
    {
      id: 'rules',
      title: 'Decision rules',
      blocks: [
        { t: 'table', head: ['Rule', 'How it works', 'Strength', 'Weakness'], rows: [
          ['Leader decides without discussion', 'One person decides', 'Fast', 'Low commitment'],
          ['Leader decides after consultation', 'Group advises; leader decides and explains', 'Uses group knowledge, clear accountability', 'Must be honest that it is advice'],
          ['Majority vote', 'More than half', 'Quick, familiar', 'Losers may disengage'],
          ['Consensus', 'Everyone can support it', 'Strong commitment', 'Slow; one person can block'],
          ['Consent (sociocracy)', 'No one has a reasoned, paramount objection', 'Faster than consensus; “good enough for now, safe enough to try”', 'Needs practice in raising objections'],
          ['Delegation', 'A subgroup decides within limits', 'Efficient', 'Needs trust and clear limits'],
        ] },
        { t: 'callout', tone: 'tip', title: 'Say it out loud', text: '“Today the group will recommend; the principal will decide by Friday and explain the decision.” A sentence like this prevents the most common sense of betrayal in groups.' },
      ],
    },
    {
      id: 'scales',
      title: 'Testing agreement',
      blocks: [
        { t: 'levels', caption: 'Kaner’s gradients of agreement (simplified, from strongest support).', items: [
          { name: '1. Wholehearted endorsement', body: '“I really like it.”' },
          { name: '2. Agreement with a minor point', body: '“Basically I like it.”' },
          { name: '3. Support with reservations', body: '“I can live with it.”' },
          { name: '4. Abstain', body: '“I have no opinion.”' },
          { name: '5. More discussion needed', body: '“I don’t understand it yet.”' },
          { name: '6. Don’t like it but will not block', body: '“I want my disagreement noted, but I’ll support the group.”' },
          { name: '7. Serious disagreement', body: '“I can’t support this.”' },
          { name: '8. Veto', body: '“I will block this.”' },
        ] },
        { t: 'p', text: '**Fist-to-five** is a quick hand version: a fist blocks, one finger means serious concerns, three means can live with it, five means full support. If anyone shows a fist or one finger, ask them what would bring them up to three.' },
      ],
    },
    {
      id: 'dots',
      title: 'Dot voting and the N/3 rule',
      blocks: [
        {
          t: 'math',
          tex: String.raw`d = \left\lceil \frac{N}{3} \right\rceil`,
          caption: 'A common rule of thumb for how many dots each person gets.',
          plain: 'When a group has listed N options and wants to see which are most popular, give each person about a third as many dots as there are options. Fewer dots and people cannot express second choices; more dots and everything gets some, so nothing stands out. Round up.',
          where: [
            { sym: 'd', def: 'dots (votes) per person' },
            { sym: 'N', def: 'the number of options on the wall' },
          ],
          syntax: [
            { sym: String.raw`\lceil x \rceil`, say: '“the ceiling of x”: round x up to the next whole number' },
          ],
          worked: {
            title: 'Twenty camp activity ideas',
            steps: [
              String.raw`\(N = 20\) options.`,
              String.raw`\(N/3 = 20/3 = 6.67\).`,
              String.raw`\(d = \lceil 6.67 \rceil = 7\) dots each.`,
              'With 12 people there are 12 × 7 = 84 dots in total, about 4 per option on average, so the popular ones will stand out.',
            ],
            why: [
              'count the ideas listed',
              'divide by three',
              'round up so nobody is short of a dot',
              'check the total spread: enough dots that preferences show, not so many that everything is covered',
            ],
            answer: '7 dots each. Agree beforehand whether people may put more than one dot on one option.',
          },
        },
        {
          t: 'math',
          tex: String.raw`B(x) = \sum_{j=1}^{n} \big(m - r_j(x)\big)`,
          caption: 'The Borda count: each ranking gives points by position.',
          plain: 'Everyone ranks the m options from favourite (rank 1) to least favourite (rank m). An option gets m − 1 points for every first place, m − 2 for every second place, and so on down to 0 for last place. Add up the points from everyone. The Borda count rewards options that many people rank reasonably high, not just options a large faction loves.',
          where: [
            { sym: 'B(x)', def: 'the Borda score of option x' },
            { sym: 'n', def: 'the number of voters' },
            { sym: 'm', def: 'the number of options' },
            { sym: String.raw`r_j(x)`, def: 'the rank voter j gave option x (1 = favourite)' },
          ],
          syntax: [
            { sym: String.raw`\sum_{j=1}^{n}`, say: '“sum over voters j from 1 to n”: add up one term per voter' },
            { sym: String.raw`m - r_j(x)`, say: 'points from voter j: first place gets m − 1, last place gets 0' },
          ],
          worked: {
            title: 'Three venues, five voters',
            steps: [
              'Options: Beach (B), Forest (F), City (C), so m = 3. Votes: three voters rank B > C > F; two voters rank F > C > B.',
              'Points per voter: first = 2, second = 1, third = 0.',
              'Beach: 3 voters × 2 + 2 voters × 0 = 6.',
              'Forest: 3 × 0 + 2 × 2 = 4.',
              'City: 3 × 1 + 2 × 1 = 5.',
            ],
            why: [
              'list the rankings so every voter is counted',
              'with three options, ranks 1, 2, 3 are worth 3 − 1, 3 − 2, 3 − 3 points',
              'three people put Beach first, two put it last',
              'Forest is last for three and first for two',
              'City is everyone’s second choice',
            ],
            answer: 'Beach wins with 6, City 5, Forest 4. A plain majority vote also picks Beach (3 to 2), but the Borda count shows City is close behind as the option nobody dislikes, which is worth discussing.',
          },
        },
      ],
    },
    {
      id: 'checklist',
      title: 'Closing a decision well',
      blocks: [
        { t: 'checklist', items: [
          'The decision is written down in one sentence everyone can see',
          'The decision rule used is stated',
          'Dissent is recorded where people want it recorded',
          'Each action has one owner and a date',
          'The group knows when and how the decision will be reviewed',
        ] },
      ],
    },
    {
      id: 'rules-lab',
      title: 'The same preferences, five counting rules',
      lead: 'Why “let us just vote” is a decision you did not notice making.',
      blocks: [
        { t: 'p', text: 'Each profile below is a realistic room. Switch between them and watch the “different winners” counter: the same opinions, counted five ways, frequently produce three answers.' },
        { t: 'facil-lab', viz: 'voting' },
        { t: 'p', text: 'The split field is the one to sit with: plurality hands the result to the option two thirds of the room ranks last. That is the spoiler effect, it happens in church halls as readily as in elections, and it is the reason a facilitator should choose and announce the rule before anyone marks anything. Full treatment, with Arrow’s theorem in plain words and what to do about a Condorcet cycle, in [voting systems and their paradoxes](@facilitation/methods/voting-systems).' },
      ],
    },
  ],
  sources: [
    'Kaner, S. et al. (2014). Facilitator’s Guide to Participatory Decision-Making. Jossey-Bass.',
    'Vroom, V. H., & Yetton, P. W. (1973). Leadership and Decision-Making. University of Pittsburgh Press.',
    'Rau, T. J., & Koch-Gonzalez, J. (2018). Many Voices One Song: Shared Power with Sociocracy.',
  ],
  related: ['facilitation/foundations/group-development', 'facilitation/toolkit/techniques', 'game-theory/start-here'],
}

export default guide
