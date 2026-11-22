import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every click on a learning platform leaves a trace: log-ins, video views, quiz attempts, forum posts. Learning analytics is the use of that data to understand and improve learning. Used well, it helps teachers spot struggling learners early. Used badly, it measures what is easy to count, labels learners, and invades privacy.',
  nutshell: [
    'Platform data shows **behaviour** (what was clicked), not **learning** (what was understood).',
    'The **engagement funnel** shows where learners drop off.',
    'Early-warning models estimate a probability of failing or dropping out, often with **logistic regression**.',
    'An alert is only useful if it is **accurate** and leads to **helpful action**; base rates make many alerts false alarms.',
  ],
  sections: [
    {
      id: 'funnel',
      title: 'The engagement funnel',
      blocks: [
        { t: 'bars', title: 'A typical MOOC-style funnel (illustrative)', unit: '%', decimals: 0, items: [
          { label: 'Registered', value: 100 },
          { label: 'Started a lesson', value: 55 },
          { label: 'Watched half the week 1 videos', value: 35 },
          { label: 'Completed week 1 quiz', value: 22 },
          { label: 'Active in week 4', value: 12 },
          { label: 'Earned a certificate', value: 5 },
        ], caption: 'Illustrative shape. Reich and Ruipérez-Valiente (2019) reported MIT and Harvard MOOC completion of about 3% of registrants in 2017–18; completion among those who paid for a certificate was far higher (around 46%).' },
      ],
    },
    {
      id: 'model',
      title: 'An early-warning model',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(\text{at risk}) = \frac{1}{1 + e^{-z}}, \qquad z = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \cdots`,
          caption: 'Logistic regression: a weighted sum of signals turned into a probability between 0 and 1.',
          plain: 'Take a few signals for each learner (days since last log-in, quiz average, assignments missed). Multiply each by a weight learned from past students, add them with a starting value, and squash the total through the S-shaped logistic function so it becomes a probability. Positive weights raise the risk; negative weights lower it.',
          where: [
            { sym: 'z', def: 'the risk score before squashing (the log-odds)' },
            { sym: String.raw`\beta_0`, def: 'intercept: the baseline log-odds' },
            { sym: String.raw`\beta_i`, def: 'weight for signal i (learned from past data)' },
            { sym: String.raw`x_i`, def: 'signal i for this learner' },
            { sym: 'e', def: 'Euler’s number, about 2.718' },
          ],
          syntax: [
            { sym: String.raw`\beta`, say: '“beta”' },
            { sym: String.raw`e^{-z}`, say: '“e to the minus z”' },
            { sym: String.raw`\frac{1}{1+e^{-z}}`, say: 'the logistic (sigmoid) function: near 0 for very negative z, 0.5 at z = 0, near 1 for large z' },
          ],
          worked: {
            title: 'One learner',
            steps: [
              String.raw`Model: \(\beta_0 = -2\); days since log-in \(x_1\) with \(\beta_1 = 0.3\); quiz average (0–1) \(x_2\) with \(\beta_2 = -3\); missed assignments \(x_3\) with \(\beta_3 = 0.8\).`,
              String.raw`Learner: 7 days since log-in, quiz average 0.5, 2 missed.`,
              String.raw`\(z = -2 + 0.3(7) - 3(0.5) + 0.8(2) = -2 + 2.1 - 1.5 + 1.6 = 0.2\).`,
              String.raw`\(e^{-0.2} \approx 0.819\); \(P = 1/(1 + 0.819) \approx 0.55\).`,
            ],
            why: [
              'weights come from fitting the model to past cohorts',
              'collect this learner’s signals',
              'weighted sum: absence and missed work push up, good quiz scores pull down',
              'the sigmoid turns the score into a probability',
            ],
            answer: 'About a 55% estimated risk. That is a reason for a friendly check-in, not a label: the model sees clicks, not circumstances.',
          },
        },
        {
          t: 'math',
          tex: String.raw`\text{Precision} = \frac{TP}{TP + FP} = \frac{s \cdot b}{s \cdot b + (1 - sp)(1 - b)}`,
          caption: 'The share of alerts that are true, from the model’s sensitivity s, specificity sp and the base rate b of real risk.',
          plain: 'When few learners are truly at risk, even a good model raises many false alarms, because it is applied to many learners who are fine. Precision tells you what share of flagged learners really are at risk.',
          where: [
            { sym: 'TP, FP', def: 'true positives (flagged and really at risk) and false positives (flagged but fine)' },
            { sym: 's', def: 'sensitivity: share of at-risk learners the model flags' },
            { sym: 'sp', def: 'specificity: share of fine learners it correctly leaves unflagged' },
            { sym: 'b', def: 'base rate: share of learners truly at risk' },
          ],
          syntax: [
            { sym: '(1 − sp)', say: 'the false-alarm rate among learners who are fine' },
          ],
          worked: {
            title: 'A cohort of 400 with 10% truly at risk',
            steps: [
              String.raw`\(s = 0.8\), \(sp = 0.85\), \(b = 0.1\).`,
              String.raw`True alerts: \(0.8 \times 0.1 = 0.08\), i.e. 32 learners.`,
              String.raw`False alerts: \(0.15 \times 0.9 = 0.135\), i.e. 54 learners.`,
              String.raw`Precision \(= 0.08/(0.08 + 0.135) \approx 0.37\).`,
            ],
            why: [
              'collect the model’s accuracy and the base rate',
              'at-risk learners caught by the model',
              'fine learners wrongly flagged',
              'share of all alerts that are real',
            ],
            answer: 'Only about 37% of the 86 flagged learners are really at risk. Responses must therefore be supportive and low-stakes (a message, an offer of help), never punitive.',
          },
        },
      ],
    },
    {
      id: 'ethics',
      title: 'Ethics and cautionary tales',
      blocks: [
        { t: 'callout', tone: 'warn', title: 'Course Signals', text: 'Purdue University’s Course Signals (traffic-light alerts) was reported in 2012 to raise retention. Critics later showed much of the effect could be explained by the fact that students who took more courses were exposed to more Signals and also more likely to stay anyway: a confound, not proof. Treat vendor claims about analytics with care.' },
        { t: 'checklist', items: [
          'Tell learners what is collected, why, and who sees it',
          'Use data to offer help, not to punish or sort',
          'Check models for bias across groups',
          'Combine data with teacher knowledge of the learner',
          'Keep only what you need, for as long as you need it (data minimisation; Singapore’s PDPA principles)',
        ] },
      ],
    },
  ],
  sources: [
    'Siemens, G., & Long, P. (2011). Penetrating the fog: Analytics in learning and education. EDUCAUSE Review, 46(5).',
    'Reich, J., & Ruipérez-Valiente, J. A. (2019). The MOOC pivot. Science, 363(6423), 130–131.',
    'Arnold, K. E., & Pistilli, M. D. (2012). Course Signals at Purdue. LAK ’12.',
    'Slade, S., & Prinsloo, P. (2013). Learning analytics: Ethical issues and dilemmas. American Behavioral Scientist, 57(10), 1510–1529.',
  ],
  related: ['ai/algorithms/logistic-regression', 'e-pedagogy/examples/what-failed', 'agentic-ai/maths/evaluating-agents'],
}

export default guide
