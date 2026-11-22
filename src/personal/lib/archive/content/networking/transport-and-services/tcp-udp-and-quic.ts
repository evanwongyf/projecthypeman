import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'IP delivers packets on a best-effort basis: they may be lost, duplicated, delayed or reordered. The transport layer turns that into something applications can use. TCP provides a reliable, ordered byte stream and manages how fast to send so as not to overload the network. UDP provides almost nothing, which is its strength for real-time and constrained devices. QUIC, the newest, puts reliability and encryption on top of UDP to remove old bottlenecks. This guide explains each, works through TCP’s handshake and congestion control, derives a throughput formula, and has a lab to play with the congestion window.',
  nutshell: [
    '**TCP** gives a **reliable, ordered** stream using **sequence numbers**, **acknowledgements** and **retransmission**. It opens with a **three-way handshake**.',
    '**Flow control** (receive window) stops the sender overwhelming the receiver; **congestion control** stops it overwhelming the network.',
    'Classic congestion control: **slow start**, then **additive increase**, and **multiplicative decrease** on loss (AIMD). Linux defaults to **CUBIC**; **BBR** estimates bandwidth and round-trip time instead of reacting to loss.',
    '**UDP** is connectionless: 8-byte header, no reliability. It suits **DNS**, **voice**, **games** and constrained **IoT** (CoAP).',
    '**QUIC** (RFC 9000) runs over UDP with built-in **TLS 1.3**, **independent streams** and **connection migration**; **HTTP/3** uses it.',
  ],
  sections: [
    {
      id: 'tcp',
      title: 'TCP: reliability',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'SYN', body: 'The client sends a segment with the SYN flag and its initial sequence number.' },
            { title: 'SYN-ACK', body: 'The server replies with SYN and ACK, giving its own initial sequence number.' },
            { title: 'ACK', body: 'The client acknowledges. The connection is established after one and a half round trips; data can be sent with the final ACK.' },
            { title: 'Data and acknowledgements', body: 'Every byte has a sequence number. The receiver acknowledges the next byte it expects. Missing data is retransmitted after a timeout or after three duplicate ACKs (fast retransmit).' },
            { title: 'Close', body: 'Each side sends FIN to close its direction; a RST aborts immediately.' },
          ],
        },
        {
          t: 'table',
          head: ['Mechanism', 'Purpose'],
          rows: [
            ['Sequence and acknowledgement numbers', 'Order the stream and detect loss'],
            ['Checksum', 'Detect corruption'],
            ['Retransmission timer (RTO)', 'Resend lost data; estimated from measured round-trip times with smoothing (Jacobson)'],
            ['Receive window', 'Flow control: how much the receiver can buffer'],
            ['Congestion window', 'Congestion control: how much the network can carry'],
            ['Selective acknowledgements (SACK)', 'Tell the sender exactly which segments arrived, so only missing ones are resent'],
            ['Nagle and delayed ACK', 'Combine small writes and acknowledgements; they can interact to add delay for chatty protocols'],
          ],
        },
      ],
    },
    {
      id: 'cc',
      title: 'Congestion control',
      blocks: [
        { t: 'p', text: 'In 1986 the early Internet suffered “congestion collapse”: senders retransmitted lost packets, which made congestion worse. Van Jacobson’s 1988 algorithms fixed it, and the same ideas still run under almost every connection. The sender keeps a congestion window (cwnd): how much unacknowledged data it may have in flight. It grows while all is well and shrinks when packets are lost, which signals congestion.' },
        { t: 'net-lab', viz: 'tcp' },
        {
          t: 'table',
          head: ['Phase', 'What the window does', 'Why'],
          rows: [
            ['Slow start', 'Starts at a few segments and doubles every round trip', 'Probes quickly for available capacity'],
            ['Congestion avoidance', 'Grows by about one segment per round trip (additive increase)', 'Approaches the limit gently'],
            ['Loss detected (fast retransmit)', 'Halves the window (multiplicative decrease) and continues (Reno) or restarts (Tahoe, timeouts)', 'Backs off to relieve congestion'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'CUBIC', title: 'The common default', body: 'Window growth is a cubic function of time since the last loss, so it recovers quickly on high-speed, long-distance links. Standard in Linux and widely used.' },
            { tag: 'BBR', title: 'Model-based', body: 'Google’s BBR (2016) estimates the bottleneck bandwidth and minimum round-trip time and paces packets, instead of reacting only to loss. It can improve throughput on lossy paths, and has raised fairness questions in some versions.' },
            { tag: 'ECN', title: 'Explicit congestion signals', body: 'Routers can mark packets instead of dropping them, so senders slow down without loss.' },
            { tag: 'Wireless', title: 'Loss is not always congestion', body: 'Radio errors cause loss that has nothing to do with congestion, so loss-based algorithms underperform on poor wireless links.' },
          ],
        },
        {
          t: 'math',
          tex: '\\text{Throughput} \\approx \\frac{\\text{MSS}}{\\text{RTT}} \\cdot \\frac{1.22}{\\sqrt{p}}',
          caption: 'The Mathis equation: an approximate upper limit on the throughput of a TCP Reno connection.',
          plain: 'TCP sends about one window per round trip. When loss is rare, the window can grow large; when loss is common, it stays small. The equation says throughput falls with a longer round-trip time and with the square root of the loss rate.',
          where: [
            { sym: '\\text{MSS}', def: 'maximum segment size, in bytes' },
            { sym: '\\text{RTT}', def: 'round-trip time, in seconds' },
            { sym: 'p', def: 'packet loss probability (for example 0.01 for 1 per cent)' },
            { sym: '1.22', def: 'a constant from the derivation (about √(3/2))' },
          ],
          syntax: [
            { sym: '\\sqrt{p}', say: '“the square root of p”: the number which multiplied by itself gives p.' },
            { sym: '\\approx', say: '“is approximately”: it is a model, not an exact law.' },
          ],
          worked: {
            title: 'MSS 1460 bytes, RTT 50 ms, loss 1 per cent',
            steps: [
              'MSS in bits: \\(1460 \\times 8 = 11{,}680\\) bits.',
              '\\(\\dfrac{\\text{MSS}}{\\text{RTT}} = \\dfrac{11{,}680}{0.05} = 233{,}600\\) bits per second.',
              '\\(\\dfrac{1.22}{\\sqrt{0.01}} = \\dfrac{1.22}{0.1} = 12.2\\).',
              'Throughput \\(\\approx 233{,}600 \\times 12.2 \\approx 2{,}850{,}000\\) bits per second.',
              'With loss of 0.01 per cent (\\(p = 0.0001\\)): \\(\\dfrac{1.22}{0.01} = 122\\), so about \\(28.5\\) Mbit/s.',
            ],
            answer: 'About 2.9 Mbit/s at 1 per cent loss, and about 28.5 Mbit/s at 0.01 per cent loss. A hundred times less loss gives ten times more throughput. This is why a small amount of loss on a long path cripples single TCP flows, and why loss-resistant algorithms, parallel connections and good wireless design matter.',
          },
        },
      ],
    },
    {
      id: 'udp',
      title: 'UDP and when to use it',
      blocks: [
        { t: 'p', text: 'UDP adds only port numbers and a checksum to IP. There is no connection, no retransmission and no ordering. That makes it light and quick, and it leaves reliability to the application, or does without it.' },
        {
          t: 'table',
          head: ['Use', 'Why UDP'],
          rows: [
            ['DNS', 'One small question and answer; a connection would cost more than the exchange'],
            ['Voice and video calls', 'A late packet is useless, so retransmitting adds delay'],
            ['Online games', 'The latest state matters more than old state'],
            ['IoT (CoAP, many sensors)', 'Small messages from constrained devices, with application-level retries'],
            ['Streaming protocols', 'Combined with application-level reliability or loss concealment'],
            ['QUIC', 'Provides its own reliability and encryption, and avoids operating-system and middlebox changes to TCP'],
          ],
        },
      ],
    },
    {
      id: 'quic',
      title: 'QUIC and HTTP/3',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Faster setup', title: 'One handshake for transport and TLS', body: 'QUIC combines connection setup and TLS 1.3, so a new connection needs one round trip, and a resumed one can send data immediately (0-RTT, with replay caveats).' },
            { tag: 'No head-of-line blocking', title: 'Independent streams', body: 'In TCP, one lost segment stalls everything behind it, even data for other requests. QUIC streams are independent, so loss on one does not block the others.' },
            { tag: 'Mobility', title: 'Connection migration', body: 'A QUIC connection is identified by a connection ID, not by addresses, so it survives a change from Wi-Fi to cellular.' },
            { tag: 'Encrypted by default', title: 'Headers are protected', body: 'Most of the transport header is encrypted, which stops middleboxes interfering and limits ossification.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Standards', text: 'QUIC was standardised as RFC 9000 (2021) and HTTP/3 as RFC 9114 (2022). Major browsers, CDNs and large sites use them, and a large share of web traffic from big providers now runs over QUIC.' },
        { t: 'links', items: [{ path: 'networking/transport-and-services/dns-and-application-protocols', note: 'Next: DNS and the application layer' }, { path: 'networking/transport-and-services/performance-and-qos', note: 'Latency, bandwidth-delay product and queues' }, { path: 'cloud/scale-and-maths/scaling-and-queueing', note: 'Queueing theory' }] },
      ],
    },
  ],
  sources: [
    'Eddy, W. (2022). Transmission Control Protocol (TCP). RFC 9293.',
    'Jacobson, V. (1988). Congestion avoidance and control. ACM SIGCOMM.',
    'Mathis, M., Semke, J., Mahdavi, J., and Ott, T. (1997). The macroscopic behavior of the TCP congestion avoidance algorithm. ACM Computer Communication Review.',
    'Cardwell, N., et al. (2016). BBR: congestion-based congestion control. ACM Queue.',
    'Iyengar, J., and Thomson, M. (2021). QUIC: A UDP-Based Multiplexed and Secure Transport. RFC 9000.',
    'Bishop, M. (2022). HTTP/3. RFC 9114.',
  ],
  related: ['networking/fundamentals/routing', 'networking/transport-and-services/performance-and-qos', 'cloud/scale-and-maths/scaling-and-queueing'],
}

export default guide
