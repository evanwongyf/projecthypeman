import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every listed company publishes three financial statements. The **income statement** shows profit over a period, the **balance sheet** shows what it owns and owes at a moment, and the **cash flow statement** shows where cash actually came from and went. We will work through all three for one made-up company, **Kopi & Co**, a chain of coffee shops; the same numbers are used in the ratio, DuPont, multiples and DCF guides.',
  nutshell: [
    'Income statement: revenue minus costs equals profit (over a year or quarter).',
    'Balance sheet: **assets = liabilities + equity**, always.',
    'Cash flow statement: operating, investing and financing cash flows; profit is not the same as cash.',
    'The three statements link: profit flows into equity; the change in cash on the balance sheet equals the net cash flow.',
    'Read the notes: that is where the important details hide.',
  ],
  sections: [
    {
      id: 'income',
      title: 'The income statement',
      blocks: [
        {
          t: 'table',
          head: ['Kopi & Co, year ended 31 December', '$ millions'],
          rows: [
            ['Revenue', '500'],
            ['Cost of goods sold (coffee, milk, cups)', '(200)'],
            ['**Gross profit**', '**300**'],
            ['Operating expenses (staff, rent, marketing)', '(180)'],
            ['Depreciation and amortisation', '(20)'],
            ['**Operating profit (EBIT)**', '**100**'],
            ['Interest expense', '(10)'],
            ['**Profit before tax**', '**90**'],
            ['Tax at 20%', '(18)'],
            ['**Net income**', '**72**'],
            ['Shares outstanding', '100 million'],
            ['**Earnings per share (EPS)**', '**$0.72**'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\underbrace{\text{Revenue} - \text{COGS}}_{\text{Gross profit}} - \text{OpEx} - \text{D\&A} = \underbrace{\text{EBIT}}_{\text{operating profit}},\qquad \text{EBIT} - \text{Interest} - \text{Tax} = \text{Net income}`,
          syntax: [
            { sym: String.raw`\underbrace{\ldots}_{\text{label}}`, say: 'The brace is only a caption naming the subtotal. It tells you nothing to compute.' },
            { sym: String.raw`\text{D\&A}`, say: 'Read "D and A": depreciation and amortisation, the yearly write-down of long-lived assets. The ampersand is just the word "and".' },
            { sym: String.raw`-`, say: 'Read each minus as "less". Starting from revenue, subtract one cost category at a time, top to bottom.' },
          ],
          worked: {
            title: 'Harbour Foods',
            steps: [
              String.raw`Given ($m): revenue 2,000; COGS 1,200; operating expenses 540; D&A 60; interest 20; tax rate 25%.`,
              String.raw`Gross profit: \(2000 - 1200 = 800\).`,
              String.raw`EBIT: \(800 - 540 - 60 = 200\).`,
              String.raw`Pre-tax profit: \(200 - 20 = 180\); tax \(0.25 \times 180 = 45\).`,
              String.raw`Net income: \(180 - 45 = 135\).`,
            ],
            answer: String.raw`Of every $100 of sales, $40 survives the goods, $10 survives the overheads and $6.75 reaches shareholders.`,
          },
          caption: 'The same subtraction as the table above, written as one chain: each line is what is left after one more category of cost is removed. Where the chain shrinks fastest tells you where the money is going, a big drop from gross profit to EBIT means heavy operating costs, a big drop from EBIT to net income means heavy interest or tax.',
        },
        {
          t: 'plot',
          title: 'Where each $100 of revenue goes',
          x: [0, 7],
          y: [0, 105],
          yLabel: '$ per $100 of revenue',
          data: [{ pts: [[0.5, 100], [1.5, 100], [1.5, 60], [2.5, 60], [2.5, 24], [3.5, 24], [3.5, 20], [4.5, 20], [4.5, 18], [5.5, 18], [5.5, 14.4], [6.5, 14.4]], label: 'Running total' }],
          points: [
            { x: 1, y: 100, label: 'Revenue 100' },
            { x: 2, y: 60, label: 'Gross 60' },
            { x: 3, y: 24, label: 'After opex 24' },
            { x: 4, y: 20, label: 'EBIT 20' },
            { x: 5, y: 18, label: 'Pre-tax 18' },
            { x: 6, y: 14.4, label: 'Net 14.4' },
          ],
          caption: 'A step chart (like a waterfall) of costs taking their share. Kopi keeps $14.40 of every $100 of sales as profit.',
        },
      ],
    },
    {
      id: 'balance',
      title: 'The balance sheet',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Assets} = \text{Liabilities} + \text{Equity}`,
          syntax: [
            { sym: String.raw`=`, say: 'The equals sign here is a rule, not a calculation: both sides are always the same total. If you know any two, you can find the third.' },
          ],
          worked: {
            title: 'Bean Cart, a start-up coffee cart',
            steps: [
              String.raw`The owner puts in $40,000 and borrows $60,000: cash is $100,000, liabilities $60,000, equity $40,000. Check: \(100{,}000 = 60{,}000 + 40{,}000\).`,
              String.raw`Buys equipment for $70,000 cash: cash falls to $30,000, equipment is $70,000. Assets are still \(30{,}000 + 70{,}000 = 100{,}000\).`,
              String.raw`Earns $12,000 of profit in cash: cash rises to $42,000, so assets are \(42{,}000 + 70{,}000 = 112{,}000\).`,
              String.raw`The profit is kept, so equity becomes \(40{,}000 + 12{,}000 = 52{,}000\). Check: \(60{,}000 + 52{,}000 = 112{,}000\).`,
            ],
            answer: String.raw`The two sides stayed equal at every step: assets grew by $12,000 and so did equity, because profit belongs to the owners.`,
          },
          caption: 'Everything a company owns was paid for either by borrowing (liabilities) or by its owners (equity, including profits kept over the years).',
        },
        {
          t: 'table',
          head: ['Assets', '$m', 'Liabilities and equity', '$m'],
          rows: [
            ['Cash', '60', 'Accounts payable', '40'],
            ['Accounts receivable', '40', 'Short-term debt', '30'],
            ['Inventory', '50', '**Current liabilities**', '**70**'],
            ['**Current assets**', '**150**', 'Long-term debt', '130'],
            ['Property, plant and equipment', '350', '**Total liabilities**', '**200**'],
            ['', '', 'Shareholders’ equity', '300'],
            ['**Total assets**', '**500**', '**Total liabilities and equity**', '**500**'],
          ],
          caption: '500 = 200 + 300. Current items turn into cash (or must be paid) within a year.',
        },
      ],
    },
    {
      id: 'cash',
      title: 'The cash flow statement',
      blocks: [
        {
          t: 'table',
          head: ['Cash flows', '$m'],
          rows: [
            ['Net income', '72'],
            ['Add back depreciation (a cost, but not a cash payment)', '20'],
            ['Increase in working capital (more stock and receivables)', '(12)'],
            ['**Cash from operations (CFO)**', '**80**'],
            ['Capital expenditure (new shops, machines)', '(35)'],
            ['**Cash from investing**', '**(35)**'],
            ['Dividends paid', '(20)'],
            ['Debt repaid', '(10)'],
            ['**Cash from financing**', '**(30)**'],
            ['**Net change in cash**', '**15**'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{Free cash flow (to equity)} = \text{CFO} - \text{CapEx} = 80 - 35 = 45`,
          syntax: [
            { sym: String.raw`\text{CFO}`, say: 'Read "C-F-O": cash flow from operations, the first subtotal on the cash flow statement.' },
            { sym: String.raw`80 - 35 = 45`, say: 'Subtraction in the order written: operating cash, less what was spent on equipment.' },
          ],
          worked: {
            title: 'Harbour Foods',
            steps: [
              String.raw`Given: net income $135m, D&A $60m, increase in working capital $15m, CapEx $70m.`,
              String.raw`CFO: \(135 + 60 - 15 = 180\).`,
              String.raw`Free cash flow: \(180 - 70 = 110\).`,
              String.raw`Cash conversion: \(110/135 = 0.815 = 81.5\%\) of net income.`,
            ],
            answer: String.raw`$110m of free cash flow, about 81% of reported profit, is available to pay dividends, buy back shares or repay debt.`,
          },
          caption: 'Free cash flow is what is left for owners after keeping the business running and growing: the number value investors care about most.',
        },
        {
          t: 'metric',
          name: 'free cash flow (FCF)',
          shows: 'The real, spendable cash a business generates after paying for everything it needs to keep running and growing, the cash actually available to pay dividends, buy back shares, pay down debt, or sit in the bank, as opposed to the accounting profit figure, which includes non-cash items and estimates.',
          eli5: 'Your salary (like net income) might say you earned $5,000 this month. But after rent, groceries, and fixing your car, what\'s actually left in your account to save or spend freely (like free cash flow) could be very different, maybe $800, maybe negative if the car repair was expensive. Free cash flow is a company\'s version of "what\'s actually left over".',
          higher: 'The business is generating more real spendable cash than it needs to maintain and grow itself. Strong, growing free cash flow lets a company pay and raise dividends, buy back shares, pay down debt, or fund acquisitions without needing to borrow or issue new shares, it is often seen as a sign of a high-quality, self-sustaining business.',
          lower: 'Little or no cash left after running and investing in the business, the company may need to borrow or raise new equity to fund dividends, growth, or even operations. This is not automatically bad: many fast-growing companies deliberately run low or negative free cash flow by reinvesting heavily, but it does mean the company depends on continued access to outside capital.',
          typical: 'Mature, profitable companies often convert 60–100% of net income into free cash flow; a company reporting healthy net income but weak or negative free cash flow for several years running is a classic accounting red flag (see [quality and moats](@finance/fundamental/quality)) worth investigating before trusting the reported profit.',
        },
        { t: 'callout', tone: 'warn', title: 'Profit is an opinion, cash is a fact', text: 'Accounting profit involves estimates (depreciation, when to recognise revenue). Cash is harder to fake. A company reporting rising profits but falling operating cash flow deserves a closer look.' },
      ],
    },
    {
      id: 'links',
      title: 'How the statements link',
      blocks: [
        {
          t: 'cycle',
          items: [
            { name: 'Income statement', body: 'Net income for the year: 72.' },
            { name: 'Equity', body: 'Retained earnings rise by net income minus dividends: 72 − 20 = 52.' },
            { name: 'Cash flow statement', body: 'Starts from net income, adjusts for non-cash items, adds investing and financing: +15 cash.' },
            { name: 'Balance sheet', body: 'Cash at the end equals cash at the start plus the net change.' },
          ],
          caption: 'Next year’s statements start from this year’s ending balance sheet.',
        },
        { t: 'callout', tone: 'fact', title: 'Double entry is 500 years old', text: 'Luca Pacioli described double-entry bookkeeping, where every transaction is recorded twice so the books balance, in 1494, in the same book that contains an early version of the rule of 72.' },
      ],
    },
  ],
  sources: ['Penman, S. H. (2013). *Financial Statement Analysis and Security Valuation* (5th ed.). McGraw-Hill.', 'Koller, T., Goedhart, M., & Wessels, D. (2020). *Valuation* (7th ed.). Wiley (McKinsey & Company).'],
  related: ['finance/fundamental/ratios', 'finance/fundamental/dcf', 'finance/fundamental/quality'],
}

export default guide
