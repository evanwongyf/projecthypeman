import type { ArchiveNode } from '../topics'

// Banking: the theory of what banks are and do, consumer banking and its arithmetic,
// private banking and wealth management, regulation and Singapore's system.

export const BANKING: ArchiveNode = {
  slug: 'banking',
  title: 'Banking',
  blurb: 'What banks are and how they work: intermediation, money creation, capital and liquidity, risk and regulation; everyday consumer banking and its arithmetic; private banking and wealth management; and how Singapore’s banking system and central bank operate.',
  glyph: '🏦',
  color: 'color-mix(in srgb, var(--mustard) 55%, var(--teal))',
  tags: ['banking', 'bank', 'consumer banking', 'private banking', 'wealth management', 'loans', 'deposits', 'mas', 'singapore banks', 'central bank'],
  children: [
    { slug: 'start-here', title: 'Start here', blurb: 'What banks do, the dimensions of banking from retail to private to investment, and a route through the shelf.', minutes: 6, glyph: '★', tags: ['beginner', 'overview', 'roadmap'] },
    {
      slug: 'theory',
      title: 'Banking theory',
      blurb: 'Why banks exist, how they create money, how capital and liquidity keep them standing, how they price and manage risk, and how they are regulated.',
      glyph: '∑',
      tags: ['banking theory', 'financial intermediation', 'money creation', 'bank capital', 'liquidity', 'basel'],
      children: [
        { slug: 'what-banks-do', title: 'What banks do: intermediation and the balance sheet', blurb: 'Maturity and liquidity transformation, delegated monitoring, how a bank earns a spread, and reading a bank balance sheet.', minutes: 12, tags: ['financial intermediation', 'balance sheet', 'net interest margin', 'maturity transformation', 'spread', 'delegated monitoring'] },
        { slug: 'money-creation', title: 'Money creation and the money supply', blurb: 'How loans create deposits, the money multiplier and its limits, M1 and M2, and what the central bank controls.', minutes: 12, tags: ['money creation', 'money multiplier', 'fractional reserve', 'm2', 'broad money', 'base money', 'reserves'] },
        { slug: 'capital-and-leverage', title: 'Bank capital, leverage and loss absorption', blurb: 'Equity as the cushion, return on equity and leverage, risk-weighted assets and the Basel capital ratios.', minutes: 12, tags: ['capital', 'leverage', 'roe', 'risk weighted assets', 'cet1', 'tier 1', 'basel', 'capital ratio'] },
        { slug: 'liquidity-and-runs', title: 'Liquidity, bank runs and deposit insurance', blurb: 'The Diamond–Dybvig model, liquidity coverage and funding ratios, Silicon Valley Bank in 2023 and how deposit insurance works.', minutes: 12, tags: ['bank run', 'diamond dybvig', 'lcr', 'nsfr', 'deposit insurance', 'svb', 'liquidity risk', 'sdic'] },
        { slug: 'credit-risk', title: 'Credit risk: PD, LGD, EAD and capital', blurb: 'How lenders assess borrowers, expected and unexpected loss, provisioning, the Vasicek capital model and credit scoring.', minutes: 13, tags: ['credit risk', 'pd', 'lgd', 'ead', 'expected loss', 'provisions', 'ifrs 9', 'npl', 'credit score', 'vasicek'] },
        { slug: 'interest-rate-and-market-risk', title: 'Interest-rate risk and the margin', blurb: 'Repricing gaps and duration gaps, how rate rises help and hurt, hedging, and benchmark rates such as SORA.', minutes: 11, tags: ['interest rate risk', 'duration gap', 'repricing gap', 'net interest income', 'sora', 'hedging', 'swaps', 'banking book'] },
        { slug: 'regulation-and-basel', title: 'Regulation: Basel III, resolution and supervision', blurb: 'Why banks are regulated, the Basel framework, stress tests, systemically important banks and how failures are resolved.', minutes: 12, tags: ['regulation', 'basel iii', 'stress test', 'd-sib', 'resolution', 'too big to fail', 'supervision', 'macroprudential'] },
        { slug: 'central-banking-singapore', title: 'Central banking and MAS: an exchange-rate policy', blurb: 'What central banks do, how MAS manages the S$NEER instead of an interest rate, and how SORA and interest rates are set in Singapore.', minutes: 12, tags: ['mas', 'monetary policy', 's$neer', 'exchange rate', 'sora', 'central bank', 'inflation', 'interest rates', 'singapore dollar'] },
      ],
    },
    {
      slug: 'consumer',
      title: 'Consumer banking',
      blurb: 'Deposits and interest, loans and the flat-versus-effective rate, credit and debit cards, mortgages and the TDSR, payments such as PayNow, and credit scores.',
      glyph: '💳',
      tags: ['consumer banking', 'retail banking', 'savings', 'loans', 'cards', 'mortgage', 'paynow'],
      children: [
        { slug: 'deposits-and-interest', title: 'Deposits, interest and compounding', blurb: 'Savings and fixed deposits, nominal and effective rates, bonus interest, inflation, and the guarantee under deposit insurance.', minutes: 11, tags: ['savings account', 'fixed deposit', 'compound interest', 'ear', 'bonus interest', 'inflation', 'real interest rate', 'sdic'] },
        { slug: 'loans-and-flat-rates', title: 'Personal loans and the flat rate trap', blurb: 'Instalment loans, flat versus effective interest rates, early repayment, fees and how to compare offers.', minutes: 11, tags: ['personal loan', 'flat rate', 'eir', 'effective interest rate', 'car loan', 'instalment', 'early repayment', 'apr'] },
        { slug: 'cards-and-payments', title: 'Cards, payments and PayNow', blurb: 'How a card payment moves money, interchange and fees, revolving credit and its cost, FAST, GIRO and PayNow, and fraud protection.', minutes: 12, tags: ['credit card', 'debit card', 'interchange', 'paynow', 'fast', 'giro', 'payments', 'interest', 'chargeback', 'scams'] },
        { slug: 'mortgages-in-singapore', title: 'Home loans: amortisation, SORA and the TDSR', blurb: 'How a mortgage amortises, floating and fixed rates, TDSR and MSR limits, loan-to-value rules and the cost of refinancing.', minutes: 13, tags: ['mortgage', 'home loan', 'sora', 'tdsr', 'msr', 'ltv', 'hdb loan', 'refinancing', 'amortisation', 'property'] },
        { slug: 'credit-scores-and-reports', title: 'Credit reports, scores and borrowing wisely', blurb: 'What the Credit Bureau Singapore records, how scores work, debt-to-income and a framework for borrowing.', minutes: 9, tags: ['credit score', 'credit bureau singapore', 'cbs', 'credit report', 'debt', 'debt to income', 'bankruptcy', 'borrowing'] },
      ],
    },
    {
      slug: 'private',
      title: 'Private banking and wealth',
      blurb: 'What private banking is, how it is structured, the services and the dimensions of a client relationship, lending against portfolios, compliance and tax transparency, and Singapore as a wealth hub.',
      glyph: '♛',
      tags: ['private banking', 'wealth management', 'family office', 'hnwi', 'lombard loan', 'discretionary'],
      children: [
        { slug: 'private-banking-overview', title: 'What private banking is and who it serves', blurb: 'Client segments from affluent to ultra-high net worth, the economics of private banks, relationship managers and how the model differs from retail banking.', minutes: 12, tags: ['private banking', 'hnwi', 'uhnw', 'affluent', 'wealth management', 'relationship manager', 'aum', 'fees'] },
        { slug: 'wealth-services-and-products', title: 'Wealth services and products', blurb: 'Advisory versus discretionary mandates, portfolio construction, structured products, alternatives, lending against portfolios and fee structures.', minutes: 13, tags: ['discretionary', 'advisory', 'structured products', 'lombard loan', 'alternatives', 'private equity', 'fees', 'portfolio', 'trust'] },
        { slug: 'dimensions-of-wealth', title: 'The dimensions of wealth planning', blurb: 'Investment, banking and credit, estate and succession, tax and residency, insurance, philanthropy and family governance, and how they interlock.', minutes: 12, tags: ['wealth planning', 'succession', 'estate', 'trust', 'insurance', 'philanthropy', 'family office', 'family governance', 'dimensions'] },
        { slug: 'compliance-kyc-and-tax-transparency', title: 'KYC, anti-money laundering and tax transparency', blurb: 'Know-your-customer, source of wealth, sanctions, the common reporting standard and why banks decline clients.', minutes: 11, tags: ['kyc', 'aml', 'source of wealth', 'crs', 'fatca', 'sanctions', 'compliance', 'money laundering', 'suitability', '1mdb'] },
        { slug: 'singapore-wealth-hub', title: 'Singapore as a wealth hub and the rise of digital banks', blurb: 'Why Singapore attracts private wealth and family offices, the regulatory framework, and digital banks, fintech and open banking.', minutes: 11, tags: ['singapore', 'family office', 'wealth hub', 'digital bank', 'fintech', 'open banking', 'mas', 'gxs', 'maribank', 'trust bank'] },
      ],
    },
  ],
}
