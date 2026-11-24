import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Some tasks in a project can happen in parallel; others must wait for something else to finish. The critical path method finds the longest chain of dependent tasks, which sets the earliest the project can finish. PERT adds a way to estimate tasks whose length is uncertain. Both are simple enough to do on a whiteboard.',
  nutshell: [
    'List tasks, durations and **dependencies** (what must finish first).',
    'The **critical path** is the longest path through the dependency network; it fixes the project duration.',
    '**Float (slack)** is how long a non-critical task can slip without delaying the project.',
    '**PERT** estimates a task as (optimistic + 4 × most likely + pessimistic) ÷ 6.',
  ],
  sections: [
    {
      id: 'network',
      title: 'A camp preparation network',
      blocks: [
        { t: 'table', head: ['Task', 'Duration (days)', 'Depends on'], rows: [
          ['A: Book venue', '5', '-'],
          ['B: Design programme', '10', 'A'],
          ['C: Risk assessment', '6', 'B'],
          ['D: Send parent letter and consent', '4', 'A'],
          ['E: Collect consent forms', '7', 'D'],
          ['F: Train student facilitators', '8', 'B'],
          ['G: Final briefing', '1', 'C, E, F'],
        ] },
        { t: 'diagram', title: 'Dependencies (the critical path in orange)', nodes: [
          { id: 'A', label: 'A Book venue', sub: '5 d', col: 0, row: 1, tone: 'orange' },
          { id: 'B', label: 'B Programme', sub: '10 d', col: 1, row: 0, tone: 'orange' },
          { id: 'D', label: 'D Parent letter', sub: '4 d', col: 1, row: 2, tone: 'teal' },
          { id: 'C', label: 'C Risk assessment', sub: '6 d', col: 2, row: 0, tone: 'teal' },
          { id: 'F', label: 'F Train facilitators', sub: '8 d', col: 2, row: 1, tone: 'orange' },
          { id: 'E', label: 'E Collect consent', sub: '7 d', col: 2, row: 2, tone: 'teal' },
          { id: 'G', label: 'G Briefing', sub: '1 d', col: 3, row: 1, tone: 'orange', shape: 'pill' },
        ], edges: [
          { from: 'A', to: 'B', tone: 'orange' }, { from: 'A', to: 'D' }, { from: 'B', to: 'C' }, { from: 'B', to: 'F', tone: 'orange' },
          { from: 'D', to: 'E' }, { from: 'C', to: 'G' }, { from: 'F', to: 'G', tone: 'orange' }, { from: 'E', to: 'G' },
        ] },
      ],
    },
    {
      id: 'cpm',
      title: 'Finding the critical path',
      blocks: [
        {
          t: 'math',
          tex: String.raw`ES_j = \max_{i \to j} EF_i, \qquad EF_j = ES_j + d_j`,
          caption: 'The forward pass: each task can start only when all the tasks before it have finished.',
          plain: 'Go through the tasks in order. A task’s earliest start is the latest of the earliest finish times of everything it depends on (you must wait for the slowest). Its earliest finish is that start plus its own duration. The earliest finish of the last task is the shortest possible project length.',
          where: [
            { sym: String.raw`ES_j`, def: 'earliest start of task j (day number)' },
            { sym: String.raw`EF_j`, def: 'earliest finish of task j' },
            { sym: String.raw`d_j`, def: 'duration of task j' },
            { sym: String.raw`i \to j`, def: 'every task i that task j depends on' },
          ],
          syntax: [
            { sym: String.raw`\max_{i \to j}`, say: '“the maximum over all i leading into j”: take the largest of those values' },
          ],
          worked: {
            title: 'Forward pass on the camp network',
            steps: [
              String.raw`A: \(ES = 0\), \(EF = 0 + 5 = 5\).`,
              String.raw`B: \(ES = EF_A = 5\), \(EF = 15\). D: \(ES = 5\), \(EF = 9\).`,
              String.raw`C: \(ES = 15\), \(EF = 21\). F: \(ES = 15\), \(EF = 23\). E: \(ES = 9\), \(EF = 16\).`,
              String.raw`G: \(ES = \max(21, 16, 23) = 23\), \(EF = 24\).`,
            ],
            why: [
              'the first task starts at day 0',
              'both wait only for A',
              'C and F wait for B; E waits for D',
              'the briefing waits for the slowest of C, E and F, which is F',
            ],
            answer: 'The project needs 24 days. The longest chain is A → B → F → G (5 + 10 + 8 + 1 = 24): the critical path.',
          },
        },
        {
          t: 'math',
          tex: String.raw`\text{Float}_j = LS_j - ES_j, \qquad LF_j = \min_{j \to k} LS_k,\quad LS_j = LF_j - d_j`,
          caption: 'The backward pass gives the latest times; float is the gap between latest and earliest start.',
          plain: 'Now work backwards from the end. A task must finish by the latest start of whatever comes after it (the earliest of those). Its latest start is that minus its duration. Float is how much later than its earliest start a task could begin without pushing out the end date. Critical tasks have zero float.',
          where: [
            { sym: String.raw`LS_j, LF_j`, def: 'latest start and latest finish of task j' },
            { sym: String.raw`j \to k`, def: 'every task k that depends on task j' },
            { sym: String.raw`\text{Float}_j`, def: 'slack: days task j can slip harmlessly' },
          ],
          syntax: [
            { sym: String.raw`\min_{j \to k}`, say: '“the minimum over all tasks after j”: take the smallest' },
          ],
          worked: {
            title: 'Backward pass and floats',
            steps: [
              String.raw`G: \(LF = 24\), \(LS = 23\).`,
              String.raw`C: \(LF = 23\), \(LS = 17\); float \(= 17 - 15 = 2\). F: \(LS = 15\); float \(= 0\). E: \(LS = 16\); float \(= 16 - 9 = 7\).`,
              String.raw`B: \(LF = \min(LS_C, LS_F) = \min(17, 15) = 15\), \(LS = 5\); float 0. D: \(LF = LS_E = 16\), \(LS = 12\); float \(= 12 - 5 = 7\).`,
              String.raw`A: \(LF = \min(5, 12) = 5\), \(LS = 0\); float 0.`,
            ],
            why: [
              'the last task must finish on day 24',
              'each of C, F and E must finish by day 23, when G starts',
              'B must finish before the earlier of its two successors needs to start',
              'A must finish before B’s latest start',
            ],
            answer: 'A, B, F and G have zero float (critical). C can slip 2 days; D and E can slip 7 days between them. Watch the critical tasks most closely.',
          },
        },
      ],
    },
    {
      id: 'pert',
      title: 'PERT: estimating uncertain tasks',
      blocks: [
        {
          t: 'math',
          tex: String.raw`t_e = \frac{o + 4m + p}{6}, \qquad \sigma = \frac{p - o}{6}`,
          caption: 'The PERT (beta) estimate and its standard deviation.',
          plain: 'When you cannot be sure how long a task will take, ask for three numbers: the optimistic time (if everything goes well), the most likely time, and the pessimistic time (if things go wrong, short of disaster). PERT takes a weighted average that counts the most likely value four times. The spread (σ) is a sixth of the range, a rough measure of uncertainty.',
          where: [
            { sym: String.raw`t_e`, def: 'expected duration' },
            { sym: 'o', def: 'optimistic estimate' },
            { sym: 'm', def: 'most likely estimate' },
            { sym: 'p', def: 'pessimistic estimate' },
            { sym: String.raw`\sigma`, def: 'standard deviation: how uncertain the estimate is' },
          ],
          syntax: [
            { sym: '4m', say: '“four times m”: the most likely value gets four times the weight' },
            { sym: String.raw`\sigma`, say: '“sigma”' },
          ],
          worked: {
            title: 'Collecting consent forms',
            steps: [
              'Estimates: optimistic 4 days, most likely 7, pessimistic 16 (some families never reply to the first letter).',
              String.raw`\(t_e = (4 + 4 \times 7 + 16)/6 = (4 + 28 + 16)/6 = 48/6 = 8\) days.`,
              String.raw`\(\sigma = (16 - 4)/6 = 2\) days.`,
              'E had 7 days of float with its old 7-day estimate; the expected time is now 8, so float drops to 6. With σ = 2, a run of bad luck (about 2σ, 12 days) would use most of it.',
            ],
            why: [
              'ask the person who will do the task for three honest estimates',
              'weight the most likely value four times and divide by six',
              'one sixth of the range',
              'compare the expected time and its spread with the float',
            ],
            answer: 'Plan for 8 days, not 7. Send the consent letter early, since this path has float but also large uncertainty.',
          },
        },
        {
          t: 'math',
          tex: String.raw`T = \sum_{\text{critical}} t_e, \qquad \sigma_T = \sqrt{\sum_{\text{critical}} \sigma^2}`,
          caption: 'The expected project length and its uncertainty along the critical path.',
          plain: 'Add the expected times along the critical path to get the expected project length. Uncertainties do not simply add: their squares (variances) add, and you take the square root at the end. This assumes the tasks’ delays are independent.',
          where: [
            { sym: 'T', def: 'expected project duration' },
            { sym: String.raw`\sigma_T`, def: 'standard deviation of the project duration' },
          ],
          syntax: [
            { sym: String.raw`\sum_{\text{critical}}`, say: '“sum over the critical tasks”' },
            { sym: String.raw`\sqrt{\;}`, say: '“the square root of”' },
          ],
          worked: {
            title: 'Chance of finishing in 26 days',
            steps: [
              'Critical tasks with (tₑ, σ): A (5, 0.5), B (10, 2), F (8, 1), G (1, 0).',
              String.raw`\(T = 5 + 10 + 8 + 1 = 24\) days.`,
              String.raw`\(\sigma_T = \sqrt{0.25 + 4 + 1 + 0} = \sqrt{5.25} \approx 2.29\) days.`,
              String.raw`\(z = (26 - 24)/2.29 \approx 0.87\); the normal table gives \(P(Z < 0.87) \approx 0.81\).`,
            ],
            why: [
              'list the estimates for tasks on the critical path',
              'expected times add',
              'variances (σ²) add, then square-root',
              'how many standard deviations 26 days is above the mean, then look up the probability',
            ],
            answer: 'About an 81% chance of being ready within 26 days. Start at least 26–27 working days before the camp. (Non-critical paths can also become critical if their uncertainty is large.)',
          },
        },
      ],
    },
    {
      id: 'gantt',
      title: 'Gantt charts',
      blocks: [
        { t: 'p', text: 'A Gantt chart draws each task as a bar along a calendar, with dependencies as arrows and milestones as diamonds. It is the best way to show a schedule to stakeholders. Build it after the network so the bars respect the dependencies; colour the critical path.' },
        { t: 'checklist', items: [
          'Count only working days and mark public and school holidays',
          'Add milestones: venue confirmed, consent deadline, risk assessment approved',
          'Leave a buffer before fixed dates you cannot move',
          'Update weekly; a schedule nobody updates is fiction',
        ] },
      ],
    },
    {
      id: 'cpm-lab',
      title: 'The critical path lab',
      lead: 'Two real planning networks, with the forward and backward pass computed for you.',
      blocks: [
        { t: 'p', text: 'Change one task’s duration and watch whether the critical path moves. When it does, the thing you were worrying about last week has stopped being the thing that matters — and that is the single most useful fact a schedule can give you, because it is invisible on a wall planner.' },
        { t: 'facil-lab', viz: 'critical-path' },
        {
          t: 'checklist',
          items: [
            'In the camp network, note which tasks have float. Catering and risk assessment are not critical, which is exactly why they get left to the last week.',
            'Add ten days to leader recruitment and watch the path change.',
            'Read the float column as a permission slip: a task with eight days of float can slip eight days before it becomes your problem.',
            'Use the PERT panel to find the date you are 80% confident of, then promise that one rather than the expected one.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Kelley, J. E., & Walker, M. R. (1959). Critical-path planning and scheduling. Proceedings of the Eastern Joint Computer Conference.',
    'Malcolm, D. G. et al. (1959). Application of a technique for research and development program evaluation. Operations Research, 7(5), 646–669.',
    'Project Management Institute (2021). PMBOK Guide (7th ed.).',
  ],
  related: ['facilitation/project-management/scoping-and-planning', 'facilitation/project-management/risk-and-budget', 'mathematics/start-here'],
}

export default guide
