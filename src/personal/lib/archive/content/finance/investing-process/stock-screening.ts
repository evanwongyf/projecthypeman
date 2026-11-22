import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'There are thousands of listed companies and a day has only so many hours. A stock screen is a set of numerical filters, such as a price-to-earnings ratio below 15, a return on equity above 15% and low debt, that cuts the universe to a short list worth researching. Done well, screening is a disciplined way to focus attention. Done badly, it is a machine for finding patterns in noise: with enough filters tried on past data, something always "works". This guide explains what screens are for, the main families (value, quality, growth, dividend and momentum), how to build a funnel, the data traps (survivorship, look-ahead and one-off earnings) and the statistics of false positives, and offers a live screener on a synthetic market where you can see a screen succeed in one draw and fail in the next.',
  nutshell: [
    'A **screen** narrows a universe by **numerical filters**; its job is to **save time and impose discipline**, not to pick winners.',
    'Main families: **value** (low P/E, P/B), **quality** (high ROE, low debt, stable margins), **growth** (high revenue growth), **dividend** (high, covered yield) and **momentum** (strong 6–12 month returns).',
    'A good screen is a **funnel**: liquidity and size first, then red-flag filters, then the factor filters, then **manual research** on the remaining few.',
    '**Traps**: survivorship bias, look-ahead bias, one-off earnings, different accounting across sectors, and **data-mining**: with 20 independent tests at 5%, the chance that at least one looks significant by luck is **64%**.',
    'Factor premia are **real but small and unreliable**: the live screener shows how large the noise is relative to the edge.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'The screener lab',
      lead: 'A synthetic market of 80 stocks.',
      blocks: [
        { t: 'fin-lab', viz: 'screener' },
        {
          t: 'steps',
          items: [
            { title: 'Try a preset', body: 'Apply Value, Quality, Growth, Dividend or Momentum and note how many stocks pass and their average forward return.' },
            { title: 'Look at the error bar', body: 'The standard error of the average shows how uncertain the result is: with a dozen stocks the average moves by several points from noise alone.' },
            { title: 'Press "new market"', body: 'The market is regenerated with the same faint real tilt. A screen that beat the market once often fails on the next draw.' },
            { title: 'Tighten the filters', body: 'More filters mean fewer stocks, a bigger error bar, and apparent "success" that is more likely to be luck.' },
          ],
        },
      ],
    },
    {
      id: 'families',
      title: 'The main screens and what they assume',
      lead: 'Each filter embeds a view.',
      blocks: [
        {
          t: 'table',
          head: ['Screen', 'Typical filters', 'The idea', 'Watch out for'],
          rows: [
            ['Value', 'P/E below 15, P/B below 1.5, EV/EBITDA below sector median', 'Cheap relative to earnings or assets tends to outperform over long periods', 'Value traps: cheap because the business is deteriorating'],
            ['Quality', 'ROE above 15%, debt/equity below 0.8, stable margins, positive free cash flow', 'Profitable, financially sound firms earn higher risk-adjusted returns', 'Quality is often expensive; check valuation too'],
            ['Growth', 'Revenue growth above 15%, rising margins', 'Fast growers compound faster', 'Paying too much for growth; growth fades'],
            ['Dividend', 'Yield above 4%, payout ratio below 70%, a record of increases', 'Cash returned to shareholders; discipline on management', 'A very high yield can signal a coming dividend cut'],
            ['Momentum', 'Top-decile return over the past 6 to 12 months (skipping the latest month)', 'Winners tend to keep winning in the short run', 'Sudden reversals; high turnover and trading costs'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Combine screens', tag: 'multi-factor', body: 'Cheap and profitable (the Magic Formula idea) removes many value traps; momentum plus value diversifies across different drivers.' },
            { title: 'Compare within sector', tag: 'context', body: 'A bank at 1× book value and a software company at 1× book value are not equally cheap; compare with peers.' },
            { title: 'Check the numbers', tag: 'earnings quality', body: 'One-off gains inflate earnings and flatter P/E; use several years or normalised earnings.' },
            { title: 'Liquidity', tag: 'practical', body: 'Exclude stocks that you cannot buy or sell without moving the price, especially in smaller markets such as Singapore.' },
          ],
        },
      ],
    },
    {
      id: 'stats',
      title: 'The statistics of false positives',
      lead: 'Why a screen that worked may not.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(\text{at least one false positive})=1-(1-\alpha)^{m},\qquad \text{Bonferroni threshold}=\frac{\alpha}{m}`,
          caption: 'Testing m independent screens at significance level α: the chance that at least one looks significant by luck, and the stricter threshold that corrects for it.',
          where: [{ sym: '\\alpha', def: 'the significance level (commonly 5%)' }, { sym: 'm', def: 'the number of screens or variants tested' }],
          syntax: [{ sym: '(1-\\alpha)^{m}', say: 'the chance that none of the m tests is a false positive. Effect: it shrinks quickly with m. Why: each independent test is another chance for luck.' }],
          worked: {
            title: 'Twenty variants of a screen',
            steps: ['Each variant has a 5% chance of looking significant by luck.', 'P(at least one by chance) = 1 − 0.95²⁰ = 64%; for 5 variants, 23%.', 'To keep the overall false-positive rate at 5% with 20 tests, each needs p < 0.0025.'],
            answer: 'If you test many filter combinations on the same history and pick the best, the best result is likely to be partly luck. Remedies: decide the hypothesis before looking at the data, test on a period or market not used to design it (out-of-sample), keep the rules simple and expect smaller results than the back-test shows.',
          },
        },
        {
          t: 'dodont',
          do: ['Define the screen from an economic reason before testing it', 'Use point-in-time data that includes delisted and bankrupt companies', 'Test on another market or period and expect a smaller result', 'Use the screen to generate a research list, then read the filings'],
          dont: ['Adjust thresholds until the back-test looks good', 'Use today’s index members for a history test (survivorship bias)', 'Treat a screen’s output as a buy list', 'Ignore transaction costs and taxes in a high-turnover screen'],
        },
        { t: 'callout', tone: 'note', title: 'What the evidence on factors says', text: 'Academic research (Fama and French, Asness and others) finds that value, quality, momentum and other factors have earned premia over long periods and in many markets, but the premia are modest (a few percentage points a year), arrive in streaks and can vanish for a decade. A screen is a way to tilt a portfolio toward those characteristics, not a method to beat the market reliably.' },
      ],
    },
  ],
  sources: [
    'Fama, E. F. & French, K. R. (1992). The cross-section of expected stock returns. *Journal of Finance*, 47(2), 427–465.',
    'Harvey, C. R., Liu, Y. & Zhu, H. (2016). … and the cross-section of expected returns. *Review of Financial Studies*, 29(1), 5–68.',
    'Greenblatt, J. (2006). *The Little Book That Beats the Market*. Wiley.',
    'Asness, C. S., Frazzini, A. & Pedersen, L. H. (2019). Quality minus junk. *Review of Accounting Studies*, 24, 34–112.',
  ],
  related: ['finance/frameworks/magic-formula', 'finance/philosophies/factors', 'finance/quant/backtesting-and-overfitting'],
}

export default guide
