import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The idea of an agent is much older than language models. In the classic AI textbook by Stuart Russell and Peter Norvig, an agent is anything that perceives its environment through sensors and acts on it through actuators. A thermostat, a chess program, a robot vacuum and a language-model coding assistant are all agents. What has changed is how general the brain of the agent has become.',
  nutshell: [
    'An agent maps a history of **percepts** to **actions**. A **rational agent** chooses actions expected to maximise its performance measure.',
    'Describe any agent task with **PEAS**: performance measure, environment, actuators, sensors.',
    'Environments differ: fully or partially observable, deterministic or stochastic, single- or multi-agent, static or dynamic.',
    'Modern LLM agents are mostly **goal-based** agents with a learned model of the world, using tools as actuators.',
  ],
  sections: [
    {
      id: 'types',
      title: 'Russell and Norvig’s agent types',
      blocks: [
        { t: 'levels', items: [
          { name: 'Simple reflex', body: 'If condition, then action, from the current percept only. A thermostat.' },
          { name: 'Model-based reflex', body: 'Keeps internal state about the parts of the world it cannot see now. A robot vacuum remembering cleaned rooms.' },
          { name: 'Goal-based', body: 'Chooses actions that lead towards a goal, considering future consequences (search and planning). A route planner.' },
          { name: 'Utility-based', body: 'Weighs how good different outcomes are, not just goal or no goal, handling trade-offs and uncertainty. A self-driving car balancing speed and safety.' },
          { name: 'Learning agent', body: 'Improves its behaviour from experience, with a critic giving feedback. A game-playing reinforcement learner.' },
        ] },
      ],
    },
    {
      id: 'peas',
      title: 'PEAS: describing an agent task',
      blocks: [
        { t: 'table', head: ['Agent', 'Performance', 'Environment', 'Actuators', 'Sensors'], rows: [
          ['Coding agent', 'Tests pass; code reviewed and merged', 'A code repository, terminal, issue tracker', 'Edit files, run commands, open pull requests', 'File contents, command output, test results'],
          ['Research agent', 'Accurate, sourced report', 'The web, documents', 'Search, open pages, write report', 'Page text, search results'],
          ['Customer-service agent', 'Issue resolved, customer satisfied, policy followed', 'Customer chat, order database', 'Reply, refund, escalate', 'Customer messages, order records'],
          ['Computer-use agent', 'Task completed in the app', 'A desktop or browser', 'Click, type, scroll', 'Screenshots'],
        ] },
      ],
    },
    {
      id: 'environments',
      title: 'Kinds of environment',
      blocks: [
        { t: 'table', head: ['Property', 'Easy end', 'Hard end', 'For LLM agents'], rows: [
          ['Observability', 'Fully observable (chess)', 'Partially observable (poker)', 'Usually partial: the agent sees only what its tools return'],
          ['Determinism', 'Deterministic', 'Stochastic', 'Stochastic: websites change, tools fail, the model itself samples'],
          ['Episodes', 'Episodic (each decision separate)', 'Sequential (actions affect the future)', 'Sequential: early mistakes compound'],
          ['Change', 'Static', 'Dynamic', 'Often dynamic: other people edit the same files'],
          ['Agents', 'Single', 'Multi-agent, possibly adversarial', 'Increasingly multi-agent; web content may be adversarial'],
        ] },
      ],
    },
    {
      id: 'workflow-vs-agent',
      title: 'Workflows versus agents',
      blocks: [
        { t: 'p', text: 'A useful distinction (used, for example, in Anthropic’s 2024 guidance on building effective agents): in a **workflow**, a person defines the sequence of steps in code, and the model fills in each step. In an **agent**, the model itself decides the steps and which tools to use. Workflows are more predictable and cheaper; agents are more flexible for open-ended tasks where the steps cannot be known in advance.' },
        { t: 'dodont', do: [
          'Start with the simplest design that works: a single model call, then a workflow, then an agent',
          'Use agents when the number of steps is unpredictable and the task is worth the cost',
          'Give clear success criteria and a way to check them (tests, a checklist)',
        ], dont: [
          'Build an autonomous agent when a fixed three-step workflow would do',
          'Give an agent tools with more power than the task needs',
          'Measure an agent by demos instead of repeated trials',
        ] },
      ],
    },
  ],
  sources: [
    'Russell, S., & Norvig, P. (2021). Artificial Intelligence: A Modern Approach (4th ed.). Pearson.',
    'Anthropic (2024). Building effective agents.',
    'Wooldridge, M. (2009). An Introduction to MultiAgent Systems (2nd ed.). Wiley.',
  ],
  related: ['agentic-ai/theory/the-agent-loop', 'agentic-ai/theory/design-patterns', 'ai/foundations/what-is-ai'],
}

export default guide
