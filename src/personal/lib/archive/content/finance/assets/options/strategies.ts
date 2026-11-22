import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Combining options (and shares) creates almost any payoff shape you like: income, insurance, bets on a range, bets on a big move. Use the strategy lab to see each one’s profit-and-loss diagram, cost, breakevens and Greeks, priced with Black–Scholes.',
  nutshell: [
    '**Income**: covered calls and cash-secured puts, which collect premium and cap upside.',
    '**Insurance**: protective puts and collars, which limit downside.',
    '**Direction with limits**: bull and bear spreads, cheaper than single options but with capped profit.',
    '**Volatility**: straddles and strangles profit from big moves; iron condors and butterflies from calm.',
    'Every strategy is a trade-off between cost, probability of profit and maximum gain or loss.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'Strategy lab',
      blocks: [{ t: 'fin-tool', tool: 'options' }],
    },
    {
      id: 'formulas',
      title: 'Payoffs as formulas',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\begin{aligned}
\text{Covered call} &= (S_T - S_0) - \max(S_T - K, 0) + c \\
\text{Protective put} &= (S_T - S_0) + \max(K - S_T, 0) - p \\
\text{Bull call spread} &= \max(S_T - K_1, 0) - \max(S_T - K_2, 0) - (c_1 - c_2) \\
\text{Long straddle} &= |S_T - K| - (c + p)
\end{aligned}`,
          syntax: [
            { sym: String.raw`S_T - S_0`, say: String.raw`Read “S at expiry minus S at the start”: the profit or loss on the shares alone.` },
            { sym: String.raw`- \max(S_T - K, 0)`, say: String.raw`A minus sign in front means you sold that option: you owe the “larger of S T minus K, and zero” to the buyer.` },
            { sym: String.raw`|S_T - K|`, say: String.raw`Read “the absolute value of S T minus K”: the distance between the final price and the strike, ignoring direction, so it is never negative. This is why a straddle profits either way.` },
            { sym: String.raw`K_1, K_2`, say: String.raw`Read “K one, K two”: the subscripts number the strikes, with the lower strike first.` },
          ],
          worked: {
            title: 'Four strategies, one outcome each',
            steps: [
              String.raw`Covered call (bought at \(S_0 = 100\), sold a 105 call for \(c = 2\), \(S_T = 110\)): \((110 - 100) - \max(110 - 105, 0) + 2 = 10 - 5 + 2 = 7\).`,
              String.raw`Protective put (\(S_0 = 100\), bought a 95 put for \(p = 1.5\), \(S_T = 88\)): \((88 - 100) + \max(95 - 88, 0) - 1.5 = -12 + 7 - 1.5 = -6.5\).`,
              String.raw`Bull call spread (long 100 call at 6, short 110 call at 2.5, \(S_T = 108\)): \(\max(8, 0) - \max(-2, 0) - (6 - 2.5) = 8 - 0 - 3.5 = 4.5\).`,
              String.raw`Long straddle (100 strike, \(c = 4\), \(p = 3.5\), \(S_T = 91\)): \(|91 - 100| - (4 + 3.5) = 9 - 7.5 = 1.5\).`,
            ],
            answer: String.raw`Profits per share of 7, −6.5, 4.5 and 1.5: the put floored the stock’s loss at 6.5 instead of 12, and the covered call’s gain was capped at 7.`,
          },
          caption: 'Each payoff is a sum of simple pieces; add their diagrams to get the strategy’s diagram, that is the real trick to reading any multi-leg strategy without memorising its shape: break it into the single calls and puts (and shares) you already understand, and sum them.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Bull spread: max profit} = (K_2 - K_1) - \text{net debit},\quad \text{max loss} = \text{net debit},\quad \text{breakeven} = K_1 + \text{net debit}`,
          where: [
            { sym: 'K_1, K_2', def: 'Strike of the long call (lower) and the short call (higher)' },
            { sym: 'net debit', def: 'Cost of the long call minus the premium collected from the short call' },
          ],
          syntax: [
            { sym: String.raw`\text{net debit}`, say: String.raw`A debit is cash paid out. The net debit is what you pay for the long call minus what you collect for the short call.` },
            { sym: String.raw`K_2 - K_1`, say: String.raw`Read “K two minus K one”: the width of the spread, the most the position can ever be worth at expiry.` },
            { sym: String.raw`K_1 + \text{net debit}`, say: String.raw`Read “K one plus the net debit”: the stock must rise from the lower strike by whatever you paid before you are in profit.` },
          ],
          worked: {
            title: 'A 100/110 bull call spread',
            steps: [
              String.raw`Given: buy the 100 call at \(c_1 = 6\), sell the 110 call at \(c_2 = 2.5\).`,
              String.raw`Net debit: \(6 - 2.5 = 3.5\) per share ($350 per 100-share contract), which is also the maximum loss, reached if \(S_T \le 100\).`,
              String.raw`Maximum profit: \((110 - 100) - 3.5 = 6.5\) per share ($650), reached if \(S_T \ge 110\).`,
              String.raw`Breakeven: \(100 + 3.5 = 103.5\). Check: at 103.5 the spread is worth 3.5, exactly the debit.`,
              String.raw`Reward to risk: \(6.5/3.5 = 1.86\).`,
            ],
            answer: String.raw`You risk $350 to make up to $650, and you only need the stock above 103.5, not 110, to profit.`,
          },
          caption: 'Read this as the trade’s whole risk profile in three numbers: you can never lose more than what you paid (the net debit), you can never make more than the gap between the strikes minus that cost, and you need the stock only to clear K₁ plus what you paid, not to reach K₂, to be in profit. Paying less of the available K₂ − K₁ gap as your debit gives a better profit-to-risk ratio, which is why the price you pay for a spread matters as much as the view it expresses.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Straddle breakevens} = K \pm (c + p)`,
          where: [
            { sym: 'K', def: 'The strike shared by the call and put' },
            { sym: 'c, p', def: 'Premiums paid for the call and the put' },
          ],
          syntax: [
            { sym: String.raw`K \pm (c + p)`, say: String.raw`Read “K plus or minus c plus p”. The symbol \(\pm\) means “do it twice”: add the total premium for the upper breakeven and subtract it for the lower one.` },
          ],
          worked: {
            title: 'A straddle on a 50 stock',
            steps: [
              String.raw`Given: strike \(K = 50\), call premium \(c = 3.20\), put premium \(p = 2.80\).`,
              String.raw`Total cost: \(c + p = 3.20 + 2.80 = 6.00\) per share ($600 per contract), which is the maximum loss at \(S_T = 50\).`,
              String.raw`Breakevens: \(50 - 6 = 44\) and \(50 + 6 = 56\).`,
              String.raw`At \(S_T = 60\): \(|60 - 50| - 6 = +4\). At \(S_T = 47\): \(|47 - 50| - 6 = -3\), inside the dead zone.`,
              String.raw`Move needed: \(6/50 = 12\%\) either way.`,
            ],
            answer: String.raw`The stock must move more than 12% in either direction by expiry for the straddle to make money.`,
          },
          caption: 'A straddle costing 8 on a 100 strike needs the stock below 92 or above 108 at expiry to profit, the two breakevens mark a "dead zone" around the strike where the position loses money. The wider that zone (the more you paid), the bigger a move you need; this is why straddles are a direct bet on the size of a move, with direction irrelevant.',
        },
      ],
    },
    {
      id: 'choose',
      title: 'Choosing a strategy',
      blocks: [
        {
          t: 'table',
          head: ['Your view', 'Strategy', 'Max loss', 'Max gain'],
          rows: [
            ['Strongly bullish', 'Long call', 'Premium', 'Unlimited'],
            ['Moderately bullish', 'Bull call spread', 'Net debit', 'Strike gap − debit'],
            ['Bullish, want income', 'Cash-secured put', 'Strike − premium', 'Premium'],
            ['Own shares, want income', 'Covered call', 'Stock falls to zero, less premium', 'Capped above strike'],
            ['Own shares, want protection', 'Protective put or collar', 'Limited below the put strike', 'Unlimited (put) or capped (collar)'],
            ['Big move, unsure of direction', 'Straddle or strangle', 'Total premium', 'Unlimited'],
            ['Calm, staying in a range', 'Iron condor or butterfly', 'Wing width − credit', 'Credit received'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Short options and tail risk', text: 'Strategies that sell options win often and lose rarely, but the rare losses can be large. Size them so that the worst case is survivable.' },
        { t: 'callout', tone: 'fact', title: 'Picking up nickels…', text: 'Selling out-of-the-money options is often described as "picking up nickels in front of a steamroller": steady small gains, with occasional catastrophic losses, as several funds that sold volatility discovered in February 2018 ("Volmageddon").' },
      ],
    },
  ],
  sources: ['McMillan, L. G. (2012). *Options as a Strategic Investment* (5th ed.). Prentice Hall.', 'Hull, J. C. (2022). *Options, Futures, and Other Derivatives* (11th ed.). Pearson.'],
  related: ['finance/assets/options/basics', 'finance/assets/options/greeks', 'finance/technical/risk-management'],
}

export default guide
