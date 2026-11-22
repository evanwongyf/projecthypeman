import type { Guide } from '../../../guide'

const P = 0.55
const B = 1
const growth = (f: number) => P * Math.log(1 + B * f) + (1 - P) * Math.log(1 - f)

const guide: Guide = {
  intro:
    'Professional traders say they are in the risk management business. You can be wrong most of the time and still make money if losses are small and gains are larger, and you can be right most of the time and still go broke with one oversized loss. This guide covers the maths of staying in the game.',
  nutshell: [
    'Decide where you are wrong (the **stop**) before deciding how much to buy.',
    'Risk a small, fixed share of the account per trade, often **0.5–2%**.',
    'Measure results in **R**: multiples of the amount risked.',
    '**Expectancy** tells you whether a strategy makes money on average: \\(E = pW - (1-p)L\\).',
    'The **Kelly criterion** gives the growth-maximising bet size; most professionals use a fraction of it.',
    'Losses hurt more than they look: a 50% loss needs a 100% gain to recover.',
  ],
  sections: [
    {
      id: 'sizing',
      title: 'Position sizing',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\lfloor x \rfloor`, say: String.raw`Read "the floor of x": round down to the nearest whole number (you cannot buy 0.3 of a share here, and rounding up would exceed your risk).` },
            { sym: String.raw`A \times r`, say: String.raw`Account size times risk fraction: the dollar amount you are willing to lose.` },
            { sym: String.raw`|E - S|`, say: String.raw`Read "the absolute value of E minus S": the gap between entry and stop, always positive whether you are buying or short-selling.` },
          ],
          worked: {
            title: String.raw`Sizing a trade on a $35,000 account`,
            steps: [
              String.raw`Given: account \(A = \$35{,}000\), risk \(r = 0.75\% = 0.0075\), entry \(E = 128.40\), stop \(S = 123.90\).`,
              String.raw`Dollars at risk: \(35000 \times 0.0075 = \$262.50\).`,
              String.raw`Risk per share: \(|128.40 - 123.90| = \$4.50\).`,
              String.raw`Divide: \(262.50/4.50 = 58.33\), and rounding down gives \(58\) shares.`,
              String.raw`Check: cost \(58 \times 128.40 = \$7{,}447.20\); loss if stopped \(58 \times 4.50 = \$261.00\).`,
            ],
            answer: String.raw`Buy 58 shares; if the stop is hit you lose \(\$261\), just under the \(\$262.50\) budget (0.75% of the account).`,
          },
          tex: String.raw`\text{shares} = \left\lfloor\frac{A \times r}{|E - S|}\right\rfloor`,
          where: [
            { sym: 'A', def: 'Account size' },
            { sym: 'r', def: 'Share of the account you accept losing on this trade (e.g. 1% = 0.01)' },
            { sym: 'E, S', def: 'Entry price and stop-loss price' },
          ],
          caption: 'A wider stop means fewer shares, so the money at risk is the same either way.',
        },
        {
          t: 'example',
          title: 'Sizing a trade',
          lines: [
            { label: 'Account', text: '$20,000; risk 1% = $200' },
            { label: 'Plan', text: 'buy at $50, stop at $47: risk per share $3' },
            { label: 'Shares', text: '\\(\\lfloor 200/3 \\rfloor = 66\\) shares, worth $3,300' },
            { label: 'If stopped', text: 'lose \\(66 \\times 3 = \\$198\\): about 1%' },
          ],
        },
        { t: 'fin-tool', tool: 'position' },
      ],
    },
    {
      id: 'expectancy',
      title: 'R-multiples and expectancy',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\overline{W}`, say: String.raw`Read "W bar": the average win. A bar over a letter means the mean of that quantity.` },
            { sym: String.raw`(1-p)`, say: String.raw`Read "one minus p": the chance of not winning, i.e. the loss rate.` },
            { sym: String.raw`\cdot`, say: String.raw`A multiplication dot: p times the average win.` },
          ],
          worked: {
            title: String.raw`Expectancy of a trend-following system`,
            steps: [
              String.raw`Given: win rate \(p = 0.40\), average win \(\overline{W} = 2.5R\), average loss \(\overline{L} = 1R\).`,
              String.raw`Substitute: \(E = 0.40 \times 2.5 - (1 - 0.40) \times 1\).`,
              String.raw`Winning part: \(0.40 \times 2.5 = 1.00\). Losing part: \(0.60 \times 1 = 0.60\).`,
              String.raw`Subtract: \(E = 1.00 - 0.60 = +0.40R\).`,
              String.raw`Over 50 trades risking \(\$150\) each: \(0.40 \times 50 \times 150 = \$3{,}000\) expected profit (20 wins \(\times 2.5R = 50R\), minus 30 losses \(\times 1R = 30R\), gives \(+20R = \$3{,}000\)).`,
            ],
            answer: String.raw`\(E = +0.40R\): the system loses 60% of the time but still earns 40% of the amount risked per trade on average.`,
          },
          tex: String.raw`E = p\cdot\overline{W} - (1-p)\cdot\overline{L}`,
          where: [
            { sym: 'p', def: 'Win rate' },
            { sym: String.raw`\overline{W}, \overline{L}`, def: 'Average win and average loss, in R (multiples of the amount risked)' },
          ],
          caption: 'Positive E means the strategy makes money on average per trade.',
        },
        {
          t: 'metric',
          name: 'expectancy (E)',
          shows: 'The average amount a trading strategy makes or loses per trade, in units of R (multiples of what was risked), if you repeated it many times. It is the single number that determines whether a strategy is worth trading at all, and it depends on *both* how often you win and how big the wins are compared with the losses, neither one alone tells the story, as the table below shows.',
          eli5: 'A casino game where you win $1 eight times out of ten but lose $10 the other two times has a high win rate (80%) but is a terrible bet, you lose $20 for every $8 you win, on average. Expectancy is the number that catches exactly this trap: it multiplies win rate by average win size, and loss rate by average loss size, and nets them against each other.',
          higher: 'A more profitable strategy on average, positive expectancy that is larger means more profit per trade, over many trades, regardless of whether it comes from a high win rate with small wins, or a low win rate with large wins. A strategy with E = +0.4R will, over 100 trades risking $200 each, tend to make roughly $8,000, before costs.',
          lower: 'A less profitable (or losing) strategy, expectancy at or below zero means the strategy loses money (or breaks even before costs) over time, however good any individual trade might feel. No amount of good trade management or discipline can turn a negative-expectancy strategy profitable in the long run; the strategy itself must change.',
          typical: 'Professional trend-following systems often run expectancies in the +0.2R to +0.5R range with win rates well under 50%, relying on occasional large winners; the honest way to know your own expectancy is to track every trade in R, not to guess from memory.',
        },
        {
          t: 'table',
          head: ['Win rate', 'Average win', 'Average loss', 'Expectancy'],
          rows: [
            ['60%', '1R', '1R', '0.6 − 0.4 = **+0.2R**'],
            ['35%', '3R', '1R', '1.05 − 0.65 = **+0.4R**'],
            ['80%', '0.2R', '1R', '0.16 − 0.2 = **−0.04R**'],
          ],
          caption: 'A 35% win rate can beat 80%. What matters is how big the wins are compared with the losses.',
        },
        {
          t: 'math',
          syntax: [
            { sym: String.raw`p^{*}`, say: String.raw`Read "p star": the special value of p that makes expectancy exactly zero. The star marks "the optimal/critical one", it is not a power.` },
            { sym: String.raw`\overline{W}/\overline{L}`, say: String.raw`Read "average win over average loss": the reward-to-risk ratio.` },
          ],
          worked: {
            title: String.raw`Break-even win rates`,
            steps: [
              String.raw`Given a system with average win \(3R\) and average loss \(1R\), so \(\overline{W}/\overline{L} = 3\).`,
              String.raw`Substitute: \(p^{*} = 1/(1 + 3)\).`,
              String.raw`Evaluate: \(p^{*} = 1/4 = 25\%\).`,
              String.raw`Check: at \(p = 0.25\), \(E = 0.25 \times 3 - 0.75 \times 1 = 0.75 - 0.75 = 0\). At 1:1 the formula gives \(1/2 = 50\%\); at 2:1 it gives \(1/3 = 33\%\).`,
            ],
            answer: String.raw`With 3:1 winners to losers you only need to win 25% of trades to break even; anything above that makes money.`,
          },
          tex: String.raw`p^{*} = \frac{1}{1 + \overline{W}/\overline{L}}`,
          where: [
            { sym: 'p^*', def: 'The minimum win rate needed to break even (E = 0)' },
            { sym: String.raw`\overline{W}, \overline{L}`, def: 'Average win and average loss, in R' },
          ],
          caption: 'Break-even win rate for a given reward-to-risk ratio. With 2:1 reward to risk, you only need to win 1/3 of the time. Anything above p* on the same reward-to-risk ratio is profitable; this is why traders with big winners and small losers can have a losing-most-of-the-time strategy that still makes money overall.',
        },
      ],
    },
    {
      id: 'drawdown',
      title: 'The maths of losses',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\frac{d}{1 - d}`, say: String.raw`Read "d over one minus d": divide the loss by the share of the account you have left.` },
            { sym: String.raw`d = 0.5`, say: String.raw`Percentages become fractions here: a 50% loss is d = 0.5, and the answer is also a fraction (1 means a 100% gain).` },
          ],
          worked: {
            title: String.raw`Recovering from a 35% drawdown`,
            steps: [
              String.raw`Given: a \(\$10{,}000\) account suffers a loss of \(d = 0.35\).`,
              String.raw`Account after the loss: \(10000 \times (1 - 0.35) = \$6{,}500\).`,
              String.raw`Substitute: gain needed \(= 0.35/(1 - 0.35) = 0.35/0.65\).`,
              String.raw`Divide: \(0.35/0.65 = 0.538\), i.e. \(+53.8\%\).`,
              String.raw`Check: \(6500 \times 1.538 = \$10{,}000\).`,
            ],
            answer: String.raw`A 35% loss needs a 53.8% gain to get back to even.`,
          },
          tex: String.raw`\text{Gain needed to recover} = \frac{d}{1 - d}`,
          where: [{ sym: 'd', def: 'The loss, as a fraction (0.5 = a 50% drawdown)' }],
          caption: 'The curve is not symmetric, and that asymmetry is the whole lesson: small losses need only slightly larger gains to undo (a 10% loss needs an 11% gain), but as d approaches 1 the required gain explodes towards infinity, which is exactly why avoiding large losses matters so much more than capturing every gain.',
        },
        {
          t: 'plot',
          title: 'Gain needed to get back to where you started',
          x: [0, 0.8],
          y: [0, 4],
          xLabel: 'Loss (fraction of account)',
          yLabel: 'Gain needed (fraction)',
          curves: [{ f: (d: number) => d / (1 - d), label: 'd / (1 − d)' }],
          points: [
            { x: 0.1, y: 0.111, label: '−10% needs +11%' },
            { x: 0.5, y: 1, label: '−50% needs +100%' },
            { x: 0.75, y: 3, label: '−75% needs +300%' },
          ],
        },
      ],
    },
    {
      id: 'kelly',
      title: 'The Kelly criterion',
      blocks: [
        {
          t: 'p',
          text: 'Suppose a bet wins \\(b\\) times the stake with probability \\(p\\), and loses the stake otherwise (\\(q = 1 - p\\)). If you bet a fraction \\(f\\) of your wealth each time, the long-run growth rate of your wealth is:',
        },
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\ln`, say: String.raw`Read "natural log of" (ell-en): the log to base e. It turns multiplicative growth into additive, so averaging logs gives the average growth rate per bet.` },
            { sym: String.raw`g(f)`, say: String.raw`Read "g of f": the growth rate as a function of f. Feed in a bet size, get out growth per bet.` },
            { sym: String.raw`p\ln(1 + bf) + q\ln(1 - f)`, say: String.raw`A probability-weighted average: with probability p your wealth is multiplied by 1+bf, with probability q by 1−f. Take the log of each and weight by its probability.` },
          ],
          worked: {
            title: String.raw`Growth rate of a 55% coin flip at even money`,
            steps: [
              String.raw`Given: \(p = 0.55\), \(q = 0.45\), \(b = 1\) (even money).`,
              String.raw`Bet \(f = 0.05\): \(g = 0.55\ln 1.05 + 0.45\ln 0.95 = 0.55(0.04879) + 0.45(-0.05129) = 0.00375\).`,
              String.raw`Bet \(f = 0.10\): \(g = 0.55\ln 1.10 + 0.45\ln 0.90 = 0.55(0.09531) + 0.45(-0.10536) = 0.00501\).`,
              String.raw`Bet \(f = 0.20\): \(g = 0.55\ln 1.20 + 0.45\ln 0.80 = 0.55(0.18232) + 0.45(-0.22314) = -0.00014\).`,
            ],
            answer: String.raw`Growth per bet is about \(0.38\%\) at \(f=5\%\), \(0.50\%\) at \(f=10\%\) (the peak) and slightly negative at \(f=20\%\): betting too much destroys the edge.`,
          },
          tex: String.raw`g(f) = p\ln(1 + bf) + q\ln(1 - f)`,
          where: [
            { sym: 'f', def: 'Fraction of wealth bet each time' },
            { sym: 'p, q', def: 'Probability of winning and losing (q = 1 − p)' },
            { sym: 'b', def: 'Payout multiple on a win (win b times the stake)' },
          ],
          caption: 'Maximising the expected logarithm of wealth maximises long-run compound growth. g(f) is zero at f = 0, rises to a peak, then falls and turns negative for f too large (over-betting into ruin); small bets leave growth on the table. The peak, found below, is the one size that grows wealth fastest.',
        },
        {
          t: 'math',
          syntax: [
            { sym: String.raw`g'(f)`, say: String.raw`Read "g prime of f": the derivative, i.e. the slope of the growth curve at bet size f. At the top of the hill the slope is zero.` },
            { sym: String.raw`\Longrightarrow`, say: String.raw`Read "which implies" or "therefore": the right side follows from solving the left side.` },
            { sym: String.raw`f^{*}`, say: String.raw`Read "f star": the best value of f, the one that makes the slope zero.` },
            { sym: String.raw`= 0`, say: String.raw`Setting the derivative equal to zero is the instruction: find where the curve is flat, which is its maximum.` },
          ],
          worked: {
            title: String.raw`Kelly fraction for a 2-to-1 payout`,
            steps: [
              String.raw`Given: win probability \(p = 0.40\), loss probability \(q = 0.60\), payout \(b = 2\) (win twice the stake).`,
              String.raw`Substitute: \(f^{*} = (bp - q)/b = (2 \times 0.40 - 0.60)/2\).`,
              String.raw`Numerator: \(0.80 - 0.60 = 0.20\). Divide: \(0.20/2 = 0.10\).`,
              String.raw`Check the slope: \(g'(0.10) = \dfrac{0.40 \times 2}{1 + 2 \times 0.10} - \dfrac{0.60}{1 - 0.10} = \dfrac{0.8}{1.2} - \dfrac{0.6}{0.9} = 0.667 - 0.667 = 0\).`,
            ],
            answer: String.raw`Kelly says to bet 10% of wealth each time; a half-Kelly trader would bet 5%.`,
          },
          tex: String.raw`g'(f) = \frac{pb}{1 + bf} - \frac{q}{1 - f} = 0 \quad\Longrightarrow\quad f^{*} = \frac{bp - q}{b} = p - \frac{q}{b}`,
          where: [
            { sym: 'f^*', def: 'The Kelly fraction: wealth to bet each time' },
            { sym: 'p, q, b', def: 'Win probability, loss probability and payout multiple, as above' },
          ],
          caption: 'Setting the derivative to zero gives the Kelly fraction, see the metric below for how to read the number it produces.',
        },
        {
          t: 'metric',
          name: 'the Kelly fraction (f*)',
          shows: 'The fraction of your total wealth to bet (or invest) on a single opportunity in order to grow your wealth as fast as mathematically possible over the long run, given a real edge. It is not about maximising the return on any one bet, it is about maximising the *compound growth rate* across many bets, which turns out to require betting less than your edge alone might suggest.',
          eli5: 'If you knew a coin was biased to land heads 55% of the time, you wouldn\'t bet your entire life savings on one flip, a single bad run (even with a real edge) could wipe you out and leave nothing to bet with again. Kelly tells you the exact size that lets your money grow fastest over many flips, without ever risking total ruin from bad luck along the way.',
          higher: 'Betting (or investing) a larger fraction of your wealth per opportunity, appropriate when your edge is large, well-measured, and reliable. But f* is a knife-edge: going even modestly above the true Kelly fraction (easy to do, since your estimate of your own edge is never perfectly accurate) sharply increases the size of drawdowns and can turn a winning strategy into a losing one, as the growth curve above shows flattening to zero at 2× Kelly.',
          lower: 'Betting a smaller fraction, more conservative, smoother equity curve, slower compound growth if your edge estimate was accurate, but far more forgiving if your edge turns out to be smaller than you thought (which is the normal case in real markets, where edges are never known with certainty).',
          typical: 'Because real-world edges are always estimated with error, most professional traders and investors deliberately use a fraction of full Kelly, commonly half-Kelly or even a quarter-Kelly, which keeps a large share of the growth rate while cutting the size of drawdowns dramatically, a far more comfortable trade-off in practice.',
        },
        {
          t: 'plot',
          title: 'Growth rate for a 55% coin flip at even money',
          x: [0, 0.35],
          y: [-0.04, 0.008],
          xLabel: 'Fraction of wealth bet each time (f)',
          yLabel: 'Growth per bet, g(f)',
          curves: [{ f: growth, label: 'g(f)' }],
          points: [
            { x: 0.1, y: growth(0.1), label: 'Kelly f* = 0.10' },
            { x: 0.2, y: growth(0.2), label: '2× Kelly: growth ≈ 0' },
          ],
          caption: 'Betting more than Kelly increases risk and reduces growth; at twice Kelly, growth falls to about zero, and beyond that you go broke in the long run even with an edge.',
        },
        { t: 'callout', tone: 'fact', title: 'From Bell Labs to blackjack', text: 'John Kelly Jr. derived the formula in 1956 at Bell Labs while studying noise on long-distance phone lines. The mathematician Ed Thorp used it to bet in blackjack (after inventing card counting) and later to run one of the first quantitative hedge funds.' },
        { t: 'callout', tone: 'warn', title: 'Why most use half-Kelly or less', text: 'Real edges are uncertain. If you overestimate p, full Kelly overbets badly. Half-Kelly keeps about three-quarters of the growth with far smaller swings.' },
      ],
    },
  ],
  sources: [
    'Kelly, J. L., Jr. (1956). A new interpretation of information rate. *Bell System Technical Journal*, 35(4), 917–926.',
    'Thorp, E. O. (2006). The Kelly criterion in blackjack, sports betting, and the stock market. In S. A. Zenios & W. T. Ziemba (Eds.), *Handbook of Asset and Liability Management* (Vol. 1). Elsevier.',
    'Tharp, V. K. (2006). *Trade Your Way to Financial Freedom* (2nd ed.). McGraw-Hill.',
    'Poundstone, W. (2005). *Fortune’s Formula*. Hill and Wang.',
  ],
  related: ['finance/technical/volatility', 'finance/technical/evidence', 'finance/foundations/behavioural'],
}

export default guide
