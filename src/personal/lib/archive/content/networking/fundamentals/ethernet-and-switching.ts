import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Inside a building, devices connect through Ethernet: cables and switches that deliver frames from one device to another on the same network. Switches are quietly clever; they learn where devices are and forward frames only where needed. This guide explains MAC addresses, how a switch learns, how ARP maps IP addresses to MAC addresses, how loops are prevented by spanning tree, how VLANs split one physical network into several logical ones, and how Power over Ethernet powers devices such as cameras, access points and IoT gateways.',
  nutshell: [
    'A **MAC address** is a 48-bit hardware address. A **switch** builds a table of which MAC is on which port and forwards frames accordingly.',
    '**Unknown or broadcast** frames are **flooded** to every port in the VLAN.',
    '**ARP** finds the MAC address for a known IP address on the local network.',
    '**Spanning tree** blocks redundant links to stop frames looping forever.',
    '**VLANs** (802.1Q) split a switch into separate broadcast domains. **Trunks** carry several VLANs on one cable. **PoE** delivers power over the same cable.',
  ],
  sections: [
    {
      id: 'switch',
      title: 'How a switch works',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Learn', body: 'When a frame arrives, the switch records the source MAC address and the port it came from in its MAC table.' },
            { title: 'Forward', body: 'If the destination MAC is in the table, the frame goes out of that one port only.' },
            { title: 'Flood', body: 'If the destination is unknown, or the frame is broadcast, the switch sends it out of every port in the VLAN except the one it came in on.' },
            { title: 'Age out', body: 'Table entries expire after a few minutes without traffic (commonly 300 seconds).' },
          ],
        },
        {
          t: 'table',
          head: ['Device', 'Layer', 'Splits what', 'Notes'],
          rows: [
            ['Hub (obsolete)', '1', 'Nothing: repeats to all ports', 'One collision domain'],
            ['Switch', '2', 'Collision domains (one per port)', 'One broadcast domain per VLAN'],
            ['Router', '3', 'Broadcast domains', 'Connects different IP networks'],
            ['Layer 3 switch', '2 and 3', 'Both', 'Switches within VLANs and routes between them at wire speed'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'MAC addresses', text: 'A MAC address is written as six hexadecimal pairs, such as 3C:22:FB:12:AB:CD. The first three bytes identify the manufacturer (the OUI). MAC addresses are meant to be unique, but they can be changed in software, and many phones now randomise them for privacy.' },
      ],
    },
    {
      id: 'arp',
      title: 'ARP: from IP address to MAC address',
      blocks: [
        { t: 'p', text: 'To send an IPv4 packet to another device on the same subnet, your device needs its MAC address. It broadcasts an Address Resolution Protocol (ARP) request: “Who has 192.168.1.20? Tell 192.168.1.5”. The owner replies with its MAC address, and the answer is cached for a short time. For a destination outside the subnet, the device does ARP for the default gateway instead. IPv6 uses Neighbor Discovery for the same purpose.' },
        { t: 'callout', tone: 'warn', title: 'ARP has no authentication', text: 'Any device can claim to own an address (ARP spoofing), which lets an attacker on the local network intercept traffic. Defences include dynamic ARP inspection on managed switches, port security and encryption at higher layers.' },
      ],
    },
    {
      id: 'stp',
      title: 'Loops and spanning tree',
      blocks: [
        { t: 'p', text: 'Redundant links protect against failures, but in a switched network a loop is dangerous: broadcast frames circle forever and multiply (a broadcast storm), because Ethernet frames have no hop counter. The Spanning Tree Protocol (STP, IEEE 802.1D) elects a root switch, finds the best path to it from each switch, and blocks the other links. If an active link fails, a blocked one is brought up. Rapid Spanning Tree (RSTP, 802.1w) converges in seconds instead of tens of seconds.' },
        {
          t: 'list',
          items: [
            'Place the **root bridge** deliberately (a central, powerful switch) by setting its priority; do not leave it to the default.',
            'Enable **PortFast** or edge-port settings on ports facing end devices, so that they do not wait through STP states.',
            'Use **BPDU guard** to shut down edge ports that receive spanning-tree messages, which could signal a loop or rogue switch.',
            'Modern designs often use **routed** links or **link aggregation (LACP, 802.1AX)** to combine several links as one.',
          ],
        },
      ],
    },
    {
      id: 'vlan',
      title: 'VLANs and trunks',
      blocks: [
        { t: 'p', text: 'A virtual LAN splits one switch into several logical networks. Devices in different VLANs cannot talk at layer 2; a router (or layer 3 switch) must route between them. A trunk port carries several VLANs, tagging each frame with a 4-byte 802.1Q header containing a 12-bit VLAN ID (1 to 4094 usable).' },
        {
          t: 'table',
          head: ['Use', 'Why a separate VLAN'],
          rows: [
            ['Guest Wi-Fi', 'Keeps visitors away from internal systems'],
            ['IoT devices', 'Limits the damage if a cheap device is compromised'],
            ['Voice', 'Allows quality-of-service rules for phones'],
            ['Management', 'Restricts access to switch and router interfaces'],
            ['Servers and users', 'Applies different policies and firewalls'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'VLANs are not security by themselves',
          text: 'VLANs separate traffic, but a misconfigured trunk or a switch-spoofing attack can leak between them. Treat them as a segmentation tool that needs firewall rules between segments, and keep the native VLAN unused.',
        },
      ],
    },
    {
      id: 'poe',
      title: 'Ethernet speeds and Power over Ethernet',
      blocks: [
        {
          t: 'table',
          head: ['Standard', 'Typical medium', 'Speed', 'Note'],
          rows: [
            ['10BASE-T', 'Twisted pair', '10 Mbit/s', 'Historic'],
            ['100BASE-TX', 'Cat 5 twisted pair', '100 Mbit/s', 'Still used for simple IoT devices'],
            ['1000BASE-T', 'Cat 5e or better', '1 Gbit/s', 'The norm for desktops'],
            ['2.5G, 5G and 10GBASE-T', 'Cat 5e, 6, 6A', '2.5 to 10 Gbit/s', 'Wi-Fi access points and workstations'],
            ['Fibre (SR, LR)', 'Multimode and single-mode fibre', '10 to 400 Gbit/s and more', 'Data centres, backbones'],
          ],
          caption: 'Twisted-pair runs are limited to 100 m per segment.',
        },
        {
          t: 'table',
          head: ['PoE standard', 'Max power at the switch', 'Power available to the device'],
          rows: [
            ['802.3af (PoE)', '15.4 W', 'about 12.95 W'],
            ['802.3at (PoE+)', '30 W', 'about 25.5 W'],
            ['802.3bt Type 3 (PoE++)', '60 W', 'about 51 W'],
            ['802.3bt Type 4', '100 W', 'about 71 W'],
          ],
          caption: 'Power at the device is lower because of cable losses.',
        },
        { t: 'p', text: 'PoE lets one cable carry both data and power to IP cameras, access points, VoIP phones, door controllers and IoT gateways, with no need for a mains socket at the device. A PoE switch budgets total power across its ports, so check the total as well as the per-port rating.' },
        { t: 'links', items: [{ path: 'networking/fundamentals/ip-addressing-and-nat', note: 'Next: IP addressing' }, { path: 'networking/transport-and-services/sdn-and-virtual-networks', note: 'VXLAN and overlays' }] },
      ],
    },
  ],
  sources: [
    'IEEE 802.1D, 802.1Q, 802.1AX; IEEE 802.3 (Ethernet, including 802.3af, at, bt for Power over Ethernet).',
    'Plummer, D. C. (1982). An Ethernet Address Resolution Protocol. RFC 826.',
    'Perlman, R. (2000). Interconnections, 2nd edition. Addison-Wesley.',
    'Odom, W. (2020). CCNA 200-301 Official Cert Guide. Cisco Press.',
  ],
  related: ['networking/fundamentals/layers-and-packets', 'networking/fundamentals/ip-addressing-and-nat', 'cybersecurity/attack-surface/network-security'],
}

export default guide
