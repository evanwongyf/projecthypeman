import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Security discussions need a vocabulary. The CIA triad names what is protected; assets, threats, vulnerabilities and controls name the parts of a risk; and a risk can be scored on a matrix or priced as an expected loss. This guide defines the terms precisely, shows how a risk matrix and annualised loss expectancy are calculated, and explains where each misleads.',
  nutshell: [
    '**Confidentiality** (only the right people read it), **Integrity** (it is not altered without notice), **Availability** (it works when needed). Many attacks target one of these three.',
    '**Risk = likelihood × impact.** A **threat** exploits a **vulnerability** in an **asset**; a **control** reduces likelihood or impact.',
    '**ALE = SLE × ARO** puts a price on a risk and shows when a control is worth buying.',
    'Risk matrices are quick and easy to misuse: they compress very different risks into the same colour.',
  ],
  sections: [
    {
      id: 'cia',
      title: 'The CIA triad',
      lead: 'What are we protecting?',
      blocks: [
        {
          t: 'table',
          head: ['Property', 'Means', 'Attack example', 'Typical control'],
          rows: [
            ['Confidentiality', 'Only authorised parties can read', 'Stolen customer database', 'Encryption, access control'],
            ['Integrity', 'Data and systems change only as intended', 'Altered bank transfer; tampered software update', 'Hashes, signatures, change control'],
            ['Availability', 'Service works when needed', 'Ransomware; denial of service', 'Redundancy, backups, rate limits'],
          ],
          caption: 'Extensions you will meet: authenticity (it is who it claims to be), non-repudiation (the sender cannot deny sending), and accountability (actions trace to a person).',
        },
        { t: 'p', text: 'The three pull against one another. Locking a system down raises confidentiality and lowers availability; making it easy to use does the reverse. A hospital prioritises availability and integrity of patient records; a whistleblower platform prioritises confidentiality. Deciding the priority first is what makes controls choosable.' },
      ],
    },
    {
      id: 'terms',
      title: 'The vocabulary of risk',
      lead: 'Five words that mean different things.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Asset', def: 'Anything of value: data, a server, a reputation, a person’s time.' },
            { term: 'Threat', def: 'A potential cause of harm: a criminal group, a careless employee, a flood. It has a source and an intent (or none).' },
            { term: 'Vulnerability', def: 'A weakness a threat can use: unpatched software, a default password, a missing check.' },
            { term: 'Exploit', def: 'The method of using a vulnerability.' },
            { term: 'Control (countermeasure)', def: 'A measure that reduces risk: preventive (a firewall), detective (logging), corrective (backups), deterrent (a legal warning).' },
            { term: 'Risk', def: 'The potential for loss: a combination of how likely a threat is to exploit a vulnerability and how much it would cost.' },
            { term: 'Residual risk', def: 'What remains after controls. It is never zero; the decision is whether to accept, transfer (insure), avoid or reduce it.' },
          ],
        },
      ],
    },
    {
      id: 'score',
      title: 'Scoring and pricing risk',
      lead: 'A matrix and an expected loss.',
      blocks: [
        { t: 'sec-viz', viz: 'risk-matrix' },
        {
          t: 'math',
          tex: String.raw`\text{ALE}=\text{SLE}\times\text{ARO},\qquad \text{SLE}=\text{AV}\times\text{EF},\qquad \text{Net benefit}=\text{ALE}_{\text{before}}-\text{ALE}_{\text{after}}-\text{Cost}_{\text{control}}`,
          caption: 'Annualised loss expectancy, its two inputs, and the value of a control.',
          where: [{ sym: '\\text{AV}', def: 'asset value (what it is worth)' }, { sym: '\\text{EF}', def: 'exposure factor: the fraction of the asset lost in one incident' }, { sym: '\\text{ARO}', def: 'annualised rate of occurrence: expected incidents per year' }],
          syntax: [
            { sym: '\\text{SLE}=\\text{AV}\\times\\text{EF}', say: 'single loss expectancy: the cost of one incident. Effect: a partial loss (EF = 0.3) costs less than a total one. Why: most incidents do not destroy the whole asset.' },
            { sym: '\\text{SLE}\\times\\text{ARO}', say: 'cost per incident times incidents per year. Effect: a rare disaster and a frequent nuisance can have the same ALE. Why: it is an expected value, the average over years.' },
            { sym: '\\text{ALE}_{\\text{before}}-\\text{ALE}_{\\text{after}}', say: 'the annual loss a control prevents. Effect: if it is less than the yearly cost of the control, the control does not pay for itself in expected terms.' },
          ],
          worked: {
            title: 'Is two-factor authentication worth it?',
            steps: ['Customer database worth $2,000,000; a breach exposes 30% (EF = 0.3): SLE = $600,000.', 'Credential theft breaches occur about once every 5 years (ARO = 0.2): ALE = $120,000.', 'MFA is estimated to cut the rate to once in 25 years (ARO = 0.04): ALE = $24,000.', 'Benefit $96,000 a year; MFA costs $20,000 a year. Net: +$76,000.'],
            answer: 'The control pays for itself about 4.8 times over, on these assumptions. The estimates are guesses, so the conclusion should survive a pessimistic version of each input.',
          },
        },
        { t: 'callout', tone: 'warn', title: 'Where scoring misleads', text: 'Likelihood is hard to estimate for rare events, impact is hard for reputation, and a "5×5" matrix colours a 1-in-1000 catastrophe the same as a 1-in-5 minor loss. Use ALE for money you can count and keep the matrix for ranking and conversation.' },
      ],
    },
  ],
  sources: [
    'NIST (2012). *SP 800-30 Rev. 1: Guide for Conducting Risk Assessments*.',
    'ISO/IEC 27005:2022. *Information security risk management*.',
    'Hubbard, D. & Seiersen, R. (2016). *How to Measure Anything in Cybersecurity Risk*. Wiley.',
    'Cox, L. A. (2008). What’s wrong with risk matrices? *Risk Analysis*, 28(2).',
  ],
  related: ['cybersecurity/foundations/threat-modelling', 'cybersecurity/maths-and-reasoning/security-maths', 'cybersecurity/red-and-blue/vulnerability-management'],
}

export default guide
