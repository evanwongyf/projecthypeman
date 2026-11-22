import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Two questions come up for every investor with a sum of money: should it be invested all at once or spread over months (dollar-cost averaging), and, once invested, how often should the portfolio be brought back to its target mix (rebalancing)? Both have a clear arithmetic answer and a behavioural one. A lump sum has a higher expected return because it is invested for longer, but the monthly instalments reduce regret and the chance of investing just before a fall. Rebalancing does not raise expected returns much; its main job is to control risk, although in an oscillating market it can add a small bonus, the so-called rebalancing premium. This guide runs the simulation for the first question, works through the numbers of the second and sets out the practical rules.',
  nutshell: [
    '**Lump sum beats DCA about two times in three** when markets rise on average (Vanguard’s study of US, UK and Australian data found about 66%), because cash earns less than stocks.',
    '**DCA** reduces **regret** and the range of outcomes; it is a risk-management and behavioural tool, not a way to add return.',
    'When you **save from income** each month, you are doing DCA automatically; the decision only arises for a **windfall**.',
    '**Rebalancing** restores target weights; by calendar (yearly) or by **bands** (for example ±5 percentage points) works about equally well.',
    'In an oscillating market a rebalanced portfolio gains a little over buy-and-hold: in the worked example **+3.4%** after two years; in a trending market it may lag.',
  ],
  sections: [
    {
      id: 'dca',
      title: 'Lump sum versus dollar-cost averaging',
      lead: 'A simulation.',
      blocks: [
        { t: 'fin-lab', viz: 'dca-lump' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The arithmetic', tag: 'expected return', body: 'If expected stock returns exceed the cash return, the money that waits in cash earns less: on average, a lump sum is ahead by the cash’s opportunity cost.' },
            { title: 'The psychology', tag: 'regret', body: 'Investing a lump sum the day before a 20% fall is painful; DCA reduces the chance of the worst regret and makes the decision easier to start.' },
            { title: 'A compromise', tag: 'practical', body: 'Spread a windfall over 3 to 6 months, with a fixed schedule; the cost in expected return is small and the discipline is high.' },
            { title: 'When DCA wins', tag: 'falling markets', body: 'In a falling market DCA wins (the simulation’s negative-return setting shows it); no one knows beforehand which scenario will occur.' },
          ],
        },
      ],
    },
    {
      id: 'rebalance',
      title: 'Rebalancing',
      lead: 'Why, how often and what it earns.',
      blocks: [
        {
          t: 'example',
          title: 'A rebalancing example: two assets that oscillate',
          lines: [
            { label: 'Start', text: 'Asset A and B, S$100 each (a 50/50 portfolio, S$200).' },
            { label: 'Year 1', text: 'A rises 20% and B falls 16.7%: A = 120, B = 83.3; total 203.3.' },
            { label: 'Rebalance', text: 'Sell 18.3 of A and buy 18.3 of B: 101.7 each.' },
            { label: 'Year 2', text: 'A falls 16.7% and B rises 20%: A = 84.7, B = 122.0; total 206.7 (+3.4% on the start).' },
            { label: 'Buy and hold', text: 'A = 120 × 0.833 = 100 and B = 83.3 × 1.2 = 100: total 200 (0%).' },
          ],
        },
        {
          t: 'table',
          head: ['Method', 'Rule', 'Advantages', 'Disadvantages'],
          rows: [
            ['Calendar', 'Rebalance every 6 or 12 months', 'Simple; few trades', 'May let drift grow between dates'],
            ['Bands (threshold)', 'Rebalance when any asset is more than ±5 points from target', 'Responds to big moves; trades only when needed', 'Needs monitoring'],
            ['Cash-flow', 'Direct new contributions and withdrawals toward underweight assets', 'No selling, no tax', 'Slow if cash flows are small'],
            ['Never', 'Let the portfolio drift', 'No costs', 'Risk drifts upward as stocks outgrow bonds'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'What rebalancing is for', text: 'The main purpose is risk control: a portfolio left alone after a long bull market is more heavily in stocks than intended, and so more exposed to a crash. The return effect is small and depends on whether returns trend or oscillate; research (Vanguard, Bernstein and others) finds little difference between annual and more frequent rebalancing once costs and taxes are counted. Rebalance with bands, new cash and dividends first, and sell only when needed.' },
      ],
    },
  ],
  sources: [
    'Vanguard Research (2012, updated). *Dollar-cost averaging just means taking risk later*. vanguard.com.',
    'Bernstein, W. J. & Wilkinson, D. (1997). *Diversification, rebalancing, and the geometric mean frontier*. SSRN.',
    'Jaconetti, C. M., Kinniry, F. M. & Zilbering, Y. (2010). *Best practices for portfolio rebalancing*. Vanguard.',
    'Malkiel, B. G. (2019). *A Random Walk Down Wall Street*. W. W. Norton.',
  ],
  related: ['finance/investing-process/asset-allocation-in-practice', 'finance/foundations/risk-return', 'finance/quant/portfolio-theory'],
}

export default guide
