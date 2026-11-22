import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Tapping a card or scanning a QR code moves money through a chain of parties in a second: the cardholder’s bank, the merchant’s bank, a payment network and the merchant. Each takes a small fee, and someone has to cover the cost of fraud and of the free credit the cardholder enjoys. This guide traces a card payment from tap to settlement, explains interchange and why rewards exist, shows how revolving credit-card interest works and why the minimum-payment trap is so costly (with a simulator), describes Singapore’s account-to-account payment systems (FAST, GIRO, PayNow, NETS), and covers how fraud and scams are handled, including the shared-responsibility framework.',
  nutshell: [
    'A card payment involves the **cardholder, issuer (cardholder’s bank), merchant, acquirer (merchant’s bank) and network** (Visa, Mastercard, etc.). The merchant pays a **merchant discount rate of about 1.5 to 3%**, most of which is **interchange** paid to the issuer, which funds rewards.',
    '**Credit cards** give you up to 50 days of interest-free credit only if you **pay the full statement balance** each month; otherwise interest (about **26.9% a year**, **30.5% effective** at monthly compounding) usually applies from the transaction date.',
    '**Paying the minimum** keeps the balance alive for years: a S$5,000 balance at 26.9% with a 3% minimum (floor S$50) takes about 16 years and costs over S$10,000 in interest.',
    '**Singapore payments:** **FAST** (instant transfers, 24/7), **PayNow** (send to a mobile number, NRIC or UEN), **GIRO** (scheduled debits), **NETS** (debit and e-payments).',
    '**Scams** are a major risk: authorised push payment fraud is hard to reverse. Use the bank’s limits and alerts, never share OTPs, and verify through official channels.',
  ],
  sections: [
    {
      id: 'chain',
      title: 'What happens when you tap a card',
      lead: 'The four-party model.',
      blocks: [
        {
          t: 'flow',
          title: 'A card payment of S$100',
          nodes: [
            { label: 'Cardholder taps', sub: 'card or phone wallet; the chip creates a one-time code', tone: 'human' },
            { label: 'Merchant and acquirer', sub: 'the acquirer routes the request', tone: 'process' },
            { label: 'Network (Visa, Mastercard…)', sub: 'passes the authorisation to the issuer', tone: 'process' },
            { label: 'Issuer checks and approves', sub: 'funds or credit, fraud rules; responds in about a second', tone: 'model' },
            { label: 'Settlement (1 to 2 days later)', sub: 'the issuer pays S$100 minus interchange; the acquirer pays the merchant minus its fee', tone: 'output' },
          ],
          caption: 'Authorisation is instant; money moves later. Chargebacks let the cardholder dispute a charge through the issuer.',
        },
        {
          t: 'table',
          head: ['Party', 'Role', 'Typical share of a S$100 purchase (illustrative)'],
          rows: [
            ['Merchant', 'Receives the sale price less the merchant discount', 'S$97.50 (pays 2.5%)'],
            ['Issuer (cardholder’s bank)', 'Funds the payment, takes credit and fraud risk, pays rewards', 'S$1.60 (interchange)'],
            ['Acquirer (merchant’s bank or processor)', 'Signs up the merchant, processes payments, takes fraud risk on the merchant side', 'S$0.70'],
            ['Network', 'Rules, routing and brand; clearing', 'S$0.20'],
          ],
          caption: 'Illustrative; actual fees differ by card type, merchant category and country. Premium rewards cards have higher interchange, which is why some merchants prefer debit or local schemes.',
        },
        { t: 'p', text: 'Why do cards offer rewards and miles? They are funded mainly by interchange on the merchant side, and cross-subsidised by interest and fees paid by cardholders who revolve balances. A person who pays in full every month receives the rewards and an interest-free period, and is effectively subsidised by those who carry balances. The rewards also lead merchants to raise prices for all customers, a small hidden cost.' },
      ],
    },
    {
      id: 'revolve',
      title: 'Revolving credit and the minimum-payment trap',
      lead: 'Interest from day one.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`B_{t+1}=B_t\Big(1+\frac{r}{12}\Big)-p_t,\qquad EAR=\Big(1+\frac r{12}\Big)^{12}-1,\qquad p_t=\max(m\,B_t,\ p_{\min})`,
          caption: 'A revolving balance: each month interest is added, then a payment is subtracted; a minimum payment is a percentage of the balance or a floor.',
          where: [{ sym: 'B_t', def: 'the balance at the start of month t' }, { sym: 'r', def: 'the nominal annual rate (0.269)' }, { sym: 'p_t,\\ m,\\ p_{\\min}', def: 'the payment, the minimum-payment percentage and the minimum floor' }],
          syntax: [{ sym: 'B_t(1+r/12)', say: 'interest of about 2.24% a month on the balance. Effect: a S$5,000 balance costs about S$112 a month in interest. Why: 26.9% divided by 12.' }, { sym: 'p_t=m\\,B_t', say: 'the minimum is a fraction of a shrinking balance, so it shrinks too. Effect: if m is close to the monthly interest rate, the balance barely falls. Why: each payment is just above the interest, so little goes to principal.' }, { sym: 'EAR', say: 'effective annual rate: monthly compounding of 26.9% gives about 30.5%. Why: interest is added each month and then itself attracts interest.' }],
          worked: {
            title: 'A S$5,000 balance at 26.9%',
            steps: ['Month 1 interest = 5,000 × 0.269/12 = S$112.1. A 3% minimum of S$150 pays S$37.9 of principal.', 'At a 3% minimum payment (floor S$50), the balance takes about 16 years to clear and costs about S$10,500 in interest, more than twice the original balance.', 'Paying a fixed S$300 a month clears it in about 22 months with S$1,330 of interest.'],
            answer: 'The minimum payment is designed to keep a balance alive. Paying a fixed amount well above the minimum, or moving the balance to a lower-rate instalment plan or personal loan, saves thousands.',
          },
        },
        { t: 'bank-viz', viz: 'card-interest' },
        {
          t: 'checklist',
          items: [
            'Pay the full statement balance by the due date to keep the interest-free period.',
            'If you cannot, pay as much as possible, and a fixed amount each month, not the minimum.',
            'Avoid cash advances: a cash-advance fee (often about 6%) and immediate interest apply.',
            'Set up GIRO or auto-pay for at least the minimum, to avoid late fees and credit-report marks.',
            'Compare balance-transfer or instalment plans by their effective interest rate and fees.',
            'Ask for a lower limit if you find it hard to resist spending: unsecured credit limits are also regulated.',
          ],
        },
      ],
    },
    {
      id: 'sg',
      title: 'Singapore’s payment rails',
      lead: 'Bank transfers and QR payments.',
      blocks: [
        {
          t: 'table',
          head: ['System', 'What it does', 'Notes'],
          rows: [
            ['FAST (Fast and Secure Transfers)', 'Real-time interbank transfers of Singapore dollars, 24/7, within seconds', 'Underpins PayNow; per-transaction limit up to S$200,000 depending on the bank'],
            ['PayNow', 'Send money using a mobile number, NRIC/FIN or UEN instead of an account number; also PayNow QR', 'Launched in 2017; uses FAST; set daily limits to reduce scam risk'],
            ['GIRO', 'Scheduled debits and credits for bills, salaries and loan instalments', 'Interbank GIRO takes a day or more'],
            ['NETS', 'Debit card and e-payments network, including NETS QR', 'Local scheme; used by many merchants'],
            ['Card schemes and wallets', 'Visa, Mastercard, American Express; Apple Pay, Google Pay, GrabPay and others', 'Rewards for credit cards; wallet balances may not be covered by deposit insurance'],
            ['SGQR', 'One QR code that works across different payment apps', 'Singapore’s unified QR standard'],
          ],
        },
        { t: 'p', text: 'Account-to-account systems like FAST are cheap and irrevocable: money moves at once and is hard to recall, which makes them attractive to scammers who persuade victims to pay. Cards offer chargeback rights that bank transfers lack, which is a reason to use a card for purchases from unfamiliar online merchants.' },
      ],
    },
    {
      id: 'fraud',
      title: 'Fraud, scams and protection',
      lead: 'Shared responsibility.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Unauthorised fraud', tag: 'card or account taken over', body: 'Someone else uses your card or account without permission. Banks usually refund if you report promptly and have not been negligent (for example, by sharing credentials). Report at once; use transaction alerts.' },
            { title: 'Authorised scams', tag: 'you make the payment', body: 'You are tricked into sending money (phishing, impersonation of banks, government officials or friends, fake investments, e-commerce and romance scams). These are harder to recover.' },
            { title: 'Shared Responsibility Framework', tag: 'MAS and IMDA', body: 'Since December 2024, a framework allocates duties to banks and telcos in phishing scams involving impersonation, with the loss shared if they fail to meet them, while consumers who do not follow basic protections remain responsible. See the MAS announcements for details.' },
            { title: 'Bank safeguards', tag: 'controls', body: 'Banks provide transaction limits, cooling-off periods for large changes, a "kill switch" to freeze accounts quickly, delays for new payees and SMS or app alerts. Many require the use of the bank’s secure app for authentication.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Check the sender and the URL, and use only the official app or website.', 'Set low daily transfer limits for PayNow and increase only when needed.', 'Report scams to the bank and the police quickly (the sooner, the more can be frozen).', 'Use ScamShield and sign up for the bank’s alerts.'],
          dont: ['Share OTPs, PINs or passwords with anyone, including "bank staff".', 'Click links in SMS or WhatsApp messages from unknown numbers.', 'Move money to a "safe account" on the instruction of a caller.', 'Install apps from links sent to you.'],
        },
        { t: 'sec-viz', viz: 'base-rate' },
        { t: 'p', text: 'The lab ties to the cybersecurity shelf: banks monitor millions of payments for fraud, but because genuine fraud is rare, even an accurate detector flags mostly false alarms. That is why banks sometimes block legitimate payments and ask you to confirm, and why a sensible customer expects an occasional call.' },
      ],
    },
  ],
  sources: [
    'Rochet, J.-C. & Tirole, J. (2003). Platform competition in two-sided markets. *Journal of the European Economic Association*, 1(4) (the economics of interchange).',
    'Monetary Authority of Singapore & Infocomm Media Development Authority (2024). *Shared Responsibility Framework* guidelines (mas.gov.sg).',
    'Monetary Authority of Singapore and the Association of Banks in Singapore: PayNow, FAST, GIRO and SGQR (abs.org.sg, mas.gov.sg).',
    'Money Sense (moneysense.gov.sg): credit cards and managing debt; Singapore Police Force, ScamShield (scamshield.gov.sg).',
    'Bar-Gill, O. & Warren, E. (2008). Making credit safer. *University of Pennsylvania Law Review*, 157(1).',
  ],
  related: ['banking/consumer/loans-and-flat-rates', 'banking/consumer/credit-scores-and-reports', 'cybersecurity/attack-surface/social-engineering', 'cybersecurity/red-and-blue/detection-and-logging', 'banking/consumer/deposits-and-interest'],
}

export default guide
