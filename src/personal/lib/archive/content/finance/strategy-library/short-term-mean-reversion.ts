import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Over days, broad stock indexes have tended to bounce after sharp short-term falls, especially when the longer-term trend is up. Rules built on this, such as buying when the 2-day RSI is very low, have high win rates but small average gains, which makes them very sensitive to trading costs.',
  nutshell: [
    '**RSI(2) rule** (popularised by Larry Connors): if price is above its 200-day average and 2-day RSI < 10, buy; sell when price closes above its 5-day average.',
    'High win rate (often 65–75% in historical index tests), small gains per trade.',
    'Costs and slippage can erase the edge.',
    'Fails in crashes, when “oversold” becomes more oversold.',
  ],
  sections: [
    {
      id: 'expectancy',
      title: 'Expectancy and costs',
      blocks: [
        {
          t: 'math',
          tex: String.raw`E_{\text{net}} = p\,\bar W - (1 - p)\,\bar L - c, \qquad \text{Annual} \approx n \times E_{\text{net}}`,
          caption: 'Net expectancy per trade and an approximate annual figure from n trades a year.',
          plain: 'With many small trades, the edge per trade is small. Subtract the round-trip cost from every trade; multiply by the number of trades for a rough annual figure (ignoring compounding and overlapping positions).',
          where: [
            { sym: 'p', def: 'win rate' },
            { sym: String.raw`\bar W, \bar L`, def: 'average win and loss per trade' },
            { sym: 'c', def: 'round-trip cost' },
            { sym: 'n', def: 'trades per year' },
          ],
          syntax: [
            { sym: String.raw`E_{\text{net}}`, say: 'expected net return per trade' },
          ],
          worked: {
            title: 'An index RSI(2) system',
            steps: [
              'Win rate 70%, average win 1.2%, average loss 1.8%, 40 trades a year.',
              String.raw`Gross: \(0.7 \times 1.2 - 0.3 \times 1.8 = 0.84 - 0.54 = 0.30\%\).`,
              String.raw`Cost 0.10%: \(E_{\text{net}} = 0.20\%\); annual \(\approx 40 \times 0.20 = 8\%\).`,
              String.raw`Cost 0.30%: \(E_{\text{net}} = 0\); annual ≈ 0.`,
            ],
            why: [
              'illustrative backtest statistics',
              'gross edge per trade',
              'low-cost execution keeps most of it',
              'tripling costs wipes it out',
            ],
            answer: 'The strategy lives or dies on execution costs. Note also that average losses exceed average wins: a few bad trades in a crash can undo months of gains.',
          },
        },
      ],
    },
    {
      id: 'rules',
      title: 'Typical rules',
      blocks: [
        { t: 'table', head: ['Component', 'Rule'], rows: [
          ['Trend filter', 'Close above the 200-day moving average'],
          ['Entry', '2-day RSI below 10 (or close below the lower Bollinger Band)'],
          ['Exit', 'Close above the 5-day moving average, or RSI(2) above 70'],
          ['Risk control', 'Time stop (e.g. 10 days) and position sizing; many versions avoid fixed stops'],
        ] },
      ],
    },
  ],
  sources: [
    'Connors, L., & Alvarez, C. (2009). Short Term Trading Strategies That Work. TradingMarkets.',
    'Lo, A. W., & MacKinlay, A. C. (1990). When are contrarian profits due to stock market overreaction? Review of Financial Studies, 3(2), 175–205.',
  ],
  related: ['finance/technical/momentum', 'finance/trading/entry-types', 'finance/trading/risk-reward-and-expectancy'],
}

export default guide
