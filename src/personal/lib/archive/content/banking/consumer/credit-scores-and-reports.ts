import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every time you borrow, a record is built: when you applied, how much you were given, whether you paid on time. In Singapore that record is held by Credit Bureau (Singapore), and lenders use it, together with a credit score computed from it, to decide whether to lend to you and at what price. This guide explains what is in a credit report, how scores are built and what moves them, the arithmetic of credit utilisation and debt-to-income, a simple framework for borrowing wisely (including the avalanche and snowball methods for paying down debt, compared with numbers), the effect of buy-now-pay-later, and what help exists if debt becomes unmanageable.',
  nutshell: [
    'A **credit report** lists your credit accounts, balances, limits, payment history and enquiries; a **credit score** summarises the risk of default. In Singapore, **Credit Bureau (Singapore) (CBS)** is the main bureau; scores run on a **1000 to 2000** scale with letter grades (AA best to HZ worst).',
    'What matters most: **paying on time**, **keeping utilisation low**, **length of history**, and **not applying for too much new credit at once**.',
    '**Credit utilisation** = balances ÷ credit limits across revolving accounts; keeping it **below about 30%** is a common guideline.',
    '**Debt-to-income** and the **TDSR** limit how much a lender will give; high unsecured debt lowers approval odds.',
    'To pay down several debts: **avalanche** (highest interest first) minimises cost; **snowball** (smallest balance first) builds motivation. Seek **free credit counselling** early if payments are unmanageable.',
  ],
  sections: [
    {
      id: 'report',
      title: 'What is in a credit report',
      lead: 'The record lenders see.',
      blocks: [
        {
          t: 'table',
          head: ['Section', 'Contents', 'Why it matters'],
          rows: [
            ['Personal details', 'Name, NRIC or FIN, date of birth, addresses', 'Used to match records; check for errors'],
            ['Credit accounts', 'Credit cards, personal loans, car loans, mortgages and credit lines: limits, balances, instalments', 'Shows total commitments and utilisation'],
            ['Payment history', 'Month-by-month record of payments made on time or late (typically 24 months)', 'The most important factor: late payments are recorded and weigh heavily'],
            ['Enquiries', 'Applications for credit made by lenders (hard enquiries)', 'Many applications in a short time suggest distress'],
            ['Public records and legal actions', 'Bankruptcy, legal judgements and similar records', 'Serious negative information'],
            ['Credit score and grade', 'A number and a risk grade summarising the above', 'Used for approval and pricing'],
          ],
          caption: 'Reports can be obtained from CBS (for a fee, with some free access through certain channels); check cbs.com.sg for current terms. You have the right to dispute mistakes.',
        },
        { t: 'p', text: 'Lenders in Singapore are generally required to check your credit history before granting credit. A history of timely payments helps you obtain loans, credit cards and better rates; late payments, defaults and high balances relative to limits reduce approval odds or raise your rate. Since 2024 information on buy-now-pay-later (BNPL) schemes is increasingly captured in credit records under the industry code, so small instalments also leave a trail.' },
      ],
    },
    {
      id: 'score',
      title: 'How scores work, and what moves them',
      lead: 'From behaviour to a number.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Payment history', tag: 'largest weight', body: 'Whether you pay on time and how late. A single 30-day late payment can lower a good score noticeably; defaults and write-offs weigh most. Set GIRO or auto-pay.' },
            { title: 'Utilisation and balances', tag: 'second', body: 'How much of your available credit you use. Using 90% of a card limit signals strain; 10 to 30% is healthy.' },
            { title: 'Length of history', tag: 'longer is better', body: 'The age of your oldest account and the average age. Closing an old card with no fee can slightly shorten your history.' },
            { title: 'New credit and mix', tag: 'smaller', body: 'Several applications in a short time lower the score a little; a sensible mix of loans and cards is neutral to positive.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{utilisation}=\frac{\sum\text{balances on revolving accounts}}{\sum\text{credit limits}},\qquad \text{DTI}=\frac{\text{monthly debt payments}}{\text{gross monthly income}}`,
          caption: 'Credit utilisation and the debt-to-income ratio, two numbers lenders look at.',
          where: [{ sym: '\\text{balances}', def: 'the amounts you owe on revolving credit at the statement date' }],
          syntax: [{ sym: '\\sum\\text{balances}/\\sum\\text{limits}', say: 'the share of your credit that you use. Effect: balances of S$6,000 on limits of S$20,000 is 30%. Why: lenders see high use as a sign of reliance on credit; scores often use both overall and per-card utilisation.' }, { sym: '\\text{DTI}', say: 'how much of your income is committed. Effect: a DTI of 40% leaves less room for new borrowing than 15%. Why: ability to pay depends on income left after other debts.' }],
          worked: {
            title: 'Two cards',
            steps: ['Card A: limit S$12,000, statement balance S$5,400 (45%). Card B: limit S$8,000, balance S$600 (7.5%).', 'Overall utilisation = 6,000/20,000 = 30%; card A alone at 45% may count against you.', 'Paying A down to S$2,400 before the statement date lowers overall utilisation to 15% and A to 20%.'],
            answer: 'Paying cards before the statement closes, or spreading balances, can lower reported utilisation without any change in what you spend. It is a quick way to improve a score, but not a substitute for paying in full.',
          },
        },
      ],
    },
    {
      id: 'pay',
      title: 'Paying down debt: avalanche or snowball?',
      lead: 'Two methods, compared.',
      blocks: [
        {
          t: 'table',
          head: ['Method', 'How', 'Effect', 'Who it suits'],
          rows: [
            ['Avalanche', 'Make the minimum payment on every debt; put all extra money on the debt with the highest interest rate', 'Lowest total interest; fastest in money terms', 'Disciplined; motivated by savings'],
            ['Snowball', 'Pay the minimum on all; put extra on the smallest balance first', 'Quick wins; slightly more interest', 'Those who need momentum'],
            ['Consolidation', 'Replace several debts with one loan at a lower effective rate', 'Reduces interest and simplifies payments, if the rate and fees are lower', 'People with several high-rate debts and good credit'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`B_j^{+}=B_j(1+r_j/12)-p_j,\qquad \sum_jp_j=\text{budget},\qquad \text{total interest}=\sum_t\sum_j B_{j,t}\frac{r_j}{12}`,
          caption: 'Each month every debt grows with interest and falls with its payment; the total budget is fixed, and the order in which extra money is applied determines the total interest.',
          where: [{ sym: 'B_j,\\ r_j,\\ p_j', def: 'balance, annual rate and payment on debt j' }],
          syntax: [{ sym: 'B_j(1+r_j/12)', say: 'monthly growth at each debt’s own rate. Effect: high-rate debt grows faster, so repaying it first stops the most expensive growth. Why: the interest saved by removing a dollar of debt is proportional to its rate.' }, { sym: '\\sum_jp_j=\\text{budget}', say: 'the same total each month. Effect: when one debt is paid off, its payment rolls into the next. Why: the budget stays constant.' }],
          worked: {
            title: 'A S$600 monthly budget',
            steps: ['Debts: a card with S$4,000 at 26.9% (minimum S$50) and a personal loan of S$6,000 at 8% (minimum S$100).', 'Avalanche (extra on the card first): debt-free in 19 months with about S$990 of interest.', 'Paying the loan first (the larger balance first, the "reverse" order): 20 months and about S$1,810 of interest.', 'Snowball (smallest balance first) here is the same as avalanche because the card is both the smaller and the costlier debt.'],
            answer: 'Ordering by interest rate saves about S$820 in this example. With more debts or very different rates the gap grows; with similar rates the choice matters little.',
          },
        },
      ],
    },
    {
      id: 'help',
      title: 'Borrowing wisely, and help if you are struggling',
      lead: 'Guardrails.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Borrow only for things that hold value or earn income, and keep total debt repayments under about 30 to 35% of gross income (well below the 55% TDSR cap).',
            'Hold an emergency fund of three to six months’ expenses so that a shock does not push you onto expensive credit.',
            'Pay credit cards in full, and never use a card to fund recurring spending.',
            'Check your credit report once a year and dispute errors.',
            'Compare effective rates and fees, not monthly instalments or flat rates.',
            'Treat buy-now-pay-later as credit: it is cheap if paid on time and costly (fees, credit marks) if not.',
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Talk to the lender early', tag: 'first step', body: 'Banks have hardship programmes; asking before you miss payments gives more options (a lower payment, a longer term, a temporary pause).' },
            { title: 'Credit counselling', tag: 'free help', body: 'Credit Counselling Singapore (CCS) offers free advice and a Debt Management Programme that consolidates unsecured debts into a repayment plan with reduced interest.' },
            { title: 'Debt Repayment Scheme', tag: 'formal', body: 'A court-supervised scheme for those with limited income and unsecured debts above a threshold, as an alternative to bankruptcy.' },
            { title: 'Bankruptcy', tag: 'last resort', body: 'Releases you from most debts but with serious consequences for credit, employment in some fields and travel. Seek advice before considering it.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Avoid unlicensed lenders', text: 'Never borrow from unlicensed moneylenders or "loan sharks"; they use harassment and illegal practices and charge exorbitant interest. Licensed moneylenders are listed by the Ministry of Law. If you are being harassed, report to the police.' },
      ],
    },
  ],
  sources: [
    'Credit Bureau (Singapore) (cbs.com.sg): credit reports, credit scores and grades.',
    'Credit Counselling Singapore (ccs.org.sg): Debt Management Programme and free counselling; Ministry of Law: Debt Repayment Scheme and Bankruptcy Act information.',
    'Money Sense (moneysense.gov.sg): credit reports, buy-now-pay-later and debt management.',
    'Thomas, L. C., Edelman, D. B. & Crook, J. N. (2002). *Credit Scoring and Its Applications*. SIAM.',
    'Gal, D. & McShane, B. B. (2012). Can small victories help win the war? Evidence from consumer debt management. *Journal of Marketing Research*, 49(4) (snowball).',
  ],
  related: ['banking/theory/credit-risk', 'banking/consumer/cards-and-payments', 'banking/consumer/loans-and-flat-rates', 'banking/consumer/mortgages-in-singapore', 'finance/foundations/time-value'],
}

export default guide
