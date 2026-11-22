import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Singapore taxes individuals on income arising in or received in Singapore, at progressive rates after deductions and reliefs. Residents are taxed on a graduated schedule that starts at zero; non-residents are taxed at flat rates on most income. The taxable base is narrower than in many countries: capital gains, most foreign-sourced income received by individuals, and interest on Singapore bank deposits are not taxed. This guide explains tax residence, what counts as income, how chargeable income is arrived at, the rate schedule with worked examples, the main reliefs including CPF relief, the filing process, and gives a live calculator. Rates, reliefs and caps change with each Budget: treat figures as illustrations and check IRAS.',
  nutshell: [
    '**Tax residents** (citizens, PRs, and foreigners who work 183 days or more, or live for a qualifying period) pay **progressive rates** from 0% up to **24%** on chargeable income above S$1 million.',
    '**Chargeable income** = assessable income − allowable deductions − personal reliefs (subject to an overall relief cap).',
    'Common reliefs: **earned income**, **CPF** (employee contributions), **spouse**, **qualifying child**, **parent**, **course fees**, and voluntary **CPF top-ups**.',
    'Not taxed for individuals: **capital gains**, most **overseas income received in Singapore**, **dividends under the one-tier system**, and **interest from Singapore deposits**.',
    'Most salaried taxpayers file with **auto-inclusion**: employers send data to IRAS and a notice of assessment follows each year.',
  ],
  sections: [
    {
      id: 'resident',
      title: 'Residence and what is taxed',
      lead: 'Resident versus non-resident.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Tax resident', 'Non-resident'],
          rows: [
            ['Who', 'Singapore citizens and PRs living in Singapore; foreigners who stay or work in Singapore for 183 days or more in the calendar year (other qualifying tests apply)', 'Individuals who do not meet the tests, often short-term visitors or those working under 60 days'],
            ['Rates on employment income', 'Progressive resident rates, after reliefs', 'The higher of a flat 15% (from the first dollar) and resident rates without reliefs; check current rules'],
            ['Other income (e.g. directors’ fees, consultancy)', 'Resident rates', 'Often 24% flat on directors’ fees; withholding tax of 15% to 24% depending on the type of payment'],
            ['Reliefs', 'Available', 'Generally not available'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Taxed', tag: 'income', body: 'Employment income (salary, bonus, allowances, stock awards on vesting), trade or business income, rental income net of expenses, pensions, and royalties and some other gains of an income nature.' },
            { title: 'Not taxed', tag: 'for individuals', body: 'Capital gains (unless the activity is a trade), dividends paid by Singapore companies (tax already paid by the company), interest from Singapore banks and approved sources, most foreign-sourced income received by resident individuals, and CPF withdrawals.' },
            { title: 'Territorial with remittance basis', tag: 'principle', body: 'Singapore taxes income accruing in or derived from Singapore, and foreign income when it is received here, subject to exemptions that apply to individuals not acting through a Singapore partnership.' },
            { title: 'Reliefs vs deductions', tag: 'definitions', body: 'Deductions relate to expenses of earning the income (for example employment expenses, rental costs); reliefs are personal allowances based on circumstances (family, CPF, courses).' },
          ],
        },
      ],
    },
    {
      id: 'calc',
      title: 'From income to tax',
      lead: 'Bands, reliefs and the calculator.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Assessable income', body: 'Add employment, business, rental and other taxable income for the calendar year.' },
            { title: 'Deductions', body: 'Subtract allowable business and rental expenses and employment expenses.' },
            { title: 'Reliefs', body: 'Subtract personal reliefs (the total is capped; check the current cap, which has been S$80,000 per year).' },
            { title: 'Chargeable income', body: 'The remaining amount is taxed using the rate schedule.' },
            { title: 'Rebates and credits', body: 'Subtract any personal tax rebate and foreign tax credits, then pay by the due date (instalments through GIRO are available).' },
          ],
        },
        {
          t: 'table',
          head: ['Chargeable income (S$)', 'Rate on the band', 'Tax at band top (cumulative)'],
          rows: [
            ['First 20,000', '0%', '0'],
            ['Next 10,000 (to 30,000)', '2%', '200'],
            ['Next 10,000 (to 40,000)', '3.5%', '550'],
            ['Next 40,000 (to 80,000)', '7%', '3,350'],
            ['Next 40,000 (to 120,000)', '11.5%', '7,950'],
            ['Next 40,000 (to 160,000)', '15%', '13,950'],
            ['Next 40,000 (to 200,000)', '18%', '21,150'],
            ['Next 40,000 (to 240,000)', '19%', '28,750'],
            ['Next 40,000 (to 280,000)', '19.5%', '36,550'],
            ['Next 40,000 (to 320,000)', '20%', '44,550'],
            ['Next 180,000 (to 500,000)', '22%', '84,150'],
            ['Next 500,000 (to 1,000,000)', '23%', '199,150'],
            ['Above 1,000,000', '24%', '–'],
          ],
        },
        { t: 'p', text: 'This is the schedule for residents from Year of Assessment 2024 (income earned in 2023); IRAS publishes the table for each year. For example, a resident with S$90,000 of income and S$10,000 of reliefs has chargeable income of S$80,000 and tax of S$3,350 (an average rate of 4.2%) before any rebate. The marginal rate on the next dollar is 11.5%.' },
        { t: 'acct-viz', viz: 'income-tax' },
      ],
    },
    {
      id: 'reliefs',
      title: 'Reliefs and filing',
      lead: 'The common ones, and how the process works.',
      blocks: [
        {
          t: 'table',
          head: ['Relief', 'Idea', 'Notes (check current amounts)'],
          rows: [
            ['Earned income relief', 'For those who work', 'A fixed amount that varies with age and disability'],
            ['CPF relief', 'Employee CPF contributions up to the CPF ceilings', 'Residents who are CPF members; also relief for voluntary top-ups to Special/Retirement Account'],
            ['Spouse relief', 'For a dependent spouse earning below an income limit', 'Conditions apply'],
            ['Qualifying child relief', 'For each qualifying child', 'Per child; extra for disabled child'],
            ['Parent relief', 'For supporting a parent', 'Depends on whether the parent lives with you; per parent'],
            ['Course fees relief', 'Approved courses for work-related development', 'Capped per year'],
            ['SRS contributions', 'Supplementary Retirement Scheme contributions', 'Capped per year for citizens and PRs; withdrawals taxed at 50% when taken at retirement age'],
          ],
        },
        {
          t: 'checklist',
          items: ['Check that your employer’s data (auto-inclusion) shows the right income', 'Claim reliefs you are entitled to before the filing deadline (generally 15 April for paper, 18 April for e-Filing; check the year)', 'Keep records of deductible expenses and donations for several years', 'Pay by the due date or arrange GIRO instalments', 'Review your Notice of Assessment and object if it is wrong, within the time limit stated'],
        },
        { t: 'callout', tone: 'tip', title: 'Planning versus avoidance', text: 'Topping up your CPF Special or Retirement Account or contributing to SRS reduces taxable income and is an explicit policy incentive. Hiding income, overclaiming reliefs or inventing expenses is evasion. IRAS data-matching across employers, banks and agencies has reduced the scope for under-reporting.' },
      ],
    },
  ],
  sources: [
    'Inland Revenue Authority of Singapore. Individual Income Tax: Tax Residency and Tax Rates; Tax Reliefs, Rebates and Deductions (iras.gov.sg).',
    'Income Tax Act 1947 (Singapore), Singapore Statutes Online (sso.agc.gov.sg).',
    'Ministry of Finance Singapore. Annual Budget Statements and Annexes (mof.gov.sg).',
    'Central Provident Fund Board (cpf.gov.sg): CPF contribution rates and ceilings.',
  ],
  related: ['accounting/taxation/tax-principles', 'accounting/taxation/singapore-corporate-tax', 'accounting/taxation/property-and-other-taxes', 'banking/consumer/mortgages-in-singapore'],
}

export default guide
