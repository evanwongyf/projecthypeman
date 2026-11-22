import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most governments run deficits and accumulate debt; Singapore runs its finances more like an endowment. Its constitution requires each government to balance its budget over its term and stops it from spending the reserves built up by earlier governments without the President’s agreement. Part of the expected return on those reserves is spent each year, the rest is kept, and the government borrows only to invest or to deepen the bond market, never to fund day-to-day spending. This guide explains the framework (the reserves rules, the Net Investment Returns Contribution, why Singapore issues bonds when it has no need to borrow, and how CPF fits in), works the arithmetic of an endowment spending rule, and weighs the trade-offs between saving for future generations and spending today.',
  nutshell: [
    'The government must **balance the budget over each term** and may not draw on **past reserves** without the elected **President’s** approval.',
    'The **Net Investment Returns Contribution (NIRC)** lets the budget use **up to 50%** of the expected long-term real return on reserves managed by **GIC, MAS and Temasek**; the rest is kept.',
    'Singapore **borrows but does not spend the borrowing**: SGS and Savings Bonds develop markets; Special SGS absorb **CPF** savings; since 2021 it may borrow for **long-lived infrastructure**.',
    '**Gross** government debt is high, but **net** assets are strongly positive: the debt is backed by assets, not past deficits.',
    'The model trades **spending today** against **resilience and future generations**: the 2020 drawdown for COVID-19 shows how it is used in crises.',
  ],
  sections: [
    {
      id: 'rules',
      title: 'The rules: reserves, balance and the two keys',
      lead: 'A constitutional fiscal rule.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Current and past reserves', tag: 'the line', body: 'Reserves built up during the current government’s term are its own. Reserves accumulated by previous governments are "past reserves", protected by the constitution.' },
            { title: 'The two keys', tag: 'since 1991', body: 'Spending past reserves needs both the government and the elected President. The President can veto a budget that would draw on them, and must be consulted on key appointments at GIC, MAS and Temasek.' },
            { title: 'Balanced over a term', tag: 'flexibility within', body: 'Deficits in some years are fine as long as the government’s budget balances over its term of up to five years. Surpluses in good years build buffers for bad ones.' },
            { title: 'No borrowing for spending', tag: 'the discipline', body: 'Money borrowed through government securities cannot be used to fund the budget. Only investment returns (through the NIRC) and revenues from taxes and fees can.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{overall balance} = \underbrace{\text{operating revenue} - \text{total expenditure}}_{\text{primary balance}} - \text{special transfers} + \text{NIRC}`,
          plain: 'The Singapore budget starts from the primary balance: tax and fee revenue minus operating and development spending. It then subtracts special transfers (one-off support and top-ups to endowment funds) and adds the contribution from investment returns. The overall balance is what must even out over a term.',
          syntax: [
            { sym: String.raw`\text{special transfers}`, say: 'One-off payments, such as support packages and top-ups to endowment and trust funds.' },
            { sym: String.raw`\text{NIRC}`, say: 'The Net Investment Returns Contribution.' },
          ],
          worked: {
            title: 'An illustrative year (S$ billion)',
            steps: [
              String.raw`Operating revenue 100; total expenditure 106: primary balance \(-6\).`,
              String.raw`Special transfers 15 (household support and a top-up to a healthcare endowment fund).`,
              String.raw`NIRC 23.`,
              String.raw`Overall balance: \(100 - 106 - 15 + 23 = +2\), a small surplus.`,
            ],
            why: ['taxes and fees against spending', 'one-off items', 'the investment return used', 'add up'],
            answer: 'Without the NIRC this budget would show a deficit of 21. Investment returns let Singapore spend more than its taxes raise while keeping the overall budget balanced. Figures are illustrative; see the Ministry of Finance budget statements for actual numbers.',
          },
        },
      ],
    },
    {
      id: 'nirc',
      title: 'The Net Investment Returns Contribution',
      lead: 'Spending half the expected return.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{NIRC} \le 0.5 \times \underbrace{\rho \cdot A}_{\text{expected long-term real return}}, \qquad A_{t+1} \approx A_t\,(1 + \rho) - \text{NIRC}_t`,
          plain: 'The framework lets the budget use up to half of the expected long-term real return on the net assets managed by GIC, MAS and Temasek. It is based on expected, not actual, returns, so the budget does not swing with markets. The half that is not spent stays invested, so the reserves keep growing in real terms.',
          syntax: [
            { sym: String.raw`\rho`, say: 'Read "rho": the expected long-term real rate of return on the reserves.' },
            { sym: String.raw`A`, say: 'The net assets in the framework.' },
          ],
          worked: {
            title: 'An endowment spending rule (illustrative)',
            steps: [
              String.raw`Net assets \(A = \$1{,}000\) billion; expected real return \(\rho = 4\%\): $40 billion.`,
              String.raw`Spend 50%: NIRC \(= \$20\) billion. Keep $20 billion invested.`,
              String.raw`Real assets grow at about \(4\% \times 0.5 = 2\%\) a year: \(1000 \times 1.02^{20} \approx \$1{,}486\) billion after 20 years.`,
              String.raw`NIRC then is about \(0.5 \times 0.04 \times 1486 \approx \$29.7\) billion in today’s money.`,
              String.raw`If instead 100% of returns were spent, assets would stay at $1,000 billion in real terms and spending would stay at $40 billion.`,
            ],
            why: ['hypothetical numbers', 'the 50% rule', 'half the return compounds', 'spending grows with the endowment', 'the alternative: more now, flat later'],
            answer: 'Spending half gives less today ($20 billion against $40 billion) but a contribution that grows, overtaking the spend-everything rule once the reserves have roughly doubled (about 35 years at 2% real growth). It is a choice about fairness between generations.',
          },
        },
        {
          t: 'plot',
          title: 'Spending all of the return against spending half (illustrative, real terms)',
          x: [0, 60],
          y: [0, 70],
          xLabel: 'years',
          yLabel: 'annual contribution ($ billion, real)',
          curves: [
            { f: () => 40, label: 'spend 100% of expected return' },
            { f: (t: number) => 20 * 1.02 ** t, label: 'spend 50%, keep 50%' },
          ],
          points: [{ x: 35, y: 40, label: 'crossover ≈ year 35' }],
          caption: 'Assumes a steady 4% real return and no new surpluses. Real returns vary, and population and GDP growth change what a given contribution is worth per person.',
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'GIC', body: 'Manages most of the government’s financial reserves, invested globally across asset classes for long-term real returns.' },
            { title: 'MAS', body: 'Holds the official foreign reserves, which also back the exchange-rate policy. See [MAS](@banking/theory/central-banking-singapore).' },
            { title: 'Temasek', body: 'An investment company owned by the Ministry of Finance, holding stakes in Singapore and global companies. Its returns were brought into the NIR framework in 2016.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'How big is it?', text: 'The NIRC has become one of the largest contributors to government revenue, in recent years roughly 3–4% of GDP, comparable in size to the biggest individual taxes. It lets Singapore keep personal tax rates and GST comparatively low while spending on healthcare, education and housing.' },
      ],
    },
    {
      id: 'borrowing',
      title: 'Why a government with surpluses issues bonds',
      lead: 'Gross debt, net assets.',
      blocks: [
        {
          t: 'table',
          head: ['Instrument', 'Why it is issued', 'What happens to the money'],
          rows: [
            ['Singapore Government Securities (SGS), market development', 'To build a liquid bond market with a benchmark yield curve for pricing private bonds and loans', 'Invested, not spent: it cannot fund the budget'],
            ['Special SGS (SSGS)', 'To give the CPF Board a safe asset paying a guaranteed rate for members’ savings', 'Invested by GIC; returns pay CPF interest'],
            ['Singapore Savings Bonds', 'A safe, flexible savings product for individuals', 'Invested, not spent'],
            ['SGS (Infrastructure), under SINGA', 'Since 2021, to finance major long-lived infrastructure (such as new rail lines and coastal protection) up to S$90 billion', 'Spent on the projects, matching the cost to the generations that use them'],
            ['Treasury bills', 'Short-term money-market instruments; also help MAS manage liquidity', 'Invested'],
          ],
          caption: 'SINGA is the Significant Infrastructure Government Loan Act 2021. Borrowing for assets that last 50 years or more spreads their cost over the users, rather than charging today’s taxpayers for a railway their grandchildren will ride.',
        },
        {
          t: 'math',
          tex: String.raw`\text{net worth} = \underbrace{\text{financial and other assets}}_{\text{invested reserves}} - \underbrace{\text{gross debt}}_{\text{SGS, SSGS, Savings Bonds}} > 0`,
          plain: 'Gross debt counts what the government owes. Net worth subtracts that from what it owns. Because the borrowing is invested rather than spent, every dollar of debt has a matching asset, and the government also holds reserves built from past surpluses, so net worth is positive.',
          syntax: [{ sym: String.raw`\text{net worth}`, say: 'Assets minus liabilities: the government’s balance sheet position.' }],
          worked: {
            steps: [
              String.raw`Singapore’s gross government debt has been well above 100% of GDP (around 170% in recent years).`,
              String.raw`Almost all of it is matched by assets bought with the proceeds, especially CPF-related SSGS invested by GIC.`,
              String.raw`On top of that, past surpluses mean assets exceed debt: the government is a net creditor.`,
            ],
            why: ['the headline figure that confuses comparisons', 'borrowing for investment, not spending', 'the true position'],
            answer: 'Comparing Singapore’s gross debt ratio with Japan’s or Italy’s is misleading. Ratings agencies give Singapore the top AAA rating from all three major agencies, because its net position is strongly positive and its debt is in its own currency.',
          },
        },
        {
          t: 'diagram',
          title: 'How the money moves',
          nodes: [
            { id: 'hh', label: 'Workers and employers', sub: 'CPF contributions', shape: 'pill', col: 0, row: 0, tone: 'ink' },
            { id: 'cpf', label: 'CPF Board', sub: 'pays members guaranteed interest', col: 1, row: 0, tone: 'teal' },
            { id: 'gov', label: 'Government', sub: 'issues SSGS, SGS, Savings Bonds', col: 2, row: 0, tone: 'mustard' },
            { id: 'gic', label: 'GIC, MAS, Temasek', sub: 'invest the reserves globally', col: 2, row: 1, tone: 'lavender' },
            { id: 'nirc', label: 'NIRC', sub: 'up to 50% of expected real returns', col: 1, row: 1, tone: 'mint' },
            { id: 'bud', label: 'Annual budget', sub: 'healthcare, education, transfers', col: 0, row: 1, tone: 'orange' },
          ],
          edges: [
            { from: 'hh', to: 'cpf' },
            { from: 'cpf', to: 'gov', label: 'buys SSGS' },
            { from: 'gov', to: 'gic', label: 'proceeds invested' },
            { from: 'gic', to: 'nirc', label: 'returns' },
            { from: 'nirc', to: 'bud' },
            { from: 'gic', to: 'gov', label: 'interest to pay CPF', dashed: true },
          ],
        },
      ],
    },
    {
      id: 'cpf',
      title: 'CPF: mandatory saving as social insurance',
      lead: 'Individual accounts, not pay-as-you-go.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Contributions', body: 'For most employees aged 55 and below, 37% of wages goes into CPF (20% from the employee, 17% from the employer), with lower rates at older ages and a wage ceiling.' },
            { title: 'Accounts', body: 'Contributions are split among the Ordinary Account (housing, education, investment), Special or Retirement Account (retirement) and MediSave (healthcare), each with its own interest rate and uses.' },
            { title: 'Guaranteed interest', body: 'Members earn guaranteed rates set by formula with floors (higher for retirement and MediSave balances, with extra interest on the first tranche of balances), paid from the returns on SSGS proceeds.' },
            { title: 'CPF LIFE', body: 'At 65, retirement savings are turned into a lifelong annuity, insuring members against outliving their savings.' },
          ],
        },
        {
          t: 'table',
          head: ['', 'Pay-as-you-go pensions (most rich countries)', 'Funded individual accounts (CPF)'],
          rows: [
            ['Who pays pensions', 'Today’s workers, through payroll taxes', 'Each member’s own past savings plus interest'],
            ['Effect of ageing', 'Fewer workers per retiree strains the system', 'Each cohort funds itself; ageing raises healthcare costs instead'],
            ['Redistribution', 'Often large, across and within generations', 'Limited within accounts; done through top-ups, grants and Workfare instead'],
            ['Risk to members', 'Political: benefits can be cut', 'Low balances for low earners; longevity risk handled by CPF LIFE'],
            ['Government balance sheet', 'Large unfunded pension promises, off the books', 'Matching liabilities (SSGS) and assets'],
          ],
        },
      ],
    },
    {
      id: 'tradeoffs',
      title: 'Trade-offs and debates',
      lead: 'Prudence has costs too.',
      blocks: [
        {
          t: 'dodont',
          do: ['Count the insurance value of reserves: they let Singapore spend heavily in 2009 and 2020 without borrowing', 'Note that the 50% rule makes spending track expected, not actual, returns, smoothing the budget', 'Compare with Norway, which spends about 3% of its oil fund’s value a year, a similar endowment logic'],
          dont: ['Assume more saving is always better: money saved for future generations is money not spent on today’s needs', 'Compare gross debt ratios across countries without looking at assets', 'Forget that the expected return is an assumption: lower long-run returns mean a smaller sustainable contribution'],
        },
        {
          t: 'steps',
          items: [
            { title: '2009: the first draw', body: 'During the global financial crisis the government, with the President’s approval, drew about S$4.9 billion from past reserves to fund the Jobs Credit scheme and a special risk-sharing initiative for bank loans.' },
            { title: '2020: COVID-19', body: 'Four budgets in 2020 provided support worth about S$100 billion. The President approved drawing on past reserves for a large part of it, the biggest draw in Singapore’s history.' },
            { title: 'Ageing and the GST rise', body: 'With healthcare and eldercare spending rising as the population ages, the government raised GST from 7% to 9% in 2023–24, paired with permanent and transitional offsets for lower-income households.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Numbers change', text: 'NIRC amounts, debt figures, CPF rates and borrowing limits change with each budget. Check the Ministry of Finance (mof.gov.sg), the CPF Board (cpf.gov.sg) and MAS for current figures.' },
      ],
    },
  ],
  sources: [
    'Constitution of the Republic of Singapore, Part V (the President and the protection of reserves).',
    'Ministry of Finance, Singapore. Budget statements and *Singapore’s Reserves*. mof.gov.sg.',
    'Significant Infrastructure Government Loan Act 2021 (Singapore).',
    'Central Provident Fund Board. CPF contribution and allocation rates; CPF LIFE. cpf.gov.sg.',
  ],
  related: ['economics/fiscal/debt-dynamics', 'economics/fiscal/budgets-and-stabilisers', 'banking/theory/central-banking-singapore'],
}

export default guide
