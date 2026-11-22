import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When has a company earned its revenue? When the contract is signed, the goods are shipped, the customer has used them for a month, or the cash arrives? The answer sets reported sales and profit, and it has been the source of many accounting scandals. IFRS 15 (SFRS(I) 15 in Singapore) answers with a five-step model: revenue is recognised as control of goods or services passes to the customer. The cash-flow statement then shows the cash side, which cannot be manipulated by timing choices in the same way. This guide explains the model, the direct and indirect methods of presenting cash flow, free cash flow, and why profitable firms can still run out of cash.',
  nutshell: [
    '**Five steps** of IFRS 15: identify the **contract**, the **performance obligations**, the **transaction price**, **allocate** the price and **recognise** revenue as each obligation is satisfied.',
    'Revenue is recognised **over time** (subscriptions, construction) or at a **point in time** (a sale of goods) as **control** passes to the customer.',
    'The **cash-flow statement** splits cash into **operating, investing and financing**; the **indirect method** starts from profit and adjusts for non-cash items and working capital.',
    '**Free cash flow** = operating cash flow − capital expenditure: the cash left for lenders and owners.',
    'Rapid growth consumes **working capital**; a firm can be profitable and still **insolvent**.',
  ],
  sections: [
    {
      id: 'ifrs15',
      title: 'The five-step revenue model',
      lead: 'From contract to revenue.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. Identify the contract', body: 'An agreement that creates enforceable rights and obligations, with approved terms, identifiable payment terms, commercial substance and probable collection.' },
            { title: '2. Identify the performance obligations', body: 'The distinct goods or services promised: a phone and a two-year service plan may be separate obligations.' },
            { title: '3. Determine the transaction price', body: 'The amount the firm expects to receive, adjusted for discounts, rebates, returns, variable consideration (estimated carefully) and the time value of money.' },
            { title: '4. Allocate the price', body: 'Split the total across obligations in proportion to their stand-alone selling prices.' },
            { title: '5. Recognise revenue', body: 'When (or as) each obligation is satisfied, that is, when control passes: at a point in time, or over time if the customer receives and consumes the benefit as the firm performs, or the firm’s work creates an asset the customer controls.' },
          ],
        },
        {
          t: 'math',
          plain: 'When a company sells several things for one price (a phone and a service plan), accounting rules say each item must get its fair share of the total price, in proportion to what each would cost on its own. That share decides how much revenue is recorded now (for the phone) and how much over time (for the plan).',
          tex: String.raw`P_i=P\times\frac{s_i}{\sum_j s_j}`,
          caption: 'Allocating a bundle’s price in proportion to stand-alone selling prices.',
          where: [{ sym: 'P', def: 'the transaction price of the bundle' }, { sym: 's_i', def: 'the stand-alone selling price of obligation i' }],
          syntax: [{ sym: 's_i/\\sum_j s_j', say: 'Take each item\'s stand-alone price \\(s_i\\) and divide by the total of all stand-alone prices \\(\\sum_j s_j\\) to get its share, then multiply by the bundle price \\(P\\). Example: phone \\(900/(900+1{,}200)=42.86\\%\\); \\(42.86\\%\\times1{,}680=\\text{S\\$}720\\). The plan gets the other 57.14%, S$960. If the bundle is discounted, every item is discounted by the same proportion, so the discount is shared fairly instead of being dumped on one item.' }, { sym: '\\sum_j s_j', say: 'The sigma means "add up all the stand-alone prices", whatever the number of items: \\(900+1{,}200=2{,}100\\). Adding more items makes this total bigger and so makes each existing item\'s share smaller. The letter \\(j\\) is just the counter that runs through the items.' }],
          worked: {
            title: 'A phone bundled with a plan',
            steps: ['Phone stand-alone price S$900; two-year plan stand-alone price S$1,200 (S$50 a month); the customer pays S$1,680 in total for the bundle.', 'Phone share = 900/2,100 = 42.86% → S$720 recognised at delivery.', 'Plan share = 1,200/2,100 = 57.14% → S$960 recognised over 24 months = S$40 a month.'],
            answer: 'Revenue of S$720 is booked on day one and S$40 a month afterwards, whatever the customer’s payment schedule; if the customer pays in equal monthly instalments, the timing difference sits as a contract asset or liability on the balance sheet.',
          },
        },
        { t: 'callout', tone: 'warn', title: 'Where manipulation happens', text: 'Channel stuffing (shipping more than customers need), side agreements that allow returns, bill-and-hold sales, recognising multi-year contracts up front and sham transactions with related parties. Auditors treat revenue recognition as a presumed fraud risk.' },
      ],
    },
    {
      id: 'cfs',
      title: 'The cash-flow statement',
      lead: 'Operating, investing and financing.',
      blocks: [
        {
          t: 'table',
          head: ['Section', 'Examples of inflows', 'Examples of outflows'],
          rows: [
            ['Operating', 'Cash from customers', 'Suppliers, wages, tax, interest (depending on policy)'],
            ['Investing', 'Sale of equipment, investments', 'Purchase of equipment, acquisitions'],
            ['Financing', 'New shares, new loans', 'Dividends, loan repayments, share buy-backs'],
          ],
        },
        {
          t: 'math',
          plain: 'Profit is not cash. To turn profit into the cash a business generated from its operations, add back costs that did not use cash (like depreciation) and subtract the cash tied up when customers owe you more or you hold more stock. Free cash flow then subtracts spending on long-lived assets, giving what is left for lenders and owners.',
          tex: String.raw`CFO = NI + D - \Delta NWC,\qquad FCF = CFO - CapEx`,
          caption: 'The indirect method: start with profit, add back non-cash charges and subtract the growth in working capital.',
          where: [{ sym: 'NI', def: 'net income (profit after tax)' }, { sym: 'D', def: 'depreciation and other non-cash charges' }, { sym: '\\Delta NWC', def: 'increase in net working capital (receivables + inventory − payables)' }],
          syntax: [{ sym: '-\\Delta NWC', say: '\\(\\Delta NWC\\) is the increase in net working capital: receivables plus inventory minus payables. It is subtracted because growth in receivables and stock means cash has gone out but profit has not recorded it. Example: receivables +70,000 and inventory +40,000 minus payables +20,000 gives 90,000, so \\(CFO=100{,}000+30{,}000-90{,}000=40{,}000\\). Faster growth makes this term bigger and can push cash flow down even while profit rises.' }, { sym: 'CFO=NI+D', say: 'Start with net income \\(NI\\) and add back depreciation \\(D\\), a cost that reduced profit but did not use cash. Example: 100,000 + 30,000 = 130,000 before any working-capital effect. Larger depreciation raises this figure relative to profit, which is why cash flow can look healthier than profit for asset-heavy firms.' }, { sym: 'FCF=CFO-CapEx', say: 'Free cash flow is operating cash flow minus capital expenditure (money spent on equipment and buildings). Example: \\(40{,}000-50{,}000=-\\text{S\\$}10{,}000\\). A negative result means the business spent more than it generated and must borrow or raise equity to cover it. A positive result is cash available to pay lenders, pay dividends or buy back shares.' }],
          worked: {
            title: 'Profit S$100,000, cash flow low',
            steps: ['Net income S$100,000; depreciation S$30,000; receivables up S$70,000; inventory up S$40,000; payables up S$20,000.', '\\(\\Delta NWC = 70+40-20 = 90{,}000\\); CFO = 100 + 30 − 90 = S$40,000.', 'Capital expenditure S$50,000 gives FCF = −S$10,000.'],
            answer: 'A profitable firm has negative free cash flow because growth ties up working capital; unless it can borrow or raise equity, it may be unable to pay its bills.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Direct method', tag: 'cash received and paid', body: 'Lists actual cash receipts and payments. Intuitive, and encouraged by IAS 7, but harder to produce from accrual ledgers.' },
            { title: 'Indirect method', tag: 'from profit', body: 'Reconciles profit to cash flow. Most companies use it because it shows why profit and cash differ.' },
            { title: 'Free cash flow', tag: 'a use of cash', body: 'Cash available to lenders and owners after maintaining and expanding the asset base. Used in valuation (see the finance shelf).' },
            { title: 'Quality of earnings', tag: 'a check', body: 'Operating cash flow persistently below net income is a warning sign; compare over several years.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'IASB. IFRS 15 Revenue from Contracts with Customers; IAS 7 Statement of Cash Flows (ifrs.org).',
    'Accounting Standards Council Singapore: SFRS(I) 15 and SFRS(I) 1-7 (asc.gov.sg).',
    'Schilit, H. & Perler, J. *Financial Shenanigans*. McGraw-Hill.',
    'Penman, S. H. *Financial Statement Analysis and Security Valuation*. McGraw-Hill.',
  ],
  related: ['accounting/financial-accounting/financial-statements', 'accounting/financial-accounting/accruals-and-adjustments', 'accounting/financial-accounting/standards-audit-and-governance'],
}

export default guide
