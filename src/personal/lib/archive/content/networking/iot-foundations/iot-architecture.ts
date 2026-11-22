import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An Internet of Things system is more than a gadget with Wi-Fi. It is a chain: sensors measure the world, a small computer reads them, a radio sends the data, a gateway or network carries it, a cloud or server stores and analyses it, an application presents it, and commands may flow back to actuators. Each link in that chain has different constraints, and good design means choosing the right technology at each. This guide lays out the layers, the constraints that shape device design, the main patterns (direct, gateway, edge) and how to choose among them, with some numbers to keep your intuition honest.',
  nutshell: [
    'An IoT system has four parts: **devices** (sensors and actuators), **connectivity**, a **platform** (cloud or server) and **applications**. A **gateway** or **edge** node often sits between devices and the cloud.',
    'Devices are **constrained** by power, memory, processing, radio range, cost and lifetime. RFC 7228 classes constrained devices from Class 0 (under ~10 KiB RAM) to Class 2 (~50 KiB RAM).',
    '**Data patterns** differ: periodic telemetry, event alerts, command and control, bulk firmware updates.',
    '**Choose connectivity by the numbers**: how much data, how often, how far, how much power, and whether the device moves.',
    'Plan for **the whole life**: provisioning, updates, monitoring, security and end of life, not just the prototype.',
  ],
  sections: [
    {
      id: 'layers',
      title: 'The layers of an IoT system',
      blocks: [
        {
          t: 'flow',
          title: 'From sensor to insight and back',
          nodes: [
            { label: 'Sensors and actuators', sub: 'measure and act on the physical world', tone: 'data' },
            { label: 'Device (MCU or SoC)', sub: 'reads, filters, decides, sleeps', tone: 'process' },
            { label: 'Connectivity', sub: 'BLE, Thread, Wi-Fi, LoRaWAN, cellular', tone: 'model' },
            { label: 'Gateway or edge', sub: 'translate, filter, buffer, act locally', tone: 'process' },
            { label: 'Cloud platform', sub: 'ingest, store, analyse, manage devices', tone: 'model' },
            { label: 'Applications', sub: 'dashboards, alerts, automation, APIs', tone: 'output' },
          ],
          loop: 'Commands, configuration and firmware updates flow back down the chain to the devices.',
        },
        { t: 'p', text: 'Scale gives a feel for how important the design is. Industry analysts have estimated that there were on the order of 15 to 17 billion connected IoT devices in 2023, and forecast several tens of billions by 2030. Estimates differ with definitions (whether phones and PCs count), so treat the figures as order of magnitude.' },
      ],
    },
    {
      id: 'constraints',
      title: 'Constraints that shape everything',
      blocks: [
        {
          t: 'table',
          head: ['Constraint', 'Typical range', 'Consequence'],
          rows: [
            ['Power', 'Coin cell (about 225 mAh) to mains; battery life of 1 to 10+ years expected', 'Sleep almost always, send rarely, choose low-power radios'],
            ['Memory and processing', 'From tens of KB of RAM and a few MHz to megabytes and hundreds of MHz', 'Light protocols, careful code, limited cryptography choices'],
            ['Bandwidth', 'From tens of bits per second (LPWAN) to megabits (Wi-Fi, cellular)', 'Compact data formats, aggregation, edge processing'],
            ['Range', 'Metres (BLE, NFC) to kilometres (LoRa, cellular)', 'Determines topology: direct, mesh or star'],
            ['Cost', 'A few dollars for a node; cost per device multiplied by thousands', 'Every part matters; avoid unnecessary features'],
            ['Lifetime', '10 to 20 years for infrastructure', 'Updates must work for years; plan for supplier changes and standards'],
            ['Environment', 'Heat, cold, dust, water, vibration, radio interference', 'Enclosures, certified parts, antenna placement'],
            ['Unattended', 'Devices are rarely touched after installation', 'Remote management, watchdogs, safe updates'],
          ],
        },
        {
          t: 'table',
          head: ['RFC 7228 class', 'Data memory (RAM)', 'Code memory (flash)', 'Typical capability'],
          rows: [
            ['Class 0', 'Much less than 10 KiB', 'Much less than 100 KiB', 'Cannot do secure communication on its own; usually needs a gateway'],
            ['Class 1', 'About 10 KiB', 'About 100 KiB', 'Can speak lightweight protocols (CoAP) with security, but cannot run a full stack'],
            ['Class 2', 'About 50 KiB', 'About 250 KiB', 'Can support much the same protocol stacks as notebooks, with less memory'],
          ],
          caption: 'From RFC 7228 (Terminology for Constrained-Node Networks). Modern microcontrollers such as the ESP32 have several hundred KB of RAM and are well beyond Class 2.',
        },
      ],
    },
    {
      id: 'patterns',
      title: 'Architecture patterns',
      blocks: [
        {
          t: 'table',
          head: ['Pattern', 'How it works', 'Good for', 'Watch for'],
          rows: [
            ['Direct to cloud', 'Each device connects over Wi-Fi or cellular straight to the cloud (for example, MQTT over TLS)', 'Few devices, good connectivity, simple design', 'Power use of the radio; cost of cellular plans per device; many TLS connections'],
            ['Gateway', 'Devices use a local radio (BLE, Zigbee, LoRa) to a gateway that forwards to the cloud', 'Many low-power devices in one site', 'The gateway is a single point of failure and a security boundary'],
            ['Mesh', 'Devices relay for each other (Thread, Zigbee, Bluetooth Mesh)', 'Homes, buildings, lighting; no single hub dependency', 'Latency and battery impact of relaying; network size limits'],
            ['Edge computing', 'Process data locally, send only results', 'Latency-critical control, limited bandwidth, privacy', 'More software to manage at the edge'],
            ['Cloud-centric', 'All logic in the cloud', 'Complex analytics, easy updates', 'Latency, dependency on the Internet'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Telemetry', title: 'Periodic readings', body: 'A sensor reports temperature every minute. Small messages, predictable, ideal for sleeping devices.' },
            { tag: 'Events', title: 'Alerts', body: 'A door opens or a threshold is crossed. Send immediately, then sleep. Needs low latency on a low-power link.' },
            { tag: 'Commands', title: 'Control', body: 'A cloud app turns on a pump. The device must listen, which costs power (use scheduled listening windows).' },
            { tag: 'Bulk', title: 'Firmware updates', body: 'Hundreds of kilobytes or megabytes. Needs a link and battery budget that telemetry does not.' },
          ],
        },
      ],
    },
    {
      id: 'choose',
      title: 'Choosing connectivity: a decision table',
      blocks: [
        {
          t: 'table',
          head: ['If you need…', 'Consider…', 'Why'],
          rows: [
            ['Phone pairing and short range, tiny battery', 'Bluetooth Low Energy', 'Ubiquitous in phones, very low power'],
            ['A mesh of home devices', 'Thread or Zigbee (with Matter on top)', 'Low power, self-healing mesh'],
            ['Mains-powered, lots of data (cameras)', 'Wi-Fi or Ethernet with PoE', 'High bandwidth'],
            ['A farm or city with many sensors over kilometres', 'LoRaWAN', 'Long range, very low power, low data rate; you can run your own network'],
            ['Wide-area, managed, mobile assets', 'LTE-M or NB-IoT', 'Operator-run coverage, no gateways to maintain; subscription cost'],
            ['Industrial real-time control', 'Wired fieldbus or industrial Ethernet, sometimes private 5G', 'Determinism and reliability'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A simple rule', text: 'Start with how much data, how often, over what distance and with what power budget. Write the numbers down before choosing a radio. The link-budget and battery labs later on this shelf turn those numbers into range and battery life.' },
        { t: 'links', items: [{ path: 'networking/iot-foundations/iot-device-hardware', note: 'Next: device hardware and power' }, { path: 'networking/iot-connectivity/iot-short-range-radios', note: 'Short-range radios' }, { path: 'cloud/fundamentals/edge-and-iot-cloud', note: 'The cloud side' }] },
      ],
    },
  ],
  sources: [
    'Bormann, C., Ersue, M., and Keränen, A. (2014). Terminology for Constrained-Node Networks. RFC 7228.',
    'Hanes, D., et al. (2017). IoT Fundamentals: Networking Technologies, Protocols, and Use Cases for the Internet of Things. Cisco Press.',
    'IoT Analytics (2023 to 2024). State of IoT reports (connected device estimates).',
    'Weber, R. H., and Weber, R. (2010). Internet of Things: Legal Perspectives. Springer; and Atzori, L., Iera, A., and Morabito, G. (2010). The Internet of Things: a survey. Computer Networks.',
  ],
  related: ['networking/iot-foundations/iot-device-hardware', 'networking/iot-connectivity/iot-short-range-radios', 'cloud/fundamentals/edge-and-iot-cloud'],
}

export default guide
