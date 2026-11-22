import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'If one agent is useful, are ten better? Sometimes. Splitting work between agents can add parallel speed, specialisation and fresh contexts, but it also multiplies cost, adds coordination failures and makes behaviour harder to predict. This guide covers the common architectures and the protocols that connect agents and tools.',
  nutshell: [
    '**Orchestrator–worker**: a lead agent splits the task, workers do parts in parallel, the lead combines.',
    '**Pipeline**: agents in sequence, each with a role (researcher → writer → editor).',
    '**Debate and critique**: agents argue or review each other to improve accuracy.',
    '**Protocols**: the Model Context Protocol (MCP, 2024) connects agents to tools and data; Agent2Agent (A2A, 2025) connects agents to each other.',
  ],
  sections: [
    {
      id: 'architectures',
      title: 'Architectures',
      blocks: [
        { t: 'diagram', title: 'Orchestrator–worker', nodes: [
          { id: 'u', label: 'User goal', shape: 'pill', col: 0, row: 1, tone: 'ink' },
          { id: 'o', label: 'Orchestrator', sub: 'plans, delegates, merges', col: 1, row: 1, tone: 'lavender' },
          { id: 'w1', label: 'Worker 1', sub: 'search topic A', col: 2, row: 0, tone: 'teal' },
          { id: 'w2', label: 'Worker 2', sub: 'search topic B', col: 2, row: 1, tone: 'teal' },
          { id: 'w3', label: 'Worker 3', sub: 'run analysis', col: 2, row: 2, tone: 'teal' },
          { id: 'r', label: 'Report', shape: 'pill', col: 3, row: 1, tone: 'mint' },
        ], edges: [
          { from: 'u', to: 'o' }, { from: 'o', to: 'w1' }, { from: 'o', to: 'w2' }, { from: 'o', to: 'w3' },
          { from: 'w1', to: 'r', dashed: true }, { from: 'w2', to: 'r', dashed: true }, { from: 'w3', to: 'r', dashed: true },
        ] },
        { t: 'table', head: ['Architecture', 'Strength', 'Weakness'], rows: [
          ['Single agent with tools', 'Simple, coherent, cheapest', 'One context fills up; sequential'],
          ['Orchestrator–worker', 'Parallel; clean contexts per subtask', 'Many times the tokens; workers may duplicate or conflict'],
          ['Pipeline of roles', 'Clear responsibilities', 'Errors flow downstream; rigid'],
          ['Debate / critique', 'Catches some errors', 'Agents can agree on a wrong answer'],
          ['Swarm / peer network', 'Flexible, emergent', 'Hard to predict and debug'],
        ] },
        { t: 'callout', tone: 'note', title: 'A reported data point', text: 'Anthropic reported in 2025 that its multi-agent research system outperformed a single agent on its internal research evaluation by about 90%, while using roughly 15 times the tokens of a chat interaction. Multi-agent designs pay off on broad, parallelisable tasks that are worth the cost; for tightly coupled tasks such as most coding, a single agent is often better.' },
      ],
    },
    {
      id: 'failures',
      title: 'How multi-agent systems fail',
      blocks: [
        { t: 'list', items: [
          'Misunderstood hand-offs: the orchestrator’s instructions are vague, so workers do the wrong task.',
          'Duplication: two workers search the same thing.',
          'Conflict: workers make incompatible changes (two agents editing one file).',
          'Echo chambers: agents reinforce each other’s errors.',
          'Runaway cost: agents spawn agents.',
          'Accountability gaps: it is unclear which agent made a harmful decision.',
        ] },
      ],
    },
    {
      id: 'protocols',
      title: 'Protocols',
      blocks: [
        { t: 'table', head: ['Protocol', 'From', 'Connects', 'Idea'], rows: [
          ['Model Context Protocol (MCP)', 'Anthropic, November 2024; widely adopted in 2025', 'Agents ↔ tools and data sources', 'A standard way for any AI application to discover and call tools exposed by “MCP servers”, like a USB port for tools'],
          ['Agent2Agent (A2A)', 'Google, April 2025; moved to the Linux Foundation', 'Agent ↔ agent', 'Agents publish “agent cards” describing their skills and exchange tasks and results'],
          ['OpenAPI / function calling', 'Industry standard', 'Agents ↔ web APIs', 'Tool schemas generated from existing API descriptions'],
        ] },
      ],
    },
  ],
  sources: [
    'Anthropic (2025). How we built our multi-agent research system.',
    'Anthropic (2024). Introducing the Model Context Protocol.',
    'Google (2025). Announcing the Agent2Agent protocol (A2A).',
    'Du, Y. et al. (2023). Improving factuality and reasoning in language models through multiagent debate. arXiv:2305.14325.',
    'Cemri, M. et al. (2025). Why do multi-agent LLM systems fail? arXiv:2503.13657.',
  ],
  related: ['agentic-ai/theory/design-patterns', 'agentic-ai/maths/cost-and-latency', 'game-theory/start-here'],
}

export default guide
