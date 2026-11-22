import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Risk managers need one number for "how bad can it get". Value at risk gives a loss threshold, expected shortfall says how bad it is beyond the threshold, drawdown measures the path, and the Sharpe and Sortino ratios compare return with risk. Each is a simplification with a known blind spot. This guide computes them three ways and shows where each one misleads.',
  nutshell: [
    '**VaR** at 99% is the loss that is exceeded only 1% of the time. It says nothing about how large the loss is *when* it is exceeded.',
    '**Expected shortfall (CVaR)** is the average loss on those worst days: it is always at least as large as VaR and captures the tail.',
    'Three ways to compute VaR: **parametric** (assume normal), **historical** (use past returns), **Monte Carlo** (simulate a model). The normal version understates fat tails.',
    '**Sharpe** = excess return ÷ volatility; **Sortino** counts only downside deviation; **max drawdown** measures the worst peak-to-trough fall.',
  ],
  sections: [
    {
      id: 'var',
      title: 'Value at risk',
      lead: 'A quantile of the loss distribution.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{VaR}_{\alpha}=-\,q_{1-\alpha}(r)\;\overset{\text{normal}}{=}\;-\big(\mu - z_{\alpha}\,\sigma\big)\,V,\qquad z_{0.95}=1.645,\ z_{0.99}=2.326`,
          caption: 'Value at risk as a quantile, and its parametric form when returns are normal.',
          where: [{ sym: '\\alpha', def: 'the confidence level (0.99)' }, { sym: 'q_{1-\\alpha}', def: 'the (1−α) quantile of returns: the return that is beaten with probability 1−α' }, { sym: 'V', def: 'portfolio value' }, { sym: 'z_\\alpha', def: 'the standard normal quantile (2.326 at 99%)' }],
          syntax: [
            { sym: 'q_{1-\\alpha}(r)', say: 'the cut-off return in the worst (1−α) of outcomes. The minus sign turns a negative return into a positive loss. Effect: VaR is a threshold, not an average.' },
            { sym: 'z_{\\alpha}\\sigma', say: 'how many standard deviations below the mean the cut-off lies. Effect: raising confidence from 95% to 99% multiplies the figure by 2.326/1.645 = 1.41. Why: it uses the shape of the normal curve.' },
            { sym: '\\mu', say: 'the expected return over the holding period. For one day it is tiny and often ignored.' },
          ],
          worked: {
            title: 'One-day 99% VaR of a $1,000,000 portfolio',
            steps: ['Daily volatility 1.2%, mean ≈ 0.', 'VaR = \\(2.326 \\times 1.2\\% \\times 1{,}000{,}000 = \\$27{,}900\\).', 'Ten-day VaR (square-root-of-time): \\(27{,}900 \\times \\sqrt{10} = \\$88{,}200\\).'],
            answer: 'On 99 days out of 100 the portfolio should lose less than about $27,900 (under the normal model). On the other day it loses more, by an unspecified amount.',
          },
        },
        {
          t: 'table',
          head: ['Method', 'How', 'Strength', 'Weakness'],
          rows: [
            ['Parametric', 'Assume normal; \\(\\mu\\) and \\(\\sigma\\) from data', 'Fast; easy to decompose by position', 'Normal underestimates tails; breaks for options'],
            ['Historical simulation', 'Re-run today’s portfolio through each past day; read off the 1% worst', 'No distribution assumption; captures fat tails seen in the data', 'Only as good as the window; ignores unseen events; noisy at 99%+'],
            ['Monte Carlo', 'Simulate returns from a model, revalue the portfolio', 'Handles options and any model', 'Slow; model risk'],
          ],
        },
        { t: 'quant-viz', viz: 'var' },
      ],
    },
    {
      id: 'es',
      title: 'Expected shortfall',
      lead: 'How bad is bad?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{ES}_{\alpha}=E\big[\,L \mid L\ge \text{VaR}_{\alpha}\big]\;\overset{\text{normal}}{=}\;\mu_L+\sigma\,\frac{\varphi(z_\alpha)}{1-\alpha}`,
          caption: 'Expected shortfall: the average loss in the worst (1−α) of cases; closed form for a normal loss.',
          where: [{ sym: 'L', def: 'the loss' }, { sym: '\\varphi', def: 'the standard normal density' }],
          syntax: [
            { sym: 'E[L\\mid L\\ge \\text{VaR}]', say: 'the average of losses given that they are at least VaR. Effect: unlike VaR, it responds to how heavy the tail is. Why: it averages the whole tail, so two portfolios with the same VaR but different tails differ.' },
            { sym: '\\varphi(z_\\alpha)/(1-\\alpha)', say: 'for the normal: the density at the cut-off divided by the tail probability. At 99%: \\(0.0267/0.01 = 2.665\\), above the VaR factor 2.326.' },
          ],
          worked: {
            title: 'Same portfolio',
            steps: ['σ = 1.2% daily, V = $1,000,000.', 'ES at 99% (normal): \\(2.665 \\times 1.2\\% \\times 10^6 = \\$32{,}000\\) versus VaR $27,900.'],
            answer: 'Under a normal model ES is only 15% above VaR; with fat tails the gap is often 30% or more. Basel III moved market-risk capital to 97.5% ES for this reason.',
          },
        },
        { t: 'callout', tone: 'note', title: 'Coherence', text: 'A coherent risk measure satisfies sub-additivity: the risk of a combined portfolio should not exceed the sum of the risks of its parts. VaR can violate this; ES does not (Artzner et al., 1999).' },
      ],
    },
    {
      id: 'dd',
      title: 'Drawdown, Sharpe and Sortino',
      lead: 'Risk over a path, and risk-adjusted return.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{MDD}=\max_{t}\Big(1-\frac{V_t}{\max_{s\le t}V_s}\Big),\qquad \text{Sharpe}=\frac{\bar r - r_f}{\sigma}\sqrt{k},\qquad \text{Sortino}=\frac{\bar r - r_f}{\sigma_{d}}\sqrt{k}`,
          caption: 'Maximum drawdown, the annualised Sharpe ratio and the Sortino ratio.',
          where: [{ sym: 'V_t', def: 'portfolio value at time t' }, { sym: 'k', def: 'periods per year (252 for daily data)' }, { sym: '\\sigma_d', def: 'downside deviation: the root of the mean squared shortfall below a target (0 or r_f)' }],
          syntax: [
            { sym: '\\max_{s\\le t}V_s', say: 'the running peak. Effect: drawdown is the distance below the previous high. Why: investors feel the fall from a peak, not volatility.' },
            { sym: '(\\bar r - r_f)/\\sigma', say: 'excess return per unit of risk. Effect: leverage does not change it. Why: both numerator and denominator scale together.' },
            { sym: '\\sqrt{k}', say: 'annualisation of a per-period Sharpe: mean grows with k, volatility with √k, so the ratio grows with √k.' },
            { sym: '\\sigma_d', say: 'counts only returns below the target, so upside volatility is not penalised. Effect: Sortino is higher than Sharpe for positively skewed strategies.' },
          ],
          worked: {
            title: 'A daily strategy',
            steps: ['Mean daily excess return 0.05%, daily standard deviation 1.0%.', 'Daily Sharpe = 0.05. Annualised: \\(0.05 \\times \\sqrt{252} = 0.79\\).'],
            answer: 'An annualised Sharpe of 0.79 is respectable for an equity-like strategy. Equity markets have long-run Sharpe ratios around 0.3 to 0.5.',
          },
        },
        { t: 'callout', tone: 'warn', title: 'Sharpe is easy to inflate', text: 'Selling insurance (short volatility) gives long runs of small gains and a high Sharpe until the crash. Sharpe uses only mean and variance, so it ignores skew and kurtosis. Look at drawdowns and tails alongside it.' },
      ],
    },
  ],
  sources: [
    'Jorion, P. (2006). *Value at Risk* (3rd ed.). McGraw-Hill.',
    'Artzner, P., Delbaen, F., Eber, J.-M. & Heath, D. (1999). Coherent measures of risk. *Mathematical Finance*, 9(3).',
    'Sharpe, W. F. (1994). The Sharpe ratio. *Journal of Portfolio Management*, 21(1).',
    'Basel Committee on Banking Supervision (2019). *Minimum capital requirements for market risk*.',
  ],
  related: ['finance/quant/returns-and-distributions', 'finance/quant/portfolio-theory', 'finance/foundations/risk-return', 'finance/trading/sizing-and-ruin'],
}

export default guide
