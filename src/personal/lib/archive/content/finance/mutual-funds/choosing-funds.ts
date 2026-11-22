import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Choosing funds is mostly about getting a few things right: a sensible mix for your goal, low costs, broad diversification, and a plan you can stick with. This guide gives a checklist, the main routes available in Singapore, and a simple example portfolio with the blended-cost maths.',
  nutshell: [
    'Start from your **goal, horizon and risk tolerance**, then the **asset mix**, then the funds.',
    'Prefer **low-cost, broadly diversified** funds as the core; keep any active or thematic bets small.',
    'Routes in Singapore: **brokerages and fund platforms**, **robo-advisers**, **CPF Investment Scheme (CPFIS)** and the **Supplementary Retirement Scheme (SRS)**.',
    'Fewer funds are usually better: overlapping funds add cost, not diversification.',
  ],
  sections: [
    {
      id: 'checklist',
      title: 'A checklist',
      blocks: [
        { t: 'checklist', items: [
          'Does the objective fit my goal and time horizon?',
          'Total cost (expense ratio + platform fee + any sales charge) as low as reasonably possible?',
          'Broad diversification across companies, sectors and countries?',
          'Performance compared with a fair total-return benchmark over 5–10 years?',
          'Risk level I can hold through a 30–50% fall in equities?',
          'Share class: currency, hedging, accumulating or distributing?',
          'Domicile and tax (withholding tax, US estate tax)?',
          'How it overlaps with what I already hold?',
        ] },
      ],
    },
    {
      id: 'routes',
      title: 'Routes in Singapore',
      blocks: [
        { t: 'table', head: ['Route', 'What it is', 'Notes'], rows: [
          ['Brokerage / fund platform', 'Buy ETFs and unit trusts yourself', 'Compare platform fees and whether sales charges are waived'],
          ['Robo-adviser', 'Automated portfolios of low-cost funds', 'Annual fee on top of fund costs; automatic rebalancing'],
          ['CPF Investment Scheme', 'Invest part of CPF Ordinary and Special Account balances in approved products', 'Must beat the CPF interest rate (currently at least 2.5% OA, 4% SA) to be worthwhile'],
          ['Supplementary Retirement Scheme', 'Voluntary tax-advantaged retirement account', 'Contributions are tax-deductible; withdrawals partly taxed'],
          ['Financial adviser', 'Advice and products', 'Ask how they are paid (commissions versus fees)'],
        ], caption: 'Rules and rates change; check CPF Board, IRAS and MAS for current details.' },
      ],
    },
    {
      id: 'example',
      title: 'An example three-fund portfolio',
      blocks: [
        {
          t: 'math',
          tex: String.raw`c_{\text{portfolio}} = \sum_i w_i\,c_i`,
          caption: 'The blended cost of a portfolio is the weighted average of each fund’s cost.',
          plain: 'Each fund’s annual cost applies only to the money in that fund. Multiply each cost by its weight and add to get the overall yearly cost.',
          where: [
            { sym: String.raw`w_i`, def: 'weight of fund i' },
            { sym: String.raw`c_i`, def: 'total annual cost of fund i' },
          ],
          syntax: [
            { sym: String.raw`\sum_i w_i c_i`, say: '“weighted average of costs”' },
          ],
          worked: {
            title: '60% global equity, 30% bonds, 10% Singapore equity',
            steps: [
              'Costs: global equity index fund 0.22%; global bond index fund (SGD-hedged) 0.25%; STI ETF 0.30%.',
              String.raw`\(0.6 \times 0.22 + 0.3 \times 0.25 + 0.1 \times 0.30 = 0.132 + 0.075 + 0.030 = 0.237\%\).`,
              String.raw`Swap the global equity fund for an active one at 1.70%: \(0.6 \times 1.70 + 0.075 + 0.030 = 1.125\%\).`,
            ],
            why: [
              'illustrative costs for low-cost funds',
              'weight and add',
              'one expensive fund dominates the total',
            ],
            answer: 'About 0.24% a year for the index version versus 1.13% with one active fund. Rebalance once a year or when weights drift more than about 5 points.',
          },
        },
      ],
    },
  ],
  sources: [
    'CPF Board. CPF Investment Scheme.',
    'IRAS. Supplementary Retirement Scheme.',
    'Monetary Authority of Singapore. MoneySense.',
  ],
  related: ['finance/investing-process/asset-allocation-in-practice', 'finance/strategy-library/lazy-portfolios', 'finance/mutual-funds/active-vs-passive'],
}

export default guide
