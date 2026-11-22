import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Machine learning has transformed image and language tasks, but financial prediction is harder: the signal is tiny, the noise enormous, the data limited and the relationships change as markets adapt. ML can help, especially by combining many weak signals, but naive use produces beautiful backtests and real losses.',
  nutshell: [
    'Signal-to-noise is low: a stock-return forecast with correlation (information coefficient) of 0.05 with outcomes is already useful.',
    'The **fundamental law of active management**: IR ≈ IC × √breadth.',
    'Standard cross-validation leaks information across time; use **purged and embargoed** splits (López de Prado, 2018).',
    'Gu, Kelly and Xiu (2020) found trees and neural networks improved US stock-return prediction over linear models, mostly via nonlinear interactions.',
  ],
  sections: [
    {
      id: 'law',
      title: 'Weak signals, many bets',
      blocks: [
        {
          t: 'math',
          tex: String.raw`IR \approx IC \times \sqrt{BR}`,
          caption: 'Grinold’s fundamental law: information ratio from skill per bet (IC) and the number of independent bets per year (breadth).',
          plain: 'You do not need to predict well to do well, if you make many independent predictions. The information coefficient is the correlation between forecasts and outcomes; breadth is how many independent bets you make a year. Their combination, through the square root, gives the information ratio. This is why quant funds trade hundreds or thousands of positions.',
          where: [
            { sym: 'IR', def: 'information ratio (active return ÷ tracking error)' },
            { sym: 'IC', def: 'information coefficient: correlation of forecasts with outcomes' },
            { sym: 'BR', def: 'breadth: independent bets per year' },
          ],
          syntax: [
            { sym: String.raw`\sqrt{BR}`, say: '“square root of breadth”' },
          ],
          worked: {
            title: 'Two managers',
            steps: [
              String.raw`Stock picker: IC 0.10, 20 independent bets a year: \(0.10 \times \sqrt{20} = 0.10 \times 4.47 = 0.45\).`,
              String.raw`Quant: IC 0.03, 400 bets: \(0.03 \times 20 = 0.60\).`,
            ],
            why: [
              'high skill, few bets',
              'low skill, many bets',
            ],
            answer: 'The weaker but broader signal wins (0.60 against 0.45), if the bets are truly independent and costs stay low, which are big ifs in practice.',
          },
        },
      ],
    },
    {
      id: 'pitfalls',
      title: 'Pitfalls and fixes',
      blocks: [
        { t: 'table', head: ['Pitfall', 'Fix'], rows: [
          ['Look-ahead bias (using data not available at the time)', 'Point-in-time data; lag features by their release dates'],
          ['Leakage in cross-validation (overlapping labels)', 'Purged k-fold with an embargo; walk-forward testing'],
          ['Overfitting with many features', 'Regularisation, simple models first, feature importance stability'],
          ['Non-stationarity', 'Retrain regularly; prefer features with economic rationale'],
          ['Ignoring costs and capacity', 'Model turnover and market impact in the backtest'],
          ['Multiple testing', 'Count every model tried; deflate Sharpe ratios'],
        ] },
        { t: 'callout', tone: 'tip', title: 'Where ML helps most', text: 'Combining many known signals nonlinearly, nowcasting from alternative data (text, satellite, transactions), execution optimisation, risk and fraud detection, and natural language processing of filings and news.' },
      ],
    },
  ],
  sources: [
    'Grinold, R. C., & Kahn, R. N. (2000). Active Portfolio Management (2nd ed.). McGraw-Hill.',
    'López de Prado, M. (2018). Advances in Financial Machine Learning. Wiley.',
    'Gu, S., Kelly, B., & Xiu, D. (2020). Empirical asset pricing via machine learning. Review of Financial Studies, 33(5), 2223–2273.',
  ],
  related: ['finance/quant/backtesting-and-overfitting', 'ai/start-here', 'finance/quant/factor-models'],
}

export default guide
