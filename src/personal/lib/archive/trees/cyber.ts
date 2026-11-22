import type { ArchiveNode } from '../topics'

// Cybersecurity: how systems are attacked and defended, from the arithmetic of passwords and
// public-key cryptography to threat modelling, penetration-testing theory, red and blue teams,
// and the reasoning behind risk. Defensive and educational: concepts, mathematics and method,
// not instructions for attacking systems you do not own.

export const CYBER: ArchiveNode = {
  slug: 'cybersecurity',
  title: 'Cybersecurity',
  blurb: 'How systems are attacked and defended: threat modelling, cryptography and its maths, authentication, web and network security, red team and blue team, the theory of penetration testing, and the reasoning behind risk.',
  glyph: '⛨',
  color: 'color-mix(in srgb, var(--mint) 55%, var(--sky))',
  tags: ['cybersecurity', 'cyber security', 'infosec', 'information security', 'security', 'hacking', 'ethical hacking', 'red team', 'blue team', 'pentest', 'penetration testing', 'cryptography'],
  children: [
    { slug: 'start-here', title: 'Start here', blurb: 'What security is, the mindset, and a route through the shelf from risk to red teaming.', minutes: 7, glyph: '★', tags: ['beginner', 'overview', 'roadmap', 'ethics', 'legal'] },
    {
      slug: 'foundations',
      title: 'Foundations: risk and threats',
      blurb: 'The CIA triad, how risk is defined and measured, how to model threats, and why defence is built in layers.',
      glyph: '△',
      tags: ['risk', 'threat modelling', 'cia triad', 'defence in depth'],
      children: [
        { slug: 'cia-and-risk', title: 'The CIA triad and the language of risk', blurb: 'Confidentiality, integrity, availability; assets, threats, vulnerabilities, controls; and how risk is scored and priced.', minutes: 12, tags: ['cia triad', 'risk', 'threat', 'vulnerability', 'asset', 'ale', 'risk matrix', 'controls'] },
        { slug: 'threat-modelling', title: 'Threat modelling', blurb: 'Data-flow diagrams, trust boundaries, STRIDE and attack trees: finding what can go wrong before it does.', minutes: 12, tags: ['stride', 'attack tree', 'data flow diagram', 'trust boundary', 'dread', 'pasta', 'threat model'] },
        { slug: 'security-principles', title: 'Design principles and reasoning', blurb: 'Saltzer and Schroeder, Kerckhoffs, least privilege, zero trust, and how to reason like an attacker.', minutes: 11, tags: ['least privilege', 'zero trust', 'kerckhoffs', 'saltzer schroeder', 'fail safe', 'defence in depth', 'assume breach'] },
      ],
    },
    {
      slug: 'cryptography',
      title: 'Cryptography and authentication',
      blurb: 'Hashes, ciphers, key exchange and RSA with the maths shown, passwords and their entropy, and how TLS builds trust on the web.',
      glyph: '⚿',
      tags: ['cryptography', 'encryption', 'hashing', 'passwords', 'tls'],
      children: [
        { slug: 'crypto-foundations', title: 'Cryptography foundations', blurb: 'Symmetric and public-key encryption, hashes and MACs, randomness, and Kerckhoffs’s principle, with a live avalanche demo.', minutes: 13, tags: ['aes', 'sha', 'hash', 'mac', 'symmetric', 'asymmetric', 'entropy', 'block cipher', 'stream cipher', 'frequency analysis'] },
        { slug: 'public-key-maths', title: 'The maths of public-key cryptography', blurb: 'Modular arithmetic, Diffie–Hellman and RSA worked with small numbers, and why factoring and discrete logs are hard.', minutes: 14, tags: ['rsa', 'diffie hellman', 'modular arithmetic', 'discrete logarithm', 'factoring', 'elliptic curve', 'prime'] },
        { slug: 'passwords-and-authentication', title: 'Passwords, hashing and multi-factor authentication', blurb: 'Entropy and guessing time, salting and slow hashes, credential stuffing, passkeys and MFA.', minutes: 12, tags: ['password', 'entropy', 'bcrypt', 'argon2', 'salt', 'mfa', 'totp', 'passkeys', 'credential stuffing'] },
        { slug: 'tls-and-pki', title: 'TLS and the public-key infrastructure', blurb: 'The handshake, certificates, chains of trust, and what HTTPS does and does not protect.', minutes: 11, tags: ['tls', 'https', 'certificate', 'pki', 'ca', 'x509', 'handshake', 'forward secrecy'] },
      ],
    },
    {
      slug: 'attack-surface',
      title: 'Networks, web and people',
      blurb: 'The common ways systems fail: networks and firewalls, the web application vulnerability classes, social engineering and malware.',
      glyph: '◫',
      tags: ['network security', 'web security', 'owasp', 'phishing', 'malware'],
      children: [
        { slug: 'network-security', title: 'Network security', blurb: 'TCP/IP in one page, common network attacks at a conceptual level, firewalls, segmentation and intrusion detection.', minutes: 12, tags: ['firewall', 'segmentation', 'dns', 'arp', 'ddos', 'vpn', 'ids', 'ips', 'tcp', 'port scan'] },
        { slug: 'web-security', title: 'Web application security', blurb: 'The OWASP Top 10 explained: injection, broken access control, XSS, CSRF, SSRF and how each is prevented.', minutes: 14, tags: ['owasp', 'sql injection', 'xss', 'csrf', 'ssrf', 'access control', 'session', 'input validation'] },
        { slug: 'social-engineering', title: 'Social engineering and malware', blurb: 'Why phishing works (the psychology and the numbers), pretexting, malware families and how they spread.', minutes: 11, tags: ['phishing', 'pretexting', 'cialdini', 'malware', 'ransomware', 'trojan', 'botnet', 'bec'] },
        { slug: 'iot-security', title: 'IoT and embedded device security', blurb: 'Why connected devices are easy targets: default credentials and the Mirai botnet, insecure updates, hardware attacks, secure boot, device identity, standards (ETSI EN 303 645, NIST IR 8259, Singapore’s labelling scheme) and a defender’s checklist.', minutes: 14, tags: ['iot', 'mirai', 'embedded', 'firmware', 'secure boot', 'default password', 'etsi', 'botnet', 'device security'] },
      ],
    },
    {
      slug: 'red-and-blue',
      title: 'Red team, blue team and pentesting',
      blurb: 'How attackers and defenders are organised, how penetration tests are scoped and run in theory, how vulnerabilities are scored, and how incidents are detected and handled.',
      glyph: '⚔',
      tags: ['red team', 'blue team', 'purple team', 'pentest', 'incident response', 'detection'],
      children: [
        { slug: 'red-vs-blue', title: 'Red team, blue team, purple team', blurb: 'Roles, exercises and rules of engagement; MITRE ATT&CK and the kill chain; how adversary emulation and detection engineering fit together.', minutes: 13, tags: ['red team', 'blue team', 'purple team', 'mitre attack', 'kill chain', 'adversary emulation', 'ttp', 'soc', 'tabletop'] },
        { slug: 'pentest-theory', title: 'The theory of penetration testing', blurb: 'Why test, scope and authorisation, the phases of a test, black, grey and white box, methodologies, and what a report can and cannot prove.', minutes: 15, tags: ['penetration testing', 'pentest', 'scope', 'rules of engagement', 'ptes', 'osstmm', 'nist 800-115', 'owasp wstg', 'bug bounty', 'vulnerability assessment'] },
        { slug: 'vulnerability-management', title: 'Vulnerability scoring and prioritisation', blurb: 'CVE, CWE, CVSS calculated by hand, EPSS and KEV, and how to decide what to fix first.', minutes: 11, tags: ['cvss', 'cve', 'cwe', 'epss', 'kev', 'patching', 'prioritisation', 'sla'] },
        { slug: 'detection-and-logging', title: 'Detection, logging and the base-rate problem', blurb: 'SIEM, logs and alerts, detection engineering, and the Bayesian arithmetic of why most alerts are false.', minutes: 12, tags: ['siem', 'logging', 'detection engineering', 'sigma', 'false positive', 'bayes', 'alert fatigue', 'edr'] },
        { slug: 'incident-response', title: 'Incident response', blurb: 'The NIST lifecycle, containment decisions, forensics basics, and the metrics (MTTD, MTTR) that measure a team.', minutes: 11, tags: ['incident response', 'nist 800-61', 'forensics', 'containment', 'playbook', 'mttd', 'mttr', 'postmortem'] },
      ],
    },
    {
      slug: 'maths-and-reasoning',
      title: 'Maths and reasoning',
      blurb: 'The probability, information theory and game theory under security: keyspaces, birthday bounds, expected loss, attacker economics.',
      glyph: '∑',
      tags: ['mathematics', 'probability', 'game theory', 'information theory'],
      children: [
        { slug: 'security-maths', title: 'The mathematics of security', blurb: 'Counting, entropy, the birthday bound, expected loss and Bayes’ rule: the arithmetic every claim about strength depends on.', minutes: 14, tags: ['entropy', 'birthday paradox', 'probability', 'expected value', 'bayes', 'keyspace', 'combinatorics'] },
        { slug: 'attacker-economics', title: 'Attacker economics and game theory', blurb: 'Cost-benefit for attackers, asymmetry, the defender’s dilemma, Stackelberg games and why perfect security is the wrong goal.', minutes: 11, tags: ['game theory', 'economics', 'stackelberg', 'attacker cost', 'asymmetry', 'security economics', 'incentives'] },
      ],
    },
  ],
}
