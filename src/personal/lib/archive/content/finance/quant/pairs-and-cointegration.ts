import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Pairs trading bets that two related prices that have drifted apart will come back together: buy the cheap one, short the expensive one. The key question is whether the gap really tends to close. Correlation is not enough; the statistical property needed is cointegration: a combination of the two prices that is stationary (mean-reverting).',
  nutshell: [
    '**Correlation** measures whether returns move together; **cointegration** means a weighted difference of the prices stays bounded and reverts.',
    '**Engle–Granger**: regress one log price on the other to get the hedge ratio β, then test the residual (the spread) for stationarity.',
    'The spread’s **half-life** tells you how long reversion typically takes.',
    'Trade on the spread’s **z-score**; exit near zero; stop out if the relationship breaks.',
  ],
  sections: [
    {
      id: 'spread',
      title: 'Hedge ratio and spread',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\ln A_t = \alpha + \beta \ln B_t + \varepsilon_t, \qquad s_t = \ln A_t - \beta \ln B_t`,
          caption: 'The cointegrating regression and the spread.',
          plain: 'Regress the log price of A on the log price of B over a formation period. The slope β is the hedge ratio: how many units of B (in value terms) to short for each unit of A held. The spread is what is left over; if the pair is cointegrated, it wanders around a constant level rather than drifting away.',
          where: [
            { sym: String.raw`A_t, B_t`, def: 'prices of the two assets' },
            { sym: String.raw`\beta`, def: 'hedge ratio' },
            { sym: String.raw`s_t`, def: 'the spread' },
            { sym: String.raw`\varepsilon_t`, def: 'regression residual' },
          ],
          syntax: [
            { sym: String.raw`\ln`, say: '“natural log”' },
          ],
          worked: {
            title: 'Two bank stocks',
            steps: [
              'Over two years, regression gives β = 0.85, α = 0.40.',
              String.raw`Today: \(\ln A = 3.50\), \(\ln B = 3.60\). Spread \(s = 3.50 - 0.85 \times 3.60 = 3.50 - 3.06 = 0.44\).`,
              'Spread mean 0.40, standard deviation 0.02.',
              String.raw`\(z = (0.44 - 0.40)/0.02 = 2.0\).`,
            ],
            why: [
              'fit on historical data only',
              'compute today’s spread',
              'its historical average and spread',
              'how unusual today’s spread is',
            ],
            answer: 'z = +2: A is rich relative to B. Short A and buy 0.85 units of B (in value) per unit of A; target z ≈ 0, stop if z exceeds about 3.5 or the cointegration test fails on new data.',
          },
        },
      ],
    },
    {
      id: 'test',
      title: 'Testing for cointegration',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\Delta s_t = \lambda\, s_{t-1} + \varepsilon_t, \qquad t_\lambda = \frac{\hat\lambda}{SE(\hat\lambda)}`,
          caption: 'The (Augmented) Dickey–Fuller regression on the spread; a sufficiently negative t-statistic rejects “no mean reversion”.',
          plain: 'If the spread mean-reverts, today’s change is pulled in the opposite direction from yesterday’s level, so λ is negative. The test asks whether λ is negative enough to rule out a random walk. Because β was estimated from the same data, the Engle–Granger critical values are stricter than the usual Dickey–Fuller ones (about −3.34 at 5% for two series, versus −2.86).',
          where: [
            { sym: String.raw`\Delta s_t`, def: 'change in the spread, s_t − s_{t−1}' },
            { sym: String.raw`\lambda`, def: 'speed of reversion (negative if mean-reverting)' },
            { sym: String.raw`t_\lambda`, def: 'test statistic' },
          ],
          syntax: [
            { sym: String.raw`\Delta`, say: '“change in”' },
            { sym: String.raw`\hat\lambda`, say: '“lambda hat”: the estimate' },
          ],
          worked: {
            title: 'Daily spread data',
            steps: [
              String.raw`Estimate \(\hat\lambda = -0.08\), standard error 0.0205.`,
              String.raw`\(t = -0.08/0.0205 = -3.90\).`,
              String.raw`Compare with the 5% Engle–Granger critical value −3.34: \(-3.90 < -3.34\), reject the random walk.`,
              String.raw`Half-life: \(-\ln 2/\ln(1 + \lambda) = -0.693/\ln 0.92 = 0.693/0.0834 \approx 8.3\) days.`,
            ],
            why: [
              'fit the regression',
              'the t-statistic',
              'stricter critical values account for estimating β',
              'how long a gap takes to halve',
            ],
            answer: 'The pair passes, with a half-life around 8 trading days: a trade should typically resolve within two to three weeks. Recheck regularly; cointegration often breaks after mergers, regulation or business changes.',
          },
        },
      ],
    },
    {
      id: 'risks',
      title: 'Risks',
      blocks: [
        { t: 'list', items: [
          'Relationship breaks (a takeover, a scandal, a change in business mix).',
          'Data snooping: testing thousands of pairs finds spurious ones; apply multiple-testing corrections and out-of-sample checks.',
          'Shorting costs, borrow availability and recall risk.',
          'Crowding: the 2007 “quant quake” hit many similar statistical-arbitrage funds at once (Khandani and Lo, 2007).',
        ] },
      ],
    },
  ],
  sources: [
    'Engle, R. F., & Granger, C. W. J. (1987). Co-integration and error correction. Econometrica, 55(2), 251–276.',
    'Gatev, E., Goetzmann, W. N., & Rouwenhorst, K. G. (2006). Pairs trading: Performance of a relative-value arbitrage rule. Review of Financial Studies, 19(3), 797–827.',
    'MacKinnon, J. G. (2010). Critical values for cointegration tests. Queen’s Economics Department Working Paper 1227.',
    'Khandani, A. E., & Lo, A. W. (2007). What happened to the quants in August 2007? Journal of Investment Management, 5(4), 5–54.',
  ],
  related: ['finance/quant/mean-reversion-and-time-series', 'finance/philosophies/quant', 'finance/quant/backtesting-and-overfitting'],
}

export default guide
