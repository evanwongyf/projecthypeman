import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An FX option gives the right, but not the obligation, to exchange currencies at a fixed rate. Companies use them to hedge while keeping upside; traders use them to bet on direction or volatility. They are priced with the Garman–Kohlhagen model, Black–Scholes adapted for two interest rates, and quoted in the market by volatility.',
  nutshell: [
    'A EUR call / USD put gives the right to buy euros and sell dollars at the strike.',
    '**Garman–Kohlhagen** (1983): Black–Scholes with the foreign interest rate acting like a dividend yield.',
    'Markets quote **implied volatility** by delta: at-the-money, **25-delta risk reversals** (skew) and **butterflies** (smile curvature).',
    'Common hedges: **buying a put**, **collars** (buy a put, sell a call to reduce cost), **participating forwards**.',
  ],
  sections: [
    {
      id: 'gk',
      title: 'Garman–Kohlhagen pricing',
      blocks: [
        {
          t: 'math',
          tex: String.raw`C = S e^{-r_f T} N(d_1) - K e^{-r_d T} N(d_2), \qquad d_{1,2} = \frac{\ln(S/K) + (r_d - r_f \pm \tfrac12\sigma^2)T}{\sigma\sqrt{T}}`,
          caption: 'The value of an FX call (in domestic currency per unit of foreign currency).',
          plain: 'The call is worth the discounted chance-weighted value of receiving the foreign currency minus the discounted chance-weighted cost of paying the strike. The foreign currency earns its own interest rate, so it is discounted at the foreign rate; the strike is paid in domestic currency, discounted at the domestic rate. N(d₂) is the risk-neutral chance the option finishes in the money.',
          where: [
            { sym: 'S', def: 'spot rate (domestic per foreign)' },
            { sym: 'K', def: 'strike' },
            { sym: String.raw`r_d, r_f`, def: 'domestic and foreign interest rates (continuously compounded)' },
            { sym: String.raw`\sigma`, def: 'implied volatility' },
            { sym: 'T', def: 'time to expiry in years' },
            { sym: 'N(·)', def: 'standard normal cumulative distribution' },
          ],
          syntax: [
            { sym: String.raw`d_{1,2}`, say: 'd₁ uses +½σ², d₂ uses −½σ² (so d₂ = d₁ − σ√T)' },
            { sym: String.raw`e^{-rT}`, say: 'a discount factor' },
          ],
          worked: {
            title: 'EUR/USD 6-month at-the-money call',
            steps: [
              String.raw`\(S = K = 1.10\), \(r_d = 4\%\) (USD), \(r_f = 2\%\) (EUR), \(\sigma = 8\%\), \(T = 0.5\).`,
              String.raw`\(\sigma\sqrt T = 0.08 \times 0.7071 = 0.05657\). \(d_1 = (0 + (0.02 + 0.0032) \times 0.5)/0.05657 = 0.0116/0.05657 = 0.205\); \(d_2 = 0.205 - 0.0566 = 0.149\).`,
              String.raw`\(N(d_1) = 0.581\), \(N(d_2) = 0.559\). Discount factors: \(e^{-0.01} = 0.9900\), \(e^{-0.02} = 0.9802\).`,
              String.raw`\(C = 1.10 \times 0.9900 \times 0.581 - 1.10 \times 0.9802 \times 0.559 = 0.6331 - 0.6027 = 0.0303\).`,
              String.raw`Put by parity: \(P = C - (S e^{-r_f T} - K e^{-r_d T}) = 0.0303 - 0.0108 = 0.0194\).`,
            ],
            why: [
              'inputs; ln(S/K) = 0 at the money',
              'the two standardised distances',
              'normal-table values and discount factors',
              'the formula',
              'put–call parity for currencies gives the put',
            ],
            answer: 'About 3.03 US cents per euro for the call ($30,300 on €1m) and 1.94 cents for the put. The call is dearer because USD rates are higher, so the forward (about 1.111) is above spot.',
          },
        },
      ],
    },
    {
      id: 'quotes',
      title: 'Volatility quotes: risk reversals and butterflies',
      blocks: [
        {
          t: 'math',
          tex: String.raw`RR_{25} = \sigma_{25\Delta C} - \sigma_{25\Delta P}, \qquad BF_{25} = \tfrac12(\sigma_{25\Delta C} + \sigma_{25\Delta P}) - \sigma_{\text{ATM}}`,
          caption: 'The 25-delta risk reversal (skew) and butterfly (smile curvature).',
          plain: 'FX options are traded in volatility terms. The risk reversal is how much more implied volatility out-of-the-money calls have than equally out-of-the-money puts: it shows which direction the market fears more. The butterfly shows how much both wings exceed the at-the-money volatility: how fat the market thinks the tails are.',
          where: [
            { sym: String.raw`\sigma_{25\Delta C}, \sigma_{25\Delta P}`, def: 'implied volatilities of 25-delta call and put' },
            { sym: String.raw`\sigma_{\text{ATM}}`, def: 'at-the-money implied volatility' },
          ],
          syntax: [
            { sym: String.raw`25\Delta`, say: '“25 delta”: an option whose delta is 0.25 (out of the money)' },
          ],
          worked: {
            title: 'Recovering wing volatilities from quotes',
            steps: [
              'Quotes: ATM 8.0%, RR −1.0% (puts dearer), BF 0.4%.',
              String.raw`Average wing vol: \(8.0 + 0.4 = 8.4\%\).`,
              String.raw`Call vol \(= 8.4 + \tfrac12(-1.0) = 7.9\%\); put vol \(= 8.4 - \tfrac12(-1.0) = 8.9\%\).`,
            ],
            why: [
              'typical market quotes',
              'the butterfly lifts both wings above ATM',
              'the risk reversal splits them',
            ],
            answer: '25-delta calls at 7.9%, puts at 8.9%: the market pays more to protect against a fall in the base currency.',
          },
        },
      ],
    },
    {
      id: 'hedges',
      title: 'Option hedges for a company',
      blocks: [
        { t: 'table', head: ['Structure', 'How', 'Pros', 'Cons'], rows: [
          ['Forward', 'Lock a rate', 'Free upfront; certain', 'No benefit if rates move your way'],
          ['Bought option', 'Buy a put on your receivable currency', 'Protection plus upside', 'Premium cost'],
          ['Collar (zero-cost)', 'Buy a put, sell a call; premiums offset', 'Protection with no upfront cost', 'Upside capped'],
          ['Participating forward', 'Forward on part, option on the rest', 'Some upside', 'Complexity'],
        ] },
      ],
    },
  ],
  sources: [
    'Garman, M. B., & Kohlhagen, S. W. (1983). Foreign currency option values. Journal of International Money and Finance, 2(3), 231–237.',
    'Clark, I. J. (2011). Foreign Exchange Option Pricing: A Practitioner’s Guide. Wiley.',
    'Wystup, U. (2017). FX Options and Structured Products (2nd ed.). Wiley.',
  ],
  related: ['finance/assets/options/pricing', 'finance/forex/hedging-currency-risk', 'finance/forex/forwards-swaps-and-ndfs'],
}

export default guide
