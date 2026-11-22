import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Investors cannot control returns, but they can control costs, and costs compound just as returns do. A 1% annual fee sounds small, but over thirty years at 7% it removes a quarter of the final wealth. Taxes are the second leak: Singapore is kind to investors (no capital gains tax, no tax on dividends from Singapore companies, no tax on interest from most bank deposits for individuals), but the picture changes with foreign holdings: US dividends are subject to withholding tax at 30% for Singapore residents, and US estate tax can apply above US$60,000 of US-situs assets for non-US persons. This guide sets out the costs that matter, a worked fee-drag calculation, the Singapore tax position, how the choice of ETF domicile changes the withholding tax, and how brokers, custodians, CPF and SRS fit in. Rules and rates change, so check the current positions before relying on them.',
  nutshell: [
    '**Fee drag**: US$10,000 at 7% for 30 years grows to about **US$76,100**; with a 1% annual fee (net 6%) it grows to about **US$57,400**, a loss of **25%**.',
    'Costs to watch: **expense ratio**, **brokerage commission**, **bid–ask spread**, **FX conversion** and **platform or custody fees**.',
    'Singapore: **no capital-gains tax**, **one-tier dividends exempt**, **interest on most bank deposits exempt for individuals**; gains from a **trade or business** can be taxed as income.',
    '**US dividends** are subject to **30% withholding** for Singapore residents; **Irish-domiciled ETFs** typically reduce it to **15%** at fund level; **US estate tax** can apply to US-situs assets above **US$60,000**.',
    '**CPFIS** and **SRS** allow investing from retirement accounts with their own rules, costs and tax effects.',
  ],
  sections: [
    {
      id: 'costs',
      title: 'Costs compound against you',
      lead: 'A small percentage over a long time.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`W_n=W_0\,(1+R-c)^{n},\qquad \text{loss from fees}=1-\Big(\frac{1+R-c}{1+R}\Big)^{n}`,
          caption: 'Final wealth when a yearly cost c is deducted from the return R, and the share of wealth lost to the cost.',
          where: [{ sym: 'W_0,\\ W_n', def: 'the starting and final wealth' }, { sym: 'R', def: 'the gross annual return' }, { sym: 'c', def: 'the annual cost (expense ratio plus other fees)' }, { sym: 'n', def: 'years' }],
          syntax: [{ sym: '(1+R-c)^{n}', say: 'compounding at the net return. Effect: a difference of 1 point a year becomes a difference of a quarter over 30 years. Why: each year’s fee reduces the base on which later returns compound.' }],
          worked: {
            title: '$10,000 for 30 years at 7%',
            steps: ['No fee: 10,000 × 1.07³⁰ = $76,123.', 'A 1% fee (net 6%): 10,000 × 1.06³⁰ = $57,435.', 'A 0.2% fee (net 6.8%) gives about $72,000 and a 0.5% fee (net 6.5%) about $66,100: the fee is the one thing you control.'],
            answer: 'The 1% fee takes 25% of the final wealth (1 − 57,435/76,123). Over the long term the lowest-cost version of an investment tends to beat the average high-cost version before any skill is considered, because the market’s return is the same for everyone and costs are the difference.',
          },
        },
        {
          t: 'table',
          head: ['Cost', 'What it is', 'Typical range (check current)', 'How to reduce it'],
          rows: [
            ['Expense ratio (OCF)', 'Annual fund charge, deducted from the fund’s assets', 'Index ETFs from 0.05% to 0.4%; active funds 1% to 2%', 'Use broad low-cost index funds'],
            ['Brokerage commission', 'A fee per trade', 'Varies by platform and market; minimum fees can dominate small trades', 'Fewer, larger trades; regular-savings plans'],
            ['Bid–ask spread', 'The gap between buying and selling prices', 'Narrow for large ETFs, wide for illiquid stocks', 'Trade liquid products; use limit orders'],
            ['FX conversion', 'The margin when exchanging currency for foreign assets', 'From 0.0x% to over 1% depending on the platform', 'Use a multi-currency account'],
            ['Platform, custody and withdrawal fees', 'Account fees and fees to move money', 'Often small but not zero', 'Compare the full fee schedule'],
            ['Taxes', 'Withholding and income taxes', 'See below', 'Choose domicile and account types carefully'],
          ],
          caption: 'Figures are indicative; they change and differ between providers.',
        },
      ],
    },
    {
      id: 'tax',
      title: 'The Singapore tax position',
      lead: 'Kind to investors, with foreign exceptions.',
      blocks: [
        {
          t: 'table',
          head: ['Item', 'Treatment for a Singapore-resident individual', 'Notes'],
          rows: [
            ['Capital gains on shares, ETFs, REITs', 'Not taxed', 'Unless the activity amounts to a trade or business (frequent, short-term dealing with a profit motive)'],
            ['Dividends from Singapore-resident companies', 'Tax-exempt (one-tier)', 'The company has already paid tax'],
            ['Interest on most bank deposits', 'Exempt for individuals', 'Check the product'],
            ['REIT distributions', 'Mostly tax-exempt for individuals', 'Distributions can include different components; check the REIT’s tax statement'],
            ['US dividends', '30% US withholding tax, no treaty relief', 'Singapore has no income-tax treaty with the US; direct US holdings suffer the 30% rate'],
            ['US-situs assets and estate tax', 'Estate tax can apply above US$60,000 for non-US persons', 'Applies to US stocks and US-domiciled ETFs held directly; check with an adviser'],
            ['Foreign dividends and gains', 'Foreign-sourced income received by individuals in Singapore is generally exempt', 'Subject to the other country’s withholding and tax rules'],
          ],
          caption: 'A summary of the common position at the time of writing: tax rules change and individual circumstances vary. Check IRAS and take advice for significant sums.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Irish-domiciled ETFs', tag: 'domicile matters', body: 'Funds domiciled in Ireland benefit from the Ireland–US tax treaty, which reduces US dividend withholding to 15% at the fund level; many Singapore investors prefer them to US-domiciled funds for US stocks. They also avoid the US estate-tax exposure that arises on direct US holdings.' },
            { title: 'Accumulating or distributing', tag: 'fund structure', body: 'Accumulating funds reinvest income inside the fund; distributing funds pay it out. For a Singapore investor with no tax on dividends, the choice is mostly about convenience and reinvestment costs.' },
            { title: 'Currency', tag: 'hidden risk', body: 'Holding US or global assets exposes returns to the exchange rate against the Singapore dollar; this adds a source of variation (and diversification).' },
            { title: 'Tax residence changes', tag: 'moving abroad', body: 'The tax treatment differs for residents of other countries, and moving can change the rules: take advice before relocating.' },
          ],
        },
      ],
    },
    {
      id: 'platforms',
      title: 'Brokers, custody, CPF and SRS',
      lead: 'Where the investments live.',
      blocks: [
        {
          t: 'table',
          head: ['Route', 'What it offers', 'Considerations'],
          rows: [
            ['Local bank brokers and platforms', 'Access to SGX, global markets, regular savings plans, a single account', 'Higher commissions in some cases; convenient with CPF and SRS'],
            ['Online brokers', 'Low commissions, access to many markets and currencies', 'Check regulation (MAS licence), protection of client assets, and customer service'],
            ['Robo-advisers', 'Automatic allocation and rebalancing into index funds', 'An additional fee; useful for beginners and for discipline'],
            ['CPF Investment Scheme (CPFIS)', 'Invest OA and SA savings above the minimum balances in approved products', 'The guaranteed CPF rates are the benchmark; fund fees and sales charges matter'],
            ['SRS', 'A tax-deferred account that can hold shares, funds and bonds', 'Contributions reduce taxable income; only 50% of withdrawals after retirement age are taxable; early withdrawal is penalised'],
          ],
          caption: 'Check the MAS Financial Institutions Directory for a platform’s licence and the investor-protection provisions for client assets.',
        },
        { t: 'dodont', do: ['Compare the total cost, including spreads and FX', 'Use a regulated broker and check how client assets are held', 'Prefer low-cost diversified funds for the core of a portfolio', 'Keep records for tax and estate purposes'], dont: ['Assume Singapore’s absence of capital-gains tax applies to trading as a business', 'Ignore US withholding tax and estate tax on US holdings', 'Buy a product because of a free gift or a sales commission', 'Use leverage or margin without understanding the margin-call rules'] },
      ],
    },
  ],
  sources: [
    'Bogle, J. C. (2005). The relentless rules of humble arithmetic. *Financial Analysts Journal*, 61(6), 22–35.',
    'Inland Revenue Authority of Singapore: income tax for individuals; foreign-sourced income; taxation of investment income (iras.gov.sg).',
    'US Internal Revenue Service: withholding on dividends paid to foreign persons; estate tax for non-resident aliens (irs.gov).',
    'Monetary Authority of Singapore: Financial Institutions Directory and investor protection (mas.gov.sg); CPF Board: CPF Investment Scheme (cpf.gov.sg).',
  ],
  related: ['finance/investing-process/asset-allocation-in-practice', 'accounting/taxation/property-and-other-taxes', 'finance/assets/funds'],
}

export default guide
