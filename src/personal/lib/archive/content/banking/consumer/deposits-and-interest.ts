import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A deposit account looks simple: you put money in, the bank pays interest. The arithmetic underneath determines how much you actually earn: how often interest is compounded, whether the headline rate applies to your whole balance or only to the portion that meets a condition (bonus interest accounts), how inflation erodes the return, and what the alternatives are, such as fixed deposits, government securities and the CPF accounts. This guide explains nominal and effective rates with a live compounding lab, the Rule of 72, real versus nominal returns, how Singapore’s bonus-interest accounts and government-backed alternatives work, and how deposit insurance protects your savings.',
  nutshell: [
    'The **effective annual rate (EAR)** is what you really earn: \\(EAR=(1+r/n)^n-1\\). Compounding more often raises it slightly.',
    '**Rule of 72**: years to double ≈ 72 ÷ rate (%). At 3% it takes 24 years; at 6%, 12.',
    '**Real return** ≈ nominal rate − inflation (exactly \\((1+i)/(1+\\pi)-1\\)). A 3% deposit with 2.5% inflation grows purchasing power by only about 0.5% a year.',
    '**Bonus-interest accounts** pay a high rate on a capped balance only if you meet conditions (salary credit, spending, insurance, investments); the **blended rate** is lower than the headline.',
    'Alternatives: **fixed deposits**, **Singapore Savings Bonds**, **Treasury bills**, **money-market funds**, and **CPF** interest; deposit insurance covers up to **S$100,000** per bank.',
  ],
  sections: [
    {
      id: 'comp',
      title: 'Compounding and the effective rate',
      lead: 'Interest on interest.',
      blocks: [
        { t: 'bank-viz', viz: 'compound' },
        {
          t: 'math',
          tex: String.raw`FV=P\Big(1+\frac rn\Big)^{nt},\qquad EAR=\Big(1+\frac rn\Big)^{n}-1,\qquad t_{\text{double}}=\frac{\ln2}{\ln(1+EAR)}\approx\frac{72}{100\,EAR}`,
          caption: 'Future value with compounding, the effective annual rate, and the doubling time (the Rule of 72).',
          where: [{ sym: 'P', def: 'the principal deposited' }, { sym: 'r', def: 'the nominal annual rate (as a decimal)' }, { sym: 'n', def: 'compounding periods per year (1, 4, 12, 365)' }, { sym: 't', def: 'years' }],
          syntax: [
            { sym: '(1+r/n)^{nt}', say: 'growth over nt periods at r/n per period. Effect: more frequent compounding means interest is earned on interest sooner. Why: each credit joins the principal.' },
            { sym: 'EAR', say: 'the annual rate that gives the same growth with annual compounding. Effect: 3% nominal compounded monthly gives 3.042%; daily gives 3.045%; the limit (continuous) is 3.046%. Why: a standard measure so that rates with different compounding can be compared.' },
            { sym: '72/(100\\,EAR)', say: 'an approximation of the doubling time. Effect: 72 divided by the percentage rate. Why: \\(\\ln2=0.693\\), and 72 is a convenient number with many divisors that corrects the approximation at moderate rates.' },
          ],
          worked: {
            title: 'S$50,000 at 3% for 5 years',
            steps: ['Annual compounding: \\(50{,}000\\times1.03^5=57{,}964\\).', 'Monthly compounding: \\(50{,}000\\times(1+0.03/12)^{60}=58{,}081\\); EAR = 3.042%.', 'The extra from monthly compounding: S$117 over five years.', 'Doubling time at 3%: 72/3 = 24 years (exact: 23.4).'],
            answer: 'Compounding frequency matters little at deposit-like rates; the rate and the time matter much more. The same arithmetic works against you on credit cards, where monthly compounding at 26.9% gives an effective annual rate of 30.5%.',
          },
        },
      ],
    },
    {
      id: 'real',
      title: 'Real returns and what you really keep',
      lead: 'Inflation, tax and fees.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`1+r_{\text{real}}=\frac{1+i}{1+\pi},\qquad r_{\text{real}}\approx i-\pi,\qquad \text{value after }t\text{ years}=P\,(1+r_{\text{real}})^{t}`,
          caption: 'The Fisher relation between nominal rate i, inflation π and real return.',
          where: [{ sym: 'i', def: 'the nominal interest rate' }, { sym: '\\pi', def: 'the inflation rate' }],
          syntax: [{ sym: '(1+i)/(1+\\pi)', say: 'the growth of purchasing power. Effect: money that grows at 3% while prices rise 2.5% gains 0.49% in real terms. Why: nominal growth less price growth is the growth in what money can buy.' }, { sym: 'i-\\pi', say: 'the simple approximation, good for low rates. Effect: easy mental arithmetic. Why: expanding the ratio for small i and π.' }],
          worked: {
            title: 'A savings account in a high-inflation year',
            steps: ['A fixed deposit pays 3.0%, inflation is 2.5%: real return \\(1.03/1.025-1=0.49\\%\\).', 'Over 10 years S$100,000 would grow to S$134,392 nominally, but in today’s money to only S$105,000.', 'If inflation is 4.5% and the deposit 3.0%: real return −1.4%; after 10 years you can buy 13% less.'],
            answer: 'Safety has a price: deposits protect the amount of money, not its purchasing power. For long-term savings, think of the real return, and of investments that can outpace inflation, with the risks they bring.',
          },
        },
        {
          t: 'table',
          head: ['Place for cash', 'Typical features (check current rates and rules)', 'Risk and access'],
          rows: [
            ['Savings account', 'Low base interest; bonus interest if you meet conditions (salary credit, spending, insurance, investments)', 'Insured up to S$100,000; instant access'],
            ['Fixed deposit', 'Rate fixed for 3 to 12 months or longer; early withdrawal usually loses interest', 'Insured; locked in'],
            ['Singapore Savings Bonds (SSB)', 'Government bonds for individuals, 10-year with step-up rates, redeemable monthly without penalty, up to a per-person holding limit', 'Backed by the Government; interest paid every 6 months'],
            ['Treasury bills', '6-month and 1-year bills sold at a discount at auction', 'Backed by the Government; competitive and non-competitive bids'],
            ['Money-market funds and cash management accounts', 'Invest in short-term instruments; yields follow short-term rates', 'Not insured; small risk of price changes; daily or short settlement'],
            ['CPF Ordinary, Special and MediSave accounts', 'Statutory rates (OA 2.5% a year floor, higher for SA, MA and RA, with extra interest on the first balances)', 'Backed by the Government; limited withdrawal'],
          ],
        },
      ],
    },
    {
      id: 'bonus',
      title: 'Bonus-interest accounts and blended rates',
      lead: 'The headline is not the average.',
      blocks: [
        { t: 'p', text: 'Many Singapore savings accounts advertise a high rate, "up to 4% p.a.", made up of a small base rate plus bonus tiers, each unlocked by an action: crediting a salary, spending a minimum on the bank’s card, paying bills, buying insurance or investing through the bank. The bonus typically applies only to the first S$50,000 to S$100,000 of your balance, not the whole amount, so the **blended rate** on your savings is lower than the headline.' },
        {
          t: 'math',
          tex: String.raw`r_{\text{blend}}=\frac{\sum_k r_k\,\min(B_k,\,B)}{B}`,
          caption: 'The blended rate across tiers of the balance, each tier with its own rate and cap.',
          where: [{ sym: 'B', def: 'your balance' }, { sym: 'r_k,\\ B_k', def: 'the rate and the balance cap of tier k' }],
          syntax: [{ sym: '\\sum r_k\\min(B_k,B)', say: 'interest on each slice at its own rate. Effect: when your balance exceeds the capped tiers, the excess earns only the base rate. Why: bonus interest applies to a limited amount.' }, { sym: '/B', say: 'dividing by the whole balance gives your average rate. Effect: the larger your balance, the lower the blended rate. Why: the capped bonus is spread over more money.' }],
          worked: {
            title: 'Headline 4%, base 0.05%',
            steps: ['Tiers: a base of 0.05% on the whole balance, plus +1.5% for a salary credit and +1.0% for S$500 of card spend, each on the first S$60,000 only (higher tiers for insurance or investments are not met).', 'Balance S$60,000: interest = 60,000 × 2.55% = S$1,530 → 2.55% blended. Balance S$200,000: interest = 60,000 × 2.5% + 200,000 × 0.05% = S$1,600 → 0.8% blended.'],
            answer: 'A larger balance earns only S$70 more but is not working as hard. For balances above the cap, consider alternatives (fixed deposits, SSBs, T-bills or money-market funds) and compare after accounting for conditions that may require you to spend or buy products you would not otherwise.',
          },
        },
        { t: 'callout', tone: 'note', title: 'Deposit insurance', text: 'The Singapore Deposit Insurance Corporation insures eligible Singapore-dollar deposits up to S$100,000 per depositor per Scheme member bank (separate from the CPF Investment Scheme and SRS limits). Foreign-currency deposits, structured deposits and investment products are not insured. Check sdic.org.sg for current coverage.' },
      ],
    },
  ],
  sources: [
    'Fisher, I. (1930). *The Theory of Interest*. Macmillan.',
    'Brealey, R. A., Myers, S. C. & Allen, F. (2020). *Principles of Corporate Finance* (13th ed.), ch. 2. McGraw-Hill.',
    'Monetary Authority of Singapore: Singapore Savings Bonds and Treasury bills (sgs.gov.sg); Singapore Deposit Insurance Corporation (sdic.org.sg).',
    'Central Provident Fund Board: interest rates (cpf.gov.sg).',
    'Money Sense (moneysense.gov.sg): guides to savings and deposits.',
  ],
  related: ['finance/foundations/time-value', 'banking/consumer/loans-and-flat-rates', 'banking/theory/liquidity-and-runs', 'finance/economics/inflation-rates', 'finance/assets/bonds'],
}

export default guide
