import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Threat modelling is the practice of asking, before a system is built or shipped, what can go wrong and what will we do about it. It works on a diagram, not on code, so it is cheap, and it finds design flaws that no scanner will. This guide covers data-flow diagrams, trust boundaries, the STRIDE categories, attack trees with their arithmetic, and a short worked example.',
  nutshell: [
    'Four questions (Shostack): **What are we building? What can go wrong? What are we going to do about it? Did we do a good job?**',
    'Draw a **data-flow diagram**: processes, data stores, external entities, data flows and **trust boundaries** where control changes.',
    '**STRIDE** is a checklist of six threat types: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege.',
    'An **attack tree** breaks a goal into AND/OR sub-goals; assigning costs to leaves shows the cheapest path.',
  ],
  sections: [
    {
      id: 'dfd',
      title: 'Data-flow diagrams and trust boundaries',
      lead: 'Draw what moves where.',
      blocks: [
        {
          t: 'flow',
          title: 'A simple web application',
          nodes: [
            { label: 'Browser (user)', sub: 'external entity, untrusted', tone: 'human' },
            { label: 'Trust boundary: internet to server', sub: 'TLS, authentication', tone: 'process' },
            { label: 'Web app', sub: 'process', tone: 'model' },
            { label: 'Trust boundary: app to database', sub: 'least-privilege DB account', tone: 'process' },
            { label: 'Database', sub: 'data store', tone: 'data' },
          ],
          caption: 'Every arrow that crosses a boundary is a place to ask what an attacker could do with it.',
        },
        { t: 'p', text: 'A **trust boundary** is where the level of trust changes: from the internet to your server, from a user’s browser to your code, from one tenant to another, from your code to a third-party library. Data that crosses it must be authenticated, validated and logged, because the side it came from is not under your control.' },
      ],
    },
    {
      id: 'stride',
      title: 'STRIDE',
      lead: 'Six questions to ask of each element.',
      blocks: [
        {
          t: 'table',
          head: ['Threat', 'Violates', 'Question', 'Example', 'Typical mitigation'],
          rows: [
            ['**S**poofing', 'Authentication', 'Can someone pretend to be another user or system?', 'Stolen session cookie', 'Strong authentication, MFA'],
            ['**T**ampering', 'Integrity', 'Can data or code be changed without detection?', 'Altered price in a request', 'Server-side validation, signatures, MACs'],
            ['**R**epudiation', 'Non-repudiation', 'Can someone deny doing something?', '"I never approved that payment"', 'Audit logs, signed records'],
            ['**I**nformation disclosure', 'Confidentiality', 'Can someone read what they should not?', 'Verbose error leaks a path; open storage bucket', 'Encryption, access control'],
            ['**D**enial of service', 'Availability', 'Can someone stop the service?', 'Request flood', 'Rate limiting, capacity, CDN'],
            ['**E**levation of privilege', 'Authorisation', 'Can someone do more than they are allowed?', 'A user reaching admin functions', 'Least privilege, authorisation checks on every request'],
          ],
        },
      ],
    },
    {
      id: 'tree',
      title: 'Attack trees',
      lead: 'Costing the attacker’s options.',
      blocks: [
        { t: 'p', text: 'An attack tree (Schneier, 1999) puts an attacker’s goal at the root and lists the ways to achieve it as children. **OR** nodes mean any child suffices; **AND** nodes mean all are needed. Assign each leaf a cost (money, time, skill, risk of detection) and propagate upwards.' },
        {
          t: 'math',
          tex: String.raw`C(\text{OR})=\min_i C_i,\qquad C(\text{AND})=\sum_i C_i`,
          caption: 'Propagating cost up an attack tree: the attacker chooses the cheapest alternative at an OR, and must pay for every part of an AND.',
          where: [{ sym: 'C_i', def: 'the cost of child node i' }],
          syntax: [
            { sym: '\\min_i C_i', say: 'the cheapest branch. Effect: strengthening an expensive branch changes nothing; only the cheapest matters. Why: a rational attacker picks it.' },
            { sym: '\\sum_i C_i', say: 'the total of all required steps. Effect: adding a required step raises the cost of the whole path. Why: all must be completed.' },
          ],
          worked: {
            title: 'Read a customer’s email',
            steps: ['Goal: read the email. OR of: (a) guess/steal the password, (b) phish them, (c) compromise the mail server.', '(a) steal password via a leaked credential list: $50. (b) phishing: needs a lure ($100) AND a hosting page ($30) AND the user falling for it, $130 total. (c) server compromise: $20,000.', 'Cost of the root: \\(\\min(50, 130, 20{,}000)=\\$50\\).'],
            answer: 'The cheapest path is a reused password. Spending on server hardening (branch c) does nothing for the $50 path; multi-factor authentication would raise (a) and (b) together.',
          },
        },
        {
          t: 'checklist',
          items: [
            'Is there a diagram of the system, with trust boundaries marked?',
            'Has each element and flow been walked through with STRIDE?',
            'Is each threat given a response: mitigate, eliminate, transfer or accept (with an owner)?',
            'Are the mitigations recorded as tests or work items, not just in a document?',
            'Is the model revisited when the design changes?',
          ],
        },
      ],
    },
  ],
  sources: [
    'Shostack, A. (2014). *Threat Modeling: Designing for Security*. Wiley.',
    'Schneier, B. (1999). Attack trees. *Dr. Dobb’s Journal*, December.',
    'Kohnfelder, L. & Garg, P. (1999). *The Threats to Our Products*. Microsoft.',
    'OWASP. *Threat Modeling Cheat Sheet* and the *Threat Modeling Manifesto* (threatmodelingmanifesto.org).',
  ],
  related: ['cybersecurity/foundations/cia-and-risk', 'cybersecurity/foundations/security-principles', 'cybersecurity/red-and-blue/pentest-theory', 'cloud/cloud-security/cloud-red-and-blue'],
}

export default guide
