import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Funds pool many investors’ money to buy a portfolio, giving instant diversification. They come as **mutual funds** (bought from the manager at the day’s price), **exchange-traded funds (ETFs)** (traded on an exchange like a share) and **REITs** (listed property companies). The single biggest thing that separates good funds from bad is cost.',
  nutshell: [
    '**NAV** (net asset value) per unit = (assets − liabilities) ÷ units.',
    'The **expense ratio** is taken every year, so it compounds against you.',
    'Index funds and ETFs track a benchmark; **tracking error** measures how closely.',
    'ETFs stay close to their NAV through a creation and redemption mechanism with large dealers.',
    'REITs must pay out most of their income (90% in the US and, for tax transparency, Singapore), so they are income-heavy.',
  ],
  sections: [
    {
      id: 'nav',
      title: 'NAV and how funds are priced',
      blocks: [
        {
          t: 'math',
          tex: String.raw`NAV = \frac{\text{Market value of holdings} + \text{Cash} - \text{Liabilities}}{\text{Units outstanding}}`,
          syntax: [
            { sym: String.raw`NAV`, say: String.raw`Read “N A V” or “nav”: net asset value. The three capital letters are one abbreviation, not three multiplied quantities.` },
            { sym: String.raw`\text{Market value of holdings} + \text{Cash} - \text{Liabilities}`, say: String.raw`Read “what the fund owns, plus cash, minus what it owes”: the fund’s net worth. Do the sums on top before dividing.` },
            { sym: String.raw`\frac{\ldots}{\text{Units outstanding}}`, say: String.raw`Read “…over units outstanding”: share the net worth equally across all the units in issue to get the value of one unit.` },
          ],
          worked: {
            title: 'NAV and an ETF premium',
            steps: [
              String.raw`Given: holdings $480M, cash $20M, liabilities $5M (accrued fees), 25 million units.`,
              String.raw`Net assets: \(480 + 20 - 5 = \$495\text{M}\).`,
              String.raw`NAV per unit: \(495/25 = \$19.80\).`,
              String.raw`An ETF on this fund trades at $19.87, a premium of \((19.87 - 19.80)/19.80 = 0.35\%\).`,
            ],
            answer: String.raw`NAV is $19.80, and the ETF’s 0.35% premium is small enough that dealers could profit by creating units and selling them into the market.`,
          },
          caption: 'NAV is simply "what one unit of the fund is actually worth right now", marked to the current market price of everything it holds. For a mutual fund, this is the price you transact at, calculated once a day after the market closes. For an ETF, which trades all day, the market price can drift slightly away from NAV, watch for that gap, since a large or persistent premium or discount to NAV is a sign something (illiquidity, stale pricing) is off.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Mutual fund', body: 'You buy or sell at the NAV calculated after the market closes. The manager issues or cancels units.' },
            { title: 'ETF', body: 'Trades all day on an exchange. If its price drifts above NAV, dealers create new units by delivering the underlying shares (and sell the ETF), pushing the price back; below NAV, they redeem.' },
            { title: 'REIT', body: 'A listed company owning income-producing property (malls, offices, data centres) that distributes most of its income as dividends.' },
          ],
        },
      ],
    },
    {
      id: 'costs',
      title: 'Why costs compound',
      blocks: [
        {
          t: 'math',
          tex: String.raw`FV = PV\,(1 + r - f)^n`,
          where: [
            { sym: 'r', def: 'Gross return of the investments' },
            { sym: 'f', def: 'Annual expense ratio' },
          ],
          syntax: [
            { sym: String.raw`FV,\ PV`, say: String.raw`Read “F V” and “P V”: future value and present value, each an abbreviation, not two multiplied letters.` },
            { sym: String.raw`(1 + r - f)^n`, say: String.raw`Read “one plus r minus f, all to the power n”: work out the yearly growth factor net of fees first, then compound it for \(n\) years.` },
          ],
          worked: {
            title: 'What a 1% fee costs over 30 years',
            steps: [
              String.raw`Given: \(PV = \$10{,}000\), gross return \(r = 7\%\), \(n = 30\) years. Compare \(f = 0\) with \(f = 1\%\).`,
              String.raw`No fee: \(10{,}000 \times 1.07^{30} = \$76{,}123\).`,
              String.raw`With the fee: \(10{,}000 \times 1.06^{30} = \$57{,}435\).`,
              String.raw`Difference: \(76{,}123 - 57{,}435 = \$18{,}688\), or \(18{,}688/76{,}123 = 24.5\%\) of the no-fee pot.`,
            ],
            answer: String.raw`A fee of one-seventh of the yearly return takes about a quarter of the final wealth, because the lost growth itself would have compounded.`,
          },
          caption: 'Approximately: fees reduce the compound growth rate one for one.',
        },
        {
          t: 'metric',
          name: 'the expense ratio',
          shows: 'The annual fee a fund charges, as a percentage of what you have invested, taken automatically out of the fund\'s returns before you ever see them. It is one of the very few things about future investment returns that is known for certain in advance, unlike expected growth, fees are guaranteed, which is exactly why they matter so much over the long run.',
          eli5: 'Two identical taxis both drive you to the airport, but one charges a small fixed toll every single kilometre, quietly deducted the whole ride, while the other doesn\'t. Over a short ride you barely notice. Over a lifetime of rides (decades of compounding), that small per-kilometre toll adds up to a huge chunk of the total fare, that is exactly what a fund\'s expense ratio does to your returns.',
          higher: 'More of your money is taken each year regardless of performance, and because fees compound against you the same way returns compound for you, even a seemingly small difference (2% versus 0.1%) can consume more than half of your total wealth over 40 years, as the chart above shows. High fees are not automatically bad if the fund genuinely and consistently outperforms enough to justify them, but most actively managed funds do not (see [efficient markets](@finance/foundations/efficient-markets)).',
          lower: 'Less is taken each year, leaving more of the market\'s return to compound in your favour. This is the primary argument for low-cost index funds: a fund cannot reliably promise to outperform the market, but it absolutely can promise to charge less, and that saving compounds with certainty.',
          typical: 'Broad-market index funds and ETFs now commonly charge 0.03–0.20% a year; actively managed mutual funds commonly charge 0.5–1.5%; hedge funds historically charged "2 and 20" (2% of assets plus 20% of profits), always check whether a fee difference of even 0.5–1 percentage point is justified by genuinely superior, consistent performance.',
        },
        {
          t: 'plot',
          title: '$10,000 growing at 7% a year before fees',
          x: [0, 40],
          y: [0, 160000],
          xLabel: 'Years',
          yLabel: 'Value ($)',
          curves: [
            { f: (t: number) => 10000 * 1.069 ** t, label: '0.1% fee (index ETF)' },
            { f: (t: number) => 10000 * 1.06 ** t, label: '1% fee' },
            { f: (t: number) => 10000 * 1.05 ** t, label: '2% fee', dashed: true },
          ],
          points: [
            { x: 40, y: 10000 * 1.069 ** 40, label: `$${Math.round(10000 * 1.069 ** 40 / 1000)}k` },
            { x: 40, y: 10000 * 1.05 ** 40, label: `$${Math.round(10000 * 1.05 ** 40 / 1000)}k` },
          ],
          caption: 'A 2% fee costs more than half of the final value over 40 years.',
        },
        {
          t: 'math',
          tex: String.raw`TE = \sigma\left(R_{\text{fund}} - R_{\text{index}}\right)`,
          where: [
            { sym: 'TE', def: 'Tracking error, annualised' },
            { sym: String.raw`R_{\text{fund}}, R_{\text{index}}`, def: 'Periodic returns of the fund and of the benchmark it tracks' },
            { sym: String.raw`\sigma(\cdot)`, def: 'Standard deviation, taken over the return gaps' },
          ],
          syntax: [
            { sym: String.raw`\sigma\left(R_{\text{fund}} - R_{\text{index}}\right)`, say: String.raw`Read “the standard deviation of fund return minus index return”. First subtract in each period to get a list of gaps, then measure how spread out those gaps are.` },
            { sym: String.raw`TE`, say: String.raw`Read “T E”: tracking error, an abbreviation. The usual convention is to quote it per year.` },
          ],
          worked: {
            title: 'Tracking error from six months',
            steps: [
              String.raw`Given monthly gaps (fund minus index), in percentage points: \(-0.02, +0.01, -0.03, 0.00, -0.01, -0.02\).`,
              String.raw`Average gap: \(-0.07/6 = -0.0117\) points a month, a small steady lag (mostly fees).`,
              String.raw`Sample standard deviation (dividing by \(n - 1 = 5\)): \(0.0147\) points a month.`,
              String.raw`Annualise by multiplying by \(\sqrt{12} = 3.464\): \(0.0147 \times 3.464 = 0.051\) points.`,
            ],
            answer: String.raw`Tracking error is about 0.05% a year, excellent, even though the fund lagged the index by about 0.14% a year on average.`,
          },
          caption: 'Tracking error: the standard deviation of the gap between the fund’s and the index’s returns. It is not about whether the fund beats or lags the index on average, a fund that is reliably 0.1% behind every year has low tracking error even though it never matches the index exactly. It is about how bumpy and unpredictable that gap is. Good index funds keep it to a few tenths of a percent a year; a wide or erratic tracking error suggests the fund is not actually replicating its benchmark well.',
        },
        { t: 'callout', tone: 'fact', title: '"Bogle’s folly"', text: 'When John Bogle launched the first index fund for ordinary investors in 1976, competitors mocked it as un-American: why settle for average? It raised only $11 million at launch. Index funds now hold trillions of dollars. The first US ETF, the SPDR S&P 500 ("SPY"), followed in 1993.' },
      ],
    },
  ],
  sources: [
    'Bogle, J. C. (2007). *The Little Book of Common Sense Investing*. Wiley.',
    'Investment Company Institute. (2024). *Investment Company Fact Book*.',
    'Monetary Authority of Singapore. (n.d.). *Code on Collective Investment Schemes*.',
  ],
  related: ['finance/philosophies/passive', 'finance/foundations/efficient-markets'],
}

export default guide
