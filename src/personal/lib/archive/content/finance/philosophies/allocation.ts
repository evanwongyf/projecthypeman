import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'How you divide money between asset classes explains most of how a diversified portfolio behaves over time, more than which individual stocks you pick. This guide covers the classic mixes and the maths behind them: 60/40, risk parity, the All Weather and Permanent portfolios, the barbell, and rebalancing.',
  nutshell: [
    '**60/40**: 60% stocks, 40% bonds, the long-standing default balanced portfolio.',
    '**Risk parity** gives each asset an equal share of the **risk**, not of the money.',
    'The **Permanent Portfolio**: 25% each in stocks, long bonds, gold and cash.',
    'The **barbell**: mostly very safe assets, with a small slice of very risky ones.',
    '**Rebalancing** back to target weights sells what has risen and buys what has fallen.',
  ],
  sections: [
    {
      id: 'mixes',
      title: 'Classic portfolios',
      blocks: [
        {
          t: 'table',
          head: ['Portfolio', 'Stocks', 'Bonds', 'Gold / commodities', 'Cash', 'Idea'],
          rows: [
            ['60/40', '60%', '40%', '–', '–', 'Growth from stocks, ballast from bonds'],
            ['All Weather (popular version)', '30%', '55% (40% long, 15% intermediate)', '15% (7.5% each)', '–', 'Balanced across growth and inflation environments'],
            ['Permanent Portfolio (Harry Browne)', '25%', '25% long-term', '25% gold', '25%', 'One asset for each economic state: prosperity, deflation, inflation, recession'],
            ['Barbell (Taleb)', 'e.g. 10–15% in very risky bets', '–', '–', '85–90% in the safest assets', 'Limit the downside, keep exposure to big upside'],
          ],
        },
      ],
    },
    {
      id: 'parity',
      title: 'Risk parity',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\sigma_p = \sqrt{w^{\top}\Sigma\,w},\qquad RC_i = w_i\,\frac{(\Sigma w)_i}{\sigma_p},\qquad \sum_i RC_i = \sigma_p`,
          where: [
            { sym: 'w', def: 'Vector of portfolio weights' },
            { sym: String.raw`\Sigma`, def: 'Covariance matrix of asset returns' },
            { sym: 'RC_i', def: 'Risk contribution of asset i' },
          ],
          syntax: [
            { sym: String.raw`w^{\top}\Sigma\,w`, say: String.raw`Read "w transpose sigma w". The small \(\top\) flips the column of weights into a row, so you multiply weights by the covariance matrix and then by the weights again. The result is the portfolio variance, a single number.` },
            { sym: String.raw`\sqrt{\;\cdot\;}`, say: 'Read "the square root of". Variance is in squared percentage points, so take the root to get volatility back in ordinary percent.' },
            { sym: String.raw`(\Sigma w)_i`, say: String.raw`Read "the i-th entry of sigma w". Do the matrix times weights first, then pick out the entry for asset \(i\): how much of the portfolio’s co-movement that asset carries.` },
            { sym: String.raw`\sum_i RC_i`, say: String.raw`Read "the sum over i of R C i". Add up the risk contributions of every asset; they always total \(\sigma_p\), which is what makes them a clean split of the risk.` },
          ],
          worked: {
            title: 'A 60/40 stock/bond mix',
            steps: [
              String.raw`Given: \(w = (0.6,\ 0.4)\), stock volatility 16%, bond volatility 6%, correlation 0. With zero correlation \(\Sigma\) has only its diagonal: \(0.16^2 = 0.0256\) and \(0.06^2 = 0.0036\).`,
              String.raw`Compute \(\Sigma w\): stocks \(0.0256 \times 0.6 = 0.01536\); bonds \(0.0036 \times 0.4 = 0.00144\).`,
              String.raw`Then \(w^{\top}\Sigma\,w = 0.6 \times 0.01536 + 0.4 \times 0.00144 = 0.009216 + 0.000576 = 0.009792\), so \(\sigma_p = \sqrt{0.009792} \approx 9.9\%\).`,
              String.raw`Risk contributions: \(RC_{\text{stocks}} = 0.6 \times 0.01536 / 0.09895 \approx 0.0931\) (9.3 points) and \(RC_{\text{bonds}} = 0.4 \times 0.00144 / 0.09895 \approx 0.0058\) (0.6 points).`,
              String.raw`Check: \(0.0931 + 0.0058 = 0.0989 \approx \sigma_p\). Stocks supply \(0.0931/0.0989 \approx 94\%\) of the risk.`,
            ],
            answer: 'Portfolio volatility is about 9.9%, and 94% of it comes from the 60% stock slice, so this mix is far from risk parity.',
          },
          caption: 'Risk parity chooses weights so every asset’s risk contribution is equal, not its dollar allocation. If one asset’s RC is much larger than the others, that asset is quietly running the whole portfolio’s volatility, even if it looks like a modest slice of the money (the example below shows exactly this happening to a plain 60/40 mix). Equalising RC across assets is how risk parity avoids that hidden concentration.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Ignoring correlations: } w_i \propto \frac{1}{\sigma_i}`,
          where: [{ sym: String.raw`\sigma_i`, def: 'Volatility (standard deviation of returns) of asset i' }],
          syntax: [
            { sym: String.raw`\propto`, say: String.raw`Read "is proportional to". The weights are not equal to \(1/\sigma_i\) yet; they have the same shape as it. Add up all the \(1/\sigma_i\) values and divide each by that total so the weights sum to 100%.` },
            { sym: String.raw`\frac{1}{\sigma_i}`, say: 'Read "one over sigma i", the reciprocal of volatility. The more volatile the asset, the smaller this number and the smaller its weight.' },
          ],
          worked: {
            title: 'Stocks at 16% volatility, bonds at 6%',
            steps: [
              String.raw`Reciprocals: \(1/0.16 = 6.25\) for stocks and \(1/0.06 = 16.67\) for bonds.`,
              String.raw`Total: \(6.25 + 16.67 = 22.92\).`,
              String.raw`Normalise: stocks \(6.25/22.92 = 27.3\%\); bonds \(16.67/22.92 = 72.7\%\).`,
              String.raw`Check the risk each carries (zero correlation): stocks \(0.273 \times 16\% = 4.36\%\); bonds \(0.727 \times 6\% = 4.36\%\). They match, and the portfolio volatility is \(\sqrt{4.36^2 + 4.36^2} \approx 6.2\%\).`,
              String.raw`To target 10% volatility, apply leverage of \(10/6.17 \approx 1.6\times\).`,
            ],
            answer: 'Weights of 27% stocks and 73% bonds equalise risk, at the cost of a low portfolio volatility (about 6%) that leverage of roughly 1.6 times must then lift.',
          },
          caption: 'With stocks at 16% volatility and bonds at 6%, inverse-volatility weights are about 27% stocks and 73% bonds, a far smaller stock weight than 60/40, which is exactly how risk parity equalises risk contribution: it simply holds less of whatever is more volatile. To reach a stock-like return, risk-parity funds then apply leverage, which is why a lower weight on paper does not necessarily mean lower risk once leverage is added back in.',
        },
        {
          t: 'example',
          title: 'Where the risk in 60/40 really sits',
          lines: [
            { label: 'Data', text: 'stocks σ = 16%, bonds σ = 6%, correlation 0' },
            { label: 'Variance pieces', text: 'stocks \\((0.6 \\times 0.16)^2 = 0.00922\\); bonds \\((0.4 \\times 0.06)^2 = 0.00058\\)' },
            { label: 'Share of risk', text: 'stocks \\(0.00922/(0.00922 + 0.00058) \\approx 94\\%\\)' },
            { label: 'So', text: 'a 60/40 portfolio’s ups and downs come almost entirely from its stocks' },
          ],
        },
      ],
    },
    {
      id: 'rebalance',
      title: 'Rebalancing',
      blocks: [
        {
          t: 'p',
          text: 'Over time, the asset that grows fastest takes over the portfolio, drifting its risk upward. Rebalancing (annually, or when weights drift by more than, say, 5 percentage points) restores the intended risk and enforces "buy low, sell high".',
        },
        {
          t: 'plot',
          title: 'Stock weight in an unrebalanced 60/40 portfolio',
          x: [0, 30],
          y: [0.5, 1],
          xLabel: 'Years',
          yLabel: 'Share in stocks',
          curves: [{ f: (t: number) => (0.6 * 1.08 ** t) / (0.6 * 1.08 ** t + 0.4 * 1.035 ** t), label: 'Stocks 8%/yr, bonds 3.5%/yr' }],
          hlines: [{ y: 0.6, label: 'Target 60%' }],
          caption: 'Left alone, it drifts towards 85% stocks after 30 years: a far riskier portfolio than intended.',
        },
        { t: 'callout', tone: 'fact', title: 'The 90% claim', text: 'A famous 1986 study (Brinson, Hood and Beebower) is often quoted as showing that asset allocation explains "over 90%" of returns. What it actually found was that allocation explained over 90% of the variation of a fund’s returns over time, a subtler point.' },
      ],
    },
  ],
  sources: [
    'Brinson, G. P., Hood, L. R., & Beebower, G. L. (1986). Determinants of portfolio performance. *Financial Analysts Journal*, 42(4), 39–44.',
    'Qian, E. (2005). Risk parity portfolios. *PanAgora Asset Management research paper*.',
    'Browne, H. (1987). *Why the Best-Laid Investment Plans Usually Go Wrong*. William Morrow.',
    'Taleb, N. N. (2012). *Antifragile*. Random House.',
  ],
  related: ['finance/foundations/risk-return', 'finance/assets/overview', 'finance/philosophies/passive'],
}

export default guide
