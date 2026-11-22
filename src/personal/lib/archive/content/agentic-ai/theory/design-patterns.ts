import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most successful agentic systems are built from a handful of simple, composable patterns rather than elaborate frameworks. This guide describes the five workflow patterns and the autonomous agent pattern popularised in Anthropic’s 2024 guidance, with examples and when to use each.',
  nutshell: [
    '**Prompt chaining**: a fixed sequence of calls, each using the last one’s output, with checks between.',
    '**Routing**: classify the input, then send it to a specialised path.',
    '**Parallelisation**: split into independent parts (sectioning) or run the same task several times (voting).',
    '**Orchestrator–workers**: a lead model decides the subtasks dynamically.',
    '**Evaluator–optimiser**: one model produces, another critiques, loop until good enough.',
  ],
  sections: [
    {
      id: 'patterns',
      title: 'The patterns',
      blocks: [
        { t: 'table', head: ['Pattern', 'Example', 'Use when'], rows: [
          ['Prompt chaining', 'Outline an essay → check the outline meets criteria → write each section', 'The task splits cleanly into fixed steps'],
          ['Routing', 'Customer message → classify as refund / technical / general → specialist prompt', 'Distinct categories need different handling'],
          ['Parallelisation: sectioning', 'Review code for security, style and performance at once', 'Independent subtasks; speed matters'],
          ['Parallelisation: voting', 'Three reviewers judge whether content is harmful; act on majority', 'You want confidence through diversity'],
          ['Orchestrator–workers', 'A coding change that touches an unknown number of files', 'Subtasks cannot be known in advance'],
          ['Evaluator–optimiser', 'Translate; critic flags nuance errors; revise', 'Clear evaluation criteria; iteration helps'],
          ['Autonomous agent', 'Fix a failing test suite in a repository', 'Open-ended tasks; trusted environment; good feedback signals'],
        ] },
      ],
    },
    {
      id: 'chaining',
      title: 'Prompt chaining with gates',
      blocks: [
        { t: 'flow', nodes: [
          { label: 'Input', tone: 'human' },
          { label: 'Call 1', sub: 'extract facts', tone: 'model' },
          { label: 'Gate', sub: 'code checks the format', tone: 'process' },
          { label: 'Call 2', sub: 'draft', tone: 'model' },
          { label: 'Call 3', sub: 'polish', tone: 'model' },
          { label: 'Output', tone: 'output' },
        ] },
        { t: 'p', text: 'The gates are ordinary code: check that the extracted JSON parses, that the draft is under the word limit, that every claim has a source. Gates turn hard-to-debug model failures into clear errors at a known step.' },
      ],
    },
    {
      id: 'principles',
      title: 'Principles',
      blocks: [
        { t: 'checklist', items: [
          'Start simple; add complexity only when it measurably helps',
          'Make the agent’s plan and steps visible (transparency)',
          'Invest in the agent–computer interface: tool names, descriptions, error messages',
          'Give the agent ground truth at each step (test results, real data), not only its own judgement',
          'Set budgets and step limits; log every action',
          'Test on many varied tasks, not one demo',
        ] },
      ],
    },
  ],
  sources: [
    'Anthropic (2024). Building effective agents.',
    'Ng, A. (2024). Agentic design patterns (reflection, tool use, planning, multi-agent collaboration). The Batch.',
  ],
  related: ['agentic-ai/theory/multi-agent', 'agentic-ai/maths/reliability', 'agentic-ai/threats/defences'],
}

export default guide
