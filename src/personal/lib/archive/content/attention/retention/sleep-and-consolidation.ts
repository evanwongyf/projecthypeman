import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A memory is not finished when you stop studying. Over the following hours and nights it is consolidated: stabilised, linked with other knowledge and partly moved from depending on the hippocampus to depending on the cortex. Sleep plays a central role, which makes sleep part of studying, not a break from it.',
  nutshell: [
    'Sleep **after** learning protects and strengthens memories; during slow-wave sleep the hippocampus “replays” recent experiences.',
    'Sleep loss **before** learning reduces how much gets in: one night without sleep reduced hippocampal encoding activity and memory by around 40% in one study (Yoo et al., 2007).',
    'Trading sleep for extra study tends to backfire the next day (Gillen-O’Neel et al., 2013).',
    'Short **naps** can help consolidation and restore alertness.',
  ],
  sections: [
    {
      id: 'how',
      title: 'What happens during sleep',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Slow-wave sleep', body: 'Deep sleep, early in the night. Hippocampal replay and slow oscillations help move facts and events into long-term storage.' },
          { title: 'Sleep spindles', body: 'Bursts of brain activity in stage 2 sleep; their number correlates with overnight memory gains.' },
          { title: 'REM sleep', body: 'More common late in the night; linked with emotional memory and with integrating and finding patterns in what was learned.' },
          { title: 'Synaptic downscaling', body: 'One theory (Tononi and Cirelli) proposes sleep trims back connections strengthened during the day, restoring capacity to learn tomorrow.' },
        ] },
      ],
    },
    {
      id: 'arithmetic',
      title: 'The arithmetic of an all-nighter',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Effective learning} \approx \text{hours} \times \text{efficiency}`,
          caption: 'A rough way to compare study plans: time spent times how well that time turns into memory.',
          plain: 'Extra hours only help if they are learned well. Sleep-deprived study is less efficient, and losing sleep also weakens consolidation of what you studied earlier. Multiplying hours by an efficiency factor makes the trade-off visible.',
          where: [
            { sym: 'hours', def: 'study hours' },
            { sym: 'efficiency', def: 'how much of each hour turns into lasting memory, relative to well-rested study (1.0)' },
          ],
          syntax: [
            { sym: String.raw`\approx`, say: '“roughly equals”' },
          ],
          worked: {
            title: 'Four hours plus sleep, or seven hours with no sleep',
            steps: [
              'Plan A: study 4 hours rested, then sleep. Efficiency 1.0, and sleep consolidates: 4 × 1.0 = 4 units.',
              'Plan B: study 7 hours through the night. Suppose the last 3 hours run at 0.6 efficiency and no sleep cuts consolidation of everything by about a quarter: (4 × 1.0 + 3 × 0.6) × 0.75 = (4 + 1.8) × 0.75 = 4.35 units.',
              'Plan B also leaves you exhausted for the exam itself, lowering retrieval and reasoning.',
            ],
            why: [
              'rested study with sleep afterwards',
              'illustrative penalties for tired study and missing consolidation, guided by the size of effects in sleep studies',
              'performance on the day also depends on alertness',
            ],
            answer: 'Even with generous assumptions, three extra hours buy almost nothing, and exam-day performance suffers. The illustrative factors are rough, but the research direction is consistent: protect sleep.',
          },
        },
      ],
    },
    {
      id: 'tips',
      title: 'Using sleep to remember',
      blocks: [
        { t: 'checklist', items: [
          'Study important material earlier in the evening, then sleep at a regular time',
          'Review briefly before bed; test yourself the next morning',
          'Keep a regular sleep schedule, especially before exams',
          'Teenagers need about 8–10 hours (US National Sleep Foundation and AASM guidance)',
          'A 10–20 minute nap restores alertness; longer naps with slow-wave sleep help memory but cause grogginess',
          'Avoid screens and caffeine late in the evening',
        ] },
      ],
    },
  ],
  sources: [
    'Diekelmann, S., & Born, J. (2010). The memory function of sleep. Nature Reviews Neuroscience, 11, 114–126.',
    'Yoo, S.-S. et al. (2007). A deficit in the ability to form new human memories without sleep. Nature Neuroscience, 10, 385–392.',
    'Gillen-O’Neel, C., Huynh, V. W., & Fuligni, A. J. (2013). To study or to sleep? Child Development, 84(1), 133–142.',
    'Mednick, S., Nakayama, K., & Stickgold, R. (2003). Sleep-dependent learning: A nap is as good as a night. Nature Neuroscience, 6, 697–698.',
    'Paruthi, S. et al. (2016). Recommended amount of sleep for pediatric populations. Journal of Clinical Sleep Medicine, 12(6), 785–786.',
  ],
  related: ['memory/sleep-and-body', 'e-pedagogy/brain/screens-and-development', 'attention/practice/planning-reviews'],
}

export default guide
