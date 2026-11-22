import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every device on the Internet needs an address, and the way addresses are written and grouped determines how routing works. IPv4 addresses are 32-bit numbers, written as four decimal numbers; IPv6 addresses are 128-bit. Networks are described by a prefix length (CIDR), and subnetting is the skill of splitting a block into smaller networks. NAT lets many devices share one public address and kept IPv4 alive long past its expected exhaustion. This guide teaches the arithmetic carefully with worked examples, then covers private ranges, DHCP, NAT and IPv6.',
  nutshell: [
    'An **IPv4 address** is 32 bits, written as four bytes: 192.168.10.130. A **prefix length** (/26) says how many leading bits identify the network.',
    'A **/n** network has **2^(32−n)** addresses, of which **2^(32−n) − 2** are usable for hosts (network and broadcast addresses are reserved).',
    '**Private ranges** (10/8, 172.16/12, 192.168/16) are not routed on the Internet; **NAT** translates them to a public address.',
    '**DHCP** hands out addresses automatically (Discover, Offer, Request, Acknowledge).',
    '**IPv6** has 128-bit addresses, usually /64 on a LAN, with automatic configuration. It is needed because IPv4 ran out.',
  ],
  sections: [
    {
      id: 'ipv4',
      title: 'IPv4 addresses and subnets',
      blocks: [
        { t: 'p', text: 'An IPv4 address has 32 bits, written as four decimal numbers from 0 to 255 (one per byte). The network part and host part are separated by a prefix length. In 192.168.10.130/26, the first 26 bits identify the network and the last 6 bits identify the host. The same information appears as a subnet mask: /26 is 255.255.255.192.' },
        {
          t: 'math',
          tex: '\\text{usable hosts} = 2^{\\,32 - n} - 2',
          caption: 'Number of host addresses in an IPv4 network with prefix length n.',
          plain: 'A /n network has 32 − n bits left over for the host. With k such bits there are 2 to the power k combinations. Two of them are reserved: the first (the network address, all host bits zero) and the last (the broadcast address, all host bits one).',
          where: [
            { sym: 'n', def: 'the prefix length: how many leading bits are the network' },
            { sym: '32 - n', def: 'the number of bits left for the host part' },
          ],
          syntax: [
            { sym: '2^{k}', say: '“two to the power k”: 2 multiplied by itself k times.' },
            { sym: '-2', say: 'Subtract the network and broadcast addresses.' },
          ],
          worked: {
            title: 'Subnet 192.168.10.130/26',
            steps: [
              'Host bits: \\(32 - 26 = 6\\). Addresses in the block: \\(2^6 = 64\\). Usable hosts: \\(64 - 2 = 62\\).',
              'The block size is 64, so networks start at multiples of 64 in the last byte: 0, 64, 128, 192.',
              '130 lies in the block starting at 128. So the network address is \\(192.168.10.128\\).',
              'The block runs from 128 to \\(128 + 63 = 191\\). The broadcast address is \\(192.168.10.191\\).',
              'Usable hosts: \\(192.168.10.129\\) to \\(192.168.10.190\\).',
            ],
            answer: 'Network 192.168.10.128/26, broadcast 192.168.10.191, 62 usable host addresses (.129 to .190). The subnet mask is 255.255.255.192.',
          },
        },
        {
          t: 'table',
          head: ['Prefix', 'Mask', 'Addresses', 'Usable hosts'],
          rows: [
            ['/8', '255.0.0.0', '16,777,216', '16,777,214'],
            ['/16', '255.255.0.0', '65,536', '65,534'],
            ['/24', '255.255.255.0', '256', '254'],
            ['/26', '255.255.255.192', '64', '62'],
            ['/27', '255.255.255.224', '32', '30'],
            ['/28', '255.255.255.240', '16', '14'],
            ['/30', '255.255.255.252', '4', '2 (point-to-point links)'],
            ['/31', '255.255.255.254', '2', '2 (allowed on point-to-point links, RFC 3021)'],
            ['/32', '255.255.255.255', '1', 'A single host route'],
          ],
        },
        {
          t: 'example',
          title: 'Splitting a /24 for four departments',
          lines: [
            { label: 'Need', text: 'Four subnets from 10.20.30.0/24, each with room for up to 50 hosts.' },
            { label: 'Bits', text: '50 hosts need 6 host bits (62 usable), so each subnet is a /26. A /24 splits into \\(2^{26-24} = 4\\) subnets of /26.' },
            { label: 'Subnets', text: '10.20.30.0/26, 10.20.30.64/26, 10.20.30.128/26, 10.20.30.192/26.' },
            { label: 'Tip', text: 'Leave room to grow. If a department may reach 80 hosts, a /25 (126 usable) is needed instead.' },
          ],
        },
      ],
    },
    {
      id: 'private',
      title: 'Private, special and reserved ranges',
      blocks: [
        {
          t: 'table',
          head: ['Range', 'Purpose'],
          rows: [
            ['10.0.0.0/8', 'Private (RFC 1918): large networks'],
            ['172.16.0.0/12', 'Private (172.16.0.0 to 172.31.255.255)'],
            ['192.168.0.0/16', 'Private: home and small networks'],
            ['100.64.0.0/10', 'Carrier-grade NAT (shared address space)'],
            ['127.0.0.0/8', 'Loopback (this machine); 127.0.0.1 is “localhost”'],
            ['169.254.0.0/16', 'Link-local: self-assigned when DHCP fails'],
            ['224.0.0.0/4', 'Multicast'],
            ['0.0.0.0/0', 'Default route (everything)'],
          ],
        },
      ],
    },
    {
      id: 'nat',
      title: 'DHCP and NAT',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Discover', body: 'A new device broadcasts “is there a DHCP server?”.' },
            { title: 'Offer', body: 'The server proposes an address, mask, gateway, DNS servers and lease time.' },
            { title: 'Request', body: 'The device asks to use that address.' },
            { title: 'Acknowledge', body: 'The server confirms. The device renews the lease at half the lease time.' },
          ],
        },
        { t: 'p', text: 'Network address translation (NAT) rewrites addresses as packets cross the boundary between a private network and the Internet. The common form (NAPT, or “PAT”) also rewrites port numbers, so many private devices share one public IP address. The router keeps a table mapping each internal address and port to an external port, and uses it to send replies back.' },
        {
          t: 'table',
          head: ['Effect of NAT', 'Consequence'],
          rows: [
            ['Many devices share one address', 'Extended the life of IPv4 by decades'],
            ['Inbound connections are blocked by default', 'Looks like a firewall, but it is not a security feature in itself'],
            ['Hosts behind NAT are not directly reachable', 'Peer-to-peer and servers need port forwarding or traversal techniques (STUN, relays)'],
            ['Carrier-grade NAT', 'ISPs share one address among many customers; some services see many users from one address'],
            ['IPv6', 'Designed to restore end-to-end addressing without NAT'],
          ],
        },
      ],
    },
    {
      id: 'ipv6',
      title: 'IPv6',
      blocks: [
        { t: 'p', text: 'IPv4 has about 4.3 billion addresses, and regional registries ran out of fresh blocks between 2011 and 2019. IPv6 uses 128-bit addresses: about 3.4 × 10^38. They are written in hexadecimal, in groups of 16 bits separated by colons, with leading zeros and one run of zero groups shortened: 2001:db8::1. A typical LAN is a /64, which leaves 64 bits for hosts.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Autoconfiguration', title: 'SLAAC', body: 'A device builds its address from the network prefix announced by the router, plus an interface identifier. DHCPv6 is also available.' },
            { tag: 'Address types', title: 'Global, link-local, unique-local', body: 'Global unicast addresses (currently 2000::/3) are routable; link-local (fe80::/10) work only on the local link; unique-local (fc00::/7) are the private equivalent.' },
            { tag: 'Privacy', title: 'Temporary addresses', body: 'Devices can rotate addresses so that they cannot be tracked by a stable identifier.' },
            { tag: 'Transition', title: 'Dual stack and translation', body: 'Most networks run IPv4 and IPv6 together; translation (NAT64) lets IPv6-only devices reach IPv4 servers. Many mobile networks and IoT deployments are IPv6-first.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Why IoT cares', text: 'With billions of devices, IPv6 gives each a globally unique address without NAT, which suits protocols such as Thread and Matter that are built on IPv6. It also makes careful firewalling of devices even more important, since they can be directly reachable.' },
        { t: 'links', items: [{ path: 'networking/fundamentals/routing', note: 'Next: routing' }, { path: 'cloud/fundamentals/cloud-networking', note: 'Subnet arithmetic in the cloud' }] },
      ],
    },
  ],
  sources: [
    'Postel, J. (1981). Internet Protocol. RFC 791; Fuller, V., and Li, T. (2006). Classless Inter-domain Routing (CIDR). RFC 4632.',
    'Rekhter, Y., et al. (1996). Address Allocation for Private Internets. RFC 1918.',
    'Droms, R. (1997). Dynamic Host Configuration Protocol. RFC 2131.',
    'Deering, S., and Hinden, R. (2017). Internet Protocol, Version 6 (IPv6) Specification. RFC 8200.',
    'Srisuresh, P., and Egevang, K. (2001). Traditional IP Network Address Translator (Traditional NAT). RFC 3022.',
  ],
  related: ['networking/fundamentals/ethernet-and-switching', 'networking/fundamentals/routing', 'cloud/fundamentals/cloud-networking'],
}

export default guide
