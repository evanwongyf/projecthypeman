import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Network forensics reconstructs what crossed a network: who talked to whom, when, how much, and sometimes what was said. Unlike a disk, a network does not remember anything by default, evidence exists only if something was capturing or logging at the time. Most investigations therefore depend on the monitoring an organisation already had in place.',
  nutshell: [
    '**Full packet capture (pcap)** records everything but is huge; **flow records** (NetFlow, IPFIX) keep only who-talked-to-whom summaries; **logs** (DNS, proxy, firewall) sit in between.',
    'Tools like **Wireshark**, **tshark** and **Zeek** turn raw packets into readable conversations and structured logs.',
    '**DNS logs** are often the most valuable single source: nearly every connection starts with a name lookup.',
    '**TLS** encryption hides content, but metadata, IP addresses, timing, volume, often the server name, still tells a story.',
    'Capturing other people’s traffic is regulated by law; only monitor networks you are authorised to.',
  ],
  sections: [
    {
      id: 'sources',
      title: 'Sources of network evidence',
      blocks: [
        {
          t: 'table',
          head: ['Source', 'Contains', 'Typical retention', 'Trade-off'],
          rows: [
            ['Full packet capture', 'Every byte of every packet', 'Hours to days', 'Complete, but storage-heavy and mostly encrypted'],
            ['Flow records (NetFlow/IPFIX)', 'Source, destination, ports, bytes, start/end time', 'Weeks to months', 'Cheap to keep; no content'],
            ['DNS logs', 'Which names were looked up, by whom, and the answers', 'Weeks to months', 'Reveals intent before connections'],
            ['Proxy / web gateway logs', 'URLs or domains requested, user, bytes', 'Months', 'Only for traffic through the proxy'],
            ['Firewall / IDS alerts', 'Allowed and blocked connections, signature hits', 'Varies', 'Alerts depend on rules being right'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Clocks matter', text: 'Correlating a firewall log, a DNS log and a laptop’s disk timeline only works if you know each device’s clock offset and time zone. Note them during collection.' },
      ],
    },
    {
      id: 'reading',
      title: 'Reading captures and logs',
      blocks: [
        {
          t: 'code',
          lang: 'bash',
          title: 'Reading a saved capture (training pcap)',
          code: `# summary of conversations between hosts
tshark -r sample.pcap -q -z conv,ip

# just the DNS queries, with time and asking host
tshark -r sample.pcap -Y "dns.flags.response == 0" -T fields -e frame.time -e ip.src -e dns.qry.name

# Wireshark display filters worth knowing
#   http.request            HTTP requests in clear text
#   tls.handshake.type == 1 TLS ClientHello (shows the server name, if not encrypted)
#   tcp.flags.syn == 1 && tcp.flags.ack == 0   connection attempts`,
          caption: 'Reading existing captures for analysis; public practice pcaps are listed on the tools and labs page.',
        },
        {
          t: 'code',
          lang: 'text',
          title: 'A Zeek conn.log entry (simplified, documentation addresses)',
          code: `ts=1705526400.12  uid=CwX3k1  orig=192.0.2.15:51544  resp=203.0.113.80:443
proto=tcp  service=ssl  duration=301.2  orig_bytes=1840  resp_bytes=2210  conn_state=SF`,
          caption: 'A five-minute TLS session with very little data in either direction. On its own it means nothing; repeated every five minutes, day and night, it looks like beaconing.',
        },
        { t: 'terms', items: [
          { term: 'Beaconing', def: 'Regular, often small, connections from an infected host to a command-and-control server. Detected by looking for unusual regularity in timing.' },
          { term: 'DNS tunnelling', def: 'Data hidden inside DNS queries and answers; shows as long, random-looking subdomains and high query volumes to one domain.' },
          { term: 'Exfiltration', def: 'Data leaving a network without authorisation; seen as unusual outbound volume, destinations or times.' },
          { term: 'Lateral movement', def: 'An intruder moving between internal machines, visible in internal flows and authentication logs.' },
        ] },
      ],
    },
    {
      id: 'tls',
      title: 'What encryption hides, and what it does not',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Hidden by TLS', body: 'Page content, URLs and paths, form data, cookies, and in TLS 1.3 the server’s certificate.', tag: 'confidential' },
            { title: 'Still visible', body: 'IP addresses and ports, timing, packet sizes and volumes, and usually the server name in the ClientHello (SNI).', tag: 'metadata' },
            { title: 'Client fingerprints', body: 'Hashes of how a client sets up TLS (JA3, JA4) can distinguish a browser from a particular malware family.', tag: 'fingerprint' },
            { title: 'Closing gaps', body: 'Encrypted DNS (DoH, DoT) and Encrypted Client Hello (ECH) hide more, pushing investigators towards endpoint evidence.', tag: 'trend' },
          ],
        },
        { t: 'p', text: 'Organisations sometimes decrypt traffic at a corporate proxy that employees’ devices are configured to trust, under a published policy. That is a deliberate, lawful design choice, not something an investigator can do to arbitrary traffic.' },
        { t: 'callout', tone: 'warn', title: 'Legal limits', text: 'Intercepting communications without authority is an offence in most countries, in Singapore, unauthorised interception of computer services is covered by the Computer Misuse Act. Capture only on networks you own or are authorised to monitor, or use public training captures. See [law and ethics](@forensics/digital-investigation/law-ethics-and-reporting).' },
      ],
    },
  ],
  sources: [
    'Davidoff, S., & Ham, J. (2012). *Network Forensics: Tracking Hackers through Cyberspace*. Prentice Hall.',
    'Sanders, C. (2017). *Practical Packet Analysis* (3rd ed.). No Starch Press.',
    'Zeek Project. *Zeek documentation: Log files*.',
    'Rescorla, E. (2018). *The Transport Layer Security (TLS) Protocol Version 1.3* (RFC 8446).',
  ],
  related: ['forensics/digital-investigation/incident-response-and-malware', 'forensics/digital-evidence/memory-forensics', 'forensics/digital-investigation/tools-and-labs'],
}

export default guide
