import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Fundamental analysis estimates what a business is really worth (its **intrinsic value**) from its finances, its prospects and the economy around it, and compares that with the market price. If the price is well below the value, the stock may be a bargain; if far above, it may be a trap.',
  nutshell: [
    '**Price** is what you pay; **value** is what you get (Warren Buffett, after Benjamin Graham).',
    'A share is a slice of a business, so its value depends on the cash the business will produce over its life.',
    '**Top-down** analysis starts with the economy and industry; **bottom-up** starts with the company.',
    'Tools: financial statements, ratios, valuation models (multiples, DCF, dividend models) and qualitative judgement.',
    'Fundamental analysis answers *what* to own; it says little about *when* prices will move.',
  ],
  sections: [
    {
      id: 'value',
      title: 'Intrinsic value',
      blocks: [
        {
          t: 'math',
          tex: String.raw`V_0 = \sum_{t=1}^{\infty} \frac{CF_t}{(1 + r)^t}`,
          syntax: [
            { sym: String.raw`\sum_{t=1}^{\infty}`, say: 'Read "the sum from t equals 1 to infinity": calculate the term after it for year 1, year 2, year 3 ... without end, and add them all.' },
            { sym: String.raw`CF_t`, say: 'Read "C-F sub t": the cash flow in year t. The subscript picks the year.' },
            { sym: String.raw`(1 + r)^t`, say: String.raw`Read "one plus r, to the power t": multiply \((1 + r)\) by itself t times. A later year means a bigger divisor, so a smaller present value.` },
          ],
          worked: {
            title: String.raw`A steady $100 a year`,
            steps: [
              String.raw`Given: the business pays out $100 every year and investors require \(r = 10\%\).`,
              String.raw`Year 1: \(100/1.10 = 90.91\). Year 2: \(100/1.10^2 = 82.64\). Year 3: \(100/1.10^3 = 75.13\). Total after three years: \(248.69\).`,
              String.raw`The terms keep shrinking but never reach zero. Adding them all (a perpetuity) has a shortcut: \(100/0.10 = 1{,}000\).`,
              String.raw`At a higher required return of \(r = 8\%\) the shortcut gives \(100/0.08 = 1{,}250\).`,
            ],
            answer: String.raw`\(V_0 = \$1{,}000\): this endless $100 stream is worth a thousand today, and a lower required return lifts it to $1,250.`,
          },
          where: [
            { sym: 'V_0', def: 'Value today' },
            { sym: 'CF_t', def: 'Cash the business delivers to its owners in year t' },
            { sym: 'r', def: 'The return investors require for the risk (the discount rate)' },
          ],
          caption: 'Every valuation method is a shortcut to, or a version of, this one idea: value is the present value of future cash flows. \\(V_0\\) is not a price you can look up; it is an estimate you compute, and the entire point of fundamental analysis is comparing it with the market price, as the chart below makes visual: above \\(V_0\\), the stock is expensive; below it, cheap, at least according to your estimate.',
        },
        {
          t: 'plot',
          title: 'Price wanders around value',
          x: [0, 40],
          y: [60, 160],
          xLabel: 'Time',
          yLabel: 'Price per share',
          curves: [
            { f: (t: number) => 90 + 1.2 * t, label: 'Intrinsic value (growing with the business)', dashed: true },
            { f: (t: number) => 90 + 1.2 * t + 22 * Math.sin(t / 3.1) + 8 * Math.sin(t / 1.3), label: 'Market price' },
          ],
          shade: [
            { from: 13, to: 17, label: 'Bargain', color: 'var(--mint)' },
            { from: 22, to: 26, label: 'Expensive', color: 'var(--pink)' },
          ],
          caption: 'Benjamin Graham: "In the short run, the market is a voting machine, but in the long run, it is a weighing machine."',
        },
      ],
    },
    {
      id: 'process',
      title: 'The analyst’s process',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Understand the business', body: 'What does it sell, to whom, and why do customers choose it over rivals? Can you explain how it makes money in two sentences?' },
            { title: 'Read the statements', body: 'Income statement, balance sheet and cash flow statement for at least 5 years. See [the three statements](@finance/fundamental/statements).' },
            { title: 'Calculate ratios', body: 'Profitability, growth, debt and efficiency, compared over time and with peers. See [ratios](@finance/fundamental/ratios).' },
            { title: 'Judge quality', body: 'Competitive advantages, management, accounting red flags. See [quality and moats](@finance/fundamental/quality).' },
            { title: 'Value it', body: 'Use several methods ([multiples](@finance/fundamental/multiples), [DCF](@finance/fundamental/dcf)) and get a range.' },
            { title: 'Demand a margin of safety', body: 'Buy only when the price is well below your estimate, to allow for being wrong. See [value investing](@finance/fundamental/value-investing).' },
          ],
        },
        {
          t: 'levels',
          items: [
            { name: 'Company', body: 'Products, management, finances, valuation.' },
            { name: 'Industry', body: 'Competition, growth, regulation, cyclicality.' },
            { name: 'Economy', body: 'Growth, interest rates, inflation, currency.' },
          ],
          caption: 'Top-down analysis reads this ladder from the top (economy) down; bottom-up starts at the company.',
        },
      ],
    },
    {
      id: 'fa-ta',
      title: 'Fundamental versus technical',
      blocks: [
        {
          t: 'table',
          head: ['', 'Fundamental analysis', 'Technical analysis'],
          rows: [
            ['Question', 'What is it worth?', 'What is the price doing?'],
            ['Data', 'Financial statements, economy, industry', 'Price, volume, sentiment'],
            ['Horizon', 'Months to years', 'Minutes to months'],
            ['Typical users', 'Long-term investors, analysts', 'Traders, timing decisions'],
            ['Weakness', 'Value can stay unrecognised for years', 'Signals are noisy and often fail'],
          ],
          caption: 'Many practitioners combine them: fundamentals to choose, technicals to time and manage risk.',
        },
        { t: 'callout', tone: 'fact', title: 'The father of value investing', text: 'Benjamin Graham and David Dodd published *Security Analysis* in 1934, in the depths of the Great Depression. Graham later taught at Columbia, where one of his students was a young Warren Buffett, the only student Graham ever gave an A+.' },
      ],
    },
  ],
  sources: [
    'Graham, B., & Dodd, D. (1934). *Security Analysis*. McGraw-Hill.',
    'Damodaran, A. (2012). *Investment Valuation* (3rd ed.). Wiley.',
    'Penman, S. H. (2013). *Financial Statement Analysis and Security Valuation* (5th ed.). McGraw-Hill.',
  ],
  related: ['finance/fundamental/statements', 'finance/fundamental/dcf', 'finance/technical/what-is-ta'],
}

export default guide
