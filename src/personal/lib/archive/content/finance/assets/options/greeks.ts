import type { Guide } from '../../../../guide'
import { blackScholes } from '../../../../../finance/derivatives'

const bs = (S: number, T = 0.25) => blackScholes('call', S, 100, T, 0.04, 0.25)

const guide: Guide = {
  intro:
    'The **Greeks** measure how an option’s price responds to each thing that can change: the stock price, time, volatility and interest rates. Options traders think in Greeks the way drivers think in speed and direction: they describe the risk of a position at a glance.',
  nutshell: [
    '**Delta (Δ)**: change in option price per $1 move in the stock. Calls 0 to 1, puts −1 to 0.',
    '**Gamma (Γ)**: change in delta per $1 move. Highest at the money near expiry.',
    '**Theta (Θ)**: change in price per day. Usually negative for buyers: time decay.',
    '**Vega (ν)**: change in price per 1-point change in volatility.',
    '**Rho (ρ)**: change in price per 1-point change in interest rates.',
  ],
  sections: [
    {
      id: 'formulas',
      title: 'The formulas (Black–Scholes, no dividends)',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\begin{aligned}
\Delta_C &= N(d_1), \quad \Delta_P = N(d_1) - 1 \\
\Gamma &= \frac{N'(d_1)}{S\sigma\sqrt T} \\
\nu &= S\sqrt T\,N'(d_1) \\
\Theta_C &= -\frac{S N'(d_1)\sigma}{2\sqrt T} - rKe^{-rT}N(d_2) \\
\rho_C &= KTe^{-rT}N(d_2)
\end{aligned}`,
          where: [
            { sym: String.raw`N'(x)`, def: 'The standard normal density, e^{−x²/2}/√(2π)' },
            { sym: String.raw`N(d_1), d_1, d_2`, def: 'The cumulative normal and the standardised distances from the Black–Scholes formula on the [pricing](@finance/assets/options/pricing) page' },
            { sym: 'S, K', def: 'Stock price and strike' },
            { sym: String.raw`\sigma, T, r`, def: 'Volatility, time to expiry (years) and the risk-free rate' },
          ],
          syntax: [
            { sym: String.raw`\Delta_C,\ \Delta_P`, say: String.raw`Read “delta sub C” and “delta sub P”. The subscript says which option: C for the call, P for the put.` },
            { sym: String.raw`N'(d_1)`, say: String.raw`Read “N prime of d one”. The prime means “the slope of”, so \(N'\) is the height of the bell curve at \(d_1\) (the density), whereas \(N\) is the area under it.` },
            { sym: String.raw`\sqrt T`, say: String.raw`Read “root T”: the square root of time to expiry in years.` },
            { sym: String.raw`\Gamma,\ \nu,\ \Theta,\ \rho`, say: String.raw`Read “gamma, nu, theta, rho”. Nu looks like a v and stands for vega, which is not actually a Greek letter name.` },
            { sym: String.raw`\frac{N'(d_1)}{S\sigma\sqrt T}`, say: String.raw`Read “N prime of d one, over S sigma root T”: the bell-curve height divided by the stock price times the scaled volatility.` },
          ],
          worked: {
            title: 'All five Greeks for one option',
            steps: [
              String.raw`Given: \(S = K = 100\), \(T = 0.25\), \(r = 4\%\), \(\sigma = 25\%\). Then \(d_1 = \dfrac{0 + (0.04 + 0.03125) \times 0.25}{0.25 \times 0.5} = 0.1425\) and \(d_2 = 0.1425 - 0.125 = 0.0175\).`,
              String.raw`Lookups: \(N(d_1) = 0.5567\), \(N(d_2) = 0.5070\), \(N'(d_1) = 0.3949\). So \(\Delta_C = 0.5567\) and \(\Delta_P = 0.5567 - 1 = -0.4433\).`,
              String.raw`Gamma: \(\Gamma = \dfrac{0.3949}{100 \times 0.25 \times 0.5} = \dfrac{0.3949}{12.5} = 0.0316\) per $1 move.`,
              String.raw`Vega: \(\nu = 100 \times 0.5 \times 0.3949 = 19.75\) per 1.00 of volatility, i.e. \(0.197\) per volatility point.`,
              String.raw`Theta: \(-\dfrac{100 \times 0.3949 \times 0.25}{2 \times 0.5} - 0.04 \times 100 \times e^{-0.01} \times 0.5070 = -9.873 - 2.008 = -11.88\) per year, or \(-0.0325\) per day.`,
              String.raw`Rho: \(100 \times 0.25 \times e^{-0.01} \times 0.5070 = 12.55\) per 1.00 of rate, i.e. \(0.125\) per rate point.`,
            ],
            answer: String.raw`For this at-the-money 3-month call (worth 5.47): delta 0.56, gamma 0.032, vega 0.20 a point, theta about −3 cents a day, rho 0.125 a point.`,
          },
          caption: 'Gamma and vega are the same for calls and puts with the same strike and expiry; delta, theta and rho differ by a small, fixed offset between a call and its matching put. Read each formula by its sign and its peak: delta ranges over a fixed band, while gamma, theta and vega all peak for at-the-money options and shrink towards zero the further an option sits from the strike.',
        },
        {
          t: 'math',
          tex: String.raw`\Theta + \tfrac12\sigma^2 S^2\,\Gamma + rS\,\Delta = rV`,
          where: [
            { sym: String.raw`\Theta, \Gamma, \Delta`, def: 'Theta, gamma and delta of the option' },
            { sym: String.raw`\sigma, S, r`, def: 'Volatility, stock price and the risk-free rate' },
            { sym: 'V', def: 'The option’s value' },
          ],
          syntax: [
            { sym: String.raw`\Theta + \tfrac12\sigma^2 S^2\,\Gamma + rS\,\Delta = rV`, say: String.raw`Read “theta plus a half sigma squared S squared gamma plus r S delta equals r V”. The left side adds the three ways a hedged position’s value drifts; the right side is what the same value would earn risk-free.` },
            { sym: String.raw`\sigma^2 S^2`, say: String.raw`Read “sigma squared S squared”: the stock’s variance per year, in dollars squared. Squares apply to each letter separately.` },
            { sym: String.raw`rS\,\Delta`, say: String.raw`Read “r times S times delta”: the interest earned on the stock-sized part of the position; juxtaposed letters mean multiply.` },
          ],
          worked: {
            title: 'Checking the equation numerically',
            steps: [
              String.raw`Given the at-the-money call above: \(S = 100\), \(r = 4\%\), \(\sigma = 25\%\), \(V = 5.472\), \(\Delta = 0.5567\), \(\Gamma = 0.03159\), \(\Theta = -11.881\) per year.`,
              String.raw`Gamma term: \(\tfrac12\sigma^2 S^2\Gamma = 0.5 \times 0.0625 \times 10{,}000 \times 0.03159 = 9.873\).`,
              String.raw`Delta term: \(rS\Delta = 0.04 \times 100 \times 0.5567 = 2.227\).`,
              String.raw`Left side: \(-11.881 + 9.873 + 2.227 = 0.219\).`,
              String.raw`Right side: \(rV = 0.04 \times 5.472 = 0.219\).`,
            ],
            answer: String.raw`Both sides equal 0.219: of the 11.88 a year this call loses to time decay, 9.87 is the fair price of owning gamma and the remainder is financing.`,
          },
          caption: 'The Black–Scholes equation links them: for a delta-hedged position, the time decay you pay (Θ) is the price of the gamma you own. Long gamma means short theta, read this as an exchange rate, not a coincidence: a desk cannot hold a big, convex gamma position for free, and whatever it is paying away each day as theta is, by this equation, exactly the fair price of the gamma benefit it is receiving.',
        },
      ],
    },
    {
      id: 'shapes',
      title: 'What they look like',
      blocks: [
        {
          t: 'plot',
          title: 'Call delta against stock price (K = 100, σ = 25%)',
          x: [60, 140],
          y: [0, 1],
          xLabel: 'Stock price',
          yLabel: 'Delta',
          curves: [
            { f: (s: number) => bs(s, 1).delta, label: '1 year to expiry' },
            { f: (s: number) => bs(s, 0.08).delta, label: '1 month to expiry' },
          ],
          vlines: [{ x: 100, label: 'Strike' }],
          caption: 'Near expiry, delta flips quickly from 0 to 1 around the strike: that steepness is gamma.',
        },
        {
          t: 'metric',
          name: 'delta (Δ)',
          shows: 'How much an option\'s price moves for every $1 move in the underlying stock, and, as a handy side effect, roughly the market\'s implied probability that the option finishes in the money. It is the Greek traders check first, because it tells you how much the option behaves like actually owning (or shorting) the stock.',
          eli5: 'If a call option has a delta of 0.6, it behaves a bit like owning 0.6 of a share: if the stock goes up $1, the option gains about $0.60. Delta 1.0 means it moves dollar-for-dollar with the stock, like owning the stock outright; delta 0 means it barely reacts at all.',
          higher: 'A call delta closer to 1 (or a put delta closer to −1) means the option behaves more like the underlying stock itself, bigger dollar moves for a given stock move, and a higher implied chance of finishing in the money. Deep in-the-money options have delta near 1 (calls) or −1 (puts).',
          lower: 'A call delta closer to 0 (or a put delta closer to 0) means the option barely reacts to small stock moves and has a lower implied chance of finishing in the money, this is typical of far out-of-the-money options, which are cheap precisely because delta (and therefore expected payoff) is small.',
          typical: 'At-the-money options have delta near 0.5 (calls) or −0.5 (puts); traders often describe strikes by their delta instead of their price, a "25-delta call" is a common, standardised way to pick a moderately out-of-the-money strike across different stocks and expiries.',
        },
        {
          t: 'plot',
          title: 'Time decay of an at-the-money call (S = K = 100, σ = 25%)',
          x: [0, 180],
          y: [0, 8],
          xLabel: 'Days to expiry',
          yLabel: 'Option value',
          curves: [{ f: (d: number) => blackScholes('call', 100, 100, Math.max(d, 0.01) / 365, 0.04, 0.25).price, label: 'Value' }],
          caption: 'Value falls roughly with the square root of time left, so decay speeds up in the final weeks.',
        },
        {
          t: 'metric',
          name: 'gamma (Γ)',
          shows: 'How fast delta itself changes as the stock price moves, the "acceleration" of an option position, where delta is the "speed". A position with high gamma can flip from feeling like a small stock position to a large one (or vice versa) very quickly as price moves, which is why gamma is what option sellers fear most near expiry.',
          eli5: 'If delta is how fast your car is going, gamma is how hard you\'re pressing the accelerator. A high-gamma option\'s "speed" (delta) can change dramatically with just a small move in the stock, like a car that can go from a crawl to highway speed in seconds, which is thrilling if you\'re a buyer and nerve-racking if you\'re a seller who has to keep re-hedging.',
          higher: 'Delta changes fast for small stock moves, the position\'s exposure can swing wildly, which benefits an option buyer (their position gains exposure fast as the stock moves their way) and hurts a seller, who must trade the stock frequently to stay hedged (and pays for all that gamma through theta, per the Black-Scholes equation above). Gamma peaks for at-the-money options very close to expiry.',
          lower: 'Delta barely changes as the stock moves, the position behaves predictably like a fixed stock-equivalent exposure. Deep in-the-money, deep out-of-the-money, and longer-dated options all have low gamma, since their delta is already pinned near an extreme (or near 0) and not sensitive to small moves.',
          typical: 'Professional option-selling desks closely monitor total portfolio gamma and re-hedge ("delta-hedge") throughout the day as it changes; a trading desk described as "short gamma" is in the uncomfortable position of needing to buy high and sell low to stay hedged as the stock whips around.',
        },
      ],
    },
    {
      id: 'using',
      title: 'Using the Greeks',
      blocks: [
        {
          t: 'example',
          title: 'Delta hedging',
          lines: [
            { label: 'Position', text: 'sold 10 call contracts (1,000 options) with delta 0.6' },
            { label: 'Exposure', text: '\\(-1000 \\times 0.6 = -600\\) share-equivalents' },
            { label: 'Hedge', text: 'buy 600 shares: net delta 0' },
            { label: 'Then', text: 'as the price moves, delta changes (gamma), so the hedge must be adjusted' },
          ],
        },
        {
          t: 'table',
          head: ['Position', 'Delta', 'Gamma', 'Theta', 'Vega'],
          rows: [
            ['Long call', '+', '+', '−', '+'],
            ['Long put', '−', '+', '−', '+'],
            ['Short call', '−', '−', '+', '−'],
            ['Short put', '+', '−', '+', '−'],
            ['Long straddle', '≈ 0', '+', '−', '+'],
          ],
          caption: 'Option buyers own gamma and vega and pay theta; sellers collect theta and carry the risk of sharp moves.',
        },
        {
          t: 'metric',
          name: 'theta (Θ)',
          shows: 'How much value an option loses purely from the passage of one day, with everything else (stock price, volatility) held constant, the "rent" an option buyer pays for the right to hold it, and the "income" an option seller earns for taking on that risk. It is usually quoted as a negative number for long positions: the dollar amount the position is expected to lose per day just from time ticking by.',
          eli5: 'An option is like a movie ticket for tonight\'s show. Even if nothing else changes, that ticket becomes worthless the moment tonight\'s showing starts and ends, it is constantly losing "time value" simply because the clock is running down, whether or not the film (the stock) does anything interesting.',
          higher: 'A larger negative theta (for a long option) means faster time decay, the position loses more value per day just from time passing. Theta is largest (in dollar terms) for at-the-money options close to expiry, which is why professional option sellers often favour short-dated, at-the-money options: time decay works fastest for them there.',
          lower: 'A smaller theta means slower time decay, longer-dated options lose a smaller fraction of their value per day (even though their total time value is larger), which is why buying longer-dated options is sometimes described as "paying less rent per day" even though the option itself costs more upfront.',
          typical: 'Theta accelerates sharply in an option\'s final weeks (value falls roughly with the square root of time remaining, per the chart above), which is why many option-selling strategies specifically target options with 30–45 days left: enough premium to be worth selling, but already decaying meaningfully each day.',
        },
        {
          t: 'metric',
          name: 'vega (ν)',
          shows: 'How much an option\'s price changes for a 1-percentage-point change in implied volatility, how exposed the position is to the market\'s *expectation* of future price swings, separate from any actual move in the stock price. An option can gain or lose value purely because the market becomes more or less fearful, even if the stock itself does not move at all.',
          eli5: 'Insurance against a hurricane costs more right before hurricane season starts, even if no storm has actually formed yet, just because everyone expects stormier weather ahead. Vega measures how much an option\'s price reacts to exactly that kind of shift in expected future "weather" (volatility), separate from the stock actually moving.',
          higher: 'The option\'s price is more sensitive to changes in implied volatility, a jump in expected future turbulence (say, ahead of an earnings announcement) boosts the option\'s value noticeably, and a drop in expected turbulence (after the news passes, "volatility crush") hurts it noticeably. Vega is highest for at-the-money options with more time to expiry.',
          lower: 'The option\'s price barely reacts to changes in implied volatility, typical of options very close to expiry (not enough time left for extra turbulence to matter much) or very deep in or out of the money (the outcome is already close to certain either way).',
          typical: 'Vega is a major reason option prices can move a lot around earnings announcements even without a big stock price move, implied volatility typically rises into the announcement (boosting option prices) and collapses right after ("volatility crush"), which is why buying options purely to bet on earnings moves is a common, and commonly misunderstood, trap for new traders.',
        },
        { t: 'fin-tool', tool: 'black-scholes' },
      ],
    },
  ],
  sources: ['Hull, J. C. (2022). *Options, Futures, and Other Derivatives* (11th ed.). Pearson.', 'Taleb, N. N. (1997). *Dynamic Hedging*. Wiley.'],
  related: ['finance/assets/options/pricing', 'finance/assets/options/strategies', 'finance/assets/options/volatility'],
}

export default guide
