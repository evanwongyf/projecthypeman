import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A trading plan is your rulebook, written before money is at risk, when you are calm. It defines what you trade, when you enter and exit, how much you risk and how you review results. Most trading losses come from abandoning rules in the moment; a written plan and a journal are the defence.',
  nutshell: [
    'Write rules for **markets, setups, entries, exits, position size and risk limits**.',
    'Keep a **journal** of every trade, including your reasoning and emotions.',
    'Review with numbers: win rate, payoff ratio, expectancy, drawdown.',
    'Change rules only after review, never during a trade.',
  ],
  sections: [
    {
      id: 'template',
      title: 'A plan template',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Goal and time commitment (and what money is genuinely risk capital)',
            'Markets and timeframes I trade',
            'My setups, described precisely enough for someone else to follow',
            'Entry trigger',
            'Initial stop placement and why',
            'Exit rules: target, trailing stop, time stop',
            'Position size: risk per trade as % of the account',
            'Daily, weekly and monthly loss limits (when I stop trading)',
            'Maximum number of open positions and total risk',
            'Review routine: when and how',
          ],
        },
      ],
    },
    {
      id: 'metrics',
      title: 'Measuring your results',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Win rate } p = \frac{\#\text{wins}}{\#\text{trades}},\qquad \text{Payoff ratio} = \frac{\overline{W}}{\overline{L}},\qquad E = p\,\overline{W} - (1 - p)\,\overline{L}`,
          where: [
            { sym: 'p', def: 'Win rate: the fraction of trades that are profitable' },
            { sym: String.raw`\overline{W}, \overline{L}`, def: 'Average size of a winning trade and a losing trade' },
            { sym: 'E', def: 'Expectancy: the average result per trade' },
          ],
          syntax: [
            { sym: String.raw`\#`, say: 'Read "the number of". It counts items, so #wins is how many trades were winners.' },
            { sym: String.raw`\overline{W},\ \overline{L}`, say: 'Read "W bar" and "L bar". The bar means average: the average winning trade and the average losing trade, each as a positive amount.' },
            { sym: '(1 - p)', say: 'Read "one minus p". The loss rate: if you win 44% of the time you lose 56% of the time.' },
          ],
          worked: {
            title: 'A 50-trade sample',
            steps: [
              'Given: 22 winners with an average gain of 450, and 28 losers with an average loss of 200.',
              String.raw`Win rate: \(p = 22/50 = 0.44\). Payoff ratio: \(450/200 = 2.25\).`,
              String.raw`Expectancy: \(E = 0.44 \times 450 - 0.56 \times 200 = 198 - 112 = 86\) per trade.`,
              String.raw`In R terms (1R = 200): \(86/200 = 0.43R\) per trade.`,
            ],
            answer: 'The system wins less than half the time but earns 86 per trade (0.43R), a positive edge.',
          },
          caption: 'Expectancy is the single number that tells you whether a system has an edge at all: it is what you should expect to make, on average, every time you put on a trade, combining how often you win with how much you win or lose when you do. A positive E means the system makes money over many trades even if it loses more often than it wins; a negative E means it loses money even if it wins most of the time, because the losses are too large relative to the wins.',
        },
        {
          t: 'metric',
          name: 'expectancy (E)',
          shows: 'the average outcome of one trade under this system, usually expressed in R (multiples of the amount risked) so it is comparable across different trade sizes and markets. It is the number that answers "does this system actually work?", separate from how it feels trade to trade.',
          eli5: 'Imagine a loaded coin you can flip as many times as you like. Expectancy is the average amount you win (or lose) per flip, once you know the odds and the payout. A system can lose the coin flip most of the time and still have positive expectancy, if the rare wins are big enough.',
          higher: 'A strongly positive expectancy (well above 0, often quoted in R, e.g. +0.3R or more per trade) means the edge is real and should compound nicely across many trades, but only if position sizing and discipline do not break down during a losing streak, which positive expectancy does not prevent, only makes recoverable.',
          lower: 'An expectancy at or below zero means the system loses money on average however good any single trade felt, more trades just lose money faster. A string of wins cannot be trusted as proof of an edge if the underlying expectancy, measured over enough trades, is flat or negative.',
          typical: 'Many systematic traders aim for expectancy somewhere in the 0.2R–0.5R range; a trend-following system might combine a low win rate (35–45%) with a payoff ratio of 2–3 to land in that zone, while a mean-reversion system might combine a high win rate (60–70%+) with a payoff ratio below 1.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Profit factor} = \frac{\sum \text{gains}}{\sum |\text{losses}|},\qquad \text{Max drawdown} = \max_t\left(1 - \frac{V_t}{\max_{s \le t} V_s}\right)`,
          where: [{ sym: 'V_t', def: 'Account (or equity) value at time t' }],
          syntax: [
            { sym: String.raw`\sum |\text{losses}|`, say: 'Read "the sum of the absolute losses". Make each loss a positive number, then add them all up.' },
            { sym: String.raw`\max_t`, say: 'Read "the maximum over t". Work out the quantity for every date t, then keep the largest one.' },
            { sym: String.raw`\max_{s \le t} V_s`, say: 'Read "the highest value so far". For each date, look back over every earlier date s (up to and including t) and take the peak equity.' },
          ],
          worked: {
            title: 'Profit factor and drawdown',
            steps: [
              String.raw`Profit factor, using the 50-trade sample: gains \(22 \times 450 = 9{,}900\), losses \(28 \times 200 = 5{,}600\).`,
              String.raw`\(9{,}900/5{,}600 \approx 1.77\).`,
              'Drawdown: equity at successive points is 10,000, 12,000, 9,600, 11,000, 13,000, 10,920.',
              String.raw`At 9,600 the peak so far is 12,000: \(1 - 9{,}600/12{,}000 = 20\%\).`,
              String.raw`At 10,920 the peak is 13,000: \(1 - 10{,}920/13{,}000 = 16\%\). The maximum is 20\%.`,
            ],
            answer: 'The system makes 1.77 for every 1 lost, but at its worst the account fell 20% from a peak, which is the pain you must be able to sit through.',
          },
          caption: 'A profit factor above 1 means the system made money overall: 2.0 means it made $2 for every $1 it lost, and most traders treat anything persistently below 1.3–1.5 as too thin to survive real-world costs and bad luck. Max drawdown is the worst peak-to-trough fall the equity curve has ever suffered, the number that matters most for whether you can actually stick with the system, since a strategy with great long-run expectancy but a 50% drawdown along the way will tempt almost anyone to quit right before it recovers.',
        },
        {
          t: 'table',
          head: ['Journal field', 'Example'],
          rows: [
            ['Date, market, direction', '12 Mar, gold futures, long'],
            ['Setup and reason', 'Breakout above 20-day high with rising volume'],
            ['Entry, stop, target, size', '2,350 / 2,320 / 2,410 / 2 contracts (1% risk)'],
            ['Result in R', '+1.6R'],
            ['Followed the plan?', 'Yes, but moved stop early'],
            ['Emotion and lesson', 'Nervous after two losses; trust the stop'],
          ],
        },
      ],
    },
    {
      id: 'maxims',
      title: 'Famous trading maxims',
      blocks: [
        { t: 'quote', text: 'There is nothing new in Wall Street. There can’t be because speculation is as old as the hills. Whatever happens in the stock market today has happened before and will happen again.', by: 'Edwin Lefèvre, Reminiscences of a Stock Operator (1923), based on Jesse Livermore' },
        {
          t: 'list',
          items: [
            '"Cut your losses short and let your profits run." (attributed to David Ricardo, 1800s)',
            '"The market can remain irrational longer than you can remain solvent." (attributed to John Maynard Keynes)',
            '"Plan the trade and trade the plan."',
            '"Never average a losing position." (a Livermore rule)',
            '"Risk comes from not knowing what you’re doing." (Warren Buffett)',
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Livermore’s fortunes', text: 'Jesse Livermore reportedly made about $100 million by shorting the market in the 1929 crash, an enormous sum then. He also went broke several times, often after breaking his own rules.' },
      ],
    },
  ],
  sources: ['Lefèvre, E. (1923). *Reminiscences of a Stock Operator*. George H. Doran.', 'Tharp, V. K. (2006). *Trade Your Way to Financial Freedom* (2nd ed.). McGraw-Hill.', 'Douglas, M. (2000). *Trading in the Zone*. Prentice Hall.'],
  related: ['finance/technical/risk-management', 'finance/frameworks/elder', 'finance/foundations/behavioural'],
}

export default guide
