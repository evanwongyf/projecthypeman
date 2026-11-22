import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Teachers cannot treat conduct disorder, but they can make school a place where a child with serious conduct problems is more likely to behave well, learn and connect, and where others are safe. The research on CU traits points to some specific adjustments: lean on rewards, build relationships deliberately, teach emotions explicitly, and avoid power struggles.',
  nutshell: [
    '**Structure**: clear rules, routines and predictable consequences.',
    '**Rewards**: frequent, specific, valued rewards for target behaviours; these work better than punishment for children with CU traits.',
    '**Relationships**: warm, consistent adults, even when the child seems indifferent.',
    '**Teach emotions**: name feelings, point to faces, explain impact.',
    '**Supervision**: in unstructured times (recess, transitions) where incidents cluster.',
  ],
  sections: [
    {
      id: 'strategies',
      title: 'Strategies',
      blocks: [
        { t: 'table', head: ['Strategy', 'How', 'Why it fits'], rows: [
          ['Clear, few rules', 'Three to five positively stated rules, taught and practised', 'Reduces ambiguity and argument'],
          ['Token or point system', 'Points for specific target behaviours, exchanged for valued privileges', 'Children with CU traits are reward-responsive'],
          ['Behaviour contract', 'Agreed goals, rewards and consequences, reviewed weekly', 'Makes contingencies explicit'],
          ['Daily report card', 'Teacher rates two or three targets each lesson; home provides rewards', 'Links school and home; strong evidence for conduct problems and ADHD'],
          ['Planned relationship time', 'Two minutes a day, ten days running, talking about the child’s interests (“2 × 10”)', 'Builds connection without demands'],
          ['Emotion coaching', '“Look at her face. What is she feeling? How do you know?”', 'Builds attention to distress cues'],
          ['Calm, brief consequences', 'Predictable, non-emotional, short', 'Avoids rewarding with attention; avoids escalation'],
          ['Choice within limits', '“You can do this here or at the side table”', 'Reduces power struggles'],
          ['Close supervision of unstructured time', 'Structured recess activities; adult nearby', 'Prevents incidents with peers'],
          ['Strengths and responsibilities', 'Jobs that use the child’s skills', 'Prosocial identity, positive attention'],
        ] },
      ],
    },
    {
      id: 'deescalation',
      title: 'Avoiding power struggles',
      blocks: [
        { t: 'dodont', do: [
          'Stay calm and brief; lower your voice',
          'State the expectation and the choice',
          'Give time and space to comply',
          'Follow through consistently later, privately',
          'Notice and reward compliance immediately',
        ], dont: [
          'Argue, lecture or try to win in front of the class',
          'Rely on making the child feel guilty',
          'Escalate threats',
          'Take it personally',
        ] },
      ],
    },
  ],
  sources: [
    'Fabiano, G. A. et al. (2010). Enhancing the effectiveness of special education programming for children with ADHD using a daily report card. School Psychology Review, 39(2), 219–239.',
    'Webster-Stratton, C. (2012). Incredible Teachers. Incredible Years.',
    'Hawes, D. J., Price, M. J., & Dadds, M. R. (2014). Callous-unemotional traits and the treatment of conduct problems. Clinical Child and Family Psychology Review, 17(3), 248–267.',
    'Allday, R. A., & Pakurar, K. (2007). Effects of teacher greetings on student on-task behavior. Journal of Applied Behavior Analysis, 40(2), 317–320.',
  ],
  related: ['teaching/special-education/strategies/behaviour-support', 'teaching/special-education/approaches/teaching-scripts', 'teaching/special-education/conduct-and-cu/safety-and-safeguarding'],
}

export default guide
