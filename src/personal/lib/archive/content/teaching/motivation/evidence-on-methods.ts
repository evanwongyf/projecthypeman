import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Claims about motivation arrive with confident numbers attached. This guide collects the effect sizes from the main meta-analyses in one forest plot, shows how an effect size is calculated and what its confidence interval means, and explains why a "small" effect in education can still be worth having. The goal is to read research claims the way a researcher would.',
  nutshell: [
    'An **effect size** puts every study on one scale: the standardised difference between groups (Cohen’s d or Hedges’ g), or a correlation r.',
    'Verified meta-analytic figures: **autonomy-support training d = 0.63**, **specific hard goals d about 0.42 to 0.80**, **feedback d = 0.41 (but over a third of feedback made things worse)**, **gamification g = 0.25 to 0.49**, **contingent tangible rewards d = −0.28 to −0.40** on intrinsic interest.',
    'Growth-mindset interventions have a **small average effect** (reported around d = 0.08), larger for some at-risk groups.',
    'A **confidence interval** is the plausible range for the true effect: a wide one that nearly includes zero means "uncertain", not "zero".',
    'In education, **0.05 to 0.20** can be a meaningful effect (Kraft, 2020), and the old "0.40 is the hinge point" benchmark overstates what most interventions achieve.',
  ],
  sections: [
    {
      id: 'forest',
      title: 'The effect sizes, side by side',
      lead: 'One chart, with the caveats attached.',
      blocks: [
        { t: 'p', text: 'The chart gathers headline effect sizes from the meta-analyses discussed on this shelf. They are **not directly comparable** (different outcomes, different populations, different designs), and so the chart is best read as a map of the evidence, not a league table. Where a confidence interval was published, it is drawn as a whisker; where only a range or a point estimate is known, it is not.' },
        {
          t: 'bars',
          title: 'Meta-analytic effect sizes on motivation and related outcomes',
          items: [
            { label: 'Autonomy-support training', value: 0.63, note: 'Su and Reeve 2011, 19 studies', group: 'Support and goals' },
            { label: 'Specific hard goals vs "do your best"', value: 0.61, lo: 0.42, hi: 0.8, note: 'Locke and Latham 2002 (range of effects)' },
            { label: 'Feedback interventions', value: 0.41, note: 'Kluger and DeNisi 1996; over a third lowered performance' },
            { label: 'Gamification: cognitive learning', value: 0.49, lo: 0.3, hi: 0.69, note: 'Sailer and Homner 2020', group: 'Gamification (95% CI)' },
            { label: 'Gamification: motivational', value: 0.36, lo: 0.18, hi: 0.54 },
            { label: 'Gamification: behavioural', value: 0.25, lo: 0.04, hi: 0.46 },
            { label: 'Positive verbal feedback on interest', value: 0.33, note: 'Deci, Koestner and Ryan 1999', group: 'Rewards and intrinsic interest' },
            { label: 'Performance-contingent reward', value: -0.28 },
            { label: 'Completion-contingent reward', value: -0.36 },
            { label: 'Engagement-contingent reward', value: -0.4 },
            { label: 'Mindset interventions on achievement', value: 0.08, note: 'Sisk et al. 2018, about; reported as weak', group: 'Mindset' },
          ],
          zero: true,
          min: -0.6,
          max: 1,
          refs: [{ at: 0.2, label: '0.2' }, { at: 0.5, label: '0.5' }, { at: 0.8, label: '0.8' }],
          decimals: 2,
          caption: 'Effect sizes are standardised mean differences (d or Hedges’ g). The mindset figure is approximate: check Sisk et al. (2018, Psychological Science, 29(4)) for exact values and confidence intervals. Locke and Latham’s range is across analyses, not a confidence interval.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'What this chart cannot tell you',
          text: 'A big effect on a **motivation questionnaire** is not a big effect on **test scores**; an effect found in a lab with undergraduates may not hold in a Year 9 classroom; a treatment in a published study is delivered by researchers, not an average teacher on an average Tuesday. Treat each bar as "this is what researchers found under these conditions".',
        },
      ],
    },
    {
      id: 'calc',
      title: 'How an effect size is calculated',
      lead: 'From two groups to one number.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`d = \frac{\bar{x}_1-\bar{x}_2}{s_p}, \qquad s_p = \sqrt{\frac{(n_1-1)s_1^{2}+(n_2-1)s_2^{2}}{n_1+n_2-2}}`,
          caption: 'Cohen’s d and the pooled standard deviation.',
          where: [
            { sym: '\\bar{x}_1,\\ \\bar{x}_2', def: 'the two group means' },
            { sym: 's_1,\\ s_2', def: 'the two group standard deviations' },
            { sym: 'n_1,\\ n_2', def: 'the two group sizes' },
          ],
          syntax: [
            { sym: 's_p', say: '"s-pooled": a single standard deviation that stands for both groups. Effect: it is dominated by the larger group. Why: it needs a common yardstick, so we average the two variances, weighting each by its degrees of freedom.' },
            { sym: '(n-1)s^2', say: 'the group’s sum of squared deviations from its mean. Effect: bigger, more variable groups contribute more. Why: the variance is that sum divided by \\(n-1\\), so multiplying back gives the sum.' },
            { sym: 'n_1+n_2-2', say: 'the total degrees of freedom. Effect: dividing by it gives the average variance per degree of freedom. Why: we lose one degree of freedom for each of the two means we estimated.' },
            { sym: 'd', say: 'the mean difference in standard-deviation units. Effect: it does not depend on the units of the test, so a result on a 20-point quiz can be compared with one on a 100-point exam.' },
          ],
          worked: {
            title: 'A goal-setting experiment',
            steps: [
              'Group 1 (specific hard goals): \\(n_1 = 40\\), mean 74, \\(s_1 = 10\\). Group 2 (do your best): \\(n_2 = 40\\), mean 68, \\(s_2 = 12\\).',
              '\\(s_p = \\sqrt{(39 \\times 100 + 39 \\times 144)/78} = \\sqrt{122} = 11.05\\).',
              '\\(d = (74 - 68)/11.05 = 0.54\\).',
            ],
            answer: 'd = 0.54: a medium effect. The goal group’s average is about half a standard deviation above the control group’s.',
          },
        },
        {
          t: 'math',
          tex: String.raw`\mathrm{SE}_d \approx \sqrt{\frac{n_1+n_2}{n_1 n_2}+\frac{d^{2}}{2(n_1+n_2)}}, \qquad \text{95\% CI} \approx d \pm 1.96\,\mathrm{SE}_d`,
          caption: 'The standard error of d and an approximate 95% confidence interval.',
          where: [{ sym: '\\mathrm{SE}_d', def: 'the standard error of the effect size: how much d would typically vary from sample to sample' }],
          syntax: [
            { sym: '\\dfrac{n_1+n_2}{n_1 n_2}', say: 'the main term: it shrinks as the groups get bigger. Effect: doubling both groups cuts the standard error by about 30% (a factor of √2). Why: averages of more people vary less.' },
            { sym: '\\dfrac{d^{2}}{2(n_1+n_2)}', say: 'a smaller term that grows with the effect size, because d itself is estimated with error. Effect: very large effects are slightly less precise.' },
            { sym: '\\pm\\,1.96\\,\\mathrm{SE}_d', say: 'a range of plus or minus 1.96 standard errors. Effect: if the experiment were repeated many times, about 95% of such intervals would contain the true effect. Why: 1.96 is the point of the normal distribution that leaves 2.5% in each tail.' },
          ],
          worked: {
            title: 'The same experiment',
            steps: ['\\(\\mathrm{SE}_d = \\sqrt{80/1600 + 0.54^2/160} = \\sqrt{0.05 + 0.0018} = 0.228\\).', 'The interval is \\(0.54 \\pm 1.96 \\times 0.228 = 0.54 \\pm 0.45\\), or 0.09 to 0.99.'],
            answer: 'With 40 per group, the plausible range for the true effect runs from almost nothing to very large. A single small study cannot tell a "medium" effect from a "tiny" one, which is why meta-analyses pool many studies.',
          },
        },
        { t: 'teach-viz', viz: 'effect-size' },
        {
          t: 'table',
          head: ['Effect size d', 'Equivalent r', 'The average treated learner beats', 'Chance a random treated learner beats a random control'],
          rows: [
            ['0.2', '0.10', '58% of controls', '56%'],
            ['0.5', '0.24', '69% of controls', '64%'],
            ['0.8', '0.37', '79% of controls', '71%'],
            ['1.0', '0.45', '84% of controls', '76%'],
          ],
          caption: 'Conversions assume two normal distributions with equal spread: \\(r = d/\\sqrt{d^2+4}\\), percentile = \\(\\Phi(d)\\), chance of superiority = \\(\\Phi(d/\\sqrt{2})\\).',
        },
      ],
    },
    {
      id: 'meaning',
      title: 'What counts as a big effect?',
      lead: 'Benchmarks, and the trouble with them.',
      blocks: [
        { t: 'p', text: 'Jacob Cohen suggested 0.2, 0.5 and 0.8 as small, medium and large effects, and said himself they were conventions to use when nothing better was available. John Hattie’s synthesis of education research popularised **0.40** as a "hinge point" above which an influence is worth having. Matthew Kraft (2020) argued that these benchmarks do not fit education: with large, well-designed studies of real interventions, effects on standardised achievement tests are usually small, and he proposed **below 0.05 as small, 0.05 to 0.20 as medium and 0.20 or more as large**. A short, cheap intervention with an effect of 0.10 on a large achievement test can be a good deal.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Why effects differ by design', tag: 'measurement', body: 'Researcher-made tests aligned with what was taught show bigger effects than independent standardised tests. Short interventions look better than long ones. Small studies look better than large ones.' },
            { title: 'Publication bias', tag: 'selection', body: 'Studies with striking results are more likely to be published and found. If the missing studies are the small, null ones, the pooled effect is too big. Meta-analysts check for this with funnel plots and trim-and-fill methods.' },
            { title: 'Heterogeneity', tag: 'consistency', body: 'If effects vary a lot between studies (high I²), a single average hides the story: the treatment may work well for some learners or in some contexts and not at all in others, as with mindset interventions.' },
            { title: 'Cost and scale', tag: 'practicality', body: 'An effect of 0.10 for ten minutes of teacher time is a bargain; an effect of 0.40 requiring a year of training may not be. Effect size per unit of cost is what a school needs.' },
          ],
        },
      ],
    },
    {
      id: 'verdict',
      title: 'A fair reading of the evidence',
      blocks: [
        {
          t: 'table',
          head: ['Method', 'What the research supports', 'Confidence', 'Main caution'],
          rows: [
            ['Autonomy-supportive teaching', 'Medium-to-large effect of training on motivation and engagement outcomes', 'Moderate', 'Modest number of studies; outcomes mostly motivational'],
            ['Specific, challenging goals with feedback', 'Large body of evidence, mostly from work settings', 'Strong in general; weaker for complex learning', 'Can narrow attention; performance goals can hurt on new, complex tasks'],
            ['Informational feedback', 'Positive on average', 'Strong that effects vary', 'Over a third of feedback interventions made performance worse (feedback on the self and not the task)'],
            ['Gamification', 'Small-to-medium gains in learning, smaller for motivation and behaviour', 'Moderate for cognitive; weak for the others', 'Motivational and behavioural effects were less stable in high-rigour studies'],
            ['Contingent tangible rewards', 'Reduce free-choice interest in interesting tasks', 'Moderate, debated', 'Little effect for unexpected or verbal rewards; can raise quantity on routine tasks'],
            ['Growth-mindset interventions', 'Small average effect; larger for some at-risk groups', 'Moderate for small average effects', 'Hype outran the data; context and teacher support matter'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Three questions to ask of any claim', text: '**How big?** (an effect size, with an interval.) **On what?** (the outcome actually measured.) **For whom, and delivered by whom?** (the population and the conditions.) A claim that cannot answer all three is a slogan.' },
      ],
    },
  ],
  sources: [
    'Su, Y.-L., & Reeve, J. (2011). A meta-analysis of the effectiveness of intervention programs designed to support autonomy. *Educational Psychology Review*, 23(1), 159–188.',
    'Locke, E. A., & Latham, G. P. (2002). Building a practically useful theory of goal setting and task motivation. *American Psychologist*, 57(9), 705–717.',
    'Kluger, A. N., & DeNisi, A. (1996). The effects of feedback interventions on performance: A historical review, a meta-analysis, and a preliminary feedback intervention theory. *Psychological Bulletin*, 119(2), 254–284.',
    'Sailer, M., & Homner, L. (2020). The gamification of learning: A meta-analysis. *Educational Psychology Review*, 32, 77–112.',
    'Deci, E. L., Koestner, R., & Ryan, R. M. (1999). A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation. *Psychological Bulletin*, 125(6), 627–668.',
    'Sisk, V. F., Burgoyne, A. P., Sun, J., Butler, J. L., & Macnamara, B. N. (2018). To what extent and under which circumstances are growth mind-sets important to academic achievement? *Psychological Science*, 29(4), 549–571.',
    'Kraft, M. A. (2020). Interpreting effect sizes of education interventions. *Educational Researcher*, 49(4), 241–253.',
    'Hattie, J. (2009). *Visible Learning: A Synthesis of Over 800 Meta-Analyses Relating to Achievement*. Routledge.',
  ],
  related: ['teaching/motivation/rewards-and-overjustification', 'teaching/motivation/motivation-frameworks', 'teaching/assessment/feedback', 'teaching/theories/myths'],
}

export default guide
