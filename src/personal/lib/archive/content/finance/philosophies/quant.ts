import type { Guide } from '../../../guide'

const spread = (t: number) => 1.6 * Math.sin(t / 2.2) + 0.6 * Math.sin(t * 1.7) - 0.2

const guide: Guide = {
  intro:
    'Quantitative investors replace judgement with rules, data and statistics. Instead of asking "is this company good?", they ask "across thousands of stocks and decades of data, which measurable features have predicted returns, and how do I combine them while controlling risk and costs?"',
  nutshell: [
    'Strategies are written as precise rules and tested on historical data before use.',
    '**Pairs trading** bets that two related prices that drift apart will converge.',
    'The **z-score** measures how unusual a gap is: \\(z = (x - \\mu)/\\sigma\\).',
    'The great dangers: **overfitting**, **look-ahead bias** and crowding.',
  ],
  sections: [
    {
      id: 'pairs',
      title: 'Pairs trading',
      blocks: [
        {
          t: 'math',
          tex: String.raw`s_t = \ln P^{A}_t - \beta\,\ln P^{B}_t,\qquad z_t = \frac{s_t - \mu_s}{\sigma_s}`,
          where: [
            { sym: 's_t', def: 'The spread: how far apart the two log prices are today, adjusted for the hedge ratio' },
            { sym: String.raw`\beta`, def: 'Hedge ratio, from a regression of A’s log price on B’s' },
            { sym: String.raw`\mu_s, \sigma_s`, def: 'Mean and standard deviation of the spread over a look-back window' },
          ],
          syntax: [
            { sym: String.raw`\ln P^{A}_t`, say: String.raw`Read "natural log of the price of A at time t". The \(A\) is a label (stock A), not a power; the subscript \(t\) is the day. Logs turn percentage moves into simple differences.` },
            { sym: String.raw`\mu_s,\ \sigma_s`, say: 'Read "mu s" and "sigma s": the average and the standard deviation of the spread. Measure them over a look-back window, such as the last 60 days.' },
            { sym: String.raw`z_t = \frac{s_t - \mu_s}{\sigma_s}`, say: 'Read "z equals s minus its mean, over its standard deviation". Subtract the average, then count the result in units of typical wiggle.' },
          ],
          worked: {
            title: 'One day in a pair trade',
            steps: [
              String.raw`Given: hedge ratio \(\beta = 1.2\); today stock A is 52 and stock B is 40. Over the look-back window the spread averaged \(\mu_s = -0.500\) with \(\sigma_s = 0.012\).`,
              String.raw`Logs: \(\ln 52 = 3.9512\); \(\ln 40 = 3.6889\).`,
              String.raw`Spread: \(s_t = 3.9512 - 1.2 \times 3.6889 = 3.9512 - 4.4267 = -0.4754\).`,
              String.raw`Z-score: \(z_t = (-0.4754 - (-0.500))/0.012 = 0.0246/0.012 \approx 2.05\).`,
              'A z above 2 is the usual entry threshold.',
            ],
            answer: 'The spread is about 2.05 standard deviations above normal, so the pairs trade shorts A, buys B and waits for the gap to close.',
          },
          caption: 'If the spread is stationary (it keeps returning to its mean; the two are "cointegrated"), extreme z-scores are trading opportunities. z measures the gap in standard deviations rather than raw price, which is what makes it comparable across completely different pairs, a z of 2 means "about as unusual as this spread gets roughly 1-in-20 days", whatever units the underlying prices are in.',
        },
        {
          t: 'metric',
          name: 'the z-score (of a spread)',
          shows: 'how unusual today’s gap between two related prices is, measured in standard deviations from its own historical average. It turns an arbitrary price difference, which could be anything depending on the two assets involved, into a single comparable number: how far out of line is this, relative to how far out of line it normally gets?',
          eli5: 'If two friends usually walk a few steps apart but today one is 50 steps ahead, the z-score tells you how extreme that 50-step gap really is for these two specific people, for some pairs that is normal, for others it is wildly unusual. It is the gap measured in "how weird is this for them", not in raw steps.',
          higher: 'A high positive z (conventionally above 2) means asset A has drifted unusually far above asset B relative to their normal relationship. The pairs trade bets this gap closes: short the relatively expensive one (A), long the relatively cheap one (B), expecting the spread to shrink back toward zero.',
          lower: 'A deeply negative z (below −2) is the mirror image: A has drifted unusually far below B, so the trade goes long A, short B, betting the spread widens back up toward the mean.',
          typical: 'Most pairs trading systems enter around |z| > 2 and exit near z ≈ 0, since a z-score assumes something close to a normal distribution, where values beyond ±2 should be fairly rare (roughly 1 in 20 observations) if the historical relationship still holds, a z-score that keeps drifting further rather than reverting is the sign the relationship itself has broken, not that the trade is simply taking longer to work.',
        },
        {
          t: 'plot',
          title: 'Trading the z-score of a spread',
          x: [0, 40],
          y: [-3, 3],
          xLabel: 'Days',
          yLabel: 'z-score',
          curves: [{ f: spread, label: 'Spread z-score' }],
          hlines: [
            { y: 2, label: 'Short A, long B (z > 2)' },
            { y: -2, label: 'Long A, short B (z < −2)' },
            { y: 0, label: 'Exit near 0' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Morgan Stanley, 1980s', text: 'Pairs trading was developed by a quantitative group at Morgan Stanley led by Nunzio Tartaglia in the mid-1980s. Gatev, Goetzmann and Rouwenhorst (2006) found simple pairs strategies earned meaningful excess returns from 1962 to 2002, though profits fell over time as more traders used them.' },
      ],
    },
    {
      id: 'overfit',
      title: 'The enemy: overfitting',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Deflated Sharpe: } \Pr\!\left(SR > \widehat{SR}_0\right),\quad \widehat{SR}_0 \text{ rising with the number of strategies tried}`,
          where: [
            { sym: 'SR', def: 'The strategy’s observed (backtested) Sharpe ratio' },
            { sym: String.raw`\widehat{SR}_0`, def: 'The benchmark Sharpe ratio expected from luck alone, given how many variants were tried' },
          ],
          syntax: [
            { sym: String.raw`\Pr(\cdot)`, say: 'Read "the probability that". Here: how likely it is that the strategy’s true Sharpe ratio really beats the luck benchmark.' },
            { sym: String.raw`\widehat{SR}_0`, say: String.raw`Read "S R zero hat". The hat marks an estimate, and the 0 means "the best you would find with zero real skill". It rises as you try more variants.` },
          ],
          worked: {
            title: 'Best of 100 backtests (simplified, normal returns)',
            steps: [
              'Given: you tried 100 variants; their Sharpe ratios vary with a standard deviation of 0.5. The best has an annual Sharpe of 1.5 over 5 years of data.',
              String.raw`Luck benchmark: the expected best of 100 pure-luck draws is about 2.53 standard deviations out, so \(\widehat{SR}_0 \approx 0.5 \times 2.53 = 1.27\).`,
              String.raw`Standard error of the estimate: \(\sqrt{(1 + 0.5 \times 1.5^2)/5} \approx 0.65\).`,
              String.raw`Distance in standard errors: \((1.5 - 1.27)/0.65 \approx 0.35\); the normal probability is about 0.64.`,
              'The same test for a Sharpe of 0.9 gives about 0.25.',
            ],
            answer: 'The headline Sharpe of 1.5 deflates to a probability of about 0.64, little better than a coin flip given how many variants were tried.',
          },
          caption: 'Bailey and López de Prado: the more strategies you test, the higher the Sharpe ratio a strategy needs before you should believe it. A deflated Sharpe close to 1 (nearly certain to beat pure luck) means the backtest result survives the correction for how much fishing was involved; a deflated Sharpe near 0.5 or below means the strategy’s apparently great Sharpe ratio is statistically indistinguishable from what you would expect to find by chance alone after testing enough variations, the raw, undeflated Sharpe ratio on its own tells you almost nothing about which case you are in.',
        },
        {
          t: 'checklist',
          items: [
            'Keep an untouched out-of-sample period.',
            'Use realistic costs, slippage and borrow fees for shorts.',
            'Prefer simple rules with an economic reason to work.',
            'Record every variant tried, and adjust for multiple testing.',
            'Check that results hold across markets and periods.',
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The Medallion fund', text: 'Renaissance Technologies’ Medallion fund, founded by mathematician Jim Simons, is reported to have averaged around 66% a year before fees from 1988 to 2018: the best long-term record known. It has been closed to outside investors since 1993.' },
      ],
    },
  ],
  sources: [
    'Gatev, E., Goetzmann, W. N., & Rouwenhorst, K. G. (2006). Pairs trading: Performance of a relative-value arbitrage rule. *The Review of Financial Studies*, 19(3), 797–827.',
    'Bailey, D. H., & López de Prado, M. (2014). The deflated Sharpe ratio. *The Journal of Portfolio Management*, 40(5), 94–107.',
    'Zuckerman, G. (2019). *The Man Who Solved the Market*. Portfolio.',
    'Chan, E. P. (2013). *Algorithmic Trading*. Wiley.',
  ],
  related: ['finance/philosophies/factors', 'finance/technical/evidence', 'finance/foundations/efficient-markets'],
}

export default guide
