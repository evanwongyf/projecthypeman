import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Time management is less about squeezing more in and more about deciding what matters and protecting time for it. A short weekly plan, honest estimates and a way to sort urgent from important will take you a long way.',
  nutshell: [
    'Do a **weekly review**: look at deadlines, commitments and goals, then plan the week.',
    'Sort tasks by **importance and urgency**; protect time for important-but-not-urgent work.',
    '**Time-block**: give tasks a specific slot in your calendar.',
    'Expect things to take longer than you think; build in buffer.',
  ],
  sections: [
    {
      id: 'matrix',
      title: 'Urgent versus important',
      lead: 'The Eisenhower matrix.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Urgent', 'Not urgent'],
          rows: [
            ['Important', '**Do now**: tomorrow’s deadline, exam next week.', '**Schedule**: steady revision, long projects, sleep, exercise. The most valuable box, and the one that gets squeezed.'],
            ['Not important', '**Minimise or delegate**: some messages, interruptions.', '**Drop**: aimless scrolling.'],
          ],
          caption: 'Named after a quote attributed to US President Dwight Eisenhower. The goal: spend more time in the "important, not urgent" box, so fewer things become emergencies.',
        },
      ],
    },
    {
      id: 'weekly',
      title: 'A weekly planning routine',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Collect', body: 'List all deadlines, tests, commitments and tasks for the coming weeks.' },
            { title: 'Look ahead', body: 'What big deadlines are two or three weeks away? What needs to start now?' },
            { title: 'Block fixed time', body: 'Put classes, work, sport and sleep in your calendar first.' },
            { title: 'Block study time', body: 'Give each important task a specific slot: "Tuesday 4–5pm: history essay plan".' },
            { title: 'Add buffer', body: 'Leave some empty slots for overruns and surprises.' },
            { title: 'Review daily', body: 'Each morning or evening, check today’s plan and adjust.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The planning fallacy',
          text: 'People consistently underestimate how long tasks take, even when they know past tasks overran (see [cognitive biases](@thinking/biases)). A rough fix: estimate, then add half again. Track how long tasks actually take to improve your estimates.',
        },
      ],
    },
    {
      id: 'tips',
      title: 'Everyday tips',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Break large projects into steps with their own mini-deadlines.',
            'Do the hardest task when your energy is highest.',
            'Batch small tasks (emails, admin) into one slot.',
            'Say no to some things to protect time for what matters.',
          ],
          dont: [
            'Keep your plan only in your head.',
            'Plan every minute; rigid plans break easily.',
            'Treat a to-do list as a plan; a list without times rarely gets done.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Covey, S. R. (1989). *The 7 habits of highly effective people*. Free Press.',
    'Buehler, R., Griffin, D., & Ross, M. (1994). Exploring the "planning fallacy". *Journal of Personality and Social Psychology, 67*(3), 366–381.',
  ],
  related: ['exams/revision-plan', 'habits/goals', 'thinking/biases'],
}

export default guide
