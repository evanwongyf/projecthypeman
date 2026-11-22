import type { ArchiveNode } from '../topics'

// Accounting and taxation: how businesses record and report, how costs are analysed, how
// audit and standards work, and how taxes are designed and calculated, with Singapore's system.

export const ACCOUNTING: ArchiveNode = {
  slug: 'accounting',
  title: 'Accounting and taxation',
  blurb: 'How businesses record, report and analyse their finances (double entry, the three statements, costing, standards and audit), and how taxes work, from the principles of tax design to income tax, corporate tax, GST and other taxes in Singapore.',
  glyph: '🧾',
  color: 'color-mix(in srgb, var(--lavender) 55%, var(--mint))',
  tags: ['accounting', 'bookkeeping', 'financial statements', 'tax', 'taxation', 'iras', 'gst', 'income tax', 'audit', 'singapore tax'],
  children: [
    { slug: 'start-here', title: 'Start here', blurb: 'What accounting and tax are for, who uses them, and a route through the shelf from the first journal entry to a tax return.', minutes: 6, glyph: '★', tags: ['beginner', 'overview', 'roadmap'] },
    {
      slug: 'financial-accounting',
      title: 'Financial accounting',
      blurb: 'The accounting equation and double entry, the income statement, balance sheet and cash-flow statement, accruals, depreciation and inventory, revenue recognition, and reading the numbers.',
      glyph: '≡',
      tags: ['financial accounting', 'double entry', 'balance sheet', 'income statement', 'cash flow', 'accruals'],
      children: [
        { slug: 'double-entry', title: 'The accounting equation and double entry', blurb: 'Assets, liabilities and equity, debits and credits, journals and ledgers, the trial balance, with a live posting practice tool.', minutes: 13, tags: ['double entry', 'debit', 'credit', 'accounting equation', 'journal', 'ledger', 'trial balance', 't account'] },
        { slug: 'financial-statements', title: 'The three financial statements', blurb: 'The income statement, balance sheet and cash-flow statement, how they connect, and a worked example from transactions to statements.', minutes: 13, tags: ['income statement', 'balance sheet', 'cash flow statement', 'profit and loss', 'statement of financial position', 'retained earnings'] },
        { slug: 'accruals-and-adjustments', title: 'Accruals, prepayments and adjusting entries', blurb: 'The accruals concept, matching, accrued and prepaid items, bad debts and why profit is not cash.', minutes: 11, tags: ['accruals', 'prepayments', 'matching principle', 'adjusting entries', 'bad debts', 'provisions', 'cash versus accrual'] },
        { slug: 'depreciation-and-inventory', title: 'Depreciation and inventory', blurb: 'Straight-line and declining-balance depreciation, impairment, FIFO, weighted average and LIFO, with live calculators.', minutes: 12, tags: ['depreciation', 'straight line', 'declining balance', 'inventory', 'fifo', 'lifo', 'weighted average', 'impairment', 'net book value'] },
        { slug: 'revenue-and-cash-flow', title: 'Revenue recognition and the cash-flow statement', blurb: 'When revenue is recorded, the five-step model, direct and indirect cash flow, free cash flow and why profitable firms run out of cash.', minutes: 12, tags: ['revenue recognition', 'ifrs 15', 'cash flow', 'indirect method', 'free cash flow', 'working capital', 'operating cash flow'] },
        { slug: 'standards-audit-and-governance', title: 'Standards, audit and governance in Singapore', blurb: 'SFRS and IFRS, ACRA, what an audit is and is not, the true-and-fair view, ethics and the role of directors.', minutes: 11, tags: ['sfrs', 'ifrs', 'acra', 'audit', 'true and fair', 'auditor', 'governance', 'directors', 'internal control', 'fraud'] },
      ],
    },
    {
      slug: 'management-accounting',
      title: 'Management accounting',
      blurb: 'Cost behaviour, break-even and cost–volume–profit analysis, costing products, budgeting and variance analysis, and decisions based on relevant costs.',
      glyph: '⚙',
      tags: ['management accounting', 'cost accounting', 'budgeting', 'break-even', 'variance'],
      children: [
        { slug: 'costs-and-cvp', title: 'Cost behaviour and break-even analysis', blurb: 'Fixed, variable and mixed costs, contribution margin, break-even and margin of safety, operating leverage, with a CVP lab.', minutes: 12, tags: ['cost behaviour', 'break even', 'cvp', 'contribution margin', 'operating leverage', 'fixed cost', 'variable cost', 'margin of safety'] },
        { slug: 'costing-and-pricing', title: 'Costing products and pricing', blurb: 'Absorption and activity-based costing, overhead allocation, cost-plus pricing and why full cost is not always the right cost.', minutes: 11, tags: ['absorption costing', 'activity based costing', 'overhead', 'cost plus', 'pricing', 'standard cost', 'unit cost', 'transfer pricing'] },
        { slug: 'budgets-and-variances', title: 'Budgeting, variances and decisions', blurb: 'Master budgets, flexing and variance analysis, relevant costs for decisions, and the time value of money in investment appraisal.', minutes: 12, tags: ['budget', 'variance analysis', 'relevant cost', 'npv', 'payback', 'capital budgeting', 'flexible budget', 'make or buy'] },
      ],
    },
    {
      slug: 'taxation',
      title: 'Taxation',
      blurb: 'The principles of tax design, then Singapore’s taxes in turn: personal income tax, corporate tax, GST, property and stamp duties, international tax, and the line between planning, avoidance and evasion.',
      glyph: '％',
      color: 'color-mix(in srgb, var(--orange) 50%, var(--lavender))',
      tags: ['tax', 'taxation', 'iras', 'income tax', 'corporate tax', 'gst', 'singapore tax'],
      children: [
        { slug: 'tax-principles', title: 'Principles of tax design', blurb: 'Why governments tax, direct and indirect taxes, progressive and flat systems, marginal versus average rates, incidence and the Laffer curve.', minutes: 12, tags: ['tax principles', 'progressive tax', 'marginal rate', 'average rate', 'tax incidence', 'laffer curve', 'direct tax', 'indirect tax', 'adam smith canons'] },
        { slug: 'singapore-personal-income-tax', title: 'Singapore personal income tax', blurb: 'Residency, chargeable income, reliefs, the progressive rate table with worked examples, CPF relief and filing, with a live calculator.', minutes: 13, tags: ['income tax', 'iras', 'tax resident', 'chargeable income', 'reliefs', 'cpf relief', 'ya', 'year of assessment', 'tax rates', 'auto inclusion scheme'] },
        { slug: 'singapore-corporate-tax', title: 'Singapore corporate tax', blurb: 'The 17% rate, partial and start-up exemptions, deductible expenses, capital allowances, one-tier dividends and a corporate tax lab.', minutes: 12, tags: ['corporate tax', '17%', 'partial exemption', 'start up exemption', 'capital allowances', 'deductions', 'one tier', 'form c-s', 'eci'] },
        { slug: 'gst-and-indirect-taxes', title: 'GST and indirect taxes', blurb: 'How value-added tax works, input and output tax, the 9% rate, registration, zero-rating and exemptions, and a supply-chain lab.', minutes: 11, tags: ['gst', 'value added tax', 'input tax', 'output tax', 'zero rated', 'exempt', 'registration threshold', 'vat', '9%'] },
        { slug: 'property-and-other-taxes', title: 'Property tax, stamp duty and what Singapore does not tax', blurb: 'Property tax, buyer’s and additional buyer’s stamp duty, taxes on wealth and gains, and why there is no capital gains or estate tax.', minutes: 10, tags: ['property tax', 'stamp duty', 'bsd', 'absd', 'capital gains', 'estate duty', 'withholding tax', 'dividends', 'singapore'] },
        { slug: 'international-and-planning', title: 'International tax, planning, avoidance and evasion', blurb: 'Tax residence and treaties, transfer pricing, BEPS and the global minimum tax, and the legal and ethical line between planning and evasion.', minutes: 12, tags: ['double tax agreement', 'transfer pricing', 'beps', 'pillar two', 'global minimum tax', 'tax avoidance', 'tax evasion', 'gaar', 'tax planning'] },
      ],
    },
  ],
}
