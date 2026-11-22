import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Commodities are raw materials: energy (oil, gas), metals (gold, copper), and agriculture (wheat, coffee, soybeans). Most investors reach them through **futures**, which means their returns depend not just on the price of the stuff but on the shape of the futures curve.',
  nutshell: [
    'Commodity prices are driven by supply shocks (weather, wars, OPEC), demand (global growth) and inventories.',
    'Holding commodities via futures earns three pieces: **spot return**, **roll yield** and **interest on the collateral**.',
    'In **contango** (futures above spot), rolling costs money; in **backwardation**, it earns money.',
    'Gold pays no income; it tends to do well when real interest rates fall and in crises.',
  ],
  sections: [
    {
      id: 'returns',
      title: 'Where commodity returns come from',
      blocks: [
        {
          t: 'math',
          tex: String.raw`R_{\text{total}} \approx \underbrace{R_{\text{spot}}}_{\text{price change}} + \underbrace{R_{\text{roll}}}_{\text{curve shape}} + \underbrace{r_{\text{collateral}}}_{\text{interest on cash}}`,
          where: [
            { sym: String.raw`R_{\text{spot}}`, def: 'Return from the commodity’s own price moving up or down' },
            { sym: String.raw`R_{\text{roll}}`, def: 'Return (or cost) from replacing an expiring futures contract with the next one' },
            { sym: String.raw`r_{\text{collateral}}`, def: 'Interest earned on the cash backing the futures position' },
          ],
          syntax: [
            { sym: String.raw`R_{\text{total}}`, say: String.raw`Read “R total”. The word in the subscript is only a label naming which return it is, not an index or a number.` },
            { sym: String.raw`\approx`, say: String.raw`Read “is approximately”. The three parts are added as if they were simple percentages, though in reality returns compound slightly.` },
            { sym: String.raw`\underbrace{R_{\text{spot}}}_{\text{price change}}`, say: String.raw`A brace under a term is just a caption. Read it as “R spot, which is the price change”.` },
          ],
          worked: {
            title: 'One year in an oil futures fund',
            steps: [
              String.raw`Given: $100,000 invested. Oil goes from 70 to 75.60. Each month the fund sells the near contract at 71.00 and buys the next at 71.30. Cash earns 4%.`,
              String.raw`Spot return: \(75.60/70 - 1 = 8.0\%\).`,
              String.raw`Roll per month: \((71.00 - 71.30)/71.30 = -0.42\%\). Over 12 rolls: \((1 - 0.0042)^{12} - 1 = -4.9\%\).`,
              String.raw`Collateral return: \(4.0\%\).`,
              String.raw`Total: \(8.0\% - 4.9\% + 4.0\% = 7.1\%\), i.e. about $7,100.`,
            ],
            answer: String.raw`The fund returned about 7.1%, not the 8% the oil price chart suggests: contango cost 4.9 points and the interest on collateral gave back 4.`,
          },
          caption: 'A futures-based commodity return is not just "did the price go up": two investors can hold the exact same commodity exposure and earn very different returns if one is rolling through contango and the other through backwardation. Read the total as three separate bets stacked on top of each other, each with its own sign.',
        },
        {
          t: 'math',
          tex: String.raw`R_{\text{roll}} \approx \frac{F_{\text{near}} - F_{\text{next}}}{F_{\text{next}}}\quad\text{per roll}`,
          where: [
            { sym: String.raw`F_{\text{near}}`, def: 'Price of the expiring (near-month) futures contract being sold' },
            { sym: String.raw`F_{\text{next}}`, def: 'Price of the next-month contract being bought to replace it' },
          ],
          syntax: [
            { sym: String.raw`F_{\text{near}}, F_{\text{next}}`, say: String.raw`Read “F near” and “F next”. \(F\) is a futures price and the subscript says which contract month: the one expiring soon, and the one after it.` },
            { sym: String.raw`\text{per roll}`, say: String.raw`Read “per roll”: the figure applies each time you swap contracts, not per year. Rolling monthly, you pay or earn it twelve times a year.` },
          ],
          worked: {
            title: 'Contango against backwardation, per roll',
            steps: [
              String.raw`Contango curve from the chart: near contract 70, next 71 ($/barrel).`,
              String.raw`\(R_{\text{roll}} = (70 - 71)/71 = -1.41\%\). On 1,000 barrels you sell at $70,000 and buy at $71,000, paying an extra $1,000.`,
              String.raw`Backwardation curve: near 82, next 80.6. \(R_{\text{roll}} = (82 - 80.6)/80.6 = +1.74\%\).`,
              String.raw`On 1,000 barrels you sell at $82,000 and buy at $80,600, pocketing $1,400.`,
            ],
            answer: String.raw`Contango costs 1.41% per roll while backwardation pays 1.74%, regardless of whether the oil price itself moves.`,
          },
          caption: 'Selling the expiring contract and buying the next one. If the next is dearer (contango), you lose a little each roll; if cheaper (backwardation), you gain.',
        },
        {
          t: 'metric',
          name: 'roll yield',
          shows: 'The return (or drag) from the mechanical act of rolling a futures contract forward before it expires, separate from whether the commodity’s own price went up or down. It is the part of commodity investing that catches beginners out, because the chart of "oil" they see and the return they actually earn from an oil ETF can diverge a lot.',
          eli5: 'Imagine renting a car monthly instead of owning one outright. If next month’s rental is pricier than this month’s (contango), you quietly lose a bit every time you swap cars, even if the car itself never changes. If next month is cheaper (backwardation), you gain a bit every swap. Roll yield is that recurring gain or loss from constantly trading in for the next contract.',
          higher: 'A positive roll yield means the futures curve is in backwardation (near contracts pricier than far ones), the investor is rolling from an expensive contract into a cheaper one and pocketing the difference each time, on top of whatever the spot price does. This has historically been more common for commodities in tight supply, like oil during shortages.',
          lower: 'A negative roll yield means the curve is in contango, rolling from a cheap expiring contract into a pricier next one, bleeding a little value every roll. This is the normal state for commodities that are easy and cheap to store (like gold), where the futures price simply reflects the cost of storage and financing.',
          typical: 'Over long periods, persistent contango has been a real drag on buy-and-hold commodity index returns, one well-documented reason broad commodity indices have sometimes lagged the apparent move in spot prices by several percentage points a year.',
        },
        {
          t: 'plot',
          title: 'Futures curves',
          x: [0, 12],
          y: [60, 90],
          xLabel: 'Months to expiry',
          yLabel: 'Futures price ($/barrel)',
          data: [
            { pts: [[0, 70], [1, 71], [2, 71.9], [3, 72.7], [6, 74.6], [9, 76.2], [12, 77.5]], label: 'Contango: storage and interest costs', dots: true },
            { pts: [[0, 82], [1, 80.6], [2, 79.4], [3, 78.4], [6, 76.1], [9, 74.6], [12, 73.6]], label: 'Backwardation: tight supply today', dots: true },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Negative oil', text: 'On 20 April 2020, the expiring May contract for US (WTI) crude oil settled at −$37.63 a barrel. With storage full during lockdowns, holders of contracts that required taking delivery paid others to take the oil away.' },
      ],
    },
    {
      id: 'gold',
      title: 'Gold',
      blocks: [
        {
          t: 'p',
          text: 'Gold produces no cash flow, so it cannot be valued with a DCF. Its price has tended to move inversely to **real** interest rates (the opportunity cost of holding it), and to rise in crises and periods of currency debasement. Central banks own large reserves of it.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Opportunity cost of gold} \approx \text{real yield} = i - \pi^{e}`,
          where: [
            { sym: 'i', def: 'Nominal interest rate on a safe bond' },
            { sym: String.raw`\pi^e`, def: 'Expected inflation' },
          ],
          syntax: [
            { sym: String.raw`\pi^{e}`, say: String.raw`Read “pi e”. Here \(\pi\) means inflation (not 3.14159) and the superscript \(e\) means “expected”. It is a label, not an exponent.` },
            { sym: String.raw`i - \pi^{e}`, say: String.raw`Read “nominal rate minus expected inflation”. Subtract the inflation you expect from the interest rate on the page to get the real return.` },
            { sym: String.raw`\approx`, say: String.raw`Read “is roughly”. The exact real yield is \((1+i)/(1+\pi^e) - 1\), which is a touch lower.` },
          ],
          worked: {
            title: 'The cost of holding gold',
            steps: [
              String.raw`Given: gold at $2,000 an ounce, a safe bond yielding \(i = 4.5\%\), expected inflation \(\pi^e = 2.0\%\).`,
              String.raw`Real yield: \(4.5\% - 2.0\% = 2.5\%\) (exactly \(1.045/1.02 - 1 = 2.45\%\)).`,
              String.raw`Real income given up per ounce per year: \(2{,}000 \times 0.025 = \$50\).`,
              String.raw`Later: \(i = 3.0\%\) and \(\pi^e = 3.5\%\), so the real yield is \(-0.5\%\). The opportunity cost of holding $2,000 of gold is then \(2{,}000 \times (-0.005) = -\$10\): negative, because the bond itself loses purchasing power.`,
            ],
            answer: String.raw`At a 2.5% real yield, gold costs about $50 an ounce a year in forgone income; at a negative real yield the cost vanishes, which is when gold tends to shine.`,
          },
          caption: 'When real yields on safe bonds are high, holding non-yielding gold costs more, you are giving up a juicy, safe, inflation-beating return elsewhere just to hold a metal that pays nothing. When real yields are low or negative, that opportunity cost shrinks or disappears, which is why gold has tended to rally when real yields fall.',
        },
      ],
    },
  ],
  sources: [
    'Gorton, G., & Rouwenhorst, K. G. (2006). Facts and fantasies about commodity futures. *Financial Analysts Journal*, 62(2), 47–68.',
    'Erb, C. B., & Harvey, C. R. (2013). The golden dilemma. *Financial Analysts Journal*, 69(4), 10–42.',
  ],
  related: ['finance/assets/futures/pricing', 'finance/assets/overview'],
}

export default guide
