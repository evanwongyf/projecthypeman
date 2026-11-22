import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Once a device has a link, it needs a language for its messages. Web servers use HTTP, but HTTP is heavy for tiny devices on flaky, slow links, and its request-response style fits poorly with devices that report events and receive commands. IoT therefore has its own application protocols. MQTT, a lightweight publish-subscribe protocol, dominates telemetry. CoAP brings web-style REST to constrained devices over UDP. LwM2M adds device management on top of CoAP. This guide explains how MQTT works (topics, wildcards, QoS, retained messages, last will), compares the alternatives, and offers a topic-matching lab.',
  nutshell: [
    '**MQTT** is **publish-subscribe** through a **broker**: devices publish to **topics**; others subscribe to topic **filters**. Port 1883 (plain) or 8883 (TLS).',
    'Topics are hierarchical (**home/kitchen/temperature**). **+** matches one level; **#** matches everything below.',
    '**QoS 0** (at most once), **QoS 1** (at least once), **QoS 2** (exactly once). **Retained** messages store the last value; **last will** announces an unexpected disconnect.',
    '**CoAP** is a RESTful protocol for constrained devices over **UDP** (RFC 7252); **LwM2M** uses it for device management.',
    'Choose by **pattern** (telemetry, commands, management), **constraints** and **ecosystem**.',
  ],
  sections: [
    {
      id: 'mqtt',
      title: 'MQTT: publish and subscribe',
      blocks: [
        { t: 'p', text: 'MQTT was created in 1999 by Andy Stanford-Clark and Arlen Nipper to monitor oil pipelines over satellite links: low overhead and tolerant of poor networks. It became an OASIS standard (version 3.1.1 in 2014; version 5.0 in 2019). A broker sits in the middle. A publisher sends a message to a topic and does not know who receives it. A subscriber tells the broker which topics it wants, and does not know who sends. This decoupling suits IoT: devices can come and go, and new consumers can be added without touching the senders.' },
        {
          t: 'flow',
          title: 'The publish-subscribe pattern',
          nodes: [
            { label: 'Sensor', sub: 'publishes to home/kitchen/temperature', tone: 'data' },
            { label: 'Broker', sub: 'matches topics to subscriptions', tone: 'process' },
            { label: 'Dashboard', sub: 'subscribes to home/+/temperature', tone: 'output' },
            { label: 'Alert service', sub: 'subscribes to home/#', tone: 'output' },
            { label: 'Actuator', sub: 'subscribes to home/kitchen/heater/set', tone: 'human' },
          ],
        },
        { t: 'net-lab', viz: 'mqtt' },
        {
          t: 'table',
          head: ['Feature', 'What it does', 'When to use it'],
          rows: [
            ['Topics', 'Hierarchical strings with “/” separators; no pre-declaration needed', 'Design them as site/area/device/measurement'],
            ['Wildcards', '+ matches exactly one level; # matches the rest and must be last', 'Subscribe to groups of devices'],
            ['QoS 0', 'At most once: fire and forget', 'Frequent telemetry where a lost reading does not matter'],
            ['QoS 1', 'At least once: acknowledged, may duplicate', 'Events and commands where loss is a problem'],
            ['QoS 2', 'Exactly once: four-step handshake', 'Rarely; billing-type messages'],
            ['Retained messages', 'The broker keeps the last message on a topic and gives it to new subscribers', 'Device state, last known value'],
            ['Last will and testament', 'A message the broker publishes if a client disconnects ungracefully', 'Online and offline status (“offline” on connection loss)'],
            ['Persistent sessions', 'The broker keeps subscriptions and queued QoS 1 and 2 messages across disconnects', 'Devices that sleep and wake'],
            ['Keep-alive', 'Periodic ping so the broker can detect dead connections', 'Typical 30 to 120 seconds; longer saves power'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'MQTT 5', title: 'What version 5 adds', body: 'Reason codes in acknowledgements, message expiry, user properties (metadata), shared subscriptions (load-balance consumers) and topic aliases (save bytes).' },
            { tag: 'Security', title: 'TLS and authentication', body: 'Use TLS (port 8883), unique credentials or client certificates per device, and access control lists limiting each device to its own topics.' },
            { tag: 'Overhead', title: 'Very small', body: 'The fixed header is 2 bytes. A small publish can be a few dozen bytes plus the topic name, so short topics save airtime and power.' },
            { tag: 'Brokers', title: 'Choices', body: 'Mosquitto, EMQX, HiveMQ, VerneMQ, and managed cloud brokers. Clusters scale to millions of connections.' },
          ],
        },
        {
          t: 'example',
          title: 'A topic scheme',
          lines: [
            { label: 'Telemetry', text: 'acme/factory1/line2/press7/temperature  (published by the device)' },
            { label: 'Commands', text: 'acme/factory1/line2/press7/cmd/stop  (published by the control app; the device subscribes)' },
            { label: 'Status', text: 'acme/factory1/line2/press7/status  (retained; last will sets it to “offline”)' },
            { label: 'Dashboards', text: 'acme/factory1/+/+/temperature  (all temperatures in factory 1)' },
            { label: 'Rules', text: 'Do not put variable data (like timestamps) in topics, avoid leading slashes and spaces, and keep the hierarchy stable.' },
          ],
        },
      ],
    },
    {
      id: 'coap',
      title: 'CoAP and LwM2M',
      blocks: [
        { t: 'p', text: 'The Constrained Application Protocol (CoAP, RFC 7252) brings the REST model (GET, POST, PUT, DELETE on resources identified by URIs) to devices too small for HTTP. It runs over UDP with a 4-byte header, has optional reliability (confirmable messages with retransmission), and supports observing a resource so that changes are pushed to subscribers. A proxy can translate between CoAP and HTTP. It secures with DTLS or OSCORE.' },
        {
          t: 'table',
          head: ['', 'MQTT', 'CoAP', 'HTTP'],
          rows: [
            ['Model', 'Publish-subscribe via a broker', 'Request-response (REST) with observe', 'Request-response'],
            ['Transport', 'TCP (and TLS)', 'UDP (and DTLS)', 'TCP (HTTP/3 uses QUIC)'],
            ['Overhead', 'Very small', 'Smallest', 'Larger, text headers'],
            ['Good for', 'Telemetry, many devices to the cloud, events', 'Constrained devices, local direct access, multicast discovery', 'Rich services, web integration'],
            ['Weakness', 'A broker is needed; TCP keep-alives cost power on cellular', 'UDP can be blocked by networks and NAT', 'Heavy for small devices'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'LwM2M', title: 'Device management', body: 'The OMA’s Lightweight M2M protocol uses CoAP to manage devices: a standard object model (device info, firmware, connectivity, sensors) with bootstrapping, registration, reading and writing resources, and firmware updates.' },
            { tag: 'AMQP', title: 'Enterprise messaging', body: 'A heavier protocol with queues and routing, used between servers and in some industrial settings.' },
            { tag: 'WebSockets', title: 'Browser-friendly', body: 'A persistent two-way connection, handy for live dashboards. MQTT also runs over WebSockets.' },
            { tag: 'Sparkplug', title: 'MQTT for industry', body: 'A specification on top of MQTT that defines topic names, payloads and state management so that industrial devices interoperate.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Which one?', text: 'For devices that report to the cloud and are controlled from it, MQTT over TLS is the usual default. For very constrained or local devices, or where you want REST and multicast, consider CoAP. For managing large fleets of constrained devices across cellular networks, LwM2M gives you a standard management layer. Many systems use two.' },
        {
          t: 'dodont',
          do: ['Design topic names and payload formats before deploying.', 'Use TLS and per-device credentials with topic permissions.', 'Version your payloads, so that devices and services can evolve independently.'],
          dont: ['Use the broker as a database or put large files in messages.', 'Use one shared password for all devices.', 'Publish commands to topics that any device can write to.'],
        },
        { t: 'links', items: [{ path: 'networking/iot-foundations/build-a-sensor-node', note: 'MQTT in a build project' }, { path: 'networking/iot-operations/edge-data-and-digital-twins', note: 'Next: edge, data and digital twins' }, { path: 'cybersecurity/attack-surface/iot-security', note: 'Securing IoT messaging' }] },
      ],
    },
  ],
  sources: [
    'OASIS (2019). MQTT Version 5.0; OASIS (2014). MQTT Version 3.1.1.',
    'Shelby, Z., Hartke, K., and Bormann, C. (2014). The Constrained Application Protocol (CoAP). RFC 7252.',
    'Open Mobile Alliance. Lightweight Machine to Machine Technical Specification (LwM2M).',
    'Eclipse Foundation. Sparkplug specification.',
    'Light, R. A. (2017). Mosquitto: server and client implementation of the MQTT protocol. Journal of Open Source Software.',
  ],
  related: ['networking/iot-connectivity/iot-lpwan', 'networking/iot-operations/edge-data-and-digital-twins', 'cybersecurity/attack-surface/iot-security'],
}

export default guide
