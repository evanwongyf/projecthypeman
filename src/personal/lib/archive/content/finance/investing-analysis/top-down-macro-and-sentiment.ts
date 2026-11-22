import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Bottom-up analysis starts with the company; top-down analysis starts with the world: the stage of the business cycle, the level of interest rates, the valuation of the index and the mood of the market. Top-down work will not tell you which stock to buy, but it sets the context for the risk you take: it helps to avoid paying very high prices for the whole market, to recognise the stage of the cycle and to spot extremes of fear and greed. This guide covers the business cycle and the leading indicators that anticipate it (the yield curve, credit spreads, purchasing-manager surveys), index-level valuation such as the cyclically adjusted price-earnings ratio, and sentiment gauges (the VIX, put–call ratios, surveys and positioning) with the arithmetic that translates the VIX into expected daily and monthly moves. It also cautions that macro forecasting has a poor record, and that these tools are better for risk than for timing.',
  nutshell: [
    'The **business cycle** has four phases (early recovery, expansion, late cycle, contraction); different assets tend to lead in each.',
    '**Leading indicators**: an **inverted yield curve** (10-year below 3-month or 2-year), widening **credit spreads**, falling **PMI** and rising **jobless claims**.',
    '**Index valuation**: the **CAPE** (price ÷ ten-year average real earnings) correlates with the next ten years’ returns, but is a poor timing tool.',
    '**VIX** is the market’s 30-day expected volatility: a VIX of 20 implies about **1.26% a day** and **5.8% a month** (one standard deviation).',
    '**Sentiment** is a contrarian input: extreme fear and extreme greed are rarely timed well, but they shift the odds.',
  ],
  sections: [
    {
      id: 'cycle',
      title: 'The cycle and its indicators',
      lead: 'Where are we, and where are we going?',
      blocks: [
        {
          t: 'table',
          head: ['Phase', 'Economy', 'Interest rates', 'Tends to do well'],
          rows: [
            ['Early recovery', 'Output turns up from a recession; inflation low', 'Low; falling or at the floor', 'Cyclical stocks, small caps, high-yield credit'],
            ['Expansion', 'Solid growth; rising employment and profits', 'Rising gradually', 'Equities broadly, cyclicals, commodities'],
            ['Late cycle', 'Growth slows; inflation and wages rise; capacity is tight', 'High; central bank tightening', 'Defensive stocks, value, inflation-linked bonds, cash'],
            ['Contraction', 'Output and profits fall; unemployment rises', 'Falling', 'Government bonds, defensives, quality'],
          ],
          caption: 'A stylised pattern; actual cycles vary in length and the ordering of asset returns is only a tendency.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The yield curve', tag: 'a recession signal', body: 'An inverted curve (short rates above long rates) has preceded every US recession since the 1960s with a lag of 6 to 24 months, with one false signal. It signals tight monetary policy and expectations of falling rates.' },
            { title: 'Credit spreads', tag: 'stress gauge', body: 'The extra yield on corporate bonds over government bonds widens when investors fear defaults and narrows in good times; sharp widening often precedes or accompanies a downturn.' },
            { title: 'Purchasing managers’ indices (PMI)', tag: 'survey', body: 'Monthly surveys of manufacturing and services firms: above 50 means expansion; a falling PMI leads output.' },
            { title: 'Jobless claims and earnings revisions', tag: 'real-time data', body: 'Rising claims and falling analyst earnings estimates warn of weakening conditions.' },
          ],
        },
      ],
    },
    {
      id: 'valuation',
      title: 'Index-level valuation',
      lead: 'How expensive is the market?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{CAPE}=\frac{P_t}{\frac1{10}\sum_{k=1}^{10}E^{\text{real}}_{t-k}},\qquad \text{earnings yield}=\frac1{\text{CAPE}}`,
          caption: 'The cyclically adjusted price–earnings ratio (Shiller) compares the price with a ten-year average of inflation-adjusted earnings.',
          where: [{ sym: 'P_t', def: 'the index level today' }, { sym: 'E^{\\text{real}}', def: 'inflation-adjusted earnings' }],
          syntax: [{ sym: '1/\\text{CAPE}', say: 'the cyclically adjusted earnings yield. Effect: a CAPE of 30 is an earnings yield of 3.3%; of 15, 6.7%. Why: it is the inverse of the price multiple.' }],
          worked: {
            title: 'CAPE of 30',
            steps: ['Earnings yield = 1/30 = 3.3%.', 'If the market’s earnings grow with inflation, the long-run real return is about the earnings yield plus the real growth of earnings per share (small): in the low single digits.', 'At a CAPE of 15 the earnings yield is 6.7%: a higher starting point for long-term returns.'],
            answer: 'Historically, a high CAPE has gone with lower subsequent ten-year returns (the relationship explains a meaningful share of the variation) but has said very little about the next year or two, and the CAPE has been above its long-term average for much of the past thirty years. Use it to set expectations, not to time the market.',
          },
        },
        { t: 'callout', tone: 'note', title: 'Macro forecasting has a poor record', text: 'Economists’ forecasts of recessions and interest rates have missed most turning points, and markets often move on the difference between what happens and what was expected. The practical use of macro analysis is to be aware of the environment and to manage risk (avoid being fully invested at extreme valuations or leveraged late in a cycle), not to predict next quarter.' },
      ],
    },
    {
      id: 'sentiment',
      title: 'Sentiment and positioning',
      lead: 'Fear and greed, measured.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\sigma_{\text{day}}=\frac{\text{VIX}}{\sqrt{252}},\qquad \sigma_{\text{month}}=\frac{\text{VIX}}{\sqrt{12}}`,
          caption: 'The one-standard-deviation expected moves implied by the VIX, an annualised volatility in percent.',
          where: [{ sym: '\\text{VIX}', def: 'the 30-day implied volatility of the S&P 500, in percentage points' }],
          syntax: [{ sym: '1/\\sqrt{252}', say: 'converts an annual number to a daily one. Effect: a VIX of 20 means a daily standard deviation of 1.26%. Why: volatility scales with the square root of time.' }],
          worked: {
            title: 'A VIX of 20 and of 30',
            steps: ['VIX 20: daily σ = 20/√252 = 1.26%; monthly σ = 20/√12 = 5.8%.', 'VIX 30: daily σ = 1.89%; monthly σ = 8.7%.', 'A day of −3% is a 2.4σ event at a VIX of 20 but a 1.6σ event at 30.'],
            answer: 'The VIX is a price of insurance, not a forecast: it tends to be above realised volatility on average because buyers pay for protection. Spikes (above 30 or 40) coincide with market stress and have often been followed by better-than-average returns over the next year, but they can persist for weeks or months.',
          },
        },
        {
          t: 'table',
          head: ['Gauge', 'What it measures', 'Contrarian reading'],
          rows: [
            ['VIX', 'Expected 30-day volatility from index options', 'Very high: fear (possible opportunity); very low: complacency'],
            ['Put–call ratio', 'Volume of put options ÷ call options', 'High: bearish positioning; extreme highs have often marked lows'],
            ['Investor surveys (AAII, Investors Intelligence)', 'Share of respondents who are bullish or bearish', 'Extreme bullishness is a mild warning'],
            ['Fund flows', 'Money moving into or out of equity funds', 'Heavy inflows near peaks; outflows near troughs'],
            ['Margin debt and leverage', 'Borrowing to buy shares', 'High and rising: late-cycle risk'],
            ['Positioning (CFTC Commitments of Traders)', 'Futures positions of speculators and hedgers', 'Extreme speculative positions can reverse'],
          ],
        },
        { t: 'dodont', do: ['Use sentiment to adjust risk at the margin, not to switch all-in or all-out', 'Combine several indicators', 'Write down the signal and the rule before the market moves'], dont: ['Assume an extreme must reverse at once', 'Use a single indicator as a trigger to sell everything', 'Ignore valuation and fundamentals when sentiment is extreme'] },
      ],
    },
  ],
  sources: [
    'Shiller, R. J. (2015). *Irrational Exuberance* (3rd ed.). Princeton University Press (CAPE).',
    'Estrella, A. & Mishkin, F. S. (1996). The yield curve as a predictor of US recessions. *Current Issues in Economics and Finance*, Federal Reserve Bank of New York, 2(7).',
    'Whaley, R. E. (2000). The investor fear gauge. *Journal of Portfolio Management*, 26(3), 12–17.',
    'Marks, H. (2018). *Mastering the Market Cycle*. Houghton Mifflin Harcourt.',
  ],
  related: ['finance/economics/gdp-cycle', 'finance/economics/inflation-rates', 'finance/assets/options/volatility'],
}

export default guide
