import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Selling options generates income: covered calls (own shares, sell calls against them) and cash-secured puts (hold cash, sell puts) collect premiums in exchange for giving up some upside or agreeing to buy on dips. Indexes of these strategies (the CBOE BXM buy-write and PUT indexes) have had equity-like returns with lower volatility, but with capped upside and full exposure to crashes.',
  nutshell: [
    '**Covered call**: own 100 shares, sell one call. Income plus limited upside; downside nearly as large as the stock’s.',
    '**Cash-secured put**: sell a put with cash to buy the shares if assigned. Similar payoff shape to a covered call.',
    '**The wheel**: sell puts until assigned, then sell calls until called away, repeat.',
    'High “annualised yields” are misleading: they are compensation for risk, not free income.',
  ],
  sections: [
    {
      id: 'cc',
      title: 'Covered call maths',
      blocks: [
        {
          t: 'math',
          tex: String.raw`R_{\max} = \frac{(K - S_0) + c}{S_0}, \qquad \text{Breakeven} = S_0 - c, \qquad \text{Annualised premium} \approx \frac{c}{S_0}\times\frac{365}{d}`,
          caption: 'Maximum return, breakeven price and annualised premium yield of a covered call with strike K, premium c and d days to expiry.',
          plain: 'If the stock ends above the strike, the shares are called away at K: you keep the rise to K plus the premium, and nothing more. If it falls, the premium cushions the loss by its size, so you break even at the purchase price minus the premium. The annualised premium shows what the income would be if repeated all year, which is rarely possible at the same rate.',
          where: [
            { sym: String.raw`S_0`, def: 'stock price when the call is sold' },
            { sym: 'K', def: 'call strike' },
            { sym: 'c', def: 'premium received per share' },
            { sym: 'd', def: 'days to expiry' },
          ],
          syntax: [
            { sym: String.raw`\frac{365}{d}`, say: 'how many such periods fit in a year' },
          ],
          worked: {
            title: 'Stock at $50, sell a 30-day $52 call for $1.00',
            steps: [
              String.raw`Max return: \((52 - 50 + 1)/50 = 3/50 = 6\%\) in 30 days.`,
              String.raw`Breakeven: \(50 - 1 = \$49\).`,
              String.raw`Annualised premium: \(1/50 \times 365/30 = 2\% \times 12.2 = 24\%\).`,
              'If the stock jumps to $60: return still 6%; the uncovered stock would have made 20%.',
              'If the stock falls to $40: loss \((40 - 50 + 1)/50 = -18\%\), versus −20% unhedged.',
            ],
            why: [
              'gain capped at the strike plus premium',
              'premium cushions the first $1 of decline',
              'repeating monthly at the same rate (unrealistic)',
              'upside given away',
              'downside barely cushioned',
            ],
            answer: 'The 24% “yield” is mostly payment for giving up upside and keeping almost all downside. Over time covered calls tend to lag the stock in strong markets and lose nearly as much in crashes.',
          },
        },
      ],
    },
    {
      id: 'csp',
      title: 'Cash-secured puts and the wheel',
      blocks: [
        { t: 'example', title: 'Selling a put', lines: [
          { label: 'Trade', text: 'Stock at $50; sell a 30-day $48 put for $0.80, holding $4,800 cash per contract.' },
          { label: 'If above $48', text: 'Keep $80 premium: 1.7% on the cash in a month.' },
          { label: 'If below $48', text: 'Buy 100 shares at $48; effective cost $47.20.' },
          { label: 'The wheel', text: 'Once assigned, sell covered calls above $47.20; if called away, return to selling puts.' },
        ] },
      ],
    },
  ],
  sources: [
    'Whaley, R. E. (2002). Return and risk of CBOE Buy Write Monthly Index. Journal of Derivatives, 10(2), 35–42.',
    'Israelov, R., & Nielsen, L. N. (2015). Covered calls uncovered. Financial Analysts Journal, 71(6), 44–57.',
    'Cboe. BXM and PUT index methodologies.',
  ],
  related: ['finance/assets/options/strategies', 'finance/quant/volatility-trading', 'finance/assets/options/basics'],
}

export default guide
