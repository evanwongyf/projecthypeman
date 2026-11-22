import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every transaction a business makes changes at least two things. Buying a van with cash gives it a van and takes away cash; borrowing from a bank gives it cash and a debt. Double-entry bookkeeping records both sides, so that the books stay in balance by construction. The idea is more than 500 years old (Pacioli described it in 1494) and still underlies every accounting system, from a hawker stall’s notebook to a bank’s ledger. This guide sets out the accounting equation, the rules for debits and credits, how entries flow into ledgers and a trial balance, and gives you a lab in which to post transactions and watch the equation hold.',
  nutshell: [
    'The **accounting equation**: **Assets = Liabilities + Equity**. It must always hold.',
    'Every transaction has **at least two effects** of equal size; a **debit** is one side and a **credit** the other, and total debits equal total credits.',
    '**Assets and expenses** increase with debits; **liabilities, equity and revenue** increase with credits.',
    'A **journal** records entries in order; the **ledger** groups them by account; a **trial balance** lists the balances and checks that debits equal credits.',
    'A balanced trial balance does not prove the books are right: errors of **omission**, **wrong account** or **offsetting** mistakes still balance.',
  ],
  sections: [
    {
      id: 'equation',
      title: 'The accounting equation',
      lead: 'Resources, claims and the owner’s stake.',
      blocks: [
        {
          t: 'math',
          plain: 'A business is a set of things it owns (assets), paid for by money it owes to others (liabilities) and money its owners have left in it (equity). The two sides of the equation must always be equal, because every dollar of assets came from somewhere. This is the reason every transaction is recorded twice, and the reason the books can be checked: if the sides do not balance, something was recorded wrongly.',
          tex: String.raw`A = L + E,\qquad E = \text{capital} + \text{revenue} - \text{expenses} - \text{drawings}`,
          caption: 'What a business has equals what it owes plus what the owners have left.',
          where: [{ sym: 'A', def: 'assets: resources the business controls (cash, receivables, inventory, equipment)' }, { sym: 'L', def: 'liabilities: obligations to outsiders (payables, loans, deferred revenue)' }, { sym: 'E', def: 'equity: the owners’ residual claim (capital contributed plus retained profit)' }],
          syntax: [{ sym: 'A = L + E', say: 'Assets on the left, claims on those assets on the right. If the owner puts in S$30,000 cash, assets rise by 30,000 and equity rises by 30,000, so \\(30{,}000=0+30{,}000\\) still balances. If you then buy S$25,000 of equipment with S$20,000 borrowed and S$5,000 of your cash, assets are 25,000 (equipment) + 25,000 (cash left) = 50,000, liabilities 20,000, equity 30,000. A rise on one side must always be met by a rise on the other, or a fall elsewhere on the same side.' }, { sym: 'E=\\text{capital}+\\text{revenue}-\\text{expenses}-\\text{drawings}', say: 'Equity is what the owner put in, plus the profit made (revenue minus expenses), minus anything taken out for personal use (drawings). Example: capital 30,000 + revenue 4,000 − expenses 1,500 − drawings 0 = S$32,500. Higher revenue raises equity; higher expenses or drawings lower it. Profit is therefore not extra money from nowhere: it is the increase in the owner\'s claim.' }],
          worked: {
            title: 'A new café',
            steps: ['The owner puts in S$30,000: A = 30,000 cash; E = 30,000 capital.', 'The café borrows S$20,000 and buys equipment for S$25,000 cash: A = 25,000 cash + 25,000 equipment = 50,000; L = 20,000; E = 30,000.', 'The café earns S$4,000 of sales in cash and pays S$1,500 of expenses: cash rises by 2,500, equity (profit) by 2,500.'],
            answer: 'At every step A equals L + E (S$52,500 = 20,000 + 32,500). Profit is a change in equity, and every transaction can be traced to an effect on one of the three groups.',
          },
        },
        {
          t: 'table',
          head: ['Group', 'Examples', 'Normal balance', 'Increases with'],
          rows: [
            ['Assets', 'Cash, receivables, inventory, equipment, prepaid rent', 'Debit', 'Debit'],
            ['Liabilities', 'Payables, bank loans, accrued wages, customer deposits', 'Credit', 'Credit'],
            ['Equity', 'Share capital, retained earnings, owner’s capital', 'Credit', 'Credit'],
            ['Revenue', 'Sales, fees, interest income', 'Credit', 'Credit'],
            ['Expenses', 'Rent, wages, depreciation, interest expense', 'Debit', 'Debit'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A memory aid', text: 'Debit is the left side and credit is the right side of an account; they do not mean "good" or "bad". Cash received is a debit to cash because cash is an asset, and it needs a matching credit: to sales if the customer paid, to a loan if the bank lent, to capital if the owner invested.' },
      ],
    },
    {
      id: 'post',
      title: 'Journals, ledgers and the trial balance',
      lead: 'From event to report.',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'Transaction', sub: 'Source documents: invoice, receipt, bank statement' },
            { label: 'Journal', sub: 'Dated entry with debit and credit', tone: 'process' },
            { label: 'Ledger', sub: 'Accounts such as cash, sales and payables', tone: 'data' },
            { label: 'Trial balance', sub: 'Balances listed; debits = credits?', tone: 'process' },
            { label: 'Statements', sub: 'Income statement and balance sheet', tone: 'output' },
          ],
          loop: 'Adjustments and corrections feed back into the journal',
        },
        {
          t: 'example',
          title: 'Four journal entries',
          lines: [
            { label: '1', text: 'Owner invests S$30,000: debit Cash 30,000, credit Capital 30,000.' },
            { label: '2', text: 'Buys equipment for S$25,000 on credit: debit Equipment 25,000, credit Payables 25,000.' },
            { label: '3', text: 'Cash sale of S$4,000: debit Cash 4,000, credit Sales 4,000.' },
            { label: '4', text: 'Pays S$1,500 rent: debit Rent expense 1,500, credit Cash 1,500.' },
          ],
        },
        { t: 'p', text: 'Posting these to the ledger gives cash S$32,500 (debit), equipment S$25,000 (debit), payables S$25,000 (credit), capital S$30,000 (credit), sales S$4,000 (credit) and rent S$1,500 (debit). Debits total S$59,000 and credits total S$59,000, so the trial balance balances.' },
        { t: 'acct-viz', viz: 'ledger' },
      ],
    },
    {
      id: 'errors',
      title: 'What a trial balance cannot catch',
      lead: 'Balanced does not mean right.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Omission', tag: 'balances', body: 'A whole transaction is left out: both sides are missing, so debits still equal credits.' },
            { title: 'Wrong account', tag: 'balances', body: 'S$500 of repairs is debited to equipment instead of repairs expense: totals match, but profit and assets are wrong.' },
            { title: 'Compensating errors', tag: 'balances', body: 'A S$100 overstatement of one debit and an equal overstatement of another credit offset.' },
            { title: 'Transposition', tag: 'does not balance', body: 'S$540 recorded as S$450: the difference (90) is divisible by nine, a classic clue.' },
          ],
        },
        { t: 'checklist', items: ['Does every entry have equal debits and credits?', 'Is there a source document for the entry?', 'Is the account classification right (asset or expense, liability or equity)?', 'Are the entries dated in the right period?', 'Have bank and ledger balances been reconciled?'] },
      ],
    },
  ],
  sources: [
    'Pacioli, L. (1494). *Summa de arithmetica, geometria, proportioni et proportionalita* (the treatise on double-entry bookkeeping).',
    'Weygandt, J. J., Kimmel, P. D. & Kieso, D. E. *Financial Accounting* (IFRS edition). Wiley.',
    'IFRS Foundation. *Conceptual Framework for Financial Reporting* (2018): definitions of assets, liabilities and equity.',
    'Accounting Standards Council Singapore: SFRS(I) Conceptual Framework (asc.gov.sg).',
  ],
  related: ['accounting/financial-accounting/financial-statements', 'accounting/financial-accounting/accruals-and-adjustments', 'accounting/start-here'],
}

export default guide
