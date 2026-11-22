import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The cloud changes how computing is paid for: from buying capacity in advance to renting it by the second. That flexibility is worth money, but the price is not obvious. The same workload can cost several times more or less depending on the purchase model, utilisation, data movement and how well it is sized. This guide covers on-demand, reserved and spot pricing, break-even arithmetic, the cost of moving data (egress), rightsizing, and FinOps practice. Prices are illustrative; always check current price lists.',
  nutshell: [
    '**On-demand** is the flexible default; **reserved / savings plans** trade a 1–3 year commitment for typically 30–70% off; **spot** capacity is up to ~90% cheaper but can be reclaimed with minutes of notice.',
    'A commitment pays only if **utilisation** exceeds the break-even \\(u_{\\text{BE}}=1-\\text{discount}\\): with a 40% discount, you must use it more than 60% of the time.',
    '**Egress** (data leaving the provider) is charged per GB; moving data in is usually free. Architecture can create large, hidden transfer bills.',
    '**Rightsizing** and scheduling off idle resources routinely cut bills 20–40%. **FinOps** makes cost visible and owned by the teams that cause it.',
  ],
  sections: [
    {
      id: 'models',
      title: 'Pricing models and break-even',
      lead: 'When does a commitment pay?',
      blocks: [
        {
          t: 'table',
          head: ['Model', 'How it is priced', 'Best for', 'Risk'],
          rows: [
            ['On-demand', 'Per second or hour, no commitment', 'Spiky, unpredictable, new workloads', 'Highest unit price'],
            ['Reserved / Savings Plan / committed use', 'Commit to 1–3 years of spend or capacity for ~30–70% off', 'Steady baseline load', 'Paying for capacity you do not use if needs shrink'],
            ['Spot / preemptible', 'Spare capacity at up to ~90% off, reclaimable on short notice', 'Fault-tolerant batch, CI, stateless workers', 'Interruptions: needs checkpointing and retries'],
            ['Free tier / credits', 'Limited free usage', 'Learning, prototypes', 'Expires; watch for accidental charges'],
            ['Serverless', 'Per request and per GB-second', 'Low or spiky traffic', 'Costly at sustained high volume'],
          ],
        },
        { t: 'cloud-viz', viz: 'cost' },
        {
          t: 'math',
          tex: String.raw`u^{*}=\frac{C_{\text{reserved}}}{C_{\text{on-demand}}}=1-d,\qquad \text{Savings}=C_{\text{od}}\,\big(u-(1-d)\big)\ \ (u\ge u^{*})`,
          caption: 'The break-even utilisation of a reservation with discount d, and the savings above it.',
          where: [{ sym: 'u', def: 'the fraction of the term you actually use the capacity (0 to 1)' }, { sym: 'd', def: 'the discount of the reserved rate against on-demand' }, { sym: 'C_{\\text{od}}', def: 'the cost of running on-demand 100% of the term' }],
          syntax: [
            { sym: '1-d', say: 'the fraction of the on-demand price you pay for a reservation, whether you use it or not. Effect: a 40% discount means paying 60% of the full price for the whole term. Why: committed spend is fixed.' },
            { sym: 'u-(1-d)', say: 'on-demand would cost \\(u\\) of the full price; the reservation costs \\(1-d\\). Effect: positive savings only if usage exceeds \\(1-d\\).' },
          ],
          worked: {
            title: 'A database server',
            steps: ['On-demand $0.50/hour; a 1-year reservation is $0.30/hour-equivalent (d = 40%, so u* = 60%).', 'Running 24/7: on-demand $4,380; reserved $2,628: save $1,752 (40%).', 'Running only business hours, 10 h × 5 days ≈ 21% of the year: on-demand $0.5×2,607 ≈ $1,304; reserved $2,628: **lose $1,324**.', 'At u = 60% the two are equal.'],
            answer: 'Reserve the steady baseline (the load you are sure to run all year), use on-demand for the variable part and spot for what is interruptible. Scheduling dev environments off at night beats any discount.',
          },
        },
      ],
    },
    {
      id: 'egress',
      title: 'Data transfer: the hidden bill',
      lead: 'Gravity and egress.',
      blocks: [
        { t: 'p', text: 'Putting data into a cloud is typically free; getting it out is charged, commonly around $0.05 to $0.12 per GB to the internet, with lower rates (or charges) between zones and regions. Traffic between availability zones is charged both ways, so a chatty service spread across zones can create a bill larger than its servers. Large datasets also have **gravity**: compute is cheaper next to the data, which makes leaving a provider costly (lock-in). Some providers waived exit fees under regulatory pressure in the EU and UK in 2024.' },
        {
          t: 'math',
          tex: String.raw`C_{\text{egress}}=V_{\text{GB}}\cdot p_{\text{GB}},\qquad C_{\text{cross-AZ}}=2\cdot V_{\text{GB}}\cdot p_{\text{az}}`,
          caption: 'Egress cost, and cross-zone cost charged on both sides.',
          where: [{ sym: 'V_{\\text{GB}}', def: 'gigabytes transferred' }, { sym: 'p_{\\text{GB}},\\ p_{\\text{az}}', def: 'the per-GB price to the internet and between zones (about $0.01 each way in many clouds)' }],
          syntax: [{ sym: '2\\cdot V\\cdot p_{\\text{az}}', say: 'cross-zone traffic is billed at both the sending and receiving ends in some clouds. Effect: replicating a busy database across zones doubles the data cost. Why: each direction is metered.' }],
          worked: {
            title: 'Serving video',
            steps: ['A service serves 100 TB a month directly from cloud storage at $0.09/GB: \\(100{,}000\\times0.09=\\$9{,}000\\).', 'Through a CDN with 90% cache hits, only 10 TB leaves the origin; the CDN rate is lower: perhaps $0.03/GB on the 100 TB = $3,000, plus $900 origin = $3,900.', 'Savings ≈ 57%.'],
            answer: 'Caching reduces both latency and bandwidth cost. Architect with data flows in mind: keep chatty services in one zone, compress, and cache at the edge.',
          },
        },
      ],
    },
    {
      id: 'finops',
      title: 'Rightsizing and FinOps',
      lead: 'Make cost a shared responsibility.',
      blocks: [
        {
          t: 'cycle',
          caption: 'The FinOps lifecycle (FinOps Foundation).',
          items: [
            { name: 'Inform', body: 'Tag resources by team, product and environment; allocate every dollar; show teams their own spend and trends.' },
            { name: 'Optimise', body: 'Rightsize overprovisioned instances, delete idle resources and old snapshots, use commitments for the baseline and spot for flexible work, tier storage.' },
            { name: 'Operate', body: 'Set budgets and anomaly alerts, put cost in design reviews, review regularly, and make the cost per unit (per customer, per request) a metric.' },
          ],
        },
        {
          t: 'checklist',
          items: [
            'Is every resource tagged with an owner and an environment?',
            'Do dev and test environments shut down at night and weekends?',
            'Is average CPU below 10% on any instance (a candidate for downsizing)?',
            'Are unattached disks, old snapshots and idle load balancers cleaned up?',
            'Is storage tiered (hot, infrequent, archive) with lifecycle rules?',
            'Are budgets and anomaly alerts set, so a runaway job is caught in hours, not at month-end?',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Cost is a security signal too', text: 'A sudden spike in compute spending often means compromised credentials used for cryptocurrency mining. Budget alerts and billing anomaly detection are among the cheapest detective controls in the cloud.' },
      ],
    },
  ],
  sources: [
    'Armbrust, M. et al. (2010). A view of cloud computing. *Communications of the ACM*, 53(4).',
    'FinOps Foundation. *FinOps Framework* (finops.org).',
    'Storment, J. R. & Fuller, M. (2023). *Cloud FinOps* (2nd ed.). O’Reilly.',
    'AWS, Azure and Google Cloud public pricing pages (illustrative figures here).',
    'Information Commissioner/Ofcom and EU Data Act (2023): switching and egress charges.',
  ],
  related: ['cloud/fundamentals/virtualisation-containers-serverless', 'cloud/scale-and-maths/scaling-and-queueing', 'cloud/scale-and-maths/caching-and-load-balancing', 'cloud/operations/devops-and-iac'],
}

export default guide
