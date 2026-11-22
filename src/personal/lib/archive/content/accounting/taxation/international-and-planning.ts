import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When income crosses a border, two countries may each claim to tax it: the one where the person or company is resident and the one where the income is earned. Tax treaties, foreign tax credits and rules on transfer pricing exist to prevent double taxation and to stop firms from shifting profit to low-tax places. The last decade brought the OECD’s base erosion and profit shifting (BEPS) project and, from 2024, a global minimum tax. Underneath is a distinction that matters ethically and legally: tax planning, which uses the rules as intended, versus avoidance, which exploits them in ways that defeat their purpose, versus evasion, which breaks the law. This guide sets out residence and source, treaties and credits with numbers, transfer pricing, BEPS and Pillar Two, and the line between planning, avoidance and evasion.',
  nutshell: [
    '**Residence-based** taxation taxes worldwide income of residents; **source-based** taxation taxes income arising in the country. Overlap creates **double taxation**.',
    '**Double tax agreements (DTAs)** allocate taxing rights and cap withholding rates; the **foreign tax credit** gives credit for tax paid abroad, limited to domestic tax on that income.',
    '**Transfer pricing** requires prices between related companies to be **arm’s length**, as if between independent parties.',
    '**BEPS** and **Pillar Two** aim to stop profit shifting: a **15% global minimum tax** on large multinational groups (revenue of at least €750 million).',
    '**Planning** (within the rules) differs from **avoidance** (abusive; GAAR can counteract) and **evasion** (illegal concealment, with heavy penalties).',
  ],
  sections: [
    {
      id: 'double',
      title: 'Residence, source, treaties and credits',
      lead: 'Avoiding the double bite.',
      blocks: [
        {
          t: 'math',
          plain: 'When income is taxed in two countries, a foreign tax credit lets you subtract the tax paid abroad from your home tax, so you are not taxed twice. But the credit is capped at the home tax on that income, so a country never ends up giving back money because another country\'s tax is higher.',
          tex: String.raw`\text{Credit}=\min\!\big(T_{\text{foreign}},\ T_{\text{home on that income}}\big),\qquad \text{Home tax payable}=T_{\text{home}}-\text{Credit}`,
          caption: 'The foreign tax credit limits relief to the home tax attributable to the foreign income.',
          where: [{ sym: 'T_{\\text{foreign}}', def: 'tax paid abroad on the income' }, { sym: 'T_{\\text{home}}', def: 'home-country tax that would apply to the income' }],
          syntax: [{ sym: '\\min(\\cdot,\\cdot)', say: '\\(\\min(a,b)\\) picks the smaller of the two numbers. With foreign tax 10 and home tax 17, the credit is \\(\\min(10,17)=10\\); with foreign tax 25 and home tax 17, it is \\(\\min(25,17)=17\\). The credit rises with foreign tax only until it reaches the home tax, then stays flat. That is why the total burden ends up as the higher of the two countries\' rates.' }, { sym: '\\text{Home tax payable}=T_{\\text{home}}-\\text{Credit}', say: 'Home tax payable is the home tax minus the credit. Case 1: \\(17-10=\\text{S\\$}7\\) left to pay at home (total 17 including the 10 abroad). Case 2: \\(17-17=0\\) (total 25). A larger credit lowers what you owe at home, but never below zero.' }],
          worked: {
            title: 'S$100 of foreign-source profit and a 17% home rate',
            steps: ['Foreign tax 10%: foreign tax S$10; home tax 17; credit = min(10, 17) = 10; home tax payable = S$7. Total 17.', 'Foreign tax 25%: foreign tax S$25; credit = min(25, 17) = 17; home tax payable = 0; total S$25 (S$8 excess is lost or carried forward).', 'No treaty and no credit: S$10 + S$17 = S$27, double taxation.'],
            answer: 'With a credit system, the total burden is the higher of the two countries’ rates. Treaties further reduce withholding taxes at source, which makes the credit smaller and the system smoother.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Permanent establishment', tag: 'taxing threshold', body: 'A foreign firm is taxed in a country only if it has a taxable presence there (a branch, office or dependent agent); treaties define the thresholds and digital business models challenge them.' },
            { title: 'Treaty network', tag: 'Singapore', body: 'Singapore has comprehensive tax agreements with more than 90 jurisdictions (check the current list), which reduce or eliminate withholding taxes on dividends, interest and royalties and allocate taxing rights.' },
            { title: 'Tax residence of companies', tag: 'rule', body: 'In Singapore, a company is resident if the control and management of its business is exercised in Singapore, usually where the board meets and makes decisions.' },
            { title: 'Exchange of information', tag: 'transparency', body: 'Treaties and CRS let tax authorities exchange information on residents’ foreign accounts and income; see the banking compliance guide.' },
          ],
        },
      ],
    },
    {
      id: 'tp',
      title: 'Transfer pricing, BEPS and the minimum tax',
      lead: 'Profit follows the paper trail.',
      blocks: [
        {
          t: 'example',
          title: 'Shifting profit through prices',
          lines: [
            { label: 'Setup', text: 'Group company A (in a 17% country) makes a product for S$100 and sells it to the market for S$160. Instead it sells it to related company B (in a 0% country) for S$110, and B sells to the market at S$160.' },
            { label: 'Profit location', text: 'A reports S$10; B reports S$50, taxed at 0%. Tax falls from 17% × 60 = S$10.20 to 17% × 10 = S$1.70.' },
            { label: 'Arm’s-length answer', text: 'If an independent distributor would have earned only S$15 for its functions and risks, A’s price should be S$145 and A’s profit S$45; the tax authority adjusts the S$35 back into A’s taxable income.' },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Analyse functions, assets and risks', body: 'Who performs the key activities, owns the intangibles and bears the risks?' },
            { title: 'Select the method', body: 'Comparable uncontrolled price, resale price, cost plus, or profit-based methods (transactional net margin and profit split).' },
            { title: 'Document', body: 'Contemporaneous transfer-pricing documentation, and country-by-country reporting for large groups.' },
            { title: 'Seek certainty', body: 'Advance pricing agreements with tax authorities for large or complex arrangements.' },
          ],
        },
        { t: 'p', text: 'The OECD/G20 BEPS project (2013 to 2015) produced 15 actions against profit shifting. A further reform, the **two-pillar solution**, reallocates some taxing rights of the largest firms to market countries (Pillar One, progress is slow) and sets a **15% minimum effective tax rate** for groups with consolidated revenue of at least €750 million (Pillar Two), through an income-inclusion rule and a top-up on undertaxed profits. Many countries implemented Pillar Two from 2024, and Singapore from 2025, including a domestic top-up tax. Tax incentives that reduce the effective rate below 15% therefore matter less for in-scope groups, and countries are redesigning incentives toward grants and credits.' },
      ],
    },
    {
      id: 'line',
      title: 'Planning, avoidance and evasion',
      lead: 'Three different things.',
      blocks: [
        {
          t: 'table',
          head: ['', 'What it is', 'Example', 'Consequence'],
          rows: [
            ['Tax planning', 'Arranging affairs to take advantage of reliefs and rates as Parliament intended', 'Contributing to CPF top-ups, claiming capital allowances, locating real operations where incentives exist', 'Lawful'],
            ['Tax avoidance', 'Using the letter of the law to defeat its purpose through artificial arrangements', 'Circular transactions created only for a tax benefit', 'Can be counteracted under the general anti-avoidance rule (section 33 of the Income Tax Act) and penalised'],
            ['Tax evasion', 'Deliberately concealing or misreporting to reduce tax', 'Hiding income, false invoices, undeclared overseas accounts', 'Criminal offence: penalties can be several times the tax, fines and imprisonment'],
          ],
        },
        {
          t: 'dodont',
          do: ['Document the commercial reasons for structures', 'Disclose fully and file accurately, including foreign accounts where required', 'Take advice from a qualified adviser and keep a record of it'],
          dont: ['Create arrangements with no purpose other than tax', 'Treat a "secret" jurisdiction as protection: information exchange has ended most secrecy', 'Assume a scheme sold with a legal opinion is safe: promoters of aggressive schemes can be penalised'],
        },
        { t: 'callout', tone: 'note', title: 'The ethical dimension', text: 'Paying less tax than the maximum is not wrong; what the rules are for and what society expects of large firms and wealthy individuals is a live debate. Companies increasingly publish their tax strategies, and investors treat aggressive structures as a reputational and legal risk. Professional bodies expect accountants not to promote schemes that go beyond reasonable interpretation of the law.' },
      ],
    },
  ],
  sources: [
    'OECD (2015). *Base Erosion and Profit Shifting Project: Final Reports*; OECD (2021). Pillar Two Model Rules (oecd.org).',
    'OECD. *Transfer Pricing Guidelines for Multinational Enterprises and Tax Administrations* (2022).',
    'Inland Revenue Authority of Singapore. Avoidance of Double Taxation Agreements; Transfer Pricing Guidelines; Multinational Enterprise Top-up Tax (iras.gov.sg).',
    'Income Tax Act 1947 (Singapore), section 33 (general anti-avoidance) and the penalty provisions (sso.agc.gov.sg).',
    'Zucman, G. (2015). *The Hidden Wealth of Nations*. University of Chicago Press.',
  ],
  related: ['accounting/taxation/singapore-corporate-tax', 'accounting/taxation/tax-principles', 'banking/private/compliance-kyc-and-tax-transparency', 'accounting/management-accounting/costing-and-pricing'],
}

export default guide
