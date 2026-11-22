import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A fund factsheet is full of numbers: annualised returns, volatility, Sharpe ratios, information ratios, capture ratios. Each answers a specific question. This guide works through the main ones, including the subtle but important difference between the fund’s return and your return.',
  nutshell: [
    '**Time-weighted return (TWR)** measures the manager: it ignores the timing of your deposits and withdrawals.',
    '**Money-weighted return (MWR, IRR)** measures your experience: it accounts for when you added or withdrew money.',
    '**Sharpe** = excess return ÷ volatility; **Sortino** uses only downside volatility; **information ratio** = active return ÷ tracking error.',
    '**Up/down capture** shows how much of the benchmark’s rises and falls the fund captured.',
  ],
  sections: [
    {
      id: 'twr-mwr',
      title: 'Time-weighted versus money-weighted',
      blocks: [
        {
          t: 'math',
          tex: String.raw`1 + \text{TWR} = \prod_{k=1}^{K}(1 + R_k), \qquad \sum_t \frac{CF_t}{(1 + \text{IRR})^t} = 0`,
          caption: 'Time-weighted return chains sub-period returns; the money-weighted return is the IRR that makes the discounted cash flows sum to zero.',
          plain: 'TWR breaks the period at each deposit or withdrawal, measures the return in each piece, and multiplies them together, so it reflects only how the investments performed. MWR treats your deposits as cash flows and finds the single annual rate that would turn them into your final balance, so it reflects whether you added money at good or bad times.',
          where: [
            { sym: String.raw`R_k`, def: 'return in sub-period k' },
            { sym: String.raw`CF_t`, def: 'cash flow at time t (deposits negative, final value positive)' },
            { sym: 'IRR', def: 'internal rate of return' },
          ],
          syntax: [
            { sym: String.raw`\prod`, say: '“the product of”: multiply all terms' },
          ],
          worked: {
            title: 'Adding money at the wrong time',
            steps: [
              'Year 1: invest $10,000; the fund returns +20% → $12,000.',
              'Start of year 2: add $50,000 → $62,000. Year 2 return −10% → $55,800.',
              String.raw`TWR: \(1.20 \times 0.90 = 1.08\): 8% over two years, \(\sqrt{1.08} - 1 = 3.9\%\) a year.`,
              String.raw`MWR: solve \(10{,}000x^2 + 50{,}000x = 55{,}800\) with \(x = 1 + r\): \(x^2 + 5x - 5.58 = 0\), \(x = (-5 + \sqrt{47.32})/2 = 0.9395\).`,
              String.raw`\(r = -6.05\%\) a year.`,
            ],
            why: [
              'a good first year on a small amount',
              'most money arrives just before a bad year',
              'the manager’s performance: chain the yearly returns',
              'value both deposits forward to the end and match the final balance',
              'the investor’s own experience',
            ],
            answer: 'The fund earned +3.9% a year, but this investor lost about 6% a year, because most of their money arrived before the fall. Studies of fund flows find investors’ money-weighted returns often lag funds’ time-weighted returns for this reason.',
          },
        },
      ],
    },
    {
      id: 'ratios',
      title: 'Risk-adjusted ratios',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Sharpe} = \frac{R_p - R_f}{\sigma_p}, \quad \text{Sortino} = \frac{R_p - R_f}{\sigma_{\text{down}}}, \quad IR = \frac{R_p - R_b}{TE}`,
          caption: 'Three risk-adjusted performance ratios.',
          plain: 'Sharpe asks how much extra return over cash the fund earned per unit of total volatility. Sortino counts only downside volatility, since investors do not mind upside surprises. The information ratio asks how much the fund beat its benchmark per unit of tracking error (how far it strayed from the benchmark).',
          where: [
            { sym: String.raw`R_p, R_f, R_b`, def: 'annual returns of the portfolio, cash and the benchmark' },
            { sym: String.raw`\sigma_p`, def: 'volatility of the portfolio' },
            { sym: String.raw`\sigma_{\text{down}}`, def: 'downside deviation (volatility of returns below a target)' },
            { sym: 'TE', def: 'tracking error: volatility of R_p − R_b' },
          ],
          syntax: [
            { sym: 'IR', say: '“information ratio”' },
          ],
          worked: {
            title: 'A global equity fund',
            steps: [
              String.raw`Fund 9%, cash 3%, volatility 15%: Sharpe \(= 6/15 = 0.40\).`,
              String.raw`Downside deviation 10%: Sortino \(= 6/10 = 0.60\).`,
              String.raw`Benchmark 8%, tracking error 4%: \(IR = (9 - 8)/4 = 0.25\).`,
              'Up capture 105% (rose 1.05% for each 1% benchmark rise); down capture 90% (fell 0.9% for each 1% fall).',
            ],
            why: [
              'excess return per unit of total risk',
              'per unit of bad risk only',
              'active return per unit of active risk',
              'asymmetric capture is what a good active fund looks like',
            ],
            answer: 'A respectable fund: an IR of 0.25 is modest (above 0.5 is strong and rare over long periods). Always check whether ratios cover a full market cycle.',
          },
        },
      ],
    },
  ],
  sources: [
    'CFA Institute. Global Investment Performance Standards (GIPS).',
    'Sharpe, W. F. (1994). The Sharpe ratio. Journal of Portfolio Management, 21(1), 49–58.',
    'Sortino, F. A., & Price, L. N. (1994). Performance measurement in a downside risk framework. Journal of Investing, 3(3), 59–64.',
    'Morningstar. Mind the Gap: investor returns versus fund returns (annual study).',
  ],
  related: ['finance/foundations/risk-return', 'finance/quant/risk-measures', 'finance/mutual-funds/reading-a-factsheet'],
}

export default guide
