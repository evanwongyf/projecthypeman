import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Banks are among the most heavily regulated businesses in the world, because their failure imposes costs on people who had no part in the decision: depositors, borrowers and taxpayers. Regulation tries to make failure rare (through capital, liquidity and supervision), to make it less damaging when it happens (through resolution regimes and deposit insurance) and to keep the whole system stable (through macroprudential policy). This guide explains the economic case for bank regulation, the Basel framework from Basel I to III and its three pillars, stress tests, systemically important banks and the "too big to fail" problem, how failing banks are resolved, and how MAS applies these rules in Singapore, including limits on household borrowing.',
  nutshell: [
    'The case for regulation: **externalities** (bank failures spread), **information gaps** (depositors cannot judge banks), **moral hazard** (insurance and bail-outs encourage risk-taking) and **systemic risk**.',
    '**Basel framework**: Pillar 1 sets minimum **capital** for credit, market and operational risk; Pillar 2 is **supervisory review**; Pillar 3 is **market discipline** through disclosure. Basel III (post-2008) added higher quality capital, buffers, a leverage ratio and liquidity ratios.',
    '**Stress tests** project capital ratios under adverse scenarios to see whether banks would survive them.',
    '**Systemically important banks** face higher requirements; **resolution** regimes allow failing banks to be restructured (bail-in) without taxpayer bail-outs.',
    '**Macroprudential tools** (like Singapore’s TDSR, loan-to-value limits and countercyclical buffers) target the whole system rather than individual banks.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why regulate banks',
      lead: 'Private decisions with public costs.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Externalities and contagion', tag: 'systemic risk', body: 'A bank’s failure hurts others: lenders to it, firms that depend on its credit, and other banks exposed to it. The 2008 failure of Lehman Brothers froze credit worldwide.' },
            { title: 'Information asymmetry', tag: 'depositors', body: 'Small depositors cannot monitor a bank’s loans, so they rely on regulators to do it for them; deposit insurance replaces the need for them to.' },
            { title: 'Moral hazard', tag: 'insurance effects', body: 'Insured depositors and expected bail-outs reduce the market discipline on banks, encouraging risk-taking ("heads I win, tails the taxpayer loses"). Regulation counters this with capital and supervision.' },
            { title: 'Pro-cyclicality', tag: 'feedback loops', body: 'In booms banks lend freely and in busts they pull back, deepening cycles. Countercyclical buffers lean against this.' },
          ],
        },
        { t: 'p', text: 'The costs of regulation are real as well: capital and compliance costs reduce lending and increase prices, regulation can push risk into less-regulated sectors ("shadow banking"), and rules can create their own distortions (such as risk-weight arbitrage). The design problem is to get a safe system at the lowest cost to credit and growth.' },
      ],
    },
    {
      id: 'basel',
      title: 'The Basel framework',
      lead: 'A history in three accords.',
      blocks: [
        {
          t: 'table',
          head: ['Accord', 'Year', 'Main idea', 'Weakness revealed'],
          rows: [
            ['Basel I', '1988', 'A minimum 8% capital to risk-weighted assets, with five broad risk weights (0, 10, 20, 50, 100%)', 'Crude weights encouraged regulatory arbitrage (e.g. loans moved off the balance sheet)'],
            ['Basel II', '2004–2008', 'Three pillars; risk weights from external ratings or banks’ own models (IRB)', 'Models underestimated tail and liquidity risk; procyclical; too little high-quality capital'],
            ['Basel III', '2010–2017, phased in to 2028', 'More and better capital (CET1), buffers, leverage ratio, LCR and NSFR, higher requirements for systemically important banks, constraints on internal models (output floor)', 'Complexity; uneven implementation; rising role of non-bank finance'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Pillar 1: minimum requirements', tag: 'capital', body: 'Minimum capital for credit risk, market risk and operational risk, calculated by standardised or internal-model methods.' },
            { title: 'Pillar 2: supervisory review', tag: 'judgement', body: 'Supervisors assess each bank’s own capital planning (ICAAP) and may require extra capital for risks not captured in Pillar 1.' },
            { title: 'Pillar 3: market discipline', tag: 'disclosure', body: 'Banks publish details of capital, risk exposures and risk assessment so that investors and depositors can judge them.' },
            { title: 'Beyond the pillars', tag: 'liquidity and leverage', body: 'The leverage ratio, LCR and NSFR address problems that risk-weighted capital alone misses.' },
          ],
        },
      ],
    },
    {
      id: 'stress',
      title: 'Stress tests, systemic banks and resolution',
      lead: 'Beyond the minimum ratios.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{CET1}_{\text{stress}}=\frac{K_0-\sum_t\big(\text{losses}_t-\text{pre-provision profit}_t\big)}{\text{RWA}_{\text{stress}}}\ \ge\ \text{hurdle}`,
          caption: 'The logic of a bank stress test: starting capital less cumulative losses over the scenario, divided by risk-weighted assets under stress, compared with a hurdle rate.',
          where: [{ sym: 'K_0', def: 'starting CET1 capital' }, { sym: '\\text{losses}_t,\\ \\text{pre-provision profit}_t', def: 'credit and market losses and the bank’s earnings before provisions in each year of the scenario' }],
          syntax: [{ sym: 'K_0-\\sum(\\text{losses}-\\text{PPP})', say: 'capital after absorbing the losses net of earnings. Effect: a bank with strong earnings can absorb more. Why: profits are the first line of defence.' }, { sym: '\\text{RWA}_{\\text{stress}}', say: 'risk weights rise as borrowers deteriorate. Effect: the denominator grows, so ratios fall twice: capital down, RWA up. Why: downgrades raise risk weights.' }],
          worked: {
            title: 'A severe scenario',
            steps: ['Starting CET1 capital 7.0 on RWA 54; a three-year scenario with GDP −5%, unemployment up 4 points and property prices −30%.', 'Cumulative credit and market losses 6.5; pre-provision profit 3.2 over the three years: net capital loss 3.3 → capital 3.7. RWA rises to 58.', 'Stressed CET1 ratio = 3.7/58 = 6.4%; hurdle 4.5% + buffers: passes the minimum but eats into the buffer, so dividends would be restricted.'],
            answer: 'Stress tests are a forward-looking complement to the static ratios. MAS runs industry-wide stress tests of the local banks, covering credit, market and liquidity shocks, and publishes the results in its Financial Stability Review.',
          },
        },
        {
          t: 'table',
          head: ['Concept', 'What it means', 'Example in Singapore'],
          rows: [
            ['D-SIB / G-SIB', 'A domestic or global systemically important bank: failure would harm the system; subject to a higher loss-absorbency surcharge', 'DBS, OCBC and UOB are designated D-SIBs'],
            ['Too big to fail', 'The expectation that the state would rescue a large bank', 'Reduced by resolution regimes and bail-in rules'],
            ['Resolution', 'Orderly restructuring or wind-down of a failing bank, protecting critical functions without taxpayer cost', 'MAS has resolution powers under the Financial Institutions (Resolution) Act'],
            ['Bail-in', 'Loss absorption by shareholders and creditors (conversion or write-down of bonds)', 'Applies to capital instruments and some senior debt'],
            ['Living will', 'A recovery and resolution plan, prepared by the bank in advance', 'Required of significant banks'],
            ['Macroprudential policy', 'Tools aimed at system-wide risk', 'TDSR, loan-to-value limits, countercyclical buffer'],
          ],
        },
      ],
    },
    {
      id: 'sg',
      title: 'How Singapore applies it',
      lead: 'MAS’s integrated approach.',
      blocks: [
        { t: 'p', text: 'MAS is an integrated regulator: it supervises banks, insurers, capital markets and payments as well as acting as central bank. It applies Basel III (via Notices such as 637 for capital and 649 for liquidity) with requirements that are stricter than the Basel minimums for locally incorporated banks, and supervises financial institutions through a risk-based framework. It has also used **macroprudential measures** to curb household leverage and property-market excesses.' },
        {
          t: 'table',
          head: ['Measure', 'What it does', 'Notes (check current rules)'],
          rows: [
            ['Total Debt Servicing Ratio (TDSR)', 'Caps total monthly debt repayments at 55% of gross monthly income for property loans', 'Introduced in 2013; applies to all financial institutions lending for property'],
            ['Mortgage Servicing Ratio (MSR)', 'Caps the mortgage repayment at 30% of gross income for HDB flats and executive condominiums', 'Applies to bank and HDB loans'],
            ['Loan-to-value (LTV) limits', 'Cap the loan as a proportion of property value, with lower limits for second loans and longer tenures', 'First housing loan with bank: 75% LTV where tenure is within the limit'],
            ['Unsecured credit limits', 'Limits on credit lines and borrowing based on income', 'Introduced to curb credit-card and personal-loan debt'],
            ['Capital and liquidity', 'Higher than Basel minimum capital; LCR and NSFR requirements', 'D-SIBs have additional buffers'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Regulation and innovation', text: 'MAS also runs a regulatory sandbox for fintech experiments, licenses digital banks and payment services, and has a Financial Sector Development Fund to build the sector. It is a case where the regulator is also a promoter of the industry, with rules for conduct (Fair Dealing, Financial Advisers Act), anti-money-laundering and technology risk management.' },
      ],
    },
  ],
  sources: [
    'Basel Committee on Banking Supervision (2017). *Basel III: Finalising post-crisis reforms*; (2011) *Basel III: A global regulatory framework for more resilient banks*.',
    'Dewatripont, M. & Tirole, J. (1994). *The Prudential Regulation of Banks*. MIT Press.',
    'Admati, A. & Hellwig, M. (2013). *The Bankers’ New Clothes*. Princeton University Press.',
    'Monetary Authority of Singapore. *Financial Stability Review* (annual); *Notices 637 and 649*; Financial Institutions (Resolution) Act 2018.',
    'Financial Stability Board (2014). *Key Attributes of Effective Resolution Regimes for Financial Institutions*.',
  ],
  related: ['banking/theory/capital-and-leverage', 'banking/theory/liquidity-and-runs', 'banking/consumer/mortgages-in-singapore', 'banking/private/compliance-kyc-and-tax-transparency', 'banking/theory/central-banking-singapore'],
}

export default guide
