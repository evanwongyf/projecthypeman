import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Did the programme work? Sponsors, schools and funders ask, and facilitators should want to know. Measuring character growth is hard, but a few simple designs and calculations go a long way, as long as you are honest about what they can and cannot show.',
  nutshell: [
    'The simplest design is a **pre/post survey** on the same scale.',
    'The **retrospective pre-test** (“then–now”) asks afterwards how people rated themselves before, which avoids the problem of people not knowing what they did not know.',
    'Report change as an **effect size** (Cohen’s d) or a **normalised gain** so it can be compared.',
    'Without a comparison group, you cannot be sure the programme caused the change.',
  ],
  sections: [
    {
      id: 'designs',
      title: 'Evaluation designs',
      blocks: [
        { t: 'table', head: ['Design', 'What it can show', 'Weakness'], rows: [
          ['Post-only feedback (“happy sheet”)', 'Satisfaction', 'Says nothing about change (Kirkpatrick level 1)'],
          ['Pre/post survey', 'Change in self-ratings', 'Response shift; no control for maturing or other events'],
          ['Retrospective pre-test', 'Perceived change, with a consistent standard', 'Memory and wanting to please'],
          ['Pre/post with comparison group', 'Change beyond what would have happened anyway', 'Needs a similar group; more effort'],
          ['Follow-up after 1–3 months', 'Whether change lasted and transferred', 'People drop out'],
          ['Observation and others’ ratings', 'Behaviour, not just self-belief', 'Time-consuming'],
        ] },
        { t: 'callout', tone: 'note', title: 'Response shift', text: 'Before a leadership camp a student may rate their teamwork 4 out of 5. After discovering how much there is to teamwork they may rate it 4 again, though they have improved: their yardstick changed. The retrospective pre-test (“Looking back, how would you have rated yourself before camp?”) was developed to reduce this bias.' },
      ],
    },
    {
      id: 'effect-size',
      title: 'Effect size for pre/post change',
      blocks: [
        {
          t: 'math',
          tex: String.raw`d = \frac{\bar x_{\text{post}} - \bar x_{\text{pre}}}{s_{\text{pre}}}`,
          caption: 'A simple standardised change: the gain divided by the spread of scores before the programme.',
          plain: 'Work out the average score after the programme and the average before. The difference is the raw gain. Divide by the standard deviation of the pre-programme scores to express that gain as “how many standard deviations did the group move?” This makes it comparable with other programmes and research.',
          where: [
            { sym: String.raw`\bar x_{\text{post}}`, def: 'average score after the programme' },
            { sym: String.raw`\bar x_{\text{pre}}`, def: 'average score before' },
            { sym: String.raw`s_{\text{pre}}`, def: 'standard deviation of the before scores (how spread out they were)' },
          ],
          syntax: [
            { sym: String.raw`\bar x`, say: '“x bar”: the mean of the scores' },
            { sym: 's', say: 'standard deviation: the typical distance of a score from the mean' },
          ],
          worked: {
            title: 'A resilience survey at a three-day camp',
            steps: [
              'Before: mean 3.2 on a 1–5 scale, standard deviation 0.6. After: mean 3.6.',
              String.raw`Raw gain: \(3.6 - 3.2 = 0.4\).`,
              String.raw`\(d = 0.4 / 0.6 \approx 0.67\).`,
              'Compare: 0.2 is conventionally small, 0.5 medium, 0.8 large; adventure programme meta-analyses average about 0.3–0.5.',
            ],
            why: [
              'collect the two averages and the before spread',
              'subtract to get the change in scale points',
              'divide by the spread to make it unit-free',
              'put the number in context rather than reporting it alone',
            ],
            answer: 'd ≈ 0.67, a medium-to-large self-reported change. Without a comparison group, some of it may be enthusiasm at the end of camp rather than lasting growth.',
          },
        },
      ],
    },
    {
      id: 'gain',
      title: 'Normalised gain',
      blocks: [
        {
          t: 'math',
          tex: String.raw`g = \frac{\text{post} - \text{pre}}{\text{max} - \text{pre}}`,
          caption: 'Hake’s normalised gain: the share of the possible improvement that was actually achieved.',
          plain: 'Someone who starts near the top of a scale cannot gain much. Normalised gain fixes this by asking: of the room left to improve, how much did they use? A gain of 0.5 means they closed half the gap between where they started and the maximum.',
          where: [
            { sym: 'g', def: 'normalised gain, from 0 (no change) to 1 (reached the maximum); negative if scores fell' },
            { sym: 'pre, post', def: 'scores before and after' },
            { sym: 'max', def: 'the highest possible score' },
          ],
          syntax: [
            { sym: 'max − pre', say: 'the room left to improve' },
          ],
          worked: {
            title: 'Two students on a 20-point knot and navigation test',
            steps: [
              String.raw`Aisha: pre 8, post 14. \(g = (14 - 8)/(20 - 8) = 6/12 = 0.5\).`,
              String.raw`Ben: pre 16, post 18. \(g = (18 - 16)/(20 - 16) = 2/4 = 0.5\).`,
              'Raw gains: Aisha +6, Ben +2.',
            ],
            why: [
              'Aisha had 12 points of room and used 6 of them',
              'Ben had only 4 points of room and used 2',
              'compare with the raw gains to see why normalising matters',
            ],
            answer: 'Both closed half their gap (g = 0.5), although Aisha’s raw gain was three times Ben’s. Normalised gain is fairer when people start at different levels.',
          },
        },
      ],
    },
    {
      id: 'questions',
      title: 'Writing good survey items',
      blocks: [
        { t: 'dodont', do: [
          'Use behaviour-based statements: “When my group disagrees, I suggest a way forward.”',
          'Use validated scales where possible (e.g. the Life Effectiveness Questionnaire)',
          'Include an open question: “What is one thing you do differently since the camp?”',
          'Ask teachers or parents too, a few weeks later',
        ], dont: [
          'Ask leading questions (“How much did the camp improve your leadership?”)',
          'Combine two ideas in one item (“I am confident and organised”)',
          'Claim causation from a pre/post design alone',
        ] },
      ],
    },
    {
      id: 'gain-lab',
      title: 'The pre/post lab',
      lead: 'Effect sizes, intervals and the three caveats, computed live.',
      blocks: [
        { t: 'p', text: 'Put your own numbers in. The arithmetic is the easy part; the three things it cannot tell you — response shift, ceiling effects and the absence of a comparison group — are printed underneath it for the same reason they belong in your report.' },
        { t: 'facil-lab', viz: 'gain' },
        {
          t: 'checklist',
          items: [
            'Drop the sample to 10 and watch the confidence interval swallow the result. Small cohorts cannot detect small effects, and reporting a point estimate alone hides that.',
            'Raise the pre mean to 4.5 on a 5-point scale: the ceiling leaves almost no room to move, so a flat result means the instrument ran out of road.',
            'Change the pre–post correlation and watch the paired effect size move while the raw change does not — which is why a paired design needs a paired statistic.',
            'Compare normalised gain with Cohen’s d when groups start in different places; the gain figure is the fairer one.',
          ],
        },
        { t: 'p', text: 'The same arithmetic from the other side — how to attack a study that quotes it at you — is on the debate shelf: [reading and attacking a study](@debate/advanced/reading-studies).' },
      ],
    },
  ],
  sources: [
    'Kirkpatrick, D. L., & Kirkpatrick, J. D. (2006). Evaluating Training Programs (3rd ed.). Berrett-Koehler.',
    'Hake, R. R. (1998). Interactive-engagement versus traditional methods. American Journal of Physics, 66(1), 64–74.',
    'Howard, G. S. (1980). Response-shift bias. Evaluation Review, 4(1), 93–106.',
    'Neill, J. T., Marsh, H. W., & Richards, G. E. (2003). The Life Effectiveness Questionnaire. Proceedings of the 2003 AARE conference.',
  ],
  related: ['facilitation/debriefing/why-debrief', 'teaching/taxonomies/kirkpatrick', 'teaching/motivation/evidence-on-methods'],
}

export default guide
