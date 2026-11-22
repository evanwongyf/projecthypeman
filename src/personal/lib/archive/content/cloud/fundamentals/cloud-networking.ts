import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In a cloud you build your own private network out of software: a virtual private cloud divided into subnets, connected by routes, guarded by security groups and exposed through gateways and load balancers. The central skill is address arithmetic: reading and carving CIDR blocks. This guide explains the pieces, shows how to calculate network sizes and subnet splits by hand, and includes a live subnet calculator.',
  nutshell: [
    'A **VPC** is your isolated virtual network with a private IP range; **subnets** divide it, usually one or more per availability zone.',
    'A **CIDR block** like \\(10.0.0.0/16\\) has \\(2^{32-16}=65{,}536\\) addresses; each extra prefix bit halves the block. Clouds reserve a few addresses per subnet (5 in AWS).',
    '**Public subnets** route to an internet gateway; **private subnets** reach out through a **NAT gateway**; **security groups** are stateful allow-lists on instances; **network ACLs** are stateless subnet filters.',
    '**Load balancers** spread traffic; **DNS** maps names to addresses; peering and transit gateways connect networks (which then must not overlap).',
  ],
  sections: [
    {
      id: 'cidr',
      title: 'CIDR and subnet arithmetic',
      lead: 'Counting addresses.',
      blocks: [
        { t: 'cloud-viz', viz: 'cidr' },
        {
          t: 'math',
          tex: String.raw`N_{\text{addr}}=2^{32-p},\qquad N_{\text{usable}}=2^{32-p}-r,\qquad \text{netmask}=\underbrace{1\ldots1}_{p}\underbrace{0\ldots0}_{32-p},\qquad \text{subnets}=2^{p'-p}`,
          caption: 'The size of an IPv4 block with prefix length p, usable hosts after r reserved addresses, the mask, and the number of subnets from extending the prefix to p′.',
          where: [{ sym: 'p', def: 'the prefix length: how many leading bits are the network part' }, { sym: 'r', def: 'reserved addresses (2 in classic networking; 5 in an AWS subnet)' }],
          syntax: [
            { sym: '2^{32-p}', say: 'the host bits are free to vary. Effect: each bit you take for the network halves the addresses. A /24 has 256, a /25 has 128, a /28 has 16. Why: counting the combinations of the remaining bits.' },
            { sym: '2^{p\'-p}', say: 'splitting a /16 into /24s uses 8 more network bits, so 2⁸ = 256 subnets. Effect: more subnets means smaller subnets; you trade the two.' },
            { sym: 'r', say: 'the network address and broadcast always, and in AWS the router, DNS and one reserved for future use: 5 in total. Effect: a /28 (16 addresses) has only 11 usable in AWS.' },
          ],
          worked: {
            title: 'Plan a VPC across three zones',
            steps: ['VPC: 10.0.0.0/16 → 65,536 addresses.', 'Need public and private subnets in each of 3 AZs: 6 subnets. Using /24 each: 6 × 256 = 1,536 addresses, leaving plenty.', 'Subnets: 10.0.0.0/24, 10.0.1.0/24, 10.0.2.0/24 (public); 10.0.10.0/24, 10.0.11.0/24, 10.0.12.0/24 (private).', 'Each /24 in AWS has 256 − 5 = 251 usable addresses.'],
            answer: 'Check that 10.0.0.0/24 spans 10.0.0.0–10.0.0.255 and the next block starts at 10.0.1.0; blocks must be aligned on multiples of their size. A /20 (4,096 addresses) must start at a multiple of 16 in the third octet (10.0.16.0, 10.0.32.0…).',
          },
        },
        { t: 'callout', tone: 'warn', title: 'Plan for peering', text: 'Two networks with overlapping ranges cannot be peered or joined by a VPN without translation. Plan address space across the organisation (and avoid the common 10.0.0.0/16 for every VPC), reserving room for growth: resizing later is painful.' },
      ],
    },
    {
      id: 'pieces',
      title: 'The building blocks',
      lead: 'From VPC to the internet.',
      blocks: [
        {
          t: 'table',
          head: ['Component', 'What it does', 'Security note'],
          rows: [
            ['VPC', 'Your isolated private network', 'Default VPCs are convenient and permissive; build your own'],
            ['Subnet', 'A range within a zone; public if it routes to an internet gateway, otherwise private', 'Keep databases and internal services in private subnets'],
            ['Route table', 'Rules for where traffic goes by destination prefix (longest prefix wins)', 'A 0.0.0.0/0 route to the internet gateway makes a subnet public'],
            ['Internet gateway', 'Two-way internet access for public subnets', 'Instances still need a public IP and an allowing security group'],
            ['NAT gateway', 'Lets private instances start outbound connections (updates, APIs) without being reachable inbound', 'Not a security control by itself; also costs per GB'],
            ['Security group', 'Stateful allow rules attached to an instance or interface; return traffic is automatically allowed', 'Default deny inbound. Avoid 0.0.0.0/0 on SSH/RDP and database ports'],
            ['Network ACL', 'Stateless allow/deny rules on a subnet, evaluated in numbered order', 'A coarse extra layer; return traffic must be allowed explicitly'],
            ['Load balancer', 'Distributes requests across targets, health-checks them, terminates TLS', 'Put the application behind it, not exposed directly'],
            ['Peering / transit gateway / VPN / Direct Connect', 'Connect VPCs and on-premises networks', 'Peering is non-transitive; check which routes are shared'],
          ],
        },
        { t: 'flow', title: 'A request to a typical web application', nodes: [{ label: 'User', sub: 'browser', tone: 'human' }, { label: 'DNS', sub: 'name → load balancer address', tone: 'data' }, { label: 'CDN / WAF', sub: 'cache and filter', tone: 'process' }, { label: 'Load balancer', sub: 'public subnet, TLS', tone: 'process' }, { label: 'App servers', sub: 'private subnet, security group allows only the balancer', tone: 'model' }, { label: 'Database', sub: 'private subnet, allows only the app tier', tone: 'data' }], caption: 'Each tier accepts traffic only from the tier in front: a chain of least-privilege allow rules.' },
      ],
    },
  ],
  sources: [
    'Fuller, V. & Li, T. (2006). *RFC 4632: Classless Inter-domain Routing (CIDR)*. IETF.',
    'Rekhter, Y. et al. (1996). *RFC 1918: Address Allocation for Private Internets*. IETF.',
    'AWS. *Amazon VPC User Guide: VPC and subnet sizing*.',
    'Kurose, J. & Ross, K. (2021). *Computer Networking: A Top-Down Approach*, ch. 4. Pearson.',
  ],
  related: ['cybersecurity/attack-surface/network-security', 'cloud/fundamentals/regions-and-latency', 'cloud/cloud-security/iam-and-zero-trust', 'cloud/scale-and-maths/caching-and-load-balancing'],
}

export default guide
