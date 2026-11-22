import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Points, badges and leaderboards (“PBL”) are the most used, and most criticised, gamification elements. They can work: leaderboards increased time on task in some studies, and badges can mark real achievements. The design details decide whether they motivate most learners or only the few at the top.',
  nutshell: [
    '**Leaderboards**: prefer team, relative (near-neighbour) and personal-best boards over all-time public rankings.',
    '**Badges**: make them rare enough to mean something, tied to specific skills or behaviours, and include ones for effort, creativity and helping others.',
    '**Points**: award for accuracy and mastery, with diminishing returns for repetition.',
    'Mekler et al. (2017): points, levels and leaderboards raised **performance quantity** without raising intrinsic motivation.',
  ],
  sections: [
    {
      id: 'leaderboards',
      title: 'Leaderboard designs',
      blocks: [
        { t: 'table', head: ['Design', 'How it works', 'Effect on the middle and bottom'], rows: [
          ['All-time global', 'Everyone ranked by total points', 'Discouraging: gaps grow and feel uncatchable'],
          ['Weekly reset', 'Ranks reset each week', 'Better: everyone has a fresh chance'],
          ['Relative (“near you”)', 'Show the 3 above and 3 below you', 'Good: a reachable next target'],
          ['Improvement board', 'Rank by improvement on last week', 'Good: rewards effort at every level'],
          ['Team board', 'Teams of mixed attainment ranked', 'Good: co-operation inside teams'],
          ['Personal best', 'Compare only with your own past', 'Good for anxious or struggling learners'],
          ['Private', 'Only the learner sees their rank', 'Low pressure; less social motivation'],
        ] },
        {
          t: 'math',
          tex: String.raw`\text{Improvement} = \frac{x_{\text{this week}} - x_{\text{last week}}}{x_{\text{max}} - x_{\text{last week}}}`,
          caption: 'An improvement score that measures the share of the remaining room a learner closed this week (a normalised gain).',
          plain: 'Ranking by raw improvement favours learners who started low (they have more room). Dividing by the room left makes it fair: a learner who went from 90 to 95 out of 100 closed half their gap, the same as one who went from 40 to 70.',
          where: [
            { sym: String.raw`x_{\text{this week}}, x_{\text{last week}}`, def: 'scores in consecutive weeks' },
            { sym: String.raw`x_{\text{max}}`, def: 'the maximum possible score' },
          ],
          syntax: [
            { sym: String.raw`x_{\text{max}} - x_{\text{last week}}`, say: 'the room left to improve' },
          ],
          worked: {
            title: 'Two learners on a 100-point weekly quiz',
            steps: [
              String.raw`Wei: 40 → 70. \((70 - 40)/(100 - 40) = 30/60 = 0.50\).`,
              String.raw`Priya: 90 → 95. \((95 - 90)/(100 - 90) = 5/10 = 0.50\).`,
              'Raw gains: 30 and 5 points.',
            ],
            why: [
              'Wei closed half of a 60-point gap',
              'Priya closed half of a 10-point gap',
              'raw gains would make Priya look six times worse',
            ],
            answer: 'Both score 0.50 and tie on the improvement board, so strong and weak learners can both compete. (If a learner already has full marks, show “maxed” rather than dividing by zero.)',
          },
        },
      ],
    },
    {
      id: 'badges',
      title: 'Badges that mean something',
      blocks: [
        { t: 'dodont', do: [
          'Name the skill: “Fraction Fixer: simplified 20 fractions correctly”',
          'Include badges for effort, perseverance, creativity and helping others',
          'Make some badges hidden discoveries (curiosity)',
          'Link badges to real evidence (open badges with criteria and examples)',
          'Keep a manageable number (10–20 per course)',
        ], dont: [
          'Badge every login or completed page',
          'Make badges only achievable by the top few',
          'Use badges as the only feedback',
        ] },
      ],
    },
    {
      id: 'points',
      title: 'Point systems',
      blocks: [
        { t: 'table', head: ['Rule', 'Reason'], rows: [
          ['Points for correct first attempts', 'Rewards thinking, not guessing'],
          ['Smaller points for repeated practice of mastered items', 'Prevents farming easy questions'],
          ['Bonus for spaced review (returning after days)', 'Rewards a powerful learning behaviour'],
          ['Points for helpful peer explanations, rated by peers', 'Rewards social learning'],
          ['No points for attendance or compliance', 'These should be expectations, not game rewards'],
        ] },
      ],
    },
  ],
  sources: [
    'Mekler, E. D., Brühlmann, F., Tuch, A. N., & Opwis, K. (2017). Towards understanding the effects of individual gamification elements on intrinsic motivation and performance. Computers in Human Behavior, 71, 525–534.',
    'Landers, R. N., & Landers, A. K. (2014). An empirical test of the theory of gamified learning: The effect of leaderboards on time-on-task and academic performance. Simulation & Gaming, 45(6), 769–785.',
    'Hamari, J. (2017). Do badges increase user activity? A field experiment on the effects of gamification. Computers in Human Behavior, 71, 469–478.',
  ],
  related: ['gamification/evidence/when-it-backfires', 'gamification/design/progression-maths', 'facilitation/growth/measuring-growth'],
}

export default guide
