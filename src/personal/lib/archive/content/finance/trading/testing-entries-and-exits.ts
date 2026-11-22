import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A backtest that looks good proves little. The entry might be luck, the exit might be doing all the work, and the parameters might have been tuned to the past. This guide gives the tests that separate entry from exit: the random-entry test, MAE and MFE analysis, honest costs, and the discipline of out-of-sample testing. All the simulations here use synthetic data.',
  nutshell: [
    'Test the **entry** by comparing it with **random entries** under the same exit and sizing. If random entries do as well, the entry adds nothing.',
    '**MAE** (maximum adverse excursion) and **MFE** (maximum favourable excursion) record how far each trade went against and for you; they show where stops and targets belong.',
    'Count **every** variant you tried: the best of many tests is biased upward, and the bias grows with the number of tests.',
    'Hold data back: tune on one period, judge on a later one you have not touched, and include costs.',
  ],
  sections: [
    {
      id: 'random',
      title: 'The random-entry test',
      lead: 'Is it the entry, or is it the exit?',
      blocks: [
        { t: 'p', text: 'Many profitable-looking systems earn their money from the exit and the market’s drift, not from the entry signal. The test: keep the exit, the stop and the position sizing exactly as they are, replace the entry with a coin flip (random timing, random direction where allowed), and repeat thousands of times. If the real system’s result falls inside the random distribution, the entry has not been shown to add anything.' },
        { t: 'quant-viz', viz: 'random-entry' },
        { t: 'callout', tone: 'tip', title: 'Reading the result', text: 'The question is where your system sits in the distribution of the random runs. In the top 5% is mild evidence; in the middle means the exit and the market drift explain it.' },
      ],
    },
    {
      id: 'mae',
      title: 'MAE and MFE',
      lead: 'How far did each trade go, each way?',
      blocks: [
        { t: 'p', text: 'For every trade record two numbers in R: the worst point reached before the trade ended (MAE) and the best (MFE). Plot MAE of winners and losers separately. If most winners never went more than −0.5R against you, a stop at −1R is only costing you out on trades that were going to lose anyway, and a stop at −0.6R might raise expectancy. If MFE of losers often exceeds +1R, a target or breakeven rule may be leaving money behind.' },
        {
          t: 'table',
          head: ['Question', 'Look at', 'Action it suggests'],
          rows: [
            ['Is the stop too wide?', 'MAE of winners: how deep did they go before working?', 'A stop just beyond that depth loses little and cuts losers sooner'],
            ['Is the stop too tight?', 'Fraction of stopped trades that later reached the target', 'A high fraction means the stop sits inside noise'],
            ['Is the target too close?', 'MFE of winners compared with the exit', 'Big gap suggests a trailing exit'],
            ['Do losers go green first?', 'MFE of losers', 'Breakeven or partial exits may help; or the entry is early'],
          ],
        },
        { t: 'p', text: 'These are descriptive summaries, not optimisation targets. Choosing the stop that maximises backtest profit is the overfitting problem in disguise; use MAE and MFE to see the shape and then pick a round number inside a wide plateau.' },
      ],
    },
    {
      id: 'honest',
      title: 'Costs, overfitting and holding data back',
      lead: 'How a good backtest goes wrong.',
      blocks: [
        { t: 'quant-viz', viz: 'overfit' },
        {
          t: 'math',
          tex: String.raw`E\!\left[\max_{i\le N} S_i\right] \approx \sigma_S\,\sqrt{2\ln N}`,
          caption: 'Even with no skill at all, the best of N independent trials has a Sharpe ratio that grows with N.',
          where: [{ sym: 'S_i', def: 'the measured Sharpe ratio of strategy variant i, with true value zero' }, { sym: '\\sigma_S', def: 'the standard error of a single Sharpe estimate' }, { sym: 'N', def: 'the number of variants tried' }],
          syntax: [{ sym: '\\sqrt{2\\ln N}', say: 'the expected size of the largest of N standard normals (approximately). Effect: grows slowly but without limit. Why: with more draws, the extreme one is further out.' }],
          worked: {
            title: 'A parameter sweep',
            steps: ['You test 100 combinations of moving-average lengths, none of which has any edge.', 'Standard error of a one-year Sharpe: \\(\\sigma_S \\approx 1/\\sqrt{1} = 1.0\\).', 'Expected best: \\(\\sqrt{2\\ln 100} = \\sqrt{9.21} = 3.03\\) → a Sharpe above 3 by chance.'],
            answer: 'A "Sharpe of 3" from the best of 100 tries is exactly what pure noise produces. Report the number of trials tried, and discount the best result accordingly.',
          },
        },
        {
          t: 'steps',
          items: [
            { title: 'Split the data', body: 'Develop on an early period; reserve a later period you do not look at until the end. Looking and re-tuning turns the reserved data into training data.' },
            { title: 'Walk forward', body: 'Fit on a window, test on the following window, then roll forward. The stitched-together test windows give an honest equity curve.' },
            { title: 'Use costs and pessimistic fills', body: 'Include spread, slippage and fees (see the orders guide), and assume stops fill worse than their price, especially in gaps.' },
            { title: 'Prefer plateaus', body: 'If performance is good only at one parameter value and poor on either side, it is a fit to noise. A robust rule works across a range of settings.' },
            { title: 'Limit your degrees of freedom', body: 'Every parameter, filter and exception is another way to fit the past. Fewer rules, more trades, longer history.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Aronson, D. (2007). *Evidence-Based Technical Analysis*. Wiley.',
    'Bailey, D. H. & López de Prado, M. (2014). The deflated Sharpe ratio. *Journal of Portfolio Management*, 40(5).',
    'Harvey, C. R., Liu, Y. & Zhu, H. (2016). …and the cross-section of expected returns. *Review of Financial Studies*, 29(1).',
    'Sweeney, J. (1996). *Maximum Adverse Excursion*. Wiley.',
  ],
  related: ['finance/quant/backtesting-and-overfitting', 'finance/technical/evidence', 'finance/trading/exit-types', 'finance/trading/entry-types'],
}

export default guide
