import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A facilitator who says "let us just vote" has made a decision they probably did not notice making. The same room, with the same opinions, produces different winners under plurality, runoff, Borda, Condorcet and approval voting — and there is a theorem saying no rule escapes every objection. This page is the arithmetic, the worked ballots, and the practical rule for choosing a rule.',
  nutshell: [
    '**Plurality** — one mark each — can elect an option two thirds of the room ranks last. It is the default and the worst.',
    '**Runoff** fixes the worst case and still ignores everything below second place.',
    '**Borda** rewards broad acceptability and is manipulable by insincere ranking.',
    '**Condorcet** asks who beats everyone head to head; sometimes nobody does, and that is information rather than a failure.',
    '**Approval and dot voting** are the practical workhorses. The threshold — how many dots each — changes the winner.',
    '**Arrow\u2019s theorem**: with three or more options, no rule satisfies every reasonable fairness condition at once. Choose on purpose and say so beforehand.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'The same preferences, five rules',
      blocks: [
        { t: 'p', text: 'Start here rather than with the definitions. Each profile below is a realistic room; watch the "different winners" counter and the pairwise table as you switch between them.' },
        { t: 'facil-lab', viz: 'voting' },
        {
          t: 'checklist',
          items: [
            'The split field: plurality hands it to the option most of the room ranks last. This is the single commonest failure in real rooms.',
            'The nobody-loves-it compromise: Borda and Condorcet find the acceptable middle; plurality cannot see it at all.',
            'The cycle: Museum beats Hike beats Workshop beats Museum. No rule can fix this; the group\u2019s preference is genuinely circular.',
            'The camp theme: move the approval threshold and the winner changes with how generous people are, not with what they want.',
          ],
        },
      ],
    },
    {
      id: 'rules',
      title: 'The rules, with their failure modes',
      blocks: [
        {
          t: 'table',
          head: ['Rule', 'How it works', 'Fails when', 'Use for'],
          rows: [
            ['Plurality', 'One mark each; most marks wins.', 'Three or more similar options split a majority — the spoiler effect.', 'Two options only, or a straw poll you will not act on.'],
            ['Two-round runoff', 'Top two go head to head.', 'A broadly acceptable third option is eliminated in round one.', 'Large groups, a genuine choice between two camps.'],
            ['Instant runoff (AV)', 'Eliminate the last-placed option, transfer preferences, repeat.', 'Can still eliminate a Condorcet winner early; non-monotonic in rare cases.', 'When you have rankings and want a single winner.'],
            ['Borda count', 'Points by rank position; highest total wins.', 'Strategic ranking: burying your rival\u2019s best option is rewarded.', 'Prioritising a list, where broad acceptability matters more than first preferences.'],
            ['Condorcet', 'Compare every pair; a candidate that beats all others wins.', 'No winner exists when preferences cycle.', 'Small groups, important decisions, where you can afford the arithmetic.'],
            ['Approval', 'Mark every option you would accept; most approvals wins.', 'The winner depends on how generous people are with marks.', 'Shortlisting, and any room with more than four options.'],
            ['Dot voting (multi-vote)', 'Approval with a fixed number of dots, often N/3.', 'Dots are placed strategically, and visible dots cause bandwagons.', 'Fast shortlisting from a wall of ideas.'],
            ['Cumulative / quadratic', 'Spend a budget of votes; quadratic makes a second vote on one option cost more.', 'Hard to explain in a room; needs a credible budget.', 'Showing intensity of preference, not just direction.'],
            ['Gradients of agreement', 'Each person marks a point on a scale from endorsement to block.', 'Not a winner-picking rule; it surfaces position.', 'Testing support before committing. See [helping groups decide](@facilitation/frameworks/decision-making).'],
          ],
        },
        {
          t: 'math',
          tex: 'B(x) = \\sum_{v \\in V} \\big(m - 1 - r_v(x)\\big)',
          plain: 'A Borda score adds up, for every voter, how many options this one beat on their ballot. Top of a five-option ballot is worth four points, bottom is worth nothing.',
          where: [
            { sym: 'm', def: 'the number of options' },
            { sym: 'r_v(x)', def: 'the position of option \\(x\\) on voter \\(v\\)\u2019s ranking, counting from zero' },
            { sym: 'V', def: 'the set of voters' },
          ],
          worked: {
            title: 'The split field, scored in full',
            steps: [
              '4 options, so ballot positions are worth 3, 2, 1, 0.',
              'Ramp: only the 10 skaters rank it first, and 21 voters rank it last. \\(10\\times3 = 30\\).',
              'Garden: \\(9\\times3 + 8\\times2 + 4\\times1 + 10\\times0 = 47\\).',
              'Drop-in: \\(9\\times1 + 8\\times1 + 10\\times2 + 4\\times3 = 49\\).',
              'Repair caf\u00e9: \\(9\\times2 + 8\\times3 + 10\\times1 + 4\\times2 = 60\\).',
            ],
            why: ['standard Borda weights', 'a plurality winner with almost no second-preference support', 'strong first preferences, nothing from the skaters', 'nobody\u2019s favourite, everybody\u2019s middle', 'second on three of the four ballots'],
            answer: 'The repair caf\u00e9 wins on Borda with 60, having come *second* on plurality with 8 first preferences. It is also the Condorcet winner: it beats the garden 22\u20139, the drop-in 17\u201314 and the ramp 21\u201310. The plurality winner, the ramp, loses every head-to-head contest it is in.',
          },
        },
      ],
    },
    {
      id: 'arrow',
      title: 'Arrow\u2019s theorem, in plain words',
      blocks: [
        { t: 'p', text: 'Kenneth Arrow proved in 1951 that no ranked voting rule can satisfy a short list of obviously reasonable conditions simultaneously, once there are three or more options. It is not a claim that voting is pointless; it is a claim that every rule trades something away, and that you should know which thing.' },
        {
          t: 'terms',
          items: [
            { term: 'Unrestricted domain', def: 'Any set of individual rankings is allowed. You cannot exclude awkward voters.' },
            { term: 'Pareto efficiency', def: 'If everyone prefers A to B, the group ranks A above B.' },
            { term: 'Independence of irrelevant alternatives', def: 'Adding or removing a losing option does not flip the ranking of the others. This is the condition real systems break, and the spoiler effect is what breaking it looks like.' },
            { term: 'Non-dictatorship', def: 'No single person\u2019s ranking determines the result regardless of everyone else.' },
            { term: 'The result', def: 'No rule has all four. Approval and score voting escape the theorem only by not being ranked systems — and then run into Gibbard\u2019s theorem on strategic voting instead.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'What to say in a room', text: 'Not "Arrow\u2019s theorem". Say: "there is no neutral way to count this, so I am going to tell you how we will count it before you vote, and why." That sentence protects the result, because the rule was agreed when nobody knew who it would favour.' },
      ],
    },
    {
      id: 'practice',
      title: 'Running a vote properly',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Agree the rule first', body: 'Before the options are even final, and certainly before anyone marks a ballot. A rule chosen after the preferences are visible is a rule chosen by whoever is winning.' },
            { title: 'Clean the option list', body: 'Merge duplicates, separate bundled options, and remove anything nobody will own. Three to seven options is the workable range.' },
            { title: 'Decide whether votes are visible', body: 'Dots on a wall are fast and cause bandwagons. Private marks collected and tallied are slower and honest. Choose on purpose.' },
            { title: 'Set the threshold explicitly', body: 'For dot voting, N/3 dots where N is the number of options is the common rule of thumb; say the number and the reason.' },
            { title: 'Show the full tally, not just the winner', body: 'A group that sees the distribution accepts the result far more readily, and the runner-up often becomes a second workstream.' },
            { title: 'Test the winner before committing', body: 'A gradients-of-agreement or consent round on the leading option. Voting finds the preference; consent finds the blocking objection.' },
            { title: 'Record what the vote was and was not', body: '"This was advisory; the head of service decides on Friday." Say it again at the end, because people forget the framing once they have voted.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Use approval or dot voting for shortlisting a long list — it is robust and easy to explain.',
            'Use a Condorcet pairwise table when the decision is important and the group is small.',
            'Publish the pairwise matrix if there is a cycle; it is the most honest thing you can show.',
            'Re-vote after discussion if the first vote was a straw poll, and say so in advance.',
          ],
          dont: [
            'Use plurality with four or more options unless you are prepared for the spoiler.',
            'Let people see the dots accumulate if the group is status-differentiated.',
            'Treat a narrow majority as consensus; test it with a scale instead.',
            'Re-run a vote because you dislike the result. One re-run destroys the legitimacy of every future vote you run with that group.',
          ],
        },
      ],
    },
    {
      id: 'cycles',
      title: 'When there is no winner',
      blocks: [
        { t: 'p', text: 'A Condorcet cycle is not a tie and not a mistake. It means the group\u2019s collective preference is genuinely intransitive, and no amount of re-voting resolves it. There are three honest responses.' },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Change the options', tag: 'Best', body: 'Cycles usually mean the options bundle different things. Split or recombine them and the cycle often disappears — which tells you something about the problem.' },
            { title: 'Add a tiebreak you agreed in advance', tag: 'Acceptable', body: 'Borda score among the cycle members, or the chair\u2019s decision, or a coin. Only legitimate if agreed before the cycle appeared.' },
            { title: 'Name it and go to consent', tag: 'Often best in practice', body: '"There is no option this group prefers to all others. So the question changes: which of these three can nobody reasonably object to trying first?"' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Why showing the cycle helps', text: 'Groups handle "we are genuinely circular on this" far better than they handle a result that feels arbitrary. The pairwise table makes the circularity visible and impersonal — it is a property of the preferences, not of anyone\u2019s stubbornness — and it moves the conversation to what the options are actually made of.' },
      ],
    },
  ],
  sources: [
    'Arrow, K. (1951) Social Choice and Individual Values. Wiley.',
    'Gibbard, A. (1973) Manipulation of Voting Schemes, Econometrica.',
    'Brams, S. and Fishburn, P. (1983) Approval Voting. Birkhäuser.',
    'Kaner, S. et al. (2014) Facilitator\u2019s Guide to Participatory Decision-Making, on gradients of agreement and multi-voting.',
  ],
  related: ['facilitation/frameworks/decision-making', 'facilitation/methods/structured-methods', 'facilitation/methods/group-size', 'game-theory/start-here'],
}

export default guide
