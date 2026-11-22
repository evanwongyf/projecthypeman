import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Your memory runs on your body. Sleep locks in what you learned, exercise supports attention and brain health, and chronic stress and exhaustion get in the way. Looking after these is part of studying, not a break from it.',
  nutshell: [
    '**Sleep** consolidates memories; the night after learning matters.',
    'All-nighters hurt: sleep loss reduces your ability to form new memories the next day.',
    '**Exercise** improves attention and mood, and supports memory over time.',
    'Short-term stress can sharpen focus; long-term stress harms memory and health.',
  ],
  sections: [
    {
      id: 'sleep',
      title: 'Sleep',
      blocks: [
        {
          t: 'p',
          text: 'During sleep, the brain replays and reorganises what you learned during the day, strengthening important memories and linking them with existing knowledge (Diekelmann & Born, 2010). Different stages of sleep seem to support different kinds of memory, so a full night matters.',
        },
        {
          t: 'p',
          text: 'Lack of sleep also hurts learning the next day. In one study, people deprived of a night’s sleep were much worse at forming new memories than those who had slept, with reduced activity in the brain’s memory centre, the hippocampus (Yoo et al., 2007).',
        },
        {
          t: 'dodont',
          do: [
            'Aim for the sleep your age group needs: roughly 8–10 hours for teenagers, 7–9 for adults.',
            'Keep a regular sleep and wake time, even at weekends and during revision.',
            'Study important material in the evening, then sleep on it.',
            'Stop screens and hard studying a little before bed.',
          ],
          dont: [
            'Pull all-nighters before exams; you lose more than you gain.',
            'Drink caffeine late in the day; its effects last for hours.',
            'Study in bed if it keeps you awake afterwards.',
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Naps',
          text: 'A short nap (around 20 minutes) can refresh alertness, and some studies suggest naps after learning can help memory. Long or late naps can disrupt night-time sleep.',
        },
      ],
    },
    {
      id: 'exercise',
      title: 'Exercise',
      blocks: [
        {
          t: 'p',
          text: 'Physical activity improves blood flow and mood, and a single session of moderate exercise can boost attention and executive function for a while afterwards. Regular exercise over months is linked to better memory and brain health (Hillman, Erickson & Kramer, 2008).',
        },
        {
          t: 'list',
          items: [
            'Take a brisk walk between study sessions.',
            'Use active breaks during long study days: stretching, a few minutes of movement.',
            'Keep up sport or regular exercise during exam season; it helps rather than wastes time.',
          ],
        },
      ],
    },
    {
      id: 'stress',
      title: 'Stress',
      blocks: [
        {
          t: 'p',
          text: 'A little pressure can focus the mind. But chronic stress, lasting weeks or months, impairs memory and concentration and harms sleep and health. If stress is constant, it is worth changing your plan and talking to someone. See [handling exam stress](@exams/anxiety) and [rest and wellbeing](@habits/wellbeing).',
        },
      ],
    },
  ],
  sources: [
    'Diekelmann, S., & Born, J. (2010). The memory function of sleep. *Nature Reviews Neuroscience, 11*(2), 114–126.',
    'Yoo, S.-S., Hu, P. T., Gujar, N., Jolesz, F. A., & Walker, M. P. (2007). A deficit in the ability to form new human memories without sleep. *Nature Neuroscience, 10*(3), 385–392.',
    'Hillman, C. H., Erickson, K. I., & Kramer, A. F. (2008). Be smart, exercise your heart: Exercise effects on brain and cognition. *Nature Reviews Neuroscience, 9*(1), 58–65.',
    'Paruthi, S., et al. (2016). Recommended amount of sleep for pediatric populations: A consensus statement of the American Academy of Sleep Medicine. *Journal of Clinical Sleep Medicine, 12*(6), 785–786.',
  ],
  related: ['habits/wellbeing', 'exams/the-day', 'exams/anxiety'],
}

export default guide
