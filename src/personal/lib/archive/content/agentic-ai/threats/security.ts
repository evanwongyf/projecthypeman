import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Agents combine a model that can be manipulated with tools that can do real things. That makes them a new kind of security problem: classic issues (supply chain, privilege, data leakage) appear in new forms, and some threats (excessive agency, memory poisoning) are unique to agents. This guide maps the threats using the OWASP Top 10 for LLM applications and agent-specific additions.',
  nutshell: [
    'The **OWASP Top 10 for LLM applications (2025)** starts with prompt injection, sensitive information disclosure and supply chain risks, and includes **excessive agency**.',
    '**Excessive agency**: too many tools, too much permission, or too much autonomy for the task.',
    '**Tool and MCP supply chain**: a malicious or compromised tool server can inject instructions or steal data.',
    '**Memory poisoning**: planted content in long-term memory that steers future sessions.',
  ],
  sections: [
    {
      id: 'owasp',
      title: 'OWASP Top 10 for LLM applications (2025)',
      blocks: [
        { t: 'table', head: ['ID', 'Risk', 'In an agent'], rows: [
          ['LLM01', 'Prompt injection', 'Planted instructions in pages, emails or tool output'],
          ['LLM02', 'Sensitive information disclosure', 'Leaking secrets, personal data or system details'],
          ['LLM03', 'Supply chain', 'Compromised models, plug-ins, MCP servers, packages'],
          ['LLM04', 'Data and model poisoning', 'Tampered training data, fine-tunes or retrieval stores'],
          ['LLM05', 'Improper output handling', 'Running model-written code or SQL without checks'],
          ['LLM06', 'Excessive agency', 'Tools and permissions beyond what the task needs'],
          ['LLM07', 'System prompt leakage', 'Secrets placed in prompts get revealed'],
          ['LLM08', 'Vector and embedding weaknesses', 'Poisoned or leaky retrieval stores'],
          ['LLM09', 'Misinformation', 'Confident false outputs acted upon'],
          ['LLM10', 'Unbounded consumption', 'Runaway loops and cost; denial of wallet'],
        ] },
      ],
    },
    {
      id: 'agent-specific',
      title: 'Agent-specific threats',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Tool poisoning', body: 'A tool’s description or output contains hidden instructions. Because tool descriptions are loaded into context, a malicious MCP server can influence the agent even when its tool is never called.' },
          { title: 'Confused deputy', body: 'The agent has more privilege than the person instructing it (for example, a support bot with admin database access) and can be talked into using it on their behalf.' },
          { title: 'Memory poisoning', body: 'An attacker gets content stored in the agent’s memory or knowledge base that later sessions trust.' },
          { title: 'Credential exposure', body: 'API keys in environment variables, files or prompts that the agent can read and leak.' },
          { title: 'Destructive actions', body: 'A mistaken or manipulated agent deletes files, drops tables, force-pushes code or sends emails.' },
          { title: 'Agent-to-agent spread', body: 'A compromised agent passes injected instructions to others in a multi-agent system.' },
        ] },
      ],
    },
    {
      id: 'risk',
      title: 'Scoring the risk of a tool',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Risk}(\text{tool}) = P(\text{misuse}) \times \text{Impact} \times \text{Reach}`,
          caption: 'A simple heuristic for ranking which tools need the strongest controls.',
          plain: 'Tools differ hugely in danger. Estimate how likely the agent is to misuse a tool (by error or manipulation), how bad one misuse would be, and how many people or records it could affect. Multiplying gives a rough ranking so the strongest controls (human approval, sandboxing) go where they matter most.',
          where: [
            { sym: 'P(misuse)', def: 'rough probability per task of a harmful call' },
            { sym: 'Impact', def: 'harm from one misuse, on a 1–10 scale' },
            { sym: 'Reach', def: 'how widely the harm spreads, on a 1–10 scale' },
          ],
          syntax: [
            { sym: String.raw`\times`, say: '“times”' },
          ],
          worked: {
            title: 'Three tools for an email assistant',
            steps: [
              String.raw`Read inbox: \(0.05 \times 3 \times 2 = 0.3\).`,
              String.raw`Send email: \(0.02 \times 7 \times 6 = 0.84\).`,
              String.raw`Delete all mail: \(0.005 \times 9 \times 8 = 0.36\).`,
              'Rank: send (0.84) > delete (0.36) > read (0.3).',
            ],
            why: [
              'reading is common but only exposes data to the agent itself',
              'sending is rarer but can leak data or impersonate the user to many people',
              'deletion is very rare but devastating',
              'sort to decide where controls go first',
            ],
            answer: 'Require approval for sending; remove bulk delete entirely (it is not needed for the task); allow reading. The numbers are judgements, but writing them down forces the conversation.',
          },
        },
      ],
    },
    {
      id: 'checklist',
      title: 'A security checklist for agent builders',
      blocks: [
        { t: 'checklist', items: [
          'List every tool and permission; remove anything the task does not need',
          'Run agents in sandboxes (containers, VMs) with no production credentials',
          'Allow-list network destinations',
          'Require human approval for irreversible or external actions',
          'Vet MCP servers and plug-ins like any third-party code; pin versions',
          'Never put secrets in prompts; use scoped, short-lived credentials',
          'Validate model outputs before executing them (code, SQL, shell)',
          'Set budgets and rate limits',
          'Log all tool calls and review them',
          'Red-team with injection attempts before launch',
        ] },
      ],
    },
  ],
  sources: [
    'OWASP (2025). Top 10 for Large Language Model Applications.',
    'OWASP (2025). Agentic AI: Threats and Mitigations.',
    'Invariant Labs (2025). MCP security notification: Tool poisoning attacks.',
    'NIST (2024). AI 600-1: Generative AI Profile of the AI Risk Management Framework.',
  ],
  related: ['agentic-ai/threats/prompt-injection', 'agentic-ai/threats/defences', 'cybersecurity/start-here'],
}

export default guide
