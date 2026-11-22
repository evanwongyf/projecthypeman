import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Does technical analysis make money? Decades of research give a nuanced answer: some simple rules worked in some markets and periods, the **momentum** effect is one of the best-documented findings in finance, but many results shrink or vanish once you account for costs, risk and the danger of testing too many ideas on the same data.',
  nutshell: [
    '**Momentum**: stocks that rose most over the past 3–12 months have tended to keep outperforming for several months.',
    'Moving-average rules showed predictive power on the Dow in early studies, much less in later data.',
    '**Data snooping**: test enough rules and some will look brilliant by luck.',
    'Honest testing uses out-of-sample data, realistic costs and corrections for multiple tests.',
  ],
  sections: [
    {
      id: 'studies',
      title: 'Key studies',
      blocks: [
        {
          t: 'table',
          head: ['Study', 'What they tested', 'Finding'],
          rows: [
            ['Brock, Lakonishok & LeBaron (1992)', 'Moving-average and range-breakout rules on the Dow, 1897–1986', 'Buy signals were followed by higher returns than sell signals'],
            ['Sullivan, Timmermann & White (1999)', 'The same rules, correcting for data snooping across thousands of rules', 'The best rule was significant in-sample but did not beat the market after 1986'],
            ['Jegadeesh & Titman (1993)', 'Buying past 3–12-month winners and selling losers', 'About 1% a month of excess return, holding for 3–12 months'],
            ['Moskowitz, Ooi & Pedersen (2012)', 'Time-series momentum across futures markets', 'An asset’s own past 12-month return predicted its future return'],
            ['Lo, Mamaysky & Wang (2000)', 'Automated recognition of chart patterns', 'Some patterns added modest information'],
            ['Park & Irwin (2007)', 'Review of 95 modern studies', 'Most found profits, but many had testing problems'],
          ],
        },
      ],
    },
    {
      id: 'snooping',
      title: 'Data snooping and overfitting',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\Pr(\text{at least one false positive}) = 1 - (1 - \alpha)^{k}`,
          where: [
            { sym: String.raw`\alpha`, def: 'The significance level of each test, e.g. 0.05' },
            { sym: 'k', def: 'The number of independent rules tested' },
          ],
          caption: 'With k = 20 and α = 0.05: 1 − 0.95²⁰ ≈ 0.64. Test 100 rules and a "winner" is almost certain.',
          syntax: [
            { sym: String.raw`\Pr(\cdot)`, say: String.raw`Read "the probability that": the chance, between 0 and 1, of whatever event is written inside the brackets.` },
            { sym: String.raw`(1-\alpha)^{k}`, say: String.raw`Read "one minus alpha, all to the power k": multiply \((1-\alpha)\) by itself \(k\) times. This is the chance that all \(k\) tests avoid a false positive.` },
            { sym: String.raw`1 - (\cdots)`, say: String.raw`Read "one minus": "at least one" is the opposite of "none", so subtract the chance of none from 1.` },
          ],
          worked: {
            title: String.raw`Odds of a lucky winner`,
            steps: [
              String.raw`Given \(\alpha = 0.05\): each test has a 5% chance of a false positive, so a 95% chance of avoiding one.`,
              String.raw`With \(k = 5\) rules: \(0.95^5 \approx 0.774\), so \(1 - 0.774 = 0.226\).`,
              String.raw`With \(k = 20\) rules: \(0.95^{20} \approx 0.3585\), so \(1 - 0.3585 = 0.6415\).`,
              String.raw`With \(k = 100\) rules: \(0.95^{100} \approx 0.0059\), so \(1 - 0.0059 = 0.994\).`,
            ],
            answer: String.raw`Testing 20 useless rules gives about a 64% chance that at least one looks significant; testing 100 makes it all but certain (99.4%).`,
          },
        },
        {
          t: 'plot',
          title: 'Chance of at least one lucky "winner"',
          x: [1, 100],
          y: [0, 1],
          xLabel: 'Number of rules tested',
          yLabel: 'Probability',
          curves: [{ f: (k: number) => 1 - 0.95 ** k, label: 'α = 5%' }],
          points: [
            { x: 20, y: 1 - 0.95 ** 20, label: '20 rules: 64%' },
            { x: 60, y: 1 - 0.95 ** 60, label: '60 rules: 95%' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\alpha_{\text{each}} = \frac{\alpha}{k}`,
          where: [
            { sym: String.raw`\alpha`, def: 'The overall significance level you want across all tests (e.g. 0.05)' },
            { sym: 'k', def: 'The number of rules tested' },
            { sym: String.raw`\alpha_{\text{each}}`, def: 'The stricter bar each individual test must clear' },
          ],
          caption: 'The Bonferroni correction: to keep a 5% overall error rate across 20 tests, each test must pass at 0.25%. The more rules you fish through, the stricter the bar gets, which is exactly why a backtest that casually tried dozens of indicator combinations and kept "the one that worked" is not evidence of anything, unless it is retested against this stricter threshold.',
          syntax: [
            { sym: String.raw`\alpha_{\text{each}}`, say: String.raw`Read "alpha each": the subscript is just a label for the per-test threshold, not an index.` },
            { sym: String.raw`\frac{\alpha}{k}`, say: String.raw`Read "alpha divided by k": split the overall error budget equally between the \(k\) tests.` },
          ],
          worked: {
            title: String.raw`Bonferroni with 20 rules`,
            steps: [
              String.raw`Given: overall \(\alpha = 0.05\) and \(k = 20\) rules tested.`,
              String.raw`Substitute: \(\alpha_{\text{each}} = 0.05 / 20\).`,
              String.raw`Evaluate: \(0.05 / 20 = 0.0025\), that is 0.25%.`,
              String.raw`Check: the chance of at least one false positive is then \(1 - (1 - 0.0025)^{20} \approx 0.049\), just under 5%.`,
            ],
            answer: String.raw`Each rule must pass at the 0.25% level, which keeps the overall false-alarm rate at about 5%.`,
          },
        },
      ],
    },
    {
      id: 'test',
      title: 'Testing a strategy honestly',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Write the rules down completely before looking at the results.',
            'Split the data: develop on one period, test once on a later, untouched period.',
            'Include commissions, spreads, slippage and taxes.',
            'Avoid look-ahead bias: only use information available at the time.',
            'Avoid survivorship bias: include companies that went bankrupt or were delisted.',
            'Count how many variations you tried, and be more sceptical the more you tried.',
            'Compare with a simple benchmark, such as buying and holding an index fund.',
          ],
        },
        { t: 'fin-tool', tool: 'patterns' },
        { t: 'callout', tone: 'fact', title: 'Why momentum might be real', text: 'Explanations include investors under-reacting to news at first and then herding, and risk-based stories. Momentum also crashes occasionally: in 2009, a momentum strategy that bought winners and sold losers suffered one of its worst losses as beaten-down stocks rebounded sharply.' },
      ],
    },
  ],
  sources: [
    'Brock, W., Lakonishok, J., & LeBaron, B. (1992). Simple technical trading rules and the stochastic properties of stock returns. *The Journal of Finance*, 47(5), 1731–1764.',
    'Sullivan, R., Timmermann, A., & White, H. (1999). Data-snooping, technical trading rule performance, and the bootstrap. *The Journal of Finance*, 54(5), 1647–1691.',
    'Jegadeesh, N., & Titman, S. (1993). Returns to buying winners and selling losers. *The Journal of Finance*, 48(1), 65–91.',
    'Moskowitz, T. J., Ooi, Y. H., & Pedersen, L. H. (2012). Time series momentum. *Journal of Financial Economics*, 104(2), 228–250.',
    'Lo, A. W., Mamaysky, H., & Wang, J. (2000). Foundations of technical analysis. *The Journal of Finance*, 55(4), 1705–1765.',
    'Park, C.-H., & Irwin, S. H. (2007). What do we know about the profitability of technical analysis? *Journal of Economic Surveys*, 21(4), 786–826.',
    'Daniel, K., & Moskowitz, T. J. (2016). Momentum crashes. *Journal of Financial Economics*, 122(2), 221–247.',
  ],
  related: ['finance/foundations/efficient-markets', 'finance/candlesticks/reliability', 'finance/technical/risk-management'],
}

export default guide
