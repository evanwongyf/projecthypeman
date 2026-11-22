import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A router’s job is simple to state: look at the destination address in each packet and send the packet one step closer. Doing it across the entire Internet, with tens of thousands of independently run networks and nearly a million routes, depends on protocols that let routers learn about the network and on rules for choosing among many paths. This guide covers how forwarding works (longest-prefix match), the two main families of interior routing protocols (distance vector and link state, with OSPF), BGP, the protocol that glues the Internet together, and how routing fails, with real incidents.',
  nutshell: [
    'A router’s **forwarding** uses its **routing table**: it picks the **most specific** matching prefix (**longest-prefix match**).',
    '**Static routes** are typed in by hand; **dynamic routing protocols** let routers learn and adapt.',
    '**Distance-vector** protocols (RIP) share their tables with neighbours; **link-state** protocols (OSPF) flood the topology and each router computes shortest paths (Dijkstra).',
    '**BGP** exchanges routes between **autonomous systems** (independent networks), choosing paths by **policy**, not just shortest distance.',
    'BGP trusts what it is told, so **route leaks and hijacks** happen. **RPKI** is a defence.',
  ],
  sections: [
    {
      id: 'forward',
      title: 'Forwarding and longest-prefix match',
      blocks: [
        { t: 'p', text: 'A routing table is a list of prefixes, each with a next hop and an outgoing interface. When a packet arrives, the router finds all prefixes that contain the destination address and chooses the one with the longest prefix, since it is the most specific.' },
        {
          t: 'table',
          head: ['Prefix', 'Next hop', 'Interface'],
          rows: [
            ['10.0.0.0/8', '192.0.2.1', 'eth0'],
            ['10.1.0.0/16', '192.0.2.2', 'eth1'],
            ['10.1.2.0/24', '192.0.2.3', 'eth2'],
            ['0.0.0.0/0 (default)', '192.0.2.254', 'eth3'],
          ],
        },
        {
          t: 'example',
          title: 'Which route is chosen?',
          lines: [
            { label: 'Destination 10.1.2.77', text: 'Matches /8, /16, /24 and the default. The longest is /24, so it goes to 192.0.2.3.' },
            { label: 'Destination 10.1.9.5', text: 'Matches /8, /16 and the default (not /24, since 10.1.9 is not 10.1.2). Longest is /16: next hop 192.0.2.2.' },
            { label: 'Destination 10.200.0.1', text: 'Matches /8 and the default. Longest is /8: next hop 192.0.2.1.' },
            { label: 'Destination 8.8.8.8', text: 'Matches only the default route: next hop 192.0.2.254.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Routing and forwarding', text: 'Routing is building the table (control plane); forwarding is using it to move each packet (data plane). Big routers do forwarding in specialised hardware at tens of millions of packets per second.' },
      ],
    },
    {
      id: 'igp',
      title: 'Interior routing: distance vector and link state',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'How it works', 'Examples', 'Strengths and weaknesses'],
          rows: [
            ['Static', 'Routes typed by an administrator', 'Default route to the ISP', 'Simple and predictable; does not adapt to failures'],
            ['Distance vector', 'Each router tells neighbours its distances to networks; routers learn by hearsay (Bellman-Ford)', 'RIP (hop count, limit 15), EIGRP', 'Simple; slow to converge, can loop'],
            ['Link state', 'Each router floods a description of its links; every router builds the full map and computes shortest paths (Dijkstra)', 'OSPF, IS-IS', 'Fast convergence, scales to large networks with areas; more complex'],
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Discover neighbours', body: 'OSPF routers exchange hello packets to find neighbours and form adjacencies.' },
            { title: 'Flood link-state advertisements', body: 'Each router describes its links and costs, and these are flooded across the area.' },
            { title: 'Build the map', body: 'Every router holds the same database of the area’s topology.' },
            { title: 'Compute shortest paths', body: 'Each router runs Dijkstra’s algorithm with itself as the root, and installs the best next hop for each prefix.' },
            { title: 'React to change', body: 'When a link fails, the change is flooded and every router recomputes within moments.' },
          ],
        },
        {
          t: 'example',
          title: 'OSPF cost',
          lines: [
            { label: 'Cost formula', text: 'OSPF cost = reference bandwidth ÷ interface bandwidth. With the default reference of 100 Mbit/s, a 100 Mbit/s link costs 1 and a 10 Mbit/s link costs 10.' },
            { label: 'Problem', text: 'A 1 Gbit/s and a 10 Gbit/s link would both cost 1 (the minimum), so OSPF cannot tell them apart.' },
            { label: 'Fix', text: 'Raise the reference bandwidth (for example to 100,000 Mbit/s) on all routers, so that costs reflect modern speeds.' },
          ],
        },
      ],
    },
    {
      id: 'bgp',
      title: 'BGP: the routing of the Internet',
      blocks: [
        { t: 'p', text: 'The Internet is a network of networks. Each independently administered network, an ISP, a university, a cloud provider, a large company, is an autonomous system (AS) with a number (ASN). Routers at the edge of each AS speak the Border Gateway Protocol (BGP) to neighbouring ASes to announce which prefixes they can reach. BGP is a path-vector protocol: each announcement carries the list of ASes it passed through (the AS path), which prevents loops and lets networks apply policy.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Policy', title: 'Business decides the route', body: 'ASes prefer customers (they pay) over peers (free exchange) over providers (you pay). Shortest path comes later.' },
            { tag: 'Relationships', title: 'Customer, peer, provider', body: 'A customer pays a provider for transit. Peers exchange traffic between their own customers. Rules about what to announce to whom keep traffic from flowing the wrong way.' },
            { tag: 'Scale', title: 'About a million prefixes', body: 'The global IPv4 routing table holds close to a million entries, and growing. Routers need specialised memory to hold it.' },
            { tag: 'Convergence', title: 'Slow to settle', body: 'After a change, BGP can take tens of seconds to minutes to converge, with temporary loops or loss.' },
          ],
        },
        {
          t: 'table',
          head: ['Incident', 'What happened'],
          rows: [
            ['Pakistan Telecom and YouTube (2008)', 'Pakistan Telecom announced a more specific route for YouTube’s address range to block it locally; the announcement leaked to the world and YouTube traffic was black-holed for about two hours'],
            ['Facebook outage (October 2021)', 'A configuration change withdrew BGP routes to Facebook’s DNS servers, making its services unreachable for about six hours; the company’s own tools were also affected'],
            ['Route leaks (various)', 'A network accidentally announced routes it should not, sending traffic through it; several large leaks have disrupted services regionally'],
          ],
          caption: 'Summarised from public post-mortems and analyses.',
        },
        { t: 'callout', tone: 'warn', title: 'Trust is the weakness', text: 'BGP was designed when networks trusted each other. The Resource Public Key Infrastructure (RPKI) lets a prefix owner publish signed authorisation (a ROA) for which AS may originate it, so that routers can reject invalid origins (route origin validation). Adoption has grown but is not complete, and RPKI does not secure the whole path.' },
        { t: 'links', items: [{ path: 'networking/transport-and-services/tcp-udp-and-quic', note: 'Next: transport protocols' }, { path: 'cybersecurity/attack-surface/network-security', note: 'Network attacks' }, { path: 'networking/transport-and-services/sdn-and-virtual-networks', note: 'Software-defined control planes' }] },
      ],
    },
  ],
  sources: [
    'Rekhter, Y., Li, T., and Hares, S. (2006). A Border Gateway Protocol 4 (BGP-4). RFC 4271.',
    'Moy, J. (1998). OSPF Version 2. RFC 2328.',
    'Gao, L. (2001). On inferring autonomous system relationships in the Internet. IEEE/ACM Transactions on Networking.',
    'Lepinski, M., and Kent, S. (2012). An Infrastructure to Support Secure Internet Routing. RFC 6480.',
    'Cloudflare and Facebook engineering post-mortems on the October 2021 outage; RIPE NCC analysis of the 2008 YouTube hijack.',
  ],
  related: ['networking/fundamentals/ip-addressing-and-nat', 'networking/transport-and-services/tcp-udp-and-quic', 'cybersecurity/attack-surface/network-security'],
}

export default guide
