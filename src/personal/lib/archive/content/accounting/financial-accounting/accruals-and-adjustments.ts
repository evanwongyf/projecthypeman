import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Cash and profit are different things. A firm that delivers goods in December and is paid in February has earned its revenue in December; a firm that pays a year of insurance in advance has not spent it all in the month of payment. Accrual accounting records revenue when it is earned and expenses when they are incurred, whatever the timing of cash. To do that at the year-end, accountants make adjusting entries for accrued and prepaid items, bad debts and provisions. This guide explains the accruals and matching ideas, shows each adjustment with numbers, and explains why a profitable business can still run out of cash.',
  nutshell: [
    '**Accruals concept**: record revenue **when earned** and expenses **when incurred**, not when cash moves.',
    '**Matching**: expenses go in the **same period as the revenue** they helped to earn.',
    'Four adjustments: **accrued expenses** (owed, not yet paid), **prepaid expenses** (paid, not yet used), **accrued income** (earned, not yet billed) and **deferred income** (received, not yet earned).',
    '**Bad debts** and **provisions** recognise likely losses and obligations before they are certain.',
    '**Profit ≠ cash**: timing differences mean the two can diverge widely in any period.',
  ],
  sections: [
    {
      id: 'four',
      title: 'The four timing adjustments',
      lead: 'Cash on one side of the year-end, the economics on the other.',
      blocks: [
        {
          t: 'table',
          head: ['Adjustment', 'Situation', 'Entry at year-end', 'Balance sheet'],
          rows: [
            ['Accrued expense', 'Wages for the last week of December are paid in January', 'Debit expense, credit accrued liability', 'Current liability'],
            ['Prepaid expense', 'S$12,000 for 12 months of insurance is paid on 1 October; the year ends 31 December', 'Debit prepaid asset for 9/12 (S$9,000), expense 3/12 (S$3,000)', 'Current asset'],
            ['Accrued income', 'Interest earned on a deposit but not yet received', 'Debit receivable, credit income', 'Current asset'],
            ['Deferred income', 'Annual software subscription of S$6,000 received on 1 July; the year ends 31 December', 'Revenue S$3,000; credit deferred income S$3,000', 'Current liability'],
          ],
        },
        {
          t: 'example',
          title: 'A small firm’s year-end',
          lines: [
            { label: 'Cash paid for rent', text: 'S$24,000 for the year, of which S$2,000 relates to January of next year → rent expense S$22,000, prepaid rent S$2,000.' },
            { label: 'Wages', text: 'S$3,000 owed to staff at year-end → accrued wages S$3,000 added to expense.' },
            { label: 'Customer deposits', text: 'S$5,000 received for work to be done next year → deferred income, not revenue.' },
            { label: 'Effect on profit', text: 'Profit is lower by the S$3,000 accrued wages and the S$2,000 prepaid rent was removed from expenses: net profit effect = −3,000 + 2,000 = −S$1,000 against a cash-based figure.' },
          ],
        },
      ],
    },
    {
      id: 'bad',
      title: 'Bad debts, allowances and provisions',
      lead: 'Recognising losses before they are certain.',
      blocks: [
        { t: 'p', text: 'If customers owe S$100,000 but experience says 3% will never pay, reporting the full receivable overstates assets. The firm records an **allowance for doubtful debts** of S$3,000 (a contra-asset) and an expense of S$3,000, so receivables are shown at the amount expected to be collected. Modern standards (IFRS 9) go further and require expected credit losses to be recognised from the start, based on history, current conditions and forecasts.' },
        {
          t: 'math',
          plain: 'Not every customer who owes you money will pay. Instead of pretending they all will, you estimate how much will probably never arrive and subtract that from what you are owed, so the balance sheet shows what you realistically expect to collect. The estimate is built by sorting the debts by how overdue they are, because older debts are much less likely to be paid, and applying a different loss percentage to each group.',
          tex: String.raw`\text{Net receivables}=R-A,\qquad A=\sum_{k} r_k\,p_k`,
          caption: 'An ageing analysis: the allowance is the sum, over age bands, of the balance times the expected loss rate.',
          where: [{ sym: 'R', def: 'gross receivables' }, { sym: 'A', def: 'allowance for expected credit losses' }, { sym: 'r_k,\\ p_k', def: 'the balance in age band k and its expected loss rate' }],
          syntax: [{ sym: 'r_k\\,p_k', say: 'Multiply the balance in one age band by the share of it you expect to lose, \\(r_k\\times p_k\\). In the worked example, S$25,000 that is 1 to 30 days late with a 4% expected loss gives \\(25{,}000\\times0.04=\\text{S\\$}1{,}000\\) of expected loss. Raise the balance and the expected loss rises in proportion; raise the loss percentage (as the debts get older: 1%, 4%, 15%, 50%) and the loss rises again. The reason older bands carry higher rates is simply that a customer who has not paid for 90 days is much less likely to ever pay than one who is not yet due.' }, { sym: '\\sum_{k}', say: 'The big sigma means "add up the answer for every age band". Here it adds the expected loss of each band: \\(600+1{,}000+1{,}500+2{,}500=\\text{S\\$}5{,}600\\). Adding another band, or a larger balance in an old band, makes the total allowance larger; it can never be smaller than the biggest single band\'s loss.' }, { sym: 'R-A', say: 'Subtract the allowance from the gross receivables: \\(100{,}000-5{,}600=\\text{S\\$}94{,}400\\). This is the amount shown on the balance sheet. A bigger allowance lowers net receivables and lowers profit (the allowance is charged as an expense), which is the cautious direction: accounts should not overstate what will be collected.' }],
          worked: {
            title: 'An ageing schedule',
            steps: ['Not yet due S$60,000 × 1% = S$600; 1 to 30 days late S$25,000 × 4% = S$1,000; 31 to 90 days S$10,000 × 15% = S$1,500; over 90 days S$5,000 × 50% = S$2,500.', 'Allowance = 600 + 1,000 + 1,500 + 2,500 = S$5,600 on S$100,000.', 'If the old allowance was S$3,000, the expense for the year is S$2,600.'],
            answer: 'Receivables are shown at S$94,400. The expense appears in the period when the sales were made, not later when customers default: that is matching.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Provision', tag: 'liability of uncertain timing or amount', body: 'Recognised when there is a present obligation, an outflow is probable and the amount can be estimated reliably (IAS 37): warranties, legal claims, restructuring, restoration of leased premises.' },
            { title: 'Contingent liability', tag: 'disclosed, not recorded', body: 'A possible obligation or a probable one that cannot be measured: described in the notes, not on the balance sheet.' },
            { title: 'Write-off', tag: 'removal of a specific debt', body: 'When a particular debt is known to be uncollectable, it is removed against the allowance; no new expense arises if the allowance was adequate.' },
            { title: 'Judgement and bias', tag: 'a risk', body: 'Estimates can be used to smooth profits (cookie-jar reserves). Auditors and standards limit this by demanding evidence for the estimates.' },
          ],
        },
      ],
    },
    {
      id: 'cash',
      title: 'Why profit is not cash',
      lead: 'Seven gaps between the two.',
      blocks: [
        {
          t: 'table',
          head: ['Item', 'Effect on profit', 'Effect on cash'],
          rows: [
            ['Credit sales', 'Raises revenue now', 'Cash arrives later'],
            ['Buying inventory', 'Expense only when sold', 'Cash leaves at purchase'],
            ['Capital purchases', 'Spread through depreciation', 'Cash leaves at purchase'],
            ['Depreciation', 'Reduces profit', 'No cash leaves'],
            ['Loan repayment (principal)', 'No expense', 'Cash leaves'],
            ['Customer deposits', 'Not yet revenue', 'Cash arrives now'],
            ['Dividends', 'Not an expense', 'Cash leaves'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Overtrading', text: 'A fast-growing firm can report rising profits while cash drains into inventory and receivables. Many profitable businesses fail not because they lose money but because they cannot pay bills when due. The cash-flow statement and a cash forecast are therefore as important as the income statement.' },
      ],
    },
  ],
  sources: [
    'IASB. IAS 1; IAS 37 Provisions, Contingent Liabilities and Contingent Assets; IFRS 9 Financial Instruments (expected credit losses) (ifrs.org).',
    'IASB. Conceptual Framework for Financial Reporting (2018): accrual accounting.',
    'Accounting Standards Council Singapore: SFRS(I) equivalents (asc.gov.sg).',
    'Weygandt, J. J., Kimmel, P. D. & Kieso, D. E. *Financial Accounting* (IFRS edition). Wiley.',
  ],
  related: ['accounting/financial-accounting/double-entry', 'accounting/financial-accounting/revenue-and-cash-flow', 'accounting/financial-accounting/depreciation-and-inventory'],
}

export default guide
