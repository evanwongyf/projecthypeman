import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Markowitz showed in 1952 that an asset should be judged by how it changes the risk of a portfolio, not by its own risk, and that diversification reduces risk without reducing expected return. This guide derives the two-asset case, extends it to the efficient frontier and the tangency portfolio, and explains why optimisers fed with estimated inputs produce extreme, unstable weights.',
  nutshell: [
    'Portfolio variance depends on **covariances**: \\(\\sigma_p^2 = w^\\top \\Sigma w\\). Assets with low correlation reduce risk.',
    'The **efficient frontier** is the set of portfolios with the highest expected return for each level of risk.',
    'The **tangency portfolio** maximises the Sharpe ratio; combining it with cash gives the best line (the capital market line).',
    'Optimisers amplify estimation error in expected returns: simple rules (equal weight, shrinkage, risk parity) often match them out of sample.',
  ],
  sections: [
    {
      id: 'two',
      title: 'Two assets',
      lead: 'Where the free lunch comes from.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\mu_p=w\mu_1+(1-w)\mu_2,\qquad \sigma_p^2=w^2\sigma_1^2+(1-w)^2\sigma_2^2+2w(1-w)\rho\,\sigma_1\sigma_2`,
          caption: 'Expected return and variance of a two-asset portfolio.',
          where: [{ sym: 'w,\\ 1-w', def: 'weights in assets 1 and 2' }, { sym: '\\rho', def: 'the correlation between the two returns' }],
          syntax: [
            { sym: 'w\\mu_1+(1-w)\\mu_2', say: 'expected return is a weighted average. Effect: mixing cannot raise return above the better asset, nor lower it below the worse.' },
            { sym: '2w(1-w)\\rho\\sigma_1\\sigma_2', say: 'the cross term: how the two assets move together. Effect: when ρ < 1 it is smaller than the sum of the standalone risks, so portfolio risk is less than the weighted average of risks. Why: when one falls, the other is not always falling.' },
          ],
          worked: {
            title: 'Equal mix, correlation 0.2',
            steps: ['Asset 1: μ = 8%, σ = 20%. Asset 2: μ = 4%, σ = 10%. w = 0.5, ρ = 0.2.', '\\(\\mu_p = 6\\%\\).', '\\(\\sigma_p^2 = 0.25(0.04)+0.25(0.01)+2(0.25)(0.2)(0.2)(0.1) = 0.01+0.0025+0.002 = 0.0145\\).', '\\(\\sigma_p = 12.04\\%\\), versus the weighted average of risks, 15%.'],
            answer: 'The portfolio has 12.0% volatility, not 15%: diversification removed about a fifth of the risk at no cost to expected return.',
          },
        },
      ],
    },
    {
      id: 'frontier',
      title: 'The efficient frontier',
      lead: 'Many assets, matrix form.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\mu_p=w^{\top}\mu,\quad \sigma_p^2=w^{\top}\Sigma\,w,\quad \min_w\ \tfrac12 w^{\top}\Sigma w\ \ \text{s.t.}\ \ w^{\top}\mu=m,\ \ w^{\top}\mathbf 1=1`,
          caption: 'Mean–variance optimisation: the least-risk portfolio for a target return m.',
          where: [{ sym: 'w', def: 'the vector of weights' }, { sym: '\\mu', def: 'the vector of expected returns' }, { sym: '\\Sigma', def: 'the covariance matrix of returns' }, { sym: '\\mathbf{1}', def: 'a vector of ones' }],
          syntax: [
            { sym: 'w^{\\top}\\Sigma w', say: 'sums every pairwise covariance weighted by the product of the two weights. Effect: it is the portfolio variance in one expression; with n assets it holds n(n+1)/2 distinct inputs.' },
            { sym: 'w^{\\top}\\mu=m', say: 'the return target. Sweeping m traces the frontier.' },
            { sym: 'w^{\\top}\\mathbf 1 = 1', say: 'the budget constraint: weights sum to 1.' },
          ],
          worked: {
            title: 'The tangency portfolio',
            steps: ['Maximise \\((w^\\top\\mu - r_f)/\\sqrt{w^\\top\\Sigma w}\\), the Sharpe ratio.', 'Solution (unconstrained): \\(w \\propto \\Sigma^{-1}(\\mu - r_f\\mathbf 1)\\), rescaled to sum to 1.', 'Every investor holds this portfolio plus cash, scaled to their risk tolerance.'],
            answer: 'The best risky portfolio is the same for everyone who shares the same beliefs (the separation theorem); individuals differ only in how much cash they mix in.',
          },
        },
        { t: 'quant-viz', viz: 'frontier' },
      ],
    },
    {
      id: 'fragile',
      title: 'Why optimisers are fragile',
      lead: 'Error maximisation.',
      blocks: [
        { t: 'p', text: 'The optimiser puts the largest weight on assets whose estimated returns are highest relative to risk, which are the ones whose estimates are most likely too high. Expected returns are estimated with very large error (a standard error of 5% a year on a mean of 6% is normal), and the inverse covariance matrix \\(\\Sigma^{-1}\\) magnifies directions in which assets are nearly collinear. The result is concentrated, unstable portfolios that change a lot when inputs move a little.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Equal weight (1/N)', tag: 'DeMiguel 2009', body: 'In a study of 14 models on 7 datasets, none consistently beat 1/N out of sample. Estimation error outweighs optimisation gains for realistic sample sizes.' },
            { title: 'Shrinkage', tag: 'Ledoit and Wolf', body: 'Pull the sample covariance matrix toward a simple target. Reduces extreme eigenvalues and gives better-behaved weights.' },
            { title: 'Black–Litterman', tag: 'views', body: 'Start from the returns implied by market-cap weights, and tilt them by explicit views with stated confidence.' },
            { title: 'Risk parity', tag: 'no return forecasts', body: 'Choose weights so each asset contributes equally to portfolio risk. Needs only covariances, which are estimated far better than means.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Constraints are a regulariser', text: 'Capping position sizes or forbidding short sales is a blunt form of shrinkage. The constrained portfolio is often better out of sample than the "optimal" one.' },
      ],
    },
  ],
  sources: [
    'Markowitz, H. (1952). Portfolio selection. *Journal of Finance*, 7(1).',
    'DeMiguel, V., Garlappi, L. & Uppal, R. (2009). Optimal versus naive diversification. *Review of Financial Studies*, 22(5).',
    'Ledoit, O. & Wolf, M. (2004). A well-conditioned estimator for large-dimensional covariance matrices. *Journal of Multivariate Analysis*, 88(2).',
    'Black, F. & Litterman, R. (1992). Global portfolio optimization. *Financial Analysts Journal*, 48(5).',
  ],
  related: ['finance/foundations/risk-return', 'finance/quant/factor-models', 'finance/quant/risk-measures', 'finance/philosophies/allocation'],
}

export default guide
