import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'By 2025, agents had moved from research demos to everyday tools in a few domains, above all software development. This guide surveys where agents are used, what they are good and bad at, and the infrastructure that connects them. The field changes monthly, so treat the specifics as a snapshot.',
  nutshell: [
    '**Coding agents** are the most mature: they read repositories, edit files, run tests and open pull requests.',
    '**Computer-use agents** operate graphical interfaces from screenshots: powerful, but slower and less reliable.',
    '**Deep research agents** run dozens of searches and write sourced reports.',
    'Customer service, data analysis, science and operations are growing areas; high-stakes domains keep humans in the loop.',
  ],
  sections: [
    {
      id: 'domains',
      title: 'Where agents are used',
      blocks: [
        { t: 'table', head: ['Domain', 'What agents do', 'Strengths', 'Weak spots'], rows: [
          ['Software', 'Fix bugs, write features and tests, review code, migrate code bases', 'Fast feedback from tests and compilers', 'Large ambiguous changes; understanding unstated intent'],
          ['Computer use', 'Fill forms, navigate apps and websites by clicking and typing', 'Works with any interface', 'Slow, brittle to layout changes, injection risk from page content'],
          ['Research', 'Search, read, compare, summarise with citations', 'Breadth and speed', 'Source quality, subtle errors, invented citations'],
          ['Customer service', 'Answer, look up orders, issue refunds within policy', 'Scale, consistency', 'Edge cases, policy violations, angry customers'],
          ['Data analysis', 'Write and run queries and code, make charts', 'Iterates quickly on real data', 'Silent analysis mistakes'],
          ['Science', 'Literature review, experiment planning, running simulations', 'Tireless exploration', 'Validating novel claims'],
          ['Personal assistants', 'Email triage, scheduling, travel booking', 'Saves small amounts of time often', 'Access to sensitive data and money'],
        ] },
      ],
    },
    {
      id: 'stack',
      title: 'The agent stack',
      blocks: [
        { t: 'levels', caption: 'From bottom to top.', items: [
          { name: 'Models', body: 'Frontier language models, often with extended reasoning; smaller fast models for simple steps.' },
          { name: 'Harness', body: 'The loop: context management, tool execution, permissions, budgets, logging.' },
          { name: 'Tools and protocols', body: 'Shell, browser, file system, APIs; MCP servers exposing tools and data.' },
          { name: 'Sandboxes', body: 'Containers or virtual machines where agents can act without touching real systems.' },
          { name: 'Interfaces', body: 'Command lines, IDE plug-ins, chat apps, background agents assigned like colleagues.' },
          { name: 'Oversight', body: 'Approvals, audit logs, monitoring, evaluation dashboards.' },
        ] },
      ],
    },
    {
      id: 'milestones',
      title: 'Milestones',
      blocks: [
        { t: 'table', head: ['When', 'Milestone'], rows: [
          ['2022', 'ReAct paper; tool-using prompts'],
          ['2023', 'AutoGPT and BabyAGI spark interest; function calling in APIs; Voyager and Generative Agents papers'],
          ['2024', 'SWE-bench becomes a standard; coding agents appear in products; computer use released in beta (October); Model Context Protocol published (November); reasoning models (o1)'],
          ['2025', 'Agentic coding tools in wide use; deep-research products; A2A protocol; MCP adopted across major providers; agents running for hours on tasks'],
        ] },
      ],
    },
  ],
  sources: [
    'Anthropic (2024). Introducing computer use; Introducing the Model Context Protocol.',
    'OpenAI (2025). Introducing deep research.',
    'Wang, L. et al. (2024). A survey on large language model based autonomous agents. Frontiers of Computer Science, 18, 186345.',
  ],
  related: ['agentic-ai/trends/trends', 'agentic-ai/trends/work-and-learning', 'agentic-ai/threats/security'],
}

export default guide
