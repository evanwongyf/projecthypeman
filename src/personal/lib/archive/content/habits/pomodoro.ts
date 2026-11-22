import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'The Pomodoro technique breaks work into short, focused sprints separated by short breaks. Francesco Cirillo developed it as a student in the late 1980s, using a tomato-shaped kitchen timer ("pomodoro" is Italian for tomato).',
  nutshell: [
    'Pick a task. Set a timer for **25 minutes**. Work only on that task.',
    'When the timer rings, take a **5-minute** break.',
    'After **four** pomodoros, take a longer break of 15–30 minutes.',
    'Adjust the lengths to suit you and the task.',
  ],
  sections: [
    {
      id: 'how',
      title: 'How it works',
      blocks: [
        {
          t: 'cycle',
          items: [
            { name: 'Choose a task', body: 'One specific task: "Solve questions 1–10", not "maths".' },
            { name: 'Focus for 25 minutes', body: 'No phone, no switching. If a distraction pops up, jot it down and return to the task.' },
            { name: 'Short break: 5 minutes', body: 'Stand up, stretch, get water, look out of a window. Avoid your phone if you can; it is hard to stop at five minutes.' },
            { name: 'Repeat', body: 'After four rounds, take a longer break.' },
          ],
          caption: 'Four pomodoros make about two hours of real, focused work.',
        },
      ],
    },
    {
      id: 'why',
      title: 'Why it helps',
      blocks: [
        {
          t: 'list',
          items: [
            '**Starting is easier**: 25 minutes feels manageable, which helps with [procrastination](@habits/procrastination).',
            '**Breaks are built in**, so you rest before you are exhausted.',
            '**It makes time visible**, which helps with estimating how long tasks take.',
            '**It protects focus**: the rule is one task per pomodoro.',
          ],
        },
        {
          t: 'p',
          text: 'There is not much research on the Pomodoro technique itself, but studies suggest that taking regular, planned breaks can help people stay motivated and less tired than working until they feel like stopping (Biwer et al., 2023).',
        },
      ],
    },
    {
      id: 'adapt',
      title: 'Adapting it',
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'Try'],
          rows: [
            ['Getting started is very hard', '10 or 15-minute sprints'],
            ['Deep work like writing or problem sets', '45–50 minutes with 10-minute breaks'],
            ['You were in flow when the timer rang', 'Finish your thought, then break; do not skip breaks every time'],
            ['Group study', 'Everyone works silently for a pomodoro, then chats in the break'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Studytubby’s study log has a timer. Log each focused block to see how much real study time you are doing each week.',
        },
      ],
    },
  ],
  sources: [
    'Cirillo, F. (2018). *The Pomodoro technique*. Currency.',
    'Biwer, F., Wiradhany, W., oude Egbrink, M. G. A., & de Bruin, A. B. H. (2023). Understanding effort regulation: Comparing "Pomodoro" breaks and self-regulated breaks. *British Journal of Educational Psychology, 93*(S2), 353–367.',
  ],
  related: ['habits/focus', 'habits/procrastination', 'habits/time'],
}

export default guide
