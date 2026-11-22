import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most of the difference between traders who survive and those who do not is not in the entries but in the process: a written plan, a position size that keeps any one loss small, a journal that turns experience into data, and the emotional discipline to follow the plan when the market is testing it. The arithmetic is unforgiving. A strategy that wins 40% of the time can be profitable if its winners are twice its losers, but it will have long losing streaks, and a trader who risks 5% per trade will not survive them. This guide sets out the plan, expectancy and the statistics of streaks (with a calculation that shows how often a long run of losses should be expected), the common psychological traps, the way regulators and academics describe retail results and a realistic path for learning in Singapore. It is an educational outline and not encouragement to trade with money you cannot afford to lose.',
  nutshell: [
    '**Expectancy** per trade, in units of risk (R): \\(E=pW-(1-p)L\\); a 40% win rate with 2R winners and 1R losers gives **+0.2R**, and **+0.1R** after a cost of 0.1R.',
    'Even a profitable system has **long losing streaks**: with a 40% win rate, the chance of at least one run of **8 losses in 100 trades is about 49%**, and of 10 losses about 20%.',
    'Risk **0.5% to 1%** of the account per trade; a risk of 5% turns a normal streak into a ruin.',
    'Psychological traps: **overtrading**, **revenge trading**, **moving stops**, **averaging down**, **FOMO** and the **disposition effect** (selling winners early and holding losers).',
    'Learn with a **written plan**, a **journal**, a **demo account for mechanics** and **small live size** for the emotions.',
  ],
  sections: [
    {
      id: 'plan',
      title: 'The written plan',
      lead: 'Decide before the market opens.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'The market and time frame you trade (for example EUR/USD and USD/JPY on the 4-hour chart)',
            'The setup: the exact conditions for an entry, written so that someone else could apply them',
            'The stop-loss rule and the target or exit rule',
            'Position size as a fraction of the account (risk per trade) and the maximum number of open trades',
            'Daily and weekly loss limits at which you stop trading',
            'Trading hours and the news you avoid',
            'A pre-trade checklist and a post-trade review',
            'What you will do after three losses in a row (for example reduce size and review)',
          ],
        },
        {
          t: 'math',
          tex: String.raw`E=pW-(1-p)L\ \ (\text{in }R),\qquad P(\text{run of }k\text{ losses})\approx 1-\big(1-q^{k}(1-q)\big)^{n},\quad q=1-p`,
          caption: 'Expectancy per trade, and an approximation to the chance of at least one run of k consecutive losses in n trades.',
          where: [{ sym: 'p', def: 'the win rate' }, { sym: 'W,\\ L', def: 'the average winner and loser, in multiples of the risk R' }, { sym: 'q', def: 'the loss rate 1 − p' }, { sym: 'n', def: 'the number of trades' }],
          syntax: [{ sym: 'q^{k}', say: 'the chance of k losses in a row starting at a given trade. Effect: it is small for one trade but is applied over many starting points. Why: long runs are rare at any one start but likely somewhere in a long sequence.' }],
          worked: {
            title: 'A 40% win rate with 2R winners and 1R losers',
            steps: ['Expectancy = 0.4 × 2 − 0.6 × 1 = +0.2R per trade; after a 0.1R cost per trade it is +0.1R.', 'Over 100 trades, the exact probability of at least one run of 8 consecutive losses is about 49%; of 10, about 20%; of 5, about 98%.', 'At 1% risk per trade, a run of 10 losses costs about 9.6% of the account; at 5%, it costs 40%.'],
            answer: 'A good system is not one without losing streaks; it is one in which the account survives them. Position size, not entry skill, decides whether a normal run of bad luck is an episode or the end.',
          },
        },
        {
          t: 'table',
          head: ['Risk per trade', 'After 5 losses in a row', 'After 10 losses in a row', 'Gain needed to recover from 10 losses'],
          rows: [
            ['0.5%', '−2.5%', '−4.9%', '+5.1%'],
            ['1%', '−4.9%', '−9.6%', '+10.6%'],
            ['2%', '−9.6%', '−18.3%', '+22.4%'],
            ['5%', '−22.6%', '−40.1%', '+67%'],
          ],
          caption: 'Compounded losses on a declining balance, ignoring costs.',
        },
      ],
    },
    {
      id: 'psych',
      title: 'The psychology',
      lead: 'The traps, and the habits against them.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Overtrading', tag: 'boredom and excitement', body: 'Taking trades outside the plan: more trades mean more spreads and more errors. Limit trades per day.' },
            { title: 'Revenge trading', tag: 'after a loss', body: 'Trying to win back a loss immediately with a bigger position: the quickest way to a large loss. Stop trading after a loss limit.' },
            { title: 'Moving the stop', tag: 'hope', body: 'Widening a stop to avoid a loss turns a small, planned loss into a large one. Place the stop before the trade and do not widen it.' },
            { title: 'Cutting winners, holding losers', tag: 'the disposition effect', body: 'Taking small profits early and holding losses leads to a payoff where average losses exceed average wins; track the average win and loss in the journal.' },
            { title: 'FOMO', tag: 'fear of missing out', body: 'Chasing a move after it has run; a plan with defined setups prevents most of it.' },
            { title: 'Overconfidence after wins', tag: 'size creep', body: 'Increasing size after a lucky streak; keep risk per trade fixed.' },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Keep a journal', body: 'For every trade record the setup, entry, stop, target, size, outcome in R, the reason for taking it and your state of mind.' },
            { title: 'Review weekly', body: 'Compute win rate, average win and loss, expectancy and the largest losing streak; look for rule breaks.' },
            { title: 'Separate process from outcome', body: 'Grade each trade on whether you followed the plan, not on whether it made money.' },
            { title: 'Reduce size after a drawdown', body: 'For example, halve the risk after a 10% drawdown until the equity recovers.' },
            { title: 'Take breaks', body: 'Stop after hitting the daily limit; step away after a large loss or win.' },
          ],
        },
      ],
    },
    {
      id: 'path',
      title: 'A realistic path in Singapore',
      lead: 'How to learn without getting hurt.',
      blocks: [
        {
          t: 'levels',
          caption: 'A sensible progression.',
          items: [
            { name: 'Learn the mechanics', body: 'Quotes, pips, orders, margin and the economic calendar; use a demo account to practise execution, not to judge profitability.' },
            { name: 'Write and test a plan', body: 'Define a simple rule set, test it over a long history including different regimes, and expect the live result to be worse than the back-test.' },
            { name: 'Trade small', body: 'Start with an amount you can lose entirely, at 0.25–0.5% risk per trade, and trade for months before drawing conclusions.' },
            { name: 'Judge by a large sample', body: 'Wait for at least 100 trades; compute expectancy and its uncertainty.' },
            { name: 'Decide honestly', body: 'If the live expectancy is not positive after costs, stop or change the approach; index funds are a sound alternative for most people.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Check who you are dealing with',
          text: 'In Singapore, capital markets services such as leveraged FX trading must be provided by a licensed or exempt firm: check the MAS Financial Institutions Directory and the Investor Alert List. Be wary of firms that promise returns, offer large bonuses, push you to deposit more or cannot explain how they make money from your trading; and of "signal sellers", courses and managed-account schemes that show only the winners.',
        },
      ],
    },
  ],
  sources: [
    'Tharp, V. K. (2006). *Trade Your Way to Financial Freedom*. McGraw-Hill (expectancy and R-multiples).',
    'Kahneman, D. & Tversky, A. (1979). Prospect theory. *Econometrica*, 47(2), 263–291; Shefrin, H. & Statman, M. (1985). The disposition to sell winners too early and ride losers too long. *Journal of Finance*, 40(3), 777–790.',
    'Chague, F., De-Losso, R. & Giovannetti, B. (2020). Day trading for a living? *SSRN* (few persistent profits among retail day traders).',
    'Monetary Authority of Singapore: Financial Institutions Directory and Investor Alert List (mas.gov.sg).',
  ],
  related: ['finance/frameworks/trading-plan', 'finance/trading/sizing-and-ruin', 'finance/forex/pips-lots-and-leverage'],
}

export default guide
