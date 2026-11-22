import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Agile methods came from software teams that found big up-front plans broke on contact with reality. Their core ideas (short cycles, visible work, regular reflection) suit any small team: a student council, a CCA committee, a project group or a programme team. And the retrospective at the end of each cycle is simply a facilitated debrief.',
  nutshell: [
    '**Scrum**: fixed-length sprints, a backlog, a daily stand-up, a review and a retrospective.',
    '**Kanban**: visualise work on a board, **limit work in progress**, improve flow.',
    '**Velocity** (work done per sprint) helps forecast; **Little’s law** links work in progress, throughput and lead time.',
    'A **retrospective** asks: what went well, what didn’t, what will we change?',
  ],
  sections: [
    {
      id: 'scrum',
      title: 'Scrum in a student team',
      blocks: [
        { t: 'cycle', items: [
          { name: 'Plan the sprint', body: 'From the backlog (the list of everything to do), pick what the team can finish in the next 1–2 weeks.' },
          { name: 'Daily stand-up', body: '10 minutes: what I did, what I’ll do, what is blocking me.' },
          { name: 'Review', body: 'Show what is done to the sponsor (the teacher or client) and get feedback.' },
          { name: 'Retrospective', body: 'Reflect on how the team worked and choose one or two improvements.' },
        ] },
      ],
    },
    {
      id: 'kanban',
      title: 'Kanban boards and flow',
      blocks: [
        { t: 'table', head: ['To do', 'Doing (limit 3)', 'Review', 'Done'], rows: [
          ['Design poster', 'Book hall', 'Parent letter draft', 'Choose date'],
          ['Order prizes', 'Write quiz', '', 'Form committee'],
          ['Brief helpers', 'Budget', '', ''],
        ], caption: 'A simple board. The work-in-progress limit stops the team from starting everything and finishing nothing.' },
        {
          t: 'math',
          tex: String.raw`\text{Lead time} = \frac{\text{WIP}}{\text{Throughput}}`,
          caption: 'Little’s law: average time an item spends in the system equals average items in progress divided by the average rate of finishing.',
          plain: 'If a team always has a lot of tasks on the go but only finishes a few a week, each task waits a long time. Little’s law says the average time from starting a task to finishing it equals how many tasks are in progress divided by how many get finished per unit of time. To get things done faster, cut work in progress, not just work harder.',
          where: [
            { sym: 'WIP', def: 'average number of items started but not finished' },
            { sym: 'Throughput', def: 'average items finished per unit time (e.g. per week)' },
            { sym: 'Lead time', def: 'average time from start to finish of one item' },
          ],
          syntax: [
            { sym: String.raw`\frac{a}{b}`, say: '“a divided by b”' },
          ],
          worked: {
            title: 'A committee juggling too much',
            steps: [
              'The committee has 12 tasks in progress on average and finishes 3 per week.',
              String.raw`Lead time \(= 12 / 3 = 4\) weeks per task.`,
              'They adopt a limit of 6 tasks in progress; throughput stays at 3 per week (it often rises, since less switching).',
              String.raw`New lead time \(= 6 / 3 = 2\) weeks.`,
            ],
            why: [
              'measure average work in progress and finishing rate from the board',
              'divide to get average time each task takes',
              'limit work in progress',
              'same throughput, half the WIP, half the wait',
            ],
            answer: 'Halving work in progress halves the average time a task takes, from 4 weeks to 2, with no extra effort.',
          },
        },
        {
          t: 'math',
          tex: String.raw`\text{Sprints needed} = \left\lceil \frac{\text{Remaining points}}{\bar v} \right\rceil`,
          caption: 'Forecasting with velocity, the average story points completed per sprint.',
          plain: 'Teams often estimate tasks in “points” (relative size). Velocity is how many points the team actually finishes per sprint, averaged over the last few. Divide the remaining work by velocity and round up to forecast how many sprints are left.',
          where: [
            { sym: String.raw`\bar v`, def: 'average velocity (points finished per sprint)' },
            { sym: 'Remaining points', def: 'total size of work left in the backlog' },
          ],
          syntax: [
            { sym: String.raw`\lceil x \rceil`, say: '“ceiling of x”: round up' },
            { sym: String.raw`\bar v`, say: '“v bar”: the average velocity' },
          ],
          worked: {
            title: 'A school carnival backlog',
            steps: [
              'Last three sprints finished 18, 22 and 20 points.',
              String.raw`\(\bar v = (18 + 22 + 20)/3 = 20\).`,
              String.raw`Remaining: 70 points. \(70 / 20 = 3.5\).`,
              String.raw`\(\lceil 3.5 \rceil = 4\) sprints.`,
            ],
            why: [
              'use recent real performance, not hopes',
              'average them',
              'divide remaining work by the average rate',
              'a half sprint still takes a sprint',
            ],
            answer: 'About 4 one-week sprints remain. If the carnival is in 3 weeks, cut about 10 points of scope now.',
          },
        },
      ],
    },
    {
      id: 'retros',
      title: 'Retrospective formats',
      blocks: [
        { t: 'table', head: ['Format', 'Prompts', 'Good for'], rows: [
          ['Start, stop, continue', 'What should we start, stop, keep doing?', 'Any team, quick'],
          ['Mad, sad, glad', 'What made us mad, sad, glad?', 'Surfacing emotions'],
          ['4Ls', 'Liked, learned, lacked, longed for', 'End of a project'],
          ['Sailboat', 'Wind (helps), anchors (holds back), rocks (risks), island (goal)', 'Visual teams, young people'],
          ['Timeline', 'Plot events and the team’s mood over the sprint', 'Longer cycles'],
          ['Five whys', 'Pick one problem; ask why five times', 'Root causes'],
        ] },
        { t: 'steps', items: [
          { title: 'Set the stage (5 min)', body: 'Check-in; restate the prime directive (below).' },
          { title: 'Gather data (10 min)', body: 'Silent sticky notes for the format’s prompts.' },
          { title: 'Generate insights (15 min)', body: 'Cluster notes, dot-vote the top themes, discuss causes.' },
          { title: 'Decide what to do (10 min)', body: 'One or two experiments with an owner.' },
          { title: 'Close (5 min)', body: 'Quick rating of the retro itself.' },
        ] },
        { t: 'quote', text: 'Regardless of what we discover, we understand and truly believe that everyone did the best job they could, given what they knew at the time, their skills and abilities, the resources available, and the situation at hand.', by: 'Norm Kerth’s retrospective prime directive' },
      ],
    },
  ],
  sources: [
    'Schwaber, K., & Sutherland, J. (2020). The Scrum Guide.',
    'Anderson, D. J. (2010). Kanban. Blue Hole Press.',
    'Little, J. D. C. (1961). A proof for the queuing formula L = λW. Operations Research, 9(3), 383–387.',
    'Derby, E., & Larsen, D. (2006). Agile Retrospectives. Pragmatic Bookshelf.',
    'Kerth, N. (2001). Project Retrospectives. Dorset House.',
  ],
  related: ['facilitation/debriefing/debrief-models', 'facilitation/project-management/scheduling', 'cloud/start-here'],
}

export default guide
