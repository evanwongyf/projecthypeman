import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Currency returns have been studied for decades, and a few systematic styles stand out: carry (own high-yielders, fund in low-yielders), momentum (follow trends), and value (bet on mean reversion towards purchasing-power parity). Discretionary traders add breakout, range and news strategies. This guide gives the rules, maths and risks of each.',
  nutshell: [
    '**Carry**: return ≈ interest-rate differential + spot change. Historically profitable, with **crash risk** in risk-off episodes.',
    '**Momentum**: buy currencies that rose over recent months; works in trending regimes, suffers in reversals.',
    '**Value**: buy currencies cheap relative to PPP; slow, long-horizon.',
    'Combining carry, momentum and value diversifies because they tend to fail at different times (Asness, Moskowitz and Pedersen, 2013).',
  ],
  sections: [
    {
      id: 'carry',
      title: 'Carry',
      blocks: [
        {
          t: 'math',
          tex: String.raw`R_{\text{carry}} \approx (i_{\text{long}} - i_{\text{short}}) + \frac{S_1 - S_0}{S_0}`,
          caption: 'Approximate annual return of a carry trade: the interest differential plus the change in the exchange rate.',
          plain: 'Borrow (or be short) the low-interest currency and hold the high-interest one. You earn the interest gap each year. If the high-yield currency also holds its value or rises, you profit; if it falls by more than the gap, you lose. Uncovered interest parity says it should fall by exactly the gap on average; in practice it often has not, which is why carry has earned a premium.',
          where: [
            { sym: String.raw`i_{\text{long}}, i_{\text{short}}`, def: 'interest rates of the currency held and the currency funded' },
            { sym: String.raw`S_0, S_1`, def: 'value of the held currency in funding-currency terms at the start and end' },
          ],
          syntax: [
            { sym: String.raw`\approx`, say: '“approximately”' },
          ],
          worked: {
            title: 'Long a 7% currency funded in a 1% currency',
            steps: [
              'Calm year: spot unchanged. Return ≈ 7 − 1 + 0 = 6%.',
              'Mild depreciation of 3%: 6 − 3 = 3%.',
              'Risk-off crash, high-yielder falls 15%: 6 − 15 = −9%.',
              'With 5× leverage, the crash year becomes about −45%.',
            ],
            why: [
              'the interest gap is the steady income',
              'small currency moves eat some of it',
              'big moves overwhelm a year of carry',
              'leverage multiplies both',
            ],
            answer: 'Carry earns steadily and loses suddenly, “picking up pennies in front of a steamroller”. Brunnermeier, Nagel and Pedersen (2008) linked carry crashes to funding stress and unwinds.',
          },
        },
      ],
    },
    {
      id: 'momentum',
      title: 'Momentum and value',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Signal}_{\text{mom}} = \operatorname{sign}\!\Big(\frac{S_t}{S_{t-12}} - 1\Big), \qquad \text{Signal}_{\text{val}} = \ln\frac{S_t^{\text{PPP}}}{S_t}`,
          caption: 'A 12-month time-series momentum signal and a PPP-based value signal (positive means the currency is cheap).',
          plain: 'Momentum looks at the past year: if a currency rose, go long; if it fell, go short. Value compares today’s exchange rate with the rate implied by purchasing-power parity (where the same basket costs the same in both countries); a currency far below that level is cheap and expected, slowly, to recover.',
          where: [
            { sym: String.raw`S_t`, def: 'exchange rate today (foreign currency’s value)' },
            { sym: String.raw`S_{t-12}`, def: 'rate 12 months ago' },
            { sym: String.raw`S_t^{\text{PPP}}`, def: 'PPP-implied rate' },
          ],
          syntax: [
            { sym: 'sign(x)', say: '+1 if x is positive, −1 if negative' },
          ],
          worked: {
            title: 'One currency, two signals',
            steps: [
              String.raw`Rate rose from 0.70 to 0.74 over 12 months: \(0.74/0.70 - 1 = +5.7\%\), momentum signal \(+1\) (long).`,
              String.raw`PPP-implied rate 0.68: value signal \(\ln(0.68/0.74) = \ln 0.919 = -0.085\) (expensive).`,
              'The signals disagree: momentum says long, value says short.',
            ],
            why: [
              'a rising trend',
              'trading 8.5% above its PPP level',
              'disagreement is common, and is why combining styles diversifies',
            ],
            answer: 'A multi-style portfolio would hold a small net position or none here. Momentum works on months; value on years.',
          },
        },
      ],
    },
    {
      id: 'discretionary',
      title: 'Discretionary styles',
      blocks: [
        { t: 'table', head: ['Style', 'Rule of thumb', 'Works when', 'Fails when'], rows: [
          ['Breakout', 'Enter when price breaks a range high or low, stop inside the range', 'Volatility expands after quiet periods', 'False breakouts in ranges'],
          ['Range / mean reversion', 'Sell near resistance, buy near support', 'Calm, range-bound markets (often Asian session crosses)', 'Trends and news shocks'],
          ['News / macro events', 'Position for central bank decisions or data surprises', 'Surprises versus consensus', 'Spreads widen; slippage; whipsaw'],
          ['Policy divergence', 'Long the currency whose central bank is tightening relative to another', 'Clear diverging cycles', 'Policy surprises, intervention'],
        ] },
        { t: 'callout', tone: 'warn', title: 'Retail reality', text: 'Regulators in several jurisdictions require brokers to disclose that most retail accounts trading leveraged FX and CFDs lose money (often 70% or more of accounts). Leverage, costs and overtrading are the main reasons.' },
      ],
    },
  ],
  sources: [
    'Lustig, H., & Verdelhan, A. (2007). The cross section of foreign currency risk premia and consumption growth risk. American Economic Review, 97(1), 89–117.',
    'Brunnermeier, M. K., Nagel, S., & Pedersen, L. H. (2008). Carry trades and currency crashes. NBER Macroeconomics Annual, 23, 313–347.',
    'Menkhoff, L., Sarno, L., Schmeling, M., & Schrimpf, A. (2012). Currency momentum strategies. Journal of Financial Economics, 106(3), 660–684.',
    'Asness, C. S., Moskowitz, T. J., & Pedersen, L. H. (2013). Value and momentum everywhere. Journal of Finance, 68(3), 929–985.',
  ],
  related: ['finance/forex/interest-rate-parity-and-carry', 'finance/quant/momentum-strategies', 'finance/forex/fx-correlation-and-portfolio'],
}

export default guide
