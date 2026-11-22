import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most connected devices talk over short distances: a watch to a phone, a bulb to a hub, a lock to a doorbell, a tag to a reader. Several radio technologies compete for these jobs, each tuned to a different balance of power, range, data rate and ecosystem. This guide compares Bluetooth Low Energy, the IEEE 802.15.4 family (Zigbee and Thread), Z-Wave, NFC and RFID, explains how Matter sits on top to unify smart-home devices, and gives a framework for choosing.',
  nutshell: [
    '**Bluetooth Low Energy (BLE)**: 2.4 GHz, very low power, in every phone. **Bluetooth 5** added a 2 Mbit/s mode and long-range coded modes.',
    '**802.15.4** is a low-power, low-rate radio standard (250 kbit/s at 2.4 GHz) used by **Zigbee** and **Thread**. Both form **meshes**.',
    '**Thread** carries **IPv6** natively and has no single point of failure; **Matter** is an application layer that runs over Thread, Wi-Fi and Ethernet.',
    '**Z-Wave** uses sub-GHz bands, which avoid 2.4 GHz crowding. **NFC** works over a few centimetres; **RFID** tags are read from centimetres to metres.',
    'Choose by **ecosystem and power** first, then range and speed.',
  ],
  sections: [
    {
      id: 'compare',
      title: 'At a glance',
      blocks: [
        {
          t: 'table',
          head: ['Technology', 'Band', 'Typical range', 'Data rate', 'Topology', 'Strengths'],
          rows: [
            ['Bluetooth LE', '2.4 GHz', '10 to 100 m (longer with coded PHY)', '125 kbit/s to 2 Mbit/s', 'Star, broadcast, mesh (Bluetooth Mesh)', 'In every phone; extremely low power'],
            ['Zigbee', '2.4 GHz (also sub-GHz)', '10 to 100 m per hop', '250 kbit/s', 'Mesh', 'Mature, low-power mesh; large device ecosystems'],
            ['Thread', '2.4 GHz', '10 to 100 m per hop', '250 kbit/s', 'Self-healing mesh', 'IP-native (IPv6), no proprietary hub needed'],
            ['Z-Wave', 'Sub-GHz (908 MHz US; 868 MHz EU; regional)', '30 to 100 m per hop', '9.6 to 100 kbit/s', 'Mesh', 'Certified interoperability; less 2.4 GHz interference'],
            ['Wi-Fi (incl. HaLow 802.11ah)', '2.4, 5, 6 GHz (HaLow: sub-GHz)', '30 to 100 m (HaLow: up to ~1 km)', 'Mbit/s (HaLow: hundreds of kbit/s to Mbit/s)', 'Star', 'High throughput; IP infrastructure'],
            ['NFC', '13.56 MHz', 'Under 4 cm', 'Up to 424 kbit/s', 'Point to point', 'Tap to pair or pay; passive tags need no battery'],
            ['RFID (UHF)', '860 to 960 MHz', 'Up to several metres', 'Tag ID reads', 'Reader and tags', 'Inventory and tracking'],
          ],
          caption: 'Figures are typical, and vary with antenna, power, environment and the exact standard version.',
        },
      ],
    },
    {
      id: 'ble',
      title: 'Bluetooth Low Energy',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Channels', title: '40 channels', body: 'Three advertising channels (37, 38, 39) where devices announce themselves, and 37 data channels with frequency hopping.' },
            { tag: 'GATT', title: 'Services and characteristics', body: 'A BLE device exposes data as characteristics grouped into services (for example, the Heart Rate service). A phone reads, writes or subscribes to notifications.' },
            { tag: 'Roles', title: 'Peripheral and central', body: 'A sensor advertises as a peripheral; a phone connects as the central. Beacons only broadcast.' },
            { tag: 'Bluetooth 5', title: 'Faster and longer', body: 'A 2 Mbit/s PHY for speed; coded PHYs (125 and 500 kbit/s) for roughly four times the range at lower data rates; extended advertising.' },
          ],
        },
        {
          t: 'list',
          items: [
            '**Connection interval** (from 7.5 ms to 4 s) trades latency against power: long intervals let the radio sleep.',
            '**Advertising only** is cheaper than connecting: many sensors broadcast readings in advertisement packets that any nearby device can read.',
            '**Bluetooth Mesh** allows many-to-many networks over BLE, used in lighting control; it uses flooding, so it suits small messages.',
            '**Security**: modern pairing uses elliptic-curve key exchange (LE Secure Connections). Older “Just Works” pairing offers no protection against an active attacker.',
          ],
        },
      ],
    },
    {
      id: 'mesh',
      title: '802.15.4, Zigbee and Thread',
      blocks: [
        { t: 'p', text: 'IEEE 802.15.4 defines the lowest layers of a low-power wireless personal area network: a 250 kbit/s radio at 2.4 GHz, with short frames (127 bytes). Higher-layer protocols turn it into a usable network. Zigbee (from the Zigbee Alliance, now the Connectivity Standards Alliance) defines its own network and application layers, with coordinators, routers and end devices. Thread, backed by Google, Apple and others, instead carries IPv6 using 6LoWPAN header compression, so devices are ordinary IP nodes.' },
        {
          t: 'table',
          head: ['', 'Zigbee', 'Thread'],
          rows: [
            ['Network layer', 'Zigbee’s own', 'IPv6 with 6LoWPAN'],
            ['Hub', 'A coordinator is required to form the network', 'No single hub: border routers connect the mesh to other networks and any can fail without breaking it'],
            ['Application layer', 'Zigbee Cluster Library, used by many products', 'Not specified by Thread itself; Matter commonly runs on top'],
            ['Power', 'Routers are mains-powered; end devices can sleep', 'Similar: routers mains-powered, sleepy end devices'],
            ['Security', 'AES-128 with network and link keys', 'AES-128 CCM; commissioning with a PAKE-style process'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Meshes: more nodes, more reach', text: 'In a mesh, each mains-powered node relays for others, extending range and giving alternative paths if one fails. Battery devices usually stay at the edge as sleepy end devices so that they can conserve power.' },
      ],
    },
    {
      id: 'matter',
      title: 'Matter: one language for the smart home',
      blocks: [
        { t: 'p', text: 'Smart-home gadgets historically lock you into a brand or a hub. Matter, from the Connectivity Standards Alliance and first released in late 2022, is an application layer that lets devices from different makers work with all major ecosystems (Apple, Google, Amazon, Samsung). It runs over IP: Wi-Fi, Ethernet and Thread. Devices are commissioned with a QR code, often using Bluetooth LE to set up, and then communicate locally, even without the Internet.' },
        {
          t: 'table',
          head: ['Feature', 'Detail'],
          rows: [
            ['Transport', 'IPv6 over Wi-Fi, Ethernet or Thread (BLE is used for commissioning)'],
            ['Local control', 'Devices are controlled on the home network, without needing a cloud round trip'],
            ['Multi-admin', 'One device can be shared with several ecosystems at once'],
            ['Security', 'Devices are authenticated with certificates and communicate with encrypted sessions'],
            ['Device types', 'Lights, plugs, locks, thermostats, blinds, sensors and more, with the list growing with each release'],
            ['Bridges', 'Allow non-Matter devices (for example Zigbee) to appear as Matter devices'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Buying advice', text: 'Check which Matter device types and which controllers (hubs) your ecosystem supports, as support varies by version. A Thread-capable border router (many smart speakers and hubs include one) is needed for Thread devices.' },
      ],
    },
    {
      id: 'tags',
      title: 'NFC and RFID',
      blocks: [
        {
          t: 'table',
          head: ['Technology', 'How it works', 'Examples'],
          rows: [
            ['NFC (13.56 MHz)', 'A reader’s magnetic field powers a passive tag or another device a few centimetres away', 'Contactless payments, transit cards, pairing, access cards'],
            ['Low-frequency RFID (125 to 134 kHz)', 'Passive tags read at very short range, even through materials', 'Animal ID chips, older access fobs'],
            ['High-frequency RFID (13.56 MHz)', 'Includes NFC and library or ticketing systems', 'Library books, passes'],
            ['UHF RFID (860 to 960 MHz)', 'Reads many tags at metres', 'Retail inventory, logistics, toll tags'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Security and privacy', text: 'Simple access cards that only send a fixed ID can be cloned. Use cards with cryptographic challenge-response, and consider the privacy risk of tags that can be read without the owner knowing.' },
        {
          t: 'dodont',
          do: ['Choose the radio that your ecosystem and phones support.', 'Use mains-powered mesh routers and sleepy battery nodes.', 'Plan 2.4 GHz coexistence: Wi-Fi, BLE, Zigbee and Thread share a band.'],
          dont: ['Assume maximum range figures apply indoors.', 'Use “Just Works” pairing for anything sensitive.', 'Mix many proprietary hubs where Matter would do.'],
        },
        { t: 'links', items: [{ path: 'networking/iot-connectivity/iot-lpwan', note: 'Next: long-range low-power networks' }, { path: 'networking/iot-operations/smart-home-and-consumer-iot', note: 'Smart homes' }, { path: 'cybersecurity/attack-surface/iot-security', note: 'IoT security' }] },
      ],
    },
  ],
  sources: [
    'Bluetooth SIG. Bluetooth Core Specification 5.4.',
    'IEEE 802.15.4 standard; Zigbee Alliance / Connectivity Standards Alliance Zigbee specification.',
    'Thread Group. Thread 1.3 specification; Connectivity Standards Alliance. Matter specification 1.x.',
    'Townsend, K., et al. (2014). Getting Started with Bluetooth Low Energy. O’Reilly.',
    'Shelby, Z., and Bormann, C. (2009). 6LoWPAN: The Wireless Embedded Internet. Wiley.',
  ],
  related: ['networking/iot-foundations/iot-architecture', 'networking/iot-connectivity/iot-lpwan', 'networking/iot-operations/smart-home-and-consumer-iot'],
}

export default guide
