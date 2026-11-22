import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Reliability is arithmetic. Availability multiplies when components are in a chain and compounds the other way when they are redundant, but redundancy only helps if failures are independent. This guide covers the nines and the downtime they allow, series and parallel availability, MTBF and MTTR, service-level indicators, objectives and agreements (SLI, SLO, SLA), and the error budget that turns reliability into a decision about how fast to ship.',
  nutshell: [
    '**Availability** \\(A=\\text{MTBF}/(\\text{MTBF}+\\text{MTTR})\\). 99.9% allows 43.8 minutes of downtime a month; 99.99% allows 4.4 minutes.',
    '**Series** (all needed): \\(A=\\prod A_i\\). **Parallel** (any one suffices): \\(A=1-\\prod(1-A_i)\\).',
    'Redundancy helps only if failures are **independent**; shared dependencies (the same region, deploy, DNS, config) cap the real availability.',
    '**SLI** is the measurement, **SLO** the internal target, **SLA** the contract with penalties. The **error budget** \\(1-\\text{SLO}\\) is the allowed unreliability that you can spend on change.',
  ],
  sections: [
    {
      id: 'nines',
      title: 'The nines',
      lead: 'What a percentage allows.',
      blocks: [
        { t: 'cloud-viz', viz: 'nines' },
        {
          t: 'math',
          tex: String.raw`A=\frac{\text{MTBF}}{\text{MTBF}+\text{MTTR}},\qquad \text{Downtime}=(1-A)\times T`,
          caption: 'Steady-state availability from the mean time between failures and the mean time to repair, and the downtime it implies over a period T.',
          where: [{ sym: '\\text{MTBF}', def: 'mean time between failures: average uptime before a failure' }, { sym: '\\text{MTTR}', def: 'mean time to repair: average time to restore service' }, { sym: 'T', def: 'the period (a year is 525,960 minutes)' }],
          syntax: [
            { sym: '\\text{MTBF}/(\\text{MTBF}+\\text{MTTR})', say: 'the fraction of the cycle spent up. Effect: you can raise availability by failing less often (MTBF up) or recovering faster (MTTR down). Why: the cycle is uptime plus repair time.' },
            { sym: '(1-A)\\times T', say: 'the unavailable fraction times the period. Effect: each extra nine divides downtime by ten.' },
          ],
          worked: {
            title: 'Fail rarely or recover fast',
            steps: ['Service fails every 30 days (MTBF = 720 h) and takes 2 hours to repair: \\(A=720/722=99.72\\%\\).', 'Cut repair to 6 minutes by automation (MTTR = 0.1 h): \\(A=720/720.1=99.986\\%\\).', 'Doubling MTBF to 60 days (1,440 h) but keeping a 2-hour repair: \\(A=1440/1442=99.86\\%\\).'],
            answer: 'Faster recovery pays more than rarer failure here, and is easier to achieve: automated rollback, health checks and failover. At scale, "fix quickly" beats "never break".',
          },
        },
        {
          t: 'table',
          head: ['Availability', 'Per year', 'Per month (30.4 days)', 'Per week'],
          rows: [['99%', '3.65 days', '7.3 hours', '1.68 hours'], ['99.9%', '8.77 hours', '43.8 min', '10.1 min'], ['99.95%', '4.38 hours', '21.9 min', '5.04 min'], ['99.99%', '52.6 min', '4.38 min', '1.01 min'], ['99.999%', '5.26 min', '26.3 s', '6.05 s']],
        },
      ],
    },
    {
      id: 'compose',
      title: 'Series and parallel',
      lead: 'How components combine.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`A_{\text{series}}=\prod_{i=1}^{n}A_i,\qquad A_{\text{parallel}}=1-\prod_{i=1}^{n}(1-A_i)`,
          caption: 'Availability of components that must all work (series) and of redundant components where any one is enough (parallel).',
          where: [{ sym: 'A_i', def: 'availability of component i, assumed independent' }],
          syntax: [
            { sym: '\\prod A_i', say: 'every component must be up at once, so probabilities multiply. Effect: a chain is weaker than its weakest link: ten 99.9% services in series give 99.0%. Why: each adds its downtime.' },
            { sym: '1-\\prod(1-A_i)', say: 'the system fails only when all fail together. Effect: two 99% components in parallel give 99.99%. Why: the chance both are down is 1% × 1% = 0.01%. This holds only if failures are independent.' },
          ],
          worked: {
            title: 'A request path',
            steps: ['A request passes through DNS (99.99%), load balancer (99.99%), app (99.9% per instance, 3 instances), and database (99.95%).', 'App tier in parallel: \\(1-(0.001)^3=99.9999999\\%\\) ≈ 100%.', 'Series: \\(0.9999\\times0.9999\\times1.0\\times0.9995\\approx 99.83\\%\\).', 'About 15 hours of downtime a year, dominated by the database and the single-instance dependencies.'],
            answer: 'Adding more app instances barely helps once the app tier is already near 100%. Improve the least available component in the chain, usually a data store or a shared dependency.',
          },
        },
        { t: 'callout', tone: 'warn', title: 'Redundancy needs independence', text: 'Three replicas in the same zone, behind one load balancer, deployed by one pipeline with one configuration share fate: a bad deploy takes them all down together. Real outages are dominated by **correlated** failures (config pushes, expired certificates, DNS, a shared dependency, a region event). Use separate zones, staged rollouts and diverse dependencies.' },
      ],
    },
    {
      id: 'slo',
      title: 'SLIs, SLOs, SLAs and error budgets',
      lead: 'Reliability as a managed quantity.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'SLI', def: 'A measured indicator of service quality, from the user’s view: the proportion of requests that succeed and are faster than 300 ms.' },
            { term: 'SLO', def: 'An internal target for the SLI over a window: 99.9% of requests good over 30 days.' },
            { term: 'SLA', def: 'A contract with consequences, usually looser than the SLO: service credits when availability falls below, say, 99.5%.' },
            { term: 'Error budget', def: 'The allowed failure: \\(1-\\text{SLO}\\). A 99.9% SLO over 30 days gives 43.2 minutes (or 0.1% of requests) to spend.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{Budget}=(1-\text{SLO})\times T,\qquad \text{Burn rate}=\frac{\text{error ratio}}{1-\text{SLO}}`,
          caption: 'The error budget and the burn rate: how fast it is being consumed relative to plan.',
          where: [{ sym: '\\text{error ratio}', def: 'the observed fraction of bad requests over a recent window' }],
          syntax: [{ sym: '\\text{error ratio}/(1-\\text{SLO})', say: 'a burn rate of 1 uses the budget exactly over the window; 10 uses it ten times too fast. Effect: alerts on burn rate are far more actionable than alerts on raw errors. Why: they compare the damage to what you can afford.' }],
          worked: {
            title: 'Alerting on burn rate',
            steps: ['SLO 99.9% over 30 days: budget 0.1%. During an incident 2% of requests fail.', 'Burn rate = 0.02/0.001 = 20. At 20× the whole month’s budget is gone in 30/20 = 1.5 days.', 'Google SRE recommends paging for a burn rate of about 14.4 over 1 hour (2% of a 30-day budget spent in an hour).'],
            answer: 'This incident burns the budget 20 times too fast and warrants a page. If the budget is exhausted, releases pause until reliability work restores it: the error budget makes the speed-vs-stability trade-off explicit.',
          },
        },
      ],
    },
  ],
  sources: [
    'Beyer, B., Jones, C., Petoff, J. & Murphy, N. R. (2016). *Site Reliability Engineering*, chs. 3–4. O’Reilly.',
    'Beyer, B. et al. (2018). *The Site Reliability Workbook*, ch. 5 “Alerting on SLOs”. O’Reilly.',
    'Trivedi, K. S. (2016). *Probability and Statistics with Reliability, Queuing, and Computer Science Applications* (2nd ed.). Wiley.',
    'AWS Well-Architected Framework: Reliability Pillar.',
  ],
  related: ['cloud/fundamentals/regions-and-latency', 'cloud/operations/observability', 'cloud/scale-and-maths/consensus-and-consistency', 'cloud/operations/devops-and-iac'],
}

export default guide
