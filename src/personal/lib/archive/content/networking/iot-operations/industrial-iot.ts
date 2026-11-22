import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Factories, power stations, water works and pipelines run on operational technology (OT): programmable logic controllers, sensors, drives and the networks that connect them. The industrial IoT connects this world to analytics and the cloud, promising efficiency and predictive maintenance, and also bringing the risks of IT into places where a failure can hurt people or damage plant. OT has different priorities from IT: availability and safety first, equipment that lasts decades, and protocols designed before security was a concern. This guide covers the OT stack, the main protocols (Modbus, OPC UA), the Purdue model, determinism and safety, the IT/OT divide and some well-known incidents.',
  nutshell: [
    'The OT stack: **sensors and actuators**, **PLCs** (control logic), **SCADA and HMIs** (supervision), **historians** and the plant network.',
    'Protocols: **Modbus** (simple, 1979, no security), **PROFINET**, **EtherNet/IP**, **OPC UA** (rich, secure, vendor-neutral) and **MQTT with Sparkplug**.',
    'The **Purdue model** layers a plant from the process (level 0) up to the enterprise (levels 4 and 5), separated by firewalls and a **DMZ**.',
    '**Priorities differ**: IT puts confidentiality first; OT puts **availability and safety** first.',
    'Standards: **IEC 62443** for industrial cybersecurity, **IEC 61508** for functional safety.',
  ],
  sections: [
    {
      id: 'stack',
      title: 'The OT stack',
      blocks: [
        {
          t: 'table',
          head: ['Component', 'Role', 'Notes'],
          rows: [
            ['Sensors and actuators', 'Measure (temperature, pressure, flow, level, position) and act (valves, motors, drives)', 'Often use 4 to 20 mA analogue loops or digital fieldbuses'],
            ['PLC (programmable logic controller)', 'Runs control logic in a real-time scan cycle: read inputs, execute logic, write outputs', 'Programmed in IEC 61131-3 languages such as ladder logic and structured text; cycle times of milliseconds'],
            ['RTU', 'Remote terminal unit: a field device at remote sites (pipelines, substations)', 'Often communicates by radio or cellular'],
            ['HMI', 'Human-machine interface: operator screens', 'Shows state, takes setpoints'],
            ['SCADA', 'Supervisory control and data acquisition: monitors and controls processes over wide areas', 'Collects from PLCs and RTUs'],
            ['Historian', 'Stores time-series process data', 'Basis of analytics and compliance records'],
            ['DCS', 'Distributed control system for continuous processes (refineries, chemical plants)', 'Integrated control and supervision'],
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Scan', body: 'The PLC reads all its inputs into memory.' },
            { title: 'Execute', body: 'It runs the control program once, using the input snapshot.' },
            { title: 'Write', body: 'It updates all outputs.' },
            { title: 'Repeat', body: 'This loop runs continuously, typically every few milliseconds to tens of milliseconds: the behaviour is deterministic and predictable.' },
          ],
        },
      ],
    },
    {
      id: 'proto',
      title: 'Industrial protocols',
      blocks: [
        {
          t: 'table',
          head: ['Protocol', 'Origin and use', 'Notes'],
          rows: [
            ['Modbus (RTU and TCP)', 'Introduced by Modicon in 1979; ubiquitous for simple devices (serial, and TCP on port 502)', 'Master-slave reads and writes of registers; no authentication or encryption'],
            ['PROFINET and PROFIBUS', 'Siemens-led; factory automation', 'PROFINET uses industrial Ethernet with real-time classes'],
            ['EtherNet/IP and CIP', 'Rockwell-led; factory automation', 'Uses standard Ethernet with common industrial protocol objects'],
            ['CAN and CANopen', 'Vehicles, machines', 'Robust bus for short messages'],
            ['OPC UA (IEC 62541)', 'Platform-independent, secure data exchange and information modelling', 'Built-in authentication, signing and encryption; now carried over TCP, MQTT and publish-subscribe'],
            ['MQTT with Sparkplug B', 'Cloud-friendly telemetry with a defined data model', 'Used to bridge plants to analytics platforms'],
            ['Time-Sensitive Networking (TSN, IEEE 802.1)', 'Standard Ethernet extensions for deterministic, scheduled delivery', 'Allows control traffic and ordinary traffic to share a network'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Legacy protocols trust everyone', text: 'Many fieldbuses assume a closed, physically protected network. A device that can reach a Modbus device can usually read or write it with no authentication. Network segmentation, monitoring and gateways that enforce policy are therefore essential.' },
      ],
    },
    {
      id: 'purdue',
      title: 'The Purdue model and segmentation',
      blocks: [
        {
          t: 'table',
          head: ['Level', 'Name', 'Contents'],
          rows: [
            ['0', 'Process', 'Sensors, actuators, drives: the physical process'],
            ['1', 'Basic control', 'PLCs, RTUs, safety controllers'],
            ['2', 'Area supervisory control', 'HMIs, local SCADA, engineering workstations'],
            ['3', 'Site operations', 'Historians, manufacturing execution systems, site servers'],
            ['3.5', 'IT/OT demilitarised zone (DMZ)', 'Brokers, jump hosts, patch servers; controlled boundary'],
            ['4 and 5', 'Enterprise and Internet', 'Business systems, ERP, cloud'],
          ],
          caption: 'The Purdue Enterprise Reference Architecture, as adapted in ISA-95 and IEC 62443. Modern designs bend it for cloud and wireless, but the idea of layered, firewalled zones remains.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Zones and conduits', title: 'IEC 62443', body: 'The standard groups assets into zones of similar security need, and treats connections between them as conduits to be controlled and monitored.' },
            { tag: 'DMZ', title: 'No direct paths', body: 'Traffic between IT and OT should pass through a DMZ, with no direct connection from the Internet or office network to controllers.' },
            { tag: 'Remote access', title: 'Strong control', body: 'Vendor and remote maintenance access needs multi-factor authentication, session recording and time limits.' },
            { tag: 'Monitoring', title: 'Passive detection', body: 'OT-aware monitoring tools watch network traffic without disturbing it, and learn what normal looks like.' },
          ],
        },
      ],
    },
    {
      id: 'diff',
      title: 'IT versus OT: different priorities',
      blocks: [
        {
          t: 'table',
          head: ['', 'IT', 'OT'],
          rows: [
            ['Priority order', 'Confidentiality, integrity, availability', 'Safety, availability, integrity, then confidentiality'],
            ['Lifetime of equipment', '3 to 5 years', '15 to 30 years'],
            ['Patching', 'Frequent, can reboot', 'Rare: needs planned shutdowns and vendor approval'],
            ['Downtime', 'Often tolerable', 'Costly or dangerous; plants run continuously'],
            ['Real-time needs', 'Mostly not strict', 'Hard deadlines; determinism matters'],
            ['Failure consequence', 'Data loss, money', 'Injury, environmental damage, loss of production'],
          ],
        },
        {
          t: 'table',
          head: ['Incident', 'What it showed'],
          rows: [
            ['Stuxnet (discovered 2010)', 'Malware crafted to damage specific industrial equipment (centrifuges) by manipulating PLC code while showing operators normal readings, delivered through removable media and a network of exploits'],
            ['Ukraine power grid attacks (2015, 2016)', 'Attackers gained access to the networks of electricity distributors and switched off substations, causing outages for hundreds of thousands of customers; manual operation was used to restore power'],
            ['Colonial Pipeline (2021)', 'A ransomware attack on business IT systems led the company to halt pipeline operations as a precaution, causing fuel shortages in parts of the US, even though the control systems themselves were reported not to be compromised'],
          ],
          caption: 'Summaries based on published investigation reports. Details vary between sources.',
        },
        {
          t: 'dodont',
          do: ['Segment IT from OT, and zones within OT.', 'Inventory every asset and know what talks to what.', 'Use secure protocols (OPC UA with security) for new connections.', 'Involve operations and safety engineers in security decisions.'],
          dont: ['Expose controllers or HMIs directly to the Internet.', 'Patch or scan production systems without planning: active scans can crash fragile devices.', 'Apply IT policies (such as forced reboots) to OT without review.'],
        },
        { t: 'links', items: [{ path: 'cybersecurity/red-and-blue/incident-response', note: 'Incident response' }, { path: 'networking/iot-operations/smart-home-and-consumer-iot', note: 'Next: smart homes' }, { path: 'cybersecurity/attack-surface/iot-security', note: 'IoT security' }] },
      ],
    },
  ],
  sources: [
    'IEC 62443 series: Industrial communication networks, IT security for networks and systems.',
    'Stouffer, K., et al. (2015). Guide to Industrial Control Systems (ICS) Security. NIST Special Publication 800-82, Revision 2 (and later revisions).',
    'Langner, R. (2011). Stuxnet: dissecting a cyberwarfare weapon. IEEE Security and Privacy.',
    'Lee, R. M., Assante, M. J., and Conway, T. (2016). Analysis of the Cyber Attack on the Ukrainian Power Grid. SANS ICS / E-ISAC.',
    'Williams, T. J. (1992). The Purdue Enterprise Reference Architecture. Instrument Society of America.',
    'OPC Foundation. OPC UA specification (IEC 62541).',
  ],
  related: ['networking/iot-operations/device-management-and-updates', 'cybersecurity/red-and-blue/incident-response', 'cybersecurity/attack-surface/iot-security'],
}

export default guide
