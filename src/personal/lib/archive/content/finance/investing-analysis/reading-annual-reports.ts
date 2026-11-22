import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An annual report is written by the company, for shareholders, under rules designed to make it truthful, and it is full of information that most investors never read. The front section is marketing; the back section, the financial statements and their notes, is where the facts and the warnings are. Reading efficiently means knowing where to look first (the auditor’s report, the cash-flow statement and the notes on revenue, debt, related parties and contingencies), what to compare with what (profit with cash, receivables with sales) and what a red flag looks like. This guide gives a reading order, a list of tests with formulas including the Altman Z-score with a worked example, and tells you where to find reports for Singapore-listed companies (SGX announcements) and US companies (SEC EDGAR).',
  nutshell: [
    'Read in this order: **auditor’s report → cash-flow statement → balance sheet → income statement → notes → management discussion → front section**.',
    'The **auditor’s opinion** (clean, qualified, adverse, disclaimer), the **key audit matters** and any **going-concern** paragraph show where the risks lie.',
    'Test **earnings quality**: operating cash flow against net income, growth in receivables and inventory against sales, and changes in accounting policy.',
    'The **notes** carry the detail: revenue recognition, debt maturities, leases, related-party transactions, contingent liabilities, subsequent events.',
    '**Altman Z-score** combines five ratios to estimate distress risk: above 2.99 is "safe", below 1.81 "distress", between them the grey zone.',
  ],
  sections: [
    {
      id: 'order',
      title: 'Where to look, in order',
      lead: 'The back before the front.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. The auditor’s report', body: 'Is the opinion unmodified? Is there an emphasis of matter or a material uncertainty about going concern? What are the key audit matters (the areas the auditor found most difficult)?' },
            { title: '2. The cash-flow statement', body: 'Does operating cash flow cover capital expenditure and dividends? Is the company borrowing to pay dividends or buying back shares with debt?' },
            { title: '3. The balance sheet', body: 'Cash, debt and its maturity, receivables, inventory, intangible assets and goodwill: what would happen if profits fell?' },
            { title: '4. The income statement', body: 'Revenue, gross margin, operating margin, one-off items; a series of five years.' },
            { title: '5. The notes', body: 'Accounting policies, revenue recognition, segment results, debt terms, leases, contingent liabilities, related-party transactions and post-balance-sheet events.' },
            { title: '6. Management discussion and the chairman’s letter', body: 'Compare what management says with the numbers; note the language when things go badly.' },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'SGX filings', tag: 'Singapore', body: 'Annual reports, quarterly or half-year results (SGX-listed companies have reported half-yearly for many, with quarterly requirements for some), announcements of material events and director dealings are on SGX’s company announcement pages (sgx.com).' },
            { title: 'SEC EDGAR', tag: 'United States', body: 'Form 10-K (annual), 10-Q (quarterly), 8-K (events) and the proxy statement (DEF 14A) with executive pay: sec.gov/edgar.' },
            { title: 'Other sources', tag: 'beyond the report', body: 'Results presentations, earnings-call transcripts, prospectuses, the company’s bond documents and, for Singapore companies, ACRA filings.' },
            { title: 'Read the changes', tag: 'differences', body: 'Compare this year’s report with last year’s: new risk factors, changed policies and moved goalposts are visible in the differences.' },
          ],
        },
      ],
    },
    {
      id: 'tests',
      title: 'Tests and red flags',
      lead: 'Formulae that find the questions.',
      blocks: [
        {
          t: 'table',
          head: ['Test', 'How', 'Warning sign'],
          rows: [
            ['Cash conversion', 'Operating cash flow ÷ net income over 3–5 years', 'Persistently below 70%; widening gap'],
            ['Receivables', 'Growth in receivables against growth in revenue', 'Receivables growing much faster than sales'],
            ['Inventory', 'Inventory days over time', 'Rising days with flat sales: unsold stock, possible write-down'],
            ['Capitalised costs', 'Development costs and other costs added to the balance sheet', 'A rising share of costs capitalised: flatters profit'],
            ['Debt maturity', 'Debt due within a year against cash and operating cash flow', 'Short-term debt exceeding cash: refinancing risk'],
            ['Related parties', 'Notes on transactions with directors and affiliates', 'Large or growing transactions on unclear terms'],
            ['Accounting changes', 'Changes in policies or estimates (useful lives, revenue recognition)', 'Changes that raise profit just as results disappoint'],
            ['Auditor changes', 'Resignations, disagreements, late filings', 'A resignation with an unclear explanation'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`Z=1.2X_1+1.4X_2+3.3X_3+0.6X_4+1.0X_5`,
          caption: 'The Altman Z-score (for public manufacturing companies): a weighted sum of five ratios.',
          where: [{ sym: 'X_1', def: 'working capital ÷ total assets' }, { sym: 'X_2', def: 'retained earnings ÷ total assets' }, { sym: 'X_3', def: 'EBIT ÷ total assets' }, { sym: 'X_4', def: 'market value of equity ÷ total liabilities' }, { sym: 'X_5', def: 'sales ÷ total assets' }],
          syntax: [{ sym: '3.3X_3', say: 'profitability carries the largest weight. Effect: a firm earning well on its assets has a high score. Why: operating returns are the strongest predictor of avoiding failure in the original sample.' }],
          worked: {
            title: 'A company with X = (0.25, 0.15, 0.12, 1.5, 0.9)',
            steps: ['Z = 1.2 × 0.25 + 1.4 × 0.15 + 3.3 × 0.12 + 0.6 × 1.5 + 1.0 × 0.9.', '= 0.30 + 0.21 + 0.396 + 0.90 + 0.90 = 2.71.', 'Between 1.81 and 2.99: the grey zone.'],
            answer: 'A score in the grey zone is not a warning of failure; it says to look more closely at the weaker ratios. The model was fitted to US manufacturers in the 1960s and later versions exist for services and emerging markets: use it as a prompt, not a verdict.',
          },
        },
        { t: 'callout', tone: 'warn', title: 'Red flags that deserve more digging', text: 'A going-concern warning; resignations of the auditor or CFO; profits with no cash; heavy use of adjusted or "non-GAAP" earnings with growing add-backs; rising short-term debt against falling cash; large related-party dealings; revenue that rises at quarter-ends; a complex group structure without a business reason. Famous failures (Enron, Wirecard, Luckin Coffee) all showed several of these signs in advance.' },
      ],
    },
  ],
  sources: [
    'Schilit, H. & Perler, J. (2018). *Financial Shenanigans* (4th ed.). McGraw-Hill.',
    'Altman, E. I. (1968). Financial ratios, discriminant analysis and the prediction of corporate bankruptcy. *Journal of Finance*, 23(4), 589–609.',
    'Singapore Exchange: company announcements and listing rules (sgx.com); US SEC: EDGAR database (sec.gov).',
    'Penman, S. H. (2013). *Financial Statement Analysis and Security Valuation*. McGraw-Hill.',
  ],
  related: ['accounting/financial-accounting/financial-statements', 'accounting/financial-accounting/standards-audit-and-governance', 'finance/fundamental/statements'],
}

export default guide
