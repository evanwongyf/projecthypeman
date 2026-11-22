import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'No single defence makes an agent safe. Good practice borrows from safety engineering: layer several independent defences so that a failure in one is caught by another (the “Swiss cheese” model), and design so that the worst a compromised or mistaken agent can do is limited. This guide covers the layers, the maths of layering, and the governance around them.',
  nutshell: [
    '**Limit capability**: least privilege, sandboxes, no standing credentials.',
    '**Limit actions**: approvals for irreversible or external actions, budgets and rate limits.',
    '**Watch**: logging, monitoring, anomaly detection.',
    '**Test**: red-teaming and evaluations before and after launch.',
    'Independent layers multiply: three layers that each stop 90% let through about 0.1%, if independent.',
  ],
  sections: [
    {
      id: 'layers',
      title: 'Defence in depth',
      blocks: [
        { t: 'levels', caption: 'Layers from the outside in.', items: [
          { name: 'Governance', body: 'Who may deploy which agents for what; risk assessment; incident response plans.' },
          { name: 'Environment', body: 'Sandboxed containers or VMs, network allow-lists, read-only mounts, no production secrets.' },
          { name: 'Permissions', body: 'Scoped tools and credentials per task; separate agents for reading untrusted content and for privileged actions.' },
          { name: 'Action gates', body: 'Human approval for high-impact actions; dry-run modes; undo and backups.' },
          { name: 'Model behaviour', body: 'Safety-trained models, system instructions, injection classifiers.' },
          { name: 'Monitoring', body: 'Logs of every tool call, alerts on unusual patterns, periodic human review.' },
        ] },
        {
          t: 'math',
          tex: String.raw`P(\text{breach}) = \prod_{i=1}^{L} (1 - d_i)`,
          caption: 'Chance a threat passes all L independent layers, where layer i stops it with probability dᵢ.',
          plain: 'A harmful action only gets through if it slips past every layer. If the layers fail independently, multiply their individual pass-through rates. The catch is independence: layers that share a weakness (all relying on the same model’s judgement) fail together, and the real risk is much higher than the product.',
          where: [
            { sym: 'L', def: 'number of layers' },
            { sym: String.raw`d_i`, def: 'chance layer i stops the threat' },
          ],
          syntax: [
            { sym: String.raw`\prod_{i=1}^{L}`, say: '“the product for i from 1 to L”: multiply one term per layer' },
          ],
          worked: {
            title: 'Three layers against data exfiltration',
            steps: [
              'Injection classifier stops 90%; network allow-list stops 95%; human approval for outbound email stops 90%.',
              String.raw`Pass-through rates: \(0.10, 0.05, 0.10\).`,
              String.raw`\(P = 0.10 \times 0.05 \times 0.10 = 0.0005\).`,
              'If the classifier and the approval step both depend on the same misleading summary written by the agent, they are correlated: treat them closer to one layer, giving about 0.10 × 0.05 = 0.005, ten times higher.',
            ],
            why: [
              'estimate each layer’s stopping rate',
              'turn them into chances of getting through',
              'multiply, assuming independence',
              'check the independence assumption; correlated layers count for much less',
            ],
            answer: 'About 1 in 2,000 if the layers are truly independent; about 1 in 200 if two of them share a weakness. Design layers that fail for different reasons: code-enforced rules beat model judgement.',
          },
        },
      ],
    },
    {
      id: 'practices',
      title: 'Practices that work',
      blocks: [
        { t: 'table', head: ['Practice', 'Detail'], rows: [
          ['Least privilege', 'Each agent gets the narrowest tools, files and credentials for its task, revoked when done'],
          ['Sandboxing', 'Run code and browsing in isolated environments; reset after each task'],
          ['Deterministic guards', 'Code-level rules the model cannot override: blocked commands, allowed domains, spending caps'],
          ['Human in the loop for irreversible actions', 'Show the exact action and its effect; avoid approval fatigue by not asking for trivial ones'],
          ['Privilege separation', 'A quarantined model reads untrusted data; a privileged one plans actions without seeing raw untrusted text'],
          ['Logging and audit', 'Immutable logs of prompts, tool calls and outputs, kept for investigation'],
          ['Red-teaming', 'Attack your own agent with injections and misuse scenarios before launch'],
          ['Staged rollout', 'Internal users first, then limited release, watching incident rates'],
          ['Kill switch', 'A tested way to stop all agents and revoke their credentials quickly'],
        ] },
      ],
    },
    {
      id: 'checklist',
      title: 'Before you give an agent a new power',
      blocks: [
        { t: 'checklist', items: [
          'What is the worst thing this tool could do if the agent were tricked?',
          'Can the action be undone? If not, who approves it?',
          'Does the agent also read untrusted content? Then can it reach private data or send data out?',
          'Is there a code-enforced limit (amount, recipient, path) independent of the model?',
          'Will we know if it misbehaves? Who reads the logs?',
          'How do we turn it off?',
        ] },
      ],
    },
  ],
  sources: [
    'Reason, J. (1990). Human Error. Cambridge University Press (the Swiss cheese model).',
    'NIST (2023). AI Risk Management Framework 1.0.',
    'OWASP (2025). Agentic AI: Threats and Mitigations.',
    'Greenblatt, R. et al. (2023). AI control: Improving safety despite intentional subversion. arXiv:2312.06942.',
  ],
  related: ['agentic-ai/threats/prompt-injection', 'agentic-ai/threats/security', 'cybersecurity/start-here'],
}

export default guide
