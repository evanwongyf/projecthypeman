import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When you open a web page, thousands of tiny messages cross many networks, each carried by hardware and rules you never see. Networking works because the problem is divided into layers. One layer worries about sending bits over a wire or through the air, another about finding a route across many networks, another about reliability, another about what a web page is. Each layer does its job and hands over to the next. This guide introduces the layered models, shows how data is wrapped (encapsulation) as it travels, explains packet size limits, and follows one web request from your browser to a server and back.',
  nutshell: [
    'The **OSI model** has seven layers; the **TCP/IP model** has four (link, internet, transport, application). TCP/IP describes the Internet actually in use.',
    'Each layer **wraps** the data from the one above with its own **header** (encapsulation). The receiver peels the wrappers off in reverse.',
    'Names by layer: **frame** (link), **packet** (internet), **segment** (TCP) or **datagram** (UDP), **message** (application).',
    'Every link has a **maximum transmission unit (MTU)**; Ethernet’s is usually **1,500 bytes**. Bigger packets are fragmented or dropped.',
    'A single web request involves **DNS**, a **TCP** handshake, usually **TLS**, and **HTTP**, across many routers.',
  ],
  sections: [
    {
      id: 'models',
      title: 'The layered models',
      blocks: [
        {
          t: 'table',
          head: ['OSI layer', 'TCP/IP layer', 'What it does', 'Examples'],
          rows: [
            ['7 Application', 'Application', 'Services and protocols that applications use', 'HTTP, DNS, SMTP, MQTT'],
            ['6 Presentation', 'Application', 'Encoding, compression, encryption', 'TLS, JSON, JPEG'],
            ['5 Session', 'Application', 'Opening, managing and closing dialogues', 'RPC sessions, TLS sessions'],
            ['4 Transport', 'Transport', 'End-to-end delivery between applications; reliability; ports', 'TCP, UDP, QUIC'],
            ['3 Network', 'Internet', 'Addressing and routing across networks', 'IP, ICMP'],
            ['2 Data link', 'Link', 'Delivery on one network segment; framing; MAC addresses', 'Ethernet, Wi-Fi, PPP'],
            ['1 Physical', 'Link', 'Signals on wire, fibre or radio', 'Copper, fibre, radio waves'],
          ],
          caption: 'OSI is a teaching model; TCP/IP is the working one. The upper three OSI layers are merged in TCP/IP.',
        },
        { t: 'callout', tone: 'tip', title: 'A memory aid', text: 'Troubleshooting from the bottom up is a habit: is the cable or radio working (physical)? Does the device have a link and a MAC address (data link)? Does it have an IP address and a route (network)? Can it open a connection (transport)? Does the application behave (application)?' },
      ],
    },
    {
      id: 'encaps',
      title: 'Encapsulation',
      blocks: [
        { t: 'p', text: 'When a browser sends a request, the application data is passed down. The transport layer adds a TCP header (ports, sequence numbers). The network layer adds an IP header (source and destination addresses). The link layer adds an Ethernet or Wi-Fi header (MAC addresses) and a trailer with a check value. The result goes out as a frame. Each router along the way strips the link layer, reads the IP header to decide where to send it next, and builds a new link layer for the next hop. The IP header stays the same (apart from a hop counter); the link headers change at every hop.' },
        {
          t: 'flow',
          title: 'Wrapping data on the way out',
          nodes: [
            { label: 'Application data', sub: 'an HTTP request', tone: 'data' },
            { label: 'TCP segment', sub: '+ TCP header (20 bytes or more)', tone: 'process' },
            { label: 'IP packet', sub: '+ IP header (20 bytes for IPv4)', tone: 'process' },
            { label: 'Ethernet frame', sub: '+ header 14 bytes + trailer 4 bytes', tone: 'model' },
            { label: 'Bits on the wire', sub: 'physical signals', tone: 'output' },
          ],
        },
        {
          t: 'table',
          head: ['Header', 'Key fields', 'Size (typical)'],
          rows: [
            ['Ethernet', 'Destination and source MAC (6 bytes each), type (2 bytes), frame check sequence (4 bytes)', '14 + 4 bytes'],
            ['IPv4', 'Version, header length, total length, TTL, protocol, source and destination address, checksum', '20 bytes (no options)'],
            ['IPv6', 'Version, traffic class, flow label, payload length, next header, hop limit, 128-bit source and destination', '40 bytes'],
            ['TCP', 'Source and destination port, sequence and acknowledgement numbers, flags, window, checksum', '20 bytes (no options)'],
            ['UDP', 'Source and destination port, length, checksum', '8 bytes'],
          ],
        },
      ],
    },
    {
      id: 'mtu',
      title: 'Packet size: MTU, MSS and fragmentation',
      blocks: [
        {
          t: 'math',
          tex: '\\text{MSS} = \\text{MTU} - \\text{IP header} - \\text{TCP header}',
          caption: 'The largest TCP payload that fits in one packet without fragmentation.',
          plain: 'A link can only carry packets up to a certain size, the maximum transmission unit. Some of that space is taken up by the headers. What is left for your data is the maximum segment size.',
          where: [
            { sym: '\\text{MTU}', def: 'maximum size of an IP packet the link can carry, in bytes' },
            { sym: '\\text{MSS}', def: 'maximum segment size: the most TCP data in one packet' },
          ],
          syntax: [{ sym: '\\text{MTU} - \\text{IP header} - \\text{TCP header}', say: '“MTU minus the IP header minus the TCP header”: subtract the overhead from the allowed packet size.' }],
          worked: {
            title: 'Ethernet with IPv4',
            steps: [
              'Ethernet MTU is \\(1500\\) bytes.',
              'IPv4 header is \\(20\\) bytes and TCP header is \\(20\\) bytes.',
              '\\(\\text{MSS} = 1500 - 20 - 20 = 1460\\) bytes.',
              'To send a 1 MB file (about \\(1{,}000{,}000\\) bytes) you need about \\(1{,}000{,}000 / 1460 \\approx 685\\) segments.',
            ],
            answer: 'MSS is 1,460 bytes, and a 1 MB file needs around 685 TCP segments. Of each 1,500-byte packet, 40 bytes (about 2.7 per cent) are headers, plus the Ethernet overhead.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Fragmentation', title: 'Splitting big packets', body: 'IPv4 routers can fragment a packet that is too big for the next link, and the destination reassembles it. It is inefficient and a source of problems.' },
            { tag: 'Path MTU discovery', title: 'Finding the smallest link', body: 'Hosts set the “don’t fragment” flag and listen for messages from routers that say a packet is too big, then lower their packet size. Blocking those messages causes mysterious hangs.' },
            { tag: 'IPv6', title: 'No fragmentation by routers', body: 'IPv6 routers never fragment; only the sending host can, and the minimum link MTU is 1,280 bytes.' },
            { tag: 'Tunnels', title: 'Overhead eats MTU', body: 'VPNs and overlays add headers, so the usable MTU is smaller (often around 1,400 to 1,450 bytes).' },
          ],
        },
      ],
    },
    {
      id: 'trace',
      title: 'Following one web request',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. Name to address (DNS)', body: 'Your device asks a DNS resolver for the IP address of the site, using UDP port 53.' },
            { title: '2. Find the next hop', body: 'Your device checks whether the address is on its own subnet. If not, it sends the packet to its default gateway, learning the gateway’s MAC address with ARP.' },
            { title: '3. Hop by hop', body: 'Each router looks up the destination in its routing table and forwards the packet, decrementing the time-to-live (TTL) counter. A typical path crosses 10 to 20 routers.' },
            { title: '4. TCP handshake', body: 'Your device and the server exchange SYN, SYN-ACK and ACK to set up a reliable connection.' },
            { title: '5. TLS handshake', body: 'They agree encryption keys and verify the server’s certificate. With TLS 1.3 this takes one additional round trip.' },
            { title: '6. HTTP request and response', body: 'The browser sends a GET; the server sends the page, in many TCP segments.' },
            { title: '7. Closing or reuse', body: 'The connection stays open for further requests, or closes with FIN packets.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Try it', text: 'On a computer, “ping” shows round-trip time, and “traceroute” (tracert on Windows) lists the routers on the path to a destination. They use ICMP messages and the TTL field.' },
        { t: 'links', items: [{ path: 'networking/fundamentals/ethernet-and-switching', note: 'Next: Ethernet and switching' }, { path: 'cybersecurity/attack-surface/network-security', note: 'Network attacks at each layer' }, { path: 'cloud/fundamentals/cloud-networking', note: 'Cloud networking and subnet arithmetic' }] },
      ],
    },
  ],
  sources: [
    'Kurose, J. F., and Ross, K. W. (2021). Computer Networking: A Top-Down Approach, 8th edition.',
    'Postel, J. (1981). Internet Protocol. RFC 791; Deering, S., and Hinden, R. (2017). Internet Protocol, Version 6 (IPv6) Specification. RFC 8200.',
    'Postel, J. (1981). Transmission Control Protocol. RFC 793, and RFC 9293 (2022).',
    'IEEE 802.3 Ethernet standard.',
  ],
  related: ['networking/fundamentals/ethernet-and-switching', 'networking/fundamentals/ip-addressing-and-nat', 'cybersecurity/attack-surface/network-security'],
}

export default guide
