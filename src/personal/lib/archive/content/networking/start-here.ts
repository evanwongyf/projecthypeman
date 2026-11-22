import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Networking is how computers talk: the rules and hardware that carry a message from one device to another across a room or across an ocean. The Internet of Things (IoT) extends that to billions of small devices, such as sensors, switches, meters, cameras and machines, that are often battery-powered, cheap, unattended and expected to work for years. This shelf covers both: the networking foundations in depth (layers, switching, addressing, routing, TCP, DNS, wireless, performance, software-defined networks), then the world of connected devices (hardware, radios, protocols, edge data, fleet management and security).',
  nutshell: [
    'Networks are built in **layers**: each layer solves one problem and hides it from the layer above. Learning the layers gives you a map for every problem.',
    'The **network side** covers Ethernet and switching, IP addressing and routing, TCP and QUIC, DNS, Wi-Fi and cellular, performance and virtual networks.',
    'The **device side** covers microcontrollers and sensors, short-range radios (BLE, Thread, Zigbee, Matter), long-range low-power networks (LoRaWAN, NB-IoT), application protocols (MQTT, CoAP), edge computing and device management.',
    'IoT is shaped by **constraints**: power, memory, cost, radio range and lifetime. Good IoT design is mostly trade-offs among them.',
    '**Security** runs through everything. Insecure IoT devices have powered huge botnets; the cybersecurity, cloud and forensics shelves have matching IoT pages.',
  ],
  sections: [
    {
      id: 'route',
      title: 'A route through the shelf',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Fundamentals', body: 'Layers and packets, Ethernet and VLANs, IP addressing and subnet arithmetic, and routing (OSPF and BGP).' },
            { title: 'Transport, naming and wireless', body: 'TCP, UDP and QUIC with a congestion lab; DNS and HTTP; Wi-Fi and cellular with the decibel maths; performance and queues; SDN and overlays.' },
            { title: 'IoT foundations', body: 'The architecture from device to cloud, device hardware and power (with a battery-life lab) and a project to build a connected sensor node.' },
            { title: 'IoT connectivity and protocols', body: 'Short-range radios, LPWAN with a link-budget lab, and MQTT, CoAP and LwM2M with a topic-matching lab.' },
            { title: 'Data, edge and operations', body: 'Edge computing and digital twins, provisioning and OTA updates, industrial IoT and smart homes.' },
            { title: 'Security, cloud and forensics', body: 'IoT security (cybersecurity shelf), device-to-cloud design (cloud shelf) and device forensics (forensics shelf).' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'networking/fundamentals/layers-and-packets', note: 'Start with layers' },
            { path: 'networking/transport-and-services/tcp-udp-and-quic', note: 'TCP and the congestion lab' },
            { path: 'networking/iot-foundations/iot-architecture', note: 'IoT architecture' },
            { path: 'networking/iot-foundations/iot-device-hardware', note: 'Devices and the battery-life lab' },
            { path: 'networking/iot-connectivity/iot-application-protocols', note: 'MQTT and the topic lab' },
            { path: 'cybersecurity/attack-surface/iot-security', note: 'IoT security' },
            { path: 'cloud/fundamentals/edge-and-iot-cloud', note: 'Edge and IoT in the cloud' },
            { path: 'forensics/digital-evidence/iot-and-device-forensics', note: 'Device forensics' },
          ],
        },
      ],
    },
    {
      id: 'labs',
      title: 'The labs',
      blocks: [
        {
          t: 'table',
          head: ['Lab', 'What it does', 'Where'],
          rows: [
            ['TCP congestion window', 'Shows slow start, additive increase and loss recovery, and the resulting throughput', 'TCP, UDP and QUIC'],
            ['Wireless link budget', 'Computes radio range from power, antenna gain, sensitivity, margin and environment', 'Wi-Fi and cellular; LPWAN'],
            ['Battery life of a sleeping sensor', 'Computes average current and battery life from sleep and active currents and duty cycle', 'Device hardware'],
            ['MQTT topic matcher', 'Tests subscription filters with + and # wildcards against sample topics', 'MQTT, CoAP and LwM2M'],
          ],
        },
        { t: 'net-lab', viz: 'tcp' },
      ],
    },
    {
      id: 'who',
      title: 'Who this is for',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Beginner', title: 'Never seen a network diagram', body: 'Start with layers and packets, then IP addressing, then the DNS and TCP pages. Skip the maths first time round.' },
            { tag: 'Hobbyist', title: 'Wants to build something', body: 'Go to IoT foundations: hardware, the sensor-node project, then MQTT.' },
            { tag: 'Engineer', title: 'Wants depth', body: 'The routing, TCP, performance and SDN pages include worked calculations. The IoT pages cover radios, link budgets, power and OTA design.' },
            { tag: 'Security-minded', title: 'Cares about risk', body: 'Read the IoT security, device management and industrial IoT pages together.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Safety and legality', text: 'Work on your own networks and devices, or with permission. Wireless transmission is regulated (power limits, bands, duty cycles); check the rules for your country. Mains-voltage projects can kill: use certified modules and a qualified person.' },
      ],
    },
  ],
  sources: [
    'Kurose, J. F., and Ross, K. W. (2021). Computer Networking: A Top-Down Approach, 8th edition. Pearson.',
    'Tanenbaum, A. S., and Wetherall, D. J. (2011). Computer Networks, 5th edition. Pearson.',
    'Hanes, D., et al. (2017). IoT Fundamentals. Cisco Press.',
    'Internet Engineering Task Force (IETF). Request for Comments (RFC) series.',
  ],
  related: ['networking/fundamentals/layers-and-packets', 'networking/iot-foundations/iot-architecture', 'cybersecurity/attack-surface/network-security'],
}

export default guide
