import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Agents lower the cost of doing things at scale, including harmful things. And even when used as intended, they raise questions about accountability, dependence, jobs and power. This guide surveys the main misuse and societal risks and the responses being developed.',
  nutshell: [
    '**Fraud and scams** become cheaper and more personalised: phishing, fake customer service, voice cloning.',
    '**Cyber offence**: agents can speed up finding and exploiting vulnerabilities, though defenders get the same tools.',
    '**Misinformation and manipulation** at scale: fake accounts, tailored persuasion.',
    '**Accountability**: who is responsible when an agent causes harm?',
    '**Over-reliance and deskilling**, **labour disruption** and **concentration of power**.',
  ],
  sections: [
    {
      id: 'misuse',
      title: 'Misuse',
      blocks: [
        { t: 'table', head: ['Risk', 'What changes with agents', 'Responses'], rows: [
          ['Scams and phishing', 'Personalised messages at scale; agents that hold conversations', 'Verification habits, caller ID authentication, bank cooling-off periods, education'],
          ['Cyber attacks', 'Automating reconnaissance and exploit attempts', 'Use agents for defence (patching, monitoring); lab safeguards; responsible disclosure'],
          ['Disinformation', 'Networks of agent-run accounts that post and reply convincingly', 'Platform detection, content provenance (C2PA), media literacy'],
          ['Harassment', 'Automated, persistent targeting', 'Platform rules, rate limits, legal remedies'],
          ['Dangerous knowledge', 'Agents that research and plan multi-step tasks', 'Lab usage policies and evaluations for chemical, biological and cyber uplift'],
        ] },
        { t: 'callout', tone: 'tip', title: 'Protect yourself', text: 'Agree a family code word for urgent money requests, call back on a number you already know, never let urgency rush you, and treat unexpected messages with links or attachments as suspect, however personal they look.' },
      ],
    },
    {
      id: 'society',
      title: 'Societal risks',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Accountability gaps', body: 'If an agent books the wrong flight, defames someone or breaks a law, responsibility may be split between the user, the deployer, the tool provider and the model developer. Laws are still catching up.' },
          { title: 'Over-reliance', body: 'People accept agent outputs uncritically (automation bias) and lose skills they no longer practise.' },
          { title: 'Labour disruption', body: 'Task automation can reduce demand for some roles and create others; transitions can be painful and uneven.' },
          { title: 'Concentration of power', body: 'Capable agents need large models and compute that few organisations control.' },
          { title: 'Privacy', body: 'Agents with access to email, files and browsing see everything; data may be logged or used for training unless controlled.' },
          { title: 'Environmental cost', body: 'Long agent runs use far more computation than single answers.' },
        ] },
      ],
    },
    {
      id: 'governance',
      title: 'Regulation and governance',
      blocks: [
        { t: 'table', head: ['Instrument', 'Key points'], rows: [
          ['EU AI Act (in force August 2024; obligations phase in 2025–2027)', 'Bans some practices; strict rules for high-risk uses; transparency duties; obligations for general-purpose AI model providers'],
          ['NIST AI Risk Management Framework (US, 2023) and its Generative AI Profile (2024)', 'Voluntary: govern, map, measure, manage'],
          ['Singapore Model AI Governance Framework (2019, 2020; Generative AI edition 2024)', 'Accountability, data, trusted development, incident reporting, testing, security, content provenance'],
          ['AI Verify (Singapore)', 'A testing framework and toolkit for responsible AI'],
          ['Frontier lab safety policies', 'Capability thresholds that trigger stronger safeguards before release'],
        ] },
      ],
    },
  ],
  sources: [
    'European Union (2024). Regulation (EU) 2024/1689 (Artificial Intelligence Act).',
    'NIST (2023). AI Risk Management Framework 1.0; NIST AI 600-1 (2024).',
    'IMDA and AI Verify Foundation (2024). Model AI Governance Framework for Generative AI.',
    'Bengio, Y. et al. (2025). International AI Safety Report.',
  ],
  related: ['agentic-ai/threats/defences', 'ai/practice/ethics', 'criminology/start-here'],
}

export default guide
