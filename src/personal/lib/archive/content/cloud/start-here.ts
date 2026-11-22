import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'The cloud is other people’s computers, rented by the second, reached over a network and managed through software. That simple description hides the real change: infrastructure became an API, so capacity can be created, resized and destroyed in minutes. This shelf explains how that works and what follows from it: the arithmetic of availability, queues, caches and cost, the distributed-systems ideas behind consistency, and how clouds are attacked and defended.',
  nutshell: [
    'Cloud = **on-demand, elastic, metered, network-accessible, pooled** computing (NIST). You trade capital expense for operating expense and lose some control for speed.',
    'Three service models by how much you manage: **IaaS** (virtual machines), **PaaS** (a platform to run code), **SaaS** (finished software). The **shared responsibility model** says who secures what.',
    'At scale, **maths decides**: availability multiplies, queues explode near full utilisation, tail latency compounds, and caches follow Zipf.',
    'Security in the cloud is mostly **identity and configuration**: most breaches are over-permissive roles, exposed storage and leaked keys, not exotic exploits.',
  ],
  sections: [
    {
      id: 'map',
      title: 'What is on this shelf',
      lead: 'Four groups of guides.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Fundamentals', tag: '5 guides', body: '[What is cloud](@cloud/fundamentals/what-is-cloud), [VMs, containers and serverless](@cloud/fundamentals/virtualisation-containers-serverless), [regions and latency](@cloud/fundamentals/regions-and-latency), [networking and subnets](@cloud/fundamentals/cloud-networking), [storage and databases](@cloud/fundamentals/storage-and-databases).' },
            { title: 'Scale and the maths', tag: '5 guides', body: '[Reliability and SLAs](@cloud/scale-and-maths/reliability-and-slas), [queueing and scaling](@cloud/scale-and-maths/scaling-and-queueing), [caching and load balancing](@cloud/scale-and-maths/caching-and-load-balancing), [consensus](@cloud/scale-and-maths/consensus-and-consistency), [economics](@cloud/scale-and-maths/cloud-economics).' },
            { title: 'Operations', tag: '2 guides', body: '[DevOps and infrastructure as code](@cloud/operations/devops-and-iac), [observability and percentiles](@cloud/operations/observability).' },
            { title: 'Cloud security', tag: '3 guides', body: '[Identity and zero trust](@cloud/cloud-security/iam-and-zero-trust), [encryption and keys](@cloud/cloud-security/cloud-encryption), [cloud red and blue teams](@cloud/cloud-security/cloud-red-and-blue).' },
          ],
        },
        { t: 'p', text: 'The examples use AWS, Azure and Google Cloud terms where useful, but the ideas are provider-neutral. Numbers such as prices and SLAs change; the formulas and reasoning do not.' },
      ],
    },
    {
      id: 'ideas',
      title: 'Five ideas that explain most of it',
      lead: 'Carry these through.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Everything fails, all the time', body: 'With thousands of machines, something is always broken. Design for failure with redundancy and automation, rather than trying to prevent it.' },
            { title: 'Scale out, not up', body: 'Add many ordinary machines instead of one huge one. This needs the work to be divisible (see Amdahl’s law in the scaling guide) and the state to be managed.' },
            { title: 'Latency has a floor', body: 'Light in fibre travels about 200 km per millisecond. A round trip from Singapore to Europe cannot be under about 100 ms, whatever you pay.' },
            { title: 'Averages hide the pain', body: 'The 99th percentile, not the mean, is what users feel when requests fan out to many services.' },
            { title: 'Identity is the new perimeter', body: 'There is no trusted internal network in the cloud; every request is authenticated and authorised against policy.' },
          ],
        },
        { t: 'cloud-viz', viz: 'nines' },
        { t: 'callout', tone: 'tip', title: 'Try it', text: 'The lab above converts availability percentages into allowed downtime. "Three nines" (99.9%) sounds excellent and is 8.8 hours of outage a year; "five nines" is 5.3 minutes.' },
      ],
    },
  ],
  sources: [
    'Mell, P. & Grance, T. (2011). *The NIST Definition of Cloud Computing*. SP 800-145.',
    'Armbrust, M. et al. (2010). A view of cloud computing. *Communications of the ACM*, 53(4).',
    'Kleppmann, M. (2017). *Designing Data-Intensive Applications*. O’Reilly.',
    'Beyer, B. et al. (2016). *Site Reliability Engineering*. O’Reilly (free at sre.google/books).',
  ],
  related: ['cloud/fundamentals/what-is-cloud', 'cloud/scale-and-maths/reliability-and-slas', 'cybersecurity/start-here'],
}

export default guide
