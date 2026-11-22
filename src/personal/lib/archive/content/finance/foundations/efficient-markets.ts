import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'If thousands of smart, well-paid people are all hunting for bargains, any obvious bargain should disappear almost instantly. That is the **efficient market hypothesis (EMH)**: prices already reflect available information. It matters for every other guide on this shelf, because if it were perfectly true, neither fundamental nor technical analysis could reliably beat the market.',
  nutshell: [
    '**Weak form**: past prices cannot predict future prices (bad news for technical analysis).',
    '**Semi-strong form**: prices reflect all public information (bad news for fundamental analysis).',
    '**Strong form**: prices reflect even private information (insider trading would not help; clearly false).',
    'Evidence: markets are hard to beat (most professional funds underperform their index over long periods), but there are persistent **anomalies**.',
    'The Grossman–Stiglitz paradox: if markets were perfectly efficient, nobody would bother to research, and they would stop being efficient.',
  ],
  sections: [
    {
      id: 'forms',
      title: 'The three forms',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Weak form', body: 'Prices reflect all past trading information. Charts and patterns cannot give an edge.' },
            { name: 'Semi-strong form', body: 'Prices reflect all public information. Reading annual reports cannot give an edge either.' },
            { name: 'Strong form', body: 'Prices reflect all information, public and private.' },
          ],
          caption: 'Each level includes the ones below it. Eugene Fama set out this classification in 1970.',
        },
        {
          t: 'math',
          tex: String.raw`P_{t+1} = P_t + \varepsilon_{t+1},\qquad E[\varepsilon_{t+1} \mid \text{information at } t] = 0`,
          syntax: [
            { sym: String.raw`P_{t+1}`, say: String.raw`Read "P sub t plus 1": the price one period after t. The subscript is a time label, not a multiplication.` },
            { sym: String.raw`\varepsilon_{t+1}`, say: String.raw`Read "epsilon sub t plus 1": the random shock (new, unforeseeable news) that arrives between t and t+1.` },
            { sym: String.raw`E[\varepsilon_{t+1} \mid \text{information at } t] = 0`, say: String.raw`Read "the expected value of epsilon, given everything known at time t, is zero". The vertical bar means "given that"; the average shock is zero, so you cannot predict which way it will go.` },
          ],
          worked: {
            steps: [
              String.raw`Given: a stock closes today at \(P_t = \$50.00\). Everything known today (charts, filings, forecasts) says the average shock is zero.`,
              String.raw`Forecast: \(E[P_{t+1}] = P_t + E[\varepsilon_{t+1}] = 50.00 + 0 = \$50.00\).`,
              String.raw`Tomorrow, unexpected news arrives and the shock turns out to be \(\varepsilon_{t+1} = +1.20\).`,
              String.raw`Substitute: \(P_{t+1} = 50.00 + 1.20 = \$51.20\).`,
              String.raw`Next period the process restarts from $51.20, not from $50.00: yesterday’s path adds no information about the next shock.`,
            ],
            answer: String.raw`The best forecast of tomorrow’s price is today’s price ($50.00), and the +$1.20 move was pure news nobody could have foreseen.`,
          },
          where: [
            { sym: 'P_t, P_{t+1}', def: 'Today’s and tomorrow’s price' },
            { sym: String.raw`\varepsilon_{t+1}`, def: 'Tomorrow’s price change: random and unpredictable from today’s vantage point' },
          ],
          caption: 'A random walk (more precisely, a martingale): tomorrow’s change is unpredictable from today’s information. New prices move only on new, unforeseeable news. Read it as a falsifiable claim rather than an equation to solve: if you could reliably predict the sign of ε from anything known today, a chart pattern, a ratio in a filing, that would itself be evidence the market was not (yet) efficient in that respect, which is exactly what the anomalies below are about.',
        },
        {
          t: 'p',
          text: 'The [pattern lab](@finance/candlesticks/reliability) and [indicator lab](@finance/technical/moving-averages) on this shelf run on exactly this kind of random walk, and patterns and crossovers still appear in it.',
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence says',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Hard to beat', body: 'S&P’s SPIVA reports consistently find that around 85–90% of actively managed US equity funds underperform their benchmark over 15 years, after fees.' },
            { title: 'Fast reactions', body: 'Prices respond to earnings announcements and news within seconds to minutes.' },
            { title: 'Anomalies', body: 'Momentum, value, small-company and quality effects have earned extra returns over long periods, though they come and go.' },
            { title: 'Bubbles', body: 'The dot-com bubble and the 2008 housing crash suggest prices can drift far from value for years.' },
          ],
        },
        {
          t: 'plot',
          title: 'How fees compound against active investors',
          x: [0, 30],
          y: [0, 8],
          xLabel: 'Years',
          yLabel: 'Growth of $1',
          curves: [
            { f: (t: number) => 1.07 ** t, label: 'Market return 7% − 0.1% index fund fee', from: 0, to: 30 },
            { f: (t: number) => 1.06 ** t, label: 'Same return − 1% active fee', dashed: true },
          ],
          caption: 'Before costs, active investors as a group earn the market return (they are the market). After costs, they must lag it. William Sharpe called this "the arithmetic of active management".',
        },
        { t: 'callout', tone: 'fact', title: 'Opposite views, same Nobel', text: 'In 2013 Eugene Fama (father of the efficient market hypothesis) and Robert Shiller (who argued markets are prone to bubbles) shared the Nobel prize in economics, along with Lars Peter Hansen.' },
        { t: 'callout', tone: 'fact', title: 'The $20 bill', text: 'An old joke: an economist walking with a friend sees a $20 bill on the pavement. "Don’t bother," he says, "if it were real, someone would have picked it up already." The EMH says bargains are rare, not impossible.' },
      ],
    },
    {
      id: 'implications',
      title: 'What it means for you',
      blocks: [
        {
          t: 'list',
          items: [
            'For most investors, low-cost diversified index funds are the hard-to-beat default.',
            'Any method that claims an edge should be tested carefully against that default, after all costs.',
            'Edges, where they exist, tend to be small, to need discipline and to disappear once widely known.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Fama, E. F. (1970). Efficient capital markets: A review of theory and empirical work. *The Journal of Finance*, 25(2), 383–417.',
    'Grossman, S. J., & Stiglitz, J. E. (1980). On the impossibility of informationally efficient markets. *The American Economic Review*, 70(3), 393–408.',
    'Sharpe, W. F. (1991). The arithmetic of active management. *Financial Analysts Journal*, 47(1), 7–9.',
    'Shiller, R. J. (2000). *Irrational Exuberance*. Princeton University Press.',
    'S&P Dow Jones Indices. (2024). *SPIVA U.S. Scorecard*.',
  ],
  related: ['finance/foundations/behavioural', 'finance/technical/evidence', 'finance/candlesticks/reliability'],
}

export default guide
