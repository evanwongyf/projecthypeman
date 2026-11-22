import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'For decades, every router and switch was a sealed box that ran its own control software. Software-defined networking (SDN) separates the brain (the control plane) from the muscle (the data plane), so that networks can be programmed, automated and virtualised. Together with overlays such as VXLAN and the virtual networks of the cloud, this is how modern data centres, WANs and Kubernetes clusters build many isolated networks on shared hardware. This guide explains the ideas, the main technologies, and the questions to ask when choosing among them.',
  nutshell: [
    'The **control plane** decides where traffic should go; the **data plane** moves packets. SDN **separates** them and centralises control in software.',
    '**OpenFlow** (2008) was the first widely known protocol for a controller to program switches; modern approaches also use **P4**, **gNMI/NETCONF** and cloud-native APIs.',
    '**Overlays** such as **VXLAN** tunnel Ethernet frames over IP (UDP port 4789) with a **24-bit network ID**, allowing about 16 million isolated segments (versus 4,094 VLANs).',
    '**NFV** runs network functions (firewalls, load balancers) as software on standard servers.',
    '**SD-WAN** steers traffic across several WAN links (broadband, MPLS, 5G) by policy.',
  ],
  sections: [
    {
      id: 'planes',
      title: 'Control plane and data plane',
      blocks: [
        {
          t: 'table',
          head: ['Plane', 'What it does', 'Speed', 'Traditional location'],
          rows: [
            ['Management plane', 'Configuration, monitoring, logging', 'Seconds to minutes', 'CLI, SNMP, scripts'],
            ['Control plane', 'Builds the forwarding rules (routing protocols, spanning tree, ARP)', 'Milliseconds to seconds', 'Software on each device'],
            ['Data plane', 'Forwards each packet according to the rules', 'Microseconds, in hardware', 'ASICs in each device'],
          ],
        },
        { t: 'p', text: 'In SDN, a controller holds the global view and computes the rules. It then pushes forwarding rules (flow entries) to the switches. The switch simply matches packet fields against the rules and applies an action: forward, drop, rewrite, send to the controller.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Benefits', title: 'Global view and automation', body: 'Policies can be applied network-wide from code. Traffic engineering, rapid provisioning and consistent security rules become easier.' },
            { tag: 'Risks', title: 'The controller is critical', body: 'A single controller is a point of failure and attack, so real deployments use clusters and keep local fallback behaviour.' },
            { tag: 'In practice', title: 'Hyperscalers lead', body: 'Large cloud providers build their own SDN stacks. Google’s B4 WAN and Jupiter fabric are well-documented examples of centralised control at scale.' },
            { tag: 'Vendors', title: 'Mixed approaches', body: 'Enterprise vendors offer controllers that manage a fabric of switches (intent-based networking). Many are partly SDN and partly traditional protocols.' },
          ],
        },
      ],
    },
    {
      id: 'overlay',
      title: 'Overlays and VXLAN',
      blocks: [
        { t: 'p', text: 'Cloud and data-centre networks run many tenants on the same physical hardware, each of which expects its own isolated network. A physical underlay, an ordinary routed IP network, carries traffic between servers. On top of it, an overlay creates virtual networks by tunnelling: the original Ethernet frame is wrapped in an outer packet addressed between servers.' },
        {
          t: 'steps',
          items: [
            { title: 'Original frame', body: 'A virtual machine sends an Ethernet frame to another VM in the same virtual network.' },
            { title: 'VTEP encapsulates', body: 'The virtual tunnel endpoint on the source server wraps the frame in a VXLAN header (carrying a 24-bit VNI identifying the virtual network), then in UDP (destination port 4789), then in an outer IP packet to the destination server’s VTEP.' },
            { title: 'Underlay routes it', body: 'The physical network sees only IP packets between servers, and routes them in the normal way.' },
            { title: 'Decapsulate', body: 'The destination VTEP removes the outer headers, checks the VNI, and delivers the original frame to the VM.' },
          ],
        },
        {
          t: 'table',
          head: ['Technology', 'Idea', 'Notes'],
          rows: [
            ['VLAN (802.1Q)', '12-bit tag in a frame; up to 4,094 segments', 'Limited in number; spans one Layer 2 domain'],
            ['VXLAN', 'MAC-in-UDP overlay; 24-bit VNI gives about 16 million segments', 'Adds about 50 bytes of overhead, so adjust MTU'],
            ['GENEVE', 'A flexible overlay with extensible headers', 'Used by newer virtual-network stacks'],
            ['GRE, IPsec, WireGuard tunnels', 'Point-to-point tunnels', 'Often used for VPNs and site-to-site links'],
            ['EVPN', 'A BGP-based control plane for Ethernet overlays', 'Distributes MAC and IP reachability in data-centre fabrics'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Mind the MTU', text: 'Overlay headers eat into the packet size. If the physical MTU is 1,500 bytes, VXLAN leaves about 1,450 for the inner packet. Without adjusting, large packets are dropped or fragmented, causing mysterious slowness, one of the most common problems with overlays.' },
      ],
    },
    {
      id: 'nfv',
      title: 'NFV, SD-WAN and virtual networks in the cloud',
      blocks: [
        {
          t: 'table',
          head: ['Concept', 'What it is', 'Example'],
          rows: [
            ['NFV', 'Network functions as software on standard servers instead of dedicated appliances', 'Virtual firewalls, load balancers, 5G core functions'],
            ['SD-WAN', 'A software overlay that steers traffic across several links based on policy and measured quality', 'A branch uses broadband for web traffic and MPLS for critical apps, switching automatically on poor performance'],
            ['Cloud VPC or VNet', 'A software-defined private network in a cloud, with subnets, route tables and security groups', 'See the cloud networking guide for CIDR planning'],
            ['Kubernetes CNI', 'Plugins that give each pod an IP and connect pods across nodes, often with overlays or BGP', 'Calico, Cilium, Flannel'],
            ['Service mesh', 'Sidecar proxies that manage service-to-service traffic, encryption and policy', 'Istio, Linkerd'],
            ['Zero trust networking', 'Identity-based access rather than trust by network location', 'See the cloud security shelf'],
          ],
        },
        {
          t: 'dodont',
          do: ['Plan address ranges and MTU before building overlays.', 'Automate configuration with version-controlled code (infrastructure as code).', 'Monitor both underlay and overlay: a fault in either looks like “the network is slow”.'],
          dont: ['Assume virtual networks are secure by default: add firewall and segmentation policy.', 'Forget that the controller is a high-value target.', 'Stack tunnels carelessly: each adds overhead and troubleshooting complexity.'],
        },
        { t: 'links', items: [{ path: 'cloud/fundamentals/cloud-networking', note: 'Cloud networking and subnet arithmetic' }, { path: 'cloud/operations/devops-and-iac', note: 'Infrastructure as code' }, { path: 'networking/iot-foundations/iot-architecture', note: 'Next: IoT architecture' }] },
      ],
    },
  ],
  sources: [
    'McKeown, N., et al. (2008). OpenFlow: enabling innovation in campus networks. ACM Computer Communication Review.',
    'Mahalingam, M., et al. (2014). Virtual eXtensible Local Area Network (VXLAN). RFC 7348.',
    'Jain, S., et al. (2013). B4: experience with a globally-deployed software defined WAN. ACM SIGCOMM.',
    'Singh, A., et al. (2015). Jupiter rising: a decade of Clos topologies and centralized control in Google’s datacenter network. ACM SIGCOMM.',
    'Kreutz, D., et al. (2015). Software-defined networking: a comprehensive survey. Proceedings of the IEEE.',
  ],
  related: ['networking/transport-and-services/performance-and-qos', 'cloud/fundamentals/cloud-networking', 'networking/iot-foundations/iot-architecture'],
}

export default guide
