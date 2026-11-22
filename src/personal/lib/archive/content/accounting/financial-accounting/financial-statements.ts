import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Three statements tell the story of a business. The income statement says how much it earned and spent over a period; the balance sheet says what it owned and owed at a moment; the cash-flow statement says where cash came from and went. They are three views of the same transactions, and they connect: profit from the income statement increases retained earnings on the balance sheet, and the change in cash on the cash-flow statement matches the change in cash on the balance sheet. This guide builds all three from one set of transactions and shows the links.',
  nutshell: [
    '**Income statement**: revenue − expenses = profit, for a **period**.',
    '**Balance sheet**: assets = liabilities + equity, at a **date**.',
    '**Cash-flow statement**: cash from **operating, investing and financing** activities, for a period.',
    'The links: **net profit → retained earnings**; **cash flow total → change in balance-sheet cash**.',
    'Read them together: profit without cash flow can hide trouble; a strong balance sheet can hide poor profit.',
  ],
  sections: [
    {
      id: 'three',
      title: 'What each statement shows',
      lead: 'Performance, position and cash.',
      blocks: [
        {
          t: 'table',
          head: ['Statement', 'Question', 'Period or date', 'Main lines'],
          rows: [
            ['Income statement (profit and loss)', 'Did the business make a profit?', 'A period (a year, a quarter)', 'Revenue, cost of sales, gross profit, operating expenses, interest, tax, net profit'],
            ['Balance sheet (statement of financial position)', 'What does it own and owe?', 'A date (year-end)', 'Assets (current, non-current), liabilities (current, non-current), equity'],
            ['Cash-flow statement', 'Where did cash come from and go?', 'A period', 'Operating, investing and financing cash flows; opening and closing cash'],
            ['Statement of changes in equity', 'How did the owners’ stake change?', 'A period', 'Profit, dividends, new shares, other movements'],
          ],
        },
        {
          t: 'math',
          plain: 'The three statements are three views of the same year. The income statement says how much profit was made; that profit is added to the owners\' retained earnings on the balance sheet; and the cash-flow statement explains why cash rose or fell, which can differ from profit. These three short equations are the links that keep the statements consistent with each other.',
          tex: String.raw`\text{Profit}=R-C-O-I-T,\qquad RE_{\text{end}}=RE_{\text{start}}+\text{Profit}-\text{Dividends},\qquad \Delta\text{Cash}=CFO+CFI+CFF`,
          caption: 'The links among the statements.',
          where: [{ sym: 'R,C,O,I,T', def: 'revenue, cost of sales, operating expenses, interest and tax' }, { sym: 'RE', def: 'retained earnings: accumulated profit not paid out' }, { sym: 'CFO,CFI,CFF', def: 'cash flow from operating, investing and financing activities' }],
          syntax: [{ sym: 'RE_{\\text{end}}', say: 'Retained earnings at the end equals what was retained at the start, plus this year\'s profit, minus dividends paid out. Example: \\(0+20{,}000-8{,}000=\\text{S\\$}12{,}000\\). A bigger profit raises retained earnings; a bigger dividend lowers it; a loss makes the profit term negative and shrinks it. Retained earnings are the part of equity that stays inside the business, which is why it appears on the balance sheet.' }, { sym: '\\text{Profit}=R-C-O-I-T', say: 'Profit is what is left of revenue after taking off each cost in turn: cost of sales \\(C\\), operating expenses \\(O\\), interest \\(I\\) and tax \\(T\\). With \\(R=200{,}000\\): \\(200{,}000-120{,}000-50{,}000-5{,}000-5{,}000=\\text{S\\$}20{,}000\\). Raising any cost lowers profit one for one; raising revenue raises it.' }, { sym: '\\Delta\\text{Cash}=CFO+CFI+CFF', say: 'The change in cash is the total of the three cash flows: operating (the business itself), investing (buying or selling assets) and financing (loans, shares, dividends). Example: \\(26{,}000-40{,}000+42{,}000=+\\text{S\\$}28{,}000\\). The Greek capital delta \\(\\Delta\\) means "the change in". A positive total means cash rose; a negative one means it fell, even if profit was positive.' }],
          worked: {
            title: 'Year-one statements for a small trader',
            steps: ['Revenue S$200,000; cost of sales S$120,000; operating expenses S$50,000; interest S$5,000; tax S$5,000. Profit = S$20,000.', 'Dividends S$8,000: retained earnings = 0 + 20,000 − 8,000 = S$12,000. Share capital S$50,000: equity = S$62,000.', 'Cash flow: operating +S$26,000 (profit 20,000 + depreciation 6,000), investing −S$40,000 (equipment), financing +S$42,000 (capital 50,000 − dividends 8,000); net change +S$28,000.'],
            answer: 'Closing cash is S$28,000, matching the balance sheet; equity is S$62,000; and the profit of S$20,000 appears in retained earnings. The three statements describe the same year from three angles.',
          },
        },
      ],
    },
    {
      id: 'bs',
      title: 'The balance sheet in detail',
      lead: 'Current versus non-current, and liquidity.',
      blocks: [
        {
          t: 'levels',
          caption: 'Assets are listed from the most liquid; liabilities from the soonest due.',
          items: [
            { name: 'Current assets', body: 'Cash, receivables, inventory, prepayments: expected to turn into cash within a year.' },
            { name: 'Non-current assets', body: 'Equipment, property, intangible assets, long-term investments: used over many years.' },
            { name: 'Current liabilities', body: 'Payables, accrued expenses, the next 12 months of loan repayments, taxes due.' },
            { name: 'Non-current liabilities', body: 'Long-term loans, bonds, lease liabilities, deferred taxes.' },
            { name: 'Equity', body: 'Share capital, retained earnings and reserves: the residual after liabilities.' },
          ],
        },
        {
          t: 'terms',
          items: [
            { term: 'Working capital', def: 'Current assets minus current liabilities; a measure of short-term cushion.' },
            { term: 'Current ratio', def: 'Current assets divided by current liabilities; below 1 means short-term claims exceed short-term resources.' },
            { term: 'Gearing (debt-to-equity)', def: 'Borrowings divided by equity; measures reliance on debt.' },
            { term: 'Return on equity', def: 'Net profit divided by average equity; profit per dollar the owners have invested.' },
          ],
        },
      ],
    },
    {
      id: 'read',
      title: 'Reading the statements together',
      lead: 'Questions the numbers answer.',
      blocks: [
        {
          t: 'table',
          head: ['Pattern', 'Possible meaning'],
          rows: [
            ['High profit, weak operating cash flow', 'Customers are slow to pay, inventory is building, or revenue is being recognised early'],
            ['Low profit, strong cash flow', 'Large non-cash charges such as depreciation, or timing; may be healthy'],
            ['Rising debt and falling equity', 'Losses or dividends funded by borrowing; check interest cover'],
            ['Profit growth with falling margins', 'Sales growth from discounts or rising costs'],
            ['Cash flow positive only from financing', 'The business depends on new money, not on its operations'],
          ],
        },
        { t: 'dodont', do: ['Compare several years and peers, not one set of numbers', 'Read the notes: policies, contingencies, related-party items', 'Check that profit turns into cash over time'], dont: ['Judge a business on profit alone', 'Assume balance-sheet values equal market values', 'Ignore off-balance-sheet commitments mentioned in the notes'] },
      ],
    },
  ],
  sources: [
    'IASB. IAS 1 Presentation of Financial Statements; IAS 7 Statement of Cash Flows (ifrs.org).',
    'Accounting Standards Council Singapore. SFRS(I) 1-1 and SFRS(I) 1-7 (asc.gov.sg).',
    'Penman, S. H. *Financial Statement Analysis and Security Valuation*. McGraw-Hill.',
    'Weygandt, J. J., Kimmel, P. D. & Kieso, D. E. *Financial Accounting* (IFRS edition). Wiley.',
  ],
  related: ['accounting/financial-accounting/double-entry', 'accounting/financial-accounting/revenue-and-cash-flow', 'finance/start-here'],
}

export default guide
