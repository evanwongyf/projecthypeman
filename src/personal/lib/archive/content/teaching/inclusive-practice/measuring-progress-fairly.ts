import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Data about low-attaining and diverse groups is among the most misread data in education. Scores of a few learners swing around by chance; the lowest scorers on one test tend to score higher on the next without any help; tests cannot measure well at the extremes; and a class average from 20 learners is far noisier than it looks. This guide explains regression to the mean, the standard error of measurement, floor and ceiling effects, how to read a confidence interval for a class or a group, and what "months of progress" can and cannot say. It is the statistics that keep catch-up decisions honest.',
  nutshell: [
    '**Regression to the mean:** pick the lowest scorers on one test and, on average, they will score closer to the mean on the next, even with no intervention, because part of any score is luck.',
    'The **standard error of measurement** \\(SEM=s\\sqrt{1-r}\\) gives the spread of a learner’s score around their "true" level. For an IQ-style scale (s = 15, r = 0.90), SEM ≈ 4.7, so 95% of observed scores lie within ±9 points.',
    '**Floor and ceiling effects:** a test that is too hard or too easy cannot detect differences or growth at the extremes.',
    '**Small groups are noisy:** the standard error of a mean is \\(s/\\sqrt{n}\\); a class of 25 or a group of 6 can swing by several points by chance.',
    'To judge whether an intervention worked you need a **comparison**, not just a before-and-after.',
  ],
  sections: [
    {
      id: 'rtm',
      title: 'Regression to the mean',
      lead: 'Why the lowest group improves on its own.',
      blocks: [
        { t: 'p', text: 'Every score is a mix of the learner’s underlying level and chance: a good or bad day, a lucky guess, a misread question, the topics that happened to appear. If you select the lowest scorers, you select those who are both low in underlying level and unlucky on that day. Next time, their luck is average, so the group moves back toward the mean. The size of the effect depends on how **reliable** the test is: the less reliable, the more regression.' },
        {
          t: 'math',
          tex: String.raw`E[X_2\mid X_1=x]=\mu+r\,(x-\mu),\qquad \text{expected gain from regression}=(1-r)(\mu-x)`,
          caption: 'The expected retest score of a learner who scored x on the first test, where r is the test–retest correlation (reliability).',
          where: [{ sym: '\\mu', def: 'the population mean on the test' }, { sym: 'r', def: 'the correlation between the first and second tests (reliability): 1 means identical scores, 0 means unrelated' }, { sym: 'x', def: 'the learner’s first score' }],
          syntax: [
            { sym: 'r\\,(x-\\mu)', say: 'the learner’s distance below the mean, shrunk by r. Effect: if r = 0.8, they are expected to keep 80% of their distance from the mean. Why: the stable part of the score persists, the chance part does not.' },
            { sym: '(1-r)(\\mu-x)', say: 'the expected improvement without any intervention. Effect: larger when r is small and when the learner’s score was far below the mean. Why: the lower the reliability, the more of their low score was luck.' },
          ],
          worked: {
            title: 'A catch-up group chosen by a low score',
            steps: ['The mean is 100, SD 15. The bottom group (selected by a first test) averages 78: 22 points below the mean.', 'Reliability r = 0.80: expected retest mean \\(=100+0.8(78-100)=82.4\\).', 'The group gains **4.4 points** with no intervention at all.', 'If the test is less reliable (r = 0.6): expected retest \\(=100+0.6(-22)=86.8\\), an 8.8-point "gain".'],
            answer: 'A programme that "raised the lowest group by 5 points" may have done nothing. To tell, compare with a similar group that was selected the same way but not given the programme, or use an independent selection test and an independent outcome test.',
          },
        },
        {
          t: 'plot',
          title: 'Expected retest score by first score',
          x: [60, 140],
          y: [60, 140],
          xLabel: 'first test score',
          yLabel: 'expected retest score',
          curves: [
            { f: (x) => x, label: 'no regression (r = 1)', dashed: true },
            { f: (x) => 100 + 0.8 * (x - 100), label: 'r = 0.8' },
            { f: (x) => 100 + 0.5 * (x - 100), label: 'r = 0.5' },
          ],
          caption: 'Lines flatter than the diagonal show regression. At the bottom, expected retest scores sit above the first scores; at the top, below. Nobody did anything.',
        },
      ],
    },
    {
      id: 'sem',
      title: 'How precise is a score?',
      lead: 'The standard error of measurement.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`SEM=s\sqrt{1-r},\qquad \text{95\% interval}\approx x\pm1.96\,SEM,\qquad SE(\bar x)=\frac{s}{\sqrt n}`,
          caption: 'The standard error of measurement of one score, a 95% interval for the learner’s true level, and the standard error of a group mean.',
          where: [{ sym: 's', def: 'the standard deviation of scores on the test' }, { sym: 'r', def: 'the reliability of the test' }, { sym: 'n', def: 'the number of learners in the group' }],
          syntax: [
            { sym: 's\\sqrt{1-r}', say: 'the part of the spread due to noise. Effect: a perfectly reliable test (r = 1) has no error; r = 0.8 gives about 45% of the SD as error. Why: 1−r is the share of variance that is unreliable, and the square root turns variance into spread.' },
            { sym: '\\pm1.96\\,SEM', say: 'a band that contains the true level about 95% of the time. Effect: a learner’s score is a range, not a point. Why: errors are roughly normal, and 1.96 SD covers 95%.' },
            { sym: 's/\\sqrt{n}', say: 'the uncertainty of an average. Effect: quadruple the group to halve the error. Why: independent errors partly cancel, with the cancellation growing as √n.' },
          ],
          worked: {
            title: 'Is a gain of 5 points real?',
            steps: ['A reading test: s = 15, r = 0.90: SEM = 15 × √0.1 = 4.7; a 95% interval on one score is ±9.3.', 'A learner moves from 82 to 87. The difference of two scores has SE = √2 × 4.7 = 6.7; 95% interval ±13.', 'A gain of 5 is well inside the noise: **not detectable for one learner**.', 'For a group of n = 25: the SE of the mean gain is about 6.7/√25 = 1.3; a group gain of 5 is about 3.7 SE: probably real (if there was a comparison).'],
            answer: 'Individual scores are far too noisy to decide whether a particular learner has improved by a few points; groups of 25 can show a gain of 3 to 4 points. Report ranges, and use trends over several measurements.',
          },
        },
        { t: 'teach-viz', viz: 'effect-size' },
      ],
    },
    {
      id: 'floor',
      title: 'Floor and ceiling effects, and small groups',
      lead: 'When the ruler cannot measure.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Floor effect', tag: 'too hard', body: 'If a test is far above a learner’s level, they score near zero whatever they know; the test cannot see their gains. Use below-level or diagnostic tests with easier items so that growth shows.' },
            { title: 'Ceiling effect', tag: 'too easy', body: 'High attainers max out. Growth is invisible and the group looks as if it has stalled. Use above-level or open-ended tasks to stretch.' },
            { title: 'Mixed ability and one test', tag: 'validity', body: 'A single grade-level test gives precise information about the middle and almost none about the extremes. Adaptive tests (which adjust difficulty) measure the extremes more accurately.' },
            { title: 'Small groups', tag: 'noise', body: 'A group of six learners: SE of the mean is s/√6 = 0.41 s. A swing of half an SD in the group average can come purely from chance. Pool over time or across classes before drawing conclusions.' },
          ],
        },
        {
          t: 'table',
          head: ['Claim', 'Better question'],
          rows: [
            ['"Our catch-up group improved by 6 points"', 'Compared with what? Were they selected for low scores (regression)? How reliable is the test? How many learners?'],
            ['"Boys are 3 points behind girls in our school"', 'How large is the standard error with this sample? Is it stable across years?'],
            ['"This learner has made no progress"', 'Is the test sensitive at their level? How wide is the interval? What does the trend over several points show?'],
            ['"Intervention X gave +5 months"', 'Was there a control group? Does the effect size come from this test or another? Is it an average of strong and weak delivery?'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Use data as a prompt, not a verdict', text: 'Numbers are good at telling you where to look, and poor at telling you what is true about one child. Combine data with the learner’s work, what they say and what teachers see, and look at trends over time.' },
      ],
    },
  ],
  sources: [
    'Galton, F. (1886). Regression towards mediocrity in hereditary stature. *Journal of the Anthropological Institute*, 15.',
    'Barnett, A. G., van der Pols, J. C. & Dobson, A. J. (2005). Regression to the mean: what it is and how to deal with it. *International Journal of Epidemiology*, 34(1).',
    'Wiliam, D. (2010). Standardized testing and school accountability. *Educational Psychologist*, 45(2) (on reliability and measurement error).',
    'Coe, R. (2002). It’s the effect size, stupid: what effect size is and why it is important. *BERA Annual Conference*.',
    'Education Endowment Foundation. *Evaluation guidance and the Toolkit: how effect sizes are converted to months of progress*.',
  ],
  related: ['teaching/inclusive-practice/catch-up-evidence', 'teaching/inclusive-practice/send-graduated-approach', 'teaching/assessment/formative-summative', 'teaching/equity/interventions-evidence', 'teaching/guides/growth/research'],
}

export default guide
