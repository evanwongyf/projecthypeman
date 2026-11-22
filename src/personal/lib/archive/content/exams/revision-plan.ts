import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'A good revision plan does three things: it covers everything, it spaces topics out so each comes back several times, and it is realistic enough that you actually follow it. Start earlier than feels necessary.',
  nutshell: [
    'List every topic for every subject, and rate how confident you are in each.',
    'Work backwards from the exam dates. Start weeks ahead, not days.',
    'Revisit each topic **several times**, spaced out, weakest topics most often.',
    'Plan short, focused sessions with breaks, and leave buffer time.',
    'Each session should include **active recall**, not just rereading.',
  ],
  sections: [
    {
      id: 'steps',
      title: 'Building the plan',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Gather the facts', body: 'Exam dates, times and the topics each paper covers (check the specification or syllabus).' },
            { title: 'List and rate topics', body: 'Every topic, rated red (weak), amber (okay) or green (confident). Be honest.' },
            { title: 'Count your time', body: 'How many weeks until the first exam? How many study hours per day, realistically, around school, work, sleep and rest?' },
            { title: 'Spread topics out', body: 'Give each topic several short sessions across the weeks rather than one long block. Red topics get more sessions.' },
            { title: 'Mix subjects each day', body: 'Two or three different subjects per day keeps things fresh and adds [interleaving](@teaching/techniques/learning-strategies/interleaving).' },
            { title: 'Plan past papers', body: 'Increase past-paper practice as exams approach. See [using past papers](@exams/past-papers).' },
            { title: 'Leave slack', body: 'Leave a free slot or two each week for catching up. Plans without slack collapse after the first bad day.' },
          ],
        },
      ],
    },
    {
      id: 'example',
      title: 'An example week',
      blocks: [
        {
          t: 'table',
          head: ['Day', 'Session 1 (45 min)', 'Session 2 (45 min)', 'Session 3 (30 min)'],
          rows: [
            ['Mon', 'Biology: cells (red), blurt + flashcards', 'History: causes of WW1 (amber), practice question', 'Flashcard reviews'],
            ['Tue', 'Maths: algebra (red), mixed problems', 'English: Macbeth quotes (amber)', 'Flashcard reviews'],
            ['Wed', 'Biology: cells again, practice questions', 'Chemistry: bonding (red)', 'Flashcard reviews'],
            ['Thu', 'History: WW1 again, timed essay plan', 'Maths: algebra again', 'Flashcard reviews'],
            ['Fri', 'Chemistry: bonding again', 'English: themes (green), quick blurt', 'Flashcard reviews'],
            ['Sat', 'Past paper: biology (timed)', 'Mark it; add mistakes to flashcards', 'Rest'],
            ['Sun', 'Catch-up / buffer', 'Plan next week', 'Rest'],
          ],
          caption: 'Red topics appear twice this week. Each session uses active recall.',
        },
        { t: 'tool', tool: 'revision-planner' },
      ],
    },
    {
      id: 'sticking',
      title: 'Sticking to it',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Plan specific tasks ("Biology: blurt cell structure, then 10 exam questions"), not just subjects.',
            'Start sessions at the same time each day.',
            'Tick off completed sessions; seeing progress is motivating.',
            'Update your red/amber/green ratings weekly and adjust.',
            'Protect sleep, meals, exercise and time off.',
          ],
          dont: [
            'Spend hours making a beautiful timetable instead of revising.',
            'Plan 10 hours a day and give up on day two.',
            'Revise only your favourite subjects.',
            'Leave a whole subject until the week before.',
          ],
        },
      ],
    },
  ],
  related: ['exams/revision-methods', 'teaching/techniques/learning-strategies/spaced-practice', 'habits/time'],
}

export default guide
