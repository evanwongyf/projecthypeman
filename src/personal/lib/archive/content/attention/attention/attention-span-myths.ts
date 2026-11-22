import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Few “facts” about learning are repeated as often as the shrinking attention span: shorter than a goldfish’s, ten minutes in a lecture, ruined by smartphones. Most of these claims have weak or no evidence. What the research does show is more useful: attention fluctuates constantly, drops in passive and repetitive tasks, and recovers with change and activity.',
  nutshell: [
    'The **8-second human versus 9-second goldfish** statistic has no traceable scientific source; goldfish can remember for months.',
    'The **10–15 minute lecture rule** traces back to weak evidence (Wilson and Korn, 2007; Bradbury, 2016).',
    '**Vigilance decrement** is real: performance on monotonous monitoring tasks declines within about 15–30 minutes (Mackworth, 1948).',
    '**Mind wandering** is common: about 47% of waking moments in a large phone-sampling study, and it increases over a lecture.',
  ],
  sections: [
    {
      id: 'myths',
      title: 'Myths and facts',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { tag: 'Myth', title: '“Our attention span is 8 seconds, less than a goldfish”', body: 'This came from a 2015 Microsoft Canada marketing report citing a website (Statistic Brain) with no underlying study. Attention span is not a single number; it depends on task, interest and fatigue.' },
          { tag: 'Myth', title: '“Students can only attend for 10–15 minutes”', body: 'Reviews of the sources behind this claim found them mostly anecdotal or based on note-taking patterns, not attention measures (Wilson and Korn, 2007; Bradbury, 2016).' },
          { tag: 'Fact', title: 'Attention lapses throughout, and more as time passes', body: 'Bunce, Flens and Neiles (2010) had students report lapses with clickers: lapses were short (often under a minute), occurred from the start, became more frequent as lectures went on, and dropped after active-learning segments.' },
          { tag: 'Fact', title: 'Vigilance drops on monotonous tasks', body: 'In Mackworth’s clock test, radar-style operators missed more signals after about half an hour. The decline appears in many sustained-attention tasks.' },
          { tag: 'Fact', title: 'Minds wander a lot', body: 'Killingsworth and Gilbert (2010) sampled 2,250 adults by phone: their minds were wandering in 46.9% of samples.' },
          { tag: 'Fact', title: 'Testing reduces wandering', body: 'Short quizzes between lecture segments halved mind-wandering in an online lecture (Szpunar et al., 2013).' },
        ] },
      ],
    },
    {
      id: 'mw',
      title: 'Mind wandering in numbers',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\hat p = \frac{k}{n}, \qquad SE = \sqrt{\frac{\hat p(1-\hat p)}{n}}`,
          caption: 'Estimating how often a class is off-task from thought probes: k “off-task” answers out of n probes.',
          plain: 'Researchers measure mind wandering with thought probes: at random moments they ask “Just now, were you thinking about the lesson?” The share of “no” answers estimates how often minds wander, and the standard error says how precise that estimate is.',
          where: [
            { sym: String.raw`\hat p`, def: 'estimated proportion of moments off-task' },
            { sym: 'k', def: 'number of “off-task” responses' },
            { sym: 'n', def: 'total probe responses' },
            { sym: 'SE', def: 'standard error of the estimate' },
          ],
          syntax: [
            { sym: String.raw`\hat p`, say: '“p hat”' },
          ],
          worked: {
            title: 'A class of 30, probed four times in a lesson',
            steps: [
              String.raw`\(n = 30 \times 4 = 120\) responses; \(k = 42\) were “off-task”.`,
              String.raw`\(\hat p = 42/120 = 0.35\).`,
              String.raw`\(SE = \sqrt{0.35 \times 0.65/120} = \sqrt{0.001896} \approx 0.0435\).`,
              String.raw`Rough 95% range: \(0.35 \pm 2 \times 0.0435 = [0.26,\ 0.44]\).`,
            ],
            why: [
              'count all probe answers and the off-task ones',
              'proportion off-task',
              'the sampling error of a proportion (responses from the same student are not fully independent, so the true error is somewhat larger)',
              'about two standard errors either side',
            ],
            answer: 'Students were off-task in roughly a quarter to nearly half of sampled moments. Probing again after adding retrieval breaks would show whether they helped.',
          },
        },
      ],
    },
    {
      id: 'implications',
      title: 'What to take from this',
      blocks: [
        { t: 'list', items: [
          'There is no fixed timer on attention; plan for fluctuation instead of a 10-minute rule.',
          'Passive, repetitive and low-stakes listening invites wandering; questions and tasks reduce it.',
          'Interest, prior knowledge and sleep change attention more than age or “generation”.',
          'Short, frequent changes of activity and retrieval help everyone.',
        ] },
      ],
    },
  ],
  sources: [
    'Wilson, K., & Korn, J. H. (2007). Attention during lectures: Beyond ten minutes. Teaching of Psychology, 34(2), 85–89.',
    'Bradbury, N. A. (2016). Attention span during lectures: 8 seconds, 10 minutes, or more? Advances in Physiology Education, 40(4), 509–513.',
    'Mackworth, N. H. (1948). The breakdown of vigilance during prolonged visual search. Quarterly Journal of Experimental Psychology, 1, 6–21.',
    'Bunce, D. M., Flens, E. A., & Neiles, K. Y. (2010). How long can students pay attention in class? Journal of Chemical Education, 87(12), 1438–1443.',
    'Killingsworth, M. A., & Gilbert, D. T. (2010). A wandering mind is an unhappy mind. Science, 330(6006), 932.',
    'Szpunar, K. K., Khan, N. Y., & Schacter, D. L. (2013). Interpolated memory tests reduce mind wandering. PNAS, 110(16), 6313–6317.',
  ],
  related: ['attention/attention/sustaining-attention-in-class', 'teaching/theories/myths', 'e-pedagogy/applications/video-and-flipped'],
}

export default guide
