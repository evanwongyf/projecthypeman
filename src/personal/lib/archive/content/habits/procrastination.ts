import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Almost everyone procrastinates sometimes. It is rarely laziness or bad time management. More often it is a way of avoiding an unpleasant feeling: boredom, confusion, fear of doing badly. Understanding that helps you choose fixes that actually work.',
  nutshell: [
    'Procrastination is often **mood repair**: putting off a task to escape how it makes you feel.',
    'We procrastinate more when a task feels **unpleasant**, the reward is **far away**, and we are **easily distracted**.',
    'Shrink the start: a tiny, specific first step.',
    'Make distractions harder and starting easier.',
    'Forgive yourself for past procrastination; guilt makes the next round worse.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why we do it',
      blocks: [
        {
          t: 'p',
          text: 'Piers Steel’s large review (2007) found procrastination is strongest when tasks are aversive, rewards are delayed, and people are impulsive. Fuschia Sirois and Timothy Pychyl describe it as a problem of **emotion regulation**: we trade long-term goals for short-term relief from bad feelings.',
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'The task feels bad', body: 'Boring, confusing, too big, or threatening ("what if I’m not good enough?").' },
            { title: 'The reward is far away', body: 'The exam is in six weeks; the video is right now.' },
            { title: 'Distraction is close', body: 'A phone within reach makes escape effortless.' },
          ],
        },
      ],
    },
    {
      id: 'fixes',
      title: 'Fixes that work',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Name the feeling', body: 'What exactly feels bad about this task? Confused? Bored? Afraid? Different feelings need different fixes: confusion needs help, boredom needs structure, fear needs a lower-stakes start.' },
            { title: 'Shrink the first step', body: 'Not "write the essay" but "open the document and write three bad sentences". Starting is the hardest part, and once started, people tend to continue.' },
            { title: 'Use a timer', body: '"I’ll work for just 10 minutes." Often you keep going. See [Pomodoro](@habits/pomodoro).' },
            { title: 'Plan when and where', body: '"At 4pm, at the kitchen table, I will do 10 maths questions." See [implementation intentions](@habits/goals).' },
            { title: 'Remove temptation', body: 'Phone in another room, website blockers on, notifications off. Make distraction effortful.' },
            { title: 'Bring the reward closer', body: 'Pair the task with something pleasant (music, a nice drink), or promise yourself a small reward on finishing.' },
            { title: 'Forgive yourself', body: 'In one study, students who forgave themselves for procrastinating before the first exam procrastinated less before the next (Wohl, Pychyl & Bennett, 2010).' },
          ],
        },
      ],
    },
    {
      id: 'traps',
      title: 'Traps',
      blocks: [
        {
          t: 'dodont',
          do: ['Break big tasks into small, concrete steps.', 'Start before you feel ready.', 'Ask for help when confusion is the problem.'],
          dont: [
            'Wait to "feel motivated"; motivation often follows action.',
            'Do "productive procrastination": tidying your desk or colour-coding notes instead of the real task.',
            'Beat yourself up; shame feeds avoidance.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Steel, P. (2007). The nature of procrastination: A meta-analytic and theoretical review of quintessential self-regulatory failure. *Psychological Bulletin, 133*(1), 65–94.',
    'Sirois, F., & Pychyl, T. (2013). Procrastination and the priority of short-term mood regulation. *Social and Personality Psychology Compass, 7*(2), 115–127.',
    'Wohl, M. J. A., Pychyl, T. A., & Bennett, S. H. (2010). I forgive myself, now I can study: How self-forgiveness for procrastinating can reduce future procrastination. *Personality and Individual Differences, 48*(7), 803–808.',
  ],
  related: ['habits/pomodoro', 'habits/goals', 'habits/focus'],
}

export default guide
