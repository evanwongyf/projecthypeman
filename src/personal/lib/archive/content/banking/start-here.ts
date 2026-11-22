import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'A bank takes money from people who have it and lends it to people who need it, and in doing so runs the payment system, creates most of the money in the economy and takes on risks that the rest of us would rather avoid. That simple description covers a great many businesses: the neighbourhood savings account, the mortgage, the corporate loan, the private bank managing a family’s fortune, and the central bank that sits above them all. This shelf explains how banks work (the theory), how everyday consumer banking works and what it costs (with the arithmetic), what private banking is and how wealth is managed, and how Singapore’s banking system is built and regulated.',
  nutshell: [
    'Banks do four things: **take deposits, make loans, provide payments and manage risk**. They earn the **spread** between what they pay for funds and what they charge borrowers.',
    'The **dimensions of banking**: retail (consumer), commercial (business), investment, private (wealth) and central banking; they differ in clients, products, risks and regulation.',
    'A bank is **leveraged and fragile by design**: it finances long, illiquid loans with short-term deposits, so **capital, liquidity and deposit insurance** keep it standing.',
    'In Singapore, **DBS, OCBC and UOB** are the three local banks, supervised by the **Monetary Authority of Singapore (MAS)**, which is both central bank and integrated regulator.',
    'The arithmetic of everyday banking (**compounding, flat versus effective rates, amortisation, credit-card interest**) is where understanding saves money.',
  ],
  sections: [
    {
      id: 'dims',
      title: 'The dimensions of banking',
      lead: 'Five kinds of bank business.',
      blocks: [
        {
          t: 'table',
          head: ['Dimension', 'Clients', 'Typical products', 'How it earns', 'Main risks'],
          rows: [
            ['Retail (consumer) banking', 'Individuals and households', 'Savings and current accounts, cards, personal loans, mortgages, payments', 'Net interest margin; fees; interchange', 'Credit losses, fraud, competition for deposits'],
            ['Commercial (corporate) banking', 'Businesses of all sizes', 'Working-capital loans, trade finance, cash management, FX', 'Interest margin; fees', 'Credit risk, concentration, cyclical downturns'],
            ['Investment banking and markets', 'Corporates, governments, institutions', 'Underwriting, M&A advice, trading, derivatives', 'Fees; trading profits; spreads', 'Market risk, counterparty risk, conduct risk'],
            ['Private banking and wealth management', 'High-net-worth and ultra-high-net-worth individuals and families', 'Portfolio management, lending against assets, trusts, planning', 'Fees on assets; lending margin; product revenue', 'Compliance, reputation, market swings, client concentration'],
            ['Central banking', 'The government and the banking system', 'Monetary policy, currency issue, reserves, supervision', 'Seigniorage; investment returns (not profit-driven)', 'Inflation, financial instability, reserve losses'],
          ],
        },
        {
          t: 'flow',
          title: 'How money flows through a bank',
          nodes: [
            { label: 'Savers and depositors', sub: 'households, firms', tone: 'human' },
            { label: 'Deposits', sub: 'liabilities: short term, redeemable', tone: 'data' },
            { label: 'The bank', sub: 'screens, prices, pools and manages risk', tone: 'model' },
            { label: 'Loans and securities', sub: 'assets: longer, riskier, less liquid', tone: 'data' },
            { label: 'Borrowers', sub: 'households, firms, governments', tone: 'human' },
          ],
          loop: 'Interest flows back: borrowers pay the bank, the bank pays depositors, and keeps the difference',
        },
      ],
    },
    {
      id: 'sg',
      title: 'Singapore’s banking system in brief',
      lead: 'Who is who.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The regulator and central bank', tag: 'MAS', body: 'The Monetary Authority of Singapore is both central bank and integrated supervisor of banks, insurers, capital markets and payments. It manages monetary policy through the exchange rate rather than an interest rate.' },
            { title: 'Local banks', tag: 'DBS, OCBC, UOB', body: 'Three large local banks, designated domestic systemically important banks (D-SIBs), with regional operations in Asia. They hold a large share of local retail deposits and loans.' },
            { title: 'Foreign banks', tag: 'global presence', body: 'Many international banks (such as Citi, HSBC, Standard Chartered, UBS) operate here, with strengths in wholesale, trade finance, treasury and private banking.' },
            { title: 'Digital banks', tag: 'since 2022', body: 'MAS licensed new digital full banks in 2020 (for example GXS and MariBank), which launched in 2022, alongside digital-first offerings from incumbents.' },
            { title: 'Deposit insurance', tag: 'SDIC', body: 'The Singapore Deposit Insurance Corporation insures eligible Singapore-dollar deposits up to S$100,000 per depositor per member bank.' },
            { title: 'Payments', tag: 'PayNow, FAST, GIRO', body: 'Instant payments with a phone number or NRIC through PayNow, interbank transfers via FAST, and recurring bills by GIRO.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Numbers change', text: 'Rules, limits and rates in this shelf (deposit insurance limits, ratios, TDSR and tax-free thresholds) are accurate as of the time of writing and change; check MAS (mas.gov.sg) and your bank before relying on them. This is general education, not financial advice.' },
      ],
    },
    {
      id: 'route',
      title: 'A route through the shelf',
      lead: 'Theory first, or products first.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Why banks exist and how they work', body: '[What banks do](@banking/theory/what-banks-do), [money creation](@banking/theory/money-creation) and [capital and leverage](@banking/theory/capital-and-leverage).' },
            { title: 'What can go wrong', body: '[Liquidity and runs](@banking/theory/liquidity-and-runs), [credit risk](@banking/theory/credit-risk) and [interest-rate risk](@banking/theory/interest-rate-and-market-risk).' },
            { title: 'Rules and the central bank', body: '[Regulation and Basel](@banking/theory/regulation-and-basel) and [MAS and the exchange-rate policy](@banking/theory/central-banking-singapore).' },
            { title: 'Everyday banking', body: '[Deposits](@banking/consumer/deposits-and-interest), [loans and flat rates](@banking/consumer/loans-and-flat-rates), [cards](@banking/consumer/cards-and-payments), [mortgages](@banking/consumer/mortgages-in-singapore) and [credit scores](@banking/consumer/credit-scores-and-reports).' },
            { title: 'Private banking', body: '[What it is](@banking/private/private-banking-overview), [services and products](@banking/private/wealth-services-and-products), [the dimensions of wealth planning](@banking/private/dimensions-of-wealth), [compliance](@banking/private/compliance-kyc-and-tax-transparency) and [Singapore as a hub](@banking/private/singapore-wealth-hub).' },
          ],
        },
        { t: 'p', text: 'The accounting behind a bank’s balance sheet is on the [accounting shelf](@accounting/start-here), the maths of risk on the [quantitative finance shelf](@finance/quant/start-here), and the base-rate arithmetic behind fraud and money-laundering alerts on the [cybersecurity shelf](@cybersecurity/red-and-blue/detection-and-logging).' },
      ],
    },
  ],
  sources: [
    'Freixas, X. & Rochet, J.-C. (2008). *Microeconomics of Banking* (2nd ed.). MIT Press.',
    'Mishkin, F. S. & Eakins, S. G. (2018). *Financial Markets and Institutions* (9th ed.). Pearson.',
    'Monetary Authority of Singapore (mas.gov.sg): Singapore’s financial system, banking supervision and monetary policy.',
    'Singapore Deposit Insurance Corporation (sdic.org.sg).',
  ],
  related: ['banking/theory/what-banks-do', 'banking/consumer/deposits-and-interest', 'banking/private/private-banking-overview', 'accounting/start-here', 'finance/start-here'],
}

export default guide
