import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A simulation is only as good as its design and debrief. The healthcare simulation community has developed detailed standards (for example the INACSL Healthcare Simulation Standards of Best Practice) that transfer well to any subject: clear objectives, a realistic scenario, a pre-briefing that builds safety, a well-run simulation and a structured debrief.',
  nutshell: [
    'Start from **objectives**: what decisions and actions should learners practise?',
    'Build a **scenario** with a starting state, triggers, branches and a realistic end point.',
    '**Pre-brief**: the purpose, the rules, the limits of realism, and a “fiction contract”.',
    '**Debrief** at least as long as the simulation itself, with a structured model.',
  ],
  sections: [
    {
      id: 'cycle',
      title: 'The simulation cycle',
      blocks: [
        { t: 'flow', nodes: [
          { label: 'Objectives', tone: 'human' },
          { label: 'Scenario design', tone: 'data' },
          { label: 'Pre-brief', tone: 'process' },
          { label: 'Run', tone: 'model' },
          { label: 'Debrief', tone: 'output' },
          { label: 'Assess and revise', tone: 'process' },
        ] },
      ],
    },
    {
      id: 'scenario',
      title: 'A worked classroom simulation',
      blocks: [
        { t: 'example', title: 'Secondary 4 geography: a flood response committee (60 minutes)', lines: [
          { label: 'Objectives', text: 'Learners weigh trade-offs between hard and soft flood defences under budget limits, and justify a plan using data.' },
          { label: 'Roles', text: 'Town planner, engineer, environmental officer, finance officer, resident representative (role cards with private goals).' },
          { label: 'Start state', text: 'A map of a riverside town, rainfall and damage data for 10 years, a budget of $50 million.' },
          { label: 'Triggers', text: 'At minute 20: a forecast of a 1-in-100-year storm. At minute 35: the national government offers $10 million only for green infrastructure.' },
          { label: 'Run', text: 'Teams negotiate a plan; a simple spreadsheet model shows damage under their choices for three storm scenarios.' },
          { label: 'End', text: 'Each team presents its plan and its modelled outcome.' },
          { label: 'Debrief (20 min)', text: 'What did you decide and why? Which trade-off was hardest? How did roles shape the decision? What would real towns do (e.g. Singapore’s ABC Waters programme)?' },
        ] },
      ],
    },
    {
      id: 'prebrief',
      title: 'Pre-briefing',
      blocks: [
        { t: 'checklist', items: [
          'State the objectives (or say they will be revealed after, if that is the design)',
          'Explain what is real and what is not: “The money is pretend; the trade-offs are real.”',
          'Agree the fiction contract: “We will treat this as real, knowing it is not.”',
          'Set psychological safety: mistakes are expected and will be used for learning',
          'Orient learners to equipment, roles and time',
          'Say how and when they can pause',
        ] },
      ],
    },
    {
      id: 'running',
      title: 'Running and debriefing',
      blocks: [
        { t: 'dodont', do: [
          'Stay in role as a facilitator; intervene only to keep the scenario on track or safe',
          'Observe and note specific moments (quotes, times, decisions) for the debrief',
          'Use the reactions–description–analysis–summary structure for the debrief',
          'Link what happened to the objectives and to the real world',
        ], dont: [
          'Rescue learners too early; productive struggle teaches',
          'Turn the debrief into a lecture on what they should have done',
          'Grade high-stakes performance in the first run of a new simulation',
        ] },
        { t: 'links', items: [
          { path: 'facilitation/debriefing/debrief-models', note: 'PEARLS, advocacy-inquiry and other debrief models' },
          { path: 'facilitation/debriefing/hard-debriefs', note: 'When a simulation goes badly' },
        ] },
      ],
    },
  ],
  sources: [
    'INACSL Standards Committee (2021). Healthcare Simulation Standards of Best Practice. Clinical Simulation in Nursing, 58.',
    'Rudolph, J. W., Raemer, D. B., & Simon, R. (2014). Establishing a safe container for learning in simulation. Simulation in Healthcare, 9(6), 339–349.',
    'Aldrich, C. (2009). Learning Online with Games, Simulations, and Virtual Worlds. Jossey-Bass.',
  ],
  related: ['e-pedagogy/simulation/why-simulation', 'facilitation/debriefing/debrief-models', 'e-pedagogy/simulation/try-a-simulation'],
}

export default guide
