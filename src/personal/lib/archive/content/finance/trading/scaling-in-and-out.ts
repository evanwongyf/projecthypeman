import type { Guide } from '../../../guide'
import { TRADE } from '../../../../finance/tradeExamples'

const guide: Guide = {
  intro:
    'A position does not have to be opened or closed in one step. Scaling in builds a position in parts, pyramiding adds to winners, averaging down adds to losers, and scaling out sells in parts. The arithmetic of average price and total risk is simple, and it shows why adding to winners and adding to losers are very different acts.',
  nutshell: [
    'The **average cost** is total cash divided by total shares; the stop for the *whole* position determines total risk.',
    '**Pyramiding** adds to a winner in smaller and smaller steps, with the stop moving up: the risk stays bounded while profit is on the table.',
    '**Averaging down** adds to a loser at a lower price. It lowers the average cost, raises the exposure, and turns a small loss into a large one if the trend continues.',
    'A **martingale** (doubling after each loss) has infinite expected size and a finite bankroll: it ends in ruin with probability one.',
  ],
  sections: [
    {
      id: 'average',
      title: 'Average price and total risk',
      lead: 'The numbers behind any position built in parts.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\bar{P} = \frac{\sum_i n_i P_i}{\sum_i n_i},\qquad \text{Risk} = \sum_i n_i\,(P_i - S)`,
          caption: 'The average entry price of a position built in parts, and its total risk to a common stop S.',
          where: [{ sym: 'n_i,\\ P_i', def: 'shares bought and the price paid in step i' }, { sym: 'S', def: 'the stop price for the whole position' }],
          syntax: [
            { sym: '\\sum n_i P_i', say: 'total cash spent. Dividing by total shares gives the average price. Effect: later, cheaper buys pull the average toward them in proportion to their size.' },
            { sym: 'n_i(P_i - S)', say: 'the loss on tranche i if price hits the stop. Effect: tranches bought far above the stop contribute more risk per share. Why: risk is measured from where you paid to where you get out.' },
          ],
          worked: {
            title: 'Building in three steps',
            steps: ['Buy 100 at 100, 60 at 106, 40 at 112. Stop for all: 98.', 'Cash: \\(10{,}000 + 6{,}360 + 4{,}480 = 20{,}840\\) for 200 shares, so \\(\\bar P = 104.2\\).', 'Risk to 98: \\(100(2) + 60(8) + 40(14) = 200 + 480 + 560 = \\$1{,}240\\).', 'If the stop is later raised to 104: the first 100 shares are risk-free (bought at 100) and the risk is \\(60(2) + 40(8) = \\$440\\).'],
            answer: 'The position has an average cost of 104.20 and $1,240 of risk to the original stop, falling as the stop is moved up.',
          },
        },
      ],
    },
    {
      id: 'pyramid',
      title: 'Pyramiding into winners',
      lead: 'Add only when the trade is already working.',
      blocks: [
        { t: 'p', text: 'Pyramiding adds to a position as it moves in your favour, usually with smaller size each time so the average price stays well below the current price. The Turtle rules added a unit for each 0.5 N of favourable movement, with the stop for all units moved 2 N below the latest entry.' },
        {
          t: 'candles',
          rows: TRADE.pyramid,
          title: 'A pyramid in three steps',
          lines: [{ y: 98, label: 'Initial stop 98' }],
          points: [
            { i: 4, label: 'Add 1: 100 sh', at: 'high' },
            { i: 14, label: 'Add 2: 60 sh', at: 'high' },
            { i: 26, label: 'Add 3: 40 sh', at: 'high' },
          ],
          caption: 'Each add comes after a pullback has held and price makes a new high. The position is largest when it is least profitable per share, and smallest when it is most extended.',
        },
        { t: 'callout', tone: 'tip', title: 'The rule that makes it safe', text: 'Never let the total risk of the pyramid exceed the risk you would have taken on a single trade. Raise the stop on every add so that the new tranche’s risk is paid for by the profit on the earlier ones.' },
      ],
    },
    {
      id: 'down',
      title: 'Averaging down and the martingale',
      lead: 'Why adding to a loser is a different thing.',
      blocks: [
        { t: 'p', text: 'Averaging down means buying more as price falls to lower the average cost. For an investor who has independently decided a business is worth more than the price, adding at a lower price can be rational. For a trader without a thesis, it is a way of increasing the bet precisely when the market is saying the trade is wrong.' },
        {
          t: 'table',
          head: ['Step', 'Price', 'Shares added', 'Total shares', 'Average cost', 'Loss at 70'],
          rows: [
            ['1', '100', '100', '100', '100.0', '−3,000'],
            ['2', '90', '200', '300', '93.3', '−7,000'],
            ['3', '80', '400', '700', '85.7', '−11,000'],
            ['4', '70', '800', '1,500', '77.3', '−11,000 (but exposure 1,500 sh)'],
          ],
          caption: 'Doubling the size at each 10-point drop. The average cost falls, but 1,500 shares at risk means each further 1-point drop now costs $1,500, versus $100 at the start.',
        },
        {
          t: 'math',
          tex: String.raw`P(\text{ruin}) = 1 - (1-q)^{k} ,\qquad \text{bet}_k = 2^{k}\,b_0`,
          caption: 'A martingale with a streak of k losses, each with probability q of a loss, and bets that double each time.',
          where: [{ sym: 'q', def: 'the chance a single bet loses' }, { sym: 'k', def: 'the longest losing streak the bankroll can fund' }],
          syntax: [{ sym: '2^{k} b_0', say: 'the size of the bet after k losses. Effect: it grows exponentially. Why: each bet must recover all previous losses plus one unit.' }],
          worked: {
            title: 'A bankroll of 1,023 units',
            steps: ['Start with a 1-unit bet, doubling after each loss: funds exactly 10 losses (1+2+4+…+512 = 1,023).', 'With q = 0.5, the chance of 10 losses in a row on a given run is \\(0.5^{10} = 0.098\\%\\).', 'After 1,000 such runs, the chance of at least one wipe-out is \\(1-(1-0.00098)^{1000} \\approx 62\\%\\).'],
            answer: 'Each run wins 1 unit 99.9% of the time and loses 1,023 the rest: a profile that looks great until the day it does not. Doubling cannot beat a negative-expectancy game, and it adds ruin risk to a positive one.',
          },
        },
      ],
    },
  ],
  sources: [
    'Faith, C. (2007). *Way of the Turtle*. McGraw-Hill.',
    'Vince, R. (1992). *The Mathematics of Money Management*. Wiley.',
    'Feller, W. (1968). *An Introduction to Probability Theory and Its Applications* (Vol. 1). Wiley.',
  ],
  related: ['finance/trading/sizing-and-ruin', 'finance/trading/exit-types', 'finance/frameworks/turtles', 'finance/trading/entry-types'],
}

export default guide
