import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Why do banks exist at all, when savers could lend directly to borrowers? Because direct lending is costly and risky: savers do not know whom to trust, want their money back on short notice, and cannot diversify across thousands of loans, while borrowers want long-term funds. A bank solves all of these by acting as an intermediary: screening and monitoring borrowers, pooling savings, and transforming short-term deposits into long-term loans. This guide explains the theory of financial intermediation (delegated monitoring, liquidity and maturity transformation), reads a bank balance sheet and income statement, and works through the economics of the net interest margin and the return on equity.',
  nutshell: [
    'Banks exist because they reduce **information and transaction costs**: they specialise in assessing borrowers (**delegated monitoring**), pool risks, and provide **liquidity**.',
    '**Maturity transformation**: borrowing short (deposits) to lend long (mortgages, business loans) creates profit from the yield curve but also the risk of runs and interest-rate shocks.',
    'A bank’s **balance sheet**: assets (loans, securities, cash) = liabilities (deposits, borrowings) + equity. It is typically **90 to 95% funded by liabilities**.',
    'The core profit is the **net interest margin (NIM)**: interest income minus interest expense as a share of earning assets, about 1.5 to 3% for large banks; add fees and subtract costs and loan losses.',
    '**ROE = ROA × leverage**: a 1% return on assets becomes a 10% to 12% return on equity at 10 to 12 times leverage.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why banks exist',
      lead: 'The economics of intermediation.',
      blocks: [
        {
          t: 'table',
          head: ['Problem in direct lending', 'How a bank solves it'],
          rows: [
            ['Savers cannot judge borrowers (information asymmetry)', 'The bank screens and monitors borrowers once, on behalf of many depositors (**delegated monitoring**, Diamond 1984)'],
            ['One saver cannot fund one large loan', '**Pooling**: many small deposits fund one large loan'],
            ['Savers want money back at short notice; borrowers need long funds', '**Liquidity and maturity transformation**: deposits are redeemable, loans are long'],
            ['Concentration: one borrower defaulting can ruin a saver', '**Diversification** across thousands of loans'],
            ['Making payments between strangers is costly and risky', 'The bank runs the **payment system** with ledgers, cards and transfers'],
            ['Contract and enforcement costs', 'Economies of scale in legal, credit and collection capability'],
          ],
        },
        { t: 'p', text: 'This transformation is the bank’s service and its weakness. If depositors can withdraw at any moment but loans cannot be recalled, a bank cannot repay everyone at once even when it is fully solvent. The system works because deposits are diversified (not all depositors need money on the same day), because banks hold liquid assets and capital, and because of central-bank lending and deposit insurance (see the liquidity guide).' },
      ],
    },
    {
      id: 'bs',
      title: 'Reading a bank’s balance sheet',
      lead: 'Assets, liabilities and equity.',
      blocks: [
        {
          t: 'table',
          head: ['Assets (what the bank owns or is owed)', 'S$ bn', 'Liabilities and equity (what it owes)', 'S$ bn'],
          rows: [
            ['Cash and balances with the central bank', '10', 'Customer deposits (current, savings, fixed)', '74'],
            ['Interbank placements and short-term securities', '12', 'Interbank and other borrowings', '9'],
            ['Government and other securities', '18', 'Long-term debt (bonds, subordinated notes)', '6'],
            ['Loans to customers (mortgages, business, consumer)', '55', 'Other liabilities', '3'],
            ['Other assets', '5', 'Shareholders’ equity (capital)', '8'],
            ['**Total assets**', '**100**', '**Total liabilities and equity**', '**100**'],
          ],
          caption: 'A stylised balance sheet (illustrative numbers): liabilities of 92 plus equity of 8 equal assets of 100. Equity is 8% of assets, so leverage is 12.5 times; loans are a little over half of assets, and deposits about three-quarters of funding.',
        },
        {
          t: 'math',
          tex: String.raw`A=L+E,\qquad \text{leverage}=\frac{A}{E},\qquad \text{loan-to-deposit ratio}=\frac{\text{loans}}{\text{deposits}}`,
          caption: 'The balance sheet identity, leverage and the loan-to-deposit ratio.',
          where: [{ sym: 'A,\\ L,\\ E', def: 'total assets, liabilities and equity' }],
          syntax: [{ sym: 'A=L+E', say: 'every asset is financed by someone: creditors (L) or owners (E). Effect: the identity always holds, so a loss to assets reduces E. Why: double-entry accounting.' }, { sym: 'A/E', say: 'how many dollars of assets per dollar of owners’ money. Effect: 12× means a 1% loss on assets is a 12% loss of equity, and an 8.3% loss wipes it out. Why: the small base of equity absorbs all losses first.' }, { sym: '\\text{loans}/\\text{deposits}', say: 'how much of deposits is lent out. Effect: above about 100% a bank relies on wholesale funding (riskier); Singapore’s local banks typically operate at about 80 to 90%. Why: a high ratio means less liquid cushion.' }],
          worked: {
            title: 'The same bank with a loss',
            steps: ['Assets 100, equity 8: leverage 12.5×.', 'Loan losses of 3 reduce assets to 97 and equity to 5: leverage 19.4×, equity ratio falls from 8% to 5.2%.', 'A further loss of 5 would exhaust the remaining equity: the bank would be insolvent.'],
            answer: 'A loss of 3% of assets removes more than a third of the bank’s equity. This is why capital rules require a buffer and why banks are watched closely for loan quality.',
          },
        },
      ],
    },
    {
      id: 'income',
      title: 'How a bank makes money',
      lead: 'Margin, fees, costs and losses.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{NIM}=\frac{\text{interest income}-\text{interest expense}}{\text{average earning assets}},\quad \text{ROA}=\frac{\text{net profit}}{\text{assets}},\quad \text{ROE}=\text{ROA}\times\frac{A}{E}`,
          caption: 'Net interest margin, return on assets, and return on equity as ROA times leverage (a simplified DuPont decomposition).',
          where: [{ sym: '\\text{earning assets}', def: 'loans, securities and interbank placements that earn interest' }],
          syntax: [{ sym: '\\text{NIM}', say: 'the spread earned on the money the bank puts to work. Effect: a bank paying 1.5% on deposits and earning 4.5% on loans has a margin around 3% on that part. Why: it is the central profit driver of a traditional bank.' }, { sym: '\\text{ROE}=\\text{ROA}\\times A/E', say: 'leverage multiplies the return on the owners’ capital. Effect: a modest ROA of 1.1% becomes a 13% ROE at 12× leverage. Why: the profit is earned on the whole balance sheet but belongs to the owners.' }],
          worked: {
            title: 'A simplified year for the bank above',
            steps: ['Interest income 4.2; interest expense 1.8: net interest income 2.4 on average earning assets of 100: NIM 2.4%.', 'Fee and other income 0.9; operating costs 1.4; loan-loss provisions 0.3; tax 0.3.', 'Net profit = 2.4 + 0.9 − 1.4 − 0.3 − 0.3 = 1.3 → ROA 1.3% on assets of 100.', 'ROE = net profit / equity = 1.3 / 8 = 16.3% (equivalently ROA 1.3% × leverage 12.5).'],
            answer: 'A bank that is good at lending and controlling cost can earn double-digit returns on equity with modest asset returns, which is why leverage attracts shareholders and regulators in equal measure.',
          },
        },
        {
          t: 'table',
          head: ['Revenue and cost line', 'What it is', 'Sensitivity'],
          rows: [
            ['Net interest income', 'Interest on loans and securities less interest on deposits and borrowings', 'Rises when rates rise if loans reprice faster than deposits; competition for deposits squeezes it'],
            ['Non-interest (fee) income', 'Account and card fees, wealth management, trade finance, advisory, trading', 'Less rate-sensitive; depends on markets and activity'],
            ['Operating expenses', 'Staff, technology, premises; cost-to-income ratio of about 40 to 50% for efficient banks', 'Largely fixed; scale and digitisation help'],
            ['Provisions for credit losses', 'Expected losses on loans (IFRS 9)', 'Rises in downturns; the biggest swing factor'],
          ],
        },
        { t: 'bank-viz', viz: 'leverage' },
      ],
    },
  ],
  sources: [
    'Diamond, D. W. (1984). Financial intermediation and delegated monitoring. *Review of Economic Studies*, 51(3).',
    'Diamond, D. W. & Dybvig, P. H. (1983). Bank runs, deposit insurance, and liquidity. *Journal of Political Economy*, 91(3).',
    'Freixas, X. & Rochet, J.-C. (2008). *Microeconomics of Banking* (2nd ed.). MIT Press.',
    'Saunders, A. & Cornett, M. M. (2018). *Financial Institutions Management* (9th ed.). McGraw-Hill.',
    'DBS, OCBC and UOB annual reports (net interest margin, cost-to-income ratio, loan-to-deposit ratio).',
  ],
  related: ['banking/theory/money-creation', 'banking/theory/capital-and-leverage', 'banking/theory/liquidity-and-runs', 'accounting/financial-accounting/financial-statements', 'finance/fundamental/dupont'],
}

export default guide
