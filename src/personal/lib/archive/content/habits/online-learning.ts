import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Online courses and recorded lectures give you flexibility, but they also remove the structure that keeps many people going: a timetable, a room, other people. Most people who sign up for free online courses do not finish them. A few habits make the difference.',
  nutshell: [
    'Put study sessions in your **calendar** like real classes.',
    '**Pause and predict**: do not just watch; stop and answer, take notes, try problems.',
    'Resist **2× speed binging**; watching is not learning.',
    'Find **people**: forums, study partners, a group chat.',
  ],
  sections: [
    {
      id: 'structure',
      title: 'Build your own structure',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Schedule it', body: 'Fixed times each week, in your calendar, as if they were live classes.' },
            { title: 'Set up a study space', body: 'A place, and a device state (notifications off, one tab), that means "class". See [focus](@habits/focus).' },
            { title: 'Break it down', body: 'Turn each module into small tasks with deadlines. See [managing your time](@habits/time).' },
            { title: 'Track progress', body: 'Tick off lessons and log study time.' },
          ],
        },
      ],
    },
    {
      id: 'video',
      title: 'Learning from videos',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Before a video, look at the title and guess what it will cover.',
            'Pause every few minutes and summarise in your own words.',
            'Before the presenter solves a problem, pause and try it yourself.',
            'After the video, close it and write what you remember ([active recall](@memory/active-recall)).',
            'Use any quizzes the course provides, and do them honestly.',
          ],
          dont: [
            'Watch at double speed while doing something else.',
            'Binge a whole week of lectures in one sitting.',
            'Confuse "I watched it" with "I learned it".',
          ],
        },
      ],
    },
    {
      id: 'people',
      title: 'Stay connected',
      blocks: [
        {
          t: 'list',
          items: [
            'Post a question or an answer in the course forum each week.',
            'Find a study partner doing the same course and check in weekly.',
            'Explain what you learned to someone else.',
            'Join or form a small group for the tough modules (see [studying with others](@habits/study-groups)).',
          ],
        },
      ],
    },
  ],
  related: ['habits/focus', 'habits/time', 'memory/active-recall'],
}

export default guide
