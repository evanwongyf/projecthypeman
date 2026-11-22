import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A network can be “fast” in several different ways, and they are often confused. Bandwidth is how much data can be sent per second; latency is how long one bit takes to arrive; jitter is how much that varies; loss is how much never arrives. A 1 Gbit/s link can still feel slow if latency is high or the buffers are bloated. This guide separates the quantities, shows where delay comes from, derives the bandwidth-delay product, explains queues, bufferbloat and quality of service, and gives you ways to measure a network honestly.',
  nutshell: [
    '**Bandwidth** (capacity), **throughput** (what you actually get), **latency** (delay), **jitter** (variation in delay) and **loss** are different things.',
    'Latency has four parts: **propagation** (distance), **transmission** (size ÷ rate), **queuing** and **processing**.',
    'Light in fibre travels at about **200,000 km/s**, so **1 ms of one-way delay per 200 km** is a hard floor.',
    'The **bandwidth-delay product** (BDP) is how much data must be in flight to fill a link: **BDP = bandwidth × round-trip time**.',
    '**Bufferbloat** is excessive queuing in buffers that makes latency soar under load. **Smart queue management** and **QoS** keep interactive traffic fast.',
  ],
  sections: [
    {
      id: 'terms',
      title: 'The quantities',
      blocks: [
        {
          t: 'table',
          head: ['Term', 'Meaning', 'Unit'],
          rows: [
            ['Bandwidth (link capacity)', 'The maximum rate at which bits can be sent on a link', 'bit/s (Mbit/s, Gbit/s)'],
            ['Throughput', 'The rate of useful data actually delivered, after overheads, loss and sharing', 'bit/s'],
            ['Latency', 'Time for data to go from source to destination (one-way) or there and back (round-trip time, RTT)', 'ms'],
            ['Jitter', 'Variation in latency between packets', 'ms'],
            ['Packet loss', 'Share of packets that never arrive', 'per cent'],
            ['Utilisation', 'Share of capacity in use', 'per cent'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'What matters for what', text: 'Video downloads care about throughput. Video calls and games care about latency, jitter and loss. Web browsing cares about latency a lot, because each page needs many round trips. IoT telemetry often cares about energy and reliability more than speed.' },
      ],
    },
    {
      id: 'delay',
      title: 'Where delay comes from',
      blocks: [
        {
          t: 'table',
          head: ['Component', 'Formula or cause', 'Example'],
          rows: [
            ['Propagation delay', 'distance ÷ signal speed; about 5 µs per km in fibre (two thirds of the speed of light)', '10,000 km → about 50 ms one-way'],
            ['Transmission delay', 'packet size ÷ link rate', '1,500 bytes on 10 Mbit/s: 12,000 bits ÷ 10,000,000 = 1.2 ms'],
            ['Queuing delay', 'time waiting in a buffer behind other packets; varies with load', '0 to hundreds of ms'],
            ['Processing delay', 'time to examine headers, look up routes, encrypt', 'microseconds in routers; more in servers'],
          ],
        },
        {
          t: 'example',
          title: 'Singapore to London, best case',
          lines: [
            { label: 'Distance', text: 'The great-circle distance is about 10,900 km. Real fibre routes are longer (undersea cables follow coasts).' },
            { label: 'Minimum one-way delay', text: '\\(10{,}900 \\div 200{,}000 \\approx 0.0545\\) s, or about 55 ms. The minimum round-trip is about 109 ms.' },
            { label: 'Typical reality', text: 'Measured round-trip times are commonly 160 to 180 ms, because the cable path is longer and routers add queuing and processing.' },
            { label: 'Lesson', text: 'You cannot buy your way below the physical floor. To cut latency on distant paths, move the content closer (a content delivery network), or reduce the number of round trips.' },
          ],
        },
      ],
    },
    {
      id: 'bdp',
      title: 'The bandwidth-delay product',
      blocks: [
        {
          t: 'math',
          tex: '\\text{BDP} = \\text{bandwidth} \\times \\text{RTT}',
          caption: 'The amount of data in flight when a link is fully used.',
          plain: 'Imagine the network as a pipe. Its volume is its width (bandwidth) times its length (the delay). To keep the pipe full, a sender must have that much data on the way before the first acknowledgement returns.',
          where: [
            { sym: '\\text{bandwidth}', def: 'link capacity in bits per second' },
            { sym: '\\text{RTT}', def: 'round-trip time in seconds' },
            { sym: '\\text{BDP}', def: 'bits (divide by 8 for bytes) that must be unacknowledged to fill the link' },
          ],
          syntax: [{ sym: '\\times', say: 'Multiply the capacity by the delay.' }],
          worked: {
            title: 'A 1 Gbit/s link with a 100 ms round trip',
            steps: [
              'Bandwidth: \\(1\\ \\text{Gbit/s} = 10^9\\) bits per second. RTT: \\(0.1\\) s.',
              '\\(\\text{BDP} = 10^9 \\times 0.1 = 10^8\\) bits \\(= 100\\) Mbit.',
              'In bytes: \\(100\\ \\text{Mbit} \\div 8 = 12.5\\) MB.',
              'TCP’s window must therefore reach about 12.5 MB. With a default window of 64 KB, throughput would be \\(\\dfrac{65{,}536 \\times 8}{0.1} \\approx 5.2\\) Mbit/s.',
            ],
            answer: 'The pipe holds 12.5 MB. A sender that keeps only 64 KB in flight uses about 0.5 per cent of the link (5.2 Mbit/s of 1,000). This is why long, fast links (“long fat networks”) need window scaling, large buffers and good congestion control.',
          },
        },
      ],
    },
    {
      id: 'queues',
      title: 'Queues, bufferbloat and QoS',
      blocks: [
        { t: 'p', text: 'When packets arrive faster than a link can send them, they wait in a queue. A little queue absorbs bursts. A huge queue turns a busy link into one with seconds of delay. Jim Gettys named this problem bufferbloat (2010 to 2011): cheap memory led to oversized buffers in modems, routers and Wi-Fi, so that a big upload could add a second or more of delay to every packet, wrecking calls and games.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Diagnose', title: 'Test under load', body: 'Run a ping while saturating the link (a large upload). If latency jumps from 20 ms to 500 ms, you have bufferbloat. Tools such as the “waveform” and “flent” tests report it.' },
            { tag: 'Fix', title: 'Smart queue management', body: 'Algorithms such as fq_codel and CAKE keep queues short and give each flow a fair share. Many routers support them, and the effect on a busy home link is dramatic.' },
            { tag: 'QoS', title: 'Quality of service', body: 'Packets are marked (DSCP) and routers give priority to voice or video. It helps only if the link is congested and the marks are honoured; across the public Internet they are often ignored.' },
            { tag: 'Shaping', title: 'Shaping and policing', body: 'Shaping smooths a flow to a rate by queuing; policing drops what exceeds it. Setting a shaper slightly below the line rate moves the queue to a place you control.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Queues and utilisation', text: 'In a simple queueing model, average waiting time grows sharply as utilisation approaches 100 per cent: at 50 per cent load the average wait is about the service time, at 90 per cent it is about nine times that, and at 99 per cent about ninety-nine times. See the cloud shelf’s queueing guide for the maths.' },
      ],
    },
    {
      id: 'measure',
      title: 'Measuring honestly',
      blocks: [
        {
          t: 'table',
          head: ['Tool', 'What it shows', 'Caveat'],
          rows: [
            ['ping', 'Round-trip time and loss to a host using ICMP', 'Some networks rate-limit or deprioritise ICMP'],
            ['traceroute / mtr', 'Each router hop and where delay or loss appears', 'Hops that do not answer may still forward fine'],
            ['iperf3', 'Throughput between two machines you control', 'Measures the path between them only; use parallel streams to test capacity'],
            ['Speed tests', 'Download and upload to a nearby server', 'Show the best case to one server, not your actual experience'],
            ['Packet capture (Wireshark, tcpdump)', 'Exactly what is on the wire: retransmissions, window sizes, resets', 'Needs knowledge to read, and permission to capture'],
          ],
        },
        {
          t: 'checklist',
          items: [
            'Measure at different times and under load, not just once at night.',
            'Distinguish your local network (Wi-Fi) from your ISP and the destination.',
            'Test wired first to take Wi-Fi out of the picture.',
            'Report latency as a distribution (median and 95th percentile), not just an average.',
            'Change one thing at a time.',
          ],
        },
        { t: 'links', items: [{ path: 'networking/transport-and-services/tcp-udp-and-quic', note: 'TCP and window sizes' }, { path: 'cloud/scale-and-maths/scaling-and-queueing', note: 'Queueing theory' }, { path: 'cloud/operations/observability', note: 'Percentiles and observability' }] },
      ],
    },
  ],
  sources: [
    'Kurose, J. F., and Ross, K. W. (2021). Computer Networking: A Top-Down Approach (delay and throughput chapter).',
    'Gettys, J., and Nichols, K. (2012). Bufferbloat: dark buffers in the Internet. Communications of the ACM.',
    'Nichols, K., and Jacobson, V. (2012). Controlling queue delay. ACM Queue; Høiland-Jørgensen, T., et al. (2018). The Flow Queue CoDel packet scheduler and active queue management algorithm. RFC 8290.',
    'Blake, S., et al. (1998). An Architecture for Differentiated Services. RFC 2475.',
  ],
  related: ['networking/transport-and-services/tcp-udp-and-quic', 'cloud/scale-and-maths/scaling-and-queueing', 'cloud/operations/observability'],
}

export default guide
