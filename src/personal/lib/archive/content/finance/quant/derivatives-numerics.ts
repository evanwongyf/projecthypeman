import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most derivatives have no closed-form price, so quants compute it numerically. The key insight is risk-neutral valuation: a price is the discounted expected payoff under a special probability measure. Trees, Monte Carlo and finite differences are three ways of evaluating that expectation. This guide builds a binomial tree, shows it converge to Black–Scholes, estimates a price by simulation with its error, and computes Greeks by bumping.',
  nutshell: [
    '**Risk-neutral valuation:** price = discounted expected payoff when the stock grows at the risk-free rate \\(r\\), not at its real-world drift.',
    'A **binomial tree** (Cox–Ross–Rubinstein) steps the stock up by \\(u=e^{\\sigma\\sqrt{\\Delta t}}\\) or down by \\(d=1/u\\); with more steps it converges to Black–Scholes.',
    '**Monte Carlo** averages simulated payoffs; the error falls as \\(1/\\sqrt{N}\\). It handles path-dependent payoffs; early exercise is harder.',
    'The **Greeks** can be estimated by bumping the input and re-pricing: \\(\\Delta\\approx[V(S+h)-V(S-h)]/2h\\).',
  ],
  sections: [
    {
      id: 'rn',
      title: 'Risk-neutral valuation',
      lead: 'Why the real-world drift drops out.',
      blocks: [
        { t: 'p', text: 'An option can be replicated by trading the stock and cash. Because the replicating portfolio has a cost that does not depend on anyone’s opinion of the stock’s expected return, neither does the option’s price. We may therefore pretend the world is risk-neutral, with every asset earning the risk-free rate, compute the expected payoff, and discount at \\(r\\).' },
        {
          t: 'math',
          tex: String.raw`V_0=e^{-rT}\,\mathbb{E}^{\mathbb Q}\big[\text{payoff}(S_T)\big],\qquad q=\frac{e^{r\Delta t}-d}{u-d}`,
          caption: 'The risk-neutral pricing formula and the risk-neutral probability of an up-move in a binomial tree.',
          where: [{ sym: '\\mathbb{Q}', def: 'the risk-neutral probability measure' }, { sym: 'u,\\ d', def: 'the up and down factors per step' }],
          syntax: [
            { sym: 'e^{-rT}', say: 'discounting at the risk-free rate over the life of the option. Effect: a payoff in a year is worth less today.' },
            { sym: '\\mathbb{E}^{\\mathbb Q}[\\cdot]', say: 'the average payoff using risk-neutral probabilities, not real-world ones. Effect: the price does not depend on μ. Why: replication makes the cost independent of expected return.' },
            { sym: 'q=(e^{r\\Delta t}-d)/(u-d)', say: 'the up-probability that makes the stock grow at exactly r on average. Effect: q is not a forecast. It is the number that makes \\(q u + (1-q) d = e^{r\\Delta t}\\).' },
          ],
          worked: {
            title: 'A one-step call',
            steps: ['S₀ = 100, K = 100, r = 5%, one step of one year, u = 1.2, d = 1/1.2 = 0.833.', 'q = (e^{0.05} − 0.833)/(1.2 − 0.833) = (1.0513 − 0.833)/0.3667 = 0.595.', 'Payoffs: up: 20, down: 0. \\(V_0 = e^{-0.05}(0.595 \\times 20) = 0.9512 \\times 11.9 = 11.32\\).'],
            answer: 'The call is worth about $11.32, whatever the real-world chance of the stock rising.',
          },
        },
      ],
    },
    {
      id: 'tree',
      title: 'Binomial tree to Black–Scholes',
      lead: 'Many steps, and a limit.',
      blocks: [
        { t: 'p', text: 'A tree with \\(n\\) steps has \\(n+1\\) final prices. Work backwards from the payoffs, at each node valuing \\(V = e^{-r\\Delta t}[qV_u + (1-q)V_d]\\). For an American option, replace \\(V\\) at each node by \\(\\max(V,\\text{exercise value})\\). As \\(n\\) increases, the European value converges to the Black–Scholes formula, with an error of order \\(1/n\\) that oscillates.' },
        { t: 'quant-viz', viz: 'binomial' },
        {
          t: 'math',
          tex: String.raw`C=S_0\,N(d_1)-K e^{-rT}N(d_2),\quad d_1=\frac{\ln(S_0/K)+(r+\tfrac12\sigma^2)T}{\sigma\sqrt T},\quad d_2=d_1-\sigma\sqrt T`,
          caption: 'The Black–Scholes price of a European call: the limit of the tree.',
          where: [{ sym: 'N(\\cdot)', def: 'the standard normal cumulative distribution function' }],
          syntax: [
            { sym: 'N(d_2)', say: 'the risk-neutral probability that the option finishes in the money. Effect: weights the strike payment. Why: you pay K only if exercised.' },
            { sym: 'N(d_1)', say: 'the option’s delta: the number of shares in the replicating portfolio. Effect: rises toward 1 as the option goes deep in the money.' },
            { sym: '\\sigma\\sqrt{T}', say: 'the standard deviation of the log price at expiry. Effect: it measures how wide the distribution of outcomes is.' },
          ],
          worked: {
            title: 'At the money, one year',
            steps: ['S₀ = K = 100, r = 5%, σ = 20%, T = 1.', '\\(d_1 = (0 + 0.05 + 0.02)/0.2 = 0.35\\); \\(d_2 = 0.15\\).', '\\(N(0.35)=0.6368\\), \\(N(0.15)=0.5596\\).', '\\(C = 100(0.6368) - 100 e^{-0.05}(0.5596) = 63.68 - 53.23 = 10.45\\).'],
            answer: 'The call costs $10.45. A 5-step tree gives about 9.9 to 10.9, a 500-step tree 10.44.',
          },
        },
      ],
    },
    {
      id: 'mc',
      title: 'Monte Carlo and the Greeks',
      lead: 'Simulate, average, bump.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\hat V=e^{-rT}\frac1N\sum_{i=1}^{N}\text{payoff}\big(S_T^{(i)}\big),\quad S_T^{(i)}=S_0\,e^{(r-\frac12\sigma^2)T+\sigma\sqrt T\,Z_i},\quad \Delta\approx\frac{\hat V(S_0+h)-\hat V(S_0-h)}{2h}`,
          caption: 'Monte Carlo pricing under the risk-neutral measure, and a central finite-difference estimate of delta.',
          where: [{ sym: 'Z_i', def: 'independent standard normal draws' }, { sym: 'h', def: 'a small bump in the stock price' }],
          syntax: [
            { sym: 'r-\\tfrac12\\sigma^2', say: 'the risk-neutral drift in the log price: the real-world μ replaced by r. Effect: the average of S_T is exactly S₀e^{rT}.' },
            { sym: '\\frac1N\\sum', say: 'the sample mean of payoffs. Effect: error shrinks as 1/√N.' },
            { sym: '[\\hat V(S+h)-\\hat V(S-h)]/2h', say: 'the slope of price against stock price. Effect: the central difference has error of order h² against order h for a one-sided bump. Use the same random numbers in both runs or the noise swamps the signal.' },
          ],
          worked: {
            title: 'Variance reduction by antithetic draws',
            steps: ['For each Z, also simulate with −Z (the mirror path).', 'The payoffs from Z and −Z are negatively correlated for a monotone payoff, so their average has lower variance than two independent draws.', 'Typical reduction for a call: 50% to 70% less variance for the same number of normal draws.'],
            answer: 'The same accuracy costs about half the computing time. Control variates (using a payoff with a known price) can do much better.',
          },
        },
        { t: 'callout', tone: 'note', title: 'Finite differences (PDE methods)', text: 'The Black–Scholes equation is a diffusion equation. Discretise price and time on a grid and step backwards from the payoff. This is the standard method for American options and barriers in one or two dimensions; Monte Carlo wins when there are many sources of risk.' },
      ],
    },
  ],
  sources: [
    'Cox, J. C., Ross, S. A. & Rubinstein, M. (1979). Option pricing: a simplified approach. *Journal of Financial Economics*, 7(3).',
    'Black, F. & Scholes, M. (1973). The pricing of options and corporate liabilities. *Journal of Political Economy*, 81(3).',
    'Glasserman, P. (2004). *Monte Carlo Methods in Financial Engineering*. Springer.',
    'Wilmott, P. (2006). *Paul Wilmott on Quantitative Finance* (2nd ed.). Wiley.',
  ],
  related: ['finance/assets/options/pricing', 'finance/assets/options/greeks', 'finance/quant/random-walks-and-gbm', 'finance/quant/risk-measures'],
}

export default guide
