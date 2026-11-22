import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Where does money come from? Most people think the central bank prints it and banks lend out what savers deposit. The reality, as the Bank of England explained in 2014, is nearly the reverse: when a bank makes a loan, it creates a new deposit at the same moment, and money is created by lending. This guide explains the difference between base money and bank money, the textbook money multiplier and its limits (with a live lab), the true constraints on bank lending (capital, profitability, demand and regulation, not the supply of deposits), how the money supply is measured (M1, M2, M3), and how this fits Singapore’s monetary system.',
  nutshell: [
    '**Base money** (M0) is cash and bank reserves at the central bank; **broad money** (M2, M3) is mainly **bank deposits**, which make up over 90% of money people hold.',
    'When a bank lends, it **credits the borrower’s account**: assets (the loan) and liabilities (the deposit) rise together. **Loans create deposits**; reserves are found afterwards.',
    'The textbook **money multiplier** \\(m=1/r\\) describes the limit if banks lend a fixed fraction of reserves; in practice the multiplier is not a fixed number and reserves do not constrain lending in modern systems.',
    'Lending is constrained by **capital requirements**, **expected profitability**, **borrower demand**, **liquidity rules** and the **central bank’s price of reserves**.',
    'Repaying a loan **destroys** money; a bank can create deposits for a customer but cannot make them leave the banking system.',
  ],
  sections: [
    {
      id: 'story',
      title: 'The two stories',
      lead: 'Intermediation versus creation.',
      blocks: [
        {
          t: 'table',
          head: ['', 'The textbook story (loanable funds)', 'How it works in practice (credit creation)'],
          rows: [
            ['First step', 'Savers deposit; the bank holds some as reserves', 'The bank approves a loan and credits the borrower’s account'],
            ['Where the deposit comes from', 'Earlier savings', 'Created by the loan itself: a book entry'],
            ['What limits lending', 'The reserves from deposits', 'Capital, risk, profit, regulation and demand; reserves are supplied by the central bank on demand at a policy rate'],
            ['Role of the central bank', 'Controls the money supply by controlling reserves', 'Sets the price of reserves (interest rates) or the exchange rate; the quantity follows'],
            ['What deposits do', 'Fund loans', 'Are a by-product of lending; they matter for funding costs and liquidity'],
          ],
          caption: 'Bank of England (2014) Quarterly Bulletin, “Money creation in the modern economy”; Deutsche Bundesbank (2017) makes similar points.',
        },
        {
          t: 'example',
          title: 'A mortgage creates a deposit',
          lines: [
            { label: 'Before', text: 'Bank balance sheet: assets 100, liabilities 92, equity 8.' },
            { label: 'Loan made', text: 'The bank lends S$500,000 for a flat. It records a new asset (loan 500,000) and a new liability (the borrower’s deposit 500,000).' },
            { label: 'Spent', text: 'The borrower pays the seller. The deposit moves to the seller’s bank (and the first bank loses the deposit and a matching amount of reserves to the other bank).' },
            { label: 'Result', text: 'Money in the economy has risen by S$500,000 (a deposit that did not exist before). When the loan is repaid, an equal amount of deposits is extinguished.' },
            { label: 'Constraint', text: 'The bank needs enough capital for the new asset’s risk weight and enough liquid assets or access to funding to settle the payment. It does not need S$500,000 of pre-existing deposits.' },
          ],
        },
      ],
    },
    {
      id: 'mult',
      title: 'The money multiplier and its limits',
      lead: 'A geometric series, not a rule.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`D_{\text{total}}=D_0\big(1+(1-r)+(1-r)^2+\cdots\big)=\frac{D_0}{r},\qquad m=\frac1r,\qquad m=\frac{1+c}{r+c}\ \ (\text{with cash drain }c)`,
          caption: 'The simple multiplier: each round of lending redeposits (1 − r) of the previous round; with a cash-holding ratio c the multiplier is smaller.',
          where: [{ sym: 'D_0', def: 'the initial deposit' }, { sym: 'r', def: 'the reserve ratio (fraction of deposits kept in reserve)' }, { sym: 'c', def: 'the ratio of cash held by the public to deposits' }],
          syntax: [{ sym: '1/r', say: 'the limit of a geometric series. Effect: with a 10% reserve ratio, one dollar of reserves supports ten dollars of deposits. Why: each round re-lends 90% of the last, so the total is 1/(1−0.9) = 10 times the first.' }, { sym: '(1+c)/(r+c)', say: 'the multiplier with leakage. Effect: if the public keeps 20% of deposits in cash, with r = 10%, m = 1.2/0.3 = 4, far less than 10. Why: cash held outside banks does not return to be re-lent.' }],
          worked: {
            title: 'Initial deposit of S$1,000, reserve ratio 10%',
            steps: ['Round 1: bank keeps 100, lends 900. Round 2: the 900 is redeposited, bank keeps 90, lends 810. Round 3: 729…', 'Total deposits \\(1{,}000+900+810+729+\\cdots=1{,}000/0.1=10{,}000\\).', 'With a 20% cash drain: \\(m=(1+0.2)/(0.1+0.2)=4\\): total broad money from base money 1,000 is 4,000.'],
            answer: 'The simple multiplier gives the maximum; actual multipliers fall short because of cash holdings, excess reserves and unwillingness to lend. After 2008, central banks created trillions of base money and the multiplier collapsed, because the binding constraint was demand and capital, not reserves.',
          },
        },
        { t: 'bank-viz', viz: 'money-multiplier' },
      ],
    },
    {
      id: 'measure',
      title: 'Measuring money, and Singapore',
      lead: 'M0 to M3.',
      blocks: [
        {
          t: 'table',
          head: ['Measure', 'Contents (Singapore, per MAS definitions)', 'Notes'],
          rows: [
            ['Reserve (base) money', 'Currency in circulation plus banks’ balances at MAS', 'MAS issues the currency; banks hold a minimum cash balance'],
            ['M1', 'Currency in active circulation and demand deposits of the private sector', 'The most liquid money'],
            ['M2', 'M1 plus fixed deposits and savings deposits of the private sector', 'Broad money; the largest component is bank deposits'],
            ['M3', 'M2 plus deposits at finance companies and non-bank financial institutions', 'The broadest standard measure'],
          ],
          caption: 'Definitions summarised from MAS monetary statistics; check MAS for the current statement of components.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Why Singapore is different', tag: 'exchange-rate regime', body: 'MAS does not target the money supply or set a policy interest rate. It manages the exchange rate (the S$NEER), and the money supply and interest rates adjust to maintain it. Money-creation by banks still works as described, but the central bank influences it through the exchange-rate policy and the liquidity it provides.' },
            { title: 'Leakages abroad', tag: 'open economy', body: 'With large external flows, deposits created locally can leave through payments abroad; funds flow through the interbank market and the foreign-exchange market.' },
            { title: 'Not a printing press', tag: 'common error', body: 'Banks cannot create money without limit: new lending must be profitable and consistent with capital and liquidity rules, and borrowers must demand and be able to repay the loans.' },
            { title: 'Quantitative easing', tag: 'central-bank money', body: 'In QE a central bank buys assets and creates reserves; this changes base money and interest rates, with an indirect effect on bank money. It has not been used by MAS.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'McLeay, M., Radia, A. & Thomas, R. (2014). Money creation in the modern economy. *Bank of England Quarterly Bulletin*, 2014 Q1.',
    'Deutsche Bundesbank (2017). How money is created. *Monthly Report*, April 2017.',
    'Werner, R. A. (2014). Can banks individually create money out of nothing? The theories and the empirical evidence. *International Review of Financial Analysis*, 36.',
    'Mankiw, N. G. (2019). *Macroeconomics* (10th ed.), ch. 4. Worth.',
    'Monetary Authority of Singapore. *Monetary and financial statistics* (mas.gov.sg) and *Monetary policy framework*.',
  ],
  related: ['banking/theory/what-banks-do', 'banking/theory/capital-and-leverage', 'banking/theory/central-banking-singapore', 'finance/economics/central-banks', 'finance/economics/inflation-rates'],
}

export default guide
