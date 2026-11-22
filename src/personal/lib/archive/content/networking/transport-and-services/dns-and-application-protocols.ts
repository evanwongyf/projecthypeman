import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'People remember names; networks use numbers. The Domain Name System (DNS) translates one into the other and does it so reliably and quickly that you rarely think about it, until it fails, as it did in several of the biggest outages of recent years. This guide explains how a name is resolved, why caching and time-to-live values matter, the main record types, DNS attacks and defences, and then summarises the application protocols that ride on top: HTTP in its three versions, TLS, email and time.',
  nutshell: [
    'DNS is a **distributed, hierarchical database**: the **root**, then **top-level domains** (.com, .sg), then **authoritative servers** for each domain.',
    'A **recursive resolver** does the work for you and **caches** answers for the record’s **TTL**.',
    'Common records: **A** and **AAAA** (addresses), **CNAME** (alias), **MX** (mail), **NS** (name servers), **TXT** (text, used for verification and email security).',
    'DNS was designed without security. **DNSSEC** signs records; **DoH and DoT** encrypt queries. Attacks include **cache poisoning** and **DDoS**.',
    '**HTTP/1.1, HTTP/2 and HTTP/3** differ in how they share a connection; **TLS 1.3** secures it with one extra round trip.',
  ],
  sections: [
    {
      id: 'resolve',
      title: 'How a name is resolved',
      blocks: [
        {
          t: 'flow',
          title: 'Looking up www.example.sg',
          nodes: [
            { label: 'Your device', sub: 'asks the configured resolver', tone: 'data' },
            { label: 'Recursive resolver', sub: 'checks its cache; if empty, asks the root', tone: 'process' },
            { label: 'Root server', sub: 'points to the .sg servers', tone: 'model' },
            { label: 'TLD server', sub: 'points to example.sg’s name servers', tone: 'model' },
            { label: 'Authoritative server', sub: 'returns the address record', tone: 'output' },
          ],
          loop: 'The resolver caches the answer for the TTL and returns it to your device.',
        },
        {
          t: 'table',
          head: ['Record', 'Meaning', 'Example'],
          rows: [
            ['A', 'IPv4 address of a name', 'www.example.sg → 203.0.113.10'],
            ['AAAA', 'IPv6 address', 'www.example.sg → 2001:db8::10'],
            ['CNAME', 'Alias to another name', 'www → webserver.example.sg'],
            ['MX', 'Mail servers for the domain, with priority', 'example.sg → mail.example.sg (10)'],
            ['NS', 'Authoritative name servers', 'example.sg → ns1.example.sg'],
            ['TXT', 'Free text: SPF, DKIM, DMARC, domain verification', '"v=spf1 include:_spf.example.sg -all"'],
            ['PTR', 'Reverse lookup from address to name', '10.113.0.203.in-addr.arpa → www.example.sg'],
            ['SRV and others', 'Locate services', '_sip._tcp.example.sg'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'TTL and changing records', text: 'A record with a TTL of 3,600 seconds can be cached for an hour. If you plan to move a server, lower the TTL (say to 300 seconds) a day or two before, make the change, then raise it again. Otherwise some users keep using the old address for up to an hour.' },
      ],
    },
    {
      id: 'security',
      title: 'DNS security and failure',
      blocks: [
        {
          t: 'table',
          head: ['Problem', 'What happens', 'Defence'],
          rows: [
            ['Cache poisoning', 'An attacker gets a resolver to cache a forged answer (Dan Kaminsky’s 2008 attack made it practical against guessable query IDs)', 'Source-port and query-ID randomisation; DNSSEC'],
            ['DDoS on DNS providers', 'Flooding a provider takes many sites offline. In October 2016 a Mirai-botnet attack on Dyn disrupted major sites', 'Multiple DNS providers; anycast; rate limiting'],
            ['Hijacking and typo-squatting', 'Stolen registrar accounts or lookalike names redirect users', 'Registry locks, strong authentication, monitoring'],
            ['Tunnelling and exfiltration', 'Data hidden inside DNS queries', 'Monitoring query patterns and lengths'],
            ['Misconfiguration', 'Expired domains, wrong records, missing NS delegations cause outages', 'Monitoring, change control, automation'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'DNSSEC', title: 'Signed answers', body: 'Records are signed in a chain from the root. A validating resolver can detect forgeries. It authenticates but does not encrypt.' },
            { tag: 'DoH and DoT', title: 'Encrypted queries', body: 'DNS over HTTPS and over TLS hide queries from on-path observers, at the cost of moving trust to the resolver you choose.' },
            { tag: 'Privacy', title: 'Names reveal habits', body: 'Your resolver sees the sites you visit. Choose one you trust, and understand its logging.' },
            { tag: 'Operations', title: 'Redundancy', body: 'Use at least two name servers in different networks, and consider two providers for critical domains.' },
          ],
        },
      ],
    },
    {
      id: 'http',
      title: 'HTTP and TLS',
      blocks: [
        {
          t: 'table',
          head: ['Version', 'Key idea', 'Transport'],
          rows: [
            ['HTTP/1.1 (1997)', 'Text-based requests; persistent connections; one request at a time per connection (browsers open several)', 'TCP'],
            ['HTTP/2 (2015)', 'Binary framing, many streams multiplexed on one connection, header compression', 'TCP (with TLS)'],
            ['HTTP/3 (2022)', 'The same ideas over QUIC, removing TCP head-of-line blocking', 'QUIC over UDP'],
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'ClientHello', body: 'The client proposes protocol versions and ciphers, and sends a key share (TLS 1.3).' },
            { title: 'ServerHello and certificate', body: 'The server chooses parameters, sends its own key share and its certificate, signed by a certificate authority.' },
            { title: 'Verify and finish', body: 'The client verifies the certificate chain and name; both sides derive keys and confirm. TLS 1.3 completes in one round trip.' },
            { title: 'Encrypted application data', body: 'HTTP then flows encrypted and authenticated.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'See the cryptography shelf', text: 'The cybersecurity shelf explains TLS and certificates in more detail, including what each handshake step protects against.' },
      ],
    },
    {
      id: 'others',
      title: 'Other core services',
      blocks: [
        {
          t: 'table',
          head: ['Protocol', 'Job', 'Notes'],
          rows: [
            ['DHCP', 'Gives out addresses and settings', 'UDP ports 67 and 68'],
            ['NTP', 'Synchronises clocks', 'UDP 123; accuracy of milliseconds on the Internet, microseconds with PTP on a LAN; vital for logs and certificates'],
            ['SMTP, IMAP, POP3', 'Send and receive email', 'Authenticate senders with SPF, DKIM and DMARC records in DNS'],
            ['SSH', 'Encrypted remote login', 'TCP 22'],
            ['MQTT and CoAP', 'IoT messaging', 'See the IoT protocol guide'],
            ['ICMP', 'Errors and diagnostics', 'Ping, traceroute, path MTU messages; do not block it all'],
          ],
        },
        { t: 'links', items: [{ path: 'cybersecurity/cryptography/tls-and-pki', note: 'TLS and the public-key infrastructure' }, { path: 'networking/transport-and-services/wifi-and-cellular', note: 'Next: wireless' }, { path: 'networking/iot-connectivity/iot-application-protocols', note: 'IoT application protocols' }] },
      ],
    },
  ],
  sources: [
    'Mockapetris, P. (1987). Domain Names: Concepts and Facilities and Implementation. RFC 1034 and RFC 1035.',
    'Arends, R., et al. (2005). DNS Security Introduction and Requirements. RFC 4033.',
    'Rescorla, E. (2018). The Transport Layer Security (TLS) Protocol Version 1.3. RFC 8446.',
    'Belshe, M., Peon, R., and Thomson, M. (2015). Hypertext Transfer Protocol Version 2 (HTTP/2). RFC 7540.',
    'Kaminsky, D. (2008). Black Ops 2008: It’s the end of the cache as we know it (Black Hat talk).',
    'Dyn analysis of the October 2016 DDoS attack (published post-incident summaries).',
  ],
  related: ['networking/transport-and-services/tcp-udp-and-quic', 'cybersecurity/cryptography/tls-and-pki', 'cloud/scale-and-maths/caching-and-load-balancing'],
}

export default guide
