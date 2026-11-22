import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'A futures price is not a forecast. It is pinned to today’s spot price by arbitrage: the cost of buying the asset now and holding ("carrying") it until delivery. That gives the **cost-of-carry** formula, and explains why futures curves slope up (contango) or down (backwardation).',
  nutshell: [
    'Fair value: \\(F_0 = S_0 e^{(r + u - q)T}\\).',
    'Carrying costs (interest \\(r\\), storage \\(u\\)) push futures above spot; income or convenience (\\(q\\)) pulls them below.',
    'The **basis** is spot minus futures; it shrinks to zero at expiry (**convergence**).',
    '**Contango**: futures above spot. **Backwardation**: futures below spot.',
  ],
  sections: [
    {
      id: 'carry',
      title: 'Cost of carry, by arbitrage',
      blocks: [
        {
          t: 'math',
          tex: String.raw`F_0 = S_0\,e^{(r + u - q)T}`,
          where: [
            { sym: 'S_0', def: 'Spot price today' },
            { sym: 'r', def: 'Risk-free interest rate' },
            { sym: 'u', def: 'Storage cost (as a yield)' },
            { sym: 'q', def: 'Income from holding the asset (dividends) or convenience yield' },
            { sym: 'T', def: 'Time to delivery in years' },
          ],
          syntax: [
            { sym: String.raw`e^{(r + u - q)T}`, say: String.raw`Read “e to the r plus u minus q, all times T”. The brackets mean work out the net carry rate first, multiply by the years, then raise \(e\) (about 2.718) to that power: continuous compounding.` },
            { sym: String.raw`F_0,\ S_0`, say: String.raw`Read “F zero” and “S zero”. The subscript 0 means “at time zero, today”: \(F_0\) is today’s fair futures price for delivery at \(T\) and \(S_0\) is today’s spot price.` },
          ],
          worked: {
            title: 'Fair price of a six-month gold future',
            steps: [
              String.raw`Given: spot \(S_0 = 2{,}000\), \(r = 4.5\%\), storage \(u = 0.5\%\), \(q = 0\) (gold pays no income), \(T = 0.5\).`,
              String.raw`Net carry rate: \(r + u - q = 0.045 + 0.005 - 0 = 0.05\).`,
              String.raw`Exponent: \(0.05 \times 0.5 = 0.025\), so \(e^{0.025} = 1.02532\).`,
              String.raw`Fair futures price: \(F_0 = 2000 \times 1.02532 = 2{,}050.63\).`,
              String.raw`Basis: spot minus futures \(= 2000 - 2050.63 = -50.63\).`,
            ],
            answer: String.raw`The six-month future should trade at 2,050.63, a 2.53% premium that is pure cost of carry and a contango curve in miniature.`,
          },
          caption: 'Read the exponent as a tug of war: carrying costs (r and u) push the fair futures price above spot, while income or convenience (q) pulls it back down. Whichever side wins the net rate (r + u − q) sets whether the curve is in contango (positive, futures above spot) or backwardation (negative, futures below spot), explored just below.',
        },
        {
          t: 'steps',
          items: [
            { title: 'If futures are too expensive (F > fair)', body: 'Borrow money, buy the asset, sell the future. At delivery, hand over the asset at the high futures price and repay the loan: a risk-free profit (cash-and-carry arbitrage).' },
            { title: 'If futures are too cheap (F < fair)', body: 'Short the asset, invest the proceeds, buy the future. At delivery, take the asset to close the short: a risk-free profit (reverse cash-and-carry).' },
            { title: 'So', body: 'Arbitrageurs keep the futures price at fair value, within the bounds set by trading costs.' },
          ],
        },
        {
          t: 'example',
          title: 'An index future',
          lines: [
            { label: 'Data', text: 'index 5,000; interest 4.5%; dividend yield 1.5%; 90 days' },
            { label: 'Fair value', text: '\\(5000\\,e^{(0.045 - 0.015)(90/365)} = 5000\\,e^{0.0074} \\approx 5{,}037\\)' },
            { label: 'Basis', text: '\\(5000 - 5037 = -37\\) points' },
          ],
        },
        {
          t: 'metric',
          name: 'the basis (spot − futures)',
          shows: 'How far apart the futures price is trading from today\'s spot price, a gap driven almost entirely by the cost of carry (interest to finance holding the asset, storage costs, income or convenience from holding it now) rather than by anyone\'s forecast of where the price is headed. The basis always shrinks to exactly zero at delivery, since an expiring future and the spot asset become the same thing.',
          eli5: 'Imagine you can either buy a bag of rice today, or sign a contract to buy the same bag in three months. The futures price (the contract) differs from today\'s price mostly because of the cost of waiting, the interest you could have earned on your cash, the cost of storing rice for three months, or the inconvenience of not having rice on hand right now. The basis is simply that waiting-cost gap.',
          higher: 'A larger negative basis (futures well above spot, contango) means the market is pricing in substantial carrying costs: high interest rates, high storage costs, or low income/convenience from holding the asset now, relative to holding the future. This is the normal state for assets like gold or broad stock indices, where storage is cheap or dividends are modest.',
          lower: 'A larger positive basis (futures below spot, backwardation) means holding the physical asset right now is unusually valuable, typically a sign of tight current supply (oil during a shortage, agricultural goods right before harvest), where the "convenience yield" of having the real thing in hand outweighs the cost of carrying it.',
          typical: 'The basis for any individual contract shrinks steadily and predictably towards zero as delivery approaches (convergence); a basis that unexpectedly widens or fails to converge as expiry nears is rare and usually signals a problem, a supply squeeze, a delivery issue, or a breakdown in the arbitrage that normally keeps futures pinned to fair value.',
        },
      ],
    },
    {
      id: 'curve',
      title: 'Contango, backwardation and convergence',
      blocks: [
        {
          t: 'plot',
          title: 'Futures price converging to spot as delivery approaches',
          x: [0, 1],
          y: [92, 108],
          xLabel: 'Time (years), delivery at 1.0',
          yLabel: 'Price',
          curves: [
            { f: () => 100, label: 'Spot (held flat for clarity)', dashed: true },
            { f: (t: number) => 100 * Math.exp(0.06 * (1 - t)), label: 'Contango future' },
            { f: (t: number) => 100 * Math.exp(-0.05 * (1 - t)), label: 'Backwardated future' },
          ],
          caption: 'Whatever the starting gap, at delivery the future must equal spot, or there would be an instant arbitrage.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Contango', body: 'Normal for assets that are cheap to store and pay little: gold, most index futures when rates exceed dividend yields.' },
            { title: 'Backwardation', body: 'Common when supply is tight and holding the physical good now is valuable (the "convenience yield"): oil in shortages, some agricultural goods before harvest.' },
          ],
        },
        { t: 'fin-tool', tool: 'futures' },
      ],
    },
  ],
  sources: ['Hull, J. C. (2022). *Options, Futures, and Other Derivatives* (11th ed.). Pearson.', 'Kaldor, N. (1939). Speculation and economic stability. *The Review of Economic Studies*, 7(1), 1–27.'],
  related: ['finance/assets/futures/hedging', 'finance/assets/commodities', 'finance/assets/forex/drivers'],
}

export default guide
