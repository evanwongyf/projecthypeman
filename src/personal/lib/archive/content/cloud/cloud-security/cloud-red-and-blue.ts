import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Cloud attacks follow a different shape from traditional intrusions: there is often no malware and no exploit, only API calls made with valid credentials. The attack surface is the control plane, identities, exposed storage and metadata services, and the typical defect is a misconfiguration. This guide describes, conceptually and defensively, how red teams approach a cloud environment (always with written authorisation, and within the provider’s testing policy), the misconfigurations behind real breaches, how defenders detect and prevent them, and how attack paths and blast radius are reasoned about.',
  nutshell: [
    'The cloud **attack surface** is: internet-exposed services, identities and their permissions, the control-plane APIs, storage, CI/CD pipelines and the metadata service of each instance.',
    'Most incidents come from **misconfiguration** and **credentials**, not from cracking the platform: public buckets, over-broad roles, leaked access keys, SSRF to the instance metadata service.',
    'Red teams map **attack paths** through identities (who can assume what) and test whether defenders see it; blue teams use **CSPM**, **audit logs**, **guardrails** and **detection rules** to prevent and notice.',
    'Reduce **blast radius**: separate accounts, narrow roles, short-lived credentials, deny-by-default network paths.',
  ],
  sections: [
    {
      id: 'surface',
      title: 'The cloud attack surface',
      lead: 'Where things go wrong.',
      blocks: [
        { t: 'callout', tone: 'warn', title: 'Authorisation and provider policy', text: 'Test only accounts you own or are contracted to assess, with written scope. The big providers publish penetration-testing policies: many routine tests of your own resources are permitted without prior approval, while denial-of-service, attacks on shared infrastructure or on other tenants are forbidden. Using stolen or found credentials in any account you are not authorised to test is a crime (see Singapore’s Computer Misuse Act).' },
        {
          t: 'table',
          head: ['Weakness', 'Why it happens', 'Typical impact', 'Defence'],
          rows: [
            ['Public or over-shared storage', 'A bucket policy or ACL set to public for convenience', 'Mass data exposure', 'Block public access at the account level; policy review; data discovery and classification'],
            ['Over-permissive IAM roles', 'Wildcard actions and resources; roles reused by many workloads', 'Privilege escalation, lateral movement across the account', 'Least privilege; access analysis; permission boundaries; separate accounts'],
            ['Long-lived access keys in code', 'Keys committed to repositories, baked into images, left on laptops', 'Account takeover, crypto-mining bills', 'Roles instead of keys; secret scanning; rotation; billing alerts'],
            ['SSRF to the metadata service', 'An application fetches a user-supplied URL, which can reach the instance’s internal credential endpoint', 'Theft of the instance role’s temporary credentials', 'IMDSv2 (session-token required); allow-list outbound URLs; narrow the instance role'],
            ['Exposed management interfaces', 'Kubernetes API, dashboards, databases, SSH/RDP open to 0.0.0.0/0', 'Remote access and data theft', 'Private endpoints; bastion or session manager; security-group review'],
            ['Insecure CI/CD', 'Pipelines with broad credentials and untrusted inputs', 'Supply-chain compromise and production access', 'OIDC federation with scoped roles; protected branches; signed artifacts'],
            ['Logging disabled or unmonitored', 'Audit trails off, or never reviewed', 'Intrusions go unseen for months', 'Organisation-wide immutable audit logs, alerting on key events'],
          ],
        },
        { t: 'example', title: 'A case study: an SSRF-to-credentials chain (public reports)', lines: [{ label: 'Setting', text: 'A misconfigured web application firewall on a cloud-hosted application could be induced to make requests to internal addresses on behalf of an outside user.' }, { label: 'Step 1', text: 'It reached the instance metadata endpoint and returned the temporary credentials of the instance’s role.' }, { label: 'Step 2', text: 'The role had far wider permissions than the application needed, including the ability to list and read many storage buckets.' }, { label: 'Result', text: 'Data on roughly 100 million people was copied (Capital One, 2019; public court and regulatory documents). Defences that would have broken the chain: a tighter firewall configuration, IMDSv2, a narrowly scoped role, and alerts on unusual storage reads.' }, { label: 'Lesson', text: 'Three small weaknesses chained into a large breach. Each link is a place to break the chain.' }] },
      ],
    },
    {
      id: 'red',
      title: 'How a cloud red team thinks',
      lead: 'Identities as the graph.',
      blocks: [
        { t: 'p', text: 'In the cloud, a red team’s question becomes: starting with this foothold (a leaked key, a compromised workload, a phished user), what can I reach by chaining permissions? The environment is a **graph** whose nodes are identities, roles, resources and trust relationships, and whose edges are "can assume", "can read", "can modify", "can pass". An attack path is a route through the graph from a low-value node to a crown jewel. Tools such as BloodHound-style graph analysis, Cartography and cloud-provider access analysers build these graphs so that **defenders can find the paths first**.' },
        {
          t: 'flow',
          title: 'Kill-chain thinking, mapped to the cloud',
          nodes: [
            { label: 'Initial access', sub: 'leaked key, phished SSO session, exposed service, vulnerable app', tone: 'human' },
            { label: 'Discovery', sub: 'what identity am I? what can it list?', tone: 'process' },
            { label: 'Privilege escalation', sub: 'abuse a permission that grants more permission', tone: 'process' },
            { label: 'Lateral movement', sub: 'assume other roles; cross accounts', tone: 'model' },
            { label: 'Collection / impact', sub: 'read data, tamper, mine, encrypt, delete', tone: 'output' },
          ],
          caption: 'MITRE ATT&CK for Cloud (IaaS, SaaS, Identity providers) lists the techniques at each stage and the mitigations.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Blast radius}(i)=\Big|\{\,r\in R:\ \exists\ \text{path } i\leadsto r \text{ in the access graph}\}\Big|,\qquad \text{reduce by removing edges}`,
          caption: 'The blast radius of an identity: the number of resources reachable from it through chained permissions.',
          where: [{ sym: 'R', def: 'the set of resources' }, { sym: 'i', def: 'the compromised identity (the starting node)' }],
          syntax: [{ sym: '\\exists\\text{ path}', say: 'a resource counts if any chain of allowed actions leads to it. Effect: one over-broad permission can connect a low-privilege identity to everything. Why: reachability in a graph is transitive; removing one edge can cut off many nodes.' }],
          worked: {
            title: 'Cutting a path',
            steps: ['A web-server role can read secrets in a vault; the vault holds a deployment key; the key can assume an admin role. Reachable from the web server: the vault, the key, the admin role, and everything admin can touch (say 600 resources).', 'Removing one edge, the web role’s secret-read permission, leaves only the web server’s own 12 resources.'],
            answer: 'Blast radius falls from ~600 to ~12 by removing a single unnecessary permission: that is the case for graph-based review over reading policies one by one.',
          },
        },
      ],
    },
    {
      id: 'blue',
      title: 'How a blue team defends and detects',
      lead: 'Prevent, notice, respond.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Preventive guardrails', tag: 'organisation level', body: 'Service control policies: deny disabling audit logs, deny public storage, restrict regions, require encryption and MFA. Infrastructure-as-code scanning and admission policies catch problems before deploy.' },
            { title: 'Posture management (CSPM)', tag: 'continuous', body: 'Tools compare live configuration against benchmarks (CIS Foundations, provider best practice) and flag drift: open ports, public buckets, unencrypted volumes, unused admin keys.' },
            { title: 'Audit logs', tag: 'visibility', body: 'Enable the control-plane log (CloudTrail, Activity Log, Cloud Audit Logs) in every account and region, deliver it to a separate, locked-down logging account, and retain it.' },
            { title: 'Detection', tag: 'rules and anomalies', body: 'Alert on: root/owner account use, console logins without MFA, new access keys, policy changes granting admin, logging disabled, data-store exports, unusual API calls from new locations, a sudden compute spike.' },
          ],
        },
        {
          t: 'checklist',
          items: [
            'Is audit logging on in every account and region, and shipped to an account attackers in production cannot reach?',
            'Is the root/owner account protected by hardware MFA and unused?',
            'Is public storage access blocked organisation-wide?',
            'Are there any active long-lived access keys, and are they older than 90 days?',
            'Is the instance metadata service locked to the token-based version?',
            'Which identities can escalate privileges (iam:PassRole, policy attach, trust-policy edits)?',
            'Are alerts tested by purple-team replays of the cloud techniques?',
          ],
        },
        { t: 'sec-viz', viz: 'coverage' },
        { t: 'p', text: 'The lab connects to the earlier maths: a test samples the space of weaknesses with finite effort, and each added hour yields diminishing returns. Automated posture scanning gives broad, repeated coverage cheaply; manual red-team work provides the depth that finds chained, logic-level paths. Mature programs use both, and feed every finding back into guardrails so that the class of problem cannot recur.' },
      ],
    },
  ],
  sources: [
    'MITRE ATT&CK for Cloud (attack.mitre.org/matrices/enterprise/cloud/).',
    'Center for Internet Security. *CIS Foundations Benchmarks* for AWS, Azure and Google Cloud.',
    'U.S. District Court (W.D. Wash.) and Office of the Comptroller of the Currency documents on the Capital One 2019 incident; Krebs on Security reporting.',
    'AWS *Penetration Testing* policy; Microsoft *Penetration Testing Rules of Engagement*; Google Cloud *Acceptable Use* policy.',
    'Cloud Security Alliance. *Top Threats to Cloud Computing* (annual).',
    'Cyber Security Agency of Singapore (2022). *Cloud Security Companion Guide*.',
  ],
  related: ['cybersecurity/red-and-blue/red-vs-blue', 'cybersecurity/red-and-blue/pentest-theory', 'cloud/cloud-security/iam-and-zero-trust', 'cloud/cloud-security/cloud-encryption'],
}

export default guide
