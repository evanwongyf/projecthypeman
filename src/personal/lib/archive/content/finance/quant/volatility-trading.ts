import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Options let traders bet not only on direction but on volatility itself. A delta-hedged option profits or loses according to whether the market moves more or less than the option’s implied volatility predicted. On average implied volatility has exceeded realised volatility, the variance risk premium, which short-volatility strategies harvest, at the risk of sudden large losses.',
  nutshell: [
    'A delta-hedged long option earns roughly **½Γ S²(realised variance − implied variance)** over each period.',
    'The **variance risk premium**: index implied volatility has averaged a few points above subsequent realised volatility.',
    '**Variance swaps** pay realised variance minus a strike, directly.',
    'Short volatility earns steadily and loses violently (e.g. February 2018’s “Volmageddon”).',
  ],
  sections: [
    {
      id: 'gamma',
      title: 'Delta-hedged P&L',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{P\&L}_{\text{day}} \approx \tfrac12\,\Gamma S^2\big(r^2 - \sigma_i^2\,\Delta t\big)`,
          caption: 'Daily profit of a long, delta-hedged option: positive when the squared move exceeds the implied variance for the day.',
          plain: 'After delta hedging, small price moves do not matter directly; what matters is curvature (gamma). Each day a long option gains from the size of the move (squared) and pays “time decay” equal to what implied volatility expected. If the market moves more than implied, the long option wins; if less, it loses.',
          where: [
            { sym: String.raw`\Gamma`, def: 'gamma: change in delta per $1 move' },
            { sym: 'S', def: 'underlying price' },
            { sym: 'r', def: 'the day’s return' },
            { sym: String.raw`\sigma_i`, def: 'implied volatility (annual)' },
            { sym: String.raw`\Delta t`, def: 'one day in years (1/252)' },
          ],
          syntax: [
            { sym: String.raw`\Gamma`, say: '“gamma”' },
            { sym: String.raw`\sigma_i^2\Delta t`, say: 'the variance implied for one day' },
          ],
          worked: {
            title: 'One day, one option',
            steps: [
              String.raw`\(\Gamma = 0.05\), \(S = 100\): \(\tfrac12\Gamma S^2 = 0.5 \times 0.05 \times 10{,}000 = 250\).`,
              String.raw`Implied 20% a year: daily variance \(0.04/252 = 0.0001587\) (a 1.26% move).`,
              String.raw`Actual move 2%: \(r^2 = 0.0004\). P&L \(= 250 \times (0.0004 - 0.0001587) = \$0.060\).`,
              String.raw`Actual move 0.5%: \(r^2 = 0.000025\). P&L \(= 250 \times (0.000025 - 0.0001587) = -\$0.033\).`,
            ],
            why: [
              'the gamma scale factor',
              'what implied volatility “charges” per day',
              'a big move beats the charge',
              'a small move does not',
            ],
            answer: 'About +6 cents per option on a 2% day and −3 cents on a quiet day; on 1,000 options, +$60 and −$33. Over many days, P&L tracks realised minus implied variance.',
          },
        },
      ],
    },
    {
      id: 'varswap',
      title: 'Variance swaps',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Payoff} = N_{\text{var}}\,(\sigma_R^2 - K^2), \qquad N_{\text{var}} = \frac{N_{\text{vega}}}{2K}`,
          caption: 'Variance swap payoff (volatilities in percentage points) and the conversion from vega notional.',
          plain: 'A variance swap pays the difference between realised variance over its life and a strike agreed upfront. Traders quote the size as vega notional, the approximate gain per one-point rise in volatility; dividing by twice the strike converts it to variance notional. Because the payoff is in squared volatility, big moves pay disproportionately.',
          where: [
            { sym: String.raw`\sigma_R`, def: 'realised volatility (in points, e.g. 25)' },
            { sym: 'K', def: 'volatility strike (points)' },
            { sym: String.raw`N_{\text{vega}}`, def: 'vega notional ($ per vol point)' },
          ],
          syntax: [
            { sym: String.raw`\sigma_R^2`, say: 'realised variance, e.g. 25² = 625' },
          ],
          worked: {
            title: '$100,000 vega notional, strike 20',
            steps: [
              String.raw`\(N_{\text{var}} = 100{,}000/(2 \times 20) = 2{,}500\) per variance point.`,
              String.raw`Realised 25: \(2{,}500 \times (625 - 400) = \$562{,}500\).`,
              String.raw`Realised 15: \(2{,}500 \times (225 - 400) = -\$437{,}500\).`,
              String.raw`Realised 40 (a crisis): \(2{,}500 \times (1{,}600 - 400) = \$3{,}000{,}000\).`,
            ],
            why: [
              'convert notional',
              'five points above strike',
              'five points below: a smaller loss than the gain',
              'convexity makes crisis payoffs huge',
            ],
            answer: 'The long side gains far more from a spike than it loses from a quiet market, which is why short variance positions can suffer catastrophic losses.',
          },
        },
      ],
    },
  ],
  sources: [
    'Carr, P., & Wu, L. (2009). Variance risk premiums. Review of Financial Studies, 22(3), 1311–1341.',
    'Demeterfi, K., Derman, E., Kamal, M., & Zou, J. (1999). More than you ever wanted to know about volatility swaps. Goldman Sachs Quantitative Strategies.',
    'Bakshi, G., & Kapadia, N. (2003). Delta-hedged gains and the negative market volatility risk premium. Review of Financial Studies, 16(2), 527–566.',
  ],
  related: ['finance/assets/options/greeks', 'finance/assets/options/volatility', 'finance/strategy-library/options-income'],
}

export default guide
