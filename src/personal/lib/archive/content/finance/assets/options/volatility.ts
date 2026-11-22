import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Everything in the Black–Scholes formula is observable except volatility. So traders turn it around: given the option’s market price, what volatility does it imply? **Implied volatility (IV)** is the market’s forecast of how much the stock will move, and it is what options traders really trade.',
  nutshell: [
    '**Implied volatility** is the σ that makes the model price equal the market price.',
    '**Historical (realised) volatility** is measured from past price changes; IV looks ahead.',
    'IV is usually higher for low strikes (the **skew** or smile), because crash protection is in demand.',
    'The expected one-standard-deviation move is about \\(S\\,\\sigma\\sqrt{T}\\).',
    'The **VIX** is the 30-day implied volatility of the S&P 500.',
  ],
  sections: [
    {
      id: 'implied',
      title: 'Implied versus realised',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Find } \sigma_{\text{imp}} \text{ such that } BS(S, K, T, r, \sigma_{\text{imp}}) = \text{market price}`,
          syntax: [
            { sym: String.raw`\sigma_{\text{imp}}`, say: String.raw`Read “sigma implied”: the volatility backed out of a market price, not measured from past data.` },
            { sym: String.raw`BS(S, K, T, r, \sigma)`, say: String.raw`Read “B S of S, K, T, r, sigma”: function notation. Feed the five inputs into the Black–Scholes formula and a price comes out.` },
            { sym: String.raw`\text{Find } \sigma \text{ such that } \ldots`, say: String.raw`Read “find sigma such that…” as “search for the value of sigma that makes this equation true”. There is no algebraic rearrangement, so you guess, compare and refine.` },
          ],
          worked: {
            title: 'Backing out implied volatility',
            steps: [
              String.raw`Given: a 1-year at-the-money call, \(S = K = 100\), \(r = 5\%\), trading at 12.34.`,
              String.raw`Try \(\sigma = 20\%\): Black–Scholes gives 10.45, below 12.34, so volatility must be higher.`,
              String.raw`Try \(\sigma = 30\%\): the model gives 14.23, above 12.34, so the answer lies between 20% and 30%.`,
              String.raw`Try the midpoint \(\sigma = 25\%\): the model gives 12.34, matching the market.`,
            ],
            answer: String.raw`\(\sigma_{\text{imp}} = 25\%\): the market is pricing roughly 25% annualised swings.`,
          },
          caption: 'Solved numerically (the calculator uses bisection). Higher prices mean higher implied volatility.',
        },
        {
          t: 'metric',
          name: 'implied volatility (IV)',
          shows: 'The market\'s collective forecast of how much a stock will swing (in either direction) over the life of the option, backed out from the price traders are actually willing to pay. Unlike historical volatility (a fact about the past), implied volatility is an opinion about the future, priced in real money by whoever is buying and selling that option right now.',
          eli5: 'If umbrella sellers suddenly start charging a lot more for umbrellas, you can infer they expect rain even without checking a forecast, their prices reveal their expectation. Implied volatility works the same way: options get more expensive when the market expects bigger price swings ahead, even before anything has actually happened.',
          higher: 'The market expects bigger price swings ahead (in either direction, IV does not predict up or down, just magnitude). Options cost more when IV is high, which rewards sellers of options (who collect a richer premium) and makes buying options more expensive and harder to profit from, since the stock now has to move even further to cover the higher price paid.',
          lower: 'The market expects calmer, more predictable price action ahead. Options are cheaper when IV is low, which is a better environment for buying options (less premium to pay, less to lose if wrong) and a less rewarding one for selling them (less income collected for the same risk).',
          typical: 'IV typically rises ahead of known events (earnings, FDA decisions, elections) and collapses right after the news is out ("volatility crush"), since the uncertainty that was being priced in has now resolved, a pattern experienced option traders explicitly plan around, since simply buying options into an expected announcement is a well-known way to lose money even when correctly predicting the direction.',
        },
        {
          t: 'math',
          tex: String.raw`\sigma_{\text{realised}} = \sqrt{252}\cdot\text{stdev}\left(\ln\frac{P_t}{P_{t-1}}\right)`,
          where: [
            { sym: String.raw`P_t, P_{t-1}`, def: 'Closing prices on two consecutive trading days' },
            { sym: '252', def: 'Approximate number of trading days in a year, used to annualise a daily figure' },
          ],
          syntax: [
            { sym: String.raw`\ln\frac{P_t}{P_{t-1}}`, say: String.raw`Read “the natural log of today’s close over yesterday’s close”. This log return is close to the percentage change for small moves. The \(t-1\) subscript means “the previous day”.` },
            { sym: String.raw`\text{stdev}(\cdot)`, say: String.raw`Read “the standard deviation of”: measure how far the returns typically sit from their average. It is applied to the whole list of daily returns.` },
            { sym: String.raw`\sqrt{252}\cdot`, say: String.raw`Read “root 252 times”: scale a daily figure up to a year. Volatility grows with the square root of time, and \(\sqrt{252} \approx 15.87\).` },
          ],
          worked: {
            title: 'Realised volatility from six closes',
            steps: [
              String.raw`Given closes: 100, 101.5, 100.8, 102.3, 101.9, 103.4 (five daily returns).`,
              String.raw`Log returns: \(\ln(101.5/100) = 1.489\%\), \(\ln(100.8/101.5) = -0.692\%\), \(\ln(102.3/100.8) = 1.477\%\), \(\ln(101.9/102.3) = -0.392\%\), \(\ln(103.4/101.9) = 1.461\%\).`,
              String.raw`Average return: \(0.669\%\).`,
              String.raw`Sample standard deviation (dividing by \(n - 1 = 4\)): \(1.110\%\) a day.`,
              String.raw`Annualise: \(1.110\% \times 15.875 = 17.6\%\).`,
            ],
            answer: String.raw`Realised volatility is about 17.6%; an implied volatility of 25% would mean options are pricing more movement than the stock has shown.`,
          },
          caption: 'Annualised from daily log returns, this is a backward-looking fact about what actually happened, in contrast to implied volatility’s forward-looking guess. Comparing the two is a common trade: if implied volatility sits well above recent realised volatility, options look expensive relative to how much the stock has actually been moving (and vice versa), though that gap can persist for good reasons, like an event everyone knows is coming.',
        },
        { t: 'fin-tool', tool: 'black-scholes' },
      ],
    },
    {
      id: 'smile',
      title: 'The volatility smile and skew',
      blocks: [
        {
          t: 'plot',
          title: 'Implied volatility by strike (stylised equity index)',
          x: [70, 130],
          y: [0.1, 0.4],
          xLabel: 'Strike (% of current price)',
          yLabel: 'Implied volatility',
          data: [{ pts: [[70, 0.36], [80, 0.3], [90, 0.24], [100, 0.19], [110, 0.16], [120, 0.155], [130, 0.16]], label: 'Index options: skew', dots: true }],
          hlines: [{ y: 0.19, label: 'Black–Scholes assumes one flat volatility' }],
          caption: 'Low-strike puts trade at higher IV, reflecting fear of crashes and fat tails. Since the 1987 crash, index options have shown this skew consistently.',
        },
      ],
    },
    {
      id: 'move',
      title: 'The expected move',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{1σ move} \approx S\,\sigma\sqrt{T},\qquad \text{daily move} \approx \frac{\sigma}{\sqrt{252}} \approx \frac{\sigma}{16}`,
          where: [
            { sym: 'S', def: 'Current stock price' },
            { sym: String.raw`\sigma`, def: 'Implied volatility (annualised)' },
            { sym: 'T', def: 'Time horizon, in years' },
          ],
          syntax: [
            { sym: String.raw`\text{1σ move}`, say: String.raw`Read “one sigma move”: one standard deviation. About 68% of outcomes land within one sigma of the starting price.` },
            { sym: String.raw`\sqrt{T}`, say: String.raw`Read “root T”: the square root of the horizon in years. One month is \(T = 1/12\), whose root is about 0.289.` },
            { sym: String.raw`\frac{\sigma}{\sqrt{252}} \approx \frac{\sigma}{16}`, say: String.raw`Read “sigma over root 252, about sigma over 16”: a mental shortcut. Divide the annual volatility by 16 to get a typical daily move.` },
          ],
          worked: {
            title: 'The expected move on a 250 stock',
            steps: [
              String.raw`Given: \(S = 250\), implied volatility \(\sigma = 40\%\), horizon one month \(T = 1/12\).`,
              String.raw`One-sigma month: \(250 \times 0.40 \times \sqrt{1/12} = 250 \times 0.40 \times 0.2887 = 28.87\).`,
              String.raw`68% range: \(250 \pm 28.87\), i.e. 221.13 to 278.87.`,
              String.raw`Two sigma (about 95%): \(\pm 57.7\), i.e. roughly 192.3 to 307.7.`,
              String.raw`Daily move: \(40\%/16 = 2.5\%\), about \(\$6.25\) on a 250 stock.`,
            ],
            answer: String.raw`The market implies the stock stays within about 221 to 279 over the month two times out of three; it says nothing about direction.`,
          },
          caption: 'This "1σ move" is a statement about odds, not a forecast: under the model’s assumptions, the stock has roughly a 68% chance of finishing within this band by time T, and roughly a 95% chance of finishing within double it (2σ). With a stock at 100 and IV 32%, the market implies a typical daily move of about 2% (32/16) and a one-month (T ≈ 1/12) move of about ±9, read that as "two-thirds of the time, expect the stock to stay inside a 91–109 range over the next month", not as a prediction of which way it breaks.',
        },
        {
          t: 'p',
          text: 'Around earnings announcements, IV rises before the news and collapses after it ("volatility crush"), so buying options just before earnings often loses money even when the stock moves.',
        },
        { t: 'callout', tone: 'fact', title: 'The VIX', text: 'The Cboe Volatility Index was introduced in 1993 (and revised in 2003 to use a wide range of S&P 500 options). Readings around 12–20 are calm; above 30 signals stress. Because of the rule of 16, a VIX of 16 implies typical daily moves of about 1%.' },
      ],
    },
  ],
  sources: ['Natenberg, S. (2014). *Option Volatility and Pricing* (2nd ed.). McGraw-Hill.', 'Cboe. (2019). *Cboe VIX White Paper*.', 'Rubinstein, M. (1994). Implied binomial trees. *The Journal of Finance*, 49(3), 771–818.'],
  related: ['finance/assets/options/pricing', 'finance/technical/volatility'],
}

export default guide
