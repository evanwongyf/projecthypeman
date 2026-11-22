import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A language model has no memory between calls: everything it knows about the current task must be in its context window, the block of text (measured in tokens) that it reads each turn. Agents that work for hours, or across days, need ways to decide what goes into that window. This has become its own discipline, sometimes called context engineering.',
  nutshell: [
    '**Working memory** is the context window: typically hundreds of thousands of tokens in 2025, but attention to detail can degrade as it fills.',
    '**Long-term memory** is stored outside the model (files, databases, vector stores) and brought back by **retrieval**.',
    '**RAG** (retrieval-augmented generation): find relevant passages and put them in the context before answering.',
    'Long tasks need **compaction**: summarising old history so the important facts survive.',
  ],
  sections: [
    {
      id: 'kinds',
      title: 'Kinds of agent memory',
      blocks: [
        { t: 'table', head: ['Kind', 'Human analogy', 'In an agent'], rows: [
          ['Working', 'What you are thinking about now', 'The context window: instructions, recent turns, tool results'],
          ['Episodic', 'Memories of events', 'Logs or summaries of past sessions and actions'],
          ['Semantic', 'Facts you know', 'A knowledge base, documentation, a vector store of notes'],
          ['Procedural', 'Skills', 'Saved instructions, scripts, tool definitions, the model’s trained weights'],
        ] },
      ],
    },
    {
      id: 'rag',
      title: 'Retrieval-augmented generation',
      blocks: [
        { t: 'flow', nodes: [
          { label: 'Documents', sub: 'split into chunks', tone: 'data' },
          { label: 'Embed', sub: 'each chunk → vector', tone: 'model' },
          { label: 'Store', sub: 'vector index', tone: 'data' },
          { label: 'Query', sub: 'embed the question; find nearest chunks', tone: 'process' },
          { label: 'Generate', sub: 'answer using retrieved chunks, with citations', tone: 'output' },
        ] },
        { t: 'p', text: 'RAG lets a model answer from documents it was never trained on and cite them. Agents often go further with **agentic retrieval**: the model decides what to search for, reads the results, and searches again, instead of one fixed retrieval step. The maths of similarity search is in [Retrieval maths](@agentic-ai/maths/retrieval-maths).' },
      ],
    },
    {
      id: 'context-engineering',
      title: 'Context engineering',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Put the important things first and last', body: 'Studies of long contexts (Liu et al., 2023, “Lost in the middle”) found models used information at the start and end of a long input more reliably than in the middle.' },
          { title: 'Compact history', body: 'Replace old tool outputs with short summaries; keep decisions, open questions and file names.' },
          { title: 'Notes to self', body: 'Let the agent write a progress file or to-do list it can re-read, so a fresh context can resume the task.' },
          { title: 'Just-in-time loading', body: 'Keep references (file paths, URLs) in context and load content only when needed.' },
          { title: 'Subagents', body: 'Give a focused subtask to a separate agent with a clean context; return only its conclusion.' },
          { title: 'Trim tool output', body: 'Design tools to return the relevant few lines, not a 10,000-line log.' },
        ] },
        { t: 'callout', tone: 'warn', title: 'Memory is an attack surface', text: 'Anything stored in memory and later read back is a place an attacker can plant instructions (“memory poisoning”). See [Security threats](@agentic-ai/threats/security).' },
      ],
    },
  ],
  sources: [
    'Lewis, P. et al. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. NeurIPS.',
    'Liu, N. F. et al. (2023). Lost in the middle: How language models use long contexts. arXiv:2307.03172 (TACL 2024).',
    'Park, J. S. et al. (2023). Generative agents: Interactive simulacra of human behavior. UIST.',
    'Anthropic (2025). Effective context engineering for AI agents.',
  ],
  related: ['agentic-ai/maths/retrieval-maths', 'agentic-ai/maths/cost-and-latency', 'ai/neural/embeddings'],
}

export default guide
