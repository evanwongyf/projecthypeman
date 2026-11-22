import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Hedging uses futures to cancel out a price risk you already have. A **short hedge** protects something you own or will sell (a farmer’s crop); a **long hedge** protects something you will need to buy (an airline’s fuel). The goal is not to make money on the futures, but to make the overall result predictable.',
  nutshell: [
    'Short hedge: own the asset, sell futures. Long hedge: need the asset later, buy futures.',
    'The **minimum-variance hedge ratio** is \\(h^* = \\rho\\,\\sigma_S/\\sigma_F\\).',
    'To hedge a stock portfolio, use its **beta**: \\(N = \\beta V/(F \\times m)\\).',
    '**Basis risk** remains when the futures do not move exactly with what you are hedging.',
  ],
  sections: [
    {
      id: 'ratio',
      title: 'The hedge ratio',
      blocks: [
        {
          t: 'math',
          tex: String.raw`h^{*} = \rho\,\frac{\sigma_{\Delta S}}{\sigma_{\Delta F}},\qquad N^{*} = h^{*}\,\frac{Q_A}{Q_F}`,
          where: [
            { sym: 'h^*', def: 'The minimum-variance hedge ratio' },
            { sym: String.raw`\rho`, def: 'Correlation between changes in the spot price you are exposed to and the futures price' },
            { sym: String.raw`\sigma_{\Delta S}, \sigma_{\Delta F}`, def: 'Standard deviations of those price changes' },
            { sym: 'N^*', def: 'Number of futures contracts to trade' },
            { sym: 'Q_A, Q_F', def: 'Size of your exposure and size of one futures contract' },
          ],
          syntax: [
            { sym: String.raw`h^{*}`, say: String.raw`Read “h star”. A star on a symbol marks the optimal value: the best choice of \(h\).` },
            { sym: String.raw`\sigma_{\Delta S}`, say: String.raw`Read “sigma of delta S”. Here \(\Delta\) means “change in” (not an option delta), so this is the standard deviation of changes in the spot price.` },
            { sym: String.raw`\frac{Q_A}{Q_F}`, say: String.raw`Read “Q A over Q F”: the size of your exposure divided by the size of one futures contract, which is how many contracts would cover you one-for-one.` },
          ],
          worked: {
            title: 'A farmer hedging corn',
            steps: [
              String.raw`Given: 500,000 bushels to sell, contracts of 5,000 bushels, \(\rho = 0.85\), \(\sigma_{\Delta S} = 1.8\%\), \(\sigma_{\Delta F} = 2.2\%\).`,
              String.raw`Hedge ratio: \(h^* = 0.85 \times 1.8/2.2 = 0.695\).`,
              String.raw`One-for-one cover: \(Q_A/Q_F = 500{,}000/5{,}000 = 100\) contracts.`,
              String.raw`Contracts to sell: \(N^* = 0.695 \times 100 = 69.5\), so 70.`,
              String.raw`Variance removed at best: \(\rho^2 = 0.85^2 = 0.7225\).`,
            ],
            answer: String.raw`Sell about 70 contracts (not 100); this removes at best about 72% of the price variance, and the remainder is basis risk.`,
          },
          caption: 'The hedge ratio that minimises the variance of the hedged position. It is the slope of a regression of spot changes on futures changes, and it is read directly below.',
        },
        {
          t: 'metric',
          name: 'the minimum-variance hedge ratio (h*)',
          shows: 'How many units of futures to trade per unit of the thing you are exposed to, in order to make the combined position’s value as steady as possible. It answers the practical question "if I hedge, how much futures do I actually buy or sell?"trading one-for-one is only correct when the hedge is perfect, which it rarely is.',
          eli5: 'If jet fuel and heating-oil futures moved in perfect lockstep, one dollar of futures would offset one dollar of fuel risk exactly, h* = 1. But they do not move in perfect lockstep, and they do not swing by the same amount, so h* adjusts for both: how closely related the two are (correlation) and how much more, or less, jumpy the futures are compared with what you are hedging.',
          higher: 'h* closer to 1 means the futures track your exposure closely in both correlation and size, a near-complete hedge is possible, and you would trade close to a full one-for-one amount of futures against your exposure.',
          lower: 'h* well below 1 means either the correlation is weak, or the futures price swings around much more than your actual exposure for the same dollar size, hedging with fewer contracts than your exposure’s face value would suggest, because over-hedging with a jumpier instrument would add risk rather than remove it.',
          typical: 'h* above about 0.8, as in the jet fuel example below, is considered a reasonably strong hedge; the correlation ρ alone (squared) also tells you what fraction of the original price risk the hedge can remove at best, a ρ of 0.93 means roughly 86% of the variance can be hedged away, with the rest left over as basis risk.',
        },
        {
          t: 'example',
          title: 'An airline hedging jet fuel with heating-oil futures',
          lines: [
            { label: 'Data', text: '\\(\\rho = 0.93,\\ \\sigma_S = 2.6\\%,\\ \\sigma_F = 3.0\\%\\) a month' },
            { label: 'Hedge ratio', text: '\\(h^* = 0.93 \\times 2.6/3.0 \\approx 0.81\\)' },
            { label: 'Contracts', text: 'to cover 2,000,000 gallons with 42,000-gallon contracts: \\(0.81 \\times 2{,}000{,}000/42{,}000 \\approx 38.5\\), so 39 contracts' },
          ],
        },
      ],
    },
    {
      id: 'beta',
      title: 'Hedging a stock portfolio',
      blocks: [
        {
          t: 'math',
          tex: String.raw`N = \beta\,\frac{V_P}{F \times m}\qquad\text{and to change beta from } \beta \text{ to } \beta^{*}:\quad N = (\beta - \beta^{*})\frac{V_P}{F \times m}`,
          where: [
            { sym: 'N', def: 'Number of index futures contracts to sell (to reduce market exposure)' },
            { sym: String.raw`\beta`, def: 'The portfolio’s current beta: how much it moves for a 1% move in the index' },
            { sym: String.raw`\beta^{*}`, def: 'The target beta you want to end up with' },
            { sym: 'V_P', def: 'Portfolio value' },
            { sym: 'F × m', def: 'Futures price times multiplier: one contract’s value' },
          ],
          syntax: [
            { sym: String.raw`\beta,\ \beta^{*}`, say: String.raw`Read “beta” and “beta star”: the portfolio’s current beta, and the target beta you want after hedging.` },
            { sym: String.raw`\frac{V_P}{F \times m}`, say: String.raw`Read “V P over F times m”: portfolio value divided by the value of one futures contract, the number of contracts that equal the whole portfolio.` },
            { sym: String.raw`(\beta - \beta^{*})`, say: String.raw`Read “beta minus beta star”: the amount of market exposure you want to remove.` },
          ],
          worked: {
            title: 'Hedging an 8 million portfolio',
            steps: [
              String.raw`Given: portfolio \(V_P = \$8{,}000{,}000\), \(\beta = 1.25\), index futures at 5,200 with multiplier $50.`,
              String.raw`One contract: \(F \times m = 5{,}200 \times 50 = \$260{,}000\).`,
              String.raw`Contracts equal to the portfolio: \(8{,}000{,}000/260{,}000 = 30.77\).`,
              String.raw`Fully market-neutral (\(\beta^* = 0\)): \(N = 1.25 \times 30.77 = 38.46\), so sell 38.`,
              String.raw`Trim to \(\beta^* = 0.5\): \(N = (1.25 - 0.5) \times 30.77 = 23.08\), so sell 23.`,
            ],
            answer: String.raw`Sell 38 contracts to remove nearly all market risk, or 23 to cut beta from 1.25 to about 0.5, without selling a single share.`,
          },
          caption: 'A $5 million portfolio with beta 1.2, hedged with index futures at 5,000 × $50 = $250,000: N = 1.2 × 5,000,000/250,000 = 24 contracts sold. Read N as the dial that sets your market exposure: selling the full N takes beta to zero (market-neutral), selling none leaves it at 1.2, and the second formula lets you dial to any target in between, useful for trimming risk without actually selling any shares (and triggering capital gains tax or losing a long-term position).',
        },
        {
          t: 'plot',
          title: 'A short hedge flattens the result',
          x: [80, 120],
          y: [-25, 25],
          xLabel: 'Price at the hedge date',
          yLabel: 'Gain or loss',
          curves: [
            { f: (s: number) => s - 100, label: 'Unhedged holding' },
            { f: (s: number) => 100 - s, label: 'Short futures', dashed: true },
            { f: () => 0, label: 'Hedged total (no basis risk)' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Basis risk', text: 'If jet fuel prices and heating-oil futures diverge, the hedge is imperfect. The remaining risk is basis risk: hedging swaps price risk for (usually smaller) basis risk.' },
        { t: 'callout', tone: 'fact', title: 'Southwest’s fuel hedge', text: 'Southwest Airlines famously hedged most of its fuel needs in the early 2000s at low prices. As oil soared to over $140 a barrel in 2008, its hedges saved billions of dollars and kept it profitable while rivals lost money.' },
      ],
    },
  ],
  sources: ['Hull, J. C. (2022). *Options, Futures, and Other Derivatives* (11th ed.). Pearson.', 'Ederington, L. H. (1979). The hedging performance of the new futures markets. *The Journal of Finance*, 34(1), 157–170.'],
  related: ['finance/assets/futures/basics', 'finance/foundations/risk-return'],
}

export default guide
