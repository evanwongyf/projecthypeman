import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Wireless networks share the air, a medium that is noisy, shared and unforgiving, so their design is full of trade-offs between speed, range, power and reliability. This guide covers Wi-Fi (the 802.11 standards, channels, how devices share airtime, roaming and mesh) and cellular (4G LTE and 5G), and teaches the maths you need to reason about any radio: decibels, path loss and the link budget. A lab lets you compute how far a radio can reach.',
  nutshell: [
    'Wi-Fi standards: **Wi-Fi 4 (802.11n)**, **Wi-Fi 5 (ac)**, **Wi-Fi 6/6E (ax)** and **Wi-Fi 7 (be)**. Real-world speeds are far below the headline “maximum”.',
    '**2.4 GHz** reaches farther through walls but is crowded (only three non-overlapping 20 MHz channels: 1, 6, 11); **5 GHz** and **6 GHz** offer more, wider channels at shorter range.',
    'Wi-Fi uses **CSMA/CA**: listen before talking. **Airtime** is the shared resource, so one slow device can slow everyone.',
    '**Decibels** turn multiplication into addition: a gain of 3 dB doubles power; every 6 dB doubles free-space range.',
    '**Cellular** (4G LTE and 5G NR) uses licensed spectrum with scheduled access: better for coverage, mobility and guaranteed quality.',
  ],
  sections: [
    {
      id: 'wifi',
      title: 'Wi-Fi standards and bands',
      blocks: [
        {
          t: 'table',
          head: ['Generation', 'Standard', 'Bands', 'Key features', 'Theoretical maximum'],
          rows: [
            ['Wi-Fi 4', '802.11n (2009)', '2.4 and 5 GHz', 'MIMO (multiple antennas), 40 MHz channels', 'about 600 Mbit/s'],
            ['Wi-Fi 5', '802.11ac (2013)', '5 GHz', '80 and 160 MHz channels, MU-MIMO (downlink), 256-QAM', 'about 3.5 Gbit/s'],
            ['Wi-Fi 6 and 6E', '802.11ax (2019, 6E adds 6 GHz)', '2.4, 5 and (6E) 6 GHz', 'OFDMA, uplink MU-MIMO, target wake time (good for IoT battery life), 1024-QAM', 'about 9.6 Gbit/s'],
            ['Wi-Fi 7', '802.11be (2024)', '2.4, 5 and 6 GHz', '320 MHz channels, multi-link operation, 4096-QAM', 'about 46 Gbit/s'],
          ],
          caption: 'The maxima need many antennas and wide channels. A phone with two streams typically reaches a fraction of the figures, and real throughput also depends on distance, interference and the number of users.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: '2.4 GHz', title: 'Long range, crowded', body: 'Penetrates walls better. Shared with Bluetooth, Zigbee, microwave ovens and baby monitors. Use channels 1, 6 and 11 (20 MHz) to avoid overlap.' },
            { tag: '5 GHz', title: 'More room', body: 'Many more channels and wider channels, so higher speeds at shorter range. Some channels must avoid radar (DFS).' },
            { tag: '6 GHz', title: 'Clean spectrum', body: 'Available in many countries for Wi-Fi 6E and 7. Lots of wide channels and little legacy interference; shortest range.' },
            { tag: 'Security', title: 'WPA3', body: 'Use WPA3 (or WPA2-AES at minimum). Avoid open networks and old WEP or TKIP. Wi-Fi Protected Setup (WPS) PINs are weak.' },
          ],
        },
      ],
    },
    {
      id: 'air',
      title: 'Sharing the air',
      blocks: [
        { t: 'p', text: 'Wi-Fi devices share a channel by listening before they transmit (carrier sense) and waiting a random backoff if it is busy. They cannot hear collisions while transmitting, so they avoid them (CSMA/CA) and require an acknowledgement for every frame. This overhead is why real throughput is typically about half the link rate.' },
        {
          t: 'table',
          head: ['Concept', 'What it means'],
          rows: [
            ['Airtime', 'The time a device occupies the channel. A slow device (low data rate) uses more airtime for the same data, reducing the share for others'],
            ['Hidden node', 'Two devices cannot hear each other but both reach the access point, causing collisions; RTS/CTS can help'],
            ['Overlapping BSS', 'Neighbouring networks on the same channel share airtime. Choose clean channels'],
            ['Roaming', 'Moving between access points. 802.11k, v and r help a client choose and switch fast'],
            ['Mesh', 'Access points link wirelessly to each other. Wired backhaul is much better where possible'],
            ['Target wake time (Wi-Fi 6)', 'Lets IoT devices sleep for scheduled periods, saving battery'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Practical improvements', text: 'Place the access point centrally and high, use wired backhaul, choose a clean channel, keep legacy devices off the main network, use 5 or 6 GHz where you can, and put IoT devices on 2.4 GHz with their own SSID or VLAN.' },
      ],
    },
    {
      id: 'maths',
      title: 'Radio mathematics: decibels and path loss',
      blocks: [
        { t: 'p', text: 'Radio signals span a vast range of power: a transmitter might send a watt while a receiver can detect a few billionths of a billionth of a watt. Engineers use decibels (dB), a logarithmic scale. A 10 dB change is a factor of 10 in power; 3 dB is about a factor of 2. Absolute power is expressed in dBm: decibels relative to one milliwatt.' },
        {
          t: 'math',
          tex: 'P_{\\text{dBm}} = 10 \\log_{10}\\!\\left(\\frac{P}{1\\ \\text{mW}}\\right), \\qquad \\text{FSPL}_{\\text{dB}} = 20\\log_{10}(d_{\\text{km}}) + 20\\log_{10}(f_{\\text{MHz}}) + 32.44',
          caption: 'Converting power to dBm, and the free-space path loss between two antennas.',
          plain: 'The first formula turns a power in milliwatts into dBm: 1 mW is 0 dBm, 10 mW is 10 dBm, 100 mW is 20 dBm. The second says how much signal is lost over a distance in open space. Loss grows with the logarithm of distance and of frequency, so doubling either adds 6 dB.',
          where: [
            { sym: 'P', def: 'power in milliwatts' },
            { sym: 'd_{\\text{km}}', def: 'distance in kilometres' },
            { sym: 'f_{\\text{MHz}}', def: 'frequency in megahertz' },
            { sym: '\\text{FSPL}', def: 'free-space path loss in decibels' },
          ],
          syntax: [
            { sym: '\\log_{10}(x)', say: '“log base ten of x”: the power of 10 that gives x. For example log₁₀(1000) = 3.' },
            { sym: '20\\log_{10}', say: 'Twenty times the log: used for quantities that scale with distance or voltage (power scales with the square).' },
          ],
          worked: {
            title: 'A 2.4 GHz link over 100 metres',
            steps: [
              'Distance \\(d = 100\\ \\text{m} = 0.1\\ \\text{km}\\); frequency \\(f = 2400\\ \\text{MHz}\\).',
              '\\(20\\log_{10}(0.1) = 20 \\times (-1) = -20\\) dB.',
              '\\(20\\log_{10}(2400) = 20 \\times 3.380 = 67.6\\) dB.',
              '\\(\\text{FSPL} = -20 + 67.6 + 32.44 = 80.0\\) dB.',
              'A 20 dBm transmitter (100 mW) with 2 dBi antennas at each end gives received power \\(20 + 2 + 2 - 80 = -56\\) dBm.',
            ],
            answer: 'Free-space loss is about 80 dB at 100 m, so a 20 dBm signal arrives at roughly −56 dBm, far above a typical Wi-Fi sensitivity of −80 to −90 dBm. Walls add 3 to 15 dB each, which is why indoor range is much less than free-space range. Doubling the distance to 200 m adds 6 dB: 86 dB.',
          },
        },
        { t: 'net-lab', viz: 'link-budget' },
        {
          t: 'table',
          head: ['Rule of thumb', 'Meaning'],
          rows: [
            ['+3 dB', 'Twice the power'],
            ['+6 dB', 'Twice the free-space range'],
            ['+10 dB', 'Ten times the power; about 3.2 times the free-space range'],
            ['Each wall or floor', 'Typically 3 to 15 dB depending on material'],
            ['Signal-to-noise ratio (SNR)', 'The gap between signal and noise: higher SNR allows faster modulations'],
          ],
        },
      ],
    },
    {
      id: 'cell',
      title: 'Cellular: 4G and 5G',
      blocks: [
        {
          t: 'table',
          head: ['', 'LTE (4G)', '5G NR'],
          rows: [
            ['Spectrum', 'Licensed bands, mostly below 3 GHz', 'Low band (below 1 GHz), mid band (about 3 to 6 GHz) and millimetre wave (24 GHz and above)'],
            ['Peak speed', 'Up to about 1 Gbit/s with aggregation', 'Several Gbit/s on mmWave; mid band typically hundreds of Mbit/s in practice'],
            ['Latency', 'About 30 to 50 ms', 'Can be 10 ms or lower; target of 1 ms for ultra-reliable low-latency services'],
            ['Use cases', 'Mobile broadband, voice over LTE', 'Enhanced mobile broadband (eMBB), ultra-reliable low-latency (URLLC), massive machine-type communication (mMTC)'],
            ['IoT variants', 'LTE-M and NB-IoT', 'The same IoT technologies are carried into 5G, plus RedCap for mid-range devices'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Scheduling', title: 'Managed access', body: 'A cellular base station schedules every device’s transmissions, so quality can be guaranteed, unlike Wi-Fi’s contention.' },
            { tag: 'Handover', title: 'Mobility', body: 'Devices are handed between cells without dropping a connection at vehicle speeds.' },
            { tag: 'Small cells', title: 'Densification', body: 'Higher frequencies need more, smaller cells, since mmWave signals are blocked by walls and even foliage.' },
            { tag: 'Slicing', title: 'Network slicing', body: 'A 5G core can offer virtual networks with different guarantees (for example, for factories or emergency services).' },
          ],
        },
        { t: 'links', items: [{ path: 'networking/iot-connectivity/iot-lpwan', note: 'LPWAN and cellular IoT' }, { path: 'networking/transport-and-services/performance-and-qos', note: 'Next: performance and queues' }, { path: 'weather/start-here', note: 'Weather and radio propagation' }] },
      ],
    },
  ],
  sources: [
    'IEEE 802.11 standard family; Wi-Fi Alliance generation naming.',
    'Gast, M. S. (2013). 802.11ac: A Survival Guide. O’Reilly; and 802.11n: A Survival Guide (2012).',
    'Rappaport, T. S. (2002). Wireless Communications: Principles and Practice, 2nd edition. Prentice Hall.',
    'Dahlman, E., Parkvall, S., and Sköld, J. (2020). 5G NR: The Next Generation Wireless Access Technology, 2nd edition. Academic Press.',
    'ITU-R. Recommendation P.525: Calculation of free-space attenuation.',
  ],
  related: ['networking/transport-and-services/dns-and-application-protocols', 'networking/iot-connectivity/iot-lpwan', 'networking/transport-and-services/performance-and-qos'],
}

export default guide
