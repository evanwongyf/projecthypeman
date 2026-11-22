import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'A chatbot answers a message. An agent is given a goal and works towards it over many steps: it plans, calls tools (search, code, files, browsers, other programs), looks at the results, and decides what to do next until the goal is met or it gives up. Since 2023, large language models have become good enough to drive this loop for real tasks, and “agentic AI” has become one of the fastest-moving areas of technology.',
  nutshell: [
    'An agent = a **model** + **tools** + a **loop** that feeds tool results back to the model + some **memory**.',
    'The core maths problem is **compounding**: small per-step error rates multiply over long tasks.',
    'Agents are already used for **coding, research, customer service and computer use**; the length of tasks they can complete has been doubling every few months.',
    'Giving a model the power to act brings new threats: **prompt injection**, misuse, data leakage and hard-to-oversee mistakes.',
  ],
  sections: [
    {
      id: 'ladder',
      title: 'From chatbot to agent',
      blocks: [
        { t: 'levels', caption: 'A ladder of autonomy, from least to most.', items: [
          { name: 'Chat', body: 'Answer one message. No tools, no actions.' },
          { name: 'Tool-assisted answer', body: 'Call one tool (a search, a calculator) and answer.' },
          { name: 'Workflow', body: 'A fixed sequence of model calls and tools designed by a person (summarise → translate → email).' },
          { name: 'Agent', body: 'The model chooses which tools to use and in what order, looping until done.' },
          { name: 'Autonomous agent', body: 'Long-running, sets sub-goals, works for hours with little supervision.' },
          { name: 'Multi-agent system', body: 'Many agents dividing and coordinating work.' },
        ] },
        { t: 'flow', title: 'The basic agent loop', loop: 'repeat until the goal is met', nodes: [
          { label: 'Goal and context', tone: 'human' },
          { label: 'Model thinks', sub: 'what next?', tone: 'model' },
          { label: 'Act', sub: 'call a tool', tone: 'process' },
          { label: 'Observe', sub: 'tool result', tone: 'data' },
        ] },
      ],
    },
    {
      id: 'map',
      title: 'What is on this shelf',
      blocks: [
        { t: 'mindmap', center: 'Agentic AI', branches: [
          { label: 'Theory', tone: 'teal', items: ['What is an agent', 'The loop and tools', 'Planning', 'Memory', 'Multi-agent', 'Patterns'] },
          { label: 'Maths', tone: 'orange', items: ['Reliability', 'MDPs, Bellman', 'Search, MCTS', 'Cost, latency', 'Retrieval', 'Evaluation'] },
          { label: 'Trends', tone: 'mint', items: ['Landscape', 'Horizon and cost', 'Work and learning'] },
          { label: 'Threats', tone: 'pink', items: ['Prompt injection', 'Security', 'Alignment', 'Misuse', 'Defences'] },
        ] },
        { t: 'table', head: ['If you want…', 'Read'], rows: [
          ['The idea, no maths', '[What is an agent?](@agentic-ai/theory/what-is-an-agent), [The agent loop](@agentic-ai/theory/the-agent-loop), [Landscape](@agentic-ai/trends/landscape)'],
          ['To build one', '[Design patterns](@agentic-ai/theory/design-patterns), [Reliability](@agentic-ai/maths/reliability), [Cost and latency](@agentic-ai/maths/cost-and-latency), [Defences](@agentic-ai/threats/defences)'],
          ['The maths', 'Start with [Reliability](@agentic-ai/maths/reliability), then [Decisions and MDPs](@agentic-ai/maths/decisions-and-mdps)'],
          ['The risks', '[Prompt injection](@agentic-ai/threats/prompt-injection), [Safety and alignment](@agentic-ai/threats/safety-and-alignment)'],
        ] },
        { t: 'callout', tone: 'note', title: 'Background', text: 'For neural networks, transformers and how language models work, see the [AI shelf](@ai/start-here). This shelf assumes only that a language model takes text in and produces text out.' },
      ],
    },
  ],
  related: ['ai/generative/prompting', 'ai/generative/llms', 'ai/generative/reinforcement'],
}

export default guide
