import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Financial statements are only useful if outsiders can trust them. Three layers of protection exist: accounting standards, which say how to measure and present; auditors, who give an independent opinion on whether the statements are fairly stated; and governance, in which directors, audit committees and internal controls take responsibility. When any of these layers fails, the result can be an Enron, a Wirecard or a Luckin Coffee. This guide explains how standards are set in Singapore, what an audit is and is not, what a true and fair view means, the role and duties of directors, and what internal controls and fraud look like.',
  nutshell: [
    'Singapore-incorporated companies apply **SFRS(I)**, which is aligned with **IFRS**; the **Accounting Standards Council (ASC)** sets standards and **ACRA** regulates companies and public accountants.',
    'An **audit** is an independent examination that gives **reasonable (not absolute) assurance** that the statements are free of **material misstatement**.',
    'The opinion is **unmodified**, **qualified**, **adverse** or a **disclaimer**; a **true and fair view** means the statements follow the framework and present the position fairly.',
    '**Directors** are responsible for the statements; auditors are responsible for the opinion; **internal controls** and the **audit committee** support both.',
    'Fraud needs **pressure, opportunity and rationalisation** (the fraud triangle); controls aim to remove opportunity.',
  ],
  sections: [
    {
      id: 'standards',
      title: 'Standards and regulators in Singapore',
      lead: 'Who sets the rules, who enforces them.',
      blocks: [
        {
          t: 'table',
          head: ['Body', 'Role'],
          rows: [
            ['Accounting Standards Council (ASC)', 'Prescribes Singapore Financial Reporting Standards (SFRS(I)), which are identical to IFRS for most purposes'],
            ['ACRA', 'Registrar of companies and regulator of public accountants and audit quality; requires annual returns and financial statements'],
            ['Singapore Exchange (SGX)', 'Listing rules, continuing disclosure and a code of corporate governance for listed companies'],
            ['Monetary Authority of Singapore', 'Prudential reporting for banks and insurers'],
            ['Institute of Singapore Chartered Accountants (ISCA)', 'Professional body; ethics and standards of practice for members'],
            ['Code of Corporate Governance', 'Principles for boards, audit committees and risk management in listed companies, applied on a comply-or-explain basis'],
          ],
        },
        { t: 'p', text: 'Smaller companies may qualify for lighter requirements: small private companies meeting size tests may be exempt from audit, while all companies must keep proper accounting records and file annual returns. Check ACRA for current thresholds and for the SFRS for Small Entities.' },
      ],
    },
    {
      id: 'audit',
      title: 'What an audit is, and is not',
      lead: 'Reasonable assurance from an independent person.',
      blocks: [
        {
          t: 'levels',
          caption: 'The audit opinion, from the cleanest to the most severe.',
          items: [
            { name: 'Unmodified (clean)', body: 'The statements give a true and fair view in accordance with the framework.' },
            { name: 'Qualified', body: 'Except for a specific matter, the statements are fairly stated; the issue is material but not pervasive.' },
            { name: 'Adverse', body: 'The statements are materially and pervasively misstated.' },
            { name: 'Disclaimer', body: 'The auditor could not gather enough evidence to form an opinion.' },
          ],
        },
        {
          t: 'math',
          plain: 'An auditor wants the chance of giving a clean opinion on wrong accounts to be small, say 5%. Three things can stand in the way: the item may be prone to error to begin with, the company\'s controls may fail to catch the error, and the auditor\'s own tests may miss it. The auditor can only control the third, so the more risk there is in the first two, the more testing the auditor must do.',
          tex: String.raw`\text{Audit risk}=\text{Inherent risk}\times\text{Control risk}\times\text{Detection risk}`,
          caption: 'The audit-risk model: the auditor sets how much testing to do so that overall risk of a wrong opinion is acceptably low.',
          where: [{ sym: '\\text{Inherent risk}', def: 'the susceptibility of an item to misstatement before controls' }, { sym: '\\text{Control risk}', def: 'the chance that internal controls fail to prevent or detect it' }, { sym: '\\text{Detection risk}', def: 'the chance that audit procedures miss it' }],
          syntax: [{ sym: '\\times', say: 'The three risks multiply because a wrong opinion needs all three to fail together: the error must exist, controls must miss it, and the audit tests must miss it too. Solving for the one the auditor controls: detection risk \\(=0.05\\div(0.8\\times0.5)=12.5\\%\\). If controls improve so that control risk falls to 20%, the allowed detection risk rises to \\(0.05\\div(0.8\\times0.2)=31\\%\\), so less testing is needed. Higher inherent or control risk forces detection risk down, which means more audit work.' }],
          worked: {
            title: 'Setting the testing level',
            steps: ['Target audit risk 5%. Inherent risk of revenue 80%; control risk 50%.', 'Detection risk allowed = 0.05/(0.8 × 0.5) = 12.5%.', 'If controls are strong (control risk 20%), detection risk allowed = 0.05/(0.8 × 0.2) = 31%.'],
            answer: 'Better controls let the auditor do less substantive testing; weaker controls require more. The numbers are judgemental, but the logic explains why audit effort concentrates on risky areas.',
          },
        },
        {
          t: 'dodont',
          do: ['Understand that auditors sample and test, and use materiality', 'Read the key audit matters and the going-concern paragraph in the report', 'Ask who the auditor is and whether non-audit fees compromise independence'],
          dont: ['Treat an audit as a guarantee of no fraud or a certificate of financial health', 'Assume a clean opinion says anything about future performance', 'Forget that management prepares the accounts; the auditor opines on them'],
        },
      ],
    },
    {
      id: 'gov',
      title: 'Directors, controls and fraud',
      lead: 'Responsibility inside the company.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Directors’ duties', tag: 'Companies Act', body: 'Act honestly and with reasonable diligence in the best interests of the company; keep proper accounting records; approve financial statements that give a true and fair view. Breach can bring civil and criminal liability.' },
            { title: 'Audit committee', tag: 'independent oversight', body: 'Listed companies have a committee of mostly independent directors that oversees financial reporting, internal control, internal audit and the external auditor.' },
            { title: 'Internal controls', tag: 'prevention and detection', body: 'Segregation of duties, authorisation limits, reconciliations, access controls and exception reports reduce errors and theft.' },
            { title: 'Whistleblowing', tag: 'speaking up', body: 'Listed companies are expected to provide channels for staff to raise concerns in confidence; many frauds are first found by tips.' },
          ],
        },
        {
          t: 'cycle',
          items: [
            { name: 'Pressure', body: 'Targets, debts, personal financial strain.' },
            { name: 'Opportunity', body: 'Weak controls, unchecked authority.' },
            { name: 'Rationalisation', body: '"I will pay it back", "everyone does it".' },
            { name: 'Fraud', body: 'Misstatement or misappropriation, which creates new pressure to hide it.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Famous failures', text: 'Enron (2001) used off-balance-sheet entities and aggressive revenue recognition; Wirecard (2020) reported cash balances that did not exist; Luckin Coffee (2020) fabricated sales. In each case governance, audit and regulation failed in different ways, which is why reforms have focused on auditor independence, whistleblower protection and stronger audit oversight.' },
      ],
    },
  ],
  sources: [
    'Accounting Standards Council Singapore (asc.gov.sg); Accounting and Corporate Regulatory Authority (acra.gov.sg).',
    'Companies Act 1967 (Singapore), Singapore Statutes Online (sso.agc.gov.sg).',
    'Monetary Authority of Singapore. Code of Corporate Governance 2018 (mas.gov.sg).',
    'International Auditing and Assurance Standards Board. ISA 200, ISA 240, ISA 700 (iaasb.org).',
    'Cressey, D. R. (1953). *Other People’s Money*. Free Press (the fraud triangle).',
  ],
  related: ['accounting/financial-accounting/financial-statements', 'accounting/financial-accounting/revenue-and-cash-flow', 'cybersecurity/start-here'],
}

export default guide
