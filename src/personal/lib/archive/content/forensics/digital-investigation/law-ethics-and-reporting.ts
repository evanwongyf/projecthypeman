import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Technical skill is only half of digital forensics. The work has to be lawful from start to finish, the evidence has to be admissible, and the findings have to be reported so that a judge or a manager who is not technical can understand both what was found and how sure the examiner is. This page gives a general overview, it is not legal advice, and the law varies between countries and changes over time.',
  nutshell: [
    'Digital evidence must be **relevant**, **authentic** (it is what it claims to be) and **reliable**; hashing, chain of custody and documented methods are how authenticity is shown.',
    'In **Singapore**, the **Computer Misuse Act 1993** creates offences such as unauthorised access, unauthorised modification and unauthorised interception; the **Evidence Act 1893** sets out how electronic records are admitted.',
    'Comparable laws include the UK **Computer Misuse Act 1990**, the US **Computer Fraud and Abuse Act**, and the Council of Europe’s **Budapest Convention** (2001) on cybercrime.',
    'An examiner’s overriding duty is to the **court or the truth**, not to whoever is paying, including reporting findings that help the other side.',
    'A good report states the questions asked, what was examined, methods and tools, findings, **alternative explanations** and **limitations**.',
  ],
  sections: [
    {
      id: 'admissibility',
      title: 'Admissibility of digital evidence',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Relevance', def: 'The evidence makes a fact in issue more or less likely.' },
            { term: 'Authenticity', def: 'The item is what it is claimed to be, this phone, this unaltered image. Shown by chain of custody, hashes and testimony.' },
            { term: 'Reliability', def: 'The tools and methods are sound and were applied properly, tool validation, accredited procedures, peer review of findings.' },
            { term: 'Hearsay', def: 'Records made by people (a chat message) may raise hearsay questions in some systems; records generated automatically by a machine (a log entry) are often treated differently.' },
            { term: 'Lawful acquisition', def: 'Evidence must be obtained under proper authority (warrant, statutory power, consent or a lawful workplace policy). Unlawfully obtained evidence may be excluded, depending on the jurisdiction.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Singapore’s Evidence Act', text: 'Amendments in 2012 updated how electronic records are treated, including presumptions about the proper functioning of computers and the authenticity of records produced in the ordinary course of business (see in particular section 116A). Powers for police to access computers during investigations are set out in the Criminal Procedure Code 2010.' },
      ],
    },
    {
      id: 'laws',
      title: 'Key cybercrime laws',
      blocks: [
        {
          t: 'table',
          head: ['Law', 'Jurisdiction', 'Main features'],
          rows: [
            ['Computer Misuse Act 1993', 'Singapore', 'Offences of unauthorised access, access with intent to commit further offences, unauthorised modification, unauthorised use or interception of a computer service, obstruction of use, and disclosure of access codes; 2017 amendments added offences for dealing in personal information obtained through these offences and for obtaining or supplying tools for them, and widened extraterritorial reach'],
            ['Cybersecurity Act 2018', 'Singapore', 'Duties for owners of critical information infrastructure, incident reporting, the Cyber Security Agency’s powers'],
            ['Personal Data Protection Act 2012', 'Singapore', 'Governs collection, use and disclosure of personal data, relevant to how investigators handle it'],
            ['Computer Misuse Act 1990', 'UK', 'Unauthorised access, access with intent, unauthorised acts impairing computers'],
            ['Computer Fraud and Abuse Act (18 U.S.C. § 1030)', 'US', 'Federal computer crime statute; *Van Buren v. United States* (2021) narrowed what “exceeds authorized access” means'],
            ['Budapest Convention on Cybercrime (2001)', 'International treaty', 'Harmonises offences and procedural powers and supports cross-border cooperation'],
          ],
          caption: 'A simplified summary. Read the current text of the law, and consult a qualified lawyer, for any real situation.',
        },
        { t: 'callout', tone: 'warn', title: 'Good intentions are not authorisation', text: 'Accessing a system without permission to “test” its security, or poking at a suspected scammer’s server, can itself be an offence. Ethical security work happens under written authorisation (a scope agreement, a bug bounty policy) or on systems you own.' },
      ],
    },
    {
      id: 'ethics',
      title: 'Examiner ethics',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Stay within the authorised scope, a warrant or engagement letter defines what you may examine.',
            'Report all relevant findings, including ones that weaken the case of whoever instructed you.',
            'Handle unrelated personal data (photos, health information, private messages) with discretion and only as needed.',
            'Identify and set aside legally privileged material, such as communications with a lawyer, under the agreed procedure.',
            'Only use tools and methods you understand and can explain under cross-examination.',
            'Declare conflicts of interest and the limits of your expertise.',
          ],
        },
        { t: 'p', text: 'In England and Wales, expert witnesses’ duties are set out in the Criminal Procedure Rules, and the **Forensic Science Regulator Act 2021** made the Regulator’s Code of Practice statutory, digital forensics labs included. Many labs worldwide are accredited to **ISO/IEC 17025**.' },
      ],
    },
    {
      id: 'reporting',
      title: 'Writing the report',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Summary', body: 'The questions asked and the answers, in plain language, in a page or less.' },
            { title: 'Exhibits examined', body: 'Item numbers, descriptions, hash values at receipt and seal details.' },
            { title: 'Methods and tools', body: 'What was done, with which validated tool versions, enough for another examiner to repeat it.' },
            { title: 'Findings', body: 'Observations separated from interpretation; screenshots or exported records as appendices.' },
            { title: 'Interpretation and alternatives', body: 'What the findings support, under each side’s proposition; who else could have used the device; whether the activity could be automatic (malware, syncing, prefetching).' },
            { title: 'Limitations', body: 'Encrypted areas not accessed, time-zone assumptions, tools’ known issues, data not available.' },
          ],
        },
        { t: 'example', title: 'Observation versus interpretation', lines: [
          { label: 'Observation', text: 'The file holiday.jpg exists in the user’s Downloads folder with a creation time of 2024-01-17 21:20 UTC.' },
          { label: 'Over-reach', text: '“The suspect downloaded holiday.jpg at 21:20.”' },
          { label: 'Careful', text: '“The file was created in that folder at 21:20 UTC under the account ‘alex’. Browser history shows a download of a file with this name at the same time. Who was using the account at that time cannot be determined from the device alone.”' },
        ] },
      ],
    },
  ],
  sources: [
    'Singapore Statutes Online: *Computer Misuse Act 1993*; *Evidence Act 1893*; *Criminal Procedure Code 2010*; *Cybersecurity Act 2018*.',
    'Council of Europe (2001). *Convention on Cybercrime* (ETS No. 185).',
    'Mason, S., & Seng, D. (Eds.) (2021). *Electronic Evidence and Electronic Signatures* (5th ed.). University of London Press.',
    'Forensic Science Regulator (2023). *Forensic Science Regulator Code of Practice* (statutory).',
  ],
  related: ['forensics/digital-evidence/foundations-and-acquisition', 'forensics/reliability/cognitive-bias', 'forensics/digital-investigation/tools-and-labs'],
}

export default guide
