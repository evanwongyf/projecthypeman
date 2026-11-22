import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'DevOps is the practice of shortening the path from an idea to running code, and keeping that code healthy, by uniting development and operations around automation. In the cloud this becomes pipelines that build, test and deploy on every change, and infrastructure described in code so that environments are reproducible. This guide covers continuous integration and delivery, infrastructure as code and its declarative model, deployment strategies (rolling, blue-green, canary), the maths of why small frequent releases are safer, and the DORA metrics used to measure delivery performance.',
  nutshell: [
    '**CI** merges and tests every change automatically; **CD** keeps the main branch always deployable and releases it by pipeline.',
    '**Infrastructure as code** (Terraform, CloudFormation, Pulumi, Bicep) describes servers and networks declaratively in version control: reviewable, repeatable, auditable.',
    '**Deployment strategies** limit blast radius: rolling, **blue-green** (switch traffic between two environments), **canary** (a small percentage first).',
    '**DORA metrics:** deployment frequency, lead time for changes, change-failure rate, time to restore. Elite teams ship often *and* recover fast: speed and stability go together.',
  ],
  sections: [
    {
      id: 'pipeline',
      title: 'The pipeline',
      lead: 'From commit to production.',
      blocks: [
        {
          t: 'flow',
          title: 'A typical CI/CD pipeline',
          nodes: [
            { label: 'Commit / pull request', sub: 'reviewed change', tone: 'human' },
            { label: 'Build', sub: 'compile, package, container image', tone: 'process' },
            { label: 'Test', sub: 'unit, integration, security scans, SBOM', tone: 'process' },
            { label: 'Artifact', sub: 'signed, versioned image in a registry', tone: 'data' },
            { label: 'Deploy to staging', sub: 'smoke and acceptance tests', tone: 'model' },
            { label: 'Deploy to production', sub: 'canary or blue-green with automatic rollback', tone: 'output' },
          ],
          caption: 'The same artifact moves through every stage; only configuration differs. Build once, promote many times.',
        },
        { t: 'p', text: 'Secure the pipeline itself: it holds credentials to production. Use short-lived credentials (OIDC federation, not stored keys), least-privilege roles per stage, signed artifacts, pinned dependencies, protected branches and review of pipeline changes. Compromised build systems have been the route for major supply-chain attacks (SolarWinds, 2020).' },
      ],
    },
    {
      id: 'iac',
      title: 'Infrastructure as code',
      lead: 'Declare the end state.',
      blocks: [
        { t: 'p', text: 'Instead of clicking in a console, you write a file that says what should exist: a network, three subnets, a database with these settings. A tool reads the **desired state**, compares it with the **actual state** (kept in a state file or queried from the cloud), computes a **plan** (the difference) and applies it. Running it again changes nothing if reality already matches: it is **idempotent**.' },
        { t: 'code', lang: 'text', title: 'A declarative sketch (Terraform-style pseudocode)', code: 'resource "network" "main" {\n  cidr = "10.0.0.0/16"\n}\n\nresource "subnet" "app" {\n  count      = 3\n  network    = network.main.id\n  cidr       = cidrsubnet(network.main.cidr, 8, count.index)\n  zone       = zones[count.index]\n}\n\n# plan:  + 1 network, + 3 subnets      (apply creates them)\n# re-run: no changes                    (idempotent)\n# edit cidr then plan: ~ 1 to change    (a diff, reviewable in a pull request)' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Why it matters', tag: 'reproducible', body: 'Environments are built the same way every time; disaster recovery is "apply the code in another region"; changes are reviewed, tested and audited like software.' },
            { title: 'Immutable infrastructure', tag: 'replace, don\'t patch', body: 'Never log in and tweak a server; build a new image and replace the instance. Prevents configuration drift and makes rollback trivial.' },
            { title: 'GitOps', tag: 'git is the truth', body: 'The repository holds the desired state; an operator (Argo CD, Flux) continuously reconciles the cluster to match it. Every change is a commit.' },
            { title: 'Security', tag: 'policy as code', body: 'Scan IaC for misconfigurations before deploy (public buckets, open ports, unencrypted disks) and enforce policy automatically. Keep secrets out of state files and repos.' },
          ],
        },
      ],
    },
    {
      id: 'deploy',
      title: 'Deployment strategies and release maths',
      lead: 'Limit the damage of a bad release.',
      blocks: [
        {
          t: 'table',
          head: ['Strategy', 'How', 'Rollback', 'Cost / risk'],
          rows: [
            ['Recreate', 'Stop old, start new', 'Redeploy old', 'Downtime'],
            ['Rolling', 'Replace instances in batches', 'Roll forward or back in batches', 'Mixed versions run together; slow rollback'],
            ['Blue-green', 'Build a full second environment, switch traffic at once', 'Switch back instantly', 'Double capacity; database changes must be compatible with both'],
            ['Canary', 'Send 1% then 5%, 25%… to the new version while watching metrics', 'Route the canary traffic back', 'Needs good metrics and traffic splitting'],
            ['Feature flags', 'Deploy code dark, enable for chosen users at runtime', 'Turn the flag off', 'Flag debt; testing combinations'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`P(\text{bad release reaches everyone})=\Pr[\text{undetected at canary}],\qquad \text{rule of three: } 0\text{ failures in }n\ \Rightarrow\ p_{95\%}\le\frac3n`,
          caption: 'A canary limits exposure; the rule of three bounds a failure rate after seeing none.',
          where: [{ sym: 'n', def: 'the number of canary requests observed with no errors' }, { sym: 'p_{95\\%}', def: 'the 95% upper confidence bound on the true error rate' }],
          syntax: [{ sym: '3/n', say: 'if no failures were seen in n trials, the true failure rate is probably no more than 3/n (95% confidence). Effect: it tells how much evidence a quiet canary provides. Why: solving \\((1-p)^n=0.05\\) gives \\(p\\approx 3/n\\).' }],
          worked: {
            title: 'How long should a canary run?',
            steps: ['5% canary takes 500 requests in five minutes with zero errors. The 95% upper bound is \\(3/500=0.6\\%\\).', 'If your service tolerates at most 0.1% errors, you need \\(n\\ge3/0.001=3{,}000\\) clean canary requests.', 'At 100 requests a minute that is 30 minutes.'],
            answer: 'A short, quiet canary does not prove safety, it only rules out gross failures. Size the observation time to the failure rate you need to rule out.',
          },
        },
        {
          t: 'metric',
          name: 'DORA four key metrics',
          shows: 'Software delivery performance: deployment frequency, lead time for changes, change failure rate, and time to restore service (Forsgren, Humble and Kim, 2018).',
          eli5: 'How often you ship, how fast a change gets to users, how often a change breaks things, and how quickly you fix it.',
          higher: 'High performers deploy on demand, with lead times under a day, change-failure rates of 0–15% and recovery in under an hour.',
          typical: 'Reports group teams into elite, high, medium and low performers; the gaps between them are large (elite teams deploy many times a day).',
          lower: 'Releasing quarterly with weekend freezes: big batches make each release riskier, not safer.',
        },
      ],
    },
  ],
  sources: [
    'Humble, J. & Farley, D. (2010). *Continuous Delivery*. Addison-Wesley.',
    'Forsgren, N., Humble, J. & Kim, G. (2018). *Accelerate*. IT Revolution. And the annual *DORA State of DevOps* reports.',
    'Morris, K. (2020). *Infrastructure as Code* (2nd ed.). O’Reilly.',
    'Hanley, J. A. & Lippman-Hand, A. (1983). If nothing goes wrong, is everything all right? *JAMA*, 249(13) (the rule of three).',
    'HashiCorp Terraform documentation; Argo CD and Flux documentation.',
  ],
  related: ['cloud/fundamentals/virtualisation-containers-serverless', 'cloud/operations/observability', 'cloud/scale-and-maths/reliability-and-slas', 'cloud/cloud-security/iam-and-zero-trust'],
}

export default guide
