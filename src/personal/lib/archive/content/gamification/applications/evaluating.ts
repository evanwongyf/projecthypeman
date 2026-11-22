import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Did the gamification help, and with what? A fair evaluation compares like with like, measures learning as well as engagement, follows the effect long enough to see novelty fade, and checks whether some learners lost out. The maths is simple enough for a teacher to do in a spreadsheet.',
  nutshell: [
    'Compare a **gamified and a non-gamified** version (parallel classes, alternate units or randomised sections).',
    'Measure **learning** (a common test), not only clicks or enjoyment.',
    'Report an **effect size** with a rough **confidence interval**.',
    'Look at **subgroups**: did low attainers or anxious students gain or lose?',
  ],
  sections: [
    {
      id: 'designs',
      title: 'Evaluation designs',
      blocks: [
        { t: 'table', head: ['Design', 'Strength', 'Weakness'], rows: [
          ['Before and after in one class', 'Easy', 'Cannot separate gamification from normal progress'],
          ['Two parallel classes', 'A real comparison', 'Classes and teachers differ'],
          ['Alternating units (A gamified, B not, swap)', 'Each class is its own control', 'Units differ in difficulty'],
          ['Random assignment of students (online)', 'Strongest', 'Possible only on platforms'],
        ] },
      ],
    },
    {
      id: 'ci',
      title: 'An effect size with a confidence interval',
      blocks: [
        {
          t: 'math',
          tex: String.raw`SE(d) \approx \sqrt{\frac{n_1 + n_2}{n_1 n_2} + \frac{d^2}{2(n_1 + n_2)}}, \qquad 95\%\ \text{CI} \approx d \pm 1.96\,SE(d)`,
          caption: 'The approximate standard error of Cohen’s d and its 95% confidence interval.',
          plain: 'An effect size from one class comparison is an estimate, and small groups give wobbly estimates. This formula gives the standard error; about two standard errors either side gives a range that likely contains the true effect. If the range includes zero, you cannot be confident there was any effect.',
          where: [
            { sym: 'd', def: 'the effect size you calculated' },
            { sym: String.raw`n_1, n_2`, def: 'sizes of the two groups' },
            { sym: 'SE(d)', def: 'standard error of d' },
          ],
          syntax: [
            { sym: String.raw`\pm`, say: '“plus or minus”' },
          ],
          worked: {
            title: 'Two classes of 30, d = 0.40',
            steps: [
              String.raw`\(\frac{n_1 + n_2}{n_1 n_2} = \frac{60}{900} = 0.0667\).`,
              String.raw`\(\frac{d^2}{2(n_1 + n_2)} = \frac{0.16}{120} = 0.00133\).`,
              String.raw`\(SE = \sqrt{0.0667 + 0.0013} = \sqrt{0.068} \approx 0.261\).`,
              String.raw`CI: \(0.40 \pm 1.96 \times 0.261 = 0.40 \pm 0.51 = [-0.11,\ 0.91]\).`,
            ],
            why: [
              'the main term depends on the group sizes',
              'a small correction for the size of d',
              'add and square-root',
              'about two standard errors either side',
            ],
            answer: 'The interval runs from slightly negative to large: one comparison of two classes cannot establish an effect. Repeat across units or classes, or combine results.',
          },
        },
        {
          t: 'math',
          tex: String.raw`n \approx \frac{2\,(z_{1-\alpha/2} + z_{1-\beta})^2}{d^2}`,
          caption: 'Learners needed per group to detect an effect of size d (two-sided α = 0.05, power 1 − β).',
          plain: 'To plan an evaluation that can actually detect a realistic effect, work out how many learners each group needs. Smaller expected effects need many more learners: the number grows with one over d squared.',
          where: [
            { sym: 'n', def: 'learners per group' },
            { sym: String.raw`z_{1-\alpha/2}`, def: '1.96 for 5% significance' },
            { sym: String.raw`z_{1-\beta}`, def: '0.84 for 80% power' },
            { sym: 'd', def: 'the smallest effect worth detecting' },
          ],
          syntax: [
            { sym: String.raw`\alpha, \beta`, say: '“alpha” (false-positive rate), “beta” (miss rate)' },
          ],
          worked: {
            title: 'Detecting d = 0.3 with 80% power',
            steps: [
              String.raw`\((1.96 + 0.84)^2 = 2.8^2 = 7.84\).`,
              String.raw`\(n = 2 \times 7.84/0.09 = 15.68/0.09 \approx 174\).`,
              String.raw`For \(d = 0.5\): \(15.68/0.25 \approx 63\).`,
            ],
            why: [
              'combine the two z-values',
              'divide by the squared effect size',
              'a bigger effect needs far fewer learners',
            ],
            answer: 'About 174 learners per group for d = 0.3: roughly six classes each. School-level evaluations are usually too small to detect typical gamification effects reliably, which is why repeated or pooled evaluations matter.',
          },
        },
      ],
    },
    {
      id: 'checklist',
      title: 'What to measure',
      blocks: [
        { t: 'checklist', items: [
          'Learning: a common test, ideally also a delayed test a few weeks later',
          'Behaviour: practice completed, time on task, spacing of practice',
          'Motivation: a short intrinsic motivation scale before and after',
          'Subgroups: low, middle and high attainers; anxious students',
          'Novelty: plot engagement week by week',
          'Side effects: cheating, complaints, inequities',
        ] },
      ],
    },
  ],
  sources: [
    'Hedges, L. V., & Olkin, I. (1985). Statistical Methods for Meta-Analysis. Academic Press.',
    'Cohen, J. (1988). Statistical Power Analysis for the Behavioral Sciences (2nd ed.). Erlbaum.',
  ],
  related: ['gamification/evidence/meta-analyses', 'facilitation/growth/measuring-growth', 'agentic-ai/maths/evaluating-agents'],
}

export default guide
