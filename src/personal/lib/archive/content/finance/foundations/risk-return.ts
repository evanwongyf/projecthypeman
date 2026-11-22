import type { Guide } from '../../../guide'

// Two assets, each 20% volatile, with correlation rho, mixed in proportions w and 1 − w.
const frontier = (rho: number) =>
  Array.from({ length: 21 }, (_, k) => {
    const w = k / 20
    const s1 = 0.15
    const s2 = 0.25
    const sd = Math.sqrt(w * w * s1 * s1 + (1 - w) * (1 - w) * s2 * s2 + 2 * w * (1 - w) * rho * s1 * s2)
    return [sd, w * 0.05 + (1 - w) * 0.1] as [number, number]
  })

const guide: Guide = {
  intro:
    'Higher expected returns come with higher risk: that is the central trade-off of finance. This guide puts numbers on both: how to measure returns and volatility, why diversification is "the only free lunch", and how the capital asset pricing model links risk to the return investors should expect.',
  nutshell: [
    'Risk is usually measured by **volatility**: the standard deviation of returns.',
    'Volatility drags down compound returns: geometric return ≈ arithmetic return − \\(\\sigma^2/2\\).',
    'Combining assets that do not move together lowers risk without lowering expected return: **diversification**.',
    'The **Sharpe ratio** measures return per unit of risk.',
    'In **CAPM**, only market (undiversifiable) risk, measured by **beta**, earns a reward.',
  ],
  sections: [
    {
      id: 'returns',
      title: 'Measuring returns',
      blocks: [
        {
          t: 'math',
          tex: String.raw`R = \frac{P_1 - P_0 + D}{P_0},\qquad r = \ln\frac{P_1}{P_0}`,
          syntax: [
            { sym: String.raw`P_0, P_1`, say: String.raw`Read "P zero" (the starting price) and "P one" (the ending price). The subscripts label points in time.` },
            { sym: String.raw`P_1 - P_0 + D`, say: String.raw`Total gain: the price change plus any dividend received. Dividing by \(P_0\) turns that dollar gain into a fraction of what you put in.` },
            { sym: String.raw`\ln`, say: String.raw`Read "natural log of": the inverse of \(e^x\). It answers "what continuously compounded rate turns \(P_0\) into \(P_1\)?"` },
          ],
          worked: {
            steps: [
              String.raw`Given: a stock bought at \(P_0 = \$50\), now \(P_1 = \$53\), having paid a dividend \(D = \$1\).`,
              String.raw`Simple return: \(R = \frac{53 - 50 + 1}{50} = \frac{4}{50} = 0.08\), i.e. 8%.`,
              String.raw`Log return (price only) for a $100 stock rising to $110: \(r = \ln\frac{110}{100} = \ln 1.1 \approx 0.0953\).`,
              String.raw`Add-up test: a further fall from $110 to $99 has \(r = \ln 0.9 \approx -0.1054\).`,
              String.raw`Sum of log returns: \(0.0953 - 0.1054 = -0.0101\), which equals \(\ln\frac{99}{100} = \ln 0.99\) exactly.`,
            ],
            answer: String.raw`The $50 stock returned 8% including its dividend; and log returns add across periods to give the whole-period move ($100 to $99 is about -1.01% in log terms).`,
          },
          where: [
            { sym: 'R', def: 'Simple (holding-period) return, including dividends D' },
            { sym: 'r', def: 'Log return: adds up neatly over time' },
          ],
          caption: 'Both describe the same move as a number you can compare across stocks of any price: +0.05 means up 5%, regardless of whether the stock is $10 or $1,000. R is the one to use for a single period’s percentage gain; r is the one that is safe to add across many periods (R’s do not add up correctly, which is exactly the trap in the arithmetic-versus-geometric example below).',
        },
        {
          t: 'math',
          tex: String.raw`\bar R_{\text{arith}} = \frac{1}{n}\sum R_t,\qquad \bar R_{\text{geo}} = \left(\prod_{t=1}^{n}(1 + R_t)\right)^{1/n} - 1 \approx \bar R_{\text{arith}} - \frac{\sigma^2}{2}`,
          syntax: [
            { sym: String.raw`\bar R`, say: String.raw`Read "R bar": the bar means average. The subscript says which kind of average.` },
            { sym: String.raw`\sum R_t`, say: String.raw`Read "the sum of R sub t": add up the return from every period t.` },
            { sym: String.raw`\prod_{t=1}^{n}(1 + R_t)`, say: String.raw`Read "the product from t equals 1 to n of one plus R sub t": multiply together (1 + return) for t = 1, 2, ... n. It is the same as the sum sign but multiplying, giving total growth.` },
            { sym: String.raw`(\cdots)^{1/n}`, say: String.raw`Raise to the power one over n, i.e. take the n-th root: this turns total growth into growth per period.` },
          ],
          worked: {
            steps: [
              String.raw`Given four annual returns: +20%, -10%, +30%, -5%, so \(R_t = 0.20, -0.10, 0.30, -0.05\) and \(n = 4\).`,
              String.raw`Arithmetic mean: \(\frac{0.20 - 0.10 + 0.30 - 0.05}{4} = \frac{0.35}{4} = 0.0875\), i.e. 8.75%.`,
              String.raw`Total growth: \(1.20 \times 0.90 \times 1.30 \times 0.95 = 1.3338\).`,
              String.raw`Take the fourth root: \(1.3338^{1/4} \approx 1.0747\), so \(\bar R_{\text{geo}} \approx 7.47\%\).`,
              String.raw`Check the shortcut: the sample standard deviation is \(\sigma \approx 0.193\), so \(0.0875 - 0.193^2/2 \approx 0.0689\), the same ballpark as 7.47%.`,
            ],
            answer: String.raw`The portfolio earned 8.75% on the arithmetic average but only 7.47% a year compounded: $1 became $1.33, not $1.40 (\(1.0875^4\)).`,
          },
          where: [
            { sym: 'R_t', def: 'The return in period t' },
            { sym: 'n', def: 'Number of periods' },
            { sym: String.raw`\sigma`, def: 'Volatility (standard deviation) of the returns' },
          ],
          caption: 'The geometric mean is what you actually earn over time. It is always at or below the arithmetic mean, and the gap grows with volatility, so when a fund reports its "average annual return", check which mean it used: the arithmetic one always looks better and is easy to quote honestly while still overstating what you would have actually ended up with.',
        },
        {
          t: 'example',
          title: 'Volatility drag',
          lines: [
            { label: 'Year 1', text: '−50%' },
            { label: 'Year 2', text: '+50%' },
            { label: 'Arithmetic mean', text: '\\((−50 + 50)/2 = 0\\%\\)' },
            { label: 'Reality', text: '\\(100 \\times 0.5 \\times 1.5 = 75\\): you lost 25%; geometric mean \\(\\sqrt{0.75} - 1 \\approx -13.4\\%\\) a year' },
          ],
        },
      ],
    },
    {
      id: 'risk',
      title: 'Volatility',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\sigma = \sqrt{\frac{1}{n-1}\sum_{t=1}^{n}\left(R_t - \bar R\right)^2},\qquad \sigma_{\text{annual}} \approx \sigma_{\text{monthly}}\sqrt{12}`,
          syntax: [
            { sym: String.raw`\sigma`, say: String.raw`Read "sigma": the standard deviation, a typical distance of returns from their average.` },
            { sym: String.raw`\sum_{t=1}^{n}\left(R_t - \bar R\right)^2`, say: String.raw`Read "the sum from t equals 1 to n of (R sub t minus R bar) squared": for each period take its distance from the average, square it (so ups and downs both count positive), and add them all.` },
            { sym: String.raw`\frac{1}{n-1}`, say: String.raw`Divide by n minus 1, not n (the sample correction), to get the average squared distance; then \(\sqrt{\ }\) undoes the squaring.` },
            { sym: String.raw`\sqrt{12}`, say: String.raw`Read "root twelve" (about 3.46): variance adds over independent months, so volatility scales with the square root of time, not with time.` },
          ],
          worked: {
            steps: [
              String.raw`Given six monthly returns: +2%, -1%, +3%, 0%, -2%, +4%, so \(n = 6\).`,
              String.raw`Average: \(\bar R = \frac{0.02 - 0.01 + 0.03 + 0 - 0.02 + 0.04}{6} = 0.01\).`,
              String.raw`Squared deviations: \(0.01^2, 0.02^2, 0.02^2, 0.01^2, 0.03^2, 0.03^2 = 0.0001, 0.0004, 0.0004, 0.0001, 0.0009, 0.0009\), summing to 0.0028.`,
              String.raw`Divide by \(n - 1 = 5\): \(0.0028 / 5 = 0.00056\), the variance.`,
              String.raw`Square root: \(\sigma_{\text{monthly}} = \sqrt{0.00056} \approx 0.02366\), i.e. 2.37%.`,
              String.raw`Annualise: \(0.02366 \times \sqrt{12} \approx 0.0820\).`,
            ],
            answer: String.raw`Monthly volatility is about 2.4%, which is about 8.2% a year: a fairly calm investment next to the 15-20% of global shares.`,
          },
          where: [
            { sym: 'R_t', def: 'The return in period t' },
            { sym: String.raw`\bar R`, def: 'The average return over the n periods' },
            { sym: 'n', def: 'Number of periods' },
          ],
          caption: 'The square-root scaling matters when comparing numbers quoted on different timeframes: a fund’s monthly volatility looks deceptively small until you multiply by √12 to put it on the same annual footing everyone else quotes. Global stock markets have historically had annual volatility around 15–20%; government bonds of rich countries much less, see the metric below for what counts as high or low.',
        },
        {
          t: 'metric',
          name: 'volatility (σ, standard deviation of returns)',
          shows: 'How much an investment\'s returns swing around their average, up or down, in a typical period. It says nothing about direction, a stock that doubled steadily has low σ; a stock that is up 40% one month and down 35% the next has high σ, even if both end up at the same price a year later. σ is the standard yardstick for "how bumpy is this ride".',
          eli5: 'Two buses both get you to school on time on average. Bus A arrives within a minute or two every day. Bus B is sometimes 20 minutes early and sometimes 20 minutes late. Bus B has higher volatility, same average arrival time, far less predictable each single day.',
          higher: 'Bigger swings, in both directions. A stock with σ = 40% a year could plausibly be up 40% or down 40% within twelve months. Higher volatility means more uncertainty about what you will actually have when you need the money, and (per the arithmetic above) it also drags your real compounded return below the simple average the more volatile it is.',
          lower: 'Smaller swings around the average. Cash and short-term government bonds have σ close to 0%: you can be fairly confident what you will have next year. Lower volatility usually comes with a lower expected return too, see the Sharpe ratio below for whether you are being paid enough for the risk you do take.',
          typical: 'Rough historical annual figures: cash ~0–1%, investment-grade bonds ~5–8%, a diversified developed-market stock index ~15–18%, a single small-company stock ~30–50%+, Bitcoin ~60–80%.',
        },
      ],
    },
    {
      id: 'diversification',
      title: 'Diversification',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\sigma_p^2 = w_1^2\sigma_1^2 + w_2^2\sigma_2^2 + 2w_1w_2\,\rho_{12}\,\sigma_1\sigma_2`,
          syntax: [
            { sym: String.raw`\sigma_p^2`, say: String.raw`Read "sigma sub p, squared": the variance of the portfolio p. Take its square root at the end to get volatility.` },
            { sym: String.raw`w_1^2\sigma_1^2`, say: String.raw`Read "w one squared times sigma one squared": the weight squared times the asset’s own variance. Do it for each asset.` },
            { sym: String.raw`2w_1w_2\,\rho_{12}\,\sigma_1\sigma_2`, say: String.raw`Read "two w one w two rho one-two sigma one sigma two": the interaction term. Multiply the two weights, the two volatilities and the correlation rho; when rho is below 1 this term shrinks and diversification helps.` },
          ],
          worked: {
            steps: [
              String.raw`Given: asset 1 has \(w_1 = 0.6\), \(\sigma_1 = 25\%\); asset 2 has \(w_2 = 0.4\), \(\sigma_2 = 10\%\); correlation \(\rho_{12} = 0.2\).`,
              String.raw`Asset 1 term: \(0.6^2 \times 0.25^2 = 0.36 \times 0.0625 = 0.0225\).`,
              String.raw`Asset 2 term: \(0.4^2 \times 0.10^2 = 0.16 \times 0.01 = 0.0016\).`,
              String.raw`Interaction: \(2 \times 0.6 \times 0.4 \times 0.2 \times 0.25 \times 0.10 = 0.0024\).`,
              String.raw`Variance: \(0.0225 + 0.0016 + 0.0024 = 0.0265\); volatility \(\sigma_p = \sqrt{0.0265} \approx 0.1628\).`,
            ],
            answer: String.raw`The portfolio’s volatility is about 16.3%, below the weighted average of 19% (\(0.6 \times 25 + 0.4 \times 10\)): that gap is the benefit of diversification.`,
          },
          where: [
            { sym: 'w_1, w_2', def: 'Portfolio weights (adding to 1)' },
            { sym: String.raw`\rho_{12}`, def: 'Correlation between the two assets, from −1 to +1' },
          ],
          caption: 'Unless ρ = 1, the portfolio is less volatile than the weighted average of its parts.',
        },
        {
          t: 'example',
          title: 'Two stocks, each 20% volatile, 50/50',
          lines: [
            { label: 'ρ = 1', text: '\\(\\sigma_p = 20\\%\\): no benefit' },
            { label: 'ρ = 0.3', text: '\\(\\sigma_p = \\sqrt{0.25(0.04) + 0.25(0.04) + 2(0.25)(0.3)(0.04)} = \\sqrt{0.026} \\approx 16.1\\%\\)' },
            { label: 'ρ = 0', text: '\\(\\sigma_p \\approx 14.1\\%\\)' },
            { label: 'ρ = −1', text: '\\(\\sigma_p = 0\\): perfect hedge' },
          ],
        },
        {
          t: 'plot',
          title: 'Risk of an equal-weighted portfolio as stocks are added',
          x: [1, 40],
          y: [0, 0.4],
          xLabel: 'Number of stocks',
          yLabel: 'Portfolio volatility',
          curves: [{ f: (n: number) => Math.sqrt(0.35 ** 2 / n + (1 - 1 / n) * 0.3 * 0.35 ** 2), label: 'σ = 35% each, ρ = 0.3' }],
          hlines: [{ y: Math.sqrt(0.3) * 0.35, label: 'Market risk floor ≈ 19%' }],
          shade: [{ from: 1, to: 15, label: 'Most of the benefit', color: 'var(--mint)' }],
          caption: 'Stock-specific risk diversifies away; market-wide risk does not. Most of the benefit comes from the first 15–30 stocks.',
        },
        {
          t: 'plot',
          title: 'Mixing a 5% and a 10% asset: the efficient frontier',
          x: [0, 0.3],
          y: [0.04, 0.11],
          xLabel: 'Portfolio volatility',
          yLabel: 'Expected return',
          data: [
            { pts: frontier(1), label: 'ρ = 1 (straight line)', dashed: true },
            { pts: frontier(0.2), label: 'ρ = 0.2', dots: true },
            { pts: frontier(-0.5), label: 'ρ = −0.5' },
          ],
          caption: 'The lower the correlation, the further the curve bulges left: more return for the same risk. Harry Markowitz’s insight, 1952.',
        },
        { t: 'callout', tone: 'fact', title: 'The only free lunch', text: 'Harry Markowitz’s 1952 paper "Portfolio Selection", written as a graduate student, founded modern portfolio theory. It earned him the 1990 Nobel prize, shared with William Sharpe and Merton Miller. Diversification is often called "the only free lunch in finance".' },
      ],
    },
    {
      id: 'sharpe',
      title: 'The Sharpe ratio',
      blocks: [
        {
          t: 'math',
          tex: String.raw`S = \frac{R_p - R_f}{\sigma_p}`,
          syntax: [
            { sym: String.raw`R_p - R_f`, say: String.raw`Read "R sub p minus R sub f": the excess return, what the portfolio earned over and above the risk-free rate.` },
            { sym: String.raw`\frac{\ \cdot\ }{\sigma_p}`, say: String.raw`Divide by the volatility: the result is reward per unit of risk, with no units of its own.` },
          ],
          worked: {
            steps: [
              String.raw`Given: Fund A returned 11% with volatility 15%; Fund B returned 8% with volatility 8%; the risk-free rate is 3%.`,
              String.raw`Fund A excess return: \(11\% - 3\% = 8\%\). Sharpe: \(S_A = \frac{0.08}{0.15} \approx 0.533\).`,
              String.raw`Fund B excess return: \(8\% - 3\% = 5\%\). Sharpe: \(S_B = \frac{0.05}{0.08} = 0.625\).`,
              String.raw`Compare: \(0.625 > 0.533\).`,
            ],
            answer: String.raw`Fund A made more money, but Fund B earned more per unit of risk (0.63 versus 0.53), so it is the better risk-adjusted performer.`,
          },
          where: [
            { sym: 'R_p', def: 'Portfolio return' },
            { sym: 'R_f', def: 'Risk-free rate (e.g. treasury bills)' },
            { sym: String.raw`\sigma_p`, def: 'Portfolio volatility (standard deviation of returns)' },
          ],
          caption: 'Excess return per unit of volatility. A fund returning 9% with 12% volatility, when cash yields 3%, has S = 0.5, see the metric below for what counts as a good or bad reading.',
        },
        {
          t: 'metric',
          name: 'the Sharpe ratio',
          shows: 'How much extra return you got for every unit of bumpiness you put up with, above what you could have earned risk-free. It lets you compare a steady 7%-a-year fund with a wild 15%-a-year fund on equal footing: the question is not "who made more?" but "who made more per unit of stress?"',
          eli5: 'Two delivery drivers both average $200 a day in tips. Driver A\'s tips barely vary ($180–$220). Driver B\'s swing wildly ($0–$500). If you had to choose a job with predictable income, you\'d pick Driver A even though the average pay is identical, the Sharpe ratio is the number that captures that preference.',
          higher: 'More reward for the risk taken, the investment earned its volatility, not just rode it. A Sharpe ratio above 1 is considered good, above 2 very good, and above 3 exceptional (and worth asking hard questions about, since very high Sharpe ratios are rare and sometimes a sign of hidden risk, like in a strategy that "picks up pennies in front of a steamroller").',
          lower: 'Less reward for the risk taken. A Sharpe ratio near 0 means you earned about what cash would have paid, despite taking on real volatility, you were not compensated for the ride. A negative Sharpe ratio means the investment did worse than just holding cash.',
          typical: 'Long-run Sharpe ratio of a diversified stock index is roughly 0.3–0.5; well-regarded hedge funds often target 1–1.5; Bernie Madoff\'s fake fund claimed a suspiciously smooth ~2.5 for years, which in hindsight was a red flag, not a selling point.',
        },
      ],
    },
    {
      id: 'capm',
      title: 'Beta and CAPM',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\beta_i = \frac{\operatorname{Cov}(R_i, R_m)}{\operatorname{Var}(R_m)},\qquad E[R_i] = R_f + \beta_i\,\big(E[R_m] - R_f\big)`,
          syntax: [
            { sym: String.raw`\beta_i`, say: String.raw`Read "beta sub i": the beta of asset i. The subscript says which asset.` },
            { sym: String.raw`\operatorname{Cov}(R_i, R_m)`, say: String.raw`Read "the covariance of R i and R m": how much the stock and the market move together (positive if they tend to rise and fall at the same time).` },
            { sym: String.raw`\operatorname{Var}(R_m)`, say: String.raw`Read "the variance of the market return": how much the market swings on its own. Dividing by it scales the co-movement to a per-unit-of-market-move figure.` },
            { sym: String.raw`E[R_i]`, say: String.raw`Read "the expected value of R i": the average return you would anticipate for the stock. E[ ] means "long-run average of what is inside".` },
            { sym: String.raw`\big(E[R_m] - R_f\big)`, say: String.raw`Market risk premium: expected market return minus the risk-free rate; multiplied by beta to scale it to this stock.` },
          ],
          worked: {
            steps: [
              String.raw`Given five monthly returns. Market: +1%, -2%, +3%, 0%, +2% (mean 0.8%). Stock: +2%, -3%, +4.5%, 0%, +2.5% (mean 1.2%).`,
              String.raw`Market variance (divide by \(n-1 = 4\)): deviations \(0.2, -2.8, 2.2, -0.8, 1.2\) points, squares sum to \(14.8\), so \(\operatorname{Var}(R_m) = 3.7\) (in %-squared).`,
              String.raw`Covariance: products of deviations (stock deviations \(0.8, -4.2, 3.3, -1.2, 1.3\)) sum to \(21.7\), so \(\operatorname{Cov} = 5.425\).`,
              String.raw`Beta: \(\beta = \frac{5.425}{3.7} \approx 1.47\).`,
              String.raw`CAPM: with \(R_f = 4\%\) and market premium \(5\%\), \(E[R_i] = 4\% + 1.47 \times 5\% \approx 11.3\%\).`,
            ],
            answer: String.raw`The stock amplifies market moves about 1.5 times, so CAPM says it should pay roughly 11.3% a year, versus 9% for the market itself.`,
          },
          where: [
            { sym: String.raw`\beta_i`, def: 'How strongly the stock moves with the market (1 = in line; 1.5 = 50% more)' },
            { sym: 'E[R_i], R_f', def: 'The stock’s expected return, and the risk-free rate (e.g. treasury bills)' },
            { sym: String.raw`E[R_m] - R_f`, def: 'The market risk premium, historically around 4–6% a year' },
          ],
          caption: 'The capital asset pricing model: investors are only paid for risk they cannot diversify away.',
        },
        {
          t: 'metric',
          name: 'beta (β)',
          shows: 'How much a stock amplifies or dampens the market\'s moves. It is measured only against the overall market (not against the stock\'s own history), so it captures the part of a stock\'s risk that diversification cannot remove, which, per CAPM, is the only part investors get paid for.',
          eli5: 'Think of the stock market as a see-saw. β = 1 means your stock moves exactly as far as the see-saw does. β = 2 means your stock is on a longer plank, it swings twice as far, both up and down, for the same push. β = 0.5 means it is near the pivot, it barely moves even when the market swings hard.',
          higher: 'The stock amplifies market moves: if the market rises 10%, a β = 1.5 stock tends to rise about 15%; if the market falls 10%, it tends to fall about 15% too. High-beta stocks (growth tech, small caps, leveraged companies) are more exciting in bull markets and more painful in crashes.',
          lower: 'The stock dampens market moves. A β = 0.5 stock (utilities, consumer staples, healthcare) tends to move only about half as much as the market in either direction, steadier, but also slower to participate in rallies. A β below 0, which is rare, means the stock tends to move opposite to the market, which is valuable for diversification even if the stock itself loses money on average.',
          typical: 'β = 1 for the market itself by definition. Defensive sectors (utilities, staples) often run β ≈ 0.4–0.7; cyclical and high-growth stocks often run β ≈ 1.3–2.0; a company\'s β is usually recalculated by data providers every few months as more price history arrives.',
        },
        {
          t: 'plot',
          title: 'The security market line',
          x: [0, 2],
          y: [0, 0.16],
          xLabel: 'Beta',
          yLabel: 'Expected return',
          curves: [{ f: (b: number) => 0.03 + b * 0.055, label: 'E[R] = 3% + β × 5.5%' }],
          points: [
            { x: 0, y: 0.03, label: 'Risk-free 3%' },
            { x: 1, y: 0.085, label: 'Market 8.5%' },
            { x: 1.6, y: 0.118, label: 'High-beta stock 11.8%' },
          ],
          caption: 'Stocks above the line offer more than CAPM says they should (positive "alpha"); below it, less.',
        },
      ],
    },
  ],
  sources: [
    'Markowitz, H. (1952). Portfolio selection. *The Journal of Finance*, 7(1), 77–91.',
    'Sharpe, W. F. (1964). Capital asset prices. *The Journal of Finance*, 19(3), 425–442.',
    'Sharpe, W. F. (1966). Mutual fund performance. *The Journal of Business*, 39(1), 119–138.',
    'Dimson, E., Marsh, P., & Staunton, M. (2002). *Triumph of the Optimists*. Princeton University Press.',
  ],
  related: ['finance/foundations/efficient-markets', 'finance/fundamental/dcf', 'finance/technical/volatility'],
}

export default guide
