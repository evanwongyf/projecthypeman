import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Dividend investors build portfolios of companies that pay, and ideally grow, their dividends. The appeal is a rising stream of cash and the discipline that dividends impose on management. The trap is chasing high yields that turn out to be unsustainable.',
  nutshell: [
    '**Dividend yield** = dividend per share ÷ price.',
    'Total return ≈ **yield + dividend growth** (from the Gordon model).',
    'Check sustainability: **payout ratio**, **dividend cover** and free cash flow.',
    'A very high yield often signals the market expects a cut: the **yield trap**.',
    '**Dividend aristocrats** are S&P 500 companies that have raised dividends for at least 25 consecutive years.',
  ],
  sections: [
    {
      id: 'maths',
      title: 'The maths of dividends',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Yield} = \frac{DPS}{P},\qquad \text{Payout} = \frac{DPS}{EPS},\qquad \text{Cover} = \frac{EPS}{DPS} = \frac{1}{\text{Payout}}`,
          where: [
            { sym: 'DPS', def: 'Dividend per share paid over the last year' },
            { sym: 'P', def: 'Current share price' },
            { sym: 'EPS', def: 'Earnings per share' },
          ],
          syntax: [
            { sym: String.raw`\frac{DPS}{P}`, say: 'Read "dividend per share over price". Divide the yearly dividend by today’s price and multiply by 100 to get a percentage.' },
            { sym: String.raw`\frac{1}{\text{Payout}}`, say: 'Read "one over the payout ratio". Cover is just the payout ratio flipped upside down: a payout of 50% means cover of 2 times.' },
          ],
          worked: {
            title: 'A share at $80 paying $3.20',
            steps: [
              String.raw`Given: share price \(P = 80\), dividends over the last year \(DPS = 3.20\), earnings \(EPS = 4.00\) (all in dollars per share).`,
              String.raw`Yield \(= 3.20/80 = 0.04 = 4\%\).`,
              String.raw`Payout \(= 3.20/4.00 = 0.80 = 80\%\).`,
              String.raw`Cover \(= 4.00/3.20 = 1.25\), and the check \(1/0.80 = 1.25\) agrees.`,
              String.raw`Buffer: earnings can fall by \(1 - 0.80 = 20\%\) before they no longer pay the dividend.`,
            ],
            answer: 'A 4% yield with 80% payout and 1.25 times cover is decent income but a thin cushion; a modest profit slump would put the dividend at risk.',
          },
          caption: 'Yield tells you the income relative to today’s price; payout and cover are two ways of asking the same safety question. A payout ratio near 100% (cover near 1×) means almost every dollar earned is being paid straight out, leaving no buffer if profits dip, a cover of 2× means earnings could fall by half before the dividend itself is at risk.',
        },
        {
          t: 'metric',
          name: 'the payout ratio',
          shows: 'what share of a company’s earnings is being handed to shareholders as dividends, versus kept for reinvestment, debt paydown or buybacks. It is the single most useful number for judging whether a dividend is sustainable, because it connects the dividend directly to the profit that has to fund it.',
          eli5: 'If you earn $100 and give away $40 of it, your payout ratio is 40%, you have $60 of breathing room. If you give away $95, you have almost none: one bad month and you cannot cover your usual giving without borrowing.',
          higher: 'A high payout ratio (approaching or above 100%) means the company is paying out most or all of its profit, sometimes more than it earns. There is little or no cushion if earnings dip, so the dividend is one weak year away from a cut, and a very high yield paired with a stretched payout ratio is usually the market pricing in exactly that risk, the classic **yield trap**.',
          lower: 'A low payout ratio (well under 40–50%) means plenty of earnings are being retained. That gives room for the dividend to keep growing even through a rough patch, but it can also mean a company is simply choosing to prioritise growth or buybacks over income, which is not a flaw, just a different capital-allocation choice.',
          typical: 'Most healthy dividend-paying companies run payout ratios of roughly 30–60%; REITs and utilities are structurally higher (often 70–90%, and REITs are typically required by law to distribute most of their taxable income), which is normal for those sectors and not itself a warning sign the way it would be for an ordinary industrial company.',
        },
        {
          t: 'math',
          tex: String.raw`E[R] \approx \frac{D_1}{P_0} + g`,
          where: [
            { sym: 'D_1', def: 'Expected dividend over the next year' },
            { sym: 'P_0', def: 'Current share price' },
            { sym: 'g', def: 'Expected long-run growth rate of the dividend' },
          ],
          syntax: [
            { sym: 'E[R]', say: String.raw`Read "the expected value of R" or "expected return". It is the average outcome you would get if you could repeat the investment many times, not a promise.` },
            { sym: String.raw`\approx`, say: 'Read "is approximately". The formula leaves out changes in the valuation multiple, so treat the answer as an estimate.' },
            { sym: 'D_1, P_0', say: String.raw`Read "D one" and "P zero". The subscript is the time in years: \(P_0\) is the price now (time 0), \(D_1\) is the dividend one year from now.` },
          ],
          worked: {
            title: 'A $50 share with a growing dividend',
            steps: [
              String.raw`Given: price \(P_0 = 50\); the dividend just paid was 1.40 and is expected to grow \(g = 6\%\) a year.`,
              String.raw`Next year’s dividend: \(D_1 = 1.40 \times 1.06 = 1.484\).`,
              String.raw`Yield: \(D_1/P_0 = 1.484/50 = 0.02968 \approx 2.97\%\).`,
              String.raw`Add growth: \(E[R] \approx 2.97\% + 6\% = 8.97\%\).`,
              String.raw`Compare a 5% yielder growing 2%: \(5\% + 2\% = 7\%\).`,
            ],
            answer: 'The 3% yielder with 6% growth is expected to return about 9% a year, better than the higher-yielding but slower-growing share at 7%.',
          },
          caption: 'A 3% yield growing at 6% a year implies roughly a 9% expected return, if the valuation stays the same. This is the Gordon growth model’s central idea: total return from a dividend-paying stock comes from two sources that trade off against each other, the cash you collect now (yield) and the cash growth you are owed later (g), so a low current yield is not automatically a worse holding if the growth rate more than makes up for it.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Yield on cost after } n \text{ years} = \text{starting yield} \times (1 + g)^n`,
          where: [
            { sym: 'n', def: 'Number of years held' },
            { sym: 'g', def: 'Annual dividend growth rate' },
          ],
          syntax: [
            { sym: String.raw`(1 + g)^n`, say: String.raw`Read "one plus g, to the power n". Multiply \((1+g)\) by itself \(n\) times: each pass adds one more year of growth on top of the last.` },
            { sym: String.raw`\times`, say: 'Read "times". Scale the starting yield by the growth factor, since yield on cost is your original yield stretched by how far the dividend has grown.' },
          ],
          worked: {
            title: 'Buying at $50 with a 3% starting yield',
            steps: [
              String.raw`Given: you pay 50 a share; the dividend is 1.50 (a 3% starting yield) and grows \(g = 7\%\) a year.`,
              String.raw`Growth factor after 10 years: \(1.07^{10} \approx 1.967\).`,
              String.raw`Yield on cost \(= 3\% \times 1.967 \approx 5.9\%\); in cash the dividend is \(1.50 \times 1.967 \approx 2.95\) a share.`,
              String.raw`After 20 years: \(1.07^{20} \approx 3.870\), so yield on cost \(\approx 3\% \times 3.870 = 11.6\%\).`,
              String.raw`If the share price has also grown 7% a year, a new buyer after 10 years pays about \(50 \times 1.967 = 98.4\) and gets a yield of only \(2.95/98.4 = 3.0\%\).`,
            ],
            answer: 'Your yield on cost climbs from 3% to 5.9% after 10 years and 11.6% after 20, yet a new buyer still earns only about 3%.',
          },
          caption: 'A 3% starting yield growing 7% a year becomes about 5.9% on your original cost after 10 years, and about 11.6% after 20. Yield on cost only ever rises for a holding whose dividend keeps growing, which makes it a flattering number to quote in hindsight, but it says nothing about what yield a new buyer gets today, so it is a poor guide for deciding whether to buy more now.',
        },
        {
          t: 'plot',
          title: 'Income from $10,000: high yield, no growth, versus lower yield, growing',
          x: [0, 25],
          y: [0, 1600],
          xLabel: 'Years',
          yLabel: 'Annual dividends ($)',
          curves: [
            { f: () => 600, label: '6% yield, 0% growth' },
            { f: (t: number) => 300 * 1.08 ** t, label: '3% yield, 8% growth' },
          ],
          points: [{ x: Math.log(2) / Math.log(1.08), y: 600, label: 'Crossover ≈ 9 years' }],
        },
        {
          t: 'math',
          tex: String.raw`\text{Chowder rule:}\quad \text{yield (\%)} + \text{5-year dividend growth (\%)} \ge 12`,
          syntax: [
            { sym: String.raw`\ge`, say: 'Read "is greater than or equal to". A total of exactly 12 passes the test.' },
            { sym: String.raw`\text{yield (\%)} + \text{growth (\%)}`, say: 'Add the two percentages as plain numbers. A 3% yield and 9% growth give 3 + 9 = 12, not 0.03 + 0.09.' },
          ],
          worked: {
            title: 'Two candidates',
            steps: [
              String.raw`Company A: yield 2.5%, five-year dividend growth 11% a year. Sum \(= 2.5 + 11 = 13.5\), which is \(\ge 12\): pass.`,
              String.raw`Company B: yield 5.0%, five-year dividend growth 4% a year. Sum \(= 5 + 4 = 9\), which is below 12: fail.`,
              'Note the trade-off: B pays twice the income today, but A’s dividend grows fast enough to overtake it in cash terms.',
            ],
            answer: 'Company A clears the Chowder bar of 12 with 13.5; Company B (9) does not, despite its higher yield.',
          },
          caption: 'A rule of thumb from the dividend-investing community (with a lower bar of about 8 for utilities).',
        },
      ],
    },
    {
      id: 'traps',
      title: 'Avoiding yield traps',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Payout ratio below about 60–70% for most companies (REITs and utilities run higher by design).',
            'Dividends covered by free cash flow, not just accounting profit.',
            'Debt not rising to fund the dividend.',
            'A record of growing the dividend through recessions.',
            'Ask why the yield is high: a falling share price often means the market expects trouble.',
          ],
        },
        { t: 'callout', tone: 'note', title: 'Dividends are not free money', text: 'On the ex-dividend date the share price drops by roughly the dividend. What matters is total return, and in many countries dividends are taxed differently from gains. Singapore does not tax dividends paid by Singapore-resident companies to individuals.' },
      ],
    },
  ],
  sources: ['Siegel, J. J. (2005). *The Future for Investors*. Crown Business.', 'Miller, M. H., & Modigliani, F. (1961). Dividend policy, growth, and the valuation of shares. *The Journal of Business*, 34(4), 411–433.'],
  related: ['finance/fundamental/dividend-models', 'finance/assets/funds'],
}

export default guide
