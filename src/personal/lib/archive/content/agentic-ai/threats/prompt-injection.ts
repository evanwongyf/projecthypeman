import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A language model reads instructions and data in the same stream of text, and cannot reliably tell them apart. Prompt injection exploits this: text planted in a web page, email, document or tool result tells the agent to do something its user never asked for. For chatbots it is embarrassing; for agents with tools, it can mean stolen data or unauthorised actions. It is widely regarded as the top security risk of LLM applications.',
  nutshell: [
    '**Direct injection**: the user types instructions to override the system’s rules (overlaps with jailbreaking).',
    '**Indirect injection** (Greshake et al., 2023): instructions hidden in content the agent reads while working.',
    'Simon Willison’s **lethal trifecta**: access to **private data**, exposure to **untrusted content**, and the ability to **communicate externally**. An agent with all three can be tricked into exfiltrating data.',
    'No known model-level defence is complete; safety comes from **system design**: limiting what a compromised agent can do.',
  ],
  sections: [
    {
      id: 'how',
      title: 'How indirect injection works',
      blocks: [
        { t: 'flow', nodes: [
          { label: 'User', sub: '“Summarise my unread emails.”', tone: 'human' },
          { label: 'Agent reads email', sub: 'one contains hidden instructions', tone: 'data' },
          { label: 'Model', sub: 'treats the planted text as a task', tone: 'model' },
          { label: 'Tool call', sub: 'forwards private data to an outsider', tone: 'process' },
        ] },
        { t: 'p', text: 'The planted text can be invisible to people (white text, tiny font, HTML comments, image alt text, metadata) but perfectly visible to the model. Researchers have demonstrated injections via web pages, emails, calendar invites, code comments, issue trackers, PDF résumés and the descriptions of MCP tools.' },
      ],
    },
    {
      id: 'trifecta',
      title: 'The lethal trifecta',
      blocks: [
        { t: 'cards', cols: 3, items: [
          { title: 'Private data', body: 'The agent can read emails, files, databases, credentials or chat history.' },
          { title: 'Untrusted content', body: 'The agent reads anything an outsider could write: web pages, incoming email, shared documents, public issues.' },
          { title: 'External communication', body: 'The agent can send data out: emails, web requests, posting comments, even loading an image from a URL that encodes data.' },
        ] },
        { t: 'callout', tone: 'warn', title: 'Break the triangle', text: 'If an agent has all three, assume an attacker who can get text in front of it can get your data out. Removing any one leg (no private data, only trusted inputs, or no outbound channel) closes the most dangerous path.' },
      ],
    },
    {
      id: 'why-hard',
      title: 'Why it is hard to fix',
      blocks: [
        { t: 'list', items: [
          'Instructions and data are both just tokens; there is no reliable “data only” channel inside the model.',
          'Filters and classifiers catch known patterns but attackers rephrase; a filter that stops 99% of attempts fails against a determined attacker who can try many times.',
          'Training models to resist injection helps but has not reached the reliability needed for security guarantees.',
          'Agents are useful precisely because they read and act on outside content.',
        ] },
        {
          t: 'math',
          tex: String.raw`P(\text{at least one success}) = 1 - (1 - q)^{m}`,
          caption: 'Chance an attacker succeeds at least once in m independent attempts, if each succeeds with probability q.',
          plain: 'Defences that “usually” work are not enough when attackers can try many times. If a single attempt gets through with a small probability, many attempts make at least one success likely.',
          where: [
            { sym: 'q', def: 'chance one injection attempt succeeds' },
            { sym: 'm', def: 'number of attempts (e.g. pages or emails planted)' },
          ],
          syntax: [
            { sym: String.raw`(1-q)^{m}`, say: 'chance every one of m attempts fails' },
          ],
          worked: {
            title: 'A defence that stops 99% of attempts',
            steps: [
              String.raw`\(q = 0.01\).`,
              String.raw`\(m = 100\): \(1 - 0.99^{100} = 1 - 0.366 = 0.634\).`,
              String.raw`\(m = 500\): \(1 - 0.99^{500} \approx 1 - 0.0066 = 0.993\).`,
            ],
            why: [
              'the filter lets 1 in 100 through',
              'a hundred planted messages: more likely than not that one works',
              'five hundred: almost certain',
            ],
            answer: 'A 99% filter is a weak security boundary against a persistent attacker. That is why architecture (what the agent is allowed to do) matters more than detection.',
          },
        },
      ],
    },
    {
      id: 'mitigations',
      title: 'Mitigations',
      blocks: [
        { t: 'table', head: ['Mitigation', 'What it does', 'Limit'], rows: [
          ['Least privilege', 'Give the agent only the tools and data the task needs', 'Must be designed per task'],
          ['Human approval for sensitive actions', 'Sending email, payments, deleting, sharing externally', 'Approval fatigue'],
          ['Egress controls', 'Block or allow-list outbound network destinations', 'Some tasks need the open web'],
          ['Separate privileges (dual-LLM, CaMeL-style designs)', 'A privileged planner never sees untrusted text; a quarantined model processes it without tool access', 'More complex; less flexible'],
          ['Mark untrusted content', 'Delimit and label external text; instruct the model to treat it as data', 'Helps but is not a guarantee'],
          ['Detection classifiers', 'Flag likely injections', 'Bypassable; one layer of several'],
          ['Monitoring and logs', 'Spot unusual tool calls; investigate afterwards', 'Detects rather than prevents'],
        ] },
      ],
    },
  ],
  sources: [
    'Greshake, K. et al. (2023). Not what you’ve signed up for: Compromising real-world LLM-integrated applications with indirect prompt injection. AISec / arXiv:2302.12173.',
    'Willison, S. (2025). The lethal trifecta for AI agents. simonwillison.net.',
    'OWASP (2025). Top 10 for Large Language Model Applications: LLM01 Prompt Injection.',
    'Debenedetti, E. et al. (2025). Defeating prompt injections by design (CaMeL). arXiv:2503.18813.',
  ],
  related: ['agentic-ai/threats/security', 'agentic-ai/threats/defences', 'cybersecurity/start-here'],
}

export default guide
