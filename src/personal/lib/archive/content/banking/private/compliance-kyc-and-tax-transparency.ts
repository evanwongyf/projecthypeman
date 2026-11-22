import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Private banks hold large sums for people whose money may come from anywhere, which makes them a favourite route for money laundering, corruption proceeds and tax evasion. Compliance is therefore a core part of the business, not an add-on. This guide explains know-your-customer and customer due diligence, the extra scrutiny for politically exposed persons, the difference between source of funds and source of wealth, suspicious transaction reporting, the global tax-transparency regimes (CRS and FATCA), and the arithmetic of why monitoring systems produce so many false alerts. Rules cited are general descriptions of Singapore practice; check current MAS notices and guidelines for exact requirements.',
  nutshell: [
    '**KYC / CDD**: verify **who the customer is**, who **owns and controls** it (beneficial owners), **why** the account exists and what activity to expect, then **monitor** it.',
    '**Enhanced due diligence (EDD)** applies to higher-risk clients: **politically exposed persons (PEPs)**, high-risk countries, complex structures and large cash-like flows.',
    '**Source of funds** is where this particular money came from; **source of wealth** is how the client’s total wealth was built. Private banks must be satisfied on both for high-risk clients.',
    '**Suspicious transaction reports (STRs)** go to the Suspicious Transaction Reporting Office; **tipping off** the customer is a crime.',
    '**CRS** and **FATCA** make banks report foreign account holders to tax authorities; Singapore treats **serious tax crimes** as money-laundering predicate offences.',
  ],
  sections: [
    {
      id: 'kyc',
      title: 'Know your customer and due diligence',
      lead: 'Identify, understand, monitor.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Identify and verify', body: 'Collect identity documents and verify them independently; for companies, trusts and foundations, identify the legal entity and the people behind it.' },
            { title: 'Find the beneficial owners', body: 'Look through layers of companies and trusts to the natural persons who ultimately own or control the assets, including settlors, trustees, protectors and beneficiaries of a trust.' },
            { title: 'Understand the purpose', body: 'Why is this account being opened, in this country, with this bank? What activity, volumes and counterparties are expected?' },
            { title: 'Assess the risk', body: 'Score the client on country, product, delivery channel (face-to-face or remote), business and structure; set the level of due diligence and the review frequency.' },
            { title: 'Monitor and refresh', body: 'Compare actual activity with expectations, screen against sanctions and watch lists, and refresh files periodically and when something changes.' },
          ],
        },
        {
          t: 'table',
          head: ['Level', 'When', 'What changes'],
          rows: [
            ['Simplified', 'Low-risk customers and products, as the rules permit', 'Reduced verification and monitoring'],
            ['Standard (CDD)', 'Most customers', 'Full identification, beneficial ownership, purpose, ongoing monitoring'],
            ['Enhanced (EDD)', 'PEPs, high-risk countries, complex or opaque structures, large unusual flows', 'Senior-management approval, corroborated source of wealth and funds, closer and more frequent monitoring'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Why private banks face more of this', text: 'A private bank manages large, complex, often cross-border relationships, sometimes through trusts and companies with nominee directors. These features are legitimate in most cases but also match the pattern of laundering and corruption, so regulators expect deeper checks and senior sign-off.' },
      ],
    },
    {
      id: 'pep',
      title: 'PEPs, source of wealth and source of funds',
      lead: 'Corruption risk and how banks test explanations.',
      blocks: [
        { t: 'p', text: 'A **politically exposed person** holds or has held a prominent public function, such as a head of state, minister, senior judge, military leader or senior executive of a state-owned company. Family members and close associates are included. Being a PEP is not a crime, but the position carries corruption risk, so banks apply EDD: senior-management approval, established source of wealth and funds, and enhanced monitoring.' },
        {
          t: 'table',
          head: ['', 'Source of funds', 'Source of wealth'],
          rows: [
            ['Question', 'Where did the money in this deposit or transfer come from?', 'How did the client accumulate their overall wealth?'],
            ['Example answer', 'Sale of a property, an inheritance, dividend from a named company', 'Thirty years running a manufacturing business, then its sale; inherited family assets'],
            ['Evidence', 'Sale contract, bank statements of the sending account, probate documents', 'Audited accounts, company registry records, tax returns, independent media and registry checks'],
            ['Red flags', 'Round-number payments from unrelated third parties, funds routed through several jurisdictions without reason', 'Wealth far above the known income of a public official, vague explanations, inconsistent stories'],
          ],
        },
        { t: 'dodont', do: ['Corroborate stated wealth with independent sources, not only the client’s own documents', 'Escalate to compliance and senior management before onboarding a high-risk client', 'Write down the reasoning for accepting or declining, so it can be reviewed later'], dont: ['Treat a large balance or a referral from a respected intermediary as proof of legitimacy', 'Let the revenue target of the relationship manager override a compliance concern', 'Warn the customer that a report has been or may be made (tipping off)'] },
        { t: 'p', text: 'Enforcement shows the stakes. After the 1MDB scandal, the Monetary Authority of Singapore withdrew the licence of BSI Bank’s Singapore merchant bank status and later that of Falcon Private Bank, and imposed financial penalties and prohibitions on other banks and individuals, citing weak controls over source of wealth and red flags that were not followed up. Private banks in Singapore tightened their processes accordingly.' },
      ],
    },
    {
      id: 'report',
      title: 'Monitoring, STRs and tipping off',
      lead: 'From alert to report.',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'Alert', sub: 'Monitoring flags a transaction or pattern that deviates from expectations or matches a scenario' },
            { label: 'Investigate', sub: 'An analyst reviews the customer file, explanations and related accounts' },
            { label: 'Suspicious?', sub: 'If there are reasonable grounds to suspect, escalate to the money-laundering reporting officer' },
            { label: 'File STR', sub: 'Report to the Suspicious Transaction Reporting Office; handle the account as directed' },
            { label: 'Exit or restrict', sub: 'Decide whether to continue the relationship; do not tip off the customer' },
          ],
          loop: 'Feedback from investigations tunes the monitoring rules',
        },
        { t: 'p', text: 'Banks in Singapore are expected to file a suspicious transaction report when they know or have reasonable grounds to suspect that property is linked to criminal conduct. Disclosing to the customer that a report has been or will be made (tipping off) is an offence, so front-line staff are trained on what to say when they need to delay a transaction.' },
        {
          t: 'math',
          tex: String.raw`P(\text{crime}\mid\text{alert})=\frac{s\,\pi}{s\,\pi+f\,(1-\pi)}`,
          caption: 'Why most alerts are false even when the system is good.',
          where: [{ sym: '\\pi', def: 'the base rate of genuinely suspicious activity among monitored customers' }, { sym: 's', def: 'sensitivity: the fraction of suspicious activity that raises an alert' }, { sym: 'f', def: 'false-positive rate: the fraction of innocent activity that raises an alert' }],
          syntax: [{ sym: 'f\\,(1-\\pi)', say: 'the alerts raised by innocent customers. Effect: because innocent customers vastly outnumber criminals, even a small f produces many alerts. Why: a small share of a huge group can exceed a large share of a tiny group.' }],
          worked: {
            title: '1 in 1,000 is suspicious',
            steps: ['Base rate \\(\\pi=0.001\\), sensitivity \\(s=0.90\\), false-positive rate \\(f=0.02\\).', 'True alerts per 100,000 customers: \\(100{,}000\\times0.001\\times0.90=90\\). False alerts: \\(99{,}900\\times0.02=1{,}998\\).', 'Share of alerts that are genuine: \\(90/(90+1{,}998)=4.3\\%\\).'],
            answer: 'About 96% of alerts are false, which is why compliance teams are large, why tuning and risk-based segmentation matter, and why the same base-rate logic appears in security operations (see the detection guide in cybersecurity).',
          },
        },
      ],
    },
    {
      id: 'tax',
      title: 'Tax transparency: CRS and FATCA',
      lead: 'Hiding assets offshore has become hard.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'CRS (Common Reporting Standard)', tag: 'OECD, over 100 jurisdictions', body: 'Financial institutions identify account holders who are tax resident elsewhere and report balances and income to their home tax authority, which exchanges the information automatically with the partner country each year. Singapore participates, with information flowing through IRAS.' },
            { title: 'FATCA', tag: 'United States', body: 'Foreign financial institutions report accounts of US persons to the US tax authority, either directly or through their government, under the Foreign Account Tax Compliance Act. Non-compliance risks a 30% withholding tax on US-source payments.' },
            { title: 'Beneficial ownership registers', tag: 'transparency of structures', body: 'Companies must keep registers of controllers, and registries of beneficial ownership exist in many countries, which makes anonymous shell companies less useful.' },
            { title: 'Serious tax crimes as ML predicate', tag: 'Singapore, from 2013', body: 'Wilful tax evasion in serious cases is a predicate offence for money laundering, so a bank may need to file an STR on funds believed to be the proceeds of foreign tax evasion.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Avoidance versus evasion', text: 'Using allowances, treaties, legitimate structures and the timing of income to reduce tax within the law is planning. Hiding income or assets, using false documents or lying to the tax authority is evasion, a crime. Private banks serve the first and must refuse the second; the line is crossed by concealment and deception, not by paying less.' },
      ],
    },
  ],
  sources: [
    'Monetary Authority of Singapore. Notice 626 on Prevention of Money Laundering and Countering the Financing of Terrorism: Banks, and accompanying Guidelines (mas.gov.sg).',
    'Financial Action Task Force. The FATF Recommendations (2012, as updated), including Recommendations 10, 12 and 20 (fatf-gafi.org).',
    'Corruption, Drug Trafficking and Other Serious Crimes (Confiscation of Benefits) Act 1992 (CDSA), Singapore Statutes Online.',
    'OECD. Standard for Automatic Exchange of Financial Account Information: Common Reporting Standard; IRAS pages on CRS and FATCA (iras.gov.sg).',
    'MAS (2016, 2017). Enforcement actions against BSI Bank and Falcon Private Bank in connection with 1MDB; MAS media releases.',
    'Singapore Police Force, Suspicious Transaction Reporting Office (STRO).',
  ],
  related: ['banking/private/private-banking-overview', 'banking/private/dimensions-of-wealth', 'banking/theory/regulation-and-basel', 'accounting/taxation/international-and-planning'],
}

export default guide
