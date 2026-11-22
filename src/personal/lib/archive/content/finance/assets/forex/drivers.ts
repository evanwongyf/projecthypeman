import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Why does one currency rise against another? In the long run, relative prices matter (purchasing power parity). In the short and medium run, interest rates, capital flows, risk appetite and central banks dominate. Two parity conditions anchor the theory, and the famous **carry trade** profits from one of them failing.',
  nutshell: [
    '**Covered interest parity (CIP)**: forward rates reflect interest rate differences, enforced by arbitrage.',
    '**Uncovered interest parity (UIP)**: high-interest currencies should fall by the rate difference. In practice they often do not: the forward premium puzzle.',
    '**Purchasing power parity (PPP)**: in the long run, exchange rates adjust to equalise prices; the **Big Mac index** is a light-hearted test.',
    'The **carry trade** borrows a low-rate currency to invest in a high-rate one, earning the gap, until a sudden reversal.',
  ],
  sections: [
    {
      id: 'cip',
      title: 'Interest rate parity',
      blocks: [
        {
          t: 'math',
          tex: String.raw`F = S\cdot\frac{1 + i_{\text{quote}}\,T}{1 + i_{\text{base}}\,T}`,
          where: [
            { sym: 'S, F', def: 'Spot and forward rates, quoted as quote currency per base unit' },
            { sym: String.raw`i_{\text{quote}}, i_{\text{base}}`, def: 'Interest rates in the two currencies' },
            { sym: 'T', def: 'Time to the forward date, in years' },
          ],
          syntax: [
            { sym: String.raw`i_{\text{quote}},\ i_{\text{base}}`, say: String.raw`Read “i quote” and “i base”: the interest rates on the quote and base currencies. The subscripts are labels.` },
            { sym: String.raw`\frac{1 + i_{\text{quote}}\,T}{1 + i_{\text{base}}\,T}`, say: String.raw`Read “one plus the quote rate times T, over one plus the base rate times T”: what one unit of the quote currency grows to, divided by what one unit of the base grows to. Multiply the spot rate by this ratio.` },
            { sym: String.raw`S\cdot`, say: String.raw`Read “S times”: the dot is multiplication. The forward is the spot rate adjusted by the growth ratio.` },
          ],
          worked: {
            title: 'A six-month EUR/USD forward',
            steps: [
              String.raw`Given: EUR/USD spot \(S = 1.0850\) (USD is the quote, EUR the base), \(i_{\text{quote}} = 5\%\), \(i_{\text{base}} = 3.5\%\), \(T = 0.5\).`,
              String.raw`Growth factors: \(1 + 0.05 \times 0.5 = 1.025\) and \(1 + 0.035 \times 0.5 = 1.0175\).`,
              String.raw`Ratio: \(1.025/1.0175 = 1.00737\).`,
              String.raw`Forward: \(F = 1.0850 \times 1.00737 = 1.0930\).`,
              String.raw`Check: $1,085,000 at 5% grows to $1,112,125; the same money as \(\text{EUR } 1{,}000{,}000\) at 3.5% becomes \(\text{EUR } 1{,}017{,}500\), and \(1{,}017{,}500 \times 1.0930 = \$1{,}112{,}125\).`,
            ],
            answer: String.raw`The forward is 1.0930, about 74 pips above spot: the euro pays less interest, so it trades at a forward premium.`,
          },
          caption: 'Covered parity. Investing at home must equal converting, investing abroad, and converting back at the locked-in forward rate. Read F versus S: if the base currency pays a higher rate than the quote currency, F < S (the base trades at a forward discount, as in the worked example below), the extra interest you’d earn is exactly cancelled by a worse locked-in exchange rate, which is the whole point of the arbitrage that enforces this equation.',
        },
        {
          t: 'example',
          title: 'USD/SGD one year forward',
          lines: [
            { label: 'Data', text: 'spot 1.3400; SGD rate 3%; USD rate 4.5%' },
            { label: 'Forward', text: '\\(1.34 \\times 1.03/1.045 = 1.3208\\)' },
            { label: 'Meaning', text: 'the higher-rate USD trades at a forward discount: you get fewer SGD per USD in a year’s time' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{UIP:}\quad E[\%\Delta S] \approx i_{\text{quote}} - i_{\text{base}}`,
          where: [
            { sym: String.raw`E[\%\Delta S]`, def: 'Expected percentage change in the exchange rate over the period' },
            { sym: String.raw`i_{\text{quote}}, i_{\text{base}}`, def: 'Interest rates in the two currencies' },
          ],
          syntax: [
            { sym: String.raw`E[\%\Delta S]`, say: String.raw`Read “the expected percentage change in S”. \(E[\cdot]\) means “the average value of what is inside”, \(\Delta\) means “change in”, and the percent sign says to measure it in percent.` },
            { sym: String.raw`i_{\text{quote}} - i_{\text{base}}`, say: String.raw`Read “quote rate minus base rate”: the interest gap that UIP says the exchange rate should move to cancel.` },
            { sym: String.raw`\approx`, say: String.raw`Read “is roughly equal to”: UIP is an approximation for modest rates.` },
          ],
          worked: {
            title: 'What UIP predicts for EUR/USD',
            steps: [
              String.raw`Given: EUR/USD at 1.0850, USD rate 5% (quote), EUR rate 3.5% (base).`,
              String.raw`Interest gap: \(5.0\% - 3.5\% = 1.5\%\) a year.`,
              String.raw`UIP expects the euro to rise \(1.5\%\): \(1.0850 \times 1.015 = 1.1013\).`,
              String.raw`A carry trader borrows euros at 3.5% and holds dollars at 5%. If the rate stays at 1.0850, the gain is the full 1.5%, about \(\text{EUR } 15{,}000\) per \(\text{EUR } 1{,}000{,}000\).`,
              String.raw`If UIP holds and EUR/USD does rise 1.5%, the euro debt costs 1.5% more and the net gain is about zero.`,
            ],
            answer: String.raw`UIP says the 1.5% gap should be wiped out by a 1.5% rise in EUR/USD; the forward premium puzzle is that it often is not.`,
          },
          caption: 'If UIP held, high-interest currencies would depreciate enough to cancel their extra interest, so no currency would be a free lunch. Empirically they often appreciate instead (Fama, 1984): the sign of the predicted depreciation is frequently wrong, not just its size. That persistent failure is "the forward premium puzzle", and it is exactly what makes the carry trade pay on average, until the rare moment it reverses violently.',
        },
        { t: 'fin-tool', tool: 'forex' },
      ],
    },
    {
      id: 'ppp',
      title: 'Purchasing power parity',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Absolute PPP: } S = \frac{P_{\text{home}}}{P_{\text{foreign}}},\qquad \text{Relative PPP: } \%\Delta S \approx \pi_{\text{home}} - \pi_{\text{foreign}}`,
          where: [
            { sym: 'S', def: 'Exchange rate, home currency per unit of foreign currency' },
            { sym: String.raw`P_{\text{home}}, P_{\text{foreign}}`, def: 'Price levels (cost of the same basket of goods) in each country' },
            { sym: String.raw`\pi_{\text{home}}, \pi_{\text{foreign}}`, def: 'Inflation rates in each country' },
          ],
          syntax: [
            { sym: String.raw`S = \frac{P_{\text{home}}}{P_{\text{foreign}}}`, say: String.raw`Read “S equals home price level over foreign price level”: the price of the same basket at home divided by its price abroad. That ratio is the exchange rate that would make the basket cost the same in both places.` },
            { sym: String.raw`\pi_{\text{home}} - \pi_{\text{foreign}}`, say: String.raw`Read “pi home minus pi foreign”. Here \(\pi\) means the inflation rate (not 3.14159), so this is the inflation gap between the two countries.` },
            { sym: String.raw`\%\Delta S`, say: String.raw`Read “percent change in S”: \(\Delta\) means “change in”. A rise means the home currency weakens, since \(S\) is home currency per unit of foreign.` },
          ],
          worked: {
            title: 'A basket in Britain and the US',
            steps: [
              String.raw`Given: the same basket costs \(\pounds 80\) in Britain (home) and $100 in the US. UK inflation is 4% and US inflation 2%.`,
              String.raw`Absolute PPP: \(S = 80/100 = 0.80\) pounds per dollar, i.e. GBP/USD \(= 1.25\).`,
              String.raw`Relative PPP: \(\%\Delta S \approx 4\% - 2\% = 2\%\).`,
              String.raw`New rate: \(0.80 \times 1.02 \approx 0.816\) pounds per dollar (exactly \(0.80 \times 1.04/1.02 = 0.8157\)).`,
              String.raw`Check: next year the basket costs \(\pounds 83.20\) and $102, and \(83.20/102 = 0.8157\).`,
            ],
            answer: String.raw`The pound should weaken about 2% a year, from 1.25 to roughly 1.226 dollars, to offset Britain’s extra inflation.`,
          },
          caption: 'Countries with higher inflation should see their currencies weaken by roughly the inflation gap, over the long run, otherwise their goods would simply become permanently more expensive than everyone else’s. The Big Mac index below is a rough, real-world check of the absolute version: if the implied rate from burger prices is far from the actual rate, that currency looks over- or under-valued by this measure (though, as the example shows, the gap can persist for years).',
        },
        {
          t: 'example',
          title: 'A Big Mac comparison (illustrative prices)',
          lines: [
            { label: 'Prices', text: 'Big Mac costs S$7.20 in Singapore and US$5.70 in the US' },
            { label: 'Implied rate', text: '\\(7.20/5.70 = 1.263\\) SGD per USD' },
            { label: 'Actual rate', text: '1.34' },
            { label: 'Verdict', text: '\\(1.263/1.34 - 1 \\approx -6\\%\\): by this measure the Singapore dollar is about 6% undervalued' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Burgernomics', text: '*The Economist* launched the Big Mac index in 1986 as a joke way to explain PPP. It caught on, and economists still cite it, partly because it highlights why PPP fails in the short run: rent, wages and taxes make up much of a burger’s price, and none of them can be traded across borders.' },
      ],
    },
    {
      id: 'carry',
      title: 'The carry trade',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Carry return} \approx (i_{\text{high}} - i_{\text{low}}) + \%\Delta S_{\text{high vs low}}`,
          where: [
            { sym: String.raw`i_{\text{high}}, i_{\text{low}}`, def: 'Interest rates of the target (high-rate) and funding (low-rate) currencies' },
            { sym: String.raw`\%\Delta S_{\text{high vs low}}`, def: 'Percentage move of the high-rate currency against the low-rate one' },
          ],
          syntax: [
            { sym: String.raw`i_{\text{high}} - i_{\text{low}}`, say: String.raw`Read “i high minus i low”: the interest rate on the currency you hold minus the rate on the one you borrowed. This gap is the “carry”.` },
            { sym: String.raw`\%\Delta S_{\text{high vs low}}`, say: String.raw`Read “percent change in S, high versus low”: how much the high-rate currency gained (positive) or lost (negative) against the low-rate one over the period.` },
          ],
          worked: {
            title: 'A yen carry trade',
            steps: [
              String.raw`Given: borrow \(\yen 100{,}000{,}000\) at 0.5%, convert to Australian dollars and invest at 4.5%.`,
              String.raw`Interest gap: \(4.5\% - 0.5\% = 4.0\%\), worth \(\yen 4{,}000{,}000\).`,
              String.raw`Calm year, AUD up 1% against the yen: \(4.0\% + 1.0\% = +5.0\%\), or \(\yen 5{,}000{,}000\).`,
              String.raw`Unwind year, AUD down 8%: \(4.0\% - 8.0\% = -4.0\%\), or \(-\yen 4{,}000{,}000\).`,
              String.raw`Breakeven: the AUD can fall 4% before the whole interest gap is cancelled.`,
            ],
            answer: String.raw`A 4% steady income can become a 4% loss in one bad year, which is the carry trade’s well-known risk.`,
          },
          caption: 'Earn the interest gap, plus or minus the move in the exchange rate. In calm periods the exchange-rate term tends to be small and the interest gap dominates, so the strategy looks like steady, almost risk-free income, which is exactly the illusion that makes a sudden, sharp move against it (the second term turning sharply negative) so damaging, as the chart below shows.',
        },
        {
          t: 'plot',
          title: 'Carry trades: slow gains, sudden falls (stylised)',
          x: [0, 20],
          y: [80, 140],
          xLabel: 'Time',
          yLabel: 'Cumulative value',
          curves: [{ f: (t: number) => (t < 15 ? 100 + 2.5 * t : 137.5 - 9 * (t - 15)) + 1.5 * Math.sin(t * 2), label: 'Carry strategy' }],
          shade: [{ from: 15, to: 18, label: 'Unwind', color: 'var(--pink)' }],
          caption: 'Carry pays steadily in calm times and crashes in panics, as in 2008 and in the sharp yen carry-trade unwind of August 2024.',
        },
      ],
    },
  ],
  sources: [
    'Fama, E. F. (1984). Forward and spot exchange rates. *Journal of Monetary Economics*, 14(3), 319–338.',
    'Rogoff, K. (1996). The purchasing power parity puzzle. *Journal of Economic Literature*, 34(2), 647–668.',
    'Brunnermeier, M. K., Nagel, S., & Pedersen, L. H. (2008). Carry trades and currency crashes. *NBER Macroeconomics Annual*, 23, 313–347.',
    'The Economist. (n.d.). *The Big Mac index*. economist.com.',
  ],
  related: ['finance/assets/forex/basics', 'finance/economics/central-banks', 'finance/economics/inflation-rates'],
}

export default guide
