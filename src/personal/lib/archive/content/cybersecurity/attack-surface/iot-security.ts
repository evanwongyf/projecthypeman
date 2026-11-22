import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In 2016 a botnet called Mirai took over hundreds of thousands of IP cameras, video recorders and home routers, simply by trying a short list of factory-default passwords. It then used them to knock major websites offline. The lesson has not gone away: connected devices are numerous, cheap, rarely updated, often exposed to the Internet and unattended for years, which makes them ideal targets. This guide explains why IoT is hard to secure, lists the recurring weaknesses, walks through the hardware and software defences (secure boot, device identity, secure update, minimal attack surface), summarises the main standards and gives a defender’s checklist. It is written to help defend devices and systems, not to attack them.',
  nutshell: [
    'IoT devices are attractive because they are **many**, **weakly protected**, **long-lived** and **rarely monitored**. A compromised device can spy, join a **botnet**, or be a foothold into a network.',
    'The commonest flaws: **default or hardcoded passwords**, **open services (Telnet)**, **no secure update**, **unencrypted communication**, **exposed debug interfaces**, and **vulnerable third-party components**.',
    '**Mirai** (2016) used about 60 default username and password pairs to enlist devices, and launched record-sized DDoS attacks, including against Dyn’s DNS service.',
    'Strong designs use a **hardware root of trust**, **secure boot**, **unique per-device credentials**, **signed updates**, **least privilege** and **locked-down debug ports**.',
    'Standards such as **ETSI EN 303 645**, **NIST IR 8259** and national labelling schemes set baselines, and regulation is turning some into law.',
  ],
  sections: [
    {
      id: 'mirai',
      title: 'Why IoT is different: the Mirai lesson',
      blocks: [
        { t: 'p', text: 'Mirai appeared in 2016. It scanned the Internet for devices with open Telnet or SSH ports and tried a built-in list of default credentials (such as “admin/admin” and others used by particular manufacturers). Devices that answered were infected, scanned others and awaited orders. In September 2016 the botnet took the website of security journalist Brian Krebs offline with traffic at roughly 600 Gbit/s, and in October it attacked the DNS provider Dyn, disrupting access to many large sites for hours. The author later released the source code, producing many variants that remain active.' },
        {
          t: 'table',
          head: ['Feature of IoT', 'Why it raises risk'],
          rows: [
            ['Huge numbers, similar designs', 'One flaw can be exploited at scale across a product line'],
            ['Cheap, thin margins', 'Little budget for security engineering or updates'],
            ['Long life, no update plan', 'Vulnerabilities stay open for years'],
            ['No user interface', 'Owners do not notice an infected camera or do not know how to patch it'],
            ['Constrained resources', 'Hard to fit heavy cryptography or monitoring'],
            ['Physical exposure', 'Devices in public places can be opened and probed'],
            ['Flat home and office networks', 'A compromised gadget can reach other devices'],
            ['Complex supply chain', 'Components, firmware and libraries come from many vendors'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Security is not only about confidentiality', text: 'IoT attacks include denial of service (botnets), physical safety impacts (a hijacked insulin pump or car), privacy invasion (cameras and microphones) and persistence in networks. The consequences often reach beyond the device’s owner.' },
      ],
    },
    {
      id: 'weak',
      title: 'Recurring weaknesses',
      blocks: [
        {
          t: 'table',
          head: ['Weakness', 'Example', 'Fix'],
          rows: [
            ['Default or hardcoded credentials', 'The same admin password on every unit; a secret baked into firmware', 'Unique per-device credentials; force a change at first use'],
            ['Insecure network services', 'Telnet, an unauthenticated web interface, open database ports', 'Disable what is not needed; require authentication; no inbound ports'],
            ['Insecure or missing updates', 'No way to patch, or updates unsigned and fetched over plain HTTP', 'Signed updates over TLS with rollback'],
            ['Insecure data in transit and at rest', 'Readings and passwords sent in clear text; keys stored in flash', 'TLS or DTLS; encrypt storage; use a secure element'],
            ['Exposed debug interfaces', 'UART or JTAG pads that give a root shell or let firmware be read', 'Disable or lock debug ports in production'],
            ['Insecure components', 'Outdated Linux, libraries with known flaws', 'Maintain a software bill of materials (SBOM); patch dependencies'],
            ['Weak mobile and cloud interfaces', 'APIs without proper authorisation; apps with embedded keys', 'Treat the whole chain as the attack surface'],
            ['Poor privacy practices', 'Data collected without consent or protection', 'Data minimisation; clear controls; deletion'],
          ],
          caption: 'Aligned with the OWASP Internet of Things Top 10 (2018) and similar lists.',
        },
        { t: 'callout', tone: 'tip', title: 'Think about the physical attacker', text: 'Unlike a server in a data centre, an IoT device may sit in a public place. A threat model should include someone with the device in hand: they can read flash chips, attach to debug ports, glitch the power, and extract keys. If a single extracted key unlocks every device, the design has failed.' },
      ],
    },
    {
      id: 'defence',
      title: 'Building security in',
      blocks: [
        {
          t: 'flow',
          title: 'The chain of trust at boot',
          nodes: [
            { label: 'Hardware root of trust', sub: 'immutable ROM, keys in fuses or a secure element', tone: 'data' },
            { label: 'First-stage bootloader', sub: 'verified by the ROM using a public key', tone: 'process' },
            { label: 'Second stage or OS', sub: 'verified by the bootloader', tone: 'process' },
            { label: 'Application firmware', sub: 'verified by the OS or loader', tone: 'model' },
            { label: 'Measured and attested', sub: 'reports its state to the cloud', tone: 'output' },
          ],
          caption: 'Secure boot makes each stage check the signature of the next. If any check fails, the device refuses to run the code.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Identity', title: 'A unique key per device', body: 'Generate keys in a secure element or trusted platform module so that they never leave the chip. Authenticate with certificates. Revoke a single compromised device without affecting others.' },
            { tag: 'Boot', title: 'Secure boot and flash encryption', body: 'Verify firmware signatures at every boot. Encrypt flash so that reading the chip does not reveal secrets. Enable anti-rollback counters.' },
            { tag: 'Updates', title: 'Signed, atomic, recoverable', body: 'Updates must be verified before installation, resumable, and reversible. See the device management guide.' },
            { tag: 'Surface', title: 'Minimise what is exposed', body: 'Run only the services you need, with no inbound listening ports where possible (devices initiate outbound TLS connections). Remove shells, debug tools and compilers from production images.' },
            { tag: 'Privilege', title: 'Least privilege and isolation', body: 'Run components with minimal rights. Use memory protection and, where possible, memory-safe languages for exposed code (network parsers).' },
            { tag: 'Crypto', title: 'Standard algorithms, good randomness', body: 'Use established libraries and TLS 1.2 or 1.3. Weak random number generators have produced predictable keys in embedded devices. Provide a hardware random source and seed it properly.' },
          ],
        },
        {
          t: 'table',
          head: ['Debug and hardware attack', 'What it does', 'Mitigation'],
          rows: [
            ['UART console', 'A serial port that may give a boot log or a root shell', 'Disable or require authentication in production'],
            ['JTAG or SWD', 'On-chip debugging that can read memory and flash', 'Fuse-lock the interface'],
            ['Flash chip reading', 'Extracting firmware from an external memory chip', 'Encrypt flash; keep keys in the secure element'],
            ['Fault injection and glitching', 'Briefly disturbing power or clock to bypass checks', 'Hardware with glitch detection; redundant checks'],
            ['Side-channel analysis', 'Inferring keys from power use or timing', 'Constant-time crypto; hardened hardware'],
          ],
          caption: 'Described to help designers defend against them.',
        },
      ],
    },
    {
      id: 'standards',
      title: 'Standards and regulation',
      blocks: [
        {
          t: 'table',
          head: ['Standard or rule', 'Highlights'],
          rows: [
            ['ETSI EN 303 645 (consumer IoT)', 'A baseline of 13 provisions, including: no universal default passwords; a vulnerability disclosure policy; keep software updated; securely store credentials and sensitive data; communicate securely; minimise exposed attack surfaces; ensure software integrity; protect personal data; resilience to outages; examine telemetry; make it easy to delete data; make installation and maintenance easy; validate input'],
            ['NIST IR 8259 and the 8259 series', 'Foundational cybersecurity activities for IoT device manufacturers: device identification, configuration, data protection, logical access, software update, cybersecurity state awareness'],
            ['IEC 62443', 'Industrial automation and control systems security, covering products, systems and processes'],
            ['Singapore Cybersecurity Labelling Scheme (CLS)', 'A label for consumer IoT with several security levels, from meeting baseline requirements to penetration testing'],
            ['UK PSTI regime, EU Cyber Resilience Act', 'Legal requirements: no default passwords, vulnerability reporting, stated support periods, security by design'],
            ['OWASP IoT Top 10, OWASP ISVS', 'Lists of common weaknesses and verification standards for developers and testers'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Disclosure matters', text: 'Manufacturers should publish a way for researchers to report vulnerabilities and promise not to take legal action against good-faith reports. Coordinated disclosure lets flaws be fixed before they are widely known.' },
      ],
    },
    {
      id: 'checklist',
      title: 'A checklist for defenders',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Inventory: list every device, its firmware version, owner and network location.',
            'Change all default credentials; use unique ones; prefer certificates.',
            'Segment IoT onto its own network or VLAN with a firewall that allows only needed traffic.',
            'Block inbound access from the Internet; use outbound-only connections and a VPN or zero-trust gateway for remote management.',
            'Update firmware regularly, and replace devices that are no longer supported.',
            'Disable unused services, ports and radios; lock debug interfaces.',
            'Monitor: log connections, watch for unusual traffic (for example a camera scanning the network), and alert on devices that go silent.',
            'Encrypt communications; verify certificates; avoid sending secrets in clear text.',
            'For makers: threat-model early, keep an SBOM, test with penetration testing, publish a disclosure policy, and state your support period.',
          ],
        },
        { t: 'links', items: [{ path: 'networking/iot-operations/device-management-and-updates', note: 'Secure updates and device identity' }, { path: 'networking/iot-operations/industrial-iot', note: 'Industrial IoT security' }, { path: 'cybersecurity/red-and-blue/vulnerability-management', note: 'Vulnerability management' }, { path: 'cybersecurity/cryptography/tls-and-pki', note: 'TLS and certificates' }] },
      ],
    },
  ],
  sources: [
    'Antonakakis, M., et al. (2017). Understanding the Mirai botnet. 26th USENIX Security Symposium.',
    'ETSI EN 303 645 V2.1.1 (2020). Cyber Security for Consumer Internet of Things: Baseline Requirements.',
    'Fagan, M., et al. (2020). IoT Device Cybersecurity Capability Core Baseline. NIST Interagency Report 8259A.',
    'OWASP (2018). Internet of Things Top 10; OWASP Internet of Things Project.',
    'Cyber Security Agency of Singapore. Cybersecurity Labelling Scheme.',
    'Kolias, C., et al. (2017). DDoS in the IoT: Mirai and other botnets. IEEE Computer.',
  ],
  related: ['networking/iot-operations/device-management-and-updates', 'networking/iot-operations/smart-home-and-consumer-iot', 'cybersecurity/red-and-blue/vulnerability-management'],
}

export default guide
