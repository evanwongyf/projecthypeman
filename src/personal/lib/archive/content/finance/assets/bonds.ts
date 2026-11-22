import type { Guide } from '../../../guide'
import { bondPrice } from '../../../../finance/derivatives'

const guide: Guide = {
  intro:
    'A bond is a loan you make to a government or company: it pays fixed interest (the **coupon**) and returns the **face value** at **maturity**. Bonds look simple, but their prices move with interest rates and credit risk in ways that reward a bit of maths. This guide covers pricing, yields, duration, convexity and credit.',
  nutshell: [
    'A bond’s price is the present value of its coupons and face value, discounted at its yield.',
    '**Yield to maturity (YTM)** is the single rate that makes that present value equal the price.',
    'Prices move opposite to yields; **duration** measures how much, **convexity** refines it.',
    'Riskier borrowers pay a **credit spread** over government yields; ratings grade that risk.',
    'Zero-coupon bonds pay nothing until maturity, so their duration equals their maturity.',
  ],
  sections: [
    {
      id: 'pricing',
      title: 'Pricing a bond',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P = \sum_{t=1}^{mn} \frac{C/m}{\left(1 + y/m\right)^{t}} + \frac{F}{\left(1 + y/m\right)^{mn}}`,
          where: [
            { sym: 'P', def: 'The bond’s fair price today' },
            { sym: 'C', def: 'Annual coupon in dollars (coupon rate × face value)' },
            { sym: 'F', def: 'Face (par) value repaid at maturity' },
            { sym: 'y', def: 'Yield to maturity (annual)' },
            { sym: 'm, n', def: 'Coupons per year (2 for most bonds) and years to maturity' },
            { sym: 't', def: 'Each coupon period, counted from 1 to the last one at maturity' },
          ],
          syntax: [
            { sym: String.raw`\sum_{t=1}^{mn}`, say: String.raw`Read “the sum from t equals 1 to m n”: do the thing after it for \(t = 1, 2, \ldots, mn\) and add all the results. Here that means one discounted coupon per period.` },
            { sym: String.raw`mn`, say: String.raw`Read “m times n”: letters written side by side are multiplied. With \(m = 2\) coupons a year over \(n = 3\) years, \(mn = 6\) payments.` },
            { sym: String.raw`\frac{C/m}{(1 + y/m)^{t}}`, say: String.raw`Read “C over m, divided by one plus y over m, to the power t”: one period’s coupon, shrunk by the per-period yield compounded \(t\) times.` },
          ],
          worked: {
            title: 'Pricing a 3-year semiannual bond',
            steps: [
              String.raw`Given: face \(F = \$1{,}000\), 5% coupon paid twice a year, 3 years, yield \(y = 6\%\), so \(C/m = 25\), \(y/m = 3\%\), \(mn = 6\).`,
              String.raw`Discounted coupons: \(\dfrac{25}{1.03} + \dfrac{25}{1.03^2} + \cdots + \dfrac{25}{1.03^6} = 24.27 + 23.56 + 22.88 + 22.21 + 21.57 + 20.94 = 135.43\).`,
              String.raw`Discounted face value: \(1000/1.03^6 = 837.48\).`,
              String.raw`Price: \(P = 135.43 + 837.48 = 972.91\).`,
            ],
            answer: String.raw`The bond is worth $972.91, a discount to par, because the 6% yield the market demands is above the 5% coupon.`,
          },
          caption: 'P is just the present value of every future payment, added up. Read it as a seesaw against y: plug in a higher y and every term shrinks, so P falls; plug in a lower y and P rises. That inverse relationship is the single most important fact about bond prices.',
        },
        {
          t: 'table',
          head: ['If the yield is…', 'The bond trades at…', 'Because'],
          rows: [
            ['Equal to the coupon rate', 'Par (100)', 'Its coupon exactly matches what the market requires'],
            ['Above the coupon rate', 'A discount (below 100)', 'Buyers need a price gain to make up for the low coupon'],
            ['Below the coupon rate', 'A premium (above 100)', 'The high coupon is worth paying extra for'],
          ],
        },
        {
          t: 'plot',
          title: 'Price of 5% bonds against yield: 2-year and 30-year',
          x: [0.01, 0.1],
          y: [40, 200],
          xLabel: 'Yield to maturity',
          yLabel: 'Price (face 100)',
          curves: [
            { f: (y: number) => bondPrice(100, 0.05, y, 2), label: '2-year' },
            { f: (y: number) => bondPrice(100, 0.05, y, 30), label: '30-year' },
          ],
          points: [{ x: 0.05, y: 100, label: 'Par at 5%' }],
          caption: 'Longer bonds are far more sensitive to yield changes: the 30-year curve is much steeper.',
        },
      ],
    },
    {
      id: 'yields',
      title: 'Yields',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Current yield} = \frac{C}{P},\qquad \text{YTM: solve } P = \sum \frac{CF_t}{(1+y)^t} \text{ for } y`,
          where: [
            { sym: 'C', def: 'Annual coupon in dollars' },
            { sym: 'P', def: 'The bond’s current market price' },
            { sym: String.raw`CF_t`, def: 'The cash flow (coupon, plus face value at the last period) received at time t' },
            { sym: 'y', def: 'Yield to maturity, the single discount rate that makes both sides equal' },
          ],
          syntax: [
            { sym: String.raw`\sum \frac{CF_t}{(1+y)^t}`, say: String.raw`Read “the sum of C F sub t over one plus y to the t”. With no limits written, it means add up every payment, each discounted by \(t\) years of yield.` },
            { sym: String.raw`\text{solve } \ldots \text{ for } y`, say: String.raw`Read “solve for y”: find the yield that makes the two sides equal. No tidy formula exists, so you try values and refine.` },
          ],
          worked: {
            title: 'Current yield against YTM',
            steps: [
              String.raw`Given: face $1,000, 6% annual coupon ($60), 5 years, price $950.`,
              String.raw`Current yield: \(60/950 = 6.32\%\).`,
              String.raw`Try \(y = 7\%\): the bond’s present value is $959.00, above 950, so the yield must be higher.`,
              String.raw`Try \(y = 7.2\%\): $951.06, still above 950. Try \(y = 7.25\%\): $949.09, now below.`,
              String.raw`Refine: \(y \approx 7.23\%\) gives $950.`,
            ],
            answer: String.raw`YTM \(\approx 7.23\%\), above the 6.32% current yield, because the YTM also counts the $50 gain as the price rises to par.`,
          },
          caption: 'Current yield is the quick, rough version: it only looks at this year’s coupon income against today’s price, so it ignores any gain or loss from the price converging to face value by maturity. YTM has no closed-form solution for coupon bonds; it is found by trial and error (the calculator below uses bisection). It assumes you hold to maturity and reinvest coupons at the same yield.',
        },
        {
          t: 'metric',
          name: 'yield to maturity (YTM)',
          shows: 'The total annualised return you would earn by buying a bond today at its current price and holding it until it matures, assuming every coupon is reinvested at that same rate. Unlike the coupon rate (fixed forever at issuance) or current yield (just coupon ÷ price), YTM accounts for the whole picture: coupons received, the gain or loss from buying above or below face value, and the time value of money.',
          eli5: 'The coupon rate printed on a bond is like the sticker price on a used car, fixed and doesn\'t change. But if the car\'s actual selling price has dropped because it\'s older and the market wants a better deal, your real return from buying it is higher than the sticker suggests. YTM is a bond\'s "real" return once you account for what you actually paid, not what was printed on it at birth.',
          higher: 'A better annualised return for buying at today\'s price, often because the bond\'s price has fallen (yields and prices move opposite ways, as the table above shows), which can reflect either a general rise in interest rates across the economy, or specifically rising worry about this borrower\'s ability to repay (reflected in a wider credit spread, below).',
          lower: 'A smaller annualised return for buying at today\'s price, the bond is relatively expensive relative to its fixed payments, typically because overall interest rates have fallen, or because the market has grown more confident in this borrower (demanding a smaller credit spread).',
          typical: 'Compare a bond\'s YTM against government bond yields of similar maturity (the "risk-free" benchmark) to see how much extra return the market is demanding for its specific credit and liquidity risk, the gap is the credit spread discussed below.',
        },
        {
          t: 'math',
          tex: String.raw`P_{\text{zero}} = \frac{F}{(1+y)^n}\quad\Longrightarrow\quad y = \left(\frac{F}{P}\right)^{1/n} - 1`,
          where: [
            { sym: String.raw`P_{\text{zero}}`, def: 'Price of the zero-coupon bond today' },
            { sym: 'F', def: 'Face value repaid at maturity' },
            { sym: 'y', def: 'Implied annual yield' },
            { sym: 'n', def: 'Years to maturity' },
          ],
          syntax: [
            { sym: String.raw`\Longrightarrow`, say: String.raw`Read “implies” or “so”: the second formula is the first one rearranged to isolate \(y\).` },
            { sym: String.raw`\left(\frac{F}{P}\right)^{1/n}`, say: String.raw`Read “F over P, all to the power one over n”: the n-th root. Raising to \(1/n\) undoes raising to \(n\). On a calculator, for \(n = 4\) use the power \(0.25\).` },
          ],
          worked: {
            title: 'Yield on a 4-year zero',
            steps: [
              String.raw`Given: face \(F = 1{,}000\), price \(P = 820\), \(n = 4\) years.`,
              String.raw`Ratio: \(F/P = 1000/820 = 1.2195\).`,
              String.raw`Fourth root: \(1.2195^{1/4} = 1.0509\).`,
              String.raw`Subtract 1: \(y = 0.0509 = 5.09\%\).`,
              String.raw`Check: \(820 \times 1.0509^4 \approx 1{,}000\).`,
            ],
            answer: String.raw`The zero yields about 5.09% a year, all of it earned from the discount to face value.`,
          },
          caption: 'A zero-coupon bond: buy at 78.35, receive 100 in 5 years, and y = (100/78.35)^(1/5) − 1 = 5.0%. All of the return comes from the discount to face value, not from coupons, so a deeper discount (a lower price for the same F and n) always means a higher implied yield.',
        },
      ],
    },
    {
      id: 'duration',
      title: 'Duration and convexity',
      blocks: [
        {
          t: 'math',
          tex: String.raw`D_{\text{Mac}} = \frac{1}{P}\sum_{t} t\cdot\frac{CF_t}{(1+y)^t},\qquad D_{\text{mod}} = \frac{D_{\text{Mac}}}{1 + y/m}`,
          where: [
            { sym: String.raw`D_{\text{Mac}}`, def: 'Macaulay duration, in years' },
            { sym: String.raw`D_{\text{mod}}`, def: 'Modified duration, the price-sensitivity version' },
            { sym: 'P', def: 'The bond’s current price' },
            { sym: String.raw`CF_t`, def: 'Cash flow received at time t' },
            { sym: 'y, m', def: 'Yield to maturity and coupons per year' },
          ],
          syntax: [
            { sym: String.raw`\frac{1}{P}\sum_{t} t\cdot\frac{CF_t}{(1+y)^t}`, say: String.raw`Read “one over P, times the sum over every payment date t of t times its discounted cash flow”. Each date \(t\) is weighted by the share of the price that payment’s present value makes up, so it is a weighted average of times.` },
            { sym: String.raw`D_{\text{Mac}},\ D_{\text{mod}}`, say: String.raw`Read “D Mac” and “D mod”: Macaulay and modified duration. The words in the subscripts are labels only.` },
            { sym: String.raw`1 + y/m`, say: String.raw`Read “one plus y over m”: the per-period growth factor. Dividing by it turns years of average waiting into price sensitivity.` },
          ],
          worked: {
            title: 'Duration of a 3-year 5% bond',
            steps: [
              String.raw`Given: face 100, 5% annual coupon, 3 years, \(y = 4\%\), \(m = 1\), so cash flows 5, 5, 105.`,
              String.raw`Present values: \(4.808\), \(4.623\) and \(93.345\), so \(P = 102.775\).`,
              String.raw`Time-weighted: \(1 \times 4.808 + 2 \times 4.623 + 3 \times 93.345 = 294.087\).`,
              String.raw`\(D_{\text{Mac}} = 294.087/102.775 = 2.861\) years.`,
              String.raw`\(D_{\text{mod}} = 2.861/1.04 = 2.751\).`,
            ],
            answer: String.raw`Duration is 2.86 years, shorter than the 3-year maturity because the coupons come back early; a 1-point rise in yield costs about 2.75% of the price.`,
          },
          caption: 'Macaulay duration is the present-value-weighted average time until you are paid, in years, a bond returning all its cash in one lump at year 10 has duration 10, but a bond paying steady coupons along the way has a duration shorter than its actual maturity, because some of your money comes back sooner. Modified duration converts that into price sensitivity, read directly below.',
        },
        {
          t: 'metric',
          name: 'modified duration',
          shows: 'The approximate percentage a bond’s price will move for a 1-percentage-point change in yield, the single number bond investors use to gauge interest-rate risk at a glance, the bond-market equivalent of an option’s delta.',
          eli5: 'Think of a bond as a seesaw balanced on the word "yield". Duration is how long the plank is: a short plank (low duration) barely tips when yields wobble, but a long plank (high duration) swings wildly for the same small push. A 30-year bond is a much longer plank than a 2-year bond, which is why the chart above shows its price curve so much steeper.',
          higher: 'A bigger price swing for the same change in yield, a duration of 15 means a 1-point rise in yields costs roughly 15% of the bond’s price. Long-maturity bonds and low-coupon (or zero-coupon) bonds have the highest duration, because more of their value sits far in the future, heavily discounted and heavily exposed to rate changes.',
          lower: 'A smaller price swing for the same change in yield. Short-maturity bonds and high-coupon bonds have low duration, because most of their value is returned to you soon, before rates have much chance to move against you. Cash and very short bills have duration near zero.',
          typical: 'A rule of thumb: duration is roughly the number of years until you get most of your money back, so a 10-year bond typically has duration somewhere in the 7–10 range, less if its coupon is high. Fund fact sheets quote duration precisely so you can compare interest-rate risk across bonds of different maturities and coupons on one scale.',
        },
        {
          t: 'math',
          tex: String.raw`\frac{\Delta P}{P} \approx -D_{\text{mod}}\,\Delta y + \frac{1}{2}\,C\,(\Delta y)^2`,
          where: [
            { sym: String.raw`\Delta P/P`, def: 'The resulting percentage change in the bond’s price' },
            { sym: String.raw`D_{\text{mod}}`, def: 'Modified duration' },
            { sym: String.raw`\Delta y`, def: 'Change in yield (0.01 = 1 percentage point)' },
            { sym: 'C', def: 'Convexity: how much the price–yield curve bends' },
          ],
          syntax: [
            { sym: String.raw`\frac{\Delta P}{P}`, say: String.raw`Read “delta P over P”: the change in price as a fraction of price, i.e. the percentage move. Here \(\Delta\) means “change in”.` },
            { sym: String.raw`-D_{\text{mod}}\,\Delta y`, say: String.raw`Read “minus D mod times delta y”: the minus sign says price falls when yield rises.` },
            { sym: String.raw`\tfrac12 C(\Delta y)^2`, say: String.raw`Read “a half times C times delta y, squared”. Squaring makes the term positive whichever way yields move, so convexity always helps.` },
          ],
          worked: {
            title: 'Duration and convexity on the same bond',
            steps: [
              String.raw`Given the bond above: \(P = 102.775\), \(D_{\text{mod}} = 2.751\), convexity \(C = 10.41\) (from \(C = \frac{1}{P(1+y)^2}\sum t(t+1)\frac{CF_t}{(1+y)^t}\)). Yields rise from 4% to 5%, so \(\Delta y = 0.01\).`,
              String.raw`Duration term: \(-2.751 \times 0.01 = -2.751\%\).`,
              String.raw`Convexity term: \(\tfrac12 \times 10.41 \times 0.01^2 = +0.052\%\).`,
              String.raw`Estimate: \(-2.751\% + 0.052\% = -2.70\%\). Exact: the bond reprices at 100.00, and \(100/102.775 - 1 = -2.70\%\).`,
              String.raw`If yields fall 1 point instead: estimate \(+2.751\% + 0.052\% = +2.80\%\); exact price 105.657 gives \(+2.80\%\).`,
            ],
            answer: String.raw`Duration alone says ±2.75%, but the true moves are −2.70% and +2.80%: convexity makes gains bigger than losses.`,
          },
          caption: 'A second-order Taylor approximation of the price–yield curve: the first term (duration) gives a straight-line estimate, and the second (convexity) corrects for the curve’s bend. Positive convexity means losses from rising yields are smaller than gains from falling yields of the same size, a bond with higher convexity is a strictly better bet than one with lower convexity at the same duration and yield.',
        },
        { t: 'fin-tool', tool: 'bond' },
        { t: 'callout', tone: 'fact', title: 'A bond that never matures', text: 'British "consols" were perpetual bonds paying a coupon forever. Their value was simply C / y (the Gordon formula with no growth). The last of them, some dating back to the 18th century, were finally repaid by the UK government in 2015.' },
      ],
    },
    {
      id: 'credit',
      title: 'Credit risk and ratings',
      blocks: [
        {
          t: 'math',
          tex: String.raw`y_{\text{corporate}} = y_{\text{government}} + \text{credit spread},\qquad \text{Expected loss} = PD \times LGD \times EAD`,
          where: [
            { sym: 'PD', def: 'Probability of default' },
            { sym: 'LGD', def: 'Loss given default (1 − recovery rate)' },
            { sym: 'EAD', def: 'Exposure at default' },
          ],
          syntax: [
            { sym: String.raw`y_{\text{corporate}}`, say: String.raw`Read “y corporate”: the yield on the company’s bond. The subscript names whose yield it is.` },
            { sym: String.raw`PD \times LGD \times EAD`, say: String.raw`Read “P D times L G D times E A D”: each abbreviation is one quantity, spoken letter by letter. Multiply a probability, a loss fraction and a dollar exposure to get an expected dollar loss.` },
          ],
          worked: {
            title: 'Spread and expected loss',
            steps: [
              String.raw`Given: government yield 4.2%, credit spread 1.8%.`,
              String.raw`Corporate yield: \(4.2\% + 1.8\% = 6.0\%\).`,
              String.raw`For a $5,000,000 holding: \(PD = 2\%\) a year, recovery 40% so \(LGD = 1 - 0.40 = 60\%\), \(EAD = \$5{,}000{,}000\).`,
              String.raw`Expected loss: \(0.02 \times 0.60 \times 5{,}000{,}000 = \$60{,}000\) a year.`,
              String.raw`As a rate: \(0.02 \times 0.60 = 1.2\%\), below the 1.8% spread.`,
            ],
            answer: String.raw`Expected default losses eat 1.2 of the 1.8 points of spread; the rest pays for liquidity and for the risk that defaults arrive in bad times.`,
          },
          caption: 'The credit spread is the market’s live risk premium, read just below. Expected loss translates that risk into a single dollar figure: even a borrower that is fairly likely to default (high PD) may be a small expected loss if little is owed (low EAD) or most of it would be recovered (low LGD), which is why lenders look at all three together rather than PD alone.',
        },
        {
          t: 'metric',
          name: 'the credit spread',
          shows: 'The extra yield a borrower must offer over a safe government bond of the same maturity, to compensate lenders for the risk that this borrower might not repay in full. It is the market\'s real-time price tag on default risk, a live, constantly updated number, unlike a credit rating, which only changes occasionally.',
          eli5: 'If a friend you trust completely asks to borrow $100 and promises to pay back $103 in a year, you might accept 3% interest. If a stranger with a shaky job history asks for the same loan, you\'d want more, maybe 8%, to make the risk worth it. The extra 5% is the credit spread: the price of uncertainty about getting your money back.',
          higher: 'The market is demanding more compensation for lending to this borrower, reflecting greater perceived risk of default, whether from a specific company\'s troubles, a whole industry under stress, or a general flight to safety during market panic (spreads widen across the board in crises, even for decent borrowers, as lenders become more risk-averse everywhere at once).',
          lower: 'The market sees this borrower as very safe, or is generally feeling confident and willing to take on credit risk cheaply ("spreads are tight"). Very tight spreads across the whole market are sometimes read as a sign of complacency, investors not being paid much for risks that could resurface.',
          typical: 'Investment-grade corporate spreads often run roughly 0.5–2 percentage points over government bonds in normal times; high-yield ("junk") spreads often run 3–8+ points, and spreads for both can spike dramatically wider during recessions or credit crises as the market reprices default risk upward all at once.',
        },
        {
          t: 'table',
          head: ['S&P / Fitch', 'Moody’s', 'Grade', 'Meaning'],
          rows: [
            ['AAA', 'Aaa', 'Investment grade', 'Extremely strong'],
            ['AA', 'Aa', 'Investment grade', 'Very strong'],
            ['A', 'A', 'Investment grade', 'Strong'],
            ['BBB', 'Baa', 'Investment grade (lowest)', 'Adequate'],
            ['BB', 'Ba', 'High yield ("junk")', 'Speculative'],
            ['B', 'B', 'High yield', 'Highly speculative'],
            ['CCC and below', 'Caa and below', 'High yield / distressed', 'Substantial risk to default'],
          ],
          caption: 'The line between BBB− and BB+ matters: many funds may only hold investment grade, so a downgrade across it ("fallen angel") can force selling.',
        },
      ],
    },
  ],
  sources: [
    'Fabozzi, F. J. (2012). *Bond Markets, Analysis, and Strategies* (8th ed.). Pearson.',
    'Macaulay, F. R. (1938). *Some Theoretical Problems Suggested by the Movements of Interest Rates, Bond Yields and Stock Prices*. NBER.',
    'S&P Global Ratings. (2024). *Default, Transition, and Recovery: Annual Global Corporate Default Study*.',
  ],
  related: ['finance/economics/inflation-rates', 'finance/assets/overview', 'finance/foundations/time-value'],
}

export default guide
