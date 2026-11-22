import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Average effects hide the studies where gamification made things worse. Knowing the failure modes helps you design them out: rewards that crowd out interest, rankings that discourage most learners, points that can be farmed, novelty that wears off, and designs that favour some students over others.',
  nutshell: [
    '**Overjustification**: expected, controlling rewards for interesting tasks can reduce intrinsic motivation (Deci, Koestner and Ryan, 1999).',
    '**Hanus and Fox (2015)**: a gamified university course with badges and leaderboards led to lower intrinsic motivation, satisfaction and exam scores than the same course without them.',
    '**Gaming the system**: learners optimise points, not learning (Baker et al.).',
    '**Novelty decay**: engagement gains often fade over weeks (Koivisto and Hamari, 2014).',
  ],
  sections: [
    {
      id: 'modes',
      title: 'Failure modes',
      blocks: [
        { t: 'table', head: ['Failure', 'What happens', 'Design fix'], rows: [
          ['Overjustification', 'Students who liked reading start reading only for points', 'Informational rewards; reward mastery and creativity; let rewards fade'],
          ['Leaderboard discouragement', 'The bottom half stop trying; anxious students disengage', 'Team boards, personal bests, small peer groups, weekly resets'],
          ['Gaming the system', 'Guessing quickly, hint abuse, farming easy points', 'Points for accuracy and mastery; caps on easy tasks'],
          ['Speed over thought', 'Timed quizzes reward fast guessers', 'Untimed modes; accuracy-weighted scoring'],
          ['Novelty decay', 'Enthusiasm drops after the first weeks', 'Evolving challenges, meaningful progression, story arcs'],
          ['Inequity', 'Students with more time, devices or confidence dominate', 'Offline options, in-class time, team structures'],
          ['Distraction', 'Time spent on avatars and shops instead of content', 'Keep cosmetic features small and earned'],
          ['Cheating and conflict', 'Copying answers for points; disputes over rankings', 'Low stakes; reward process; transparent rules'],
        ] },
      ],
    },
    {
      id: 'novelty',
      title: 'Modelling novelty decay',
      blocks: [
        {
          t: 'math',
          tex: String.raw`E(t) = E_\infty + (E_0 - E_\infty)\,e^{-t/\tau}`,
          caption: 'Engagement E falling from an initial burst E₀ towards a long-run level E∞ with time constant τ.',
          plain: 'When a new gamified system launches, engagement often jumps, then slides back towards a lower steady level as the novelty wears off. This exponential model describes that slide. The question that matters is whether the long-run level E∞ is above where you started without gamification.',
          where: [
            { sym: 'E(t)', def: 'engagement in week t (e.g. practice sessions per student)' },
            { sym: String.raw`E_0`, def: 'engagement at launch' },
            { sym: String.raw`E_\infty`, def: 'long-run engagement after the novelty fades' },
            { sym: String.raw`\tau`, def: 'time constant (weeks)' },
          ],
          syntax: [
            { sym: String.raw`E_\infty`, say: '“E infinity”: the level approached in the long run' },
            { sym: String.raw`e^{-t/\tau}`, say: '“e to the minus t over tau”' },
          ],
          worked: {
            title: 'A practice app with points and streaks',
            steps: [
              String.raw`Before launch: 2.0 sessions a week. Launch: \(E_0 = 5.0\). Long-run: \(E_\infty = 2.6\). \(\tau = 3\) weeks.`,
              String.raw`Week 3: \(2.6 + 2.4 \times e^{-1} = 2.6 + 2.4 \times 0.368 = 3.48\).`,
              String.raw`Week 9: \(2.6 + 2.4 \times e^{-3} = 2.6 + 2.4 \times 0.050 = 2.72\).`,
              String.raw`Lasting gain: \(2.6 - 2.0 = 0.6\) sessions a week (30%).`,
            ],
            why: [
              'illustrative values for a term-long rollout',
              'after one time constant, about 37% of the burst remains',
              'after three, about 5% remains',
              'compare the long-run level with the baseline, not with the launch peak',
            ],
            answer: 'A launch that more than doubled engagement settles to a 30% lasting gain. An evaluation that only measured the first two weeks would overstate the effect several-fold.',
          },
        },
      ],
    },
  ],
  sources: [
    'Hanus, M. D., & Fox, J. (2015). Assessing the effects of gamification in the classroom: A longitudinal study on intrinsic motivation, social comparison, satisfaction, effort, and academic performance. Computers & Education, 80, 152–161.',
    'Deci, E. L., Koestner, R., & Ryan, R. M. (1999). A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation. Psychological Bulletin, 125(6), 627–668.',
    'Koivisto, J., & Hamari, J. (2014). Demographic differences in perceived benefits from gamification. Computers in Human Behavior, 35, 179–188.',
    'Baker, R. S. et al. (2004). Off-task behavior in the cognitive tutor classroom: When students “game the system”. CHI ’04.',
    'Toda, A. M., Valle, P. H. D., & Isotani, S. (2018). The dark side of gamification: An overview of negative effects of gamification in education. Communications in Computer and Information Science, 832, 143–156.',
  ],
  related: ['teaching/motivation/rewards-and-overjustification', 'gamification/design/leaderboards-and-badges', 'gamification/applications/evaluating'],
}

export default guide
