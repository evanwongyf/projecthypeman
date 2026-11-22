import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In a cloud there is no inside to trust. Every API call is made by some identity, and what that identity may do is decided by policy. That makes identity and access management (IAM) the control plane of security: most serious cloud breaches involve an identity with more permission than it needed. This guide explains principals, policies and roles, how policy evaluation works (explicit deny beats allow, and the default is deny), least privilege, temporary credentials, and the zero-trust model that treats network location as irrelevant.',
  nutshell: [
    'IAM answers: **who** (principal) may do **what** (action) on **which** resource, under **what conditions**.',
    'Evaluation: **explicit Deny** wins; otherwise an explicit **Allow** is needed; otherwise the request is **denied by default**.',
    '**Roles with temporary credentials** replace long-lived access keys: keys that exist can leak, and credentials that expire in an hour limit the damage.',
    '**Least privilege** is a process, not a setting: start narrow, observe actual usage, and trim. Wildcards (a bare star in an action or resource) are the usual defect.',
  ],
  sections: [
    {
      id: 'model',
      title: 'Principals, policies and roles',
      lead: 'The vocabulary of access.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Principal', def: 'An identity that can make requests: a human user, a workload (a VM, a function, a Kubernetes pod), or a service.' },
            { term: 'Policy', def: 'A document listing statements: Effect (Allow/Deny), Actions, Resources and optional Conditions (source IP, MFA present, time, tags).' },
            { term: 'Role', def: 'An identity with permissions but no permanent credentials. A principal **assumes** it and receives short-lived tokens.' },
            { term: 'Federation / SSO', def: 'Trust an external identity provider (corporate directory, OIDC, SAML) so people log in once and get temporary access, with no cloud-specific passwords.' },
            { term: 'Service control policy / guardrail', def: 'An organisation-level limit that no account below can exceed, whatever its own policies say (for example, "no one may disable logging").' },
          ],
        },
        {
          t: 'code',
          lang: 'text',
          title: 'A narrowly scoped policy (JSON, AWS style)',
          code: '{\n  "Effect": "Allow",\n  "Action": ["s3:GetObject"],\n  "Resource": "arn:aws:s3:::reports-bucket/finance/2025",\n  "Condition": { "Bool": { "aws:MultiFactorAuthPresent": "true" } }\n}\n// Reads objects under one folder of one bucket, and only with MFA.\n// Compare a wildcard action on a wildcard resource: every operation on every bucket.',
        },
      ],
    },
    {
      id: 'eval',
      title: 'Policy evaluation logic',
      lead: 'Deny wins.',
      blocks: [
        {
          t: 'flow',
          title: 'How a request is decided (simplified)',
          nodes: [
            { label: 'Request', sub: 'principal, action, resource, context', tone: 'human' },
            { label: 'Any guardrail or policy Deny?', sub: 'yes → DENY', tone: 'process' },
            { label: 'Guardrails allow it?', sub: 'no → DENY', tone: 'process' },
            { label: 'Any identity or resource policy Allow?', sub: 'no → DENY (implicit)', tone: 'model' },
            { label: 'Allow', sub: 'request proceeds', tone: 'output' },
          ],
          caption: 'Real systems add permission boundaries, session policies and resource policies, but the order is the same: explicit deny, then explicit allow, otherwise deny.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Allowed}(r)=\neg\,\mathrm{Deny}(r)\ \wedge\ \mathrm{Allow}(r)\ \wedge\ \mathrm{WithinGuardrails}(r)`,
          caption: 'The logic of evaluation as a Boolean expression.',
          where: [{ sym: 'r', def: 'a request: (principal, action, resource, context)' }],
          syntax: [
            { sym: '\\neg\\,\\mathrm{Deny}(r)', say: 'no statement may explicitly deny it. Effect: a Deny cannot be overridden by any Allow. Why: it lets administrators set hard limits that holders of other permissions cannot undo.' },
            { sym: '\\mathrm{Allow}(r)\\wedge\\ldots', say: 'something must positively grant it. Effect: the default for everything not mentioned is "no", which is the right default.' },
          ],
          worked: {
            title: 'Why can this user not delete the bucket?',
            steps: ['The user has a wildcard S3 allow on all resources through a group policy.', 'The organisation guardrail contains: Deny `s3:DeleteBucket` unless the principal has the tag `team=platform`.', '\\(\\neg\\mathrm{Deny}\\) is false → the request is refused, despite the broad allow.'],
            answer: 'Layered controls make a single over-broad policy less dangerous. When debugging "access denied", look for an explicit deny, a missing allow and a guardrail, in that order.',
          },
        },
      ],
    },
    {
      id: 'lp',
      title: 'Least privilege and zero trust',
      lead: 'Narrow it, and stop trusting the network.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Start with nothing', body: 'Grant specific actions on specific resources; add as needed. A role that begins with `AdministratorAccess` rarely gets trimmed.' },
            { title: 'Prefer roles to keys', body: 'Use workload identity and role assumption (instance profiles, IRSA, OIDC federation) so no secret is stored. Where static keys must exist, rotate and scope them, and alert on use.' },
            { title: 'Observe and trim', body: 'Use access-analysis tools (IAM Access Analyzer, Policy Intelligence, Azure access reviews) to find permissions unused over 90 days and remove them.' },
            { title: 'Separate duties and accounts', body: 'Separate accounts or projects for production, development and logging limit the blast radius of a stolen credential. Protect the root/owner account with hardware MFA and almost never use it.' },
            { title: 'Require strong authentication', body: 'MFA for humans (phishing-resistant keys for administrators), conditional access on device health and location, and short sessions.' },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Zero trust principles', tag: 'NIST SP 800-207', body: 'Never trust, always verify: authenticate and authorise every request using identity, device posture and context; treat the network as hostile; grant least privilege per session; assume breach and log everything.' },
            { title: 'Cloud-native zero trust', tag: 'identity-aware', body: 'Identity-aware proxies, private endpoints, service meshes with mutual TLS, and workload identity replace "VPN to the corporate network" with per-application, per-request decisions.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'The privilege-escalation trap', text: 'Some permissions are quietly equivalent to administrator: the ability to attach policies, to create access keys for others, to pass a powerful role to a service or to modify a role’s trust policy. "Not an admin" is not "cannot become one". Review for escalation paths, not only for an obvious wildcard Allow.' },
      ],
    },
  ],
  sources: [
    'Rose, S. et al. (2020). *NIST SP 800-207: Zero Trust Architecture*.',
    'AWS. *IAM User Guide: Policy evaluation logic*; Microsoft *Azure RBAC and Conditional Access*; Google Cloud *IAM overview*.',
    'Cloud Security Alliance (2021). *Security Guidance v4.0*, Domain 12 (IAM).',
    'Saltzer, J. H. & Schroeder, M. D. (1975). The protection of information in computer systems. *Proceedings of the IEEE*, 63(9).',
    'Rhino Security Labs. *AWS IAM privilege escalation methods* (research write-up).',
  ],
  related: ['cybersecurity/foundations/security-principles', 'cloud/cloud-security/cloud-red-and-blue', 'cloud/cloud-security/cloud-encryption', 'cloud/fundamentals/what-is-cloud'],
}

export default guide
