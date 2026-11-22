import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every strategy has bad years. Combining strategies that fail at different times smooths returns and raises the risk-adjusted return of the whole, which is the logic behind multi-strategy funds. The gain depends almost entirely on the correlation between the strategies.',
  nutshell: [
    'Two strategies with equal Sharpe ratio S and correlation ρ, combined with equal risk, give Sharpe **2S ÷ √(2 + 2ρ)**.',
    'Low or negative correlation adds the most: trend following and value, or momentum and value, have often paired well.',
    'Allocate by **risk budget**, not dollars, so each strategy contributes as intended.',
    'Too many similar strategies adds cost and complexity without diversification.',
  ],
  sections: [
    {
      id: 'sharpe',
      title: 'The maths of combining',
      blocks: [
        {
          t: 'math',
          tex: String.raw`SR_{\text{combo}} = \frac{SR_1 + SR_2}{\sqrt{2 + 2\rho}}`,
          caption: 'Sharpe ratio of an equal-risk combination of two strategies (each scaled to the same volatility).',
          plain: 'Scale both strategies to the same volatility and hold them equally. The combined excess return is the sum of the two; the combined volatility grows with their correlation. With zero correlation, two Sharpe-0.5 strategies make a Sharpe-0.71 portfolio; with perfect correlation, no gain at all.',
          where: [
            { sym: String.raw`SR_1, SR_2`, def: 'Sharpe ratios of each strategy' },
            { sym: String.raw`\rho`, def: 'correlation between their returns' },
          ],
          syntax: [
            { sym: String.raw`\sqrt{2 + 2\rho}`, say: 'combined volatility in units of one strategy’s volatility' },
          ],
          worked: {
            title: 'Trend following and value, each Sharpe 0.5',
            steps: [
              String.raw`\(\rho = 0.2\): \(SR = 1.0/\sqrt{2.4} = 1.0/1.549 = 0.645\).`,
              String.raw`\(\rho = 0\): \(1.0/\sqrt 2 = 0.707\).`,
              String.raw`\(\rho = -0.3\): \(1.0/\sqrt{1.4} = 0.845\).`,
              String.raw`\(\rho = 1\): \(1.0/2 = 0.5\): no improvement.`,
            ],
            why: [
              'mildly correlated',
              'independent',
              'negatively correlated: the biggest gain',
              'identical strategies cannot diversify',
            ],
            answer: 'Combining two decent, weakly correlated strategies lifts the Sharpe ratio from 0.5 to about 0.65–0.85, a large improvement without finding any new edge.',
          },
        },
      ],
    },
    {
      id: 'budget',
      title: 'Risk budgeting',
      blocks: [
        { t: 'steps', items: [
          { title: 'Choose strategies', body: 'Each with an economic rationale and evidence; check pairwise correlations over different regimes.' },
          { title: 'Set risk budgets', body: 'E.g. 40% of risk to core equity beta, 30% to trend, 30% to value and quality.' },
          { title: 'Scale positions', body: 'Size each so its volatility contribution matches its budget.' },
          { title: 'Rebalance and review', body: 'Quarterly; watch for strategies whose correlation rises in stress.' },
        ] },
        { t: 'callout', tone: 'warn', title: 'Correlations change', text: 'Strategies that were uncorrelated in calm markets can lose together in a liquidity crisis (as many quant strategies did in August 2007). Stress-test the combination, not just each piece.' },
      ],
    },
  ],
  sources: [
    'Asness, C. S., Moskowitz, T. J., & Pedersen, L. H. (2013). Value and momentum everywhere. Journal of Finance, 68(3), 929–985.',
    'Grinold, R. C., & Kahn, R. N. (2000). Active Portfolio Management (2nd ed.). McGraw-Hill.',
  ],
  related: ['finance/quant/portfolio-theory', 'finance/quant/volatility-targeting-and-risk-parity', 'finance/strategy-library/how-to-read'],
}

export default guide
