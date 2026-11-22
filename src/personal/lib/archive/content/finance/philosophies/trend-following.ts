import type { Guide } from '../../../guide'
import { pathRows } from '../../../../finance/series'

const TREND = pathRows([100, 98, 101, 99, 102, 112, 108, 120, 116, 130, 122, 118], 4, 31)

const guide: Guide = {
  intro:
    'Trend followers make no forecasts. They buy what is rising and sell what is falling, cut losing trades quickly and let winners run. Many small losses are paid for by a few large wins. Professional trend followers (often called CTAs or managed-futures funds) apply this across dozens of markets.',
  nutshell: [
    '"The trend is your friend": follow price, not opinions.',
    'Typical rules: breakouts (new 20- or 55-day highs) or moving-average crossovers.',
    'Win rates are often only 35–45%, but average wins are several times average losses.',
    'Trend following has tended to do well in long crises ("crisis alpha"), as in 2008.',
    'Discipline is the hard part: long losing streaks are normal.',
  ],
  sections: [
    {
      id: 'idea',
      title: 'The core rules',
      blocks: [
        {
          t: 'candles',
          rows: TREND,
          title: 'A breakout trend trade',
          height: 340,
          boxes: [
            { from: 0, to: 15, label: 'Range: no trade', color: 'var(--lavender)' },
            { from: 16, to: 39, label: 'In the trend: trailing stop follows', color: 'var(--mint)' },
            { from: 40, to: 43, label: 'Exit on reversal', color: 'var(--pink)' },
          ],
          lines: [{ y: 102.5, label: 'Breakout level' }],
          caption: 'Enter on a breakout above the range; ride the trend; exit when price hits a trailing stop. The exit gives back some profit by design.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Signal}_t = \operatorname{sign}\!\left(\frac{P_t}{P_{t-252}} - 1\right),\qquad \text{position} = \text{Signal}_t \times \frac{\sigma_{\text{target}}}{\sigma_{\text{asset}}}`,
          where: [
            { sym: 'P_t, P_{t-252}', def: 'Price today and price 252 trading days (one year) ago' },
            { sym: String.raw`\sigma_{\text{target}}`, def: 'The risk level the strategy wants from each position' },
            { sym: String.raw`\sigma_{\text{asset}}`, def: 'The asset’s own volatility' },
          ],
          syntax: [
            { sym: String.raw`\operatorname{sign}(x)`, say: 'Read "the sign of x". It returns +1 if x is positive, −1 if negative, and 0 if zero: the size of the move is thrown away, only its direction counts.' },
            { sym: String.raw`P_{t-252}`, say: String.raw`Read "P at t minus 252". The subscript counts back 252 trading days from today \(t\), about one calendar year.` },
            { sym: String.raw`\frac{P_t}{P_{t-252}} - 1`, say: 'Read "price now over price a year ago, minus one". This is the past year’s percentage return as a decimal.' },
          ],
          worked: {
            title: 'Three markets, target 10% risk each',
            steps: [
              String.raw`Equity index: price 120 now, 100 a year ago. Return \(120/100 - 1 = +20\%\), so the signal is \(+1\). Volatility 25% gives size \(10/25 = 0.40\). Position: long 0.40 times capital.`,
              String.raw`Government bonds: up 4% over the year, signal \(+1\); volatility 5% gives \(10/5 = 2.0\). Position: long 2.0 times capital (leveraged).`,
              String.raw`Crude oil: price 85 now, 100 a year ago. Return \(85/100 - 1 = -15\%\), signal \(-1\). Volatility 40% gives \(10/40 = 0.25\). Position: short 0.25 times capital.`,
            ],
            answer: 'Long 0.40 equities, long 2.0 bonds and short 0.25 oil, each carrying roughly the same 10% risk despite very different volatility.',
          },
          caption: 'Time-series momentum (Moskowitz, Ooi and Pedersen, 2012): long if the past year’s return is positive, short if negative. The sizing term matters as much as the signal, dividing by the asset’s own volatility means a calm bond market and a wild commodity each end up contributing roughly the same amount of risk to the portfolio, rather than the most volatile markets silently dominating the result just because their price swings are largest in dollar terms.',
        },
      ],
    },
    {
      id: 'payoff',
      title: 'Why it works when it works',
      blocks: [
        {
          t: 'math',
          tex: String.raw`E = p\,\overline{W} - (1 - p)\,\overline{L} = 0.38(3.2) - 0.62(1) \approx +0.6R`,
          syntax: [
            { sym: String.raw`\overline{W},\ \overline{L}`, say: 'Read "W bar" and "L bar". A bar over a letter means the average: average win size and average loss size.' },
            { sym: 'R', say: String.raw`In \(+0.6R\), \(R\) is one unit of initial risk; \(+0.6R\) means 0.6 times the amount risked on a typical trade.` },
            { sym: String.raw`\approx`, say: 'Read "is approximately": the exact answer is 0.596, rounded to 0.6.' },
          ],
          worked: {
            title: 'One hundred trades',
            steps: [
              String.raw`Given: win rate \(p = 0.38\), average win \(3.2R\), average loss \(1R\).`,
              String.raw`Over 100 trades: 38 winners add \(38 \times 3.2 = 121.6R\); 62 losers subtract \(62 \times 1 = 62R\).`,
              String.raw`Net: \(121.6 - 62 = 59.6R\), or \(59.6/100 = 0.596R\) per trade.`,
              'If 1R is 500 of account risk, each trade is worth about 298 on average.',
            ],
            answer: 'The system loses 62 times out of 100 yet earns about 0.6R per trade, because its wins are over three times its losses.',
          },
          caption: 'A typical trend-following profile: lose more often than you win, but win big.',
        },
        {
          t: 'plot',
          title: 'Payoff resembles a long straddle: gains from large moves either way',
          x: [-40, 40],
          y: [-10, 30],
          xLabel: 'Market move over the period (%)',
          yLabel: 'Trend strategy return (%)',
          curves: [{ f: (m: number) => 0.012 * m * m - 4, label: 'Stylised "smile"' }],
          caption: 'Researchers have found trend-following returns look like owning options: small losses in quiet, choppy markets; large gains in big moves up or down.',
        },
        { t: 'callout', tone: 'fact', title: 'Crisis alpha', text: 'In 2008, while global stocks fell more than 40%, many managed-futures funds gained roughly 10–20% by riding falling stock indices and rising bonds. They then struggled for much of the 2010s, when markets chopped and reversed.' },
      ],
    },
  ],
  sources: [
    'Moskowitz, T. J., Ooi, Y. H., & Pedersen, L. H. (2012). Time series momentum. *Journal of Financial Economics*, 104(2), 228–250.',
    'Hurst, B., Ooi, Y. H., & Pedersen, L. H. (2017). A century of evidence on trend-following investing. *The Journal of Portfolio Management*, 44(1), 15–29.',
    'Covel, M. W. (2009). *Trend Following*. FT Press.',
  ],
  related: ['finance/frameworks/turtles', 'finance/technical/moving-averages', 'finance/technical/evidence'],
}

export default guide
