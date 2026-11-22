import type { Guide } from '../../../../guide'
import { blackScholes } from '../../../../../finance/derivatives'

const guide: Guide = {
  intro:
    'How much should an option cost? The answer, discovered in the early 1970s, is surprising: you can build the option’s payoff out of the stock and borrowing, so its price must equal the cost of that replica. No one’s opinion about where the stock is going enters the formula. Here are the three key results: put–call parity, the binomial model and Black–Scholes.',
  nutshell: [
    '**Put–call parity** ties call and put prices together: \\(C - P = S - Ke^{-rT}\\).',
    'The **binomial model** prices an option by replicating it with shares and a loan, step by step.',
    'Options are priced as if investors were **risk-neutral**: expected payoff under risk-neutral probabilities, discounted at the risk-free rate.',
    '**Black–Scholes** is the limit of the binomial model with many steps, for European options.',
    'The only input that is not observable is **volatility**, which is why options trade on "implied volatility".',
  ],
  sections: [
    {
      id: 'parity',
      title: 'Put–call parity',
      blocks: [
        {
          t: 'math',
          tex: String.raw`C - P = S_0 - K e^{-rT}`,
          where: [
            { sym: 'C, P', def: 'European call and put with the same strike K and expiry T' },
            { sym: String.raw`Ke^{-rT}`, def: 'Present value of the strike' },
            { sym: 'S_0', def: 'Current price of the underlying' },
            { sym: 'r', def: 'Risk-free interest rate' },
          ],
          syntax: [
            { sym: String.raw`C - P`, say: String.raw`Read “C minus P”: the call price minus the put price, same strike and expiry. Work out this difference first, then compare it with the right-hand side.` },
            { sym: String.raw`K e^{-rT}`, say: String.raw`Read “K times e to the minus r T”. The \(e^{-rT}\) part is a discount factor: multiply a future amount by it to bring it back to today’s money at a continuously compounded rate \(r\) for \(T\) years.` },
            { sym: String.raw`S_0`, say: String.raw`The little 0 is a subscript meaning “at time zero”, i.e. today. Read “S zero” or “S naught”.` },
          ],
          worked: {
            title: 'Finding the put from the call',
            steps: [
              String.raw`Given: stock \(S_0 = 150\), strike \(K = 145\), \(T = 0.5\) years, \(r = 4\%\), and a call quoted at \(C = 14.70\).`,
              String.raw`Discount factor: \(e^{-rT} = e^{-0.04 \times 0.5} = e^{-0.02} = 0.9802\).`,
              String.raw`Present value of the strike: \(Ke^{-rT} = 145 \times 0.9802 = 142.13\).`,
              String.raw`Right-hand side: \(S_0 - Ke^{-rT} = 150 - 142.13 = 7.87\).`,
              String.raw`Rearrange for the put: \(P = C - (S_0 - Ke^{-rT}) = 14.70 - 7.87 = 6.83\).`,
            ],
            answer: String.raw`\(P = 6.83\): a put quoted far from this would let you lock in a risk-free profit by trading the call, the share and the cash.`,
          },
          caption: 'This is not a model prediction, it is an identity that must hold, or there is a free-money arbitrage (shown just below). It is the fastest sanity check in options trading: if you know any three of C, P, S₀ and the discounted strike, the fourth is pinned down exactly, independent of volatility or anyone’s view on direction.',
        },
        {
          t: 'p',
          text: '**Why.** Portfolio A: a call plus cash worth \\(Ke^{-rT}\\). Portfolio B: a put plus one share. At expiry both are worth \\(\\max(S_T, K)\\): if \\(S_T > K\\), A exercises the call and B lets the put lapse, both ending with the share’s value; if \\(S_T < K\\), A keeps the cash K and B sells the share at K. Identical payoffs must have identical prices today, otherwise there is a free profit (an arbitrage).',
        },
        {
          t: 'example',
          title: 'Checking parity',
          lines: [
            { label: 'Data', text: '\\(S = 100,\\ K = 100,\\ T = 1,\\ r = 5\\%\\)' },
            { label: 'PV of strike', text: '\\(100e^{-0.05} = 95.12\\)' },
            { label: 'So', text: '\\(C - P = 100 - 95.12 = 4.88\\): with a call at 10.45, the put must be 5.57' },
          ],
        },
      ],
    },
    {
      id: 'binomial',
      title: 'A one-step binomial tree',
      blocks: [
        {
          t: 'p',
          text: 'A stock at 100 will be either 120 or 80 in one year. The interest rate is 5% (simple, for this example). What is a call with strike 100 worth? It pays 20 in the up state and 0 in the down state.',
        },
        {
          t: 'math',
          tex: String.raw`\Delta = \frac{C_u - C_d}{S_u - S_d} = \frac{20 - 0}{120 - 80} = 0.5`,
          where: [
            { sym: String.raw`C_u, C_d`, def: 'The call’s payoff in the up and down states' },
            { sym: String.raw`S_u, S_d`, def: 'The stock price in the up and down states' },
          ],
          syntax: [
            { sym: String.raw`\Delta`, say: String.raw`Read “delta”. A capital delta means “change in”, so here it is the hedge ratio: how many shares move like one option.` },
            { sym: String.raw`C_u, C_d`, say: String.raw`Read “C up” and “C down”. The subscripts \(u\) and \(d\) label the two possible states of the world.` },
            { sym: String.raw`\frac{C_u - C_d}{S_u - S_d}`, say: String.raw`Read “the spread in the option’s payoff over the spread in the stock price”: rise over run. Subtract down from up on top and on the bottom, then divide.` },
          ],
          worked: {
            title: 'Hedge ratio for a stock at 200',
            steps: [
              String.raw`Given: \(S_0 = 200\), and in a year the stock is either \(S_u = 230\) or \(S_d = 170\). The call has strike \(K = 190\).`,
              String.raw`Payoffs: \(C_u = \max(230 - 190, 0) = 40\) and \(C_d = \max(170 - 190, 0) = 0\).`,
              String.raw`Spreads: \(C_u - C_d = 40\) and \(S_u - S_d = 230 - 170 = 60\).`,
              String.raw`Divide: \(\Delta = 40/60 = 0.667\).`,
              String.raw`Check: \(\tfrac23\) of a share is worth \(153.33\) up and \(113.33\) down, a spread of 40, exactly the call’s spread.`,
            ],
            answer: String.raw`\(\Delta = 2/3\): two-thirds of a share (plus a loan, next) copies one call.`,
          },
          caption: 'Hold half a share: worth 60 or 40, a spread of 20, exactly matching the call’s spread. This Δ is the same idea as the Greek delta on the [Greeks](@finance/assets/options/greeks) page, the number of shares that replicates the option’s moves.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Borrow } B = \frac{\Delta S_d - C_d}{1 + r} = \frac{0.5(80) - 0}{1.05} = 38.10,\qquad C = \Delta S_0 - B = 50 - 38.10 = 11.90`,
          where: [
            { sym: 'B', def: 'Amount to borrow today' },
            { sym: 'r', def: 'The interest rate over the period' },
            { sym: 'S_0', def: 'Today’s stock price' },
          ],
          syntax: [
            { sym: String.raw`\Delta S_d`, say: String.raw`Read “delta times S down”: the number of shares multiplied by the down-state share price, i.e. what the share holding is worth in the bad state.` },
            { sym: String.raw`1 + r`, say: String.raw`Read “one plus r”: the growth factor of a loan over the period. Dividing by it discounts a future amount back to today.` },
            { sym: String.raw`C = \Delta S_0 - B`, say: String.raw`Read “C equals delta S zero minus B”: the cost of the shares you buy, less the cash the loan covers, is the cost of the replica.` },
          ],
          worked: {
            title: 'Replicating the call with a loan',
            steps: [
              String.raw`Given: \(\Delta = 2/3\), \(S_0 = 200\), \(S_d = 170\), \(C_d = 0\), \(r = 4\%\).`,
              String.raw`Down-state shares minus the call: \(\Delta S_d - C_d = 0.667 \times 170 - 0 = 113.33\). The loan must grow to exactly this.`,
              String.raw`Borrow today: \(B = 113.33/1.04 = 108.97\).`,
              String.raw`Cost of the shares: \(\Delta S_0 = 0.667 \times 200 = 133.33\).`,
              String.raw`Call price: \(C = 133.33 - 108.97 = 24.36\).`,
              String.raw`Check at expiry: up state, shares \(153.33\) minus repayment \(108.97 \times 1.04 = 113.33\) gives 40 \(= C_u\); down state gives \(113.33 - 113.33 = 0 = C_d\).`,
            ],
            answer: String.raw`\(C = 24.36\): the cost of the share-and-loan replica, whatever the real chance of an up move.`,
          },
          caption: 'Half a share minus a loan of 38.10 pays 20 or 0, exactly like the call. So the call costs 11.90: the price of building an identical payoff out of shares and borrowing, which is the whole logic behind why options can be priced without guessing where the stock is headed.',
        },
        {
          t: 'math',
          tex: String.raw`p = \frac{(1 + r) - d}{u - d} = \frac{1.05 - 0.8}{1.2 - 0.8} = 0.625,\qquad C = \frac{p\,C_u + (1-p)\,C_d}{1 + r} = \frac{0.625(20)}{1.05} = 11.90`,
          where: [
            { sym: 'u, d', def: 'Up and down factors (1.2 and 0.8)' },
            { sym: 'p', def: 'The risk-neutral probability of the up move' },
          ],
          syntax: [
            { sym: String.raw`u, d`, say: String.raw`Read “u” and “d”: the up and down factors. You multiply today’s price by them, so \(u = 1.15\) means a 15% rise and \(d = 0.85\) a 15% fall.` },
            { sym: String.raw`p\,C_u + (1-p)\,C_d`, say: String.raw`Read “p times C up plus one minus p times C down”: a probability-weighted average of the two payoffs, i.e. an expected value.` },
            { sym: String.raw`\frac{p\,C_u + (1-p)\,C_d}{1 + r}`, say: String.raw`Read “that whole expected payoff, divided by one plus r”: dividing by the growth factor discounts it back one period.` },
          ],
          worked: {
            title: 'Risk-neutral price of the same call',
            steps: [
              String.raw`Given: \(u = 230/200 = 1.15\), \(d = 170/200 = 0.85\), \(r = 4\%\), \(C_u = 40\), \(C_d = 0\).`,
              String.raw`Risk-neutral probability: \(p = \dfrac{1.04 - 0.85}{1.15 - 0.85} = \dfrac{0.19}{0.30} = 0.6333\), so \(1 - p = 0.3667\).`,
              String.raw`Expected payoff: \(0.6333 \times 40 + 0.3667 \times 0 = 25.33\).`,
              String.raw`Discount one period: \(C = 25.33/1.04 = 24.36\).`,
            ],
            answer: String.raw`\(C = 24.36\), the same as by replication, and the real probability of rising never appeared.`,
          },
          caption: 'The same answer, read as a discounted expected payoff with "risk-neutral" probabilities. The real chance of an up move never appeared.',
        },
        {
          t: 'plot',
          title: 'The tree',
          x: [0, 1.2],
          y: [70, 130],
          xLabel: 'Time (years)',
          yLabel: 'Stock price',
          data: [
            { pts: [[0, 100], [1, 120]], label: 'Up: call pays 20', dots: true },
            { pts: [[0, 100], [1, 80]], label: 'Down: call pays 0', dots: true },
          ],
          points: [
            { x: 0, y: 100, label: 'S₀ = 100, C = 11.90' },
            { x: 1, y: 120, label: 'S = 120' },
            { x: 1, y: 80, label: 'S = 80' },
          ],
        },
      ],
    },
    {
      id: 'bs',
      title: 'Black–Scholes',
      blocks: [
        {
          t: 'math',
          tex: String.raw`C = S_0 e^{-qT} N(d_1) - K e^{-rT} N(d_2),\qquad P = K e^{-rT} N(-d_2) - S_0 e^{-qT} N(-d_1)`,
          syntax: [
            { sym: String.raw`N(d_1)`, say: String.raw`Read “N of d one”. \(N\) is the standard normal cumulative distribution function: find \(d_1\) on the bell curve and read off the area to its left, a number between 0 and 1.` },
            { sym: String.raw`e^{-qT},\ e^{-rT}`, say: String.raw`Read “e to the minus q T” and “e to the minus r T”: discount factors for the dividend yield \(q\) and the interest rate \(r\) over \(T\) years. Multiply by them to shrink a value to today’s terms.` },
            { sym: String.raw`N(-d_2)`, say: String.raw`Read “N of minus d two”: the same lookup with the sign flipped, which equals \(1 - N(d_2)\) by symmetry of the bell curve. The put uses it.` },
          ],
          worked: {
            title: 'Pricing a call and a put',
            steps: [
              String.raw`Given: \(S_0 = 50\), \(K = 52\), \(T = 0.5\), \(r = 3\%\), \(q = 0\) (so \(e^{-qT} = 1\)), \(\sigma = 30\%\). The next block finds \(d_1 = -0.0081\) and \(d_2 = -0.2202\).`,
              String.raw`Look up the normal curve: \(N(d_1) = 0.4968\) and \(N(d_2) = 0.4128\).`,
              String.raw`Discounted strike: \(Ke^{-rT} = 52e^{-0.015} = 51.23\).`,
              String.raw`Call: \(C = 50 \times 0.4968 - 51.23 \times 0.4128 = 24.84 - 21.15 = 3.69\).`,
              String.raw`Put: \(P = 51.23 \times (1 - 0.4128) - 50 \times (1 - 0.4968) = 30.08 - 25.16 = 4.92\).`,
              String.raw`Parity check: \(C - P = -1.23\) and \(S_0 - Ke^{-rT} = 50 - 51.23 = -1.23\).`,
            ],
            answer: String.raw`Call 3.69, put 4.92: with the strike slightly above the stock, the put is worth more than the call.`,
          },
          caption: 'Read the call formula as "the present value of what you’d receive, minus the present value of what you’d pay, each weighted by how likely that leg is to matter". The first term shrinks or grows with S₀, the second with K, and both are scaled by probability-like terms (N(d₁), N(d₂)) rather than simple yes/no outcomes, which is why option value changes smoothly rather than jumping around the strike.',
        },
        {
          t: 'math',
          tex: String.raw`d_1 = \frac{\ln(S_0/K) + \left(r - q + \tfrac12\sigma^2\right)T}{\sigma\sqrt{T}},\qquad d_2 = d_1 - \sigma\sqrt{T}`,
          where: [
            { sym: 'N(·)', def: 'The standard normal cumulative distribution function' },
            { sym: 'd_1, d_2', def: 'Standardised distances that feed N(·); they have no units of their own and exist purely to plug into the formula above' },
            { sym: String.raw`\sigma`, def: 'Volatility of the stock’s returns (annual)' },
            { sym: 'r, q', def: 'Risk-free rate and dividend yield, continuously compounded' },
            { sym: 'T', def: 'Time to expiry in years' },
          ],
          syntax: [
            { sym: String.raw`\ln(S_0/K)`, say: String.raw`Read “the natural log of S zero over K”. The log asks “e to what power gives this?”: it is positive when the stock is above the strike, negative below, and zero when they are equal.` },
            { sym: String.raw`\sigma\sqrt{T}`, say: String.raw`Read “sigma root T”: volatility scaled to the option’s life. Uncertainty grows with the square root of time, so a quarter-year has half a year’s spread, not a quarter.` },
            { sym: String.raw`\tfrac12\sigma^2`, say: String.raw`Read “a half sigma squared”: square the volatility first, then halve it.` },
            { sym: String.raw`d_2 = d_1 - \sigma\sqrt{T}`, say: String.raw`Read “d two equals d one minus sigma root T”: compute \(d_1\) first, then subtract the scaled volatility.` },
          ],
          worked: {
            title: 'Computing d₁ and d₂',
            steps: [
              String.raw`Given: \(S_0 = 50\), \(K = 52\), \(T = 0.5\), \(r = 3\%\), \(q = 0\), \(\sigma = 30\%\).`,
              String.raw`Log term: \(\ln(50/52) = \ln(0.9615) = -0.0392\).`,
              String.raw`Drift term: \((r - q + \tfrac12\sigma^2)T = (0.03 + 0.5 \times 0.09) \times 0.5 = 0.075 \times 0.5 = 0.0375\).`,
              String.raw`Volatility term: \(\sigma\sqrt{T} = 0.30 \times \sqrt{0.5} = 0.30 \times 0.7071 = 0.2121\).`,
              String.raw`\(d_1 = (-0.0392 + 0.0375)/0.2121 = -0.0017/0.2121 = -0.0081\).`,
              String.raw`\(d_2 = -0.0081 - 0.2121 = -0.2202\).`,
            ],
            answer: String.raw`\(d_1 = -0.0081\), \(d_2 = -0.2202\), so \(N(d_2) = 0.4128\): the model gives this call about a 41% chance of finishing in the money.`,
          },
          caption: 'N(d₂) is the risk-neutral probability the call finishes in the money; N(d₁) is the call’s delta (for q = 0), read in depth on the [Greeks](@finance/assets/options/greeks) page. A bigger d₂ (stock well above strike, lots of time, low volatility) pushes N(d₂) towards 1, nearly certain to finish in the money; a very negative d₂ pushes it towards 0.',
        },
        {
          t: 'metric',
          name: 'N(d₂): the odds of finishing in the money',
          shows: 'The model’s own estimate of the probability that a call option will be worth something at expiry, that the stock will finish above the strike. It is a number buried inside the Black–Scholes formula, but it is often the most intuitive one: a trader quoting "this option has a 30% chance of finishing in the money" is quoting N(d₂) in plain English.',
          eli5: 'If a weather app says there is a 70% chance of rain, you know roughly what to expect even without understanding the model behind it. N(d₂) is the options-market equivalent for "will this stock close above the strike by expiry": a single probability, even though the real driver underneath (the stock’s future path) is far messier than a coin flip.',
          higher: 'The stock is more likely to finish above the strike, deep in-the-money calls have N(d₂) close to 1 (near-certain to pay off), which is also why their price moves almost dollar-for-dollar with the stock (delta near 1, a related but distinct number).',
          lower: 'The stock is less likely to finish above the strike. Far out-of-the-money calls have N(d₂) close to 0, which is why they are cheap: the model gives them little chance of ever paying off, though "little chance" is not "no chance", and that sliver of probability is exactly what the premium is paying for.',
          typical: 'At the money, N(d₂) is close to, but not exactly, 50%: the (r − q − ½σ²)T drift term in d₂ nudges it a little above or below depending on whether interest or volatility wins, a reminder that "at the money" (S₀ = K) is not the same thing as "50/50 odds".',
        },
        {
          t: 'p',
          text: '**Assumptions**: the stock follows geometric Brownian motion (log-normal prices) with constant volatility, there are no transaction costs, you can trade continuously and borrow at the risk-free rate, and the option is European. Real markets break all of these a little, which is why traders adjust volatility by strike (the "smile").',
        },
        {
          t: 'plot',
          title: 'Call value before expiry (S from 60 to 140, K = 100, σ = 20%, r = 5%)',
          x: [60, 140],
          y: [0, 45],
          xLabel: 'Stock price',
          yLabel: 'Call value',
          curves: [
            { f: (s: number) => Math.max(s - 100, 0), label: 'At expiry (intrinsic)', dashed: true },
            { f: (s: number) => blackScholes('call', s, 100, 0.25, 0.05, 0.2).price, label: '3 months left' },
            { f: (s: number) => blackScholes('call', s, 100, 1, 0.05, 0.2).price, label: '1 year left' },
          ],
          caption: 'The gap between each curve and the dashed line is time value; it is largest at the money.',
        },
        { t: 'fin-tool', tool: 'black-scholes' },
        { t: 'callout', tone: 'fact', title: 'A Nobel and a near-collapse', text: 'Myron Scholes and Robert Merton received the 1997 Nobel prize for the model (Fischer Black had died in 1995). The next year, Long-Term Capital Management, a hedge fund with both on its board, lost about $4.6 billion and had to be rescued by a consortium of banks organised by the New York Fed.' },
      ],
    },
  ],
  sources: [
    'Black, F., & Scholes, M. (1973). The pricing of options and corporate liabilities. *Journal of Political Economy*, 81(3), 637–654.',
    'Merton, R. C. (1973). Theory of rational option pricing. *Bell Journal of Economics and Management Science*, 4(1), 141–183.',
    'Cox, J. C., Ross, S. A., & Rubinstein, M. (1979). Option pricing: A simplified approach. *Journal of Financial Economics*, 7(3), 229–263.',
    'Stoll, H. R. (1969). The relationship between put and call option prices. *The Journal of Finance*, 24(5), 801–824.',
  ],
  related: ['finance/assets/options/greeks', 'finance/assets/options/volatility', 'finance/assets/options/basics'],
}

export default guide
