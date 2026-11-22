import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Two defensive styles. Low-volatility investing holds the calmest stocks, which historically delivered market-like returns with less risk, contradicting the textbook idea that more risk earns more return. Dividend-growth investing holds companies with long records of raising dividends. Both tilt towards defensive sectors and are sensitive to interest rates.',
  nutshell: [
    'The **low-volatility anomaly**: low-risk stocks have had higher risk-adjusted returns than high-risk stocks (Baker, Bradley and Wurgler, 2011; Frazzini and Pedersen’s betting-against-beta, 2014).',
    'Possible reasons: leverage constraints, lottery preferences, benchmark-hugging managers.',
    '**Dividend growth**: firms raising dividends for 10–25+ years; yields start modest but grow.',
    'Risks: sector concentration (utilities, staples, REITs) and losses when bond yields rise.',
  ],
  sections: [
    {
      id: 'yoc',
      title: 'Dividend growth and yield on cost',
      blocks: [
        {
          t: 'math',
          tex: String.raw`y_{\text{cost}}(n) = y_0\,(1 + g)^n, \qquad E[R] \approx y_0 + g`,
          caption: 'Yield on original cost after n years of dividend growth g, and the Gordon-model expected return.',
          plain: 'If a company’s dividend grows at g a year, the income on your original purchase grows the same way, so a modest starting yield becomes a large one on your cost. If valuations stay constant, expected return is roughly today’s yield plus dividend growth.',
          where: [
            { sym: String.raw`y_0`, def: 'starting dividend yield' },
            { sym: 'g', def: 'annual dividend growth' },
            { sym: 'n', def: 'years held' },
          ],
          syntax: [
            { sym: String.raw`(1+g)^n`, say: 'growth compounded n years' },
          ],
          worked: {
            title: 'A 3% yielder growing dividends 7% a year',
            steps: [
              String.raw`After 10 years: \(3\% \times 1.07^{10} = 3\% \times 1.967 = 5.9\%\) on cost.`,
              String.raw`After 20 years: \(3\% \times 1.07^{20} = 3\% \times 3.870 = 11.6\%\).`,
              String.raw`Expected total return \(\approx 3 + 7 = 10\%\) a year if the valuation multiple is unchanged.`,
            ],
            why: [
              'compound the dividend',
              'longer holding',
              'Gordon growth approximation',
            ],
            answer: 'Yield on cost rises to about 6% after a decade and 12% after two. Yield on cost is a mental frame, not a measure of current return; judge the holding by today’s yield and prospects.',
          },
        },
      ],
    },
    {
      id: 'lowvol',
      title: 'Building a low-volatility portfolio',
      blocks: [
        { t: 'steps', items: [
          { title: 'Measure', body: 'Compute each stock’s volatility over the past 1–3 years (or its beta).' },
          { title: 'Select', body: 'Keep the lowest-volatility 20–30% of a broad universe.' },
          { title: 'Weight', body: 'Equal, inverse-volatility or optimised minimum variance; cap sectors to avoid extreme tilts.' },
          { title: 'Rebalance', body: 'Semi-annually; check sector and interest-rate exposure.' },
        ] },
      ],
    },
  ],
  sources: [
    'Baker, M., Bradley, B., & Wurgler, J. (2011). Benchmarks as limits to arbitrage. Financial Analysts Journal, 67(1), 40–54.',
    'Frazzini, A., & Pedersen, L. H. (2014). Betting against beta. Journal of Financial Economics, 111(1), 1–25.',
    'Ang, A., Hodrick, R. J., Xing, Y., & Zhang, X. (2006). The cross-section of volatility and expected returns. Journal of Finance, 61(1), 259–299.',
  ],
  related: ['finance/indexes/smart-beta', 'finance/philosophies/dividends', 'finance/fundamental/dividend-models'],
}

export default guide
