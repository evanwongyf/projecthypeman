import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Remediation must be checked, not assumed. Curriculum-based measurement (CBM) gives short, repeatable probes (one-minute reading passages, nonsense-word lists, spelling lists) that can be given weekly and plotted. A few simple calculations then tell you whether the intervention is working, and when to change it.',
  nutshell: [
    'Probe **weekly or fortnightly** with equivalent passages; plot each score.',
    'Draw an **aimline** from baseline to goal; fit a **trend line** through the data.',
    'Compute the **rate of improvement (ROI)**: the slope of the trend in units per week.',
    'Use **decision rules** (e.g. four consecutive points below the aimline → change the intervention).',
    'Estimate **gap closure**: at the current rate, when will the student reach the peer benchmark?',
  ],
  sections: [
    {
      id: 'roi',
      title: 'Rate of improvement',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{ROI} = \frac{\sum_i (x_i - \bar x)(y_i - \bar y)}{\sum_i (x_i - \bar x)^2}`,
          caption: 'The least-squares slope of scores y against week numbers x: the average gain per week.',
          plain: 'Individual weekly scores bounce around, so comparing just the first and last can mislead. The least-squares slope uses every point to find the line that fits best. Its slope is the rate of improvement: how many more words correct per minute (or whatever is measured) the student gains each week.',
          where: [
            { sym: String.raw`x_i`, def: 'week number of probe i' },
            { sym: String.raw`y_i`, def: 'score on probe i' },
            { sym: String.raw`\bar x, \bar y`, def: 'means of the weeks and of the scores' },
          ],
          syntax: [
            { sym: String.raw`\sum_i`, say: '“sum over all probes”' },
            { sym: String.raw`(x_i - \bar x)(y_i - \bar y)`, say: 'how far each point is from the centre in both directions, multiplied' },
          ],
          worked: {
            title: 'Six weeks of fluency probes',
            steps: [
              String.raw`Weeks 1–6, WCPM: 71, 72, 75, 74, 78, 80. \(\bar x = 3.5\), \(\bar y = 75\).`,
              String.raw`Deviations: \(x - \bar x = -2.5, -1.5, -0.5, 0.5, 1.5, 2.5\); \(y - \bar y = -4, -3, 0, -1, 3, 5\).`,
              String.raw`Products: \(10 + 4.5 + 0 - 0.5 + 4.5 + 12.5 = 31\).`,
              String.raw`\(\sum (x - \bar x)^2 = 6.25 + 2.25 + 0.25 + 0.25 + 2.25 + 6.25 = 17.5\).`,
              String.raw`\(\text{ROI} = 31/17.5 \approx 1.77\) WCPM per week.`,
            ],
            why: [
              'find the centre of the data',
              'subtract the means',
              'multiply matching deviations and add',
              'square the week deviations and add',
              'divide: the slope of the best-fitting line',
            ],
            answer: 'About 1.8 words correct per minute gained per week, above the ambitious goal rate of 1.5. The intervention is working; keep going.',
          },
        },
        { t: 'plot', title: 'Probe data, trend and aimline', x: [0, 13], y: [60, 95], xLabel: 'week', yLabel: 'WCPM', data: [{ pts: [[1, 71], [2, 72], [3, 75], [4, 74], [5, 78], [6, 80]], dots: true, label: 'probes' }], curves: [
          { f: (w) => 71 + 1.5 * w, label: 'aimline (goal 1.5/week)', color: 'var(--ink)', dashed: true },
          { f: (w) => 75 + 1.771 * (w - 3.5), label: 'trend (1.77/week)', color: 'var(--teal)', from: 1, to: 12 },
        ] },
      ],
    },
    {
      id: 'decisions',
      title: 'Decision rules',
      blocks: [
        { t: 'table', head: ['Data pattern', 'Decision'], rows: [
          ['Four consecutive points above the aimline', 'Raise the goal'],
          ['Four consecutive points below the aimline', 'Change the intervention (more time, smaller group, different focus)'],
          ['Points around the aimline', 'Continue'],
          ['Trend slope below the aimline slope after 6–8 points', 'Change the intervention'],
        ] },
        { t: 'list', items: [
          'Intensify by: more minutes per day, smaller groups (1:1 to 1:3), more explicit modelling, more practice opportunities, targeting a narrower skill, or adding a different component (e.g. phonemic manipulation).',
          'Check fidelity first: was the intervention actually delivered as planned?',
        ] },
      ],
    },
    {
      id: 'gap',
      title: 'Gap closure',
      blocks: [
        {
          t: 'math',
          tex: String.raw`t_{\text{close}} = \frac{B - S}{\text{ROI}_{\text{student}} - \text{ROI}_{\text{peers}}}`,
          caption: 'Weeks to catch up with a moving benchmark, if both growth rates stay constant.',
          plain: 'Peers keep improving too, so a struggling reader must grow faster than them to catch up. Divide the current gap by the difference in growth rates. If the student is not growing faster than peers, the gap never closes.',
          where: [
            { sym: 'B', def: 'peer benchmark score now' },
            { sym: 'S', def: 'student score now' },
            { sym: String.raw`\text{ROI}`, def: 'weekly growth rates' },
          ],
          syntax: [
            { sym: String.raw`t_{\text{close}}`, say: 'weeks until the gap closes' },
          ],
          worked: {
            title: 'Can the student catch up?',
            steps: [
              String.raw`Student now 80 WCPM growing 1.77/week; peer benchmark 110 growing 1.0/week.`,
              String.raw`Gap: \(110 - 80 = 30\).`,
              String.raw`Closing speed: \(1.77 - 1.0 = 0.77\) per week.`,
              String.raw`\(t = 30/0.77 \approx 39\) weeks.`,
            ],
            why: [
              'current levels and rates',
              'the gap today',
              'how much faster the student grows',
              'divide gap by closing speed',
            ],
            answer: 'About 39 school weeks (roughly a school year) of continued strong intervention. Growth rates usually slow as fluency rises, so plan to review and adjust.',
          },
        },
      ],
    },
  ],
  sources: [
    'Deno, S. L. (1985). Curriculum-based measurement: The emerging alternative. Exceptional Children, 52(3), 219–232.',
    'Fuchs, L. S., & Fuchs, D. (2011). Using CBM for progress monitoring in reading. National Center on Student Progress Monitoring.',
    'National Center on Intensive Intervention. Data-based individualization.',
  ],
  related: ['teaching/special-education/dyslexia-remediation/fluency-building', 'teaching/special-education/foundations/tiered-support', 'teaching/special-education/dyslexia-remediation/assessment-and-profile'],
}

export default guide
