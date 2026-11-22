import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An asset class is a group of investments that behave alike: they respond to the same forces and are governed by similar rules. Mixing classes that react differently is the heart of building a portfolio. Here are the main classes, what drives each, and how they have performed.',
  nutshell: [
    'The big classes: **cash**, **bonds**, **stocks (equities)**, **real estate**, **commodities**, plus alternatives like **currencies**, **private assets** and **crypto**.',
    'Higher long-run returns have come with higher volatility and deeper falls.',
    'What matters for a portfolio is not just each asset’s risk but how assets move **together** (correlation).',
    '**Derivatives** (options, futures, swaps) are contracts whose value derives from another asset; they are tools for hedging and speculation, not asset classes of their own.',
  ],
  sections: [
    {
      id: 'table',
      title: 'The main classes',
      blocks: [
        {
          t: 'table',
          head: ['Class', 'What you own', 'Main return source', 'Main risks', 'Rough long-run real return*'],
          rows: [
            ['Cash and bills', 'Deposits, short-term government debt', 'Interest', 'Inflation', '≈ 0.5–1%'],
            ['Government bonds', 'Loans to governments', 'Coupons', 'Rising rates, inflation', '≈ 1.5–2.5%'],
            ['Corporate bonds', 'Loans to companies', 'Coupons plus a credit spread', 'Rates, default', 'A little above government bonds'],
            ['Stocks', 'Part-ownership of companies', 'Dividends and earnings growth', 'Recessions, valuations', '≈ 4–6.5%'],
            ['Real estate', 'Buildings and land, or REITs', 'Rent and appreciation', 'Rates, local economy, leverage', 'Between bonds and stocks'],
            ['Commodities', 'Raw materials (usually via futures)', 'Spot changes, roll yield, collateral interest', 'Supply and demand shocks', 'Low, near inflation, with big swings'],
            ['Gold', 'The metal', 'Price changes only', 'No income; swings with real rates', '≈ 0.5–1%'],
          ],
          caption: '*Very approximate long-run averages after inflation, from studies such as Dimson, Marsh and Staunton covering 1900 onwards. Future returns depend on today’s starting valuations and can differ a lot.',
        },
      ],
    },
    {
      id: 'tradeoff',
      title: 'Risk and return across classes',
      blocks: [
        {
          t: 'plot',
          title: 'A stylised risk–return map',
          x: [0, 0.35],
          y: [0, 0.09],
          xLabel: 'Volatility (annual)',
          yLabel: 'Long-run real return',
          points: [
            { x: 0.01, y: 0.007, label: 'Cash' },
            { x: 0.07, y: 0.02, label: 'Govt bonds' },
            { x: 0.09, y: 0.028, label: 'Corp bonds' },
            { x: 0.16, y: 0.04, label: 'Gold' },
            { x: 0.2, y: 0.055, label: 'Global stocks' },
            { x: 0.22, y: 0.048, label: 'REITs' },
            { x: 0.24, y: 0.02, label: 'Commodities' },
            { x: 0.3, y: 0.065, label: 'Small caps' },
          ],
          curves: [{ f: (s: number) => 0.007 + 0.2 * s, label: 'Rough trade-off', dashed: true }],
          caption: 'Illustrative positions only. Some assets (commodities, gold) have offered poor returns for their volatility, but can still help a portfolio because they move differently from stocks.',
        },
        {
          t: 'table',
          head: ['Correlation with stocks', 'Typical sign', 'Why'],
          rows: [
            ['Government bonds', 'Low or negative (mostly); positive when inflation dominates', 'Rates fall in recessions, lifting bond prices'],
            ['Corporate bonds', 'Moderate', 'Defaults rise in recessions'],
            ['Commodities', 'Low', 'Driven by supply shocks and inflation'],
            ['Gold', 'Near zero', 'A haven in crises; tied to real interest rates'],
            ['Cash', 'Zero', 'Fixed value'],
          ],
        },
        { t: 'callout', tone: 'fact', title: '2022: when the diversifier failed', text: 'In 2022, as inflation surged and rates rose fast, US stocks and long-term government bonds both fell sharply in the same year, one of the worst years for a 60/40 portfolio in a century. Correlations are not constant.' },
      ],
    },
    {
      id: 'map',
      title: 'Where to read more',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'finance/assets/bonds' },
            { path: 'finance/assets/funds' },
            { path: 'finance/assets/commodities' },
            { path: 'finance/assets/crypto' },
            { path: 'finance/assets/options/basics', note: 'Derivatives: options.' },
            { path: 'finance/assets/futures/basics', note: 'Derivatives: futures.' },
            { path: 'finance/assets/forex/basics', note: 'Currencies.' },
            { path: 'finance/philosophies/allocation', note: 'Putting them together in a portfolio.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Dimson, E., Marsh, P., & Staunton, M. (2023). *UBS Global Investment Returns Yearbook*. UBS.',
    'Ilmanen, A. (2011). *Expected Returns*. Wiley.',
    'Siegel, J. J. (2014). *Stocks for the Long Run* (5th ed.). McGraw-Hill.',
  ],
  related: ['finance/foundations/risk-return', 'finance/philosophies/allocation'],
}

export default guide
