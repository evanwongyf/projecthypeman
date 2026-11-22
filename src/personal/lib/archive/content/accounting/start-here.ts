import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Accounting is the language of business: a system for recording what a person or organisation owns and owes, measuring how well it is doing, and reporting that to people who must decide whether to lend, invest, manage or tax it. Taxation is the part of public finance that takes a share of income, spending and wealth to pay for public goods. The two meet in a tax return, which is built from accounting numbers and the tax rules that adjust them. This shelf starts with the first journal entry, builds up the financial statements, turns to the accounting managers use to make decisions, and then explains how taxes are designed and how Singapore’s main taxes work.',
  nutshell: [
    '**Financial accounting** records transactions by **double entry** and reports to outsiders in **three statements**: income statement, balance sheet and cash-flow statement.',
    '**Management accounting** is for insiders: **costs, break-even, budgets, variances and decisions**; it is not bound by external standards.',
    '**Taxation** has its own rules: **accounting profit is adjusted into taxable income** by adding back disallowed expenses and replacing depreciation with capital allowances.',
    'Singapore’s main taxes: **personal income tax** (progressive, residents), **corporate tax** (17% headline), **GST** (9%), **property tax and stamp duties**; there is **no capital gains tax and no estate duty**.',
    'All the rates, thresholds and reliefs in this shelf are **examples that change**; check **IRAS** (tax), **ACRA** (company law and filings) and **ASC** (accounting standards) for current rules.',
  ],
  sections: [
    {
      id: 'who',
      title: 'Who uses accounting, and for what',
      lead: 'Different readers, different questions.',
      blocks: [
        {
          t: 'table',
          head: ['User', 'Question', 'Where to look'],
          rows: [
            ['Owner or manager', 'Are we profitable? Which products make money? Can we afford this project?', 'Management accounts, budgets, cost reports'],
            ['Lender or bank', 'Can the borrower repay? What is the leverage and cash flow?', 'Balance sheet, cash-flow statement, covenants'],
            ['Investor', 'Is the business growing, profitable and fairly valued?', 'Income statement, cash flow, notes, segment data'],
            ['Tax authority (IRAS)', 'What is taxable income? Was GST charged and paid correctly?', 'Tax computation, GST returns'],
            ['Regulator and auditor', 'Do the statements give a true and fair view?', 'Full financial statements and underlying records'],
            ['Employees and public', 'Is the organisation sound and honest?', 'Annual reports, filings with ACRA'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Accounting is not just bookkeeping', text: 'Bookkeeping is the recording. Accounting adds classification, measurement (what is a cost, when is revenue earned, what is an asset worth?), reporting and interpretation. Many of its most important rules are judgements about timing and valuation, which is why two honest firms can report different profits from the same events.' },
      ],
    },
    {
      id: 'route',
      title: 'A route through the shelf',
      lead: 'Four stages.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Record', body: 'Double entry and the accounting equation, then accruals, depreciation and inventory. Use the ledger lab to post entries and see the equation hold.' },
            { title: 'Report', body: 'The three statements and how they connect; revenue recognition; standards, audit and governance.' },
            { title: 'Manage', body: 'Cost behaviour and break-even, costing and pricing, budgets, variances and relevant-cost decisions.' },
            { title: 'Tax', body: 'Principles of tax design, then Singapore personal and corporate income tax, GST, property and other taxes, and international tax and planning.' },
          ],
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Financial accounting', tag: '6 guides', body: 'Double entry, statements, accruals, depreciation and inventory, revenue and cash flow, standards and audit.' },
            { title: 'Management accounting', tag: '3 guides', body: 'Costs and CVP, costing and pricing, budgets, variances and decisions.' },
            { title: 'Taxation', tag: '6 guides', body: 'Principles, personal tax, corporate tax, GST, property and other taxes, international and planning.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'accounting/financial-accounting/double-entry', note: 'start with the equation and the debit/credit rules' },
            { path: 'accounting/management-accounting/costs-and-cvp', note: 'break-even and operating leverage' },
            { path: 'accounting/taxation/singapore-personal-income-tax', note: 'a live income-tax calculator' },
            { path: 'banking/start-here', note: 'the banking shelf pairs with this one' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Weygandt, J. J., Kimmel, P. D. & Kieso, D. E. *Financial Accounting* (IFRS edition). Wiley.',
    'Drury, C. *Management and Cost Accounting*. Cengage.',
    'Inland Revenue Authority of Singapore (iras.gov.sg): tax guides and e-Tax guides.',
    'Accounting and Corporate Regulatory Authority (acra.gov.sg); Accounting Standards Council Singapore (asc.gov.sg).',
    'Institute of Singapore Chartered Accountants (isca.org.sg): professional resources.',
  ],
  related: ['accounting/financial-accounting/double-entry', 'accounting/management-accounting/costs-and-cvp', 'accounting/taxation/tax-principles', 'finance/start-here'],
}

export default guide
