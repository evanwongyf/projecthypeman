import type { Guide } from '../../../guide'

const bond = (y: number) => {
  let p = 0
  for (let t = 1; t <= 10; t++) p += 5 / (1 + y) ** t
  return p + 100 / (1 + y) ** 10
}

const guide: Guide = {
  intro:
    'Inflation is a rise in the general level of prices, which means each dollar buys less. Interest rates are the price of money over time. Together they drive bond prices, mortgage costs, savings, company valuations and the decisions of central banks.',
  nutshell: [
    'Inflation is usually measured by the **consumer price index (CPI)**: the cost of a typical basket of goods.',
    'The **real** interest rate is the nominal rate minus inflation (approximately): the **Fisher equation**.',
    'Bond prices move **opposite** to interest rates.',
    'Higher rates lower the present value of future cash flows, so they tend to pull down stock valuations, especially of fast-growing companies.',
    'At 3% inflation, prices double in about 24 years (rule of 72).',
  ],
  sections: [
    {
      id: 'cpi',
      title: 'Measuring inflation',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\pi_t = \frac{CPI_t - CPI_{t-1}}{CPI_{t-1}}`,
          syntax: [
            { sym: String.raw`\pi_t`, say: String.raw`Read "pi sub t": the inflation rate in period t. Here pi is only a Greek letter, not 3.14159.` },
            { sym: String.raw`CPI_{t-1}`, say: String.raw`Read "CPI sub t minus 1": the index in the previous period; the subscript t-1 means one period earlier.` },
            { sym: String.raw`\frac{CPI_t - CPI_{t-1}}{CPI_{t-1}}`, say: String.raw`Change divided by the old level: the percentage change from last period.` },
          ],
          worked: {
            steps: [
              String.raw`Given: CPI was 300.0 a year ago and is 309.3 now.`,
              String.raw`Change: \(309.3 - 300.0 = 9.3\).`,
              String.raw`Divide by the old level: \(\pi = \frac{9.3}{300.0} = 0.031\).`,
            ],
            answer: String.raw`Annual inflation is 3.1%: the same basket costs 3.1% more than a year ago.`,
          },
          where: [
            { sym: String.raw`\pi_t`, def: 'The inflation rate over the period' },
            { sym: 'CPI_t', def: 'Consumer price index: the cost of a fixed basket relative to a base year (= 100)' },
          ],
          caption: 'If the CPI rises from 120 to 123.6, inflation is 3.6 / 120 = 3%.',
        },
        {
          t: 'metric',
          name: 'the inflation rate (π)',
          shows: 'How fast the cost of living is rising, the percentage increase, over a year, in the price of a fixed "basket" of goods and services a typical household buys. It is the single most watched number in macroeconomics, because it drives central-bank decisions, wage negotiations, pension increases and how far your savings will stretch.',
          eli5: 'If a cinema ticket cost $10 last year and $10.30 this year, that is 3% inflation for cinema tickets. The CPI does the same sum, just averaged across thousands of things people buy, groceries, rent, haircuts, bus fares, weighted by how much of the typical budget each takes up.',
          higher: 'Money loses purchasing power faster. Prices you pay rise quickly, the real value of cash and fixed-rate savings erodes, lenders demand higher interest rates to compensate, and central banks usually respond by raising rates to cool the economy (see the [central banks](@finance/economics/central-banks) guide). Very high inflation (hyperinflation) can destroy a currency entirely, as Hungary and Zimbabwe show below.',
          lower: 'Prices are more stable, money holds its value better, and interest rates can stay lower. But inflation that is too low, or negative (**deflation**), has its own dangers: people delay purchases expecting further price falls, debts become harder to repay in real terms, and central banks have less room to cut rates to fight a downturn, which is why most target a small positive number rather than zero.',
          typical: 'Most developed-economy central banks target about 2% a year as "price stability". Below roughly 0–1% raises deflation worries; above about 4–5% is usually considered uncomfortably high and triggers a policy response; hyperinflation is conventionally defined as above 50% a month.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Purchasing power after } n \text{ years} = \frac{1}{(1 + \pi)^n}`,
          syntax: [
            { sym: String.raw`\frac{1}{(1+\pi)^n}`, say: String.raw`Read "one over one plus pi to the n": the reciprocal of n years of price growth. It is the same discount factor used in present values.` },
          ],
          worked: {
            steps: [
              String.raw`Given: inflation averages \(\pi = 2.5\%\) a year for \(n = 30\) years.`,
              String.raw`Price growth: \(1.025^{30} \approx 2.0976\).`,
              String.raw`Reciprocal: \(1/2.0976 \approx 0.4767\).`,
              String.raw`Check at 10 years: \(1/1.025^{10} \approx 0.781\).`,
            ],
            answer: String.raw`After 30 years each dollar buys only about 48 cents of today’s goods, even at a "low" 2.5% inflation.`,
          },
          where: [
            { sym: 'n', def: 'Number of years' },
            { sym: String.raw`\pi`, def: 'Average annual inflation rate over that period' },
          ],
          caption: 'A ratio close to 1 means your money has barely lost value; the closer it gets to 0, the more of your original buying power has been quietly eaten away. At 3% a year for 20 years, $1 buys what about 55 cents buys today, the drop is easy to underestimate because it happens a little at a time rather than all at once.',
        },
        {
          t: 'plot',
          title: 'What $100 buys after years of inflation',
          x: [0, 40],
          y: [0, 100],
          xLabel: 'Years',
          yLabel: 'Real value of $100',
          curves: [
            { f: (t: number) => 100 / 1.02 ** t, label: '2% inflation' },
            { f: (t: number) => 100 / 1.04 ** t, label: '4% inflation' },
            { f: (t: number) => 100 / 1.08 ** t, label: '8% inflation' },
          ],
        },
      ],
    },
    {
      id: 'fisher',
      title: 'Real and nominal: the Fisher equation',
      blocks: [
        {
          t: 'math',
          tex: String.raw`(1 + i) = (1 + r)(1 + \pi)\qquad\Longrightarrow\qquad i \approx r + \pi`,
          syntax: [
            { sym: String.raw`(1 + r)(1 + \pi)`, say: String.raw`Read "one plus r times one plus pi": two layers of growth multiply: your money grows by the real rate on top of prices growing by inflation.` },
            { sym: String.raw`\Longrightarrow`, say: String.raw`Read "implies".` },
            { sym: String.raw`i \approx r + \pi`, say: String.raw`Multiplying out gives \(r + \pi + r\pi\); the cross term is tiny, so drop it and just add.` },
          ],
          worked: {
            steps: [
              String.raw`Given: a bond pays a nominal \(i = 7\%\) while inflation is \(\pi = 3\%\).`,
              String.raw`Rearrange: \(1 + r = \frac{1 + i}{1 + \pi} = \frac{1.07}{1.03} \approx 1.03883\).`,
              String.raw`So \(r \approx 3.88\%\).`,
              String.raw`Approximation: \(r \approx i - \pi = 7\% - 3\% = 4\%\).`,
            ],
            answer: String.raw`The real return is 3.88%; the quick subtraction (4%) overstates it slightly, and the gap widens at higher rates.`,
          },
          where: [
            { sym: 'i', def: 'Nominal interest rate (what the bank quotes)' },
            { sym: 'r', def: 'Real interest rate (growth in purchasing power)' },
            { sym: String.raw`\pi`, def: 'Inflation' },
          ],
          caption: 'Named after Irving Fisher. A savings account paying 2% when inflation is 4% has a real return of about −2%: you are getting poorer.',
        },
        {
          t: 'example',
          title: 'Exact versus approximate',
          lines: [
            { label: 'Given', text: '\\(i = 10\\%,\\ \\pi = 8\\%\\)' },
            { label: 'Approximate', text: '\\(r \\approx 10\\% - 8\\% = 2\\%\\)' },
            { label: 'Exact', text: '\\(r = 1.10/1.08 - 1 = 1.85\\%\\)' },
          ],
        },
      ],
    },
    {
      id: 'bonds',
      title: 'Why bond prices fall when rates rise',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P = \sum_{t=1}^{n}\frac{C}{(1 + y)^t} + \frac{F}{(1 + y)^n}`,
          syntax: [
            { sym: String.raw`\sum_{t=1}^{n}`, say: String.raw`Read "the sum from t equals 1 to n": do the thing after it for t = 1, t = 2 ... t = n and add the results. Here t counts the years.` },
            { sym: String.raw`\frac{C}{(1+y)^t}`, say: String.raw`The coupon in year t, discounted back t years at the yield.` },
            { sym: String.raw`\frac{F}{(1+y)^n}`, say: String.raw`The face value, repaid once at the end, discounted n years.` },
          ],
          worked: {
            steps: [
              String.raw`Given: a 3-year bond, face value \(F = \$1{,}000\), coupon \(C = \$50\) a year (5%), market yield \(y = 6\%\).`,
              String.raw`Year 1: \(50/1.06 \approx 47.17\). Year 2: \(50/1.06^2 \approx 44.50\). Year 3: \(50/1.06^3 \approx 41.98\).`,
              String.raw`Face value: \(1{,}000/1.06^3 \approx 839.62\).`,
              String.raw`Add: \(47.17 + 44.50 + 41.98 + 839.62 \approx \$973.27\).`,
              String.raw`Compare \(y = 4\%\): the same sum gives $1,027.75.`,
            ],
            answer: String.raw`At a 6% yield the bond is worth $973.27, below face because its coupon is under the market rate; if yields fall to 4% its price rises to $1,027.75.`,
          },
          where: [
            { sym: 'C', def: 'Coupon paid each year' },
            { sym: 'F', def: 'Face value repaid at maturity' },
            { sym: 'y', def: 'Yield: the market interest rate for this bond' },
          ],
          caption: 'The bond’s payments are fixed. If market rates rise, those fixed payments are discounted more heavily, so the price falls.',
        },
        {
          t: 'plot',
          title: 'Price of a 10-year bond paying a 5% coupon',
          x: [0.01, 0.1],
          y: [60, 140],
          xLabel: 'Market yield',
          yLabel: 'Price (face value 100)',
          curves: [{ f: bond, label: 'Bond price' }],
          points: [
            { x: 0.05, y: 100, label: 'Yield = coupon: price 100' },
            { x: 0.07, y: bond(0.07), label: `7%: ${bond(0.07).toFixed(1)}` },
            { x: 0.03, y: bond(0.03), label: `3%: ${bond(0.03).toFixed(1)}` },
          ],
          caption: 'The curve bends (convexity): prices rise more when yields fall than they drop when yields rise by the same amount.',
        },
        {
          t: 'math',
          tex: String.raw`\frac{\Delta P}{P} \approx -D_{\text{mod}}\,\Delta y`,
          syntax: [
            { sym: String.raw`\Delta`, say: String.raw`Read "delta" or "change in": new value minus old value.` },
            { sym: String.raw`\frac{\Delta P}{P}`, say: String.raw`Read "delta P over P": the change in price as a fraction of the starting price, i.e. the percentage change.` },
            { sym: String.raw`D_{\text{mod}}`, say: String.raw`Read "modified duration": the sensitivity of price to yield. The minus sign in front says price moves opposite to yield.` },
          ],
          worked: {
            steps: [
              String.raw`Given: a bond priced at $1,000 with modified duration \(D_{\text{mod}} = 7.7\); yields rise by 1.25 percentage points, so \(\Delta y = 0.0125\).`,
              String.raw`Substitute: \(\frac{\Delta P}{P} \approx -7.7 \times 0.0125\).`,
              String.raw`Multiply: \(7.7 \times 0.0125 = 0.09625\), so \(\frac{\Delta P}{P} \approx -9.625\%\).`,
              String.raw`Dollar change: \(1{,}000 \times (-0.09625) = -\$96.25\), leaving about $903.75.`,
            ],
            answer: String.raw`A 1.25-point rise in yields cuts this bond’s price by roughly 9.6%, to about $904.`,
          },
          where: [
            { sym: String.raw`\Delta P / P`, def: 'The percentage change in the bond’s price' },
            { sym: 'D_{mod}', def: 'Modified duration, in years' },
            { sym: String.raw`\Delta y`, def: 'The change in yield, in decimal (1 percentage point = 0.01)' },
          ],
          caption: 'Read D straight off as a sensitivity multiplier: a 10-year bond with a duration of about 7.7 loses roughly 7.7% if yields rise by one percentage point, and gains roughly 7.7% if yields fall by one point. The minus sign is the whole story of why bond investors fear rising rates, price and yield always move in opposite directions, and the bigger D is, the harder that lever swings.',
        },
        {
          t: 'metric',
          name: 'duration (D)',
          shows: 'A bond\'s sensitivity to interest-rate changes, expressed in a single number: roughly, the percentage its price moves for a one-percentage-point move in yields. It also doubles as a rough measure of how long, on average, you wait to get your money back (weighted by the size of each payment), which is why a zero-coupon bond paying everything at maturity has duration exactly equal to its years to maturity.',
          eli5: 'Think of duration as a see-saw sensitivity dial. A short-duration bond (like a 1-year government bill) is a stiff, heavy see-saw: a push from interest rates barely moves it. A long-duration bond (like a 30-year bond) is a long, light plank: the same push sends the price swinging much further.',
          higher: 'The bond\'s price swings more for any given change in interest rates. Long-maturity bonds and low-coupon bonds have high duration, a 30-year zero-coupon bond can lose 20–30% of its value from a couple of percentage points of rate rises. High-duration bonds are more rewarding when rates fall, and more dangerous when rates rise.',
          lower: 'The bond\'s price is more stable when rates move. Short-maturity bonds and high-coupon bonds (which return cash sooner) have low duration, a 1-year treasury bill barely reacts to a rate change at all. Low-duration bonds are a safer place to park cash when rates are expected to rise, or when you cannot afford a value swing.',
          typical: 'A 1-year bond has a duration close to 1; a 10-year coupon bond is often around 7–8 (as in the example here); a 30-year bond can run 15–20; money-market funds deliberately hold durations under about 0.5 to stay nearly immune to rate moves.',
        },
        { t: 'callout', tone: 'fact', title: 'The worst inflation ever', text: 'In Hungary in July 1946, prices doubled roughly every 15 hours. The 100 quintillion (10²⁰) pengő note is the highest denomination ever issued. Zimbabwe’s 100 trillion dollar note of 2009 is a more recent example.' },
      ],
    },
  ],
  sources: [
    'Fisher, I. (1930). *The Theory of Interest*. Macmillan.',
    'Mishkin, F. S. (2022). *The Economics of Money, Banking, and Financial Markets* (13th ed.). Pearson.',
    'Hanke, S. H., & Krus, N. (2013). World hyperinflations. In R. Parker & R. Whaples (Eds.), *Routledge Handbook of Major Events in Economic History*. Routledge.',
  ],
  related: ['finance/economics/central-banks', 'finance/foundations/time-value', 'finance/fundamental/dcf'],
}

export default guide
