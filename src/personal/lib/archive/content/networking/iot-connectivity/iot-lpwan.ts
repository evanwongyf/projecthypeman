import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Some IoT jobs need coverage across kilometres, devices that run on a battery for ten years, and messages measured in bytes: soil moisture across a farm, water meters across a city, a tracker on a shipping container. Wi-Fi and Bluetooth cannot do this; cellular phones networks were built for other things. Low-power wide-area networks (LPWAN) trade data rate for range and battery life. This guide explains how LoRa and LoRaWAN work (spreading factors, device classes, duty cycles), covers NB-IoT and LTE-M, and uses a link-budget lab to show how range is computed.',
  nutshell: [
    '**LPWAN** gives **kilometres of range** and **years of battery life** at the cost of **low data rates** (hundreds of bits to tens of kilobits per second) and **limited message sizes**.',
    '**LoRa** is a radio modulation (chirp spread spectrum); **LoRaWAN** is the network protocol on top. You can run your own gateways or use a community or commercial network.',
    'A **spreading factor** (SF7 to SF12) trades speed for range: higher SF travels farther and uses far more airtime.',
    '**Duty-cycle and airtime limits** apply in unlicensed bands (in the EU, often 1 per cent in the 868 MHz sub-bands).',
    '**NB-IoT** and **LTE-M** are cellular LPWANs run by operators: licensed spectrum, good coverage and mobility (LTE-M), a subscription for each device.',
  ],
  sections: [
    {
      id: 'lora',
      title: 'LoRa and LoRaWAN',
      blocks: [
        { t: 'p', text: 'LoRa (from the company Semtech) modulates data into “chirps” whose frequency sweeps up or down. This spread-spectrum scheme lets a receiver pick a signal out from well below the noise floor, which gives long range with low power. LoRaWAN, maintained by the LoRa Alliance, defines how devices talk to gateways and a network server. Devices send small uplinks that any gateway in range can hear, and the network server de-duplicates and forwards them to the application.' },
        {
          t: 'flow',
          title: 'LoRaWAN architecture',
          nodes: [
            { label: 'End devices', sub: 'sensors using LoRa radio', tone: 'data' },
            { label: 'Gateways', sub: 'receive from many devices, forward over IP', tone: 'process' },
            { label: 'Network server', sub: 'de-duplicates, handles security and adaptive data rate', tone: 'model' },
            { label: 'Application server', sub: 'decrypts payloads, stores, applies logic', tone: 'output' },
          ],
          caption: 'A star-of-stars topology: devices are not tied to one gateway.',
        },
        {
          t: 'table',
          head: ['Spreading factor', 'Approximate data rate (125 kHz)', 'Sensitivity', 'Range and airtime'],
          rows: [
            ['SF7', 'about 5.5 kbit/s', 'about −123 dBm', 'Shortest range, shortest airtime (tens of milliseconds)'],
            ['SF9', 'about 1.8 kbit/s', 'about −129 dBm', 'Medium'],
            ['SF10', 'about 1 kbit/s', 'about −132 dBm', 'Long'],
            ['SF12', 'about 0.25 to 0.3 kbit/s', 'about −137 dBm', 'Longest range, airtime over a second for a small message'],
          ],
          caption: 'Typical values for a 125 kHz channel. Each step up in SF roughly doubles airtime and adds about 2.5 dB of sensitivity.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Class A', title: 'Lowest power', body: 'The device sends when it wants, then opens two short receive windows. Downlinks (commands) can only follow an uplink. Best for battery sensors.' },
            { tag: 'Class B', title: 'Scheduled listening', body: 'Adds scheduled receive slots synchronised by a beacon, so the network can send commands at known times, at a power cost.' },
            { tag: 'Class C', title: 'Always listening', body: 'The device’s receiver is open almost continuously. Lowest latency, highest power; for mains-powered actuators.' },
            { tag: 'ADR', title: 'Adaptive data rate', body: 'The network tells each device to use the fastest spreading factor and lowest power that still gets through, saving airtime for everyone.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Security', text: 'LoRaWAN uses AES-128 encryption with network and application session keys, with devices joining via over-the-air activation. Protect the root keys, use unique keys per device and use LoRaWAN 1.1 where possible, which has improved replay protection.' },
      ],
    },
    {
      id: 'budget',
      title: 'The link budget, and how far it reaches',
      blocks: [
        { t: 'p', text: 'Range comes down to a sum of decibels. Starting with transmit power, add the gains of the antennas, subtract the losses of cables and the margin you want for fading, and compare with the weakest signal the receiver can decode (its sensitivity). The difference is the maximum path loss. Then ask how far a signal travels before it has lost that much, which depends on frequency and the environment.' },
        { t: 'net-lab', viz: 'link-budget' },
        {
          t: 'example',
          title: 'Why LoRa reaches so far',
          lines: [
            { label: 'Numbers', text: 'Transmit 14 dBm, antenna gain 2 dBi at each end, sensitivity −137 dBm (SF12), margin 10 dB.' },
            { label: 'Max path loss', text: '\\(14 + 2 + 2 - (-137) - 10 = 145\\) dB.' },
            { label: 'Compare Bluetooth LE', text: '0 dBm transmit, −95 dBm sensitivity: maximum loss \\(0 + 95 - 10 = 85\\) dB. That is 60 dB less, so a million times less power margin.' },
            { label: 'Range', text: 'Free space at 868 MHz: hundreds of kilometres (line of sight). With an environment exponent of 3 (urban), a few kilometres. Real urban LoRa ranges are commonly 2 to 10 km; rural line of sight can exceed 15 km.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Rules that help', text: 'Every 6 dB gained doubles free-space range. Raising an antenna, using a better antenna, reducing cable loss, and placing gateways high (on a building or tower) usually help more than raising transmit power, which is limited by regulation.' },
      ],
    },
    {
      id: 'duty',
      title: 'Airtime and duty cycle',
      blocks: [
        { t: 'p', text: 'Unlicensed radio bands are shared, so regulators limit how much a device can transmit. In much of Europe, the 868 MHz sub-bands carry a duty-cycle limit, often 1 per cent: a device that transmits for 1 second must stay quiet for 99 seconds. Other regions, such as the US 915 MHz band, use dwell-time limits (about 400 ms per channel) instead. Always check the rules for your country.' },
        {
          t: 'table',
          head: ['Quantity', 'Example (illustrative)'],
          rows: [
            ['A 20-byte message at SF7', 'About 50 to 60 ms of airtime'],
            ['The same message at SF12', 'About 1.3 to 1.5 seconds of airtime'],
            ['1 per cent duty cycle at SF12', 'About 130 to 150 seconds of silence after each message, so about 25 messages an hour at most'],
            ['At SF7', 'Hundreds of messages an hour are permitted'],
          ],
          caption: 'Illustrative values for a 125 kHz channel; exact airtime depends on payload, coding rate and headers.',
        },
        {
          t: 'dodont',
          do: ['Send small, compact payloads (use binary encodings, not JSON).', 'Let adaptive data rate pick the lowest SF that works.', 'Aggregate readings and send less often.'],
          dont: ['Send large messages or frequent confirmed uplinks.', 'Assume unlimited airtime: in public networks you share it with everyone.', 'Ignore local regulations on power, bands and duty cycle.'],
        },
      ],
    },
    {
      id: 'cell',
      title: 'NB-IoT, LTE-M and the others',
      blocks: [
        {
          t: 'table',
          head: ['Technology', 'Operator-run?', 'Data rate', 'Mobility', 'Notes'],
          rows: [
            ['LoRaWAN', 'Unlicensed band; private, community (The Things Network) or commercial networks', 'About 0.3 to 50 kbit/s', 'Limited', 'Cheap devices, you can run your own gateways'],
            ['NB-IoT (3GPP Rel. 13)', 'Yes: licensed spectrum, on an operator’s network', 'Tens to a couple of hundred kbit/s', 'Low (no handover in the basic form)', 'Deep indoor coverage; power-saving modes (PSM, eDRX) can allow multi-year batteries'],
            ['LTE-M (Cat-M1)', 'Yes', 'Up to about 1 Mbit/s', 'Yes (handover); supports voice (VoLTE)', 'Suited to moving assets and wearables'],
            ['Sigfox', 'Proprietary ultra-narrowband network', 'About 100 bit/s', 'Limited', 'The original company went into insolvency proceedings in 2022 and its network assets were acquired; a reminder of vendor risk'],
            ['Satellite IoT', 'Operators using LEO satellites', 'Low', 'Global coverage', 'For remote assets with no terrestrial coverage'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'PSM', title: 'Power saving mode', body: 'The device tells the network it will be unreachable for long periods (hours or days) and wakes only to send. Battery life of years becomes possible.' },
            { tag: 'eDRX', title: 'Extended discontinuous reception', body: 'The device listens only at set intervals (seconds to minutes), allowing occasional downlink messages with modest power.' },
            { tag: 'Choosing', title: 'Build or subscribe', body: 'LoRaWAN costs less per device but you handle coverage; cellular costs a subscription but the operator handles coverage. Compare total cost over the device’s life.' },
            { tag: 'Longevity', title: 'Check the network’s future', body: 'Operators sunset old networks (for example 2G and 3G). Pick technologies with long support commitments for devices that must last 10 years.' },
          ],
        },
        { t: 'links', items: [{ path: 'networking/iot-connectivity/iot-application-protocols', note: 'Next: MQTT, CoAP and LwM2M' }, { path: 'networking/transport-and-services/wifi-and-cellular', note: 'The decibel maths and cellular basics' }, { path: 'networking/iot-foundations/iot-device-hardware', note: 'Battery life lab' }] },
      ],
    },
  ],
  sources: [
    'LoRa Alliance. LoRaWAN Specification 1.0.4 and 1.1; LoRaWAN Regional Parameters.',
    'Semtech. LoRa modulation basics and SX127x/SX126x datasheets.',
    'Raza, U., Kulkarni, P., and Sooriyabandara, M. (2017). Low power wide area networks: an overview. IEEE Communications Surveys and Tutorials.',
    '3GPP. Releases 13 and later: NB-IoT and LTE-M specifications; GSMA. Mobile IoT Deployment Guide.',
    'ETSI EN 300 220 (short-range devices, including duty-cycle rules for the EU 868 MHz band).',
  ],
  related: ['networking/iot-connectivity/iot-short-range-radios', 'networking/transport-and-services/wifi-and-cellular', 'networking/iot-operations/device-management-and-updates'],
}

export default guide
