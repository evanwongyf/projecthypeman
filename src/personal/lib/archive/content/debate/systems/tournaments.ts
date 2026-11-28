import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A tournament is a sorting machine. Understanding how it sorts explains several things that otherwise look unfair: why your rounds get harder as you win, why speaker points decide who breaks, and why one side of some motions wins more often than the other.',
  nutshell: [
    '**Power pairing** matches teams on similar records, so rounds get harder as you win and easier as you lose.',
    '**Team points** come first, **speaker points** are the usual tiebreak, so a fourth place with good speaks still has value.',
    'The **break** is the cut to elimination rounds; brackets are often decided by a single speaker point.',
    '**Side bias** is real on some motions, which is why the draw balances sides across rounds.',
    'Judges are allocated by **ranking**: strong judges to close rooms, which is why a hard draw usually comes with a better panel.',
    'Nothing in the machine rewards complaining about the machine.',
  ],
  sections: [
    {
      id: 'draw',
      title: 'How the draw works',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Round one: random', body: 'Or seeded by past results in some tournaments, to keep the strongest teams apart early.' },
            { title: 'Later rounds: power paired', body: 'Teams on the same number of points meet each other. This is the key fact: your opponents get stronger exactly as fast as you do.' },
            { title: 'Side allocation', body: 'Balanced so that over the tournament everyone has similar exposure to each side and, in BP, each position.' },
            { title: 'Judge allocation', body: 'Chairs ranked by test score and feedback; the strongest go where the decision will be hardest.' },
            { title: 'The break', body: 'A cut, by team points then speaker points, into elimination rounds.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Why your third round felt brutal', text: 'Because it was. Two wins puts you in a room of teams with two wins. A difficulty spike is evidence that the machine is working, not that you were unlucky.' },
      ],
    },
    {
      id: 'points',
      title: 'Points and the break',
      blocks: [
        { t: 'p', text: 'In BP, a first place is worth 3 team points, second 2, third 1, fourth 0. In two-team formats a win is 1 and a loss 0. Speaker points accumulate independently and almost always decide the bracket at the cut line.' },
        {
          t: 'table',
          head: ['Situation', 'What actually decides it'],
          rows: [
            ['Two teams on equal team points', 'Total speaker points.'],
            ['Still equal', 'Head-to-head, or the lowest individual score dropped, depending on the tab rules.'],
            ['A fourth place in a hard room', 'Costs team points; good speaks limit the damage and can preserve the break.'],
            ['A first place in an easy room', 'Same team points as a hard one, but speaks are usually marked lower in weak rooms.'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The practical implication', text: 'Never give up on a speech because the team result looks lost. Speaker points are allocated individually, they survive a bad round, and in close brackets they are what breaks you.' },
      ],
    },
    {
      id: 'bias',
      title: 'Side bias',
      blocks: [
        { t: 'p', text: 'Across a tournament, some motions produce lopsided results. The usual causes are structural rather than mysterious: a motion that concedes too much in its wording, a policy with an obvious model and no obvious counter-model, or an info slide that settles the empirical question.' },
        {
          t: 'checklist',
          items: [
            'Motions phrased with "despite" or "even though" have conceded something to one side.',
            'Policy motions with no plausible counter-model favour opposition on practice and proposition on principle.',
            'Prediction motions tend to favour whoever has the shorter causal chain, which is usually the status quo.',
            'A motion about an actor with obvious interests tends to favour the side those interests point to.',
            'Chief adjudicators track side balance across rounds, and a tournament that ignores it is badly run.',
          ],
        },
        { t: 'p', text: 'As a competitor, the useful response to a hard side is to find the burden asymmetry and argue it explicitly: see [framing and burdens](@debate/techniques/framing-and-burdens).' },
      ],
    },
    {
      id: 'etiquette',
      title: 'Running a round well',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Arrive on time; the tab is a chain and a late room delays everyone.',
            'Fill in judge feedback honestly and specifically; allocation depends on it.',
            'Tell the chief adjudicator about an equity issue through the proper channel, promptly.',
            'Thank the judge, whatever the result.',
          ],
          dont: [
            'Argue a decision after the oral. Ask a question instead.',
            'Discuss a motion you have debated with teams who have not, mid-round.',
            'Take photographs of the tab and speculate publicly about the break.',
          ],
        },
        { t: 'p', text: 'Equity rules exist in every major tournament, and conduct that makes a round unsafe or unusable is handled separately from the result. Behaviour that shades into tactics is covered in [dirty tricks](@debate/winning/dirty-tricks).' },
      ],
    },
  ],
  sources: [
    'Tabbycat tournament software documentation, on power pairing, side balance and break calculation.',
    'World Universities Debating Championship Debating and Judging Manual, on draws and judge allocation.',
  ],
  related: ['debate/systems/judging', 'debate/winning/judge-adaptation', 'debate/practice/feedback-and-review'],
}

export default guide
