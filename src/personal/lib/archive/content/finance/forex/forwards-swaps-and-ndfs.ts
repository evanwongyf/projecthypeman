import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most foreign-exchange turnover is not spot trading but forwards and swaps. Companies lock in future exchange rates with forwards; banks and funds manage cash and hedges with FX swaps; and for currencies that cannot be freely delivered offshore, non-deliverable forwards (NDFs) settle the difference in dollars. All are priced from the spot rate and the two currencies’ interest rates.',
  nutshell: [
    '**Outright forward**: an agreement to exchange currencies at a fixed rate on a future date.',
    'Forward rate = spot × (1 + quote-currency interest × time) ÷ (1 + base-currency interest × time): **covered interest parity**.',
    '**Swap points** = forward − spot, quoted in pips; negative when the base currency has the higher interest rate.',
    '**FX swap**: spot exchange now plus the reverse forward exchange later: effectively a collateralised loan in another currency.',
    '**NDF**: settles only the difference between the contract rate and a fixing rate, in a convertible currency.',
  ],
  sections: [
    {
      id: 'forward',
      title: 'Pricing a forward',
      blocks: [
        {
          t: 'math',
          tex: String.raw`F = S \times \frac{1 + i_q\,\frac{d}{B_q}}{1 + i_b\,\frac{d}{B_b}}, \qquad \text{swap points} = F - S`,
          caption: 'The forward rate for a quote of base/quote currencies, d days ahead, with simple money-market interest and day-count bases B.',
          plain: 'You can get foreign currency for a future date two ways: agree a forward rate now, or exchange today and deposit the money until then. If the two routes gave different results, banks would arbitrage. So the forward must equal the spot rate adjusted by the interest each currency earns over the period. The currency with the higher interest rate trades at a forward discount.',
          where: [
            { sym: 'S', def: 'spot rate (units of quote currency per one unit of base currency)' },
            { sym: 'F', def: 'forward rate' },
            { sym: String.raw`i_q, i_b`, def: 'annual interest rates of the quote and base currencies' },
            { sym: 'd', def: 'days to delivery' },
            { sym: 'B', def: 'day-count basis: 360 for USD and EUR, 365 for SGD and GBP' },
          ],
          syntax: [
            { sym: String.raw`\frac{d}{B}`, say: 'the fraction of a year' },
          ],
          worked: {
            title: 'USD/SGD three months forward',
            steps: [
              'Spot 1.3500 SGD per USD. USD rate 5.0% (base, 360-day), SGD rate 3.0% (quote, 365-day). 90 days.',
              String.raw`Quote factor: \(1 + 0.03 \times 90/365 = 1.007397\). Base factor: \(1 + 0.05 \times 90/360 = 1.0125\).`,
              String.raw`\(F = 1.3500 \times 1.007397/1.0125 = 1.3432\).`,
              String.raw`Swap points: \(1.3432 - 1.3500 = -0.0068\), quoted as −68 pips.`,
            ],
            why: [
              'collect spot, rates and the period',
              'growth of each currency over 90 days with its own convention',
              'the forward that removes arbitrage',
              'the forward is below spot because USD earns more interest',
            ],
            answer: 'The three-month forward is about 1.3432. A Singapore exporter expecting USD in three months can lock in 1.3432 SGD per USD; the 68-pip discount reflects the interest-rate gap, not a forecast.',
          },
        },
      ],
    },
    {
      id: 'swap',
      title: 'FX swaps',
      blocks: [
        { t: 'example', title: 'A Singapore fund needs USD for three months', lines: [
          { label: 'Near leg (today)', text: 'Sell S$13.5m, buy US$10m at spot 1.3500.' },
          { label: 'Far leg (in 90 days)', text: 'Buy back S$13.432m, sell US$10m at the forward 1.3432.' },
          { label: 'Effect', text: 'The fund borrowed USD for three months against SGD collateral; the swap points are the interest-rate difference.' },
          { label: 'Use', text: 'Hedging foreign assets, funding, rolling forward hedges each month or quarter.' },
        ] },
      ],
    },
    {
      id: 'ndf',
      title: 'Non-deliverable forwards',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Settlement (USD)} = N \times \frac{F_{\text{contract}} - S_{\text{fixing}}}{S_{\text{fixing}}}`,
          caption: 'Cash settlement of an NDF where the buyer of USD (seller of the local currency) agreed rate F; N is the USD notional.',
          plain: 'For currencies with capital controls (such as the Indian rupee, Korean won or Taiwan dollar offshore), the two currencies are never exchanged. On the settlement date, the contract rate is compared with an official fixing rate, and only the difference is paid in US dollars.',
          where: [
            { sym: 'N', def: 'notional in USD' },
            { sym: String.raw`F_{\text{contract}}`, def: 'agreed rate (local currency per USD)' },
            { sym: String.raw`S_{\text{fixing}}`, def: 'official fixing rate on the fixing date' },
          ],
          syntax: [
            { sym: String.raw`\frac{F - S}{S}`, say: 'the difference expressed in USD per USD of notional' },
          ],
          worked: {
            title: 'A USD/INR NDF, seller of USD',
            steps: [
              'An investor sold USD 1m forward against INR at 84.00 (they gain if INR strengthens).',
              'Fixing at maturity: 83.20.',
              String.raw`Settlement: \(1{,}000{,}000 \times (84.00 - 83.20)/83.20 = 1{,}000{,}000 \times 0.009615 = \$9{,}615\).`,
              'The investor receives about US$9,615.',
            ],
            why: [
              'define the position and contract rate',
              'compare with the fixing',
              'the INR difference converted to USD at the fixing',
              'positive because the rupee strengthened as they bet',
            ],
            answer: 'The investor receives about $9,600 in USD, without any rupees changing hands.',
          },
        },
      ],
    },
  ],
  sources: [
    'Bank for International Settlements (2022). Triennial Central Bank Survey of foreign exchange turnover.',
    'Hull, J. C. (2022). Options, Futures, and Other Derivatives (11th ed.). Pearson.',
    'Monetary Authority of Singapore. Singapore dollar market conventions.',
  ],
  related: ['finance/forex/interest-rate-parity-and-carry', 'finance/forex/hedging-currency-risk', 'finance/forex/fx-options'],
}

export default guide
