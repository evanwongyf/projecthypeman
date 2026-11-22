import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A backtest is an experiment, and it is easy to run until it says what you hoped. The more variants you try, the more likely the best one is luck. This guide covers the multiple-testing problem, the deflated Sharpe ratio, walk-forward testing, the probability of backtest overfitting and the hygiene that keeps a backtest honest. All the labs use synthetic data.',
  nutshell: [
    '**The best of N random strategies** has an impressive Sharpe: about \\(\\sqrt{2\\ln N}\\) standard errors.',
    'The **deflated Sharpe ratio** adjusts for the number of trials, non-normal returns and the length of the sample.',
    '**Walk-forward** and **purged cross-validation** test on data the model has not seen; ordinary k-fold leaks information in time series.',
    'Common leaks: **look-ahead**, **survivorship bias**, using revised data, ignoring costs, and choosing parameters on the test set.',
  ],
  sections: [
    {
      id: 'multiple',
      title: 'Multiple testing',
      lead: 'Try enough things and something works.',
      blocks: [
        { t: 'quant-viz', viz: 'overfit' },
        {
          t: 'math',
          tex: String.raw`P(\text{at least one false positive})=1-(1-\alpha)^{N},\qquad E\Big[\max_{i\le N}\hat S_i\Big]\approx\sigma_{\hat S}\sqrt{2\ln N}`,
          caption: 'The family-wise error rate, and the expected best Sharpe among N skill-free trials.',
          where: [{ sym: '\\alpha', def: 'the significance level of one test (0.05)' }, { sym: 'N', def: 'the number of strategies (or parameter sets) tried' }, { sym: '\\sigma_{\\hat S}', def: 'the standard error of one Sharpe estimate' }],
          syntax: [
            { sym: '1-(1-\\alpha)^N', say: 'the chance that at least one of N independent tests passes by luck. Effect: at α = 0.05 and N = 20 it is 64%. Why: each test has a 5% chance and they accumulate.' },
            { sym: '\\sqrt{2\\ln N}', say: 'the typical size of the maximum of N standard normals. Effect: it rises without limit, slowly. A researcher who tries 1,000 ideas expects the winner to look 3.7 standard errors good by chance alone.' },
          ],
          worked: {
            title: 'Twenty variants',
            steps: ['You try 20 parameter sets, none with skill, each tested at the 5% level.', 'Chance that at least one is "significant": \\(1-0.95^{20}=64\\%\\).', 'With the Bonferroni correction, test each at \\(0.05/20=0.25\\%\\) so the family-wise rate stays near 5%.'],
            answer: 'Reporting "this one works (p < 0.05)" after 20 attempts is nearly guaranteed. Report how many you tried, and correct for it.',
          },
        },
      ],
    },
    {
      id: 'dsr',
      title: 'The deflated Sharpe ratio',
      lead: 'Subtract what luck would give.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{DSR}=\Phi\!\left(\frac{(\widehat{SR}-SR_0)\sqrt{T-1}}{\sqrt{1-\gamma_3\widehat{SR}+\tfrac{\gamma_4-1}{4}\widehat{SR}^{2}}}\right)`,
          caption: 'The deflated Sharpe ratio of Bailey and López de Prado (2014): the probability that the true Sharpe exceeds the benchmark SR₀, the best expected from N skill-free trials.',
          where: [{ sym: '\\widehat{SR}', def: 'the observed (per-period) Sharpe ratio of the chosen strategy' }, { sym: 'SR_0', def: 'the Sharpe expected from the best of N trials with no skill' }, { sym: 'T', def: 'the number of return observations' }, { sym: '\\gamma_3,\\ \\gamma_4', def: 'skewness and kurtosis of returns (3 for a normal)' }, { sym: '\\Phi', def: 'the standard normal cumulative distribution function' }],
          syntax: [
            { sym: '\\widehat{SR}-SR_0', say: 'the observed Sharpe minus the Sharpe luck would give. Effect: if the winner’s Sharpe is no better than SR₀, the DSR is about 50% or lower. Why: the benchmark rises with the number of trials.' },
            { sym: '\\sqrt{T-1}', say: 'more observations make the same gap more convincing. Effect: a gap of 0.1 over 10 years is worth more than over 1 year.' },
            { sym: '1-\\gamma_3\\widehat{SR}+\\tfrac{\\gamma_4-1}{4}\\widehat{SR}^2', say: 'the variance of the Sharpe estimate with non-normal returns. Effect: negative skew and fat tails widen it, so the same Sharpe is less convincing.' },
          ],
          worked: {
            title: 'The numbers in words',
            steps: ['Observed annual Sharpe 1.5 over 3 years, the best of 100 tested variants.', 'SR₀ for N = 100 trials is about \\(\\sigma_{SR}\\times 2.5\\); with \\(\\sigma_{SR}\\approx 0.58\\) that is about 1.45.', 'Observed minus benchmark ≈ 0.05, so the DSR is only slightly above 50%.'],
            answer: 'A Sharpe of 1.5 looks excellent, but as the best of 100 it carries almost no evidence of skill. The same Sharpe from a single pre-registered idea would be much stronger evidence.',
          },
        },
      ],
    },
    {
      id: 'hygiene',
      title: 'Testing hygiene',
      lead: 'The leaks that fool experienced people.',
      blocks: [
        {
          t: 'table',
          head: ['Problem', 'What happens', 'Guard'],
          rows: [
            ['Look-ahead bias', 'A signal uses information not available at the time (the day’s close, restated data)', 'Lag all inputs; use point-in-time databases'],
            ['Survivorship bias', 'Testing only on stocks that exist today ignores delisted failures', 'Use data including dead companies'],
            ['Data snooping', 'Parameters chosen on the full sample', 'Fix a protocol first; keep a final hold-out'],
            ['Costs ignored', 'Spread, impact, borrow and fees erase small edges', 'Model costs pessimistically (see execution)'],
            ['Regime dependence', 'Works in one decade only', 'Test across different periods and markets'],
            ['Leaky cross-validation', 'Overlapping labels put the test period in the training set', 'Purge and embargo around test folds'],
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Write the hypothesis down first', body: 'Say why it should work (a risk premium, a behavioural bias, a structural constraint) before looking at data.' },
            { title: 'Count the trials', body: 'Keep a log of every variant tried, including abandoned ones, and use it to deflate.' },
            { title: 'Walk forward', body: 'Fit on a window, test on the next, roll. The concatenated test windows are your honest result.' },
            { title: 'Hold out data you never touch', body: 'Use it once. If it fails, you are done with that idea; do not tune again.' },
            { title: 'Paper trade or trade tiny', body: 'Live results include execution, data feed and behaviour problems no backtest shows.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A healthy prior', text: 'Most published factors and strategies fail to replicate out of sample, and their returns fall after publication (McLean and Pontiff, 2016: about 58% lower). Start from the assumption that an impressive backtest is wrong and make it prove otherwise.' },
      ],
    },
  ],
  sources: [
    'Bailey, D. H. & López de Prado, M. (2014). The deflated Sharpe ratio. *Journal of Portfolio Management*, 40(5).',
    'Bailey, D. H., Borwein, J., López de Prado, M. & Zhu, Q. J. (2017). The probability of backtest overfitting. *Journal of Computational Finance*, 20(4).',
    'Harvey, C. R., Liu, Y. & Zhu, H. (2016). …and the cross-section of expected returns. *Review of Financial Studies*, 29(1).',
    'McLean, R. D. & Pontiff, J. (2016). Does academic research destroy stock return predictability? *Journal of Finance*, 71(1).',
    'López de Prado, M. (2018). *Advances in Financial Machine Learning*. Wiley.',
  ],
  related: ['finance/technical/evidence', 'finance/trading/testing-entries-and-exits', 'finance/quant/factor-models', 'finance/quant/execution-and-microstructure'],
}

export default guide
