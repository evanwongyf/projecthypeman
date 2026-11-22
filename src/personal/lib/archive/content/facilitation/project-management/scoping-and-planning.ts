import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every camp, workshop series or programme is a project: a temporary effort with a goal, a deadline and limited resources. Facilitators who borrow a few project-management tools (a charter, SMART objectives, a work breakdown and a RACI chart) run calmer programmes and spend more of the event actually facilitating.',
  nutshell: [
    'A one-page **charter** states purpose, scope, deliverables, constraints and who approves what.',
    '**SMART** objectives: specific, measurable, achievable, relevant, time-bound.',
    'A **work breakdown structure** (WBS) splits the project into deliverables and tasks small enough to estimate and assign.',
    'A **RACI** chart says who is Responsible, Accountable, Consulted and Informed for each task.',
  ],
  sections: [
    {
      id: 'triangle',
      title: 'The project triangle',
      blocks: [
        { t: 'p', text: 'Scope (what you deliver), time and cost are linked: change one and the others move, and quality sits in the middle. If the principal halves the budget, the camp must get shorter, smaller or simpler. Say this early and clearly.' },
      ],
    },
    {
      id: 'charter',
      title: 'A one-page charter for a three-day camp',
      blocks: [
        { t: 'table', head: ['Section', 'Example'], rows: [
          ['Purpose', 'Help 120 Secondary 1 students build friendships and confidence in their first term.'],
          ['Objectives (SMART)', 'By the end of camp, 90% of students can name five classmates outside their primary school; the average “I belong here” rating rises by at least 0.5 points.'],
          ['Scope: in', 'Three days and two nights at an outdoor centre; programme design; 12 student facilitators trained.'],
          ['Scope: out', 'Transport booking (school office); meals (centre).'],
          ['Deliverables', 'Programme timetable, risk assessment, facilitator training, parent letter, evaluation report.'],
          ['Constraints', 'Budget $18,000; dates fixed 12–14 March; ratio at least 1 teacher per 15 students.'],
          ['Sponsor and approvals', 'Year head approves programme; principal approves budget and risk assessment.'],
        ] },
      ],
    },
    {
      id: 'wbs',
      title: 'Work breakdown',
      blocks: [
        { t: 'mindmap', center: 'Sec 1 camp', branches: [
          { label: 'Programme', tone: 'orange', items: ['Activity design', 'Timetable', 'Debrief plans', 'Wet-weather plan'] },
          { label: 'People', tone: 'teal', items: ['Teacher roster', 'Student facilitator training', 'Groupings'] },
          { label: 'Logistics', tone: 'mustard', items: ['Venue booking', 'Equipment', 'Transport (office)'] },
          { label: 'Safety', tone: 'pink', items: ['Risk assessment', 'Medical forms', 'First aiders'] },
          { label: 'Communication', tone: 'lavender', items: ['Parent letter', 'Consent forms', 'Briefing'] },
          { label: 'Evaluation', tone: 'mint', items: ['Pre/post survey', 'Report'] },
        ] },
        { t: 'callout', tone: 'tip', title: 'The 8/80 rule', text: 'A common guideline: break work down until each task takes between about 8 and 80 hours of effort, small enough to estimate and track, big enough to be worth tracking.' },
      ],
    },
    {
      id: 'raci',
      title: 'RACI',
      blocks: [
        { t: 'table', head: ['Task', 'Year head', 'Camp IC', 'Teachers', 'Student leaders', 'Parents'], rows: [
          ['Programme design', 'A', 'R', 'C', 'C', ''],
          ['Risk assessment', 'A', 'R', 'C', '', 'I'],
          ['Student facilitator training', '', 'A', 'R', 'R', ''],
          ['Parent letter and consent', 'A', 'R', '', '', 'I'],
          ['Evaluation report', 'I', 'A', 'R', 'C', ''],
        ], caption: 'R = does the work; A = the one person answerable for it (exactly one per task); C = asked before; I = told after.' },
      ],
    },
    {
      id: 'stakeholders',
      title: 'Stakeholders',
      blocks: [
        { t: 'table', head: ['', 'Low interest', 'High interest'], rows: [
          ['**High power**', 'Keep satisfied (principal)', 'Manage closely (year head)'],
          ['**Low power**', 'Monitor (centre staff)', 'Keep informed (parents, students)'],
        ], caption: 'A power–interest grid, used to decide how much communication each group needs.' },
      ],
    },
  ],
  sources: [
    'Project Management Institute (2021). A Guide to the Project Management Body of Knowledge (PMBOK Guide) (7th ed.).',
    'Doran, G. T. (1981). There’s a S.M.A.R.T. way to write management’s goals and objectives. Management Review, 70(11), 35–36.',
  ],
  related: ['facilitation/project-management/scheduling', 'facilitation/project-management/risk-and-budget', 'facilitation/frameworks/session-design'],
}

export default guide
