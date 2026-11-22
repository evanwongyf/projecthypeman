import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every strategy in this library is described the same way: the idea, the rules, the maths, how it has behaved historically, and its risks. Before using any of them, it helps to know how to judge a strategy: which numbers matter, and which questions expose a backtest that is too good to be true.',
  nutshell: [
    'Report **CAGR**, **volatility**, **maximum drawdown**, **Sharpe** and **Calmar**, after costs.',
    'Ask: is there an **economic reason** it should work? Is it **out-of-sample**? How long are the **losing periods**?',
    'Prefer simple rules with few parameters, tested across markets and decades.',
    'Nothing here is a recommendation; historical results do not guarantee future returns.',
  ],
  sections: [
    {
      id: 'metrics',
      title: 'The core metrics',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{CAGR} = \Big(\frac{V_{\text{end}}}{V_{\text{start}}}\Big)^{1/n} - 1, \qquad \text{Calmar} = \frac{\text{CAGR}}{|\text{MDD}|}`,
          caption: 'Compound annual growth rate over n years, and the Calmar ratio (growth per unit of worst drawdown).',
          plain: 'CAGR is the steady yearly growth rate that would turn the starting value into the ending value. Maximum drawdown (MDD) is the largest peak-to-trough fall. Calmar divides growth by that worst fall, rewarding strategies that grow without deep holes.',
          where: [
            { sym: String.raw`V_{\text{start}}, V_{\text{end}}`, def: 'starting and ending portfolio values' },
            { sym: 'n', def: 'years' },
            { sym: 'MDD', def: 'maximum drawdown (as a fraction)' },
          ],
          syntax: [
            { sym: String.raw`(\cdot)^{1/n}`, say: '“the n-th root”' },
          ],
          worked: {
            title: 'Two strategies over 10 years',
            steps: [
              String.raw`A: \$10,000 → \$25,000. \(2.5^{0.1} = e^{0.1 \ln 2.5} = e^{0.0916} = 1.096\): CAGR 9.6%. MDD 30%: Calmar \(= 9.6/30 = 0.32\).`,
              String.raw`B: \$10,000 → \$21,000. \(2.1^{0.1} = e^{0.0742} = 1.077\): CAGR 7.7%. MDD 12%: Calmar \(= 0.64\).`,
              'A grew more; B grew more per unit of pain.',
            ],
            why: [
              'root of the growth multiple, then the worst fall',
              'the same for B',
              'compare on both dimensions',
            ],
            answer: 'Which is “better” depends on whether you could hold through a 30% fall. Many investors abandon strategies in drawdowns, so a smoother strategy you stick with may beat a stronger one you quit.',
          },
        },
      ],
    },
    {
      id: 'questions',
      title: 'Questions to ask of any strategy',
      blocks: [
        { t: 'checklist', items: [
          'Why should it work? Risk premium, behavioural bias, or structural flow?',
          'Was it tested out of sample, across markets and periods?',
          'How many parameters, and how many variants were tried?',
          'What are the costs, turnover, taxes and capacity?',
          'What is the longest underperformance period, and could I endure it?',
          'Has it worked since it was published? (McLean and Pontiff, 2016, found anomaly returns fell by about a third after publication.)',
        ] },
      ],
    },
  ],
  sources: [
    'McLean, R. D., & Pontiff, J. (2016). Does academic research destroy stock return predictability? Journal of Finance, 71(1), 5–32.',
    'Harvey, C. R., Liu, Y., & Zhu, H. (2016). … and the cross-section of expected returns. Review of Financial Studies, 29(1), 5–68.',
  ],
  related: ['finance/quant/backtesting-and-overfitting', 'finance/mutual-funds/performance-measurement', 'finance/quant/risk-measures'],
}

export default guide
