import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Defences that have never been tested are assumptions. Red teams play the attacker to test the whole organisation, blue teams defend and detect, and purple teaming joins them so each exercise teaches both. This guide explains the roles, what rules of engagement are, how MITRE ATT&CK and the kill chain give both sides a common language, and how success is measured. Everything here describes authorised exercises run with the organisation’s consent.',
  nutshell: [
    '**Red team:** an authorised group that emulates a real adversary to test people, process and technology. **Blue team:** the defenders who prevent, detect and respond. **Purple:** red and blue working together to improve detections.',
    'A red-team exercise has **objectives** (for example "reach the finance database"), **rules of engagement**, a **white cell** that controls the exercise, and **deconfliction** so real incidents are not confused with the test.',
    '**MITRE ATT&CK** catalogues adversary tactics and techniques; the **Cyber Kill Chain** lists seven stages. Both let defenders map coverage and gaps.',
    'The point is not to "win" but to **find and close gaps** and measure detection and response: coverage, time to detect, time to contain.',
  ],
  sections: [
    {
      id: 'roles',
      title: 'Who does what',
      lead: 'The cast of an exercise.',
      blocks: [
        {
          t: 'table',
          head: ['Role', 'Purpose', 'Typical work'],
          rows: [
            ['Red team', 'Emulate a realistic adversary against the whole organisation (technology, people, physical) toward defined goals', 'Intelligence-led scenarios, stealthy long-running operations, social engineering within agreed limits'],
            ['Blue team', 'Defend: prevent, detect, respond, recover', 'Monitoring, hardening, detection engineering, threat hunting, incident response'],
            ['Purple team', 'Collaborate so that every red action leads to a blue improvement', 'Step-by-step technique replays, building and tuning detections together'],
            ['White cell / control group', 'Sets the rules, watches both sides, can pause the exercise', 'Deconfliction, safety, scoring'],
            ['Penetration testers', 'Find as many vulnerabilities as possible in a defined scope', 'Time-boxed technical assessments (see the next guide)'],
          ],
        },
        { t: 'p', text: 'The difference between a penetration test and a red-team exercise is **breadth and goal**. A pentest asks "what weaknesses exist in this system?"; a red team asks "could a determined adversary achieve this objective against us, and would we notice and respond?" Often the blue team is not told when the exercise starts, so detection and response are tested for real.' },
      ],
    },
    {
      id: 'roe',
      title: 'Rules of engagement',
      lead: 'The boundary that makes it legal and safe.',
      blocks: [
        { t: 'callout', tone: 'warn', title: 'Authorisation is the whole difference', text: 'Identical techniques are a professional service with a signed agreement, and an offence without one. A real exercise has written authority from someone with the power to grant it, which also covers third parties (cloud providers, managed service providers, hosting companies) whose consent may be needed separately.' },
        {
          t: 'checklist',
          items: [
            'Objectives and success criteria agreed in writing.',
            'Scope: which systems, networks, people and locations are in; which are explicitly out.',
            'Time window, and any blackout periods (financial close, product launch).',
            'Permitted and forbidden techniques (for example no denial of service, no destruction of data, limits on social engineering of named staff).',
            'Handling of any sensitive data seen: do not copy, store or share it beyond what is agreed.',
            'Emergency contacts, a stop word, and a deconfliction process if a real attacker is found.',
            'Reporting, retention and deletion of evidence afterwards.',
          ],
        },
      ],
    },
    {
      id: 'frameworks',
      title: 'A common language: the kill chain and ATT&CK',
      lead: 'Describe an attack in the same words on both sides.',
      blocks: [
        {
          t: 'flow',
          title: 'Lockheed Martin Cyber Kill Chain (2011)',
          nodes: [
            { label: 'Reconnaissance', sub: 'research the target', tone: 'human' },
            { label: 'Weaponisation', sub: 'prepare the means', tone: 'process' },
            { label: 'Delivery', sub: 'email, web, USB', tone: 'process' },
            { label: 'Exploitation', sub: 'a flaw is used', tone: 'model' },
            { label: 'Installation', sub: 'persistence', tone: 'data' },
            { label: 'Command and control', sub: 'remote channel', tone: 'data' },
            { label: 'Actions on objectives', sub: 'theft, damage', tone: 'output' },
          ],
          caption: 'The defender’s insight: break any link and the attack fails. Stopping at the early stages is cheaper than at the last.',
        },
        { t: 'p', text: '**MITRE ATT&CK** is a public knowledge base of real-world adversary behaviour, organised as 14 **tactics** (the goal: Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command and Control, Exfiltration, Impact, plus Reconnaissance and Resource Development) and several hundred **techniques** under them, each with examples, mitigations and detection guidance. A blue team can colour a matrix by "we detect this / partly / not at all" and prioritise the gaps; a red team can emulate named groups using their documented techniques.' },
        {
          t: 'math',
          tex: String.raw`\text{Coverage}=\frac{\left|\text{techniques with a tested detection}\right|}{\left|\text{relevant techniques}\right|},\qquad \text{TTD}=t_{\text{detect}}-t_{\text{start}}`,
          caption: 'Two simple exercise metrics: detection coverage and time to detect.',
          where: [{ sym: 't_{\\text{start}},\\ t_{\\text{detect}}', def: 'the time the activity began and the time the defenders first noticed it' }],
          syntax: [
            { sym: '|\\cdot|', say: 'the number of items in a set. Effect: coverage is a simple proportion. Why: it makes progress countable.' },
            { sym: '\\text{relevant}', say: 'only techniques that apply to your environment count; a Linux-only shop does not need Windows-registry techniques. Effect: avoids false comfort from a big denominator or false alarm from a small one.' },
          ],
          worked: {
            title: 'A purple-team quarter',
            steps: ['120 techniques are relevant. 30 have tested detections: coverage = 25%.', 'After a quarter of replaying techniques and writing detections, 54 are covered: 45%.', 'Median time to detect the replayed techniques falls from 6 hours to 40 minutes.'],
            answer: 'Coverage almost doubled. "Tested" is the key word: an untested rule that never fires proves nothing.',
          },
        },
        { t: 'sec-viz', viz: 'coverage' },
      ],
    },
  ],
  sources: [
    'MITRE (ongoing). *ATT&CK* (attack.mitre.org); and *Adversary Emulation Plans* (MITRE Engenuity).',
    'Hutchins, E., Cloppert, M. & Amin, R. (2011). Intelligence-driven computer network defense informed by analysis of adversary campaigns and intrusion kill chains. Lockheed Martin.',
    'Bank of England (2018). *CBEST Intelligence-Led Testing: Understanding Cyber Threat Intelligence Operations*; and the Monetary Authority of Singapore’s *Technology Risk Management Guidelines*.',
    'Oakley, J. (2019). *Professional Red Teaming*. Apress.',
  ],
  related: ['cybersecurity/red-and-blue/pentest-theory', 'cybersecurity/red-and-blue/detection-and-logging', 'cybersecurity/red-and-blue/incident-response', 'cloud/cloud-security/cloud-red-and-blue'],
}

export default guide
