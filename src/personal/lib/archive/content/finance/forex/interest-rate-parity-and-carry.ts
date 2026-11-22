import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Two ideas link interest rates to exchange rates, and the gap between them is where the most important currency strategy lives. Covered interest parity says that a forward exchange rate is not a forecast but an arithmetic consequence of two interest rates: a trader can lock in a forward rate, and any difference from the parity value would be an arbitrage. Uncovered interest parity says that, in expectation, the currency with the higher interest rate should depreciate by the interest difference, leaving no profit from borrowing in a low-rate currency and lending in a high-rate one. Empirically the second fails: high-yielding currencies have, on average, not depreciated enough, and the carry trade has earned a return, but with an unpleasant risk profile. This guide derives both, shows the forward-point calculation, runs the carry trade in a live lab and describes the crashes of 1998, 2008 and 2024.',
  nutshell: [
    '**Covered interest parity (CIP)**: \\(F=S\\,\\dfrac{1+i_q T}{1+i_b T}\\): the forward rate follows from spot and the two interest rates.',
    'Example: USD/JPY spot 150, US rate 5.3%, Japan 0.1%: the one-year forward is **142.6**, a **4.9% forward discount** for the dollar.',
    '**Uncovered interest parity (UIP)** says the expected depreciation equals the interest difference; in data the opposite often happens (the **forward-premium puzzle**).',
    'A **carry trade** earns the interest difference; it has a positive average return but **negative skewness**: many small gains and occasional large losses.',
    'Famous unwinds: **October 1998**, **2008** and **August 2024** (the yen carry trade).',
  ],
  sections: [
    {
      id: 'cip',
      title: 'Covered interest parity and forward points',
      lead: 'The forward rate is arithmetic.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`F=S\,\frac{1+i_qT}{1+i_bT},\qquad \frac{F-S}{S}\approx (i_q-i_b)\,T`,
          caption: 'Covered interest parity: the forward rate F for a maturity T years ahead, given spot S (quote per base) and the interest rates in the quote and base currencies.',
          where: [{ sym: 'S,\\ F', def: 'spot and forward prices of the base currency in the quote currency' }, { sym: 'i_q,\\ i_b', def: 'interest rates in the quote and base currencies over the period' }, { sym: 'T', def: 'the period in years' }],
          syntax: [{ sym: '(1+i_qT)/(1+i_bT)', say: 'the ratio of what a unit of money grows to in each currency. Effect: the currency with the higher interest rate trades at a forward discount. Why: otherwise a trader could borrow one currency, lend the other and lock in a profit with the forward.' }],
          worked: {
            title: 'USD/JPY with a US rate of 5.3% and a Japanese rate of 0.1%',
            steps: ['Spot USD/JPY = 150.00; base = USD (rate 5.3%), quote = JPY (0.1%), T = 1 year.', 'F = 150 × (1 + 0.001)/(1 + 0.053) = 150 × 1.001/1.053 = 142.59.', 'The forward points are −7.41 yen: the dollar trades at a forward discount of 4.9%, about the 5.2% interest difference.'],
            answer: 'The forward price does not say the dollar will fall; it says that locking in the rate costs the interest difference. A Japanese importer who buys dollars forward pays 142.6 rather than 150, but gives up the extra interest on dollars: the two exactly offset, so the hedge is fair.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Forward points', tag: 'the quote', body: 'Forwards are quoted as points to be added to or subtracted from spot (here −741 pips); the sign shows which currency has the higher interest rate.' },
            { title: 'FX swaps', tag: 'funding', body: 'An FX swap is a spot trade together with an opposite forward: it is how banks borrow foreign currency and the forward points reflect the cost.' },
            { title: 'The cross-currency basis', tag: 'a deviation', body: 'Since 2008 the forward price has often implied a dollar borrowing cost above the interest-rate difference: the cross-currency basis, a sign of demand for dollars and limits on bank balance sheets (Du, Tepper and Verdelhan, 2018).' },
            { title: 'Hedging cost', tag: 'practical', body: 'An investor in foreign bonds who hedges the currency with forwards earns the home interest rate on the hedged position, not the foreign one, plus or minus the basis.' },
          ],
        },
      ],
    },
    {
      id: 'carry',
      title: 'The carry trade',
      lead: 'Borrow low, hold high, and hope the rate does not move.',
      blocks: [
        { t: 'fin-lab', viz: 'carry' },
        {
          t: 'math',
          tex: String.raw`\mathbb{E}[\Delta s]=-(i_h-i_l)\ \text{(UIP)},\qquad R_{\text{carry}}=(i_h-i_l)+\Delta s,\qquad \text{Sharpe}\approx\frac{i_h-i_l}{\sigma_s}`,
          caption: 'Uncovered interest parity predicts that the high-yield currency depreciates by the interest difference; the carry return is the interest difference plus the exchange-rate change.',
          where: [{ sym: 'i_h,\\ i_l', def: 'the interest rates of the high- and low-yielding currencies' }, { sym: '\\Delta s', def: 'the percentage change in the high-yield currency against the funding currency' }, { sym: '\\sigma_s', def: 'the volatility of the exchange rate' }],
          syntax: [{ sym: 'i_h-i_l+\\Delta s', say: 'the total return of holding the high-yield currency funded in the low-yield one. Effect: it is positive if the currency does not fall by more than the rate gap. Why: the interest earned is a cushion against depreciation.' }],
          worked: {
            title: 'A 4.5-point carry with 10% volatility',
            steps: ['Carry = 5% − 0.5% = 4.5% a year; exchange-rate volatility 10%: Sharpe-like ratio = 0.45.', 'If the exchange rate is a random walk, the chance of a losing year is Φ(−0.45) = 33%.', 'With 5× leverage, the return in a flat year is 22.5%; a 9% fall in the currency erases it, and a bad year (−1.65σ = −16.5%) costs (4.5 − 16.5) × 5 = −60%.'],
            answer: 'The positive average return is real, but leverage turns a bad year into a disaster. The distribution has a fat left tail: carry earns small gains in calm times and loses in risk-off episodes, when high-yield currencies fall and funding currencies, such as the yen and the Swiss franc, rise as investors unwind.',
          },
        },
        {
          t: 'levels',
          caption: 'Carry unwinds.',
          items: [
            { name: 'October 1998', body: 'After the LTCM crisis, the yen rose sharply in a few days (a move of around 10% in a single day) as leveraged funds unwound dollar/yen carry positions.' },
            { name: '2007–2008', body: 'As the financial crisis spread, high-yielding currencies (Australian and New Zealand dollars, emerging-market currencies) fell sharply against the yen and the dollar.' },
            { name: 'August 2024', body: 'A Bank of Japan rate rise and weak US data triggered a rapid unwinding of yen carry trades: USD/JPY fell from about 162 in early July to about 142 on 5 August, and the Nikkei fell about 12% in a day.' },
          ],
        },
      ],
    },
    {
      id: 'puzzle',
      title: 'The forward-premium puzzle and carry as a risk premium',
      lead: 'Why UIP fails.',
      blocks: [
        {
          t: 'p',
          text: 'If UIP held, a regression of the realised change in the exchange rate on the forward premium would have a slope of one. Fama (1984) found slopes that were negative: when the forward price said the high-yield currency should fall, it tended to rise. The standard interpretation is that carry is compensation for bearing risk: high-yield currencies do badly in global downturns, when investors’ wealth is falling and risk-aversion is high (Lustig, Roussanov and Verdelhan, 2011). An alternative is that markets adjust slowly to rate changes. The finding is robust, and carry is one of the main systematic strategies in currency funds, but it comes with sharp drawdowns, so the positive average return is not free money.',
        },
        {
          t: 'table',
          head: ['Strategy', 'Idea', 'Evidence', 'Risk'],
          rows: [
            ['Carry', 'Buy high-yield, sell low-yield currencies', 'Positive average returns across decades and currencies', 'Crashes in risk-off episodes; negative skew'],
            ['Momentum', 'Buy currencies that have risen over the past 1–12 months', 'Profitable in many studies (Menkhoff et al., 2012)', 'Reversals around turning points'],
            ['Value', 'Buy currencies that are cheap on purchasing-power parity', 'Works over multi-year horizons', 'Long periods of underperformance'],
          ],
          caption: 'The three main currency factors; see the FX-analysis guide for the evidence.',
        },
        { t: 'callout', tone: 'note', title: 'In Singapore', text: 'The Singapore dollar has historically had lower interest rates than the US dollar, so forward prices show the US dollar at a discount against the Singapore dollar when US rates are higher; exporters who sell US dollars forward receive less than spot, which is the cost of locking in the rate. See the hedging guide.' },
      ],
    },
  ],
  sources: [
    'Fama, E. F. (1984). Forward and spot exchange rates. *Journal of Monetary Economics*, 14(3), 319–338.',
    'Lustig, H., Roussanov, N. & Verdelhan, A. (2011). Common risk factors in currency markets. *Review of Financial Studies*, 24(11), 3731–3777.',
    'Brunnermeier, M. K., Nagel, S. & Pedersen, L. H. (2009). Carry trades and currency crashes. *NBER Macroeconomics Annual*, 23, 313–347.',
    'Du, W., Tepper, A. & Verdelhan, A. (2018). Deviations from covered interest rate parity. *Journal of Finance*, 73(3), 915–957.',
  ],
  related: ['finance/forex/pairs-crosses-and-triangular-arbitrage', 'finance/forex/hedging-currency-risk', 'finance/assets/forex/drivers'],
}

export default guide
