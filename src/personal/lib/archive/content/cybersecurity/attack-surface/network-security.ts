import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Networks move data between machines that do not trust each other, so most of network security is about deciding who may talk to whom, noticing when something unusual happens, and containing the damage when something goes wrong. This guide gives a one-page model of TCP/IP, the classes of network attack at a conceptual level, how firewalls and segmentation work, and the arithmetic of intrusion detection.',
  nutshell: [
    'Data travels in **layers**: link (Ethernet, Wi-Fi), network (IP), transport (TCP, UDP), application (HTTP, DNS, SSH). A control works at one layer and is blind to the others.',
    'Classic network threats: **eavesdropping**, **spoofing**, **man-in-the-middle**, **denial of service**, and **scanning** to discover what is exposed. Encryption and authentication answer the first three.',
    'A **firewall** applies rules on addresses, ports and (for next-generation ones) applications; **default deny** is the right stance.',
    '**Segmentation** limits how far an intruder can move: a compromised printer should not reach the payroll database.',
  ],
  sections: [
    {
      id: 'model',
      title: 'TCP/IP in one page',
      lead: 'Just enough to reason about attacks.',
      blocks: [
        {
          t: 'levels',
          caption: 'The practical four-layer model, lowest first.',
          items: [
            { name: 'Link', body: 'Moves frames between devices on one local network (Ethernet, Wi-Fi). Addresses: MAC. Weakness: anyone on the same segment may see or impersonate traffic unless it is encrypted.', verbs: ['switch', 'Wi-Fi'] },
            { name: 'Internet (IP)', body: 'Routes packets between networks. Addresses: IPv4/IPv6. Weakness: source addresses can be forged, so an IP address is not an identity.', verbs: ['router'] },
            { name: 'Transport (TCP, UDP)', body: 'TCP gives reliable ordered streams using a three-way handshake (SYN, SYN-ACK, ACK); UDP is connectionless. Ports identify services (443 HTTPS, 22 SSH).', verbs: ['port'] },
            { name: 'Application', body: 'HTTP, DNS, SMTP, SSH, TLS. Most vulnerabilities, and most useful defences (authentication, encryption), live here.', verbs: ['protocol'] },
          ],
        },
        { t: 'p', text: 'DNS is worth special mention: it translates names to addresses and was designed without authentication, so answers can be forged unless **DNSSEC** or encrypted DNS (DoH, DoT) is used. Many attacks begin with a lookup that returns the wrong address.' },
      ],
    },
    {
      id: 'threats',
      title: 'Classes of network attack, conceptually',
      lead: 'What goes wrong and what stops it.',
      blocks: [
        {
          t: 'table',
          head: ['Threat', 'Idea', 'Primary defence'],
          rows: [
            ['Eavesdropping (sniffing)', 'Reading traffic passing a shared or compromised point', 'Encryption in transit: TLS, SSH, WPA3, VPN'],
            ['Spoofing', 'Forging an address or identity (IP, ARP, DNS, email sender)', 'Authentication, DNSSEC, SPF/DKIM/DMARC for email, ingress filtering'],
            ['Man-in-the-middle', 'Sitting between two parties, relaying and possibly altering messages', 'Mutually authenticated encryption; certificate validation'],
            ['Denial of service', 'Exhausting a resource (bandwidth, connections, CPU) so real users cannot use it; distributed attacks (DDoS) use many sources', 'Capacity, rate limiting, upstream scrubbing / CDN, SYN cookies'],
            ['Reconnaissance (scanning)', 'Mapping hosts, open ports and software versions to find the weakest exposed service', 'Expose fewer services; patch; monitor for scans; scan yourself first'],
            ['Lateral movement', 'After a first foothold, moving to more valuable machines', 'Segmentation, least privilege, unique local admin passwords, monitoring east-west traffic'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Scan only what you are authorised to scan', text: 'Port scanning your own systems is routine hygiene; scanning someone else’s can be treated as an offence or as the start of one. Use your own lab network or a written scope.' },
      ],
    },
    {
      id: 'defences',
      title: 'Firewalls, segmentation and detection',
      lead: 'Narrow, divide and watch.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Packet-filter / stateful firewall', tag: 'layers 3 to 4', body: 'Allows or denies by source, destination, port and connection state. Rule order matters; end with an explicit deny.' },
            { title: 'Web application firewall', tag: 'layer 7', body: 'Inspects HTTP for known attack patterns. Useful as a safety net and for virtual patching; it is not a replacement for secure code.' },
            { title: 'Segmentation / zoning', tag: 'blast radius', body: 'Split the network into zones (users, servers, databases, management, guest Wi-Fi, IoT) with controlled paths between them. A flat network means one breach reaches everything.' },
            { title: 'IDS / IPS', tag: 'detection', body: 'Intrusion detection systems alert on signatures or anomalies; prevention systems also block. Both face the base-rate problem below.' },
          ],
        },
        { t: 'sec-viz', viz: 'base-rate' },
        {
          t: 'math',
          tex: String.raw`\text{PPV}=\frac{\text{TPR}\cdot \pi}{\text{TPR}\cdot\pi+\text{FPR}\cdot(1-\pi)}`,
          caption: 'The probability that an alert is a real attack (positive predictive value), by Bayes’ rule.',
          where: [{ sym: '\\pi', def: 'the prevalence: the fraction of events that are attacks' }, { sym: '\\text{TPR}', def: 'true positive rate (detection rate)' }, { sym: '\\text{FPR}', def: 'false positive rate' }],
          syntax: [
            { sym: '\\text{TPR}\\cdot\\pi', say: 'the fraction of all events that are real attacks and get flagged. Effect: the numerator is the true alerts.' },
            { sym: '\\text{FPR}\\cdot(1-\\pi)', say: 'the fraction of all events that are harmless but flagged. Effect: because harmless events are so numerous, even a tiny FPR makes this large. Why: 1−π is almost 1.' },
          ],
          worked: {
            title: 'A good detector, a bad alert queue',
            steps: ['One real attack per 100,000 events: \\(\\pi=10^{-5}\\). The detector catches 99% (TPR = 0.99) with a 0.1% false-alarm rate.', 'Numerator: \\(0.99\\times10^{-5}=9.9\\times10^{-6}\\). Denominator adds \\(0.001\\times0.99999\\approx 1.0\\times10^{-3}\\).', 'PPV = \\(9.9\\times10^{-6}/(9.9\\times10^{-6}+1.0\\times10^{-3})\\approx 0.98\\%\\).'],
            answer: 'About 99 of every 100 alerts are false, even with a 99.9% "accurate" detector. This is why alert tuning, context and triage matter so much to blue teams.',
          },
        },
      ],
    },
  ],
  sources: [
    'Kurose, J. & Ross, K. (2021). *Computer Networking: A Top-Down Approach* (8th ed.). Pearson.',
    'NIST (2009). *SP 800-41 Rev. 1: Guidelines on Firewalls and Firewall Policy*.',
    'Axelsson, S. (2000). The base-rate fallacy and the difficulty of intrusion detection. *ACM TISSEC*, 3(3).',
    'Cloudflare Learning Center (cloudflare.com/learning): DDoS, DNS and TLS explainers.',
  ],
  related: ['cybersecurity/red-and-blue/detection-and-logging', 'cybersecurity/cryptography/tls-and-pki', 'cybersecurity/attack-surface/web-security', 'cloud/fundamentals/cloud-networking'],
}

export default guide
