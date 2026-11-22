import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Exchange rates are the most difficult prices to explain. In the short run they move with news, flows and sentiment, and a standard result of the literature (Meese and Rogoff, 1983) is that economic models have hardly beaten a random walk at horizons of weeks and months. Over years, however, the pull of fundamentals is visible: relative interest rates and inflation, growth and the current account, the terms of trade and, above all, the expected path of central-bank policy. This guide describes the main drivers and how traders think about each: rate differentials and real yields, inflation and purchasing-power parity, growth and the balance of payments, risk sentiment and safe-haven flows, and the role of intervention (Japan in 2022, the Swiss franc floor of 2011 to 2015). It ends with a Singapore-specific topic: why the Monetary Authority of Singapore manages the currency, and not interest rates, as its main policy tool.',
  nutshell: [
    'The **short run** is dominated by **news, expectations of central-bank policy and positioning**; fundamentals work better over **years** (Meese–Rogoff puzzle).',
    '**Interest differentials and real yields**: currencies with rising real rates tend to appreciate, especially when the move is a **surprise**.',
    '**Purchasing-power parity (PPP)**: over the long run the exchange rate drifts by the inflation differential; the Big Mac index is the popular illustration.',
    '**Safe havens** (USD, JPY, CHF) tend to rise in market stress; **commodity currencies** (AUD, CAD, NOK) follow commodity prices and global growth.',
    '**MAS** targets the **S$NEER** (the Singapore dollar’s trade-weighted value) within an undisclosed policy band, reviewed in **April and October**, rather than a short-term interest rate.',
  ],
  sections: [
    {
      id: 'drivers',
      title: 'The main drivers',
      lead: 'Six forces and how to read them.',
      blocks: [
        {
          t: 'table',
          head: ['Driver', 'How it works', 'Direction', 'Watch'],
          rows: [
            ['Interest-rate expectations', 'Capital flows toward currencies with higher expected returns; the change in expectations matters more than the level', 'Higher expected rates: currency up', 'Central-bank meetings, forward guidance, the rate-futures curve'],
            ['Real yields', 'Nominal yield minus expected inflation: the return after inflation', 'Rising real yields: currency up', 'Inflation-linked bond yields; inflation surprises'],
            ['Inflation and PPP', 'Higher inflation erodes a currency’s purchasing power; PPP implies depreciation over time', 'Higher relative inflation: currency down (long run)', 'CPI releases; the Big Mac index; real effective exchange rates'],
            ['Growth and trade', 'A stronger economy attracts investment; a current-account surplus means net demand for the currency', 'Stronger growth and surplus: currency up', 'GDP, PMIs, trade balance, capital flows'],
            ['Terms of trade', 'Commodity exporters’ currencies follow commodity prices', 'Higher commodity prices: AUD, CAD, NOK up', 'Oil, metals, iron ore, dairy prices'],
            ['Risk sentiment', 'In stress, investors buy safe currencies and sell high-yield and emerging currencies', 'Risk-off: USD, JPY, CHF up; AUD, EM down', 'VIX, credit spreads, equity indices'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\frac{S_t}{S_0}=\frac{P_t/P_0}{P^{*}_t/P^{*}_0}\ \ (\text{relative PPP}),\qquad \Delta s\approx\pi-\pi^{*},\qquad \text{Real exchange rate}\ q=\frac{S\,P^{*}}{P}`,
          caption: 'Relative purchasing-power parity, its approximation in percentage changes and the real exchange rate.',
          where: [{ sym: 'S', def: 'the price of foreign currency in domestic currency' }, { sym: 'P,\\ P^{*}', def: 'domestic and foreign price levels' }, { sym: '\\pi,\\ \\pi^{*}', def: 'domestic and foreign inflation rates' }],
          syntax: [{ sym: '\\pi-\\pi^{*}', say: 'the inflation differential. Effect: a country with 2 points higher inflation should see its currency lose about 2% a year against the other, over the long run. Why: otherwise goods would be cheaper abroad and demand would shift.' }],
          worked: {
            title: 'A 3% inflation country against a 1% inflation country',
            steps: ['Inflation differential = 3% − 1% = 2% a year.', 'PPP predicts the first currency depreciates by about 2% a year, or about 22% over ten years (1.03¹⁰/1.01¹⁰ = 1.219; the foreign currency rises 21.9%).', 'The real exchange rate (foreign prices converted at the exchange rate, divided by domestic prices) stays constant if PPP holds; deviations of 10% to 20% can last for years.'],
            answer: 'PPP is a long-run anchor, not a forecast: half-lives of deviations are estimated at three to five years. It helps to identify currencies that are far from fair value (the Big Mac index has repeatedly shown the Swiss franc far above, and the Turkish lira and Argentine peso far below, their PPP values), but not when they will return.',
          },
        },
      ],
    },
    {
      id: 'cb',
      title: 'Central banks and intervention',
      lead: 'Policy, floors and the Singapore system.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Policy rates and guidance', tag: 'the main lever', body: 'Central banks set short-term interest rates and signal the future path; a surprise relative to market pricing moves the currency the most.' },
            { title: 'Intervention', tag: 'selling or buying', body: 'Authorities sometimes trade to slow a move: Japan’s Ministry of Finance spent about ¥9 trillion in September and October 2022 to support the yen. Sterilised intervention (offset to leave money supply unchanged) has a modest effect unless it signals a change in policy.' },
            { title: 'Pegs and floors', tag: 'a one-way bet', body: 'The Swiss National Bank capped the franc against the euro at 1.20 from 2011 and abandoned the cap on 15 January 2015: the franc rose about 20% against the euro in minutes. Pegs transfer risk to the central bank.' },
            { title: 'Reserves and flows', tag: 'the capacity to defend', body: 'A central bank’s foreign reserves limit how long it can defend a currency; attacks on pegs (the pound in 1992, Asian currencies in 1997) followed when the market judged that reserves would run out.' },
          ],
        },
        {
          t: 'table',
          head: ['', 'Most central banks', 'Monetary Authority of Singapore'],
          rows: [
            ['Main policy tool', 'A short-term interest rate', 'The exchange rate: the S$NEER within a policy band'],
            ['Why', 'Domestic demand and credit matter most', 'Singapore is a very open economy (trade is several times GDP) and imported prices dominate inflation, so the exchange rate is the most effective lever'],
            ['How', 'Sets a policy rate and operates in the money market', 'Adjusts the slope, the mid-point and the width of the band; interest rates follow the market'],
            ['Review', 'At scheduled meetings', 'Typically twice a year (April and October), with statements explaining the stance; occasionally off-cycle'],
            ['Effect', 'Interest rates move currency indirectly', 'A steeper appreciation slope tightens policy by making imports cheaper'],
          ],
          caption: 'The S$NEER basket and the band are not disclosed. See the banking shelf for the Singapore system in detail.',
        },
        { t: 'callout', tone: 'tip', title: 'Reading the Singapore dollar', text: 'The currency is best read against the policy stance rather than the interest-rate differential: a tightening by MAS (a steeper slope) tends to strengthen the Singapore dollar against the basket. The USD/SGD rate then moves with the US dollar’s strength against the other trading partners’ currencies.' },
      ],
    },
  ],
  sources: [
    'Meese, R. A. & Rogoff, K. (1983). Empirical exchange rate models of the seventies: do they fit out of sample? *Journal of International Economics*, 14(1–2), 3–24.',
    'Rogoff, K. (1996). The purchasing power parity puzzle. *Journal of Economic Literature*, 34(2), 647–668.',
    'Monetary Authority of Singapore: monetary policy statements and the exchange-rate-based framework (mas.gov.sg).',
    'The Economist: Big Mac index (economist.com); Bank of Japan and Ministry of Finance of Japan: intervention data.',
  ],
  related: ['banking/theory/central-banking-singapore', 'finance/economics/central-banks', 'finance/assets/forex/drivers'],
}

export default guide
