import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A trader who is long EUR/USD, long GBP/USD and short USD/CHF may think they have three trades. In fact they mostly have one: short US dollars. Currency pairs share legs and move together, so position risk must be measured at the portfolio level, by netting currency exposures and using correlations.',
  nutshell: [
    'Every pair is two exposures: long the base, short the quote.',
    '**Net exposure** by currency reveals hidden concentration (often in USD).',
    'Portfolio volatility depends on **correlations**: highly correlated positions in the same direction add up; opposite positions offset.',
    'Correlations change, and rise in crises.',
  ],
  sections: [
    {
      id: 'netting',
      title: 'Netting currency exposure',
      blocks: [
        { t: 'example', title: 'Three positions, US$100k notional each', lines: [
          { label: 'Long EUR/USD', text: '+EUR 100k (in USD terms), −USD 100k' },
          { label: 'Long GBP/USD', text: '+GBP 100k, −USD 100k' },
          { label: 'Short USD/CHF', text: '−USD 100k, +CHF 100k' },
          { label: 'Net', text: 'USD −300k; EUR, GBP, CHF +100k each' },
          { label: 'Reading', text: 'This is a single bet against the dollar, three times the size of each trade.' },
        ] },
      ],
    },
    {
      id: 'vol',
      title: 'Portfolio volatility of two positions',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\sigma_p = \sqrt{a_1^2\sigma_1^2 + a_2^2\sigma_2^2 + 2a_1a_2\rho\,\sigma_1\sigma_2}`,
          caption: 'Volatility of a portfolio with positions a₁ and a₂ (as fractions of capital, negative for shorts) in pairs with volatilities σ and correlation ρ.',
          plain: 'The risk of two positions together depends on how they move together. If they tend to move in the same direction (positive ρ) and you hold both the same way, the risks add up almost fully. If you hold them opposite ways, the shared movement cancels.',
          where: [
            { sym: String.raw`a_1, a_2`, def: 'position sizes as fractions of capital (signed)' },
            { sym: String.raw`\sigma_1, \sigma_2`, def: 'annual volatilities of the two pairs' },
            { sym: String.raw`\rho`, def: 'correlation of their returns' },
          ],
          syntax: [
            { sym: String.raw`\rho`, say: '“rho”: correlation, from −1 to +1' },
          ],
          worked: {
            title: 'EUR/USD (8% vol) and GBP/USD (9% vol), correlation 0.7, each sized at 100% of capital',
            steps: [
              String.raw`Both long: \(\sqrt{0.08^2 + 0.09^2 + 2 \times 0.7 \times 0.08 \times 0.09} = \sqrt{0.0064 + 0.0081 + 0.01008} = \sqrt{0.02458} \approx 15.7\%\).`,
              String.raw`Long EUR/USD, short GBP/USD: the cross term flips sign: \(\sqrt{0.0064 + 0.0081 - 0.01008} = \sqrt{0.00442} \approx 6.6\%\).`,
              String.raw`If they were uncorrelated: \(\sqrt{0.0145} \approx 12.0\%\).`,
            ],
            why: [
              'same direction, positive correlation: risks reinforce',
              'opposite directions: the common USD move cancels (this is effectively long EUR/GBP)',
              'zero correlation as a reference',
            ],
            answer: 'Two “separate” longs carry 15.7% volatility, nearly double either alone. The long/short pair carries only 6.6%. Size positions on portfolio risk, not trade by trade.',
          },
        },
      ],
    },
    {
      id: 'checklist',
      title: 'Portfolio rules',
      blocks: [
        { t: 'checklist', items: [
          'Tally net exposure per currency after every new trade',
          'Cap net exposure to any one currency (e.g. 2× the single-trade risk)',
          'Count highly correlated trades as one when applying the 1–2% risk rule',
          'Recheck correlations monthly; assume they rise towards 1 in a crisis',
          'Remember that stock portfolios abroad already carry currency exposure',
        ] },
      ],
    },
  ],
  sources: [
    'Jorion, P. (2006). Value at Risk (3rd ed.). McGraw-Hill.',
    'Longin, F., & Solnik, B. (2001). Extreme correlation of international equity markets. Journal of Finance, 56(2), 649–676.',
  ],
  related: ['finance/forex/pips-lots-and-leverage', 'finance/quant/portfolio-theory', 'finance/trading/sizing-and-ruin'],
}

export default guide
