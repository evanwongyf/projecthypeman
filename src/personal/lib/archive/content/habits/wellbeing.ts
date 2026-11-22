import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Studying well is a long game, and you cannot sprint the whole way. Rest, sleep, movement and connection with other people are not rewards for finishing work; they are what make good work possible. Knowing the signs of burnout, and when to ask for help, matters too.',
  nutshell: [
    'Take **regular breaks**: short breaks during study, and full days off each week.',
    '**Sleep** is the foundation for memory, mood and focus.',
    '**Movement** and **time with people** protect mood and reduce stress.',
    'Watch for signs of burnout, and **ask for help** early.',
  ],
  sections: [
    {
      id: 'basics',
      title: 'The basics',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Sleep', body: 'Regular sleep and wake times; enough hours for your age. See [sleep and memory](@memory/sleep-and-body).' },
            { title: 'Breaks', body: 'Short breaks during study refresh attention; a review of studies found that brief "micro-breaks" improved vigour and reduced fatigue (Albulescu et al., 2022).' },
            { title: 'Movement', body: 'Walks, sport, dancing, stretching. Exercise helps mood, stress and focus.' },
            { title: 'Food and water', body: 'Regular meals keep energy steady. Do not skip meals to study more.' },
            { title: 'People', body: 'Friends, family, clubs. Social connection buffers stress, and studying with others can help too.' },
            { title: 'Time off', body: 'At least one evening or day a week without study. It is not wasted time.' },
          ],
        },
      ],
    },
    {
      id: 'burnout',
      title: 'Signs of burnout',
      blocks: [
        {
          t: 'list',
          items: [
            'Feeling exhausted most of the time, even after rest.',
            'Losing interest in things you used to enjoy, including your subject.',
            'Feeling detached, cynical or that nothing you do matters.',
            'Struggling to concentrate, and working longer to get less done.',
            'Changes in sleep, appetite or mood that last weeks.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Rest is not the same as scrolling',
          text: 'Hours on a phone often leave people more tired, not less. Real rest usually involves moving, being outside, being with people, or doing something absorbing that is not work.',
        },
      ],
    },
    {
      id: 'perfectionism',
      title: 'Perfectionism',
      blocks: [
        {
          t: 'p',
          text: 'High standards are good. But perfectionism that means nothing is ever good enough, or that one mistake feels like failure, is linked to stress, procrastination and burnout. Aim for excellent, not perfect: set a time limit, decide what "good enough" looks like for each task, and treat mistakes as information.',
        },
      ],
    },
    {
      id: 'help',
      title: 'Asking for help',
      blocks: [
        {
          t: 'callout',
          tone: 'note',
          text: 'If you are feeling low, anxious or overwhelmed for more than a couple of weeks, or if it is affecting your sleep, eating or daily life, talk to someone you trust: a friend, family member, teacher, tutor, school counsellor or doctor. If you are ever thinking about harming yourself, contact emergency services or a crisis line in your country straight away. Asking for help is a strength, not a failure.',
        },
      ],
    },
  ],
  sources: [
    'Albulescu, P., et al. (2022). "Give me a break!" A systematic review and meta-analysis on the efficacy of micro-breaks for increasing well-being and performance. *PLoS ONE, 17*(8), e0272460.',
    'Maslach, C., & Leiter, M. P. (2016). Understanding the burnout experience: Recent research and its implications for psychiatry. *World Psychiatry, 15*(2), 103–111.',
  ],
  related: ['memory/sleep-and-body', 'exams/anxiety', 'habits/time'],
}

export default guide
