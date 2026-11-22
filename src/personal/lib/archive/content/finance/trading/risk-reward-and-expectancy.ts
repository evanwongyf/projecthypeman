import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Neither a high win rate nor a big reward-to-risk ratio tells you whether a strategy makes money. What matters is the two together, averaged over many trades: the expectancy. This guide defines the R-multiple, derives expectancy and the break-even win rate, and shows why very different-looking strategies can have the same edge.',
  nutshell: [
    'Measure every trade in **R**: profit or loss divided by the amount risked at entry.',
    '**Expectancy** is the average R per trade: \\(E = p\\,W - (1-p)\\,L\\), in R, with win rate \\(p\\), average win \\(W\\) and average loss \\(L\\).',
    'A strategy is profitable only if \\(p > L/(W+L)\\): with 2R winners you break even at 33% wins; with 0.5R winners you need 67%.',
    '**Profit factor** (gross profit ÷ gross loss) and expectancy are two views of the same numbers, and both need many trades before they mean anything.',
  ],
  sections: [
    {
      id: 'expectancy',
      title: 'Expectancy in R',
      lead: 'The average outcome of one trade.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`E = p\,W - (1-p)\,L,\qquad p^{*} = \frac{L}{W+L}`,
          caption: 'Expectancy per trade in R-multiples, and the win rate at which it is zero.',
          where: [
            { sym: 'p', def: 'the win rate: the fraction of trades that make money' },
            { sym: 'W,\\ L', def: 'the average winner and the average loser, in R (positive numbers); for a full stop-out L = 1' },
            { sym: 'p^{*}', def: 'the break-even win rate' },
          ],
          syntax: [
            { sym: 'p\\,W', say: 'the contribution of winners: how often times how much. Effect: a rare, large win can outweigh many small losses. Why: the average is a probability-weighted sum.' },
            { sym: '(1-p)\\,L', say: 'the contribution of losers, subtracted. Effect: the 1−p is the loss frequency. Why: every trade is one or the other, so the probabilities add to 1.' },
            { sym: 'p^{*} = L/(W+L)', say: 'solving \\(E=0\\) for p. Effect: the bigger the winner relative to the loser, the lower the win rate you need. Why: this is the point where gains and losses cancel on average.' },
          ],
          worked: {
            title: 'Two strategies, one edge',
            steps: [
              'Trend system: p = 0.35, W = 3R, L = 1R. \\(E = 0.35(3) - 0.65(1) = +0.40R\\).',
              'Scalper: p = 0.75, W = 0.6R, L = 1R. \\(E = 0.75(0.6) - 0.25(1) = +0.20R\\).',
              'Break-even win rates: \\(1/(3+1)=25\\%\\) and \\(1/(0.6+1)=62.5\\%\\).',
            ],
            answer: 'The trend system loses 65% of its trades and has twice the expectancy. A win rate on its own says nothing.',
          },
        },
        {
          t: 'plot',
          title: 'Expectancy against win rate for different payoffs',
          x: [0, 1],
          y: [-1, 2],
          xLabel: 'win rate p',
          yLabel: 'expectancy (R)',
          curves: [
            { f: (p) => p * 0.5 - (1 - p), label: 'W = 0.5R' },
            { f: (p) => p * 1 - (1 - p), label: 'W = 1R' },
            { f: (p) => p * 2 - (1 - p), label: 'W = 2R' },
            { f: (p) => p * 3 - (1 - p), label: 'W = 3R' },
          ],
          hlines: [{ y: 0, label: 'break-even' }],
          caption: 'Each line crosses zero at p* = 1/(W+1). The bigger the payoff, the less often you need to be right.',
        },
      ],
    },
    {
      id: 'pf',
      title: 'Profit factor and sample size',
      lead: 'What the numbers can and cannot say.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`PF = \frac{\sum \text{wins}}{\sum |\text{losses}|} = \frac{p\,W}{(1-p)\,L},\qquad SE(\bar{R}) \approx \frac{s}{\sqrt{n}}`,
          caption: 'The profit factor, and the standard error of the average R over n trades.',
          where: [{ sym: 's', def: 'the sample standard deviation of the individual trade results in R' }, { sym: 'n', def: 'the number of trades' }],
          syntax: [
            { sym: 'PF', say: 'gross profit divided by gross loss. Effect: above 1 means profitable before costs; real strategies are rarely above about 2 after costs. Why: it is the same information as expectancy, in a ratio.' },
            { sym: 's/\\sqrt{n}', say: 'the standard error of the average. Effect: quadrupling the number of trades only halves the uncertainty. Why: noise averages out slowly, as the square root of n.' },
          ],
          worked: {
            title: 'How many trades is enough?',
            steps: ['Trend system: E = 0.40R, each trade has standard deviation s ≈ 1.8R.', 'After n = 30 trades: SE = 1.8/√30 = 0.33R. The estimate 0.40 ± 0.66 (95%) includes zero.', 'After n = 200: SE = 0.127R, so 0.40 ± 0.25: clearly positive.'],
            answer: 'Thirty trades cannot distinguish this strategy from a coin flip; a couple of hundred can. A good month is not evidence of an edge.',
          },
        },
        { t: 'callout', tone: 'warn', title: 'Sample size is the usual trap', text: 'A system with +0.4R expectancy can lose over 20 or 30 trades through bad luck alone. Streaks are expected: with a 35% win rate, ten losses in a row happen about 1.3% of the time per window, which across a few hundred trades is likely.' },
        { t: 'quant-viz', viz: 'trade-sim' },
      ],
    },
  ],
  sources: [
    'Tharp, V. K. (2006). *Trade Your Way to Financial Freedom* (2nd ed.). McGraw-Hill.',
    'Vince, R. (1992). *The Mathematics of Money Management*. Wiley.',
    'Aronson, D. (2007). *Evidence-Based Technical Analysis*. Wiley.',
  ],
  related: ['finance/trading/exit-types', 'finance/trading/sizing-and-ruin', 'finance/technical/risk-management', 'finance/quant/backtesting-and-overfitting'],
}

export default guide
