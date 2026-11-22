import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A home loan is the largest debt most households ever take on, and a small difference in the interest rate or term changes the total cost by tens of thousands of dollars. This guide explains how a mortgage amortises (the monthly payment formula and why early payments are mostly interest), how floating-rate loans priced off SORA and fixed-rate loans compare, the rules that limit borrowing in Singapore (the TDSR, MSR and loan-to-value limits), the HDB concessionary loan, the arithmetic of refinancing and when it pays, and a framework for choosing the loan. Rates and rules change, so treat the figures as illustrations and check the current rules with MAS, HDB and your bank.',
  nutshell: [
    'The **monthly payment** on a loan \\(P\\) at monthly rate \\(i\\) over \\(n\\) months is \\(M=P\\,\\dfrac{i}{1-(1+i)^{-n}}\\). Early on most of it is interest; later, most is principal.',
    '**Total interest** is large over long terms: S$800,000 at 3.5% for 25 years costs about S$4,005 a month and S$401,000 in interest.',
    '**Floating-rate** loans in Singapore are tied to **compounded SORA** plus a spread; **fixed-rate** loans lock in a rate for 2 to 5 years and then reprice.',
    'Limits: **TDSR 55%** of gross monthly income for all debt; **MSR 30%** for HDB flats and ECs; **LTV** up to 75% for a first bank loan (tenure caps apply). The **HDB loan** rate is set at 0.1 percentage point above the CPF Ordinary Account rate (2.6%).',
    '**Refinancing** pays if the monthly saving × months until the next rate change exceeds the fees: break-even months = fees ÷ monthly saving.',
  ],
  sections: [
    {
      id: 'amort',
      title: 'How a mortgage amortises',
      lead: 'The payment formula.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`M=P\,\frac{i}{1-(1+i)^{-n}},\qquad B_k=P(1+i)^k-M\,\frac{(1+i)^k-1}{i},\qquad \text{interest}_k=i\,B_{k-1}`,
          caption: 'The level monthly payment, the balance after k payments, and the interest in month k.',
          where: [{ sym: 'P', def: 'the loan amount' }, { sym: 'i', def: 'the monthly interest rate (annual rate ÷ 12)' }, { sym: 'n', def: 'the number of monthly payments' }],
          syntax: [{ sym: 'i/(1-(1+i)^{-n})', say: 'the payment per dollar borrowed. Effect: at 3.5% a year over 25 years the factor is 0.005006: S$5.01 a month per S$1,000. Why: the present value of n level payments at i equals the loan.' }, { sym: 'iB_{k-1}', say: 'the interest due in month k is the rate on the balance outstanding. Effect: in the first month of an S$800,000 loan, interest is S$2,333 of the S$4,005 payment (58%). Why: the balance is highest at the start.' }, { sym: 'B_k', say: 'the loan balance after k payments: the original loan grown at i, less the future value of the payments. Effect: the balance falls slowly at first and faster later. Why: more of each payment goes to principal as the balance falls.' }],
          worked: {
            title: 'S$800,000 at 3.5% for 25 years',
            steps: ['i = 0.035/12 = 0.0029167; n = 300. \\(M=800{,}000\\times0.005006=S\\$4{,}005\\).', 'Total paid = 4,005 × 300 = S$1,201,500; interest = S$401,500.', 'Month 1: interest S$2,333, principal S$1,672. After 10 years the balance is about S$560,000; after 20 years about S$220,000.', 'A 20-year loan costs S$4,640 a month but total interest falls to S$313,500.'],
            answer: 'Shortening the term by 5 years raises the monthly payment by 16% but saves S$88,000 of interest. A longer term eases the monthly cash flow but costs more overall.',
          },
        },
        { t: 'bank-viz', viz: 'amortisation' },
      ],
    },
    {
      id: 'rates',
      title: 'Floating, fixed and the HDB loan',
      lead: 'Choosing a rate type.',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'How the rate is set', 'Advantages', 'Risks'],
          rows: [
            ['Floating (SORA-pegged)', 'Compounded SORA (1 or 3 months) plus a fixed spread (for example 0.5 to 1.0%) that is fixed for 1 to 3 years, then changes', 'Rates fall when SORA falls; often flexible with prepayment and refinancing', 'Rates and instalments rise when SORA rises; harder to budget'],
            ['Fixed rate', 'Rate fixed for 2 to 5 years, then reverts to a floating rate or a board rate', 'Predictable payments for the lock-in', 'May be higher than the floating rate; early repayment and refinancing penalties (often 1.5% of the loan)'],
            ['Board rate (bank’s own)', 'Set by the bank; can move at its discretion', 'Not typically attractive', 'Usually higher than market packages; avoid after the lock-in'],
            ['HDB concessionary loan', '0.1 percentage point above the CPF Ordinary Account rate (currently 2.6%); up to 25 years', 'Stable, lower rate in many periods; no early-repayment penalty', 'Up to 80% of price or valuation (lower for those with outstanding bank loans); MSR of 30% applies; check current eligibility'],
          ],
          caption: 'Typical features; check each bank’s package and HDB’s current terms.',
        },
        {
          t: 'math',
          tex: String.raw`\Delta M\approx\frac{\partial M}{\partial i}\,\Delta i,\qquad \frac{\Delta M}{M}\approx\frac{\Delta r}{r}\Big(1-\frac{(1+i)^{-n}\,n\,i}{1-(1+i)^{-n}}\Big)`,
          caption: 'The sensitivity of the monthly payment to the interest rate: a simple rule is that each 1 percentage point rise adds about 6 to 7% to the payment on a 25-year loan at today’s rates.',
          where: [{ sym: '\\Delta r', def: 'the change in the annual rate' }],
          syntax: [{ sym: '\\partial M/\\partial i', say: 'how much the payment changes for a given change in the rate. Effect: for a 25-year loan, one percentage point more increases the payment by about 6 to 7%, and by more at higher starting rates. Why: higher interest raises the interest part of every payment.' }],
          worked: {
            title: 'A rate rise on a floating loan',
            steps: ['S$800,000, 25 years. At 3.5%: M = S$4,005. At 4.5%: M = S$4,446 (+S$441, +11%). At 5.5%: M = S$4,913.', 'Each 1 percentage point adds S$440 to S$470 a month.', 'A household with a TDSR near the limit could be pushed above 55% if it re-borrowed, and the stress-test rate (the rate used to test affordability, currently 4%) is designed to ensure a buffer.'],
            answer: 'The effect of a rate rise is larger than it looks: 1 point on S$800,000 is about S$5,300 a year. Keep a buffer, and consider fixed rates if your budget is tight.',
          },
        },
      ],
    },
    {
      id: 'limits',
      title: 'The borrowing limits',
      lead: 'TDSR, MSR and LTV.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{TDSR}=\frac{\text{all monthly debt repayments (including the new loan)}}{\text{gross monthly income}}\le55\%,\qquad \text{MSR}=\frac{\text{monthly mortgage payment}}{\text{gross monthly income}}\le30\%`,
          caption: 'The total debt servicing ratio and the mortgage servicing ratio, with the loan payment computed at a stress-test interest rate.',
          where: [{ sym: '\\text{TDSR}', def: 'applies to all property loans from financial institutions' }, { sym: '\\text{MSR}', def: 'applies to HDB flats and executive condominiums bought with a bank or HDB loan' }],
          syntax: [{ sym: '\\le55\\%', say: 'no more than 55% of income may go to debt service. Effect: a household earning S$10,000 a month with S$700 of other debts can afford a mortgage payment of at most S$4,800. Why: it protects households from over-borrowing.' }, { sym: 'stress rate', say: 'the payment used in the test is computed at a higher notional rate (currently the higher of 4% or the actual rate) so that households can still afford the loan if rates rise.' }],
          worked: {
            title: 'How much can a couple borrow?',
            steps: ['Combined gross income S$12,000; car loan S$800. TDSR cap: 0.55 × 12,000 = S$6,600; available for the mortgage: S$5,800.', 'At the 4% stress rate over 25 years, the payment factor is 0.005278 per dollar: maximum loan = 5,800/0.005278 = S$1.10 million.', 'At the actual rate of 3.5% the payment on S$1.10m would be S$5,507, so actual repayments are comfortably lower.'],
            answer: 'The TDSR caps the loan at about S$1.1 million for this couple. The cap applies at the time of borrowing and is tested on the stress rate; it does not stop you from spending more later. Cash and CPF savings add to the budget for the purchase price.',
          },
        },
        {
          t: 'table',
          head: ['Rule', 'What it limits', 'Notes (check current rules)'],
          rows: [
            ['LTV (loan-to-value)', 'Loan as a fraction of the price or valuation (whichever is lower)', '75% for a first bank housing loan if the tenure is within 30 years (and within 65 years of age), lower for longer tenures and second loans; at least a portion of the down payment must be cash'],
            ['Maximum tenure', 'Years of the loan', 'Up to 30 years for bank loans (shorter if age limits apply); up to 25 years for the HDB loan'],
            ['Additional Buyer’s Stamp Duty (ABSD)', 'Extra stamp duty on additional property purchases and by foreigners', 'Affects the total cost of a purchase; see the property taxes guide'],
            ['Cash and CPF', 'Down payment sources', 'Part of the 25% down payment must be in cash; CPF Ordinary Account funds can be used for the rest and for instalments subject to limits'],
          ],
        },
      ],
    },
    {
      id: 'refi',
      title: 'Refinancing and choosing',
      lead: 'When does switching pay?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`n_{\text{break-even}}=\frac{\text{fees and penalties}}{M_{\text{old}}-M_{\text{new}}},\qquad \text{refinance if}\ n_{\text{break-even}}<\text{months you will benefit}`,
          caption: 'The break-even point of a refinancing: how many months the monthly saving takes to repay the cost of switching.',
          where: [{ sym: 'M_{\\text{old}},\\ M_{\\text{new}}', def: 'the monthly payments before and after' }],
          syntax: [{ sym: '\\text{fees}/\\Delta M', say: 'months to recoup costs. Effect: S$2,400 of fees and a S$200 monthly saving breaks even in 12 months. Why: simple payback.' }],
          worked: {
            title: 'A switch from 4.2% to 3.4%',
            steps: ['Remaining S$600,000 over 20 years. Old payment at 4.2%: S$3,699; new at 3.4%: S$3,449: saving S$250 a month.', 'Costs: legal and valuation fees S$2,500, and a 1.5% early-repayment fee on a fixed-rate loan if inside the lock-in (S$9,000), or none if the lock-in has ended.', 'Break-even: 2,500/250 = 10 months if no penalty; 11,500/250 = 46 months if the penalty applies.'],
            answer: 'Switch after the lock-in expires (or when the saving is large enough to cover the penalty). Many banks offer repricing within the same bank for a small fee, which can be cheaper than refinancing elsewhere.',
          },
        },
        {
          t: 'steps',
          items: [
            { title: 'Decide what you can afford', body: 'Use the TDSR and also your own budget: a stress test at 2 to 3 points above the current rate, with a reserve of six months of expenses.' },
            { title: 'Choose a rate type', body: 'Floating if you can absorb rate rises and want flexibility; fixed if predictability matters. Consider a part-and-part approach.' },
            { title: 'Compare packages', body: 'Look at the spread or fixed rate, the lock-in, penalties, legal and valuation subsidies, and the ability to part-prepay.' },
            { title: 'Plan prepayments and CPF use', body: 'Using CPF for payments reduces your retirement balance (with accrued interest owed on sale), and prepayments reduce interest but cost liquidity.' },
            { title: 'Review yearly', body: 'Check the rate against the market before each repricing date; negotiate or switch if beneficial.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Monetary Authority of Singapore. *Notice 645: Total Debt Servicing Ratio for Property Loans* and the housing loan regulations (mas.gov.sg).',
    'Housing & Development Board. *HDB concessionary loan: eligibility and interest rate* (hdb.gov.sg).',
    'Money Sense (moneysense.gov.sg): home loans guides; Association of Banks in Singapore, SORA and home loans.',
    'Brealey, R. A., Myers, S. C. & Allen, F. (2020). *Principles of Corporate Finance* (13th ed.), ch. 2. McGraw-Hill.',
    'Campbell, J. Y. & Cocco, J. F. (2003). Household risk management and optimal mortgage choice. *Quarterly Journal of Economics*, 118(4).',
  ],
  related: ['banking/consumer/loans-and-flat-rates', 'banking/theory/interest-rate-and-market-risk', 'accounting/taxation/property-and-other-taxes', 'finance/foundations/time-value', 'banking/theory/regulation-and-basel'],
}

export default guide
