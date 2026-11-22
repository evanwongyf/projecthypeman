import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Owning a crypto asset means controlling a private key, a number that proves ownership. Whoever holds the key controls the coins, and there is no bank to call if it is lost or stolen. That makes custody the central practical problem: keep the key yourself (self-custody) and you carry the risk of loss and theft; leave it with an exchange and you carry the risk that the exchange fails, as Mt. Gox, FTX and Celsius did. Regulation tries to reduce the second risk and, in Singapore, the Monetary Authority of Singapore (MAS) licenses providers of digital payment token services under the Payment Services Act, restricts marketing to the public and limits retail leverage. This guide sets out the custody options, practical security habits, the failures that taught the lessons, how Singapore’s rules work (in general terms, since they change) and how to recognise the common scams.',
  nutshell: [
    '**Not your keys, not your coins**: an exchange holds your coins as a claim; if it fails you may be an unsecured creditor.',
    'Custody options: **exchange**, **software wallet**, **hardware wallet**, **multisig** and **regulated custodian**; each trades convenience against control.',
    'Protect the **seed phrase** (12 or 24 words): store it **offline**, never type it into a website or share it, and keep a **backup** in a separate place.',
    'The failures: **Mt. Gox (2014)**, **Terra (2022)**, **Celsius**, **FTX (2022)**: customer funds were lost, lent or misused.',
    'Singapore: **MAS licensing** of digital payment token service providers under the **Payment Services Act**, consumer-protection measures (2022–23) and a **stablecoin framework** (2023): check the current rules.',
  ],
  sections: [
    {
      id: 'custody',
      title: 'Custody options',
      lead: 'Convenience against control.',
      blocks: [
        {
          t: 'table',
          head: ['Option', 'Who holds the key', 'Advantages', 'Risks'],
          rows: [
            ['Exchange account', 'The exchange', 'Easy; recovery by password; trading and fiat', 'Exchange failure, hacking, withdrawal freezes, misuse of funds'],
            ['Software wallet (phone or browser)', 'You, on an internet-connected device', 'Convenient; direct control; access to DeFi', 'Malware, phishing, device theft'],
            ['Hardware wallet', 'You, on a dedicated offline device', 'Keys never leave the device; strong protection against malware', 'Loss of device or seed phrase; supply-chain tampering; user error'],
            ['Multisignature wallet', 'Several keys, a threshold required', 'No single point of failure; suited to teams and large sums', 'More complex; need to manage several keys'],
            ['Regulated custodian', 'A licensed institution', 'Insurance, audits, institutional controls', 'Fees; counterparty risk; limited access to features'],
          ],
        },
        {
          t: 'checklist',
          items: [
            'Write the seed phrase on paper or metal, never in a photo, cloud note or email',
            'Keep at least two copies in separate, secure places',
            'Never enter the seed phrase on a website or give it to "support"',
            'Buy hardware wallets directly from the maker and verify the packaging and firmware',
            'Use a separate wallet for experiments and small amounts, and a cold wallet for savings',
            'Test a recovery with a small amount before storing a large sum',
            'Enable two-factor authentication with an authenticator app or a hardware key (not SMS)',
            'Write down instructions for your family on how to access the assets if you die or are incapacitated',
          ],
        },
      ],
    },
    {
      id: 'failures',
      title: 'The failures that taught the lessons',
      lead: 'Four collapses.',
      blocks: [
        {
          t: 'levels',
          caption: 'Major failures, in order.',
          items: [
            { name: 'Mt. Gox (2014)', body: 'Once the largest Bitcoin exchange, it halted withdrawals; around 850,000 bitcoins belonging to customers and the exchange were missing. Creditors were repaid, partly in bitcoin, a decade later.' },
            { name: 'Terra / Luna (May 2022)', body: 'The algorithmic stablecoin UST lost its dollar peg, and the sister token Luna fell to almost zero, destroying tens of billions of dollars of value in days.' },
            { name: 'Celsius, Voyager, Three Arrows Capital (mid-2022)', body: 'A chain of lenders and funds failed as prices fell; customers of lending platforms found their deposits frozen and treated as unsecured claims.' },
            { name: 'FTX (November 2022)', body: 'One of the largest exchanges collapsed within days after it emerged that customer funds had been lent to an affiliated trading firm; its founder was later convicted of fraud.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'What "proof of reserves" does and does not show', text: 'After FTX, exchanges began publishing proofs of reserves. A proof shows that assets exist at a time; it does not show liabilities, whether the assets are pledged elsewhere or whether the exchange will honour withdrawals under stress. It is a step, not a guarantee.' },
      ],
    },
    {
      id: 'singapore',
      title: 'Regulation in Singapore',
      lead: 'The framework in outline.',
      blocks: [
        {
          t: 'table',
          head: ['Measure', 'In outline', 'Why it matters'],
          rows: [
            ['Payment Services Act (2019, in force 2020)', 'Businesses that deal in, or facilitate the exchange of, digital payment tokens must be licensed or exempt; they must meet anti-money-laundering and counter-terrorism-financing requirements', 'Licensed providers are supervised; unlicensed ones are not'],
            ['Consumer-protection measures (2022–23)', 'Restrictions on marketing crypto services to the public; retail customers may not be offered credit or leverage to buy tokens; segregation of customer assets; a risk-awareness assessment', 'Lowers some risks, but does not make the assets safe'],
            ['Stablecoin framework (2023)', 'Requirements for single-currency stablecoins pegged to the Singapore dollar or a G10 currency: reserve backing, redemption at par and disclosure', 'A regulated label gives a stronger basis, but only for stablecoins that qualify'],
            ['Extension to providers abroad (2025)', 'Singapore-based firms serving only customers outside Singapore also fall under licensing rules from mid-2025', 'Several firms moved out or were licensed'],
            ['Investor Alert List', 'MAS lists unregulated entities that may be targeting Singapore customers', 'A first check before dealing with a platform'],
          ],
          caption: 'Descriptions are summaries and the rules are updated; check MAS for the current position. Regulation reduces some risks; it does not guarantee against losses from price falls.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Tax in Singapore', tag: 'in general terms', body: 'There is no capital-gains tax, and digital payment tokens are treated as exempt from GST when used as a means of payment or held as investments; but gains from a trade or business, mining, and income received in crypto can be taxable. Check IRAS guidance and keep records.' },
            { title: 'Scams to recognise', tag: 'common patterns', body: 'Guaranteed returns, "pig-butchering" romance and investment scams, fake exchanges and apps, phishing links, impersonation of support staff, giveaway scams, rug pulls and "recovery" services that charge a fee to recover lost funds.' },
            { title: 'Reporting', tag: 'if it happens', body: 'Report scams to the police and to the platform; speed matters, because some funds can be frozen.' },
            { title: 'Estate planning', tag: 'overlooked', body: 'If only you know the keys, the assets can be lost at death: prepare secure instructions for heirs.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Monetary Authority of Singapore: Payment Services Act 2019, digital payment token regulation, consumer protection measures and stablecoin framework (mas.gov.sg).',
    'Inland Revenue Authority of Singapore: GST and income tax treatment of digital payment tokens (iras.gov.sg).',
    'Antonopoulos, A. M. (2017). *Mastering Bitcoin* (2nd ed.). O’Reilly (keys, wallets and security).',
    'US Department of Justice and court records on FTX and its founder (justice.gov); Mt. Gox bankruptcy administrator announcements.',
  ],
  related: ['finance/crypto-investing/crypto-for-investors', 'finance/crypto-investing/defi-and-amm-economics', 'banking/private/compliance-kyc-and-tax-transparency'],
}

export default guide
