import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'A facilitator makes it easier for a group to do its own thinking, learning and deciding. Teachers, youth workers, camp instructors, trainers, team leads and community organisers all facilitate, whether or not they use the word. This shelf collects the frameworks, debriefing models and techniques that make the difference between a group that sits through a session and a group that owns it.',
  nutshell: [
    'The facilitator looks after **process** (how the group works) so the group can concentrate on **content** (what it is working on).',
    'Most sessions follow one arc: **open** (safety and purpose), **explore** (many ideas), **converge** (choose and decide) and **close** (commit and reflect).',
    'Experience alone does not teach. The **debrief** turns an activity into learning, and **transfer** carries it home.',
    'Character growth and group unity are built through **real challenge, real choice and real reflection**, not through speeches about teamwork.',
  ],
  sections: [
    {
      id: 'role',
      title: 'The job in one page',
      blocks: [
        { t: 'cards', cols: 3, items: [
          { title: 'Before', body: 'Clarify the purpose with whoever asked for the session, find out who is coming, design the agenda, prepare materials and risk assessments.' },
          { title: 'During', body: 'Set up safety and purpose, run activities, keep time, protect quiet voices, notice energy, help the group converge, and debrief what happened.' },
          { title: 'After', body: 'Record outputs and decisions, follow up on commitments, evaluate what changed, and reflect on your own practice.' },
        ] },
        { t: 'quote', text: 'The facilitator’s job is to support everyone to do their best thinking.', by: 'Sam Kaner, Facilitator’s Guide to Participatory Decision-Making' },
      ],
    },
    {
      id: 'map',
      title: 'What is on this shelf',
      blocks: [
        { t: 'mindmap', center: 'Facilitation', branches: [
          { label: 'Foundations', tone: 'teal', items: ['Content vs process', 'Heron’s modes', 'Tuckman, groan zone', 'Psychological safety'] },
          { label: 'Frameworks', tone: 'orange', items: ['Session design', 'Experiential cycle', 'ORID', 'Liberating Structures', 'World Café, Open Space', 'Decisions'] },
          { label: 'Debriefing', tone: 'pink', items: ['Why debrief', 'Models', 'Techniques', 'Hard debriefs'] },
          { label: 'Growth', tone: 'mint', items: ['Comfort zones', 'Character strengths', 'Transfer', 'Measuring growth'] },
          { label: 'Unity', tone: 'lavender', items: ['Cohesion', 'Team roles', 'Activities', 'Conflict'] },
          { label: 'Projects', tone: 'mustard', items: ['Scoping', 'Critical path, PERT', 'Risk, budget', 'Agile, retros'] },
        ] },
      ],
    },
    {
      id: 'routes',
      title: 'Reading routes',
      blocks: [
        { t: 'table', head: ['If you are…', 'Start with', 'Then'], rows: [
          ['A teacher running group work or CCA', '[What facilitation is](@facilitation/foundations/what-facilitation-is)', '[Debrief models](@facilitation/debriefing/debrief-models), [Liberating Structures](@facilitation/frameworks/liberating-structures)'],
          ['A camp or outdoor instructor', '[Challenge and growth](@facilitation/growth/challenge-and-growth)', '[Activities](@facilitation/unity/activities), [Hard debriefs](@facilitation/debriefing/hard-debriefs), [Risk and budget](@facilitation/project-management/risk-and-budget)'],
          ['A trainer or workshop lead', '[Designing a session](@facilitation/frameworks/session-design)', '[ORID](@facilitation/frameworks/orid), [Measuring growth](@facilitation/growth/measuring-growth)'],
          ['A team lead or project manager', '[Helping groups decide](@facilitation/frameworks/decision-making)', '[Scheduling](@facilitation/project-management/scheduling), [Agile and retros](@facilitation/project-management/agile-and-retros)'],
          ['Running things online', '[Online and hybrid](@facilitation/toolkit/online-and-hybrid)', '[Everyday techniques](@facilitation/toolkit/techniques)'],
        ] },
        { t: 'callout', tone: 'tip', title: 'The maths', text: 'A few guides have numbers: session timing, voting, effect sizes and normalised gain, group size and communication links, critical path and PERT estimates, risk scores and budgets, and flow in kanban. Each formula has a plain explanation, every symbol spelled out, and a worked example with a reason for every step.' },
      ],
    },
  ],
  related: ['teaching/techniques/active-learning/cooperative', 'teaching/theories/experiential'],
}

export default guide
