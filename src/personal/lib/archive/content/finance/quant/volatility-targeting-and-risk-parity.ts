import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Volatility changes over time, and volatile periods tend to cluster. Volatility targeting adjusts exposure to keep risk roughly constant. Risk parity applies the same idea across assets: rather than equal money, give each asset an equal share of risk. Both rely on forecasting volatility and often use leverage.',
  nutshell: [
    '**Volatility targeting**: exposure = target volatility ÷ forecast volatility.',
    'Moreira and Muir (2017) found volatility-managed portfolios improved Sharpe ratios for several factors.',
    '**Risk parity**: weights such that each asset contributes equally to portfolio risk; in a two-asset case, w₁σ₁ = w₂σ₂.',
    'Risk-parity portfolios hold many bonds and often lever up to reach equity-like returns; they suffer when stocks and bonds fall together (as in 2022).',
  ],
  sections: [
    {
      id: 'vt',
      title: 'Volatility targeting',
      blocks: [
        {
          t: 'math',
          tex: String.raw`L_t = \min\!\Big(\frac{\sigma^*}{\hat\sigma_t},\ L_{\max}\Big), \qquad \hat\sigma_t^2 = \lambda\hat\sigma_{t-1}^2 + (1-\lambda)r_{t-1}^2`,
          caption: 'Exposure from a target volatility σ* and an exponentially weighted volatility forecast, with a leverage cap.',
          plain: 'Forecast the asset’s volatility (here with an exponentially weighted average of squared returns, which reacts to recent turbulence). Divide your target volatility by the forecast to get how much exposure to hold: less in stormy markets, more in calm ones, up to a maximum leverage.',
          where: [
            { sym: String.raw`L_t`, def: 'exposure (1 = fully invested)' },
            { sym: String.raw`\sigma^*`, def: 'target volatility' },
            { sym: String.raw`\hat\sigma_t`, def: 'forecast volatility' },
            { sym: String.raw`\lambda`, def: 'decay factor (e.g. 0.94 daily)' },
            { sym: String.raw`L_{\max}`, def: 'leverage cap' },
          ],
          syntax: [
            { sym: String.raw`\min(a, b)`, say: 'the smaller of a and b' },
          ],
          worked: {
            title: 'Equities with a 12% target',
            steps: [
              String.raw`Calm market, forecast 10%: \(L = 12/10 = 1.2\).`,
              String.raw`Turbulent market, forecast 30%: \(L = 12/30 = 0.4\).`,
              String.raw`Very calm, forecast 6%: \(12/6 = 2.0\), capped at \(L_{\max} = 1.5\).`,
            ],
            why: [
              'slightly leveraged when calm',
              'cut to 40% in a storm',
              'cap prevents extreme leverage',
            ],
            answer: 'Exposure moves between 0.4 and 1.5 as volatility changes, keeping realised risk near 12%. Turnover and the risk of sudden jumps after calm periods are the costs.',
          },
        },
      ],
    },
    {
      id: 'rp',
      title: 'Risk parity',
      blocks: [
        {
          t: 'math',
          tex: String.raw`RC_i = w_i\,\frac{(\Sigma w)_i}{\sigma_p}, \qquad \text{two assets: } w_1\sigma_1 = w_2\sigma_2 \Rightarrow w_1 = \frac{\sigma_2}{\sigma_1 + \sigma_2}`,
          caption: 'Risk contribution of asset i (Σ is the covariance matrix), and the equal-risk solution for two assets.',
          plain: 'Each asset’s risk contribution is its weight times how much it adds to portfolio risk at the margin; contributions add up to total volatility. Risk parity sets them equal. With two assets the answer is simple (whatever their correlation): weight each in proportion to the other’s volatility.',
          where: [
            { sym: String.raw`RC_i`, def: 'risk contribution of asset i' },
            { sym: String.raw`\Sigma`, def: 'covariance matrix' },
            { sym: String.raw`\sigma_p`, def: 'portfolio volatility' },
          ],
          syntax: [
            { sym: String.raw`(\Sigma w)_i`, say: 'the i-th entry of the covariance matrix times the weights' },
          ],
          worked: {
            title: 'Stocks (16% vol) and bonds (6% vol), correlation 0',
            steps: [
              String.raw`\(w_s = 6/(16 + 6) = 27.3\%\), \(w_b = 16/22 = 72.7\%\).`,
              String.raw`Check: \(0.273 \times 16 = 4.36\), \(0.727 \times 6 = 4.36\).`,
              String.raw`Portfolio vol: \(\sqrt{(0.273 \times 0.16)^2 + (0.727 \times 0.06)^2} = \sqrt{0.001908 + 0.001903} = 6.17\%\).`,
              String.raw`To target 10%: lever by \(10/6.17 = 1.62\).`,
            ],
            why: [
              'weights inversely proportional to volatility',
              'equal risk from each',
              'combined risk with zero correlation',
              'leverage to reach an equity-like risk level',
            ],
            answer: 'About 27% stocks and 73% bonds, levered 1.6×. Compare a 60/40 portfolio, where stocks supply around 90% of the risk.',
          },
        },
      ],
    },
  ],
  sources: [
    'Moreira, A., & Muir, T. (2017). Volatility-managed portfolios. Journal of Finance, 72(4), 1611–1644.',
    'Qian, E. (2005). Risk parity portfolios. PanAgora Asset Management.',
    'Asness, C. S., Frazzini, A., & Pedersen, L. H. (2012). Leverage aversion and risk parity. Financial Analysts Journal, 68(1), 47–59.',
    'Maillard, S., Roncalli, T., & Teïletche, J. (2010). The properties of equally weighted risk contribution portfolios. Journal of Portfolio Management, 36(4), 60–70.',
  ],
  related: ['finance/philosophies/allocation', 'finance/quant/portfolio-theory', 'finance/quant/returns-and-distributions'],
}

export default guide
