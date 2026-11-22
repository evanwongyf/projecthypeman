import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The most important investment decision is not which stock to buy but how to divide money among stocks, bonds, cash and other assets. This guide turns that into practice. It shows the range of outcomes of different stock and bond mixes with a live simulation (a band of possible results, not a single forecast), explains why a mix of imperfectly correlated assets has lower risk than either alone, and describes the building blocks available to a Singapore investor: CPF, Singapore Savings Bonds, Treasury bills, broad-market ETFs and the Supplementary Retirement Scheme. It also covers how an allocation should change over a lifetime (the glide path) and how much weight to put on the research claiming that allocation explains most of a portfolio’s performance.',
  nutshell: [
    'The **mix of asset classes** drives most of a diversified portfolio’s variation over time; security selection matters less than most people think.',
    'Portfolio risk depends on **weights, volatilities and correlations**: \\(\\sigma_p^2=w_1^2\\sigma_1^2+w_2^2\\sigma_2^2+2w_1w_2\\rho\\sigma_1\\sigma_2\\).',
    'A **60/40** portfolio with 16% and 6% volatility and a correlation of 0.1 has a volatility of about **10%**, far below 60% of the stock volatility plus 40% of the bond volatility.',
    'Outcomes are **a range**: the 5th and 95th percentiles of 20-year wealth are far apart; do not plan on the median.',
    'Singapore building blocks: **CPF** (guaranteed rates), **SSBs** and **T-bills** (government-backed), **STI and global ETFs** and **SRS** (a tax-advantaged account).',
  ],
  sections: [
    {
      id: 'lab',
      title: 'The range of outcomes',
      lead: 'Change the mix and watch the band widen.',
      blocks: [
        { t: 'fin-lab', viz: 'alloc-growth' },
        {
          t: 'math',
          tex: String.raw`\mu_p=w\mu_s+(1-w)\mu_b,\qquad \sigma_p=\sqrt{w^2\sigma_s^2+(1-w)^2\sigma_b^2+2w(1-w)\rho\sigma_s\sigma_b}`,
          caption: 'The expected return and volatility of a two-asset portfolio of stocks (s) and bonds (b) with stock weight w.',
          where: [{ sym: '\\mu,\\ \\sigma', def: 'expected return and volatility of each asset' }, { sym: '\\rho', def: 'the correlation between stock and bond returns' }, { sym: 'w', def: 'the weight in stocks' }],
          syntax: [{ sym: '2w(1-w)\\rho\\sigma_s\\sigma_b', say: 'the covariance term. Effect: the lower the correlation, the smaller the portfolio volatility. Why: when one asset falls the other may hold up, so the fluctuations partly cancel.' }],
          worked: {
            title: 'A 60/40 portfolio',
            steps: ['Stocks: 7% return, 16% volatility; bonds: 3.5% return, 6% volatility; ρ = 0.1; w = 0.6.', 'Expected return = 0.6 × 7 + 0.4 × 3.5 = 5.6%.', 'Variance = 0.36 × 0.0256 + 0.16 × 0.0036 + 2 × 0.6 × 0.4 × 0.1 × 0.16 × 0.06 = 0.01025; volatility = 10.1%.'],
            answer: 'The portfolio keeps 80% of the stock return (5.6% against 7%) for 63% of the stock volatility (10.1% against 16%). Diversification is the only free lunch: the risk reduction is greater than the return given up. In 2022, when stocks and bonds fell together, the correlation rose and the benefit shrank: the correlation is not constant.',
          },
        },
      ],
    },
    {
      id: 'blocks',
      title: 'Singapore building blocks',
      lead: 'What is available, and what each is for.',
      blocks: [
        {
          t: 'table',
          head: ['Instrument', 'What it is', 'Role in a portfolio', 'Things to check'],
          rows: [
            ['CPF (OA, SA, MA, RA)', 'Mandatory savings with statutory interest rates (the Ordinary Account floor is 2.5%, the Special, MediSave and Retirement Accounts pay 4%, with extra interest on the first S$60,000 of combined balances)', 'A large, guaranteed, low-risk base; shapes how much risk to take elsewhere', 'Rates and rules change; funds are locked to specific uses'],
            ['CPF Investment Scheme', 'Allows investment of OA and SA savings above set limits in approved products', 'Optional: only beats the guaranteed rate if investments earn more', 'Costs, risk and the opportunity cost of the 2.5% to 4% guaranteed rate'],
            ['Singapore Savings Bonds', 'Ten-year government bonds with step-up interest that can be redeemed in any month', 'Safe, flexible and government-backed: the foundation of the bond side', 'Holding and application limits; yields change with each issue'],
            ['Treasury bills', 'Six-month and one-year government bills sold at auction', 'Cash-like; a place for the emergency fund or short goals', 'Yields move with short rates; auctions are periodic'],
            ['STI and global ETFs', 'Funds that hold a market index (Singapore’s STI; world stock indices; bond indices)', 'The growth part of the portfolio; low cost and diversified', 'Expense ratio, domicile (affects withholding tax), currency'],
            ['Supplementary Retirement Scheme (SRS)', 'A voluntary account with tax relief on contributions', 'Wrapper that can hold stocks, funds and bonds; tax benefits for high earners', 'Annual cap, early-withdrawal penalty and that 50% of withdrawals are taxable after retirement age'],
          ],
          caption: 'Rates, limits and rules change. Check CPF Board, MAS and IRAS for current figures.',
        },
      ],
    },
    {
      id: 'glide',
      title: 'Changing the mix over a lifetime',
      lead: 'A glide path, and what the research says.',
      blocks: [
        {
          t: 'levels',
          caption: 'A typical life-cycle path (illustrative).',
          items: [
            { name: '20s and 30s', body: 'Long horizon and human capital (the present value of future earnings) is large: a high stock share (80–100%) is appropriate if tolerance allows.' },
            { name: '40s', body: 'Savings rise but obligations (mortgage, children) too; a balanced mix of about 70% stocks.' },
            { name: '50s', body: 'Begin shifting toward bonds to reduce sequence risk near retirement; about 50–60% stocks.' },
            { name: 'Retirement', body: 'Withdrawals make sequence of returns critical: keep two to five years of spending in safe assets; 30–50% stocks.' },
            { name: 'Later life', body: 'Longevity risk remains: a fall in stocks is still survivable if safe assets cover near-term spending.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Does allocation explain 90% of returns?', text: 'A famous study (Brinson, Hood and Beebower, 1986) is often cited as showing that asset allocation explains about 90% of portfolio performance. What it measured was the share of the variation in a fund’s returns over time explained by the policy mix, not the contribution to the level of return or the variation between funds. Ibbotson and Kaplan (2000) clarified: about 90% of time-series variability, about 40% of the cross-section variation between funds, and effectively 100% of the average return level. The correct message is that the mix matters a great deal, but that it is not a statement about luck or skill.' },
      ],
    },
  ],
  sources: [
    'Brinson, G. P., Hood, L. R. & Beebower, G. L. (1986). Determinants of portfolio performance. *Financial Analysts Journal*, 42(4), 39–44.',
    'Ibbotson, R. G. & Kaplan, P. D. (2000). Does asset allocation policy explain 40, 90, or 100 percent of performance? *Financial Analysts Journal*, 56(1), 26–33.',
    'Markowitz, H. (1952). Portfolio selection. *Journal of Finance*, 7(1), 77–91.',
    'CPF Board (cpf.gov.sg); MAS: Singapore Savings Bonds and Treasury bills (mas.gov.sg); IRAS: SRS (iras.gov.sg).',
  ],
  related: ['finance/investing-process/goals-and-risk-profile', 'finance/philosophies/allocation', 'finance/quant/portfolio-theory'],
}

export default guide
