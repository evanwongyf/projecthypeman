import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Momentum, the tendency of recent winners to keep winning for a while, is one of the most robust anomalies in finance, found across stocks, bonds, currencies and commodities over more than a century. There are two forms: cross-sectional (relative strength among assets) and time-series (each asset against its own past). Both earn premiums, and both can crash.',
  nutshell: [
    '**Cross-sectional** (Jegadeesh and Titman, 1993): buy the top decile of past 3–12 month returns, short the bottom; skip the most recent month.',
    '**Time-series** (Moskowitz, Ooi and Pedersen, 2012): long assets with positive past-year returns, short those with negative.',
    '**Volatility scaling** sizes each position to a target risk.',
    '**Momentum crashes**: sharp losses when markets rebound after a fall (e.g. 2009), because the short side holds beaten-down stocks that rally most (Daniel and Moskowitz, 2016).',
  ],
  sections: [
    {
      id: 'signal',
      title: 'Signals',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{MOM}_{12-1} = \frac{P_{t-1}}{P_{t-12}} - 1`,
          caption: 'The classic “12-minus-1” momentum signal: return from 12 months ago to 1 month ago.',
          plain: 'Measure each asset’s return over the past year, but leave out the most recent month, because single-stock returns tend to reverse slightly over one month. Rank assets by this number: the highest are “winners”.',
          where: [
            { sym: String.raw`P_{t-k}`, def: 'price k months ago (adjusted for dividends and splits)' },
          ],
          syntax: [
            { sym: '12 − 1', say: '“twelve minus one”: twelve months back, skipping the latest' },
          ],
          worked: {
            title: 'Ranking three stocks',
            steps: [
              String.raw`Stock A: 12 months ago \$40, 1 month ago \$56: \(56/40 - 1 = 40\%\).`,
              String.raw`Stock B: \$30 → \$31.50: 5%.`,
              String.raw`Stock C: \$80 → \$64: −20%.`,
              'Rank: A (winner), B, C (loser). A long–short momentum portfolio buys A and shorts C.',
            ],
            why: [
              'compute the formation-period return',
              'the same for B',
              'and C',
              'rank and form portfolios',
            ],
            answer: 'A is the momentum buy, C the sell. In practice portfolios use deciles of hundreds of stocks and rebalance monthly.',
          },
        },
        {
          t: 'math',
          tex: String.raw`w_i = \operatorname{sign}(r_{i,12m}) \times \frac{\sigma_{\text{target}}}{\hat\sigma_i}`,
          caption: 'Time-series momentum position for asset i, scaled to a target volatility.',
          plain: 'Go long if the past year’s return is positive and short if negative. Size each position so that it contributes the same target volatility: quiet assets get bigger positions, wild ones smaller. This keeps one volatile market from dominating.',
          where: [
            { sym: String.raw`r_{i,12m}`, def: 'past 12-month return of asset i' },
            { sym: String.raw`\sigma_{\text{target}}`, def: 'target volatility per position (e.g. 10%)' },
            { sym: String.raw`\hat\sigma_i`, def: 'forecast volatility of asset i' },
          ],
          syntax: [
            { sym: 'sign(·)', say: '+1 for positive, −1 for negative' },
          ],
          worked: {
            title: 'Crude oil and government bonds',
            steps: [
              'Oil: past year −12%, volatility 30%. Bonds: past year +4%, volatility 5%. Target 10%.',
              String.raw`Oil: \(-1 \times 0.10/0.30 = -0.33\): short a third of capital.`,
              String.raw`Bonds: \(+1 \times 0.10/0.05 = +2.0\): long twice capital (via futures).`,
            ],
            why: [
              'inputs',
              'negative trend and high volatility: small short',
              'positive trend and low volatility: large long',
            ],
            answer: 'Each position targets 10% volatility. This scaling is what makes trend-following funds hold large bond and currency futures positions alongside smaller commodity ones.',
          },
        },
      ],
    },
    {
      id: 'evidence',
      title: 'Evidence and risks',
      blocks: [
        { t: 'table', head: ['Finding', 'Source'], rows: [
          ['Winners minus losers earned about 1% a month in US stocks, 1965–89', 'Jegadeesh and Titman (1993)'],
          ['Time-series momentum profitable in 58 futures markets over decades', 'Moskowitz, Ooi and Pedersen (2012)'],
          ['Trend following positive over a century, including in many crises', 'Hurst, Ooi and Pedersen (2017)'],
          ['Momentum crashes after market rebounds; volatility scaling helps', 'Daniel and Moskowitz (2016); Barroso and Santa-Clara (2015)'],
        ] },
      ],
    },
  ],
  sources: [
    'Jegadeesh, N., & Titman, S. (1993). Returns to buying winners and selling losers. Journal of Finance, 48(1), 65–91.',
    'Moskowitz, T. J., Ooi, Y. H., & Pedersen, L. H. (2012). Time series momentum. Journal of Financial Economics, 104(2), 228–250.',
    'Hurst, B., Ooi, Y. H., & Pedersen, L. H. (2017). A century of evidence on trend-following investing. Journal of Portfolio Management, 44(1), 15–29.',
    'Daniel, K., & Moskowitz, T. J. (2016). Momentum crashes. Journal of Financial Economics, 122(2), 221–247.',
    'Barroso, P., & Santa-Clara, P. (2015). Momentum has its moments. Journal of Financial Economics, 116(1), 111–120.',
  ],
  related: ['finance/philosophies/trend-following', 'finance/strategy-library/dual-momentum', 'finance/quant/volatility-targeting-and-risk-parity'],
}

export default guide
