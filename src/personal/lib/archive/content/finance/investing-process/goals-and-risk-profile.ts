import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most investing mistakes are made before a single share is bought: investing without a goal, without a time horizon, or with money that will be needed next year. A sound process starts with the goal (what the money is for, and when), then asks two separate questions about risk: how much volatility can you tolerate emotionally (risk tolerance) and how much loss can you afford financially (risk capacity). Only then does it choose an allocation. This guide sets out how to define goals and horizons, how to compute what a goal requires you to save, how to distinguish risk tolerance from risk capacity, why the emergency fund comes first, and what an investment policy statement, a one-page set of rules you write in calm conditions, contains.',
  nutshell: [
    'Start with **goals**: amount, date and importance (a home deposit in 5 years, retirement in 30, a child’s education in 12).',
    'The **time horizon** decides how much volatility a goal can absorb: money needed in under 3 to 5 years should not be in stocks.',
    '**Risk tolerance** is how you feel about losses; **risk capacity** is how much you can lose without changing your life. Use the **lower** of the two.',
    'Build an **emergency fund** (commonly 3 to 6 months of expenses) in cash or short-term government bills before investing.',
    'Write an **investment policy statement (IPS)**: goals, horizon, allocation, rebalancing rules and what you will do in a crash.',
  ],
  sections: [
    {
      id: 'goals',
      title: 'Goals and horizons',
      lead: 'Money has jobs; give each a date.',
      blocks: [
        {
          t: 'table',
          head: ['Goal', 'Horizon', 'Importance', 'Suitable assets (typical)'],
          rows: [
            ['Emergency fund', 'Immediate', 'Essential', 'Cash, savings, short-term government bills'],
            ['Wedding or car in 2 years', 'Under 3 years', 'High', 'Cash, T-bills, short-dated bonds'],
            ['Home deposit in 5 years', '3 to 7 years', 'High', 'Mostly bonds and cash with a modest equity share'],
            ['Child’s education in 12 years', '10 to 15 years', 'High', 'A balanced mix, shifting to bonds as the date nears'],
            ['Retirement in 30 years', '20+ years', 'Essential', 'Mostly equities, shifting to bonds over time (a glide path)'],
            ['Legacy or surplus', '30+ years', 'Low', 'Growth assets; tolerates large swings'],
          ],
          caption: 'Illustrative mapping of goals to assets, not personal advice. The principle: the shorter the horizon, the less volatile the assets.',
        },
        {
          t: 'math',
          tex: String.raw`\text{PMT}=\frac{FV\cdot r}{(1+r)^{n}-1},\qquad r=\frac{R}{12}\ \text{(monthly)},\quad n=12\times\text{years}`,
          caption: 'The regular monthly saving that grows to a target amount FV at an assumed return R.',
          where: [{ sym: 'FV', def: 'the target amount' }, { sym: 'R', def: 'the assumed annual return' }, { sym: 'n', def: 'the number of monthly payments' }, { sym: '\\text{PMT}', def: 'the monthly saving' }],
          syntax: [{ sym: '((1+r)^{n}-1)/r', say: 'the future value of 1 saved each month. Effect: a higher return or a longer horizon cuts the required saving sharply. Why: compounding does more of the work the longer the money is invested.' }],
          worked: {
            title: 'S$200,000 in 10 years at 5%',
            steps: ['r = 5%/12 = 0.4167% a month; n = 120. The future-value factor is ((1.004167)^120 − 1)/0.004167 = 154.4.', 'PMT = 200,000/154.4 = S$1,296 a month.', 'At 3% the saving rises to S$1,430 (about +10%); at 7% it falls to S$1,156 (about −11%); the deposits total S$155,500 at 5%.'],
            answer: 'The return assumption matters less than the saving rate over a decade: a 2-point change in return moves the required saving by about 10%. Use a cautious return and revisit the plan each year.',
          },
        },
      ],
    },
    {
      id: 'risk',
      title: 'Risk tolerance versus risk capacity',
      lead: 'Two questions, one binding answer.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Risk tolerance', tag: 'psychological', body: 'How much volatility you can sit through without selling at the bottom. Measured by questionnaires and, better, by how you behaved in past falls.' },
            { title: 'Risk capacity', tag: 'financial', body: 'How much loss your finances can absorb: income stability, savings, debts, dependants and the horizon. A young professional has high capacity; a retiree living on the portfolio has low capacity.' },
            { title: 'Risk required', tag: 'the return you need', body: 'The return a goal demands. If it needs a higher return than your capacity allows, change the goal, the date or the saving rate, not the risk.' },
            { title: 'The binding constraint', tag: 'use the lower', body: 'A person with high capacity but low tolerance should take less risk (they will sell in a crash); a person with high tolerance but low capacity should also take less.' },
          ],
        },
        {
          t: 'table',
          head: ['Profile', 'Typical stock share', 'A bad year looks like', 'Suitable for'],
          rows: [
            ['Conservative', '20%', 'About −5% to −8%', 'Short horizons; low capacity or tolerance'],
            ['Moderately conservative', '40%', 'About −10%', 'Medium horizons'],
            ['Balanced', '60%', 'About −15% to −20%', 'Long horizons with some caution'],
            ['Growth', '80%', 'About −25% to −30%', 'Long horizons and high tolerance'],
            ['Aggressive', '100%', 'About −35% to −50% (2008, 2020)', 'Very long horizons and high capacity'],
          ],
          caption: 'A rough guide to the size of a bad year; actual losses depend on markets and holdings.',
        },
        { t: 'callout', tone: 'warn', title: 'The emergency fund comes first', text: 'Without a cash buffer, a job loss or a medical bill forces you to sell investments at whatever price the market offers. A common rule is three to six months of essential expenses (S$3,500 a month means about S$21,000 for six months) in cash, savings or short-term government bills. Investing begins above that.' },
      ],
    },
    {
      id: 'ips',
      title: 'The investment policy statement',
      lead: 'Rules written in calm.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Purpose and goals, each with an amount and a date',
            'Time horizon and the expected pattern of contributions and withdrawals',
            'Risk tolerance and capacity, and the maximum drop you will tolerate',
            'Target allocation with ranges (for example 60% ± 5% in equities)',
            'What you will buy: broad funds, individual stocks, the share each may take',
            'Rebalancing rule (calendar or bands) and how new money is used',
            'Costs and tax constraints: platforms, fees, withholding tax',
            'A written plan for a crash: what you will do and what you will not do',
            'Review schedule (once a year) and the events that trigger a change (a new job, a child)',
          ],
        },
        { t: 'p', text: 'The value of the statement is behavioural. When markets fall 30% and the news is alarming, a document that says "I will rebalance, not sell" is harder to ignore than a vague intention. Professional investors and advisers use policy statements for the same reason: decisions are made in advance by the calm version of the investor.' },
      ],
    },
  ],
  sources: [
    'CFA Institute. *Investment Policy Statement* and *Portfolio Management* curriculum (cfainstitute.org).',
    'Bodie, Z., Kane, A. & Marcus, A. J. *Investments*. McGraw-Hill (risk tolerance, capacity and the policy statement).',
    'Monetary Authority of Singapore and MoneySense: financial planning guides, emergency fund and goal setting (moneysense.gov.sg).',
    'Malkiel, B. G. (2019). *A Random Walk Down Wall Street*. W. W. Norton (life-cycle investing).',
  ],
  related: ['finance/investing-process/asset-allocation-in-practice', 'finance/foundations/risk-return', 'finance/foundations/behavioural'],
}

export default guide
