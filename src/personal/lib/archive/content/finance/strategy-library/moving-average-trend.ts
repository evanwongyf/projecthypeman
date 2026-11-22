import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The simplest trend-following rule: own the market when its price is above its long-term moving average, hold cash (or bonds) when it is below. Variants use crossovers of two averages. Historically such rules have reduced the worst drawdowns at the cost of lagging in choppy markets and some lost return.',
  nutshell: [
    '**Rule**: at each month-end, hold the index if price > 10-month (≈200-day) average; otherwise hold T-bills.',
    'Faber (2007) found this lowered volatility and drawdowns for several asset classes with similar long-run returns before costs.',
    '**Whipsaws**: in sideways markets the rule buys high and sells low repeatedly.',
    'Works best on broad, trending assets; check costs and taxes.',
  ],
  sections: [
    {
      id: 'rules',
      title: 'Rules',
      blocks: [
        { t: 'steps', items: [
          { title: 'Signal', body: 'At month-end, compute the 10-month simple moving average of the index’s total return series.' },
          { title: 'Position', body: 'If price is above the average, be invested; if below, move to T-bills or short-term bonds.' },
          { title: 'Execution', body: 'Trade at the next open or month-end close; check signals only monthly to reduce whipsaws.' },
          { title: 'Variant', body: 'Golden cross: long when the 50-day average is above the 200-day average.' },
        ] },
      ],
    },
    {
      id: 'maths',
      title: 'The trade arithmetic',
      blocks: [
        {
          t: 'math',
          tex: String.raw`E[\text{trade}] = p_W\,\bar W - (1 - p_W)\,\bar L - c`,
          caption: 'Expected return per trend trade: win rate × average win − loss rate × average loss − round-trip cost.',
          plain: 'Trend-following trades lose more often than they win, but the winners (long trends) are much bigger than the losers (whipsaws cut quickly). The strategy works only if this expectancy is positive after costs.',
          where: [
            { sym: String.raw`p_W`, def: 'share of trades that win' },
            { sym: String.raw`\bar W, \bar L`, def: 'average win and average loss' },
            { sym: 'c', def: 'round-trip cost per trade' },
          ],
          syntax: [
            { sym: 'E[·]', say: '“the expected value of”' },
          ],
          worked: {
            title: 'A trend rule on an equity index',
            steps: [
              'Win rate 35%, average win 12%, average loss 3%, cost 0.2%.',
              String.raw`\(0.35 \times 12 = 4.20\); \(0.65 \times 3 = 1.95\).`,
              String.raw`\(E = 4.20 - 1.95 - 0.2 = 2.05\%\) per trade.`,
              'In a choppy decade, average win falls to 6%: \(2.10 - 1.95 - 0.2 = -0.05\%\): roughly break-even.',
            ],
            why: [
              'illustrative trade statistics',
              'win and loss contributions',
              'subtract costs',
              'without long trends, the edge disappears',
            ],
            answer: 'About +2% per trade in trending markets, near zero in choppy ones. Its main value is avoiding long bear markets, not beating the market every year.',
          },
        },
      ],
    },
  ],
  sources: [
    'Faber, M. T. (2007). A quantitative approach to tactical asset allocation. Journal of Wealth Management, 9(4), 69–79.',
    'Brock, W., Lakonishok, J., & LeBaron, B. (1992). Simple technical trading rules and the stochastic properties of stock returns. Journal of Finance, 47(5), 1731–1764.',
  ],
  related: ['finance/technical/moving-averages', 'finance/philosophies/trend-following', 'finance/strategy-library/dual-momentum'],
}

export default guide
