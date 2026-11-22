import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Personal loans, car loans and renovation loans in Singapore are often quoted at a flat rate: "2.5% a year". It sounds cheaper than a credit card at 26.9%, and it is, but the flat rate understates the true cost because interest is charged on the original amount for the whole term even though you repay the principal gradually. The effective interest rate (EIR) is the real cost, typically nearly twice the flat rate. This guide explains how flat-rate loans work, how to convert between flat rate and EIR with an interactive calculator, how early repayment and fees change the cost, how reducing-balance loans differ, and how to compare offers properly.',
  nutshell: [
    '**Flat-rate loan**: interest = principal × flat rate × years, spread evenly over the term; monthly payment = (principal + interest) ÷ months.',
    '**EIR** is the rate on the reducing balance that gives the same payments. Rule of thumb: **EIR ≈ 1.8 to 2 × flat rate** for multi-year loans.',
    'A **2.5% flat rate over 5 years is about 4.7% EIR**; a 5% flat rate over 5 years is about 9.2% EIR.',
    '**Early repayment** may not reduce interest proportionally (the Rule of 78 or fees), so read the terms. **Fees** (processing, early settlement) raise the true rate further.',
    'Compare loans by **EIR** (and total cost, including fees), not by the flat rate or the monthly instalment.',
  ],
  sections: [
    {
      id: 'flat',
      title: 'How a flat-rate loan works',
      lead: 'Interest on the original sum.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`I=P\,f\,y,\qquad M=\frac{P+I}{12\,y}=\frac{P\,(1+f\,y)}{12\,y},\qquad \text{total repaid}=12\,y\,M`,
          caption: 'The flat-rate loan: total interest and the monthly instalment.',
          where: [{ sym: 'P', def: 'the amount borrowed' }, { sym: 'f', def: 'the flat rate per year (as a decimal)' }, { sym: 'y', def: 'the term in years' }],
          syntax: [{ sym: 'P\\,f\\,y', say: 'simple interest on the original principal for the full term. Effect: S$30,000 at 2.5% flat for 5 years is S$3,750, whatever you have repaid. Why: the loan is priced on the starting balance, not the declining one.' }, { sym: '(P+I)/(12y)', say: 'the equal monthly payment. Effect: S$33,750 over 60 months is S$562.50. Why: principal plus interest spread evenly.' }],
          worked: {
            title: 'S$30,000, 2.5% flat, 5 years',
            steps: ['Interest = 30,000 × 0.025 × 5 = S$3,750; total repaid S$33,750.', 'Monthly instalment = 33,750/60 = S$562.50.', 'The average balance outstanding is about half the loan, about S$15,000, so S$3,750 over 5 years on S$15,000 is 5% a year: twice the flat rate.'],
            answer: 'You are charged interest on money you have already repaid. The EIR (next section) is therefore about twice the headline.',
          },
        },
      ],
    },
    {
      id: 'eir',
      title: 'The effective interest rate',
      lead: 'The real price of the loan.',
      blocks: [
        { t: 'bank-viz', viz: 'flat-rate' },
        {
          t: 'math',
          tex: String.raw`P=M\,\frac{1-(1+i)^{-n}}{i},\qquad EIR=12\,i,\qquad EIR\approx\frac{2\,n}{n+1}\,f\ \ (\text{approximation, } n\text{ instalments})`,
          caption: 'The monthly rate i that makes the present value of the instalments equal the loan; the EIR quoted in Singapore is 12 × i. The approximation is the "constant ratio" or N-ratio formula.',
          where: [{ sym: 'M,\\ n', def: 'the monthly instalment and the number of instalments' }, { sym: 'i', def: 'the monthly effective rate' }],
          syntax: [{ sym: 'M\\,(1-(1+i)^{-n})/i', say: 'the present value of an annuity of M per month at monthly rate i. Effect: solving for i gives the rate at which the loan is repaid with these payments. Why: each instalment pays interest on the balance then outstanding and reduces the principal.' }, { sym: '2n/(n+1)\\times f', say: 'a quick approximation. Effect: for 60 instalments it is 1.97 × f; for 12 instalments 1.85 × f. Why: the average balance of a loan repaid evenly is about half, so the rate on the average balance is about double.' }],
          worked: {
            title: 'The same loan',
            steps: ['M = S$562.50, P = 30,000, n = 60. Solve \\(30{,}000=562.5\\times\\dfrac{1-(1+i)^{-60}}{i}\\): \\(i=0.394\\%\\) a month.', 'EIR = 12 × 0.394% = 4.73%. Approximation: \\(1.967\\times2.5\\%=4.92\\%\\).', 'A bank that quotes an "APR" including compounding would show \\((1.00394)^{12}-1=4.83\\%\\).'],
            answer: 'A 2.5% flat rate is a 4.7% EIR. Compare this with a reducing-balance loan advertised at 4.7%: the monthly payment is identical. Singapore banks are required to disclose the EIR, so look for it in the key product summary.',
          },
        },
        {
          t: 'table',
          head: ['Flat rate', 'Term', 'Approx. EIR', 'EIR ÷ flat'],
          rows: [
            ['2.0%', '3 years', '3.8%', '1.9'],
            ['2.5%', '5 years', '4.7%', '1.9'],
            ['3.5%', '5 years', '6.5%', '1.9'],
            ['5.0%', '5 years', '9.2%', '1.8'],
            ['7.0%', '7 years', '12.2%', '1.7'],
          ],
          caption: 'Calculated by solving the annuity equation; values rounded. The ratio falls slightly as the rate and term increase.',
        },
      ],
    },
    {
      id: 'fees',
      title: 'Fees, early repayment and comparing offers',
      lead: 'What the headline hides.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Processing and admin fees', tag: 'upfront', body: 'A 1% fee on S$30,000 is S$300 paid at the start: it reduces the amount you actually receive, so raises the effective rate (here by about 0.4 points on a 5-year loan).' },
            { title: 'Early settlement', tag: 'penalty', body: 'Repaying early may not save as much as you expect: banks may charge a fee (for instance 2 to 3% of the outstanding or a number of months of interest) or compute the rebate by a formula (like the Rule of 78) that gives back less interest than a reducing-balance calculation would.' },
            { title: 'Late fees', tag: 'penalty', body: 'Late payment fees and penalty interest are added to the cost and may be reported to the credit bureau.' },
            { title: 'Insurance bundles', tag: 'extras', body: 'Loans sold with credit-protection insurance add cost. Ask whether it is required, and compare standalone options.' },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Ask for the EIR', body: 'Banks must show the effective interest rate for fixed-rate loans; compare these, not the flat rates.' },
            { title: 'Add fees', body: 'Calculate the cost over the term: total repayments plus fees minus the amount received.' },
            { title: 'Check early-repayment rules', body: 'Read the schedule of fees and rebates, and whether partial prepayments are allowed.' },
            { title: 'Compare with a reducing-balance loan', body: 'Many banks offer personal loans on a reducing balance with an EIR close to the quoted rate, and credit-line products are even more flexible.' },
            { title: 'Ask if you really need it', body: 'Total cost, term and affordability under the unsecured-lending rules: repayments should leave you room for emergencies.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Predatory lenders', text: 'Only licensed moneylenders and banks may lend lawfully in Singapore. Licensed moneylenders may charge up to 4% a month interest (capped, with fees capped as well), but unlicensed lenders ("loan sharks") harass borrowers and are illegal; a borrower who has dealings with them should report to the police. Check the Registry of Moneylenders at the Ministry of Law for licensed lenders.' },
      ],
    },
  ],
  sources: [
    'Monetary Authority of Singapore. *Notice on Disclosure of Effective Interest Rates* and guidelines on fair dealing (mas.gov.sg).',
    'Brealey, R. A., Myers, S. C. & Allen, F. (2020). *Principles of Corporate Finance* (13th ed.), ch. 2 (annuities). McGraw-Hill.',
    'Money Sense (moneysense.gov.sg): borrowing and flat vs effective interest rates; Association of Banks in Singapore, *Consumer Information*.',
    'Ministry of Law, Registry of Moneylenders (mlaw.gov.sg): Moneylenders Act and rules on interest and fees.',
    'Kellison, S. G. (2009). *The Theory of Interest* (3rd ed.). McGraw-Hill.',
  ],
  related: ['banking/consumer/deposits-and-interest', 'banking/consumer/cards-and-payments', 'banking/consumer/mortgages-in-singapore', 'banking/consumer/credit-scores-and-reports', 'finance/foundations/time-value'],
}

export default guide
