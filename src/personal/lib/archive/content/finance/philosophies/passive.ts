import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Passive investing means buying the whole market through a low-cost index fund and holding it, rather than trying to pick winners. It rests on simple arithmetic and decades of evidence, and it has become the default recommendation of most finance academics for ordinary savers.',
  nutshell: [
    'Before costs, the average active dollar earns the market return; after costs, it must earn less.',
    'Most active funds underperform their index over long periods, and past winners rarely stay winners.',
    'Index funds win through **low cost**, **broad diversification**, **low turnover** (tax efficiency) and **discipline**.',
    '"Don’t look for the needle in the haystack. Just buy the haystack." (John Bogle)',
  ],
  sections: [
    {
      id: 'arithmetic',
      title: 'The arithmetic of active management',
      blocks: [
        {
          t: 'math',
          tex: String.raw`R_{\text{market}} = w_{\text{passive}}R_{\text{passive}} + w_{\text{active}}R_{\text{active}},\qquad R_{\text{passive}} = R_{\text{market}} \;\Rightarrow\; R_{\text{active}} = R_{\text{market}} \text{ (before costs)}`,
          where: [
            { sym: String.raw`w_{\text{passive}}, w_{\text{active}}`, def: 'Share of all invested money held passively and actively' },
            { sym: String.raw`R_{\text{passive}}, R_{\text{active}}`, def: 'Average return earned by passive and active investors' },
          ],
          syntax: [
            { sym: 'w_{\\text{passive}}R_{\\text{passive}}', say: 'Read "weight passive times return passive". Each group’s share of the money multiplied by its average return; the market return is the weighted average of the two groups.' },
            { sym: String.raw`\Rightarrow`, say: 'Read "which implies". If the first statement is true, the second must follow.' },
          ],
          worked: {
            title: 'A market with 30% passive money',
            steps: [
              String.raw`Given: the market returned 8% before costs; passive investors hold 30% of the money and earn the market return, \(R_{\text{passive}} = 8\%\); active investors hold the other 70%.`,
              String.raw`Plug in: \(8 = 0.3 \times 8 + 0.7 \times R_{\text{active}}\), so \(8 = 2.4 + 0.7\,R_{\text{active}}\).`,
              String.raw`Solve: \(R_{\text{active}} = (8 - 2.4)/0.7 = 5.6/0.7 = 8\%\).`,
              String.raw`Now take off costs: passive fee 0.1% leaves \(7.9\%\); active fee 1.0% leaves \(7.0\%\).`,
            ],
            answer: 'Before costs active investors as a group earn exactly the market’s 8%; after fees they trail passive investors by 0.9 points a year.',
          },
          caption: 'William Sharpe (1991): since passive investors by definition hold a slice of the whole market, and the market is just all investors’ holdings added together, active investors as a group must also, collectively, hold the market before costs, there is no other pool of assets left over for them to hold. This is not an opinion about skill, it is an arithmetic identity: it does not rule out any individual active investor beating the market, only that the average one, after fees that passive investors mostly avoid, must lag.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Shortfall after } n \text{ years} = 1 - \left(\frac{1 + r - f_{\text{active}}}{1 + r - f_{\text{passive}}}\right)^{n}`,
          where: [
            { sym: 'r', def: 'Gross return before fees, assumed equal for both funds' },
            { sym: String.raw`f_{\text{active}}, f_{\text{passive}}`, def: 'Annual fee charged by the active and passive fund' },
            { sym: 'n', def: 'Number of years invested' },
          ],
          syntax: [
            { sym: String.raw`\frac{1 + r - f_{\text{active}}}{1 + r - f_{\text{passive}}}`, say: 'Read "growth factor of the active fund over growth factor of the passive fund". Each top and bottom is what one unit of money becomes in one year after fees.' },
            { sym: String.raw`\left(\cdot\right)^{n}`, say: String.raw`Read "to the power n". Repeat the one-year ratio for \(n\) years; the gap compounds.` },
            { sym: String.raw`1 - (\cdot)`, say: 'Subtract the ratio from 1 to turn "the active fund ends with this fraction of the passive fund’s money" into "it ends with this much less".' },
          ],
          worked: {
            title: '30 years at 7% gross',
            steps: [
              String.raw`Given: \(r = 0.07\), \(f_{\text{active}} = 0.010\), \(f_{\text{passive}} = 0.001\), \(n = 30\).`,
              String.raw`Yearly growth factors: active \(1 + 0.07 - 0.010 = 1.060\); passive \(1 + 0.07 - 0.001 = 1.069\).`,
              String.raw`Ratio: \(1.060/1.069 \approx 0.99158\).`,
              String.raw`Over 30 years: \(0.99158^{30} \approx 0.776\), so the shortfall is \(1 - 0.776 = 22.4\%\).`,
              String.raw`In money: 10,000 grows to \(10{,}000 \times 1.069^{30} \approx 74{,}017\) passively but only \(10{,}000 \times 1.060^{30} \approx 57{,}435\) actively.`,
            ],
            answer: 'The active investor ends with about 22% less (57,435 against 74,017) purely because of a 0.9-point annual fee gap.',
          },
          caption: 'With r = 7%, an active fee of 1.0% versus 0.1%, over 30 years: 1 − (1.06/1.069)^30 ≈ 22% less money, from a fee gap of less than one percentage point a year. The result is unforgiving to time: the shortfall compounds, so it looks small over 5 years and devastating over 30, the same fee difference that barely matters to a short-term saver can cost a lifetime investor a quarter or more of their final balance.',
        },
      ],
    },
    {
      id: 'how',
      title: 'How to do it',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Choose broad indices', body: 'A global or home-market equity index fund, and a bond index fund, rather than narrow themes.' },
            { title: 'Keep costs very low', body: 'Expense ratios of 0.03–0.25% are common for index ETFs.' },
            { title: 'Set an allocation', body: 'For example 80% stocks / 20% bonds when young; see [asset allocation](@finance/philosophies/allocation).' },
            { title: 'Invest regularly', body: 'Dollar-cost averaging: the same amount every month, whatever the price.' },
            { title: 'Rebalance and ignore the noise', body: 'Once a year, reset to your target weights. Do not react to headlines.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Buffett’s million-dollar bet', text: 'In 2008 Warren Buffett bet $1 million that an S&P 500 index fund would beat a selection of hedge funds over ten years. By the end of 2017 the index fund had returned about 7.1% a year, against about 2.2% for the hedge funds. The winnings went to charity.' },
      ],
    },
  ],
  sources: ['Bogle, J. C. (2007). *The Little Book of Common Sense Investing*. Wiley.', 'Sharpe, W. F. (1991). The arithmetic of active management. *Financial Analysts Journal*, 47(1), 7–9.', 'Buffett, W. E. (2017). Chairman’s letter. *Berkshire Hathaway Annual Report*.'],
  related: ['finance/assets/funds', 'finance/foundations/efficient-markets', 'finance/philosophies/allocation'],
}

export default guide
