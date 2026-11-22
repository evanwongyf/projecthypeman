import type { ArchiveNode } from '../topics'

// Networking and the Internet of Things: from layers and packets through routing, transport
// and wireless, to the devices, radios, protocols, data and security of IoT. Interactive labs
// cover TCP congestion, MQTT topics, radio link budgets and battery life. Security and cloud
// angles are cross-linked to the cybersecurity and cloud shelves, and device evidence to the
// forensics shelf.

export const NETWORKING: ArchiveNode = {
  slug: 'networking',
  title: 'Networking & IoT',
  blurb: 'How data moves: layers, Ethernet, IP and routing, TCP and QUIC, DNS and Wi-Fi, then the Internet of Things: device hardware, radios (BLE, Thread, LoRa, cellular), protocols (MQTT, CoAP), edge and data, device management and security, with labs for TCP, MQTT, link budgets and battery life.',
  glyph: '📡',
  color: 'color-mix(in srgb, var(--teal) 60%, var(--sky))',
  tags: ['networking', 'iot', 'internet of things', 'tcp', 'ip', 'routing', 'bgp', 'dns', 'wifi', 'mqtt', 'lora', 'ble', 'zigbee', 'matter', 'devices', 'embedded', 'edge'],
  children: [
    { slug: 'start-here', title: 'Start here', blurb: 'The map of the shelf: the network side and the device side, and a route for beginners and for engineers wanting depth.', minutes: 7, glyph: '★', tags: ['beginner', 'overview', 'roadmap'] },
    {
      slug: 'fundamentals',
      title: 'Network fundamentals',
      group: 'Networking',
      blurb: 'Layers and packets, Ethernet and switching, IP addressing and subnetting, and routing.',
      glyph: '🔗',
      tags: ['osi', 'tcp/ip', 'ethernet', 'vlan', 'ip', 'subnet', 'nat', 'routing', 'ospf', 'bgp'],
      children: [
        { slug: 'layers-and-packets', title: 'Layers, packets and encapsulation', blurb: 'The OSI and TCP/IP models, what each layer does, encapsulation, MTU and fragmentation, and following one web request end to end.', minutes: 12, tags: ['osi', 'tcp/ip', 'encapsulation', 'mtu', 'packet', 'frame'] },
        { slug: 'ethernet-and-switching', title: 'Ethernet, switching and VLANs', blurb: 'MAC addresses, switches and learning tables, spanning tree, VLANs and trunks, link aggregation and power over Ethernet.', minutes: 12, tags: ['ethernet', 'switch', 'vlan', 'stp', 'poe', 'mac address', 'arp'] },
        { slug: 'ip-addressing-and-nat', title: 'IP addressing, subnetting, IPv6 and NAT', blurb: 'IPv4 and IPv6 structure, CIDR and subnet arithmetic, private ranges, NAT and why it exists, DHCP, with worked examples.', minutes: 14, tags: ['ipv4', 'ipv6', 'cidr', 'subnet', 'nat', 'dhcp', 'private address'] },
        { slug: 'routing', title: 'Routing: static, OSPF and BGP', blurb: 'How routers forward packets, longest-prefix match, distance-vector and link-state protocols, OSPF, BGP and the routing of the Internet, and how routing fails.', minutes: 14, tags: ['routing', 'ospf', 'bgp', 'longest prefix', 'autonomous system', 'convergence', 'route hijack'] },
      ],
    },
    {
      slug: 'transport-and-services',
      title: 'Transport, naming and wireless',
      blurb: 'TCP, UDP and QUIC, DNS and the services that make the Internet usable, and Wi-Fi and cellular radio.',
      glyph: '🚚',
      tags: ['tcp', 'udp', 'quic', 'congestion', 'dns', 'http', 'wifi', '802.11', '5g', 'rf'],
      children: [
        { slug: 'tcp-udp-and-quic', title: 'TCP, UDP and QUIC', blurb: 'Reliable delivery, the three-way handshake, flow and congestion control (Reno, CUBIC, BBR), UDP, QUIC and HTTP/3, with the TCP congestion lab.', minutes: 15, tags: ['tcp', 'udp', 'quic', 'congestion control', 'handshake', 'bbr', 'cubic', 'http3'] },
        { slug: 'dns-and-application-protocols', title: 'DNS, HTTP and the application layer', blurb: 'How names resolve, caching and TTLs, DNS records and attacks, HTTP versions, TLS in outline, and email and time protocols.', minutes: 12, tags: ['dns', 'http', 'tls', 'smtp', 'ntp', 'caching', 'ttl'] },
        { slug: 'wifi-and-cellular', title: 'Wi-Fi and cellular radio', blurb: '802.11 standards, channels and airtime, OFDMA and MU-MIMO, roaming and mesh; 4G and 5G basics; the maths of decibels and path loss.', minutes: 14, tags: ['wifi', '802.11', 'ofdma', 'mimo', '5g', 'lte', 'decibel', 'path loss', 'channels'] },
        { slug: 'performance-and-qos', title: 'Performance, queues and quality of service', blurb: 'Latency, throughput, bandwidth-delay product, jitter, bufferbloat, queueing, traffic shaping and QoS, and how to measure a network honestly.', minutes: 12, tags: ['latency', 'throughput', 'bdp', 'jitter', 'bufferbloat', 'qos', 'queueing', 'measurement'] },
        { slug: 'sdn-and-virtual-networks', title: 'SDN, virtual networks and overlays', blurb: 'Control plane and data plane, software-defined networking, OpenFlow, VXLAN and overlays, NFV, SD-WAN and cloud networks.', minutes: 12, tags: ['sdn', 'openflow', 'vxlan', 'overlay', 'nfv', 'sd-wan', 'virtual network'] },
      ],
    },
    {
      slug: 'iot-foundations',
      title: 'IoT foundations: devices and architecture',
      group: 'Internet of Things',
      blurb: 'What an IoT system is, the device hardware (microcontrollers, sensors, power), and the layers from device to cloud.',
      glyph: '🔌',
      color: 'color-mix(in srgb, var(--mint) 50%, var(--teal))',
      tags: ['iot', 'architecture', 'microcontroller', 'sensor', 'actuator', 'esp32', 'power', 'battery', 'rtos'],
      children: [
        { slug: 'iot-architecture', title: 'IoT architecture: from device to cloud', blurb: 'Perception, network and application layers, gateways and edge, constraints (power, memory, bandwidth, cost, lifetime) and how to choose an architecture.', minutes: 12, tags: ['architecture', 'gateway', 'edge', 'constraints', 'layers', 'cloud'] },
        { slug: 'iot-device-hardware', title: 'Device hardware: MCUs, sensors, actuators and power', blurb: 'Microcontrollers and SoCs (ESP32, nRF, STM32, Raspberry Pi), sensors and ADCs, actuators, interfaces (I²C, SPI, UART), RTOSes, power and the battery-life lab.', minutes: 15, tags: ['mcu', 'esp32', 'sensor', 'adc', 'i2c', 'spi', 'uart', 'rtos', 'battery', 'power'] },
        { slug: 'build-a-sensor-node', title: 'Project: build a connected sensor node', blurb: 'A worked project from parts list to dashboard: a temperature and humidity node that publishes over MQTT, with code, power budget and testing.', minutes: 13, tags: ['project', 'esp32', 'mqtt', 'sensor', 'arduino', 'micropython', 'dashboard'] },
      ],
    },
    {
      slug: 'iot-connectivity',
      title: 'IoT connectivity and protocols',
      blurb: 'Short-range radios (BLE, Zigbee, Thread, Matter), long-range low-power networks (LoRaWAN, NB-IoT, LTE-M), and the application protocols (MQTT, CoAP, LwM2M).',
      glyph: '📶',
      tags: ['ble', 'zigbee', 'thread', 'matter', 'lorawan', 'nb-iot', 'lte-m', 'mqtt', 'coap', 'lwm2m'],
      children: [
        { slug: 'iot-short-range-radios', title: 'Short-range radios: BLE, Zigbee, Thread, Matter and more', blurb: 'Bluetooth Low Energy, 802.15.4, Zigbee, Thread, Z-Wave, NFC and RFID, Matter for smart homes, and how to choose.', minutes: 14, tags: ['ble', 'zigbee', 'thread', 'matter', 'z-wave', 'nfc', 'rfid', '802.15.4', 'smart home'] },
        { slug: 'iot-lpwan', title: 'Long-range low-power: LoRaWAN, NB-IoT and LTE-M', blurb: 'How LPWANs trade data rate for range and battery life, LoRa modulation and spreading factors, LoRaWAN classes, NB-IoT and LTE-M, duty cycles, with the link-budget lab.', minutes: 14, tags: ['lorawan', 'lora', 'nb-iot', 'lte-m', 'lpwan', 'spreading factor', 'duty cycle', 'link budget'] },
        { slug: 'iot-application-protocols', title: 'MQTT, CoAP, LwM2M and friends', blurb: 'Publish-subscribe and MQTT (topics, QoS, retained messages, last will), CoAP and REST for constrained devices, LwM2M, AMQP and HTTP, with the MQTT lab.', minutes: 14, tags: ['mqtt', 'coap', 'lwm2m', 'amqp', 'publish subscribe', 'qos', 'rest', 'protocol'] },
      ],
    },
    {
      slug: 'iot-operations',
      title: 'Data, edge and running a fleet',
      blurb: 'Edge computing, time-series data and digital twins; provisioning, updates and management of thousands of devices; and industrial IoT.',
      glyph: '🛰',
      tags: ['edge', 'time series', 'digital twin', 'provisioning', 'ota', 'fleet', 'industrial iot', 'opc ua', 'modbus', 'plc'],
      children: [
        { slug: 'edge-data-and-digital-twins', title: 'Edge computing, data pipelines and digital twins', blurb: 'What to process on the device, the gateway and the cloud, time-series data, stream processing, data quality and digital twins.', minutes: 12, tags: ['edge', 'time series', 'stream processing', 'digital twin', 'data quality', 'telemetry'] },
        { slug: 'device-management-and-updates', title: 'Provisioning, device management and OTA updates', blurb: 'Manufacturing to retirement: identity, provisioning, configuration, over-the-air updates, fleet monitoring, rollbacks and end of life.', minutes: 13, tags: ['provisioning', 'ota', 'fleet', 'device management', 'firmware', 'lifecycle', 'rollback'] },
        { slug: 'industrial-iot', title: 'Industrial IoT and operational technology', blurb: 'PLCs, SCADA, Modbus, OPC UA, the Purdue model, determinism and safety, and bridging IT and OT.', minutes: 12, tags: ['industrial iot', 'ot', 'plc', 'scada', 'modbus', 'opc ua', 'purdue', 'safety'] },
        { slug: 'smart-home-and-consumer-iot', title: 'Smart homes and consumer IoT', blurb: 'Hubs, voice assistants and Matter, home network design, privacy and the practical limits of consumer devices.', minutes: 10, tags: ['smart home', 'matter', 'hub', 'privacy', 'consumer', 'home network'] },
      ],
    },
  ],
}
