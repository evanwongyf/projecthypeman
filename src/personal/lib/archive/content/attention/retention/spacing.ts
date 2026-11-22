import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The spacing effect is one of the oldest and most reliable findings in psychology: the same amount of study, spread over time, produces much better long-term memory than the same study crammed together. It works for vocabulary, facts, concepts, motor skills and in every age group tested.',
  nutshell: [
    'Cepeda et al.’s 2006 review of 317 experiments: spaced practice beat massed practice in the large majority of comparisons.',
    'The **best gap depends on how long you need to remember**: roughly 10–30% of the time until the test for tests a few weeks away, a smaller share for longer horizons (Cepeda et al., 2008).',
    '**Too short** a gap wastes the review; **too long** and you have forgotten and must relearn. Erring long is less costly than erring short.',
    'Expanding intervals (1, 3, 7, 14 days…) are convenient; equal intervals work about as well in many studies. The key is to space at all.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why spacing works',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Retrieval effort', body: 'After a gap, recalling takes effort, and effortful successful retrieval strengthens memory more than easy retrieval.' },
          { title: 'Encoding variability', body: 'Studying at different times links the memory to more contexts and cues.' },
          { title: 'Consolidation', body: 'Sleep between sessions stabilises the memory, so the next session builds on firmer ground.' },
          { title: 'Reduced fatigue and habituation', body: 'The tenth repetition in a row gets little attention; one a week later gets full attention.' },
        ] },
      ],
    },
    {
      id: 'gap',
      title: 'The optimal gap',
      blocks: [
        { t: 'p', text: 'Cepeda and colleagues (2008) taught over 1,300 people obscure facts, reviewed them after a gap of 0 to 105 days, and tested them after a further 7 to 350 days. For each test delay there was a best gap; using it improved final recall dramatically compared with no gap (in some conditions recall roughly doubled), and the best gap as a fraction of the test delay shrank as the delay grew.' },
        {
          t: 'math',
          tex: String.raw`g^* \approx \rho \times RI`,
          caption: 'A rule of thumb: the best gap g* between study sessions is a fraction ρ of the retention interval RI (time from the last session to the test).',
          plain: 'Decide how long you need to remember something (until the exam, or for life). The best spacing between your study sessions is a fraction of that time. For an exam a month away the fraction is roughly a fifth; for knowledge needed a year from now it is smaller, a few weeks.',
          where: [
            { sym: String.raw`g^*`, def: 'the best gap between sessions' },
            { sym: 'RI', def: 'retention interval: how long until you need it' },
            { sym: String.raw`\rho`, def: 'a fraction, roughly 0.1–0.3 for intervals of weeks, smaller for a year' },
          ],
          syntax: [
            { sym: String.raw`g^*`, say: '“g star”: the optimal gap' },
            { sym: String.raw`\rho`, say: '“rho”' },
            { sym: String.raw`\approx`, say: '“is approximately”' },
          ],
          worked: {
            title: 'Two exams',
            steps: [
              String.raw`A test in 30 days, \(\rho \approx 0.2\): \(g^* \approx 0.2 \times 30 = 6\) days.`,
              String.raw`A test in 1 year (365 days), \(\rho \approx 0.08\): \(g^* \approx 0.08 \times 365 \approx 29\) days.`,
              'With several reviews, start with short gaps and lengthen them, keeping the last gap near g*.',
            ],
            why: [
              'a shorter horizon uses a larger fraction',
              'a longer horizon uses a smaller fraction, but a longer absolute gap',
              'expanding schedules approach the long-gap ideal while keeping early reviews successful',
            ],
            answer: 'For a test in a month, review about a week after first learning; for a year, about a month. These are rough guides; any spacing beats cramming.',
          },
        },
      ],
    },
    {
      id: 'schedule',
      title: 'Building a schedule',
      blocks: [
        {
          t: 'math',
          tex: String.raw`d_n = d_1 \cdot m^{\,n-1}`,
          caption: 'An expanding schedule where each gap is m times the previous one.',
          plain: 'Start with a first gap d₁ (say one day) and multiply each new gap by m (say 2.5). The gaps grow quickly, so a handful of reviews covers months. This is the idea behind most spaced-repetition apps.',
          where: [
            { sym: String.raw`d_n`, def: 'the n-th gap (days)' },
            { sym: String.raw`d_1`, def: 'first gap' },
            { sym: 'm', def: 'growth factor' },
          ],
          syntax: [
            { sym: String.raw`m^{n-1}`, say: '“m to the n minus one”' },
          ],
          worked: {
            title: 'First gap 1 day, growth 2.5',
            steps: [
              String.raw`\(d_1 = 1\), \(d_2 = 2.5\), \(d_3 = 6.25\), \(d_4 \approx 15.6\), \(d_5 \approx 39\).`,
              String.raw`Review days (adding gaps): 1, 3.5, 9.75, 25.4, 64.4.`,
              'Round to whole days: 1, 4, 10, 25, 64.',
            ],
            why: [
              'multiply by 2.5 each time',
              'running total gives the calendar day of each review',
              'round for a practical calendar',
            ],
            answer: 'Five reviews take you past two months. If you fail a review, shrink the next gap and build up again.',
          },
        },
        { t: 'learn-lab', viz: 'forgetting-curve' },
      ],
    },
  ],
  sources: [
    'Cepeda, N. J. et al. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. Psychological Bulletin, 132(3), 354–380.',
    'Cepeda, N. J. et al. (2008). Spacing effects in learning: A temporal ridgeline of optimal retention. Psychological Science, 19(11), 1095–1102.',
    'Kang, S. H. K. (2016). Spaced repetition promotes efficient and effective learning. Policy Insights from the Behavioral and Brain Sciences, 3(1), 12–19.',
    'Karpicke, J. D., & Roediger, H. L. (2007). Expanding retrieval practice promotes short-term retention, but equally spaced retrieval enhances long-term retention. JEP: LMC, 33(4), 704–719.',
  ],
  related: ['teaching/techniques/learning-strategies/spaced-practice', 'attention/practice/spaced-repetition-algorithms', 'memory/spaced-repetition'],
}

export default guide
