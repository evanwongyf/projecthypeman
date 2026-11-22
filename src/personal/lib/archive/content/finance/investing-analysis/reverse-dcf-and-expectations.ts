import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A normal discounted-cash-flow model starts with forecasts and ends with a value. A reverse DCF turns it around: it starts with the market price and asks what forecasts that price requires. The question changes from "what is this worth?", which depends on a long chain of uncertain assumptions, to "what does the market already believe, and is that reasonable?", which is easier to judge. Alfred Rappaport and Michael Mauboussin called this approach expectations investing: the investor’s edge is not in forecasting better than the consensus in the abstract, but in spotting where the price embeds expectations that are too high or too low. This guide shows the mathematics (the Gordon formula run backwards, and a ten-year model solved numerically), a table of implied growth for different prices and how to judge the answers.',
  nutshell: [
    'A **reverse DCF** solves for the **growth rate (or margin or return)** that makes the DCF value equal the **market price**.',
    'With a perpetuity: \\(P=\\dfrac{FCF_1}{r-g}\\Rightarrow g=r-\\dfrac{FCF_1}{P}\\): a price of 100, next-year free cash flow of 4 and r = 8% imply **g = 4%** forever.',
    'A **ten-year model** with a 2.5% terminal growth and 8% discount rate needs about **6.3% growth for ten years** to justify a price of 100 on 4 of current free cash flow.',
    'Judge the implied expectation against **history, industry growth and the company’s capacity to reinvest**; very few firms sustain over 15% growth for ten years.',
    'The method **makes the assumption visible**: you can disagree with the market for a stated reason.',
  ],
  sections: [
    {
      id: 'idea',
      title: 'The idea and the formula',
      lead: 'From price to implied growth.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P=\sum_{t=1}^{N}\frac{FCF_0(1+g)^t}{(1+r)^t}+\frac{FCF_0(1+g)^N(1+g_T)}{(r-g_T)(1+r)^N},\qquad g=r-\frac{FCF_1}{P}\ \text{(perpetuity case)}`,
          caption: 'A two-stage DCF: N years of growth g, then a terminal growth g_T; the reverse DCF solves this equation for g given the price P.',
          where: [{ sym: 'FCF_0', def: 'current free cash flow per share' }, { sym: 'r', def: 'the discount rate (cost of equity)' }, { sym: 'g,\\ g_T', def: 'the growth during the forecast period and the terminal growth rate' }, { sym: 'N', def: 'the length of the forecast period (years)' }],
          syntax: [{ sym: 'r-g_T', say: 'the terminal denominator. Effect: the terminal value dominates when it is small, so a half-point change in g_T moves the answer a lot. Why: a perpetuity grows rapidly more valuable as growth approaches the discount rate.' }],
          worked: {
            title: 'Price 100, free cash flow about 4, discount rate 8%',
            steps: ['Perpetuity case with next-year free cash flow of 4: g = 8% − 4/100 = 4% for ever, which is above the long-run growth of the economy (2 to 3%) and so is demanding.', 'Ten-year case with a 2.5% terminal rate: solving numerically gives g = 6.3% a year for 10 years.', 'At a price of 80 the answer is 3.4%; at 150, 11.5%; at 200, 15.2%.'],
            answer: 'Whether 6.3% for ten years is plausible depends on the company: for a mature utility it is not; for a growing business with high ROIC and a long runway it may be. The analysis does not decide, but it tells you what must be true.',
          },
        },
        {
          t: 'table',
          head: ['Price', 'Implied growth for 10 years (terminal 2.5%, r = 8%, FCF₀ = 4)', 'Reading'],
          rows: [
            ['60', '−0.3%', 'The market assumes shrinkage: a bargain if the business is stable'],
            ['80', '3.4%', 'Modest growth; plausible for a steady business'],
            ['100', '6.3%', 'Needs above-average growth for a decade'],
            ['120', '8.6%', 'Demanding; only for strong franchises'],
            ['150', '11.5%', 'Very demanding; few companies deliver'],
            ['200', '15.2%', 'An extraordinary expectation'],
          ],
          caption: 'Computed from the two-stage DCF with the stated inputs; the numbers change with the discount rate and the terminal growth.',
        },
      ],
    },
    {
      id: 'judge',
      title: 'Judging the implied expectation',
      lead: 'Is it reasonable?',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Compare with history', body: 'How fast has the company grown in the past 5 and 10 years? Growth tends to fade toward the average (mean reversion).' },
            { title: 'Compare with the industry', body: 'Can the market grow that fast? A company cannot grow faster than its industry for long without taking share.' },
            { title: 'Check the funding', body: 'Growth needs reinvestment: use g = ROIC × reinvestment rate to see if the implied growth is fundable.' },
            { title: 'Check the base rate', body: 'Studies of company growth (Chan, Karceski and Lakonishok, and McKinsey) find that few firms sustain double-digit growth for ten years.' },
            { title: 'Decide', body: 'If the implied expectation is below what you believe is achievable, the stock may be cheap; if above, expensive or at least fully priced.' },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Market-implied forecast period', tag: 'Mauboussin', body: 'Instead of solving for growth, solve for how many years of value-creating growth the price assumes; more years means more optimism.' },
            { title: 'Other implied variables', tag: 'margins and returns', body: 'You can solve for the margin or the return on capital the price requires, holding growth fixed.' },
            { title: 'Sensitivity', tag: 'a grid', body: 'Show implied growth for several discount rates and terminal growths; the answer varies by several points and that is the uncertainty.' },
            { title: 'Limitations', tag: 'garbage in', body: 'The method inherits the uncertainty about discount rates and terminal values; it clarifies, it does not eliminate, the guess.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A good question for any stock', text: 'Before buying, state in one sentence what the price assumes ("10% growth for ten years at stable margins") and why you believe the outcome will be better or worse. If you cannot, you have not yet found an edge.' },
      ],
    },
  ],
  sources: [
    'Mauboussin, M. J. & Rappaport, A. (2001). *Expectations Investing: Reading Stock Prices for Better Returns*. Harvard Business School Press.',
    'Damodaran, A. (2012). *Investment Valuation*. Wiley.',
    'Chan, L. K. C., Karceski, J. & Lakonishok, J. (2003). The level and persistence of growth rates. *Journal of Finance*, 58(2), 643–684.',
    'Koller, T., Goedhart, M. & Wessels, D. (2020). *Valuation*. Wiley.',
  ],
  related: ['finance/fundamental/dcf', 'finance/investing-analysis/company-analysis-workflow', 'finance/fundamental/multiples'],
}

export default guide
