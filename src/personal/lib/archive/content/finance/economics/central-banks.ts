import type { Guide } from '../../../guide'

const taylor = (pi: number, gap = 0) => 2 + pi + 0.5 * (pi - 2) + 0.5 * gap

const guide: Guide = {
  intro:
    'Central banks such as the US Federal Reserve, the European Central Bank and the Monetary Authority of Singapore manage money and credit to keep inflation low and stable and the economy steady. Their decisions move every market, which is why traders hang on every word of their announcements.',
  nutshell: [
    'Most central banks set a **short-term policy interest rate**; raising it cools the economy, cutting it stimulates.',
    'Many target inflation of about **2%** a year.',
    'In crises they also buy bonds to push long-term rates down: **quantitative easing (QE)**.',
    'The **Taylor rule** gives a simple formula for where the policy rate "should" be.',
    'Singapore is different: the MAS steers the **exchange rate**, not an interest rate.',
  ],
  sections: [
    {
      id: 'tools',
      title: 'How monetary policy works',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Policy rate changes', body: 'The central bank raises its rate (say, from 3% to 4%).' },
            { title: 'Borrowing costs rise', body: 'Banks charge more for mortgages, car loans and business loans; savers earn more.' },
            { title: 'Spending slows', body: 'Households and firms borrow and spend less; asset prices tend to fall as future cash flows are discounted more.' },
            { title: 'Inflation eases', body: 'With demand cooler, price rises slow, typically with a lag of one to two years.' },
          ],
        },
        {
          t: 'cards',
          items: [
            { title: 'Quantitative easing', body: 'Buying government bonds (and sometimes other assets) with newly created reserves, to lower long-term rates when the policy rate is already near zero.' },
            { title: 'Forward guidance', body: 'Telling markets what policy is likely to be, so long-term rates move in advance.' },
            { title: 'Lender of last resort', body: 'Lending to solvent banks in a panic to prevent bank runs.' },
          ],
        },
      ],
    },
    {
      id: 'taylor',
      title: 'The Taylor rule',
      blocks: [
        {
          t: 'math',
          tex: String.raw`i = r^{*} + \pi + 0.5\,(\pi - \pi^{*}) + 0.5\,(y - y^{*})`,
          syntax: [
            { sym: String.raw`r^{*}, \pi^{*}`, say: String.raw`Read "r star" and "pi star": the star marks a target or neutral level (not today’s actual figure).` },
            { sym: String.raw`0.5\,(\pi - \pi^{*})`, say: String.raw`Read "a half times inflation minus target inflation": the inflation gap. If inflation is above target, add half of the overshoot to the rate; if below, subtract.` },
            { sym: String.raw`0.5\,(y - y^{*})`, say: String.raw`The output gap term: add half of how far GDP is above potential (subtract if below).` },
          ],
          worked: {
            steps: [
              String.raw`Given: \(r^* = 2\%\), \(\pi^* = 2\%\); inflation is \(\pi = 3\%\); output is 2% below potential, so \(y - y^* = -2\).`,
              String.raw`Neutral real rate plus inflation: \(2 + 3 = 5\).`,
              String.raw`Inflation gap: \(0.5 \times (3 - 2) = +0.5\).`,
              String.raw`Output gap: \(0.5 \times (-2) = -1.0\).`,
              String.raw`Sum: \(i = 5 + 0.5 - 1.0 = 4.5\%\).`,
            ],
            answer: String.raw`The rule recommends a policy rate of 4.5%: above neutral because inflation is a little high, but pulled down by the weak economy.`,
          },
          where: [
            { sym: 'i', def: 'Recommended policy interest rate' },
            { sym: 'r^*', def: 'Neutral real interest rate (Taylor used 2%)' },
            { sym: String.raw`\pi, \pi^*`, def: 'Inflation and the inflation target (2%)' },
            { sym: 'y − y^*', def: 'Output gap: % by which GDP is above its potential' },
          ],
          caption: 'John Taylor proposed it in 1993 as a description of how the Fed had actually behaved. Note the rate rises by 1.5 points for each 1-point rise in inflation, more than one for one, so real rates rise when inflation rises.',
        },
        {
          t: 'example',
          title: 'Inflation at 4%, economy 1% above potential',
          lines: [{ label: 'Rule', text: '\\(i = 2 + 4 + 0.5(4 - 2) + 0.5(1) = 7.5\\%\\)' }],
        },
        {
          t: 'metric',
          name: 'the policy interest rate',
          shows: 'The price the central bank charges (or pays) banks for very short-term borrowing. It is the lever through which a handful of economists aim to influence an entire economy of millions of borrowing and saving decisions, because banks reset the rates they offer customers largely in line with it.',
          eli5: 'The policy rate is like a thermostat for the whole economy. Raising it pulls cold air in, borrowing becomes more expensive, people and businesses spend and invest less, and the economy (and inflation) cools down. Cutting it turns the heat up, cheaper borrowing encourages spending and investment, warming the economy back up.',
          higher: 'Borrowing (mortgages, car loans, business loans) becomes more expensive, saving becomes more rewarding, spending and investment tend to slow, and, with a lag of a year or more, inflation tends to ease. Higher rates also pull down the present value of future company profits, which is a major reason stock valuations (especially of fast-growing companies, whose profits are further in the future) often fall when rates rise.',
          lower: 'Borrowing becomes cheaper, saving pays less, and spending and investment are encouraged, used to fight a slowdown or recession. Very low or zero rates for a long time can also inflate asset prices (stocks, housing) as investors reach for return elsewhere, and leave the central bank with little room to cut further if a new shock arrives, which is why many then turn to quantitative easing instead.',
          typical: 'Rates near 0% were common across major economies for much of the 2010s; rates of 4–5%+ were more typical historically and returned in 2022–23 as central banks fought a surge in inflation. "Neutral"neither stimulating nor restricting the economy, is usually estimated at around 2–3% in real terms plus the inflation target.',
        },
        {
          t: 'plot',
          title: 'Taylor-rule policy rate against inflation (no output gap)',
          x: [0, 8],
          y: [0, 14],
          xLabel: 'Inflation (%)',
          yLabel: 'Policy rate (%)',
          curves: [
            { f: (p: number) => taylor(p), label: 'Taylor rule' },
            { f: (p: number) => p, label: 'Policy rate = inflation (zero real rate)', dashed: true },
          ],
          points: [{ x: 2, y: taylor(2), label: 'At target: 4%' }],
        },
      ],
    },
    {
      id: 'singapore',
      title: 'Singapore: steering the exchange rate',
      blocks: [
        {
          t: 'p',
          text: 'Because trade is so large relative to its economy, prices in Singapore depend heavily on import costs. Since 1981, the Monetary Authority of Singapore (MAS) has managed the Singapore dollar against an undisclosed basket of its trading partners’ currencies (the **S$NEER**), within an undisclosed band. It adjusts the band’s **slope** (the pace of appreciation), **width** and **centre**. Letting the dollar strengthen faster makes imports cheaper and cools inflation, much as a rate rise would elsewhere. Singapore’s interest rates are then largely set by global rates.',
        },
        { t: 'callout', tone: 'fact', title: 'The oldest central bank', text: 'Sweden’s Riksbank, founded in 1668, is the oldest central bank still operating; the Bank of England followed in 1694. The US Federal Reserve only came in 1913, after a series of banking panics.' },
      ],
    },
  ],
  sources: [
    'Taylor, J. B. (1993). Discretion versus policy rules in practice. *Carnegie-Rochester Conference Series on Public Policy*, 39, 195–214.',
    'Monetary Authority of Singapore. (n.d.). *Monetary policy framework*. mas.gov.sg.',
    'Bernanke, B. S. (2015). *The Courage to Act*. W. W. Norton.',
  ],
  related: ['finance/economics/inflation-rates', 'finance/economics/gdp-cycle'],
}

export default guide
