import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The workhorse model of a price is geometric Brownian motion (GBM): returns that are random, independent and normally distributed, so prices are lognormal and never negative. It is the model behind Black–Scholes and most Monte Carlo simulations. This guide builds it from a coin-flip random walk, explains the −σ²/2 term that surprises everyone, and shows what simulations can and cannot tell you.',
  nutshell: [
    'A **random walk** adds independent random steps. Scaling steps and time gives **Brownian motion** \\(W_t\\), with \\(W_t\\sim N(0,t)\\).',
    '**GBM**: \\(dS = \\mu S\\,dt + \\sigma S\\,dW\\). Its solution is \\(S_t = S_0\\exp\\{(\\mu-\\tfrac12\\sigma^2)t+\\sigma W_t\\}\\).',
    'The **typical** (median) path grows at \\(\\mu - \\sigma^2/2\\), below the **average** growth \\(\\mu\\): volatility drag.',
    '**Monte Carlo** simulates many paths; the error of an estimate shrinks only as \\(1/\\sqrt{N}\\).',
  ],
  sections: [
    {
      id: 'walk',
      title: 'From a coin flip to Brownian motion',
      lead: 'Why the square root appears.',
      blocks: [
        { t: 'p', text: 'Flip a coin every \\(\\Delta t\\): move up by \\(\\sqrt{\\Delta t}\\) on heads and down by the same on tails. After \\(n=t/\\Delta t\\) flips the position has mean 0 and variance \\(n\\cdot\\Delta t = t\\). As \\(\\Delta t\\to 0\\) the position becomes normally distributed with variance \\(t\\) (the central limit theorem). That limit is Brownian motion, a continuous path that is nowhere smooth.' },
        {
          t: 'math',
          tex: String.raw`W_0=0,\quad W_t-W_s\sim N(0,\,t-s),\quad \text{independent increments}`,
          caption: 'The defining properties of standard Brownian motion (a Wiener process).',
          where: [{ sym: 'W_t', def: 'the value of the process at time t' }],
          syntax: [
            { sym: 'N(0,\\,t-s)', say: 'a normal distribution with mean 0 and variance t−s. Effect: the standard deviation of a change grows as √(t−s). Why: each tiny step has variance Δt, and variances of independent steps add.' },
            { sym: '\\text{independent increments}', say: 'moves in non-overlapping intervals do not influence each other. Effect: no memory, so no pattern can predict the next move from the past path. This is the "random walk" claim.' },
          ],
          worked: {
            title: 'How far does it wander?',
            steps: ['Take Δt = 1 day and daily standard deviation 1%.', 'After 100 days, standard deviation \\(=1\\%\\sqrt{100} = 10\\%\\).', 'After 400 days: \\(1\\%\\sqrt{400}=20\\%\\).'],
            answer: 'Four times as long means only twice as far, so risk grows with the square root of time.',
          },
        },
      ],
    },
    {
      id: 'gbm',
      title: 'Geometric Brownian motion',
      lead: 'Make the changes proportional to the price.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`dS_t=\mu S_t\,dt+\sigma S_t\,dW_t\;\;\Longrightarrow\;\; S_t=S_0\exp\!\Big\{\big(\mu-\tfrac12\sigma^{2}\big)t+\sigma W_t\Big\}`,
          caption: 'The GBM stochastic differential equation and its solution.',
          where: [
            { sym: '\\mu', def: 'the drift: expected growth rate per year' },
            { sym: '\\sigma', def: 'the volatility: standard deviation of the annual log return' },
            { sym: 'dW_t', def: 'a Brownian increment: a normal random number with mean 0 and variance dt' },
          ],
          syntax: [
            { sym: '\\mu S\\,dt', say: 'the expected change: proportional to the price and to elapsed time. Effect: a drift of 8% adds about 8% a year on average.' },
            { sym: '\\sigma S\\,dW', say: 'the random shock, proportional to the price. Effect: the percentage volatility is constant, so a $200 stock moves twice as much in dollars as a $100 one. Why: returns, not dollar changes, are the thing that is stationary.' },
            { sym: '-\\tfrac12\\sigma^{2}', say: 'the Itô correction. Effect: it lowers the growth rate of the log price. Why: log is concave, so by Jensen’s inequality \\(E[\\ln S] < \\ln E[S]\\); the sums of random ups and downs lose more than they gain, the same effect as the +50%/−50% example.' },
            { sym: '\\exp\\{\\cdot\\}', say: 'the exponential keeps the price positive and makes it lognormal.' },
          ],
          worked: {
            title: 'The drag at 30% volatility',
            steps: ['Take μ = 8%, σ = 30%.', 'Median growth: \\(\\mu - \\sigma^2/2 = 0.08 - 0.045 = 3.5\\%\\) per year.', 'Mean growth is still 8%, because of the right tail of the lognormal.', 'After 30 years, median multiple \\(e^{0.035\\cdot 30}=2.9\\); mean multiple \\(e^{0.08\\cdot 30}=11.0\\).'],
            answer: 'A volatile stock’s typical outcome is far below its average, since a few extreme paths pull the mean up. Most investors do not get the mean.',
          },
        },
        { t: 'quant-viz', viz: 'gbm' },
        { t: 'callout', tone: 'warn', title: 'What GBM gets wrong', text: 'Constant volatility, independent normal returns, no jumps and no crashes. The model is a good first approximation for pricing and a poor description of extremes. That is why options show a volatility smile.' },
      ],
    },
    {
      id: 'mc',
      title: 'Monte Carlo simulation',
      lead: 'Use the solution to simulate.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`S_{t+\Delta t}=S_t\exp\!\Big\{\big(\mu-\tfrac12\sigma^{2}\big)\Delta t+\sigma\sqrt{\Delta t}\,Z\Big\},\quad Z\sim N(0,1),\qquad SE=\frac{s}{\sqrt{N}}`,
          caption: 'The exact one-step GBM update used in simulations, and the standard error of a Monte Carlo average.',
          where: [{ sym: 'Z', def: 'a standard normal random number, drawn fresh for each step and path' }, { sym: 'N,\\ s', def: 'the number of simulated paths and the sample standard deviation of the payoffs' }],
          syntax: [
            { sym: '\\sigma\\sqrt{\\Delta t}\\,Z', say: 'a normal shock with the right scale: standard deviation σ√Δt. Effect: replaces dW by an actual random number.' },
            { sym: 's/\\sqrt{N}', say: 'the uncertainty of the estimate. Effect: 100 times more paths gives only 10 times more accuracy. Why: this is the central limit theorem again; it is the cost of Monte Carlo.' },
          ],
          worked: {
            title: 'How many paths?',
            steps: ['A payoff has standard deviation s = 12 (dollars).', 'With N = 10,000 paths: SE = 12/100 = $0.12.', 'To reach $0.012 you need N = 1,000,000.'],
            answer: 'Accuracy of a cent costs a million paths; this motivates variance-reduction methods (see the pricing numerics guide).',
          },
        },
      ],
    },
  ],
  sources: [
    'Shreve, S. E. (2004). *Stochastic Calculus for Finance II: Continuous-Time Models*. Springer.',
    'Hull, J. C. (2022). *Options, Futures, and Other Derivatives* (11th ed.). Pearson.',
    'Glasserman, P. (2004). *Monte Carlo Methods in Financial Engineering*. Springer.',
    'Black, F. & Scholes, M. (1973). The pricing of options and corporate liabilities. *Journal of Political Economy*, 81(3).',
  ],
  related: ['finance/quant/returns-and-distributions', 'finance/quant/derivatives-numerics', 'finance/assets/options/pricing', 'finance/quant/risk-measures'],
}

export default guide
