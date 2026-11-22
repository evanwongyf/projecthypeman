import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The foreign-exchange market is the largest financial market in the world and the least visible: there is no central exchange, no closing bell and no single price. Banks, funds, companies and central banks trade currencies with each other directly, over the counter, around the clock from Monday to Friday, in a daily volume that the Bank for International Settlements measured at about US$7.5 trillion in April 2022 (and higher in its later survey). Most of that is not people changing money to travel: it is dealers passing risk to each other, funds expressing views on interest rates, and companies hedging. This guide explains how the market is organised, what is traded (spot, forwards, swaps and options), who trades and why, how a price is quoted, the trading sessions that move the market through the day (and where Singapore fits), and why Singapore is one of the three largest trading centres.',
  nutshell: [
    'FX is an **over-the-counter** market: dealers quote **bid and ask** prices to clients and to each other; there is no single exchange.',
    'Daily turnover was about **US$7.5 trillion** in April 2022 (BIS Triennial Survey); the **US dollar is on one side of about 88%** of trades.',
    'Instruments: **spot** (settles in two business days, one for USD/CAD), **outright forwards**, **FX swaps** (about half of turnover) and **options**.',
    'Participants: **dealer banks**, **asset managers and hedge funds**, **corporates**, **central banks** and **retail traders** (a small share).',
    'Singapore is the **third-largest** FX trading centre (about **9%** of turnover in 2022) after the UK (about 38%) and the US (about 19%).',
  ],
  sections: [
    {
      id: 'market',
      title: 'How the market is organised',
      lead: 'Dealers, clients and platforms.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Clients', body: 'Corporates, funds and individuals request prices from dealer banks or through multi-dealer platforms.' },
            { title: 'Dealers', body: 'Banks quote two-way prices (bid and ask), take the other side and manage the resulting risk.' },
            { title: 'The interbank market', body: 'Dealers trade with each other, directly and through electronic brokers, to lay off positions.' },
            { title: 'Liquidity providers and platforms', body: 'Electronic platforms aggregate quotes from many dealers; retail brokers pass on or take the other side of client orders.' },
            { title: 'Settlement', body: 'Spot trades normally settle two business days later (one for USD/CAD) through correspondent banks and the CLS system, which settles both legs at the same time to reduce settlement risk.' },
          ],
        },
        {
          t: 'bars',
          title: 'Currency share of FX turnover (percent of trades; sums to 200%; BIS, April 2022, approximate)',
          items: [{ label: 'US dollar', value: 88 }, { label: 'Euro', value: 31 }, { label: 'Japanese yen', value: 17 }, { label: 'Pound sterling', value: 13 }, { label: 'Chinese renminbi', value: 7 }, { label: 'Australian dollar', value: 6 }, { label: 'Canadian dollar', value: 6 }, { label: 'Swiss franc', value: 5 }, { label: 'Singapore dollar', value: 2 }],
          unit: '%',
          min: 0,
          max: 100,
          decimals: 0,
          caption: 'Each trade has two currencies, so the shares add up to 200%. The dollar’s dominance is why most pairs are quoted against it and why cross rates are computed through it.',
        },
        {
          t: 'table',
          head: ['Instrument', 'What it is', 'Share of turnover (approx., 2022)', 'Used for'],
          rows: [
            ['Spot', 'Exchange of two currencies at today’s rate, settling in two business days', 'about 28%', 'Immediate needs; speculation'],
            ['Outright forward', 'An agreed rate for exchange on a future date', 'about 15%', 'Hedging known future payments'],
            ['FX swap', 'A spot exchange together with an agreed reverse exchange later', 'about 50%', 'Funding and rolling positions; the main way banks borrow foreign currency'],
            ['Currency swap and options', 'Longer-term swaps of principal and interest; the right (not the duty) to exchange at a set rate', 'the remainder', 'Long-term hedging; insurance against large moves'],
          ],
          caption: 'Shares are rounded from the BIS Triennial Central Bank Survey of 2022; see the survey for exact figures and the later results.',
        },
      ],
    },
    {
      id: 'who',
      title: 'Who trades, and why',
      lead: 'Hedgers, speculators and the central bank.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Dealer banks', tag: 'the market makers', body: 'Provide liquidity, earn the spread and manage inventory; they dominate interbank trading and client flow.' },
            { title: 'Asset managers and hedge funds', tag: 'the largest flows', body: 'Pension funds, mutual funds and hedge funds trade currencies to buy foreign assets, hedge them or take views on rates and growth.' },
            { title: 'Corporates', tag: 'hedgers', body: 'Exporters, importers and multinationals exchange currency to pay and receive and hedge exposure; their flows are real but small relative to trading.' },
            { title: 'Central banks', tag: 'policy and reserves', body: 'Manage reserves and sometimes intervene to influence the currency; the Monetary Authority of Singapore uses the exchange rate as its main policy tool.' },
            { title: 'Retail traders', tag: 'a small share', body: 'Individual speculators through online brokers: a small share of turnover; most lose money (see the trading-psychology guide).' },
            { title: 'Quotes and spreads', tag: 'the price of liquidity', body: 'The difference between the bid and the ask is the dealer’s margin. For EUR/USD it can be a fraction of a pip; for exotic pairs it can be tens of pips.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{Spread}=\text{Ask}-\text{Bid},\qquad \text{Mid}=\frac{\text{Ask}+\text{Bid}}{2},\qquad \text{Cost of a round trip}=\text{Spread}`,
          caption: 'The spread is the cost of buying and immediately selling again.',
          where: [{ sym: '\\text{Bid}', def: 'the price at which the dealer buys the base currency (you sell)' }, { sym: '\\text{Ask}', def: 'the price at which the dealer sells the base currency (you buy)' }],
          syntax: [{ sym: '\\text{Ask}-\\text{Bid}', say: 'always positive. Effect: you buy at the higher price and sell at the lower, so every trade starts at a small loss. Why: that gap is the dealer’s compensation for providing immediate liquidity.' }],
          worked: {
            title: 'EUR/USD quoted 1.0849 / 1.0851',
            steps: ['Spread = 1.0851 − 1.0849 = 0.0002 = 2 pips.', 'Buying €100,000 costs $108,510; selling immediately returns $108,490: a loss of $20.', 'As a share of the amount: 0.018%.'],
            answer: 'The spread is small for large, liquid pairs, but it is paid on every trade: a day trader making fifty trades a day pays fifty spreads. Wide spreads in quiet hours and around news are a hidden cost.',
          },
        },
      ],
    },
    {
      id: 'sessions',
      title: 'Sessions and Singapore’s place',
      lead: 'A market that follows the sun.',
      blocks: [
        {
          t: 'table',
          head: ['Session', 'Main centres', 'Approximate hours in Singapore time', 'Character'],
          rows: [
            ['Asia-Pacific', 'Sydney, Tokyo, Singapore, Hong Kong', 'about 5 am to 5 pm', 'Quieter for the dollar and euro; active for JPY, AUD, NZD, SGD, CNH'],
            ['Europe', 'London, Frankfurt, Zurich', 'about 3 pm to midnight', 'Largest turnover; many large flows'],
            ['North America', 'New York, Toronto', 'about 8 pm to 4 am', 'Heavy around US data releases and the London overlap'],
            ['London–New York overlap', '', 'about 8 pm to midnight', 'The most liquid period, with tight spreads and large moves'],
          ],
          caption: 'Hours shift with daylight saving in London and New York; the market is open continuously from Monday morning in Asia to Friday evening in New York.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Singapore as a hub', tag: 'third largest', body: 'Singapore’s FX turnover was about 9% of the global total in 2022, ahead of Hong Kong and Japan: a time-zone bridge between New York and London, a deep banking sector and a strong regulatory and legal system.' },
            { title: 'The Singapore dollar', tag: 'a managed currency', body: 'MAS manages the Singapore dollar against a basket of currencies (the S$NEER) rather than setting an interest-rate target: see the macro-drivers guide.' },
            { title: 'Asia’s currencies', tag: 'regional trading', body: 'Singapore is a major centre for trading the Chinese renminbi offshore, the Indonesian rupiah, the Malaysian ringgit (in non-deliverable forms), the Indian rupee and other Asian currencies.' },
            { title: 'Benchmarks', tag: 'fixings', body: 'Daily fixing times (for example 4 pm in London) can concentrate flows, as funds and corporates trade at the benchmark.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Bank for International Settlements (2022). *Triennial Central Bank Survey of Foreign Exchange and OTC Derivatives Markets in 2022* (bis.org/statistics/rpfx22.htm).',
    'Lyons, R. K. (2001). *The Microstructure Approach to Exchange Rates*. MIT Press.',
    'King, M. R., Osler, C. L. & Rime, D. (2012). Foreign exchange market structure, players and evolution. In *Handbook of Exchange Rates*. Wiley.',
    'Monetary Authority of Singapore: foreign exchange market and exchange-rate policy (mas.gov.sg).',
  ],
  related: ['finance/assets/forex/basics', 'finance/forex/pips-lots-and-leverage', 'banking/theory/central-banking-singapore'],
}

export default guide
