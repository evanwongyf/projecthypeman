import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Position size decides whether a strategy with an edge survives its bad stretches. Losses are asymmetric: a 50% drawdown needs a 100% gain to recover. This guide covers fixed-fractional and volatility sizing, drawdown arithmetic, the risk of ruin, and why simulating many possible paths is more honest than a single backtest.',
  nutshell: [
    '**Fixed-fractional** sizing risks a constant fraction \\(f\\) of current equity per trade, so losses shrink as the account does.',
    'Recovering from a drawdown of \\(d\\) needs a gain of \\(d/(1-d)\\): 10% → 11%, 30% → 43%, 50% → 100%, 80% → 400%.',
    'A positive edge does not protect an oversized account: with too large \\(f\\) the long-run growth rate is negative and ruin is nearly certain.',
    'Simulate: the **distribution of drawdowns** across many random orderings of your trades is far wider than the one path in the backtest.',
  ],
  sections: [
    {
      id: 'drawdown',
      title: 'Drawdown arithmetic',
      lead: 'Losses compound against you.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{gain to recover} = \frac{d}{1-d}`,
          caption: 'The percentage gain needed to return to the previous peak after a drawdown of d.',
          where: [{ sym: 'd', def: 'the drawdown as a fraction of the peak (0.30 for 30%)' }],
          syntax: [
            { sym: '1-d', say: 'what is left after the loss, as a fraction of the peak. Effect: shrinks as d grows. Why: you start the recovery from a smaller base.' },
            { sym: 'd/(1-d)', say: 'the gain, applied to the smaller base, that restores the original. Effect: blows up as d→1. Why: \\((1-d)(1+g)=1\\), solved for g.' },
          ],
          worked: {
            title: 'From 100,000 to 50,000',
            steps: ['d = 0.5, so the account has $50,000.', 'Needed gain: \\(0.5/0.5 = 100\\%\\), to $100,000.', 'At a steady 10% a year, that takes \\(\\ln 2/\\ln 1.1 \\approx 7.3\\) years.'],
            answer: 'A 50% loss takes a 100% gain, about seven years at 10% a year.',
          },
        },
        {
          t: 'plot',
          title: 'Gain needed to recover a drawdown',
          x: [0, 0.8],
          y: [0, 4],
          xLabel: 'drawdown d',
          yLabel: 'gain needed',
          curves: [{ f: (d) => d / (1 - d), label: 'd/(1−d)' }],
          points: [{ x: 0.1, y: 0.111, label: '10% → 11%' }, { x: 0.5, y: 1, label: '50% → 100%' }, { x: 0.8, y: 4, label: '80% → 400%' }],
          caption: 'The curve is gentle at first and then vertical. The practical lesson is to avoid large drawdowns rather than to plan on recovering from them.',
        },
      ],
    },
    {
      id: 'sizing',
      title: 'Fixed-fractional and volatility sizing',
      lead: 'Deciding how much to risk.',
      blocks: [
        { t: 'p', text: 'In **fixed-fractional** sizing, each trade risks the same fraction \\(f\\) of the current account (commonly 0.5% to 2%). The number of shares is that cash amount divided by the per-share risk (entry to stop). Because \\(f\\) applies to current equity, position sizes shrink after losses and grow after wins, and the account can never reach exactly zero, only approach it.' },
        {
          t: 'math',
          tex: String.raw`E_n = E_0\,(1+fR_1)(1+fR_2)\cdots(1+fR_n)`,
          caption: 'Equity after n trades when each risks a fraction f of the account and returns R_i times that risk.',
          where: [{ sym: 'E_0,\\ E_n', def: 'starting equity and equity after n trades' }, { sym: 'R_i', def: 'the result of trade i in R (−1 for a full stop-out)' }],
          syntax: [
            { sym: '1 + f R_i', say: 'the growth factor for one trade. Effect: a loss of 1R at f = 2% multiplies equity by 0.98. Why: the amount risked is a fraction f of equity, and R is the multiple of it won or lost.' },
            { sym: '\\prod', say: 'trades multiply, not add. Effect: order does not change the final value but does change the drawdown on the way. Why: each result applies to the account as it stands.' },
          ],
          worked: {
            title: 'Ten trades at 1% risk',
            steps: ['Results in R: +2, −1, −1, +2, −1, −1, −1, +2, +2, −1 (4 wins, 6 losses; expectancy +0.2R).', 'Multiply the factors: \\(1.02^4 \\times 0.99^6 = 1.0824 \\times 0.9415 = 1.019\\).', 'Equity grows 1.9% on a strategy that lost 6 of 10 trades.'],
            answer: 'At 1% risk, even 6 losses in 10 leave a small profit. At 10% risk the same sequence gives \\(1.2^4 \\times 0.9^6 = 1.10\\) but with a swing down to about 0.62 along the way.',
          },
        },
        { t: 'p', text: '**Volatility sizing** sets the stop distance with ATR (see the exits guide), so more volatile markets get smaller positions and every trade carries the same expected dollar risk. It makes a portfolio of different markets comparable.' },
      ],
    },
    {
      id: 'ruin',
      title: 'Risk of ruin and simulation',
      lead: 'Paths, not averages.',
      blocks: [
        { t: 'p', text: 'A backtest shows one ordering of trades. The same trades in a different order give the same final profit but a different worst drawdown. To see the range, resample the trade list at random (a Monte Carlo test) and look at the distribution of maximum drawdown and ending equity.' },
        { t: 'quant-viz', viz: 'trade-sim' },
        {
          t: 'math',
          tex: String.raw`\text{Risk of ruin} \approx \left(\frac{1-a}{1+a}\right)^{U},\qquad a = \text{edge per unit risked}`,
          caption: 'A classic approximation for even-money bets: the chance of losing U units of risk before the edge pays off.',
          where: [{ sym: 'a', def: 'the edge: expected gain per trade as a fraction of the amount risked' }, { sym: 'U', def: 'the number of units of risk in the account (1/f)' }],
          syntax: [
            { sym: '\\dfrac{1-a}{1+a}', say: 'the ratio of the chance of a loss to a win in the walk. Effect: it is below 1 only when there is an edge (a > 0). Why: it is the odds against drifting toward ruin on each step.' },
            { sym: 'U', say: 'the number of "lives". Effect: the exponent makes ruin fall quickly as you risk less per trade. Why: you need U net losses in a row to be wiped out.' },
          ],
          worked: {
            title: 'Edge of 10%',
            steps: ['a = 0.10. The base is \\(0.9/1.1 = 0.818\\).', 'Risking 10% per trade means U = 10: ruin ≈ \\(0.818^{10} = 13\\%\\).', 'Risking 2% (U = 50): \\(0.818^{50} \\approx 0.004\\%\\).'],
            answer: 'The same strategy has a 13% chance of ruin at 10% risk per trade and almost none at 2%. Size, not signal, is what protects you.',
          },
        },
        { t: 'callout', tone: 'warn', title: 'What the formula assumes', text: 'It assumes independent trades, a constant edge, and that you know the edge. Real edges are estimated with error, drift over time, and trades cluster in correlated losses, so treat the formula as a lower bound on risk.' },
      ],
    },
  ],
  sources: [
    'Vince, R. (1992). *The Mathematics of Money Management*. Wiley.',
    'Thorp, E. O. (2006). The Kelly criterion in blackjack, sports betting and the stock market. In *Handbook of Asset and Liability Management*. Elsevier.',
    'Magdon-Ismail, M. & Atiya, A. (2004). Maximum drawdown. *Risk*, 17(10).',
  ],
  related: ['finance/trading/risk-reward-and-expectancy', 'finance/trading/scaling-in-and-out', 'finance/technical/risk-management', 'finance/quant/risk-measures'],
}

export default guide
