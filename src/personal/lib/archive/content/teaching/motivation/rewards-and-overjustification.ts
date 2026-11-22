import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Rewards are the oldest tool in a teacher’s box, and the research on them is more interesting than "rewards bad" or "rewards good". A reward can raise effort on a dull task and at the same time lower interest in an enjoyable one. This guide walks through the classic experiment, the large meta-analysis of 128 studies, the workplace evidence, and a practical way to decide when to use rewards, with the numbers charted.',
  nutshell: [
    'In the classic **overjustification** study (Lepper, Greene and Nisbett, 1973), children promised a reward for drawing later drew less in free play than children who were not promised one, as the figures are commonly reported.',
    'A meta-analysis of **128 experiments** (Deci, Koestner and Ryan, 1999) found that engagement-, completion- and performance-contingent rewards **reduced** free-choice interest (d from −0.28 to −0.40), while positive verbal feedback **raised** it (d = +0.33).',
    'What matters is how the reward is **experienced**: as controlling (a bribe, a leash) or informational (a sign of competence).',
    'In work settings (Cerasoli et al., 2014), intrinsic motivation predicts the **quality** of performance and incentives predict **quantity**; the two are best considered together.',
    'Rules of thumb: avoid contingent rewards for tasks learners already enjoy; use informational feedback; give unexpected recognition; accept that rewards can get dull tasks started.',
  ],
  sections: [
    {
      id: 'study',
      title: 'The classic experiment',
      lead: 'Lepper, Greene and Nisbett (1973).',
      blocks: [
        { t: 'p', text: 'Preschool children who spent a lot of their free time drawing were chosen for the study. They were assigned to one of three conditions. In the **expected-award** group, children were shown a "Good Player Award" certificate and told they could earn it by drawing. In the **unexpected-award** group, children drew without any mention of a reward but received the certificate afterwards. In the **no-award** group, children drew and received nothing. Two weeks later, observers watched through a one-way mirror to see how much of their free play time the children chose to spend drawing.' },
        {
          t: 'bars',
          title: 'Share of free-play time spent drawing, two weeks later',
          items: [
            { label: 'No award', value: 16.7 },
            { label: 'Unexpected award', value: 18.1 },
            { label: 'Expected award', value: 8.6, color: '#d9534f' },
          ],
          unit: '%',
          decimals: 1,
          min: 0,
          max: 22,
          caption: 'Figures as commonly reported for this study (51 children). Check the original paper (Journal of Personality and Social Psychology, 28, 129–137) before quoting them. The pattern is what matters: only the group who expected a reward for an activity they already enjoyed lost interest in it.',
        },
        { t: 'p', text: 'The unexpected-award group is the key control. They got exactly the same certificate, but because it did not turn drawing into a means to an end, their interest was unchanged. The same reward harmed interest only when it was **contingent and expected**. The authors explained this with self-perception theory: if a child sees themselves drawing for a prize, they infer "I draw for prizes", and discount their own enjoyment as a reason. They called this the **overjustification** effect, because the extrinsic reason is more than enough to justify the behaviour.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Self-perception account', tag: 'Bem, 1972', body: 'People infer their own motives from their behaviour and the circumstances, as an outsider would. When there is an obvious external reason, the internal reason gets discounted.' },
            { title: 'Cognitive evaluation theory', tag: 'Deci and Ryan, 1980', body: 'A reward carries two messages: a **controlling** one ("you are doing this to get a reward") and an **informational** one ("you are good at this"). It lowers intrinsic motivation when the controlling aspect dominates, and raises it when the informational aspect does. This is a need-based account: control thwarts autonomy.' },
          ],
        },
      ],
    },
    {
      id: 'meta',
      title: 'The meta-analysis: 128 experiments',
      lead: 'What happens when you pool them all.',
      blocks: [
        { t: 'p', text: 'Edward Deci, Richard Koestner and Richard Ryan (1999) combined 128 experiments on the effect of extrinsic rewards on intrinsic motivation, measured mainly by free-choice behaviour and self-reported interest. Their headline findings, charted below as Cohen’s d (negative means the reward reduced interest):' },
        {
          t: 'bars',
          title: 'Effects of rewards on free-choice intrinsic motivation (Deci, Koestner and Ryan, 1999)',
          items: [
            { label: 'Engagement-contingent reward', value: -0.4, note: 'paid for doing the task', group: 'Tangible, contingent rewards' },
            { label: 'Completion-contingent reward', value: -0.36, note: 'paid for finishing it' },
            { label: 'Performance-contingent reward', value: -0.28, note: 'paid for doing well' },
            { label: 'Positive feedback (verbal)', value: 0.33, note: 'informational praise', group: 'Verbal' },
          ],
          zero: true,
          min: -0.6,
          max: 0.6,
          refs: [{ at: -0.2, label: '−0.2' }, { at: 0.2, label: '+0.2' }],
          caption: 'Effect sizes as reported in the abstract of the meta-analysis. In the paper, expected tangible rewards undermined intrinsic motivation, and tangible rewards were more detrimental for children than for college students. Positive feedback raised self-reported interest as well (d = +0.31).',
        },
        { t: 'teach-viz', viz: 'effect-size' },
        {
          t: 'math',
          tex: String.raw`d = \frac{\bar{x}_{\text{reward}}-\bar{x}_{\text{control}}}{s_{\text{pooled}}}`,
          caption: 'Cohen’s d: the difference between the group means in units of the pooled standard deviation.',
          where: [
            { sym: '\\bar{x}', def: 'the mean outcome in a group (here, minutes of free-choice time on the task)' },
            { sym: 's_{\\text{pooled}}', def: 'the standard deviation of the outcome, pooled across the two groups' },
          ],
          syntax: [
            { sym: 'd', say: '"d": the standardised mean difference. Effect: positive means the reward group scored higher, negative lower. A value of −0.4 means the average rewarded participant scored 0.4 standard deviations below the average control participant. Why: dividing by the spread makes studies with different units comparable.' },
            { sym: '\\bar{x}_{\\text{reward}}-\\bar{x}_{\\text{control}}', say: 'the raw difference between groups. Effect: the bigger the gap, the bigger d. Why: this is the thing the experiment manipulated.' },
            { sym: 's_{\\text{pooled}}', say: 'the typical spread of individuals within a group. Effect: more variation among people shrinks d for the same raw gap, because the groups overlap more. Why: a difference of 2 minutes means little when people vary by 10 minutes and a lot when they vary by 1.' },
          ],
          worked: {
            title: 'A reward reduces free-choice time',
            steps: ['Control group spends on average 10.0 minutes on the task; the reward group 7.6 minutes.', 'The pooled standard deviation is 6.0 minutes.', '\\(d = (7.6 - 10.0)/6.0 = -0.40\\).'],
            answer: 'd = −0.40: the average rewarded participant is at about the 34th percentile of the control group, which is a small-to-medium reduction. The slider above shows what that looks like.',
          },
        },
        { t: 'callout', tone: 'warn', title: 'The effects are real but debated', text: 'Not everyone agrees on the size or generality. Cameron and Pierce (1994) and later work argued that negative effects are limited to particular conditions, such as expected, tangible, engagement- or completion-contingent rewards for already-interesting tasks. Deci and colleagues replied that those conditions are exactly what schools and workplaces commonly use. The honest summary is that the effect is robust in those conditions, modest in size, and much weaker or absent when rewards are unexpected, verbal and informational.' },
      ],
    },
    {
      id: 'work',
      title: 'Rewards at work: quality and quantity',
      lead: 'Cerasoli, Nicklin and Ford (2014).',
      blocks: [
        { t: 'p', text: 'A later meta-analysis looked at the problem from the other end: how well do intrinsic motivation and incentives predict actual performance? It pooled 183 effects (212,468 participants) from school, work and sport. Intrinsic motivation was a medium-to-strong predictor of performance, with correlations in the range 0.21 to 0.45 depending on the setting. Three patterns stood out.' },
        {
          t: 'list',
          items: [
            '**Quality versus quantity.** Intrinsic motivation explained more of the variation in the **quality** of performance (careful, creative work); incentives explained more of the **quantity** (how much gets done).',
            '**Directness matters.** When incentives were directly tied to performance, intrinsic motivation mattered less; when incentives were indirect, intrinsic motivation mattered more.',
            '**Both together.** The authors concluded that intrinsic motivation and incentives are not necessarily antagonistic and are best considered at the same time.',
          ],
        },
        { t: 'p', text: 'For teachers this reads as: if the goal is **volume** on a routine task (spelling lists, practice sums), incentives can help; if the goal is **depth**, such as understanding, creative writing or problem-solving, building interest and autonomy matters more, and heavy contingent rewards risk crowding it out.' },
      ],
    },
    {
      id: 'practice',
      title: 'Using rewards well',
      lead: 'A practical decision guide.',
      blocks: [
        {
          t: 'flow',
          title: 'Should I use a reward?',
          nodes: [
            { label: 'Is the task already interesting to the learner?', tone: 'human', sub: 'If yes, avoid expected, contingent rewards' },
            { label: 'If dull but necessary: is the reason clear?', tone: 'process', sub: 'Give the rationale and acknowledge the boredom' },
            { label: 'Choose the form', tone: 'model', sub: 'Informational feedback and unexpected recognition over bribes' },
            { label: 'Keep it small and fade it', tone: 'process', sub: 'Aim for the value of the task to take over' },
            { label: 'Watch for effects', tone: 'output', sub: 'Does effort continue when the reward stops?' },
          ],
          caption: 'A rule of thumb from the research, not a law: contexts and learners differ.',
        },
        {
          t: 'dodont',
          do: [
            'Give **informational praise** tied to specifics: "Your counter-example showed exactly why the rule fails."',
            'Use **unexpected** recognition after the fact; it keeps the task from becoming a means to an end.',
            'Offer rewards for **dull, necessary** tasks, while explaining why they matter and fading the reward.',
            'Reward **mastery** of a standard (a skill achieved) rather than mere **participation** or competition against peers.',
            'Check what the reward **means** to the learner: is it a mark of competence or a leash?',
          ],
          dont: [
            'Promise rewards in advance for activities learners already enjoy (reading for pleasure, drawing, free coding).',
            'Make rewards **controlling**: "If you are good, you will get…".',
            'Rely on **social comparison** (leaderboards for everything) which can thwart competence for the many who are not on top.',
            'Escalate rewards: it teaches learners to expect more each time.',
            'Use the withdrawal of a reward as punishment for a motivated learner.',
          ],
        },
        {
          t: 'table',
          head: ['Situation', 'Likely effect of a promised reward', 'Better move'],
          rows: [
            ['Child already loves reading', 'Reading may become a chore done for the sticker', 'Praise the thinking, offer book choice, skip the chart'],
            ['Tedious fact practice', 'Short-term effort rises; little intrinsic interest to lose', 'Use a light incentive, a clear rationale and visible progress'],
            ['A creative task', 'Reward for "doing it" tends to narrow and lower the quality of the work', 'Give autonomy and informational feedback'],
            ['A learner who is amotivated', 'A reward may get them started', 'Pair with small successes so competence takes over'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'A well-known real-world case', text: 'In a field study of ten Israeli day-care centres (Gneezy and Rustichini, 2000), introducing a small fine for parents who collected their children late was followed by **more** lateness, not less, and the lateness did not fall when the fine was removed. The usual reading is that the fine turned a social obligation into a price. It is a reminder that incentives change the meaning of a situation as well as the cost.' },
      ],
    },
  ],
  sources: [
    'Lepper, M. R., Greene, D., & Nisbett, R. E. (1973). Undermining children’s intrinsic interest with extrinsic reward: A test of the "overjustification" hypothesis. *Journal of Personality and Social Psychology*, 28(1), 129–137.',
    'Deci, E. L., Koestner, R., & Ryan, R. M. (1999). A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation. *Psychological Bulletin*, 125(6), 627–668.',
    'Cameron, J., & Pierce, W. D. (1994). Reinforcement, reward, and intrinsic motivation: A meta-analysis. *Review of Educational Research*, 64(3), 363–423.',
    'Cerasoli, C. P., Nicklin, J. M., & Ford, M. T. (2014). Intrinsic motivation and extrinsic incentives jointly predict performance: A 40-year meta-analysis. *Psychological Bulletin*, 140(4), 980–1008.',
    'Gneezy, U., & Rustichini, A. (2000). A fine is a price. *The Journal of Legal Studies*, 29(1), 1–17.',
  ],
  related: ['teaching/motivation/intrinsic-motivation', 'teaching/motivation/evidence-on-methods', 'teaching/theories/behaviourism', 'teaching/assessment/feedback', 'teaching/equity/motivation-equity'],
}

export default guide
