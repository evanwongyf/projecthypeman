import type { Guide } from '../../../../guide'

const K = 100
const premCall = 5
const premPut = 4

const guide: Guide = {
  intro:
    'An option is the **right, but not the obligation**, to buy or sell an asset at a fixed price (the **strike**) on or before a date (the **expiry**). The buyer pays a **premium** for that right; the seller (the "writer") collects it and takes on the obligation. Options let you bet on direction or volatility with limited risk, or insure what you already own.',
  nutshell: [
    'A **call** is the right to **buy** at the strike; a **put** is the right to **sell** at the strike.',
    'The buyer’s maximum loss is the premium; the seller’s can be much larger.',
    'An option’s value = **intrinsic value** (what exercising now would earn) + **time value**.',
    'Calls are **in the money** when the price is above the strike; puts when it is below.',
    'One standard US equity option contract covers **100 shares**.',
  ],
  sections: [
    {
      id: 'payoffs',
      title: 'Payoffs at expiry',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Call payoff} = \max(S_T - K,\, 0),\qquad \text{Put payoff} = \max(K - S_T,\, 0)`,
          where: [
            { sym: 'S_T', def: 'Price of the underlying asset at expiry' },
            { sym: 'K', def: 'Strike price' },
          ],
          syntax: [
            { sym: String.raw`\max(S_T - K,\, 0)`, say: String.raw`Read “the max of S T minus K, and zero”: take the larger of the two numbers. If the stock ends above the strike you get the difference; otherwise you get zero because you simply walk away.` },
            { sym: String.raw`S_T`, say: String.raw`Read “S sub T”: the price at time \(T\), the expiry date. The capital subscript marks the final date, as opposed to \(S_0\) for today.` },
          ],
          worked: {
            title: 'Call and put outcomes at expiry',
            steps: [
              String.raw`Given: strike \(K = 100\), call premium 5, put premium 4. First suppose \(S_T = 112\).`,
              String.raw`Call: \(\max(112 - 100, 0) = 12\), profit \(12 - 5 = 7\) per share ($700 on a 100-share contract). Put: \(\max(100 - 112, 0) = 0\), profit \(-4\).`,
              String.raw`Now suppose \(S_T = 88\). Call: \(\max(88 - 100, 0) = \max(-12, 0) = 0\), profit \(-5\). Put: \(\max(100 - 88, 0) = 12\), profit \(12 - 4 = 8\).`,
              String.raw`Breakevens: the call needs \(S_T = 100 + 5 = 105\); the put needs \(S_T = 100 - 4 = 96\).`,
            ],
            answer: String.raw`The buyer’s loss never exceeds the premium (5 or 4), while the call’s gain is open-ended.`,
          },
          caption: 'Profit subtracts the premium paid: max(S_T − K, 0) − c for a long call.',
        },
        {
          t: 'plot',
          title: `Long call (strike ${K}, premium ${premCall}) and long put (strike ${K}, premium ${premPut})`,
          x: [70, 130],
          y: [-10, 30],
          xLabel: 'Stock price at expiry',
          yLabel: 'Profit per share',
          curves: [
            { f: (s: number) => Math.max(s - K, 0) - premCall, label: 'Long call' },
            { f: (s: number) => Math.max(K - s, 0) - premPut, label: 'Long put' },
          ],
          hlines: [{ y: 0 }],
          vlines: [{ x: K, label: 'Strike' }],
          points: [
            { x: K + premCall, y: 0, label: 'Call breakeven 105' },
            { x: K - premPut, y: 0, label: 'Put breakeven 96' },
          ],
          caption: 'Losses are capped at the premium; the call’s upside is unlimited, the put’s is the strike minus the premium.',
        },
        {
          t: 'plot',
          title: 'The other side: short call and short put',
          x: [70, 130],
          y: [-30, 10],
          xLabel: 'Stock price at expiry',
          yLabel: 'Profit per share',
          curves: [
            { f: (s: number) => premCall - Math.max(s - K, 0), label: 'Short call' },
            { f: (s: number) => premPut - Math.max(K - s, 0), label: 'Short put' },
          ],
          hlines: [{ y: 0 }],
          caption: 'Option writers keep the premium if the option expires worthless, but take on the losses beyond it. A short call’s loss is unlimited.',
        },
      ],
    },
    {
      id: 'value',
      title: 'Intrinsic value, time value and moneyness',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Premium} = \underbrace{\max(S - K, 0)}_{\text{intrinsic (call)}} + \underbrace{\text{time value}}_{\ge 0}`,
          where: [
            { sym: 'S', def: 'Current price of the underlying asset' },
            { sym: 'K', def: 'Strike price' },
          ],
          syntax: [
            { sym: String.raw`\max(S - K, 0)`, say: String.raw`Read “the larger of S minus K, and zero”: the call’s immediate exercise value, never negative.` },
            { sym: String.raw`\underbrace{\cdots}_{\text{label}}`, say: String.raw`A brace drawn under part of a formula is only a caption for that part. It tells you what the piece is called and does not change the arithmetic.` },
            { sym: String.raw`\ge 0`, say: String.raw`Read “is greater than or equal to zero”: time value can fall to zero but can never be negative.` },
          ],
          worked: {
            title: 'Splitting a premium',
            steps: [
              String.raw`Given: the stock is at \(S = 56\). Call A has strike 50 and premium 8.30; call B has strike 60 and premium 1.10.`,
              String.raw`Call A: intrinsic \(\max(56 - 50, 0) = 6\), so time value \(= 8.30 - 6 = 2.30\).`,
              String.raw`Call B: intrinsic \(\max(56 - 60, 0) = \max(-4, 0) = 0\), so time value \(= 1.10 - 0 = 1.10\) (its whole premium).`,
              String.raw`If the stock is still 56 at expiry, A is worth 6 (losing its 2.30) and B is worth 0 (losing its 1.10).`,
            ],
            answer: String.raw`Time value is 2.30 for A and 1.10 for B, and every bit of it melts to zero by expiry unless the stock moves in your favour.`,
          },
          caption: 'Intrinsic value is what you would net by exercising right now; time value is everything else you are paying for, on top of that. Time value reflects the chance the option gains more before expiry. It shrinks to zero at expiry, which is the single most useful fact to internalise, since it means every option you buy is fighting a built-in, one-way countdown, explained in more depth as theta.',
        },
        {
          t: 'metric',
          name: 'time value',
          shows: 'The part of an option’s price that is pure "optionality"what buyers are paying for the chance that the option becomes more valuable before expiry, separate from what it would be worth if exercised this instant. It is the reason options cost more than their immediate payoff, and it is also the part that guarantees to shrink, every single day, to exactly zero.',
          eli5: 'Think of time value as the price of a lottery ticket’s remaining draws. A ticket for a draw happening in a year is worth more than an identical ticket for a draw happening tomorrow, purely because more can still happen before the outcome is locked in. As expiry gets closer, that "more can happen" premium melts away, whether or not the stock does anything.',
          higher: 'More of the premium is pure bet-on-the-future, less of it is already-locked-in payoff. At-the-money options have the most time value of all, since their fate (finish in or out of the money) is the least certain; longer-dated options and higher implied volatility also inflate it, since both mean more could plausibly happen before expiry.',
          lower: 'Less of the premium is speculative; more of it (or all of it) is intrinsic value you could lock in by exercising now. Options very close to expiry, and options very deep in or out of the money (where the outcome is nearly certain either way), carry little time value.',
          typical: 'Time value decays faster and faster as expiry approaches (roughly with the square root of time remaining, as the theta chart on the Greeks page shows), which is why holding a cheap, far out-of-the-money option "hoping it moves" is a well-known way to slowly bleed money even if your view on direction turns out right, just too late.',
        },
        {
          t: 'table',
          head: ['', 'Call', 'Put'],
          rows: [
            ['In the money (ITM)', 'S > K', 'S < K'],
            ['At the money (ATM)', 'S ≈ K', 'S ≈ K'],
            ['Out of the money (OTM)', 'S < K', 'S > K'],
          ],
        },
        {
          t: 'example',
          title: 'A call on a $108 stock, strike $100, premium $11',
          lines: [
            { label: 'Intrinsic', text: '\\(108 - 100 = 8\\)' },
            { label: 'Time value', text: '\\(11 - 8 = 3\\)' },
            { label: 'One contract', text: 'costs \\(11 \\times 100 = \\$1{,}100\\)' },
          ],
        },
      ],
    },
    {
      id: 'terms',
      title: 'Key terms',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'American option', def: 'Can be exercised any time up to expiry (most US stock options).' },
            { term: 'European option', def: 'Can be exercised only at expiry (most index options).' },
            { term: 'Open interest', def: 'Number of contracts outstanding.' },
            { term: 'Assignment', def: 'When an option is exercised, a seller is assigned to fulfil it.' },
            { term: 'Covered vs naked', def: 'A covered call seller owns the shares; a naked seller does not.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Thales and the olive presses', text: 'Aristotle tells how the philosopher Thales of Miletus, predicting a big olive harvest, paid small deposits for the right to use all the olive presses at harvest time. When the harvest came, he rented them out at high prices: arguably the first recorded option trade, around 600 BC.' },
        { t: 'callout', tone: 'fact', title: '1973', text: 'The Chicago Board Options Exchange opened in April 1973, and the Black–Scholes paper was published the same year. Traders were soon pricing options with programmable calculators.' },
      ],
    },
  ],
  sources: ['Hull, J. C. (2022). *Options, Futures, and Other Derivatives* (11th ed.). Pearson.', 'Natenberg, S. (2014). *Option Volatility and Pricing* (2nd ed.). McGraw-Hill.', 'Aristotle. *Politics*, Book I, 1259a.'],
  related: ['finance/assets/options/pricing', 'finance/assets/options/strategies', 'finance/assets/options/greeks'],
}

export default guide
