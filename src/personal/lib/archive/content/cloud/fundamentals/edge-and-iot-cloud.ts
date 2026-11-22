import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Connecting devices to the cloud is not just opening a socket. A fleet of thousands of devices that connect intermittently needs a front door that authenticates each one, scales to enormous numbers of tiny messages, routes them to storage and processing, keeps a record of each device’s state, and sends commands back. Cloud providers sell this as IoT platforms. This guide looks at the pieces (broker, registry, rules, twins, pipelines), how to do the arithmetic of message volume and cost, how edge runtimes fit in, and how to design for devices that go offline. It uses no provider prices, since those change; the formulae let you plug in current figures.',
  nutshell: [
    'An **IoT platform** provides a **secure ingress** (usually MQTT over TLS), a **device registry** and identity, **routing rules**, **device twins** and links to storage, streams and analytics.',
    'Major providers offer managed IoT services (AWS IoT Core, Azure IoT Hub); Google retired its Cloud IoT Core in August 2023, a reminder to avoid lock-in to a single vendor’s proprietary service.',
    '**Cost** often scales with **messages**, **connection minutes**, **device count** and **data stored**. Estimate message volume before choosing.',
    '**Edge runtimes** run the cloud’s code on a gateway so that decisions can be made locally and the system keeps working offline.',
    'Design for **offline devices**: queues, retained state, idempotent handling and timeouts.',
  ],
  sections: [
    {
      id: 'pipeline',
      title: 'The device-to-cloud pipeline',
      blocks: [
        {
          t: 'flow',
          title: 'A typical IoT cloud pipeline',
          nodes: [
            { label: 'Devices', sub: 'MQTT over TLS, with certificates', tone: 'data' },
            { label: 'IoT gateway or hub service', sub: 'authenticate, authorise, broker', tone: 'process' },
            { label: 'Rules and routing', sub: 'filter, transform, fan out', tone: 'process' },
            { label: 'Streams and storage', sub: 'time-series DB, data lake, queues', tone: 'model' },
            { label: 'Applications and analytics', sub: 'dashboards, alerts, ML', tone: 'output' },
          ],
          loop: 'Commands, configuration and firmware jobs travel back to devices through the same service.',
        },
        {
          t: 'table',
          head: ['Component', 'Job', 'Notes'],
          rows: [
            ['Device registry and identity', 'Record each device, its certificate and attributes', 'Policies decide what each device may publish and subscribe to'],
            ['Message broker', 'Accepts connections and routes messages', 'MQTT is the usual protocol; HTTP and others are also supported'],
            ['Rules engine', 'Matches messages with SQL-like queries and triggers actions', 'Forward to a stream, a function, a database or an alert'],
            ['Device twin or shadow', 'Stores desired and reported state', 'Lets applications talk to devices that are offline'],
            ['Jobs and OTA', 'Roll out firmware and configuration to groups', 'Staged rollouts with abort conditions'],
            ['Streams and queues', 'Buffer and process events', 'Kafka-compatible services, managed queues'],
            ['Storage', 'Time-series databases, object stores, data warehouses', 'Hot, warm and cold tiers'],
            ['Monitoring', 'Device connectivity, error rates, cost', 'Alarms on silent devices'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Avoid lock-in where it matters', text: 'Use standard protocols (MQTT, TLS, X.509), keep business logic outside provider-specific rules where practical, and store raw data in open formats. When Google retired Cloud IoT Core in 2023, customers had to migrate to partner or self-run brokers.' },
      ],
    },
    {
      id: 'maths',
      title: 'Message volume and cost arithmetic',
      blocks: [
        {
          t: 'math',
          tex: 'N_{\\text{month}} = D \\times m \\times 60 \\times 24 \\times 30 \; / \; T_{\\text{min}}',
          caption: 'Messages per month for D devices each sending m messages every T minutes.',
          plain: 'Count how many messages one device sends in a month, then multiply by the number of devices. Billing is often per million messages, so this number tells you which pricing tier you are in and whether your design is affordable.',
          where: [
            { sym: 'D', def: 'number of devices' },
            { sym: 'm', def: 'messages per reporting event' },
            { sym: 'T_{\\text{min}}', def: 'minutes between reporting events' },
            { sym: 'N_{\\text{month}}', def: 'messages per 30-day month' },
          ],
          syntax: [{ sym: '60 \\times 24 \\times 30', say: 'Minutes in a 30-day month: 60 minutes × 24 hours × 30 days = 43,200.' }],
          worked: {
            title: '10,000 sensors each reporting once a minute',
            steps: [
              'Messages per device per month: \\(43{,}200 / 1 = 43{,}200\\).',
              'Fleet: \\(10{,}000 \\times 43{,}200 = 432{,}000{,}000\\) messages, or 432 million.',
              'If the platform charges a rate \\(r\\) per million messages, the bill is \\(432 \\times r\\) (plus connection, rules and storage charges).',
              'Reporting every 5 minutes instead cuts it to \\(86.4\\) million, a fifth.',
              'Batching 5 readings into one message every 5 minutes with the same data also gives 86.4 million, plus less overhead per reading.',
            ],
            answer: '432 million messages a month at one per minute. Moving to a 5-minute interval, or batching readings into fewer messages, cuts messaging by 80 per cent. Message count is often the largest controllable cost, so batch where timeliness allows. Use your provider’s current price list for the final figure.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Batch', title: 'Fewer, larger messages', body: 'Many platforms bill in blocks (for example per 5 KB), so combining readings saves money and device energy.' },
            { tag: 'Filter at the edge', title: 'Send only changes', body: 'Report on change or on thresholds with a periodic heartbeat, instead of every sample.' },
            { tag: 'Retention', title: 'Tier storage', body: 'Keep recent data in a fast store and move older data to cheap object storage in compact formats.' },
            { tag: 'Connections', title: 'Persistent connections cost', body: 'Some services charge per connected minute. Devices that connect only to publish and then disconnect may save money, but cost more battery.' },
          ],
        },
      ],
    },
    {
      id: 'edge',
      title: 'Edge runtimes',
      blocks: [
        { t: 'p', text: 'Cloud providers offer software for gateways that mirrors cloud services locally: AWS IoT Greengrass, Azure IoT Edge, and open options such as EdgeX Foundry and KubeEdge. They run containers or functions on the gateway, keep local message brokers and device twins, sync with the cloud when connected, and manage deployments centrally. The result is that a site keeps operating during an outage and decisions are made close to the machines.' },
        {
          t: 'table',
          head: ['Task at the edge', 'Why locally'],
          rows: [
            ['Protocol translation (Modbus, BACnet, BLE to MQTT)', 'Legacy devices cannot talk to the cloud directly'],
            ['Local rules and control', 'Millisecond response; works offline'],
            ['Filtering and aggregation', 'Reduce bandwidth and cost'],
            ['Video and audio analytics', 'Raw streams are too large and sensitive to send'],
            ['Store and forward', 'Buffer data through outages'],
            ['Local inference of ML models', 'Low latency and privacy'],
          ],
        },
      ],
    },
    {
      id: 'offline',
      title: 'Designing for devices that go offline',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Treat connectivity as unreliable: devices will go offline, reconnect, and reconnect again.',
            'Use desired and reported state (twins) instead of fire-and-forget commands.',
            'Make message handling idempotent, because QoS 1 can deliver duplicates.',
            'Timestamp readings on the device (or gateway), and handle late and out-of-order arrival.',
            'Use last-will and heartbeat messages to detect dead devices, and expire stale commands.',
            'Back off on reconnects (with random jitter) so that a regional outage does not trigger a thundering herd when it ends.',
            'Alert on silence, and distinguish “device offline” from “nothing to report”.',
            'Limit blast radius: scope each device’s policy to its own topics.',
          ],
        },
        { t: 'links', items: [{ path: 'networking/iot-connectivity/iot-application-protocols', note: 'MQTT and topic design' }, { path: 'networking/iot-operations/edge-data-and-digital-twins', note: 'Edge, time-series data and twins' }, { path: 'cloud/scale-and-maths/cloud-economics', note: 'Cloud economics' }] },
      ],
    },
  ],
  sources: [
    'Amazon Web Services. AWS IoT Core and AWS IoT Greengrass developer guides.',
    'Microsoft. Azure IoT Hub and Azure IoT Edge documentation.',
    'Google Cloud. Notice of Cloud IoT Core retirement (effective August 2023).',
    'OASIS (2019). MQTT Version 5.0.',
    'Eclipse Foundation, EdgeX Foundry and KubeEdge project documentation.',
  ],
  related: ['networking/iot-connectivity/iot-application-protocols', 'networking/iot-operations/edge-data-and-digital-twins', 'cloud/scale-and-maths/cloud-economics'],
}

export default guide
