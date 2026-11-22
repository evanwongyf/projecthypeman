import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Singapore taxes companies at a flat headline rate of 17% on chargeable income, but partial exemptions mean that small profits are taxed at a much lower effective rate, and a new company can qualify for larger exemptions in its early years. Taxable income is not the same as accounting profit: some expenses are not deductible, depreciation is replaced by capital allowances, and some income is exempt. Dividends are not taxed again in shareholders’ hands under the one-tier system. This guide walks through a tax computation, the exemptions with a live lab, deductible and non-deductible items, capital allowances, the one-tier system, filing, and the global minimum tax. Rates and rules change; check IRAS.',
  nutshell: [
    'Headline corporate rate **17%**, applied to **chargeable income** = accounting profit adjusted for tax.',
    '**Partial exemption**: 75% of the first S$10,000 and 50% of the next S$190,000 of chargeable income is exempt; **start-up exemption** (first three years, qualifying companies): 75% of the first S$100,000 and 50% of the next S$100,000.',
    '**Expenses** must be incurred in **producing income**, and not be capital or private; **depreciation is added back** and **capital allowances** claimed instead.',
    '**One-tier system**: dividends paid by Singapore-resident companies are **tax-exempt** for shareholders.',
    'Filing: **Estimated Chargeable Income (ECI)** within three months of year-end (unless exempted) and **Form C-S / C-S (Lite) / C** by 30 November.',
  ],
  sections: [
    {
      id: 'comp',
      title: 'From accounting profit to chargeable income',
      lead: 'The tax computation.',
      blocks: [
        {
          t: 'table',
          head: ['Step', 'Example (S$)'],
          rows: [
            ['Net profit before tax per the accounts', '200,000'],
            ['Add back non-deductible items: depreciation', '+30,000'],
            ['Add back non-deductible items: private and capital expenses, certain entertainment, fines', '+5,000'],
            ['Deduct capital allowances', '−40,000'],
            ['Deduct non-taxable income (one-tier dividends)', '−10,000'],
            ['Chargeable income before exemptions', '185,000'],
          ],
        },
        {
          t: 'math',
          plain: 'Companies pay 17% tax on their chargeable income, but a part of the first S$200,000 is exempt, so small profits are taxed at much less than 17%. The formula first works out the exempt amount and then charges 17% on what is left.',
          tex: String.raw`E(y)=0.75\min(y,10{,}000)+0.50\,\max\!\big(0,\min(y-10{,}000,190{,}000)\big),\qquad T=0.17\,(y-E(y))`,
          caption: 'Normal partial exemption and the resulting tax on chargeable income y.',
          where: [{ sym: 'y', def: 'chargeable income' }, { sym: 'E(y)', def: 'the exempt amount' }, { sym: 'T', def: 'tax payable at 17% on the non-exempt part' }],
          syntax: [{ sym: '0.17\\,(y-E(y))', say: 'Subtract the exempt amount from the income, then charge 17% on the rest. For income S$150,000 the exempt amount is S$77,500, so \\(0.17\\times(150{,}000-77{,}500)=0.17\\times72{,}500=\\text{S\\$}12{,}325\\). The exemption makes the effective rate (12,325 ÷ 150,000 = 8.2%) far below the 17% headline. Higher income means more taxable income after the cap on exemption is reached, so the effective rate drifts toward 17%.' }, { sym: '0.75\\min(y,10{,}000)', say: 'Three-quarters of the first S$10,000 is exempt. \\(\\min(y,10{,}000)\\) picks whichever is smaller, so for income of 150,000 the first slice is 10,000 and \\(0.75\\times10{,}000=7{,}500\\) is exempt. For income of only 6,000 the slice is 6,000 and 4,500 is exempt.' }, { sym: '0.50\\max(0,\\min(y-10{,}000,190{,}000))', say: 'Half of the next S$190,000 of income is exempt. \\(y-10{,}000\\) is the income above the first slice, \\(\\min(\\cdot,190{,}000)\\) caps it at the band\'s size, and \\(\\max(0,\\cdot)\\) stops it going negative for small incomes. For \\(y=150{,}000\\): \\(\\min(140{,}000,190{,}000)=140{,}000\\), and half of it is 70,000. The two exempt parts total \\(7{,}500+70{,}000=77{,}500\\).' }],
          worked: {
            title: 'Chargeable income of S$150,000',
            steps: ['Exempt: 0.75 × 10,000 + 0.50 × 140,000 = S$77,500; taxable: 150,000 − 77,500 = S$72,500.', 'Tax = 17% × 72,500 = S$12,325, an effective rate of 8.2%.', 'Under the start-up exemption: exempt 0.75 × 100,000 + 0.50 × 50,000 = S$100,000; taxable S$50,000; tax = S$8,500 (5.7%).'],
            answer: 'At S$200,000 the normal exemption saves S$17,425 (exempt S$102,500); above that the marginal rate is the full 17%. The effective rate rises toward 17% as profits grow, as the lab shows.',
          },
        },
        { t: 'acct-viz', viz: 'corp-tax' },
      ],
    },
    {
      id: 'ded',
      title: 'Deductions, allowances and the one-tier system',
      lead: 'What is allowed.',
      blocks: [
        {
          t: 'table',
          head: ['Category', 'Treatment', 'Example'],
          rows: [
            ['Revenue expenses incurred wholly and exclusively to produce income', 'Deductible', 'Salaries, rent, utilities, advertising, repairs'],
            ['Capital expenditure', 'Not deductible; capital allowances may be claimed', 'Machinery, vehicles, buildings'],
            ['Private or domestic expenses', 'Not deductible', 'Owner’s personal expenses'],
            ['Fines and penalties for breaking the law', 'Not deductible', 'Traffic fines, regulatory penalties'],
            ['Depreciation', 'Added back', 'Replaced by capital allowances'],
            ['Donations to approved charities (IPCs)', 'Enhanced deduction (250% in recent years)', 'Check the current multiple'],
            ['Dividends from Singapore companies', 'Exempt', 'One-tier'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Capital allowances', tag: 'replacement for depreciation', body: 'Statutory write-off schedules: for example section 19A allows a one-year or three-year write-off on qualifying plant and machinery; other assets follow different rates. Allowances are claimed only on assets used in the trade.' },
            { title: 'Loss relief', tag: 'losses', body: 'Current-year losses can offset other income; unabsorbed losses can be carried forward (and back, subject to limits) if shareholding conditions are met.' },
            { title: 'One-tier system', tag: 'no second layer of tax', body: 'Tax paid by the company on its profit is final: dividends are exempt in shareholders’ hands, so there is no further tax at Singapore level.' },
            { title: 'Foreign income', tag: 'conditions', body: 'Foreign-sourced dividends, branch profits and service income received in Singapore may be exempt if the headline rate abroad is at least 15%, the income was subject to tax abroad, and the exemption is beneficial to the company.' },
          ],
        },
      ],
    },
    {
      id: 'file',
      title: 'Filing, incentives and the minimum tax',
      lead: 'Process and policy.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Estimated Chargeable Income (ECI)', body: 'File within three months of the end of the financial year (unless exempt, for small companies below a revenue threshold with nil ECI).' },
            { title: 'Notice of Assessment', body: 'IRAS issues the assessment based on ECI; payment is generally allowed by GIRO instalments.' },
            { title: 'Form C-S / C-S (Lite) / C', body: 'File by 30 November each year for the previous financial year, with financial statements and the tax computation.' },
            { title: 'Records', body: 'Keep records for at least five years.' },
          ],
        },
        { t: 'p', text: 'Singapore also offers sector and activity incentives to attract investment, including concessionary rates for qualifying activities (for example headquarters, financing and shipping). From 2025 Singapore has introduced a **domestic top-up tax** and a **multinational enterprise top-up tax** to implement the OECD’s global minimum tax of 15% on large multinational groups (consolidated revenue of at least €750 million). The details and the extent to which incentives remain attractive are changing; see the international tax guide.' },
        { t: 'callout', tone: 'warn', title: 'Compliance matters', text: 'Late filing, incorrect returns and missed ECI deadlines attract penalties and, for wilful default, prosecution. Directors may be personally liable for offences by the company. Use a qualified tax agent for anything beyond the simplest cases.' },
      ],
    },
  ],
  sources: [
    'Inland Revenue Authority of Singapore. Corporate Income Tax: Tax Rates, Exemptions, Capital Allowances, Filing (iras.gov.sg).',
    'Income Tax Act 1947 (Singapore), including sections 10, 14, 19A, 13 (exemptions) (sso.agc.gov.sg).',
    'Ministry of Finance Singapore. Budget statements on corporate tax rebates, the domestic top-up tax and the Multinational Enterprise (Minimum Tax) Act (mof.gov.sg).',
    'OECD. Pillar Two: Tax Challenges Arising from the Digitalisation of the Economy: Global Anti-Base Erosion Model Rules (2021) (oecd.org).',
  ],
  related: ['accounting/taxation/tax-principles', 'accounting/taxation/international-and-planning', 'accounting/financial-accounting/depreciation-and-inventory'],
}

export default guide
