import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'How should a group choose when its members disagree? Voting looks simple until you try to do it fairly. Condorcet showed in the eighteenth century that majority voting can cycle: A beats B, B beats C, and C beats A. In 1951 Kenneth Arrow proved that no ranking system can satisfy a few reasonable fairness requirements at once. Voters have incentives to misreport. And formal voting power often bears little relation to the number of votes held. This guide covers the main results, with examples you can check by hand.',
  nutshell: [
    '**Condorcet’s paradox**: majority preferences can be **cyclical**, so there may be no clear majority winner.',
    '**Arrow’s impossibility theorem**: with three or more options, no voting system that turns rankings into a group ranking can satisfy a small set of fairness conditions together.',
    '**Median voter theorem**: with one policy dimension and single-peaked preferences, majority rule picks the median voter’s favourite, so two parties converge to the centre.',
    '**Strategic voting** is common, and unavoidable in general (Gibbard-Satterthwaite).',
    '**Voting power** is not the same as votes: the Shapley-Shubik and Banzhaf indices measure who is pivotal.',
  ],
  sections: [
    {
      id: 'condorcet',
      title: 'Condorcet’s paradox',
      blocks: [
        { t: 'p', text: 'Three voters rank three options. Voter 1 prefers A to B to C. Voter 2 prefers B to C to A. Voter 3 prefers C to A to B. A pairwise majority vote gives a cycle.' },
        {
          t: 'table',
          head: ['Pair', 'Votes', 'Winner'],
          rows: [
            ['A versus B', 'Voters 1 and 3 prefer A (2 votes), voter 2 prefers B', 'A'],
            ['B versus C', 'Voters 1 and 2 prefer B (2 votes), voter 3 prefers C', 'B'],
            ['C versus A', 'Voters 2 and 3 prefer C (2 votes), voter 1 prefers A', 'C'],
          ],
          caption: 'A beats B, B beats C, C beats A. Each voter’s ranking is consistent, but the group’s majority preference is not.',
        },
        { t: 'callout', tone: 'note', title: 'Consequence', text: 'Which option wins can depend on the order of votes (the agenda). Whoever controls the agenda may control the outcome. This is why agenda setting is a source of power in committees and legislatures.' },
      ],
    },
    {
      id: 'rules',
      title: 'Different rules, different winners',
      blocks: [
        { t: 'p', text: 'With more than two candidates, different voting rules can produce different winners from the same ballots. Suppose 100 voters rank three candidates as below.' },
        {
          t: 'table',
          head: ['Voters', 'First choice', 'Second', 'Third'],
          rows: [
            ['40', 'X', 'Y', 'Z'],
            ['35', 'Z', 'Y', 'X'],
            ['25', 'Y', 'Z', 'X'],
          ],
        },
        {
          t: 'table',
          head: ['Rule', 'How it works', 'Winner'],
          rows: [
            ['Plurality (first past the post)', 'Most first-place votes wins', 'X (40), though 60 voters rank it last or not first'],
            ['Runoff between top two', 'X (40) and Z (35) go to a second round. Y’s 25 voters prefer Z to X, so Z gets 35 + 25 = 60 against X’s 40', 'Z'],
            ['Borda count (2, 1, 0 points)', 'Points for 1st, 2nd and 3rd place. X: 40 × 2 = 80. Y: 40 + 35 + 25 × 2 = 125. Z: 35 × 2 + 25 = 95', 'Y (125 points)'],
            ['Condorcet (beats all others head to head)', 'Y versus X: 60 prefer Y; Y versus Z: 65 prefer Y', 'Y'],
          ],
          caption: 'Borda totals: X 80, Y 125, Z 95.',
        },
        { t: 'p', text: 'Three rules, three different winners from the same ballots (X, Z and Y). Plurality favours the candidate with a loyal base; runoff favours the candidate who can win a one-on-one race; Borda and Condorcet favour the broadly acceptable compromise. Which is “fair” depends on what you want a vote to do.' },
      ],
    },
    {
      id: 'arrow',
      title: 'Arrow’s impossibility theorem',
      blocks: [
        { t: 'p', text: 'Kenneth Arrow (1951) asked whether any method can turn individuals’ rankings of three or more options into a group ranking while satisfying a few seemingly mild conditions. The answer is no.' },
        {
          t: 'table',
          head: ['Condition', 'Meaning'],
          rows: [
            ['Unrestricted domain', 'Any combination of individual rankings is allowed'],
            ['Pareto efficiency', 'If everyone prefers A to B, the group ranks A above B'],
            ['Independence of irrelevant alternatives', 'The group’s ranking of A and B depends only on how individuals rank A and B, not on C'],
            ['Non-dictatorship', 'No single person’s ranking always decides'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The theorem', text: 'Any rule that satisfies the first three conditions must be a dictatorship. Every practical rule violates at least one. This does not mean voting is hopeless. It means no rule is perfect, and the choice between rules is a choice between imperfections.' },
      ],
    },
    {
      id: 'median',
      title: 'The median voter',
      blocks: [
        { t: 'p', text: 'Suppose voters lie along a line from left to right on one issue, and each prefers positions closer to their own. Duncan Black (1948) showed that the median voter’s favourite beats any other position in a majority vote. Anthony Downs (1957) applied it to elections: two parties competing for votes will move towards the centre, where the median voter sits.' },
        {
          t: 'list',
          items: [
            'It explains why two-party systems often have similar platforms.',
            'It requires one dimension, simple majority rule, and voters who vote according to proximity.',
            'It fails with several issues (cycles reappear), with multiple parties, when voters abstain or when activists pull candidates away from the centre.',
          ],
        },
      ],
    },
    {
      id: 'power',
      title: 'Voting power: who is pivotal?',
      blocks: [
        { t: 'p', text: 'In a body where members hold different numbers of votes, power does not follow the number of votes. The **Shapley-Shubik index** counts how often a member is pivotal: the one whose joining turns a losing coalition into a winning one, over all orders in which members could join.' },
        {
          t: 'example',
          title: 'A parliament of three',
          lines: [
            { label: 'The body', text: 'Party A has 49 seats, B has 48, C has 3. A majority needs 51.' },
            { label: 'Orders', text: 'There are six orders of joining. In each, find who takes the total to 51 or more.' },
            { label: 'ABC, CBA', text: 'ABC: A has 49, adding B makes 97, so B is pivotal. CBA: C has 3, B makes 51, so B is pivotal.' },
            { label: 'ACB, BCA', text: 'ACB: A has 49, adding C makes 52, so C is pivotal. BCA: B has 48, adding C makes 51, so C is pivotal.' },
            { label: 'BAC, CAB', text: 'BAC: B has 48, adding A makes 97, so A is pivotal. CAB: C has 3, adding A makes 52, so A is pivotal.' },
            { label: 'Result', text: 'Each is pivotal in 2 of 6 orders: one third of the power each, even though C holds only 3 of 100 seats. A tiny party can hold as much power as a large one if it is needed to build a majority.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Why it matters', text: 'Real coalition governments, shareholder votes and the weighted voting of the EU Council or the IMF all raise this issue. Votes are not power. Power is the ability to make or break a winning coalition.' },
        { t: 'links', items: [{ path: 'game-theory/information-and-design/mechanism-design-and-matching', note: 'Designing mechanisms and the Gibbard-Satterthwaite theorem' }, { path: 'game-theory/society/institutions-and-the-state', note: 'Institutions and collective choice' }] },
      ],
    },
  ],
  sources: [
    'Arrow, K. J. (1951). Social Choice and Individual Values. Wiley.',
    'Black, D. (1948). On the rationale of group decision-making. Journal of Political Economy.',
    'Downs, A. (1957). An Economic Theory of Democracy. Harper.',
    'Shapley, L. S., and Shubik, M. (1954). A method for evaluating the distribution of power in a committee system. American Political Science Review.',
    'Gibbard, A. (1973). Manipulation of voting schemes. Econometrica; Satterthwaite, M. (1975). Journal of Economic Theory.',
    'Gehrlein, W. V. (2006). Condorcet’s Paradox. Springer.',
  ],
  related: ['game-theory/information-and-design/mechanism-design-and-matching', 'game-theory/society/institutions-and-the-state', 'game-theory/society/norms-as-equilibria'],
}

export default guide
