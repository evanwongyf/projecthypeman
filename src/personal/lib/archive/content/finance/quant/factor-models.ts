import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A factor model explains an asset’s return as exposure to a few common sources of risk plus a part that is its own. The market model is a regression, and alpha and beta are its coefficients. This guide shows how to estimate them, how to judge whether an alpha is real using its standard error and t-statistic, and what multi-factor models such as Fama–French add.',
  nutshell: [
    'Market model: \\(r_i - r_f = \\alpha + \\beta\\,(r_m - r_f) + \\varepsilon\\). **Beta** is the sensitivity to the market; **alpha** is the average return left over.',
    'The **t-statistic** \\(t=\\hat\\alpha/SE(\\hat\\alpha)\\) asks if alpha could be noise. A rule of thumb is \\(|t|>2\\), and \\(|t|>3\\) when many strategies were tried.',
    '**R²** is the share of variance explained by the factors; the rest is idiosyncratic and diversifiable.',
    'Adding factors (size, value, momentum, profitability, investment) often turns a "significant" single-factor alpha into a factor exposure.',
  ],
  sections: [
    {
      id: 'market',
      title: 'The market model as a regression',
      lead: 'A line through a cloud of points.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`r_t=\alpha+\beta\,m_t+\varepsilon_t,\qquad \hat\beta=\frac{\operatorname{Cov}(r,m)}{\operatorname{Var}(m)}=\rho_{rm}\frac{\sigma_r}{\sigma_m},\qquad \hat\alpha=\bar r-\hat\beta\,\bar m`,
          caption: 'Ordinary least squares for the one-factor model; r and m are excess returns.',
          where: [{ sym: 'r_t,\\ m_t', def: 'excess returns of the asset and of the market in period t' }, { sym: '\\varepsilon_t', def: 'the residual: the part not explained by the market, with mean zero' }],
          syntax: [
            { sym: '\\beta', say: 'the slope: the change in the asset’s return per 1% change in the market. Effect: β = 1.5 means about 1.5% when the market moves 1%. Why: the line through the data has that slope.' },
            { sym: '\\operatorname{Cov}(r,m)/\\operatorname{Var}(m)', say: 'how much the asset co-moves with the market, relative to the market’s own variability. Effect: a high covariance gives a high beta; dividing by Var(m) standardises it.' },
            { sym: '\\rho\\,\\sigma_r/\\sigma_m', say: 'the same thing in terms of correlation: a highly volatile asset has a high beta even at modest correlation.' },
            { sym: '\\alpha', say: 'the intercept: average return not explained by market exposure. Effect: positive alpha means outperformance for the risk taken, if it is real.' },
          ],
          worked: {
            title: 'Beta from summary numbers',
            steps: ['Asset volatility 30%, market volatility 18%, correlation 0.7.', '\\(\\beta = 0.7 \\times 30/18 = 1.17\\).', 'Share of variance explained (R²): \\(0.7^2=49\\%\\).'],
            answer: 'The asset has a beta of 1.17: half of its variance is market-driven, and half is company-specific and can be diversified away.',
          },
        },
        { t: 'quant-viz', viz: 'factor-regression' },
      ],
    },
    {
      id: 't',
      title: 'Is the alpha real?',
      lead: 'Standard errors and t-statistics.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`SE(\hat\alpha)\approx\frac{s_{\varepsilon}}{\sqrt{n}},\qquad t=\frac{\hat\alpha}{SE(\hat\alpha)},\qquad \text{Information ratio}=\frac{\hat\alpha}{s_\varepsilon}\sqrt{k}`,
          caption: 'The standard error of alpha, its t-statistic and the annualised information ratio.',
          where: [{ sym: 's_\\varepsilon', def: 'standard deviation of the regression residuals per period' }, { sym: 'n', def: 'number of observations' }, { sym: 'k', def: 'periods per year' }],
          syntax: [
            { sym: 's_\\varepsilon/\\sqrt{n}', say: 'residual noise divided by the square root of the sample size. Effect: more data tightens the estimate slowly. Why: averaging n noisy numbers cuts the noise by √n.' },
            { sym: 't = \\hat\\alpha / SE', say: 'how many standard errors from zero the estimate is. Effect: |t| > 2 is roughly a 5% two-sided test. Why: under the null, t is about standard normal.' },
          ],
          worked: {
            title: 'Five years of monthly data',
            steps: ['Monthly alpha 0.4% (4.9% a year), residual standard deviation 3.0% per month, n = 60.', '\\(SE = 3.0/\\sqrt{60} = 0.387\\%\\); \\(t = 0.4/0.387 = 1.03\\).', 'You would need about \\((2/0.4)^2 \\times 3.0^2 = 225\\) months (19 years) to reach t = 2.'],
            answer: 'A 5% annual alpha looks excellent but is statistically indistinguishable from zero after 5 years. Nearly every claimed alpha on short samples is like this.',
          },
        },
        { t: 'callout', tone: 'warn', title: 'Many tests, many false alphas', text: 'If you test 100 strategies, five will show |t| > 2 by chance. Harvey, Liu and Zhu (2016) argue that new factors should clear t > 3.0 to account for the hundreds already tried.' },
      ],
    },
    {
      id: 'multi',
      title: 'More factors',
      lead: 'Alpha can be a missing factor.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`r_t-r_f=\alpha+\beta_{m}\,\text{MKT}_t+\beta_s\,\text{SMB}_t+\beta_v\,\text{HML}_t+\varepsilon_t`,
          caption: 'The Fama–French three-factor model (1993); the five-factor version adds profitability (RMW) and investment (CMA).',
          where: [{ sym: '\\text{SMB}', def: 'small minus big: the return of small-cap stocks minus large-cap stocks' }, { sym: '\\text{HML}', def: 'high minus low: the return of high book-to-market (value) stocks minus low (growth)' }],
          syntax: [
            { sym: '\\beta_s\\,\\text{SMB}', say: 'exposure to the size premium. Effect: a small-cap fund’s "alpha" against the market alone may be only size exposure, which can be bought cheaply.' },
            { sym: '\\beta_v\\,\\text{HML}', say: 'exposure to the value premium. A positive loading is a tilt to value stocks.' },
            { sym: '\\alpha', say: 'what is left over. Effect: it typically shrinks, and often vanishes, once the factors are included. That is the point of the model.' },
          ],
          worked: {
            title: 'Alpha disappears',
            steps: ['A value fund shows a market-model alpha of +2.0% a year (t = 2.3).', 'In the three-factor regression: β_m = 0.98, β_s = 0.10, β_v = 0.55, alpha = +0.2% (t = 0.3).'],
            answer: 'Most of the apparent skill is a loading on the value factor: a tilt, not stock-picking. It is still useful, just cheaper to get from an index fund.',
          },
        },
      ],
    },
  ],
  sources: [
    'Sharpe, W. F. (1964). Capital asset prices. *Journal of Finance*, 19(3).',
    'Fama, E. F. & French, K. R. (1993). Common risk factors in the returns on stocks and bonds. *Journal of Financial Economics*, 33(1).',
    'Fama, E. F. & French, K. R. (2015). A five-factor asset pricing model. *Journal of Financial Economics*, 116(1).',
    'Harvey, C. R., Liu, Y. & Zhu, H. (2016). …and the cross-section of expected returns. *Review of Financial Studies*, 29(1).',
  ],
  related: ['finance/foundations/risk-return', 'finance/quant/portfolio-theory', 'finance/philosophies/factors', 'finance/quant/backtesting-and-overfitting'],
}

export default guide
