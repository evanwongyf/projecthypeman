import type { ArchiveNode } from '../topics'

// Agentic AI: systems where a model plans, uses tools and acts over many steps towards a goal.
// The theory (what an agent is, the loop, planning, memory, multi-agent systems), the maths
// (reliability over many steps, decisions under uncertainty, search, cost and latency,
// retrieval, evaluation statistics), where the field is heading, and the threats, from prompt
// injection to misuse and loss of oversight, with defences. Every formula has a plain story,
// its symbols spelled out, and a worked example with a reason for each step.

export const AGENTIC_AI: ArchiveNode = {
  slug: 'agentic-ai',
  title: 'Agentic AI',
  blurb: 'AI that plans, uses tools and acts: the agent loop, planning and memory, multi-agent systems, the maths of reliability, search, cost and evaluation with step-by-step worked examples, the trends, and the threats from prompt injection to loss of oversight.',
  glyph: '⟳',
  color: 'color-mix(in srgb, var(--lavender) 55%, var(--teal))',
  tags: ['agents', 'ai agents', 'agentic', 'llm agents', 'tool use', 'react', 'prompt injection', 'mcp', 'autonomy', 'ai safety', 'multi-agent'],
  children: [
    { slug: 'start-here', title: 'Start here: what agentic AI is', glyph: '★', blurb: 'From chatbot to agent in one page, the shelf map, and what to read first.', minutes: 9, tags: ['overview', 'roadmap'] },
    {
      slug: 'theory',
      title: 'Theory: how agents work',
      glyph: '◇',
      group: 'Theory',
      blurb: 'The agent concept, the perceive–think–act loop, planning and reasoning, memory and context, and systems of many agents.',
      children: [
        { slug: 'what-is-an-agent', title: 'What is an agent?', blurb: 'Russell and Norvig’s agent types, PEAS, environments, levels of autonomy, and workflows versus agents.', minutes: 12, tags: ['agent', 'peas', 'rational agent', 'autonomy levels', 'environment'] },
        { slug: 'the-agent-loop', title: 'The agent loop and tool use', blurb: 'Observe, think, act: ReAct, function calling, tool schemas, stopping conditions and a full traced example.', minutes: 13, tags: ['react', 'tool use', 'function calling', 'agent loop', 'observation'] },
        { slug: 'planning-and-reasoning', title: 'Planning and reasoning', blurb: 'Chain of thought, self-consistency, plan-and-execute, tree search, reflection and when each helps.', minutes: 13, tags: ['chain of thought', 'self-consistency', 'tree of thoughts', 'reflexion', 'planning', 'reasoning models'] },
        { slug: 'memory-and-context', title: 'Memory and context', blurb: 'The context window, short- and long-term memory, retrieval-augmented generation, summarisation and context engineering.', minutes: 12, tags: ['memory', 'context window', 'rag', 'retrieval', 'vector database', 'context engineering'] },
        { slug: 'multi-agent', title: 'Multi-agent systems', blurb: 'Orchestrator–worker, debate, pipelines and swarms, the protocols agents use to talk, and when one agent is better than many.', minutes: 12, tags: ['multi-agent', 'orchestrator', 'subagents', 'debate', 'a2a', 'mcp'] },
        { slug: 'design-patterns', title: 'Design patterns for agentic systems', blurb: 'Prompt chaining, routing, parallelisation, orchestrator–workers and evaluator–optimiser, with when to use each.', minutes: 12, tags: ['workflows', 'prompt chaining', 'routing', 'evaluator optimizer', 'patterns'] },
      ],
    },
    {
      slug: 'maths',
      title: 'The maths of agents',
      glyph: '∑',
      group: 'Maths',
      blurb: 'Reliability over many steps, decisions and MDPs, search and planning, cost and latency, retrieval, and the statistics of evaluating agents, each with worked examples.',
      children: [
        { slug: 'reliability', title: 'Reliability over many steps', blurb: 'Why 95% per step becomes 36% over twenty, retries, verification, pass@k and pass^k.', minutes: 15, tags: ['compounding errors', 'pass@k', 'retries', 'verification', 'reliability'] },
        { slug: 'decisions-and-mdps', title: 'Decisions, rewards and MDPs', blurb: 'Expected utility, Markov decision processes, discounting, the Bellman equation and exploration with bandits.', minutes: 16, tags: ['mdp', 'bellman', 'expected utility', 'discount', 'bandit', 'ucb', 'reinforcement learning'] },
        { slug: 'search-and-planning', title: 'Search and planning maths', blurb: 'Branching factors, beam search, best-of-n, Monte Carlo tree search and the UCT formula.', minutes: 14, tags: ['search', 'branching factor', 'beam search', 'best of n', 'mcts', 'uct'] },
        { slug: 'cost-and-latency', title: 'Cost, tokens and latency', blurb: 'Token budgets, the quadratic cost of growing context, caching, parallel speed-ups and Amdahl’s law.', minutes: 13, tags: ['tokens', 'cost', 'latency', 'caching', 'amdahl', 'parallel'] },
        { slug: 'retrieval-maths', title: 'Retrieval and embeddings maths', blurb: 'Cosine similarity, top-k retrieval, precision and recall at k, and reciprocal rank fusion.', minutes: 13, tags: ['cosine similarity', 'embeddings', 'recall@k', 'mrr', 'rrf', 'vector search'] },
        { slug: 'evaluating-agents', title: 'Evaluating agents', blurb: 'Benchmarks, success rates with confidence intervals, comparing two agents, LLM judges and the time-horizon metric.', minutes: 14, tags: ['evaluation', 'benchmarks', 'confidence interval', 'wilson', 'swe-bench', 'time horizon'] },
      ],
    },
    {
      slug: 'trends',
      title: 'Trends and uses',
      glyph: '↗',
      group: 'The field',
      blurb: 'Where agents are used now, the trends in capability and cost, and how agentic work changes jobs and learning.',
      children: [
        { slug: 'landscape', title: 'The agent landscape', blurb: 'Coding agents, computer use, deep research, customer service, science and the protocols that connect them.', minutes: 12, tags: ['coding agents', 'computer use', 'deep research', 'mcp', 'applications'] },
        { slug: 'trends', title: 'Trends: horizon, cost and autonomy', blurb: 'Longer tasks, falling prices, reasoning models, standard protocols and what to watch, with the doubling-time maths.', minutes: 12, tags: ['trends', 'time horizon', 'doubling', 'scaling', 'reasoning models'] },
        { slug: 'work-and-learning', title: 'Agents, work and learning', blurb: 'Which tasks change first, human–agent teaming, and what students should learn in an agentic world.', minutes: 11, tags: ['jobs', 'future of work', 'education', 'skills', 'human in the loop'] },
      ],
    },
    {
      slug: 'threats',
      title: 'Threats and defences',
      glyph: '⚠',
      group: 'The field',
      blurb: 'Prompt injection, security threats to tools and data, misuse, safety and alignment failures, societal risks and the defences that work.',
      children: [
        { slug: 'prompt-injection', title: 'Prompt injection', blurb: 'Direct and indirect injection, the “lethal trifecta”, real incidents and why it is so hard to fix.', minutes: 13, tags: ['prompt injection', 'indirect injection', 'lethal trifecta', 'jailbreak', 'exfiltration'] },
        { slug: 'security', title: 'Security threats to agentic systems', blurb: 'The OWASP LLM top 10, excessive agency, tool and supply-chain attacks, memory poisoning and data leakage.', minutes: 13, tags: ['owasp', 'excessive agency', 'supply chain', 'memory poisoning', 'data leakage', 'mcp security'] },
        { slug: 'safety-and-alignment', title: 'Safety and alignment risks', blurb: 'Specification gaming, reward hacking, deception, power-seeking arguments and the problem of oversight at scale.', minutes: 13, tags: ['alignment', 'reward hacking', 'specification gaming', 'deception', 'oversight', 'ai safety'] },
        { slug: 'misuse-and-society', title: 'Misuse and societal risks', blurb: 'Scams and fraud at scale, cyber offence, misinformation, over-reliance, accountability and concentration of power.', minutes: 12, tags: ['misuse', 'fraud', 'misinformation', 'accountability', 'regulation', 'eu ai act'] },
        { slug: 'defences', title: 'Defences and governance', blurb: 'Least privilege, sandboxes, human approval, monitoring, red-teaming, the risk maths of layered defences and governance frameworks.', minutes: 14, tags: ['defence in depth', 'least privilege', 'sandbox', 'human in the loop', 'red teaming', 'nist ai rmf'] },
      ],
    },
  ],
}
