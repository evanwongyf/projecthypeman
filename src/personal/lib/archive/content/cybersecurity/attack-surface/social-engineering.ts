import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The most reliable way into many organisations is through a person, not a machine, because people are trusting, busy and helpful, and those are the properties a workplace needs. Social engineering is the manipulation of people into giving access or information; malware is software that does harm once it is running. This guide covers why phishing works (psychology and numbers), the common pretexts, malware families and how they spread, and defences that work better than blaming users.',
  nutshell: [
    'Attackers exploit **urgency, authority, fear, curiosity and reciprocity** to hurry people past the check they would normally make.',
    'Phishing succeeds on **numbers**: if a campaign reaches 10,000 people and 3% click, 300 are exposed; one is enough.',
    'Malware families: **virus/worm** (self-spreading), **trojan** (disguised), **ransomware** (encrypts for payment), **spyware/stealer**, **botnet agent**, **rootkit**.',
    'Best defences are **systemic**: MFA with phishing-resistant keys, email authentication, least privilege, backups, and a culture where reporting a mistake is safe and fast.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why phishing works',
      lead: 'Psychology and arithmetic.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Authority', def: 'A message that appears to be from a boss, bank or regulator gets compliance (Milgram; Cialdini).' },
            { term: 'Urgency and scarcity', def: '"Your account will be closed in 24 hours" removes time to think; the cost of delay seems higher than the risk.' },
            { term: 'Fear and curiosity', def: 'A parcel you did not order, a "security alert", a leaked-salaries spreadsheet.' },
            { term: 'Reciprocity and rapport', def: 'A friendly exchange before the ask; help given first makes help owed.' },
            { term: 'Habit', def: 'People click through routine prompts without reading; an attack that looks like a routine prompt is invisible.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`P(\text{at least one compromised})=1-(1-c)^{n}`,
          caption: 'The chance that a campaign to n recipients, each independently compromised with probability c, succeeds at least once.',
          where: [{ sym: 'c', def: 'the per-person chance of falling for it' }, { sym: 'n', def: 'the number of recipients' }],
          syntax: [{ sym: '(1-c)^n', say: 'the chance that every recipient resists. Effect: it shrinks exponentially in n, so the chance that at least one person is fooled approaches certainty. Why: independent chances multiply.' }],
          worked: {
            title: 'A small company, a low click rate',
            steps: ['A message to n = 200 staff; each has only c = 2% chance of entering credentials.', '\\(1-0.98^{200}=1-0.0176=98.2\\%\\).', 'Even with training that halves c to 1%: \\(1-0.99^{200}=86.6\\%\\).'],
            answer: 'Training lowers the odds but cannot make an organisation immune, so controls must assume some phish will succeed: MFA that phishing cannot relay, least privilege and fast detection.',
          },
        },
        { t: 'callout', tone: 'note', title: 'Singapore context', text: 'Scams are a major category of crime in Singapore, with Police reporting hundreds of millions of dollars lost each year to phishing and impersonation scams. Banks have added cooling-off periods and kill switches; ScamShield and the "ACT" advice (Add security features, Check for scam signs, Tell authorities and family) are the national guidance.' },
      ],
    },
    {
      id: 'forms',
      title: 'Common forms',
      lead: 'Know the shapes.',
      blocks: [
        {
          t: 'table',
          head: ['Form', 'How it works', 'Tell-tale'],
          rows: [
            ['Phishing', 'Mass email or message with a link or attachment', 'Generic greeting, mismatched link domain, pressure'],
            ['Spear-phishing', 'Tailored to a person using public details (LinkedIn, press releases)', 'Mentions real colleagues or projects; unusual request'],
            ['Business email compromise', 'Impersonating an executive or supplier to redirect a payment', 'New bank details; "keep this confidential"; urgent wire'],
            ['Vishing / smishing', 'Voice calls or SMS, often impersonating banks or government agencies', 'Caller asks for OTP or to move money to a "safe account"'],
            ['Pretexting', 'A made-up scenario ("IT helpdesk", "auditor") to extract information or access', 'Asks you to bypass a process'],
            ['Quishing', 'A malicious QR code in a poster, email or parking meter', 'QR leads to a login page or an app install'],
            ['Deepfake voice / video', 'AI-generated impersonation of a known person', 'Request outside normal channels; verify by calling back on a known number'],
          ],
        },
        {
          t: 'checklist',
          items: [
            'Pause on urgency: a real deadline survives a two-minute check.',
            'Verify out of band: call the person or bank using a number you already have, not one from the message.',
            'Never share an OTP or approve an unexpected push prompt; no legitimate party asks for it.',
            'Type the address or use your own bookmark instead of clicking.',
            'Report suspicious messages immediately; a fast report limits damage for everyone.',
          ],
        },
      ],
    },
    {
      id: 'malware',
      title: 'Malware families and spread',
      lead: 'Software that does harm.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Worm', tag: 'self-spreading', body: 'Spreads across networks without user action by exploiting a flaw. Example: WannaCry (2017) spread through an SMB vulnerability in unpatched Windows machines.' },
            { title: 'Trojan', tag: 'disguised', body: 'Looks legitimate (a cracked game, a fake invoice) but carries a payload. Needs the user to run it.' },
            { title: 'Ransomware', tag: 'extortion', body: 'Encrypts files and demands payment, increasingly also stealing data first ("double extortion"). Defences: offline, tested backups; patching; segmentation; no admin rights for daily work.' },
            { title: 'Stealer / spyware', tag: 'credentials', body: 'Harvests saved passwords, session cookies and keys. Stolen session cookies can bypass MFA, so token binding and short sessions matter.' },
            { title: 'Botnet agent', tag: 'resource', body: 'A compromised device (often an unpatched router or camera) controlled for DDoS or spam. Mirai (2016) enlisted hundreds of thousands of IoT devices using default passwords.' },
            { title: 'Rootkit / bootkit', tag: 'hiding', body: 'Hides deep in the operating system or firmware to survive and conceal other malware. Defences: secure boot, integrity measurement.' },
          ],
        },
        { t: 'p', text: 'Typical infection chain: a lure (email, malicious ad, poisoned download) → execution (user opens a file, a vulnerability runs code) → persistence (a startup entry) → command and control (calling home) → action (steal, encrypt, move laterally). Each step is a place to detect or block; defenders map these stages with frameworks such as the Cyber Kill Chain and MITRE ATT&CK (next shelf).' },
      ],
    },
  ],
  sources: [
    'Cialdini, R. B. (2021). *Influence, New and Expanded*. Harper Business.',
    'Hadnagy, C. (2018). *Social Engineering: The Science of Human Hacking* (2nd ed.). Wiley.',
    'Verizon (annual). *Data Breach Investigations Report* (verizon.com/dbir).',
    'Singapore Police Force and Cyber Security Agency of Singapore: annual scam and cybercrime reports; ScamShield (scamshield.gov.sg).',
  ],
  related: ['cybersecurity/cryptography/passwords-and-authentication', 'cybersecurity/red-and-blue/incident-response', 'cybersecurity/red-and-blue/red-vs-blue', 'cybersecurity/maths-and-reasoning/attacker-economics'],
}

export default guide
