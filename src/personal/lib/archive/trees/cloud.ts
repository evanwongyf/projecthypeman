import type { ArchiveNode } from '../topics'

// Cloud computing: what the cloud is and how it is built, the mathematics of availability,
// queues, caching and cost, how distributed systems stay consistent, and how clouds are
// secured, attacked and defended.

export const CLOUD: ArchiveNode = {
  slug: 'cloud',
  title: 'Cloud computing',
  blurb: 'What the cloud is and how it works: virtualisation and containers, regions and networks, storage and consistency, the maths of availability, queues, caching and cost, and cloud security from both sides.',
  glyph: '☁',
  color: 'color-mix(in srgb, var(--sky) 60%, var(--mint))',
  tags: ['cloud', 'cloud computing', 'aws', 'azure', 'gcp', 'devops', 'infrastructure', 'distributed systems', 'serverless', 'kubernetes'],
  children: [
    { slug: 'start-here', title: 'Start here', blurb: 'What the cloud is, the topics on this shelf, and a route from the basics to distributed-systems maths.', minutes: 6, glyph: '★', tags: ['beginner', 'overview', 'roadmap'] },
    {
      slug: 'fundamentals',
      title: 'Fundamentals',
      blurb: 'The service models, virtualisation and containers, regions and zones, networking and storage.',
      glyph: '◇',
      tags: ['iaas', 'paas', 'saas', 'virtualisation', 'containers', 'storage', 'networking'],
      children: [
        { slug: 'what-is-cloud', title: 'What is cloud computing?', blurb: 'NIST’s five characteristics, IaaS, PaaS and SaaS, public, private and hybrid, and the shared responsibility model.', minutes: 10, tags: ['nist', 'iaas', 'paas', 'saas', 'public cloud', 'private cloud', 'hybrid', 'shared responsibility', 'elasticity'] },
        { slug: 'virtualisation-containers-serverless', title: 'Virtual machines, containers and serverless', blurb: 'Hypervisors, namespaces and cgroups, Kubernetes in one page, functions as a service and cold starts.', minutes: 12, tags: ['virtual machine', 'hypervisor', 'docker', 'container', 'kubernetes', 'serverless', 'lambda', 'cold start', 'cgroups'] },
        { slug: 'regions-and-latency', title: 'Regions, zones and the speed of light', blurb: 'How clouds are laid out geographically, availability zones, data residency, and the physics floor on latency.', minutes: 9, tags: ['region', 'availability zone', 'latency', 'speed of light', 'data residency', 'cdn', 'edge'] },
        { slug: 'cloud-networking', title: 'Cloud networking and subnet arithmetic', blurb: 'VPCs, CIDR blocks, subnets, routing, load balancers, DNS and gateways, with a subnet calculator.', minutes: 12, tags: ['vpc', 'cidr', 'subnet', 'routing', 'load balancer', 'dns', 'nat', 'security group', 'cdn'] },
        { slug: 'edge-and-iot-cloud', title: 'Edge, IoT and the device cloud', blurb: 'How devices connect to cloud platforms: IoT hubs and brokers, rules and pipelines, edge runtimes, device twins, message-volume and cost arithmetic, and designing for devices that go offline.', minutes: 12, tags: ['iot', 'edge', 'iot hub', 'device twin', 'mqtt', 'telemetry', 'pipeline', 'cost'] },
        { slug: 'storage-and-databases', title: 'Storage and databases', blurb: 'Block, file and object storage, relational and NoSQL stores, replication, sharding and the CAP trade-off.', minutes: 12, tags: ['object storage', 's3', 'block storage', 'nosql', 'sql', 'sharding', 'replication', 'cap theorem', 'consistency'] },
      ],
    },
    {
      slug: 'scale-and-maths',
      title: 'Scale, reliability and the maths',
      blurb: 'The arithmetic of availability, queues, scaling, caching, hashing and consensus that decides how systems behave at scale.',
      glyph: '∑',
      tags: ['scaling', 'reliability', 'availability', 'queueing', 'caching', 'consensus'],
      children: [
        { slug: 'reliability-and-slas', title: 'Reliability, SLAs and error budgets', blurb: 'The nines, series and parallel availability, SLIs, SLOs, error budgets and why redundancy needs independence.', minutes: 12, tags: ['availability', 'nines', 'sla', 'slo', 'sli', 'error budget', 'sre', 'mtbf', 'mttr', 'redundancy'] },
        { slug: 'scaling-and-queueing', title: 'Scaling and queueing theory', blurb: 'Little’s law, M/M/1 and Erlang C, why latency explodes near saturation, and autoscaling policies.', minutes: 13, tags: ['littles law', 'queueing', 'utilisation', 'autoscaling', 'erlang', 'throughput', 'latency', 'amdahl', 'horizontal scaling'] },
        { slug: 'caching-and-load-balancing', title: 'Caching, load balancing and consistent hashing', blurb: 'Hit ratios and Zipf, cache policies, load-balancing algorithms and consistent hashing, with live demos.', minutes: 12, tags: ['cache', 'hit ratio', 'zipf', 'lru', 'load balancer', 'consistent hashing', 'power of two choices', 'cdn'] },
        { slug: 'consensus-and-consistency', title: 'Consensus, quorums and consistency', blurb: 'Replication, quorums, CAP and PACELC, Raft in outline, and what strong and eventual consistency cost.', minutes: 13, tags: ['consensus', 'raft', 'paxos', 'quorum', 'cap theorem', 'eventual consistency', 'linearizability', 'two generals', 'split brain'] },
        { slug: 'cloud-economics', title: 'Cloud economics and FinOps', blurb: 'On-demand, reserved and spot pricing, break-even arithmetic, egress, rightsizing and managing cloud cost.', minutes: 10, tags: ['finops', 'reserved instances', 'spot', 'savings plan', 'egress', 'cost', 'tco', 'rightsizing'] },
      ],
    },
    {
      slug: 'operations',
      title: 'Operations',
      blurb: 'How cloud systems are built, deployed and watched: infrastructure as code, CI/CD, observability and percentiles.',
      glyph: '⚙',
      tags: ['devops', 'ci cd', 'observability', 'infrastructure as code'],
      children: [
        { slug: 'devops-and-iac', title: 'DevOps, CI/CD and infrastructure as code', blurb: 'Pipelines, immutable infrastructure, Terraform-style declarative config, deployment strategies and GitOps.', minutes: 11, tags: ['devops', 'ci cd', 'terraform', 'infrastructure as code', 'gitops', 'blue green', 'canary', 'rolling deploy'] },
        { slug: 'observability', title: 'Observability and the maths of percentiles', blurb: 'Metrics, logs and traces, golden signals, why averages lie and how tail latency compounds with fan-out.', minutes: 11, tags: ['metrics', 'logs', 'traces', 'percentiles', 'p99', 'golden signals', 'opentelemetry', 'tail latency'] },
      ],
    },
    {
      slug: 'cloud-security',
      title: 'Cloud security: attack and defence',
      blurb: 'Identity and access, encryption and keys, the misconfigurations behind real breaches, and how red and blue teams approach the cloud.',
      glyph: '⛨',
      tags: ['cloud security', 'iam', 'misconfiguration', 'zero trust'],
      children: [
        { slug: 'iam-and-zero-trust', title: 'Identity, access and zero trust', blurb: 'Principals, policies, roles, least privilege, policy evaluation logic, and the zero-trust model.', minutes: 12, tags: ['iam', 'least privilege', 'role', 'policy', 'zero trust', 'sso', 'federation', 'mfa'] },
        { slug: 'cloud-encryption', title: 'Encryption, keys and secrets in the cloud', blurb: 'Encryption at rest and in transit, envelope encryption, key management services and secret handling.', minutes: 10, tags: ['kms', 'envelope encryption', 'secrets', 'encryption at rest', 'hsm', 'key rotation'] },
        { slug: 'cloud-red-and-blue', title: 'Cloud red team and blue team', blurb: 'The cloud attack surface and common misconfigurations, kill-chain thinking for the cloud, and the logging and posture tools defenders use.', minutes: 13, tags: ['cloud pentest', 'misconfiguration', 'ssrf', 'metadata service', 'cspm', 'cloudtrail', 'attack path', 'blast radius', 'detection'] },
      ],
    },
  ],
}
