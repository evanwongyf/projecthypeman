import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Security is the practice of keeping a system useful to the people who should use it, and useless to the people who should not. It is part engineering, part mathematics, part psychology and part law. This shelf explains how attacks work in concept so that you can defend against them, covers the mathematics behind passwords, cryptography and risk, and describes how red teams, blue teams and penetration tests operate, always on systems you are authorised to test.',
  nutshell: [
    'Security is about **risk**, not perfection: reduce the likelihood and impact of the harms that matter most, at a cost that makes sense.',
    'Defence is **layered**: no single control is trusted to work, so failures are contained by the next layer.',
    'Attackers need one way in; defenders must cover all of them. This **asymmetry** is why detection and response matter as much as prevention.',
    'Only test systems you **own or have written permission** to test. Unauthorised access is a crime in most countries, including under Singapore’s Computer Misuse Act, whatever the intent.',
  ],
  sections: [
    {
      id: 'ethics',
      title: 'Before anything else: authorisation',
      lead: 'The line between security work and crime is permission.',
      blocks: [
        { t: 'callout', tone: 'warn', title: 'Read this first', text: 'Everything here is for education and defence. Accessing, scanning or disrupting systems you do not own or have explicit written permission to test is illegal in most jurisdictions. In Singapore the **Computer Misuse Act 1993** criminalises unauthorised access, modification and obstruction of computer systems; in the UK the Computer Misuse Act 1990, in the US the Computer Fraud and Abuse Act. "I was only looking" and "I told them afterwards" are not defences.' },
        {
          t: 'dodont',
          do: [
            'Practise on your own machines, virtual labs, and platforms built for it (capture-the-flag events, intentionally vulnerable training apps).',
            'Get **written authorisation** with a defined scope, time window and contact before any test of someone else’s system.',
            'Report vulnerabilities you find by accident through the organisation’s disclosure policy or a national CERT (in Singapore, SingCERT).',
          ],
          dont: [
            'Scan or probe systems "just to see".',
            'Test beyond the agreed scope, even if it seems harmless.',
            'Keep or share data you reach during a test.',
          ],
        },
      ],
    },
    {
      id: 'mindset',
      title: 'The mindset',
      lead: 'How security people think.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Assume breach', tag: 'defender', body: 'Design as if an attacker is already inside: limit what any one account or machine can reach, log what happens, be ready to respond.' },
            { title: 'Think in trust boundaries', tag: 'modeller', body: 'Where does data cross from something you control to something you do not? Most vulnerabilities live at those crossings.' },
            { title: 'Follow the cheapest path', tag: 'attacker', body: 'Attackers are rational economists. They take the easiest route: stolen passwords, unpatched software, a person who can be persuaded. Strengthen the weakest link first.' },
            { title: 'Count, do not guess', tag: 'maths', body: 'A claim such as "this password is strong" or "this alert is reliable" can be checked by arithmetic. The maths shelf shows how.' },
          ],
        },
        { t: 'sec-viz', viz: 'password-entropy' },
      ],
    },
    {
      id: 'route',
      title: 'A route through the shelf',
      lead: 'From risk to red teaming.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Foundations', body: 'Start with [the CIA triad and risk](@cybersecurity/foundations/cia-and-risk), then [threat modelling](@cybersecurity/foundations/threat-modelling) and [design principles](@cybersecurity/foundations/security-principles).' },
            { title: 'Cryptography and authentication', body: '[Crypto foundations](@cybersecurity/cryptography/crypto-foundations), [the maths of public-key cryptography](@cybersecurity/cryptography/public-key-maths), [passwords](@cybersecurity/cryptography/passwords-and-authentication), [TLS](@cybersecurity/cryptography/tls-and-pki).' },
            { title: 'Where systems fail', body: '[Networks](@cybersecurity/attack-surface/network-security), [web applications](@cybersecurity/attack-surface/web-security), [people and malware](@cybersecurity/attack-surface/social-engineering).' },
            { title: 'Red, blue and pentesting', body: '[Red/blue/purple](@cybersecurity/red-and-blue/red-vs-blue), [the theory of pentesting](@cybersecurity/red-and-blue/pentest-theory), [scoring vulnerabilities](@cybersecurity/red-and-blue/vulnerability-management), [detection](@cybersecurity/red-and-blue/detection-and-logging), [incident response](@cybersecurity/red-and-blue/incident-response).' },
            { title: 'The maths and economics', body: '[The mathematics of security](@cybersecurity/maths-and-reasoning/security-maths) and [attacker economics](@cybersecurity/maths-and-reasoning/attacker-economics).' },
          ],
        },
        { t: 'p', text: 'Cloud security continues on the [cloud computing shelf](@cloud/start-here), which covers the shared-responsibility model, identity and access management, and cloud red and blue teaming.' },
      ],
    },
  ],
  sources: [
    'Anderson, R. (2020). *Security Engineering* (3rd ed.). Wiley. Free online at cl.cam.ac.uk/~rja14/book.html.',
    'Schneier, B. (2015). *Secrets and Lies*. Wiley.',
    'NIST (2018). *Framework for Improving Critical Infrastructure Cybersecurity*, v1.1.',
    'Cyber Security Agency of Singapore. *Singapore Cybersecurity Strategy* and SingCERT resources (csa.gov.sg).',
  ],
  related: ['cybersecurity/foundations/cia-and-risk', 'cybersecurity/red-and-blue/pentest-theory', 'cloud/start-here'],
}

export default guide
