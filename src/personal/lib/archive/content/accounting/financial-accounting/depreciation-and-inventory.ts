import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Two of the largest judgements in a set of accounts are how fast to write off long-lived assets and how to value stock. A machine that lasts ten years should not be charged to a single year; a warehouse of goods bought at different prices needs a rule for which cost leaves with each sale. Depreciation spreads the cost of an asset over its useful life; inventory methods decide which purchase costs are matched with sales. Both change reported profit without changing cash, which is why analysts look closely at them. This guide covers straight-line, declining-balance and sum-of-years’-digits depreciation, impairment, and FIFO, weighted-average and LIFO inventory, with two live calculators.',
  nutshell: [
    '**Depreciation** allocates **cost − residual value** over the asset’s **useful life**; it is an allocation, not a measure of market value, and it uses no cash.',
    '**Straight-line**: equal amount each year. **Declining balance**: a fixed percentage of the remaining book value, so charges are higher early.',
    '**Net book value** = cost − accumulated depreciation; **impairment** writes it down if it exceeds the recoverable amount.',
    '**Inventory** methods: **FIFO** (first in, first out), **weighted average**, and **LIFO** (not allowed under IFRS or SFRS(I)).',
    'In rising prices **FIFO shows the higher profit** and higher closing stock; **LIFO** (where permitted) the lower profit.',
  ],
  sections: [
    {
      id: 'dep',
      title: 'Depreciation methods',
      lead: 'Spreading cost over use.',
      blocks: [
        {
          t: 'math',
          plain: 'A machine gives value for many years, so charging its whole cost to the year you buy it would make that year look terrible and later years look too good. Depreciation spreads the cost (less what you expect to sell it for at the end) over its useful life. Different methods spread it differently: evenly, more at the start, or on a falling staircase. The total written off is always the same; only the timing changes.',
          tex: String.raw`D_{\text{SL}}=\frac{C-S}{n},\qquad D_t^{\text{DB}}=\frac{2}{n}\,\text{NBV}_{t-1},\qquad D_t^{\text{SYD}}=\frac{(n-t+1)}{n(n+1)/2}\,(C-S)`,
          caption: 'Three depreciation charges for year t of an asset costing C, residual value S, useful life n years.',
          where: [{ sym: 'C', def: 'cost' }, { sym: 'S', def: 'estimated residual (scrap) value' }, { sym: 'n', def: 'useful life in years' }, { sym: '\\text{NBV}_{t-1}', def: 'net book value at the start of the year' }],
          syntax: [{ sym: '\\tfrac{2}{n}\\text{NBV}_{t-1}', say: 'The straight-line method takes the cost \\(C\\) minus the scrap value \\(S\\) and divides by the number of years \\(n\\). With \\(C=50{,}000\\), \\(S=5{,}000\\) and \\(n=5\\): \\((50{,}000-5{,}000)/5=\\text{S\\$}9{,}000\\) every year. A higher cost raises each year\'s charge; a longer life or a higher scrap value lowers it. Everything is equal, which makes the method simple and predictable.' }, { sym: '\\text{declining balance}', say: 'In the declining-balance method each year\'s charge is a fixed fraction of the book value that is left: double the straight-line rate, \\(\\tfrac{2}{n}=\\tfrac{2}{5}=40\\%\\). Year 1: \\(0.40\\times50{,}000=\\text{S\\$}20{,}000\\); year 2: \\(0.40\\times30{,}000=\\text{S\\$}12{,}000\\); year 3: \\(0.40\\times18{,}000=\\text{S\\$}7{,}200\\). Because it is a percentage of a shrinking number, the charge falls each year, so most of the cost is written off early, which suits assets such as vehicles that lose value fastest when new.' }, { sym: '\\text{SYD}', say: 'Sum-of-the-years\'-digits: for a 5-year life the digits 5+4+3+2+1 add to 15, so year 1 takes \\(\\tfrac{5}{15}\\) of the depreciable amount and year 2 takes \\(\\tfrac{4}{15}\\). With S$45,000: year 1 \\(=15{,}000\\), year 2 \\(=12{,}000\\). The fractions add to 1, so the whole S$45,000 is written off; it is front-loaded but less sharply than declining balance.' }, { sym: '\\text{NBV}_{t-1}', say: 'NBV is net book value: what the asset is still carried at on the balance sheet, cost minus all depreciation so far. The subscript \\(t-1\\) means "at the end of the previous year", which is the starting value for year \\(t\\). After year 1 of the example it is \\(50{,}000-20{,}000=30{,}000\\), so year 2\'s charge is \\(0.4\\times30{,}000\\). The book value falls each year and can never go below the scrap value.' }],
          worked: {
            title: 'A S$50,000 machine, residual S$5,000, five years',
            steps: ['Straight-line: (50,000 − 5,000)/5 = S$9,000 a year.', 'Double-declining: year 1 = 2/5 × 50,000 = S$20,000; year 2 = 0.4 × 30,000 = S$12,000; year 3 = 0.4 × 18,000 = S$7,200; then limited so NBV stops at S$5,000.', 'Sum of years’ digits: digits sum to 15; year 1 = 5/15 × 45,000 = S$15,000; year 2 = S$12,000.'],
            answer: 'All methods write off the same total of S$45,000; they differ in timing. Declining methods lower early profit and tax-accounting profit, and suit assets whose usefulness drops fastest.',
          },
        },
        { t: 'acct-viz', viz: 'depreciation' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Estimates matter', tag: 'judgement', body: 'Useful life and residual value are estimates reviewed each year; lengthening a life raises profit without any change in the business.' },
            { title: 'Impairment', tag: 'IAS 36', body: 'If an asset’s carrying amount exceeds the higher of its fair value less costs of disposal and its value in use, it is written down. Goodwill is tested every year.' },
            { title: 'Components', tag: 'detail', body: 'Parts of an asset with different lives (an aircraft’s engines and airframe) are depreciated separately.' },
            { title: 'Tax differs', tag: 'see taxation', body: 'Tax law replaces accounting depreciation with capital allowances, at set rates, when computing taxable income.' },
          ],
        },
      ],
    },
    {
      id: 'inv',
      title: 'Inventory valuation',
      lead: 'Which cost leaves with the sale?',
      blocks: [
        {
          t: 'math',
          plain: 'To find the cost of the goods you actually sold, start with the stock you had, add what you bought, and take away what is still on the shelf. Whatever is left must have been sold. The only judgement is how to value the closing stock, because the same units can be bought at different prices and the order in which you assume they are sold changes the answer.',
          tex: String.raw`\text{COGS}=\text{Opening stock}+\text{Purchases}-\text{Closing stock}`,
          caption: 'Cost of goods sold, and the choice of method decides which unit costs enter closing stock and which enter COGS.',
          where: [{ sym: '\\text{COGS}', def: 'cost of goods sold: the expense matched with the revenue from sales' }],
          syntax: [{ sym: '-\\text{Closing stock}', say: 'Subtracting the closing stock removes the cost of goods you still hold, because unsold goods are an asset, not yet an expense. Example: opening stock 0, purchases S$3,700, and closing stock valued at S$2,100 under FIFO gives \\(\\text{COGS}=0+3{,}700-2{,}100=\\text{S\\$}1{,}600\\). If the closing stock is valued higher, COGS falls and profit rises by the same amount; if lower, COGS rises and profit falls. That is why the choice of stock-valuation method moves reported profit without any cash changing hands.' }, { sym: '\\text{Opening stock}+\\text{Purchases}', say: 'Add the stock you started with to everything you bought in the period to get the total goods available for sale. In the example, \\(0+3{,}700=\\text{S\\$}3{,}700\\) (300 units). More opening stock or more purchases raise the total available, and so raise COGS unless closing stock rises by the same amount.' }],
          worked: {
            title: 'Three batches, 150 units sold',
            steps: ['Purchases: 100 units at S$10, 100 at S$12, 100 at S$15 = S$3,700 for 300 units.', 'FIFO: COGS = 100 × 10 + 50 × 12 = S$1,600; closing stock = 50 × 12 + 100 × 15 = S$2,100.', 'LIFO: COGS = 100 × 15 + 50 × 12 = S$2,100; closing stock = S$1,600. Weighted average: 3,700/300 = S$12.33; COGS = S$1,850.'],
            answer: 'With rising prices, FIFO gives the highest profit: S$500 more than LIFO on revenue of S$3,750 (150 units at S$25). The total cost of S$3,700 is the same; only the split between expense and asset differs.',
          },
        },
        { t: 'acct-viz', viz: 'inventory' },
        {
          t: 'table',
          head: ['Method', 'Idea', 'Prices rising: profit', 'Allowed under IFRS / SFRS(I)'],
          rows: [
            ['FIFO', 'Oldest cost goes to COGS first', 'Highest', 'Yes'],
            ['Weighted average', 'Average cost of all units available', 'Middle', 'Yes'],
            ['LIFO', 'Newest cost goes to COGS first', 'Lowest', 'No (permitted in the US under US GAAP)'],
            ['Net realisable value rule', 'Inventory is shown at the lower of cost and net realisable value', 'Writes down damaged or obsolete stock', 'Required'],
          ],
        },
      ],
    },
  ],
  sources: [
    'IASB. IAS 16 Property, Plant and Equipment; IAS 36 Impairment of Assets; IAS 2 Inventories (ifrs.org).',
    'Accounting Standards Council Singapore: SFRS(I) 1-16, 1-36 and 1-2 (asc.gov.sg).',
    'Weygandt, J. J., Kimmel, P. D. & Kieso, D. E. *Financial Accounting* (IFRS edition). Wiley.',
    'Financial Accounting Standards Board (US GAAP): inventory costing methods, ASC 330.',
  ],
  related: ['accounting/financial-accounting/accruals-and-adjustments', 'accounting/taxation/singapore-corporate-tax', 'accounting/financial-accounting/financial-statements'],
}

export default guide
