import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Hundreds of studies have tested gamification and game-based learning. Meta-analyses pool them to estimate the average effect and to find what makes it bigger or smaller. The overall picture is positive but modest, with wide variation, and with weaker results in the most rigorous studies.',
  nutshell: [
    'Gamification and learning outcomes: average effects around **g ≈ 0.4–0.5** (Sailer and Homner, 2020; Bai, Hew and Huang, 2020; Huang et al., 2020).',
    'Digital game-based learning versus non-game instruction: about **g ≈ 0.3** (Clark, Tanner-Smith and Killingsworth, 2016; Wouters et al., 2013).',
    'Moderators that matter: **combining game fiction with social interaction**, longer interventions, well-designed instruction underneath, and study quality.',
    'Many studies are short, small and compare against weak controls, so treat headline numbers with care.',
  ],
  sections: [
    {
      id: 'numbers',
      title: 'The headline numbers',
      blocks: [
        { t: 'bars', title: 'Average effects from meta-analyses (approximate)', unit: 'g', decimals: 2, refs: [{ at: 0.2, label: 'small' }, { at: 0.5, label: 'medium' }], items: [
          { label: 'Gamification → cognitive outcomes (Sailer and Homner, 2020)', value: 0.49, group: 'Gamification' },
          { label: 'Gamification → motivation (Sailer and Homner)', value: 0.36 },
          { label: 'Gamification → behaviour (Sailer and Homner)', value: 0.25 },
          { label: 'Gamification → academic performance (Bai et al., 2020)', value: 0.50 },
          { label: 'Digital games vs non-game (Clark et al., 2016)', value: 0.33, group: 'Game-based learning' },
          { label: 'Serious games vs conventional, learning (Wouters et al., 2013)', value: 0.29 },
        ], caption: 'Values as reported; confidence intervals are wide, and effects were smaller in studies with stronger designs.' },
      ],
    },
    {
      id: 'reading',
      title: 'Reading an effect size',
      blocks: [
        {
          t: 'math',
          tex: String.raw`g = J \cdot \frac{\bar x_G - \bar x_C}{s_p}, \qquad s_p = \sqrt{\frac{(n_G - 1)s_G^2 + (n_C - 1)s_C^2}{n_G + n_C - 2}}, \qquad J \approx 1 - \frac{3}{4(n_G + n_C) - 9}`,
          caption: 'Hedges’ g: the standardised difference between a gamified (G) and control (C) group, with a small-sample correction J.',
          plain: 'Subtract the control group’s average score from the gamified group’s average, then divide by the typical spread of scores (the pooled standard deviation), so studies using different tests can be compared. Small studies slightly overstate effects, so multiply by a correction factor J that is just under 1.',
          where: [
            { sym: String.raw`\bar x_G, \bar x_C`, def: 'mean scores of the gamified and control groups' },
            { sym: String.raw`s_G, s_C`, def: 'their standard deviations' },
            { sym: String.raw`n_G, n_C`, def: 'their sizes' },
            { sym: String.raw`s_p`, def: 'pooled standard deviation' },
            { sym: 'J', def: 'small-sample correction' },
          ],
          syntax: [
            { sym: String.raw`\bar x`, say: '“x bar”: a mean' },
            { sym: String.raw`s^2`, say: '“s squared”: a variance' },
          ],
          worked: {
            title: 'A gamified versus regular vocabulary unit',
            steps: [
              String.raw`Gamified: \(n_G = 28\), mean 72, SD 12. Control: \(n_C = 30\), mean 66, SD 14.`,
              String.raw`\(s_p = \sqrt{(27 \times 144 + 29 \times 196)/56} = \sqrt{(3{,}888 + 5{,}684)/56} = \sqrt{170.9} \approx 13.07\).`,
              String.raw`Raw \(d = (72 - 66)/13.07 \approx 0.459\).`,
              String.raw`\(J = 1 - 3/(4 \times 58 - 9) = 1 - 3/223 \approx 0.987\). \(g = 0.987 \times 0.459 \approx 0.45\).`,
            ],
            why: [
              'collect each group’s size, mean and spread',
              'weight each variance by its degrees of freedom, average, square-root',
              'standardise the mean difference',
              'apply the small-sample correction',
            ],
            answer: 'g ≈ 0.45, close to the meta-analytic average. One study this size has a wide confidence interval (roughly ±0.5), so it could be anywhere from no effect to a large one.',
          },
        },
      ],
    },
    {
      id: 'moderators',
      title: 'What makes effects bigger or smaller',
      blocks: [
        { t: 'table', head: ['Moderator', 'Finding'], rows: [
          ['Game fiction + social interaction', 'Sailer and Homner found the combination (story plus competition or collaboration) especially effective for behaviour'],
          ['Competition with collaboration', 'Combining team collaboration with competition between teams tended to work better than pure individual competition'],
          ['Study rigour', 'Effects were smaller and less certain in studies with random assignment and equivalent controls'],
          ['Duration', 'Mixed: some reviews find shorter interventions show bigger effects, consistent with novelty'],
          ['Underlying instruction', 'Gamification amplifies instruction; it does not substitute for it (Landers)'],
          ['Learner age and subject', 'Effects appear across levels and subjects, with large variation within each'],
        ] },
      ],
    },
  ],
  sources: [
    'Sailer, M., & Homner, L. (2020). The gamification of learning: A meta-analysis. Educational Psychology Review, 32, 77–112.',
    'Bai, S., Hew, K. F., & Huang, B. (2020). Does gamification improve student learning outcome? Evidence from a meta-analysis and synthesis of qualitative data in educational contexts. Educational Research Review, 30, 100322.',
    'Huang, R. et al. (2020). The impact of gamification in educational settings on student learning outcomes: A meta-analysis. Educational Technology Research and Development, 68, 1875–1901.',
    'Clark, D. B., Tanner-Smith, E. E., & Killingsworth, S. S. (2016). Digital games, design, and learning: A systematic review and meta-analysis. Review of Educational Research, 86(1), 79–122.',
    'Wouters, P. et al. (2013). A meta-analysis of the cognitive and motivational effects of serious games. Journal of Educational Psychology, 105(2), 249–265.',
  ],
  related: ['gamification/evidence/when-it-backfires', 'gamification/applications/evaluating', 'teaching/motivation/evidence-on-methods'],
}

export default guide
